// functions/api/pair-practice.js
// Cloudflare D1 Backend for Pair Practice: Commander & Defuser (Integral Substitusi P26)
// Authenticated • Rate-Limited Pin/Module Validation • Verified Participant Grade Submission

import { authenticateRequest, jsonResponse } from './_auth.js';
import { updateStudentGamification } from './gamifikasi.js';

const SECRET_PAIR_DATA = {
  keys: {
    1: "m1_opt1",
    2: "m2_opt1",
    3: "m3_opt1",
    4: "m4_opt1",
    5: "m5_opt1"
  },
  legacyKeys: {
    1: "A",
    2: "B",
    3: "B",
    4: "A",
    5: "B"
  },
  pins: {
    1: "354",
    2: "245",
    3: "143",
    4: "321",
    5: "154"
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
  } catch (e) {}
}

async function enforceOracleThrottle(db, session) {
  if (session.role === 'guru') return null;
  const key = `pair_oracle:${String(session.nis || 'unknown')}`;
  const now = Date.now();
  try {
    await db.prepare(`
      CREATE TABLE IF NOT EXISTS auth_rate_limits (
        ip TEXT PRIMARY KEY,
        req_count INTEGER,
        window_start INTEGER,
        blocked_until INTEGER
      )
    `).run();

    const rec = await db.prepare("SELECT req_count, window_start, blocked_until FROM auth_rate_limits WHERE ip = ?").bind(key).first();
    if (rec && Number(rec.blocked_until || 0) > now) {
      const rem = Math.ceil((Number(rec.blocked_until) - now) / 1000);
      return jsonResponse({ error: `Terlalu banyak percobaan. Tunggu ${rem} detik.`, valid: false }, 429, { 'Retry-After': String(rem) });
    }

    const expired = !rec || (now - Number(rec.window_start || 0)) > 120000;
    const nextCount = expired ? 1 : (Number(rec.req_count || 0) + 1);
    const windowStart = expired ? now : Number(rec.window_start || now);
    const blockedUntil = nextCount > 15 ? now + 60000 : 0;

    if (rec) {
      await db.prepare("UPDATE auth_rate_limits SET req_count = ?, window_start = ?, blocked_until = ? WHERE ip = ?")
        .bind(nextCount, windowStart, blockedUntil, key).run();
    } else {
      await db.prepare("INSERT INTO auth_rate_limits (ip, req_count, window_start, blocked_until) VALUES (?, ?, ?, ?)")
        .bind(key, nextCount, windowStart, blockedUntil).run();
    }
  } catch (_) {}
  return null;
}

export async function onRequestGet(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }

    const session = await authenticateRequest(context.request, context.env);
    if (!session) {
      return jsonResponse({ error: 'Akses ditolak (401): Silakan login terlebih dahulu.' }, 401);
    }

    await ensurePairTable(context.env.DB);

    const url = new URL(context.request.url);
    const nis = url.searchParams.get('nis');

    if (nis) {
      const cleanNis = String(nis).trim();
      if (session.role !== 'guru' && String(session.nis) !== cleanNis) {
        return jsonResponse({ error: 'Akses dilarang (403): Tidak berhak membaca riwayat siswa lain.' }, 403);
      }
      const { results } = await context.env.DB.prepare(
        "SELECT * FROM pair_practice_history WHERE commander_nis = ? OR defuser_nis = ? ORDER BY waktu_selesai DESC"
      ).bind(cleanNis, cleanNis).all();
      return jsonResponse(results || []);
    }

    if (session.role !== 'guru') {
      return jsonResponse({ error: 'Akses dilarang (403): Seluruh riwayat pair practice hanya untuk guru.' }, 403);
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

    const session = await authenticateRequest(context.request, context.env);
    if (!session) {
      return jsonResponse({ error: 'Akses ditolak (401): Silakan login terlebih dahulu.' }, 401);
    }

    await ensurePairTable(context.env.DB);

    const body = await context.request.json().catch(() => null);
    if (!body) {
      return jsonResponse({ error: 'Payload tidak boleh kosong' }, 400);
    }

    if (body.action === 'validate_pin') {
      const blockedResp = await enforceOracleThrottle(context.env.DB, session);
      if (blockedResp) return blockedResp;

      const modNo = Number(body.moduleNo) || 1;
      const inputPin = String(body.pin || '').trim();
      const expectedPin = SECRET_PAIR_DATA.pins[modNo];
      const isValid = Boolean(expectedPin && inputPin === expectedPin);

      return jsonResponse({
        success: true,
        valid: isValid,
        moduleNo: modNo
      });
    }

    if (body.action === 'validate_module') {
      const blockedResp = await enforceOracleThrottle(context.env.DB, session);
      if (blockedResp) return blockedResp;

      const modNo = Number(body.moduleNo) || 1;
      const ans = String(body.answer || '').trim();
      const expectedId = SECRET_PAIR_DATA.keys[modNo];
      const expectedLegacy = SECRET_PAIR_DATA.legacyKeys[modNo];
      const isValid = Boolean(expectedId && (ans === expectedId || ans.toUpperCase() === expectedLegacy));

      return jsonResponse({
        success: true,
        valid: isValid,
        moduleNo: modNo
      });
    }

    if (body.action === 'submit_pair_grade') {
      const commanderNis = String(body.commander_nis || '').trim();
      const defuserNis = String(body.defuser_nis || '').trim();

      if (session.role !== 'guru') {
        const sNis = String(session.nis || '').trim();
        if (sNis !== commanderNis && sNis !== defuserNis) {
          return jsonResponse({
            error: 'Akses dilarang (403): Akun Anda harus tercatat sebagai Commander atau Defuser pada pasangan ini.'
          }, 403);
        }
      }

      const cmdStudent = commanderNis
        ? await context.env.DB.prepare("SELECT nis, nama, kelas FROM siswa WHERE nis = ?").bind(commanderNis).first()
        : null;
      const defStudent = defuserNis
        ? await context.env.DB.prepare("SELECT nis, nama, kelas FROM siswa WHERE nis = ?").bind(defuserNis).first()
        : null;

      if (session.role !== 'guru' && ((commanderNis && !cmdStudent) || (defuserNis && !defStudent))) {
        return jsonResponse({ error: 'NIS pasangan tidak ditemukan di database siswa.' }, 400);
      }

      const commanderNama = cmdStudent ? cmdStudent.nama : String(body.commander_nama || '').replace(/[<>&"']/g, '').trim();
      const defuserNama = defStudent ? defStudent.nama : String(body.defuser_nama || '').replace(/[<>&"']/g, '').trim();
      const kelas = (defStudent?.kelas || cmdStudent?.kelas || String(session.kelas || 'XII F3')).trim();

      const userAnswers = (typeof body.answers === 'object' && body.answers !== null) ? body.answers : {};
      const durasiDetik = Math.max(15, Math.min(7200, Number(body.durasi_detik) || 300));
      const waktuSubmit = new Date().toISOString();

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

      const finalScore = correctCount * 20;
      const wrongCount = 5 - correctCount;

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
      } catch (e) {}

      const participants = [];
      if (defuserNis && defStudent) participants.push({ nis: defStudent.nis, nama: defStudent.nama, kelas: defStudent.kelas, role: 'Defuser' });
      if (commanderNis && cmdStudent && (!defStudent || cmdStudent.nis !== defStudent.nis)) {
        participants.push({ nis: cmdStudent.nis, nama: cmdStudent.nama, kelas: cmdStudent.kelas, role: 'Commander' });
      }

      for (const p of participants) {
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
            p.nis, p.nama, p.kelas || kelas,
            finalScore, correctCount, wrongCount, durasiDetik, waktuSubmit
          ).run();

          try {
            await updateStudentGamification(context.env.DB, p.nis);
          } catch (e) {}
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
        results,
        waktu_submit: waktuSubmit,
        participants
      });
    }

    return jsonResponse({ error: 'Action tidak dikenali' }, 400);
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}
