// functions/api/auth.js
// Endpoint Autentikasi Mandiri Guru & Siswa (Cloudflare D1 SQLite - Zero Supabase Dependency)

export async function onRequestPost(context) {
  try {
    const data = await context.request.json();
    const { email, password } = data;

    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Email dan password wajib diisi' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const cleanEmail = String(email).trim().toLowerCase();
    const cleanPwd = String(password).trim();

    // 1. Validasi Akun Guru Resmi SMA GIS 2 Serpong
    const validEmails = ['arditeacher.main@gmail.com', 'ardi.teacher2@gmail.com', 'guru@mathcihuy.id'];
    const isGuruEmail = validEmails.includes(cleanEmail) || cleanEmail.includes('arditeacher') || cleanEmail.includes('ardi.teacher');

    if (isGuruEmail) {
      let isPasswordValid = false;

      // Kredensial Resmi Guru GIS 2 Serpong & Fallback Passwords
      if (cleanPwd === 'gis2cihuy' || cleanPwd === 'guruguru' || cleanPwd === 'mathcihuy2026') {
        isPasswordValid = true;
      }

      // Cek apakah password tersimpan di tabel guru D1
      if (!isPasswordValid && context.env && context.env.DB) {
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

      // Sinkronisasi otomatis ke Supabase Auth jika masih aktif (transisi halus)
      if (!isPasswordValid) {
        try {
          const sbResp = await fetch("https://pecvxqguqtancizghnhj.supabase.co/auth/v1/token?grant_type=password", {
            method: "POST",
            headers: {
              "apikey": "sb_publishable_K51BV-D7yLxnXdYg7auMeA_uzxPSy1c",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: cleanEmail, password: cleanPwd })
          });
          if (sbResp.ok) {
            isPasswordValid = true;
            // Rekam password ke D1 agar mandiri selamanya
            if (context.env && context.env.DB) {
              try {
                await context.env.DB.prepare(
                  "INSERT OR REPLACE INTO guru (email, password_hash, nama, role) VALUES (?, ?, ?, ?)"
                ).bind(cleanEmail, cleanPwd, 'M. Ardiansyah, S.Pd.Gr.', 'guru').run();
              } catch(e) {}
            }
          }
        } catch(e) {}
      }

      if (isPasswordValid) {
        return new Response(JSON.stringify({
          success: true,
          type: 'guru',
          user: {
            id: 'guru_ardi',
            email: cleanEmail,
            username: cleanEmail.split('@')[0],
            name: 'M. Ardiansyah, S.Pd.Gr.',
            nama: 'M. Ardiansyah, S.Pd.Gr.',
            role: 'guru',
            access_level: 'full'
          }
        }), {
          headers: { 'Content-Type': 'application/json' }
        });
      }

      return new Response(JSON.stringify({ error: 'Email atau password guru salah. Silakan coba lagi.' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ error: 'Email resmi guru tidak terdaftar.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
