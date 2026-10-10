// functions/api/notifikasi.js
// Cloudflare Pages Functions - Sistem Pusat Notifikasi Siswa & Broadcast Guru
// Zero-Bug • Real-Time Unread Counter • Session-Bound

import { authenticateRequest, jsonResponse } from './_auth.js';

// 1. GET /api/notifikasi - Mengambil notifikasi siswa aktif (personal + broadcast)
export async function onRequestGet(context) {
  try {
    const session = await authenticateRequest(context.request, context.env);
    if (!session) {
      return jsonResponse({
        error: "Akses ditolak (401): Silakan login untuk melihat notifikasi."
      }, 401);
    }

    const isGuru = session.role === 'guru';
    const nis = String(session.nis || '').trim();

    let notifs = [];
    let unreadCount = 0;

    if (isGuru) {
      // Guru melihat 25 notifikasi / pengumuman terbaru
      const { results } = await context.env.DB.prepare(`
        SELECT * FROM notifikasi_siswa 
        ORDER BY id DESC LIMIT 25
      `).all();
      notifs = results || [];
    } else {
      // Siswa melihat notifikasi personal miliknya (nis = ?) dan pengumuman umum (nis IS NULL)
      const { results } = await context.env.DB.prepare(`
        SELECT * FROM notifikasi_siswa 
        WHERE nis = ? OR nis IS NULL
        ORDER BY id DESC LIMIT 25
      `).bind(nis).all();
      notifs = results || [];

      // Hitung notifikasi belum dibaca
      const unreadRow = await context.env.DB.prepare(`
        SELECT count(*) as count FROM notifikasi_siswa 
        WHERE (nis = ? OR nis IS NULL) AND is_read = 0
      `).bind(nis).first();
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

    const body = await context.request.json().catch(() => ({}));
    const action = String(body.action || 'mark_read').toLowerCase();

    // A. Aksi Siswa: Tandai Notifikasi Sudah Dibaca
    if (action === 'mark_read') {
      const nis = String(session.nis || '').trim();
      const notifId = Number(body.id);

      if (notifId) {
        // Tandai 1 notifikasi tertentu
        await context.env.DB.prepare(`
          UPDATE notifikasi_siswa SET is_read = 1 
          WHERE id = ? AND (nis = ? OR nis IS NULL)
        `).bind(notifId, nis).run();
      } else {
        // Tandai SEMUA notifikasi siswa sebagai sudah dibaca
        await context.env.DB.prepare(`
          UPDATE notifikasi_siswa SET is_read = 1 
          WHERE (nis = ? OR nis IS NULL) AND is_read = 0
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

      const judul = String(body.judul || '').replace(/<[^>]*>/g, '').trim().slice(0, 100);
      const pesan = String(body.pesan || '').replace(/<[^>]*>/g, '').trim().slice(0, 1000);
      const tipe = ['info', 'success', 'warning', 'balasan_guru'].includes(body.tipe) ? body.tipe : 'info';
      const targetNis = body.target_nis ? String(body.target_nis).trim() : null; // null = broadcast semua
      const tautan = String(body.tautan || '').trim().slice(0, 100);

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

    return jsonResponse({ error: "Aksi tidak dikenali." }, 400);

  } catch (err) {
    console.error("Error post notifikasi:", err);
    return jsonResponse({ error: "Gagal memproses aksi notifikasi." }, 500);
  }
}
