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

function isW42LockedPackage(mapel, kode_pertemuan) {
  const cleanMapel = String(mapel || '').trim().toLowerCase();
  const cleanKode = String(kode_pertemuan || '').trim().toUpperCase();
  // W42 Active Lockdown Period: Sampai Minggu, 18 Oktober 2026 pukul 23:59:59 WIB (2026-10-18T16:59:59.000Z)
  const now = new Date();
  const lockdownEnd = new Date('2026-10-18T16:59:59.000Z');
  if (now > lockdownEnd) return false;

  if (cleanMapel === 'wajib' && ['P17', 'P18'].includes(cleanKode)) return true;
  if (cleanMapel === 'minat' && ['P18', 'P19'].includes(cleanKode)) return true;
  return false;
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

      const rawSolutions = getSolutionsForPackage(tingkat, mapel, kode_pertemuan);
      if (!rawSolutions) {
        return jsonResponse({ error: 'Pembahasan untuk paket ini sedang disiapkan.' }, 404);
      }

      // Proteksi Kunci Paket Dinamis (D1 cbt_package_locks)
      const packageKey = `${tingkat}_${String(mapel).toLowerCase()}_${String(kode_pertemuan).toUpperCase()}`;
      let isPackageLocked = false;
      let lockReason = '';

      try {
        const lockRow = await context.env.DB.prepare(
          "SELECT is_locked, locked_reason FROM cbt_package_locks WHERE package_key = ?"
        ).bind(packageKey).first();

        if (lockRow) {
          isPackageLocked = Number(lockRow.is_locked) === 1;
          lockReason = lockRow.locked_reason || 'Dikunci oleh guru';
        } else {
          // Fallback default: W42 active lock
          isPackageLocked = isW42LockedPackage(mapel, kode_pertemuan);
          if (isPackageLocked) lockReason = 'Materi Uji Aktif Pekan W42';
        }
      } catch (_) {
        isPackageLocked = isW42LockedPackage(mapel, kode_pertemuan);
      }

      if (isPackageLocked) {
        const solutions = rawSolutions.map(sol => ({
          q_idx: sol.q_idx,
          kunci: null,
          is_locked: true,
          hint: null,
          bahas: `🔒 Pembahasan langkah demi langkah dan kunci jawaban resmi untuk paket ini sedang dikunci oleh guru (Mr. Ardi). ${lockReason ? '(' + lockReason + ') ' : ''}Silakan ikuti pembahasan bersama di kelas!`
        }));

        return jsonResponse({
          success: true,
          tingkat,
          mapel,
          kode_pertemuan,
          skor: submission.skor,
          waktu_submit: submission.waktu_submit,
          is_locked: true,
          lock_reason: lockReason || 'LOCKED_BY_TEACHER',
          solutions
        });
      }

      let solutions = [];
      const isUnderKkm = Number(submission.skor || 0) < 75;

      if (isUnderKkm) {
        solutions = rawSolutions.map(sol => {
          let safeHint = (sol.bahas || '')
            .replace(/(kunci\s*(jawaban)?\s*(adalah|:)?\s*\(?[A-E]\)?)/gi, '💡 Konsep & Petunjuk:')
            .replace(/\(?(Opsi|Pilihan)\s*[A-E]\)?/gi, '(Opsi Jawaban)')
            .replace(/Kesimpulan:\s*Kunci\s*[A-E]/gi, 'Kesimpulan: Selesaikan dengan konsep di atas');
          return {
            q_idx: sol.q_idx,
            kunci: null,
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
        tingkat,
        mapel,
        kode_pertemuan,
        skor: submission.skor,
        waktu_submit: submission.waktu_submit,
        is_locked: isUnderKkm,
        solutions
      });
    }

    return jsonResponse({ error: 'Peran akun tidak dikenali' }, 403);
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}
