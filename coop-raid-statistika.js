/**
 * ============================================================================
 * CO-OP RAID STATISTIKA: ESTAFET PARALEL & RAKITAN KODE TIM
 * Bab 3: Statistika & Analisis Data Bivariat (Kelas XII SMA GIS 2 Serpong)
 * Pengampu: Muhammad Ardiansyah, S.Pd.Gr.
 * ============================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DATA MASTER SOAL CO-OP RAID (3 PUTARAN) & 5 SOAL INDIVIDU
  // --------------------------------------------------------------------------
  const COOP_DATA = {
    waves: [
      {
        waveNo: 1,
        title: "Putaran 1: Fondasi Pemusatan & Letak Data",
        targetPin: 192,
        pinFormula: "PIN = Pos 1 (Mo) + Pos 2 (H) + Pos 3 (σ²) + Pos 4 (ȳ) + Pos 5 (k)",
        positions: {
          1: {
            title: "Pos 1: Modus Data Berkelompok",
            tipe: "mc",
            level: "L2 (Aplikasi)",
            keyNumber: 68,
            keyLabel: "Nilai Modus (Mo)",
            tanya: "Tabel distribusi frekuensi nilai ujian Statistika dari 40 siswa kelas XII:<br><br>" +
                   "<div class='overflow-x-auto my-2'><table class='w-full text-xs border border-slate-700 rounded-lg overflow-hidden'>" +
                   "<thead class='bg-slate-800 text-slate-200'><tr><th class='p-2 border border-slate-700'>Nilai Ujian</th><th class='p-2 border border-slate-700'>Frekuensi (fi)</th><th class='p-2 border border-slate-700'>Frek. Kumulatif (fk)</th></tr></thead>" +
                   "<tbody>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>41 – 50</td><td class='p-1.5 border border-slate-700'>4</td><td class='p-1.5 border border-slate-700'>4</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>51 – 60</td><td class='p-1.5 border border-slate-700'>6</td><td class='p-1.5 border border-slate-700'>10</td></tr>" +
                   "<tr class='text-center bg-indigo-950/40 font-bold text-indigo-300'><td class='p-1.5 border border-slate-700'>61 – 70</td><td class='p-1.5 border border-slate-700'>12</td><td class='p-1.5 border border-slate-700'>22</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>71 – 80</td><td class='p-1.5 border border-slate-700'>10</td><td class='p-1.5 border border-slate-700'>32</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>81 – 90</td><td class='p-1.5 border border-slate-700'>8</td><td class='p-1.5 border border-slate-700'>40</td></tr>" +
                   "</tbody></table></div>" +
                   "Berdasarkan tabel distribusi frekuensi di atas, tentukan nilai modus (Mo) dari data tersebut!<br><br>" +
                   "<div class='p-2.5 rounded-lg border border-indigo-200 bg-indigo-50/70 text-indigo-950 font-semibold text-xs leading-relaxed'><i class='fa-solid fa-circle-info text-indigo-600 mr-1'></i> <b>Pernyataan Kontribusi PIN:</b> Nilai kontribusi anggota Pos 1 untuk perakitan PIN tim adalah nilai <b>Modus (Mo)</b> yang diperoleh.</div>",
            opsi: [
              "A. 63,0",
              "B. 66,5",
              "C. 67,5",
              "D. 68,0",
              "E. 68,5"
            ],
            kunci: "D",
            bahas: "Kelas modus pada interval 61–70 (f=12). L=60,5; p=10; d1=12-6=6; d2=12-10=2.<br>Mo = 60,5 + [6 / (6 + 2)] × 10 = 60,5 + 7,5 = <b>68,0</b>. Nilai Kontribusi Pos 1 = <b>68</b>."
          },
          2: {
            title: "Pos 2: Jangkauan Antarkuartil Data Berkelompok",
            tipe: "mc",
            level: "L2 (Aplikasi)",
            keyNumber: 18,
            keyLabel: "Jangkauan Antarkuartil (H)",
            tanya: "Berdasarkan tabel distribusi frekuensi 40 siswa yang sama (41–50: 4, 51–60: 6, 61–70: 12, 71–80: 10, 81–90: 8), tentukan nilai <b>Jangkauan Antarkuartil (H = Q₃ - Q₁)</b> dari data ujian tersebut!<br><br>" +
                   "<div class='p-2.5 rounded-lg border border-indigo-200 bg-indigo-50/70 text-indigo-950 font-semibold text-xs leading-relaxed'><i class='fa-solid fa-circle-info text-indigo-600 mr-1'></i> <b>Pernyataan Kontribusi PIN:</b> Nilai kontribusi anggota Pos 2 untuk perakitan PIN tim adalah nilai <b>Jangkauan Antarkuartil (H)</b> yang diperoleh.</div>",
            opsi: [
              "A. 15,0",
              "B. 16,5",
              "C. 18,0",
              "D. 19,5",
              "E. 21,0"
            ],
            kunci: "C",
            bahas: "Letak Q₁ = data ke-10 (interval 51–60) → Q₁ = 50,5 + [(10-4)/6]×10 = 60,5.<br>Letak Q₃ = data ke-30 (interval 71–80) → Q₃ = 70,5 + [(30-22)/10]×10 = 78,5.<br>Maka H = Q₃ - Q₁ = 78,5 - 60,5 = <b>18,0</b>. Nilai Kontribusi Pos 2 = <b>18</b>."
          },
          3: {
            title: "Pos 3: Ragam (Varians) Barisan Data",
            tipe: "mc",
            level: "L3 (Penalaran HOTS)",
            keyNumber: 8,
            keyLabel: "Nilai Ragam Populasi (σ²)",
            tanya: "Diketahui lima bilangan bulat positif terurut membentuk barisan aritmetika dengan beda 2: (c - 4), (c - 2), c, (c + 2), dan (c + 4). Berapakah nilai <b>ragam (varians) populasi (σ²)</b> dari kelima bilangan tersebut?<br><br>" +
                   "<div class='p-2.5 rounded-lg border border-indigo-200 bg-indigo-50/70 text-indigo-950 font-semibold text-xs leading-relaxed'><i class='fa-solid fa-circle-info text-indigo-600 mr-1'></i> <b>Pernyataan Kontribusi PIN:</b> Nilai kontribusi anggota Pos 3 untuk perakitan PIN tim adalah nilai <b>Ragam / Varians (σ²)</b> yang diperoleh.</div>",
            opsi: [
              "A. 4",
              "B. 6",
              "C. 8",
              "D. 10",
              "E. 12"
            ],
            kunci: "C",
            bahas: "Rataan kelima bilangan adalah c.<br>Deviasi kuadrat: (-4)² + (-2)² + 0² + 2² + 4² = 16 + 4 + 0 + 4 + 16 = 40.<br>Maka ragam populasi σ² = 40 / 5 = <b>8</b>. Nilai Kontribusi Pos 3 = <b>8</b>."
          },
          4: {
            title: "Pos 4: Rataan Hasil Transformasi Linear Data",
            tipe: "mc",
            level: "L3 (Penalaran HOTS)",
            keyNumber: 90,
            keyLabel: "Rataan Rapor Baru (ȳ)",
            tanya: "Sekelompok data nilai awal ujian siswa memiliki rataan hitung x̄₀ = 60. Karena ada penyesuaian bobot kurikulum, setiap nilai awal (xᵢ) diubah menjadi nilai rapor baru (yᵢ) mengikuti fungsi transformasi linear: <b>yᵢ = (4/3)xᵢ + 10</b>.<br>Berapakah nilai rataan baru (ȳ) dari nilai rapor siswa tersebut?<br><br>" +
                   "<div class='p-2.5 rounded-lg border border-indigo-200 bg-indigo-50/70 text-indigo-950 font-semibold text-xs leading-relaxed'><i class='fa-solid fa-circle-info text-indigo-600 mr-1'></i> <b>Pernyataan Kontribusi PIN:</b> Nilai kontribusi anggota Pos 4 untuk perakitan PIN tim adalah nilai <b>Rataan Rapor Baru (ȳ)</b> yang diperoleh.</div>",
            opsi: [
              "A. 80",
              "B. 85",
              "C. 90",
              "D. 94",
              "E. 96"
            ],
            kunci: "C",
            bahas: "Sifat transformasi linear rata-rata: ȳ = (4/3)x̄₀ + 10 = (4/3)(60) + 10 = 80 + 10 = <b>90</b>. Nilai Kontribusi Pos 4 = <b>90</b>."
          },
          5: {
            title: "Pos 5: Frekuensi Hilang dari Median (Kapten)",
            tipe: "mc",
            level: "L3 (Penalaran HOTS)",
            keyNumber: 8,
            keyLabel: "Nilai Frekuensi Hilang (k)",
            tanya: "Tabel distribusi frekuensi nilai praktikum (51–60: 5, 61–70: 9, 71–80: 12, 81–90: k, 91–100: 6). Jika diketahui nilai median (Me) dari data pada tabel tersebut adalah <b>75,5</b>, berapakah nilai frekuensi hilang <b>k</b>?<br><br>" +
                   "<div class='p-2.5 rounded-lg border border-indigo-200 bg-indigo-50/70 text-indigo-950 font-semibold text-xs leading-relaxed'><i class='fa-solid fa-circle-info text-indigo-600 mr-1'></i> <b>Pernyataan Kontribusi PIN:</b> Nilai kontribusi anggota Pos 5 untuk perakitan PIN tim adalah nilai <b>Frekuensi Hilang (k)</b> yang diperoleh.</div>",
            opsi: [
              "A. 6",
              "B. 8",
              "C. 10",
              "D. 12",
              "E. 14"
            ],
            kunci: "B",
            bahas: "Me = 75,5 di kelas 71–80 (L=70,5; p=10; f_me=12; fk_sebelum=14). Total N = 32 + k.<br>75,5 = 70,5 + [((32+k)/2 - 14) / 12] × 10 → 5 = [(2 + 0,5k)/12] × 10 → 6 = 2 + 0,5k → 0,5k = 4 → <b>k = 8</b>. Nilai Kontribusi Pos 5 = <b>8</b>."
          }
        }
      },
      {
        waveNo: 2,
        title: "Putaran 2: Analisis Ragam & Eliminasi Outlier",
        targetPin: 102,
        pinFormula: "PIN = Pos 1 (Me) + Pos 2 (D₇ - D₁) + Pos 3 (SR) + Pos 4 (R_baru) + Pos 5 (m)",
        positions: {
          1: {
            title: "Pos 1: Median Data Berkelompok",
            tipe: "mc",
            level: "L2 (Aplikasi)",
            keyNumber: 56,
            keyLabel: "Nilai Median (Me)",
            tanya: "Tabel distribusi frekuensi skor tes 50 siswa (31–40: 5, 41–50: 9, 51–60: 20, 61–70: 10, 71–80: 6). Berdasarkan tabel tersebut, tentukan nilai median (Me) dari data tersebut!<br><br>" +
                   "<div class='p-2.5 rounded-lg border border-indigo-200 bg-indigo-50/70 text-indigo-950 font-semibold text-xs leading-relaxed'><i class='fa-solid fa-circle-info text-indigo-600 mr-1'></i> <b>Pernyataan Kontribusi PIN:</b> Nilai kontribusi anggota Pos 1 untuk perakitan PIN tim adalah nilai <b>Median (Me)</b> yang diperoleh.</div>",
            opsi: [
              "A. 54,0",
              "B. 55,0",
              "C. 55,5",
              "D. 56,0",
              "E. 56,5"
            ],
            kunci: "D",
            bahas: "Letak median = data ke-25 (interval 51–60). L=50,5; p=10; fk=14; f_me=20.<br>Me = 50,5 + [(25 - 14) / 20] × 10 = 50,5 + 5,5 = <b>56,0</b>. Nilai Kontribusi Pos 1 = <b>56</b>."
          },
          2: {
            title: "Pos 2: Selisih Desil Data Berkelompok",
            tipe: "mc",
            level: "L2 (Aplikasi)",
            keyNumber: 21,
            keyLabel: "Selisih Desil (D₇ - D₁)",
            tanya: "Berdasarkan tabel skor 50 siswa yang sama (31–40: 5, 41–50: 9, 51–60: 20, 61–70: 10, 71–80: 6), tentukan nilai selisih antara <b>Desil ke-7 (D₇)</b> dan <b>Desil ke-1 (D₁)</b> dari data tersebut!<br><br>" +
                   "<div class='p-2.5 rounded-lg border border-indigo-200 bg-indigo-50/70 text-indigo-950 font-semibold text-xs leading-relaxed'><i class='fa-solid fa-circle-info text-indigo-600 mr-1'></i> <b>Pernyataan Kontribusi PIN:</b> Nilai kontribusi anggota Pos 2 untuk perakitan PIN tim adalah nilai <b>Selisih Desil (D₇ - D₁)</b> yang diperoleh.</div>",
            opsi: [
              "A. 18",
              "B. 19",
              "C. 20",
              "D. 21",
              "E. 22"
            ],
            kunci: "D",
            bahas: "D₁ terletak pada data ke-5 (batas atas 31–40) → D₁ = 40,5.<br>D₇ terletak pada data ke-35 (interval 61–70) → D₇ = 60,5 + [(35-34)/10]×10 = 61,5.<br>Maka selisih D₇ - D₁ = 61,5 - 40,5 = <b>21</b>. Nilai Kontribusi Pos 2 = <b>21</b>."
          },
          3: {
            title: "Pos 3: Simpangan Rata-Rata Empat Bilangan",
            tipe: "mc",
            level: "L3 (Penalaran HOTS)",
            keyNumber: 4,
            keyLabel: "Simpangan Rata-rata (SR)",
            tanya: "Diketahui empat bilangan bulat positif terurut p ≤ q ≤ r ≤ s memiliki rata-rata 15 dan median 15 (sehingga p + q + r + s = 60). Jika diketahui jumlah dua bilangan terkecil adalah (p + q) = 22, berapakah nilai <b>simpangan rata-rata (SR)</b> dari keempat bilangan tersebut?<br><br>" +
                   "<div class='p-2.5 rounded-lg border border-indigo-200 bg-indigo-50/70 text-indigo-950 font-semibold text-xs leading-relaxed'><i class='fa-solid fa-circle-info text-indigo-600 mr-1'></i> <b>Pernyataan Kontribusi PIN:</b> Nilai kontribusi anggota Pos 3 untuk perakitan PIN tim adalah nilai <b>Simpangan Rata-rata (SR)</b> yang diperoleh.</div>",
            opsi: [
              "A. 2",
              "B. 3",
              "C. 4",
              "D. 5",
              "E. 6"
            ],
            kunci: "C",
            bahas: "Karena p ≤ q ≤ 15 ≤ r ≤ s, rumus simpangan rata-rata adalah SR = [(r + s) - (p + q)] / 4.<br>Karena p + q = 22, maka r + s = 60 - 22 = 38.<br>Maka SR = (38 - 22) / 4 = 16 / 4 = <b>4</b>. Nilai Kontribusi Pos 3 = <b>4</b>."
          },
          4: {
            title: "Pos 4: Eliminasi Pencilan & Jangkauan Baru",
            tipe: "mc",
            level: "L3 (Penalaran HOTS)",
            keyNumber: 15,
            keyLabel: "Jangkauan Baru (R_baru)",
            tanya: "Lima siswa mengikuti tes susulan dengan skor: 70, 75, 80, 85, dan 40. Karena skor 40 teridentifikasi sebagai kesalahan pencatatan (pencilan luar), skor 40 tersebut dihapus dari sistem sehingga tersisa 4 data: {70, 75, 80, 85}.<br>Berapakah nilai <b>jangkauan baru (R_baru)</b> dari data tersebut setelah pencilan dieliminasi?<br><br>" +
                   "<div class='p-2.5 rounded-lg border border-indigo-200 bg-indigo-50/70 text-indigo-950 font-semibold text-xs leading-relaxed'><i class='fa-solid fa-circle-info text-indigo-600 mr-1'></i> <b>Pernyataan Kontribusi PIN:</b> Nilai kontribusi anggota Pos 4 untuk perakitan PIN tim adalah nilai <b>Jangkauan Baru (R_baru)</b> yang diperoleh.</div>",
            opsi: [
              "A. 10",
              "B. 12",
              "C. 15",
              "D. 18",
              "E. 20"
            ],
            kunci: "C",
            bahas: "Setelah skor 40 dihapus, data tersisa: {70, 75, 80, 85}.<br>Jangkauan baru: R_baru = X_maks - X_min = 85 - 70 = <b>15</b>. Nilai Kontribusi Pos 4 = <b>15</b>."
          },
          5: {
            title: "Pos 5: Frekuensi Hilang dari Rataan (Kapten)",
            tipe: "mc",
            level: "L3 (Penalaran HOTS)",
            keyNumber: 6,
            keyLabel: "Nilai Frekuensi Hilang (m)",
            tanya: "Tabel distribusi frekuensi usia peserta lari (11–15: 5, 16–20: 8, 21–25: 13, 26–30: m, 31–35: 8). Jika diketahui rataan hitung usia peserta adalah <b>23,5 tahun</b>, berapakah nilai frekuensi hilang <b>m</b>?<br><br>" +
                   "<div class='p-2.5 rounded-lg border border-indigo-200 bg-indigo-50/70 text-indigo-950 font-semibold text-xs leading-relaxed'><i class='fa-solid fa-circle-info text-indigo-600 mr-1'></i> <b>Pernyataan Kontribusi PIN:</b> Nilai kontribusi anggota Pos 5 untuk perakitan PIN tim adalah nilai <b>Frekuensi Hilang (m)</b> yang diperoleh.</div>",
            opsi: [
              "A. 4",
              "B. 6",
              "C. 8",
              "D. 10",
              "E. 12"
            ],
            kunci: "B",
            bahas: "Rataan sementara xs = 23 (kelas 21–25, p=5). Σfi = 34 + m.<br>Σfi·ci = 5(-2) + 8(-1) + 13(0) + m(1) + 8(2) = m - 2.<br>23,5 = 23 + [(m-2)/(34+m)] × 5 → 0,5(34+m) = 5(m-2) → 17 + 0,5m = 5m - 10 → 4,5m = 27 → <b>m = 6</b>. Nilai Kontribusi Pos 5 = <b>6</b>."
          }
        }
      },
      {
        waveNo: 3,
        title: "Putaran 3: Komparasi Populasi & Kuartil Poligon",
        targetPin: 217,
        pinFormula: "PIN = Pos 1 (Q₃) + Pos 2 (x̄) + Pos 3 (n_A) + Pos 4 (σ_total²) + Pos 5 (b)",
        positions: {
          1: {
            title: "Pos 1: Kuartil Atas Data Berkelompok",
            tipe: "mc",
            level: "L2 (Aplikasi)",
            keyNumber: 78,
            keyLabel: "Nilai Kuartil Atas (Q₃)",
            tanya: "Tabel durasi belajar 60 siswa (41–50: 7, 51–60: 11, 61–70: 12, 71–80: 20, 81–90: 10). Berdasarkan tabel tersebut, tentukan nilai kuartil atas (Q₃) dari data tersebut!<br><br>" +
                   "<div class='p-2.5 rounded-lg border border-indigo-200 bg-indigo-50/70 text-indigo-950 font-semibold text-xs leading-relaxed'><i class='fa-solid fa-circle-info text-indigo-600 mr-1'></i> <b>Pernyataan Kontribusi PIN:</b> Nilai kontribusi anggota Pos 1 untuk perakitan PIN tim adalah nilai <b>Kuartil Atas (Q₃)</b> yang diperoleh.</div>",
            opsi: [
              "A. 75,0",
              "B. 76,5",
              "C. 77,0",
              "D. 78,0",
              "E. 79,5"
            ],
            kunci: "D",
            bahas: "Letak Q₃ = data ke-45 (interval 71–80). L=70,5; p=10; fk=30; f=20.<br>Q₃ = 70,5 + [(45 - 30) / 20] × 10 = 70,5 + 7,5 = <b>78,0</b>. Nilai Kontribusi Pos 1 = <b>78</b>."
          },
          2: {
            title: "Pos 2: Rataan Hitung Data Berkelompok",
            tipe: "mc",
            level: "L2 (Aplikasi)",
            keyNumber: 68,
            keyLabel: "Rataan Hitung (x̄)",
            tanya: "Berdasarkan tabel durasi belajar 60 siswa yang sama (41–50: 7, 51–60: 11, 61–70: 12, 71–80: 20, 81–90: 10), tentukan nilai <b>rataan hitung (x̄)</b> durasi belajar siswa tersebut!<br><br>" +
                   "<div class='p-2.5 rounded-lg border border-indigo-200 bg-indigo-50/70 text-indigo-950 font-semibold text-xs leading-relaxed'><i class='fa-solid fa-circle-info text-indigo-600 mr-1'></i> <b>Pernyataan Kontribusi PIN:</b> Nilai kontribusi anggota Pos 2 untuk perakitan PIN tim adalah nilai <b>Rataan Hitung (x̄)</b> yang diperoleh.</div>",
            opsi: [
              "A. 65,5",
              "B. 67,0",
              "C. 68,0",
              "D. 69,5",
              "E. 70,5"
            ],
            kunci: "C",
            bahas: "Coding xs = 65,5 (kelas 61–70, p=10). Σfi = 60.<br>Σfi·ci = 7(-2) + 11(-1) + 12(0) + 20(1) + 10(2) = 15.<br>x̄ = 65,5 + (15/60) × 10 = 65,5 + 2,5 = <b>68,0</b>. Nilai Kontribusi Pos 2 = <b>68</b>."
          },
          3: {
            title: "Pos 3: Ukuran Populasi dari Rataan Gabungan",
            tipe: "mc",
            level: "L3 (Penalaran HOTS)",
            keyNumber: 36,
            keyLabel: "Jumlah Siswa XII-A (nA)",
            tanya: "Rataan nilai ujian Matematika gabungan dari kelas XII-A dan XII-B adalah 82. Diketahui rataan kelas XII-A adalah 80 dan rataan kelas XII-B adalah 85. Jika selisih jumlah siswa kelas XII-A dan XII-B adalah (nA - nB) = 12 orang, berapakah <b>jumlah siswa di kelas XII-A (nA)</b>?<br><br>" +
                   "<div class='p-2.5 rounded-lg border border-indigo-200 bg-indigo-50/70 text-indigo-950 font-semibold text-xs leading-relaxed'><i class='fa-solid fa-circle-info text-indigo-600 mr-1'></i> <b>Pernyataan Kontribusi PIN:</b> Nilai kontribusi anggota Pos 3 untuk perakitan PIN tim adalah nilai <b>Jumlah Siswa Kelas XII-A (nA)</b> yang diperoleh.</div>",
            opsi: [
              "A. 30",
              "B. 32",
              "C. 36",
              "D. 40",
              "E. 48"
            ],
            kunci: "C",
            bahas: "Rataan gabungan: 82(nA + nB) = 80nA + 85nB → 2nA = 3nB → nB = (2/3)nA.<br>Selisih: nA - (2/3)nA = 12 → (1/3)nA = 12 → <b>nA = 36</b>. Nilai Kontribusi Pos 3 = <b>36</b>."
          },
          4: {
            title: "Pos 4: Total Ragam (Varians) Dua Populasi",
            tipe: "mc",
            level: "L3 (Penalaran HOTS)",
            keyNumber: 26,
            keyLabel: "Total Ragam (σ_total²)",
            tanya: "Dua regu panahan masing-masing terdiri atas 5 atlet:<br>• <b>Regu Elang</b>: {16, 18, 20, 22, 24}<br>• <b>Regu Rajawali</b>: {14, 17, 20, 23, 26}<br>Hitunglah nilai <b>total penjumlahan ragam populasi kedua regu (σ_total² = σ_Elang² + σ_Rajawali²)</b>!<br><br>" +
                   "<div class='p-2.5 rounded-lg border border-indigo-200 bg-indigo-50/70 text-indigo-950 font-semibold text-xs leading-relaxed'><i class='fa-solid fa-circle-info text-indigo-600 mr-1'></i> <b>Pernyataan Kontribusi PIN:</b> Nilai kontribusi anggota Pos 4 untuk perakitan PIN tim adalah nilai <b>Total Ragam (σ_total²)</b> yang diperoleh.</div>",
            opsi: [
              "A. 20",
              "B. 24",
              "C. 26",
              "D. 28",
              "E. 32"
            ],
            kunci: "C",
            bahas: "Rataan kedua regu = 20.<br>Ragam Elang: σ_E² = (16+4+0+4+16)/5 = <b>8</b>.<br>Ragam Rajawali: σ_R² = (36+9+0+9+36)/5 = <b>18</b>.<br>Maka total ragam σ_total² = 8 + 18 = <b>26</b>. Nilai Kontribusi Pos 4 = <b>26</b>."
          },
          5: {
            title: "Pos 5: Dua Frekuensi Hilang dari Median (Kapten)",
            tipe: "mc",
            level: "L3 (Penalaran HOTS)",
            keyNumber: 9,
            keyLabel: "Nilai Frekuensi Hilang (b)",
            tanya: "Tabel distribusi berat badan 50 siswa (41–50: 4, 51–60: a, 61–70: 16, 71–80: b, 81–90: 8). Jika total siswa 50 orang dan nilai median (Me) adalah <b>65,5 kg</b>, berapakah nilai frekuensi kelas <b>b</b>?<br><br>" +
                   "<div class='p-2.5 rounded-lg border border-indigo-200 bg-indigo-50/70 text-indigo-950 font-semibold text-xs leading-relaxed'><i class='fa-solid fa-circle-info text-indigo-600 mr-1'></i> <b>Pernyataan Kontribusi PIN:</b> Nilai kontribusi anggota Pos 5 untuk perakitan PIN tim adalah nilai <b>Frekuensi Hilang (b)</b> yang diperoleh.</div>",
            opsi: [
              "A. 7",
              "B. 8",
              "C. 9",
              "D. 11",
              "E. 13"
            ],
            kunci: "C",
            bahas: "Total N = 50 → a + b = 22.<br>Median Me = 65,5 di 61–70 (L=60,5; p=10; f=16; fk_sebelum=4+a).<br>65,5 = 60,5 + [(25 - (4+a)) / 16] × 10 → 5 = [(21-a)/16]×10 → a = 13 → b = 22 - 13 = <b>9</b>. Nilai Kontribusi Pos 5 = <b>9</b>."
          }
        }
      }
    ],

    individual: [
      {
        no: 1,
        title: "Koreksi Rataan Salah Catat",
        tipe: "mc",
        level: "L2 (Aplikasi)",
        tanya: "Rataan nilai ujian Statistika dari 30 siswa tercatat sebesar <b>76,0</b>. Saat diverifikasi ulang, ditemukan satu nilai siswa yang seharusnya <b>92</b> tetapi salah diketik menjadi <b>62</b>. Rataan nilai ujian sebenarnya dari 30 siswa tersebut setelah dikoreksi adalah ....",
        opsi: [
          "A. 76,5",
          "B. 76,8",
          "C. 77,0",
          "D. 77,2",
          "E. 77,5"
        ],
        kunci: "C",
        bahas: "Total awal = 30 × 76 = 2280.<br>Total terkoreksi = 2280 - 62 + 92 = 2310.<br>Rataan sebenarnya = 2310 / 30 = <b>77,0</b> (Opsi C)."
      },
      {
        no: 2,
        title: "Evaluasi Simpangan Kuartil & Simpangan Rata-Rata",
        tipe: "tf",
        level: "L2 (Aplikasi)",
        tanya: "Diketahui data hasil pengukuran tinggi 7 bibit tanaman (dalam cm): <b>12, 15, 14, 18, 12, 16, 18</b>. Tentukan status Benar atau Salah untuk setiap pernyataan berikut!",
        pernyataan: [
          "Rataan hitung (x̄) dan median (Me) data tersebut bernilai sama, yaitu 15 cm.",
          "Nilai simpangan kuartil (Qd) dari data tersebut adalah 6 cm.",
          "Nilai simpangan rata-rata (SR) dari data tersebut adalah 2 cm."
        ],
        kunci: ["B", "S", "B"],
        bahas: "Data terurut: 12, 12, 14, 15, 16, 18, 18 (N=7).<br>P1 (Benar): Total = 105 → x̄ = 15; Me = data ke-4 = 15.<br>P2 (Salah): Q₁=12, Q₃=18 → Qd = 1/2(18-12) = 3 cm (bukan 6 cm).<br>P3 (Benar): SR = (3+3+1+0+1+3+3)/7 = 14/7 = 2 cm.<br>Kunci: <b>B - S - B</b>."
      },
      {
        no: 3,
        title: "Kecukupan Data Median 5 Bilangan",
        tipe: "ds",
        level: "L3 (Penalaran HOTS)",
        tanya: "Lima bilangan bulat positif terurut x₁ ≤ x₂ ≤ x₃ ≤ x₄ ≤ x₅. Berapakah nilai median (x₃) dari kelima bilangan tersebut?<br><br>" +
               "Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:<br>" +
               "<b>(1)</b> Rata-rata dari kelima bilangan tersebut adalah 16.<br>" +
               "<b>(2)</b> Jumlah dua bilangan terkecil adalah 22 dan jumlah dua bilangan terbesar adalah 40.",
        opsi: [
          "A. Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
          "B. Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
          "C. DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
          "D. Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
          "E. Pernyataan (1) dan pernyataan (2) TIDAK CUKUP untuk menjawab pertanyaan."
        ],
        kunci: "C",
        bahas: "Pernyataan (1): x₁+x₂+x₃+x₄+x₅ = 80 (Tidak cukup sendiri).<br>Pernyataan (2): (x₁+x₂) = 22 dan (x₄+x₅) = 40 (Tidak cukup sendiri).<br>Bersama-sama: (x₁+x₂) + x₃ + (x₄+x₅) = 80 → 22 + x₃ + 40 = 80 → <b>x₃ = 18</b> (Cukup bersama-sama!).<br>Kunci: <b>C</b>."
      },
      {
        no: 4,
        title: "Interpretasi Ukuran Letak (Kuartil & Persentil)",
        tipe: "multi",
        level: "L3 (Penalaran HOTS)",
        tanya: "Sebanyak 100 siswa mengikuti seleksi dengan skor berbeda-beda. Hasil analisis: Q₁ = 62, Median = 74, Q₃ = 85, dan Persentil ke-90 P₉₀ = 91. Pilihlah <b>semua pernyataan yang BENAR</b>!",
        opsi: [
          "A. Jika batas lulus babak penyisihan adalah skor minimal sama dengan Q₃, maka terdapat 25 siswa yang lulus.",
          "B. Sebanyak 50% siswa memperoleh skor di rentang antara 62 hingga 85.",
          "C. Jika sekolah hanya mengambil 10 siswa terbaik untuk pembinaan intensif, maka skor terendah yang lolos adalah 91.",
          "D. Nilai rataan hitung (x̄) dari 100 siswa tersebut pasti sama dengan 74.",
          "E. Simpangan kuartil (Qd) dari skor seleksi tersebut adalah 23."
        ],
        kunci: ["A", "B", "C"],
        bahas: "Opsi A (Benar): Q₃ membatasi 25% data tertinggi = 25 siswa.<br>Opsi B (Benar): Rentang Q₁ s.d. Q₃ mencakup 50% data di tengah.<br>Opsi C (Benar): P₉₀ memisahkan 10% data teratas (10 siswa terbaik).<br>Opsi D (Salah): Median tidak menjamin mean = 74 jika data tidak simetris.<br>Opsi E (Salah): Qd = (85 - 62)/2 = 11,5 (23 adalah jangkauan antarkuartil).<br>Kunci: <b>A, B, C</b>."
      },
      {
        no: 5,
        title: "Kuartil Bawah dari Poligon Titik Tengah",
        tipe: "mc",
        level: "L3 (Penalaran HOTS)",
        tanya: "Suatu poligon frekuensi dari 40 data memiliki 5 kelas interval dengan titik tengah (xᵢ) berturut-turut: 45,5; 55,5; 65,5; 75,5; 85,5 dan frekuensi berturut-turut: 3, 7, 15, 10, 5. Nilai kuartil bawah (Q₁) dari data tersebut adalah ....",
        opsi: [
          "A. 58,5",
          "B. 59,0",
          "C. 60,0",
          "D. 60,5",
          "E. 61,5"
        ],
        kunci: "D",
        bahas: "Panjang kelas p = 55,5 - 45,5 = 10. Letak Q₁ = data ke-10.<br>Fk kelas 1 = 3; Fk kelas 2 = 3 + 7 = 10. Jadi data ke-10 berada tepat di batas atas kelas kedua (titik tengah x₂ = 55,5).<br>Tepi bawah kelas kedua L = 55,5 - 5 = 50,5.<br>Q₁ = 50,5 + [(10 - 3) / 7] × 10 = 50,5 + 10 = <b>60,5</b> (Opsi D)."
      }
    ]
  };

  // --------------------------------------------------------------------------
  // 2. STATE DAN SESSION MANAGEMENT
  // --------------------------------------------------------------------------
  const STORAGE_KEY = 'mathcihuy_coop_session_v1';

  let currentSession = {
    className: 'XII F1',
    groupNo: 1,
    memberNo: 1,
    studentName: '',
    activeWave: 1,
    waveAnswers: { 1: {}, 2: {}, 3: {} },
    wavePins: { 1: '', 2: '', 3: '' },
    waveUnlocked: { 1: true, 2: false, 3: false },
    pinErrors: { 1: 0, 2: 0, 3: 0 },
    individualAnswers: {},
    individualStarted: false,
    individualDone: false,
    individualTimeLeft: 1200, // 20 minutes
    scoreCoop: 0,
    scoreIndividual: 0,
    finalScore: 0,
    tabSwitchCount: 0
  };

  function loadSavedSession() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        currentSession = Object.assign(currentSession, parsed);
        currentSession.pinErrors = currentSession.pinErrors || { 1: 0, 2: 0, 3: 0 };
      }
    } catch (e) {
      console.warn("Gagal membaca session Co-op Raid:", e);
    }
  }

  function saveCurrentSession() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentSession));
    } catch (e) {
      console.warn("Gagal menyimpan session Co-op Raid:", e);
    }
  }

  let _portalStudentName = '';
  function autoPopulateFromPortalSession() {
    try {
      let sess = null;
      if (typeof window.getSession === 'function') {
        sess = window.getSession();
      } else {
        const raw = localStorage.getItem('portal_session');
        if (raw) sess = JSON.parse(raw);
      }
      if (sess && sess.type === 'siswa' && sess.data) {
        const rawClass = String(sess.data.kelas_name || sess.data.kelas || '').trim().toUpperCase();
        let canonicalClass = '';
        if (rawClass.includes('F3')) canonicalClass = 'XII F3';
        else if (rawClass.includes('F1')) canonicalClass = 'XII F1';
        else if (rawClass.includes('F2')) canonicalClass = 'XII F2';
        else if (rawClass.includes('F4')) canonicalClass = 'XII F4';

        _portalStudentName = sess.data.nama || sess.data.name || '';

        if (canonicalClass && (!currentSession.studentName || currentSession.studentName === _portalStudentName)) {
          currentSession.className = canonicalClass;
        }
      }
    } catch (e) {
      console.warn("Auto-populate Co-op student session failed:", e);
    }
  }

  function changeClass(newClass) {
    currentSession.className = newClass;
    currentSession.studentName = '';
    saveCurrentSession();
    renderCurrentView();
  }

  function leaveArena() {
    if (confirm("Kembali ke Lobby turnamen untuk mengganti profil siswa atau kelas rombel?")) {
      currentSession.studentName = '';
      saveCurrentSession();
      renderCurrentView();
    }
  }

  function getContributedValueFromAnswer(posData, userAns) {
    if (!posData || !userAns) return '-';
    if (posData.opsi && Array.isArray(posData.opsi)) {
      const optStr = posData.opsi.find(o => o.startsWith(userAns + '.'));
      if (optStr) {
        const match = optStr.match(/^[A-E]\.\s*([\d,.]+)/);
        if (match) {
          return match[1];
        }
        return optStr.substring(2).trim();
      }
    }
    return userAns;
  }

  // --------------------------------------------------------------------------
  // 3. LOGIKA ROTASI POS PER ANGGOTA & PUTARAN
  // --------------------------------------------------------------------------
  function getActivePosForMember(memberNo, waveNo) {
    // memberNo: 1-5, waveNo: 1-3
    return ((memberNo - 1 + (waveNo - 1) * 2) % 5) + 1;
  }

  // Expose global controller
  window.CoopRaid = {
    data: COOP_DATA,
    session: currentSession,
    init: initCoopRaid,
    openModal: openCoopModal,
    closeModal: closeCoopModal,
    startTournament: startTournament,
    changeClass: changeClass,
    leaveArena: leaveArena,
    submitActivePosAnswer: submitActivePosAnswer,
    submitWavePin: submitWavePin,
    startIndividualTest: startIndividualTest,
    saveIndividualAnswer: saveIndividualAnswer,
    submitIndividualTest: submitIndividualTest,
    resetTournament: resetTournament,
    copyResult: copyResult,
    openTeacherMonitor: openTeacherMonitor,
    closeTeacherMonitor: closeTeacherMonitor,
    renderTeacherMonitor: renderTeacherMonitor,
    fetchAndUpdateLiveProctor: fetchAndUpdateLiveProctor,
    syncStudentLiveState: syncStudentLiveState,
    filterTeacherMonitor: filterTeacherMonitor,
    copyTeacherReport: copyTeacherReport,
    exportTeacherCSV: exportTeacherCSV,
    handleViolation: handleAntiCheatViolation,
    getIntegrityLevel: getIntegrityLevel,
    openStudentRapor: openStudentRapor,
    closeStudentRapor: closeStudentRapor,
    printRapor: printRapor
  };

  // --------------------------------------------------------------------------
  // 4. ANTI-CHEAT & INTEGRITY MONITORING (ALT+TAB, WINDOW BLUR, ANTI-AI COPY)
  // --------------------------------------------------------------------------
  let lastBlurTime = 0;
  let antiCheatRegistered = false;

  function isCoopModalActive() {
    const modal = document.getElementById('coop-raid-modal');
    if (!modal) return false;
    const isHidden = modal.classList.contains('hidden');
    const isDisplayNone = modal.style.display === 'none' || window.getComputedStyle(modal).display === 'none';
    return !isHidden && !isDisplayNone;
  }

  function getIntegrityLevel(count) {
    const c = count || 0;
    if (c <= 15) {
      return { 
        level: 'hijau', 
        label: c === 0 ? 'Murni (0x)' : `Aman Toleransi (${c}x)`, 
        color: 'emerald', 
        badgeHtml: `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 inline-flex items-center gap-1 shadow-xs"><i class="fa-solid fa-shield-check text-emerald-600"></i> Hijau (${c}x)</span>`
      };
    }
    if (c <= 30) {
      return { 
        level: 'kuning', 
        label: `Peringatan Sedang (${c}x)`, 
        color: 'amber', 
        badgeHtml: `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300 inline-flex items-center gap-1 shadow-xs"><i class="fa-solid fa-triangle-exclamation text-amber-600"></i> Kuning (${c}x)</span>`
      };
    }
    return { 
      level: 'merah', 
      label: `Pelanggaran Kritis (${c}x)`, 
      color: 'rose', 
      badgeHtml: `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-100 text-rose-900 border border-rose-300 inline-flex items-center gap-1 shadow-xs"><i class="fa-solid fa-circle-xmark text-rose-600"></i> Merah (${c}x)</span>`
    };
  }

  function showAntiCheatToast(message, type = 'kuning') {
    const existing = document.getElementById('coop-anticheat-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'coop-anticheat-toast';
    const bgBorder = type === 'merah' 
      ? 'bg-rose-950 text-rose-100 border-rose-500' 
      : (type === 'hijau' ? 'bg-emerald-950 text-emerald-100 border-emerald-500' : 'bg-amber-950 text-amber-100 border-amber-500');

    const iconClass = type === 'merah' 
      ? 'fa-circle-xmark text-rose-400' 
      : (type === 'hijau' ? 'fa-shield-check text-emerald-400' : 'fa-triangle-exclamation text-amber-400');

    toast.className = `fixed top-5 left-1/2 -translate-x-1/2 max-w-lg w-[90%] ${bgBorder} border-2 px-4 py-3 rounded-2xl shadow-2xl text-xs sm:text-sm font-bold z-[100000] flex items-center gap-3 animate-bounce`;
    toast.innerHTML = `<i class="fa-solid ${iconClass} text-lg shrink-0"></i> <div class="flex-1">${message}</div>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      if (toast && toast.parentNode) toast.remove();
    }, 6000);
  }

  function handleAntiCheatViolation(reason) {
    if (!isCoopModalActive()) return;
    currentSession.tabSwitchCount = (currentSession.tabSwitchCount || 0) + 1;
    saveCurrentSession();
    syncStudentLiveState();

    const count = currentSession.tabSwitchCount;
    const info = getIntegrityLevel(count);

    if (info.level === 'hijau') {
      showAntiCheatToast(`🟢 <b>Pemberitahuan Pindah Layar (${count}x):</b> ${reason} terdeteksi. Status Anda masih <b>Lencana Hijau</b> (Rentang aman: 1–15 kali). Tetap fokus pada kuis!`, 'hijau');
    } else if (info.level === 'kuning') {
      showAntiCheatToast(`⚠️ <b>Peringatan Integritas (Lencana Kuning):</b> ${reason} terdeteksi! Total perpindahan layar: <b>${count} kali</b> (Rentang 16–30x).<br>Anda tetap dapat melanjutkan pengerjaan soal. Pelanggaran ini tercatat di Ruang Pengawasan Guru.`, 'kuning');
    } else {
      showAntiCheatToast(`🚨 <b>Peringatan Kritis (Lencana Merah):</b> ${reason} terdeteksi! Total perpindahan layar: <b>${count} kali</b> (Lebih dari 30x).<br>Anda tetap dapat mengerjakan soal, namun status integritas Anda ditandai Lencana Merah pada Pengawasan Guru.`, 'merah');
    }
    
    // Auto re-render if badge element exists in DOM
    const badge = document.getElementById('coop-live-switch-badge');
    if (badge) {
      badge.innerHTML = info.badgeHtml;
    }
  }

  function registerAntiCheatListeners() {
    if (antiCheatRegistered) return;
    antiCheatRegistered = true;

    // 1. Tab switch / Visibility change
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden' && isCoopModalActive()) {
        const now = Date.now();
        if (now - lastBlurTime > 500) {
          lastBlurTime = now;
          handleAntiCheatViolation('Perpindahan Tab Browser');
        }
      }
    }, true);

    // 2. Window blur (Alt+Tab, split screen, klik window aplikasi lain)
    window.addEventListener('blur', function () {
      if (isCoopModalActive()) {
        const now = Date.now();
        if (now - lastBlurTime > 500) {
          lastBlurTime = now;
          handleAntiCheatViolation('Kehilangan Fokus Layar (Alt+Tab / Pindah Aplikasi)');
        }
      }
    }, true);

    // 3. Focusout on window/document (backup for Alt+Tab)
    window.addEventListener('focusout', function (e) {
      if (e.target === window || e.target === document) {
        if (isCoopModalActive()) {
          const now = Date.now();
          if (now - lastBlurTime > 500) {
            lastBlurTime = now;
            handleAntiCheatViolation('Kehilangan Fokus Layar (Alt+Tab)');
          }
        }
      }
    }, true);

    // 4. Page hide
    window.addEventListener('pagehide', function () {
      if (isCoopModalActive()) {
        handleAntiCheatViolation('Halaman Ditinggalkan (PageHide)');
      }
    }, true);

    // 5. Blokir Copy & Cut
    document.addEventListener('copy', function (e) {
      if (isCoopModalActive()) {
        e.preventDefault();
        showAntiCheatToast('Anti-AI: Penyalinan soal dinonaktifkan demi menjaga integritas turnamen!');
      }
    }, true);

    document.addEventListener('cut', function (e) {
      if (isCoopModalActive()) {
        e.preventDefault();
      }
    }, true);

    // 6. Blokir Klik Kanan
    document.addEventListener('contextmenu', function (e) {
      if (isCoopModalActive()) {
        e.preventDefault();
        showAntiCheatToast('Menu klik kanan dinonaktifkan selama turnamen berlangsung!');
      }
    }, true);

    // 7. Blokir Pintasan Keyboard Inspeksi
    document.addEventListener('keydown', function (e) {
      if (!isCoopModalActive()) return;
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
        (e.ctrlKey && (e.key === 'U' || e.key === 'u'))
      ) {
        e.preventDefault();
        showAntiCheatToast('Pintasan inspeksi kode dinonaktifkan selama turnamen!');
      }
    }, true);
  }

  // --------------------------------------------------------------------------
  // 5. RENDERER DAN UI BINDING
  // --------------------------------------------------------------------------
  let timerInterval = null;

  function initCoopRaid() {
    loadSavedSession();
    autoPopulateFromPortalSession();
    registerAntiCheatListeners();
  }

  function openCoopModal() {
    initCoopRaid();
    const modal = document.getElementById('coop-raid-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    document.body.classList.add('overflow-hidden');
    renderCurrentView();
  }

  function closeCoopModal() {
    const modal = document.getElementById('coop-raid-modal');
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
    const container = document.getElementById('coop-modal-content');
    if (!container) return;

    if (!currentSession.studentName) {
      renderLobbyView(container);
    } else if (currentSession.individualDone) {
      renderScorecardView(container);
    } else if (currentSession.individualStarted) {
      renderIndividualView(container);
    } else {
      renderWaveArenaView(container);
    }
  }

  // VIEW 1: LOBBY & SETUP
  function renderLobbyView(container) {
    const students = window.STUDENTS_DATA || {};
    const classList = ['XII F1', 'XII F2', 'XII F3', 'XII F4'];
    
    // Filter student options
    let studentOptions = '';
    const currentClass = currentSession.className || 'XII F1';
    const targetSelectedName = currentSession.studentName || _portalStudentName;
    Object.keys(students).forEach(id => {
      const s = students[id];
      if (s.kelas === currentClass) {
        const selected = s.nama === targetSelectedName ? 'selected' : '';
        studentOptions += `<option value="${escapeHtml(s.nama)}" ${selected}>${escapeHtml(s.nama)}</option>`;
      }
    });

    container.innerHTML = `
      <div class="p-5 md:p-7 space-y-6">
        <!-- HEADER -->
        <div class="border-b pb-4 flex items-center justify-between" style="border-color: #E2E8F0;">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-xs" style="background-color: #EEF2FF; color: #4338CA; border: 1px solid #C7D2FE;">
              <i class="fa-solid fa-users-viewfinder"></i>
            </div>
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md" style="background-color: #F1F5F9; color: #475569;">Turnamen Kelas XII</span>
              <h2 class="text-lg md:text-xl font-bold tracking-tight mt-0.5" style="color: #1E293B;">Co-op Raid: Estafet Paralel &amp; Rakitan Kode</h2>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="CoopRaid.openStudentRapor()" class="px-3 py-1.5 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs" title="Lihat Rapor Capaian Turnamen Co-op">
              <i class="fa-solid fa-file-invoice text-emerald-600"></i> Rapor Co-op Saya
            </button>
            <button onclick="CoopRaid.openTeacherMonitor()" class="px-3 py-1.5 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs">
              <i class="fa-solid fa-user-shield"></i> Ruang Pengawasan Guru
            </button>
            <button onclick="CoopRaid.closeModal()" class="w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer">
              <i class="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
        </div>

        <!-- BRIEFING RULES -->
        <div class="p-4 rounded-2xl border text-xs md:text-sm space-y-2 leading-relaxed" style="background-color: #F8FAFC; border-color: #E2E8F0; color: #334155;">
          <div class="font-bold text-indigo-700 flex items-center gap-2">
            <i class="fa-solid fa-circle-info"></i> Petunjuk Misi Co-op Raid (5 Orang per Tim • 3 Putaran):
          </div>
          <ul class="list-disc list-inside space-y-1 text-slate-600 pl-1">
            <li><b>Serentak Sejak Awal:</b> Kelima anggota langsung mengerjakan soal posnya masing-masing secara bersamaan (tidak saling menunggu).</li>
            <li><b>Kumpulkan 5 Angka Kunci:</b> Jawaban benar di setiap pos akan membuka 1 angka kunci tim.</li>
            <li><b>Rakit PIN Pembuka Gerbang:</b> Jumlahkan ke-5 angka kunci untuk membuka putaran berikutnya (Putaran 1, 2, dan 3).</li>
            <li><b>Evaluasi Individu 5 Soal:</b> Setelah 3 putaran selesai, seluruh siswa masuk sesi ujian mandiri 20 menit untuk mencetak nilai rapor.</li>
          </ul>
        </div>

        <!-- LOBBY FORM -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- KELAS -->
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider mb-1.5" style="color: #475569;">Pilih Kelas:</label>
            <select id="coop-select-kelas" onchange="CoopRaid.changeClass(this.value);" class="w-full p-2.5 rounded-xl border text-sm font-semibold cursor-pointer outline-none transition" style="background-color: #FFFFFF; border-color: #CBD5E1; color: #1E293B;">
              ${classList.map(c => `<option value="${c}" ${c === currentClass ? 'selected' : ''}>${c}</option>`).join('')}
            </select>
          </div>

          <!-- KELOMPOK -->
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider mb-1.5" style="color: #475569;">Pilih Kelompok (1 s.d. 5):</label>
            <select id="coop-select-group" class="w-full p-2.5 rounded-xl border text-sm font-semibold cursor-pointer outline-none transition" style="background-color: #FFFFFF; border-color: #CBD5E1; color: #1E293B;">
              ${[1, 2, 3, 4, 5].map(g => `<option value="${g}" ${g === currentSession.groupNo ? 'selected' : ''}>Kelompok ${g}</option>`).join('')}
            </select>
          </div>

          <!-- NOMOR ANGGOTA -->
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider mb-1.5" style="color: #475569;">Nomor Anggota Anda di Tim:</label>
            <select id="coop-select-member" class="w-full p-2.5 rounded-xl border text-sm font-semibold cursor-pointer outline-none transition" style="background-color: #FFFFFF; border-color: #CBD5E1; color: #1E293B;">
              ${[1, 2, 3, 4, 5].map(m => `<option value="${m}" ${m === currentSession.memberNo ? 'selected' : ''}>Anggota ${m}</option>`).join('')}
            </select>
          </div>

          <!-- NAMA SISWA -->
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider mb-1.5" style="color: #475569;">Nama Siswa:</label>
            <select id="coop-select-name" class="w-full p-2.5 rounded-xl border text-sm font-semibold cursor-pointer outline-none transition" style="background-color: #FFFFFF; border-color: #CBD5E1; color: #1E293B;">
              <option value="">-- Pilih Nama Siswa Sesuai Presensi --</option>
              ${studentOptions}
            </select>
          </div>
        </div>

        <!-- ACTION BUTTON -->
        <div class="pt-2">
          <button onclick="CoopRaid.startTournament()" class="w-full min-h-[48px] py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2 cursor-pointer transition">
            <i class="fa-solid fa-play"></i> Masuk Arena Co-op Raid
          </button>
        </div>
      </div>
    `;
  }

  function startTournament() {
    const kls = document.getElementById('coop-select-kelas')?.value;
    const grp = parseInt(document.getElementById('coop-select-group')?.value || '1');
    const mem = parseInt(document.getElementById('coop-select-member')?.value || '1');
    const name = document.getElementById('coop-select-name')?.value;

    if (!name) {
      alert("Silakan pilih nama siswa terlebih dahulu.");
      return;
    }

    currentSession.className = kls;
    currentSession.groupNo = grp;
    currentSession.memberNo = mem;
    currentSession.studentName = name;
    currentSession.activeWave = 1;
    saveCurrentSession();
    syncStudentLiveState();
    renderCurrentView();
  }

  // VIEW 2: ARENA CO-OP RAID
  function renderWaveArenaView(container) {
    const waveNo = currentSession.activeWave;
    const wave = COOP_DATA.waves[waveNo - 1];
    const memberNo = currentSession.memberNo;
    const activePos = getActivePosForMember(memberNo, waveNo);
    const posData = wave.positions[activePos];

    const currentAns = currentSession.waveAnswers[waveNo] && currentSession.waveAnswers[waveNo][activePos];
    const isAnswered = currentAns !== undefined && currentAns !== null && currentAns !== '';
    const userContributed = isAnswered ? getContributedValueFromAnswer(posData, currentAns) : '-';
    const integrity = getIntegrityLevel(currentSession.tabSwitchCount || 0);

    container.innerHTML = `
      <div class="p-4 md:p-6 space-y-5 flex flex-col max-h-[88vh] overflow-y-auto custom-scroll">
        <!-- TOP HUD -->
        <div class="border-b pb-3 flex flex-wrap items-center justify-between gap-3" style="border-color: #E2E8F0;">
          <div class="flex flex-wrap items-center gap-2.5">
            <span class="px-3 py-1 rounded-lg text-xs font-bold" style="background-color: #EEF2FF; color: #4338CA; border: 1px solid #C7D2FE;">
              <i class="fa-solid fa-users"></i> Kelompok ${currentSession.groupNo} (${currentSession.className})
            </span>
            <span class="px-2.5 py-1 rounded-lg text-xs font-semibold" style="background-color: #F1F5F9; color: #475569;">
              Anggota ${memberNo} (${escapeHtml(currentSession.studentName)})
            </span>
            <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold" style="background-color: #FEF3C7; color: #92400E; border: 1px solid #FDE68A;">
              Tugas: Pos ${activePos}
            </span>
            <span id="coop-live-switch-badge">
              ${integrity.badgeHtml}
            </span>
          </div>

          <!-- WAVE TABS & ACTIONS -->
          <div class="flex items-center gap-1.5">
            <button onclick="CoopRaid.leaveArena()" class="px-2.5 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition flex items-center gap-1 cursor-pointer" title="Keluar Arena & Ganti Profil Siswa / Rombel">
              <i class="fa-solid fa-arrow-right-from-bracket text-slate-500"></i> Ganti Profil
            </button>
            ${[1, 2, 3].map(w => {
              const isCurr = w === waveNo;
              const isUnlocked = currentSession.waveUnlocked[w];
              return `
                <button onclick="${isUnlocked ? `CoopRaid.session.activeWave = ${w}; CoopRaid.openModal();` : `alert('Selesaikan Putaran sebelumnya dan masukkan PIN Tim terlebih dahulu!');`}" 
                  class="px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer ${isCurr ? 'bg-indigo-600 text-white shadow-xs' : (isUnlocked ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-100 text-slate-400 opacity-60 cursor-not-allowed')}">
                  ${!isUnlocked ? '<i class="fa-solid fa-lock text-[10px]"></i>' : ''} Putaran ${w}
                </button>
              `;
            }).join('')}
            <button onclick="CoopRaid.closeModal()" class="w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer ml-1">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        <!-- WAVE HEADER -->
        <div class="p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2" style="background-color: #F8FAFC; border-color: #E2E8F0;">
          <div>
            <div class="text-[10px] font-bold uppercase tracking-wider text-slate-500">Misi Kolaborasi Tim</div>
            <h3 class="text-sm md:text-base font-bold text-slate-800">${wave.title}</h3>
          </div>
          <div class="text-xs text-slate-600 font-mono">
            Rumus Target: <span class="font-bold text-indigo-700">${wave.pinFormula}</span>
          </div>
        </div>

        <!-- POS SOAL CARD -->
        <div class="p-4 md:p-5 rounded-2xl border shadow-xs space-y-4" style="background-color: #FFFFFF; border-color: #CBD5E1;">
          <div class="flex items-center justify-between border-b pb-2.5" style="border-color: #F1F5F9;">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                ${activePos}
              </span>
              <span class="font-bold text-xs md:text-sm text-slate-800">${posData.title}</span>
              <span class="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                ${posData.level}
              </span>
            </div>
            ${isAnswered ? `
              <span class="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-100 text-indigo-900 border border-indigo-200 flex items-center gap-1.5">
                <i class="fa-solid fa-bookmark text-indigo-700"></i> Jawaban Tersimpan
              </span>
            ` : `
              <span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-500">
                Belum Disimpan
              </span>
            `}
          </div>

          <!-- QUESTION CONTENT -->
          <div class="text-xs md:text-sm leading-relaxed text-slate-800">
            ${posData.tanya}
          </div>

          <!-- INTERACTIVE OPTIONS FORM -->
          <div id="coop-pos-options-area" class="space-y-2 pt-1">
            ${renderPosOptionsHtml(posData, currentAns)}
          </div>

          <!-- STATUS KONTRIBUSI JAWABAN ANGGOTA -->
          ${isAnswered ? `
            <div class="p-3.5 rounded-xl border border-indigo-200 bg-indigo-50/70 flex flex-wrap items-center justify-between gap-3 shadow-xs">
              <div>
                <div class="text-[11px] font-bold text-indigo-950 uppercase tracking-wide flex items-center gap-1.5">
                  <i class="fa-solid fa-calculator text-indigo-700"></i> Angka Hasil Perhitungan Anda:
                </div>
                <div class="text-xs text-slate-700 font-semibold mt-0.5">
                  Tersimpan di Opsi <span class="font-bold text-indigo-950 text-sm font-mono">${currentAns}</span> (${posData.keyLabel})
                </div>
              </div>
              <div class="text-right">
                <div class="text-[10px] font-bold text-slate-500 uppercase">Kontribusi ke PIN Tim:</div>
                <div class="text-xl font-black font-mono text-indigo-900 bg-white px-3 py-1 rounded-lg border border-indigo-200 shadow-xs inline-block">${userContributed}</div>
              </div>
            </div>
          ` : ''}

          <!-- SUBMIT / SIMPAN JAWABAN BUTTON -->
          <div class="pt-2">
            <button onclick="CoopRaid.submitActivePosAnswer(${waveNo}, ${activePos})" class="w-full min-h-[44px] px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs flex items-center justify-center gap-2 cursor-pointer transition">
              <i class="fa-solid fa-floppy-disk"></i> ${isAnswered ? 'Perbarui Simpanan Jawaban Pos' : 'Simpan Jawaban Pos'}
            </button>
          </div>
        </div>

        <!-- RAKITAN PIN TIM SECTION -->
        <div class="p-4 md:p-5 rounded-2xl border shadow-xs space-y-3.5" style="background-color: #F8FAFC; border-color: #CBD5E1;">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
              <i class="fa-solid fa-shield-halved text-indigo-600"></i> Rakitan PIN Master Tim (Putaran ${waveNo})
            </span>
            <span class="${(currentSession.pinErrors?.[waveNo] || 0) > 0 ? 'text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200' : 'text-slate-500'} text-[11px] font-medium flex items-center gap-1">
              <i class="fa-solid fa-triangle-exclamation"></i> Kesalahan Percobaan PIN: <b>${currentSession.pinErrors?.[waveNo] || 0}x</b>
            </span>
          </div>

          <div class="text-xs text-slate-600 font-mono bg-white p-2.5 rounded-xl border border-slate-200">
            Rumus Target Babak: <b class="text-indigo-700">${wave.pinFormula}</b>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-3">
            <div class="flex-1 w-full flex items-center gap-2">
              <input type="number" id="coop-pin-input" placeholder="Masukkan Kode PIN Tim..." 
                class="w-full p-2.5 rounded-xl border text-sm font-mono font-bold tracking-wider text-center outline-none transition" 
                style="background-color: #FFFFFF; border-color: #CBD5E1; color: #1E293B;"
                value="${currentSession.wavePins[waveNo] || ''}">
            </div>
            <button onclick="CoopRaid.submitWavePin(${waveNo})" class="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2 cursor-pointer transition shrink-0">
              <i class="fa-solid fa-unlock"></i> Uji Validasi PIN Tim
            </button>
          </div>

          <div class="text-[11px] text-slate-500 leading-relaxed italic">
            *Validasi Benar/Salah hanya dilakukan melalui verifikasi PIN Tim di atas. Jika PIN Tim belum tepat, diskusikan bersama dan periksa kembali langkah perhitungan di masing-masing Pos!
          </div>
        </div>
      </div>
    `;
  }

  function renderPosOptionsHtml(posData, currentAns) {
    if (!posData || !posData.opsi) return '';
    return posData.opsi.map(opt => {
      const val = opt.charAt(0);
      const isChecked = currentAns === val;
      return `
        <label class="p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition ${isChecked ? 'border-indigo-600 bg-indigo-50/70 font-semibold shadow-xs' : 'border-slate-200 hover:bg-slate-50'}" style="background-color: #FFFFFF;">
          <input type="radio" name="coop_active_opt" value="${val}" ${isChecked ? 'checked' : ''} class="w-4 h-4 text-indigo-600 cursor-pointer">
          <span class="text-xs md:text-sm text-slate-800 font-medium">${opt}</span>
        </label>
      `;
    }).join('');
  }

  function isAnswerCorrect(posData, userAns) {
    if (!posData || !userAns) return false;
    return String(userAns).trim().toUpperCase() === String(posData.kunci).trim().toUpperCase();
  }

  function submitActivePosAnswer(waveNo, posNo) {
    if (!waveNo) waveNo = currentSession.activeWave || 1;
    if (!posNo) posNo = getActivePosForMember(currentSession.memberNo, waveNo);
    const wave = COOP_DATA.waves[waveNo - 1];
    const posData = wave ? wave.positions[posNo] : null;
    if (!posData) return;

    const checked = document.querySelector('input[name="coop_active_opt"]:checked');
    if (!checked) {
      alert("Silakan pilih salah satu opsi jawaban terlebih dahulu.");
      return;
    }
    const userAns = checked.value;
    const contributedVal = getContributedValueFromAnswer(posData, userAns);

    currentSession.waveAnswers[waveNo] = currentSession.waveAnswers[waveNo] || {};
    currentSession.waveAnswers[waveNo][posNo] = userAns;
    saveCurrentSession();
    syncStudentLiveState();

    alert(`✅ Jawaban Pos ${posNo} Berhasil Disimpan!\n\nNilai kontribusi Anda: ${contributedVal} (${posData.keyLabel})\n\nBagikan angka ${contributedVal} ini kepada rekan tim Anda untuk dirakit bersama 4 angka anggota lainnya ke dalam PIN Tim!`);

    renderCurrentView();
  }

  function submitWavePin(waveNo) {
    const input = document.getElementById('coop-pin-input');
    const pinVal = parseInt(input?.value || '0');
    const wave = COOP_DATA.waves[waveNo - 1];

    currentSession.pinErrors = currentSession.pinErrors || { 1: 0, 2: 0, 3: 0 };

    if (pinVal === wave.targetPin) {
      currentSession.wavePins[waveNo] = pinVal;
      saveCurrentSession();
      syncStudentLiveState();
      if (waveNo < 3) {
        currentSession.waveUnlocked[waveNo + 1] = true;
        currentSession.activeWave = waveNo + 1;
        saveCurrentSession();
        syncStudentLiveState();
        alert(`🏆 GERBANG BABAK ${waveNo} BERHASIL TERBUKA!\n\nPIN Tim ${pinVal} TERVALIDASI BENAR!\nSeluruh 5 anggota tim telah menghitung dengan tepat.\n(Total Kesalahan Percobaan PIN: ${currentSession.pinErrors[waveNo] || 0}x)\n\nLanjut ke Putaran ${waveNo + 1}!`);
        renderCurrentView();
      } else {
        // All 3 waves complete!
        currentSession.scoreCoop = 100;
        saveCurrentSession();
        syncStudentLiveState();
        alert(`🎉 SELAMAT! TIM ANDA BERHASIL MENYELESAIKAN 3 PUTARAN CO-OP RAID!\n\nPIN Tim Putaran 3 (${pinVal}) TERVALIDASI BENAR!\nSkor Kolaborasi Tim: 100 POIN.\n(Total Kesalahan Percobaan PIN Babak Ini: ${currentSession.pinErrors[waveNo] || 0}x)\n\nSekarang seluruh anggota akan masuk ke Sesi Evaluasi Individu (5 Soal • 20 Menit)!`);
        startIndividualTest();
      }
    } else {
      currentSession.pinErrors[waveNo] = (currentSession.pinErrors[waveNo] || 0) + 1;
      saveCurrentSession();
      syncStudentLiveState();
      alert(`❌ PIN TIM BELUM TEPAT!\n\nJumlah Kesalahan Tim: ${currentSession.pinErrors[waveNo]}x percobaan gagal.\n\nPIN Tim yang Anda masukkan (${pinVal || 0}) belum sesuai dengan target pembuka gerbang.\nAda satu atau lebih anggota tim yang hasil perhitungannya belum tepat.\nSilakan berkoordinasi dan periksa kembali langkah perhitungan di masing-masing Pos!`);
      renderCurrentView();
    }
  }

  // VIEW 3: UJIAN EVALUASI INDIVIDU (5 SOAL • 20 MENIT)
  function startIndividualTest() {
    currentSession.individualStarted = true;
    currentSession.individualDone = false;
    currentSession.individualTimeLeft = currentSession.individualTimeLeft || 1200;
    saveCurrentSession();
    syncStudentLiveState();

    if (!timerInterval) {
      timerInterval = setInterval(() => {
        if (currentSession.individualTimeLeft > 0) {
          currentSession.individualTimeLeft--;
          const timerEl = document.getElementById('coop-indiv-timer');
          if (timerEl) {
            const m = Math.floor(currentSession.individualTimeLeft / 60);
            const s = currentSession.individualTimeLeft % 60;
            timerEl.textContent = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
          }
        } else {
          clearInterval(timerInterval);
          timerInterval = null;
          alert("⏰ Waktu ujian individu telah habis! Jawaban Anda akan otomatis dikirim.");
          submitIndividualTest(true);
        }
      }, 1000);
    }

    renderCurrentView();
  }

  function renderIndividualView(container) {
    const qList = COOP_DATA.individual;
    const m = Math.floor(currentSession.individualTimeLeft / 60);
    const s = currentSession.individualTimeLeft % 60;
    const integrity = getIntegrityLevel(currentSession.tabSwitchCount || 0);

    container.innerHTML = `
      <div class="p-4 md:p-6 space-y-5 flex flex-col max-h-[88vh] overflow-y-auto custom-scroll">
        <!-- TOP STATUS -->
        <div class="border-b pb-3 flex flex-wrap items-center justify-between gap-3" style="border-color: #E2E8F0;">
          <div class="flex items-center gap-2.5">
            <span class="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
              <i class="fa-solid fa-user-pen"></i> Evaluasi Mandiri Siswa
            </span>
            <span class="text-xs font-semibold text-slate-700">
              ${escapeHtml(currentSession.studentName)} (${currentSession.className} • Kelompok ${currentSession.groupNo})
            </span>
          </div>

          <!-- TIMER DISPLAY & INTEGRITY BADGE -->
          <div class="flex items-center gap-2.5">
            <span id="coop-live-switch-badge">
              ${integrity.badgeHtml}
            </span>
            <div class="px-3.5 py-1 rounded-xl bg-slate-900 text-amber-300 font-mono font-bold text-sm flex items-center gap-2 border border-slate-700 shadow-xs">
              <i class="fa-solid fa-stopwatch text-amber-400"></i>
              <span id="coop-indiv-timer">${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}</span>
            </div>
          </div>
        </div>

        <div class="p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-600 leading-relaxed">
          Kerjakan kelima butir soal evaluasi berikut secara mandiri dan teliti. Nilai individu ini akan langsung terikat pada sesi kelompok Anda.
        </div>

        <!-- 5 SOAL CONTAINER -->
        <div class="space-y-5">
          ${qList.map((q, qIdx) => `
            <div class="p-4 md:p-5 rounded-2xl border shadow-xs space-y-3" style="background-color: #FFFFFF; border-color: #CBD5E1;">
              <div class="flex items-center justify-between border-b pb-2" style="border-color: #F1F5F9;">
                <span class="font-bold text-xs md:text-sm text-slate-800">
                  <span class="w-6 h-6 rounded-md bg-indigo-600 text-white inline-flex items-center justify-center mr-1.5 text-xs font-bold">${q.no}</span>
                  ${q.title}
                </span>
                <span class="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">${q.level}</span>
              </div>
              <div class="text-xs md:text-sm text-slate-800 leading-relaxed">${q.tanya}</div>
              <div class="space-y-2 pt-1">
                ${renderIndividualOptionItem(q, qIdx)}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- SUBMIT BUTTON -->
        <div class="pt-3 pb-2">
          <button onclick="CoopRaid.submitIndividualTest(false)" class="w-full min-h-[48px] py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition">
            <i class="fa-solid fa-paper-plane"></i> Kirim Hasil Evaluasi &amp; Lihat Rapor Turnamen
          </button>
        </div>
      </div>
    `;
  }

  function renderIndividualOptionItem(q, qIdx) {
    const saved = currentSession.individualAnswers[q.no];
    if (q.tipe === 'mc' || q.tipe === 'ds') {
      return q.opsi.map(opt => {
        const val = opt.charAt(0);
        const isChecked = saved === val;
        return `
          <label class="p-2.5 rounded-xl border flex items-center gap-2.5 cursor-pointer transition ${isChecked ? 'border-indigo-600 bg-indigo-50/60 font-semibold' : 'border-slate-200 hover:bg-slate-50'}" style="background-color: #FFFFFF;">
            <input type="radio" name="indiv_q_${q.no}" value="${val}" ${isChecked ? 'checked' : ''} onchange="CoopRaid.saveIndividualAnswer(${q.no}, this.value)" class="w-4 h-4 text-indigo-600 cursor-pointer">
            <span class="text-xs md:text-sm text-slate-700">${opt}</span>
          </label>
        `;
      }).join('');
    } else if (q.tipe === 'tf') {
      const savedArr = Array.isArray(saved) ? saved : ['', '', ''];
      return `
        <div class="overflow-x-auto">
          <table class="w-full text-xs border border-slate-200 rounded-xl overflow-hidden">
            <thead class="bg-slate-100 text-slate-700 font-bold">
              <tr>
                <th class="p-2 border border-slate-200 text-left">No</th>
                <th class="p-2 border border-slate-200 text-left">Pernyataan</th>
                <th class="p-2 border border-slate-200 text-center w-28">Status</th>
              </tr>
            </thead>
            <tbody>
              ${q.pernyataan.map((p, idx) => `
                <tr class="border-t border-slate-200">
                  <td class="p-2 font-bold text-center border-r border-slate-200">${idx + 1}</td>
                  <td class="p-2 border-r border-slate-200 text-slate-700">${p}</td>
                  <td class="p-2 text-center">
                    <div class="flex items-center justify-center gap-2">
                      <label class="flex items-center gap-1 cursor-pointer">
                        <input type="radio" name="indiv_tf_${q.no}_${idx}" value="B" ${savedArr[idx] === 'B' ? 'checked' : ''} onchange="CoopRaid.saveIndividualAnswer(${q.no}, 'B', ${idx})">
                        <span class="font-bold text-emerald-700">B</span>
                      </label>
                      <label class="flex items-center gap-1 cursor-pointer">
                        <input type="radio" name="indiv_tf_${q.no}_${idx}" value="S" ${savedArr[idx] === 'S' ? 'checked' : ''} onchange="CoopRaid.saveIndividualAnswer(${q.no}, 'S', ${idx})">
                        <span class="font-bold text-rose-700">S</span>
                      </label>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    } else if (q.tipe === 'multi') {
      const savedArr = Array.isArray(saved) ? saved : [];
      return q.opsi.map(opt => {
        const val = opt.charAt(0);
        const isChecked = savedArr.includes(val);
        return `
          <label class="p-2.5 rounded-xl border flex items-center gap-2.5 cursor-pointer transition ${isChecked ? 'border-indigo-600 bg-indigo-50/60 font-semibold' : 'border-slate-200 hover:bg-slate-50'}" style="background-color: #FFFFFF;">
            <input type="checkbox" name="indiv_multi_${q.no}" value="${val}" ${isChecked ? 'checked' : ''} onchange="CoopRaid.saveIndividualAnswer(${q.no}, this.value, -1, this.checked)" class="w-4 h-4 text-indigo-600 rounded cursor-pointer">
            <span class="text-xs md:text-sm text-slate-700">${opt}</span>
          </label>
        `;
      }).join('');
    }
    return '';
  }

  function saveIndividualAnswer(qNo, val, subIdx = -1, isChecked = false) {
    const q = COOP_DATA.individual.find(item => item.no === qNo);
    if (!q) return;

    if (q.tipe === 'mc' || q.tipe === 'ds') {
      currentSession.individualAnswers[qNo] = val;
    } else if (q.tipe === 'tf') {
      currentSession.individualAnswers[qNo] = currentSession.individualAnswers[qNo] || ['', '', ''];
      currentSession.individualAnswers[qNo][subIdx] = val;
    } else if (q.tipe === 'multi') {
      currentSession.individualAnswers[qNo] = currentSession.individualAnswers[qNo] || [];
      if (isChecked) {
        if (!currentSession.individualAnswers[qNo].includes(val)) {
          currentSession.individualAnswers[qNo].push(val);
        }
      } else {
        currentSession.individualAnswers[qNo] = currentSession.individualAnswers[qNo].filter(x => x !== val);
      }
    }
    saveCurrentSession();
  }

  function submitIndividualTest(forced = false) {
    if (!forced) {
      const unans = COOP_DATA.individual.filter(q => {
        const ans = currentSession.individualAnswers[q.no];
        if (!ans) return true;
        if (q.tipe === 'tf' && (!Array.isArray(ans) || ans.includes(''))) return true;
        if (q.tipe === 'multi' && (!Array.isArray(ans) || ans.length === 0)) return true;
        return false;
      });

      if (unans.length > 0) {
        if (!confirm(`Masih ada ${unans.length} butir soal yang belum dijawab. Yakin ingin mengakhiri dan mengirim hasil ujian?`)) {
          return;
        }
      }
    }

    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }

    // Hitung Skor Individu (Masing-masing 20 poin = Total 100)
    let correctCount = 0;
    COOP_DATA.individual.forEach(q => {
      const u = currentSession.individualAnswers[q.no];
      if (isAnswerCorrect(q, u)) {
        correctCount++;
      }
    });

    currentSession.scoreIndividual = correctCount * 20;
    currentSession.scoreCoop = 100; // 3 rounds finished
    currentSession.finalScore = Math.round((currentSession.scoreCoop * 0.4) + (currentSession.scoreIndividual * 0.6));
    currentSession.individualDone = true;
    saveCurrentSession();

    // Auto submit to backend / localStorage
    sendResultToBackend();

    renderCurrentView();
  }

  // --------------------------------------------------------------------------
  // 6. MODUL RAPOR RESMI HASIL TURNAMEN CO-OP RAID (STANDAR DINAS GIS 2 SERPONG)
  // --------------------------------------------------------------------------
  function getStudentRaporData(targetNis) {
    const stds = window.STUDENTS_DATA || {};
    let std = null;
    let nis = targetNis || '';

    if (nis && stds[nis]) {
      std = stds[nis];
    } else if (currentSession.studentName) {
      for (const k in stds) {
        if (stds[k].nama === currentSession.studentName) {
          std = stds[k];
          nis = k;
          break;
        }
      }
    }

    let history = [];
    try {
      history = JSON.parse(localStorage.getItem('mathcihuy_coop_history') || '[]');
    } catch(e) {}

    let histItem = null;
    if (nis) {
      histItem = history.slice().reverse().find(h => String(h.nis) === String(nis) || h.nama === (std && std.nama));
    } else if (currentSession.studentName) {
      histItem = history.slice().reverse().find(h => h.nama === currentSession.studentName);
    }

    if (!histItem && Array.isArray(window._coopServerCache)) {
      const srv = window._coopServerCache.find(s => String(s.nis) === String(nis) || s.nama === (std && std.nama));
      if (srv) {
        let w1 = {}, w2 = {}, w3 = {}, ind = {};
        try { w1 = typeof srv.answers_wave1 === 'string' ? JSON.parse(srv.answers_wave1 || '{}') : (srv.answers_wave1 || {}); } catch(e){}
        try { w2 = typeof srv.answers_wave2 === 'string' ? JSON.parse(srv.answers_wave2 || '{}') : (srv.answers_wave2 || {}); } catch(e){}
        try { w3 = typeof srv.answers_wave3 === 'string' ? JSON.parse(srv.answers_wave3 || '{}') : (srv.answers_wave3 || {}); } catch(e){}
        try { ind = typeof srv.answers_indiv === 'string' ? JSON.parse(srv.answers_indiv || '{}') : (srv.answers_indiv || {}); } catch(e){}
        histItem = {
          nis: srv.nis,
          nama: srv.nama,
          kelas: srv.kelas,
          kelompok: srv.kelompok,
          anggota: srv.anggota,
          skor_coop: srv.skor_coop,
          skor_individu: srv.skor_individu,
          skor_akhir: srv.skor_akhir,
          tab_switch_count: srv.tab_switch_count,
          pin_errors: srv.pin_errors,
          integrity_level: srv.integrity_level,
          integrity_label: srv.integrity_label,
          answers_wave1: w1,
          answers_wave2: w2,
          answers_wave3: w3,
          answers_indiv: ind,
          timestamp: srv.updated_at
        };
      }
    }

    const isCurrent = currentSession.studentName && (!std || currentSession.studentName === std.nama);

    let pinErrors = (isCurrent && currentSession.pinErrors) || { 1: 0, 2: 0, 3: 0 };
    if (histItem && histItem.pin_errors_detail) {
      pinErrors = histItem.pin_errors_detail;
    }

    let waveAnswers = { 1: {}, 2: {}, 3: {} };
    if (histItem && histItem.answers_wave1) {
      waveAnswers = {
        1: histItem.answers_wave1 || {},
        2: histItem.answers_wave2 || {},
        3: histItem.answers_wave3 || {}
      };
    } else if (isCurrent && currentSession.waveAnswers) {
      waveAnswers = currentSession.waveAnswers;
    }

    let individualAnswers = {};
    if (histItem && histItem.answers_indiv) {
      individualAnswers = histItem.answers_indiv;
    } else if (isCurrent && currentSession.individualAnswers) {
      individualAnswers = currentSession.individualAnswers;
    }

    const scoreCoop = histItem?.skor_coop !== undefined ? histItem.skor_coop : (currentSession.scoreCoop || 100);
    const scoreIndividual = histItem?.skor_individu !== undefined ? histItem.skor_individu : (currentSession.scoreIndividual || 0);
    const finalScore = histItem?.skor_akhir !== undefined ? histItem.skor_akhir : (currentSession.finalScore || Math.round((scoreCoop * 0.4) + (scoreIndividual * 0.6)));
    const tabSwitchCount = histItem?.tab_switch_count !== undefined ? histItem.tab_switch_count : (currentSession.tabSwitchCount || 0);

    return {
      nama: (std && std.nama) || currentSession.studentName || 'Peserta Didik',
      nis: nis || (std && std.nis) || '-',
      kelas: (std && std.kelas) || currentSession.className || 'XII F1',
      kelompok: histItem?.kelompok || `Kelompok ${currentSession.groupNo || 1}`,
      anggota: histItem?.anggota || `Anggota ${currentSession.memberNo || 1}`,
      groupNo: currentSession.groupNo || 1,
      memberNo: currentSession.memberNo || 1,
      scoreCoop: scoreCoop,
      scoreIndividual: scoreIndividual,
      finalScore: finalScore,
      tabSwitchCount: tabSwitchCount,
      pinErrors: pinErrors,
      waveAnswers: waveAnswers,
      individualAnswers: individualAnswers,
      isDone: (histItem !== null) || currentSession.individualDone,
      timestamp: histItem?.timestamp || new Date().toISOString()
    };
  }

  function generateRaporCoopHtml(sData, isModalOverlay = false) {
    const qList = COOP_DATA.individual;
    const switchCount = sData.tabSwitchCount || 0;
    const integrity = getIntegrityLevel(switchCount);

    let predikat = 'D';
    let predikatText = 'Perlu Bimbingan';
    let predikatColor = 'text-rose-700 bg-rose-50 border-rose-300';
    if (sData.finalScore >= 90) {
      predikat = 'A';
      predikatText = 'Sangat Mahir';
      predikatColor = 'text-emerald-800 bg-emerald-50 border-emerald-300';
    } else if (sData.finalScore >= 80) {
      predikat = 'B';
      predikatText = 'Mahir';
      predikatColor = 'text-indigo-800 bg-indigo-50 border-indigo-300';
    } else if (sData.finalScore >= 75) {
      predikat = 'C';
      predikatText = 'Cakap (Tuntas KKM)';
      predikatColor = 'text-amber-800 bg-amber-50 border-amber-300';
    }

    const totalPinErrors = ((sData.pinErrors && sData.pinErrors[1]) || 0) + ((sData.pinErrors && sData.pinErrors[2]) || 0) + ((sData.pinErrors && sData.pinErrors[3]) || 0);

    let catatanIntegritas = '';
    if (integrity.level === 'hijau') {
      catatanIntegritas = switchCount === 0 
        ? 'Validasi Murni: Seluruh rangkaian turnamen diselesaikan dengan tingkat kedisiplinan dan fokus optimal tanpa perpindahan layar (0x Alt-Tab).'
        : `Validasi Terjaga: Terdeteksi ${switchCount} kali perpindahan layar, masih berada dalam batas aman toleransi Lencana Hijau (1–15x).`;
    } else if (integrity.level === 'kuning') {
      catatanIntegritas = `Peringatan Waspada: Terdeteksi ${switchCount} kali perpindahan layar (Kategori Kuning: 16–30x). Pengerjaan tetap tervalidasi dengan catatan kedisiplinan.`;
    } else {
      catatanIntegritas = `Peringatan Kritis: Terdeteksi ${switchCount} kali perpindahan layar (Kategori Merah: >30x). Memerlukan sesi konfirmasi dan pembinaan kejujuran akademik bersama Guru Pengampu.`;
    }

    const formattedDate = new Date(sData.timestamp || Date.now()).toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const waveRowsHtml = [1, 2, 3].map(wNo => {
      const w = COOP_DATA.waves[wNo - 1];
      const posNo = getActivePosForMember(sData.memberNo, wNo);
      const posData = w.positions[posNo];
      const userAns = sData.waveAnswers?.[wNo]?.[posNo] || '-';
      const errCount = sData.pinErrors?.[wNo] || 0;
      return `
        <tr class="border-b border-slate-200 text-xs">
          <td class="p-2.5 font-bold text-center text-slate-700">Putaran ${wNo}</td>
          <td class="p-2.5 text-slate-800 font-semibold">
            <div>${w.title}</div>
            <div class="text-[10px] text-slate-500 font-medium">Misi Kolaborasi 5 Pos Paralel</div>
          </td>
          <td class="p-2.5 text-slate-700 font-medium">
            <div>Pos ${posNo}: ${posData.title}</div>
            <div class="text-[10px] text-indigo-700 font-semibold">${posData.keyLabel}</div>
          </td>
          <td class="p-2.5 text-center">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              <i class="fa-solid fa-check mr-1"></i> Terkontribusi
            </span>
          </td>
          <td class="p-2.5 font-mono font-bold text-center ${errCount > 0 ? 'text-rose-700' : 'text-slate-500'}">
            ${errCount}x
          </td>
          <td class="p-2.5 text-center">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
              <i class="fa-solid fa-circle-check"></i> Tuntas (100)
            </span>
          </td>
        </tr>
      `;
    }).join('');

    const indivRowsHtml = qList.map(q => {
      const u = sData.individualAnswers?.[q.no];
      const isCor = isAnswerCorrect(q, u);
      let userAnsDisplay = '-';
      if (Array.isArray(u)) {
        userAnsDisplay = u.join(' - ');
      } else if (u) {
        userAnsDisplay = String(u);
      }
      return `
        <tr class="border-b border-slate-200 text-xs ${isCor ? 'bg-emerald-50/20' : 'bg-rose-50/20'}">
          <td class="p-2.5 font-bold text-center text-slate-700">No. ${q.no}</td>
          <td class="p-2.5 text-slate-800">
            <div class="font-bold text-slate-800">${q.title}</div>
            <div class="text-[10px] text-slate-500 font-medium mt-0.5">Kompetensi: ${q.level} • AKM Literasi Numerasi</div>
          </td>
          <td class="p-2.5 font-mono font-bold text-center text-slate-800 bg-slate-50/60">${userAnsDisplay}</td>
          <td class="p-2.5 font-mono font-bold text-center ${isCor ? 'text-emerald-700' : 'text-rose-700'}">
            ${isCor ? '20' : '0'}
          </td>
          <td class="p-2.5 text-center">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold ${isCor ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-rose-100 text-rose-800 border border-rose-300'}">
              ${isCor ? '✓ Tuntas' : '✗ Evaluasi'}
            </span>
          </td>
        </tr>
      `;
    }).join('');

    return `
      <div id="coop-rapor-container" class="p-5 sm:p-8 space-y-6 flex flex-col max-h-[92vh] overflow-y-auto custom-scroll bg-white coop-print-page">
        <!-- TOP TOOLBAR (NO-PRINT) -->
        <div class="coop-no-print border-b pb-3 flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center gap-1.5 shadow-2xs">
              <i class="fa-solid fa-graduation-cap"></i> Dokumen Rapor Resmi GIS
            </span>
            <span class="text-xs text-slate-500">TP 2026/2027</span>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="CoopRaid.printRapor()" class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs transition" title="Cetak Rapor ke Printer atau Simpan sebagai PDF">
              <i class="fa-solid fa-print"></i> Cetak Rapor (PDF)
            </button>
            <button onclick="CoopRaid.copyResult()" class="px-3 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer transition">
              <i class="fa-solid fa-copy"></i> Salin Rekap
            </button>
            ${isModalOverlay ? `
              <button onclick="CoopRaid.closeStudentRapor()" class="w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer">
                <i class="fa-solid fa-xmark text-lg"></i>
              </button>
            ` : `
              <button onclick="CoopRaid.closeModal()" class="w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer">
                <i class="fa-solid fa-xmark text-lg"></i>
              </button>
            `}
          </div>
        </div>

        <!-- KOP RESMI DOKUMEN SEKOLAH GIS 2 SERPONG -->
        <div class="flex items-center gap-4 border-b-2 border-slate-900 pb-3">
          <img src="assets/gis_official_logo.png" alt="Logo Resmi GIS" class="h-20 w-auto object-contain shrink-0">
          <div class="flex-1 text-center">
            <div class="text-[11px] font-bold uppercase tracking-wider text-slate-600">YAYASAN ASRAMA PELAJAR ISLAM (YAPI) CABANG BANTEN</div>
            <h1 class="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug">SMA GLOBAL ISLAMIC SCHOOL 2 SERPONG</h1>
            <div class="text-xs font-bold text-indigo-900 uppercase tracking-wide mt-0.5">LEMBAR LAPORAN HASIL ASESMEN KOLABORASI &amp; EVALUASI MANDIRI</div>
            <div class="text-[10px] text-slate-500 mt-0.5">
              Jl. Raya Puspiptek Buaran, Serpong - Kota Tangerang Selatan, Banten 15310 • Website: www.global-islamic.com
            </div>
          </div>
        </div>

        <!-- JUDUL & NOMOR DOKUMEN -->
        <div class="text-center space-y-1">
          <h2 class="text-sm sm:text-base font-extrabold uppercase tracking-wide text-slate-900">
            RAPOR CAPAIAN TURNAMEN CO-OP RAID: STATISTIKA &amp; DATA BIVARIAT
          </h2>
          <div class="text-[11px] text-slate-600 font-medium">
            Mata Pelajaran: <b>Matematika (Fase F - Kelas XII)</b> • Semester Ganjil TP 2026/2027
          </div>
        </div>

        <!-- TABEL IDENTITAS SISWA & TIM -->
        <div class="border border-slate-300 rounded-xl overflow-hidden bg-slate-50/60 text-xs">
          <div class="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-300">
            <div class="p-3.5 space-y-2">
              <div class="flex justify-between">
                <span class="text-slate-500 font-medium">Nama Peserta Didik:</span>
                <span class="font-bold text-slate-900">${escapeHtml(sData.nama)}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500 font-medium">Nomor Induk Siswa (NIS):</span>
                <span class="font-mono font-bold text-slate-900">${sData.nis}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500 font-medium">Kelas / Rombel:</span>
                <span class="font-bold text-slate-900">${sData.kelas}</span>
              </div>
            </div>
            <div class="p-3.5 space-y-2">
              <div class="flex justify-between">
                <span class="text-slate-500 font-medium">Skuad Kelompok:</span>
                <span class="font-bold text-indigo-700">${sData.kelompok}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500 font-medium">Peran Anggota:</span>
                <span class="font-bold text-slate-800">${sData.anggota}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500 font-medium">Waktu Selesai:</span>
                <span class="font-medium text-slate-700">${formattedDate}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- REKAPITULASI NILAI & FORMULA BOBOT RESMI -->
        <div class="border border-slate-300 rounded-xl overflow-hidden">
          <div class="bg-slate-800 text-white px-3.5 py-2 font-bold text-xs uppercase tracking-wider flex items-center justify-between">
            <span>Rekapitulasi Capaian Nilai &amp; Bobot Asesmen</span>
            <span class="text-[10px] font-normal text-slate-300">Standar Penilaian Kurikulum SMA GIS 2</span>
          </div>
          <table class="w-full text-xs">
            <thead class="bg-slate-100 text-slate-700 border-b border-slate-300">
              <tr>
                <th class="py-2.5 px-3 text-left">Komponen Asesmen</th>
                <th class="py-2.5 px-3 text-center w-28">Skor Mentah</th>
                <th class="py-2.5 px-3 text-center w-24">Bobot</th>
                <th class="py-2.5 px-3 text-center w-32">Kontribusi Nilai</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr>
                <td class="py-2.5 px-3 font-semibold text-slate-800">
                  A. Kolaborasi Tim Co-op (3 Putaran Estafet Paralel &amp; Perakitan PIN)
                  <div class="text-[10px] text-slate-500 font-normal">Sinergi 5 anggota tim menyelesaikan 15 pos perhitungan statistika.</div>
                </td>
                <td class="py-2.5 px-3 text-center font-mono font-bold text-emerald-700">${sData.scoreCoop} / 100</td>
                <td class="py-2.5 px-3 text-center font-mono text-slate-600">40%</td>
                <td class="py-2.5 px-3 text-center font-mono font-bold text-slate-900">${(sData.scoreCoop * 0.4).toFixed(1)}</td>
              </tr>
              <tr>
                <td class="py-2.5 px-3 font-semibold text-slate-800">
                  B. Evaluasi Mandiri Siswa (5 Butir Soal AKM Statistika Berkelompok)
                  <div class="text-[10px] text-slate-500 font-normal">Pengujian mandiri 20 menit mencakup Mean, Median, Kuartil, Ragam, dan Transformasi.</div>
                </td>
                <td class="py-2.5 px-3 text-center font-mono font-bold text-indigo-700">${sData.scoreIndividual} / 100</td>
                <td class="py-2.5 px-3 text-center font-mono text-slate-600">60%</td>
                <td class="py-2.5 px-3 text-center font-mono font-bold text-slate-900">${(sData.scoreIndividual * 0.6).toFixed(1)}</td>
              </tr>
              <tr class="bg-indigo-50/60 font-bold border-t-2 border-slate-300">
                <td class="py-3 px-3 text-indigo-950 text-xs uppercase">
                  Total Nilai Akhir Rapor Turnamen
                </td>
                <td colspan="2" class="py-3 px-3 text-center">
                  <span class="px-2.5 py-1 rounded-md text-xs font-bold border ${predikatColor}">
                    Predikat: ${predikat} (${predikatText})
                  </span>
                </td>
                <td class="py-3 px-3 text-center font-mono font-black text-indigo-950 text-base">
                  ${sData.finalScore} / 100
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- MATRIKS AUDIT INTEGRITAS & KEAMANAN UJIAN -->
        <div class="border border-slate-300 rounded-xl p-3.5 bg-slate-50/50 space-y-2.5 text-xs">
          <div class="font-bold text-slate-800 flex items-center justify-between border-b border-slate-200 pb-2">
            <span class="flex items-center gap-1.5 uppercase tracking-wide text-[11px] text-slate-700">
              <i class="fa-solid fa-shield-halved text-indigo-600"></i> Audit Integritas &amp; Kedisiplinan Layar Siswa
            </span>
            <span>${integrity.badgeHtml}</span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
            <div class="p-2 rounded-lg bg-white border border-slate-200">
              <span class="text-[10px] text-slate-500 uppercase block font-semibold">Pindah Layar (Alt-Tab)</span>
              <span class="text-sm font-bold font-mono ${switchCount === 0 ? 'text-emerald-700' : (switchCount <= 2 ? 'text-amber-700' : 'text-rose-700')}">${switchCount} kali</span>
            </div>
            <div class="p-2 rounded-lg bg-white border border-slate-200">
              <span class="text-[10px] text-slate-500 uppercase block font-semibold">Percobaan Gagal PIN Tim</span>
              <span class="text-sm font-bold font-mono ${totalPinErrors > 0 ? 'text-rose-700' : 'text-emerald-700'}">${totalPinErrors} kali</span>
            </div>
            <div class="p-2 rounded-lg bg-white border border-slate-200 col-span-2 sm:col-span-1">
              <span class="text-[10px] text-slate-500 uppercase block font-semibold">Status Validasi</span>
              <span class="text-xs font-bold text-slate-800">${integrity.label}</span>
            </div>
          </div>
          <div class="text-[11px] text-slate-600 italic bg-white p-2.5 rounded-lg border border-slate-200">
            *Catatan Pengawas: ${catatanIntegritas}
          </div>
        </div>

        <!-- RINCIAN FASE 1: ESTAFET CO-OP 3 PUTARAN -->
        <div class="space-y-2">
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
            <i class="fa-solid fa-users-rays text-indigo-600"></i> Rincian Kontribusi Anggota di Sesi Co-op (3 Putaran):
          </h3>
          <div class="border border-slate-300 rounded-xl overflow-x-auto">
            <table class="w-full text-left">
              <thead class="bg-slate-100 text-slate-700 border-b border-slate-300 text-xs">
                <tr>
                  <th class="p-2.5 text-center w-24">Babak</th>
                  <th class="p-2.5">Misi Putaran</th>
                  <th class="p-2.5">Pos Tugas Siswa</th>
                  <th class="p-2.5 text-center w-28">Status Kontribusi</th>
                  <th class="p-2.5 text-center w-24">Salah PIN</th>
                  <th class="p-2.5 text-center w-28">Status</th>
                </tr>
              </thead>
              <tbody>
                ${waveRowsHtml}
              </tbody>
            </table>
          </div>
        </div>

        <!-- RINCIAN FASE 2: UJIAN EVALUASI MANDIRI (5 SOAL) -->
        <div class="space-y-2">
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
            <i class="fa-solid fa-list-check text-indigo-600"></i> Rincian Butir Soal Ujian Evaluasi Mandiri (5 Butir AKM):
          </h3>
          <div class="border border-slate-300 rounded-xl overflow-x-auto">
            <table class="w-full text-left">
              <thead class="bg-slate-100 text-slate-700 border-b border-slate-300 text-xs">
                <tr>
                  <th class="p-2.5 text-center w-16">No</th>
                  <th class="p-2.5">Materi &amp; Indikator Kompetensi</th>
                  <th class="p-2.5 text-center w-28">Jawaban Siswa</th>
                  <th class="p-2.5 text-center w-20">Poin</th>
                  <th class="p-2.5 text-center w-24">Status</th>
                </tr>
              </thead>
              <tbody>
                ${indivRowsHtml}
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

        <!-- BOTTOM ACTION BUTTONS (NO-PRINT) -->
        <div class="coop-no-print border-t pt-4 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button onclick="CoopRaid.printRapor()" class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition shadow-xs">
            <i class="fa-solid fa-print"></i> Cetak Dokumen Rapor
          </button>
          <button onclick="CoopRaid.copyResult()" class="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition">
            <i class="fa-solid fa-copy"></i> Salin Rekap Capaian
          </button>
          ${isModalOverlay ? `
            <button onclick="CoopRaid.closeStudentRapor()" class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2 cursor-pointer transition">
              <i class="fa-solid fa-check"></i> Tutup Rapor
            </button>
          ` : `
            <button onclick="CoopRaid.resetTournament()" class="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition">
              <i class="fa-solid fa-rotate-left"></i> Mulai Ulang Sesi
            </button>
            <button onclick="CoopRaid.closeModal()" class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2 cursor-pointer transition">
              <i class="fa-solid fa-check"></i> Selesai
            </button>
          `}
        </div>
      </div>
    `;
  }

  // VIEW 4: SCORECARD & REKAP AKHIR TURNAMEN
  function renderScorecardView(container) {
    const sData = getStudentRaporData();
    container.innerHTML = generateRaporCoopHtml(sData, false);
  }

  function openStudentRapor(targetNis) {
    const sData = getStudentRaporData(targetNis);
    const modal = document.getElementById('coop-student-rapor-modal');
    const content = document.getElementById('coop-student-rapor-content');

    if (modal && content) {
      content.innerHTML = generateRaporCoopHtml(sData, true);
      modal.classList.remove('hidden');
      modal.style.display = 'flex';
      document.body.classList.add('overflow-hidden');
    } else {
      // Fallback inside coop-raid-modal
      const raidModal = document.getElementById('coop-raid-modal');
      const raidContent = document.getElementById('coop-modal-content');
      if (raidModal && raidContent) {
        raidContent.innerHTML = generateRaporCoopHtml(sData, false);
        raidModal.classList.remove('hidden');
        raidModal.style.display = 'flex';
        document.body.classList.add('overflow-hidden');
      }
    }
  }

  function closeStudentRapor() {
    const modal = document.getElementById('coop-student-rapor-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.style.display = 'none';
      // Only restore overflow if teacher proctor modal or coop modal is not active
      const proctorModal = document.getElementById('modal-guru-coop-proctor');
      const coopModal = document.getElementById('coop-raid-modal');
      const isProctorOpen = proctorModal && !proctorModal.classList.contains('hidden') && proctorModal.style.display !== 'none';
      const isCoopOpen = coopModal && !coopModal.classList.contains('hidden') && coopModal.style.display !== 'none';
      if (!isProctorOpen && !isCoopOpen) {
        document.body.classList.remove('overflow-hidden');
      }
    }
  }

  function printRapor() {
    document.body.classList.add('coop-rapor-printing');
    window.print();
    setTimeout(() => {
      document.body.classList.remove('coop-rapor-printing');
    }, 1200);
  }

  function copyResult() {
    const integrity = getIntegrityLevel(currentSession.tabSwitchCount || 0);
    const text = `=== HASIL CO-OP RAID STATISTIKA MATH CIHUY ===\n` +
      `Nama: ${currentSession.studentName}\n` +
      `Kelas: ${currentSession.className}\n` +
      `Tim: Kelompok ${currentSession.groupNo} (Anggota ${currentSession.memberNo})\n` +
      `Skor Co-op Tim: ${currentSession.scoreCoop} / 100\n` +
      `Skor Individu: ${currentSession.scoreIndividual} / 100\n` +
      `Nilai Akhir: ${currentSession.finalScore} / 100\n` +
      `Integritas: ${currentSession.tabSwitchCount ? currentSession.tabSwitchCount + 'x Pindah Layar [' + integrity.label + ']' : '0x [Valid - Murni]'}\n` +
      `Waktu: ${new Date().toLocaleString('id-ID')}\n` +
      `Portal: https://mathcihuy.pages.dev`;
    navigator.clipboard.writeText(text).then(() => {
      alert("📋 Rekap capaian berhasil disalin ke clipboard!");
    }).catch(() => {
      prompt("Salin teks berikut:", text);
    });
  }

  function resetTournament() {
    if (confirm("Apakah Anda yakin ingin mereset sesi ini dan mengulang turnamen dari awal?")) {
      localStorage.removeItem(STORAGE_KEY);
      currentSession = {
        className: 'XII F1',
        groupNo: 1,
        memberNo: 1,
        studentName: '',
        activeWave: 1,
        waveAnswers: { 1: {}, 2: {}, 3: {} },
        wavePins: { 1: '', 2: '', 3: '' },
        waveUnlocked: { 1: true, 2: false, 3: false },
        individualAnswers: {},
        individualStarted: false,
        individualDone: false,
        individualTimeLeft: 1200,
        scoreCoop: 0,
        scoreIndividual: 0,
        finalScore: 0,
        tabSwitchCount: 0,
        pinErrors: { 1: 0, 2: 0, 3: 0 }
      };
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
      renderCurrentView();
    }
  }

  // --------------------------------------------------------------------------
  // 5. SERVER SYNC & PERSISTENCE (CLOUDFLARE D1 BACKEND)
  // --------------------------------------------------------------------------
  window._coopServerCache = window._coopServerCache || [];
  let _proctorLiveTimer = null;

  function syncStudentLiveState() {
    if (!currentSession.studentName) return;

    let studentNis = '';
    const stds = window.STUDENTS_DATA || {};
    for (const k in stds) {
      if (stds[k].nama === currentSession.studentName) {
        studentNis = k;
        break;
      }
    }
    if (!studentNis) return;

    const integrity = getIntegrityLevel(currentSession.tabSwitchCount || 0);
    const pinErrTotal = ((currentSession.pinErrors && currentSession.pinErrors[1]) || 0) + 
                        ((currentSession.pinErrors && currentSession.pinErrors[2]) || 0) + 
                        ((currentSession.pinErrors && currentSession.pinErrors[3]) || 0);

    let currentStatus = 'Aktif (Lobi)';
    if (currentSession.individualDone) {
      currentStatus = 'Selesai';
    } else if (currentSession.individualStarted) {
      currentStatus = 'Ujian Mandiri';
    } else if (currentSession.activeWave) {
      currentStatus = `Putaran ${currentSession.activeWave}`;
    }

    const payload = {
      nis: studentNis,
      nama: currentSession.studentName,
      kelas: currentSession.className,
      kelompok: `Kelompok ${currentSession.groupNo}`,
      anggota: `Anggota ${currentSession.memberNo}`,
      status: currentStatus,
      skor_coop: currentSession.scoreCoop || 0,
      skor_individu: currentSession.scoreIndividual || 0,
      skor_akhir: currentSession.finalScore || 0,
      tab_switch_count: currentSession.tabSwitchCount || 0,
      pin_errors: pinErrTotal,
      integrity_level: integrity.level,
      integrity_label: integrity.label,
      answers_wave1: currentSession.waveAnswers?.[1] || {},
      answers_wave2: currentSession.waveAnswers?.[2] || {},
      answers_wave3: currentSession.waveAnswers?.[3] || {},
      answers_indiv: currentSession.individualAnswers || {}
    };

    fetch('/api/coop', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(() => {});
  }

  async function fetchAndUpdateLiveProctor() {
    try {
      const res = await fetch('/api/coop?_t=' + Date.now());
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          window._coopServerCache = data;
          renderTeacherMonitor();
        }
      }
    } catch (e) {
      // offline / fallback
    }
  }

  function sendResultToBackend() {
    const integrity = getIntegrityLevel(currentSession.tabSwitchCount || 0);
    let studentNis = '';
    const stds = window.STUDENTS_DATA || {};
    for (const k in stds) {
      if (stds[k].nama === currentSession.studentName) {
        studentNis = k;
        break;
      }
    }

    const payload = {
      timestamp: new Date().toISOString(),
      mapel: 'wajib',
      kode_pertemuan: 'COOP_STATISTIKA',
      kelas: currentSession.className,
      kelompok: `Kelompok ${currentSession.groupNo}`,
      anggota: `Anggota ${currentSession.memberNo}`,
      nama: currentSession.studentName,
      nis: studentNis,
      skor_coop: currentSession.scoreCoop,
      skor_individu: currentSession.scoreIndividual,
      skor_akhir: currentSession.finalScore,
      tab_switch_count: currentSession.tabSwitchCount || 0,
      pin_errors: ((currentSession.pinErrors && currentSession.pinErrors[1]) || 0) + ((currentSession.pinErrors && currentSession.pinErrors[2]) || 0) + ((currentSession.pinErrors && currentSession.pinErrors[3]) || 0),
      integrity_level: integrity.level,
      integrity_label: integrity.label,
      answers_wave1: currentSession.waveAnswers[1],
      answers_wave2: currentSession.waveAnswers[2],
      answers_wave3: currentSession.waveAnswers[3],
      answers_indiv: currentSession.individualAnswers
    };

    // 1. Simpan di Local History Math Cihuy
    try {
      const histKey = 'mathcihuy_coop_history';
      const list = JSON.parse(localStorage.getItem(histKey) || '[]');
      list.push(payload);
      localStorage.setItem(histKey, JSON.stringify(list));
    } catch (e) {}

    // 2. Kirim update ke D1 Co-op Backend
    syncStudentLiveState();

    // 3. Kirim ke Endpoint Cloudflare / API jika tersedia
    try {
      fetch('/api/nilai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nis: studentNis || (currentSession.memberNo + '' + currentSession.groupNo + '00'),
          nama: currentSession.studentName,
          kelas: currentSession.className,
          mapel: 'wajib',
          kode_pertemuan: 'COOP_STATISTIKA',
          skor: currentSession.finalScore,
          jml_soal: 5,
          benar: Math.round(currentSession.scoreIndividual / 20),
          salah: 5 - Math.round(currentSession.scoreIndividual / 20),
          durasi_detik: 1200 - currentSession.individualTimeLeft,
          tab_switch_count: currentSession.tabSwitchCount || 0,
          integrity_level: integrity.level
        })
      }).catch(() => {
        // Fallback gracefully without throwing
      });
    } catch (e) {}
  }

  // --------------------------------------------------------------------------
  // 6. RUANG PENGAWASAN & INTEGRITAS AKUN GURU (TEACHER PROCTORING ROOM)
  // --------------------------------------------------------------------------
  let proctorFilterClass = 'ALL';
  let proctorFilterBadge = 'ALL';
  let proctorSearchQuery = '';

  function openTeacherMonitor() {
    const modal = document.getElementById('modal-guru-coop-proctor');
    if (modal) {
      modal.classList.remove('hidden');
      modal.style.display = 'flex';
      renderTeacherMonitor();
      fetchAndUpdateLiveProctor();
      if (_proctorLiveTimer) clearInterval(_proctorLiveTimer);
      _proctorLiveTimer = setInterval(fetchAndUpdateLiveProctor, 4000);
    }
  }

  function closeTeacherMonitor() {
    if (_proctorLiveTimer) {
      clearInterval(_proctorLiveTimer);
      _proctorLiveTimer = null;
    }
    const modal = document.getElementById('modal-guru-coop-proctor');
    if (modal) {
      modal.classList.add('hidden');
      modal.style.display = 'none';
    }
  }

  function getProctorDataList() {
    const studentsMaster = window.STUDENTS_DATA || {};
    let history = [];
    try {
      history = JSON.parse(localStorage.getItem('mathcihuy_coop_history') || '[]');
    } catch (e) {
      history = [];
    }

    const serverList = window._coopServerCache || [];

    const result = [];
    let no = 1;

    Object.keys(studentsMaster).forEach(nis => {
      const std = studentsMaster[nis];
      // Abaikan alumni
      if (std.kelas === 'Alumni 2026') return;

      // 1. Cek sesi lokal aktif jika ada
      const isCur = currentSession.studentName === std.nama && currentSession.className === std.kelas;

      // 2. Cek apakah ada record dari Cloudflare D1 Server
      const srvItem = serverList.find(s => String(s.nis) === String(nis) || (s.nama === std.nama && s.kelas === std.kelas));

      // 3. Cek rekaman di local history
      const histItem = history.slice().reverse().find(h => String(h.nis) === String(nis) || (h.nama === std.nama && h.kelas === std.kelas));

      let status = 'Belum Mulai';
      let scoreCoop = '-';
      let scoreIndiv = '-';
      let scoreFinal = '-';
      let switchCount = 0;
      let pinErrors = 0;
      let teamInfo = '-';

      // Prioritas: Local History / Sesi Selesai
      if (histItem) {
        status = 'Selesai';
        scoreCoop = histItem.skor_coop !== undefined ? histItem.skor_coop : 100;
        scoreIndiv = histItem.skor_individu !== undefined ? histItem.skor_individu : 0;
        scoreFinal = histItem.skor_akhir !== undefined ? histItem.skor_akhir : 0;
        switchCount = histItem.tab_switch_count !== undefined ? histItem.tab_switch_count : 0;
        pinErrors = histItem.pin_errors !== undefined ? histItem.pin_errors : 0;
        teamInfo = histItem.kelompok ? `${histItem.kelompok} (${histItem.anggota || 'Anggota'})` : '-';
      }

      // Merge Cloudflare D1 Server Record
      if (srvItem) {
        status = srvItem.status || (srvItem.skor_akhir > 0 ? 'Selesai' : 'Aktif');
        scoreCoop = srvItem.skor_coop !== undefined && srvItem.skor_coop !== null ? srvItem.skor_coop : scoreCoop;
        scoreIndiv = srvItem.skor_individu !== undefined && srvItem.skor_individu !== null ? srvItem.skor_individu : scoreIndiv;
        scoreFinal = srvItem.skor_akhir !== undefined && srvItem.skor_akhir !== null ? srvItem.skor_akhir : scoreFinal;
        switchCount = Math.max(switchCount, srvItem.tab_switch_count || 0);
        pinErrors = Math.max(pinErrors, srvItem.pin_errors || 0);
        teamInfo = srvItem.kelompok ? `${srvItem.kelompok} (${srvItem.anggota || 'Anggota'})` : teamInfo;
      }

      // Merge Sesi Aktif di Tab Ini (jika ada)
      if (isCur) {
        if (currentSession.individualDone) {
          status = 'Selesai';
        } else if (currentSession.individualStarted) {
          status = 'Ujian Mandiri';
        } else if (currentSession.activeWave) {
          status = `Co-op Putaran ${currentSession.activeWave}`;
        }
        scoreCoop = currentSession.scoreCoop || scoreCoop;
        scoreIndiv = currentSession.scoreIndividual !== undefined ? currentSession.scoreIndividual : scoreIndiv;
        scoreFinal = currentSession.finalScore !== undefined ? currentSession.finalScore : scoreFinal;
        switchCount = Math.max(switchCount, currentSession.tabSwitchCount || 0);
        const curPinErrors = ((currentSession.pinErrors && currentSession.pinErrors[1]) || 0) + ((currentSession.pinErrors && currentSession.pinErrors[2]) || 0) + ((currentSession.pinErrors && currentSession.pinErrors[3]) || 0);
        pinErrors = Math.max(pinErrors, curPinErrors);
        teamInfo = `Kelompok ${currentSession.groupNo} (Anggota ${currentSession.memberNo})`;
      }

      result.push({
        no: no++,
        nis: nis,
        nama: std.nama,
        kelas: std.kelas,
        teamInfo: teamInfo,
        status: status,
        scoreCoop: scoreCoop,
        scoreIndiv: scoreIndiv,
        scoreFinal: scoreFinal,
        switchCount: switchCount,
        pinErrors: pinErrors,
        badge: getIntegrityLevel(switchCount)
      });
    });

    return result;
  }

  function filterTeacherMonitor(type, val) {
    if (type === 'kelas') proctorFilterClass = val;
    if (type === 'badge') proctorFilterBadge = val;
    if (type === 'search') proctorSearchQuery = val || '';
    renderTeacherMonitor();
  }

  function renderTeacherMonitor() {
    const container = document.getElementById('coop-teacher-proctor-content');
    if (!container) return;

    const allData = getProctorDataList();

    // Hitung KPI
    const totalSiswa = allData.length;
    const hijauCount = allData.filter(s => s.badge.level === 'hijau').length;
    const kuningCount = allData.filter(s => s.badge.level === 'kuning').length;
    const merahCount = allData.filter(s => s.badge.level === 'merah').length;
    const aktifSelesaiCount = allData.filter(s => s.status !== 'Belum Mulai').length;

    // Filter data
    const filtered = allData.filter(s => {
      if (proctorFilterClass !== 'ALL' && s.kelas !== proctorFilterClass) return false;
      if (proctorFilterBadge !== 'ALL' && s.badge.level !== proctorFilterBadge) return false;
      if (proctorSearchQuery.trim()) {
        const q = proctorSearchQuery.toLowerCase();
        return s.nama.toLowerCase().includes(q) || s.nis.toLowerCase().includes(q);
      }
      return true;
    });

    container.innerHTML = `
      <!-- HEADER RUANG PENGAWASAN -->
      <div class="p-4 md:p-6 border-b flex flex-wrap items-center justify-between gap-3 shrink-0" style="border-color: #E2E8F0; background-color: #FAFAFA;">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-xl shadow-xs" style="background-color: #EEF2FF; color: #4338CA; border: 1px solid #C7D2FE;">
            <i class="fa-solid fa-user-shield"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800 border border-indigo-200">
                Akun Guru • Live Proctoring
              </span>
              <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Cloudflare D1 Live Sync (${(window._coopServerCache || []).length} Data Server)
              </span>
              <span class="text-[10px] text-slate-500 font-medium">TP 2026/2027</span>
            </div>
            <h2 class="text-base md:text-lg font-bold tracking-tight text-slate-900 mt-0.5">
              Ruang Pengawasan &amp; Integritas Turnamen Co-op Raid
            </h2>
            <p class="text-xs text-slate-500">
              Guru Pengampu: <b>Muhammad Ardiansyah, S.Pd.Gr.</b> • Pemantauan Alt+Tab &amp; Integritas Real-time
            </p>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="CoopRaid.fetchAndUpdateLiveProctor()" class="px-3 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs" title="Tarik pembaruan data terkini dari server">
            <i class="fa-solid fa-rotate"></i> Refresh Data
          </button>
          <button onclick="CoopRaid.copyTeacherReport()" class="px-3 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs">
            <i class="fa-brands fa-whatsapp"></i> Salin Rekap WA
          </button>
          <button onclick="CoopRaid.exportTeacherCSV()" class="px-3 py-2 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs">
            <i class="fa-solid fa-file-csv"></i> Ekspor CSV
          </button>
          <button onclick="CoopRaid.closeTeacherMonitor()" class="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition cursor-pointer ml-1">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
      </div>

      <!-- KPI METRIC CARDS -->
      <div class="p-4 md:p-5 grid grid-cols-2 lg:grid-cols-4 gap-3.5 border-b shrink-0" style="background-color: #F8FAFC; border-color: #E2E8F0;">
        <!-- CARD 1: TOTAL SISWA -->
        <div class="p-3.5 rounded-xl border bg-white border-slate-200 shadow-xs">
          <div class="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Total Siswa (XII F1-F4)</span>
            <i class="fa-solid fa-users text-slate-400"></i>
          </div>
          <div class="text-2xl font-black text-slate-800 mt-1">${totalSiswa}</div>
          <div class="text-[11px] text-slate-500 mt-0.5">${aktifSelesaiCount} Siswa Aktif / Tuntas</div>
        </div>

        <!-- CARD 2: LENCANA HIJAU -->
        <div class="p-3.5 rounded-xl border bg-emerald-50/70 border-emerald-200 shadow-xs">
          <div class="flex items-center justify-between text-emerald-800 text-xs font-semibold">
            <span>Lencana Hijau (Aman/Murni)</span>
            <i class="fa-solid fa-shield-check text-emerald-600"></i>
          </div>
          <div class="text-2xl font-black text-emerald-900 mt-1">${hijauCount}</div>
          <div class="text-[11px] text-emerald-700 mt-0.5">1–15x Pindah Layar (${totalSiswa ? Math.round((hijauCount / totalSiswa) * 100) : 0}%)</div>
        </div>

        <!-- CARD 3: LENCANA KUNING -->
        <div class="p-3.5 rounded-xl border bg-amber-50/70 border-amber-200 shadow-xs">
          <div class="flex items-center justify-between text-amber-900 text-xs font-semibold">
            <span>Lencana Kuning (Waspada)</span>
            <i class="fa-solid fa-triangle-exclamation text-amber-600"></i>
          </div>
          <div class="text-2xl font-black text-amber-950 mt-1">${kuningCount}</div>
          <div class="text-[11px] text-amber-800 mt-0.5">16–30x Pindah Layar (Peringatan)</div>
        </div>

        <!-- CARD 4: LENCANA MERAH -->
        <div class="p-3.5 rounded-xl border bg-rose-50/70 border-rose-200 shadow-xs">
          <div class="flex items-center justify-between text-rose-900 text-xs font-semibold">
            <span>Lencana Merah (Kritis)</span>
            <i class="fa-solid fa-circle-xmark text-rose-600"></i>
          </div>
          <div class="text-2xl font-black text-rose-950 mt-1">${merahCount}</div>
          <div class="text-[11px] text-rose-800 mt-0.5">&gt;30x Pindah Layar (Perlu Dibina)</div>
        </div>
      </div>

      <!-- FILTER TOOLBAR -->
      <div class="px-4 py-3 md:px-6 border-b flex flex-wrap items-center justify-between gap-3 shrink-0" style="background-color: #FFFFFF; border-color: #E2E8F0;">
        <div class="flex flex-wrap items-center gap-2.5 flex-1 min-w-[280px]">
          <!-- Filter Kelas -->
          <div class="flex items-center gap-1.5">
            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Kelas:</span>
            <select onchange="CoopRaid.filterTeacherMonitor('kelas', this.value)" class="p-1.5 px-2.5 rounded-lg border text-xs font-semibold cursor-pointer outline-none bg-slate-50 border-slate-300 text-slate-800">
              <option value="ALL" ${proctorFilterClass === 'ALL' ? 'selected' : ''}>Semua Kelas (100 Siswa)</option>
              <option value="XII F1" ${proctorFilterClass === 'XII F1' ? 'selected' : ''}>XII F1</option>
              <option value="XII F2" ${proctorFilterClass === 'XII F2' ? 'selected' : ''}>XII F2</option>
              <option value="XII F3" ${proctorFilterClass === 'XII F3' ? 'selected' : ''}>XII F3</option>
              <option value="XII F4" ${proctorFilterClass === 'XII F4' ? 'selected' : ''}>XII F4</option>
            </select>
          </div>

          <!-- Filter Lencana -->
          <div class="flex items-center gap-1.5">
            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Lencana:</span>
            <select onchange="CoopRaid.filterTeacherMonitor('badge', this.value)" class="p-1.5 px-2.5 rounded-lg border text-xs font-semibold cursor-pointer outline-none bg-slate-50 border-slate-300 text-slate-800">
              <option value="ALL" ${proctorFilterBadge === 'ALL' ? 'selected' : ''}>Semua Status</option>
              <option value="hijau" ${proctorFilterBadge === 'hijau' ? 'selected' : ''}>🟢 Hijau (1–15x)</option>
              <option value="kuning" ${proctorFilterBadge === 'kuning' ? 'selected' : ''}>🟡 Kuning (16–30x)</option>
              <option value="merah" ${proctorFilterBadge === 'merah' ? 'selected' : ''}>🔴 Merah (>30x)</option>
            </select>
          </div>

          <!-- Search Box -->
          <div class="relative flex-1 max-w-xs">
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-slate-400 text-xs"></i>
            <input type="text" placeholder="Cari nama atau NIS siswa..." value="${escapeHtml(proctorSearchQuery)}" 
              oninput="CoopRaid.filterTeacherMonitor('search', this.value)"
              class="w-full pl-8 pr-3 py-1.5 rounded-lg border text-xs outline-none bg-slate-50 border-slate-300 text-slate-800 placeholder-slate-400">
          </div>
        </div>

        <div class="text-xs font-semibold text-slate-500">
          Menampilkan: <span class="font-bold text-slate-800">${filtered.length}</span> dari ${totalSiswa} Siswa
        </div>
      </div>

      <!-- DATA TABLE (SCROLLABLE) -->
      <div class="flex-1 overflow-y-auto custom-scroll p-4 md:p-6" style="background-color: #FFFFFF;">
        <div class="border rounded-xl overflow-hidden shadow-xs border-slate-200">
          <table class="w-full text-left text-xs border-collapse">
            <thead class="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200 text-[11px] sticky top-0 z-10">
              <tr>
                <th class="py-2.5 px-3 w-12 text-center">No</th>
                <th class="py-2.5 px-3">Nama Siswa</th>
                <th class="py-2.5 px-3 w-20">Kelas</th>
                <th class="py-2.5 px-3">Kelompok &amp; Pos</th>
                <th class="py-2.5 px-3">Status Kuis</th>
                <th class="py-2.5 px-3 text-center w-20">Skor Co-op</th>
                <th class="py-2.5 px-3 text-center w-20">Skor Indiv</th>
                <th class="py-2.5 px-3 text-center w-20">Nilai Akhir</th>
                <th class="py-2.5 px-3 text-center w-28">Alt-Tab (Layar)</th>
                <th class="py-2.5 px-3 text-center w-28">Klik Salah (PIN)</th>
                <th class="py-2.5 px-3 text-center w-36">Lencana Integritas</th>
                <th class="py-2.5 px-3 text-center w-24">Rapor</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 font-medium">
              ${filtered.length === 0 ? `
                <tr>
                  <td colspan="10" class="py-8 text-center text-slate-400 italic">
                    <i class="fa-solid fa-inbox text-2xl mb-2 block text-slate-300"></i>
                    Tidak ada siswa yang sesuai dengan filter pencarian.
                  </td>
                </tr>
              ` : filtered.map(s => {
                const rowBg = s.badge.level === 'merah' 
                  ? 'bg-rose-50/40 hover:bg-rose-50/70' 
                  : (s.badge.level === 'kuning' ? 'bg-amber-50/30 hover:bg-amber-50/60' : 'hover:bg-slate-50');
                
                return `
                  <tr class="${rowBg} transition">
                    <td class="py-2.5 px-3 text-center text-slate-400 font-mono text-[11px]">${s.no}</td>
                    <td class="py-2.5 px-3 font-semibold text-slate-800">
                      <div>${escapeHtml(s.nama)}</div>
                      <div class="text-[10px] text-slate-400 font-mono">NIS: ${s.nis}</div>
                    </td>
                    <td class="py-2.5 px-3 text-slate-700 font-bold">${s.kelas}</td>
                    <td class="py-2.5 px-3 text-slate-600">${s.teamInfo}</td>
                    <td class="py-2.5 px-3">
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold ${s.status === 'Selesai' ? 'bg-indigo-100 text-indigo-800 border border-indigo-200' : (s.status === 'Belum Mulai' ? 'bg-slate-100 text-slate-600' : 'bg-emerald-100 text-emerald-800')}">
                        ${s.status}
                      </span>
                    </td>
                    <td class="py-2.5 px-3 text-center font-bold text-slate-700 font-mono">${s.scoreCoop}</td>
                    <td class="py-2.5 px-3 text-center font-bold text-indigo-700 font-mono">${s.scoreIndiv}</td>
                    <td class="py-2.5 px-3 text-center font-black text-slate-900 font-mono text-sm">${s.scoreFinal}</td>
                    <td class="py-2.5 px-3 text-center font-mono font-bold ${s.switchCount === 0 ? 'text-emerald-700' : (s.switchCount <= 2 ? 'text-amber-800' : 'text-rose-700')}">
                      ${s.switchCount}x
                    </td>
                    <td class="py-2.5 px-3 text-center font-mono font-bold ${s.pinErrors > 0 ? 'text-rose-700' : 'text-slate-400'}">
                      ${s.pinErrors}x
                    </td>
                    <td class="py-2.5 px-3 text-center">
                      ${s.badge.badgeHtml}
                    </td>
                    <td class="py-2.5 px-3 text-center">
                      <button onclick="CoopRaid.openStudentRapor('${s.nis}')" class="px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs border border-indigo-200 transition flex items-center justify-center gap-1 cursor-pointer w-full shadow-2xs" title="Buka Rapor Co-op Siswa">
                        <i class="fa-solid fa-file-invoice"></i> Rapor
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- FOOTER NOTE -->
      <div class="p-3 md:px-6 border-t flex flex-wrap items-center justify-between text-[11px] text-slate-500 shrink-0" style="background-color: #F8FAFC; border-color: #E2E8F0;">
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> <b>Hijau:</b> 1–15x Pindah Layar (Aman / Murni)</span>
          <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span> <b>Kuning:</b> 16–30x Pindah Layar (Waspada)</span>
          <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span> <b>Merah:</b> &gt;30x Pindah Layar (Kritis)</span>
        </div>
        <div class="italic text-slate-400">
          *Siswa tetap dapat mengerjakan ujian tanpa terblokir sistem. Pelanggaran tersinkronisasi otomatis.
        </div>
      </div>
    `;
  }

  function copyTeacherReport() {
    const allData = getProctorDataList();
    const totalSiswa = allData.length;
    const hijauCount = allData.filter(s => s.badge.level === 'hijau').length;
    const kuningCount = allData.filter(s => s.badge.level === 'kuning').length;
    const merahCount = allData.filter(s => s.badge.level === 'merah').length;
    const flagged = allData.filter(s => s.switchCount > 0);

    let flaggedList = '';
    if (flagged.length === 0) {
      flaggedList = '✅ Seluruh siswa mempertahankan integritas murni (0x pelanggaran).';
    } else {
      flaggedList = flagged.map((s, idx) => {
        const icon = s.badge.level === 'merah' ? '🔴' : (s.badge.level === 'kuning' ? '🟡' : '🟢');
        return `${idx + 1}. ${icon} *${s.nama}* (${s.kelas}) | Nilai Akhir: ${s.scoreFinal} (Co-op 40%: ${s.scoreCoop}, Mandiri 60%: ${s.scoreIndiv}) | Alt-Tab: ${s.switchCount}x [${s.badge.label}] | Klik Salah (PIN): ${s.pinErrors}x`;
      }).join('\n');
    }

    const report = 
`📋 *LAPORAN PENGAWASAN & INTEGRITAS SISWA*
🏆 *TURNAMEN CO-OP RAID STATISTIKA KELAS XII*
🏫 SMA Global Islamic School 2 Serpong
👨‍🏫 Guru Pengampu: Muhammad Ardiansyah, S.Pd.Gr.
📅 Waktu Pemantauan: ${new Date().toLocaleString('id-ID')}

📊 *RINGKASAN INTEGRITAS KELAS XII (100 SISWA):*
• Total Siswa Terdata: ${totalSiswa} Siswa
• 🟢 Lencana Hijau (1–15x): ${hijauCount} siswa (${totalSiswa ? Math.round((hijauCount / totalSiswa) * 100) : 0}%)
• 🟡 Lencana Kuning (16–30x): ${kuningCount} siswa
• 🔴 Lencana Merah (>30x): ${merahCount} siswa

🚨 *CATATAN SISWA DENGAN PERPINDAHAN LAYAR:*
${flaggedList}

📌 *Catatan Guru Pengampu:*
Siswa dengan lencana kuning/merah tetap menyelesaikan butir soal dan diarahkan untuk sesi konfirmasi kejujuran akademik.

🌐 Portal Resmi: https://mathcihuy.pages.dev`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(report).then(() => {
        alert("✅ Rekap laporan pengawasan berhasil disalin ke clipboard! Siap dikirim ke WhatsApp Guru/Wali Kelas.");
      }).catch(() => {
        copyFallback(report);
      });
    } else {
      copyFallback(report);
    }
  }

  function copyFallback(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    alert("✅ Rekap laporan pengawasan berhasil disalin ke clipboard!");
  }

  function exportTeacherCSV() {
    const allData = getProctorDataList();
    const rows = [
      ['No', 'NIS', 'Nama Siswa', 'Kelas', 'Kelompok & Pos', 'Status Pengerjaan', 'Skor Co-op (40%)', 'Skor Mandiri (60%)', 'Nilai Akhir (100%)', 'Jumlah Alt-Tab (Pindah Layar)', 'Jumlah Klik Salah (Uji PIN)', 'Lencana Integritas', 'Waktu Rekap']
    ];

    allData.forEach(s => {
      rows.push([
        s.no,
        `"${s.nis}"`,
        `"${s.nama.replace(/"/g, '""')}"`,
        `"${s.kelas}"`,
        `"${s.teamInfo}"`,
        `"${s.status}"`,
        s.scoreCoop,
        s.scoreIndiv,
        s.scoreFinal,
        s.switchCount,
        s.pinErrors,
        `"${s.badge.label}"`,
        `"${new Date().toLocaleString('id-ID')}"`
      ]);
    });

    const csvContent = '\uFEFF' + rows.map(r => r.join(',')).join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Laporan_Pengawasan_Integritas_Coop_Statistika_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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

  // Auto-init on script load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initCoopRaid();
      registerAntiCheatListeners();
    });
  } else {
    initCoopRaid();
    registerAntiCheatListeners();
  }

})();
