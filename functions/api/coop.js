// functions/api/coop.js
// Cloudflare D1 Backend for Live Co-op Raid Proctoring & Student State Sync
// SMA Global Islamic School 2 Serpong • Mr. Ardi

import { jsonResponse } from './_auth.js';

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
      updated_at TEXT
    )
  `).run();
}

export async function onRequestGet(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }
    await ensureTable(context.env.DB);

    const url = new URL(context.request.url);
    const nis = url.searchParams.get('nis');

    if (nis) {
      const row = await context.env.DB.prepare(
        "SELECT * FROM coop_raid_scores WHERE nis = ?"
      ).bind(String(nis)).first();
      return jsonResponse(row || null);
    }

    // Return all records for teacher proctoring
    const { results } = await context.env.DB.prepare(
      "SELECT * FROM coop_raid_scores ORDER BY updated_at DESC"
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
    await ensureTable(context.env.DB);

    const body = await context.request.json();
    if (!body || !body.nis) {
      return jsonResponse({ error: 'NIS wajib diisi' }, 400);
    }

    const nis = String(body.nis).trim();
    const nama = String(body.nama || '').trim();
    const kelas = String(body.kelas || '').trim();
    const kelompok = String(body.kelompok || '').trim();
    const anggota = String(body.anggota || '').trim();
    const status = String(body.status || 'Aktif');
    const skorCoop = Number(body.skor_coop) || 0;
    const skorIndiv = Number(body.skor_individu) || 0;
    const skorAkhir = Number(body.skor_akhir) || 0;
    const tabSwitchCount = Number(body.tab_switch_count) || 0;
    const pinErrors = Number(body.pin_errors) || 0;
    const integrityLevel = String(body.integrity_level || 'hijau');
    const integrityLabel = String(body.integrity_label || 'Murni');
    const ansW1 = typeof body.answers_wave1 === 'object' ? JSON.stringify(body.answers_wave1) : String(body.answers_wave1 || '');
    const ansW2 = typeof body.answers_wave2 === 'object' ? JSON.stringify(body.answers_wave2) : String(body.answers_wave2 || '');
    const ansW3 = typeof body.answers_wave3 === 'object' ? JSON.stringify(body.answers_wave3) : String(body.answers_wave3 || '');
    const ansIndiv = typeof body.answers_indiv === 'object' ? JSON.stringify(body.answers_indiv) : String(body.answers_indiv || '');
    const updatedAt = new Date().toISOString();

    await context.env.DB.prepare(`
      INSERT INTO coop_raid_scores (
        nis, nama, kelas, kelompok, anggota, status,
        skor_coop, skor_individu, skor_akhir,
        tab_switch_count, pin_errors, integrity_level, integrity_label,
        answers_wave1, answers_wave2, answers_wave3, answers_indiv,
        updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(nis) DO UPDATE SET
        nama = excluded.nama,
        kelas = excluded.kelas,
        kelompok = excluded.kelompok,
        anggota = excluded.anggota,
        status = excluded.status,
        skor_coop = MAX(coop_raid_scores.skor_coop, excluded.skor_coop),
        skor_individu = MAX(coop_raid_scores.skor_individu, excluded.skor_individu),
        skor_akhir = MAX(coop_raid_scores.skor_akhir, excluded.skor_akhir),
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
      nis, nama, kelas, kelompok, anggota, status,
      skorCoop, skorIndiv, skorAkhir,
      tabSwitchCount, pinErrors, integrityLevel, integrityLabel,
      ansW1, ansW2, ansW3, ansIndiv,
      updatedAt
    ).run();

    return jsonResponse({ success: true, nis, updated_at: updatedAt });
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}
