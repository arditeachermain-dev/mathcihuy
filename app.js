
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

    function bersihkanDraftJawaban(subj, pkgId) {
      try {
        const k = getCbtDraftKey(subj, pkgId);
        localStorage.removeItem(k);
      } catch (e) {}
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
      if (!el) return;
      const tampil = (cinemaAktif() || !!document.fullscreenElement) && presSlideMode();
      el.classList.toggle('hidden', !tampil);
      const c = document.getElementById('pres-count');
      if (c) c.textContent = (currentSlideIdx + 1) + ' / 11';
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
      if (!namaBab || !judul) return judul;
      if (judul.toLowerCase().indexOf(namaBab.toLowerCase()) !== 0) return judul;
      const ekor = judul.slice(namaBab.length);
      let i = 0;
      while (i < ekor.length && ' 0123456789'.indexOf(ekor[i]) !== -1) i++;
      if (i >= ekor.length || ':-–'.indexOf(ekor[i]) === -1) return judul;   // bukan awalan berulang
      i++;
      while (i < ekor.length && ekor[i] === ' ') i++;
      const sisa = ekor.slice(i);
      return sisa.length >= 8 ? sisa : judul;
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
      // Kata kunci berubah -> daftar baru; posisi gulir lama membuat judul BAB
      // pertama hasil pencarian tersembunyi di atas layar.
      const resetGulir = pickerLastQuery !== null && pickerLastQuery !== (filter || '');
      pickerLastQuery = filter || '';
      const sub = document.getElementById('picker-sub');
      const streams = document.getElementById('picker-streams');
      const babBar = document.getElementById('picker-bab');

      const nama = { wajib: 'Matematika Wajib', minat: 'Matematika Peminatan', clil: 'CLIL Stream' };
      const aliran = pickerAliran();
      const items = pickerItems();
      const groups = pickerGroups(items);
      sub.textContent = (nama[aliran] || aliran) + ' \u00b7 ' + items.length +
        (currentMode === 'tka' ? ' paket soal' : ' pertemuan') + ' \u00b7 ' + groups.length +
        (aliran === 'clil' ? ' lab' : ' bab');

      // ---- pindah aliran (hanya mode CBT) ----
      streams.innerHTML = '';
      streams.classList.toggle('hidden', currentMode !== 'tka');
      if (currentMode === 'tka') {
        [['wajib', 'Wajib', db.tka_wajib], ['minat', 'Peminatan', db.tka_minat], ['clil', 'CLIL', db.tka_clil]]
          .concat(db.tka_custom ? [['custom', 'Racikan', db.tka_custom]] : [])
          .forEach(([k, lbl, src]) => {
            streams.appendChild(pickerChip(lbl, tkaSubj === k, null, null,
              () => { toggleTkaSubj(k); openMeetingPicker(); }));
          });
      }

      // ---- saringan cepat per BAB ----
      babBar.innerHTML = '';
      if (groups.length > 1) {
        babBar.appendChild(pickerChip('Semua BAB', pickerBabFilter === 'all', null, null,
          () => { pickerBabFilter = 'all'; renderMeetingPicker(document.getElementById('picker-search').value); }));
        groups.forEach(g => {
          babBar.appendChild(pickerChip(g.label + ' \u00b7 ' + g.items.length, pickerBabFilter === g.key, g.warna, g.rgb,
            () => {
              pickerBabFilter = (pickerBabFilter === g.key) ? 'all' : g.key;
              if (pickerCollapsed) pickerCollapsed.delete(g.key);
              renderMeetingPicker(document.getElementById('picker-search').value);
            }));
        });
      }

      // ---- saring menurut pencarian ----
      const q = (filter || '').toLowerCase().trim();
      const cocok = it => !q || it.id.toLowerCase().includes(q) || it.label.toLowerCase().includes(q) ||
        it.title.toLowerCase().includes(q) || it.bab.toLowerCase().includes(q) || (it.desc || '').toLowerCase().includes(q);

      const tampil = groups
        .filter(g => pickerBabFilter === 'all' || g.key === pickerBabFilter)
        .map(g => Object.assign({}, g, { hasil: g.items.filter(cocok) }))
        .filter(g => g.hasil.length);

      // Saat pertama dibuka, hanya BAB yang sedang berjalan yang terbuka —
      // sisanya dilipat supaya daftarnya tidak berdesakan.
      if (pickerCollapsed === null) {
        pickerCollapsed = new Set();
        const aktifKey = (items.find(it => it.aktif) || {}).bab;
        groups.forEach(g => { if (g.key !== aktifKey) pickerCollapsed.add(g.key); });
      }

      body.innerHTML = '';
      if (!tampil.length) {
        body.innerHTML = '<div class="py-14 text-center"><i class="fa-regular fa-face-frown text-3xl text-slate-700"></i>' +
          '<p class="mt-3 text-sm text-slate-400">Tidak ketemu. Coba kata yang lebih pendek — misalnya “integral” saja.</p></div>';
        return;
      }

      tampil.forEach(g => {
        const terbuka = q ? true : !pickerCollapsed.has(g.key);
        const sec = document.createElement('section');
        sec.className = 'mp-sec' + (terbuka ? ' mp-open' : '');
        sec.style.setProperty('--ch', g.warna);
        sec.style.setProperty('--chs', g.rgb);

        const head = document.createElement('button');
        head.type = 'button';
        head.className = 'mp-bab w-full text-left px-3 py-2.5 md:px-4 rounded-xl flex items-center gap-3';
        head.innerHTML =
          '<span class="mp-bab-no shrink-0">' + g.label + '</span>' +
          '<span class="flex-1 min-w-0">' +
            '<span class="block text-[13px] md:text-sm font-black text-white leading-snug">' + g.judul + '</span>' +
            '<span class="block text-[11px] text-slate-400 mt-0.5 font-mono">' +
              g.rentang + ' \u00b7 ' + g.items.length + ' ' +
              (g.satuan || (currentMode === 'tka' ? 'paket' : 'pertemuan')) +
              (g.selesai ? ' \u00b7 ' + g.selesai + ' selesai' : '') +
            '</span>' +
          '</span>' +
          '<i class="fa-solid fa-chevron-down mp-chev shrink-0"></i>';
        head.onclick = () => {
          if (pickerCollapsed.has(g.key)) pickerCollapsed.delete(g.key); else pickerCollapsed.add(g.key);
          renderMeetingPicker(document.getElementById('picker-search').value);
        };
        sec.appendChild(head);

        if (terbuka) {
          const list = document.createElement('div');
          list.className = 'mp-list mt-1 space-y-1';
          g.hasil.forEach(it => {
            const asesmen = /asesmen|sumatif|simulasi|review/i.test(it.title);
            const c = document.createElement('button');
            c.type = 'button';
            c.className = 'w-full px-2.5 py-2 rounded-xl text-left flex items-center justify-between gap-2.5 transition cursor-pointer ' + 
              (it.aktif ? 'bg-blue-600/30 border border-blue-500 text-white font-bold ring-1 ring-blue-400/40 shadow-sm' : 
               (asesmen ? 'bg-amber-950/20 hover:bg-amber-900/30 border border-amber-500/30 text-amber-200' : 'bg-slate-900/70 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white'));
            
            c.innerHTML = `
              <div class="flex items-center gap-2.5 min-w-0 flex-1">
                <span class="px-2 py-0.5 rounded-lg text-[11px] font-mono font-bold shrink-0 ${it.aktif ? 'bg-blue-600 text-white' : (asesmen ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-slate-950 text-slate-300 border border-slate-800')}">
                  ${it.label}
                </span>
                <span class="text-xs truncate font-semibold leading-tight flex-1">
                  ${pickerTrimTitle(it.title, g.judul)}
                </span>
              </div>
              <div class="flex items-center gap-1.5 shrink-0 font-mono text-[10px]">
                ${asesmen ? '<span class="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[9px] font-bold">UH</span>' : ''}
                ${it.aktif ? '<span class="px-1.5 py-0.2 rounded bg-blue-500/30 text-blue-200 font-bold flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span> Buka</span>' : 
                 (it.selesai ? '<i class="fa-solid fa-circle-check text-amber-400 text-xs"></i>' : '')}
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

      // Sub-topik diambil dari tujuan pembelajaran, yang memuat rumus TeX.
      // Tanpa langkah ini guru melihat "$s\sqrt{2}$" mentah di kartu.
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
      let html = '<div class="space-y-1.5 my-1.5">';
      let stepNum = 1;

      lines.forEach((line) => {
        let clean = line.replace(/^(?:Langkah|Step)\s*\d+\s*:\s*/i, '').trim();
        clean = formatMathTables(clean);
        const isConclusion = /(?:Kesimpulan|Conclusion|Kunci|Jawaban|Answer\s*Key)\s*:?/i.test(clean);
        const isBullet = /^[-•]|^\(\d+\)/.test(clean);

        if (isConclusion) {
          if (isWorkedExample) {
            // Remove "Answer Key X." or "Kunci Jawaban X." from essay worked examples
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
          } else {
            // CBT mode: Ensure printed key matches window.tkaActiveCorrectKey
            if (window.tkaActiveCorrectKey) {
              // Retain authentic formatted conclusion from solution text
            }
          }

          html += `
            <div class="p-3 bg-emerald-950/60 border border-blue-500/50 rounded-xl flex items-start gap-2.5 shadow-sm">
              <span class="w-6 h-6 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                <i class="fa-solid fa-check"></i>
              </span>
              <div class="text-xs md:text-sm text-emerald-200 font-semibold leading-relaxed">
                ${clean}
              </div>
            </div>
          `;
        } else if (isBullet) {
          html += `
            <div class="p-2.5 bg-slate-800/70 border border-slate-700/80 rounded-xl flex items-start gap-2.5">
              <span class="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-1.5"></span>
              <div class="text-xs md:text-sm text-slate-200 font-medium leading-relaxed flex-1">
                ${clean}
              </div>
            </div>
          `;
        } else {
          const isClil = currentMode === 'clil' || tkaSubj === 'clil';
          html += `
            <div class="p-2.5 bg-slate-800/90 border border-slate-700 rounded-xl flex items-start gap-2.5 shadow">
              <span class="px-2 py-0.5 rounded-md bg-blue-600/30 border border-blue-400/40 text-blue-300 font-mono text-[10px] md:text-xs font-bold shrink-0 mt-0.5">
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
        ? ["Cover", "Goals", "Hook", "Toolkit", "Level 1", "Level 2", "Level 3", "Level 4", "Level 5", "Collab", "Drilling", "Summary", "Closing"]
        : ["Cover", "Tujuan", "Hook", "Toolkit", "Level 1", "Level 2", "Level 3", "Level 4", "Level 5", "Kolaborasi", "Drilling", "Rangkuman", "Penutup"];
      const pillIcons = [
        "fa-solid fa-bookmark", "fa-solid fa-bullseye", "fa-solid fa-lightbulb", "fa-solid fa-toolbox",
        "fa-solid fa-cube", "fa-solid fa-chart-line", "fa-solid fa-brain", "fa-solid fa-graduation-cap", "fa-solid fa-fire",
        "fa-solid fa-users", "fa-solid fa-pen-to-square", "fa-solid fa-flag-checkered", "fa-solid fa-bell"
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
            <div class="h-full bg-gradient-to-r from-blue-500 to-amber-500 transition-all duration-300" style="width: ${(sIdx + 1) * 7.69}%"></div>
          </div>
          <span class="text-[10px] md:text-xs font-mono text-slate-300 font-extrabold">${sIdx + 1} / 13</span>
        </div>
      `;

      const pillsContainer = document.getElementById('slide-pills-container');
      pillsContainer.innerHTML = '';
      for (let i = 0; i < 13; i++) {
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
          <div class="w-full h-full flex flex-col gap-3">
            <!-- MAIN 2-COLUMN SIDE-BY-SIDE WORKSPACE -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 min-h-0 items-stretch">
              
              <!-- LEFT COLUMN: PROBLEM STATEMENT & DIAGRAM (5/12) -->
              <div class="lg:col-span-5 flex flex-col gap-3 min-h-0">
                <!-- PROBLEM CARD -->
                <div class="p-4 md:p-5 bg-[#0D1A2E] rounded-2xl border border-blue-500/40 shadow-xl flex-1 flex flex-col justify-between overflow-y-auto">
                  <div class="space-y-3">
                    <div class="flex items-center justify-between border-b border-slate-800/80 pb-2">
                      <span class="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 font-bold text-xs rounded-lg font-mono flex items-center gap-1.5">
                        <i class="fa-solid fa-graduation-cap"></i> Contoh Soal ${exIdx + 1} (${customLevelTitle})
                      </span>
                      <span class="text-[10px] font-mono font-bold text-amber-400/80">C4-C5 HOTS</span>
                    </div>
                    <div class="text-xs md:text-sm font-semibold text-white leading-relaxed">
                      ${formatMathTables(prob)}
                    </div>
                  </div>

                  ${exampleSvg ? `
                  <div class="mt-3 p-2 bg-[#050D1A] rounded-xl border border-[#1a2f4a] flex items-center justify-center shadow-inner shrink-0">
                    ${exampleSvg}
                  </div>
                  ` : ''}
                </div>

                <!-- ACTION BUTTON BAR -->
                <button id="toggle-sol-btn" onclick="toggleExampleSolution()" class="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-black rounded-xl text-xs md:text-sm shadow-lg active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer shrink-0">
                  <i class="fa-solid fa-eye" id="toggle-sol-icon"></i>
                  <span id="toggle-sol-text">${isClil ? 'Show Step-by-Step Solution' : 'Buka Cara Penyelesaian'}</span>
                </button>
              </div>

              <!-- RIGHT COLUMN: STEP-BY-STEP SOLUTION / WORKSPACE (7/12) -->
              <div class="lg:col-span-7 flex flex-col min-h-0">
                <!-- ACTIVE SOLUTION BOX (HIDDEN BY DEFAULT ON INITIAL LOAD) -->
                <div id="example-sol-box" class="hidden h-full p-4 md:p-5 bg-[#0D1A2E] rounded-2xl border border-blue-500/40 shadow-xl flex flex-col overflow-y-auto">
                  <div class="flex items-center justify-between border-b border-blue-500/20 pb-2 mb-2 shrink-0">
                    <span class="text-xs font-bold text-amber-400 uppercase tracking-wide flex items-center gap-1.5">
                      <i class="fa-solid fa-square-check"></i> ${isClil ? 'Structured Mathematical Solution:' : 'Langkah Solusi Matematis Terstruktur:'}
                    </span>
                    <button onclick="toggleExampleSolution()" class="text-[10px] font-mono text-slate-400 hover:text-white px-2 py-0.5 bg-slate-900 rounded border border-slate-700">
                      <i class="fa-solid fa-chevron-up mr-1"></i> ${isClil ? 'Hide' : 'Tutup'}
                    </button>
                  </div>
                  <div class="flex-1 overflow-y-auto pr-1">
                    ${formattedSolHtml}
                  </div>
                </div>

                <!-- INTERACTIVE PLACEHOLDER WHEN SOLUTION IS HIDDEN -->
                <div id="example-sol-placeholder" class="flex h-full p-6 bg-[#0D1A2E]/50 rounded-2xl border border-dashed border-slate-700/60 flex-col items-center justify-center text-center space-y-3 text-slate-400">
                  <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-900/50 to-slate-800 border border-blue-500/30 flex items-center justify-center text-amber-400 text-xl shadow-inner">
                    <i class="fa-solid fa-lightbulb"></i>
                  </div>
                  <div class="space-y-1 max-w-sm">
                    <p class="text-xs md:text-sm font-bold text-slate-200">${isClil ? 'Interactive Solution Workspace' : 'Ruang Solusi Terbimbing'}</p>
                    <p class="text-[11px] text-slate-400 leading-relaxed">${isClil ? 'Solve independently on your vertical whiteboard (VNPS) before revealing the structured steps.' : 'Diskusikan dan selesaikan soal di papan tulis vertikal (VNPS) bersama kelompok sebelum membuka solusi.'}</p>
                  </div>
                  <button onclick="toggleExampleSolution()" class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-mono font-bold rounded-xl border border-slate-600 transition flex items-center gap-1.5 cursor-pointer shadow">
                    <i class="fa-solid fa-eye"></i> ${isClil ? 'Open Solution' : 'Buka Solusi Sekarang'}
                  </button>
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
        // SLIDE 11: 10 DRILLING PROBLEMS PREVIEW
        const matchSubj = isClil ? 'tka_clil' : (currentMode === 'minat' ? 'tka_minat' : 'tka_wajib');
        const matchPkg = db[matchSubj] ? db[matchSubj][m.id] : null;
        const allQuestions = (matchPkg && matchPkg.questions) ? matchPkg.questions : [];
        const drillStart = Math.min(3, allQuestions.length); 
        const qList = allQuestions.slice(drillStart);
        const totalDrillQ = qList.length;

        body.innerHTML = `
          <div class="space-y-3 h-full flex flex-col justify-between">
            <div class="flex items-center justify-between border-b border-[#1a2f4a] pb-2">
              <div>
                <h3 class="text-xs md:text-sm font-extrabold text-amber-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-crosshairs text-amber-500"></i> ${isClil ? ('LATIHAN MANDIRI DRILLING (' + m.id + ')') : ('LATIHAN MANDIRI & UJI KOMPETENSI (' + m.id + ')')}
                </h3>
                <p class="text-[10px] text-slate-400">${isClil ? 'Practice Problems (NOT repeated from worked examples)' : 'Soal Latihan Mandiri (berbeda dari contoh soal di slide sebelumnya)'}</p>
              </div>
              <button onclick="openTkaForCurrentMeeting('${m.id}')" class="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs shadow-lg active:scale-95 transition flex items-center gap-1.5">
                <i class="fa-solid fa-laptop-code"></i> <span>${isClil ? 'Full CBT Arena' : 'Arena CBT Penuh'}</span>
              </button>
            </div>
            
            ${totalDrillQ === 0 ? `<div class="flex-1 flex items-center justify-center text-slate-400 text-xs">Soal latihan sedang disiapkan. Gunakan Arena CBT untuk berlatih.</div>` : `
            <div class="flex-1 overflow-y-auto space-y-2 pr-1">
              ${qList.map((qItem, qi) => {
                const actualQIdx = drillStart + qi; 
                return `
                <div class="p-3 bg-[#0D1A2E] rounded-2xl border border-[#1a2f4a] hover:border-amber-500/40 shadow flex flex-col md:flex-row md:items-start justify-between gap-2.5 transition">
                  <div class="space-y-1 flex-1">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 font-bold text-[10px] rounded-md font-mono">Latihan ${qi + 1}</span>
                      <span class="text-[10px] text-slate-400 font-mono">${qItem.tipe || (isClil ? 'Multiple Choice' : 'Pilihan Ganda')}</span>
                      ${qItem.level ? `<span class="text-[10px] text-blue-400 font-mono">${qItem.level}</span>` : ''}
                    </div>
                    <div class="text-xs text-slate-200 leading-relaxed font-semibold">${formatQuestionPromptHtml(qItem.tanya, qItem.tipe)}</div>
                  </div>
                  <button onclick="openTkaForCurrentMeeting('${m.id}', ${actualQIdx})" class="px-3 py-1.5 bg-blue-600/80 hover:bg-blue-500 text-white rounded-xl text-[11px] font-bold shrink-0 self-end md:self-center shadow transition flex items-center gap-1">
                    <span>${isClil ? '⚡ Solve' : '⚡ Kerjakan'}</span>
                  </button>
                </div>
              `;
              }).join('')}
            </div>
            `}
          </div>
        `;
      } else if (sIdx === 11) {
        // SLIDE 12: SUMMARY & ISLAMIC VALUES
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
            <div class="p-4 md:p-5 bg-slate-900 rounded-2xl border border-blue-500/40 shadow-xl space-y-2.5">
              <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <h3 class="text-xs md:text-sm font-extrabold text-blue-400 flex items-center gap-2">
                  <i class="fa-solid fa-list-check text-blue-400"></i> ${isClil ? 'KEY TAKEAWAYS & LESSON SUMMARY' : 'KESIMPULAN PEMBELAJARAN HARI INI'}
                </h3>
                <span class="text-[10px] text-slate-400 font-mono">${m.id} • ${isClil ? 'Core Summary' : 'Ringkasan Materi'}</span>
              </div>
              <ul class="space-y-1.5 text-xs md:text-sm text-slate-200">
                ${(summaryData.summary || []).map(s => `
                  <li class="flex items-start gap-2.5 p-2 bg-slate-800/80 rounded-xl border border-slate-700/60">
                    <i class="fa-solid fa-circle-check text-amber-400 mt-1 shrink-0 text-xs"></i>
                    <span class="leading-relaxed font-medium">${s}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div class="p-4 md:p-5 bg-slate-900 rounded-2xl border border-amber-500/40 shadow-xl space-y-2">
              <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <h3 class="text-xs md:text-sm font-extrabold text-amber-400 flex items-center gap-2">
                  <i class="fa-solid fa-moon text-amber-400"></i> ${isClil ? 'SPIRITUAL REFLECTION & ISLAMIC VALUES' : 'REFLEKSI INTEGRASI KEISLAMAN'}
                </h3>
                <span class="text-[10px] text-amber-300/70 font-mono">${isClil ? 'Character & Divine Order' : 'Nilai Karakter & Spiritual'}</span>
              </div>
              <p class="text-xs md:text-sm text-slate-200 leading-relaxed p-2.5 bg-slate-800/60 rounded-xl border border-slate-700/50">
                ${summaryData.islamic}
              </p>
            </div>
          </div>
        `;
      } else if (sIdx === 12) {
        // SLIDE 13: CLOSING & EVALUATION
        body.innerHTML = `
          <div class="h-full flex flex-col items-center justify-center text-center space-y-4 p-4 md:p-8 bg-gradient-to-b from-slate-900 to-[#0B2545] rounded-2xl border border-slate-800">
            <div class="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 text-2xl shadow-lg">
              <i class="fa-solid fa-flag-checkered"></i>
            </div>
            <div>
              <h3 class="text-lg md:text-2xl font-black text-white">${isClil ? 'LESSON COMPLETE! ALHAMDULILLAH' : 'PENUTUP, EVALUASI & TUGAS MANDIRI'}</h3>
              <p class="text-xs md:text-sm text-slate-300 max-w-lg mx-auto mt-1 leading-relaxed">
                ${isClil ? ('Alhamdulillah, the session on <strong>' + m.title + '</strong> has concluded. Test your mastery through the 10-question CBT assessment!') : ('Alhamdulillah KBM <strong>' + m.title + '</strong> telah selesai. Uji pemahaman mandiri Anda melalui 10 soal asesmen standar TKA Nasional & UTBK CBT!')}
              </p>
            </div>
            
            <div class="flex flex-wrap items-center justify-center gap-3 mt-2">
              <button onclick="openTkaForCurrentMeeting('${m.id}')" class="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-slate-950 font-black rounded-2xl text-xs md:text-sm shadow-2xl active:scale-95 transition flex items-center gap-2">
                <i class="fa-solid fa-crosshairs text-base"></i> ${isClil ? ('LAUNCH CBT DRILLING (' + m.id + ')') : ('BUKA DRILLING TKA (' + m.id + ')')}
              </button>
              <button onclick="confettiCelebration()" class="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 font-bold rounded-2xl text-xs shadow active:scale-95 transition flex items-center gap-1.5">
                ${isClil ? '🎉 CELEBRATE COMPLETION' : '🎉 RAYAKAN SELESAI'}
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

    function retakeCurrentTkaPkg() {
      window._tkaReviewMode = false;
      const sourceDb = tkaSrc();
      const pkg = sourceDb[tkaPkgId];
      if (pkg && pkg.questions) {
        pkg.questions.forEach((_, idx) => {
          delete userSessionScores[`${tkaSubj}_${tkaPkgId}_${idx}`];
        });
      }
      try {
        localStorage.removeItem(getCbtDraftKey(tkaSubj, tkaPkgId));
      } catch (e) {}
      closeTkaScorecardModal();
      tkaQIdx = 0;
      renderAppView();
    }

    function showTkaScorecardModal() {
      if (typeof pulihkanDraftJawaban === 'function') {
        pulihkanDraftJawaban(tkaSubj, tkaPkgId);
      }
      // Catat & Submit Nilai Resmi ke Supabase
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

      const pkgTitleEl = document.getElementById('scorecard-pkg-title');
      if (pkgTitleEl) pkgTitleEl.innerText = `${tkaPkgId} • ${pkg.title}`;
      const totScoreEl = document.getElementById('scorecard-total-score');
      if (totScoreEl) totScoreEl.innerText = score;
      const corCntEl = document.getElementById('scorecard-correct-count');
      if (corCntEl) corCntEl.innerText = `${correctCount} / ${totalQ}`;
      const wrgCntEl = document.getElementById('scorecard-wrong-count');
      if (wrgCntEl) wrgCntEl.innerText = `${wrongCount} / ${totalQ}`;

      const badgeEl = document.getElementById('scorecard-badge');
      const predEl = document.getElementById('scorecard-predicate');

      if (score >= 85) {
        if (badgeEl) badgeEl.className = "w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 p-1.5 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-emerald-300/60";
        if (predEl) {
          predEl.innerText = "🏆 Mantap! Kompetensi Tercapai Maksimal!";
          predEl.className = "text-xs md:text-sm font-extrabold text-emerald-300 text-center px-4 py-1.5 rounded-xl bg-slate-950 border border-blue-500/40";
        }
        confettiCelebration();
      } else if (score >= 70) {
        if (badgeEl) badgeEl.className = "w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400 p-1.5 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-blue-300/60";
        if (predEl) {
          predEl.innerText = "✨ Sangat Baik! Kuasai beberapa detail lagi.";
          predEl.className = "text-xs md:text-sm font-extrabold text-blue-300 text-center px-4 py-1.5 rounded-xl bg-slate-950 border border-blue-500/40";
        }
      } else if (score >= 50) {
        if (badgeEl) badgeEl.className = "w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-400 p-1.5 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-amber-300/60";
        if (predEl) {
          predEl.innerText = "💡 Cukup Baik! Bedah bagian pembahasan di bawah.";
          predEl.className = "text-xs md:text-sm font-extrabold text-amber-300 text-center px-4 py-1.5 rounded-xl bg-slate-950 border border-amber-500/40";
        }
      } else {
        if (badgeEl) badgeEl.className = "w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-rose-600 to-red-400 p-1.5 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-rose-300/60";
        if (predEl) {
          predEl.innerText = "📚 Perlu Penguatan! Review pembahasan lengkap.";
          predEl.className = "text-xs md:text-sm font-extrabold text-rose-300 text-center px-4 py-1.5 rounded-xl bg-slate-950 border border-rose-500/40";
        }
      }

      const matrixEl = document.getElementById('scorecard-q-matrix');
      if (matrixEl) {
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
          item.className = `p-2 rounded-xl border text-center text-xs font-mono font-bold flex flex-col items-center justify-center gap-0.5 transition active:scale-95 cursor-pointer ${qBg} hover:brightness-125`;
          item.innerHTML = `<span>Q${i + 1}</span> ${icon}`;
          item.onclick = () => {
            openTkaQuestionInReview(i);
          };
          matrixEl.appendChild(item);
        }
      }

      const modal = document.getElementById('tka-scorecard-modal');
      if (modal) modal.classList.remove('hidden');
    }

    function closeTkaScorecardModal() {
      const modal = document.getElementById('tka-scorecard-modal');
      if (modal) modal.classList.add('hidden');
    }

    function renderTkaQuestion() {
      pulihkanDraftJawaban(tkaSubj, tkaPkgId);
      const sourceDb = tkaSrc();
      const pkg = sourceDb[tkaPkgId];
      if (!pkg || !pkg.questions || pkg.questions.length === 0) {
        document.getElementById('tka-body').innerHTML = '<div class="p-8 text-center text-slate-400">Paket soal sedang dipersiapkan.</div>';
        return;
      }

      if (tkaQIdx >= pkg.questions.length) tkaQIdx = 0;
      const q = pkg.questions[tkaQIdx];
      window.tkaActiveCorrectKey = q.kunci;

      userMultiAnswers = [];
      userTfAnswers = {};

      const isReviewMode = window._tkaReviewMode === true;
      const draftObj = (typeof ambilDraftSemua === 'function') ? ambilDraftSemua(tkaSubj, tkaPkgId) : {};
      const qDraft = draftObj[tkaQIdx];
      const userChosen = qDraft ? qDraft.chosen : null;

      const judulPkg = String(pkg.title || '');
      const sudahBerkode = judulPkg.indexOf(tkaPkgId) === 0;
      const labelEl = document.getElementById('tka-pkg-name');
      if (labelEl) {
        labelEl.innerText = sudahBerkode ? judulPkg : (tkaPkgId + ' • ' + judulPkg);
        if (judulPkg.indexOf('$') !== -1) renderMath(labelEl);
      }

      // Render Question Nav Pills
      const pillsContainer = document.getElementById('tka-q-pills');
      if (pillsContainer) {
        pillsContainer.innerHTML = '';
        pkg.questions.forEach((item, idx) => {
          const scoreVal = userSessionScores[`${tkaSubj}_${tkaPkgId}_${idx}`];
          const isAnswered = scoreVal !== undefined;
          const pBtn = document.createElement('button');
          let pillClass = `w-7 h-7 md:w-8 md:h-8 rounded-xl text-xs font-mono font-bold transition flex items-center justify-center active:scale-95 cursor-pointer `;
          
          if (idx === tkaQIdx) {
            pillClass += 'bg-amber-500 text-slate-950 font-black shadow-lg scale-105 border-2 border-amber-300';
          } else if (isReviewMode) {
            if (scoreVal === true) pillClass += 'bg-emerald-950 text-emerald-300 border border-blue-500';
            else if (scoreVal === false) pillClass += 'bg-rose-950 text-rose-300 border border-rose-500';
            else pillClass += 'bg-slate-800 text-slate-400';
          } else if (isAnswered) {
            pillClass += 'bg-blue-900/80 text-blue-200 border border-blue-500/40';
          } else {
            pillClass += 'bg-slate-800 text-slate-300 hover:bg-slate-700';
          }
          pBtn.className = pillClass;
          pBtn.innerText = idx + 1;
          pBtn.onclick = () => { tkaQIdx = idx; renderAppView(); };
          pillsContainer.appendChild(pBtn);
        });
      }

      const body = document.getElementById('tka-body');
      if (!body) return;

      const qType = q.tipe || q.type || (tkaSubj === 'clil' ? 'Multiple Choice' : 'Pilihan Ganda Tunggal');
      const isNumeric = (!q.opsi || q.opsi.length === 0);
      const isTF = !isNumeric && (qType === 'Pilihan Benar / Salah' || (q.kunci && /^[BS]\s*-\s*[BS]/i.test(q.kunci)));
      const isMulti = !isNumeric && !isTF && (qType === 'Pilihan Ganda Kompleks' || (q.kunci && String(q.kunci).includes(',')));
      
      const EN = { 'Pilihan Ganda Tunggal': 'Multiple Choice', 'Pilihan Ganda Kompleks': 'Multiple Response',
                   'Pilihan Benar / Salah': 'True / False', 'Isian Singkat Numerik': 'Numeric Entry',
                   'Kecukupan Data': 'Data Sufficiency' };
      let typeLabel = isNumeric ? 'Isian Singkat Numerik'
                    : isTF ? 'Pilihan Benar / Salah'
                    : isMulti ? 'Pilihan Ganda Kompleks'
                    : (qType === 'Kecukupan Data' ? 'Kecukupan Data' : 'Pilihan Ganda Tunggal');
      if (tkaSubj === 'clil') typeLabel = EN[typeLabel] || typeLabel;

      let optionsHtml = '';

      if (isTF) {
        let statements = [];
        if (q.opsi && q.opsi.length > 0) {
          statements = q.opsi.map(opt => opt.replace(/^[A-E]\.\s*/, ''));
        } else {
          statements = extractTfStatements(q.tanya);
        }
        const correctParts = String(q.kunci || '').split('-').map(s => s.trim().toUpperCase());

        optionsHtml = `
          <div class="space-y-3">
            ${statements.map((stmt, idx) => {
              const correctChoice = correctParts[idx] || 'B';
              return `
                <div id="tf-row-${idx}" class="p-3.5 md:p-4 rounded-2xl bg-slate-800/90 border border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow">
                  <div class="flex items-start gap-2.5 flex-1">
                    <span class="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 text-amber-300 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                      ${idx + 1}
                    </span>
                    <span class="text-xs md:text-sm text-slate-100 leading-relaxed">${stmt}</span>
                  </div>
                  <div class="flex items-center gap-2 shrink-0 self-end md:self-center">
                    <button id="tf-b-${idx}" onclick="${isReviewMode ? '' : `selectTfAnswer(${idx}, 'B')`}" class="px-4 py-2 rounded-xl text-xs font-bold border ${isReviewMode && correctChoice === 'B' ? 'border-emerald-400 bg-emerald-600 text-white font-black' : 'border-slate-600 bg-slate-900 text-slate-200'} transition shadow">
                      <i class="fa-solid fa-check text-amber-400 mr-1.5"></i> BENAR
                    </button>
                    <button id="tf-s-${idx}" onclick="${isReviewMode ? '' : `selectTfAnswer(${idx}, 'S')`}" class="px-4 py-2 rounded-xl text-xs font-bold border ${isReviewMode && correctChoice === 'S' ? 'border-rose-400 bg-rose-600 text-white font-black' : 'border-slate-600 bg-slate-900 text-slate-200'} transition shadow">
                      <i class="fa-solid fa-xmark text-amber-400 mr-1.5"></i> SALAH
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
            ${!isReviewMode ? `
              <p id="tf-hint" class="hidden text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-xl px-3 py-2"></p>
              <button id="tf-submit" onclick="submitTfAnswer('${q.kunci}', ${statements.length})" class="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 text-white font-black rounded-2xl text-xs md:text-sm shadow-xl transition active:scale-95 flex items-center justify-center gap-2 mt-2">
                <i class="fa-solid fa-circle-check"></i> SIMPAN JAWABAN BENAR / SALAH
              </button>
            ` : ''}
          </div>
        `;
      } else if (isMulti) {
        const correctLetters = String(q.kunci || '').split(',').map(s => s.trim().toUpperCase());
        optionsHtml = `
          <div class="space-y-3">
            <div class="p-2.5 bg-blue-950/40 border border-blue-500/30 rounded-xl text-xs text-blue-300 font-bold flex items-center gap-2">
              <i class="fa-solid fa-square-check text-blue-400"></i> Pilihan Ganda Kompleks: Pilih semua pernyataan yang bernilai BENAR!
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              ${q.opsi.map((opt, i) => {
                const letter = opt.match(/^[A-E]/) ? opt.substring(0, 1) : String.fromCharCode(65 + i);
                const cleanText = opt.replace(/^[A-E]\.\s*/, '');
                const span = (q.opsi.length % 2 === 1 && i === q.opsi.length - 1) ? ' md:col-span-2' : '';
                const isCorrectLetter = correctLetters.includes(letter);
                
                let btnStyle = "bg-slate-800/90 border-slate-700 text-slate-200";
                let markBadge = "";
                if (isReviewMode) {
                  if (isCorrectLetter) {
                    btnStyle = "bg-emerald-950/90 border-2 border-emerald-400 text-white font-semibold";
                    markBadge = '<span class="px-2 py-0.5 rounded bg-amber-500 text-slate-950 text-[10px] font-black"><i class="fa-solid fa-check mr-1"></i>BENAR</span>';
                  }
                }

                return `
                  <button id="multi-opt-${letter}" data-letter="${letter}" onclick="${isReviewMode ? '' : `toggleMultiOption('${letter}')`}" class="multi-opt-btn${span} p-3.5 md:p-4 border rounded-2xl text-left text-sm flex items-start gap-3 transition shadow ${btnStyle}">
                    <span id="chk-${letter}" class="w-6 h-6 rounded-lg ${isReviewMode && isCorrectLetter ? 'bg-emerald-600 border-emerald-400 text-white' : 'bg-slate-900 border-slate-700 text-slate-400'} font-bold flex items-center justify-center shrink-0 text-xs">
                      ${letter}
                    </span>
                    <span class="flex-1 pt-0.5 text-slate-100 leading-relaxed">${cleanText}</span>
                    <span class="opt-mark shrink-0 pt-0.5">${markBadge}</span>
                  </button>
                `;
              }).join('')}
            </div>
            ${!isReviewMode ? `
              <p id="multi-hint" class="hidden text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-xl px-3 py-2"></p>
              <button id="multi-submit" onclick="submitMultiAnswer('${q.kunci}')" class="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black rounded-2xl text-xs md:text-sm shadow-xl transition active:scale-95 flex items-center justify-center gap-2">
                <i class="fa-solid fa-check-double"></i> SIMPAN PILIHAN JAWABAN
              </button>
            ` : ''}
          </div>
        `;
      } else if (isNumeric) {
        optionsHtml = `
          <div class="p-6 bg-slate-800/90 border border-slate-700 rounded-2xl space-y-3 text-center max-w-md mx-auto shadow-xl">
            <span class="text-xs font-bold text-amber-300 uppercase block">${tkaSubj === 'clil' ? 'Numeric Entry:' : 'Isian Singkat Numerik:'}</span>
            <input type="text" id="numeric-input" value="${isReviewMode ? String(q.kunci) : (userChosen || '')}" ${isReviewMode ? 'readonly' : ''} class="w-full ${isReviewMode ? 'bg-emerald-950 border-2 border-emerald-400 text-white' : 'bg-slate-950 border-slate-700 text-white'} border rounded-2xl py-3 px-4 text-center text-lg font-mono font-bold focus:outline-none focus:border-amber-400 shadow-inner">
            ${isReviewMode ? `
              <p class="text-xs text-emerald-300 font-bold">Kunci Jawaban Tepat: <span class="font-mono text-white text-sm">${q.kunci}</span></p>
            ` : `
              <p class="text-[11px] text-slate-400 leading-relaxed">Boleh desimal maupun pecahan (contoh: <span class="font-mono text-slate-300">0.75</span> atau <span class="font-mono text-slate-300">3/4</span>).</p>
              <button id="numeric-submit" onclick="submitNumericAnswer('${String(q.kunci).replace(/'/g, "\'")}')" class="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black rounded-2xl text-xs md:text-sm shadow-xl transition active:scale-95 flex items-center justify-center gap-2">
                <i class="fa-solid fa-paper-plane"></i> SIMPAN JAWABAN NUMERIK
              </button>
            `}
          </div>
        `;
      } else {
        // SINGLE CHOICE A/B/C/D/E
        const longest = Math.max(...(q.opsi || []).map(o => o.replace(/^[A-E]\.\s*/, '').length));
        const twoCol = longest <= 40;
        const oddLast = twoCol && (q.opsi.length % 2 === 1);
        const correctLetter = String(q.kunci || '').trim().toUpperCase();

        optionsHtml = `
          <div class="grid grid-cols-1 ${twoCol ? 'md:grid-cols-2' : ''} gap-2.5">
            ${(q.opsi || []).map((opt, i) => {
              const span = (oddLast && i === q.opsi.length - 1) ? ' md:col-span-2' : '';
              const letter = opt.match(/^[A-E]/) ? opt.substring(0, 1) : String.fromCharCode(65 + i);
              const cleanText = opt.replace(/^[A-E]\.\s*/, '');
              
              let btnClass = "p-3.5 md:p-4 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-2xl text-left text-sm text-slate-200 flex items-start gap-3 active:scale-95 transition shadow cursor-pointer";
              let badgeHtml = "";

              if (isReviewMode) {
                if (letter === correctLetter) {
                  btnClass = "p-3.5 md:p-4 bg-emerald-950/90 border-2 border-emerald-400 rounded-2xl text-left text-sm text-white flex items-start gap-3 shadow-lg shadow-emerald-950/50";
                  if (userChosen === correctLetter) {
                    badgeHtml = '<span class="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 text-[10px] font-black flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> JAWABAN ANDA TEPAT (+10)</span>';
                  } else {
                    badgeHtml = '<span class="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 text-[10px] font-black flex items-center gap-1"><i class="fa-solid fa-check"></i> KUNCI JAWABAN BENAR</span>';
                  }
                } else if (userChosen === letter) {
                  btnClass = "p-3.5 md:p-4 bg-rose-950/90 border-2 border-rose-400 rounded-2xl text-left text-sm text-white flex items-start gap-3 shadow-lg shadow-rose-950/50";
                  badgeHtml = '<span class="px-2.5 py-1 rounded-lg bg-rose-600 text-white text-[10px] font-black flex items-center gap-1"><i class="fa-solid fa-xmark"></i> JAWABAN ANDA</span>';
                } else {
                  btnClass = "p-3.5 md:p-4 bg-slate-900/60 border border-slate-800 rounded-2xl text-left text-sm text-slate-400 flex items-start gap-3 opacity-60";
                }
              } else if (userChosen === letter) {
                btnClass = "p-3.5 md:p-4 bg-cyan-950/90 border-2 border-cyan-400 rounded-2xl text-left text-sm text-white flex items-start gap-3 shadow-lg shadow-cyan-950/50";
                badgeHtml = '<i class="fa-solid fa-circle-check text-blue-400 text-sm"></i>';
              }

              return `
                <button id="opt-btn-${letter}" data-letter="${letter}" onclick="${isReviewMode ? '' : `selectAnswer('${letter}', '${q.kunci}')`}" class="opt-btn${span} ${btnClass}">
                  <span class="w-6 h-6 rounded-lg ${isReviewMode && letter === correctLetter ? 'bg-amber-500 text-slate-950 font-black' : 'bg-slate-900 border border-slate-700 text-amber-400 font-black'} flex items-center justify-center shrink-0 text-xs">
                    ${letter}
                  </span>
                  <span class="flex-1 pt-0.5 text-slate-100 font-medium leading-relaxed">${cleanText}</span>
                  <span class="opt-mark shrink-0 pt-0.5">${badgeHtml}</span>
                </button>
              `;
            }).join('')}
          </div>
        `;
      }

      // Review Header Banner
      const reviewHeaderBanner = isReviewMode ? `
        <div class="p-3 bg-gradient-to-r from-emerald-950/95 to-slate-900/95 border border-blue-500/60 rounded-2xl flex flex-wrap items-center justify-between gap-2.5 shadow-xl mb-4">
          <div class="flex items-center gap-2.5">
            <span class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-blue-500/40 text-sm">
              <i class="fa-solid fa-graduation-cap"></i>
            </span>
            <div>
              <span class="text-xs font-black text-emerald-300 uppercase tracking-wide">Mode Review Pembahasan & Kunci Jawaban</span>
              <p class="text-[10px] text-slate-300">Langkah penyelesaian terstruktur dan evaluasi per butir soal</p>
            </div>
          </div>
          <button onclick="showTkaScorecardModal()" class="px-3.5 py-1.5 bg-emerald-600 hover:bg-amber-500 text-white rounded-xl text-xs font-bold shadow transition flex items-center gap-1.5 cursor-pointer active:scale-95">
            <i class="fa-solid fa-chart-pie"></i> <span>Lihat Skor Akhir</span>
          </button>
        </div>
      ` : '';

      body.innerHTML = `
        <div class="space-y-4">
          ${reviewHeaderBanner}

          <div class="p-4 md:p-6 bg-slate-900/90 rounded-2xl border border-amber-500/40 shadow-xl space-y-3">
            <div class="flex flex-wrap items-center gap-x-2 gap-y-1 justify-between border-b border-slate-800 pb-2">
              <div class="flex items-center gap-2 min-w-0">
                <span class="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 font-bold text-xs rounded-lg font-mono whitespace-nowrap">
                  ${tkaSubj === 'clil' ? 'Question' : 'Soal'} ${tkaQIdx + 1} / ${pkg.questions.length}
                </span>
                <span class="text-xs text-slate-400 truncate">${typeLabel}</span>
              </div>
              <span class="text-xs font-bold text-amber-400/80 whitespace-nowrap">${q.level || 'C4 Analisis'} &middot; ${q.bobot || 10} Poin</span>
            </div>
            
            <div class="text-sm md:text-base font-semibold text-white leading-relaxed">
              ${formatQuestionPromptHtml(isTF ? stripTfStatements(q.tanya) : q.tanya, qType)}
            </div>
            ${vizBlock(q)}
          </div>

          <!-- OPTIONS -->
          ${optionsHtml}

          <!-- STEP-BY-STEP SOLUTION CARD -->
          <div id="tka-solution-box" class="${isReviewMode ? 'block' : 'hidden'} p-4 md:p-6 bg-slate-900/95 rounded-2xl border-2 border-blue-500/60 shadow-2xl space-y-3 mb-10 pb-6">
            <div class="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <span class="text-xs font-black text-amber-400 flex items-center gap-2 uppercase tracking-wide">
                <i class="fa-solid fa-lightbulb text-amber-400"></i> ${tkaSubj === 'clil' ? 'Step-by-Step Structured Solution:' : 'Langkah Pembahasan Terstruktur & Kunci Jawaban:'}
              </span>
              <span class="text-xs font-mono font-black text-amber-300 bg-slate-950 px-3 py-1 rounded-xl border border-amber-500/40 shadow-inner" id="tka-correct-key-label">
                ${tkaSubj === 'clil' ? 'Key Answer' : 'Kunci Jawaban'}: <span class="text-amber-400 text-sm font-black">${q.kunci}</span>
              </span>
            </div>
            <div class="text-xs md:text-sm text-slate-100 leading-relaxed space-y-2 pt-1 font-sans" id="tka-solution-content">
              ${formatSolutionHtml(q.bahas || q.pembahasan || q.solusi || 'Pembahasan terstruktur sedang disiapkan.')}
            </div>
          </div>
        </div>
      `;

      renderMath(body);
    }

    let vizOpen = false;
    function vizBlock(q) {
      const html = vzRender(q.viz);
      if (!html) return '';
      return `
        <div class="pt-3 mt-3 border-t border-slate-800">
          <button type="button" onclick="toggleViz()" class="viz-toggle" id="viz-btn">
            <i class="fa-solid fa-chart-line"></i>
            <span id="viz-btn-text">${vizOpen ? 'Sembunyikan ilustrasi' : 'Lihat ilustrasi'}</span>
          </button>
          <div id="viz-box" class="${vizOpen ? '' : 'hidden'} mt-3">${html}</div>
        </div>`;
    }
    function toggleViz() {
      const box = document.getElementById('viz-box'), txt = document.getElementById('viz-btn-text');
      if (!box) return;
      vizOpen = box.classList.toggle('hidden') === false;
      if (txt) txt.textContent = vizOpen ? 'Sembunyikan ilustrasi' : 'Lihat ilustrasi';
    }

    // CBT SELECTION HANDLERS & PERSISTENCE
    function selectAnswer(chosen, correct) {
      const key = `${tkaSubj}_${tkaPkgId}_${tkaQIdx}`;
      const isRight = (chosen.toUpperCase() === correct.toUpperCase());
      userSessionScores[key] = isRight;
      simpanDraftJawaban(tkaSubj, tkaPkgId, tkaQIdx, chosen, isRight, { type: 'single', chosen: chosen, correct: correct });

      // Highlight opsi yang dipilih siswa (simpan pilihan tanpa bocorkan kunci/pembahasan sebelum submit)
      const span = b => b.classList.contains('md:col-span-2') ? ' md:col-span-2' : '';
      document.querySelectorAll('.opt-btn').forEach(b => {
        const letter = b.getAttribute('data-letter');
        const markEl = b.querySelector('.opt-mark');
        if (letter === chosen) {
          b.className = 'opt-btn' + span(b) + ' p-3.5 md:p-4 bg-cyan-950/90 border-2 border-cyan-400 rounded-2xl text-left text-sm text-white flex items-start gap-3 shadow-lg shadow-cyan-950/50 transition';
          if (markEl) markEl.innerHTML = '<i class="fa-solid fa-circle-check text-blue-400 text-sm"></i>';
        } else {
          b.className = 'opt-btn' + span(b) + ' p-3.5 md:p-4 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-2xl text-left text-sm text-slate-200 flex items-start gap-3 active:scale-95 transition shadow';
          if (markEl) markEl.innerHTML = '';
        }
      });
      saveAppState();
    }

    const mSpan = b => (b && b.classList.contains('md:col-span-2')) ? ' md:col-span-2' : '';

    function toggleMultiOption(letter) {
      const idx = userMultiAnswers.indexOf(letter);
      const btn = document.getElementById('multi-opt-' + letter);
      const chk = document.getElementById('chk-' + letter);
      if (idx === -1) {
        userMultiAnswers.push(letter);
        if (btn) btn.className = "multi-opt-btn" + mSpan(btn) + " p-3.5 md:p-4 bg-blue-950/90 border-2 border-blue-400 rounded-2xl text-left text-sm text-white flex items-start gap-3 active:scale-95 transition shadow";
        if (chk) chk.className = "w-6 h-6 rounded-lg bg-blue-600 border border-blue-400 text-white font-bold flex items-center justify-center shrink-0 text-xs";
      } else {
        userMultiAnswers.splice(idx, 1);
        if (btn) btn.className = "multi-opt-btn" + mSpan(btn) + " p-3.5 md:p-4 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-2xl text-left text-sm text-slate-200 flex items-start gap-3 active:scale-95 transition shadow";
        if (chk) chk.className = "w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 font-bold flex items-center justify-center shrink-0 text-xs";
      }
    }

    function flashHint(id, msg) {
      const el = document.getElementById(id);
      if (!el) return;
      el.textContent = msg;
      el.classList.remove('hidden');
      clearTimeout(el._t);
      el._t = setTimeout(() => el.classList.add('hidden'), 3200);
    }

    const OPT_BASE = 'p-3.5 md:p-4 rounded-2xl text-left text-xs md:text-sm flex items-start gap-3 shadow';
    const OPT_RIGHT = OPT_BASE + ' bg-emerald-950/90 border-2 border-emerald-400 text-white';
    const OPT_WRONG = OPT_BASE + ' bg-rose-950/90 border-2 border-rose-400 text-white';
    const OPT_MISSED = OPT_BASE + ' bg-slate-900 border-2 border-dashed border-blue-500/60 text-slate-200';
    const OPT_MUTED = OPT_BASE + ' bg-slate-900/70 border border-slate-800 text-slate-400';

    function submitMultiAnswer(correctKeysStr) {
      const correctSet = correctKeysStr.split(',').map(s => s.trim().toUpperCase());
      const userSet = userMultiAnswers.map(s => s.toUpperCase());
      if (userSet.length === 0) {
        flashHint('multi-hint', 'Pilih minimal satu pernyataan sebelum memeriksa jawaban.');
        return;
      }
      const isRight = (correctSet.length === userSet.length && correctSet.every(k => userSet.includes(k)));

      const key = `${tkaSubj}_${tkaPkgId}_${tkaQIdx}`;
      userSessionScores[key] = isRight;
      catatSesiCbt(tkaSubj, tkaPkgId);

      // per-option marking so the student sees WHICH pick was wrong
      document.querySelectorAll('.multi-opt-btn').forEach(btn => {
        const L = btn.dataset.letter;
        const picked = userSet.includes(L), right = correctSet.includes(L);
        btn.disabled = true;
        btn.className = 'multi-opt-btn' + mSpan(btn) + ' ' +
          (picked && right ? OPT_RIGHT : picked && !right ? OPT_WRONG
           : !picked && right ? OPT_MISSED : OPT_MUTED);
        const tag = btn.querySelector('.opt-mark');
        if (tag) tag.innerHTML = picked && right ? '<i class="fa-solid fa-check text-emerald-300"></i>'
          : picked && !right ? '<i class="fa-solid fa-xmark text-rose-300"></i>'
          : !picked && right ? '<i class="fa-solid fa-arrow-left text-emerald-300" title="Seharusnya dipilih"></i>' : '';
      });
      const mb = document.getElementById('multi-submit');
      if (mb) { mb.disabled = true; mb.classList.add('opacity-50', 'pointer-events-none'); }

      if (isRight) confettiCelebration();

      document.getElementById('tka-solution-box').classList.remove('hidden');
      kalimatSetelahDikoreksi();
      renderMath(document.getElementById('tka-solution-box'));
      saveAppState();
    }

    function selectTfAnswer(stmtIdx, choice) {
      userTfAnswers[stmtIdx] = choice;
      const bBtn = document.getElementById(`tf-b-${stmtIdx}`);
      const sBtn = document.getElementById(`tf-s-${stmtIdx}`);
      if (choice === 'B') {
        if (bBtn) bBtn.className = "px-4 py-2 rounded-xl text-xs font-black border border-emerald-400 bg-emerald-600 text-white shadow scale-105 transition";
        if (sBtn) sBtn.className = "px-4 py-2 rounded-xl text-xs font-bold border border-slate-700 bg-slate-900 text-slate-400 opacity-60";
      } else {
        if (sBtn) sBtn.className = "px-4 py-2 rounded-xl text-xs font-black border border-rose-400 bg-rose-600 text-white shadow scale-105 transition";
        if (bBtn) bBtn.className = "px-4 py-2 rounded-xl text-xs font-bold border border-slate-700 bg-slate-900 text-slate-400 opacity-60";
      }
    }

    function submitTfAnswer(correctPattern, stmtCount) {
      const correctParts = correctPattern.split('-').map(s => s.trim().toUpperCase());
      for (let i = 0; i < stmtCount; i++) {
        if (!userTfAnswers[i]) {
          flashHint('tf-hint', `Pernyataan ${i + 1} belum dijawab. Isi semua dulu, ya.`);
          return;
        }
      }
      let allCorrect = true;
      for (let i = 0; i < stmtCount; i++) {
        if (userTfAnswers[i] !== correctParts[i]) { allCorrect = false; break; }
      }

      const key = `${tkaSubj}_${tkaPkgId}_${tkaQIdx}`;
      userSessionScores[key] = allCorrect;
      catatSesiCbt(tkaSubj, tkaPkgId);

      // mark each statement individually
      for (let i = 0; i < stmtCount; i++) {
        const ok = userTfAnswers[i] === correctParts[i];
        const row = document.getElementById(`tf-row-${i}`);
        const badge = document.getElementById(`tf-verdict-${i}`);
        ['tf-b-' + i, 'tf-s-' + i].forEach(id => {
          const b = document.getElementById(id); if (b) b.disabled = true;
        });
        if (row) row.className = 'p-3.5 md:p-4 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-3 shadow border-2 ' +
          (ok ? 'bg-emerald-950/60 border-blue-500/70' : 'bg-rose-950/60 border-rose-500/70');
        if (badge) {
          badge.classList.remove('hidden');
          badge.className = 'text-[11px] font-black px-2 py-0.5 rounded-lg ' +
            (ok ? 'bg-amber-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300');
          badge.textContent = ok ? 'Tepat' : `Seharusnya ${correctParts[i] === 'B' ? 'BENAR' : 'SALAH'}`;
        }
      }
      const tb = document.getElementById('tf-submit');
      if (tb) { tb.disabled = true; tb.classList.add('opacity-50', 'pointer-events-none'); }

      if (allCorrect) confettiCelebration();

      document.getElementById('tka-solution-box').classList.remove('hidden');
      kalimatSetelahDikoreksi();
      renderMath(document.getElementById('tka-solution-box'));
      saveAppState();
    }

    // Accepts 0.4 / 0,4 / .4 ; 3/4 / 0.75 ; pi/8 / 0.3927 ; 1.000 / 1000
    function numericValue(raw) {
      if (raw === undefined || raw === null) return null;
      let t = String(raw).trim().toLowerCase()
        .replace(/\s+/g, '')
        .replace(/[{}$\\]/g, '')
        .replace(/\u00d7/g, '*')
        .replace(/\bpi\b|\u03c0/g, String(Math.PI))
        .replace(/\bsqrt/g, 'Math.sqrt');
      if (/^-?\d{1,3}(\.\d{3})+(,\d+)?$/.test(t)) t = t.replace(/\./g, '');   // 1.680,5 (id)
      t = t.replace(/,/g, '.');
      if (!/^[-+*/().0-9a-z]*$/.test(t) || /[a-z]/.test(t.replace(/math\.sqrt/g, ''))) {
        const n = parseFloat(t); return isNaN(n) ? null : n;
      }
      try {
        const v = Function('"use strict";return (' + t + ')')();
        return (typeof v === 'number' && isFinite(v)) ? v : null;
      } catch (e) { const n = parseFloat(t); return isNaN(n) ? null : n; }
    }

    function submitNumericAnswer(correctVal) {
      const inp = document.getElementById('numeric-input');
      if (!inp) return;
      if (!inp.value.trim()) {
        flashHint('numeric-hint', 'Isi dulu jawabanmu sebelum mengirim.');
        inp.focus();
        return;
      }
      const a = numericValue(inp.value), b = numericValue(correctVal);
      const isRight = (a !== null && b !== null)
        ? Math.abs(a - b) <= Math.max(1e-9, Math.abs(b) * 1e-4)
        : inp.value.trim().replace(/\s+/g, '').toLowerCase() ===
          String(correctVal).trim().replace(/\s+/g, '').toLowerCase();
      inp.disabled = true;
      const sBtn = document.getElementById('numeric-submit');
      if (sBtn) { sBtn.disabled = true; sBtn.classList.add('opacity-50', 'pointer-events-none'); }

      const key = `${tkaSubj}_${tkaPkgId}_${tkaQIdx}`;
      userSessionScores[key] = isRight;
      catatSesiCbt(tkaSubj, tkaPkgId);

      if (isRight) {
        inp.className = "w-full bg-emerald-950 border-2 border-emerald-400 rounded-2xl py-3 px-4 text-center text-lg font-mono font-black text-white shadow-lg";
        confettiCelebration();
      } else {
        inp.className = "w-full bg-rose-950 border-2 border-rose-400 rounded-2xl py-3 px-4 text-center text-lg font-mono font-black text-white shadow-lg";
      }

      document.getElementById('tka-solution-box').classList.remove('hidden');
      kalimatSetelahDikoreksi();
      renderMath(document.getElementById('tka-solution-box'));
      saveAppState();
    }

    // TOGGLE WORKED EXAMPLE SOLUTION VISIBILITY (SLIDE 5, 6, 7)
    function toggleExampleSolution() {
      const solBox = document.getElementById('example-sol-box');
      const placeholder = document.getElementById('example-sol-placeholder');
      const icon = document.getElementById('toggle-sol-icon');
      const text = document.getElementById('toggle-sol-text');
      if (!solBox) return;

      const isHidden = solBox.classList.contains('hidden');
      const isClil = currentMode === 'clil';

      if (isHidden) {
        solBox.classList.remove('hidden');
        if (placeholder) placeholder.classList.add('hidden');
        if (icon) icon.className = "fa-solid fa-eye-slash";
        if (text) text.innerText = isClil ? "Hide Step-by-Step Solution" : "Tutup Cara Penyelesaian";
        renderMath(solBox);
      } else {
        solBox.classList.add('hidden');
        if (placeholder) placeholder.classList.remove('hidden');
        if (icon) icon.className = "fa-solid fa-eye";
        if (text) text.innerText = isClil ? "Show Step-by-Step Solution" : "Buka Cara Penyelesaian";
      }
    }

    // NEXT & PREV CONTROLS
    function nextSlide() {
      const meetings = db[currentMode] || db['wajib'];
      if (currentSlideIdx < 10) {
        currentSlideIdx++;
        renderAppView();
      } else if (currentMeetingIdx < meetings.length - 1) {
        currentMeetingIdx++;
        currentSlideIdx = 0;
        renderAppView();
      }
    }

    function prevSlide() {
      if (currentSlideIdx > 0) {
        currentSlideIdx--;
        renderAppView();
      } else if (currentMeetingIdx > 0) {
        currentMeetingIdx--;
        currentSlideIdx = 10;
        renderAppView();
      }
    }

    function nextTkaQ() {
      const sourceDb = tkaSrc();
      const pkg = sourceDb[tkaPkgId];
      if (pkg && tkaQIdx < pkg.questions.length - 1) {
        tkaQIdx++;
        renderAppView();
      }
    }

    function prevTkaQ() {
      if (tkaQIdx > 0) {
        tkaQIdx--;
        renderAppView();
      }
    }

    // TIMERS
    function startTkaTimer() {
      clearInterval(tkaTimerInt);
      tkaTimerSec = 180;
      const timerEl = document.getElementById('tka-timer');
      tkaTimerInt = setInterval(() => {
        tkaTimerSec--;
        const m = Math.floor(tkaTimerSec / 60);
        const s = tkaTimerSec % 60;
        if (timerEl) {
          timerEl.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
          if (tkaTimerSec <= 30) timerEl.className = "font-black text-amber-400 animate-pulse";
          else timerEl.className = "font-bold text-white";
        }
        if (tkaTimerSec <= 0) {
          clearInterval(tkaTimerInt);
          tkaTimerSec = 0;
          if (timerEl) {
            timerEl.innerText = '00:00';
            timerEl.className = 'font-black text-amber-400';
          }
          // the timer is a pacing aid, not a lock-out: say so instead of just stopping
          const wrap = timerEl && timerEl.parentElement;
          if (wrap && !wrap.dataset.done) {
            wrap.dataset.done = '1';
            wrap.title = 'Waktu ideal per soal (3 menit) sudah lewat — kamu masih boleh melanjutkan.';
            wrap.classList.add('border-rose-500/60');
          }
        }
      }, 1000);
    }

    function resetTkaQuestionTimer() {
      startTkaTimer();
    }

    // =========================================================================
    // COLLABORATIVE PEDAGOGICAL METHODS ENGINE (MULTI-METHOD ACTIVE CLASSROOM)
    // =========================================================================
    const PEDAGOGY_METHODS = {
      "tps": {
        id: "tps",
        name: "Think-Pair-Share",
        name_en: "Think-Pair-Share",
        badge: "THINK-PAIR-SHARE (TPS)",
        badge_en: "THINK-PAIR-SHARE (TPS)",
        tag: "2 Siswa Berpasangan",
        tag_en: "2 Students in Pairs",
        icon: "fa-solid fa-users",
        color: "amber",
        title: "Diskusi Mandiri, Berpasangan, & Berbagi Solusi",
        title_en: "Independent Thinking, Pair Collaboration, & Solution Sharing",
        steps: [
          { num: "1. Think (Mandiri 2m)", icon: "fa-solid fa-user-pen", color: "blue", text: "Siswa menganalisis dan menyelesaikan <strong>Soal 1 secara mandiri & hening</strong> di buku catatan." },
          { num: "2. Pair (Berpasangan 4m)", icon: "fa-solid fa-user-group", color: "amber", text: "Bahas <strong>Soal 2</strong> bersama teman sebangku, bandingkan alur rumus, dan sepakati <strong>jawaban terbaik</strong>." },
          { num: "3. Peer Check & Koreksi", icon: "fa-solid fa-spell-check", color: "emerald", text: "Saling memeriksa ketelitian hitungan, tanda aljabar, dan langkah matematis satu sama lain." },
          { num: "4. Share (Berbagi ke Kelas)", icon: "fa-solid fa-bullhorn", color: "purple", text: "Pasangan terpilih mempresentasikan temuan atau strategi <strong>Soal 3 (HOTS)</strong> ke forum kelas." }
        ],
        steps_en: [
          { num: "1. Think (Individual 2m)", icon: "fa-solid fa-user-pen", color: "blue", text: "Analyze and solve <strong>Problem 1 independently & silently</strong> in your notebooks." },
          { num: "2. Pair (Partners 4m)", icon: "fa-solid fa-user-group", color: "amber", text: "Discuss <strong>Problem 2</strong> with your desk partner, compare analytical steps, and agree on the <strong>optimal proof</strong>." },
          { num: "3. Peer Check & Verify", icon: "fa-solid fa-spell-check", color: "emerald", text: "Cross-check calculation accuracy, calculus notations, and algebraic signs." },
          { num: "4. Share (Whole Class)", icon: "fa-solid fa-bullhorn", color: "purple", text: "Selected pairs present key insights on <strong>Problem 3 (HOTS)</strong> to the forum." }
        ],
        defaultSec: 300,
        quickTimes: [180, 300, 600],
        tip: "💡 Tips Guru: Berikan aba-aba lonceng saat transisi dari berpikir mandiri (Think) ke berdiskusi dengan teman sebangku (Pair).",
        tip_en: "💡 Teacher's Tip: Use a chime to signal the transition from independent reflection (Think) to partner collaboration (Pair)."
      },
      "rally_coach": {
        id: "rally_coach",
        name: "Rally Coach",
        name_en: "Rally Coach",
        badge: "RALLY COACH (PEER TUTORING)",
        badge_en: "RALLY COACH (PEER TUTORING)",
        tag: "Partner A & Partner B (Berpasangan)",
        tag_en: "Partner A & Partner B (In Pairs)",
        icon: "fa-solid fa-handshake-angle",
        color: "emerald",
        title: "Pelatih Bergantian & Berpikir Nyaring (Thinking Aloud)",
        title_en: "Alternating Coaching & Thinking Aloud (Peer Tutoring)",
        steps: [
          { num: "1. Giliran Partner A (Soal 1)", icon: "fa-solid fa-pen-nib", color: "emerald", text: "Partner A menuliskan solusi <strong>Soal 1</strong> sambil <strong>bersuara lantang</strong> menjelaskan tiap langkah logikanya." },
          { num: "2. Partner B Melatih (Coach)", icon: "fa-solid fa-ear-listen", color: "blue", text: "Partner B menyimak cermat, memberi petunjuk pembimbing jika keliru, dan memberi apresiasi jika tepat." },
          { num: "3. Tukar Peran (Soal 2)", icon: "fa-solid fa-arrows-rotate", color: "amber", text: "Pada <strong>Soal 2</strong>, giliran Partner B yang menulis & menjelaskan, Partner A bertindak sebagai pelatih." },
          { num: "4. Verifikasi Bersama (Soal 3)", icon: "fa-solid fa-circle-check", color: "purple", text: "Kedua partner bersama-sama memvalidasi dan mereview <strong>Soal 3</strong> sebelum evaluasi guru." }
        ],
        steps_en: [
          { num: "1. Partner A Solves (Q1)", icon: "fa-solid fa-pen-nib", color: "emerald", text: "Partner A writes the solution to <strong>Problem 1</strong> while <strong>thinking aloud</strong> and explaining each mathematical step." },
          { num: "2. Partner B Coaches", icon: "fa-solid fa-ear-listen", color: "blue", text: "Partner B listens actively, provides guiding prompts if needed, and praises correct steps." },
          { num: "3. Switch Roles (Q2)", icon: "fa-solid fa-arrows-rotate", color: "amber", text: "On <strong>Problem 2</strong>, Partner B writes and explains while Partner A acts as the coach." },
          { num: "4. Joint Verification (Q3)", icon: "fa-solid fa-circle-check", color: "purple", text: "Both partners ensure the final <strong>Problem 3</strong> solution is rigorous and validated before submission." }
        ],
        defaultSec: 360,
        quickTimes: [240, 360, 600],
        tip: "💡 Tips Guru: Ingatkan Partner B untuk tidak merebut pena/pensil, melainkan membimbing dengan pertanyaan reflektif.",
        tip_en: "💡 Teacher's Tip: Remind coaches never to take the pen; they should guide with reflective questions."
      },
      "nht": {
        id: "nht",
        name: "Numbered Heads",
        name_en: "Numbered Heads",
        badge: "NUMBERED HEADS TOGETHER (NHT)",
        badge_en: "NUMBERED HEADS TOGETHER (NHT)",
        tag: "Nomor 1 s.d. 4 Tiap Anggota",
        tag_en: "Numbers 1 to 4 per Group",
        icon: "fa-solid fa-arrow-down-1-9",
        color: "cyan",
        title: "Pemerataan Pemahaman Tim & Akuntabilitas Individu",
        title_en: "Equal Team Mastery & Individual Accountability",
        steps: [
          { num: "1. Penomoran (1-4)", icon: "fa-solid fa-id-badge", color: "cyan", text: "Setiap siswa dalam kelompok (4 orang) mendapatkan nomor identitas unik: 1, 2, 3, atau 4." },
          { num: "2. Heads Together (6m)", icon: "fa-solid fa-comments", color: "amber", text: "Semua anggota menyatukan pikiran memastikan <strong>semua anggota paham 100%</strong> cara kerjanya." },
          { num: "3. Panggilan Nomor Acak", icon: "fa-solid fa-shuffle", color: "purple", text: "Guru memanggil satu nomor secara acak (misal: 'Semua nomor 3 siap'). Siswa bernomor bersiap." },
          { num: "4. Respons Perwakilan", icon: "fa-solid fa-chalkboard-user", color: "emerald", text: "Hanya siswa bernomor terpilih yang boleh menjawab atau menuliskan langkah solusi di papan." }
        ],
        steps_en: [
          { num: "1. Numbering (1-4)", icon: "fa-solid fa-id-badge", color: "cyan", text: "Each student in the group (4 members) receives a unique identity number: 1, 2, 3, or 4." },
          { num: "2. Heads Together (6m)", icon: "fa-solid fa-comments", color: "amber", text: "Members put their heads together ensuring <strong>every single member understands 100%</strong> of the proof." },
          { num: "3. Random Number Call", icon: "fa-solid fa-shuffle", color: "purple", text: "Teacher calls a random number (e.g., 'All Number 3s ready'). Designated students prepare to answer." },
          { num: "4. Designated Response", icon: "fa-solid fa-chalkboard-user", color: "emerald", text: "Only the designated numbered student may answer or write the complete solution on the board." }
        ],
        defaultSec: 480,
        quickTimes: [300, 480, 720],
        tip: "💡 Tips Guru: Gunakan nomor acak untuk memastikan seluruh siswa fokus dan anggota berkemampuan tinggi aktif mengajari rekannya.",
        tip_en: "💡 Teacher's Tip: Random calling motivates stronger students to tutor all peers effectively in their group."
      },
      "gallery_walk": {
        id: "gallery_walk",
        name: "Gallery Walk",
        name_en: "Gallery Walk",
        badge: "GALLERY WALK & TWO STAY TWO STRAY",
        badge_en: "GALLERY WALK & TWO STAY TWO STRAY",
        tag: "Kelompok 4 Siswa (Kertas Plano/Mini Board)",
        tag_en: "Group of 4 (Poster / Group Board)",
        icon: "fa-solid fa-images",
        color: "pink",
        title: "Pameran Poster Solusi & Kunjungan Tim Antar Meja",
        title_en: "Solution Poster Exhibition & Inter-Team Visits",
        steps: [
          { num: "1. Desain Papan Solusi (5m)", icon: "fa-solid fa-paintbrush", color: "pink", text: "Tim menyelesaikan masalah pos yang ditugaskan dan merancang peta solusi di kertas plano / papan kelompok." },
          { num: "2. Dua Tinggal (2 Stay)", icon: "fa-solid fa-house-user", color: "blue", text: "2 siswa bertindak sebagai <strong>tuan rumah</strong> di stan untuk menyambut tamu dan menjelaskan solusi timnya." },
          { num: "3. Dua Bertamu (2 Stray)", icon: "fa-solid fa-person-walking-luggage", color: "amber", text: "2 siswa lainnya <strong>berkeliling ke stan tim lain</strong> untuk mencatat dan mempelajari alternatif penyelesaian." },
          { num: "4. Konsolidasi Tim (3m)", icon: "fa-solid fa-arrows-to-circle", color: "emerald", text: "Tim berkumpul kembali di stan asal, memadukan wawasan baru, dan menyempurnakan jawaban kelompok." }
        ],
        steps_en: [
          { num: "1. Solution Design (5m)", icon: "fa-solid fa-paintbrush", color: "pink", text: "Teams create structured mathematical solution posters for their assigned station on poster paper." },
          { num: "2. Two Stay (Hosts)", icon: "fa-solid fa-house-user", color: "blue", text: "2 students act as <strong>station hosts</strong> to welcome guests and explain their team's methodology." },
          { num: "3. Two Stray (Visitors)", icon: "fa-solid fa-person-walking-luggage", color: "amber", text: "2 students <strong>visit other team stations</strong> to examine alternative calculus approaches." },
          { num: "4. Team Synthesis (3m)", icon: "fa-solid fa-arrows-to-circle", color: "emerald", text: "Team reconvenes, synthesizes external insights, and finalizes their comprehensive answer." }
        ],
        defaultSec: 720,
        quickTimes: [480, 720, 900],
        tip: "💡 Tips Guru: Sediakan sticky notes bagi tim tamu untuk meninggalkan apresiasi atau koreksi konstruktif di stan lain.",
        tip_en: "💡 Teacher's Tip: Provide sticky notes for visiting students to leave constructive feedback and peer appreciation."
      },
      "jigsaw": {
        id: "jigsaw",
        name: "Jigsaw Expert",
        name_en: "Jigsaw Expert",
        badge: "JIGSAW EXPERT COLLABORATION",
        badge_en: "JIGSAW EXPERT COLLABORATION",
        tag: "Tim Asal & 5 Meja Ahli (Kasus A-E)",
        tag_en: "Home Teams & 5 Expert Tables (Cases A-E)",
        icon: "fa-solid fa-puzzle-piece",
        color: "indigo",
        title: "Spesialisasi 5 Sub-Kasus di Meja Ahli & Peer Teaching",
        title_en: "5 Sub-Problem Specialization & Peer Teaching",
        steps: [
          { num: "1. Pembagian 5 Sub-Kasus", icon: "fa-solid fa-diagram-project", color: "indigo", text: "Setiap anggota tim asal memilih satu sub-kasus spesifik: <strong>Kasus A, B, C, D, atau E</strong>." },
          { num: "2. Diskusi 5 Meja Ahli (5m)", icon: "fa-solid fa-user-graduate", color: "blue", text: "Siswa berkumpul di <strong>Meja Ahli masing-masing (Meja A s.d. E)</strong> menuntaskan pembedahan konsep dan strategi solusi." },
          { num: "3. Kembali Mengajar (6m)", icon: "fa-solid fa-person-chalkboard", color: "amber", text: "Setiap ahli kembali ke Tim Asal dan bergantian <strong>mengajarkan sub-kasus keahliannya</strong> ke rekan satu tim." },
          { num: "4. Rangkuman Utuh Tim", icon: "fa-solid fa-layer-group", color: "emerald", text: "Tim menyatukan kelima sub-kasus A-E menjadi satu kesimpulan besar yang terpadu dan utuh." }
        ],
        steps_en: [
          { num: "1. 5 Sub-Case Assignment", icon: "fa-solid fa-diagram-project", color: "indigo", text: "Each home team member chooses one specific sub-case: <strong>Case A, B, C, D, or E</strong>." },
          { num: "2. 5 Expert Tables (5m)", icon: "fa-solid fa-user-graduate", color: "blue", text: "Students meet at their respective <strong>Expert Tables (Table A to E)</strong> to master their specific mathematical challenge." },
          { num: "3. Return & Teach (6m)", icon: "fa-solid fa-person-chalkboard", color: "amber", text: "Each expert returns to their Home Team and takes turns <strong>teaching their solution</strong> to teammates." },
          { num: "4. Unified Team Synthesis", icon: "fa-solid fa-layer-group", color: "emerald", text: "The team integrates all five sub-cases A-E into one unified, multi-step calculus conclusion." }
        ],
        defaultSec: 720,
        quickTimes: [480, 720, 900],
        tip: "💡 Tips Guru: Kelilingi 5 meja ahli sebelum mereka kembali ke tim asal untuk memastikan tidak ada miskonsepsi rumus.",
        tip_en: "💡 Teacher's Tip: Circulate around all 5 expert tables before students return to ensure zero formula misconceptions."
      },
      "vnps": {
        id: "vnps",
        name: "Papan Vertikal",
        name_en: "Vertical Surfaces",
        badge: "BUILDING THINKING CLASSROOMS (BTC)",
        badge_en: "BUILDING THINKING CLASSROOMS (BTC)",
        tag: "1 Spidol Per Kelompok (Berdiri)",
        tag_en: "1 Marker per Group (Standing)",
        icon: "fa-solid fa-pen-to-square",
        color: "blue",
        title: "Eksplorasi Aktif Berdiri di Papan Tulis Vertikal",
        title_en: "Active Standing Problem Solving on Vertical Surfaces (VNPS)",
        steps: [
          { num: "1. Tim Acak Berdiri (3-4)", icon: "fa-solid fa-dice", color: "blue", text: "Semua anggota <strong>berdiri aktif</strong> menghadap papan vertikal (VNPS), tidak ada yang duduk." },
          { num: "2. Aturan 1 Spidol", icon: "fa-solid fa-pen-fancy", color: "amber", text: "Pemegang spidol hanya menuliskan <strong>ide rekannya</strong>. Spidol wajib bergiliran antar anggota." },
          { num: "3. Eksplorasi Bersama", icon: "fa-solid fa-brain", color: "emerald", text: "Diskusikan strategi, coba alternatif rumus, dan buktikan kebenaran solusi secara bersama." },
          { num: "4. Boleh Intip Ide Tim Lain", icon: "fa-solid fa-binoculars", color: "purple", text: "Jika tim mengalami kebuntuan (*stuck*), boleh melihat cara kerja papan tim sebelah." }
        ],
        steps_en: [
          { num: "1. Random Standing Teams", icon: "fa-solid fa-dice", color: "blue", text: "All group members <strong>stand actively</strong> facing vertical boards; no sitting down." },
          { num: "2. One-Marker Rule", icon: "fa-solid fa-pen-fancy", color: "amber", text: "The marker holder only writes <strong>peer ideas</strong>. The marker must rotate continuously among all members." },
          { num: "3. Collective Exploration", icon: "fa-solid fa-brain", color: "emerald", text: "Discuss strategies, test calculus identities, and prove solutions together." },
          { num: "4. Peer Idea Borrowing", icon: "fa-solid fa-binoculars", color: "purple", text: "If a team is stuck, members are encouraged to glance at adjacent boards for fresh mathematical insights." }
        ],
        defaultSec: 900,
        quickTimes: [600, 900, 1200],
        tip: "💡 Tips Guru: Jangan menjawab 'benar/salah' secara langsung; lemparkan pertanyaan pemantik untuk memicu penalaran mandiri.",
        tip_en: "💡 Teacher's Tip: Avoid giving direct answers; ask probing questions to stimulate independent mathematical thinking."
      },
      "speed_dating": {
        id: "speed_dating",
        name: "Speed Dating",
        name_en: "Speed Dating",
        badge: "TEAM SPEED DATING & ROTASI KILAT",
        badge_en: "TEAM SPEED DATING & RAPID ROTATION",
        tag: "Dua Baris Meja Berhadapan",
        tag_en: "Two Facing Rows of Desks",
        icon: "fa-solid fa-bolt",
        color: "rose",
        title: "Rotasi Pasangan Kilat & Adu Solusi Cepat",
        title_en: "Rapid Partner Rotation & High-Speed Problem Solving",
        steps: [
          { num: "1. Meja Berhadapan", icon: "fa-solid fa-table-cells-large", color: "rose", text: "Siswa duduk di dua baris meja berhadapan (Baris Dalam & Baris Luar)." },
          { num: "2. Adu Solusi (3m)", icon: "fa-solid fa-stopwatch-20", color: "amber", text: "Siswa Baris Dalam menjelaskan strategi penyelesaian soal kepada rekan di hadapannya." },
          { num: "3. Rotasi 1 Kursi", icon: "fa-solid fa-rotate-right", color: "blue", text: "Peluit berbunyi! Siswa Baris Luar <strong>bergeser 1 kursi ke kanan</strong> menemui pasangan baru." },
          { num: "4. Tantangan Baru (3m)", icon: "fa-solid fa-fire-flame-curved", color: "emerald", text: "Pasangan baru saling memecahkan variasi soal tantangan tingkat lanjut." }
        ],
        steps_en: [
          { num: "1. Facing Desks", icon: "fa-solid fa-table-cells-large", color: "rose", text: "Students sit in two facing rows of desks (Inside Row & Outside Row)." },
          { num: "2. Solution Exchange (3m)", icon: "fa-solid fa-stopwatch-20", color: "amber", text: "Inside row students explain their problem-solving strategy to the partner facing them." },
          { num: "3. Rotate 1 Seat", icon: "fa-solid fa-rotate-right", color: "blue", text: "Chime rings! Outside row students <strong>shift 1 seat to the right</strong> to meet a new partner." },
          { num: "4. Next Challenge (3m)", icon: "fa-solid fa-fire-flame-curved", color: "emerald", text: "New pairs solve the next tier extension challenge together." }
        ],
        defaultSec: 480,
        quickTimes: [240, 480, 720],
        tip: "💡 Tips Guru: Gunakan peluit atau lonceng interval tepat setiap 3 menit untuk memandu rotasi tempat duduk secara tertib.",
        tip_en: "💡 Teacher's Tip: Use a sharp timer chime every 3 minutes to keep rotations crisp, orderly, and energetic."
      }
    };

    function getDefaultPedagogyForMeeting(mId, mode) {
      // EXPLICIT PEDAGOGY MAPPING PER MEETING — differentiated by subject mode
      if (mode === 'wajib') {
        const wajibMap = {
          'P01': 'tps',          // Aturan dasar → TPS (berpasangan bahas kasus sederhana)
          'P02': 'rally_coach',  // Permutasi → Rally Coach (langkah berurutan bergantian)
          'P03': 'nht',          // Permutasi siklis/sama → NHT (pastikan semua paham rumus)
          'P04': 'tps',          // Kombinasi → TPS (bandingkan C vs P bersama)
          'P05': 'gallery_walk', // Peluang + frekuensi harapan → Gallery Walk (data lapangan)
          'P06': 'jigsaw',       // Peluang majemuk → Jigsaw (Gabungan/Irisan/Bersyarat/Bebas)
          'P07': 'rally_coach',  // Peluang bersyarat → Rally Coach (hitung bertahap)
          'P08': 'speed_dating', // Review Bab 1 → Speed Dating (kuis cepat rotasi)
          'P09': 'vnps',         // Jarak titik-garis → VNPS (eksplorasi diagram 3D berdiri)
          'P10': 'gallery_walk', // Jarak garis-bidang → Gallery Walk (pameran diagram 3D)
          'P11': 'nht',          // Sudut antar bidang → NHT (semua paham definisi sudut dihedral)
          'P12': 'jigsaw',       // Volume dan luas permukaan → Jigsaw (Kubus/Balok/Prisma/Limas)
          'P13': 'tps',          // Proyeksi titik & garis → TPS (bahas bareng)
          'P14': 'vnps',         // Review dimensi tiga → VNPS (eksplorasi komprehensif)
          'P15': 'rally_coach',  // Statistik deskriptif → Rally Coach (hitung mean/median bergilir)
          'P16': 'gallery_walk', // Penyajian data → Gallery Walk (pameran diagram batang/pie/ogive)
          'P17': 'nht',          // Ukuran penyebaran → NHT (varians & simpangan baku bersama)
          'P18': 'tps',          // Korelasi Pearson → TPS (hitung r berpasangan)
          'P19': 'jigsaw',       // Regresi linier → Jigsaw (a, b, r, r², prediksi per ahli)
          'P20': 'speed_dating', // Statistika bivariat → Speed Dating (latih interpretasi cepat)
          'P21': 'vnps'          // Review Wajib → VNPS (eksplorasi ujian final)
        };
        if (wajibMap[mId]) return wajibMap[mId];
      } else if (mode === 'minat') {
        const minatMap = {
          'P01': 'tps',          // Persamaan lingkaran O(0,0) → TPS
          'P02': 'rally_coach',  // Lingkaran P(a,b) → Rally Coach (lengkapi kuadrat berurutan)
          'P03': 'nht',          // Bentuk umum → NHT
          'P04': 'gallery_walk', // Kedudukan titik → Gallery Walk (diagram koordinat)
          'P05': 'jigsaw',       // Kedudukan garis → Jigsaw (D>0, D=0, D<0 per ahli)
          'P06': 'vnps',         // PGSL titik pada lingkaran → VNPS (eksplorasi berdiri)
          'P07': 'tps',          // PGSL titik di luar → TPS
          'P08': 'rally_coach',  // Dua lingkaran → Rally Coach
          'P09': 'nht',          // Limit aljabar → NHT
          'P10': 'tps',          // Limit 0/0 → TPS
          'P11': 'gallery_walk', // Limit di ketakhinggaan → Gallery Walk (grafik asimtot)
          'P12': 'jigsaw',       // Limit trigonometri → Jigsaw (sin x/x, cos, identitas)
          'P13': 'rally_coach',  // Limit trigonometri lanjut → Rally Coach
          'P14': 'vnps',         // Limit x→c trigonometri → VNPS
          'P15': 'speed_dating', // Review limit → Speed Dating
          'P16': 'tps',          // Turunan dasar → TPS
          'P17': 'rally_coach',  // Aturan rantai → Rally Coach (langkah f(g(x)) bergilir)
          'P18': 'nht',          // Turunan trigonometri → NHT
          'P19': 'gallery_walk', // Kemonotonan & ekstrem → Gallery Walk (grafik fungsi)
          'P20': 'jigsaw',       // Optimasi → Jigsaw (4 soal optimasi per ahli)
          'P21': 'vnps',         // Turunan implisit → VNPS
          'P22': 'speed_dating', // Review turunan → Speed Dating
          'P23': 'tps',          // Integral dasar → TPS
          'P24': 'rally_coach',  // Integral trigonometri → Rally Coach
          'P25': 'nht',          // Integral substitusi → NHT
          'P26': 'jigsaw',       // Integral parsial → Jigsaw
          'P27': 'gallery_walk', // Luas daerah → Gallery Walk (grafik area)
          'P28': 'vnps',         // Volume benda putar → VNPS
          'P29': 'speed_dating', // Integral tentu campuran → Speed Dating
          'P30': 'tps'           // Review integral → TPS
        };
        if (minatMap[mId]) return minatMap[mId];
      } else if (mode === 'clil') {
        const clilMap = {
          'P25': 'rally_coach',  // CLIL P25 → Rally Coach
          'P26': 'jigsaw',       // CLIL P26 → Jigsaw
          'P27': 'gallery_walk', // CLIL P27 → Gallery Walk
          'P28': 'vnps',         // CLIL P28 → VNPS
          'P29': 'nht',          // CLIL P29 → NHT
          'P30': 'speed_dating'  // CLIL P30 → Speed Dating
        };
        if (clilMap[mId]) return clilMap[mId];
      }

      // Fallback: pedagogically-informed cycle
      const pNum = parseInt(mId.replace(/\D/g, '')) || 1;
      const defaultCycle = ['tps', 'rally_coach', 'nht', 'gallery_walk', 'jigsaw', 'vnps', 'speed_dating'];
      return defaultCycle[(pNum - 1) % defaultCycle.length];
    }

    function formatTimeSec(sec) {
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    function switchSlidePedagogy(key) {
      window.currentMeetingPedagogy = key;
      renderSlide();
      if (window.renderMathInElement) {
        renderMathInElement(document.getElementById('slide-body'), {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ],
          throwOnError: false
        });
      }
    }

    function renderSlide8PedagogyBody(m, isClil, selectedKey) {
      const ped = PEDAGOGY_METHODS[selectedKey] || PEDAGOGY_METHODS['tps'];
      const keys = Object.keys(PEDAGOGY_METHODS);

      const title = isClil ? (ped.title_en || ped.title) : ped.title;
      const badge = isClil ? (ped.badge_en || ped.badge) : ped.badge;
      const tag = isClil ? (ped.tag_en || ped.tag) : ped.tag;
      const steps = isClil ? (ped.steps_en || ped.steps) : ped.steps;
      const tip = isClil ? (ped.tip_en || ped.tip) : ped.tip;

      const switcherHtml = keys.map(k => {
        const item = PEDAGOGY_METHODS[k];
        const isActive = k === ped.id;
        const displayName = isClil ? (item.name_en || item.name) : item.name;
        const activeClass = isActive 
          ? 'bg-amber-500 text-slate-950 font-black shadow-md border-amber-400 ring-1 ring-amber-300/60' 
          : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700 hover:text-white border-slate-700';
        return `
          <button onclick="switchSlidePedagogy('${k}')" class="px-2.5 py-1 rounded-xl text-[10px] md:text-xs font-bold transition-all shrink-0 border inline-flex items-center gap-1.5 whitespace-nowrap active:scale-95 ${activeClass} cursor-pointer">
            <i class="${item.icon}"></i>
            <span>${displayName}</span>
          </button>
        `;
      }).join('');

      const cardsHtml = steps.map(step => `
        <div class="p-2 bg-slate-800/90 rounded-xl border border-slate-700 space-y-0.5 shadow hover:border-slate-600 transition">
          <div class="flex items-start gap-1.5 text-${step.color}-400 font-bold text-[11px] leading-tight">
            <i class="${step.icon} mt-0.5 shrink-0"></i> <span>${step.num}</span>
          </div>
          <p class="text-[11px] text-slate-300 leading-snug">${step.text}</p>
        </div>
      `).join('');

      const timerButtonsHtml = ped.quickTimes.map(tSec => `
        <button onclick="startBtcTimer(${tSec})" class="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-bold transition cursor-pointer">
          ${Math.floor(tSec/60)}m
        </button>
      `).join('');

      // Method-Specific Adaptive Task Configuration & Badges
      const METHOD_CONFIG = {
        'jigsaw': {
          title: isClil ? '5 Expert Sub-Problem Stations (Cases A to E):' : '5 Sub-Kasus Meja Ahli Jigsaw (Kasus A s.d. E):',
          count: 5,
          labels: isClil 
            ? ['Expert Table A (Case A: Theory & Foundations)', 'Expert Table B (Case B: Procedural Calculations)', 'Expert Table C (Case C: Multi-Step Analysis)', 'Expert Table D (Case D: Contextual Modeling)', 'Expert Table E (Case E: HOTS Proofs & Extensions)']
            : ['Meja Ahli A (Sub-Kasus A: Teori & Fondasi)', 'Meja Ahli B (Sub-Kasus B: Prosedur & Perhitungan Aljabar)', 'Meja Ahli C (Sub-Kasus C: Analisis Bertingkat & Sintesis)', 'Meja Ahli D (Sub-Kasus D: Masalah Terapan & Kontekstual)', 'Meja Ahli E (Sub-Kasus E: Tantangan HOTS & Pembuktian)'],
          colors: ['indigo', 'blue', 'amber', 'emerald', 'purple']
        },
        'rally_coach': {
          title: isClil ? '3 Rally Coach Problems (Partner A & Partner B):' : '3 Soal Alur Rally Coach (Partner A & Partner B):',
          count: 3,
          labels: isClil 
            ? ['Problem 1: Partner A Solves (Partner B Coaches)', 'Problem 2: Partner B Solves (Partner A Coaches - Switch Roles)', 'Problem 3: Joint Verification & Final Validation (Partner A & B)']
            : ['Soal 1: Giliran Partner A Mengerjakan (Partner B Melatih)', 'Soal 2: Giliran Partner B Mengerjakan (Partner A Melatih - Tukar Peran)', 'Soal 3: Tantangan Verifikasi Bersama (Partner A & B)'],
          colors: ['emerald', 'blue', 'purple']
        },
        'tps': {
          title: isClil ? '3 Think-Pair-Share Structured Phases:' : '3 Tahapan Eksplorasi Think-Pair-Share:',
          count: 3,
          labels: isClil 
            ? ['Phase 1 • Think (Individual & Silent): Conceptual Exploration', 'Phase 2 • Pair (Partner Discussion): Analysis & Comparative Proof', 'Phase 3 • Share (Whole-Class Presentation): Synthesis & HOTS Challenge']
            : ['Tahap 1 • Think (Mandiri & Hening): Soal Eksplorasi Konsep', 'Tahap 2 • Pair (Diskusi Berpasangan): Soal Analisis & Komparasi Alur Rumus', 'Tahap 3 • Share (Presentasi Kelas): Soal Sintesis & Tantangan HOTS'],
          colors: ['blue', 'amber', 'emerald']
        },
        'gallery_walk': {
          title: isClil ? '3 Gallery Walk Station Problems (Poster Stations A, B, C):' : '3 Pos Stasiun Gallery Walk (Kertas Plano A, B, C):',
          count: 3,
          labels: isClil 
            ? ['Station 1 (Poster A): Conceptual Exploration Challenge', 'Station 2 (Poster B): Step-by-Step Analytical Problem', 'Station 3 (Poster C): Synthesis & Comparative HOTS Challenge']
            : ['Pos / Stasiun 1 (Kertas Plano A): Masalah Eksplorasi Konsep', 'Pos / Stasiun 2 (Kertas Plano B): Masalah Analisis & Perhitungan Bertahap', 'Pos / Stasiun 3 (Kertas Plano C): Masalah Sintesis & Tantangan HOTS'],
          colors: ['pink', 'blue', 'emerald']
        },
        'nht': {
          title: isClil ? '3 Numbered Heads Together Problems:' : '3 Kasus Penyelidikan Numbered Heads Together:',
          count: 3,
          labels: isClil 
            ? ['Case 1: Team Exploration (Number 1 & 2 Prepare)', 'Case 2: Multi-Step Analysis (Number 3 & 4 Prepare)', 'Case 3: Master Challenge (All Numbers Must Master)']
            : ['Kasus 1: Eksplorasi Tim (Nomor 1 & 2 Bersiap Jawab)', 'Kasus 2: Analisis Bertahap (Nomor 3 & 4 Bersiap Jawab)', 'Kasus 3: Tantangan Master (Semua Nomor Wajib Paham)'],
          colors: ['cyan', 'amber', 'purple']
        },
        'vnps': {
          title: isClil ? '3 Vertical Surfaces Standing Team Challenges:' : '3 Level Tantangan Berdiri di Papan Vertikal (VNPS):',
          count: 3,
          labels: isClil 
            ? ['Level 1: Standing Team Warm-up & Exploration', 'Level 2: Progressive Challenge (1 Marker Rotates)', 'Level 3: Non-Routine HOTS Extension & Proof']
            : ['Level 1: Pemanasan Tim di Papan Vertikal', 'Level 2: Tantangan Bertingkat (1 Spidol Bergantian)', 'Level 3: Ekstensi Non-Rutin & Sintesis HOTS'],
          colors: ['blue', 'amber', 'purple']
        },
        'speed_dating': {
          title: isClil ? '3 High-Speed Rotation Rounds (3 mins each):' : '3 Babak Tantangan Rotasi Kilat (3 Menit Per Babak):',
          count: 3,
          labels: isClil 
            ? ['Round 1: Initial Partner Challenge (3m)', 'Round 2: Rotation 1 Partner Challenge (3m)', 'Round 3: Rotation 2 Master Challenge (3m)']
            : ['Babak 1: Tantangan Pasangan Awal (3m)', 'Babak 2: Tantangan Pasangan Rotasi 1 (3m)', 'Babak 3: Tantangan Pasangan Rotasi 2 (3m)'],
          colors: ['rose', 'amber', 'emerald']
        }
      };

      const taskCfg = METHOD_CONFIG[selectedKey] || METHOD_CONFIG['tps'];
      const rawCases = m.collab_cases || m.collab_3_soal || [];
      const questionsToRender = rawCases.slice(0, taskCfg.count);

      const renderedQuestionsHtml = questionsToRender.map((qText, qIdx) => {
        const cleanQ = qText.replace(/^\[[A-Za-z0-9_.-]+\]\s*/, '').replace(/^(?:Kelompok\s+[A-Za-z0-9_]+|Tantangan\s+\d+|Soal\s+[A-Z0-9]+|Kasus\s+[A-Z0-9]+|Level\s+\d+|Babak\s+\d+|Meja\s+Ahli\s+[A-Z]|Pos\s+\d+|Stasiun\s+\d+)\s*:\s*/i, '');
        const label = taskCfg.labels[qIdx] || `Tantangan ${qIdx + 1}`;
        const color = taskCfg.colors[qIdx] || 'amber';
        return `
          <div class="p-2.5 bg-[#050D1A] rounded-xl border border-slate-700/80 hover:border-amber-500/50 shadow-inner space-y-1.5 transition">
            <span class="inline-block px-2 py-0.5 rounded-lg bg-${color}-500/20 text-${color}-300 font-mono font-bold text-[10px] md:text-[11px] border border-${color}-400/30 leading-tight">
              ${label}
            </span>
            <div class="text-xs md:text-sm font-semibold text-slate-100 leading-relaxed">
              ${cleanQ}
            </div>
          </div>
        `;
      }).join('');

      return `
        <div class="h-full min-h-0 flex flex-col gap-2 md:gap-2.5 p-3 md:p-5 bg-slate-900 rounded-2xl border border-blue-500/40 shadow-xl overflow-y-auto kolab-scroll">
          <!-- Top Header & Method Switcher -->
          <div class="space-y-2 border-b border-slate-800 pb-2 shrink-0">
            <div class="flex items-center justify-between gap-2.5">
              <div class="flex items-center gap-2 min-w-0">
                <span class="px-2.5 py-0.5 bg-blue-500/20 text-blue-300 text-[10px] md:text-xs font-black rounded-full border border-blue-400/40 shrink-0 flex items-center gap-1.5">
                  <i class="${ped.icon}"></i> ${badge}
                </span>
                <h3 class="text-xs md:text-sm font-extrabold text-white truncate">${title}</h3>
              </div>
              <span class="text-[10px] text-amber-400 font-mono font-bold bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-400/30 shrink-0">
                ${tag}
              </span>
            </div>

            <!-- Active Method Switcher Bar -->
            <div class="flex items-center flex-wrap gap-x-1.5 gap-y-1">
              <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider shrink-0 mr-0.5 flex items-center gap-1">
                <i class="fa-solid fa-wand-magic-sparkles text-amber-400"></i> ${isClil ? 'Select Pedagogy:' : 'Pilih Metode:'}
              </span>
              ${switcherHtml}
            </div>
          </div>

          <!-- ISI UTAMA: kasus kolaborasi (kiri) + prosedur (kanan) -->
          <div class="flex-1 min-h-0 lg:min-h-[11rem] flex flex-col lg:flex-row gap-2 md:gap-2.5">

            <!-- Collaborative Challenge Problems Box -->
            <div class="p-3 md:p-3.5 bg-slate-950 rounded-2xl border border-amber-400/40 shadow-inner flex flex-col gap-2 kolab-fade shrink-0 lg:w-[56%] lg:h-full lg:min-h-0">
              <div class="flex items-center justify-between flex-wrap gap-x-2 gap-y-1 border-b border-slate-800/80 pb-1.5 shrink-0">
                <span class="text-[10px] md:text-xs text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <i class="fa-solid fa-fire text-amber-500"></i> ${isClil ? 'CASE SCENARIO &middot; REAL PROBLEMS' : 'SKENARIO KASUS &middot; MASALAH NYATA'}
                </span>
                <span class="text-[10px] text-slate-400 font-mono italic">${taskCfg.title.replace(/:$/, '')}</span>
              </div>
              <div class="space-y-2 flex-1 lg:min-h-[6rem] overflow-y-auto kolab-scroll pb-3">
                ${renderedQuestionsHtml}
              </div>
            </div>

            <!-- Actionable Protocol Cards -->
            <div class="p-3 md:p-3.5 bg-slate-950 rounded-2xl border border-blue-500/30 shadow-inner flex flex-col gap-1.5 kolab-fade shrink-0 lg:flex-1 lg:min-w-0 lg:h-full lg:min-h-0">
              <span class="text-[10px] md:text-xs font-bold text-blue-300 uppercase tracking-wide flex items-center gap-1.5 border-b border-slate-800/80 pb-1.5 shrink-0">
                <i class="fa-solid fa-users-gear text-blue-400"></i> ${isClil ? 'COLLABORATION SYNTAX GUIDE' : 'PANDUAN SINTAKS KOLABORASI'}
                <span class="ml-auto pl-2 min-w-0 truncate text-[10px] font-mono font-normal normal-case text-slate-400 italic tracking-normal">${isClil ? (ped.name_en || ped.name) : ped.name}</span>
              </span>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 content-start flex-1 lg:min-h-[5rem] overflow-y-auto kolab-scroll pb-3">
                ${cardsHtml}
              </div>
            </div>

          </div>

          <!-- Bottom Bar: Facilitation Tips & Timer -->
          <div class="flex flex-col lg:flex-row lg:items-center justify-between bg-slate-950 p-2.5 md:p-3 rounded-2xl border border-slate-800 gap-2 shrink-0">
            <div class="text-[11px] text-amber-300/90 font-medium leading-snug flex-1 min-w-0">
              ${tip}
            </div>
            <div class="flex items-center justify-end gap-2 shrink-0">
              <div class="flex items-center gap-1.5 mr-1">
                <i class="fa-solid fa-stopwatch text-amber-400"></i>
                <span id="btc-timer-display" class="text-sm md:text-base font-mono font-black text-white">${formatTimeSec(ped.defaultSec)}</span>
              </div>
              <div class="flex items-center gap-1.5">
                ${timerButtonsHtml}
                <button onclick="startBtcTimer(${ped.defaultSec})" class="px-3 py-1 bg-amber-500 hover:bg-emerald-400 text-slate-950 rounded-lg text-xs font-black shadow active:scale-95 transition flex items-center gap-1 cursor-pointer">
                  <i class="fa-solid fa-play text-[10px]"></i> <span>${isClil ? 'Start' : 'Mulai'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

        // DYNAMIC MULTI-DIAGRAM SVG VISUALIZATION ENGINE (HOOK, TOOLKIT, EX1, EX2, EX3)
    // UNIVERSAL MATHEMATICAL TABLE FORMATTER (CONVERTS BRACKETED DATA TO MODERN HTML TABLES)
    function formatMathTables(rawText) {
      if (!rawText) return '';
      let text = rawText;
      
      const tableRegex = /(?:\[\s*(\d+(?:\.\d+)?(?:\s*[-–]\s*\d+(?:\.\d+)?)?)\s*:\s*(\d+(?:\.\d+)?)\s*\](?:\s*,\s*|\s+)?)+/g;
      
      text = text.replace(tableRegex, (match) => {
        const itemRegex = /\[\s*(\d+(?:\.\d+)?(?:\s*[-–]\s*\d+(?:\.\d+)?)?)\s*:\s*(\d+(?:\.\d+)?)\s*\]/g;
        let rowsHtml = '';
        let itemMatch;
        while ((itemMatch = itemRegex.exec(match)) !== null) {
          const interval = itemMatch[1].replace('-', ' – ').trim();
          const freq = itemMatch[2].trim();
          rowsHtml += `
            <tr class="hover:bg-slate-800/60 transition border-b border-slate-800 last:border-0">
              <td class="py-2 px-5 border-r border-slate-800 font-mono font-bold text-slate-200 text-center">${interval}</td>
              <td class="py-2 px-5 font-mono font-black text-amber-300 text-center">${freq}</td>
            </tr>
          `;
        }
        return `
          <div class="my-3 overflow-x-auto flex justify-center">
            <table class="w-full max-w-sm border-collapse border border-slate-700/80 bg-slate-950 rounded-2xl overflow-hidden shadow-xl text-center text-xs">
              <thead>
                <tr class="bg-gradient-to-r from-slate-900 via-[#0B2545] to-slate-900 text-amber-400 font-bold border-b border-slate-700">
                  <th class="py-2.5 px-5 border-r border-slate-700 text-center"><i class="fa-solid fa-layer-group text-blue-400 mr-1.5"></i> Interval Nilai / Kelas</th>
                  <th class="py-2.5 px-5 text-center"><i class="fa-solid fa-chart-column text-amber-400 mr-1.5"></i> Frekuensi ($f_i$)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800">
                ${rowsHtml}
              </tbody>
            </table>
          </div>
        `;
      });
      return text;
    }

// CONTEXTUAL GEOMETRIC SVG ENGINE (STRICTLY FOR GENUINE GEOMETRIC/SPATIAL CONCEPTS ONLY)
    function getTopicSvgDiagram(mId, mode, context = 'toolkit') {
      const pNum = parseInt(mId.replace(/\D/g, '')) || 1;
      const w = 220, h = 140;
      const uid = `${mode}_${mId}_${context}_${Math.floor(Math.random()*1000)}`;
      const baseAttrs = `width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg"`;
      
      const drawGrid = () => `
        <defs>
          <pattern id="grid_${uid}" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E293B" stroke-width="0.8"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid_${uid})" opacity="0.6"/>
      `;

      const drawAxes = (cx = 110, cy = 70) => `
        <line x1="15" y1="${cy}" x2="205" y2="${cy}" stroke="#475569" stroke-width="1.2"/>
        <polygon points="205,${cy} 199,${cy-3} 199,${cy+3}" fill="#475569"/>
        <line x1="${cx}" y1="125" x2="${cx}" y2="15" stroke="#475569" stroke-width="1.2"/>
        <polygon points="${cx},15 ${cx-3},21 ${cx+3},21" fill="#475569"/>
        <text x="202" y="${cy-5}" fill="#94A3B8" font-size="8" font-family="monospace">x</text>
        <text x="${cx+6}" y="18" fill="#94A3B8" font-size="8" font-family="monospace">y</text>
        <circle cx="${cx}" cy="${cy}" r="2" fill="#64748B"/>
      `;

      // -------------------------------------------------------------
      // 1. MATEMATIKA WAJIB: ONLY 3D DIMENSI TIGA (P09-P14) & NORMAL/REGRESI (P19-P20)
      // -------------------------------------------------------------
      if (mode === 'wajib') {
        if (pNum >= 9 && pNum <= 14) {
          const drawCube3D = (subTitle, highlightElements) => `
            <svg ${baseAttrs}>${drawGrid()}
              <text x="110" y="15" text-anchor="middle" fill="#F59E0B" font-size="8.5" font-weight="bold">${subTitle}</text>
              <line x1="60" y1="95" x2="105" y2="75" stroke="#475569" stroke-width="1" stroke-dasharray="2,2"/>
              <line x1="105" y1="75" x2="165" y2="75" stroke="#475569" stroke-width="1" stroke-dasharray="2,2"/>
              <line x1="105" y1="75" x2="105" y2="35" stroke="#475569" stroke-width="1" stroke-dasharray="2,2"/>
              <polygon points="60,95 120,95 165,75 165,35 105,35 60,55" fill="#1E293B" opacity="0.4"/>
              <line x1="60" y1="95" x2="120" y2="95" stroke="#3B82F6" stroke-width="1.5"/>
              <line x1="120" y1="95" x2="165" y2="75" stroke="#3B82F6" stroke-width="1.5"/>
              <line x1="60" y1="55" x2="120" y2="55" stroke="#3B82F6" stroke-width="1.5"/>
              <line x1="120" y1="55" x2="165" y2="35" stroke="#3B82F6" stroke-width="1.5"/>
              <line x1="165" y1="35" x2="105" y2="35" stroke="#3B82F6" stroke-width="1.5"/>
              <line x1="105" y1="35" x2="60" y2="55" stroke="#3B82F6" stroke-width="1.5"/>
              <line x1="60" y1="95" x2="60" y2="55" stroke="#3B82F6" stroke-width="1.5"/>
              <line x1="120" y1="95" x2="120" y2="55" stroke="#3B82F6" stroke-width="1.5"/>
              <line x1="165" y1="75" x2="165" y2="35" stroke="#3B82F6" stroke-width="1.5"/>
              <text x="54" y="99" fill="#93C5FD" font-size="7" font-weight="bold">A</text>
              <text x="124" y="99" fill="#93C5FD" font-size="7" font-weight="bold">B</text>
              <text x="170" y="78" fill="#93C5FD" font-size="7" font-weight="bold">C</text>
              <text x="100" y="77" fill="#64748B" font-size="6">D</text>
              <text x="54" y="55" fill="#93C5FD" font-size="7" font-weight="bold">E</text>
              <text x="124" y="55" fill="#93C5FD" font-size="7" font-weight="bold">F</text>
              <text x="170" y="35" fill="#93C5FD" font-size="7" font-weight="bold">G</text>
              <text x="102" y="32" fill="#93C5FD" font-size="7" font-weight="bold">H</text>
              ${highlightElements}
            </svg>
          `;

          if (pNum === 10) { // Jarak Titik ke Titik
            if (context === 'ex1') {
              return drawCube3D("Contoh 1: Diagonal Sisi AC = a√2", `
                <line x1="60" y1="95" x2="165" y2="75" stroke="#EF4444" stroke-width="2" stroke-dasharray="3,2"/>
                <text x="110" y="90" fill="#EF4444" font-size="7.5" font-weight="bold">AC = 8√2 cm</text>
              `);
            } else if (context === 'ex2') {
              return drawCube3D("Contoh 2: Diagonal Ruang AG = a√3", `
                <line x1="60" y1="95" x2="170" y2="35" stroke="#10B981" stroke-width="2.2"/>
                <text x="110" y="60" fill="#34D399" font-size="8" font-weight="bold">AG = 8√3 cm</text>
              `);
            } else if (context === 'ex3') {
              return drawCube3D("Contoh 3: Jarak Titik Tengah P ke Q", `
                <circle cx="90" cy="95" r="3" fill="#F59E0B"/><text x="90" y="106" fill="#F59E0B" font-size="6.5">P</text>
                <circle cx="137" cy="35" r="3" fill="#F59E0B"/><text x="137" y="28" fill="#F59E0B" font-size="6.5">Q</text>
                <line x1="90" y1="95" x2="137" y2="35" stroke="#F59E0B" stroke-width="1.8" stroke-dasharray="3,2"/>
              `);
            }
            return drawCube3D("The Toolkit: Diagonal Kubus ABCD.EFGH", `
              <line x1="60" y1="95" x2="165" y2="75" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="2,2"/>
              <line x1="60" y1="95" x2="170" y2="35" stroke="#10B981" stroke-width="2"/>
            `);
          }

          if (pNum === 11) { // Jarak Titik ke Garis
            if (context === 'ex1') {
              return drawCube3D("Contoh 1: Jarak A ke Garis BD", `
                <line x1="120" y1="95" x2="105" y2="75" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="2,2"/>
                <line x1="60" y1="95" x2="112" y2="85" stroke="#EF4444" stroke-width="2"/>
                <circle cx="112" cy="85" r="2.5" fill="#EF4444"/><text x="118" y="87" fill="#EF4444" font-size="6">O</text>
              `);
            } else if (context === 'ex2') {
              return drawCube3D("Contoh 2: Jarak E ke Garis BD", `
                <polygon points="60,55 120,95 105,75" fill="#3B82F6" opacity="0.25"/>
                <line x1="60" y1="55" x2="112" y2="85" stroke="#10B981" stroke-width="2"/>
              `);
            } else if (context === 'ex3') {
              return drawCube3D("Contoh 3: Jarak C ke Garis AG", `
                <line x1="60" y1="95" x2="170" y2="35" stroke="#3B82F6" stroke-width="1.5"/>
                <line x1="165" y1="75" x2="115" y2="65" stroke="#EF4444" stroke-width="2" stroke-dasharray="2,2"/>
              `);
            }
            return drawCube3D("The Toolkit: Proyeksi Titik ke Garis", `
              <line x1="60" y1="55" x2="112" y2="85" stroke="#EF4444" stroke-width="2"/>
            `);
          }

          if (pNum === 12) { // Jarak Titik ke Bidang
            return drawCube3D("Jarak Titik ke Bidang BDG (1/3 & 2/3)", `
              <polygon points="120,95 105,75 170,35" fill="#F59E0B" opacity="0.3" stroke="#F59E0B" stroke-width="1.2"/>
              <line x1="165" y1="75" x2="60" y2="55" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="2,2"/>
            `);
          }

          if (context === 'toolkit') {
            return drawCube3D(`Kubus Referensi 3D ${mId}`, ``);
          }
        }

        if (pNum === 19 && context === 'toolkit') { // Kurva Distribusi Normal
          return `<svg ${baseAttrs}>${drawGrid()}${drawAxes(110, 110)}
            <text x="110" y="15" text-anchor="middle" fill="#F59E0B" font-size="8.5" font-weight="bold">Distribusi Normal Baku (Bell Curve)</text>
            <path d="M 20,110 Q 70,110 90,60 Q 110,15 130,60 Q 150,110 200,110" fill="none" stroke="#3B82F6" stroke-width="2"/>
            <line x1="110" y1="20" x2="110" y2="110" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="2,2"/>
            <text x="110" y="125" text-anchor="middle" fill="#FCD34D" font-size="8" font-family="monospace">μ ± 1σ (68,2%) | μ ± 2σ (95,4%)</text>
          </svg>`;
        }

        if (pNum === 20 && context === 'toolkit') { // Scatter Plot & Regresi
          return `<svg ${baseAttrs}>${drawGrid()}${drawAxes(30, 115)}
            <text x="110" y="15" text-anchor="middle" fill="#F59E0B" font-size="8.5" font-weight="bold">Diagram Pencar & Garis Regresi</text>
            <circle cx="45" cy="100" r="2.5" fill="#60A5FA"/><circle cx="75" cy="85" r="2.5" fill="#60A5FA"/>
            <circle cx="110" cy="65" r="2.5" fill="#60A5FA"/><circle cx="150" cy="42" r="2.5" fill="#60A5FA"/>
            <circle cx="185" cy="25" r="2.5" fill="#60A5FA"/>
            <line x1="35" y1="108" x2="195" y2="20" stroke="#F59E0B" stroke-width="2"/>
            <text x="110" y="130" text-anchor="middle" fill="#94A3B8" font-size="7.5">Model Regresi Linier: ŷ = a + bx</text>
          </svg>`;
        }

        return null;
      }

      // -------------------------------------------------------------
      // 2. MATEMATIKA PEMINATAN: GEOMETRI LINGKARAN (P01-P09) & KALKULUS AREA/VOLUME (P29-P30)
      // -------------------------------------------------------------
      if (mode === 'minat') {
        if (pNum >= 1 && pNum <= 9) {
          if (pNum === 1) { // Lingkaran Pusat O(0,0)
            if (context === 'ex1') {
              return `<svg ${baseAttrs}>${drawGrid()}${drawAxes(110, 70)}
                <text x="110" y="15" text-anchor="middle" fill="#F59E0B" font-size="8.5" font-weight="bold">Lingkaran x² + y² = 25 (r = 5)</text>
                <circle cx="110" cy="70" r="40" fill="none" stroke="#3B82F6" stroke-width="2"/>
                <line x1="110" y1="70" x2="134" y2="38" stroke="#10B981" stroke-width="1.8"/>
                <circle cx="134" cy="38" r="3" fill="#EF4444"/><text x="142" y="36" fill="#F87171" font-size="7.5" font-weight="bold">P(3, 4)</text>
              </svg>`;
            } else if (context === 'ex2') {
              return `<svg ${baseAttrs}>${drawGrid()}${drawAxes(110, 70)}
                <text x="110" y="15" text-anchor="middle" fill="#F59E0B" font-size="8.5" font-weight="bold">Menyinggung Garis 3x - 4y + 20 = 0</text>
                <circle cx="110" cy="70" r="32" fill="none" stroke="#3B82F6" stroke-width="2"/>
                <line x1="40" y1="120" x2="180" y2="20" stroke="#F59E0B" stroke-width="1.8"/>
                <line x1="110" y1="70" x2="85" y2="51" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="2,2"/>
              </svg>`;
            } else if (context === 'ex3') {
              return `<svg ${baseAttrs}>${drawGrid()}${drawAxes(110, 70)}
                <text x="110" y="15" text-anchor="middle" fill="#F59E0B" font-size="8.5" font-weight="bold">Dua Lingkaran Konsentris Sepusat</text>
                <circle cx="110" cy="70" r="25" fill="none" stroke="#3B82F6" stroke-width="1.5"/>
                <circle cx="110" cy="70" r="48" fill="none" stroke="#10B981" stroke-width="2"/>
              </svg>`;
            }
            if (context === 'toolkit') {
              return `<svg ${baseAttrs}>${drawGrid()}${drawAxes(110, 70)}
                <text x="110" y="15" text-anchor="middle" fill="#F59E0B" font-size="8.5" font-weight="bold">Persamaan Lingkaran Pusat O(0,0)</text>
                <circle cx="110" cy="70" r="42" fill="none" stroke="#3B82F6" stroke-width="2"/>
                <line x1="110" y1="70" x2="140" y2="40" stroke="#F59E0B" stroke-width="1.8"/>
                <text x="145" y="38" fill="#FCD34D" font-size="7.5">(x, y)</text>
                <text x="110" y="125" text-anchor="middle" fill="#FCD34D" font-size="8.5" font-weight="bold" font-family="monospace">x² + y² = r²</text>
              </svg>`;
            }
          }

          if (pNum === 6 && context === 'toolkit') {
            return `<svg ${baseAttrs}>${drawGrid()}${drawAxes(110, 70)}
              <text x="110" y="15" text-anchor="middle" fill="#F59E0B" font-size="8.5" font-weight="bold">Garis Singgung Metode Bagi Adil</text>
              <circle cx="110" cy="70" r="38" fill="none" stroke="#3B82F6" stroke-width="2"/>
              <line x1="45" y1="115" x2="175" y2="25" stroke="#F59E0B" stroke-width="2"/>
              <circle cx="137" cy="43" r="3" fill="#EF4444"/><text x="145" y="42" fill="#EF4444" font-size="7.5" font-weight="bold">T(x1, y1)</text>
            </svg>`;
          }

          if (pNum === 8 && context === 'toolkit') {
            return `<svg ${baseAttrs}>${drawGrid()}${drawAxes(110, 70)}
              <text x="110" y="15" text-anchor="middle" fill="#F59E0B" font-size="8.5" font-weight="bold">Titik Luar & Garis Kutub (Polar)</text>
              <circle cx="110" cy="70" r="35" fill="none" stroke="#3B82F6" stroke-width="2"/>
              <circle cx="180" cy="70" r="3.5" fill="#EF4444"/><text x="180" y="62" text-anchor="middle" fill="#EF4444" font-size="7.5" font-weight="bold">A</text>
              <line x1="180" y1="70" x2="135" y2="45" stroke="#F59E0B" stroke-width="1.5"/>
              <line x1="180" y1="70" x2="135" y2="95" stroke="#F59E0B" stroke-width="1.5"/>
              <line x1="135" y1="40" x2="135" y2="100" stroke="#10B981" stroke-width="2" stroke-dasharray="2,2"/>
            </svg>`;
          }

          if (context === 'toolkit') {
            return `<svg ${baseAttrs}>${drawGrid()}${drawAxes(110, 70)}
              <text x="110" y="15" text-anchor="middle" fill="#F59E0B" font-size="8.5" font-weight="bold">Geometri Analitik Lingkaran ${mId}</text>
              <circle cx="110" cy="70" r="38" fill="none" stroke="#3B82F6" stroke-width="2"/>
            </svg>`;
          }
        }

        if (pNum === 29 && context === 'toolkit') {
          return `<svg ${baseAttrs}>${drawGrid()}${drawAxes(30, 110)}
            <text x="110" y="15" text-anchor="middle" fill="#F59E0B" font-size="8.5" font-weight="bold">Luas Daerah Antara Dua Kurva</text>
            <path d="M 70,85 Q 110,40 150,85 Q 110,105 70,85 Z" fill="#10B981" opacity="0.4"/>
            <path d="M 50,105 Q 110,25 170,105" fill="none" stroke="#3B82F6" stroke-width="2"/>
            <path d="M 50,65 Q 110,125 170,65" fill="none" stroke="#F59E0B" stroke-width="2"/>
            <text x="110" y="126" text-anchor="middle" fill="#34D399" font-size="8" font-weight="bold" font-family="monospace">L = ∫_a^b [f(x) - g(x)] dx</text>
          </svg>`;
        }

        if (pNum === 30 && context === 'toolkit') {
          return `<svg ${baseAttrs}>${drawGrid()}${drawAxes(30, 70)}
            <text x="110" y="15" text-anchor="middle" fill="#F59E0B" font-size="8.5" font-weight="bold">Volume Benda Putar 3D</text>
            <ellipse cx="150" cy="70" rx="10" ry="35" fill="#3B82F6" opacity="0.3" stroke="#3B82F6" stroke-width="1.5"/>
            <ellipse cx="70" cy="70" rx="10" ry="15" fill="#3B82F6" opacity="0.5" stroke="#3B82F6" stroke-width="1.5"/>
            <path d="M 70,55 Q 110,45 150,35" fill="none" stroke="#F59E0B" stroke-width="2"/>
            <path d="M 70,85 Q 110,95 150,105" fill="none" stroke="#F59E0B" stroke-width="2"/>
            <text x="110" y="125" text-anchor="middle" fill="#FCD34D" font-size="8" font-family="monospace">V = π ∫ [f(x)]² dx</text>
          </svg>`;
        }

        return null;
      }

      // -------------------------------------------------------------
      // 3. CLIL BILINGUAL CALCULUS: ONLY P29 & P30
      // -------------------------------------------------------------
      if (mode === 'clil') {
        if (pNum === 29 && context === 'toolkit') {
          return `<svg ${baseAttrs}>${drawGrid()}${drawAxes(30, 110)}
            <text x="110" y="15" text-anchor="middle" fill="#F59E0B" font-size="8.5" font-weight="bold">Area Between Curves</text>
            <path d="M 70,85 Q 110,40 150,85 Q 110,105 70,85 Z" fill="#10B981" opacity="0.4"/>
            <path d="M 50,105 Q 110,25 170,105" fill="none" stroke="#3B82F6" stroke-width="2"/>
            <path d="M 50,65 Q 110,125 170,65" fill="none" stroke="#F59E0B" stroke-width="2"/>
            <text x="110" y="126" text-anchor="middle" fill="#34D399" font-size="8" font-weight="bold" font-family="monospace">A = ∫_a^b [f(x) - g(x)] dx</text>
          </svg>`;
        }
        if (pNum === 30 && context === 'toolkit') {
          return `<svg ${baseAttrs}>${drawGrid()}${drawAxes(30, 70)}
            <text x="110" y="15" text-anchor="middle" fill="#F59E0B" font-size="8.5" font-weight="bold">Solid of Revolution 3D</text>
            <ellipse cx="150" cy="70" rx="10" ry="35" fill="#3B82F6" opacity="0.3" stroke="#3B82F6" stroke-width="1.5"/>
            <ellipse cx="70" cy="70" rx="10" ry="15" fill="#3B82F6" opacity="0.5" stroke="#3B82F6" stroke-width="1.5"/>
            <path d="M 70,55 Q 110,45 150,35" fill="none" stroke="#F59E0B" stroke-width="2"/>
            <path d="M 70,85 Q 110,95 150,105" fill="none" stroke="#F59E0B" stroke-width="2"/>
            <text x="110" y="125" text-anchor="middle" fill="#FCD34D" font-size="8" font-family="monospace">V = π ∫ [f(x)]² dx</text>
          </svg>`;
        }
        return null;
      }

      return null;
    }

    function startBtcTimer(sec) {
      clearInterval(timerInterval);
      let remain = sec;
      const disp = document.getElementById('btc-timer-display');
      timerInterval = setInterval(() => {
        remain--;
        const m = Math.floor(remain / 60);
        const s = remain % 60;
        if (disp) {
          disp.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }
        if (remain <= 0) {
          clearInterval(timerInterval);
          if (disp) disp.innerText = "00:00";
          confettiCelebration();
        }
      }, 1000);
    }

    // ---------------------------------------------------------------
    // SKALA TAMPILAN
    // Guru sering membagikan portal lewat proyektor atau share-screen,
    // yang membuat teks berukuran normal sulit dibaca dari bangku belakang.
    // Skala disimpan agar tidak perlu diatur ulang tiap membuka portal.
    // ---------------------------------------------------------------
    const UI_STEPS = [1, 1.15, 1.3, 1.5, 1.75];
    const STORAGE_UI_KEY = 'gis_math_portal_ui_scale';
    let uiStepIdx = 0;

    function applyUiScale() {
      const v = UI_STEPS[uiStepIdx];
      document.documentElement.style.setProperty('--ui', v);
      const lbl = document.getElementById('ui-scale-label');
      if (lbl) lbl.textContent = Math.round(v * 100) + '%';
      try { localStorage.setItem(STORAGE_UI_KEY, String(uiStepIdx)); } catch (e) {}
    }

    function stepUiScale(dir) {
      uiStepIdx = Math.max(0, Math.min(UI_STEPS.length - 1, uiStepIdx + dir));
      applyUiScale();
    }

    function loadUiScale() {
      try {
        const v = parseInt(localStorage.getItem(STORAGE_UI_KEY), 10);
        if (!isNaN(v) && v >= 0 && v < UI_STEPS.length) uiStepIdx = v;
      } catch (e) {}
      applyUiScale();
    }


    // =====================================================================
    // MESIN GAMBAR SOAL
    // Menggambar ilustrasi SVG dari spesifikasi ringkas pada field `viz`.
    // Semua warna mengikuti palet portal, dan seluruh gambar menyesuaikan
    // lebar layar sehingga tetap terbaca saat dibagikan lewat proyektor.
    // =====================================================================
    const VZ = {
      bg:'#0B1220', grid:'#1E3050', axis:'#64748B', text:'#94A3B8',
      f:'#60A5FA', g:'#34D399', hi:'#F59E0B', bad:'#FB7185', mute:'#475569', pale:'#CBD5E1'
    };

    function vzEval(src) {
      try { return new Function('x', 'with (Math) { return (' + src + '); }'); }
      catch (e) { return null; }
    }

    function vzWrap(inner, w, h, caption) {
      return '<figure class="viz-figure">'
        + '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img" preserveAspectRatio="xMidYMid meet">'
        + inner + '</svg>'
        + (caption ? '<figcaption>' + caption + '</figcaption>' : '')
        + '</figure>';
    }

    // format kelipatan pi untuk label sumbu
    function vzPi(v) {
      const r = v / Math.PI;
      const den = [1, 2, 3, 4, 6];
      for (const d of den) {
        const n = Math.round(r * d);
        if (Math.abs(r - n / d) < 1e-6) {
          if (n === 0) return '0';
          const sg = n < 0 ? '−' : '';
          const an = Math.abs(n);
          const num = an === 1 ? 'π' : an + 'π';
          return sg + (d === 1 ? num : num + '/' + d);
        }
      }
      return v.toFixed(1);
    }

    // ---------------------------------------------------------------- GRAFIK FUNGSI
    function vzPlot(s) {
      const W = 520, H = 300, P = 34;
      const f = vzEval(s.f);
      // g yang bernilai nol persis berimpit dengan sumbu-X, jadi tidak digambar dua kali
      let g = s.g ? vzEval(s.g) : null;
      if (g) { let flat = true;
        for (let i = 0; i <= 8; i++) { const v = g(s.x0 + (s.x1 - s.x0) * i / 8);
          if (!isFinite(v) || Math.abs(v) > 1e-9) { flat = false; break; } }
        if (flat) g = null; }
      const F = s.F ? vzEval(s.F) : null;
      if (!f) return '';
      const x0 = s.x0, x1 = s.x1, N = 320, clip = s.clip || 40;

      // rentang y dihitung dari data agar kurva selalu terisi penuh
      let ys = [];
      const push = fn => { if (!fn) return;
        for (let i = 0; i <= N; i++) { const xv = x0 + (x1 - x0) * i / N; const yv = fn(xv);
          if (isFinite(yv) && Math.abs(yv) <= clip) ys.push(yv); } };
      push(f); push(g);
      if (F && s.famC) s.famC.forEach(c => push(v => F(v) + c));
      if (!ys.length) return '';
      let ymin = Math.min(...ys), ymax = Math.max(...ys);
      if (s.tang) { ymin = Math.min(ymin, s.tang.y - 1); ymax = Math.max(ymax, s.tang.y + 1); }
      if (s.asy) s.asy.forEach(a => { ymin = Math.min(ymin, a); ymax = Math.max(ymax, a); });
      if (ymax - ymin < 1e-6) { ymin -= 1; ymax += 1; }
      const pad = (ymax - ymin) * 0.16; ymin -= pad; ymax += pad;

      const X = v => P + (v - x0) / (x1 - x0) * (W - 2 * P);
      const Y = v => H - P - (v - ymin) / (ymax - ymin) * (H - 2 * P);
      const path = fn => {
        let d = '', pen = false;
        for (let i = 0; i <= N; i++) {
          const xv = x0 + (x1 - x0) * i / N, yv = fn(xv);
          if (!isFinite(yv) || Math.abs(yv) > clip) { pen = false; continue; }
          d += (pen ? 'L' : 'M') + X(xv).toFixed(1) + ' ' + Y(yv).toFixed(1) + ' '; pen = true;
        }
        return d;
      };

      let o = '<rect x="0" y="0" width="' + W + '" height="' + H + '" rx="10" fill="' + VZ.bg + '"/>';
      // kisi
      for (let i = 0; i <= 8; i++) {
        const gx = P + i * (W - 2 * P) / 8, gy = P + i * (H - 2 * P) / 8;
        o += '<line x1="' + gx + '" y1="' + P + '" x2="' + gx + '" y2="' + (H - P) + '" stroke="' + VZ.grid + '" stroke-width="1"/>';
        o += '<line x1="' + P + '" y1="' + gy + '" x2="' + (W - P) + '" y2="' + gy + '" stroke="' + VZ.grid + '" stroke-width="1"/>';
      }
      // daerah yang diarsir
      if (s.area) {
        const [a, b] = s.area; let d = 'M' + X(a) + ' ' + Y(0) + ' ';
        for (let i = 0; i <= 120; i++) { const xv = a + (b - a) * i / 120; let yv = f(xv);
          if (s.antara && g) yv = f(xv) - g(xv) + g(xv);
          if (!isFinite(yv)) yv = 0; d += 'L' + X(xv).toFixed(1) + ' ' + Y(yv).toFixed(1) + ' '; }
        d += 'L' + X(b) + ' ' + Y(0) + ' Z';
        o += '<path d="' + d + '" fill="' + VZ.hi + '" fill-opacity="0.22" stroke="none"/>';
        [a, b].forEach(v => { o += '<line x1="' + X(v) + '" y1="' + P + '" x2="' + X(v) + '" y2="' + (H - P) +
          '" stroke="' + VZ.hi + '" stroke-width="1.5" stroke-dasharray="4 3"/>'; });
      }
      // selang naik
      if (s.naik) s.naik.forEach(([a, b]) => {
        o += '<rect x="' + X(a) + '" y="' + P + '" width="' + (X(b) - X(a)) + '" height="' + (H - 2 * P) +
             '" fill="' + VZ.g + '" fill-opacity="0.13"/>'; });
      // sumbu
      const yz = (0 >= ymin && 0 <= ymax) ? Y(0) : H - P;
      const xz = (0 >= x0 && 0 <= x1) ? X(0) : P;
      o += '<line x1="' + P + '" y1="' + yz + '" x2="' + (W - P) + '" y2="' + yz + '" stroke="' + VZ.axis + '" stroke-width="1.6"/>';
      o += '<line x1="' + xz + '" y1="' + P + '" x2="' + xz + '" y2="' + (H - P) + '" stroke="' + VZ.axis + '" stroke-width="1.6"/>';
      o += '<text x="' + (W - P + 5) + '" y="' + (yz + 4) + '" fill="' + VZ.text + '" font-size="13">x</text>';
      o += '<text x="' + (xz - 12) + '" y="' + (P - 8) + '" fill="' + VZ.text + '" font-size="13">y</text>';
      // asimtot
      if (s.asy) s.asy.forEach(a => {
        o += '<line x1="' + P + '" y1="' + Y(a) + '" x2="' + (W - P) + '" y2="' + Y(a) + '" stroke="' + VZ.hi +
             '" stroke-width="1.6" stroke-dasharray="7 4"/>' +
             '<text x="' + (P + 6) + '" y="' + (Y(a) - 6) + '" fill="' + VZ.hi + '" font-size="13">y = ' + a + '</text>'; });
      if (s.vasy) s.vasy.forEach(a => { if (a > x0 && a < x1)
        o += '<line x1="' + X(a) + '" y1="' + P + '" x2="' + X(a) + '" y2="' + (H - P) + '" stroke="' + VZ.bad +
             '" stroke-width="1.6" stroke-dasharray="7 4"/>' +
             '<text x="' + (X(a) + 5) + '" y="' + (P + 14) + '" fill="' + VZ.bad + '" font-size="13">x = ' + a + '</text>'; });
      // keluarga antiturunan
      if (F && s.famC) s.famC.forEach(c => {
        o += '<path d="' + path(v => F(v) + c) + '" fill="none" stroke="' + VZ.g +
             '" stroke-width="1.4" stroke-opacity="0.55"/>'; });
      // kurva kedua
      if (g && !s.F) o += '<path d="' + path(g) + '" fill="none" stroke="' + VZ.g + '" stroke-width="2.4" stroke-dasharray="6 4"/>';
      // kurva utama
      o += '<path d="' + path(f) + '" fill="none" stroke="' + VZ.f + '" stroke-width="2.8" stroke-linecap="round"/>';
      // garis singgung
      if (s.tang) {
        const t = s.tang, xa = Math.max(x0, t.x - (x1 - x0) * 0.4), xb = Math.min(x1, t.x + (x1 - x0) * 0.4);
        o += '<line x1="' + X(xa) + '" y1="' + Y(t.y + t.m * (xa - t.x)) + '" x2="' + X(xb) + '" y2="' +
             Y(t.y + t.m * (xb - t.x)) + '" stroke="' + VZ.hi + '" stroke-width="2.4"/>';
        o += '<circle cx="' + X(t.x) + '" cy="' + Y(t.y) + '" r="5" fill="' + VZ.hi + '" stroke="' + VZ.bg + '" stroke-width="2"/>';
        o += '<text x="' + (X(t.x) + 9) + '" y="' + (Y(t.y) - 9) + '" fill="' + VZ.hi + '" font-size="13" font-weight="700">m = ' + t.m + '</text>';
      }
      // titik kosong pada limit
      if (s.hole !== undefined && s.holey !== undefined) {
        o += '<circle cx="' + X(s.hole) + '" cy="' + Y(s.holey) + '" r="5.5" fill="' + VZ.bg + '" stroke="' + VZ.hi + '" stroke-width="2.4"/>';
        o += '<line x1="' + X(s.hole) + '" y1="' + (H - P) + '" x2="' + X(s.hole) + '" y2="' + Y(s.holey) +
             '" stroke="' + VZ.hi + '" stroke-width="1.2" stroke-dasharray="3 3"/>';
        o += '<text x="' + (X(s.hole) + 8) + '" y="' + (Y(s.holey) - 10) + '" fill="' + VZ.hi + '" font-size="13" font-weight="700">' + s.holey + '</text>';
      }
      // titik stasioner
      if (s.crit) s.crit.forEach(c => { const yv = f(c); if (isFinite(yv))
        o += '<circle cx="' + X(c) + '" cy="' + Y(yv) + '" r="4.5" fill="' + VZ.hi + '" stroke="' + VZ.bg + '" stroke-width="2"/>'; });
      // label sumbu-x
      const ticks = s.pi ? 4 : 4;
      for (let i = 0; i <= ticks; i++) {
        const xv = x0 + (x1 - x0) * i / ticks;
        o += '<text x="' + X(xv) + '" y="' + (H - P + 17) + '" fill="' + VZ.text + '" font-size="12" text-anchor="middle">' +
             (s.pi ? vzPi(xv) : (Math.abs(xv) < 1e-9 ? '0' : xv.toFixed(Math.abs(xv) < 10 ? 1 : 0))) + '</text>';
      }
      // legenda
      let lg = '<text x="' + (P + 4) + '" y="' + (P - 12) + '" font-size="13" font-weight="700" fill="' + VZ.f + '">' + (s.lab || 'y = f(x)') + '</text>';
      if (s.lab2 && (g || F)) lg += '<text x="' + (P + 150) + '" y="' + (P - 12) + '" font-size="13" font-weight="700" fill="' + VZ.g + '">' + s.lab2 + '</text>';
      o += lg;
      let cap = s.note || '';
      if (s.area) cap = s.rot ? 'Daerah berarsir diputar mengelilingi sumbu-X' : 'Luas daerah berarsir = nilai integral tentunya';
      if (s.tang) cap = 'Garis singgung menyentuh kurva di satu titik; kemiringannya adalah nilai turunan di titik itu';
      if (s.hole !== undefined) cap = 'Fungsi tidak terdefinisi di titik itu (lingkaran kosong), tetapi nilainya tetap mendekati satu bilangan tertentu';
      if (s.naik) cap = 'Bagian berlatar hijau adalah selang saat kurva naik';
      if (s.famC) cap = 'Integral tak tentu menghasilkan sekeluarga kurva yang hanya berbeda pada konstanta C';
      return vzWrap(o, W, H, cap);
    }

    // ---------------------------------------------------------------- LINGKARAN
    function vzLingkaran(s) {
      const W = 460, H = 340, P = 26;
      const r = Math.sqrt(s.r2), cx = s.cx || 0, cy = s.cy || 0;
      let span = r * 1.55;
      if (s.P) span = Math.max(span, Math.abs(s.P[0] - cx) * 1.25, Math.abs(s.P[1] - cy) * 1.25, r * 1.3);
      const x0 = cx - span, x1 = cx + span, y0 = cy - span, y1 = cy + span;
      const X = v => P + (v - x0) / (x1 - x0) * (W - 2 * P);
      const Y = v => H - P - (v - y0) / (y1 - y0) * (H - 2 * P);
      const R = X(cx + r) - X(cx);

      let o = '<rect x="0" y="0" width="' + W + '" height="' + H + '" rx="10" fill="' + VZ.bg + '"/>';
      for (let i = 0; i <= 8; i++) {
        const gx = P + i * (W - 2 * P) / 8, gy = P + i * (H - 2 * P) / 8;
        o += '<line x1="' + gx + '" y1="' + P + '" x2="' + gx + '" y2="' + (H - P) + '" stroke="' + VZ.grid + '" stroke-width="1"/>';
        o += '<line x1="' + P + '" y1="' + gy + '" x2="' + (W - P) + '" y2="' + gy + '" stroke="' + VZ.grid + '" stroke-width="1"/>';
      }
      o += '<line x1="' + P + '" y1="' + Y(0) + '" x2="' + (W - P) + '" y2="' + Y(0) + '" stroke="' + VZ.axis + '" stroke-width="1.6"/>';
      o += '<line x1="' + X(0) + '" y1="' + P + '" x2="' + X(0) + '" y2="' + (H - P) + '" stroke="' + VZ.axis + '" stroke-width="1.6"/>';
      o += '<text x="' + (W - P + 4) + '" y="' + (Y(0) + 4) + '" fill="' + VZ.text + '" font-size="13">x</text>';
      o += '<text x="' + (X(0) - 13) + '" y="' + (P - 7) + '" fill="' + VZ.text + '" font-size="13">y</text>';

      // garis
      if (s.line) {
        const [a, b, c] = s.line;   // ax + by + c = 0
        let p1, p2;
        if (Math.abs(b) > 1e-9) { p1 = [x0, -(a * x0 + c) / b]; p2 = [x1, -(a * x1 + c) / b]; }
        else { p1 = [-c / a, y0]; p2 = [-c / a, y1]; }
        o += '<line x1="' + X(p1[0]) + '" y1="' + Y(p1[1]) + '" x2="' + X(p2[0]) + '" y2="' + Y(p2[1]) +
             '" stroke="' + VZ.hi + '" stroke-width="2.4"/>';
      }
      // lingkaran + pusat + jari-jari
      o += '<circle cx="' + X(cx) + '" cy="' + Y(cy) + '" r="' + R + '" fill="' + VZ.f + '" fill-opacity="0.09" stroke="' + VZ.f + '" stroke-width="2.8"/>';
      o += '<line x1="' + X(cx) + '" y1="' + Y(cy) + '" x2="' + X(cx + r) + '" y2="' + Y(cy) +
           '" stroke="' + VZ.g + '" stroke-width="2" stroke-dasharray="5 3"/>';
      o += '<text x="' + (X(cx) + R / 2 - 6) + '" y="' + (Y(cy) - 8) + '" fill="' + VZ.g + '" font-size="13" font-weight="700">r = ' +
           (Math.abs(r - Math.round(r)) < 1e-9 ? r : '\u221a' + s.r2) + '</text>';
      o += '<circle cx="' + X(cx) + '" cy="' + Y(cy) + '" r="4" fill="' + VZ.g + '"/>';
      o += '<text x="' + (X(cx) + 7) + '" y="' + (Y(cy) + 16) + '" fill="' + VZ.g + '" font-size="12">P(' + cx + ', ' + cy + ')</text>';
      // titik yang disebut soal
      if (s.P) {
        o += '<circle cx="' + X(s.P[0]) + '" cy="' + Y(s.P[1]) + '" r="5.5" fill="' + VZ.hi + '" stroke="' + VZ.bg + '" stroke-width="2"/>';
        o += '<text x="' + (X(s.P[0]) + 9) + '" y="' + (Y(s.P[1]) - 8) + '" fill="' + VZ.hi + '" font-size="13" font-weight="700">(' +
             s.P[0] + ', ' + s.P[1] + ')</text>';
      }
      let cap = 'Sketsa lingkaran beserta unsur yang disebut pada soal';
      if (s.line) cap = 'Kedudukan garis ditentukan dengan membandingkan jaraknya dari pusat terhadap jari-jari';
      else if (s.tang) cap = 'Garis singgung selalu tegak lurus jari-jari di titik singgungnya';
      else if (s.P) cap = 'Kedudukan titik ditentukan dengan membandingkan jaraknya dari pusat terhadap jari-jari';
      return vzWrap(o, W, H, cap);
    }

    // ---------------------------------------------------------------- BANGUN RUANG
    function vzRuang(s) {
      const W = 420, H = 330;
      const sh = s.shape || 'kubus';
      // proyeksi miring: alas ABCD, tutup EFGH
      const ox = 118, oy = 250, sx = 150, sy = -150, dx = 62, dy = -46;
      const V = {
        A: [ox, oy], B: [ox + sx, oy], C: [ox + sx + dx, oy + dy], D: [ox + dx, oy + dy],
        E: [ox, oy + sy], F: [ox + sx, oy + sy], G: [ox + sx + dx, oy + sy + dy], H: [ox + dx, oy + sy + dy]
      };
      const T = [ox + (sx + dx) / 2, oy + sy + dy / 2];   // puncak limas
      const pt = k => (k === 'T' ? T : V[k]);
      let o = '<rect x="0" y="0" width="' + W + '" height="' + H + '" rx="10" fill="' + VZ.bg + '"/>';
      const seg = (p, q, col, wd, dash) => '<line x1="' + p[0] + '" y1="' + p[1] + '" x2="' + q[0] + '" y2="' + q[1] +
        '" stroke="' + col + '" stroke-width="' + wd + '"' + (dash ? ' stroke-dasharray="5 4"' : '') + ' stroke-linecap="round"/>';

      if (sh === 'limas') {
        ['AB','BC','CD','DA'].forEach(e => { o += seg(V[e[0]], V[e[1]], e === 'CD' || e === 'DA' ? VZ.mute : VZ.pale, 2.2, e === 'CD' || e === 'DA'); });
        ['A','B','C','D'].forEach(k => { o += seg(V[k], T, k === 'D' ? VZ.mute : VZ.pale, 2.2, k === 'D'); });
        o += '<circle cx="' + T[0] + '" cy="' + T[1] + '" r="3.5" fill="' + VZ.pale + '"/>';
        o += '<text x="' + (T[0] - 4) + '" y="' + (T[1] - 9) + '" fill="' + VZ.pale + '" font-size="14" font-weight="700">T</text>';
        ['A','B','C','D'].forEach(k => { const p = V[k];
          o += '<text x="' + (p[0] - 5 + (k === 'B' || k === 'C' ? 8 : -10)) + '" y="' + (p[1] + 15) + '" fill="' + VZ.text + '" font-size="13" font-weight="700">' + k + '</text>'; });
      } else {
        const edges = [['A','B'],['B','C'],['C','D'],['D','A'],['E','F'],['F','G'],['G','H'],['H','E'],
                       ['A','E'],['B','F'],['C','G'],['D','H']];
        const hidden = ['DA','CD','DH'];
        edges.forEach(([p, q]) => { const nm = p + q, hd = hidden.includes(nm) || hidden.includes(q + p);
          o += seg(V[p], V[q], hd ? VZ.mute : VZ.pale, 2.2, hd); });
        Object.keys(V).forEach(k => { const p = V[k];
          const off = (k === 'B' || k === 'C' || k === 'F' || k === 'G') ? 9 : -13;
          const voff = (k === 'E' || k === 'F' || k === 'G' || k === 'H') ? -8 : 15;
          o += '<text x="' + (p[0] + off) + '" y="' + (p[1] + voff) + '" fill="' + VZ.text + '" font-size="13" font-weight="700">' + k + '</text>'; });
      }
      // bidang yang disorot
      if (s.bid) s.bid.slice(0, 1).forEach(b => {
        const ks = b.split('').filter(k => V[k] || k === 'T');
        if (ks.length >= 3) {
          const d = ks.map((k, i) => (i ? 'L' : 'M') + pt(k)[0] + ' ' + pt(k)[1]).join(' ') + ' Z';
          o += '<path d="' + d + '" fill="' + VZ.hi + '" fill-opacity="0.2" stroke="' + VZ.hi + '" stroke-width="2"/>';
        }
      });
      // ruas garis yang disorot
      const cols = [VZ.hi, VZ.g];
      if (s.seg) s.seg.slice(0, 2).forEach((sg, i) => {
        const p = pt(sg[0]), q = pt(sg[1]);
        if (p && q) { o += seg(p, q, cols[i], 3.4, false);
          o += '<text x="' + ((p[0] + q[0]) / 2 + 6) + '" y="' + ((p[1] + q[1]) / 2 - 6) + '" fill="' + cols[i] +
               '" font-size="13" font-weight="700">' + sg + '</text>'; }
      });
      return vzWrap(o, W, H, 'Garis putus-putus adalah rusuk yang terhalang badan bangun');
    }

    // ---------------------------------------------------------------- DUA DADU
    function vzDadu(s) {
      const c = 34, P = 46, W = P + 6 * c + 12, H = P + 6 * c + 12;
      const hit = (i, j) => {
        if (s.sum !== undefined) return i + j === s.sum;
        if (s.rule === 'ganjil-atau-k4') return (i + j) % 2 === 1 || (i + j) % 4 === 0;
        if (s.rule === 'ganjil-prima') return i % 2 === 1 && [2, 3, 5].includes(j);
        return false;
      };
      let o = '<rect x="0" y="0" width="' + W + '" height="' + H + '" rx="10" fill="' + VZ.bg + '"/>';
      let n = 0;
      for (let i = 1; i <= 6; i++) for (let j = 1; j <= 6; j++) {
        const x = P + (j - 1) * c, y = P + (i - 1) * c, on = hit(i, j); if (on) n++;
        o += '<rect x="' + (x + 2) + '" y="' + (y + 2) + '" width="' + (c - 4) + '" height="' + (c - 4) + '" rx="6" fill="' +
             (on ? VZ.hi : '#132038') + '" fill-opacity="' + (on ? 0.9 : 1) + '" stroke="' + (on ? VZ.hi : VZ.grid) + '" stroke-width="1.4"/>';
        o += '<text x="' + (x + c / 2) + '" y="' + (y + c / 2 + 5) + '" text-anchor="middle" font-size="14" font-weight="700" fill="' +
             (on ? '#0B1220' : VZ.text) + '">' + (i + j) + '</text>';
      }
      for (let k = 1; k <= 6; k++) {
        o += '<text x="' + (P + (k - 1) * c + c / 2) + '" y="' + (P - 10) + '" text-anchor="middle" font-size="13" fill="' + VZ.text + '">' + k + '</text>';
        o += '<text x="' + (P - 12) + '" y="' + (P + (k - 1) * c + c / 2 + 5) + '" text-anchor="middle" font-size="13" fill="' + VZ.text + '">' + k + '</text>';
      }
      o += '<text x="' + P + '" y="15" font-size="11" fill="' + VZ.text + '">dadu ke-2 →</text>';
      return vzWrap(o, W, H, 'Seluruh 36 hasil dua dadu; kotak berwarna memenuhi syarat soal' + (n ? ' (' + n + ' hasil)' : ''));
    }

    // ---------------------------------------------------------------- DIAGRAM VENN
    function vzVenn(s) {
      const W = 440, H = 250;
      const onlyA = s.a - s.ab, onlyB = s.b - s.ab, none = s.n - (s.a + s.b - s.ab);
      let o = '<rect x="0" y="0" width="' + W + '" height="' + H + '" rx="10" fill="' + VZ.bg + '"/>';
      o += '<rect x="18" y="24" width="' + (W - 36) + '" height="' + (H - 48) + '" rx="8" fill="none" stroke="' + VZ.grid + '" stroke-width="1.6"/>';
      o += '<text x="26" y="42" font-size="12" fill="' + VZ.text + '">S = ' + s.n + '</text>';
      o += '<circle cx="175" cy="128" r="82" fill="' + VZ.f + '" fill-opacity="0.18" stroke="' + VZ.f + '" stroke-width="2.4"/>';
      o += '<circle cx="265" cy="128" r="82" fill="' + VZ.g + '" fill-opacity="0.18" stroke="' + VZ.g + '" stroke-width="2.4"/>';
      o += '<text x="122" y="134" text-anchor="middle" font-size="19" font-weight="800" fill="' + VZ.f + '">' + onlyA + '</text>';
      o += '<text x="220" y="134" text-anchor="middle" font-size="19" font-weight="800" fill="' + VZ.hi + '">' + s.ab + '</text>';
      o += '<text x="318" y="134" text-anchor="middle" font-size="19" font-weight="800" fill="' + VZ.g + '">' + onlyB + '</text>';
      o += '<text x="122" y="62" text-anchor="middle" font-size="13" font-weight="700" fill="' + VZ.f + '">' + s.la + '</text>';
      o += '<text x="318" y="62" text-anchor="middle" font-size="13" font-weight="700" fill="' + VZ.g + '">' + s.lb + '</text>';
      if (none > 0) o += '<text x="' + (W - 34) + '" y="' + (H - 34) + '" text-anchor="end" font-size="13" fill="' + VZ.text + '">tidak keduanya: ' + none + '</text>';
      return vzWrap(o, W, H, 'Bagian tengah dihitung sekali saja — itulah sebabnya irisan dikurangkan');
    }

    function vzVenn2() {
      const W = 420, H = 220;
      let o = '<rect x="0" y="0" width="' + W + '" height="' + H + '" rx="10" fill="' + VZ.bg + '"/>';
      o += '<circle cx="168" cy="112" r="76" fill="' + VZ.f + '" fill-opacity="0.18" stroke="' + VZ.f + '" stroke-width="2.4"/>';
      o += '<circle cx="252" cy="112" r="76" fill="' + VZ.g + '" fill-opacity="0.18" stroke="' + VZ.g + '" stroke-width="2.4"/>';
      o += '<text x="118" y="118" text-anchor="middle" font-size="15" font-weight="700" fill="' + VZ.f + '">A saja</text>';
      o += '<text x="210" y="118" text-anchor="middle" font-size="14" font-weight="800" fill="' + VZ.hi + '">A∩B</text>';
      o += '<text x="302" y="118" text-anchor="middle" font-size="15" font-weight="700" fill="' + VZ.g + '">B saja</text>';
      return vzWrap(o, W, H, 'P(A∪B) = P(A) + P(B) − P(A∩B): irisannya dikurangkan agar tidak terhitung dua kali');
    }

    // ---------------------------------------------------------------- HISTOGRAM & OGIVE
    function vzHistogram() {
      const W = 480, H = 270, P = 40;
      const data = [[40,49,6],[50,59,10],[60,69,14],[70,79,9],[80,89,5]];
      const maxf = 14, n = data.length, bw = (W - 2 * P) / n;
      let o = '<rect x="0" y="0" width="' + W + '" height="' + H + '" rx="10" fill="' + VZ.bg + '"/>';
      for (let i = 0; i <= 4; i++) { const gy = H - P - i * (H - 2 * P) / 4;
        o += '<line x1="' + P + '" y1="' + gy + '" x2="' + (W - P) + '" y2="' + gy + '" stroke="' + VZ.grid + '" stroke-width="1"/>'; }
      data.forEach((d, i) => {
        const h = d[2] / maxf * (H - 2 * P), x = P + i * bw;
        o += '<rect x="' + (x + 3) + '" y="' + (H - P - h) + '" width="' + (bw - 6) + '" height="' + h +
             '" rx="3" fill="' + VZ.f + '" fill-opacity="0.55" stroke="' + VZ.f + '" stroke-width="1.6"/>';
        o += '<text x="' + (x + bw / 2) + '" y="' + (H - P - h - 7) + '" text-anchor="middle" font-size="12" font-weight="700" fill="' + VZ.f + '">' + d[2] + '</text>';
        o += '<text x="' + (x + bw / 2) + '" y="' + (H - P + 16) + '" text-anchor="middle" font-size="11" fill="' + VZ.text + '">' + d[0] + '–' + d[1] + '</text>';
        o += '<text x="' + (x + bw / 2) + '" y="' + (H - P + 30) + '" text-anchor="middle" font-size="10" fill="' + VZ.hi + '">tb ' + (d[0] - 0.5) + '</text>';
      });
      o += '<line x1="' + P + '" y1="' + (H - P) + '" x2="' + (W - P) + '" y2="' + (H - P) + '" stroke="' + VZ.axis + '" stroke-width="1.8"/>';
      o += '<line x1="' + P + '" y1="' + P + '" x2="' + P + '" y2="' + (H - P) + '" stroke="' + VZ.axis + '" stroke-width="1.8"/>';
      o += '<text x="' + (P - 6) + '" y="' + (P + 4) + '" text-anchor="end" font-size="12" fill="' + VZ.text + '">f</text>';
      return vzWrap(o, W, H, 'Contoh tabel distribusi frekuensi. Tepi bawah (tb) = batas bawah − 0,5, dan panjang kelas = jarak antartepi');
    }

    // ---------------------------------------------------------------- DIAGRAM KOTAK GARIS
    function vzBoxplot() {
      const W = 480, H = 190, P = 44;
      const vals = { min: 20, q1: 45, q2: 58, q3: 75, max: 95 };
      const lo = 10, hi = 105;
      const X = v => P + (v - lo) / (hi - lo) * (W - 2 * P);
      const cy = 92;
      let o = '<rect x="0" y="0" width="' + W + '" height="' + H + '" rx="10" fill="' + VZ.bg + '"/>';
      o += '<line x1="' + X(vals.min) + '" y1="' + cy + '" x2="' + X(vals.q1) + '" y2="' + cy + '" stroke="' + VZ.axis + '" stroke-width="2"/>';
      o += '<line x1="' + X(vals.q3) + '" y1="' + cy + '" x2="' + X(vals.max) + '" y2="' + cy + '" stroke="' + VZ.axis + '" stroke-width="2"/>';
      [['min', vals.min], ['max', vals.max]].forEach(([, v]) => {
        o += '<line x1="' + X(v) + '" y1="' + (cy - 15) + '" x2="' + X(v) + '" y2="' + (cy + 15) + '" stroke="' + VZ.axis + '" stroke-width="2.4"/>'; });
      o += '<rect x="' + X(vals.q1) + '" y="' + (cy - 26) + '" width="' + (X(vals.q3) - X(vals.q1)) + '" height="52" rx="4" fill="' +
           VZ.f + '" fill-opacity="0.28" stroke="' + VZ.f + '" stroke-width="2.2"/>';
      o += '<line x1="' + X(vals.q2) + '" y1="' + (cy - 26) + '" x2="' + X(vals.q2) + '" y2="' + (cy + 26) + '" stroke="' + VZ.hi + '" stroke-width="3"/>';
      const lab = [['min', vals.min], ['Q₁', vals.q1], ['Q₂', vals.q2], ['Q₃', vals.q3], ['maks', vals.max]];
      lab.forEach(([t, v], i) => {
        o += '<text x="' + X(v) + '" y="' + (cy + 48) + '" text-anchor="middle" font-size="12" font-weight="700" fill="' +
             (t === 'Q₂' ? VZ.hi : VZ.text) + '">' + t + '</text>';
        o += '<text x="' + X(v) + '" y="' + (cy - 36) + '" text-anchor="middle" font-size="11" fill="' + VZ.text + '">' + v + '</text>';
      });
      o += '<path d="M' + X(vals.q1) + ' ' + (cy + 62) + ' L' + X(vals.q3) + ' ' + (cy + 62) + '" stroke="' + VZ.g + '" stroke-width="2"/>';
      o += '<text x="' + ((X(vals.q1) + X(vals.q3)) / 2) + '" y="' + (cy + 77) + '" text-anchor="middle" font-size="12" font-weight="700" fill="' +
           VZ.g + '">QR = Q₃ − Q₁ (50% data tengah)</text>';
      return vzWrap(o, W, H, 'Kotak memuat separuh data di bagian tengah; garis kuning adalah median');
    }

    // ---------------------------------------------------------------- KURVA NORMAL
    function vzLonceng() {
      const W = 480, H = 240, P = 40;
      const X = z => P + (z + 3.4) / 6.8 * (W - 2 * P);
      const Yv = z => H - P - Math.exp(-z * z / 2) * (H - 2 * P) * 0.92;
      let d = '';
      for (let i = 0; i <= 200; i++) { const z = -3.4 + 6.8 * i / 200; d += (i ? 'L' : 'M') + X(z).toFixed(1) + ' ' + Yv(z).toFixed(1) + ' '; }
      let o = '<rect x="0" y="0" width="' + W + '" height="' + H + '" rx="10" fill="' + VZ.bg + '"/>';
      o += '<path d="' + d + 'L' + X(3.4) + ' ' + (H - P) + ' L' + X(-3.4) + ' ' + (H - P) + ' Z" fill="' + VZ.f + '" fill-opacity="0.14"/>';
      o += '<path d="' + d + '" fill="none" stroke="' + VZ.f + '" stroke-width="2.6"/>';
      o += '<line x1="' + P + '" y1="' + (H - P) + '" x2="' + (W - P) + '" y2="' + (H - P) + '" stroke="' + VZ.axis + '" stroke-width="1.8"/>';
      [-3, -2, -1, 0, 1, 2, 3].forEach(z => {
        const col = z === 0 ? VZ.hi : VZ.grid;
        o += '<line x1="' + X(z) + '" y1="' + Yv(z) + '" x2="' + X(z) + '" y2="' + (H - P) + '" stroke="' + col + '" stroke-width="' + (z === 0 ? 2.2 : 1.2) + '"/>';
        o += '<text x="' + X(z) + '" y="' + (H - P + 17) + '" text-anchor="middle" font-size="12" fill="' + (z === 0 ? VZ.hi : VZ.text) + '">' +
             (z === 0 ? 'x̄' : (z > 0 ? '+' : '') + z + 'S') + '</text>';
      });
      o += '<text x="' + (W / 2) + '" y="' + (P - 10) + '" text-anchor="middle" font-size="13" font-weight="700" fill="' + VZ.text + '">Z = (x − x̄) / S</text>';
      return vzWrap(o, W, H, 'Skor baku menyatakan berapa simpangan baku sebuah nilai berjarak dari rata-rata');
    }

    // ---------------------------------------------------------------- REGRESI
    function vzRegresi() {
      const W = 460, H = 270, P = 40;
      const pts = [[1,3.2],[2,4.6],[3,5.1],[4,7.0],[5,7.6],[6,9.2],[7,9.8],[8,11.4],[9,12.1],[10,13.6]];
      const x0 = 0, x1 = 11, y0 = 0, y1 = 15;
      const X = v => P + (v - x0) / (x1 - x0) * (W - 2 * P);
      const Y = v => H - P - (v - y0) / (y1 - y0) * (H - 2 * P);
      const a = 1.9, b = 1.16;                     // garis regresi contoh
      let o = '<rect x="0" y="0" width="' + W + '" height="' + H + '" rx="10" fill="' + VZ.bg + '"/>';
      for (let i = 0; i <= 5; i++) { const gy = P + i * (H - 2 * P) / 5;
        o += '<line x1="' + P + '" y1="' + gy + '" x2="' + (W - P) + '" y2="' + gy + '" stroke="' + VZ.grid + '" stroke-width="1"/>'; }
      // residual
      pts.forEach(p => { const yh = a + b * p[0];
        o += '<line x1="' + X(p[0]) + '" y1="' + Y(p[1]) + '" x2="' + X(p[0]) + '" y2="' + Y(yh) + '" stroke="' + VZ.bad + '" stroke-width="1.6"/>'; });
      o += '<line x1="' + X(x0) + '" y1="' + Y(a + b * x0) + '" x2="' + X(x1) + '" y2="' + Y(a + b * x1) + '" stroke="' + VZ.hi + '" stroke-width="2.8"/>';
      pts.forEach(p => { o += '<circle cx="' + X(p[0]) + '" cy="' + Y(p[1]) + '" r="4.5" fill="' + VZ.f + '" stroke="' + VZ.bg + '" stroke-width="1.6"/>'; });
      o += '<line x1="' + P + '" y1="' + (H - P) + '" x2="' + (W - P) + '" y2="' + (H - P) + '" stroke="' + VZ.axis + '" stroke-width="1.8"/>';
      o += '<line x1="' + P + '" y1="' + P + '" x2="' + P + '" y2="' + (H - P) + '" stroke="' + VZ.axis + '" stroke-width="1.8"/>';
      o += '<text x="' + (W - P) + '" y="' + (H - P + 18) + '" text-anchor="end" font-size="13" fill="' + VZ.text + '">x</text>';
      o += '<text x="' + (P - 8) + '" y="' + (P + 2) + '" text-anchor="end" font-size="13" fill="' + VZ.text + '">y</text>';
      o += '<text x="' + (P + 8) + '" y="' + (P - 12) + '" font-size="13" font-weight="700" fill="' + VZ.hi + '">ŷ = a + bx</text>';
      o += '<text x="' + (W - P) + '" y="' + (P - 12) + '" text-anchor="end" font-size="12" font-weight="700" fill="' + VZ.bad + '">garis merah = residual (y − ŷ)</text>';
      return vzWrap(o, W, H, 'Garis regresi terbaik adalah yang membuat jumlah kuadrat residualnya paling kecil');
    }

    // ---------------------------------------------------------------- PEMILIH
    function vzRender(v) {
      if (!v) return '';
      try {
        switch (v.t) {
          case 'plot':      return vzPlot(v);
          case 'lingkaran': return vzLingkaran(v);
          case 'ruang':     return vzRuang(v);
          case 'dadu':      return vzDadu(v);
          case 'venn':      return vzVenn(v);
          case 'venn2':     return vzVenn2(v);
          case 'histogram': return vzHistogram(v);
          case 'boxplot':   return vzBoxplot(v);
          case 'lonceng':   return vzLonceng(v);
          case 'regresi':   return vzRegresi(v);
        }
      } catch (e) { return ''; }   // gambar tidak boleh sampai menggagalkan soal
      return '';
    }

    // DRAWER & MODAL TOGGLES
    // SIDEBAR DRAWER & ACCORDION TOGGLES
    // =========================================================================
    // SIDEBAR DRAWER COLLAPSE & HIERARCHICAL SUB-MENUS
    // =========================================================================
    function sidebarMenetap() {
      return document.body.classList.contains('sidebar-tetap') &&
             window.matchMedia('(min-width: 1280px)').matches;
    }

    function toggleCurriculumDrawer() {
      const drawer = document.getElementById('curriculum-drawer');
      const backdrop = document.getElementById('curriculum-drawer-backdrop');
      const floatBtn = document.getElementById('btn-floating-open-sidebar');
      if (!drawer) return;

      const isDesktop = window.matchMedia('(min-width: 1280px)').matches;
      if (isDesktop) {
        const isCurrentlyPinned = document.body.classList.contains('sidebar-tetap');
        if (isCurrentlyPinned) {
          // Collapse sidebar on desktop
          document.body.classList.remove('sidebar-tetap');
          drawer.classList.add('-translate-x-full', 'pointer-events-none');
          drawer.classList.remove('pointer-events-auto');
          if (backdrop) backdrop.classList.add('hidden');
          if (floatBtn) floatBtn.classList.remove('hidden');
          try { localStorage.setItem('sidebar_desktop_collapsed', 'true'); } catch (e) {}
        } else {
          // Expand sidebar on desktop
          document.body.classList.add('sidebar-tetap');
          drawer.classList.remove('-translate-x-full', 'pointer-events-none');
          drawer.classList.add('pointer-events-auto');
          if (backdrop) backdrop.classList.add('hidden');
          if (floatBtn) floatBtn.classList.add('hidden');
          try { localStorage.setItem('sidebar_desktop_collapsed', 'false'); } catch (e) {}
        }
      } else {
        // Mobile / Tablet Slide Drawer
        if (drawer.classList.contains('-translate-x-full')) {
          drawer.classList.remove('-translate-x-full', 'pointer-events-none');
          drawer.classList.add('pointer-events-auto');
          if (backdrop) backdrop.classList.remove('hidden');
        } else {
          drawer.classList.add('-translate-x-full', 'pointer-events-none');
          drawer.classList.remove('pointer-events-auto');
          if (backdrop) backdrop.classList.add('hidden');
        }
      }
    }

    function closeCurriculumDrawer() {
      const isDesktop = window.matchMedia('(min-width: 1280px)').matches;
      if (!isDesktop) {
        const drawer = document.getElementById('curriculum-drawer');
        if (drawer) {
          drawer.classList.add('-translate-x-full', 'pointer-events-none');
          drawer.classList.remove('pointer-events-auto');
        }
        const backdrop = document.getElementById('curriculum-drawer-backdrop');
        if (backdrop) backdrop.classList.add('hidden');
      }
    }

    function ukurTinggiHeader() {
      const h = document.getElementById('app-header');
      if (!h) return;
      document.documentElement.style.setProperty('--tinggi-header', h.offsetHeight + 'px');
    }

    function pasangSidebar() {
      ukurTinggiHeader();
      window.addEventListener('resize', ukurTinggiHeader);
      if (window.ResizeObserver) {
        const h = document.getElementById('app-header');
        if (h) new ResizeObserver(ukurTinggiHeader).observe(h);
      }
      const mq = window.matchMedia('(min-width: 1280px)');
      const terapkan = function (cocok) {
        let isCollapsed = false;
        try { isCollapsed = (localStorage.getItem('sidebar_desktop_collapsed') === 'true'); } catch (e) {}
        const shouldPin = cocok && !isCollapsed;
        document.body.classList.toggle('sidebar-tetap', shouldPin);
        const drawer = document.getElementById('curriculum-drawer');
        const floatBtn = document.getElementById('btn-floating-open-sidebar');
        if (!drawer) return;
        if (shouldPin) {
          drawer.classList.remove('-translate-x-full', 'pointer-events-none');
          drawer.classList.add('pointer-events-auto');
          const bd = document.getElementById('curriculum-drawer-backdrop');
          if (bd) bd.classList.add('hidden');
          if (floatBtn) floatBtn.classList.add('hidden');
        } else {
          drawer.classList.add('-translate-x-full', 'pointer-events-none');
          drawer.classList.remove('pointer-events-auto');
          if (floatBtn && cocok) floatBtn.classList.remove('hidden');
        }
        if (typeof renderCurriculumDrawer === 'function') {
          const cari = document.getElementById('drawer-search-input');
          renderCurriculumDrawer(cari ? cari.value : '');
        }
      };
      terapkan(mq.matches);
      if (mq.addEventListener) mq.addEventListener('change', function (e) { terapkan(e.matches); });
      else if (mq.addListener) mq.addListener(function (e) { terapkan(e.matches); });
    }

    function renderCurriculumDrawer(filterText = '') {
      const container = document.getElementById('drawer-meetings-container');
      if (!container) return;
      container.innerHTML = '';
      const q = filterText.toLowerCase().trim();

      let totalMeetings = 0;
      let completedMeetings = 0;

      const streamMeta = {
        'wajib': { prefix: 'A', name: 'Matematika Wajib', icon: 'fa-solid fa-shapes text-blue-400' },
        'minat': { prefix: 'B', name: 'Additional Mathematics', icon: 'fa-solid fa-infinity text-amber-400' },
        'clil': { prefix: 'C', name: 'Program Khusus CLIL', icon: 'fa-solid fa-globe text-amber-400' }
      };

      if (!window._openDrawerSubjects) window._openDrawerSubjects = {};
      if (!window._openDrawerBabs) window._openDrawerBabs = {};

      // Tentukan subject aktif (default ke 'wajib' jika di beranda)
      const activeSubj = (currentMode && currentMode !== 'home') ? currentMode : 'wajib';
      window._openDrawerSubjects[activeSubj] = true;
      
      const currentM = (db[activeSubj] || [])[currentMeetingIdx || 0];
      if (currentM && currentM.bab) {
        window._openDrawerBabs[`${activeSubj}__${currentM.bab}`] = true;
      }

      ['wajib', 'minat', 'clil'].forEach(subj => {
        const meetings = db[subj] || [];
        if (meetings.length === 0) return;

        const babsMap = {};
        meetings.forEach(m => {
          const babName = m.bab || 'Materi Pembelajaran';
          if (!babsMap[babName]) babsMap[babName] = [];
          babsMap[babName].push(m);
        });

        const filteredBabs = {};
        let subjMatchCount = 0;

        Object.keys(babsMap).forEach(bName => {
          const mList = babsMap[bName];
          const matched = mList.filter(m => !q || 
            m.title.toLowerCase().includes(q) || 
            m.id.toLowerCase().includes(q) || 
            bName.toLowerCase().includes(q)
          );
          if (matched.length > 0) {
            filteredBabs[bName] = matched;
            subjMatchCount += matched.length;
          }
        });

        if (subjMatchCount === 0) return;

        const meta = streamMeta[subj] || { prefix: '', name: subj, icon: 'fa-solid fa-book' };
        const isSubjOpen = q ? true : (window._openDrawerSubjects[subj] !== false);

        // 1. KONTEN LEVEL 1: ACCORDION MATA PELAJARAN (A. MATEMATIKA WAJIB)
        const subjWrapper = document.createElement('div');
        subjWrapper.className = "rounded-xl border border-blue-900/60 bg-[#08101E] overflow-hidden shadow-sm mb-2";

        const subjHeader = document.createElement('button');
        subjHeader.type = "button";
        subjHeader.className = "w-full px-2.5 py-1.5 bg-[#060D1A] hover:bg-[#0D1B2E] flex items-center justify-between transition border-b border-blue-900/40 cursor-pointer";
        subjHeader.innerHTML = `
          <div class="flex items-center gap-2 min-w-0">
            <span class="w-5 h-5 rounded-lg bg-amber-500/20 text-amber-300 font-black text-xs flex items-center justify-center shrink-0 border border-amber-500/40">
              ${meta.prefix}
            </span>
            <span class="text-xs font-black text-slate-100 uppercase tracking-wider truncate flex items-center gap-1.5">
              <i class="${meta.icon} text-xs"></i> ${meta.name}
            </span>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <span class="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-mono font-bold text-slate-400 border border-slate-700">
              ${subjMatchCount} Pertemuan
            </span>
            <i class="fa-solid fa-chevron-down text-slate-400 text-xs transition-transform duration-200 ${isSubjOpen ? 'rotate-180' : ''}"></i>
          </div>
        `;

        const subjBody = document.createElement('div');
        subjBody.className = isSubjOpen ? "p-2 space-y-2 block" : "p-2 space-y-2 hidden";

        subjHeader.onclick = () => {
          const currentlyOpen = !subjBody.classList.contains('hidden');
          if (currentlyOpen) {
            subjBody.classList.add('hidden');
            subjHeader.querySelector('.fa-chevron-down').classList.remove('rotate-180');
            window._openDrawerSubjects[subj] = false;
          } else {
            subjBody.classList.remove('hidden');
            subjHeader.querySelector('.fa-chevron-down').classList.add('rotate-180');
            window._openDrawerSubjects[subj] = true;
          }
        };

        // 2. KONTEN LEVEL 2: ACCORDION BAB / SUB-MENU (Bab 1: Kaidah Pencacahan)
        Object.keys(filteredBabs).forEach((bName, bIdx) => {
          const mList = filteredBabs[bName];
          const babKey = `${subj}__${bName}`;
          
          // Buka bab jika aktif, jika ada pencarian, atau default Bab 1 pada mata pelajaran aktif
          const isBabOpen = q ? true : (window._openDrawerBabs[babKey] !== undefined ? window._openDrawerBabs[babKey] : (subj === activeSubj && bIdx === 0));

          const babWrapper = document.createElement('div');
          babWrapper.className = "rounded-xl border border-slate-800 bg-slate-950/60 overflow-hidden";

          const babHeader = document.createElement('button');
          babHeader.type = "button";
          babHeader.className = "w-full px-3 py-2 bg-slate-900/80 hover:bg-slate-850 flex items-center justify-between text-left transition border-b border-slate-800/40 cursor-pointer";
          babHeader.innerHTML = `
            <div class="flex items-center gap-2 min-w-0">
              <i class="fa-regular fa-folder-open text-amber-400 text-xs shrink-0"></i>
              <span class="text-xs font-bold text-slate-200 truncate">${bName}</span>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <span class="text-[10px] font-mono text-slate-400 font-semibold">${mList.length}</span>
              <i class="fa-solid fa-chevron-down text-slate-500 text-[10px] transition-transform duration-200 ${isBabOpen ? 'rotate-180' : ''}"></i>
            </div>
          `;

          const babBody = document.createElement('div');
          babBody.className = isBabOpen ? "p-1.5 space-y-1 block" : "p-1.5 space-y-1 hidden";

          babHeader.onclick = () => {
            const isNowOpen = !babBody.classList.contains('hidden');
            if (isNowOpen) {
              babBody.classList.add('hidden');
              babHeader.querySelector('.fa-chevron-down').classList.remove('rotate-180');
              window._openDrawerBabs[babKey] = false;
            } else {
              babBody.classList.remove('hidden');
              babHeader.querySelector('.fa-chevron-down').classList.add('rotate-180');
              window._openDrawerBabs[babKey] = true;
            }
          };

          // 3. KONTEN LEVEL 3: SUB-MENU PERTEMUAN (P01, P02, dst.)
          mList.forEach(m => {
            totalMeetings++;
            const hasQuizDone = userSessionScores[`${subj}_${m.id}_0`] !== undefined;
            if (hasQuizDone) completedMeetings++;

            const sedangDibuka = (currentMode === subj) &&
              (db[subj] || [])[currentMeetingIdx] &&
              (db[subj] || [])[currentMeetingIdx].id === m.id;

            const item = document.createElement('button');
            item.type = "button";
            item.className = "w-full text-left px-2.5 py-2 rounded-lg flex items-center gap-2.5 transition group cursor-pointer " +
              (sedangDibuka 
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-sm font-bold" 
                : "bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white border border-transparent");
            
            if (sedangDibuka) item.setAttribute('aria-current', 'true');

            item.innerHTML = `
              <span class="w-7 h-6 rounded-md bg-slate-950 border border-slate-700 text-amber-300 font-mono font-black text-[11px] flex items-center justify-center shrink-0 group-hover:border-amber-400 transition">
                ${m.id}
              </span>
              <span class="text-xs truncate flex-1 leading-snug">${m.title}</span>
              ${hasQuizDone ? '<i class="fa-solid fa-circle-check text-amber-400 text-xs shrink-0"></i>' : '<i class="fa-solid fa-angle-right text-slate-600 group-hover:text-slate-400 text-[10px] shrink-0"></i>'}
            `;

            item.onclick = () => {
              currentMode = subj;
              const idx = meetings.findIndex(x => x.id === m.id);
              currentMeetingIdx = idx !== -1 ? idx : 0;
              currentSlideIdx = 0;
              renderAppView();
              closeCurriculumDrawer();
            };

            babBody.appendChild(item);
          });

          babWrapper.appendChild(babHeader);
          babWrapper.appendChild(babBody);
          subjBody.appendChild(babWrapper);
        });

        subjWrapper.appendChild(subjHeader);
        subjWrapper.appendChild(subjBody);
        container.appendChild(subjWrapper);
      });

      // =======================================================================
      // KONTEN LEVEL 1 (TAMBAHAN): JADWAL KBM REGULER KELAS XII (SIDEBAR)
      // =======================================================================
      const isJadwalOpen = window._openDrawerJadwal === true;
      const jadwalWrapper = document.createElement('div');
      jadwalWrapper.className = "rounded-2xl border border-slate-700/80 bg-slate-900/90 overflow-hidden shadow-md mb-3";

      const jadwalHeader = document.createElement('button');
      jadwalHeader.type = "button";
      jadwalHeader.className = "w-full px-3.5 py-2.5 bg-slate-950/90 hover:bg-slate-800/90 flex items-center justify-between transition border-b border-slate-800/60 cursor-pointer";
      jadwalHeader.innerHTML = `
        <div class="flex items-center gap-2 min-w-0">
          <span class="w-5 h-5 rounded-lg bg-blue-500/20 text-blue-300 font-black text-xs flex items-center justify-center shrink-0 border border-blue-500/40">
            <i class="fa-solid fa-clock text-[10px]"></i>
          </span>
          <span class="text-xs font-black text-slate-100 uppercase tracking-wider truncate flex items-center gap-1.5">
            <i class="fa-solid fa-calendar-week text-blue-400 text-xs"></i> Jadwal KBM Reguler XII
          </span>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <span class="px-2 py-0.5 rounded-md bg-blue-950 text-[10px] font-mono font-bold text-blue-300 border border-blue-800/60">
            24 JP
          </span>
          <i class="fa-solid fa-chevron-down text-slate-400 text-xs transition-transform duration-200 ${isJadwalOpen ? 'rotate-180' : ''}"></i>
        </div>
      `;

      const jadwalBody = document.createElement('div');
      jadwalBody.className = isJadwalOpen ? "p-2.5 space-y-2.5 block text-xs" : "p-2.5 space-y-2.5 hidden text-xs";
      jadwalBody.innerHTML = `
        <!-- 12 F.1 -->
        <div class="p-2.5 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1.5">
          <div class="flex items-center justify-between border-b border-slate-800/80 pb-1">
            <span class="font-extrabold text-amber-400 font-mono text-xs">12 F.1</span>
            <span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-900/40 text-blue-300 border border-blue-700/50">Wajib 4 JP</span>
          </div>
          <div class="space-y-1 font-mono text-[11px] text-slate-300">
            <div class="flex justify-between"><span>Senin (2 JP):</span><span class="text-slate-100 font-bold">13.00 - 14.15</span></div>
            <div class="flex justify-between"><span>Kamis (2 JP):</span><span class="text-slate-100 font-bold">13.00 - 14.15</span></div>
          </div>
        </div>

        <!-- 12 F.2 -->
        <div class="p-2.5 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1.5">
          <div class="flex items-center justify-between border-b border-slate-800/80 pb-1">
            <span class="font-extrabold text-amber-400 font-mono text-xs">12 F.2</span>
            <span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-900/40 text-blue-300 border border-blue-700/50">Wajib 4 JP</span>
          </div>
          <div class="space-y-1 font-mono text-[11px] text-slate-300">
            <div class="flex justify-between"><span>Rabu (2 JP):</span><span class="text-slate-100 font-bold">13.00 - 14.20</span></div>
            <div class="flex justify-between"><span>Jumat (2 JP):</span><span class="text-slate-100 font-bold">13.15 - 14.20</span></div>
          </div>
        </div>

        <!-- 12 F.3 -->
        <div class="p-2.5 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1.5">
          <div class="flex items-center justify-between border-b border-slate-800/80 pb-1">
            <span class="font-extrabold text-amber-400 font-mono text-xs">12 F.3</span>
            <span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-purple-900/40 text-purple-300 border border-purple-700/50">Wajib 2 JP & Minat 4 JP</span>
          </div>
          <div class="space-y-1 font-mono text-[11px] text-slate-300">
            <div class="flex justify-between"><span>Selasa Minat (2 JP):</span><span class="text-slate-100 font-bold">14.20 - 15.30</span></div>
            <div class="flex justify-between"><span>Rabu Wajib (1 JP):</span><span class="text-slate-100 font-bold">07.30 - 08.00</span></div>
            <div class="flex justify-between"><span>Kamis Minat (2 JP):</span><span class="text-slate-100 font-bold">09.10 - 10.40</span></div>
            <div class="flex justify-between"><span>Jumat Wajib (1 JP):</span><span class="text-slate-100 font-bold">14.20 - 14.50</span></div>
          </div>
        </div>

        <!-- 12 F.4 -->
        <div class="p-2.5 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1.5">
          <div class="flex items-center justify-between border-b border-slate-800/80 pb-1">
            <span class="font-extrabold text-amber-400 font-mono text-xs">12 F.4</span>
            <span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-purple-900/40 text-purple-300 border border-purple-700/50">Wajib 4 JP & Minat 4 JP</span>
          </div>
          <div class="space-y-1 font-mono text-[11px] text-slate-300">
            <div class="flex justify-between"><span>Senin Wajib (2 JP):</span><span class="text-slate-100 font-bold">10.15 - 12.00</span></div>
            <div class="flex justify-between"><span>Selasa Minat (2 JP):</span><span class="text-slate-100 font-bold">10.40 - 12.00</span></div>
            <div class="flex justify-between"><span>Kamis Minat (2 JP):</span><span class="text-slate-100 font-bold">10.40 - 12.00</span></div>
            <div class="flex justify-between"><span>Jumat Wajib (2 JP):</span><span class="text-slate-100 font-bold">07.30 - 08.45</span></div>
          </div>
        </div>

        <!-- TUGAS TAMBAHAN & WALAS -->
        <div class="p-2.5 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
          <div class="font-bold text-amber-300 text-[11px] flex items-center gap-1.5">
            <i class="fa-solid fa-user-tie text-[10px]"></i> Tugas Tambahan / Walas
          </div>
          <p class="text-[10px] text-slate-400">Jumat 06.30 (Morning Greetings) | 07.00 (In-charge Dhuha) | 14.50 (Sesi P1 Walas)</p>
        </div>
      `;

      jadwalHeader.onclick = () => {
        const currentlyOpen = !jadwalBody.classList.contains('hidden');
        if (currentlyOpen) {
          jadwalBody.classList.add('hidden');
          jadwalHeader.querySelector('.fa-chevron-down').classList.remove('rotate-180');
          window._openDrawerJadwal = false;
        } else {
          jadwalBody.classList.remove('hidden');
          jadwalHeader.querySelector('.fa-chevron-down').classList.add('rotate-180');
          window._openDrawerJadwal = true;
        }
      };

      jadwalWrapper.appendChild(jadwalHeader);
      jadwalWrapper.appendChild(jadwalBody);
      container.appendChild(jadwalWrapper);

      // =======================================================================
      // KONTEN LEVEL 1 (TAMBAHAN): KALENDER PENDIDIKAN & AGENDA AKADEMIK 2026/2027
      // =======================================================================
      const isCalOpen = window._openDrawerCalendar === true;
      const calWrapper = document.createElement('div');
      calWrapper.className = "rounded-2xl border border-slate-700/80 bg-slate-900/90 overflow-hidden shadow-md mb-3";

      const calHeader = document.createElement('button');
      calHeader.type = "button";
      calHeader.className = "w-full px-3.5 py-2.5 bg-slate-950/90 hover:bg-slate-800/90 flex items-center justify-between transition border-b border-slate-800/60 cursor-pointer";
      calHeader.innerHTML = `
        <div class="flex items-center gap-2 min-w-0">
          <span class="w-5 h-5 rounded-lg bg-amber-500/20 text-emerald-300 font-black text-xs flex items-center justify-center shrink-0 border border-blue-500/40">
            <i class="fa-solid fa-calendar-days text-[10px]"></i>
          </span>
          <span class="text-xs font-black text-slate-100 uppercase tracking-wider truncate flex items-center gap-1.5">
            <i class="fa-solid fa-bullhorn text-amber-400 text-xs"></i> Kalender & Agenda Ujian
          </span>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <span class="px-2 py-0.5 rounded-md bg-emerald-950 text-[10px] font-mono font-bold text-emerald-300 border border-emerald-800/60">
            2026/2027
          </span>
          <i class="fa-solid fa-chevron-down text-slate-400 text-xs transition-transform duration-200 ${isCalOpen ? 'rotate-180' : ''}"></i>
        </div>
      `;

      const calBody = document.createElement('div');
      calBody.className = isCalOpen ? "p-2.5 space-y-2 block text-xs" : "p-2.5 space-y-2 hidden text-xs";
      calBody.innerHTML = `
        <div class="space-y-1.5">
          <div class="p-2 bg-purple-950/40 border border-purple-800/50 rounded-xl">
            <div class="flex justify-between items-center"><span class="font-bold text-purple-300 text-[11px]">Gladi Bersih TKA & ANBK</span><span class="font-mono text-[10px] text-purple-400">12 - 18 Okt 2026</span></div>
            <p class="text-[10px] text-slate-400 mt-0.5">Gelombang 2 SMA GIS 2 Serpong</p>
          </div>
          <div class="p-2 bg-rose-950/40 border border-rose-800/50 rounded-xl">
            <div class="flex justify-between items-center"><span class="font-bold text-rose-300 text-[11px]">Pelaksanaan UTAMA TKA</span><span class="font-mono text-[10px] text-amber-400">2 - 5 Nov 2026</span></div>
            <p class="text-[10px] text-slate-400 mt-0.5">Asesmen Standar Nasional</p>
          </div>
          <div class="p-2 bg-amber-950/40 border border-amber-800/50 rounded-xl">
            <div class="flex justify-between items-center"><span class="font-bold text-amber-300 text-[11px]">Pengumuman Nilai TKA</span><span class="font-mono text-[10px] text-amber-400">23 Des 2026</span></div>
            <p class="text-[10px] text-slate-400 mt-0.5">Hasil Resmi Kemdikbudristek</p>
          </div>
          <div class="p-2 bg-cyan-950/40 border border-cyan-800/50 rounded-xl">
            <div class="flex justify-between items-center"><span class="font-bold text-amber-300 text-[11px]">Pelaksanaan UTBK-SNBT</span><span class="font-mono text-[10px] text-blue-400">21 - 30 Apr 2027</span></div>
            <p class="text-[10px] text-slate-400 mt-0.5">Seleksi Nasional Masuk PTN 2027</p>
          </div>
          <div class="p-2 bg-emerald-950/40 border border-emerald-800/50 rounded-xl">
            <div class="flex justify-between items-center"><span class="font-bold text-emerald-300 text-[11px]">Pengumuman SNBT 2027</span><span class="font-mono text-[10px] text-amber-400">25 Mei 2027</span></div>
            <p class="text-[10px] text-slate-400 mt-0.5">Pengumuman Kelulusan PTN</p>
          </div>
        </div>
      `;

      calHeader.onclick = () => {
        const currentlyOpen = !calBody.classList.contains('hidden');
        if (currentlyOpen) {
          calBody.classList.add('hidden');
          calHeader.querySelector('.fa-chevron-down').classList.remove('rotate-180');
          window._openDrawerCalendar = false;
        } else {
          calBody.classList.remove('hidden');
          calHeader.querySelector('.fa-chevron-down').classList.add('rotate-180');
          window._openDrawerCalendar = true;
        }
      };

      calWrapper.appendChild(calHeader);
      calWrapper.appendChild(calBody);
      container.appendChild(calWrapper);

      renderMath(container);

      const progressLabel = document.getElementById('drawer-progress-label');
      if (progressLabel) progressLabel.innerText = `${completedMeetings} / ${totalMeetings} Pertemuan Dipelajari`;
    }

    function filterDrawerMeetings(val) {
      renderCurriculumDrawer(val);
    }

    // QUICK SEARCH MODAL (CTRL + K)
    function openSearchModal() {
      const modal = document.getElementById('quick-search-modal');
      modal.classList.remove('hidden');
      const input = document.getElementById('quick-search-input');
      input.value = '';
      input.focus();
      handleQuickSearch('');
    }

    function closeSearchModal() {
      document.getElementById('quick-search-modal').classList.add('hidden');
    }

    function handleQuickSearch(query) {
      const resContainer = document.getElementById('quick-search-results');
      resContainer.innerHTML = '';
      const q = query.toLowerCase().trim();

      const allItems = [];
      const terkunci = lockedSubjects();
      ['wajib', 'minat', 'clil'].filter(s => terkunci.indexOf(s) === -1).forEach(subj => {
        (db[subj] || []).forEach(m => {
          allItems.push({
            type: 'slide',
            subj: subj,
            id: m.id,
            title: m.title,
            bab: m.bab,
            text: `${m.id} ${m.title} ${m.bab || ''}`
          });
        });
      });

      const matches = allItems.filter(item => !q || item.text.toLowerCase().includes(q)).slice(0, 12);

      if (matches.length === 0) {
        resContainer.innerHTML = '<div class="p-6 text-center text-xs text-slate-400">Tidak ketemu. Coba kata yang lebih pendek — misalnya “integral” saja.</div>';
        return;
      }

      matches.forEach(item => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left p-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 flex items-center justify-between gap-3 transition";
        btn.innerHTML = `
          <div class="flex items-center gap-2.5 truncate">
            <span class="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 font-mono font-bold text-xs">${item.id}</span>
            <div class="truncate">
              <span class="text-xs font-semibold text-white">${item.title}</span>
              <span class="text-[10px] text-slate-400 block">${item.bab || item.subj.toUpperCase()}</span>
            </div>
          </div>
          <span class="text-[10px] text-blue-400 font-mono shrink-0">Buka Slide ➔</span>
        `;
        btn.onclick = () => {
          currentMode = item.subj;
          const meetings = db[item.subj] || [];
          const idx = meetings.findIndex(x => x.id === item.id);
          currentMeetingIdx = idx !== -1 ? idx : 0;
          currentSlideIdx = 0;
          renderAppView();
          closeSearchModal();
        };
        resContainer.appendChild(btn);
      });
    }


    // (dipindah ke berkas data per tingkat)


    let currentCalFilter = 'all';
    let currentModalCalFilter = 'all';

    function renderAcademicCalendar(filter = 'all', containerId = 'home-academic-calendar') {
      const container = document.getElementById(containerId);
      if (!container) return;
      container.innerHTML = '';

      // Group events by Month
      const months = [
        "Juli 2026", "Agustus 2026", "September 2026", "Oktober 2026", "November 2026", "Desember 2026",
        "Januari 2027", "Februari 2027", "Maret 2027", "April 2027", "Mei 2027", "Juni 2027"
      ];

      months.forEach(mName => {
        let events = CALENDAR_DATA.filter(ev => ev.month === mName);
        if (filter !== 'all') {
          events = events.filter(ev => ev.cat === filter);
        }

        if (events.length > 0) {
          const mCard = document.createElement('div');
          const isSem1 = events[0].sem === 1;
          mCard.className = "p-3.5 bg-slate-950/90 rounded-2xl border border-slate-800 space-y-2 hover:border-slate-700 transition";
          
          mCard.innerHTML = `
            <div class="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full ${isSem1 ? 'bg-blue-400' : 'bg-emerald-400'}"></span>
                <h4 class="font-bold text-white text-xs">${mName}</h4>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded-full ${isSem1 ? 'bg-blue-900/40 text-blue-300 border border-blue-800/50' : 'bg-emerald-900/40 text-emerald-300 border border-emerald-800/50'}">
                ${isSem1 ? 'Semester 1' : 'Semester 2'}
              </span>
            </div>
            <div class="space-y-1.5">
              ${events.map(ev => `
                <div class="p-2 bg-slate-900/90 rounded-xl border border-slate-800/60 flex items-start justify-between gap-2 text-xs">
                  <div class="space-y-0.5 flex-1 min-w-0">
                    <span class="font-mono text-[10px] font-bold text-slate-400 block">${ev.date}</span>
                    <span class="font-medium text-slate-200 block text-[11px] leading-snug">${ev.title}</span>
                  </div>
                  <span class="px-2 py-0.5 rounded-md text-[11px] font-black shrink-0 ${
                    ev.color === 'purple' ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50' :
                    ev.color === 'blue' ? 'bg-blue-900/40 text-blue-300 border border-blue-700/50' :
                    ev.color === 'emerald' ? 'bg-emerald-900/40 text-emerald-300 border border-emerald-700/50' :
                    ev.color === 'amber' ? 'bg-amber-900/40 text-amber-300 border border-amber-700/50' :
                    'bg-rose-900/40 text-rose-300 border border-rose-700/50'
                  }">${ev.badge}</span>
                </div>
              `).join('')}
            </div>
          `;
          container.appendChild(mCard);
        }
      });

      if (container.children.length === 0) {
        container.innerHTML = '<div class="p-6 text-center text-xs text-slate-400 col-span-full">Tidak ada agenda akademik untuk kategori yang dipilih.</div>';
      }
    }

    function filterAcademicCalendar(filter) {
      currentCalFilter = filter;
      document.querySelectorAll('#home-cal-filters .cal-filter-btn').forEach(btn => {
        if (btn.getAttribute('data-filter') === filter) {
          btn.className = "cal-filter-btn px-2.5 py-1 rounded-lg font-bold bg-blue-600 text-white shadow";
        } else {
          btn.className = "cal-filter-btn px-2.5 py-1 rounded-lg font-bold text-slate-400 hover:bg-slate-800";
        }
      });
      renderAcademicCalendar(filter, 'home-academic-calendar');
    }

    function filterModalCalendar(filter) {
      currentModalCalFilter = filter;
      document.querySelectorAll('#modal-cal-filters .modal-cal-btn').forEach(btn => {
        if (btn.getAttribute('data-mfilter') === filter) {
          btn.className = "modal-cal-btn px-2.5 py-1 rounded-lg font-bold bg-blue-600 text-white shadow";
        } else {
          btn.className = "modal-cal-btn px-2.5 py-1 rounded-lg font-bold text-slate-400 hover:bg-slate-800";
        }
      });
      renderAcademicCalendar(filter, 'modal-academic-calendar');
    }

    function switchModalView(view) {
      const vCal = document.getElementById('modal-view-cal');
      const vKbm = document.getElementById('modal-view-kbm');
      const btnCal = document.getElementById('modal-tab-cal');
      const btnKbm = document.getElementById('modal-tab-kbm');

      if (view === 'cal') {
        vCal.classList.remove('hidden');
        vKbm.classList.add('hidden');
        btnCal.className = "px-3 py-1.5 rounded-lg font-black bg-emerald-600 text-white shadow";
        btnKbm.className = "px-3 py-1.5 rounded-lg font-bold text-slate-300 hover:text-white";
        renderAcademicCalendar(currentModalCalFilter, 'modal-academic-calendar');
      } else {
        vCal.classList.add('hidden');
        vKbm.classList.remove('hidden');
        btnKbm.className = "px-3 py-1.5 rounded-lg font-black bg-blue-600 text-white shadow";
        btnCal.className = "px-3 py-1.5 rounded-lg font-bold text-slate-300 hover:text-white";
      }
    }

    // SCHEDULE & ANALYTICS MODALS
    function openScheduleModal() {
      document.getElementById('schedule-modal').classList.remove('hidden');
      renderAcademicCalendar(currentModalCalFilter, 'modal-academic-calendar');
    }
    function closeScheduleModal() {
      document.getElementById('schedule-modal').classList.add('hidden');
    }

    function openAnalyticsModal() {
      document.getElementById('analytics-modal').classList.remove('hidden');
      
      let answeredCount = 0;
      let correctCount = 0;
      let pkgsMap = {};

      Object.keys(userSessionScores).forEach(key => {
        answeredCount++;
        if (userSessionScores[key] === true) correctCount++;
        const parts = key.split('_');
        const pkgKey = `${parts[0]}_${parts[1]}`;
        if (!pkgsMap[pkgKey]) pkgsMap[pkgKey] = { total: 0, right: 0, subj: parts[0], id: parts[1] };
        pkgsMap[pkgKey].total++;
        if (userSessionScores[key] === true) pkgsMap[pkgKey].right++;
      });

      const avgScore = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
      document.getElementById('analytics-total-answered').innerText = answeredCount;
      document.getElementById('analytics-avg-score').innerText = `${avgScore}%`;
      // "tuntas" must mean all 10 answered, not merely opened
      let fullyDone = 0;
      Object.values(pkgsMap).forEach(p => { if (p.total >= 10) fullyDone++; });
      document.getElementById('analytics-completed-pkgs').innerText = `${fullyDone} / 57`;
      catatSesiCbt(tkaSubj, tkaPkgId);

      renderWeakChapters();
      if (['wajib', 'minat', 'clil'].includes(tkaSubj)) dashAliran = tkaSubj;
      renderDashboard();

      const listContainer = document.getElementById('analytics-pkgs-list');
      listContainer.innerHTML = '';
      if (Object.keys(pkgsMap).length === 0) {
        listContainer.innerHTML = '<div class="p-4 text-center text-xs text-slate-400">Belum ada paket CBT yang dikerjakan. Ayo mulai latihan!</div>';
      } else {
        Object.keys(pkgsMap).forEach(k => {
          const item = pkgsMap[k];
          const pct = Math.round((item.right / item.total) * 100);
          const div = document.createElement('div');
          div.className = "p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-xs";
          div.innerHTML = `
            <div class="flex items-center gap-2">
              <span class="font-mono font-bold text-amber-400">${item.id}</span>
              <span class="text-slate-300 font-medium">${item.subj.toUpperCase()}</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-slate-400 font-mono">${item.right} / ${item.total}</span>
              <span class="font-black font-mono ${pct >= 70 ? 'text-amber-400' : 'text-amber-400'}">${pct}%</span>
            </div>
          `;
          listContainer.appendChild(div);
        });
      }
    }

    // Which chapter is the student actually weak in? Groups every answered
    // question by the `bab` of its meeting, so revision can be targeted.
    function chapterStats() {
      const idx = {};
      ['wajib', 'minat', 'clil'].forEach(subj => (db[subj] || []).forEach(m => {
        idx[`${subj}_${m.id}`] = m.bab || m.title || m.id;
      }));
      const stats = {};
      Object.keys(userSessionScores).forEach(key => {
        const parts = key.split('_');
        const bab = idx[`${parts[0]}_${parts[1]}`] || `${parts[0].toUpperCase()} ${parts[1]}`;
        if (!stats[bab]) stats[bab] = { total: 0, right: 0 };
        stats[bab].total++;
        if (userSessionScores[key] === true) stats[bab].right++;
      });
      return Object.keys(stats).map(bab => ({
        bab, total: stats[bab].total, right: stats[bab].right,
        pct: Math.round((stats[bab].right / stats[bab].total) * 100)
      })).sort((a, b) => a.pct - b.pct || b.total - a.total);
    }

    // ---------------------------------------------------------------
    // DASHBOARD PENGUASAAN MATERI
    // ---------------------------------------------------------------
    let dashAliran = 'wajib';

    function dashBabList(aliran) {
      const urut = [], peta = {};
      (db[aliran] || []).forEach(function (m) {
        const k = m.bab || 'Lainnya';
        if (peta[k] === undefined) { peta[k] = urut.length; urut.push({ key: k, ids: [] }); }
        urut[peta[k]].ids.push(m.id);
      });
      return urut;
    }

    // Nama bab panjang tidak muat di sudut radar; dipendekkan jadi "BAB n".
    function dashBabPendek(bab, i) {
      const m = /^Bab\s*(\d+)/i.exec(bab || '');
      return m ? ('BAB ' + m[1]) : ('BAB ' + (i + 1));
    }

    function dashStat(aliran) {
      const src = tkaSrc(aliran);
      return dashBabList(aliran).map(function (b, i) {
        let total = 0, benar = 0, butir = 0;
        let slideAda = 0, slideBuka = 0;
        b.ids.forEach(function (pid) {
          const pk = src[pid];
          if (pk) butir += (pk.questions || []).length;
          const n = pk ? (pk.questions || []).length : 0;
          for (let q = 0; q < n; q++) {
            const v = userSessionScores[aliran + '_' + pid + '_' + q];
            if (v !== undefined) { total++; if (v === true) benar++; }
          }
          slideAda += 11;
          slideBuka += ((slideProgress[aliran + '_' + pid] || []).length);
        });
        return {
          bab: b.key, pendek: dashBabPendek(b.key, i), ids: b.ids,
          total: total, benar: benar, butir: butir,
          pct: total ? Math.round((benar / total) * 100) : 0,
          cakup: butir ? Math.round((total / butir) * 100) : 0,
          slidePct: slideAda ? Math.round((slideBuka / slideAda) * 100) : 0,
          slideBuka: slideBuka, slideAda: slideAda
        };
      });
    }

    function dashRadar(rows) {
      const cv = document.getElementById('dash-radar');
      if (!cv) return;
      const S = labSetup(cv), ctx = S.ctx, w = S.w, h = S.h;
      const cx = w / 2, cy = h / 2 + 4;
      const R = Math.min(w, h) / 2 - 34;
      const n = rows.length;
      if (!n || R <= 10) return;

      // jaring
      ctx.strokeStyle = LAB_C.grid; ctx.lineWidth = 1;
      [0.25, 0.5, 0.75, 1].forEach(function (f) {
        ctx.beginPath();
        for (let i = 0; i < n; i++) {
          const a = -Math.PI / 2 + i * 2 * Math.PI / n;
          const x = cx + Math.cos(a) * R * f, y = cy + Math.sin(a) * R * f;
          i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
        }
        ctx.closePath(); ctx.stroke();
      });
      ctx.strokeStyle = LAB_C.axis;
      for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + i * 2 * Math.PI / n;
        ctx.beginPath(); ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R); ctx.stroke();
      }

      // area capaian
      ctx.beginPath();
      for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + i * 2 * Math.PI / n;
        const f = Math.max(0.02, rows[i].pct / 100);
        const x = cx + Math.cos(a) * R * f, y = cy + Math.sin(a) * R * f;
        i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.closePath();
      ctx.fillStyle = 'rgba(56,189,248,0.22)'; ctx.fill();
      ctx.strokeStyle = '#38BDF8'; ctx.lineWidth = 2.4; ctx.stroke();

      // ambang tuntas 70%
      ctx.save(); ctx.setLineDash([4, 4]); ctx.strokeStyle = 'rgba(16,185,129,0.65)'; ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + i * 2 * Math.PI / n;
        const x = cx + Math.cos(a) * R * 0.7, y = cy + Math.sin(a) * R * 0.7;
        i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.closePath(); ctx.stroke(); ctx.restore();

      for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + i * 2 * Math.PI / n;
        const f = Math.max(0.02, rows[i].pct / 100);
        const x = cx + Math.cos(a) * R * f, y = cy + Math.sin(a) * R * f;
        ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = rows[i].pct >= 70 ? '#34D399' : rows[i].pct >= 50 ? '#FBBF24' : '#FB7185';
        ctx.fill();
        const lx = cx + Math.cos(a) * (R + 20), ly = cy + Math.sin(a) * (R + 20);
        ctx.font = '800 10px ui-monospace, SFMono-Regular, Menlo, monospace';
        ctx.fillStyle = LAB_C.dim; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(rows[i].pendek, lx, ly - 5);
        ctx.fillStyle = rows[i].total ? LAB_C.tulis : LAB_C.tick;
        ctx.fillText(rows[i].total ? rows[i].pct + '%' : '—', lx, ly + 6);
      }
    }

    function dashWaktu(ts) {
      const d = new Date(ts);
      const p = function (v) { return (v < 10 ? '0' : '') + v; };
      return p(d.getDate()) + '/' + p(d.getMonth() + 1) + ' ' + p(d.getHours()) + ':' + p(d.getMinutes());
    }

    function renderDashboard() {
      const bar = document.getElementById('dash-aliran');
      if (!bar) return;
      pastikanKemajuan();
      const nama = { wajib: 'Matematika Wajib', minat: 'Matematika Peminatan', clil: 'CLIL Stream' };
      bar.innerHTML = '';
      ['wajib', 'minat', 'clil'].forEach(function (a) {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'to-chip' + (dashAliran === a ? ' is-on' : '');
        b.innerHTML = '<span>' + nama[a] + '</span>';
        b.onclick = function () { dashAliran = a; renderDashboard(); };
        bar.appendChild(b);
      });

      const rows = dashStat(dashAliran);
      requestAnimationFrame(function () { labPalet(); dashRadar(rows); });

      const dikerjakan = rows.filter(function (r) { return r.total > 0; });
      const ket = document.getElementById('dash-radar-ket');
      if (ket) {
        ket.innerHTML = dikerjakan.length
          ? ('Garis putus hijau adalah ambang tuntas 70%. ' + dikerjakan.length + ' dari ' + rows.length +
             ' bab sudah punya data.')
          : 'Belum ada soal CBT yang dikerjakan pada aliran ini — radar akan terisi setelah latihan pertama.';
      }

      const sl = document.getElementById('dash-slide-list');
      if (sl) {
        sl.innerHTML = rows.map(function (r) {
          const w = Math.max(r.slidePct, 1.5);
          const tone = r.slidePct >= 80 ? 'bg-amber-500' : r.slidePct >= 40 ? 'bg-blue-500' : 'bg-slate-600';
          return '<div class="dash-bar-row">' +
            '<div class="dash-bar-t"><span>' + r.bab + '</span>' +
              '<b>' + r.slidePct + '% <em>' + r.slideBuka + '/' + r.slideAda + ' slide</em></b></div>' +
            '<div class="dash-bar"><div class="' + tone + '" style="width:' + w + '%"></div></div>' +
          '</div>';
        }).join('');
      }
      const tot = rows.reduce(function (a, r) { return { b: a.b + r.slideBuka, a: a.a + r.slideAda }; }, { b: 0, a: 0 });
      const sp = document.getElementById('dash-slide-pct');
      if (sp) sp.textContent = (tot.a ? Math.round((tot.b / tot.a) * 100) : 0) + '%';

      // ---- diagnostik ----
      const dg = document.getElementById('dash-diag');
      if (dg) {
        const perlu = rows.filter(function (r) { return r.total >= 3 && r.pct < 70; })
                          .sort(function (a, b) { return a.pct - b.pct; });
        const belum = rows.filter(function (r) { return r.total < 3; });
        let html = '';
        if (perlu.length) {
          html += perlu.slice(0, 3).map(function (r) {
            const lemah = r.ids.filter(function (pid) {
              const src = tkaSrc(dashAliran); const pk = src[pid];
              const n = pk ? (pk.questions || []).length : 0;
              let t = 0, b = 0;
              for (let q = 0; q < n; q++) {
                const v = userSessionScores[dashAliran + '_' + pid + '_' + q];
                if (v !== undefined) { t++; if (v === true) b++; }
              }
              return t >= 2 && (b / t) < 0.7;
            });
            const judul = {};
            (db[dashAliran] || []).forEach(function (m) { judul[m.id] = m.title; });
            const saran = lemah.length
              ? lemah.slice(0, 3).map(function (pid) {
                  return '<button type="button" class="dash-rek" onclick="dashKe(\'' + pid + '\')">' +
                         '<b>' + pid + '</b> ' + (judul[pid] || '') + '</button>';
                }).join('')
              : '<span class="dash-kosong">Kerjakan lebih banyak butir agar rekomendasinya lebih tepat sasaran.</span>';
            return '<div class="dash-diag-b dash-' + (r.pct < 50 ? 'merah' : 'kuning') + '">' +
              '<div class="dash-diag-h"><span>' + r.bab + '</span>' +
                '<b>' + r.pct + '% <em>(' + r.benar + '/' + r.total + ')</em></b></div>' +
              '<div class="dash-diag-s">Ulangi pertemuan berikut:</div>' +
              '<div class="dash-rek-w">' + saran + '</div>' +
            '</div>';
          }).join('');
        }
        if (!perlu.length && rows.some(function (r) { return r.total >= 3; })) {
          html += '<div class="dash-diag-b dash-hijau"><div class="dash-diag-h"><span>Semua bab yang sudah diuji berada di atas 70%</span>' +
                  '<b><i class="fa-solid fa-circle-check"></i></b></div>' +
                  '<div class="dash-diag-s">Lanjutkan ke bab yang belum diuji untuk melengkapi radar.</div></div>';
        }
        if (belum.length) {
          html += '<div class="dash-diag-b dash-abu"><div class="dash-diag-h"><span>Belum cukup data</span>' +
            '<b>' + belum.length + ' bab</b></div>' +
            '<div class="dash-diag-s">Minimal 3 butir per bab diperlukan sebelum diagnosis bisa dipercaya: ' +
            belum.map(function (r) { return r.pendek; }).join(', ') + '.</div></div>';
        }
        dg.innerHTML = html || '<div class="dash-kosong">Belum ada data. Kerjakan satu paket CBT untuk memulai.</div>';
      }

      // ---- riwayat ----
      const rw = document.getElementById('dash-riwayat');
      if (rw) {
        const h = cbtHistory.slice().reverse();
        rw.innerHTML = h.length ? h.slice(0, 30).map(function (x) {
          const tone = x.pct >= 70 ? 'text-amber-400' : x.pct >= 50 ? 'text-amber-400' : 'text-amber-400';
          return '<div class="dash-riw"><span class="dash-riw-t">' + dashWaktu(x.ts) + '</span>' +
            '<span class="dash-riw-p">' + x.subj.toUpperCase() + ' ' + x.pkg + '</span>' +
            '<span class="dash-riw-n ' + tone + '">' + x.pct + '% <em>' + x.benar + '/' + x.n + '</em></span></div>';
        }).join('') : '<div class="dash-kosong">Riwayat terisi setelah sebuah paket CBT dikerjakan sampai tuntas.</div>';
      }
    }

    // lompat dari rekomendasi ke pertemuan yang perlu diulang
    function dashKe(pid) {
      const list = db[dashAliran] || [];
      const i = list.findIndex(function (m) { return m.id === pid; });
      if (i < 0) return;
      closeAnalyticsModal();
      currentMode = dashAliran; currentMeetingIdx = i; currentSlideIdx = 0;
      renderAppView();
    }

    function renderWeakChapters() {
      const box = document.getElementById('analytics-weak-list');
      if (!box) return;
      const rows = chapterStats().filter(r => r.total >= 3);
      box.innerHTML = '';
      if (rows.length === 0) {
        box.innerHTML = '<div class="p-3 text-center text-xs text-slate-400 bg-slate-950 rounded-xl border border-slate-800">Kerjakan minimal 3 soal pada sebuah bab untuk melihat diagnosis kelemahan.</div>';
        return;
      }
      rows.slice(0, 5).forEach(r => {
        // kelas harus literal: stylesheet statis tak bisa menyusun `text-${tone}-400`
        const txt = r.pct >= 70 ? 'text-amber-400' : r.pct >= 50 ? 'text-amber-400' : 'text-amber-400';
        const bar = r.pct >= 70 ? 'bg-amber-500' : r.pct >= 50 ? 'bg-amber-500' : 'bg-rose-500';
        const el = document.createElement('div');
        el.className = 'p-2.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5';
        el.innerHTML = `
          <div class="flex items-center justify-between gap-3 text-xs">
            <span class="text-slate-200 font-semibold truncate">${r.bab}</span>
            <span class="font-mono font-black ${txt} shrink-0">${r.pct}% <span class="text-slate-500 font-normal">(${r.right}/${r.total})</span></span>
          </div>
          <div class="h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div class="h-full ${bar} rounded-full" style="width:${Math.max(r.pct, 2)}%"></div>
          </div>`;
        box.appendChild(el);
      });
    }

    // Teachers cannot collect localStorage. Give them a file they can open in Excel.
    function scoreRows() {
      const titleOf = {};
      ['tka_wajib', 'tka_minat', 'tka_clil'].forEach(bank => {
        Object.keys(db[bank] || {}).forEach(pid => {
          titleOf[`${bank.replace('tka_', '')}_${pid}`] = db[bank][pid].title || '';
        });
      });
      const babOf = {};
      ['wajib', 'minat', 'clil'].forEach(subj => (db[subj] || []).forEach(m => {
        babOf[`${subj}_${m.id}`] = m.bab || '';
      }));
      return Object.keys(userSessionScores).sort().map(key => {
        const p = key.split('_');
        return {
          aliran: p[0], paket: p[1], nomor: (parseInt(p[2], 10) + 1),
          bab: babOf[`${p[0]}_${p[1]}`] || '',
          paketJudul: titleOf[`${p[0]}_${p[1]}`] || '',
          hasil: userSessionScores[key] === true ? 'Benar' : 'Salah'
        };
      });
    }

    function exportScoresCsv() {
      const rows = scoreRows();
      if (rows.length === 0) { alert('Belum ada jawaban yang tersimpan untuk diunduh.'); return; }
      const esc = v => `"${String(v).replace(/"/g, '""')}"`;
      const head = ['Aliran', 'Paket', 'Judul Paket', 'Bab', 'Nomor Soal', 'Hasil'];
      const csv = '\uFEFF' + [head.map(esc).join(';')]
        .concat(rows.map(r => [r.aliran, r.paket, r.paketJudul, r.bab, r.nomor, r.hasil].map(esc).join(';')))
        .join('\r\n');
      const stamp = new Date().toISOString().slice(0, 10);
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }));
      a.download = `hasil-cbt-matematika-xii-${stamp}.csv`;
      document.body.appendChild(a); a.click();
      setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    }

    function printReport() {
      const rows = scoreRows();
      if (rows.length === 0) { alert('Belum ada jawaban yang tersimpan untuk dicetak.'); return; }
      const answered = rows.length, right = rows.filter(r => r.hasil === 'Benar').length;
      const w = window.open('', '_blank');
      if (!w) { alert('Izinkan pop-up untuk mencetak laporan.'); return; }
      const chap = chapterStats().map(r =>
        `<tr><td>${r.bab}</td><td style="text-align:center">${r.right}/${r.total}</td><td style="text-align:center">${r.pct}%</td></tr>`).join('');
      w.document.write(`<!doctype html><html lang="id"><head><meta charset="utf-8">
        <title>Laporan Hasil CBT — Matematika ${NAMA_TINGKAT}</title>
        <style>
          body{font-family:system-ui,Segoe UI,Roboto,sans-serif;color:#111;margin:28px;font-size:12px}
          h1{font-size:16px;margin:0 0 2px} h2{font-size:13px;margin:22px 0 6px}
          p.sub{margin:0;color:#555;font-size:11px}
          table{border-collapse:collapse;width:100%;margin-top:6px}
          th,td{border:1px solid #bbb;padding:5px 7px;text-align:left}
          th{background:#eef2f7}
          .kpi{display:flex;gap:10px;margin-top:12px}
          .kpi div{border:1px solid #bbb;border-radius:6px;padding:8px 12px}
          .kpi b{display:block;font-size:17px}
        </style></head><body>
        <h1>Laporan Hasil Latihan CBT — Matematika Kelas ${NAMA_TINGKAT}</h1>
        <p class="sub">Math Cihuy &middot; dicetak ${new Date().toLocaleString('id-ID')}</p>
        <p class="sub">Nama siswa: ______________________________  Kelas: ____________</p>
        <div class="kpi">
          <div><span>Soal dikerjakan</span><b>${answered}</b></div>
          <div><span>Benar</span><b>${right}</b></div>
          <div><span>Persentase</span><b>${Math.round(right / answered * 100)}%</b></div>
        </div>
        <h2>Capaian per Bab</h2>
        <table><tr><th>Bab</th><th>Benar</th><th>%</th></tr>${chap}</table>
        <h2>Rincian per Soal</h2>
        <table><tr><th>Aliran</th><th>Paket</th><th>No</th><th>Hasil</th></tr>
        ${rows.map(r => `<tr><td>${r.aliran}</td><td>${r.paket}</td><td>${r.nomor}</td><td>${r.hasil}</td></tr>`).join('')}
        </table></body></html>`);
      w.document.close();
      setTimeout(() => w.print(), 400);
    }

    function closeAnalyticsModal() {
      document.getElementById('analytics-modal').classList.add('hidden');
    }

    function resetAllScores() {
      slideProgress = {}; cbtHistory = []; simpanKemajuan();
      if (confirm('Yakin ingin mereset seluruh histori nilai kuis CBT?')) {
        userSessionScores = {};
        try { localStorage.removeItem(STORAGE_SCORES_KEY); } catch (e) {}
        openAnalyticsModal();
        renderAppView();
      }
    }

    // SCORECARD MODAL (SUBMIT NILAI AKHIR KE SUPABASE)
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
  