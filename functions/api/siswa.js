// functions/api/siswa.js
// Endpoint Data Siswa (Cloudflare D1 SQLite - Authenticated)

import { authenticateRequest, jsonResponse } from './_auth.js';

export async function onRequestGet(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }

    const session = await authenticateRequest(context.request, context.env);
    const url = new URL(context.request.url);
    const nis = url.searchParams.get('nis');

    if (nis) {
      const student = await context.env.DB.prepare(
        "SELECT nis, nama, kelas FROM siswa WHERE nis = ?"
      ).bind(String(nis)).first();

      return jsonResponse(student || null);
    }

    // Mengambil seluruh daftar siswa memerlukan sesi aktif
    if (!session) {
      return jsonResponse({ error: 'Akses ditolak (401): Memerlukan sesi login.' }, 401);
    }

    const { results } = await context.env.DB.prepare(
      "SELECT nis, nama, kelas FROM siswa ORDER BY kelas ASC, nama ASC"
    ).all();

    return jsonResponse(results || []);
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}
