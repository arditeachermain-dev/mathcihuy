
    // TOGGLE SLIDE TOOLS DROPDOWN
    function toggleSlideToolsDropdown(e) {
      if (e) e.stopPropagation();
      const menu = document.getElementById('slide-tools-dropdown');
      if (menu) {
        menu.classList.toggle('hidden');
      }
    }

    // Close slide tools dropdown when clicking outside
    document.addEventListener('click', function(e) {
      const container = document.getElementById('slide-tools-container');
      const menu = document.getElementById('slide-tools-dropdown');
      if (container && menu && !container.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });


    // TOGGLE USER DROPDOWN MENU
    function toggleUserDropdownMenu(e) {
      if (e) e.stopPropagation();
      const menu = document.getElementById('user-profile-dropdown');
      if (menu) {
        menu.classList.toggle('hidden');
      }
    }

    // Close user dropdown when clicking outside
    document.addEventListener('click', function(e) {
      const container = document.getElementById('user-menu-container');
      const menu = document.getElementById('user-profile-dropdown');
      if (container && menu && !container.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });


    // 2. CORE APPLICATION STATE
    let currentMode = 'home'; // 'home', 'wajib', 'minat', 'clil', 'tka'
    let currentMeetingIdx = 0;
    let currentSlideIdx = 0;
    
    let tkaSubj = 'wajib'; // 'wajib', 'minat', 'clil'
    let tkaPkgId = 'P01';
    let tkaQIdx = 0;
    let userSessionScores = {}; // Persisted in localStorage

    let timerInterval = null;
    let isDrawing = false;
    let penMode = false;
    let tkaTimerSec = 180;
    let tkaTimerInt = null;

    let userMultiAnswers = [];
    let userTfAnswers = {};

    // PERSISTENCE STORAGE KEYS
    const STORAGE_STATE_KEY = 'gis_math_portal_state_v3';
    const STORAGE_SCORES_KEY = 'gis_math_portal_scores_v3';

    // 3. INITIALIZATION & ROUTING ENGINE
    function initPortal() {
      // Load scores
      try {
        const sc = localStorage.getItem(STORAGE_SCORES_KEY);
        if (sc) userSessionScores = JSON.parse(sc);
      } catch (e) {}

      // Parse Hash Route
      let routed = false;
      if (window.location.hash && window.location.hash.startsWith('#/')) {
        routed = parseHashRoute(window.location.hash);
      }

      if (!routed) {
        // Load last session from localStorage
        try {
          const st = localStorage.getItem(STORAGE_STATE_KEY);
          if (st) {
            const parsed = JSON.parse(st);
            currentMode = parsed.mode || 'home';
            currentMeetingIdx = parsed.meetingIdx || 0;
            currentSlideIdx = parsed.slideIdx || 0;
            tkaSubj = parsed.tkaSubj || 'wajib';
            tkaPkgId = parsed.tkaPkgId || 'P01';
            tkaQIdx = parsed.tkaQIdx || 0;
          }
        } catch (e) {}
      }

      // Listen to Hash Changes (Browser Back/Forward Buttons)
      window.addEventListener('hashchange', () => {
        parseHashRoute(window.location.hash);
      });

      // Keyboard Shortcut (Ctrl + K for search)
      window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          openSearchModal();
        }
        const typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target && e.target.tagName) || '')
                    || (e.target && e.target.isContentEditable);
        const modalOpen = ['quick-search-modal', 'schedule-modal', 'analytics-modal', 'tka-scorecard-modal', 'meeting-picker-modal', 'rumus-modal', 'lab-modal', 'tryout-modal']
          .some(id => { const m = document.getElementById(id); return m && !m.classList.contains('hidden'); });

        if (!typing && !modalOpen && !e.ctrlKey && !e.metaKey && !e.altKey) {
          // presenter keys: arrows / space page through slides and questions,
          // A-E answers the question on screen without reaching for the mouse
          const K = e.key.toLowerCase();

          // Layar gelap menutup segalanya: tombol apa pun mengembalikannya.
          if (presState.black) { e.preventDefault(); presBlackout(false); return; }

          // --- pemetaan baku presenter, hanya berlaku saat menampilkan slide ---
          if (presSlideMode()) {
            if (K === 'f') { e.preventDefault(); toggleCinema(); return; }
            if (K === 'b') { e.preventDefault(); presBlackout(); return; }
            if (K === 'l') { e.preventDefault(); presLaser(); return; }
            if (K === 'p') { e.preventDefault(); presPen(); return; }
            if (K === 'a') { e.preventDefault(); jumpToCbt(); return; }
            if (K === 'e') { e.preventDefault(); buatLKPD(); return; }
          }
          // --- pintasan portal ---
          if (K === 'm' && currentMode !== 'home') { e.preventDefault(); openMeetingPicker(); return; }
          if (K === 'r' && currentMode !== 'home') { e.preventDefault(); openRumusSaku(); return; }
          if (K === 'v' && currentMode !== 'home') { e.preventDefault(); openLab(); return; }
          if (currentMode === 'wajib' || currentMode === 'minat' || currentMode === 'clil') {
            if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); nextSlide(); return; }
            if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prevSlide(); return; }
          } else if (currentMode === 'tka') {
            if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); nextTkaQ(); return; }
            if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prevTkaQ(); return; }
            const L = e.key.toUpperCase();
            if (/^[A-E]$/.test(L)) {
              const single = document.getElementById('opt-btn-' + L);
              const multi = document.getElementById('multi-opt-' + L);
              if (single && !single.disabled) { e.preventDefault(); single.click(); return; }
              if (multi && !multi.disabled) { e.preventDefault(); multi.click(); return; }
            }
            if (e.key.toLowerCase() === 'g') {
              const gb = document.getElementById('viz-btn');
              if (gb) { e.preventDefault(); gb.click(); return; }
            }
            if (e.key === 'Enter') {
              const btn = document.getElementById('multi-submit') || document.getElementById('tf-submit');
              if (btn && !btn.disabled) { e.preventDefault(); btn.click(); return; }
            }
          }
        }
        if (!typing && e.altKey && e.key.toLowerCase() === 'm') { e.preventDefault(); toggleCurriculumDrawer(); return; }
        // Ctrl +/- memperbesar portal saja, bukan seluruh jendela browser,
        // sehingga tata letaknya tetap utuh saat dibagikan lewat layar.
        if ((e.ctrlKey || e.metaKey) && (e.key === '=' || e.key === '+' || e.key === '-' || e.key === '_')) {
          e.preventDefault(); stepUiScale((e.key === '-' || e.key === '_') ? -1 : 1); return;
        }
        if ((e.ctrlKey || e.metaKey) && e.key === '0') { e.preventDefault(); uiStepIdx = 0; applyUiScale(); return; }
        if (e.key === 'Escape') {
          closePeta();
          closeTryout();
          if (presState.black || presState.laser || presState.pen) { presReset(); return; }
          closeLab();
          closeRumusSaku();
          closeMeetingPicker();
          if (cinemaAktif() && !document.fullscreenElement) setCinema(false);
          closeSearchModal();
          closeCurriculumDrawer();
          closeScheduleModal();
          closeAnalyticsModal();
          closeTkaScorecardModal();
        }
      });

      loadUiScale();
      muatKemajuan();
      renderAppView();
      renderCurriculumDrawer();
      pasangSidebar();
      detectTodaySession();
      renderHomeCurriculumHub();
    }

    let activeHubSubj = 'wajib';

    function renderHomeCurriculumHub() {
      const hub = document.getElementById('home-curriculum-hub');
      if (!hub) return;

      const tabs = [
        { key: 'wajib', name: '📘 Wajib', count: 21, color: 'blue' },
        { key: 'minat', name: '📙 Minat', count: 30, color: 'amber' },
        { key: 'clil', name: '🌐 CLIL', count: 6, color: 'emerald' }
      ];

      const tabsHtml = tabs.map(t => {
        const isAct = t.key === activeHubSubj;
        const activeClass = isAct 
          ? `bg-blue-600 text-white font-black shadow-lg border-blue-500` 
          : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700';
        return `
          <button onclick="switchHubTab('${t.key}')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1 active:scale-95 ${activeClass}">
            <span>${t.name}</span>
          </button>
        `;
      }).join('');

      const meetings = db[activeHubSubj] || [];
      const gridHtml = meetings.map((m, idx) => {
        return `
          <button onclick="openMeetingFromHub('${activeHubSubj}', ${idx})" class="p-3 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-500/40 rounded-2xl text-left transition hover:scale-[1.02] flex items-start gap-2.5 shadow-md group">
            <span class="w-8 h-8 rounded-xl bg-slate-950 border border-slate-800 text-amber-400 font-mono font-black text-xs flex items-center justify-center shrink-0 group-hover:border-amber-400/50 group-hover:bg-amber-500/10 group-hover:text-amber-300 transition">
              ${m.id}
            </span>
            <div class="min-w-0 flex-1">
              <div class="text-[11px] font-black text-slate-100 truncate leading-snug group-hover:text-amber-300 transition">${m.title}</div>
              <div class="text-[11px] text-slate-400 font-mono truncate mt-0.5">${m.bab || ''}</div>
            </div>
          </button>
        `;
      }).join('');

      hub.innerHTML = `
        <div class="p-4 bg-slate-950/90 border border-slate-800 rounded-3xl space-y-4 shadow-2xl">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 text-sm">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <div>
                <h3 class="text-xs md:text-sm font-extrabold text-white">DAFTAR MODUL & NAVIGASI PERTEMUAN KBM</h3>
                <p class="text-[11px] md:text-[10px] text-slate-400">Klik salah satu pertemuan di bawah untuk langsung membuka slide pembelajarannya</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5 overflow-x-auto pb-1">
              ${tabsHtml}
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            ${gridHtml}
          </div>
        </div>
      `;
    }

    function switchHubTab(subj) {
      activeHubSubj = subj;
      renderHomeCurriculumHub();
    }

    function openMeetingFromHub(subj, idx) {
      currentMode = subj;
      currentMeetingIdx = idx;
      currentSlideIdx = 0;
      renderAppView();
    }

    function detectTodaySession() {
      // Detect current day and suggest today's meeting
      const today = new Date();
      const dayNames = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
      const dayName = dayNames[today.getDay()];
      const dateStr = today.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
      
      // Estimate meeting based on current date (rough calculation from July 14, 2026 start)
      const startDate = new Date('2026-07-14');
      const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
      const estimatedMeeting = Math.max(1, Math.min(21, Math.floor(diffDays / 7) + 1));
      const mId = 'P' + estimatedMeeting.toString().padStart(2, '0');
      
      const wajibMeetings = db['wajib'] || [];
      const todayMeeting = wajibMeetings.find(m => m.id === mId) || wajibMeetings[0];
      
      const banner = document.getElementById('today-session-banner');
      const textEl = document.getElementById('today-session-text');
      const btnEl = document.getElementById('today-session-btn');
      
      if (banner && todayMeeting) {
        // Show banner on weekdays (Mon-Sat)
        if (today.getDay() !== 0) { // Not Sunday
          banner.classList.remove('hidden');
          textEl.textContent = `${dayName}, ${dateStr} — ${todayMeeting.id}: ${todayMeeting.title}`;
          if (btnEl) {
            btnEl.onclick = () => {
              currentMode = 'wajib';
              const idx = wajibMeetings.findIndex(m => m.id === todayMeeting.id);
              currentMeetingIdx = idx !== -1 ? idx : 0;
              currentSlideIdx = 0;
              renderAppView();
            };
          }
        }
      }
    }


    // ---------------------------------------------------------------
    // SAPAAN MENURUT WAKTU & BANK KALIMAT
    // Sapaan yang berubah membuat portal terasa hidup, bukan halaman
    // statis. Bank kalimat muncul saat jawaban dikoreksi dan hasilnya
    // salah -- sengaja pendek, dan menghindari nada sorak-sorai.
    // ---------------------------------------------------------------
    function panggilanSiswa() {
      try {
        const sesi = getSession();
        if (!sesi || sesi.type !== 'siswa') return '';
        const nama = (sesi.data.name || sesi.data.nama || '').trim();
        return nama ? nama.split(/\s+/)[0] : '';
      } catch (e) { return ''; }
    }

    function sapaanWaktu() {
      const nama = panggilanSiswa();
      if (!nama) return '';
      const jam = new Date().getHours();
      if (jam < 11) return 'Pagi, ' + nama + '. Mau mulai dari mana?';
      if (jam < 18) return 'Siang, ' + nama + '. Sisa harinya masih panjang.';
      return 'Malam, ' + nama + '. Sepuluh soal dulu, baru tidur?';
    }

    function pasangSapaan() {
      const el = document.getElementById('sapaan-waktu');
      if (!el) return;
      const t = sapaanWaktu();
      el.textContent = t;
      el.style.display = t ? '' : 'none';
    }

    const KALIMAT_SALAH = [
      'Salah itu data. Lanjut.',
      'Kalau langsung bisa, namanya bukan latihan.',
      'Yang salah hari ini adalah soal yang kamu kuasai bulan depan.',
      'Otak perlu macet dulu sebelum lancar.',
      'Belum paham di menit pertama itu normal. Berhenti di menit pertama yang tidak.',
      'Baca ulang soalnya. Pelan. Sekali lagi.',
      'Rumusnya tidak berubah. Kamu yang makin kenal.',
      'Hafal rumus itu bonus. Paham jalannya itu wajib.'
    ];

    // Dipanggil tepat setelah kotak pembahasan dibuka. Benar/salahnya
    // dibaca dari catatan nilai soal yang sedang dibuka, sehingga satu
    // fungsi ini melayani pilihan majemuk, benar-salah, dan isian angka.
    // Sebagian rumus lebih lebar daripada kartunya dan hanya bisa dibaca dengan
    // menggeser mendatar. Chromium memakai batang geser melayang yang tidak
    // memakan ruang, sehingga siswa tidak punya petunjuk apa pun bahwa masih
    // ada lanjutan -- rumus terbaca seperti terpenggal. Penanda ini memberi
    // gradasi di tepi kanan dan label kecil, dan hilang begitu digeser habis.
    function tandaiRumusLebar(akar) {
      try {
        const kotak = (akar || document).querySelectorAll('.fb-math');
        kotak.forEach(function (fb) {
          const m = fb.querySelector('.katex-display') || fb.querySelector('.katex');
          if (!m) return;
          const perbarui = function () {
            const sisa = m.scrollWidth - m.clientWidth - m.scrollLeft;
            fb.classList.toggle('rumus-lebar', sisa > 2);
          };
          perbarui();
          if (!m.dataset.geserTerpasang) {
            m.dataset.geserTerpasang = '1';
            m.addEventListener('scroll', perbarui, { passive: true });
          }
        });
      } catch (e) { /* penanda geser tidak boleh mengganggu materi */ }
    }

    function kalimatSetelahDikoreksi() {
      try {
        const kotak = document.getElementById('tka-solution-box');
        if (!kotak) return;
        const benar = userSessionScores[tkaSubj + '_' + tkaPkgId + '_' + tkaQIdx];
        let el = document.getElementById('kalimat-salah');
        if (benar === false) {
          if (!el) {
            el = document.createElement('p');
            el.id = 'kalimat-salah';
            el.className = 'text-xs md:text-sm text-amber-300 font-semibold italic mb-1';
            kotak.insertBefore(el, kotak.firstChild);
          }
          el.textContent = KALIMAT_SALAH[Math.floor(Math.random() * KALIMAT_SALAH.length)];
          el.style.display = '';
        } else if (el) {
          el.style.display = 'none';
        }
      } catch (e) { /* kalimat penyemangat tidak boleh mengganggu soal */ }
    }

    // PARSE HASH ROUTE

    // ===== KUNCI MAPEL BERDASARKAN HAK AKSES KELAS =====
    // Siswa dengan access_level 'wajib_only' (mis. XII F1 & F2) tidak melihat
    // Matematika Minat dan CLIL sama sekali: tab, kartu beranda, sub-menu
    // CBT, hasil pencarian, dan rute #/minat & #/clil semuanya ditutup.
    function lockedSubjects() {
      try {
        const sess = getSession();
        if (sess && sess.type === 'siswa' && sess.data && sess.data.access_level === 'wajib_only') {
          return ['minat', 'clil'];
        }
      } catch (e) {}
      return [];
    }

    function isLocked(mode) {
      return lockedSubjects().indexOf(mode) !== -1;
    }

    // Angka pada tab ("Wajib (21)", "Minat (30)", ...) ditulis di index.html
    // mengikuti kelas XII. Di sini angkanya ditimpa dengan jumlah yang
    // sebenarnya ada pada tingkat ini, supaya halaman XI tidak ikut
    // menampilkan angka milik XII.
    function perbaruiJumlahTab() {
      const jml = function (k) { return (db[k] || []).length; };
      const jmlSoal = function (k) { return Object.keys(db['tka_' + k] || {}).length; };

      // Tab utama: hanya bagian "(n)" pada teks tombol yang diganti,
      // supaya ikon dan awalan "Matematika " di dalamnya tetap utuh.
      const utama = { 'wajib': jml('wajib'), 'minat': jml('minat'), 'clil': jml('clil'),
                      'tka': jmlSoal('wajib') + jmlSoal('minat') + jmlSoal('clil') };
      Object.keys(utama).forEach(function (k) {
        const el = document.getElementById('tab-' + k);
        if (!el) return;
        el.childNodes.forEach(function (n) {
          if (n.nodeType === 3 && /\(\d+\)/.test(n.nodeValue)) {
            n.nodeValue = n.nodeValue.replace(/\(\d+\)/, '(' + utama[k] + ')');
          }
        });
      });

      // Sub-tombol di layar CBT: seluruh teksnya memang hanya label + angka.
      const nama = { 'wajib': 'Wajib', 'minat': 'Minat', 'clil': 'CLIL' };
      Object.keys(nama).forEach(function (k) {
        const el = document.getElementById('tka-btn-' + k);
        if (el) el.textContent = nama[k] + ' (' + jmlSoal(k) + ')';
      });

      // Kartu-kartu di beranda juga memuat angka yang ditulis mengikuti
      // kelas XII. Semuanya diisi ulang dari data tingkat ini.
      const butir = function (k) {
        return Object.keys(db['tka_' + k] || {}).reduce(function (n, id) {
          const q = (db['tka_' + k][id] || {}).questions;
          return n + (q ? q.length : 0);
        }, 0);
      };
      const totalButir = butir('wajib') + butir('minat') + butir('clil');
      const isi = function (id, teks) {
        const el = document.getElementById(id);
        if (el) el.textContent = teks;
      };
      isi('jml-soal-hero', String(totalButir));
      isi('jml-soal-kartu', String(totalButir));
      isi('jml-wajib-kartu', String(jml('wajib')));
      isi('jml-minat-kartu', String(jml('minat')));
      isi('jml-clil-kartu', String(jml('clil')));
      isi('tombol-wajib-kartu', jml('wajib') ? 'Buka ' + jml('wajib') + ' Pertemuan' : 'Belum Ada Materi');
      isi('tombol-minat-kartu', jml('minat') ? 'Buka ' + jml('minat') + ' Pertemuan' : 'Belum Ada Materi');
      isi('opsi-wajib', 'Matematika Wajib (' + jml('wajib') + ' Pertemuan)');
      isi('opsi-minat', 'Additional Mathematics (' + jml('minat') + ' Pertemuan)');
    }

    // Sembunyikan elemen dengan inline style supaya tidak terhapus saat
    // renderAppView() menimpa className tab.
    function applyAccessGate() {
      perbaruiJumlahTab();
      if (typeof sidebarMenetap === 'function' && sidebarMenetap() &&
          typeof renderCurriculumDrawer === 'function') {
        const cari = document.getElementById('drawer-search-input');
        renderCurriculumDrawer(cari ? cari.value : '');
      }
      const locked = lockedSubjects();
      ['minat', 'clil'].forEach(function (m) {
        const off = locked.indexOf(m) !== -1;
        const els = [
          document.getElementById('tab-' + m),
          document.getElementById('tka-btn-' + m)
        ].concat([].slice.call(document.querySelectorAll('[data-gate="' + m + '"]')));
        els.forEach(function (el) {
          if (el) el.style.display = off ? 'none' : '';
        });
      });
      // Kalau siswa sedang berada di mapel terkunci, lempar balik ke beranda.
      if (locked.indexOf(currentMode) !== -1) {
        currentMode = 'home';
        renderAppView();
      }
      if (locked.indexOf(tkaSubj) !== -1) {
        tkaSubj = 'wajib';
        tkaPkgId = 'P01';
        tkaQIdx = 0;
      }
      tampilkanPesanTanpaMateri(locked);
    }

    // Sebuah halaman tingkat bisa saja hanya memuat mapel yang terkunci bagi
    // siswa tertentu -- halaman kelas XI, misalnya, saat ini hanya berisi
    // Peminatan, sedangkan XII F1 & F2 berstatus 'wajib_only'. Tanpa penjelasan,
    // mereka membuka portal yang tampak kosong dan mengira aplikasinya rusak.
    // Panel di bawah ini menerangkan keadaannya dan memberi jalan kembali.
    function tampilkanPesanTanpaMateri(locked) {
      try {
        const sesi = getSession();
        const kotak = document.getElementById('portal-kosong');
        if (!sesi || sesi.type !== 'siswa') { if (kotak) kotak.remove(); return; }

        // Mapel yang benar-benar punya isi di halaman ini.
        const berisi = ['wajib', 'minat', 'clil'].filter(function (m) {
          const src = (m === 'wajib') ? db.wajib : (m === 'clil' ? db.clil : db.minat);
          return Array.isArray(src) ? src.length > 0 : Object.keys(src || {}).length > 0;
        });
        const terbuka = berisi.filter(function (m) { return locked.indexOf(m) === -1; });
        if (terbuka.length > 0) { if (kotak) kotak.remove(); return; }

        if (kotak) return;                       // sudah tampil, jangan digandakan
        const induk = document.getElementById('app-body')
                   || document.querySelector('main')
                   || document.body;
        const el = document.createElement('div');
        el.id = 'portal-kosong';
        el.className = 'max-w-xl mx-auto my-10 p-6 md:p-8 rounded-2xl border border-amber-500/40 bg-[#0D1A2E] shadow-xl text-center';
        el.innerHTML =
          '<h2 class="text-lg md:text-xl font-black text-amber-400 mb-2">Belum ada materi untukmu di halaman ini</h2>' +
          '<p class="text-sm text-slate-300 leading-relaxed mb-5">Halaman ini berisi Matematika Peminatan kelas ' +
          (typeof NAMA_TINGKAT !== 'undefined' ? NAMA_TINGKAT : '') +
          '. Kelasmu tidak mengambil Peminatan, jadi tidak ada yang bisa dibuka di sini. ' +
          'Portalnya tidak rusak &mdash; materimu ada di halaman kelasmu sendiri.</p>' +
          '<a href="/" class="inline-block px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-900 rounded-xl text-sm font-black transition">Kembali ke portal kelasku</a>';
        induk.insertBefore(el, induk.firstChild);
      } catch (e) { /* pesan ini tidak boleh mengganggu portal */ }
    }

    function parseHashRoute(hash) {
      if (!hash || hash === '#' || hash === '#/' || hash === '#/home') {
        currentMode = 'home';
        renderAppView();
        return true;
      }
      if (!hash.startsWith('#/')) return false;
      const parts = hash.replace(/^#\//, '').split('/');
      
      if (parts[0] === 'home') {
        currentMode = 'home';
        renderAppView();
        return true;
      } else if (parts[0] === 'cbt') {
        tkaSubj = parts[1] || 'wajib';
        if (isLocked(tkaSubj)) { tkaSubj = 'wajib'; }
        tkaPkgId = parts[2] || 'P01';
        tkaQIdx = Math.max(0, (parseInt(parts[4]) || 1) - 1);
        currentMode = 'tka';
        renderAppView();
        return true;
      } else if (['wajib', 'minat', 'clil'].includes(parts[0])) {
        if (isLocked(parts[0])) {      // rute langsung ke mapel terkunci
          currentMode = 'home';
          renderAppView();
          return true;
        }
        currentMode = parts[0];
        const pkgId = parts[1];
        const slideNum = parseInt(parts[3]) || 1;
        
        const meetings = db[currentMode] || [];
        const mIdx = meetings.findIndex(m => m.id === pkgId);
        currentMeetingIdx = (mIdx !== -1) ? mIdx : 0;
        currentSlideIdx = Math.max(0, Math.min(12, slideNum - 1));
        
        renderAppView();
        return true;
      }
      return false;
    }

    // SWITCH SUBJECT
    function switchSubject(mode) {
      if (isLocked(mode)) return;   // mapel terkunci untuk kelas ini
      currentMode = mode;
      if (mode === 'home') {
        renderAppView();
        return;
      }
      currentMeetingIdx = 0;
      currentSlideIdx = 0;
      if (mode === 'tka') {
        tkaQIdx = 0;
      }
      renderAppView();
    }

    // TKA SUB-TOGGLE
    function tkaSrc(subj) {
      const t = subj || tkaSubj;
      if (t === 'custom') return db.tka_custom || {};
      // Tiap tingkat boleh tidak punya semua mapel. Kalau kumpulan soalnya
      // belum ada, kembalikan objek kosong -- bukan undefined -- supaya
      // pemanggilnya cukup menampilkan "sedang dipersiapkan", bukan galat.
      const src = t === 'wajib' ? db.tka_wajib : (t === 'clil' ? db.tka_clil : db.tka_minat);
      return src || {};
    }

    function toggleTkaSubj(s) {
      if (isLocked(s)) return;   // paket CBT mapel terkunci
      tkaSubj = s;
      const src = tkaSrc(s);
      if (!src[tkaPkgId]) {
        tkaPkgId = s === 'clil' ? 'P25' : (s === 'custom' ? 'TRYOUT' : 'P01');
      }
      tkaQIdx = 0;
      renderAppView();
    }

    // AUTOLINK HELPER
    function openTkaForCurrentMeeting(pkgId, qIndex, overrideSubj) {
      let targetSubj = overrideSubj || (currentMode === 'clil' ? 'clil' : (currentMode === 'minat' ? 'minat' : 'wajib'));
      if (isLocked(targetSubj)) targetSubj = 'wajib';
      const meeting = db[currentMode] ? db[currentMode][currentMeetingIdx] : null;
      const targetPkgId = pkgId || (meeting ? meeting.id : (targetSubj === 'clil' ? 'P25' : 'P01'));
      
      tkaSubj = targetSubj;
      tkaPkgId = targetPkgId;
      tkaQIdx = (qIndex !== undefined) ? qIndex : 0;
      currentMode = 'tka';
      renderAppView();
    }

    function returnToSlideMode() {
      const targetMode = tkaSubj === 'clil' ? 'clil' : (tkaSubj === 'minat' ? 'minat' : 'wajib');
      currentMode = targetMode;
      const meetings = db[targetMode] || [];
      const mIdx = meetings.findIndex(m => m.id === tkaPkgId);
      if (mIdx !== -1) currentMeetingIdx = mIdx;
      currentSlideIdx = 10;
      renderAppView();
    }

    function scrollActiveIntoView() {
      const tab = document.getElementById('tab-' + currentMode);
      if (tab && tab.scrollIntoView) tab.scrollIntoView({ block: 'nearest', inline: 'center' });
      const ribbon = document.getElementById('meeting-ribbon');
      if (ribbon) {
        const act = [...ribbon.children].find(b =>
          b.className.includes('bg-amber-500') || b.className.includes('bg-blue-600'));
        if (act && act.scrollIntoView) act.scrollIntoView({ block: 'nearest', inline: 'center' });
      }
    }

    // RENDER APP VIEW
    function renderAppView() {
      const homeStage = document.getElementById('home-stage');
      const slideStage = document.getElementById('slide-stage');
      const tkaStage = document.getElementById('tka-stage');
      const ribbon = document.getElementById('meeting-ribbon');

      // Update Top Tabs
      setTimeout(scrollActiveIntoView, 0);
      ['home', 'wajib', 'minat', 'clil', 'tka'].forEach(m => {
        const btn = document.getElementById('tab-' + m);
        if (btn) {
          if (m === currentMode) {
            btn.className = "px-2.5 py-1 rounded-lg text-xs font-bold transition whitespace-nowrap bg-blue-600 text-white shadow flex items-center gap-1.5";
          } else {
            btn.className = "px-2.5 py-1 rounded-lg text-xs font-semibold transition whitespace-nowrap text-slate-400 hover:text-white flex items-center gap-1";
          }
        }
      });

      if (currentMode === 'home') {
        homeStage.classList.remove('hidden');
        slideStage.classList.add('hidden');
        tkaStage.classList.add('hidden');
        ribbon.classList.add('hidden');
        document.getElementById('header-subject-label').innerText = 'Beranda Kurikulum & Portal Pembelajaran';
        renderAcademicCalendar(currentCalFilter, 'home-academic-calendar');
        pasangSapaan();
        renderMath(homeStage);
      } else if (currentMode === 'tka') {
        homeStage.classList.add('hidden');
        slideStage.classList.add('hidden');
        tkaStage.classList.remove('hidden');
        ribbon.classList.remove('hidden');
        const subjName = tkaSubj === 'clil' ? 'CLIL English' : (tkaSubj === 'minat' ? 'Minat' : 'Wajib');
        document.getElementById('header-subject-label').innerText = `Drilling CBT (${tkaPkgId} • ${subjName})`;
        
        // Update TKA sub buttons
        const btnW = document.getElementById('tka-btn-wajib');
        const btnM = document.getElementById('tka-btn-minat');
        const btnC = document.getElementById('tka-btn-clil');
        [btnW, btnM, btnC].forEach(b => {
          if (b) b.className = "px-2 py-1 md:px-2.5 md:py-1 rounded-md text-[11px] md:text-xs font-bold text-slate-300 hover:text-white";
        });
        if (tkaSubj === 'wajib' && btnW) btnW.className = "px-2 py-1 md:px-2.5 md:py-1 rounded-md text-[11px] md:text-xs font-bold bg-blue-600 text-white shadow";
        if (tkaSubj === 'minat' && btnM) btnM.className = "px-2 py-1 md:px-2.5 md:py-1 rounded-md text-[11px] md:text-xs font-bold bg-amber-600 text-white shadow";
        if (tkaSubj === 'clil' && btnC) btnC.className = "px-2 py-1 md:px-2.5 md:py-1 rounded-md text-[11px] md:text-xs font-bold bg-emerald-600 text-white shadow";

        renderTkaQuestion();
        resetTkaQuestionTimer();
        renderMeetingRibbon();
      } else {
        homeStage.classList.add('hidden');
        tkaStage.classList.add('hidden');
        slideStage.classList.remove('hidden');
        ribbon.classList.remove('hidden');

        // Jumlah pertemuan dibaca dari datanya, bukan dipatok angka -- tiap
        // tingkat punya banyak pertemuan yang berbeda.
        const nama = { 'wajib': 'Matematika Wajib', 'minat': 'Matematika Peminatan',
                       'clil': 'Program Khusus CLIL' };
        const jml = ((db[currentMode] || []).length) || 0;
        document.getElementById('header-subject-label').innerText =
          nama[currentMode]
            ? nama[currentMode] + (jml ? ' (' + jml + ' Pertemuan)' : '')
            : ('Matematika Kelas ' + NAMA_TINGKAT);
        renderSlide();
        renderMeetingRibbon();
      }

      saveAppState();
      applyAccessGate();
    }

    // SAVE STATE & UPDATE HASH WITHOUT RELOAD
    function saveAppState() {
      let hash = '';
      if (currentMode === 'home') {
        hash = '#/home';
      } else if (currentMode === 'tka') {
        hash = `#/cbt/${tkaSubj}/${tkaPkgId}/q/${tkaQIdx + 1}`;
      } else {
        const meetings = db[currentMode] || db['wajib'];
        const m = meetings[currentMeetingIdx];
        const pkgId = m ? m.id : 'P01';
        hash = `#/${currentMode}/${pkgId}/slide/${currentSlideIdx + 1}`;
      }

      if (window.location.hash !== hash) {
        history.replaceState(null, '', hash);
      }

      try {
        localStorage.setItem(STORAGE_STATE_KEY, JSON.stringify({
          mode: currentMode,
          meetingIdx: currentMeetingIdx,
          slideIdx: currentSlideIdx,
          tkaSubj: tkaSubj,
          tkaPkgId: tkaPkgId,
          tkaQIdx: tkaQIdx
        }));
        localStorage.setItem(STORAGE_SCORES_KEY, JSON.stringify(userSessionScores));
      } catch (e) {}
    }

    // RENDER MEETING RIBBON
    // sorted package ids: P01..P21 instead of the raw object insertion order
    function sortedPkgIds(obj) {
      return Object.keys(obj).sort((a, b) =>
        (parseInt(a.replace(/\D/g, ''), 10) || 0) - (parseInt(b.replace(/\D/g, ''), 10) || 0));
    }

    function renderMeetingRibbon() {
      const ribbon = document.getElementById('meeting-ribbon');
      ribbon.innerHTML = '';

      if (currentMode === 'tka') {
        const src = tkaSrc();
        sortedPkgIds(src).forEach((pkgId) => {
          const btn = document.createElement('button');
          const isAct = pkgId === tkaPkgId;
          btn.className = `px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition shrink-0 ${isAct ? 'bg-amber-500 text-slate-950 shadow scale-105 font-black' : 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700/40'}`;
          btn.innerText = pkgId;
          btn.title = src[pkgId].title;
          btn.onclick = () => {
            tkaPkgId = pkgId;
            tkaQIdx = 0;
            renderAppView();
          };
          ribbon.appendChild(btn);
        });
      } else {
        const meetings = db[currentMode] || db['wajib'];
        meetings.forEach((m, idx) => {
          const btn = document.createElement('button');
          const isAct = idx === currentMeetingIdx;
          btn.className = `px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition shrink-0 ${isAct ? 'bg-blue-600 text-white shadow scale-105 font-black' : 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700/40'}`;
          btn.innerText = m.id;
          btn.title = m.title;
          btn.onclick = () => {
            currentMeetingIdx = idx;
            currentSlideIdx = 0;
            renderAppView();
          };
          ribbon.appendChild(btn);
        });
      }
    }


    // =================================================================
    // LAB INTERAKTIF — penggambar fungsi 2D & kanvas 3D
    // =================================================================
    // Kanvas tidak mewarisi CSS: paletnya diambil ulang tiap kali digambar
    // supaya grafik ikut berganti saat tema dipindah.
    const LAB_GELAP = {
      grid: '#132340', axis: '#3E5A82', tick: '#7C8FA8',
      f1: '#38BDF8', f2: '#F59E0B', f3: '#10B981', f4: '#F472B6',
      hi: '#FDE68A', dim: '#94A3B8', face: 'rgba(56,189,248,0.13)', faceBelakang: 'rgba(37,99,235,0.07)',
      edge: '#5B8FC7', edgeBack: '#2C4468', kotak: 'rgba(4,10,22,0.88)', tulis: '#E2E8F0'
    };
    const LAB_TERANG = {
      grid: '#DCE4EE', axis: '#94A3B8', tick: '#64748B',
      f1: '#0369A1', f2: '#B45309', f3: '#047857', f4: '#BE185D',
      hi: '#92400E', dim: '#52627B', face: 'rgba(37,99,235,0.16)', faceBelakang: 'rgba(37,99,235,0.06)',
      edge: '#2563EB', edgeBack: '#A9BCD4', kotak: 'rgba(255,255,255,0.92)', tulis: '#0F172A'
    };
    const LAB_C = Object.assign({}, LAB_GELAP);
    function labPalet() {
      const t = document.documentElement.classList.contains('terang') ? LAB_TERANG : LAB_GELAP;
      Object.keys(t).forEach(function (k) { LAB_C[k] = t[k]; });
    }

    function labFmt(v, d) {
      const n = Math.round(v * Math.pow(10, d === undefined ? 2 : d)) / Math.pow(10, d === undefined ? 2 : d);
      return String(n);
    }

    function labSetup(cv) {
      labPalet();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const w = Math.max(80, cv.clientWidth), h = Math.max(80, cv.clientHeight);
      if (cv.width !== Math.round(w * dpr) || cv.height !== Math.round(h * dpr)) {
        cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      }
      const ctx = cv.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      return { ctx: ctx, w: w, h: h };
    }

    // Skala x dan y selalu sama supaya lingkaran tampak bulat dan gradien
    // garis singgung terbaca jujur.
    function labView(w, h, unitY, cx, cy) {
      const s = (h / 2) / unitY;
      cx = cx || 0; cy = cy || 0;
      return {
        s: s, cx: cx, cy: cy,
        X: function (x) { return w / 2 + (x - cx) * s; },
        Y: function (y) { return h / 2 - (y - cy) * s; },
        xmin: cx - (w / 2) / s, xmax: cx + (w / 2) / s,
        ymin: cy - unitY, ymax: cy + unitY
      };
    }

    function labGrid(ctx, w, h, V) {
      const raw = (V.xmax - V.xmin) / 12;
      const p = Math.pow(10, Math.floor(Math.log(raw) / Math.LN10));
      let st = p * 10;
      [1, 2, 2.5, 5, 10].forEach(function (k) { if (k * p >= raw && k * p < st) st = k * p; });

      ctx.lineWidth = 1; ctx.strokeStyle = LAB_C.grid; ctx.beginPath();
      for (let x = Math.ceil(V.xmin / st) * st; x <= V.xmax; x += st) {
        const px = Math.round(V.X(x)) + 0.5; ctx.moveTo(px, 0); ctx.lineTo(px, h);
      }
      for (let y = Math.ceil(V.ymin / st) * st; y <= V.ymax; y += st) {
        const py = Math.round(V.Y(y)) + 0.5; ctx.moveTo(0, py); ctx.lineTo(w, py);
      }
      ctx.stroke();

      const y0 = Math.round(V.Y(0)) + 0.5, x0 = Math.round(V.X(0)) + 0.5;
      ctx.strokeStyle = LAB_C.axis; ctx.lineWidth = 1.6; ctx.beginPath();
      ctx.moveTo(0, y0); ctx.lineTo(w, y0); ctx.moveTo(x0, 0); ctx.lineTo(x0, h); ctx.stroke();

      ctx.fillStyle = LAB_C.tick; ctx.font = '11px ui-monospace, SFMono-Regular, Menlo, monospace';
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      const ly = Math.min(h - 15, Math.max(2, y0 + 4));
      for (let x = Math.ceil(V.xmin / st) * st; x <= V.xmax; x += st) {
        if (Math.abs(x) < st / 100) continue;
        ctx.fillText(labFmt(x), V.X(x), ly);
      }
      ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      const lx = Math.max(26, Math.min(w - 4, x0 - 6));
      for (let y = Math.ceil(V.ymin / st) * st; y <= V.ymax; y += st) {
        if (Math.abs(y) < st / 100) continue;
        ctx.fillText(labFmt(y), lx, V.Y(y));
      }
    }

    function labCurve(ctx, V, f, color, lw, dash) {
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = lw || 2.6;
      ctx.lineJoin = 'round'; ctx.lineCap = 'round';
      if (dash) ctx.setLineDash(dash);
      ctx.beginPath();
      let pen = false, prev = null;
      const N = 900;
      const lompat = (V.ymax - V.ymin) * V.s * 0.55;   // ambang putus di asimtot
      for (let i = 0; i <= N; i++) {
        const x = V.xmin + (V.xmax - V.xmin) * i / N;
        let y; try { y = f(x); } catch (e) { y = NaN; }
        if (!isFinite(y) || Math.abs(y) > 1e7) { pen = false; prev = null; continue; }
        const py = V.Y(y);
        if (pen && prev !== null && Math.abs(py - prev) > lompat) pen = false;
        if (!pen) { ctx.moveTo(V.X(x), py); pen = true; } else ctx.lineTo(V.X(x), py);
        prev = py;
      }
      ctx.stroke(); ctx.restore();
    }

    function labDot(ctx, V, x, y, color, isi) {
      ctx.save(); ctx.beginPath(); ctx.arc(V.X(x), V.Y(y), 5, 0, Math.PI * 2);
      if (isi === false) { ctx.fillStyle = LAB_C.kotak; ctx.fill(); ctx.strokeStyle = color; ctx.lineWidth = 2.2; ctx.stroke(); }
      else { ctx.fillStyle = color; ctx.fill(); }
      ctx.restore();
    }

    function labTeks(ctx, x, y, s, color, align) {
      ctx.save(); ctx.fillStyle = color || LAB_C.dim;
      ctx.font = '600 12px ui-sans-serif, system-ui, sans-serif';
      ctx.textAlign = align || 'left'; ctx.textBaseline = 'middle';
      ctx.fillText(s, x, y); ctx.restore();
    }

    // ---------------- kanvas 3D ----------------
    function lab3dProj(p, rx, ry, dist, s, w, h) {
      let cy = Math.cos(ry), sy = Math.sin(ry);
      const x1 = p[0] * cy + p[2] * sy, z1 = -p[0] * sy + p[2] * cy;
      let cx = Math.cos(rx), sx = Math.sin(rx);
      const y1 = p[1] * cx - z1 * sx, z2 = p[1] * sx + z1 * cx;
      const f = dist / (dist + z2);
      return { x: w / 2 + x1 * s * f, y: h / 2 - y1 * s * f, z: z2 };
    }

    // Kubus ABCD.EFGH: alas ABCD, tutup EFGH (E di atas A, dan seterusnya).
    const LAB_KUBUS = {
      titik: {
        A: [-1, -1, 1], B: [1, -1, 1], C: [1, -1, -1], D: [-1, -1, -1],
        E: [-1, 1, 1], F: [1, 1, 1], G: [1, 1, -1], H: [-1, 1, -1]
      },
      rusuk: [['A','B'],['B','C'],['C','D'],['D','A'],['E','F'],['F','G'],['G','H'],['H','E'],
              ['A','E'],['B','F'],['C','G'],['D','H']],
      sisi: [['A','B','C','D'],['E','F','G','H'],['A','B','F','E'],
             ['B','C','G','F'],['C','D','H','G'],['D','A','E','H']]
    };

    function labDraw3D(cv, st) {
      const S = labSetup(cv), ctx = S.ctx, w = S.w, h = S.h;
      const s = Math.min(w, h) * 0.30 * (st.zoom || 1);
      const dist = 6;
      const P = {};
      Object.keys(LAB_KUBUS.titik).forEach(function (k) {
        P[k] = lab3dProj(LAB_KUBUS.titik[k], st.rx, st.ry, dist, s, w, h);
      });

      // sisi digambar dari yang terjauh (algoritma pelukis) agar bangun
      // terlihat padat, bukan sekadar kerangka kawat yang membingungkan
      const sisi = LAB_KUBUS.sisi.map(function (f) {
        const z = f.reduce(function (a, k) { return a + P[k].z; }, 0) / f.length;
        return { f: f, z: z };
      }).sort(function (a, b) { return b.z - a.z; });

      sisi.forEach(function (o, i) {
        ctx.beginPath();
        o.f.forEach(function (k, j) { j ? ctx.lineTo(P[k].x, P[k].y) : ctx.moveTo(P[k].x, P[k].y); });
        ctx.closePath();
        ctx.fillStyle = i < 3 ? LAB_C.faceBelakang : LAB_C.face;
        ctx.fill();
        ctx.strokeStyle = i < 3 ? LAB_C.edgeBack : LAB_C.edge;
        ctx.lineWidth = i < 3 ? 1.2 : 2;
        ctx.stroke();
      });

      function garis(a, b, warna, lw, dash) {
        ctx.save(); ctx.strokeStyle = warna; ctx.lineWidth = lw || 2.6;
        ctx.lineCap = 'round'; if (dash) ctx.setLineDash(dash);
        ctx.beginPath(); ctx.moveTo(P[a].x, P[a].y); ctx.lineTo(P[b].x, P[b].y); ctx.stroke(); ctx.restore();
      }
      function bidang(ks, warna) {
        ctx.save(); ctx.beginPath();
        ks.forEach(function (k, j) { j ? ctx.lineTo(P[k].x, P[k].y) : ctx.moveTo(P[k].x, P[k].y); });
        ctx.closePath(); ctx.fillStyle = warna; ctx.fill();
        ctx.strokeStyle = LAB_C.f4; ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
      }

      if (st.bidang) bidang(['B','D','H','F'], 'rgba(244,114,182,0.20)');
      if (st.dSisi)  garis('A', 'F', LAB_C.f3, 3);
      if (st.dRuang) garis('A', 'G', LAB_C.f2, 3.2);

      // Ukuran rusuk ditulis pada rusuk AB. Tanpa ini, menggeser "panjang
      // rusuk" tidak mengubah apa pun di layar dan siswa mengira alatnya rusak.
      if (st.s) {
        const a = P.A, bq = P.B;
        ctx.save();
        ctx.strokeStyle = LAB_C.hi; ctx.lineWidth = 2.2; ctx.setLineDash([4, 3]);
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(bq.x, bq.y); ctx.stroke();
        ctx.setLineDash([]);
        const mx = (a.x + bq.x) / 2, my = (a.y + bq.y) / 2;
        const t = 's = ' + st.s + ' cm';
        ctx.font = '700 12px ui-monospace, SFMono-Regular, Menlo, monospace';
        const wt = ctx.measureText(t).width + 12;
        ctx.fillStyle = LAB_C.kotak;
        ctx.beginPath();
        (ctx.roundRect ? ctx.roundRect(mx - wt / 2, my - 10, wt, 20, 6)
                       : ctx.rect(mx - wt / 2, my - 10, wt, 20));
        ctx.fill();
        ctx.strokeStyle = 'rgba(253,230,138,0.45)'; ctx.lineWidth = 1; ctx.stroke();
        ctx.fillStyle = LAB_C.hi; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(t, mx, my + 0.5);
        ctx.restore();
      }

      if (st.label !== false) {
        ctx.save();
        ctx.font = '700 12px ui-monospace, SFMono-Regular, Menlo, monospace';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        Object.keys(P).forEach(function (k) {
          const p = P[k];
          ctx.fillStyle = LAB_C.kotak; ctx.beginPath(); ctx.arc(p.x, p.y, 9, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = p.z < 0 ? LAB_C.tulis : LAB_C.tick;
          ctx.fillText(k, p.x, p.y + 0.5);
        });
        ctx.restore();
      }
      return P;
    }

    // =================================================================
    // DEFINISI LAB
    // Setiap lab: daftar penggeser (params), penggambar, dan bacaan nilai.
    // =================================================================
    const LAB_DEFS = {
      lingkaran: {
        nama: 'Lingkaran', ikon: 'fa-solid fa-circle-notch',
        ket: 'Geser pusat dan jari-jari; garis singgung bergradien m ikut menyesuaikan.',
        params: [
          { k: 'a', label: 'a &mdash; pusat x', min: -6, max: 6, step: 0.5, val: 0 },
          { k: 'b', label: 'b &mdash; pusat y', min: -6, max: 6, step: 0.5, val: 0 },
          { k: 'r', label: 'r &mdash; jari-jari', min: 0.5, max: 7, step: 0.5, val: 3 },
          { k: 'm', label: 'm &mdash; gradien singgung', min: -4, max: 4, step: 0.25, val: 1 }
        ],
        draw: function (cv, p) {
          const S = labSetup(cv), ctx = S.ctx, V = labView(S.w, S.h, 9);
          labGrid(ctx, S.w, S.h, V);
          ctx.save();
          ctx.strokeStyle = LAB_C.f1; ctx.lineWidth = 3;
          ctx.beginPath(); ctx.arc(V.X(p.a), V.Y(p.b), p.r * V.s, 0, Math.PI * 2); ctx.stroke();
          ctx.setLineDash([5, 5]); ctx.strokeStyle = LAB_C.dim; ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.moveTo(V.X(p.a), V.Y(p.b));
          ctx.lineTo(V.X(p.a + p.r / Math.SQRT2), V.Y(p.b + p.r / Math.SQRT2)); ctx.stroke();
          ctx.restore();
          labDot(ctx, V, p.a, p.b, LAB_C.hi);
          labTeks(ctx, V.X(p.a) + 9, V.Y(p.b) - 12, 'P(' + labFmt(p.a, 1) + ', ' + labFmt(p.b, 1) + ')', LAB_C.hi);
          // y = mx + c singgung: c = b - m*a +/- r*sqrt(m^2+1)
          const d = p.r * Math.sqrt(p.m * p.m + 1);
          [p.b - p.m * p.a + d, p.b - p.m * p.a - d].forEach(function (c, i) {
            labCurve(ctx, V, function (x) { return p.m * x + c; }, i ? LAB_C.f3 : LAB_C.f2, 2.2);
          });
          return [
            ['Bentuk baku', '(x-' + labFmt(p.a, 1) + ')^2+(y-' + labFmt(p.b, 1) + ')^2=' + labFmt(p.r * p.r, 2)],
            ['Bentuk umum', 'x^2+y^2' + labSg(-2 * p.a) + 'x' + labSg(-2 * p.b) + 'y' +
              labSg(p.a * p.a + p.b * p.b - p.r * p.r) + '=0'],
            ['Garis singgung', 'y=' + labFmt(p.m, 2) + 'x' + labSg(p.b - p.m * p.a + d) +
              '\\quad\\text{dan}\\quad y=' + labFmt(p.m, 2) + 'x' + labSg(p.b - p.m * p.a - d)]
          ];
        }
      },

      limit: {
        nama: 'Limit', ikon: 'fa-solid fa-arrow-right-to-bracket',
        ket: 'Lubang di x = 0 tetap ada, tetapi nilai fungsi menuju a/b dari kedua arah.',
        params: [
          { k: 'a', label: 'a &mdash; pengali di dalam sinus', min: 1, max: 8, step: 1, val: 3 },
          { k: 'b', label: 'b &mdash; pengali penyebut', min: 1, max: 8, step: 1, val: 2 },
          { k: 'z', label: 'perbesaran di sekitar x = 0', min: 1, max: 20, step: 1, val: 1 }
        ],
        draw: function (cv, p) {
          const S = labSetup(cv), ctx = S.ctx, V = labView(S.w, S.h, 4 / p.z);
          labGrid(ctx, S.w, S.h, V);
          const L = p.a / p.b;
          const f = function (x) { return Math.sin(p.a * x) / (p.b * x); };
          ctx.save(); ctx.setLineDash([6, 5]); ctx.strokeStyle = LAB_C.f2; ctx.lineWidth = 1.6;
          ctx.beginPath(); ctx.moveTo(0, V.Y(L)); ctx.lineTo(S.w, V.Y(L)); ctx.stroke(); ctx.restore();
          labCurve(ctx, V, f, LAB_C.f1, 3);
          labDot(ctx, V, 0, L, LAB_C.hi, false);
          labTeks(ctx, V.X(0) + 12, V.Y(L) - 14, 'L = ' + labFmt(L, 3), LAB_C.hi);
          return [
            ['Fungsi', 'f(x)=\\dfrac{\\sin(' + p.a + 'x)}{' + p.b + 'x}'],
            ['Nilai limit', '\\lim_{x \\to 0}\\dfrac{\\sin(' + p.a + 'x)}{' + p.b + 'x}=\\dfrac{' + p.a + '}{' + p.b + '}=' + labFmt(L, 4)],
            ['Uji dua arah', 'f(-0{,}01)=' + labFmt(f(-0.01), 5) + '\\quad f(0{,}01)=' + labFmt(f(0.01), 5)]
          ];
        }
      },

      trigonometri: {
        nama: 'Trigonometri & Turunan', ikon: 'fa-solid fa-wave-square',
        ket: 'Kurva biru adalah f(x); kurva emas putus-putus adalah turunannya.',
        params: [
          { k: 'A', label: 'A &mdash; amplitudo', min: 0.5, max: 4, step: 0.25, val: 2 },
          { k: 'B', label: 'B &mdash; frekuensi', min: 0.5, max: 4, step: 0.5, val: 1 },
          { k: 'C', label: 'C &mdash; geseran fase', min: -3, max: 3, step: 0.25, val: 0 },
          { k: 'd', label: 'tampilkan turunan (0/1)', min: 0, max: 1, step: 1, val: 1 }
        ],
        draw: function (cv, p) {
          const S = labSetup(cv), ctx = S.ctx, V = labView(S.w, S.h, 5);
          labGrid(ctx, S.w, S.h, V);
          const f = function (x) { return p.A * Math.sin(p.B * x + p.C); };
          const g = function (x) { return p.A * p.B * Math.cos(p.B * x + p.C); };
          labCurve(ctx, V, f, LAB_C.f1, 3);
          if (p.d >= 0.5) labCurve(ctx, V, g, LAB_C.f2, 2.2, [7, 5]);
          // titik stasioner terdekat dengan sumbu y
          const k0 = Math.round((-p.C) / Math.PI - 0.5);
          for (let k = k0 - 2; k <= k0 + 3; k++) {
            const xs = (Math.PI / 2 + k * Math.PI - p.C) / p.B;
            if (xs > V.xmin && xs < V.xmax) labDot(ctx, V, xs, f(xs), LAB_C.f3);
          }
          return [
            ['Fungsi', 'f(x)=' + labFmt(p.A, 2) + '\\sin(' + labFmt(p.B, 2) + 'x' + labSg(p.C) + ')'],
            ['Turunan', "f'(x)=" + labFmt(p.A * p.B, 2) + '\\cos(' + labFmt(p.B, 2) + 'x' + labSg(p.C) + ')'],
            ['Nilai', 'A=' + labFmt(p.A, 2) + ',\; \\text{periode}=\\dfrac{2\\pi}{' + labFmt(p.B, 2) + '}=' + labFmt(2 * Math.PI / p.B, 3)]
          ];
        }
      },

      integral: {
        nama: 'Integral & Luas', ikon: 'fa-solid fa-chart-area',
        ket: 'Daerah yang diarsir adalah luas di bawah kurva dari batas bawah p sampai batas atas q.',
        params: [
          { k: 'A', label: 'A &mdash; koefisien x&sup2;', min: -1.5, max: 1.5, step: 0.25, val: 0.5 },
          { k: 'B', label: 'B &mdash; koefisien x', min: -4, max: 4, step: 0.5, val: 0 },
          { k: 'C', label: 'C &mdash; konstanta', min: -4, max: 4, step: 0.5, val: 1 },
          { k: 'p', label: 'p &mdash; batas bawah', min: -6, max: 6, step: 0.5, val: -2 },
          { k: 'q', label: 'q &mdash; batas atas', min: -6, max: 6, step: 0.5, val: 2 }
        ],
        draw: function (cv, p) {
          const S = labSetup(cv), ctx = S.ctx, V = labView(S.w, S.h, 8);
          labGrid(ctx, S.w, S.h, V);
          const f = function (x) { return p.A * x * x + p.B * x + p.C; };
          const lo = Math.min(p.p, p.q), hi = Math.max(p.p, p.q);
          ctx.save(); ctx.beginPath(); ctx.moveTo(V.X(lo), V.Y(0));
          for (let i = 0; i <= 200; i++) { const x = lo + (hi - lo) * i / 200; ctx.lineTo(V.X(x), V.Y(f(x))); }
          ctx.lineTo(V.X(hi), V.Y(0)); ctx.closePath();
          ctx.fillStyle = 'rgba(16,185,129,0.22)'; ctx.fill();
          ctx.strokeStyle = LAB_C.f3; ctx.lineWidth = 1.6; ctx.stroke(); ctx.restore();
          labCurve(ctx, V, f, LAB_C.f1, 3);
          const F = function (x) { return p.A * x * x * x / 3 + p.B * x * x / 2 + p.C * x; };
          const luas = F(p.q) - F(p.p);
          [p.p, p.q].forEach(function (x) { labDot(ctx, V, x, f(x), LAB_C.hi); });
          return [
            ['Fungsi', 'f(x)=' + labFmt(p.A, 2) + 'x^2' + labSg(p.B) + 'x' + labSg(p.C)],
            ['Antiturunan', 'F(x)=\\dfrac{' + labFmt(p.A, 2) + '}{3}x^3' + labSg(p.B / 2) + 'x^2' + labSg(p.C) + 'x + c'],
            ['Integral tentu', '\\int_{' + labFmt(p.p, 1) + '}^{' + labFmt(p.q, 1) + '} f(x)\\,dx = ' + labFmt(luas, 4)]
          ];
        }
      },

      fungsi: {
        nama: 'Fungsi Kuadrat', ikon: 'fa-solid fa-bezier-curve',
        ket: 'Geser a, b, c untuk melihat pergeseran titik puncak dan sumbu simetri.',
        params: [
          { k: 'a', label: 'a &mdash; koefisien x&sup2;', min: -3, max: 3, step: 0.25, val: 1 },
          { k: 'b', label: 'b &mdash; koefisien x', min: -6, max: 6, step: 0.5, val: 0 },
          { k: 'c', label: 'c &mdash; konstanta', min: -6, max: 6, step: 0.5, val: -3 }
        ],
        draw: function (cv, p) {
          const S = labSetup(cv), ctx = S.ctx, V = labView(S.w, S.h, 9);
          labGrid(ctx, S.w, S.h, V);
          const f = function (x) { return p.a * x * x + p.b * x + p.c; };
          labCurve(ctx, V, f, LAB_C.f1, 3);
          const D = p.b * p.b - 4 * p.a * p.c;
          let akar = 'tidak ada akar real';
          if (Math.abs(p.a) > 1e-9) {
            const xs = -p.b / (2 * p.a);
            ctx.save(); ctx.setLineDash([5, 5]); ctx.strokeStyle = LAB_C.f2; ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.moveTo(V.X(xs), 0); ctx.lineTo(V.X(xs), S.h); ctx.stroke(); ctx.restore();
            labDot(ctx, V, xs, f(xs), LAB_C.hi);
            if (D >= 0) {
              const x1 = (-p.b - Math.sqrt(D)) / (2 * p.a), x2 = (-p.b + Math.sqrt(D)) / (2 * p.a);
              labDot(ctx, V, x1, 0, LAB_C.f3); labDot(ctx, V, x2, 0, LAB_C.f3);
              akar = 'x_1=' + labFmt(x1, 3) + ',\; x_2=' + labFmt(x2, 3);
            }
          }
          const xs = Math.abs(p.a) > 1e-9 ? -p.b / (2 * p.a) : 0;
          return [
            ['Fungsi', 'f(x)=' + labFmt(p.a, 2) + 'x^2' + labSg(p.b) + 'x' + labSg(p.c)],
            ['Titik puncak', '\\left(' + labFmt(xs, 3) + ',\; ' + labFmt(f(xs), 3) + '\\right)'],
            ['Diskriminan', 'D=' + labFmt(D, 3) + '\\quad\\Rightarrow\\quad ' + akar]
          ];
        }
      },

      regresi: {
        nama: 'Regresi & Korelasi', ikon: 'fa-solid fa-chart-line',
        ket: 'Geser a dan b sampai jumlah kuadrat galat sekecil mungkin, lalu bandingkan dengan garis terbaik.',
        params: [
          { k: 'a', label: 'a &mdash; konstanta', min: -8, max: 8, step: 0.25, val: 0 },
          { k: 'b', label: 'b &mdash; gradien', min: -3, max: 3, step: 0.1, val: 1 },
          { k: 't', label: 'tampilkan garis terbaik (0/1)', min: 0, max: 1, step: 1, val: 0 }
        ],
        data: [[1,2.4],[2,3.1],[3,4.6],[4,4.9],[5,6.4],[6,6.8],[7,8.3],[8,8.6],[9,10.1],[10,10.7]],
        draw: function (cv, p) {
          const S = labSetup(cv), ctx = S.ctx, V = labView(S.w, S.h, 8, 5, 6);
          labGrid(ctx, S.w, S.h, V);
          const D = LAB_DEFS.regresi.data;
          const n = D.length;
          let sx = 0, sy = 0, sxy = 0, sxx = 0, syy = 0;
          D.forEach(function (d) { sx += d[0]; sy += d[1]; sxy += d[0] * d[1]; sxx += d[0] * d[0]; syy += d[1] * d[1]; });
          const bb = (n * sxy - sx * sy) / (n * sxx - sx * sx);
          const aa = (sy - bb * sx) / n;
          const r = (n * sxy - sx * sy) / Math.sqrt((n * sxx - sx * sx) * (n * syy - sy * sy));
          let sse = 0;
          D.forEach(function (d) { const e = d[1] - (p.a + p.b * d[0]); sse += e * e; });
          // galat sebagai ruas tegak: siswa melihat langsung apa yang diperkecil
          ctx.save(); ctx.strokeStyle = 'rgba(244,114,182,0.75)'; ctx.lineWidth = 1.6;
          D.forEach(function (d) {
            ctx.beginPath(); ctx.moveTo(V.X(d[0]), V.Y(d[1]));
            ctx.lineTo(V.X(d[0]), V.Y(p.a + p.b * d[0])); ctx.stroke();
          });
          ctx.restore();
          if (p.t >= 0.5) labCurve(ctx, V, function (x) { return aa + bb * x; }, LAB_C.f3, 2.2, [7, 5]);
          labCurve(ctx, V, function (x) { return p.a + p.b * x; }, LAB_C.f2, 3);
          D.forEach(function (d) { labDot(ctx, V, d[0], d[1], LAB_C.f1); });
          return [
            ['Garis coba', '\\hat{y}=' + labFmt(p.a, 2) + labSg(p.b) + 'x'],
            ['Jumlah kuadrat galat', 'SSE=' + labFmt(sse, 3)],
            ['Garis terbaik', '\\hat{y}=' + labFmt(aa, 3) + labSg(bb) + 'x \\quad r=' + labFmt(r, 4)]
          ];
        }
      },

      ruang3d: {
        nama: 'Ruang 3D', ikon: 'fa-solid fa-cube', tiga_d: true,
        ket: 'Seret kubus untuk memutarnya. Nyalakan diagonal untuk melihat letaknya dari segala arah.',
        params: [
          { k: 's', label: 'panjang rusuk (cm)', min: 2, max: 20, step: 1, val: 8 },
          { k: 'zoom', label: 'perbesaran', min: 0.6, max: 1.8, step: 0.1, val: 1 }
        ],
        toggles: [
          { k: 'dSisi', label: 'Diagonal sisi (AF)', val: true },
          { k: 'dRuang', label: 'Diagonal ruang (AG)', val: true },
          { k: 'bidang', label: 'Bidang diagonal (BDHF)', val: false },
          { k: 'putar', label: 'Putar otomatis', val: false }
        ],
        draw: function (cv, p, st) {
          labDraw3D(cv, { rx: st.rx, ry: st.ry, zoom: p.zoom, s: p.s,
            dSisi: st.dSisi, dRuang: st.dRuang, bidang: st.bidang });
          const s = p.s;
          return [
            ['Diagonal sisi', 'AF = s\\sqrt{2} = ' + s + '\\sqrt{2} \\approx ' + labFmt(s * Math.SQRT2, 3) + '\\text{ cm}'],
            ['Diagonal ruang', 'AG = s\\sqrt{3} = ' + s + '\\sqrt{3} \\approx ' + labFmt(s * Math.sqrt(3), 3) + '\\text{ cm}'],
            ['Luas bidang diagonal', 'BDHF = s^2\\sqrt{2} = ' + labFmt(s * s * Math.SQRT2, 3) + '\\text{ cm}^2']
          ];
        }
      }
    };

    function labSg(v) {
      const n = Math.round(v * 1000) / 1000;
      if (Math.abs(n) < 1e-9) return '';
      return (n > 0 ? '+' : '-') + labFmt(Math.abs(n), 3);
    }

    // Bab menentukan lab mana yang terbuka lebih dulu; guru tetap bisa
    // berpindah lewat tab di dalam panel.
    function labUntukBab(bab, mode) {
      const b = (bab || '').toLowerCase();
      if (mode === 'clil') return 'integral';
      if (b.indexOf('lingkaran') >= 0) return 'lingkaran';
      if (b.indexOf('limit') >= 0) return 'limit';
      if (b.indexOf('turunan') >= 0) return 'trigonometri';
      if (b.indexOf('integral') >= 0) return 'integral';
      if (b.indexOf('dimensi tiga') >= 0 || b.indexOf('ruang') >= 0) return 'ruang3d';
      if (b.indexOf('statistika') >= 0 || b.indexOf('bivariat') >= 0) return 'regresi';
      return 'fungsi';
    }

    // ---------------- antarmuka lab ----------------
    let labInstances = [];

    function labBersihkan() {
      labInstances.forEach(function (I) { if (I.raf) cancelAnimationFrame(I.raf); });
      labInstances = labInstances.filter(function (I) { return document.body.contains(I.host); });
    }

    function labBuat(host, id, kompak) {
      const def = LAB_DEFS[id] || LAB_DEFS.fungsi;
      const I = { host: host, id: id, def: def, p: {}, st: { rx: -0.42, ry: 0.62 }, raf: 0, kompak: !!kompak };
      def.params.forEach(function (q) { I.p[q.k] = q.val; });
      (def.toggles || []).forEach(function (t) { I.st[t.k] = t.val; });

      host.innerHTML =
        '<div class="lab-wrap' + (kompak ? ' lab-kompak' : '') + '">' +
          '<div class="lab-stage"><canvas class="lab-canvas"></canvas>' +
            (def.tiga_d ? '<span class="lab-hint"><i class="fa-solid fa-arrows-up-down-left-right"></i> seret untuk memutar</span>' : '') +
          '</div>' +
          '<div class="lab-side">' +
            '<p class="lab-ket">' + def.ket + '</p>' +
            '<div class="lab-sliders"></div>' +
            '<div class="lab-toggles"></div>' +
            '<div class="lab-read"></div>' +
            '<div class="lab-act">' +
              '<button type="button" class="lab-btn lab-reset"><i class="fa-solid fa-rotate-left"></i> Setel Ulang</button>' +
              (kompak ? '<button type="button" class="lab-btn lab-big"><i class="fa-solid fa-up-right-and-down-left-from-center"></i> Perbesar</button>' : '') +
            '</div>' +
          '</div>' +
        '</div>';

      I.cv = host.querySelector('.lab-canvas');
      I.read = host.querySelector('.lab-read');

      const sl = host.querySelector('.lab-sliders');
      const tampil = kompak ? def.params.slice(0, 3) : def.params;
      tampil.forEach(function (q) {
        const row = document.createElement('label');
        row.className = 'lab-row';
        row.innerHTML = '<span class="lab-lab">' + q.label + '</span>' +
          '<span class="lab-val" data-v="' + q.k + '">' + labFmt(I.p[q.k], 2) + '</span>' +
          '<input type="range" class="lab-range" min="' + q.min + '" max="' + q.max + '" step="' + q.step + '" value="' + q.val + '">';
        const inp = row.querySelector('input');
        inp.addEventListener('input', function () {
          I.p[q.k] = parseFloat(inp.value);
          const v = host.querySelector('[data-v="' + q.k + '"]');
          if (v) v.textContent = labFmt(I.p[q.k], 2);
          labGambar(I);
        });
        sl.appendChild(row);
      });

      const tg = host.querySelector('.lab-toggles');
      (def.toggles || []).forEach(function (t) {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'lab-chip' + (I.st[t.k] ? ' is-on' : '');
        b.textContent = t.label;
        b.onclick = function () {
          I.st[t.k] = !I.st[t.k];
          b.classList.toggle('is-on', I.st[t.k]);
          if (t.k === 'putar') labSpin(I);
          labGambar(I);
        };
        tg.appendChild(b);
      });

      host.querySelector('.lab-reset').onclick = function () {
        def.params.forEach(function (q) {
          I.p[q.k] = q.val;
          const r = [].slice.call(host.querySelectorAll('.lab-range'))[def.params.indexOf(q)];
          if (r) r.value = q.val;
          const v = host.querySelector('[data-v="' + q.k + '"]');
          if (v) v.textContent = labFmt(q.val, 2);
        });
        I.st.rx = -0.42; I.st.ry = 0.62;
        labGambar(I);
      };
      const big = host.querySelector('.lab-big');
      if (big) big.onclick = function () { openLab(I.id); };

      if (def.tiga_d) labPutarDenganSeret(I);
      labInstances.push(I);
      labGambar(I);
      return I;
    }

    // Seret dengan tetikus maupun sentuh; papan tulis digital memakai sentuh.
    function labPutarDenganSeret(I) {
      let aktif = false, px = 0, py = 0;
      const cv = I.cv;
      cv.style.touchAction = 'none';
      cv.addEventListener('pointerdown', function (e) {
        aktif = true; px = e.clientX; py = e.clientY;
        cv.setPointerCapture(e.pointerId); cv.classList.add('is-drag');
      });
      cv.addEventListener('pointermove', function (e) {
        if (!aktif) return;
        I.st.ry += (e.clientX - px) * 0.01;
        I.st.rx += (e.clientY - py) * 0.01;
        I.st.rx = Math.max(-1.4, Math.min(1.4, I.st.rx));
        px = e.clientX; py = e.clientY;
        labGambar(I);
      });
      ['pointerup', 'pointercancel'].forEach(function (ev) {
        cv.addEventListener(ev, function () { aktif = false; cv.classList.remove('is-drag'); });
      });
    }

    function labSpin(I) {
      if (I.raf) { cancelAnimationFrame(I.raf); I.raf = 0; }
      if (!I.st.putar) return;
      const langkah = function () {
        I.st.ry += 0.006;
        labGambar(I, true);
        I.raf = requestAnimationFrame(langkah);
      };
      I.raf = requestAnimationFrame(langkah);
    }

    // Kanvas digambar ulang setiap gerakan, tetapi bacaan rumus KaTeX hanya
    // menyusul setelah penggeser berhenti — merender ulang KaTeX 60x/detik
    // membuat penggeseran tersendat di PC kelas.
    function labGambar(I, tanpaBacaan) {
      let baris = [];
      try { baris = I.def.draw(I.cv, I.p, I.st) || []; } catch (e) { }
      if (tanpaBacaan) return;
      clearTimeout(I.tmr);
      I.tmr = setTimeout(function () {
        if (!I.read) return;
        I.read.innerHTML = baris.map(function (b) {
          return '<div class="lab-line"><span class="lab-line-k">' + b[0] + '</span>' +
                 '<span class="lab-line-v">$' + b[1] + '$</span></div>';
        }).join('');
        if (window.renderMathInElement) {
          try {
            renderMathInElement(I.read, {
              delimiters: [{ left: '$', right: '$', display: false }], throwOnError: false
            });
          } catch (e) { }
        }
      }, 90);
    }

    function labTabs(aktif) {
      const bar = document.getElementById('lab-tabs');
      if (!bar) return;
      bar.innerHTML = '';
      Object.keys(LAB_DEFS).forEach(function (k) {
        const d = LAB_DEFS[k];
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'lab-tab' + (k === aktif ? ' is-on' : '');
        b.innerHTML = '<i class="' + d.ikon + '"></i><span>' + d.nama + '</span>';
        b.onclick = function () { openLab(k); };
        bar.appendChild(b);
      });
    }

    function openLab(id) {
      const el = document.getElementById('lab-modal');
      if (!el) return;
      const meetings = db[currentMode] || db['wajib'];
      const m = meetings[currentMeetingIdx];
      if (!id) id = labUntukBab(m && m.bab, currentMode);
      el.classList.remove('hidden');
      labBersihkan();
      labTabs(id);
      const host = document.getElementById('lab-host');
      host.innerHTML = '';
      const sub = document.getElementById('lab-sub');
      if (sub) sub.textContent = (LAB_DEFS[id] || LAB_DEFS.fungsi).nama + ' · geser nilai variabel dan amati perubahannya';
      // canvas butuh ukuran nyata sebelum digambar
      requestAnimationFrame(function () { labBuat(host, id, false); });
    }

    function closeLab() {
      const el = document.getElementById('lab-modal');
      if (el) el.classList.add('hidden');
      labInstances.forEach(function (I) { if (I.raf) cancelAnimationFrame(I.raf); I.raf = 0; });
    }

    // panel ringkas yang menempel di Slide 4
    function labPasangInline(hostId, id) {
      const host = document.getElementById(hostId);
      if (!host) return;
      labBersihkan();
      requestAnimationFrame(function () { if (document.getElementById(hostId)) labBuat(host, id, true); });
    }

    let labResizeTmr;
    window.addEventListener('resize', function () {
      clearTimeout(labResizeTmr);
      labResizeTmr = setTimeout(function () {
        labInstances.forEach(function (I) { if (document.body.contains(I.host)) labGambar(I); });
      }, 160);
    });

    // ---------------------------------------------------------------
    // PWA: PASANG & SIMPAN UNTUK LURING
    // Peramban hanya mengizinkan dialog pemasangan dipanggil dari sebuah
    // gestur pengguna, jadi tawarannya disimpan dulu dan tombolnya baru
    // ditampilkan setelah peramban benar-benar menyatakan siap.
    // ---------------------------------------------------------------
    let pwaTawaran = null;

    window.addEventListener('beforeinstallprompt', function (e) {
      e.preventDefault();
      pwaTawaran = e;
      const b = document.getElementById('pwa-btn');
      if (b) { b.classList.remove('hidden'); b.classList.add('flex'); }
    });

    function pasangAplikasi() {
      if (!pwaTawaran) return;
      pwaTawaran.prompt();
      pwaTawaran.userChoice.then(function () {
        pwaTawaran = null;
        const b = document.getElementById('pwa-btn');
        if (b) { b.classList.add('hidden'); b.classList.remove('flex'); }
      }).catch(function () { });
    }

    window.addEventListener('appinstalled', function () {
      pwaTawaran = null;
      const b = document.getElementById('pwa-btn');
      if (b) { b.classList.add('hidden'); b.classList.remove('flex'); }
      tampilkanKabar('Portal terpasang. Sekarang bisa dibuka dari layar utama, termasuk tanpa internet.');
    });

    // pesan singkat di sudut layar
    function tampilkanKabar(teks, aksi, onAksi) {
      let el = document.getElementById('pwa-kabar');
      if (!el) {
        el = document.createElement('div');
        el.id = 'pwa-kabar';
        document.body.appendChild(el);
      }
      el.innerHTML = '<span>' + teks + '</span>';
      if (aksi) {
        const b = document.createElement('button');
        b.textContent = aksi;
        b.onclick = onAksi;
        el.appendChild(b);
      }
      const t = document.createElement('button');
      t.className = 'pwa-tutup';
      t.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      t.onclick = function () { el.classList.remove('is-on'); };
      el.appendChild(t);
      el.classList.add('is-on');
      if (!aksi) setTimeout(function () { el.classList.remove('is-on'); }, 6000);
    }

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').then(function (reg) {
          // Versi baru diunduh diam-diam; guru yang memutuskan kapan memuat
          // ulang, supaya pembaruan tidak memotong pelajaran yang berjalan.
          reg.addEventListener('updatefound', function () {
            const sw = reg.installing;
            if (!sw) return;
            sw.addEventListener('statechange', function () {
              if (sw.state === 'installed' && navigator.serviceWorker.controller) {
                tampilkanKabar('Versi portal yang lebih baru sudah siap.', 'Muat ulang', function () {
                  sw.postMessage('lewati-tunggu');
                  setTimeout(function () { location.reload(); }, 150);
                });
              }
            });
          });
        }).catch(function () { });
      });
    }



    // (dipindah ke berkas data per tingkat)

    const GURU_CREDS = {"username": "mathcihuy", "password_hash": "4e628845fe7f6f843d6cb657b3a14f862dc482385696a5387e915beb959dbb65"};

    // Helper: Cari siswa berdasarkan NIS
    function findStudentByNIS(nis) {
        for (const kelas in STUDENTS_DB) {
            const students = STUDENTS_DB[kelas].students;
            const found = students.find(s => s.nis === nis);
            if (found) {
                return {
                    ...found,
                    kelas,
                    kelas_name: STUDENTS_DB[kelas].kelas_name,
                    access_level: STUDENTS_DB[kelas].access_level
                };
            }
        }
        return null;
    }

    // Helper: Hash password untuk validasi
    function sha256(str) {
        return CryptoJS.SHA256(str).toString();
    }

    // Session Management
    const SESSION_KEY = 'portal_session';
    const SESSION_TIMEOUT = 24 * 60 * 60 * 1000; // 24 jam

    function getSession() {
        const sess = localStorage.getItem(SESSION_KEY);
        if (!sess) return null;
        try {
            const parsed = JSON.parse(sess);
            if (Date.now() - parsed.timestamp > SESSION_TIMEOUT) {
                localStorage.removeItem(SESSION_KEY);
                return null;
            }
            return parsed;
        } catch (e) {
            return null;
        }
    }
    window.getSession = getSession;

    function setSession(type, data) {
        const sess = {
            type, // 'siswa' atau 'guru'
            data,
            timestamp: Date.now()
        };
        localStorage.setItem(SESSION_KEY, JSON.stringify(sess));
    }

    function logoutSession() {
        // Tombolnya menyebut akibatnya, bukan "Ya/Tidak".
        if (!confirm('Keluar dari Math Cihuy? Progres kamu tetap tersimpan.')) return;
        localStorage.removeItem(SESSION_KEY);
        window.location.href = 'login.html';
    }

    // Check session saat halaman load
    function checkSessionOnLoad() {
        const sess = getSession();
        if (!sess) {
            window.location.href = 'login.html';
            return;
        }

        // Inject user info di header (clean modern pill & logout)
        const userInfoEl = document.getElementById('user-info-header');
        if (userInfoEl) {
            if (sess.type === 'siswa') {
                userInfoEl.innerHTML = `
                    <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-mono">
                        <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        <span class="font-bold text-slate-200">${sess.data.name}</span>
                    </div>
                    <button onclick="logoutSession()" class="p-1.5 text-slate-400 hover:text-amber-400 hover:bg-rose-500/10 rounded-xl border border-slate-800 transition cursor-pointer" title="Logout"><i class="fa-solid fa-power-off text-xs"></i></button>
                `;
            } else {
                userInfoEl.innerHTML = `
                    <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-mono">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span class="font-bold text-amber-400">GURU: ${sess.data.username}</span>
                    </div>
                    <button onclick="logoutSession()" class="p-1.5 text-slate-400 hover:text-amber-400 hover:bg-rose-500/10 rounded-xl border border-slate-800 transition cursor-pointer" title="Logout"><i class="fa-solid fa-power-off text-xs"></i></button>
                `;
            }
        }
    }

    // Enforce access control based on session
    // (implementasi ada di applyAccessGate() di atas)
    function enforceAccessControl() {
        applyAccessGate();
    }

    // Init saat DOMContentLoaded
    window.addEventListener('DOMContentLoaded', function() {
        checkSessionOnLoad();
        enforceAccessControl();
        showGuruButtonIfNeeded();
    });
    
    // Tampilkan guru button hanya untuk login guru
    function showGuruButtonIfNeeded() {
        const sess = getSession();
        const guruBtn = document.getElementById('guru-btn');
        // Tombol pindah tingkat: guru mengajar semua tingkat, siswa tidak.
        const tingkatBtn = document.getElementById('tingkat-btn');
        const guru = sess?.type === 'guru';
        if (tingkatBtn) {
            // Tujuan dan labelnya dihitung dari TINGKAT halaman ini, bukan
            // ditulis di markup -- supaya generator halaman tingkat lain tidak
            // perlu tahu apa-apa tentang tombol ini.
            const t = (typeof TINGKAT !== 'undefined') ? TINGKAT : 12;
            const lain = (t === 11) ? { href: '/', label: 'Kelas XII' }
                                    : { href: '/11', label: 'Kelas XI' };
            tingkatBtn.href = lain.href;
            tingkatBtn.title = 'Pindah ke portal ' + lain.label;
            const sp = tingkatBtn.querySelector('span');
            if (sp) sp.textContent = lain.label;
            tingkatBtn.classList.toggle('hidden', !guru);
            tingkatBtn.classList.toggle('flex', guru);
        }
        if (!guruBtn) return;

        if (guru) {
            guruBtn.classList.remove('hidden');
            guruBtn.classList.add('flex');
        } else {
            guruBtn.classList.add('hidden');
            guruBtn.classList.remove('flex');
        }
    }

    window.addEventListener('DOMContentLoaded', function() {
        setTimeout(showGuruButtonIfNeeded, 100);
    });



    // ---------------------------------------------------------------
    // SINKRONISASI OTOMATIS HASIL CBT KE DATABASE
    //
    // Berjalan sepenuhnya diam-diam: siswa tidak pernah melihat
    // pemberitahuan, dialog, maupun jeda apa pun. Pengiriman dipicu
    // ketika satu paket CBT selesai dikerjakan (lihat catatSesiCbt).
    //
    // Tiga simpanan yang dipakai, sengaja dipisah:
    //   cbt_hasil_lokal  -> catatan permanen; inilah yang dibaca dasbor
    //                       guru dan ekspor Excel. Tidak pernah dihapus
    //                       oleh proses pengiriman.
    //   cbt_kirim_antre  -> hanya yang BELUM berhasil terkirim.
    //   cbt_kirim_ok     -> sidik jari yang sudah sampai, supaya satu
    //                       hasil tidak terkirim dua kali.
    // Versi sebelumnya memakai satu kunci untuk semua keperluan, sehingga
    // tabel nilai guru ikut kosong begitu antrean berhasil dikirim.
    // ---------------------------------------------------------------

    

    // (dipindah ke berkas data per tingkat)

    const STUDENTS_DATA = window.STUDENTS_DATA;

    const CBT_LOKAL_KEY  = 'cbt_hasil_lokal';
    const CBT_ANTRE_KEY  = 'cbt_kirim_antre';
    const CBT_OK_KEY     = 'cbt_kirim_ok';
    const CBT_MULAI_KEY  = 'cbt_paket_mulai';
    const CBT_QUEUE_KEY  = 'cbt_results_queue';   // kunci lama, untuk pemindahan data
    let WEBHOOK_URL = localStorage.getItem('webhook_url') || '';

    function sinkAmbil(kunci, bawaan) {
      try { const v = JSON.parse(localStorage.getItem(kunci)); return v === null ? bawaan : v; }
      catch (e) { return bawaan; }
    }
    function sinkSimpan(kunci, nilai) {
      try { localStorage.setItem(kunci, JSON.stringify(nilai)); } catch (e) {}
    }
    function sinkUrl() { return (localStorage.getItem('webhook_url') || '').trim(); }

    // Data dari versi lama dipindahkan sekali supaya nilai yang sudah
    // terkumpul tidak hilang saat pembaruan ini dipasang.
    (function pindahkanDataLama() {
      const lama = sinkAmbil(CBT_QUEUE_KEY, null);
      if (!Array.isArray(lama) || !lama.length) return;
      if (sinkAmbil(CBT_LOKAL_KEY, []).length) return;
      sinkSimpan(CBT_LOKAL_KEY, lama);
      sinkSimpan(CBT_ANTRE_KEY, lama);
    })();

    // ---- waktu pengerjaan per paket ----
    function tandaiMulaiPaket(subj, pkgId) {
      const m = sinkAmbil(CBT_MULAI_KEY, {});
      const k = subj + '_' + pkgId;
      if (!m[k]) { m[k] = Date.now(); sinkSimpan(CBT_MULAI_KEY, m); }
    }
    function ambilDurasiPaket(subj, pkgId) {
      const m = sinkAmbil(CBT_MULAI_KEY, {});
      const k = subj + '_' + pkgId;
      if (!m[k]) return 0;
      const detik = Math.max(1, Math.round((Date.now() - m[k]) / 1000));
      delete m[k]; sinkSimpan(CBT_MULAI_KEY, m);
      return detik;
    }

    // ---- sidik jari: satu hasil hanya dikirim sekali ----
    function sinkSidik(p) {
      return [p.nis, p.mapel, p.kode_pertemuan, p.skor, p.jumlah_benar, p.jumlah_soal].join('|');
    }
    function sinkSudahTerkirim(p) { return sinkAmbil(CBT_OK_KEY, []).indexOf(sinkSidik(p)) !== -1; }
    function sinkTandaiTerkirim(p) {
      const s = sinkAmbil(CBT_OK_KEY, []);
      const f = sinkSidik(p);
      if (s.indexOf(f) === -1) { s.push(f); if (s.length > 400) s.splice(0, s.length - 400); sinkSimpan(CBT_OK_KEY, s); }
    }
    function sinkAntrekan(p) {
      const q = sinkAmbil(CBT_ANTRE_KEY, []);
      if (!q.some(function (x) { return sinkSidik(x) === sinkSidik(p); })) {
        q.push(p);
        if (q.length > 300) q.splice(0, q.length - 300);
        sinkSimpan(CBT_ANTRE_KEY, q);
      }
    }

    // Content-Type text/plain membuat permintaan ini tergolong "simple
    // request", sehingga tidak ada preflight OPTIONS -- Google Apps Script
    // tidak menjawab preflight dan pengiriman akan selalu gagal bila
    // memakai application/json.
    function sinkKirimSatu(p) {
      const url = sinkUrl();
      if (!url) return Promise.resolve(false);
      return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(p),
        redirect: 'follow',
        keepalive: true
      }).then(function (r) { return r.ok; }).catch(function () { return false; });
    }

    function sinkronHasilCbt(p) {
      sinkCatatLokal(p);
      if (sinkSudahTerkirim(p)) return;
      if (!sinkUrl()) { sinkAntrekan(p); return; }
      sinkKirimSatu(p).then(function (ok) {
        if (ok) { sinkTandaiTerkirim(p); sinkCatatWaktuKirim(); }
        else sinkAntrekan(p);
      });
    }

    function sinkCatatLokal(p) {
      const log = sinkAmbil(CBT_LOKAL_KEY, []);
      const f = sinkSidik(p);
      const i = log.findIndex(function (x) { return sinkSidik(x) === f; });
      if (i === -1) log.push(p); else log[i] = p;
      if (log.length > 800) log.splice(0, log.length - 800);
      sinkSimpan(CBT_LOKAL_KEY, log);
    }
    function sinkCatatWaktuKirim() {
      try { localStorage.setItem('cbt_kirim_terakhir', new Date().toISOString()); } catch (e) {}
    }

    // Antrean dikirim berurutan, bukan serentak, supaya Apps Script tidak
    // menolak karena terlalu banyak permintaan bersamaan.
    let sinkSedangJalan = false;
    function prosesAntreanSinkron() {
      if (sinkSedangJalan || !sinkUrl()) return;
      const antre = sinkAmbil(CBT_ANTRE_KEY, []);
      if (!antre.length) return;
      sinkSedangJalan = true;
      sinkSimpan(CBT_ANTRE_KEY, []);          // antrean diambil alih
      antre.reduce(function (rantai, item) {
        return rantai.then(function () {
          if (sinkSudahTerkirim(item)) return;
          return sinkKirimSatu(item).then(function (ok) {
            if (ok) { sinkTandaiTerkirim(item); sinkCatatWaktuKirim(); }
            else sinkAntrekan(item);          // gagal -> dikembalikan ke antrean
          });
        });
      }, Promise.resolve()).then(function () { sinkSedangJalan = false; });
    }

    window.addEventListener('online', prosesAntreanSinkron);
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') prosesAntreanSinkron();
    });
    setTimeout(prosesAntreanSinkron, 4000);
    setInterval(prosesAntreanSinkron, 5 * 60 * 1000);

    // Ringkasan untuk dasbor guru (tidak pernah ditampilkan ke siswa).
    function statusSinkron() {
      return {
        tersimpan: sinkAmbil(CBT_LOKAL_KEY, []).length,
        antre: sinkAmbil(CBT_ANTRE_KEY, []).length,
        terkirim: sinkAmbil(CBT_OK_KEY, []).length,
        terakhir: localStorage.getItem('cbt_kirim_terakhir') || null,
        url: sinkUrl() ? 'sudah diatur' : 'belum diatur'
      };
    }

    // ---------------------------------------------------------------
    // PENGALIH TEMA
    // Kelas transisi hanya dipasang selama peralihan berlangsung: memasang
    // transition permanen pada seluruh unsur membuat penggeseran dan gulir
    // ikut tersendat di PC kelas.
    // ---------------------------------------------------------------
    const STORAGE_TEMA_KEY = 'gis_math_portal_tema';

    function terapkanTema(t, halus) {
      const html = document.documentElement;
      if (halus) {
        html.classList.add('tema-pindah');
        setTimeout(function () { html.classList.remove('tema-pindah'); }, 420);
      }
      html.classList.toggle('terang', t === 'terang');
      const ik = document.getElementById('tema-ikon');
      if (ik) ik.className = (t === 'terang' ? 'fa-solid fa-sun' : 'fa-solid fa-moon') + ' w-4 text-center';
      const bt = document.getElementById('tema-btn');
      if (bt) bt.title = t === 'terang' ? 'Beralih ke Dark Luxury Navy' : 'Beralih ke Clean Light Classroom';

      // Update Top Navbar Theme Toggle Button
      const topIcon = document.getElementById('top-theme-icon');
      const topLabel = document.getElementById('top-theme-label');
      const topBtn = document.getElementById('top-theme-toggle-btn');
      if (topIcon) {
        topIcon.className = t === 'terang' ? 'fa-solid fa-moon text-sm text-blue-400' : 'fa-solid fa-sun text-sm text-amber-400';
      }
      if (topLabel) {
        topLabel.textContent = t === 'terang' ? 'Gelap' : 'Terang';
      }
      if (topBtn) {
        topBtn.title = t === 'terang' ? 'Beralih ke Mode Gelap (Dark Mode)' : 'Beralih ke Mode Terang (Light Mode)';
      }
      try { localStorage.setItem(STORAGE_TEMA_KEY, t); } catch (e) { }
      // Kanvas memakai warna tetap, bukan CSS, jadi harus digambar ulang.
      // `labInstances` dideklarasikan dengan let sehingga tidak menempel di
      // window, dan saat muatTema() berjalan variabelnya bisa belum terbentuk.
      try {
        if (labInstances) labInstances.forEach(function (I) {
          if (document.body.contains(I.host)) labGambar(I);
        });
      } catch (e) { }
      try { if (!document.getElementById('analytics-modal').classList.contains('hidden')) renderDashboard(); } catch (e) { }
    }

    function toggleTema() {
      terapkanTema(document.documentElement.classList.contains('terang') ? 'gelap' : 'terang', true);
    }

    function muatTema() {
      let t = 'gelap';
      try { t = localStorage.getItem(STORAGE_TEMA_KEY) || 'gelap'; } catch (e) { }
      terapkanTema(t, false);
    }
    muatTema();

    // ---------------------------------------------------------------
    // PEREKAM KEMAJUAN BELAJAR
    // Skor CBT saja tidak cukup untuk mengukur penguasaan: slide yang sudah
    // dibuka dan riwayat tiap sesi ikut direkam supaya diagnosisnya berpijak
    // pada perjalanan belajar, bukan satu angka akhir.
    // ---------------------------------------------------------------
    const STORAGE_SLIDE_KEY = 'gis_math_portal_slide_progress';
    const STORAGE_HIST_KEY = 'gis_math_portal_cbt_history';
    let slideProgress = {};
    let cbtHistory = [];

    // Portal ini merutekan hash dan menggambar slide pertama SEBELUM blok
    // inisialisasi utama berjalan. Kalau pemuatan menunggu giliran di sana,
    // penyimpanan pertama akan menimpa riwayat lama dengan array kosong.
    // Karena itu pemuatannya dibuat malas: siapa pun yang menyentuh kemajuan
    // memastikan dulu isinya sudah dibaca dari penyimpanan.
    let kemajuanSiap = false;

    function muatKemajuan() {
      try { slideProgress = JSON.parse(localStorage.getItem(STORAGE_SLIDE_KEY) || '{}') || {}; } catch (e) { slideProgress = {}; }
      try { cbtHistory = JSON.parse(localStorage.getItem(STORAGE_HIST_KEY) || '[]') || []; } catch (e) { cbtHistory = []; }
      kemajuanSiap = true;
    }

    function pastikanKemajuan() { if (!kemajuanSiap) muatKemajuan(); }

    function simpanKemajuan() {
      try { localStorage.setItem(STORAGE_SLIDE_KEY, JSON.stringify(slideProgress)); } catch (e) { }
      try { localStorage.setItem(STORAGE_HIST_KEY, JSON.stringify(cbtHistory.slice(-120))); } catch (e) { }
    }

    function catatSlide(mode, pkgId, idx) {
      if (!['wajib', 'minat', 'clil'].includes(mode)) return;
      pastikanKemajuan();
      const k = mode + '_' + pkgId;
      const a = slideProgress[k] || (slideProgress[k] = []);
      if (a.indexOf(idx) < 0) { a.push(idx); simpanKemajuan(); }
    }

    
    // =========================================================================
    // CBT REAL-TIME AUTO-SAVE & DRAFT RESUME ENGINE (ZERO DATA LOSS)
    // =========================================================================
    
    // =========================================================================
    // SUPABASE POSTGRESQL CLOUD DATABASE CLIENT (MATHCIHUY OFFICIAL)
    // =========================================================================
    const SUPABASE_URL = "https://pecvxqguqtancizghnhj.supabase.co";
    const SUPABASE_ANON_KEY = "sb_publishable_K51BV-D7yLxnXdYg7auMeA_uzxPSy1c";
    let supabaseClient = null;

    try {
      if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log("Supabase Client initialized successfully!");
      }
    } catch (e) {
      console.warn("Supabase init warning:", e);
    }


    const CBT_DRAFT_PREFIX = 'cbt_draft_v1_';

    function getCbtDraftKey(subj, pkgId) {
      const sess = getSession();
      const nis = (sess && sess.data && sess.data.nis) ? sess.data.nis : 'guest';
      return `${CBT_DRAFT_PREFIX}${nis}_${subj}_${pkgId}`;
    }

    function simpanDraftJawaban(subj, pkgId, qIdx, chosen, isRight, details) {
      try {
        const k = getCbtDraftKey(subj, pkgId);
        const draft = JSON.parse(localStorage.getItem(k) || '{}');
        draft.lastUpdated = Date.now();
        draft.qIdx = qIdx;
        if (!draft.answers) draft.answers = {};
        draft.answers[qIdx] = {
          chosen: chosen,
          isRight: isRight,
          details: details || null,
          ts: Date.now()
        };
        localStorage.setItem(k, JSON.stringify(draft));

        // Sync otomatis ke Database Supabase secara real-time (< 40 ms)
        if (supabaseClient) {
          const sess = getSession();
          const nis = (sess && sess.data && sess.data.nis) ? sess.data.nis : null;
          if (nis && nis !== 'guest') {
            supabaseClient.from('cbt_live_answers').upsert({
              nis: String(nis),
              mapel: String(subj),
              kode_pertemuan: String(pkgId),
              q_idx: Number(qIdx),
              chosen: String(chosen || ''),
              is_right: Boolean(isRight),
              updated_at: new Date().toISOString()
            }, { onConflict: 'nis,mapel,kode_pertemuan,q_idx' }).then(res => {
              if (res.error) console.warn("Supabase live answer sync warning:", res.error);
            });
          }
        }

        // Tampilkan indikator visual tersimpan sejenak
        const badge = document.getElementById('cbt-autosave-badge');
        if (badge) {
          badge.innerHTML = '<i class="fa-solid fa-check-double text-emerald-300"></i> Tersimpan';
          badge.className = 'text-[11px] font-mono text-emerald-300 bg-emerald-900/80 border border-emerald-400 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow scale-105 transition-all duration-200';
          setTimeout(() => {
            badge.innerHTML = '<i class="fa-solid fa-cloud-arrow-up text-amber-400"></i> Auto-Saved';
            badge.className = 'text-[11px] font-mono text-amber-400 bg-emerald-950/60 border border-blue-500/40 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm transition-all duration-300';
          }, 1200);
        }
      } catch (e) {
        console.warn('Auto-save error:', e);
      }
    }

    function pulihkanDraftJawaban(subj, pkgId) {
      try {
        const k = getCbtDraftKey(subj, pkgId);
        const draft = JSON.parse(localStorage.getItem(k) || '{}');
        if (draft && draft.answers) {
          Object.keys(draft.answers).forEach(qIdx => {
            const ans = draft.answers[qIdx];
            const scoreKey = `${subj}_${pkgId}_${qIdx}`;
            userSessionScores[scoreKey] = ans.isRight;
          });
          return draft;
        }
      } catch (e) {}
      return null;
    }

    function ambilDraftSemua(subj, pkgId) {
      try {
        const k = getCbtDraftKey(subj, pkgId);
        const draft = JSON.parse(localStorage.getItem(k) || '{}');
        return (draft && draft.answers) ? draft.answers : {};
      } catch (e) {
        return {};
      }
    }

    function bersihkanDraftJawaban(subj, pkgId) {
      try {
        const directKey = getCbtDraftKey(subj, pkgId);
        localStorage.removeItem(directKey);
        
        // Bersihkan seluruh variasi key draft di localStorage
        for (let i = localStorage.length - 1; i >= 0; i--) {
          const k = localStorage.key(i);
          if (k && (k.startsWith('cbt_draft_') && (k.includes(pkgId) || k.includes(`${subj}_${pkgId}`)))) {
            localStorage.removeItem(k);
          }
        }
      } catch (e) {
        console.warn('Error clearing draft:', e);
      }
    }


function catatSesiCbt(subj, pkgId, forceSubmit) {
      pastikanKemajuan();
      const src = tkaSrc(subj);
      const pk = src && src[pkgId];
      if (!pk) return;
      if (typeof tandaiMulaiPaket === 'function') tandaiMulaiPaket(subj, pkgId);
      const n = (pk.questions || []).length;
      if (n === 0) return;

      let jawab = 0, benar = 0;
      for (let i = 0; i < n; i++) {
        const v = userSessionScores[subj + '_' + pkgId + '_' + i];
        if (v !== undefined) { jawab++; if (v === true) benar++; }
      }
      
      // Jika belum selesai 10 soal dan bukan forceSubmit (belum klik Skor Akhir), lewati
      if (!forceSubmit && jawab < n) return;

      const pct = Math.round((benar / n) * 100);
      const akhir = cbtHistory[cbtHistory.length - 1];
      if (akhir && akhir.subj === subj && akhir.pkg === pkgId && akhir.pct === pct && akhir.n === n && !forceSubmit) return;
      cbtHistory.push({ ts: Date.now(), subj: subj, pkg: pkgId, benar: benar, n: n, pct: pct });
      simpanKemajuan();

      // Submit ke Supabase PostgreSQL & antrean lokal
      try {
        const sesi = getSession();
        if (sesi && sesi.type === 'siswa' && supabaseClient) {
          const nis = sesi.data.nis;
          const std = (typeof STUDENTS_DATA !== 'undefined' && STUDENTS_DATA[nis]) ? STUDENTS_DATA[nis] : null;
          const nama = sesi.data.name || sesi.data.nama || (std ? std.nama : 'Siswa ' + nis);
          const kelas = sesi.data.kelas_name || sesi.data.kelas || (std ? std.kelas : NAMA_TINGKAT);
          const durasi = (typeof ambilDurasiPaket === 'function') ? ambilDurasiPaket(subj, pkgId) : 0;
          
          supabaseClient.from('nilai_cbt').upsert({
            nis: String(nis),
            nama: String(nama),
            kelas: String(kelas),
            mapel: String(subj),
            kode_pertemuan: String(pkgId),
            skor: Number(pct),
            jumlah_soal: Number(n),
            jumlah_benar: Number(benar),
            jumlah_salah: Number(n - benar),
            durasi_detik: Number(durasi),
            waktu_submit: new Date().toISOString()
          }, { onConflict: 'nis,mapel,kode_pertemuan' }).then(res => {
            console.log('✅ Nilai CBT berhasil disubmit ke Supabase:', res);
          }).catch(err => {
            console.warn('Supabase submission error:', err);
          });
        }
      } catch (e) {
        console.warn('Supabase catatSesi error:', e);
      }
    }   // ---------------------------------------------------------------
    // CUSTOM TRY OUT BUILDER
    // ---------------------------------------------------------------
    // Taksonomi pada data memakai label C3/C4/C5; guru menyebutnya
    // Mudah/Sedang/HOTS. Pemetaan ditulis sekali di sini.
    const TO_LEVEL = {
      mudah: { label: 'Mudah', ket: 'C3 Penerapan', uji: function (l) { return /C3/.test(l); } },
      sedang: { label: 'Sedang', ket: 'C4 Analisis', uji: function (l) { return /C4/.test(l); } },
      hots: { label: 'HOTS', ket: 'C5 Evaluasi', uji: function (l) { return /C5/.test(l); } }
    };
    const TO = { aliran: 'wajib', bab: [], jml: 20, level: [] };

    function toBabList(aliran) {
      const urut = [], peta = {};
      (db[aliran] || []).forEach(function (m) {
        const k = m.bab || 'Lainnya';
        if (peta[k] === undefined) { peta[k] = urut.length; urut.push({ key: k, ids: [] }); }
        urut[peta[k]].ids.push(m.id);
      });
      return urut;
    }

    // Kumpulan butir yang memenuhi pilihan saat ini.
    function toKolam() {
      const src = tkaSrc(TO.aliran);
      const bab = TO.bab.length ? TO.bab : toBabList(TO.aliran).map(function (b) { return b.key; });
      const ids = {};
      toBabList(TO.aliran).forEach(function (b) {
        if (bab.indexOf(b.key) >= 0) b.ids.forEach(function (i) { ids[i] = b.key; });
      });
      const out = [];
      Object.keys(src).forEach(function (pid) {
        if (!ids[pid]) return;
        (src[pid].questions || []).forEach(function (q) {
          const lv = q.level || '';
          if (TO.level.length && !TO.level.some(function (k) { return TO_LEVEL[k].uji(lv); })) return;
          out.push({ q: q, pid: pid, bab: ids[pid] });
        });
      });
      return out;
    }

    // Acak stabil: urutan berbeda tiap penyusunan, tetapi sebaran bab dijaga
    // supaya satu bab tidak memborong seluruh paket.
    function toAcak(arr) {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const t = a[i]; a[i] = a[j]; a[j] = t;
      }
      return a;
    }

    function toPilihMerata(kolam, n) {
      const perBab = {};
      kolam.forEach(function (x) { (perBab[x.bab] = perBab[x.bab] || []).push(x); });
      const kunci = Object.keys(perBab);
      kunci.forEach(function (k) { perBab[k] = toAcak(perBab[k]); });
      const out = [];
      let i = 0;
      while (out.length < n) {
        let ada = false;
        for (let k = 0; k < kunci.length && out.length < n; k++) {
          const arr = perBab[kunci[k]];
          if (i < arr.length) { out.push(arr[i]); ada = true; }
        }
        if (!ada) break;
        i++;
      }
      return out;
    }

    function toChip(teks, aktif, onclick, sub) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'to-chip' + (aktif ? ' is-on' : '');
      b.innerHTML = '<span>' + teks + '</span>' + (sub ? '<em>' + sub + '</em>' : '');
      b.onclick = onclick;
      return b;
    }

    function renderTryout() {
      const al = document.getElementById('to-aliran');
      const bb = document.getElementById('to-bab');
      const jm = document.getElementById('to-jml');
      const lv = document.getElementById('to-level');
      const rk = document.getElementById('to-ringkas');
      if (!al) return;

      al.innerHTML = '';
      [['wajib', 'Matematika Wajib'], ['minat', 'Matematika Peminatan'], ['clil', 'CLIL Stream']].forEach(function (o) {
        al.appendChild(toChip(o[1], TO.aliran === o[0], function () {
          TO.aliran = o[0]; TO.bab = []; renderTryout();
        }));
      });

      bb.innerHTML = '';
      toBabList(TO.aliran).forEach(function (b) {
        const on = TO.bab.indexOf(b.key) >= 0;
        const c = toChip(b.key, on, function () {
          const i = TO.bab.indexOf(b.key);
          if (i >= 0) TO.bab.splice(i, 1); else TO.bab.push(b.key);
          renderTryout();
        }, b.ids.length + ' paket');
        c.classList.add('to-bab-chip');
        bb.appendChild(c);
      });

      jm.innerHTML = '';
      [10, 20, 30].forEach(function (n) {
        jm.appendChild(toChip(n + ' soal', TO.jml === n, function () { TO.jml = n; renderTryout(); }));
      });

      lv.innerHTML = '';
      Object.keys(TO_LEVEL).forEach(function (k) {
        const on = TO.level.indexOf(k) >= 0;
        lv.appendChild(toChip(TO_LEVEL[k].label, on, function () {
          const i = TO.level.indexOf(k);
          if (i >= 0) TO.level.splice(i, 1); else TO.level.push(k);
          renderTryout();
        }, TO_LEVEL[k].ket));
      });

      // Jumlah butir yang tersedia ditampilkan apa adanya. Bank soal ini
      // hanya memuat 28 butir C3, jadi permintaan "30 soal Mudah" memang
      // tidak bisa dipenuhi — lebih baik dikatakan daripada diam-diam kurang.
      const kolam = toKolam();
      const bisa = Math.min(TO.jml, kolam.length);
      const kurang = bisa < TO.jml;
      const babTeks = TO.bab.length ? TO.bab.length + ' bab terpilih' : 'semua bab';
      const lvTeks = TO.level.length ? TO.level.map(function (k) { return TO_LEVEL[k].label; }).join(', ') : 'semua tingkat';
      rk.className = 'to-ringkas' + (kolam.length === 0 ? ' is-kosong' : (kurang ? ' is-kurang' : ''));
      rk.innerHTML =
        '<div class="to-r-b"><span>Tersedia</span><b>' + kolam.length + ' butir</b></div>' +
        '<div class="to-r-b"><span>Akan disusun</span><b>' + bisa + ' butir</b></div>' +
        '<div class="to-r-k">' + babTeks + ' &middot; ' + lvTeks +
          (kolam.length === 0 ? ' &mdash; <b>tidak ada butir yang cocok, longgarkan pilihan</b>'
            : (kurang ? ' &mdash; <b>bank soal hanya punya ' + kolam.length + ' butir untuk pilihan ini</b>' : '')) +
        '</div>';
      const btn = document.getElementById('to-mulai');
      if (btn) { btn.disabled = kolam.length === 0; btn.classList.toggle('to-mati', kolam.length === 0); }
    }

    function tryoutReset() { TO.bab = []; TO.level = []; TO.jml = 20; renderTryout(); }

    function openTryout() {
      const el = document.getElementById('tryout-modal');
      if (!el) return;
      if (['wajib', 'minat', 'clil'].includes(tkaSubj)) TO.aliran = tkaSubj;
      el.classList.remove('hidden');
      renderTryout();
    }

    // ---------------------------------------------------------------
    // PEMETA KETERHUBUNGAN KONSEP
    // Relasi prasyarat ditulis manual di CHAPTER_DEPS: urutan bab dalam
    // silabus tidak selalu sama dengan urutan logis materinya, jadi tidak
    // bisa disimpulkan otomatis dari database. Koordinat ikut ditulis di
    // sini supaya tata letaknya stabil dan tidak perlu mesin tata letak.
    // ---------------------------------------------------------------
    const PETA_R = 44;   // jari-jari node
    const CHAPTER_DEPS = {
      W1: {
        aliran: 'wajib', bab: 'Bab 1: Kaidah Pencacahan & Peluang', kode: 'BAB 1',
        baris: ['Kaidah Pencacahan', '& Peluang'], x: 125, y: 130, pra: []
      },
      W3: {
        aliran: 'wajib', bab: 'Bab 3: Statistika & Analisis Data', kode: 'BAB 3',
        baris: ['Statistika &', 'Analisis Data'], x: 370, y: 130, pra: ['W1']
      },
      W2: {
        aliran: 'wajib', bab: 'Bab 2: Geometri Dimensi Tiga', kode: 'BAB 2',
        baris: ['Geometri', 'Dimensi Tiga'], x: 615, y: 130, pra: []
      },
      M1: {
        aliran: 'minat', bab: 'Bab 1: Geometri Analitik Lingkaran', kode: 'BAB 1',
        baris: ['Geometri Analitik', 'Lingkaran'], x: 860, y: 130, pra: ['W2']
      },
      M2: {
        aliran: 'minat', bab: 'Bab 2: Limit Aljabar & Trigonometri', kode: 'BAB 2',
        baris: ['Limit Aljabar &', 'Trigonometri'], x: 125, y: 380, pra: []
      },
      M3: {
        aliran: 'minat', bab: 'Bab 3: Turunan Fungsi Trigonometri', kode: 'BAB 3',
        baris: ['Turunan Fungsi', 'Trigonometri'], x: 370, y: 380, pra: ['M2', 'M1']
      },
      M4: {
        aliran: 'minat', bab: 'Bab 4: Integral dan Penerapannya', kode: 'BAB 4',
        baris: ['Integral dan', 'Penerapannya'], x: 615, y: 380, pra: ['M3']
      },
      C1: {
        aliran: 'clil', bab: 'Integral Calculus (CLIL)', kode: 'CLIL',
        baris: ['Integral Calculus', '(CLIL)'], x: 860, y: 380, pra: ['M4']
      }
    };

    // Alasan singkat tiap panah, dipakai sebagai tooltip garis.
    const PETA_ALASAN = {
      'W1>W3': 'Peluang menjadi dasar penafsiran sebaran dan simpulan data.',
      'W2>M1': 'Kedudukan titik, garis, dan bidang dipakai lagi saat lingkaran dibawa ke bidang koordinat.',
      'M2>M3': 'Turunan didefinisikan lewat limit hasil bagi selisih.',
      'M1>M3': 'Garis singgung lingkaran dikerjakan ulang dengan turunan.',
      'M3>M4': 'Integral adalah operasi kebalikan dari turunan.',
      'M4>C1': 'Materi integral yang sama dibahas ulang dalam pengantar berbahasa Inggris.'
    };

    // Statistik per bab dipinjam dari dashboard supaya angkanya konsisten.
    function petaStat() {
      pastikanKemajuan();
      const out = {};
      ['wajib', 'minat', 'clil'].forEach(function (a) {
        (dashStat(a) || []).forEach(function (r) { out[a + '|' + r.bab] = r; });
      });
      return out;
    }

    function petaTepi(n, tx, ty, r) {
      const dx = tx - n.x, dy = ty - n.y, L = Math.hypot(dx, dy) || 1;
      return { x: n.x + (dx / L) * r, y: n.y + (dy / L) * r };
    }

    function petaSvgEl(tag, attr) {
      const e = document.createElementNS('http://www.w3.org/2000/svg', tag);
      Object.keys(attr || {}).forEach(function (k) { e.setAttribute(k, attr[k]); });
      return e;
    }

    // Busur melengkung + kepala panah digambar manual supaya arah panahnya
    // tetap benar di kedua tema tanpa bergantung pada <marker>.
    function petaBusur(a, b) {
      const A = CHAPTER_DEPS[a], B = CHAPTER_DEPS[b];
      const dx = B.x - A.x, dy = B.y - A.y, L = Math.hypot(dx, dy) || 1;
      const lengkung = Math.min(L * 0.10, 34);
      const kx = (A.x + B.x) / 2 - (dy / L) * lengkung;
      const ky = (A.y + B.y) / 2 + (dx / L) * lengkung;
      const p0 = petaTepi(A, kx, ky, PETA_R + 3);
      const p1 = petaTepi(B, kx, ky, PETA_R + 11);

      const g = petaSvgEl('g', { class: 'peta-busur' });
      g.dataset.a = a; g.dataset.b = b;
      g.appendChild(petaSvgEl('path', {
        class: 'peta-garis',
        d: 'M' + p0.x.toFixed(1) + ' ' + p0.y.toFixed(1) +
           ' Q' + kx.toFixed(1) + ' ' + ky.toFixed(1) +
           ' ' + p1.x.toFixed(1) + ' ' + p1.y.toFixed(1)
      }));

      // arah singgung di ujung = arah dari titik kendali ke ujung busur
      const ux = p1.x - kx, uy = p1.y - ky, U = Math.hypot(ux, uy) || 1;
      const vx = ux / U, vy = uy / U, w = 5.4, h = 12.5;
      const bx = p1.x - vx * h, by = p1.y - vy * h;
      g.appendChild(petaSvgEl('path', {
        class: 'peta-panah',
        d: 'M' + p1.x.toFixed(1) + ' ' + p1.y.toFixed(1) +
           ' L' + (bx - vy * w).toFixed(1) + ' ' + (by + vx * w).toFixed(1) +
           ' L' + (bx + vy * w).toFixed(1) + ' ' + (by - vx * w).toFixed(1) + ' Z'
      }));

      const t = petaSvgEl('title', {});
      t.textContent = CHAPTER_DEPS[a].bab + '  →  ' + CHAPTER_DEPS[b].bab +
                      (PETA_ALASAN[a + '>' + b] ? '\n' + PETA_ALASAN[a + '>' + b] : '');
      g.appendChild(t);
      return g;
    }

    function petaNode(id, st) {
      const n = CHAPTER_DEPS[id];
      const total = st ? st.total : 0;
      const pct = st ? st.pct : 0;
      const slide = st ? st.slidePct : 0;
      const tone = !total ? 'st-kosong' : pct >= 70 ? 'st-baik' : pct >= 50 ? 'st-sedang' : 'st-lemah';

      const g = petaSvgEl('g', { class: 'peta-node al-' + n.aliran + ' ' + tone, tabindex: '0', role: 'button' });
      g.dataset.id = id;
      g.appendChild(petaSvgEl('circle', { class: 'peta-lingkar', cx: n.x, cy: n.y, r: PETA_R }));

      // cincin tipis = persentase slide yang sudah dibuka; pada 0% cincinnya
      // sengaja tidak digambar supaya ujung bulatnya tidak terbaca sebagai titik
      const keliling = 2 * Math.PI * PETA_R;
      if (slide > 0) {
        g.appendChild(petaSvgEl('circle', {
          class: 'peta-cincin', cx: n.x, cy: n.y, r: PETA_R,
          'stroke-dasharray': (keliling * Math.min(slide, 100) / 100).toFixed(1) + ' ' + keliling.toFixed(1),
          transform: 'rotate(-90 ' + n.x + ' ' + n.y + ')'
        }));
      }

      const kode = petaSvgEl('text', { class: 'peta-kode', x: n.x, y: n.y - 8 });
      kode.textContent = n.kode;
      g.appendChild(kode);

      const nilai = petaSvgEl('text', { class: 'peta-nilai', x: n.x, y: n.y + 14 });
      nilai.textContent = total ? pct + '%' : '—';
      g.appendChild(nilai);

      n.baris.forEach(function (t, i) {
        const el = petaSvgEl('text', { class: 'peta-judul', x: n.x, y: n.y + PETA_R + 20 + i * 14 });
        el.textContent = t;
        g.appendChild(el);
      });

      const namaAliran = { wajib: 'Matematika Wajib', minat: 'Matematika Peminatan', clil: 'CLIL Stream' };
      const tip = petaSvgEl('title', {});
      tip.textContent = namaAliran[n.aliran] + ' · ' + n.bab + '\n' +
        (total ? 'Penguasaan CBT ' + pct + '% (' + st.benar + '/' + total + ' butir)' : 'Belum ada butir CBT yang dikerjakan') +
        '\nSlide dibuka ' + slide + '%\nKlik untuk membuka bab ini.';
      g.appendChild(tip);

      g.addEventListener('click', function () { petaKe(id); });
      g.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); petaKe(id); }
      });
      g.addEventListener('mouseenter', function () { petaFokus(id); });
      g.addEventListener('focus', function () { petaFokus(id); });
      g.addEventListener('mouseleave', function () { petaFokus(null); });
      g.addEventListener('blur', function () { petaFokus(null); });
      return g;
    }

    function petaTerkait(id) {
      const out = (CHAPTER_DEPS[id].pra || []).slice();
      Object.keys(CHAPTER_DEPS).forEach(function (k) {
        if ((CHAPTER_DEPS[k].pra || []).indexOf(id) >= 0) out.push(k);
      });
      return out;
    }

    // Sorot node beserta seluruh garis yang menyentuhnya; sisanya diredupkan.
    function petaFokus(id) {
      const svg = document.getElementById('peta-svg');
      if (!svg) return;
      svg.classList.toggle('ada-fokus', !!id);
      const dekat = id ? petaTerkait(id).concat([id]) : [];
      svg.querySelectorAll('.peta-busur').forEach(function (e) {
        e.classList.toggle('is-fokus', !!id && (e.dataset.a === id || e.dataset.b === id));
      });
      svg.querySelectorAll('.peta-node').forEach(function (e) {
        e.classList.toggle('is-fokus', dekat.indexOf(e.dataset.id) >= 0);
      });
    }

    function renderPeta() {
      const svg = document.getElementById('peta-svg');
      if (!svg) return;
      const st = petaStat();
      svg.innerHTML = '';
      // garis lebih dulu supaya selalu berada di belakang node
      Object.keys(CHAPTER_DEPS).forEach(function (id) {
        (CHAPTER_DEPS[id].pra || []).forEach(function (p) {
          if (CHAPTER_DEPS[p]) svg.appendChild(petaBusur(p, id));
        });
      });
      Object.keys(CHAPTER_DEPS).forEach(function (id) {
        const n = CHAPTER_DEPS[id];
        svg.appendChild(petaNode(id, st[n.aliran + '|' + n.bab]));
      });
    }

    // Klik node: tutup peta lalu buka pertemuan pertama pada bab tersebut.
    function petaKe(id) {
      const n = CHAPTER_DEPS[id];
      if (!n) return;
      const list = db[n.aliran] || [];
      const i = list.findIndex(function (m) { return (m.bab || '') === n.bab; });
      if (i < 0) return;
      closePeta();
      closeCurriculumDrawer();
      currentMode = n.aliran; currentMeetingIdx = i; currentSlideIdx = 0;
      renderAppView();
    }

    function openPeta() {
      const el = document.getElementById('peta-modal');
      if (!el) return;
      el.classList.remove('hidden');
      renderPeta();
    }

    function closePeta() {
      const el = document.getElementById('peta-modal');
      if (el) el.classList.add('hidden');
      petaFokus(null);
    }

    function closeTryout() {
      const el = document.getElementById('tryout-modal');
      if (el) el.classList.add('hidden');
    }

    function tryoutMulai() {
      const kolam = toKolam();
      if (!kolam.length) return;
      const n = Math.min(TO.jml, kolam.length);
      const pilih = toPilihMerata(kolam, n);
      const soal = pilih.map(function (x, i) {
        const q = JSON.parse(JSON.stringify(x.q));
        q.no = String(i + 1);
        q.asal = x.pid;
        return q;
      });
      const nama = { wajib: 'Wajib', minat: 'Peminatan', clil: 'CLIL' };
      db.tka_custom = {
        TRYOUT: {
          id: 'TRYOUT',
          subject: 'Try Out Racikan',
          title: 'Try Out Racikan ' + (nama[TO.aliran] || TO.aliran) + ' · ' + n + ' butir' +
                 (TO.level.length ? ' · ' + TO.level.map(function (k) { return TO_LEVEL[k].label; }).join('/') : ''),
          questions: soal
        }
      };
      // skor lama paket racikan dibuang supaya simulasi baru mulai bersih
      Object.keys(userSessionScores).forEach(function (k) {
        if (k.indexOf('custom_TRYOUT_') === 0) delete userSessionScores[k];
      });
      tkaSubj = 'custom'; tkaPkgId = 'TRYOUT'; tkaQIdx = 0;
      currentMode = 'tka';
      closeTryout();
      renderAppView();
    }

    // ---------------------------------------------------------------
    // CETAK / EKSPOR LKPD
    // ---------------------------------------------------------------
    function lkpdEsc(t) {
      return String(t == null ? '' : t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function lkpdBaris(n) {
      let h = '';
      for (let i = 0; i < n; i++) h += '<div class="lk-garis"></div>';
      return h;
    }

    function lkpdTanggal() {
      const d = new Date();
      const bl = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
      return d.getDate() + ' ' + bl[d.getMonth()] + ' ' + d.getFullYear();
    }

    function buatLKPD(cetak) {
      const meetings = db[currentMode] || db['wajib'];
      const m = meetings[currentMeetingIdx];
      if (!m) return;
      const sheet = document.getElementById('lkpd-sheet');
      if (!sheet) return;

      const isClil = currentMode === 'clil';
      const pedKey = window.currentMeetingPedagogy || getDefaultPedagogyForMeeting(m.id, currentMode);
      const ped = PEDAGOGY_METHODS[pedKey] || PEDAGOGY_METHODS['tps'];
      const langkah = isClil ? (ped.steps_en || ped.steps) : ped.steps;
      const kasus = (m.collab_cases || m.collab_3_soal || []).slice(0, 5);

      const bankNama = currentMode === 'clil' ? 'tka_clil' : (currentMode === 'minat' ? 'tka_minat' : 'tka_wajib');
      const pk = db[bankNama] ? db[bankNama][m.id] : null;
      const latihan = (pk && pk.questions ? pk.questions : []).slice(3, 6);

      const streamNama = isClil ? 'CLIL Stream — Integral Calculus'
        : (currentMode === 'minat' ? 'Matematika Peminatan' : 'Matematika Wajib');

      sheet.innerHTML =
        '<div class="lk-kop">' +
          '<span class="lk-logo"></span>' +
          '<div class="lk-kop-t">' +
            '<div class="lk-sekolah">SMA GLOBAL ISLAMIC SCHOOL 2 SERPONG</div>' +
            '<div class="lk-alamat">Jalan Raya Serpong &middot; Tangerang Selatan, Banten &middot; Tahun Pelajaran 2026/2027</div>' +
            '<div class="lk-judul">LEMBAR KERJA PESERTA DIDIK (LKPD)</div>' +
          '</div>' +
        '</div>' +

        '<table class="lk-id"><tbody>' +
          '<tr><td class="lk-k">Nama</td><td class="lk-isi"></td><td class="lk-k">Kelas</td><td class="lk-isi lk-kecil"></td></tr>' +
          '<tr><td class="lk-k">Kelompok</td><td class="lk-isi"></td><td class="lk-k">Tanggal</td><td class="lk-isi lk-kecil"></td></tr>' +
        '</tbody></table>' +

        '<table class="lk-meta"><tbody>' +
          '<tr><td class="lk-k">Mata Pelajaran</td><td>' + lkpdEsc(streamNama) + '</td></tr>' +
          '<tr><td class="lk-k">Bab</td><td>' + lkpdEsc(m.bab || '-') + '</td></tr>' +
          '<tr><td class="lk-k">Pertemuan</td><td><b>' + lkpdEsc(m.id) + '</b> &mdash; ' + lkpdEsc(m.title) + '</td></tr>' +
          '<tr><td class="lk-k">Metode</td><td>' + lkpdEsc(isClil ? (ped.name_en || ped.name) : ped.name) +
            ' (' + lkpdEsc(isClil ? (ped.tag_en || ped.tag) : ped.tag) + ')</td></tr>' +
        '</tbody></table>' +

        '<h2 class="lk-h">A. Tujuan Pembelajaran</h2>' +
        '<ol class="lk-ol">' + (m.obj || []).map(function (o) { return '<li>' + o + '</li>'; }).join('') + '</ol>' +

        '<h2 class="lk-h">B. Rumus &amp; Kaidah Kunci</h2>' +
        '<div class="lk-rumus">' + (m.toolkit || []).map(function (f) {
          return '<div class="lk-rumus-b"><span class="lk-rumus-n">' + lkpdEsc(f.name) + '</span>' +
                 '<div class="lk-rumus-m">' + f.math + '</div></div>';
        }).join('') + '</div>' +

        '<h2 class="lk-h">C. Petunjuk Kolaborasi</h2>' +
        '<ol class="lk-ol lk-ol-tebal">' + langkah.map(function (t) {
          return '<li><b>' + t.num + '</b> &mdash; ' + t.text + '</li>';
        }).join('') + '</ol>' +
        '<p class="lk-tip">' + (isClil ? (ped.tip_en || ped.tip) : ped.tip) + '</p>' +

        '<h2 class="lk-h lk-break">D. Tugas Kolaborasi Kelompok</h2>' +
        kasus.map(function (q, i) {
          const bersih = q.replace(/^\[[A-Za-z0-9_.-]+\]\s*/, '');
          return '<div class="lk-soal">' +
            '<div class="lk-soal-h"><span class="lk-no">' + (i + 1) + '</span><div class="lk-soal-t">' + bersih + '</div></div>' +
            '<div class="lk-kerja">' + lkpdBaris(5) + '</div>' +
          '</div>';
        }).join('') +

        (latihan.length ? ('<h2 class="lk-h lk-break">E. Latihan Mandiri</h2>' +
          latihan.map(function (q, i) {
            const t = String(q.tanya || '').replace(/^\[[A-Za-z0-9_.-]+\]\s*/, '');
            return '<div class="lk-soal">' +
              '<div class="lk-soal-h"><span class="lk-no">' + (i + 1) + '</span><div class="lk-soal-t">' + t + '</div></div>' +
              '<div class="lk-kerja">' + lkpdBaris(6) + '</div>' +
            '</div>';
          }).join('')) : '') +

        '<div class="lk-ttd">' +
          '<div><div class="lk-ttd-l">Nilai</div><div class="lk-kotak"></div></div>' +
          '<div><div class="lk-ttd-l">Tangerang Selatan, ' + lkpdTanggal() + '</div>' +
            '<div class="lk-ttd-r">Guru Pengampu</div><div class="lk-ttd-sp"></div>' +
            '<div class="lk-ttd-n">Muhammad Ardiansyah, S.Pd.Gr.</div></div>' +
        '</div>' +
        '<div class="lk-kaki">LKPD ' + lkpdEsc(m.id) + ' &middot; ' + lkpdEsc(streamNama) +
          ' &middot; SMA Global Islamic School 2 Serpong</div>';

      if (window.renderMathInElement) {
        try {
          renderMathInElement(sheet, {
            delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }],
            throwOnError: false
          });
        } catch (e) { }
      }
      // Alat presentasi dimatikan dulu: layar gelap atau coretan pena ikut
      // terbawa ke hasil cetak kalau dibiarkan menyala.
      presReset();
      if (cetak !== false) setTimeout(function () { window.print(); }, 120);
    }

    // ---------------------------------------------------------------
    // MODE PRESENTASI GURU
    // Pintasan mengikuti kebiasaan baku perangkat presentasi (B untuk layar
    // gelap, P untuk pena), supaya guru tidak perlu menghafal aturan baru.
    // ---------------------------------------------------------------
    const presState = { black: false, laser: false, pen: false, warna: '#F59E0B' };

    function presSlideMode() { return ['wajib', 'minat', 'clil'].includes(currentMode); }

    function presTombol(id, on) {
      const b = document.getElementById(id);
      if (b) b.classList.toggle('is-on', !!on);
    }

    // ---- layar gelap ----
    function presBlackout(mau) {
      presState.black = (mau === undefined) ? !presState.black : !!mau;
      const el = document.getElementById('pres-blackout');
      if (el) el.classList.toggle('hidden', !presState.black);
      presTombol('pres-b-black', presState.black);
    }

    // ---- penunjuk laser ----
    function presLaser(mau) {
      presState.laser = (mau === undefined) ? !presState.laser : !!mau;
      const el = document.getElementById('pres-laser');
      if (el) el.classList.toggle('is-on', presState.laser);
      document.documentElement.classList.toggle('pres-laser-on', presState.laser);
      presTombol('pres-b-laser', presState.laser);
    }

    document.addEventListener('pointermove', function (e) {
      if (!presState.laser) return;
      const el = document.getElementById('pres-laser');
      if (el) { el.style.left = e.clientX + 'px'; el.style.top = e.clientY + 'px'; }
    });

    // ---- mode pena ----
    let presCtx = null, presGambar = false;

    function presPenUkur() {
      const cv = document.getElementById('pres-pen');
      if (!cv) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const w = window.innerWidth, h = window.innerHeight;
      // simpan coretan yang sudah ada saat ukuran berubah
      let lama = null;
      if (cv.width && cv.height) { try { lama = document.createElement('canvas');
        lama.width = cv.width; lama.height = cv.height; lama.getContext('2d').drawImage(cv, 0, 0); } catch (e) { lama = null; } }
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      presCtx = cv.getContext('2d');
      presCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      presCtx.lineCap = 'round'; presCtx.lineJoin = 'round';
      if (lama) { presCtx.save(); presCtx.setTransform(1, 0, 0, 1, 0, 0); presCtx.drawImage(lama, 0, 0); presCtx.restore(); }
    }

    function presPen(mau) {
      presState.pen = (mau === undefined) ? !presState.pen : !!mau;
      const cv = document.getElementById('pres-pen');
      if (cv) cv.classList.toggle('is-on', presState.pen);
      const tools = document.getElementById('pres-pen-tools');
      if (tools) tools.classList.toggle('hidden', !presState.pen);
      presTombol('pres-b-pen', presState.pen);
      if (presState.pen) { presPenUkur(); if (presState.laser) presLaser(false); }
    }

    function presPenHapus() {
      const cv = document.getElementById('pres-pen');
      if (cv && presCtx) presCtx.clearRect(0, 0, cv.width, cv.height);
    }

    (function presPenPasang() {
      const cv = document.getElementById('pres-pen');
      if (!cv) return;
      cv.style.touchAction = 'none';
      cv.addEventListener('pointerdown', function (e) {
        if (!presState.pen || !presCtx) return;
        presGambar = true; cv.setPointerCapture(e.pointerId);
        presCtx.beginPath(); presCtx.moveTo(e.clientX, e.clientY);
      });
      cv.addEventListener('pointermove', function (e) {
        if (!presGambar || !presCtx) return;
        presCtx.strokeStyle = presState.warna;
        presCtx.lineWidth = Math.max(2.5, 4 * (e.pressure ? e.pressure * 2 : 1));
        presCtx.lineTo(e.clientX, e.clientY); presCtx.stroke();
      });
      ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (ev) {
        cv.addEventListener(ev, function () { presGambar = false; });
      });
      [].forEach.call(document.querySelectorAll('.pres-warna'), function (b) {
        b.onclick = function () {
          presState.warna = b.getAttribute('data-w');
          [].forEach.call(document.querySelectorAll('.pres-warna'), function (x) { x.classList.remove('is-on'); });
          b.classList.add('is-on');
        };
      });
      window.addEventListener('resize', presPenUkur);
    })();

    // ---- bilah kendali melayang ----
    function presRemote() {
      const el = document.getElementById('pres-remote');
      if (el) el.classList.add('hidden');
    }

    // Semua alat presentasi dimatikan saat keluar dari mode slide, supaya
    // coretan atau layar gelap tidak ikut terbawa ke arena CBT.
    function presReset() {
      presBlackout(false); presLaser(false); presPen(false); presPenHapus();
    }

    // ---------------------------------------------------------------
    // AKSI CEPAT SLIDE VIEWER
    // ---------------------------------------------------------------

    // --- Cinema Mode: layar penuh sekaligus menyembunyikan bilah atas,
    //     supaya papan tulis digital hanya menampilkan isi pelajaran. ---
    function cinemaAktif() { return document.documentElement.classList.contains('cinema'); }

    function setCinema(on) {
      document.documentElement.classList.toggle('cinema', !!on);
      const ic = document.getElementById('cinema-icon');
      const nm = document.getElementById('cinema-nm');
      if (ic) ic.className = on ? 'fa-solid fa-compress' : 'fa-solid fa-display';
      if (nm) nm.textContent = on ? 'Keluar' : 'Cinema';
      if (!on) presReset();
      presRemote();
    }

    function toggleToolkitSvg() {
      const b = document.getElementById('toolkit-svg-box');
      const h = document.getElementById('lab-inline-host');
      if (!b) return;
      const tampil = b.classList.contains('hidden');
      b.classList.toggle('hidden', !tampil);
      if (h) h.classList.toggle('hidden', tampil);
    }

    function toggleCinema() {
      const mau = !cinemaAktif();
      setCinema(mau);
      try {
        if (mau && !document.fullscreenElement) {
          const p = document.documentElement.requestFullscreen();
          if (p && p.catch) p.catch(() => {});
        } else if (!mau && document.fullscreenElement && document.exitFullscreen) {
          const p = document.exitFullscreen();
          if (p && p.catch) p.catch(() => {});
        }
      } catch (e) {}
    }

    // Keluar lewat Esc bawaan peramban harus ikut mengembalikan bilah atas.
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement && cinemaAktif()) setCinema(false);
      presRemote();
    });

    // --- Lompat ke paket CBT yang sepadan dengan pertemuan yang dibuka ---
    function jumpToCbt() {
      const meetings = db[currentMode] || db['wajib'];
      const m = meetings[currentMeetingIdx];
      const subj = (currentMode === 'clil' || currentMode === 'minat') ? currentMode : 'wajib';
      const src = subj === 'wajib' ? db.tka_wajib : (subj === 'clil' ? db.tka_clil : db.tka_minat);
      if (!m || !src || !src[m.id]) return;      // paket belum ada: jangan pindah ke halaman kosong
      tkaSubj = subj; tkaPkgId = m.id; tkaQIdx = 0;
      currentMode = 'tka';
      if (cinemaAktif()) setCinema(false);
      renderAppView();
    }

    // --- Buku Rumus Saku ---
    function rumusSumber() {
      const aliran = currentMode === 'tka' ? tkaSubj : (currentMode === 'home' ? 'wajib' : currentMode);
      return { aliran: aliran, meetings: db[aliran] || db['wajib'] };
    }

    function renderRumusSaku(filter) {
      const body = document.getElementById('rumus-body');
      if (!body) return;
      const nama = { wajib: 'Matematika Wajib', minat: 'Matematika Peminatan', clil: 'CLIL Stream' };
      const { aliran, meetings } = rumusSumber();
      const q = (filter || '').toLowerCase().trim();

      const punya = meetings.filter(m => (m.toolkit || []).length);
      const total = punya.reduce((n, m) => n + m.toolkit.length, 0);
      document.getElementById('rumus-sub').textContent =
        (nama[aliran] || aliran) + ' \u00b7 ' + total + ' rumus dari ' + punya.length + ' pertemuan';

      const hasil = punya.map(m => ({
        m: m,
        rumus: m.toolkit.filter(f => !q ||
          (f.name || '').toLowerCase().includes(q) || (m.title || '').toLowerCase().includes(q) ||
          m.id.toLowerCase().includes(q) || (m.bab || '').toLowerCase().includes(q))
      })).filter(x => x.rumus.length);

      body.innerHTML = '';
      if (!hasil.length) {
        body.innerHTML = '<div class="py-14 text-center"><i class="fa-regular fa-face-frown text-3xl text-slate-700"></i>' +
          '<p class="mt-3 text-sm text-slate-400">Tidak ada rumus yang cocok dengan pencarian itu.</p></div>';
        return;
      }
      const aktifId = (meetings[currentMeetingIdx] || {}).id;
      hasil.forEach(({ m, rumus }) => {
        const sec = document.createElement('section');
        sec.className = 'space-y-2.5';
        if (m.id === aktifId) sec.id = 'rumus-aktif';
        sec.innerHTML =
          '<div class="flex items-baseline gap-2.5 flex-wrap">' +
            '<span class="font-mono font-black text-sm ' + (m.id === aktifId ? 'text-amber-400' : 'text-blue-400') + '">' + m.id + '</span>' +
            '<span class="text-sm font-bold text-white">' + (m.title || '') + '</span>' +
            (m.id === aktifId ? '<span class="mp-tag">Sedang dibuka</span>' : '') +
          '</div>' +
          '<div class="grid gap-2.5 md:grid-cols-2">' +
            rumus.map(f =>
              '<div class="formula-box">' +
                '<span class="fb-name">' + (f.name || '') + '</span>' +
                '<div class="fb-math">' + (f.math || '') + '</div>' +
              '</div>').join('') +
          '</div>';
        body.appendChild(sec);
      });
      if (window.renderMathInElement) {
        try {
          renderMathInElement(body, {
            delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }],
            throwOnError: false
          });
        } catch (e) {}
      }
    }

    function openRumusSaku() {
      const el = document.getElementById('rumus-modal');
      if (!el) return;
      el.classList.remove('hidden');
      const inp = document.getElementById('rumus-search');
      if (inp) inp.value = '';
      renderRumusSaku('');
      setTimeout(() => {
        const a = document.getElementById('rumus-aktif');
        const body = document.getElementById('rumus-body');
        if (a && body) body.scrollTop += a.getBoundingClientRect().top - body.getBoundingClientRect().top - 4;
        if (inp && window.innerWidth >= 768) inp.focus();
      }, 0);
    }

    function closeRumusSaku() {
      const el = document.getElementById('rumus-modal');
      if (el) el.classList.add('hidden');
    }

    // ---------------------------------------------------------------
    // PEMILIH PERTEMUAN
    // Menampilkan 21-30 pertemuan sebagai satu kisi datar membuat guru
    // harus memindai nomor satu per satu. Di sini pertemuan dikelompokkan
    // per BAB, tiap BAB punya warna aksen sendiri dan bisa dilipat, dan
    // tiap kartu menyebutkan judul serta sub-topiknya.
    // ---------------------------------------------------------------
    const PICKER_ACCENTS = {
      wajib: [['#2563eb', '37,99,235'], ['#f59e0b', '245,158,11'], ['#2563eb', '37,99,235']],
      minat: [['#2563eb', '37,99,235'], ['#f59e0b', '245,158,11'], ['#2563eb', '37,99,235'], ['#f59e0b', '245,158,11']],
      clil:  [['#2563eb', '37,99,235']]
    };
    let pickerBabFilter = 'all';
    let pickerCollapsed = null;   // Set berisi BAB yang sedang dilipat

    function pickerAliran() { return currentMode === 'tka' ? tkaSubj : currentMode; }

    // CLIL memakai nomor P25..P30 di dalam data, tetapi guru mengenalnya
    // sebagai lab C01..C06. Nomor asli tetap ditampilkan kecil sebagai jembatan.
    function pickerLabel(aliran, id, urut) {
      return aliran === 'clil' ? ('C' + String(urut + 1).padStart(2, '0')) : id;
    }

    function pickerItems() {
      const aliran = pickerAliran();
      if (currentMode === 'tka') {
        const src = tkaSrc();
        const meta = {};
        (db[tkaSubj] || []).forEach(m => { meta[m.id] = m; });
        return sortedPkgIds(src).map((pid, i) => {
          const n = (src[pid].questions || []).length;
          return {
            id: pid, label: pickerLabel(aliran, pid, i),
            title: src[pid].title || '',
            desc: n + ' butir soal pilihan ganda, isian, dan benar/salah',
            bab: (meta[pid] && meta[pid].bab) || '',
            aktif: pid === tkaPkgId,
            selesai: userSessionScores[`${tkaSubj}_${pid}_0`] !== undefined,
            pilih: () => { tkaPkgId = pid; tkaQIdx = 0; }
          };
        });
      }
      const meetings = db[currentMode] || db['wajib'];
      return meetings.map((m, idx) => ({
        id: m.id, label: pickerLabel(aliran, m.id, idx),
        title: m.title || '',
        desc: (m.obj && m.obj[0]) || m.hook || '',
        bab: m.bab || '',
        aktif: idx === currentMeetingIdx,
        selesai: userSessionScores[`${currentMode}_${m.id}_0`] !== undefined,
        pilih: () => { currentMeetingIdx = idx; currentSlideIdx = 0; }
      }));
    }

    // Kelompokkan menurut kolom `bab` pada data — jadi pembagian di layar
    // selalu sama dengan pembagian di perangkat ajar, tanpa daftar terpisah.
    function pickerGroups(items) {
      const urut = [], peta = {};
      items.forEach(it => {
        const k = it.bab || 'Lainnya';
        if (peta[k] === undefined) { peta[k] = urut.length; urut.push({ key: k, items: [] }); }
        urut[peta[k]].items.push(it);
      });
      const warna = PICKER_ACCENTS[pickerAliran()] || PICKER_ACCENTS.wajib;
      urut.forEach((g, i) => {
        const a = warna[i % warna.length];
        g.warna = a[0]; g.rgb = a[1];
        const m = /^Bab\s*(\d+)\s*[:.]?\s*(.*)$/i.exec(g.key);
        g.nomor = m ? m[1] : String(i + 1);
        g.judul = m ? m[2] : g.key;
        g.label = m ? ('BAB ' + m[1]) : 'LAB';
        g.rentang = g.items.length
          ? (g.items[0].label + ' \u2013 ' + g.items[g.items.length - 1].label) : '';
        g.satuan = m ? null : 'Specialized International Labs';
        g.selesai = g.items.filter(x => x.selesai).length;
      });
      return urut;
    }

    // Judul pada data mengulang nama bab: "Limit Aljabar & Trigonometri 3:
    // Limit Trigonometri & Identitas". Di dalam kelompoknya, awalan itu hanya
    // pengulangan — dibuang supaya mata langsung menangkap sub-topiknya.
    function pickerTrimTitle(judul, namaBab) {
      if (!judul) return '';
      // Smart regex to strip "Integral & Penerapannya 1: ", "Limit Aljabar 3: ", "Bab 1 - 1: " etc.
      const regex = /^([A-Za-z\s&/]+\d+\s*[:.–-]\s*)/i;
      if (regex.test(judul)) {
        return judul.replace(regex, '').trim();
      }
      if (namaBab && judul.toLowerCase().startsWith(namaBab.toLowerCase())) {
        return judul.slice(namaBab.length).replace(/^[\s\d:.-]+/, '').trim() || judul;
      }
      return judul;
    }

    function pickerChip(teks, aktif, warna, rgb, onclick) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'mp-chip' + (aktif ? ' is-on' : '');
      if (warna) { b.style.setProperty('--ch', warna); b.style.setProperty('--chs', rgb); }
      b.textContent = teks;
      b.onclick = onclick;
      return b;
    }

    let pickerLastQuery = null;

    function renderMeetingPicker(filter) {
      const body = document.getElementById('picker-body');
      if (!body) return;
      const resetGulir = pickerLastQuery !== null && pickerLastQuery !== (filter || '');
      pickerLastQuery = filter || '';
      const sub = document.getElementById('picker-sub');
      const streams = document.getElementById('picker-streams');
      const babBar = document.getElementById('picker-bab');

      const nama = { wajib: 'Matematika Wajib', minat: 'Matematika Peminatan', clil: 'CLIL Stream' };
      const aliran = pickerAliran();
      const items = pickerItems();
      const groups = pickerGroups(items);
      if (sub) {
        sub.textContent = nama[aliran] || 'Matematika';
      }

      // ---- 1. STREAM SWITCHER CHIPS ----
      if (streams) {
        streams.innerHTML = '';
        const streamList = [
          { key: 'wajib', label: 'Wajib' },
          { key: 'minat', label: 'Peminatan' },
          { key: 'clil', label: 'CLIL' }
        ];
        streamList.forEach(st => {
          const btn = document.createElement('button');
          btn.type = 'button';
          const isCurrent = (currentMode === 'tka' ? tkaSubj === st.key : currentMode === st.key);
          btn.className = isCurrent ? 
            "px-4 py-1 rounded-lg text-xs font-bold bg-blue-600 text-white shadow-sm transition" : 
            "px-4 py-1 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition";
          btn.textContent = st.label;
          btn.onclick = () => {
            if (currentMode === 'tka') {
              toggleTkaSubj(st.key);
            } else {
              switchSubject(st.key);
            }
            openMeetingPicker();
          };
          streams.appendChild(btn);
        });
      }

      // ---- 2. BAB CHIPS (BAB 1, BAB 2, BAB 3, BAB 4 - TANPA SEMUA BAB) ----
      if (babBar) {
        babBar.innerHTML = '';
        groups.forEach(g => {
          const btn = document.createElement('button');
          btn.type = 'button';
          const isSelected = pickerBabFilter === g.key;
          btn.className = isSelected ? 
            "px-3 py-0.5 rounded-lg text-[11px] font-mono font-bold bg-amber-500 text-slate-950 shadow transition" : 
            "px-3 py-0.5 rounded-lg text-[11px] font-mono font-bold bg-[#0D1B2E] text-slate-300 hover:text-white border border-blue-900/60 hover:border-amber-500/40 transition";
          btn.textContent = g.label;
          btn.onclick = () => {
            pickerBabFilter = (pickerBabFilter === g.key) ? 'all' : g.key;
            if (pickerCollapsed) pickerCollapsed.delete(g.key);
            renderMeetingPicker(document.getElementById('picker-search') ? document.getElementById('picker-search').value : '');
          };
          babBar.appendChild(btn);
        });
      }

      // ---- 3. SARING MENURUT PENCARIAN ----
      const q = (filter || '').toLowerCase().trim();
      const cocok = it => !q || it.id.toLowerCase().includes(q) || it.label.toLowerCase().includes(q) ||
        it.title.toLowerCase().includes(q) || it.bab.toLowerCase().includes(q) || (it.desc || '').toLowerCase().includes(q);

      const tampil = groups
        .filter(g => pickerBabFilter === 'all' || g.key === pickerBabFilter)
        .map(g => Object.assign({}, g, { hasil: g.items.filter(cocok) }))
        .filter(g => g.hasil.length);

      if (pickerCollapsed === null) {
        pickerCollapsed = new Set();
        const aktifKey = (items.find(it => it.aktif) || {}).bab;
        groups.forEach(g => { if (g.key !== aktifKey) pickerCollapsed.add(g.key); });
      }

      body.innerHTML = '';
      if (!tampil.length) {
        body.innerHTML = '<div class="py-14 text-center"><i class="fa-regular fa-face-frown text-3xl text-slate-700"></i>' +
          '<p class="mt-3 text-sm text-slate-400">Tidak ketemu. Coba kata yang lebih pendek.</p></div>';
        return;
      }

      // ---- 4. RENDER ACCORDION BAB & PERTEMUAN ----
      tampil.forEach(g => {
        const terbuka = q ? true : !pickerCollapsed.has(g.key);
        const sec = document.createElement('section');
        sec.className = 'rounded-xl overflow-hidden mb-2 border transition ' + 
          (terbuka ? 'border-blue-600 bg-[#08101E] shadow-md' : 'border-blue-900/60 bg-[#08101E] hover:border-blue-800');

        const head = document.createElement('button');
        head.type = 'button';
        head.className = 'w-full text-left px-3 py-2 flex items-center justify-between cursor-pointer ' + 
          (terbuka ? 'bg-[#0D1B2E] border-b border-blue-900/60' : 'bg-[#08101E]');
        
        head.innerHTML = `
          <div class="flex items-center gap-2 min-w-0 flex-1">
            <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold border border-amber-500/30 shrink-0">
              ${g.label}
            </span>
            <span class="text-xs font-bold text-white truncate">
              ${g.judul}
            </span>
          </div>
          <i class="fa-solid fa-chevron-${terbuka ? 'up text-amber-400' : 'down text-slate-500'} text-[10px] ml-2 shrink-0"></i>
        `;
        head.onclick = () => {
          if (pickerCollapsed.has(g.key)) pickerCollapsed.delete(g.key); else pickerCollapsed.add(g.key);
          renderMeetingPicker(document.getElementById('picker-search') ? document.getElementById('picker-search').value : '');
        };
        sec.appendChild(head);

        if (terbuka) {
          const list = document.createElement('div');
          list.className = 'p-1.5 space-y-1';
          g.hasil.forEach(it => {
            const asesmen = /asesmen|sumatif|simulasi|review/i.test(it.title);
            const c = document.createElement('button');
            c.type = 'button';
            c.className = 'w-full px-2.5 py-1.5 rounded-lg text-left flex items-center justify-between gap-2 transition cursor-pointer ' + 
              (it.aktif ? 'bg-blue-600 text-white font-bold shadow' : 
               (asesmen ? 'bg-[#0A1424] hover:bg-[#102038] border border-blue-900/50 border border-amber-500/30 text-amber-200' : 'bg-[#0A1424] hover:bg-[#102038] border border-blue-900/50 text-slate-300 hover:text-white'));
            
            const cleanTitle = pickerTrimTitle(it.title, g.judul);
            c.innerHTML = `
              <div class="flex items-center gap-2 min-w-0 flex-1">
                <span class="text-xs font-mono font-bold shrink-0 ${it.aktif ? 'text-blue-100' : 'text-amber-400'}">
                  ${it.label}
                </span>
                <span class="text-xs truncate font-semibold flex-1">
                  ${cleanTitle}
                </span>
              </div>
              <div class="flex items-center gap-1.5 shrink-0 font-mono text-[10px]">
                ${asesmen ? '<span class="px-1.5 py-0.2 rounded bg-amber-500 text-slate-950 text-[9px] font-black">UH</span>' : ''}
                ${it.aktif ? '<span class="px-2 py-0.2 rounded bg-white text-blue-900 font-bold text-[10px]">Buka</span>' : 
                 (it.selesai ? '<i class="fa-solid fa-circle-check text-amber-400 text-xs"></i>' : '<span class="text-slate-500 text-[10px]">Belum</span>')}
              </div>
            `;
            c.onclick = () => { it.pilih(); closeMeetingPicker(); renderAppView(); };
            list.appendChild(c);
          });
          sec.appendChild(list);
        }
        body.appendChild(sec);
      });

      if (resetGulir) body.scrollTop = 0;

      if (window.renderMathInElement) {
        try {
          renderMathInElement(body, {
            delimiters: [{ left: '$', right: '$', display: false }],
            throwOnError: false, errorColor: '#94a3b8'
          });
        } catch (e) {}
      }
    }

    function openMeetingPicker() {
      const m = document.getElementById('meeting-picker-modal');
      if (!m) return;
      m.classList.remove('hidden');
      pickerBabFilter = 'all';
      pickerCollapsed = null;
      pickerLastQuery = null;
      const inp = document.getElementById('picker-search');
      if (inp) inp.value = '';
      renderMeetingPicker('');
      setTimeout(() => {
        // Gulir hanya jika pertemuan yang sedang dibuka berada di luar
        // pandangan, dan gulirkan ke awal BAB-nya — bukan ke kartunya —
        // supaya judul BAB tidak pernah terpotong separuh di tepi atas.
        const body = document.getElementById('picker-body');
        const act = document.querySelector('#picker-body .mp-card.is-active');
        if (body && act) {
          const ar = act.getBoundingClientRect(), br = body.getBoundingClientRect();
          const terlihat = ar.top < br.bottom - 24 && ar.bottom > br.top + 24;
          const sec = act.closest('.mp-sec');
          if (!terlihat && sec) body.scrollTop += sec.getBoundingClientRect().top - br.top - 4;
        }
        if (inp && window.innerWidth >= 768) inp.focus();
      }, 0);
    }

    function closeMeetingPicker() {
      const m = document.getElementById('meeting-picker-modal');
      if (m) m.classList.add('hidden');
    }

    // pindah satu paket ke depan/belakang tanpa membuka modal
    function stepPkg(dir) {
      if (currentMode === 'tka') {
        const src = tkaSrc();
        const ids = sortedPkgIds(src);
        const i = ids.indexOf(tkaPkgId);
        const j = Math.max(0, Math.min(ids.length - 1, (i === -1 ? 0 : i) + dir));
        if (ids[j] === tkaPkgId) return;
        tkaPkgId = ids[j]; tkaQIdx = 0;
      } else {
        const meetings = db[currentMode] || db['wajib'];
        const j = Math.max(0, Math.min(meetings.length - 1, currentMeetingIdx + dir));
        if (j === currentMeetingIdx) return;
        currentMeetingIdx = j; currentSlideIdx = 0;
      }
      renderAppView();
    }

    // KATEX AUTO-RENDER HELPER
    function renderMath(element) {
      if (!element) return;
      if (window.renderMathInElement) {
        try {
          window.renderMathInElement(element, {
            delimiters: [
              {left: "$$", right: "$$", display: true},
              {left: "$", right: "$", display: false},
              {left: "\\[", right: "\\]", display: true},
              {left: "\\(", right: "\\)", display: false}
            ],
            throwOnError: false
          });
        } catch (err) {}
      }
    }

    // FORMAT SOLUTION STEP CARDS (ESSAY WORKED EXAMPLES VS CBT QUIZ)
    function formatSolutionHtml(solText, isWorkedExample = false) {
      if (!solText) return '';
      const lines = solText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      let html = '<div class="space-y-1.5 my-1">';
      let stepNum = 1;

      lines.forEach((line) => {
        let clean = line.replace(/^(?:Langkah|Step)\s*\d+\s*:\s*/i, '').trim();
        clean = formatMathTables(clean);
        const isConclusion = /(?:Kesimpulan|Conclusion|Kunci|Jawaban|Answer\s*Key)\s*:?/i.test(clean);
        const isBullet = /^[-•]|^\(\d+\)/.test(clean);

        if (isConclusion) {
          if (isWorkedExample) {
            clean = clean.replace(/(?:Answer\s*Key|Key|Kunci\s*(?:Jawaban)?|Jawaban(?:\s*yang\s*(?:tepat|benar)\s*adalah)?)\s*:?\s*[A-E]\b\.?/gi, '').trim();
            clean = clean.replace(/\(\s*(?:Kunci|Key)\s*[A-E]\s*\)/gi, '').trim();
            clean = clean.replace(/^(?:Kesimpulan|Conclusion)\s*:?\s*$/i, '').trim();
            if (!clean) {
              const isClil = currentMode === 'clil' || tkaSubj === 'clil';
              clean = isClil ? 'Final mathematical solution verified successfully.' : 'Solusi analitis akhir diperoleh secara terstruktur dan tepat.';
            }
            if (!/^(?:Kesimpulan|Conclusion)/i.test(clean)) {
              const isClil = currentMode === 'clil' || tkaSubj === 'clil';
              clean = (isClil ? 'Conclusion: ' : 'Kesimpulan: ') + clean;
            }
          }

          html += `
            <div class="p-2.5 bg-[#050B14] border border-blue-900/80 border-l-4 border-l-amber-500 rounded-xl flex items-start gap-2 shadow-sm">
              <span class="w-5 h-5 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                <i class="fa-solid fa-check"></i>
              </span>
              <div class="text-xs md:text-sm text-amber-300 font-semibold leading-relaxed flex-1">
                ${clean}
              </div>
            </div>
          `;
        } else if (isBullet) {
          html += `
            <div class="p-2 bg-[#060D1A] border border-blue-900/60 rounded-xl flex items-start gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5"></span>
              <div class="text-xs text-slate-200 font-medium leading-relaxed flex-1">
                ${clean}
              </div>
            </div>
          `;
        } else {
          const isClil = currentMode === 'clil' || tkaSubj === 'clil';
          html += `
            <div class="p-2.5 bg-[#060D1A] border border-blue-900/60 rounded-xl flex items-start gap-2 shadow-sm">
              <span class="px-2 py-0.5 rounded-md bg-blue-600/30 border border-blue-400/40 text-blue-300 font-mono text-[10px] font-bold shrink-0 mt-0.5">
                ${isClil ? 'Step' : 'Langkah'} ${stepNum}
              </span>
              <div class="text-xs md:text-sm text-slate-100 font-medium leading-relaxed flex-1">
                ${clean}
              </div>
            </div>
          `;
          stepNum++;
        }
      });

      html += '</div>';
      return html;
    }

    // FORMAT QUESTION PROMPT (TABLES & BADGES)
    // A true/false item already lists its statements as answer rows, so repeating
    // them inside the stem only doubles the reading load.
    function stripTfStatements(rawText) {
      if (!rawText) return rawText;
      const cut = rawText.search(/\n?\s*\(1\)\s/);
      const head = cut > 0 ? rawText.slice(0, cut).trim() : rawText.trim();
      return head.length >= 15 ? head : rawText;
    }

    function formatQuestionPromptHtml(rawText, qType) {
      if (!rawText) return '';
      let text = rawText;

      text = text.replace(/^(\[[A-Za-z0-9_.-]+\])\s*/, (match, tag) => {
        return `<span class="inline-flex items-center px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 font-mono font-bold text-xs mr-2 shadow-sm">${tag}</span>`;
      });

      text = formatMathTables(text);
      return text;
    }

    // RENDER ACTIVE SLIDE
    // Tampilan pengganti ketika sebuah mapel belum berisi materi di tingkat
    // ini -- lebih baik daripada halaman kosong atau galat.
    function tampilkanSlideKosong(mode) {
      const nama = { 'wajib': 'Matematika Wajib', 'minat': 'Matematika Peminatan',
                     'clil': 'Program Khusus CLIL' }[mode] || 'Mata pelajaran ini';
      const badan = document.getElementById('slide-body');
      if (badan) {
        badan.innerHTML =
          '<div class="max-w-lg mx-auto my-10 p-8 rounded-2xl border border-amber-500/40 ' +
          'bg-[#0D1A2E] text-center shadow-xl">' +
          '<i class="fa-solid fa-folder-open text-amber-400 text-3xl mb-4"></i>' +
          '<div class="text-slate-100 font-black text-lg mb-2">Belum ada materi</div>' +
          '<div class="text-slate-400 text-sm">' + nama + ' untuk kelas ' + NAMA_TINGKAT +
          ' belum diisi. Silakan pilih mata pelajaran lain pada tab di atas.</div></div>';
      }
      const lencana = document.getElementById('slide-badge');
      if (lencana) lencana.innerHTML =
        '<span class="text-slate-400 font-bold text-[10px] md:text-xs">' + nama + '</span>';
      const pita = document.getElementById('meeting-ribbon');
      if (pita) pita.innerHTML = '';
    }

    function renderSlide() {
      const meetings = db[currentMode] || db['wajib'] || [];
      // Sebuah tingkat boleh belum punya materi untuk mapel ini. Tanpa
      // penjagaan di bawah, slide-nya membaca pertemuan yang tidak ada dan
      // seluruh halaman berhenti dengan galat.
      if (!meetings.length) return tampilkanSlideKosong(currentMode);
      if (currentMeetingIdx >= meetings.length) currentMeetingIdx = 0;
      const m = meetings[currentMeetingIdx];
      const sIdx = currentSlideIdx;
      if (sIdx < 4 || sIdx > 6) { window._activeExampleLevel = null; }
      
      const isClil = currentMode === 'clil';
      // Nama tiap tahap, bukan sekadar "Contoh 1/2/3": guru dan siswa
      // langsung tahu slide 5 membangun fondasi, 6 melatih analisis, 7 HOTS.
      const pillTitles = isClil
        ? ["Cover", "Goals", "Hook", "Toolkit", "Level 1", "Level 2", "Level 3", "Level 4", "Level 5", "Collab", "Summary", "Closing"]
        : ["Cover", "Tujuan", "Hook", "Toolkit", "Level 1", "Level 2", "Level 3", "Level 4", "Level 5", "Kolaborasi", "Rangkuman", "Penutup"];
      const pillIcons = [
        "fa-solid fa-bookmark", "fa-solid fa-bullseye", "fa-solid fa-lightbulb", "fa-solid fa-toolbox",
        "fa-solid fa-cube", "fa-solid fa-chart-line", "fa-solid fa-brain", "fa-solid fa-graduation-cap", "fa-solid fa-fire",
        "fa-solid fa-users", "fa-solid fa-flag-checkered", "fa-solid fa-bell"
      ];
      const slideTitles = pillTitles;
      if (window._lastRenderedMeetingId !== m.id) {
        window._lastRenderedMeetingId = m.id;
        window.currentMeetingPedagogy = null;
      }

      const badgeEl = document.getElementById('slide-badge');
      if (badgeEl) badgeEl.innerText = m.id;
      
      const judulEl = document.getElementById('slide-title-header');
      if (judulEl) {
        judulEl.innerText = `${m.title} • ${slideTitles[sIdx]}`;
      }
      if (m.title.indexOf('$') !== -1) renderMath(judulEl);
      document.getElementById('slide-counter').innerHTML = `
        <div class="flex items-center gap-1.5 md:gap-2">
          <div class="w-12 md:w-20 h-1.5 bg-slate-700 rounded-full overflow-hidden border border-slate-600 hidden sm:block">
            <div class="h-full bg-gradient-to-r from-blue-500 to-amber-500 transition-all duration-300" style="width: ${(sIdx + 1) * 8.33}%"></div>
          </div>
          <span class="text-[10px] md:text-xs font-mono text-slate-300 font-extrabold">${sIdx + 1} / 12</span>
        </div>
      `;

      const pillsContainer = document.getElementById('slide-pills-container');
      pillsContainer.innerHTML = '';
      for (let i = 0; i < 12; i++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'slide-pill' + (i === sIdx ? ' is-on' : (i < sIdx ? ' is-done' : ''));
        btn.innerHTML =
          '<span class="sp-no">' + (i + 1) + '</span>' +
          '<i class="' + pillIcons[i] + ' sp-ic"></i>' +
          '<span class="sp-nm">' + pillTitles[i] + '</span>';
        btn.title = (i + 1) + '. ' + pillTitles[i];
        btn.setAttribute('aria-current', i === sIdx ? 'step' : 'false');
        btn.onclick = () => { currentSlideIdx = i; renderAppView(); };
        pillsContainer.appendChild(btn);
      }
      // tahap yang sedang dibuka selalu ditarik ke dalam pandangan
      const aktifPil = pillsContainer.children[sIdx];
      if (aktifPil && aktifPil.scrollIntoView) aktifPil.scrollIntoView({ block: 'nearest', inline: 'center' });

      const body = document.getElementById('slide-body');
      body.innerHTML = '';

      if (sIdx === 0) {
        // SLIDE 1: RICH FUNCTIONAL OVERVIEW
        body.innerHTML = `
          <div class="h-full flex flex-col justify-between space-y-3 p-1">
            <div class="bg-gradient-to-r from-[#0B2545] to-slate-900 p-4 md:p-5 rounded-2xl border border-blue-500/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0">
              <div>
                <span class="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 text-[10px] font-extrabold rounded-full border border-amber-400/40 uppercase">
                  ${(m.bab || (isClil ? 'CALCULUS (CLIL)' : ('MATEMATIKA KELAS ' + NAMA_TINGKAT))).toUpperCase()} • ${m.id}
                </span>
                <h2 class="text-base md:text-2xl font-black text-white mt-1 leading-tight">${m.title}</h2>
                <p class="text-[11px] text-slate-400 mt-0.5">Math Cihuy • Muhammad Ardiansyah, S.Pd.Gr.</p>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <button onclick="currentSlideIdx = 3; renderAppView();" class="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5 transition active:scale-95">
                  <svg class="icon-base icon-hover:glow"><use xlink:href="#icon-slide4"></use></svg> <span>${isClil ? 'View Formulas' : 'Lihat Rumus'}</span>
                </button>
                <button onclick="openTkaForCurrentMeeting('${m.id}')" class="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-black shadow-lg flex items-center gap-1.5 transition active:scale-95">
                  <i class="fa-solid fa-crosshairs"></i> <span>${isClil ? '10 CBT Drills' : '10 Soal CBT'}</span>
                </button>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 overflow-y-auto pr-1">
              <div class="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 shadow space-y-2 flex flex-col justify-between">
                <div>
                  <h3 class="text-xs md:text-sm font-extrabold text-blue-400 flex items-center gap-2 mb-2">
                    <svg class="icon-base icon-hover:glow"><use xlink:href="#icon-slide1"></use></svg> ${isClil ? 'LEARNING OBJECTIVES & COMPETENCIES' : 'TUJUAN & CAPAIAN PEMBELAJARAN'}
                  </h3>
                  <ul class="space-y-1.5 text-xs text-slate-200">
                    ${(m.obj || []).map(o => `<li class="flex items-start gap-2"><i class="fa-solid fa-check text-blue-400 mt-1 shrink-0 text-xs"></i> <span>${o}</span></li>`).join('')}
                  </ul>
                </div>
                <button onclick="currentSlideIdx = 1; renderAppView();" class="w-full mt-2 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold border border-slate-700 transition flex items-center justify-center gap-1">
                  <span>${isClil ? 'Detailed Learning Indicators' : 'Detail Indikator Pembelajaran'}</span> <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
              </div>

              <div class="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 shadow space-y-2 flex flex-col justify-between">
                <div>
                  <h3 class="text-xs md:text-sm font-extrabold text-amber-400 flex items-center gap-2 mb-2">
                    <svg class="icon-base icon-hover:glow"><use xlink:href="#icon-slide2"></use></svg> ${isClil ? 'REAL-WORLD CONTEXT & MOTIVATION' : 'KASUS & APERSEPSI KONTEKSTUAL'}
                  </h3>
                  <p class="text-xs text-slate-300 leading-relaxed">${m.hook || (isClil ? 'This lesson develops structured analytical capabilities and calculus modeling.' : 'Materi ini dirancang untuk melatih kemampuan analitis dan penyelesaian masalah bertingkat.')}</p>
                </div>
                <button onclick="nextSlide()" class="w-full mt-2 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-slate-950 font-black rounded-xl text-xs shadow transition flex items-center justify-center gap-1.5">
                  <span>${isClil ? 'Start Structured Lesson' : 'Mulai Pembelajaran Terstruktur'}</span> <i class="fa-solid fa-circle-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        `;
      } else if (sIdx === 1) {
        body.innerHTML = `
          <div class="space-y-3 w-full my-auto shrink-0">
            <div class="bg-slate-900 p-4 md:p-6 rounded-2xl border border-blue-500/40 shadow-xl">
              <h3 class="text-xs md:text-sm font-extrabold text-blue-400 mb-3 flex items-center gap-1.5">
                <svg class="icon-base icon-hover:glow"><use xlink:href="#icon-slide1"></use></svg> ${isClil ? 'LEARNING OBJECTIVES & INDICATORS' : 'TUJUAN PEMBELAJARAN & INDIKATOR'}
              </h3>
              <ul class="space-y-2 text-xs md:text-sm text-slate-200">
                ${(m.obj || []).map(o => `<li class="flex items-start gap-2"><i class="fa-solid fa-check text-blue-400 mt-1"></i> <div>${o}</div></li>`).join('')}
              </ul>
            </div>
          </div>
        `;
      } else if (sIdx === 2) {
        body.innerHTML = `
          <div class="space-y-3 w-full my-auto shrink-0">
            <div class="bg-slate-900 p-4 md:p-6 rounded-2xl border border-amber-500/40 shadow-xl space-y-3">
              <span class="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 text-[10px] font-bold rounded-full">${isClil ? 'REAL-WORLD CONTEXT & MOTIVATION' : 'REAL-WORLD APERSEPSI'}</span>
              <h3 class="text-sm md:text-lg font-extrabold text-white">${isClil ? 'Engineering / Physical Context' : 'Kasus Kontekstual'}</h3>
              <p class="text-xs md:text-sm text-slate-300 leading-relaxed">${m.hook || ''}</p>
            </div>
          </div>
        `;
      } else if (sIdx === 3) {
        // SLIDE 4: THE MATHEMATICAL TOOLKIT (OPTIMIZED BALANCED 7:5 WORKSPACE)
        const formulas = m.toolkit || [];
        const toolkitSvg = getTopicSvgDiagram(m.id, currentMode, 'toolkit');
        window._labSlide4 = labUntukBab(m.bab, currentMode);
        body.innerHTML = `
          <div class="space-y-3 w-full my-auto shrink-0">
            <div class="p-4 md:p-6 bg-[#0D1B2E] rounded-3xl border border-blue-800/80 shadow-2xl space-y-4">
              <!-- TOOLKIT HEADER -->
              <div class="flex items-center justify-between border-b border-blue-900/80 pb-3">
                <div class="flex items-center gap-2.5 min-w-0">
                  <span class="w-8 h-8 rounded-xl bg-blue-600/30 border border-blue-500/40 text-amber-400 flex items-center justify-center text-sm shadow-sm shrink-0">
                    <i class="fa-solid fa-toolbox"></i>
                  </span>
                  <div class="truncate min-w-0">
                    <h3 class="text-xs md:text-sm font-black text-white tracking-wide truncate">
                      ${isClil ? 'THE MATHEMATICAL TOOLKIT (CORE FORMULAS)' : 'THE MATHEMATICAL TOOLKIT (RUMUS & KAIDAH UTAMA)'}
                    </h3>
                    <p class="text-[10px] text-slate-400 font-mono truncate">${m.id} • ${isClil ? 'Essential Theorems & Rules' : 'Teorema & Kaidah Penting'}</p>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-lg bg-[#060D1A] border border-amber-500/30 text-amber-300 text-xs font-mono font-bold shrink-0">
                  ${formulas.length} Kaidah
                </span>
              </div>
              
              <!-- 2-COLUMN BALANCED WORKSPACE: FORMULAS (LEFT 7/12) + LAB (RIGHT 5/12) -->
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                <!-- FORMULAS LIST (LEFT 7/12) -->
                <div class="lg:col-span-7 space-y-2.5 max-h-[380px] overflow-y-auto pr-1.5 custom-scroll">
                  ${formulas.map(f => `
                    <div class="formula-box">
                      <span class="fb-name">${f.name}</span>
                      <div class="fb-math">${f.math}</div>
                    </div>
                  `).join('')}
                </div>

                <!-- 3D INTERACTIVE LAB / DIAGRAM (RIGHT 5/12) -->
                <div class="lg:col-span-5 p-4 bg-[#060D1A] rounded-2xl border border-blue-900/80 shadow-inner flex flex-col justify-between space-y-3">
                  <div class="flex items-center justify-between border-b border-blue-900/60 pb-2">
                    <span class="text-xs font-bold text-amber-300 font-mono uppercase tracking-wider flex items-center gap-1.5">
                      <i class="fa-solid fa-cube"></i> ${isClil ? 'Interactive Visualizer' : 'Visualisasi Geometri 3D'}
                    </span>
                    ${toolkitSvg ? `<button type="button" onclick="toggleToolkitSvg()" class="text-[10px] text-slate-400 hover:text-white font-mono underline cursor-pointer">gambar diam</button>` : ''}
                  </div>
                  <div id="lab-inline-host" class="flex-1 min-h-[180px] flex items-center justify-center"></div>
                  ${toolkitSvg ? `<div id="toolkit-svg-box" class="hidden bg-[#081324] p-2 rounded-xl border border-blue-900/60 flex items-center justify-center">${toolkitSvg}</div>` : ''}
                  <div class="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-blue-900/40">
                    <span>Rotasi: <b>360°</b></span>
                    <span class="text-amber-300">Sentuh/geser bangun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      } else if (sIdx >= 4 && sIdx <= 8) {
        window._labContoh = labUntukBab(m.bab, currentMode);
        
        // Each Level is now a dedicated native Slide (Slide 5 = Level 1, Slide 6 = Level 2, Slide 7 = Level 3, Slide 8 = Level 4, Slide 9 = Level 5)
        const exIdx = sIdx - 4;

        const exTitles = isClil ? 
          ["Level 1: Conceptual Foundation", "Level 2: Characteristic & Analysis", "Level 3: Synthesis & Construction", "Level 4: UTBK/SNBT Standard", "Level 5: Contextual HOTS"] : 
          ["Level 1: Fondasi Konsep", "Level 2: Karakteristik & Analitis", "Level 3: Konstruksi & Sintesis", "Level 4: Standar UTBK-SNBT", "Level 5: HOTS Kontekstual"];
        
        const matchSubj = isClil ? 'tka_clil' : (currentMode === 'minat' ? 'tka_minat' : 'tka_wajib');
        const matchPkg = db[matchSubj] ? db[matchSubj][m.id] : null;
        const exampleSvg = getTopicSvgDiagram(m.id, currentMode, `ex${exIdx + 1}`);
        
        let prob = "";
        let sol = "";
        let customLevelTitle = exTitles[exIdx] || `Level ${exIdx + 1}`;

        if (m.examples && m.examples[exIdx]) {
          prob = m.examples[exIdx].problem;
          sol = m.examples[exIdx].solution;
          if (m.examples[exIdx].level) {
            customLevelTitle = m.examples[exIdx].level + (m.examples[exIdx].title ? ` • ${m.examples[exIdx].title}` : '');
          }
        } else if (matchPkg && matchPkg.questions && matchPkg.questions[exIdx]) {
          prob = matchPkg.questions[exIdx].tanya;
          sol = matchPkg.questions[exIdx].bahas;
        } else if (m.example) {
          prob = m.example.problem;
          sol = m.example.solution;
        }

        if (prob) {
          prob = prob.replace(/^\[[A-Za-z0-9_.-]+\]\s*/, '');
        }

        const formattedSolHtml = formatSolutionHtml(sol, true);

        body.innerHTML = `
          <div class="w-full h-full flex flex-col justify-center my-auto min-h-0 overflow-y-auto">
            <!-- DYNAMIC SPACE-EFFICIENT WORKSPACE (ZERO CUTOFF) -->
            <div id="example-workspace-grid" class="flex flex-col items-center justify-center w-full min-h-0">
              
              <!-- PROBLEM COLUMN (EXPANDS TO FULL-WIDTH WHEN CLOSED, SPLITS 5/12 ON MD+) -->
              <div id="example-prob-col" class="w-full max-w-3xl mx-auto flex flex-col gap-3 transition-all duration-300">
                <div class="p-4 md:p-5 bg-[#0D1B2E] rounded-2xl border border-blue-800/80 shadow-2xl flex flex-col justify-between space-y-3">
                  <div class="space-y-2.5">
                    <div class="flex items-center justify-between border-b border-blue-900/80 pb-2">
                      <span class="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 font-bold text-xs rounded-lg font-mono flex items-center gap-1.5 border border-amber-500/30">
                        <i class="fa-solid fa-graduation-cap"></i> Contoh Soal ${exIdx + 1} (${customLevelTitle})
                      </span>
                      <span class="text-[10px] font-mono font-bold text-amber-400">C4-C5 HOTS</span>
                    </div>
                    <div class="text-xs md:text-sm font-semibold text-white leading-relaxed">
                      ${formatMathTables(prob)}
                    </div>
                  </div>

                  ${exampleSvg ? `
                  <div class="mt-2 p-2 bg-[#050B14] rounded-xl border border-blue-900/60 flex items-center justify-center shadow-inner shrink-0">
                    ${exampleSvg}
                  </div>
                  ` : ''}

                  <!-- ACTION BUTTON BAR (COMPACT & CENTERED) -->
                  <div class="flex items-center justify-center pt-1 shrink-0">
                    <button id="toggle-sol-btn" onclick="toggleExampleSolution()" class="px-5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs shadow-md active:scale-95 transition inline-flex items-center gap-2 cursor-pointer border border-blue-400/30">
                      <i class="fa-solid fa-eye text-amber-300 text-xs" id="toggle-sol-icon"></i>
                      <span id="toggle-sol-text">${isClil ? 'Show Solution' : 'Buka Pembahasan'}</span>
                    </button>
                  </div>
                </div>
              </div>

              <!-- RIGHT COLUMN: STEP-BY-STEP SOLUTION (SCROLLABLE & HIGH CLARITY) -->
              <div id="example-sol-col" class="hidden w-full flex-col min-h-0 transition-all duration-300">
                <div id="example-sol-box" class="h-full p-4 md:p-5 bg-[#0D1B2E] rounded-3xl border border-blue-800/80 shadow-2xl flex flex-col min-h-0 justify-between space-y-2 overflow-hidden">
                  <div class="flex items-center justify-between border-b border-blue-900/80 pb-2 mb-1 shrink-0">
                    <span class="text-xs font-bold text-amber-400 uppercase tracking-wide flex items-center gap-1.5 font-mono">
                      <i class="fa-solid fa-square-check text-amber-400"></i> ${isClil ? 'Structured Mathematical Solution:' : 'Langkah Solusi Terstruktur:'}
                    </span>
                    <button onclick="toggleExampleSolution()" class="text-[10px] font-mono text-slate-300 hover:text-white px-2.5 py-1 bg-[#060D1A] rounded-xl border border-blue-900 flex items-center gap-1 cursor-pointer hover:border-amber-400 transition">
                      <i class="fa-solid fa-chevron-up text-amber-400"></i> <span>${isClil ? 'Hide' : 'Tutup Solusi'}</span>
                    </button>
                  </div>
                  <div class="flex-1 space-y-2 overflow-y-auto custom-scroll pr-1 min-h-0 text-xs md:text-sm">
                    ${formattedSolHtml}
                  </div>
                </div>
              </div>

            </div>
          </div>
        `;
      } else if (sIdx === 9) {
        // SLIDE 10: DYNAMIC COLLABORATIVE PEDAGOGICAL ARENA
        const defaultMethod = getDefaultPedagogyForMeeting(m.id, currentMode);
        const selectedMethodKey = window.currentMeetingPedagogy || defaultMethod;
        body.innerHTML = renderSlide8PedagogyBody(m, isClil, selectedMethodKey);
      } else if (sIdx === 10) {
        // SLIDE 11: SUMMARY & ISLAMIC VALUES
        const summaryData = (m.summary_data) || {
          summary: [
            isClil ? ("Understand core mathematical principles and formulas for " + m.title + ".") : ("Memahami konsep fundamental dan penurunan rumus utama pada materi " + m.title + "."),
            isClil ? "Apply structured analytical procedures to solve progressive problems." : "Menerapkan prosedur analitis dan strategi pemecahan masalah bertingkat.",
            isClil ? "Master efficient problem-solving techniques for international standard assessments." : "Menguasai teknik penyelesaian efisien untuk asesmen CBT dan TKA Nasional."
          ],
          islamic: isClil ? ("Mathematical precision in " + m.title + " reflects divine cosmic order and balance (QS. Al-Qamar: 49).") : ("Konsep " + m.title + " mencerminkan keteraturan penciptaan alam semesta yang dirancang Allah SWT dengan penuh perhitungan dan hikmah (QS. Al-Qamar: 49).")
        };

        body.innerHTML = `
          <div class="space-y-3 w-full my-auto shrink-0">
            <div class="p-4 md:p-5 bg-[#0D1B2E] rounded-3xl border border-blue-800/80 shadow-2xl space-y-2.5">
              <div class="flex items-center justify-between border-b border-blue-900/80 pb-2">
                <h3 class="text-xs md:text-sm font-extrabold text-blue-400 flex items-center gap-2">
                  <i class="fa-solid fa-list-check text-amber-400"></i> ${isClil ? 'KEY TAKEAWAYS & LESSON SUMMARY' : 'KESIMPULAN PEMBELAJARAN HARI INI'}
                </h3>
                <span class="text-[10px] text-amber-400 font-mono font-bold">${m.id} • ${isClil ? 'Core Summary' : 'Ringkasan Materi'}</span>
              </div>
              <ul class="space-y-1.5 text-xs md:text-sm text-slate-200">
                ${(summaryData.summary || []).map(s => `
                  <li class="flex items-start gap-2.5 p-2.5 bg-[#081324] rounded-2xl border border-blue-900/60">
                    <i class="fa-solid fa-circle-check text-amber-400 mt-1 shrink-0 text-xs"></i>
                    <span class="leading-relaxed font-medium">${s}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div class="p-4 md:p-5 bg-[#0D1B2E] rounded-3xl border border-amber-500/40 shadow-2xl space-y-2">
              <div class="flex items-center justify-between border-b border-blue-900/80 pb-2">
                <h3 class="text-xs md:text-sm font-extrabold text-amber-400 flex items-center gap-2">
                  <i class="fa-solid fa-moon text-amber-400"></i> ${isClil ? 'SPIRITUAL REFLECTION & ISLAMIC VALUES' : 'REFLEKSI INTEGRASI KEISLAMAN'}
                </h3>
                <span class="text-[10px] text-amber-300/70 font-mono font-bold">${isClil ? 'Character & Divine Order' : 'Nilai Karakter & Spiritual'}</span>
              </div>
              <p class="text-xs md:text-sm text-slate-200 leading-relaxed p-3 bg-[#081324] rounded-2xl border border-blue-900/60">
                ${summaryData.islamic}
              </p>
            </div>
          </div>
        `;
      } else if (sIdx === 11) {
        // SLIDE 12: CLOSING & EVALUATION
        body.innerHTML = `
          <div class="h-full flex flex-col items-center justify-center text-center space-y-4 p-5 md:p-8 bg-[#0D1B2E] rounded-3xl border border-blue-800/80 shadow-2xl">
            <div class="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-2xl shadow-lg">
              <i class="fa-solid fa-flag-checkered"></i>
            </div>
            <div class="space-y-2">
              <h3 class="text-lg md:text-2xl font-black text-white">${isClil ? 'LESSON COMPLETE! ALHAMDULILLAH' : 'PENUTUP, EVALUASI & TUGAS MANDIRI'}</h3>
              <p class="text-xs md:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                ${isClil ? ('Alhamdulillah, the session on <strong>' + m.title + '</strong> has concluded. Test your mastery through the 10-question CBT assessment!') : ('Alhamdulillah KBM <strong>' + m.title + '</strong> telah selesai. Uji pemahaman mandiri Anda melalui 10 butir soal asesmen standar TKA Nasional & UTBK CBT!')}
              </p>
            </div>
            
            <div class="flex flex-wrap items-center justify-center gap-3 mt-3">
              <button onclick="openTkaForCurrentMeeting('${m.id}')" class="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl text-xs md:text-sm shadow-xl shadow-blue-600/30 active:scale-95 transition flex items-center gap-2 cursor-pointer border border-blue-400/40">
                <i class="fa-solid fa-crosshairs text-amber-300 text-base"></i>
                <span>${isClil ? ('LAUNCH CBT DRILLING (' + m.id + ')') : ('BUKA DRILLING TKA (' + m.id + ')')}</span>
              </button>
              <button onclick="switchSubject('home')" class="px-5 py-3.5 bg-[#081324] hover:bg-[#0D1E36] border border-blue-900 text-amber-300 hover:text-white font-bold rounded-2xl text-xs shadow transition flex items-center gap-2 cursor-pointer">
                <i class="fa-solid fa-house text-xs"></i>
                <span>${isClil ? 'Back to Dashboard' : 'Kembali ke Beranda'}</span>
              </button>
            </div>
          </div>
        `;
      }

      renderMath(body);
      tandaiRumusLebar(body);
      catatSlide(currentMode, m.id, sIdx);
      presRemote();
      presPenHapus();   // coretan slide sebelumnya tidak ikut terbawa

      // Panel lab dipasang setelah markup slide berada di DOM: kanvas
      // memerlukan ukuran nyata sebelum bisa digambar.
      if (sIdx === 3) labPasangInline('lab-inline-host', window._labSlide4 || labUntukBab(m.bab, currentMode));
      else labBersihkan();
    }

    // RENDER TKA QUESTION (WITH 3-MINUTE QUESTION TIMER & INTERACTIVE CBT FEEDBACK)
    // =========================================================================
    // CBT REVIEW MODE & SCORECARD ACTIONS
    // =========================================================================
    window._tkaReviewMode = false;

    function startTkaReviewMode() {
      window._tkaReviewMode = true;
      closeTkaScorecardModal();
      tkaQIdx = 0;
      renderAppView();
    }

    function openTkaQuestionInReview(idx) {
      window._tkaReviewMode = true;
      closeTkaScorecardModal();
      tkaQIdx = idx;
      renderAppView();
    }


    // =========================================================================
    // CBT ATOMIC RESET SUITE
    // =========================================================================
    function confirmResetCbtPackage() {
      if (confirm("Apakah Anda yakin ingin mereset paket soal ini? Seluruh jawaban dan draf yang tersimpan akan dikosongkan kembali dari Soal 1.")) {
        retakeCurrentTkaPkg();
      }
    }

    function retakeCurrentTkaPkg() {
      window._tkaReviewMode = false;
      const curSubj = tkaSubj;
      const curPkg = tkaPkgId;
      
      // 1. Bersihkan seluruh skor sesi dari memori objek userSessionScores
      if (typeof userSessionScores === 'object') {
        Object.keys(userSessionScores).forEach(k => {
          if (k.includes(curPkg) || k.startsWith(`${curSubj}_`)) {
            delete userSessionScores[k];
          }
        });
      }

      // 2. Bersihkan draf jawaban di LocalStorage perangkat secara menyeluruh
      try {
        for (let i = localStorage.length - 1; i >= 0; i--) {
          const k = localStorage.key(i);
          if (k && (k.includes(curPkg) || k.startsWith('cbt_draft_'))) {
            localStorage.removeItem(k);
          }
        }
        localStorage.setItem(STORAGE_SCORES_KEY, JSON.stringify(userSessionScores));
      } catch (e) {
        console.warn('Storage clear warning:', e);
      }

      // 3. Reset state aktif jawaban ke kosong mutlak
      userMultiAnswers = [];
      userTfAnswers = {};
      tkaQIdx = 0;

      // 4. Bersihkan data live dari database Supabase jika siswa login
      if (typeof supabaseClient !== 'undefined' && supabaseClient) {
        try {
          const sess = typeof getSession === 'function' ? getSession() : null;
          const nis = (sess && sess.data && sess.data.nis) ? sess.data.nis : null;
          if (nis && nis !== 'guest') {
            supabaseClient.from('cbt_live_answers').delete().match({
              nis: String(nis),
              mapel: String(curSubj),
              kode_pertemuan: String(curPkg)
            }).then(() => {});
          }
        } catch (e) {}
      }

      // 5. Simpan state bersih & tutup semua modal
      saveAppState();
      if (typeof closeTkaScorecardModal === 'function') closeTkaScorecardModal();
      if (typeof closeCbtSubmitModal === 'function') closeCbtSubmitModal();

      // 6. Tampilkan notifikasi visual toast
      const toast = document.createElement('div');
      toast.className = 'fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-2xl bg-[#0D1B2E] border border-blue-500/80 text-white text-xs font-bold shadow-2xl flex items-center gap-2 animate-bounce';
      toast.innerHTML = '<i class="fa-solid fa-rotate-left text-amber-400"></i> <span>Paket berhasil direset! Semua jawaban kembali ke awal.</span>';
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 3000);

      // 7. Render ulang panggung CBT dari Soal 1
      renderAppView();
    }

    function showTkaScorecardModal() {
      if (typeof pulihkanDraftJawaban === 'function') {
        pulihkanDraftJawaban(tkaSubj, tkaPkgId);
      }
      // Catat & Submit Nilai Resmi ke Supabase (meskipun baru mengerjakan beberapa soal)
      if (typeof catatSesiCbt === 'function') {
        catatSesiCbt(tkaSubj, tkaPkgId, true);
      }
      const sourceDb = tkaSrc();
      const pkg = sourceDb[tkaPkgId];
      if (!pkg || !pkg.questions) return;

      const totalQ = pkg.questions.length;
      let correctCount = 0;
      let answeredCount = 0;

      for (let i = 0; i < totalQ; i++) {
        const key = `${tkaSubj}_${tkaPkgId}_${i}`;
        if (userSessionScores[key] !== undefined) {
          answeredCount++;
          if (userSessionScores[key] === true) correctCount++;
        }
      }

      const score = Math.round((correctCount / totalQ) * 100);
      const wrongCount = answeredCount - correctCount;

      document.getElementById('scorecard-pkg-title').innerText = `${tkaPkgId} • ${pkg.title}`;
      document.getElementById('scorecard-total-score').innerText = score;
      document.getElementById('scorecard-correct-count').innerText = `${correctCount} / ${totalQ}`;
      document.getElementById('scorecard-wrong-count').innerText = `${wrongCount} / ${totalQ}`;

      const badgeEl = document.getElementById('scorecard-badge');
      const predEl = document.getElementById('scorecard-predicate');

      if (score >= 85) {
        badgeEl.className = "w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 p-1.5 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-emerald-300/60";
        predEl.innerText = "Mantap. Ini bukan hoki — kamu memang sudah paham.";
        predEl.className = "text-xs md:text-sm font-extrabold text-emerald-300 text-center px-4 py-1.5 rounded-xl bg-slate-950 border border-blue-500/40";
        confettiCelebration();
      } else if (score >= 70) {
        badgeEl.className = "w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400 p-1.5 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-blue-300/60";
        predEl.innerText = "Aman. Tinggal rapikan yang beberapa meleset tadi.";
        predEl.className = "text-xs md:text-sm font-extrabold text-blue-300 text-center px-4 py-1.5 rounded-xl bg-slate-950 border border-blue-500/40";
      } else if (score >= 50) {
        badgeEl.className = "w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-400 p-1.5 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-amber-300/60";
        predEl.innerText = "Setengah jalan. Justru yang salah tadi bagian paling berguna buat dibedah.";
        predEl.className = "text-xs md:text-sm font-extrabold text-amber-300 text-center px-4 py-1.5 rounded-xl bg-slate-950 border border-amber-500/40";
      } else {
        badgeEl.className = "w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-rose-600 to-red-400 p-1.5 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-rose-300/60";
        predEl.innerText = "Belum. Kata kuncinya belum, bukan tidak bisa. Balik ke babnya, lalu ke sini lagi.";
        predEl.className = "text-xs md:text-sm font-extrabold text-rose-300 text-center px-4 py-1.5 rounded-xl bg-slate-950 border border-rose-500/40";
      }

      const matrixEl = document.getElementById('scorecard-q-matrix');
      matrixEl.innerHTML = '';
      for (let i = 0; i < totalQ; i++) {
        const key = `${tkaSubj}_${tkaPkgId}_${i}`;
        const st = userSessionScores[key];
        let qBg = "bg-slate-800 border-slate-700 text-slate-400";
        let icon = `<i class="fa-solid fa-minus text-[10px]"></i>`;
        
        if (st === true) {
          qBg = "bg-emerald-950 border-emerald-400 text-emerald-300";
          icon = `<i class="fa-solid fa-check text-[10px]"></i>`;
        } else if (st === false) {
          qBg = "bg-rose-950 border-rose-400 text-rose-300";
          icon = `<i class="fa-solid fa-xmark text-[10px]"></i>`;
        }

        const item = document.createElement('button');
        item.className = `p-2 rounded-xl border text-center text-xs font-mono font-bold flex flex-col items-center justify-center gap-0.5 transition active:scale-95 ${qBg} hover:brightness-125`;
        item.innerHTML = `<span>Q${i + 1}</span> ${icon}`;
        item.onclick = () => {
          closeTkaScorecardModal();
          tkaQIdx = i;
          renderAppView();
        };
        matrixEl.appendChild(item);
      }

      document.getElementById('tka-scorecard-modal').classList.remove('hidden');
    }

    function closeTkaScorecardModal() {
      document.getElementById('tka-scorecard-modal').classList.add('hidden');
    }

    function retakeCurrentTkaPkg() {
      closeTkaScorecardModal();
      const sourceDb = tkaSrc();
      const pkg = sourceDb[tkaPkgId];
      if (pkg && pkg.questions) {
        for (let i = 0; i < pkg.questions.length; i++) {
          delete userSessionScores[`${tkaSubj}_${tkaPkgId}_${i}`];
        }
      }
      tkaQIdx = 0;
      renderAppView();
    }

    // CANVAS PEN TOOL
    function togglePenMode() {
      penMode = !penMode;
      const canvas = document.getElementById('drawing-canvas');
      const btn = document.getElementById('btn-pen');
      if (penMode) {
        canvas.classList.remove('hidden');
        btn.className = "p-1.5 md:p-2 bg-amber-500 text-slate-950 rounded-xl text-xs font-black transition shadow";
        setupCanvas();
      } else {
        canvas.classList.add('hidden');
        btn.className = "p-1.5 md:p-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 rounded-xl text-xs font-bold transition";
      }
    }

    function setupCanvas() {
      const canvas = document.getElementById('drawing-canvas');
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
      const ctx = canvas.getContext('2d');
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#F59E0B';

      canvas.onmousedown = (e) => {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
      };
      canvas.onmousemove = (e) => {
        if (isDrawing) {
          ctx.lineTo(e.offsetX, e.offsetY);
          ctx.stroke();
        }
      };
      canvas.onmouseup = () => isDrawing = false;
      canvas.ondblclick = () => ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
      }
    }

    function confettiCelebration() {
    }

    // BOOTSTRAP INITIALIZATION
    initPortal();
  