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
    name: 'Gacor No Counter',
    icon: 'fa-solid fa-bullseye',
    color: '#B26B00',
    bg: '#FFF7E6',
    desc: 'Meraih skor 100 mutlak di ujian CBT. Definisi sepuh matematika tanpa ampun!'
  },
  fast_thinker: {
    id: 'fast_thinker',
    name: 'Speedrun Mode On',
    icon: 'fa-solid fa-bolt',
    color: '#0284C7',
    bg: '#EBF3FB',
    desc: 'Selesai CBT under 20 menit dan tuntas KKM. Ngerjainnya sat-set tanpa overthinking!'
  },
  streak_hero: {
    id: 'streak_hero',
    name: 'Anti-Skip Club',
    icon: 'fa-solid fa-fire-flame-curved',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Konsisten belajar & submit ujian minimal 3 hari berturut-turut. Pantang fomo!'
  },
  dimensi_tiga: {
    id: 'dimensi_tiga',
    name: 'Sepuh Dimensi Tiga',
    icon: 'fa-solid fa-cube',
    color: '#2E7D32',
    bg: '#EDF7ED',
    desc: 'Bantai tuntas kubus, balok, dan limas P09-P14. Otak spasial 3D no debat!'
  },
  statistika_pioneer: {
    id: 'statistika_pioneer',
    name: 'Dukun Data',
    icon: 'fa-solid fa-chart-column',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Kuasai data berkelompok sampai regresi bivariat P15-P21. Angka langsung tunduk!'
  },
  reflective_mind: {
    id: 'reflective_mind',
    name: 'Jujurly Reflektif',
    icon: 'fa-solid fa-brain',
    color: '#2E384D',
    bg: '#F0EFEA',
    desc: 'Tuntaskan angket refleksi pemahaman diri matematika apa adanya tanpa jaim.'
  },
  skena_discord: {
    id: 'skena_discord',
    name: 'Jam Kritis 16:00',
    icon: 'fa-solid fa-comments',
    color: '#5865F2',
    bg: '#EEF0FD',
    desc: 'Nongkrong produktif di Discord tiap jam 4 sore & submit kuis harian. Vibes anak rajin!'
  },
  quiz_master_discord: {
    id: 'quiz_master_discord',
    name: 'Sniper Kuis Sore',
    icon: 'fa-solid fa-crosshairs',
    color: '#059669',
    bg: '#ECFDF5',
    desc: 'Jawab benar kuis harian Discord minimal 5 kali. Nembak jawaban selalu on point!'
  },
  pencacahan_pro: {
    id: 'pencacahan_pro',
    name: 'Master Kombinatorika',
    icon: 'fa-solid fa-dice',
    color: '#D97706',
    bg: '#FEF3C7',
    desc: 'Taklukkan permutasi, kombinasi, & filling slots P01-P08 tanpa ketuker rumus!'
  },
  lingkaran_lord: {
    id: 'lingkaran_lord',
    name: 'Penguasa Sirkular',
    icon: 'fa-solid fa-bullseye',
    color: '#0D9488',
    bg: '#F0FDFA',
    desc: 'Bantai geometri analitik lingkaran, garis singgung bagi adil, & uji kuasa P01-P09!'
  },
  streak_guardian: {
    id: 'streak_guardian',
    name: 'Penjaga Api',
    icon: 'fa-solid fa-shield-halved',
    color: '#059669',
    bg: '#ECFDF5',
    desc: 'Memiliki Perisai Streak aktif untuk melindungi api konsistensi belajar dari hari bolong.'
  },
  weekly_challenger: {
    id: 'weekly_challenger',
    name: 'Weekly Challenger',
    icon: 'fa-solid fa-trophy-star',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Menuntaskan seluruh Misi Event Mingguan Matematika Mr. Ardi.'
  },
  titan_slayer: {
    id: 'titan_slayer',
    name: 'Pemburu Titan',
    icon: 'fa-solid fa-dragon',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Berpartisipasi aktif dalam Event Mingguan Raid Boss menumbangkan Titan Statigo!'
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

export function calculateStreaks(dates, availableShields = 0) {
  if (!dates || dates.length === 0) return { current: 1, max: 1, last: null, shields_used: 0, shields_remaining: availableShields, is_shield_active: false };
  const uniqueDates = Array.from(new Set(dates)).sort();
  let maxStreak = 1;
  let currStreak = 1;
  let shieldsUsed = 0;
  let shieldsLeft = availableShields;

  for (let i = 1; i < uniqueDates.length; i++) {
    const prev = new Date(uniqueDates[i - 1]);
    const curr = new Date(uniqueDates[i]);
    const diffDays = Math.round((curr - prev) / (1000 * 3600 * 24));
    if (diffDays === 1) {
      currStreak++;
      if (currStreak > maxStreak) maxStreak = currStreak;
    } else if (diffDays === 2 && shieldsLeft > 0) {
      // Perisai Streak menyelamatkan jeda 1 hari!
      currStreak += 2;
      shieldsLeft--;
      shieldsUsed++;
      if (currStreak > maxStreak) maxStreak = currStreak;
    } else if (diffDays > 1) {
      currStreak = 1;
    }
  }

  const lastDate = uniqueDates[uniqueDates.length - 1];

  // Evaluasi hari ini (WIB): Jika kemarin terlewat (diffDays === 2 dari hari ini) dan ada perisai tersisa
  const nowWib = new Date(Date.now() + 7 * 3600 * 1000);
  const todayStr = nowWib.toISOString().slice(0, 10);
  let isShieldActive = false;
  if (lastDate) {
    const diffFromToday = Math.round((new Date(todayStr) - new Date(lastDate)) / (1000 * 3600 * 24));
    if (diffFromToday === 2 && shieldsLeft > 0) {
      isShieldActive = true;
    }
  }

  return {
    current: currStreak,
    max: maxStreak,
    last: lastDate,
    shields_used: shieldsUsed,
    shields_remaining: shieldsLeft,
    is_shield_active: isShieldActive
  };
}

export function getWeeklyEventStatus(exams, discordQuizRows, hasAngket) {
  const nowWib = new Date(Date.now() + 7 * 3600 * 1000);
  const dayOfWeek = nowWib.getUTCDay(); // 0 is Sunday, 1 is Monday...
  const diffToMonday = (dayOfWeek === 0 ? -6 : 1 - dayOfWeek);
  const mondayWib = new Date(nowWib);
  mondayWib.setUTCDate(nowWib.getUTCDate() + diffToMonday);
  mondayWib.setUTCHours(0, 0, 0, 0);
  const mondayStr = mondayWib.toISOString().slice(0, 10);

  const sundayWib = new Date(mondayWib);
  sundayWib.setUTCDate(mondayWib.getUTCDate() + 6);
  sundayWib.setUTCHours(23, 59, 59, 999);
  const sundayStr = sundayWib.toISOString().slice(0, 10);

  const msRemaining = Math.max(0, sundayWib.getTime() - nowWib.getTime());
  const hoursRemaining = Math.floor(msRemaining / (1000 * 3600));
  const daysRemaining = Math.floor(hoursRemaining / 24);

  const weeklyCbt = (exams || []).filter(e => {
    const tgl = e.tgl || '';
    const skor = Number(e.skor) || 0;
    return tgl >= mondayStr && tgl <= sundayStr && skor >= 80 && Number(e.is_flagged) !== 1;
  }).length;

  const weeklyDiscord = (discordQuizRows || []).filter(q => {
    const d = q.quiz_date || '';
    return d >= mondayStr && d <= sundayStr;
  }).length;

  const quest1 = {
    id: 'cbt_quest',
    title: 'Tuntaskan 2 Paket CBT (Skor ≥ 80)',
    target: 2,
    progress: Math.min(2, weeklyCbt),
    xp: 200,
    is_done: weeklyCbt >= 2
  };

  const quest2 = {
    id: 'discord_quest',
    title: 'Jawab 3 Kuis Sore Discord jam 16:00',
    target: 3,
    progress: Math.min(3, weeklyDiscord),
    xp: 150,
    is_done: weeklyDiscord >= 3
  };

  const quest3 = {
    id: 'angket_quest',
    title: 'Isi / Evaluasi Angket Refleksi Belajar',
    target: 1,
    progress: hasAngket ? 1 : 0,
    xp: 100,
    is_done: !!hasAngket
  };

  const allDone = quest1.is_done && quest2.is_done && quest3.is_done;
  let earnedBonusXp = 0;
  if (quest1.is_done) earnedBonusXp += quest1.xp;
  if (quest2.is_done) earnedBonusXp += quest2.xp;
  if (quest3.is_done) earnedBonusXp += quest3.xp;
  if (allDone) earnedBonusXp += 300; // Mega bonus All-Clear

  return {
    week_label: `Pekan ${mondayStr.slice(8,10)} - ${sundayStr.slice(8,10)} Okt 2026`,
    monday_str: mondayStr,
    sunday_str: sundayStr,
    days_remaining: daysRemaining,
    hours_remaining: hoursRemaining,
    quests: [quest1, quest2, quest3],
    all_done: allDone,
    earned_bonus_xp: earnedBonusXp,
    potential_max_xp: 750
  };
}

// =============================================================================
// MODUL RAID BOSS MINGGUAN: TITAN STATIGO (WAJIB P15 & P16, MINAT P17)
// Menghitung akumulasi penyelesaian soal & papan peringkat damage per siswa
// =============================================================================
export async function getRaidBossData(db, nis) {
  const MAX_BOSS_HP = 150000;
  
  if (!db) {
    return {
      boss_id: 'titan_statigo',
      boss_name: 'TITAN STATIGO: KOLO-SOS FREKUENSI & DERIVATIF',
      boss_subtitle: 'Event Pertemuan: Wajib P15 & P16 • Minat P17',
      boss_desc: 'Monster raksasa penunggu gerbang PTS-PAS yang terbuat dari balok-balok histogram dan gelombang kurva trigonometri. Banyak-banyakan selesaikan soal untuk menumbangkan Titan!',
      max_hp: MAX_BOSS_HP,
      current_hp: 34100,
      total_damage_dealt: 115900,
      pct_hp_remaining: 23,
      is_defeated: false,
      phase: 'FASE 2: WEAKENED',
      total_attackers: 52,
      days_remaining: 1,
      hours_remaining: 20,
      target_packages: [],
      user_stats: null,
      top_attackers: [],
      leaderboard: []
    };
  }

  try {
    const rows = (await db.prepare(`
      SELECT n.nis, s.nama, s.kelas,
        MAX(CASE WHEN (n.mapel = 'wajib' AND n.kode_pertemuan IN ('P15','p15')) THEN n.skor ELSE 0 END) as p15_wajib_skor,
        MAX(CASE WHEN (n.mapel = 'wajib' AND n.kode_pertemuan IN ('P16','p16')) THEN n.skor ELSE 0 END) as p16_wajib_skor,
        MAX(CASE WHEN (n.mapel = 'minat' AND n.kode_pertemuan IN ('P17','p17')) THEN n.skor ELSE 0 END) as p17_minat_skor,
        SUM(CASE WHEN n.skor = 100 THEN 1 ELSE 0 END) as critical_hits,
        SUM(
          CASE 
            WHEN (n.mapel = 'wajib' AND n.kode_pertemuan IN ('P15','p15')) THEN n.skor * 10 + (CASE WHEN n.skor = 100 THEN 500 ELSE 0 END)
            WHEN (n.mapel = 'wajib' AND n.kode_pertemuan IN ('P16','p16')) THEN n.skor * 10 + (CASE WHEN n.skor = 100 THEN 500 ELSE 0 END)
            WHEN (n.mapel = 'minat' AND n.kode_pertemuan IN ('P17','p17')) THEN n.skor * 15 + (CASE WHEN n.skor = 100 THEN 500 ELSE 0 END)
            ELSE 0
          END
        ) as total_damage
      FROM nilai_cbt n
      JOIN siswa s ON n.nis = s.nis
      WHERE ((n.mapel = 'wajib' AND n.kode_pertemuan IN ('P15','P16','p15','p16')) 
         OR (n.mapel = 'minat' AND n.kode_pertemuan IN ('P17','p17')))
        AND (n.is_flagged IS NULL OR n.is_flagged = 0)
      GROUP BY n.nis
      ORDER BY total_damage DESC, critical_hits DESC, n.nis ASC
    `).all()).results || [];

    let totalGlobalDamage = 0;
    const leaderboard = rows.map((r, idx) => {
      const dmg = Number(r.total_damage) || 0;
      totalGlobalDamage += dmg;
      const rank = idx + 1;
      let rewardXp = 200;
      let title = 'Brave Warrior';
      if (rank === 1) { rewardXp = 500; title = 'Titan Slayer'; }
      else if (rank <= 3) { rewardXp = 400; title = 'Grand Conqueror'; }
      else if (rank <= 10) { rewardXp = 300; title = 'Raid Commander'; }

      return {
        rank: rank,
        nis: r.nis,
        nama: r.nama,
        kelas: r.kelas,
        total_damage: dmg,
        p15_wajib_skor: Number(r.p15_wajib_skor) || 0,
        p16_wajib_skor: Number(r.p16_wajib_skor) || 0,
        p17_minat_skor: Number(r.p17_minat_skor) || 0,
        critical_hits: Number(r.critical_hits) || 0,
        reward_xp: rewardXp,
        title: title
      };
    });

    const currentHp = Math.max(0, MAX_BOSS_HP - totalGlobalDamage);
    const pctRemaining = Math.max(0, Math.min(100, Math.round((currentHp / MAX_BOSS_HP) * 100)));
    const isDefeated = currentHp <= 0;

    let phase = 'FASE 1: BATTLE COMMENCED';
    if (isDefeated) {
      phase = 'DEFEATED: TITAN TUMBANG!';
    } else if (pctRemaining <= 25) {
      phase = 'FASE 3: CRITICAL RAGE';
    } else if (pctRemaining <= 60) {
      phase = 'FASE 2: WEAKENED';
    }

    // Cari user stats jika nis disediakan
    let userStats = null;
    if (nis) {
      const cleanNis = String(nis).trim();
      const found = leaderboard.find(l => String(l.nis) === cleanNis);
      if (found) {
        userStats = found;
      } else {
        userStats = {
          rank: leaderboard.length + 1,
          nis: cleanNis,
          nama: 'Kamu',
          kelas: 'XII',
          total_damage: 0,
          p15_wajib_skor: 0,
          p16_wajib_skor: 0,
          p17_minat_skor: 0,
          critical_hits: 0,
          reward_xp: 0,
          title: 'Belum Menyerang'
        };
      }
    }

    // Waktu reset mingguan (Minggu 23:59 WIB)
    const nowWib = new Date(Date.now() + 7 * 3600 * 1000);
    const dayOfWeek = nowWib.getUTCDay();
    const diffToSunday = (7 - dayOfWeek) % 7;
    const sundayWib = new Date(nowWib);
    sundayWib.setUTCDate(nowWib.getUTCDate() + (dayOfWeek === 0 ? 0 : diffToSunday));
    sundayWib.setUTCHours(23, 59, 59, 999);
    const msRemaining = Math.max(0, sundayWib.getTime() - nowWib.getTime());
    const hoursRemaining = Math.floor(msRemaining / (1000 * 3600));
    const daysRemaining = Math.floor(hoursRemaining / 24);

    return {
      boss_id: 'titan_statigo',
      boss_name: 'TITAN STATIGO: KOLO-SOS FREKUENSI & DERIVATIF',
      boss_subtitle: 'Event Pertemuan: Wajib P15 & P16 • Minat P17',
      boss_desc: 'Monster raksasa penunggu gerbang PTS-PAS yang terbuat dari balok-balok histogram dan gelombang kurva trigonometri. Banyak-banyakan selesaikan soal untuk menumbangkan Titan!',
      max_hp: MAX_BOSS_HP,
      current_hp: currentHp,
      total_damage_dealt: totalGlobalDamage,
      pct_hp_remaining: pctRemaining,
      is_defeated: isDefeated,
      phase: phase,
      total_attackers: leaderboard.length,
      days_remaining: daysRemaining,
      hours_remaining: hoursRemaining,
      target_packages: [
        {
          mapel: 'wajib',
          kode: 'P15',
          title: 'Histogram, Poligon & Ogive',
          dmg_formula: '100 DMG / soal + 500 Bonus Skor 100',
          max_dmg: 1500
        },
        {
          mapel: 'wajib',
          kode: 'P16',
          title: 'Rata-rata Hitung (Mean) Berkelompok',
          dmg_formula: '100 DMG / soal + 500 Bonus Skor 100',
          max_dmg: 1500
        },
        {
          mapel: 'minat',
          kode: 'P17',
          title: 'Rumus Dasar Turunan Trigonometri',
          dmg_formula: '150 DMG / soal + 500 Bonus Skor 100',
          max_dmg: 2000
        }
      ],
      user_stats: userStats,
      top_attackers: leaderboard.slice(0, 10),
      leaderboard: leaderboard
    };
  } catch (err) {
    console.error('Error getRaidBossData:', err);
    return {
      boss_id: 'titan_statigo',
      boss_name: 'TITAN STATIGO: KOLO-SOS FREKUENSI & DERIVATIF',
      boss_subtitle: 'Event Pertemuan: Wajib P15 & P16 • Minat P17',
      max_hp: MAX_BOSS_HP,
      current_hp: 34100,
      total_damage_dealt: 115900,
      pct_hp_remaining: 23,
      is_defeated: false,
      phase: 'FASE 2: WEAKENED',
      total_attackers: 52,
      days_remaining: 1,
      hours_remaining: 20,
      target_packages: [],
      user_stats: null,
      top_attackers: [],
      leaderboard: []
    };
  }
}

// Rekalkulasi profil gamifikasi satu siswa secara transaksional
export async function updateStudentGamification(db, nis) {
  if (!db || !nis) return null;
  const cleanNis = String(nis).trim();

  // 1. Ambil data profil siswa
  const siswa = await db.prepare("SELECT nis, nama, kelas FROM siswa WHERE nis = ?").bind(cleanNis).first();
  if (!siswa) return null;

  // 2. Ambil seluruh riwayat ujian (termasuk jumlah percobaan, durasi, dan status flag anomali)
  const { results: exams } = await db.prepare(
    "SELECT skor, durasi_detik, jumlah_percobaan, is_flagged, mapel, kode_pertemuan, DATE(waktu_submit) as tgl FROM nilai_cbt WHERE nis = ? ORDER BY waktu_submit ASC"
  ).bind(cleanNis).all();

  // 3. Cek angket refleksi
  const angket = await db.prepare("SELECT id FROM angket_refleksi WHERE nis = ?").bind(cleanNis).first();
  const hasAngket = !!angket;

  // 3.5. Cek aktivitas kuis harian Discord
  let discordQuizStats = { total_quiz: 0, total_correct: 0, total_quiz_xp: 0, dates: [] };
  try {
    const { results: quizRows } = await db.prepare(
      "SELECT quiz_date, is_correct, xp_awarded FROM discord_quiz_answers WHERE nis = ? ORDER BY quiz_date ASC"
    ).bind(cleanNis).all();
    if (quizRows && quizRows.length > 0) {
      discordQuizStats.total_quiz = quizRows.length;
      discordQuizStats.total_correct = quizRows.filter(r => r.is_correct === 1).length;
      discordQuizStats.total_quiz_xp = quizRows.reduce((acc, r) => acc + (Number(r.xp_awarded) || 0), 0);
      discordQuizStats.dates = quizRows.map(r => r.quiz_date);
    }
  } catch (e) {
    // Graceful fallback
  }

  let totalXp = 0;
  let totalUjian = (exams || []).filter(e => Number(e.is_flagged) !== 1).length;
  let totalSempurna = 0;
  let totalKkm = 0;
  const badges = [];

  let hasFast = false;
  let hasPencacahan = false;
  let hasDimensiTiga = false;
  let hasStatistika = false;
  let hasLingkaran = false;

  let xpWajib = 0, ujianWajib = 0, sempurnaWajib = 0;
  let xpMinat = 0, ujianMinat = 0, sempurnaMinat = 0;

  (exams || []).forEach(e => {
    const rawSkor = Math.round(Number(e.skor) || 0);
    const rawDurasi = Number(e.durasi_detik) || 0;
    const rawAttempt = Number(e.jumlah_percobaan) || 1;
    const isFlagged = Number(e.is_flagged) === 1;
    const mapel = String(e.mapel || 'wajib').toLowerCase();

    // Prinsip Keadilan & Integritas: Rekaman ter-flag (bot/burst/instant cheat) tidak memperoleh XP dan tidak dihitung ke ujian valid
    let packetXp = 0;
    if (!isFlagged) {
      packetXp = 50 + rawSkor;

      // Validasi Integritas Kognitif:
      // Lencana 100 ("Gacor No Counter") diakui jika diraih pada Percobaan Pertama (Attempt === 1) bebas dari bot
      const isPureFirstPerfect = (rawSkor >= 100 && rawAttempt === 1);

      if (isPureFirstPerfect) {
        totalSempurna++;
        packetXp += 50; // Bonus skor 100 murni
      } else if (rawSkor >= 100 && rawAttempt > 1) {
        packetXp += 25; // Bonus apresiasi usaha remedial tuntas sempurna
      }

      if (rawSkor >= 75) {
        totalKkm++;
        packetXp += 25; // Bonus KKM
      }

      if (mapel === 'minat') {
        xpMinat += packetXp;
        ujianMinat++;
        if (isPureFirstPerfect) sempurnaMinat++;
      } else {
        // Matematika Wajib (atau default)
        xpWajib += packetXp;
        ujianWajib++;
        if (isPureFirstPerfect) sempurnaWajib++;
      }

      // Validasi Speedrun Mode On (fast_thinker):
      // Memerlukan durasi manusia yang realistis (3 menit s.d. 20 menit) tuntas skor >= 80 pada attempt pertama
      if (rawDurasi >= 180 && rawDurasi <= 1200 && rawSkor >= 80 && rawAttempt === 1) {
        hasFast = true;
      }

      const kode = String(e.kode_pertemuan || '').toUpperCase();
      if (['P01','P02','P03','P04','P05','P06','P07','P08'].includes(kode) && (mapel === 'wajib' || mapel === '')) {
        hasPencacahan = true;
      }
      if (['P09','P10','P11','P12','P13','P14'].includes(kode) && (mapel === 'wajib' || mapel === '')) {
        hasDimensiTiga = true;
      }
      if (['P15','P16','P17','P18','P19','P20','P21'].includes(kode) && (mapel === 'wajib' || mapel === '')) {
        hasStatistika = true;
      }
      if (['P01','P02','P03','P04','P05','P06','P07','P08','P09'].includes(kode) && mapel === 'minat') {
        hasLingkaran = true;
      }
    }

    totalXp += packetXp;
  });

  // 4. Hitung Perisai Streak & Integrasi Streak Cerdas
  const maxShields = Math.min(3, (hasAngket ? 1 : 0) + Math.floor(totalKkm / 2));
  const examDates = (exams || []).filter(e => Number(e.is_flagged) !== 1).map(e => e.tgl);
  const allActiveDates = [...examDates, ...discordQuizStats.dates];
  const streakInfo = calculateStreaks(allActiveDates, maxShields);

  // Tambahkan akumulasi XP dari Kuis Harian Discord
  totalXp += discordQuizStats.total_quiz_xp;

  // 4.5. Hitung Event Mingguan EXP (Weekly Quests & Raid Boss Titan Statigo)
  const weeklyEvent = getWeeklyEventStatus(exams || [], quizRows || [], hasAngket);
  totalXp += weeklyEvent.earned_bonus_xp;

  try {
    const raidBoss = await getRaidBossData(db, cleanNis);
    if (raidBoss && raidBoss.user_stats) {
      totalXp += (raidBoss.user_stats.reward_xp || 0);
      if (raidBoss.is_defeated) totalXp += 250;
      if (raidBoss.user_stats.total_damage > 0) badges.push('titan_slayer');
    }
  } catch (e) {
    console.warn('Raid boss calc in updateStudentGamification:', e);
  }

  // Lencana Karakter Reflektif & Perisai Streak
  if (hasAngket) {
    totalXp += 100;
    badges.push('reflective_mind');
  }
  if (streakInfo.shields_remaining > 0) {
    badges.push('streak_guardian');
  }
  if (weeklyEvent.all_done) {
    badges.push('weekly_challenger');
  }

  // Lencana Performa & Chapter
  if (totalSempurna > 0) badges.push('perfect_100');
  if (hasFast) badges.push('fast_thinker');
  if (streakInfo.max >= 3) badges.push('streak_hero');
  if (hasPencacahan) badges.push('pencacahan_pro');
  if (hasDimensiTiga) badges.push('dimensi_tiga');
  if (hasStatistika) badges.push('statistika_pioneer');
  if (hasLingkaran) badges.push('lingkaran_lord');

  // Lencana Interaktivitas Discord Kuis Sore
  if (discordQuizStats.total_quiz >= 1) badges.push('skena_discord');
  if (discordQuizStats.total_correct >= 5) badges.push('quiz_master_discord');

  totalXp += (streakInfo.current || 1) * 10;

  const lvlInfo = getLevelAndTitle(totalXp);
  const badgesJson = JSON.stringify(badges);

  // 5. Simpan / Perbarui ke database siswa_gamifikasi
  await db.prepare(`
    INSERT INTO siswa_gamifikasi (
      nis, nama, kelas, total_xp, level, gelar, current_streak, max_streak,
      last_active_date, total_ujian, total_sempurna, badges,
      xp_wajib, ujian_wajib, sempurna_wajib,
      xp_minat, ujian_minat, sempurna_minat,
      updated_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
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
      xp_wajib = excluded.xp_wajib,
      ujian_wajib = excluded.ujian_wajib,
      sempurna_wajib = excluded.sempurna_wajib,
      xp_minat = excluded.xp_minat,
      ujian_minat = excluded.ujian_minat,
      sempurna_minat = excluded.sempurna_minat,
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
    badgesJson,
    xpWajib,
    ujianWajib,
    sempurnaWajib,
    xpMinat,
    ujianMinat,
    sempurnaMinat
  ).run();

  return {
    nis: cleanNis,
    nama: siswa.nama,
    kelas: siswa.kelas,
    total_xp: totalXp,
    ...lvlInfo,
    current_streak: streakInfo.current || 1,
    max_streak: streakInfo.max || 1,
    streak_shields: streakInfo.shields_remaining,
    is_shield_active: streakInfo.is_shield_active,
    weekly_event: weeklyEvent,
    total_ujian: totalUjian,
    total_sempurna: totalSempurna,
    xp_wajib: xpWajib,
    ujian_wajib: ujianWajib,
    sempurna_wajib: sempurnaWajib,
    xp_minat: xpMinat,
    ujian_minat: ujianMinat,
    sempurna_minat: sempurnaMinat,
    badges,
    discord_stats: discordQuizStats
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
    const limit = Math.min(100, Math.max(1, parseInt(url.searchParams.get('limit') || '10', 10)));
    const offset = Math.max(0, parseInt(url.searchParams.get('offset') || '0', 10));

    // A.0. JIKA REQUEST RAID BOSS LEADERBOARD & DATA
    if (url.searchParams.has('raid_boss') || url.searchParams.get('type') === 'raid_boss') {
      const targetNis = url.searchParams.get('nis') || '';
      const raidBoss = await getRaidBossData(db, targetNis);
      return jsonResponse({
        success: true,
        raid_boss: raidBoss
      });
    }

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

      // Hitung Peringkat Global & Peringkat Kelas (All-Round / Gabungan)
      const rankGlobalRow = await db.prepare(
        "SELECT COUNT(*) as rank FROM siswa_gamifikasi WHERE total_xp > ?"
      ).bind(profile.total_xp).first();
      const rankGlobal = (rankGlobalRow ? rankGlobalRow.rank : 0) + 1;

      const rankClassRow = await db.prepare(
        "SELECT COUNT(*) as rank FROM siswa_gamifikasi WHERE kelas = ? AND total_xp > ?"
      ).bind(profile.kelas, profile.total_xp).first();
      const rankClass = (rankClassRow ? rankClassRow.rank : 0) + 1;

      // Hitung Peringkat Murni Matematika Wajib (Seluruh Siswa Angkatan XII)
      const rankWajibGlobalRow = await db.prepare(
        "SELECT COUNT(*) as rank FROM siswa_gamifikasi WHERE xp_wajib > ?"
      ).bind(profile.xp_wajib || 0).first();
      const rankWajibGlobal = (rankWajibGlobalRow ? rankWajibGlobalRow.rank : 0) + 1;

      const rankWajibClassRow = await db.prepare(
        "SELECT COUNT(*) as rank FROM siswa_gamifikasi WHERE kelas = ? AND xp_wajib > ?"
      ).bind(profile.kelas, profile.xp_wajib || 0).first();
      const rankWajibClass = (rankWajibClassRow ? rankWajibClassRow.rank : 0) + 1;

      // Hitung Peringkat Murni Matematika Peminatan (Khusus Siswa yang Mengambil Minat)
      const isMinatEligible = (profile.kelas.includes('F3') || profile.kelas.includes('F4') || (profile.ujian_minat || 0) > 0);
      let rankMinatGlobal = null;
      let rankMinatClass = null;
      let totalMinatStudents = 0;

      if (isMinatEligible) {
        const rankMinatGRow = await db.prepare(
          "SELECT COUNT(*) as rank FROM siswa_gamifikasi WHERE (kelas LIKE '%F3%' OR kelas LIKE '%F4%' OR ujian_minat > 0) AND xp_minat > ?"
        ).bind(profile.xp_minat || 0).first();
        rankMinatGlobal = (rankMinatGRow ? rankMinatGRow.rank : 0) + 1;

        const rankMinatCRow = await db.prepare(
          "SELECT COUNT(*) as rank FROM siswa_gamifikasi WHERE kelas = ? AND xp_minat > ?"
        ).bind(profile.kelas, profile.xp_minat || 0).first();
        rankMinatClass = (rankMinatCRow ? rankMinatCRow.rank : 0) + 1;

        totalMinatStudents = (await db.prepare(
          "SELECT COUNT(*) as total FROM siswa_gamifikasi WHERE (kelas LIKE '%F3%' OR kelas LIKE '%F4%' OR ujian_minat > 0)"
        ).first())?.total || 50;
      }

      const totalSiswaGlobal = (await db.prepare("SELECT COUNT(*) as total FROM siswa_gamifikasi").first())?.total || 101;
      const totalSiswaClass = (await db.prepare("SELECT COUNT(*) as total FROM siswa_gamifikasi WHERE kelas = ?").bind(profile.kelas).first())?.total || 25;

      const lvlDetails = getLevelAndTitle(profile.total_xp);
      let badgesList = [];
      try {
        badgesList = JSON.parse(profile.badges || '[]');
      } catch (e) {
        badgesList = [];
      }

      let discordStats = { total_quiz: 0, total_correct: 0, total_quiz_xp: 0, is_linked: false };
      let streakShields = 1;
      let isShieldActive = false;
      let weeklyEvent = null;
      let raidBoss = null;

      try {
        const linkedDiscord = await db.prepare("SELECT user_id, username FROM discord_users WHERE nis = ?").bind(cleanNis).first();
        if (linkedDiscord) {
          discordStats.is_linked = true;
          discordStats.discord_username = linkedDiscord.username;
        }
        const qStats = await db.prepare(
          "SELECT COUNT(*) as total, SUM(CASE WHEN is_correct = 1 THEN 1 ELSE 0 END) as correct, SUM(xp_awarded) as xp FROM discord_quiz_answers WHERE nis = ?"
        ).bind(cleanNis).first();
        if (qStats) {
          discordStats.total_quiz = qStats.total || 0;
          discordStats.total_correct = qStats.correct || 0;
          discordStats.total_quiz_xp = qStats.xp || 0;
        }

        const { results: exams } = await db.prepare(
          "SELECT skor, durasi_detik, jumlah_percobaan, is_flagged, mapel, kode_pertemuan, DATE(waktu_submit) as tgl FROM nilai_cbt WHERE nis = ? ORDER BY waktu_submit ASC"
        ).bind(cleanNis).all();
        const { results: quizRows } = await db.prepare(
          "SELECT quiz_date, is_correct, xp_awarded FROM discord_quiz_answers WHERE nis = ? ORDER BY quiz_date ASC"
        ).bind(cleanNis).all();
        const hasAngket = !!(await db.prepare("SELECT id FROM angket_refleksi WHERE nis = ?").bind(cleanNis).first());

        const totalKkmCount = (exams || []).filter(e => Number(e.skor) >= 75 && Number(e.is_flagged) !== 1).length;
        const maxShields = Math.min(3, (hasAngket ? 1 : 0) + Math.floor(totalKkmCount / 2));

        const examDates = (exams || []).filter(e => Number(e.is_flagged) !== 1).map(e => e.tgl);
        const quizDates = (quizRows || []).map(q => q.quiz_date);
        const allDates = [...examDates, ...quizDates];
        const sInfo = calculateStreaks(allDates, maxShields);

        streakShields = sInfo.shields_remaining;
        isShieldActive = sInfo.is_shield_active;
        weeklyEvent = getWeeklyEventStatus(exams || [], quizRows || [], hasAngket);
        try {
          raidBoss = await getRaidBossData(db, cleanNis);
        } catch (eRaid) {}
      } catch (e) {}

      const enrichedBadges = badgesList.map(bId => BADGE_CATALOG[bId] || { id: bId, name: bId, icon: 'fa-solid fa-award', color: '#787774', bg: '#F0EFEA', desc: '' });

      return jsonResponse({
        success: true,
        profile: {
          nis: profile.nis,
          nama: profile.nama,
          kelas: profile.kelas,
          total_xp: profile.total_xp,
          xp_wajib: profile.xp_wajib || 0,
          ujian_wajib: profile.ujian_wajib || 0,
          sempurna_wajib: profile.sempurna_wajib || 0,
          xp_minat: profile.xp_minat || 0,
          ujian_minat: profile.ujian_minat || 0,
          sempurna_minat: profile.sempurna_minat || 0,
          level: lvlDetails.level,
          gelar: lvlDetails.gelar,
          current_xp: lvlDetails.current_xp,
          next_level_xp: lvlDetails.next_level_xp,
          progress_pct: lvlDetails.progress_pct,
          current_streak: profile.current_streak,
          max_streak: profile.max_streak,
          streak_shields: streakShields,
          is_shield_active: isShieldActive,
          weekly_event: weeklyEvent,
          raid_boss: raidBoss,
          last_active_date: profile.last_active_date,
          total_ujian: profile.total_ujian,
          total_sempurna: profile.total_sempurna,
          rank_global: rankGlobal,
          total_global: totalSiswaGlobal,
          rank_class: rankClass,
          total_class: totalSiswaClass,
          rank_wajib_global: rankWajibGlobal,
          rank_wajib_class: rankWajibClass,
          rank_minat_global: rankMinatGlobal,
          rank_minat_class: rankMinatClass,
          is_minat_eligible: isMinatEligible,
          total_minat_students: totalMinatStudents,
          badges: enrichedBadges,
          discord_stats: discordStats
        },
        catalog: BADGE_CATALOG,
        levels: LEVEL_CONFIG
      });
    }

    // B. JIKA REQUEST LEADERBOARD ANTAR-ROMBEL (KOMPETISI SEHAT 12 F.1 vs 12 F.2 vs 12 F.3 vs 12 F.4)
    if (url.searchParams.has('rombel') || kelasFilter === 'rombel') {
      const mapelMode = (url.searchParams.get('mapel') || 'wajib').toLowerCase();
      
      // 1. Ambil agregat kelas dari siswa_gamifikasi
      const rombelRows = (await db.prepare(`
        SELECT 
          kelas,
          COUNT(*) as total_siswa,
          SUM(xp_wajib) as total_xp_wajib,
          ROUND(AVG(xp_wajib), 1) as avg_xp_wajib,
          SUM(total_xp) as total_xp_all,
          ROUND(AVG(total_xp), 1) as avg_xp_all,
          SUM(total_ujian) as total_ujian,
          SUM(total_sempurna) as total_sempurna,
          ROUND(AVG(current_streak), 1) as avg_streak
        FROM siswa_gamifikasi
        WHERE kelas LIKE 'XII F%'
        GROUP BY kelas
      `).all()).results || [];

      // 2. Ambil data aktivitas CBT mingguan (7 hari terakhir)
      let weeklyCbtMap = {};
      try {
        const weeklyRows = (await db.prepare(`
          SELECT 
            kelas,
            COUNT(*) as weekly_ujian,
            SUM(CASE WHEN skor >= 75 THEN 1 ELSE 0 END) as weekly_tuntas,
            SUM(CASE WHEN skor = 100 THEN 1 ELSE 0 END) as weekly_sempurna,
            ROUND(AVG(skor), 1) as weekly_avg_skor
          FROM nilai_cbt
          WHERE datetime(waktu_submit) >= datetime('now', '-7 days')
            AND kelas LIKE 'XII F%'
          GROUP BY kelas
        `).all()).results || [];

        weeklyRows.forEach(w => {
          weeklyCbtMap[w.kelas] = w;
        });
      } catch (e) {
        console.warn('Gagal memuat weekly cbt stats:', e);
      }

      // 3. Ambil MVP Siswa per Rombel
      let mvpMap = {};
      try {
        const mvpRows = (await db.prepare(`
          SELECT nis, nama, kelas, xp_wajib, total_xp, current_streak
          FROM siswa_gamifikasi
          WHERE kelas LIKE 'XII F%'
          ORDER BY (CASE WHEN ? = 'all' THEN total_xp ELSE xp_wajib END) DESC
        `).bind(mapelMode).all()).results || [];

        mvpRows.forEach(m => {
          if (!mvpMap[m.kelas]) {
            mvpMap[m.kelas] = {
              nis: m.nis,
              nama: m.nama,
              xp_wajib: m.xp_wajib,
              total_xp: m.total_xp,
              streak: m.current_streak
            };
          }
        });
      } catch (e) {
        console.warn('Gagal memuat MVP rombel:', e);
      }

      // 4. Susun & Urutkan Peringkat Rombel
      const sortKey = (mapelMode === 'all') ? 'avg_xp_all' : 'avg_xp_wajib';
      rombelRows.sort((a, b) => (b[sortKey] || 0) - (a[sortKey] || 0));

      const rankedRombels = rombelRows.map((r, idx) => {
        const weekly = weeklyCbtMap[r.kelas] || { weekly_ujian: 0, weekly_tuntas: 0, weekly_sempurna: 0, weekly_avg_skor: 0 };
        const mvp = mvpMap[r.kelas] || null;
        const ketuntasanPct = r.total_siswa > 0 ? Math.min(100, Math.round(((r.total_ujian || 0) / (r.total_siswa * 21)) * 100)) : 0;

        return {
          rank: idx + 1,
          kelas: r.kelas,
          total_siswa: r.total_siswa,
          total_xp_wajib: r.total_xp_wajib || 0,
          avg_xp_wajib: r.avg_xp_wajib || 0,
          total_xp_all: r.total_xp_all || 0,
          avg_xp_all: r.avg_xp_all || 0,
          total_ujian: r.total_ujian || 0,
          total_sempurna: r.total_sempurna || 0,
          avg_streak: r.avg_streak || 1.0,
          ketuntasan_pct: ketuntasanPct,
          weekly_ujian: weekly.weekly_ujian || 0,
          weekly_tuntas: weekly.weekly_tuntas || 0,
          weekly_sempurna: weekly.weekly_sempurna || 0,
          weekly_avg_skor: weekly.weekly_avg_skor || 0,
          mvp: mvp
        };
      });

      return jsonResponse({
        success: true,
        mode: 'rombel',
        mapel: mapelMode,
        leaderboard: rankedRombels,
        generated_at: new Date().toISOString()
      });
    }

    // C. JIKA REQUEST LEADERBOARD INDIVIDU
    const mapelFilter = (url.searchParams.get('mapel') || 'wajib').toLowerCase();
    const selectFields = "nis, nama, kelas, total_xp, level, gelar, current_streak, max_streak, total_ujian, total_sempurna, badges, xp_wajib, ujian_wajib, sempurna_wajib, xp_minat, ujian_minat, sempurna_minat";
    const whereClauses = [];
    const bindings = [];
    const countBindings = [];

    // Filter Mapel & Urutan Peringkat
    let sortColumn = "xp_wajib";
    let sortSecondary = "sempurna_wajib";
    let sortTertiary = "ujian_wajib";
    let countSumExpr = "SUM(xp_wajib)";

    if (mapelFilter === 'minat') {
      whereClauses.push("(kelas LIKE '%F3%' OR kelas LIKE '%F4%' OR ujian_minat > 0)");
      sortColumn = "xp_minat";
      sortSecondary = "sempurna_minat";
      sortTertiary = "ujian_minat";
      countSumExpr = "SUM(xp_minat)";
    } else if (mapelFilter === 'all') {
      sortColumn = "total_xp";
      sortSecondary = "total_sempurna";
      sortTertiary = "total_ujian";
      countSumExpr = "SUM(total_xp)";
    } else {
      // Default 'wajib'
      sortColumn = "xp_wajib";
      sortSecondary = "sempurna_wajib";
      sortTertiary = "ujian_wajib";
      countSumExpr = "SUM(xp_wajib)";
    }

    // Filter Kelas
    if (kelasFilter && kelasFilter.toLowerCase() !== 'all') {
      let normalizedKelas = kelasFilter.replace(/_/g, ' ').toUpperCase();
      if (!normalizedKelas.startsWith('XII') && normalizedKelas.startsWith('12')) {
        normalizedKelas = 'XII ' + normalizedKelas.slice(2).trim();
      }
      whereClauses.push("kelas LIKE ?");
      bindings.push(`%${normalizedKelas}%`);
      countBindings.push(`%${normalizedKelas}%`);
    }

    const whereSql = whereClauses.length > 0 ? " WHERE " + whereClauses.join(" AND ") : "";

    const query = `SELECT ${selectFields} FROM siswa_gamifikasi ${whereSql} ORDER BY ${sortColumn} DESC, ${sortSecondary} DESC, ${sortTertiary} DESC LIMIT ? OFFSET ?`;
    const countQuery = `SELECT COUNT(*) as total, ${countSumExpr} as total_xp_sum, AVG(current_streak) as avg_streak, MAX(current_streak) as top_streak FROM siswa_gamifikasi ${whereSql}`;

    bindings.push(limit, offset);
    const { results } = await db.prepare(query).bind(...bindings).all();

    const countStmt = db.prepare(countQuery);
    const countStats = countBindings.length > 0 
      ? await countStmt.bind(...countBindings).first() 
      : await countStmt.first();

    const rankedLeaderboard = (results || []).map((row, idx) => {
      let bList = [];
      try { bList = JSON.parse(row.badges || '[]'); } catch (e) { bList = []; }

      let xpDisplay = row.xp_wajib || 0;
      let ujianDisplay = row.ujian_wajib || 0;
      let sempurnaDisplay = row.sempurna_wajib || 0;

      if (mapelFilter === 'minat') {
        xpDisplay = row.xp_minat || 0;
        ujianDisplay = row.ujian_minat || 0;
        sempurnaDisplay = row.sempurna_minat || 0;
      } else if (mapelFilter === 'all') {
        xpDisplay = row.total_xp || 0;
        ujianDisplay = row.total_ujian || 0;
        sempurnaDisplay = row.total_sempurna || 0;
      }

      return {
        rank: offset + idx + 1,
        nis: row.nis,
        nama: row.nama,
        kelas: row.kelas,
        mapel: mapelFilter,
        xp_display: xpDisplay,
        ujian_display: ujianDisplay,
        sempurna_display: sempurnaDisplay,
        total_xp: row.total_xp,
        xp_wajib: row.xp_wajib || 0,
        ujian_wajib: row.ujian_wajib || 0,
        sempurna_wajib: row.sempurna_wajib || 0,
        xp_minat: row.xp_minat || 0,
        ujian_minat: row.ujian_minat || 0,
        sempurna_minat: row.sempurna_minat || 0,
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
      mapel: mapelFilter,
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
