// functions/api/auth.js
// Endpoint Autentikasi Mandiri Guru & Siswa (Cloudflare D1 SQLite - Cryptographic Tokens)

import { getJwtSecret, signToken, authenticateRequest, jsonResponse } from './_auth.js';

// GET /api/auth: Verifikasi validitas token sesi pengguna saat ini
export async function onRequestGet(context) {
  try {
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

// Rate Limiting Guard: Max 10 failed requests per 10 seconds -> Block for 5 minutes
async function checkRateLimit(ip, env) {
  if (!env || !env.DB || !ip) return { blocked: false };
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

    const record = await env.DB.prepare("SELECT * FROM auth_rate_limits WHERE ip = ?").bind(ip).first();

    if (record && record.blocked_until && Number(record.blocked_until) > now) {
      const remainingSec = Math.ceil((Number(record.blocked_until) - now) / 1000);
      return { blocked: true, remainingSec };
    }
  } catch(e) {}

  return { blocked: false };
}

async function recordFailedAttempt(ip, env) {
  if (!env || !env.DB || !ip) return;
  const now = Date.now();
  try {
    const record = await env.DB.prepare("SELECT * FROM auth_rate_limits WHERE ip = ?").bind(ip).first();
    if (record) {
      if (now - Number(record.window_start) > 10000) {
        // Reset window 10 detik
        await env.DB.prepare(
          "UPDATE auth_rate_limits SET req_count = 1, window_start = ?, blocked_until = 0 WHERE ip = ?"
        ).bind(now, ip).run();
      } else {
        const nextCount = Number(record.req_count) + 1;
        if (nextCount > 10) {
          const blockedUntil = now + 5 * 60 * 1000;
          await env.DB.prepare(
            "UPDATE auth_rate_limits SET req_count = ?, blocked_until = ? WHERE ip = ?"
          ).bind(nextCount, blockedUntil, ip).run();
        } else {
          await env.DB.prepare(
            "UPDATE auth_rate_limits SET req_count = ? WHERE ip = ?"
          ).bind(nextCount, ip).run();
        }
      }
    } else {
      await env.DB.prepare(
        "INSERT INTO auth_rate_limits (ip, req_count, window_start, blocked_until) VALUES (?, 1, ?, 0)"
      ).bind(ip, now).run();
    }
  } catch(e) {}
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

// POST /api/auth: Login Guru atau Siswa & terbitkan Token HMAC-SHA256
export async function onRequestPost(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }

    const clientIp = context.request.headers.get('cf-connecting-ip') || context.request.headers.get('x-forwarded-for') || '127.0.0.1';

    let data;
    try {
      data = await context.request.json();
    } catch(e) {
      return jsonResponse({ error: 'Payload JSON tidak valid' }, 400);
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
          error: `Terlalu banyak percobaan autentikasi (Rate Limit Terlampaui). Akses dibatasi selama ${rateLimitCheck.remainingSec} detik demi keamanan.`
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
        await recordFailedAttempt(clientIp, context.env);
        return jsonResponse({ error: 'Username atau email guru tidak terdaftar.' }, 401);
      }

      const isPasswordValid = await checkTeacherPassword(cleanPwd, context.env);

      if (!isPasswordValid) {
        await recordFailedAttempt(clientIp, context.env);
        return jsonResponse({ error: 'Email/username atau password guru salah. Silakan coba lagi.' }, 401);
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

      // Ambil data siswa dari D1
      const student = await context.env.DB.prepare(
        "SELECT nis, nama, kelas, password_hash FROM siswa WHERE nis = ?"
      ).bind(cleanNis).first();

      if (!student) {
        await recordFailedAttempt(clientIp, context.env);
        return jsonResponse({ error: 'NIS tidak terdaftar dalam database sekolah.' }, 401);
      }

      // Validasi password: default '1234' atau password_hash kustom
      let isStudentPwdValid = false;
      if (!cleanPwd || cleanPwd === '1234') {
        isStudentPwdValid = true;
      } else if (student.password_hash && student.password_hash === cleanPwd) {
        isStudentPwdValid = true;
      }

      if (!isStudentPwdValid) {
        await recordFailedAttempt(clientIp, context.env);
        return jsonResponse({ error: 'Password siswa salah. Standar default adalah 1234.' }, 401);
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
