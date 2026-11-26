// strategic-auction.js
// Pertemuan 2: Bursa Taruhan Poin (Strategic Auction & Risk Management)
// SMA Global Islamic School 2 Serpong • Muhammad Ardiansyah, S.Pd.Gr.
// SECURITY AUDIT: ZERO FRONTEND KEYS & ZERO SPOILERS.
// All official evaluation and answer keys are strictly stored on the server.

(function() {
  'use strict';

  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --------------------------------------------------------------------------
  // 1. DATA KISI-KISI & SOAL 4 FORMAT STANDAR (STATISTIKA KELAS XII)
  // --------------------------------------------------------------------------
  const AUCTION_ROUNDS = [
    {
      round: 1,
      formatTitle: "Format 1: Pilihan Ganda Tunggal (Single Choice)",
      formatBadge: "Single Choice",
      formatBadgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/40",
      indikator: "Menganalisis tabel distribusi frekuensi data berkelompok dengan frekuensi tak tentu k berdasarkan nilai modus, kemudian menentukan nilai Kuartil Atas (Q3).",
      domain: "Statistika Data Berkelompok • Level C4 Analisis",
      estimasiWaktu: "4 Menit",
      rekomendasiTaruhan: "150 - 250 Poin (Tingkat Risiko Sedang)",
      tanya: `Diberikan tabel distribusi frekuensi nilai ujian matematika siswa kelas XII:
<div class="overflow-x-auto my-3">
  <table class="w-full text-center text-xs border border-slate-700 bg-slate-900 rounded-xl">
    <thead class="bg-slate-800 text-amber-300 font-bold">
      <tr>
        <th class="p-2 border border-slate-700">Interval Nilai</th>
        <th class="p-2 border border-slate-700">Frekuensi</th>
      </tr>
    </thead>
    <tbody class="text-slate-200 font-mono">
      <tr><td class="p-2 border border-slate-800">51 – 60</td><td class="p-2 border border-slate-800">4</td></tr>
      <tr><td class="p-2 border border-slate-800">61 – 70</td><td class="p-2 border border-slate-800">8</td></tr>
      <tr class="bg-amber-500/10 text-amber-200 font-bold"><td class="p-2 border border-slate-800">71 – 80 (Kelas Modus)</td><td class="p-2 border border-slate-800">k</td></tr>
      <tr><td class="p-2 border border-slate-800">81 – 90</td><td class="p-2 border border-slate-800">10</td></tr>
      <tr><td class="p-2 border border-slate-800">91 – 100</td><td class="p-2 border border-slate-800">6</td></tr>
    </tbody>
  </table>
</div>
Jika modus dari data berkelompok tersebut adalah <b>76,5</b>, tentukan nilai <b>Kuartil Atas ($Q_3$)</b> data tersebut!`,
      type: "single_choice",
      opsi: [
        { id: "A", text: "$$83,5$$" },
        { id: "B", text: "$$84,5$$" },
        { id: "C", text: "$$86,0$$" },
        { id: "D", text: "$$87,5$$" },
        { id: "E", text: "$$88,0$$" }
      ]
    },
    {
      round: 2,
      formatTitle: "Format 2: Pernyataan Benar / Salah (AKM Binary Statements)",
      formatBadge: "AKM Benar / Salah",
      formatBadgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      indikator: "Menganalisis dan memvalidasi kebenaran karakteristik ukuran pemusatan dan ukuran penyebaran pada tabel distribusi frekuensi data berkelompok.",
      domain: "Ukuran Pemusatan & Penyebaran • Level C4 Analisis",
      estimasiWaktu: "5 Menit",
      rekomendasiTaruhan: "200 - 300 Poin (Tingkat Risiko Tinggi)",
      tanya: `Diberikan tabel distribusi frekuensi hasil ulangan harian matematika 40 siswa sebagai berikut:

| Nilai Interval | Frekuensi ($f_i$) |
| :---: | :---: |
| $51 - 60$ | 6 |
| $61 - 70$ | 10 |
| $71 - 80$ | 14 |
| $81 - 90$ | 7 |
| $91 - 100$ | 3 |

Tentukan status **BENAR** atau **SALAH** untuk masing-masing pernyataan statistika berikut:`,
      type: "true_false",
      statements: [
        { id: "s1", text: "Tepi bawah kelas modus dari tabel distribusi data tersebut adalah $70,5$." },
        { id: "s2", text: "Panjang kelas interval ($p$) pada tabel tersebut bernilai $9$." },
        { id: "s3", text: "Letak kelas median data berada pada kelas interval $71 - 80$." },
        { id: "s4", text: "Jangkauan kasar (*crude range*) berdasarkan selisih titik tengah kelas tertinggi dan terendah adalah $50$." }
      ]
    },
    {
      round: 3,
      formatTitle: "Format 3: Kecukupan Data (UTBK SNBT Data Sufficiency)",
      formatBadge: "Kecukupan Data",
      formatBadgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      indikator: "Mengevaluasi kecukupan data informasi (1) dan (2) untuk menentukan nilai rata-rata hitung (Mean) data berkelompok dengan metode rataan sementara.",
      domain: "Ukuran Pemusatan Data Berkelompok • Level C4 Penalaran",
      estimasiWaktu: "4 Menit",
      rekomendasiTaruhan: "200 - 250 Poin (Tingkat Risiko Taktis)",
      tanya: `Diberikan tabel distribusi frekuensi data berkelompok hasil pengukuran yang terdiri dari 5 kelas interval dengan panjang kelas $p = 5$. Berapakah nilai rata-rata hitung ($\\bar{x}$) dari data tersebut?

Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:
(1) Dipilih nilai rataan sementara $x_s = 62$ dengan jumlah deviasi berbobot $\\sum f_i d_i = +45$.
(2) Jumlah seluruh frekuensi pengamatan pada tabel tersebut adalah $\\sum f_i = 30$.`,
      type: "data_sufficiency",
      opsi: [
        { id: "A", text: "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup." },
        { id: "B", text: "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup." },
        { id: "C", text: "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup." },
        { id: "D", text: "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup." },
        { id: "E", text: "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan." }
      ]
    },
    {
      round: 4,
      formatTitle: "Format 4: Pilihan Ganda Kompleks (Complex Checkbox MC)",
      formatBadge: "Pilihan Ganda Kompleks",
      formatBadgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
      indikator: "Memvalidasi seluruh pernyataan analisis kuartil data, jangkauan interkuartil, simpangan kuartil, batas pagar, dan penyaringan data pencilan (outlier).",
      domain: "Ukuran Letak & Deteksi Pencilan • Level C5 Analisis Lanjut",
      estimasiWaktu: "5 Menit",
      rekomendasiTaruhan: "250 - 300 Poin (Grand Finale Bidding)",
      tanya: "Dari survei skor asesmen numerasi 100 siswa, diperoleh nilai kuartil bawah $Q_1 = 58$, median $Me = 70$, dan kuartil atas $Q_3 = 82$. Manakah pernyataan analisis data berikut yang bernilai **BENAR**? *(Pilih semua pernyataan yang benar)*",
      type: "complex_mc",
      opsi: [
        { id: "opt1", text: "(1) Jangkauan interkuartil ($QR$) data tersebut adalah $24$." },
        { id: "opt2", text: "(2) Simpangan kuartil ($Q_d$) dari data tersebut adalah $12$." },
        { id: "opt3", text: "(3) Batas pagar atas untuk menyaring data pencilan (*outlier*) adalah $118$." },
        { id: "opt4", text: "(4) Siswa yang memperoleh skor $40$ tidak dikategorikan sebagai data pencilan bawah." }
      ]
    }
  ];

  // MINI MASTERY CHECK (EXIT TICKET INDIVIDU 3 MENIT - STATISTIKA)
  const EXIT_TICKET_DATA = [
    {
      no: 1,
      tanya: "Mengapa nilai simpangan baku ($S$) dari sekumpulan data pengukuran tidak pernah bernilai negatif ($S \\ge 0$)?",
      opsi: [
        { id: "A", text: "Karena rumus simpangan baku selalu membagi data dengan rata-rata yang bernilai positif." },
        { id: "B", text: "Karena setiap deviasi $(x_i - \\bar{x})$ dikuadratkan sehingga non-negatif, dan akar kuadrat utama dari bilangan non-negatif selalu bernilai non-negatif." },
        { id: "C", text: "Karena simpangan baku hanya dapat dihitung jika seluruh nilai data mentah bernilai positif." },
        { id: "D", text: "Karena nilai simpangan baku selalu identik dengan nilai jangkauan data." }
      ]
    },
    {
      no: 2,
      tanya: "Dalam menyusun tabel distribusi frekuensi dari 100 data nilai ujian, diketahui nilai minimum 41 dan maksimum 95 ($Jangkauan = 54$). Menggunakan aturan Sturgess $k = 1 + 3,3 \\log_{10}(100) = 7,6 \\approx 8$ kelas, dihitung estimasi panjang kelas interval: $$p = \\frac{\\text{Jangkauan}}{k} = \\frac{54}{8} = 6,75$$ Manakah keputusan pembulatan panjang kelas interval ($p$) yang paling tepat secara metodologis beserta alasannya?",
      opsi: [
        { id: "A", text: "Dibulatkan ke atas menjadi $p = 7$, agar seluruh rentang data dari 41 hingga 95 dijamin tertampung penuh ke dalam 8 kelas interval ($8 \\times 7 = 56 \\ge 54$)." },
        { id: "B", text: "Dibulatkan ke bawah menjadi $p = 6$, agar interval kelas lebih padat dan tidak ada kelas yang memiliki frekuensi nol." },
        { id: "C", text: "Dibulatkan ke bilangan genap terdekat yaitu $p = 8$, agar mempermudah penentuan titik tengah $(x_i)$ kelas interval." },
        { id: "D", text: "Dibiarkan dalam bentuk bilangan desimal $p = 6,75$, agar perhitungan rata-rata dan simpangan baku tetap presisi." }
      ]
    }
  ];

  // --------------------------------------------------------------------------
  // 2. STATE PERSISTENCE & LOCAL ENGINE
  // --------------------------------------------------------------------------
  let auctionState = {
    view: 'lobby', // 'lobby', 'bidding', 'solving', 'result', 'exit_ticket', 'projector'
    kelas: 'XII F3',
    teamId: 'team_1',
    teamName: 'Kelompok 1',
    members: [],
    points: 1000,
    currentRound: 1,
    currentBet: 100,
    answers: {},
    roundResults: {},
    streak: 0,
    isCompleted: false,
    exitTicketNis: '',
    exitTicketNama: '',
    exitTicketTimerSec: 180, // 3 Menit
    exitTicketAnswers: { 1: '', 2: '' },
    exitTicketDone: false,
    exitTicketScore: null
  };

  let exitTicketInterval = null;

  function loadLocalState() {
    try {
      const saved = localStorage.getItem('mathcihuy_strategic_auction_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed) auctionState = Object.assign(auctionState, parsed);
      }
    } catch(e) {}
  }

  function saveLocalState() {
    try {
      localStorage.setItem('mathcihuy_strategic_auction_state', JSON.stringify(auctionState));
    } catch(e) {}
  }

  // --------------------------------------------------------------------------
  // 3. MODAL CONTROLLER & ENTRYPOINT
  // --------------------------------------------------------------------------
  function openAuctionModal() {
    loadLocalState();
    const modal = document.getElementById('auction-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    document.body.classList.add('overflow-hidden');
    if (typeof window.ensureStudentsHydrated === 'function' && Object.keys(window.STUDENTS_DATA || {}).length === 0) {
      window.ensureStudentsHydrated().then(() => renderCurrentView());
    }
    renderCurrentView();
  }

  function closeAuctionModal() {
    const modal = document.getElementById('auction-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.style.display = 'none';
    document.body.classList.remove('overflow-hidden');

    if (exitTicketInterval) clearInterval(exitTicketInterval);
  }

  function setView(viewName) {
    auctionState.view = viewName;
    saveLocalState();
    renderCurrentView();
  }

  function renderCurrentView() {
    const container = document.getElementById('auction-modal-content');
    if (!container) return;

    switch (auctionState.view) {
      case 'bidding':
        renderBiddingView(container);
        break;
      case 'solving':
        renderSolvingView(container);
        break;
      case 'result':
        renderResultView(container);
        break;
      case 'exit_ticket':
        renderExitTicketView(container);
        break;
      case 'projector':
        renderProjectorView(container);
        break;
      case 'lobby':
      default:
        renderLobbyView(container);
        break;
    }

    // KaTeX render
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(container, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      } catch(e) {}
    }
  }

  // --------------------------------------------------------------------------
  // VIEW 1: LOBBY & REGISTRASI TIM (MODAL 1.000 POIN)
  // --------------------------------------------------------------------------
  function renderLobbyView(container) {
    const classList = ['XII F1', 'XII F2', 'XII F3', 'XII F4'];
    const students = window.STUDENTS_DATA || {};
    const curClass = auctionState.kelas || 'XII F3';

    let studentOptions = '';
    Object.keys(students).forEach(nis => {
      const s = students[nis];
      const sKelas = String(s.kelas || '').replace(/[^0-9A-Z]/gi, '').toUpperCase();
      const cKelas = String(curClass || '').replace(/[^0-9A-Z]/gi, '').toUpperCase();
      if (sKelas === cKelas) {
        studentOptions += `<option value="${escapeHtml(s.nama)}" data-nis="${escapeHtml(nis)}">${escapeHtml(s.nama)} (${escapeHtml(nis)})</option>`;
      }
    });

    container.innerHTML = `
      <div class="flex flex-col h-full max-h-[92vh] bg-[#0A0F18] text-slate-100 font-sans overflow-hidden">
        <!-- TOP HEADER -->
        <div class="px-6 py-4 border-b border-slate-800 bg-[#0E1520] shrink-0 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-600 flex items-center justify-center text-white text-xl shadow-lg border border-amber-400/40">
              <i class="fa-solid fa-coins"></i>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  Pertemuan 2 • Strategic Auction
                </span>
                <span class="text-xs text-slate-400 font-mono">TKA &amp; UTBK Simulation</span>
              </div>
              <h2 class="text-lg md:text-xl font-black text-white tracking-tight mt-0.5">
                Bursa Taruhan Poin (Strategic Auction)
              </h2>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="StrategicAuction.setView('projector')" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer">
              <i class="fa-solid fa-chalkboard-user text-amber-400"></i> Mode Proyektor Kelas
            </button>
            <button onclick="StrategicAuction.closeModal()" class="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer">
              <i class="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
        </div>

        <!-- BODY -->
        <div class="flex-1 overflow-y-auto custom-scroll p-6 space-y-6">
          <!-- BRIEFING RULES CARD -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5">
              <div class="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <i class="fa-solid fa-sack-dollar"></i> Modal Awal Tim
              </div>
              <div class="text-xl font-black text-white">1.000 Poin</div>
              <p class="text-[11px] text-slate-400 leading-relaxed">Tiap kelompok mengelola modal risiko yang sama sejak ronde pertama.</p>
            </div>

            <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5">
              <div class="text-xs font-bold text-sky-400 flex items-center gap-1.5">
                <i class="fa-solid fa-hand-holding-dollar"></i> Pasang Taruhan
              </div>
              <div class="text-xl font-black text-white">100 – 300 Pts</div>
              <p class="text-[11px] text-slate-400 leading-relaxed">Pasang taruhan setelah melihat kisi-kisi indikator sebelum membuka soal.</p>
            </div>

            <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5">
              <div class="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <i class="fa-solid fa-layer-group"></i> 4 Format Standar
              </div>
              <div class="text-xl font-black text-white">PG, B/S, KD, PGK</div>
              <p class="text-[11px] text-slate-400 leading-relaxed">Paket komprehensif menguji kesiapan mental asesmen nasional &amp; UTBK.</p>
            </div>

            <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5">
              <div class="text-xs font-bold text-purple-400 flex items-center gap-1.5">
                <i class="fa-solid fa-chalkboard-user"></i> Bedah Trik di Layar
              </div>
              <div class="text-xl font-black text-white">Langsung di Tempat</div>
              <p class="text-[11px] text-slate-400 leading-relaxed">Trik kilat dibedah langsung di proyektor tanpa repot jalan keliling kelas.</p>
            </div>
          </div>

          <!-- REGISTRATION CARD -->
          <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
            <div class="border-b border-slate-800 pb-3 flex items-center justify-between">
              <span class="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <i class="fa-solid fa-users"></i> Registrasi Kelompok Bursa Taruhan
              </span>
              <span class="text-xs text-slate-400">Modal Awal: 1.000 Poin Terjamin</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold uppercase text-slate-400 mb-1.5">Pilih Kelas:</label>
                <select id="auction-select-kelas" onchange="StrategicAuction.changeClass(this.value)" class="w-full p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs font-semibold outline-none focus:border-amber-400 transition cursor-pointer">
                  ${classList.map(k => `<option value="${k}" ${k === curClass ? 'selected' : ''}>${k}</option>`).join('')}
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold uppercase text-slate-400 mb-1.5">Nomor Kelompok:</label>
                <select id="auction-select-team" class="w-full p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs font-semibold outline-none focus:border-amber-400 transition cursor-pointer">
                  ${[1,2,3,4,5,6,7,8].map(n => `<option value="team_${n}" ${auctionState.teamId === 'team_' + n ? 'selected' : ''}>Kelompok ${n}</option>`).join('')}
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold uppercase text-slate-400 mb-1.5">Pilih Nama Anggota (3–4 Siswa):</label>
              <select id="auction-select-members" multiple class="w-full p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs outline-none focus:border-amber-400 transition h-28 custom-scroll">
                ${studentOptions}
              </select>
              <p class="text-[10px] text-slate-400 mt-1">Tahan tombol Ctrl (Windows) / Cmd (Mac) untuk memilih beberapa nama.</p>
            </div>

            <button onclick="StrategicAuction.startAuction()" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white font-black text-sm tracking-wide shadow-xl flex items-center justify-center gap-2 cursor-pointer transition transform active:scale-98">
              <i class="fa-solid fa-play"></i> Buka Terminal Lelang Poin (Mulai Ronde 1)
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function changeClass(newClass) {
    auctionState.kelas = newClass;
    saveLocalState();
    renderCurrentView();
  }

  function startAuction() {
    const kls = document.getElementById('auction-select-kelas')?.value || 'XII F3';
    const teamId = document.getElementById('auction-select-team')?.value || 'team_1';
    const teamSelect = document.getElementById('auction-select-team');
    const teamName = teamSelect ? teamSelect.options[teamSelect.selectedIndex].text : 'Kelompok 1';

    const memberSelect = document.getElementById('auction-select-members');
    const selectedMembers = [];
    if (memberSelect) {
      for (let i = 0; i < memberSelect.options.length; i++) {
        if (memberSelect.options[i].selected) {
          selectedMembers.push({
            nama: memberSelect.options[i].value,
            nis: memberSelect.options[i].getAttribute('data-nis')
          });
        }
      }
    }

    auctionState.kelas = kls;
    auctionState.teamId = teamId;
    auctionState.teamName = teamName;
    auctionState.members = selectedMembers;
    auctionState.points = 1000;
    auctionState.currentRound = 1;
    auctionState.streak = 0;
    auctionState.answers = {};
    auctionState.roundResults = {};
    auctionState.view = 'bidding';

    saveLocalState();
    renderCurrentView();

    // Init team ke backend Cloudflare D1
    fetch('/api/strategic-auction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'init_team',
        kelas: kls,
        team_id: teamId,
        team_name: teamName,
        members: selectedMembers
      })
    }).catch(e => console.warn("Backend init team warning:", e));
  }

  // --------------------------------------------------------------------------
  // VIEW 2: FASE LELANG POIN (BIDDING PHASE - SEBELUM BUKA SOAL)
  // --------------------------------------------------------------------------
  function renderBiddingView(container) {
    const roundIdx = auctionState.currentRound - 1;
    const curRound = AUCTION_ROUNDS[roundIdx] || AUCTION_ROUNDS[0];

    container.innerHTML = `
      <div class="flex flex-col h-full max-h-[92vh] bg-[#0A0F18] text-slate-100 font-sans overflow-hidden">
        <!-- TOP STATUS BAR -->
        ${renderTopBar(curRound)}

        <!-- CONTENT -->
        <div class="flex-1 overflow-y-auto custom-scroll p-6 space-y-6">
          <div class="max-w-4xl mx-auto space-y-6">
            
            <!-- KISI-KISI / INDIKATOR PREVIEW CARD -->
            <div class="p-6 rounded-2xl bg-[#0F172A] border border-amber-500/40 space-y-4 shadow-xl">
              <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <span class="px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider ${curRound.formatBadgeColor}">
                  <i class="fa-solid fa-bullseye mr-1.5"></i> ${curRound.formatTitle}
                </span>
                <span class="text-xs text-amber-300 font-mono font-bold flex items-center gap-1.5">
                  <i class="fa-solid fa-stopwatch"></i> Estimasi: ${curRound.estimasiWaktu}
                </span>
              </div>

              <div class="space-y-2">
                <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  <i class="fa-solid fa-eye text-sky-400 mr-1"></i> Kisi-kisi Indikator Soal di Layar:
                </div>
                <h3 class="text-base md:text-lg font-bold text-white leading-relaxed">
                  "${curRound.indikator}"
                </h3>
                <div class="text-xs text-slate-400 font-mono">
                  Domain: <span class="text-sky-300">${curRound.domain}</span>
                </div>
              </div>

              <div class="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-center justify-between">
                <span><b>Rekomendasi Manajemen Risiko:</b> ${curRound.rekomendasiTaruhan}</span>
                <span class="font-bold text-amber-400">Streak Saat Ini: ${auctionState.streak}x 🔥</span>
              </div>
            </div>

            <!-- BETTING CONTROLLER CARD -->
            <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5 shadow-2xl">
              <div class="text-center space-y-1">
                <div class="text-xs font-bold uppercase tracking-wider text-amber-400">
                  <i class="fa-solid fa-coins mr-1"></i> Tentukan Nilai Taruhan Kelompok (100 – 300 Poin)
                </div>
                <p class="text-xs text-slate-400">
                  Poin Anda bertambah jika benar (didukung combo streak) dan terpotong jika salah.
                </p>
              </div>

              <!-- PRESET BET BUTTONS -->
              <div class="grid grid-cols-5 gap-2.5">
                ${[100, 150, 200, 250, 300].map(amt => `
                  <button onclick="StrategicAuction.setBet(${amt})" class="py-3 rounded-xl border font-mono font-black text-sm transition cursor-pointer ${auctionState.currentBet === amt ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-lg ring-2 ring-amber-400/50' : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'}">
                    ${amt} Pts
                  </button>
                `).join('')}
              </div>

              <!-- SLIDER OPTION -->
              <div class="pt-2">
                <input type="range" min="100" max="300" step="25" value="${auctionState.currentBet}" oninput="StrategicAuction.setBet(Number(this.value))" class="w-full accent-amber-400 cursor-pointer">
                <div class="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>Konservatif: 100 Pts</span>
                  <span>Moderat: 200 Pts</span>
                  <span>Agresif: 300 Pts</span>
                </div>
              </div>

              <!-- RISK / REWARD PREVIEW -->
              <div class="grid grid-cols-2 gap-4 text-center">
                <div class="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                  <div class="text-[10px] uppercase font-bold text-emerald-400">Jika Benar (Potensi Tambahan):</div>
                  <div class="text-lg font-black text-emerald-300">
                    +${Math.round(auctionState.currentBet * (auctionState.streak >= 2 ? 1.5 : (auctionState.streak >= 1 ? 1.2 : 1.0)))} Pts
                    ${auctionState.streak > 0 ? `<span class="text-xs text-amber-400 font-normal">(${auctionState.streak >= 2 ? '1.5x Combo' : '1.2x Combo'})</span>` : ''}
                  </div>
                </div>
                <div class="p-3 rounded-xl bg-rose-950/40 border border-rose-500/30">
                  <div class="text-[10px] uppercase font-bold text-rose-400">Jika Salah (Risiko Terpotong):</div>
                  <div class="text-lg font-black text-rose-300">-${auctionState.currentBet} Pts</div>
                </div>
              </div>

              <!-- LOCK BET BUTTON -->
              <button onclick="StrategicAuction.lockBetAndReveal()" class="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white font-black text-sm tracking-wide shadow-xl flex items-center justify-center gap-2 cursor-pointer transition transform active:scale-98">
                <i class="fa-solid fa-lock"></i> Kunci Taruhan ${auctionState.currentBet} Poin &amp; Buka Soal Ronde ${auctionState.currentRound}
              </button>
            </div>

          </div>
        </div>
      </div>
    `;
  }

  function setBet(amt) {
    auctionState.currentBet = amt;
    saveLocalState();
    renderCurrentView();
  }

  function lockBetAndReveal() {
    auctionState.view = 'solving';
    saveLocalState();
    renderCurrentView();
  }

  // --------------------------------------------------------------------------
  // VIEW 3: SOLVING PHASE (MEMBUKA SOAL DENGAN 4 FORMAT STANDAR)
  // --------------------------------------------------------------------------
  function renderSolvingView(container) {
    const roundIdx = auctionState.currentRound - 1;
    const curRound = AUCTION_ROUNDS[roundIdx] || AUCTION_ROUNDS[0];

    let questionInteractiveHtml = '';

    // FORMAT 1: SINGLE CHOICE
    if (curRound.type === 'single_choice' || curRound.type === 'data_sufficiency') {
      const selected = auctionState.answers[curRound.round] || '';
      questionInteractiveHtml = `
        <div class="space-y-3">
          <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Pilihlah salah satu opsi jawaban yang paling tepat:
          </div>
          ${curRound.opsi.map(o => `
            <label class="p-3.5 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition ${selected === o.id ? 'bg-amber-500/15 border-amber-400 shadow-md ring-1 ring-amber-400' : 'bg-slate-900 border-slate-800 hover:border-slate-700'}">
              <div class="flex items-center gap-3">
                <input type="radio" name="auction_q_${curRound.round}" value="${o.id}" ${selected === o.id ? 'checked' : ''} onchange="StrategicAuction.selectSingleAnswer('${o.id}')" class="w-4 h-4 text-amber-500 cursor-pointer">
                <span class="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 text-amber-300 font-bold text-xs flex items-center justify-center">${o.id}</span>
              </div>
              <div class="text-sm font-semibold text-slate-200 flex-1 pl-2">
                ${o.text}
              </div>
            </label>
          `).join('')}
        </div>
      `;
    }
    // FORMAT 2: TRUE / FALSE AKM
    else if (curRound.type === 'true_false') {
      const tfAns = auctionState.answers[curRound.round] || { s1: null, s2: null, s3: null, s4: null };
      questionInteractiveHtml = `
        <div class="space-y-3">
          <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Tentukan status Benar (B) atau Salah (S) untuk setiap pernyataan berikut:
          </div>
          ${curRound.statements.map((s, idx) => `
            <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div class="text-xs text-slate-200 flex-1 leading-relaxed">
                <span class="font-bold text-amber-400 mr-1.5">Pernyataan ${idx + 1}:</span>
                ${s.text}
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <button onclick="StrategicAuction.setTfAnswer('${s.id}', true)" class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${tfAns[s.id] === true ? 'bg-emerald-500 text-slate-950 font-black shadow-md' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}">
                  <i class="fa-solid fa-check mr-1"></i> BENAR
                </button>
                <button onclick="StrategicAuction.setTfAnswer('${s.id}', false)" class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${tfAns[s.id] === false ? 'bg-rose-500 text-white font-black shadow-md' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}">
                  <i class="fa-solid fa-xmark mr-1"></i> SALAH
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }
    // FORMAT 4: COMPLEX MC (CHECKBOX)
    else if (curRound.type === 'complex_mc') {
      const checkedList = auctionState.answers[curRound.round] || [];
      questionInteractiveHtml = `
        <div class="space-y-3">
          <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Berilah tanda centang (✓) pada semua pernyataan yang bernilai BENAR:
          </div>
          ${curRound.opsi.map(o => `
            <label class="p-3.5 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition ${checkedList.includes(o.id) ? 'bg-purple-500/15 border-purple-400 shadow-md ring-1 ring-purple-400' : 'bg-slate-900 border-slate-800 hover:border-slate-700'}">
              <div class="flex items-center gap-3">
                <input type="checkbox" value="${o.id}" ${checkedList.includes(o.id) ? 'checked' : ''} onchange="StrategicAuction.toggleComplexCheckbox('${o.id}')" class="w-4 h-4 text-purple-500 rounded cursor-pointer">
              </div>
              <div class="text-xs md:text-sm font-semibold text-slate-200 flex-1 pl-2 leading-relaxed">
                ${o.text}
              </div>
            </label>
          `).join('')}
        </div>
      `;
    }

    container.innerHTML = `
      <div class="flex flex-col h-full max-h-[92vh] bg-[#0A0F18] text-slate-100 font-sans overflow-hidden">
        ${renderTopBar(curRound)}

        <div class="flex-1 overflow-y-auto custom-scroll p-6 space-y-6">
          <div class="max-w-4xl mx-auto space-y-6">
            
            <!-- TARUHAN TERKUNCI BANNER -->
            <div class="p-3.5 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-shield-halved text-amber-400"></i>
                <span class="text-xs font-bold text-amber-200">Taruhan Terkunci: <b>${auctionState.currentBet} Poin</b></span>
              </div>
              <span class="text-xs font-mono text-slate-300">Ronde ${auctionState.currentRound} dari 4</span>
            </div>

            <!-- TEKS SOAL -->
            <div class="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-4 shadow-xl">
              <div class="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                ${curRound.formatTitle} • ${curRound.domain}
              </div>
              <div class="text-sm md:text-base text-slate-100 font-medium leading-relaxed whitespace-pre-line">
                ${curRound.tanya}
              </div>
            </div>

            <!-- INTERACTIVE INPUT FORM -->
            ${questionInteractiveHtml}

            <!-- SUBMIT BUTTON -->
            <button onclick="StrategicAuction.submitRoundAnswer()" class="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-slate-950 font-black text-sm tracking-wide shadow-xl flex items-center justify-center gap-2 cursor-pointer transition transform active:scale-98">
              <i class="fa-solid fa-paper-plane"></i> Kirim Keputusan Tim &amp; Evaluasi Taruhan Poin
            </button>

          </div>
        </div>
      </div>
    `;
  }

  function selectSingleAnswer(val) {
    auctionState.answers[auctionState.currentRound] = val;
    saveLocalState();
    renderCurrentView();
  }

  function setTfAnswer(statementId, isTrue) {
    const curAns = auctionState.answers[auctionState.currentRound] || { s1: null, s2: null, s3: null, s4: null };
    curAns[statementId] = isTrue;
    auctionState.answers[auctionState.currentRound] = curAns;
    saveLocalState();
    renderCurrentView();
  }

  function toggleComplexCheckbox(optId) {
    const curList = auctionState.answers[auctionState.currentRound] || [];
    const idx = curList.indexOf(optId);
    if (idx >= 0) curList.splice(idx, 1);
    else curList.push(optId);
    auctionState.answers[auctionState.currentRound] = curList;
    saveLocalState();
    renderCurrentView();
  }

  // --------------------------------------------------------------------------
  // SUBMIT & EVALUASI JAWABAN RONDE KE BACKEND
  // --------------------------------------------------------------------------
  async function submitRoundAnswer() {
    const roundNo = auctionState.currentRound;
    const ans = auctionState.answers[roundNo];

    if (!ans || (typeof ans === 'object' && Object.values(ans).some(v => v === null)) || (Array.isArray(ans) && ans.length === 0)) {
      alert("Kelompok belum melengkapi seluruh pilihan jawaban pada ronde ini!");
      return;
    }

    try {
      const res = await fetch('/api/strategic-auction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'submit_round_bet',
          kelas: auctionState.kelas,
          team_id: auctionState.teamId,
          round_no: roundNo,
          bet_amount: auctionState.currentBet,
          answer: ans
        })
      });

      if (!res.ok) throw new Error('Gagal menghubungi backend evaluasi');
      const data = await res.json();

      auctionState.roundResults[roundNo] = data;
      auctionState.points = data.new_total;
      auctionState.streak = data.streak || 0;
      auctionState.view = 'result';
      saveLocalState();
      renderCurrentView();

    } catch (e) {
      alert("Gagal melakukan sinkronisasi dengan server. Silakan coba kembali.");
    }
  }

  // --------------------------------------------------------------------------
  // VIEW 4: HASIL EVALUASI RONDE & UPDATE POIN
  // --------------------------------------------------------------------------
  function renderResultView(container) {
    const roundNo = auctionState.currentRound;
    const res = auctionState.roundResults[roundNo] || { is_correct: false, point_delta: -auctionState.currentBet };
    const curRound = AUCTION_ROUNDS[roundNo - 1];

    container.innerHTML = `
      <div class="flex flex-col h-full max-h-[92vh] bg-[#0A0F18] text-slate-100 font-sans overflow-hidden">
        ${renderTopBar(curRound)}

        <div class="flex-1 overflow-y-auto custom-scroll p-6 flex items-center justify-center">
          <div class="max-w-md w-full p-8 rounded-3xl ${res.is_correct ? 'bg-emerald-950/40 border border-emerald-500/50 shadow-emerald-900/30' : 'bg-rose-950/40 border border-rose-500/50 shadow-rose-900/30'} border space-y-6 text-center shadow-2xl">
            <div class="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-3xl shadow-xl ${res.is_correct ? 'bg-emerald-500 text-slate-950 animate-bounce' : 'bg-rose-600 text-white animate-pulse'}">
              <i class="fa-solid ${res.is_correct ? 'fa-check-double' : 'fa-skull-crossbones'}"></i>
            </div>

            <div class="space-y-1">
              <h3 class="text-xl md:text-2xl font-black ${res.is_correct ? 'text-emerald-300' : 'text-rose-400'}">
                ${res.is_correct ? '🎉 JAWABAN BENAR!' : '💥 JAWABAN SALAH!'}
              </h3>
              <p class="text-xs text-slate-400">
                ${res.is_correct ? `Analisis risiko sukses! Taruhan ${auctionState.currentBet} Poin berhasil dilipatgandakan.` : `Strategi risiko gagal. Modal taruhan ${auctionState.currentBet} Poin terpotong.`}
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div class="flex items-center justify-between text-xs text-slate-400">
                <span>Perubahan Poin:</span>
                <span class="font-bold font-mono text-sm ${res.is_correct ? 'text-emerald-400' : 'text-rose-400'}">
                  ${res.point_delta >= 0 ? '+' : ''}${res.point_delta} Pts
                </span>
              </div>
              <div class="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800 pt-2">
                <span>Total Modal Baru:</span>
                <span class="font-bold font-mono text-lg text-amber-300">${auctionState.points} Poin</span>
              </div>
            </div>

            ${roundNo < 4 ? `
              <button onclick="StrategicAuction.nextRound()" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white font-black text-xs uppercase tracking-wide cursor-pointer transition shadow-lg">
                Lanjut ke Ronde ${roundNo + 1} <i class="fa-solid fa-arrow-right ml-1"></i>
              </button>
            ` : `
              <div class="space-y-3">
                <div class="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                  🏆 Seluruh 4 Ronde Bursa Taruhan Telah Selesai!
                </div>
                <button onclick="StrategicAuction.setView('exit_ticket')" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-slate-950 font-black text-xs uppercase tracking-wide cursor-pointer transition shadow-xl transform active:scale-95">
                  <i class="fa-solid fa-ticket-simple mr-1.5"></i> Lanjut ke Mini Mastery Check (Tiket Keluar Individu - 3 Menit)
                </button>
                <button onclick="StrategicAuction.setView('projector')" class="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs cursor-pointer transition">
                  <i class="fa-solid fa-tv mr-1.5"></i> Lihat Papan Peringkat Akhir di Proyektor
                </button>
              </div>
            `}
          </div>
        </div>
      </div>
    `;
  }

  function nextRound() {
    auctionState.currentRound += 1;
    auctionState.currentBet = 100;
    auctionState.view = 'bidding';
    saveLocalState();
    renderCurrentView();
  }

  // --------------------------------------------------------------------------
  // VIEW 5: MINI MASTERY CHECK (INDIVIDUAL EXIT TICKET 3 MENIT)
  // --------------------------------------------------------------------------
  function renderExitTicketView(container) {
    const m = Math.floor(auctionState.exitTicketTimerSec / 60);
    const s = auctionState.exitTicketTimerSec % 60;

    container.innerHTML = `
      <div class="flex flex-col h-full max-h-[92vh] bg-[#0A0F18] text-slate-100 font-sans overflow-hidden">
        <!-- TOP BAR -->
        <div class="px-6 py-3.5 border-b border-slate-800 bg-[#0E1520] shrink-0 flex items-center justify-between shadow-md">
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              <i class="fa-solid fa-clipboard-check mr-1.5"></i> Mini Mastery Check (Exit Ticket)
            </span>
            <span class="text-xs text-slate-400 font-mono">2 Soal Reflektif • Durasi 3 Menit</span>
          </div>

          <div class="flex items-center gap-3">
            <div class="px-3.5 py-1 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-300 font-mono font-bold text-xs flex items-center gap-2">
              <i class="fa-solid fa-stopwatch text-amber-400"></i>
              <span>${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}</span>
            </div>
            <button onclick="StrategicAuction.closeModal()" class="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        <!-- CONTENT -->
        <div class="flex-1 overflow-y-auto custom-scroll p-6 space-y-6">
          <div class="max-w-3xl mx-auto space-y-6">
            
            <!-- IDENTITAS SISWA -->
            <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold uppercase text-slate-400 mb-1">Nomor Induk Siswa (NIS):</label>
                <input type="text" id="exit-ticket-nis" value="${auctionState.exitTicketNis}" placeholder="Contoh: 24400083" oninput="auctionState.exitTicketNis = this.value" class="w-full p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs font-mono outline-none focus:border-emerald-400">
              </div>
              <div>
                <label class="block text-xs font-bold uppercase text-slate-400 mb-1">Nama Lengkap Siswa:</label>
                <input type="text" id="exit-ticket-nama" value="${auctionState.exitTicketNama}" placeholder="Masukkan nama siswa" oninput="auctionState.exitTicketNama = this.value" class="w-full p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs font-semibold outline-none focus:border-emerald-400">
              </div>
            </div>

            <!-- SOAL 1 -->
            <div class="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-4">
              <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <span class="text-xs font-bold text-sky-400">Soal Reflektif 1: Konsep Matematis Simpangan Baku</span>
                <span class="text-[11px] font-mono text-slate-400">Bobot: 50 Poin</span>
              </div>
              <p class="text-xs md:text-sm text-slate-200 leading-relaxed">
                ${EXIT_TICKET_DATA[0].tanya}
              </p>
              <div class="space-y-2 pt-1">
                ${EXIT_TICKET_DATA[0].opsi.map(o => `
                  <label class="p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition ${auctionState.exitTicketAnswers[1] === o.id ? 'bg-sky-500/15 border-sky-400 ring-1 ring-sky-400' : 'bg-slate-900 border-slate-800 hover:border-slate-700'}">
                    <div class="flex items-center gap-3">
                      <input type="radio" name="exit_q_1" value="${o.id}" ${auctionState.exitTicketAnswers[1] === o.id ? 'checked' : ''} onchange="StrategicAuction.setExitAnswer(1, '${o.id}')" class="w-4 h-4 text-sky-500 cursor-pointer">
                      <span class="w-6 h-6 rounded-lg bg-slate-800 text-sky-300 font-bold text-xs flex items-center justify-center">${o.id}</span>
                    </div>
                    <div class="text-xs text-slate-300 flex-1 pl-2">
                      ${o.text}
                    </div>
                  </label>
                `).join('')}
              </div>
            </div>

            <!-- SOAL 2 -->
            <div class="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-4">
              <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <span class="text-xs font-bold text-emerald-400">Soal Reflektif 2: Aturan Penyusunan Tabel Distribusi Frekuensi</span>
                <span class="text-[11px] font-mono text-slate-400">Bobot: 50 Poin</span>
              </div>
              <p class="text-xs md:text-sm text-slate-200 leading-relaxed">
                ${EXIT_TICKET_DATA[1].tanya}
              </p>
              <div class="space-y-2 pt-1">
                ${EXIT_TICKET_DATA[1].opsi.map(o => `
                  <label class="p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition ${auctionState.exitTicketAnswers[2] === o.id ? 'bg-emerald-500/15 border-emerald-400 ring-1 ring-emerald-400' : 'bg-slate-900 border-slate-800 hover:border-slate-700'}">
                    <div class="flex items-center gap-3">
                      <input type="radio" name="exit_q_2" value="${o.id}" ${auctionState.exitTicketAnswers[2] === o.id ? 'checked' : ''} onchange="StrategicAuction.setExitAnswer(2, '${o.id}')" class="w-4 h-4 text-emerald-500 cursor-pointer">
                      <span class="w-6 h-6 rounded-lg bg-slate-800 text-emerald-300 font-bold text-xs flex items-center justify-center">${o.id}</span>
                    </div>
                    <div class="text-xs text-slate-300 flex-1 pl-2">
                      ${o.text}
                    </div>
                  </label>
                `).join('')}
              </div>
            </div>

            <button onclick="StrategicAuction.submitExitTicket()" class="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-slate-950 font-black text-sm tracking-wide shadow-xl flex items-center justify-center gap-2 cursor-pointer transition transform active:scale-98">
              <i class="fa-solid fa-flag-checkered"></i> Kirim Tiket Keluar &amp; Verifikasi Ketuntasan
            </button>

          </div>
        </div>
      </div>
    `;
  }

  function setExitAnswer(qNo, val) {
    auctionState.exitTicketAnswers[qNo] = val;
    saveLocalState();
    renderCurrentView();
  }

  async function submitExitTicket() {
    const nis = document.getElementById('exit-ticket-nis')?.value || auctionState.exitTicketNis;
    const nama = document.getElementById('exit-ticket-nama')?.value || auctionState.exitTicketNama;
    const ans1 = auctionState.exitTicketAnswers[1];
    const ans2 = auctionState.exitTicketAnswers[2];

    if (!nis || !nama) {
      alert("Harap masukkan NIS dan Nama Lengkap sebelum mengirim tiket keluar!");
      return;
    }
    if (!ans1 || !ans2) {
      alert("Harap jawab kedua butir soal reflektif terlebih dahulu!");
      return;
    }

    try {
      const res = await fetch('/api/strategic-auction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'submit_exit_ticket',
          kelas: auctionState.kelas,
          nis: nis,
          nama: nama,
          ans1: ans1,
          ans2: ans2
        })
      });

      if (!res.ok) throw new Error('Gagal submit exit ticket');
      const data = await res.json();

      alert(`✅ TIKET KELUAR BERHASIL DIKIRIM!\n\nNama: ${data.nama}\nSkor Penguasaan: ${data.score} / 100\nStatus: Terverifikasi di Dashboard CBT Guru\n\nPenjelasan Jebakan Konsep:\n• Soal 1: ${data.feedback.q1_explanation}\n• Soal 2: ${data.feedback.q2_explanation}`);

      auctionState.exitTicketDone = true;
      auctionState.exitTicketScore = data.score;
      auctionState.view = 'lobby';
      saveLocalState();
      renderCurrentView();

    } catch (e) {
      alert("Terjadi kesalahan jaringan saat mengirim tiket keluar.");
    }
  }

  // --------------------------------------------------------------------------
  // VIEW 7: PROJECTOR VIEW (LAYAR KELAS REAL-TIME)
  // --------------------------------------------------------------------------
  async function renderProjectorView(container) {
    let teams = [];
    try {
      const res = await fetch(`/api/strategic-auction?kelas=${encodeURIComponent(auctionState.kelas)}&action=leaderboard`);
      if (res.ok) {
        const d = await res.json();
        teams = d.teams || [];
      }
    } catch(e) {}

    container.innerHTML = `
      <div class="flex flex-col h-full max-h-[92vh] bg-[#070B12] text-slate-100 font-sans overflow-hidden">
        <!-- TOP BAR PROYEKTOR -->
        <div class="px-8 py-4 border-b border-slate-800 bg-[#0A0E17] shrink-0 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-bold text-lg">
              <i class="fa-solid fa-tv"></i>
            </div>
            <div>
              <div class="text-[11px] font-bold uppercase text-amber-400 tracking-wider">
                Layar Proyektor Kelas • SMA GIS 2 Serpong
              </div>
              <h1 class="text-xl font-black text-white">
                Bursa Taruhan Poin (Strategic Auction) (${escapeHtml(auctionState.kelas)})
              </h1>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <button onclick="StrategicAuction.refreshLeaderboard()" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 border border-slate-700 transition cursor-pointer">
              <i class="fa-solid fa-arrows-rotate mr-1"></i> Refresh Data
            </button>
            <button onclick="StrategicAuction.setView('lobby')" class="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white transition cursor-pointer">
              Kembali ke Terminal Tim
            </button>
          </div>
        </div>

        <!-- MAIN PROYEKTOR ARENA -->
        <div class="flex-1 overflow-y-auto custom-scroll p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <!-- LEFT 2 COLS: LIVE LEADERBOARD -->
          <div class="lg:col-span-2 p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-5 shadow-2xl">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
              <span class="text-sm font-black uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <i class="fa-solid fa-trophy"></i> Papan Peringkat Real-Time (Live Risk Leaderboard)
              </span>
              <span class="text-xs text-slate-400 font-mono">Modal Dasar: 1.000 Pts</span>
            </div>

            <div class="space-y-2.5">
              ${teams.length > 0 ? teams.map((t, idx) => `
                <div class="p-4 rounded-2xl flex items-center justify-between gap-4 transition ${idx === 0 ? 'bg-gradient-to-r from-amber-500/20 via-slate-900 to-slate-900 border border-amber-400/50 shadow-lg' : 'bg-slate-950/80 border border-slate-800'}">
                  <div class="flex items-center gap-3.5">
                    <span class="w-8 h-8 rounded-xl ${idx === 0 ? 'bg-amber-400 text-slate-950 font-black' : (idx === 1 ? 'bg-slate-300 text-slate-950 font-black' : (idx === 2 ? 'bg-amber-700 text-white font-black' : 'bg-slate-800 text-slate-400 font-bold'))} flex items-center justify-center text-sm shadow">
                      ${idx + 1}
                    </span>
                    <div>
                      <div class="font-bold text-white text-sm">${escapeHtml(t.team_name)}</div>
                      <div class="text-[10px] text-slate-400 font-mono">Ronde Tuntas: ${Number(t.rounds_completed) || 0} / 4</div>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-xl font-black font-mono text-amber-300">${t.current_points} Pts</div>
                    <div class="text-[10px] text-slate-400">${t.current_points > 1000 ? `Surplus: +${t.current_points - 1000}` : (t.current_points < 1000 ? `Defisit: ${t.current_points - 1000}` : 'Imbang')}</div>
                  </div>
                </div>
              `).join('') : `
                <div class="text-center py-12 text-slate-500 text-xs">
                  Belum ada tim yang menyelesaikan ronde taruhan di kelas ini.
                </div>
              `}
            </div>
          </div>

          <!-- RIGHT COL: PEDAGOGY TIMETABLE & ROTATION PROTOCOL -->
          <div class="space-y-6">
            <div class="p-6 rounded-3xl bg-[#0F172A] border border-slate-800 space-y-4 shadow-xl">
              <div class="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2">
                <i class="fa-solid fa-clock"></i> Alokasi Waktu 2 JP (90 Menit)
              </div>
              <div class="space-y-2.5 text-xs text-slate-300">
                <div class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex justify-between">
                  <span>10 Menit: Pembagian Tim &amp; Modal 1.000 Poin</span>
                  <span class="font-mono text-amber-300">10'</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex justify-between">
                  <span>55 Menit: 4 Ronde Taruhan &amp; Bedah Trik Kilat</span>
                  <span class="font-mono text-amber-300">55'</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex justify-between">
                  <span>15 Menit: Mini Mastery Check Individu (3 Menit)</span>
                  <span class="font-mono text-amber-300">15'</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex justify-between">
                  <span>10 Menit: Penganugerahan Risk Master &amp; Penutup</span>
                  <span class="font-mono text-amber-300">10'</span>
                </div>
              </div>
            </div>

            <div class="p-6 rounded-3xl bg-gradient-to-br from-purple-950/40 to-slate-900 border border-purple-500/30 space-y-3">
              <div class="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2">
                <i class="fa-solid fa-lightbulb"></i> Tips Manajemen Risiko
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                Kelompok yang sukses tidak selalu memasang 300 poin di setiap ronde. Gunakan taruhan konservatif (100–150 Pts) saat menghadapi soal C5 evaluasi dan maksimalkan taruhan agresif saat menemukan pola pemusatan dan penyebaran data yang telah dikuasai!
              </p>
            </div>
          </div>

        </div>
      </div>
    `;
  }

  function refreshLeaderboard() {
    renderProjectorView(document.getElementById('auction-modal-content'));
  }

  // --------------------------------------------------------------------------
  // SHARED TOP BAR
  // --------------------------------------------------------------------------
  function renderTopBar(curRound) {
    return `
      <div class="px-6 py-3.5 border-b border-slate-800 bg-[#0E1520] shrink-0 flex flex-wrap items-center justify-between gap-3 shadow-md">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-600 flex items-center justify-center text-white text-base shadow">
            <i class="fa-solid fa-coins"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-bold text-white text-xs">${escapeHtml(auctionState.teamName)}</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-300">${escapeHtml(auctionState.kelas)}</span>
            </div>
            <div class="text-[10px] text-slate-400">Ronde ${auctionState.currentRound} dari 4</div>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <!-- CURRENT BANK -->
          <div class="px-4 py-1.5 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-300 font-mono font-black text-sm flex items-center gap-2 shadow-inner">
            <i class="fa-solid fa-sack-dollar text-amber-400"></i>
            <span>${auctionState.points} Poin</span>
          </div>

          <!-- STREAK -->
          ${auctionState.streak > 0 ? `
            <div class="px-3 py-1.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold flex items-center gap-1.5">
              <i class="fa-solid fa-fire text-amber-400"></i> ${auctionState.streak}x Streak
            </div>
          ` : ''}

          <!-- CLOSE -->
          <button onclick="StrategicAuction.closeModal()" class="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // GLOBAL EXPORTS
  // --------------------------------------------------------------------------
  window.StrategicAuction = {
    state: auctionState,
    openModal: openAuctionModal,
    closeModal: closeAuctionModal,
    changeClass: changeClass,
    startAuction: startAuction,
    setBet: setBet,
    lockBetAndReveal: lockBetAndReveal,
    selectSingleAnswer: selectSingleAnswer,
    setTfAnswer: setTfAnswer,
    toggleComplexCheckbox: toggleComplexCheckbox,
    submitRoundAnswer: submitRoundAnswer,
    nextRound: nextRound,
    setView: setView,
    setExitAnswer: setExitAnswer,
    submitExitTicket: submitExitTicket,
    refreshLeaderboard: refreshLeaderboard
  };

  // Auto init state on load
  loadLocalState();

})();
