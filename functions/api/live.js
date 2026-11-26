// functions/api/live.js
// Endpoint Draf Live Autosave (Cloudflare D1 SQLite - Authenticated & Sanitized)

import { authenticateRequest, jsonResponse } from './_auth.js';
import { ANSWER_KEYS, evaluateQuestion } from './_grading.js';

function extractTingkatFromKelas(kelasStr) {
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
    if (!session) {
      return jsonResponse({ error: 'Akses ditolak (401): Memerlukan sesi aktif.' }, 401);
    }

    const url = new URL(context.request.url);
    const nis = url.searchParams.get('nis');
    const mapel = url.searchParams.get('mapel') || 'wajib';
    const kode = url.searchParams.get('kode');
    const isAll = url.searchParams.get('all') === '1';

    // Guru membaca seluruh aktivitas live yang sedang berlangsung
    if (isAll) {
      if (session.role !== 'guru') {
        return jsonResponse({ error: 'Akses dilarang (403): Hanya guru yang dapat memantau seluruh aktivitas live.' }, 403);
      }
      const { results } = await context.env.DB.prepare(
        "SELECT id, nis, mapel, kode_pertemuan, q_idx, chosen, is_right, updated_at FROM cbt_live_answers ORDER BY updated_at DESC LIMIT 200"
      ).all();
      return jsonResponse(results || []);
    }

    if (!nis || !kode) {
      return jsonResponse([]);
    }

    // Siswa hanya boleh membaca draf miliknya sendiri
    if (session.role === 'siswa' && String(session.nis) !== String(nis)) {
      return jsonResponse({ error: 'Akses dilarang (403): Draf milik siswa lain tidak dapat diakses.' }, 403);
    }

    const { results } = await context.env.DB.prepare(
      "SELECT q_idx, chosen, is_right, updated_at FROM cbt_live_answers WHERE nis = ? AND mapel = ? AND kode_pertemuan = ?"
    ).bind(String(nis), String(mapel), String(kode)).all();

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
      return jsonResponse({ error: 'Akses ditolak (401): Silakan login untuk menyimpan draf.' }, 401);
    }

    const data = await context.request.json();
    const { nis, mapel, kode_pertemuan, q_idx, chosen } = data;

    if (!nis || !kode_pertemuan || q_idx === undefined) {
      return jsonResponse({ error: 'Parameter draf tidak lengkap' }, 400);
    }

    // Anti-Spoofing: Siswa hanya boleh menyimpan draf atas NIS miliknya sendiri
    if (session.role === 'siswa' && String(session.nis) !== String(nis)) {
      return jsonResponse({ error: 'Akses dilarang (403): NIS pengirim tidak cocok dengan sesi token.' }, 403);
    }

    // Sanitasi teks jawaban: potong batas wajar (max 500 karakter)
    const rawChosenForGrade = (typeof chosen === 'object' && chosen !== null) ? chosen : String(chosen ?? '');
    const cleanChosen = typeof chosen === 'object' && chosen !== null
      ? JSON.stringify(chosen).slice(0, 500)
      : String(chosen ?? '').slice(0, 500);

    // Evaluasi kebenaran murni di server (jangan pernah percaya boolean is_right dari klien)
    const cleanMapelStr = String(mapel || 'wajib').trim().toLowerCase();
    const baseMapel = cleanMapelStr.replace(/^t\d+_/, '');
    const userTingkat = extractTingkatFromKelas(session.kelas);
    const reqTingkat = String(data.tingkat || '').replace(/[^0-9]/g, '');
    const isAlumniOr12 = userTingkat === '12' || String(session.kelas || '').toLowerCase().includes('alumni');
    const targetTingkat = (isAlumniOr12 && ['10', '11', '12'].includes(reqTingkat)) ? reqTingkat : userTingkat;
    const cleanKode = String(kode_pertemuan || '').trim().toLowerCase();
    const qList = ANSWER_KEYS[`${targetTingkat}_${baseMapel}_${cleanKode}`] || ANSWER_KEYS[`${baseMapel}_${cleanKode}`] || null;
    const qObj = Array.isArray(qList) ? qList[Number(q_idx)] : null;
    const serverIsRight = qObj ? (evaluateQuestion(qObj, rawChosenForGrade) ? 1 : 0) : 0;

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
      Number(q_idx), cleanChosen, serverIsRight, now
    ).run();

    return jsonResponse({ success: true, updated_at: now });
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}

export async function onRequestDelete(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }

    const session = await authenticateRequest(context.request, context.env);
    if (!session) {
      return jsonResponse({ error: 'Akses ditolak (401)' }, 401);
    }

    const url = new URL(context.request.url);
    const nis = url.searchParams.get('nis');
    const mapel = url.searchParams.get('mapel');
    const kode = url.searchParams.get('kode');

    if (!nis) {
      return jsonResponse({ error: 'NIS wajib diisi' }, 400);
    }

    if (session.role === 'siswa' && String(session.nis) !== String(nis)) {
      return jsonResponse({ error: 'Akses dilarang (403)' }, 403);
    }

    let sql = "DELETE FROM cbt_live_answers WHERE nis = ?";
    const params = [String(nis)];

    if (mapel && kode) {
      sql += " AND mapel = ? AND kode_pertemuan = ?";
      params.push(String(mapel), String(kode));
    } else if (mapel) {
      sql += " AND mapel = ?";
      params.push(String(mapel));
    } else if (kode) {
      sql += " AND kode_pertemuan = ?";
      params.push(String(kode));
    }

    await context.env.DB.prepare(sql).bind(...params).run();
    return jsonResponse({ success: true, message: 'Draf live answers berhasil dibersihkan.' });
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}
