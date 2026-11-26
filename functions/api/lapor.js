// functions/api/lapor.js
// Cloudflare Pages Functions - Sistem Helpdesk & Pelaporan Bug/Error Siswa
// Zero-Bug • Anti-Spam • Honeypot Trap • Session-Bound • Discord Notification Integration

import { authenticateRequest, jsonResponse } from './_auth.js';

// Discord Integration (Membaca aman dari Environment Variable Cloudflare)
const DEFAULT_DISCORD_CHANNEL_LAPORAN = "1540996639341158472";

async function sendDiscordNotification(reportData, env) {
  try {
    const webhookUrl = env?.DISCORD_WEBHOOK_URL;
    const channelId = env?.DISCORD_CHANNEL_LAPORAN || DEFAULT_DISCORD_CHANNEL_LAPORAN;
    const botToken = env?.DISCORD_BOT_TOKEN;

    if (!webhookUrl && !botToken) {
      // Tidak ada kredensial Discord di environment, skip notifikasi eksternal
      return;
    }

    const kategoriLabels = {
      reload_hp: '📱 HP / Layar Ter-reload (Waktu / Jawaban Reset)',
      koneksi_putus: '📶 Koneksi Terputus / Nilai Belum Masuk',
      koreksi_soal: '❓ Koreksi Butir Soal / Kunci / Teks',
      lainnya: '📝 Kendala Teknis Lainnya'
    };
    const katLabel = kategoriLabels[reportData.kategori] || reportData.kategori;

    const embed = {
      title: `🔔 Laporan Kendala Siswa: ${reportData.nama} (${reportData.kelas})`,
      description: `**Kategori:** ${katLabel}\n**Paket Ujian:** ${reportData.mapel || '-'} ${reportData.kode_pertemuan || '-'}\n\n**Pesan Siswa:**\n> ${reportData.pesan.replace(/\n/g, '\n> ')}`,
      color: reportData.kategori === 'reload_hp' ? 0xF59E0B : (reportData.kategori === 'koreksi_soal' ? 0x3B82F6 : 0x10B981),
      fields: [
        { name: "NIS", value: String(reportData.nis), inline: true },
        { name: "Kelas", value: String(reportData.kelas), inline: true },
        { name: "Waktu Lapor", value: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }) + ' WIB', inline: true }
      ],
      footer: {
        text: `MathCihuy Helpdesk Engine • Telemetri: ${reportData.telemetri_summary || 'Web Client'}`
      },
      timestamp: new Date().toISOString()
    };

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ embeds: [embed] })
      });
    } else if (botToken && channelId) {
      await fetch(`https://discord.com/api/v10/channels/${channelId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bot ${botToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ embeds: [embed] })
      });
    }
  } catch (err) {
    console.warn("Gagal mengirim notifikasi Discord (non-fatal):", err);
  }
}

// 1. POST /api/lapor - Siswa mengirimkan laporan kendala
export async function onRequestPost(context) {
  try {
    const session = await authenticateRequest(context.request, context.env);
    if (!session) {
      return jsonResponse({
        error: "Akses ditolak (401): Anda harus login dengan akun siswa resmi untuk melaporkan kendala."
      }, 401);
    }

    const body = await context.request.json().catch(() => ({}));

    // A. Proteksi Honeypot Trap (Anti-Bot):
    // Jika input tersembunyi hp_whatsapp atau bot_trap diisi, drop diam-diam tanpa membebani database
    if (body.hp_whatsapp || body.bot_trap || body.website_url) {
      return jsonResponse({
        success: true,
        message: "Laporan telah diterima oleh sistem."
      });
    }

    const nis = String(session.nis || body.nis || '').trim();
    if (!nis) {
      return jsonResponse({ error: "Identitas NIS tidak ditemukan dalam sesi aktif." }, 400);
    }

    // Ambil identitas resmi siswa dari master database sekolah (Anti-Tamper)
    const studentInfo = await context.env.DB.prepare(
      "SELECT nis, nama, kelas FROM siswa WHERE nis = ?"
    ).bind(nis).first();

    const verifiedNama = studentInfo ? studentInfo.nama : String(session.nama || 'Siswa');
    const verifiedKelas = studentInfo ? studentInfo.kelas : String(session.kelas || 'XII');

    // B. Sanitasi & Validasi Input
    const rawKategori = String(body.kategori || 'lainnya').trim().toLowerCase();
    const validKategori = ['reload_hp', 'koneksi_putus', 'koreksi_soal', 'lainnya'];
    const cleanKategori = validKategori.includes(rawKategori) ? rawKategori : 'lainnya';

    const cleanMapel = String(body.mapel || '').replace(/<[^>]*>/g, '').trim().slice(0, 30);
    const cleanKode = String(body.kode_pertemuan || '').replace(/<[^>]*>/g, '').trim().slice(0, 30);
    
    let cleanPesan = String(body.pesan || '').replace(/<[^>]*>/g, '').trim();
    if (!cleanPesan || cleanPesan.length < 5) {
      return jsonResponse({
        error: "Mohon tuliskan penjelasan kendala minimal 5 karakter agar Pak Ardi dapat memahami masalah Anda."
      }, 400);
    }
    if (cleanPesan.length > 500) {
      cleanPesan = cleanPesan.slice(0, 500);
    }

    // C. Proteksi Rate-Limit (Maksimal 1 Laporan per 3 Menit per NIS)
    const lastReport = await context.env.DB.prepare(
      "SELECT waktu_lapor, pesan FROM laporan_siswa WHERE nis = ? ORDER BY id DESC LIMIT 1"
    ).bind(nis).first();

    if (lastReport && lastReport.waktu_lapor) {
      const lastTime = new Date(lastReport.waktu_lapor).getTime();
      const nowTime = Date.now();
      const diffSec = Math.round((nowTime - lastTime) / 1000);

      if (diffSec < 180) { // 3 menit
        const sisa = 180 - diffSec;
        return jsonResponse({
          error: `Mohon bersabar: Anda baru saja mengirim laporan. Tunggu ${sisa} detik lagi sebelum mengirim laporan berikutnya agar server tidak terbebani.`,
          error_code: 'RATE_LIMIT',
          remaining_sec: sisa
        }, 429);
      }

      // Deduplikasi Pesan (Pesan identik dalam 10 menit)
      if (lastReport.pesan === cleanPesan && diffSec < 600) {
        return jsonResponse({
          error: "Laporan dengan isi pesan yang sama persis sudah tercatat di sistem kami.",
          error_code: 'DUPLICATE'
        }, 429);
      }
    }

    // D. Pengemasan Telemetri Diagnostik Client yang Aman
    const userAgent = context.request.headers.get('user-agent') || 'Unknown';
    let telemetriObj = {
      ua: userAgent.slice(0, 150),
      screen: String(body.screen || 'unknown').slice(0, 30),
      outbox_len: Number(body.outbox_len) || 0,
      timestamp_client: body.timestamp_client || new Date().toISOString()
    };
    const telemetriJson = JSON.stringify(telemetriObj);

    // E. Simpan Tiket Laporan ke Cloudflare D1
    const insertRes = await context.env.DB.prepare(`
      INSERT INTO laporan_siswa (
        nis, nama, kelas, mapel, kode_pertemuan,
        kategori, pesan, telemetri_client, status,
        waktu_lapor, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'pending', datetime('now'), datetime('now'))
    `).bind(
      nis, verifiedNama, verifiedKelas, cleanMapel, cleanKode,
      cleanKategori, cleanPesan, telemetriJson
    ).run();

    // F. Kirim Notifikasi Discord Real-Time ke Guru
    const shortUa = userAgent.includes('Android') ? 'Android' : (userAgent.includes('iPhone') ? 'iPhone' : 'Desktop');
    context.waitUntil(sendDiscordNotification({
      nis, nama: verifiedNama, kelas: verifiedKelas,
      mapel: cleanMapel, kode_pertemuan: cleanKode,
      kategori: cleanKategori, pesan: cleanPesan,
      telemetri_summary: `${shortUa} • Outbox: ${telemetriObj.outbox_len}`
    }, context.env));

    return jsonResponse({
      success: true,
      id: insertRes.meta?.last_row_id,
      message: "Alhamdulillah! Laporan kendala berhasil terkirim ke Pak Ardi. Guru akan segera meninjau dan mengirimkan konfirmasi ke portal Anda."
    });

  } catch (err) {
    console.error("Error submit laporan:", err);
    return jsonResponse({ error: "Terjadi kesalahan internal saat memproses laporan." }, 500);
  }
}

// 2. GET /api/lapor - Guru melihat riwayat & antrean tiket laporan siswa
export async function onRequestGet(context) {
  try {
    const session = await authenticateRequest(context.request, context.env);
    if (!session || session.role !== 'guru') {
      return jsonResponse({ error: "Akses dilarang (403): Hanya guru pengampu yang dapat membuka rekap laporan kendala." }, 403);
    }

    const url = new URL(context.request.url);
    const filterStatus = url.searchParams.get('status') || 'semua';
    const limit = Math.min(100, Math.max(1, Number(url.searchParams.get('limit')) || 50));

    let query = "SELECT * FROM laporan_siswa ORDER BY id DESC LIMIT ?";
    let binds = [limit];

    if (filterStatus === 'pending') {
      query = "SELECT * FROM laporan_siswa WHERE status = 'pending' ORDER BY id DESC LIMIT ?";
      binds = [limit];
    } else if (filterStatus === 'selesai') {
      query = "SELECT * FROM laporan_siswa WHERE status = 'selesai' ORDER BY id DESC LIMIT ?";
      binds = [limit];
    }

    const { results: reports } = await context.env.DB.prepare(query).bind(...binds).all();

    // Hitung ringkasan pending
    const pendingCountRow = await context.env.DB.prepare(
      "SELECT count(*) as count FROM laporan_siswa WHERE status = 'pending'"
    ).first();

    return jsonResponse({
      success: true,
      total_pending: pendingCountRow?.count || 0,
      reports: reports || []
    });

  } catch (err) {
    console.error("Error get laporan:", err);
    return jsonResponse({ error: "Gagal mengambil data laporan." }, 500);
  }
}

// 3. PUT /api/lapor - Guru menanggapi / menyelesaikan tiket laporan & otomatis memberi notifikasi ke siswa
export async function onRequestPut(context) {
  try {
    const session = await authenticateRequest(context.request, context.env);
    if (!session || session.role !== 'guru') {
      return jsonResponse({ error: "Akses dilarang (403): Hanya guru pengampu yang dapat menanggapi laporan." }, 403);
    }

    const body = await context.request.json().catch(() => ({}));
    const reportId = Number(body.id);
    if (!reportId) {
      return jsonResponse({ error: "ID laporan wajib disertakan." }, 400);
    }

    const newStatus = ['pending', 'diproses', 'selesai', 'ditolak'].includes(body.status) ? body.status : 'selesai';
    const catatanGuru = String(body.catatan_guru || '').replace(/<[^>]*>/g, '').trim().slice(0, 500);

    // Ambil data laporan lama
    const report = await context.env.DB.prepare(
      "SELECT id, nis, nama, kelas, mapel, kode_pertemuan, kategori FROM laporan_siswa WHERE id = ?"
    ).bind(reportId).first();

    if (!report) {
      return jsonResponse({ error: "Laporan tidak ditemukan." }, 404);
    }

    // Perbarui status laporan di D1
    await context.env.DB.prepare(`
      UPDATE laporan_siswa 
      SET status = ?, catatan_guru = ?, updated_at = datetime('now')
      WHERE id = ?
    `).bind(newStatus, catatanGuru, reportId).run();

    // Otomatis Buat Notifikasi Siswa jika guru memberikan catatan atau menyelesaikan laporan
    if (newStatus === 'selesai' || catatanGuru) {
      const judulNotif = `Tanggapan Guru: ${report.mapel ? report.mapel.toUpperCase() + ' ' + report.kode_pertemuan : 'Laporan Kendala'}`;
      const pesanNotif = catatanGuru || "Laporan kendala Anda telah ditinjau dan diselesaikan oleh Pak Ardi. Silakan periksa kembali nilai atau riwayat ujian Anda.";
      
      await context.env.DB.prepare(`
        INSERT INTO notifikasi_siswa (nis, judul, pesan, tipe, tautan, is_read, created_at)
        VALUES (?, ?, ?, 'balasan_guru', '#rapor', 0, datetime('now'))
      `).bind(report.nis, judulNotif, pesanNotif).run();
    }

    return jsonResponse({
      success: true,
      message: `Tiket laporan #${reportId} berhasil diperbarui menjadi '${newStatus}' dan notifikasi telah dikirim ke siswa.`
    });

  } catch (err) {
    console.error("Error update laporan:", err);
    return jsonResponse({ error: "Gagal memperbarui laporan." }, 500);
  }
}
