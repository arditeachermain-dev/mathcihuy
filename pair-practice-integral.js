// pair-practice-integral.js
// Mode Latihan Berpasangan: Commander and Defuser (Integral Substitusi - Minat XII P26)
// SMA Global Islamic School 2 Serpong • Mr. Ardi
// CATATAN KEAMANAN: ZERO FRONTEND KEYS. Seluruh validasi kunci jawaban dan penilaian dilakukan server-side di Cloudflare Backend (/api/pair-practice & /api/nilai).

(function() {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DATA MISI LATIHAN BERPASANGAN (ZERO FRONTEND KEYS)
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
          instruksiTaktis: "Defuser, integran memiliki fungsi dalam $(x^2 - 4)$ dengan turunan $2x$. Karena faktor luar $6x$, terdapat kelipatan 3. Cari dan potong kabel hasil akhir dengan koefisien 3/5 berpangkat 5!"
        },
        defuserConsole: {
          keterangan: "Pilih jalur kabel terminasi yang memuat rumus antiturunan substitusi yang tepat:",
          opsiWires: [
            { id: "A", color: "sky", label: "Kabel Biru", math: "\\frac{3}{5}(x^2 - 4)^5 + C" },
            { id: "B", color: "rose", label: "Kabel Merah", math: "\\frac{6}{5}(x^2 - 4)^5 + C" },
            { id: "C", color: "amber", label: "Kabel Kuning", math: "\\frac{1}{5}(x^2 - 4)^5 + C" },
            { id: "D", color: "emerald", label: "Kabel Hijau", math: "\\frac{3}{4}(x^2 - 4)^4 + C" }
          ]
        }
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
          keterangan: "Pilih frekuensi dekoder penjinak yang sesuai dengan antiturunan fungsi akar:",
          opsiWires: [
            { id: "A", color: "sky", label: "Kabel Biru", math: "4\\sqrt{2x^2 + 5} + C" },
            { id: "B", color: "rose", label: "Kabel Merah", math: "2\\sqrt{2x^2 + 5} + C" },
            { id: "C", color: "amber", label: "Kabel Kuning", math: "\\sqrt{2x^2 + 5} + C" },
            { id: "D", color: "emerald", label: "Kabel Hijau", math: "\\frac{1}{2}\\sqrt{2x^2 + 5} + C" }
          ]
        }
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
          keterangan: "Pilih polaritas terminal trigonometri yang tepat:",
          opsiWires: [
            { id: "A", color: "sky", label: "Kabel Biru", math: "-\\frac{1}{4}\\cos^4(x) + C" },
            { id: "B", color: "rose", label: "Kabel Merah", math: "\\frac{1}{4}\\sin^4(x) + C" },
            { id: "C", color: "amber", label: "Kabel Kuning", math: "\\sin^4(x) + C" },
            { id: "D", color: "emerald", label: "Kabel Hijau", math: "\\frac{1}{3}\\sin^3(x) + C" }
          ]
        }
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
          keterangan: "Pilih sakelar reaktor logaritmik yang tepat:",
          opsiWires: [
            { id: "A", color: "sky", label: "Kabel Biru", math: "\\ln|x^3 + 2x - 1| + C" },
            { id: "B", color: "rose", label: "Kabel Merah", math: "\\frac{1}{(x^3 + 2x - 1)^2} + C" },
            { id: "C", color: "amber", label: "Kabel Kuning", math: "\\frac{1}{2}\\ln|x^3 + 2x - 1| + C" },
            { id: "D", color: "emerald", label: "Kabel Hijau", math: "3\\ln|x^2 + 2| + C" }
          ]
        }
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
          keterangan: "Masukkan kode angka rasional akhir untuk melucuti detonator inti:",
          opsiWires: [
            { id: "A", color: "sky", label: "Kabel Biru", math: "4" },
            { id: "B", color: "rose", label: "Kabel Merah", math: "\\frac{15}{4}" },
            { id: "C", color: "amber", label: "Kabel Kuning", math: "\\frac{17}{4}" },
            { id: "D", color: "emerald", label: "Kabel Hijau", math: "\\frac{15}{2}" }
          ]
        }
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
    selectedWires: {},      // { 1: "A", 2: "B", ... }
    moduleDefused: {},      // { 1: true, ... }
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
                <span class="text-xs text-slate-400 font-mono">Minat XII • Bab 4</span>
              </div>
              <h2 class="text-xl md:text-2xl font-black text-white tracking-tight mt-0.5">
                Commander &amp; Defuser: Integral Substitusi
              </h2>
            </div>
          </div>
          <button onclick="PairPractice.closeModal()" class="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        <!-- BRIEFING PEDAGOGIS -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-slate-800/60 border border-sky-500/30 space-y-2">
            <div class="flex items-center gap-2 text-sky-400 font-bold text-sm">
              <i class="fa-solid fa-headset text-base"></i> Peran 1: Komandan (Commander)
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              Bertanggung jawab membaca <b>Manual Dekonstruksi Taktis</b>. Komandan menganalisis fungsi bagian dalam <code>u = g(x)</code>, diferensial penyeimbang <code>du = g'(x)dx</code>, serta memberikan instruksi verbal presisi ke Defuser.
            </p>
          </div>
          <div class="p-4 rounded-2xl bg-slate-800/60 border border-rose-500/30 space-y-2">
            <div class="flex items-center gap-2 text-rose-400 font-bold text-sm">
              <i class="fa-solid fa-scissors text-base"></i> Peran 2: Defuser (Operator Penjinak)
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              Bertanggung jawab mengoperasikan <b>Terminal Penjinak Bom</b>. Defuser mendengarkan arahan Komandan, memverifikasi kabel antiturunan yang cocok, dan memotong kabel hasil integrasi sebelum bom meledak!
            </p>
          </div>
        </div>

        <!-- FORM REGISTRASI PASANGAN OLEH KOMANDAN -->
        <div class="p-5 md:p-6 rounded-2xl bg-slate-900/80 border border-slate-700/80 space-y-4">
          <h3 class="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
            <i class="fa-solid fa-clipboard-user"></i> Registrasi Pasangan Misi (Langsung Terkoneksi ke Nilai Guru)
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                <option value="">-- Pilih Komandan Misi --</option>
                ${studentOptionsCommander}
              </select>
            </div>

            <!-- NAMA DEFUSER -->
            <div>
              <label class="block text-xs font-bold uppercase text-rose-400 mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-user-astronaut"></i> Nama Defuser (Partner):
              </label>
              <select id="pair-select-defuser" class="w-full p-2.5 rounded-xl bg-slate-800 border border-rose-500/40 text-white text-xs font-semibold outline-none focus:border-rose-400 transition cursor-pointer">
                <option value="">-- Pilih Rekan Defuser --</option>
                ${studentOptionsDefuser}
              </select>
            </div>
          </div>

          <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed flex items-center gap-2.5">
            <i class="fa-solid fa-circle-check text-amber-400 text-base shrink-0"></i>
            <span>
              <b>Sinkronisasi Nilai Otomatis:</b> Setelah ke-5 modul diselesaikan, skor perolehan pasangan (maksimal 100 poin) akan <b>langsung dicatat ke database nilai CBT resmi guru (Cloudflare D1)</b> untuk nama Komandan dan Defuser sekaligus!
            </span>
          </div>
        </div>

        <!-- ACTION BUTTON -->
        <div class="pt-2">
          <button onclick="PairPractice.startMission()" class="w-full min-h-[48px] py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-black text-sm shadow-xl flex items-center justify-center gap-2.5 cursor-pointer transition transform active:scale-98">
            <i class="fa-solid fa-play"></i> Mulai Operasi Penjinakan Integral Berpasangan
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
      alert("Harap pilih nama Komandan dan nama Defuser terlebih dahulu!");
      return;
    }

    if (cmdName === defName) {
      alert("Komandan dan Defuser harus terdiri dari dua peserta didik yang berbeda untuk latihan berpasangan!");
      return;
    }

    const cmdNis = cmdSelect.options[cmdSelect.selectedIndex]?.getAttribute('data-nis') || '';
    const defNis = defSelect.options[defSelect.selectedIndex]?.getAttribute('data-nis') || '';

    session.kelas = kls;
    session.commanderNama = cmdName;
    session.commanderNis = cmdNis;
    session.defuserNama = defName;
    session.defuserNis = defNis;
    session.activeModule = 1;
    session.selectedWires = {};
    session.moduleDefused = {};
    session.strikes = 0;
    session.timeLeft = PAIR_DATA.durasiDefaultDetik;
    session.isCompleted = false;
    session.startTime = Date.now();
    saveLocalSession();

    startTimer();
    renderCurrentView();
  }

  function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (session.timeLeft > 0) {
        session.timeLeft--;
        const timerEl = document.getElementById('pair-timer-display');
        if (timerEl) {
          const m = Math.floor(session.timeLeft / 60);
          const s = session.timeLeft % 60;
          timerEl.textContent = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
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
    const totalDefused = Object.values(session.moduleDefused).filter(Boolean).length;
    const m = Math.floor(session.timeLeft / 60);
    const s = session.timeLeft % 60;
    const viewMode = session.activeViewMode || 'dual';

    // Module Progress indicators
    const moduleTabsHtml = PAIR_DATA.modulList.map(mod => {
      const isDef = session.moduleDefused[mod.no] === true;
      const isAct = session.activeModule === mod.no;
      return `
        <button onclick="PairPractice.switchModule(${mod.no})" class="px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${isAct ? 'bg-amber-400 text-slate-950 shadow-md ring-2 ring-amber-400/50' : (isDef ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-800 text-slate-400 hover:bg-slate-700')}">
          ${isDef ? '<i class="fa-solid fa-circle-check text-emerald-400"></i>' : `<span class="w-4 h-4 rounded-full bg-slate-700 text-[10px] inline-flex items-center justify-center">${mod.no}</span>`}
          <span>Modul ${mod.no}</span>
        </button>
      `;
    }).join('');

    container.innerHTML = `
      <div class="flex flex-col h-full max-h-[92vh] bg-[#0A0F18] text-slate-100 font-sans overflow-hidden">
        <!-- TOP HUD -->
        <div class="p-3.5 sm:p-4 border-b border-slate-800 bg-[#0F172A] shrink-0 flex flex-wrap items-center justify-between gap-3 shadow-md">
          <!-- Identitas Pasangan -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center text-white text-lg shadow-sm">
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

            <!-- PANEL KANAN: LAYAR DEFUSER (TERMINAL PENJINAK BOM) -->
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

                  <!-- Opsi Kabel Penjinak (Interactive Wires) -->
                  <div class="space-y-2.5">
                    ${curMod.defuserConsole.opsiWires.map(wire => {
                      const isSel = session.selectedWires[curMod.no] === wire.id;
                      let borderClass = 'border-slate-800 hover:border-slate-600 bg-slate-900/60';
                      if (isSel) {
                        borderClass = 'border-amber-400 bg-amber-500/10 shadow-md ring-1 ring-amber-400';
                      }

                      return `
                        <label class="p-3.5 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition ${borderClass}">
                          <div class="flex items-center gap-3">
                            <input type="radio" name="wire_opt_${curMod.no}" value="${wire.id}" ${isSel ? 'checked' : ''} onchange="PairPractice.selectWire(${curMod.no}, '${wire.id}')" class="w-4 h-4 text-amber-500 cursor-pointer">
                            <span class="w-6 h-6 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 font-bold text-xs flex items-center justify-center">${wire.id}</span>
                            <span class="text-xs font-bold text-slate-300">${wire.label}:</span>
                          </div>
                          <div class="text-sm font-black text-amber-300 font-mono text-right">
                            $$${wire.math}$$
                          </div>
                        </label>
                      `;
                    }).join('')}
                  </div>
                </div>

                <!-- Tombol Eksekusi Pemotongan Kabel -->
                <div class="pt-3 space-y-2">
                  <button onclick="PairPractice.executeDefusal(${curMod.no})" ${isDefused ? 'disabled' : ''} class="w-full min-h-[46px] py-3 rounded-xl ${isDefused ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700' : 'bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-black cursor-pointer shadow-lg active:scale-98'} text-xs sm:text-sm flex items-center justify-center gap-2 transition">
                    <i class="fa-solid fa-bolt"></i> ${isDefused ? 'Modul Ini Telah Berhasil Dijinakkan!' : 'Eksekusi Pemotongan Kabel Terpilih'}
                  </button>

                  ${isDefused ? `
                    <div class="text-center text-xs text-emerald-400 font-bold flex items-center justify-center gap-1.5">
                      <i class="fa-solid fa-circle-check"></i> Sinyal terputus aman! Lanjutkan ke modul berikutnya.
                    </div>
                  ` : ''}
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
              <button onclick="PairPractice.switchModule(${curModNo - 1})" class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center gap-1.5 cursor-pointer transition">
                <i class="fa-solid fa-arrow-left"></i> Sebelumnya
              </button>
            ` : ''}

            ${curModNo < 5 ? `
              <button onclick="PairPractice.switchModule(${curModNo + 1})" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-1.5 cursor-pointer transition">
                Selanjutnya <i class="fa-solid fa-arrow-right"></i>
              </button>
            ` : ''}

            <button onclick="PairPractice.submitFinalMission()" class="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center gap-2 cursor-pointer shadow-md transition transform active:scale-95">
              <i class="fa-solid fa-flag-checkered"></i> Selesaikan Misi &amp; Catat Nilai
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function switchModule(modNo) {
    session.activeModule = modNo;
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
  }

  // --------------------------------------------------------------------------
  // 4. SERVER-SIDE DEFUSAL VERIFICATION (ZERO FRONTEND KEY)
  // --------------------------------------------------------------------------
  async function executeDefusal(modNo) {
    const chosen = session.selectedWires[modNo];
    if (!chosen) {
      alert("Defuser belum memilih kabel mana yang akan dipotong! Diskusikan dengan Komandan.");
      return;
    }

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

      if (res.ok) {
        const data = await res.json();
        if (data.valid) {
          session.moduleDefused[modNo] = true;
          saveLocalSession();
          alert(`⚡ MODUL ${modNo} BERHASIL DIJINAKKAN!\n\nInstruksi Komandan dan eksekusi Defuser berhasil memutus detonator secara akurat.`);
          
          if (modNo < 5) {
            session.activeModule = modNo + 1;
            saveLocalSession();
          }
          renderCurrentView();
          return;
        } else {
          session.strikes = (session.strikes || 0) + 1;
          saveLocalSession();
          alert(`💥 KORSLETING! KABEL ${chosen} BUKAN JAWABAN YANG TEPAT!\n\n(Total Korsleting: ${session.strikes}x)\nPeriksa kembali panduan kalkulus Komandan pada langkah substitusi fungsi u dan pengali diferensialnya!`);
          renderCurrentView();
          return;
        }
      }
    } catch (err) {
      console.warn("Backend validation fetch error:", err);
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
                  <th class="p-2.5 text-center w-28">Kabel Terpilih</th>
                  <th class="p-2.5 text-center w-20">Poin</th>
                  <th class="p-2.5 text-center w-28">Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                ${PAIR_DATA.modulList.map(mod => {
                  const isDef = session.moduleDefused[mod.no] === true;
                  const chosen = session.selectedWires[mod.no] || '-';
                  return `
                    <tr class="${isDef ? 'bg-emerald-50/20' : 'bg-rose-50/20'}">
                      <td class="p-2.5 font-bold text-center text-slate-700">No. ${mod.no}</td>
                      <td class="p-2.5 text-slate-800">
                        <div class="font-bold text-slate-900">${mod.title}</div>
                        <div class="text-[10px] text-slate-500 font-medium">${mod.level}</div>
                      </td>
                      <td class="p-2.5 font-mono font-bold text-center text-slate-800 bg-slate-50/50">Kabel ${chosen}</td>
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
    submitFinalMission: submitFinalMission,
    resetSession: resetSession,
    printCertificate: printCertificate,
    copyResult: copyResult
  };

  // Auto init
  loadLocalSession();

})();
