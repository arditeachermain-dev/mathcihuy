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

    const NAMA_MAPEL = { wajib: 'Wajib', minat: 'Peminatan', peminatan: 'Peminatan', clil: 'CLIL', custom: 'Racikan' };

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
          const isAnomaliCepat = dDetik > 0 && dDetik < 45 && Number(r.skor) >= 80;
          let anomaliTag = '';
          if (isAnomaliCepat) {
            if (nAttempt > 1) {
              anomaliTag = ` <span title="Wajar cepat (< 45 detik) karena ini adalah pengerjaan ulang / remedial setelah membaca kunci dan pembahasan." class="px-1.5 py-0.5 rounded bg-blue-500/20 text-cyan-300 border border-blue-500/40 text-[9px] font-black whitespace-nowrap"><i class="fa-solid fa-rotate-right"></i> Ulang (${nAttempt}x)</span>`;
            } else {
              anomaliTag = ` <span title="Perhatian: Selesai sangat cepat (< 45 detik) pada percobaan pertama dengan skor tinggi." class="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] font-black whitespace-nowrap"><i class="fa-solid fa-bolt"></i> Cepat?</span>`;
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
        
        if (!confirm(`Apakah Bapak yakin ingin mereset nilai untuk ${namaSiswa} (${nis})${infoPaket}?\n\nData nilai di Cloud SQL dan riwayat pengerjaan siswa akan dihapus, sehingga siswa dapat mengerjakan ulang dari awal.`)) {
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

      if (!confirm(`Apakah Bapak yakin ingin mengumpulkan paksa ujian untuk ${namaSiswa} (${nis}) paket ${kodePertemuan}?

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

    function getRaporPackageList() {
      const pkgs = [];
      const database = (typeof db !== 'undefined') ? db : {};
      
      // 1. Matematika Wajib
      if (Array.isArray(database.wajib)) {
        database.wajib.forEach(m => {
          pkgs.push({
            id: m.id,
            mapel: 'wajib',
            mapelLabel: 'Matematika Wajib',
            title: m.title || ('Pertemuan ' + m.id),
            bab: m.bab || 'Kaidah Pencacahan, Geometri, & Statistika'
          });
        });
      }
      
      // 2. Matematika Peminatan
      if (Array.isArray(database.minat)) {
        database.minat.forEach(m => {
          pkgs.push({
            id: m.id,
            mapel: 'minat',
            mapelLabel: 'Matematika Peminatan',
            title: m.title || ('Pertemuan ' + m.id),
            bab: m.bab || 'Geometri Analitik, Limit, Turunan, & Integral'
          });
        });
      }

      // Fallback aman jika database belum terinisiasi
      if (pkgs.length === 0) {
        for (let i = 1; i <= 21; i++) {
          const pid = 'P' + (i < 10 ? '0' + i : i);
          pkgs.push({ id: pid, mapel: 'wajib', mapelLabel: 'Matematika Wajib', title: 'Pertemuan ' + pid, bab: 'Kurikulum Wajib' });
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
          std = { nama: sess.data.nama || sess.data.name, kelas: sess.data.kelas || sess.data.kelas_name };
        }
      }

      if (!std && targetNis === '24400083') {
        std = { nama: 'Rania Zivanka Kurniawan', kelas: 'XII F.4' };
      }

      const defaultTingkat = (typeof NAMA_TINGKAT !== 'undefined') ? NAMA_TINGKAT : 'XII';
      const nama = (std && std.nama) ? std.nama : ('Siswa ' + targetNis);
      const kelas = (std && std.kelas) ? std.kelas : defaultTingkat;

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
        } else if (sess && sess.type === 'siswa') {
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

        const resp = await fetch(`/api/nilai?nis=${encodeURIComponent(targetNis)}${forceSync ? ('&_t=' + Date.now()) : ''}`, {
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

            if (!isGuru) {
              window._cbtCompletedSubmissions = Object.assign(window._cbtCompletedSubmissions || {}, subMap);
            }
          }
        }
      } catch (err) {
        console.warn('Gagal menarik nilai dari D1:', err);
      }

      // 3. Gabungkan dengan paket materi
      const rawList = getRaporPackageList();
      let completedCount = 0;
      let attemptedCount = 0;
      let sumScore = 0;

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

          attemptedCount++;
          sumScore += skor;

          if (skor === 100) {
            status = 'sempurna';
            completedCount++;
          } else if (skor >= 75) {
            status = 'tuntas';
            completedCount++;
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

      // 4. Perbarui Metrik KPI
      const totalCount = _raporAllPackages.length;
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
      const countTuntas = document.getElementById('rapor-count-tuntas');
      if (countTuntas) countTuntas.textContent = completedCount;
      const countBelum = document.getElementById('rapor-count-belum');
      if (countBelum) countBelum.textContent = totalCount - completedCount;

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
      const currentSubjectMode = (typeof currentMode !== 'undefined' && (currentMode === 'minat' || currentMode === 'wajib' || currentMode === 'clil')) ? currentMode : 'wajib';
      setRaporFilter(currentSubjectMode);

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

