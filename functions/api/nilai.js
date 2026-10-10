import { authenticateRequest, jsonResponse } from './_auth.js';
import { calculateOfficialGrade } from './_grading.js';
import { getSolutionsForPackage } from './_solutions.js';
import { updateStudentGamification } from './gamifikasi.js';

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
        "SELECT nis, nama, kelas, mapel, kode_pertemuan, skor, jumlah_soal, jumlah_benar, jumlah_salah, durasi_detik, jumlah_percobaan, waktu_submit, is_flagged FROM nilai_cbt ORDER BY waktu_submit DESC"
      ).all();
      return jsonResponse(results || []);
    }

    // 2. REKAP NILAI SISWA TERTENTU (GURU, SISWA BERSANGKUTAN, ATAU RAPOR PRATINJAU SISWA)
    if (nis) {
      const cleanNis = String(nis).trim();
      const { results } = await context.env.DB.prepare(
        "SELECT mapel, kode_pertemuan, skor, jumlah_soal, jumlah_benar, jumlah_salah, durasi_detik, jumlah_percobaan, waktu_submit FROM nilai_cbt WHERE nis = ? ORDER BY id ASC"
      ).bind(cleanNis).all();
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

    let data;
    try {
      data = await context.request.json();
    } catch(e) {
      try {
        const raw = await context.request.text();
        data = JSON.parse(raw);
      } catch(e2) {
        return jsonResponse({ error: 'Format data JSON tidak valid' }, 400);
      }
    }

    const {
      nis, mapel, kode_pertemuan,
      skor, jumlah_soal, jumlah_benar,
      durasi_detik, jumlah_percobaan
    } = data;

    if (!nis || !kode_pertemuan) {
      return jsonResponse({ error: 'Parameter nis dan kode_pertemuan wajib diisi' }, 400);
    }

    const cleanNis = String(nis).trim();
    const canonicalNis = cleanNis.toLowerCase() === 'aunillah' ? '23400016' : cleanNis;
    const cleanMapel = String(mapel || 'wajib').trim().toLowerCase();
    const cleanKode = String(kode_pertemuan || '').trim().toUpperCase();

    // Verifikasi identitas siswa resmi dari database D1
    const studentInfo = await context.env.DB.prepare(
      "SELECT nis, nama, kelas FROM siswa WHERE nis = ?"
    ).bind(canonicalNis).first();

    const session = await authenticateRequest(context.request, context.env);
    if (session) {
      // Anti-Spoofing: Jika ada token sesi, pastikan pengirim sesuai dengan token
      const isSelf = session.role === 'guru' ||
        String(session.nis) === cleanNis ||
        String(session.nis) === canonicalNis ||
        (String(session.nis) === '23400016' && cleanNis.toLowerCase() === 'aunillah') ||
        (String(session.nis).toLowerCase() === 'aunillah' && cleanNis === '23400016');

      if (!isSelf) {
        return jsonResponse({
          error: 'Akses dilarang (403): Identitas pengirim tidak sesuai dengan token sesi aktif.'
        }, 403);
      }
    } else {
      // Jika token sesi tidak terkirim (misal: sinkronisasi antrean outbox offline atau cookie browser dibersihkan),
      // izinkan pengumpulan jika NIS terdaftar resmi di basis data sekolah
      if (!studentInfo) {
        return jsonResponse({
          error: 'Akses ditolak (401): Silakan login dengan akun siswa resmi untuk mengumpulkan nilai ujian.'
        }, 401);
      }
    }

    // Nama & kelas resmi selalu diambil dari database D1 (Anti-Tamper & Anti-XSS)
    const verifiedNama = studentInfo ? studentInfo.nama : String(session?.nama || 'Siswa ' + canonicalNis).replace(/<[^>]*>/g, '').trim();
    const verifiedKelas = studentInfo ? studentInfo.kelas : String(session?.kelas || 'XII').replace(/<[^>]*>/g, '').trim();

    let cleanDurasi = Math.max(0, Number(durasi_detik) || 0);

    // 1. Deteksi Anomali Durasi & Anti-Rapid-Fire Bot (Smart & Lenient Protection)
    const isSyncSubmission = data.is_sync === true || 
                             data.source === 'outbox' || 
                             data.source === 'auto-heal' || 
                             data.source === 'rapor-auto-heal' ||
                             data.source === 'visibility-sync' ||
                             data.source === 'pagehide-sync';
    const isGuru = Boolean(session && session.role === 'guru');
    let lastSubmitDiffSec = null;
    if (!isGuru && !isSyncSubmission) {
      // Jika durasi < 3 detik karena timer browser ter-reset / antrean offline outbox, berikan default aman 15 detik alih-alih menolak nilai siswa
      if (cleanDurasi < 3) {
        cleanDurasi = 15;
      }

      // Deteksi Rapid-Fire Bot antar paket (< 30 detik antar pengumpulan paket matematika)
      try {
        const lastSub = await context.env.DB.prepare(
          "SELECT waktu_submit FROM nilai_cbt WHERE nis = ? ORDER BY waktu_submit DESC LIMIT 1"
        ).bind(canonicalNis).first();

        if (lastSub && lastSub.waktu_submit) {
          const lastTime = new Date(lastSub.waktu_submit).getTime();
          const nowTime = Date.now();
          lastSubmitDiffSec = (nowTime - lastTime) / 1000;
          if (lastSubmitDiffSec >= 0 && lastSubmitDiffSec < 30) {
            return jsonResponse({
              error: `Pengumpulan ditolak (Proteksi Cooldown): Terdeteksi jeda submit antar paket (${Math.round(lastSubmitDiffSec)} detik) terlalu cepat. Harap luangkan jeda minimal 30 detik untuk membaca dan meninjau paket ujian berikutnya.`,
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
        ).bind(canonicalNis, cleanMapel, cleanKode).all();
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
      officialGrade = calculateOfficialGrade(studentTingkat, cleanMapel, cleanKode, answersToGrade);
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
    ).bind(canonicalNis, cleanMapel, cleanKode).first();

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

    // Deteksi Anomali Kognitif & Rapid-Fire / Injected Duration Solving:
    // 1. Pengerjaan 10 butir matematika dalam durasi tercatat < 60 detik dengan skor >= 80 (mustahil untuk perhitungan analitik)
    // 2. Selisih waktu riil server dengan submit sebelumnya < 60 detik dengan skor >= 80 (script burst / loop bot)
    // 3. Durasi yang diklaim < 120 detik dengan skor 100
    // 4. Durasi palsu (selisih server < 60s dari submit paket sebelumnya tapi durasi yang diklaim >= 120s dan skor >= 80)
    let isAnomali = false;
    if (cleanDurasi < 60 && cleanSkor >= 80) {
      isAnomali = true;
    }
    if (lastSubmitDiffSec !== null && lastSubmitDiffSec < 60 && cleanSkor >= 80) {
      isAnomali = true;
    }
    if (cleanDurasi < 120 && cleanSkor === 100) {
      isAnomali = true;
    }
    if (lastSubmitDiffSec !== null && lastSubmitDiffSec < 60 && cleanDurasi >= 120 && cleanSkor >= 80) {
      isAnomali = true;
    }
    const isFlagged = isAnomali ? 1 : 0;

    await context.env.DB.prepare(`
      INSERT INTO nilai_cbt (
        nis, nama, kelas, mapel, kode_pertemuan,
        skor, jumlah_soal, jumlah_benar, jumlah_salah,
        durasi_detik, jumlah_percobaan, waktu_submit, is_flagged
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(nis, mapel, kode_pertemuan) DO UPDATE SET
        skor = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.skor ELSE nilai_cbt.skor END,
        jumlah_soal = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.jumlah_soal ELSE nilai_cbt.jumlah_soal END,
        jumlah_benar = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.jumlah_benar ELSE nilai_cbt.jumlah_benar END,
        jumlah_salah = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.jumlah_salah ELSE nilai_cbt.jumlah_salah END,
        durasi_detik = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.durasi_detik ELSE nilai_cbt.durasi_detik END,
        waktu_submit = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.waktu_submit ELSE nilai_cbt.waktu_submit END,
        jumlah_percobaan = MAX(nilai_cbt.jumlah_percobaan, excluded.jumlah_percobaan),
        is_flagged = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.is_flagged ELSE nilai_cbt.is_flagged END
    `).bind(
      canonicalNis, verifiedNama, verifiedKelas, cleanMapel, cleanKode,
      cleanSkor, cleanSoal, cleanBenar, cleanSalah,
      cleanDurasi, finalAttempt, now, isFlagged
    ).run();

    // Otomatis bersihkan draf live answers dari D1 pasca submit
    try {
      await context.env.DB.prepare(
        "DELETE FROM cbt_live_answers WHERE nis = ? AND mapel = ? AND kode_pertemuan = ?"
      ).bind(canonicalNis, cleanMapel, cleanKode).run();
    } catch(e) {}

    // Otomatis perbarui profil gamifikasi, level XP, dan daily streak di D1
    let gamifikasiUpdate = null;
    try {
      gamifikasiUpdate = await updateStudentGamification(context.env.DB, canonicalNis);
    } catch(gamErr) {
      console.warn('Gamifikasi update error:', gamErr);
    }

    const rawSolutions = getSolutionsForPackage(studentTingkat, cleanMapel, cleanKode) || [];
    let solutions = [];

    // Proteksi Integritas Ujian (Anti-Key Harvesting / Intip Kunci):
    // Jika skor siswa belum mencapai KKM (cleanSkor < 75):
    // Kunci opsi mentah (A-E) disembunyikan agar siswa tidak dapat mengumpulkan kosong/cepat untuk mencuri kunci lalu mengulang.
    // Diberikan petunjuk konsep (hint) agar siswa belajar dan mencoba kembali secara mandiri.
    if (cleanSkor < 75) {
      solutions = rawSolutions.map(sol => {
        let safeHint = (sol.bahas || '')
          .replace(/(kunci\s*(jawaban)?\s*(adalah|:)?\s*\(?[A-E]\)?)/gi, '💡 Konsep & Petunjuk:')
          .replace(/\(?(Opsi|Pilihan)\s*[A-E]\)?/gi, '(Opsi Jawaban)')
          .replace(/Kesimpulan:\s*Kunci\s*[A-E]/gi, 'Kesimpulan: Selesaikan dengan konsep di atas');
        return {
          q_idx: sol.q_idx,
          kunci: null, // SENSOR HURUF KUNCI
          is_locked: true,
          hint: safeHint,
          bahas: "🔒 Kunci huruf A-E dirahasiakan karena skor kamu belum mencapai KKM (75). Pelajari petunjuk konsep berikut dan silakan coba kerjakan kembali!"
        };
      });
    } else {
      solutions = rawSolutions.map(sol => ({
        ...sol,
        is_locked: false
      }));
    }

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
      is_first_attempt: (finalAttempt === 1),
      is_flagged: Boolean(isFlagged),
      kkm_tuntas: (cleanSkor >= 75),
      server_graded: Boolean(officialGrade),
      evaluations: officialGrade ? officialGrade.evaluations : null,
      details: officialGrade ? officialGrade.details : null,
      gamifikasi: gamifikasiUpdate,
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
