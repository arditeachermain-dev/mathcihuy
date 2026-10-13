// functions/api/cbt-locks.js
// Dynamic CBT Package Lock & Unlock Management API
// Teacher Control Center: Mr. Muhammad Ardiansyah, S.Pd.Gr.
// Zero-Leak Guarantee: Centrally manages lock states across Cloudflare D1

import { authenticateRequest, jsonResponse } from './_auth.js';

// Master list of packages for Grade 12, 11, 10
export const ALL_KNOWN_PACKAGES = {
  "12": {
    wajib: Array.from({ length: 21 }, (_, i) => 'P' + String(i + 1).padStart(2, '0')),
    minat: Array.from({ length: 30 }, (_, i) => 'P' + String(i + 1).padStart(2, '0')),
    clil: ['P25', 'P26', 'P27', 'P28', 'P29', 'P30']
  },
  "11": {
    wajib: Array.from({ length: 50 }, (_, i) => 'P' + String(i + 1).padStart(2, '0')),
    minat: Array.from({ length: 50 }, (_, i) => 'P' + String(i + 1).padStart(2, '0'))
  },
  "10": {
    wajib: Array.from({ length: 48 }, (_, i) => 'P' + String(i + 1).padStart(2, '0'))
  }
};

async function ensureTableExists(db) {
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS cbt_package_locks (
      package_key TEXT PRIMARY KEY,
      is_locked INTEGER NOT NULL DEFAULT 1,
      locked_reason TEXT,
      updated_at TEXT NOT NULL
    )
  `).run();
}

export async function onRequestGet(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }

    const db = context.env.DB;
    await ensureTableExists(db);

    const { results } = await db.prepare(
      "SELECT package_key, is_locked, locked_reason, updated_at FROM cbt_package_locks"
    ).all();

    const locksMap = {};
    const details = results || [];
    details.forEach(row => {
      locksMap[row.package_key] = Number(row.is_locked);
    });

    return jsonResponse({
      success: true,
      locks: locksMap,
      details,
      known_packages: ALL_KNOWN_PACKAGES
    });
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}

export async function onRequestPost(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }

    // 1. Strict Authentication: Teacher Only!
    const session = await authenticateRequest(context.request, context.env);
    if (!session) {
      return jsonResponse({
        error: 'Akses ditolak (401): Anda harus login sebagai Guru untuk mengakses modul ini.'
      }, 401);
    }

    if (session.role !== 'guru') {
      return jsonResponse({
        error: 'Akses ditolak (403): Hanya Guru Pengampu yang berwenang mengubah kunci paket CBT.'
      }, 403);
    }

    const body = await context.request.json().catch(() => null);
    if (!body) {
      return jsonResponse({ error: 'Payload JSON tidak valid' }, 400);
    }

    const db = context.env.DB;
    await ensureTableExists(db);
    const now = new Date().toISOString();

    // 2. Bulk Action Handler
    if (body.action) {
      const action = String(body.action).trim().toLowerCase();
      const tingkat = String(body.tingkat || '12').trim();
      const targetMapel = String(body.mapel || 'all').trim().toLowerCase();

      let targetPkgs = [];
      const packagesForTingkat = ALL_KNOWN_PACKAGES[tingkat] || ALL_KNOWN_PACKAGES["12"];
      const mapelList = (targetMapel === 'all' || !targetMapel) ? Object.keys(packagesForTingkat) : [targetMapel];

      if (action === 'lock_exam_week') {
        // Quick shortcut: Lock active exam week packages (Wajib P17, P18; Minat P18, P19)
        targetPkgs = [
          { key: '12_wajib_P17', lock: 1, reason: 'Materi Uji Aktif Pekan W42' },
          { key: '12_wajib_P18', lock: 1, reason: 'Materi Uji Aktif Pekan W42' },
          { key: '12_minat_P18', lock: 1, reason: 'Materi Uji Aktif Pekan W42' },
          { key: '12_minat_P19', lock: 1, reason: 'Materi Uji Aktif Pekan W42' }
        ];
      } else {
        const lockVal = (action === 'lock_all') ? 1 : 0;
        const defaultReason = lockVal === 1 ? 'Dikunci oleh guru secara massal' : 'Dibuka oleh guru';

        mapelList.forEach(m => {
          const pkgs = packagesForTingkat[m] || [];
          pkgs.forEach(p => {
            targetPkgs.push({
              key: `${tingkat}_${m}_${p}`,
              lock: lockVal,
              reason: body.reason || defaultReason
            });
          });
        });
      }

      if (targetPkgs.length > 0) {
        const stmts = targetPkgs.map(item => {
          return db.prepare(`
            INSERT INTO cbt_package_locks (package_key, is_locked, locked_reason, updated_at)
            VALUES (?, ?, ?, ?)
            ON CONFLICT(package_key) DO UPDATE SET
              is_locked = excluded.is_locked,
              locked_reason = excluded.locked_reason,
              updated_at = excluded.updated_at
          `).bind(item.key, item.lock, item.reason, now);
        });

        await db.batch(stmts);
      }

      return jsonResponse({
        success: true,
        message: `Berhasil mengeksekusi aksi massal: ${action} (${targetPkgs.length} paket diperbarui)`,
        updated_count: targetPkgs.length
      });
    }

    // 3. Single Package Toggle
    let package_key = String(body.package_key || '').trim();
    if (!package_key) {
      // Fallback: construct from tingkat, mapel, kode_pertemuan
      const t = String(body.tingkat || '12').trim();
      const m = String(body.mapel || 'wajib').trim().toLowerCase();
      const p = String(body.kode_pertemuan || body.pkg || 'P01').trim().toUpperCase();
      package_key = `${t}_${m}_${p}`;
    }

    const is_locked = body.is_locked === 1 || body.is_locked === true || body.is_locked === '1' ? 1 : 0;
    const locked_reason = String(body.reason || (is_locked ? 'Dikunci oleh guru' : 'Dibuka oleh guru')).trim();

    await db.prepare(`
      INSERT INTO cbt_package_locks (package_key, is_locked, locked_reason, updated_at)
      VALUES (?, ?, ?, ?)
      ON CONFLICT(package_key) DO UPDATE SET
        is_locked = excluded.is_locked,
        locked_reason = excluded.locked_reason,
        updated_at = excluded.updated_at
    `).bind(package_key, is_locked, locked_reason, now).run();

    return jsonResponse({
      success: true,
      message: `Status paket ${package_key} berhasil diubah menjadi: ${is_locked ? 'TERKUNCI 🔒' : 'TERBUKA 🔓'}`,
      package_key,
      is_locked,
      locked_reason,
      updated_at: now
    });
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}
