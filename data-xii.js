// ===========================================================================
// DATA KELAS XII -- Math Cihuy
// Berkas ini HANYA berisi hal yang berbeda antar tingkat. Kode aplikasi
// (app.js), tampilan (mathcihuy.css), dan pustaka (vendor.js) dipakai bersama
// oleh semua tingkat, sehingga perbaikan cukup dikerjakan sekali.
// ===========================================================================
const TINGKAT = 12;
const NAMA_TINGKAT = 'XII';


    // 1. MASTER DATABASE INJECTED FROM SERVER
    const db = {
  "wajib": [
    {
      "id": "P01",
      "bab": "Bab 1: Kaidah Pencacahan & Peluang",
      "title": "Aturan Penjumlahan & Perkalian (Prinsip Dasar & Filling Slots)",
      "obj": [
        "Memahami prinsip dasar penjumlahan (pilihan saling lepas) dan perkalian (aktivitas berseri).",
        "Menerapkan metode pengisian tempat (Filling Slots) untuk menentukan banyak susunan bilangan.",
        "Menyelesaikan masalah kontekstual pembentukan rute perjalanan dan sandi PIN."
      ],
      "hook": "Berapa banyak kemungkinan kombinasi nomor pelat kendaraan bermotor di wilayah Jabodetabek dengan pola 1 huruf depan, 4 angka, dan 3 huruf belakang tanpa ada angka berulang?",
      "toolkit": [
        {
          "name": "Aturan Penjumlahan Kejadian Saling Lepas",
          "math": "$$\\text{Total Cara} = n_1 + n_2 + \\dots + n_k$$"
        },
        {
          "name": "Aturan Perkalian Aktivitas Berseri",
          "math": "$$\\text{Total Cara} = n_1 \\times n_2 \\times \\dots \\times n_k$$"
        },
        {
          "name": "Metode Pengisian Tempat Berurutan",
          "math": "$$\\text{Banyak Susunan} = k_1 \\times k_2 \\times \\dots \\times k_n$$"
        },
        {
          "name": "Pencacahan Bilangan dengan Digit Terbatas",
          "math": "$$N = N_{\\text{ribuan}} \\times N_{\\text{ratusan}} \\times N_{\\text{puluhan}} \\times N_{\\text{satuan}}$$"
        },
        {
          "name": "Prinsip Komplemen Pencacahan",
          "math": "$$n(A) = n(S) - n(A')$$"
        }
      ],
      "examples": [
        {
          "problem": "Dari kota A ke B ada 4 jalur bus, dan dari B ke C ada 3 jalur bus. Seseorang bepergian dari A ke C melalui B, lalu kembali pulang ke A melalui B tanpa menggunakan bus yang sama pada setiap lintasan. Berapa banyak variasi rute perjalanan pergi-pulang?",
          "solution": "Langkah 1: Menggunakan rumus Aturan Perkalian Aktivitas Berseri, tentukan rute berangkat dari A ke C: $4 \\times 3 = 12$ rute.\nLangkah 2: Tentukan rute pulang dari C ke A dengan syarat tidak menggunakan jalur yang sama: $(3 - 1) \\times (4 - 1) = 2 \\times 3 = 6$ rute.\nLangkah 3: Menggunakan rumus Aturan Perkalian Aktivitas Berseri untuk menggabungkan perjalanan: $12 \\times 6 = 72$ rute.\nKesimpulan: Banyak variasi rute perjalanan pergi-pulang adalah 72 rute."
        },
        {
          "problem": "Dari angka {1, 2, 3, 4, 5, 6, 7} akan dibentuk bilangan genap 3 angka berbeda. Tentukan banyaknya bilangan genap yang dapat disusun!",
          "solution": "Langkah 1: Menggunakan rumus Pencacahan Bilangan dengan Digit Terbatas, tentukan slot satuan (harus genap {2, 4, 6}) $\\implies 3$ pilihan.\nLangkah 2: Menggunakan rumus Metode Pengisian Tempat Berurutan, isi digit ratusan dari sisa 6 angka $\\implies 6$ pilihan.\nLangkah 3: Isi digit puluhan dari sisa 5 angka $\\implies 5$ pilihan.\nLangkah 4: Total susunan $= 6 \\times 5 \\times 3 = 90$ bilangan.\nKesimpulan: Banyaknya bilangan genap 3 angka berbeda yang dapat disusun adalah 90 bilangan."
        },
        {
          "problem": "Dari himpunan angka {1, 2, 3, 4, 5, 6, 7} disusun bilangan ribuan bernilai antara 2.000 dan 6.000 tanpa angka berulang. Tentukan banyaknya bilangan yang dapat terbentuk!",
          "solution": "Langkah 1: Menggunakan rumus Pencacahan Bilangan dengan Digit Terbatas, digit ribuan {2, 3, 4, 5} $\\implies 4$ pilihan.\nLangkah 2: Menggunakan rumus Metode Pengisian Tempat Berurutan, sisa 3 slot (ratusan, puluhan, satuan) dipilih dari sisa 6 angka: $6 \\times 5 \\times 4 = 120$ cara.\nLangkah 3: Total bilangan $= 4 \\times 120 = 480$ bilangan.\nKesimpulan: Banyak bilangan ribuan antara 2.000 dan 6.000 tanpa angka berulang adalah 480 bilangan."
        },
        {
          "problem": "Dari angka {0, 1, 2, 3, 4, 5, 6} akan disusun bilangan ganjil 4 angka bernilai lebih dari 3.000 tanpa ada angka berulang. Tentukan banyaknya bilangan tersebut (Standar UTBK)!",
          "solution": "Langkah 1: Perhatikan syarat ribuan {3, 4, 5, 6} dan satuan ganjil {1, 3, 5} beririsan pada 3 dan 5. Menggunakan rumus Aturan Penjumlahan Kejadian Saling Lepas, bagi menjadi 2 kasus.\nLangkah 2 (Kasus 1: Ribuan ganjil {3, 5}): Ribuan $= 2$, Satuan $= 2$, Ratusan $= 5$, Puluhan $= 4 \\implies 2 \\times 5 \\times 4 \\times 2 = 80$ bilangan.\nLangkah 3 (Kasus 2: Ribuan genap {4, 6}): Ribuan $= 2$, Satuan $= 3$, Ratusan $= 5$, Puluhan $= 4 \\implies 2 \\times 5 \\times 4 \\times 3 = 120$ bilangan.\nLangkah 4: Total bilangan $= 80 + 120 = 200$ bilangan.\nKesimpulan: Banyaknya bilangan ganjil 4 angka lebih dari 3.000 tanpa angka berulang adalah 200 bilangan."
        },
        {
          "problem": "Sebuah PIN keamanan terdiri atas 2 huruf vokal berbeda diikuti 2 angka berbeda dari {0, 1, 2, 3, 4, 5}. Tentukan banyaknya variasi PIN yang memuat sekurang-kurangnya satu angka prima!",
          "solution": "Langkah 1: Menggunakan rumus Metode Pengisian Tempat Berurutan, susunan 2 huruf vokal dari {A, I, U, E, O} $= 5 \\times 4 = 20$ cara.\nLangkah 2: Menggunakan rumus Prinsip Komplemen Pencacahan, total susunan 2 angka berbeda $= 6 \\times 5 = 30$ cara.\nLangkah 3: Hitung susunan tanpa angka prima sama sekali (dari bukan prima {0, 1, 4}): $3 \\times 2 = 6$ cara.\nLangkah 4: Susunan angka memuat minimal satu prima $= 30 - 6 = 24$ cara.\nLangkah 5: Total variasi PIN $= 20 \\times 24 = 480$ variasi.\nKesimpulan: Banyaknya PIN yang memuat sekurang-kurangnya satu angka prima adalah 480 variasi."
        }
      ],
      "btc": "Kelompok VNPS: Tentukan banyak bilangan ganjil 4 angka bernilai lebih dari 3.000 tanpa angka berulang yang dapat disusun dari {0, 1, 2, 3, 4, 5, 6}!",
      "summary_data": {
        "summary": [
          "Aturan Penjumlahan digunakan ketika peristiwa bersifat saling lepas (opsional / tidak terjadi bersamaan).",
          "Aturan Perkalian (Filling Slots) digunakan ketika peristiwa terjadi secara berurutan atau simultan multi-tahap.",
          "Perhitungan kombinasi kode atau bilangan bersyarat harus mendahulukan slot yang memiliki batasan paling ketat (misal angka ganjil/genap pada slot satuan)."
        ],
        "islamic": "Setiap pilihan rute dan keputusan dalam hidup memiliki konsekuensi. Allah SWT memerintahkan manusia untuk senantiasa merencanakan langkah terbaik dengan penuh perhitungan dan bertawakkal (QS. Al-Hasyr: 18)."
      },
      "collab_cases": [
        "Dari angka $\\{0, 1, 2, 3, 4, 5, 6\\}$, tentukan banyak bilangan ganjil 3 angka lebih dari 300 tanpa angka berulang!",
        "Sebuah kode akses terdiri atas 2 huruf vokal berbeda diikuti 3 angka genap berbeda. Tentukan total kombinasi kode yang dapat dibentuk!",
        "Tentukan banyak jalur terpendek pada kisi $4 \\times 3$ dari titik $(0,0)$ ke $(4,3)$ yang wajib melewati titik $(2,2)$!",
        "Sebuah kafetaria menyediakan 4 jenis makanan pokok, 5 lauk, 3 sayur, dan 4 minuman. Berapa variasi paket makan siang (1 makanan, 1 lauk, 1 sayur, 1 minuman) yang dapat dipilih?",
        "Berapa banyak bilangan bulat positif antara 100 dan 999 yang memiliki minimal satu angka 7 dalam susunannya?"
      ]
    },
    {
      "id": "P02",
      "bab": "Bab 1: Kaidah Pencacahan & Peluang",
      "title": "Notasi Faktorial & Permutasi Unsur Berbeda",
      "obj": [
        "Mendefinisikan notasi faktorial $n! = n \\times (n-1) \\times \\dots \\times 1$ dan $0! = 1$.",
        "Menghitung permutasi $r$ unsur dari $n$ unsur berbeda $P(n, r) = \\frac{n!}{(n-r)!}$.",
        "Menyelesaikan masalah susunan dengan memperhatikan jabatan, posisi juara, dan antrean baris."
      ],
      "hook": "Dalam pemilihan formasi kepengurusan OSIS sekolah dari 9 calon kandidat, urutan posisi jabatan (Ketua, Sekretaris, Bendahara) sangat menentukan makna hasil pilihan!",
      "toolkit": [
        {
          "name": "Definisi Notasi Faktorial",
          "math": "$$n! = n \\times (n-1) \\times (n-2) \\times \\dots \\times 2 \\times 1, \\quad 0! = 1$$"
        },
        {
          "name": "Permutasi n Unsur Berbeda Diambil r",
          "math": "$$P(n, r) = P^n_r = \\frac{n!}{(n-r)!} \\quad (r \\le n)$$"
        },
        {
          "name": "Permutasi Seluruh Unsur Berbeda",
          "math": "$$P(n, n) = n!$$"
        },
        {
          "name": "Permutasi Berdampingan Unsur Berdampingan",
          "math": "$$\\text{Banyak Susunan} = (n - k + 1)! \\times k!$$"
        }
      ],
      "examples": [
        {
          "problem": "Hitunglah nilai dari bentuk faktorial berikut: $$\\frac{8!}{5! \\times 3!}$$",
          "solution": "Langkah 1: Menggunakan rumus Definisi Notasi Faktorial, jabarkan $8! = 8 \\times 7 \\times 6 \\times 5!$.\nLangkah 2: Sederhanakan $5!$ pada pembilang dan penyebut: $\\frac{8 \\times 7 \\times 6}{3!}$.\nLangkah 3: Hitung $3! = 3 \\times 2 \\times 1 = 6$:\n$$\\frac{8 \\times 7 \\times 6}{6} = 8 \\times 7 = 56$$\nKesimpulan: Nilai dari bentuk faktorial tersebut adalah 56."
        },
        {
          "problem": "Dari 8 calon pengurus OSIS akan dipilih Ketua, Sekretaris, dan Bendahara. Tentukan banyaknya susunan pengurus yang dapat dibentuk!",
          "solution": "Langkah 1: Karena posisi memiliki jabatan berurutan (urutan diperhatikan), gunakan rumus Permutasi n Unsur Berbeda Diambil r dengan $n = 8$ dan $r = 3$.\nLangkah 2: Susun perhitungan:\n$$P(8, 3) = \\frac{8!}{(8-3)!} = \\frac{8!}{5!} = 8 \\times 7 \\times 6 = 336$$\nKesimpulan: Banyaknya susunan pengurus OSIS yang dapat dibentuk adalah 336 susunan."
        },
        {
          "problem": "Berapa banyak kata 4 huruf berbeda yang dapat disusun dari huruf-huruf pembentuk kata 'GLOBAL'?",
          "solution": "Langkah 1: Kata 'GLOBAL' memiliki $n = 6$ huruf berbeda (G, L, O, B, A, L... huruf L berulang dicek, jika unsur berbeda 'GLOBAL' $\\implies$ 6 huruf).\nLangkah 2: Menggunakan rumus Permutasi n Unsur Berbeda Diambil r dengan $n = 6$ dan $r = 4$:\n$$P(6, 4) = \\frac{6!}{(6-4)!} = \\frac{6!}{2!} = 6 \\times 5 \\times 4 \\times 3 = 360$$\nKesimpulan: Banyaknya kata 4 huruf berbeda yang dapat disusun adalah 360 kata."
        },
        {
          "problem": "Terdapat 4 buku Matematika dan 3 buku Fisika berbeda yang akan disusun berjajar di rak buku. Tentukan banyaknya susunan jika semua buku Matematika harus selalu berdampingan!",
          "solution": "Langkah 1: Kelompokkan 4 buku Matematika menjadi 1 elemen tunggal ($k = 4$).\nLangkah 2: Total elemen yang dipermutasikan adalah 1 kelompok Matematika + 3 buku Fisika $= 4$ elemen.\nLangkah 3: Menggunakan rumus Permutasi Berdampingan Unsur Berdampingan:\n$$\\text{Banyak Susunan} = 4! \\times 4! = 24 \\times 24 = 576$$\nKesimpulan: Banyaknya susunan buku dengan buku Matematika berdampingan adalah 576 susunan."
        },
        {
          "problem": "7 orang siswa duduk berjajar pada 7 kursi. Jika 2 siswa tertentu (Ahmad dan Bilqis) menolak untuk duduk berdampingan, tentukan banyaknya cara susunan duduk mereka (Standar UTBK)!",
          "solution": "Langkah 1: Menggunakan rumus Permutasi Seluruh Unsur Berbeda, total seluruh kemungkinan duduk tanpa syarat: $P(7, 7) = 7! = 5.040$ cara.\nLangkah 2: Menggunakan rumus Permutasi Berdampingan Unsur Berdampingan, hitung banyak cara mereka duduk berdampingan: $(7 - 2 + 1)! \\times 2! = 6! \\times 2 = 720 \\times 2 = 1.440$ cara.\nLangkah 3: Kurangkan total dengan komplemen:\n$$\\text{Banyak Cara Tidak Berdampingan} = 5.040 - 1.440 = 3.600$$\nKesimpulan: Banyaknya cara susunan duduk di mana Ahmad dan Bilqis tidak berdampingan adalah 3.600 cara."
        }
      ],
      "btc": "Kelompok VNPS: Tentukan nilai $n$ yang memenuhi persamaan permutasi $P(n, 2) = 72$ dan buktikan kebenarannya!",
      "summary_data": {
        "summary": [
          "Faktorial $n! = n \\times (n-1) \\times \\dots \\times 1$ dengan definisi khusus $0! = 1$.",
          "Permutasi memperhatikan URUTAN susunan ($AB \\neq BA$).",
          "Rumus Permutasi $r$ unsur dari $n$ unsur berbeda: $P(n, r) = \\frac{n!}{(n-r)!}$."
        ],
        "islamic": "Susunan kepemimpinan dan amanah menuntut penempatan orang yang tepat pada posisi yang tepat (The right man on the right place), sebagaimana sabda Rasulullah SAW tentang menjaga amanah."
      },
      "collab_cases": [
        "Hitunglah nilai $n$ yang memenuhi persamaan permutasi: $P(n, 4) = 42 \\cdot P(n, 2)$!",
        "Berapa banyak susunan kata berbeda yang dapat dibentuk dari huruf-huruf pada kata 'GLOBALISASI'?",
        "Tujuh pengurus OSIS duduk berdampingan pada satu baris kursi. Tentukan peluang Ketua, Sekretaris, dan Bendahara selalu duduk berdampingan!",
        "Dalam lomba cerdas cermat yang diikuti 10 tim, berapa banyak kemungkinan susunan peraih Juara 1, Juara 2, dan Juara 3?",
        "Buktikan secara aljabar bahwa $P(n, r) = n \\cdot P(n-1, r-1)$ untuk setiap bilangan bulat $1 \\le r \\le n$!"
      ]
    },
    {
      "id": "P03",
      "bab": "Bab 1: Kaidah Pencacahan & Peluang",
      "title": "Permutasi Unsur Sama & Permutasi Siklis",
      "obj": [
        "Menghitung permutasi dengan beberapa unsur identik/sama $P = \\frac{n!}{k_1! k_2! \\dots k_m!}$.",
        "Menerapkan rumus permutasi siklis melingkar $P_{\\text{siklis}} = (n-1)!$.",
        "Menyelesaikan masalah susunan huruf anagram dan formasi meja bundar."
      ],
      "hook": "Berapa banyak anagram kata dari 'MATEMATIKA' yang memiliki beberapa huruf kembar (3 huruf A, 2 huruf M, 2 huruf T), dan bagaimana menyusun delegasi di meja bundar?",
      "toolkit": [
        {
          "name": "Permutasi dengan Unsur yang Sama",
          "math": "$$P = \\frac{n!}{k_1! \\times k_2! \\times \\dots \\times k_m!}$$"
        },
        {
          "name": "Permutasi Siklis Melingkar",
          "math": "$$P_{\\text{siklis}} = (n - 1)!$$"
        },
        {
          "name": "Permutasi Siklis dengan Unsur Berdampingan",
          "math": "$$P = (n - k)! \\times k!$$"
        },
        {
          "name": "Permutasi Siklis Tiga Dimensi Gelang Kalung",
          "math": "$$P_{\\text{gelang}} = \\frac{(n - 1)!}{2}$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan banyaknya susunan kata berbeda yang dapat dibentuk dari huruf-huruf pada kata 'MATEMATIKA'!",
          "solution": "Langkah 1: Identifikasi total huruf $n = 10$. Frekuensi huruf sama: M = 2, A = 3, T = 2, E = 1, I = 1, K = 1.\nLangkah 2: Menggunakan rumus Permutasi dengan Unsur yang Sama:\n$$P = \\frac{10!}{2! \\times 3! \\times 2!} = \\frac{3.628.800}{2 \\times 6 \\times 2} = \\frac{3.628.800}{24} = 151.200$$\nKesimpulan: Banyak susunan kata berbeda yang dapat dibentuk adalah 151.200 kata."
        },
        {
          "problem": "6 orang delegasi rapat duduk mengelilingi meja bundar. Tentukan banyaknya susunan posisi duduk mereka!",
          "solution": "Langkah 1: Karena posisi duduk melingkar, gunakan rumus Permutasi Siklis Melingkar dengan $n = 6$.\nLangkah 2: Hitung nilai faktorial:\n$$P_{\\text{siklis}} = (6 - 1)! = 5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$$\nKesimpulan: Banyaknya susunan posisi duduk mengelilingi meja bundar adalah 120 susunan."
        },
        {
          "problem": "5 manik-manik berbeda warna akan dirangkai menjadi sebuah gelang melingkar. Berapa banyak variasi gelang yang dapat dibuat?",
          "solution": "Langkah 1: Karena gelang dapat dibalik (tampak depan dan belakang simetris), gunakan rumus Permutasi Siklis Tiga Dimensi Gelang Kalung dengan $n = 5$.\nLangkah 2: Hitung susunan:\n$$P_{\\text{gelang}} = \\frac{(5 - 1)!}{2} = \\frac{4!}{2} = \\frac{24}{2} = 12$$\nKesimpulan: Banyaknya variasi gelang yang dapat dibuat adalah 12 variasi."
        },
        {
          "problem": "7 orang delegasi duduk mengelilingi meja bundar. Jika Ketua dan Sekretaris harus selalu duduk berdampingan, tentukan banyaknya cara susunan duduk mereka!",
          "solution": "Langkah 1: Satukan Ketua dan Sekretaris menjadi 1 elemen ($k = 2$).\nLangkah 2: Total objek siklis menjadi $7 - 2 + 1 = 6$ elemen.\nLangkah 3: Menggunakan rumus Permutasi Siklis dengan Unsur Berdampingan:\n$$P = (6 - 1)! \\times 2! = 5! \\times 2 = 120 \\times 2 = 240$$\nKesimpulan: Banyaknya susunan posisi duduk dengan Ketua dan Sekretaris berdampingan adalah 240 susunan."
        },
        {
          "problem": "8 orang siswa terdiri dari 4 putra dan 4 putri duduk mengelilingi meja bundar. Tentukan banyaknya susunan duduk jika putra dan putri harus duduk berselang-seling (Standar UTBK)!",
          "solution": "Langkah 1: Dudukkan 4 orang putra terlebih dahulu melingkar menggunakan rumus Permutasi Siklis Melingkar: $(4 - 1)! = 3! = 6$ cara.\nLangkah 2: Di antara 4 putra terbentuk 4 posisi selang-seling untuk putri. Dudukkan 4 putri pada 4 posisi linier tersebut: $P(4, 4) = 4! = 24$ cara.\nLangkah 3: Menggunakan aturan perkalian berseri:\n$$\\text{Total Susunan} = 6 \\times 24 = 144$$\nKesimpulan: Banyaknya susunan duduk berselang-seling adalah 144 cara."
        }
      ],
      "btc": "Kelompok VNPS: Tentukan banyak susunan huruf dari kata 'STATISTIKA' jika semua huruf T harus berdampingan!",
      "summary_data": {
        "summary": [
          "Permutasi dengan unsur sama: $P = \\frac{n!}{k_1! \\cdot k_2! \\cdot \\dots \\cdot k_m!}$.",
          "Permutasi siklis (lingkaran): $P_{\\text{siklis}} = (n-1)!$.",
          "Jika ada $k$ unsur yang harus selalu berdampingan, anggap $k$ unsur tersebut sebagai 1 kesatuan elemen lalu kalikan dengan $k!$ internal."
        ],
        "islamic": "Melingkar dalam musyawarah (halaqah) mencerminkan kesetaraan derajat di hadapan Allah SWT, di mana yang membedakan hanyalah ketakwaan (QS. Al-Hujurat: 13)."
      },
      "collab_cases": [
        "Tentukan banyak cara menyusun huruf-huruf pada kata 'MATEMATIKA' sedemikian hingga semua huruf vokal selalu berdampingan!",
        "Sebuah meja bundar dihadiri 6 delegasi dari 3 negara (masing-masing 2 orang). Berapa banyak susunan posisi duduk jika delegasi senegara wajib berdampingan?",
        "Terdapat 5 manik-manik merah berbeda dan 4 manik-manik biru berbeda yang akan dirangkai menjadi sebuah gelang melingkar berselang-seling. Berapa banyak variasinya?",
        "Tentukan banyak susunan 8 angka yang dapat dibentuk dari angka-angka $\\{2, 2, 3, 3, 3, 5, 5, 7\\}$ yang bernilai lebih dari $50.000.000$!",
        "Sebuah keluarga (Ayah, Ibu, 3 Anak) makan malam di meja bundar. Tentukan peluang kedua orang tua TIDAK duduk bersebelahan!"
      ]
    },
    {
      "id": "P04",
      "bab": "Bab 1: Kaidah Pencacahan & Peluang",
      "title": "Kombinasi & Pemilihan Delegasi Tanpa Urutan",
      "obj": [
        "Membedakan konsep kombinasi (tanpa memperhatikan urutan) dan permutasi.",
        "Menggunakan rumus kombinasi $C(n, r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$.",
        "Menyelesaikan masalah pemilihan delegasi tim dengan syarat komposisi tertentu."
      ],
      "hook": "Saat memilih 4 siswa perwakilan tim olimpiade sains dari 10 kandidat terbaik, siapapun yang terpilih lebih dulu tidak mempengaruhi komposisi tim.",
      "toolkit": [
        {
          "name": "Rumus Kombinasi Dasar",
          "math": "$$C(n, r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!} \\quad (r \\le n)$$"
        },
        {
          "name": "Sifat Simetri Kombinasi",
          "math": "$$\\binom{n}{r} = \\binom{n}{n-r}$$"
        },
        {
          "name": "Aturan Perkalian Pemilihan Subkelompok",
          "math": "$$\\text{Total Cara} = \\binom{n_1}{r_1} \\times \\binom{n_2}{r_2} \\times \\dots \\times \\binom{n_k}{r_k}$$"
        },
        {
          "name": "Kombinasi dengan Syarat Minimal Sekurang-kurangnya",
          "math": "$$\\text{Total} = \\sum \\binom{n_A}{k} \\times \\binom{n_B}{r-k}$$"
        }
      ],
      "examples": [
        {
          "problem": "Dari 10 orang anggota tim bulu tangkis akan dipilih 3 orang untuk mengikuti turnamen. Tentukan banyaknya cara pemilihan pemain tersebut!",
          "solution": "Langkah 1: Karena pemilihan pemain tidak memperhatikan urutan jabatan, gunakan rumus Rumus Kombinasi Dasar dengan $n = 10$ dan $r = 3$.\nLangkah 2: Hitung kombinasi:\n$$C(10, 3) = \\frac{10!}{3!(10-3)!} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120$$\nKesimpulan: Banyaknya cara pemilihan pemain adalah 120 cara."
        },
        {
          "problem": "Dari sebuah kotak berisi 6 bola merah dan 4 bola putih, diambil 3 bola sekaligus secara acak. Berapa banyak cara terambil 2 bola merah dan 1 bola putih?",
          "solution": "Langkah 1: Menggunakan rumus Aturan Perkalian Pemilihan Subkelompok, ambil 2 merah dari 6 merah dan 1 putih dari 4 putih.\nLangkah 2: Hitung masing-masing kombinasi:\n$$C(6, 2) = \\frac{6 \\times 5}{2 \\times 1} = 15$$\n$$C(4, 1) = 4$$\nLangkah 3: Kalikan kedua hasil: $15 \\times 4 = 60$ cara.\nKesimpulan: Banyaknya cara terambil 2 bola merah dan 1 bola putih adalah 60 cara."
        },
        {
          "problem": "Dari 8 titik pada bidang datar di mana tidak ada 3 titik yang segaris, tentukan banyaknya segitiga berbeda yang dapat dibentuk dari titik-titik tersebut!",
          "solution": "Langkah 1: Sebuah segitiga membutuhkan 3 titik sudut dari total 8 titik yang tersedia.\nLangkah 2: Menggunakan rumus Rumus Kombinasi Dasar dengan $n = 8$ dan $r = 3$:\n$$C(8, 3) = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$$\nKesimpulan: Banyaknya segitiga yang dapat dibentuk adalah 56 segitiga."
        },
        {
          "problem": "Suatu delegasi beranggotakan 4 orang akan dipilih dari 5 siswa putra dan 4 siswa putri. Tentukan banyaknya cara pemilihan jika delegasi harus memuat sekurang-kurangnya 2 siswa putri (Standar UTBK)!",
          "solution": "Langkah 1: Menggunakan rumus Kombinasi dengan Syarat Minimal Sekurang-kurangnya, bagi menjadi 3 kasus saling lepas:\n- Kasus 1 (2 Putri, 2 Putra): $C(4, 2) \\times C(5, 2) = 6 \\times 10 = 60$\n- Kasus 2 (3 Putri, 1 Putra): $C(4, 3) \\times C(5, 1) = 4 \\times 5 = 20$\n- Kasus 3 (4 Putri, 0 Putra): $C(4, 4) \\times C(5, 0) = 1 \\times 1 = 1$\nLangkah 2: Jumlahkan seluruh kasus: $60 + 20 + 1 = 81$ cara.\nKesimpulan: Banyaknya cara pembentukan delegasi adalah 81 cara."
        },
        {
          "problem": "Seorang siswa harus mengerjakan 8 dari 10 soal ujian dengan ketentuan soal nomor 1 sampai 4 wajib dikerjakan. Tentukan banyaknya pilihan soal yang dapat diambil!",
          "solution": "Langkah 1: Karena soal nomor 1 sampai 4 wajib dikerjakan (4 soal sudah pasti), maka siswa tinggal memilih $8 - 4 = 4$ soal lagi.\nLangkah 2: Soal yang tersisa untuk dipilih adalah $10 - 4 = 6$ soal.\nLangkah 3: Menggunakan rumus Rumus Kombinasi Dasar dengan $n = 6$ dan $r = 4$:\n$$C(6, 4) = C(6, 2) = \\frac{6 \\times 5}{2 \\times 1} = 15$$\nKesimpulan: Banyaknya pilihan soal yang dapat diambil siswa adalah 15 pilihan."
        }
      ],
      "btc": "Kelompok VNPS: Dari 8 titik pada sebuah bidang datar di mana tidak ada 3 titik yang segaris, tentukan banyak segitiga berbeda yang dapat dibentuk!",
      "summary_data": {
        "summary": [
          "Kombinasi TIDAK memperhatikan urutan susunan ($AB = BA$).",
          "Rumus Kombinasi: $C(n, r) = \\frac{n!}{r!(n-r)!}$.",
          "Sifat simetri kombinasi: $C(n, r) = C(n, n-r)$."
        ],
        "islamic": "Pemilihan delegasi dan perwakilan umat harus didasarkan pada prinsip musyawarah, integritas, dan kompetensi tanpa membeda-bedakan latar belakang (QS. Asy-Syura: 38)."
      },
      "collab_cases": [
        "Dari 8 siswa putra dan 6 siswa putri, akan dipilih delegasi beranggotakan 5 orang dengan syarat minimal 3 siswa putri. Tentukan banyak cara memilihnya!",
        "Dalam kotak terdapat 7 bola merah dan 5 bola putih. Diambil 4 bola sekaligus. Tentukan peluang terambil tepat 2 bola merah dan 2 bola putih!",
        "Buktikan Identitas Segitiga Pascal: $\\binom{n}{k} + \\binom{n}{k-1} = \\binom{n+1}{k}$ dan berikan interpretasi kombinasinya!",
        "Dari 12 titik pada bidang datar di mana tidak ada 3 titik yang segaris, tentukan banyak segitiga yang dapat dibentuk dengan menghubungkan titik-titik tersebut!",
        "Tentukan banyak solusi bilangan bulat non-negatif $(x_1, x_2, x_3, x_4)$ dari persamaan $x_1 + x_2 + x_3 + x_4 = 15$ menggunakan metode *stars and bars*!"
      ]
    },
    {
      "id": "P05",
      "bab": "Bab 1: Kaidah Pencacahan & Peluang",
      "title": "Peluang Kejadian Tunggal & Frekuensi Harapan",
      "obj": [
        "Menentukan ruang sampel $S$ dan titik sampel kejadian $A$.",
        "Menghitung peluang teoritis kejadian tunggal $P(A) = \\frac{n(A)}{n(S)}$ dan komplemen $P(A') = 1 - P(A)$.",
        "Menghitung frekuensi harapan kejadian $F_h(A) = N \\times P(A)$ dalam $N$ percobaan."
      ],
      "hook": "Berapa ekspektasi frekuensi munculnya jumlah mata dadu prima saat sepasang dadu dilempar sebanyak 360 kali?",
      "toolkit": [
        {
          "name": "Peluang Teoretik Kejadian Klasik",
          "math": "$$P(A) = \\frac{n(A)}{n(S)} \\quad [0 \\le P(A) \\le 1]$$"
        },
        {
          "name": "Peluang Komplemen Kejadian",
          "math": "$$P(A') = 1 - P(A)$$"
        },
        {
          "name": "Frekuensi Harapan Suatu Kejadian",
          "math": "$$F_h(A) = n \\times P(A)$$"
        },
        {
          "name": "Peluang Pengambilan Objek Tanpa Pengembalian",
          "math": "$$P(A) = \\frac{\\binom{n_1}{r_1} \\times \\binom{n_2}{r_2}}{\\binom{N}{R}}$$"
        }
      ],
      "examples": [
        {
          "problem": "Dua buah dadu bermata 6 dilempar bersamaan satu kali. Tentukan peluang muncul mata dadu berjumlah 8!",
          "solution": "Langkah 1: Ruang sampel pelemparan dua dadu $n(S) = 6 \\times 6 = 36$.\nLangkah 2: Kejadian $A$ muncul jumlah 8: {(2,6), (3,5), (4,4), (5,3), (6,2)} $\\implies n(A) = 5$.\nLangkah 3: Menggunakan rumus Peluang Teoretik Kejadian Klasik:\n$$P(A) = \\frac{n(A)}{n(S)} = \\frac{5}{36}$$\nKesimpulan: Peluang muncul mata dadu berjumlah 8 adalah $\\frac{5}{36}$."
        },
        {
          "problem": "Tiga keping uang logam dilempar bersama-sama sebanyak 120 kali. Tentukan frekuensi harapan muncul sekurang-kurangnya 2 angka!",
          "solution": "Langkah 1: Ruang sampel 3 koin $n(S) = 2^3 = 8$.\nLangkah 2: Kejadian $A$ sekurang-kurangnya 2 angka (2 angka atau 3 angka): {(A,A,G), (A,G,A), (G,A,A), (A,A,A)} $\\implies n(A) = 4$.\nLangkah 3: Peluang $P(A) = \\frac{4}{8} = \\frac{1}{2}$.\nLangkah 4: Menggunakan rumus Frekuensi Harapan Suatu Kejadian dengan $n = 120$:\n$$F_h(A) = 120 \\times \\frac{1}{2} = 60 \\text{ kali}$$\nKesimpulan: Frekuensi harapan muncul minimal 2 angka adalah 60 kali."
        },
        {
          "problem": "Sebuah kantong berisi 5 kelereng merah dan 3 kelereng biru. Diambil 2 kelereng secara acak sekaligus. Tentukan peluang terambil kedua kelereng berwarna merah!",
          "solution": "Langkah 1: Total kelereng $N = 8$, diambil $R = 2$. Ruang sampel $n(S) = C(8, 2) = \\frac{8 \\times 7}{2} = 28$.\nLangkah 2: Kejadian $A$ terambil 2 kelereng merah dari 5 kelereng merah: $n(A) = C(5, 2) = \\frac{5 \\times 4}{2} = 10$.\nLangkah 3: Menggunakan rumus Peluang Pengambilan Objek Tanpa Pengembalian:\n$$P(A) = \\frac{10}{28} = \\frac{5}{14}$$\nKesimpulan: Peluang terambil kedua kelereng berwarna merah adalah $\\frac{5}{14}$."
        },
        {
          "problem": "Dari 1 set kartu bridge (52 kartu) diambil 1 kartu secara acak. Tentukan peluang terambil bukan kartu As!",
          "solution": "Langkah 1: Jumlah kartu As pada 1 set bridge adalah $n(A) = 4$, dengan $n(S) = 52$.\nLangkah 2: Peluang terambil kartu As adalah $P(A) = \\frac{4}{52} = \\frac{1}{13}$.\nLangkah 3: Menggunakan rumus Peluang Komplemen Kejadian:\n$$P(A') = 1 - P(A) = 1 - \\frac{1}{13} = \\frac{12}{13}$$\nKesimpulan: Peluang terambil bukan kartu As adalah $\\frac{12}{13}$."
        },
        {
          "problem": "Dalam sebuah kotak terdapat 4 bola putih dan 6 bola hitam. Diambil 3 bola sekaligus secara acak. Tentukan peluang terambil sekurang-kurangnya 1 bola putih (Standar UTBK)!",
          "solution": "Langkah 1: Total bola $= 10$. Ruang sampel $n(S) = C(10, 3) = \\frac{10 \\times 9 \\times 8}{6} = 120$.\nLangkah 2: Gunakan prinsip komplemen: kejadian $A'$ adalah terambilnya 0 bola putih (ketiganya bola hitam dari 6 bola hitam).\nLangkah 3: $n(A') = C(6, 3) = \\frac{6 \\times 5 \\times 4}{6} = 20$.\nLangkah 4: Peluang komplemen $P(A') = \\frac{20}{120} = \\frac{1}{6}$.\nLangkah 5: Menggunakan rumus Peluang Komplemen Kejadian:\n$$P(A) = 1 - P(A') = 1 - \\frac{1}{6} = \\frac{5}{6}$$\nKesimpulan: Peluang terambil sekurang-kurangnya 1 bola putih adalah $\\frac{5}{6}$."
        }
      ],
      "btc": "Kelompok VNPS: Tiga keping uang logam dilempar bersamaan sebanyak 120 kali. Hitung frekuensi harapan munculnya minimal 2 sisi Gambar!",
      "summary_data": {
        "summary": [
          "Peluang teoritis kejadian $A$: $P(A) = \\frac{n(A)}{n(S)}$ dengan kisaran $0 \\le P(A) \\le 1$.",
          "Peluang komplemen: $P(A') = 1 - P(A)$.",
          "Frekuensi Harapan: $F_h(A) = n \\times P(A)$ untuk $n$ kali percobaan."
        ],
        "islamic": "Peluang mengajarkan konsep ikhtiar optimal dalam menghadapi ketidakpastian dunia, sementara hasil akhir senantiasa berada dalam takdir dan ketetapan Allah SWT (QS. Ar-Ra'd: 11)."
      },
      "collab_cases": [
        "Dua dadu setimbang dilempar bersamaan sebanyak 360 kali. Hitunglah frekuensi harapan munculnya mata dadu berjumlah kelipatan 3 atau prima!",
        "Peluang seorang penembak jitu mengenai target adalah $0{,}75$. Jika ia melepaskan 6 tembakan, tentukan peluang ia tepat mengenai target sebanyak 5 kali!",
        "Sebuah kantong berisi 4 kelereng merah dan 6 kelereng biru. Diambil 3 kelereng satu per satu tanpa pengembalian. Tentukan peluang kelereng ketiga merah jika kelereng pertama merah!",
        "Sebuah koin tak setimbang memiliki peluang muncul angka sebesar $\\frac{2}{3}$. Jika koin dilempar 5 kali, tentukan peluang muncul tepat 3 kali angka!",
        "Tentukan peluang bahwa dalam sebuah kelompok beranggotakan 30 orang secara acak, minimal terdapat dua orang yang berulang tahun pada hari yang sama!"
      ]
    },
    {
      "id": "P06",
      "bab": "Bab 1: Kaidah Pencacahan & Peluang",
      "title": "Asesmen Sumatif 1 (UH-1 Pencacahan & Peluang Tunggal)",
      "obj": [
        "Mengevaluasi penguasaan konsep aturan pengisian tempat, faktorial, permutasi, kombinasi, dan peluang tunggal.",
        "Melatih kecepatan dan ketepatan penalaran matematika berbasis CBT.",
        "Mendiagnosis kesiapan menghadapi soal standar UTBK-SNBT."
      ],
      "hook": "Uji sumatif pertama untuk mengukur fondasi kombinatorika sebelum melangkah ke peluang kejadian majemuk.",
      "toolkit": [
        {
          "name": "Matriks Uji UH-1",
          "math": "$$\\text{Filling Slots (25\\%)} + \\text{Permutasi/Kombinasi (50\\%)} + \\text{Peluang Tunggal (25\\%)}$$"
        },
        {
          "name": "Hubungan P dan C",
          "math": "$$P(n, r) = r! \\times C(n, r)$$"
        },
        {
          "name": "Prinsip Dasar Pencacahan Komplemen",
          "math": "$$n(A) = n(S) - n(A')$$"
        },
        {
          "name": "Aturan Kombinasi Pemilihan Bebas",
          "math": "$$\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan nilai dari $\\frac{P(6, 3)}{C(6, 3)}$!",
          "solution": "Langkah 1: $P(6, 3) = 6 \\times 5 \\times 4 = 120$.\nLangkah 2: $C(6, 3) = \\frac{120}{3!} = \\frac{120}{6} = 20$.\nLangkah 3: $\\frac{120}{20} = 6 = 3!$.\nKesimpulan: Nilai rasio tersebut adalah $6$."
        },
        {
          "problem": "Dari himpunan angka {1, 2, 3, 4, 5, 6} disusun bilangan 4 digit tanpa perulangan. Berapa peluang bilangan yang terbentuk bernilai genap?",
          "solution": "Langkah 1: Total bilangan 4 digit $n(S) = P(6, 4) = 6 \\times 5 \\times 4 \\times 3 = 360$.\nLangkah 2: Bilangan genap (satuan 2, 4, 6 $\\implies 3$ pilihan): $n(A) = 5 \\times 4 \\times 3 \\times 3 = 180$.\nLangkah 3: $P(A) = \\frac{180}{360} = \\frac{1}{2}$.\nKesimpulan: Peluang bilangan bernilai genap adalah $\\frac{1}{2}$."
        },
        {
          "problem": "Tentukan nilai $n$ jika diketahui $C(n, 2) = 28$!",
          "solution": "Langkah 1: $\\frac{n(n - 1)}{2} = 28 \\implies n(n - 1) = 56$.\nLangkah 2: $n^2 - n - 56 = 0 \\implies (n - 8)(n + 7) = 0$.\nLangkah 3: Karena $n$ bilangan asli, maka $n = 8$.\nKesimpulan: Nilai $n$ adalah $8$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Asesmen Sumatif 1 (UH-1 Pencacahan & Peluang Tunggal). Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Matriks Uji UH-1, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Hubungan P dan C, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Asesmen Sumatif 1 (UH-1 Pencacahan & Peluang Tunggal), selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Matriks Uji UH-1.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Hubungan P dan C.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Bedah paket 10 soal CBT Sumatif 1 dan buktikan solusi analitisnya bersama tim!",
      "summary_data": {
        "summary": [
          "Evaluasi sumatif mengintegrasikan aturan perkalian, permutasi, kombinasi, dan peluang tunggal.",
          "Identifikasi kata kunci: 'memperhatikan urutan' $\\to$ Permutasi; 'memilih kelompok' $\\to$ Kombinasi."
        ],
        "islamic": "Evaluasi dan muhasabah diri secara berkala adalah ciri mukmin yang cerdas, mempersiapkan bekal terbaik untuk kehidupan mendatang (QS. Al-Hasyr: 18)."
      },
      "collab_cases": [
        "Tentukan banyak bilangan 4 digit berbeda yang habis dibagi 5 dan nilainya terletak di antara $2.000$ dan $7.000$ yang dapat disusun dari $\\{0, 1, 2, 3, 4, 5, 6, 7\\}$!",
        "Dari 10 finalis (6 pria, 4 wanita), dipilih 3 juara. Berapa peluang Juara 1 dan 2 diraih pria sedangkan Juara 3 diraih wanita?",
        "Sebuah keluarga (Ayah, Ibu, 4 anak) berfoto melingkar. Tentukan peluang Ayah dan Ibu selalu berdampingan dengan si bungsu di antara mereka!",
        "Dalam turnamen catur sistem setengah kompetisi (*round-robin*) yang diikuti 12 peserta, berapa total pertandingan yang akan dimainkan?",
        "Tentukan koefisien dari suku $x^4 y^6$ pada ekspansi binomial Newton $(2x - 3y)^{10}$!"
      ]
    },
    {
      "id": "P07",
      "bab": "Bab 1: Kaidah Pencacahan & Peluang",
      "title": "Peluang Kejadian Saling Lepas & Tidak Saling Lepas",
      "obj": [
        "Membedakan kejadian saling lepas ($A \\cap B = \\emptyset$) dan tidak saling lepas ($A \\cap B \\neq \\emptyset$).",
        "Menerapkan rumus penjumlahan peluang $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.",
        "Menyelesaikan masalah probabilitas gabungan dua kejadian dalam kehidupan sehari-hari."
      ],
      "hook": "Dalam survei minat siswa: 60% gemar Coding, 50% gemar Robotik, dan 30% gemar keduanya. Berapa peluang seorang siswa gemar Coding ATAU Robotik?",
      "toolkit": [
        {
          "name": "Kejadian Saling Lepas",
          "math": "$$P(A \\cup B) = P(A) + P(B) \\quad (A \\cap B = \\emptyset)$$"
        },
        {
          "name": "Kejadian Tidak Saling Lepas",
          "math": "$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$"
        },
        {
          "name": "Prinsip Dasar Pencacahan Komplemen",
          "math": "$$n(A) = n(S) - n(A')$$"
        },
        {
          "name": "Aturan Kombinasi Pemilihan Bebas",
          "math": "$$\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$$"
        }
      ],
      "examples": [
        {
          "problem": "Pada pelemparan 2 buah dadu, tentukan peluang munculnya jumlah mata dadu sama dengan 5 ATAU jumlah 10!",
          "solution": "Langkah 1: Jumlah 5: $A = \\{(1,4), (2,3), (3,2), (4,1)\\} \\implies n(A) = 4 \\implies P(A) = \\frac{4}{36}$.\nLangkah 2: Jumlah 10: $B = \\{(4,6), (5,5), (6,4)\\} \\implies n(B) = 3 \\implies P(B) = \\frac{3}{36}$.\nLangkah 3: Karena jumlah dadu tidak mungkin 5 dan 10 sekaligus ($A \\cap B = \\emptyset$), kedua kejadian saling lepas.\nLangkah 4: $P(A \\cup B) = \\frac{4}{36} + \\frac{3}{36} = \\frac{7}{36}$.\nKesimpulan: Peluang muncul jumlah 5 atau 10 adalah $\\frac{7}{36}$."
        },
        {
          "problem": "Dari seperangkat kartu bridge standar (52 kartu), diambil 1 kartu secara acak. Tentukan peluang terambil kartu bernomor prima ({2, 3, 5, 7}) ATAU kartu berwarna merah!",
          "solution": "Langkah 1: Kartu prima ada 4 jenis $\\times 4 = 16$ kartu $\\implies P(A) = \\frac{16}{52}$.\nLangkah 2: Kartu merah ada 26 kartu $\\implies P(B) = \\frac{26}{52}$.\nLangkah 3: Irisan kartu prima merah ada 4 jenis $\\times 2 = 8$ kartu $\\implies P(A \\cap B) = \\frac{8}{52}$.\nLangkah 4: $P(A \\cup B) = \\frac{16}{52} + \\frac{26}{52} - \\frac{8}{52} = \\frac{34}{52} = \\frac{17}{26}$.\nKesimpulan: Peluang terambil kartu prima atau merah adalah $\\frac{17}{26}$."
        },
        {
          "problem": "Dari 36 siswa kelas XII, 20 gemar basket, 18 gemar futsal, dan 8 gemar keduanya. Jika dipilih 1 siswa secara acak, berapa peluang siswa tersebut gemar basket ATAU futsal?",
          "solution": "Langkah 1: $P(\\text{Basket}) = \\frac{20}{36}, P(\\text{Futsal}) = \\frac{18}{36}, P(\\text{Keduanya}) = \\frac{8}{36}$.\nLangkah 2: $P(B \\cup F) = \\frac{20}{36} + \\frac{18}{36} - \\frac{8}{36} = \\frac{30}{36} = \\frac{5}{6}$.\nKesimpulan: Peluang siswa gemar basket atau futsal adalah $\\frac{5}{6}$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Peluang Kejadian Saling Lepas & Tidak Saling Lepas. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Kejadian Saling Lepas, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Kejadian Tidak Saling Lepas, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Peluang Kejadian Saling Lepas & Tidak Saling Lepas, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Kejadian Saling Lepas.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Kejadian Tidak Saling Lepas.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Dari 100 pelamar kerja, 45 menguasai Python, 40 menguasai SQL, dan 20 menguasai keduanya. Tentukan peluang seorang pelamar acak TIDAK menguasai keduanya!",
      "summary_data": {
        "summary": [
          "Kejadian Saling Lepas ($A \\cap B = \\emptyset$): $P(A \\cup B) = P(A) + P(B)$.",
          "Kejadian Tidak Saling Lepas ($A \\cap B \\neq \\emptyset$): $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$."
        ],
        "islamic": "Menghargai keberagaman dan tidak mencampuradukkan antara yang hak dan yang batil merupakan prinsip keteguhan iman (QS. Al-Baqarah: 42)."
      },
      "collab_cases": [
        "Dari satu set kartu bridge lengkap (52 kartu), diambil 1 kartu secara acak. Tentukan peluang terambilnya kartu As atau kartu berwarna merah!",
        "Dua dadu dilempar sekali. Tentukan peluang munculnya jumlah kedua mata dadu kurang dari 5 atau lebih dari 9!",
        "Dalam kelas XII terdapat 36 siswa: 20 suka Matematika, 15 suka Fisika, dan 8 suka keduanya. Tentukan peluang terpilih siswa yang tidak menyukai keduanya!",
        "Peluang seorang siswa lulus tes Matematika adalah $0{,}8$ dan peluang lulus tes Bahasa Inggris adalah $0{,}7$. Jika peluang lulus keduanya $0{,}6$, tentukan peluang ia lulus minimal satu tes!",
        "Buktikan hukum De Morgan untuk peluang: $P((A \\cup B)') = P(A' \\cap B')$ menggunakan diagram Venn probabilitas!"
      ]
    },
    {
      "id": "P08",
      "bab": "Bab 1: Kaidah Pencacahan & Peluang",
      "title": "Peluang Kejadian Saling Bebas & Peluang Bersyarat",
      "obj": [
        "Mendefinisikan kejadian saling bebas: $P(A \\cap B) = P(A) \\times P(B)$.",
        "Menghitung peluang bersyarat $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ untuk kejadian tak bebas.",
        "Membedakan pengambilan bola dengan pengembalian vs tanpa pengembalian."
      ],
      "hook": "Peluang siswa A lulus ujian adalah 0,8 dan siswa B lulus adalah 0,7. Jika kelulusan keduanya saling independen, berapa peluang minimal 1 siswa lulus?",
      "toolkit": [
        {
          "name": "Kejadian Saling Bebas (Independen)",
          "math": "$$P(A \\cap B) = P(A) \\times P(B)$$"
        },
        {
          "name": "Peluang Bersyarat",
          "math": "$$P(A | B) = \\frac{P(A \\cap B)}{P(B)} \\quad (P(B) > 0)$$"
        },
        {
          "name": "Pengambilan Tanpa Pengembalian",
          "math": "$$P(A \\cap B) = P(A) \\times P(B | A)$$"
        },
        {
          "name": "Prinsip Dasar Pencacahan Komplemen",
          "math": "$$n(A) = n(S) - n(A')$$"
        },
        {
          "name": "Aturan Kombinasi Pemilihan Bebas",
          "math": "$$\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$$"
        }
      ],
      "examples": [
        {
          "problem": "Peluang siswa A lulus seleksi PTN adalah 0,8 dan peluang siswa B lulus adalah 0,7. Tentukan peluang siswa A dan B lulus bersama-sama!",
          "solution": "Langkah 1: Karena hasil ujian siswa A tidak mempengaruhi siswa B, kedua kejadian saling bebas.\nLangkah 2: $P(A \\cap B) = P(A) \\times P(B) = 0{,}8 \\times 0{,}7 = 0{,}56$.\nKesimpulan: Peluang kedua siswa lulus bersamaan adalah $0{,}56$."
        },
        {
          "problem": "Sebuah kotak berisi 5 bola merah dan 3 bola putih. Dua bola diambil satu per satu TANPA pengembalian. Tentukan peluang terambilnya bola pertama merah dan bola kedua putih!",
          "solution": "Langkah 1: Menggunakan rumus Kejadian Saling Bebas (Independen), analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nLangkah 1 (Bola 1 Merah): Total 8 bola $\\implies P(M_1) = \\frac{5}{8}$.\nLangkah 2 (Bola 2 Putih): Sisa 7 bola di kotak, putih tetap 3 $\\implies P(P_2 | M_1) = \\frac{3}{7}$.\nLangkah 3: $P(M_1 \\cap P_2) = \\frac{5}{8} \\times \\frac{3}{7} = \\frac{15}{56}$.\nKesimpulan: Peluang terambil bola pertama merah dan kedua putih adalah $\\frac{15}{56}$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Dari pelemparan sebuah dadu, diketahui mata dadu yang muncul adalah bilangan prima. Berapa peluang munculnya mata dadu ganjil?",
          "solution": "Langkah 1: Ruang sampel bersyarat prima: $B = \\{2, 3, 5\\} \\implies n(B) = 3$.\nLangkah 2: Mata dadu prima yang ganjil: $A \\cap B = \\{3, 5\\} \\implies n(A \\cap B) = 2$.\nLangkah 3: $P(A | B) = \\frac{n(A \\cap B)}{n(B)} = \\frac{2}{3}$.\nKesimpulan: Peluang muncul mata dadu ganjil bersyarat prima adalah $\\frac{2}{3}$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Peluang Kejadian Saling Bebas & Peluang Bersyarat. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Kejadian Saling Bebas (Independen), definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Peluang Bersyarat, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Peluang Kejadian Saling Bebas & Peluang Bersyarat, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Kejadian Saling Bebas (Independen).\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Peluang Bersyarat.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Kotak A berisi 4 merah dan 2 putih. Kotak B berisi 3 merah dan 5 putih. Satu keping koin dilempar untuk memilih kotak. Tentukan peluang terambil bola putih!",
      "summary_data": {
        "summary": [
          "Kejadian Saling Bebas: $P(A \\cap B) = P(A) \\times P(B)$.",
          "Peluang Bersyarat: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ di mana kemunculan $B$ mempengaruhi $A$."
        ],
        "islamic": "Saling ketergantungan antar peristiwa mengajarkan bahwa setiap tindakan manusia saling terkait dan dicatat dengan teliti oleh malaikat (QS. Al-Zalzalah: 7-8)."
      },
      "collab_cases": [
        "Peluang tim A menang adalah $0{,}6$ dan peluang tim B menang adalah $0{,}7$. Jika kedua pertandingan saling bebas, tentukan peluang minimal salah satu tim menang!",
        "Kotak I berisi 3 bola merah dan 2 putih. Kotak II berisi 4 bola merah dan 5 putih. Sebuah kotak dipilih acak lalu diambil 1 bola merah. Berapa peluang bola dari Kotak I?",
        "Tiga mesin $M_1, M_2, M_3$ memproduksi masing-masing $30\\%$, $45\\%$, $25\\%$ produk dengan tingkat cacat $2\\%$, $3\\%$, $4\\%$. Jika terpilih produk cacat, tentukan peluang dari mesin $M_2$!",
        "Sebuah tes medis memiliki sensitivitas $99\\%$ dan spesifisitas $95\\%$. Jika prevalensi penyakit dalam populasi adalah $1\\%$, tentukan peluang seseorang benar-benar sakit jika hasil tesnya positif!",
        "Dua kejadian $A$ dan $B$ saling bebas dengan $P(A) = 0{,}4$ dan $P(A \\cup B) = 0{,}7$. Tentukan nilai $P(B)$ dan $P(A \\mid B)$!"
      ]
    },
    {
      "id": "P09",
      "bab": "Bab 2: Geometri Dimensi Tiga",
      "title": "Kedudukan Titik, Garis, dan Bidang dalam Ruang 3D",
      "obj": [
        "Mengidentifikasi kedudukan titik terhadap garis dan bidang dalam bangun ruang kubus.",
        "Membedakan relasi dua garis: sejajar, berpotongan, dan bersilangan (tidak sebidang).",
        "Menganalisis aksioma dan teorema kedudukan garis tegak lurus bidang."
      ],
      "hook": "Dua lintasan pesawat di udara dapat terlihat berpotongan pada layar radar 2D, namun di ruang 3D keduanya saling bersilangan pada ketinggian altitude yang berbeda secara aman.",
      "toolkit": [
        {
          "name": "Garis Bersilangan",
          "math": "$$\\text{Tidak Sejajar} \\quad \\& \\quad \\text{Tidak Berpotongan} \\quad (\\text{Berada pada bidang berbeda})$$"
        },
        {
          "name": "Garis Tegak Lurus Bidang",
          "math": "$$g \\perp \\alpha \\iff g \\perp \\text{dua garis berpotongan pada bidang } \\alpha$$"
        },
        {
          "name": "Teorema Pythagoras Ruang 3D",
          "math": "$$d^2 = p^2 + l^2 + t^2$$"
        },
        {
          "name": "Kesamaan Luas Segitiga Proyeksi",
          "math": "$$L = \\frac{1}{2} \\cdot a_1 \\cdot t_1 = \\frac{1}{2} \\cdot a_2 \\cdot t_2$$"
        }
      ],
      "examples": [
        {
          "level": "Level 1: Fondasi",
          "title": "Kedudukan Antargaris Diagonal Sisi Kubus",
          "problem": "Pada kubus $ABCD.EFGH$, tentukan kedudukan antara garis diagonal sisi $AH$ terhadap garis diagonal sisi $BG$, serta garis $AH$ terhadap garis diagonal sisi $CF$!",
          "solution": "Langkah 1: Titik $A(0,0,0), H(0,s,s) \\implies \\vec{AH} = (0,s,s)$. Titik $B(s,0,0), G(s,s,s) \\implies \\vec{BG} = (0,s,s)$. Karena vektor $\\vec{AH} = \\vec{BG}$ dan keduanya membentuk bidang persegi panjang diagonal $ABGH$, maka garis $AH$ dan garis $BG$ saling SEJAJAR ($AH \\parallel BG$).\nLangkah 2: Titik $C(s,s,0), F(s,0,s) \\implies \\vec{CF} = (0,-s,s)$. Garis $AH$ pada bidang $ADHE$ dan garis $CF$ pada bidang $BCGF$ berada pada dua bidang berbeda serta tidak berpotongan.\nLangkah 3: Uji perkalian titik (dot product): $\\vec{AH} \\cdot \\vec{CF} = (0)(0) + (s)(-s) + (s)(s) = -s^2 + s^2 = 0$.\nKesimpulan: Garis $AH$ dan $BG$ saling SEJAJAR, sedangkan garis $AH$ dan $CF$ saling BERSILANGAN TEGAK LURUS ($90^\\circ$)."
        },
        {
          "level": "Level 2: Karakteristik Rusuk & Bidang",
          "title": "Relasi Garis Tegak Lurus dan Bersilangan",
          "problem": "Pada kubus $ABCD.EFGH$, sebutkan seluruh rusuk yang tegak lurus terhadap bidang alas $ABCD$ dan seluruh rusuk yang bersilangan tegak lurus dengan rusuk $AB$!",
          "solution": "Langkah 1: Rusuk yang tegak lurus bidang alas $ABCD$ (arah vertikal sumbu Z) adalah 4 rusuk tegak kubus: $AE, BF, CG,$ dan $DH$.\nLangkah 2: Rusuk $AB$ membentang horizontal searah sumbu X. Rusuk yang tegak lurus dengannya dan tidak berpotongan (tidak sebidang) adalah 2 rusuk tegak sisi belakang ($CG, DH$) serta 2 rusuk horizontal atas arah sumbu Y ($EH, FG$).\nKesimpulan: Rusuk yang tegak lurus alas adalah $AE, BF, CG, DH$. Rusuk yang bersilangan tegak lurus dengan $AB$ adalah $CG, DH, EH,$ dan $FG$."
        },
        {
          "level": "Level 3: Hubungan Antarbidang",
          "title": "Kedudukan Dua Bidang Diagonal Kubus",
          "problem": "Pada kubus $ABCD.EFGH$, buktikan bahwa bidang diagonal $ACGE$ saling tegak lurus dengan bidang diagonal $BDHF$!",
          "solution": "Langkah 1: Bidang diagonal $ACGE$ memuat diagonal alas $AC$ dan rusuk tegak $AE$. Bidang diagonal $BDHF$ memuat diagonal alas $BD$ dan rusuk tegak $DH$.\nLangkah 2: Pada bidang alas persegi $ABCD$, diagonal sisi $AC$ berpotongan tegak lurus dengan diagonal sisi $BD$ ($AC \\perp BD$).\nLangkah 3: Karena garis $AC$ pada bidang $ACGE$ tegak lurus terhadap dua garis berpotongan di bidang $BDHF$ (yaitu $BD$ dan rusuk tegak $DH$), maka menurut teorema kedudukan bidang: bidang $ACGE$ tegak lurus terhadap bidang $BDHF$ ($ACGE \\perp BDHF$).\nKesimpulan: Terbukti bahwa bidang diagonal $ACGE$ dan $BDHF$ saling TEGAK LURUS ($90^\\circ$)."
        },
        {
          "level": "Level 4: Analitis Standar UTBK",
          "title": "Titik Tembus Diagonal Ruang pada Bidang Segitiga",
          "problem": "Pada kubus $ABCD.EFGH$ dengan panjang rusuk $6\\text{ cm}$, garis diagonal ruang $AG$ memotong bidang segitiga $BDE$ di titik $P$ dan memotong bidang segitiga $CFH$ di titik $Q$. Tentukan rasio panjang $AP : PQ : QG$ serta panjang segmen garis $PQ$!",
          "solution": "Langkah 1: Berdasarkan teorema proyeksi ortogonal, diagonal ruang $AG$ menembus tegak lurus bidang $BDE$ di $P$ dan bidang $CFH$ di $Q$.\nLangkah 2: Bidang $BDE$ dan $CFH$ membagi diagonal ruang $AG$ menjadi 3 segmen yang sama panjang, sehingga rasio $AP : PQ : QG = 1 : 1 : 1$.\nLangkah 3: Panjang diagonal ruang $AG = s\\sqrt{3} = 6\\sqrt{3}\\text{ cm}$.\nLangkah 4: Menghitung panjang segmen $PQ = \\frac{1}{3} \\times AG = \\frac{1}{3}(6\\sqrt{3}) = 2\\sqrt{3}\\text{ cm}$.\nKesimpulan: Rasio perbandingan $AP : PQ : QG = 1 : 1 : 1$ dan panjang segmen $PQ = 2\\sqrt{3}\\text{ cm}$."
        },
        {
          "level": "Level 5: HOTS Kontekstual",
          "title": "Analisis Berkas Cahaya & Garis Tembus Lantai",
          "problem": "Sebuah lampu sorot dipasang di titik $E$ pada ruangan kubus $ABCD.EFGH$ berusuk $12\\text{ meter}$ membentuk bidang berkas cahaya segitiga $EBD$. Jika kabel instalasi dibentangkan lurus dari titik sudut $A$ ke $C$, tentukan kedudukan garis kabel $AC$ terhadap bidang berkas cahaya $EBD$ dan tentukan titik tembusnya!",
          "solution": "Langkah 1: Garis kabel $AC$ terletak pada bidang lantai $ABCD$. Bidang berkas cahaya $EBD$ memotong bidang lantai $ABCD$ di sepanjang diagonal alas $BD$.\nLangkah 2: Pada persegi lantai $ABCD$, diagonal sisi $AC$ berpotongan tegak lurus dengan diagonal sisi $BD$ tepat di titik tengah lantai $M$.\nLangkah 3: Karena titik $M$ terletak pada garis $BD$ (yang merupakan batas bidang $EBD$), maka garis kabel $AC$ menembus bidang berkas cahaya $EBD$ tepat di titik $M$.\nKesimpulan: Garis kabel $AC$ MENEMBUS bidang $EBD$ tepat di titik potong diagonal lantai $M\\left(\\frac{1}{2}AC\\right)$ secara tegak lurus."
        }
      ],
      "btc": "Kelompok VNPS: Pada kubus ABCD.EFGH, buktikan bahwa garis diagonal ruang AG tegak lurus terhadap bidang diagonal BDE!",
      "summary_data": {
        "summary": [
          "Kedudukan titik, garis, dan bidang ditentukan oleh aksioma geometri Euclid 3 Dimensi.",
          "Jarak titik ke titik merupakan panjang ruas garis lurus terpendek yang menghubungkan kedua titik: $d = \\sqrt{\\Delta x^2 + \\Delta y^2 + \\Delta z^2}$."
        ],
        "islamic": "Keteraturan ruang dan dimensi tiga di alam semesta menegaskan keagungan arsitektur ciptaan Allah SWT tanpa ada cacat sedikit pun (QS. Al-Mulk: 3-4)."
      },
      "collab_cases": [
        "Pada kubus $ABCD.EFGH$ dengan rusuk $8\\text{ cm}$, tentukan kedudukan garis $AC$ terhadap $HF$, garis $BG$ terhadap bidang $ACGE$, dan bidang $AFH$ terhadap $BDG$!",
        "Pada balok $ABCD.EFGH$ ($AB=6, BC=4, CG=5$), buktikan apakah garis $AG$ berpotongan, sejajar, atau bersilangan tegak lurus dengan garis $CE$!",
        "Buktikan bahwa jika sebuah garis tegak lurus pada dua garis berpotongan di suatu bidang, maka garis tersebut tegak lurus pada seluruh bidang tersebut!",
        "Tentukan banyak pasangan garis yang saling bersilangan tegak lurus pada sebuah kubus $ABCD.EFGH$!",
        "Pada limas beraturan $T.ABCD$, tentukan garis persekutuan antara bidang $TAB$ dan bidang $TCD$ serta buktikan sifat kesejajarannya terhadap alas!"
      ]
    },
    {
      "id": "P10",
      "bab": "Bab 2: Geometri Dimensi Tiga",
      "title": "Jarak Titik ke Titik (Diagonal Sisi, Ruang, & Pythagoras 3D)",
      "obj": [
        "Menghitung panjang diagonal sisi $s\\sqrt{2}$ dan diagonal ruang $s\\sqrt{3}$ pada kubus berusuk $s$.",
        "Menerapkan teorema Pythagoras 3D $d = \\sqrt{\\Delta x^2 + \\Delta y^2 + \\Delta z^2}$.",
        "Menentukan jarak titik sudut ke titik tengah rusuk atau titik pusat bidang."
      ],
      "hook": "Berapa panjang kabel serat optik terpendek yang ditarik dari sudut lantai server ke sudut atap ruang data center?",
      "toolkit": [
        {
          "name": "Diagonal Sisi Kubus",
          "math": "$$d_s = s\\sqrt{2}$$"
        },
        {
          "name": "Diagonal Ruang Kubus",
          "math": "$$d_r = s\\sqrt{3}$$"
        },
        {
          "name": "Pythagoras 3 Dimensi Balok",
          "math": "$$d = \\sqrt{p^2 + l^2 + t^2}$$"
        },
        {
          "name": "Jarak Titik dalam Koordinat 3D",
          "math": "$$d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2 + (\\Delta z)^2}$$"
        }
      ],
      "examples": [
        {
          "problem": "Pada kubus $ABCD.EFGH$ dengan panjang rusuk $8\\text{ cm}$, tentukan panjang diagonal sisi $AC$ dan diagonal ruang $AG$!",
          "solution": "Langkah 1: Diagonal sisi $AC = \\sqrt{AB^2 + BC^2} = \\sqrt{8^2 + 8^2} = 8\\sqrt{2}\\text{ cm}$.\nLangkah 2: Diagonal ruang $AG = \\sqrt{AC^2 + CG^2} = \\sqrt{(8\\sqrt{2})^2 + 8^2} = \\sqrt{128 + 64} = \\sqrt{192} = 8\\sqrt{3}\\text{ cm}$.\nKesimpulan: Jarak titik $A$ ke $C$ adalah $8\\sqrt{2}\\text{ cm}$ dan jarak titik $A$ ke $G$ adalah $8\\sqrt{3}\\text{ cm}$."
        },
        {
          "problem": "Diketahui balok $ABCD.EFGH$ dengan ukuran panjang $AB = 8\\text{ cm}$, lebar $BC = 6\\text{ cm}$, dan tinggi $CG = 5\\text{ cm}$. Tentukan jarak titik $A$ ke titik sudut terjauh $G$!",
          "solution": "Langkah 1: Hitung panjang diagonal bidang alas $AC = \\sqrt{AB^2 + BC^2} = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10\\text{ cm}$.\nLangkah 2: Segitiga $ACG$ siku-siku di $C$. Jarak $A$ ke $G$ adalah panjang diagonal ruang balok: $AG = \\sqrt{AC^2 + CG^2} = \\sqrt{10^2 + 5^2} = \\sqrt{100 + 25} = \\sqrt{125} = 5\\sqrt{5}\\text{ cm}$.\nKesimpulan: Jarak titik $A$ ke titik $G$ adalah $5\\sqrt{5}\\text{ cm}$."
        },
        {
          "problem": "Pada kubus $ABCD.EFGH$ dengan rusuk $6\\text{ cm}$, titik $P$ terletak pada pertengahan rusuk $CG$. Tentukan jarak dari titik $A$ ke titik $P$!",
          "solution": "Langkah 1: Titik $P$ di tengah $CG \\implies CP = \\frac{1}{2} \\times 6 = 3\\text{ cm}$.\nLangkah 2: Panjang diagonal alas $AC = 6\\sqrt{2}\\text{ cm}$.\nLangkah 3: Segitiga $ACP$ siku-siku di $C$. Gunakan teorema Pythagoras 3D: $AP = \\sqrt{AC^2 + CP^2} = \\sqrt{(6\\sqrt{2})^2 + 3^2} = \\sqrt{72 + 9} = \\sqrt{81} = 9\\text{ cm}$.\nKesimpulan: Jarak titik $A$ ke titik $P$ adalah $9\\text{ cm}$."
        },
        {
          "problem": "Diberikan kubus $ABCD.EFGH$ dengan rusuk $12\\text{ cm}$. Titik $M$ adalah titik tengah rusuk $EH$ dan titik $N$ adalah titik tengah rusuk $AB$. Tentukan jarak antara titik $M$ dan titik $N$!",
          "solution": "Langkah 1: Letakkan kubus pada koordinat kartesius 3D dengan $A(0,0,0)$ sebagai titik pangkal: $A(0,0,0), B(12,0,0), E(0,0,12), H(0,12,12)$.\nLangkah 2: Koordinat titik $N$ (tengah $AB$) adalah $N(6, 0, 0)$. Koordinat titik $M$ (tengah $EH$) adalah $M(0, 6, 12)$.\nLangkah 3: Jarak $MN$ menggunakan formula jarak Euclidean 3D: $MN = \\sqrt{(0 - 6)^2 + (6 - 0)^2 + (12 - 0)^2} = \\sqrt{36 + 36 + 144} = \\sqrt{216} = 6\\sqrt{6}\\text{ cm}$.\nKesimpulan: Jarak antara titik $M$ dan $N$ adalah $6\\sqrt{6}\\text{ cm}$."
        },
        {
          "problem": "Sebuah lampu hias dipasang di tengah langit-langit aula kubus $ABCD.EFGH$ berukuran $6\\text{ m} \\times 6\\text{ m} \\times 6\\text{ m}$ (titik $T$ di tengah plafon $EFGH$). Sebuah saklar listrik dipasang di rusuk dinding $AE$ pada ketinggian $2\\text{ m}$ dari lantai ($A$). Tentukan panjang kabel lurus minimum dari saklar $S$ ke lampu $T$!",
          "solution": "Langkah 1: Jarak mendatar dari titik tengah plafon $T$ ke rusuk sudut $AE$ adalah setengah diagonal bidang atas: $d_{\\text{horizontal}} = \\sqrt{3^2 + 3^2} = 3\\sqrt{2}\\text{ m}$.\nLangkah 2: Selisih ketinggian vertikal antara plafon ($6\\text{ m}$) dan saklar ($2\\text{ m}$) adalah $\\Delta z = 6 - 2 = 4\\text{ m}$.\nLangkah 3: Hitung jarak lurus ruang $ST$ dengan Pythagoras 3D: $ST = \\sqrt{d_{\\text{horizontal}}^2 + (\\Delta z)^2} = \\sqrt{(3\\sqrt{2})^2 + 4^2} = \\sqrt{18 + 16} = \\sqrt{34}\\text{ m} \\approx 5{,}83\\text{ m}$.\nKesimpulan: Panjang kabel lurus minimum dari saklar $S$ ke lampu $T$ adalah $\\sqrt{34}\\text{ m}$."
        }
      ],
      "btc": "Kelompok VNPS: Kubus ABCD.EFGH berusuk 12 cm. Titik M di tengah rusuk AB dan N di tengah rusuk GH. Hitung jarak titik M ke titik N!",
      "summary_data": {
        "summary": [
          "Jarak titik ke garis adalah panjang ruas garis yang ditarik dari titik tegak lurus terhadap garis tujuan.",
          "Dapat dihitung dengan bantuan segitiga menggunakan Teorema Pythagoras atau Kesamaan Luas Segitiga: $L = \\frac{1}{2} a_1 t_1 = \\frac{1}{2} a_2 t_2$."
        ],
        "islamic": "Garis lurus terpendek melambangkan *Shiratal Mustaqim*, jalan lurus kebenaran yang harus senantiasa kita mohonkan dalam setiap sholat (QS. Al-Fatihah: 6)."
      },
      "collab_cases": [
        "Diberikan kubus $ABCD.EFGH$ dengan rusuk $6\\text{ cm}$. Titik $P$ terletak di tengah rusuk $CG$. Hitunglah jarak titik $A$ ke titik $P$!",
        "Pada limas beraturan $T.ABCD$ dengan rusuk alas $6\\text{ cm}$ dan rusuk tegak $5\\text{ cm}$, hitung jarak titik puncak $T$ ke titik potong diagonal alas $O$!",
        "Sebuah ruangan balok berukuran $8\\text{ m} \\times 6\\text{ m} \\times 4\\text{ m}$. Seekor semut merayap pada dinding dari $A(0,0,0)$ ke $G(8,6,4)$. Tentukan panjang lintasan terpendeknya!",
        "Pada kubus $ABCD.EFGH$ berusuk $10\\text{ cm}$, titik $M$ adalah titik tengah $AB$ dan titik $N$ adalah titik tengah $GH$. Hitunglah panjang ruas garis $MN$!",
        "Diberikan bidang empat beraturan $T.ABC$ dengan panjang seluruh rusuknya $6\\text{ cm}$. Tentukan jarak dari titik tinggi $T$ ke bidang alas $ABC$!"
      ]
    },
    {
      "id": "P11",
      "bab": "Bab 2: Geometri Dimensi Tiga",
      "title": "Jarak Titik ke Garis (Proyeksi Tegak Lurus & Luas Segitiga)",
      "obj": [
        "Memahami konsep jarak titik ke garis sebagai panjang ruas garis proyeksi tegak lurus.",
        "Menerapkan metode kesamaan luas segitiga $\\frac{1}{2} a_1 t_1 = \\frac{1}{2} a_2 t_2$.",
        "Menghitung jarak titik sudut kubus ke garis diagonal ruang atau diagonal sisi."
      ],
      "hook": "Berapa jarak terpendek dari tiang kamera studio di sudut plafon ke lintasan kabel lampu sorot panggung?",
      "toolkit": [
        {
          "name": "Kesamaan Luas Segitiga",
          "math": "$$L = \\frac{1}{2} \\cdot a_1 \\cdot t_1 = \\frac{1}{2} \\cdot a_2 \\cdot t_2 \\implies t_2 = \\frac{a_1 \\cdot t_1}{a_2}$$"
        },
        {
          "name": "Jarak Titik Sudut ke Diagonal Ruang",
          "math": "$$d = \\frac{s\\sqrt{6}}{3}$$"
        },
        {
          "name": "Teorema Pythagoras Ruang 3D",
          "math": "$$d^2 = p^2 + l^2 + t^2$$"
        },
        {
          "name": "Kesamaan Luas Segitiga Proyeksi",
          "math": "$$L = \\frac{1}{2} \\cdot a_1 \\cdot t_1 = \\frac{1}{2} \\cdot a_2 \\cdot t_2$$"
        }
      ],
      "examples": [
        {
          "problem": "Pada kubus $ABCD.EFGH$ dengan panjang rusuk $12\\text{ cm}$, tentukan jarak dari titik sudut $C$ ke garis diagonal ruang $AG$!",
          "solution": "Langkah 1: Bentuk segitiga siku-siku $ACG$ di titik $C$. Sisi alas $AC = 12\\sqrt{2}\\text{ cm}$, tinggi $CG = 12\\text{ cm}$, dan sisi miring $AG = 12\\sqrt{3}\\text{ cm}$.\nLangkah 2: Tarik garis tinggi $CC'$ tegak lurus ke $AG$. Jarak titik $C$ ke garis $AG$ adalah panjang $CC'$.\nLangkah 3: Terapkan prinsip kesamaan luas segitiga $ACG$: $AC \\times CG = AG \\times CC' \\implies 12\\sqrt{2} \\times 12 = 12\\sqrt{3} \\times CC'$.\nLangkah 4: Hitung dan rasionalkan: $CC' = \\frac{12\\sqrt{2}}{\\sqrt{3}} = \\frac{12\\sqrt{6}}{3} = 4\\sqrt{6}\\text{ cm}$.\nKesimpulan: Jarak titik $C$ ke garis $AG$ adalah $4\\sqrt{6}\\text{ cm}$."
        },
        {
          "problem": "Pada kubus $ABCD.EFGH$ dengan panjang rusuk $6\\text{ cm}$, tentukan jarak titik puncak atas $H$ ke garis diagonal bidang alas $AC$!",
          "solution": "Langkah 1: Hubungkan titik $H$ ke $A$, $C$, dan $H$. Sisi $AC = CH = AH = 6\\sqrt{2}\\text{ cm}$. Segitiga $ACH$ adalah segitiga sama sisi.\nLangkah 2: Proyeksi titik $H$ tegak lurus ke $AC$ jatuh tepat di titik tengah $AC$, sebut titik $O$. $AO = \\frac{1}{2}(6\\sqrt{2}) = 3\\sqrt{2}\\text{ cm}$.\nLangkah 3: Hitung jarak $HO$ dengan teorema Pythagoras pada segitiga siku-siku $AOH$: $HO = \\sqrt{AH^2 - AO^2} = \\sqrt{(6\\sqrt{2})^2 - (3\\sqrt{2})^2} = \\sqrt{72 - 18} = \\sqrt{54} = 3\\sqrt{6}\\text{ cm}$.\nKesimpulan: Jarak titik $H$ ke garis $AC$ adalah $3\\sqrt{6}\\text{ cm}$."
        },
        {
          "problem": "Diberikan limas beraturan $T.ABCD$ dengan alas persegi berusuk $AB = 8\\text{ cm}$ dan rusuk tegak $TA = 4\\sqrt{6}\\text{ cm}$. Tentukan jarak titik puncak $T$ ke rusuk alas $AB$!",
          "solution": "Langkah 1: Sisi tegak $TAB$ adalah segitiga sama kaki dengan $TA = TB = 4\\sqrt{6}\\text{ cm}$ dan $AB = 8\\text{ cm}$.\nLangkah 2: Proyeksi $T$ ke $AB$ jatuh di titik tengah $AB$, sebut titik $P$. $AP = \\frac{1}{2} \\times 8 = 4\\text{ cm}$.\nLangkah 3: Jarak $T$ ke garis $AB$ adalah tinggi sisi tegak $TP = \\sqrt{TA^2 - AP^2} = \\sqrt{(4\\sqrt{6})^2 - 4^2} = \\sqrt{96 - 16} = \\sqrt{80} = 4\\sqrt{5}\\text{ cm}$.\nKesimpulan: Jarak titik puncak $T$ ke rusuk alas $AB$ adalah $4\\sqrt{5}\\text{ cm}$."
        },
        {
          "problem": "Pada kubus $ABCD.EFGH$ dengan panjang rusuk $8\\text{ cm}$, titik $P$ terletak di tengah rusuk $BF$. Tentukan jarak titik $P$ ke garis diagonal ruang $AG$!",
          "solution": "Langkah 1: Hitung panjang sisi segitiga $APG$: $BP = PF = 4\\text{ cm}$. $AP = \\sqrt{8^2 + 4^2} = 4\\sqrt{5}\\text{ cm}$, $PG = \\sqrt{4^2 + 8^2} = 4\\sqrt{5}\\text{ cm}$, dan $AG = 8\\sqrt{3}\\text{ cm}$.\nLangkah 2: Karena $AP = PG = 4\\sqrt{5}\\text{ cm}$, segitiga $APG$ sama kaki dengan alas $AG$. Proyeksi $P$ jatuh di tengah $AG$ (titik $O$). $AO = 4\\sqrt{3}\\text{ cm}$.\nLangkah 3: Jarak $P$ ke $AG$ adalah $PO = \\sqrt{AP^2 - AO^2} = \\sqrt{(4\\sqrt{5})^2 - (4\\sqrt{3})^2} = \\sqrt{80 - 48} = \\sqrt{32} = 4\\sqrt{2}\\text{ cm}$.\nKesimpulan: Jarak titik $P$ ke garis diagonal ruang $AG$ adalah $4\\sqrt{2}\\text{ cm}$."
        },
        {
          "problem": "Sebuah kamera pengawas dipasang di sudut plafon kubus $ABCD.EFGH$ pada titik $E$ (rusuk $4\\text{ m}$). Sebuah tiang laser dipasang membentang dari sudut lantai $B$ ke sudut plafon $H$ (diagonal ruang $BH$). Tentukan jarak terpendek kamera $E$ ke lintasan berkas sinar laser $BH$!",
          "solution": "Langkah 1: Bentuk segitiga $EBH$: $EH = 4\\text{ m}, EB = 4\\sqrt{2}\\text{ m}, BH = 4\\sqrt{3}\\text{ m}$.\nLangkah 2: Karena $EH^2 + EB^2 = 16 + 32 = 48 = BH^2$, segitiga $EBH$ adalah segitiga siku-siku di $E$.\nLangkah 3: Jarak terpendek $EE'$ dihitung dengan kesamaan luas segitiga: $\\frac{1}{2} \\times EH \\times EB = \\frac{1}{2} \\times BH \\times EE' \\implies 4 \\times 4\\sqrt{2} = 4\\sqrt{3} \\times EE'$.\nLangkah 4: $EE' = \\frac{4\\sqrt{2}}{\\sqrt{3}} = \\frac{4\\sqrt{6}}{3}\\text{ m}$.\nKesimpulan: Jarak terpendek kamera $E$ ke garis laser $BH$ adalah $\\frac{4}{3}\\sqrt{6}\\text{ m} \\approx 3{,}27\\text{ m}$."
        }
      ],
      "btc": "Kelompok VNPS: Limas T.ABCD beraturan memiliki rusuk alas 6 cm dan rusuk tegak $3\\sqrt{6}$ cm. Tentukan jarak titik puncak T ke garis diagonal alas AC!",
      "summary_data": {
        "summary": [
          "Jarak titik ke bidang adalah panjang ruas proyeksi tegak lurus titik terhadap bidang tersebut.",
          "Pada kubus $ABCD.EFGH$, jarak titik sudut ke bidang diagonal sering kali menggunakan perbandingan $\\frac{1}{3}s\\sqrt{3}$ atau $\\frac{2}{3}s\\sqrt{3}$ diagonal ruang."
        ],
        "islamic": "Tunduk dan sujud tegak lurus kepada Allah SWT mencerminkan kerendahan hati seorang hamba di hadapan Sang Pencipta alam semesta."
      },
      "collab_cases": [
        "Diberikan kubus $ABCD.EFGH$ berusuk $6\\text{ cm}$. Hitunglah jarak titik $A$ ke diagonal ruang $BH$ menggunakan perbandingan luas segitiga $ABH$!",
        "Pada kubus $ABCD.EFGH$ berusuk $8\\text{ cm}$, titik $M$ adalah titik tengah $EH$. Tentukan jarak titik $C$ ke garis $AG$!",
        "Pada limas tegak segitiga $T.ABC$ dengan rusuk alas $6\\text{ cm}$ dan rusuk tegak $6\\sqrt{2}\\text{ cm}$, tentukan jarak titik $T$ ke garis tinggi alas $AD$!",
        "Pada kubus $ABCD.EFGH$ dengan panjang rusuk $a$, tentukan jarak titik tengah $BC$ ke garis diagonal ruang $DF$!",
        "Buktikan menggunakan vektor analitis bahwa jarak dari titik $(x_0, y_0, z_0)$ ke garis berarah $\\vec{v}$ di ruang 3D memenuhi formula $\\frac{|\\vec{AP} \\times \\vec{v}|}{|\\vec{v}|}$!"
      ]
    },
    {
      "id": "P12",
      "bab": "Bab 2: Geometri Dimensi Tiga",
      "title": "Jarak Titik ke Bidang (Teorema 1/3 & 2/3 Diagonal Ruang)",
      "obj": [
        "Memahami konsep jarak titik ke bidang sebagai panjang garis tegak lurus dari titik ke bidang.",
        "Menerapkan Teorema Proyeksi Bidang Diagonal AFH dan BDG (Teorema $\\frac{1}{3}$ dan $\\frac{2}{3}$ diagonal ruang).",
        "Menghitung jarak titik ke bidang pada limas dan kubus menggunakan metode volume limas."
      ],
      "hook": "Berapa jarak vertikal tegak lurus dari puncak kubah masjid ke bidang lantai mezanin?",
      "toolkit": [
        {
          "name": "Teorema Proyeksi Bidang AFH dari E",
          "math": "$$d(E, \\text{AFH}) = \\frac{1}{3} s\\sqrt{3}$$"
        },
        {
          "name": "Teorema Proyeksi Bidang AFH dari C",
          "math": "$$d(C, \\text{AFH}) = \\frac{2}{3} s\\sqrt{3}$$"
        },
        {
          "name": "Metode Kesamaan Volume Limas",
          "math": "$$V = \\frac{1}{3} L_{\\text{alas1}} \\cdot t_1 = \\frac{1}{3} L_{\\text{alas2}} \\cdot t_2$$"
        },
        {
          "name": "Teorema Pythagoras Ruang 3D",
          "math": "$$d^2 = p^2 + l^2 + t^2$$"
        },
        {
          "name": "Kesamaan Luas Segitiga Proyeksi",
          "math": "$$L = \\frac{1}{2} \\cdot a_1 \\cdot t_1 = \\frac{1}{2} \\cdot a_2 \\cdot t_2$$"
        }
      ],
      "examples": [
        {
          "problem": "Pada kubus $ABCD.EFGH$ dengan panjang rusuk $12\\text{ cm}$, tentukan jarak titik sudut terdekat $E$ ke bidang diagonal segitiga $AFH$!",
          "solution": "Langkah 1: Berdasarkan Teorema Proyeksi Bidang Diagonal Kubus, bidang segitiga $AFH$ memotong diagonal ruang $EC$ secara tegak lurus pada jarak $\\frac{1}{3}$ dari titik sudut $E$.\nLangkah 2: Diagonal ruang $EC = s\\sqrt{3} = 12\\sqrt{3}\\text{ cm}$.\nLangkah 3: Jarak titik $E$ ke bidang $AFH$ adalah $d = \\frac{1}{3} \\times EC = \\frac{1}{3} \\times 12\\sqrt{3} = 4\\sqrt{3}\\text{ cm}$.\nKesimpulan: Jarak titik $E$ ke bidang $AFH$ adalah $4\\sqrt{3}\\text{ cm}$."
        },
        {
          "problem": "Pada kubus $ABCD.EFGH$ dengan panjang rusuk $12\\text{ cm}$, tentukan jarak titik sudut terjauh $C$ ke bidang diagonal $AFH$!",
          "solution": "Langkah 1: Titik $C$ adalah titik sudut terjauh di seberang bidang diagonal $AFH$.\nLangkah 2: Diagonal ruang $EC$ menembus bidang $AFH$ tegak lurus, sehingga jarak titik $C$ ke bidang $AFH$ adalah $\\frac{2}{3}$ dari total panjang diagonal ruang $EC$.\nLangkah 3: Jarak $d = \\frac{2}{3} \\times 12\\sqrt{3} = 8\\sqrt{3}\\text{ cm}$.\nKesimpulan: Jarak titik $C$ ke bidang $AFH$ adalah $8\\sqrt{3}\\text{ cm}$."
        },
        {
          "problem": "Diketahui kubus $ABCD.EFGH$ dengan panjang rusuk $6\\text{ cm}$. Tentukan jarak antara dua bidang diagonal yang sejajar, yaitu bidang $AFH$ dan bidang $BDG$!",
          "solution": "Langkah 1: Diagonal ruang $EC$ menembus bidang $AFH$ di titik $P$ ($EP = \\frac{1}{3}EC$) dan menembus bidang $BDG$ di titik $Q$ ($QC = \\frac{1}{3}EC$).\nLangkah 2: Jarak antara bidang $AFH$ dan bidang $BDG$ adalah panjang segmen $PQ = \\frac{1}{3} EC$.\nLangkah 3: Dengan $EC = 6\\sqrt{3}\\text{ cm}$, diperoleh jarak $d = \\frac{1}{3} \\times 6\\sqrt{3} = 2\\sqrt{3}\\text{ cm}$.\nKesimpulan: Jarak antara bidang sejajar $AFH$ dan $BDG$ adalah $2\\sqrt{3}\\text{ cm}$."
        },
        {
          "problem": "Diberikan limas beraturan $T.ABCD$ dengan alas persegi berusuk $6\\text{ cm}$ dan tinggi limas $TO = 4\\text{ cm}$. Tentukan jarak dari titik pusat alas $O$ ke bidang sisi tegak $TBC$!",
          "solution": "Langkah 1: Tarik garis dari $O$ tegak lurus ke rusuk alas $BC$ di titik $P$. $OP = \\frac{1}{2} \\times 6 = 3\\text{ cm}$.\nLangkah 2: Pada segitiga siku-siku $TOP$, tinggi sisi tegak $TP = \\sqrt{TO^2 + OP^2} = \\sqrt{4^2 + 3^2} = \\sqrt{25} = 5\\text{ cm}$.\nLangkah 3: Jarak titik $O$ ke bidang $TBC$ adalah tinggi $OO'$ pada segitiga $TOP$.\nLangkah 4: Kesamaan luas segitiga: $OP \\times TO = TP \\times OO' \\implies 3 \\times 4 = 5 \\times OO' \\implies OO' = \\frac{12}{5} = 2{,}4\\text{ cm}$.\nKesimpulan: Jarak titik pusat alas $O$ ke bidang sisi tegak $TBC$ adalah $\\frac{12}{5}\\text{ cm} = 2{,}4\\text{ cm}$."
        },
        {
          "problem": "Pada bidang empat beraturan (tetrahedron beraturan) $T.ABC$ dengan seluruh rusuknya sama panjang $a = 6\\sqrt{2}\\text{ cm}$, tentukan jarak titik puncak $T$ ke bidang alas $ABC$!",
          "solution": "Langkah 1: Alas $ABC$ adalah segitiga sama sisi berusuk $s = 6\\sqrt{2}\\text{ cm}$. Garis tinggi alas $CD = s \\frac{\\sqrt{3}}{2} = 6\\sqrt{2} \\times \\frac{\\sqrt{3}}{2} = 3\\sqrt{6}\\text{ cm}$.\nLangkah 2: Proyeksi puncak $T$ jatuh pada titik berat segitiga alas $O$. Jarak $CO = \\frac{2}{3} CD = \\frac{2}{3}(3\\sqrt{6}) = 2\\sqrt{6}\\text{ cm}$.\nLangkah 3: Jarak $T$ ke bidang alas adalah tinggi limas $TO = \\sqrt{TC^2 - CO^2} = \\sqrt{(6\\sqrt{2})^2 - (2\\sqrt{6})^2} = \\sqrt{72 - 24} = \\sqrt{48} = 4\\sqrt{3}\\text{ cm}$.\nKesimpulan: Jarak titik puncak $T$ ke bidang alas $ABC$ adalah $4\\sqrt{3}\\text{ cm}$."
        }
      ],
      "btc": "Kelompok VNPS: Limas segiempat beraturan T.ABCD berusuk alas 8 cm dan rusuk tegak $4\\sqrt{6}$ cm. Tentukan jarak titik puncak T ke bidang alas ABCD!",
      "summary_data": {
        "summary": [
          "Sudut antara garis dan bidang adalah sudut antara garis tersebut dengan proyeksinya pada bidang.",
          "Sudut antara dua bidang diukur melalui dua garis yang saling tegak lurus terhadap garis potong persekutuan kedua bidang."
        ],
        "islamic": "Kemiringan dan sudut yang presisi dalam konstruksi mencerminkan prinsip ketelitian (Ihsan) dalam setiap karya dan amal perbuatan."
      },
      "collab_cases": [
        "Pada kubus $ABCD.EFGH$ berusuk $a = 6\\text{ cm}$, tentukan jarak titik $E$ ke bidang diagonal $BDG$ menggunakan teorema proyeksi ortogonal!",
        "Diberikan kubus $ABCD.EFGH$ berusuk $12\\text{ cm}$. Titik $P, Q, R$ masing-masing adalah titik tengah $AB, BC,$ dan $CG$. Hitunglah jarak titik $F$ ke bidang $PQR$!",
        "Buktikan bahwa bidang $AFH$ membagi diagonal ruang $CE$ menjadi dua segmen dengan perbandingan $1 : 2$ pada kubus beraturan!",
        "Pada kubus $ABCD.EFGH$ berusuk $6\\text{ cm}$, tentukan jarak antara bidang sejajar $AFH$ dan bidang $BDG$!",
        "Pada limas beraturan $T.ABCD$ dengan rusuk alas $4\\text{ cm}$ dan tinggi limas $4\\text{ cm}$, tentukan jarak titik $A$ ke bidang sisi tegak $TCD$!"
      ]
    },
    {
      "id": "P13",
      "bab": "Bab 2: Geometri Dimensi Tiga",
      "title": "Sudut Antara Garis-Bidang dan Antara Dua Bidang (Dihedral Angle)",
      "obj": [
        "Menentukan besar sudut antara garis dan bidang melalui proyeksi garis ke bidang.",
        "Menentukan besar sudut antara dua bidang (Dihedral Angle) melalui perpotongan garis tumpu tegak lurus.",
        "Menghitung nilai sinus, cosinus, dan tangen sudut dimensi tiga."
      ],
      "hook": "Sudut kemiringan panel surya terhadap atap gedung bertingkat harus diatur secara trigonometris presisi untuk memaksimalkan tangkapan sinar matahari harian.",
      "toolkit": [
        {
          "name": "Sudut Garis ke Bidang",
          "math": "$$\\theta = \\angle(g, g') \\quad (g' = \\text{proyeksi garis } g \\text{ pada bidang})$$"
        },
        {
          "name": "Sudut Antara Dua Bidang",
          "math": "$$\\theta = \\angle(t_1, t_2) \\quad (t_1, t_2 \\perp \\text{garis potong persekutuan})$$"
        },
        {
          "name": "Teorema Pythagoras Ruang 3D",
          "math": "$$d^2 = p^2 + l^2 + t^2$$"
        },
        {
          "name": "Kesamaan Luas Segitiga Proyeksi",
          "math": "$$L = \\frac{1}{2} \\cdot a_1 \\cdot t_1 = \\frac{1}{2} \\cdot a_2 \\cdot t_2$$"
        }
      ],
      "examples": [
        {
          "problem": "Pada kubus ABCD.EFGH, tentukan nilai tangen sudut antara garis diagonal ruang AG dan bidang alas ABCD!",
          "solution": "Langkah 1: Proyeksi garis $AG$ pada bidang alas $ABCD$ adalah garis diagonal sisi $AC$.\nLangkah 2: Sudut yang terbentuk adalah $\\angle GAC = \\alpha$ pada segitiga siku-siku $ACG$.\nLangkah 3: Sisi depan $= CG = s$, sisi samping $= AC = s\\sqrt{2}$.\nLangkah 4: $\\tan \\alpha = \\frac{CG}{AC} = \\frac{s}{s\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{1}{2}\\sqrt{2}$.\nKesimpulan: Nilai tangen sudut adalah $\\frac{1}{2}\\sqrt{2}$."
        },
        {
          "problem": "Pada kubus ABCD.EFGH, tentukan nilai cosinus sudut antara garis diagonal sisi AH dan garis diagonal sisi AC!",
          "solution": "Langkah 1: Hubungkan titik $C$ dan $H$ membentuk segitiga $ACH$.\nLangkah 2: Panjang sisi $AC = s\\sqrt{2}, AH = s\\sqrt{2}, CH = s\\sqrt{2}$. Segitiga $ACH$ adalah sama sisi!\nLangkah 3: Sudut antara $AH$ dan $AC$ adalah $60^\\circ$.\nLangkah 4: $\\cos 60^\\circ = \\frac{1}{2}$.\nKesimpulan: Nilai cosinus sudutnya adalah $\\frac{1}{2}$."
        },
        {
          "problem": "Tentukan nilai sinus sudut antara bidang AFH dan bidang ABCD pada kubus ABCD.EFGH!",
          "solution": "Langkah 1: Garis tinggi bidang $AFH$ dari $H$ ke $AF$ adalah $HO$. Garis proyeksi pada alas adalah $DO$.\nLangkah 2: Sudut terbentuk pada segitiga siku-siku $DOH$ dengan sudut $\\theta = \\angle HOD$.\nLangkah 3: $DH = s, DO = \\frac{1}{2}s\\sqrt{2} \\implies HO = \\frac{1}{2}s\\sqrt{6}$.\nLangkah 4: $\\sin \\theta = \\frac{DH}{HO} = \\frac{s}{\\frac{1}{2}s\\sqrt{6}} = \\frac{2}{\\sqrt{6}} = \\frac{2}{6}\\sqrt{6} = \\frac{1}{3}\\sqrt{6}$.\nKesimpulan: Nilai sinus sudut adalah $\\frac{1}{3}\\sqrt{6}$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Sudut Antara Garis-Bidang dan Antara Dua Bidang (Dihedral Angle). Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Sudut Garis ke Bidang, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Sudut Antara Dua Bidang, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Sudut Antara Garis-Bidang dan Antara Dua Bidang (Dihedral Angle), selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Sudut Garis ke Bidang.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Sudut Antara Dua Bidang.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Pada kubus ABCD.EFGH, tentukan nilai cosinus sudut antara bidang ABCD dan bidang BDG!",
      "summary_data": {
        "summary": [
          "Review komprehensif jarak titik-titik, titik-garis, titik-bidang, dan sudut dihedral.",
          "Visualisasi 3D yang tepat merupakan kunci utama kecepatan dan ketepatan penyelesaian geometri ruang."
        ],
        "islamic": "Mengasah ketajaman berpikir spasial memperluas cakrawala keimanan akan luas dan teraturnya alam semesta ciptaan Allah."
      },
      "collab_cases": [
        "Pada kubus $ABCD.EFGH$, tentukan nilai $\\cos \\alpha$ dengan $\\alpha$ adalah sudut antara diagonal ruang $AG$ dengan bidang alas $ABCD$!",
        "Pada kubus $ABCD.EFGH$, hitunglah besar sudut dihedral antara bidang $AFH$ dan bidang $BDG$!",
        "Pada limas segi empat beraturan $T.ABCD$ dengan rusuk alas $4\\text{ cm}$ dan rusuk tegak $2\\sqrt{6}\\text{ cm}$, tentukan $\\tan \\theta$ antara bidang $TAB$ dan $TCD$!",
        "Tentukan besar sudut antara garis diagonal sisi $AH$ dengan bidang diagonal $BDHF$ pada kubus beraturan!",
        "Buktikan bahwa sudut antara dua diagonal ruang pada sebuah kubus adalah $\\arccos(\\frac{1}{3}) \\approx 70{,}53^\\circ$!"
      ]
    },
    {
      "id": "P14",
      "bab": "Bab 2: Geometri Dimensi Tiga",
      "title": "Asesmen Sumatif Terpadu Dimensi Tiga & Bedah Prediksi ASTS",
      "obj": [
        "Mengevaluasi penguasaan materi geometri dimensi tiga secara komprehensif (P09 - P13).",
        "Mendiagnosis kesiapan pengerjaan soal prediksi ASTS CBT Matematika Wajib.",
        "Melatih ketepatan visualisasi spasial 3D dan kalkulasi aljabar bentuk akar."
      ],
      "hook": "Uji kesiapan komprehensif Bab 2 Geometri Dimensi Tiga sebelum memasuki Bab 3 Statistika & Analisis Data.",
      "toolkit": [
        {
          "name": "Matriks Uji Bab 2",
          "math": "$$\\text{Kedudukan (20\\%)} + \\text{Jarak Titik/Garis/Bidang (50\\%)} + \\text{Sudut Dimensi Tiga (30\\%) }$$"
        },
        {
          "name": "Kaidah Jarak Cepat",
          "math": "$$d_{\\text{titik-garis}} = \\frac{s\\sqrt{6}}{3}, \\quad d_{\\text{titik-bidang}} = \\frac{1}{3}s\\sqrt{3} \\text{ atau } \\frac{2}{3}s\\sqrt{3}$$"
        },
        {
          "name": "Teorema Pythagoras Ruang 3D",
          "math": "$$d^2 = p^2 + l^2 + t^2$$"
        },
        {
          "name": "Kesamaan Luas Segitiga Proyeksi",
          "math": "$$L = \\frac{1}{2} \\cdot a_1 \\cdot t_1 = \\frac{1}{2} \\cdot a_2 \\cdot t_2$$"
        }
      ],
      "examples": [
        {
          "problem": "Kubus ABCD.EFGH dengan rusuk 6 cm. Titik P adalah perpotongan diagonal bidang EFGH. Tentukan jarak titik P ke garis diagonal sisi BD!",
          "solution": "Langkah 1: Titik $P$ berada di pusat bidang atas $EFGH$. Proyeksi $P$ ke bidang alas adalah pusat alas $O$.\nLangkah 2: Garis $PO$ tegak lurus terhadap bidang alas $ABCD$, sehingga $PO \\perp BD$.\nLangkah 3: Jarak titik $P$ ke garis $BD$ adalah panjang ruas garis $PO = s = 6$ cm.\nKesimpulan: Jarak titik $P$ ke garis $BD$ adalah $6$ cm."
        },
        {
          "problem": "Pada limas segiempat beraturan T.ABCD, rusuk alas 8 cm dan rusuk tegak 12 cm. Tentukan jarak titik puncak T ke bidang alas ABCD!",
          "solution": "Langkah 1: Pusat bidang alas adalah $O$, perpotongan diagonal $AC$ dan $BD$.\nLangkah 2: Diagonal alas $AC = 8\\sqrt{2} \\implies AO = 4\\sqrt{2}$ cm.\nLangkah 3: Jarak $T$ ke bidang alas adalah tinggi limas $TO$.\nLangkah 4: $TO = \\sqrt{TA^2 - AO^2} = \\sqrt{12^2 - (4\\sqrt{2})^2} = \\sqrt{144 - 32} = \\sqrt{112} = 4\\sqrt{7}$ cm.\nKesimpulan: Jarak titik $T$ ke bidang alas adalah $4\\sqrt{7}$ cm."
        },
        {
          "problem": "Pada kubus ABCD.EFGH berusuk 10 cm, tentukan jarak titik H ke bidang diagonal ACGE!",
          "solution": "Langkah 1: Bidang $ACGE$ adalah bidang diagonal vertikal.\nLangkah 2: Proyeksi titik $H$ ke bidang $ACGE$ jatuh di titik tengah diagonal $EG$, sebut titik $P$.\nLangkah 3: Jarak $H$ ke $ACGE$ adalah panjang $HP = \\frac{1}{2} EG = \\frac{1}{2}(10\\sqrt{2}) = 5\\sqrt{2}$ cm.\nKesimpulan: Jarak titik $H$ ke bidang $ACGE$ adalah $5\\sqrt{2}$ cm."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Asesmen Sumatif Terpadu Dimensi Tiga & Bedah Prediksi ASTS. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Matriks Uji Bab 2, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Kaidah Jarak Cepat, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Asesmen Sumatif Terpadu Dimensi Tiga & Bedah Prediksi ASTS, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Matriks Uji Bab 2.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Kaidah Jarak Cepat.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Bedah paket 10 soal prediksi ASTS CBT Dimensi Tiga dan buktikan solusi analitisnya!",
      "summary_data": {
        "summary": [
          "Drilling simulasi asesmen sumatif tengah semester (ASTS) berbasis CBT.",
          "Manajemen waktu: 90 detik per butir soal dengan strategi eliminasi opsi salah secara sistematis."
        ],
        "islamic": "Kejujuran dan kedisiplinan waktu dalam ujian merupakan manifestasi akhlak mulia seorang penuntut ilmu sejati."
      },
      "collab_cases": [
        "Kubus $ABCD.EFGH$ memiliki rusuk $8\\text{ cm}$. Titik $K$ terletak pada perpanjangan $DA$ dengan $AK = \\frac{1}{2} DA$. Tentukan jarak titik $K$ ke bidang $BDG$!",
        "Tentukan volume irisan bidang yang melalui titik tengah $AE, BF,$ dan $CG$ pada kubus berusuk $6\\text{ cm}$!",
        "Sebuah piramida beraturan memiliki alas segi-6 dengan sisi $4\\text{ cm}$ dan tinggi $10\\text{ cm}$. Tentukan jarak dari pusat alas ke salah satu sisi tegaknya!",
        "Pada kubus $ABCD.EFGH$ berusuk $12\\text{ cm}$, bidang $\\alpha$ melalui titik $B$ dan tegak lurus pada $AG$. Tentukan bentuk dan luas penampang bidang $\\alpha$!",
        "Hitung sudut antara garis perpotongan bidang $PQR$ dengan alas kubus terhadap diagonal sisi alas!"
      ]
    },
    {
      "id": "P15",
      "bab": "Bab 3: Statistika & Analisis Data",
      "title": "Penyajian Data Berkelompok (Histogram, Poligon, & Ogive)",
      "obj": [
        "Menyusun tabel distribusi frekuensi data berkelompok dengan Aturan Sturges $k = 1 + 3{,}3 \\log N$.",
        "Menentukan batas kelas, tepi bawah ($Tb = \\text{Batas Bawah} - 0{,}5$), tepi atas ($Ta$), dan titik tengah ($x_i$).",
        "Menyajikan dan menginterpretasikan data dalam bentuk Histogram, Poligon Frekuensi, dan Ogive Kumulatif."
      ],
      "hook": "Data nilai asesmen 200 siswa kelas XII disajikan dalam bentuk grafik Histogram dan Ogive untuk menganalisis kurva kelulusan secara visual cepat.",
      "toolkit": [
        {
          "name": "Aturan Sturges (Banyak Kelas)",
          "math": "$$k = 1 + 3{,}3 \\log N, \\quad c = \\frac{\\text{Jangkauan}}{k}$$"
        },
        {
          "name": "Tepi Kelas & Titik Tengah",
          "math": "$$Tb = BB - 0,5, \\quad Ta = BA + 0,5, \\quad x_i = \\frac{BB + BA}{2}$$"
        },
        {
          "name": "Jangkauan Interkuartil dan Hamparan",
          "math": "$$QR = Q_3 - Q_1, \\quad QD = \\frac{1}{2}(Q_3 - Q_1)$$"
        },
        {
          "name": "Batas Pagar Outlier Pencilan Data",
          "math": "$$\\text{Pagar Bawah} = Q_1 - 1{,}5 QR, \\quad \\text{Pagar Atas} = Q_3 + 1{,}5 QR$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan tepi bawah ($Tb$), tepi atas ($Ta$), dan titik tengah ($x_i$) untuk kelas interval $45 - 54$!",
          "solution": "Langkah 1: Tepi bawah $Tb = 45 - 0{,}5 = 44{,}5$.\nLangkah 2: Tepi atas $Ta = 54 + 0{,}5 = 54{,}5$.\nLangkah 3: Titik tengah $x_i = \\frac{45 + 54}{2} = \\frac{99}{2} = 49{,}5$.\nKesimpulan: $Tb = 44{,}5$, $Ta = 54{,}5$, dan $x_i = 49{,}5$."
        },
        {
          "problem": "Diberikan data nilai ujian: interval 60-69 frekuensi 8, dan interval 70-79 frekuensi 14. Tentukan panjang kelas interval dan titik tengah masing-masing kelas!",
          "solution": "Langkah 1: Panjang kelas $c = Ta - Tb = 69{,}5 - 59{,}5 = 10$.\nLangkah 2: Titik tengah kelas 1 $x_1 = \\frac{60 + 69}{2} = 64{,}5$.\nLangkah 3: Titik tengah kelas 2 $x_2 = \\frac{70 + 79}{2} = 74{,}5$.\nKesimpulan: Panjang kelas adalah $10$, dengan $x_1 = 64{,}5$ dan $x_2 = 74{,}5$."
        },
        {
          "problem": "Jika sebuah data berukuran $N = 100$ siswa memiliki nilai minimum 32 dan maksimum 92, tentukan banyak kelas $k$ dan estimasi panjang kelas $c$ menggunakan aturan Sturges! (Diketahui $\\log 100 = 2$)",
          "solution": "Langkah 1: Banyak kelas $k = 1 + 3{,}3 \\log(100) = 1 + 3{,}3(2) = 1 + 6{,}6 = 7{,}6 \\approx 8$ kelas.\nLangkah 2: Jangkauan $R = 92 - 32 = 60$.\nLangkah 3: Panjang kelas $c = \\frac{R}{k} = \\frac{60}{8} = 7{,}5 \\approx 8$.\nKesimpulan: Banyak kelas $k = 8$ dan panjang kelas $c = 8$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Penyajian Data Berkelompok (Histogram, Poligon, & Ogive). Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Aturan Sturges (Banyak Kelas), definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Tepi Kelas & Titik Tengah, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Penyajian Data Berkelompok (Histogram, Poligon, & Ogive), selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Aturan Sturges (Banyak Kelas).\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Tepi Kelas & Titik Tengah.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Diberikan tabel data nilai: [50-59: 6], [60-69: 10], [70-79: 14], [80-89: 10]. Buatlah tabel frekuensi kumulatif kurang dari dan sketsakan kurva Ogive Positifnya!",
      "summary_data": {
        "summary": [
          "Data berkelompok disajikan dalam tabel distribusi frekuensi, histogram, dan poligon frekuensi.",
          "Ogive positif menggunakan frekuensi kumulatif kurang dari, sedangkan ogive negatif menggunakan frekuensi kumulatif lebih dari."
        ],
        "islamic": "Penyajian informasi yang transparan dan akurat adalah amanah penting agar tidak menimbulkan prasangka dan kesalahan keputusan (QS. Al-Hujurat: 6)."
      },
      "collab_cases": [
        "Buatlah tabel distribusi frekuensi berkelompok dari 40 data ulangan dengan rentang $R$, banyak kelas $k = 1 + 3{,}3\\log n$, dan panjang kelas $p$!",
        "Dari histogram distribusi data tinggi badan, ubahlah menjadi kurva Ogive positif dan Ogive negatif yang presisi!",
        "Distribusi data memiliki $Q_1 = 54{,}5$ dan $Q_3 = 78{,}2$. Analisislah pencakar langit (*outliers*) jika data terendah $18$ dan tertinggi $115$!",
        "Jelaskan kelebihan penyajian data menggunakan histogram dengan frekuensi relatif dibandingkan frekuensi mutlak untuk membandingkan dua populasi!",
        "Rancang histogram multimodal dari data simulasi lalu tafsirkan potensi heterogenitas sub-populasi di dalamnya!"
      ]
    },
    {
      "id": "P16",
      "bab": "Bab 3: Statistika & Analisis Data",
      "title": "Rata-rata Hitung (Mean) Data Berkelompok",
      "obj": [
        "Menghitung mean data berkelompok menggunakan metode titik tengah $\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}$.",
        "Menghitung mean menggunakan metode rataan sementara $\\bar{x} = x_s + \\frac{\\sum f_i d_i}{\\sum f_i}$.",
        "Menghitung mean menggunakan metode pengkodean (Coding) $\\bar{x} = x_s + \\left(\\frac{\\sum f_i u_i}{\\sum f_i}\\right) c$."
      ],
      "hook": "Bagaimana para peneliti menghitung rata-rata pendapatan per kapita jutaan penduduk dari tabel interval sensus BPS secara cepat dan presisi?",
      "toolkit": [
        {
          "name": "Metode Titik Tengah",
          "math": "$$\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}$$"
        },
        {
          "name": "Metode Rataan Sementara",
          "math": "$$\\bar{x} = x_s + \\frac{\\sum f_i d_i}{\\sum f_i} \\quad (d_i = x_i - x_s)$$"
        },
        {
          "name": "Metode Coding",
          "math": "$$\\bar{x} = x_s + \\left(\\frac{\\sum f_i u_i}{\\sum f_i}\\right) c$$"
        },
        {
          "name": "Jangkauan Interkuartil dan Hamparan",
          "math": "$$QR = Q_3 - Q_1, \\quad QD = \\frac{1}{2}(Q_3 - Q_1)$$"
        },
        {
          "name": "Batas Pagar Outlier Pencilan Data",
          "math": "$$\\text{Pagar Bawah} = Q_1 - 1{,}5 QR, \\quad \\text{Pagar Atas} = Q_3 + 1{,}5 QR$$"
        }
      ],
      "examples": [
        {
          "problem": "Diberikan data nilai siswa: [50-59: 5], [60-69: 10], [70-79: 15], [80-89: 10]. Total frekuensi $N = 40$. Hitung nilai rata-rata hitung (mean) data tersebut menggunakan metode titik tengah!",
          "solution": "Langkah 1: Titik tengah ($x_i$): $54{,}5; 64{,}5; 74{,}5; 84{,}5$.\nLangkah 2: Perkalian $f_i x_i$:\n- $5 \\times 54{,}5 = 272{,}5$\n- $10 \\times 64{,}5 = 645{,}0$\n- $15 \\times 74{,}5 = 1.117{,}5$\n- $10 \\times 84{,}5 = 845{,}0$\nLangkah 3: $\\sum f_i x_i = 272{,}5 + 645{,}0 + 1.117{,}5 + 845{,}0 = 2.880$.\nLangkah 4: $\\bar{x} = \\frac{2.880}{40} = 72$.\nKesimpulan: Nilai rata-rata hitung data adalah $72$."
        },
        {
          "problem": "Dari data nilai di atas, hitung kembali nilai mean menggunakan metode rataan sementara dengan memilih $x_s = 74{,}5$!",
          "solution": "Langkah 1: Deviasi $d_i = x_i - 74{,}5$:\n- $54{,}5 - 74{,}5 = -20 \\implies f_1 d_1 = 5(-20) = -100$\n- $64{,}5 - 74{,}5 = -10 \\implies f_2 d_2 = 10(-10) = -100$\n- $74{,}5 - 74{,}5 = 0 \\implies f_3 d_3 = 15(0) = 0$\n- $84{,}5 - 74{,}5 = +10 \\implies f_4 d_4 = 10(10) = +100$\nLangkah 2: $\\sum f_i d_i = -100 - 100 + 0 + 100 = -100$.\nLangkah 3: $\\bar{x} = 74{,}5 + \\frac{-100}{40} = 74{,}5 - 2{,}5 = 72$.\nKesimpulan: Nilai mean adalah $72$ (identik dan terbukti konsisten)."
        },
        {
          "problem": "Hitung mean data tersebut menggunakan metode Coding dengan $u_i = \\dots, -2, -1, 0, 1$ dan panjang kelas $c = 10$!",
          "solution": "Langkah 1: $\\sum f_i u_i = 5(-2) + 10(-1) + 15(0) + 10(1) = -10 - 10 + 0 + 10 = -10$.\nLangkah 2: $\\bar{x} = 74{,}5 + \\left(\\frac{-10}{40}\\right) 10 = 74{,}5 - 2{,}5 = 72$.\nKesimpulan: Nilai mean adalah $72$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Rata-rata Hitung (Mean) Data Berkelompok. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Metode Titik Tengah, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Metode Rataan Sementara, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Rata-rata Hitung (Mean) Data Berkelompok, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Metode Titik Tengah.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Metode Rataan Sementara.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Diberikan tabel distribusi frekuensi dengan satu frekuensi tak diketahui bernilai $k$. Jika mean data adalah 68, tentukan nilai $k$!",
      "summary_data": {
        "summary": [
          "Mean Data Berkelompok: $\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}$.",
          "Metode Rataan Sementara: $\\bar{x} = \\bar{x}_s + \\frac{\\sum f_i d_i}{\\sum f_i}$.",
          "Metode Pengkodean (Coding): $\\bar{x} = \\bar{x}_s + \\left(\\frac{\\sum f_i u_i}{\\sum f_i}\\right) \\cdot c$."
        ],
        "islamic": "Rata-rata mengajarkan pentingnya sikap adil dan proporsional dalam membagi hak serta kewajiban di tengah masyarakat."
      },
      "collab_cases": [
        "Tentukan nilai mean data berkelompok $[40-49: 4], [50-59: 6], [60-69: 10], [70-79: 14], [80-89: 4], [90-99: 2]$ dengan rata-rata sementara ($x_s$)!",
        "Jika nilai rata-rata tabel distribusi dengan frekuensi kelas ketiga berupa $p$ bernilai $67{,}5$, tentukan nilai frekuensi $p$ yang tepat!",
        "Buktikan bahwa $\\sum f_i (x_i - \\bar{x}) = 0$ pada data berkelompok dan jelaskan maknanya sebagai titik pusat massa distribusi data!",
        "Tentukan rata-rata gabungan jika kelas XII-A (30 siswa) rata-ratanya $75$, XII-B (35 siswa) $80$, dan XII-C (35 siswa) $82$!",
        "Analisislah dampak penambahan data ekstrem sebesar $150$ terhadap nilai rata-rata dibandingkan median pada sampel berukuran $N=50$!"
      ]
    },
    {
      "id": "P17",
      "bab": "Bab 3: Statistika & Analisis Data",
      "title": "Median dan Modus Data Berkelompok",
      "obj": [
        "Menentukan letak kelas median $\\frac{1}{2}N$ dan menghitung nilai Median menggunakan rumus interpolasi linier.",
        "Menentukan kelas modus (frekuensi tertinggi) dan menghitung nilai Modus data berkelompok.",
        "Menganalisis kemiringan kurva (Skewness) dari perbandingan Mean, Median, dan Modus."
      ],
      "hook": "Mengapa dalam laporan ekonomi nilai Median sering lebih dipercaya dibanding Mean untuk menggambarkan pendapatan riil masyarakat? Karena Median tidak terpengaruh oleh pencilan ekstrim!",
      "toolkit": [
        {
          "name": "Median Data Berkelompok",
          "math": "$$Me = Tb + \\left( \\frac{\\frac{1}{2}N - F_k}{f_{me}} \\right) c$$"
        },
        {
          "name": "Modus Data Berkelompok",
          "math": "$$Mo = Tb + \\left( \\frac{d_1}{d_1 + d_2} \\right) c$$"
        },
        {
          "name": "Jangkauan Interkuartil dan Hamparan",
          "math": "$$QR = Q_3 - Q_1, \\quad QD = \\frac{1}{2}(Q_3 - Q_1)$$"
        },
        {
          "name": "Batas Pagar Outlier Pencilan Data",
          "math": "$$\\text{Pagar Bawah} = Q_1 - 1{,}5 QR, \\quad \\text{Pagar Atas} = Q_3 + 1{,}5 QR$$"
        }
      ],
      "examples": [
        {
          "problem": "Diberikan tabel distribusi frekuensi berikut: [40-49: 4], [50-59: 6], [60-69: 12], [70-79: 10], [80-89: 8]. Total frekuensi $N = 40$. Tentukan nilai Median ($Me$) data tersebut!",
          "solution": "Langkah 1: Letak kelas median $= \\frac{1}{2}(40) = 20$. Frekuensi kumulatif: $4, 10, 22 \\implies$ Kelas Median pada interval $60 - 69$.\nLangkah 2: $Tb = 59{,}5$, $c = 10$, $F_k = 4 + 6 = 10$, $f_{me} = 12$.\nLangkah 3: $Me = 59{,}5 + \\left(\\frac{20 - 10}{12}\\right) 10 = 59{,}5 + \\left(\\frac{10}{12}\\right) 10 = 59{,}5 + 8{,}33 = 67{,}83$.\nKesimpulan: Nilai median data adalah $67{,}83$."
        },
        {
          "problem": "Dari tabel distribusi frekuensi yang sama, tentukan nilai Modus ($Mo$) data tersebut!",
          "solution": "Langkah 1: Frekuensi tertinggi adalah $12$ pada kelas interval $60 - 69$.\nLangkah 2: $Tb = 59{,}5$, $c = 10$.\nLangkah 3: Selisih frekuensi sebelum $d_1 = 12 - 6 = 6$, selisih setelah $d_2 = 12 - 10 = 2$.\nLangkah 4: $Mo = 59{,}5 + \\left(\\frac{6}{6 + 2}\\right) 10 = 59{,}5 + \\left(\\frac{6}{8}\\right) 10 = 59{,}5 + 7{,}5 = 67{,}0$.\nKesimpulan: Nilai modus data adalah $67{,}0$."
        },
        {
          "problem": "Jika sebuah data berkelompok memiliki Modus = 65, Median = 67, dan Mean = 70, tentukan arah kemiringan kurva distribusinya!",
          "solution": "Langkah 1: Perbandingan nilai: $\\text{Modus} < \\text{Median} < \\text{Mean}$ ($65 < 67 < 70$).\nLangkah 2: Karena nilai mean berada paling kanan tertarik oleh data bernilai tinggi, kurva memiliki ekor ke kanan.\nKesimpulan: Kurva berdistribusi miring ke kanan (Positively Skewed)."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Median dan Modus Data Berkelompok. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Median Data Berkelompok, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Modus Data Berkelompok, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Median dan Modus Data Berkelompok, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Median Data Berkelompok.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Modus Data Berkelompok.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Diberikan histogram nilai matematika. Tentukan nilai median dan modus langsung dari visualisasi grafik batang histogram!",
      "summary_data": {
        "summary": [
          "Median Data Berkelompok: $Me = Tb + \\left(\\frac{\\frac{1}{2}n - f_k}{f_{me}}\\right) \\cdot c$.",
          "Modus Data Berkelompok: $Mo = Tb + \\left(\\frac{d_1}{d_1 + d_2}\\right) \\cdot c$ dengan $d_1 = f_{mo} - f_{prev}$ dan $d_2 = f_{mo} - f_{next}$."
        ],
        "islamic": "Nilai tengah (wasathiyah) adalah identitas umat Islam yang moderat, tidak condong ke ekstrem kanan maupun ekstrem kiri (QS. Al-Baqarah: 143)."
      },
      "collab_cases": [
        "Tentukan median ($Me$) data berkelompok jika tepi bawah kelas median $Tb = 60{,}5$, frekuensi kumulatif $f_k = 12$, frekuensi kelas $f_m = 16$, dan $p = 10$!",
        "Hitunglah modus ($Mo$) data penjualan jika selisih frekuensi kelas sebelum $d_1 = 6$ dan sesudah $d_2 = 4$ pada kelas $[71-80]$!",
        "Sebuah distribusi gaji memiliki Modus $= 4{,}5\\text{ juta}$ dan Mean $= 7{,}2\\text{ juta}$. Analisislah kemiringan kurva (*skewness*) dan implikasinya!",
        "Buktikan secara geometris rumus interpolasi linier untuk menentukan nilai median pada kurva poligon frekuensi kumulatif!",
        "Tentukan kondisi di mana nilai Mean = Median = Modus pada kurva distribusi simetris Gauss!"
      ]
    },
    {
      "id": "P18",
      "bab": "Bab 3: Statistika & Analisis Data",
      "title": "Ukuran Letak Data (Kuartil Q1-Q3, Desil, Jangkauan Interkuartil)",
      "obj": [
        "Menghitung Kuartil Bawah ($Q_1$), Kuartil Tengah ($Q_2$), dan Kuartil Atas ($Q_3$) data berkelompok.",
        "Menghitung Jangkauan Interkuartil ($QR = Q_3 - Q_1$) dan Simpangan Kuartil ($Q_d = \\frac{1}{2}QR$).",
        "Mendeteksi adanya nilai pencilan ekstrim (Outlier) menggunakan batas Pagar Bawah dan Pagar Atas."
      ],
      "hook": "Perguruan Tinggi Negeri menggunakan persentil dan kuartil atas ($Q_3$) untuk menentukan passing grade kelulusan program studi favorit.",
      "toolkit": [
        {
          "name": "Kuartil ke-i Data Berkelompok",
          "math": "$$Q_i = Tb + \\left( \\frac{\\frac{i}{4}N - F_k}{f_{Q_i}} \\right) c \\quad (i = 1, 2, 3)$$"
        },
        {
          "name": "Jangkauan Interkuartil",
          "math": "$$QR = Q_3 - Q_1, \\quad Q_d = \\frac{1}{2} QR$$"
        },
        {
          "name": "Batas Pagar Pencilan",
          "math": "$$\\text{Pagar Bawah} = Q_1 - 1{,}5(QR), \\quad \\text{Pagar Atas} = Q_3 + 1{,}5(QR)$$"
        },
        {
          "name": "Jangkauan Interkuartil dan Hamparan",
          "math": "$$QR = Q_3 - Q_1, \\quad QD = \\frac{1}{2}(Q_3 - Q_1)$$"
        },
        {
          "name": "Batas Pagar Outlier Pencilan Data",
          "math": "$$\\text{Pagar Bawah} = Q_1 - 1{,}5 QR, \\quad \\text{Pagar Atas} = Q_3 + 1{,}5 QR$$"
        }
      ],
      "examples": [
        {
          "problem": "Diberikan tabel distribusi frekuensi: [40-49: 4], [50-59: 6], [60-69: 12], [70-79: 10], [80-89: 8]. Total $N = 40$. Tentukan nilai Kuartil Atas ($Q_3$)!",
          "solution": "Langkah 1: Letak kelas $Q_3 = \\frac{3}{4}(40) = 30$. Frekuensi kumulatif: $4, 10, 22, 32 \\implies$ Kelas $Q_3$ di interval $70 - 79$.\nLangkah 2: $Tb = 69{,}5$, $c = 10$, $F_k = 22$, $f_{Q_3} = 10$.\nLangkah 3: $Q_3 = 69{,}5 + \\left(\\frac{30 - 22}{10}\\right) 10 = 69{,}5 + 8 = 77{,}5$.\nKesimpulan: Nilai kuartil atas ($Q_3$) adalah $77{,}5$."
        },
        {
          "problem": "Jika dari suatu data diketahui $Q_1 = 58$ dan $Q_3 = 82$, hitunglah jangkauan interkuartil ($QR$), simpangan kuartil ($Q_d$), dan batas pagar pencilan atas!",
          "solution": "Langkah 1: $QR = Q_3 - Q_1 = 82 - 58 = 24$.\nLangkah 2: $Q_d = \\frac{1}{2}(24) = 12$.\nLangkah 3: $\\text{Pagar Atas} = Q_3 + 1{,}5(QR) = 82 + 1{,}5(24) = 82 + 36 = 118$.\nKesimpulan: $QR = 24$, $Q_d = 12$, dan batas pagar atas adalah $118$."
        },
        {
          "problem": "Tentukan letak interval kelas untuk Desil ke-7 ($D_7$) pada data dengan ukuran $N = 60$!",
          "solution": "Langkah 1: Letak $D_7 = \\frac{7}{10} \\times 60 = 42$.\nLangkah 2: Data ke-42 terletak pada kelas interval yang memuat frekuensi kumulatif mencapai minimal 42.\nKesimpulan: Kelas $D_7$ berada pada interval yang memuat data urutan ke-$42$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Ukuran Letak Data (Kuartil Q1-Q3, Desil, Jangkauan Interkuartil). Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Kuartil ke-i Data Berkelompok, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Jangkauan Interkuartil, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Ukuran Letak Data (Kuartil Q1-Q3, Desil, Jangkauan Interkuartil), selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Kuartil ke-i Data Berkelompok.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Jangkauan Interkuartil.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Hitung nilai $Q_1$ dan $Q_3$ dari tabel distribusi frekuensi nilai matematika 60 siswa dan tentukan apakah ada nilai siswa yang termasuk pencilan!",
      "summary_data": {
        "summary": [
          "Kuartil $Q_i = Tb + \\left(\\frac{\\frac{i}{4}n - f_k}{f_{Q_i}}\\right) \\cdot c$ untuk $i = 1, 2, 3$.",
          "Jangkauan Interkuartil $QR = Q_3 - Q_1$ dan Simpangan Kuartil $Q_d = \\frac{1}{2}QR$.",
          "Pagar Luar dan Pagar Dalam untuk mendeteksi data pencilan (outlier)."
        ],
        "islamic": "Membedakan strata dan posisi data secara tepat mengingatkan pentingnya menempatkan manusia sesuai porsi dan keahliannya dengan adil."
      },
      "collab_cases": [
        "Tentukan nilai Kuartil Atas ($Q_3$) dan Jangkauan Semi-Interkuartil ($Q_d = \\frac{1}{2}(Q_3 - Q_1)$) dari tabel nilai 100 siswa!",
        "Hitunglah nilai Desil ke-7 ($D_7$) dan Persentil ke-85 ($P_{85}$) dari data waktu tunggu layanan nasabah bank!",
        "Bandingkan akurasi Box-and-Whisker Plot dibandingkan Kurva Ogive dalam mendeteksi kesenjangan nilai kelas!",
        "Jika seluruh nilai ujian dinaikkan $10\\%$ kemudian ditambah $5$, tentukan kuartil atas ($Q_3$) yang baru jika $Q_3$ awal adalah $70$!",
        "Tentukan persentil ke-90 ($P_{90}$) dari data waktu respon server dan interpretasikan maknanya dalam Service Level Agreement (SLA) IT!"
      ]
    },
    {
      "id": "P19",
      "bab": "Bab 3: Statistika & Analisis Data",
      "title": "Ukuran Penyebaran Data (Simpangan Rata-rata, Varians, Simpangan Baku)",
      "obj": [
        "Menghitung Simpangan Rata-rata ($SR = \\frac{\\sum f_i |x_i - \\bar{x}|}{N}$).",
        "Menghitung Varians ($S^2$) dan Simpangan Baku ($S$) data tunggal dan berkelompok.",
        "Menginterpretasikan nilai standar $Z$-Score untuk standardisasi performa nilai siswa."
      ],
      "hook": "Dua kelas memiliki rata-rata nilai sama yaitu 80, namun kelas A nilainya seragam ($S=3$) sementara kelas B sangat heterogen ($S=15$). Simpangan baku mengungkap variabilitas tersebut!",
      "toolkit": [
        {
          "name": "Simpangan Rata-rata",
          "math": "$$SR = \\frac{\\sum f_i |x_i - \\bar{x}|}{N}$$"
        },
        {
          "name": "Varians & Simpangan Baku",
          "math": "$$S^2 = \\frac{\\sum f_i (x_i - \\bar{x})^2}{N}, \\quad S = \\sqrt{S^2}$$"
        },
        {
          "name": "Standar Z-Score",
          "math": "$$Z = \\frac{x - \\bar{x}}{S}$$"
        },
        {
          "name": "Jangkauan Interkuartil dan Hamparan",
          "math": "$$QR = Q_3 - Q_1, \\quad QD = \\frac{1}{2}(Q_3 - Q_1)$$"
        },
        {
          "name": "Batas Pagar Outlier Pencilan Data",
          "math": "$$\\text{Pagar Bawah} = Q_1 - 1{,}5 QR, \\quad \\text{Pagar Atas} = Q_3 + 1{,}5 QR$$"
        }
      ],
      "examples": [
        {
          "problem": "Diberikan data tunggal: 4, 6, 8, 10, 12. Hitung mean, varians ($S^2$), dan simpangan baku ($S$) data tersebut!",
          "solution": "Langkah 1: Mean $\\bar{x} = \\frac{4 + 6 + 8 + 10 + 12}{5} = \\frac{40}{5} = 8$.\nLangkah 2: Selisih kuadrat $(x_i - \\bar{x})^2$:\n$(4-8)^2 = 16$, $(6-8)^2 = 4$, $(8-8)^2 = 0$, $(10-8)^2 = 4$, $(12-8)^2 = 16$.\nLangkah 3: Jumlah $= 16 + 4 + 0 + 4 + 16 = 40$.\nLangkah 4: Varians $S^2 = \\frac{40}{5} = 8$. Simpangan baku $S = \\sqrt{8} = 2\\sqrt{2} \\approx 2{,}83$.\nKesimpulan: Varians $S^2 = 8$ dan simpangan baku $S = 2\\sqrt{2}$."
        },
        {
          "problem": "Hitung simpangan rata-rata ($SR$) dari data: 4, 6, 8, 10, 12!",
          "solution": "Langkah 1: Mean $\\bar{x} = 8$.\nLangkah 2: Selisih mutlak $|x_i - 8|: |4-8|=4, |6-8|=2, 0, 2, 4$.\nLangkah 3: Jumlah $= 4 + 2 + 0 + 2 + 4 = 12$.\nLangkah 4: $SR = \\frac{12}{5} = 2{,}4$.\nKesimpulan: Simpangan rata-rata data adalah $2{,}4$."
        },
        {
          "problem": "Siswa A memperoleh nilai ujian Matematika 85 pada kelas dengan $\\bar{x} = 75$ dan $S = 5$. Siswa B memperoleh nilai 90 pada kelas dengan $\\bar{x} = 82$ dan $S = 8$. Siswa manakah yang memiliki posisi prestasi relatif lebih unggul di kelasnya?",
          "solution": "Langkah 1: $Z_A = \\frac{85 - 75}{5} = \\frac{10}{5} = +2{,}0$.\nLangkah 2: $Z_B = \\frac{90 - 82}{8} = \\frac{8}{8} = +1{,}0$.\nLangkah 3: Karena $Z_A > Z_B$ ($2{,}0 > 1{,}0$), siswa A berada $2$ simpangan baku di atas rata-rata kelasnya.\nKesimpulan: Prestasi relatif Siswa A lebih unggul dibandingkan Siswa B."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Ukuran Penyebaran Data (Simpangan Rata-rata, Varians, Simpangan Baku). Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Simpangan Rata-rata, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Varians & Simpangan Baku, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Ukuran Penyebaran Data (Simpangan Rata-rata, Varians, Simpangan Baku), selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Simpangan Rata-rata.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Varians & Simpangan Baku.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Diberikan sekumpulan data dengan rata-rata 60 dan simpangan baku 8. Jika setiap data dikalikan 2 lalu dikurangi 10, tentukan rata-rata dan simpangan baku data baru!",
      "summary_data": {
        "summary": [
          "Varians Sampel: $S^2 = \\frac{\\sum f_i (x_i - \\bar{x})^2}{n - 1}$.",
          "Simpangan Baku: $S = \\sqrt{S^2}$.",
          "Koefisien Variasi $KV = \\frac{S}{\\bar{x}} \\times 100\\%$ untuk mengukur homogenitas data."
        ],
        "islamic": "Keragaman (variansi) adalah sunnatullah di muka bumi; saling melengkapi dan menyatukan potensi akan melahirkan kekuatan umat."
      },
      "collab_cases": [
        "Hitunglah Simpangan Rata-rata ($SR$) dan Varians ($S^2$) dari data frekuensi berbobot dengan $\\sum f_i = 50$ dan $\\sum f_i (x_i - \\bar{x})^2 = 1.250$!",
        "Tentukan Standar Deviasi ($S$) data tes potensi akademik dan tentukan rentang nilai normal $\\bar{x} \\pm 1S$!",
        "Jika seluruh data dikalikan $2$ kemudian ditambah $5$, buktikan perubahan yang terjadi pada rata-rata, varians, dan simpangan baku data baru!",
        "Tentukan koefisien variasi ($KV = \\frac{S}{\\bar{x}} \\times 100\\%$) untuk membandingkan tingkat konsistensi dua kelompok belajar!",
        "Buktikan bahwa varians dari sekumpulan data tidak pernah bernilai negatif ($S^2 \\ge 0$) dan bernilai nol jika dan hanya jika semua data bernilai sama!"
      ]
    },
    {
      "id": "P20",
      "bab": "Bab 3: Statistika & Analisis Data",
      "title": "Analisis Data Bivariat (Scatter Plot, Korelasi Pearson, & Garis Regresi)",
      "obj": [
        "Membuat diagram pencar (Scatter Plot) untuk pasangan data bivariat $(x, y)$.",
        "Menghitung dan menginterpretasikan koefisien korelasi Pearson $r$ ($-1 \\le r \\le 1$).",
        "Menentukan persamaan garis regresi linier $\\hat{y} = a + bx$ dan membuat prediksi matematis."
      ],
      "hook": "Apakah durasi jam belajar mandiri per hari ($x$) berkorelasi linier positif dengan skor UTBK-SNBT ($y$)? Garis regresi memprediksi skor masa depan siswa!",
      "toolkit": [
        {
          "name": "Persamaan Garis Regresi Linier",
          "math": "$$\\hat{y} = a + bx, \\quad b = \\frac{N \\sum xy - \\sum x \\sum y}{N \\sum x^2 - (\\sum x)^2}, \\quad a = \\bar{y} - b\\bar{x}$$"
        },
        {
          "name": "Koefisien Korelasi Pearson",
          "math": "$$r = \\frac{N \\sum xy - \\sum x \\sum y}{\\sqrt{[N \\sum x^2 - (\\sum x)^2][N \\sum y^2 - (\\sum y)^2]}}$$"
        },
        {
          "name": "Jangkauan Interkuartil dan Hamparan",
          "math": "$$QR = Q_3 - Q_1, \\quad QD = \\frac{1}{2}(Q_3 - Q_1)$$"
        },
        {
          "name": "Batas Pagar Outlier Pencilan Data",
          "math": "$$\\text{Pagar Bawah} = Q_1 - 1{,}5 QR, \\quad \\text{Pagar Atas} = Q_3 + 1{,}5 QR$$"
        }
      ],
      "examples": [
        {
          "problem": "Jika persamaan garis regresi antara waktu belajar ($x$ jam) dan nilai ujian ($y$) adalah $\\hat{y} = 45 + 5{,}5x$, prediksikan nilai seorang siswa yang belajar selama 6 jam per hari!",
          "solution": "Langkah 1: Substitusi $x = 6$ ke dalam persamaan regresi linier.\nLangkah 2: $\\hat{y} = 45 + 5{,}5(6) = 45 + 33 = 78$.\nKesimpulan: Prediksi nilai siswa yang belajar 6 jam adalah $78$."
        },
        {
          "problem": "Dari analisis bivariat dua variabel diperoleh koefisien korelasi Pearson $r = +0{,}88$. Jelaskan arti dan interpretasi nilai tersebut!",
          "solution": "Langkah 1: Tanda positif ($+$) menunjukkan korelasi searah: semakin tinggi variabel $x$, semakin tinggi pula variabel $y$.\nLangkah 2: Nilai $|r| = 0{,}88$ berada pada rentang $0{,}70 \\le r \\le 1{,}00$, yang menunjukkan hubungan korelasi linier yang SANGAT KUAT.\nKesimpulan: Terdapat hubungan linier positif yang sangat kuat antara variabel $x$ dan $y$."
        },
        {
          "problem": "Diberikan ringkasan data $N = 5$: $\\sum x = 15, \\sum y = 40, \\sum x^2 = 55, \\sum xy = 130$. Tentukan gradien garis regresi $b$ dan konstanta $a$!",
          "solution": "Langkah 1: $b = \\frac{5(130) - (15)(40)}{5(55) - (15)^2} = \\frac{650 - 600}{275 - 225} = \\frac{50}{50} = 1{,}0$.\nLangkah 2: $\\bar{x} = \\frac{15}{5} = 3$, $\\bar{y} = \\frac{40}{5} = 8$.\nLangkah 3: $a = \\bar{y} - b\\bar{x} = 8 - 1{,}0(3) = 5$.\nLangkah 4: Persamaan regresi $\\hat{y} = 5 + x$.\nKesimpulan: Gradien $b = 1{,}0$ dan persamaan garis regresinya adalah $\\hat{y} = 5 + x$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Analisis Data Bivariat (Scatter Plot, Korelasi Pearson, & Garis Regresi). Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Persamaan Garis Regresi Linier, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Koefisien Korelasi Pearson, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Analisis Data Bivariat (Scatter Plot, Korelasi Pearson, & Garis Regresi), selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Persamaan Garis Regresi Linier.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Koefisien Korelasi Pearson.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Diberikan pasangan data waktu latihan (x) vs jumlah kesalahan (y). Tentukan diagram pencar, arah korelasi, dan garis regresinya!",
      "summary_data": {
        "summary": [
          "Diagram Pencar (Scatter Plot) memvisualisasikan tren hubungan antara dua variabel bivariat $(X, Y)$.",
          "Persamaan Garis Regresi Linier: $\\hat{y} = a + bx$ dengan kemiringan $b = \\frac{n\\sum xy - \\sum x\\sum y}{n\\sum x^2 - (\\sum x)^2}$.",
          "Koefisien Korelasi Pearson $r$ mengukur kekuatan hubungan linier ($-1 \\le r \\le 1$)."
        ],
        "islamic": "Hubungan sebab-akibat (kausalitas) dalam statistika bivariat mempertegas bahwa setiap ikhtiar manusia berkorelasi nyata dengan hasil yang akan dituai."
      },
      "collab_cases": [
        "Diberikan 8 pasangan data $(X, Y)$ jam belajar dan skor ujian: $\\sum X = 48, \\sum Y = 600, \\sum X^2 = 320, \\sum Y^2 = 46.000, \\sum XY = 3.800$. Hitunglah koefisien korelasi Pearson $r$!",
        "Berdasarkan data di atas, tentukan persamaan garis regresi linier $\\hat{Y} = a + bX$ dan tafsirkan makna konstanta $a$ dan gradien $b$!",
        "Hitung koefisien determinasi $R^2$ dan prediksikan skor siswa yang belajar selama 7,5 jam!",
        "Jelaskan perbedaan antara korelasi positif, korelasi negatif, dan korelasi spasial semu (*spurious correlation*) disertai contoh nyata!",
        "Buktikan bahwa koefisien korelasi Pearson selalu berada pada rentang $-1 \\le r \\le 1$ menggunakan pertidaksamaan Cauchy-Schwarz!"
      ]
    },
    {
      "id": "P21",
      "bab": "Bab 3: Statistika & Analisis Data",
      "title": "Asesmen Sumatif Terpadu Statistika & Simulasi ASAS CBT",
      "obj": [
        "Mengevaluasi penguasaan materi statistika univariat dan bivariat secara menyeluruh (P15 - P20).",
        "Melakukan simulasi ujian Asesmen Sumatif Akhir Semester (ASAS CBT / PAS) Matematika Wajib.",
        "Grand Review integratif seluruh 3 Bab Matematika Wajib Kelas XII Semester 1."
      ],
      "hook": "Puncak asesmen akhir semester 1 Matematika Wajib Kelas XII: Menguji keunggulan komputasi kombinatorika, dimensi tiga, dan analisis statistika.",
      "toolkit": [
        {
          "name": "Matriks Distribusi Soal ASAS CBT",
          "math": "$$\\text{Bab 1: Peluang (35\\%)} + \\text{Bab 2: Dimensi Tiga (35\\%)} + \\text{Bab 3: Statistika (30\\%) }$$"
        },
        {
          "name": "Rumus Inti ASAS",
          "math": "$$P(A) = \\frac{n(A)}{n(S)}, \\quad d_r = s\\sqrt{3}, \\quad Me = Tb + \\left(\\frac{\\frac{1}{2}N - F_k}{f_{me}}\\right)c, \\quad \\hat{y} = a + bx$$"
        },
        {
          "name": "Jangkauan Interkuartil dan Hamparan",
          "math": "$$QR = Q_3 - Q_1, \\quad QD = \\frac{1}{2}(Q_3 - Q_1)$$"
        },
        {
          "name": "Batas Pagar Outlier Pencilan Data",
          "math": "$$\\text{Pagar Bawah} = Q_1 - 1{,}5 QR, \\quad \\text{Pagar Atas} = Q_3 + 1{,}5 QR$$"
        }
      ],
      "examples": [
        {
          "problem": "Jika jangkauan data adalah 30 dan data dikelompokkan menjadi 6 kelas, berapakah panjang kelas intervalnya?",
          "solution": "Langkah 1: $c = \\frac{\\text{Jangkauan}}{k} = \\frac{30}{6} = 5$.\nKesimpulan: Panjang kelas interval adalah $5$."
        },
        {
          "problem": "Tentukan median dari tabel berikut jika kelas median terletak pada interval 70-79 dengan $Tb = 69,5, c = 10, N = 50, F_k = 18,$ dan $f_{me} = 14$!",
          "solution": "Langkah 1: $Me = 69{,}5 + \\left(\\frac{\\frac{1}{2}(50) - 18}{14}\\right) 10 = 69{,}5 + \\left(\\frac{25 - 18}{14}\\right) 10 = 69{,}5 + \\left(\\frac{7}{14}\\right) 10$.\nLangkah 2: $69{,}5 + 0{,}5(10) = 69{,}5 + 5 = 74{,}5$.\nKesimpulan: Nilai median adalah $74{,}5$."
        },
        {
          "problem": "Diberikan data nilai ujian dengan rata-rata 75 dan simpangan baku 6. Jika seorang siswa memperoleh nilai 87, tentukan skor standar Z-score siswa tersebut!",
          "solution": "Langkah 1: $Z = \\frac{x - \\bar{x}}{S} = \\frac{87 - 75}{6} = \\frac{12}{6} = +2{,}0$.\nKesimpulan: Nilai Z-score siswa tersebut adalah $+2{,}0$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Asesmen Sumatif Terpadu Statistika & Simulasi ASAS CBT. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Matriks Distribusi Soal ASAS CBT, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Rumus Inti ASAS, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Asesmen Sumatif Terpadu Statistika & Simulasi ASAS CBT, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Matriks Distribusi Soal ASAS CBT.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Rumus Inti ASAS.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Grand Final Simulasi ASAS CBT! Bedah dan selesaikan paket komprehensif 10 soal prediksi ujian akhir semester!",
      "summary_data": {
        "summary": [
          "Mastery review seluruh domain statistika deskriptif, ukuran pemusatan, penyebaran, dan analisis bivariat.",
          "Kesiapan optimal menghadapi Asesmen Sumatif Akhir Semester (ASAS) dan ASAJ CBT Nasional."
        ],
        "islamic": "Menuntaskan pembelajaran dengan kesungguhan dan doa adalah wujud tawakkal paripurna seorang penuntut ilmu."
      },
      "collab_cases": [
        "Diberikan data bivariat pengeluaran iklan ($X$ juta) dan omzet ($Y$ ratus juta). Ujilah apakah terdapat korelasi linier positif yang signifikan!",
        "Sebuah perusahaan menargetkan omzet $1{,}5\\text{ miliar}$. Gunakan model $\\hat{Y} = 12 + 3{,}4X$ untuk mengestimasi anggaran iklan optimal!",
        "Evaluasilah keterbatasan regresi linier dalam konteks ekstrapolasi data di luar rentang sampel pengamatan!",
        "Tentukan residu regresi $e_i = y_i - \\hat{y}_i$ untuk setiap titik data dan uji apakah jumlah residunya bernilai nol ($\\sum e_i = 0$)!",
        "Rancang studi kasus optimasi bivariat terapan dalam dunia sains data dan presentasikan kesimpulan model prediksi terbaik!"
      ]
    }
  ],
  "minat": [
    {
      "id": "P01",
      "bab": "Bab 1: Geometri Analitik Lingkaran",
      "title": "Persamaan Lingkaran Pusat O(0,0)",
      "obj": [
        "Menentukan persamaan lingkaran yang berpusat di titik asal $O(0,0)$ dengan jari-jari $r$: $x^2 + y^2 = r^2$.",
        "Menghitung jari-jari lingkaran dari titik yang dilalui atau dari jarak ke garis singgung.",
        "Menyelesaikan masalah kontekstual radius jangkauan sinyal radar dan pemancar BTS."
      ],
      "hook": "Sistem radar pelacak bandara memancarkan gelombang mendeteksi pesawat dalam radius $r$ km dari titik pusat kontrol $O(0,0)$ secara radial seragam.",
      "toolkit": [
        {
          "name": "Bentuk Baku Pusat O(0,0)",
          "math": "$$x^2 + y^2 = r^2$$"
        },
        {
          "name": "Jari-Jari dari Garis Singgung",
          "math": "$$r = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}} = \\frac{|C|}{\\sqrt{A^2 + B^2}}$$"
        },
        {
          "name": "Bentuk Kuadrat Sempurna Lingkaran",
          "math": "$$(x - a)^2 + (y - b)^2 = r^2$$"
        },
        {
          "name": "Jarak Titik Pusat ke Garis Singgung",
          "math": "$$d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}} = r$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan persamaan lingkaran yang berpusat di titik asal $O(0,0)$ dan melalui titik $A(-6, 8)$!",
          "solution": "Langkah 1: Menggunakan rumus Bentuk Baku Pusat O(0,0), analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nLangkah 1 (Jari-jari): $r^2 = (-6)^2 + 8^2 = 36 + 64 = 100$.\nLangkah 2 (Substitusi): $x^2 + y^2 = r^2 \\implies x^2 + y^2 = 100$.\nKesimpulan: Persamaan lingkaran adalah $x^2 + y^2 = 100$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Sebuah lingkaran berpusat di $O(0,0)$ menyinggung garis lurus $3x - 4y + 20 = 0$. Tentukan persamaan lingkarannya!",
          "solution": "Langkah 1: Menggunakan rumus Bentuk Baku Pusat O(0,0), analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nLangkah 1 (Jarak Pusat ke Garis): $r = \\frac{|3(0) - 4(0) + 20|}{\\sqrt{3^2 + (-4)^2}} = \\frac{20}{\\sqrt{25}} = \\frac{20}{5} = 4$.\nLangkah 2 (Persamaan): $r^2 = 4^2 = 16 \\implies x^2 + y^2 = 16$.\nKesimpulan: Persamaan lingkaran adalah $x^2 + y^2 = 16$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Tentukan persamaan lingkaran konsentris (sepusat) dengan $x^2 + y^2 = 36$ yang memiliki luas daerah 4 kali luas lingkaran tersebut!",
          "solution": "Langkah 1: Lingkaran awal memiliki $r_1^2 = 36 \\implies L_1 = 36\\pi$.\nLangkah 2: Luas baru $L_2 = 4 \\times 36\\pi = 144\\pi \\implies r_2^2 = 144$.\nLangkah 3: Karena konsentris di $O(0,0)$, persamaannya adalah $x^2 + y^2 = 144$.\nKesimpulan: Persamaan lingkaran baru adalah $x^2 + y^2 = 144$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Persamaan Lingkaran Pusat O(0,0). Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Bentuk Baku Pusat O(0,0), definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Jari-Jari dari Garis Singgung, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Persamaan Lingkaran Pusat O(0,0), selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Bentuk Baku Pusat O(0,0).\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Jari-Jari dari Garis Singgung.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Diberikan titik $A(0,0)$ dan $B(6,8)$. Tentukan persamaan lingkaran yang berpusat di $O(0,0)$ dan membagi ruas garis $AB$ menjadi dua bagian sama panjang!",
      "summary_data": {
        "summary": [
          "Bentuk baku persamaan lingkaran pusat $O(0,0)$ dan jari-jari $r$: $x^2 + y^2 = r^2$.",
          "Jika lingkaran melalui titik $(x_1, y_1)$, maka jari-jari kuadrat diperoleh dari $r^2 = x_1^2 + y_1^2$.",
          "Jarak titik pusat ke garis singgung $ax + by + c = 0$ adalah $r = \\frac{|c|}{\\sqrt{a^2 + b^2}}$."
        ],
        "islamic": "Pusat lingkaran $O(0,0)$ melambangkan tauhid: satu titik pusat ketaatan kepada Allah SWT yang menjadi poros seluruh perputaran aktivitas kehidupan seorang mukmin."
      },
      "collab_cases": [
        "Tentukan persamaan lingkaran yang berpusat di $O(0,0)$ dan melalui titik potong garis $3x - 4y = 12$ dengan sumbu-$Y$!",
        "Sebuah lingkaran berpusat di $O(0,0)$ menyinggung garis $4x + 3y - 25 = 0$. Tentukan jari-jari $r$ dan persamaan lingkarannya!",
        "Diberikan $A(-4, 0)$ dan $B(4, 0)$. Tentukan tempat kedudukan titik $P(x,y)$ sedemikian hingga $PA^2 + PB^2 = 50$ dan buktikan itu lingkaran!",
        "Tentukan persamaan lingkaran konsentris dengan $x^2 + y^2 = 9$ yang luas daerahnya 4 kali lebih besar!",
        "Buktikan bahwa luas juring lingkaran berpusat di asal dengan sudut pusat $\\theta$ radian adalah $\\frac{1}{2} r^2 \\theta$!"
      ]
    },
    {
      "id": "P02",
      "bab": "Bab 1: Geometri Analitik Lingkaran",
      "title": "Persamaan Lingkaran Pusat P(a,b)",
      "obj": [
        "Menentukan persamaan lingkaran pusat $P(a,b)$ berjari-jari $r$: $(x - a)^2 + (y - b)^2 = r^2$.",
        "Menganalisis kondisi lingkaran yang menyinggung sumbu koordinat ($r = |a|$ atau $r = |b|$).",
        "Menentukan persamaan lingkaran jika diketahui koordinat titik-titik ujung diameternya."
      ],
      "hook": "Desain bundaran lalu lintas kota mandiri berpusat di koordinat GPS $P(a,b)$ harus disesuaikan dengan batas sempadan jalan arteri di sekitarnya.",
      "toolkit": [
        {
          "name": "Bentuk Baku Pusat P(a,b)",
          "math": "$$(x - a)^2 + (y - b)^2 = r^2$$"
        },
        {
          "name": "Menyinggung Sumbu-X",
          "math": "$$r = |b| \\implies (x - a)^2 + (y - b)^2 = b^2$$"
        },
        {
          "name": "Menyinggung Sumbu-Y",
          "math": "$$r = |a| \\implies (x - a)^2 + (y - b)^2 = a^2$$"
        },
        {
          "name": "Bentuk Kuadrat Sempurna Lingkaran",
          "math": "$$(x - a)^2 + (y - b)^2 = r^2$$"
        },
        {
          "name": "Jarak Titik Pusat ke Garis Singgung",
          "math": "$$d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}} = r$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan persamaan lingkaran yang berpusat di titik $P(2, -3)$ dan memiliki jari-jari $r = 5$!",
          "solution": "Langkah 1: Bentuk baku $(x - a)^2 + (y - b)^2 = r^2$.\nLangkah 2: $(a,b) = (2, -3)$ dan $r = 5 \\implies (x - 2)^2 + (y - (-3))^2 = 5^2$.\nLangkah 3: $(x - 2)^2 + (y + 3)^2 = 25$.\nKesimpulan: Persamaan lingkaran adalah $(x - 2)^2 + (y + 3)^2 = 25$."
        },
        {
          "problem": "Tentukan persamaan lingkaran yang berpusat di $P(-1, 4)$ dan melalui titik $A(3, 1)$!",
          "solution": "Langkah 1: Menggunakan rumus Bentuk Baku Pusat P(a,b), analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nLangkah 1 (Jari-jari): $r^2 = (3 - (-1))^2 + (1 - 4)^2 = 4^2 + (-3)^2 = 16 + 9 = 25$.\nLangkah 2 (Persamaan): $(x - (-1))^2 + (y - 4)^2 = 25 \\implies (x + 1)^2 + (y - 4)^2 = 25$.\nKesimpulan: Persamaan lingkaran adalah $(x + 1)^2 + (y - 4)^2 = 25$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Sebuah lingkaran berpusat di $P(3, -2)$ menyinggung garis horizontal $y = 4$. Tentukan persamaan lingkaran tersebut!",
          "solution": "Langkah 1: Jarak pusat $(3, -2)$ ke garis $y = 4$ adalah $r = |4 - (-2)| = 6$.\nLangkah 2: $r^2 = 6^2 = 36$.\nLangkah 3: Persamaan lingkaran: $(x - 3)^2 + (y + 2)^2 = 36$.\nKesimpulan: Persamaan lingkaran adalah $(x - 3)^2 + (y + 2)^2 = 36$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Persamaan Lingkaran Pusat P(a,b). Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Bentuk Baku Pusat P(a,b), definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Menyinggung Sumbu-X, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Persamaan Lingkaran Pusat P(a,b), selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Bentuk Baku Pusat P(a,b).\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Menyinggung Sumbu-X.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Ruas garis $AB$ dengan $A(-2, 3)$ dan $B(4, -5)$ adalah diameter sebuah lingkaran. Tentukan titik pusat, panjang jari-jari, dan persamaan lingkaran tersebut!",
      "summary_data": {
        "summary": [
          "Persamaan lingkaran pusat $P(a, b)$ dan jari-jari $r$: $(x - a)^2 + (y - b)^2 = r^2$.",
          "Jika menyinggung sumbu-x maka $r = |b|$; jika menyinggung sumbu-y maka $r = |a|$.",
          "Jika menyinggung garis $Ax + By + C = 0$, jari-jari $r = \\frac{|Aa + Bb + C|}{\\sqrt{A^2 + B^2}}$."
        ],
        "islamic": "Pergeseran titik pusat mengajarkan bahwa di mana pun seorang mukmin berada, nilai dan prinsip keimanan harus tetap terpelihara dengan radius kebaikan yang sama."
      },
      "collab_cases": [
        "Tentukan persamaan lingkaran dengan pusat $P(3, -2)$ yang menyinggung sumbu-$X$ secara ortogonal!",
        "Tentukan persamaan lingkaran dengan diameter ruas garis yang menghubungkan $A(-2, 5)$ dan $B(4, -3)$!",
        "Lingkaran berpusat di $P(a, b)$ kuadran I menyinggung garis $x = 2$, sumbu-$Y$, dan $y = 6$. Tentukan nilai $a, b,$ dan persamaannya!",
        "Tentukan persamaan lingkaran yang berpusat di $P(-1, 4)$ dan menyinggung garis $3x - 4y + 4 = 0$!",
        "Buktikan bahwa jarak dari titik $(x_1, y_1)$ ke pusat lingkaran $(x-a)^2 + (y-b)^2 = r^2$ menentukan kedudukan titik secara definitif!"
      ]
    },
    {
      "id": "P03",
      "bab": "Bab 1: Geometri Analitik Lingkaran",
      "title": "Bentuk Umum Persamaan Lingkaran",
      "obj": [
        "Mengubah bentuk baku lingkaran ke bentuk umum $x^2 + y^2 + Ax + By + C = 0$.",
        "Menentukan titik pusat $P(-\\frac{A}{2}, -\\frac{B}{2})$ dan jari-jari $r = \\sqrt{\\frac{A^2}{4} + \\frac{B^2}{4} - C}$.",
        "Menyelesaikan masalah parameter koefisien lingkaran melalui metode kuadrat sempurna."
      ],
      "hook": "Dalam komputasi grafis dan game engine, representasi kuadrat umum $x^2 + y^2 + Ax + By + C = 0$ mempermudah kalkulasi matriks perpotongan poligon.",
      "toolkit": [
        {
          "name": "Bentuk Umum Lingkaran",
          "math": "$$x^2 + y^2 + Ax + By + C = 0$$"
        },
        {
          "name": "Titik Pusat",
          "math": "$$P\\left(-\\frac{A}{2}, -\\frac{B}{2}\\right)$$"
        },
        {
          "name": "Jari-Jari Lingkaran",
          "math": "$$r = \\sqrt{\\left(\\frac{A}{2}\\right)^2 + \\left(\\frac{B}{2}\\right)^2 - C}$$"
        },
        {
          "name": "Bentuk Kuadrat Sempurna Lingkaran",
          "math": "$$(x - a)^2 + (y - b)^2 = r^2$$"
        },
        {
          "name": "Jarak Titik Pusat ke Garis Singgung",
          "math": "$$d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}} = r$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan titik pusat dan jari-jari lingkaran $x^2 + y^2 - 6x + 8y - 11 = 0$!",
          "solution": "Langkah 1: $A = -6, B = 8, C = -11$.\nLangkah 2: Pusat $P(-\\frac{-6}{2}, -\\frac{8}{2}) = P(3, -4)$.\nLangkah 3: Jari-jari $r = \\sqrt{3^2 + (-4)^2 - (-11)} = \\sqrt{9 + 16 + 11} = \\sqrt{36} = 6$.\nKesimpulan: Titik pusat adalah $(3, -4)$ dan jari-jari $r = 6$."
        },
        {
          "problem": "Ubah persamaan lingkaran $(x + 2)^2 + (y - 5)^2 = 9$ ke dalam bentuk umum!",
          "solution": "Langkah 1: Jabarkan $(x^2 + 4x + 4) + (y^2 - 10y + 25) = 9$.\nLangkah 2: Gabungkan suku-suku konstan: $x^2 + y^2 + 4x - 10y + (4 + 25 - 9) = 0$.\nLangkah 3: $x^2 + y^2 + 4x - 10y + 20 = 0$.\nKesimpulan: Bentuk umumnya adalah $x^2 + y^2 + 4x - 10y + 20 = 0$."
        },
        {
          "problem": "Tentukan nilai konstanta $k$ agar persamaan $x^2 + y^2 + 4x - 6y + k = 0$ memiliki jari-jari $r = 5$!",
          "solution": "Langkah 1: Pusat $P(-\\frac{4}{2}, -\\frac{-6}{2}) = P(-2, 3)$.\nLangkah 2: $r = \\sqrt{(-2)^2 + 3^2 - k} = 5 \\implies \\sqrt{4 + 9 - k} = 5$.\nLangkah 3: $13 - k = 25 \\implies k = 13 - 25 = -12$.\nKesimpulan: Nilai $k$ yang memenuhi adalah $k = -12$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Bentuk Umum Persamaan Lingkaran. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Bentuk Umum Lingkaran, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Titik Pusat, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Bentuk Umum Persamaan Lingkaran, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Bentuk Umum Lingkaran.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Titik Pusat.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Diberikan persamaan $2x^2 + 2y^2 - 8x + 12y - 6 = 0$. Ubah koefisien utama menjadi 1, lalu tentukan pusat dan jari-jari lingkaran tersebut!",
      "summary_data": {
        "summary": [
          "Bentuk Umum Lingkaran: $x^2 + y^2 + Ax + By + C = 0$.",
          "Titik pusat: $P\\left(-\\frac{1}{2}A, -\\frac{1}{2}B\\right)$.",
          "Jari-jari: $r = \\sqrt{\\frac{1}{4}A^2 + \\frac{1}{4}B^2 - C}$ dengan syarat $\\frac{1}{4}A^2 + \\frac{1}{4}B^2 - C > 0$."
        ],
        "islamic": "Menemukan titik pusat dari bentuk umum yang tersebar melambangkan proses menemukan kembali jati diri dan nilai luhur ketakwaan dari hiruk-pikuk kehidupan duniawi."
      },
      "collab_cases": [
        "Ubahlah bentuk umum $x^2 + y^2 - 6x + 8y - 11 = 0$ ke bentuk standar $(x-a)^2 + (y-b)^2 = r^2$, tentukan pusat dan jari-jarinya!",
        "Tentukan nilai $m$ agar persamaan $x^2 + y^2 + 4x - 6y + m = 0$ merepresentasikan lingkaran dengan jari-jari $r = 5$!",
        "Tentukan persamaan lingkaran yang melalui tiga titik koordinat $A(0,0), B(4,0),$ dan $C(0,6)$!",
        "Tentukan nilai $A$ dan $B$ jika lingkaran $x^2 + y^2 + Ax + By - 12 = 0$ berpusat di titik $(2, -3)$!",
        "Buktikan bahwa bentuk $Ax^2 + Ay^2 + Dx + Ey + F = 0$ merepresentasikan lingkaran sejati jika dan hanya jika $D^2 + E^2 - 4AF > 0$!"
      ]
    },
    {
      "id": "P04",
      "bab": "Bab 1: Geometri Analitik Lingkaran",
      "title": "Kedudukan Titik Terhadap Lingkaran (Uji Kuasa)",
      "obj": [
        "Menentukan nilai kuasa titik $K(x_1, y_1)$ terhadap lingkaran.",
        "Mengklasifikasikan posisi titik: di dalam lingkaran ($K < 0$), pada lingkaran ($K = 0$), atau di luar lingkaran ($K > 0$).",
        "Menghitung jarak terpendek dan terjauh dari suatu titik ke busur lingkaran."
      ],
      "hook": "Apakah kapal patroli penjaga pantai berada di dalam zona bahaya terumbu karang yang dipetakan sebagai lingkaran pembatas?",
      "toolkit": [
        {
          "name": "Nilai Kuasa Titik K",
          "math": "$$K = (x_1 - a)^2 + (y_1 - b)^2 - r^2$$"
        },
        {
          "name": "Kriteria Posisi Titik",
          "math": "$$K < 0 \\implies \\text{Di Dalam}, \\quad K = 0 \\implies \\text{Pada Busur}, \\quad K > 0 \\implies \\text{Di Luar}$$"
        },
        {
          "name": "Jarak Terdekat & Terjauh Titik Luar",
          "math": "$$d_{\\min} = d - r, \\quad d_{\\max} = d + r \\quad (d = \\text{jarak ke pusat})$$"
        },
        {
          "name": "Bentuk Kuadrat Sempurna Lingkaran",
          "math": "$$(x - a)^2 + (y - b)^2 = r^2$$"
        },
        {
          "name": "Jarak Titik Pusat ke Garis Singgung",
          "math": "$$d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}} = r$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan kedudukan titik $A(4, -2)$ terhadap lingkaran $x^2 + y^2 - 4x + 6y - 12 = 0$!",
          "solution": "Langkah 1: Substitusi $(x, y) = (4, -2)$ ke ruas kiri persamaan.\nLangkah 2: $K = 4^2 + (-2)^2 - 4(4) + 6(-2) - 12 = 16 + 4 - 16 - 12 - 12 = -20$.\nLangkah 3: Karena $K = -20 < 0$, titik $A$ berada di DALAM lingkaran.\nKesimpulan: Titik $A(4, -2)$ terletak di dalam lingkaran."
        },
        {
          "problem": "Tentukan batas nilai $k$ agar titik $P(k, 3)$ terletak di luar lingkaran $x^2 + y^2 = 25$!",
          "solution": "Langkah 1: Syarat titik di luar lingkaran: $K > 0 \\implies k^2 + 3^2 - 25 > 0$.\nLangkah 2: $k^2 + 9 - 25 > 0 \\implies k^2 - 16 > 0$.\nLangkah 3: $(k - 4)(k + 4) > 0 \\implies k < -4 \\text{ atau } k > 4$.\nKesimpulan: Batas nilai $k$ adalah $k < -4$ atau $k > 4$."
        },
        {
          "problem": "Tentukan jarak terdekat dari titik $T(7, 9)$ ke busur lingkaran $x^2 + y^2 - 2x - 4y - 20 = 0$!",
          "solution": "Langkah 1: Pusat $P(1, 2)$, $r = \\sqrt{1^2 + 2^2 - (-20)} = \\sqrt{25} = 5$.\nLangkah 2: Jarak $T(7,9)$ ke pusat $P(1,2)$ adalah $d = \\sqrt{(7-1)^2 + (9-2)^2} = \\sqrt{6^2 + 7^2} = \\sqrt{36 + 49} = \\sqrt{85} \\approx 9{,}22$.\nLangkah 3: Jarak terdekat $d_{\\min} = d - r = \\sqrt{85} - 5$.\nKesimpulan: Jarak terdekat adalah $(\\sqrt{85} - 5)$ satuan."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Kedudukan Titik Terhadap Lingkaran (Uji Kuasa). Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Nilai Kuasa Titik K, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Kriteria Posisi Titik, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Kedudukan Titik Terhadap Lingkaran (Uji Kuasa), selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Nilai Kuasa Titik K.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Kriteria Posisi Titik.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Diberikan titik $P(1, 1)$ dan lingkaran $x^2 + y^2 - 6x - 8y + 21 = 0$. Ujilah posisi titik $P$, lalu hitung panjang garis singgung dari $P$ ke lingkaran tersebut!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Kedudukan Titik Terhadap Lingkaran (Uji Kuasa).",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran Kedudukan Titik Terhadap Lingkaran (Uji Kuasa) menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Selidikilah kedudukan titik $K(5, -2), L(1, 3),$ dan $M(4, 4)$ terhadap lingkaran $L \\equiv (x-2)^2 + (y+1)^2 = 25$!",
        "Tentukan batas-batas nilai $k$ agar titik $P(k, 2)$ terletak di DALAM lingkaran $x^2 + y^2 - 4x + 6y - 12 = 0$!",
        "Hitunglah panjang ruas garis singgung yang ditarik dari titik $T(8, 6)$ ke lingkaran $x^2 + y^2 - 2x - 4y - 20 = 0$!",
        "Tentukan kuasa titik $P(4, -1)$ terhadap lingkaran $x^2 + y^2 - 6x + 2y + 6 = 0$ dan berikan tafsiran geometrisnya!",
        "Tentukan persamaan garis kuasa (*radical axis*) dari dua lingkaran $L_1 \\equiv x^2 + y^2 - 4 = 0$ dan $L_2 \\equiv x^2 + y^2 - 4x - 2y + 1 = 0$!"
      ]
    },
    {
      "id": "P05",
      "bab": "Bab 1: Geometri Analitik Lingkaran",
      "title": "Kedudukan Garis Terhadap Lingkaran (Uji Diskriminan)",
      "obj": [
        "Menentukan kedudukan garis $y = mx + c$ terhadap lingkaran melalui substitusi aljabar.",
        "Menggunakan nilai diskriminan $D = b^2 - 4ac$ untuk mengidentifikasi kondisi memotong ($D > 0$), menyinggung ($D = 0$), atau tidak memotong ($D < 0$).",
        "Menentukan nilai parameter konstanta agar garis menyinggung lingkaran."
      ],
      "hook": "Lintasan orbit satelit atau lintasan komet dimodelkan sebagai garis lurus yang dapat memotong, menyinggung, atau meleset bebas dari atmosfer planet.",
      "toolkit": [
        {
          "name": "Substitusi Garis ke Lingkaran",
          "math": "$$y = mx + c \\implies x^2 + (mx+c)^2 + Ax + B(mx+c) + C = 0$$"
        },
        {
          "name": "Kriteria Diskriminan D",
          "math": "$$D > 0 \\implies \\text{2 Titik Potong}, \\quad D = 0 \\implies \\text{Menyinggung (1 Titik)}, \\quad D < 0 \\implies \\text{Saling Lepas}$$"
        },
        {
          "name": "Bentuk Kuadrat Sempurna Lingkaran",
          "math": "$$(x - a)^2 + (y - b)^2 = r^2$$"
        },
        {
          "name": "Jarak Titik Pusat ke Garis Singgung",
          "math": "$$d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}} = r$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan kedudukan garis $y = 2x + 1$ terhadap lingkaran $x^2 + y^2 = 25$!",
          "solution": "Langkah 1: Substitusi $y = 2x + 1$ ke $x^2 + y^2 = 25 \\implies x^2 + (2x+1)^2 = 25$.\nLangkah 2: $x^2 + 4x^2 + 4x + 1 - 25 = 0 \\implies 5x^2 + 4x - 24 = 0$.\nLangkah 3: $D = b^2 - 4ac = 4^2 - 4(5)(-24) = 16 + 480 = 496 > 0$.\nKesimpulan: Karena $D > 0$, garis memotong lingkaran di 2 titik berbeda."
        },
        {
          "problem": "Tentukan nilai konstanta $k$ positif agar garis $y = x + k$ menyinggung lingkaran $x^2 + y^2 = 18$!",
          "solution": "Langkah 1: Substitusi: $x^2 + (x+k)^2 = 18 \\implies 2x^2 + 2kx + (k^2 - 18) = 0$.\nLangkah 2: Syarat menyinggung $D = 0 \\implies (2k)^2 - 4(2)(k^2 - 18) = 0$.\nLangkah 3: $4k^2 - 8k^2 + 144 = 0 \\implies -4k^2 = -144 \\implies k^2 = 36 \\implies k = 6$.\nKesimpulan: Nilai konstanta positif adalah $k = 6$."
        },
        {
          "problem": "Tentukan koordinat titik-titik potong antara garis $x + y = 7$ dan lingkaran $x^2 + y^2 = 25$!",
          "solution": "Langkah 1: $y = 7 - x \\implies x^2 + (7 - x)^2 = 25 \\implies x^2 + x^2 - 14x + 49 - 25 = 0$.\nLangkah 2: $2x^2 - 14x + 24 = 0 \\implies x^2 - 7x + 12 = 0 \\implies (x - 3)(x - 4) = 0$.\nLangkah 3: Untuk $x = 3 \\implies y = 4 \\to (3, 4)$; Untuk $x = 4 \\implies y = 3 \\to (4, 3)$.\nKesimpulan: Koordinat titik potongnya adalah $(3, 4)$ dan $(4, 3)$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Kedudukan Garis Terhadap Lingkaran (Uji Diskriminan). Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Substitusi Garis ke Lingkaran, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Kriteria Diskriminan D, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Kedudukan Garis Terhadap Lingkaran (Uji Diskriminan), selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Substitusi Garis ke Lingkaran.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Kriteria Diskriminan D.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Tentukan batas-batas nilai $m$ agar garis $y = mx + 5$ tidak memotong maupun menyinggung lingkaran $x^2 + y^2 = 9$ ($D < 0$)!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Kedudukan Garis Terhadap Lingkaran (Uji Diskriminan).",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran Kedudukan Garis Terhadap Lingkaran (Uji Diskriminan) menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Tentukan kedudukan garis $y = 2x + 1$ terhadap lingkaran $x^2 + y^2 = 5$ dengan menghitung nilai diskriminan $D$!",
        "Tentukan batas nilai $m$ agar garis $y = mx + 2$ memotong lingkaran $x^2 + y^2 - 4x - 6 = 0$ di dua titik berbeda!",
        "Tentukan titik potong garis $x + y = 4$ dengan lingkaran $x^2 + y^2 - 2x - 4y = 0$ dan hitung panjang tali busur persekutuannya!",
        "Tentukan nilai $c$ agar garis $3x + 4y + c = 0$ menyinggung lingkaran $x^2 + y^2 = 25$ ($D = 0$)!",
        "Buktikan secara aljabar bahwa tali busur terpanjang pada lingkaran adalah diameter lingkaran yang melalui titik pusatnya!"
      ]
    },
    {
      "id": "P06",
      "bab": "Bab 1: Geometri Analitik Lingkaran",
      "title": "PGSL Melalui Titik Pada Lingkaran (Metode Bagi Adil)",
      "obj": [
        "Memahami prinsip metode Bagi Adil (pemisahan variabel) untuk menentukan PGSL.",
        "Menentukan persamaan garis singgung pada lingkaran pusat $O(0,0)$ di titik singgung $(x_1, y_1)$.",
        "Menentukan persamaan garis singgung pada lingkaran pusat $P(a,b)$ dan bentuk umum."
      ],
      "hook": "Garis singgung lingkaran selalu tegak lurus sempurna ($90^\\circ$) terhadap jari-jari yang menghubungkan pusat ke titik kontak singgung.",
      "toolkit": [
        {
          "name": "Bagi Adil Pusat O(0,0)",
          "math": "$$x_1 x + y_1 y = r^2$$"
        },
        {
          "name": "Bagi Adil Pusat P(a,b)",
          "math": "$$(x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2$$"
        },
        {
          "name": "Bagi Adil Bentuk Umum",
          "math": "$$x_1 x + y_1 y + \\frac{A}{2}(x + x_1) + \\frac{B}{2}(y + y_1) + C = 0$$"
        },
        {
          "name": "Bentuk Kuadrat Sempurna Lingkaran",
          "math": "$$(x - a)^2 + (y - b)^2 = r^2$$"
        },
        {
          "name": "Jarak Titik Pusat ke Garis Singgung",
          "math": "$$d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}} = r$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan persamaan garis singgung lingkaran $x^2 + y^2 = 25$ di titik $T(3, -4)$!",
          "solution": "Langkah 1: Uji titik $3^2 + (-4)^2 = 25$ (titik pada lingkaran).\nLangkah 2: Gunakan rumus Bagi Adil $x_1 x + y_1 y = r^2$.\nLangkah 3: $(3)x + (-4)y = 25 \\implies 3x - 4y = 25$.\nKesimpulan: Persamaan garis singgung adalah $3x - 4y = 25$."
        },
        {
          "problem": "Tentukan persamaan garis singgung lingkaran $(x - 1)^2 + (y + 2)^2 = 25$ di titik $A(4, 2)$!",
          "solution": "Langkah 1: Uji $(4-1)^2 + (2+2)^2 = 3^2 + 4^2 = 25$ (pada lingkaran).\nLangkah 2: Gunakan $(x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2$.\nLangkah 3: $(4 - 1)(x - 1) + (2 + 2)(y + 2) = 25 \\implies 3(x - 1) + 4(y + 2) = 25$.\nLangkah 4: $3x - 3 + 4y + 8 = 25 \\implies 3x + 4y + 5 = 25 \\implies 3x + 4y = 20$.\nKesimpulan: Persamaan garis singgung adalah $3x + 4y = 20$."
        },
        {
          "problem": "Tentukan persamaan garis singgung lingkaran $x^2 + y^2 - 4x + 6y - 12 = 0$ di titik $B(5, 1)$!",
          "solution": "Langkah 1: Bagi adil: $x_1 x + y_1 y - 2(x + x_1) + 3(y + y_1) - 12 = 0$.\nLangkah 2: Substitusi $(x_1, y_1) = (5, 1)$:\n$$5x + 1y - 2(x + 5) + 3(y + 1) - 12 = 0$$\nLangkah 3: $5x + y - 2x - 10 + 3y + 3 - 12 = 0 \\implies 3x + 4y - 19 = 0$.\nKesimpulan: Persamaan garis singgung adalah $3x + 4y - 19 = 0$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik PGSL Melalui Titik Pada Lingkaran (Metode Bagi Adil). Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Bagi Adil Pusat O(0,0), definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Bagi Adil Pusat P(a,b), lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada PGSL Melalui Titik Pada Lingkaran (Metode Bagi Adil), selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Bagi Adil Pusat O(0,0).\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Bagi Adil Pusat P(a,b).\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Tentukan persamaan garis normal (garis yang tegak lurus garis singgung di titik singgung) untuk lingkaran $x^2 + y^2 = 25$ di titik $(3, 4)$!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi PGSL Melalui Titik Pada Lingkaran (Metode Bagi Adil).",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran PGSL Melalui Titik Pada Lingkaran (Metode Bagi Adil) menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Tentukan persamaan garis singgung lingkaran $x^2 + y^2 = 25$ di titik $A(3, -4)$ menggunakan rumus bagi adil!",
        "Tentukan persamaan garis singgung lingkaran $(x-2)^2 + (y+3)^2 = 20$ di titik yang berabsis $x = 4$!",
        "Garis singgung pada $x^2 + y^2 - 4x + 6y - 12 = 0$ di $(5, 1)$ memotong sumbu-$X$ di $P$ dan sumbu-$Y$ di $Q$. Tentukan luas $\\Delta OPQ$!",
        "Tentukan persamaan garis normal lingkaran $(x+1)^2 + (y-2)^2 = 13$ di titik $(2, 4)$!",
        "Buktikan bahwa garis singgung lingkaran di titik $P(x_1, y_1)$ selalu tegak lurus dengan jari-jari yang menghubungkan pusat ke titik $P$!"
      ]
    },
    {
      "id": "P07",
      "bab": "Bab 1: Geometri Analitik Lingkaran",
      "title": "PGSL dengan Gradien m Tertentu",
      "obj": [
        "Menentukan persamaan garis singgung lingkaran jika diketahui nilai gradien kemiringan $m$.",
        "Menentukan PGSL yang sejajar ($m_1 = m_2$) atau tegak lurus ($m_1 \\cdot m_2 = -1$) terhadap garis lain.",
        "Memahami mengapa setiap nilai gradien $m$ menghasilkan dua garis singgung sejajar."
      ],
      "hook": "Merancang jalur rel kereta api ekspres atau jalan tol layang yang harus sejajar dengan lereng bukit melingkar.",
      "toolkit": [
        {
          "name": "PGSL Gradien m Pusat O(0,0)",
          "math": "$$y = mx \\pm r\\sqrt{1 + m^2}$$"
        },
        {
          "name": "PGSL Gradien m Pusat P(a,b)",
          "math": "$$y - b = m(x - a) \\pm r\\sqrt{1 + m^2}$$"
        },
        {
          "name": "Relasi Dua Garis",
          "math": "$$\\text{Sejajar: } m_1 = m_2 \\quad | \\quad \\text{Tegak Lurus: } m_1 \\cdot m_2 = -1$$"
        },
        {
          "name": "Bentuk Kuadrat Sempurna Lingkaran",
          "math": "$$(x - a)^2 + (y - b)^2 = r^2$$"
        },
        {
          "name": "Jarak Titik Pusat ke Garis Singgung",
          "math": "$$d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}} = r$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan persamaan garis singgung lingkaran $x^2 + y^2 = 20$ yang memiliki gradien $m = 2$!",
          "solution": "Langkah 1: Pusat $(0,0)$, $r = \\sqrt{20}, m = 2$.\nLangkah 2: $y = mx \\pm r\\sqrt{1 + m^2} \\implies y = 2x \\pm \\sqrt{20}\\sqrt{1 + 2^2}$.\nLangkah 3: $y = 2x \\pm \\sqrt{20}\\sqrt{5} = 2x \\pm \\sqrt{100} = 2x \\pm 10$.\nKesimpulan: Garis singgungnya adalah $y = 2x + 10$ dan $y = 2x - 10$."
        },
        {
          "problem": "Tentukan persamaan garis singgung lingkaran $(x - 2)^2 + (y + 1)^2 = 25$ yang sejajar dengan garis $3x - 4y + 12 = 0$!",
          "solution": "Langkah 1: Gradien garis sejajar: $3x - 4y + 12 = 0 \\implies m = \\frac{3}{4}$. Pusat $P(2, -1), r = 5$.\nLangkah 2: $y - (-1) = \\frac{3}{4}(x - 2) \\pm 5\\sqrt{1 + (3/4)^2}$.\nLangkah 3: $y + 1 = \\frac{3}{4}(x - 2) \\pm 5\\left(\\frac{5}{4}\\right) \\implies 4(y + 1) = 3(x - 2) \\pm 25$.\nLangkah 4: $4y + 4 = 3x - 6 \\pm 25 \\implies 3x - 4y = 10 \\pm 25$.\nKesimpulan: Persamaannya adalah $3x - 4y - 35 = 0$ dan $3x - 4y + 15 = 0$."
        },
        {
          "problem": "Tentukan salah satu persamaan garis singgung lingkaran $x^2 + y^2 = 16$ yang tegak lurus terhadap garis $2x + y - 5 = 0$!",
          "solution": "Langkah 1: Garis $2x + y - 5 = 0$ memiliki gradien $m_1 = -2$.\nLangkah 2: Syarat tegak lurus $m_1 \\cdot m = -1 \\implies m = \\frac{1}{2}$.\nLangkah 3: $y = \\frac{1}{2}x \\pm 4\\sqrt{1 + (1/2)^2} = \\frac{1}{2}x \\pm 4\\sqrt{5/4} = \\frac{1}{2}x \\pm 2\\sqrt{5}$.\nKesimpulan: Salah satu persamaannya adalah $y = \\frac{1}{2}x + 2\\sqrt{5}$ (atau $x - 2y + 4\\sqrt{5} = 0$)."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik PGSL dengan Gradien m Tertentu. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus PGSL Gradien m Pusat O(0,0), definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus PGSL Gradien m Pusat P(a,b), lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada PGSL dengan Gradien m Tertentu, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus PGSL Gradien m Pusat O(0,0).\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus PGSL Gradien m Pusat P(a,b).\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Tentukan persamaan garis singgung lingkaran $x^2 + y^2 - 4x + 2y - 5 = 0$ yang membentuk sudut $45^\\circ$ terhadap sumbu-X positif ($m = \\tan 45^\\circ = 1$)!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi PGSL dengan Gradien m Tertentu.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran PGSL dengan Gradien m Tertentu menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Tentukan persamaan garis singgung lingkaran $x^2 + y^2 = 16$ yang bergradien $m = -\\frac{3}{4}$!",
        "Tentukan persamaan garis singgung lingkaran $(x+1)^2 + (y-3)^2 = 25$ yang sejajar garis $3x - 4y + 8 = 0$!",
        "Tentukan persamaan garis singgung lingkaran $x^2 + y^2 - 6x + 4y - 3 = 0$ yang tegak lurus garis $2x + y = 7$!",
        "Tentukan persamaan garis singgung lingkaran $x^2 + y^2 = 36$ yang membentuk sudut $60^\\circ$ terhadap sumbu-$X$ positif!",
        "Tentukan jarak antara dua garis singgung sejajar yang bergradien $m = 2$ pada lingkaran $(x-1)^2 + (y+2)^2 = 20$!"
      ]
    },
    {
      "id": "P08",
      "bab": "Bab 1: Geometri Analitik Lingkaran",
      "title": "PGSL Titik di Luar Lingkaran & Garis Kutub",
      "obj": [
        "Menentukan persamaan garis polar (garis kutub) dari titik di luar lingkaran $T(x_1, y_1)$.",
        "Menemukan titik-titik singgung kontak melalui substitusi garis polar ke lingkaran.",
        "Menentukan kedua persamaan garis singgung yang ditarik dari titik di luar lingkaran."
      ],
      "hook": "Dari satu stasiun satelit bumi di luar orbit, dapat dipancarkan dua sinyal pemandu singgung ke batas cakrawala planet.",
      "toolkit": [
        {
          "name": "Persamaan Garis Polar (Kutub)",
          "math": "$$x_1 x + y_1 y = r^2 \\quad \\text{(Substitusikan ke lingkaran)}$$"
        },
        {
          "name": "Langkah Penentuan PGSL",
          "math": "$$\\text{Titik Luar } T(x_1, y_1) \\xrightarrow{\\text{Garis Polar}} \\text{Titik Singgung } A, B \\xrightarrow{\\text{Bagi Adil}} \\text{PGSL}$$"
        },
        {
          "name": "Bentuk Kuadrat Sempurna Lingkaran",
          "math": "$$(x - a)^2 + (y - b)^2 = r^2$$"
        },
        {
          "name": "Jarak Titik Pusat ke Garis Singgung",
          "math": "$$d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}} = r$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan persamaan garis kutub (garis polar) dari titik $T(0, 5)$ terhadap lingkaran $x^2 + y^2 = 9$!",
          "solution": "Langkah 1: Titik $T(0, 5)$ berada di luar lingkaran karena $0^2 + 5^2 = 25 > 9$.\nLangkah 2: Rumus garis polar: $x_1 x + y_1 y = r^2$.\nLangkah 3: $(0)x + (5)y = 9 \\implies 5y = 9 \\implies y = \\frac{9}{5}$.\nKesimpulan: Persamaan garis polar adalah $y = \\frac{9}{5}$ (atau $5y - 9 = 0$)."
        },
        {
          "problem": "Dari titik $P(7, 1)$ di luar lingkaran ditarik garis singgung ke $x^2 + y^2 = 25$. Tentukan persamaan kedua garis singgung tersebut!",
          "solution": "Langkah 1: Garis polar dari $(7,1)$: $7x + y = 25 \\implies y = 25 - 7x$.\nLangkah 2: Substitusi ke $x^2 + y^2 = 25 \\implies x^2 + (25 - 7x)^2 = 25$.\nLangkah 3: $x^2 + 625 - 350x + 49x^2 = 25 \\implies 50x^2 - 350x + 600 = 0 \\implies x^2 - 7x + 12 = 0$.\nLangkah 4: $(x - 3)(x - 4) = 0 \\implies x_1 = 3 \\to y_1 = 4$ dan $x_2 = 4 \\to y_2 = -3$.\nLangkah 5: PGSL di $(3,4) \\to 3x + 4y = 25$; PGSL di $(4,-3) \\to 4x - 3y = 25$.\nKesimpulan: Garis singgungnya adalah $3x + 4y = 25$ dan $4x - 3y = 25$."
        },
        {
          "problem": "Tentukan panjang tali busur kontak antara dua titik singgung yang ditarik dari $T(0, 5)$ ke lingkaran $x^2 + y^2 = 9$!",
          "solution": "Langkah 1: Garis polar $y = \\frac{9}{5}$.\nLangkah 2: Substitusi ke $x^2 + y^2 = 9 \\implies x^2 + \\frac{81}{25} = 9 \\implies x^2 = \\frac{144}{25} \\implies x = \\pm \\frac{12}{5}$.\nLangkah 3: Titik kontak $A\\left(-\\frac{12}{5}, \\frac{9}{5}\\right)$ dan $B\\left(\\frac{12}{5}, \\frac{9}{5}\\right)$.\nLangkah 4: Panjang tali busur $AB = \\frac{12}{5} - \\left(-\\frac{12}{5}\\right) = \\frac{24}{5} = 4{,}8$.\nKesimpulan: Panjang tali busur kontak adalah $4{,}8$ satuan."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik PGSL Titik di Luar Lingkaran & Garis Kutub. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Persamaan Garis Polar (Kutub), definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Langkah Penentuan PGSL, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada PGSL Titik di Luar Lingkaran & Garis Kutub, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Persamaan Garis Polar (Kutub).\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Langkah Penentuan PGSL.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Diberikan titik $P(0, 4)$ dan lingkaran $x^2 + y^2 = 4$. Tentukan besar sudut apit antara kedua garis singgung yang ditarik dari titik $P$!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi PGSL Titik di Luar Lingkaran & Garis Kutub.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran PGSL Titik di Luar Lingkaran & Garis Kutub menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Tentukan persamaan garis kutub (polar) dari titik $P(3, 4)$ terhadap lingkaran $x^2 + y^2 = 9$ dan tentukan titik singgung lingkarannya!",
        "Tentukan persamaan kedua garis singgung yang ditarik dari titik $T(1, 7)$ ke lingkaran $x^2 + y^2 = 25$!",
        "Dua lingkaran $L_1 \\equiv x^2 + y^2 = 9$ dan $L_2 \\equiv (x-8)^2 + y^2 = 16$. Tentukan panjang garis singgung persekutuan luar dan dalamnya!",
        "Tentukan sudut antara dua garis singgung yang ditarik dari titik $(0, 6)$ ke lingkaran $x^2 + y^2 = 9$!",
        "Buktikan bahwa garis kutub dari titik $P$ terhadap lingkaran selalu tegak lurus pada garis yang menghubungkan pusat lingkaran ke titik $P$!"
      ]
    },
    {
      "id": "P09",
      "bab": "Bab 1: Geometri Analitik Lingkaran",
      "title": "Asesmen Sumatif Bab 1: Geometri Analitik Lingkaran",
      "obj": [
        "Mengevaluasi penguasaan komprehensif seluruh konsep Geometri Analitik Lingkaran (P01 - P08).",
        "Mendiagnosis kesiapan pengerjaan soal standar CBT TKA Nasional dan UTBK-SNBT.",
        "Melatih ketelitian aljabar kuadrat dan penalaran geometri analitik."
      ],
      "hook": "Uji kompetensi integratif Bab 1 mengukur penguasaan geometri lingkaran sebelum melangkah ke Bab 2 Kalkulus Limit Fungsi.",
      "toolkit": [
        {
          "name": "Matriks Uji Kompetensi Bab 1",
          "math": "$$\\text{Persamaan Lingkaran (30\\%)} + \\text{Kedudukan Titik/Garis (30\\%)} + \\text{PGSL (40\\%) }$$"
        },
        {
          "name": "Formula Cepat PGSL",
          "math": "$$y - b = m(x-a) \\pm r\\sqrt{1+m^2}, \\quad (x_1-a)(x-a) + (y_1-b)(y-b) = r^2$$"
        },
        {
          "name": "Bentuk Kuadrat Sempurna Lingkaran",
          "math": "$$(x - a)^2 + (y - b)^2 = r^2$$"
        },
        {
          "name": "Jarak Titik Pusat ke Garis Singgung",
          "math": "$$d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}} = r$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan panjang jari-jari lingkaran $x^2 + y^2 - 4x + 2y - 20 = 0$!",
          "solution": "Langkah 1: $A = -4, B = 2, C = -20$.\nLangkah 2: $r = \\sqrt{(-2)^2 + (1)^2 - (-20)} = \\sqrt{4 + 1 + 20} = \\sqrt{25} = 5$.\nKesimpulan: Jari-jari lingkaran adalah $r = 5$ satuan."
        },
        {
          "problem": "Tentukan persamaan garis singgung lingkaran $x^2 + y^2 = 13$ di titik $(-2, 3)$!",
          "solution": "Langkah 1: Titik $(-2, 3)$ berada pada lingkaran karena $(-2)^2 + 3^2 = 4 + 9 = 13$.\nLangkah 2: Rumus Bagi Adil: $x_1 x + y_1 y = r^2 \\implies -2x + 3y = 13$.\nKesimpulan: Persamaan garis singgung adalah $-2x + 3y = 13$ (atau $2x - 3y + 13 = 0$)."
        },
        {
          "problem": "Tentukan persamaan garis singgung lingkaran $(x - 1)^2 + (y - 2)^2 = 9$ yang bergradien $m = -1$!",
          "solution": "Langkah 1: Pusat $P(1, 2), r = 3, m = -1$.\nLangkah 2: $y - 2 = -1(x - 1) \\pm 3\\sqrt{1 + (-1)^2} = -x + 1 \\pm 3\\sqrt{2}$.\nLangkah 3: $x + y = 3 \\pm 3\\sqrt{2}$.\nKesimpulan: Persamaan garis singgung adalah $x + y - 3 - 3\\sqrt{2} = 0$ dan $x + y - 3 + 3\\sqrt{2} = 0$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Asesmen Sumatif Bab 1: Geometri Analitik Lingkaran. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Matriks Uji Kompetensi Bab 1, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Formula Cepat PGSL, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Asesmen Sumatif Bab 1: Geometri Analitik Lingkaran, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Matriks Uji Kompetensi Bab 1.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Formula Cepat PGSL.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Bedah paket simulasi 10 soal CBT Bab 1 dan buktikan seluruh langkah analitisnya di papan tulis vertikal!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Asesmen Sumatif Bab 1: Geometri Analitik Lingkaran.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran Asesmen Sumatif Bab 1: Geometri Analitik Lingkaran menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Tentukan persamaan lingkaran konsentris dengan $x^2 + y^2 - 4x + 6y - 1 = 0$ yang memiliki luas daerah $36\\pi$!",
        "Satelit mengorbit pada $x^2 + y^2 = 64$. Sinyal radar dipancarkan dari $S(10, 0)$. Tentukan koordinat titik kontak sinyal singgung pada orbit!",
        "Tentukan persamaan berkas lingkaran melalui perpotongan $L_1 \\equiv x^2 + y^2 - 4x = 0$ dan $L_2 \\equiv x^2 + y^2 - 2y = 0$ serta melalui $O(0,0)$!",
        "Tentukan persamaan lingkaran luar segitiga yang dibentuk oleh garis $x=0, y=0,$ dan $3x + 4y = 12$!",
        "Rancang model analitis sistem transmisi roda gigi lingkaran ganda dengan rasio jari-jari $1:3$ dan tentukan persamaan garis sabuk transmisinya!"
      ]
    },
    {
      "id": "P10",
      "bab": "Bab 2: Limit Aljabar & Trigonometri",
      "title": "Limit Aljabar & Trigonometri 1: Fondasi Limit Aljabar Bentuk 0/0",
      "obj": [
        "Memahami konsep limit fungsi sebagai pendekatan nilai di sekitar titik $x \\to c$.",
        "Menyelesaikan bentuk tak tentu $\\frac{0}{0}$ melalui teknik pemfaktoran aljabar.",
        "Menyelesaikan limit bentuk akar melalui metode perkalian akar sekawan."
      ],
      "hook": "Saat menghitung kecepatan sesaat mobil $\\lim_{\\Delta t \\to 0} \\frac{\\Delta s}{\\Delta t}$, penyebut mendekati nol sehingga menghasilkan bentuk tak tentu $\\frac{0}{0}$.",
      "toolkit": [
        {
          "name": "Bentuk Tak Tentu 0/0 dan Substitusi Langsung",
          "math": "$$\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\frac{f(c)}{g(c)} \\quad (g(c) \\neq 0)$$"
        },
        {
          "name": "Metode Pemfaktoran Aljabar Kuadrat dan Kubik",
          "math": "$$a^2 - b^2 = (a-b)(a+b), \\quad a^3 - b^3 = (a-b)(a^2+ab+b^2)$$"
        },
        {
          "name": "Perkalian Akar Sekawan Dua Suku",
          "math": "$$\\frac{f(x)}{\\sqrt{g(x)} - \\sqrt{h(x)}} \\times \\frac{\\sqrt{g(x)} + \\sqrt{h(x)}}{\\sqrt{g(x)} + \\sqrt{h(x)}}$$"
        },
        {
          "name": "Perkalian Akar Sekawan Tiga Suku Kubik",
          "math": "$$\\frac{f(x)}{\\sqrt[3]{a} - \\sqrt[3]{b}} \\times \\frac{\\sqrt[3]{a^2} + \\sqrt[3]{ab} + \\sqrt[3]{b^2}}{\\sqrt[3]{a^2} + \\sqrt[3]{ab} + \\sqrt[3]{b^2}}$$"
        },
        {
          "name": "Kaidah L Hopital Turunan Pembilang dan Penyebut",
          "math": "$$\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)} \\quad \\left[\\text{untuk bentuk } \\frac{0}{0}\\right]$$"
        },
        {
          "name": "Teorema Limit Substitusi Variabel",
          "math": "$$\\lim_{x \\to c} f(g(x)) = f\\left(\\lim_{x \\to c} g(x)\\right)$$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan nilai dari limit aljabar $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$!",
          "solution": "Langkah 1: Substitusi langsung $x = 3 \\implies \\frac{3^2 - 9}{3 - 3} = \\frac{0}{0}$ (Bentuk Tak Tentu).\nLangkah 2: Faktorkan pembilang selisih kuadrat $x^2 - 9 = (x - 3)(x + 3)$.\nLangkah 3: Sederhanakan faktor pembuat nol $(x - 3)$: $\\lim_{x \\to 3} \\frac{(x - 3)(x + 3)}{x - 3} = \\lim_{x \\to 3} (x + 3)$.\nLangkah 4: Substitusi $x = 3 \\implies 3 + 3 = 6$.\nKesimpulan: Nilai limit adalah $6$."
        },
        {
          "problem": "Tentukan nilai limit $\\lim_{x \\to 2} \\frac{x^2 - 5x + 6}{x^2 - 4}$!",
          "solution": "Langkah 1: Substitusi $x = 2 \\implies \\frac{4 - 10 + 6}{4 - 4} = \\frac{0}{0}$.\nLangkah 2: Faktorkan pembilang $x^2 - 5x + 6 = (x - 2)(x - 3)$ dan penyebut $x^2 - 4 = (x - 2)(x + 2)$.\nLangkah 3: Eliminasi faktor $(x - 2)$: $\\lim_{x \\to 2} \\frac{(x - 2)(x - 3)}{(x - 2)(x + 2)} = \\lim_{x \\to 2} \\frac{x - 3}{x + 2}$.\nLangkah 4: Substitusi $x = 2 \\implies \\frac{2 - 3}{2 + 2} = \\frac{-1}{4} = -\\frac{1}{4}$.\nKesimpulan: Nilai limit adalah $-\\frac{1}{4}$."
        },
        {
          "problem": "Hitung nilai dari limit $\\lim_{x \\to 4} \\frac{x - 4}{\\sqrt{x} - 2}$!",
          "solution": "Langkah 1: Substitusi $x = 4 \\implies \\frac{0}{\\sqrt{4}-2} = \\frac{0}{0}$.\nLangkah 2: Kalikan pembilang dan penyebut dengan bentuk sekawan $(\\sqrt{x} + 2)$: $\\lim_{x \\to 4} \\frac{(x - 4)(\\sqrt{x} + 2)}{(\\sqrt{x} - 2)(\\sqrt{x} + 2)} = \\lim_{x \\to 4} \\frac{(x - 4)(\\sqrt{x} + 2)}{x - 4}$.\nLangkah 3: Coret faktor $(x - 4)$: $\\lim_{x \\to 4} (\\sqrt{x} + 2) = \\sqrt{4} + 2 = 2 + 2 = 4$.\nKesimpulan: Nilai limit adalah $4$."
        },
        {
          "problem": "Tentukan nilai limit aljabar $\\lim_{x \\to 4} \\frac{2x^2 - 7x - 4}{\\sqrt{2x + 1} - 3}$!",
          "solution": "Langkah 1: Substitusi $x = 4 \\implies \\frac{0}{0}$. Faktorkan pembilang $2x^2 - 7x - 4 = (2x + 1)(x - 4)$.\nLangkah 2: Kalikan sekawan pada penyebut: $\\frac{(2x + 1)(x - 4)}{\\sqrt{2x + 1} - 3} \\times \\frac{\\sqrt{2x + 1} + 3}{\\sqrt{2x + 1} + 3} = \\frac{(2x + 1)(x - 4)(\\sqrt{2x + 1} + 3)}{2(x - 4)}$.\nLangkah 3: Eliminasi $(x - 4)$: $\\lim_{x \\to 4} \\frac{(2x + 1)(\\sqrt{2x + 1} + 3)}{2} = \\frac{(9)(\\sqrt{9} + 3)}{2} = \\frac{9 \\times 6}{2} = 27$.\nKesimpulan: Nilai limit adalah $27$."
        },
        {
          "problem": "Pada analisis laju reaksi kinetik kimia, kecepatan transisi dinyatakan oleh limit $v = \\lim_{x \\to 1} \\frac{\\sqrt[3]{x} - 1}{\\sqrt{x} - 1}$. Hitunglah nilai eksak dari kecepatan transisi $v$ tersebut!",
          "solution": "Langkah 1: Gunakan substitusi variabel aljabar: Misalkan $x = u^6$. Ketika $x \\to 1$, maka $u \\to 1$.\nLangkah 2: Bentuk limit menjadi: $\\lim_{u \\to 1} \\frac{u^2 - 1}{u^3 - 1}$.\nLangkah 3: Faktorkan pembilang dan penyebut: $\\frac{(u - 1)(u + 1)}{(u - 1)(u^2 + u + 1)} = \\frac{u + 1}{u^2 + u + 1}$.\nLangkah 4: Substitusi $u = 1 \\implies \\frac{1 + 1}{1^2 + 1 + 1} = \\frac{2}{3}$.\nKesimpulan: Nilai eksak kecepatan transisi limit adalah $\\frac{2}{3}$."
        }
      ],
      "btc": "Kelompok VNPS: Selesaikan $\\lim_{x \\to 1} \\frac{x - 1}{\\sqrt{x^2 + 3} - 2}$ menggunakan perkalian sekawan!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Limit Aljabar & Trigonometri 1: Fondasi Limit Aljabar Bentuk 0/0.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT.",
          "Kaidah L'Hopital hanya boleh diterapkan jika hasil substitusi langsung benar-benar menghasilkan bentuk tak tentu 0/0.",
          "Kesalahan umum: Langsung menurunkan fungsi tanpa memastikan bentuk 0/0, atau salah menerapkan turunan rantai pada bentuk akar."
        ],
        "islamic": "Pembelajaran Limit Aljabar & Trigonometri 1: Fondasi Limit Aljabar Bentuk 0/0 menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Hitunglah nilai limit aljabar tak tentu: $\\lim_{x \\to 3} \\frac{x^2 - 2x - 3}{\\sqrt{x+1} - 2}$ dengan perkalian sekawan rasional!",
        "Tentukan nilai konstanta $a$ dan $b$ agar $\\lim_{x \\to 2} \\frac{x^2 + ax + b}{x - 2} = 7$!",
        "Hitunglah $\\lim_{x \\to 1} \\frac{\\sqrt[3]{x} - 1}{\\sqrt{x} - 1}$ menggunakan substitusi variabel aljabar $x = u^6$!",
        "Hitung nilai limit fungsi faktorisasi: $\\lim_{x \\to -2} \\frac{x^3 + 8}{x^2 + 5x + 6}$!",
        "Buktikan secara formal definisi limit Cauchy $(\\varepsilon - \\delta)$ bahwa $\\lim_{x \\to 3} (2x + 1) = 7$!"
      ]
    },
    {
      "id": "P11",
      "bab": "Bab 2: Limit Aljabar & Trigonometri",
      "title": "Limit Aljabar & Trigonometri 2: Teorema Dasar Limit Trigonometri",
      "obj": [
        "Memahami dan membuktikan teorema dasar limit trigonometri $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ dan $\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1$.",
        "Menerapkan perluasan teorema untuk $\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}$ dan $\\lim_{x \\to 0} \\frac{\\tan ax}{\\sin bx} = \\frac{a}{b}$.",
        "Menyelesaikan limit perkalian variabel trigonometri berderajat tinggi."
      ],
      "hook": "Pada sudut infinitesimal (sangat kecil mendekati nol radian), panjang busur lingkaran identik dengan panjang garis sinus dan tangen tegak lurusnya!",
      "toolkit": [
        {
          "name": "Teorema Sinus Dasar",
          "math": "$$\\lim_{x \\to 0} \\frac{\\sin(ax)}{bx} = \\frac{a}{b}, \\quad \\lim_{x \\to 0} \\frac{ax}{\\sin(bx)} = \\frac{a}{b}$$"
        },
        {
          "name": "Teorema Tangen Dasar",
          "math": "$$\\lim_{x \\to 0} \\frac{\\tan(ax)}{bx} = \\frac{a}{b}, \\quad \\lim_{x \\to 0} \\frac{\\sin(ax)}{\\tan(bx)} = \\frac{a}{b}$$"
        },
        {
          "name": "Identitas Trigonometri Sudut Ganda",
          "math": "$$1 - \\cos(ax) = 2\\sin^2\\left(\\frac{ax}{2}\\right)$$"
        },
        {
          "name": "Teorema Apit Limit Fungsi",
          "math": "$$g(x) \\le f(x) \\le h(x) \\implies \\lim f(x) = L$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan nilai limit $\\lim_{x \\to 0} \\frac{\\sin(8x)}{2x}$!",
          "solution": "Langkah 1: Gunakan teorema dasar limit trigonometri $\\lim_{x \\to 0} \\frac{\\sin(ax)}{bx} = \\frac{a}{b}$.\nLangkah 2: Dengan $a = 8$ dan $b = 2$, diperoleh: $\\lim_{x \\to 0} \\frac{\\sin 8x}{2x} = \\frac{8}{2} = 4$.\nKesimpulan: Nilai limit adalah $4$."
        },
        {
          "problem": "Tentukan nilai dari $\\lim_{x \\to 0} \\frac{\\tan(6x)}{\\sin(3x)}$!",
          "solution": "Langkah 1: Bagi pembilang dan penyebut dengan $x$: $\\lim_{x \\to 0} \\frac{\\frac{\\tan 6x}{x}}{\\frac{\\sin 3x}{x}}$.\nLangkah 2: Nilai limit pembilang $= 6$ dan penyebut $= 3$.\nLangkah 3: Evaluasi $\\frac{6}{3} = 2$.\nKesimpulan: Nilai limit adalah $2$."
        },
        {
          "problem": "Hitung nilai dari limit $\\lim_{x \\to 0} \\frac{\\sin(4x) \\cdot \\tan(3x)}{2x^2}$!",
          "solution": "Langkah 1: Uraikan penyebut $2x^2$ menjadi perkalian dua faktor linear $2x \\cdot x$: $\\lim_{x \\to 0} \\left( \\frac{\\sin 4x}{2x} \\cdot \\frac{\\tan 3x}{x} \\right)$.\nLangkah 2: Terapkan sifat perkalian limit: $\\left( \\lim_{x \\to 0} \\frac{\\sin 4x}{2x} \\right) \\times \\left( \\lim_{x \\to 0} \\frac{\\tan 3x}{x} \\right) = \\frac{4}{2} \\times \\frac{3}{1} = 2 \\times 3 = 6$.\nKesimpulan: Nilai limit adalah $6$."
        },
        {
          "problem": "Tentukan nilai dari limit $\\lim_{x \\to 0} \\frac{\\sin(6x) + \\tan(4x)}{2x \\cdot \\cos(3x)}$!",
          "solution": "Langkah 1: Pisahkan pecahan menjadi dua suku dan manfaatkan $\\lim_{x \\to 0} \\cos(3x) = \\cos(0) = 1$: $\\lim_{x \\to 0} \\frac{1}{\\cos(3x)} \\cdot \\left( \\frac{\\sin 6x}{2x} + \\frac{\\tan 4x}{2x} \\right)$.\nLangkah 2: Evaluasi masing-masing limit pecahan: $\\lim_{x \\to 0} \\frac{\\sin 6x}{2x} = \\frac{6}{2} = 3$ dan $\\lim_{x \\to 0} \\frac{\\tan 4x}{2x} = \\frac{4}{2} = 2$.\nLangkah 3: Gabungkan hasil: $1 \\times (3 + 2) = 5$.\nKesimpulan: Nilai limit adalah $5$."
        },
        {
          "problem": "Dalam rekayasa pemrosesan sinyal audio digital, penguatan frekuensi harmonik dinyatakan oleh $G = \\lim_{x \\to 0} \\frac{x \\cdot \\sin(5x)}{\\tan^2(2x)}$. Tentukan nilai faktor penguatan sinyal $G$ tersebut!",
          "solution": "Langkah 1: Uraikan pembilang dan penyebut: $\\lim_{x \\to 0} \\left( \\frac{x}{\\tan 2x} \\cdot \\frac{\\sin 5x}{\\tan 2x} \\right)$.\nLangkah 2: Terapkan teorema limit trigonometri: $\\lim_{x \\to 0} \\frac{x}{\\tan 2x} = \\frac{1}{2}$ dan $\\lim_{x \\to 0} \\frac{\\sin 5x}{\\tan 2x} = \\frac{5}{2}$.\nLangkah 3: Hitung hasil akhir: $G = \\frac{1}{2} \\times \\frac{5}{2} = \\frac{5}{4} = 1{,}25$.\nKesimpulan: Nilai faktor penguatan sinyal $G$ adalah $\\frac{5}{4} = 1{,}25$."
        }
      ],
      "btc": "Kelompok VNPS: Hitung nilai dari $\\lim_{x \\to 0} \\frac{x \\tan(3x)}{\\sin^2(6x)}$ dan jelaskan kesetaraan koefisiennya!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Limit Aljabar & Trigonometri 2: Teorema Dasar Limit Trigonometri.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran Limit Aljabar & Trigonometri 2: Teorema Dasar Limit Trigonometri menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Hitunglah nilai $\\lim_{x \\to 0} \\frac{\\sin(6x) + \\tan(4x)}{2x \\cdot \\cos(3x)}$ menggunakan Teorema Dasar Limit Trigonometri!",
        "Tentukan nilai $\\lim_{x \\to 0} \\frac{x \\cdot \\tan(3x)}{1 - \\cos(4x)}$ dengan mereduksi cosinus ke sinus kuadrat!",
        "Buktikan secara analitis bahwa $\\lim_{x \\to 0} \\frac{\\sin(ax)}{\\tan(bx)} = \\frac{a}{b}$ untuk setiap $a, b \\neq 0$!",
        "Hitung nilai limit trigonometri bertingkat: $\\lim_{x \\to 0} \\frac{\\tan(2x) \\cdot \\sin^2(3x)}{x^3 \\cdot \\cos(4x)}$!",
        "Gunakan Teorema Apit (*Squeeze Theorem*) untuk membuktikan bahwa $\\lim_{x \\to 0} x^2 \\sin(\\frac{1}{x}) = 0$!"
      ]
    },
    {
      "id": "P12",
      "bab": "Bab 2: Limit Aljabar & Trigonometri",
      "title": "Limit Aljabar & Trigonometri 3: Limit Trigonometri & Identitas Cosinus",
      "obj": [
        "Mengubah bentuk $1 - \\cos(ax)$ menjadi bentuk sinus menggunakan identitas sudut ganda $2\\sin^2(\\frac{ax}{2})$.",
        "Menerapkan identitas selisih cosinus $\\cos A - \\cos B = -2\\sin(\\frac{A+B}{2})\\sin(\\frac{A-B}{2})$.",
        "Menyelesaikan limit trigonometri tak tentu $\\frac{0}{0}$ yang memuat bentuk cosinus."
      ],
      "hook": "Mengapa $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}$ bernilai $\\frac{1}{2}$? Karena $1 - \\cos x$ dapat ditransformasikan menjadi $2\\sin^2(x/2)$!",
      "toolkit": [
        {
          "name": "Identitas Sudut Ganda Cosinus",
          "math": "$$1 - \\cos(ax) = 2 \\sin^2\\left(\\frac{ax}{2}\\right)$$"
        },
        {
          "name": "Identitas Pythagoras",
          "math": "$$1 - \\cos^2(ax) = \\sin^2(ax)$$"
        },
        {
          "name": "Selisih Cosinus",
          "math": "$$\\cos A - \\cos B = -2\\sin\\left(\\frac{A+B}{2}\\right)\\sin\\left(\\frac{A-B}{2}\\right)$$"
        },
        {
          "name": "Identitas Trigonometri Sudut Ganda",
          "math": "$$1 - \\cos(ax) = 2\\sin^2\\left(\\frac{ax}{2}\\right)$$"
        },
        {
          "name": "Teorema Apit Limit Fungsi",
          "math": "$$g(x) \\le f(x) \\le h(x) \\implies \\lim f(x) = L$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan nilai limit $\\lim_{x \\to 0} \\frac{1 - \\cos(4x)}{x^2}$!",
          "solution": "Langkah 1: Gunakan identitas sudut ganda cosinus $1 - \\cos(4x) = 2\\sin^2(2x)$.\nLangkah 2: $\\lim_{x \\to 0} \\frac{2\\sin^2(2x)}{x^2} = 2 \\left( \\lim_{x \\to 0} \\frac{\\sin 2x}{x} \\right)^2$.\nLangkah 3: Hitung nilai numerik: $2 \\times (2)^2 = 2 \\times 4 = 8$.\nKesimpulan: Nilai limit adalah $8$."
        },
        {
          "problem": "Tentukan nilai dari limit $\\lim_{x \\to 0} \\frac{1 - \\cos(2x)}{x \\cdot \\sin(3x)}$!",
          "solution": "Langkah 1: Ubah $1 - \\cos(2x) = 2\\sin^2(x)$.\nLangkah 2: Jabarkan bentuk perkalian: $\\lim_{x \\to 0} \\frac{2\\sin(x) \\cdot \\sin(x)}{x \\cdot \\sin(3x)} = 2 \\times \\left( \\lim_{x \\to 0} \\frac{\\sin x}{x} \\right) \\times \\left( \\lim_{x \\to 0} \\frac{\\sin x}{\\sin 3x} \\right)$.\nLangkah 3: Evaluasi tiap limit: $2 \\times 1 \\times \\frac{1}{3} = \\frac{2}{3}$.\nKesimpulan: Nilai limit adalah $\\frac{2}{3}$."
        },
        {
          "problem": "Hitung nilai dari limit $\\lim_{x \\to 0} \\frac{1 - \\cos(6x)}{1 - \\cos(2x)}$!",
          "solution": "Langkah 1: Ubah pembilang $1 - \\cos(6x) = 2\\sin^2(3x)$ dan penyebut $1 - \\cos(2x) = 2\\sin^2(x)$.\nLangkah 2: Sederhanakan: $\\lim_{x \\to 0} \\frac{2\\sin^2(3x)}{2\\sin^2(x)} = \\left( \\lim_{x \\to 0} \\frac{\\sin 3x}{\\sin x} \\right)^2$.\nLangkah 3: Hitung nilai limit: $\\left( \\frac{3}{1} \\right)^2 = 3^2 = 9$.\nKesimpulan: Nilai limit adalah $9$."
        },
        {
          "problem": "Tentukan nilai limit $\\lim_{x \\to 0} \\frac{\\cos(2x) - \\cos(6x)}{x^2}$!",
          "solution": "Langkah 1: Gunakan rumus selisih dua cosinus: $\\cos(2x) - \\cos(6x) = -2 \\sin(4x) \\sin(-2x) = 2 \\sin(4x) \\sin(2x)$.\nLangkah 2: Substitusikan ke limit: $\\lim_{x \\to 0} \\frac{2 \\sin(4x) \\sin(2x)}{x \\cdot x} = 2 \\times \\left( \\lim_{x \\to 0} \\frac{\\sin 4x}{x} \\right) \\times \\left( \\lim_{x \\to 0} \\frac{\\sin 2x}{x} \\right)$.\nLangkah 3: Evaluasi nilai akhir: $2 \\times 4 \\times 2 = 16$.\nKesimpulan: Nilai limit adalah $16$."
        },
        {
          "problem": "Pada fenomena interferensi gelombang cahaya celah ganda, intensitas pola terang-gelap di sekitar pusat difraksi dirumuskan oleh $I = \\lim_{x \\to 0} \\frac{\\cos(x) - \\cos(5x)}{x \\cdot \\tan(3x)}$. Tentukan nilai intensitas relatif $I$ tersebut!",
          "solution": "Langkah 1: Transformasikan pembilang menggunakan selisih cosinus: $\\cos(x) - \\cos(5x) = 2 \\sin(3x) \\sin(2x)$.\nLangkah 2: Masukkan ke pecahan limit: $\\lim_{x \\to 0} \\frac{2 \\sin(3x) \\sin(2x)}{x \\cdot \\tan(3x)} = 2 \\times \\left( \\lim_{x \\to 0} \\frac{\\sin 3x}{\\tan 3x} \\right) \\times \\left( \\lim_{x \\to 0} \\frac{\\sin 2x}{x} \\right)$.\nLangkah 3: Hitung nilai numerik: $2 \\times 1 \\times 2 = 4$.\nKesimpulan: Nilai intensitas relatif gelombang $I$ adalah $4$."
        }
      ],
      "btc": "Kelompok VNPS: Selesaikan $\\lim_{x \\to 0} \\frac{\\cos(2x) - \\cos(6x)}{x^2}$ menggunakan rumus selisih cosinus!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Limit Aljabar & Trigonometri 3: Limit Trigonometri & Identitas Cosinus.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran Limit Aljabar & Trigonometri 3: Limit Trigonometri & Identitas Cosinus menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Hitunglah nilai $\\lim_{x \\to 0} \\frac{\\cos(2x) - \\cos(6x)}{x^2}$ menggunakan identitas selisih cosinus $\\cos A - \\cos B$!",
        "Tentukan nilai limit: $\\lim_{x \\to 0} \\frac{1 - \\cos^2(4x)}{x \\cdot \\sin(2x) \\cdot \\cos(5x)}$!",
        "Hitunglah $\\lim_{x \\to 0} \\frac{\\cos(x) - \\cos(3x)}{\\cos(2x) - \\cos(4x)}$ dan tafsirkan perbandingan frekuensi gelombangnya!",
        "Tentukan nilai limit: $\\lim_{x \\to 0} \\frac{1 - \\cos(6x)}{1 - \\cos(2x)}$ menggunakan bentuk identitas sudut ganda!",
        "Buktikan identitas limit trigonometri $\\lim_{x \\to 0} \\frac{\\cos(ax) - \\cos(bx)}{x^2} = \\frac{b^2 - a^2}{2}$!"
      ]
    },
    {
      "id": "P13",
      "bab": "Bab 2: Limit Aljabar & Trigonometri",
      "title": "Limit Aljabar & Trigonometri 4: Limit Trigonometri Menuju Sudut $x \\to c$",
      "obj": [
        "Menyelesaikan limit trigonometri saat $x \\to c$ ($c \\neq 0$) menggunakan substitusi variabel $h = x - c \\to 0$.",
        "Menerapkan identitas sudut relasi trigonometri $(\\pi - x, \\frac{\\pi}{2} - x)$.",
        "Menyelesaikan limit pemfaktoran yang memuat fungsi trigonometri di titik bukan nol."
      ],
      "hook": "Banyak fenomena fisika gelombang dievaluasi pada fase sudut tertentu seperti $x \\to \\frac{\\pi}{4}$ atau $x \\to \\pi$, bukan di titik nol.",
      "toolkit": [
        {
          "name": "Transformasi Variabel h",
          "math": "$$h = x - c \\implies x = c + h \\quad (\\text{saat } x \\to c, \\quad h \\to 0)$$"
        },
        {
          "name": "Sudut Relasi Kuadran",
          "math": "$$\\sin(\\pi - x) = \\sin x, \\quad \\cos\\left(\\frac{\\pi}{2} - x\\right) = \\sin x$$"
        },
        {
          "name": "Identitas Trigonometri Sudut Ganda",
          "math": "$$1 - \\cos(ax) = 2\\sin^2\\left(\\frac{ax}{2}\\right)$$"
        },
        {
          "name": "Teorema Apit Limit Fungsi",
          "math": "$$g(x) \\le f(x) \\le h(x) \\implies \\lim f(x) = L$$"
        }
      ],
      "examples": [
        {
          "problem": "Hitung nilai dari $\\lim_{x \\to 1} \\frac{\\sin(x - 1)}{x^2 - 1}$!",
          "solution": "Langkah 1: Faktorkan penyebut: $x^2 - 1 = (x - 1)(x + 1)$.\nLangkah 2: $\\lim_{x \\to 1} \\frac{\\sin(x - 1)}{(x - 1)(x + 1)} = \\left( \\lim_{x \\to 1} \\frac{\\sin(x - 1)}{x - 1} \\right) \\cdot \\left( \\lim_{x \\to 1} \\frac{1}{x + 1} \\right)$.\nLangkah 3: Karena $x \\to 1 \\implies (x-1) \\to 0$, suku pertama bernilai $1$.\nLangkah 4: $1 \\times \\frac{1}{1 + 1} = \\frac{1}{2}$.\nKesimpulan: Nilai limit adalah $\\frac{1}{2}$."
        },
        {
          "problem": "Hitung nilai dari $\\lim_{x \\to \\pi/4} \\frac{\\sin x - \\cos x}{x - \\pi/4}$!",
          "solution": "Langkah 1: Misalkan $h = x - \\pi/4 \\implies x = \\pi/4 + h$.\nLangkah 2: $\\sin(\\pi/4 + h) - \\cos(\\pi/4 + h) = \\sqrt{2}\\sin(h)$.\nLangkah 3: $\\lim_{h \\to 0} \\frac{\\sqrt{2}\\sin h}{h} = \\sqrt{2} \\times 1 = \\sqrt{2}$.\nKesimpulan: Nilai limit adalah $\\sqrt{2}$."
        },
        {
          "problem": "Hitung nilai dari $\\lim_{x \\to \\pi/2} \\frac{1 - \\sin x}{\\cos^2 x}$!",
          "solution": "Langkah 1: Ubah $\\cos^2 x = 1 - \\sin^2 x = (1 - \\sin x)(1 + \\sin x)$.\nLangkah 2: $\\lim_{x \\to \\pi/2} \\frac{1 - \\sin x}{(1 - \\sin x)(1 + \\sin x)} = \\lim_{x \\to \\pi/2} \\frac{1}{1 + \\sin x}$.\nLangkah 3: Evaluasi $x = \\pi/2$: $\\frac{1}{1 + \\sin(\\pi/2)} = \\frac{1}{1 + 1} = \\frac{1}{2}$.\nKesimpulan: Nilai limit adalah $\\frac{1}{2}$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Limit Aljabar & Trigonometri 4: Limit Trigonometri Menuju Sudut $x \\to c$. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Transformasi Variabel h, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Sudut Relasi Kuadran, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Limit Aljabar & Trigonometri 4: Limit Trigonometri Menuju Sudut $x \\to c$, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Transformasi Variabel h.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Sudut Relasi Kuadran.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Tentukan nilai $\\lim_{x \\to 2} \\frac{(x - 2) \\cos(x - 2)}{\\sin(2x - 4)}$!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Limit Aljabar & Trigonometri 4: Limit Trigonometri Menuju Sudut x \\to c.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran Limit Aljabar & Trigonometri 4: Limit Trigonometri Menuju Sudut x \\to c menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Hitunglah nilai limit trigonometri menuju sudut khusus: $\\lim_{x \\to \\frac{\\pi}{4}} \\frac{\\cos(x) - \\sin(x)}{\\cos(2x)}$!",
        "Tentukan nilai $\\lim_{x \\to 2} \\frac{\\sin(x - 2)}{x^2 - 4} \\cdot \\cos(x - 2)$ menggunakan substitusi variabel $u = x - 2$!",
        "Hitunglah $\\lim_{x \\to \\frac{\\pi}{2}} \\frac{1 - \\sin(x)}{(\\pi - 2x)^2}$ dengan mereduksi relasi $\\sin(x) = \\cos(\\frac{\\pi}{2} - x)$!",
        "Hitunglah nilai limit sudut istimewa: $\\lim_{x \\to \\frac{\\pi}{3}} \\frac{\\tan(x) - \\sqrt{3}}{x - \\frac{\\pi}{3}}$!",
        "Tentukan nilai limit trigonometri: $\\lim_{x \\to 1} \\frac{(x - 1) \\cdot \\cos(\\pi x)}{\\sin(2\\pi x)}$!"
      ]
    },
    {
      "id": "P14",
      "bab": "Bab 2: Limit Aljabar & Trigonometri",
      "title": "Limit Aljabar & Trigonometri 5: Limit di Ketakhinggaan Aljabar",
      "obj": [
        "Menghitung limit menuju tak hingga untuk fungsi rasional polinomial $\\frac{\\infty}{\\infty}$.",
        "Menghitung limit selisih bentuk akar kuadrat $\\infty - \\infty$ menggunakan rumus $\\frac{b - p}{2\\sqrt{a}}$.",
        "Menganalisis perilaku asimtotik jangka panjang sistem matematis."
      ],
      "hook": "Berapa kapasitas maksimum populasi biologis atau kecepatan terminal roket saat waktu $t \\to \\infty$?",
      "toolkit": [
        {
          "name": "Pecahan Polinomial x \\to inf",
          "math": "$$\\lim_{x \\to \\infty} \\frac{a x^m + \\dots}{b x^n + \\dots} = \\begin{cases} a/b & m = n \\\\ 0 & m < n \\\\ \\infty & m > n \\end{cases}$$"
        },
        {
          "name": "Rumus Cepat Selisih Akar",
          "math": "$$\\lim_{x \\to \\infty} (\\sqrt{ax^2 + bx + c} - \\sqrt{ax^2 + px + q}) = \\frac{b - p}{2\\sqrt{a}}$$"
        },
        {
          "name": "Identitas Trigonometri Sudut Ganda",
          "math": "$$1 - \\cos(ax) = 2\\sin^2\\left(\\frac{ax}{2}\\right)$$"
        },
        {
          "name": "Teorema Apit Limit Fungsi",
          "math": "$$g(x) \\le f(x) \\le h(x) \\implies \\lim f(x) = L$$"
        }
      ],
      "examples": [
        {
          "problem": "Hitung nilai dari $\\lim_{x \\to \\infty} \\frac{3x^3 - 4x + 1}{2x^3 + 5x^2 - 7}$!",
          "solution": "Langkah 1: Pangkat tertinggi pembilang adalah $m=3$ dan penyebut $n=3$ ($m=n$).\nLangkah 2: Ambil rasio koefisien pangkat tertinggi: $\\frac{3}{2}$.\nKesimpulan: Nilai limit adalah $\\frac{3}{2}$."
        },
        {
          "problem": "Hitung nilai dari $\\lim_{x \\to \\infty} \\left( \\sqrt{4x^2 + 6x - 1} - \\sqrt{4x^2 - 2x + 3} \\right)$!",
          "solution": "Langkah 1: Identifikasi parameter: $a = 4, b = 6, c = -1, p = -2, q = 3$.\nLangkah 2: Karena koefisien $x^2$ sama ($a = p = 4$), gunakan rumus $\\frac{b - p}{2\\sqrt{a}}$.\nLangkah 3: $\\frac{6 - (-2)}{2\\sqrt{4}} = \\frac{8}{2(2)} = \\frac{8}{4} = 2$.\nKesimpulan: Nilai limit adalah $2$."
        },
        {
          "problem": "Hitung nilai dari $\\lim_{x \\to \\infty} \\left( 2x - 1 - \\sqrt{4x^2 - 6x + 2} \\right)$!",
          "solution": "Langkah 1: Ubah $2x - 1$ ke bentuk akar: $\\sqrt{(2x - 1)^2} = \\sqrt{4x^2 - 4x + 1}$.\nLangkah 2: $\\lim_{x \\to \\infty} (\\sqrt{4x^2 - 4x + 1} - \\sqrt{4x^2 - 6x + 2})$.\nLangkah 3: $a = 4, b = -4, p = -6 \\implies \\frac{-4 - (-6)}{2\\sqrt{4}} = \\frac{2}{4} = \\frac{1}{2}$.\nKesimpulan: Nilai limit adalah $\\frac{1}{2}$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Limit Aljabar & Trigonometri 5: Limit di Ketakhinggaan Aljabar. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Pecahan Polinomial x \\to inf, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Rumus Cepat Selisih Akar, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Limit Aljabar & Trigonometri 5: Limit di Ketakhinggaan Aljabar, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Pecahan Polinomial x \\to inf.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Rumus Cepat Selisih Akar.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Selesaikan $\\lim_{x \\to \\infty} (\\sqrt{9x^2 + 12x} - 3x + 1)$!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Limit Aljabar & Trigonometri 5: Limit di Ketakhinggaan Aljabar.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran Limit Aljabar & Trigonometri 5: Limit di Ketakhinggaan Aljabar menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Hitunglah nilai limit di ketakhinggaan rasional: $\\lim_{x \\to \\infty} \\frac{4x^3 - 2x + 7}{2x^3 + 5x^2 - 1}$!",
        "Tentukan nilai limit selisih bentuk akar: $\\lim_{x \\to \\infty} \\left( \\sqrt{4x^2 + 8x - 3} - (2x - 3) \\right)$!",
        "Hitunglah $\\lim_{x \\to \\infty} \\left( \\sqrt{9x^2 + 12x + 1} - \\sqrt{9x^2 - 6x + 5} \\right)$ dan buktikan rumus $\\frac{b-q}{2\\sqrt{a}}$!",
        "Hitung nilai limit tak hingga bentuk polinomial bertingkat: $\\lim_{x \\to \\infty} \\frac{(2x+1)^3 (3x-2)^2}{(x^2+1)(2x-1)^3}$!",
        "Tentukan nilai konstanta $p$ dan $q$ agar $\\lim_{x \\to \\infty} \\left( \\sqrt{4x^2 + px + 5} - (2x + q) \\right) = 3$!"
      ]
    },
    {
      "id": "P15",
      "bab": "Bab 2: Limit Aljabar & Trigonometri",
      "title": "Limit Aljabar & Trigonometri 6: Limit Ketakhinggaan Trigonometri & Asimtot",
      "obj": [
        "Menyelesaikan limit trigonometri menuju tak hingga menggunakan substitusi $y = \\frac{1}{x} \\to 0$.",
        "Menentukan persamaan asimtot datar ($y = \\lim_{x \\to \\pm\\infty} f(x)$) dan asimtot tegak ($x = c$).",
        "Menggambar sketsa perilaku grafik kurva rasional berdasarkan garis asimtot."
      ],
      "hook": "Garis asimtot berlaku seperti dinding tak kasatmata yang memandu arah kurva tanpa pernah tersentuh sejauh apa pun kurva melaju.",
      "toolkit": [
        {
          "name": "Transformasi y = 1/x",
          "math": "$$\\text{Misalkan } y = \\frac{1}{x} \\implies \\text{saat } x \\to \\infty, \\quad y \\to 0$$"
        },
        {
          "name": "Asimtot Datar",
          "math": "$$y = \\lim_{x \\to \\infty} f(x)$$"
        },
        {
          "name": "Asimtot Tegak",
          "math": "$$x = c \\quad \\text{di mana penyebut } = 0$$"
        },
        {
          "name": "Identitas Trigonometri Sudut Ganda",
          "math": "$$1 - \\cos(ax) = 2\\sin^2\\left(\\frac{ax}{2}\\right)$$"
        },
        {
          "name": "Teorema Apit Limit Fungsi",
          "math": "$$g(x) \\le f(x) \\le h(x) \\implies \\lim f(x) = L$$"
        }
      ],
      "examples": [
        {
          "problem": "Hitung nilai dari $\\lim_{x \\to \\infty} x \\sin\\left(\\frac{2}{x}\\right)$!",
          "solution": "Langkah 1: Misalkan $y = \\frac{1}{x} \\implies x = \\frac{1}{y}$. Saat $x \\to \\infty$, $y \\to 0$.\nLangkah 2: $\\lim_{y \\to 0} \\frac{1}{y} \\sin(2y) = \\lim_{y \\to 0} \\frac{\\sin 2y}{y}$.\nLangkah 3: Nilai limit adalah $2$.\nKesimpulan: Nilai limit adalah $2$."
        },
        {
          "problem": "Hitung nilai dari $\\lim_{x \\to \\infty} x^2 \\left( 1 - \\cos\\left(\\frac{2}{x}\\right) \\right)$!",
          "solution": "Langkah 1: Misalkan $y = \\frac{1}{x} \\to 0 \\implies \\lim_{y \\to 0} \\frac{1 - \\cos(2y)}{y^2}$.\nLangkah 2: Ubah $1 - \\cos(2y) = 2\\sin^2(y)$.\nLangkah 3: $\\lim_{y \\to 0} \\frac{2\\sin^2 y}{y^2} = 2(1)^2 = 2$.\nKesimpulan: Nilai limit adalah $2$."
        },
        {
          "problem": "Tentukan asimtot datar dan asimtot tegak dari fungsi kurva $f(x) = \\frac{3x - 5}{x + 2}$!",
          "solution": "Langkah 1: Menggunakan rumus Transformasi y = 1/x, analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nLangkah 1 (Asimtot Datar): $y = \\lim_{x \\to \\infty} \\frac{3x - 5}{x + 2} = 3$.\nLangkah 2 (Asimtot Tegak): Pembuat nol penyebut $x + 2 = 0 \\implies x = -2$.\nKesimpulan: Asimtot datar adalah $y = 3$ dan asimtot tegak adalah $x = -2$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Limit Aljabar & Trigonometri 6: Limit Ketakhinggaan Trigonometri & Asimtot. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Transformasi y = 1/x, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Asimtot Datar, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Limit Aljabar & Trigonometri 6: Limit Ketakhinggaan Trigonometri & Asimtot, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Transformasi y = 1/x.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Asimtot Datar.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Tentukan seluruh asimtot datar dan asimtot tegak kurva $f(x) = \\frac{2x^2 + 1}{x^2 - 9}$!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Limit Aljabar & Trigonometri 6: Limit Ketakhinggaan Trigonometri & Asimtot.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran Limit Aljabar & Trigonometri 6: Limit Ketakhinggaan Trigonometri & Asimtot menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Hitunglah nilai $\\lim_{x \\to \\infty} x \\cdot \\sin\\left(\\frac{3}{x}\\right) \\cdot \\cos\\left(\\frac{2}{x}\\right)$ dengan substitusi $y = \\frac{1}{x}$!",
        "Tentukan asimtot datar dan asimtot tegak dari kurva $f(x) = \\frac{3x^2 + 2x - 1}{x^2 - 4}$!",
        "Tentukan persamaan asimtot miring dari $f(x) = \\frac{2x^3 - 5x^2 + 4}{x^2 - 1}$ menggunakan pembagian bersusun!",
        "Hitung nilai limit trigonometri di tak hingga: $\\lim_{x \\to \\infty} x^2 \\left( 1 - \\cos(\\frac{2}{x}) \\right)$!",
        "Analisislah perilaku asimtotik fungsi gelombang $f(x) = \\frac{\\sin(x)}{x}$ saat $x \\to \\pm\\infty$!"
      ]
    },
    {
      "id": "P16",
      "bab": "Bab 2: Limit Aljabar & Trigonometri",
      "title": "Asesmen Sumatif Bab 2: Limit & Grand Review ASTS",
      "obj": [
        "Mengevaluasi penguasaan materi kalkulus limit aljabar, trigonometri, dan ketakhinggaan (P10 - P15).",
        "Mempersiapkan strategi dan kecepatan pengerjaan Asesmen Sumatif Tengah Semester (ASTS CBT).",
        "Mengidentifikasi kesalahan umum pada bentuk tak tentu dan transformasi trigonometri."
      ],
      "hook": "Simulasi asesmen CBT komprehensif Bab 2 untuk memastikan kesiapan 100% menghadapi ASTS Matematika Peminatan.",
      "toolkit": [
        {
          "name": "Matriks Uji Kompetensi Bab 2",
          "math": "$$\\text{Limit Aljabar (25\\%)} + \\text{Limit Trig 0/0 (45\\%)} + \\text{Limit Tak Hingga \\& Asimtot (30\\%)}$$"
        },
        {
          "name": "Kaidah L'Hopital",
          "math": "$$\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)} \\quad \\left(\\text{khusus bentuk } \\frac{0}{0} \\text{ atau } \\frac{\\infty}{\\infty}\\right)$$"
        },
        {
          "name": "Identitas Trigonometri Sudut Ganda",
          "math": "$$1 - \\cos(ax) = 2\\sin^2\\left(\\frac{ax}{2}\\right)$$"
        },
        {
          "name": "Teorema Apit Limit Fungsi",
          "math": "$$g(x) \\le f(x) \\le h(x) \\implies \\lim f(x) = L$$"
        }
      ],
      "examples": [
        {
          "problem": "Hitung nilai dari $\\lim_{x \\to 0} \\frac{1 - \\cos(6x)}{x \\tan(3x)}$!",
          "solution": "Langkah 1: $1 - \\cos(6x) = 2\\sin^2(3x)$.\nLangkah 2: $\\lim_{x \\to 0} \\frac{2\\sin(3x)\\sin(3x)}{x \\tan(3x)} = 2 \\left(\\frac{3}{1}\\right) \\left(\\frac{3}{3}\\right) = 2 \\times 3 \\times 1 = 6$.\nKesimpulan: Nilai limit adalah $6$."
        },
        {
          "problem": "Hitung nilai dari $\\lim_{x \\to 3} \\frac{x^2 - x - 6}{x - 3}$!",
          "solution": "Langkah 1: Faktorkan pembilang $x^2 - x - 6 = (x - 3)(x + 2)$.\nLangkah 2: $\\lim_{x \\to 3} \\frac{(x - 3)(x + 2)}{x - 3} = \\lim_{x \\to 3} (x + 2) = 3 + 2 = 5$.\nKesimpulan: Nilai limit adalah $5$."
        },
        {
          "problem": "Hitung nilai dari $\\lim_{x \\to \\infty} \\left( \\sqrt{9x^2 + 12x} - 3x + 1 \\right)$!",
          "solution": "Langkah 1: Tulis sebagai $\\sqrt{9x^2 + 12x} - \\sqrt{(3x - 1)^2} = \\sqrt{9x^2 + 12x} - \\sqrt{9x^2 - 6x + 1}$.\nLangkah 2: Gunakan $\\frac{b - p}{2\\sqrt{a}} = \\frac{12 - (-6)}{2\\sqrt{9}} = \\frac{18}{2(3)} = \\frac{18}{6} = 3$.\nKesimpulan: Nilai limit adalah $3$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Asesmen Sumatif Bab 2: Limit & Grand Review ASTS. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Matriks Uji Kompetensi Bab 2, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Kaidah L'Hopital, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Asesmen Sumatif Bab 2: Limit & Grand Review ASTS, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Matriks Uji Kompetensi Bab 2.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Kaidah L'Hopital.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Bedah simulasi paket 10 soal CBT Bab 2 dan selesaikan seluruh variasi tipe soalnya!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Asesmen Sumatif Bab 2: Limit & Grand Review ASTS.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran Asesmen Sumatif Bab 2: Limit & Grand Review ASTS menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Hitunglah nilai $\\lim_{x \\to 0} \\frac{x^2 \\cot(3x)}{\\sin(2x)}$ secara analitis terstruktur!",
        "Tentukan nilai limit komposit: $\\lim_{x \\to \\infty} x^2 \\left( 1 - \\cos\\left(\\frac{4}{x}\\right) \\right)$!",
        "Tentukan nilai $a$ dan $b$ agar $f(x) = \\begin{cases} \\frac{\\sin(ax)}{x}, & x < 0 \\\\ b + 2, & x = 0 \\\\ x^2 + 3a - 1, & x > 0 \\end{cases}$ kontinu di seluruh $\\mathbb{R}$!",
        "Hitung nilai limit bentuk eksponensial Euler: $\\lim_{x \\to \\infty} \\left(1 + \\frac{3}{x}\\right)^{2x}$!",
        "Buktikan kontinuitas fungsi $g(x) = |x| \\cdot \\cos(x)$ di titik $x = 0$ menggunakan limit kiri dan kanan!"
      ]
    },
    {
      "id": "P17",
      "bab": "Bab 3: Turunan Fungsi Trigonometri",
      "title": "Turunan Fungsi Trigonometri 1: Konsep Dasar Turunan Sin, Cos, Tan",
      "obj": [
        "Memahami turunan pertama fungsi sinus, cosinus, dan tangen.",
        "Menerapkan sifat kelinieran turunan pada kombinasi aljabar dan trigonometri.",
        "Mengevaluasi nilai turunan pertama pada sudut tertentu $f'(x_0)$."
      ],
      "hook": "Laju perubahan simpangan getaran pegas terhadap waktu menghasilkan fungsi kecepatan harmonik secara turunan kalkulus presisi.",
      "toolkit": [
        {
          "name": "Turunan Fungsi Sinus Dasar",
          "math": "$$\\frac{d}{dx}[\\sin x] = \\cos x$$"
        },
        {
          "name": "Turunan Fungsi Cosinus Dasar",
          "math": "$$\\frac{d}{dx}[\\cos x] = -\\sin x$$"
        },
        {
          "name": "Turunan Fungsi Tangen",
          "math": "$$\\frac{d}{dx}[\\tan x] = \\sec^2 x$$"
        },
        {
          "name": "Turunan Fungsi Secan",
          "math": "$$\\frac{d}{dx}[\\sec x] = \\sec x \\tan x$$"
        },
        {
          "name": "Turunan Fungsi Cosecan",
          "math": "$$\\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$$"
        },
        {
          "name": "Turunan Fungsi Cotangen",
          "math": "$$\\frac{d}{dx}[\\cot x] = -\\csc^2 x$$"
        },
        {
          "name": "Kaidah Rantai Komposisi Sudut Linear",
          "math": "$$\\frac{d}{dx}[\\sin(ax+b)] = a\\cos(ax+b), \\quad \\frac{d}{dx}[\\cos(ax+b)] = -a\\sin(ax+b)$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan turunan pertama dari fungsi trigonometri: $$f(x) = 3\\sin x - 2\\cos x$$",
          "solution": "Langkah 1: Menggunakan rumus Turunan Fungsi Sinus Dasar, $\\frac{d}{dx}[\\sin x] = \\cos x$.\nLangkah 2: Menggunakan rumus Turunan Fungsi Cosinus Dasar, $\\frac{d}{dx}[\\cos x] = -\\sin x$.\nLangkah 3: Terapkan sifat linearitas turunan aljabar:\n$$f'(x) = 3(\\cos x) - 2(-\\sin x) = 3\\cos x + 2\\sin x$$\nKesimpulan: Turunan pertama dari $f(x)$ adalah $f'(x) = 3\\cos x + 2\\sin x$."
        },
        {
          "problem": "Tentukan turunan pertama dari fungsi: $$f(x) = 4\\tan(3x - \\pi)$$",
          "solution": "Langkah 1: Menggunakan rumus Turunan Fungsi Tangen, turunan dari $\\tan u$ adalah $\\sec^2 u \\cdot u'$.\nLangkah 2: Tentukan turunan sudut dalam $u = 3x - \\pi \\implies u' = 3$.\nLangkah 3: Terapkan kaidah rantai:\n$$f'(x) = 4 \\cdot \\sec^2(3x - \\pi) \\cdot 3 = 12\\sec^2(3x - \\pi)$$\nKesimpulan: Turunan pertama dari $f(x)$ adalah $f'(x) = 12\\sec^2(3x - \\pi)$."
        },
        {
          "problem": "Tentukan turunan pertama dari fungsi kombinasi secan dan cotangen: $$f(x) = 2\\sec x + \\cot(2x)$$",
          "solution": "Langkah 1: Menggunakan rumus Turunan Fungsi Secan, $\\frac{d}{dx}[2\\sec x] = 2\\sec x \\tan x$.\nLangkah 2: Menggunakan rumus Turunan Fungsi Cotangen dan kaidah rantai, $\\frac{d}{dx}[\\cot(2x)] = -\\csc^2(2x) \\cdot 2 = -2\\csc^2(2x)$.\nLangkah 3: Gabungkan kedua suku:\n$$f'(x) = 2\\sec x \\tan x - 2\\csc^2(2x)$$\nKesimpulan: Turunan dari fungsi tersebut adalah $f'(x) = 2\\sec x \\tan x - 2\\csc^2(2x)$."
        },
        {
          "problem": "Tentukan nilai turunan $f'(x)$ pada $x = \\frac{\\pi}{4}$ jika diketahui: $$f(x) = \\frac{\\sin x}{1 + \\cos x}$$",
          "solution": "Langkah 1: Gunakan aturan hasil bagi aljabar $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$ dengan $u = \\sin x \\implies u' = \\cos x$ dan $v = 1 + \\cos x \\implies v' = -\\sin x$.\nLangkah 2: Susun turunan:\n$$f'(x) = \\frac{\\cos x(1 + \\cos x) - \\sin x(-\\sin x)}{(1 + \\cos x)^2} = \\frac{\\cos x + \\cos^2 x + \\sin^2 x}{(1 + \\cos x)^2}$$\nLangkah 3: Gunakan identitas trigonometri $\\cos^2 x + \\sin^2 x = 1$:\n$$f'(x) = \\frac{\\cos x + 1}{(1 + \\cos x)^2} = \\frac{1}{1 + \\cos x}$$\nLangkah 4: Evaluasi pada $x = \\frac{\\pi}{4}$:\n$$f'\\left(\\frac{\\pi}{4}\\right) = \\frac{1}{1 + \\frac{1}{2}\\sqrt{2}} = \\frac{2}{2 + \\sqrt{2}} = 2 - \\sqrt{2}$$\nKesimpulan: Nilai $f'\\left(\\frac{\\pi}{4}\\right) = 2 - \\sqrt{2}$."
        },
        {
          "problem": "Tentukan turunan pertama dari fungsi perpangkatan trigonometri (HOTS): $$f(x) = \\cos^3(2x^2 + 1)$$",
          "solution": "Langkah 1: Identifikasi fungsi komposisi berantai 3 lapis: $f(x) = [u(x)]^3$ di mana $u(x) = \\cos(v(x))$ dan $v(x) = 2x^2 + 1$.\nLangkah 2: Turunkan pangkat terluar: $3\\cos^2(2x^2 + 1)$.\nLangkah 3: Menggunakan rumus Turunan Fungsi Cosinus Dasar, kalikan dengan turunan cosinus: $-\\sin(2x^2 + 1)$.\nLangkah 4: Kalikan dengan turunan sudut terdalam $v'(x) = 4x$:\n$$f'(x) = 3\\cos^2(2x^2 + 1) \\cdot [-\\sin(2x^2 + 1)] \\cdot (4x)$$\nLangkah 5: Sederhanakan bentuk aljabar:\n$$f'(x) = -12x \\sin(2x^2 + 1) \\cos^2(2x^2 + 1)$$\nKesimpulan: Turunan pertama dari $f(x)$ adalah $f'(x) = -12x \\sin(2x^2 + 1) \\cos^2(2x^2 + 1)$."
        }
      ],
      "btc": "Kelompok VNPS: Buktikan bahwa turunan dari $\\tan(x)$ adalah $\\sec^2(x)$ menggunakan aturan pembagian $\\frac{\\sin x}{\\cos x}$!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Turunan Fungsi Trigonometri 1: Konsep Dasar Turunan Sin, Cos, Tan.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT.",
          "Turunan fungsi trigonometri yang berawalan huruf 'C' (Cos, Csc, Cot) selalu menghasilkan tanda minus (-).",
          "Kesalahan paling sering: Lupa mengalikan dengan turunan fungsi sudut dalam saat mengerjakan turunan komposisi rantai."
        ],
        "islamic": "Pembelajaran Turunan Fungsi Trigonometri 1: Konsep Dasar Turunan Sin, Cos, Tan menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Tentukan turunan pertama $f'(x)$ dari $f(x) = 3\\sin(x) - 4\\cos(x) + 2\\tan(x)$!",
        "Buktikan dari definisi limit turunan $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$ bahwa $(\\sin x)' = \\cos x$!",
        "Jika $f(x) = \\sec(x)$, buktikan bahwa $f'(x) = \\sec(x)\\tan(x)$ dan tentukan nilai $f'(\\frac{\\pi}{3})$!",
        "Tentukan turunan pertama dari fungsi trigonometri dasar $g(x) = 2\\csc(x) - 5\\cot(x)$!",
        "Tentukan nilai $x$ pada interval $[0, 2\\pi]$ di mana turunan dari $f(x) = \\sin(x) + \\cos(x)$ bernilai nol ($f'(x) = 0$)!"
      ]
    },
    {
      "id": "P18",
      "bab": "Bab 3: Turunan Fungsi Trigonometri",
      "title": "Turunan Fungsi Trigonometri 2: Aturan Rantai Komposisi f(g(x))",
      "obj": [
        "Memahami aturan rantai diferensiasi untuk fungsi komposisi trigonometri $f(g(x))$.",
        "Menentukan turunan dari $\\sin(ax+b)$, $\\cos(ax+b)$, dan $\\tan(ax^2+bx)$.",
        "Mengevaluasi nilai turunan fungsi komposisi pada titik tertentu."
      ],
      "hook": "Bagaikan membuka lapisan bawang, aturan rantai menurunkan lapisan fungsi trigonometri luar terlebih dahulu, lalu dikalikan dengan turunan fungsi aljabar di dalamnya.",
      "toolkit": [
        {
          "name": "Aturan Rantai Komposisi",
          "math": "$$\\frac{d}{dx}[\\sin(u)] = \\cos(u) \\cdot u', \\quad \\frac{d}{dx}[\\cos(u)] = -\\sin(u) \\cdot u'$$"
        },
        {
          "name": "Linear Trigonometri",
          "math": "$$\\frac{d}{dx}[\\sin(ax+b)] = a\\cos(ax+b), \\quad \\frac{d}{dx}[\\cos(ax+b)] = -a\\sin(ax+b)$$"
        },
        {
          "name": "Identitas Trigonometri Sudut Ganda",
          "math": "$$1 - \\cos(ax) = 2\\sin^2\\left(\\frac{ax}{2}\\right)$$"
        },
        {
          "name": "Teorema Apit Limit Fungsi",
          "math": "$$g(x) \\le f(x) \\le h(x) \\implies \\lim f(x) = L$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan turunan pertama dari $f(x) = \\sin(3x^2 - 5)$!",
          "solution": "Langkah 1: Misalkan $u = 3x^2 - 5 \\implies u' = 6x$.\nLangkah 2: Turunan luar: $\\cos(u) = \\cos(3x^2 - 5)$.\nLangkah 3: $f'(x) = \\cos(3x^2 - 5) \\cdot 6x = 6x\\cos(3x^2 - 5)$.\nKesimpulan: Turunan pertamanya adalah $f'(x) = 6x\\cos(3x^2 - 5)$."
        },
        {
          "problem": "Jika $f(x) = \\cos(4x + \\pi/3)$, tentukan nilai dari $f'(\\pi/6)$!",
          "solution": "Langkah 1: $f'(x) = -4\\sin(4x + \\pi/3)$.\nLangkah 2: Evaluasi di $x = \\pi/6$: $4(\\pi/6) + \\pi/3 = 2\\pi/3 + \\pi/3 = \\pi$.\nLangkah 3: $f'(\\pi/6) = -4\\sin(\\pi) = -4(0) = 0$.\nKesimpulan: Nilai $f'(\\pi/6) = 0$."
        },
        {
          "problem": "Tentukan turunan pertama dari $f(x) = \\tan(5x - 2)$!",
          "solution": "Langkah 1: Misalkan $u = 5x - 2 \\implies u' = 5$.\nLangkah 2: $f'(x) = \\sec^2(5x - 2) \\cdot 5 = 5\\sec^2(5x - 2)$.\nKesimpulan: Turunan pertamanya adalah $f'(x) = 5\\sec^2(5x - 2)$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Turunan Fungsi Trigonometri 2: Aturan Rantai Komposisi f(g(x)). Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Aturan Rantai Komposisi, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Linear Trigonometri, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Turunan Fungsi Trigonometri 2: Aturan Rantai Komposisi f(g(x)), selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Aturan Rantai Komposisi.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Linear Trigonometri.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Tentukan turunan dari $f(x) = \\cos(\\sqrt{x^2 + 1})$ menggunakan aturan rantai bertingkat!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Turunan Fungsi Trigonometri 2: Aturan Rantai Komposisi f(g(x)).",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran Turunan Fungsi Trigonometri 2: Aturan Rantai Komposisi f(g(x)) menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Tentukan turunan pertama dari $y = \\sin(4x^3 - 5x + 1)$ menggunakan Aturan Rantai Leibnitz $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$!",
        "Jika $f(x) = \\cos(2x - \\frac{\\pi}{3})$, tentukan gradien garis singgung kurva di absis $x = \\frac{\\pi}{2}$!",
        "Partikel bergerak dengan posisi $s(t) = 4\\cos(3t + \\frac{\\pi}{6})$. Tentukan kecepatan $v(t)$ dan percepatan $a(t)$!",
        "Tentukan turunan pertama dari $y = \\tan(\\sqrt{2x^2 + 1})$!",
        "Buktikan bahwa jika $y = \\sin(kx)$, maka turunan ke-4 memenuhi $y^{(4)} = k^4 y$!"
      ]
    },
    {
      "id": "P19",
      "bab": "Bab 3: Turunan Fungsi Trigonometri",
      "title": "Turunan Fungsi Trigonometri 3: Aturan Rantai Pangkat u(x)^n",
      "obj": [
        "Menentukan turunan fungsi berpangkat trigonometri $f(x) = \\sin^n(u(x))$ dan $\\cos^n(u(x))$.",
        "Menerapkan aturan rantai 3 lapis (Pangkat $\\to$ Trigonometri $\\to$ Aljabar).",
        "Menyederhanakan hasil turunan menggunakan identitas sudut ganda $\\sin(2u) = 2\\sin u \\cos u$."
      ],
      "hook": "Menghitung turunan $f(x) = \\sin^4(3x)$ melibatkan 3 tingkatan diferensiasi berurutan dalam satu baris ekspresi matematis.",
      "toolkit": [
        {
          "name": "Pangkat Trigonometri",
          "math": "$$\\frac{d}{dx}[\\sin^n(u)] = n \\sin^{n-1}(u) \\cos(u) \\cdot u'$$"
        },
        {
          "name": "Identitas Penyederhanaan",
          "math": "$$2\\sin(u)\\cos(u) = \\sin(2u)$$"
        },
        {
          "name": "Identitas Trigonometri Sudut Ganda",
          "math": "$$1 - \\cos(ax) = 2\\sin^2\\left(\\frac{ax}{2}\\right)$$"
        },
        {
          "name": "Teorema Apit Limit Fungsi",
          "math": "$$g(x) \\le f(x) \\le h(x) \\implies \\lim f(x) = L$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan turunan pertama dari $f(x) = \\sin^3(2x)$!",
          "solution": "Langkah 1: Menggunakan rumus Pangkat Trigonometri, analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nLangkah 1 (Pangkat): $3\\sin^2(2x)$.\nLangkah 2 (Trigonometri): $\\cos(2x)$.\nLangkah 3 (Sudut): Turunan dari $2x$ adalah $2$.\nLangkah 4: $f'(x) = 3\\sin^2(2x) \\cdot \\cos(2x) \\cdot 2 = 6\\sin^2(2x)\\cos(2x)$.\nKesimpulan: Turunan pertamanya adalah $f'(x) = 6\\sin^2(2x)\\cos(2x)$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Tentukan turunan pertama dari $f(x) = \\cos^4(3x)$!",
          "solution": "Langkah 1: $f'(x) = 4\\cos^3(3x) \\cdot (-\\sin(3x)) \\cdot 3$.\nLangkah 2: $f'(x) = -12\\cos^3(3x)\\sin(3x)$.\nKesimpulan: Turunan pertamanya adalah $f'(x) = -12\\cos^3(3x)\\sin(3x)$."
        },
        {
          "problem": "Jika $f(x) = \\sin^2(x)$, buktikan bahwa $f'(x) = \\sin(2x)$!",
          "solution": "Langkah 1: $f'(x) = 2\\sin(x) \\cdot \\cos(x) \\cdot 1$.\nLangkah 2: Berdasarkan identitas sudut ganda, $2\\sin(x)\\cos(x) = \\sin(2x)$.\nKesimpulan: Terbukti bahwa $f'(x) = \\sin(2x)$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Turunan Fungsi Trigonometri 3: Aturan Rantai Pangkat u(x)^n. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Pangkat Trigonometri, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Identitas Penyederhanaan, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Turunan Fungsi Trigonometri 3: Aturan Rantai Pangkat u(x)^n, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Pangkat Trigonometri.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Identitas Penyederhanaan.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Tentukan nilai $f'(\\pi/6)$ untuk $f(x) = \\cos^3(2x)$!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Turunan Fungsi Trigonometri 3: Aturan Rantai Pangkat u(x)^n.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran Turunan Fungsi Trigonometri 3: Aturan Rantai Pangkat u(x)^n menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Tentukan turunan pertama dari fungsi trigonometri berpangkat: $f(x) = 4\\sin^3(2x - 1)$!",
        "Jika $g(x) = \\cos^4(3x^2)$, hitunglah nilai $g'(\\sqrt{\\pi})$!",
        "Tentukan persamaan garis singgung pada kurva $y = \\tan^2(x)$ di titik dengan absis $x = \\frac{\\pi}{4}$!",
        "Tentukan turunan pertama dari fungsi $f(x) = \\sqrt{\\sin(2x) + \\cos(2x)}$!",
        "Tentukan turunan pertama dari fungsi implisit $\\sin(x) + \\cos(y) = 2xy$ terhadap variabel $x$!"
      ]
    },
    {
      "id": "P20",
      "bab": "Bab 3: Turunan Fungsi Trigonometri",
      "title": "Turunan Fungsi Trigonometri 4: Perkalian, Pembagian, & Turunan Tinggi",
      "obj": [
        "Menerapkan aturan perkalian $(uv)' = u'v + uv'$ dan pembagian $(\\frac{u}{v})' = \\frac{u'v - uv'}{v^2}$ pada fungsi trigonometri.",
        "Menentukan turunan kedua $f''(x)$ dan turunan tingkat tinggi.",
        "Menyelesaikan persamaan diferensiasi harmonik sederhana $f''(x) + \\omega^2 f(x) = 0$."
      ],
      "hook": "Turunan kedua $f''(x)$ menentukan percepatan getaran dan kecekungan kurva gerak harmonik osilator.",
      "toolkit": [
        {
          "name": "Aturan Perkalian",
          "math": "$$(u \\cdot v)' = u' v + u v'$$"
        },
        {
          "name": "Aturan Pembagian",
          "math": "$$\\left(\\frac{u}{v}\\right)' = \\frac{u' v - u v'}{v^2}$$"
        },
        {
          "name": "Turunan Kedua",
          "math": "$$f''(x) = \\frac{d}{dx}[f'(x)]$$"
        },
        {
          "name": "Turunan Perkalian Fungsi Aljabar",
          "math": "$$\\frac{d}{dx}[u \\cdot v] = u'v + uv'$$"
        },
        {
          "name": "Turunan Pembagian Fungsi Aljabar",
          "math": "$$\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{u'v - uv'}{v^2}$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan turunan pertama dari $f(x) = \\frac{\\sin x}{1 + \\cos x}$!",
          "solution": "Langkah 1: $u = \\sin x \\implies u' = \\cos x$; $v = 1 + \\cos x \\implies v' = -\\sin x$.\nLangkah 2: $f'(x) = \\frac{\\cos x(1 + \\cos x) - \\sin x(-\\sin x)}{(1 + \\cos x)^2} = \\frac{\\cos x + \\cos^2 x + \\sin^2 x}{(1 + \\cos x)^2}$.\nLangkah 3: Karena $\\cos^2 x + \\sin^2 x = 1$, pembilang menjadi $\\cos x + 1 = 1 + \\cos x$.\nLangkah 4: $f'(x) = \\frac{1 + \\cos x}{(1 + \\cos x)^2} = \\frac{1}{1 + \\cos x}$.\nKesimpulan: Turunan pertamanya adalah $f'(x) = \\frac{1}{1 + \\cos x}$."
        },
        {
          "problem": "Tentukan turunan kedua $f''(x)$ dari $f(x) = \\sin(3x)$!",
          "solution": "Langkah 1: Menggunakan rumus Aturan Perkalian, analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nLangkah 1 (Turunan Pertama): $f'(x) = 3\\cos(3x)$.\nLangkah 2 (Turunan Kedua): $f''(x) = 3(-3\\sin(3x)) = -9\\sin(3x)$.\nKesimpulan: Turunan keduanya adalah $f''(x) = -9\\sin(3x)$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Jika $f(x) = 2\\cos(x) + \\sin(2x)$, tentukan nilai dari $f''(\\pi/2)$!",
          "solution": "Langkah 1: $f'(x) = -2\\sin(x) + 2\\cos(2x)$.\nLangkah 2: $f''(x) = -2\\cos(x) - 4\\sin(2x)$.\nLangkah 3: Evaluasi di $x = \\pi/2$: $f''(\\pi/2) = -2\\cos(\\pi/2) - 4\\sin(\\pi) = -2(0) - 4(0) = 0$.\nKesimpulan: Nilai $f''(\\pi/2) = 0$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Turunan Fungsi Trigonometri 4: Perkalian, Pembagian, & Turunan Tinggi. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Aturan Perkalian, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Aturan Pembagian, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Turunan Fungsi Trigonometri 4: Perkalian, Pembagian, & Turunan Tinggi, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Aturan Perkalian.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Aturan Pembagian.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Jika $y = A\\sin(2x) + B\\cos(2x)$, buktikan bahwa $y'' + 4y = 0$ untuk setiap konstanta $A$ dan $B$!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Turunan Fungsi Trigonometri 4: Perkalian, Pembagian, & Turunan Tinggi.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran Turunan Fungsi Trigonometri 4: Perkalian, Pembagian, & Turunan Tinggi menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Tentukan turunan pertama fungsi perkalian $f(x) = x^3 \\cdot \\sin(2x)$ menggunakan aturan perkalian $(uv)' = u'v + uv'$!",
        "Tentukan turunan pertama fungsi pembagian $g(x) = \\frac{\\sin(x)}{1 + \\cos(x)}$ dan sederhanakan bentuk akhirnya!",
        "Tentukan turunan kedua $f''(x)$ dari $f(x) = e^{2x} \\cdot \\cos(3x)$ dan buktikan $f''(x) - 4f'(x) + 13f(x) = 0$!",
        "Tentukan turunan pertama dari $y = \\frac{x^2 + 1}{\\tan(x)}$!",
        "Buktikan aturan turunan pembagian fungsi trigonometri $(\\cot x)' = -\\csc^2 x$ menggunakan aturan perkalian dan rantai!"
      ]
    },
    {
      "id": "P21",
      "bab": "Bab 3: Turunan Fungsi Trigonometri",
      "title": "Turunan Fungsi Trigonometri 5: Garis Singgung & Garis Normal",
      "obj": [
        "Menentukan gradien garis singgung $m = f'(x_1)$ pada kurva trigonometri.",
        "Menyusun persamaan garis singgung $y - y_1 = m(x - x_1)$.",
        "Menyusun persamaan garis normal $y - y_1 = -\\frac{1}{m}(x - x_1)$ yang tegak lurus garis singgung."
      ],
      "hook": "Ketinggian pasang surut air laut mengikuti kurva trigonometri $y = 2\\sin(t)$. Kemiringan tangen menentukan laju kenaikan air laut per jam.",
      "toolkit": [
        {
          "name": "Gradien Garis Singgung",
          "math": "$$m = f'(x_1)$$"
        },
        {
          "name": "Persamaan Garis Singgung",
          "math": "$$y - y_1 = m(x - x_1)$$"
        },
        {
          "name": "Persamaan Garis Normal",
          "math": "$$y - y_1 = -\\frac{1}{m}(x - x_1)$$"
        },
        {
          "name": "Turunan Perkalian Fungsi Aljabar",
          "math": "$$\\frac{d}{dx}[u \\cdot v] = u'v + uv'$$"
        },
        {
          "name": "Turunan Pembagian Fungsi Aljabar",
          "math": "$$\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{u'v - uv'}{v^2}$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan persamaan garis singgung kurva $f(x) = \\sin(x)$ di titik berabsis $x = \\pi/3$!",
          "solution": "Langkah 1: Ordinat $y_1 = \\sin(\\pi/3) = \\frac{1}{2}\\sqrt{3}$.\nLangkah 2: Turunan $f'(x) = \\cos(x) \\implies m = \\cos(\\pi/3) = \\frac{1}{2}$.\nLangkah 3: PGSL: $y - \\frac{1}{2}\\sqrt{3} = \\frac{1}{2}(x - \\pi/3) \\implies y = \\frac{1}{2}x - \\frac{\\pi}{6} + \\frac{1}{2}\\sqrt{3}$.\nKesimpulan: Persamaan garis singgung adalah $y = \\frac{1}{2}x - \\frac{\\pi}{6} + \\frac{\\sqrt{3}}{2}$."
        },
        {
          "problem": "Tentukan gradien garis singgung kurva $f(x) = 2\\cos(2x)$ di titik $x = \\pi/4$!",
          "solution": "Langkah 1: $f'(x) = 2(-2\\sin(2x)) = -4\\sin(2x)$.\nLangkah 2: Evaluasi di $x = \\pi/4$: $m = -4\\sin(2(\\pi/4)) = -4\\sin(\\pi/2) = -4(1) = -4$.\nKesimpulan: Gradien garis singgung adalah $m = -4$."
        },
        {
          "problem": "Tentukan persamaan garis normal kurva $f(x) = \\tan(x)$ di titik $(\\pi/4, 1)$!",
          "solution": "Langkah 1: $f'(x) = \\sec^2(x) \\implies m_{\\text{singgung}} = \\sec^2(\\pi/4) = 2$.\nLangkah 2: Gradien normal $m_n = -\\frac{1}{2}$.\nLangkah 3: Garis normal: $y - 1 = -\\frac{1}{2}(x - \\pi/4) \\implies y = -\\frac{1}{2}x + \\frac{\\pi}{8} + 1$.\nKesimpulan: Persamaan garis normal adalah $y = -\\frac{1}{2}x + \\frac{\\pi}{8} + 1$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Turunan Fungsi Trigonometri 5: Garis Singgung & Garis Normal. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Gradien Garis Singgung, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Persamaan Garis Singgung, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Turunan Fungsi Trigonometri 5: Garis Singgung & Garis Normal, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Gradien Garis Singgung.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Persamaan Garis Singgung.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Tentukan titik-titik pada kurva $f(x) = 2\\sin(x)$ untuk $0 \\le x \\le 2\\pi$ yang memiliki garis singgung horizontal ($m = 0$)!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Turunan Fungsi Trigonometri 5: Garis Singgung & Garis Normal.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran Turunan Fungsi Trigonometri 5: Garis Singgung & Garis Normal menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Tentukan persamaan garis singgung dan garis normal kurva $y = 2\\sin(2x) + 1$ di absis $x = \\frac{\\pi}{6}$!",
        "Garis singgung kurva $y = \\tan(x)$ di titik $A(\\frac{\\pi}{4}, 1)$ memotong sumbu-$X$ di titik $P(x_0, 0)$. Tentukan koordinat titik $P$!",
        "Tentukan persamaan garis singgung kurva $y = \\sin^2(x) - \\cos(x)$ yang sejajar dengan sumbu-$X$ pada interval $0 \\le x \\le 2\\pi$!",
        "Tentukan persamaan garis singgung kurva $y = \\sec(x)$ yang tegak lurus dengan garis $2x + 4y = 5$ di kuadran I!",
        "Tentukan titik-titik pada kurva $y = \\cos(2x)$ yang garis singgungnya memiliki kemiringan maksimum!"
      ]
    },
    {
      "id": "P22",
      "bab": "Bab 3: Turunan Fungsi Trigonometri",
      "title": "Turunan Fungsi Trigonometri 6: Uji Kemonotonan (Fungsi Naik & Turun)",
      "obj": [
        "Menggunakan turunan pertama untuk menguji kemonotonan kurva trigonometri.",
        "Menentukan interval di mana kurva naik ($f'(x) > 0$) dan interval kurva turun ($f'(x) < 0$).",
        "Menganalisis tanda interval pada garis bilangan periodik trigonometri."
      ],
      "hook": "Dalam analisis pasar dan sinyal audio, mendeteksi interval di mana intensitas sedang naik ($f'>0$) atau turun ($f'<0$) sangat penting untuk pengoptimalan filter.",
      "toolkit": [
        {
          "name": "Syarat Fungsi Selalu Naik",
          "math": "$$f'(x) > 0 \\quad \\text{pada interval } I$$"
        },
        {
          "name": "Syarat Fungsi Selalu Turun",
          "math": "$$f'(x) < 0 \\quad \\text{pada interval } I$$"
        },
        {
          "name": "Titik dan Nilai Stasioner",
          "math": "$$f'(x) = 0 \\implies x = c \\quad [\\text{Titik Stasioner } (c, f(c))]$$"
        },
        {
          "name": "Uji Kecekungan Kurva Terbuka ke Atas",
          "math": "$$f''(x) > 0 \\implies \\text{Kurva Cekung ke Atas } (\\cup)$$"
        },
        {
          "name": "Uji Kecekungan Kurva Terbuka ke Bawah",
          "math": "$$f''(x) < 0 \\implies \\text{Kurva Cekung ke Bawah } (\\cap)$$"
        },
        {
          "name": "Syarat Titik Belok Kurva",
          "math": "$$f''(x) = 0 \\quad \\text{dan terjadi perubahan tanda kecekungan}$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan interval di mana fungsi $f(x) = \\sin x$ naik pada interval $0 \\le x \\le 2\\pi$!",
          "solution": "Langkah 1: Tentukan turunan pertama fungsi: $f'(x) = \\cos x$.\nLangkah 2: Menggunakan rumus Syarat Fungsi Selalu Naik, tentukan syarat $f'(x) > 0 \\implies \\cos x > 0$.\nLangkah 3: Cari pembuat nol stasioner: $\\cos x = 0 \\implies x = \\frac{\\pi}{2}$ atau $x = \\frac{3\\pi}{2}$.\nLangkah 4: Uji tanda pada garis bilangan: $\\cos x > 0$ terjadi pada kuadran I dan IV, yaitu interval $0 \\le x < \\frac{\\pi}{2}$ dan $\\frac{3\\pi}{2} < x \\le 2\\pi$.\nKesimpulan: Fungsi $f(x) = \\sin x$ naik pada interval $\\left[0, \\frac{\\pi}{2}\\right) \\cup \\left(\\frac{3\\pi}{2}, 2\\pi\\right]$."
        },
        {
          "problem": "Tentukan interval turun dari fungsi $f(x) = \\cos(2x)$ pada domain $0 \\le x \\le \\pi$!",
          "solution": "Langkah 1: Tentukan turunan pertama: $f'(x) = -2\\sin(2x)$.\nLangkah 2: Menggunakan rumus Syarat Fungsi Selalu Turun, syarat $f'(x) < 0 \\implies -2\\sin(2x) < 0 \\implies \\sin(2x) > 0$.\nLangkah 3: Pembuat nol: $\\sin(2x) = 0 \\implies 2x = 0, \\pi, 2\\pi \\implies x = 0, \\frac{\\pi}{2}, \\pi$.\nLangkah 4: Interval di mana $\\sin(2x) > 0$ untuk $0 \\le x \\le \\pi$ adalah saat $0 < 2x < \\pi \\implies 0 < x < \\frac{\\pi}{2}$.\nKesimpulan: Fungsi $f(x)$ turun pada interval $0 < x < \\frac{\\pi}{2}$."
        },
        {
          "problem": "Tentukan titik stasioner dan jenisnya untuk fungsi $f(x) = \\sin x + \\cos x$ pada interval $0 \\le x \\le 2\\pi$!",
          "solution": "Langkah 1: Menggunakan rumus Titik dan Nilai Stasioner, $f'(x) = \\cos x - \\sin x = 0 \\implies \\sin x = \\cos x \\implies \\tan x = 1$.\nLangkah 2: Nilai $x$ yang memenuhi adalah $x = \\frac{\\pi}{4}$ dan $x = \\frac{5\\pi}{4}$.\nLangkah 3: Hitung turunan kedua untuk uji jenis: $f''(x) = -\\sin x - \\cos x$.\n- Untuk $x = \\frac{\\pi}{4} \\implies f''\\left(\\frac{\\pi}{4}\\right) = -\\sqrt{2} < 0$ (Maksimum Relatif dengan nilai $\\sqrt{2}$).\n- Untuk $x = \\frac{5\\pi}{4} \\implies f''\\left(\\frac{5\\pi}{4}\\right) = \\sqrt{2} > 0$ (Minimum Relatif dengan nilai $-\\sqrt{2}$).\nKesimpulan: Titik balik maksimum adalah $\\left(\\frac{\\pi}{4}, \\sqrt{2}\\right)$ dan titik balik minimum adalah $\\left(\\frac{5\\pi}{4}, -\\sqrt{2}\\right)$."
        },
        {
          "problem": "Tentukan interval kecekungan kurva $f(x) = \\sin(2x)$ cekung ke atas pada $0 \\le x \\le \\pi$!",
          "solution": "Langkah 1: Tentukan turunan kedua: $f'(x) = 2\\cos(2x) \\implies f''(x) = -4\\sin(2x)$.\nLangkah 2: Menggunakan rumus Uji Kecekungan Kurva Terbuka ke Atas, syarat $f''(x) > 0 \\implies -4\\sin(2x) > 0 \\implies \\sin(2x) < 0$.\nLangkah 3: Nilai $\\sin(2x) < 0$ pada $0 \\le x \\le \\pi$ terjadi saat $\\pi < 2x < 2\\pi \\implies \\frac{\\pi}{2} < x < \\pi$.\nKesimpulan: Kurva cekung ke atas pada interval $\\frac{\\pi}{2} < x < \\pi$."
        },
        {
          "problem": "Tentukan koordinat titik belok dari fungsi $f(x) = 2\\cos x + x$ pada interval $0 \\le x \\le 2\\pi$ (Standar UTBK)!",
          "solution": "Langkah 1: Menggunakan rumus Syarat Titik Belok Kurva, cari $f''(x) = 0$.\nLangkah 2: $f'(x) = -2\\sin x + 1 \\implies f''(x) = -2\\cos x$.\nLangkah 3: $-2\\cos x = 0 \\implies \\cos x = 0 \\implies x = \\frac{\\pi}{2}$ dan $x = \\frac{3\\pi}{2}$.\nLangkah 4: Periksa perubahan tanda $f''(x)$: pada $x = \\frac{\\pi}{2}$ terjadi perubahan tanda dari negatif ke positif, dan pada $x = \\frac{3\\pi}{2}$ dari positif ke negatif.\nLangkah 5: Tentukan koordinat titik: $f\\left(\\frac{\\pi}{2}\\right) = 0 + \\frac{\\pi}{2} = \\frac{\\pi}{2}$ dan $f\\left(\\frac{3\\pi}{2}\\right) = 0 + \\frac{3\\pi}{2} = \\frac{3\\pi}{2}$.\nKesimpulan: Titik belok kurva adalah $\\left(\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ dan $\\left(\\frac{3\\pi}{2}, \\frac{3\\pi}{2}\\right)$."
        }
      ],
      "btc": "Kelompok VNPS: Tentukan interval naik dan turun untuk $f(x) = \\sin^2(x)$ pada domain $0 \\le x \\le \\pi$!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Turunan Fungsi Trigonometri 6: Uji Kemonotonan (Fungsi Naik & Turun).",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT.",
          "Interval fungsi naik dan turun selalu menggunakan tanda pertidaksamaan tegas (< atau >), bukan tanda sama dengan.",
          "Kesalahan paling sering: Lupa menguji perubahan tanda pada turunan kedua untuk memastikan apakah suatu titik stasioner benar-benar titik belok."
        ],
        "islamic": "Pembelajaran Turunan Fungsi Trigonometri 6: Uji Kemonotonan (Fungsi Naik & Turun) menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Tentukan interval fungsi naik dan turun dari $f(x) = \\sin(2x)$ pada interval $0 \\le x \\le \\pi$!",
        "Tentukan interval di mana kurva $f(x) = \\cos(x) + \\sqrt{3}\\sin(x)$ monoton naik pada interval $[0, 2\\pi]$!",
        "Buktikan bahwa fungsi $f(x) = x - \\sin(x)$ tidak pernah monoton turun pada seluruh bilangan real $\\mathbb{R}$!",
        "Tentukan interval kemonotonan dari fungsi $g(x) = 2x + \\cos(2x)$ pada $[0, \\pi]$!",
        "Tentukan seluruh nilai kritis (*critical points*) dari fungsi $f(x) = \\sin^2(x) + \\cos(x)$ pada domain $[0, 2\\pi]$!"
      ]
    },
    {
      "id": "P23",
      "bab": "Bab 3: Turunan Fungsi Trigonometri",
      "title": "Turunan Fungsi Trigonometri 7: Titik Stasioner & Kecekungan Kurva",
      "obj": [
        "Menentukan titik stasioner (titik kritis) saat $f'(x) = 0$.",
        "Menerapkan uji turunan kedua untuk menentukan jenis stasioner: maksimum ($f'' < 0$), minimum ($f'' > 0$), atau belok.",
        "Menentukan interval kecekungan kurva (cekung ke atas $f'' > 0$ dan cekung ke bawah $f'' < 0$)."
      ],
      "hook": "Menemukan puncak simpangan getaran tertinggi (amplitudo) dan titik balik getaran merupakan kunci perancangan peredam gempa bangunan tinggi.",
      "toolkit": [
        {
          "name": "Titik Stasioner",
          "math": "$$f'(x) = 0$$"
        },
        {
          "name": "Uji Turunan Kedua",
          "math": "$$f''(x) < 0 \\implies \\text{Maksimum}, \\quad f''(x) > 0 \\implies \\text{Minimum}$$"
        },
        {
          "name": "Titik Belok & Kecekungan",
          "math": "$$f''(x) = 0 \\implies \\text{Titik Belok} \\quad | \\quad f''(x) > 0 \\implies \\text{Cekung Atas}$$"
        },
        {
          "name": "Turunan Perkalian Fungsi Aljabar",
          "math": "$$\\frac{d}{dx}[u \\cdot v] = u'v + uv'$$"
        },
        {
          "name": "Turunan Pembagian Fungsi Aljabar",
          "math": "$$\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{u'v - uv'}{v^2}$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan titik stasioner dan jenisnya untuk $f(x) = \\sin(2x)$ pada domain $0 \\le x \\le \\pi$!",
          "solution": "Langkah 1: $f'(x) = 2\\cos(2x) = 0 \\implies 2x = \\pi/2, 3\\pi/2 \\implies x = \\pi/4, 3\\pi/4$.\nLangkah 2: Turunan kedua $f''(x) = -4\\sin(2x)$.\nLangkah 3: Uji $x = \\pi/4$: $f''(\\pi/4) = -4(1) = -4 < 0 \\implies$ Titik Maksimum $(\\pi/4, 1)$.\nLangkah 4: Uji $x = 3\\pi/4$: $f''(3\\pi/4) = -4(-1) = 4 > 0 \\implies$ Titik Minimum $(3\\pi/4, -1)$.\nKesimpulan: Titik balik maksimum di $(\\pi/4, 1)$ dan minimum di $(3\\pi/4, -1)$."
        },
        {
          "problem": "Tentukan nilai maksimum mutlak dari $f(x) = 3\\cos(x) + 4\\sin(x)$!",
          "solution": "Langkah 1: Bentuk $a\\cos x + b\\sin x$ memiliki nilai maksimum $R = \\sqrt{a^2 + b^2}$.\nLangkah 2: $R = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.\nKesimpulan: Nilai maksimum mutlak fungsi adalah $5$."
        },
        {
          "problem": "Tentukan koordinat titik belok kurva $f(x) = \\sin(x)$ pada domain $0 \\le x \\le 2\\pi$!",
          "solution": "Langkah 1: $f'(x) = \\cos(x) \\implies f''(x) = -\\sin(x)$.\nLangkah 2: Syarat titik belok $f''(x) = 0 \\implies -\\sin(x) = 0 \\implies x = 0, \\pi, 2\\pi$.\nLangkah 3: Untuk $x = \\pi$, $y = \\sin(\\pi) = 0$.\nKesimpulan: Titik belok kurva pada interval terbuka adalah $(\\pi, 0)$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Turunan Fungsi Trigonometri 7: Titik Stasioner & Kecekungan Kurva. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Titik Stasioner, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Uji Turunan Kedua, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Turunan Fungsi Trigonometri 7: Titik Stasioner & Kecekungan Kurva, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Titik Stasioner.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Uji Turunan Kedua.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Tentukan interval kecekungan ke atas ($f'' > 0$) untuk kurva $f(x) = \\cos(2x)$ pada domain $0 \\le x \\le \\pi$!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Turunan Fungsi Trigonometri 7: Titik Stasioner & Kecekungan Kurva.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran Turunan Fungsi Trigonometri 7: Titik Stasioner & Kecekungan Kurva menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Tentukan titik stasioner (maksimum, minimum, belok horizontal) dari $f(x) = 2\\cos(x) + \\sin(2x)$ pada $0 \\le x \\le 2\\pi$!",
        "Tentukan interval kecekungan kurva (cekung ke atas $f''(x) > 0$ dan cekung ke bawah $f''(x) < 0$) untuk $f(x) = \\sin^2(x)$ pada $[0, \\pi]$!",
        "Tentukan koordinat titik belok (*inflection point*) kurva $f(x) = x + 2\\cos(x)$ pada domain $0 \\le x \\le 2\\pi$!",
        "Gunakan uji turunan kedua untuk menentukan jenis ekstrem stasioner dari $f(x) = \\cos(2x) - 4\\sin(x)$!",
        "Sketsakan kurva grafik fungsi trigonometri $y = \\sin(x) + \\frac{1}{2}\\sin(2x)$ lengkap dengan titik stasioner dan titik beloknya!"
      ]
    },
    {
      "id": "P24",
      "bab": "Bab 3: Turunan Fungsi Trigonometri",
      "title": "Asesmen Sumatif Bab 3: Masalah Optimasi Kontekstual Turunan",
      "obj": [
        "Menerapkan konsep turunan trigonometri pada pemecahan masalah optimasi kontekstual (luas maksimal, volume maksimal).",
        "Mengevaluasi penguasaan komprehensif Bab 3 (P17 - P23).",
        "Menyelesaikan simulasi soal HOTS standar TKA Nasional dan UTBK-SNBT."
      ],
      "hook": "Arsitek merancang atap talang air seng berbentuk trapesium dengan sudut lipatan $\\theta$ agar dapat menampung debit volume air hujan maksimal.",
      "toolkit": [
        {
          "name": "Matriks Uji Kompetensi Bab 3",
          "math": "$$\\text{Turunan Dasar \\& Rantai (40\\%)} + \\text{Garis Singgung (30\\%)} + \\text{Optimasi HOTS (30\\%) }$$"
        },
        {
          "name": "Prosedur Optimasi",
          "math": "$$\\text{Model Fungsi } f(\\theta) \\implies \\text{Cari } f'(\\theta) = 0 \\implies \\text{Evaluasi Nilai Maksimal}$$"
        },
        {
          "name": "Turunan Perkalian Fungsi Aljabar",
          "math": "$$\\frac{d}{dx}[u \\cdot v] = u'v + uv'$$"
        },
        {
          "name": "Turunan Pembagian Fungsi Aljabar",
          "math": "$$\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{u'v - uv'}{v^2}$$"
        }
      ],
      "examples": [
        {
          "problem": "Sebuah talang air dibuat dari lembaran seng selebar 30 cm dengan melipat kedua sisinya selebar 10 cm membentuk sudut $\\theta$. Luas penampang talang adalah $L(\\theta) = 100\\sin(\\theta)(1 + \\cos(\\theta))$. Tentukan besar sudut $\\theta$ agar luas penampang maksimal!",
          "solution": "Langkah 1: $L'(\\theta) = 100[\\cos\\theta(1 + \\cos\\theta) + \\sin\\theta(-\\sin\\theta)] = 100[\\cos\\theta + \\cos^2\\theta - \\sin^2\\theta]$.\nLangkah 2: Ubah $\\sin^2\\theta = 1 - \\cos^2\\theta \\implies L'(\\theta) = 100[2\\cos^2\\theta + \\cos\\theta - 1] = 0$.\nLangkah 3: $(2\\cos\\theta - 1)(\\cos\\theta + 1) = 0 \\implies \\cos\\theta = \\frac{1}{2} \\implies \\theta = 60^\\circ$.\nKesimpulan: Luas penampang maksimal terjadi saat sudut $\\theta = 60^\\circ$."
        },
        {
          "problem": "Tentukan turunan pertama dari $f(x) = \\sin^3(4x - 1)$!",
          "solution": "Langkah 1: Aturan rantai bertingkat: $f'(x) = 3\\sin^2(4x - 1) \\cdot \\cos(4x - 1) \\cdot 4$.\nLangkah 2: $f'(x) = 12\\sin^2(4x - 1)\\cos(4x - 1)$.\nKesimpulan: Turunan pertamanya adalah $f'(x) = 12\\sin^2(4x - 1)\\cos(4x - 1)$."
        },
        {
          "problem": "Tentukan gradien garis singgung kurva $y = 3\\tan(2x)$ di titik $x = \\pi/8$!",
          "solution": "Langkah 1: $y' = 3(2\\sec^2(2x)) = 6\\sec^2(2x)$.\nLangkah 2: Evaluasi di $x = \\pi/8$: $m = 6\\sec^2(2(\\pi/8)) = 6\\sec^2(\\pi/4)$.\nLangkah 3: Karena $\\sec(\\pi/4) = \\sqrt{2} \\implies \\sec^2(\\pi/4) = 2$.\nLangkah 4: $m = 6 \\times 2 = 12$.\nKesimpulan: Gradien garis singgung adalah $m = 12$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Asesmen Sumatif Bab 3: Masalah Optimasi Kontekstual Turunan. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Matriks Uji Kompetensi Bab 3, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Prosedur Optimasi, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Asesmen Sumatif Bab 3: Masalah Optimasi Kontekstual Turunan, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Matriks Uji Kompetensi Bab 3.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Prosedur Optimasi.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Bedah simulasi 10 soal CBT Bab 3 dan buktikan solusi analitisnya bersama tim!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Asesmen Sumatif Bab 3: Masalah Optimasi Kontekstual Turunan.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran Asesmen Sumatif Bab 3: Masalah Optimasi Kontekstual Turunan menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Sebuah talang air trapesium dibuat dari seng selebar $30\\text{ cm}$ ditekuk menjadi 3 bagian sama ($10\\text{ cm}$). Tentukan sudut $\\theta$ agar kapasitas maksimum!",
        "Tentukan luas persegi panjang terbesar yang dapat dibuat di dalam daerah setengah lingkaran berjari-jari $R$!",
        "Dua lorong tegak lurus memiliki lebar $8\\text{ m}$ dan $27\\text{ m}$. Tentukan panjang pipa lurus terpanjang yang dapat digeser melewati persimpangan!",
        "Sebuah kerucut memiliki garis pelukis $s = 12\\text{ cm}$. Tentukan tinggi kerucut $t$ agar volume kerucut mencapai nilai maksimum!",
        "Rancang model optimasi jarak terpendek dari titik $(2, 1)$ ke kurva parabola $y = x^2$ menggunakan turunan!"
      ]
    },
    {
      "id": "P25",
      "bab": "Bab 4: Integral dan Penerapannya",
      "title": "Integral dan Penerapannya 1: Konsep Integral Tak Tentu Dasar",
      "obj": [
        "Memahami konsep integral tak tentu sebagai antiturunan (antiderivatif) $\\int f(x)dx = F(x) + C$.",
        "Menerapkan aturan pangkat dasar $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$ untuk $n \\neq -1$.",
        "Menentukan nilai konstanta integrasi $C$ dari informasi nilai awal kurva $(x_0, y_0)$."
      ],
      "hook": "Sensor telemetri mencatat fungsi percepatan roket $a(t)$. Bagaimana para teknisi merekonstruksi kembali fungsi kecepatan $v(t)$ dan posisi ketinggian $s(t)$ roket?",
      "toolkit": [
        {
          "name": "Aturan Pangkat Integral",
          "math": "$$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$"
        },
        {
          "name": "Sifat Kelinieran Integral",
          "math": "$$\\int [a \\cdot f(x) + b \\cdot g(x)] dx = a \\int f(x)dx + b \\int g(x)dx$$"
        },
        {
          "name": "Integral Trigonometri Dasar",
          "math": "$$\\int \\cos x dx = \\sin x + C, \\quad \\int \\sin x dx = -\\cos x + C$$"
        },
        {
          "name": "Turunan Perkalian Fungsi Aljabar",
          "math": "$$\\frac{d}{dx}[u \\cdot v] = u'v + uv'$$"
        },
        {
          "name": "Turunan Pembagian Fungsi Aljabar",
          "math": "$$\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{u'v - uv'}{v^2}$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan hasil dari $\\int (6x^2 - 4x + 5) dx$!",
          "solution": "Langkah 1: Terapkan aturan pangkat suku demi suku.\nLangkah 2: $\\int 6x^2 dx = 6 \\left(\\frac{x^3}{3}\\right) = 2x^3$.\nLangkah 3: $\\int -4x dx = -4 \\left(\\frac{x^2}{2}\\right) = -2x^2$.\nLangkah 4: $\\int 5 dx = 5x$.\nKesimpulan: Hasil integral adalah $2x^3 - 2x^2 + 5x + C$."
        },
        {
          "problem": "Gradien garis singgung kurva di setiap titik ditentukan oleh $\\frac{dy}{dx} = 3x^2 - 4x + 1$. Jika kurva melalui titik $(2, 5)$, tentukan persamaan kurva tersebut!",
          "solution": "Langkah 1: $y = \\int (3x^2 - 4x + 1) dx = x^3 - 2x^2 + x + C$.\nLangkah 2: Substitusi titik $(2, 5)$: $5 = 2^3 - 2(2^2) + 2 + C \\implies 5 = 8 - 8 + 2 + C \\implies C = 3$.\nLangkah 3: Persamaan kurva adalah $y = x^3 - 2x^2 + x + 3$.\nKesimpulan: Persamaan kurvanya adalah $y = x^3 - 2x^2 + x + 3$."
        },
        {
          "problem": "Tentukan hasil dari $\\int (4\\cos x - 3\\sin x) dx$!",
          "solution": "Langkah 1: $\\int 4\\cos x dx = 4\\sin x$.\nLangkah 2: $\\int -3\\sin x dx = -3(-\\cos x) = +3\\cos x$.\nKesimpulan: Hasil integral adalah $4\\sin x + 3\\cos x + C$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Integral dan Penerapannya 1: Konsep Integral Tak Tentu Dasar. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Aturan Pangkat Integral, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Sifat Kelinieran Integral, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Integral dan Penerapannya 1: Konsep Integral Tak Tentu Dasar, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Aturan Pangkat Integral.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Sifat Kelinieran Integral.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Sebuah partikel bergerak dengan percepatan $a(t) = 6t - 12$. Pada saat $t=1$, kecepatan $v=3$ dan posisi $s=10$. Tentukan fungsi posisi $s(t)$ partikel!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Integral dan Penerapannya 1: Konsep Integral Tak Tentu Dasar.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran Integral dan Penerapannya 1: Konsep Integral Tak Tentu Dasar menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Hitunglah integral tak tentu aljabar: $\\int (6x^2 - 4x + 3\\sqrt{x} - \\frac{2}{x^2}) \\, dx$!",
        "Tentukan persamaan kurva $y = f(x)$ jika $\\frac{dy}{dx} = 3x^2 - 6x + 2$ dan kurva melalui titik $A(2, 5)$!",
        "Hitunglah integral trigonometri dasar: $\\int (4\\sin(2x) - 3\\cos(3x) + 2\\sec^2(4x)) \\, dx$!",
        "Tentukan hasil integral bentuk pecahan aljabar: $\\int \\frac{x^3 + 2x^2 - 1}{x^2} \\, dx$!",
        "Buktikan Teorema Nilai Rata-rata untuk Integral: terdapat $c \\in [a, b]$ sedemikian hingga $\\int_{a}^{b} f(x) \\, dx = f(c)(b - a)$!"
      ]
    },
    {
      "id": "P26",
      "bab": "Bab 4: Integral dan Penerapannya",
      "title": "Integral dan Penerapannya 2: Teknik Pengintegralan Metode Substitusi",
      "obj": [
        "Mengidentifikasi struktur integran berpola fungsi komposisi $f(g(x)) \\cdot g'(x)$.",
        "Menerapkan teknik substitusi variabel aljabar $u = g(x) \\implies du = g'(x)dx$.",
        "Menyelesaikan integral substitusi pada fungsi aljabar dan trigonometri."
      ],
      "hook": "Menghitung integral $\\int 2x(x^2 + 1)^5 dx$ tanpa metode substitusi memerlukan ekspansi binomial derajat 5 yang sangat panjang. Dengan substitusi $u = x^2+1$, selesai dalam 2 baris!",
      "toolkit": [
        {
          "name": "Rumus Dasar Integral Substitusi Aljabar",
          "math": "$$\\int f(g(x)) g'(x) \\, dx = \\int f(u) \\, du \\quad [u = g(x)]$$"
        },
        {
          "name": "Bentuk Khusus Fungsi Berpangkat",
          "math": "$$\\int [g(x)]^n g'(x) \\, dx = \\frac{1}{n+1} [g(x)]^{n+1} + C \\quad (n \\neq -1)$$"
        },
        {
          "name": "Bentuk Pecahan Turunan Logaritma",
          "math": "$$\\int \\frac{g'(x)}{g(x)} \\, dx = \\ln |g(x)| + C$$"
        },
        {
          "name": "Integral Substitusi Trigonometri Dasar",
          "math": "$$\\int \\sin^n x \\cos x \\, dx = \\frac{1}{n+1} \\sin^{n+1} x + C$$"
        },
        {
          "name": "Integral Tentu dengan Transformasi Batas",
          "math": "$$\\int_a^b f(g(x)) g'(x) \\, dx = \\int_{g(a)}^{g(b)} f(u) \\, du$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan hasil integral tak tentu berikut: $$\\int 2x (x^2 + 5)^4 \\, dx$$",
          "solution": "Langkah 1: Misalkan $u = x^2 + 5$. Maka turunan diferensialnya adalah $du = 2x \\, dx$.\nLangkah 2: Menggunakan rumus Rumus Dasar Integral Substitusi Aljabar, substitusikan variabel $u$ ke dalam integral:\n$$\\int (x^2 + 5)^4 (2x \\, dx) = \\int u^4 \\, du$$\nLangkah 3: Integralkan variabel $u$:\n$$\\frac{1}{5} u^5 + C$$\nLangkah 4: Kembalikan ke variabel asal $x$:\n$$\\frac{1}{5}(x^2 + 5)^5 + C$$\nKesimpulan: Hasil pengintegralan adalah $\\frac{1}{5}(x^2 + 5)^5 + C$."
        },
        {
          "problem": "Hitunglah hasil dari integral fungsi rasional berikut: $$\\int \\frac{3x^2}{x^3 + 2} \\, dx$$",
          "solution": "Langkah 1: Misalkan $u = x^3 + 2$, maka $du = 3x^2 \\, dx$.\nLangkah 2: Menggunakan rumus Bentuk Pecahan Turunan Logaritma, ubah integral menjadi:\n$$\\int \\frac{du}{u}$$\nLangkah 3: Selesaikan integral bentuk logaritma natural:\n$$\\ln |u| + C$$\nLangkah 4: Kembalikan substitusi variabel $x$:\n$$\\ln |x^3 + 2| + C$$\nKesimpulan: Hasil integral tersebut adalah $\\ln |x^3 + 2| + C$."
        },
        {
          "problem": "Tentukan hasil dari integral trigonometri berikut: $$\\int \\sin^4 x \\cos x \\, dx$$",
          "solution": "Langkah 1: Misalkan $u = \\sin x$, maka $du = \\cos x \\, dx$.\nLangkah 2: Menggunakan rumus Integral Substitusi Trigonometri Dasar, substitusikan ke integral:\n$$\\int u^4 \\, du$$\nLangkah 3: Integralkan terhadap $u$:\n$$\\frac{1}{5} u^5 + C$$\nLangkah 4: Kembalikan $u = \\sin x$:\n$$\\frac{1}{5} \\sin^5 x + C$$\nKesimpulan: Hasil pengintegralan adalah $\\frac{1}{5} \\sin^5 x + C$."
        },
        {
          "problem": "Hitunglah nilai dari integral tentu berikut: $$\\int_0^2 x \\sqrt{x^2 + 9} \\, dx$$",
          "solution": "Langkah 1: Misalkan $u = x^2 + 9 \\implies du = 2x \\, dx \\implies x \\, dx = \\frac{1}{2} du$.\nLangkah 2: Menggunakan rumus Integral Tentu dengan Transformasi Batas, ubah batas integrasi:\n- Untuk $x = 0 \\implies u = 0^2 + 9 = 9$\n- Untuk $x = 2 \\implies u = 2^2 + 9 = 13$\nLangkah 3: Susun dan selesaikan integral tentu dalam variabel $u$:\n$$\\int_9^{13} u^{1/2} \\cdot \\frac{1}{2} \\, du = \\frac{1}{2} \\left[ \\frac{2}{3} u^{3/2} \\right]_9^{13} = \\frac{1}{3} \\left( 13\\sqrt{13} - 9\\sqrt{9} \\right) = \\frac{1}{3} (13\\sqrt{13} - 27)$$\nKesimpulan: Nilai integral tentu tersebut adalah $\\frac{13\\sqrt{13} - 27}{3}$."
        },
        {
          "problem": "Tentukan hasil dari integral substitusi tingkat lanjut: $$\\int x (x - 1)^5 \\, dx$$",
          "solution": "Langkah 1: Misalkan $u = x - 1 \\implies x = u + 1$ dan $dx = du$.\nLangkah 2: Menggunakan rumus Rumus Dasar Integral Substitusi Aljabar, substitusikan seluruh komponen ke dalam variabel $u$:\n$$\\int (u + 1) u^5 \\, du = \\int (u^6 + u^5) \\, du$$\nLangkah 3: Integralkan setiap suku:\n$$\\frac{1}{7} u^7 + \\frac{1}{6} u^6 + C$$\nLangkah 4: Kembalikan variabel asal $u = x - 1$:\n$$\\frac{1}{7} (x - 1)^7 + \\frac{1}{6} (x - 1)^6 + C$$\nKesimpulan: Hasil integral tersebut adalah $\\frac{1}{7} (x - 1)^7 + \\frac{1}{6} (x - 1)^6 + C$."
        }
      ],
      "btc": "Kelompok VNPS: Selesaikan integral substitusi linear $\\int x \\sqrt{x - 1} dx$ dengan memisalkan $u = x - 1$!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Integral dan Penerapannya 2: Teknik Pengintegralan Metode Substitusi.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT.",
          "Pada integral tentu dengan metode substitusi, selalu ubah batas integrasi ke variabel u agar tidak perlu melakukan substitusi balik.",
          "Kesalahan paling sering: Lupa mengubah komponen dx menjadi du yang memuat pengali faktor konstanta."
        ],
        "islamic": "Pembelajaran Integral dan Penerapannya 2: Teknik Pengintegralan Metode Substitusi menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Hitunglah integral substitusi aljabar: $\\int 6x \\cdot (3x^2 - 5)^4 \\, dx$ dengan pemisalan $u = 3x^2 - 5$!",
        "Tentukan hasil dari integral trigonometri substitusi: $\\int \\sin^3(x) \\cdot \\cos(x) \\, dx$!",
        "Hitunglah integral tak tentu: $\\int \\frac{x}{\\sqrt{2x + 1}} \\, dx$ menggunakan substitusi aljabar $u = \\sqrt{2x + 1}$!",
        "Hitung nilai integral substitusi eksponensial: $\\int x^2 \\cdot e^{x^3 - 1} \\, dx$!",
        "Hitunglah integral rasional trigonometri: $\\int \\frac{\\sec^2(x)}{1 + \\tan(x)} \\, dx$!"
      ]
    },
    {
      "id": "P27",
      "bab": "Bab 4: Integral dan Penerapannya",
      "title": "Integral dan Penerapannya 3: Teknik Pengintegralan Parsial (Tanzalin)",
      "obj": [
        "Memahami rumus dasar integral parsial $\\int u dv = uv - \\int v du$.",
        "Menguasai metode cepat Tabel Tanzalin (Tabel D-I bertanda $\\pm$).",
        "Menyelesaikan integral perkalian fungsi aljabar dengan trigonometri atau eksponensial."
      ],
      "hook": "Dalam pengolahan sinyal audio dan radar, integral perkalian $\\int x^3 \\cos(2x) dx$ diselesaikan dalam 30 detik menggunakan metode tabular Tanzalin!",
      "toolkit": [
        {
          "name": "Rumus Parsial Baku",
          "math": "$$\\int u dv = u v - \\int v du$$"
        },
        {
          "name": "Metode Cepat Tanzalin",
          "math": "$$\\begin{array}{|c|c|c|} \\hline \\text{Tanda} & \\text{Diferensial (Turunkan ke 0)} & \\text{Integral (Integralkan)} \\\\ \\hline + & u(x) & v'(x) \\\\ - & u'(x) & v_1(x) \\\\ + & u''(x) & v_2(x) \\\\ \\hline \\end{array}$$"
        },
        {
          "name": "Turunan Perkalian Fungsi Aljabar",
          "math": "$$\\frac{d}{dx}[u \\cdot v] = u'v + uv'$$"
        },
        {
          "name": "Turunan Pembagian Fungsi Aljabar",
          "math": "$$\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{u'v - uv'}{v^2}$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan hasil dari $\\int x \\cos(x) dx$!",
          "solution": "Langkah 1: Menggunakan rumus Rumus Parsial Baku, analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nLangkah 1 (Tabel Tanzalin):\n- Baris 1: (+) | Turunkan: $x$ | Integralkan: $\\cos x$\n- Baris 2: (-) | Turunkan: $1$ | Integralkan: $\\sin x$\n- Baris 3: (+) | Turunkan: $0$ | Integralkan: $-\\cos x$\nLangkah 2: Kalikan silang diagonal:\n$$+ (x)(\\sin x) - (1)(-\\cos x) + C = x\\sin x + \\cos x + C$$\nKesimpulan: Hasil integral adalah $x\\sin x + \\cos x + C$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Tentukan hasil dari $\\int x^2 e^x dx$!",
          "solution": "Langkah 1: Menggunakan rumus Rumus Parsial Baku, analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nLangkah 1 (Tabel Tanzalin):\n- (+) | $x^2$ | $e^x$\n- (-) | $2x$ | $e^x$\n- (+) | $2$ | $e^x$\n- (-) | $0$ | $e^x$\nLangkah 2: Kalikan diagonal: $x^2 e^x - 2x e^x + 2e^x + C = e^x(x^2 - 2x + 2) + C$.\nKesimpulan: Hasil integral adalah $e^x(x^2 - 2x + 2) + C$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Tentukan hasil dari $\\int x \\sin(2x) dx$!",
          "solution": "Langkah 1: Menggunakan rumus Rumus Parsial Baku, analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nLangkah 1 (Tabel Tanzalin):\n- (+) | $x$ | $\\sin(2x)$\n- (-) | $1$ | $-\\frac{1}{2}\\cos(2x)$\n- (+) | $0$ | $-\\frac{1}{4}\\sin(2x)$\nLangkah 2: $+ (x)(-\\frac{1}{2}\\cos 2x) - (1)(-\\frac{1}{4}\\sin 2x) + C = -\\frac{1}{2}x\\cos(2x) + \\frac{1}{4}\\sin(2x) + C$.\nKesimpulan: Hasil integral adalah $-\\frac{1}{2}x\\cos(2x) + \\frac{1}{4}\\sin(2x) + C$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Integral dan Penerapannya 3: Teknik Pengintegralan Parsial (Tanzalin). Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Rumus Parsial Baku, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Metode Cepat Tanzalin, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Integral dan Penerapannya 3: Teknik Pengintegralan Parsial (Tanzalin), selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Rumus Parsial Baku.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Metode Cepat Tanzalin.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Selesaikan integral parsial $\\int x^2 \\sin(x) dx$ menggunakan metode Tanzalin 4 baris!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Integral dan Penerapannya 3: Teknik Pengintegralan Parsial (Tanzalin).",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran Integral dan Penerapannya 3: Teknik Pengintegralan Parsial (Tanzalin) menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Hitunglah integral parsial $\\int x \\cdot \\cos(2x) \\, dx$ menggunakan rumus baku $\\int u \\, dv = uv - \\int v \\, du$!",
        "Gunakan Metode Tabel Tanzalin (D-I Table) untuk menghitung integral tingkat tinggi: $\\int x^3 \\cdot e^{2x} \\, dx$!",
        "Hitunglah integral berulang (*cyclic integration by parts*): $\\int e^x \\cdot \\sin(x) \\, dx$!",
        "Hitunglah nilai integral logaritma: $\\int \\ln(x) \\, dx$ menggunakan metode integrasi parsial!",
        "Hitunglah integral parsial bentuk aljabar-trigonometri: $\\int x^2 \\cdot \\sin(3x) \\, dx$!"
      ]
    },
    {
      "id": "P28",
      "bab": "Bab 4: Integral dan Penerapannya",
      "title": "Integral dan Penerapannya 4: Integral Tentu dan Teorema Dasar Kalkulus",
      "obj": [
        "Memahami Teorema Dasar Kalkulus (FTC): $\\int_{a}^{b} f(x) dx = F(b) - F(a)$.",
        "Menerapkan sifat-sifat integral tentu (linearitas, penjumlahan selang batas, pembalikan batas).",
        "Menghitung nilai numerik eksak integral tentu aljabar dan trigonometri."
      ],
      "hook": "Para insinyur sipil menghitung total akumulasi debit air waduk selama 12 jam hujan lebat menggunakan integral tentu dengan batas waktu integrasi.",
      "toolkit": [
        {
          "name": "Teorema Dasar Kalkulus (FTC)",
          "math": "$$\\int_{a}^{b} f(x) dx = [F(x)]_a^b = F(b) - F(a)$$"
        },
        {
          "name": "Sifat Pembalikan Batas",
          "math": "$$\\int_{a}^{b} f(x) dx = -\\int_{b}^{a} f(x) dx, \\quad \\int_{a}^{a} f(x) dx = 0$$"
        },
        {
          "name": "Sifat Penjumlahan Selang",
          "math": "$$\\int_{a}^{b} f(x) dx + \\int_{b}^{c} f(x) dx = \\int_{a}^{c} f(x) dx$$"
        },
        {
          "name": "Turunan Perkalian Fungsi Aljabar",
          "math": "$$\\frac{d}{dx}[u \\cdot v] = u'v + uv'$$"
        },
        {
          "name": "Turunan Pembagian Fungsi Aljabar",
          "math": "$$\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{u'v - uv'}{v^2}$$"
        }
      ],
      "examples": [
        {
          "problem": "Hitung nilai dari $\\int_{1}^{3} (3x^2 - 2x + 1) dx$!",
          "solution": "Langkah 1: Menggunakan rumus Teorema Dasar Kalkulus (FTC), analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nLangkah 1 (Antiturunan): $F(x) = [x^3 - x^2 + x]_1^3$.\nLangkah 2: Evaluasi batas atas $F(3) = 3^3 - 3^2 + 3 = 27 - 9 + 3 = 21$.\nLangkah 3: Evaluasi batas bawah $F(1) = 1^3 - 1^2 + 1 = 1$.\nLangkah 4: $F(3) - F(1) = 21 - 1 = 20$.\nKesimpulan: Nilai integral tentu adalah $20$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Hitung nilai dari $\\int_0^{\\pi/2} \\cos(x) dx$!",
          "solution": "Langkah 1: $F(x) = [\\sin x]_0^{\\pi/2}$.\nLangkah 2: $\\sin(\\pi/2) - \\sin(0) = 1 - 0 = 1$.\nKesimpulan: Nilai integral tentu adalah $1$."
        },
        {
          "problem": "Hitung nilai dari $\\int_{0}^{2} 2x(x^2 + 1)^2 dx$!",
          "solution": "Langkah 1: Misalkan $u = x^2 + 1 \\implies du = 2x dx$.\nLangkah 2: Transformasi batas: Saat $x = 0 \\implies u = 1$; Saat $x = 2 \\implies u = 2^2 + 1 = 5$.\nLangkah 3: $\\int_{1}^{5} u^2 du = \\left[ \\frac{u^3}{3} \\right]_1^5 = \\frac{5^3 - 1^3}{3} = \\frac{125 - 1}{3} = \\frac{124}{3}$.\nKesimpulan: Nilai integral tentu adalah $\\frac{124}{3}$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Integral dan Penerapannya 4: Integral Tentu dan Teorema Dasar Kalkulus. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Teorema Dasar Kalkulus (FTC), definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Sifat Pembalikan Batas, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Integral dan Penerapannya 4: Integral Tentu dan Teorema Dasar Kalkulus, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Teorema Dasar Kalkulus (FTC).\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Sifat Pembalikan Batas.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Jika $\\int_{1}^{4} f(x)dx = 7$ dan $\\int_{2}^{4} f(x)dx = 3$, tentukan nilai dari $\\int_{1}^{2} f(x)dx$!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Integral dan Penerapannya 4: Integral Tentu dan Teorema Dasar Kalkulus.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran Integral dan Penerapannya 4: Integral Tentu dan Teorema Dasar Kalkulus menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Hitunglah nilai integral tentu: $\\int_{1}^{3} (3x^2 - 4x + 1) \\, dx$ menggunakan Teorema Dasar Kalkulus I!",
        "Hitunglah nilai integral tentu trigonometri: $\\int_0^{\\frac{\\pi}{2}} \\sin^2(x) \\, dx$ menggunakan identitas sudut ganda!",
        "Tentukan nilai turunan fungsi integral akumulasi $F'(x)$ dari $F(x) = \\int_0^{x^2} \\sqrt{1 + t^3} \\, dt$!",
        "Hitunglah nilai integral tentu dengan substitusi: $\\int_{0}^{2} x \\sqrt{x^2 + 9} \\, dx$!",
        "Buktikan bahwa untuk fungsi ganjil berlaku $\\int_{-a}^{a} f(x) \\, dx = 0$ dan untuk fungsi genap berlaku $\\int_{-a}^{a} f(x) \\, dx = 2\\int_{0}^{a} f(x) \\, dx$!"
      ]
    },
    {
      "id": "P29",
      "bab": "Bab 4: Integral dan Penerapannya",
      "title": "Integral dan Penerapannya 5: Luas Daerah dan Volume Benda Putar",
      "obj": [
        "Menghitung luas daerah antara kurva dan sumbu-X atau antara dua kurva $L = \\int_{a}^{b} (y_1 - y_2) dx$.",
        "Menerapkan metode cakram $V = \\pi \\int_{a}^{b} y^2 dx$ untuk menghitung volume benda putar mengelilingi sumbu-X.",
        "Menyelesaikan masalah luas arsitektur dan volume kubah masjid geometris 3D."
      ],
      "hook": "Menghitung volume material beton yang dibutuhkan untuk mencetak kubah masjid 3D berbentuk parabola putar secara matematis akurat.",
      "toolkit": [
        {
          "name": "Luas Daerah Antara Dua Kurva",
          "math": "$$L = \\int_a^b [f(x) - g(x)] \\, dx \\quad [f(x) \\ge g(x)]$$"
        },
        {
          "name": "Rumus Cepat Luas Parabola dan Garis",
          "math": "$$L = \\frac{D\\sqrt{D}}{6a^2} \\quad [\\text{dari persamaan kuadrat sekutu}]$$"
        },
        {
          "name": "Volume Benda Putar Metode Cakram Sumbu X",
          "math": "$$V = \\pi \\int_a^b [f(x)]^2 \\, dx$$"
        },
        {
          "name": "Volume Benda Putar Metode Cincin Sumbu X",
          "math": "$$V = \\pi \\int_a^b \\left([f(x)]^2 - [g(x)]^2\\right) \\, dx$$"
        },
        {
          "name": "Volume Benda Putar Mengelilingi Sumbu Y",
          "math": "$$V = \\pi \\int_c^d [g(y)]^2 \\, dy$$"
        },
        {
          "name": "Volume Benda Putar Metode Kulit Tabung",
          "math": "$$V = 2\\pi \\int_a^b x \\cdot [f(x) - g(x)] \\, dx$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan luas daerah yang dibatasi oleh kurva $y = x^2$ dan garis $y = 4$!",
          "solution": "Langkah 1: Cari titik potong kedua kurva: $x^2 = 4 \\implies x = -2$ dan $x = 2$.\nLangkah 2: Menggunakan rumus Luas Daerah Antara Dua Kurva dengan kurva atas $y = 4$ dan kurva bawah $y = x^2$:\n$$L = \\int_{-2}^2 (4 - x^2) \\, dx$$\nLangkah 3: Selesaikan integral tentu dengan memanfaatkan sifat simetri:\n$$L = 2 \\int_0^2 (4 - x^2) \\, dx = 2 \\left[ 4x - \\frac{1}{3}x^3 \\right]_0^2 = 2 \\left( 8 - \\frac{8}{3} \\right) = 2 \\left(\\frac{16}{3}\\right) = \\frac{32}{3}$$\nKesimpulan: Luas daerah yang dibatasi adalah $\\frac{32}{3}$ satuan luas."
        },
        {
          "problem": "Gunakan rumus cepat diskriminan untuk menghitung luas daerah antara kurva $y = x^2 - 2x$ dan garis $y = x$!",
          "solution": "Langkah 1: Susun persamaan kuadrat sekutu: $x^2 - 2x = x \\implies x^2 - 3x = 0$.\nLangkah 2: Tentukan koefisien $a = 1, b = -3, c = 0$.\nLangkah 3: Hitung nilai diskriminan $D = b^2 - 4ac = (-3)^2 - 4(1)(0) = 9$.\nLangkah 4: Menggunakan rumus Rumus Cepat Luas Parabola dan Garis:\n$$L = \\frac{D\\sqrt{D}}{6a^2} = \\frac{9\\sqrt{9}}{6(1)^2} = \\frac{9 \\cdot 3}{6} = \\frac{27}{6} = \\frac{9}{2}$$\nKesimpulan: Luas daerah tersebut adalah $\\frac{9}{2} = 4{,}5$ satuan luas."
        },
        {
          "problem": "Tentukan volume benda putar yang terjadi jika daerah yang dibatasi kurva $y = \\sqrt{x}$, sumbu X, dan garis $x = 4$ diputar mengelilingi sumbu X sejauh $360^\\circ$!",
          "solution": "Langkah 1: Batas integrasi adalah dari $x = 0$ sampai $x = 4$.\nLangkah 2: Menggunakan rumus Volume Benda Putar Metode Cakram Sumbu X:\n$$V = \\pi \\int_0^4 (\\sqrt{x})^2 \\, dx = \\pi \\int_0^4 x \\, dx$$\nLangkah 3: Selesaikan integral:\n$$V = \\pi \\left[ \\frac{1}{2}x^2 \\right]_0^4 = \\pi \\left( \\frac{1}{2}(16) - 0 \\right) = 8\\pi$$\nKesimpulan: Volume benda putar yang terbentuk adalah $8\\pi$ satuan volume."
        },
        {
          "problem": "Tentukan volume benda putar jika daerah antara garis $y = 2x$ dan kurva $y = x^2$ diputar $360^\\circ$ mengelilingi sumbu X!",
          "solution": "Langkah 1: Cari titik potong kedua kurva: $x^2 = 2x \\implies x(x - 2) = 0 \\implies x = 0$ dan $x = 2$.\nLangkah 2: Pada interval $[0, 2]$, kurva luar adalah $y = 2x$ dan kurva dalam adalah $y = x^2$.\nLangkah 3: Menggunakan rumus Volume Benda Putar Metode Cincin Sumbu X:\n$$V = \\pi \\int_0^2 \\left( (2x)^2 - (x^2)^2 \\right) \\, dx = \\pi \\int_0^2 (4x^2 - x^4) \\, dx$$\nLangkah 4: Hitung integral tentu:\n$$V = \\pi \\left[ \\frac{4}{3}x^3 - \\frac{1}{5}x^5 \\right]_0^2 = \\pi \\left( \\frac{32}{3} - \\frac{32}{5} \\right) = 32\\pi \\left( \\frac{5 - 3}{15} \\right) = \\frac{64\\pi}{15}$$\nKesimpulan: Volume benda putar yang dihasilkan adalah $\\frac{64\\pi}{15}$ satuan volume."
        },
        {
          "problem": "Gunakan metode kulit tabung untuk menghitung volume benda putar yang dibatasi $y = x^2$, sumbu X, dan $x = 2$ jika diputar mengelilingi sumbu Y (Standar UTBK)!",
          "solution": "Langkah 1: Identifikasi radius silinder $r = x$ dan tinggi silinder $h = f(x) = x^2$ dengan batas $x = 0$ sampai $x = 2$.\nLangkah 2: Menggunakan rumus Volume Benda Putar Metode Kulit Tabung:\n$$V = 2\\pi \\int_0^2 x \\cdot x^2 \\, dx = 2\\pi \\int_0^2 x^3 \\, dx$$\nLangkah 3: Selesaikan pengintegralan:\n$$V = 2\\pi \\left[ \\frac{1}{4}x^4 \\right]_0^2 = 2\\pi \\left( \\frac{16}{4} \\right) = 2\\pi(4) = 8\\pi$$\nKesimpulan: Volume benda putar mengelilingi sumbu Y adalah $8\\pi$ satuan volume."
        }
      ],
      "btc": "Kelompok VNPS: Hitung luas daerah antara kurva $y = 4 - x^2$ dan sumbu-$X$ menggunakan rumus integral dan verifikasi dengan rumus cepat $\\frac{D\\sqrt{D}}{6a^2}$!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Integral dan Penerapannya 5: Luas Daerah dan Volume Benda Putar.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT.",
          "Metode kulit tabung V = 2pi integral x f(x) dx sangat efektif untuk perputaran mengelilingi sumbu-Y tanpa perlu mengubah fungsi menjadi bentuk x = g(y).",
          "Kesalahan paling sering: Mengurangkan fungsi luar dan dalam sebelum dikuadratkan, padahal seharusnya kuadratkan masing-masing fungsi terlebih dahulu (R^2 - r^2)."
        ],
        "islamic": "Pembelajaran Integral dan Penerapannya 5: Luas Daerah dan Volume Benda Putar menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Hitunglah luas daerah yang dibatasi oleh kurva parabola $y = 4 - x^2$ dan sumbu-$X$!",
        "Hitung luas daerah tertutup yang dibatasi oleh parabola $y = x^2 - 2x$ dan garis lurus $y = x$!",
        "Tentukan volume benda putar jika daerah antara $y = \\sqrt{x}$, $x = 4$, dan sumbu-$X$ diputar mengelilingi sumbu-$X$ sejauh $360^\\circ$!",
        "Hitung luas daerah yang dibatasi oleh kurva sinus $y = \\sin(x)$ dan kurva kosinus $y = \\cos(x)$ dari $x = 0$ hingga $x = \\frac{\\pi}{2}$!",
        "Tentukan volume benda putar yang terbentuk saat daerah di kuadran I yang dibatasi oleh $y = x^3$, $y = 8$, dan sumbu-$Y$ diputar mengelilingi sumbu-$Y$!"
      ]
    },
    {
      "id": "P30",
      "bab": "Bab 4: Integral dan Penerapannya",
      "title": "Asesmen Sumatif Bab 4: Grand Review All Chapters dan Simulasi ASAS",
      "obj": [
        "Mengevaluasi seluruh materi integral kalkulus dan penerapannya (P25 - P29).",
        "Melakukan Grand Review integratif seluruh 4 Bab Matematika Peminatan Kelas XII Semester 1.",
        "Simulasi Asesmen Sumatif Akhir Semester (ASAS / PAS CBT) berbasis bank soal komprehensif."
      ],
      "hook": "Puncak pencapaian belajar satu semester penuh Additional Mathematics Kelas XII: Menguji keunggulan analitis kalkulus tingkat lanjut.",
      "toolkit": [
        {
          "name": "Matriks Grand Simulasi ASAS",
          "math": "$$\\text{Bab 1: Lingkaran (25\\%)} + \\text{Bab 2: Limit (25\\%)} + \\text{Bab 3: Turunan (25\\%)} + \\text{Bab 4: Integral (25\\%)} $$"
        },
        {
          "name": "Kaidah Tanzalin & Cakram",
          "math": "$$\\int u dv = uv - \\int v du, \\quad V = \\pi \\int_{a}^{b} y^2 dx$$"
        },
        {
          "name": "Sifat Linearitas Integral",
          "math": "$$\\int [a f(x) + b g(x)] \\, dx = a \\int f(x)\\,dx + b \\int g(x)\\,dx$$"
        },
        {
          "name": "Teorema Dasar Kalkulus I",
          "math": "$$\\int_a^b f(x) \\, dx = F(b) - F(a)$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan hasil dari $\\int_{0}^{1} (4x^3 + 3x^2 - 2x + 1) dx$!",
          "solution": "Langkah 1: $F(x) = [x^4 + x^3 - x^2 + x]_0^1$.\nLangkah 2: Evaluasi: $(1^4 + 1^3 - 1^2 + 1) - 0 = (1 + 1 - 1 + 1) = 2$.\nKesimpulan: Nilai integral adalah $2$."
        },
        {
          "problem": "Tentukan luas daerah yang dibatasi oleh kurva $y = 6x - x^2$ dan sumbu-$X$!",
          "solution": "Langkah 1: Pembuat nol: $6x - x^2 = 0 \\implies x(6 - x) = 0 \\implies x = 0$ dan $x = 6$.\nLangkah 2: $L = \\int_{0}^{6} (6x - x^2) dx = \\left[ 3x^2 - \\frac{x^3}{3} \\right]_0^6 = 3(36) - \\frac{216}{3} = 108 - 72 = 36$.\nKesimpulan: Luas daerah adalah $36$ satuan luas."
        },
        {
          "problem": "Tentukan volume benda putar yang dihasilkan jika daerah yang dibatasi oleh garis $y = 2x$, sumbu-$X$, dan garis $x = 3$ diputar mengelilingi sumbu-$X$ sejauh $360^\\circ$!",
          "solution": "Langkah 1: $V = \\pi \\int_{0}^{3} (2x)^2 dx = \\pi \\int_{0}^{3} 4x^2 dx$.\nLangkah 2: $V = \\pi \\left[ \\frac{4x^3}{3} \\right]_0^3 = \\pi \\left( \\frac{4(27)}{3} - 0 \\right) = 36\\pi$.\nKesimpulan: Volume benda putar adalah $36\\pi$ satuan volume."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Asesmen Sumatif Bab 4: Grand Review All Chapters dan Simulasi ASAS. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Matriks Grand Simulasi ASAS, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Kaidah Tanzalin & Cakram, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Asesmen Sumatif Bab 4: Grand Review All Chapters dan Simulasi ASAS, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Matriks Grand Simulasi ASAS.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Kaidah Tanzalin & Cakram.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "Kelompok VNPS: Grand Final BTC Challenge! Bedah dan selesaikan paket simulasi 10 soal komprehensif ASAS CBT!",
      "summary_data": {
        "summary": [
          "Memahami konsep fundamental, kaidah analitis, dan penurunan rumus utama pada materi Asesmen Sumatif Bab 4: Grand Review All Chapters dan Simulasi ASAS.",
          "Mampu memecahkan masalah kontekstual multi-langkah dan soal tipe HOTS dengan prosedur matematis yang runtut.",
          "Menguasai strategi penyelesaian cepat dan verifikasi kunci jawaban untuk persiapan TKA Nasional dan UTBK-SNBT."
        ],
        "islamic": "Pembelajaran Asesmen Sumatif Bab 4: Grand Review All Chapters dan Simulasi ASAS menegaskan bahwa segala sesuatu di alam semesta telah diciptakan Allah SWT menurut ukuran, harmoni, dan perhitungan yang sangat cermat (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Hitunglah volume benda putar cincin (*washer method*) jika daerah antara $y = x^2$ dan $y = 2x$ diputar $360^\\circ$ mengelilingi sumbu-$X$!",
        "Hitung volume benda putar yang dibatasi kurva $y = 4 - x^2$ dan sumbu-$X$ jika diputar mengelilingi sumbu-$Y$ dengan kulit tabung (*shells*)!",
        "Rancang model matematis kubah masjid sekolah dengan profil $y = 9 - x^2$ ($0 \\le x \\le 3$) yang diputar mengelilingi sumbu-$Y$, hitung volumenya!",
        "Hitung luas permukaan benda putar yang terbentuk dari perputaran kurva $y = 2\\sqrt{x}$ pada interval $[0, 3]$ mengelilingi sumbu-$X$!",
        "Evaluasilah perbandingan efisiensi metode cakram, cincin, dan kulit silinder dalam memodelkan bejana fluida kalkulus terapan!"
      ]
    }
  ],
  "clil": [
    {
      "id": "P25",
      "bab": "Integral Calculus (CLIL)",
      "title": "Indefinite Integrals & Fundamental Power Rules",
      "obj": [
        "Understand the concept of anti-derivatives as the inverse operation of differentiation.",
        "Apply the fundamental power rule: $\\int x^n dx = \\frac{1}{n+1} x^{n+1} + C$ for all $n \\neq -1$.",
        "Determine the specific arbitrary constant $C$ given an initial boundary condition $(x_0, y_0)$."
      ],
      "hook": "In automotive telemetry, sensors record instantaneous acceleration $a(t) = 6t - 4$. How do race engineers reconstruct the exact velocity $v(t)$ and position $s(t)$ of an F1 car?",
      "toolkit": [
        {
          "name": "Fundamental Power Rule",
          "math": "$$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C, \\quad (n \\neq -1)$$"
        },
        {
          "name": "Linearity of Integration",
          "math": "$$\\int [a \\cdot f(x) + b \\cdot g(x)] dx = a \\int f(x)dx + b \\int g(x)dx$$"
        },
        {
          "name": "Initial Value Problem (IVP)",
          "math": "$$y(x) = \\int f'(x)dx + C \\implies \\text{Solve for } C \\text{ using } (x_0, y_0)$$"
        },
        {
          "name": "Sifat Linearitas Integral",
          "math": "$$\\int [a f(x) + b g(x)] \\, dx = a \\int f(x)\\,dx + b \\int g(x)\\,dx$$"
        },
        {
          "name": "Teorema Dasar Kalkulus I",
          "math": "$$\\int_a^b f(x) \\, dx = F(b) - F(a)$$"
        }
      ],
      "examples": [
        {
          "problem": "Evaluate the indefinite integral: $$\\int (6x^2 - 4x + 5) dx$$",
          "solution": "Langkah 1: Menggunakan rumus Fundamental Power Rule, analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nStep 1: Apply the sum and constant multiple rules term by term: $\\int 6x^2 dx - \\int 4x dx + \\int 5 dx$.\nStep 2: Integrate using power rule: $6\\left(\\frac{x^3}{3}\\right) - 4\\left(\\frac{x^2}{2}\\right) + 5x + C$.\nStep 3: Simplify the algebraic coefficients: $= 2x^3 - 2x^2 + 5x + C$.\nConclusion: The indefinite integral is $2x^3 - 2x^2 + 5x + C$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "A particle moves with acceleration $a(t) = 12t - 6\\text{ m/s}^2$. If initial velocity $v(0) = 4\\text{ m/s}$ and position $s(0) = 10\\text{ m}$, find $s(2)$.",
          "solution": "Langkah 1: Menggunakan rumus Fundamental Power Rule, analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nStep 1: Velocity is the anti-derivative of acceleration: $v(t) = \\int (12t - 6) dt = 6t^2 - 6t + C_1$.\nStep 2: Apply initial condition $v(0) = 4 \\implies C_1 = 4$, so $v(t) = 6t^2 - 6t + 4$.\nStep 3: Position is the anti-derivative of velocity: $s(t) = \\int (6t^2 - 6t + 4) dt = 2t^3 - 3t^2 + 4t + C_2$.\nStep 4: Using $s(0) = 10 \\implies C_2 = 10$. For $t = 2$: $s(2) = 2(8) - 3(4) + 4(2) + 10 = 16 - 12 + 8 + 10 = 22\\text{ m}$.\nConclusion: The position of the particle at $t = 2\\text{ s}$ is $s(2) = 22\\text{ m}$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Find the curve equation $y = f(x)$ passing through $(1, 8)$ whose tangent gradient is $\\frac{dy}{dx} = \\frac{3}{\\sqrt{x}} + 2x$.",
          "solution": "Langkah 1: Menggunakan rumus Fundamental Power Rule, analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nStep 1: Express gradient in power form: $f'(x) = 3x^{-1/2} + 2x$.\nStep 2: Integrate: $f(x) = \\int (3x^{-1/2} + 2x) dx = 3\\left(\\frac{x^{1/2}}{1/2}\\right) + x^2 + C = 6\\sqrt{x} + x^2 + C$.\nStep 3: Substitute $(1, 8)$: $8 = 6\\sqrt{1} + 1^2 + C \\implies 8 = 7 + C \\implies C = 1$.\nStep 4: The exact curve equation is $y = 6\\sqrt{x} + x^2 + 1$.\nConclusion: The exact curve equation is $y = 6\\sqrt{x} + x^2 + 1$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Indefinite Integrals & Fundamental Power Rules. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Fundamental Power Rule, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Linearity of Integration, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Indefinite Integrals & Fundamental Power Rules, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Fundamental Power Rule.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Linearity of Integration.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "VNPS Team Challenge: A dynamic system has gradient function $\\frac{dy}{dx} = 4x^3 - 6x^2 + 2$. The curve has a local extremum on the line $y = 5$. Find all possible equations of the curve!",
      "summary_data": {
        "summary": [
          "Integration is the inverse operation of differentiation (Anti-differentiation).",
          "Power Rule: $\\int x^n dx = \\frac{1}{n+1}x^{n+1} + C$ for any real number $n \\neq -1$.",
          "An indefinite integral represents a family of parallel curves; an initial condition $(x_0, y_0)$ identifies a unique curve."
        ],
        "islamic": "The constant of integration $+C$ reflects how initial conditions and foundational values shape our journey toward righteousness (QS. Al-Inshiqaq: 6)."
      },
      "collab_cases": [
        "Evaluate the indefinite integral: $\\int \\left( 4x^3 - \\frac{3}{x^2} + 5\\sqrt{x} - 2e^x \\right) \\, dx$.",
        "A curve has gradient function $\\frac{dy}{dx} = 6x^2 - 2x + 4$ and passes through $(1, 8)$. Find the complete equation of the curve $y = f(x)$.",
        "Evaluate the trigonometric integral: $\\int \\left( 3\\sec^2(2x) - 4\\sin(4x) + \\frac{1}{1 + x^2} \\right) \\, dx$.",
        "Find the general antiderivative $F(x) = \\int \\frac{x^4 - 2x^2 + 1}{x^3} \\, dx$ and specify its domain.",
        "Prove that $\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$ for any real number $n \\neq -1$ using the derivative of power functions."
      ]
    },
    {
      "id": "P26",
      "bab": "Integral Calculus (CLIL)",
      "title": "Integration Techniques: Method of $u$-Substitution",
      "obj": [
        "Identify composite functions of the form $f(g(x))g'(x)$ suitable for algebraic substitution.",
        "Execute the variable transformation $u = g(x)$ and $du = g'(x)dx$ systematically.",
        "Solve trigonometric and algebraic integrals utilizing substitution techniques."
      ],
      "hook": "In signal processing, analyzing energy decay requires integrating non-linear waves like $I(t) = \\int 2t \\cos(t^2) dt$. How does changing the variable simplify complex oscillatory integrals?",
      "toolkit": [
        {
          "name": "Substitution Formula",
          "math": "$$\\int f(g(x))g'(x) dx = \\int f(u) du, \\quad \\text{where } u = g(x)$$"
        },
        {
          "name": "Trigonometric Substitution",
          "math": "$$\\int \\sin(u) du = -\\cos(u) + C, \\quad \\int \\cos(u) du = \\sin(u) + C$$"
        },
        {
          "name": "Linear Factor Shortcut",
          "math": "$$\\int (ax + b)^n dx = \\frac{1}{a(n+1)} (ax + b)^{n+1} + C$$"
        },
        {
          "name": "Prinsip Dasar Pencacahan Komplemen",
          "math": "$$n(A) = n(S) - n(A')$$"
        },
        {
          "name": "Aturan Kombinasi Pemilihan Bebas",
          "math": "$$\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$$"
        }
      ],
      "examples": [
        {
          "problem": "Evaluate the indefinite integral: $$\\int 2x (x^2 + 5)^4 dx$$",
          "solution": "Langkah 1: Menggunakan rumus Substitution Formula, analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nStep 1: Choose substitution: Let $u = x^2 + 5 \\implies du = 2x dx$.\nStep 2: Transform integral into $u$-terms: $\\int u^4 du$.\nStep 3: Integrate: $\\frac{u^5}{5} + C$.\nStep 4: Substitute back $u = x^2 + 5$: $= \\frac{1}{5}(x^2 + 5)^5 + C$.\nConclusion: The evaluated integral is $\\frac{1}{5}(x^2 + 5)^5 + C$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Evaluate the trigonometric integral: $$\\int \\sin^3(x) \\cos(x) dx$$",
          "solution": "Langkah 1: Menggunakan rumus Substitution Formula, analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nStep 1: Let $u = \\sin(x) \\implies du = \\cos(x) dx$.\nStep 2: Rewrite integral: $\\int u^3 du = \\frac{u^4}{4} + C$.\nStep 3: Substitute back $u = \\sin(x)$: $= \\frac{1}{4}\\sin^4(x) + C$.\nConclusion: The trigonometric integral is $\\frac{1}{4}\\sin^4(x) + C$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Evaluate: $$\\int \\frac{3x^2}{\\sqrt{x^3 + 8}} dx$$",
          "solution": "Langkah 1: Menggunakan rumus Substitution Formula, analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nStep 1: Let $u = x^3 + 8 \\implies du = 3x^2 dx$.\nStep 2: Rewrite in power form: $\\int u^{-1/2} du = \\frac{u^{1/2}}{1/2} + C = 2\\sqrt{u} + C$.\nStep 3: Substitute back: $= 2\\sqrt{x^3 + 8} + C$.\nConclusion: The anti-derivative is $2\\sqrt{x^3 + 8} + C$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Integration Techniques: Method of $u$-Substitution. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Substitution Formula, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Trigonometric Substitution, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Integration Techniques: Method of $u$-Substitution, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Substitution Formula.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Trigonometric Substitution.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "VNPS Team Challenge: Evaluate the indefinite integral $\\int x^5 \\sqrt{x^3 + 1} dx$ by splitting $x^5 = x^3 \\cdot x^2$ and applying algebraic substitution!",
      "summary_data": {
        "summary": [
          "Substitution transforms complex composite integrands into standard elementary forms.",
          "Always identify the inner function $u = g(x)$ whose derivative $g'(x)$ appears as a factor in the integrand.",
          "Remember to back-substitute to express the final anti-derivative in terms of the original variable $x$."
        ],
        "islamic": "Simplifying complex problems through substitution mirrors the wisdom of viewing challenges from an elevated spiritual perspective (QS. Al-Baqarah: 286)."
      },
      "collab_cases": [
        "Evaluate $\\int 2x(x^2 + 3)^5 \\, dx$ using the formal analytical method of $u$-substitution with $u = x^2 + 3$.",
        "Evaluate the definite substitution integral: $\\int_{0}^{1} x \\sqrt{1 - x^2} \\, dx$ by transforming the integration boundaries appropriately.",
        "Calculate the indefinite integral: $\\int \\tan(x) \\, dx = \\int \\frac{\\sin(x)}{\\cos(x)} \\, dx$ and prove that the result is $\\ln|\\sec(x)| + C$.",
        "Evaluate the substitution integral: $\\int \\frac{e^{2x}}{1 + e^{2x}} \\, dx$ using $u = 1 + e^{2x}$.",
        "Evaluate the trigonometric substitution integral: $\\int \\sin^5(x) \\cos(x) \\, dx$."
      ]
    },
    {
      "id": "P27",
      "bab": "Integral Calculus (CLIL)",
      "title": "Integration by Parts & Tanzalin Tabular Method",
      "obj": [
        "Apply the Integration by Parts formula: $\\int u dv = uv - \\int v du$.",
        "Select optimal $u$ using the LIATE priority rule (Logarithmic, Inverse trig, Algebraic, Trig, Exponential).",
        "Execute the rapid Tanzalin Tabular Method for repeated algebraic-trigonometric/exponential integrals."
      ],
      "hook": "Quantum mechanical wave packets $\\psi(x) = x e^{-x}$ describe electron orbital probabilities. How does integration by parts determine the expectation position of an atomic electron?",
      "toolkit": [
        {
          "name": "Integration by Parts Formula",
          "math": "$$\\int u \\, dv = u \\cdot v - \\int v \\, du$$"
        },
        {
          "name": "LIATE Selection Rule",
          "math": "$$\\text{Priority for } u: \\text{Log} \\to \\text{Inverse Trig} \\to \\text{Algebraic} \\to \\text{Trig} \\to \\text{Exponential}$$"
        },
        {
          "name": "Tanzalin Tabular Method",
          "math": "$$\\begin{array}{c|c|c} \\text{Sign} & D (\\text{Differentiate } u) & I (\\text{Integrate } v') \\\\ \\hline + & u & v_1 \\\\ - & u' & v_2 \\\\ + & u'' & v_3 \\end{array}$$"
        },
        {
          "name": "Prinsip Dasar Pencacahan Komplemen",
          "math": "$$n(A) = n(S) - n(A')$$"
        },
        {
          "name": "Aturan Kombinasi Pemilihan Bebas",
          "math": "$$\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$$"
        }
      ],
      "examples": [
        {
          "problem": "Evaluate the integral: $$\\int x \\cos(x) dx$$",
          "solution": "Langkah 1: Menggunakan rumus Integration by Parts Formula, analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nStep 1: Choose $u = x \\implies du = dx$, and $dv = \\cos(x)dx \\implies v = \\sin(x)$.\nStep 2: Apply formula $\\int u dv = uv - \\int v du$: $= x\\sin(x) - \\int \\sin(x) dx$.\nStep 3: Integrate $\\sin(x)$: $= x\\sin(x) - (-\\cos(x)) + C = x\\sin(x) + \\cos(x) + C$.\nConclusion: The integral result is $x\\sin(x) + \\cos(x) + C$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Evaluate the repeated integral using Tanzalin Tabular Method: $$\\int x^2 e^{2x} dx$$",
          "solution": "Langkah 1: Menggunakan rumus Integration by Parts Formula, analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nStep 1: Set up Table with Signs, Differentiating $u = x^2$, and Integrating $v' = e^{2x}$:\n- Row 1: $(+) \\cdot (x^2) \\cdot (\\frac{1}{2}e^{2x}) = \\frac{1}{2}x^2 e^{2x}$\n- Row 2: $(-) \\cdot (2x) \\cdot (\\frac{1}{4}e^{2x}) = -\\frac{1}{2}x e^{2x}$\n- Row 3: $(+) \\cdot (2) \\cdot (\\frac{1}{8}e^{2x}) = \\frac{1}{4}e^{2x}$\nStep 2: Combine diagonal products: $= e^{2x}\\left(\\frac{1}{2}x^2 - \\frac{1}{2}x + \\frac{1}{4}\\right) + C$.\nConclusion: The tabular integral result is $e^{2x}\\left(\\frac{1}{2}x^2 - \\frac{1}{2}x + \\frac{1}{4}\\right) + C$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Evaluate: $$\\int \\ln(x) dx$$",
          "solution": "Langkah 1: Menggunakan rumus Integration by Parts Formula, analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nStep 1: By LIATE, let $u = \\ln(x) \\implies du = \\frac{1}{x} dx$, and $dv = dx \\implies v = x$.\nStep 2: Apply formula: $= x\\ln(x) - \\int x\\left(\\frac{1}{x}\\right) dx = x\\ln(x) - \\int 1 dx$.\nStep 3: Result: $= x\\ln(x) - x + C = x(\\ln x - 1) + C$.\nConclusion: The natural log anti-derivative is $x(\\ln x - 1) + C$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Integration by Parts & Tanzalin Tabular Method. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Integration by Parts Formula, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus LIATE Selection Rule, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Integration by Parts & Tanzalin Tabular Method, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Integration by Parts Formula.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus LIATE Selection Rule.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "VNPS Team Challenge: Evaluate $\\int e^{x} \\sin(x) dx$ using cyclic integration by parts and explain why the original integral reappears on the right-hand side!",
      "summary_data": {
        "summary": [
          "Integration by parts decomposes products of incompatible function classes (Algebraic $\\times$ Transcendental).",
          "LIATE rule guarantees selecting a $u$ that terminates or simplifies upon differentiation.",
          "The Tanzalin Tabular Method provides a rapid, error-free matrix for polynomial products."
        ],
        "islamic": "Decomposing complex interactions through structured steps reflects the harmony and balance built into universal laws (QS. Al-Qamar: 49)."
      },
      "collab_cases": [
        "Evaluate the integral $\\int x \\cdot e^{3x} \\, dx$ using the integration by parts formula $\\int u \\, dv = uv - \\int v \\, du$.",
        "Use the Tanzalin Tabular Integration Method (D-I Table) to efficiently evaluate $\\int x^3 \\cdot \\sin(2x) \\, dx$.",
        "Evaluate the cyclic integral $I = \\int e^{2x} \\cos(3x) \\, dx$ by applying integration by parts twice.",
        "Evaluate the logarithmic integral: $\\int x^2 \\ln(x) \\, dx$ using integration by parts.",
        "Prove the reduction formula for $\\int \\sin^n(x) \\, dx = -\\frac{1}{n} \\sin^{n-1}(x) \\cos(x) + \\frac{n-1}{n} \\int \\sin^{n-2}(x) \\, dx$."
      ]
    },
    {
      "id": "P28",
      "bab": "Integral Calculus (CLIL)",
      "title": "Definite Integrals & Fundamental Theorem of Calculus",
      "obj": [
        "State and apply the Fundamental Theorem of Calculus: $\\int_{a}^{b} f(x)dx = F(b) - F(a)$.",
        "Utilize linearity, interval additivity, and symmetry properties (Even/Odd functions).",
        "Evaluate definite integrals involving trigonometric, exponential, and algebraic bounds."
      ],
      "hook": "Civil engineers calculating cumulative hydraulic pressure on a parabolic dam wall compute $\\int_0^{10} 9800(10 - y)y dy$. How do definite integrals translate rate functions into absolute physical quantities?",
      "toolkit": [
        {
          "name": "Fundamental Theorem of Calculus (FTC)",
          "math": "$$\\int_{a}^{b} f(x) dx = [F(x)]_a^b = F(b) - F(a)$$"
        },
        {
          "name": "Even & Odd Symmetry Rules",
          "math": "$$\\int_{-a}^{a} f_{\\text{odd}}(x)dx = 0, \\quad \\int_{-a}^{a} f_{\\text{even}}(x)dx = 2\\int_{0}^{a} f_{\\text{even}}(x)dx$$"
        },
        {
          "name": "Interval Additivity",
          "math": "$$\\int_{a}^{b} f(x)dx = \\int_{a}^{c} f(x)dx + \\int_{c}^{b} f(x)dx$$"
        },
        {
          "name": "Sifat Linearitas Integral",
          "math": "$$\\int [a f(x) + b g(x)] \\, dx = a \\int f(x)\\,dx + b \\int g(x)\\,dx$$"
        },
        {
          "name": "Teorema Dasar Kalkulus I",
          "math": "$$\\int_a^b f(x) \\, dx = F(b) - F(a)$$"
        }
      ],
      "examples": [
        {
          "problem": "Evaluate the definite integral: $$\\int_{1}^{3} (3x^2 - 4x + 2) dx$$",
          "solution": "Langkah 1: Menggunakan rumus Fundamental Theorem of Calculus (FTC), analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nStep 1: Find the anti-derivative: $F(x) = [x^3 - 2x^2 + 2x]_1^3$.\nStep 2: Evaluate upper bound at $x = 3$: $F(3) = 3^3 - 2(3^2) + 2(3) = 27 - 18 + 6 = 15$.\nStep 3: Evaluate lower bound at $x = 1$: $F(1) = 1^3 - 2(1^2) + 2(1) = 1 - 2 + 2 = 1$.\nStep 4: Compute difference: $F(3) - F(1) = 15 - 1 = 14$.\nConclusion: The definite integral value is $14$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Evaluate the trigonometric definite integral: $$\\int_0^{\\pi/2} \\cos(x) dx$$",
          "solution": "Langkah 1: Menggunakan rumus Fundamental Theorem of Calculus (FTC), analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nStep 1: Anti-derivative of $\\cos(x)$ is $\\sin(x)$.\nStep 2: Evaluate bounds: $[\\sin(x)]_0^{\\pi/2} = \\sin(\\pi/2) - \\sin(0) = 1 - 0 = 1$.\nConclusion: The definite trigonometric integral value is $1$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Using symmetry, evaluate: $$\\int_{-\\pi/4}^{\\pi/4} (x^3 + \\tan x + \\cos x) dx$$",
          "solution": "Langkah 1: Menggunakan rumus Fundamental Theorem of Calculus (FTC), analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nStep 1: Observe that $x^3$ and $\\tan(x)$ are odd functions: $\\int_{-\\pi/4}^{\\pi/4} (x^3 + \\tan x) dx = 0$.\nStep 2: $\\cos(x)$ is an even function: $\\int_{-\\pi/4}^{\\pi/4} \\cos(x) dx = 2\\int_0^{\\pi/4} \\cos(x) dx$.\nStep 3: Calculate: $2[\\sin x]_0^{\\pi/4} = 2(\\frac{1}{2}\\sqrt{2} - 0) = \\sqrt{2}$.\nConclusion: By symmetry, the exact integral evaluates to $\\sqrt{2}$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Definite Integrals & Fundamental Theorem of Calculus. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Fundamental Theorem of Calculus (FTC), definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Even & Odd Symmetry Rules, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Definite Integrals & Fundamental Theorem of Calculus, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Fundamental Theorem of Calculus (FTC).\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Even & Odd Symmetry Rules.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "VNPS Team Challenge: Find the value of $k > 0$ such that $\\int_{0}^{k} (2x - 3) dx = 4$, and interpret the geometric meaning of positive vs negative signed area!",
      "summary_data": {
        "summary": [
          "The Fundamental Theorem of Calculus bridges differential rates and cumulative definite quantities.",
          "Definite integrals produce real numerical scalar values without the arbitrary constant $+C$.",
          "Exploiting symmetry (Even vs Odd functions) simplifies symmetric bound evaluations to zero or doubles."
        ],
        "islamic": "Definite boundaries remind us of life's appointed term (Ajal) and the exact account of every deed recorded with precision (QS. Al-Zalzalah: 7-8)."
      },
      "collab_cases": [
        "Evaluate the definite integral: $\\int_{1}^{4} \\left( \\frac{3}{\\sqrt{x}} - 2x + 5 \\right) \\, dx$ using the Fundamental Theorem of Calculus.",
        "Evaluate $\\int_0^{\\pi} x \\sin(x) \\, dx$ combining the Fundamental Theorem of Calculus with integration by parts.",
        "Given $G(x) = \\int_2^{x^3} \\frac{1}{1 + t^4} \\, dt$, find the exact derivative $G'(x)$ using Leibniz's Rule.",
        "Evaluate the piecewise definite integral $\\int_{-2}^{3} |x - 1| \\, dx$ using geometric area decomposition.",
        "Prove the Mean Value Theorem for Definite Integrals: if $f$ is continuous on $[a, b]$, there exists $c \\in [a, b]$ where $f(c) = \\frac{1}{b-a}\\int_{a}^{b} f(x)dx$."
      ]
    },
    {
      "id": "P29",
      "bab": "Integral Calculus (CLIL)",
      "title": "Applications of Integration: Area Between Curves",
      "obj": [
        "Calculate the enclosed area between two curves using vertical and horizontal strips.",
        "Determine integration limits by solving intersection points ($y_1 = y_2$).",
        "Apply parabolic enclosed area shortcuts: $A = \\frac{D\\sqrt{D}}{6a^2}$."
      ],
      "hook": "Architects designing an Islamic cultural pavilion model the roof arch as $y = 6 - x^2$ and base support as $y = 2$. What is the exact cross-sectional glazing area required?",
      "toolkit": [
        {
          "name": "Vertical Strip Area Formula",
          "math": "$$A = \\int_{a}^{b} [y_{\\text{upper}} - y_{\\text{lower}}] dx = \\int_{a}^{b} [f(x) - g(x)] dx$$"
        },
        {
          "name": "Horizontal Strip Area Formula",
          "math": "$$A = \\int_{c}^{d} [x_{\\text{right}} - x_{\\text{left}}] dy = \\int_{c}^{d} [f(y) - g(y)] dy$$"
        },
        {
          "name": "Parabolic Area Shortcut",
          "math": "$$A = \\frac{D\\sqrt{D}}{6a^2} \\quad (\\text{for region bounded by parabola and line})$$"
        },
        {
          "name": "Prinsip Dasar Pencacahan Komplemen",
          "math": "$$n(A) = n(S) - n(A')$$"
        },
        {
          "name": "Aturan Kombinasi Pemilihan Bebas",
          "math": "$$\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$$"
        }
      ],
      "examples": [
        {
          "problem": "Find the area bounded by the parabola $y = 6x - x^2$ and the x-axis ($y = 0$).",
          "solution": "Langkah 1: Menggunakan rumus Vertical Strip Area Formula, analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nStep 1: Find x-intercepts: $6x - x^2 = 0 \\implies x(6 - x) = 0 \\implies x = 0$ and $x = 6$.\nStep 2: Set up definite integral: $A = \\int_{0}^{6} (6x - x^2) dx$.\nStep 3: Integrate: $[3x^2 - \\frac{1}{3}x^3]_0^6 = 3(36) - \\frac{1}{3}(216) = 108 - 72 = 36\\text{ units}^2$.\nConclusion: The bounded planar area is $36\\text{ units}^2$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Calculate the area enclosed between $y = x^2$ and the line $y = 2x + 3$.",
          "solution": "Langkah 1: Menggunakan rumus Vertical Strip Area Formula, analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nStep 1: Find intersection points: $x^2 = 2x + 3 \\implies x^2 - 2x - 3 = 0 \\implies (x - 3)(x + 1) = 0 \\implies x = -1, 3$.\nStep 2: Over $[-1, 3]$, the line is upper: $y_{\\text{upper}} = 2x + 3$, $y_{\\text{lower}} = x^2$.\nStep 3: Integrate: $A = \\int_{-1}^{3} (2x + 3 - x^2) dx = [x^2 + 3x - \\frac{x^3}{3}]_{-1}^3$.\nStep 4: At $x = 3$: $9 + 9 - 9 = 9$. At $x = -1$: $1 - 3 + \\frac{1}{3} = -\\frac{5}{3}$.\nStep 5: $A = 9 - (-\\frac{5}{3}) = \\frac{32}{3}\\text{ units}^2$.\nConclusion: The enclosed area between curves is $\\frac{32}{3}\\text{ units}^2$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Using the Archimedes Shortcut $A = \\frac{D\\sqrt{D}}{6a^2}$, find the area between $y = x^2 - 4$ and $y = 0$.",
          "solution": "Langkah 1: Menggunakan rumus Vertical Strip Area Formula, analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nStep 1: For $x^2 - 4 = 0$, $a = 1, b = 0, c = -4$.\nStep 2: Discriminant $D = b^2 - 4ac = 0 - 4(1)(-4) = 16$.\nStep 3: Area $A = \\frac{16\\sqrt{16}}{6(1)^2} = \\frac{16 \\times 4}{6} = \\frac{64}{6} = \\frac{32}{3}\\text{ units}^2$.\nConclusion: Using Archimedes formula, the area is $\\frac{32}{3}\\text{ units}^2$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Applications of Integration: Area Between Curves. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Vertical Strip Area Formula, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Horizontal Strip Area Formula, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Applications of Integration: Area Between Curves, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Vertical Strip Area Formula.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Horizontal Strip Area Formula.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "VNPS Team Challenge: Calculate the area between $y = \\sqrt{x}$ and $y = x^2$ using both vertical integration $dx$ and horizontal integration $dy$ to prove equivalence!",
      "summary_data": {
        "summary": [
          "Area between curves represents the integral of the difference function $y_{\\text{upper}} - y_{\\text{lower}}$.",
          "Intersection points define the rigorous integration bounds without requiring arbitrary assumptions.",
          "Always verify whether curves cross each other within the interval to avoid signed cancellation."
        ],
        "islamic": "Measuring exact areas between boundaries instills equity and fairness in measuring resources without depriving any party (QS. Al-Muthaffifin: 1-3)."
      },
      "collab_cases": [
        "Find the exact area enclosed between the parabola $y = 6x - x^2$ and the linear function $y = 2x$.",
        "Calculate the total area between the cubic curve $y = x^3 - 4x$ and the horizontal line $y = 0$ over $[-2, 2]$.",
        "The marginal cost of an educational robotics lab is $MC(q) = 3q^2 - 24q + 50$. Find the total cost increase from $q = 2$ to $q = 6$.",
        "Find the area of the region bounded by $y = \\cos(x)$ and $y = \\sin(2x)$ on the interval $[0, \\frac{\\pi}{2}]$.",
        "Determine the analytical horizontal strip integration formula for the area between $x = y^2 - 2$ and $x = y$."
      ]
    },
    {
      "id": "P30",
      "bab": "Integral Calculus (CLIL)",
      "title": "Solid of Revolution: Disc & Washer Methods (Islamic Dome 3D)",
      "obj": [
        "Visualize 3-dimensional solid revolution generated by rotating curves about axes.",
        "Apply the Disc Method ($V = \\pi \\int_{a}^{b} [f(x)]^2 dx$) and Washer Method for hollow solids.",
        "Model the internal geometric volume of the modern Islamic Dome structure."
      ],
      "hook": "Designing the iconic parabolic dome of a grand mosque: revolving the profile curve $y = \\sqrt{16 - 4x}$ for $x \\in [0, 4]$ around the x-axis generates the exact 3D dome shell. What is the total air volume enclosed?",
      "toolkit": [
        {
          "name": "Disc Method (Rotation around x-axis)",
          "math": "$$V = \\pi \\int_{a}^{b} [y(x)]^2 dx$$"
        },
        {
          "name": "Washer Method (Hollow Solid)",
          "math": "$$V = \\pi \\int_{a}^{b} ([R_{\\text{outer}}(x)]^2 - [r_{\\text{inner}}(x)]^2) dx$$"
        },
        {
          "name": "Rotation around y-axis",
          "math": "$$V = \\pi \\int_{c}^{d} [x(y)]^2 dy$$"
        },
        {
          "name": "Prinsip Dasar Pencacahan Komplemen",
          "math": "$$n(A) = n(S) - n(A')$$"
        },
        {
          "name": "Aturan Kombinasi Pemilihan Bebas",
          "math": "$$\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$$"
        }
      ],
      "examples": [
        {
          "problem": "Find the volume of the solid generated by revolving $y = \\sqrt{x}$ from $x = 0$ to $x = 4$ about the x-axis.",
          "solution": "Langkah 1: Menggunakan rumus Disc Method (Rotation around x-axis), analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nStep 1: Disc Method formula: $V = \\pi \\int_{0}^{4} y^2 dx$.\nStep 2: Substitute $y^2 = (\\sqrt{x})^2 = x$: $V = \\pi \\int_{0}^{4} x dx$.\nStep 3: Integrate: $V = \\pi [\\frac{1}{2}x^2]_0^4 = \\pi (\\frac{16}{2} - 0) = 8\\pi\\text{ units}^3$.\nConclusion: The solid revolution volume is $8\\pi\\text{ units}^3$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Calculate the volume of the solid formed by rotating the region bounded by $y = x^2$ and $y = 4$ around the y-axis.",
          "solution": "Langkah 1: Menggunakan rumus Disc Method (Rotation around x-axis), analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nStep 1: Rotation around y-axis uses $V = \\pi \\int_{0}^{4} x^2 dy$.\nStep 2: From $y = x^2$, we have $x^2 = y$.\nStep 3: Integrate with respect to $y$: $V = \\pi \\int_{0}^{4} y dy = \\pi [\\frac{y^2}{2}]_0^4 = \\pi (\\frac{16}{2}) = 8\\pi\\text{ units}^3$.\nConclusion: The volume of revolution about the y-axis is $8\\pi\\text{ units}^3$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Using the Washer Method, find the volume generated by rotating the region between $y = x$ and $y = x^2$ about the x-axis.",
          "solution": "Langkah 1: Menggunakan rumus Disc Method (Rotation around x-axis), analisis komponen yang diketahui.\nLangkah 2: Selesaikan perhitungan aljabar secara bertahap:\nStep 1: Intersections: $x = x^2 \\implies x = 0$ and $x = 1$.\nStep 2: Over $[0, 1]$, $R(x) = x$ and $r(x) = x^2$.\nStep 3: Washer formula: $V = \\pi \\int_{0}^{1} (x^2 - (x^2)^2) dx = \\pi \\int_{0}^{1} (x^2 - x^4) dx$.\nStep 4: Integrate: $V = \\pi [\\frac{x^3}{3} - \\frac{x^5}{5}]_0^1 = \\pi (\\frac{1}{3} - \\frac{1}{5}) = \\frac{2}{15}\\pi\\text{ units}^3$.\nConclusion: Using Washer Method, the hollow volume is $\\frac{2}{15}\\pi\\text{ units}^3$.\nKesimpulan: Diperoleh hasil akhir yang memenuhi persyaratan."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Solid of Revolution: Disc & Washer Methods (Islamic Dome 3D). Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Disc Method (Rotation around x-axis), definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Washer Method (Hollow Solid), lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Solid of Revolution: Disc & Washer Methods (Islamic Dome 3D), selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Disc Method (Rotation around x-axis).\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Washer Method (Hollow Solid).\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
        }
      ],
      "btc": "VNPS Team Challenge: Calculate the volume of an Islamic Mosque Dome formed by rotating $y = 6 - \\frac{1}{2}x^2$ from $x = 0$ to $x = \\sqrt{12}$ around the y-axis!",
      "summary_data": {
        "summary": [
          "Revolving 2D planar regions around a coordinate axis creates symmetrical 3D solids of revolution.",
          "The Disc Method sums circular cross-sections of area $A(x) = \\pi [f(x)]^2$.",
          "The Washer Method computes concentric ring cross-sections: $\\pi (R^2 - r^2)$ for hollow structures."
        ],
        "islamic": "Symmetrical solids of revolution in mosque architecture reflect cosmic harmony and the perfection of divine creation (QS. Ar-Rahman: 7-9)."
      },
      "collab_cases": [
        "Find the volume of the solid generated by revolving the region bounded by $y = \\sqrt{x}$, $x = 4$, and $y = 0$ about the $x$-axis by $360^\\circ$.",
        "Use the Washer Method to compute the volume generated by revolving the region between $y = x^2$ and $y = 4$ about the line $y = 4$.",
        "Model the school architectural dome by revolving the parabolic profile $y = 4 - x^2$ ($0 \\le x \\le 2$) about the $y$-axis. Calculate its volume.",
        "Use Cylindrical Shells to calculate the volume of the solid obtained by revolving $y = 2x - x^2$ about the $y$-axis.",
        "Evaluate the arc length of the parametric curve $x(t) = \\cos(t), y(t) = \\sin(t)$ over $[0, 2\\pi]$ and verify the perimeter of a unit circle."
      ]
    }
  ]
};

const STUDENTS_DB = {"XII_F1": {"kelas_name": "Kelas XII F1", "access_level": "wajib_only", "students": [{"nis": "24400004", "name": "Aisyah Rachma Ufaira"}, {"nis": "24400005", "name": "Al Atha Uqail Ahmad Yudanto"}, {"nis": "24400006", "name": "Alifatis Muhammad Khalid"}, {"nis": "24400007", "name": "Alifia Nur Arfa Dinata"}, {"nis": "24400008", "name": "Alika Ayu Namira"}, {"nis": "24400010", "name": "Almira Latifah Alma Suryana"}, {"nis": "24400012", "name": "Aqeela Khumaira Hardian"}, {"nis": "24400019", "name": "Athalariq Akbar Mukti"}, {"nis": "24400024", "name": "Bilqis Zhafif Khumaira"}, {"nis": "24400028", "name": "Danish Attaya Akbar"}, {"nis": "24400031", "name": "Fazila Kayla Shiva"}, {"nis": "24400037", "name": "Hamzah Athaullah Sathi"}, {"nis": "24400044", "name": "Kaori Yobi Kalevi"}, {"nis": "24400046", "name": "Keisha Maritza Ahmad"}, {"nis": "24400047", "name": "Khayra Putri Ariny"}, {"nis": "24400052", "name": "Maheswari Kirana Paramitha Riyadh"}, {"nis": "24400058", "name": "Muhammad Fachrizky Athaya"}, {"nis": "24400065", "name": "Nala Ardika Naraditya Althaf"}, {"nis": "24400075", "name": "Nesya Linetta Sarostha"}, {"nis": "24400076", "name": "Nur Hanifah Qiani"}, {"nis": "24400078", "name": "Prinsa Amikal Suria"}, {"nis": "24400081", "name": "Rakei Friandary"}, {"nis": "24400088", "name": "Rhania Syifa Evliya"}, {"nis": "24400091", "name": "Satoru Kenzie"}, {"nis": "24400097", "name": "Yusfa Nova Almira"}]}, "XII_F2": {"kelas_name": "Kelas XII F2", "access_level": "wajib_only", "students": [{"nis": "24400003", "name": "Ahmad Dzaka Fithraya Rasalhague"}, {"nis": "24400009", "name": "Alliyah Noor"}, {"nis": "24400011", "name": "Anezka Kendra Cielika"}, {"nis": "24400013", "name": "Arfa Adiwinata Setyadi"}, {"nis": "24400014", "name": "Arizty Al Ghayda Mahardhika"}, {"nis": "24400015", "name": "Arjuna Satrio Lanang"}, {"nis": "24400029", "name": "Emir Kaysan Askar"}, {"nis": "25400101", "name": "Galuh Chandra Kirana"}, {"nis": "24400035", "name": "Ghazi Saverio Wangkoro"}, {"nis": "24400040", "name": "Hilgan Rabbani Kusnadi"}, {"nis": "24400045", "name": "Kayla Asyifa Jasmine"}, {"nis": "24400048", "name": "Kiminurintani Ghimaz Pratiwi"}, {"nis": "24400057", "name": "Muhammad Bintang Satria"}, {"nis": "24400061", "name": "Muhammad Hanif Hafuza Martono"}, {"nis": "24400064", "name": "Nadifa Misyka Alfarisi"}, {"nis": "24400068", "name": "Nasya Bintang Atifa"}, {"nis": "24400069", "name": "Nasya Shifra Edgina"}, {"nis": "24400073", "name": "Nayla Rasya"}, {"nis": "24400077", "name": "Oryza Sativa"}, {"nis": "24400087", "name": "Revayya Almira Radhiza"}, {"nis": "24400090", "name": "Sashikianna Putri Sugiharjo"}, {"nis": "24400092", "name": "Sausan Audrey Lathifah"}, {"nis": "24400095", "name": "Tzeirasuva Mustika Ananta Ralliargya"}, {"nis": "24400096", "name": "Vania Azzara"}, {"nis": "24400098", "name": "Zahra Kaila Putri"}]}, "XII_F3": {"kelas_name": "Kelas XII F3", "access_level": "full", "students": [{"nis": "24400001", "name": "Abdurrahman Athar"}, {"nis": "24400016", "name": "Asha Maulida Nasuha"}, {"nis": "24400017", "name": "Assyifa Q Aina"}, {"nis": "24400018", "name": "Atha Maiva Dialfi"}, {"nis": "24400021", "name": "Auriel Latisha Rustiadi"}, {"nis": "24400026", "name": "Chalisa Nasha Janitra"}, {"nis": "24400027", "name": "Cyrilla Qanita Salsabila"}, {"nis": "24400032", "name": "Fazli Fayyaz Bibra"}, {"nis": "24400033", "name": "Gavin Ananta Mudiartono"}, {"nis": "24400034", "name": "Gede Radheya Javaskalki Nararya"}, {"nis": "24400043", "name": "Jae Hwa Evelyn Az Zahra"}, {"nis": "24400049", "name": "Kinanthi Sekarlangit"}, {"nis": "24400050", "name": "Kyara Najla Putri"}, {"nis": "24400053", "name": "Miftahul Rizqi Rabani"}, {"nis": "24400054", "name": "Milan Adyaraka Sudiro"}, {"nis": "24400055", "name": "Mohammed Febro Arkenzie"}, {"nis": "24400056", "name": "Muhammad Arkan Wicaksena"}, {"nis": "24400062", "name": "Muhammad Mufid Zhafran"}, {"nis": "24400066", "name": "Nararya Fatih Mainza"}, {"nis": "24400070", "name": "Naufal Indriatno"}, {"nis": "24400071", "name": "Navira Qisya Camilla"}, {"nis": "24400072", "name": "Nayla Adriani Noormandiri"}, {"nis": "24400074", "name": "Nazwa Avrilia Putri Abzis"}, {"nis": "24400085", "name": "Raydhan Jiffar Seniawanputra"}, {"nis": "24400094", "name": "Syahra Lenira Rangkuti"}]}, "XII_F4": {"kelas_name": "Kelas XII F4", "access_level": "full", "students": [{"nis": "24400002", "name": "Ahmad Bayanaka Rajab"}, {"nis": "24400020", "name": "Atsyla Athano Biandra"}, {"nis": "24400022", "name": "Azzadin Al Azzam"}, {"nis": "24400023", "name": "Bianda Alana Bilham"}, {"nis": "24400025", "name": "Bima Fattah Ghaisan"}, {"nis": "24400030", "name": "Fabian Putra Anzil Firdaus"}, {"nis": "24400036", "name": "Gwen Rasendriya Doanda"}, {"nis": "24400038", "name": "Hanako Marihot Kiarra Tampubolon"}, {"nis": "24400039", "name": "Hazika Hanin Aqilani"}, {"nis": "24400041", "name": "Ikram Apriliano Putra Keisa"}, {"nis": "24400042", "name": "Izzan Maulana"}, {"nis": "24400059", "name": "Muhammad Farras Afif"}, {"nis": "24400060", "name": "Muhammad Firman Thaheer"}, {"nis": "24400063", "name": "Muhammad Regan Arrizki"}, {"nis": "24400067", "name": "Naryama Damai Abyasa"}, {"nis": "24400079", "name": "Raden Zaviero Marcega"}, {"nis": "24400080", "name": "Raditya Kara Nararya"}, {"nis": "24400082", "name": "Rakha Sanjaya"}, {"nis": "24400083", "name": "Rania Zivanka Kurniawan"}, {"nis": "24400084", "name": "Raushan Garlen Disiyona"}, {"nis": "24400086", "name": "Reyhan Putra Sahlan"}, {"nis": "24400089", "name": "Safa Klarisza Praja Darma"}, {"nis": "24400093", "name": "Setia Muhammad Abrar"}, {"nis": "24400099", "name": "Zerlinda Arissa Hudoyo"}, {"nis": "24400100", "name": "Zharfa Qisthina Alifah"}]}};

    // ===== DAFTAR 100 SISWA RESMI KELAS XII (12 F.1 s.d 12 F.4) =====
    window.STUDENTS_DATA = {
            '24400004': { nama: 'Aisyah Rachma Ufaira', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400005': { nama: 'Al Atha Uqail Ahmad Yudanto', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400006': { nama: 'Alifatis Muhammad Khalid', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400007': { nama: 'Alifia Nur Arfa Dinata', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400008': { nama: 'Alika Ayu Namira', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400010': { nama: 'Almira Latifah Alma Suryana', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400012': { nama: 'Aqeela Khumaira Hardian', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400019': { nama: 'Athalariq Akbar Mukti', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400024': { nama: 'Bilqis Zhafif Khumaira', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400028': { nama: 'Danish Attaya Akbar', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400031': { nama: 'Fazila Kayla Shiva', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400037': { nama: 'Hamzah Athaullah Sathi', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400044': { nama: 'Kaori Yobi Kalevi', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400046': { nama: 'Keisha Maritza Ahmad', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400047': { nama: 'Khayra Putri Ariny', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400052': { nama: 'Maheswari Kirana Paramitha Riyadh', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400058': { nama: 'Muhammad Fachrizky Athaya', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400065': { nama: 'Nala Ardika Naraditya Althaf', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400075': { nama: 'Nesya Linetta Sarostha', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400076': { nama: 'Nur Hanifah Qiani', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400078': { nama: 'Prinsa Amikal Suria', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400081': { nama: 'Rakei Friandary', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400088': { nama: 'Rhania Syifa Evliya', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400091': { nama: 'Satoru Kenzie', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400097': { nama: 'Yusfa Nova Almira', kelas: 'XII F1', access_level: 'wajib_only' },
            '24400003': { nama: 'Ahmad Dzaka Fithraya Rasalhague', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400009': { nama: 'Alliyah Noor', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400011': { nama: 'Anezka Kendra Cielika', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400013': { nama: 'Arfa Adiwinata Setyadi', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400014': { nama: 'Arizty Al Ghayda Mahardhika', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400015': { nama: 'Arjuna Satrio Lanang', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400029': { nama: 'Emir Kaysan Askar', kelas: 'XII F2', access_level: 'wajib_only' },
            '25400101': { nama: 'Galuh Chandra Kirana', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400035': { nama: 'Ghazi Saverio Wangkoro', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400040': { nama: 'Hilgan Rabbani Kusnadi', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400045': { nama: 'Kayla Asyifa Jasmine', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400048': { nama: 'Kiminurintani Ghimaz Pratiwi', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400057': { nama: 'Muhammad Bintang Satria', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400061': { nama: 'Muhammad Hanif Hafuza Martono', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400064': { nama: 'Nadifa Misyka Alfarisi', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400068': { nama: 'Nasya Bintang Atifa', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400069': { nama: 'Nasya Shifra Edgina', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400073': { nama: 'Nayla Rasya', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400077': { nama: 'Oryza Sativa', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400087': { nama: 'Revayya Almira Radhiza', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400090': { nama: 'Sashikianna Putri Sugiharjo', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400092': { nama: 'Sausan Audrey Lathifah', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400095': { nama: 'Tzeirasuva Mustika Ananta Ralliargya', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400096': { nama: 'Vania Azzara', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400098': { nama: 'Zahra Kaila Putri', kelas: 'XII F2', access_level: 'wajib_only' },
            '24400001': { nama: 'Abdurrahman Athar', kelas: 'XII F3', access_level: 'full' },
            '24400016': { nama: 'Asha Maulida Nasuha', kelas: 'XII F3', access_level: 'full' },
            '24400017': { nama: 'Assyifa Q Aina', kelas: 'XII F3', access_level: 'full' },
            '24400018': { nama: 'Atha Maiva Dialfi', kelas: 'XII F3', access_level: 'full' },
            '24400021': { nama: 'Auriel Latisha Rustiadi', kelas: 'XII F3', access_level: 'full' },
            '24400026': { nama: 'Chalisa Nasha Janitra', kelas: 'XII F3', access_level: 'full' },
            '24400027': { nama: 'Cyrilla Qanita Salsabila', kelas: 'XII F3', access_level: 'full' },
            '24400032': { nama: 'Fazli Fayyaz Bibra', kelas: 'XII F3', access_level: 'full' },
            '24400033': { nama: 'Gavin Ananta Mudiartono', kelas: 'XII F3', access_level: 'full' },
            '24400034': { nama: 'Gede Radheya Javaskalki Nararya', kelas: 'XII F3', access_level: 'full' },
            '24400043': { nama: 'Jae Hwa Evelyn Az Zahra', kelas: 'XII F3', access_level: 'full' },
            '24400049': { nama: 'Kinanthi Sekarlangit', kelas: 'XII F3', access_level: 'full' },
            '24400050': { nama: 'Kyara Najla Putri', kelas: 'XII F3', access_level: 'full' },
            '24400053': { nama: 'Miftahul Rizqi Rabani', kelas: 'XII F3', access_level: 'full' },
            '24400054': { nama: 'Milan Adyaraka Sudiro', kelas: 'XII F3', access_level: 'full' },
            '24400055': { nama: 'Mohammed Febro Arkenzie', kelas: 'XII F3', access_level: 'full' },
            '24400056': { nama: 'Muhammad Arkan Wicaksena', kelas: 'XII F3', access_level: 'full' },
            '24400062': { nama: 'Muhammad Mufid Zhafran', kelas: 'XII F3', access_level: 'full' },
            '24400066': { nama: 'Nararya Fatih Mainza', kelas: 'XII F3', access_level: 'full' },
            '24400070': { nama: 'Naufal Indriatno', kelas: 'XII F3', access_level: 'full' },
            '24400071': { nama: 'Navira Qisya Camilla', kelas: 'XII F3', access_level: 'full' },
            '24400072': { nama: 'Nayla Adriani Noormandiri', kelas: 'XII F3', access_level: 'full' },
            '24400074': { nama: 'Nazwa Avrilia Putri Abzis', kelas: 'XII F3', access_level: 'full' },
            '24400085': { nama: 'Raydhan Jiffar Seniawanputra', kelas: 'XII F3', access_level: 'full' },
            '24400094': { nama: 'Syahra Lenira Rangkuti', kelas: 'XII F3', access_level: 'full' },
            '24400002': { nama: 'Ahmad Bayanaka Rajab', kelas: 'XII F4', access_level: 'full' },
            '24400020': { nama: 'Atsyla Athano Biandra', kelas: 'XII F4', access_level: 'full' },
            '24400022': { nama: 'Azzadin Al Azzam', kelas: 'XII F4', access_level: 'full' },
            '24400023': { nama: 'Bianda Alana Bilham', kelas: 'XII F4', access_level: 'full' },
            '24400025': { nama: 'Bima Fattah Ghaisan', kelas: 'XII F4', access_level: 'full' },
            '24400030': { nama: 'Fabian Putra Anzil Firdaus', kelas: 'XII F4', access_level: 'full' },
            '24400036': { nama: 'Gwen Rasendriya Doanda', kelas: 'XII F4', access_level: 'full' },
            '24400038': { nama: 'Hanako Marihot Kiarra Tampubolon', kelas: 'XII F4', access_level: 'full' },
            '24400039': { nama: 'Hazika Hanin Aqilani', kelas: 'XII F4', access_level: 'full' },
            '24400041': { nama: 'Ikram Apriliano Putra Keisa', kelas: 'XII F4', access_level: 'full' },
            '24400042': { nama: 'Izzan Maulana', kelas: 'XII F4', access_level: 'full' },
            '24400059': { nama: 'Muhammad Farras Afif', kelas: 'XII F4', access_level: 'full' },
            '24400060': { nama: 'Muhammad Firman Thaheer', kelas: 'XII F4', access_level: 'full' },
            '24400063': { nama: 'Muhammad Regan Arrizki', kelas: 'XII F4', access_level: 'full' },
            '24400067': { nama: 'Naryama Damai Abyasa', kelas: 'XII F4', access_level: 'full' },
            '24400079': { nama: 'Raden Zaviero Marcega', kelas: 'XII F4', access_level: 'full' },
            '24400080': { nama: 'Raditya Kara Nararya', kelas: 'XII F4', access_level: 'full' },
            '24400082': { nama: 'Rakha Sanjaya', kelas: 'XII F4', access_level: 'full' },
            '24400083': { nama: 'Rania Zivanka Kurniawan', kelas: 'XII F4', access_level: 'full' },
            '24400084': { nama: 'Raushan Garlen Disiyona', kelas: 'XII F4', access_level: 'full' },
            '24400086': { nama: 'Reyhan Putra Sahlan', kelas: 'XII F4', access_level: 'full' },
            '24400089': { nama: 'Safa Klarisza Praja Darma', kelas: 'XII F4', access_level: 'full' },
            '24400093': { nama: 'Setia Muhammad Abrar', kelas: 'XII F4', access_level: 'full' },
            '24400099': { nama: 'Zerlinda Arissa Hudoyo', kelas: 'XII F4', access_level: 'full' },
            '24400100': { nama: 'Zharfa Qisthina Alifah', kelas: 'XII F4', access_level: 'full' }
        };

    // MASTER ACADEMIC CALENDAR DATABASE (TERPADU TKA GEL. 2 & UTBK-SNBT 2027)
    const CALENDAR_DATA = [
      // JULI 2026
      { month: "Juli 2026", sem: 1, date: "1 – 11 Juli 2026", title: "Libur Akhir Semester Genap & Awal Tahun Ajaran", cat: "libur", badge: "🔴 Libur Resmi", color: "rose" },
      { month: "Juli 2026", sem: 1, date: "13 – 15 Juli 2026", title: "Masa Pengenalan Lingkungan Sekolah (MPLS)", cat: "kbm", badge: "🟢 KBM Efektif", color: "emerald" },
      { month: "Juli 2026", sem: 1, date: "16 Juli 2026", title: "Grand Opening Tahun Ajaran 2026/2027", cat: "kbm", badge: "🟢 KBM Efektif", color: "emerald" },
      { month: "Juli 2026", sem: 1, date: "21 Juli 2026", title: "Starting Pendalaman Materi (PM) & Tes Minat Bakat Grade XII", cat: "kbm", badge: "🟢 KBM Efektif", color: "emerald" },
      { month: "Juli 2026", sem: 1, date: "27 Jul – 27 Sep 2026", title: "Periode Registrasi Akun & Pendaftaran Peserta TKA / AN", cat: "tka", badge: "🟣 Registrasi TKA", color: "purple" },

      // AGUSTUS 2026
      { month: "Agustus 2026", sem: 1, date: "17 Agustus 2026", title: "Upacara HUT Ke-81 Kemerdekaan RI", cat: "libur", badge: "🔴 Libur Nasional", color: "rose" },
      { month: "Agustus 2026", sem: 1, date: "21 Agustus 2026", title: "Sosialisasi & Informasi Terkait TKA & ANBK Kelas XII", cat: "tka", badge: "🟣 Info TKA XII", color: "purple" },
      { month: "Agustus 2026", sem: 1, date: "25 Agustus 2026", title: "LIBUR NASIONAL: Maulid Nabi Muhammad SAW", cat: "libur", badge: "🔴 Libur Nasional", color: "rose" },
      { month: "Agustus 2026", sem: 1, date: "26 – 28 Agustus 2026", title: "Latihan Dasar Kepemimpinan Siswa (LDKS)", cat: "kbm", badge: "🟢 Kegiatan Siswa", color: "emerald" },

      // SEPTEMBER 2026
      { month: "September 2026", sem: 1, date: "17 – 18 September 2026", title: "ASTS Praktik Semester Ganjil", cat: "ujian", badge: "🔵 Ujian Praktik", color: "blue" },
      { month: "September 2026", sem: 1, date: "21 – 25 September 2026", title: "ASTS CBT (Asesmen Sumatif Tengah Semester CBT)", cat: "ujian", badge: "🔵 Ujian CBT", color: "blue" },
      { month: "September 2026", sem: 1, date: "21 – 27 September 2026", title: "Periode Simulasi TKA & Asesmen Nasional (Sinkronisasi Server)", cat: "tka", badge: "🟣 Simulasi TKA", color: "purple" },

      // OKTOBER 2026
      { month: "Oktober 2026", sem: 1, date: "1 Oktober 2026", title: "Progress Report PTS & Student-Led Conference (SLC)", cat: "ujian", badge: "🔵 Rapor PTS", color: "blue" },
      { month: "Oktober 2026", sem: 1, date: "5 – 11 Oktober 2026", title: "[TKA Gel. 1 di Luar]: Belajar Efektif Reguler di Kelas", cat: "kbm", badge: "🟢 KBM Efektif", color: "emerald" },
      { month: "Oktober 2026", sem: 1, date: "12 – 18 Oktober 2026", title: "GLADI BERSIH TKA & ASESMEN NASIONAL GELOMBANG 2", cat: "tka", badge: "🟣 GLADI TKA GEL. 2", color: "purple" },
      { month: "Oktober 2026", sem: 1, date: "26 – 29 Oktober 2026", title: "[TKA Gel. 1 di Luar]: Belajar Efektif & Drilling Soal TKA", cat: "tka", badge: "🟣 DRILLING TKA", color: "purple" },

      // NOVEMBER 2026
      { month: "November 2026", sem: 1, date: "2 – 5 November 2026", title: "PELAKSANAAN UTAMA TKA & ASESMEN NASIONAL GELOMBANG 2", cat: "tka", badge: "🟣 UTAMA TKA GEL. 2", color: "purple" },
      { month: "November 2026", sem: 1, date: "13 November 2026", title: "Grade XII Pendalaman Materi & Drilling UTBK", cat: "kbm", badge: "🟢 KBM Intensif", color: "emerald" },
      { month: "November 2026", sem: 1, date: "20 November 2026", title: "Grade XII Sharing Alumni & Bedah Jurusan PTN", cat: "tka", badge: "🟣 Info PTN", color: "purple" },
      { month: "November 2026", sem: 1, date: "23 – 26 November 2026", title: "TKA & ANBK SUSULAN GELOMBANG 2 (Bagi Siswa Sakit/Izin)", cat: "tka", badge: "🟣 TKA Susulan", color: "purple" },
      { month: "November 2026", sem: 1, date: "27 November 2026", title: "Grade XII Informasi & Strategi Seleksi SNBP / SNBT 2027", cat: "tka", badge: "🟣 Info PTN", color: "purple" },
      { month: "November 2026", sem: 1, date: "30 Nov – 2 Des 2026", title: "ASAS Praktik Semester Ganjil Dimulai", cat: "ujian", badge: "🔵 Ujian Praktik", color: "blue" },

      // DESEMBER 2026
      { month: "Desember 2026", sem: 1, date: "2 – 8 Desember 2026", title: "ASAS CBT (Asesmen Sumatif Akhir Semester CBT)", cat: "ujian", badge: "🔵 Ujian CBT", color: "blue" },
      { month: "Desember 2026", sem: 1, date: "9 – 14 Desember 2026", title: "Ujian Susulan & Remedial Akhir Semester", cat: "ujian", badge: "🔵 Remedial", color: "blue" },
      { month: "Desember 2026", sem: 1, date: "17 Desember 2026", title: "Pembagian Rapor Semester Ganjil (Progress Report ASAS)", cat: "ujian", badge: "🔵 Rapor ASAS", color: "blue" },
      { month: "Desember 2026", sem: 1, date: "21 – 31 Desember 2026", title: "Libur Akhir Semester Ganjil Peserta Didik", cat: "libur", badge: "🔴 Libur Semester", color: "rose" },
      { month: "Desember 2026", sem: 1, date: "23 Desember 2026", title: "PENGUMUMAN RESMI HASIL TKA NASIONAL 2026", cat: "tka", badge: "🟣 HASIL TKA", color: "purple" },
      { month: "Desember 2026", sem: 1, date: "24 – 25 Desember 2026", title: "Cuti Bersama & Hari Raya Natal", cat: "libur", badge: "🔴 Libur Nasional", color: "rose" },

      // JANUARI 2027
      { month: "Januari 2027", sem: 2, date: "1 Januari 2027", title: "Tahun Baru Masehi 2027", cat: "libur", badge: "🔴 Libur Nasional", color: "rose" },
      { month: "Januari 2027", sem: 2, date: "5 Januari 2027", title: "Isra Mikraj Nabi Muhammad SAW 1448 H", cat: "libur", badge: "🔴 Libur Nasional", color: "rose" },
      { month: "Januari 2027", sem: 2, date: "6 Januari 2027", title: "Awal Masuk KBM Semester Genap", cat: "kbm", badge: "🟢 KBM Efektif", color: "emerald" },
      { month: "Januari 2027", sem: 2, date: "9 Januari 2027", title: "Parents Meeting Grade XII (Sosialisasi Seleksi PTN & SNPMB)", cat: "tka", badge: "🟣 Info PTN", color: "purple" },
      { month: "Januari 2027", sem: 2, date: "12 Jan – 07 Apr 2027", title: "MULAI REGISTRASI AKUN SNPMB SISWA (s.d. 07 April 2027)", cat: "tka", badge: "🟣 AKUN SNPMB", color: "purple" },

      // FEBRUARI 2027
      { month: "Februari 2027", sem: 2, date: "5 – 6 Februari 2027", title: "Cuti Bersama & Tahun Baru Imlek 2578", cat: "libur", badge: "🔴 Libur Nasional", color: "rose" },
      { month: "Februari 2027", sem: 2, date: "8 – 10 Februari 2027", title: "Libur Awal Ramadhan 1448 H", cat: "libur", badge: "🔴 Libur Puasa", color: "rose" },
      { month: "Februari 2027", sem: 2, date: "15 – 24 Februari 2027", title: "ASTS & Try Out ASAJ Semester 2 (Simulasi CBT XII)", cat: "ujian", badge: "🔵 Try Out CBT", color: "blue" },

      // MARET 2027
      { month: "Maret 2027", sem: 2, date: "1 – 18 Maret 2027", title: "Libur Akhir Ramadhan & Idul Fitri 1448 H", cat: "libur", badge: "🔴 Libur Lebaran", color: "rose" },
      { month: "Maret 2027", sem: 2, date: "10 – 11 Maret 2027", title: "HARI RAYA IDUL FITRI 1448 H", cat: "libur", badge: "🔴 Libur Nasional", color: "rose" },
      { month: "Maret 2027", sem: 2, date: "22 Maret 2027", title: "Siswa Masuk Kembali Pasca Libur Lebaran", cat: "kbm", badge: "🟢 KBM Masuk", color: "emerald" },
      { month: "Maret 2027", sem: 2, date: "25 Mar – 07 Apr 2027", title: "MULAI PENDAFTARAN UTBK-SNBT 2027 (PENTING!)", cat: "tka", badge: "🟣 DAFTAR UTBK", color: "purple" },
      { month: "Maret 2027", sem: 2, date: "25 Mar – 08 Apr 2027", title: "MULAI PEMBAYARAN BIAYA UTBK 2027", cat: "tka", badge: "🟣 BAYAR UTBK", color: "purple" },
      { month: "Maret 2027", sem: 2, date: "25 Maret 2027", title: "Pembagian Rapor Tengah Semester 2", cat: "ujian", badge: "🔵 Rapor PTS", color: "blue" },
      { month: "Maret 2027", sem: 2, date: "26 – 31 Maret 2027", title: "ASAJ Praktik Kelas XII (Ujian Sekolah Praktik)", cat: "ujian", badge: "🔵 Ujian Praktik", color: "blue" },
      { month: "Maret 2027", sem: 2, date: "26 Maret 2027", title: "Libur Nasional Wafat Isa Almasih", cat: "libur", badge: "🔴 Libur Nasional", color: "rose" },

      // APRIL 2027
      { month: "April 2027", sem: 2, date: "1 – 2 April 2027", title: "Lanjutan ASAJ Praktik Kelas XII", cat: "ujian", badge: "🔵 Ujian Praktik", color: "blue" },
      { month: "April 2027", sem: 2, date: "5 – 12 April 2027", title: "ASAJ Tertulis / CBT Kelas XII (Ujian Akhir Jenjang)", cat: "ujian", badge: "🔵 ASAJ CBT XII", color: "blue" },
      { month: "April 2027", sem: 2, date: "07 April 2027", title: "BATAS AKHIR PENDAFTARAN UTBK-SNBT & REGISTRASI AKUN", cat: "tka", badge: "🟣 DEADLINE UTBK", color: "purple" },
      { month: "April 2027", sem: 2, date: "08 April 2027", title: "BATAS AKHIR PEMBAYARAN BIAYA UTBK-SNBT", cat: "tka", badge: "🟣 DEADLINE BAYAR", color: "purple" },
      { month: "April 2027", sem: 2, date: "21 – 30 April 2027", title: "PELAKSANAAN UTBK-SNBT 2027 (GELOMBANG UTAMA)", cat: "tka", badge: "🟣 UTBK 2027 UTAMA", color: "purple" },

      // MEI 2027
      { month: "Mei 2027", sem: 2, date: "1 Mei 2027", title: "Hari Buruh Internasional", cat: "libur", badge: "🔴 Libur Nasional", color: "rose" },
      { month: "Mei 2027", sem: 2, date: "6 – 7 Mei 2027", title: "Kenaikan Isa Almasih & Cuti Bersama", cat: "libur", badge: "🔴 Libur Nasional", color: "rose" },
      { month: "Mei 2027", sem: 2, date: "17 – 19 Mei 2027", title: "Hari Raya Idul Adha & Hari Tasyrik", cat: "libur", badge: "🔴 Libur Nasional", color: "rose" },
      { month: "Mei 2027", sem: 2, date: "20 – 21 Mei 2027", title: "Hari Raya Waisak & Cuti Bersama", cat: "libur", badge: "🔴 Libur Nasional", color: "rose" },
      { month: "Mei 2027", sem: 2, date: "25 Mei 2027", title: "PENGUMUMAN RESMI HASIL KELULUSAN UTBK-SNBT 2027", cat: "tka", badge: "🟣 PENGUMUMAN SNBT", color: "purple" },
      { month: "Mei 2027", sem: 2, date: "27 – 28 Mei 2027", title: "WISUDA & PELEPASAN SISWA KELAS XII (FASE F)", cat: "tka", badge: "🎓 WISUDA KELAS XII", color: "amber" },

      // JUNI 2027
      { month: "Juni 2027", sem: 2, date: "1 Juni 2027", title: "Hari Lahir Pancasila", cat: "libur", badge: "🔴 Libur Nasional", color: "rose" },
      { month: "Juni 2027", sem: 2, date: "02 Jun – 31 Jul 2027", title: "MASA UNDUH SERTIFIKAT NILAI UTBK-SNBT 2027", cat: "tka", badge: "🟣 UNDUH SERTIFIKAT", color: "purple" },
      { month: "Juni 2027", sem: 2, date: "6 Juni 2027", title: "Tahun Baru Islam 1449 H", cat: "libur", badge: "🔴 Libur Nasional", color: "rose" },
      { month: "Juni 2027", sem: 2, date: "18 Juni 2027", title: "Penyerahan Rapor Kenaikan Kelas (Progress Report ASAT)", cat: "ujian", badge: "🔵 Rapor ASAT", color: "blue" },
      { month: "Juni 2027", sem: 2, date: "21 Juni – Juli 2027", title: "Libur Akhir Tahun Pelajaran Peserta Didik", cat: "libur", badge: "🔴 Libur Semester", color: "rose" }
    ];
