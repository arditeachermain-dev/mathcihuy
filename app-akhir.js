
    function openGuruDashboard() {
        let sess = null;
        try {
          sess = JSON.parse(localStorage.getItem('portal_session') || 'null');
        } catch(e) {}

        if (!sess || sess.type !== 'guru') {
            alert('Hanya guru yang dapat akses dashboard');
            return;
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

    function updateGuruPertemuanOptions() {
      const mapel = document.getElementById('guru-filter-mapel').value;
      const selectPertemuan = document.getElementById('guru-filter-pertemuan');
      if (!selectPertemuan) return;

      let options = '<option value="">Semua Pertemuan / Bab</option>';
      if (mapel === 'peminatan') {
        const minatTitles = [
          "Persamaan Lingkaran Pusat O(0,0)", "Persamaan Lingkaran Pusat P(a,b)", "Bentuk Umum Lingkaran",
          "Kedudukan Titik terhadap Lingkaran", "Kedudukan Garis terhadap Lingkaran", "PGSL Melalui Titik pada Lingkaran",
          "PGSL Gradien Tertentu (m)", "PGSL Titik di Luar Lingkaran", "Asesmen Sumatif Lingkaran",
          "Konsep & Sifat Limit Trigonometri", "Bentuk Tak Tentu 0/0", "Metode Substitusi & Faktorisasi",
          "Limit Menuju Tak Hingga Aljabar", "Limit Menuju Tak Hingga Trigonometri", "Asimtot Datar & Tegak",
          "Asesmen Sumatif Limit", "Turunan Dasar Sinus & Cosinus", "Aturan Rantai Trigonometri",
          "Turunan Tingkat Tinggi Trigonometri", "Persamaan Garis Singgung & Normal", "Kemonotonan & Nilai Stasioner",
          "Titik Belok & Kecekungan Kurva", "Aplikasi Optimasi Kontekstual", "Asesmen Sumatif Turunan",
          "Integral Tak Tentu Trigonometri", "Integral Substitusi Aljabar-Trigonometri", "Integral Parsial (Metode Tanzalin)",
          "Integral Tentu Trigonometri", "Aplikasi Luas Daerah Kurva", "Simulasi Komprehensif ASAS"
        ];
        for (let i = 1; i <= 30; i++) {
          const code = `P${String(i).padStart(2, '0')}`;
          options += `<option value="${code}">${code} - ${minatTitles[i-1] || 'Additional Math'}</option>`;
        }
      } else if (mapel === 'clil') {
        const clilTitles = [
          "Unit 1: Combinatorics & Permutations", "Unit 2: Probability & Conditional Events",
          "Unit 3: 3D Geometry & Spatial Distances", "Unit 4: Grouped Statistics & Measures",
          "Unit 5: Bivariate Data & Linear Regression", "Unit 6: Comprehensive Mastery Check"
        ];
        for (let i = 1; i <= 6; i++) {
          const code = `U0${i}`;
          options += `<option value="${code}">${clilTitles[i-1]}</option>`;
        }
      } else {
        // Wajib (default)
        const wajibTitles = [
          "Kaidah Pencacahan 1: Filling Slots", "Notasi Faktorial & Permutasi", "Permutasi Unsur Sama & Siklis",
          "Kombinasi & Pemilihan Delegasi", "Peluang Kejadian Tunggal", "Asesmen Sumatif 1",
          "Peluang Saling Lepas & Tidak Lepas", "Peluang Saling Bebas & Bersyarat", "Kedudukan Titik, Garis, Bidang",
          "Jarak Titik ke Titik (3D)", "Jarak Titik ke Garis", "Jarak Titik ke Bidang",
          "Sudut Garis & Dua Bidang", "Asesmen Sumatif Terpadu Dimensi 3", "Penyajian Data Berkelompok",
          "Rata-rata Hitung (Mean)", "Median dan Modus Berkelompok", "Ukuran Letak Data (Kuartil & Desil)",
          "Ukuran Penyebaran Data (Varians & SB)", "Analisis Data Bivariat & Regresi", "Asesmen Sumatif Statistika"
        ];
        for (let i = 1; i <= 21; i++) {
          const code = `P${String(i).padStart(2, '0')}`;
          options += `<option value="${code}">${code} - ${wajibTitles[i-1] || 'Matematika Wajib'}</option>`;
        }
      }
      selectPertemuan.innerHTML = options;
    }

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
      if (statusEl) statusEl.innerHTML = '<span class="text-cyan-400 font-mono text-xs animate-pulse"><i class="fa-solid fa-spinner fa-spin"></i> Menyinkronkan Supabase SQL...</span>';
      
      if (supabaseClient) {
        try {
          // 1. Tarik Nilai Resmi yang Sudah Disubmit (nilai_cbt)
          const resNilai = await supabaseClient.from('nilai_cbt').select('*').order('waktu_submit', { ascending: false });
          const dataNilai = (!resNilai.error && Array.isArray(resNilai.data)) ? resNilai.data : [];

          // 2. Tarik Jawaban Real-Time yang Sedang Aktif (cbt_live_answers)
          const resLive = await supabaseClient.from('cbt_live_answers').select('*').order('updated_at', { ascending: false });
          window._guruLiveAnswersCache = (!resLive.error && Array.isArray(resLive.data)) ? resLive.data : [];

          const log = [];
          dataNilai.forEach(function(p) {
            const std = (typeof STUDENTS_DATA !== 'undefined' && STUDENTS_DATA[p.nis]) ? STUDENTS_DATA[p.nis] : null;
            const mapped = {
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
              status: 'sudah'
            };
            log.push(mapped);
          });

          sinkSimpan(CBT_LOKAL_KEY, log);
          const totalRecords = log.length;
          if (statusEl) statusEl.innerHTML = `<span class="text-emerald-400 font-mono text-xs font-bold"><i class="fa-solid fa-circle-check"></i> Supabase Terhubung (${totalRecords} nilai disubmit)</span>`;
          loadGuruDashboardData();
          if (manual) alert(`✅ Berhasil menyinkronkan data dari Supabase SQL!\n- Nilai Disubmit: ${totalRecords}\n- Jawaban Live: ${window._guruLiveAnswersCache.length}`);
          return;
        } catch (e) {
          console.warn("Supabase fetch exception:", e);
        }
      }

      if (statusEl) statusEl.innerHTML = '<span class="text-emerald-400 font-mono text-xs font-bold"><i class="fa-solid fa-database"></i> Supabase SQL Siap</span>';
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

        if (isNaN(elapsedMin) || elapsedMin < 5) {
          livenessState = 'live';
          livenessText = (isNaN(elapsedMin) || elapsedMin <= 0) ? 'Baru saja' : `${elapsedMin} mnt lalu`;
          livenessBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-black bg-emerald-950/90 text-emerald-300 border border-emerald-500/50 inline-flex items-center gap-1 shadow-sm"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Aktif (${livenessText})</span>`;
        } else if (elapsedMin < 30) {
          livenessState = 'idle';
          livenessText = `${elapsedMin} mnt lalu`;
          livenessBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950/90 text-amber-300 border border-amber-500/50 inline-flex items-center gap-1"><i class="fa-solid fa-hourglass-half text-amber-400"></i> Menggantung (${livenessText})</span>`;
        } else {
          livenessState = 'stuck';
          livenessText = elapsedHours < 24 ? `${elapsedHours} jam lalu` : `${Math.floor(elapsedHours / 24)} hari lalu`;
          livenessBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-950/90 text-rose-300 border border-rose-500/50 inline-flex items-center gap-1"><i class="fa-solid fa-triangle-exclamation text-rose-400"></i> Tersangkut (${livenessText})</span>`;
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
        displayList = listSudah;
      } else if (statusFilter === 'sedang') {
        displayList = listSedang;
      } else if (statusFilter === 'belum') {
        displayList = listBelum;
      } else {
        // 'semua': gabungan sudah + sedang
        displayList = [...listSudah, ...listSedang].sort((a, b) => String(b.timestamp).localeCompare(String(a.timestamp)));
      }

      if (displayList.length === 0) {
        const pesanKosong = {
          semua: 'Belum ada rekaman ujian pada filter ini.',
          sudah: 'Belum ada siswa yang menyelesaikan/submit ujian pada filter ini.',
          sedang: 'Tidak ada siswa yang sedang aktif mengerjakan saat ini.',
          belum: '🎉 Luar biasa! Semua siswa di kelas ini sudah mengerjakan CBT!'
        };
        tbody.innerHTML = `<tr><td colspan="11" class="text-center py-10 text-slate-400 font-medium">${pesanKosong[statusFilter] || 'Tidak ada data'}</td></tr>`;
        return;
      }

      tbody.innerHTML = displayList.map(r => {
        let statusBadge = '';
        let skorDisplay = '';
        let detailDisplay = '';
        let durasiDisplay = '';
        let aksiButton = '';
        let trBg = 'hover:bg-slate-800/80';

        if (r.status === 'sudah') {
          const isTuntas = Number(r.skor) >= 75;
          const kktpText = isTuntas ? 'TUNTAS' : 'REMEDIAL';
          const kktpBg = isTuntas ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40' : 'bg-rose-950/80 text-rose-300 border-rose-500/40';
          statusBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-black ${kktpBg} border ml-1.5">${kktpText}</span>`;
          skorDisplay = `<span class="font-bold font-mono ${isTuntas ? 'text-emerald-400' : 'text-rose-400'}">${r.skor}/100</span> ${statusBadge}`;
          detailDisplay = `<span class="text-xs font-mono text-slate-200">${r.jumlah_benar}/${r.jumlah_soal}</span>`;
          durasiDisplay = `<span class="text-xs text-slate-300 font-mono">${r.durasi_menit || 0}m</span>`;
          aksiButton = `<button onclick="resetNilaiSiswa('${r.nis}', '${r.kode_pertemuan}', '${r.mapel}')" class="px-2.5 py-1 bg-amber-600/80 hover:bg-amber-500 text-white rounded text-xs font-bold transition shadow">Reset</button>`;
        } else if (r.status === 'sedang') {
          trBg = r.livenessState === 'stuck' ? 'bg-rose-950/20 hover:bg-rose-900/30' : r.livenessState === 'idle' ? 'bg-amber-950/20 hover:bg-amber-900/30' : 'bg-emerald-950/15 hover:bg-emerald-900/25';
          skorDisplay = `<div class="flex flex-col items-center gap-1">${r.livenessBadge}<span class="font-mono text-xs font-bold text-slate-300">${r.skor}/100</span></div>`;
          detailDisplay = `<span class="text-xs font-mono font-semibold ${r.livenessState === 'live' ? 'text-emerald-300' : 'text-amber-300'}">${r.progress_soal}/10 Soal</span>`;
          durasiDisplay = `<span class="text-xs font-mono ${r.livenessState === 'live' ? 'text-emerald-400 font-bold' : 'text-slate-400'}">${r.livenessText}</span>`;
          aksiButton = `
            <div class="flex items-center justify-center gap-1">
              <button onclick="forceSubmitNilaiSiswa('${r.nis}', '${r.kode_pertemuan}', '${r.mapel}', ${r.skor}, ${r.jumlah_soal}, ${r.jumlah_benar}, ${r.jumlah_salah})" title="Kumpulkan paksa ujian siswa ini dengan jawaban yang ada" class="px-2 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-bold transition shadow flex items-center gap-1">
                <i class="fa-solid fa-file-arrow-up text-[10px]"></i> Kumpulkan
              </button>
              <button onclick="resetNilaiSiswa('${r.nis}', '${r.kode_pertemuan}', '${r.mapel}')" title="Reset sesi pengerjaan siswa" class="px-2 py-1 bg-rose-700/80 hover:bg-rose-600 text-white rounded text-xs font-bold transition shadow">
                <i class="fa-solid fa-rotate-left text-[10px]"></i>
              </button>
            </div>
          `;
        } else {
          // 'belum'
          trBg = 'bg-rose-950/15 hover:bg-rose-900/25';
          skorDisplay = `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-rose-900/40 text-rose-300 border border-rose-700/50">BELUM SUBMIT</span>`;
          detailDisplay = `<span class="text-xs text-slate-500 font-mono">0/10 Soal</span>`;
          durasiDisplay = `<span class="text-xs text-slate-500">-</span>`;
          aksiButton = `<span class="text-xs text-slate-500 italic">Menunggu</span>`;
        }

        const wib = formatWaktuWib(r.timestamp);
        let waktuCell = '';
        if (r.status === 'sudah') {
          waktuCell = wib ? `
            <div class="flex flex-col items-center justify-center leading-tight py-0.5">
              <span class="font-mono font-black text-amber-300 text-xs">${wib.jam}</span>
              <span class="font-mono text-[10px] text-slate-400 mt-0.5">${wib.tgl}</span>
            </div>
          ` : '<span class="text-xs text-slate-500 font-mono">-</span>';
        } else if (r.status === 'sedang') {
          waktuCell = wib ? `
            <div class="flex flex-col items-center justify-center leading-tight py-0.5">
              <span class="font-mono font-bold text-cyan-300 text-xs">${wib.jam}</span>
              <span class="font-mono text-[9px] text-cyan-500/90 mt-0.5"><i class="fa-solid fa-bolt mr-0.5"></i> Live Aktif</span>
            </div>
          ` : '<span class="text-xs text-cyan-400 font-mono italic">Sedang Mengerjakan</span>';
        } else {
          waktuCell = '<span class="text-xs text-slate-500 font-mono">-</span>';
        }

        const namaMapel = (typeof NAMA_MAPEL !== 'undefined' && NAMA_MAPEL[r.mapel]) ? NAMA_MAPEL[r.mapel] : (r.mapel || 'Wajib');

        const tglCell = (wib && r.status !== 'belum') ? `<span class="text-xs font-mono text-slate-300">${wib.tgl}</span>` : '<span class="text-xs text-slate-500 font-mono">-</span>';
        let jamCell = '';
        if (r.status === 'sudah') {
          jamCell = wib ? `<span class="font-mono font-black text-amber-300 text-xs">${wib.jam}</span>` : '<span class="text-xs text-slate-500 font-mono">-</span>';
        } else if (r.status === 'sedang') {
          jamCell = wib ? `<span class="font-mono font-bold text-cyan-300 text-xs">${wib.jam}</span>` : '<span class="text-xs text-cyan-400 font-mono italic">Live</span>';
        } else {
          jamCell = '<span class="text-xs text-slate-500 font-mono">-</span>';
        }

        return `
          <tr class="border-b border-slate-700 ${trBg} transition">
            <td class="border border-slate-700 px-3 py-2.5 font-mono text-xs font-bold text-slate-300">${r.nis}</td>
            <td class="border border-slate-700 px-3 py-2.5 font-semibold text-slate-100">${r.nama}</td>
            <td class="border border-slate-700 px-3 py-2.5 text-center text-xs text-amber-300 font-bold">${r.kelas}</td>
            <td class="border border-slate-700 px-3 py-2.5 text-center text-xs uppercase text-slate-300">${namaMapel}</td>
            <td class="border border-slate-700 px-3 py-2.5 text-center text-xs font-mono font-bold text-cyan-300">${r.kode_pertemuan || '-'}</td>
            <td class="border border-slate-700 px-3 py-2.5 text-center">${skorDisplay}</td>
            <td class="border border-slate-700 px-3 py-2.5 text-center">${detailDisplay}</td>
            <td class="border border-slate-700 px-3 py-2.5 text-center">${durasiDisplay}</td>
            <td class="border border-slate-700 px-3 py-2.5 text-center">${tglCell}</td>
            <td class="border border-slate-700 px-3 py-2.5 text-center">${jamCell}</td>
            <td class="border border-slate-700 px-3 py-2.5 text-center">${aksiButton}</td>
          </tr>
        `;
      }).join('');
    }

    async function resetNilaiSiswa(nis, kodePertemuan, mapel) {
        const std = (typeof STUDENTS_DATA !== 'undefined' && STUDENTS_DATA[nis]) ? STUDENTS_DATA[nis] : null;
        const namaSiswa = std ? std.nama : ('Siswa ' + nis);
        const infoPaket = kodePertemuan ? ` paket ${kodePertemuan} (${mapel || 'wajib'})` : '';
        
        if (!confirm(`Apakah Bapak yakin ingin mereset nilai untuk ${namaSiswa} (${nis})${infoPaket}?\n\nData nilai di Cloud SQL dan riwayat pengerjaan siswa akan dihapus, sehingga siswa dapat mengerjakan ulang dari awal.`)) {
            return;
        }

        // 1. Hapus dari Database Supabase Cloud
        if (supabaseClient) {
            try {
                let qNilai = supabaseClient.from('nilai_cbt').delete().eq('nis', String(nis));
                let qLive = supabaseClient.from('cbt_live_answers').delete().eq('nis', String(nis));
                
                if (kodePertemuan) {
                    qNilai = qNilai.eq('kode_pertemuan', String(kodePertemuan));
                    qLive = qLive.eq('kode_pertemuan', String(kodePertemuan));
                }
                if (mapel) {
                    qNilai = qNilai.eq('mapel', String(mapel));
                    qLive = qLive.eq('mapel', String(mapel));
                }

                const [resNilai, resLive] = await Promise.all([qNilai, qLive]);
                if (resNilai.error) console.warn('Supabase delete nilai error:', resNilai.error);
                if (resLive.error) console.warn('Supabase delete live error:', resLive.error);
                console.log('✅ Supabase delete records success for NIS:', nis);
            } catch (e) {
                console.warn('Supabase delete exception:', e);
            }
        }

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
                localStorage.removeItem(`cbt_draft_v1_${nis}_${mapel}_${kodePertemuan}`);
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
    

    async function forceSubmitNilaiSiswa(nis, kodePertemuan, mapel, skor, jumlahSoal, jumlahBenar, jumlahSalah) {
      const std = (typeof STUDENTS_DATA !== 'undefined' && STUDENTS_DATA[nis]) ? STUDENTS_DATA[nis] : null;
      const namaSiswa = std ? std.nama : ('Siswa ' + nis);
      const kelas = std ? std.kelas : 'XII';

      if (!confirm(`Apakah Bapak yakin ingin mengumpulkan paksa ujian untuk ${namaSiswa} (${nis}) paket ${kodePertemuan}?

- Skor Terhitung: ${skor}/100
- Butir Terjawab: ${jumlahBenar + jumlahSalah}/${jumlahSoal}

Nilai ini akan langsung dikunci sebagai nilai resmi di Supabase.`)) {
        return;
      }

      if (supabaseClient) {
        try {
          // 1. Simpan ke nilai_cbt
          const resUpsert = await supabaseClient.from('nilai_cbt').upsert({
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
          }, { onConflict: 'nis,mapel,kode_pertemuan' });

          // 2. Bersihkan dari cbt_live_answers
          await supabaseClient.from('cbt_live_answers').delete().match({
            nis: String(nis),
            mapel: String(mapel || 'wajib'),
            kode_pertemuan: String(kodePertemuan)
          });

          alert(`✅ Ujian ${namaSiswa} berhasil dikumpulkan paksa! Nilai resmi ${skor}/100 telah tercatat.`);
          tarikNilaiDariCloud(false);
        } catch (e) {
          console.error("Force submit error:", e);
          alert("Gagal melakukan pengumpulan paksa. Silakan periksa koneksi internet.");
        }
      }
    }
