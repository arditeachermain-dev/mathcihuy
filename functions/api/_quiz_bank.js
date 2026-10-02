// functions/api/_quiz_bank.js
// Bank Soal Kuis Harian 16:00 WIB - Standar 5 Tipe Soal TKA Pusmendik Kemendikdasmen
// Mengacu pada: https://pusmendik.kemendikdasmen.go.id/tka/tka/view/mata-pelajaran-pilihan/sma/matematika-tingkat-lanjut
// 100% Terverifikasi Akurasi Matematis & Kunci Jawabannya

export const TKA_TYPES = {
  PG: { code: "PG", name: "🔘 Pilihan Ganda (PG)", desc: "Pilih 1 jawaban yang paling tepat" },
  PGK_MCMA: { code: "PGK_MCMA", name: "☑️ Pilihan Ganda Kompleks (MCMA)", desc: "Pilih semua pernyataan yang benar (jawaban benar lebih dari satu)" },
  PGK_KATEGORI: { code: "PGK_KATEGORI", name: "⚖️ Pilihan Ganda Kompleks (Kategori Benar/Salah)", desc: "Tentukan status Benar atau Salah untuk setiap pernyataan" },
  MENJODOHKAN: { code: "MENJODOHKAN", name: "🔄 Menjodohkan (Matching)", desc: "Pasangkan premis di kolom kiri dengan solusi di kolom kanan" },
  ISIAN_SINGKAT: { code: "ISIAN_SINGKAT", name: "✍️ Isian Singkat", desc: "Hitung dan masukkan nilai eksak secara langsung" }
};

export const QUIZ_BANK = [
  // =========================================================================
  // TIPE 1: PILIHAN GANDA (PG)
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
      D: "-9"
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
      D: "180 satuan luas"
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
      D: "0"
    },
    correct: "A",
    explanation: "**Pemisahan Bentuk Limit Trigonometri:**\n" +
      "lim (x ➔ 0) [sin(6x) / (2x)] · lim (x ➔ 0) [1 / cos(3x)]\n" +
      "• lim (x ➔ 0) [sin(6x) / (2x)] = 6 / 2 = 3\n" +
      "• lim (x ➔ 0) [1 / cos(0)] = 1 / 1 = 1\n" +
      "Maka hasil limit = 3 × 1 = **3** (Opsi A)"
  },

  // =========================================================================
  // TIPE 2: PILIHAN GANDA KOMPLEKS (PGK MCMA) - JAWABAN BENAR LEBIH DARI SATU
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
      D: "Pernyataan (1), (2), (4), dan (5)"
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
      D: "Pernyataan A, B, dan C semuanya benar karena memenuhi relasi w₁ = 1 - v₁"
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

  // =========================================================================
  // TIPE 3: PILIHAN GANDA KOMPLEKS (PGK KATEGORI) - EVALUASI BENAR / SALAH
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
      D: "[P1: Benar, P2: Benar, P3: Salah]"
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
      D: "[P1: Benar, P2: Salah, P3: Salah]"
    },
    correct: "B",
    explanation: "**Uji Perhitungan Setiap Pernyataan:**\n" +
      "• [P1] lim (x ➔ 2) (x - 2)(x + 2)/(x - 2) = 2 + 2 = 4 ➔ **BENAR**\n" +
      "• [P2] Substitusi langsung x = 3: (3² - 9)/(3 + 3) = (9 - 9)/6 = 0/6 = 0 (Bukan 6!) ➔ **SALAH**\n" +
      "• [P3] Limit tak hingga rasional berderajat sama: 3/1 = 3 ➔ **BENAR**\n\n" +
      "Maka urutan yang benar adalah **[P1: Benar, P2: Salah, P3: Benar]** (Opsi B)."
  },

  // =========================================================================
  // TIPE 4: MENJODOHKAN (MATCHING) - MEMASANGKAN DUA LAJUR
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
      D: "1-Z, 2-Y, 3-X"
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
      D: "1-R, 2-Q, 3-P"
    },
    correct: "A",
    explanation: "**Matriks Standar Transformasi Geometri:**\n" +
      "• (x, -y) dihasilkan oleh [[1, 0], [0, -1]] ➔ Refleksi sumbu-X **(1-P)**\n" +
      "• (-x, y) dihasilkan oleh [[-1, 0], [0, 1]] ➔ Refleksi sumbu-Y **(2-Q)**\n" +
      "• (-y, x) dihasilkan oleh [[cos 90°, -sin 90°], [sin 90°, cos 90°]] = [[0, -1], [1, 0]] ➔ Rotasi +90° **(3-R)**\n\n" +
      "Maka pasangan yang benar adalah **1-P, 2-Q, 3-R** (Opsi A)."
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
  }
];
