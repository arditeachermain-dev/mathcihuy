// functions/api/coop.js
// Cloudflare D1 Backend for Live Co-op Raid Proctoring, Student State Sync & Secure Server-Side Key Validation
// SMA Global Islamic School 2 Serpong • Mr. Ardi

import { authenticateRequest, jsonResponse } from './_auth.js';
import { updateStudentGamification } from './gamifikasi.js';

const SECRET_COOP_DATA = {
  targetPins: {
    1: 192,
    2: 102,
    3: 217
  },
  indivKeys: {
    1: "C",
    2: ["B", "S", "B"],
    3: "C",
    4: ["A", "B", "C"],
    5: "D"
  }
};

function cleanPlainText(val, maxLen = 80) {
  return String(val || '').replace(/[<>&"']/g, '').trim().slice(0, maxLen);
}

function gradeIndividualQuestion(qNo, userAns) {
  const k = SECRET_COOP_DATA.indivKeys[qNo];
  if (!k || userAns === undefined || userAns === null) return false;
  if (Array.isArray(k)) {
    if (!Array.isArray(userAns)) return false;
    if (qNo === 4) {
      const s1 = [...userAns].map(x => String(x).trim().toUpperCase()).sort().join(',');
      const s2 = [...k].map(x => String(x).trim().toUpperCase()).sort().join(',');
      return s1 === s2;
    }
    if (userAns.length !== k.length) return false;
    return k.every((val, idx) => String(userAns[idx]).trim().toUpperCase() === String(val).trim().toUpperCase());
  }
  return String(userAns).trim().toUpperCase() === String(k).trim().toUpperCase();
}

function enrichRowResults(row) {
  if (!row) return row;
  if (!row.results_indiv && row.answers_indiv) {
    try {
      const u = typeof row.answers_indiv === 'string' ? JSON.parse(row.answers_indiv) : row.answers_indiv;
      const res = {};
      [1, 2, 3, 4, 5].forEach(qNo => {
        res[qNo] = gradeIndividualQuestion(qNo, u[qNo]);
      });
      row.results_indiv = JSON.stringify(res);
    } catch (e) {}
  }
  return row;
}

async function ensureTable(db) {
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS coop_raid_scores (
      nis TEXT PRIMARY KEY,
      nama TEXT,
      kelas TEXT,
      kelompok TEXT,
      anggota TEXT,
      status TEXT,
      skor_coop INTEGER DEFAULT 0,
      skor_individu INTEGER DEFAULT 0,
      skor_akhir INTEGER DEFAULT 0,
      tab_switch_count INTEGER DEFAULT 0,
      pin_errors INTEGER DEFAULT 0,
      integrity_level TEXT DEFAULT 'hijau',
      integrity_label TEXT DEFAULT 'Murni',
      answers_wave1 TEXT,
      answers_wave2 TEXT,
      answers_wave3 TEXT,
      answers_indiv TEXT,
      results_indiv TEXT,
      updated_at TEXT
    )
  `).run();

  try {
    await db.prepare("ALTER TABLE coop_raid_scores ADD COLUMN results_indiv TEXT").run();
  } catch (e) {}
}

async function checkPinRateLimit(db, nis) {
  try {
    await db.prepare(`
      CREATE TABLE IF NOT EXISTS auth_rate_limits (
        ip TEXT PRIMARY KEY,
        req_count INTEGER,
        window_start INTEGER,
        blocked_until INTEGER
      )
    `).run();
    const key = `coop_pin:${nis}`;
    const rec = await db.prepare("SELECT req_count, window_start, blocked_until FROM auth_rate_limits WHERE ip = ?").bind(key).first();
    const now = Date.now();
    if (rec && Number(rec.blocked_until || 0) > now) {
      return { blocked: true, remainingSec: Math.ceil((Number(rec.blocked_until) - now) / 1000) };
    }
    return { blocked: false, key, rec };
  } catch (_) {
    return { blocked: false };
  }
}

async function recordPinFailure(db, key, rec) {
  if (!key) return;
  const now = Date.now();
  const expired = !rec || (now - Number(rec.window_start || 0)) > 120000;
  const nextCount = expired ? 1 : (Number(rec.req_count || 0) + 1);
  const windowStart = expired ? now : Number(rec.window_start || now);
  const blockedUntil = nextCount >= 10 ? now + 60000 : 0;
  if (rec) {
    await db.prepare("UPDATE auth_rate_limits SET req_count = ?, window_start = ?, blocked_until = ? WHERE ip = ?")
      .bind(nextCount, windowStart, blockedUntil, key).run();
  } else {
    await db.prepare("INSERT INTO auth_rate_limits (ip, req_count, window_start, blocked_until) VALUES (?, ?, ?, ?)")
      .bind(key, nextCount, windowStart, blockedUntil).run();
  }
}

function computeIntegrity(tabSwitchCount) {
  const n = Math.max(0, Math.min(999, Number(tabSwitchCount) || 0));
  if (n > 30) return { level: 'merah', label: 'Kritis', count: n };
  if (n > 15) return { level: 'kuning', label: 'Waspada', count: n };
  return { level: 'hijau', label: 'Murni', count: n };
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

    await ensureTable(context.env.DB);
    const url = new URL(context.request.url);
    const nis = url.searchParams.get('nis');

    if (nis) {
      const cleanNis = String(nis).trim();
      if (session.role !== 'guru' && String(session.nis) !== cleanNis) {
        return jsonResponse({ error: 'Akses dilarang (403): Tidak berhak melihat data siswa lain.' }, 403);
      }
      const row = await context.env.DB.prepare(
        "SELECT * FROM coop_raid_scores WHERE nis = ?"
      ).bind(cleanNis).first();
      return jsonResponse(row ? enrichRowResults(row) : null);
    }

    if (session.role !== 'guru') {
      return jsonResponse({ error: 'Akses dilarang (403): Rekap pengawasan hanya dapat diakses oleh guru.' }, 403);
    }

    const { results } = await context.env.DB.prepare(
      "SELECT * FROM coop_raid_scores ORDER BY updated_at DESC"
    ).all();

    return jsonResponse((results || []).map(r => enrichRowResults(r)));
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
      return jsonResponse({ error: 'Akses ditolak (401): Sesi login diperlukan.' }, 401);
    }

    await ensureTable(context.env.DB);

    const body = await context.request.json().catch(() => null);
    if (!body) {
      return jsonResponse({ error: 'Payload tidak boleh kosong' }, 400);
    }

    const targetNis = session.role === 'guru'
      ? String(body.nis || '').trim()
      : String(session.nis || '').trim();

    if (!targetNis) {
      return jsonResponse({ error: 'NIS tidak valid pada sesi aktif' }, 400);
    }

    const dbStudent = await context.env.DB.prepare(
      "SELECT nis, nama, kelas FROM siswa WHERE nis = ?"
    ).bind(targetNis).first();

    const verifiedNama = dbStudent ? dbStudent.nama : cleanPlainText(session.nama || body.nama || ('Siswa ' + targetNis), 100);
    const verifiedKelas = dbStudent ? dbStudent.kelas : cleanPlainText(session.kelas || body.kelas || 'XII', 30);

    // 1. VALIDASI PIN TIM (Rate-Limited per NIS)
    if (body.action === 'validate_pin') {
      const rl = await checkPinRateLimit(context.env.DB, targetNis);
      if (rl.blocked) {
        return jsonResponse({
          error: `Terlalu banyak tebakan PIN salah. Tunggu ${rl.remainingSec} detik.`,
          valid: false
        }, 429, { 'Retry-After': String(rl.remainingSec) });
      }

      const waveNo = Number(body.wave) || 1;
      const pin = Number(body.pin) || 0;
      const isValid = (pin === SECRET_COOP_DATA.targetPins[waveNo]);

      if (!isValid) {
        await recordPinFailure(context.env.DB, rl.key, rl.rec);
        try {
          await context.env.DB.prepare(`
            UPDATE coop_raid_scores 
            SET pin_errors = pin_errors + 1, updated_at = ?
            WHERE nis = ?
          `).bind(new Date().toISOString(), targetNis).run();
        } catch (e) {}
      } else if (rl.key) {
        try { await context.env.DB.prepare("DELETE FROM auth_rate_limits WHERE ip = ?").bind(rl.key).run(); } catch (_) {}
      }

      return jsonResponse({
        success: true,
        valid: isValid,
        wave: waveNo
      });
    }

    const kelompok = cleanPlainText(body.kelompok, 60);
    const anggota = cleanPlainText(body.anggota, 80);

    // 2. SUBMIT & PENILAIAN OTOMATIS SERVER-SIDE + MASUK NILAI CBT RESMI
    if (body.action === 'submit_individual') {
      const userAnswers = (typeof body.answers_indiv === 'object' && body.answers_indiv !== null) ? body.answers_indiv : {};

      let correctCount = 0;
      const results = {};
      [1, 2, 3, 4, 5].forEach(qNo => {
        const isCor = gradeIndividualQuestion(qNo, userAnswers[qNo]);
        results[qNo] = isCor;
        if (isCor) correctCount++;
      });

      const skorCoop = 100;
      const skorIndiv = correctCount * 20;
      const skorAkhir = Math.round((skorCoop * 0.4) + (skorIndiv * 0.6));

      const existingRow = await context.env.DB.prepare(
        "SELECT tab_switch_count, pin_errors FROM coop_raid_scores WHERE nis = ?"
      ).bind(targetNis).first();
      const mergedTabSwitches = Math.max(Number(existingRow?.tab_switch_count || 0), Math.max(0, Math.min(999, Number(body.tab_switch_count) || 0)));
      const mergedPinErrors = Math.max(Number(existingRow?.pin_errors || 0), Math.max(0, Math.min(999, Number(body.pin_errors) || 0)));
      const integrity = computeIntegrity(mergedTabSwitches);

      const ansW1 = typeof body.answers_wave1 === 'object' ? JSON.stringify(body.answers_wave1) : String(body.answers_wave1 || '').slice(0, 2000);
      const ansW2 = typeof body.answers_wave2 === 'object' ? JSON.stringify(body.answers_wave2) : String(body.answers_wave2 || '').slice(0, 2000);
      const ansW3 = typeof body.answers_wave3 === 'object' ? JSON.stringify(body.answers_wave3) : String(body.answers_wave3 || '').slice(0, 2000);
      const ansIndivStr = JSON.stringify(userAnswers).slice(0, 2000);
      const resultsIndivStr = JSON.stringify(results);
      const updatedAt = new Date().toISOString();

      await context.env.DB.prepare(`
        INSERT INTO coop_raid_scores (
          nis, nama, kelas, kelompok, anggota, status,
          skor_coop, skor_individu, skor_akhir,
          tab_switch_count, pin_errors, integrity_level, integrity_label,
          answers_wave1, answers_wave2, answers_wave3, answers_indiv, results_indiv,
          updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(nis) DO UPDATE SET
          nama = excluded.nama,
          kelas = excluded.kelas,
          kelompok = excluded.kelompok,
          anggota = excluded.anggota,
          status = 'Selesai',
          skor_coop = 100,
          skor_individu = MAX(coop_raid_scores.skor_individu, excluded.skor_individu),
          skor_akhir = MAX(coop_raid_scores.skor_akhir, excluded.skor_akhir),
          tab_switch_count = MAX(coop_raid_scores.tab_switch_count, excluded.tab_switch_count),
          pin_errors = MAX(coop_raid_scores.pin_errors, excluded.pin_errors),
          integrity_level = excluded.integrity_level,
          integrity_label = excluded.integrity_label,
          answers_wave1 = CASE WHEN excluded.answers_wave1 != '' THEN excluded.answers_wave1 ELSE coop_raid_scores.answers_wave1 END,
          answers_wave2 = CASE WHEN excluded.answers_wave2 != '' THEN excluded.answers_wave2 ELSE coop_raid_scores.answers_wave2 END,
          answers_wave3 = CASE WHEN excluded.answers_wave3 != '' THEN excluded.answers_wave3 ELSE coop_raid_scores.answers_wave3 END,
          answers_indiv = excluded.answers_indiv,
          results_indiv = excluded.results_indiv,
          updated_at = excluded.updated_at
      `).bind(
        targetNis, verifiedNama, verifiedKelas, kelompok, anggota, 'Selesai',
        skorCoop, skorIndiv, skorAkhir,
        mergedTabSwitches, mergedPinErrors, integrity.level, integrity.label,
        ansW1, ansW2, ansW3, ansIndivStr, resultsIndivStr,
        updatedAt
      ).run();

      // Sinkronkan ke nilai_cbt langsung dari server (menggantikan pengiriman skor mentah dari browser)
      const durasiDetik = Math.max(15, Math.min(7200, Number(body.durasi_detik) || 300));
      try {
        await context.env.DB.prepare(`
          INSERT INTO nilai_cbt (
            nis, nama, kelas, mapel, kode_pertemuan,
            skor, jumlah_soal, jumlah_benar, jumlah_salah,
            durasi_detik, jumlah_percobaan, waktu_submit, is_flagged
          ) VALUES (?, ?, ?, 'wajib', 'COOP_STATISTIKA', ?, 5, ?, ?, ?, 1, ?, ?)
          ON CONFLICT(nis, mapel, kode_pertemuan) DO UPDATE SET
            skor = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.skor ELSE nilai_cbt.skor END,
            jumlah_benar = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.jumlah_benar ELSE nilai_cbt.jumlah_benar END,
            jumlah_salah = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.jumlah_salah ELSE nilai_cbt.jumlah_salah END,
            durasi_detik = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.durasi_detik ELSE nilai_cbt.durasi_detik END,
            waktu_submit = CASE WHEN excluded.skor >= nilai_cbt.skor THEN excluded.waktu_submit ELSE nilai_cbt.waktu_submit END
        `).bind(
          targetNis, verifiedNama, verifiedKelas,
          skorAkhir, correctCount, 5 - correctCount, durasiDetik, updatedAt, integrity.level === 'merah' ? 1 : 0
        ).run();
        await updateStudentGamification(context.env.DB, targetNis);
      } catch (eNilai) {
        console.warn('Co-op nilai_cbt sync warning:', eNilai);
      }

      return jsonResponse({
        success: true,
        skor_coop: skorCoop,
        skor_individu: skorIndiv,
        skor_akhir: skorAkhir,
        results,
        updated_at: updatedAt
      });
    }

    // 3. SYNC LIVE STATE UMUM (TIDAK PERNAH MENERIMA SKOR DARI KLIEN)
    const allowedStatus = ['Aktif', 'Sedang Mengerjakan', 'Mengerjakan', 'Gelombang 1', 'Gelombang 2', 'Gelombang 3', 'Evaluasi Individu'];
    const safeStatus = allowedStatus.includes(String(body.status || '').trim()) ? String(body.status).trim() : 'Aktif';

    const existingRow = await context.env.DB.prepare(
      "SELECT status, skor_coop, skor_individu, skor_akhir, tab_switch_count, pin_errors FROM coop_raid_scores WHERE nis = ?"
    ).bind(targetNis).first();

    const mergedTabSwitches = Math.max(Number(existingRow?.tab_switch_count || 0), Math.max(0, Math.min(999, Number(body.tab_switch_count) || 0)));
    const mergedPinErrors = Math.max(Number(existingRow?.pin_errors || 0), Math.max(0, Math.min(999, Number(body.pin_errors) || 0)));
    const integrity = computeIntegrity(mergedTabSwitches);

    const ansW1 = typeof body.answers_wave1 === 'object' ? JSON.stringify(body.answers_wave1) : String(body.answers_wave1 || '').slice(0, 2000);
    const ansW2 = typeof body.answers_wave2 === 'object' ? JSON.stringify(body.answers_wave2) : String(body.answers_wave2 || '').slice(0, 2000);
    const ansW3 = typeof body.answers_wave3 === 'object' ? JSON.stringify(body.answers_wave3) : String(body.answers_wave3 || '').slice(0, 2000);
    const ansIndiv = typeof body.answers_indiv === 'object' ? JSON.stringify(body.answers_indiv) : String(body.answers_indiv || '').slice(0, 2000);
    const updatedAt = new Date().toISOString();

    await context.env.DB.prepare(`
      INSERT INTO coop_raid_scores (
        nis, nama, kelas, kelompok, anggota, status,
        skor_coop, skor_individu, skor_akhir,
        tab_switch_count, pin_errors, integrity_level, integrity_label,
        answers_wave1, answers_wave2, answers_wave3, answers_indiv,
        updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, 0, 0, 0, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(nis) DO UPDATE SET
        nama = excluded.nama,
        kelas = excluded.kelas,
        kelompok = excluded.kelompok,
        anggota = excluded.anggota,
        status = CASE WHEN coop_raid_scores.status = 'Selesai' THEN 'Selesai' ELSE excluded.status END,
        tab_switch_count = MAX(coop_raid_scores.tab_switch_count, excluded.tab_switch_count),
        pin_errors = MAX(coop_raid_scores.pin_errors, excluded.pin_errors),
        integrity_level = excluded.integrity_level,
        integrity_label = excluded.integrity_label,
        answers_wave1 = CASE WHEN excluded.answers_wave1 != '' THEN excluded.answers_wave1 ELSE coop_raid_scores.answers_wave1 END,
        answers_wave2 = CASE WHEN excluded.answers_wave2 != '' THEN excluded.answers_wave2 ELSE coop_raid_scores.answers_wave2 END,
        answers_wave3 = CASE WHEN excluded.answers_wave3 != '' THEN excluded.answers_wave3 ELSE coop_raid_scores.answers_wave3 END,
        answers_indiv = CASE WHEN excluded.answers_indiv != '' THEN excluded.answers_indiv ELSE coop_raid_scores.answers_indiv END,
        updated_at = excluded.updated_at
    `).bind(
      targetNis, verifiedNama, verifiedKelas, kelompok, anggota, safeStatus,
      mergedTabSwitches, mergedPinErrors, integrity.level, integrity.label,
      ansW1, ansW2, ansW3, ansIndiv,
      updatedAt
    ).run();

    return jsonResponse({ success: true, nis: targetNis, updated_at: updatedAt });
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}
