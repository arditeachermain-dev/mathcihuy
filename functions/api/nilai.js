import { authenticateRequest, jsonResponse } from './_auth.js';
import { calculateOfficialGrade } from './_grading.js';
import { getSolutionsForPackage } from './_solutions.js';

function extractTingkat(kelasStr) {
  const k = String(kelasStr || '').toUpperCase();
  if (k.includes('XII') || k.includes('12')) return '12';
  if (k.includes('XI') || k.includes('11')) return '11';
  if (k.includes('X') || k.includes('10')) return '10';
  return '12';
}

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
        "SELECT mapel, kode_pertemuan, skor, jumlah_soal, jumlah_benar, jumlah_salah, durasi_detik, jumlah_percobaan, waktu_submit FROM nilai_cbt WHERE nis = ? ORDER BY id ASC"
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

    const cleanNis = String(nis).trim();
    // Anti-Spoofing: Siswa hanya boleh mengirim nilai atas namanya sendiri (dukung alias aunillah <-> 23400016)
    const isSelf = session.role === 'guru' ||
      String(session.nis) === cleanNis ||
      (String(session.nis) === '23400016' && cleanNis.toLowerCase() === 'aunillah') ||
      (String(session.nis).toLowerCase() === 'aunillah' && cleanNis === '23400016');

    if (!isSelf) {
      return jsonResponse({
        error: 'Akses dilarang (403): Identitas pengirim tidak sesuai dengan token sesi aktif.'
      }, 403);
    }

    const canonicalNis = cleanNis.toLowerCase() === 'aunillah' ? '23400016' : cleanNis;

    // Anti-Stored-XSS: Selalu ambil nama & kelas resmi dari tabel siswa di DB, abaikan input nama mentah klien
    const studentInfo = await context.env.DB.prepare(
      "SELECT nama, kelas FROM siswa WHERE nis = ?"
    ).bind(canonicalNis).first();

    const verifiedNama = studentInfo ? studentInfo.nama : String(session.nama || 'Siswa ' + canonicalNis).replace(/<[^>]*>/g, '').trim();
    const verifiedKelas = studentInfo ? studentInfo.kelas : String(session.kelas || 'XII').replace(/<[^>]*>/g, '').trim();

    let cleanDurasi = Math.max(0, Number(durasi_detik) || 0);

    // 1. Deteksi Anomali Durasi & Anti-Rapid-Fire Bot (Smart & Lenient Protection)
    if (session.role !== 'guru') {
      // Jika durasi < 3 detik karena timer browser ter-reset / antrean offline outbox, berikan default aman 15 detik alih-alih menolak nilai siswa
      if (cleanDurasi < 3) {
        cleanDurasi = 15;
      }

      // Deteksi Rapid-Fire Bot antar paket (< 4 detik antar paket berbeda)
      try {
        const lastSub = await context.env.DB.prepare(
          "SELECT waktu_submit FROM nilai_cbt WHERE nis = ? ORDER BY waktu_submit DESC LIMIT 1"
        ).bind(canonicalNis).first();

        if (lastSub && lastSub.waktu_submit) {
          const lastTime = new Date(lastSub.waktu_submit).getTime();
          const nowTime = Date.now();
          const diffSec = (nowTime - lastTime) / 1000;
          if (diffSec >= 0 && diffSec < 2) {
            return jsonResponse({
              error: `Pengumpulan ditolak (Proteksi Anti-Bot): Terdeteksi jeda submit antar paket (${Math.round(diffSec)} detik) terlalu cepat. Harap luangkan jeda minimal 2 detik.`,
              error_code: 'RATE_LIMIT'
            }, 429);
          }
        }
      } catch(e) {}
    }

    // 2. Server-Side Grading: Ambil jawaban yang dikirim klien atau draf dari cbt_live_answers
    let answersToGrade = data.answers;
    if (!answersToGrade || (Array.isArray(answersToGrade) && answersToGrade.length === 0)) {
      try {
        const { results: liveRows } = await context.env.DB.prepare(
          "SELECT q_idx, chosen FROM cbt_live_answers WHERE nis = ? AND mapel = ? AND kode_pertemuan = ?"
        ).bind(canonicalNis, String(mapel || 'wajib'), String(kode_pertemuan)).all();
        if (liveRows && liveRows.length > 0) {
          answersToGrade = liveRows;
        }
      } catch(e) {}
    }

    let studentTingkat = String(data.tingkat || '').replace(/[^0-9]/g, '');
    if (!['10', '11', '12'].includes(studentTingkat)) {
      studentTingkat = extractTingkat(verifiedKelas);
    }
    let officialGrade = null;
    if (answersToGrade && (Array.isArray(answersToGrade) ? answersToGrade.length > 0 : Object.keys(answersToGrade).length > 0)) {
      officialGrade = calculateOfficialGrade(studentTingkat, mapel, kode_pertemuan, answersToGrade);
    }

    let cleanSkor, cleanSoal, cleanBenar, cleanSalah;
    if (officialGrade) {
      cleanSkor = officialGrade.skor;
      cleanSoal = officialGrade.jumlah_soal;
      cleanBenar = officialGrade.jumlah_benar;
      cleanSalah = officialGrade.jumlah_salah;
    } else {
      // Fallback toleran jika paket belum terdaftar di kunci resmi statis
      cleanSkor = Math.min(100, Math.max(0, Number(skor) || 0));
      cleanSoal = Math.max(1, Number(jumlah_soal) || 10);
      cleanBenar = Math.min(cleanSoal, Math.max(0, Number(jumlah_benar) || 0));
      cleanSalah = Math.max(0, cleanSoal - cleanBenar);
    }

    // Hitung riwayat percobaan secara otomatis & konsisten di database
    let finalAttempt = Number(jumlah_percobaan) || 1;
    const existing = await context.env.DB.prepare(
      "SELECT skor, jumlah_soal, jumlah_benar, jumlah_salah, durasi_detik, jumlah_percobaan, waktu_submit FROM nilai_cbt WHERE nis = ? AND mapel = ? AND kode_pertemuan = ?"
    ).bind(canonicalNis, String(mapel || 'wajib'), String(kode_pertemuan)).first();

    if (existing && existing.jumlah_percobaan && Number(existing.jumlah_percobaan) >= finalAttempt) {
      finalAttempt = Number(existing.jumlah_percobaan) + 1;
    }

    const now = new Date().toISOString();
    const prevSkor = (existing && existing.skor !== undefined && existing.skor !== null) ? Number(existing.skor) : -1;
    // Logika Best Score (Nilai Tertinggi): Nilai rapor hanya diperbarui jika skor baru LEBIH TINGGI / SAMA DENGAN skor sebelumnya
    const isNewRecordBest = cleanSkor >= prevSkor;

    const finalSkor = isNewRecordBest ? cleanSkor : prevSkor;
    const finalSoal = isNewRecordBest ? cleanSoal : (Number(existing.jumlah_soal) || cleanSoal);
    const finalBenar = isNewRecordBest ? cleanBenar : (existing.jumlah_benar !== undefined ? Number(existing.jumlah_benar) : cleanBenar);
    const finalSalah = isNewRecordBest ? cleanSalah : (existing.jumlah_salah !== undefined ? Number(existing.jumlah_salah) : cleanSalah);
    const finalDurasi = isNewRecordBest ? cleanDurasi : (Number(existing.durasi_detik) || cleanDurasi);
    const finalWaktu = isNewRecordBest ? now : (existing.waktu_submit || now);

    await context.env.DB.prepare(`
      INSERT INTO nilai_cbt (
        nis, nama, kelas, mapel, kode_pertemuan,
        skor, jumlah_soal, jumlah_benar, jumlah_salah,
        durasi_detik, jumlah_percobaan, waktu_submit
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(nis, mapel, kode_pertemuan) DO UPDATE SET
        skor = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.skor ELSE nilai_cbt.skor END,
        jumlah_soal = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.jumlah_soal ELSE nilai_cbt.jumlah_soal END,
        jumlah_benar = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.jumlah_benar ELSE nilai_cbt.jumlah_benar END,
        jumlah_salah = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.jumlah_salah ELSE nilai_cbt.jumlah_salah END,
        durasi_detik = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.durasi_detik ELSE nilai_cbt.durasi_detik END,
        waktu_submit = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.waktu_submit ELSE nilai_cbt.waktu_submit END,
        jumlah_percobaan = excluded.jumlah_percobaan
    `).bind(
      canonicalNis, verifiedNama, verifiedKelas, String(mapel || 'wajib'), String(kode_pertemuan),
      cleanSkor, cleanSoal, cleanBenar, cleanSalah,
      cleanDurasi, finalAttempt, now
    ).run();

    // Otomatis bersihkan draf live answers dari D1 pasca submit
    try {
      await context.env.DB.prepare(
        "DELETE FROM cbt_live_answers WHERE nis = ? AND mapel = ? AND kode_pertemuan = ?"
      ).bind(String(nis), String(mapel || 'wajib'), String(kode_pertemuan)).run();
    } catch(e) {}

    const solutions = getSolutionsForPackage(studentTingkat, mapel, kode_pertemuan) || [];

    return jsonResponse({
      success: true,
      skor: finalSkor,
      jumlah_soal: finalSoal,
      jumlah_benar: finalBenar,
      jumlah_salah: finalSalah,
      durasi_detik: finalDurasi,
      waktu_submit: finalWaktu,
      attempt_skor: cleanSkor,
      attempt_benar: cleanBenar,
      attempt_salah: cleanSalah,
      is_best_score: isNewRecordBest,
      jumlah_percobaan: finalAttempt,
      server_graded: Boolean(officialGrade),
      evaluations: officialGrade ? officialGrade.evaluations : null,
      details: officialGrade ? officialGrade.details : null,
      solutions: solutions
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
