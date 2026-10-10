// functions/api/gamifikasi.js
// Cloudflare D1 Native Gamification, Daily Streak, XP & Leaderboard Engine
// Arsitektur Zero-Bug • Parameterized Prepared Statements • Anti-Tamper Server-Side

import { authenticateRequest, jsonResponse } from './_auth.js';

export const LEVEL_CONFIG = [
  { level: 1, minXp: 0, maxXp: 199, gelar: 'Novice Explorer' },
  { level: 2, minXp: 200, maxXp: 499, gelar: 'Probability Scout' },
  { level: 3, minXp: 500, maxXp: 999, gelar: 'Spatial Navigator' },
  { level: 4, minXp: 1000, maxXp: 1999, gelar: 'Matrix Strategist' },
  { level: 5, minXp: 2000, maxXp: 3499, gelar: 'Data Analyst Prodigy' },
  { level: 6, minXp: 3500, maxXp: 999999, gelar: 'Calculus Grandmaster' }
];

export const BADGE_CATALOG = {
  perfect_100: {
    id: 'perfect_100',
    name: 'Nilai Sempurna',
    icon: 'fa-solid fa-bullseye',
    color: '#B26B00',
    bg: '#FFF7E6',
    desc: 'Meraih skor 100 pada ujian CBT'
  },
  fast_thinker: {
    id: 'fast_thinker',
    name: 'Berpikir Cepat',
    icon: 'fa-solid fa-bolt',
    color: '#0284C7',
    bg: '#EBF3FB',
    desc: 'Menyelesaikan CBT dalam waktu efisien (<= 20 menit) dan tuntas KKM'
  },
  streak_hero: {
    id: 'streak_hero',
    name: 'Pahlawan Konsistensi',
    icon: 'fa-solid fa-fire-flame-curved',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Belajar dan submit CBT minimal 3 hari berturut-turut'
  },
  dimensi_tiga: {
    id: 'dimensi_tiga',
    name: 'Penakluk Geometri',
    icon: 'fa-solid fa-cube',
    color: '#2E7D32',
    bg: '#EDF7ED',
    desc: 'Menuntaskan paket ujian Geometri Dimensi Tiga (P09-P14)'
  },
  statistika_pioneer: {
    id: 'statistika_pioneer',
    name: 'Pelopor Statistika',
    icon: 'fa-solid fa-chart-column',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Menuntaskan paket ujian Statistika & Data Bivariat (P15-P21)'
  },
  reflective_mind: {
    id: 'reflective_mind',
    name: 'Reflektif Mandiri',
    icon: 'fa-solid fa-brain',
    color: '#2E384D',
    bg: '#F0EFEA',
    desc: 'Melengkapi angket refleksi pemahaman diri matematika'
  }
};

export function getLevelAndTitle(xp) {
  for (let i = LEVEL_CONFIG.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_CONFIG[i].minXp) {
      const cfg = LEVEL_CONFIG[i];
      const nextCfg = LEVEL_CONFIG[i + 1] || null;
      const isMaxLevel = !nextCfg;
      let nextXp = nextCfg ? nextCfg.minXp : cfg.minXp;
      let currentLevelBase = cfg.minXp;
      let range = nextCfg ? (nextCfg.minXp - currentLevelBase) : 0;
      let progress = isMaxLevel ? 100 : (range > 0 ? Math.min(100, Math.round(((xp - currentLevelBase) / range) * 100)) : 100);

      return {
        level: cfg.level,
        gelar: cfg.gelar,
        current_xp: xp,
        next_level_xp: nextXp,
        progress_pct: progress
      };
    }
  }
  return {
    level: 1,
    gelar: 'Novice Explorer',
    current_xp: xp,
    next_level_xp: 200,
    progress_pct: 0
  };
}

export function calculateStreaks(dates) {
  if (!dates || dates.length === 0) return { current: 1, max: 1, last: null };
  const uniqueDates = Array.from(new Set(dates)).sort();
  let maxStreak = 1;
  let currStreak = 1;

  for (let i = 1; i < uniqueDates.length; i++) {
    const prev = new Date(uniqueDates[i - 1]);
    const curr = new Date(uniqueDates[i]);
    const diffDays = Math.round((curr - prev) / (1000 * 3600 * 24));
    if (diffDays === 1) {
      currStreak++;
      if (currStreak > maxStreak) maxStreak = currStreak;
    } else if (diffDays > 1) {
      currStreak = 1;
    }
  }

  const lastDate = uniqueDates[uniqueDates.length - 1];
  return { current: currStreak, max: maxStreak, last: lastDate };
}

// Rekalkulasi profil gamifikasi satu siswa secara transaksional
export async function updateStudentGamification(db, nis) {
  if (!db || !nis) return null;
  const cleanNis = String(nis).trim();

  // 1. Ambil data profil siswa
  const siswa = await db.prepare("SELECT nis, nama, kelas FROM siswa WHERE nis = ?").bind(cleanNis).first();
  if (!siswa) return null;

  // 2. Ambil seluruh riwayat ujian
  const { results: exams } = await db.prepare(
    "SELECT skor, durasi_detik, mapel, kode_pertemuan, DATE(waktu_submit) as tgl FROM nilai_cbt WHERE nis = ? ORDER BY waktu_submit ASC"
  ).bind(cleanNis).all();

  // 3. Cek angket refleksi
  const angket = await db.prepare("SELECT id FROM angket_refleksi WHERE nis = ?").bind(cleanNis).first();
  const hasAngket = !!angket;

  // 4. Hitung XP & Badges
  const dates = (exams || []).map(e => e.tgl);
  const streakInfo = calculateStreaks(dates);

  let totalXp = 0;
  let totalUjian = (exams || []).length;
  let totalSempurna = 0;
  let totalKkm = 0;
  const badges = [];

  let hasFast = false;
  let hasDimensiTiga = false;
  let hasStatistika = false;

  (exams || []).forEach(e => {
    totalXp += 50; // Base XP
    totalXp += Math.round(Number(e.skor) || 0); // Skor murni
    if (e.skor >= 100) {
      totalSempurna++;
      totalXp += 50; // Bonus skor 100
    }
    if (e.skor >= 75) {
      totalKkm++;
      totalXp += 25; // Bonus KKM
    }
    if (e.durasi_detik > 0 && e.durasi_detik <= 1200 && e.skor >= 80) {
      hasFast = true;
    }
    const kode = String(e.kode_pertemuan || '').toUpperCase();
    if (['P09','P10','P11','P12','P13','P14'].includes(kode)) {
      hasDimensiTiga = true;
    }
    if (['P15','P16','P17','P18','P19','P20','P21'].includes(kode)) {
      hasStatistika = true;
    }
  });

  if (hasAngket) {
    totalXp += 100;
    badges.push('reflective_mind');
  }
  if (totalSempurna > 0) badges.push('perfect_100');
  if (hasFast) badges.push('fast_thinker');
  if (streakInfo.max >= 3) badges.push('streak_hero');
  if (hasDimensiTiga) badges.push('dimensi_tiga');
  if (hasStatistika) badges.push('statistika_pioneer');

  totalXp += (streakInfo.current || 1) * 10;

  const lvlInfo = getLevelAndTitle(totalXp);
  const badgesJson = JSON.stringify(badges);

  // 5. Simpan / Perbarui ke database siswa_gamifikasi
  await db.prepare(`
    INSERT INTO siswa_gamifikasi (nis, nama, kelas, total_xp, level, gelar, current_streak, max_streak, last_active_date, total_ujian, total_sempurna, badges, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
    ON CONFLICT(nis) DO UPDATE SET
      total_xp = excluded.total_xp,
      level = excluded.level,
      gelar = excluded.gelar,
      current_streak = excluded.current_streak,
      max_streak = excluded.max_streak,
      last_active_date = excluded.last_active_date,
      total_ujian = excluded.total_ujian,
      total_sempurna = excluded.total_sempurna,
      badges = excluded.badges,
      updated_at = datetime('now')
  `).bind(
    cleanNis,
    siswa.nama,
    siswa.kelas,
    totalXp,
    lvlInfo.level,
    lvlInfo.gelar,
    streakInfo.current || 1,
    streakInfo.max || 1,
    streakInfo.last || new Date().toISOString().slice(0, 10),
    totalUjian,
    totalSempurna,
    badgesJson
  ).run();

  return {
    nis: cleanNis,
    nama: siswa.nama,
    kelas: siswa.kelas,
    total_xp: totalXp,
    ...lvlInfo,
    current_streak: streakInfo.current || 1,
    max_streak: streakInfo.max || 1,
    total_ujian: totalUjian,
    total_sempurna: totalSempurna,
    badges
  };
}

export async function onRequestGet(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }

    const db = context.env.DB;
    const url = new URL(context.request.url);
    const nis = url.searchParams.get('nis');
    const kelasFilter = url.searchParams.get('kelas');
    const limit = Math.min(100, Math.max(1, parseInt(url.searchParams.get('limit') || '25', 10)));
    const offset = Math.max(0, parseInt(url.searchParams.get('offset') || '0', 10));

    // A. JIKA REQUEST PROFILE SPESIFIK SISWA
    if (nis && !url.searchParams.has('leaderboard')) {
      const cleanNis = String(nis).trim();
      let profile = await db.prepare("SELECT * FROM siswa_gamifikasi WHERE nis = ?").bind(cleanNis).first();

      if (!profile) {
        // Jika belum ada di tabel gamifikasi, coba update on-the-fly
        profile = await updateStudentGamification(db, cleanNis);
      }

      if (!profile) {
        return jsonResponse({ error: 'Siswa tidak ditemukan' }, 404);
      }

      // Hitung Peringkat Global & Peringkat Kelas
      const rankGlobalRow = await db.prepare(
        "SELECT COUNT(*) as rank FROM siswa_gamifikasi WHERE total_xp > ?"
      ).bind(profile.total_xp).first();
      const rankGlobal = (rankGlobalRow ? rankGlobalRow.rank : 0) + 1;

      const rankClassRow = await db.prepare(
        "SELECT COUNT(*) as rank FROM siswa_gamifikasi WHERE kelas = ? AND total_xp > ?"
      ).bind(profile.kelas, profile.total_xp).first();
      const rankClass = (rankClassRow ? rankClassRow.rank : 0) + 1;

      const totalSiswaGlobal = (await db.prepare("SELECT COUNT(*) as total FROM siswa_gamifikasi").first())?.total || 100;
      const totalSiswaClass = (await db.prepare("SELECT COUNT(*) as total FROM siswa_gamifikasi WHERE kelas = ?").bind(profile.kelas).first())?.total || 25;

      const lvlDetails = getLevelAndTitle(profile.total_xp);
      let badgesList = [];
      try {
        badgesList = JSON.parse(profile.badges || '[]');
      } catch (e) {
        badgesList = [];
      }

      const enrichedBadges = badgesList.map(bId => BADGE_CATALOG[bId] || { id: bId, name: bId, icon: 'fa-solid fa-award', color: '#787774', bg: '#F0EFEA', desc: '' });

      return jsonResponse({
        success: true,
        profile: {
          nis: profile.nis,
          nama: profile.nama,
          kelas: profile.kelas,
          total_xp: profile.total_xp,
          level: lvlDetails.level,
          gelar: lvlDetails.gelar,
          current_xp: lvlDetails.current_xp,
          next_level_xp: lvlDetails.next_level_xp,
          progress_pct: lvlDetails.progress_pct,
          current_streak: profile.current_streak,
          max_streak: profile.max_streak,
          last_active_date: profile.last_active_date,
          total_ujian: profile.total_ujian,
          total_sempurna: profile.total_sempurna,
          rank_global: rankGlobal,
          total_global: totalSiswaGlobal,
          rank_class: rankClass,
          total_class: totalSiswaClass,
          badges: enrichedBadges
        },
        catalog: BADGE_CATALOG
      });
    }

    // B. JIKA REQUEST LEADERBOARD
    let query = "SELECT nis, nama, kelas, total_xp, level, gelar, current_streak, max_streak, total_ujian, total_sempurna, badges FROM siswa_gamifikasi";
    let countQuery = "SELECT COUNT(*) as total, SUM(total_xp) as total_xp_sum, AVG(current_streak) as avg_streak, MAX(current_streak) as top_streak FROM siswa_gamifikasi";
    const bindings = [];
    const countBindings = [];

    if (kelasFilter && kelasFilter.toLowerCase() !== 'all') {
      let normalizedKelas = kelasFilter.replace(/_/g, ' ').toUpperCase();
      if (!normalizedKelas.startsWith('XII') && normalizedKelas.startsWith('12')) {
        normalizedKelas = 'XII ' + normalizedKelas.slice(2).trim();
      }
      query += " WHERE kelas LIKE ?";
      countQuery += " WHERE kelas LIKE ?";
      bindings.push(`%${normalizedKelas}%`);
      countBindings.push(`%${normalizedKelas}%`);
    }

    query += " ORDER BY total_xp DESC, total_sempurna DESC, total_ujian DESC LIMIT ? OFFSET ?";
    bindings.push(limit, offset);
    const { results } = await db.prepare(query).bind(...bindings).all();

    let countStmt = db.prepare(countQuery);
    const countStats = countBindings.length > 0 
      ? await countStmt.bind(...countBindings).first() 
      : await countStmt.first();

    const rankedLeaderboard = (results || []).map((row, idx) => {
      let bList = [];
      try { bList = JSON.parse(row.badges || '[]'); } catch (e) { bList = []; }
      return {
        rank: offset + idx + 1,
        nis: row.nis,
        nama: row.nama,
        kelas: row.kelas,
        total_xp: row.total_xp,
        level: row.level,
        gelar: row.gelar,
        current_streak: row.current_streak,
        max_streak: row.max_streak,
        total_ujian: row.total_ujian,
        total_sempurna: row.total_sempurna,
        badges: bList.map(bId => BADGE_CATALOG[bId] || { id: bId, name: bId, icon: 'fa-solid fa-award', color: '#787774', bg: '#F0EFEA' })
      };
    });

    return jsonResponse({
      success: true,
      leaderboard: rankedLeaderboard,
      stats: {
        total_students: countStats?.total || 0,
        total_xp_pool: countStats?.total_xp_sum || 0,
        average_streak: Math.round((countStats?.avg_streak || 1) * 10) / 10,
        top_streak: countStats?.top_streak || 1
      },
      catalog: BADGE_CATALOG,
      levels: LEVEL_CONFIG
    });

  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}

// Endpoint untuk refresh / sync on-demand (Guru / Admin)
export async function onRequestPost(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }
    const session = await authenticateRequest(context.request, context.env);
    if (!session) {
      return jsonResponse({ error: 'Autentikasi diperlukan' }, 401);
    }

    const db = context.env.DB;
    let body = {};
    try { body = await context.request.json(); } catch(e) {}

    const targetNis = body.nis || session.nis;
    if (targetNis) {
      const updated = await updateStudentGamification(db, targetNis);
      return jsonResponse({ success: true, updated });
    }

    return jsonResponse({ error: 'NIS tidak diberikan' }, 400);
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}
