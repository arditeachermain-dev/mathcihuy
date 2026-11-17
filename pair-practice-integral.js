// pair-practice-integral.js
// Mode Latihan Berpasangan: Commander and Defuser (Integral Substitusi - Minat XII P26)
// SMA Global Islamic School 2 Serpong • Mr. Ardi
// CATATAN KEAMANAN: ZERO FRONTEND KEYS & ZERO FRONTEND PINS.
// Seluruh validasi kunci jawaban dan 3 Digit PIN Otorisasi dilakukan server-side di Cloudflare Backend (/api/pair-practice).

(function() {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DATA MISI LATIHAN BERPASANGAN (ZERO FRONTEND KEYS & PINS)
  // --------------------------------------------------------------------------
  const PAIR_DATA = {
    topik: "Integral Substitusi (Calculus)",
    kodePertemuan: "P26",
    mapel: "minat",
    tingkat: "XII",
    durasiDefaultDetik: 900, // 15 Menit
    modulList: [
      {
        no: 1,
        title: "Modul 1: Polinomial Berpangkat (Fondasi Substitusi)",
        level: "Level 1: Fondasi Aljabar",
        soalMath: "\\int 6x(x^2 - 4)^4 \\, dx",
        commanderBlueprint: {
          substitusiInti: "Misalkan fungsi di dalam kurung berpangkat tinggi sebagai $u = x^2 - 4$.",
          diferensial: "Diferensialkan: $\\frac{du}{dx} = 2x \\implies du = 2x \\, dx$.",
          penyeimbang: "Hubungkan dengan faktor pengali luar: $6x \\, dx = 3(2x \\, dx) = 3 \\, du$.",
          bentukBaru: "Integral berubah menjadi: $\\int 3u^4 \\, du = 3 \\left( \\frac{1}{5}u^5 \\right) + C = \\frac{3}{5}u^5 + C$.",
          instruksiTaktis: "Defuser, integran memiliki fungsi dalam $(x^2 - 4)$ dengan turunan $2x$. Karena faktor luar $6x$, terdapat kelipatan 3. Cari dan pilih kabel antiturunan berkoefisien 3/5 berpangkat 5!"
        },
        defuserConsole: {
          keterangan: "Pilih salah satu dari 5 jalur kabel terminasi yang memuat rumus antiturunan substitusi yang tepat:"
        },
        rawOptions: [
          { id: "m1_opt1", math: "\\frac{3}{5}(x^2 - 4)^5 + C" },
          { id: "m1_opt2", math: "\\frac{6}{5}(x^2 - 4)^5 + C" },
          { id: "m1_opt3", math: "\\frac{1}{5}(x^2 - 4)^5 + C" },
          { id: "m1_opt4", math: "\\frac{3}{4}(x^2 - 4)^4 + C" },
          { id: "m1_opt5", math: "\\frac{1}{2}(x^2 - 4)^5 + C" }
        ]
      },
      {
        no: 2,
        title: "Modul 2: Bentuk Akar Kuadrat & Pecahan Aljabar",
        level: "Level 2: Pangkat Rasional Negatif",
        soalMath: "\\int \\frac{4x}{\\sqrt{2x^2 + 5}} \\, dx",
        commanderBlueprint: {
          substitusiInti: "Ubah bentuk akar di penyebut menjadi pangkat negatif: $(2x^2 + 5)^{-1/2}$. Misalkan $u = 2x^2 + 5$.",
          diferensial: "Diferensialkan: $\\frac{du}{dx} = 4x \\implies du = 4x \\, dx$ (Persis sama dengan pembilang!).",
          penyeimbang: "Tidak ada pengali luar tambahan ($4x \\, dx = du$).",
          bentukBaru: "Integral berubah menjadi: $\\int u^{-1/2} \\, du = \\frac{u^{1/2}}{1/2} + C = 2\\sqrt{u} + C = 2\\sqrt{2x^2 + 5} + C$.",
          instruksiTaktis: "Defuser, turunan dari $2x^2 + 5$ tepat $4x$. Integral dari $u^{-1/2}$ menghasilkan perkalian $2\\sqrt{u}$. Potong kabel dengan hasil 2 kali akar!"
        },
        defuserConsole: {
          keterangan: "Pilih frekuensi dekoder penjinak yang sesuai dengan antiturunan fungsi akar rasional:"
        },
        rawOptions: [
          { id: "m2_opt1", math: "2\\sqrt{2x^2 + 5} + C" },
          { id: "m2_opt2", math: "4\\sqrt{2x^2 + 5} + C" },
          { id: "m2_opt3", math: "\\sqrt{2x^2 + 5} + C" },
          { id: "m2_opt4", math: "\\frac{1}{2}\\sqrt{2x^2 + 5} + C" },
          { id: "m2_opt5", math: "\\frac{4}{3}(2x^2 + 5)^{3/2} + C" }
        ]
      },
      {
        no: 3,
        title: "Modul 3: Trigonometri Berpangkat $\\sin^n(x)\\cos(x)$",
        level: "Level 3: Substitusi Fungsi Transenden",
        soalMath: "\\int \\sin^3(x) \\cos(x) \\, dx",
        commanderBlueprint: {
          substitusiInti: "Identifikasi pasangan fungsi dan turunannya: pilih $u = \\sin(x)$.",
          diferensial: "Diferensialkan: $du = \\cos(x) \\, dx$.",
          penyeimbang: "Faktor $\\cos(x) \\, dx$ terserap langsung menjadi $du$.",
          bentukBaru: "Integral berubah menjadi: $\\int u^3 \\, du = \\frac{1}{4}u^4 + C = \\frac{1}{4}\\sin^4(x) + C$.",
          instruksiTaktis: "Defuser, fungsi sinus berpangkat 3 memiliki pendamping cosinus. Ini adalah integrasi langsung pangkat 3 menjadi seperempat pangkat 4 sinus!"
        },
        defuserConsole: {
          keterangan: "Pilih polaritas terminal trigonometri yang tepat:"
        },
        rawOptions: [
          { id: "m3_opt1", math: "\\frac{1}{4}\\sin^4(x) + C" },
          { id: "m3_opt2", math: "-\\frac{1}{4}\\cos^4(x) + C" },
          { id: "m3_opt3", math: "\\frac{1}{3}\\sin^3(x) + C" },
          { id: "m3_opt4", math: "\\sin^4(x) + C" },
          { id: "m3_opt5", math: "-\\frac{1}{4}\\sin^4(x) + C" }
        ]
      },
      {
        no: 4,
        title: "Modul 4: Rasional Logaritma Alami $\\int \\frac{f'(x)}{f(x)} \\, dx$",
        level: "Level 4: Pola Derivatif Pembilang",
        soalMath: "\\int \\frac{3x^2 + 2}{x^3 + 2x - 1} \\, dx",
        commanderBlueprint: {
          substitusiInti: "Amati bahwa pembilang tepat turunan dari penyebut: misalkan $u = x^3 + 2x - 1$.",
          diferensial: "Diferensialkan: $du = (3x^2 + 2) \\, dx$.",
          penyeimbang: "Pembilang $(3x^2 + 2)dx$ setara penuh dengan $du$.",
          bentukBaru: "Integral berubah menjadi: $\\int \\frac{1}{u} \\, du = \\ln|u| + C = \\ln|x^3 + 2x - 1| + C$.",
          instruksiTaktis: "Defuser, integran ini memenuhi pola integral logaritma natural du per u. Potong kabel bertuliskan fungsi ln mutlak penyebut!"
        },
        defuserConsole: {
          keterangan: "Pilih sakelar reaktor logaritmik yang tepat:"
        },
        rawOptions: [
          { id: "m4_opt1", math: "\\ln|x^3 + 2x - 1| + C" },
          { id: "m4_opt2", math: "\\frac{1}{(x^3 + 2x - 1)^2} + C" },
          { id: "m4_opt3", math: "\\frac{1}{2}\\ln|x^3 + 2x - 1| + C" },
          { id: "m4_opt4", math: "3\\ln|x^2 + 2| + C" },
          { id: "m4_opt5", math: "\\frac{3x^2 + 2}{(x^3 + 2x - 1)^2} + C" }
        ]
      },
      {
        no: 5,
        title: "Modul 5: Integral Tentu dengan Pergantian Batas (Grand Finale)",
        level: "Level 5: Konversi Batas Integrasi",
        soalMath: "\\int_{0}^{1} 2x(x^2 + 1)^3 \\, dx",
        commanderBlueprint: {
          substitusiInti: "Misalkan $u = x^2 + 1 \\implies du = 2x \\, dx$.",
          diferensial: "Kritis: Konversikan batas integrasi secara serentak!",
          penyeimbang: "Batas bawah: $x = 0 \\implies u = 0^2 + 1 = 1$. Batas atas: $x = 1 \\implies u = 1^2 + 1 = 2$.",
          bentukBaru: "Integral tentu baru: $\\int_{1}^{2} u^3 \\, du = \\left[ \\frac{1}{4}u^4 \\right]_{1}^{2} = \\frac{1}{4}(2^4 - 1^4) = \\frac{1}{4}(16 - 1) = \\frac{15}{4}$.",
          instruksiTaktis: "Defuser, modul terakhir adalah integral tentu! Batas x=0 dan x=1 berubah menjadi u=1 dan u=2. Hitung seperempat dikali 15! Hasil akhirnya adalah 15/4!"
        },
        defuserConsole: {
          keterangan: "Masukkan kode angka rasional akhir untuk melucuti detonator inti:"
        },
        rawOptions: [
          { id: "m5_opt1", math: "\\frac{15}{4}" },
          { id: "m5_opt2", math: "4" },
          { id: "m5_opt3", math: "\\frac{17}{4}" },
          { id: "m5_opt4", math: "\\frac{15}{2}" },
          { id: "m5_opt5", math: "\\frac{7}{2}" }
        ]
      }
    ]
  };

  // --------------------------------------------------------------------------
  // 2. STATE CONTROLLER
  // --------------------------------------------------------------------------
  let session = {
    kelas: "XII F3",
    commanderNis: "",
    commanderNama: "",
    defuserNis: "",
    defuserNama: "",
    activeModule: 1,
    activeViewMode: "dual", // "dual", "commander", "defuser"
    selectedWires: {},      // { 1: "m1_opt1", 2: "m2_opt1", ... }
    moduleDefused: {},      // { 1: true, ... }
    unlockedModules: { 1: true }, // Modul 1 terbuka sejak awal
    modulePinVerified: {},  // { 1: true, ... }
    enteredPins: {},        // { 1: "...", ... }
    shuffledOptions: {},    // { 1: [...5 items...], ... }
    strikes: 0,
    timeLeft: 900,
    isCompleted: false,
    finalScore: 0,
    correctCount: 0,
    startTime: null,
    endTime: null
  };

  let timerInterval = null;

  function loadLocalSession() {
    try {
      const saved = localStorage.getItem('mathcihuy_pair_integral_session');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && !parsed.isCompleted) {
          session = Object.assign(session, parsed);
          session.unlockedModules = session.unlockedModules || { 1: true };
          session.modulePinVerified = session.modulePinVerified || {};
          session.enteredPins = session.enteredPins || {};
          session.shuffledOptions = session.shuffledOptions || {};
        }
      }
    } catch (e) {}
  }

  function saveLocalSession() {
    try {
      localStorage.setItem('mathcihuy_pair_integral_session', JSON.stringify(session));
    } catch (e) {}
  }

  // --------------------------------------------------------------------------
  // 3. UI INITIALIZATION & MODAL CONTROL
  // --------------------------------------------------------------------------
  function openPairModal() {
    loadLocalSession();
    const modal = document.getElementById('pair-practice-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    document.body.classList.add('overflow-hidden');

    renderCurrentView();
  }

  function closePairModal() {
    const modal = document.getElementById('pair-practice-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.style.display = 'none';
    document.body.classList.remove('overflow-hidden');

    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function renderCurrentView() {
    const container = document.getElementById('pair-practice-modal-content');
    if (!container) return;

    if (!session.commanderNama || !session.defuserNama) {
      renderLobbyView(container);
    } else if (session.isCompleted) {
      renderScorecardView(container);
    } else {
      renderMissionArenaView(container);
    }

    // Render KaTeX Math across the newly injected DOM
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(container, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      } catch (e) {}
    }
  }

  // --------------------------------------------------------------------------
  // VIEW 1: LOBBY (PEMILIHAN KOMANDAN & DEFUSER OLEH KOMANDAN)
  // --------------------------------------------------------------------------
  function renderLobbyView(container) {
    const students = window.STUDENTS_DATA || {};
    const classList = ['XII F1', 'XII F2', 'XII F3', 'XII F4'];
    const currentClass = session.kelas || 'XII F3';

    let studentOptionsCommander = '';
    let studentOptionsDefuser = '';

    Object.keys(students).forEach(nis => {
      const s = students[nis];
      const sKelasNorm = String(s.kelas || '').replace(/[^0-9A-Z]/gi, '').toUpperCase();
      const curKelasNorm = String(currentClass || '').replace(/[^0-9A-Z]/gi, '').toUpperCase();
      if (sKelasNorm === curKelasNorm) {
        const selCmd = s.nama === session.commanderNama ? 'selected' : '';
        const selDef = s.nama === session.defuserNama ? 'selected' : '';
        studentOptionsCommander += `<option value="${escapeHtml(s.nama)}" data-nis="${nis}" ${selCmd}>${escapeHtml(s.nama)} (NIS: ${nis})</option>`;
        studentOptionsDefuser += `<option value="${escapeHtml(s.nama)}" data-nis="${nis}" ${selDef}>${escapeHtml(s.nama)} (NIS: ${nis})</option>`;
      }
    });

    container.innerHTML = `
      <div class="p-6 md:p-8 space-y-6 flex flex-col max-h-[92vh] overflow-y-auto custom-scroll bg-[#0E1520] text-slate-100 font-sans">
        <!-- TOP HEADER -->
        <div class="border-b border-slate-700/80 pb-4 flex items-center justify-between">
          <div class="flex items-center gap-3.5">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center text-white text-xl shadow-lg border border-amber-400/30">
              <i class="fa-solid fa-bomb"></i>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
                  <i class="fa-solid fa-user-ninja mr-1"></i> Mode Latihan Berpasangan
                </span>
                <span class="text-xs text-slate-400 font-mono font-semibold">Integral Substitusi • P26</span>
              </div>
              <h2 class="text-lg md:text-xl font-black text-white tracking-tight mt-0.5">
                Pair Practice: Commander &amp; Defuser
              </h2>
            </div>
          </div>
          <button onclick="PairPractice.closeModal()" class="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        <!-- BRIEFING KONSEPTUAL DUO -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-sky-950/40 border border-sky-500/30 space-y-2">
            <div class="flex items-center gap-2 text-sky-400 font-bold text-sm">
              <i class="fa-solid fa-headset text-base"></i> Peran 1: KOMANDAN (Commander)
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              Membuka <b>Manual Taktis Substitusi</b> ($u = g(x)$ dan $du = g'(x)dx$), menganalisis struktur rumus integran, dan memberikan instruksi verbal pemotongan kabel serta PIN gerbang kepada Defuser.
            </p>
          </div>
          <div class="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/30 space-y-2">
            <div class="flex items-center gap-2 text-rose-400 font-bold text-sm">
              <i class="fa-solid fa-scissors text-base"></i> Peran 2: OPERATOR DEFUSER
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              Mengoperasikan <b>Terminal Konsol Bom</b> dengan 5 pilihan ganda teracak. Mendengarkan arahan Komandan, memilih kabel yang tepat, dan memasukkan 3 Digit PIN Otorisasi untuk melangkah ke modul berikutnya.
            </p>
          </div>
        </div>

        <!-- FORM REGISTRASI PASANGAN OLEH KOMANDAN -->
        <div class="p-5 md:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5 shadow-inner">
          <div class="border-b border-slate-800 pb-3 flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <i class="fa-solid fa-id-card"></i> Pendaftaran Personel Misi oleh Komandan
            </span>
            <span class="text-[11px] text-slate-400">Data otomatis sinkron ke Nilai CBT Guru</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- PILIH KELAS -->
            <div>
              <label class="block text-xs font-bold uppercase text-slate-400 mb-1.5">Kelas:</label>
              <select id="pair-select-kelas" onchange="PairPractice.changeClass(this.value)" class="w-full p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs font-semibold outline-none focus:border-amber-400 transition cursor-pointer">
                ${classList.map(k => `<option value="${k}" ${k === currentClass ? 'selected' : ''}>${k}</option>`).join('')}
              </select>
            </div>

            <!-- NAMA KOMANDAN -->
            <div>
              <label class="block text-xs font-bold uppercase text-sky-400 mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-user-shield"></i> Nama Komandan:
              </label>
              <select id="pair-select-commander" class="w-full p-2.5 rounded-xl bg-slate-800 border border-sky-500/40 text-white text-xs font-semibold outline-none focus:border-sky-400 transition cursor-pointer">
                <option value="">-- Pilih Nama Komandan --</option>
                ${studentOptionsCommander}
              </select>
            </div>

            <!-- NAMA DEFUSER -->
            <div>
              <label class="block text-xs font-bold uppercase text-rose-400 mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-user-astronaut"></i> Nama Operator Defuser:
              </label>
              <select id="pair-select-defuser" class="w-full p-2.5 rounded-xl bg-slate-800 border border-rose-500/40 text-white text-xs font-semibold outline-none focus:border-rose-400 transition cursor-pointer">
                <option value="">-- Pilih Nama Defuser --</option>
                ${studentOptionsDefuser}
              </select>
            </div>
          </div>

          <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed flex items-start gap-2.5">
            <i class="fa-solid fa-circle-exclamation text-amber-400 mt-0.5 shrink-0"></i>
            <div>
              <b>Pemberitahuan Penilaian:</b> Nilai hasil latihan berpasangan ini (5 soal = 100 poin) akan <b>langsung terekam resmi ke database nilai CBT kedua siswa</b> pada pertemuan <b>P26 Matematika Peminatan</b>. Setiap modul dilengkapi 3 Digit PIN Otorisasi untuk melangkah ke modul berikutnya.
            </div>
          </div>

          <!-- TOMBOL MULAI MISI -->
          <button onclick="PairPractice.startMission()" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white font-black text-sm tracking-wide shadow-xl flex items-center justify-center gap-2 cursor-pointer transition transform active:scale-98">
            <i class="fa-solid fa-play"></i> Mulai Misi Penjinakan Bom (5 Modul Berpasangan)
          </button>
        </div>
      </div>
    `;
  }

  function changeClass(newClass) {
    session.kelas = newClass;
    session.commanderNama = "";
    session.defuserNama = "";
    saveLocalSession();
    renderCurrentView();
  }

  function startMission() {
    const kls = document.getElementById('pair-select-kelas')?.value || 'XII F3';
    const cmdSelect = document.getElementById('pair-select-commander');
    const defSelect = document.getElementById('pair-select-defuser');

    const cmdName = cmdSelect?.value;
    const defName = defSelect?.value;

    if (!cmdName || !defName) {
      alert("Komandan wajib memilih Nama Komandan dan Nama Defuser terlebih dahulu.");
      return;
    }

    if (cmdName === defName) {
      alert("Komandan dan Operator Defuser harus merupakan dua siswa yang berbeda.");
      return;
    }

    const cmdNis = cmdSelect?.options[cmdSelect.selectedIndex]?.getAttribute('data-nis') || '';
    const defNis = defSelect?.options[defSelect.selectedIndex]?.getAttribute('data-nis') || '';

    session.kelas = kls;
    session.commanderNama = cmdName;
    session.commanderNis = cmdNis;
    session.defuserNama = defName;
    session.defuserNis = defNis;
    session.activeModule = 1;
    session.selectedWires = {};
    session.moduleDefused = {};
    session.unlockedModules = { 1: true };
    session.modulePinVerified = {};
    session.enteredPins = {};
    session.strikes = 0;
    session.timeLeft = PAIR_DATA.durasiDefaultDetik;
    session.isCompleted = false;
    session.finalScore = 0;
    session.correctCount = 0;
    session.startTime = Date.now();

    // ACAK URUTAN 5 PILIHAN GANDA DI TIAP MODUL UNTUK PASANGAN SISWA INI
    const wireThemes = [
      { letter: "A", color: "sky", label: "Kabel Biru", badgeBg: "bg-sky-500/20 text-sky-300 border-sky-500/40" },
      { letter: "B", color: "rose", label: "Kabel Merah", badgeBg: "bg-rose-500/20 text-rose-300 border-rose-500/40" },
      { letter: "C", color: "amber", label: "Kabel Kuning", badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/40" },
      { letter: "D", color: "emerald", label: "Kabel Hijau", badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" },
      { letter: "E", color: "purple", label: "Kabel Ungu", badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/40" }
    ];

    session.shuffledOptions = {};
    PAIR_DATA.modulList.forEach(mod => {
      const rawOpts = [...mod.rawOptions];
      // Fisher-Yates shuffle
      for (let i = rawOpts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [rawOpts[i], rawOpts[j]] = [rawOpts[j], rawOpts[i]];
      }
      session.shuffledOptions[mod.no] = rawOpts.map((opt, idx) => {
        const theme = wireThemes[idx] || wireThemes[0];
        return {
          id: opt.id,
          math: opt.math,
          letter: theme.letter,
          color: theme.color,
          label: theme.label,
          badgeBg: theme.badgeBg
        };
      });
    });

    saveLocalSession();
    renderCurrentView();
    startTimer();
  }

  function startTimer() {
    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
      if (session.timeLeft > 0 && !session.isCompleted) {
        session.timeLeft--;
        const m = Math.floor(session.timeLeft / 60);
        const s = session.timeLeft % 60;
        const el = document.getElementById('pair-timer-display');
        if (el) {
          el.innerText = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
        }
      } else {
        clearInterval(timerInterval);
        timerInterval = null;
        alert("⏰ WAKTU HABIS! Misi penjinakan dihentikan dan jawaban akan dikirimkan ke server.");
        submitFinalMission();
      }
    }, 1000);
  }

  // --------------------------------------------------------------------------
  // VIEW 2: ARENA MISI PENJINAKAN (DUAL PANEL COMMANDER & DEFUSER)
  // --------------------------------------------------------------------------
  function renderMissionArenaView(container) {
    const curModNo = session.activeModule || 1;
    const curMod = PAIR_DATA.modulList[curModNo - 1];
    const isDefused = session.moduleDefused[curModNo] === true;
    const isPinVerified = session.modulePinVerified[curModNo] === true;
    const totalDefused = Object.values(session.moduleDefused).filter(Boolean).length;
    const m = Math.floor(session.timeLeft / 60);
    const s = session.timeLeft % 60;
    const viewMode = session.activeViewMode || 'dual';

    // Module Progress indicators with lock guards
    const moduleTabsHtml = PAIR_DATA.modulList.map(mod => {
      const isUnlocked = session.unlockedModules[mod.no] === true;
      const isPinOk = session.modulePinVerified[mod.no] === true;
      const isDef = session.moduleDefused[mod.no] === true;
      const isAct = session.activeModule === mod.no;

      let badgeIcon = `<span class="w-4 h-4 rounded-full bg-slate-700 text-[10px] inline-flex items-center justify-center">${mod.no}</span>`;
      if (!isUnlocked) {
        badgeIcon = `<i class="fa-solid fa-lock text-slate-500 text-[11px]"></i>`;
      } else if (isPinOk && isDef) {
        badgeIcon = `<i class="fa-solid fa-circle-check text-emerald-400"></i>`;
      } else if (isPinOk) {
        badgeIcon = `<i class="fa-solid fa-key text-amber-400"></i>`;
      }

      return `
        <button onclick="PairPractice.switchModule(${mod.no})" class="px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${isAct ? 'bg-amber-400 text-slate-950 shadow-md ring-2 ring-amber-400/50' : (isUnlocked ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-900/60 text-slate-600 cursor-not-allowed border border-slate-800')}">
          ${badgeIcon}
          <span>Modul ${mod.no}</span>
        </button>
      `;
    }).join('');

    // Ensure shuffled options exist
    if (!session.shuffledOptions[curModNo]) {
      const wireThemes = [
        { letter: "A", color: "sky", label: "Kabel Biru", badgeBg: "bg-sky-500/20 text-sky-300 border-sky-500/40" },
        { letter: "B", color: "rose", label: "Kabel Merah", badgeBg: "bg-rose-500/20 text-rose-300 border-rose-500/40" },
        { letter: "C", color: "amber", label: "Kabel Kuning", badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/40" },
        { letter: "D", color: "emerald", label: "Kabel Hijau", badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" },
        { letter: "E", color: "purple", label: "Kabel Ungu", badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/40" }
      ];
      session.shuffledOptions[curModNo] = curMod.rawOptions.map((opt, idx) => ({
        id: opt.id,
        math: opt.math,
        letter: wireThemes[idx].letter,
        color: wireThemes[idx].color,
        label: wireThemes[idx].label,
        badgeBg: wireThemes[idx].badgeBg
      }));
    }

    const currentOptions = session.shuffledOptions[curModNo];

    container.innerHTML = `
      <div class="flex flex-col h-full max-h-[92vh] bg-[#0A0F18] text-slate-100 font-sans overflow-hidden">
        
        <!-- TOP STATUS BAR: PAIR IDENTITY, TIMER & STRIKES -->
        <div class="px-4 md:px-6 py-3 border-b border-slate-800 bg-[#0E1520] shrink-0 flex flex-wrap items-center justify-between gap-3 shadow-md">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center text-white text-base shadow-sm">
              <i class="fa-solid fa-bomb"></i>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold text-sky-400"><i class="fa-solid fa-user-shield mr-1"></i>${escapeHtml(session.commanderNama)}</span>
                <span class="text-slate-500 text-xs">&amp;</span>
                <span class="text-xs font-bold text-rose-400"><i class="fa-solid fa-user-astronaut mr-1"></i>${escapeHtml(session.defuserNama)}</span>
              </div>
              <div class="text-[10px] text-slate-400 font-mono">${session.kelas} • Misi Integral Substitusi P26</div>
            </div>
          </div>

          <!-- Timer & Strikes -->
          <div class="flex items-center gap-3">
            <!-- Strikes Counter -->
            <div class="px-2.5 py-1 rounded-lg bg-rose-950/40 border border-rose-800/60 text-xs font-bold text-rose-300 flex items-center gap-1.5" title="Jumlah Kesalahan Pemotongan Kabel">
              <i class="fa-solid fa-triangle-exclamation text-rose-400"></i>
              <span>Korsleting: <b>${session.strikes}x</b></span>
            </div>

            <!-- Timer Display -->
            <div class="px-3.5 py-1 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-300 font-mono font-bold text-sm flex items-center gap-2 shadow-inner">
              <i class="fa-solid fa-stopwatch text-amber-400 animate-pulse"></i>
              <span id="pair-timer-display">${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}</span>
            </div>

            <!-- Exit / Close Button -->
            <button onclick="PairPractice.closeModal()" class="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        <!-- SUB HEADER: MODULE TABS & VIEW MODE SWITCHER -->
        <div class="px-4 py-2 border-b border-slate-800/80 bg-[#0C1322] shrink-0 flex flex-wrap items-center justify-between gap-2.5">
          <div class="flex items-center gap-1.5 overflow-x-auto custom-scroll py-0.5">
            ${moduleTabsHtml}
          </div>

          <!-- View Mode Toggles (Single Device / Mobile Friendly) -->
          <div class="flex items-center bg-slate-900 p-0.5 rounded-xl border border-slate-800 text-[11px] font-bold">
            <button onclick="PairPractice.setViewMode('dual')" class="px-2.5 py-1 rounded-lg transition ${viewMode === 'dual' ? 'bg-slate-700 text-white shadow-xs' : 'text-slate-400 hover:text-white'}">
              <i class="fa-solid fa-table-columns mr-1"></i> Berdampingan
            </button>
            <button onclick="PairPractice.setViewMode('commander')" class="px-2.5 py-1 rounded-lg transition ${viewMode === 'commander' ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'}">
              <i class="fa-solid fa-headset mr-1"></i> Komandan
            </button>
            <button onclick="PairPractice.setViewMode('defuser')" class="px-2.5 py-1 rounded-lg transition ${viewMode === 'defuser' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'}">
              <i class="fa-solid fa-scissors mr-1"></i> Defuser
            </button>
          </div>
        </div>

        <!-- MAIN ARENA CONTENT (SIDE-BY-SIDE OR TOGGLE VIEW) -->
        <div class="flex-1 overflow-y-auto custom-scroll p-4 md:p-6">
          <div class="grid grid-cols-1 ${viewMode === 'dual' ? 'lg:grid-cols-2' : ''} gap-6 max-w-6xl mx-auto">
            
            <!-- PANEL KIRI: LAYAR KOMANDAN (MANUAL TAKTIS) -->
            ${(viewMode === 'dual' || viewMode === 'commander') ? `
              <div class="rounded-2xl border border-sky-500/40 bg-[#0F172A] p-5 md:p-6 space-y-4 shadow-xl flex flex-col justify-between">
                <div class="space-y-4">
                  <!-- Header Komandan -->
                  <div class="border-b border-slate-800 pb-3 flex items-center justify-between">
                    <span class="px-2.5 py-1 rounded-lg text-xs font-bold bg-sky-950/60 text-sky-300 border border-sky-500/40 flex items-center gap-1.5">
                      <i class="fa-solid fa-headset text-sky-400"></i> MANUAL OPERASI KOMANDAN
                    </span>
                    <span class="text-[11px] font-mono text-slate-400">${curMod.level}</span>
                  </div>

                  <!-- Soal Tantangan -->
                  <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
                    <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Integran Target Bom Modul ${curMod.no}:</div>
                    <div class="text-xl md:text-2xl font-black text-amber-300 py-1">
                      $$${curMod.soalMath}$$
                    </div>
                  </div>

                  <!-- Langkah Dekonstruksi Substitusi -->
                  <div class="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                    <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div class="font-bold text-sky-300 flex items-center gap-1.5">
                        <i class="fa-solid fa-1 text-[10px] w-4 h-4 rounded-full bg-sky-500 text-slate-950 inline-flex items-center justify-center font-bold"></i>
                        Penentuan Fungsi Substitusi Inti ($u$):
                      </div>
                      <div class="pl-5 text-slate-200">${curMod.commanderBlueprint.substitusiInti}</div>
                    </div>

                    <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div class="font-bold text-sky-300 flex items-center gap-1.5">
                        <i class="fa-solid fa-2 text-[10px] w-4 h-4 rounded-full bg-sky-500 text-slate-950 inline-flex items-center justify-center font-bold"></i>
                        Diferensial Penyeimbang ($du$):
                      </div>
                      <div class="pl-5 text-slate-200">${curMod.commanderBlueprint.diferensial}</div>
                    </div>

                    <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div class="font-bold text-sky-300 flex items-center gap-1.5">
                        <i class="fa-solid fa-3 text-[10px] w-4 h-4 rounded-full bg-sky-500 text-slate-950 inline-flex items-center justify-center font-bold"></i>
                        Hubungan dengan Pengali Luar:
                      </div>
                      <div class="pl-5 text-slate-200">${curMod.commanderBlueprint.penyeimbang}</div>
                    </div>

                    <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div class="font-bold text-emerald-300 flex items-center gap-1.5">
                        <i class="fa-solid fa-4 text-[10px] w-4 h-4 rounded-full bg-emerald-500 text-slate-950 inline-flex items-center justify-center font-bold"></i>
                        Bentuk Integral Baru &amp; Antiturunan:
                      </div>
                      <div class="pl-5 text-slate-200">${curMod.commanderBlueprint.bentukBaru}</div>
                    </div>
                  </div>
                </div>

                <!-- Petunjuk Suara Komandan -->
                <div class="p-3.5 rounded-xl bg-gradient-to-r from-sky-950/80 to-indigo-950/80 border border-sky-500/50 space-y-1.5 mt-2">
                  <div class="text-[11px] font-bold text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
                    <i class="fa-solid fa-bullhorn text-amber-400"></i> Kalimat Instruksi untuk Disampaikan ke Defuser:
                  </div>
                  <div class="text-xs font-semibold text-white italic">
                    "${curMod.commanderBlueprint.instruksiTaktis}"
                  </div>
                </div>
              </div>
            ` : ''}

            <!-- PANEL KANAN: LAYAR DEFUSER (TERMINAL PENJINAK BOM & 5 PILIHAN GANDA) -->
            ${(viewMode === 'dual' || viewMode === 'defuser') ? `
              <div class="rounded-2xl border border-rose-500/40 bg-[#0F172A] p-5 md:p-6 space-y-4 shadow-xl flex flex-col justify-between">
                <div class="space-y-4">
                  <!-- Header Defuser -->
                  <div class="border-b border-slate-800 pb-3 flex items-center justify-between">
                    <span class="px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-950/60 text-rose-300 border border-rose-500/40 flex items-center gap-1.5">
                      <i class="fa-solid fa-scissors text-rose-400"></i> TERMINAL EKSEKUSI DEFUSER
                    </span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold ${isDefused ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'}">
                      ${isDefused ? '✓ MODUL DEFUSED' : '⚠️ DETONATOR ACTIVE'}
                    </span>
                  </div>

                  <!-- Integran Monitor -->
                  <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Target Integran:</div>
                    <div class="text-lg font-black text-slate-100 text-center py-0.5">
                      $$${curMod.soalMath}$$
                    </div>
                  </div>

                  <div class="text-xs text-slate-300 font-medium">
                    ${curMod.defuserConsole.keterangan}
                  </div>

                  <!-- 5 OPSI KABEL PENJINAK (TERACAK SETIAP SISWA/SESI) -->
                  <div class="space-y-2">
                    ${currentOptions.map(wire => {
                      const isSel = session.selectedWires[curMod.no] === wire.id;
                      let borderClass = 'border-slate-800 hover:border-slate-600 bg-slate-900/60';
                      if (isSel) {
                        borderClass = 'border-amber-400 bg-amber-500/10 shadow-md ring-1 ring-amber-400';
                      }

                      return `
                        <label class="p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition ${borderClass}">
                          <div class="flex items-center gap-2.5 shrink-0">
                            <input type="radio" name="wire_opt_${curMod.no}" value="${wire.id}" ${isSel ? 'checked' : ''} onchange="PairPractice.selectWire(${curMod.no}, '${wire.id}')" class="w-4 h-4 text-amber-500 cursor-pointer">
                            <span class="w-6 h-6 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center">${wire.letter}</span>
                            <span class="text-xs font-bold text-slate-300 hidden sm:inline">${wire.label}:</span>
                          </div>
                          <div class="text-sm font-black text-amber-300 font-mono text-right overflow-x-auto">
                            $$${wire.math}$$
                          </div>
                        </label>
                      `;
                    }).join('')}
                  </div>

                  <!-- Tombol Eksekusi Pemotongan Kabel -->
                  <div class="pt-1 space-y-2">
                    <button onclick="PairPractice.executeDefusal(${curMod.no})" ${isDefused ? 'disabled' : ''} class="w-full min-h-[44px] py-2.5 rounded-xl ${isDefused ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700' : 'bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-black cursor-pointer shadow-lg active:scale-98'} text-xs sm:text-sm flex items-center justify-center gap-2 transition">
                      <i class="fa-solid fa-bolt"></i> ${isDefused ? 'Kabel Modul Ini Telah Berhasil Dijinakkan!' : 'Eksekusi Pemotongan Kabel Terpilih'}
                    </button>

                    ${isDefused ? `
                      <div class="text-center text-xs text-emerald-400 font-bold flex items-center justify-center gap-1.5">
                        <i class="fa-solid fa-circle-check"></i> Sinyal kabel terputus aman! Masukkan 3 Digit PIN di bawah untuk melangkah ke modul berikutnya.
                      </div>
                    ` : ''}
                  </div>
                </div>

                <!-- KOTAK OTORISASI 3 DIGIT PIN UNTUK MELANGKAH SELANJUTNYA -->
                <div class="mt-4 p-4 rounded-2xl border ${isPinVerified ? 'border-emerald-500/50 bg-emerald-950/20' : 'border-amber-500/40 bg-slate-900/90'} space-y-3">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <div class="w-7 h-7 rounded-lg ${isPinVerified ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'} flex items-center justify-center font-bold text-xs">
                        <i class="fa-solid ${isPinVerified ? 'fa-lock-open' : 'fa-key'}"></i>
                      </div>
                      <div>
                        <div class="text-xs font-bold ${isPinVerified ? 'text-emerald-300' : 'text-amber-300'} uppercase tracking-wide">
                          Otorisasi 3 Digit PIN Gerbang • Modul ${curModNo}
                        </div>
                        <div class="text-[10px] text-slate-400">
                          ${curModNo < 5 ? `Wajib memasukkan 3 digit PIN yang benar untuk melangkah ke Modul ${curModNo + 1}` : `Wajib memasukkan 3 digit PIN final untuk membuka pengiriman nilai CBT`}
                        </div>
                      </div>
                    </div>
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${isPinVerified ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'}">
                      ${isPinVerified ? '✓ GERBANG TERBUKA' : '🔒 TERKUNCI'}
                    </span>
                  </div>

                  <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
                    <div class="relative flex-1">
                      <input type="text" id="pair-pin-input-${curModNo}" maxlength="3" pattern="[0-9]*" inputmode="numeric"
                        placeholder="Masukkan 3 Digit PIN Tim (Contoh: 192)"
                        value="${session.enteredPins[curModNo] || ''}"
                        ${isPinVerified ? 'disabled' : ''}
                        class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border ${isPinVerified ? 'border-emerald-500/50 text-emerald-300' : 'border-slate-700 text-white'} text-sm font-mono font-bold tracking-widest text-center outline-none focus:border-amber-400 transition placeholder:font-sans placeholder:tracking-normal placeholder:text-slate-500">
                    </div>
                    <button onclick="PairPractice.validateAndProceed(${curModNo})" ${isPinVerified ? 'disabled' : ''}
                      class="px-5 py-2.5 rounded-xl ${isPinVerified ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-500/40 cursor-default' : 'bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 hover:from-amber-400 hover:to-emerald-300 text-slate-950 cursor-pointer shadow-lg active:scale-95'} font-black text-xs flex items-center justify-center gap-2 transition shrink-0">
                      <i class="fa-solid ${isPinVerified ? 'fa-circle-check' : 'fa-unlock'}"></i>
                      ${isPinVerified ? 'Gerbang Berhasil Dibuka' : (curModNo < 5 ? `Uji PIN & Lanjut Modul ${curModNo + 1}` : 'Uji PIN Otorisasi Final')}
                    </button>
                  </div>
                </div>

              </div>
            ` : ''}

          </div>
        </div>

        <!-- BOTTOM CONTROLLER & FINISH BUTTON -->
        <div class="p-3.5 sm:p-4 border-t border-slate-800 bg-[#0F172A] shrink-0 flex flex-wrap items-center justify-between gap-3 shadow-lg">
          <div class="text-xs font-semibold text-slate-400 flex items-center gap-2">
            <span>Kemajuan Misi:</span>
            <span class="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
              ${totalDefused} dari 5 Modul Terjinakkan
            </span>
          </div>

          <div class="flex items-center gap-2.5">
            ${curModNo > 1 ? `
              <button onclick="PairPractice.switchModule(${curModNo - 1})" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-1.5 cursor-pointer transition">
                <i class="fa-solid fa-arrow-left"></i> Sebelumnya
              </button>
            ` : ''}

            ${curModNo < 5 ? `
              <button onclick="PairPractice.switchModule(${curModNo + 1})" class="px-4 py-2 rounded-xl ${session.unlockedModules[curModNo + 1] ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer' : 'bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800'} font-bold text-xs flex items-center gap-1.5 transition">
                ${session.unlockedModules[curModNo + 1] ? 'Selanjutnya <i class="fa-solid fa-arrow-right"></i>' : '<i class="fa-solid fa-lock text-slate-500 mr-1"></i> Terkunci'}
              </button>
            ` : ''}

            <button onclick="PairPractice.submitFinalMission()" class="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center gap-2 cursor-pointer shadow-md transition transform active:scale-95">
              <i class="fa-solid fa-flag-checkered"></i> Kirim Misi &amp; Catat Nilai CBT
            </button>
          </div>
        </div>

      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 4. INTERACTION HANDLERS & PIN GATEWAY VALIDATION
  // --------------------------------------------------------------------------
  function switchModule(targetModNo) {
    if (targetModNo < 1 || targetModNo > 5) return;
    if (!session.unlockedModules[targetModNo]) {
      alert(`🔒 Modul ${targetModNo} masih terkunci!\n\nMasukkan 3 Digit PIN yang benar pada soal sebelumnya untuk melangkah ke modul ini.`);
      return;
    }
    session.activeModule = targetModNo;
    saveLocalSession();
    renderCurrentView();
  }

  function setViewMode(mode) {
    session.activeViewMode = mode;
    saveLocalSession();
    renderCurrentView();
  }

  function selectWire(modNo, wireId) {
    session.selectedWires[modNo] = wireId;
    saveLocalSession();
    renderCurrentView();
  }

  async function executeDefusal(modNo) {
    const chosen = session.selectedWires[modNo];
    if (!chosen) {
      alert("Defuser belum memilih kabel penjinak untuk dipotong. Diskusikan dengan Komandan terlebih dahulu!");
      return;
    }

    // Validasi pemotongan kabel ke Cloudflare Serverless Backend
    try {
      const res = await fetch('/api/pair-practice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'validate_module',
          moduleNo: modNo,
          answer: chosen
        })
      });

      if (!res.ok) {
        throw new Error('Gagal menghubungi server');
      }

      const result = await res.json();
      if (result.valid) {
        session.moduleDefused[modNo] = true;
        saveLocalSession();
        renderCurrentView();
        alert(`✅ KABEL BERHASIL DIPUTUS!\n\nDetonator Modul ${modNo} berhasil dijinakkan tanpa korsleting!\nMasukkan 3 Digit PIN untuk melangkah ke modul berikutnya.`);
      } else {
        session.strikes += 1;
        saveLocalSession();
        renderCurrentView();
        alert(`💥 KORSLETING LISTRIK (Strikes ${session.strikes}x)!\n\nKabel yang Anda potong keliru. Amati kembali manual langkah substitusi bersama Komandan!`);
      }
    } catch (e) {
      alert("Terjadi gangguan koneksi ke server saat validasi kabel. Silakan coba kembali.");
    }
  }

  // VALIDASI 3 DIGIT PIN UNTUK MELANGKAH KE SOAL BERIKUTNYA
  async function validateAndProceed(modNo) {
    const input = document.getElementById(`pair-pin-input-${modNo}`);
    const pinVal = String(input?.value || '').trim();
    if (!pinVal || pinVal.length < 3) {
      alert("Silakan masukkan 3 Digit PIN Otorisasi terlebih dahulu (Contoh: 192).");
      return;
    }

    try {
      const res = await fetch('/api/pair-practice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'validate_pin',
          moduleNo: modNo,
          pin: pinVal
        })
      });

      if (!res.ok) {
        throw new Error('Gagal menghubungi server validasi PIN');
      }

      const data = await res.json();
      if (data.valid) {
        session.modulePinVerified[modNo] = true;
        session.enteredPins[modNo] = pinVal;

        if (modNo < 5) {
          session.unlockedModules[modNo + 1] = true;
          session.activeModule = modNo + 1;
          saveLocalSession();
          renderCurrentView();
          alert(`✅ PIN 3 DIGIT TERVERIFIKASI!\n\nGerbang Modul ${modNo + 1} Berhasil Dibuka.\nMelangkah ke soal berikutnya!`);
        } else {
          session.unlockedModules[5] = true;
          saveLocalSession();
          renderCurrentView();
          alert(`🎉 PIN 3 DIGIT FINAL TERVERIFIKASI!\n\nSeluruh 5 gerbang modul berhasil diotorisasi.\nSilakan klik tombol 'Kirim Misi & Catat Nilai CBT' untuk menyimpan nilai resmi ke rapor!`);
        }
      } else {
        alert(`❌ PIN 3 DIGIT SALAH!\n\nPIN "${pinVal}" tidak cocok untuk Modul ${modNo}.\nDiskusikan dekonstruksi substitusi dengan Komandan atau minta verifikasi otorisasi dari Guru.`);
        if (input) {
          input.value = '';
          input.focus();
        }
      }
    } catch (err) {
      alert("Terjadi kendala jaringan saat memverifikasi PIN. Silakan coba kembali.");
    }
  }

  // --------------------------------------------------------------------------
  // 5. FINAL SUBMISSION & DIRECT CBT GRADE RECORDING (MASUK KE NILAI)
  // --------------------------------------------------------------------------
  async function submitFinalMission() {
    const totalDefused = Object.values(session.moduleDefused).filter(Boolean).length;
    if (totalDefused < 5 && session.timeLeft > 0) {
      if (!confirm(`Baru ${totalDefused} dari 5 modul yang berhasil dijinakkan. Yakin ingin menyelesaikan operasi dan mencatat nilai sekarang?`)) {
        return;
      }
    }

    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }

    session.endTime = Date.now();
    const duration = Math.min(PAIR_DATA.durasiDefaultDetik, Math.round(((session.endTime - (session.startTime || session.endTime)) / 1000))) || 300;

    // 1. Kirim ke Endpoint Cloudflare D1 Serverless Backend (/api/pair-practice)
    let serverRes = null;
    try {
      const res = await fetch('/api/pair-practice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'submit_pair_grade',
          commander_nis: session.commanderNis,
          commander_nama: session.commanderNama,
          defuser_nis: session.defuserNis,
          defuser_nama: session.defuserNama,
          kelas: session.kelas,
          answers: session.selectedWires,
          durasi_detik: duration
        })
      });

      if (res.ok) {
        serverRes = await res.json();
      }
    } catch (e) {
      console.warn("Backend pair grade submit error:", e);
    }

    // Hitung perolehan
    if (serverRes && serverRes.success) {
      session.finalScore = serverRes.skor;
      session.correctCount = serverRes.jumlah_benar;
    } else {
      session.correctCount = totalDefused;
      session.finalScore = totalDefused * 20;
    }

    // 2. Simpan di Local Storage CBT History & Submission Record
    try {
      const localHist = JSON.parse(localStorage.getItem('mathcihuy_cbt_history') || '[]');
      const entryCmd = {
        nis: session.commanderNis,
        nama: session.commanderNama,
        kelas: session.kelas,
        mapel: 'minat',
        kode_pertemuan: 'P26',
        skor: session.finalScore,
        jumlah_soal: 5,
        jumlah_benar: session.correctCount,
        jumlah_salah: 5 - session.correctCount,
        durasi_detik: duration,
        waktu_submit: new Date().toISOString()
      };
      const entryDef = {
        nis: session.defuserNis,
        nama: session.defuserNama,
        kelas: session.kelas,
        mapel: 'minat',
        kode_pertemuan: 'P26',
        skor: session.finalScore,
        jumlah_soal: 5,
        jumlah_benar: session.correctCount,
        jumlah_salah: 5 - session.correctCount,
        durasi_detik: duration,
        waktu_submit: new Date().toISOString()
      };
      localHist.push(entryCmd);
      localHist.push(entryDef);
      localStorage.setItem('mathcihuy_cbt_history', JSON.stringify(localHist));

      // Tandai P26 sebagai selesai
      const completed = JSON.parse(localStorage.getItem('cbt_completed_submissions') || '{}');
      completed['minat_P26'] = true;
      localStorage.setItem('cbt_completed_submissions', JSON.stringify(completed));
    } catch(e) {}

    session.isCompleted = true;
    saveLocalSession();

    renderCurrentView();
  }

  // --------------------------------------------------------------------------
  // VIEW 3: OFFICIAL GIS 2 SERPONG PAIR PRACTICE SCORECARD & CERTIFICATE
  // --------------------------------------------------------------------------
  function renderScorecardView(container) {
    const formattedDate = new Date().toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const isPerfect = session.finalScore === 100;

    container.innerHTML = `
      <div id="pair-certificate-container" class="p-5 sm:p-8 space-y-6 flex flex-col max-h-[92vh] overflow-y-auto custom-scroll bg-white text-slate-800 font-sans">
        <!-- TOP TOOLBAR (NO PRINT) -->
        <div class="border-b pb-3 flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-300 flex items-center gap-1.5">
              <i class="fa-solid fa-graduation-cap text-emerald-600"></i> Dokumen Resmi Nilai Pasangan GIS
            </span>
            <span class="text-xs text-slate-500">TP 2026/2027 • Semester Ganjil</span>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="PairPractice.printCertificate()" class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer transition shadow-xs">
              <i class="fa-solid fa-print"></i> Cetak Dokumen (PDF)
            </button>
            <button onclick="PairPractice.copyResult()" class="px-3 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer transition">
              <i class="fa-solid fa-copy"></i> Salin Rekap
            </button>
            <button onclick="PairPractice.closeModal()" class="w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer">
              <i class="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
        </div>

        <!-- KOP RESMI DOKUMEN SEKOLAH GIS 2 SERPONG -->
        <div class="flex items-center gap-4 border-b-2 border-slate-900 pb-3">
          <img src="assets/gis_official_logo.png" alt="Logo Resmi GIS" class="h-20 w-auto object-contain shrink-0">
          <div class="flex-1 text-center">
            <div class="text-[11px] font-bold uppercase tracking-wider text-slate-600">YAYASAN ASRAMA PELAJAR ISLAM (YAPI) CABANG BANTEN</div>
            <h1 class="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug">SMA GLOBAL ISLAMIC SCHOOL 2 SERPONG</h1>
            <div class="text-xs font-bold text-indigo-900 uppercase tracking-wide mt-0.5">LEMBAR HASIL PENILAIAN LATIHAN BERPASANGAN (PAIR PRACTICE)</div>
            <div class="text-[10px] text-slate-500 mt-0.5">
              Jl. Raya Puspiptek Buaran, Serpong - Kota Tangerang Selatan, Banten 15310 • Website: www.global-islamic.com
            </div>
          </div>
        </div>

        <!-- JUDUL SERTIFIKAT / HASIL -->
        <div class="text-center space-y-1 py-1">
          <h2 class="text-base sm:text-lg font-black uppercase tracking-tight text-slate-900">
            RAPOR CAPAIAN TAKTIS: COMMANDER &amp; DEFUSER (INTEGRAL SUBSTITUSI)
          </h2>
          <div class="text-xs text-slate-600 font-medium">
            Mata Pelajaran: <b>Matematika Peminatan (Fase F - Kelas XII)</b> • Kode Pertemuan: <b>P26 (Metode Substitusi)</b>
          </div>
        </div>

        <!-- METADATA TABEL PASANGAN -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-300 text-xs text-slate-700">
          <div class="space-y-1.5 border-r border-slate-200 pr-2">
            <div><span class="font-bold text-slate-900 inline-block w-28">Komandan Misi:</span> <b>${escapeHtml(session.commanderNama)}</b></div>
            <div><span class="font-bold text-slate-900 inline-block w-28">NIS Komandan:</span> <span class="font-mono">${session.commanderNis || '-'}</span></div>
            <div><span class="font-bold text-slate-900 inline-block w-28">Peran Taktis:</span> <span class="text-sky-700 font-semibold">Analis Manual &amp; Navigator $u$-Substitution</span></div>
            <div><span class="font-bold text-slate-900 inline-block w-28">Kelas:</span> <b>${session.kelas}</b></div>
          </div>
          <div class="space-y-1.5 pl-2">
            <div><span class="font-bold text-slate-900 inline-block w-28">Operator Defuser:</span> <b>${escapeHtml(session.defuserNama)}</b></div>
            <div><span class="font-bold text-slate-900 inline-block w-28">NIS Defuser:</span> <span class="font-mono">${session.defuserNis || '-'}</span></div>
            <div><span class="font-bold text-slate-900 inline-block w-28">Peran Taktis:</span> <span class="text-rose-700 font-semibold">Operator Penjinak &amp; Eksekutor Kabel</span></div>
            <div><span class="font-bold text-slate-900 inline-block w-28">Status Database:</span> <span class="text-emerald-700 font-bold">✓ Tersimpan Resmi ke D1 CBT Guru</span></div>
          </div>
        </div>

        <!-- KOTAK SKOR AKHIR & PREDIKAT -->
        <div class="p-4 rounded-2xl border text-center space-y-2 ${isPerfect ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950' : 'bg-indigo-50/70 border-indigo-300 text-indigo-950'}">
          <div class="text-xs uppercase font-bold tracking-wider text-slate-600">Perolehan Nilai Kolaborasi Pasangan:</div>
          <div class="text-4xl sm:text-5xl font-black font-mono tracking-tight ${isPerfect ? 'text-emerald-700' : 'text-indigo-800'}">
            ${session.finalScore} <span class="text-lg font-sans text-slate-500 font-normal">/ 100</span>
          </div>
          <div class="text-xs font-bold ${isPerfect ? 'text-emerald-800' : 'text-indigo-800'}">
            ${isPerfect ? '🌟 Predikat: Sangat Mahir (Tuntas Sempurna 100 • Duo Taktis Terbaik)' : (session.finalScore >= 80 ? '🎯 Predikat: Mahir (Tuntas KKM)' : '📚 Predikat: Perlu Penguatan')}
          </div>
          <div class="text-[11px] text-slate-500">
            Total Modul Terjinakkan: <b>${session.correctCount} dari 5 Modul</b> • Kesalahan Percobaan: <b>${session.strikes}x</b>
          </div>
        </div>

        <!-- TABEL RINCIAN 5 MODUL SOAL -->
        <div class="space-y-2">
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
            <i class="fa-solid fa-list-check text-indigo-600"></i> Rincian Capaian 5 Modul Integral Substitusi:
          </h3>
          <div class="border border-slate-300 rounded-xl overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-100 text-slate-700 border-b border-slate-300">
                <tr>
                  <th class="p-2.5 text-center w-16">Modul</th>
                  <th class="p-2.5">Materi &amp; Indikator Kompetensi</th>
                  <th class="p-2.5 text-center w-28">Status PIN</th>
                  <th class="p-2.5 text-center w-20">Poin</th>
                  <th class="p-2.5 text-center w-28">Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                ${PAIR_DATA.modulList.map(mod => {
                  const isDef = session.moduleDefused[mod.no] === true;
                  const isPinOk = session.modulePinVerified[mod.no] === true;
                  return `
                    <tr class="${isDef ? 'bg-emerald-50/20' : 'bg-rose-50/20'}">
                      <td class="p-2.5 font-bold text-center text-slate-700">No. ${mod.no}</td>
                      <td class="p-2.5 text-slate-800">
                        <div class="font-bold text-slate-900">${mod.title}</div>
                        <div class="text-[10px] text-slate-500 font-medium">${mod.level}</div>
                      </td>
                      <td class="p-2.5 font-mono font-bold text-center text-slate-800 bg-slate-50/50">
                        ${isPinOk ? '<span class="text-emerald-700 font-bold"><i class="fa-solid fa-key"></i> Terotorisasi</span>' : '<span class="text-slate-400">-</span>'}
                      </td>
                      <td class="p-2.5 font-mono font-bold text-center ${isDef ? 'text-emerald-700' : 'text-rose-700'}">${isDef ? '20' : '0'}</td>
                      <td class="p-2.5 text-center">
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold ${isDef ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-rose-100 text-rose-800 border border-rose-300'}">
                          ${isDef ? '✓ Terjinakkan' : '✗ Belum Tuntas'}
                        </span>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- PENGESAHAN RESMI (TANDA TANGAN & STEMPEL DINAS GIS) -->
        <div class="pt-6 border-t border-slate-300 grid grid-cols-2 gap-6 text-center text-xs text-slate-800">
          <div>
            <div class="font-medium text-slate-600">Mengetahui,</div>
            <div class="font-bold">Kepala SMA Global Islamic School 2 Serpong</div>
            <div class="h-20 flex items-center justify-center my-1.5">
              <img src="assets/perfect_stamp_sig.png" alt="Stempel &amp; TTD Kepala Sekolah" class="h-20 w-auto object-contain">
            </div>
            <div class="font-bold underline text-slate-900">Dwi Kurniawati, S.Pd., Gr.</div>
            <div class="text-[10px] text-slate-500 font-mono">Kepala Sekolah</div>
          </div>
          <div>
            <div class="font-medium text-slate-600">Tangerang Selatan, ${formattedDate}</div>
            <div class="font-bold">Guru Pengampu Matematika</div>
            <div class="h-20 flex items-center justify-center my-1.5">
              <img src="assets/sig_guru_perfect.png" alt="TTD Guru Pengampu" class="h-16 w-auto object-contain">
            </div>
            <div class="font-bold underline text-slate-900">Muhammad Ardiansyah, S.Pd.Gr.</div>
            <div class="text-[10px] text-slate-500 font-mono">Guru Pengampu Fase F</div>
          </div>
        </div>

        <!-- ACTION BUTTONS -->
        <div class="border-t pt-4 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button onclick="PairPractice.resetSession()" class="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition">
            <i class="fa-solid fa-rotate-left"></i> Mulai Misi Pasangan Baru
          </button>
          <button onclick="PairPractice.closeModal()" class="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer transition">
            <i class="fa-solid fa-check"></i> Selesai
          </button>
        </div>
      </div>
    `;
  }

  function resetSession() {
    session.commanderNama = "";
    session.commanderNis = "";
    session.defuserNama = "";
    session.defuserNis = "";
    session.activeModule = 1;
    session.selectedWires = {};
    session.moduleDefused = {};
    session.unlockedModules = { 1: true };
    session.modulePinVerified = {};
    session.enteredPins = {};
    session.shuffledOptions = {};
    session.strikes = 0;
    session.timeLeft = PAIR_DATA.durasiDefaultDetik;
    session.isCompleted = false;
    session.finalScore = 0;
    session.correctCount = 0;
    saveLocalSession();
    renderCurrentView();
  }

  function printCertificate() {
    window.print();
  }

  function copyResult() {
    const text = `=== HASIL PAIR PRACTICE: COMMANDER & DEFUSER ===\n` +
      `Mata Pelajaran: Matematika Peminatan (P26: Integral Substitusi)\n` +
      `Kelas: ${session.kelas}\n` +
      `Komandan: ${session.commanderNama} (NIS: ${session.commanderNis || '-'})\n` +
      `Defuser: ${session.defuserNama} (NIS: ${session.defuserNis || '-'})\n` +
      `Skor Akhir: ${session.finalScore} / 100\n` +
      `Modul Terjinakkan: ${session.correctCount} / 5\n` +
      `Status: Terverifikasi D1 Server CBT Guru\n` +
      `Waktu: ${new Date().toLocaleString('id-ID')}\n` +
      `Portal: https://mathcihuy.pages.dev`;

    navigator.clipboard.writeText(text).then(() => {
      alert("📋 Rekap capaian pasangan berhasil disalin ke clipboard!");
    }).catch(() => {
      prompt("Salin teks berikut:", text);
    });
  }

  function escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --------------------------------------------------------------------------
  // EXPOSE GLOBAL API
  // --------------------------------------------------------------------------
  window.PairPractice = {
    data: PAIR_DATA,
    session: session,
    openModal: openPairModal,
    closeModal: closePairModal,
    changeClass: changeClass,
    startMission: startMission,
    switchModule: switchModule,
    setViewMode: setViewMode,
    selectWire: selectWire,
    executeDefusal: executeDefusal,
    validateAndProceed: validateAndProceed,
    submitFinalMission: submitFinalMission,
    resetSession: resetSession,
    printCertificate: printCertificate,
    copyResult: copyResult
  };

  // Auto init
  loadLocalSession();

})();
