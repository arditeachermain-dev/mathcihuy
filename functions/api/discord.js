// functions/api/discord.js
// Cloudflare Pages Serverless Discord Bot Endpoint (HTTP Interactions API)
// 100% Serverless • 24/7 Always-On • Zero Server Maintenance • Direct D1 SQLite Query

const DEFAULT_PUBLIC_KEY = "3703e790fc773d168f97a93b2f0fed58e0e2363bb03cf37b4dc0730310350607";

// Helper: Hex string to Uint8Array
function hexToUint8Array(hex) {
  const cleanHex = hex.trim();
  const len = cleanHex.length / 2;
  const u8 = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    u8[i] = parseInt(cleanHex.substr(i * 2, 2), 16);
  }
  return u8;
}

// 1. Verifikasi Tanda Tangan Kriptografis Discord (Ed25519)
async function verifyDiscordSignature(request, rawBody, publicKeyHex) {
  const signature = request.headers.get('X-Signature-Ed25519');
  const timestamp = request.headers.get('X-Signature-Timestamp');
  if (!signature || !timestamp || !publicKeyHex) return false;

  try {
    const keyData = hexToUint8Array(publicKeyHex);
    const sigData = hexToUint8Array(signature);
    const message = new TextEncoder().encode(timestamp + rawBody);

    let cryptoKey;
    try {
      cryptoKey = await crypto.subtle.importKey(
        'raw',
        keyData,
        { name: 'NODE-ED25519', namedCurve: 'NODE-ED25519' },
        false,
        ['verify']
      );
      return await crypto.subtle.verify('NODE-ED25519', cryptoKey, sigData, message);
    } catch (e1) {
      cryptoKey = await crypto.subtle.importKey(
        'raw',
        keyData,
        { name: 'Ed25519' },
        false,
        ['verify']
      );
      return await crypto.subtle.verify('Ed25519', cryptoKey, sigData, message);
    }
  } catch (err) {
    console.error('Signature verification error:', err);
    return false;
  }
}

// Response Helper
function jsonResp(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

// Embed Builder: Kartu Progres Siswa dari D1
async function generateStudentProgressEmbed(env, nis, mapel = "wajib") {
  const cleanMapel = mapel === "minat" ? "minat" : "wajib";
  const pkgCount = cleanMapel === "minat" ? 16 : 14;
  const mapelTitle = cleanMapel === "minat" ? "Matematika Peminatan (P01 - P16)" : "Matematika Wajib (P01 - P14)";

  // Ambil data siswa dari D1
  const student = await env.DB.prepare("SELECT nis, nama, kelas FROM siswa WHERE nis = ?").bind(String(nis)).first();
  if (!student) return null;

  // Khusus Minat hanya untuk XII F3 dan XII F4
  const kls = String(student.kelas || '').toUpperCase();
  if (cleanMapel === "minat" && !kls.includes("F3") && !kls.includes("F4")) {
    return {
      embed: {
        title: "ℹ️ INFORMASI MATA PELAJARAN",
        description: `Siswa **${student.nama}** terdaftar di kelas **${student.kelas}**.\n\n` +
                     `📌 **Ketentuan:**\n` +
                     `Matematika Peminatan (P01 - P16) khusus diselenggarakan untuk kelas **12 F-3** dan **12 F-4**.\n` +
                     `Gunakan tombol **Math Wajib** di bawah untuk melihat progres Anda.`,
        color: 0xF1C40F,
        footer: { text: "Cloudflare D1 Serverless Engine • SMA GIS 2 Serpong" }
      }
    };
  }

  // Ambil nilai dari D1
  const { results: scores } = await env.DB.prepare(
    "SELECT kode_pertemuan, skor, jumlah_percobaan FROM nilai_cbt WHERE nis = ? AND mapel = ?"
  ).bind(String(nis), cleanMapel).all();

  const scoreMap = {};
  const attemptMap = {};
  for (const s of (scores || [])) {
    const k = String(s.kode_pertemuan || '').toUpperCase().trim();
    if (!scoreMap[k] || (s.skor && s.skor > scoreMap[k])) {
      scoreMap[k] = s.skor;
      attemptMap[k] = s.jumlah_percobaan || 1;
    }
  }

  let completedCnt = 0;
  let totalScore = 0;
  const col1 = [];
  const col2 = [];
  const half = Math.ceil(pkgCount / 2);

  for (let i = 1; i <= pkgCount; i++) {
    const pCode = `P${String(i).padStart(2, '0')}`;
    let valStr = "⬜ Belum";
    if (scoreMap[pCode] !== undefined && scoreMap[pCode] !== null) {
      completedCnt++;
      totalScore += scoreMap[pCode];
      const att = attemptMap[pCode] && attemptMap[pCode] > 1 ? ` (${attemptMap[pCode]}x)` : '';
      const icon = scoreMap[pCode] >= 75 ? "✅" : "⚠️";
      valStr = `${icon} **${scoreMap[pCode]}/100**${att}`;
    }

    const line = `• **${pCode}:** ${valStr}`;
    if (i <= half) {
      col1.push(line);
    } else {
      col2.push(line);
    }
  }

  const percent = Math.round((completedCnt / pkgCount) * 100);
  const avgScore = completedCnt > 0 ? (totalScore / completedCnt).toFixed(1) : 0;
  const blocks = Math.floor(percent / 10);
  const bar = "█".repeat(blocks) + "░".repeat(10 - blocks);

  const embedColor = cleanMapel === "minat" ? 0xE67E22 : (percent >= 70 ? 0x2ECC71 : (percent >= 30 ? 0xF1C40F : 0xE74C3C));

  return {
    embed: {
      title: `📊 KARTU CBT ${cleanMapel === 'minat' ? 'PEMINATAN' : 'WAJIB'} • ${student.nama.toUpperCase()}`,
      description: `• **NIS:** \`${student.nis}\` | **Kelas:** \`${student.kelas}\`\n` +
                   `• **Mata Pelajaran:** **${mapelTitle}**\n` +
                   `• **Total Selesai:** **${completedCnt} / ${pkgCount} Paket** (${percent}%)\n` +
                   `• **Progress Bar:** \`[${bar}]\` **${percent}%**\n` +
                   `• **Rata-rata Skor Selesai:** **${avgScore} / 100**\n` +
                   `• **Database:** ⚡ Cloudflare D1 (Serverless SQLite)\n` +
                   `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      color: embedColor,
      fields: [
        { name: `📌 Paket P01 s.d. P${String(half).padStart(2, '0')}`, value: col1.join("\n"), inline: true },
        { name: `📌 Paket P${String(half + 1).padStart(2, '0')} s.d. P${String(pkgCount).padStart(2, '0')}`, value: col2.join("\n"), inline: true }
      ],
      footer: { text: "MathCihuy Cloudflare 24/7 Engine • SMA GIS 2 Serpong" },
      timestamp: new Date().toISOString()
    }
  };
}

// Handler Utama Cloudflare Pages
export async function onRequestPost(context) {
  const { request, env } = context;

  // 1. Baca Raw Body untuk Verifikasi Tanda Tangan
  const rawBody = await request.text();
  const pubKey = (env && env.DISCORD_PUBLIC_KEY) || DEFAULT_PUBLIC_KEY;

  const isVerified = await verifyDiscordSignature(request, rawBody, pubKey);
  if (!isVerified) {
    return new Response('Invalid request signature', { status: 401 });
  }

  // 2. Parse Payload Interaksi Discord
  let interaction;
  try {
    interaction = JSON.parse(rawBody);
  } catch (e) {
    return jsonResp({ error: 'Invalid JSON' }, 400);
  }

  const { type, data, member, user } = interaction;
  const callerUser = member?.user || user;
  const callerId = callerUser?.id;

  // TIPE 1: DISCORD PING (Health Check URL)
  if (type === 1) {
    return jsonResp({ type: 1 });
  }

  // Helper Komponen Tombol
  const actionRowComponents = [
    {
      type: 1, // ACTION_ROW
      components: [
        {
          type: 2, // BUTTON
          style: 1, // PRIMARY
          label: "Kartu Math Wajib",
          custom_id: "btn_cf_wajib",
          emoji: { name: "📐" }
        },
        {
          type: 2, // BUTTON
          style: 2, // SECONDARY
          label: "Kartu Math Minat",
          custom_id: "btn_cf_minat",
          emoji: { name: "📊" }
        },
        {
          type: 2, // BUTTON
          style: 5, // LINK
          label: "Buka Portal Web",
          url: "https://mathcihuy.pages.dev"
        }
      ]
    }
  ];

  // TIPE 2: APPLICATION COMMAND (Slash Command)
  if (type === 2) {
    const cmdName = data?.name?.toLowerCase();

    // 1. COMMAND: /ping
    if (cmdName === "ping") {
      return jsonResp({
        type: 4, // CHANNEL_MESSAGE_WITH_SOURCE
        data: {
          content: `🏓 **Pong!** MathCihuy Bot aktif **24/7 di Cloudflare D1 (Serverless SQLite)**!\n` +
                   `• **Latency:** Instant Edge Execution (< 10ms)\n` +
                   `• **Database:** Cloudflare D1 \`mathcihuy-db\`\n` +
                   `• **Portal:** https://mathcihuy.pages.dev`,
          flags: 64 // Ephemeral
        }
      });
    }

    // 2. COMMAND: /progres [nama]
    if (cmdName === "progres") {
      const options = data?.options || [];
      const namaOpt = options.find(o => o.name === "nama")?.value;

      let targetNis = null;
      let targetName = null;

      if (namaOpt) {
        // Cari siswa di database D1 berdasarkan NIS atau Nama
        const cleanQ = String(namaOpt).trim().toLowerCase();
        const found = await env.DB.prepare(
          "SELECT nis, nama, kelas FROM siswa WHERE nis = ? OR LOWER(nama) LIKE ? LIMIT 1"
        ).bind(cleanQ, `%${cleanQ}%`).first();

        if (found) {
          targetNis = found.nis;
          targetName = found.nama;
        } else {
          return jsonResp({
            type: 4,
            data: {
              content: `⚠️ Siswa dengan kata kunci **"${namaOpt}"** tidak ditemukan di database sekolah.`,
              flags: 64
            }
          });
        }
      } else {
        // Ambil otomatis dari user_id Discord
        const linked = await env.DB.prepare(
          "SELECT nis, full_name, official_class FROM discord_users WHERE user_id = ?"
        ).bind(String(callerId)).first();

        if (linked && linked.nis) {
          targetNis = linked.nis;
          targetName = linked.full_name;
        } else {
          return jsonResp({
            type: 4,
            data: {
              content: `ℹ️ Akun Discord kamu (**${callerUser?.username}**) belum terhubung ke nama/NIS.\n` +
                       `Silakan gunakan perintah \`/nama [nama kamu]\` untuk menautkan akunmu secara otomatis!`,
              flags: 64
            }
          });
        }
      }

      const card = await generateStudentProgressEmbed(env, targetNis, "wajib");
      if (!card) {
        return jsonResp({
          type: 4,
          data: { content: `⚠️ Gagal memuat data nilai untuk NIS ${targetNis}.`, flags: 64 }
        });
      }

      return jsonResp({
        type: 4,
        data: {
          embeds: [card.embed],
          components: actionRowComponents,
          flags: 64 // Ephemeral agar nilai privat
        }
      });
    }

    // 3. COMMAND: /progres_minat [nama]
    if (cmdName === "progres_minat") {
      const options = data?.options || [];
      const namaOpt = options.find(o => o.name === "nama")?.value;

      let targetNis = null;
      if (namaOpt) {
        const cleanQ = String(namaOpt).trim().toLowerCase();
        const found = await env.DB.prepare(
          "SELECT nis, nama, kelas FROM siswa WHERE nis = ? OR LOWER(nama) LIKE ? LIMIT 1"
        ).bind(cleanQ, `%${cleanQ}%`).first();

        if (found) targetNis = found.nis;
      } else {
        const linked = await env.DB.prepare(
          "SELECT nis FROM discord_users WHERE user_id = ?"
        ).bind(String(callerId)).first();
        if (linked) targetNis = linked.nis;
      }

      if (!targetNis) {
        return jsonResp({
          type: 4,
          data: {
            content: `ℹ️ Akun Discord kamu belum tertaut. Gunakan \`/nama [nama kamu]\` terlebih dahulu!`,
            flags: 64
          }
        });
      }

      const card = await generateStudentProgressEmbed(env, targetNis, "minat");
      return jsonResp({
        type: 4,
        data: {
          embeds: [card.embed],
          components: actionRowComponents,
          flags: 64
        }
      });
    }

    // 4. COMMAND: /nama [nama_kamu]
    if (cmdName === "nama") {
      const options = data?.options || [];
      const inputNama = options.find(o => o.name === "nama_kamu")?.value;
      if (!inputNama) {
        return jsonResp({
          type: 4,
          data: { content: "⚠️ Masukkan nama lengkap atau nama panggilanmu: `/nama [nama_kamu]`", flags: 64 }
        });
      }

      const cleanQ = inputNama.trim().toLowerCase();
      // Cari di tabel siswa D1
      const student = await env.DB.prepare(
        "SELECT nis, nama, kelas FROM siswa WHERE nis = ? OR LOWER(nama) LIKE ? LIMIT 1"
      ).bind(cleanQ, `%${cleanQ}%`).first();

      if (!student) {
        return jsonResp({
          type: 4,
          data: {
            content: `⚠️ Nama **"${inputNama}"** tidak cocok dengan data siswa resmi kelas 12 di database sekolah.`,
            flags: 64
          }
        });
      }

      const now = new Date().toISOString();
      await env.DB.prepare(`
        INSERT INTO discord_users (user_id, username, display_name, nis, full_name, official_class, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(user_id) DO UPDATE SET
          username = excluded.username,
          display_name = excluded.display_name,
          nis = excluded.nis,
          full_name = excluded.full_name,
          official_class = excluded.official_class,
          updated_at = excluded.updated_at
      `).bind(
        String(callerId),
        callerUser?.username || '',
        callerUser?.global_name || callerUser?.username || '',
        String(student.nis),
        String(student.nama),
        String(student.kelas),
        now
      ).run();

      return jsonResp({
        type: 4,
        data: {
          content: `✅ **Identitas Berhasil Ditautkan!**\n\n` +
                   `• **Nama Lengkap:** **${student.nama}**\n` +
                   `• **NIS Resmi:** \`${student.nis}\`\n` +
                   `• **Kelas:** \`${student.kelas}\`\n` +
                   `• **Status:** Tersinkron otomatis 24/7 ke Cloudflare D1!\n\n` +
                   `Sekarang kamu bisa langsung ketik \`/progres\` atau \`/progres_minat\` kapan saja!`,
          flags: 64
        }
      });
    }

    // 5. COMMAND: /rekap_nama
    if (cmdName === "rekap_nama") {
      const { results: users } = await env.DB.prepare(
        "SELECT user_id, full_name, nis, official_class, username FROM discord_users ORDER BY official_class ASC, full_name ASC"
      ).all();

      const classes = { "12 F-1": [], "12 F-2": [], "12 F-3": [], "12 F-4": [], "Lainnya": [] };
      for (const u of (users || [])) {
        const rawC = String(u.official_class || '').toUpperCase();
        let k = "Lainnya";
        if (rawC.includes("F1")) k = "12 F-1";
        else if (rawC.includes("F2")) k = "12 F-2";
        else if (rawC.includes("F3")) k = "12 F-3";
        else if (rawC.includes("F4")) k = "12 F-4";
        classes[k].push(u);
      }

      const total = (users || []).length;
      const desc = `Berikut rekapitulasi akun siswa yang telah terdata resmi di Cloudflare D1:\n\n` +
                   `• 👥 **Total Terdata:** \`${total} siswa\`\n` +
                   `• 🔵 **12 F-1:** \`${classes['12 F-1'].length} siswa\` | 🟢 **12 F-2:** \`${classes['12 F-2'].length} siswa\`\n` +
                   `• 🟡 **12 F-3:** \`${classes['12 F-3'].length} siswa\` (Wali: Mr. Ardi) | 🟠 **12 F-4:** \`${classes['12 F-4'].length} siswa\``;

      return jsonResp({
        type: 4,
        data: {
          embeds: [{
            title: "📋 REKAPITULASI IDENTITAS SISWA (CLOUDFLARE D1)",
            description: desc,
            color: 0x2ECC71,
            footer: { text: "Cloudflare D1 Serverless • Realtime Sync" },
            timestamp: new Date().toISOString()
          }],
          flags: 64
        }
      });
    }

    // 6. COMMAND: /help
    if (cmdName === "help") {
      return jsonResp({
        type: 4,
        data: {
          embeds: [{
            title: "🎓 PANDUAN MATHCIHUY DISCORD BOT (CLOUDFLARE 24/7)",
            description: "Bot ini berjalan serverless di **Cloudflare Pages & D1** tanpa server komputer fisik!\n\n" +
                         "**Perintah Siswa:**\n" +
                         "• `/progres` : Cek kartu nilai progres CBT Matematika Wajib P01-P14\n" +
                         "• `/progres_minat` : Cek kartu CBT Matematika Peminatan P01-P16 (F3 & F4)\n" +
                         "• `/nama [nama_kamu]` : Tautkan akun Discord ke NIS & data sekolah\n" +
                         "• `/ping` : Cek koneksi serverless bot\n" +
                         "• `/help` : Menampilkan bantuan ini\n\n" +
                         "**Perintah Guru:**\n" +
                         "• `/rekap_nama` : Cek rekap siswa terdata per kelas",
            color: 0x3498DB,
            footer: { text: "MathCihuy Cloudflare Edition • SMA GIS 2 Serpong" }
          }],
          flags: 64
        }
      });
    }
  }

  // TIPE 3: MESSAGE COMPONENT (Tombol Klik)
  if (type === 3) {
    const customId = data?.custom_id;

    // Ambil NIS pengguna yang menekan tombol
    const linked = await env.DB.prepare(
      "SELECT nis FROM discord_users WHERE user_id = ?"
    ).bind(String(callerId)).first();

    if (!linked || !linked.nis) {
      return jsonResp({
        type: 4,
        data: {
          content: `ℹ️ Akun Discord kamu belum tertaut. Ketik \`/nama [nama kamu]\` terlebih dahulu!`,
          flags: 64
        }
      });
    }

    if (customId === "btn_cf_wajib") {
      const card = await generateStudentProgressEmbed(env, linked.nis, "wajib");
      return jsonResp({
        type: 4,
        data: { embeds: [card.embed], components: actionRowComponents, flags: 64 }
      });
    }

    if (customId === "btn_cf_minat") {
      const card = await generateStudentProgressEmbed(env, linked.nis, "minat");
      return jsonResp({
        type: 4,
        data: { embeds: [card.embed], components: actionRowComponents, flags: 64 }
      });
    }
  }

  return jsonResp({ error: 'Unknown interaction' }, 400);
}
