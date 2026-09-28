// functions/api/siswa.js
// Endpoint Data Siswa (Cloudflare D1 SQLite - Strictly Authenticated & Authorized)

import { authenticateRequest, jsonResponse } from './_auth.js';

export async function onRequestGet(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }

    // Wajib memiliki sesi token aktif (Anti-Scraping / Anti-Enumeration)
    const session = await authenticateRequest(context.request, context.env);
    if (!session) {
      return jsonResponse({ error: 'Akses ditolak (401): Memerlukan sesi login aktif.' }, 401);
    }

    const url = new URL(context.request.url);
    const nis = url.searchParams.get('nis');

    // 1. Permintaan data siswa spesifik
    if (nis) {
      const cleanNis = String(nis).trim();

      // Siswa hanya berhak melihat data miliknya sendiri
      if (session.role === 'siswa' && String(session.nis) !== cleanNis) {
        return jsonResponse({ error: 'Akses dilarang (403): Anda tidak berhak melihat data siswa lain.' }, 403);
      }

      const student = await context.env.DB.prepare(
        "SELECT nis, nama, kelas FROM siswa WHERE nis = ?"
      ).bind(cleanNis).first();

      return jsonResponse(student || null);
    }

    // 2. Permintaan seluruh daftar siswa (HANYA GURU RESMI)
    if (session.role !== 'guru') {
      return jsonResponse({ error: 'Akses dilarang (403): Daftar seluruh siswa hanya dapat diakses oleh guru.' }, 403);
    }

    const { results } = await context.env.DB.prepare(
      "SELECT nis, nama, kelas FROM siswa ORDER BY kelas ASC, nama ASC"
    ).all();

    return jsonResponse(results || []);
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}
