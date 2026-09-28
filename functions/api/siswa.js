// functions/api/siswa.js
// Endpoint Data Siswa (Cloudflare D1 SQLite)

export async function onRequestGet(context) {
  try {
    if (!context.env || !context.env.DB) {
      return new Response(JSON.stringify({ error: 'D1 not bound' }), { status: 503, headers: { 'Content-Type': 'application/json' } });
    }

    const url = new URL(context.request.url);
    const nis = url.searchParams.get('nis');

    if (nis) {
      const student = await context.env.DB.prepare(
        "SELECT nis, nama, kelas FROM siswa WHERE nis = ?"
      ).bind(String(nis)).first();

      return new Response(JSON.stringify(student || null), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { results } = await context.env.DB.prepare(
      "SELECT nis, nama, kelas FROM siswa ORDER BY kelas ASC, nama ASC"
    ).all();

    return new Response(JSON.stringify(results || []), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
