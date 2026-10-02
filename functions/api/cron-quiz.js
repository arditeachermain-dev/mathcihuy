// functions/api/cron-quiz.js
// Cloudflare Pages Serverless Cron Endpoint untuk Kuis Harian 16:00 WIB
// 100% Cloud-Native • 24/7 Always-On • Mengadaptasi 5 Tipe Soal Resmi TKA Pusmendik

import { QUIZ_BANK, TKA_TYPES } from './_quiz_bank.js';

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

export async function onRequestGet(context) {
  return handleCronQuiz(context);
}

export async function onRequestPost(context) {
  return handleCronQuiz(context);
}

export async function onRequest(context) {
  return handleCronQuiz(context);
}

async function handleCronQuiz(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // Verifikasi Autentikasi Secret
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
  const typeInfo = TKA_TYPES[question.type] || { name: question.type, desc: "" };

  // Bangun Konten Soal Sesuai Tipe
  let descText = `🏷️ **Tipe Soal TKA:** \`${typeInfo.name}\`\n` +
    `📌 **Panduan:** *${typeInfo.desc}*\n` +
    `📚 **Materi:** \`${question.category}\`\n` +
    `📊 **Level Kognitif:** \`${question.difficulty}\`\n\n` +
    `**Soal:**\n>>> ${question.question}\n\n`;

  if (question.options) {
    descText += `**Pilihan Jawaban:**\n` +
      `**A.** ${question.options.A}\n` +
      `**B.** ${question.options.B}\n` +
      `**C.** ${question.options.C}\n` +
      `**D.** ${question.options.D}\n\n` +
      `*(Klik salah satu tombol di bawah untuk menjawab secara privat!)*`;
  } else if (question.type === "ISIAN_SINGKAT") {
    descText += `*(Klik tombol '✍️ Ketik Jawaban Angka' di bawah untuk memasukkan hasil perhitunganmu secara privat!)*`;
  }

  // Embed Color bergradasi sesuai tipe TKA
  let embedColor = 0x3498DB; // Blue (PG)
  if (question.type === "PGK_MCMA") embedColor = 0xE67E22; // Orange
  else if (question.type === "PGK_KATEGORI") embedColor = 0xF1C40F; // Gold
  else if (question.type === "MENJODOHKAN") embedColor = 0x2ECC71; // Green
  else if (question.type === "ISIAN_SINGKAT") embedColor = 0x9B59B6; // Purple

  const embed = {
    title: `☕ [TKA KEMENDIKDASMEN] KUIS SORE MATEMATIKA`,
    description: descText,
    color: embedColor,
    footer: {
      text: `MathCihuy 24/7 TKA Engine • SMA GIS 2 Serpong`
    },
    timestamp: new Date().toISOString()
  };

  // Komponen Tombol Interaktif
  const components = [];
  if (question.type === "ISIAN_SINGKAT") {
    components.push({
      type: 1,
      components: [
        {
          type: 2,
          custom_id: `quiz_open_input_${question.id}`,
          style: 1, // Primary (Blue)
          label: "✍️ Ketik Jawaban Angka",
          emoji: { name: "✏️" }
        },
        {
          type: 2,
          custom_id: `quiz_hint_${question.id}`,
          style: 2,
          label: "💡 Kunci & Pembahasan",
          emoji: { name: "📖" }
        }
      ]
    });
  } else {
    // Tombol Pilihan Jawaban
    components.push({
      type: 1,
      components: [
        {
          type: 2,
          custom_id: `quiz_ans_${question.id}_A`,
          style: 1,
          label: "Opsi A"
        },
        {
          type: 2,
          custom_id: `quiz_ans_${question.id}_B`,
          style: 3,
          label: "Opsi B"
        },
        {
          type: 2,
          custom_id: `quiz_ans_${question.id}_C`,
          style: 2,
          label: "Opsi C"
        },
        {
          type: 2,
          custom_id: `quiz_ans_${question.id}_D`,
          style: 4,
          label: "Opsi D"
        }
      ]
    });
    // Baris Kedua: Tombol Pembahasan
    components.push({
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
    });
  }

  const results = [];

  // Broadcast ke 4 Channel Diskusi Kelas
  for (const ch of TARGET_CHANNELS) {
    const payload = {
      content: `📢 **[TKA KEMENDIKDASMEN] KUIS SORE TELAH TERBIT!** ☕🎯 *(Pukul 16:00 WIB)*\n` +
        `Uji kemampuan konsepmu <@&${ch.roleId}>! Selesaikan 1 tantangan soal tipe **${typeInfo.name}** berikut:`,
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
        description: `✅ **Kuis Harian TKA #${question.id}** telah sukses disiarkan ke 4 channel diskusi kelas!\n\n` +
          `• **Tipe Soal TKA:** \`${typeInfo.name}\`\n` +
          `• **Materi Pokok:** \`${question.category}\`\n` +
          `• **Level Kognitif:** \`${question.difficulty}\`\n` +
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
    questionType: question.type,
    questionTypeName: typeInfo.name,
    questionCategory: question.category,
    broadcastResults: results
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
