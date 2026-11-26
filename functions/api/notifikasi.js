// functions/api/notifikasi.js
// Cloudflare Pages Functions - Sistem Pusat Notifikasi Siswa & Broadcast Guru
// Zero-Bug • Real-Time Unread Counter • Session-Bound

import { authenticateRequest, jsonResponse } from './_auth.js';

async function ensureNotifReadTable(db) {
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS notifikasi_dibaca (
      notif_id INTEGER NOT NULL,
      nis TEXT NOT NULL,
      read_at TEXT NOT NULL,
      PRIMARY KEY (notif_id, nis)
    )
  `).run();
}

function sanitizeSafeNotifLink(raw) {
  const s = String(raw || '').trim().slice(0, 255);
  if (!s) return '';
  if (s.startsWith('#') || s.startsWith('/')) return s;
  if (/^https?:\/\//i.test(s)) return s;
  return '';
}

// 1. GET /api/notifikasi - Mengambil notifikasi siswa aktif (personal + broadcast dengan status baca per-siswa)
export async function onRequestGet(context) {
  try {
    const session = await authenticateRequest(context.request, context.env);
    if (!session) {
      return jsonResponse({
        error: "Akses ditolak (401): Silakan login untuk melihat notifikasi."
      }, 401);
    }

    await ensureNotifReadTable(context.env.DB);
    const isGuru = session.role === 'guru';
    const nis = String(session.nis || '').trim();

    let notifs = [];
    let unreadCount = 0;

    if (isGuru) {
      const { results } = await context.env.DB.prepare(`
        SELECT * FROM notifikasi_siswa 
        ORDER BY id DESC LIMIT 25
      `).all();
      notifs = results || [];
    } else {
      const { results } = await context.env.DB.prepare(`
        SELECT n.id, n.nis, n.judul, n.pesan, n.tipe, n.tautan, n.created_at,
               CASE
                 WHEN n.nis IS NOT NULL THEN n.is_read
                 ELSE CASE WHEN d.notif_id IS NOT NULL THEN 1 ELSE 0 END
               END AS is_read
        FROM notifikasi_siswa n
        LEFT JOIN notifikasi_dibaca d ON d.notif_id = n.id AND d.nis = ?
        WHERE n.nis = ? OR n.nis IS NULL
        ORDER BY n.id DESC LIMIT 25
      `).bind(nis, nis).all();
      notifs = results || [];

      const unreadRow = await context.env.DB.prepare(`
        SELECT count(*) as count
        FROM notifikasi_siswa n
        LEFT JOIN notifikasi_dibaca d ON d.notif_id = n.id AND d.nis = ?
        WHERE (n.nis = ? AND n.is_read = 0)
           OR (n.nis IS NULL AND d.notif_id IS NULL)
      `).bind(nis, nis).first();
      unreadCount = unreadRow?.count || 0;
    }

    return jsonResponse({
      success: true,
      unread_count: unreadCount,
      notifications: notifs
    });

  } catch (err) {
    console.error("Error get notifikasi:", err);
    return jsonResponse({ error: "Gagal mengambil data notifikasi." }, 500);
  }
}

// 2. POST /api/notifikasi - Menandai notifikasi dibaca atau Guru membuat notifikasi baru
export async function onRequestPost(context) {
  try {
    const session = await authenticateRequest(context.request, context.env);
    if (!session) {
      return jsonResponse({ error: "Akses ditolak (401): Sesi kedaluwarsa." }, 401);
    }

    await ensureNotifReadTable(context.env.DB);
    const body = await context.request.json().catch(() => ({}));
    const action = String(body.action || 'mark_read').toLowerCase();

    // A. Aksi Siswa: Tandai Notifikasi Sudah Dibaca (Per-Siswa, aman untuk broadcast)
    if (action === 'mark_read') {
      const nis = String(session.nis || '').trim();
      const notifId = Number(body.id);

      if (notifId) {
        await context.env.DB.prepare(`
          UPDATE notifikasi_siswa SET is_read = 1 WHERE id = ? AND nis = ?
        `).bind(notifId, nis).run();

        await context.env.DB.prepare(`
          INSERT OR IGNORE INTO notifikasi_dibaca (notif_id, nis, read_at)
          SELECT id, ?, datetime('now') FROM notifikasi_siswa WHERE id = ? AND nis IS NULL
        `).bind(nis, notifId).run();
      } else {
        await context.env.DB.prepare(`
          UPDATE notifikasi_siswa SET is_read = 1 WHERE nis = ? AND is_read = 0
        `).bind(nis).run();

        await context.env.DB.prepare(`
          INSERT OR IGNORE INTO notifikasi_dibaca (notif_id, nis, read_at)
          SELECT id, ?, datetime('now') FROM notifikasi_siswa WHERE nis IS NULL
        `).bind(nis).run();
      }

      return jsonResponse({
        success: true,
        message: "Notifikasi telah ditandai sebagai dibaca."
      });
    }

    // B. Aksi Guru: Membuat Notifikasi / Broadcast Baru
    if (action === 'broadcast' || action === 'create') {
      if (session.role !== 'guru') {
        return jsonResponse({ error: "Akses dilarang (403): Hanya guru yang dapat mengirim broadcast." }, 403);
      }

      const judul = String(body.judul || '').replace(/<[^>]*>/g, '').trim().slice(0, 255);
      const pesan = String(body.pesan || '').replace(/<[^>]*>/g, '').trim().slice(0, 5000);
      const tipe = ['info', 'success', 'warning', 'balasan_guru', 'event', 'prestasi'].includes(body.tipe) ? body.tipe : 'info';
      const targetNis = body.target_nis ? String(body.target_nis).trim() : null;
      const tautan = sanitizeSafeNotifLink(body.tautan);

      if (!judul || !pesan) {
        return jsonResponse({ error: "Judul dan pesan notifikasi wajib diisi." }, 400);
      }

      await context.env.DB.prepare(`
        INSERT INTO notifikasi_siswa (nis, judul, pesan, tipe, tautan, is_read, created_at)
        VALUES (?, ?, ?, ?, ?, 0, datetime('now'))
      `).bind(targetNis, judul, pesan, tipe, tautan).run();

      return jsonResponse({
        success: true,
        message: targetNis 
          ? `Notifikasi personal berhasil dikirim ke siswa NIS ${targetNis}.`
          : "Notifikasi broadcast berhasil dikirim ke seluruh siswa portal."
      });
    }

    // C. Aksi Guru: Hapus / Bersihkan Notifikasi
    if (action === 'clear_all') {
      if (session.role !== 'guru') {
        return jsonResponse({ error: "Akses dilarang (403): Hanya guru yang dapat membersihkan semua notifikasi." }, 403);
      }
      await context.env.DB.prepare(`DELETE FROM notifikasi_siswa`).run();
      await context.env.DB.prepare(`DELETE FROM sqlite_sequence WHERE name='notifikasi_siswa'`).run();
      return jsonResponse({
        success: true,
        message: "Seluruh notifikasi berhasil dibersihkan."
      });
    }

    if (action === 'delete') {
      if (session.role !== 'guru') {
        return jsonResponse({ error: "Akses dilarang (403): Hanya guru yang dapat menghapus notifikasi." }, 403);
      }
      const notifId = Number(body.id);
      if (!notifId) {
        return jsonResponse({ error: "ID notifikasi tidak valid." }, 400);
      }
      await context.env.DB.prepare(`DELETE FROM notifikasi_siswa WHERE id = ?`).bind(notifId).run();
      return jsonResponse({
        success: true,
        message: `Notifikasi #${notifId} berhasil dihapus.`
      });
    }

    return jsonResponse({ error: "Aksi tidak dikenali." }, 400);

  } catch (err) {
    console.error("Error post notifikasi:", err);
    return jsonResponse({ error: "Gagal memproses aksi notifikasi." }, 500);
  }
}

// 3. DELETE /api/notifikasi - Guru menghapus notifikasi atau membersihkan semua
export async function onRequestDelete(context) {
  try {
    const session = await authenticateRequest(context.request, context.env);
    if (!session || session.role !== 'guru') {
      return jsonResponse({ error: "Akses dilarang (403): Hanya guru yang dapat menghapus notifikasi." }, 403);
    }

    const url = new URL(context.request.url);
    const id = url.searchParams.get('id');

    if (id) {
      await context.env.DB.prepare(`DELETE FROM notifikasi_siswa WHERE id = ?`).bind(Number(id)).run();
      return jsonResponse({ success: true, message: `Notifikasi #${id} berhasil dihapus.` });
    } else {
      await context.env.DB.prepare(`DELETE FROM notifikasi_siswa`).run();
      await context.env.DB.prepare(`DELETE FROM sqlite_sequence WHERE name='notifikasi_siswa'`).run();
      return jsonResponse({ success: true, message: "Seluruh notifikasi berhasil dibersihkan." });
    }
  } catch (err) {
    console.error("Error delete notifikasi:", err);
    return jsonResponse({ error: "Gagal menghapus data notifikasi." }, 500);
  }
}
