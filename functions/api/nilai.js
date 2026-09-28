// functions/api/nilai.js
// Endpoint Nilai CBT (Cloudflare D1 SQLite - Authenticated & Tamper-Proof)

import { authenticateRequest, jsonResponse } from './_auth.js';

export async function onRequestGet(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }

    const session = await authenticateRequest(context.request, context.env);
    const url = new URL(context.request.url);
    const nis = url.searchParams.get('nis');
    const isAll = url.searchParams.get('all') === '1';

    // 1. REKAP SELURUH NILAI (GURU ONLY)
    if (isAll) {
      if (!session || session.role !== 'guru') {
        return jsonResponse({
          error: 'Akses ditolak (401): Rekap seluruh nilai hanya dapat diakses oleh akun guru resmi yang terautentikasi.'
        }, 401);
      }

      const { results } = await context.env.DB.prepare(
        "SELECT nis, nama, kelas, mapel, kode_pertemuan, skor, jumlah_soal, jumlah_benar, jumlah_salah, durasi_detik, jumlah_percobaan, waktu_submit FROM nilai_cbt ORDER BY waktu_submit DESC"
      ).all();
      return jsonResponse(results || []);
    }

    // 2. REKAP NILAI SISWA TERTENTU (GURU ATAU SISWA BERSANGKUTAN)
    if (nis) {
      if (!session) {
        return jsonResponse({
          error: 'Akses ditolak (401): Silakan login terlebih dahulu untuk melihat nilai.'
        }, 401);
      }

      // Siswa hanya boleh membaca nilai akunnya sendiri
      if (session.role === 'siswa' && String(session.nis) !== String(nis)) {
        return jsonResponse({
          error: 'Akses dilarang (403): Anda tidak berhak melihat riwayat nilai siswa lain.'
        }, 403);
      }

      const { results } = await context.env.DB.prepare(
        "SELECT mapel, kode_pertemuan, skor, jumlah_soal, jumlah_benar, waktu_submit FROM nilai_cbt WHERE nis = ?"
      ).bind(String(nis)).all();
      return jsonResponse(results || []);
    }

    return jsonResponse([]);
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}

export async function onRequestPost(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }

    const session = await authenticateRequest(context.request, context.env);
    if (!session) {
      return jsonResponse({
        error: 'Akses ditolak (401): Anda harus login untuk mengumpulkan nilai ujian.'
      }, 401);
    }

    const data = await context.request.json();
    const {
      nis, mapel, kode_pertemuan,
      skor, jumlah_soal, jumlah_benar,
      durasi_detik, jumlah_percobaan
    } = data;

    if (!nis || !kode_pertemuan) {
      return jsonResponse({ error: 'Parameter nis dan kode_pertemuan wajib diisi' }, 400);
    }

    // Anti-Spoofing: Siswa hanya boleh mengirim nilai atas namanya sendiri
    if (session.role === 'siswa' && String(session.nis) !== String(nis)) {
      return jsonResponse({
        error: 'Akses dilarang (403): Identitas pengirim tidak sesuai dengan token sesi aktif.'
      }, 403);
    }

    // Anti-Stored-XSS: Selalu ambil nama & kelas resmi dari tabel siswa di DB, abaikan input nama mentah klien
    const studentInfo = await context.env.DB.prepare(
      "SELECT nama, kelas FROM siswa WHERE nis = ?"
    ).bind(String(nis)).first();

    const verifiedNama = studentInfo ? studentInfo.nama : String(session.nama || 'Siswa ' + nis).replace(/<[^>]*>/g, '').trim();
    const verifiedKelas = studentInfo ? studentInfo.kelas : String(session.kelas || 'XII').replace(/<[^>]*>/g, '').trim();

    // Validasi & sanitasi numerik yang ketat
    const cleanSkor = Math.min(100, Math.max(0, Number(skor) || 0));
    const cleanSoal = Math.max(1, Number(jumlah_soal) || 10);
    const cleanBenar = Math.min(cleanSoal, Math.max(0, Number(jumlah_benar) || 0));
    const cleanSalah = Math.max(0, cleanSoal - cleanBenar);
    const cleanDurasi = Math.max(0, Number(durasi_detik) || 0);

    // Hitung riwayat percobaan secara otomatis & konsisten di database
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
      String(nis), verifiedNama, verifiedKelas, String(mapel || 'wajib'), String(kode_pertemuan),
      cleanSkor, cleanSoal, cleanBenar, cleanSalah,
      cleanDurasi, finalAttempt, now
    ).run();

    // Otomatis bersihkan draf live answers dari D1 pasca submit
    try {
      await context.env.DB.prepare(
        "DELETE FROM cbt_live_answers WHERE nis = ? AND mapel = ? AND kode_pertemuan = ?"
      ).bind(String(nis), String(mapel || 'wajib'), String(kode_pertemuan)).run();
    } catch(e) {}

    return jsonResponse({
      success: true,
      waktu_submit: now,
      jumlah_percobaan: finalAttempt
    });
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}

export async function onRequestDelete(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }

    // Otorisasi: HANYA GURU YANG DAPAT MENGHAPUS / MERESET NILAI
    const session = await authenticateRequest(context.request, context.env);
    if (!session || session.role !== 'guru') {
      return jsonResponse({
        error: 'Akses ditolak (401): Hanya guru resmi yang memiliki wewenang mereset nilai atau draf siswa.'
      }, 401);
    }

    const url = new URL(context.request.url);
    const nis = url.searchParams.get('nis');
    const mapel = url.searchParams.get('mapel');
    const kode_pertemuan = url.searchParams.get('kode_pertemuan');

    if (!nis) {
      return jsonResponse({ error: 'Parameter nis wajib diisi' }, 400);
    }

    let sqlNilai = "DELETE FROM nilai_cbt WHERE nis = ?";
    let sqlLive = "DELETE FROM cbt_live_answers WHERE nis = ?";
    const params = [String(nis)];

    if (mapel && kode_pertemuan) {
      sqlNilai += " AND mapel = ? AND kode_pertemuan = ?";
      sqlLive += " AND mapel = ? AND kode_pertemuan = ?";
      params.push(String(mapel), String(kode_pertemuan));
    } else if (mapel) {
      sqlNilai += " AND mapel = ?";
      sqlLive += " AND mapel = ?";
      params.push(String(mapel));
    } else if (kode_pertemuan) {
      sqlNilai += " AND kode_pertemuan = ?";
      sqlLive += " AND kode_pertemuan = ?";
      params.push(String(kode_pertemuan));
    }

    await context.env.DB.prepare(sqlNilai).bind(...params).run();
    try {
      await context.env.DB.prepare(sqlLive).bind(...params).run();
    } catch(e) {}

    return jsonResponse({
      success: true,
      message: 'Nilai dan draf berhasil direset dari database resmi Cloudflare D1'
    });
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}
