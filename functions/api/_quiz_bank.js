// functions/api/_quiz_bank.js
// Bank Soal Terverifikasi untuk Kuis Otomatis Jam 16:00 WIB MathCihuy

export const QUIZ_BANK = [
  {
    id: 1,
    category: "📐 Matematika Wajib • Persamaan Lingkaran",
    difficulty: "Sedang",
    question: "Persamaan lingkaran yang berpusat di titik P(2, -3) dan menyinggung garis 3x - 4y + 7 = 0 adalah...",
    options: {
      A: "(x - 2)² + (y + 3)² = 25",
      B: "(x - 2)² + (y + 3)² = 16",
      C: "(x + 2)² + (y - 3)² = 25",
      D: "(x - 2)² + (y + 3)² = 9"
    },
    correct: "A",
    explanation: "**1. Menghitung Jarak Pusat ke Garis Singgung (Jari-jari r):**\n" +
      "Rumus: `r = |a·x₁ + b·y₁ + c| / √(a² + b²)`\n" +
      "Pusat (x₁, y₁) = (2, -3) dan garis 3x - 4y + 7 = 0\n" +
      "r = |3(2) - 4(-3) + 7| / √(3² + (-4)²)\n" +
      "r = |6 + 12 + 7| / √25 = 25 / 5 = 5\n\n" +
      "**2. Bentuk Baku Persamaan Lingkaran:**\n" +
      "(x - a)² + (y - b)² = r²\n" +
      "(x - 2)² + (y + 3)² = 5² ➔ **(x - 2)² + (y + 3)² = 25** (Opsi A)"
  },
  {
    id: 5,
    category: "📐 Matematika Wajib • Garis Singgung Lingkaran",
    difficulty: "Sedang",
    question: "Persamaan garis singgung lingkaran x² + y² = 25 di titik (-3, 4) adalah...",
    options: {
      A: "3x + 4y = 25",
      B: "-3x + 4y = 25",
      C: "4x - 3y = 25",
      D: "-3x - 4y = 25"
    },
    correct: "B",
    explanation: "**Titik (-3, 4) Terletak Pada Lingkaran:**\n" +
      "(-3)² + 4² = 9 + 16 = 25 (Valid)\n\n" +
      "**Rumus Garis Singgung di Titik (x₁, y₁):**\n" +
      "x₁·x + y₁·y = r²\n" +
      "-3·x + 4·y = 25 ➔ **-3x + 4y = 25** (Opsi B)"
  },
  {
    id: 11,
    category: "📐 Matematika Wajib • Garis Singgung Bergradien",
    difficulty: "Sedang",
    question: "Salah satu persamaan garis singgung pada lingkaran x² + y² = 16 yang memiliki gradien m = 3/4 adalah...",
    options: {
      A: "3x - 4y + 20 = 0",
      B: "3x - 4y - 12 = 0",
      C: "4x - 3y + 20 = 0",
      D: "3x + 4y - 20 = 0"
    },
    correct: "A",
    explanation: "**Rumus Garis Singgung Lingkaran Bergradien m:**\n" +
      "y = m·x ± r·√(1 + m²)\n" +
      "r² = 16 ➔ r = 4, m = 3/4\n" +
      "y = (3/4)x ± 4·√(1 + 9/16) = (3/4)x ± 4·(5/4) = (3/4)x ± 5\n" +
      "Kalikan kedua ruas dengan 4:\n" +
      "4y = 3x ± 20 ➔ **3x - 4y + 20 = 0** (Opsi A)"
  },
  {
    id: 12,
    category: "🎲 Matematika Wajib • Peluang Kejadian Majemuk",
    difficulty: "Sedang",
    question: "Sebuah kotak berisi 5 bola merah, 4 bola biru, dan 3 bola kuning. Dari kotak tersebut diambil 2 bola sekaligus secara acak. Peluang terambilnya kedua bola berwarna sama adalah...",
    options: {
      A: "19/66",
      B: "17/66",
      C: "23/66",
      D: "25/66"
    },
    correct: "A",
    explanation: "**1. Ruang Sampel (Total Bola = 12):**\n" +
      "n(S) = C(12, 2) = (12 × 11) / 2 = 66\n\n" +
      "**2. Terambil 2 Bola Berwarna Sama:**\n" +
      "• 2 Merah: C(5, 2) = 10\n" +
      "• 2 Biru: C(4, 2) = 6\n" +
      "• 2 Kuning: C(3, 2) = 3\n" +
      "Total cara = 10 + 6 + 3 = 19 cara\n\n" +
      "**3. Peluang:**\n" +
      "P = 19 / 66 ➔ **Opsi A**"
  },
  {
    id: 13,
    category: "🎲 Matematika Wajib • Peluang Bersyarat",
    difficulty: "Sedang / HOTS",
    question: "Dua buah dadu bermata enam dilempar bersamaan satu kali. Jika diketahui jumlah kedua mata dadu yang muncul lebih dari 8, peluang bahwa mata dadu pertama bernilai 5 adalah...",
    options: {
      A: "1/5",
      B: "1/4",
      C: "3/10",
      D: "2/5"
    },
    correct: "C",
    explanation: "**1. Ruang Sampel Bersyarat (Jumlah > 8):**\n" +
      "• Jumlah 9: (3,6), (4,5), (5,4), (6,3) [4 pasang]\n" +
      "• Jumlah 10: (4,6), (5,5), (6,4) [3 pasang]\n" +
      "• Jumlah 11: (5,6), (6,5) [2 pasang]\n" +
      "• Jumlah 12: (6,6) [1 pasang]\n" +
      "Total n(B) = 4 + 3 + 2 + 1 = 10 pasangan\n\n" +
      "**2. Kejadian Dadu Pertama = 5:**\n" +
      "(5,4), (5,5), (5,6) ➔ ada 3 pasangan\n\n" +
      "**3. Peluang Bersyarat:**\n" +
      "P = 3 / 10 ➔ **Opsi C**"
  },
  {
    id: 14,
    category: "🎲 Matematika Wajib • Kejadian Saling Bebas",
    difficulty: "Sedang",
    question: "Peluang siswa A lulus seleksi PTN adalah 0,8 sedangkan peluang siswa B lulus adalah 0,7. Peluang tepat satu orang di antara mereka yang lulus adalah...",
    options: {
      A: "0,26",
      B: "0,38",
      C: "0,42",
      D: "0,56"
    },
    correct: "B",
    explanation: "**Kejadian Tepat Satu Orang Lulus:**\n" +
      "• A lulus dan B gagal: P(A) × P(B') = 0,8 × 0,3 = 0,24\n" +
      "• A gagal dan B lulus: P(A') × P(B) = 0,2 × 0,7 = 0,14\n" +
      "Total Peluang = 0,24 + 0,14 = **0,38** (Opsi B)"
  },
  {
    id: 15,
    category: "🎲 Matematika Wajib • Frekuensi Harapan",
    difficulty: "Mudah - Sedang",
    question: "Tiga keping uang logam homogen dilempar undi bersamaan sebanyak 120 kali. Frekuensi harapan munculnya paling sedikit 2 sisi gambar (G) adalah...",
    options: {
      A: "30 kali",
      B: "45 kali",
      C: "60 kali",
      D: "75 kali"
    },
    correct: "C",
    explanation: "**1. Ruang Sampel 3 Koin:**\n" +
      "n(S) = 2³ = 8: {AAA, AAG, AGA, GAA, AGG, GAG, GGA, GGG}\n\n" +
      "**2. Paling Sedikit 2 Sisi Gambar (G):**\n" +
      "{AGG, GAG, GGA, GGG} ➔ n(K) = 4\n\n" +
      "**3. Frekuensi Harapan:**\n" +
      "P(K) = 4/8 = 1/2\n" +
      "Fh = 1/2 × 120 = **60 kali** (Opsi C)"
  },
  {
    id: 16,
    category: "📦 Matematika Wajib • Jarak Titik ke Garis Dimensi Tiga",
    difficulty: "Sedang / HOTS",
    question: "Diberikan kubus ABCD.EFGH dengan panjang rusuk 6 cm. Jarak titik C ke garis diagonal ruang AG adalah...",
    options: {
      A: "2√3 cm",
      B: "2√6 cm",
      C: "3√2 cm",
      D: "3√6 cm"
    },
    correct: "B",
    explanation: "**1. Segitiga ACG (Siku-siku di C):**\n" +
      "• AC = s√2 = 6√2 cm\n" +
      "• CG = 6 cm\n" +
      "• AG = s√3 = 6√3 cm\n\n" +
      "**2. Luas Segitiga ACG:**\n" +
      "d = (AC × CG) / AG = (6√2 × 6) / (6√3) = (6√2)/√3\n" +
      "Rasionalkan: (6√6)/3 = **2√6 cm** (Opsi B)"
  },
  {
    id: 17,
    category: "📦 Matematika Wajib • Jarak Titik ke Bidang Dimensi Tiga",
    difficulty: "Sedang / HOTS",
    question: "Diketahui kubus ABCD.EFGH dengan panjang rusuk 6 cm. Jarak antara titik E ke bidang BDG adalah...",
    options: {
      A: "2√3 cm",
      B: "3√3 cm",
      C: "4√3 cm",
      D: "4√2 cm"
    },
    correct: "C",
    explanation: "**Teorema Proyeksi Titik ke Bidang Diagonal:**\n" +
      "Jarak titik E (sudut jauh) ke bidang BDG = 2/3 × diagonal ruang\n" +
      "Diagonal ruang = 6√3 cm\n" +
      "Jarak = 2/3 × 6√3 = **4√3 cm** (Opsi C)"
  },
  {
    id: 8,
    category: "🎯 TKA & SNBT • Permutasi Jabatan",
    difficulty: "Sedang",
    question: "Dari 8 orang pengurus kelas terpilih akan ditentukan 3 orang sebagai Ketua, Sekretaris, dan Bendahara. Banyaknya susunan pengurus yang dapat dibentuk adalah...",
    options: {
      A: "56",
      B: "168",
      C: "336",
      D: "672"
    },
    correct: "C",
    explanation: "**Gunakan Permutasi (Memperhatikan Jabatan):**\n" +
      "P(8, 3) = 8! / (8 - 3)! = 8! / 5!\n" +
      "P(8, 3) = 8 × 7 × 6 = **336 susunan** (Opsi C)"
  },
  {
    id: 18,
    category: "🎯 TKA & SNBT • Kombinasi Delegasi",
    difficulty: "Sedang",
    question: "Sebuah tim olimpiade sains beranggotakan 4 orang akan dipilih dari 6 siswa putra dan 4 siswa putri. Jika tim tersebut harus terdiri dari paling sedikit 2 siswa putri, banyaknya cara pemilihan adalah...",
    options: {
      A: "115 cara",
      B: "125 cara",
      C: "140 cara",
      D: "155 cara"
    },
    correct: "A",
    explanation: "**Analisis Kasus Pemilihan (Putri ≥ 2):**\n" +
      "• 2 Putri & 2 Putra: C(4,2) × C(6,2) = 6 × 15 = 90\n" +
      "• 3 Putri & 1 Putra: C(4,3) × C(6,1) = 4 × 6 = 24\n" +
      "• 4 Putri & 0 Putra: C(4,4) × C(6,0) = 1 × 1 = 1\n" +
      "Total Cara = 90 + 24 + 1 = **115 cara** (Opsi A)"
  },
  {
    id: 7,
    category: "📐 Matematika Wajib • Teorema Sisa Polinomial",
    difficulty: "Mudah",
    question: "Sisa pembagian suku banyak P(x) = 2x³ - 5x² + 8x - 4 oleh (x - 2) adalah...",
    options: {
      A: "8",
      B: "12",
      C: "4",
      D: "0"
    },
    correct: "A",
    explanation: "**Gunakan Teorema Sisa S = P(2):**\n" +
      "P(2) = 2(2)³ - 5(2)² + 8(2) - 4\n" +
      "P(2) = 2(8) - 5(4) + 16 - 4\n" +
      "P(2) = 16 - 20 + 16 - 4 = **8** (Opsi A)"
  },
  {
    id: 19,
    category: "📐 Matematika Wajib • Polinomial Pembagi Kuadrat",
    difficulty: "Sedang",
    question: "Suku banyak P(x) jika dibagi oleh (x - 2) bersisa 5, dan jika dibagi oleh (x + 3) bersisa -10. Jika P(x) dibagi oleh (x² + x - 6), sisa pembagiannya adalah...",
    options: {
      A: "3x - 1",
      B: "3x + 1",
      C: "-3x + 11",
      D: "x + 3"
    },
    correct: "A",
    explanation: "**Bentuk Sisa Derajat Satu S(x) = ax + b:**\n" +
      "x² + x - 6 = (x - 2)(x + 3)\n" +
      "• P(2) = 2a + b = 5\n" +
      "• P(-3) = -3a + b = -10\n\n" +
      "Eliminasi:\n" +
      "5a = 15 ➔ a = 3\n" +
      "2(3) + b = 5 ➔ b = -1\n" +
      "Sisa = **3x - 1** (Opsi A)"
  },
  {
    id: 3,
    category: "📊 Matematika Wajib • Statistika Mean Gabungan",
    difficulty: "Mudah - Sedang",
    question: "Rata-rata nilai ujian matematika dari 39 siswa adalah 72. Jika nilai seorang siswa susulan digabungkan, rata-ratanya naik menjadi 72,5. Berapakah nilai siswa susulan tersebut?",
    options: {
      A: "88",
      B: "90",
      C: "92",
      D: "95"
    },
    correct: "C",
    explanation: "**1. Jumlah Nilai Awal (39 Siswa):** 39 × 72 = 2808\n" +
      "**2. Jumlah Nilai Baru (40 Siswa):** 40 × 72,5 = 2900\n" +
      "**3. Nilai Siswa Susulan:** 2900 - 2808 = **92** (Opsi C)"
  },
  {
    id: 20,
    category: "📊 Matematika Wajib • Rata-rata Dua Kelompok",
    difficulty: "Sedang",
    question: "Dalam kelas XII yang terdiri dari 40 siswa, rata-rata nilai ujian Matematika adalah 81. Jika terdapat 15 siswa laki-laki dengan rata-rata 76, maka rata-rata nilai siswa perempuan adalah...",
    options: {
      A: "82",
      B: "83",
      C: "84",
      D: "85"
    },
    correct: "C",
    explanation: "**1. Siswa Perempuan:** 40 - 15 = 25 siswa\n" +
      "**2. Total Nilai:**\n" +
      "• Total Semua = 40 × 81 = 3240\n" +
      "• Total Laki-laki = 15 × 76 = 1140\n" +
      "• Total Perempuan = 3240 - 1140 = 2100\n\n" +
      "**3. Rata-rata Perempuan:**\n" +
      "Mean = 2100 / 25 = **84** (Opsi C)"
  },
  {
    id: 6,
    category: "🎯 TKA & SNBT • Barisan & Deret Aritmatika",
    difficulty: "Sedang",
    question: "Diketahui barisan aritmatika dengan suku ke-3 adalah 11 dan suku ke-8 adalah 31. Suku ke-20 dari barisan tersebut adalah...",
    options: {
      A: "71",
      B: "75",
      C: "77",
      D: "79"
    },
    correct: "D",
    explanation: "**1. Cari Beda (b):**\n" +
      "U₈ - U₃ = 5b ➔ 31 - 11 = 20 ➔ b = 4\n" +
      "**2. Cari Suku Pertama (a):**\n" +
      "U₃ = a + 2b ➔ 11 = a + 8 ➔ a = 3\n" +
      "**3. Hitung U₂₀:**\n" +
      "U₂₀ = a + 19b = 3 + 19(4) = 3 + 76 = **79** (Opsi D)"
  },
  {
    id: 10,
    category: "🎯 TKA & SNBT • Fungsi Invers",
    difficulty: "Sedang",
    question: "Diketahui f(x) = (2x + 1) / (x - 3) untuk x ≠ 3. Nilai dari f⁻¹(5) adalah...",
    options: {
      A: "2",
      B: "4",
      C: "14/3",
      D: "16/3"
    },
    correct: "D",
    explanation: "**Gunakan Definisi Fungsi Invers f(x) = 5:**\n" +
      "(2x + 1) / (x - 3) = 5\n" +
      "2x + 1 = 5(x - 3) = 5x - 15\n" +
      "1 + 15 = 5x - 2x ➔ 16 = 3x ➔ **x = 16/3** (Opsi D)"
  }
];
