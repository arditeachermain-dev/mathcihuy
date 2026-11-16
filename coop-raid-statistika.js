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
        pinFormula: "Mo(68) + H(18) + σ²(8) + ȳ(90) + k(8) = 192",
        positions: {
          1: {
            title: "Pos 1: Modus Data Berkelompok",
            tipe: "mc",
            level: "L2 (Aplikasi)",
            keyNumber: 68,
            keyLabel: "Nilai Modus (Mo)",
            tanya: "Tabel distribusi frekuensi berikut menyajikan data nilai ujian Statistika dari 40 siswa kelas XII:<br><br>" +
                   "<div class='overflow-x-auto my-2'><table class='w-full text-xs border border-slate-700 rounded-lg overflow-hidden'>" +
                   "<thead class='bg-slate-800 text-slate-200'><tr><th class='p-2 border border-slate-700'>Nilai Ujian</th><th class='p-2 border border-slate-700'>Frekuensi (fi)</th><th class='p-2 border border-slate-700'>Frek. Kumulatif (fk)</th></tr></thead>" +
                   "<tbody>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>41 – 50</td><td class='p-1.5 border border-slate-700'>4</td><td class='p-1.5 border border-slate-700'>4</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>51 – 60</td><td class='p-1.5 border border-slate-700'>6</td><td class='p-1.5 border border-slate-700'>10</td></tr>" +
                   "<tr class='text-center bg-indigo-950/40 font-bold text-indigo-300'><td class='p-1.5 border border-slate-700'>61 – 70</td><td class='p-1.5 border border-slate-700'>12</td><td class='p-1.5 border border-slate-700'>22</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>71 – 80</td><td class='p-1.5 border border-slate-700'>10</td><td class='p-1.5 border border-slate-700'>32</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>81 – 90</td><td class='p-1.5 border border-slate-700'>8</td><td class='p-1.5 border border-slate-700'>40</td></tr>" +
                   "</tbody></table></div>" +
                   "Berdasarkan tabel distribusi frekuensi di atas, nilai modus dari data tersebut adalah ....",
            opsi: [
              "A. 63,0",
              "B. 66,5",
              "C. 67,5",
              "D. 68,0",
              "E. 68,5"
            ],
            kunci: "D",
            bahas: "Kelas modus pada interval 61–70 (f=12). L=60,5; p=10; d1=12-6=6; d2=12-10=2.<br>Mo = 60,5 + [6 / (6 + 2)] × 10 = 60,5 + 7,5 = <b>68,0</b>. Angka Kunci Pos 1 = <b>68</b>."
          },
          2: {
            title: "Pos 2: Rataan & Kuartil Data Berkelompok",
            tipe: "tf",
            level: "L2 (Aplikasi)",
            keyNumber: 18,
            keyLabel: "Jangkauan Antarkuartil (H)",
            tanya: "Berdasarkan tabel distribusi frekuensi 40 siswa yang sama (41-50: 4, 51-60: 6, 61-70: 12, 71-80: 10, 81-90: 8), tentukan apakah setiap pernyataan berikut bernilai <b>Benar</b> atau <b>Salah</b>!",
            pernyataan: [
              "Nilai rataan hitung (x̄) dari data ujian tersebut adalah 68,5.",
              "Nilai kuartil bawah (Q₁) dari data ujian tersebut adalah 61,5.",
              "Jangkauan antarkuartil (H = Q₃ - Q₁) dari data ujian tersebut adalah 18,0."
            ],
            kunci: ["B", "S", "B"],
            bahas: "Pernyataan 1 (Benar): x̄ = 65,5 + (12/40)×10 = 68,5.<br>Pernyataan 2 (Salah): Letak Q₁ = data ke-10 (interval 51–60) → Q₁ = 50,5 + [(10-4)/6]×10 = 60,5 (bukan 61,5).<br>Pernyataan 3 (Benar): Letak Q₃ = data ke-30 (interval 71–80) → Q₃ = 70,5 + [(30-22)/10]×10 = 78,5. Maka H = 78,5 - 60,5 = <b>18,0</b>. Angka Kunci Pos 2 = <b>18</b>."
          },
          3: {
            title: "Pos 3: Kecukupan Data (Ragam Barisan)",
            tipe: "ds",
            level: "L3 (Penalaran HOTS)",
            keyNumber: 8,
            keyLabel: "Nilai Ragam Populasi (σ²)",
            tanya: "Diketahui lima bilangan bulat positif terurut dari yang terkecil hingga terbesar adalah a, b, c, d, e. Berapakah nilai ragam (varians) populasi dari kelima bilangan tersebut?<br><br>" +
                   "Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:<br>" +
                   "<b>(1)</b> Kelima bilangan tersebut membentuk barisan aritmetika dengan beda 2.<br>" +
                   "<b>(2)</b> Nilai rata-rata kelima bilangan tersebut adalah 10 dan jangkauannya (e - a) adalah 8.",
            opsi: [
              "A. Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
              "B. Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
              "C. DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
              "D. Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
              "E. Pernyataan (1) dan pernyataan (2) TIDAK CUKUP untuk menjawab pertanyaan."
            ],
            kunci: "A",
            bahas: "Pernyataan (1): Kelima bilangan dapat dinyatakan sebagai c-4, c-2, c, c+2, c+4. Rataan = c. Ragam σ² = [(-4)² + (-2)² + 0² + 2² + 4²] / 5 = 40 / 5 = <b>8</b>. Nilai ragam pasti 8 tanpa perlu tahu nilai c (Cukup!).<br>Pernyataan (2): x̄=10 dan e-a=8. Data {6,8,10,12,14} memiliki σ²=8, tetapi data {6,9,10,11,14} memiliki σ²=6,8. Hasil tidak tunggal (Tidak cukup!).<br>Kunci: <b>A</b>. Angka Kunci Pos 3 = <b>8</b>."
          },
          4: {
            title: "Pos 4: Transformasi Linear Data",
            tipe: "multi",
            level: "L3 (Penalaran HOTS)",
            keyNumber: 90,
            keyLabel: "Rataan Rapor Baru (ȳ)",
            tanya: "Sekelompok data nilai awal ujian siswa memiliki rataan x̄₀ = 60, median Me₀ = 63, jangkauan R₀ = 30, dan simpangan baku s₀ = 6. Setiap nilai awal (xᵢ) diubah menjadi nilai baru (yᵢ) mengikuti fungsi transformasi linear: <b>yᵢ = (4/3)xᵢ + 10</b>.<br><br>" +
                   "Pilihlah <b>semua pernyataan yang bernilai BENAR</b> mengenai statistik data nilai rapor baru (yᵢ)!",
            opsi: [
              "A. Rataan nilai rapor siswa menjadi 90.",
              "B. Median nilai rapor siswa menjadi 94.",
              "C. Simpangan baku nilai rapor siswa menjadi 18.",
              "D. Jangkauan nilai rapor siswa menjadi 40.",
              "E. Ragam (varians) nilai rapor siswa menjadi 8."
            ],
            kunci: ["A", "B", "D"],
            bahas: "Opsi A (Benar): ȳ = (4/3)(60) + 10 = 80 + 10 = <b>90</b>.<br>Opsi B (Benar): Me_baru = (4/3)(63) + 10 = 84 + 10 = <b>94</b>.<br>Opsi C (Salah): Simpangan baku tidak dipengaruhi penjumlahan 10 → s_baru = (4/3)(6) = 8 (bukan 18).<br>Opsi D (Benar): R_baru = (4/3)(30) = <b>40</b>.<br>Opsi E (Salah): Ragam baru = 8² = 64.<br>Pernyataan Benar: <b>A, B, D</b>. Angka Kunci Pos 4 = <b>90</b>."
          },
          5: {
            title: "Pos 5: Frekuensi Hilang dari Median (Kapten)",
            tipe: "mc",
            level: "L3 (Penalaran HOTS)",
            keyNumber: 8,
            keyLabel: "Nilai Frekuensi Hilang (k)",
            tanya: "Tabel distribusi frekuensi berikut menyajikan data nilai praktikum siswa kelas XII dengan satu frekuensi yang belum diketahui (k):<br><br>" +
                   "<div class='overflow-x-auto my-2'><table class='w-full text-xs border border-slate-700 rounded-lg overflow-hidden'>" +
                   "<thead class='bg-slate-800 text-slate-200'><tr><th class='p-2 border border-slate-700'>Nilai Praktikum</th><th class='p-2 border border-slate-700'>Frekuensi (fi)</th><th class='p-2 border border-slate-700'>Frek. Kumulatif (fk)</th></tr></thead>" +
                   "<tbody>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>51 – 60</td><td class='p-1.5 border border-slate-700'>5</td><td class='p-1.5 border border-slate-700'>5</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>61 – 70</td><td class='p-1.5 border border-slate-700'>9</td><td class='p-1.5 border border-slate-700'>14</td></tr>" +
                   "<tr class='text-center bg-indigo-950/40 font-bold text-indigo-300'><td class='p-1.5 border border-slate-700'>71 – 80</td><td class='p-1.5 border border-slate-700'>12</td><td class='p-1.5 border border-slate-700'>26</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>81 – 90</td><td class='p-1.5 border border-slate-700'>k</td><td class='p-1.5 border border-slate-700'>26 + k</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>91 – 100</td><td class='p-1.5 border border-slate-700'>6</td><td class='p-1.5 border border-slate-700'>32 + k</td></tr>" +
                   "</tbody></table></div>" +
                   "Jika diketahui nilai median (Me) dari data pada tabel di atas adalah <b>75,5</b>, maka nilai k adalah ....",
            opsi: [
              "A. 6",
              "B. 8",
              "C. 10",
              "D. 12",
              "E. 14"
            ],
            kunci: "B",
            bahas: "Me = 75,5 terletak di kelas 71–80 (L=70,5; p=10; f_me=12; fk_sebelum=14). Total N = 32 + k.<br>75,5 = 70,5 + [((32+k)/2 - 14) / 12] × 10<br>5 = [(16 + 0,5k - 14) / 12] × 10 → 6 = 2 + 0,5k → 0,5k = 4 → <b>k = 8</b>.<br>Kunci: <b>B</b>. Angka Kunci Pos 5 = <b>8</b>."
          }
        }
      },
      {
        waveNo: 2,
        title: "Putaran 2: Analisis Ragam & Eliminasi Outlier",
        targetPin: 102,
        pinFormula: "Me(56) + (D7-D1)(21) + SR(4) + R_baru(15) + m(6) = 102",
        positions: {
          1: {
            title: "Pos 1: Median Data Berkelompok",
            tipe: "mc",
            level: "L2 (Aplikasi)",
            keyNumber: 56,
            keyLabel: "Nilai Median (Me)",
            tanya: "Tabel distribusi frekuensi berikut menyajikan skor tes literasi numerasi dari 50 siswa kelas XII:<br><br>" +
                   "<div class='overflow-x-auto my-2'><table class='w-full text-xs border border-slate-700 rounded-lg overflow-hidden'>" +
                   "<thead class='bg-slate-800 text-slate-200'><tr><th class='p-2 border border-slate-700'>Skor Tes</th><th class='p-2 border border-slate-700'>Frekuensi (fi)</th><th class='p-2 border border-slate-700'>Frek. Kumulatif (fk)</th></tr></thead>" +
                   "<tbody>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>31 – 40</td><td class='p-1.5 border border-slate-700'>5</td><td class='p-1.5 border border-slate-700'>5</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>41 – 50</td><td class='p-1.5 border border-slate-700'>9</td><td class='p-1.5 border border-slate-700'>14</td></tr>" +
                   "<tr class='text-center bg-indigo-950/40 font-bold text-indigo-300'><td class='p-1.5 border border-slate-700'>51 – 60</td><td class='p-1.5 border border-slate-700'>20</td><td class='p-1.5 border border-slate-700'>34</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>61 – 70</td><td class='p-1.5 border border-slate-700'>10</td><td class='p-1.5 border border-slate-700'>44</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>71 – 80</td><td class='p-1.5 border border-slate-700'>6</td><td class='p-1.5 border border-slate-700'>50</td></tr>" +
                   "</tbody></table></div>" +
                   "Berdasarkan tabel di atas, nilai median (Me) dari data tersebut adalah ....",
            opsi: [
              "A. 54,5",
              "B. 55,0",
              "C. 55,5",
              "D. 56,0",
              "E. 56,5"
            ],
            kunci: "D",
            bahas: "Letak median = data ke-25 (interval 51–60). L=50,5; p=10; fk=14; f_me=20.<br>Me = 50,5 + [(25 - 14) / 20] × 10 = 50,5 + 5,5 = <b>56,0</b>. Angka Kunci Pos 1 = <b>56</b>."
          },
          2: {
            title: "Pos 2: Rataan, Modus & Desil",
            tipe: "tf",
            level: "L2 (Aplikasi)",
            keyNumber: 21,
            keyLabel: "Selisih Desil (D₇ - D₁)",
            tanya: "Berdasarkan tabel skor 50 siswa (31-40: 5, 41-50: 9, 51-60: 20, 61-70: 10, 71-80: 6), tentukan status Benar atau Salah dari setiap pernyataan berikut!",
            pernyataan: [
              "Nilai rataan hitung (x̄) dari data skor tes tersebut adalah 56,1.",
              "Nilai modus (Mo) dari data skor tes tersebut adalah 55,5.",
              "Selisih antara desil ke-7 (D₇) dan desil ke-1 (D₁) adalah 21,0."
            ],
            kunci: ["B", "S", "B"],
            bahas: "Pernyataan 1 (Benar): Coding xs=55,5 → x̄ = 55,5 + (3/50)×10 = 56,1.<br>Pernyataan 2 (Salah): Modus di 51–60, d1=11, d2=10 → Mo = 50,5 + (11/21)×10 = 55,74 (bukan 55,5).<br>Pernyataan 3 (Benar): D₁ data ke-5 = 40,5; D₇ data ke-35 = 61,5. Selisih D₇ - D₁ = 61,5 - 40,5 = <b>21,0</b>. Angka Kunci Pos 2 = <b>21</b>."
          },
          3: {
            title: "Pos 3: Simpangan Rata-Rata (Kecukupan Data)",
            tipe: "ds",
            level: "L3 (Penalaran HOTS)",
            keyNumber: 4,
            keyLabel: "Simpangan Rata-rata (SR)",
            tanya: "Diketahui empat bilangan bulat positif terurut p ≤ q ≤ r ≤ s memiliki rata-rata 15 dan median 15. Berapakah nilai simpangan rata-rata (SR) dari keempat bilangan tersebut?<br><br>" +
                   "Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:<br>" +
                   "<b>(1)</b> Jumlah dua bilangan terkecil (p + q) adalah 22.<br>" +
                   "<b>(2)</b> Dua bilangan terbesarnya berturut-turut adalah r = 17 dan s = 21.",
            opsi: [
              "A. Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
              "B. Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
              "C. DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
              "D. Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
              "E. Pernyataan (1) dan pernyataan (2) TIDAK CUKUP untuk menjawab pertanyaan."
            ],
            kunci: "D",
            bahas: "Total data p+q+r+s = 60. Karena p ≤ q ≤ 15 ≤ r ≤ s, rumus SR = [(r + s) - (p + q)] / 4.<br>Pernyataan (1): p+q=22 → r+s = 60 - 22 = 38 → SR = (38 - 22) / 4 = <b>4</b> (Cukup!).<br>Pernyataan (2): r=17, s=21 → r+s=38 → p+q=22 → SR = (38 - 22) / 4 = <b>4</b> (Cukup!).<br>Kunci: <b>D</b>. Angka Kunci Pos 3 = <b>4</b>."
          },
          4: {
            title: "Pos 4: Eliminasi Pencilan (Outlier)",
            tipe: "multi",
            level: "L3 (Penalaran HOTS)",
            keyNumber: 15,
            keyLabel: "Jangkauan Baru (R_baru)",
            tanya: "Lima siswa mengikuti kuis susulan dengan skor: 70, 75, 80, 85, 40. Karena skor 40 teridentifikasi sebagai kesalahan sistem (pencilan), skor tersebut dihapus sehingga tersisa 4 data: {70, 75, 80, 85}.<br><br>" +
                   "Pilihlah <b>semua pernyataan yang BENAR</b> mengenai kondisi statistik setelah skor 40 dihapus!",
            opsi: [
              "A. Rataan hitung data meningkat dari 70 menjadi 77,5.",
              "B. Median data tetap bernilai 75.",
              "C. Jangkauan data menyusut menjadi 15.",
              "D. Simpangan rata-rata dari 4 data yang tersisa adalah 5.",
              "E. Ragam populasi data meningkat setelah pencilan dihapus."
            ],
            kunci: ["A", "C", "D"],
            bahas: "Opsi A (Benar): Rataan awal = 350/5 = 70. Rataan baru = 310/4 = <b>77,5</b>.<br>Opsi B (Salah): Median baru = (75 + 80)/2 = 77,5.<br>Opsi C (Benar): Jangkauan baru = 85 - 70 = <b>15</b>.<br>Opsi D (Benar): SR = (|70-77,5| + |75-77,5| + |80-77,5| + |85-77,5|) / 4 = (7,5 + 2,5 + 2,5 + 7,5)/4 = <b>5</b>.<br>Opsi E (Salah): Data makin homogen, ragam menurun.<br>Kunci: <b>A, C, D</b>. Angka Kunci Pos 4 = <b>15</b>."
          },
          5: {
            title: "Pos 5: Frekuensi Hilang dari Rataan (Kapten)",
            tipe: "mc",
            level: "L3 (Penalaran HOTS)",
            keyNumber: 6,
            keyLabel: "Nilai Frekuensi Hilang (m)",
            tanya: "Tabel distribusi frekuensi usia peserta komunitas lari:<br><br>" +
                   "<div class='overflow-x-auto my-2'><table class='w-full text-xs border border-slate-700 rounded-lg overflow-hidden'>" +
                   "<thead class='bg-slate-800 text-slate-200'><tr><th class='p-2 border border-slate-700'>Kelompok Usia</th><th class='p-2 border border-slate-700'>Titik Tengah (xi)</th><th class='p-2 border border-slate-700'>Frekuensi (fi)</th></tr></thead>" +
                   "<tbody>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>11 – 15</td><td class='p-1.5 border border-slate-700'>13</td><td class='p-1.5 border border-slate-700'>5</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>16 – 20</td><td class='p-1.5 border border-slate-700'>18</td><td class='p-1.5 border border-slate-700'>8</td></tr>" +
                   "<tr class='text-center bg-indigo-950/40 font-bold text-indigo-300'><td class='p-1.5 border border-slate-700'>21 – 25</td><td class='p-1.5 border border-slate-700'>23</td><td class='p-1.5 border border-slate-700'>13</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>26 – 30</td><td class='p-1.5 border border-slate-700'>28</td><td class='p-1.5 border border-slate-700'>m</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>31 – 35</td><td class='p-1.5 border border-slate-700'>33</td><td class='p-1.5 border border-slate-700'>8</td></tr>" +
                   "</tbody></table></div>" +
                   "Jika rataan hitung usia peserta pada tabel di atas adalah <b>23,5 tahun</b>, maka nilai m adalah ....",
            opsi: [
              "A. 4",
              "B. 6",
              "C. 8",
              "D. 10",
              "E. 12"
            ],
            kunci: "B",
            bahas: "Rataan sementara xs = 23, p = 5. Σfi = 34 + m. Σfi·ci = 5(-2) + 8(-1) + 13(0) + m(1) + 8(2) = m - 2.<br>23,5 = 23 + [(m - 2) / (34 + m)] × 5 → 0,5(34 + m) = 5(m - 2) → 17 + 0,5m = 5m - 10 → 4,5m = 27 → <b>m = 6</b>.<br>Kunci: <b>B</b>. Angka Kunci Pos 5 = <b>6</b>."
          }
        }
      },
      {
        waveNo: 3,
        title: "Putaran 3: Komparasi Populasi & Kuartil Poligon",
        targetPin: 217,
        pinFormula: "Q3(78) + x̄(68) + nA(36) + σ_total²(26) + b(9) = 217",
        positions: {
          1: {
            title: "Pos 1: Kuartil Atas Data Berkelompok",
            tipe: "mc",
            level: "L2 (Aplikasi)",
            keyNumber: 78,
            keyLabel: "Nilai Kuartil Atas (Q₃)",
            tanya: "Tabel durasi belajar mandiri (dalam menit) dari 60 siswa kelas XII:<br><br>" +
                   "<div class='overflow-x-auto my-2'><table class='w-full text-xs border border-slate-700 rounded-lg overflow-hidden'>" +
                   "<thead class='bg-slate-800 text-slate-200'><tr><th class='p-2 border border-slate-700'>Durasi Belajar</th><th class='p-2 border border-slate-700'>Frekuensi (fi)</th><th class='p-2 border border-slate-700'>Frek. Kumulatif (fk)</th></tr></thead>" +
                   "<tbody>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>41 – 50</td><td class='p-1.5 border border-slate-700'>7</td><td class='p-1.5 border border-slate-700'>7</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>51 – 60</td><td class='p-1.5 border border-slate-700'>11</td><td class='p-1.5 border border-slate-700'>18</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>61 – 70</td><td class='p-1.5 border border-slate-700'>12</td><td class='p-1.5 border border-slate-700'>30</td></tr>" +
                   "<tr class='text-center bg-indigo-950/40 font-bold text-indigo-300'><td class='p-1.5 border border-slate-700'>71 – 80</td><td class='p-1.5 border border-slate-700'>20</td><td class='p-1.5 border border-slate-700'>50</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>81 – 90</td><td class='p-1.5 border border-slate-700'>10</td><td class='p-1.5 border border-slate-700'>60</td></tr>" +
                   "</tbody></table></div>" +
                   "Berdasarkan tabel durasi belajar 60 siswa di atas, nilai kuartil atas (Q₃) adalah ....",
            opsi: [
              "A. 75,5",
              "B. 76,0",
              "C. 77,5",
              "D. 78,0",
              "E. 78,5"
            ],
            kunci: "D",
            bahas: "Letak Q₃ = data ke-45 (interval 71–80). L=70,5; p=10; fk=30; f=20.<br>Q₃ = 70,5 + [(45 - 30) / 20] × 10 = 70,5 + 7,5 = <b>78,0</b>. Angka Kunci Pos 1 = <b>78</b>."
          },
          2: {
            title: "Pos 2: Evaluasi Pemusatan Data Berkelompok",
            tipe: "tf",
            level: "L2 (Aplikasi)",
            keyNumber: 68,
            keyLabel: "Rataan Hitung (x̄)",
            tanya: "Berdasarkan tabel durasi belajar 60 siswa di atas, tentukan status Benar atau Salah dari setiap pernyataan berikut!",
            pernyataan: [
              "Nilai rataan hitung (x̄) durasi belajar siswa adalah 68,0 menit.",
              "Nilai median (Me) durasi belajar siswa adalah 70,5 menit.",
              "Nilai modus (Mo) durasi belajar siswa adalah 75,5 menit."
            ],
            kunci: ["B", "B", "S"],
            bahas: "Pernyataan 1 (Benar): Coding xs=65,5 → x̄ = 65,5 + (15/60)×10 = <b>68,0</b>.<br>Pernyataan 2 (Benar): Median data ke-30 ada di batas atas kelas 61–70 → Me = 60,5 + (12/12)×10 = <b>70,5</b>.<br>Pernyataan 3 (Salah): Modus di 71–80, d1=8, d2=10 → Mo = 70,5 + (8/18)×10 = 74,94 (bukan 75,5).<br>Kunci: <b>B - B - S</b>. Angka Kunci Pos 2 = <b>68</b>."
          },
          3: {
            title: "Pos 3: Rataan Gabungan (Kecukupan Data)",
            tipe: "ds",
            level: "L3 (Penalaran HOTS)",
            keyNumber: 36,
            keyLabel: "Jumlah Siswa XII-A (nA)",
            tanya: "Rataan nilai ujian Matematika gabungan dari kelas XII-A dan XII-B adalah 82. Jika rataan kelas XII-A adalah 80 dan rataan kelas XII-B adalah 85, berapakah jumlah siswa di kelas XII-A?<br><br>" +
                   "Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:<br>" +
                   "<b>(1)</b> Perbandingan jumlah siswa kelas XII-A dan XII-B adalah 3 : 2.<br>" +
                   "<b>(2)</b> Selisih jumlah siswa kelas XII-A dan XII-B adalah 12 orang.",
            opsi: [
              "A. Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
              "B. Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
              "C. DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
              "D. Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
              "E. Pernyataan (1) dan pernyataan (2) TIDAK CUKUP untuk menjawab pertanyaan."
            ],
            kunci: "B",
            bahas: "Dari soal utama: 82(nA + nB) = 80nA + 85nB → 2nA = 3nB → nB = (2/3)nA.<br>Pernyataan (1): Hanya menegaskan nA : nB = 3 : 2 (Informasi sudah ada pada soal utama, tidak cukup sendiri).<br>Pernyataan (2): nA - nB = 12 → nA - (2/3)nA = 12 → (1/3)nA = 12 → <b>nA = 36</b> (Cukup sendiri!).<br>Kunci: <b>B</b>. Angka Kunci Pos 3 = <b>36</b>."
          },
          4: {
            title: "Pos 4: Komparasi Ragam & Konsistensi Regu",
            tipe: "multi",
            level: "L3 (Penalaran HOTS)",
            keyNumber: 26,
            keyLabel: "Total Ragam (σ_Elang² + σ_Rajawali²)",
            tanya: "Dua regu panahan masing-masing terdiri atas 5 atlet dengan rincian skor:<br>" +
                   "• <b>Regu Elang</b>: 16, 18, 20, 22, 24<br>" +
                   "• <b>Regu Rajawali</b>: 14, 17, 20, 23, 26<br><br>" +
                   "Pilihlah <b>semua pernyataan yang BENAR</b>!",
            opsi: [
              "A. Kedua regu memiliki rataan hitung dan median yang sama besar, yaitu 20.",
              "B. Ragam populasi skor Regu Elang adalah 8 dan Regu Rajawali adalah 18.",
              "C. Perbandingan simpangan baku Regu Elang terhadap Regu Rajawali adalah 4 : 9.",
              "D. Skor atlet Regu Elang lebih konsisten (homogen) dibandingkan Regu Rajawali.",
              "E. Jangkauan skor Regu Elang lebih besar daripada Regu Rajawali."
            ],
            kunci: ["A", "B", "D"],
            bahas: "Opsi A (Benar): Rataan & median keduanya = 20.<br>Opsi B (Benar): σ_E² = (16+4+0+4+16)/5 = <b>8</b>. σ_R² = (36+9+0+9+36)/5 = <b>18</b>. Total = 8 + 18 = <b>26</b>.<br>Opsi C (Salah): Rasio SD = √8 : √18 = 2√2 : 3√2 = 2 : 3 (bukan 4:9).<br>Opsi D (Benar): SD Elang lebih kecil, maka lebih konsisten.<br>Opsi E (Salah): Jangkauan Elang 8 < Rajawali 12.<br>Kunci: <b>A, B, D</b>. Angka Kunci Pos 4 = <b>26</b>."
          },
          5: {
            title: "Pos 5: Dua Frekuensi Hilang dari Median (Kapten)",
            tipe: "mc",
            level: "L3 (Penalaran HOTS)",
            keyNumber: 9,
            keyLabel: "Nilai Frekuensi Hilang (b)",
            tanya: "Tabel berikut menyajikan data berat badan 50 siswa dengan dua frekuensi kelas yang belum diketahui (a dan b):<br><br>" +
                   "<div class='overflow-x-auto my-2'><table class='w-full text-xs border border-slate-700 rounded-lg overflow-hidden'>" +
                   "<thead class='bg-slate-800 text-slate-200'><tr><th class='p-2 border border-slate-700'>Berat Badan (kg)</th><th class='p-2 border border-slate-700'>Frekuensi (fi)</th></tr></thead>" +
                   "<tbody>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>41 – 50</td><td class='p-1.5 border border-slate-700'>4</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>51 – 60</td><td class='p-1.5 border border-slate-700'>a</td></tr>" +
                   "<tr class='text-center bg-indigo-950/40 font-bold text-indigo-300'><td class='p-1.5 border border-slate-700'>61 – 70</td><td class='p-1.5 border border-slate-700'>16</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>71 – 80</td><td class='p-1.5 border border-slate-700'>b</td></tr>" +
                   "<tr class='text-center'><td class='p-1.5 border border-slate-700'>81 – 90</td><td class='p-1.5 border border-slate-700'>8</td></tr>" +
                   "</tbody></table></div>" +
                   "Jika total siswa 50 orang dan median (Me) adalah <b>65,5 kg</b>, maka nilai b adalah ....",
            opsi: [
              "A. 7",
              "B. 8",
              "C. 9",
              "D. 11",
              "E. 13"
            ],
            kunci: "C",
            bahas: "Total N = 50 → 4 + a + 16 + b + 8 = 50 → a + b = 22.<br>Median Me = 65,5 di 61–70 (L=60,5; p=10; f=16; fk_sebelum=4+a).<br>65,5 = 60,5 + [(25 - (4+a)) / 16] × 10 → 5 = [(21-a)/16]×10 → 8 = 21-a → a = 13.<br>Maka b = 22 - 13 = <b>9</b>.<br>Kunci: <b>C</b>. Angka Kunci Pos 5 = <b>9</b>."
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
    individualAnswers: {},
    individualStarted: false,
    individualDone: false,
    individualTimeLeft: 1200, // 20 minutes
    scoreCoop: 0,
    scoreIndividual: 0,
    finalScore: 0
  };

  function loadSavedSession() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        currentSession = Object.assign(currentSession, parsed);
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
    submitActivePosAnswer: submitActivePosAnswer,
    submitWavePin: submitWavePin,
    startIndividualTest: startIndividualTest,
    saveIndividualAnswer: saveIndividualAnswer,
    submitIndividualTest: submitIndividualTest,
    resetTournament: resetTournament,
    copyResult: copyResult
  };

  // --------------------------------------------------------------------------
  // 4. RENDERER DAN UI BINDING
  // --------------------------------------------------------------------------
  let timerInterval = null;

  function initCoopRaid() {
    loadSavedSession();
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
    Object.keys(students).forEach(id => {
      const s = students[id];
      if (s.kelas === currentClass) {
        const selected = s.nama === currentSession.studentName ? 'selected' : '';
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
          <button onclick="CoopRaid.closeModal()" class="w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
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
            <select id="coop-select-kelas" onchange="CoopRaid.session.className = this.value; CoopRaid.openModal();" class="w-full p-2.5 rounded-xl border text-sm font-semibold cursor-pointer outline-none transition" style="background-color: #FFFFFF; border-color: #CBD5E1; color: #1E293B;">
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
    const isAnswered = currentAns !== undefined && currentAns !== null;
    const isCorrect = isAnswerCorrect(posData, currentAns);

    container.innerHTML = `
      <div class="p-4 md:p-6 space-y-5 flex flex-col max-h-[88vh] overflow-y-auto custom-scroll">
        <!-- TOP HUD -->
        <div class="border-b pb-3 flex flex-wrap items-center justify-between gap-3" style="border-color: #E2E8F0;">
          <div class="flex items-center gap-2.5">
            <span class="px-3 py-1 rounded-lg text-xs font-bold" style="background-color: #EEF2FF; color: #4338CA; border: 1px solid #C7D2FE;">
              <i class="fa-solid fa-users"></i> Kelompok ${currentSession.groupNo}
            </span>
            <span class="px-2.5 py-1 rounded-lg text-xs font-semibold" style="background-color: #F1F5F9; color: #475569;">
              Anggota ${memberNo} (${escapeHtml(currentSession.studentName)})
            </span>
            <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold" style="background-color: #FEF3C7; color: #92400E; border: 1px solid #FDE68A;">
              Tugas: Pos ${activePos}
            </span>
          </div>

          <!-- WAVE TABS -->
          <div class="flex items-center gap-1.5">
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
            ${isCorrect ? `
              <span class="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1.5 animate-bounce">
                <i class="fa-solid fa-check"></i> Pos Tuntas!
              </span>
            ` : ''}
          </div>

          <!-- QUESTION CONTENT -->
          <div class="text-xs md:text-sm leading-relaxed text-slate-800">
            ${posData.tanya}
          </div>

          <!-- INTERACTIVE OPTIONS FORM -->
          <div id="coop-pos-options-area" class="space-y-2 pt-1">
            ${renderPosOptionsHtml(posData, currentAns, isCorrect)}
          </div>

          <!-- SUBMIT / VERIFY BUTTON -->
          ${!isCorrect ? `
            <div class="pt-2">
              <button onclick="CoopRaid.submitActivePosAnswer(${waveNo}, ${activePos})" class="min-h-[44px] px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2 cursor-pointer transition">
                <i class="fa-solid fa-key"></i> Kunci Jawaban &amp; Cek Angka Kunci Pos
              </button>
            </div>
          ` : `
            <!-- REVEALED KEY NUMBER CARD -->
            <div id="coop-revealed-key" class="p-3.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-900 flex items-center justify-between">
              <div>
                <div class="text-[11px] font-bold text-emerald-700 uppercase tracking-wide">Kontribusi Angka Kunci Anda:</div>
                <div class="text-sm font-semibold">${posData.keyLabel}: <span class="font-mono text-base font-black text-emerald-900">${posData.keyNumber}</span></div>
              </div>
              <div class="text-2xl font-black font-mono text-emerald-700 bg-white px-3 py-1.5 rounded-lg border border-emerald-200 shadow-xs">
                ${posData.keyNumber}
              </div>
            </div>
          `}
        </div>

        <!-- RAKITAN PIN TIM SECTION -->
        <div class="p-4 md:p-5 rounded-2xl border shadow-xs space-y-3.5" style="background-color: #F8FAFC; border-color: #CBD5E1;">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
              <i class="fa-solid fa-shield-halved text-indigo-600"></i> Rakitan PIN Master Tim (Putaran ${waveNo})
            </span>
            <span class="text-[11px] text-slate-500 font-medium">Satukan angka dari 5 anggota</span>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-3">
            <div class="flex-1 w-full flex items-center gap-2">
              <input type="number" id="coop-pin-input" placeholder="Masukkan 3 Digit PIN Tim (Contoh: 192)" 
                class="w-full p-2.5 rounded-xl border text-sm font-mono font-bold tracking-wider text-center outline-none transition" 
                style="background-color: #FFFFFF; border-color: #CBD5E1; color: #1E293B;"
                value="${currentSession.wavePins[waveNo] || ''}">
            </div>
            <button onclick="CoopRaid.submitWavePin(${waveNo})" class="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2 cursor-pointer transition shrink-0">
              <i class="fa-solid fa-unlock"></i> Buka Gerbang Babak
            </button>
          </div>

          <div class="text-[11px] text-slate-500 leading-relaxed italic">
            *Tips Kolaborasi: Jika ada teman di Pos lain yang kesulitan menghitung, Anggota yang sudah tuntas wajib membantu menghitung di kertas buram agar kelima angka kunci terkumpul!
          </div>
        </div>
      </div>
    `;
  }

  function renderPosOptionsHtml(posData, currentAns, isCorrect) {
    if (posData.tipe === 'mc' || posData.tipe === 'ds') {
      return posData.opsi.map(opt => {
        const val = opt.charAt(0);
        const isChecked = currentAns === val;
        return `
          <label class="p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition ${isChecked ? 'border-indigo-600 bg-indigo-50/60 font-semibold' : 'border-slate-200 hover:bg-slate-50'}" style="background-color: #FFFFFF;">
            <input type="radio" name="coop_active_opt" value="${val}" ${isChecked ? 'checked' : ''} ${isCorrect ? 'disabled' : ''} class="w-4 h-4 text-indigo-600 cursor-pointer">
            <span class="text-xs md:text-sm text-slate-700">${opt}</span>
          </label>
        `;
      }).join('');
    } else if (posData.tipe === 'tf') {
      const savedArr = Array.isArray(currentAns) ? currentAns : ['', '', ''];
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
              ${posData.pernyataan.map((p, idx) => `
                <tr class="border-t border-slate-200">
                  <td class="p-2 font-bold text-center border-r border-slate-200">${idx + 1}</td>
                  <td class="p-2 border-r border-slate-200 text-slate-700">${p}</td>
                  <td class="p-2 text-center">
                    <div class="flex items-center justify-center gap-2">
                      <label class="flex items-center gap-1 cursor-pointer">
                        <input type="radio" name="coop_tf_${idx}" value="B" ${savedArr[idx] === 'B' ? 'checked' : ''} ${isCorrect ? 'disabled' : ''}>
                        <span class="font-bold text-emerald-700">B</span>
                      </label>
                      <label class="flex items-center gap-1 cursor-pointer">
                        <input type="radio" name="coop_tf_${idx}" value="S" ${savedArr[idx] === 'S' ? 'checked' : ''} ${isCorrect ? 'disabled' : ''}>
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
    } else if (posData.tipe === 'multi') {
      const savedArr = Array.isArray(currentAns) ? currentAns : [];
      return posData.opsi.map(opt => {
        const val = opt.charAt(0);
        const isChecked = savedArr.includes(val);
        return `
          <label class="p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition ${isChecked ? 'border-indigo-600 bg-indigo-50/60 font-semibold' : 'border-slate-200 hover:bg-slate-50'}" style="background-color: #FFFFFF;">
            <input type="checkbox" name="coop_multi_opt" value="${val}" ${isChecked ? 'checked' : ''} ${isCorrect ? 'disabled' : ''} class="w-4 h-4 text-indigo-600 rounded cursor-pointer">
            <span class="text-xs md:text-sm text-slate-700">${opt}</span>
          </label>
        `;
      }).join('');
    }
    return '';
  }

  function isAnswerCorrect(posData, userAns) {
    if (!userAns) return false;
    if (posData.tipe === 'mc' || posData.tipe === 'ds') {
      return String(userAns).trim().toUpperCase() === String(posData.kunci).trim().toUpperCase();
    } else if (posData.tipe === 'tf') {
      if (!Array.isArray(userAns) || userAns.length !== posData.kunci.length) return false;
      return userAns.every((v, i) => v === posData.kunci[i]);
    } else if (posData.tipe === 'multi') {
      if (!Array.isArray(userAns)) return false;
      const sortedUser = [...userAns].sort();
      const sortedKey = [...posData.kunci].sort();
      return sortedUser.length === sortedKey.length && sortedUser.every((v, i) => v === sortedKey[i]);
    }
    return false;
  }

  function submitActivePosAnswer(waveNo, posNo) {
    if (!waveNo) waveNo = currentSession.activeWave || 1;
    if (!posNo) posNo = getActivePositionForMember(currentSession.memberNo, waveNo);
    const wave = COOP_DATA.waves[waveNo - 1];
    const posData = wave ? wave.positions[posNo] : null;
    if (!posData) return;
    let userAns = null;

    if (posData.tipe === 'mc' || posData.tipe === 'ds') {
      const checked = document.querySelector('input[name="coop_active_opt"]:checked');
      if (!checked) {
        alert("Silakan pilih salah satu opsi jawaban terlebih dahulu.");
        return;
      }
      userAns = checked.value;
    } else if (posData.tipe === 'tf') {
      userAns = [];
      for (let i = 0; i < posData.pernyataan.length; i++) {
        const c = document.querySelector(`input[name="coop_tf_${i}"]:checked`);
        if (!c) {
          alert(`Pernyataan ke-${i + 1} belum dijawab! Tentukan status Benar atau Salah.`);
          return;
        }
        userAns.push(c.value);
      }
    } else if (posData.tipe === 'multi') {
      userAns = [];
      const boxes = document.querySelectorAll('input[name="coop_multi_opt"]:checked');
      if (boxes.length === 0) {
        alert("Pilihlah minimal satu pernyataan yang bernilai benar.");
        return;
      }
      boxes.forEach(b => userAns.push(b.value));
    }

    currentSession.waveAnswers[waveNo] = currentSession.waveAnswers[waveNo] || {};
    currentSession.waveAnswers[waveNo][posNo] = userAns;
    saveCurrentSession();

    if (isAnswerCorrect(posData, userAns)) {
      alert(`🎉 LUAR BIASA! Jawaban Pos ${posNo} Anda BENAR!\nAngka Kunci Kontribusi Anda: ${posData.keyNumber}\nBagikan angka ini ke rekan setimmu untuk merakit PIN Tim!`);
    } else {
      alert("⚠️ Jawaban Anda belum tepat. Periksa kembali langkah perhitungan Anda atau minta bantuan rekan tim!");
    }

    renderCurrentView();
  }

  function submitWavePin(waveNo) {
    const input = document.getElementById('coop-pin-input');
    const pinVal = parseInt(input?.value || '0');
    const wave = COOP_DATA.waves[waveNo - 1];

    if (pinVal === wave.targetPin) {
      currentSession.wavePins[waveNo] = pinVal;
      if (waveNo < 3) {
        currentSession.waveUnlocked[waveNo + 1] = true;
        currentSession.activeWave = waveNo + 1;
        saveCurrentSession();
        alert(`🏆 GERBANG BABAK ${waveNo} BERHASIL TERBUKA!\nPIN Tim ${pinVal} TERVALIDASI SEMPURNA.\nLanjut ke Putaran ${waveNo + 1}!`);
        renderCurrentView();
      } else {
        // All 3 waves complete!
        currentSession.scoreCoop = 100;
        saveCurrentSession();
        alert("🎉 SELAMAT! TIM ANDA TELAH MENUNTASKAN SELURUH 3 PUTARAN CO-OP RAID DENGAN SEMPURNA!\nSkor Kolaborasi Tim: 100 POIN.\nSekarang seluruh anggota akan masuk ke Sesi Evaluasi Individu (5 Soal • 20 Menit)!");
        startIndividualTest();
      }
    } else {
      alert(`❌ PIN Tim ${pinVal || 0} TIDAK TEPAT!\nRumus target: ${wave.pinFormula}.\nPastikan seluruh 5 anggota tim telah menghitung dengan benar di pos masing-masing!`);
    }
  }

  // VIEW 3: UJIAN EVALUASI INDIVIDU (5 SOAL • 20 MENIT)
  function startIndividualTest() {
    currentSession.individualStarted = true;
    currentSession.individualDone = false;
    currentSession.individualTimeLeft = currentSession.individualTimeLeft || 1200;
    saveCurrentSession();

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

    container.innerHTML = `
      <div class="p-4 md:p-6 space-y-5 flex flex-col max-h-[88vh] overflow-y-auto custom-scroll">
        <!-- TOP STATUS -->
        <div class="border-b pb-3 flex items-center justify-between" style="border-color: #E2E8F0;">
          <div class="flex items-center gap-2.5">
            <span class="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
              <i class="fa-solid fa-user-pen"></i> Evaluasi Mandiri Siswa
            </span>
            <span class="text-xs font-semibold text-slate-700">
              ${escapeHtml(currentSession.studentName)} (${currentSession.className} • Kelompok ${currentSession.groupNo})
            </span>
          </div>

          <!-- TIMER DISPLAY -->
          <div class="px-3.5 py-1 rounded-xl bg-slate-900 text-amber-300 font-mono font-bold text-sm flex items-center gap-2 border border-slate-700 shadow-xs">
            <i class="fa-solid fa-stopwatch text-amber-400"></i>
            <span id="coop-indiv-timer">${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}</span>
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

  // VIEW 4: SCORECARD & REKAP AKHIR
  function renderScorecardView(container) {
    const qList = COOP_DATA.individual;
    container.innerHTML = `
      <div id="coop-scorecard-box" class="p-5 md:p-7 space-y-6 flex flex-col max-h-[88vh] overflow-y-auto custom-scroll">
        <!-- HEADER SCORECARD -->
        <div class="text-center space-y-1.5 border-b pb-4" style="border-color: #E2E8F0;">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
            <i class="fa-solid fa-trophy"></i> Turnamen Co-op Raid Tuntas
          </div>
          <h2 class="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">Rapor Hasil Capaian Turnamen Statistika</h2>
          <p class="text-xs text-slate-500 font-medium">SMA Global Islamic School 2 Serpong • TP 2026/2027</p>
        </div>

        <!-- IDENTITY & KPI GRID -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="p-3.5 rounded-xl border bg-slate-50 border-slate-200">
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Siswa &amp; Kelas</span>
            <span class="text-xs font-bold text-slate-800 truncate block mt-0.5">${escapeHtml(currentSession.studentName)}</span>
            <span class="text-[10px] text-slate-500 font-mono">${currentSession.className}</span>
          </div>

          <div class="p-3.5 rounded-xl border bg-slate-50 border-slate-200">
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Tim Kelompok</span>
            <span class="text-xs font-bold text-indigo-700 block mt-0.5">Kelompok ${currentSession.groupNo}</span>
            <span class="text-[10px] text-slate-500 font-mono">Anggota ${currentSession.memberNo}</span>
          </div>

          <div class="p-3.5 rounded-xl border bg-slate-50 border-slate-200">
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Skor Co-op Tim</span>
            <span class="text-lg font-black text-emerald-700 block mt-0.5">${currentSession.scoreCoop}</span>
            <span class="text-[10px] text-emerald-600 font-medium">3 Putaran Tuntas</span>
          </div>

          <div class="p-3.5 rounded-xl border bg-slate-50 border-slate-200">
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Skor Individu</span>
            <span id="coop-final-score" class="text-lg font-black text-indigo-700 block mt-0.5">${currentSession.scoreIndividual}</span>
            <span class="text-[10px] text-indigo-600 font-medium">5 Butir Ujian Mandiri</span>
          </div>
        </div>

        <!-- PEMBAHASAN DETAIL ACCORDION -->
        <div class="space-y-3 pt-2">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
            <i class="fa-solid fa-list-check text-indigo-600"></i> Rincian Evaluasi Soal Individu:
          </h4>
          <div class="space-y-2.5">
            ${qList.map((q, idx) => {
              const u = currentSession.individualAnswers[q.no];
              const isCor = isAnswerCorrect(q, u);
              return `
                <div class="p-3.5 rounded-xl border text-xs space-y-1.5 ${isCor ? 'border-emerald-200 bg-emerald-50/50' : 'border-rose-200 bg-rose-50/40'}">
                  <div class="flex items-center justify-between font-bold">
                    <span class="text-slate-800">Soal ${q.no}: ${q.title}</span>
                    <span class="${isCor ? 'text-emerald-700' : 'text-rose-700'} flex items-center gap-1">
                      ${isCor ? '<i class="fa-solid fa-circle-check"></i> Benar (20 Poin)' : '<i class="fa-solid fa-circle-xmark"></i> Salah (0 Poin)'}
                    </span>
                  </div>
                  <div class="text-[11px] text-slate-600 leading-relaxed">${q.bahas}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- ACTION BUTTONS -->
        <div class="border-t pt-4 flex flex-col sm:flex-row items-center justify-end gap-3" style="border-color: #E2E8F0;">
          <button onclick="CoopRaid.copyResult()" class="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition">
            <i class="fa-solid fa-copy"></i> Salin Rekap Capaian
          </button>
          <button onclick="CoopRaid.resetTournament()" class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition">
            <i class="fa-solid fa-rotate-left"></i> Mulai Ulang Sesi
          </button>
          <button onclick="CoopRaid.closeModal()" class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2 cursor-pointer transition">
            <i class="fa-solid fa-check"></i> Selesai
          </button>
        </div>
      </div>
    `;
  }

  function copyResult() {
    const text = `=== HASIL CO-OP RAID STATISTIKA MATH CIHUY ===\n` +
      `Nama: ${currentSession.studentName}\n` +
      `Kelas: ${currentSession.className}\n` +
      `Tim: Kelompok ${currentSession.groupNo} (Anggota ${currentSession.memberNo})\n` +
      `Skor Co-op Tim: ${currentSession.scoreCoop} / 100\n` +
      `Skor Individu: ${currentSession.scoreIndividual} / 100\n` +
      `Nilai Akhir: ${currentSession.finalScore} / 100\n` +
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
        finalScore: 0
      };
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
      renderCurrentView();
    }
  }

  function sendResultToBackend() {
    const payload = {
      timestamp: new Date().toISOString(),
      mapel: 'wajib',
      kode_pertemuan: 'COOP_STATISTIKA',
      kelas: currentSession.className,
      kelompok: `Kelompok ${currentSession.groupNo}`,
      anggota: `Anggota ${currentSession.memberNo}`,
      nama: currentSession.studentName,
      skor_coop: currentSession.scoreCoop,
      skor_individu: currentSession.scoreIndividual,
      skor_akhir: currentSession.finalScore,
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

    // 2. Kirim ke Endpoint Cloudflare / API jika tersedia
    try {
      fetch('/api/nilai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nis: currentSession.memberNo + '' + currentSession.groupNo + '00',
          nama: currentSession.studentName,
          kelas: currentSession.className,
          mapel: 'wajib',
          kode_pertemuan: 'COOP_STATISTIKA',
          skor: currentSession.finalScore,
          jml_soal: 5,
          benar: Math.round(currentSession.scoreIndividual / 20),
          salah: 5 - Math.round(currentSession.scoreIndividual / 20),
          durasi_detik: 1200 - currentSession.individualTimeLeft
        })
      }).catch(() => {
        // Fallback gracefully without throwing
      });
    } catch (e) {}
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
    document.addEventListener('DOMContentLoaded', initCoopRaid);
  } else {
    initCoopRaid();
  }

})();
