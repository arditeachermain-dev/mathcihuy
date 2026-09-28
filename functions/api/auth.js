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

// POST /api/auth: Login Guru atau Siswa & terbitkan Token HMAC-SHA256
export async function onRequestPost(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }

    const data = await context.request.json();
    const { role, email, password, nis } = data;
    const secret = await getJwtSecret(context.env);

    // =========================================================================
    // 1. ALUR LOGIN GURU (OFFICIAL TEACHER)
    // =========================================================================
    if (role === 'guru' || (email && !nis)) {
      if (!email || !password) {
        return jsonResponse({ error: 'Email dan password guru wajib diisi' }, 400);
      }

      const cleanEmail = String(email).trim().toLowerCase();
      const cleanPwd = String(password).trim();

      const validEmails = ['arditeacher.main@gmail.com', 'ardi.teacher2@gmail.com', 'guru@mathcihuy.id'];
      const isGuruEmail = validEmails.includes(cleanEmail) || cleanEmail.includes('arditeacher') || cleanEmail.includes('ardi.teacher');

      if (!isGuruEmail) {
        return jsonResponse({ error: 'Email resmi guru tidak terdaftar.' }, 401);
      }

      let isPasswordValid = false;

      // Kredensial Resmi Guru GIS 2 Serpong
      if (cleanPwd === 'gis2cihuy' || cleanPwd === 'guruguru' || cleanPwd === 'mathcihuy2026') {
        isPasswordValid = true;
      }

      // Cek password tersimpan di tabel guru D1 jika ada
      if (!isPasswordValid) {
        try {
          await context.env.DB.prepare(`
            CREATE TABLE IF NOT EXISTS guru (
              email TEXT PRIMARY KEY,
              password_hash TEXT,
              nama TEXT,
              role TEXT
            )
          `).run();

          const existing = await context.env.DB.prepare("SELECT * FROM guru WHERE email = ?").bind(cleanEmail).first();
          if (existing && (existing.password_hash === cleanPwd || existing.password_hash === 'gis2cihuy')) {
            isPasswordValid = true;
          }
        } catch(e) {}
      }

      if (!isPasswordValid) {
        return jsonResponse({ error: 'Email atau password guru salah. Silakan coba lagi.' }, 401);
      }

      // Terbitkan Token Guru Resmi (Masa Aktif 7 Hari)
      const tokenPayload = {
        role: 'guru',
        id: 'guru_ardi',
        email: cleanEmail,
        username: cleanEmail.split('@')[0],
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
      const cleanNis = String(nis || '').trim();
      const cleanPwd = String(password || '').trim();

      if (!cleanNis) {
        return jsonResponse({ error: 'NIS wajib diisi' }, 400);
      }

      // Ambil data siswa dari D1
      const student = await context.env.DB.prepare(
        "SELECT nis, nama, kelas, password_hash FROM siswa WHERE nis = ?"
      ).bind(cleanNis).first();

      if (!student) {
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
        return jsonResponse({ error: 'Password siswa salah. Standar default adalah 1234.' }, 401);
      }

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
