// functions/api/auth.js
// Endpoint Autentikasi Mandiri Guru & Siswa (Cloudflare D1 SQLite - Hardened Security)

import {
  getJwtSecret,
  signToken,
  authenticateRequest,
  jsonResponse,
  hashPasswordPBKDF2,
  verifyPasswordPBKDF2,
  sha256Hex,
  timingSafeEqualStr,
  revokeSubjectTokens,
  getSubjectForSession,
  getSessionRevokeKey,
  buildAuthCookie
} from './_auth.js';

function isDummyTurnstileKey(k) {
  return !k || String(k).trim().startsWith('1x0000') || String(k).trim().startsWith('2x0000') || String(k).trim().startsWith('3x0000');
}

function sanitizeUserResponse(payload) {
  if (!payload) return null;
  return {
    role: payload.role,
    id: payload.id || undefined,
    email: payload.email || undefined,
    username: payload.username || undefined,
    nis: payload.nis || undefined,
    nama: payload.nama,
    name: payload.name || payload.nama,
    kelas: payload.kelas || undefined,
    access_level: payload.access_level || undefined,
    must_change_password: Boolean(payload.must_change_password)
  };
}

// GET /api/auth: Verifikasi validitas sesi aktif atau konfigurasi publik Turnstile
export async function onRequestGet(context) {
  try {
    const url = new URL(context.request.url);
    if (url.searchParams.get('config') === 'turnstile') {
      const siteKey = (context.env && context.env.TURNSTILE_SITE_KEY) ? String(context.env.TURNSTILE_SITE_KEY).trim() : '';
      const secretKey = (context.env && context.env.TURNSTILE_SECRET_KEY) ? String(context.env.TURNSTILE_SECRET_KEY).trim() : '';
      const devBypass = context.env && context.env.ALLOW_DEV_TURNSTILE_BYPASS === 'true';
      const configured = Boolean(siteKey && secretKey && !isDummyTurnstileKey(siteKey) && !isDummyTurnstileKey(secretKey));
      return jsonResponse({
        turnstileSiteKey: configured ? siteKey : '',
        turnstileRequired: !devBypass
      });
    }

    const session = await authenticateRequest(context.request, context.env);
    if (!session) {
      return jsonResponse({ authenticated: false, error: 'Sesi tidak valid atau telah kedaluwarsa' }, 401);
    }

    return jsonResponse({
      authenticated: true,
      role: session.role,
      user: sanitizeUserResponse(session)
    });
  } catch (err) {
    return jsonResponse({ authenticated: false, error: err.message }, 500);
  }
}

// DELETE /api/auth: Logout resmi (hanya menghentikan sesi jti browser ini)
export async function onRequestDelete(context) {
  const session = await authenticateRequest(context.request, context.env);
  if (session && context.env?.DB) {
    const revokeKey = getSessionRevokeKey(session);
    if (revokeKey) {
      await revokeSubjectTokens(context.env.DB, revokeKey);
    }
  }
  const clearCookie = buildAuthCookie(context.request, '', 0);
  return jsonResponse({ success: true, message: 'Sesi telah dihentikan.' }, 200, { 'Set-Cookie': clearCookie });
}

// Rate Limiting Guard: Progressive Tiered Backoff per (IP + Akun) & ambang aman Wi-Fi Sekolah bersama
let _rateLimitTableEnsured = false;
async function ensureRateLimitTable(db) {
  if (_rateLimitTableEnsured) return;
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS auth_rate_limits (
      ip TEXT PRIMARY KEY,
      req_count INTEGER,
      window_start INTEGER,
      blocked_until INTEGER
    )
  `).run();
  _rateLimitTableEnsured = true;
}

async function checkRateLimit(keys, env) {
  if (!env || !env.DB || !keys || keys.length === 0) return { blocked: false, remainingSec: 0, attempts: 0 };
  const now = Date.now();
  try {
    await ensureRateLimitTable(env.DB);
    for (const key of keys) {
      const record = await env.DB.prepare(
        "SELECT req_count, window_start, blocked_until FROM auth_rate_limits WHERE ip = ?"
      ).bind(key).first();
      if (record && record.blocked_until && Number(record.blocked_until) > now) {
        return {
          blocked: true,
          remainingSec: Math.ceil((Number(record.blocked_until) - now) / 1000),
          attempts: Number(record.req_count || 0)
        };
      }
    }
  } catch (e) {
    console.error('Rate limit check error:', e);
  }
  return { blocked: false, remainingSec: 0, attempts: 0 };
}

async function bumpRateKey(key, ipThresholdMultiplier, env) {
  const now = Date.now();
  const INACTIVITY_WINDOW = 15 * 60 * 1000;
  const record = await env.DB.prepare(
    "SELECT req_count, window_start, blocked_until FROM auth_rate_limits WHERE ip = ?"
  ).bind(key).first();

  let nextCount = 1;
  let windowStart = now;
  if (record) {
    const isExpired = (now - Number(record.window_start || 0)) > INACTIVITY_WINDOW;
    const isCurrentlyBlocked = record.blocked_until && Number(record.blocked_until) > now;
    if (isExpired && !isCurrentlyBlocked) {
      nextCount = 1;
      windowStart = now;
    } else {
      nextCount = Number(record.req_count || 0) + 1;
      windowStart = Number(record.window_start || now);
    }
  }

  let blockSec = 0;
  const m = ipThresholdMultiplier || 1;
  if (nextCount >= 15 * m) blockSec = 1800;
  else if (nextCount >= 12 * m) blockSec = 900;
  else if (nextCount >= 8 * m) blockSec = 300;
  else if (nextCount >= 5 * m) blockSec = 60;

  const blockedUntil = blockSec > 0 ? (now + blockSec * 1000) : 0;

  if (record) {
    await env.DB.prepare(
      "UPDATE auth_rate_limits SET req_count = ?, window_start = ?, blocked_until = ? WHERE ip = ?"
    ).bind(nextCount, windowStart, blockedUntil, key).run();
  } else {
    await env.DB.prepare(
      "INSERT INTO auth_rate_limits (ip, req_count, window_start, blocked_until) VALUES (?, ?, ?, ?)"
    ).bind(key, nextCount, windowStart, blockedUntil).run();
  }

  return { blocked: blockSec > 0, remainingSec: blockSec, count: nextCount };
}

async function recordFailedAttempt(acctKey, ipKey, env) {
  if (!env || !env.DB) return { blocked: false, count: 0, remainingSec: 0 };
  try {
    await ensureRateLimitTable(env.DB);
    const acctRes = acctKey ? await bumpRateKey(acctKey, 1, env) : { blocked: false, count: 0, remainingSec: 0 };
    const ipRes = ipKey ? await bumpRateKey(ipKey, 25, env) : { blocked: false, count: 0, remainingSec: 0 };
    if (ipRes.blocked && (!acctRes.blocked || ipRes.remainingSec > acctRes.remainingSec)) {
      return ipRes;
    }
    return acctRes;
  } catch (e) {
    console.error('Record failed attempt error:', e);
    return { blocked: false, count: 0, remainingSec: 0 };
  }
}

async function handleAuthFailure(acctKey, ipKey, env, defaultMessage) {
  const failInfo = await recordFailedAttempt(acctKey, ipKey, env);
  if (failInfo && failInfo.blocked) {
    return jsonResponse({
      error: `Akses ditolak: Terlalu banyak percobaan autentikasi gagal (${failInfo.count}x). Diblokir sementara selama ${failInfo.remainingSec} detik demi keamanan sekolah.`,
      blocked: true,
      remainingSec: failInfo.remainingSec,
      attempts: failInfo.count
    }, 429, { 'Retry-After': String(failInfo.remainingSec) });
  }

  const attemptsLeft = Math.max(0, 5 - (failInfo.count || 0));
  const warning = failInfo.count >= 3
    ? ` (Peringatan keamanan: Percobaan ke-${failInfo.count}. Tersisa ${attemptsLeft} kesempatan sebelum diblokir sementara).`
    : ` (Percobaan gagal ke-${failInfo.count}).`;

  return jsonResponse({
    error: `${defaultMessage}${warning}`,
    attempts: failInfo.count
  }, 401);
}

async function resetRateLimitKeys(keys, env) {
  if (!env || !env.DB || !keys) return;
  for (const k of keys) {
    try {
      await env.DB.prepare("DELETE FROM auth_rate_limits WHERE ip = ?").bind(k).run();
    } catch (_) {}
  }
}

function hasTeacherSecretConfigured(env) {
  return Boolean(
    env && (
      (env.GURU_PASSWORD_HASH && String(env.GURU_PASSWORD_HASH).trim().length > 0) ||
      (env.GURU_PASSWORD && String(env.GURU_PASSWORD).trim().length > 0)
    )
  );
}

async function checkTeacherPassword(cleanPwd, env) {
  if (!cleanPwd || !env) return false;

  if (env.GURU_PASSWORD_HASH && String(env.GURU_PASSWORD_HASH).trim()) {
    const stored = String(env.GURU_PASSWORD_HASH).trim();
    if (stored.startsWith('pbkdf2_sha256$')) {
      return await verifyPasswordPBKDF2(cleanPwd, stored);
    }
    const inputHex = await sha256Hex(cleanPwd);
    return timingSafeEqualStr(inputHex, stored.toLowerCase());
  }

  if (env.GURU_PASSWORD && String(env.GURU_PASSWORD).trim()) {
    const inputHex = await sha256Hex(cleanPwd);
    const expectedHex = await sha256Hex(String(env.GURU_PASSWORD).trim());
    return timingSafeEqualStr(inputHex, expectedHex);
  }

  return false;
}

// =============================================================================
// VERIFIKASI CLOUDFLARE TURNSTILE (FAIL-CLOSED PRODUCTION ANTI-BOT)
// =============================================================================
async function verifyTurnstileToken(token, clientIp, env) {
  if (env && env.ALLOW_DEV_TURNSTILE_BYPASS === 'true') {
    return { success: true };
  }

  const secretKey = (env && env.TURNSTILE_SECRET_KEY) ? String(env.TURNSTILE_SECRET_KEY).trim() : '';
  const siteKey = (env && env.TURNSTILE_SITE_KEY) ? String(env.TURNSTILE_SITE_KEY).trim() : '';

  if (isDummyTurnstileKey(secretKey) || isDummyTurnstileKey(siteKey)) {
    return {
      success: false,
      status: 503,
      error: 'Keamanan anti-bot (Cloudflare Turnstile produksi) belum dikonfigurasi pada server. Hubungi administrator sekolah.'
    };
  }

  if (!token || typeof token !== 'string' || token.trim().length === 0) {
    return {
      success: false,
      status: 403,
      error: 'Verifikasi keamanan bot (Cloudflare Turnstile) wajib diselesaikan.'
    };
  }

  try {
    const formData = new FormData();
    formData.append('secret', secretKey);
    formData.append('response', token.trim());
    if (clientIp && clientIp !== '127.0.0.1') {
      formData.append('remoteip', clientIp);
    }

    const resp = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData
    });

    if (!resp.ok) {
      console.warn('Turnstile siteverify HTTP error:', resp.status);
      return {
        success: false,
        status: 503,
        error: 'Layanan verifikasi anti-bot sedang bermasalah. Silakan coba beberapa saat lagi.'
      };
    }

    const outcome = await resp.json();
    if (!outcome.success) {
      console.warn('Turnstile validation failed:', outcome);
      return {
        success: false,
        status: 403,
        error: 'Verifikasi keamanan bot (Cloudflare Turnstile) tidak valid atau telah kedaluwarsa. Silakan muat ulang halaman.'
      };
    }

    return { success: true };
  } catch (err) {
    console.error('Turnstile verification network error:', err);
    return {
      success: false,
      status: 503,
      error: 'Gagal menghubungi server verifikasi anti-bot. Coba ulangi beberapa saat lagi.'
    };
  }
}

async function verifyStudentPassword(cleanPwd, student) {
  if (!cleanPwd) return { valid: false, mustChange: false, needsUpgrade: false };
  const stored = student && student.password_hash ? String(student.password_hash).trim() : '';

  // 1. Akun sudah memakai PBKDF2-SHA256
  if (stored.startsWith('pbkdf2_sha256$')) {
    const ok = await verifyPasswordPBKDF2(cleanPwd, stored);
    return { valid: ok, mustChange: false, needsUpgrade: false };
  }

  // 2. Akun punya hash/password kustom non-default (upgrade diam-diam ke PBKDF2 saat login benar)
  if (stored && stored !== '1234') {
    const inputHex = await sha256Hex(cleanPwd);
    const ok = timingSafeEqualStr(cleanPwd, stored) || timingSafeEqualStr(inputHex, stored.toLowerCase());
    return { valid: ok, mustChange: false, needsUpgrade: ok };
  }

  // 3. Akun onboarding awal (NULL / '1234'): wajib langsung buat password pribadi setelah masuk
  if (cleanPwd === '1234') {
    return { valid: true, mustChange: true, needsUpgrade: false };
  }

  return { valid: false, mustChange: false, needsUpgrade: false };
}

export async function onRequestPost(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }

    let data;
    try {
      data = await context.request.json();
    } catch (e) {
      return jsonResponse({ error: 'Payload JSON tidak valid' }, 400);
    }

    const action = String(data.action || '').trim().toLowerCase();

    // A. LOGOUT (Clear HttpOnly Cookie + Revoke JWT)
    if (action === 'logout') {
      return await onRequestDelete(context);
    }

    // B. GENERATE KODE TAUTAN DISCORD SEKALI PAKAI (Authenticated Siswa)
    if (action === 'discord_link_code') {
      const session = await authenticateRequest(context.request, context.env);
      if (!session || session.role !== 'siswa' || !session.nis) {
        return jsonResponse({ error: 'Silakan login sebagai siswa untuk membuat kode tautan Discord.' }, 401);
      }
      await context.env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS discord_link_codes (
          code TEXT PRIMARY KEY,
          nis TEXT NOT NULL,
          expires_at INTEGER NOT NULL
        )
      `).run();

      await context.env.DB.prepare("DELETE FROM discord_link_codes WHERE nis = ? OR expires_at < ?")
        .bind(String(session.nis), Date.now()).run();

      const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
      const rnd = new Uint8Array(8);
      crypto.getRandomValues(rnd);
      let code = '';
      for (let i = 0; i < 8; i++) code += alphabet[rnd[i] % alphabet.length];

      await context.env.DB.prepare(
        "INSERT INTO discord_link_codes (code, nis, expires_at) VALUES (?, ?, ?)"
      ).bind(code, String(session.nis), Date.now() + 10 * 60 * 1000).run();

      return jsonResponse({ success: true, code, expires_in_sec: 600 });
    }

    // C. GANTI PASSWORD SISWA (Authenticated Siswa)
    if (action === 'change_password') {
      const session = await authenticateRequest(context.request, context.env);
      if (!session || session.role !== 'siswa' || !session.nis) {
        return jsonResponse({ error: 'Sesi autentikasi siswa tidak valid.' }, 401);
      }

      const oldPwd = String(data.current_password || '').trim();
      const newPwd = String(data.new_password || '').trim();
      if (!oldPwd || !newPwd) {
        return jsonResponse({ error: 'Password lama dan password baru wajib diisi.' }, 400);
      }
      if (newPwd.length < 8 || newPwd.length > 128) {
        return jsonResponse({ error: 'Password baru minimal 8 karakter dan maksimal 128 karakter.' }, 400);
      }
      if (newPwd === '1234' || newPwd === '12345678' || newPwd === String(session.nis)) {
        return jsonResponse({ error: 'Gunakan password yang kuat — tidak boleh memakai 1234, 12345678, atau NIS.' }, 400);
      }

      const student = await context.env.DB.prepare(
        "SELECT nis, nama, kelas, password_hash FROM siswa WHERE nis = ?"
      ).bind(String(session.nis)).first();

      if (!student) {
        return jsonResponse({ error: 'Akun siswa tidak ditemukan.' }, 404);
      }

      const pwdCheck = await verifyStudentPassword(oldPwd, student);
      if (!pwdCheck.valid) {
        return jsonResponse({ error: 'Password lama tidak sesuai.' }, 401);
      }

      const newHash = await hashPasswordPBKDF2(newPwd);
      await context.env.DB.prepare(
        "UPDATE siswa SET password_hash = ? WHERE nis = ?"
      ).bind(newHash, String(student.nis)).run();

      await revokeSubjectTokens(context.env.DB, `siswa:${student.nis}`);

      const secret = await getJwtSecret(context.env);
      const isAlumni = String(student.kelas || '').toLowerCase().includes('alumni');
      const tokenPayload = {
        role: 'siswa',
        nis: String(student.nis),
        nama: String(student.nama),
        kelas: String(student.kelas),
        name: String(student.nama),
        access_level: isAlumni ? 'all' : (String(student.kelas).includes('F3') || String(student.kelas).includes('F4') ? 'full' : 'wajib_only'),
        must_change_password: false,
        iat: Date.now() + 1,
        exp: Date.now() + 14 * 24 * 3600 * 1000
      };
      const newToken = await signToken(tokenPayload, secret);
      const cookieHeader = buildAuthCookie(context.request, newToken, 1209600);

      return jsonResponse({
        success: true,
        message: 'Password berhasil diperbarui dengan enkripsi PBKDF2!',
        user: sanitizeUserResponse(tokenPayload)
      }, 200, { 'Set-Cookie': cookieHeader });
    }

    // D. RESET PASSWORD SISWA OLEH GURU (Guru Only)
    if (action === 'admin_reset_student_password') {
      const session = await authenticateRequest(context.request, context.env);
      if (!session || session.role !== 'guru') {
        return jsonResponse({ error: 'Akses dilarang (403): Hanya guru yang dapat mereset password siswa.' }, 403);
      }
      const targetNis = String(data.nis || '').trim();
      if (!targetNis) {
        return jsonResponse({ error: 'NIS siswa wajib diisi.' }, 400);
      }
      await context.env.DB.prepare("UPDATE siswa SET password_hash = NULL WHERE nis = ?").bind(targetNis).run();
      await revokeSubjectTokens(context.env.DB, `siswa:${targetNis}`);
      return jsonResponse({
        success: true,
        message: `Password siswa NIS ${targetNis} direset ke mode onboarding awal (wajib buat password baru saat login berikutnya) dan sesi lamanya telah dicabut.`
      });
    }

    // =========================================================================
    // LOGIN FLOW (SISWA / GURU)
    // =========================================================================
    const clientIp = context.request.headers.get('cf-connecting-ip') ||
      (context.request.headers.get('x-forwarded-for') ? context.request.headers.get('x-forwarded-for').split(',')[0].trim() : '') ||
      '127.0.0.1';

    const turnstileToken = data.turnstileToken || data['cf-turnstile-response'] || '';
    const turnstileCheck = await verifyTurnstileToken(turnstileToken, clientIp, context.env);
    if (!turnstileCheck.success) {
      return jsonResponse({
        error: turnstileCheck.error || 'Verifikasi keamanan bot gagal. Silakan coba lagi.'
      }, turnstileCheck.status || 403);
    }

    const { role, password, nis } = data;
    const rawIdentifier = data.email || data.username || data.identifier || '';
    const cleanIdentifier = String(rawIdentifier).trim().toLowerCase();
    const cleanPwd = String(password || '').trim();

    if (cleanIdentifier.length > 150 || cleanPwd.length > 256) {
      return jsonResponse({ error: 'Panjang karakter kredensial melebihi batas wajar.' }, 400);
    }

    const cleanNisRaw = String(nis || cleanIdentifier || '').trim();
    const canonicalNis = cleanNisRaw.toLowerCase() === 'aunillah' ? '23400016' : cleanNisRaw;
    const isGuruAttempt = role === 'guru' || (!nis && !/^\d+$/.test(cleanIdentifier));
    const acctRateKey = `${clientIp}:${isGuruAttempt ? ('guru:' + (cleanIdentifier || 'guru')) : ('nis:' + canonicalNis.toLowerCase())}`;
    const ipRateKey = `${clientIp}:*`;

    const rateLimitCheck = await checkRateLimit([acctRateKey, ipRateKey], context.env);
    if (rateLimitCheck && rateLimitCheck.blocked) {
      return jsonResponse({
        error: `Akses ditolak: Terlalu banyak percobaan autentikasi gagal (${rateLimitCheck.attempts}x). Silakan tunggu ${rateLimitCheck.remainingSec} detik sebelum mencoba kembali.`,
        blocked: true,
        remainingSec: rateLimitCheck.remainingSec,
        attempts: rateLimitCheck.attempts
      }, 429, { 'Retry-After': String(rateLimitCheck.remainingSec) });
    }

    const secret = await getJwtSecret(context.env);

    // 1. ALUR LOGIN GURU (Murni Environment Secret — Tanpa Hardcoded Fallback)
    const validTeacherIdentifiers = [
      'arditeacher.main@gmail.com',
      'ardi.teacher2@gmail.com',
      'guru@mathcihuy.id',
      'arditeacher',
      'arditeacher.main',
      'ardi.teacher',
      'mathcihuy',
      'guru',
      'ardi'
    ];

    const isGuruTarget = role === 'guru' ||
      validTeacherIdentifiers.includes(cleanIdentifier) ||
      (!role && !nis && cleanIdentifier !== '');

    if (role !== 'siswa' && isGuruTarget && !nis) {
      if (!hasTeacherSecretConfigured(context.env)) {
        return jsonResponse({
          error: 'Konfigurasi GURU_PASSWORD / GURU_PASSWORD_HASH belum diatur di Cloudflare Environment Variables.'
        }, 503);
      }

      if (!cleanIdentifier || !cleanPwd) {
        return jsonResponse({ error: 'Username/email dan password guru wajib diisi.' }, 400);
      }

      const isTeacherIdentifier = validTeacherIdentifiers.includes(cleanIdentifier);
      if (!isTeacherIdentifier) {
        return await handleAuthFailure(acctRateKey, ipRateKey, context.env, 'Username atau email guru tidak terdaftar.');
      }

      const isPasswordValid = await checkTeacherPassword(cleanPwd, context.env);
      if (!isPasswordValid) {
        return await handleAuthFailure(acctRateKey, ipRateKey, context.env, 'Email/username atau password guru salah.');
      }

      await resetRateLimitKeys([acctRateKey], context.env);

      const emailResult = cleanIdentifier.includes('@') ? cleanIdentifier : 'arditeacher.main@gmail.com';
      const usernameResult = cleanIdentifier.includes('@') ? cleanIdentifier.split('@')[0] : cleanIdentifier;

      const tokenPayload = {
        jti: crypto.randomUUID(),
        role: 'guru',
        id: 'guru_ardi',
        email: emailResult,
        username: usernameResult,
        name: 'M. Ardiansyah, S.Pd.Gr.',
        nama: 'M. Ardiansyah, S.Pd.Gr.',
        access_level: 'full',
        iat: Date.now(),
        exp: Date.now() + 7 * 24 * 3600 * 1000
      };

      const token = await signToken(tokenPayload, secret);
      const cookieHeader = buildAuthCookie(context.request, token, 604800);

      return jsonResponse({
        success: true,
        type: 'guru',
        must_change_password: false,
        user: sanitizeUserResponse(tokenPayload)
      }, 200, { 'Set-Cookie': cookieHeader });
    }

    // 2. ALUR LOGIN SISWA (Exact NIS Only • Non-Empty Password • PBKDF2-SHA256)
    if (role === 'siswa' || nis) {
      if (!canonicalNis || canonicalNis.length > 30) {
        return jsonResponse({ error: 'NIS wajib diisi dengan format valid.' }, 400);
      }
      if (!cleanPwd) {
        return jsonResponse({ error: 'Password wajib diisi.' }, 400);
      }

      const student = await context.env.DB.prepare(
        "SELECT nis, nama, kelas, password_hash FROM siswa WHERE nis = ?"
      ).bind(canonicalNis).first();

      if (!student) {
        return await handleAuthFailure(acctRateKey, ipRateKey, context.env, 'NIS atau password siswa salah.');
      }

      const pwdResult = await verifyStudentPassword(cleanPwd, student);
      if (!pwdResult.valid) {
        return await handleAuthFailure(acctRateKey, ipRateKey, context.env, 'NIS atau password siswa salah.');
      }

      if (pwdResult.needsUpgrade) {
        try {
          const upgradedHash = await hashPasswordPBKDF2(cleanPwd);
          await context.env.DB.prepare("UPDATE siswa SET password_hash = ? WHERE nis = ?")
            .bind(upgradedHash, String(student.nis)).run();
        } catch (_) {}
      }

      await resetRateLimitKeys([acctRateKey], context.env);

      const isAlumni = String(student.kelas || '').toLowerCase().includes('alumni');
      const tokenPayload = {
        jti: crypto.randomUUID(),
        role: 'siswa',
        nis: String(student.nis),
        nama: String(student.nama),
        kelas: String(student.kelas),
        name: String(student.nama),
        access_level: isAlumni ? 'all' : (String(student.kelas).includes('F3') || String(student.kelas).includes('F4') ? 'full' : 'wajib_only'),
        must_change_password: Boolean(pwdResult.mustChange),
        iat: Date.now(),
        exp: Date.now() + 14 * 24 * 3600 * 1000
      };

      const token = await signToken(tokenPayload, secret);
      const cookieHeader = buildAuthCookie(context.request, token, 1209600);

      return jsonResponse({
        success: true,
        type: 'siswa',
        must_change_password: Boolean(pwdResult.mustChange),
        user: sanitizeUserResponse(tokenPayload)
      }, 200, { 'Set-Cookie': cookieHeader });
    }

    return jsonResponse({ error: 'Parameter autentikasi tidak valid' }, 400);
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}
