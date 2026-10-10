    // Helper Anti-XSS Sanitizer
    function escapeHtml(str) {
        if (str === null || str === undefined) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // Helper Authorization Header Guru / Siswa
    function getTeacherAuthHeaders(extraHeaders) {
        var headers = Object.assign({}, extraHeaders || {});
        var sess = null;
        try {
            sess = JSON.parse(localStorage.getItem('portal_session') || 'null');
        } catch(e) {}
        var token = (sess && (sess.token || (sess.data && sess.data.token))) || '';
        if (token) {
            headers['Authorization'] = 'Bearer ' + token;
        }
        return headers;
    }

    async function openGuruDashboard() {
        let sess = null;
        try {
          sess = JSON.parse(localStorage.getItem('portal_session') || 'null');
        } catch(e) {}

        if (!sess || sess.type !== 'guru') {
            alert('Akses ditolak: Hanya guru yang dapat mengakses dashboard.');
            return;
        }

        // Kritis 1: Server-Side Cryptographic Token Verification
        const token = (sess && (sess.token || (sess.data && sess.data.token))) || '';
        try {
            const authCheck = await fetch('/api/auth', {
                headers: getTeacherAuthHeaders()
            });
            if (!authCheck.ok) {
                alert('Sesi guru tidak sah atau telah kedaluwarsa. Silakan login kembali.');
                window.location.href = '/login.html';
                return;
            }
            const authData = await authCheck.json();
            if (!authData.authenticated || authData.role !== 'guru') {
                alert('Akses ditolak: Verifikasi server menyatakan sesi bukan akun guru.');
                return;
            }
        } catch (e) {
            if (!token) {
                alert('Akses ditolak: Token autentikasi guru tidak ditemukan.');
                return;
            }
        }

        document.getElementById('guru-dashboard-modal').classList.remove('hidden');
        document.getElementById('guru-dashboard-modal').classList.add('flex');
        isiPilihanKelas();
        loadGuruDashboardData();
        tarikNilaiDariCloud(false);
        if (typeof window.loadGuruLaporanList === 'function') {
            window.loadGuruLaporanList('pending');
        }
    }

    function closeGuruDashboard() {
        document.getElementById('guru-dashboard-modal').classList.add('hidden');
        document.getElementById('guru-dashboard-modal').classList.remove('flex');
    }

    function tampilkanStatusSinkron() {
        const el = document.getElementById('guru-status-sinkron');
        if (!el || typeof statusSinkron !== 'function') return;
        const s = statusSinkron();
        const jam = s.terakhir ? new Date(s.terakhir).toLocaleString('id-ID') : 'belum pernah';
        const warnaAntre = s.antre ? 'text-amber-400' : 'text-emerald-400';
        el.innerHTML =
          '<span>Tersimpan lokal: <b class="text-slate-200">' + s.tersimpan + '</b></span>' +
          '<span class="' + warnaAntre + '">Menunggu kirim: <b>' + s.antre + '</b></span>' +
          '<span>Sudah terkirim: <b class="text-slate-200">' + s.terkirim + '</b></span>' +
          '<span>Kiriman terakhir: <b class="text-slate-200">' + jam + '</b></span>' +
          '<span>Alamat database: <b class="text-slate-200">' + s.url + '</b></span>';
    }

    function saveWebhookURL() {
        const url = document.getElementById('guru-webhook-url').value.trim();
        if (!url) {
            alert('URL Webhook tidak boleh kosong');
            return;
        }
        localStorage.setItem('webhook_url', url);
        WEBHOOK_URL = url;
        prosesAntreanSinkron();      // hasil yang tertahan langsung menyusul
        setTimeout(tampilkanStatusSinkron, 1500);
        alert('Alamat database tersimpan. Hasil yang tertahan akan dikirim otomatis.');
    }

    const NAMA_MAPEL = { wajib: 'Wajib', minat: 'Peminatan', peminatan: 'Peminatan', clil: 'CLIL', custom: 'Racikan', akm: 'ANBK / TKA' };

    // State filter status pengerjaan guru
    window._guruFilterStatus = 'semua'; // 'semua' | 'sudah' | 'belum'

    function setGuruStatusFilter(status) {
      window._guruFilterStatus = status;
      ['btn-status-semua', 'btn-status-sudah', 'btn-status-belum'].forEach(id => {
        const b = document.getElementById(id);
        if (b) {
          b.className = (id === 'btn-status-' + status)
            ? 'px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 text-slate-950 shadow-md'
            : 'px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 hover:bg-slate-700';
        }
      });
      loadGuruDashboardData();
    }

    // Tarik nilai langsung dari Database Supabase Cloud (Menggabungkan Nilai Akhir & Live Progress)
    // Tarik nilai resmi (yang sudah disubmit) dari Database Supabase Cloud
    // =========================================================================
    // ENGINE DASHBOARD MONITORING GURU (3-STATE: SUDAH / SEDANG / BELUM + FILTER PERTEMUAN)
    // =========================================================================
    window._guruFilterStatus = 'semua';
    window._guruLiveAnswersCache = [];

    // Daftar pertemuan di filter dasbor dibangun dari data tingkat halaman
    // ini. Versi lama menulis judul pertemuan kelas XII di sini, sehingga
    // dasbor kelas X dan XI menawarkan pertemuan yang tidak ada di tingkatnya.
    function updateGuruPertemuanOptions() {
      const pilihMapel = document.getElementById('guru-filter-mapel');
      const selectPertemuan = document.getElementById('guru-filter-pertemuan');
      if (!pilihMapel || !selectPertemuan) return;
      const mapel = pilihMapel.value;

      if (mapel === 'akm') {
        selectPertemuan.innerHTML = `
          <option value="">Semua Paket Simulasi</option>
          <option value="GLADI_01">GLADI_01 - Gladi Bersih ANBK Gelombang 2 (25 Soal)</option>
          <option value="GLADI_02">GLADI_02 - Drilling Asesmen Nasional (25 Soal)</option>
        `;
        return;
      }

      const bank = mapel === 'peminatan' ? 'minat' : (mapel === 'clil' ? 'clil' : 'wajib');
      const paket = (typeof db !== 'undefined' && db && db['tka_' + bank]) || {};
      const aman = function (t) {
        return String(t).replace(/\$/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      };

      let options = '<option value="">Semua Pertemuan / Bab</option>';
      Object.keys(paket).forEach(function (id) {
        // Judul paket berbentuk "P01 • Judul"; awalan kodenya dibuang.
        const judul = String((paket[id] || {}).title || '').replace(/^\s*[A-Z]?\d+\s*•\s*/, '');
        options += '<option value="' + aman(id) + '">' + aman(id) + ' - ' + aman(judul || id) + '</option>';
      });
      selectPertemuan.innerHTML = options;
    }
    document.addEventListener('DOMContentLoaded', updateGuruPertemuanOptions);

    function setGuruStatusFilter(status) {
      window._guruFilterStatus = status;
      const tabs = [
        { id: 'btn-status-semua', activeClass: 'bg-amber-500 text-slate-950 shadow-md font-bold' },
        { id: 'btn-status-sudah', activeClass: 'bg-emerald-600 text-white shadow-md font-bold border-emerald-400' },
        { id: 'btn-status-sedang', activeClass: 'bg-amber-600 text-white shadow-md font-bold border-amber-400' },
        { id: 'btn-status-belum', activeClass: 'bg-rose-700 text-white shadow-md font-bold border-rose-400' }
      ];

      tabs.forEach(t => {
        const el = document.getElementById(t.id);
        if (!el) return;
        if (t.id === `btn-status-${status}`) {
          el.className = `px-3.5 py-1.5 rounded-lg text-xs transition-all ${t.activeClass}`;
        } else {
          el.className = `px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all border border-slate-700`;
        }
      });

      loadGuruDashboardData();
    }

    async function tarikNilaiDariCloud(manual) {
      const statusEl = document.getElementById('cloud-sync-status');
      // 1. Coba Cloudflare D1 Serverless SQLite Database terlebih dahulu (Bebas Kuota Egress & Unlimited)
      try {
        const d1Res = await fetch('/api/nilai?all=1', {
          headers: getTeacherAuthHeaders()
        });
        if (d1Res.status === 401 || d1Res.status === 403) {
          if (statusEl) statusEl.innerHTML = '<span class="text-rose-400 font-mono text-xs font-bold"><i class="fa-solid fa-triangle-exclamation"></i> Sesi Guru Habis (Silakan Login Ulang)</span>';
          if (manual) alert('Sesi guru telah kedaluwarsa atau tidak sah. Silakan login kembali melalui portal.');
          return;
        }
        if (d1Res.ok) {
          const d1Data = await d1Res.json();
          if (Array.isArray(d1Data) && d1Data.length > 0) {
            console.log('⚡ Rekap Nilai dimuat dari Cloudflare D1 SQLite Database');
            const log = [];
            d1Data.forEach(function(p) {
              const std = (typeof STUDENTS_DATA !== 'undefined' && STUDENTS_DATA[p.nis]) ? STUDENTS_DATA[p.nis] : null;
              log.push({
                timestamp: p.waktu_submit,
                nis: String(p.nis || ''),
                nama: String(p.nama || (std ? std.nama : 'Siswa ' + p.nis)),
                kelas: String(p.kelas || (std ? std.kelas : 'XII')),
                mapel: String(p.mapel || 'wajib'),
                kode_pertemuan: String(p.kode_pertemuan || ''),
                skor: Number(p.skor) || 0,
                jumlah_soal: Number(p.jumlah_soal) || 10,
                jumlah_benar: Number(p.jumlah_benar) || 0,
                jumlah_salah: Number(p.jumlah_salah) || 0,
                durasi_detik: Number(p.durasi_detik) || 0,
                durasi_menit: Math.round((Number(p.durasi_detik) || 0) / 60),
                jumlah_percobaan: Number(p.jumlah_percobaan) || 1,
                is_flagged: Number(p.is_flagged) || 0,
                status: 'sudah'
              });
            });
            sinkSimpan(CBT_LOKAL_KEY, log);
            if (statusEl) statusEl.innerHTML = `<span class="text-emerald-400 font-mono text-xs font-bold"><i class="fa-solid fa-bolt"></i> Cloudflare D1 Aktif (${log.length} nilai disubmit • Unlimited)</span>`;
            loadGuruDashboardData();
            if (manual) alert(`✅ Berhasil menyinkronkan data dari Cloudflare D1 SQLite!\n- Nilai Disubmit: ${log.length} paket\n- Status: 100% Aktif & Bebas Biaya Egress`);
            return;
          }
        }
      } catch(e) {
        console.warn("D1 sync exception:", e);
      }

      if (statusEl) statusEl.innerHTML = '<span class="text-emerald-400 font-mono text-xs font-bold"><i class="fa-solid fa-database"></i> Cloudflare D1 Siap</span>';
    }

    // Pilihan kelas di dasbor guru dibangkitkan dari STUDENTS_DB, bukan ditulis
    // di markup. Dengan begitu halaman tiap tingkat otomatis menampilkan rombel
    // dan jumlah siswanya sendiri, dan tidak ada angka yang basi saat roster
    // berubah.
    function isiPilihanKelas() {
      const sel = document.getElementById('guru-filter-kelas');
      if (!sel || typeof STUDENTS_DB === 'undefined') return;
      const kunci = Object.keys(STUDENTS_DB);
      const total = kunci.reduce(function (n, k) {
        return n + ((STUDENTS_DB[k] && STUDENTS_DB[k].students || []).length);
      }, 0);
      const dipilih = sel.value;
      sel.innerHTML =
        '<option value="">Semua Kelas (' + total + ' Siswa)</option>' +
        kunci.map(function (k) {
          const r = STUDENTS_DB[k] || {};
          const n = (r.students || []).length;
          const nama = (r.kelas_name || k).replace(/^Kelas\s+/i, '');
          return '<option value="' + k + '">' + nama + ' (' + n + ' Siswa)</option>';
        }).join('');
      if (dipilih) sel.value = dipilih;
    }

    
    function formatWaktuWib(isoOrTs) {
      if (!isoOrTs) return null;
      try {
        const d = new Date(isoOrTs);
        if (isNaN(d.getTime())) return null;
        const p = n => (n < 10 ? '0' + n : n);
        const tglStr = `${p(d.getDate())}/${p(d.getMonth() + 1)}/${d.getFullYear()}`;
        const jamStr = `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())} WIB`;
        return {
          tgl: tglStr,
          jam: jamStr,
          full: `${tglStr} ${jamStr}`
        };
      } catch (e) {
        return null;
      }
    }

    
    window._guruSortField = 'timestamp';
    window._guruSortDir = 'desc';

    function setGuruSort(field) {
      if (window._guruSortField === field) {
        window._guruSortDir = (window._guruSortDir === 'asc') ? 'desc' : 'asc';
      } else {
        window._guruSortField = field;
        window._guruSortDir = (field === 'skor' || field === 'timestamp' || field === 'jam' || field === 'tanggal' || field === 'durasi') ? 'desc' : 'asc';
      }
      loadGuruDashboardData();
    }

    function updateSortIcons() {
      const fields = ['nis', 'nama', 'kelas', 'mapel', 'kode', 'skor', 'progress', 'durasi', 'percobaan', 'tanggal', 'jam'];
      fields.forEach(f => {
        const el = document.getElementById(`sort-icon-${f}`);
        if (!el) return;
        if (window._guruSortField === f || (f === 'jam' && window._guruSortField === 'timestamp') || (f === 'tanggal' && window._guruSortField === 'timestamp')) {
          el.innerHTML = window._guruSortDir === 'asc' 
            ? `<i class="fa-solid fa-arrow-up-short-wide text-amber-400 text-[10px] ml-1"></i>`
            : `<i class="fa-solid fa-arrow-down-wide-short text-amber-400 text-[10px] ml-1"></i>`;
        } else {
          el.innerHTML = `<i class="fa-solid fa-sort text-slate-500 opacity-40 text-[9px] ml-1"></i>`;
        }
      });
    }

    
    // =========================================================================
    // TEACHER MONITORING TABLE INTERACTIVE ZOOM & AUTO-FIT ENGINE
    // =========================================================================
    let guruTableZoom = 1.0;

    function setGuruTableZoom(val) {
      guruTableZoom = Math.min(Math.max(val, 0.50), 1.50);
      const wrap = document.getElementById('guru-table-content');
      const label = document.getElementById('guru-zoom-label');
      if (wrap) {
        wrap.style.transform = `scale(${guruTableZoom})`;
        wrap.style.transformOrigin = 'top left';
        wrap.style.width = `${(100 / guruTableZoom).toFixed(2)}%`;
      }
      if (label) {
        label.innerText = `${Math.round(guruTableZoom * 100)}%`;
      }
    }

    function zoomGuruTable(delta) {
      setGuruTableZoom(guruTableZoom + delta);
    }

    function fitGuruTableToScreen() {
      const container = document.getElementById('guru-table-container');
      const table = document.getElementById('guru-results-table');
      if (container && table) {
        // Reset scale temporarily to calculate natural width
        const wrap = document.getElementById('guru-table-content');
        if (wrap) {
          wrap.style.transform = 'none';
          wrap.style.width = '100%';
        }
        setTimeout(() => {
          const contW = container.clientWidth;
          const naturalW = table.scrollWidth || 1100;
          if (naturalW > 0 && contW > 0) {
            const optimalZoom = Math.min(1.0, (contW - 8) / naturalW);
            setGuruTableZoom(optimalZoom);
          }
        }, 50);
      }
    }

    function initGuruTableZoomInteractions() {
      const container = document.getElementById('guru-table-container');
      if (!container || container._zoomBound) return;
      container._zoomBound = true;

      container.addEventListener('wheel', (e) => {
        // Zoom on Ctrl + Wheel or Alt + Wheel or Pinch Trackpad
        if (e.ctrlKey || e.metaKey || e.altKey) {
          e.preventDefault();
          const delta = e.deltaY < 0 ? 0.06 : -0.06;
          zoomGuruTable(delta);
        }
      }, { passive: false });
    }

    function loadGuruDashboardData() {
      const rekam = sinkAmbil(CBT_LOKAL_KEY, []);
      const liveAnswers = window._guruLiveAnswersCache || [];
      const kelasFilter = (document.getElementById('guru-filter-kelas')?.value || '').trim();
      const mapelFilter = (document.getElementById('guru-filter-mapel')?.value || '').trim();
      const pertemuanFilter = (document.getElementById('guru-filter-pertemuan')?.value || '').trim();
      const statusFilter = window._guruFilterStatus || 'semua';

      // 1. DAFTAR SEMUA SISWA TERDAFTAR SESUAI FILTER KELAS
      let daftarSiswa = (typeof STUDENTS_DATA !== 'undefined') ? Object.keys(STUDENTS_DATA).map(n => ({
        nis: String(n),
        nama: STUDENTS_DATA[n].nama,
        kelas: STUDENTS_DATA[n].kelas,
        access_level: STUDENTS_DATA[n].access_level
      })) : [];

      if (kelasFilter) {
        const cleanK = kelasFilter.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        daftarSiswa = daftarSiswa.filter(s => (s.kelas || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase().includes(cleanK));
      }

      // 2. KELOMPOK SUDAH MENGERJAKAN
      let listSudah = rekam.filter(r => {
        if (kelasFilter) {
          const cleanK = kelasFilter.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
          if (!(r.kelas || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase().includes(cleanK)) return false;
        }
        if (mapelFilter) {
          const cari = mapelFilter === 'peminatan' ? 'minat' : mapelFilter;
          if ((r.mapel || 'wajib') !== cari) return false;
        }
        if (pertemuanFilter && String(r.kode_pertemuan).toUpperCase() !== String(pertemuanFilter).toUpperCase()) {
          return false;
        }
        return true;
      });

      // Kumpulan NIS yang sudah submit
      const nisSudahSubmit = new Set(listSudah.map(r => `${r.nis}__${r.mapel || 'wajib'}__${r.kode_pertemuan}`));

      // 3. KELOMPOK SEDANG MENGERJAKAN (Ada di cbt_live_answers, tapi belum submit di nilai_cbt)
      const liveGroups = {};
      liveAnswers.forEach(a => {
        const k = `${a.nis}__${a.mapel}__${a.kode_pertemuan}`;
        if (!liveGroups[k]) liveGroups[k] = [];
        liveGroups[k].push(a);
      });

      let listSedang = [];
      Object.keys(liveGroups).forEach(k => {
        // Jika siswa sudah submit di nilai_cbt untuk paket ini, jangan masukkan ke 'sedang'
        if (nisSudahSubmit.has(k)) return;

        const answers = liveGroups[k];
        const sample = answers[0];
        const nis = String(sample.nis);
        const mapel = sample.mapel;
        const kode = sample.kode_pertemuan;

        // Cek filter
        if (mapelFilter) {
          const cari = mapelFilter === 'peminatan' ? 'minat' : mapelFilter;
          if (mapel !== cari) return;
        }
        if (pertemuanFilter && String(kode).toUpperCase() !== String(pertemuanFilter).toUpperCase()) {
          return;
        }

        const std = (typeof STUDENTS_DATA !== 'undefined' && STUDENTS_DATA[nis]) ? STUDENTS_DATA[nis] : null;
        const sKelas = std ? std.kelas : 'XII';
        if (kelasFilter) {
          const cleanK = kelasFilter.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
          if (!sKelas.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().includes(cleanK)) return;
        }

        const totalJawab = answers.length;
        const totalBenar = answers.filter(x => x.is_right === true).length;
        const latestTime = answers.reduce((acc, cur) => cur.updated_at > acc ? cur.updated_at : acc, sample.updated_at);
        
        // Deteksi Keaktifan Sesi (Liveness Threshold)
        const elapsedMs = Date.now() - new Date(latestTime).getTime();
        const elapsedMin = Math.floor(elapsedMs / (60 * 1000));
        const elapsedHours = Math.floor(elapsedMin / 60);

        let livenessState = 'live'; // 'live', 'idle', 'stuck'
        let livenessText = '';
        let livenessBadge = '';

        // Threshold: Aktif (< 15 mnt), Menggantung (15-60 mnt), Tersangkut (> 60 mnt)
        if (isNaN(elapsedMin) || elapsedMin < 15) {
          livenessState = 'live';
          livenessText = (isNaN(elapsedMin) || elapsedMin <= 0) ? 'Baru saja' : `${elapsedMin} mnt lalu`;
          livenessBadge = `<span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-900/80 text-emerald-300 border border-emerald-500/40 whitespace-nowrap inline-flex items-center gap-1 shadow-sm"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Aktif</span>`;
        } else if (elapsedMin <= 60) {
          livenessState = 'idle';
          livenessText = `${elapsedMin} mnt lalu`;
          livenessBadge = `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-900/80 text-amber-300 border border-amber-500/40 whitespace-nowrap inline-flex items-center gap-1 shadow-sm"><i class="fa-solid fa-hourglass-half text-amber-400 text-[9px]"></i> Idle</span>`;
        } else {
          livenessState = 'stuck';
          livenessText = elapsedHours < 24 ? `${elapsedHours} jam lalu` : `${Math.floor(elapsedHours / 24)} hari lalu`;
          livenessBadge = `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-900/80 text-rose-300 border border-rose-500/40 whitespace-nowrap inline-flex items-center gap-1 shadow-sm"><i class="fa-solid fa-triangle-exclamation text-rose-400 text-[9px]"></i> Tersangkut</span>`;
        }

        listSedang.push({
          timestamp: latestTime,
          nis: nis,
          nama: std ? std.nama : ('Siswa ' + nis),
          kelas: sKelas,
          mapel: mapel,
          kode_pertemuan: kode,
          skor: Math.round((totalBenar / 10) * 100),
          jumlah_soal: 10,
          jumlah_benar: totalBenar,
          jumlah_salah: totalJawab - totalBenar,
          progress_soal: totalJawab,
          durasi_detik: 0,
          durasi_menit: 0,
          status: 'sedang',
          livenessState: livenessState,
          livenessBadge: livenessBadge,
          livenessText: livenessText
        });
      });

      // 4. KELOMPOK BELUM MENGERJAKAN
      const nisAktifSet = new Set([
        ...listSudah.map(r => r.nis),
        ...listSedang.map(r => r.nis)
      ]);

      let listBelum = daftarSiswa.filter(s => !nisAktifSet.has(s.nis)).map(s => ({
        timestamp: null,
        nis: s.nis,
        nama: s.nama,
        kelas: s.kelas,
        mapel: mapelFilter || 'wajib',
        kode_pertemuan: pertemuanFilter || '-',
        skor: 0,
        jumlah_soal: 10,
        jumlah_benar: 0,
        jumlah_salah: 0,
        durasi_detik: 0,
        durasi_menit: 0,
        status: 'belum'
      }));

      // Update Counter Badges
      const countSemuaEl = document.getElementById('count-semua');
      const countSudahEl = document.getElementById('count-sudah');
      const countSedangEl = document.getElementById('count-sedang');
      const countBelumEl = document.getElementById('count-belum');

      const totalSemua = listSudah.length + listSedang.length;
      if (countSemuaEl) countSemuaEl.textContent = totalSemua;
      if (countSudahEl) countSudahEl.textContent = listSudah.length;
      if (countSedangEl) countSedangEl.textContent = listSedang.length;
      if (countBelumEl) countBelumEl.textContent = listBelum.length;

      const tbody = document.getElementById('guru-results-tbody');
      if (!tbody) return;

      // Filter Data Tampil Berdasarkan Tab Aktif
      let displayList = [];
      if (statusFilter === 'sudah') {
        displayList = [...listSudah];
      } else if (statusFilter === 'sedang') {
        displayList = [...listSedang];
      } else if (statusFilter === 'belum') {
        displayList = [...listBelum];
      } else {
        // 'semua': gabungan sudah + sedang
        displayList = [...listSudah, ...listSedang];
      }

      // MULTI-COLUMN SORTING ENGINE
      displayList.sort((a, b) => {
        let valA, valB;
        const dir = window._guruSortDir === 'asc' ? 1 : -1;

        switch (window._guruSortField) {
          case 'nis':
            valA = Number(a.nis) || 0;
            valB = Number(b.nis) || 0;
            return (valA - valB) * dir;
          case 'nama':
            valA = (a.nama || '').toLowerCase();
            valB = (b.nama || '').toLowerCase();
            return valA.localeCompare(valB) * dir;
          case 'kelas':
            valA = (a.kelas || '').toLowerCase();
            valB = (b.kelas || '').toLowerCase();
            return valA.localeCompare(valB) * dir;
          case 'mapel':
            valA = (a.mapel || '').toLowerCase();
            valB = (b.mapel || '').toLowerCase();
            return valA.localeCompare(valB) * dir;
          case 'kode':
            valA = (a.kode_pertemuan || '').toLowerCase();
            valB = (b.kode_pertemuan || '').toLowerCase();
            return valA.localeCompare(valB) * dir;
          case 'skor':
            valA = Number(a.skor) || 0;
            valB = Number(b.skor) || 0;
            return (valA - valB) * dir;
          case 'progress':
            valA = Number(a.jumlah_benar || a.progress_soal || 0);
            valB = Number(b.jumlah_benar || b.progress_soal || 0);
            return (valA - valB) * dir;
          case 'durasi':
            valA = Number(a.durasi_detik || (a.durasi_menit ? a.durasi_menit * 60 : 0));
            valB = Number(b.durasi_detik || (b.durasi_menit ? b.durasi_menit * 60 : 0));
            return (valA - valB) * dir;
          case 'percobaan':
            valA = Number(a.jumlah_percobaan) || 1;
            valB = Number(b.jumlah_percobaan) || 1;
            return (valA - valB) * dir;
          case 'tanggal':
          case 'jam':
          case 'timestamp':
          default:
            valA = a.timestamp ? new Date(a.timestamp).getTime() : 0;
            valB = b.timestamp ? new Date(b.timestamp).getTime() : 0;
            return (valA - valB) * dir;
        }
      });

      updateSortIcons();
      initGuruTableZoomInteractions();

      if (displayList.length === 0) {
        const pesanKosong = {
          semua: 'Belum ada rekaman ujian pada filter ini.',
          sudah: 'Belum ada siswa yang menyelesaikan/submit ujian pada filter ini.',
          sedang: 'Tidak ada siswa yang sedang aktif mengerjakan saat ini.',
          belum: '🎉 Luar biasa! Semua siswa di kelas ini sudah mengerjakan CBT!'
        };
        tbody.innerHTML = `<tr><td colspan="12" class="text-center py-10 text-slate-400 font-medium">${pesanKosong[statusFilter] || 'Tidak ada data'}</td></tr>`;
        return;
      }

      tbody.innerHTML = displayList.map(r => {
        let statusBadge = '';
        let skorDisplay = '';
        let detailDisplay = '';
        let durasiDisplay = '';
        let percobaanDisplay = '';
        let aksiButton = '';
        let trBgStyle = 'background-color: #0A1628;';

        const wib = formatWaktuWib(r.timestamp);
        const nAttempt = Number(r.jumlah_percobaan) || 1;

        if (r.status === 'sudah') {
          trBgStyle = 'background-color: #0B172B;';
          const isTuntas = Number(r.skor) >= 75;
          const kktpText = isTuntas ? 'TUNTAS' : 'REMEDIAL';
          const kktpStyle = isTuntas 
            ? 'background-color: #032b1c; color: #6ee7b7; border: 1px solid #10b981;' 
            : 'background-color: #3b0d18; color: #fda4af; border: 1px solid #f43f5e;';
          statusBadge = `<span style="${kktpStyle}" class="px-2 py-0.5 rounded-full text-[9px] font-black whitespace-nowrap">${kktpText}</span>`;
          skorDisplay = `<div class="flex items-center justify-center gap-1.5 whitespace-nowrap"><span class="font-mono text-sm font-black ${isTuntas ? 'text-emerald-400' : 'text-rose-400'}">${r.skor}/100</span> ${statusBadge}</div>`;
          const dDetik = Number(r.durasi_detik) || 0;
          const isFlagged = Number(r.is_flagged) === 1 || (dDetik < 120 && Number(r.skor) === 100);
          const isAnomaliCepat = dDetik > 0 && dDetik < 120 && Number(r.skor) >= 80;
          let anomaliTag = '';
          if (isFlagged) {
            anomaliTag = ` <span title="⚠️ Terdeteksi Anomali Kognitif: Selesai < 120 detik (${dDetik}s) dengan skor 100. Indikasi bot / instant answer key." class="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/50 text-[9px] font-black whitespace-nowrap"><i class="fa-solid fa-triangle-exclamation"></i> Flagged (${dDetik}s)</span>`;
          } else if (isAnomaliCepat) {
            if (nAttempt > 1) {
              anomaliTag = ` <span title="Pengerjaan ulang / remedial (percobaan ke-${nAttempt}) durasi ${dDetik}s." class="px-1.5 py-0.5 rounded bg-blue-500/20 text-cyan-300 border border-blue-500/40 text-[9px] font-black whitespace-nowrap"><i class="fa-solid fa-rotate-right"></i> Ulang (${nAttempt}x)</span>`;
            } else {
              anomaliTag = ` <span title="Perhatian: Selesai sangat cepat (< 120 detik) pada percobaan pertama dengan skor tinggi." class="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] font-black whitespace-nowrap"><i class="fa-solid fa-bolt"></i> Cepat?</span>`;
            }
          }
          durasiDisplay = `<span class="text-xs text-slate-300 font-mono whitespace-nowrap">${r.durasi_menit || 0} Menit</span>${anomaliTag}`;
          if (nAttempt > 1) {
            percobaanDisplay = `<span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-cyan-950 text-cyan-300 border border-cyan-500/50 whitespace-nowrap inline-flex items-center gap-1 shadow-sm" title="Mengerjakan ulang / remedial (percobaan ke-${nAttempt})"><i class="fa-solid fa-rotate-right text-cyan-400 text-[9px]"></i> Ke-${nAttempt}</span>`;
          } else {
            percobaanDisplay = `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 text-slate-300 border border-slate-700 whitespace-nowrap inline-flex items-center gap-1" title="Percobaan pertama"><i class="fa-solid fa-check text-slate-400 text-[9px]"></i> Pertama</span>`;
          }
          aksiButton = `<button onclick="resetNilaiSiswa('${encodeURIComponent(r.nis)}', '${encodeURIComponent(r.kode_pertemuan || '')}', '${encodeURIComponent(r.mapel || '')}')" title="Reset nilai agar siswa dapat mengulang" class="px-2.5 py-1 bg-slate-800 hover:bg-amber-600 border border-slate-700 hover:border-amber-500 text-slate-300 hover:text-white rounded-lg text-xs font-bold transition shadow whitespace-nowrap cursor-pointer">Reset</button>`;
        } else if (r.status === 'sedang') {
          trBgStyle = r.livenessState === 'stuck' ? 'background-color: #24111E;' : r.livenessState === 'idle' ? 'background-color: #261D10;' : 'background-color: #0B2129;';
          skorDisplay = `<div class="flex flex-col items-center gap-0.5 whitespace-nowrap">${r.livenessBadge}<span class="font-mono text-xs font-black ${r.livenessState === 'stuck' ? 'text-rose-400' : 'text-emerald-400'}">${r.skor} / 100</span></div>`;
          detailDisplay = `<span class="px-2 py-0.5 rounded-lg bg-[#060E1A] text-amber-300 font-mono font-bold border border-blue-900 whitespace-nowrap text-xs">${r.progress_soal}/10 Soal</span>`;
          durasiDisplay = `<span class="text-xs font-mono whitespace-nowrap ${r.livenessState === 'live' ? 'text-emerald-400 font-bold' : 'text-slate-400'}">${r.livenessText}</span>`;
          percobaanDisplay = `<span class="text-xs text-slate-400 font-mono whitespace-nowrap">Ke-${nAttempt}</span>`;
          aksiButton = `
            <div class="flex items-center justify-center gap-1.5 whitespace-nowrap">
              <button onclick="forceSubmitNilaiSiswa('${encodeURIComponent(r.nis)}', '${encodeURIComponent(r.kode_pertemuan || '')}', '${encodeURIComponent(r.mapel || '')}', ${Number(r.skor) || 0}, ${Number(r.jumlah_soal) || 10}, ${Number(r.jumlah_benar) || 0}, ${Number(r.jumlah_salah) || 0})" title="Kumpulkan paksa ujian siswa ini dengan jawaban yang ada" class="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-black transition shadow flex items-center gap-1 whitespace-nowrap cursor-pointer active:scale-95">
                <i class="fa-solid fa-file-arrow-up text-[10px]"></i> Kumpulkan
              </button>
              <button onclick="resetNilaiSiswa('${encodeURIComponent(r.nis)}', '${encodeURIComponent(r.kode_pertemuan || '')}', '${encodeURIComponent(r.mapel || '')}')" title="Reset sesi pengerjaan siswa" class="px-2 py-1 bg-rose-700 hover:bg-rose-600 text-white rounded-lg text-xs font-bold transition shadow whitespace-nowrap cursor-pointer active:scale-95">
                <i class="fa-solid fa-rotate-left text-[10px]"></i>
              </button>
            </div>
          `;
        } else {
          // 'belum'
          trBgStyle = 'background-color: #1F1218;';
          skorDisplay = `<span style="background-color: #3b0d18; color: #fda4af; border: 1px solid #f43f5e;" class="px-2 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap">Belum Submit</span>`;
          detailDisplay = `<span class="text-xs text-slate-500 font-mono whitespace-nowrap">0/10 Soal</span>`;
          durasiDisplay = `<span class="text-xs text-slate-500 font-mono whitespace-nowrap">-</span>`;
          percobaanDisplay = `<span class="text-xs text-slate-500 font-mono whitespace-nowrap">-</span>`;
          aksiButton = `<span class="text-xs text-slate-500 italic whitespace-nowrap">Menunggu</span>`;
        }

        const tglCell = (wib && r.status !== 'belum') ? `<span class="text-xs font-mono text-slate-300 whitespace-nowrap">${wib.tgl}</span>` : '<span class="text-xs text-slate-500 font-mono whitespace-nowrap">-</span>';
        let jamCell = '';
        if (r.status === 'sudah') {
          jamCell = wib ? `<span class="font-mono font-black text-amber-300 text-xs whitespace-nowrap">${wib.jam}</span>` : '<span class="text-xs text-slate-500 font-mono">-</span>';
        } else if (r.status === 'sedang') {
          jamCell = wib ? `<span class="font-mono font-bold text-cyan-300 text-xs whitespace-nowrap">${wib.jam}</span>` : '<span class="text-xs text-cyan-400 font-mono italic whitespace-nowrap">Live</span>';
        } else {
          jamCell = '<span class="text-xs text-slate-500 font-mono whitespace-nowrap">-</span>';
        }

        const namaMapel = (typeof NAMA_MAPEL !== 'undefined' && NAMA_MAPEL[r.mapel]) ? NAMA_MAPEL[r.mapel] : (r.mapel || 'Wajib');

        return `
          <tr style="${trBgStyle}" class="border-b border-blue-900/60 transition hover:brightness-125">
            <td class="border-r border-blue-900/60 px-3 py-2.5 font-mono text-xs font-bold text-slate-300 whitespace-nowrap">${escapeHtml(r.nis)}</td>
            <td class="border-r border-blue-900/60 px-4 py-2.5 font-bold text-white min-w-[170px]">${escapeHtml(r.nama)}</td>
            <td class="border-r border-blue-900/60 px-3 py-2.5 text-center text-xs text-amber-400 font-bold whitespace-nowrap">${escapeHtml(r.kelas)}</td>
            <td class="border-r border-blue-900/60 px-3 py-2.5 text-center text-xs uppercase text-slate-300 whitespace-nowrap">${escapeHtml(namaMapel)}</td>
            <td class="border-r border-blue-900/60 px-3 py-2.5 text-center text-xs font-mono font-bold text-cyan-300 whitespace-nowrap">${escapeHtml(r.kode_pertemuan || '-')}</td>
            <td class="border-r border-blue-900/60 px-3.5 py-2.5 text-center min-w-[130px]">${skorDisplay}</td>
            <td class="border-r border-blue-900/60 px-3 py-2.5 text-center min-w-[95px]">${detailDisplay}</td>
            <td class="border-r border-blue-900/60 px-3 py-2.5 text-center min-w-[95px]">${durasiDisplay}</td>
            <td class="border-r border-blue-900/60 px-3 py-2.5 text-center min-w-[90px]">${percobaanDisplay}</td>
            <td class="border-r border-blue-900/60 px-3 py-2.5 text-center min-w-[95px]">${tglCell}</td>
            <td class="border-r border-blue-900/60 px-3.5 py-2.5 text-center min-w-[115px]">${jamCell}</td>
            <td class="px-4 py-2.5 text-center min-w-[120px]">${aksiButton}</td>
          </tr>
        `;
      }).join('');
    }

    async function resetNilaiSiswa(rawNis, rawKodePertemuan, rawMapel) {
        const nis = decodeURIComponent(rawNis || '');
        const kodePertemuan = decodeURIComponent(rawKodePertemuan || '');
        const mapel = decodeURIComponent(rawMapel || '');
        const std = (typeof STUDENTS_DATA !== 'undefined' && STUDENTS_DATA[nis]) ? STUDENTS_DATA[nis] : null;
        const namaSiswa = std ? std.nama : ('Siswa ' + nis);
        const infoPaket = kodePertemuan ? ` paket ${kodePertemuan} (${mapel || 'wajib'})` : '';
        
        if (!confirm(`Apakah Mr. Ardi yakin ingin mereset nilai untuk ${namaSiswa} (${nis})${infoPaket}?\n\nData nilai di Cloud SQL dan riwayat pengerjaan siswa akan dihapus, sehingga siswa dapat mengerjakan ulang dari awal.`)) {
            return;
        }

        // 1. Hapus dari Database Cloudflare D1 (Native Serverless SQLite)
        try {
            let delUrl = `/api/nilai?nis=${encodeURIComponent(nis)}`;
            if (kodePertemuan) delUrl += `&kode_pertemuan=${encodeURIComponent(kodePertemuan)}`;
            if (mapel) delUrl += `&mapel=${encodeURIComponent(mapel)}`;
            fetch(delUrl, {
                method: 'DELETE',
                headers: getTeacherAuthHeaders()
            }).catch(() => {});
            console.log('⚡ Cloudflare D1 delete records request sent for NIS:', nis);
        } catch (e) {}

        // 2. Hapus dari Cache Lokal Guru
        const log = sinkAmbil(CBT_LOKAL_KEY, []);
        const filtered = log.filter(r => {
            if (String(r.nis) !== String(nis)) return true;
            if (kodePertemuan && String(r.kode_pertemuan) !== String(kodePertemuan)) return true;
            if (mapel && String(r.mapel) !== String(mapel)) return true;
            return false;
        });
        sinkSimpan(CBT_LOKAL_KEY, filtered);

        // 3. Bersihkan Kunci Draft Pengerjaan Siswa
        try {
            if (kodePertemuan && mapel) {
                localStorage.removeItem(`${CBT_DRAFT_PREFIX}${nis}_${mapel}_${kodePertemuan}`);
            }
        } catch (e) {}

        sinkSimpan(CBT_ANTRE_KEY, sinkAmbil(CBT_ANTRE_KEY, []).filter(r => String(r.nis) !== String(nis)));
        sinkSimpan(CBT_OK_KEY, []);

        alert(`✅ Nilai ${namaSiswa} berhasil direset! Siswa sekarang dapat mengulang ujian.`);
        loadGuruDashboardData();
    }

    function exportToExcel() {
        const queue = sinkAmbil(CBT_LOKAL_KEY, []);
        if (queue.length === 0) {
            alert('Tidak ada data untuk diekspor');
            return;
        }

        // Convert ke CSV
        const headers = ['Tanggal', 'Jam (WIB)', 'NIS', 'Nama', 'Kelas', 'Mapel', 'Bab', 'Skor', 'Benar', 'Salah', 'Durasi (menit)'];
        const rows = queue.map(r => {
            const w = formatWaktuWib(r.timestamp);
            return [
                w ? w.tgl : '-',
                w ? w.jam : '-',
                r.nis,
                r.nama,
                r.kelas,
                NAMA_MAPEL[r.mapel] || 'Wajib',
                r.kode_pertemuan || '-',
                r.skor,
                r.jumlah_benar,
                r.jumlah_salah,
                (r.durasi_detik / 60).toFixed(1)
            ];
        });

        const csv = [headers, ...rows].map(r => r.map(c => `"${c}"`).join(',')).join('\n');
        const blob = new Blob([csv], {type: 'text/csv'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `leger_nilai_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    }
    

    async function forceSubmitNilaiSiswa(rawNis, rawKodePertemuan, rawMapel, skor, jumlahSoal, jumlahBenar, jumlahSalah) {
      const nis = decodeURIComponent(rawNis || '');
      const kodePertemuan = decodeURIComponent(rawKodePertemuan || '');
      const mapel = decodeURIComponent(rawMapel || '');
      const std = (typeof STUDENTS_DATA !== 'undefined' && STUDENTS_DATA[nis]) ? STUDENTS_DATA[nis] : null;
      const namaSiswa = std ? std.nama : ('Siswa ' + nis);
      const kelas = std ? std.kelas : 'XII';

      if (!confirm(`Apakah Mr. Ardi yakin ingin mengumpulkan paksa ujian untuk ${namaSiswa} (${nis}) paket ${kodePertemuan}?

- Skor Terhitung: ${skor}/100
- Butir Terjawab: ${jumlahBenar + jumlahSalah}/${jumlahSoal}

Nilai ini akan langsung dikunci sebagai nilai resmi di Cloudflare D1.`)) {
        return;
      }

      try {
        const payload = {
          nis: String(nis),
          nama: String(namaSiswa),
          kelas: String(kelas),
          mapel: String(mapel || 'wajib'),
          kode_pertemuan: String(kodePertemuan),
          skor: Number(skor) || 0,
          jumlah_soal: Number(jumlahSoal) || 10,
          jumlah_benar: Number(jumlahBenar) || 0,
          jumlah_salah: Number(jumlahSalah) || 0,
          durasi_detik: 0,
          waktu_submit: new Date().toISOString()
        };

        // 1. Simpan ke Cloudflare D1 Native Database
        await fetch('/api/nilai', {
          method: 'POST',
          headers: getTeacherAuthHeaders({ 'Content-Type': 'application/json' }),
          body: JSON.stringify(payload)
        });

        // 2. Bersihkan draf live answers dari Cloudflare D1
        await fetch(`/api/live?nis=${encodeURIComponent(nis)}&mapel=${encodeURIComponent(mapel || 'wajib')}&kode=${encodeURIComponent(kodePertemuan)}`, {
          method: 'DELETE',
          headers: getTeacherAuthHeaders()
        }).catch(() => {});

        alert(`✅ Ujian ${namaSiswa} berhasil dikumpulkan paksa! Nilai resmi ${skor}/100 telah tercatat di Cloudflare D1.`);
        tarikNilaiDariCloud(false);
      } catch (e) {
        console.error("Force submit error:", e);
        alert("Gagal melakukan pengumpulan paksa. Silakan periksa koneksi internet.");
      }
    }


    // EXPOSE TO GLOBAL WINDOW
    window.setGuruSort = setGuruSort;
    window.updateSortIcons = updateSortIcons;
    window.setGuruTableZoom = setGuruTableZoom;
    window.zoomGuruTable = zoomGuruTable;
    window.fitGuruTableToScreen = fitGuruTableToScreen;
    window.openGuruDashboard = openGuruDashboard;
    window.closeGuruDashboard = closeGuruDashboard;
    window.loadGuruDashboardData = loadGuruDashboardData;
    window.setGuruStatusFilter = setGuruStatusFilter;
    window.tarikNilaiDariCloud = tarikNilaiDariCloud;
    window.resetNilaiSiswa = resetNilaiSiswa;
    window.forceSubmitNilaiSiswa = forceSubmitNilaiSiswa;
    window.exportToExcel = exportToExcel;

    // =========================================================================
    // MODUL RAPOR SISWA & REKAPITULASI SKOR CBT TIAP PAKET (CLOUDFLARE D1)
    // =========================================================================
    let _raporCurrentFilter = 'all';
    let _raporSearchQuery = '';
    let _raporAllPackages = [];
    let _raporActiveStudentNis = '';
    let _raporSelectedBab = 'all';
    let _raporExpandedBabs = new Set();
    let _raporExpandedBabsInitialized = false;

    function getRaporPackageList(kelas, accessLevel, subMap) {
      const pkgs = [];
      const database = (typeof db !== 'undefined') ? db : {};
      const cleanKelas = String(kelas || '').toUpperCase();
      const currentTingkat = (typeof TINGKAT_HALAMAN !== 'undefined') ? Number(TINGKAT_HALAMAN) : 12;

      // Siswa F1 dan F2 (atau access_level === 'wajib_only') tidak mengambil Matematika Peminatan
      const isWajibOnly = accessLevel === 'wajib_only' || cleanKelas.includes('F1') || cleanKelas.includes('F2');
      
      // Kumpulan paket yang telah memiliki riwayat submit resmi di D1/lokal
      const completedCodes = new Set();
      if (subMap && typeof subMap === 'object') {
        Object.keys(subMap).forEach(k => {
          const item = subMap[k];
          if (item && item.kode_pertemuan && (item.skor !== null && item.skor !== undefined)) {
            completedCodes.add(`${(item.mapel || 'wajib').toLowerCase()}_${String(item.kode_pertemuan).toUpperCase()}`);
          }
        });
      }

      // 1. Matematika Wajib
      // Untuk Kelas 12, target kurikulum PTS adalah 14 paket (P01 s.d. P14: Kaidah Pencacahan & Dimensi Tiga).
      // Paket P15 s.d. P21 (Statistika) adalah materi lanjutan pasca-PTS dan ditampilkan jika siswa sudah mengerjakannya.
      if (Array.isArray(database.wajib)) {
        database.wajib.forEach(m => {
          const num = parseInt(String(m.id).replace(/\D/g, ''), 10) || 0;
          const isSubmitted = completedCodes.has(`wajib_${String(m.id).toUpperCase()}`);
          if (currentTingkat !== 12 || num <= 14 || isSubmitted) {
            pkgs.push({
              id: m.id,
              mapel: 'wajib',
              mapelLabel: 'Matematika Wajib',
              title: m.title || ('Pertemuan ' + m.id),
              bab: m.bab || 'Kurikulum Wajib'
            });
          }
        });
      }
      
      // 2. Matematika Peminatan
      // Khusus Kelas 12 F-3 & 12 F-4 (atau alumni / non-wajib_only).
      // Target kurikulum PTS adalah 16 paket (P01 s.d. P16: Geometri Lingkaran & Limit).
      // Paket P17 s.d. P30 (Turunan & Integral) adalah materi lanjutan dan ditampilkan jika siswa sudah mengerjakannya.
      if (!isWajibOnly && Array.isArray(database.minat) && database.minat.length > 0) {
        database.minat.forEach(m => {
          const num = parseInt(String(m.id).replace(/\D/g, ''), 10) || 0;
          const isSubmitted = completedCodes.has(`minat_${String(m.id).toUpperCase()}`);
          if (currentTingkat !== 12 || num <= 16 || isSubmitted) {
            pkgs.push({
              id: m.id,
              mapel: 'minat',
              mapelLabel: 'Matematika Peminatan',
              title: m.title || ('Pertemuan ' + m.id),
              bab: m.bab || 'Kurikulum Peminatan'
            });
          }
        });
      }

      // Fallback aman jika database belum terinisiasi
      if (pkgs.length === 0) {
        const wajibMax = (currentTingkat === 12) ? 14 : 21;
        for (let i = 1; i <= wajibMax; i++) {
          const pid = 'P' + (i < 10 ? '0' + i : i);
          pkgs.push({ id: pid, mapel: 'wajib', mapelLabel: 'Matematika Wajib', title: 'Pertemuan ' + pid, bab: 'Kurikulum Wajib' });
        }
        if (!isWajibOnly && currentTingkat === 12) {
          for (let i = 1; i <= 16; i++) {
            const pid = 'P' + (i < 10 ? '0' + i : i);
            pkgs.push({ id: pid, mapel: 'minat', mapelLabel: 'Matematika Peminatan', title: 'Pertemuan ' + pid, bab: 'Kurikulum Peminatan' });
          }
        }
      }

      return pkgs;
    }

    function renderSingleRaporCard(item) {
      const isDone = item.status === 'sempurna' || item.status === 'tuntas' || item.status === 'remedial';
      const isPerfect = isDone && item.skor === 100;
      const isTuntas = isDone && item.skor >= 75;
      const isRemedial = isDone && !isTuntas;

      let badgeHtml = '';
      if (isPerfect) {
        badgeHtml = `
          <span class="text-[10px] font-bold px-1.5 py-0.5 rounded inline-flex items-center gap-1 shrink-0" style="background-color: #EDF7ED; color: #2E7D32; border: 1px solid #A5D6A7;">
            <i class="fa-solid fa-crown text-[9px]" style="color: #B26B00;"></i> 100
          </span>`;
      } else if (isTuntas) {
        badgeHtml = `
          <span class="text-[10px] font-semibold px-1.5 py-0.5 rounded inline-flex items-center gap-1 shrink-0" style="background-color: #EDF7ED; color: #2E7D32; border: 1px solid #C8E6C9;">
            <i class="fa-solid fa-circle-check text-[9px]" style="color: #2E7D32;"></i> Tuntas
          </span>`;
      } else if (isRemedial) {
        badgeHtml = `
          <span class="text-[10px] font-bold px-1.5 py-0.5 rounded inline-flex items-center gap-1 shrink-0" style="background-color: #FFF1F0; color: #CF1322; border: 1px solid #FFA39E;">
            <i class="fa-solid fa-triangle-exclamation text-[9px]" style="color: #CF1322;"></i> Remedial
          </span>`;
      } else {
        badgeHtml = `
          <span class="text-[10px] font-medium px-1.5 py-0.5 rounded inline-flex items-center gap-1 shrink-0" style="background-color: #F0EFEA; color: #787774; border: 1px solid #E8E6DF;">
            Belum
          </span>`;
      }

      let durasiText = '';
      if (isDone && item.durasi_detik) {
        const m = Math.floor(item.durasi_detik / 60);
        const s = item.durasi_detik % 60;
        durasiText = m > 0 ? `${m}m ${s}s` : `${s}s`;
      }

      const attemptsText = (isDone && item.jumlah_percobaan) ? `${item.jumlah_percobaan}x coba` : '';

      let waktuFormatted = '';
      if (isDone && item.waktu_submit) {
        try {
          const d = new Date(item.waktu_submit);
          if (!isNaN(d.getTime())) {
            waktuFormatted = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
          }
        } catch(e) {}
      }

      let metaParts = [];
      if (durasiText) metaParts.push(durasiText);
      if (attemptsText) metaParts.push(attemptsText);
      if (waktuFormatted) metaParts.push(waktuFormatted);
      const subtitle = isDone ? metaParts.join(' • ') : '10 butir CBT • Target KKM ≥ 75';

      const scoreHtml = isDone ? `
        <div class="flex items-center gap-1.5">
          ${badgeHtml}
          <span class="font-mono font-bold text-xs text-[#2F3437]">
            ${item.skor}<span class="text-[10px] font-normal text-[#787774]">/100</span>
          </span>
        </div>` : `
        <div class="flex items-center gap-1.5">
          ${badgeHtml}
          <span class="font-mono text-xs text-[#787774]">—</span>
        </div>`;

      const actionBtn = isDone ? `
        <button type="button" onclick="bukaPaketCbtDariRapor('${escapeHtml(item.mapel)}', '${escapeHtml(item.id)}')" class="notion-btn-secondary px-2.5 py-1 rounded-md text-[11px] font-semibold flex items-center gap-1 shrink-0 shadow-sm cursor-pointer hover:bg-[#E8E6DF]" title="Kerjakan ulang paket ${escapeHtml(item.id)}">
          <i class="fa-solid fa-arrow-rotate-right text-[10px] text-[#787774]"></i> <span>Ulangi</span>
        </button>` : `
        <button type="button" onclick="bukaPaketCbtDariRapor('${escapeHtml(item.mapel)}', '${escapeHtml(item.id)}')" class="notion-btn-primary px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 shrink-0 shadow-sm cursor-pointer text-white" title="Mulai kerjakan paket ${escapeHtml(item.id)}">
          <i class="fa-solid fa-play text-[9px] text-white"></i> <span>Mulai</span>
        </button>`;

      return `
        <div class="rapor-package-row px-3 sm:px-4 py-2 flex items-center justify-between gap-2.5 transition hover:bg-[#FBFBFA]" style="${isDone ? '' : 'opacity: 0.95;'}">
          <div class="flex items-center gap-2.5 min-w-0">
            <span class="font-mono font-bold text-[11px] px-2 py-0.5 rounded shrink-0" style="background-color: #F0EFEA; border: 1px solid #E8E6DF; color: #2E384D;">
              ${escapeHtml(item.id)}
            </span>
            <div class="min-w-0">
              <div class="flex items-center gap-2">
                <span class="font-medium text-xs text-[#2F3437] truncate" title="${escapeHtml(item.title)}">${escapeHtml(item.title)}</span>
                <span class="text-[10px] text-[#787774] hidden md:inline shrink-0 font-normal">(${subtitle})</span>
              </div>
              <span class="text-[10px] text-[#787774] block md:hidden truncate font-normal">${subtitle}</span>
            </div>
          </div>

          <div class="flex items-center gap-2.5 shrink-0 ml-2">
            ${scoreHtml}
            ${actionBtn}
          </div>
        </div>`;
    }

    function setRaporBab(babKey) {
      _raporSelectedBab = babKey;
      _raporExpandedBabsInitialized = true;
      if (babKey !== 'all') {
        _raporExpandedBabs.add(babKey);
      }
      renderRaporCards();
    }

    function toggleRaporBab(babKey) {
      _raporExpandedBabsInitialized = true;
      if (_raporExpandedBabs.has(babKey)) {
        _raporExpandedBabs.delete(babKey);
      } else {
        _raporExpandedBabs.add(babKey);
      }
      renderRaporCards();
    }

    function toggleAllRaporBabs() {
      _raporExpandedBabsInitialized = true;
      const activeBabs = getFilteredBabList();
      const allExpanded = activeBabs.every(g => _raporExpandedBabs.has(g.key));
      if (allExpanded) {
        _raporExpandedBabs.clear();
      } else {
        activeBabs.forEach(g => _raporExpandedBabs.add(g.key));
      }
      renderRaporCards();
    }

    function getFilteredBabList() {
      const q = (_raporSearchQuery || '').trim().toLowerCase();
      const f = _raporCurrentFilter || 'all';

      const babMap = new Map();
      const babList = [];

      _raporAllPackages.forEach(pkg => {
        const babName = pkg.bab || (pkg.mapel === 'minat' ? 'Kurikulum Peminatan' : 'Kurikulum Wajib');
        const key = `${pkg.mapel}___${babName}`;
        if (!babMap.has(key)) {
          const group = {
            key: key,
            bab: babName,
            mapel: pkg.mapel,
            mapelLabel: pkg.mapelLabel || (pkg.mapel === 'minat' ? 'Matematika Peminatan' : 'Matematika Wajib'),
            allPackages: [],
            filteredPackages: []
          };
          babMap.set(key, group);
          babList.push(group);
        }
        babMap.get(key).allPackages.push(pkg);
      });

      babList.forEach(group => {
        group.filteredPackages = group.allPackages.filter(item => {
          if (f === 'wajib' && item.mapel !== 'wajib') return false;
          if (f === 'minat' && item.mapel !== 'minat') return false;
          if (f === 'tuntas' && (item.status !== 'sempurna' && item.status !== 'tuntas')) return false;
          if (f === 'belum' && (item.status === 'sempurna' || item.status === 'tuntas')) return false;

          if (q) {
            const matchId = (item.id || '').toLowerCase().includes(q);
            const matchTitle = (item.title || '').toLowerCase().includes(q);
            const matchBab = (item.bab || '').toLowerCase().includes(q);
            const matchMapel = (item.mapel || '').toLowerCase().includes(q) || (item.mapelLabel || '').toLowerCase().includes(q);
            const matchStatus = (item.status || '').toLowerCase().includes(q);
            if (!matchId && !matchTitle && !matchBab && !matchMapel && !matchStatus) return false;
          }

          return true;
        });
      });

      return babList.filter(g => g.filteredPackages.length > 0);
    }

    function renderRaporCards() {
      const cardsContainer = document.getElementById('rapor-cards-grid');
      if (!cardsContainer) return;

      const activeBabs = getFilteredBabList();

      // Update Bab Filter Chips Bar (#rapor-bab-bar)
      const babBar = document.getElementById('rapor-bab-bar');
      if (babBar) {
        if (activeBabs.length > 1) {
          let babBarHtml = `
            <div class="w-full flex items-center justify-between gap-2 py-1 flex-wrap">
              <div class="flex items-center gap-1.5 overflow-x-auto custom-scroll no-scrollbar py-1 max-w-full">
                <button type="button" onclick="setRaporBab('all')" class="px-2.5 py-1 rounded-lg text-xs whitespace-nowrap transition cursor-pointer font-semibold ${
                  _raporSelectedBab === 'all'
                    ? 'bg-[#2E384D] text-white shadow-sm font-bold'
                    : 'text-[#787774] hover:text-[#2F3437] hover:bg-[#E8E6DF] bg-white border border-[#E8E6DF]'
                }">
                  Semua Bab (${activeBabs.length})
                </button>
          `;
          activeBabs.forEach(g => {
            const isSel = _raporSelectedBab === g.key;
            let shortLabel = g.bab;
            const colonIdx = shortLabel.indexOf(':');
            if (colonIdx !== -1 && colonIdx < 12) {
              const part1 = shortLabel.substring(0, colonIdx);
              const part2 = shortLabel.substring(colonIdx + 1).trim().split('&')[0].trim().split(',')[0].trim();
              shortLabel = `${part1}: ${part2}`;
            }
            babBarHtml += `
              <button type="button" onclick="setRaporBab('${escapeHtml(g.key)}')" class="px-2.5 py-1 rounded-lg text-xs whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                isSel
                  ? 'bg-[#2E384D] text-white shadow-sm font-bold'
                  : 'text-[#787774] hover:text-[#2F3437] hover:bg-[#E8E6DF] bg-white border border-[#E8E6DF] font-medium'
              }">
                <i class="fa-solid fa-book-open text-[10px] ${isSel ? 'text-white' : 'text-[#787774]'}"></i>
                <span>${escapeHtml(shortLabel)}</span>
                <span class="text-[10px] opacity-75 font-mono">(${g.filteredPackages.length})</span>
              </button>
            `;
          });
          const allExp = activeBabs.every(g => _raporExpandedBabs.has(g.key));
          babBarHtml += `
              </div>
              <button type="button" onclick="toggleAllRaporBabs()" class="text-[11px] font-medium text-[#787774] hover:text-[#2F3437] underline whitespace-nowrap shrink-0 cursor-pointer">
                ${allExp ? 'Tutup Semua Bab' : 'Buka Semua Bab'}
              </button>
            </div>
          `;
          babBar.innerHTML = babBarHtml;
          babBar.classList.remove('hidden');
        } else {
          babBar.innerHTML = '';
          babBar.classList.add('hidden');
        }
      }

      // Filter by selected Bab
      let displayedBabs = activeBabs;
      if (_raporSelectedBab !== 'all') {
        displayedBabs = activeBabs.filter(g => g.key === _raporSelectedBab);
        if (displayedBabs.length === 0) {
          displayedBabs = activeBabs;
          _raporSelectedBab = 'all';
        }
      }

      if (displayedBabs.length === 0) {
        cardsContainer.innerHTML = `
          <div class="p-12 text-center rounded-2xl border shadow-sm" style="background-color: #FFFFFF; border-color: #E8E6DF;">
            <i class="fa-regular fa-folder-open text-3xl mb-3 block" style="color: #D3CFBE;"></i>
            <p class="font-bold text-sm" style="color: #2F3437;">Tidak ada paket atau bab yang sesuai kriteria</p>
            <p class="text-xs mt-1" style="color: #787774;">Coba sesuaikan kata kunci pencarian atau pilih tab "Semua Paket".</p>
          </div>`;
        return;
      }

      // Default accordion state: expand first bab only on initial load or filter change
      if (!_raporExpandedBabsInitialized) {
        _raporExpandedBabsInitialized = true;
        _raporExpandedBabs.clear();
        if (_raporSelectedBab !== 'all') {
          _raporExpandedBabs.add(_raporSelectedBab);
        } else if (displayedBabs.length > 0) {
          _raporExpandedBabs.add(displayedBabs[0].key);
        }
      }

      const htmlSections = displayedBabs.map(group => {
        const totalInBab = group.allPackages.length;
        const completedInBab = group.allPackages.filter(p => p.status === 'sempurna' || p.status === 'tuntas').length;
        const isAllDone = (completedInBab === totalInBab) && totalInBab > 0;
        
        let sumBabScore = 0;
        let attemptedInBab = 0;
        group.allPackages.forEach(p => {
          if (p.skor !== null && p.skor !== undefined) {
            sumBabScore += Number(p.skor);
            attemptedInBab++;
          }
        });
        const avgBab = attemptedInBab > 0 ? (sumBabScore / attemptedInBab).toFixed(1) : null;

        let mapelBadge = '';
        if (group.mapel === 'minat') {
          mapelBadge = '<span class="text-[10px] px-2 py-0.5 rounded font-semibold shrink-0" style="background-color: #FFF7E6; color: #B26B00; border: 1px solid #FFE7BA;">Peminatan</span>';
        } else if (group.mapel === 'clil') {
          mapelBadge = '<span class="text-[10px] px-2 py-0.5 rounded font-semibold shrink-0" style="background-color: #EBF3FB; color: #1B4F8B; border: 1px solid #D0E2F5;">CLIL</span>';
        } else {
          mapelBadge = '<span class="text-[10px] px-2 py-0.5 rounded font-semibold shrink-0" style="background-color: #F0EFEA; color: #5F5E5B; border: 1px solid #E8E6DF;">Wajib</span>';
        }

        let progressBadge = '';
        if (isAllDone) {
          progressBadge = `
            <span class="text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-lg inline-flex items-center gap-1.5 shadow-none" style="background-color: #EDF7ED; color: #2E7D32; border: 1px solid #A5D6A7;">
              <i class="fa-solid fa-circle-check" style="color: #2E7D32;"></i> Tuntas (${completedInBab}/${totalInBab})
            </span>`;
        } else if (completedInBab > 0) {
          progressBadge = `
            <span class="text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-lg inline-flex items-center gap-1.5 shadow-none" style="background-color: #EDF7ED; color: #2E7D32; border: 1px solid #C8E6C9;">
              ${completedInBab} / ${totalInBab} Tuntas
            </span>`;
        } else {
          progressBadge = `
            <span class="text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-lg inline-flex items-center gap-1.5 shadow-none" style="background-color: #F0EFEA; color: #787774; border: 1px solid #E8E6DF;">
              ${completedInBab} / ${totalInBab} Tuntas
            </span>`;
        }

        const avgBadge = avgBab ? `
          <span class="text-[10px] sm:text-[11px] font-mono font-bold px-2 py-0.5 rounded inline-flex items-center gap-1" style="background-color: #FBFBFA; color: #2F3437; border: 1px solid #E8E6DF;" title="Rata-rata skor resmi CBT bab ini">
            <span class="font-sans font-normal text-[10px]" style="color: #787774;">Rerata:</span> ${avgBab}
          </span>` : '';

        const isExpanded = _raporExpandedBabs.has(group.key);

        return `
          <div class="rapor-bab-card rounded-xl border shadow-none overflow-hidden" style="background-color: #FFFFFF; border-color: #E8E6DF;">
            <!-- BAB HEADER (ACCORDION TOGGLE) -->
            <div onclick="toggleRaporBab('${escapeHtml(group.key)}')" class="rapor-bab-header px-3.5 sm:px-4 py-2 flex items-center justify-between gap-2 border-b cursor-pointer select-none transition hover:bg-[#F5F4F0]" style="background-color: #FBFBFA; border-color: #E8E6DF;" title="${isExpanded ? 'Klik untuk meminimalkan bab' : 'Klik untuk membuka bab'}">
              <div class="flex items-center gap-2 min-w-0">
                <i class="fa-solid fa-chevron-${isExpanded ? 'down' : 'right'} text-[11px] text-[#787774] w-3.5 shrink-0 transition-transform"></i>
                <div class="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold shrink-0" style="background-color: #F0EFEA; color: #2E384D; border: 1px solid #E8E6DF;">
                  <i class="fa-solid fa-book-open text-[10px]" style="color: #2E384D;"></i>
                </div>
                <div class="min-w-0 flex items-center gap-2 flex-wrap sm:flex-nowrap">
                  <h4 class="font-bold text-xs sm:text-sm text-[#2F3437] truncate">${escapeHtml(group.bab)}</h4>
                  ${mapelBadge}
                  <span class="text-[10px] text-[#787774] hidden md:inline">(${group.filteredPackages.length} paket CBT)</span>
                </div>
              </div>

              <div class="flex items-center gap-1.5 shrink-0">
                ${avgBadge}
                ${progressBadge}
              </div>
            </div>

            <!-- BAB PACKAGES LIST -->
            <div class="${isExpanded ? '' : 'hidden'} divide-y divide-[#E8E6DF]">
              ${group.filteredPackages.map(renderSingleRaporCard).join('')}
            </div>
          </div>`;
      });

      cardsContainer.innerHTML = htmlSections.join('');
    }

    function updateRaporKPI() {
      let targetPackages = [];
      const f = _raporCurrentFilter || 'all';

      if (f === 'wajib') {
        targetPackages = _raporAllPackages.filter(p => p.mapel === 'wajib');
      } else if (f === 'minat') {
        targetPackages = _raporAllPackages.filter(p => p.mapel === 'minat');
      } else if (f === 'tuntas') {
        targetPackages = _raporAllPackages.filter(p => p.status === 'sempurna' || p.status === 'tuntas');
      } else if (f === 'belum') {
        targetPackages = _raporAllPackages.filter(p => p.status !== 'sempurna' && p.status !== 'tuntas');
      } else {
        targetPackages = _raporAllPackages;
      }

      const totalCount = targetPackages.length;
      const completedPackages = targetPackages.filter(p => p.status === 'sempurna' || p.status === 'tuntas');
      const completedCount = completedPackages.length;

      let sumScore = 0;
      let attemptedCount = 0;
      targetPackages.forEach(p => {
        if (p.skor !== null && p.skor !== undefined) {
          sumScore += Number(p.skor);
          attemptedCount++;
        }
      });

      const avgVal = attemptedCount > 0 ? (sumScore / attemptedCount) : 0;
      const avgStr = attemptedCount > 0 ? avgVal.toFixed(1) : '0.0';
      const pctVal = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

      let grade = '-';
      let gradeDesc = '-';
      if (attemptedCount > 0) {
        if (avgVal >= 92) { grade = 'A+'; gradeDesc = 'Sangat Memuaskan'; }
        else if (avgVal >= 84) { grade = 'A'; gradeDesc = 'Memuaskan'; }
        else if (avgVal >= 75) { grade = 'B'; gradeDesc = 'Tuntas KKM'; }
        else { grade = 'C'; gradeDesc = 'Perlu Pembinaan'; }
      }

      const kpiAvg = document.getElementById('rapor-kpi-avg');
      if (kpiAvg) kpiAvg.textContent = avgStr;
      const kpiComp = document.getElementById('rapor-kpi-completed');
      if (kpiComp) kpiComp.textContent = `${completedCount} / ${totalCount}`;
      const kpiPct = document.getElementById('rapor-kpi-pct');
      if (kpiPct) kpiPct.textContent = `${pctVal}%`;
      const kpiGrade = document.getElementById('rapor-kpi-grade');
      if (kpiGrade) kpiGrade.textContent = grade;
      const kpiGradeDesc = document.getElementById('rapor-kpi-grade-desc');
      if (kpiGradeDesc) kpiGradeDesc.textContent = gradeDesc;

      const progText = document.getElementById('rapor-progress-text');
      if (progText) progText.textContent = `${completedCount} dari ${totalCount} Paket Tuntas (${pctVal}%)`;
      const progBar = document.getElementById('rapor-progress-bar');
      if (progBar) progBar.style.width = `${pctVal}%`;
    }

    function setRaporFilter(filterKey) {
      _raporCurrentFilter = filterKey;
      _raporSelectedBab = 'all';
      _raporExpandedBabsInitialized = false;
      _raporExpandedBabs.clear();
      ['all', 'wajib', 'minat', 'tuntas', 'belum'].forEach(k => {
        const btn = document.getElementById(`rapor-tab-${k}`);
        if (!btn) return;
        if (k === filterKey) {
          btn.classList.add('active');
          btn.style.backgroundColor = '#2E384D';
          btn.style.color = '#FFFFFF';
        } else {
          btn.classList.remove('active');
          btn.style.backgroundColor = 'transparent';
          if (k === 'tuntas') {
            btn.style.color = '#2E7D32';
          } else {
            btn.style.color = '#787774';
          }
        }
      });
      updateRaporKPI();
      renderRaporCards();
    }

    function searchRapor(query) {
      _raporSearchQuery = query;
      if (query && query.trim().length > 0) {
        const activeBabs = getFilteredBabList();
        activeBabs.forEach(g => _raporExpandedBabs.add(g.key));
        _raporExpandedBabsInitialized = true;
      }
      renderRaporCards();
    }

    async function loadRaporData(targetNis, forceSync) {
      _raporActiveStudentNis = targetNis;
      _raporExpandedBabsInitialized = false;
      const cardsContainer = document.getElementById('rapor-cards-grid');
      if (cardsContainer) {
        cardsContainer.innerHTML = '<div class="p-12 text-center text-xs font-medium" style="color: #787774; background-color: #FFFFFF;"><i class="fa-solid fa-spinner fa-spin text-xl mb-2 block" style="color: #2E384D;"></i>Mengambil rekap nilai resmi dari Cloudflare D1...</div>';
      }

      // 1. Cari info identitas siswa
      let std = null;
      const stds = window.STUDENTS_DATA || {};
      if (stds[targetNis]) {
        std = stds[targetNis];
      } else {
        let sess = null;
        try { sess = JSON.parse(localStorage.getItem('portal_session') || 'null'); } catch(e) {}
        if (sess && sess.data && String(sess.data.nis) === String(targetNis)) {
          std = { nama: sess.data.nama || sess.data.name, kelas: sess.data.kelas || sess.data.kelas_name, access_level: sess.data.access_level };
        }
      }

      if (!std && targetNis === '24400083') {
        std = { nama: 'Rania Zivanka Kurniawan', kelas: 'XII F4', access_level: 'full' };
      }

      const defaultTingkat = (typeof NAMA_TINGKAT !== 'undefined') ? NAMA_TINGKAT : 'XII';
      const nama = (std && std.nama) ? std.nama : ('Siswa ' + targetNis);
      const kelas = (std && std.kelas) ? std.kelas : defaultTingkat;
      const cleanKls = String(kelas).toUpperCase();
      const accessLevel = (std && std.access_level) ? std.access_level : ((cleanKls.includes('F1') || cleanKls.includes('F2')) ? 'wajib_only' : 'full');

      const words = nama.trim().split(/\s+/);
      const initials = words.length >= 2 ? (words[0][0] + words[1][0]).toUpperCase() : (words[0].substring(0, 2)).toUpperCase();

      const nameEl = document.getElementById('rapor-student-name');
      if (nameEl) nameEl.textContent = nama;
      const nisEl = document.getElementById('rapor-student-nis');
      if (nisEl) nisEl.textContent = targetNis;
      const classEl = document.getElementById('rapor-student-class');
      if (classEl) classEl.textContent = kelas;
      const initEl = document.getElementById('rapor-student-initials');
      if (initEl) initEl.textContent = initials;

      const statusBadge = document.getElementById('rapor-student-status-badge');
      if (statusBadge) {
        let sess = null;
        try { sess = JSON.parse(localStorage.getItem('portal_session') || 'null'); } catch(e) {}
        if (sess && sess.type === 'guru') {
          statusBadge.innerHTML = '<i class="fa-solid fa-user-check mr-1"></i>Akses Guru Terverifikasi';
        } else if (sess && sess.type === 'siswa' && String(sess.data && sess.data.nis) === String(targetNis)) {
          statusBadge.innerHTML = '<i class="fa-solid fa-circle-check mr-1"></i>Terdaftar Aktif';
        } else {
          statusBadge.innerHTML = '<i class="fa-solid fa-eye mr-1"></i>Mode Pratinjau';
        }
      }

      // 2. Fetch nilai Cloudflare D1
      let subMap = {};
      try {
        let sess = null;
        try { sess = JSON.parse(localStorage.getItem('portal_session') || 'null'); } catch(e) {}
        const isGuru = sess && sess.type === 'guru';
        const headers = isGuru ? getTeacherAuthHeaders() : (typeof getAuthHeaders === 'function' ? getAuthHeaders() : {});

        const resp = await fetch(`/api/nilai?nis=${encodeURIComponent(targetNis)}&_t=${Date.now()}`, {
          headers: headers
        });
        if (resp.ok) {
          const data = await resp.json();
          if (Array.isArray(data)) {
            data.forEach(r => {
              const k1 = `${r.mapel}_${r.kode_pertemuan}`;
              const k2 = `${(r.mapel || '').toLowerCase()}_${String(r.kode_pertemuan || '').toUpperCase()}`;
              const k3 = `${(r.mapel || '').toLowerCase()}_${String(r.kode_pertemuan || '').toLowerCase()}`;
              subMap[k1] = r;
              subMap[k2] = r;
              subMap[k3] = r;
            });

            if (!isGuru && String(targetNis) === String((sess && sess.data && sess.data.nis) || '')) {
              window._cbtCompletedSubmissions = Object.assign(window._cbtCompletedSubmissions || {}, subMap);
            }
          }
        }
      } catch (err) {
        console.warn('Gagal menarik nilai dari D1:', err);
      }

      // Fallback lokal jika ada pengerjaan offline yang belum tersinkron + Otomatis Auto-Heal ke Cloudflare D1
      try {
        const cacheKey = typeof kunciTingkat === 'function' ? kunciTingkat('cbt_completed_' + targetNis) : ('cbt_completed_' + targetNis);
        const cached = JSON.parse(localStorage.getItem(cacheKey) || '{}');
        const missingFromD1 = [];
        if (cached && typeof cached === 'object') {
          Object.keys(cached).forEach(k => {
            const item = cached[k];
            if (item && item.kode_pertemuan && item.skor !== undefined) {
              const k1 = `${item.mapel}_${item.kode_pertemuan}`;
              const k2 = `${(item.mapel || '').toLowerCase()}_${String(item.kode_pertemuan || '').toUpperCase()}`;
              const k3 = `${(item.mapel || '').toLowerCase()}_${String(item.kode_pertemuan || '').toLowerCase()}`;
              if (!subMap[k1] && !subMap[k2] && !subMap[k3]) {
                subMap[k1] = item;
                subMap[k2] = item;
                subMap[k3] = item;
                missingFromD1.push(item);
              }
            }
          });
        }

        // Auto-Heal: Jika ada nilai lokal yang belum masuk ke server D1, langsung unggah ke D1 di latar belakang
        if (missingFromD1.length > 0 && !isGuru) {
          (async () => {
            for (const item of missingFromD1) {
              try {
                await fetch('/api/nilai', {
                  method: 'POST',
                  headers: typeof getAuthHeaders === 'function' ? getAuthHeaders({ 'Content-Type': 'application/json' }) : { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    nis: String(targetNis),
                    nama: item.nama || '',
                    kelas: item.kelas || '',
                    mapel: item.mapel || 'wajib',
                    kode_pertemuan: item.kode_pertemuan,
                    skor: Number(item.skor) || 0,
                    jumlah_soal: Number(item.jumlah_soal) || 10,
                    jumlah_benar: Number(item.jumlah_benar) || 10,
                    jumlah_salah: Number(item.jumlah_salah) || 0,
                    durasi_detik: Math.max(Number(item.durasi_detik) || 60, 15),
                    jumlah_percobaan: Number(item.jumlah_percobaan) || 1,
                    answers: item.answers || [],
                    is_sync: true,
                    source: 'rapor-auto-heal'
                  }),
                  keepalive: true
                });
                console.log('⚡ Rapor Auto-Heal: tersinkron ke D1:', item.mapel, item.kode_pertemuan);
              } catch (e) {}
              await new Promise(r => setTimeout(r, 200));
            }
          })();
        }
      } catch (e) {}

      // 3. Gabungkan dengan paket materi sesuai kurikulum kelas siswa
      const rawList = getRaporPackageList(kelas, accessLevel, subMap);

      _raporAllPackages = rawList.map(p => {
        const k1 = `${p.mapel}_${p.id}`;
        const k2 = `${p.mapel.toLowerCase()}_${p.id.toUpperCase()}`;
        const k3 = `${p.mapel.toLowerCase()}_${p.id.toLowerCase()}`;
        const rec = subMap[k1] || subMap[k2] || subMap[k3] || null;

        let status = 'belum';
        let skor = null;
        let durasi_detik = 0;
        let jumlah_percobaan = 1;
        let waktu_submit = null;

        if (rec) {
          skor = Number(rec.skor);
          durasi_detik = Number(rec.durasi_detik) || 0;
          jumlah_percobaan = Number(rec.jumlah_percobaan) || 1;
          waktu_submit = rec.waktu_submit || null;

          if (skor === 100) {
            status = 'sempurna';
          } else if (skor >= 75) {
            status = 'tuntas';
          } else {
            status = 'remedial';
          }
        }

        return {
          id: p.id,
          mapel: p.mapel,
          mapelLabel: p.mapelLabel,
          title: p.title,
          bab: p.bab,
          status: status,
          skor: skor,
          durasi_detik: durasi_detik,
          jumlah_percobaan: jumlah_percobaan,
          waktu_submit: waktu_submit
        };
      });

      // 4. Perbarui Badge Hitungan Tab Filter
      const totalCount = _raporAllPackages.length;
      const countAll = document.getElementById('rapor-count-all');
      if (countAll) countAll.textContent = totalCount;
      const countWajib = document.getElementById('rapor-count-wajib');
      if (countWajib) countWajib.textContent = _raporAllPackages.filter(p => p.mapel === 'wajib').length;
      const minatCount = _raporAllPackages.filter(p => p.mapel === 'minat').length;
      const countMinat = document.getElementById('rapor-count-minat');
      if (countMinat) countMinat.textContent = minatCount;
      const tabMinat = document.getElementById('rapor-tab-minat');
      if (tabMinat) {
        tabMinat.style.display = (minatCount > 0) ? '' : 'none';
      }
      const allCompleted = _raporAllPackages.filter(p => p.status === 'sempurna' || p.status === 'tuntas').length;
      const countTuntas = document.getElementById('rapor-count-tuntas');
      if (countTuntas) countTuntas.textContent = allCompleted;
      const countBelum = document.getElementById('rapor-count-belum');
      if (countBelum) countBelum.textContent = totalCount - allCompleted;

      // Jika tab minat aktif tetapi siswa tidak memiliki mapel minat, alihkan ke tab 'all'
      if (_raporCurrentFilter === 'minat' && minatCount === 0) {
        _raporCurrentFilter = 'all';
        ['all', 'wajib', 'minat', 'tuntas', 'belum'].forEach(k => {
          const btn = document.getElementById(`rapor-tab-${k}`);
          if (!btn) return;
          if (k === 'all') {
            btn.classList.add('active');
            btn.style.backgroundColor = '#2E384D';
            btn.style.color = '#FFFFFF';
          } else {
            btn.classList.remove('active');
            btn.style.backgroundColor = 'transparent';
            btn.style.color = (k === 'tuntas') ? '#2E7D32' : '#787774';
          }
        });
      }

      // 5. Perbarui Metrik KPI Sesuai Tab & Render Kartu
      updateRaporKPI();
      renderRaporCards();
    }

    function gantiSiswaRapor(nis) {
      if (nis) {
        loadRaporData(nis, false);
      }
    }

    function refreshRaporData(manual) {
      if (_raporActiveStudentNis) {
        loadRaporData(_raporActiveStudentNis, true).then(() => {
          if (manual) {
            alert('Data nilai resmi berhasil disinkronkan langsung dari Cloudflare D1!');
          }
        });
      }
    }

    function bukaPaketCbtDariRapor(mapel, kode) {
      closeRaporModal();
      if (typeof openTkaForCurrentMeeting === 'function') {
        openTkaForCurrentMeeting(kode, 0, mapel);
      } else {
        if (typeof switchSubject === 'function') switchSubject('tka');
        if (typeof tkaSubj !== 'undefined') tkaSubj = mapel;
        if (typeof tkaPkgId !== 'undefined') tkaPkgId = kode;
        if (typeof renderAppView === 'function') renderAppView();
      }
    }

    function cetakRaporSiswa() {
      document.body.classList.add('rapor-printing');
      window.print();
    }

    // Tangani print shortcut (Ctrl+P) dan tombol Cetak secara konsisten
    window.addEventListener('beforeprint', function () {
      const modal = document.getElementById('rapor-siswa-modal');
      if (modal && !modal.classList.contains('hidden')) {
        document.body.classList.add('rapor-printing');
      }
    });
    window.addEventListener('afterprint', function () {
      document.body.classList.remove('rapor-printing');
    });

    function openRaporModal(targetNis) {
      let sess = null;
      try {
        sess = JSON.parse(localStorage.getItem('portal_session') || 'null');
      } catch(e) {}

      const modal = document.getElementById('rapor-siswa-modal');
      if (!modal) return;
      modal.classList.remove('hidden');

      _raporSelectedBab = 'all';
      _raporExpandedBabs.clear();
      const searchInput = document.getElementById('rapor-search-input');
      if (searchInput) searchInput.value = '';
      _raporSearchQuery = '';
      // Default ke tab 'all' (Semua) agar siswa langsung melihat SELURUH progres belajarnya (Wajib & Peminatan)
      setRaporFilter('all');

      const isGuru = sess && sess.type === 'guru';
      const isSiswa = sess && sess.type === 'siswa';
      const switcher = document.getElementById('rapor-guru-switcher');
      const sel = document.getElementById('rapor-select-siswa');

      if (isGuru || !sess) {
        if (switcher) switcher.classList.remove('hidden');
        if (sel && sel.options.length <= 1) {
          sel.innerHTML = '';
          const stds = window.STUDENTS_DATA || {};
          const nisKeys = Object.keys(stds);
          if (nisKeys.length > 0) {
            const sortedNis = nisKeys.sort((a,b) => (stds[a].nama || '').localeCompare(stds[b].nama || ''));
            sortedNis.forEach(n => {
              const opt = document.createElement('option');
              opt.value = n;
              opt.textContent = `${stds[n].nama} (${stds[n].kelas || 'XII'})`;
              sel.appendChild(opt);
            });
          } else {
            const opt = document.createElement('option');
            opt.value = '24400083';
            opt.textContent = 'Rania Zivanka Kurniawan (XII F.4)';
            sel.appendChild(opt);
          }
        }

        let chosenNis = targetNis;
        if (!chosenNis && sel && sel.value) chosenNis = sel.value;
        if (!chosenNis && sel && sel.options.length > 0) chosenNis = sel.options[0].value;
        if (!chosenNis) chosenNis = '24400083'; // Default: Rania Zivanka
        if (sel) sel.value = chosenNis;
        loadRaporData(chosenNis, false);
      } else if (isSiswa) {
        if (switcher) switcher.classList.add('hidden');
        const studentNis = (sess.data && sess.data.nis) ? String(sess.data.nis) : '';
        if (studentNis) {
          loadRaporData(studentNis, false);
        } else {
          loadRaporData('24400083', false);
        }
      }
    }

    function closeRaporModal() {
      const modal = document.getElementById('rapor-siswa-modal');
      if (modal) modal.classList.add('hidden');
    }

    // EXPOSE RAPOR MODULE TO GLOBAL WINDOW
    window.openRaporModal = openRaporModal;
    window.closeRaporModal = closeRaporModal;
    window.setRaporFilter = setRaporFilter;
    window.searchRapor = searchRapor;
    window.gantiSiswaRapor = gantiSiswaRapor;
    window.refreshRaporData = refreshRaporData;
    window.bukaPaketCbtDariRapor = bukaPaketCbtDariRapor;
    window.cetakRaporSiswa = cetakRaporSiswa;
    window.setRaporBab = setRaporBab;
    window.toggleRaporBab = toggleRaporBab;
    window.toggleAllRaporBabs = toggleAllRaporBabs;

    // =========================================================================
    // MODUL GAMIFIKASI, DAILY STREAK & PAPAN PERINGKAT (LEADERBOARD) SISWA
    // Standar Guru & IT Profesional • Mr. Ardi • Notion Warm Paper Style
    // =========================================================================

    let _currentLbMapel = 'wajib';
    let _currentLbFilter = 'all';
    let _currentLbView = 'table';
    let _cachedGamifikasiProfile = null;
    let _cachedLeaderboardData = null;

    // Helper Initials Siswa
    function getStudentInitials(name) {
      if (!name) return '??';
      const clean = String(name).trim();
      const parts = clean.split(/\s+/);
      if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
      }
      return clean.slice(0, 2).toUpperCase();
    }

    // Ambil Profil Gamifikasi Siswa Tertentu
    async function fetchGamificationProfile(targetNis) {
      try {
        let nis = targetNis;
        if (!nis) {
          let sess = null;
          try { sess = JSON.parse(localStorage.getItem('portal_session') || 'null'); } catch(e) {}
          if (sess && sess.data && sess.data.nis) {
            nis = sess.data.nis;
          } else {
            nis = '24400083'; // Fallback default demo siswa
          }
        }

        const resp = await fetch(`/api/gamifikasi?nis=${encodeURIComponent(nis)}&_t=${Date.now()}`);
        if (!resp.ok) return null;
        const data = await resp.json();
        if (data && data.success && data.profile) {
          _cachedGamifikasiProfile = data.profile;
          try {
            localStorage.setItem('mathcihuy_gamifikasi_' + nis, JSON.stringify(data.profile));
          } catch(e) {}
          renderGamificationHeroCard(data.profile);
          return data.profile;
        }
      } catch (err) {
        console.warn('Gagal memuat profil gamifikasi:', err);
      }
      return null;
    }

    // Render Kartu Hero Gamifikasi di Home Stage
    function renderGamificationHeroCard(profile) {
      if (!profile) return;
      const card = document.getElementById('gamifikasi-hero-card');
      if (!card) return;

      const avatarInitialsEl = document.getElementById('gamifikasi-avatar-initials');
      const levelPillEl = document.getElementById('gamifikasi-level-pill');
      const namaEl = document.getElementById('gamifikasi-nama');
      const kelasEl = document.getElementById('gamifikasi-kelas');
      const gelarBadgeEl = document.getElementById('gamifikasi-gelar-badge');
      const gelarTextEl = document.getElementById('gamifikasi-gelar-text');
      const totalXpEl = document.getElementById('gamifikasi-total-xp');
      const nextXpEl = document.getElementById('gamifikasi-next-xp');
      const xpBarEl = document.getElementById('gamifikasi-xp-bar');
      const streakCountEl = document.getElementById('gamifikasi-streak-count');
      const sempurnaCountEl = document.getElementById('gamifikasi-sempurna-count');
      const rankTextEl = document.getElementById('gamifikasi-rank-text');
      const rankSubEl = document.getElementById('gamifikasi-rank-sub');
      const badgesContainer = document.getElementById('gamifikasi-badges-pills');

      if (avatarInitialsEl) avatarInitialsEl.textContent = getStudentInitials(profile.nama);
      if (levelPillEl) levelPillEl.textContent = 'Lvl ' + (profile.level || 1);
      if (namaEl) namaEl.textContent = profile.nama || 'Siswa';
      if (kelasEl) kelasEl.textContent = profile.kelas || 'XII';
      if (gelarTextEl) gelarTextEl.textContent = profile.gelar || 'Novice Explorer';
      if (totalXpEl) totalXpEl.textContent = (profile.total_xp || 0).toLocaleString('id-ID');

      if (nextXpEl) {
        if (profile.level >= 6) {
          nextXpEl.textContent = 'Level Maksimal (Grandmaster)';
        } else {
          const sisaXp = Math.max(0, (profile.next_level_xp || 200) - (profile.current_xp || 0));
          nextXpEl.textContent = `${profile.progress_pct || 0}% • Butuh ${sisaXp.toLocaleString('id-ID')} XP lagi`;
        }
      }

      if (xpBarEl) {
        const pct = Math.min(100, Math.max(0, profile.progress_pct || 0));
        xpBarEl.style.width = pct + '%';
      }

      if (streakCountEl) streakCountEl.textContent = profile.current_streak || 1;
      if (sempurnaCountEl) sempurnaCountEl.textContent = profile.total_sempurna || 0;

      const shieldCountEl = document.getElementById('gamifikasi-shield-count');
      if (shieldCountEl) shieldCountEl.textContent = profile.streak_shields !== undefined ? profile.streak_shields : 1;
      const shieldBox = document.getElementById('gamifikasi-shield-box');
      if (shieldBox && profile.is_shield_active) {
        shieldBox.title = "🛡️ Perisai Streak AKTIF! Melindungi api streakmu hari ini dari reset.";
        shieldBox.classList.add('ring-2', 'ring-emerald-400');
      }

      if (rankTextEl) {
        const rWajibCls = profile.rank_wajib_class || profile.rank_class || 1;
        const rWajibGbl = profile.rank_wajib_global || profile.rank_global || 1;
        if (profile.is_minat_eligible && profile.rank_minat_class) {
          rankTextEl.innerHTML = `<span title="Peringkat Matematika Wajib Kelas">Wajib #${rWajibCls}</span> <span class="text-xs font-normal text-[#A8A29E]">|</span> <span class="text-amber-700" title="Peringkat Matematika Peminatan Kelas">Minat #${profile.rank_minat_class}</span>`;
          if (rankSubEl) {
            rankSubEl.textContent = `(Angkatan: Wajib #${rWajibGbl} • Minat #${profile.rank_minat_global})`;
          }
        } else {
          rankTextEl.textContent = `Wajib #${rWajibCls}`;
          if (rankSubEl) {
            rankSubEl.textContent = `(Angkatan XII: #${rWajibGbl} dari ${profile.total_global || 101})`;
          }
        }
      }

      // Render Lencana Koleksi
      if (badgesContainer) {
        const badges = profile.badges || [];
        if (badges.length === 0) {
          badgesContainer.innerHTML = '<span class="text-[11px] text-[#787774] italic">Belum ada lencana. Selesaikan CBT &amp; Angket untuk membuka!</span>';
        } else {
          badgesContainer.innerHTML = badges.map(b => `
            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10.5px] font-semibold border cursor-help shadow-2xs transition-transform hover:scale-105"
                  style="background-color: ${b.bg || '#F0EFEA'}; color: ${b.color || '#2F3437'}; border-color: ${b.color ? b.color + '33' : '#E8E6DF'};"
                  title="${escapeHtml(b.name || b.id)}: ${escapeHtml(b.desc || '')}">
              <i class="${escapeHtml(b.icon || 'fa-solid fa-award')} text-[10px]"></i>
              <span>${escapeHtml(b.name || b.id)}</span>
            </span>
          `).join('');
        }
      }

      // Render Widget Event Mingguan (Raid Boss Battle)
      if (typeof renderWeeklyEventWidget === 'function') {
        renderWeeklyEventWidget(profile.raid_boss || profile.weekly_event);
      }
    }

    // Buka Modal Leaderboard
    function openLeaderboardModal(kelasFilter, view, mapel) {
      const modal = document.getElementById('leaderboard-modal');
      if (!modal) return;
      modal.classList.remove('hidden');
      const scrollBody = modal.querySelector('.overflow-y-auto');
      if (scrollBody) scrollBody.scrollTop = 0;

      if (mapel) {
        _currentLbMapel = mapel;
      }

      if (view === 'catalog') {
        switchLeaderboardView('catalog');
      } else if (view === 'roadmap') {
        switchLeaderboardView('roadmap');
      } else if (view === 'rombel') {
        switchLeaderboardView('rombel');
      } else {
        switchLeaderboardView('table');
        switchLeaderboardMapel(_currentLbMapel, false);
        switchLeaderboardFilter(kelasFilter || _currentLbFilter || 'all');
      }
    }

    // Tutup Modal Leaderboard
    function closeLeaderboardModal() {
      const modal = document.getElementById('leaderboard-modal');
      if (modal) modal.classList.add('hidden');
    }

    // Ganti Tampilan Antara Tabel Leaderboard, Katalog Lencana, Roadmap, dan Kompetisi Rombel
    function switchLeaderboardView(view) {
      _currentLbView = view;
      const tableView = document.getElementById('lb-view-table');
      const catalogView = document.getElementById('lb-view-catalog');
      const roadmapView = document.getElementById('lb-view-roadmap');
      const rombelView = document.getElementById('lb-view-rombel');
      const catalogTabBtn = document.getElementById('btn-lb-tab-catalog');
      const roadmapTabBtn = document.getElementById('btn-lb-tab-roadmap');
      const rombelTabBtn = document.getElementById('btn-lb-tab-rombel');

      // Sembunyikan semua kontainer tampilan
      if (tableView) tableView.classList.add('hidden');
      if (catalogView) catalogView.classList.add('hidden');
      if (roadmapView) roadmapView.classList.add('hidden');
      if (rombelView) rombelView.classList.add('hidden');

      // Reset tombol filter & tab
      ['all', '12f1', '12f2', '12f3', '12f4'].forEach(k => {
        const btn = document.getElementById('btn-lb-filter-' + k);
        if (btn) btn.classList.remove('active');
      });
      if (catalogTabBtn) catalogTabBtn.classList.remove('active');
      if (roadmapTabBtn) roadmapTabBtn.classList.remove('active');
      if (rombelTabBtn) rombelTabBtn.classList.remove('active');

      if (view === 'catalog') {
        if (catalogView) catalogView.classList.remove('hidden');
        if (catalogTabBtn) catalogTabBtn.classList.add('active');

        // Render catalog contents if data ready
        if (_cachedLeaderboardData) {
          renderBadgeCatalog(_cachedLeaderboardData.catalog, _cachedLeaderboardData.levels);
        } else {
          loadLeaderboardData(_currentLbFilter, _currentLbMapel);
        }
      } else if (view === 'roadmap') {
        if (roadmapView) roadmapView.classList.remove('hidden');
        if (roadmapTabBtn) roadmapTabBtn.classList.add('active');
      } else if (view === 'rombel') {
        if (rombelView) rombelView.classList.remove('hidden');
        if (rombelTabBtn) rombelTabBtn.classList.add('active');
        loadRombelLeaderboardData(_currentLbMapel);
      } else {
        if (tableView) tableView.classList.remove('hidden');
        updateLeaderboardFilterUi();
      }
    }

    // Ganti Pilihan Mapel (Matematika Wajib vs Matematika Peminatan vs All-Round)
    function switchLeaderboardMapel(mapel, reload = true) {
      _currentLbMapel = mapel || 'wajib';

      const btnWajib = document.getElementById('btn-lb-mapel-wajib');
      const btnMinat = document.getElementById('btn-lb-mapel-minat');
      const btnAll = document.getElementById('btn-lb-mapel-all');
      const descEl = document.getElementById('lb-mapel-desc');
      const thXp = document.getElementById('lb-th-xp');

      const activeClasses = ['bg-[#2E384D]', 'text-white', 'shadow-xs', 'font-bold'];
      const inactiveClasses = ['text-[#5F5E5B]', 'hover:text-[#2F3437]', 'hover:bg-black/5', 'font-semibold'];

      [
        { btn: btnWajib, key: 'wajib' },
        { btn: btnMinat, key: 'minat' },
        { btn: btnAll, key: 'all' }
      ].forEach(item => {
        if (!item.btn) return;
        if (item.key === _currentLbMapel) {
          item.btn.classList.add(...activeClasses);
          item.btn.classList.remove(...inactiveClasses);
          const bSpan = item.btn.querySelector('span:last-child');
          if (bSpan) {
            bSpan.className = 'px-1.5 py-0.2 rounded text-[10px] bg-white/20 font-mono';
          }
        } else {
          item.btn.classList.remove(...activeClasses);
          item.btn.classList.add(...inactiveClasses);
          const bSpan = item.btn.querySelector('span:last-child');
          if (bSpan) {
            bSpan.className = 'px-1.5 py-0.2 rounded text-[10px] bg-[#E8E6DF] text-[#5F5E5B] font-mono';
          }
        }
      });

      if (_currentLbMapel === 'minat') {
        if (descEl) descEl.innerHTML = '<span class="text-amber-800 font-bold"><i class="fa-solid fa-compass-drafting mr-1"></i>Peringkat Matematika Peminatan:</span> Khusus rombel XII F3 &amp; XII F4 (50 Siswa)';
        if (thXp) thXp.textContent = 'XP Minat';
        if (_currentLbFilter === 'XII_F1' || _currentLbFilter === 'XII_F2') {
          _currentLbFilter = 'all';
        }
      } else if (_currentLbMapel === 'all') {
        if (descEl) descEl.innerHTML = '<span class="text-indigo-800 font-bold"><i class="fa-solid fa-trophy mr-1 text-amber-500"></i>Peringkat All-Round:</span> Akumulasi seluruh XP (Wajib + Minat + Kuis Discord + Angket)';
        if (thXp) thXp.textContent = 'Total XP';
      } else {
        if (descEl) descEl.innerHTML = '<span class="text-blue-800 font-bold"><i class="fa-solid fa-book-bookmark mr-1"></i>Peringkat Matematika Wajib:</span> Kompetisi adil 101 siswa seluruh rombel XII F1 s.d. F4';
        if (thXp) thXp.textContent = 'XP Wajib';
      }

      updateLeaderboardFilterUi();

      if (reload) {
        if (_currentLbView === 'rombel') {
          loadRombelLeaderboardData(_currentLbMapel);
        } else {
          loadLeaderboardData(_currentLbFilter, _currentLbMapel);
        }
      }
    }

    // Update Tampilan Tab Filter Kelas & Label Header
    function updateLeaderboardFilterUi() {
      const tabMap = {
        'all': 'btn-lb-filter-all',
        'XII_F1': 'btn-lb-filter-12f1',
        'XII_F2': 'btn-lb-filter-12f2',
        'XII_F3': 'btn-lb-filter-12f3',
        'XII_F4': 'btn-lb-filter-12f4'
      };

      Object.keys(tabMap).forEach(k => {
        const btn = document.getElementById(tabMap[k]);
        if (btn) {
          if (k === _currentLbFilter) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }

          if (_currentLbMapel === 'minat' && (k === 'XII_F1' || k === 'XII_F2')) {
            btn.classList.add('opacity-40', 'cursor-not-allowed');
            btn.title = 'Rombel ini tidak memiliki mapel Matematika Peminatan';
          } else {
            btn.classList.remove('opacity-40', 'cursor-not-allowed');
            btn.removeAttribute('title');
          }
        }
      });

      const labelEl = document.getElementById('lb-filter-label');
      if (labelEl) {
        let mapelName = 'Matematika Wajib';
        if (_currentLbMapel === 'minat') mapelName = 'Matematika Peminatan';
        else if (_currentLbMapel === 'all') mapelName = 'All-Round (Gabungan)';

        if (_currentLbFilter === 'all') {
          labelEl.textContent = `${mapelName} • Semua Angkatan XII`;
        } else {
          labelEl.textContent = `${mapelName} • Kelas ${_currentLbFilter.replace('_', ' ')}`;
        }
      }
    }

    // Ganti Filter Kelas Leaderboard
    function switchLeaderboardFilter(kelas) {
      if (_currentLbMapel === 'minat' && (kelas === 'XII_F1' || kelas === 'XII_F2')) {
        // Otomatis arahkan ke Matematika Wajib jika memilih F1 atau F2 saat di mode Minat
        switchLeaderboardMapel('wajib', false);
      }
      _currentLbFilter = kelas || 'all';
      switchLeaderboardView('table');
      updateLeaderboardFilterUi();
      loadLeaderboardData(_currentLbFilter, _currentLbMapel);
    }

    // Fetch & Render Leaderboard Data dari D1
    async function loadLeaderboardData(kelasFilter, mapelFilter) {
      const targetFilter = kelasFilter || _currentLbFilter || 'all';
      const targetMapel = mapelFilter || _currentLbMapel || 'wajib';
      const podiumContainer = document.getElementById('lb-podium-container');
      const tableTbody = document.getElementById('lb-table-tbody');

      if (tableTbody) {
        tableTbody.innerHTML = `
          <tr>
            <td colspan="8" class="py-8 text-center text-[#787774]">
              <i class="fa-solid fa-spinner fa-spin mr-2"></i>Mengambil data peringkat resmi dari Cloudflare D1...
            </td>
          </tr>`;
      }

      try {
        const resp = await fetch(`/api/gamifikasi?leaderboard=1&mapel=${encodeURIComponent(targetMapel)}&kelas=${encodeURIComponent(targetFilter)}&limit=50&_t=${Date.now()}`);
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        const data = await resp.json();
        if (!data || !data.success) throw new Error('Data tidak valid');

        _cachedLeaderboardData = data;

        // 1. Update Pool Stats
        if (data.stats) {
          const sTotal = document.getElementById('lb-stat-students');
          const sXp = document.getElementById('lb-stat-xp');
          const sStreak = document.getElementById('lb-stat-streak');
          if (sTotal) sTotal.textContent = data.stats.total_students || 0;
          if (sXp) sXp.textContent = (data.stats.total_xp_pool || 0).toLocaleString('id-ID');
          if (sStreak) sStreak.textContent = data.stats.average_streak || '1.0';
        }

        // 2. Tentukan NIS siswa yang sedang aktif login
        let currentNis = '';
        try {
          const sess = JSON.parse(localStorage.getItem('portal_session') || 'null');
          if (sess && sess.data && sess.data.nis) currentNis = String(sess.data.nis);
        } catch(e) {}

        const list = data.leaderboard || [];

        // 3. Render Top 3 Podium
        renderLeaderboardPodium(list.slice(0, 3), currentNis);

        // 4. Render Table (Peringkat 4 dst atau keseluruhan jika < 3)
        renderLeaderboardTable(list, currentNis);

        // 5. Render Catalog
        renderBadgeCatalog(data.catalog, data.levels);

      } catch (err) {
        console.error('Error load leaderboard:', err);
        if (tableTbody) {
          tableTbody.innerHTML = `
            <tr>
              <td colspan="8" class="py-6 text-center text-rose-600 font-medium">
                <i class="fa-solid fa-triangle-exclamation mr-1"></i> Gagal memuat data peringkat: ${escapeHtml(err.message)}
              </td>
            </tr>`;
        }
      }
    }

    // Render Podium Top 3 (Emas, Perak, Perunggu)
    function renderLeaderboardPodium(top3, currentNis) {
      const container = document.getElementById('lb-podium-container');
      if (!container) return;
      if (!top3 || top3.length === 0) {
        container.innerHTML = '<div class="col-span-3 text-center py-6 text-xs text-[#787774]">Belum ada data pengerjaan CBT.</div>';
        return;
      }

      // Susun urutan visual: Juara 2 (Perak - Kiri), Juara 1 (Emas - Tengah), Juara 3 (Perunggu - Kanan)
      const r1 = top3[0] || null;
      const r2 = top3[1] || null;
      const r3 = top3[2] || null;

      const orderedPodium = [
        { rank: 2, item: r2, bg: '#F8FAFC', border: '#E2E8F0', medal: '🥈', medalColor: '#64748B', title: 'Peringkat 2' },
        { rank: 1, item: r1, bg: '#FFFDF5', border: '#FDE68A', medal: '🥇', medalColor: '#D97706', title: 'Peringkat 1 (Puncak)', highlight: true },
        { rank: 3, item: r3, bg: '#FFF7ED', border: '#FED7AA', medal: '🥉', medalColor: '#C2410C', title: 'Peringkat 3' }
      ];

      container.innerHTML = orderedPodium.map(slot => {
        const item = slot.item;
        if (!item) {
          return `
            <div class="p-4 rounded-xl border border-dashed flex flex-col items-center justify-center text-center opacity-40 min-h-[170px]" style="background-color: ${slot.bg}; border-color: ${slot.border};">
              <span class="text-2xl mb-1">${slot.medal}</span>
              <span class="text-xs font-bold text-[#787774]">${slot.title}</span>
              <span class="text-[11px] text-[#A8A29E]">Menunggu siswa</span>
            </div>`;
        }

        const isMe = String(item.nis) === String(currentNis);
        const initials = getStudentInitials(item.nama);
        const badgesList = item.badges || [];
        const xpVal = item.xp_display !== undefined ? item.xp_display : item.total_xp;
        const sempurnaVal = item.sempurna_display !== undefined ? item.sempurna_display : item.total_sempurna;
        const xpLabel = _currentLbMapel === 'minat' ? 'XP Minat' : (_currentLbMapel === 'all' ? 'Total XP' : 'XP Wajib');

        return `
          <div class="p-4 rounded-xl border shadow-xs relative flex flex-col justify-between transition-transform hover:-translate-y-0.5 ${slot.highlight ? 'ring-1 ring-amber-300 md:-translate-y-1' : ''}"
               style="background-color: ${slot.bg}; border-color: ${slot.border};">
            
            <!-- BADGE MEDALI SUDUT -->
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-1.5">
                <span class="text-xl">${slot.medal}</span>
                <span class="text-[11px] font-bold uppercase tracking-wider" style="color: ${slot.medalColor};">
                  ${slot.title}
                </span>
              </div>
              ${isMe ? '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-white shadow-2xs">KAMU</span>' : ''}
            </div>

            <!-- PROFIL SISWA -->
            <div class="flex items-center gap-3 mb-3">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold text-white shadow-xs shrink-0" style="background-color: #2E384D;">
                ${escapeHtml(initials)}
              </div>
              <div class="min-w-0 flex-1">
                <h4 class="text-xs sm:text-sm font-bold text-[#2F3437] truncate" title="${escapeHtml(item.nama)}">
                  ${escapeHtml(item.nama)}
                </h4>
                <div class="flex items-center gap-1.5 text-[11px] text-[#5F5E5B]">
                  <span class="font-mono font-semibold">${escapeHtml(item.kelas)}</span>
                  <span>•</span>
                  <span class="truncate" style="color: #787774;">${escapeHtml(item.gelar)}</span>
                </div>
              </div>
            </div>

            <!-- STATS PRESTASI PODIUM -->
            <div class="pt-2.5 border-t border-black/5 grid grid-cols-3 gap-1 text-center text-xs">
              <div>
                <div class="text-[10px] text-[#787774]">${xpLabel}</div>
                <div class="font-extrabold text-[#2F3437] font-mono">${(xpVal || 0).toLocaleString('id-ID')}</div>
              </div>
              <div>
                <div class="text-[10px] text-[#787774]">Streak 🔥</div>
                <div class="font-bold text-rose-700 font-mono">${item.current_streak || 1} Hari</div>
              </div>
              <div>
                <div class="text-[10px] text-[#787774]">Skor 100</div>
                <div class="font-bold text-amber-700 font-mono">${sempurnaVal || 0}x</div>
              </div>
            </div>

            <!-- PREVIEW LENCANA -->
            ${badgesList.length > 0 ? `
              <div class="mt-2.5 pt-2 border-t border-black/5 flex items-center gap-1 flex-wrap">
                ${badgesList.slice(0, 4).map(b => `
                  <span class="w-5 h-5 rounded-md flex items-center justify-center text-[10px] border shadow-2xs cursor-help"
                        style="background-color: ${b.bg || '#FFFFFF'}; color: ${b.color || '#2F3437'}; border-color: ${b.color ? b.color + '33' : '#E8E6DF'};"
                        title="${escapeHtml(b.name || '')}">
                    <i class="${escapeHtml(b.icon || 'fa-solid fa-award')}"></i>
                  </span>
                `).join('')}
                ${badgesList.length > 4 ? `<span class="text-[10px] font-mono text-[#787774]">+${badgesList.length - 4}</span>` : ''}
              </div>` : ''}
          </div>`;
      }).join('');
    }

    // Render Tabel Leaderboard Top 10
    function renderLeaderboardTable(list, currentNis) {
      const tbody = document.getElementById('lb-table-tbody');
      if (!tbody) return;

      if (!list || list.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" class="py-8 text-center text-[#787774]">Tidak ada data siswa ditemukan untuk filter ini.</td></tr>';
        return;
      }

      // Tampilkan 10 teratas sesuai instruksi
      const top10 = list.slice(0, 10);
      const isUserInTop10 = currentNis ? top10.some(item => String(item.nis) === String(currentNis)) : false;
      const userItem = (!isUserInTop10 && currentNis) ? list.find(item => String(item.nis) === String(currentNis)) : null;

      function renderRow(item) {
        const isMe = String(item.nis) === String(currentNis);
        const initials = getStudentInitials(item.nama);
        const badgesList = item.badges || [];
        const xpVal = item.xp_display !== undefined ? item.xp_display : item.total_xp;
        const sempurnaVal = item.sempurna_display !== undefined ? item.sempurna_display : item.total_sempurna;

        let rankBadge = `<span class="font-mono font-bold text-xs text-[#5F5E5B]">${item.rank}</span>`;
        if (item.rank === 1) rankBadge = `<span class="text-base" title="Juara 1">🥇</span>`;
        else if (item.rank === 2) rankBadge = `<span class="text-base" title="Juara 2">🥈</span>`;
        else if (item.rank === 3) rankBadge = `<span class="text-base" title="Juara 3">🥉</span>`;

        return `
          <tr class="transition-colors hover:bg-[#F7F6F3]/70 ${isMe ? 'bg-amber-50/70 font-semibold' : ''}">
            <td class="py-2.5 px-3 text-center">${rankBadge}</td>
            <td class="py-2.5 px-3">
              <div class="flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold text-white shrink-0 shadow-2xs" style="background-color: #2E384D;">
                  ${escapeHtml(initials)}
                </div>
                <div class="min-w-0">
                  <div class="text-xs font-bold text-[#2F3437] truncate max-w-[200px] flex items-center gap-1.5" title="${escapeHtml(item.nama)}">
                    <span>${escapeHtml(item.nama)}</span>
                    ${isMe ? '<span class="px-1.5 py-0.2 rounded text-[9.5px] font-extrabold bg-amber-500 text-white">KAMU</span>' : ''}
                  </div>
                  <div class="text-[10px] text-[#787774] font-mono sm:hidden">${escapeHtml(item.kelas)}</div>
                </div>
              </div>
            </td>
            <td class="py-2.5 px-3 text-center font-mono text-[11px] text-[#5F5E5B]">${escapeHtml(item.kelas)}</td>
            <td class="py-2.5 px-3">
              <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10.5px] font-medium" style="background-color: #F0EFEA; color: #2F3437; border: 1px solid #E8E6DF;">
                <span class="text-[10px] font-mono font-bold text-amber-700">Lvl ${item.level}</span>
                <span>${escapeHtml(item.gelar)}</span>
              </span>
            </td>
            <td class="py-2.5 px-3 text-center">
              <span class="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-rose-700">
                <i class="fa-solid fa-fire text-[10px] text-rose-500"></i> ${item.current_streak || 1}
              </span>
            </td>
            <td class="py-2.5 px-3 text-center">
              <span class="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-amber-800">
                <i class="fa-solid fa-bullseye text-[10px] text-amber-600"></i> ${sempurnaVal || 0}
              </span>
            </td>
            <td class="py-2.5 px-3 text-right font-mono font-bold text-xs text-[#2F3437]">
              ${(xpVal || 0).toLocaleString('id-ID')}
            </td>
            <td class="py-2.5 px-3 text-center">
              <div class="flex items-center justify-center gap-1 flex-wrap">
                ${badgesList.length > 0 ? badgesList.map(b => `
                  <span class="w-5 h-5 rounded flex items-center justify-center text-[10px] border shadow-2xs cursor-help"
                        style="background-color: ${b.bg || '#FFFFFF'}; color: ${b.color || '#2F3437'}; border-color: ${b.color ? b.color + '33' : '#E8E6DF'};"
                        title="${escapeHtml(b.name || '')}">
                    <i class="${escapeHtml(b.icon || 'fa-solid fa-award')}"></i>
                  </span>
                `).join('') : '<span class="text-[10px] text-[#A8A29E]">-</span>'}
              </div>
            </td>
          </tr>`;
      }

      let html = top10.map(renderRow).join('');

      if (userItem) {
        html += `
          <tr class="bg-[#F7F6F3]/60">
            <td colspan="8" class="py-2 px-3 text-center text-[10.5px] font-semibold text-[#787774] border-y border-dashed border-[#E8E6DF]">
              ••• Peringkat Kamu di Luar 10 Besar •••
            </td>
          </tr>
          ${renderRow(userItem)}
        `;
      }

      tbody.innerHTML = html;
    }

    // Render Katalog Lencana & Tingkatan Gelar Akademik
    function renderBadgeCatalog(catalog, levels) {
      const levelsContainer = document.getElementById('lb-levels-container');
      const badgesContainer = document.getElementById('lb-catalog-badges-container');

      if (levelsContainer && levels && Array.isArray(levels)) {
        levelsContainer.innerHTML = levels.map(lvl => `
          <div class="p-3.5 rounded-xl border border-[#E8E6DF] bg-white space-y-1.5 shadow-2xs">
            <div class="flex items-center justify-between">
              <span class="px-2 py-0.5 rounded text-[10.5px] font-mono font-bold bg-[#2E384D] text-white">
                Level ${lvl.level}
              </span>
              <span class="text-[11px] font-mono text-[#787774]">
                ${lvl.maxXp < 999999 ? `${lvl.minXp} - ${lvl.maxXp} XP` : `≥ ${lvl.minXp} XP`}
              </span>
            </div>
            <h5 class="text-xs font-bold text-[#2F3437]">${escapeHtml(lvl.gelar)}</h5>
            <p class="text-[11px] text-[#787774] leading-relaxed">
              ${lvl.level === 6 ? 'Pencapaian kalkulus tertinggi angkatan XII.' : 'Tingkatan pemahaman dan eksplorasi konsep matematika.'}
            </p>
          </div>
        `).join('');
      }

      if (badgesContainer && catalog) {
        const badgeKeys = Object.keys(catalog);
        badgesContainer.innerHTML = badgeKeys.map(k => {
          const b = catalog[k];
          return `
            <div class="p-3.5 rounded-xl border space-y-2 shadow-2xs"
                 style="background-color: ${b.bg || '#FFFFFF'}; border-color: ${b.color ? b.color + '33' : '#E8E6DF'};">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-2xs shrink-0"
                     style="background-color: #FFFFFF; color: ${b.color || '#2F3437'}; border: 1px solid ${b.color ? b.color + '33' : '#E8E6DF'};">
                  <i class="${escapeHtml(b.icon || 'fa-solid fa-award')}"></i>
                </div>
                <div>
                  <h5 class="text-xs font-bold" style="color: ${b.color || '#2F3437'};">${escapeHtml(b.name)}</h5>
                  <span class="text-[10px] text-[#787774] font-mono">${escapeHtml(b.id)}</span>
                </div>
              </div>
              <p class="text-[11px] text-[#5F5E5B] leading-relaxed">${escapeHtml(b.desc)}</p>
            </div>`;
        }).join('');
      }
    }

    // =========================================================================
    // MODUL KOMPETISI SEHAT ANTAR-ROMBEL (12 F.1 vs 12 F.2 vs 12 F.3 vs 12 F.4)
    // =========================================================================

    async function loadRombelLeaderboardData(mapel) {
      const targetMapel = mapel || _currentLbMapel || 'wajib';
      const podiumContainer = document.getElementById('lb-rombel-podium-container');
      const cardsGrid = document.getElementById('lb-rombel-cards-grid');

      if (podiumContainer) {
        podiumContainer.innerHTML = `
          <div class="col-span-3 text-center py-8 text-[#787774]">
            <i class="fa-solid fa-spinner fa-spin mr-2"></i>Mengalkulasi klasemen kompetisi rombel dari Cloudflare D1...
          </div>`;
      }

      try {
        const resp = await fetch(`/api/gamifikasi?rombel=1&mapel=${encodeURIComponent(targetMapel)}&_t=${Date.now()}`);
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        const data = await resp.json();
        if (!data || !data.success || !Array.isArray(data.leaderboard)) throw new Error('Data rombel tidak valid');

        const list = data.leaderboard;
        renderRombelPodium(list);
        renderRombelCards(list, targetMapel);
      } catch (err) {
        console.error('Error load rombel leaderboard:', err);
        if (podiumContainer) {
          podiumContainer.innerHTML = `
            <div class="col-span-3 text-center py-6 text-rose-600 font-medium">
              <i class="fa-solid fa-triangle-exclamation mr-1"></i> Gagal memuat data kompetisi rombel: ${escapeHtml(err.message)}
            </div>`;
        }
      }
    }

    function renderRombelPodium(list) {
      const container = document.getElementById('lb-rombel-podium-container');
      if (!container) return;
      if (!list || list.length === 0) {
        container.innerHTML = '<div class="col-span-3 text-center py-6 text-xs text-[#787774]">Belum ada data pengerjaan CBT rombel.</div>';
        return;
      }

      const r1 = list[0] || null;
      const r2 = list[1] || null;
      const r3 = list[2] || null;

      const orderedPodium = [
        { rank: 2, item: r2, bg: '#F8FAFC', border: '#E2E8F0', medal: '🥈', medalColor: '#64748B', title: 'Peringkat 2 Rombel' },
        { rank: 1, item: r1, bg: '#FFFDF5', border: '#FDE68A', medal: '🏆', medalColor: '#D97706', title: 'Puncak Klasemen Rombel', highlight: true },
        { rank: 3, item: r3, bg: '#FFF7ED', border: '#FED7AA', medal: '🥉', medalColor: '#C2410C', title: 'Peringkat 3 Rombel' }
      ];

      container.innerHTML = orderedPodium.map(slot => {
        const item = slot.item;
        if (!item) {
          return `
            <div class="p-4 rounded-xl border border-dashed flex flex-col items-center justify-center text-center opacity-40 min-h-[170px]" style="background-color: ${slot.bg}; border-color: ${slot.border};">
              <span class="text-2xl mb-1">${slot.medal}</span>
              <span class="text-xs font-bold text-[#787774]">${slot.title}</span>
            </div>`;
        }

        const avgXp = _currentLbMapel === 'all' ? item.avg_xp_all : item.avg_xp_wajib;
        const totalXp = _currentLbMapel === 'all' ? item.total_xp_all : item.total_xp_wajib;
        const mvpName = item.mvp ? item.mvp.nama : 'Belum ada MVP';

        return `
          <div class="p-4 rounded-xl border shadow-xs relative flex flex-col justify-between transition-transform hover:-translate-y-0.5 ${slot.highlight ? 'ring-2 ring-amber-300 md:-translate-y-1' : ''}"
               style="background-color: ${slot.bg}; border-color: ${slot.border};">
            
            <!-- HEADER MEDALI ROMBEL -->
            <div class="flex items-center justify-between mb-2.5">
              <div class="flex items-center gap-1.5">
                <span class="text-xl">${slot.medal}</span>
                <span class="text-[11px] font-bold uppercase tracking-wider" style="color: ${slot.medalColor};">
                  ${slot.title}
                </span>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#2E384D] text-white">
                ${item.total_siswa} Siswa
              </span>
            </div>

            <!-- NAMA KELAS & RERATA XP -->
            <div class="mb-3">
              <div class="flex items-baseline justify-between">
                <h4 class="text-lg font-black text-[#2F3437] font-mono tracking-tight">${escapeHtml(item.kelas)}</h4>
                <div class="text-right">
                  <span class="text-xs font-extrabold text-[#2F3437] font-mono">${(avgXp || 0).toLocaleString('id-ID')}</span>
                  <span class="text-[10px] text-[#787774] block">Rerata XP/Siswa</span>
                </div>
              </div>
              <div class="w-full bg-black/5 rounded-full h-1.5 mt-1.5 overflow-hidden">
                <div class="bg-gradient-to-r from-purple-600 to-indigo-600 h-1.5 rounded-full" style="width: ${Math.min(100, Math.round((avgXp / 3000) * 100))}%;"></div>
              </div>
            </div>

            <!-- MVP KELAS & STATS -->
            <div class="pt-2 border-t border-black/5 text-xs space-y-1.5">
              <div class="flex items-center justify-between text-[11px]">
                <span class="text-[#787774] flex items-center gap-1"><i class="fa-solid fa-crown text-amber-500 text-[10px]"></i> MVP Kelas:</span>
                <span class="font-bold text-[#2F3437] truncate max-w-[150px]" title="${escapeHtml(mvpName)}">${escapeHtml(mvpName)}</span>
              </div>
              <div class="flex items-center justify-between text-[10.5px] text-[#5F5E5B]">
                <span>Total XP Rombel: <strong class="font-mono text-[#2F3437]">${(totalXp || 0).toLocaleString('id-ID')}</strong></span>
                <span>🔥 ${(item.avg_streak || 1.0)} Hari Streak</span>
              </div>
            </div>

          </div>`;
      }).join('');
    }

    function renderRombelCards(list, mapel) {
      const container = document.getElementById('lb-rombel-cards-grid');
      if (!container) return;
      if (!list || list.length === 0) {
        container.innerHTML = '<div class="col-span-4 text-center py-6 text-xs text-[#787774]">Belum ada data.</div>';
        return;
      }

      container.innerHTML = list.map(item => {
        const avgXp = mapel === 'all' ? item.avg_xp_all : item.avg_xp_wajib;
        const totalXp = mapel === 'all' ? item.total_xp_all : item.total_xp_wajib;
        const mvpName = item.mvp ? item.mvp.nama : 'Belum ada MVP';
        const mvpXp = item.mvp ? (mapel === 'all' ? item.mvp.total_xp : item.mvp.xp_wajib) : 0;
        const rankMedal = item.rank === 1 ? '🥇' : (item.rank === 2 ? '🥈' : (item.rank === 3 ? '🥉' : '🛡️'));
        const rankColor = item.rank === 1 ? 'border-amber-300 bg-[#FFFDF5]' : 'border-[#E8E6DF] bg-white';

        return `
          <div class="p-4 rounded-xl border shadow-2xs space-y-3 flex flex-col justify-between ${rankColor}">
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-sm font-bold flex items-center gap-1.5 text-[#2F3437]">
                  <span class="text-base">${rankMedal}</span> ${escapeHtml(item.kelas)}
                </span>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#F0EFEA] text-[#5F5E5B] border border-[#E8E6DF]">
                  Peringkat #${item.rank}
                </span>
              </div>

              <!-- STATS METRIC -->
              <div class="p-2.5 rounded-lg bg-[#F7F6F3] border border-[#E8E6DF] space-y-1">
                <div class="flex items-center justify-between text-xs">
                  <span class="text-[#787774]">Rata-rata XP:</span>
                  <span class="font-extrabold text-[#2F3437] font-mono text-sm">${(avgXp || 0).toLocaleString('id-ID')}</span>
                </div>
                <div class="flex items-center justify-between text-[11px] text-[#5F5E5B]">
                  <span>Total XP Kelas:</span>
                  <span class="font-mono font-bold text-[#2F3437]">${(totalXp || 0).toLocaleString('id-ID')}</span>
                </div>
              </div>

              <!-- MVP SISWA -->
              <div class="text-xs space-y-0.5 pt-1">
                <span class="text-[10px] text-[#787774] flex items-center gap-1">
                  <i class="fa-solid fa-star text-amber-500 text-[9px]"></i> MVP Penyumbang XP Tertinggi:
                </span>
                <div class="flex items-center justify-between">
                  <span class="font-bold text-[#2F3437] text-[11.5px] truncate max-w-[140px]" title="${escapeHtml(mvpName)}">
                    ${escapeHtml(mvpName)}
                  </span>
                  <span class="text-[11px] font-mono font-semibold text-purple-700">
                    ${(mvpXp || 0).toLocaleString('id-ID')} XP
                  </span>
                </div>
              </div>
            </div>

            <!-- AKTIVITAS SPRINT 7 HARI TERAKHIR -->
            <div class="pt-2.5 border-t border-[#F0EFEA] text-[11px] text-[#5F5E5B] space-y-1">
              <div class="flex items-center justify-between">
                <span class="text-[#787774]"><i class="fa-solid fa-clock-rotate-left mr-1"></i>7 Hari Terakhir:</span>
                <span class="font-mono font-bold text-[#2F3437]">${item.weekly_ujian || 0} Ujian Selesai</span>
              </div>
              <div class="flex items-center justify-between text-[10px] text-[#787774]">
                <span>Tuntas KKM: <strong class="text-emerald-700 font-mono">${item.weekly_tuntas || 0}</strong></span>
                <span>Nilai 100: <strong class="text-amber-700 font-mono">${item.weekly_sempurna || 0}</strong></span>
                <span>Rerata Skor: <strong class="text-[#2F3437] font-mono">${item.weekly_avg_skor || 0}</strong></span>
              </div>
            </div>
          </div>`;
      }).join('');
    }

    // Auto-Init Gamifikasi saat aplikasi dimuat
    function initGamificationOnLoad() {
      try {
        let sess = null;
        try { sess = JSON.parse(localStorage.getItem('portal_session') || 'null'); } catch(e) {}
        let nis = null;
        if (sess && sess.data && sess.data.nis) {
          nis = sess.data.nis;
        } else if (sess && sess.type === 'siswa') {
          nis = '24400083';
        }

        // Cek cache lokal terlebih dahulu untuk instant rendering tanpa kedip
        if (nis) {
          const cached = localStorage.getItem('mathcihuy_gamifikasi_' + nis);
          if (cached) {
            try {
              const parsed = JSON.parse(cached);
              renderGamificationHeroCard(parsed);
            } catch(e) {}
          }
        }

        // Fetch fresh profil gamifikasi resmi dari D1
        fetchGamificationProfile(nis);

      } catch (e) {
        console.warn('Init gamifikasi:', e);
      }
    }

    // =========================================================================
    // MODUL 1: WEEKLY RAID BOSS BATTLE — TITAN STATIGO (WAJIB P15, P16 & MINAT P17)
    // =========================================================================
    let _cachedRaidBossData = null;
    let _filteredRaidBossLeaderboard = [];

    function renderWeeklyEventWidget(data) {
      if (!data) return;
      const card = document.getElementById('weekly-event-card');
      if (!card) return;

      const isRaidBoss = Boolean(data.boss_name || data.total_damage_dealt !== undefined || data.boss_id);

      if (isRaidBoss) {
        _cachedRaidBossData = data;
        const bossName = data.boss_name || 'TITAN STATIGO: KOLO-SOS FREKUENSI & DERIVATIF';
        const phase = data.phase || 'FASE 2 • WEAKENED';
        const maxHp = Number(data.max_hp) || 150000;
        const curHp = Math.max(0, Number(data.current_hp) || 0);
        const totalDmg = Number(data.total_damage_dealt) || 0;
        const pctHp = Math.max(0, Math.min(100, Number(data.pct_hp_remaining) || Math.round((curHp / maxHp) * 100)));
        const totalAttackers = Number(data.total_attackers) || 0;
        const isDefeated = Boolean(data.is_defeated || curHp <= 0);

        // Phase Badge
        const phaseBadge = document.getElementById('boss-phase-badge');
        if (phaseBadge) {
          phaseBadge.textContent = phase;
          if (isDefeated) {
            phaseBadge.className = 'px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300';
          } else if (pctHp <= 25) {
            phaseBadge.className = 'px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-rose-100 text-rose-900 border border-rose-300 animate-pulse';
          } else {
            phaseBadge.className = 'px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-rose-50 text-rose-800 border border-rose-200';
          }
        }

        // Timer text
        const timerText = document.getElementById('boss-timer-text');
        if (timerText) {
          if (data.days_remaining > 0) {
            timerText.innerHTML = `<i class="fa-solid fa-hourglass-half text-[11px]"></i> <span>Tersisa ${data.days_remaining} hari (Reset Minggu 23:59 WIB)</span>`;
          } else {
            timerText.innerHTML = `<i class="fa-solid fa-hourglass-end text-[11px] animate-bounce"></i> <span>Tersisa ${data.hours_remaining || 0} jam (Reset Malam Ini!)</span>`;
          }
        }

        // HP Text & Bar
        const hpText = document.getElementById('boss-hp-text');
        if (hpText) {
          hpText.textContent = `${curHp.toLocaleString('id-ID')} / ${maxHp.toLocaleString('id-ID')} HP (${pctHp}% Tersisa)`;
        }
        const hpBar = document.getElementById('boss-hp-bar');
        if (hpBar) {
          hpBar.style.width = `${pctHp}%`;
          if (pctHp <= 25) {
            hpBar.className = 'h-full rounded-full transition-all duration-700 bg-gradient-to-r from-red-600 to-rose-500 animate-pulse';
          } else if (pctHp <= 60) {
            hpBar.className = 'h-full rounded-full transition-all duration-700 bg-gradient-to-r from-rose-600 via-amber-500 to-yellow-400';
          } else {
            hpBar.className = 'h-full rounded-full transition-all duration-700 bg-gradient-to-r from-emerald-500 to-cyan-500';
          }
        }

        // Total Damage & Attackers
        const totalDmgText = document.getElementById('boss-total-damage-text');
        if (totalDmgText) totalDmgText.textContent = `${totalDmg.toLocaleString('id-ID')} DMG`;
        const attackersText = document.getElementById('boss-attackers-count');
        if (attackersText) attackersText.textContent = totalAttackers;

        // User Attack Stats
        const uStats = data.user_stats;
        const p15Status = document.getElementById('boss-p15-status');
        const p16Status = document.getElementById('boss-p16-status');
        const p17Status = document.getElementById('boss-p17-status');
        const userDmgEl = document.getElementById('boss-user-dmg');
        const userRankBadge = document.getElementById('boss-user-rank-badge');
        const userRewardEl = document.getElementById('boss-user-reward');

        if (uStats) {
          if (p15Status) {
            if (uStats.p15_wajib_skor > 0) {
              const dmg15 = uStats.p15_wajib_skor * 10 + (uStats.p15_wajib_skor === 100 ? 500 : 0);
              p15Status.innerHTML = `<span class="text-emerald-700 font-bold">${uStats.p15_wajib_skor}</span> <span class="text-[10px] text-slate-500">(${dmg15} DMG)</span>`;
            } else {
              p15Status.textContent = 'Belum Serang';
            }
          }
          if (p16Status) {
            if (uStats.p16_wajib_skor > 0) {
              const dmg16 = uStats.p16_wajib_skor * 10 + (uStats.p16_wajib_skor === 100 ? 500 : 0);
              p16Status.innerHTML = `<span class="text-emerald-700 font-bold">${uStats.p16_wajib_skor}</span> <span class="text-[10px] text-slate-500">(${dmg16} DMG)</span>`;
            } else {
              p16Status.textContent = 'Belum Serang';
            }
          }
          if (p17Status) {
            if (uStats.p17_minat_skor > 0) {
              const dmg17 = uStats.p17_minat_skor * 15 + (uStats.p17_minat_skor === 100 ? 500 : 0);
              p17Status.innerHTML = `<span class="text-amber-800 font-bold">${uStats.p17_minat_skor}</span> <span class="text-[10px] text-slate-500">(${dmg17} DMG)</span>`;
            } else {
              p17Status.textContent = 'Belum Serang';
            }
          }

          if (userDmgEl) userDmgEl.textContent = `${(uStats.total_damage || 0).toLocaleString('id-ID')} DMG`;
          if (userRankBadge) {
            if (uStats.total_damage > 0) {
              userRankBadge.textContent = `Peringkat #${uStats.rank || '-'}`;
              userRankBadge.className = 'px-2 py-0.5 rounded-md text-[10.5px] font-mono font-bold bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]';
            } else {
              userRankBadge.textContent = 'Belum Peringkat';
              userRankBadge.className = 'px-2 py-0.5 rounded-md text-[10.5px] font-mono font-semibold bg-[#F0EFEA] text-[#787774] border border-[#E8E6DF]';
            }
          }
          if (userRewardEl) {
            const baseReward = uStats.reward_xp || 0;
            const extraReward = isDefeated ? 250 : 0;
            userRewardEl.textContent = `(Potensi +${baseReward + extraReward} EXP)`;
          }
        }

        // Victory Banner
        const vicBanner = document.getElementById('boss-victory-banner');
        if (vicBanner) {
          if (isDefeated) {
            vicBanner.classList.remove('hidden');
          } else {
            vicBanner.classList.add('hidden');
          }
        }
      }
    }

    function serangRaidBoss(mapel, kode) {
      closeRaidBossLeaderboardModal();
      if (typeof bukaPaketCbtDariRapor === 'function') {
        bukaPaketCbtDariRapor(mapel, kode);
      } else if (typeof openTkaForCurrentMeeting === 'function') {
        openTkaForCurrentMeeting(kode, 0, mapel);
      } else {
        if (typeof switchSubject === 'function') switchSubject('tka');
        if (typeof tkaSubj !== 'undefined') tkaSubj = mapel;
        if (typeof tkaPkgId !== 'undefined') tkaPkgId = kode;
        if (typeof renderAppView === 'function') renderAppView();
      }
    }

    async function openRaidBossLeaderboardModal() {
      const modal = document.getElementById('raid-boss-modal');
      if (!modal) return;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      const scrollBody = modal.querySelector('.kolab-scroll');
      if (scrollBody) scrollBody.scrollTop = 0;

      // Ambil NIS aktif dari portal_session
      let nisParam = '';
      try {
        const sess = JSON.parse(localStorage.getItem('portal_session') || 'null');
        if (sess && sess.data && sess.data.nis) nisParam = String(sess.data.nis).trim();
      } catch(e) {}
      if (!nisParam && typeof currentSiswa !== 'undefined' && currentSiswa && currentSiswa.nis) {
        nisParam = String(currentSiswa.nis).trim();
      }

      // Jika data belum lengkap di cache, fetch langsung dari API
      if (!_cachedRaidBossData || !_cachedRaidBossData.leaderboard || _cachedRaidBossData.leaderboard.length === 0) {
        try {
          const res = await fetch(`/api/gamifikasi?raid_boss=1&nis=${encodeURIComponent(nisParam)}`);
          if (res.ok) {
            const json = await res.json();
            if (json.raid_boss) {
              _cachedRaidBossData = json.raid_boss;
            }
          }
        } catch (e) {
          console.warn('Gagal memuat remote raid boss data:', e);
        }
      }

      if (_cachedRaidBossData) {
        renderRaidBossLeaderboard(_cachedRaidBossData);
      }
    }

    function closeRaidBossLeaderboardModal() {
      const modal = document.getElementById('raid-boss-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }

    function renderRaidBossLeaderboard(data) {
      if (!data) return;
      _cachedRaidBossData = data;
      _filteredRaidBossLeaderboard = Array.isArray(data.leaderboard) ? [...data.leaderboard] : [];

      const curHp = Math.max(0, Number(data.current_hp) || 0);
      const maxHp = Number(data.max_hp) || 150000;
      const pctHp = Math.max(0, Math.min(100, Number(data.pct_hp_remaining) || Math.round((curHp / maxHp) * 100)));
      const isDefeated = Boolean(data.is_defeated || curHp <= 0);

      // Header & Status Info
      const phaseBadge = document.getElementById('rb-modal-phase-badge');
      if (phaseBadge) phaseBadge.textContent = data.phase || 'FASE 2 • WEAKENED';
      const bossName = document.getElementById('rb-modal-boss-name');
      if (bossName) bossName.textContent = data.boss_name || 'TITAN STATIGO: KOLO-SOS FREKUENSI & DERIVATIF';
      const hpText = document.getElementById('rb-modal-hp-text');
      if (hpText) hpText.textContent = `${curHp.toLocaleString('id-ID')} / ${maxHp.toLocaleString('id-ID')} HP (${pctHp}%)`;
      const hpBar = document.getElementById('rb-modal-hp-bar');
      if (hpBar) hpBar.style.width = `${pctHp}%`;

      const totalDmgEl = document.getElementById('rb-modal-total-dmg');
      if (totalDmgEl) totalDmgEl.textContent = `${(data.total_damage_dealt || 0).toLocaleString('id-ID')} DMG`;
      const attackersEl = document.getElementById('rb-modal-total-attackers');
      if (attackersEl) attackersEl.textContent = `${(data.total_attackers || 0)} Siswa`;
      
      let critHitsTotal = 0;
      if (Array.isArray(data.leaderboard)) {
        critHitsTotal = data.leaderboard.reduce((acc, cur) => acc + (Number(cur.critical_hits) || 0), 0);
      }
      const critEl = document.getElementById('rb-modal-critical-hits');
      if (critEl) critEl.textContent = `${critHitsTotal} Hits`;

      const statusText = document.getElementById('rb-modal-status-text');
      if (statusText) {
        if (isDefeated) {
          statusText.textContent = 'Titan Tumbang!';
          statusText.className = 'text-xs sm:text-sm font-bold text-amber-700';
        } else if (pctHp <= 25) {
          statusText.textContent = 'Critical Rage (25%)';
          statusText.className = 'text-xs sm:text-sm font-bold text-rose-700';
        } else {
          statusText.textContent = 'Weakened (Bertahan)';
          statusText.className = 'text-xs sm:text-sm font-bold text-amber-800';
        }
      }

      // User Personal Standing
      const u = data.user_stats;
      const uCard = document.getElementById('rb-user-standing-card');
      if (u && uCard) {
        const uIdent = document.getElementById('rb-user-identity');
        if (uIdent) uIdent.textContent = `${u.nama || 'Kamu'} • ${u.kelas || 'XII'} (${u.nis || '-'})`;
        const uRank = document.getElementById('rb-user-rank-tag');
        if (uRank) {
          uRank.textContent = u.total_damage > 0 ? `Peringkat #${u.rank || '-'}` : 'Belum Ada Peringkat';
        }
        const uTitle = document.getElementById('rb-user-title-tag');
        if (uTitle) uTitle.textContent = u.title || (u.total_damage > 0 ? 'Brave Warrior' : 'Belum Menyerang');

        const p15Det = document.getElementById('rb-user-p15-detail');
        if (p15Det) {
          const dmg15 = u.p15_wajib_skor > 0 ? (u.p15_wajib_skor * 10 + (u.p15_wajib_skor === 100 ? 500 : 0)) : 0;
          p15Det.textContent = u.p15_wajib_skor > 0 ? `Skor ${u.p15_wajib_skor} (${dmg15} DMG)` : 'Belum Serang';
        }

        const p16Det = document.getElementById('rb-user-p16-detail');
        if (p16Det) {
          const dmg16 = u.p16_wajib_skor > 0 ? (u.p16_wajib_skor * 10 + (u.p16_wajib_skor === 100 ? 500 : 0)) : 0;
          p16Det.textContent = u.p16_wajib_skor > 0 ? `Skor ${u.p16_wajib_skor} (${dmg16} DMG)` : 'Belum Serang';
        }

        const p17Det = document.getElementById('rb-user-p17-detail');
        if (p17Det) {
          const dmg17 = u.p17_minat_skor > 0 ? (u.p17_minat_skor * 15 + (u.p17_minat_skor === 100 ? 500 : 0)) : 0;
          p17Det.textContent = u.p17_minat_skor > 0 ? `Skor ${u.p17_minat_skor} (${dmg17} DMG)` : 'Belum Serang';
        }

        const uTotalDmg = document.getElementById('rb-user-total-dmg-detail');
        if (uTotalDmg) uTotalDmg.textContent = `${(u.total_damage || 0).toLocaleString('id-ID')} DMG`;
      }

      // Podium Top 3
      renderRaidBossPodium(data.leaderboard || []);

      // Tabel Seluruh Penyerang
      renderRaidBossTable(_filteredRaidBossLeaderboard);
    }

    function renderRaidBossPodium(list) {
      const container = document.getElementById('rb-podium-container');
      if (!container) return;
      if (!list || list.length === 0) {
        container.innerHTML = '<div class="col-span-3 text-center py-4 text-xs text-[#787774]">Belum ada penyerang terdaftar. Jadilah yang pertama menumbangkan Titan!</div>';
        return;
      }

      const top3 = list.slice(0, 3);
      const podiumConfig = [
        { rank: 1, label: 'Juara 1 • Titan Slayer', reward: '+500 EXP', medal: '🥇', bg: '#FFFBEB', border: '#FDE68A', text: '#92400E' },
        { rank: 2, label: 'Juara 2 • Grand Conqueror', reward: '+400 EXP', medal: '🥈', bg: '#F8FAFC', border: '#E2E8F0', text: '#334155' },
        { rank: 3, label: 'Juara 3 • Grand Conqueror', reward: '+400 EXP', medal: '🥉', bg: '#FFF7ED', border: '#FFEDD5', text: '#9A3412' }
      ];

      container.innerHTML = top3.map((p, idx) => {
        const cfg = podiumConfig[idx] || podiumConfig[1];
        return `
          <div class="p-3.5 rounded-xl border flex flex-col justify-between gap-2 shadow-2xs transition hover:shadow-xs"
               style="background-color: ${cfg.bg}; border-color: ${cfg.border};">
            <div class="flex items-start justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="text-xl">${cfg.medal}</span>
                <div>
                  <h6 class="text-xs font-bold text-[#2F3437] line-clamp-1" title="${escapeHtml(p.nama)}">${escapeHtml(p.nama)}</h6>
                  <span class="text-[10px] text-[#787774] font-mono">${escapeHtml(p.kelas || 'XII')} • NIS ${escapeHtml(p.nis)}</span>
                </div>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold" style="background-color: #FFFFFF; color: ${cfg.text}; border: 1px solid ${cfg.border};">
                ${cfg.reward}
              </span>
            </div>

            <div class="pt-2 border-t flex items-center justify-between text-xs" style="border-color: ${cfg.border};">
              <span class="text-[10.5px] text-[#787774]">${cfg.label}</span>
              <strong class="font-mono font-black text-rose-700">${Number(p.total_damage || 0).toLocaleString('id-ID')} DMG</strong>
            </div>
          </div>
        `;
      }).join('');
    }

    function renderRaidBossTable(list) {
      const tbody = document.getElementById('rb-leaderboard-tbody');
      const countEl = document.getElementById('rb-table-count');
      if (!tbody) return;

      if (!list || list.length === 0) {
        if (countEl) countEl.textContent = 0;
        tbody.innerHTML = '<tr><td colspan="8" class="text-center py-6 text-xs text-[#787774]">Tidak ada data penyerang yang cocok.</td></tr>';
        return;
      }

      let currentNis = '';
      try {
        const sess = JSON.parse(localStorage.getItem('portal_session') || 'null');
        if (sess && sess.data && sess.data.nis) currentNis = String(sess.data.nis).trim();
      } catch(e) {}
      if (!currentNis && typeof currentSiswa !== 'undefined' && currentSiswa && currentSiswa.nis) {
        currentNis = String(currentSiswa.nis).trim();
      }
      const isSearching = !!(document.getElementById('rb-search-input')?.value || '').trim();

      // Batasi 10 teratas sesuai instruksi
      const displayList = isSearching ? list.slice(0, 10) : list.slice(0, 10);
      if (countEl) countEl.textContent = displayList.length;

      const isUserInTop10 = currentNis ? displayList.some(item => String(item.nis).trim() === currentNis) : false;
      const userItem = (!isSearching && !isUserInTop10 && currentNis) ? list.find(item => String(item.nis).trim() === currentNis) : null;

      function renderRbRow(item) {
        const isSelf = currentNis && String(item.nis).trim() === currentNis;
        const rowBg = isSelf ? 'background-color: #FEF9C3;' : '';
        const rankBadge = item.rank === 1 ? '🥇 1' : (item.rank === 2 ? '🥈 2' : (item.rank === 3 ? '🥉 3' : `#${item.rank}`));
        
        const p15Val = item.p15_wajib_skor > 0 
          ? `<span class="font-mono font-bold text-emerald-700">${item.p15_wajib_skor}</span>` 
          : `<span class="text-[#A8A29E] font-mono">-</span>`;
        const p16Val = item.p16_wajib_skor > 0 
          ? `<span class="font-mono font-bold text-emerald-700">${item.p16_wajib_skor}</span>` 
          : `<span class="text-[#A8A29E] font-mono">-</span>`;
        const p17Val = item.p17_minat_skor > 0 
          ? `<span class="font-mono font-bold text-amber-800">${item.p17_minat_skor}</span>` 
          : `<span class="text-[#A8A29E] font-mono">-</span>`;

        return `
          <tr class="hover:bg-[#F5F4F0] transition-colors" style="${rowBg}">
            <td class="py-2 px-3 text-center font-mono font-bold text-[11px] text-[#5F5E5B]">${rankBadge}</td>
            <td class="py-2 px-3">
              <div class="font-semibold text-xs text-[#2F3437] line-clamp-1 flex items-center gap-1.5">
                <span>${escapeHtml(item.nama)}</span>
                ${isSelf ? '<span class="px-1 py-0.2 rounded text-[9px] font-bold bg-amber-200 text-amber-900">KAMU</span>' : ''}
              </div>
            </td>
            <td class="py-2 px-2 text-center text-[11px] font-mono text-[#787774]">${escapeHtml(item.kelas || 'XII')}</td>
            <td class="py-2 px-2 text-center text-xs">${p15Val}</td>
            <td class="py-2 px-2 text-center text-xs">${p16Val}</td>
            <td class="py-2 px-2 text-center text-xs">${p17Val}</td>
            <td class="py-2 px-3 text-right font-mono font-bold text-rose-700 text-xs">
              ${Number(item.total_damage || 0).toLocaleString('id-ID')}
            </td>
            <td class="py-2 px-3 text-right font-mono text-[11px] text-[#5F5E5B]">
              +${item.reward_xp || 200} EXP
            </td>
          </tr>
        `;
      }

      let html = displayList.map(renderRbRow).join('');

      if (userItem) {
        html += `
          <tr class="bg-[#F7F6F3]/60">
            <td colspan="8" class="py-2 px-3 text-center text-[10.5px] font-semibold text-[#787774] border-y border-dashed border-[#E8E6DF]">
              ••• Posisi Kontribusi Anda •••
            </td>
          </tr>
          ${renderRbRow(userItem)}
        `;
      }

      tbody.innerHTML = html;
    }

    function filterRaidBossLeaderboard() {
      const q = (document.getElementById('rb-search-input')?.value || '').trim().toLowerCase();
      if (!_cachedRaidBossData || !Array.isArray(_cachedRaidBossData.leaderboard)) return;

      if (!q) {
        _filteredRaidBossLeaderboard = [..._cachedRaidBossData.leaderboard];
      } else {
        _filteredRaidBossLeaderboard = _cachedRaidBossData.leaderboard.filter(item => {
          const nama = (item.nama || '').toLowerCase();
          const kelas = (item.kelas || '').toLowerCase();
          const nis = String(item.nis || '').toLowerCase();
          return nama.includes(q) || kelas.includes(q) || nis.includes(q);
        });
      }
      renderRaidBossTable(_filteredRaidBossLeaderboard);
    }

    // =========================================================================
    // MODUL 2: MASTERY SKILL TREE (PETA RASI BINTANG PENGUASAAN MATERI)
    // =========================================================================
    let _currentSkillTreeTab = 'wajib';

    const SKILL_TREE_DATA = {
      wajib: [
        {
          clusterId: 'wajib_bab1',
          clusterTitle: 'BAB 1 • Kaidah Pencacahan & Peluang',
          clusterSub: 'Fondasi Kombinatorika & Probabilitas (8 Pertemuan)',
          nodes: [
            { id: 'P01', title: 'Aturan Penjumlahan & Perkalian (Filling Slots)', tag: 'Pencacahan' },
            { id: 'P02', title: 'Notasi Faktorial & Permutasi Unsur Berbeda', tag: 'Permutasi' },
            { id: 'P03', title: 'Permutasi Unsur Sama & Permutasi Siklis', tag: 'Permutasi' },
            { id: 'P04', title: 'Kombinasi & Pemilihan Delegasi', tag: 'Kombinasi' },
            { id: 'P05', title: 'Peluang Kejadian Tunggal & Frekuensi Harapan', tag: 'Peluang' },
            { id: 'P06', title: 'Asesmen Sumatif 1: Pencacahan & Peluang', tag: 'Evaluasi' },
            { id: 'P07', title: 'Peluang Kejadian Saling Lepas & Tidak Saling Lepas', tag: 'Peluang' },
            { id: 'P08', title: 'Peluang Saling Bebas & Peluang Bersyarat', tag: 'Peluang' }
          ]
        },
        {
          clusterId: 'wajib_bab2',
          clusterTitle: 'BAB 2 • Geometri Dimensi Tiga',
          clusterSub: 'Jarak Ruang & Sudut Dihedral (6 Pertemuan)',
          nodes: [
            { id: 'P09', title: 'Kedudukan Titik, Garis, dan Bidang dalam Ruang 3D', tag: 'Geometri 3D' },
            { id: 'P10', title: 'Jarak Titik ke Titik (Diagonal Sisi & Ruang)', tag: 'Jarak 3D' },
            { id: 'P11', title: 'Jarak Titik ke Garis (Proyeksi Tegak Lurus)', tag: 'Jarak 3D' },
            { id: 'P12', title: 'Jarak Titik ke Bidang (Teorema Diagonal Ruang)', tag: 'Jarak 3D' },
            { id: 'P13', title: 'Sudut Garis-Bidang & Dua Bidang (Dihedral Angle)', tag: 'Sudut 3D' },
            { id: 'P14', title: 'Asesmen Sumatif Terpadu Dimensi Tiga & ASTS CBT', tag: 'Evaluasi' }
          ]
        },
        {
          clusterId: 'wajib_bab3',
          clusterTitle: 'BAB 3 • Statistika & Analisis Data Bivariat',
          clusterSub: 'Pemusatan, Penyebaran & Regresi Linier (7 Pertemuan)',
          nodes: [
            { id: 'P15', title: 'Penyajian Data Berkelompok (Histogram & Ogive)', tag: 'Statistika' },
            { id: 'P16', title: 'Rata-rata Hitung (Mean) Data Berkelompok', tag: 'Pemusatan' },
            { id: 'P17', title: 'Median dan Modus Data Berkelompok', tag: 'Pemusatan' },
            { id: 'P18', title: 'Ukuran Letak Data (Kuartil Q1-Q3 & Outlier)', tag: 'Letak Data' },
            { id: 'P19', title: 'Ukuran Penyebaran (Varians, Deviasi Baku, Z-Score)', tag: 'Penyebaran' },
            { id: 'P20', title: 'Analisis Data Bivariat (Scatter Plot & Regresi)', tag: 'Bivariat' },
            { id: 'P21', title: 'Asesmen Sumatif Terpadu Statistika & Simulasi ASAS', tag: 'Evaluasi' }
          ]
        }
      ],
      minat: [
        {
          clusterId: 'minat_bab1',
          clusterTitle: 'BAB 1 • Geometri Analitik Lingkaran',
          clusterSub: 'Persamaan & Garis Singgung Lingkaran (9 Pertemuan)',
          nodes: [
            { id: 'P01', title: 'Persamaan Lingkaran Pusat O(0,0) & Jari-jari r', tag: 'Lingkaran' },
            { id: 'P02', title: 'Persamaan Lingkaran Pusat P(a,b) & Jari-jari r', tag: 'Lingkaran' },
            { id: 'P03', title: 'Bentuk Umum Persamaan Lingkaran Kuadrat Sempurna', tag: 'Lingkaran' },
            { id: 'P04', title: 'Kedudukan Titik Terhadap Lingkaran (Uji Kuasa K)', tag: 'Kedudukan' },
            { id: 'P05', title: 'Kedudukan Garis Terhadap Lingkaran (Diskriminan D)', tag: 'Kedudukan' },
            { id: 'P06', title: 'PGSL Rumus Bagi Adil (Titik Singgung Pada Kurva)', tag: 'PGSL' },
            { id: 'P07', title: 'PGSL dengan Gradien m Tertentu', tag: 'PGSL' },
            { id: 'P08', title: 'PGSL Melalui Titik di Luar Lingkaran (Garis Polar)', tag: 'PGSL' },
            { id: 'P09', title: 'Asesmen Sumatif Geometri Analitik Lingkaran', tag: 'Evaluasi' }
          ]
        },
        {
          clusterId: 'minat_bab2',
          clusterTitle: 'BAB 2 • Limit Aljabar & Trigonometri',
          clusterSub: 'Teorema Dasar & Limit Ketakhinggaan (7 Pertemuan)',
          nodes: [
            { id: 'P10', title: 'Teorema Dasar Limit Fungsi Trigonometri', tag: 'Limit' },
            { id: 'P11', title: 'Bentuk Tak Tentu 0/0 Limit Fungsi Trigonometri', tag: 'Limit' },
            { id: 'P12', title: 'Identitas Cosinus Sudut Ganda 1-cos(2x)', tag: 'Limit' },
            { id: 'P13', title: 'Limit Menuju Nilai Tertentu x→c', tag: 'Limit' },
            { id: 'P14', title: 'Limit di Ketakhinggaan Fungsi Aljabar (∞/∞)', tag: 'Tak Hingga' },
            { id: 'P15', title: 'Limit di Ketakhinggaan Bentuk Akar (∞ - ∞)', tag: 'Tak Hingga' },
            { id: 'P16', title: 'Asesmen Sumatif Bab 2: Limit Aljabar & Trigonometri', tag: 'Evaluasi' }
          ]
        },
        {
          clusterId: 'minat_bab3',
          clusterTitle: 'BAB 3 • Turunan Fungsi Trigonometri',
          clusterSub: 'Diferensiasi, Rantai & Garis Singgung (8 Pertemuan)',
          nodes: [
            { id: 'P17', title: 'Rumus Dasar Turunan Fungsi Trigonometri', tag: 'Turunan' },
            { id: 'P18', title: 'Aturan Rantai Komposisi Turunan Trigonometri', tag: 'Aturan Rantai' },
            { id: 'P19', title: 'Turunan Trigonometri Berpangkat u(x)^n', tag: 'Turunan' },
            { id: 'P20', title: 'Turunan Perkalian u·v dan Pembagian u/v', tag: 'Turunan' },
            { id: 'P21', title: 'Persamaan Garis Singgung & Normal Kurva', tag: 'Aplikasi' },
            { id: 'P22', title: 'Selang Kemonotonan (Fungsi Naik & Turun)', tag: 'Kemonotonan' },
            { id: 'P23', title: 'Titik Stasioner, Titik Belok & Kecekungan Kurva', tag: 'Stasioner' },
            { id: 'P24', title: 'Optimasi Kontekstual & Asesmen Sumatif Bab 3', tag: 'Evaluasi' }
          ]
        },
        {
          clusterId: 'minat_bab4',
          clusterTitle: 'BAB 4 • Integral dan Penerapannya',
          clusterSub: 'Kalkulus Integral & Aplikasi Luas-Volume (6 Pertemuan)',
          nodes: [
            { id: 'P25', title: 'Konsep Dasar Integral Tak Tentu Fungsi Aljabar', tag: 'Integral' },
            { id: 'P26', title: 'Teknik Pengintegralan: Substitusi Aljabar', tag: 'Substitusi' },
            { id: 'P27', title: 'Teknik Pengintegralan: Integral Parsial (Tanzalin)', tag: 'Parsial' },
            { id: 'P28', title: 'Integral Tentu & Teorema Dasar Kalkulus', tag: 'Integral Tentu' },
            { id: 'P29', title: 'Aplikasi Integral: Perhitungan Luas Daerah', tag: 'Luas Daerah' },
            { id: 'P30', title: 'Aplikasi Integral: Volume Benda Putar & Review ASAS', tag: 'Volume' }
          ]
        }
      ]
    };

    function getStudentSubmissionsForSkillTree() {
      const map = {};
      if (window._cbtCompletedSubmissions && typeof window._cbtCompletedSubmissions === 'object') {
        Object.assign(map, window._cbtCompletedSubmissions);
      }
      let nis = null;
      try {
        const sess = JSON.parse(localStorage.getItem('portal_session') || 'null');
        if (sess && sess.data && sess.data.nis) nis = sess.data.nis;
      } catch(e) {}
      if (!nis) nis = '24400083';

      try {
        const cacheKey = typeof kunciTingkat === 'function' ? kunciTingkat('cbt_completed_' + nis) : ('cbt_completed_' + nis);
        const cached = JSON.parse(localStorage.getItem(cacheKey) || '{}');
        if (cached && typeof cached === 'object') {
          Object.keys(cached).forEach(k => {
            const item = cached[k];
            if (item && item.kode_pertemuan && (item.skor !== undefined && item.skor !== null)) {
              const m = (item.mapel || 'wajib').toLowerCase();
              const p = String(item.kode_pertemuan).toUpperCase();
              map[`${m}_${p}`] = item;
              map[`${m}_${p.toLowerCase()}`] = item;
            }
          });
        }
      } catch(e) {}

      return map;
    }

    function openSkillTreeModal() {
      const modal = document.getElementById('skill-tree-modal');
      if (!modal) return;
      modal.classList.remove('hidden');
      modal.classList.add('flex');

      let nis = null;
      try {
        const sess = JSON.parse(localStorage.getItem('portal_session') || 'null');
        if (sess && sess.data && sess.data.nis) nis = sess.data.nis;
      } catch(e) {}
      if (!nis) nis = '24400083';

      // Sinkronisasi latar belakang nilai D1 jika belum termuat
      if (!window._cbtCompletedSubmissions || Object.keys(window._cbtCompletedSubmissions).length === 0) {
        fetch(`/api/nilai?nis=${encodeURIComponent(nis)}&_t=${Date.now()}`)
          .then(res => res.json())
          .then(data => {
            if (Array.isArray(data)) {
              window._cbtCompletedSubmissions = window._cbtCompletedSubmissions || {};
              data.forEach(r => {
                const k1 = `${(r.mapel || 'wajib').toLowerCase()}_${String(r.kode_pertemuan || '').toUpperCase()}`;
                const k2 = `${(r.mapel || 'wajib').toLowerCase()}_${String(r.kode_pertemuan || '').toLowerCase()}`;
                window._cbtCompletedSubmissions[k1] = r;
                window._cbtCompletedSubmissions[k2] = r;
              });
              renderSkillTree(_currentSkillTreeTab || 'wajib');
            }
          })
          .catch(e => console.warn('Fetch skill tree D1:', e));
      }

      renderSkillTree(_currentSkillTreeTab || 'wajib');
    }

    function closeSkillTreeModal() {
      const modal = document.getElementById('skill-tree-modal');
      if (!modal) return;
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function switchSkillTreeTab(mapel) {
      _currentSkillTreeTab = mapel;
      const btnWajib = document.getElementById('btn-st-tab-wajib');
      const btnMinat = document.getElementById('btn-st-tab-minat');
      const treeWajib = document.getElementById('st-tree-wajib');
      const treeMinat = document.getElementById('st-tree-minat');

      if (mapel === 'minat') {
        if (btnMinat) btnMinat.className = 'px-3 py-1 rounded-lg transition font-bold bg-white text-[#2F3437] shadow-xs cursor-pointer';
        if (btnWajib) btnWajib.className = 'px-3 py-1 rounded-lg transition text-[#787774] hover:text-[#2F3437] cursor-pointer';
        if (treeWajib) treeWajib.classList.add('hidden');
        if (treeMinat) treeMinat.classList.remove('hidden');
      } else {
        if (btnWajib) btnWajib.className = 'px-3 py-1 rounded-lg transition font-bold bg-white text-[#2F3437] shadow-xs cursor-pointer';
        if (btnMinat) btnMinat.className = 'px-3 py-1 rounded-lg transition text-[#787774] hover:text-[#2F3437] cursor-pointer';
        if (treeMinat) treeMinat.classList.add('hidden');
        if (treeWajib) treeWajib.classList.remove('hidden');
      }

      renderSkillTree(mapel);
    }

    function renderSkillTree(mapel) {
      const clusters = SKILL_TREE_DATA[mapel] || SKILL_TREE_DATA.wajib;
      const targetContainer = document.getElementById(mapel === 'minat' ? 'st-tree-minat' : 'st-tree-wajib');
      if (!targetContainer) return;

      const subMap = getStudentSubmissionsForSkillTree();

      let totalNodes = 0;
      let countLocked = 0;
      let countRemedial = 0;
      let countPassed = 0;
      let countPerfect = 0;

      const clustersHtml = clusters.map(cluster => {
        let clusterMastered = 0;
        const totalClusterNodes = cluster.nodes.length;

        const nodesHtml = cluster.nodes.map(node => {
          totalNodes++;
          const sub = subMap[`${mapel}_${node.id.toUpperCase()}`] || subMap[`${mapel}_${node.id.toLowerCase()}`];

          let status = 'locked';
          let skorVal = null;
          if (sub && sub.skor !== undefined && sub.skor !== null) {
            skorVal = Number(sub.skor);
            if (skorVal === 100) {
              status = 'perfect';
              countPerfect++;
              clusterMastered++;
            } else if (skorVal >= 75) {
              status = 'passed';
              countPassed++;
              clusterMastered++;
            } else {
              status = 'remedial';
              countRemedial++;
            }
          } else {
            countLocked++;
          }

          let cardBorder = 'border-[#E8E6DF] bg-[#FFFFFF]';
          let starIcon = '<i class="fa-solid fa-lock text-[#A8A29E] text-xs"></i>';
          let badgeHtml = '<span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium text-[#787774] bg-[#F0EFEA] border border-[#E8E6DF]">Belum</span>';

          if (status === 'perfect') {
            cardBorder = 'border-amber-400 bg-[#FFFDF5] shadow-xs ring-1 ring-amber-300';
            starIcon = '<i class="fa-solid fa-crown text-amber-500 text-xs"></i>';
            badgeHtml = '<span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold text-amber-900 bg-amber-100 border border-amber-300">100 👑</span>';
          } else if (status === 'passed') {
            cardBorder = 'border-emerald-400 bg-[#F0FDF4] shadow-xs';
            starIcon = '<i class="fa-solid fa-circle-check text-emerald-600 text-xs"></i>';
            badgeHtml = `<span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 border border-emerald-300">${skorVal} ✓</span>`;
          } else if (status === 'remedial') {
            cardBorder = 'border-rose-300 bg-[#FFF1F0] shadow-xs';
            starIcon = '<i class="fa-solid fa-triangle-exclamation text-rose-600 text-xs"></i>';
            badgeHtml = `<span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold text-rose-800 bg-rose-100 border border-rose-300">${skorVal} ⚠️</span>`;
          }

          return `
            <div class="rounded-xl border p-3 flex flex-col justify-between gap-2.5 transition hover:shadow-sm ${cardBorder}">
              <div class="flex items-start justify-between gap-2">
                <div class="flex items-center gap-1.5">
                  <span class="w-6 h-6 rounded-md font-mono font-bold text-[11px] flex items-center justify-center bg-white border border-[#E8E6DF] text-[#2E384D] shadow-2xs">${node.id}</span>
                  <span class="text-[10px] font-semibold text-[#787774] uppercase tracking-wider">${node.tag}</span>
                </div>
                <div class="flex items-center gap-1">
                  ${starIcon}
                  ${badgeHtml}
                </div>
              </div>

              <div>
                <h5 class="text-xs font-bold text-[#2F3437] line-clamp-2 leading-snug" title="${escapeHtml(node.title)}">${escapeHtml(node.title)}</h5>
              </div>

              <div class="flex items-center gap-1.5 pt-1.5 mt-auto border-t border-[#E8E6DF]/70">
                <button type="button" onclick="bukaCbtDariSkillTree('${mapel}', '${node.id}')" class="notion-btn-primary flex-1 py-1 rounded-lg text-[10.5px] font-bold flex items-center justify-center gap-1 text-white cursor-pointer shadow-2xs" title="Kerjakan CBT ${node.id}">
                  <i class="fa-solid fa-play text-[9px]"></i> <span>CBT</span>
                </button>
                <button type="button" onclick="bukaSlideDariSkillTree('${mapel}', '${node.id}')" class="notion-btn-secondary px-2.5 py-1 rounded-lg text-[10.5px] font-semibold flex items-center justify-center gap-1 cursor-pointer text-[#5F5E5B] hover:text-[#2F3437] border border-[#E8E6DF] bg-white" title="Buka Slide Materi ${node.id}">
                  <i class="fa-solid fa-book-open text-[10px] text-indigo-600"></i> <span>Slide</span>
                </button>
              </div>
            </div>`;
        }).join('');

        const clusterPct = Math.round((clusterMastered / totalClusterNodes) * 100);

        return `
          <div class="rounded-2xl border p-4 sm:p-5 space-y-3.5" style="background-color: #FFFFFF; border-color: #E8E6DF;">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-2.5" style="border-color: #E8E6DF;">
              <div>
                <h4 class="text-sm font-bold text-[#2F3437]">${escapeHtml(cluster.clusterTitle)}</h4>
                <p class="text-[11px] text-[#787774]">${escapeHtml(cluster.clusterSub)}</p>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 rounded-md text-xs font-mono font-bold ${clusterPct >= 80 ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-[#F0EFEA] text-[#5F5E5B] border border-[#E8E6DF]'}">
                  ${clusterMastered} / ${totalClusterNodes} Tuntas (${clusterPct}%)
                </span>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              ${nodesHtml}
            </div>
          </div>`;
      }).join('');

      targetContainer.innerHTML = clustersHtml;

      // Update KPI Strip
      const masteredTotal = countPassed + countPerfect;
      const pctTotal = totalNodes > 0 ? Math.round((masteredTotal / totalNodes) * 100) : 0;

      const totalNodesEl = document.getElementById('st-total-nodes');
      if (totalNodesEl) totalNodesEl.textContent = `${masteredTotal} / ${totalNodes} Bintang (${pctTotal}%)`;

      const progressBarEl = document.getElementById('st-progress-bar');
      if (progressBarEl) progressBarEl.style.width = `${pctTotal}%`;

      const countLockedEl = document.getElementById('st-count-locked');
      if (countLockedEl) countLockedEl.textContent = countLocked;

      const countRemedialEl = document.getElementById('st-count-remedial');
      if (countRemedialEl) countRemedialEl.textContent = countRemedial;

      const countPassedEl = document.getElementById('st-count-passed');
      if (countPassedEl) countPassedEl.textContent = countPassed;

      const countPerfectEl = document.getElementById('st-count-perfect');
      if (countPerfectEl) countPerfectEl.textContent = countPerfect;
    }

    function bukaCbtDariSkillTree(mapel, kode) {
      closeSkillTreeModal();
      if (typeof openTkaForCurrentMeeting === 'function') {
        openTkaForCurrentMeeting(kode, 0, mapel);
      } else if (typeof bukaPaketCbtDariRapor === 'function') {
        bukaPaketCbtDariRapor(mapel, kode);
      } else {
        if (typeof switchSubject === 'function') switchSubject('tka');
      }
    }

    function bukaSlideDariSkillTree(mapel, kode) {
      closeSkillTreeModal();
      const targetHash = `#/${mapel}/${kode}/slide/1`;
      window.location.hash = targetHash;
      if (typeof parseHashRoute === 'function') {
        parseHashRoute(targetHash);
      } else {
        if (typeof switchSubject === 'function') switchSubject(mapel);
        if (typeof renderAppView === 'function') renderAppView();
      }
    }

    // =========================================================================
    // MODUL 3: AESTHETIC ACHIEVEMENT CARD GENERATOR ("SPOTIFY WRAPPED")
    // =========================================================================
    let _currentShareCardTheme = 'paper';

    function openShareCardModal() {
      const modal = document.getElementById('share-card-modal');
      if (!modal) return;
      modal.classList.remove('hidden');
      modal.classList.add('flex');

      renderShareCardPreview();
      switchShareCardTheme(_currentShareCardTheme || 'paper');
    }

    function closeShareCardModal() {
      const modal = document.getElementById('share-card-modal');
      if (!modal) return;
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function switchShareCardTheme(theme) {
      _currentShareCardTheme = theme;
      const btnPaper = document.getElementById('btn-theme-paper');
      const btnDark = document.getElementById('btn-theme-dark');
      const preview = document.getElementById('achievement-card-preview');

      if (theme === 'dark') {
        if (btnDark) btnDark.className = 'px-2.5 py-1 rounded-md text-xs font-semibold bg-[#2E384D] text-white cursor-pointer shadow-2xs';
        if (btnPaper) btnPaper.className = 'px-2.5 py-1 rounded-md text-xs font-semibold bg-white border border-[#E8E6DF] text-[#787774] hover:text-[#2F3437] cursor-pointer';
        if (preview) {
          preview.style.backgroundColor = '#0F172A';
          preview.style.borderColor = '#38BDF8';
          preview.style.color = '#F8FAFC';
          const h4 = preview.querySelector('#sc-nama');
          if (h4) h4.style.color = '#FFFFFF';
        }
      } else {
        if (btnPaper) btnPaper.className = 'px-2.5 py-1 rounded-md text-xs font-semibold bg-[#2E384D] text-white cursor-pointer shadow-2xs';
        if (btnDark) btnDark.className = 'px-2.5 py-1 rounded-md text-xs font-semibold bg-white border border-[#E8E6DF] text-[#787774] hover:text-[#2F3437] cursor-pointer';
        if (preview) {
          preview.style.backgroundColor = '#FFFFFF';
          preview.style.borderColor = '#2E384D';
          preview.style.color = '#2F3437';
          const h4 = preview.querySelector('#sc-nama');
          if (h4) h4.style.color = '#2F3437';
        }
      }
    }

    function renderShareCardPreview() {
      let profile = _cachedGamifikasiProfile;
      if (!profile) {
        let sess = null;
        try { sess = JSON.parse(localStorage.getItem('portal_session') || 'null'); } catch(e) {}
        const nis = (sess && sess.data && sess.data.nis) ? sess.data.nis : '24400083';
        try {
          const cached = localStorage.getItem('mathcihuy_gamifikasi_' + nis);
          if (cached) profile = JSON.parse(cached);
        } catch(e) {}
      }

      const nama = (profile && profile.nama) || 'Siswa';
      const kelas = (profile && profile.kelas) || 'Kelas XII';
      const rankVal = (profile && (profile.rank_wajib_class || profile.rank_class)) || 1;
      const gelar = (profile && profile.gelar) || 'Novice Explorer';
      const totalXp = (profile && profile.total_xp) || 0;
      const streak = (profile && profile.current_streak) || 1;
      const perfect = (profile && profile.total_sempurna) || 0;
      const shield = (profile && profile.streak_shields !== undefined) ? profile.streak_shields : 1;

      const namaEl = document.getElementById('sc-nama');
      if (namaEl) namaEl.textContent = nama;
      const initialsEl = document.getElementById('sc-avatar-initials');
      if (initialsEl) initialsEl.textContent = getStudentInitials(nama);
      const kelasEl = document.getElementById('sc-kelas');
      if (kelasEl) kelasEl.textContent = kelas;
      const rankEl = document.getElementById('sc-rank');
      if (rankEl) rankEl.textContent = `Wajib #${rankVal}`;
      const gelarEl = document.getElementById('sc-gelar');
      if (gelarEl) gelarEl.textContent = gelar;

      const xpEl = document.getElementById('sc-xp');
      if (xpEl) xpEl.textContent = `${totalXp.toLocaleString('id-ID')} XP`;
      const streakEl = document.getElementById('sc-streak');
      if (streakEl) streakEl.textContent = `${streak} Hari`;
      const perfectEl = document.getElementById('sc-perfect');
      if (perfectEl) perfectEl.textContent = `${perfect} Kali`;
      const shieldEl = document.getElementById('sc-shield');
      if (shieldEl) shieldEl.textContent = `${shield} Perisai`;

      // Badges
      const badgesContainer = document.getElementById('sc-badges-container');
      if (badgesContainer) {
        const badges = (profile && Array.isArray(profile.badges)) ? profile.badges.filter(b => b && b.unlocked !== false) : [];
        if (badges.length > 0) {
          badgesContainer.innerHTML = badges.slice(0, 4).map(b => `
            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9.5px] font-semibold border shadow-2xs" style="background-color: #FBFBFA; border-color: #E8E6DF; color: #2F3437;">
              <i class="${b.icon || 'fa-solid fa-award'}" style="color: ${b.color || '#D97706'};"></i>
              <span>${escapeHtml(b.name)}</span>
            </span>
          `).join('');
        } else {
          badgesContainer.innerHTML = `
            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9.5px] font-semibold border shadow-2xs bg-stone-50 border-stone-200 text-stone-700">
              <i class="fa-solid fa-flag-checkered text-blue-600"></i>
              <span>Langkah Pertama</span>
            </span>
            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9.5px] font-semibold border shadow-2xs bg-stone-50 border-stone-200 text-stone-700">
              <i class="fa-solid fa-shield-halved text-emerald-600"></i>
              <span>Penjaga Api</span>
            </span>
          `;
        }
      }
    }

    // Helper Canvas Rounded Rectangle Cross-Browser
    function canvasDrawRoundedRect(ctx, x, y, width, height, radius) {
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(x, y, width, height, radius);
      } else {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
      }
    }

    async function downloadShareCardAsPng() {
      const canvas = document.getElementById('share-card-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const isDark = _currentShareCardTheme === 'dark';

      let profile = _cachedGamifikasiProfile;
      if (!profile) {
        let sess = null;
        try { sess = JSON.parse(localStorage.getItem('portal_session') || 'null'); } catch(e) {}
        const nis = (sess && sess.data && sess.data.nis) ? sess.data.nis : '24400083';
        try {
          const cached = localStorage.getItem('mathcihuy_gamifikasi_' + nis);
          if (cached) profile = JSON.parse(cached);
        } catch(e) {}
      }

      const nama = (profile && profile.nama) || 'Siswa';
      const kelas = (profile && profile.kelas) || 'Kelas XII';
      const rankVal = (profile && (profile.rank_wajib_class || profile.rank_class)) || 1;
      const gelar = (profile && profile.gelar) || 'Novice Explorer';
      const totalXp = (profile && profile.total_xp) || 0;
      const streak = (profile && profile.current_streak) || 1;
      const perfect = (profile && profile.total_sempurna) || 0;
      const shield = (profile && profile.streak_shields !== undefined) ? profile.streak_shields : 1;
      const weeklyBonusXp = (profile && profile.weekly_event && profile.weekly_event.earned_bonus_xp) || 0;

      // 1. Clear & Background Canvas 1080 x 1920
      ctx.clearRect(0, 0, 1080, 1920);

      const bgGrad = ctx.createLinearGradient(0, 0, 1080, 1920);
      if (isDark) {
        bgGrad.addColorStop(0, '#0B0F19');
        bgGrad.addColorStop(1, '#0F172A');
      } else {
        bgGrad.addColorStop(0, '#F7F6F3');
        bgGrad.addColorStop(1, '#ECEBE6');
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1080, 1920);

      // 2. Card Frame Container
      ctx.save();
      ctx.beginPath();
      canvasDrawRoundedRect(ctx, 50, 50, 980, 1820, 48);
      ctx.fillStyle = isDark ? '#131B2E' : '#FFFFFF';
      ctx.fill();
      ctx.lineWidth = 6;
      ctx.strokeStyle = isDark ? '#38BDF8' : '#2E384D';
      ctx.stroke();
      ctx.clip();

      // Decorative Watermark circles
      ctx.beginPath();
      ctx.arc(950, 120, 200, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.05)' : 'rgba(245, 158, 11, 0.06)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(80, 1750, 240, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? 'rgba(99, 102, 241, 0.05)' : 'rgba(37, 99, 235, 0.05)';
      ctx.fill();
      ctx.restore();

      // 3. Header Brand (Math Cihuy • Mr. Ardi)
      // Aesthetic Math Icon Badge
      ctx.beginPath();
      canvasDrawRoundedRect(ctx, 100, 105, 90, 90, 24);
      ctx.fillStyle = isDark ? '#1E293B' : '#2E384D';
      ctx.fill();
      ctx.fillStyle = '#F59E0B';
      ctx.font = '900 44px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('∑', 145, 166);

      ctx.textAlign = 'left';
      ctx.fillStyle = isDark ? '#38BDF8' : '#2E384D';
      ctx.font = '900 34px sans-serif';
      ctx.fillText('MATH CIHUY', 215, 142);

      ctx.fillStyle = isDark ? '#94A3B8' : '#5F5E5B';
      ctx.font = 'bold 21px monospace';
      ctx.fillText('PORTAL MATEMATIKA XII • MR. ARDI', 215, 180);

      // Official Badge
      ctx.beginPath();
      canvasDrawRoundedRect(ctx, 830, 120, 150, 45, 12);
      ctx.fillStyle = '#FEF3C7';
      ctx.fill();
      ctx.strokeStyle = '#FDE68A';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = '#92400E';
      ctx.font = 'bold 18px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('★ OFFICIAL', 905, 149);

      // Header Divider Line
      ctx.beginPath();
      ctx.moveTo(100, 235);
      ctx.lineTo(980, 235);
      ctx.strokeStyle = isDark ? '#2D3748' : '#E8E6DF';
      ctx.lineWidth = 2;
      ctx.stroke();

      // 5. Student Identity Box
      ctx.beginPath();
      ctx.arc(170, 330, 65, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? '#38BDF8' : '#2E384D';
      ctx.fill();

      ctx.textAlign = 'center';
      ctx.fillStyle = isDark ? '#0F172A' : '#FFFFFF';
      ctx.font = 'bold 46px sans-serif';
      ctx.fillText(getStudentInitials(nama), 170, 346);

      // Name & Class
      ctx.textAlign = 'left';
      ctx.fillStyle = isDark ? '#FFFFFF' : '#2F3437';
      ctx.font = '900 42px sans-serif';
      const cleanNamaShort = nama.length > 24 ? (nama.substring(0, 22) + '...') : nama;
      ctx.fillText(cleanNamaShort, 260, 315);

      ctx.font = 'bold 24px monospace';
      ctx.fillStyle = isDark ? '#94A3B8' : '#5F5E5B';
      ctx.fillText(`${kelas} • Peringkat Wajib #${rankVal}`, 260, 355);

      // Gelar Pill
      ctx.beginPath();
      canvasDrawRoundedRect(ctx, 260, 375, 270, 42, 10);
      ctx.fillStyle = isDark ? '#1E293B' : '#FFF7E6';
      ctx.fill();
      ctx.strokeStyle = isDark ? '#475569' : '#FFE7BA';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = isDark ? '#FDE047' : '#B26B00';
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText(`👑 ${gelar}`, 275, 404);

      // 6. 4 Metric Gold Grid (Cards at y=460 & y=650)
      const renderMetricBox = (x, y, w, h, icon, label, val, bg, border, iconColor, valColor) => {
        ctx.beginPath();
        canvasDrawRoundedRect(ctx, x, y, w, h, 24);
        ctx.fillStyle = bg;
        ctx.fill();
        ctx.strokeStyle = border;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.textAlign = 'left';
        ctx.fillStyle = iconColor;
        ctx.font = 'bold 22px sans-serif';
        ctx.fillText(`${icon} ${label}`, x + 30, y + 52);

        ctx.fillStyle = valColor;
        ctx.font = '900 46px monospace';
        ctx.fillText(val, x + 30, y + 120);
      };

      // Box 1: Total XP
      renderMetricBox(
        100, 460, 420, 160, '⚡', 'TOTAL EXP',
        `${totalXp.toLocaleString('id-ID')} XP`,
        isDark ? '#1E293B' : '#FBFBFA',
        isDark ? '#334155' : '#E8E6DF',
        '#D97706', isDark ? '#F8FAFC' : '#2F3437'
      );

      // Box 2: Daily Streak
      renderMetricBox(
        560, 460, 420, 160, '🔥', 'DAILY STREAK',
        `${streak} Hari`,
        isDark ? '#2D1E22' : '#FEF2F2',
        isDark ? '#581C26' : '#FEE2E2',
        '#DC2626', isDark ? '#FCA5A5' : '#991B1B'
      );

      // Box 3: Skor 100
      renderMetricBox(
        100, 650, 420, 160, '🎯', 'SKOR 100 MURNI',
        `${perfect} Paket`,
        isDark ? '#2C2518' : '#FFFDF5',
        isDark ? '#533F17' : '#FEF3C7',
        '#D97706', isDark ? '#FDE68A' : '#92400E'
      );

      // Box 4: Streak Shield
      renderMetricBox(
        560, 650, 420, 160, '🛡️', 'STREAK SHIELD',
        `${shield} Perisai`,
        isDark ? '#132E27' : '#ECFDF5',
        isDark ? '#14532D' : '#D1FAE5',
        '#059669', isDark ? '#6EE7B7' : '#065F46'
      );

      // 7. Showcase Badges Section (y=850)
      ctx.textAlign = 'left';
      ctx.fillStyle = isDark ? '#94A3B8' : '#787774';
      ctx.font = 'bold 22px monospace';
      ctx.fillText('LENCANA PRESTASI & PENGHARGAAN TERBUKA', 100, 860);

      const badges = (profile && Array.isArray(profile.badges)) ? profile.badges.filter(b => b && b.unlocked !== false) : [];
      const defaultBadges = [
        { name: 'Langkah Pertama', icon: '★', desc: 'Menyelesaikan CBT perdana' },
        { name: 'Penjaga Api', icon: '🛡️', desc: 'Perisai konsistensi aktif' },
        { name: 'Weekly Challenger', icon: '🏆', desc: 'Misi mingguan tuntas' },
        { name: 'Pejuang Tangguh', icon: '⛰️', desc: 'Drilling soal konsisten' }
      ];
      const displayBadges = badges.length >= 2 ? badges.slice(0, 4) : defaultBadges;

      displayBadges.forEach((b, idx) => {
        const col = idx % 2;
        const row = Math.floor(idx / 2);
        const bx = 100 + col * 460;
        const by = 890 + row * 115;

        ctx.beginPath();
        canvasDrawRoundedRect(ctx, bx, by, 420, 95, 20);
        ctx.fillStyle = isDark ? '#1E293B' : '#FBFBFA';
        ctx.fill();
        ctx.strokeStyle = isDark ? '#334155' : '#E8E6DF';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(bx + 48, by + 48, 28, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? '#334155' : '#F0EFEA';
        ctx.fill();

        ctx.textAlign = 'center';
        ctx.fillStyle = '#D97706';
        ctx.font = '24px sans-serif';
        ctx.fillText('★', bx + 48, by + 56);

        ctx.textAlign = 'left';
        ctx.fillStyle = isDark ? '#FFFFFF' : '#2F3437';
        ctx.font = 'bold 22px sans-serif';
        ctx.fillText(b.name, bx + 90, by + 44);

        ctx.fillStyle = isDark ? '#94A3B8' : '#787774';
        ctx.font = '16px sans-serif';
        ctx.fillText(b.desc || 'Pencapaian kurikulum resmi', bx + 90, by + 72);
      });

      // 8. Weekly Challenge Highlight (y=1160)
      ctx.beginPath();
      canvasDrawRoundedRect(ctx, 100, 1160, 880, 130, 24);
      ctx.fillStyle = isDark ? '#1C2538' : '#FFFBEB';
      ctx.fill();
      ctx.strokeStyle = isDark ? '#F59E0B' : '#FDE68A';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.textAlign = 'left';
      ctx.fillStyle = '#D97706';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText('🏆 TANTANGAN MINGGUAN • WEEKLY EXP BLITZ', 135, 1210);

      ctx.fillStyle = isDark ? '#E2E8F0' : '#451A03';
      ctx.font = '20px sans-serif';
      ctx.fillText(`Bonus Terkumpul: +${weeklyBonusXp} / 750 EXP • Konsisten menjawab kuis Discord & CBT!`, 135, 1250);

      // 9. Motto Card (y=1330)
      ctx.beginPath();
      canvasDrawRoundedRect(ctx, 100, 1330, 880, 180, 24);
      ctx.fillStyle = isDark ? '#1E293B' : '#F0EFEA';
      ctx.fill();
      ctx.strokeStyle = isDark ? '#334155' : '#E8E6DF';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.textAlign = 'center';
      ctx.fillStyle = isDark ? '#E2E8F0' : '#5F5E5B';
      ctx.font = 'italic 26px sans-serif';
      ctx.fillText('“Konsistensi mengalahkan bakat.', 540, 1400);
      ctx.fillText('Siap taklukkan Asesmen Nasional & UTBK-SNBT 2027!”', 540, 1445);

      ctx.font = 'bold 18px monospace';
      ctx.fillStyle = '#D97706';
      ctx.fillText('— GENERASI JUARA MATEMATIKA —', 540, 1485);

      // 10. Footer Section (y=1640)
      ctx.beginPath();
      ctx.moveTo(100, 1640);
      ctx.lineTo(980, 1640);
      ctx.strokeStyle = isDark ? '#2D3748' : '#E8E6DF';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.textAlign = 'left';
      ctx.fillStyle = isDark ? '#94A3B8' : '#5F5E5B';
      ctx.font = 'bold 24px monospace';
      ctx.fillText('Guru Pengampu: Mr. Ardi, S.Pd.Gr.', 100, 1710);
      ctx.font = '18px monospace';
      ctx.fillText('Bimbingan & Evaluasi Prestasi Matematika', 100, 1745);

      ctx.textAlign = 'right';
      ctx.fillStyle = isDark ? '#38BDF8' : '#2E384D';
      ctx.font = 'bold 24px monospace';
      ctx.fillText('mathcihuy.pages.dev', 980, 1710);

      ctx.fillStyle = isDark ? '#64748B' : '#787774';
      ctx.font = '16px monospace';
      const todayStr = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
      ctx.fillText(`Diterbitkan: ${todayStr}`, 980, 1745);

      // 11. Download Output
      try {
        const link = document.createElement('a');
        const cleanName = nama.replace(/[^a-zA-Z0-9]/g, '_');
        link.download = `Prestasi_Matematika_${cleanName}.png`;
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showNotionToast('🎉 Kartu Prestasi HD (1080x1920) berhasil diunduh! Siap diposting ke IG Story & Discord.');
      } catch (err) {
        console.error('Gagal export canvas:', err);
        alert('Gagal mengunduh kartu prestasi: ' + err.message);
      }
    }

    function copyShareCardCaption() {
      let profile = _cachedGamifikasiProfile;
      if (!profile) {
        let sess = null;
        try { sess = JSON.parse(localStorage.getItem('portal_session') || 'null'); } catch(e) {}
        const nis = (sess && sess.data && sess.data.nis) ? sess.data.nis : '24400083';
        try {
          const cached = localStorage.getItem('mathcihuy_gamifikasi_' + nis);
          if (cached) profile = JSON.parse(cached);
        } catch(e) {}
      }

      const nama = (profile && profile.nama) || 'Siswa';
      const kelas = (profile && profile.kelas) || 'Kelas XII';
      const gelar = (profile && profile.gelar) || 'Novice Explorer';
      const totalXp = ((profile && profile.total_xp) || 0).toLocaleString('id-ID');
      const streak = (profile && profile.current_streak) || 1;
      const perfect = (profile && profile.total_sempurna) || 0;
      const shield = (profile && profile.streak_shields !== undefined) ? profile.streak_shields : 1;
      const rank = (profile && (profile.rank_wajib_class || profile.rank_class)) || 1;

      const caption = `✨ MATH CIHUY PRESTASI BELAJAR XII ✨
👨‍🏫 Guru Pengampu: Mr. Ardi
👤 Nama: ${nama} (${kelas})
👑 Gelar: ${gelar} (Peringkat #${rank} Kelas)
⚡ Total EXP: ${totalXp} XP
🔥 Daily Streak: ${streak} Hari Berturut-turut
🎯 Skor 100 Murni: ${perfect} Paket
🛡️ Streak Shield: ${shield} Perisai Aktif

"Konsistensi mengalahkan bakat. Siap taklukkan Asesmen Nasional & UTBK 2027!"
Guru Pengampu: Mr. Ardi
🔗 https://mathcihuy.pages.dev`;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(caption)
          .then(() => showNotionToast('📋 Teks caption berhasil disalin ke clipboard!'))
          .catch(() => fallbackCopyCaption(caption));
      } else {
        fallbackCopyCaption(caption);
      }
    }

    function fallbackCopyCaption(text) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        showNotionToast('📋 Teks caption berhasil disalin!');
      } catch(e) {
        prompt('Salin manual teks caption:', text);
      }
      ta.remove();
    }

    function showNotionToast(message) {
      const existing = document.getElementById('notion-toast-floating');
      if (existing) existing.remove();

      const toast = document.createElement('div');
      toast.id = 'notion-toast-floating';
      toast.className = 'fixed bottom-6 right-6 z-[10000] px-4 py-3 rounded-xl border shadow-2xl flex items-center gap-2.5 transition-all duration-300 font-sans text-xs font-semibold';
      toast.style.backgroundColor = '#2E384D';
      toast.style.borderColor = '#1E2533';
      toast.style.color = '#FFFFFF';
      toast.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400 text-sm"></i> <span>${escapeHtml(message)}</span>`;
      document.body.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 350);
      }, 3500);
    }

    // Jalankan initGamificationOnLoad saat dokumen siap
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initGamificationOnLoad);
    } else {
      setTimeout(initGamificationOnLoad, 100);
    }

    // EXPOSE FUNGSI GAMIFIKASI & LEADERBOARD KE WINDOW
    window.fetchGamificationProfile = fetchGamificationProfile;
    window.renderGamificationHeroCard = renderGamificationHeroCard;
    window.openLeaderboardModal = openLeaderboardModal;
    window.closeLeaderboardModal = closeLeaderboardModal;
    window.switchLeaderboardFilter = switchLeaderboardFilter;
    window.switchLeaderboardMapel = switchLeaderboardMapel;
    window.switchLeaderboardView = switchLeaderboardView;
    window.loadLeaderboardData = loadLeaderboardData;
    window.loadRombelLeaderboardData = loadRombelLeaderboardData;

    // EXPOSE FUNGSI FITUR BARU: WEEKLY EVENT (RAID BOSS), SKILL TREE & SHARE CARD
    window.renderWeeklyEventWidget = renderWeeklyEventWidget;
    window.openRaidBossLeaderboardModal = openRaidBossLeaderboardModal;
    window.closeRaidBossLeaderboardModal = closeRaidBossLeaderboardModal;
    window.renderRaidBossLeaderboard = renderRaidBossLeaderboard;
    window.filterRaidBossLeaderboard = filterRaidBossLeaderboard;
    window.serangRaidBoss = serangRaidBoss;
    window.openSkillTreeModal = openSkillTreeModal;
    window.closeSkillTreeModal = closeSkillTreeModal;
    window.switchSkillTreeTab = switchSkillTreeTab;
    window.renderSkillTree = renderSkillTree;
    window.bukaCbtDariSkillTree = bukaCbtDariSkillTree;
    window.bukaSlideDariSkillTree = bukaSlideDariSkillTree;
    window.openShareCardModal = openShareCardModal;
    window.closeShareCardModal = closeShareCardModal;
    window.switchShareCardTheme = switchShareCardTheme;
    window.renderShareCardPreview = renderShareCardPreview;
    window.downloadShareCardAsPng = downloadShareCardAsPng;
    window.copyShareCardCaption = copyShareCardCaption;
    window.showNotionToast = showNotionToast;


