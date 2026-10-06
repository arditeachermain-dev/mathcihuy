// ===========================================================================
// ANGKET REFLEKSI DIRI PEMAHAMAN MATEMATIKA KELAS XII (MATH CIHUY)
// Fitur Pengambilan Data Nyata Siswa untuk Praktikum Bab Statistika (P15 - P21)
// ===========================================================================

const ANGKET_QUESTIONS = [
  // KELOMPOK A: GEOMETRI DIMENSI TIGA
  {
    id: 1,
    cat: 'd3',
    catLabel: 'Geometri Dimensi Tiga',
    title: 'Visualisasi Bangun Ruang (Mata Pikiran)',
    desc: 'Seberapa mudah kamu membayangkan posisi titik, garis, dan bidang di dalam bangun ruang di kepalamu tanpa alat peraga fisik?',
    lowLabel: '1 = Gelap Gulita',
    highLabel: '10 = Sangat Jelas'
  },
  {
    id: 2,
    cat: 'd3',
    catLabel: 'Geometri Dimensi Tiga',
    title: 'Jarak Titik ke Garis (Proyeksi Tegak Lurus)',
    desc: 'Seberapa paham kamu menentukan titik proyeksi siku-siku dan menggunakan kesamaan luas segitiga / Pythagoras untuk mencari jarak titik ke garis?',
    lowLabel: '1 = Sangat Bingung',
    highLabel: '10 = Sangat Mahir'
  },
  {
    id: 3,
    cat: 'd3',
    catLabel: 'Geometri Dimensi Tiga',
    title: 'Jarak Titik ke Bidang (Teorema Sumbu Tembus)',
    desc: 'Seberapa yakin kamu mencari jarak titik sudut ke bidang diagonal (misal titik C ke bidang BDG, atau aturan 1/3 dan 2/3 diagonal ruang)?',
    lowLabel: '1 = Masih Menebak',
    highLabel: '10 = Sangat Yakin'
  },
  {
    id: 4,
    cat: 'd3',
    catLabel: 'Geometri Dimensi Tiga',
    title: 'Sudut dalam Ruang (Garis ke Bidang / Antar-Bidang)',
    desc: 'Seberapa jelas kamu menentukan segitiga siku-siku bantu untuk menghitung nilai perbandingan trigonometri (sin, cos, tan) sudut dalam ruang?',
    lowLabel: '1 = Sulit Menemukan',
    highLabel: '10 = Sangat Lancar'
  },

  // KELOMPOK B: KAIDAH PENCACAHAN & PELUANG
  {
    id: 5,
    cat: 'peluang',
    catLabel: 'Kaidah Pencacahan & Peluang',
    title: 'Prinsip Filling Slots & Aturan Perkalian',
    desc: 'Seberapa lancar kamu menyusun variasi angka/plat nomor/sandi PIN dengan syarat khusus (misal: genap, tanpa perulangan, nilai > 2.000)?',
    lowLabel: '1 = Sering Keliru',
    highLabel: '10 = Sangat Lancar'
  },
  {
    id: 6,
    cat: 'peluang',
    catLabel: 'Kaidah Pencacahan & Peluang',
    title: 'Membedakan Permutasi vs Kombinasi',
    desc: 'Seberapa peka kamu membedakan kapan urutan diperhatikan (pemilihan ketua/wakil) dan kapan urutan tidak diperhatikan (delegasi tim acak)?',
    lowLabel: '1 = Sering Tertukar',
    highLabel: '10 = Sangat Peka'
  },
  {
    id: 7,
    cat: 'peluang',
    catLabel: 'Kaidah Pencacahan & Peluang',
    title: 'Peluang Majemuk (Saling Lepas & Saling Bebas)',
    desc: 'Seberapa paham kamu membedakan kata hubung "ATAU" (penjumlahan/irisan) dengan kata hubung "DAN" (perkalian peluang saling bebas)?',
    lowLabel: '1 = Sering Ragu',
    highLabel: '10 = Sangat Paham'
  },
  {
    id: 8,
    cat: 'peluang',
    catLabel: 'Kaidah Pencacahan & Peluang',
    title: 'Peluang Bersyarat & Teorema Bayes',
    desc: 'Seberapa yakin kamu menghitung peluang pengambilan bertahap tanpa pengembalian, atau peluang jika suatu syarat sudah diketahui lebih dulu?',
    lowLabel: '1 = Masih Bingung',
    highLabel: '10 = Sangat Kuasai'
  },

  // KELOMPOK C: MENTALITAS & KESIAPAN TKA / UTBK
  {
    id: 9,
    cat: 'mental',
    catLabel: 'Kesiapan Mental & HOTS',
    title: 'Ketahanan Soal Kecukupan Data (Data Sufficiency)',
    desc: 'Seberapa tenang dan tidak panik kamu ketika membaca soal tipe UTBK: "Apakah pernyataan (1) SAJA cukup, atau (2) SAJA cukup untuk menjawab?"',
    lowLabel: '1 = Panik / Tebak Saja',
    highLabel: '10 = Tenang & Analitis'
  },
  {
    id: 10,
    cat: 'mental',
    catLabel: 'Kesiapan Mental & HOTS',
    title: 'Keyakinan Diri Menembus Target TKA / SNBT',
    desc: 'Secara keseluruhan, seberapa besar keyakinan dalam hatimu saat ini bahwa kamu mampu menembus skor target Matematika TKA & SNBT 2027?',
    lowLabel: '1 = Ragu-ragu',
    highLabel: '10 = Sangat Optimis'
  }
];

// State penampung jawaban siswa
let angketAnswers = {
  q1: 0, q2: 0, q3: 0, q4: 0, q5: 0,
  q6: 0, q7: 0, q8: 0, q9: 0, q10: 0,
  catatan: ''
};

// Ambil info sesi siswa yang sedang aktif
function getActiveStudentInfo() {
  let sess = null;
  try {
    sess = JSON.parse(localStorage.getItem('portal_session') || 'null');
  } catch (e) {}

  if (sess && sess.data && sess.data.nis) {
    return {
      nis: String(sess.data.nis),
      nama: sess.data.nama || sess.data.name || 'Siswa',
      kelas: sess.data.kelas || '12 F1'
    };
  }

  // Fallback ke input modal jika belum login
  const nisInput = document.getElementById('angket-input-nis');
  const namaInput = document.getElementById('angket-input-nama');
  const kelasInput = document.getElementById('angket-input-kelas');

  return {
    nis: nisInput ? nisInput.value.trim() : '',
    nama: namaInput ? namaInput.value.trim() : '',
    kelas: kelasInput ? kelasInput.value : '12 F1'
  };
}

// Buka Modal Angket Refleksi
async function openAngketModal() {
  const modal = document.getElementById('modal-angket-refleksi');
  if (!modal) return;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // Isi data identitas otomatis
  let sess = null;
  try {
    sess = JSON.parse(localStorage.getItem('portal_session') || 'null');
  } catch (e) {}

  const nisEl = document.getElementById('angket-input-nis');
  const namaEl = document.getElementById('angket-input-nama');
  const kelasEl = document.getElementById('angket-input-kelas');
  const identityLockMsg = document.getElementById('angket-identity-locked-msg');

  if (sess && sess.data && sess.data.nis) {
    if (nisEl) { nisEl.value = sess.data.nis; nisEl.readOnly = true; }
    if (namaEl) { namaEl.value = sess.data.nama || sess.data.name || ''; namaEl.readOnly = true; }
    if (kelasEl) { kelasEl.value = sess.data.kelas || '12 F1'; kelasEl.disabled = true; }
    if (identityLockMsg) identityLockMsg.classList.remove('hidden');
    
    // Muat data lama jika sudah pernah mengisi
    await fetchExistingAngket(sess.data.nis);
  } else {
    if (nisEl) { nisEl.readOnly = false; }
    if (namaEl) { namaEl.readOnly = false; }
    if (kelasEl) { kelasEl.disabled = false; }
    if (identityLockMsg) identityLockMsg.classList.add('hidden');
  }

  renderAngketQuestions();
  updateAngketSummaryPreview();
}

// Tutup Modal Angket
function closeAngketModal() {
  const modal = document.getElementById('modal-angket-refleksi');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Render 10 Butir Pertanyaan Angket
function renderAngketQuestions() {
  const container = document.getElementById('angket-questions-container');
  if (!container) return;

  let html = '';
  let currentCat = '';

  ANGKET_QUESTIONS.forEach((q, idx) => {
    // Header Kategori jika berganti kelompok
    if (q.cat !== currentCat) {
      currentCat = q.cat;
      const catColor = currentCat === 'd3' ? 'border-sky-200 bg-sky-50 text-sky-800' :
                       currentCat === 'peluang' ? 'border-emerald-200 bg-emerald-50 text-emerald-800' :
                       'border-amber-200 bg-amber-50 text-amber-800';
      const catIcon = currentCat === 'd3' ? 'fa-shapes' :
                      currentCat === 'peluang' ? 'fa-dice' : 'fa-brain';

      html += `
        <div class="pt-4 pb-1">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-lg border text-xs font-bold uppercase tracking-wider ${catColor}">
            <i class="fa-solid ${catIcon}"></i>
            <span>${q.catLabel}</span>
          </div>
        </div>
      `;
    }

    const currentVal = angketAnswers[`q${q.id}`] || 0;

    html += `
      <div class="p-4 rounded-xl border border-[#E8E6DF] bg-white shadow-sm space-y-3 transition-all hover:border-[#D3CFBE]">
        <div class="flex items-start justify-between gap-3">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-[#2E384D] text-white flex items-center justify-center text-xs font-mono font-bold shrink-0">
                ${q.id}
              </span>
              <h4 class="text-sm font-bold text-[#2F3437]">${q.title}</h4>
            </div>
            <p class="text-xs text-[#787774] leading-relaxed pl-8">${q.desc}</p>
          </div>
          <div class="shrink-0 text-right">
            <span id="score-badge-${q.id}" class="inline-block px-2.5 py-1 rounded-lg text-xs font-mono font-bold ${getScoreBadgeClass(currentVal)}">
              ${currentVal > 0 ? `${currentVal} / 10` : 'Belum Diisi'}
            </span>
          </div>
        </div>

        <!-- 10 BUTTON SELECTOR STRIP -->
        <div class="pl-8 pt-1">
          <div class="grid grid-cols-10 gap-1 sm:gap-1.5">
            ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => `
              <button type="button" onclick="selectAngketRating(${q.id}, ${num})"
                      id="btn-q${q.id}-${num}"
                      class="h-9 sm:h-10 rounded-lg text-xs font-bold font-mono transition-all flex items-center justify-center border cursor-pointer ${
                        currentVal === num ? getActiveBtnClass(num) : 'bg-[#F7F6F3] border-[#E8E6DF] text-[#5F5E5B] hover:bg-[#E8E6DF] hover:text-[#2F3437]'
                      }">
                ${num}
              </button>
            `).join('')}
          </div>
          <div class="flex justify-between text-[11px] text-[#A09D95] mt-1.5 font-medium px-0.5">
            <span>${q.lowLabel}</span>
            <span id="label-desc-${q.id}" class="font-semibold text-xs text-[#2F3437]">${getRatingMeaning(currentVal)}</span>
            <span>${q.highLabel}</span>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Helper arti nilai 1-10
function getRatingMeaning(val) {
  if (val <= 0) return '';
  if (val <= 3) return 'Sangat Sulit / Bingung (1-3)';
  if (val <= 6) return 'Cukup / Ragu-ragu (4-6)';
  if (val <= 8) return 'Bisa & Menguasai (7-8)';
  return 'Sangat Mahir & Percaya Diri (9-10)';
}

function getActiveBtnClass(val) {
  if (val <= 3) return 'bg-rose-600 text-white border-rose-700 shadow-sm ring-2 ring-rose-300';
  if (val <= 6) return 'bg-amber-500 text-white border-amber-600 shadow-sm ring-2 ring-amber-300';
  if (val <= 8) return 'bg-sky-600 text-white border-sky-700 shadow-sm ring-2 ring-sky-300';
  return 'bg-emerald-600 text-white border-emerald-700 shadow-sm ring-2 ring-emerald-300';
}

function getScoreBadgeClass(val) {
  if (val <= 0) return 'bg-gray-100 text-gray-500 border border-gray-200';
  if (val <= 3) return 'bg-rose-50 text-rose-700 border border-rose-200';
  if (val <= 6) return 'bg-amber-50 text-amber-700 border border-amber-200';
  if (val <= 8) return 'bg-sky-50 text-sky-700 border border-sky-200';
  return 'bg-emerald-50 text-emerald-700 border border-emerald-200';
}

// Siswa Memilih Rating
function selectAngketRating(qId, val) {
  angketAnswers[`q${qId}`] = val;

  // Update button classes
  for (let num = 1; num <= 10; num++) {
    const btn = document.getElementById(`btn-q${qId}-${num}`);
    if (btn) {
      if (num === val) {
        btn.className = `h-9 sm:h-10 rounded-lg text-xs font-bold font-mono transition-all flex items-center justify-center border cursor-pointer ${getActiveBtnClass(val)}`;
      } else {
        btn.className = 'h-9 sm:h-10 rounded-lg text-xs font-bold font-mono transition-all flex items-center justify-center border cursor-pointer bg-[#F7F6F3] border-[#E8E6DF] text-[#5F5E5B] hover:bg-[#E8E6DF] hover:text-[#2F3437]';
      }
    }
  }

  // Update badge & desc
  const badge = document.getElementById(`score-badge-${qId}`);
  if (badge) {
    badge.textContent = `${val} / 10`;
    badge.className = `inline-block px-2.5 py-1 rounded-lg text-xs font-mono font-bold ${getScoreBadgeClass(val)}`;
  }

  const desc = document.getElementById(`label-desc-${qId}`);
  if (desc) {
    desc.textContent = getRatingMeaning(val);
  }

  updateAngketSummaryPreview();
}

// Hitung Pratinjau Rerata Realtime
function updateAngketSummaryPreview() {
  const q = angketAnswers;
  const d3Sum = (q.q1 || 0) + (q.q2 || 0) + (q.q3 || 0) + (q.q4 || 0);
  const d3Filled = [q.q1, q.q2, q.q3, q.q4].filter(v => v > 0).length;
  const avgD3 = d3Filled > 0 ? (d3Sum / 4).toFixed(1) : '0.0';

  const pelSum = (q.q5 || 0) + (q.q6 || 0) + (q.q7 || 0) + (q.q8 || 0);
  const pelFilled = [q.q5, q.q6, q.q7, q.q8].filter(v => v > 0).length;
  const avgPel = pelFilled > 0 ? (pelSum / 4).toFixed(1) : '0.0';

  const mentalSum = (q.q9 || 0) + (q.q10 || 0);
  const mentalFilled = [q.q9, q.q10].filter(v => v > 0).length;
  const avgMental = mentalFilled > 0 ? (mentalSum / 2).toFixed(1) : '0.0';

  const allFilled = [q.q1, q.q2, q.q3, q.q4, q.q5, q.q6, q.q7, q.q8, q.q9, q.q10].filter(v => v > 0).length;
  const totalSum = d3Sum + pelSum + mentalSum;
  const avgTotal = allFilled > 0 ? (totalSum / 10).toFixed(1) : '0.0';

  const previewD3 = document.getElementById('preview-avg-d3');
  if (previewD3) previewD3.textContent = `${avgD3} / 10`;

  const previewPel = document.getElementById('preview-avg-peluang');
  if (previewPel) previewPel.textContent = `${avgPel} / 10`;

  const previewMental = document.getElementById('preview-avg-mental');
  if (previewMental) previewMental.textContent = `${avgMental} / 10`;

  const previewTot = document.getElementById('preview-avg-total');
  if (previewTot) previewTot.textContent = `${avgTotal} / 10`;

  const progressEl = document.getElementById('angket-progress-count');
  if (progressEl) progressEl.textContent = `${allFilled} dari 10 Pertanyaan Terisi`;
}

// Muat data angket sebelumnya (jika ada)
async function fetchExistingAngket(nis) {
  try {
    const res = await fetch(`/api/angket?nis=${encodeURIComponent(nis)}`);
    if (!res.ok) return;
    const data = await res.json();
    if (data && data.nis) {
      for (let i = 1; i <= 10; i++) {
        if (data[`q${i}`]) angketAnswers[`q${i}`] = Number(data[`q${i}`]);
      }
      angketAnswers.catatan = data.catatan || '';
      const catEl = document.getElementById('angket-input-catatan');
      if (catEl) catEl.value = angketAnswers.catatan;

      const alertBox = document.getElementById('angket-already-filled-alert');
      if (alertBox) {
        alertBox.classList.remove('hidden');
        alertBox.innerHTML = `
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-circle-check text-emerald-600"></i>
            <span>Kamu sudah pernah mengisi angket ini pada <strong>${new Date(data.updated_at || data.created_at).toLocaleString('id-ID')}</strong>. Kamu dapat memperbarui nilaimu kapan saja di bawah ini.</span>
          </div>
        `;
      }
    }
  } catch (e) {
    console.warn("Gagal fetch existing angket:", e);
  }
}

// Submit Angket ke Server
async function submitAngketRefleksi() {
  const student = getActiveStudentInfo();
  if (!student.nis || !student.nama) {
    alert("Mohon lengkapi NIS dan Nama Lengkap terlebih dahulu.");
    return;
  }

  // Cek apakah seluruh 10 soal sudah dijawab
  for (let i = 1; i <= 10; i++) {
    if (!angketAnswers[`q${i}`] || angketAnswers[`q${i}`] < 1) {
      alert(`Pertanyaan No. ${i} belum diisi. Mohon berikan nilai 1 sampai 10.`);
      const el = document.getElementById(`score-badge-${i}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
  }

  const catEl = document.getElementById('angket-input-catatan');
  const catatan = catEl ? catEl.value.trim() : '';

  const submitBtn = document.getElementById('btn-submit-angket');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...';
  }

  try {
    const payload = {
      nis: student.nis,
      nama: student.nama,
      kelas: student.kelas,
      q1: angketAnswers.q1,
      q2: angketAnswers.q2,
      q3: angketAnswers.q3,
      q4: angketAnswers.q4,
      q5: angketAnswers.q5,
      q6: angketAnswers.q6,
      q7: angketAnswers.q7,
      q8: angketAnswers.q8,
      q9: angketAnswers.q9,
      q10: angketAnswers.q10,
      catatan: catatan
    };

    const res = await fetch('/api/angket', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const resData = await res.json();
    if (!res.ok) {
      throw new Error(resData.error || 'Gagal menyimpan angket');
    }

    // Tampilkan notifikasi sukses
    alert(`Alhamdulillah! Refleksi pemahaman matematika kamu berhasil disimpan.\n\n` +
          `• Rerata Dimensi Tiga: ${resData.summary.skor_d3}/10\n` +
          `• Rerata Peluang: ${resData.summary.skor_peluang}/10\n` +
          `• Skor Total Refleksi: ${resData.summary.skor_total}/10\n\n` +
          `Data ini akan digunakan untuk praktikum Bab Statistika di kelas!`);

    closeAngketModal();

    // Perbarui status banner di dashboard jika ada
    const bannerBadge = document.getElementById('angket-banner-status-badge');
    if (bannerBadge) {
      bannerBadge.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-500"></span> Sudah Diisi (Tuntas)';
      bannerBadge.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200';
    }

  } catch (err) {
    alert("Terjadi kesalahan: " + err.message);
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane mr-2"></i>Kirim Refleksi Saya ✨';
    }
  }
}

// ===========================================================================
// FITUR REKAP ANGKET GURU (MONITORING & EXPORT CSV PRAKTIKUM)
// ===========================================================================

async function openTeacherAngketModal() {
  const modal = document.getElementById('modal-guru-angket-rekap');
  if (!modal) return;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  const loader = document.getElementById('guru-angket-loading');
  const content = document.getElementById('guru-angket-content');
  if (loader) loader.classList.remove('hidden');
  if (content) content.classList.add('hidden');

  try {
    const res = await fetch('/api/angket?all=1');
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Gagal memuat rekap');

    renderTeacherAngketStats(data);
    if (loader) loader.classList.add('hidden');
    if (content) content.classList.remove('hidden');
  } catch (err) {
    if (loader) loader.innerHTML = `<p class="text-rose-600 text-xs font-bold p-4">Error: ${err.message}</p>`;
  }
}

function closeTeacherAngketModal() {
  const modal = document.getElementById('modal-guru-angket-rekap');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function renderTeacherAngketStats(data) {
  const totalRespondenEl = document.getElementById('guru-angket-total-count');
  if (totalRespondenEl) totalRespondenEl.textContent = `${data.total || 0} Siswa`;

  const avgD3El = document.getElementById('guru-angket-avg-d3');
  if (avgD3El) avgD3El.textContent = `${data.overall ? data.overall.avg_d3 : 0} / 10`;

  const avgPelEl = document.getElementById('guru-angket-avg-peluang');
  if (avgPelEl) avgPelEl.textContent = `${data.overall ? data.overall.avg_peluang : 0} / 10`;

  const avgTotEl = document.getElementById('guru-angket-avg-total');
  if (avgTotEl) avgTotEl.textContent = `${data.overall ? data.overall.avg_total : 0} / 10`;

  // Render Sebaran Kelas
  const classContainer = document.getElementById('guru-angket-class-grid');
  if (classContainer && data.classSummary) {
    let cHtml = '';
    const classes = ['12 F1', '12 F2', '12 F3', '12 F4'];
    classes.forEach(cname => {
      const c = data.classSummary[cname] || { count: 0, avg_d3: 0, avg_peluang: 0, avg_total: 0 };
      cHtml += `
        <div class="p-4 rounded-xl border border-[#E8E6DF] bg-white shadow-sm space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-[#2F3437]">${cname}</span>
            <span class="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#F0EFEA] text-[#5F5E5B]">${c.count} Responden</span>
          </div>
          <div class="space-y-1 text-xs">
            <div class="flex justify-between text-[#787774]">
              <span>Dimensi 3:</span>
              <strong class="text-[#2F3437]">${c.avg_d3}</strong>
            </div>
            <div class="flex justify-between text-[#787774]">
              <span>Peluang:</span>
              <strong class="text-[#2F3437]">${c.avg_peluang}</strong>
            </div>
            <div class="flex justify-between border-t border-[#E8E6DF] pt-1 text-[#2F3437] font-bold">
              <span>Rerata:</span>
              <span class="text-emerald-700 font-mono">${c.avg_total}</span>
            </div>
          </div>
        </div>
      `;
    });
    classContainer.innerHTML = cHtml;
  }

  // Render Tabel Rincian Siswa
  const tableBody = document.getElementById('guru-angket-table-body');
  if (tableBody && data.data) {
    let tHtml = '';
    data.data.forEach((r, idx) => {
      tHtml += `
        <tr class="hover:bg-[#F7F6F3] border-b border-[#E8E6DF] text-xs">
          <td class="p-2.5 font-mono text-[#787774]">${idx + 1}</td>
          <td class="p-2.5 font-mono font-semibold text-[#2F3437]">${r.nis}</td>
          <td class="p-2.5 font-bold text-[#2F3437]">${r.nama}</td>
          <td class="p-2.5"><span class="px-2 py-0.5 rounded bg-gray-100 font-mono font-semibold">${r.kelas}</span></td>
          <td class="p-2.5 font-mono text-center text-sky-700 font-bold">${r.skor_d3}</td>
          <td class="p-2.5 font-mono text-center text-emerald-700 font-bold">${r.skor_peluang}</td>
          <td class="p-2.5 font-mono text-center font-bold text-[#2F3437]">${r.skor_total}</td>
          <td class="p-2.5 text-[#787774] truncate max-w-xs" title="${r.catatan || ''}">${r.catatan || '-'}</td>
        </tr>
      `;
    });
    tableBody.innerHTML = tHtml || '<tr><td colspan="8" class="p-4 text-center text-gray-400">Belum ada siswa yang mengisi.</td></tr>';
  }
}
