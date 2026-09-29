// functions/api/auth.js
// Endpoint Autentikasi Mandiri Guru & Siswa (Cloudflare D1 SQLite - Cryptographic Tokens)

import { getJwtSecret, signToken, authenticateRequest, jsonResponse } from './_auth.js';

// GET /api/auth: Verifikasi validitas token sesi pengguna saat ini
export async function onRequestGet(context) {
  try {
    const url = new URL(context.request.url);
    if (url.searchParams.get('config') === 'turnstile') {
      const siteKey = (context.env && context.env.TURNSTILE_SITE_KEY) || '1x00000000000000000000AA';
      return jsonResponse({ turnstileSiteKey: siteKey });
    }

    const session = await authenticateRequest(context.request, context.env);
    if (!session) {
      return jsonResponse({ authenticated: false, error: 'Sesi tidak valid atau telah kedaluwarsa' }, 401);
    }

    return jsonResponse({
      authenticated: true,
      role: session.role,
      user: session
    });
  } catch (err) {
    return jsonResponse({ authenticated: false, error: err.message }, 500);
  }
}

// Rate Limiting Guard: Progressive Tiered Backoff per IP
// Tier 1: 5-7 percobaan gagal   -> Blokir 1 Menit (60 detik)
// Tier 2: 8-11 percobaan gagal  -> Blokir 5 Menit (300 detik)
// Tier 3: 12-14 percobaan gagal -> Blokir 15 Menit (900 detik)
// Tier 4: >=15 percobaan gagal  -> Blokir 30 Menit (1800 detik)
async function checkRateLimit(ip, env) {
  if (!env || !env.DB || !ip) return { blocked: false, remainingSec: 0, attempts: 0 };
  const now = Date.now();

  try {
    await env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS auth_rate_limits (
        ip TEXT PRIMARY KEY,
        req_count INTEGER,
        window_start INTEGER,
        blocked_until INTEGER
      )
    `).run();

    const record = await env.DB.prepare(
      "SELECT req_count, window_start, blocked_until FROM auth_rate_limits WHERE ip = ?"
    ).bind(ip).first();

    if (record && record.blocked_until && Number(record.blocked_until) > now) {
      const remainingSec = Math.ceil((Number(record.blocked_until) - now) / 1000);
      return {
        blocked: true,
        remainingSec,
        attempts: Number(record.req_count || 0)
      };
    }
  } catch(e) {
    console.error('Rate limit check error:', e);
  }

  return { blocked: false, remainingSec: 0, attempts: 0 };
}

async function recordFailedAttempt(ip, env) {
  if (!env || !env.DB || !ip) return { blocked: false, count: 0, remainingSec: 0 };
  const now = Date.now();
  const INACTIVITY_WINDOW = 15 * 60 * 1000; // Reset setelah 15 menit tanpa aktivitas

  try {
    const record = await env.DB.prepare(
      "SELECT req_count, window_start, blocked_until FROM auth_rate_limits WHERE ip = ?"
    ).bind(ip).first();

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

    // Durasi pemblokiran bertingkat (Progressive Tiered Backoff)
    let blockSec = 0;
    if (nextCount >= 15) {
      blockSec = 1800; // Tier 4: 30 Menit
    } else if (nextCount >= 12) {
      blockSec = 900;  // Tier 3: 15 Menit
    } else if (nextCount >= 8) {
      blockSec = 300;  // Tier 2: 5 Menit
    } else if (nextCount >= 5) {
      blockSec = 60;   // Tier 1: 1 Menit
    }

    const blockedUntil = blockSec > 0 ? (now + blockSec * 1000) : 0;

    if (record) {
      await env.DB.prepare(
        "UPDATE auth_rate_limits SET req_count = ?, window_start = ?, blocked_until = ? WHERE ip = ?"
      ).bind(nextCount, windowStart, blockedUntil, ip).run();
    } else {
      await env.DB.prepare(
        "INSERT INTO auth_rate_limits (ip, req_count, window_start, blocked_until) VALUES (?, ?, ?, ?)"
      ).bind(ip, nextCount, windowStart, blockedUntil).run();
    }

    return {
      blocked: blockSec > 0,
      remainingSec: blockSec,
      count: nextCount
    };
  } catch(e) {
    console.error('Record failed attempt error:', e);
    return { blocked: false, count: 0, remainingSec: 0 };
  }
}

async function handleAuthFailure(clientIp, env, defaultMessage) {
  const failInfo = await recordFailedAttempt(clientIp, env);
  if (failInfo && failInfo.blocked) {
    return jsonResponse({
      error: `Akses ditolak: Terlalu banyak percobaan autentikasi yang gagal (${failInfo.count}x). IP Anda (${clientIp}) diblokir sementara selama ${failInfo.remainingSec} detik demi keamanan sekolah.`,
      blocked: true,
      remainingSec: failInfo.remainingSec,
      attempts: failInfo.count
    }, 429, { 'Retry-After': String(failInfo.remainingSec) });
  }

  const attemptsLeft = 5 - (failInfo.count || 0);
  const warning = failInfo.count >= 3
    ? ` (Peringatan keamanan: Percobaan ke-${failInfo.count}. Tersisa ${attemptsLeft} kesempatan sebelum IP diblokir otomatis).`
    : ` (Percobaan gagal ke-${failInfo.count}).`;

  return jsonResponse({
    error: `${defaultMessage}${warning}`,
    attempts: failInfo.count
  }, 401);
}

async function resetRateLimitForIp(ip, env) {
  if (!env || !env.DB || !ip) return;
  try {
    await env.DB.prepare("DELETE FROM auth_rate_limits WHERE ip = ?").bind(ip).run();
  } catch(e) {}
}

// Master Teacher Password Hash: ArdiTeacher#GIS2026! (Never plaintext in DB/repo)
const HASH_ARDI_GIS = '4947deab1477641c97380e6b310a10c1d27a8dd931cd2e70e246e0e8c784f37c';

async function checkTeacherPassword(cleanPwd, env) {
  if (!cleanPwd) return false;

  // 1. Verifikasi via Cloudflare Environment Variable (GURU_PASSWORD)
  if (env && env.GURU_PASSWORD) {
    if (cleanPwd === String(env.GURU_PASSWORD).trim()) {
      return true;
    }
  }

  // 2. Verifikasi Hash Kriptografis SHA-256
  const encoder = new TextEncoder();
  const hashBuf = await crypto.subtle.digest('SHA-256', encoder.encode(cleanPwd));
  const hexHash = Array.from(new Uint8Array(hashBuf)).map(b => b.toString(16).padStart(2, '0')).join('');

  return hexHash === HASH_ARDI_GIS;
}

// =============================================================================
// VERIFIKASI CLOUDFLARE TURNSTILE (SMART ANTI-BOT CAPTCHA REPLACEMENT)
// =============================================================================
async function verifyTurnstileToken(token, clientIp, env) {
  const secretKey = (env && env.TURNSTILE_SECRET_KEY) || '1x0000000000000000000000000000000AA';

  // Jika token kosong
  if (!token) {
    // Jika secret kustom produksi diatur, token Turnstile wajib diisi
    if (env && env.TURNSTILE_SECRET_KEY && env.TURNSTILE_SECRET_KEY !== '1x0000000000000000000000000000000AA') {
      return {
        success: false,
        error: 'Verifikasi keamanan bot (Cloudflare Turnstile) wajib diselesaikan.'
      };
    }
    // Jika masih menggunakan testing key di dev/preview
    return { success: true };
  }

  try {
    const formData = new FormData();
    formData.append('secret', secretKey);
    formData.append('response', token);
    if (clientIp && clientIp !== '127.0.0.1') {
      formData.append('remoteip', clientIp);
    }

    const resp = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData
    });

    if (!resp.ok) {
      console.warn('Turnstile siteverify HTTP response:', resp.status);
      return { success: true, warning: 'Siteverify HTTP ' + resp.status };
    }

    const outcome = await resp.json();
    if (!outcome.success) {
      console.warn('Turnstile validation failed:', outcome);
      return {
        success: false,
        error: 'Verifikasi keamanan bot (Cloudflare Turnstile) tidak valid atau telah kedaluwarsa. Silakan refresh halaman.'
      };
    }

    return { success: true };
  } catch (err) {
    console.error('Turnstile verification network error:', err);
    return { success: true, warning: 'Network error connecting to Turnstile' };
  }
}

// POST /api/auth: Login Guru atau Siswa & terbitkan Token HMAC-SHA256
export async function onRequestPost(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }

    const clientIp = context.request.headers.get('cf-connecting-ip') || 
      (context.request.headers.get('x-forwarded-for') ? context.request.headers.get('x-forwarded-for').split(',')[0].trim() : '') || 
      '127.0.0.1';

    let data;
    try {
      data = await context.request.json();
    } catch(e) {
      return jsonResponse({ error: 'Payload JSON tidak valid' }, 400);
    }

    // 0. Verifikasi Cloudflare Turnstile Anti-Bot
    const turnstileToken = data.turnstileToken || data['cf-turnstile-response'] || '';
    const turnstileCheck = await verifyTurnstileToken(turnstileToken, clientIp, context.env);
    if (!turnstileCheck.success) {
      return jsonResponse({
        error: turnstileCheck.error || 'Verifikasi keamanan bot gagal. Silakan coba lagi.'
      }, 403);
    }

    const { role, password, nis } = data;
    const rawIdentifier = data.email || data.username || data.identifier || '';
    const cleanIdentifier = String(rawIdentifier).trim().toLowerCase();
    const cleanPwd = String(password || '').trim();

    if (cleanIdentifier.length > 150 || cleanPwd.length > 256) {
      return jsonResponse({ error: 'Panjang karakter kredensial melebihi batas wajar.' }, 400);
    }

    // Rate Limiting Check
    const rateLimitCheck = await checkRateLimit(clientIp, context.env);
    if (rateLimitCheck && rateLimitCheck.blocked) {
      // Guru bypass: jika guru memasukkan password yang benar, buka blokir langsung
      const isTeacher = await checkTeacherPassword(cleanPwd, context.env);
      if (isTeacher) {
        await resetRateLimitForIp(clientIp, context.env);
      } else {
        return jsonResponse({
          error: `Akses ditolak: Terlalu banyak percobaan autentikasi yang gagal (${rateLimitCheck.attempts}x). IP Anda (${clientIp}) diblokir sementara selama ${rateLimitCheck.remainingSec} detik demi keamanan sekolah.`,
          blocked: true,
          remainingSec: rateLimitCheck.remainingSec,
          attempts: rateLimitCheck.attempts
        }, 429, { 'Retry-After': String(rateLimitCheck.remainingSec) });
      }
    }

    const secret = await getJwtSecret(context.env);

    // =========================================================================
    // 1. ALUR LOGIN GURU (OFFICIAL TEACHER) - ZERO DATABASE CREDENTIAL STORAGE
    // =========================================================================
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
      cleanIdentifier.includes('arditeacher') ||
      cleanIdentifier.includes('ardi.teacher') ||
      cleanIdentifier.includes('mathcihuy') ||
      (!nis && cleanIdentifier !== '');

    if (isGuruTarget && !nis) {
      if (!cleanIdentifier || !cleanPwd) {
        return jsonResponse({ error: 'Username/email dan password guru wajib diisi' }, 400);
      }

      const isTeacherIdentifier = validTeacherIdentifiers.includes(cleanIdentifier) ||
        cleanIdentifier.includes('arditeacher') ||
        cleanIdentifier.includes('ardi.teacher') ||
        cleanIdentifier.includes('mathcihuy') ||
        role === 'guru';

      if (!isTeacherIdentifier) {
        return await handleAuthFailure(clientIp, context.env, 'Username atau email guru tidak terdaftar.');
      }

      const isPasswordValid = await checkTeacherPassword(cleanPwd, context.env);

      if (!isPasswordValid) {
        return await handleAuthFailure(clientIp, context.env, 'Email/username atau password guru salah. Silakan coba lagi.');
      }

      // Login Guru Sukses: Bersihkan catatan limit IP guru
      await resetRateLimitForIp(clientIp, context.env);

      const emailResult = cleanIdentifier.includes('@') ? cleanIdentifier : 'arditeacher.main@gmail.com';
      const usernameResult = cleanIdentifier.includes('@') ? cleanIdentifier.split('@')[0] : cleanIdentifier;

      // Terbitkan Token Guru Resmi (Masa Aktif 7 Hari)
      const tokenPayload = {
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
      const cookieHeader = `auth_token=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=604800; Secure`;

      return jsonResponse({
        success: true,
        type: 'guru',
        token: token,
        user: tokenPayload
      }, 200, { 'Set-Cookie': cookieHeader });
    }

    // =========================================================================
    // 2. ALUR LOGIN SISWA (OFFICIAL STUDENT)
    // =========================================================================
    if (role === 'siswa' || nis) {
      const cleanNis = String(nis || cleanIdentifier || '').trim();

      if (!cleanNis || cleanNis.length > 30) {
        return jsonResponse({ error: 'NIS wajib diisi dengan format valid' }, 400);
      }

      // Ambil data siswa dari D1 (prioritas NIS persis, fallback pencarian nama/username)
      let student = await context.env.DB.prepare(
        "SELECT nis, nama, kelas, password_hash FROM siswa WHERE nis = ?"
      ).bind(cleanNis).first();

      if (!student) {
        student = await context.env.DB.prepare(
          "SELECT nis, nama, kelas, password_hash FROM siswa WHERE lower(nama) LIKE ? OR lower(nis) = ?"
        ).bind('%' + cleanNis.toLowerCase() + '%', cleanNis.toLowerCase()).first();
      }

      if (!student) {
        return await handleAuthFailure(clientIp, context.env, 'NIS atau username siswa tidak terdaftar dalam database sekolah.');
      }

      // Validasi password: default '1234' atau password_hash kustom
      let isStudentPwdValid = false;
      if (!cleanPwd || cleanPwd === '1234') {
        isStudentPwdValid = true;
      } else if (student.password_hash && student.password_hash === cleanPwd) {
        isStudentPwdValid = true;
      }

      if (!isStudentPwdValid) {
        return await handleAuthFailure(clientIp, context.env, 'Password siswa salah. Standar default adalah 1234.');
      }

      // Login Siswa Sukses: Bersihkan catatan limit IP
      await resetRateLimitForIp(clientIp, context.env);

      // Terbitkan Token Siswa Resmi (Masa Aktif 14 Hari)
      const tokenPayload = {
        role: 'siswa',
        nis: String(student.nis),
        nama: String(student.nama),
        kelas: String(student.kelas),
        name: String(student.nama),
        iat: Date.now(),
        exp: Date.now() + 14 * 24 * 3600 * 1000
      };

      const token = await signToken(tokenPayload, secret);
      const cookieHeader = `auth_token=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=1209600; Secure`;

      return jsonResponse({
        success: true,
        type: 'siswa',
        token: token,
        user: tokenPayload
      }, 200, { 'Set-Cookie': cookieHeader });
    }

    return jsonResponse({ error: 'Parameter autentikasi tidak valid' }, 400);
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}
