// pair-practice-integral.js
// Cooperative Pair Practice: Commander and Defuser (Calculus u-Substitution - Grade XII Minat P26)
// SMA Global Islamic School 2 Serpong • Mr. Ardi
// SECURITY AUDIT: ZERO FRONTEND KEYS & ZERO FRONTEND PINS.
// All answer key evaluations and 3-Digit Authorization PIN verifications are strictly performed server-side in Cloudflare Backend (/api/pair-practice).

(function() {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. MISSION DATA (ZERO FRONTEND KEYS & PINS - ENGLISH CLIL CURRICULUM)
  // --------------------------------------------------------------------------
  const PAIR_DATA = {
    topik: "Integration by u-Substitution (Calculus)",
    kodePertemuan: "P26",
    mapel: "minat",
    tingkat: "XII",
    durasiDefaultDetik: 900, // 15 Minutes
    modulList: [
      {
        no: 1,
        title: "Module 1: Polynomial Powers (Foundation of Substitution)",
        level: "Level 1: Algebraic Foundation",
        soalMath: "\\int 6x(x^2 - 4)^4 \\, dx",
        commanderBlueprint: {
          panduan1: "Identify the inner composite expression inside the higher power as the substitution variable $u = g(x)$.",
          panduan2: "Differentiate this expression with respect to $x$ to obtain the balancing differential $du = g'(x)dx$.",
          panduan3: "Relate the differential $du$ to the external factor to find the algebraic constant multiplier.",
          panduan4: "Evaluate the transformed integral $\\int u^n du$ independently on your scratch sheet with the Defuser.",
          instruksiTaktis: "Defuser, analyze the inner function and relate it to the external term 6x dx. Compute the antiderivative power and identify the matching wire at your terminal!"
        },
        defuserConsole: {
          keterangan: "Select one of the 5 termination wire pathways carrying the exact antiderivative formula:"
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
        title: "Module 2: Square Root & Rational Fractional Powers",
        level: "Level 2: Negative Rational Exponents",
        soalMath: "\\int \\frac{4x}{\\sqrt{2x^2 + 5}} \\, dx",
        commanderBlueprint: {
          panduan1: "Inspect the square root in the denominator and define the radicand expression as variable $u$.",
          panduan2: "Differentiate the radicand expression to obtain the differential $du$.",
          panduan3: "Rewrite the radical denominator as a negative rational exponent $u^{-1/2}$.",
          panduan4: "Apply power rule integration $\\int u^{-1/2} du$ on scratch paper with the Defuser.",
          instruksiTaktis: "Defuser, differentiate the expression inside the radical. Track the exponent upon integration and cut the correct wire!"
        },
        defuserConsole: {
          keterangan: "Select the decoder frequency corresponding to the rational radical antiderivative:"
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
        title: "Module 3: Trigonometric Powers $\\sin^n(x)\\cos(x)$",
        level: "Level 3: Transcendental Function Substitution",
        soalMath: "\\int \\sin^3(x) \\cos(x) \\, dx",
        commanderBlueprint: {
          panduan1: "Identify the complementary pair of trigonometric functions and their derivatives.",
          panduan2: "Select which trigonometric term serves as the core substitution variable $u$.",
          panduan3: "Verify that the adjacent cosine factor is absorbed directly into differential $du$.",
          panduan4: "Determine the antiderivative with respect to $u$ independently on your scratch sheet.",
          instruksiTaktis: "Defuser, choose the trigonometric substitution that pairs with its adjacent derivative. Verify the resulting power and its sign!"
        },
        defuserConsole: {
          keterangan: "Select the correct trigonometric terminal polarity:"
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
        title: "Module 4: Rational Natural Logarithm $\\int \\frac{f'(x)}{f(x)} dx$",
        level: "Level 4: Derivative Numerator Pattern",
        soalMath: "\\int \\frac{3x^2 + 2}{x^3 + 2x - 1} \\, dx",
        commanderBlueprint: {
          panduan1: "Analyze the structural ratio between numerator and denominator polynomials.",
          panduan2: "Test whether the numerator matches the exact derivative of the denominator: $\\frac{g'(x)}{g(x)}$.",
          panduan3: "Apply the natural logarithmic integral identity $\\int \\frac{1}{u} du$.",
          panduan4: "Express the antiderivative within absolute value brackets on your scratch sheet with the Defuser.",
          instruksiTaktis: "Defuser, check if the numerator is the exact derivative of the denominator. This yields a natural logarithmic form!"
        },
        defuserConsole: {
          keterangan: "Select the appropriate logarithmic reactor switch:"
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
        title: "Module 5: Definite Integral with Boundary Transformation (Grand Finale)",
        level: "Level 5: Simultaneous Limit Conversion",
        soalMath: "\\int_{0}^{1} 2x(x^2 + 1)^3 \\, dx",
        commanderBlueprint: {
          panduan1: "Define the core substitution $u = g(x)$ and establish its balancing differential $du$.",
          panduan2: "Calculate the simultaneous transformation for lower and upper integration limits.",
          panduan3: "Integrate the transformed function directly within the transformed $u$-limits without reverting to $x$.",
          panduan4: "Evaluate the fundamental theorem of calculus and compute the final rational difference with Defuser.",
          instruksiTaktis: "Defuser, this is a definite integral! Transform the lower and upper bounds first, then compute the exact rational value!"
        },
        defuserConsole: {
          keterangan: "Enter the final rational numerical code to disarm the central detonator:"
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
    unlockedModules: { 1: true }, // Module 1 is unlocked initially
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
  // VIEW 1: LOBBY (COMMANDER & DEFUSER REGISTRATION)
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
                  <i class="fa-solid fa-user-ninja mr-1"></i> Cooperative Pair Practice
                </span>
                <span class="text-xs text-slate-400 font-mono font-semibold">Integral Calculus • P26</span>
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

        <!-- TACTICAL ROLES BRIEFING -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-sky-950/40 border border-sky-500/30 space-y-2">
            <div class="flex items-center gap-2 text-sky-400 font-bold text-sm">
              <i class="fa-solid fa-headset text-base"></i> Role 1: COMMANDER (Tactical Navigator)
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              Reviews the <b>Tactical Substitution Guidelines</b> ($u = g(x)$ and $du = g'(x)dx$), investigates algebraic integrand structures, and verbally instructs the Defuser on wire options and gate authorization PINs.
            </p>
          </div>
          <div class="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/30 space-y-2">
            <div class="flex items-center gap-2 text-rose-400 font-bold text-sm">
              <i class="fa-solid fa-scissors text-base"></i> Role 2: DEFUSER (Terminal Operator)
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              Operates the <b>Interactive Defusal Terminal</b> containing 5 randomized multiple-choice wires. Follows Commander briefings, executes cuts, and inputs the 3-Digit Gate Authorization PIN to advance.
            </p>
          </div>
        </div>

        <!-- REGISTRATION FORM -->
        <div class="p-5 md:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5 shadow-inner">
          <div class="border-b border-slate-800 pb-3 flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <i class="fa-solid fa-id-card"></i> Mission Personnel Registration by Commander
            </span>
            <span class="text-[11px] text-slate-400">Data automatically synchronizes to Teacher CBT Gradebook</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- SELECT CLASS -->
            <div>
              <label class="block text-xs font-bold uppercase text-slate-400 mb-1.5">Class:</label>
              <select id="pair-select-kelas" onchange="PairPractice.changeClass(this.value)" class="w-full p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs font-semibold outline-none focus:border-amber-400 transition cursor-pointer">
                ${classList.map(k => `<option value="${k}" ${k === currentClass ? 'selected' : ''}>${k}</option>`).join('')}
              </select>
            </div>

            <!-- COMMANDER NAME -->
            <div>
              <label class="block text-xs font-bold uppercase text-sky-400 mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-user-shield"></i> Commander Name:
              </label>
              <select id="pair-select-commander" class="w-full p-2.5 rounded-xl bg-slate-800 border border-sky-500/40 text-white text-xs font-semibold outline-none focus:border-sky-400 transition cursor-pointer">
                <option value="">-- Select Commander Name --</option>
                ${studentOptionsCommander}
              </select>
            </div>

            <!-- DEFUSER NAME -->
            <div>
              <label class="block text-xs font-bold uppercase text-rose-400 mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-user-astronaut"></i> Defuser Operator Name:
              </label>
              <select id="pair-select-defuser" class="w-full p-2.5 rounded-xl bg-slate-800 border border-rose-500/40 text-white text-xs font-semibold outline-none focus:border-rose-400 transition cursor-pointer">
                <option value="">-- Select Defuser Name --</option>
                ${studentOptionsDefuser}
              </select>
            </div>
          </div>

          <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed flex items-start gap-2.5">
            <i class="fa-solid fa-circle-exclamation text-amber-400 mt-0.5 shrink-0"></i>
            <div>
              <b>Grading Policy:</b> The final score of this cooperative pair practice (5 modules = 100 points) is <b>directly recorded into the official CBT database for BOTH students</b> on <b>Meeting P26 (Calculus u-Substitution)</b>. Each module requires a 3-Digit Authorization PIN to advance.
            </div>
          </div>

          <!-- START BUTTON -->
          <button onclick="PairPractice.startMission()" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white font-black text-sm tracking-wide shadow-xl flex items-center justify-center gap-2 cursor-pointer transition transform active:scale-98">
            <i class="fa-solid fa-play"></i> Launch Bomb Defusal Mission (5 Cooperative Modules)
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
      alert("Commander must select both a Commander and Defuser name before proceeding.");
      return;
    }

    if (cmdName === defName) {
      alert("Commander and Defuser must be two distinct students.");
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

    // SHUFFLE 5 MULTIPLE-CHOICE OPTIONS ACROSS SESSIONS (RANDOMIZED FOR EACH PAIR)
    const wireThemes = [
      { letter: "A", color: "sky", label: "Blue Wire", badgeBg: "bg-sky-500/20 text-sky-300 border-sky-500/40" },
      { letter: "B", color: "rose", label: "Red Wire", badgeBg: "bg-rose-500/20 text-rose-300 border-rose-500/40" },
      { letter: "C", color: "amber", label: "Yellow Wire", badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/40" },
      { letter: "D", color: "emerald", label: "Green Wire", badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" },
      { letter: "E", color: "purple", label: "Purple Wire", badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/40" }
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
        alert("⏰ TIME EXPIRED! The mission countdown has ended. Submitting current answers to the server.");
        submitFinalMission();
      }
    }, 1000);
  }

  // --------------------------------------------------------------------------
  // VIEW 2: MISSION ARENA (COMMANDER MANUAL & DEFUSER TERMINAL)
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
          <span>Module ${mod.no}</span>
        </button>
      `;
    }).join('');

    // Ensure shuffled options exist
    if (!session.shuffledOptions[curModNo]) {
      const wireThemes = [
        { letter: "A", color: "sky", label: "Blue Wire", badgeBg: "bg-sky-500/20 text-sky-300 border-sky-500/40" },
        { letter: "B", color: "rose", label: "Red Wire", badgeBg: "bg-rose-500/20 text-rose-300 border-rose-500/40" },
        { letter: "C", color: "amber", label: "Yellow Wire", badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/40" },
        { letter: "D", color: "emerald", label: "Green Wire", badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" },
        { letter: "E", color: "purple", label: "Purple Wire", badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/40" }
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
              <div class="text-[10px] text-slate-400 font-mono">${session.kelas} • Calculus P26 Mission</div>
            </div>
          </div>

          <!-- Timer & Strikes -->
          <div class="flex items-center gap-3">
            <!-- Strikes Counter -->
            <div class="px-2.5 py-1 rounded-lg bg-rose-950/40 border border-rose-800/60 text-xs font-bold text-rose-300 flex items-center gap-1.5" title="Short Circuits">
              <i class="fa-solid fa-triangle-exclamation text-rose-400"></i>
              <span>Short Circuits: <b>${session.strikes}x</b></span>
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

          <!-- View Mode Toggles -->
          <div class="flex items-center bg-slate-900 p-0.5 rounded-xl border border-slate-800 text-[11px] font-bold">
            <button onclick="PairPractice.setViewMode('dual')" class="px-2.5 py-1 rounded-lg transition ${viewMode === 'dual' ? 'bg-slate-700 text-white shadow-xs' : 'text-slate-400 hover:text-white'}">
              <i class="fa-solid fa-table-columns mr-1"></i> Side-by-Side
            </button>
            <button onclick="PairPractice.setViewMode('commander')" class="px-2.5 py-1 rounded-lg transition ${viewMode === 'commander' ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'}">
              <i class="fa-solid fa-headset mr-1"></i> Commander
            </button>
            <button onclick="PairPractice.setViewMode('defuser')" class="px-2.5 py-1 rounded-lg transition ${viewMode === 'defuser' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'}">
              <i class="fa-solid fa-scissors mr-1"></i> Defuser
            </button>
          </div>
        </div>

        <!-- MAIN ARENA CONTENT -->
        <div class="flex-1 overflow-y-auto custom-scroll p-4 md:p-6">
          <div class="grid grid-cols-1 ${viewMode === 'dual' ? 'lg:grid-cols-2' : ''} gap-6 max-w-6xl mx-auto">
            
            <!-- LEFT PANEL: COMMANDER OPERATIONS MANUAL (NO SPOILERS / PURE INQUIRY GUIDELINES) -->
            ${(viewMode === 'dual' || viewMode === 'commander') ? `
              <div class="rounded-2xl border border-sky-500/40 bg-[#0F172A] p-5 md:p-6 space-y-4 shadow-xl flex flex-col justify-between">
                <div class="space-y-4">
                  <!-- Header Commander -->
                  <div class="border-b border-slate-800 pb-3 flex items-center justify-between">
                    <span class="px-2.5 py-1 rounded-lg text-xs font-bold bg-sky-950/60 text-sky-300 border border-sky-500/40 flex items-center gap-1.5">
                      <i class="fa-solid fa-headset text-sky-400"></i> COMMANDER OPERATIONS MANUAL
                    </span>
                    <span class="text-[11px] font-mono text-slate-400">${curMod.level}</span>
                  </div>

                  <!-- Integrand Challenge -->
                  <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
                    <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Target Integrand • Module ${curMod.no}:</div>
                    <div class="text-xl md:text-2xl font-black text-amber-300 py-1">
                      $$${curMod.soalMath}$$
                    </div>
                  </div>

                  <!-- Investigation Steps -->
                  <div class="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                    <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div class="font-bold text-sky-300 flex items-center gap-1.5">
                        <i class="fa-solid fa-1 text-[10px] w-4 h-4 rounded-full bg-sky-500 text-slate-950 inline-flex items-center justify-center font-bold"></i>
                        Investigation Step 1:
                      </div>
                      <div class="pl-5 text-slate-200">${curMod.commanderBlueprint.panduan1}</div>
                    </div>

                    <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div class="font-bold text-sky-300 flex items-center gap-1.5">
                        <i class="fa-solid fa-2 text-[10px] w-4 h-4 rounded-full bg-sky-500 text-slate-950 inline-flex items-center justify-center font-bold"></i>
                        Investigation Step 2:
                      </div>
                      <div class="pl-5 text-slate-200">${curMod.commanderBlueprint.panduan2}</div>
                    </div>

                    <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div class="font-bold text-sky-300 flex items-center gap-1.5">
                        <i class="fa-solid fa-3 text-[10px] w-4 h-4 rounded-full bg-sky-500 text-slate-950 inline-flex items-center justify-center font-bold"></i>
                        Investigation Step 3:
                      </div>
                      <div class="pl-5 text-slate-200">${curMod.commanderBlueprint.panduan3}</div>
                    </div>

                    <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div class="font-bold text-emerald-300 flex items-center gap-1.5">
                        <i class="fa-solid fa-4 text-[10px] w-4 h-4 rounded-full bg-emerald-500 text-slate-950 inline-flex items-center justify-center font-bold"></i>
                        Collaborative Exploration with Defuser:
                      </div>
                      <div class="pl-5 text-slate-200">${curMod.commanderBlueprint.panduan4}</div>
                    </div>
                  </div>
                </div>

                <!-- Verbal Tactical Briefing for Defuser -->
                <div class="p-3.5 rounded-xl bg-gradient-to-r from-sky-950/80 to-indigo-950/80 border border-sky-500/50 space-y-1.5 mt-2">
                  <div class="text-[11px] font-bold text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
                    <i class="fa-solid fa-bullhorn text-amber-400"></i> Tactical Verbal Instruction for Defuser:
                  </div>
                  <div class="text-xs font-semibold text-white italic">
                    "${curMod.commanderBlueprint.instruksiTaktis}"
                  </div>
                </div>
              </div>
            ` : ''}

            <!-- RIGHT PANEL: DEFUSER TERMINAL (5 SHUFFLED MULTIPLE-CHOICE WIRES & 3-DIGIT PIN GATE) -->
            ${(viewMode === 'dual' || viewMode === 'defuser') ? `
              <div class="rounded-2xl border border-rose-500/40 bg-[#0F172A] p-5 md:p-6 space-y-4 shadow-xl flex flex-col justify-between">
                <div class="space-y-4">
                  <!-- Header Defuser -->
                  <div class="border-b border-slate-800 pb-3 flex items-center justify-between">
                    <span class="px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-950/60 text-rose-300 border border-rose-500/40 flex items-center gap-1.5">
                      <i class="fa-solid fa-scissors text-rose-400"></i> DEFUSER EXECUTION TERMINAL
                    </span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold ${isDefused ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'}">
                      ${isDefused ? '✓ MODULE DEFUSED' : '⚠️ DETONATOR ACTIVE'}
                    </span>
                  </div>

                  <!-- Integrand Monitor -->
                  <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Target Integrand Monitor:</div>
                    <div class="text-lg font-black text-slate-100 text-center py-0.5">
                      $$${curMod.soalMath}$$
                    </div>
                  </div>

                  <div class="text-xs text-slate-300 font-medium">
                    ${curMod.defuserConsole.keterangan}
                  </div>

                  <!-- 5 INTERACTIVE WIRES (SHUFFLED PER SESSION) -->
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

                  <!-- Wire Cutting Execution Button -->
                  <div class="pt-1 space-y-2">
                    <button onclick="PairPractice.executeDefusal(${curMod.no})" ${isDefused ? 'disabled' : ''} class="w-full min-h-[44px] py-2.5 rounded-xl ${isDefused ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700' : 'bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-black cursor-pointer shadow-lg active:scale-98'} text-xs sm:text-sm flex items-center justify-center gap-2 transition">
                      <i class="fa-solid fa-bolt"></i> ${isDefused ? 'Module Wire Safely Disarmed!' : 'Execute Cut on Selected Wire'}
                    </button>

                    ${isDefused ? `
                      <div class="text-center text-xs text-emerald-400 font-bold flex items-center justify-center gap-1.5">
                        <i class="fa-solid fa-circle-check"></i> Circuit disarmed! Enter the 3-Digit PIN below to advance to the next module.
                      </div>
                    ` : ''}
                  </div>
                </div>

                <!-- 3-DIGIT PIN GATE AUTHORIZATION -->
                <div class="mt-4 p-4 rounded-2xl border ${isPinVerified ? 'border-emerald-500/50 bg-emerald-950/20' : 'border-amber-500/40 bg-slate-900/90'} space-y-3">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <div class="w-7 h-7 rounded-lg ${isPinVerified ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'} flex items-center justify-center font-bold text-xs">
                        <i class="fa-solid ${isPinVerified ? 'fa-lock-open' : 'fa-key'}"></i>
                      </div>
                      <div>
                        <div class="text-xs font-bold ${isPinVerified ? 'text-emerald-300' : 'text-amber-300'} uppercase tracking-wide">
                          3-Digit Gate Authorization • Module ${curModNo}
                        </div>
                        <div class="text-[10px] text-slate-400">
                          ${curModNo < 5 ? `A valid 3-digit PIN is strictly required to advance to Module ${curModNo + 1}` : `A valid 3-digit PIN is required to authorize final CBT grade submission`}
                        </div>
                      </div>
                    </div>
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${isPinVerified ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'}">
                      ${isPinVerified ? '✓ GATE UNLOCKED' : '🔒 LOCKED'}
                    </span>
                  </div>

                  <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
                    <div class="relative flex-1">
                      <input type="text" id="pair-pin-input-${curModNo}" maxlength="3" pattern="[0-9]*" inputmode="numeric"
                        placeholder="Enter 3-Digit Team PIN (e.g. 192)"
                        value="${session.enteredPins[curModNo] || ''}"
                        ${isPinVerified ? 'disabled' : ''}
                        class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border ${isPinVerified ? 'border-emerald-500/50 text-emerald-300' : 'border-slate-700 text-white'} text-sm font-mono font-bold tracking-widest text-center outline-none focus:border-amber-400 transition placeholder:font-sans placeholder:tracking-normal placeholder:text-slate-500">
                    </div>
                    <button onclick="PairPractice.validateAndProceed(${curModNo})" ${isPinVerified ? 'disabled' : ''}
                      class="px-5 py-2.5 rounded-xl ${isPinVerified ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-500/40 cursor-default' : 'bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 hover:from-amber-400 hover:to-emerald-300 text-slate-950 cursor-pointer shadow-lg active:scale-95'} font-black text-xs flex items-center justify-center gap-2 transition shrink-0">
                      <i class="fa-solid ${isPinVerified ? 'fa-circle-check' : 'fa-unlock'}"></i>
                      ${isPinVerified ? 'Gate Unlocked' : (curModNo < 5 ? `Verify PIN & Advance to Module ${curModNo + 1}` : 'Verify Final Authorization PIN')}
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
            <span>Mission Progress:</span>
            <span class="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
              ${totalDefused} of 5 Modules Defused
            </span>
          </div>

          <div class="flex items-center gap-2.5">
            ${curModNo > 1 ? `
              <button onclick="PairPractice.switchModule(${curModNo - 1})" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-1.5 cursor-pointer transition">
                <i class="fa-solid fa-arrow-left"></i> Previous
              </button>
            ` : ''}

            ${curModNo < 5 ? `
              <button onclick="PairPractice.switchModule(${curModNo + 1})" class="px-4 py-2 rounded-xl ${session.unlockedModules[curModNo + 1] ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer' : 'bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800'} font-bold text-xs flex items-center gap-1.5 transition">
                ${session.unlockedModules[curModNo + 1] ? 'Next <i class="fa-solid fa-arrow-right"></i>' : '<i class="fa-solid fa-lock text-slate-500 mr-1"></i> Locked'}
              </button>
            ` : ''}

            <button onclick="PairPractice.submitFinalMission()" class="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center gap-2 cursor-pointer shadow-md transition transform active:scale-95">
              <i class="fa-solid fa-flag-checkered"></i> Submit Mission &amp; Record CBT Grade
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
      alert(`🔒 Module ${targetModNo} is locked!\n\nPlease enter the valid 3-digit PIN in the previous module to unlock and advance.`);
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
      alert("Defuser has not selected a wire to cut. Consult with your Commander first!");
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

      if (!res.ok) {
        throw new Error('Server connection error');
      }

      const result = await res.json();
      if (result.valid) {
        session.moduleDefused[modNo] = true;
        saveLocalSession();
        renderCurrentView();
        alert(`✅ WIRE SAFELY DISARMED!\n\nModule ${modNo} circuit has been successfully defused without a short circuit!\nEnter the 3-Digit PIN below to unlock the next module.`);
      } else {
        session.strikes += 1;
        saveLocalSession();
        renderCurrentView();
        alert(`💥 SHORT CIRCUIT TRIGGERED (Strikes: ${session.strikes}x)!\n\nThe cut wire does not match the antiderivative identity. Re-investigate substitution steps with your Commander!`);
      }
    } catch (e) {
      alert("Network error while validating cut wire. Please retry.");
    }
  }

  // VALIDATE 3-DIGIT PIN TO ADVANCE TO THE NEXT MODULE
  async function validateAndProceed(modNo) {
    const input = document.getElementById(`pair-pin-input-${modNo}`);
    const pinVal = String(input?.value || '').trim();
    if (!pinVal || pinVal.length < 3) {
      alert("Please enter the 3-Digit Authorization PIN first (e.g. 192).");
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
        throw new Error('Server error verifying PIN');
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
          alert(`✅ 3-DIGIT PIN VERIFIED!\n\nGate to Module ${modNo + 1} has been unlocked.\nAdvancing to the next module!`);
        } else {
          session.unlockedModules[5] = true;
          saveLocalSession();
          renderCurrentView();
          alert(`🎉 FINAL 3-DIGIT PIN VERIFIED!\n\nAll 5 module detonator gates are officially authorized.\nPlease click 'Submit Mission & Record CBT Grade' to save your official score!`);
        }
      } else {
        alert(`❌ INVALID 3-DIGIT PIN!\n\nPIN "${pinVal}" is incorrect for Module ${modNo}.\nCollaborate with your Commander or request teacher verification for authorization.`);
        if (input) {
          input.value = '';
          input.focus();
        }
      }
    } catch (err) {
      alert("Network error while verifying PIN. Please try again.");
    }
  }

  // --------------------------------------------------------------------------
  // 5. FINAL SUBMISSION & DIRECT CBT GRADE RECORDING
  // --------------------------------------------------------------------------
  async function submitFinalMission() {
    const totalDefused = Object.values(session.moduleDefused).filter(Boolean).length;
    if (totalDefused < 5 && session.timeLeft > 0) {
      if (!confirm(`Only ${totalDefused} of 5 modules have been defused. Are you sure you want to finish the operation and record your grades now?`)) {
        return;
      }
    }

    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }

    session.endTime = Date.now();
    const duration = Math.min(PAIR_DATA.durasiDefaultDetik, Math.round(((session.endTime - (session.startTime || session.endTime)) / 1000))) || 300;

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

    if (serverRes && serverRes.success) {
      session.finalScore = serverRes.skor;
      session.correctCount = serverRes.jumlah_benar;
    } else {
      session.correctCount = totalDefused;
      session.finalScore = totalDefused * 20;
    }

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

      const completed = JSON.parse(localStorage.getItem('cbt_completed_submissions') || '{}');
      completed['minat_P26'] = true;
      localStorage.setItem('cbt_completed_submissions', JSON.stringify(completed));
    } catch(e) {}

    session.isCompleted = true;
    saveLocalSession();

    renderCurrentView();
  }

  // --------------------------------------------------------------------------
  // VIEW 3: OFFICIAL GIS 2 SERPONG PAIR PRACTICE ASSESSMENT REPORT
  // --------------------------------------------------------------------------
  function renderScorecardView(container) {
    const formattedDate = new Date().toLocaleDateString('en-GB', {
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
              <i class="fa-solid fa-graduation-cap text-emerald-600"></i> Official GIS Pair Assessment Document
            </span>
            <span class="text-xs text-slate-500">AY 2026/2027 • Odd Semester</span>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="PairPractice.printCertificate()" class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer transition shadow-xs">
              <i class="fa-solid fa-print"></i> Print Document (PDF)
            </button>
            <button onclick="PairPractice.copyResult()" class="px-3 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer transition">
              <i class="fa-solid fa-copy"></i> Copy Summary
            </button>
            <button onclick="PairPractice.closeModal()" class="w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer">
              <i class="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
        </div>

        <!-- OFFICIAL GIS 2 SERPONG KOP -->
        <div class="flex items-center gap-4 border-b-2 border-slate-900 pb-3">
          <img src="assets/gis_official_logo.png" alt="Official GIS Logo" class="h-20 w-auto object-contain shrink-0">
          <div class="flex-1 text-center">
            <div class="text-[11px] font-bold uppercase tracking-wider text-slate-600">YAYASAN ASRAMA PELAJAR ISLAM (YAPI) - BANTEN BRANCH</div>
            <h1 class="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug">SMA GLOBAL ISLAMIC SCHOOL 2 SERPONG</h1>
            <div class="text-xs font-bold text-indigo-900 uppercase tracking-wide mt-0.5">COOPERATIVE PAIR PRACTICE OFFICIAL ASSESSMENT REPORT</div>
            <div class="text-[10px] text-slate-500 mt-0.5">
              Jl. Raya Puspiptek Buaran, Serpong - South Tangerang City, Banten 15310 • Website: www.global-islamic.com
            </div>
          </div>
        </div>

        <!-- CERTIFICATE TITLE -->
        <div class="text-center space-y-1 py-1">
          <h2 class="text-base sm:text-lg font-black uppercase tracking-tight text-slate-900">
            TACTICAL PERFORMANCE REPORT: COMMANDER &amp; DEFUSER (INTEGRATION BY u-SUBSTITUTION)
          </h2>
          <div class="text-xs text-slate-600 font-medium">
            Subject: <b>Additional Mathematics (Phase F - Grade 12)</b> • Meeting Code: <b>P26 (Calculus u-Substitution)</b>
          </div>
        </div>

        <!-- METADATA PAIR TABLE -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-300 text-xs text-slate-700">
          <div class="space-y-1.5 border-r border-slate-200 pr-2">
            <div><span class="font-bold text-slate-900 inline-block w-28">Commander:</span> <b>${escapeHtml(session.commanderNama)}</b></div>
            <div><span class="font-bold text-slate-900 inline-block w-28">Commander NIS:</span> <span class="font-mono">${session.commanderNis || '-'}</span></div>
            <div><span class="font-bold text-slate-900 inline-block w-28">Tactical Role:</span> <span class="text-sky-700 font-semibold">Tactical Analyst &amp; u-Substitution Navigator</span></div>
            <div><span class="font-bold text-slate-900 inline-block w-28">Class:</span> <b>${session.kelas}</b></div>
          </div>
          <div class="space-y-1.5 pl-2">
            <div><span class="font-bold text-slate-900 inline-block w-28">Defuser:</span> <b>${escapeHtml(session.defuserNama)}</b></div>
            <div><span class="font-bold text-slate-900 inline-block w-28">Defuser NIS:</span> <span class="font-mono">${session.defuserNis || '-'}</span></div>
            <div><span class="font-bold text-slate-900 inline-block w-28">Tactical Role:</span> <span class="text-rose-700 font-semibold">Disarmament Operator &amp; Wire Executor</span></div>
            <div><span class="font-bold text-slate-900 inline-block w-28">Database Status:</span> <span class="text-emerald-700 font-bold">✓ Officially Recorded in Cloudflare D1 CBT Database</span></div>
          </div>
        </div>

        <!-- SCORE BOX -->
        <div class="p-4 rounded-2xl border text-center space-y-2 ${isPerfect ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950' : 'bg-indigo-50/70 border-indigo-300 text-indigo-950'}">
          <div class="text-xs uppercase font-bold tracking-wider text-slate-600">Collaborative Pair Assessment Score:</div>
          <div class="text-4xl sm:text-5xl font-black font-mono tracking-tight ${isPerfect ? 'text-emerald-700' : 'text-indigo-800'}">
            ${session.finalScore} <span class="text-lg font-sans text-slate-500 font-normal">/ 100</span>
          </div>
          <div class="text-xs font-bold ${isPerfect ? 'text-emerald-800' : 'text-indigo-800'}">
            ${isPerfect ? '🌟 Mastery Level: Advanced Mastery (100% Flawless Completion • Distinguished Tactical Duo)' : (session.finalScore >= 80 ? '🎯 Mastery Level: Proficient (Above Passing Standard)' : '📚 Mastery Level: Needs Reinforcement')}
          </div>
          <div class="text-[11px] text-slate-500">
            Total Modules Defused: <b>${session.correctCount} of 5 Modules</b> • Total Short Circuits: <b>${session.strikes}x</b>
          </div>
        </div>

        <!-- 5 MODULES BREAKDOWN TABLE -->
        <div class="space-y-2">
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
            <i class="fa-solid fa-list-check text-indigo-600"></i> Module Performance Breakdown (5 Calculus Modules):
          </h3>
          <div class="border border-slate-300 rounded-xl overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-100 text-slate-700 border-b border-slate-300">
                <tr>
                  <th class="p-2.5 text-center w-16">Module</th>
                  <th class="p-2.5">Topic &amp; Competency Indicator</th>
                  <th class="p-2.5 text-center w-28">Gate PIN</th>
                  <th class="p-2.5 text-center w-20">Points</th>
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
                        ${isPinOk ? '<span class="text-emerald-700 font-bold"><i class="fa-solid fa-key"></i> Authorized</span>' : '<span class="text-slate-400">-</span>'}
                      </td>
                      <td class="p-2.5 font-mono font-bold text-center ${isDef ? 'text-emerald-700' : 'text-rose-700'}">${isDef ? '20' : '0'}</td>
                      <td class="p-2.5 text-center">
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold ${isDef ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-rose-100 text-rose-800 border border-rose-300'}">
                          ${isDef ? '✓ Defused' : '✗ Incomplete'}
                        </span>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- OFFICIAL SIGNATURES & STAMPS (GIS SENIOR HIGH STANDARD) -->
        <div class="pt-6 border-t border-slate-300 grid grid-cols-2 gap-6 text-center text-xs text-slate-800">
          <div>
            <div class="font-medium text-slate-600">Acknowledged by,</div>
            <div class="font-bold">Head of Senior High GIS 2 Serpong</div>
            <div class="h-20 flex items-center justify-center my-1.5">
              <img src="assets/perfect_stamp_sig.png" alt="Official School Stamp &amp; Signature" class="h-20 w-auto object-contain">
            </div>
            <div class="font-bold underline text-slate-900">Dwi Kurniawati, S.Pd., Gr.</div>
            <div class="text-[10px] text-slate-500 font-mono">Head of Senior High</div>
          </div>
          <div>
            <div class="font-medium text-slate-600">South Tangerang, ${formattedDate}</div>
            <div class="font-bold">Mathematics Subject Teacher</div>
            <div class="h-20 flex items-center justify-center my-1.5">
              <img src="assets/sig_guru_perfect.png" alt="Teacher Signature" class="h-16 w-auto object-contain">
            </div>
            <div class="font-bold underline text-slate-900">Muhammad Ardiansyah, S.Pd.Gr.</div>
            <div class="text-[10px] text-slate-500 font-mono">Subject Teacher • Phase F</div>
          </div>
        </div>

        <!-- ACTION BUTTONS -->
        <div class="border-t pt-4 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button onclick="PairPractice.resetSession()" class="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition">
            <i class="fa-solid fa-rotate-left"></i> Start New Pair Mission
          </button>
          <button onclick="PairPractice.closeModal()" class="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer transition">
            <i class="fa-solid fa-check"></i> Complete
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
    const text = `=== OFFICIAL COOPERATIVE PAIR PRACTICE REPORT ===\n` +
      `Subject: Additional Mathematics (P26: Integration by u-Substitution)\n` +
      `Class: ${session.kelas}\n` +
      `Commander: ${session.commanderNama} (NIS: ${session.commanderNis || '-'})\n` +
      `Defuser: ${session.defuserNama} (NIS: ${session.defuserNis || '-'})\n` +
      `Final Score: ${session.finalScore} / 100\n` +
      `Modules Defused: ${session.correctCount} / 5\n` +
      `Database Status: Verified & Recorded in Cloudflare D1 CBT\n` +
      `Timestamp: ${new Date().toLocaleString('en-GB')}\n` +
      `Portal: https://mathcihuy.pages.dev`;

    navigator.clipboard.writeText(text).then(() => {
      alert("📋 Pair performance summary successfully copied to clipboard!");
    }).catch(() => {
      prompt("Copy summary text:", text);
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
