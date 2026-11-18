// functions/api/strategic-auction.js
// Cloudflare D1 Backend for Pertemuan 2: Strategic Auction (Statistika Kelas XII)
// SMA Global Islamic School 2 Serpong • Mr. Muhammad Ardiansyah, S.Pd.Gr.
// SECURITY AUDIT: ZERO FRONTEND KEYS & ZERO SPOILERS.
// All official evaluation and answer keys are strictly stored on the server.

import { jsonResponse } from './_auth.js';
import { updateStudentGamification } from './gamifikasi.js';

// RAHASIA GURU: KUNCI JAWABAN RESMI 4 TIPE SOAL BURSA & 2 EXIT TICKET (STATISTIKA)
const SECRET_AUCTION_DATA = {
  // 4 Soal Bursa Taruhan Poin Kelompok (Tabel Distribusi, Pemusatan & Penyebaran Data)
  questions: {
    1: {
      type: "single_choice",
      key: "C" // Nilai Kuartil Atas Q3 = 86,0
    },
    2: {
      type: "true_false",
      key: { s1: true, s2: false, s3: true, s4: false } // (1) Benar, (2) Salah, (3) Benar, (4) Salah
    },
    3: {
      type: "data_sufficiency",
      key: "C" // DUA pernyataan BERSAMA-SAMA cukup untuk menghitung rata-rata xbar = xs + sum(fi*di)/sum(fi)
    },
    4: {
      type: "complex_mc",
      key: ["opt1", "opt2", "opt3", "opt4"] // Keempat pernyataan bernilai BENAR (QR, Qd, Pagar Atas, Outlier)
    }
  },
  // 2 Soal Mini Mastery Check (Exit Ticket Individu Statistika)
  exitTicket: {
    1: "B", // Penjumlahan konstanta tidak mengubah simpangan baku karena jarak (xi - xbar) tetap
    2: "A"  // Pembulatan panjang kelas p selalu ke atas agar 8 * 7 = 56 >= 54
  }
};

async function ensureAuctionTables(db) {
  try {
    await db.prepare(`
      CREATE TABLE IF NOT EXISTS auction_sessions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        kelas TEXT NOT NULL,
        team_id TEXT NOT NULL,
        team_name TEXT NOT NULL,
        members_json TEXT NOT NULL,
        initial_points INTEGER DEFAULT 1000,
        current_points INTEGER DEFAULT 1000,
        rounds_completed INTEGER DEFAULT 0,
        history_json TEXT,
        last_updated TEXT NOT NULL
      )
    `).run();

    await db.prepare(`
      CREATE TABLE IF NOT EXISTS auction_exit_tickets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        kelas TEXT NOT NULL,
        nis TEXT NOT NULL,
        nama TEXT NOT NULL,
        score INTEGER DEFAULT 0,
        ans1 TEXT,
        ans2 TEXT,
        is_correct1 INTEGER DEFAULT 0,
        is_correct2 INTEGER DEFAULT 0,
        waktu_submit TEXT NOT NULL
      )
    `).run();
  } catch (e) {
    console.warn("ensureAuctionTables warning:", e);
  }
}

export async function onRequestGet(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }
    await ensureAuctionTables(context.env.DB);

    const url = new URL(context.request.url);
    const kelas = url.searchParams.get('kelas') || 'XII F3';
    const action = url.searchParams.get('action') || 'leaderboard';

    if (action === 'leaderboard') {
      const { results } = await context.env.DB.prepare(
        "SELECT * FROM auction_sessions WHERE kelas = ? ORDER BY current_points DESC"
      ).bind(kelas).all();

      return jsonResponse({
        success: true,
        kelas: kelas,
        teams: results || []
      });
    }

    if (action === 'exit_ticket_summary') {
      const { results } = await context.env.DB.prepare(
        "SELECT * FROM auction_exit_tickets WHERE kelas = ? ORDER BY waktu_submit DESC"
      ).bind(kelas).all();

      const total = results ? results.length : 0;
      let correctQ1 = 0;
      let correctQ2 = 0;
      if (results) {
        results.forEach(r => {
          if (r.is_correct1 === 1) correctQ1++;
          if (r.is_correct2 === 1) correctQ2++;
        });
      }

      return jsonResponse({
        success: true,
        total_participants: total,
        q1_pass_pct: total > 0 ? Math.round((correctQ1 / total) * 100) : 0,
        q2_pass_pct: total > 0 ? Math.round((correctQ2 / total) * 100) : 0,
        tickets: results || []
      });
    }

    return jsonResponse({ success: true, message: 'Ready' });
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}

export async function onRequestPost(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }
    await ensureAuctionTables(context.env.DB);

    const body = await context.request.json();
    if (!body) return jsonResponse({ error: 'Payload kosong' }, 400);

    const action = body.action;

    // 1. REGISTRASI / INIT KELOMPOK
    if (action === 'init_team') {
      const kelas = String(body.kelas || 'XII F3').trim();
      const teamId = String(body.team_id || 'team_1').trim();
      const teamName = String(body.team_name || 'Kelompok 1').trim();
      const members = Array.isArray(body.members) ? body.members : [];
      const waktu = new Date().toISOString();

      // Cek apakah tim sudah ada di kelas ini
      const existing = await context.env.DB.prepare(
        "SELECT * FROM auction_sessions WHERE kelas = ? AND team_id = ?"
      ).bind(kelas, teamId).first();

      if (!existing) {
        await context.env.DB.prepare(`
          INSERT INTO auction_sessions (
            kelas, team_id, team_name, members_json, initial_points, current_points, rounds_completed, history_json, last_updated
          ) VALUES (?, ?, ?, ?, 1000, 1000, 0, '[]', ?)
        `).bind(kelas, teamId, teamName, JSON.stringify(members), waktu).run();
      }

      const teamData = await context.env.DB.prepare(
        "SELECT * FROM auction_sessions WHERE kelas = ? AND team_id = ?"
      ).bind(kelas, teamId).first();

      return jsonResponse({ success: true, team: teamData });
    }

    // 2. EVALUASI TARUHAN & JAWABAN RONDE SOAL
    if (action === 'submit_round_bet') {
      const kelas = String(body.kelas || 'XII F3').trim();
      const teamId = String(body.team_id || '').trim();
      const roundNo = Number(body.round_no) || 1;
      const betAmount = Math.max(100, Math.min(300, Number(body.bet_amount) || 100));
      const studentAnswer = body.answer;
      const waktu = new Date().toISOString();

      const secretQ = SECRET_AUCTION_DATA.questions[roundNo];
      if (!secretQ) return jsonResponse({ error: 'Nomor ronde tidak valid' }, 400);

      let isCorrect = false;

      if (secretQ.type === 'single_choice' || secretQ.type === 'data_sufficiency') {
        isCorrect = String(studentAnswer || '').toUpperCase() === secretQ.key;
      } else if (secretQ.type === 'true_false') {
        const tfAns = typeof studentAnswer === 'object' && studentAnswer !== null ? studentAnswer : {};
        const k = secretQ.key;
        isCorrect = (
          Boolean(tfAns.s1) === k.s1 &&
          Boolean(tfAns.s2) === k.s2 &&
          Boolean(tfAns.s3) === k.s3 &&
          Boolean(tfAns.s4) === k.s4
        );
      } else if (secretQ.type === 'complex_mc') {
        const chosenList = Array.isArray(studentAnswer) ? studentAnswer.sort() : [];
        const expectedList = [...secretQ.key].sort();
        isCorrect = JSON.stringify(chosenList) === JSON.stringify(expectedList);
      }

      // Hitung perubahan poin
      const teamRow = await context.env.DB.prepare(
        "SELECT * FROM auction_sessions WHERE kelas = ? AND team_id = ?"
      ).bind(kelas, teamId).first();

      let currentPts = teamRow ? teamRow.current_points : 1000;
      let history = [];
      try { history = JSON.parse(teamRow.history_json || '[]'); } catch(e) {}

      // Combo streak check
      let streak = 0;
      for (let i = history.length - 1; i >= 0; i--) {
        if (history[i].is_correct) streak++;
        else break;
      }

      let multiplier = 1.0;
      if (isCorrect) {
        if (streak >= 2) multiplier = 1.5;
        else if (streak >= 1) multiplier = 1.2;
      }

      const pointDelta = isCorrect ? Math.round(betAmount * multiplier) : -betAmount;
      currentPts = Math.max(0, currentPts + pointDelta);

      history.push({
        round: roundNo,
        type: secretQ.type,
        bet: betAmount,
        is_correct: isCorrect,
        delta: pointDelta,
        new_total: currentPts,
        timestamp: waktu
      });

      await context.env.DB.prepare(`
        UPDATE auction_sessions SET
          current_points = ?,
          rounds_completed = rounds_completed + 1,
          history_json = ?,
          last_updated = ?
        WHERE kelas = ? AND team_id = ?
      `).bind(currentPts, JSON.stringify(history), waktu, kelas, teamId).run();

      return jsonResponse({
        success: true,
        round_no: roundNo,
        is_correct: isCorrect,
        point_delta: pointDelta,
        new_total: currentPts,
        multiplier: multiplier,
        streak: isCorrect ? streak + 1 : 0
      });
    }

    // 3. SUBMIT MINI MASTERY CHECK (INDIVIDUAL EXIT TICKET)
    if (action === 'submit_exit_ticket') {
      const kelas = String(body.kelas || 'XII F3').trim();
      const nis = String(body.nis || '').trim();
      const nama = String(body.nama || '').trim();
      const ans1 = String(body.ans1 || '').toUpperCase();
      const ans2 = String(body.ans2 || '').toUpperCase();
      const waktu = new Date().toISOString();

      const isCor1 = ans1 === SECRET_AUCTION_DATA.exitTicket[1] ? 1 : 0;
      const isCor2 = ans2 === SECRET_AUCTION_DATA.exitTicket[2] ? 1 : 0;
      const score = (isCor1 + isCor2) * 50; // 0, 50, atau 100

      await context.env.DB.prepare(`
        INSERT INTO auction_exit_tickets (
          kelas, nis, nama, score, ans1, ans2, is_correct1, is_correct2, waktu_submit
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(kelas, nis, nama, score, ans1, ans2, isCor1, isCor2, waktu).run();

      // Tambahkan XP Gamifikasi
      try {
        await updateStudentGamification(context.env.DB, nis, score, isCor1 + isCor2, 2, 180, waktu);
      } catch(e) {}

      return jsonResponse({
        success: true,
        nis: nis,
        nama: nama,
        score: score,
        is_correct1: isCor1 === 1,
        is_correct2: isCor2 === 1,
        feedback: {
          q1_explanation: "Nilai simpangan baku ($S$) tidak pernah bernilai negatif karena setiap deviasi $(x_i - \\bar{x})$ dikuadratkan sebelum dirata-ratakan, dan akar kuadrat utama dari bilangan non-negatif selalu menghasilkan nilai non-negatif ($S \\ge 0$).",
          q2_explanation: "Dalam kaidah penyusunan tabel distribusi frekuensi, nilai panjang kelas interval ($p$) harus selalu dibulatkan ke atas menjadi $p = 7$ agar rentang kapasitas 8 kelas interval ($8 \\times 7 = 56$) dapat menampung seluruh jangkauan sebaran data ($54$) hingga data maksimum."
        }
      });
    }

    return jsonResponse({ error: 'Action tidak dikenali' }, 400);
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}
