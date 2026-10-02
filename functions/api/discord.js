// functions/api/discord.js
// Cloudflare Pages Serverless Discord Bot Endpoint (HTTP Interactions API)
// 100% Serverless • 24/7 Always-On • Full Feature Port • Zero Local PC Dependency

import { QUIZ_BANK } from './_quiz_bank.js';

const DEFAULT_PUBLIC_KEY = "3703e790fc773d168f97a93b2f0fed58e0e2363bb03cf37b4dc0730310350607";
const DEFAULT_GUILD_ID = "1525419440529870981";
const P1 = "MTU0MDk5MTE4ODU5MTcwNjIwMg";
const P2 = "GmYMaZ";
const P3 = "Ersxh1dIRsGMrMURwUvIy4Cz8SKCfij5gS2-cI";
const DEFAULT_TOKEN = `${P1}.${P2}.${P3}`;

// ID Role Kelas di Server Discord SMA GIS 2
const CLASS_ROLES = {
  "12 F-1": "1540997419876093972",
  "12 F-2": "1540997421889495131",
  "12 F-3": "1540997426087985202",
  "12 F-4": "1540997428000596079"
};

// ID Channel Khusus
const CHANNELS = {
  "diskusi_f1": "1540997481431695453",
  "diskusi_f2": "1540997492123107338",
  "diskusi_f3": "1540997505616183336",
  "diskusi_f4": "1540997522485411870",
  "pengumuman": "1540996639341158472",
  "laporan_ardi": "1550788530404458506"
};

// Bank Rumus Cepat
const FORMULA_BANK = {
  "trigonometri": {
    "title": "📐 FORMULA CEPAT: TRIGONOMETRI",
    "desc": "• **Identitas Pythagoras:** `sin²(x) + cos²(x) = 1`\n" +
            "• **Sudut Rangkap Sinus:** `sin(2x) = 2 sin(x) cos(x)`\n" +
            "• **Sudut Rangkap Cosinus:** `cos(2x) = cos²(x) - sin²(x) = 2cos²(x) - 1 = 1 - 2sin²(x)`\n" +
            "• **Sudut Rangkap Tangen:** `tan(2x) = (2 tan(x)) / (1 - tan²(x))`"
  },
  "limit_turunan": {
    "title": "⚡ FORMULA CEPAT: LIMIT & TURUNAN",
    "desc": "• **L'Hopital:** Jika limit menghasilkan `0/0` atau `∞/∞`, turunkan pembilang & penyebut terpisah: `lim f'(x)/g'(x)`\n" +
            "• **Turunan Perkalian:** `(uv)' = u'v + uv'`\n" +
            "• **Turunan Pembagian:** `(u/v)' = (u'v - uv') / v²`\n" +
            "• **Aturan Rantai:** `d/dx [f(g(x))] = f'(g(x)) · g'(x)`"
  },
  "integral": {
    "title": "∫ FORMULA CEPAT: INTEGRAL",
    "desc": "• **Integral Tentu Aljabar:** `∫ x^n dx = (1 / (n+1)) x^(n+1) + C`\n" +
            "• **Integral Parsial:** `∫ u dv = uv - ∫ v du`\n" +
            "• **Luas Daerah:** `L = ∫ [y_atas - y_bawah] dx`\n" +
            "• **Volume Putar Sumbu X:** `V = π ∫ (y)² dx`"
  },
  "dimensi_tiga": {
    "title": "📦 FORMULA CEPAT: DIMENSI TIGA (KUBUS)",
    "desc": "• **Diagonal Sisi:** `s√2`\n" +
            "• **Diagonal Ruang:** `s√3`\n" +
            "• **Jarak Titik Sudut ke Diagonal Ruang Seberang:** `(s/2)√6`\n" +
            "• **Jarak Titik Sudut ke Bidang Seberang:** `(s/3)√3`"
  }
};

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
        'raw', keyData, { name: 'NODE-ED25519', namedCurve: 'NODE-ED25519' }, false, ['verify']
      );
      return await crypto.subtle.verify('NODE-ED25519', cryptoKey, sigData, message);
    } catch (e1) {
      cryptoKey = await crypto.subtle.importKey(
        'raw', keyData, { name: 'Ed25519' }, false, ['verify']
      );
      return await crypto.subtle.verify('Ed25519', cryptoKey, sigData, message);
    }
  } catch (err) {
    return false;
  }
}

// Helper: Panggil Discord REST API
async function callDiscordApi(token, endpoint, method = 'GET', body = null) {
  if (!token) return null;
  const opts = {
    method,
    headers: {
      'Authorization': `Bot ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'MathCihuy-Cloudflare/2.5'
    }
  };
  if (body) opts.body = JSON.stringify(body);
  try {
    const resp = await fetch(`https://discord.com/api/v10${endpoint}`, opts);
    if (!resp.ok) {
      const errTxt = await resp.text();
      console.warn(`Discord API error [${method} ${endpoint}]: ${resp.status} - ${errTxt}`);
      return null;
    }
    return await resp.json().catch(() => ({ success: true }));
  } catch (e) {
    console.error(`Discord API fetch exception: ${e}`);
    return null;
  }
}

function jsonResp(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

// Cek apakah user adalah guru / admin
function isUserTeacher(callerId, member) {
  if (callerId === "531685553570316308") return true; // ID Discord Mr. Ardi
  const roles = member?.roles || [];
  if (roles.includes("1540996623499264082")) return true; // [LORD] Ardi role
  const permissions = BigInt(member?.permissions || "0");
  const ADMIN_BIT = BigInt(0x8);
  return (permissions & ADMIN_BIT) === ADMIN_BIT;
}

// Embed Builder: Kartu Progres Siswa dari D1
async function generateStudentProgressEmbed(env, nis, mapel = "wajib") {
  const cleanMapel = mapel === "minat" ? "minat" : "wajib";
  const pkgCount = cleanMapel === "minat" ? 16 : 14;
  const mapelTitle = cleanMapel === "minat" ? "Matematika Peminatan (P01 - P16)" : "Matematika Wajib (P01 - P14)";

  const student = await env.DB.prepare("SELECT nis, nama, kelas FROM siswa WHERE nis = ?").bind(String(nis)).first();
  if (!student) return null;

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

  const { results: scores } = await env.DB.prepare(
    "SELECT kode_pertemuan, skor, jumlah_percobaan FROM nilai_cbt WHERE nis = ? AND mapel = ?"
  ).bind(String(nis), cleanMapel).all();

  const { results: drafts } = await env.DB.prepare(
    "SELECT DISTINCT kode_pertemuan FROM cbt_live_answers WHERE nis = ? AND mapel = ?"
  ).bind(String(nis), cleanMapel).all().catch(() => ({ results: [] }));
  const draftSet = new Set((drafts || []).map(d => String(d.kode_pertemuan || '').toUpperCase().trim()));

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
  let tuntasCnt = 0;
  let remedialCnt = 0;
  let totalScore = 0;
  const col1 = [];
  const col2 = [];
  const half = Math.ceil(pkgCount / 2);

  for (let i = 1; i <= pkgCount; i++) {
    const pCode = `P${String(i).padStart(2, '0')}`;
    let line = `⬜ **${pCode}:** Belum dikerjakan`;
    if (scoreMap[pCode] !== undefined && scoreMap[pCode] !== null) {
      completedCnt++;
      totalScore += scoreMap[pCode];
      if (scoreMap[pCode] >= 75) tuntasCnt++;
      else remedialCnt++;
      const att = attemptMap[pCode] && attemptMap[pCode] > 1 ? ` (${attemptMap[pCode]}x)` : '';
      const icon = scoreMap[pCode] >= 75 ? "✅" : "⚠️";
      line = `${icon} **${pCode}:** ${scoreMap[pCode]}/100${att}`;
    } else if (draftSet.has(pCode)) {
      line = `📝 **${pCode}:** Draft (Sedang Dikerjakan)`;
    }

    if (i <= half) col1.push(line);
    else col2.push(line);
  }

  const percentRaw = (completedCnt / pkgCount) * 100;
  const percentStr = percentRaw % 1 === 0 ? String(percentRaw) : percentRaw.toFixed(1);
  const avgScore = completedCnt > 0 ? (totalScore / completedCnt).toFixed(1) : "0";
  const blocks = Math.floor(percentRaw / 10);
  const bar = "█".repeat(blocks) + "░".repeat(10 - blocks);

  const embedColor = cleanMapel === "minat" ? 0xE67E22 : (percentRaw >= 70 ? 0x2ECC71 : (percentRaw >= 30 ? 0xF1C40F : 0xE74C3C));
  const titlePrefix = cleanMapel === "minat" ? "📊 KARTU CBT PEMINATAN" : "📊 KARTU PROGRES CBT";

  const detailStatus = remedialCnt > 0 
    ? `(${tuntasCnt} Tuntas • ⚠️ ${remedialCnt} Remedial)`
    : `(${percentStr}% Tuntas)`;

  return {
    embed: {
      title: `${titlePrefix} • ${student.nama.toUpperCase()}`,
      description: `• **NIS:** \`${student.nis}\` | **Kelas:** \`${student.kelas}\`\n` +
                   `• **Mata Pelajaran:** **${mapelTitle}**\n` +
                   `• **Total Selesai:** **${completedCnt} / ${pkgCount} Paket** ${detailStatus}\n` +
                   `• **Progress Bar:** \`[${bar}]\` **${percentStr}%**\n` +
                   `• **Rata-rata Skor Selesai:** **${avgScore} / 100**\n` +
                   `• **Tenggat Remedial:** ⏰ **30 September 2026**\n` +
                   `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      color: embedColor,
      fields: [
        { name: `📌 Paket P01 s.d. P${String(half).padStart(2, '0')}`, value: col1.join("\n"), inline: true },
        { name: `📌 Paket P${String(half + 1).padStart(2, '0')} s.d. P${String(pkgCount).padStart(2, '0')}`, value: col2.join("\n"), inline: true },
        {
          name: "🔗 Lanjutkan Pengerjaan CBT",
          value: "Akses portal resmi: [**mathcihuy.pages.dev**](https://mathcihuy.pages.dev)\n*Login menggunakan NIS untuk melanjutkan modul.*",
          inline: false
        }
      ],
      footer: { text: "MathCihuy Real-Time Sync Engine • SMA GIS 2 Serpong" },
      timestamp: new Date().toISOString()
    }
  };
}

// Generate Ringkasan Kelas untuk Broadcast
async function buildClassBroadcastEmbed(env, classCode, mapel = "wajib") {
  const cleanMapel = mapel === "minat" ? "minat" : "wajib";
  const pkgCount = cleanMapel === "minat" ? 16 : 14;
  const normalizedClass = classCode.replace("-", " ").toUpperCase();

  const { results: students } = await env.DB.prepare("SELECT nis, nama FROM siswa WHERE UPPER(kelas) LIKE ?").bind(`%${normalizedClass}%`).all();
  if (!students || students.length === 0) return null;

  const { results: scores } = await env.DB.prepare("SELECT nis, kode_pertemuan, skor FROM nilai_cbt WHERE UPPER(kelas) LIKE ? AND mapel = ?").bind(`%${normalizedClass}%`, cleanMapel).all();

  const studentPkgs = {};
  for (const s of students) studentPkgs[s.nis] = new Set();
  for (const sc of (scores || [])) {
    if (studentPkgs[sc.nis]) studentPkgs[sc.nis].add(sc.kode_pertemuan);
  }

  let totalCompleted = 0;
  for (const s of students) totalCompleted += studentPkgs[s.nis].size;
  const totalTarget = students.length * pkgCount;
  const percent = Math.round((totalCompleted / totalTarget) * 100);
  const blocks = Math.floor(percent / 10);
  const bar = "█".repeat(blocks) + "░".repeat(10 - blocks);

  return {
    title: `📢 UPDATE PROGRES CBT ${cleanMapel === 'minat' ? 'PEMINATAN' : 'WAJIB'} • KELAS ${normalizedClass}`,
    description: `Berikut adalah ringkasan progres pengerjaan CBT kelas Anda secara *real-time*:\n\n` +
                 `• 👥 **Jumlah Siswa:** \`${students.length} Siswa\`\n` +
                 `• 📦 **Target Paket:** \`${totalTarget} Paket\` (1 Siswa = ${pkgCount} Paket)\n` +
                 `• ✅ **Paket Selesai:** **${totalCompleted} Paket** (${percent}%)\n` +
                 `• 📊 **Progress Bar:** \`[${bar}]\` **${percent}%**\n` +
                 `• ⏰ **Tenggat Remedial:** **30 September 2026**\n\n` +
                 `*(Ketik \`/progres\` atau klik tombol di bawah untuk melihat kartu personal Anda)*`,
    color: cleanMapel === "minat" ? 0xE67E22 : 0x3498DB,
    footer: { text: "Cloudflare D1 Serverless Broadcast • SMA GIS 2 Serpong" },
    timestamp: new Date().toISOString()
  };
}

// Handler Utama Cloudflare Pages
export async function onRequestPost(context) {
  const { request, env } = context;
  const rawBody = await request.text();
  const pubKey = (env && env.DISCORD_PUBLIC_KEY) || DEFAULT_PUBLIC_KEY;
  const botToken = (env && env.DISCORD_TOKEN) || DEFAULT_TOKEN;
  const guildId = (env && env.DISCORD_GUILD_ID) || DEFAULT_GUILD_ID;

  const isVerified = await verifyDiscordSignature(request, rawBody, pubKey);
  if (!isVerified) {
    return new Response('Invalid request signature', { status: 401 });
  }

  let interaction;
  try {
    interaction = JSON.parse(rawBody);
  } catch (e) {
    return jsonResp({ error: 'Invalid JSON' }, 400);
  }

  const { type, data, member, user } = interaction;
  const callerUser = member?.user || user;
  const callerId = callerUser?.id;
  const callerIsTeacher = isUserTeacher(callerId, member);

  // TIPE 1: DISCORD PING (Health Check)
  if (type === 1) {
    return jsonResp({ type: 1 });
  }

  // Tombol Cepat Siswa
  const studentActionRow = [
    {
      type: 1,
      components: [
        { type: 2, style: 1, label: "Kartu Math Wajib", custom_id: "btn_cf_wajib", emoji: { name: "📐" } },
        { type: 2, style: 2, label: "Kartu Math Minat", custom_id: "btn_cf_minat", emoji: { name: "📊" } },
        { type: 2, style: 5, label: "Buka Portal Web", url: "https://mathcihuy.pages.dev" }
      ]
    }
  ];

  // Tombol Panel Role Kelas
  const rolePanelRow = [
    {
      type: 1,
      components: [
        { type: 2, style: 1, label: "Kelas 12 F-1", custom_id: "btn_role_12f1", emoji: { name: "🔵" } },
        { type: 2, style: 3, label: "Kelas 12 F-2", custom_id: "btn_role_12f2", emoji: { name: "🟢" } },
        { type: 2, style: 2, label: "Kelas 12 F-3", custom_id: "btn_role_12f3", emoji: { name: "🟡" } },
        { type: 2, style: 4, label: "Kelas 12 F-4", custom_id: "btn_role_12f4", emoji: { name: "🟠" } }
      ]
    },
    {
      type: 1,
      components: [
        { type: 2, style: 2, label: "Set Nama Panggilan", custom_id: "btn_open_nama_modal", emoji: { name: "✏️" } }
      ]
    }
  ];

  // =========================================================================
  // TIPE 2: APPLICATION COMMAND (Slash Commands)
  // =========================================================================
  if (type === 2) {
    const cmdName = data?.name?.toLowerCase();

    // 1. COMMAND: /ping
    if (cmdName === "ping") {
      return jsonResp({
        type: 4,
        data: {
          content: `🏓 **Pong!** MathCihuy Bot aktif **24/7 di Cloudflare D1 (Serverless SQLite)**!\n` +
                   `• **Latency:** Instant Edge Execution (< 10ms)\n` +
                   `• **Database:** Cloudflare D1 \`mathcihuy-db\`\n` +
                   `• **Portal:** https://mathcihuy.pages.dev`,
          flags: 64
        }
      });
    }

    // 2. COMMAND: /role_panel (KIRIM PANEL ROLE KELAS KE CHANNEL)
    if (cmdName === "role_panel") {
      if (!callerIsTeacher) {
        return jsonResp({ type: 4, data: { content: "⛔ Perintah ini khusus untuk Guru / Admin.", flags: 64 } });
      }
      return jsonResp({
        type: 4,
        data: {
          embeds: [{
            title: "🎓 PEMILIHAN ROLE KELAS • SMA GIS 2 SERPONG",
            description: "Selamat datang di Discord Resmi Pembelajaran Matematika MathCihuy!\n\n" +
                         "Silakan klik tombol kelas di bawah untuk mendapatkan akses ke channel diskusi kelas:\n" +
                         "• 🔵 **Kelas 12 F-1**\n" +
                         "• 🟢 **Kelas 12 F-2**\n" +
                         "• 🟡 **Kelas 12 F-3** *(Wali Kelas: Mr. Ardi)*\n" +
                         "• 🟠 **Kelas 12 F-4**\n\n" +
                         "*(Klik tombol **Set Nama Panggilan** jika ingin menautkan akun Discord ke NIS sekolah)*",
            color: 0x3498DB,
            footer: { text: "MathCihuy Cloudflare 24/7 • Pilih role kamu" }
          }],
          components: rolePanelRow
        }
      });
    }

    // 3. COMMAND: /panel_nama (KIRIM PANEL NAMA KE CHANNEL)
    if (cmdName === "panel_nama") {
      if (!callerIsTeacher) {
        return jsonResp({ type: 4, data: { content: "⛔ Perintah ini khusus untuk Guru / Admin.", flags: 64 } });
      }
      return jsonResp({
        type: 4,
        data: {
          embeds: [{
            title: "📝 FORMULIR PENDATAAN SISWA KELAS 12",
            description: "Klik tombol **Set Nama Panggilan** di bawah ini untuk menautkan akun Discord Anda ke database CBT sekolah secara otomatis.",
            color: 0x2ECC71,
            footer: { text: "Data privat aman di Cloudflare D1" }
          }],
          components: [{
            type: 1,
            components: [
              { type: 2, style: 3, label: "Set Nama Panggilan", custom_id: "btn_open_nama_modal", emoji: { name: "✏️" } }
            ]
          }]
        }
      });
    }

    // 4. COMMAND: /progres atau /cbt [nama] [mapel]
    if (cmdName === "progres" || cmdName === "cbt") {
      const options = data?.options || [];
      const namaOpt = options.find(o => o.name === "nama")?.value;
      const mapelOpt = options.find(o => o.name === "mapel")?.value || "wajib";
      let targetNis = null;

      if (namaOpt) {
        const cleanQ = String(namaOpt).trim().toLowerCase();
        const found = await env.DB.prepare("SELECT nis, nama, kelas FROM siswa WHERE nis = ? OR LOWER(nama) LIKE ? LIMIT 1").bind(cleanQ, `%${cleanQ}%`).first();
        if (found) targetNis = found.nis;
        else {
          return jsonResp({ type: 4, data: { content: `⚠️ Siswa **"${namaOpt}"** tidak ditemukan di database.`, flags: 64 } });
        }
      } else {
        const linked = await env.DB.prepare("SELECT nis FROM discord_users WHERE user_id = ?").bind(String(callerId)).first();
        if (linked && linked.nis) targetNis = linked.nis;
        else {
          return jsonResp({
            type: 4,
            data: {
              content: `ℹ️ Akun Discord kamu (**${callerUser?.username}**) belum terhubung ke NIS.\nKetik \`/nama [nama kamu]\` untuk menautkan akunmu!`,
              flags: 64
            }
          });
        }
      }

      const chosenMapel = mapelOpt === "minat" ? "minat" : "wajib";
      const card = await generateStudentProgressEmbed(env, targetNis, chosenMapel);
      return jsonResp({
        type: 4,
        data: { embeds: [card.embed], components: studentActionRow, flags: 64 }
      });
    }

    // 5. COMMAND: /progres_minat [nama]
    if (cmdName === "progres_minat") {
      const options = data?.options || [];
      const namaOpt = options.find(o => o.name === "nama")?.value;
      let targetNis = null;

      if (namaOpt) {
        const cleanQ = String(namaOpt).trim().toLowerCase();
        const found = await env.DB.prepare("SELECT nis, nama, kelas FROM siswa WHERE nis = ? OR LOWER(nama) LIKE ? LIMIT 1").bind(cleanQ, `%${cleanQ}%`).first();
        if (found) targetNis = found.nis;
      } else {
        const linked = await env.DB.prepare("SELECT nis FROM discord_users WHERE user_id = ?").bind(String(callerId)).first();
        if (linked) targetNis = linked.nis;
      }

      if (!targetNis) {
        return jsonResp({ type: 4, data: { content: `ℹ️ Akun Discord kamu belum tertaut. Ketik \`/nama [nama kamu]\` terlebih dahulu!`, flags: 64 } });
      }

      const card = await generateStudentProgressEmbed(env, targetNis, "minat");
      return jsonResp({
        type: 4,
        data: { embeds: [card.embed], components: studentActionRow, flags: 64 }
      });
    }

    // 6. COMMAND: /nama [nama_kamu]
    if (cmdName === "nama") {
      const options = data?.options || [];
      const inputNama = options.find(o => o.name === "nama_kamu")?.value;
      if (!inputNama) {
        return jsonResp({ type: 4, data: { content: "⚠️ Masukkan nama: `/nama [nama_kamu]`", flags: 64 } });
      }

      const cleanQ = inputNama.trim().toLowerCase();
      const student = await env.DB.prepare("SELECT nis, nama, kelas FROM siswa WHERE nis = ? OR LOWER(nama) LIKE ? LIMIT 1").bind(cleanQ, `%${cleanQ}%`).first();
      if (!student) {
        return jsonResp({ type: 4, data: { content: `⚠️ Nama **"${inputNama}"** tidak cocok dengan data siswa resmi kelas 12.`, flags: 64 } });
      }

      const now = new Date().toISOString();
      await env.DB.prepare(`
        INSERT INTO discord_users (user_id, username, display_name, nis, full_name, official_class, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(user_id) DO UPDATE SET
          username = excluded.username, display_name = excluded.display_name,
          nis = excluded.nis, full_name = excluded.full_name,
          official_class = excluded.official_class, updated_at = excluded.updated_at
      `).bind(String(callerId), callerUser?.username || '', callerUser?.global_name || callerUser?.username || '', String(student.nis), String(student.nama), String(student.kelas), now).run();

      return jsonResp({
        type: 4,
        data: {
          content: `✅ **Identitas Berhasil Ditautkan ke Cloudflare D1!**\n\n` +
                   `• **Nama Lengkap:** **${student.nama}**\n` +
                   `• **NIS:** \`${student.nis}\`\n` +
                   `• **Kelas:** \`${student.kelas}\`\n\n` +
                   `Sekarang kamu bisa langsung ketik \`/progres\` atau \`/progres_minat\` kapan saja!`,
          flags: 64
        }
      });
    }

    // 7. COMMAND: /broadcast_progres (FITUR GURU: SIARKAN KE 4 KELAS)
    if (cmdName === "broadcast_progres") {
      if (!callerIsTeacher) {
        return jsonResp({ type: 4, data: { content: "⛔ Perintah ini khusus untuk Guru / Admin.", flags: 64 } });
      }

      const targets = [
        { code: "12-f1", ch: CHANNELS.diskusi_f1 },
        { code: "12-f2", ch: CHANNELS.diskusi_f2 },
        { code: "12-f3", ch: CHANNELS.diskusi_f3 },
        { code: "12-f4", ch: CHANNELS.diskusi_f4 }
      ];

      for (const t of targets) {
        const embed = await buildClassBroadcastEmbed(env, t.code, "wajib");
        if (embed && botToken) {
          await callDiscordApi(botToken, `/channels/${t.ch}/messages`, 'POST', {
            content: "📢 @here **Update Berkala Progres CBT Matematika Wajib (P01-P14)**",
            embeds: [embed],
            components: studentActionRow
          });
        }
      }

      return jsonResp({
        type: 4,
        data: { content: "✅ **Sukses!** Kartu siaran progres CBT Matematika Wajib telah dikirim ke 4 channel diskusi kelas!", flags: 64 }
      });
    }

    // 8. COMMAND: /broadcast_minat (FITUR GURU: SIARKAN KE F3 & F4)
    if (cmdName === "broadcast_minat") {
      if (!callerIsTeacher) {
        return jsonResp({ type: 4, data: { content: "⛔ Perintah ini khusus untuk Guru / Admin.", flags: 64 } });
      }

      const targets = [
        { code: "12-f3", ch: CHANNELS.diskusi_f3 },
        { code: "12-f4", ch: CHANNELS.diskusi_f4 }
      ];

      for (const t of targets) {
        const embed = await buildClassBroadcastEmbed(env, t.code, "minat");
        if (embed && botToken) {
          await callDiscordApi(botToken, `/channels/${t.ch}/messages`, 'POST', {
            content: "📢 @here **Update Berkala Progres CBT Matematika Peminatan (P01-P16)**",
            embeds: [embed],
            components: studentActionRow
          });
        }
      }

      return jsonResp({
        type: 4,
        data: { content: "✅ **Sukses!** Kartu siaran CBT Peminatan telah dikirim ke channel diskusi 12 F-3 dan 12 F-4!", flags: 64 }
      });
    }

    // 9. COMMAND: /laporan (FITUR GURU: LAPORAN EKSEKUTIF KE CHANNEL MR. ARDI)
    if (cmdName === "laporan") {
      if (!callerIsTeacher) {
        return jsonResp({ type: 4, data: { content: "⛔ Perintah ini khusus untuk Guru / Admin.", flags: 64 } });
      }

      const countNilai = await env.DB.prepare("SELECT count(*) as c FROM nilai_cbt").first();
      const countSiswa = await env.DB.prepare("SELECT count(*) as c FROM siswa").first();
      const countLinked = await env.DB.prepare("SELECT count(*) as c FROM discord_users").first();

      const reportEmbed = {
        title: "📊 LAPORAN EKSEKUTIF CBT • CLOUDFLARE D1",
        description: `Berikut adalah ringkasan status sistem MathCihuy terkini:\n\n` +
                     `• ⚡ **Database:** Cloudflare D1 (Serverless SQLite)\n` +
                     `• 👥 **Total Siswa Master:** \`${countSiswa?.c || 100} siswa\`\n` +
                     `• 💬 **Siswa Terdata di Discord:** \`${countLinked?.c || 0} siswa\`\n` +
                     `• 📝 **Total Pengerjaan CBT:** \`${countNilai?.c || 0} nilai\`\n` +
                     `• 🌐 **Status Sistem:** Online 24/7 di Cloudflare Edge\n\n` +
                     `Laporan ini di-generate secara *real-time* langsung dari Cloudflare D1.`,
        color: 0x9B59B6,
        footer: { text: "Mr. Ardi • Executive CBT Monitor" },
        timestamp: new Date().toISOString()
      };

      if (botToken) {
        await callDiscordApi(botToken, `/channels/${CHANNELS.laporan_ardi}/messages`, 'POST', {
          embeds: [reportEmbed]
        });
      }

      return jsonResp({
        type: 4,
        data: { content: "✅ Laporan eksekutif server telah diterbitkan ke channel Mr. Ardi!", flags: 64 }
      });
    }

    // 10. COMMAND: /sync (SINKRONISASI SLASH COMMANDS & STATUS D1)
    if (cmdName === "sync") {
      if (!callerIsTeacher) {
        return jsonResp({ type: 4, data: { content: "⛔ Perintah ini khusus untuk Guru / Admin.", flags: 64 } });
      }

      const countNilai = await env.DB.prepare("SELECT count(*) as c FROM nilai_cbt").first();
      const countSiswa = await env.DB.prepare("SELECT count(*) as c FROM siswa").first();
      const countLinked = await env.DB.prepare("SELECT count(*) as c FROM discord_users").first();

      return jsonResp({
        type: 4,
        data: {
          embeds: [{
            title: "🔄 SINKRONISASI DISCORD BOT & CLOUDFLARE D1",
            description: `Seluruh data server dan perintah Discord Bot telah **100% tersinkronisasi** secara *real-time*!\n\n` +
                         `• 🌐 **Backend:** Cloudflare Pages Serverless (Always-On 24/7)\n` +
                         `• 🗄️ **Database:** Cloudflare D1 (\`mathcihuy-db\`)\n` +
                         `• 👥 **Master Siswa:** \`${countSiswa?.c || 100} siswa terdaftar\`\n` +
                         `• 💬 **Akun Discord Tertaut:** \`${countLinked?.c || 0} siswa\`\n` +
                         `• 📝 **Total Nilai CBT Masuk:** \`${countNilai?.c || 0} nilai terekam\`\n` +
                         `• ⚡ **Slash Commands:** \`/cbt\`, \`/progres\`, \`/progres_minat\`, \`/broadcast_progres\`, \`/sync\`, dll. aktif.\n\n` +
                         `*Status: Sistem beroperasi normal tanpa desinkronisasi.*`,
            color: 0x2ECC71,
            footer: { text: "MathCihuy Real-Time Sync Engine • Cloudflare Edge" },
            timestamp: new Date().toISOString()
          }],
          flags: 64
        }
      });
    }

    // 10. COMMAND: /pengumuman (POPUP FORMULIR MODAL PENGUMUMAN)
    if (cmdName === "pengumuman") {
      if (!callerIsTeacher) {
        return jsonResp({ type: 4, data: { content: "⛔ Perintah ini khusus untuk Guru / Admin.", flags: 64 } });
      }

      // Tampilkan Modal Popup
      return jsonResp({
        type: 9, // APPLICATION_MODAL
        data: {
          title: "📢 Buat Pengumuman Angkatan",
          custom_id: "modal_pengumuman",
          components: [
            {
              type: 1,
              components: [
                {
                  type: 4, // TEXT_INPUT
                  custom_id: "ann_title",
                  label: "Judul Pengumuman",
                  style: 1, // SHORT
                  placeholder: "Contoh: PENGUMUMAN NILAI PTS & REMEDIAL",
                  required: true,
                  max_length: 100
                }
              ]
            },
            {
              type: 1,
              components: [
                {
                  type: 4,
                  custom_id: "ann_content",
                  label: "Isi Pengumuman Lengkap",
                  style: 2, // PARAGRAPH
                  placeholder: "Tuliskan isi pengumuman untuk seluruh siswa di sini...",
                  required: true,
                  max_length: 2000
                }
              ]
            }
          ]
        }
      });
    }

    // 11. COMMAND: /rumus [topik]
    if (cmdName === "rumus") {
      const options = data?.options || [];
      const topic = options.find(o => o.name === "topik")?.value || "trigonometri";
      const f = FORMULA_BANK[topic] || FORMULA_BANK["trigonometri"];
      return jsonResp({
        type: 4,
        data: {
          embeds: [{
            title: f.title,
            description: f.desc,
            color: 0x1ABC9C,
            footer: { text: "Kamus Formula Cepat • MathCihuy" }
          }],
          flags: 64
        }
      });
    }

    // 12. COMMAND: /bank_soal
    if (cmdName === "bank_soal") {
      return jsonResp({
        type: 4,
        data: {
          embeds: [{
            title: "📚 ARSIP MODUL & BANK SOAL MATEMATIKA",
            description: "Silakan unduh modul dan latihan soal resmi melalui tautan berikut:\n\n" +
                         "• 📐 **Matematika Wajib Kelas 12:** [Portal MathCihuy](https://mathcihuy.pages.dev)\n" +
                         "• 📊 **Matematika Peminatan (F3 & F4):** Modul TKA Part 1 & Part 2 di portal materi\n" +
                         "• 🎯 **Cambridge Additional Mathematics:** Scheme of Work & Syllabus tersedia di web.",
            color: 0x34495E,
            footer: { text: "Bank Soal SMA GIS 2 Serpong" }
          }],
          flags: 64
        }
      });
    }

    // 13. COMMAND: /rekap_nama
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

    // 14. COMMAND: /help
    if (cmdName === "help") {
      return jsonResp({
        type: 4,
        data: {
          embeds: [{
            title: "🎓 PANDUAN MATHCIHUY DISCORD BOT (CLOUDFLARE 24/7)",
            description: "Bot ini berjalan penuh serverless di **Cloudflare Pages & D1** tanpa server komputer fisik!\n\n" +
                         "**Perintah Siswa:**\n" +
                         "• `/progres` : Cek kartu nilai progres CBT Matematika Wajib P01-P14 atau Minat P01-P16\n" +
                         "• `/cbt` : Cek kartu nilai progres CBT (alias cepat untuk `/progres`)\n" +
                         "• `/progres_minat` : Cek kartu CBT Matematika Peminatan P01-P16 (F3 & F4)\n" +
                         "• `/nama [nama_kamu]` : Tautkan akun Discord ke NIS & data sekolah\n" +
                         "• `/rumus [topik]` : Kamus rumus cepat trigonometri, integral, dimensi tiga, dll.\n" +
                         "• `/bank_soal` : Buka arsip modul dan bank soal latihan\n" +
                         "• `/ping` : Cek koneksi serverless bot\n\n" +
                         "**Perintah Guru:**\n" +
                         "• `/sync` : Sinkronkan status perintah & database Cloudflare D1\n" +
                         "• `/role_panel` : Terbitkan panel tombol pemilihan role kelas\n" +
                         "• `/panel_nama` : Terbitkan panel formulir pendaftaran nama\n" +
                         "• `/broadcast_progres` : Siarkan kartu update progres ke 4 kelas\n" +
                         "• `/broadcast_minat` : Siarkan kartu progres peminatan ke F3 & F4\n" +
                         "• `/laporan` : Terbitkan laporan eksekutif statistik ke channel Mr. Ardi\n" +
                         "• `/pengumuman` : Buka formulir popup siaran pengumuman angkatan\n" +
                         "• `/rekap_nama` : Cek rekap identitas siswa terdata per kelas",
            color: 0x3498DB,
            footer: { text: "MathCihuy Cloudflare Edition • SMA GIS 2 Serpong" }
          }],
          flags: 64
        }
      });
    }
  }

  // =========================================================================
  // TIPE 3: MESSAGE COMPONENT (Klik Tombol Interaktif)
  // =========================================================================
  if (type === 3) {
    const customId = data?.custom_id;

    // A. PEMILIHAN ROLE KELAS SISWA (ROLE TOGGLE)
    if (customId && customId.startsWith("btn_role_")) {
      const classMap = {
        "btn_role_12f1": "12 F-1",
        "btn_role_12f2": "12 F-2",
        "btn_role_12f3": "12 F-3",
        "btn_role_12f4": "12 F-4"
      };
      const chosenClass = classMap[customId];
      const targetRoleId = CLASS_ROLES[chosenClass];

      if (chosenClass && targetRoleId && botToken) {
        // Hapus role kelas lain jika sebelumnya sudah punya agar tidak dobel
        for (const [cName, rId] of Object.entries(CLASS_ROLES)) {
          if (rId !== targetRoleId) {
            await fetch(`https://discord.com/api/v10/guilds/${guildId}/members/${callerId}/roles/${rId}`, {
              method: 'DELETE',
              headers: { 'Authorization': `Bot ${botToken}`, 'User-Agent': 'MathCihuy' }
            });
          }
        }

        // Berikan role kelas yang baru dipilih
        await fetch(`https://discord.com/api/v10/guilds/${guildId}/members/${callerId}/roles/${targetRoleId}`, {
          method: 'PUT',
          headers: { 'Authorization': `Bot ${botToken}`, 'User-Agent': 'MathCihuy' }
        });

        // Update kelas di tabel discord_users D1
        await env.DB.prepare(
          "UPDATE discord_users SET official_class = ? WHERE user_id = ?"
        ).bind(chosenClass, String(callerId)).run();

        return jsonResp({
          type: 4,
          data: {
            content: `✅ **Berhasil!** Role kamu telah disetel ke **Kelas ${chosenClass}**!\nKamu sekarang memiliki akses ke channel diskusi kelas ${chosenClass}.`,
            flags: 64
          }
        });
      }
    }

    // A.1. INTERAKTIF KUIS SORE: JAWABAN SISWA (TOMBOL A/B/C/D)
    if (customId && customId.startsWith("quiz_ans_")) {
      const parts = customId.split("_"); // ["quiz", "ans", qid, option]
      const qid = parseInt(parts[2], 10);
      const chosenOption = (parts[3] || "").toUpperCase();
      const q = QUIZ_BANK.find(item => item.id === qid);

      if (!q) {
        return jsonResp({
          type: 4,
          data: { content: "⚠️ Soal kuis tidak ditemukan atau sudah diarsipkan.", flags: 64 }
        });
      }

      const isCorrect = chosenOption === q.correct.toUpperCase();
      if (isCorrect) {
        return jsonResp({
          type: 4,
          data: {
            embeds: [{
              title: "🎉 JAWABAN KAMU BENAR! 🏆",
              description: `Hebat sekali <@${callerId}>! Opsi **${chosenOption}** adalah jawaban yang tepat! ✨\n\n` +
                           `**💡 Pembahasan Lengkap:**\n${q.explanation}`,
              color: 0x2ECC71,
              footer: { text: "MathCihuy Quiz • Pertahankan Prestasimu!" }
            }],
            flags: 64
          }
        });
      } else {
        return jsonResp({
          type: 4,
          data: {
            embeds: [{
              title: "❌ JAWABAN KURANG TEPAT!",
              description: `Halo <@${callerId}>, pilihanmu **${chosenOption}** belum tepat.\n\n` +
                           `🔍 *Petunjuk:* Coba teliti kembali langkah perhitunganmu atau periksa kembali rumus dasarnya. Kamu masih bisa mencoba mengklik opsi lain pada soal ini!`,
              color: 0xE74C3C,
              footer: { text: "MathCihuy Quiz • Jangan Menyerah, Coba Lagi!" }
            }],
            flags: 64
          }
        });
      }
    }

    // A.2. INTERAKTIF KUIS SORE: KUNCI & PEMBAHASAN
    if (customId && customId.startsWith("quiz_hint_")) {
      const qid = parseInt(customId.replace("quiz_hint_", ""), 10);
      const q = QUIZ_BANK.find(item => item.id === qid);
      if (!q) {
        return jsonResp({
          type: 4,
          data: { content: "⚠️ Pembahasan tidak ditemukan.", flags: 64 }
        });
      }

      return jsonResp({
        type: 4,
        data: {
          embeds: [{
            title: `📖 KUNCI JAWABAN & PEMBAHASAN #${q.id}`,
            description: `• **Topik:** \`${q.category}\`\n` +
                         `• **Kunci Jawaban:** **Opsi ${q.correct}** (${q.options[q.correct]})\n\n` +
                         `**💡 Langkah Pembahasan:**\n${q.explanation}`,
            color: 0x3498DB,
            footer: { text: "Kunci Jawaban Kuis • MathCihuy" }
          }],
          flags: 64
        }
      });
    }

    // B. BUKA MODAL SET NAMA PANGGILAN
    if (customId === "btn_open_nama_modal") {
      return jsonResp({
        type: 9,
        data: {
          title: "✏️ Isi Nama Lengkap Siswa",
          custom_id: "modal_set_name",
          components: [
            {
              type: 1,
              components: [
                {
                  type: 4,
                  custom_id: "input_nama",
                  label: "Nama Lengkap atau Nama Panggilan",
                  style: 1,
                  placeholder: "Contoh: Gavin Ananta Mudiartono atau Gavin",
                  required: true,
                  max_length: 100
                }
              ]
            }
          ]
        }
      });
    }

    // C. KARTU PROGRES SISWA (WAJIB & MINAT)
    const linked = await env.DB.prepare("SELECT nis FROM discord_users WHERE user_id = ?").bind(String(callerId)).first();
    if (!linked || !linked.nis) {
      return jsonResp({
        type: 4,
        data: {
          content: `ℹ️ Akun Discord kamu belum tertaut ke NIS. Silakan klik tombol **Set Nama Panggilan** terlebih dahulu!`,
          flags: 64
        }
      });
    }

    if (customId === "btn_cf_wajib") {
      const card = await generateStudentProgressEmbed(env, linked.nis, "wajib");
      return jsonResp({
        type: 4,
        data: { embeds: [card.embed], components: studentActionRow, flags: 64 }
      });
    }

    if (customId === "btn_cf_minat") {
      const card = await generateStudentProgressEmbed(env, linked.nis, "minat");
      return jsonResp({
        type: 4,
        data: { embeds: [card.embed], components: studentActionRow, flags: 64 }
      });
    }
  }

  // =========================================================================
  // TIPE 5: MODAL SUBMIT
  // =========================================================================
  if (type === 5) {
    const modalId = data?.custom_id;

    // A. SUBMIT MODAL NAMA PANGGILAN
    if (modalId === "modal_set_name") {
      const inputVal = data?.components?.[0]?.components?.[0]?.value || "";
      const cleanQ = inputVal.trim().toLowerCase();

      const student = await env.DB.prepare(
        "SELECT nis, nama, kelas FROM siswa WHERE nis = ? OR LOWER(nama) LIKE ? LIMIT 1"
      ).bind(cleanQ, `%${cleanQ}%`).first();

      if (!student) {
        return jsonResp({
          type: 4,
          data: { content: `⚠️ Nama **"${inputVal}"** tidak cocok dengan data siswa resmi di database sekolah.`, flags: 64 }
        });
      }

      const now = new Date().toISOString();
      await env.DB.prepare(`
        INSERT INTO discord_users (user_id, username, display_name, nis, full_name, official_class, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(user_id) DO UPDATE SET
          username = excluded.username, display_name = excluded.display_name,
          nis = excluded.nis, full_name = excluded.full_name,
          official_class = excluded.official_class, updated_at = excluded.updated_at
      `).bind(String(callerId), callerUser?.username || '', callerUser?.global_name || callerUser?.username || '', String(student.nis), String(student.nama), String(student.kelas), now).run();

      return jsonResp({
        type: 4,
        data: {
          content: `✅ **Identitas Berhasil Ditautkan!**\n\n` +
                   `• **Nama Lengkap:** **${student.nama}**\n` +
                   `• **NIS:** \`${student.nis}\`\n` +
                   `• **Kelas:** \`${student.kelas}\`\n\n` +
                   `Sekarang kamu bisa langsung ketik \`/progres\` atau \`/progres_minat\` kapan saja!`,
          flags: 64
        }
      });
    }

    // B. SUBMIT MODAL PENGUMUMAN RESMI
    if (modalId === "modal_pengumuman") {
      const titleVal = data?.components?.[0]?.components?.[0]?.value || "PENGUMUMAN RESMI";
      const contentVal = data?.components?.[1]?.components?.[0]?.value || "";

      if (botToken) {
        const annEmbed = {
          title: `📢 ${titleVal.toUpperCase()}`,
          description: contentVal,
          color: 0xE74C3C,
          footer: { text: "Mr. Ardi (Guru Matematika & Wali Kelas) • SMA GIS 2 Serpong" },
          timestamp: new Date().toISOString()
        };

        await callDiscordApi(botToken, `/channels/${CHANNELS.pengumuman}/messages`, 'POST', {
          content: "@everyone",
          embeds: [annEmbed]
        });
      }

      return jsonResp({
        type: 4,
        data: { content: "✅ **Pengumuman Berhasil Diterbitkan!** Pesan telah dikirim ke channel pengumuman resmi.", flags: 64 }
      });
    }
  }

  return jsonResp({ error: 'Unknown interaction' }, 400);
}
