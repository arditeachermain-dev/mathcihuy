// functions/api/_quiz_bank.js
// Bank Soal Kuis Harian 16:00 WIB - Standar 5 Tipe Soal TKA Pusmendik Kemendikdasmen & UTBK-SNBT 2027
// Mengacu pada: https://pusmendik.kemendikdasmen.go.id/tka/tka/view/mata-pelajaran-pilihan/sma/matematika-tingkat-lanjut
// 100% Terverifikasi Akurasi Matematis (Zero-Error) • Standar Baku 5 Opsi Pilihan (A s.d. E)

export const TKA_TYPES = {
  PG: { code: "PG", name: "🔘 Pilihan Ganda (PG)", desc: "Pilih 1 jawaban yang paling tepat (Opsi A - E)" },
  PGK_MCMA: { code: "PGK_MCMA", name: "☑️ Pilihan Ganda Kompleks (MCMA)", desc: "Pilih semua pernyataan yang benar (jawaban benar lebih dari satu)" },
  PGK_KATEGORI: { code: "PGK_KATEGORI", name: "⚖️ Pilihan Ganda Kompleks (Kategori Benar/Salah)", desc: "Tentukan status Benar atau Salah untuk setiap pernyataan" },
  MENJODOHKAN: { code: "MENJODOHKAN", name: "🔄 Menjodohkan (Matching)", desc: "Pasangkan premis di kolom kiri dengan solusi di kolom kanan" },
  ISIAN_SINGKAT: { code: "ISIAN_SINGKAT", name: "✍️ Isian Singkat", desc: "Hitung dan masukkan nilai eksak secara langsung" }
};

export const QUIZ_BANK = [
  // =========================================================================
  // TIPE 1: PILIHAN GANDA (PG) - 5 OPSI (A s.d. E)
  // =========================================================================
  {
    id: 101,
    type: "PG",
    category: "Aljabar • Determinan Matriks (TKA Pusmendik)",
    difficulty: "Sedang",
    question: "Diketahui matriks A = [[2, 3], [1, 4]] dan matriks B = [[1, 2], [3, 5]]. Nilai dari determinan matriks (A · B) adalah...",
    options: {
      A: "9",
      B: "-5",
      C: "5",
      D: "-9",
      E: "-1"
    },
    correct: "B",
    explanation: "**Sifat Determinan Matriks:**\n" +
      "det(A · B) = det(A) · det(B)\n\n" +
      "1. det(A) = (2 × 4) - (3 × 1) = 8 - 3 = 5\n" +
      "2. det(B) = (1 × 5) - (2 × 3) = 5 - 6 = -1\n" +
      "3. det(A · B) = 5 · (-1) = **-5** (Opsi B)"
  },
  {
    id: 102,
    type: "PG",
    category: "Geometri • Transformasi Geometri Dilatasi (TKA Pusmendik)",
    difficulty: "Sedang",
    question: "Segitiga PQR memiliki titik sudut P(-1, 3), Q(3, 3), dan R(1, -2). Segitiga tersebut didilatasikan dengan pusat O(0,0) dan faktor skala k = 3. Luas bayangan segitiga PQR setelah didilatasi adalah...",
    options: {
      A: "10 satuan luas",
      B: "30 satuan luas",
      C: "90 satuan luas",
      D: "120 satuan luas",
      E: "180 satuan luas"
    },
    correct: "C",
    explanation: "**1. Hitung Luas Segitiga PQR Awal:**\n" +
      "Alas PQ horizontal = x_Q - x_P = 3 - (-1) = 4 satuan panjang.\n" +
      "Tinggi tegak lurus dari R ke garis PQ = y_P - y_R = 3 - (-2) = 5 satuan panjang.\n" +
      "Luas awal = 1/2 × alas × tinggi = 1/2 × 4 × 5 = 10 satuan luas.\n\n" +
      "**2. Sifat Luas Akibat Dilatasi Skala k:**\n" +
      "Luas_baru = |k|² × Luas_awal\n" +
      "Luas_baru = 3² × 10 = 9 × 10 = **90 satuan luas** (Opsi C)"
  },
  {
    id: 103,
    type: "PG",
    category: "Kalkulus • Limit Fungsi Trigonometri (TKA Pusmendik)",
    difficulty: "Sedang",
    question: "Nilai dari lim (x ➔ 0) [sin(6x) / (2x · cos(3x))] adalah...",
    options: {
      A: "3",
      B: "2",
      C: "1",
      D: "0",
      E: "6"
    },
    correct: "A",
    explanation: "**Pemisahan Bentuk Limit Trigonometri:**\n" +
      "lim (x ➔ 0) [sin(6x) / (2x)] · lim (x ➔ 0) [1 / cos(3x)]\n" +
      "• lim (x ➔ 0) [sin(6x) / (2x)] = 6 / 2 = 3\n" +
      "• lim (x ➔ 0) [1 / cos(0)] = 1 / 1 = 1\n" +
      "Maka hasil limit = 3 × 1 = **3** (Opsi A)"
  },
  {
    id: 104,
    type: "PG",
    category: "Kombinatorika • Kaidah Pencacahan & Pemilihan Delegasi (TKA & SNBT)",
    difficulty: "HOTS",
    question: "Dari 6 siswa laki-laki dan 4 siswa perempuan, akan dipilih delegasi beranggotakan 4 orang yang terdiri dari sedikitnya 2 orang siswa laki-laki. Banyak cara membentuk susunan delegasi tersebut adalah...",
    options: {
      A: "185 cara",
      B: "195 cara",
      C: "170 cara",
      D: "160 cara",
      E: "210 cara"
    },
    correct: "A",
    explanation: "**Gunakan Aturan Kombinasi C(n, r):**\n" +
      "Syarat: minimal 2 siswa laki-laki (L) dari total delegasi 4 orang.\n\n" +
      "Kasus 1 (2 L dan 2 P): C(6, 2) × C(4, 2) = 15 × 6 = 90 cara\n" +
      "Kasus 2 (3 L dan 1 P): C(6, 3) × C(4, 1) = 20 × 4 = 80 cara\n" +
      "Kasus 3 (4 L dan 0 P): C(6, 4) × C(4, 0) = 15 × 1 = 15 cara\n\n" +
      "Total cara = 90 + 80 + 15 = **185 cara** (Opsi A)\n" +
      "*(Verifikasi komplemen: C(10, 4) - [C(4, 4) + C(6, 1)×C(4, 3)] = 210 - [1 + 24] = 185)*"
  },
  {
    id: 105,
    type: "PG",
    category: "Dimensi Tiga • Jarak Titik ke Garis pada Kubus (TKA & SNBT)",
    difficulty: "HOTS",
    question: "Diketahui kubus ABCD.EFGH dengan panjang rusuk 6 cm. Titik P terletak tepat di tengah rusuk CG. Jarak titik A ke garis DP adalah...",
    options: {
      A: "6 cm",
      B: "3√5 cm",
      C: "4√2 cm",
      D: "2√6 cm",
      E: "3√3 cm"
    },
    correct: "A",
    explanation: "**Analisis Kedudukan Garis dan Bidang pada Kubus:**\n" +
      "1. Garis DP terletak seluruhnya pada bidang belakang CDHG (karena D di CD dan P di CG).\n" +
      "2. Rusuk DA tegak lurus terhadap bidang CDHG.\n" +
      "3. Karena DA tegak lurus bidang CDHG, maka DA tegak lurus terhadap SEMUA garis di bidang CDHG, termasuk garis DP (DA ⊥ DP).\n" +
      "4. Oleh karena itu, segitiga DAP adalah siku-siku di D, sehingga ruas garis terpendek dari titik A yang tegak lurus ke garis DP adalah rusuk AD itu sendiri.\n" +
      "Maka jarak titik A ke garis DP = panjang DA = **6 cm** (Opsi A)."
  },
  {
    id: 106,
    type: "PG",
    category: "Geometri Analitik • Garis Singgung Lingkaran Tegak Lurus (TKA & SNBT)",
    difficulty: "Sedang / HOTS",
    question: "Salah satu persamaan garis singgung pada lingkaran x² + y² - 4x + 6y - 12 = 0 yang tegak lurus terhadap garis 4x - 3y + 5 = 0 adalah...",
    options: {
      A: "3x + 4y - 19 = 0",
      B: "3x + 4y + 19 = 0",
      C: "4x - 3y - 25 = 0",
      D: "3x - 4y + 31 = 0",
      E: "4x + 3y - 19 = 0"
    },
    correct: "A",
    explanation: "**Langkah Penyelesaian PGSL:**\n" +
      "1. Bentuk baku lingkaran: (x - 2)² + (y + 3)² = 12 + 2² + 3² = 25 ➔ Pusat (2, -3) dan r = 5.\n" +
      "2. Garis acuan 4x - 3y + 5 = 0 memiliki gradien m₁ = 4/3.\n" +
      "   Karena tegak lurus, maka gradien garis singgung m = -3/4.\n" +
      "3. Rumus PGSL bergradien m:\n" +
      "   y - b = m(x - a) ± r√(1 + m²)\n" +
      "   y + 3 = -3/4(x - 2) ± 5√(1 + 9/16) = -3/4(x - 2) ± 25/4\n" +
      "   4(y + 3) = -3(x - 2) ± 25 ➔ 3x + 4y + 6 ± 25 = 0\n" +
      "   Diperoleh garis: 3x + 4y + 31 = 0 atau **3x + 4y - 19 = 0** (Opsi A)."
  },
  {
    id: 107,
    type: "PG",
    category: "Kalkulus • Garis Singgung Kurva Trigonometri (TKA & SNBT)",
    difficulty: "Sedang",
    question: "Persamaan garis singgung kurva f(x) = 2 sin(2x) + cos(x) di titik yang berabsis x = 0 adalah...",
    options: {
      A: "y = 4x + 1",
      B: "y = 2x + 1",
      C: "y = 4x - 1",
      D: "y = -4x + 1",
      E: "y = 2x - 1"
    },
    correct: "A",
    explanation: "**Langkah Mencari Persamaan Garis Singgung:**\n" +
      "1. Koordinat titik singgung (x = 0):\n" +
      "   y₁ = f(0) = 2 sin(0) + cos(0) = 0 + 1 = 1 ➔ Titik (0, 1).\n" +
      "2. Gradien m = f'(0):\n" +
      "   f'(x) = 4 cos(2x) - sin(x)\n" +
      "   m = f'(0) = 4 cos(0) - sin(0) = 4(1) - 0 = 4.\n" +
      "3. Persamaan garis singgung:\n" +
      "   y - y₁ = m(x - x₁) ➔ y - 1 = 4(x - 0) ➔ **y = 4x + 1** (Opsi A)."
  },
  {
    id: 108,
    type: "PG",
    category: "Kalkulus • Integral Tentu Metode Substitusi (TKA & SNBT)",
    difficulty: "Sedang",
    question: "Nilai dari ∫ (0 sampai 1) [6x (x² + 1)² dx] adalah...",
    options: {
      A: "7",
      B: "9",
      C: "14",
      D: "21",
      E: "3"
    },
    correct: "A",
    explanation: "**Substitusi Variabel u:**\n" +
      "Misalkan u = x² + 1 ➔ du = 2x dx ➔ 6x dx = 3 du.\n" +
      "Batas integral:\n" +
      "• x = 0 ➔ u = 0² + 1 = 1\n" +
      "• x = 1 ➔ u = 1² + 1 = 2\n" +
      "Integral menjadi:\n" +
      "∫ (1 sampai 2) [3u² du] = [u³] (1 sampai 2) = 2³ - 1³ = 8 - 1 = **7** (Opsi A)."
  },
  {
    id: 109,
    type: "PG",
    category: "Statistika • Median Data Berkelompok (TKA & SNBT)",
    difficulty: "Sedang",
    question: "Diberikan data nilai ujian: [41-50: 4 siswa], [51-60: 6 siswa], [61-70: 12 siswa], [71-80: 10 siswa], [81-90: 8 siswa]. Nilai median dari data tersebut adalah...",
    options: {
      A: "68,83",
      B: "67,50",
      C: "69,17",
      D: "70,25",
      E: "66,67"
    },
    correct: "A",
    explanation: "**Perhitungan Median Data Berkelompok:**\n" +
      "1. Total frekuensi n = 4 + 6 + 12 + 10 + 8 = 40. Letak median = n/2 = 20.\n" +
      "2. Fk kelas 1 = 4, Fk kelas 2 = 10, Fk kelas 3 = 22. Kelas median adalah interval 61 - 70.\n" +
      "3. Komponen rumus:\n" +
      "   • Tepi bawah Tb = 60,5\n" +
      "   • Fk sebelum = 10\n" +
      "   • Frekuensi kelas median fi = 12\n" +
      "   • Panjang kelas p = 10\n" +
      "4. Me = Tb + ((n/2 - Fk) / fi) × p = 60,5 + ((20 - 10) / 12) × 10\n" +
      "   Me = 60,5 + (100 / 12) = 60,5 + 8,33 = **68,83** (Opsi A)."
  },
  {
    id: 110,
    type: "PG",
    category: "Penalaran Matematika • Kecepatan Kerja dan Pengisian Tangki (UTBK-SNBT)",
    difficulty: "HOTS",
    question: "Pipa A mengisi tangki hingga penuh dalam 6 jam. Pipa B mengisi tangki hingga penuh dalam 4 jam. Pipa C di dasar tangki mengosongkan tangki penuh dalam 12 jam. Jika tangki awalnya kosong dan ketiga pipa dibuka bersamaan, waktu yang dibutuhkan hingga tangki penuh adalah...",
    options: {
      A: "3 jam",
      B: "2,5 jam",
      C: "3,5 jam",
      D: "4 jam",
      E: "5 jam"
    },
    correct: "A",
    explanation: "**Pemodelan Laju Pengisian Gabungan (Debit):**\n" +
      "• Laju Pipa A = +1/6 tangki/jam\n" +
      "• Laju Pipa B = +1/4 tangki/jam\n" +
      "• Laju Pipa C = -1/12 tangki/jam (mengosongkan)\n\n" +
      "Laju total = 1/6 + 1/4 - 1/12 = (2 + 3 - 1)/12 = 4/12 = 1/3 tangki/jam.\n" +
      "Waktu terisi penuh = 1 / (1/3) = **3 jam** (Opsi A)."
  },
  {
    id: 111,
    type: "PG",
    category: "Pengetahuan Kuantitatif • Deret Aritmatika & Notasi Sn (UTBK-SNBT)",
    difficulty: "Sedang",
    question: "Jumlah n suku pertama deret aritmatika adalah S_n = 3n² - 2n. Nilai suku ke-8 (U₈) deret tersebut adalah...",
    options: {
      A: "43",
      B: "41",
      C: "45",
      D: "47",
      E: "39"
    },
    correct: "A",
    explanation: "**Gunakan Hubungan U_n = S_n - S_(n-1):**\n" +
      "• S₈ = 3(8²) - 2(8) = 3(64) - 16 = 192 - 16 = 176\n" +
      "• S₇ = 3(7²) - 2(7) = 3(49) - 14 = 147 - 14 = 133\n" +
      "• U₈ = S₈ - S₇ = 176 - 133 = **43** (Opsi A)\n" +
      "*(Metode Cepat: Jika S_n = An² + Bn, maka b = 2A = 6, a = A + B = 1. U_n = 6n - 5 ➔ U₈ = 6(8) - 5 = 43)*"
  },

  // =========================================================================
  // TIPE 2: PILIHAN GANDA KOMPLEKS (PGK MCMA) - 5 OPSI (A s.d. E)
  // =========================================================================
  {
    id: 201,
    type: "PGK_MCMA",
    category: "Geometri • Karakteristik Persamaan Lingkaran (TKA Pusmendik)",
    difficulty: "Sedang / HOTS",
    question: "Diketahui persamaan lingkaran: x² + y² - 2x - 6y - 26 = 0.\n\n" +
      "Perhatikan lima pernyataan berikut:\n" +
      "(1) Lingkaran tersebut berpusat di titik (1, 3)\n" +
      "(2) Panjang jari-jari lingkaran tersebut adalah 6 satuan panjang\n" +
      "(3) Jarak pusat lingkaran ke sumbu-X adalah 1 satuan\n" +
      "(4) Jarak pusat lingkaran ke sumbu-Y adalah 1 satuan\n" +
      "(5) Titik (1, 9) terletak tepat pada lingkaran\n\n" +
      "Manakah kombinasi pernyataan yang SELURUHNYA BENAR? (Jawaban benar lebih dari satu)",
    options: {
      A: "Pernyataan (1), (2), dan (4)",
      B: "Pernyataan (1) dan (3) saja",
      C: "Pernyataan (2), (4), dan (5)",
      D: "Pernyataan (1), (2), (4), dan (5)",
      E: "Semua pernyataan (1) sampai (5) benar"
    },
    correct: "D",
    explanation: "**Uji Validitas Pernyataan:**\n" +
      "Persamaan: x² + y² - 2x - 6y - 26 = 0\n" +
      "• Pusat P(-A/2, -B/2) = P(1, 3) ➔ **(1) BENAR**\n" +
      "• Jari-jari r = √(1² + 3² - (-26)) = √(1 + 9 + 26) = √36 = 6 ➔ **(2) BENAR**\n" +
      "• Jarak pusat (1, 3) ke sumbu-X adalah |y| = 3 (Bukan 1) ➔ (3) SALAH\n" +
      "• Jarak pusat (1, 3) ke sumbu-Y adalah |x| = 1 ➔ **(4) BENAR**\n" +
      "• Uji titik (1, 9): 1² + 9² - 2(1) - 6(9) - 26 = 1 + 81 - 2 - 54 - 26 = 0 (Terbukti) ➔ **(5) BENAR**\n\n" +
      "Maka pernyataan yang benar adalah **(1), (2), (4), dan (5)** (Opsi D)."
  },
  {
    id: 202,
    type: "PGK_MCMA",
    category: "Aljabar • Kesamaan Vektor Tiga Dimensi (TKA Pusmendik)",
    difficulty: "HOTS",
    question: "Diketahui vektor u = (1, 1, -1), v = (1, v₁, 2), dan w = (0, w₁, -3).\n" +
      "Jika diketahui hubungan vektor w = u - v, maka nilai v₁ dan w₁ yang memenuhi adalah...",
    options: {
      A: "v₁ = 0 dan w₁ = 1",
      B: "v₁ = 1 dan w₁ = 0",
      C: "v₁ = 2 dan w₁ = -1",
      D: "Pernyataan A, B, dan C semuanya benar karena memenuhi relasi w₁ = 1 - v₁",
      E: "Hanya pernyataan A dan B yang benar"
    },
    correct: "D",
    explanation: "**Operasi Pengurangan Vektor u - v:**\n" +
      "w = (1 - 1, 1 - v₁, -1 - 2) = (0, 1 - v₁, -3)\n" +
      "Diketahui w = (0, w₁, -3), maka haruslah berlaku hubungan:\n" +
      "**w₁ = 1 - v₁** (atau v₁ + w₁ = 1)\n\n" +
      "• Uji A: v₁ = 0, w₁ = 1 ➔ 0 + 1 = 1 (Memenuhi)\n" +
      "• Uji B: v₁ = 1, w₁ = 0 ➔ 1 + 0 = 1 (Memenuhi)\n" +
      "• Uji C: v₁ = 2, w₁ = -1 ➔ 2 + (-1) = 1 (Memenuhi)\n" +
      "Oleh karena itu, **ketiga kombinasi tersebut memenuhi hubungan w₁ = 1 - v₁** (Opsi D)."
  },
  {
    id: 203,
    type: "PGK_MCMA",
    category: "Dimensi Tiga • Kedudukan Garis dan Bidang pada Balok (TKA Pusmendik)",
    difficulty: "Sedang / HOTS",
    question: "Diketahui balok ABCD.EFGH dengan panjang AB = 8 cm, BC = 6 cm, dan CG = 5 cm.\n\n" +
      "Perhatikan empat pernyataan berikut:\n" +
      "(1) Panjang diagonal bidang AC adalah 10 cm\n" +
      "(2) Panjang diagonal ruang AG adalah 5√5 cm\n" +
      "(3) Garis AB sejajar dengan bidang CDHG\n" +
      "(4) Garis AE tegak lurus terhadap bidang ABCD\n\n" +
      "Manakah kombinasi pernyataan yang SELURUHNYA BENAR? (Jawaban benar lebih dari satu)",
    options: {
      A: "Pernyataan (1) dan (2) saja",
      B: "Pernyataan (1), (2), dan (4) saja",
      C: "Pernyataan (2), (3), dan (4) saja",
      D: "Pernyataan (1), (2), (3), dan (4) semuanya benar",
      E: "Pernyataan (3) dan (4) saja"
    },
    correct: "D",
    explanation: "**Validasi Elemen Geometris Balok ABCD.EFGH:**\n" +
      "• (1) AC = √(8² + 6²) = √100 = 10 cm ➔ **BENAR**\n" +
      "• (2) AG = √(8² + 6² + 5²) = √(100 + 25) = √125 = 5√5 cm ➔ **BENAR**\n" +
      "• (3) Garis AB sejajar CD, dan CD termuat di bidang CDHG ➔ Garis AB sejajar bidang CDHG ➔ **BENAR**\n" +
      "• (4) AE merupakan rusuk tegak vertikal balok, tegak lurus bidang alas ABCD ➔ **BENAR**\n\n" +
      "Semua pernyataan (1), (2), (3), dan (4) terbukti **BENAR** (Opsi D)."
  },

  // =========================================================================
  // TIPE 3: PILIHAN GANDA KOMPLEKS (PGK KATEGORI) - 5 OPSI (A s.d. E)
  // =========================================================================
  {
    id: 301,
    type: "PGK_KATEGORI",
    category: "Aljabar • Pemodelan Fungsi Eksponensial (TKA Pusmendik)",
    difficulty: "Sedang / HOTS",
    question: "Banyaknya penonton suatu video di media sosial dimodelkan dengan fungsi: N(t) = 3 · 2^t (dalam ribuan penonton), dengan t menyatakan waktu dalam hari sejak video diunggah.\n\n" +
      "Tentukan status **Benar (B)** atau **Salah (S)** untuk ketiga pernyataan berikut:\n" +
      "[P1] Pada saat t = 1 hari (24 jam pertama), video tersebut ditonton oleh tepat 6.000 penonton.\n" +
      "[P2] Jumlah penonton bertambah dua kali lipat setiap bertambahnya satu hari.\n" +
      "[P3] Pada saat t = 3 hari, jumlah penonton telah mencapai 24.000 penonton.\n\n" +
      "Manakah urutan status kebenaran [P1, P2, P3] yang tepat?",
    options: {
      A: "[P1: Benar, P2: Benar, P3: Benar]",
      B: "[P1: Salah, P2: Benar, P3: Benar]",
      C: "[P1: Benar, P2: Salah, P3: Benar]",
      D: "[P1: Benar, P2: Benar, P3: Salah]",
      E: "[P1: Salah, P2: Salah, P3: Salah]"
    },
    correct: "A",
    explanation: "**Analisis Fungsi N(t) = 3 · 2^t (ribu penonton):**\n" +
      "• [P1] t = 1: N(1) = 3 · 2¹ = 6 ribu = 6.000 penonton ➔ **BENAR**\n" +
      "• [P2] Basis eksponen adalah 2, sehingga N(t+1) / N(t) = 2 (meningkat 2x lipat setiap hari) ➔ **BENAR**\n" +
      "• [P3] t = 3: N(3) = 3 · 2³ = 3 · 8 = 24 ribu = 24.000 penonton ➔ **BENAR**\n\n" +
      "Seluruh pernyataan bernilai **[Benar, Benar, Benar]** (Opsi A)."
  },
  {
    id: 302,
    type: "PGK_KATEGORI",
    category: "Kalkulus • Evaluasi Limit Fungsi Pecahan (TKA Pusmendik)",
    difficulty: "Sedang",
    question: "Perhatikan ketiga pernyataan limit berikut:\n\n" +
      "[P1] lim (x ➔ 2) [(x² - 4) / (x - 2)] = 4\n" +
      "[P2] lim (x ➔ 3) [(x² - 9) / (x + 3)] = 6\n" +
      "[P3] lim (x ➔ ∞) [(3x² + 5) / (x² - 2)] = 3\n\n" +
      "Tentukan urutan status kebenaran [P1, P2, P3] yang benar:",
    options: {
      A: "[P1: Benar, P2: Benar, P3: Benar]",
      B: "[P1: Benar, P2: Salah, P3: Benar]",
      C: "[P1: Salah, P2: Benar, P3: Salah]",
      D: "[P1: Benar, P2: Salah, P3: Salah]",
      E: "[P1: Salah, P2: Salah, P3: Benar]"
    },
    correct: "B",
    explanation: "**Uji Perhitungan Setiap Pernyataan:**\n" +
      "• [P1] lim (x ➔ 2) (x - 2)(x + 2)/(x - 2) = 2 + 2 = 4 ➔ **BENAR**\n" +
      "• [P2] Substitusi langsung x = 3: (3² - 9)/(3 + 3) = (9 - 9)/6 = 0/6 = 0 (Bukan 6!) ➔ **SALAH**\n" +
      "• [P3] Limit tak hingga rasional berderajat sama: 3/1 = 3 ➔ **BENAR**\n\n" +
      "Maka urutan yang benar adalah **[P1: Benar, P2: Salah, P3: Benar]** (Opsi B)."
  },
  {
    id: 303,
    type: "PGK_KATEGORI",
    category: "Statistika Bivariat • Interpretasi Koefisien Korelasi r (TKA & SNBT)",
    difficulty: "Sedang / HOTS",
    question: "Dalam penelitian hubungan lama belajar (X, jam) dan skor ujian (Y), diperoleh koefisien korelasi Pearson r = +0,85.\n\n" +
      "Tentukan status **Benar (B)** atau **Salah (S)** untuk ketiga pernyataan berikut:\n" +
      "[P1] Hubungan antara lama belajar dan skor ujian bernilai positif dan kuat.\n" +
      "[P2] Semakin lama durasi belajar siswa, terdapat kecenderungan skor ujian yang diperoleh semakin tinggi.\n" +
      "[P3] Nilai koefisien determinasi (R²) adalah 0,85, yang berarti 85% variasi skor ujian dijelaskan oleh lama belajar.\n\n" +
      "Urutan status kebenaran [P1, P2, P3] yang tepat adalah...",
    options: {
      A: "[P1: Benar, P2: Benar, P3: Benar]",
      B: "[P1: Benar, P2: Benar, P3: Salah]",
      C: "[P1: Salah, P2: Benar, P3: Benar]",
      D: "[P1: Benar, P2: Salah, P3: Salah]",
      E: "[P1: Salah, P2: Salah, P3: Salah]"
    },
    correct: "B",
    explanation: "**Analisis Konsep Korelasi dan Regresi Bivariat:**\n" +
      "• [P1] Nilai r = +0,85 > 0,7 menunjukkan korelasi linier positif yang kuat ➔ **BENAR**\n" +
      "• [P2] Korelasi positif berarti kedua variabel searah (lama belajar naik, skor ujian cenderung naik) ➔ **BENAR**\n" +
      "• [P3] Koefisien determinasi R² = r² = (0,85)² = 0,7225 (72,25%), BUKAN 85% ➔ **SALAH**\n\n" +
      "Urutan yang benar adalah **[P1: Benar, P2: Benar, P3: Salah]** (Opsi B)."
  },

  // =========================================================================
  // TIPE 4: MENJODOHKAN (MATCHING) - 5 OPSI (A s.d. E)
  // =========================================================================
  {
    id: 401,
    type: "MENJODOHKAN",
    category: "Aljabar & Kalkulus • Menjodohkan Fungsi & Sifat Periode (TKA Pusmendik)",
    difficulty: "Sedang",
    question: "Pasangkanlah fungsi trigonometri pada **Kolom Kiri** dengan nilai periode dasarnya pada **Kolom Kanan**:\n\n" +
      "**Kolom Kiri (Fungsi):**\n" +
      "(1) f(x) = 4 sin(2x - 30°)\n" +
      "(2) g(x) = 2 cos(3x + 45°)\n" +
      "(3) h(x) = 5 tan(x - 60°)\n\n" +
      "**Kolom Kanan (Periode):**\n" +
      "[X] 180° (π rad)\n" +
      "[Y] 120° (2π/3 rad)\n" +
      "[Z] 360° (2π rad)\n\n" +
      "Pasangan yang tepat adalah...",
    options: {
      A: "1-X, 2-Y, 3-X",
      B: "1-X, 2-Z, 3-Y",
      C: "1-Y, 2-X, 3-Z",
      D: "1-Z, 2-Y, 3-X",
      E: "1-Y, 2-Y, 3-Z"
    },
    correct: "A",
    explanation: "**Rumus Periode Fungsi Trigonometri:**\n" +
      "• Periode Sinus & Cosinus: T = 360° / |b|\n" +
      "• Periode Tangen: T = 180° / |b|\n\n" +
      "1. f(x) = sin(2x): T = 360° / 2 = 180° ➔ **(1 pasang dengan X)**\n" +
      "2. g(x) = cos(3x): T = 360° / 3 = 120° ➔ **(2 pasang dengan Y)**\n" +
      "3. h(x) = tan(x): T = 180° / 1 = 180° ➔ **(3 pasang dengan X)**\n\n" +
      "Maka pasangan yang tepat adalah **1-X, 2-Y, 3-X** (Opsi A)."
  },
  {
    id: 402,
    type: "MENJODOHKAN",
    category: "Aljabar • Menjodohkan Matriks Transformasi Geometri (TKA Pusmendik)",
    difficulty: "Sedang / HOTS",
    question: "Pasangkan matriks transformasi pada **Kolom Kiri** dengan jenis transformasinya pada **Kolom Kanan**:\n\n" +
      "**Kolom Kiri (Matriks):**\n" +
      "(1) M₁ = [[1, 0], [0, -1]]\n" +
      "(2) M₂ = [[-1, 0], [0, 1]]\n" +
      "(3) M₃ = [[0, -1], [1, 0]]\n\n" +
      "**Kolom Kanan (Geometri):**\n" +
      "[P] Refleksi terhadap sumbu-X\n" +
      "[Q] Refleksi terhadap sumbu-Y\n" +
      "[R] Rotasi 90° berlawanan arah jarum jam pusat (0,0)\n\n" +
      "Pasangan yang tepat adalah...",
    options: {
      A: "1-P, 2-Q, 3-R",
      B: "1-Q, 2-P, 3-R",
      C: "1-P, 2-R, 3-Q",
      D: "1-R, 2-Q, 3-P",
      E: "1-Q, 2-R, 3-P"
    },
    correct: "A",
    explanation: "**Matriks Standar Transformasi Geometri:**\n" +
      "• (x, -y) dihasilkan oleh [[1, 0], [0, -1]] ➔ Refleksi sumbu-X **(1-P)**\n" +
      "• (-x, y) dihasilkan oleh [[-1, 0], [0, 1]] ➔ Refleksi sumbu-Y **(2-Q)**\n" +
      "• (-y, x) dihasilkan oleh [[cos 90°, -sin 90°], [sin 90°, cos 90°]] = [[0, -1], [1, 0]] ➔ Rotasi +90° **(3-R)**\n\n" +
      "Maka pasangan yang benar adalah **1-P, 2-Q, 3-R** (Opsi A)."
  },
  {
    id: 403,
    type: "MENJODOHKAN",
    category: "Kalkulus • Menjodohkan Fungsi dengan Turunan Pertamanya (TKA & SNBT)",
    difficulty: "Sedang",
    question: "Pasangkan fungsi pada **Kolom Kiri** dengan turunan pertamanya pada **Kolom Kanan**:\n\n" +
      "**Kolom Kiri (Fungsi):**\n" +
      "(1) f(x) = (2x - 3)⁴\n" +
      "(2) g(x) = x / (x + 1)\n" +
      "(3) h(x) = x² · ln(x)\n\n" +
      "**Kolom Kanan (Turunan):**\n" +
      "[P] 1 / (x + 1)²\n" +
      "[Q] 8(2x - 3)³\n" +
      "[R] 2x ln(x) + x\n\n" +
      "Pasangan yang tepat adalah...",
    options: {
      A: "1-Q, 2-P, 3-R",
      B: "1-P, 2-Q, 3-R",
      C: "1-Q, 2-R, 3-P",
      D: "1-R, 2-P, 3-Q",
      E: "1-P, 2-R, 3-Q"
    },
    correct: "A",
    explanation: "**Aturan Turunan Dasar:**\n" +
      "• 1. Aturan rantai: f'(x) = 4(2x - 3)³ · 2 = 8(2x - 3)³ ➔ **(1-Q)**\n" +
      "• 2. Aturan pembagian: g'(x) = [1(x+1) - x(1)] / (x+1)² = 1 / (x+1)² ➔ **(2-P)**\n" +
      "• 3. Aturan perkalian: h'(x) = (2x) ln(x) + x² (1/x) = 2x ln(x) + x ➔ **(3-R)**\n\n" +
      "Pasangan yang tepat adalah **1-Q, 2-P, 3-R** (Opsi A)."
  },

  // =========================================================================
  // TIPE 5: ISIAN SINGKAT (SHORT ANSWER / NILAI EKSAK)
  // =========================================================================
  {
    id: 501,
    type: "ISIAN_SINGKAT",
    category: "Aljabar • Sisa Pembagian Polinomial Teorema Sisa (TKA Pusmendik)",
    difficulty: "Sedang",
    question: "Suku banyak P(x) = 2x³ - 5x² + 8x - 4 dibagi oleh (x - 2).\n\n" +
      "Berapakah nilai sisa pembagiannya? (Ketikkan angka jawaban pasti Anda pada form)",
    correct: "8",
    explanation: "**Gunakan Teorema Sisa:**\n" +
      "Sisa pembagian P(x) oleh (x - c) adalah S = P(c).\n" +
      "Untuk pembagi (x - 2), nilai c = 2:\n" +
      "S = P(2) = 2(2)³ - 5(2)² + 8(2) - 4\n" +
      "S = 2(8) - 5(4) + 16 - 4\n" +
      "S = 16 - 20 + 16 - 4 = **8**"
  },
  {
    id: 502,
    type: "ISIAN_SINGKAT",
    category: "Aljabar • Nilai Invers Matriks & Determinan (TKA Pusmendik)",
    difficulty: "Sedang",
    question: "Diketahui matriks M = [[5, 2], [7, 3]].\n\n" +
      "Berapakah nilai dari determinan matriks M? (det(M))\n" +
      "(Ketikkan bilangan bulat hasil perhitungan Anda)",
    correct: "1",
    explanation: "**Rumus Determinan Matriks 2×2:**\n" +
      "det(M) = (a · d) - (b · c)\n" +
      "det(M) = (5 × 3) - (2 × 7) = 15 - 14 = **1**"
  },
  {
    id: 503,
    type: "ISIAN_SINGKAT",
    category: "Peluang • Frekuensi Harapan Dua Dadu (TKA & SNBT)",
    difficulty: "Sedang",
    question: "Dua buah dadu seimbang dilempar undi bersama-sama sebanyak 180 kali.\n\n" +
      "Berapakah frekuensi harapan munculnya mata dadu berjumlah 8 atau 11?\n" +
      "(Ketikkan bilangan bulat hasil perhitungan Anda)",
    correct: "35",
    explanation: "**Perhitungan Frekuensi Harapan F_h = n × P(E):**\n" +
      "1. Titik sampel jumlah 8: (2,6), (3,5), (4,4), (5,3), (6,2) ➔ 5 cara.\n" +
      "2. Titik sampel jumlah 11: (5,6), (6,5) ➔ 2 cara.\n" +
      "3. Total sampel sukses = 5 + 2 = 7 dari total 36 ruang sampel.\n" +
      "4. F_h = 180 × (7 / 36) = 5 × 7 = **35 kali**."
  },
  {
    id: 504,
    type: "ISIAN_SINGKAT",
    category: "Aljabar • Nilai Optimum Maksimum Fungsi Kuadrat (UTBK-SNBT)",
    difficulty: "Sedang",
    question: "Nilai maksimum dari fungsi kuadrat f(x) = -2x² + 12x - 10 adalah...\n\n" +
      "(Ketikkan bilangan bulat hasil perhitungan Anda)",
    correct: "8",
    explanation: "**Rumus Titik Puncak Fungsi Kuadrat:**\n" +
      "• Sumbu simetri x_p = -b / (2a) = -12 / (2 × -2) = -12 / -4 = 3.\n" +
      "• Nilai maksimum f(3) = -2(3²) + 12(3) - 10 = -18 + 36 - 10 = **8**."
  }
];
