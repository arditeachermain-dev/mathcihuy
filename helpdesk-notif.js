// helpdesk-notif.js
// Sistem Helpdesk Siswa, Pusat Notifikasi, dan Peringatan Integritas Terintegrasi
// Zero-Bug • Zero-Dependency • Notion Warm Paper Aesthetic • Anti-Spam & Anti-Bot Protection
// Portal Pembelajaran Matematika • Mr. Ardi (TP 2026/2027)

(function () {
  'use strict';

  let _notifPollingTimer = null;
  let _lastNotifData = [];
  let _unreadCount = 0;

  // =========================================================================
  // 1. HELPER SESSION & HEADERS
  // =========================================================================
  function getActiveSession() {
    try {
      if (typeof window.getSession === 'function') {
        return window.getSession();
      }
      const raw = localStorage.getItem('portal_session');
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function getRequestHeaders() {
    const headers = { 'Content-Type': 'application/json' };
    const sess = getActiveSession();
    const token = (sess && (sess.token || (sess.data && sess.data.token))) || '';
    if (token) {
      headers['Authorization'] = 'Bearer ' + token;
    }
    return headers;
  }

  // =========================================================================
  // 2. MODAL LAPOR KENDALA (STUDENT HELPDESK)
  // =========================================================================
  window.openLaporModal = function (prefilledCategory, prefilledNote) {
    const sess = getActiveSession();
    if (!sess) {
      alert('Silakan login terlebih dahulu untuk mengakses layanan lapor kendala guru.');
      if (typeof window.openLoginModal === 'function') {
        window.openLoginModal();
      }
      return;
    }

    const modal = document.getElementById('modal-lapor-kendala');
    if (!modal) return;

    // Reset Form
    const form = document.getElementById('form-lapor-kendala');
    if (form) form.reset();

    // Auto-detect paket aktif
    const activeMapel = window.currentSubject || (typeof tkaSubj !== 'undefined' ? tkaSubj : 'wajib');
    const activePkg = window.currentPkgId || (typeof tkaMeeting !== 'undefined' ? tkaMeeting : '');

    const mapelInput = document.getElementById('lapor-input-mapel');
    const kodeInput = document.getElementById('lapor-input-kode');
    const badgePaket = document.getElementById('lapor-badge-paket-aktif');

    if (mapelInput) mapelInput.value = activeMapel;
    if (kodeInput) kodeInput.value = activePkg;
    if (badgePaket) {
      badgePaket.textContent = activePkg ? `${String(activeMapel).toUpperCase()} • ${activePkg}` : 'Di Luar Paket Ujian';
    }

    // Prefill jika diarahkan dari Integrity Warning
    if (prefilledCategory) {
      const catSelect = document.getElementById('lapor-select-kategori');
      if (catSelect) catSelect.value = prefilledCategory;
    }
    if (prefilledNote) {
      const pesanInput = document.getElementById('lapor-textarea-pesan');
      if (pesanInput) pesanInput.value = prefilledNote;
    }

    // Update Telemetry Display
    const uaShort = navigator.userAgent.includes('Android') ? 'Android' : (navigator.userAgent.includes('iPhone') ? 'iPhone' : 'Komputer / Laptop');
    const telemetriBadge = document.getElementById('lapor-telemetri-badge');
    if (telemetriBadge) {
      telemetriBadge.textContent = `${uaShort} • Layar ${window.innerWidth}x${window.innerHeight}`;
    }

    // Update karakter counter
    updateLaporCharCount();

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  };

  window.closeLaporModal = function () {
    const modal = document.getElementById('modal-lapor-kendala');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  };

  function updateLaporCharCount() {
    const textarea = document.getElementById('lapor-textarea-pesan');
    const counter = document.getElementById('lapor-char-counter');
    if (!textarea || !counter) return;
    const len = textarea.value.length;
    counter.textContent = `${len}/500`;
    if (len > 450) {
      counter.classList.add('text-amber-600', 'font-bold');
    } else {
      counter.classList.remove('text-amber-600', 'font-bold');
    }
  }

  window.handleLaporTextareaInput = updateLaporCharCount;

  window.submitLaporKendala = async function (e) {
    if (e) e.preventDefault();

    const sess = getActiveSession();
    if (!sess) {
      alert('Sesi login telah berakhir. Silakan login kembali.');
      return;
    }

    // A. Cek Honeypot Trap
    const honeypot = document.getElementById('lapor-honeypot');
    if (honeypot && honeypot.value.trim() !== '') {
      // Diam-diam tutup modal
      window.closeLaporModal();
      alert('Laporan Anda telah tercatat.');
      return;
    }

    const kategori = document.getElementById('lapor-select-kategori')?.value || 'lainnya';
    const mapel = document.getElementById('lapor-input-mapel')?.value || '';
    const kode_pertemuan = document.getElementById('lapor-input-kode')?.value || '';
    const pesan = document.getElementById('lapor-textarea-pesan')?.value || '';

    if (pesan.trim().length < 5) {
      alert('Mohon tuliskan penjelasan kendala minimal 5 karakter agar dapat ditindaklanjuti guru.');
      return;
    }

    // Hitung antrean outbox lokal jika ada
    let outboxLen = 0;
    try {
      const rawOutbox = localStorage.getItem('cbt_pending_outbox_queue_v2');
      if (rawOutbox) outboxLen = JSON.parse(rawOutbox).length;
    } catch (err) {}

    const btnSubmit = document.getElementById('lapor-btn-submit');
    const originalText = btnSubmit ? btnSubmit.innerHTML : 'Kirim Laporan';
    if (btnSubmit) {
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Mengirim...';
    }

    try {
      const res = await fetch('/api/lapor', {
        method: 'POST',
        headers: getRequestHeaders(),
        body: JSON.stringify({
          nis: (sess.data && sess.data.nis) || sess.nis,
          kategori,
          mapel,
          kode_pertemuan,
          pesan,
          screen: `${window.innerWidth}x${window.innerHeight}`,
          outbox_len: outboxLen,
          timestamp_client: new Date().toISOString()
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        window.closeLaporModal();
        alert(`✅ ${data.message || 'Laporan berhasil dikirim ke Pak Ardi!'}`);
        // Refresh notifikasi segera
        setTimeout(window.fetchNotifikasi, 1500);
      } else {
        alert(`⚠️ ${data.error || 'Gagal mengirim laporan kendala.'}`);
      }
    } catch (err) {
      alert('Terjadi gangguan koneksi saat mengirim laporan. Silakan periksa jaringan Anda.');
    } finally {
      if (btnSubmit) {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = originalText;
      }
    }
  };

  // =========================================================================
  // 3. PUSAT NOTIFIKASI SISWA & BROADCAST GURU
  // =========================================================================
  window.toggleNotifikasiModal = function () {
    const modal = document.getElementById('modal-notifikasi');
    if (!modal) return;
    const isHidden = modal.classList.contains('hidden');
    if (isHidden) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      window.fetchNotifikasi();
    } else {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };

  window.closeNotifikasiModal = function () {
    const modal = document.getElementById('modal-notifikasi');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  };

  window.fetchNotifikasi = async function () {
    const sess = getActiveSession();
    if (!sess) {
      updateNotifBadgeUI(0);
      return;
    }

    try {
      const res = await fetch('/api/notifikasi', {
        headers: getRequestHeaders()
      });
      if (!res.ok) return;

      const data = await res.json();
      if (data.success) {
        _lastNotifData = data.notifications || [];
        _unreadCount = data.unread_count || 0;
        updateNotifBadgeUI(_unreadCount);
        renderNotifikasiList(_lastNotifData);
      }
    } catch (e) {}
  };

  function updateNotifBadgeUI(count) {
    const badge = document.getElementById('notif-badge-count');
    if (!badge) return;
    if (count > 0) {
      badge.textContent = count > 9 ? '9+' : String(count);
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }

  function renderNotifikasiList(list) {
    const container = document.getElementById('notifikasi-list-container');
    if (!container) return;

    if (!list || list.length === 0) {
      container.innerHTML = `
        <div class="p-8 text-center" style="color: #787774;">
          <i class="fa-regular fa-bell-slash text-3xl mb-2.5 opacity-60"></i>
          <p class="text-xs font-semibold">Belum ada notifikasi baru</p>
          <p class="text-[11px] mt-1 opacity-80">Pemberitahuan guru & pembaruan nilai akan muncul di sini.</p>
        </div>
      `;
      return;
    }

    const typeIcons = {
      balasan_guru: { icon: 'fa-solid fa-comment-dots', color: '#10B981', bg: '#ECFDF5', label: 'Balasan Pak Ardi' },
      info: { icon: 'fa-solid fa-bullhorn', color: '#0284C7', bg: '#F0F9FF', label: 'Pengumuman Resmi' },
      warning: { icon: 'fa-solid fa-triangle-exclamation', color: '#F59E0B', bg: '#FFFBEB', label: 'Pemberitahuan Sistem' },
      success: { icon: 'fa-solid fa-circle-check', color: '#059669', bg: '#ECFDF5', label: 'Verifikasi Berhasil' }
    };

    let html = '';
    list.forEach(n => {
      const isUnread = Number(n.is_read) === 0;
      const tInfo = typeIcons[n.tipe] || typeIcons.info;
      const tgl = n.created_at ? new Date(n.created_at).toLocaleString('id-ID', {
        day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
      }) : '';

      html += `
        <div class="p-3.5 rounded-xl border transition-all ${isUnread ? 'shadow-sm' : 'opacity-85'}" 
             style="background-color: ${isUnread ? '#FFFFFF' : '#FBFBFA'}; border-color: ${isUnread ? '#D3CFBE' : '#E8E6DF'};">
          <div class="flex items-start gap-2.5">
            <div class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5" 
                 style="background-color: ${tInfo.bg}; color: ${tInfo.color};">
              <i class="${tInfo.icon} text-xs"></i>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded" 
                      style="background-color: ${tInfo.bg}; color: ${tInfo.color};">
                  ${tInfo.label}
                </span>
                <span class="text-[10px] font-mono shrink-0" style="color: #787774;">${tgl}</span>
              </div>
              <h4 class="text-xs font-bold leading-snug mb-1" style="color: #2F3437;">${escapeHtml(n.judul)}</h4>
              <p class="text-[11px] leading-relaxed whitespace-pre-line" style="color: #5F5E5B;">${escapeHtml(n.pesan)}</p>
              ${isUnread ? `
                <div class="mt-2.5 flex justify-end">
                  <button onclick="window.markNotifikasiSingle(${n.id})" 
                          class="text-[10px] font-semibold px-2 py-1 rounded hover:underline cursor-pointer flex items-center gap-1" 
                          style="color: #1B4F8B;">
                    <i class="fa-solid fa-check text-[9px]"></i> Tandai sudah dibaca
                  </button>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  window.markNotifikasiSingle = async function (id) {
    try {
      await fetch('/api/notifikasi', {
        method: 'POST',
        headers: getRequestHeaders(),
        body: JSON.stringify({ action: 'mark_read', id })
      });
      window.fetchNotifikasi();
    } catch (e) {}
  };

  window.markAllNotifikasiRead = async function () {
    try {
      await fetch('/api/notifikasi', {
        method: 'POST',
        headers: getRequestHeaders(),
        body: JSON.stringify({ action: 'mark_read' })
      });
      window.fetchNotifikasi();
    } catch (e) {}
  };

  // =========================================================================
  // 4. DIALOG PERINGATAN INTEGRITAS (INTEGRITY COOLDOWN GUARD)
  // =========================================================================
  window.showIntegrityWarningDialog = function (message, contextData) {
    const modal = document.getElementById('modal-integrity-warning');
    if (!modal) {
      alert(message || 'Peringatan integritas pengerjaan.');
      return;
    }

    const descEl = document.getElementById('integrity-warning-desc');
    if (descEl) {
      descEl.textContent = message || 'Sistem mendeteksi jeda pengumpulan paket terlalu singkat. Harap luangkan waktu untuk membaca pembahasan.';
    }

    // Set callback tombol lapor kendala jika siswa terkena bug HP
    const btnLapor = document.getElementById('integrity-btn-lapor');
    if (btnLapor) {
      btnLapor.onclick = function () {
        window.closeIntegrityWarningDialog();
        window.openLaporModal('reload_hp', 'Layar HP saya tadi reload/mati saat mengerjakan.');
      };
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  };

  window.closeIntegrityWarningDialog = function () {
    const modal = document.getElementById('modal-integrity-warning');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  };

  // =========================================================================
  // 5. PANEL GURU: KELOLA TIKET LAPORAN SISWA & BROADCAST PENGUMUMAN
  // =========================================================================
  window.loadGuruLaporanList = async function (filterStatus) {
    const container = document.getElementById('guru-laporan-table-body');
    if (!container) return;

    container.innerHTML = '<tr><td colspan="6" class="p-4 text-center text-slate-400"><i class="fa-solid fa-spinner fa-spin mr-1.5"></i> Memuat antrean laporan siswa...</td></tr>';

    try {
      const res = await fetch(`/api/lapor?status=${encodeURIComponent(filterStatus || 'semua')}`, {
        headers: getRequestHeaders()
      });
      if (!res.ok) {
        container.innerHTML = '<tr><td colspan="6" class="p-4 text-center text-rose-400">Gagal memuat tiket laporan (Pastikan sesi guru aktif).</td></tr>';
        return;
      }

      const data = await res.json();
      const reports = data.reports || [];

      // Update badge pending di tab guru
      const badgePending = document.getElementById('guru-pending-laporan-badge');
      if (badgePending) {
        badgePending.textContent = data.total_pending || 0;
      }

      if (reports.length === 0) {
        container.innerHTML = '<tr><td colspan="6" class="p-6 text-center text-slate-400"><i class="fa-regular fa-circle-check text-2xl text-emerald-400 mb-2"></i><br>Tidak ada tiket laporan kendala yang tertunda. Semua bersih!</td></tr>';
        return;
      }

      let html = '';
      reports.forEach((r, idx) => {
        const isPending = r.status === 'pending';
        const statusBadge = isPending 
          ? '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">Menunggu</span>'
          : '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Selesai</span>';

        const tgl = r.waktu_lapor ? new Date(r.waktu_lapor).toLocaleString('id-ID', {
          day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
        }) : '-';

        let diag = '';
        try {
          const t = JSON.parse(r.telemetri_client || '{}');
          diag = `${t.ua || 'Client'} (${t.screen || ''})`;
        } catch(e) { diag = '-'; }

        html += `
          <tr class="hover:bg-slate-800/50 transition">
            <td class="p-2.5 text-center font-mono text-slate-400">${idx + 1}</td>
            <td class="p-2.5 font-mono text-slate-300">${escapeHtml(r.nis)}</td>
            <td class="p-2.5">
              <div class="font-bold text-white text-xs">${escapeHtml(r.nama)}</div>
              <div class="text-[10px] text-amber-400 font-mono">${escapeHtml(r.kelas)}</div>
            </td>
            <td class="p-2.5">
              <div class="text-xs font-semibold text-slate-200">${escapeHtml(r.mapel || '-')} ${escapeHtml(r.kode_pertemuan || '')}</div>
              <span class="text-[10px] text-sky-400">${escapeHtml(r.kategori)}</span>
            </td>
            <td class="p-2.5">
              <div class="text-xs text-slate-300 leading-relaxed mb-1 max-w-sm whitespace-pre-wrap">${escapeHtml(r.pesan)}</div>
              <div class="text-[10px] text-slate-500 font-mono"><i class="fa-solid fa-mobile-screen mr-1"></i>${escapeHtml(diag)} • ${tgl}</div>
              ${r.catatan_guru ? `<div class="mt-1 text-[11px] text-emerald-300 bg-emerald-950/40 p-1.5 rounded border border-emerald-800/50"><b>Balasan Guru:</b> ${escapeHtml(r.catatan_guru)}</div>` : ''}
            </td>
            <td class="p-2.5 text-center">
              <div class="flex flex-col items-center gap-1.5">
                ${statusBadge}
                ${isPending ? `
                  <button onclick="window.openBalasLaporanGuruModal(${r.id}, '${escapeHtml(r.nama)}', '${escapeHtml(r.nis)}')" 
                          class="px-2.5 py-1 rounded text-[11px] font-bold bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer transition shadow-sm">
                    <i class="fa-solid fa-reply mr-1"></i> Balas
                  </button>
                ` : `
                  <button onclick="window.openBalasLaporanGuruModal(${r.id}, '${escapeHtml(r.nama)}', '${escapeHtml(r.nis)}', '${escapeHtml(r.catatan_guru || '')}')" 
                          class="px-2 py-0.5 rounded text-[10px] text-slate-400 hover:text-white cursor-pointer transition">
                    Edit Balasan
                  </button>
                `}
              </div>
            </td>
          </tr>
        `;
      });

      container.innerHTML = html;

    } catch (err) {
      container.innerHTML = '<tr><td colspan="6" class="p-4 text-center text-rose-400">Terjadi kesalahan jaringan saat memuat laporan.</td></tr>';
    }
  };

  window.openBalasLaporanGuruModal = function (reportId, studentName, studentNis, existingNote) {
    const modal = document.getElementById('modal-balas-laporan-guru');
    if (!modal) return;

    document.getElementById('balas-laporan-id').value = reportId;
    document.getElementById('balas-laporan-target-nama').textContent = `${studentName} (${studentNis})`;
    document.getElementById('balas-laporan-catatan').value = existingNote || 'Laporan kendala Anda telah ditinjau dan diselesaikan oleh Pak Ardi. Nilai rapor Anda aman!';

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  };

  window.closeBalasLaporanGuruModal = function () {
    const modal = document.getElementById('modal-balas-laporan-guru');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  };

  window.submitBalasanGuru = async function () {
    const reportId = document.getElementById('balas-laporan-id')?.value;
    const catatan = document.getElementById('balas-laporan-catatan')?.value || '';
    const status = document.getElementById('balas-laporan-status')?.value || 'selesai';

    if (!reportId) return;

    try {
      const res = await fetch('/api/lapor', {
        method: 'PUT',
        headers: getRequestHeaders(),
        body: JSON.stringify({
          id: Number(reportId),
          status,
          catatan_guru: catatan
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        window.closeBalasLaporanGuruModal();
        alert('✅ Balasan berhasil disimpan dan notifikasi langsung dikirim ke siswa!');
        window.loadGuruLaporanList();
      } else {
        alert('⚠️ ' + (data.error || 'Gagal menyimpan balasan.'));
      }
    } catch (e) {
      alert('Terjadi kesalahan koneksi.');
    }
  };

  window.kirimBroadcastGuru = async function () {
    const judul = document.getElementById('broadcast-guru-judul')?.value || '';
    const pesan = document.getElementById('broadcast-guru-pesan')?.value || '';
    const tipe = document.getElementById('broadcast-guru-tipe')?.value || 'info';
    const targetNis = document.getElementById('broadcast-guru-nis')?.value || '';

    if (!judul || !pesan) {
      alert('Judul dan pesan broadcast wajib diisi!');
      return;
    }

    try {
      const res = await fetch('/api/notifikasi', {
        method: 'POST',
        headers: getRequestHeaders(),
        body: JSON.stringify({
          action: 'broadcast',
          judul,
          pesan,
          tipe,
          target_nis: targetNis.trim() || null
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        alert('✅ ' + data.message);
        document.getElementById('broadcast-guru-judul').value = '';
        document.getElementById('broadcast-guru-pesan').value = '';
        document.getElementById('broadcast-guru-nis').value = '';
      } else {
        alert('⚠️ ' + (data.error || 'Gagal mengirim broadcast.'));
      }
    } catch (e) {
      alert('Terjadi kesalahan jaringan.');
    }
  };

  window.toggleGuruHelpdeskView = function () {
    const cbtTable = document.getElementById('guru-results-table');
    const cbtView = cbtTable ? cbtTable.parentElement : null;
    const helpdeskView = document.getElementById('guru-helpdesk-view-container');
    const btn = document.getElementById('btn-guru-helpdesk-tab');
    if (!helpdeskView || !cbtView) return;

    const isHelpdeskOpen = !helpdeskView.classList.contains('hidden');
    if (isHelpdeskOpen) {
      helpdeskView.classList.add('hidden');
      helpdeskView.classList.remove('flex');
      cbtView.classList.remove('hidden');
      if (btn) {
        const badgePending = document.getElementById('guru-pending-laporan-badge');
        const cnt = badgePending ? badgePending.textContent : '0';
        btn.innerHTML = `<i class="fa-solid fa-headset"></i> Tiket Laporan (<span id="guru-pending-laporan-badge">${cnt}</span>)`;
      }
    } else {
      helpdeskView.classList.remove('hidden');
      helpdeskView.classList.add('flex');
      cbtView.classList.add('hidden');
      if (btn) {
        btn.innerHTML = `<i class="fa-solid fa-chart-column"></i> Kembali ke Monitoring CBT`;
      }
      window.loadGuruLaporanList('pending');
    }
  };

  window.openBroadcastModalGuru = function () {
    const modal = document.getElementById('modal-broadcast-guru');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  };

  window.closeBroadcastModalGuru = function () {
    const modal = document.getElementById('modal-broadcast-guru');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  };

  // Helper Sanitasi HTML Ringan
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // =========================================================================
  // 6. INISIALISASI SAAT DOM READY
  // =========================================================================
  function initHelpdesk() {
    window.fetchNotifikasi();

    // Polling notifikasi setiap 60 detik jika tab aktif
    if (!_notifPollingTimer) {
      _notifPollingTimer = setInterval(() => {
        if (!document.hidden) {
          window.fetchNotifikasi();
        }
      }, 60000);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHelpdesk);
  } else {
    initHelpdesk();
  }

})();
