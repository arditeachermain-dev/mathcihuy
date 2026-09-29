// functions/api/pembahasan.js
// On-Demand Solution & Answer Key Delivery API
// Strictly Gated: Only returns solutions if the student has officially submitted the exam in D1!

import { authenticateRequest, jsonResponse } from './_auth.js';
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
    if (!session) {
      return jsonResponse({
        error: 'Akses ditolak (401): Anda harus login terlebih dahulu untuk mengakses pembahasan.'
      }, 401);
    }

    const url = new URL(context.request.url);
    const mapel = url.searchParams.get('mapel') || 'wajib';
    const kode_pertemuan = url.searchParams.get('kode_pertemuan') || url.searchParams.get('pkg') || 'P01';
    let tingkat = url.searchParams.get('tingkat');
    if (!tingkat) {
      tingkat = extractTingkat(session.kelas);
    }

    // 1. GURU: Akses Penuh tanpa syarat
    if (session.role === 'guru') {
      const solutions = getSolutionsForPackage(tingkat, mapel, kode_pertemuan);
      if (!solutions) {
        return jsonResponse({ error: 'Pembahasan untuk paket ini belum tersedia.' }, 404);
      }
      return jsonResponse({
        success: true,
        tingkat,
        mapel,
        kode_pertemuan,
        solutions
      });
    }

    // 2. SISWA: Wajib sudah menyelesaikan & mengumpulkan ujian paket bersangkutan di database D1!
    if (session.role === 'siswa') {
      const nis = String(session.nis);
      const submission = await context.env.DB.prepare(
        "SELECT id, skor, waktu_submit FROM nilai_cbt WHERE nis = ? AND mapel = ? AND kode_pertemuan = ?"
      ).bind(nis, String(mapel), String(kode_pertemuan)).first();

      if (!submission) {
        return jsonResponse({
          error: 'Akses ditolak (403): Pembahasan dan kunci jawaban hanya dapat dibuka setelah Anda menyelesaikan dan mengumpulkan ujian paket ini secara resmi.'
        }, 403);
      }

      const solutions = getSolutionsForPackage(tingkat, mapel, kode_pertemuan);
      if (!solutions) {
        return jsonResponse({ error: 'Pembahasan untuk paket ini sedang disiapkan.' }, 404);
      }

      return jsonResponse({
        success: true,
        tingkat,
        mapel,
        kode_pertemuan,
        skor: submission.skor,
        waktu_submit: submission.waktu_submit,
        solutions
      });
    }

    return jsonResponse({ error: 'Peran akun tidak dikenali' }, 403);
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}
