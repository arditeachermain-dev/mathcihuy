// functions/api/pair-practice.js
// Cloudflare D1 Backend for Pair Practice: Commander & Defuser (Integral Substitusi P26)
// SMA Global Islamic School 2 Serpong • Mr. Ardi
// CATATAN KEAMANAN: ZERO FRONTEND KEYS & ZERO FRONTEND PINS.
// Seluruh kunci jawaban modul dan 3 Digit PIN Otorisasi tersimpan rahasia di backend server.

import { jsonResponse } from './_auth.js';
import { updateStudentGamification } from './gamifikasi.js';

// SECRET ANSWER KEYS & 3 DIGIT PINS (HANYA ADA DI SERVER BACKEND)
const SECRET_PAIR_DATA = {
  // Kunci Jawaban Berbasis ID Opsi Netral
  keys: {
    1: "m1_opt1", // \int 6x(x^2 - 4)^4 dx = \frac{3}{5}(x^2 - 4)^5 + C
    2: "m2_opt1", // \int \frac{4x}{\sqrt{2x^2 + 5}} dx = 2\sqrt{2x^2 + 5} + C
    3: "m3_opt1", // \int \sin^3(x)\cos(x) dx = \frac{1}{4}\sin^4(x) + C
    4: "m4_opt1", // \int \frac{3x^2 + 2}{x^3 + 2x - 1} dx = \ln|x^3 + 2x - 1| + C
    5: "m5_opt1"  // \int_{0}^{1} 2x(x^2 + 1)^3 dx = \frac{15}{4}
  },
  // Kunci Alternatif / Legacy
  legacyKeys: {
    1: "A",
    2: "B",
    3: "B",
    4: "A",
    5: "B"
  },
  // 3 DIGIT PIN OTORISASI GERBANG SOAL (UNTUK MELANGKAH SELANJUTNYA)
  pins: {
    1: "354", // Modul 1 -> Lanjut ke Modul 2
    2: "245", // Modul 2 -> Lanjut ke Modul 3
    3: "143", // Modul 3 -> Lanjut ke Modul 4
    4: "321", // Modul 4 -> Lanjut ke Modul 5
    5: "154"  // Modul 5 -> Otorisasi Pelucutan Final & Rekap Nilai
  }
};

async function ensurePairTable(db) {
  try {
    await db.prepare(`
      CREATE TABLE IF NOT EXISTS pair_practice_history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        kelas TEXT NOT NULL,
        commander_nis TEXT NOT NULL,
        commander_nama TEXT NOT NULL,
        defuser_nis TEXT NOT NULL,
        defuser_nama TEXT NOT NULL,
        skor INTEGER DEFAULT 0,
        jumlah_benar INTEGER DEFAULT 0,
        durasi_detik INTEGER DEFAULT 0,
        answers_json TEXT,
        waktu_selesai TEXT NOT NULL
      )
    `).run();
  } catch (e) {
    console.warn("ensurePairTable error:", e);
  }
}

export async function onRequestGet(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }
    await ensurePairTable(context.env.DB);

    const url = new URL(context.request.url);
    const nis = url.searchParams.get('nis');

    if (nis) {
      const { results } = await context.env.DB.prepare(
        "SELECT * FROM pair_practice_history WHERE commander_nis = ? OR defuser_nis = ? ORDER BY waktu_selesai DESC"
      ).bind(String(nis), String(nis)).all();
      return jsonResponse(results || []);
    }

    const { results } = await context.env.DB.prepare(
      "SELECT * FROM pair_practice_history ORDER BY waktu_selesai DESC LIMIT 100"
    ).all();
    return jsonResponse(results || []);
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}

export async function onRequestPost(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }
    await ensurePairTable(context.env.DB);

    const body = await context.request.json();
    if (!body) {
      return jsonResponse({ error: 'Payload tidak boleh kosong' }, 400);
    }

    // 1. ACTION: VALIDASI 3 DIGIT PIN UNTUK MELANGKAH KE SOAL BERIKUTNYA
    if (body.action === 'validate_pin') {
      const modNo = Number(body.moduleNo) || 1;
      const inputPin = String(body.pin || '').trim();
      const expectedPin = SECRET_PAIR_DATA.pins[modNo];
      const isValid = (inputPin === expectedPin);

      return jsonResponse({
        success: true,
        valid: isValid,
        moduleNo: modNo
      });
    }

    // 2. ACTION: VALIDASI PEMOTONGAN KABEL MODUL (ZERO FRONTEND KEY)
    if (body.action === 'validate_module') {
      const modNo = Number(body.moduleNo) || 1;
      const ans = String(body.answer || '').trim();
      const expectedId = SECRET_PAIR_DATA.keys[modNo];
      const expectedLegacy = SECRET_PAIR_DATA.legacyKeys[modNo];
      const isValid = (ans === expectedId || ans.toUpperCase() === expectedLegacy);

      return jsonResponse({
        success: true,
        valid: isValid,
        moduleNo: modNo
      });
    }

    // 3. ACTION: SUBMIT HASIL AKHIR & LANGSUNG MASUK KE NILAI CBT GURU (KEDUA SISWA)
    if (body.action === 'submit_pair_grade') {
      const commanderNis = String(body.commander_nis || '').trim();
      const commanderNama = String(body.commander_nama || '').trim();
      const defuserNis = String(body.defuser_nis || '').trim();
      const defuserNama = String(body.defuser_nama || '').trim();
      const kelas = String(body.kelas || 'XII F3').trim();
      const userAnswers = typeof body.answers === 'object' ? body.answers : {};
      const durasiDetik = Number(body.durasi_detik) || 300;
      const waktuSubmit = new Date().toISOString();

      // Evaluasi 5 modul secara rahasia di server
      let correctCount = 0;
      const results = {};
      [1, 2, 3, 4, 5].forEach(mNo => {
        const u = String(userAnswers[mNo] || '').trim();
        const expectedId = SECRET_PAIR_DATA.keys[mNo];
        const expectedLegacy = SECRET_PAIR_DATA.legacyKeys[mNo];
        const isCor = (u === expectedId || u.toUpperCase() === expectedLegacy);
        results[mNo] = isCor;
        if (isCor) correctCount++;
      });

      const finalScore = correctCount * 20; // 0 s.d. 100
      const wrongCount = 5 - correctCount;

      // 1. Simpan riwayat pair practice
      try {
        await context.env.DB.prepare(`
          INSERT INTO pair_practice_history (
            kelas, commander_nis, commander_nama, defuser_nis, defuser_nama,
            skor, jumlah_benar, durasi_detik, answers_json, waktu_selesai
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(
          kelas, commanderNis, commanderNama, defuserNis, defuserNama,
          finalScore, correctCount, durasiDetik, JSON.stringify(userAnswers), waktuSubmit
        ).run();
      } catch (e) {
        console.warn("Error saving pair_practice_history:", e);
      }

      // 2. MASUKKAN LANGSUNG KE TABEL NILAI CBT GURU (nilai_cbt) UNTUK KEDUA SISWA
      // Mapel: 'minat', Kode: 'P26' (Integral Substitusi)
      const participants = [
        { nis: defuserNis, nama: defuserNama, role: 'Defuser' },
        { nis: commanderNis, nama: commanderNama, role: 'Commander' }
      ];

      for (const p of participants) {
        if (!p.nis) continue;
        try {
          await context.env.DB.prepare(`
            INSERT INTO nilai_cbt (
              nis, nama, kelas, mapel, kode_pertemuan,
              skor, jumlah_soal, jumlah_benar, jumlah_salah,
              durasi_detik, jumlah_percobaan, waktu_submit, is_flagged
            ) VALUES (?, ?, ?, 'minat', 'P26', ?, 5, ?, ?, ?, 1, ?, 0)
            ON CONFLICT(nis, mapel, kode_pertemuan) DO UPDATE SET
              skor = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.skor ELSE nilai_cbt.skor END,
              jumlah_benar = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.jumlah_benar ELSE nilai_cbt.jumlah_benar END,
              jumlah_salah = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.jumlah_salah ELSE nilai_cbt.jumlah_salah END,
              durasi_detik = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.durasi_detik ELSE nilai_cbt.durasi_detik END,
              waktu_submit = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.waktu_submit ELSE nilai_cbt.waktu_submit END
          `).bind(
            p.nis, p.nama, kelas,
            finalScore, correctCount, wrongCount, durasiDetik, waktuSubmit
          ).run();

          // Gamifikasi XP
          try {
            await updateStudentGamification(context.env.DB, p.nis, finalScore, correctCount, 5, durasiDetik, waktuSubmit);
          } catch(e) {}
        } catch (dbErr) {
          console.warn(`Gagal memasukkan nilai CBT untuk ${p.role} (${p.nis}):`, dbErr);
        }
      }

      return jsonResponse({
        success: true,
        skor: finalScore,
        jumlah_benar: correctCount,
        jumlah_salah: wrongCount,
        durasi_detik: durasiDetik,
        results: results,
        waktu_submit: waktuSubmit,
        participants: participants
      });
    }

    return jsonResponse({ error: 'Action tidak dikenali' }, 400);
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}
