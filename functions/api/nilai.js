// functions/api/nilai.js
// Endpoint Nilai CBT (Cloudflare D1 SQLite - Unlimited Bandwidth)

export async function onRequestGet(context) {
  try {
    if (!context.env || !context.env.DB) {
      return new Response(JSON.stringify({ error: 'D1 not bound' }), { status: 503, headers: { 'Content-Type': 'application/json' } });
    }

    const url = new URL(context.request.url);
    const nis = url.searchParams.get('nis');
    const isAll = url.searchParams.get('all') === '1';

    if (isAll) {
      // Guru Dashboard - Rekap Seluruh Nilai
      const { results } = await context.env.DB.prepare(
        "SELECT nis, nama, kelas, mapel, kode_pertemuan, skor, jumlah_soal, jumlah_benar, jumlah_salah, durasi_detik, jumlah_percobaan, waktu_submit FROM nilai_cbt ORDER BY waktu_submit DESC"
      ).all();
      return new Response(JSON.stringify(results || []), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (nis) {
      // Siswa - Rekap Nilai Siswa Bersangkutan
      const { results } = await context.env.DB.prepare(
        "SELECT mapel, kode_pertemuan, skor, jumlah_soal, jumlah_benar, waktu_submit FROM nilai_cbt WHERE nis = ?"
      ).bind(String(nis)).all();
      return new Response(JSON.stringify(results || []), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify([]), { headers: { 'Content-Type': 'application/json' } });
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
    const {
      nis, nama, kelas, mapel, kode_pertemuan,
      skor, jumlah_soal, jumlah_benar, jumlah_salah,
      durasi_detik, jumlah_percobaan
    } = data;

    if (!nis || !kode_pertemuan) {
      return new Response(JSON.stringify({ error: 'Parameter nis dan kode_pertemuan wajib diisi' }), { status: 400 });
    }

    // Hitung riwayat percobaan secara otomatis
    let finalAttempt = Number(jumlah_percobaan) || 1;
    const existing = await context.env.DB.prepare(
      "SELECT jumlah_percobaan FROM nilai_cbt WHERE nis = ? AND mapel = ? AND kode_pertemuan = ?"
    ).bind(String(nis), String(mapel || 'wajib'), String(kode_pertemuan)).first();

    if (existing && existing.jumlah_percobaan && Number(existing.jumlah_percobaan) >= finalAttempt) {
      finalAttempt = Number(existing.jumlah_percobaan) + 1;
    }

    const now = new Date().toISOString();
    await context.env.DB.prepare(`
      INSERT INTO nilai_cbt (
        nis, nama, kelas, mapel, kode_pertemuan,
        skor, jumlah_soal, jumlah_benar, jumlah_salah,
        durasi_detik, jumlah_percobaan, waktu_submit
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(nis, mapel, kode_pertemuan) DO UPDATE SET
        skor = excluded.skor,
        jumlah_soal = excluded.jumlah_soal,
        jumlah_benar = excluded.jumlah_benar,
        jumlah_salah = excluded.jumlah_salah,
        durasi_detik = excluded.durasi_detik,
        jumlah_percobaan = excluded.jumlah_percobaan,
        waktu_submit = excluded.waktu_submit
    `).bind(
      String(nis), String(nama || ''), String(kelas || ''), String(mapel || 'wajib'), String(kode_pertemuan),
      Number(skor) || 0, Number(jumlah_soal) || 10, Number(jumlah_benar) || 0, Number(jumlah_salah) || 0,
      Number(durasi_detik) || 0, finalAttempt, now
    ).run();

    // Otomatis hapus draf live answers dari D1 pasca submit
    try {
      await context.env.DB.prepare(
        "DELETE FROM cbt_live_answers WHERE nis = ? AND mapel = ? AND kode_pertemuan = ?"
      ).bind(String(nis), String(mapel || 'wajib'), String(kode_pertemuan)).run();
    } catch(e) {}

    return new Response(JSON.stringify({
      success: true,
      waktu_submit: now,
      jumlah_percobaan: finalAttempt
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
