// functions/api/strategic-auction.js
// Cloudflare D1 Backend for Pertemuan 2: Strategic Auction (Statistika Kelas XII)
// Authenticated • Anti-Replay Round Enforcement • Sanitized Metadata

import { authenticateRequest, jsonResponse } from './_auth.js';
import { updateStudentGamification } from './gamifikasi.js';

const SECRET_AUCTION_DATA = {
  questions: {
    1: { type: "single_choice", key: "C" },
    2: { type: "true_false", key: { s1: true, s2: false, s3: true, s4: false } },
    3: { type: "data_sufficiency", key: "C" },
    4: { type: "complex_mc", key: ["opt1", "opt2", "opt3", "opt4"] }
  },
  exitTicket: {
    1: "B",
    2: "A"
  }
};

function cleanPlainText(val, maxLen = 60) {
  return String(val || '').replace(/[<>&"']/g, '').trim().slice(0, maxLen);
}

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
  } catch (e) {}
}

export async function onRequestGet(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }

    const session = await authenticateRequest(context.request, context.env);
    if (!session) {
      return jsonResponse({ error: 'Akses ditolak (401): Silakan login terlebih dahulu.' }, 401);
    }

    await ensureAuctionTables(context.env.DB);

    const url = new URL(context.request.url);
    const kelas = cleanPlainText(url.searchParams.get('kelas') || session.kelas || 'XII F3', 30);
    const action = url.searchParams.get('action') || 'leaderboard';

    if (action === 'leaderboard') {
      const cols = session.role === 'guru'
        ? "team_id, team_name, kelas, current_points, rounds_completed, members_json, last_updated"
        : "team_id, team_name, kelas, current_points, rounds_completed, last_updated";
      const { results } = await context.env.DB.prepare(
        `SELECT ${cols} FROM auction_sessions WHERE kelas = ? ORDER BY current_points DESC`
      ).bind(kelas).all();

      return jsonResponse({
        success: true,
        kelas,
        teams: results || []
      });
    }

    if (action === 'exit_ticket_summary') {
      const { results } = await context.env.DB.prepare(
        "SELECT id, kelas, nis, nama, score, is_correct1, is_correct2, waktu_submit FROM auction_exit_tickets WHERE kelas = ? ORDER BY waktu_submit DESC"
      ).bind(kelas).all();

      const rows = results || [];
      const total = rows.length;
      let correctQ1 = 0;
      let correctQ2 = 0;
      rows.forEach(r => {
        if (r.is_correct1 === 1) correctQ1++;
        if (r.is_correct2 === 1) correctQ2++;
      });

      const visibleTickets = session.role === 'guru'
        ? rows
        : rows.filter(r => String(r.nis) === String(session.nis));

      return jsonResponse({
        success: true,
        total_participants: total,
        q1_pass_pct: total > 0 ? Math.round((correctQ1 / total) * 100) : 0,
        q2_pass_pct: total > 0 ? Math.round((correctQ2 / total) * 100) : 0,
        tickets: visibleTickets
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

    const session = await authenticateRequest(context.request, context.env);
    if (!session) {
      return jsonResponse({ error: 'Akses ditolak (401): Silakan login terlebih dahulu.' }, 401);
    }

    await ensureAuctionTables(context.env.DB);

    const body = await context.request.json().catch(() => null);
    if (!body) return jsonResponse({ error: 'Payload kosong' }, 400);

    const action = body.action;

    // 1. REGISTRASI / INIT KELOMPOK
    if (action === 'init_team') {
      const kelas = cleanPlainText(body.kelas || session.kelas || 'XII F3', 30);
      const teamId = cleanPlainText(body.team_id || 'team_1', 40);
      const teamName = cleanPlainText(body.team_name || 'Kelompok 1', 50);
      const rawMembers = Array.isArray(body.members) ? body.members.slice(0, 8) : [];
      const members = rawMembers.map(m => ({
        nis: cleanPlainText(m?.nis, 25),
        nama: cleanPlainText(m?.nama, 80)
      }));

      if (session.role !== 'guru' && session.nis) {
        const includesSelf = members.some(m => m.nis === String(session.nis) || m.nama === String(session.nama));
        if (!includesSelf) {
          members.push({ nis: String(session.nis), nama: String(session.nama || '') });
        }
      }

      const waktu = new Date().toISOString();
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
        "SELECT team_id, team_name, kelas, initial_points, current_points, rounds_completed, last_updated FROM auction_sessions WHERE kelas = ? AND team_id = ?"
      ).bind(kelas, teamId).first();

      return jsonResponse({ success: true, team: teamData });
    }

    // 2. EVALUASI TARUHAN & JAWABAN RONDE SOAL (Anti-Replay 1x per Ronde)
    if (action === 'submit_round_bet') {
      const kelas = cleanPlainText(body.kelas || session.kelas || 'XII F3', 30);
      const teamId = cleanPlainText(body.team_id || '', 40);
      const roundNo = Number(body.round_no) || 1;
      const betAmount = Math.max(100, Math.min(300, Number(body.bet_amount) || 100));
      const studentAnswer = body.answer;
      const waktu = new Date().toISOString();

      const secretQ = SECRET_AUCTION_DATA.questions[roundNo];
      if (!secretQ) return jsonResponse({ error: 'Nomor ronde tidak valid' }, 400);

      const teamRow = await context.env.DB.prepare(
        "SELECT * FROM auction_sessions WHERE kelas = ? AND team_id = ?"
      ).bind(kelas, teamId).first();

      if (!teamRow) {
        return jsonResponse({ error: 'Tim belum terdaftar di kelas ini.' }, 404);
      }

      if (session.role !== 'guru' && session.nis) {
        try {
          const teamMembers = JSON.parse(teamRow.members_json || '[]');
          const isMember = Array.isArray(teamMembers) && teamMembers.some(
            m => String(m?.nis || '') === String(session.nis) || String(m?.nama || '') === String(session.nama)
          );
          if (!isMember) {
            return jsonResponse({ error: 'Akses dilarang (403): Akun Anda bukan anggota tim ini.' }, 403);
          }
        } catch (_) {}
      }

      let history = [];
      try { history = JSON.parse(teamRow.history_json || '[]'); } catch (e) {}

      if (history.some(h => Number(h.round) === roundNo)) {
        return jsonResponse({ error: `Ronde ${roundNo} sudah disubmit sebelumnya oleh tim ini.` }, 409);
      }

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
        const chosenList = Array.isArray(studentAnswer) ? [...studentAnswer].sort() : [];
        const expectedList = [...secretQ.key].sort();
        isCorrect = JSON.stringify(chosenList) === JSON.stringify(expectedList);
      }

      let currentPts = Number(teamRow.current_points || 1000);
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
        multiplier,
        streak: isCorrect ? streak + 1 : 0
      });
    }

    // 3. SUBMIT EXIT TICKET (Terikat Sesi + 1x Submission)
    if (action === 'submit_exit_ticket') {
      const targetNis = session.role === 'guru'
        ? String(body.nis || '').trim()
        : String(session.nis || '').trim();

      if (!targetNis) {
        return jsonResponse({ error: 'NIS tidak ditemukan dalam sesi aktif.' }, 400);
      }

      const dbStudent = await context.env.DB.prepare(
        "SELECT nis, nama, kelas FROM siswa WHERE nis = ?"
      ).bind(targetNis).first();

      const verifiedNama = dbStudent ? dbStudent.nama : cleanPlainText(session.nama || body.nama || '', 100);
      const verifiedKelas = dbStudent ? dbStudent.kelas : cleanPlainText(body.kelas || session.kelas || 'XII F3', 30);

      const already = await context.env.DB.prepare(
        "SELECT id FROM auction_exit_tickets WHERE kelas = ? AND nis = ?"
      ).bind(verifiedKelas, targetNis).first();
      if (already && session.role !== 'guru') {
        return jsonResponse({ error: 'Exit Ticket untuk sesi ini sudah pernah dikirimkan.' }, 409);
      }

      const ans1 = String(body.ans1 || '').toUpperCase().slice(0, 10);
      const ans2 = String(body.ans2 || '').toUpperCase().slice(0, 10);
      const waktu = new Date().toISOString();

      const isCor1 = ans1 === SECRET_AUCTION_DATA.exitTicket[1] ? 1 : 0;
      const isCor2 = ans2 === SECRET_AUCTION_DATA.exitTicket[2] ? 1 : 0;
      const score = (isCor1 + isCor2) * 50;

      await context.env.DB.prepare(`
        INSERT INTO auction_exit_tickets (
          kelas, nis, nama, score, ans1, ans2, is_correct1, is_correct2, waktu_submit
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(verifiedKelas, targetNis, verifiedNama, score, ans1, ans2, isCor1, isCor2, waktu).run();

      try {
        await updateStudentGamification(context.env.DB, targetNis);
      } catch (e) {}

      return jsonResponse({
        success: true,
        nis: targetNis,
        nama: verifiedNama,
        score,
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
