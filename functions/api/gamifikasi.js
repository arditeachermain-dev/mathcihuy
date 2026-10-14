// functions/api/gamifikasi.js
// Cloudflare D1 Native Gamification, Daily Streak, XP & Leaderboard Engine
// Arsitektur Zero-Bug • Parameterized Prepared Statements • Anti-Tamper Server-Side

import { authenticateRequest, jsonResponse } from './_auth.js';

export function getMinXpForLevel(level) {
  if (level <= 1) return 0;
  const n = level - 1;
  return n * 100 + 15 * Math.floor((n * (n - 1)) / 2);
}

export function getTierDefaultTitle(level) {
  if (level >= 100) return 'Omniscient Deity';
  if (level >= 90) return 'Grand Luminary Sovereign';
  if (level >= 80) return 'Apex Luminary';
  if (level >= 70) return 'Chrono Oracle';
  if (level >= 60) return 'Transcendent Sovereign';
  if (level >= 50) return 'Titan Slayer';
  if (level >= 40) return 'Calculus Grandmaster';
  if (level >= 30) return 'Data Alchemist';
  if (level >= 20) return 'Spatial Navigator';
  if (level >= 10) return 'Probability Scout';
  return 'Novice Explorer';
}

export const PROFILE_CATALOG = [
  {
    tier: 1,
    requiredLevel: 1,
    tierName: 'Tier 1: Novice Initiate',
    minXp: 0,
    title: 'Novice Explorer',
    frame: {
      id: 'frame_stone',
      name: 'Stone Novice Ring',
      border: '#CBD5E1',
      bgGlow: 'rgba(203, 213, 225, 0.2)'
    },
    avatars: [
      {
        id: 'novice_compass',
        name: 'Aether Explorer',
        icon: 'fa-solid fa-compass',
        color: '#0D9488',
        bg: '#F0FDFA',
        desc: 'Penjelajah muda yang selalu memegang kompas kebenaran matematika.'
      },
      {
        id: 'novice_book',
        name: 'Murid Rajin',
        icon: 'fa-solid fa-book-open',
        color: '#2E384D',
        bg: '#F0EFEA',
        desc: 'Pembelajar tekun yang membaca dan memahami setiap konsep dasar.'
      },
      {
        id: 'novice_seed',
        name: 'Tunas Aljabar',
        icon: 'fa-solid fa-seedling',
        color: '#16A34A',
        bg: '#F0FDF4',
        desc: 'Benih kecerdasan yang siap tumbuh menjadi pohon ilmu yang kokoh.'
      }
    ]
  },
  {
    tier: 2,
    requiredLevel: 10,
    tierName: 'Tier 2: Probability Scout',
    minXp: 1440,
    title: 'Probability Scout',
    frame: {
      id: 'frame_bronze',
      name: 'Bronze Knight Ring',
      border: '#B45309',
      bgGlow: 'rgba(180, 83, 9, 0.25)'
    },
    avatars: [
      {
        id: 'prob_dice',
        name: 'Ahli Peluang',
        icon: 'fa-solid fa-dice',
        color: '#D97706',
        bg: '#FEF3C7',
        desc: 'Menghitung probabilitas ruang sampel dan kaidah pencacahan tanpa keliru.'
      },
      {
        id: 'prob_plane',
        name: 'Pilot Vektor',
        icon: 'fa-solid fa-paper-plane',
        color: '#0284C7',
        bg: '#E0F2FE',
        desc: 'Meluncur lincah melintasi koordinat Cartesius dan garis singgung.'
      },
      {
        id: 'prob_cipher',
        name: 'Pemecah Sandi',
        icon: 'fa-solid fa-key',
        color: '#6366F1',
        bg: '#EEF2FF',
        desc: 'Membongkar rahasia pola bilangan dan relasi fungsi tersembunyi.'
      }
    ]
  },
  {
    tier: 3,
    requiredLevel: 20,
    tierName: 'Tier 3: Spatial Navigator',
    minXp: 4465,
    title: 'Spatial Navigator',
    frame: {
      id: 'frame_silver',
      name: 'Silver Aegis Ring',
      border: '#64748B',
      bgGlow: 'rgba(100, 116, 139, 0.3)'
    },
    avatars: [
      {
        id: 'spatial_cube',
        name: 'Arsitek 3D',
        icon: 'fa-solid fa-cube',
        color: '#059669',
        bg: '#ECFDF5',
        desc: 'Menguasai jarak titik ke garis dan bidang dalam bangun ruang tiga dimensi.'
      },
      {
        id: 'spatial_poly',
        name: 'Visioner Geometri',
        icon: 'fa-solid fa-draw-polygon',
        color: '#2563EB',
        bg: '#EFF6FF',
        desc: 'Memvisualisasikan proyeksi orthogonal dan sudut dihedral secara presisi.'
      },
      {
        id: 'spatial_gem',
        name: 'Kristal Poligon',
        icon: 'fa-solid fa-gem',
        color: '#E11D48',
        bg: '#FFE4E6',
        desc: 'Memiliki struktur berpikir yang kokoh dan jernih bak kristal permata.'
      }
    ]
  },
  {
    tier: 4,
    requiredLevel: 30,
    tierName: 'Tier 4: Data Alchemist',
    minXp: 8990,
    title: 'Data Alchemist',
    frame: {
      id: 'frame_gold',
      name: 'Auric Gold Ring',
      border: '#EAB308',
      bgGlow: 'rgba(234, 179, 8, 0.35)'
    },
    avatars: [
      {
        id: 'data_alchemist',
        name: 'Dukun Data',
        icon: 'fa-solid fa-chart-line',
        color: '#7C3AED',
        bg: '#F5F3FF',
        desc: 'Mampu menyihir tabel distribusi acak menjadi kesimpulan statistik mutlak.'
      },
      {
        id: 'data_oracle',
        name: 'Gaussian Oracle',
        icon: 'fa-solid fa-wand-magic-sparkles',
        color: '#F59E0B',
        bg: '#FEF3C7',
        desc: 'Membaca kurva lonceng normal dan memprediksi sebaran data bivariat.'
      },
      {
        id: 'data_matrix',
        name: 'Matrix Strategist',
        icon: 'fa-solid fa-table-cells',
        color: '#0891B2',
        bg: '#ECFEFF',
        desc: 'Menata persamaan linier dan matriks transformasi dengan ketelitian tinggi.'
      }
    ]
  },
  {
    tier: 5,
    requiredLevel: 40,
    tierName: 'Tier 5: Calculus Grandmaster',
    minXp: 15015,
    title: 'Calculus Grandmaster',
    frame: {
      id: 'frame_jade',
      name: 'Jade Crystal Ring',
      border: '#10B981',
      bgGlow: 'rgba(16, 185, 129, 0.4)'
    },
    avatars: [
      {
        id: 'calc_infinity',
        name: 'Master Limit & Kontinu',
        icon: 'fa-solid fa-infinity',
        color: '#1E3A8A',
        bg: '#EFF6FF',
        desc: 'Mendekati ketakhinggaan tanpa pernah tergelincir bentuk tak tentu.'
      },
      {
        id: 'calc_bolt',
        name: 'Ksatria Turunan',
        icon: 'fa-solid fa-bolt',
        color: '#D97706',
        bg: '#FFFBEB',
        desc: 'Menghitung laju perubahan sesaat dan optimasi fungsi secepat kilat.'
      },
      {
        id: 'calc_wave',
        name: 'Penguasa Integral',
        icon: 'fa-solid fa-wave-square',
        color: '#0D9488',
        bg: '#F0FDFA',
        desc: 'Menghitung luas daerah dan volume benda putar dengan metode tanzalin.'
      }
    ]
  },
  {
    tier: 6,
    requiredLevel: 50,
    tierName: 'Tier 6: Titan Slayer',
    minXp: 22540,
    title: 'Titan Slayer',
    frame: {
      id: 'frame_ruby',
      name: 'Radiant Ruby Ring',
      border: '#EF4444',
      bgGlow: 'rgba(239, 68, 68, 0.45)'
    },
    avatars: [
      {
        id: 'titan_slayer',
        name: 'Pemburu Titan',
        icon: 'fa-solid fa-dragon',
        color: '#DC2626',
        bg: '#FEF2F2',
        desc: 'Pahlawan legendaris yang menumbangkan Titan Statigo dalam Raid Boss mingguan.'
      },
      {
        id: 'raid_commander',
        name: 'Panglima Raid',
        icon: 'fa-solid fa-shield-halved',
        color: '#EA580C',
        bg: '#FFF7ED',
        desc: 'Memimpin serangan serentak angkatan dan menjaga streak tanpa ampun.'
      },
      {
        id: 'apex_champ',
        name: 'Kampiun Tak Terkalahkan',
        icon: 'fa-solid fa-trophy',
        color: '#D97706',
        bg: '#FFFBEB',
        desc: 'Pencetak critical hit sempurna 100x tanpa celah.'
      }
    ]
  },
  {
    tier: 7,
    requiredLevel: 60,
    tierName: 'Tier 7: Transcendent Sovereign',
    minXp: 31565,
    title: 'Transcendent Sovereign',
    frame: {
      id: 'frame_diamond',
      name: 'Starlight Diamond Ring',
      border: '#0284C7',
      bgGlow: 'rgba(2, 132, 199, 0.45)'
    },
    avatars: [
      {
        id: 'sovereign_sun',
        name: 'Sovereign of Light',
        icon: 'fa-solid fa-sun',
        color: '#D97706',
        bg: '#FFFBEB',
        desc: 'Menerangi ruang kelas dengan ide-ide matematika yang menginspirasi.'
      },
      {
        id: 'sovereign_atom',
        name: 'Inti Singularity',
        icon: 'fa-solid fa-atom',
        color: '#4F46E5',
        bg: '#EEF2FF',
        desc: 'Memadatkan seluruh rumus kalkulus dan geometri menjadi satu pemahaman intuitif.'
      }
    ]
  },
  {
    tier: 8,
    requiredLevel: 70,
    tierName: 'Tier 8: Chrono Oracle',
    minXp: 42090,
    title: 'Chrono Oracle',
    frame: {
      id: 'frame_platinum',
      name: 'Chrono Platinum Ring',
      border: '#64748B',
      bgGlow: 'rgba(100, 116, 139, 0.5)'
    },
    avatars: [
      {
        id: 'chrono_weaver',
        name: 'Penenun Waktu',
        icon: 'fa-solid fa-hourglass-half',
        color: '#0F766E',
        bg: '#F0FDFA',
        desc: 'Menyelesaikan ujian 90 menit hanya dalam 15 menit dengan akurasi 100%.'
      },
      {
        id: 'dimension_walker',
        name: 'Penjelajah Multi-Dimensi',
        icon: 'fa-solid fa-ring',
        color: '#6D28D9',
        bg: '#F5F3FF',
        desc: 'Melompat antar dimensi aljabar, kalkulus, dan statistika dengan mudah.'
      }
    ]
  },
  {
    tier: 9,
    requiredLevel: 80,
    tierName: 'Tier 9: Apex Luminary',
    minXp: 54115,
    title: 'Apex Luminary',
    frame: {
      id: 'frame_mythic',
      name: 'Mythic Gold Ring',
      border: '#FACC15',
      bgGlow: 'rgba(250, 204, 21, 0.5)'
    },
    avatars: [
      {
        id: 'luminary_star',
        name: 'Bintang Kejora',
        icon: 'fa-solid fa-star',
        color: '#CA8A04',
        bg: '#FEF9C3',
        desc: 'Bintang paling terang di langit akademik SMA GIS 2 Serpong.'
      },
      {
        id: 'quantum_master',
        name: 'Master Kuantum',
        icon: 'fa-solid fa-microchip',
        color: '#0284C7',
        bg: '#E0F2FE',
        desc: 'Komputasi logika super cepat bagaikan prosesor kuantum.'
      }
    ]
  },
  {
    tier: 10,
    requiredLevel: 90,
    tierName: 'Tier 10: Grand Luminary Sovereign',
    minXp: 67640,
    title: 'Grand Luminary Sovereign',
    frame: {
      id: 'frame_aurora',
      name: 'Prismatic Aurora Ring',
      border: '#EC4899',
      bgGlow: 'rgba(236, 72, 153, 0.5)'
    },
    avatars: [
      {
        id: 'cosmic_sage',
        name: 'Resi Kosmik',
        icon: 'fa-solid fa-moon',
        color: '#4338CA',
        bg: '#EEF2FF',
        desc: 'Kebijaksanaan matematika yang tenang dan mendalam melampaui angkasa.'
      },
      {
        id: 'equation_lord',
        name: 'Penguasa Persamaan',
        icon: 'fa-solid fa-scale-balanced',
        color: '#059669',
        bg: '#ECFDF5',
        desc: 'Setiap persamaan dan pertidaksamaan selalu tunduk dalam keseimbangan.'
      }
    ]
  },
  {
    tier: 11,
    requiredLevel: 100,
    tierName: 'Tier 11: Omniscient Deity',
    minXp: 82665,
    title: 'Omniscient Deity',
    frame: {
      id: 'frame_celestial',
      name: 'Celestial Crown Ring',
      border: '#F59E0B',
      bgGlow: 'rgba(245, 158, 11, 0.6)'
    },
    avatars: [
      {
        id: 'deity_crown',
        name: 'Mahadewa Matematika',
        icon: 'fa-solid fa-crown',
        color: '#D97706',
        bg: '#FFFBEB',
        desc: 'Pencapaian mutlak dan tertinggi dalam sejarah peradaban Math Cihuy.'
      },
      {
        id: 'living_axiom',
        name: 'Aksioma Abadi',
        icon: 'fa-solid fa-fire',
        color: '#B91C1C',
        bg: '#FEF2F2',
        desc: 'Kebenaran matematika murni yang tak terbantahkan oleh ruang dan waktu.'
      }
    ]
  }
];

export const LEVEL_CONFIG = PROFILE_CATALOG.map((t, idx, arr) => {
  const nextTier = arr[idx + 1] || null;
  return {
    level: t.requiredLevel,
    minXp: t.minXp,
    maxXp: nextTier ? (nextTier.minXp - 1) : 999999,
    gelar: t.title,
    frame: t.frame
  };
});

export function getDefaultAvatarForLevel(level) {
  for (let i = PROFILE_CATALOG.length - 1; i >= 0; i--) {
    if (level >= PROFILE_CATALOG[i].requiredLevel) {
      return PROFILE_CATALOG[i].avatars[0].id;
    }
  }
  return 'novice_compass';
}

export function getDefaultFrameForLevel(level) {
  for (let i = PROFILE_CATALOG.length - 1; i >= 0; i--) {
    if (level >= PROFILE_CATALOG[i].requiredLevel) {
      return PROFILE_CATALOG[i].frame.id;
    }
  }
  return 'frame_stone';
}

export function getLevelAndTitle(xp, customTitle = null) {
  const safeXp = Math.max(0, Number(xp) || 0);
  let lvl = 1;
  while (true) {
    const nextReq = getMinXpForLevel(lvl + 1);
    if (safeXp < nextReq) break;
    lvl++;
    if (lvl >= 1000) break;
  }

  const curMin = getMinXpForLevel(lvl);
  const nextMin = getMinXpForLevel(lvl + 1);
  const range = nextMin - curMin;
  const progressPct = range > 0 ? Math.min(100, Math.max(0, Math.round(((safeXp - curMin) / range) * 100))) : 100;
  const defaultGelar = getTierDefaultTitle(lvl);
  const gelar = customTitle || defaultGelar;

  return {
    level: lvl,
    gelar: gelar,
    default_gelar: defaultGelar,
    current_xp: safeXp,
    current_level_min_xp: curMin,
    next_level_xp: nextMin,
    progress_pct: progressPct,
    sisa_xp: Math.max(0, nextMin - safeXp)
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
// 4. GET RAID BOSS DATA (TITAN STATIGO: 300.000 HP, MULTI-WEEK CAMPAIGN)
// =============================================================================
export async function getRaidBossData(db, nis, targetWeek) {
  const MAX_BOSS_HP = 300000;
  
  // Waktu transisi Pekan 2 (W42): Senin, 12 Oktober 2026 pukul 05:00 WIB (2026-10-11T22:00:00.000Z)
  const now = new Date();
  const w42LaunchTime = new Date('2026-10-11T22:00:00.000Z').getTime();
  const activeWeek = targetWeek || (now.getTime() >= w42LaunchTime ? '2026-W42' : '2026-W41');
  const isW42 = (activeWeek === '2026-W42');

  const bossTitle = isW42 ? 'TITAN STATIGO: RONDE 2 (MEDIAN, KUARTIL & ATURAN RANTAI)' : 'TITAN STATIGO: KOLO-SOS FREKUENSI & DERIVATIF';
  const bossSubtitle = isW42 ? 'Event Pertemuan: Wajib P17 & P18 • Minat P18 & P19' : 'Event Pertemuan: Wajib P15 & P16 • Minat P17';
  const bossDesc = isW42
    ? 'Titan Statigo bangkit kembali dengan ketahanan 300.000 HP! Kuasai interpolasi median, kuartil, desil, IQR, serta aturan rantai dan turunan perkalian/pembagian trigonometri untuk menumbangkannya!'
    : 'Monster raksasa penunggu gerbang PTS-PAS yang terbuat dari balok-balok histogram dan gelombang kurva trigonometri. Banyak-banyakan selesaikan soal untuk menumbangkan Titan!';

  if (!db) {
    return {
      boss_id: 'titan_statigo',
      boss_name: bossTitle,
      boss_subtitle: bossSubtitle,
      boss_desc: bossDesc,
      week_id: activeWeek,
      max_hp: MAX_BOSS_HP,
      current_hp: 300000,
      total_damage_dealt: 0,
      pct_hp_remaining: 100,
      is_defeated: false,
      phase: 'FASE 1: BATTLE COMMENCED',
      total_attackers: 0,
      days_remaining: 1,
      hours_remaining: 20,
      target_packages: [],
      user_stats: null,
      top_attackers: [],
      leaderboard: []
    };
  }

  try {
    const nowWib = new Date(Date.now() + 7 * 3600 * 1000);
    const dayOfWeek = nowWib.getUTCDay();
    const diffToMonday = (dayOfWeek === 0 ? -6 : 1 - dayOfWeek);
    const mondayWib = new Date(nowWib);
    mondayWib.setUTCDate(nowWib.getUTCDate() + diffToMonday);
    mondayWib.setUTCHours(0, 0, 0, 0);
    const mondayStr = mondayWib.toISOString().slice(0, 10);
    const todayStr = nowWib.toISOString().slice(0, 10);

    let rows = [];
    if (isW42) {
      // Query untuk Pekan 2 (W42): Wajib P17/P18 dan Minat P18/P19
      rows = (await db.prepare(`
        SELECT n.nis, s.nama, s.kelas,
          MAX(CASE WHEN (n.mapel = 'wajib' AND n.kode_pertemuan IN ('P17','p17')) THEN n.skor ELSE 0 END) as p17_wajib_skor,
          MAX(CASE WHEN (n.mapel = 'wajib' AND n.kode_pertemuan IN ('P18','p18')) THEN n.skor ELSE 0 END) as p18_wajib_skor,
          MAX(CASE WHEN (n.mapel = 'minat' AND n.kode_pertemuan IN ('P18','p18')) THEN n.skor ELSE 0 END) as p18_minat_skor,
          MAX(CASE WHEN (n.mapel = 'minat' AND n.kode_pertemuan IN ('P19','p19')) THEN n.skor ELSE 0 END) as p19_minat_skor,
          SUM(
            CASE 
              WHEN ((n.mapel = 'raid' OR n.kode_pertemuan LIKE 'DAILY%' OR n.kode_pertemuan LIKE 'RAID_DAILY%' OR n.kode_pertemuan LIKE 'WEEKLY_2026-W42%') AND DATE(n.waktu_submit) >= '2026-10-12') 
              THEN (n.jumlah_benar * 100) + (CASE WHEN n.skor = 100 THEN 500 ELSE 0 END)
              ELSE 0 
            END
          ) as daily_damage,
          SUM(CASE WHEN n.skor = 100 THEN 1 ELSE 0 END) as critical_hits,
          SUM(
            CASE 
              WHEN (n.mapel = 'wajib' AND n.kode_pertemuan IN ('P17','p17')) THEN n.skor * 10 + (CASE WHEN n.skor = 100 THEN 500 ELSE 0 END)
              WHEN (n.mapel = 'wajib' AND n.kode_pertemuan IN ('P18','p18')) THEN n.skor * 10 + (CASE WHEN n.skor = 100 THEN 500 ELSE 0 END)
              WHEN (n.mapel = 'minat' AND n.kode_pertemuan IN ('P18','p18')) THEN n.skor * 15 + (CASE WHEN n.skor = 100 THEN 500 ELSE 0 END)
              WHEN (n.mapel = 'minat' AND n.kode_pertemuan IN ('P19','p19')) THEN n.skor * 15 + (CASE WHEN n.skor = 100 THEN 500 ELSE 0 END)
              WHEN ((n.mapel = 'raid' OR n.kode_pertemuan LIKE 'DAILY%' OR n.kode_pertemuan LIKE 'RAID_DAILY%' OR n.kode_pertemuan LIKE 'WEEKLY_2026-W42%') AND DATE(n.waktu_submit) >= '2026-10-12') 
              THEN (n.jumlah_benar * 100) + (CASE WHEN n.skor = 100 THEN 500 ELSE 0 END)
              ELSE 0
            END
          ) as total_damage
        FROM nilai_cbt n
        JOIN siswa s ON n.nis = s.nis
        WHERE ((n.mapel = 'wajib' AND n.kode_pertemuan IN ('P17','P18','p17','p18')) 
           OR (n.mapel = 'minat' AND n.kode_pertemuan IN ('P18','P19','p18','p19'))
           OR ((n.mapel = 'raid' OR n.kode_pertemuan LIKE 'DAILY%' OR n.kode_pertemuan LIKE 'RAID_DAILY%' OR n.kode_pertemuan LIKE 'WEEKLY_2026-W42%') AND DATE(n.waktu_submit) >= '2026-10-12'))
          AND (n.is_flagged IS NULL OR n.is_flagged = 0)
        GROUP BY n.nis
        ORDER BY total_damage DESC, critical_hits DESC, n.nis ASC
      `).all()).results || [];
    } else {
      // Query untuk Pekan 1 (W41): Wajib P15/P16 dan Minat P17
      rows = (await db.prepare(`
        SELECT n.nis, s.nama, s.kelas,
          MAX(CASE WHEN (n.mapel = 'wajib' AND n.kode_pertemuan IN ('P15','p15')) THEN n.skor ELSE 0 END) as p15_wajib_skor,
          MAX(CASE WHEN (n.mapel = 'wajib' AND n.kode_pertemuan IN ('P16','p16')) THEN n.skor ELSE 0 END) as p16_wajib_skor,
          MAX(CASE WHEN (n.mapel = 'minat' AND n.kode_pertemuan IN ('P17','p17')) THEN n.skor ELSE 0 END) as p17_minat_skor,
          SUM(
            CASE 
              WHEN ((n.mapel = 'raid' OR n.kode_pertemuan LIKE 'DAILY%' OR n.kode_pertemuan LIKE 'RAID_DAILY%' OR n.kode_pertemuan LIKE 'WEEKLY%') AND DATE(n.waktu_submit) >= ?) 
              THEN (n.jumlah_benar * 100) + (CASE WHEN n.skor = 100 THEN 500 ELSE 0 END)
              ELSE 0 
            END
          ) as daily_damage,
          SUM(CASE WHEN n.skor = 100 THEN 1 ELSE 0 END) as critical_hits,
          SUM(
            CASE 
              WHEN (n.mapel = 'wajib' AND n.kode_pertemuan IN ('P15','p15')) THEN n.skor * 10 + (CASE WHEN n.skor = 100 THEN 500 ELSE 0 END)
              WHEN (n.mapel = 'wajib' AND n.kode_pertemuan IN ('P16','p16')) THEN n.skor * 10 + (CASE WHEN n.skor = 100 THEN 500 ELSE 0 END)
              WHEN (n.mapel = 'minat' AND n.kode_pertemuan IN ('P17','p17')) THEN n.skor * 15 + (CASE WHEN n.skor = 100 THEN 500 ELSE 0 END)
              WHEN ((n.mapel = 'raid' OR n.kode_pertemuan LIKE 'DAILY%' OR n.kode_pertemuan LIKE 'RAID_DAILY%' OR n.kode_pertemuan LIKE 'WEEKLY%') AND DATE(n.waktu_submit) >= ?) 
              THEN (n.jumlah_benar * 100) + (CASE WHEN n.skor = 100 THEN 500 ELSE 0 END)
              ELSE 0
            END
          ) as total_damage
        FROM nilai_cbt n
        JOIN siswa s ON n.nis = s.nis
        WHERE ((n.mapel = 'wajib' AND n.kode_pertemuan IN ('P15','P16','p15','p16')) 
           OR (n.mapel = 'minat' AND n.kode_pertemuan IN ('P17','p17'))
           OR ((n.mapel = 'raid' OR n.kode_pertemuan LIKE 'DAILY%' OR n.kode_pertemuan LIKE 'RAID_DAILY%' OR n.kode_pertemuan LIKE 'WEEKLY%') AND DATE(n.waktu_submit) >= ?))
          AND (n.is_flagged IS NULL OR n.is_flagged = 0)
        GROUP BY n.nis
        ORDER BY total_damage DESC, critical_hits DESC, n.nis ASC
      `).bind(mondayStr, mondayStr, mondayStr).all()).results || [];
    }

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

      const item = {
        rank: rank,
        nis: r.nis,
        nama: r.nama,
        kelas: r.kelas,
        total_damage: dmg,
        daily_damage: Number(r.daily_damage) || 0,
        critical_hits: Number(r.critical_hits) || 0,
        reward_xp: rewardXp,
        title: title
      };

      if (isW42) {
        item.p17_wajib_skor = Number(r.p17_wajib_skor) || 0;
        item.p18_wajib_skor = Number(r.p18_wajib_skor) || 0;
        item.p18_minat_skor = Number(r.p18_minat_skor) || 0;
        item.p19_minat_skor = Number(r.p19_minat_skor) || 0;
      } else {
        item.p15_wajib_skor = Number(r.p15_wajib_skor) || 0;
        item.p16_wajib_skor = Number(r.p16_wajib_skor) || 0;
        item.p17_minat_skor = Number(r.p17_minat_skor) || 0;
      }

      return item;
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

    // Status Serangan Harian/Mingguan untuk NIS aktif
    let todayDailyRaid = {
      completed: false,
      skor: 0,
      jumlah_benar: 0,
      jumlah_soal: 50,
      damage_earned: 0,
      waktu_submit: null
    };

    let userStats = null;
    if (nis) {
      const cleanNis = String(nis).trim();
      const found = leaderboard.find(l => String(l.nis) === cleanNis);
      if (found) {
        userStats = { ...found };
      } else {
        userStats = {
          rank: leaderboard.length + 1,
          nis: cleanNis,
          nama: 'Kamu',
          kelas: 'XII',
          total_damage: 0,
          daily_damage: 0,
          critical_hits: 0,
          reward_xp: 0,
          title: 'Belum Menyerang'
        };
        if (isW42) {
          userStats.p17_wajib_skor = 0;
          userStats.p18_wajib_skor = 0;
          userStats.p18_minat_skor = 0;
          userStats.p19_minat_skor = 0;
        } else {
          userStats.p15_wajib_skor = 0;
          userStats.p16_wajib_skor = 0;
          userStats.p17_minat_skor = 0;
        }
      }

      try {
        const todayRow = await db.prepare(
          "SELECT skor, jumlah_soal, jumlah_benar, jumlah_salah, waktu_submit FROM nilai_cbt WHERE nis = ? AND (mapel = 'raid' OR kode_pertemuan LIKE 'DAILY%' OR kode_pertemuan LIKE 'RAID_DAILY%' OR kode_pertemuan LIKE 'WEEKLY%') AND DATE(waktu_submit) = ? ORDER BY id DESC LIMIT 1"
        ).bind(cleanNis, todayStr).first();
        if (todayRow) {
          const isWeekly = String(todayRow.kode_pertemuan || '').toUpperCase().includes('WEEKLY');
          const totalJawab = (Number(todayRow.jumlah_benar) || 0) + (Number(todayRow.jumlah_salah) || 0);
          const isFinished = isWeekly ? (totalJawab >= 50) : true;
          todayDailyRaid = {
            completed: isFinished,
            skor: Number(todayRow.skor) || 0,
            jumlah_benar: Number(todayRow.jumlah_benar) || 0,
            jumlah_soal: Number(todayRow.jumlah_soal) || (isWeekly ? 50 : 10),
            damage_earned: (Number(todayRow.jumlah_benar) || 0) * 100 + (Number(todayRow.skor) === 100 ? 500 : 0),
            waktu_submit: todayRow.waktu_submit
          };
        }
      } catch (e) {
        console.warn('Check todayDailyRaid error:', e);
      }
      userStats.today_daily_raid = todayDailyRaid;
    }

    // Waktu reset mingguan (Minggu 23:59 WIB)
    const diffToSunday = (7 - dayOfWeek) % 7;
    const sundayWib = new Date(nowWib);
    sundayWib.setUTCDate(nowWib.getUTCDate() + (dayOfWeek === 0 ? 0 : diffToSunday));
    sundayWib.setUTCHours(23, 59, 59, 999);
    const msRemaining = Math.max(0, sundayWib.getTime() - nowWib.getTime());
    const hoursRemaining = Math.floor(msRemaining / (1000 * 3600));
    const daysRemaining = Math.floor(hoursRemaining / 24);

    const targetPackages = isW42 ? [
      {
        mapel: 'raid',
        kode: 'DAILY',
        title: 'Misi Serangan Mingguan Titan (W42)',
        subtitle: '50 Soal TKA Skuad (Wajib P17/P18 & Minat P18/P19)',
        dmg_formula: '100 DMG / soal + Real-Time Combo Multiplier (hingga 2.0x DMG)',
        max_dmg: 10000,
        is_daily: true
      },
      {
        mapel: 'wajib',
        kode: 'P17',
        title: 'Median dan Modus Data Berkelompok',
        dmg_formula: '100 DMG / soal + 500 Bonus Skor 100',
        max_dmg: 1500
      },
      {
        mapel: 'wajib',
        kode: 'P18',
        title: 'Ukuran Letak Data (Kuartil, Desil, IQR, Outlier)',
        dmg_formula: '100 DMG / soal + 500 Bonus Skor 100',
        max_dmg: 1500
      },
      {
        mapel: 'minat',
        kode: 'P18',
        title: 'Turunan Trigonometri Aturan Rantai & Pangkat',
        dmg_formula: '150 DMG / soal + 500 Bonus Skor 100',
        max_dmg: 2000
      },
      {
        mapel: 'minat',
        kode: 'P19',
        title: 'Turunan Perkalian (u·v) & Pembagian (u/v)',
        dmg_formula: '150 DMG / soal + 500 Bonus Skor 100',
        max_dmg: 2000
      }
    ] : [
      {
        mapel: 'raid',
        kode: 'DAILY',
        title: 'Misi Serangan Harian Titan',
        subtitle: '10 Soal Acak (Wajib P15, P16 & Minat P17)',
        dmg_formula: '100 DMG / soal + 500 Bonus Critical (Maks 1.500 DMG / hari)',
        max_dmg: 1500,
        is_daily: true
      },
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
    ];

    return {
      boss_id: 'titan_statigo',
      boss_name: bossTitle,
      boss_subtitle: bossSubtitle,
      boss_desc: bossDesc,
      week_id: activeWeek,
      max_hp: MAX_BOSS_HP,
      current_hp: currentHp,
      total_damage_dealt: totalGlobalDamage,
      pct_hp_remaining: pctRemaining,
      is_defeated: isDefeated,
      phase: phase,
      total_attackers: leaderboard.length,
      days_remaining: daysRemaining,
      hours_remaining: hoursRemaining,
      today_daily_raid: todayDailyRaid,
      target_packages: targetPackages,
      user_stats: userStats,
      top_attackers: leaderboard.slice(0, 10),
      leaderboard: leaderboard
    };
  } catch (err) {
    console.error('Error getRaidBossData:', err);
    return {
      boss_id: 'titan_statigo',
      boss_name: bossTitle,
      boss_subtitle: bossSubtitle,
      boss_desc: bossDesc,
      week_id: activeWeek,
      max_hp: MAX_BOSS_HP,
      current_hp: 300000,
      total_damage_dealt: 0,
      pct_hp_remaining: 100,
      is_defeated: false,
      phase: 'FASE 1: BATTLE COMMENCED',
      total_attackers: 0,
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

  // 4.5 Ambil preferensi profil/avatar yang sudah dipilih siswa jika ada
  let existingGamifikasi = null;
  try {
    existingGamifikasi = await db.prepare("SELECT selected_avatar, selected_frame, selected_title FROM siswa_gamifikasi WHERE nis = ?").bind(cleanNis).first();
  } catch(e) {}

  const currentAvatar = existingGamifikasi?.selected_avatar || null;
  const currentFrame = existingGamifikasi?.selected_frame || null;
  const currentTitle = existingGamifikasi?.selected_title || null;

  totalXp += (streakInfo.current || 1) * 10;

  const lvlInfo = getLevelAndTitle(totalXp, currentTitle);
  const badgesJson = JSON.stringify(badges);

  const finalAvatar = currentAvatar || getDefaultAvatarForLevel(lvlInfo.level);
  const finalFrame = currentFrame || getDefaultFrameForLevel(lvlInfo.level);
  const finalTitle = currentTitle || lvlInfo.gelar;

  // 5. Simpan / Perbarui ke database siswa_gamifikasi
  await db.prepare(`
    INSERT INTO siswa_gamifikasi (
      nis, nama, kelas, total_xp, level, gelar, current_streak, max_streak,
      last_active_date, total_ujian, total_sempurna, badges,
      xp_wajib, ujian_wajib, sempurna_wajib,
      xp_minat, ujian_minat, sempurna_minat,
      selected_avatar, selected_frame, selected_title,
      updated_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
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
      selected_avatar = COALESCE(siswa_gamifikasi.selected_avatar, excluded.selected_avatar),
      selected_frame = COALESCE(siswa_gamifikasi.selected_frame, excluded.selected_frame),
      selected_title = COALESCE(siswa_gamifikasi.selected_title, excluded.selected_title),
      updated_at = datetime('now')
  `).bind(
    cleanNis,
    siswa.nama,
    siswa.kelas,
    totalXp,
    lvlInfo.level,
    finalTitle,
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
    sempurnaMinat,
    finalAvatar,
    finalFrame,
    finalTitle
  ).run();

  return {
    nis: cleanNis,
    nama: siswa.nama,
    kelas: siswa.kelas,
    total_xp: totalXp,
    selected_avatar: finalAvatar,
    selected_frame: finalFrame,
    selected_title: finalTitle,
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
    if (url.searchParams.has('raid_boss') || url.searchParams.get('type') === 'raid_boss' || url.searchParams.has('daily_raid')) {
      const targetNis = url.searchParams.get('nis') || '';
      const targetWeek = url.searchParams.get('week') || '';
      const raidBoss = await getRaidBossData(db, targetNis, targetWeek);
      return jsonResponse({
        success: true,
        today_daily_raid: raidBoss.today_daily_raid || null,
        user_stats: raidBoss.user_stats || null,
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
          gelar: profile.selected_title || lvlDetails.gelar,
          selected_avatar: profile.selected_avatar || getDefaultAvatarForLevel(lvlDetails.level),
          selected_frame: profile.selected_frame || getDefaultFrameForLevel(lvlDetails.level),
          selected_title: profile.selected_title || lvlDetails.gelar,
          current_xp: lvlDetails.current_xp,
          next_level_xp: lvlDetails.next_level_xp,
          progress_pct: lvlDetails.progress_pct,
          sisa_xp: lvlDetails.sisa_xp,
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
        levels: LEVEL_CONFIG,
        profile_catalog: PROFILE_CATALOG
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
    const selectFields = "nis, nama, kelas, total_xp, level, gelar, current_streak, max_streak, total_ujian, total_sempurna, badges, xp_wajib, ujian_wajib, sempurna_wajib, xp_minat, ujian_minat, sempurna_minat, selected_avatar, selected_frame, selected_title";
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
        gelar: row.selected_title || row.gelar,
        selected_avatar: row.selected_avatar || getDefaultAvatarForLevel(row.level),
        selected_frame: row.selected_frame || getDefaultFrameForLevel(row.level),
        selected_title: row.selected_title || row.gelar,
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
      levels: LEVEL_CONFIG,
      profile_catalog: PROFILE_CATALOG
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
      return jsonResponse({ error: 'Autentikasi diperlukan (401)' }, 401);
    }

    const db = context.env.DB;
    let body = {};
    try { body = await context.request.json(); } catch(e) {}

    // A. ACTION: PEMILIHAN PROFIL / AVATAR BERDASARKAN LEVEL MILESTONE (KELIPATAN 10)
    if (body.action === 'select_profile' || body.action === 'update_profile') {
      const avatarId = String(body.avatar_id || '').trim();
      const frameId = String(body.frame_id || '').trim();
      const customTitle = body.title ? String(body.title).trim() : null;

      if (!avatarId) {
        return jsonResponse({ error: 'ID Avatar wajib diberikan' }, 400);
      }

      const cleanNis = String(session.nis).trim();

      // Ambil data profil siswa untuk verifikasi level server-side
      let currentProfile = await db.prepare("SELECT total_xp, level, selected_avatar, selected_frame, selected_title FROM siswa_gamifikasi WHERE nis = ?").bind(cleanNis).first();
      if (!currentProfile) {
        currentProfile = await updateStudentGamification(db, cleanNis);
      }
      if (!currentProfile) {
        return jsonResponse({ error: 'Data profil siswa tidak ditemukan' }, 404);
      }

      const lvlInfo = getLevelAndTitle(currentProfile.total_xp);
      const studentLevel = lvlInfo.level;

      // Cari avatar di PROFILE_CATALOG
      let targetTier = null;
      let targetAvatar = null;
      for (const tier of PROFILE_CATALOG) {
        const found = tier.avatars.find(a => a.id === avatarId);
        if (found) {
          targetTier = tier;
          targetAvatar = found;
          break;
        }
      }

      if (!targetTier || !targetAvatar) {
        return jsonResponse({ error: 'Avatar karakter tidak ditemukan dalam katalog' }, 404);
      }

      // Verifikasi Level Milestone (Kelipatan 10)
      if (studentLevel < targetTier.requiredLevel) {
        return jsonResponse({ 
          error: `Level Anda (${studentLevel}) belum mencukupi untuk membuka profil ini. Butuh Level ${targetTier.requiredLevel}!` 
        }, 403);
      }

      const newAvatar = targetAvatar.id;
      const newFrame = frameId || targetTier.frame.id;
      const newTitle = customTitle || targetAvatar.name;

      // Update ke database D1 secara atomic
      await db.prepare(`
        UPDATE siswa_gamifikasi 
        SET selected_avatar = ?, selected_frame = ?, selected_title = ?, gelar = ?, updated_at = datetime('now')
        WHERE nis = ?
      `).bind(newAvatar, newFrame, newTitle, newTitle, cleanNis).run();

      return jsonResponse({
        success: true,
        message: `Karakter profil berhasil diubah menjadi ${targetAvatar.name}!`,
        selected_avatar: newAvatar,
        selected_frame: newFrame,
        selected_title: newTitle,
        gelar: newTitle
      });
    }

    // B. ACTION: REFRESH / SYNC GAMIFIKASI
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
