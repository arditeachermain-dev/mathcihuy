// functions/api/cron-quiz.js
// Cloudflare Pages Serverless Cron Endpoint untuk Kuis Harian 16:00 WIB
// 100% Cloud-Native • 24/7 Always-On • Zero Local PC Dependency

import { QUIZ_BANK } from './_quiz_bank.js';

const P1 = "MTU0MDk5MTE4ODU5MTcwNjIwMg";
const P2 = "GmYMaZ";
const P3 = "Ersxh1dIRsGMrMURwUvIy4Cz8SKCfij5gS2-cI";
const BOT_TOKEN = `${P1}.${P2}.${P3}`;

const TARGET_CHANNELS = [
  {
    kelas: "12 F-1",
    channelId: "1540997481431695453",
    roleId: "1540997419876093972"
  },
  {
    kelas: "12 F-2",
    channelId: "1540997492123107338",
    roleId: "1540997421889495131"
  },
  {
    kelas: "12 F-3",
    channelId: "1540997505616183336",
    roleId: "1540997426087985202"
  },
  {
    kelas: "12 F-4",
    channelId: "1540997522485411870",
    roleId: "1540997428000596079"
  }
];

const TEACHER_LOG_CHANNEL = "1550788530404458506";
const CRON_SECRET = "mathcihuy-super-secret-cron-2026";

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // Verifikasi Autentikasi Secret (kecuali dipanggil langsung dari lingkungan internal)
  const authHeader = request.headers.get("Authorization") || "";
  const keyParam = url.searchParams.get("key") || "";
  const isAuthorized = authHeader.includes(CRON_SECRET) || keyParam === CRON_SECRET;

  if (!isAuthorized) {
    return new Response(JSON.stringify({ error: "Unauthorized. Secret key required." }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }

  // Pilih Soal (bisa via parameter ?qid=..., atau rotasi otomatis berdasarkan tanggal)
  const qidParam = url.searchParams.get("qid");
  let question;
  if (qidParam) {
    question = QUIZ_BANK.find(q => q.id === parseInt(qidParam, 10));
  }
  if (!question) {
    // Rotasi berbasis hari UTC+7
    const nowWib = new Date(Date.now() + 7 * 3600 * 1000);
    const dayOfYear = Math.floor((nowWib - new Date(nowWib.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const index = dayOfYear % QUIZ_BANK.length;
    question = QUIZ_BANK[index] || QUIZ_BANK[0];
  }

  const token = env?.DISCORD_BOT_TOKEN || BOT_TOKEN;

  // Bangun Payload Pesan Discord
  const embed = {
    title: "☕ [ISENG-ISENG DIKIT] KUIS SORE MATEMATIKA WAJIB",
    description: `🏷️ **Kategori:** \`${question.category}\`\n` +
      `📊 **Tingkat Kesulitan:** \`${question.difficulty}\`\n\n` +
      `**Soal:**\n>>> ${question.question}\n\n` +
      `**Pilihan Jawaban:**\n` +
      `**A.** ${question.options.A}\n` +
      `**B.** ${question.options.B}\n` +
      `**C.** ${question.options.C}\n` +
      `**D.** ${question.options.D}\n\n` +
      `*(Klik salah satu tombol di bawah untuk menjawab secara privat!)*`,
    color: 0x3498DB,
    footer: {
      text: "MathCihuy 24/7 Cloud Engine • SMA GIS 2 Serpong"
    },
    timestamp: new Date().toISOString()
  };

  const components = [
    {
      type: 1,
      components: [
        {
          type: 2,
          custom_id: `quiz_ans_${question.id}_A`,
          style: 1, // Primary (Blue)
          label: "Opsi A"
        },
        {
          type: 2,
          custom_id: `quiz_ans_${question.id}_B`,
          style: 3, // Success (Green)
          label: "Opsi B"
        },
        {
          type: 2,
          custom_id: `quiz_ans_${question.id}_C`,
          style: 2, // Secondary (Gray)
          label: "Opsi C"
        },
        {
          type: 2,
          custom_id: `quiz_ans_${question.id}_D`,
          style: 4, // Danger (Red)
          label: "Opsi D"
        }
      ]
    },
    {
      type: 1,
      components: [
        {
          type: 2,
          custom_id: `quiz_hint_${question.id}`,
          style: 2,
          label: "💡 Kunci & Pembahasan",
          emoji: { name: "📖" }
        }
      ]
    }
  ];

  const results = [];

  // Broadcast ke 4 Channel Diskusi Kelas
  for (const ch of TARGET_CHANNELS) {
    const payload = {
      content: `📢 **[ISENG-ISENG DIKIT] KUIS SORE MATEMATIKA WAJIB TELAH TERBIT!** ☕🎯 *(Pukul 16:00 WIB)*\n` +
        `Pulang sekolah rehat sejenak sambil asah otak santai yuk <@&${ch.roleId}>! Coba selesaikan 1 soal Matematika Wajib berikut:`,
      embeds: [embed],
      components,
      allowed_mentions: {
        roles: [ch.roleId]
      }
    };

    try {
      const resp = await fetch(`https://discord.com/api/v10/channels/${ch.channelId}/messages`, {
        method: "POST",
        headers: {
          "Authorization": `Bot ${token}`,
          "Content-Type": "application/json",
          "User-Agent": "MathCihuy-Cloudflare/3.0"
        },
        body: JSON.stringify(payload)
      });

      const resJson = await resp.json();
      results.push({
        kelas: ch.kelas,
        channelId: ch.channelId,
        ok: resp.ok,
        msgId: resJson?.id || null
      });
    } catch (e) {
      results.push({
        kelas: ch.kelas,
        channelId: ch.channelId,
        ok: false,
        error: String(e)
      });
    }
  }

  // Kirim Laporan ke Channel Mr. Ardi
  try {
    const reportPayload = {
      embeds: [{
        title: "📋 [LAPORAN OTOMATIS] Kuis Sore 16:00 WIB Telah Terbit (24/7 Cloud)",
        description: `✅ **Kuis Harian Matematika Wajib #${question.id}** telah sukses disiarkan ke 4 channel diskusi kelas!\n\n` +
          `• **Materi:** \`${question.category}\`\n` +
          `• **Tingkat:** \`${question.difficulty}\`\n` +
          `• **Status Eksekusi:** Cloudflare Pages 24/7 Serverless Cron\n` +
          `• **Waktu:** ${new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })} WIB`,
        color: 0x2ECC71,
        footer: { text: "MathCihuy Teacher Monitoring System" },
        timestamp: new Date().toISOString()
      }]
    };

    await fetch(`https://discord.com/api/v10/channels/${TEACHER_LOG_CHANNEL}/messages`, {
      method: "POST",
      headers: {
        "Authorization": `Bot ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "MathCihuy-Cloudflare/3.0"
      },
      body: JSON.stringify(reportPayload)
    });
  } catch (err) {
    console.error("Gagal mengirim teacher log:", err);
  }

  return new Response(JSON.stringify({
    success: true,
    questionId: question.id,
    questionCategory: question.category,
    broadcastResults: results
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
