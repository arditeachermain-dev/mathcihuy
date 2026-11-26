// functions/api/health.js
// Health Check Endpoint (Sanitized Public Diagnostic)

import { authenticateRequest } from './_auth.js';

export async function onRequestGet(context) {
  try {
    if (!context.env || !context.env.DB) {
      return new Response(JSON.stringify({
        status: 'pending_binding',
        timestamp: new Date().toISOString()
      }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const session = await authenticateRequest(context.request, context.env);
    const now = new Date().toISOString();

    // Jika diakses oleh guru resmi, berikan diagnostik lengkap
    if (session && session.role === 'guru') {
      const countNilai = await context.env.DB.prepare("SELECT count(*) as c FROM nilai_cbt").first();
      const countSiswa = await context.env.DB.prepare("SELECT count(*) as c FROM siswa").first();

      return new Response(JSON.stringify({
        status: 'ok',
        engine: 'Cloudflare D1 (Serverless SQLite)',
        total_nilai: countNilai ? countNilai.c : 0,
        total_siswa: countSiswa ? countSiswa.c : 0,
        timestamp: now
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Respon publik steril (Anti-Information-Leakage)
    return new Response(JSON.stringify({
      status: 'ok',
      timestamp: now
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ status: 'error', timestamp: new Date().toISOString() }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
