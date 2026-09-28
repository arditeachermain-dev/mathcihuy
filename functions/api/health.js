// functions/api/health.js
// Endpoint untuk cek status koneksi Cloudflare D1
export async function onRequestGet(context) {
  try {
    if (!context.env || !context.env.DB) {
      return new Response(JSON.stringify({
        status: 'pending_binding',
        engine: 'none',
        message: 'D1 binding DB belum dikonfigurasi di Cloudflare Settings > Functions'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const countNilai = await context.env.DB.prepare("SELECT count(*) as c FROM nilai_cbt").first();
    const countSiswa = await context.env.DB.prepare("SELECT count(*) as c FROM siswa").first();

    return new Response(JSON.stringify({
      status: 'ok',
      engine: 'Cloudflare D1 (Serverless SQLite)',
      database: 'mathcihuy-db',
      total_nilai: countNilai ? countNilai.c : 0,
      total_siswa: countSiswa ? countSiswa.c : 0,
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ status: 'error', message: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
