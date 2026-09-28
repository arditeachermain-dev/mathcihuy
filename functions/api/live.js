// functions/api/live.js
// Endpoint Draf Live Autosave (Cloudflare D1 SQLite)

export async function onRequestGet(context) {
  try {
    if (!context.env || !context.env.DB) {
      return new Response(JSON.stringify({ error: 'D1 not bound' }), { status: 503, headers: { 'Content-Type': 'application/json' } });
    }

    const url = new URL(context.request.url);
    const nis = url.searchParams.get('nis');
    const mapel = url.searchParams.get('mapel') || 'wajib';
    const kode = url.searchParams.get('kode');

    if (!nis || !kode) {
      return new Response(JSON.stringify([]), { headers: { 'Content-Type': 'application/json' } });
    }

    const { results } = await context.env.DB.prepare(
      "SELECT q_idx, chosen, is_right, updated_at FROM cbt_live_answers WHERE nis = ? AND mapel = ? AND kode_pertemuan = ?"
    ).bind(String(nis), String(mapel), String(kode)).all();

    return new Response(JSON.stringify(results || []), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}

export async function onRequestPost(context) {
  try {
    if (!context.env || !context.env.DB) {
      return new Response(JSON.stringify({ error: 'D1 not bound' }), { status: 503, headers: { 'Content-Type': 'application/json' } });
    }

    const data = await context.request.json();
    const { nis, mapel, kode_pertemuan, q_idx, chosen, is_right } = data;

    if (!nis || !kode_pertemuan || q_idx === undefined) {
      return new Response(JSON.stringify({ error: 'Missing required draft fields' }), { status: 400 });
    }

    const now = new Date().toISOString();
    await context.env.DB.prepare(`
      INSERT INTO cbt_live_answers (nis, mapel, kode_pertemuan, q_idx, chosen, is_right, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(nis, mapel, kode_pertemuan, q_idx) DO UPDATE SET
        chosen = excluded.chosen,
        is_right = excluded.is_right,
        updated_at = excluded.updated_at
    `).bind(
      String(nis), String(mapel || 'wajib'), String(kode_pertemuan),
      Number(q_idx), String(chosen ?? ''), is_right ? 1 : 0, now
    ).run();

    return new Response(JSON.stringify({ success: true, updated_at: now }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}

export async function onRequestDelete(context) {
  try {
    if (!context.env || !context.env.DB) {
      return new Response(JSON.stringify({ error: 'D1 not bound' }), { status: 503, headers: { 'Content-Type': 'application/json' } });
    }

    const url = new URL(context.request.url);
    const nis = url.searchParams.get('nis');
    const mapel = url.searchParams.get('mapel');
    const kode = url.searchParams.get('kode');

    if (!nis) {
      return new Response(JSON.stringify({ error: 'Missing nis' }), { status: 400 });
    }

    let q = "DELETE FROM cbt_live_answers WHERE nis = ?";
    let params = [String(nis)];

    if (mapel) {
      q += " AND mapel = ?";
      params.push(String(mapel));
    }
    if (kode) {
      q += " AND kode_pertemuan = ?";
      params.push(String(kode));
    }

    await context.env.DB.prepare(q).bind(...params).run();

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
