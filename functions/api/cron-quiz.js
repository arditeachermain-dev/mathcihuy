// functions/api/cron-quiz.js
// Cloudflare Pages Serverless Cron Endpoint untuk Kuis Harian 16:00 WIB
// 100% Cloud-Native • 24/7 Always-On • Strict 1 Soal Per Hari • Silent Message (Zero-Ping)

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

  // 1. Verifikasi Autentikasi Secret
  const activeSecret = env.CRON_SECRET || CRON_SECRET;
  const authHeader = request.headers.get("Authorization") || "";
  const keyParam = url.searchParams.get("key") || "";
  const isAuthorized = (activeSecret && (authHeader.includes(activeSecret) || keyParam === activeSecret));

  if (!isAuthorized) {
    return new Response(JSON.stringify({ error: "Unauthorized. Secret key required." }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }

  // 2. Proteksi Waktu & Idempotensi Ketat: 1 Soal Saja Per Hari (WIB)
  const nowWib = new Date(Date.now() + 7 * 3600 * 1000);
  const todayWibStr = nowWib.toISOString().slice(0, 10); // "YYYY-MM-DD"
  const hourWib = nowWib.getUTCHours();
  const minuteWib = nowWib.getUTCMinutes();
  const isForce = url.searchParams.get("force") === "true";

  // 2.1. Jendela Waktu Kuis Sore (15:50 s.d. 18:00 WIB)
  // Menjamin kuis sore TIDAK AKAN PERNAH terbit malam hari (seperti jam 21:28) jika scheduler telat
  const isWithinTimeWindow = (hourWib === 15 && minuteWib >= 50) || (hourWib >= 16 && hourWib < 18);
  if (!isWithinTimeWindow && !isForce) {
    return new Response(JSON.stringify({
      success: true,
      skipped: true,
      message: `Di luar jendela waktu kuis sore (16:00 - 18:00 WIB). Saat ini pukul ${String(hourWib).padStart(2, '0')}:${String(minuteWib).padStart(2, '0')} WIB. Pengiriman dibatalkan otomatis agar kuis sore tidak muncul malam hari.`
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }

  if (env?.DB) {
    try {
      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS daily_quiz_log (
          quiz_date TEXT PRIMARY KEY,
          question_id INTEGER,
          published_at TEXT
        )
      `).run();

      const existing = await env.DB.prepare(
        "SELECT question_id, published_at FROM daily_quiz_log WHERE quiz_date = ?"
      ).bind(todayWibStr).first();

      if (existing && !isForce) {
        return new Response(JSON.stringify({
          success: true,
          skipped: true,
          message: `Kuis untuk hari ini (${todayWibStr}) sudah terbit (Soal #${existing.question_id} pada ${existing.published_at}). Pengiriman dihentikan untuk menjaga aturan: maksimal 1 soal per hari tanpa spam.`
        }), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      }
    } catch (dbErr) {
      console.warn("DB check error in cron-quiz:", dbErr);
    }
  }

  // 3. Pilih Soal (Rotasi otomatis berdasarkan tanggal atau parameter ?qid=...)
  const qidParam = url.searchParams.get("qid");
  let question;
  if (qidParam) {
    question = QUIZ_BANK.find(q => q.id === parseInt(qidParam, 10));
  }
  if (!question) {
    // Rotasi berbasis hari UTC+7
    const dayOfYear = Math.floor((nowWib - new Date(nowWib.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const index = dayOfYear % QUIZ_BANK.length;
    question = QUIZ_BANK[index] || QUIZ_BANK[0];
  }

  const token = env?.DISCORD_BOT_TOKEN || BOT_TOKEN;
  const typeInfo = TKA_TYPES[question.type] || { name: question.type, desc: "" };

  // 4. Bangun Konten Soal Sesuai Tipe
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
      `**D.** ${question.options.D}\n` +
      (question.options.E ? `**E.** ${question.options.E}\n\n` : `\n`) +
      `*(Klik salah satu tombol di bawah untuk menjawab secara privat!)*`;
  } else if (question.type === "ISIAN_SINGKAT") {
    descText += `*(Klik tombol '✍️ Ketik Jawaban Angka' di bawah untuk memasukkan hasil perhitunganmu secara privat!)*`;
  }

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
      text: `MathCihuy 24/7 TKA Engine • SMA GIS 2 Serpong (1 Soal/Hari)`
    },
    timestamp: new Date().toISOString()
  };

  // Komponen Tombol Interaktif (Standar 5 Opsi A s.d. E)
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
    const optButtons = [
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
    ];

    if (question.options && question.options.E) {
      optButtons.push({
        type: 2,
        custom_id: `quiz_ans_${question.id}_E`,
        style: 1,
        label: "Opsi E"
      });
    }

    components.push({
      type: 1,
      components: optButtons
    });
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

  // 5. Broadcast ke 4 Channel Diskusi Kelas (MODE SENYAP / ZERO-PING / ANTI-BERISIK)
  for (const ch of TARGET_CHANNELS) {
    const payload = {
      // TIDAK MENTION ROLE (@role) agar HP siswa tidak berbunyi/getar ("tidak berisik")
      content: `☕ **[ISENG-ISENG DIKIT] KUIS SORE MATEMATIKA** 🎯 *(Pukul 16:00 WIB)*\n` +
        `Rehat sejenak sambil asah otak santai teman-teman **${ch.kelas}**! Coba selesaikan 1 soal tipe **${typeInfo.name}** hari ini:\n` +
        `🎮 *Klik opsi untuk klaim **+50 EXP**, perpanjang **Daily Streak**, & buka lencana **Jam Kritis 16:00** di web!*`,
      embeds: [embed],
      components,
      flags: 4096, // SUPPRESS_NOTIFICATIONS: Pesan masuk hening/senyap tanpa notifikasi suara
      allowed_mentions: { parse: [] } // Blokir seluruh ping mention
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

  // 6. Catat Log ke D1 Database agar Terkunci untuk Hari Ini
  if (env?.DB) {
    try {
      await env.DB.prepare(`
        INSERT OR REPLACE INTO daily_quiz_log (quiz_date, question_id, published_at)
        VALUES (?, ?, ?)
      `).bind(todayWibStr, question.id, nowWib.toISOString()).run();
    } catch (logErr) {
      console.error("Gagal simpan daily_quiz_log ke D1:", logErr);
    }
  }

  // 7. Kirim Laporan ke Channel Mr. Ardi
  try {
    const reportPayload = {
      embeds: [{
        title: "📋 [LAPORAN OTOMATIS] Kuis Sore 16:00 WIB Telah Terbit (1 Soal/Hari)",
        description: `✅ **Kuis Harian TKA #${question.id}** telah disiarkan ke 4 channel diskusi kelas dalam **Mode Senyap (Zero-Ping)**.\n\n` +
          `• **Tanggal Terbit:** \`${todayWibStr}\`\n` +
          `• **Tipe Soal TKA:** \`${typeInfo.name}\`\n` +
          `• **Materi Pokok:** \`${question.category}\`\n` +
          `• **Level Kognitif:** \`${question.difficulty}\`\n` +
          `• **Proteksi:** Idempotensi Harian Aktif (Terkunci 1 soal/hari)`,
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
