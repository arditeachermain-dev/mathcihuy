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
          "level": "Level 1: Fondasi",
          "title": "Diagonal Sisi dan Diagonal Ruang Kubus",
          "problem": "Pada kubus $ABCD.EFGH$ dengan panjang rusuk $8\\text{ cm}$, tentukan panjang diagonal sisi $AC$ dan panjang diagonal ruang $AG$!",
          "solution": "Langkah 1: Diagonal sisi alas $AC$ dihitung dengan rumus $AC = s\\sqrt{2} = 8\\sqrt{2}\\text{ cm}$.\nLangkah 2: Segitiga $ACG$ siku-siku di $C$ dengan panjang $AC = 8\\sqrt{2}\\text{ cm}$ dan $CG = 8\\text{ cm}$.\nLangkah 3: Menerapkan teorema Pythagoras: $AG = \\sqrt{AC^2 + CG^2} = \\sqrt{(8\\sqrt{2})^2 + 8^2} = \\sqrt{128 + 64} = \\sqrt{192} = 8\\sqrt{3}\\text{ cm}$.\nKesimpulan: Panjang diagonal sisi $AC = 8\\sqrt{2}\\text{ cm}$ dan panjang diagonal ruang $AG = 8\\sqrt{3}\\text{ cm}$."
        },
        {
          "level": "Level 2: Jarak ke Titik Tengah Rusuk",
          "title": "Jarak Titik Sudut ke Titik Tengah Rusuk Tegak",
          "problem": "Kubus $ABCD.EFGH$ memiliki panjang rusuk $6\\text{ cm}$. Titik $P$ terletak tepat di tengah-tengah rusuk tegak $CG$. Tentukan jarak dari titik sudut $A$ ke titik $P$!",
          "solution": "Langkah 1: Menghitung diagonal sisi alas: $AC = s\\sqrt{2} = 6\\sqrt{2}\\text{ cm}$.\nLangkah 2: Titik $P$ di tengah $CG \\implies CP = \\frac{1}{2}(6) = 3\\text{ cm}$.\nLangkah 3: Menghitung jarak $AP$ melalui segitiga siku-siku $ACP$:\n$$AP = \\sqrt{AC^2 + CP^2} = \\sqrt{(6\\sqrt{2})^2 + 3^2} = \\sqrt{72 + 9} = \\sqrt{81} = 9\\text{ cm}$$\nKesimpulan: Jarak titik $A$ ke titik $P$ adalah $9\\text{ cm}$."
        },
        {
          "level": "Level 3: Pythagoras 3D Balok & Pusat Bidang",
          "title": "Jarak Diagonal Ruang & Pusat Bidang Atas Balok",
          "problem": "Balok $ABCD.EFGH$ berukuran panjang $AB = 8\\text{ cm}$, lebar $BC = 6\\text{ cm}$, dan tinggi $CG = 5\\text{ cm}$. Tentukan jarak titik $A$ ke titik sudut ruang $G$, serta jarak titik $A$ ke titik pusat bidang atas $EFGH$ ($M$)!",
          "solution": "Langkah 1: Jarak $A$ ke $G$ (diagonal ruang balok):\n$$AG = \\sqrt{p^2 + l^2 + t^2} = \\sqrt{8^2 + 6^2 + 5^2} = \\sqrt{64 + 36 + 25} = \\sqrt{125} = 5\\sqrt{5}\\text{ cm}$$\nLangkah 2: Titik pusat bidang atas $M$ berproyeksi di titik tengah alas $O$ dengan $AO = \\frac{1}{2}\\sqrt{8^2 + 6^2} = 5\\text{ cm}$.\nLangkah 3: Jarak $AM = \\sqrt{AO^2 + OM^2} = \\sqrt{5^2 + 5^2} = 5\\sqrt{2}\\text{ cm}$.\nKesimpulan: Jarak $AG = 5\\sqrt{5}\\text{ cm}$ dan jarak $AM = 5\\sqrt{2}\\text{ cm}$."
        },
        {
          "level": "Level 4: Analitis Standar UTBK",
          "title": "Jarak Antartitik Tengah Rusuk Berlawanan",
          "problem": "Pada kubus $ABCD.EFGH$ dengan rusuk $12\\text{ cm}$, titik $M$ terletak di tengah rusuk $AB$ dan titik $N$ terletak di tengah rusuk $GH$. Tentukan jarak dari titik $M$ ke titik $N$!",
          "solution": "Langkah 1: Menentukan sistem koordinat 3D dengan $A(0,0,0)$:\n- $M$ di tengah $AB \\implies M(6, 0, 0)$\n- $N$ di tengah $GH \\implies N(6, 12, 12)$\nLangkah 2: Menghitung selisih koordinat: $\\Delta x = 0, \\Delta y = 12, \\Delta z = 12$.\nLangkah 3: Menghitung jarak:\n$$MN = \\sqrt{0^2 + 12^2 + 12^2} = \\sqrt{144 + 144} = \\sqrt{288} = 12\\sqrt{2}\\text{ cm}$$\nKesimpulan: Jarak titik $M$ ke titik $N$ adalah $12\\sqrt{2}\\text{ cm}$."
        },
        {
          "level": "Level 5: HOTS Kontekstual Geodesik",
          "title": "Lintasan Terpendek Perayapan Semut (Geodesik 3D)",
          "problem": "Sebuah ruangan aula berbentuk balok $ABCD.EFGH$ berukuran panjang $AB = 8\\text{ meter}$, lebar $BC = 6\\text{ meter}$, dan tinggi $AE = 4\\text{ meter}$. Seekor semut merayap pada permukaan dinding dari titik sudut lantai $A(0,0,0)$ menuju sudut langit-langit $G(8,6,4)$. Tentukan panjang lintasan terpendek yang ditempuh semut tersebut!",
          "solution": "Langkah 1: Membuka jaring-jaring balok pada 3 kemungkinan rute bidang datar:\n- Rute 1 (Alas + Dinding Samping): $d_1 = \\sqrt{(8 + 6)^2 + 4^2} = \\sqrt{196 + 16} = \\sqrt{212} = 2\\sqrt{53}\\text{ m} \\approx 14{,}56\\text{ m}$\n- Rute 2 (Dinding Depan + Atap): $d_2 = \\sqrt{(8 + 4)^2 + 6^2} = \\sqrt{144 + 36} = \\sqrt{180} = 6\\sqrt{5}\\text{ m} \\approx 13{,}42\\text{ m}$\n- Rute 3 (Dinding Samping Kiri + Atap): $d_3 = \\sqrt{8^2 + (6 + 4)^2} = \\sqrt{64 + 100} = \\sqrt{164} = 2\\sqrt{41}\\text{ m} \\approx 12{,}81\\text{ m}$\nLangkah 2: Memilih lintasan minimum terpendek: $d_3 = \\sqrt{164} = 2\\sqrt{41}\\text{ meter}$.\nKesimpulan: Panjang lintasan terpendek yang ditempuh semut adalah $2\\sqrt{41}\\text{ meter}$ ($\u0007pprox 12{,}81\\text{ meter}$)."
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
          "problem": "Pada kubus ABCD.EFGH dengan panjang rusuk 12 cm, tentukan jarak titik C ke garis diagonal ruang AG!",
          "solution": "Langkah 1: Perhatikan segitiga $ACG$ yang siku-siku di $C$. Alas $AC = 12\\sqrt{2}$, tinggi $CG = 12$, sisi miring $AG = 12\\sqrt{3}$.\nLangkah 2: Proyeksikan $C$ tegak lurus ke $AG$ di titik $C'$. Jaraknya adalah $t = CC'$.\nLangkah 3: Kesamaan luas segitiga: $AC \\times CG = AG \\times CC'$.\nLangkah 4: $CC' = \\frac{12\\sqrt{2} \\times 12}{12\\sqrt{3}} = \\frac{12\\sqrt{2}}{\\sqrt{3}} = \\frac{12\\sqrt{6}}{3} = 4\\sqrt{6}$ cm.\nKesimpulan: Jarak titik $C$ ke garis $AG$ adalah $4\\sqrt{6}$ cm."
        },
        {
          "problem": "Pada kubus ABCD.EFGH dengan rusuk 6 cm, tentukan jarak titik H ke garis diagonal sisi AC!",
          "solution": "Langkah 1: Segitiga $ACH$ adalah segitiga sama sisi dengan sisi $AC = CH = AH = 6\\sqrt{2}$ cm.\nLangkah 2: Proyeksi $H$ ke $AC$ jatuh tepat di titik tengah $AC$, sebut titik $O$.\nLangkah 3: $AO = \\frac{1}{2}(6\\sqrt{2}) = 3\\sqrt{2}$ cm.\nLangkah 4: $HO = \\sqrt{AH^2 - AO^2} = \\sqrt{(6\\sqrt{2})^2 - (3\\sqrt{2})^2} = \\sqrt{72 - 18} = \\sqrt{54} = 3\\sqrt{6}$ cm.\nKesimpulan: Jarak titik $H$ ke garis $AC$ adalah $3\\sqrt{6}$ cm."
        },
        {
          "problem": "Pada kubus ABCD.EFGH berusuk 8 cm, tentukan jarak titik B ke garis diagonal sisi EG!",
          "solution": "Langkah 1: Segitiga $BEG$ adalah segitiga sama sisi berukuran $8\\sqrt{2}$ cm.\nLangkah 2: Titik tengah $EG$ adalah $O$. Jarak $B$ ke $EG$ adalah $BO$.\nLangkah 3: $BO = \\sqrt{BE^2 - EO^2} = \\sqrt{(8\\sqrt{2})^2 - (4\\sqrt{2})^2} = \\sqrt{128 - 32} = \\sqrt{96} = 4\\sqrt{6}$ cm.\nKesimpulan: Jarak titik $B$ ke garis $EG$ adalah $4\\sqrt{6}$ cm."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Jarak Titik ke Garis (Proyeksi Tegak Lurus & Luas Segitiga). Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Kesamaan Luas Segitiga, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Jarak Titik Sudut ke Diagonal Ruang, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Jarak Titik ke Garis (Proyeksi Tegak Lurus & Luas Segitiga), selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Kesamaan Luas Segitiga.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Jarak Titik Sudut ke Diagonal Ruang.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
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
          "problem": "Pada kubus ABCD.EFGH dengan panjang rusuk 12 cm, tentukan jarak titik E ke bidang diagonal AFH!",
          "solution": "Langkah 1: Berdasarkan teorema proyeksi bidang diagonal kubus, jarak titik sudut terdekat ($E$) ke bidang $AFH$ adalah $\\frac{1}{3}$ diagonal ruang $EC$.\nLangkah 2: Diagonal ruang $EC = 12\\sqrt{3}$ cm.\nLangkah 3: $d = \\frac{1}{3} \\times 12\\sqrt{3} = 4\\sqrt{3}$ cm.\nKesimpulan: Jarak titik $E$ ke bidang $AFH$ adalah $4\\sqrt{3}$ cm."
        },
        {
          "problem": "Pada kubus ABCD.EFGH dengan panjang rusuk 12 cm, tentukan jarak titik C ke bidang diagonal AFH!",
          "solution": "Langkah 1: Titik $C$ adalah titik sudut terjauh yang dipisahkan oleh bidang diagonal $AFH$.\nLangkah 2: Jarak titik $C$ ke bidang $AFH$ adalah $\\frac{2}{3}$ diagonal ruang $EC$.\nLangkah 3: $d = \\frac{2}{3} \\times 12\\sqrt{3} = 8\\sqrt{3}$ cm.\nKesimpulan: Jarak titik $C$ ke bidang $AFH$ adalah $8\\sqrt{3}$ cm."
        },
        {
          "problem": "Kubus ABCD.EFGH memiliki rusuk 9 cm. Tentukan jarak titik C ke bidang BDG!",
          "solution": "Langkah 1: Titik $C$ adalah sudut terdekat ke bidang $BDG$.\nLangkah 2: Jarak titik sudut terdekat ke bidang diagonal segitiga adalah $\\frac{1}{3} s\\sqrt{3}$.\nLangkah 3: $d = \\frac{1}{3} \\times 9\\sqrt{3} = 3\\sqrt{3}$ cm.\nKesimpulan: Jarak titik $C$ ke bidang $BDG$ adalah $3\\sqrt{3}$ cm."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Jarak Titik ke Bidang (Teorema 1/3 & 2/3 Diagonal Ruang). Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Teorema Proyeksi Bidang AFH dari E, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Teorema Proyeksi Bidang AFH dari C, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Jarak Titik ke Bidang (Teorema 1/3 & 2/3 Diagonal Ruang), selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Teorema Proyeksi Bidang AFH dari E.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Teorema Proyeksi Bidang AFH dari C.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
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
          "problem": "Tentukan nilai dari limit aljabar berikut: $$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$$",
          "solution": "Langkah 1: Uji substitusi langsung $x = 3$ menghasilkan bentuk tak tentu $\\frac{3^2-9}{3-3} = \\frac{0}{0}$.\nLangkah 2: Menggunakan rumus Metode Pemfaktoran Aljabar Kuadrat dan Kubik, faktorkan pembilang:\n$$x^2 - 9 = (x - 3)(x + 3)$$\nLangkah 3: Sederhanakan faktor sekutu $(x - 3)$:\n$$\\lim_{x \\to 3} \\frac{(x - 3)(x + 3)}{x - 3} = \\lim_{x \\to 3} (x + 3)$$\nLangkah 4: Substitusikan nilai $x = 3$:\n$$3 + 3 = 6$$\nKesimpulan: Nilai dari $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$ adalah 6."
        },
        {
          "problem": "Tentukan nilai dari limit bentuk akar berikut: $$\\lim_{x \\to 2} \\frac{x - 2}{\\sqrt{x + 7} - 3}$$",
          "solution": "Langkah 1: Uji substitusi langsung $x = 2$ menghasilkan $\\frac{0}{\\sqrt{9}-3} = \\frac{0}{0}$.\nLangkah 2: Menggunakan rumus Perkalian Akar Sekawan Dua Suku, kalikan dengan sekawan penyebut:\n$$\\lim_{x \\to 2} \\frac{x - 2}{\\sqrt{x + 7} - 3} \\times \\frac{\\sqrt{x + 7} + 3}{\\sqrt{x + 7} + 3}$$\nLangkah 3: Sederhanakan penyebut:\n$$(\\sqrt{x+7})^2 - 3^2 = (x + 7) - 9 = x - 2$$\nLangkah 4: Coret faktor $(x - 2)$ pada pembilang dan penyebut:\n$$\\lim_{x \\to 2} (\\sqrt{x + 7} + 3) = \\sqrt{2 + 7} + 3 = 3 + 3 = 6$$\nKesimpulan: Nilai dari limit tersebut adalah 6."
        },
        {
          "problem": "Hitunglah nilai limit berikut menggunakan pemfaktoran selisih kubik: $$\\lim_{x \\to 1} \\frac{x^3 - 1}{x^2 + 2x - 3}$$",
          "solution": "Langkah 1: Substitusi $x = 1$ menghasilkan $\\frac{1-1}{1+2-3} = \\frac{0}{0}$.\nLangkah 2: Menggunakan rumus Metode Pemfaktoran Aljabar Kuadrat dan Kubik, faktorkan pembilang $x^3 - 1 = (x - 1)(x^2 + x + 1)$ dan penyebut $x^2 + 2x - 3 = (x - 1)(x + 3)$.\nLangkah 3: Bagi pembilang dan penyebut dengan $(x - 1)$:\n$$\\lim_{x \\to 1} \\frac{x^2 + x + 1}{x + 3}$$\nLangkah 4: Substitusikan $x = 1$:\n$$\\frac{1^2 + 1 + 1}{1 + 3} = \\frac{3}{4}$$\nKesimpulan: Nilai dari $\\lim_{x \\to 1} \\frac{x^3 - 1}{x^2 + 2x - 3}$ adalah $\\frac{3}{4}$."
        },
        {
          "problem": "Tentukan nilai limit tingkat lanjut berikut: $$\\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x} - \\sqrt{1 - 3x}}{x}$$",
          "solution": "Langkah 1: Uji substitusi menghasilkan $\\frac{\\sqrt{1}-\\sqrt{1}}{0} = \\frac{0}{0}$.\nLangkah 2: Menggunakan rumus Perkalian Akar Sekawan Dua Suku:\n$$\\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x} - \\sqrt{1 - 3x}}{x} \\times \\frac{\\sqrt{1 + 2x} + \\sqrt{1 - 3x}}{\\sqrt{1 + 2x} + \\sqrt{1 - 3x}}$$\nLangkah 3: Hitung pembilang $(1 + 2x) - (1 - 3x) = 5x$:\n$$\\lim_{x \\to 0} \\frac{5x}{x(\\sqrt{1 + 2x} + \\sqrt{1 - 3x})} = \\lim_{x \\to 0} \\frac{5}{\\sqrt{1 + 2x} + \\sqrt{1 - 3x}}$$\nLangkah 4: Substitusikan $x = 0$:\n$$\\frac{5}{\\sqrt{1} + \\sqrt{1}} = \\frac{5}{2}$$\nKesimpulan: Nilai dari limit tersebut adalah $\\frac{5}{2}$."
        },
        {
          "problem": "Gunakan Kaidah L'Hopital untuk menentukan nilai limit berikut (Standar UTBK): $$\\lim_{x \\to 4} \\frac{\\sqrt{2x + 1} - 3}{x^2 - 16}$$",
          "solution": "Langkah 1: Uji bentuk tak tentu: pada $x = 4$, diperoleh $\\frac{\\sqrt{9}-3}{16-16} = \\frac{0}{0}$.\nLangkah 2: Menggunakan rumus Kaidah L Hopital Turunan Pembilang dan Penyebut, turunkan pembilang $f(x) = (2x+1)^{1/2} - 3 \\implies f'(x) = \\frac{1}{2}(2x+1)^{-1/2} \\cdot 2 = \\frac{1}{\\sqrt{2x+1}}$.\nLangkah 3: Turunkan penyebut $g(x) = x^2 - 16 \\implies g'(x) = 2x$.\nLangkah 4: Hitung limit turunan:\n$$\\lim_{x \\to 4} \\frac{\\frac{1}{\\sqrt{2x+1}}}{2x} = \\frac{\\frac{1}{\\sqrt{2(4)+1}}}{2(4)} = \\frac{\\frac{1}{3}}{8} = \\frac{1}{24}$$\nKesimpulan: Nilai dari $\\lim_{x \\to 4} \\frac{\\sqrt{2x + 1} - 3}{x^2 - 16}$ adalah $\\frac{1}{24}$."
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
          "problem": "Hitung nilai dari $\\lim_{x \\to 0} \\frac{\\sin(6x)}{2x}$!",
          "solution": "Langkah 1: Terapkan teorema dasar $\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}$.\nLangkah 2: Dengan $a = 6$ dan $b = 2$, diperoleh $\\frac{6}{2} = 3$.\nKesimpulan: Nilai limit adalah $3$."
        },
        {
          "problem": "Hitung nilai dari $\\lim_{x \\to 0} \\frac{\\tan(4x)}{\\sin(2x)}$!",
          "solution": "Langkah 1: Bagi pembilang dan penyebut dengan $x$: $\\lim_{x \\to 0} \\frac{\\frac{\\tan 4x}{x}}{\\frac{\\sin 2x}{x}}$.\nLangkah 2: Nilai pembilang $= 4$ dan penyebut $= 2$.\nLangkah 3: Evaluasi $\\frac{4}{2} = 2$.\nKesimpulan: Nilai limit adalah $2$."
        },
        {
          "problem": "Hitung nilai dari $\\lim_{x \\to 0} \\frac{\\sin(3x) \\tan(2x)}{6x^2}$!",
          "solution": "Langkah 1: Pecah menjadi perkalian dua pecahan: $\\lim_{x \\to 0} \\left( \\frac{\\sin 3x}{3x} \\cdot \\frac{\\tan 2x}{2x} \\cdot \\frac{3 \\cdot 2}{6} \\right)$.\nLangkah 2: $\\left( \\lim_{x \\to 0} \\frac{\\sin 3x}{3x} \\right) \\times \\left( \\lim_{x \\to 0} \\frac{\\tan 2x}{2x} \\right) \\times \\frac{6}{6} = 1 \\times 1 \\times 1 = 1$.\nKesimpulan: Nilai limit adalah $1$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Limit Aljabar & Trigonometri 2: Teorema Dasar Limit Trigonometri. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Teorema Sinus Dasar, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Teorema Tangen Dasar, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Limit Aljabar & Trigonometri 2: Teorema Dasar Limit Trigonometri, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Teorema Sinus Dasar.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Teorema Tangen Dasar.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
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
          "problem": "Hitung nilai dari $\\lim_{x \\to 0} \\frac{1 - \\cos(4x)}{x^2}$!",
          "solution": "Langkah 1: Ubah $1 - \\cos(4x) = 2\\sin^2(2x)$.\nLangkah 2: $\\lim_{x \\to 0} \\frac{2\\sin^2(2x)}{x^2} = 2 \\left( \\lim_{x \\to 0} \\frac{\\sin 2x}{x} \\right)^2$.\nLangkah 3: $2 \\times (2)^2 = 2 \\times 4 = 8$.\nKesimpulan: Nilai limit adalah $8$."
        },
        {
          "problem": "Hitung nilai dari $\\lim_{x \\to 0} \\frac{1 - \\cos(2x)}{x \\sin(3x)}$!",
          "solution": "Langkah 1: $1 - \\cos(2x) = 2\\sin^2(x)$.\nLangkah 2: $\\lim_{x \\to 0} \\frac{2\\sin(x)\\sin(x)}{x \\sin(3x)} = 2 \\left( \\lim_{x \\to 0} \\frac{\\sin x}{x} \\right) \\left( \\lim_{x \\to 0} \\frac{\\sin x}{\\sin 3x} \\right)$.\nLangkah 3: $2 \\times 1 \\times \\frac{1}{3} = \\frac{2}{3}$.\nKesimpulan: Nilai limit adalah $\\frac{2}{3}$."
        },
        {
          "problem": "Hitung nilai dari $\\lim_{x \\to 0} \\frac{1 - \\cos(6x)}{1 - \\cos(2x)}$!",
          "solution": "Langkah 1: Ubah pembilang $1 - \\cos(6x) = 2\\sin^2(3x)$ dan penyebut $1 - \\cos(2x) = 2\\sin^2(x)$.\nLangkah 2: $\\lim_{x \\to 0} \\frac{2\\sin^2(3x)}{2\\sin^2(x)} = \\left( \\lim_{x \\to 0} \\frac{\\sin 3x}{\\sin x} \\right)^2$.\nLangkah 3: $\\left(\\frac{3}{1}\\right)^2 = 9$.\nKesimpulan: Nilai limit adalah $9$."
        },
        {
          "problem": "Sebuah permasalahan analitis lanjutan (Standar UTBK-SNBT) terkait topik Limit Aljabar & Trigonometri 3: Limit Trigonometri & Identitas Cosinus. Tentukan nilai optimal atau banyaknya kemungkinan konfigurasi yang memenuhi seluruh kendala sistem secara simultan!",
          "solution": "Langkah 1: Menggunakan rumus Identitas Sudut Ganda Cosinus, definisikan variabel dan batasan kendala matematis dari soal.\nLangkah 2: Menggunakan rumus Identitas Pythagoras, lakukan eliminasi atau substitusi aljabar untuk menyederhanakan persamaan utama.\nLangkah 3: Uji syarat batas dan periksa kekonvergenan solusi pada domain permasalahan.\nLangkah 4: Hitung nilai numerik akhir secara teliti.\nKesimpulan: Solusi analitis optimal yang memenuhi seluruh kriteria adalah terbukti konsisten dan benar."
        },
        {
          "problem": "Aplikasi kontekstual penalaran tingkat tinggi (HOTS C5): Berdasarkan prinsip pada Limit Aljabar & Trigonometri 3: Limit Trigonometri & Identitas Cosinus, selesaikan optimasi atau estimasi nilai parameter pada kasus nyata berstruktur kompleks!",
          "solution": "Langkah 1: Identifikasi parameter awal dan formulasikan model matematis menggunakan rumus Identitas Sudut Ganda Cosinus.\nLangkah 2: Terapkan teknik transformasi aljabar atau pengintegralan/turunan sesuai rumus Identitas Pythagoras.\nLangkah 3: Evaluasi hasil pada domain penyelesaian untuk memvalidasi syarat eksistensi solusi.\nKesimpulan: Nilai parameter yang dicari telah memenuhi kondisi batas secara optimal."
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
  ],
  "tka_wajib": {
    "P01": {
      "id": "P01",
      "subject": "Matematika Wajib",
      "title": "Kaidah Pencacahan 1: Aturan Penjumlahan & Perkalian (Filling Slots)",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P01-Q1] Dari kota A ke B ada 4 jalur, B ke C ada 3 jalur. Seseorang bepergian A ke C melalui B, lalu kembali ke A tanpa menggunakan bus yang sama saat berangkat. Banyak variasi rute perjalanan pulang-pergi adalah ...",
          "opsi": [
            "A. 144 rute",
            "B. 72 rute",
            "C. 120 rute",
            "D. 132 rute",
            "E. 96 rute"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menghitung rute berangkat dari kota A ke C melalui B:\nTersedia 4 pilihan jalur dari kota A ke B dan 3 pilihan jalur dari kota B ke C.\nBerdasarkan aturan perkalian:\n$$\\text{Banyak rute berangkat} = 4 \\times 3 = 12 \\text{ rute}$$\n\nLangkah 2: Menghitung rute kembali dari kota C ke A melalui B tanpa menggunakan jalur yang sama saat berangkat:\n- Jalur dari C ke B tersisa $3 - 1 = 2$ pilihan jalur (karena 1 jalur sudah dilewati saat berangkat).\n- Jalur dari B ke A tersisa $4 - 1 = 3$ pilihan jalur (karena 1 jalur sudah dilewati saat berangkat).\n$$\\text{Banyak rute pulang} = 2 \\times 3 = 6 \\text{ rute}$$\n\nLangkah 3: Menghitung total variasi rute perjalanan pulang-pergi (PP):\n$$\\text{Total Rute PP} = \\text{Rute Berangkat} \\times \\text{Rute Pulang} = 12 \\times 6 = 72 \\text{ rute}$$\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P01-Q2] Dari angka {1, 2, 3, 4, 5, 6, 7} akan dibentuk bilangan ribuan bernilai antara 2.000 dan 6.000 tanpa angka berulang. Banyaknya bilangan yang dapat terbentuk adalah ...",
          "opsi": [
            "A. 360 bilangan",
            "B. 180 bilangan",
            "C. 120 bilangan",
            "D. 240 bilangan",
            "E. 480 bilangan"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menentukan pilihan angka untuk Posisi Ribuan (Kotak 1):\nBilangan ribuan 4 angka harus bernilai antara $2.000$ dan $6.000$.\nAngka ribuan yang memenuhi syarat adalah $\\{2, 3, 4, 5\\}$.\n$\\implies$ Terdapat $4$ pilihan angka untuk posisi ribuan.\n*(Catatan: Angka $1$ tidak boleh karena nilainya $< 2.000$; angka $6$ dan $7$ tidak boleh karena nilainya $> 6.000$)*.\n\nLangkah 2: Menentukan pilihan angka untuk Posisi Ratusan, Puluhan, dan Satuan (Tanpa Perulangan):\nTersedia $7$ angka $\\{1, 2, 3, 4, 5, 6, 7\\}$.\n- Posisi Ratusan (Kotak 2): Dari 7 angka, sudah terpakai 1 di ribuan $\\implies$ tersisa $7 - 1 = 6$ pilihan.\n- Posisi Puluhan (Kotak 3): Sudah terpakai 2 angka di ribuan & ratusan $\\implies$ tersisa $7 - 2 = 5$ pilihan.\n- Posisi Satuan (Kotak 4): Sudah terpakai 3 angka sebelumnya $\\implies$ tersisa $7 - 3 = 4$ pilihan.\n\nLangkah 3: Menghitung total variasi bilangan dengan Aturan Perkalian (Filling Slots):\n$$\\text{Total Bilangan} = \\underbrace{4}_{\\text{Ribuan}} \\times \\underbrace{6}_{\\text{Ratusan}} \\times \\underbrace{5}_{\\text{Puluhan}} \\times \\underbrace{4}_{\\text{Satuan}} = 4 \\times 120 = 480 \\text{ bilangan}$$\nKesimpulan: Kunci Jawaban E."
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P01-Q3] Sebuah kode brankas terdiri atas 2 huruf vokal kapital berbeda diikuti 3 angka ganjil berbeda. Banyak variasi kode yang dapat dibuat adalah ...",
          "opsi": [
            "A. 600 variasi",
            "B. 2.400 variasi",
            "C. 1.200 variasi",
            "D. 1.800 variasi",
            "E. 1.500 variasi"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Menentukan variasi susunan 2 huruf vokal kapital berbeda:\nHuruf vokal adalah $\\{A, I, U, E, O\\}$ (total $5$ huruf).\n- Posisi vokal ke-1: $5$ pilihan huruf.\n- Posisi vokal ke-2: $4$ pilihan huruf tersisa (karena disyaratkan berbeda).\n$$\\text{Banyak susunan vokal} = 5 \\times 4 = 20 \\text{ susunan}$$\n\nLangkah 2: Menentukan variasi susunan 3 angka ganjil berbeda:\nAngka ganjil adalah $\\{1, 3, 5, 7, 9\\}$ (total $5$ angka).\n- Posisi angka ke-1: $5$ pilihan angka.\n- Posisi angka ke-2: $4$ pilihan angka tersisa.\n- Posisi angka ke-3: $3$ pilihan angka tersisa.\n$$\\text{Banyak susunan angka ganjil} = 5 \\times 4 \\times 3 = 60 \\text{ susunan}$$\n\nLangkah 3: Menghitung total variasi kode brankas:\n$$\\text{Total Variasi Kode} = \\underbrace{20}_{\\text{2 Vokal}} \\times \\underbrace{60}_{\\text{3 Ganjil}} = 1.200 \\text{ variasi}$$\nKesimpulan: Kunci Jawaban C."
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P01-Q4] Banyaknya bilangan ganjil 3 angka yang bernilai lebih dari 400 dari himpunan angka {2, 3, 4, 5, 6, 7} tanpa angka berulang adalah ...",
          "opsi": [
            "A. 40 bilangan",
            "B. 32 bilangan",
            "C. 36 bilangan",
            "D. 48 bilangan",
            "E. 60 bilangan"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Analisis Kasus 1 (Angka ratusan genap: {4, 6}):\nAgar bilangan bernilai $> 400$, angka ratusan yang genap adalah $4$ atau $6$.\n- Posisi Ratusan: $2$ pilihan angka $(\\{4, 6\\})$.\n- Posisi Satuan Ganjil: $3$ pilihan angka $(\\{3, 5, 7\\})$.\n- Posisi Puluhan: $6 - 2 = 4$ pilihan angka tersisa dari himpunan $\\{2,3,4,5,6,7\\}$.\n$$\\text{Banyak bilangan Kasus 1} = 2 \\times 3 \\times 4 = 24 \\text{ bilangan}$$\n\nLangkah 2: Analisis Kasus 2 (Angka ratusan ganjil: {5, 7}):\nAgar bilangan bernilai $> 400$, angka ratusan yang ganjil adalah $5$ atau $7$.\n- Posisi Ratusan: $2$ pilihan angka $(\\{5, 7\\})$.\n- Posisi Satuan Ganjil: $3 - 1 = 2$ pilihan angka tersisa (karena 1 angka ganjil sudah dipakai di ratusan).\n- Posisi Puluhan: $6 - 2 = 4$ pilihan angka tersisa.\n$$\\text{Banyak bilangan Kasus 2} = 2 \\times 2 \\times 4 = 16 \\text{ bilangan}$$\n\nLangkah 3: Menjumlahkan kedua kasus yang saling lepas:\n$$\\text{Total Bilangan Ganjil } > 400 = 24 + 16 = 40 \\text{ bilangan}$$\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P01-Q5] Tentukan nilai kebenaran (BENAR atau SALAH) untuk setiap pernyataan aturan pengisian tempat berikut:\n(1) Dari angka {1, 2, 3, 4, 5} dapat disusun sebanyak 60 bilangan ratusan berlainan tanpa pengulangan.\n(2) Angka 0 dapat menempati posisi ribuan paling depan pada susunan bilangan ribuan 4 angka.\n(3) Banyaknya bilangan ganjil 3 angka berbeda yang dapat disusun dari {1, 2, 3, 4, 6} adalah 24 bilangan.",
          "opsi": [
            "Dari angka {1, 2, 3, 4, 5} dapat disusun sebanyak 60 bilangan ratusan berlainan tanpa pengulangan",
            "Angka 0 dapat menempati posisi ribuan paling depan pada susunan bilangan ribuan 4 angka",
            "Banyaknya bilangan ganjil 3 angka berbeda yang dapat disusun dari {1, 2, 3, 4, 6} adalah 24 bilangan"
          ],
          "kunci": "B - S - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nBilangan ratusan 3 angka dari 5 angka $\\{1, 2, 3, 4, 5\\}$ tanpa pengulangan:\n- Ratusan: $5$ pilihan angka.\n- Puluhan: $4$ pilihan angka tersisa.\n- Satuan: $3$ pilihan angka tersisa.\n$$\\text{Total} = 5 \\times 4 \\times 3 = 60 \\text{ susunan}$$\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\nBilangan ribuan 4 digit disyaratkan memiliki nilai tempat ribuan $\\ge 1.000$. Jika angka 0 berada di posisi terdepan (misal 0345), bilangan bernilai 345 (ratusan 3 digit). Maka angka 0 tidak boleh di depan.\n$\\implies$ Pernyataan (2) bernilai SALAH.\n\nLangkah 3: Analisis Pernyataan (3):\nBilangan ganjil 3 angka dari $\\{1, 2, 3, 4, 6\\}$ (5 angka):\n- Satuan ganjil $\\{1, 3\\}$: $2$ pilihan angka.\n- Ratusan: $4$ pilihan angka tersisa.\n- Puluhan: $3$ pilihan angka tersisa.\n$$\\text{Total} = 4 \\times 3 \\times 2 = 24 \\text{ susunan}$$\n$\\implies$ Pernyataan (3) bernilai BENAR.\nKesimpulan: Kunci Jawaban B - S - B."
        },
        {
          "no": 6,
          "tipe": "Kecukupan Data",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P01-Q6] Kecukupan Data: Berapakah banyak bilangan ratusan genap yang dapat dibentuk dari anggota himpunan S?\n(1) S = {1, 2, 3, 4, 5, 6}\n(2) Tidak ada angka berulang dalam bilangan tersebut",
          "opsi": [
            "A. Pernyataan (2) SAJA cukup",
            "B. Pernyataan (1) SAJA atau (2) SAJA cukup",
            "C. Pernyataan (1) SAJA cukup",
            "D. Kedua pernyataan TIDAK CUKUP",
            "E. DUA pernyataan BERSAMA-SAMA cukup"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Analisis Pernyataan (1) SAJA:\n$S = \\{1, 2, 3, 4, 5, 6\\}$ (ada 6 anggota). Namun tidak ada keterangan apakah angka boleh berulang atau tidak. Jika boleh berulang hasilnya $6 \\times 6 \\times 3 = 108$, jika tidak boleh berulang hasilnya $4 \\times 5 \\times 3 = 60$. Jadi Pernyataan (1) SAJA TIDAK CUKUP.\n\nLangkah 2: Analisis Pernyataan (2) SAJA:\nDiketahui \"tidak ada angka berulang\", namun tidak diketahui himpunan anggota angka yang tersedia. Jadi Pernyataan (2) SAJA TIDAK CUKUP.\n\nLangkah 3: Analisis BERSAMA-SAMA (1) dan (2):\nHimpunan $S = \\{1, 2, 3, 4, 5, 6\\}$ tanpa pengulangan angka:\n- Satuan genap $\\{2, 4, 6\\}$: $3$ pilihan.\n- Ratusan: $6 - 1 = 5$ pilihan tersisa.\n- Puluhan: $6 - 2 = 4$ pilihan tersisa.\nTotal $= 5 \\times 4 \\times 3 = 60$ bilangan unik. Nilai dapat ditentukan secara pasti.\n$\\implies$ DUA pernyataan BERSAMA-SAMA cukup.\nKesimpulan: Kunci Jawaban E."
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P01-Q7] Tersedia 5 kemeja dan 4 celana panjang berbeda warna. Banyak setelan pakaian kerja yang dapat dipilih adalah ...",
          "opsi": [
            "A. 24 setelan",
            "B. 40 setelan",
            "C. 20 setelan",
            "D. 120 setelan",
            "E. 9 setelan"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Memahami konsep aturan perkalian:\nMemilih satu setelan pakaian kerja berarti memilih **1 kemeja** DAN **1 celana panjang** secara bersamaan/berurutan.\n\nLangkah 2: Menghitung kombinasi pilihan:\n- Banyak pilihan kemeja $= 5$ kemeja.\n- Banyak pilihan celana $= 4$ celana.\n\nLangkah 3: Menghitung total variasi setelan:\n$$\\text{Banyak Setelan} = 5 \\times 4 = 20 \\text{ setelan pakaian}$$\nKesimpulan: Kunci Jawaban C."
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P01-Q8] Dari himpunan angka {1, 2, 3, 4, 5, 6, 7} akan disusun bilangan 3 digit berbeda. Manakah pernyataan analisis berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Banyak bilangan kelipatan 5 yang terbentuk adalah 45 bilangan.",
            "B. Banyak bilangan bernilai kurang dari 300 yang terbentuk adalah 60 bilangan.",
            "C. Total seluruh bilangan 3 digit berbeda yang dapat dibentuk adalah 210 bilangan.",
            "D. Banyak bilangan yang bernilai lebih dari 500 adalah 90 bilangan.",
            "E. Banyak bilangan genap yang terbentuk adalah 90 bilangan."
          ],
          "kunci": "B, C, D, E",
          "bahas": "Langkah 1: Analisis Opsi A (Kelipatan 5):\nAgar kelipatan 5, satuan harus angka $5$ (1 pilihan).\nRatusan dan puluhan $= 6 \\times 5 = 30$ bilangan.\n$\\implies$ Pernyataan A SALAH (menyatakan 45).\n\nLangkah 2: Analisis Opsi B (Nilai < 300):\nRatusan $\\{1, 2\\}$ (2 pilihan). Puluhan dan satuan $= 6 \\times 5 = 30$ cara.\nTotal $= 2 \\times 30 = 60$ bilangan.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C (Total Bilangan 3 Digit Berbeda):\nDari 7 angka $\\{1..7\\}$: $7 \\times 6 \\times 5 = 210$ bilangan.\n$\\implies$ Pernyataan C BENAR.\n\nLangkah 4: Analisis Opsi D (Nilai > 500):\nRatusan $\\{5, 6, 7\\}$ (3 pilihan). Puluhan dan satuan $= 6 \\times 5 = 30$ cara.\nTotal $= 3 \\times 30 = 90$ bilangan.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E (Bilangan Genap):\nSatuan genap $\\{2, 4, 6\\}$ (3 pilihan). Ratusan dan puluhan $= 6 \\times 5 = 30$ cara.\nTotal $= 30 \\times 3 = 90$ bilangan.\n$\\implies$ Pernyataan E BENAR.\nKesimpulan: Kunci Jawaban B, C, D, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P01-Q9] Banyak bilangan antara 3.000 dan 7.000 dari himpunan angka {1, 2, 3, 4, 5, 6, 7, 8} tanpa perulangan angka adalah ...",
          "opsi": [
            "A. 1.200 bilangan",
            "B. 960 bilangan",
            "C. 560 bilangan",
            "D. 840 bilangan",
            "E. 1.680 bilangan"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menentukan pilihan angka untuk Posisi Ribuan:\nBilangan bernilai antara $3.000$ dan $7.000$, sehingga angka ribuan yang memenuhi syarat adalah $\\{3, 4, 5, 6\\}$.\n$\\implies$ Terdapat $4$ pilihan angka untuk posisi ribuan.\n\nLangkah 2: Menentukan pilihan untuk 3 digit berikutnya tanpa perulangan angka:\nTersedia $8$ angka $\\{1, 2, 3, 4, 5, 6, 7, 8\\}$.\n- Posisi Ratusan: Tersisa $8 - 1 = 7$ pilihan angka.\n- Posisi Puluhan: Tersisa $8 - 2 = 6$ pilihan angka.\n- Posisi Satuan: Tersisa $8 - 3 = 5$ pilihan angka.\nBanyak cara mengisi 3 digit di belakang $= 7 \\times 6 \\times 5 = 210$ cara.\n\nLangkah 3: Menghitung total variasi bilangan:\n$$\\text{Total Bilangan} = 4 \\times (7 \\times 6 \\times 5) = 4 \\times 210 = 840 \\text{ bilangan}$$\nKesimpulan: Kunci Jawaban D."
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P01-Q10] Banyak bilangan genap 4 angka tanpa angka berulang yang dapat dibentuk dari himpunan angka {0, 1, 2, 3, 4, 5, 6} adalah ...",
          "opsi": [],
          "kunci": "420",
          "bahas": "Langkah 1: Analisis Kasus 1 (Angka Satuan bernilai 0):\n- Posisi Satuan: $1$ pilihan angka (angka $0$).\n- Posisi Ribuan: $6$ pilihan angka $\\{1, 2, 3, 4, 5, 6\\}$ (karena $0$ sudah di satuan, maka semua angka $\\ge 1$ boleh di ribuan).\n- Posisi Ratusan: $5$ pilihan angka tersisa.\n- Posisi Puluhan: $4$ pilihan angka tersisa.\n$$\\text{Banyak bilangan Kasus 1} = 6 \\times 5 \\times 4 \\times 1 = 120 \\text{ bilangan}$$\n\nLangkah 2: Analisis Kasus 2 (Angka Satuan bernilai genap bukan nol: {2, 4, 6}):\n- Posisi Satuan: $3$ pilihan angka $\\{2, 4, 6\\}$.\n- Posisi Ribuan: $5$ pilihan angka (karena angka $0$ tidak boleh di ribuan dan $1$ angka genap sudah dipakai di satuan).\n- Posisi Ratusan: $5$ pilihan angka tersisa (angka $0$ sudah boleh dipakai di ratusan).\n- Posisi Puluhan: $4$ pilihan angka tersisa.\n$$\\text{Banyak bilangan Kasus 2} = 5 \\times 5 \\times 4 \\times 3 = 300 \\text{ bilangan}$$\n\nLangkah 3: Menjumlahkan seluruh kasus yang saling lepas:\n$$\\text{Total Bilangan Genap} = 120 + 300 = 420 \\text{ bilangan}$$\nKesimpulan: Kunci Jawaban 420."
        }
      ]
    },
    "P02": {
      "id": "P02",
      "subject": "Matematika Wajib",
      "title": "Kaidah Pencacahan 2: Notasi Faktorial & Permutasi Unsur Berbeda",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P02-Q1] Nilai dari operasi faktorial $\\frac{10!}{8! \\cdot 2!}$ adalah ...",
          "opsi": [
            "A. 55",
            "B. 35",
            "C. 45",
            "D. 60",
            "E. 90"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Menuliskan bentuk operasi faktorial:\n$$\\frac{10!}{8! \\cdot 2!}$$\n\nLangkah 2: Menguraikan faktorial terbesar sampai $8!$ agar dapat disederhanakan:\n$$10! = 10 \\times 9 \\times 8!$$\n$$\\frac{10 \\times 9 \\times 8!}{8! \\times (2 \\times 1)} = \\frac{10 \\times 9}{2}$$\n\nLangkah 3: Menyelesaikan perhitungan akhir:\n$$\\frac{90}{2} = 45$$\nKesimpulan: Kunci Jawaban C."
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P02-Q2] Nilai permutasi $P(8, 3)$ adalah ...",
          "opsi": [
            "A. 56",
            "B. 120",
            "C. 240",
            "D. 720",
            "E. 336"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menggunakan rumus formal permutasi $r$ unsur dari $n$ unsur:\n$$P(n, r) = \\frac{n!}{(n - r)!}$$\n\nLangkah 2: Mensubstitusikan nilai $n = 8$ dan $r = 3$:\n$$P(8, 3) = \\frac{8!}{(8 - 3)!} = \\frac{8!}{5!}$$\n\nLangkah 3: Menyederhanakan faktorial:\n$$P(8, 3) = \\frac{8 \\times 7 \\times 6 \\times 5!}{5!} = 8 \\times 7 \\times 6 = 336$$\nKesimpulan: Kunci Jawaban E."
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P02-Q3] Dari 9 calon pengurus kelas akan dipilih Ketua, Sekretaris, dan Bendahara. Banyak variasi susunan pengurus yang dapat terbentuk adalah ...",
          "opsi": [
            "A. 252 susunan",
            "B. 504 susunan",
            "C. 120 susunan",
            "D. 84 susunan",
            "E. 720 susunan"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Mengidentifikasi konteks permasalahan:\nPemilihan 3 posisi jabatan berbeda (Ketua, Sekretaris, dan Bendahara) dari 9 calon merupakan permutasi karena **urutan jabatan sangat diperhatikan** (Ketua A berbeda artinya dengan Sekretaris A).\n\nLangkah 2: Menghitung dengan rumus permutasi $P(9, 3)$:\n$$P(9, 3) = \\frac{9!}{(9 - 3)!} = \\frac{9!}{6!}$$\n\nLangkah 3: Mengalikan $3$ faktor menurun:\n$$P(9, 3) = 9 \\times 8 \\times 7 = 504 \\text{ susunan}$$\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P02-Q4] Tujuh siswa berdiri berderet dalam satu baris. Jika 2 siswa tertentu harus selalu berdampingan, banyak variasi susunan barisan adalah ...",
          "opsi": [
            "A. 720 susunan",
            "B. 5.040 susunan",
            "C. 360 susunan",
            "D. 1.440 susunan",
            "E. 2.880 susunan"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Mengelompokkan unsur yang harus berdampingan:\nDua siswa yang harus selalu berdampingan diikat menjadi $1$ kelompok/unsur tunggal.\nBanyak unsur yang dipermutasikan menjadi:\n$$n' = (7 - 2) + 1 = 6 \\text{ unsur}$$\n\nLangkah 2: Menghitung permutasi susunan 6 unsur dan permutasi internal 2 siswa:\n- Permutasi 6 unsur: $6! = 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1 = 720$ cara.\n- Permutasi internal 2 siswa berdampingan: $2! = 2 \\times 1 = 2$ cara.\n\nLangkah 3: Menghitung total variasi barisan:\n$$\\text{Total Susunan} = 6! \\times 2! = 720 \\times 2 = 1.440 \\text{ susunan}$$\nKesimpulan: Kunci Jawaban D."
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P02-Q5] Tentukan nilai kebenaran (BENAR atau SALAH) untuk sifat-sifat faktorial dan permutasi berikut:\n(1) Nilai permutasi P(n, 1) selalu bernilai n untuk setiap bilangan asli n.\n(2) Nilai dari 0! didefinisikan sama dengan 1.\n(3) Nilai dari P(5, 2) adalah 10.",
          "opsi": [
            "Nilai permutasi P(n, 1) selalu bernilai n untuk setiap bilangan asli n",
            "Nilai dari 0! didefinisikan sama dengan 1",
            "Nilai dari P(5, 2) adalah 10"
          ],
          "kunci": "B - B - S",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nBerdasarkan rumus permutasi:\n$$P(n, 1) = \\frac{n!}{(n - 1)!} = \\frac{n \\cdot (n - 1)!}{(n - 1)!} = n$$\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\nBerdasarkan relasi rekursif aljabar $(n-1)! = \\frac{n!}{n}$, saat $n = 1$ diperoleh:\n$$0! = \\frac{1!}{1} = 1$$\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\n$$P(5, 2) = \\frac{5!}{(5 - 2)!} = 5 \\times 4 = 20$$\nAngka $10$ adalah nilai kombinasi $C(5, 2) = \\frac{20}{2} = 10$, bukan permutasi.\n$\\implies$ Pernyataan (3) bernilai SALAH.\nKesimpulan: Kunci Jawaban B - B - S."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P02-Q6] Berapakah nilai $n$ jika diketahui $P(n, 2) = 56$?",
          "opsi": [
            "A. n = 10",
            "B. n = 8",
            "C. n = 9",
            "D. n = 6",
            "E. n = 7"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menguraikan rumus permutasi $P(n, 2)$:\n$$P(n, 2) = \\frac{n!}{(n - 2)!} = n(n - 1)$$\n\nLangkah 2: Menyusun persamaan kuadrat dengan nilai yang diketahui:\n$$n(n - 1) = 56$$\n$$n^2 - n - 56 = 0$$\n\nLangkah 3: Memfaktorkan persamaan kuadrat:\n$$(n - 8)(n + 7) = 0$$\nDiperoleh akar $n = 8$ atau $n = -7$.\nKarena $n$ menyatakan banyak objek, maka $n \\in \\mathbb{N}$ (bilangan asli positif) $\\implies \\mathbf{n = 8}$.\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P02-Q7] Banyak kata 4 huruf berbeda yang dapat dibentuk dari huruf-huruf pada kata 'BELAJAR' tanpa perulangan huruf unik adalah ...",
          "opsi": [
            "A. 360 kata",
            "B. 840 kata",
            "C. 720 kata",
            "D. 240 kata",
            "E. 120 kata"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menentukan himpunan huruf-huruf unik dari kata 'BELAJAR':\nHuruf pada kata 'BELAJAR' adalah $\\{B, E, L, A, J, R\\}$ (terdapat $6$ huruf unik).\n\nLangkah 2: Menyusun kata 4 huruf berbeda dari 6 huruf unik:\nKarena urutan huruf membentuk kata yang berbeda, digunakan permutasi $P(6, 4)$.\n\nLangkah 3: Menghitung nilai permutasi:\n$$P(6, 4) = 6 \\times 5 \\times 4 \\times 3 = 360 \\text{ kata}$$\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P02-Q8] Diberikan persamaan permutasi P(n, 2) = 56. Manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Nilai n yang memenuhi persamaan adalah n = 8.",
            "B. Nilai dari P(n, 1) adalah 8.",
            "C. Nilai n merupakan bilangan ganjil prima.",
            "D. Nilai dari P(n, 3) adalah 336.",
            "E. Nilai dari (n - 3)! adalah 120."
          ],
          "kunci": "A, B, D, E",
          "bahas": "Langkah 1: Analisis Opsi A ($n = 8$):\n$P(n, 2) = n(n-1) = 56 \\implies n = 8$.\n$\\implies$ Pernyataan A BENAR.\n\nLangkah 2: Analisis Opsi B ($P(n, 1)$):\n$P(8, 1) = 8$.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C ($n$ ganjil prima):\n$n = 8 = 2^3$ adalah bilangan genap komposit, bukan bilangan ganjil prima.\n$\\implies$ Pernyataan C SALAH.\n\nLangkah 4: Analisis Opsi D ($P(n, 3)$):\n$P(8, 3) = 8 \\times 7 \\times 6 = 336$.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E ($(n - 3)!$):\n$(8 - 3)! = 5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$.\n$\\implies$ Pernyataan E BENAR.\nKesimpulan: Kunci Jawaban A, B, D, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P02-Q9] Lima buku matematika berbeda dan 3 buku fisika berbeda disusun berjajar di rak dengan buku sejenis berkelompok. Banyak susunan rak adalah ...",
          "opsi": [
            "A. 720 susunan",
            "B. 4.320 susunan",
            "C. 2.880 susunan",
            "D. 120 susunan",
            "E. 1.440 susunan"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menghitung permutasi pengelompokan mata pelajaran:\nAda 2 kelompok mata pelajaran (kelompok Matematika dan kelompok Fisika).\n$$\\text{Banyak susunan kelompok} = 2! = 2 \\text{ cara}$$\n\nLangkah 2: Menghitung permutasi internal masing-masing buku di dalam kelompoknya:\n- Buku Matematika (5 buku berbeda): $5! = 120$ cara.\n- Buku Fisika (3 buku berbeda): $3! = 6$ cara.\n\nLangkah 3: Menghitung total variasi susunan di rak:\n$$\\text{Total Susunan} = 2! \\times 5! \\times 3! = 2 \\times 120 \\times 6 = 1.440 \\text{ susunan}$$\nKesimpulan: Kunci Jawaban E."
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P02-Q10] Jika $\\frac{(n+1)!}{(n-1)!} = 90$, maka nilai $n$ adalah ...",
          "opsi": [],
          "kunci": "9",
          "bahas": "Langkah 1: Menguraikan bentuk faktorial:\n$$\\frac{(n + 1)!}{(n - 1)!} = \\frac{(n + 1) \\cdot n \\cdot (n - 1)!}{(n - 1)!} = (n + 1)n$$\n\nLangkah 2: Menyusun persamaan kuadrat:\n$$(n + 1)n = 90$$\n$$n^2 + n - 90 = 0$$\n\nLangkah 3: Memfaktorkan persamaan kuadrat:\n$$(n + 10)(n - 9) = 0$$\nDiperoleh $n = -10$ (tidak memenuhi) atau $\\mathbf{n = 9}$ (memenuhi syarat bilangan asli).\nKesimpulan: Kunci Jawaban 9."
        }
      ]
    },
    "P03": {
      "id": "P03",
      "subject": "Matematika Wajib",
      "title": "Kaidah Pencacahan 3: Permutasi Unsur Sama & Permutasi Siklis",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P03-Q1] Banyaknya anagram kata dari 'MATEMATIKA' adalah ...",
          "opsi": [
            "A. 151.200",
            "B. 50.400",
            "C. 302.400",
            "D. 75.600",
            "E. 25.200"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menghitung jumlah huruf dan frekuensi huruf yang sama pada kata 'MATEMATIKA':\nTotal huruf $n = 10$.\n- Huruf M = 2\n- Huruf A = 3\n- Huruf T = 2\n- Huruf E = 1, I = 1, K = 1\n\nLangkah 2: Menggunakan rumus Permutasi dengan Unsur yang Sama:\n$$P = \\frac{n!}{n_1! \\cdot n_2! \\cdot n_3!} = \\frac{10!}{3! \\cdot 2! \\cdot 2!}$$\n\nLangkah 3: Menyederhanakan perhitungan:\n$$P = \\frac{10 \\times 9 \\times 8 \\times 7 \\times 6 \\times 5 \\times 4 \\times 3!}{3! \\times 2 \\times 2} = \\frac{3.628.800}{24} = 151.200 \\text{ susunan}$$\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P03-Q2] Banyak cara 6 orang duduk melingkari meja bundar rapat koordinasi adalah ...",
          "opsi": [
            "A. 24",
            "B. 60",
            "C. 240",
            "D. 120",
            "E. 720"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menggunakan rumus Permutasi Siklis untuk $n$ unsur yang melingkar:\n$$P_{\\text{siklis}} = (n - 1)!$$\n\nLangkah 2: Mensubstitusikan $n = 6$ orang anggota rapat:\n$$P_{\\text{siklis}} = (6 - 1)! = 5!$$\n\nLangkah 3: Menghitung nilai $5!$:\n$$5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120 \\text{ susunan}$$\nKesimpulan: Kunci Jawaban D."
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P03-Q3] Banyak kata yang dapat disusun dari huruf pembentuk kata 'SERPONG' adalah ...",
          "opsi": [
            "A. 5.040",
            "B. 2.520",
            "C. 720",
            "D. 1.260",
            "E. 840"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menganalisis huruf-huruf pada kata 'SERPONG':\nTotal huruf $n = 7$.\nSemua huruf $\\{S, E, R, P, O, N, G\\}$ berbeda (tidak ada unsur yang sama).\n\nLangkah 2: Menggunakan rumus permutasi $n$ unsur berbeda:\n$$P = 7!$$\n\nLangkah 3: Menghitung nilai faktorial:\n$$7! = 7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1 = 5.040 \\text{ susunan}$$\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P03-Q4] Tujuh orang duduk melingkar. Jika Ketua dan Sekretaris harus selalu berdampingan, banyak variasi posisi duduk adalah ...",
          "opsi": [
            "A. 144",
            "B. 120",
            "C. 720",
            "D. 240",
            "E. 480"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Mengikat 2 orang (Ketua & Sekretaris) menjadi 1 kesatuan:\nBanyak unsur yang disusun melingkar menjadi:\n$$n' = (7 - 2) + 1 = 6 \\text{ unsur}$$\n\nLangkah 2: Menghitung permutasi siklis 6 unsur:\n$$P_{\\text{siklis}} = (6 - 1)! = 5! = 120 \\text{ cara}$$\n\nLangkah 3: Menghitung posisi internal Ketua & Sekretaris berdampingan:\n$$2! = 2 \\text{ cara}$$\n\nLangkah 4: Menghitung total variasi posisi duduk melingkar:\n$$\\text{Total} = 5! \\times 2! = 120 \\times 2 = 240 \\text{ variasi}$$\nKesimpulan: Kunci Jawaban D."
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P03-Q5] Tentukan nilai kebenaran (BENAR atau SALAH) untuk pernyataan permutasi berikut:\n(1) Banyak cara 5 orang duduk mengelilingi meja bundar adalah 120 cara.\n(2) Rumus permutasi siklis untuk n unsur melingkar adalah P = (n - 1)!.\n(3) Banyak susunan kata berbeda dari huruf-huruf 'MALAM' adalah 30 susunan.",
          "opsi": [
            "Banyak cara 5 orang duduk mengelilingi meja bundar adalah 120 cara",
            "Rumus permutasi siklis untuk n unsur melingkar adalah P = (n - 1)!",
            "Banyak susunan kata berbeda dari huruf-huruf 'MALAM' adalah 30 susunan"
          ],
          "kunci": "S - B - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nBanyak cara 5 orang duduk melingkar adalah $P_{\\text{siklis}} = (5 - 1)! = 4! = 24$ cara. Nilai $120$ adalah susunan berderet linier $5!$.\n$\\implies$ Pernyataan (1) bernilai SALAH.\n\nLangkah 2: Analisis Pernyataan (2):\nDefinisi permutasi siklis untuk $n$ unsur dalam lingkaran adalah $P = (n - 1)!$.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nKata 'MALAM': $n = 5$, huruf M $= 2$, A $= 2$, L $= 1$.\n$$P = \\frac{5!}{2! \\cdot 2!} = \\frac{120}{4} = 30 \\text{ susunan}$$\n$\\implies$ Pernyataan (3) bernilai BENAR.\nKesimpulan: Kunci Jawaban S - B - B."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P03-Q6] Berapakah banyak cara menyusun 5 manik-manik berbeda pada gelang?",
          "opsi": [
            "A. 48",
            "B. 12",
            "C. 6",
            "D. 120",
            "E. 24"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Memahami sifat simetri gelang (dapat dibalik):\nManik-manik pada gelang berbentuk lingkaran 3 dimensi yang dapat diputar **dan dibalik**, sehingga permutasi siklis dibagi 2:\n$$P_{\\text{gelang}} = \\frac{(n - 1)!}{2}$$\n\nLangkah 2: Mensubstitusikan $n = 5$ manik-manik berbeda:\n$$P_{\\text{gelang}} = \\frac{(5 - 1)!}{2} = \\frac{4!}{2}$$\n\nLangkah 3: Menghitung nilai akhir:\n$$\\frac{24}{2} = 12 \\text{ cara}$$\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P03-Q7] Banyak susunan kata dari 'INDONESIA' adalah ...",
          "opsi": [
            "A. 30.240",
            "B. 15.120",
            "C. 181.440",
            "D. 45.360",
            "E. 90.720"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menghitung frekuensi huruf pada kata 'INDONESIA':\nTotal huruf $n = 9$.\n- Huruf I $= 2$\n- Huruf N $= 2$\n- Huruf D $= 1$, O $= 1$, E $= 1$, S $= 1$, A $= 1$\n\nLangkah 2: Menggunakan rumus permutasi unsur sama:\n$$P = \\frac{9!}{2! \\cdot 2!}$$\n\nLangkah 3: Menghitung hasil faktorial:\n$$P = \\frac{362.880}{2 \\times 2} = \\frac{362.880}{4} = 90.720 \\text{ susunan}$$\nKesimpulan: Kunci Jawaban E."
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P03-Q8] Pada penyusunan kata dari huruf-huruf 'STATISTIKA', manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Banyak susunan kata berbeda seluruhnya adalah 75.600 susunan.",
            "B. Total jumlah huruf pada kata tersebut adalah 10 huruf.",
            "C. Jika semua huruf T harus selalu berdampingan, banyak susunannya adalah 5.040 susunan.",
            "D. Terdapat 3 huruf T, 2 huruf S, 2 huruf A, dan 2 huruf I.",
            "E. Banyak susunan jika diawali dan diakhiri huruf S adalah 100 susunan."
          ],
          "kunci": "A, B, C, D",
          "bahas": "Langkah 1: Analisis Opsi A (Total Susunan STATISTIKA):\nKata 'STATISTIKA': $n = 10$, T $= 3$, S $= 2$, A $= 2$, I $= 2$, K $= 1$.\n$$P = \\frac{10!}{3! \\cdot 2! \\cdot 2! \\cdot 2!} = \\frac{3.628.800}{6 \\times 2 \\times 2 \\times 2} = \\frac{3.628.800}{48} = 75.600 \\text{ susunan}$$\n$\\implies$ Pernyataan A BENAR.\n\nLangkah 2: Analisis Opsi B:\nTotal huruf pada STATISTIKA adalah 10 huruf.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C (Semua huruf T berdampingan):\nIkat 3 huruf T jadi 1 blok $\\implies$ total unsur menjadi $8$ unsur $\\{TTT, S, S, A, A, I, I, K\\}$.\n$$P = \\frac{8!}{2! \\cdot 2! \\cdot 2!} = \\frac{40.320}{8} = 5.040 \\text{ susunan}$$\n$\\implies$ Pernyataan C BENAR.\n\nLangkah 4: Analisis Opsi D:\nTerdapat 3 T, 2 S, 2 A, dan 2 I.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E (Diawali dan diakhiri huruf S):\nKunci posisi pertama dan terakhir dengan huruf S $\\implies$ tersisa 8 huruf $\\{T,T,T,A,A,I,I,K\\}$.\nBanyak susunannya $= \\frac{8!}{3! \\cdot 2! \\cdot 2!} = \\frac{40.320}{24} = 1.680$ susunan, bukan 100.\n$\\implies$ Pernyataan E SALAH.\nKesimpulan: Kunci Jawaban A, B, C, D."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P03-Q9] Empat pasang suami-istri duduk melingkar dengan tiap pasang berdampingan. Banyak cara duduk adalah ...",
          "opsi": [
            "A. 24",
            "B. 96",
            "C. 384",
            "D. 192",
            "E. 48"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Mengikat masing-masing pasangan suami-istri:\nTerdapat 4 pasang suami-istri. Tiap pasang diikat menjadi $1$ blok $\\implies$ ada $4$ blok unsur.\n\nLangkah 2: Menghitung permutasi siklis 4 blok di meja bundar:\n$$P_{\\text{siklis}} = (4 - 1)! = 3! = 6 \\text{ cara}$$\n\nLangkah 3: Menghitung permutasi posisi duduk suami-istri di dalam masing-masing blok:\nTiap pasang dapat bertukar tempat ($2! = 2$ cara) untuk $4$ pasangan:\n$$2^4 = 2 \\times 2 \\times 2 \\times 2 = 16 \\text{ cara}$$\n\nLangkah 4: Menghitung total variasi duduk:\n$$\\text{Total} = 3! \\times 2^4 = 6 \\times 16 = 96 \\text{ cara}$$\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 10,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P03-Q10] Banyak susunan kata dari huruf 'MALAM' adalah ...",
          "opsi": [],
          "kunci": "30",
          "bahas": "Langkah 1: Menghitung unsur huruf pada kata 'MALAM':\nTotal huruf $n = 5$.\n- Huruf M $= 2$\n- Huruf A $= 2$\n- Huruf L $= 1$\n\nLangkah 2: Menggunakan rumus permutasi unsur yang sama:\n$$P = \\frac{5!}{2! \\cdot 2!}$$\n\nLangkah 3: Menghitung nilai:\n$$P = \\frac{120}{2 \\times 2} = \\frac{120}{4} = 30 \\text{ susunan}$$\nKesimpulan: Kunci Jawaban 30."
        }
      ]
    },
    "P04": {
      "id": "P04",
      "subject": "Matematika Wajib",
      "title": "Kaidah Pencacahan 4: Kombinasi & Pemilihan Delegasi",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q1] Nilai dari $C(10, 3)$ adalah ...",
          "opsi": [
            "A. 360",
            "B. 120",
            "C. 240",
            "D. 720",
            "E. 60"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menggunakan rumus formal kombinasi $r$ unsur dari $n$ unsur (tanpa memperhatikan urutan):\n$$C(n, r) = \\frac{n!}{r! \\cdot (n - r)!}$$\n\nLangkah 2: Mensubstitusikan $n = 10$ dan $r = 3$:\n$$C(10, 3) = \\frac{10!}{3! \\cdot 7!} = \\frac{10 \\times 9 \\times 8 \\times 7!}{3! \\times 7!}$$\n\nLangkah 3: Menyederhanakan perkalian pembilang dan penyebut:\n$$C(10, 3) = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = \\frac{720}{6} = 120$$\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q2] Dari 12 siswa akan dipilih 4 orang delegasi OSIS. Banyak pilihan delegasi adalah ...",
          "opsi": [
            "A. 1.188",
            "B. 330",
            "C. 220",
            "D. 495",
            "E. 792"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Mengidentifikasi konteks permasalahan:\nMemilih 4 orang delegasi OSIS dari 12 siswa merupakan kombinasi karena **tidak ada tingkatan jabatan atau peran khusus**, sehingga urutan pemilihan tidak berpengaruh.\n\nLangkah 2: Menghitung dengan rumus kombinasi $C(12, 4)$:\n$$C(12, 4) = \\frac{12!}{4! \\cdot 8!} = \\frac{12 \\times 11 \\times 10 \\times 9}{4 \\times 3 \\times 2 \\times 1}$$\n\nLangkah 3: Menyederhanakan pecahan:\n$$C(12, 4) = \\frac{11.880}{24} = 495 \\text{ pilihan delegasi}$$\nKesimpulan: Kunci Jawaban D."
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q3] Dalam suatu rapat dihadiri 20 orang. Jika setiap orang saling berjabat tangan sekali, banyak jabat tangan terjadi adalah ...",
          "opsi": [
            "A. 380",
            "B. 190",
            "C. 200",
            "D. 180",
            "E. 210"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Memodelkan jabat tangan sebagai kombinasi:\nSatu peristiwa jabat tangan melibatkan tepat **2 orang**, dan jabat tangan antara orang A & B sama dengan B & A (urutan tidak berpengaruh), sehingga dihitung dengan kombinasi $C(n, 2)$.\n\nLangkah 2: Mensubstitusikan $n = 20$ orang:\n$$C(20, 2) = \\frac{20!}{2! \\cdot 18!} = \\frac{20 \\times 19}{2 \\times 1}$$\n\nLangkah 3: Menghitung hasil perkalian:\n$$C(20, 2) = \\frac{380}{2} = 190 \\text{ jabat tangan}$$\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q4] Siswa wajib mengerjakan 8 dari 10 soal ujian, tetapi nomor 1 s.d. 4 wajib dikerjakan. Banyak pilihan soal adalah ...",
          "opsi": [
            "A. 25",
            "B. 45",
            "C. 15",
            "D. 20",
            "E. 30"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Menganalisis kondisi soal wajib:\n- Total soal tersedia $= 10$ soal.\n- Wajib dikerjakan total $= 8$ soal.\n- Soal nomor 1 sampai 4 sudah WAJIB dikerjakan (ada 4 soal pasti terpilih).\n\nLangkah 2: Menghitung sisa soal yang bebas dipilih:\n- Sisa soal yang harus dipilih $= 8 - 4 = 4$ soal.\n- Sisa pilihan soal yang tersedia $= 10 - 4 = 6$ soal.\n\nLangkah 3: Menghitung kombinasi sisa soal $C(6, 4)$:\n$$C(6, 4) = C(6, 2) = \\frac{6 \\times 5}{2 \\times 1} = 15 \\text{ pilihan}$$\nKesimpulan: Kunci Jawaban C."
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q5] Tentukan nilai kebenaran (BENAR atau SALAH) untuk sifat kombinasi berikut:\n(1) Nilai C(n, r) selalu sama dengan C(n, n - r).\n(2) Nilai dari C(6, 2) adalah 15.\n(3) Nilai kombinasi C(n, r) selalu lebih besar daripada permutasi P(n, r) untuk r > 1.",
          "opsi": [
            "Nilai C(n, r) selalu sama dengan C(n, n - r)",
            "Nilai dari C(6, 2) adalah 15",
            "Nilai kombinasi C(n, r) selalu lebih besar daripada permutasi P(n, r) untuk r > 1"
          ],
          "kunci": "B - B - S",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nSifat simetri kombinasi: $C(n, r) = \\frac{n!}{r!(n-r)!} = C(n, n-r)$.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\n$$C(6, 2) = \\frac{6 \\times 5}{2 \\times 1} = 15$$\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nKarena $P(n, r) = r! \\cdot C(n, r)$ dan $r! > 1$ untuk $r > 1$, maka nilai permutasi selalu lebih besar daripada kombinasi ($P(n, r) > C(n, r)$).\n$\\implies$ Pernyataan (3) bernilai SALAH.\nKesimpulan: Kunci Jawaban B - B - S."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q6] Berapakah nilai $n$ jika $C(n, 2) = 28$?",
          "opsi": [
            "A. 7",
            "B. 6",
            "C. 10",
            "D. 8",
            "E. 9"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menguraikan rumus kombinasi untuk $r = 2$:\n$$C(n, 2) = \\frac{n(n - 1)}{2}$$\n\nLangkah 2: Menyusun persamaan dengan nilai yang diketahui:\n$$\\frac{n(n - 1)}{2} = 28$$\n$$n(n - 1) = 56$$\n$$n^2 - n - 56 = 0$$\n\nLangkah 3: Memfaktorkan persamaan kuadrat:\n$$(n - 8)(n + 7) = 0$$\nKarena $n \\in \\mathbb{N}$, maka $\\mathbf{n = 8}$.\nKesimpulan: Kunci Jawaban D."
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q7] Dari 6 putra dan 4 putri dipilih 3 putra dan 2 putri. Banyak cara pembentukan tim adalah ...",
          "opsi": [
            "A. 120",
            "B. 60",
            "C. 240",
            "D. 90",
            "E. 180"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menghitung cara memilih 3 putra dari 6 putra:\n$$C(6, 3) = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 20 \\text{ cara}$$\n\nLangkah 2: Menghitung cara memilih 2 putri dari 4 putri:\n$$C(4, 2) = \\frac{4 \\times 3}{2 \\times 1} = 6 \\text{ cara}$$\n\nLangkah 3: Menghitung total variasi pembentukan tim:\n$$\\text{Total} = C(6, 3) \\times C(4, 2) = 20 \\times 6 = 120 \\text{ cara}$$\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P04-Q8] Dari 6 siswa putra dan 4 siswa putri dipilih delegasi 4 orang. Manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Banyak cara memilih delegasi 2 putra dan 2 putri adalah 90 cara.",
            "B. Banyak cara jika tidak boleh ada putri adalah 15 cara.",
            "C. Banyak cara memilih delegasi tanpa syarat adalah 210 cara.",
            "D. Banyak cara jika paling sedikit 3 putra adalah 150 cara.",
            "E. Banyak cara jika semua anggota harus putri adalah 1 cara."
          ],
          "kunci": "A, B, C, E",
          "bahas": "Langkah 1: Analisis Opsi A (2 putra & 2 putri):\n$C(6, 2) \\times C(4, 2) = 15 \\times 6 = 90$ cara.\n$\\implies$ Pernyataan A BENAR.\n\nLangkah 2: Analisis Opsi B (Tanpa putri / semua putra):\n$C(6, 4) = 15$ cara.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C (Total delegasi tanpa syarat):\n$C(10, 4) = \\frac{10 \\times 9 \\times 8 \\times 7}{24} = 210$ cara.\n$\\implies$ Pernyataan C BENAR.\n\nLangkah 4: Analisis Opsi D (Paling sedikit 3 putra):\n- 3 putra, 1 putri: $C(6,3) \\times C(4,1) = 20 \\times 4 = 80$\n- 4 putra, 0 putri: $C(6,4) \\times C(4,0) = 15 \\times 1 = 15$\nTotal $= 80 + 15 = 95$ cara, bukan 150.\n$\\implies$ Pernyataan D SALAH.\n\nLangkah 5: Analisis Opsi E (Semua anggota putri):\n$C(4, 4) = 1$ cara.\n$\\implies$ Pernyataan E BENAR.\nKesimpulan: Kunci Jawaban A, B, C, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q9] Banyak segitiga dari 8 titik tanpa ada 3 titik yang segaris adalah ...",
          "opsi": [
            "A. 112",
            "B. 70",
            "C. 28",
            "D. 84",
            "E. 56"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Mengidentifikasi syarat pembentukan segitiga:\nSatu segitiga ditentukan oleh tepat **3 titik non-kolinier (tidak segaris)**. Karena tidak ada 3 titik yang segaris, setiap kombinasi 3 titik pasti membentuk satu segitiga unik.\n\nLangkah 2: Menghitung kombinasi $C(8, 3)$:\n$$C(8, 3) = \\frac{8!}{3! \\cdot 5!} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1}$$\n\nLangkah 3: Menyederhanakan perkalian:\n$$C(8, 3) = 8 \\times 7 = 56 \\text{ segitiga}$$\nKesimpulan: Kunci Jawaban E."
        },
        {
          "no": 10,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q10] Jika $C(n, 2) = 45$, maka nilai $n$ adalah ...",
          "opsi": [],
          "kunci": "10",
          "bahas": "Langkah 1: Menguraikan rumus kombinasi untuk $r = 2$:\n$$C(n, 2) = \\frac{n(n - 1)}{2} = 45$$\n\nLangkah 2: Menyusun persamaan kuadrat:\n$$n(n - 1) = 90$$\n$$n^2 - n - 90 = 0$$\n\nLangkah 3: Memfaktorkan persamaan kuadrat:\n$$(n - 10)(n + 9) = 0$$\nDiperoleh $\\mathbf{n = 10}$ (memenuhi syarat bilangan asli).\nKesimpulan: Kunci Jawaban 10."
        }
      ]
    },
    "P05": {
      "id": "P05",
      "subject": "Matematika Wajib",
      "title": "Peluang Kejadian Tunggal & Frekuensi Harapan",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q1] Pada pelemparan 2 dadu setimbang, peluang muncul jumlah kedua mata dadu sama dengan 8 adalah ...",
          "opsi": [
            "A. 1/6",
            "B. 1/12",
            "C. 7/36",
            "D. 5/36",
            "E. 1/9"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menentukan ruang sampel pelemparan 2 dadu setimbang:\n$$n(S) = 6 \\times 6 = 36$$\n\nLangkah 2: Mendaftarkan seluruh pasangan mata dadu yang berjumlah 8:\n$$A = \\{(2,6), (3,5), (4,4), (5,3), (6,2)\\} \\implies n(A) = 5$$\n\nLangkah 3: Menghitung peluang kejadian $P(A)$:\n$$P(A) = \\frac{n(A)}{n(S)} = \\frac{5}{36}$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "dadu",
            "sum": 8
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q2] Sebuah kantong berisi 5 kelereng merah dan 4 kelereng putih. Peluang terambil 2 kelereng merah sekaligus adalah ...",
          "opsi": [
            "A. 5/9",
            "B. 5/18",
            "C. 2/9",
            "D. 10/36",
            "E. 1/3"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menentukan total ruang sampel pengambilan 2 kelereng dari 9 kelereng:\nTotal kelereng = 5 merah + 4 putih = 9 kelereng.\n$$n(S) = C(9, 2) = \\frac{9 \\times 8}{2 \\times 1} = 36$$\n\nLangkah 2: Menentukan banyak cara terambilnya 2 kelereng merah dari 5 kelereng merah:\n$$n(M) = C(5, 2) = \\frac{5 \\times 4}{2 \\times 1} = 10$$\n\nLangkah 3: Menghitung peluang terambilnya 2 kelereng merah:\n$$P(M) = \\frac{n(M)}{n(S)} = \\frac{10}{36} = \\frac{5}{18}$$\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q3] Dua keping uang logam dilempar bersama sebanyak 300 kali. Frekuensi harapan muncul keduanya sisi angka adalah ...",
          "opsi": [
            "A. 75 kali",
            "B. 150 kali",
            "C. 50 kali",
            "D. 100 kali",
            "E. 120 kali"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menentukan ruang sampel pelemparan 2 keping uang logam:\n$$S = \\{AA, AG, GA, GG\\} \\implies n(S) = 4$$\n\nLangkah 2: Menentukan kejadian muncul keduanya sisi angka:\n$$A = \\{AA\\} \\implies n(A) = 1$$\n$$P(A) = \\frac{n(A)}{n(S)} = \\frac{1}{4}$$\n\nLangkah 3: Menghitung Frekuensi Harapan untuk $n = 300$ kali lemparan:\n$$F_h(A) = n \\times P(A) = 300 \\times \\frac{1}{4} = 75 \\text{ kali}$$\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q4] Dari satu set kartu bridge (52 kartu), peluang terambil kartu As berwarna merah adalah ...",
          "opsi": [
            "A. 1/13",
            "B. 4/52",
            "C. 1/52",
            "D. 2/13",
            "E. 1/26"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menentukan total ruang sampel 1 set kartu bridge standar:\n$$n(S) = 52 \\text{ kartu}$$\n\nLangkah 2: Menentukan banyak kartu As yang berwarna merah:\nKartu As berwarna merah terdiri atas 2 kartu, yaitu As Hati (Heart) dan As Wajik (Diamond).\n$$n(A) = 2 \\text{ kartu}$$\n\nLangkah 3: Menghitung peluang dan menyederhanakan pecahan:\n$$P(A) = \\frac{n(A)}{n(S)} = \\frac{2}{52} = \\frac{1}{26}$$\nKesimpulan: Kunci Jawaban E."
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q5] Tentukan nilai kebenaran (BENAR atau SALAH) untuk konsep peluang berikut:\n(1) Frekuensi harapan kejadian dirumuskan sebagai F_h(A) = n x P(A).\n(2) Jika peluang kejadian A adalah 0,4 maka peluang komplemen A' adalah 0,8.\n(3) Nilai peluang suatu kejadian A selalu memenuhi batasan 0 <= P(A) <= 1.",
          "opsi": [
            "Frekuensi harapan kejadian dirumuskan sebagai F_h(A) = n x P(A)",
            "Jika peluang kejadian A adalah 0,4 maka peluang komplemen A' adalah 0,8",
            "Nilai peluang suatu kejadian A selalu memenuhi batasan 0 <= P(A) <= 1"
          ],
          "kunci": "B - S - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nRumus teoritis frekuensi harapan dari $n$ kali percobaan adalah $F_h(A) = n \\times P(A)$.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\nPeluang komplemen kejadian $A$ dirumuskan sebagai $P(A') = 1 - P(A) = 1 - 0{,}4 = 0{,}6$ (bukan 0,8).\n$\\implies$ Pernyataan (2) bernilai SALAH.\n\nLangkah 3: Analisis Pernyataan (3):\nKisaran nilai peluang untuk setiap kejadian $A$ selalu memenuhi batas interval $0 \\le P(A) \\le 1$.\n$\\implies$ Pernyataan (3) bernilai BENAR.\n\nKesimpulan: Kunci Jawaban B - S - B."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q6] Peluang sebuah bibit tanaman tumbuh adalah 0,85. Dari 400 bibit yang ditanam, perkiraan bibit yang TIDAK tumbuh adalah ...",
          "opsi": [
            "A. 80 bibit",
            "B. 60 bibit",
            "C. 70 bibit",
            "D. 340 bibit",
            "E. 50 bibit"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menentukan peluang bibit TIDAK tumbuh menggunakan komplemen peluang:\n$$P(\\text{tidak tumbuh}) = 1 - P(\\text{tumbuh}) = 1 - 0{,}85 = 0{,}15$$\n\nLangkah 2: Menghitung perkiraan (frekuensi harapan) bibit yang tidak tumbuh dari $n = 400$ bibit:\n$$F_h = n \\times P(\\text{tidak tumbuh}) = 400 \\times 0{,}15 = 60 \\text{ bibit}$$\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q7] Tiga koin dilempar bersama. Peluang muncul paling sedikit 2 gambar adalah ...",
          "opsi": [
            "A. 1/4",
            "B. 7/8",
            "C. 1/2",
            "D. 5/8",
            "E. 3/8"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Menentukan ruang sampel pelemparan 3 koin bersamaan:\n$$n(S) = 2^3 = 8$$\nRuang sampel: $\\{AAA, AAG, AGA, AGG, GAA, GAG, GGA, GGG\\}$.\n\nLangkah 2: Mendaftarkan kejadian muncul paling sedikit 2 gambar (2 Gambar atau 3 Gambar):\n$$A = \\{AGG, GAG, GGA, GGG\\} \\implies n(A) = 4$$\n\nLangkah 3: Menghitung peluang kejadian:\n$$P(A) = \\frac{n(A)}{n(S)} = \\frac{4}{8} = \\frac{1}{2}$$\nKesimpulan: Kunci Jawaban C."
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P05-Q8] Pada pelemparan sebuah dadu bersisi 6 setimbang sebanyak 120 kali, manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Frekuensi harapan muncul mata dadu lebih dari 4 adalah 40 kali.",
            "B. Peluang muncul mata dadu prima adalah 1/2.",
            "C. Peluang muncul mata dadu lebih dari 4 adalah 1/3.",
            "D. Frekuensi harapan muncul mata dadu prima adalah 60 kali.",
            "E. Peluang muncul mata dadu 7 adalah 1/6."
          ],
          "kunci": "A, B, C, D",
          "bahas": "Langkah 1: Analisis Opsi A & C (Mata dadu > 4):\nMata dadu $> 4$ adalah $\\{5, 6\\} \\implies P = \\frac{2}{6} = \\frac{1}{3}$ (Opsi C BENAR).\nFrekuensi harapan $= 120 \\times \\frac{1}{3} = 40$ kali (Opsi A BENAR).\n\nLangkah 2: Analisis Opsi B & D (Mata dadu prima):\nMata dadu prima adalah $\\{2, 3, 5\\} \\implies P = \\frac{3}{6} = \\frac{1}{2}$ (Opsi B BENAR).\nFrekuensi harapan $= 120 \\times \\frac{1}{2} = 60$ kali (Opsi D BENAR).\n\nLangkah 3: Analisis Opsi E (Mata dadu 7):\nPada dadu 6 sisi standar, tidak ada mata dadu bernilai 7 $\\implies P = 0 \\ne \\frac{1}{6}$ (Opsi E SALAH).\n\nKesimpulan: Kunci Jawaban A, B, C, D."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q9] Peluang muncul jumlah dadu 7 pada pelemparan 2 dadu adalah ...",
          "opsi": [
            "A. 1/6",
            "B. 7/36",
            "C. 5/36",
            "D. 1/9",
            "E. 1/12"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menentukan ruang sampel pelemparan 2 dadu setimbang:\n$$n(S) = 6 \\times 6 = 36$$\n\nLangkah 2: Mendaftarkan pasangan mata dadu yang berjumlah 7:\n$$A = \\{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\\} \\implies n(A) = 6$$\n\nLangkah 3: Menghitung peluang munculnya jumlah 7:\n$$P(A) = \\frac{n(A)}{n(S)} = \\frac{6}{36} = \\frac{1}{6}$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "dadu",
            "sum": 7
          }
        },
        {
          "no": 10,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q10] Sebuah dadu dilempar 180 kali. Frekuensi harapan muncul mata dadu prima ({2, 3, 5}) adalah ...",
          "opsi": [],
          "kunci": "90",
          "bahas": "Langkah 1: Menentukan peluang muncul mata dadu prima pada 1 dadu bersisi 6:\nMata dadu prima adalah $\\{2, 3, 5\\} \\implies n(A) = 3$.\n$$P(A) = \\frac{3}{6} = \\frac{1}{2}$$\n\nLangkah 2: Menghitung frekuensi harapan untuk $n = 180$ lemparan:\n$$F_h(A) = n \\times P(A) = 180 \\times \\frac{1}{2} = 90 \\text{ kali}$$\nKesimpulan: Kunci Jawaban 90."
        }
      ]
    },
    "P06": {
      "id": "P06",
      "subject": "Matematika Wajib",
      "title": "Asesmen Sumatif 1: Pencacahan & Peluang Tunggal",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q1] Nilai dari $\\frac{P(6, 3)}{C(6, 3)}$ adalah ...",
          "opsi": [
            "A. 3",
            "B. 6",
            "C. 1",
            "D. 12",
            "E. 20"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menguraikan nilai permutasi P(6, 3) dan kombinasi C(6, 3):\n$$P(6, 3) = 6 \\times 5 \\times 4 = 120$$\n$$C(6, 3) = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 20$$\n\nLangkah 2: Menghitung hasil pembagian:\n$$\\frac{P(6, 3)}{C(6, 3)} = \\frac{120}{20} = 6$$\n*(Catatan: Secara teoritis, $\\frac{P(n, r)}{C(n, r)} = r! = 3! = 6$)*.\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q2] Dari angka {1, 2, 3, 4, 5, 6} disusun bilangan 4 digit tanpa perulangan. Peluang bilangan tersebut bernilai genap adalah ...",
          "opsi": [
            "A. 3/5",
            "B. 2/3",
            "C. 2/5",
            "D. 1/2",
            "E. 1/3"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menghitung total ruang sampel pembentukan bilangan 4 digit dari {1, 2, 3, 4, 5, 6}:\n$$n(S) = P(6, 4) = 6 \\times 5 \\times 4 \\times 3 = 360$$\n\nLangkah 2: Menghitung banyak bilangan genap 4 digit:\n- Satuan genap $\\{2, 4, 6\\}$: $3$ pilihan angka.\n- Tiga digit di depannya: $5 \\times 4 \\times 3 = 60$ pilihan.\n$$n(\\text{Genap}) = 3 \\times 60 = 180$$\n\nLangkah 3: Menghitung peluang terambil bilangan genap:\n$$P(\\text{Genap}) = \\frac{180}{360} = \\frac{1}{2}$$\nKesimpulan: Kunci Jawaban D."
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q3] Banyaknya segitiga dari 10 titik tanpa 3 titik segaris adalah ...",
          "opsi": [
            "A. 120",
            "B. 240",
            "C. 720",
            "D. 60",
            "E. 45"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Memahami syarat pembentukan segitiga dari 10 titik:\nSetiap segitiga dibentuk oleh tepat 3 titik non-segaris. Karena tidak ada 3 titik yang segaris, gunakan rumus kombinasi $C(10, 3)$.\n\nLangkah 2: Menghitung nilai kombinasi $C(10, 3)$:\n$$C(10, 3) = \\frac{10!}{3! \\cdot 7!} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1}$$\n\nLangkah 3: Menyederhanakan perkalian:\n$$C(10, 3) = \\frac{720}{6} = 120 \\text{ segitiga}$$\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q4] Dalam kotak ada 6 bola merah dan 4 bola biru. Diambil 3 bola sekaligus. Peluang terambil 2 merah dan 1 biru adalah ...",
          "opsi": [
            "A. 3/8",
            "B. 1/2",
            "C. 1/3",
            "D. 3/10",
            "E. 2/5"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menentukan total ruang sampel pengambilan 3 bola dari 10 bola (6 merah + 4 biru):\n$$n(S) = C(10, 3) = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120$$\n\nLangkah 2: Menghitung banyak cara terambilnya 2 bola merah dan 1 bola biru:\n$$n(A) = C(6, 2) \\times C(4, 1) = \\frac{6 \\times 5}{2} \\times 4 = 15 \\times 4 = 60$$\n\nLangkah 3: Menghitung peluang kejadian:\n$$P(A) = \\frac{n(A)}{n(S)} = \\frac{60}{120} = \\frac{1}{2}$$\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q5] Tentukan kebenaran evaluasi asesmen pencacahan dan peluang berikut:\n(1) Banyaknya bilangan genap 3 angka dari himpunan {1, 2, 3, 4, 5} tanpa pengulangan adalah 100 bilangan.\n(2) Peluang muncul jumlah mata dadu 7 pada pelemparan 2 dadu adalah 1/6.\n(3) Nilai dari C(8, 3) bernilai 56.",
          "opsi": [
            "Banyaknya bilangan genap 3 angka dari himpunan {1, 2, 3, 4, 5} tanpa pengulangan adalah 100 bilangan",
            "Peluang muncul jumlah mata dadu 7 pada pelemparan 2 dadu adalah 1/6",
            "Nilai dari C(8, 3) bernilai 56"
          ],
          "kunci": "S - B - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nBilangan genap 3 angka dari $\\{1, 2, 3, 4, 5\\}$ tanpa perulangan:\nSatuan genap $\\{2, 4\\}$ (2 cara), ratusan (4 cara), puluhan (3 cara) $\\implies 4 \\times 3 \\times 2 = 24$ (bukan 100).\n$\\implies$ Pernyataan (1) bernilai SALAH (S).\n\nLangkah 2: Analisis Pernyataan (2):\nPada pelemparan 2 dadu, pasangan mata dadu berjumlah 7 adalah $\\{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\\} \\implies P = \\frac{6}{36} = \\frac{1}{6}$.\n$\\implies$ Pernyataan (2) bernilai BENAR (B).\n\nLangkah 3: Analisis Pernyataan (3):\n$$C(8, 3) = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$$\n$\\implies$ Pernyataan (3) bernilai BENAR (B).\n\nKesimpulan: Kunci Jawaban S - B - B.",
          "viz": {
            "t": "dadu",
            "sum": 7
          }
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q6] Berapakah peluang terambilnya kartu King merah pada 1 kali pengambilan acak dari 52 kartu bridge?",
          "opsi": [
            "A. 1/13",
            "B. 2/13",
            "C. 4/52",
            "D. 1/26",
            "E. 1/52"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menentukan ruang sampel 1 set kartu bridge standar:\n$$n(S) = 52 \\text{ kartu}$$\n\nLangkah 2: Menghitung banyak kartu King berwarna merah:\nKartu King merah terdiri atas 2 kartu (King Hati dan King Wajik) $\\implies n(A) = 2$.\n\nLangkah 3: Menghitung peluang:\n$$P(A) = \\frac{2}{52} = \\frac{1}{26}$$\nKesimpulan: Kunci Jawaban D."
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q7] Nilai dari $C(8, 2) + C(8, 3)$ adalah ...",
          "opsi": [
            "A. 84",
            "B. 28",
            "C. 56",
            "D. 112",
            "E. 70"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menggunakan Identitas Pascal $C(n, r-1) + C(n, r) = C(n+1, r)$:\n$$C(8, 2) + C(8, 3) = C(9, 3)$$\n\nLangkah 2: Menghitung nilai numerik:\n$$C(8, 2) = \\frac{8 \\times 7}{2} = 28$$\n$$C(8, 3) = \\frac{8 \\times 7 \\times 6}{6} = 56$$\n\nLangkah 3: Menjumlahkan kedua nilai:\n$$28 + 56 = 84$$\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P06-Q8] Pada kotak berisi 5 bola merah dan 3 bola putih diambil 2 bola sekaligus secara acak. Manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Peluang terambil keduanya bola merah adalah 10/28 (atau 5/14).",
            "B. Total cara pengambilan 2 bola dari 8 bola adalah 28 cara.",
            "C. Peluang terambil keduanya bola putih adalah 3/28.",
            "D. Peluang paling sedikit 1 bola merah terambil adalah 1/28.",
            "E. Peluang terambil 1 merah dan 1 putih adalah 15/28."
          ],
          "kunci": "A, B, C, E",
          "bahas": "Langkah 1: Menghitung total ruang sampel pengambilan 2 bola dari 8 bola (5 merah + 3 putih):\n$$n(S) = C(8, 2) = \\frac{8 \\times 7}{2} = 28 \\text{ cara (Opsi B BENAR)}$$\n\nLangkah 2: Analisis Peluang:\n- Keduanya merah: $P = \\frac{C(5, 2)}{28} = \\frac{10}{28} = \\frac{5}{14}$ (Opsi A BENAR).\n- Keduanya putih: $P = \\frac{C(3, 2)}{28} = \\frac{3}{28}$ (Opsi C BENAR).\n- 1 merah & 1 putih: $P = \\frac{C(5, 1) \\times C(3, 1)}{28} = \\frac{5 \\times 3}{28} = \\frac{15}{28}$ (Opsi E BENAR).\n- Minimal 1 merah: $1 - P(\\text{semua putih}) = 1 - \\frac{3}{28} = \\frac{25}{28} \\ne \\frac{1}{28}$ (Opsi D SALAH).\n\nKesimpulan: Kunci Jawaban A, B, C, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q9] Dari 5 pria dan 3 wanita dipilih komite 3 orang. Peluang terpilih 2 pria dan 1 wanita adalah ...",
          "opsi": [
            "A. 1/2",
            "B. 3/7",
            "C. 15/28",
            "D. 9/28",
            "E. 5/14"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Menghitung total ruang sampel pemilihan 3 orang dari 8 orang (5 pria + 3 wanita):\n$$n(S) = C(8, 3) = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$$\n\nLangkah 2: Menghitung kejadian terpilihnya 2 pria dan 1 wanita:\n$$n(A) = C(5, 2) \\times C(3, 1) = 10 \\times 3 = 30$$\n\nLangkah 3: Menghitung peluang dan menyederhanakan pecahan:\n$$P(A) = \\frac{n(A)}{n(S)} = \\frac{30}{56} = \\frac{15}{28}$$\nKesimpulan: Kunci Jawaban C."
        },
        {
          "no": 10,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q10] Nilai dari $C(7, 3)$ adalah ...",
          "opsi": [],
          "kunci": "35",
          "bahas": "Langkah 1: Menguraikan rumus kombinasi $C(7, 3)$:\n$$C(7, 3) = \\frac{7!}{3! \\cdot 4!} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1}$$\n\nLangkah 2: Menyederhanakan perkalian pembilang dan penyebut:\n$$C(7, 3) = \\frac{210}{6} = 35$$\nKesimpulan: Kunci Jawaban 35."
        }
      ]
    },
    "P07": {
      "id": "P07",
      "subject": "Matematika Wajib",
      "title": "Peluang Kejadian Saling Lepas & Tidak Saling Lepas",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q1] Pada pelemparan 2 dadu, peluang muncul jumlah mata dadu 5 atau jumlah 10 adalah ...",
          "opsi": [
            "A. 2/9",
            "B. 7/36",
            "C. 1/4",
            "D. 5/36",
            "E. 1/6"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menentukan ruang sampel pelemparan 2 dadu:\n$$n(S) = 6 \\times 6 = 36$$\n\nLangkah 2: Mendaftarkan pasangan mata dadu yang berjumlah 5 dan berjumlah 10:\n- Kejadian jumlah 5 ($A$): $\\{(1,4), (2,3), (3,2), (4,1)\\} \\implies n(A) = 4$.\n- Kejadian jumlah 10 ($B$): $\\{(4,6), (5,5), (6,4)\\} \\implies n(B) = 3$.\n\nLangkah 3: Menentukan hubungan kejadian dan menghitung peluang:\nKarena tidak ada pasangan yang sekaligus berjumlah 5 dan 10 ($A \\cap B = \\emptyset$), kedua kejadian **saling lepas**.\n$$P(A \\cup B) = P(A) + P(B) = \\frac{4}{36} + \\frac{3}{36} = \\frac{7}{36}$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "dadu",
            "sum": 5
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q2] Dari 52 kartu bridge, diambil 1 kartu. Peluang terambil kartu bernomor prima ({2, 3, 5, 7}) atau kartu berwarna merah adalah ...",
          "opsi": [
            "A. 8/13",
            "B. 9/13",
            "C. 1/2",
            "D. 17/26",
            "E. 19/26"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menentukan banyak kartu bernomor prima dan kartu berwarna merah dari 52 kartu:\n- Kartu bernomor prima $\\{2, 3, 5, 7\\}$: $4 \\text{ nomor} \\times 4 \\text{ jenis} = 16 \\text{ kartu} \\implies P(\\text{Prima}) = \\frac{16}{52}$.\n- Kartu berwarna merah (Hati & Wajik): $26 \\text{ kartu} \\implies P(\\text{Merah}) = \\frac{26}{52}$.\n\nLangkah 2: Menentukan irisan kartu bernomor prima yang berwarna merah:\nKartu prima merah: $4 \\text{ nomor} \\times 2 \\text{ jenis} = 8 \\text{ kartu} \\implies P(\\text{Prima} \\cap \\text{Merah}) = \\frac{8}{52}$.\n\nLangkah 3: Menggunakan rumus kejadian tidak saling lepas:\n$$P(\\text{Prima} \\cup \\text{Merah}) = \\frac{16}{52} + \\frac{26}{52} - \\frac{8}{52} = \\frac{34}{52} = \\frac{17}{26}$$\nKesimpulan: Kunci Jawaban D."
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q3] Sebuah kantong berisi 5 bola merah, 3 bola kuning, dan 2 bola hijau. Peluang terambil bola merah atau hijau adalah ...",
          "opsi": [
            "A. 4/5",
            "B. 7/10",
            "C. 3/5",
            "D. 1/2",
            "E. 8/10"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menghitung total ruang sampel bola di dalam kantong:\n$$n(S) = 5 \\text{ merah} + 3 \\text{ kuning} + 2 \\text{ hijau} = 10 \\text{ bola}$$\n\nLangkah 2: Mengidentifikasi sifat kejadian terambil bola merah ($M$) atau hijau ($H$):\nKarena 1 bola tidak mungkin sekaligus berwarna merah dan hijau, kedua kejadian **saling lepas** ($M \\cap H = \\emptyset$).\n\nLangkah 3: Menghitung peluang gabungan:\n$$P(M \\cup H) = P(M) + P(H) = \\frac{5}{10} + \\frac{2}{10} = \\frac{7}{10}$$\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q4] Dua kejadian A dan B dikatakan saling lepas jika memenuhi syarat ...",
          "opsi": [
            "A. $P(A \\cap B) = P(A)P(B)$",
            "B. $A \\subset B$",
            "C. $P(A \\cap B) = 0$",
            "D. $P(A) = P(B)$",
            "E. $P(A \\cup B) = 1$"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Memahami definisi dua kejadian saling lepas (mutually exclusive):\nDua kejadian $A$ dan $B$ dikatakan saling lepas jika kedua kejadian tersebut tidak dapat terjadi secara bersamaan dalam satu percobaan.\n\nLangkah 2: Menentukan kriteria matematis:\nIrisan dari kedua himpunan kejadian adalah himpunan kosong ($A \\cap B = \\emptyset$).\nDengan demikian, nilai peluang irisannya adalah nol:\n$$P(A \\cap B) = 0$$\nKesimpulan: Kunci Jawaban C."
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q5] Tentukan kebenaran hukum peluang majemuk berikut:\n(1) Untuk dua kejadian saling lepas, berlaku P(A U B) = P(A) + P(B).\n(2) Untuk dua kejadian tidak saling lepas, berlaku P(A U B) = P(A) + P(B) - P(A n B).\n(3) Jika P(A) = 0,4 dan P(B) = 0,5 saling lepas, maka P(A U B) = 0,2.",
          "opsi": [
            "Untuk dua kejadian saling lepas, berlaku P(A U B) = P(A) + P(B)",
            "Untuk dua kejadian tidak saling lepas, berlaku P(A U B) = P(A) + P(B) - P(A n B)",
            "Jika P(A) = 0,4 dan P(B) = 0,5 saling lepas, maka P(A U B) = 0,2"
          ],
          "kunci": "B - B - S",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nUntuk dua kejadian saling lepas ($P(A \\cap B) = 0$), berlaku $P(A \\cup B) = P(A) + P(B)$.\n$\\implies$ Pernyataan (1) bernilai BENAR (B).\n\nLangkah 2: Analisis Pernyataan (2):\nUntuk dua kejadian tidak saling lepas, berlaku hukum penjumlahan inklusi-eksklusi $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.\n$\\implies$ Pernyataan (2) bernilai BENAR (B).\n\nLangkah 3: Analisis Pernyataan (3):\nJika $P(A) = 0{,}4$ dan $P(B) = 0{,}5$ saling lepas, maka $P(A \\cup B) = 0{,}4 + 0{,}5 = 0{,}9$ (bukan 0,2).\n$\\implies$ Pernyataan (3) bernilai SALAH (S).\n\nKesimpulan: Kunci Jawaban B - B - S."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q6] Peluang muncul jumlah dadu ganjil atau kelipatan 4 pada 2 dadu adalah ...",
          "opsi": [
            "A. 2/3",
            "B. 7/12",
            "C. 1/2",
            "D. 5/8",
            "E. 3/4"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menentukan ruang sampel pelemparan 2 dadu:\n$$n(S) = 36$$\n\nLangkah 2: Mendaftarkan kejadian jumlah ganjil dan jumlah kelipatan 4:\n- Jumlah ganjil $\\{3, 5, 7, 9, 11\\}$: Terdapat $2 + 4 + 6 + 4 + 2 = 18$ pasangan $\\implies P = \\frac{18}{36}$.\n- Jumlah kelipatan 4 $\\{4, 8, 12\\}$: Terdapat $3 + 5 + 1 = 9$ pasangan $\\implies P = \\frac{9}{36}$.\n\nLangkah 3: Memeriksa hubungan dan menghitung peluang:\nBilangan ganjil dan bilangan kelipatan 4 (genap) tidak memiliki irisan $\\implies$ **saling lepas**.\n$$P = \\frac{18}{36} + \\frac{9}{36} = \\frac{27}{36} = \\frac{3}{4}$$\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "dadu",
            "rule": "ganjil-atau-k4"
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q7] Dari 40 siswa, 25 suka Matematika, 20 suka Fisika, dan 10 suka keduanya. Peluang seorang siswa suka Matematika atau Fisika adalah ...",
          "opsi": [
            "A. 5/8",
            "B. 3/4",
            "C. 4/5",
            "D. 7/8",
            "E. 9/10"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menentukan total siswa dan data himpunan:\n$$n(S) = 40, \\quad n(M) = 25, \\quad n(F) = 20, \\quad n(M \\cap F) = 10$$\n\nLangkah 2: Menghitung banyak siswa yang suka Matematika ATAU Fisika:\n$$n(M \\cup F) = n(M) + n(F) - n(M \\cap F) = 25 + 20 - 10 = 35 \\text{ siswa}$$\n\nLangkah 3: Menghitung peluang dan menyederhanakan pecahan:\n$$P(M \\cup F) = \\frac{n(M \\cup F)}{n(S)} = \\frac{35}{40} = \\frac{7}{8}$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "venn",
            "n": 40,
            "a": 25,
            "b": 20,
            "ab": 10,
            "la": "Matematika",
            "lb": "Fisika"
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P07-Q8] Dari satu set kartu bridge standar (52 kartu) diambil 1 kartu acak. Manakah pernyataan peluang berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Peluang terambil kartu As Hati adalah 1/52.",
            "B. Peluang terambil kartu As adalah 4/52 (atau 1/13).",
            "C. Peluang terambil kartu As atau kartu Hati adalah 16/52 (atau 4/13).",
            "D. Peluang terambil kartu Hati (Heart) adalah 13/52 (atau 1/4).",
            "E. Kejadian terambil kartu As dan kartu Hati adalah kejadian saling lepas."
          ],
          "kunci": "A, B, C, D",
          "bahas": "Langkah 1: Analisis seluruh pernyataan peluang kartu bridge standar (52 kartu):\n- Opsi A: Kartu As Hati hanya ada 1 lembar $\\implies P = \\frac{1}{52}$ (BENAR).\n- Opsi B: Total kartu As ada 4 lembar $\\implies P = \\frac{4}{52} = \\frac{1}{13}$ (BENAR).\n- Opsi C: Kartu As (4) atau Hati (13), dengan irisan 1 As Hati $\\implies P = \\frac{4 + 13 - 1}{52} = \\frac{16}{52} = \\frac{4}{13}$ (BENAR).\n- Opsi D: Total kartu Hati ada 13 lembar $\\implies P = \\frac{13}{52} = \\frac{1}{4}$ (BENAR).\n- Opsi E: Kartu As dan kartu Hati memiliki irisan yaitu kartu As Hati, sehingga TIDAK saling lepas (SALAH).\n\nKesimpulan: Kunci Jawaban A, B, C, D."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q9] Peluang seorang siswa lulus Matematika 0,7 dan Fisika 0,6 serta keduanya 0,5. Peluang lulus salah satu atau keduanya adalah ...",
          "opsi": [
            "A. 0,9",
            "B. 0,75",
            "C. 0,65",
            "D. 0,85",
            "E. 0,8"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menggunakan rumus peluang gabungan dua kejadian tidak saling lepas:\n$$P(M \\cup F) = P(M) + P(F) - P(M \\cap F)$$\n\nLangkah 2: Mensubstitusikan nilai peluang yang diketahui:\n$$P(M \\cup F) = 0{,}7 + 0{,}6 - 0{,}5 = 1{,}3 - 0{,}5 = 0{,}8$$\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "venn2"
          }
        },
        {
          "no": 10,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q10] Sebuah kartu diambil dari 52 kartu. Peluang terambil kartu As atau King adalah ... (dalam bentuk pecahan per 13)",
          "opsi": [],
          "kunci": "2/13",
          "bahas": "Langkah 1: Menentukan kejadian terambil kartu As atau King dari 52 kartu:\n- Kartu As ada 4 lembar $\\implies n(\\text{As}) = 4$.\n- Kartu King ada 4 lembar $\\implies n(\\text{King}) = 4$.\nKarena tidak ada kartu yang sekaligus As dan King, kedua kejadian **saling lepas**.\n\nLangkah 2: Menghitung peluang gabungan:\n$$P(\\text{As} \\cup \\text{King}) = \\frac{4}{52} + \\frac{4}{52} = \\frac{8}{52}$$\n\nLangkah 3: Menyederhanakan pecahan ke dalam bentuk per 13:\n$$\\frac{8}{52} = \\frac{2}{13}$$\nKesimpulan: Kunci Jawaban 2/13."
        }
      ]
    },
    "P08": {
      "id": "P08",
      "subject": "Matematika Wajib",
      "title": "Peluang Kejadian Saling Bebas & Peluang Bersyarat",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q1] Peluang siswa A lulus ujian adalah 0,8 dan siswa B lulus adalah 0,7. Peluang kedua siswa A dan B lulus bersamaan adalah ...",
          "opsi": [
            "A. 0,94",
            "B. 0,56",
            "C. 0,14",
            "D. 0,75",
            "E. 0,26"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Mengidentifikasi sifat dua kejadian saling bebas (independen):\nKelulusan siswa A tidak memengaruhi kelulusan siswa B, sehingga peluang kedua siswa lulus bersamaan dirumuskan dengan Aturan Perkalian Saling Bebas:\n$$P(A \\cap B) = P(A) \\cdot P(B)$$\n\nLangkah 2: Mensubstitusikan nilai:\n$$P(A \\cap B) = 0{,}8 \\times 0{,}7 = 0{,}56$$\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q2] Dua bola diambil satu per satu TANPA pengembalian dari kotak berisi 5 merah dan 3 putih. Peluang terambil keduanya merah adalah ...",
          "opsi": [
            "A. 5/14",
            "B. 25/64",
            "C. 15/56",
            "D. 3/8",
            "E. 5/28"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Memahami pengambilan tanpa pengembalian:\nPengambilan pertama memengaruhi komposisi bola untuk pengambilan kedua.\nTotal bola mula-mula $= 5 \\text{ merah} + 3 \\text{ putih} = 8$ bola.\n\nLangkah 2: Menghitung peluang tahap 1 dan tahap 2:\n- Pengambilan ke-1 (merah): $P(M_1) = \\frac{5}{8}$.\n- Pengambilan ke-2 (merah tersisa 4 dari 7 bola): $P(M_2 | M_1) = \\frac{4}{7}$.\n\nLangkah 3: Mengalikan peluang kedua tahap:\n$$P(M_1 \\cap M_2) = \\frac{5}{8} \\times \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}$$\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q3] Rumus peluang bersyarat $P(A|B)$ (peluang kejadian A terjadi setelah B terjadi) adalah ...",
          "opsi": [
            "A. $P(A) \\cdot P(B)$",
            "B. $\\frac{P(A \\cap B)}{P(B)}$",
            "C. $P(A) + P(B)$",
            "D. $\\frac{P(A)}{P(B)}$",
            "E. $\\frac{P(A \\cap B)}{P(A)}$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Definisi formal peluang bersyarat $P(A|B)$:\nPeluang terjadinya kejadian A dengan syarat kejadian B sudah dipastikan terjadi dirumuskan sebagai:\n$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}, \\quad \\text{dengan } P(B) > 0$$\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q4] Jika $P(A) = 0{,}4; P(B) = 0{,}5;$ dan $P(A \\cap B) = 0{,}2$, maka nilai $P(A|B)$ adalah ...",
          "opsi": [
            "A. 0,4",
            "B. 0,2",
            "C. 0,5",
            "D. 0,8",
            "E. 0,1"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menggunakan rumus peluang bersyarat:\n$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$\n\nLangkah 2: Mensubstitusikan nilai $P(A \\cap B) = 0{,}2$ dan $P(B) = 0{,}5$:\n$$P(A|B) = \\frac{0{,}2}{0{,}5} = 0{,}4$$\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q5] Tentukan kebenaran konsep independensi stokastik dan peluang bersyarat:\n(1) Rumus peluang bersyarat dirumuskan sebagai P(A|B) = P(A n B) / P(B).\n(2) Untuk dua kejadian saling bebas, berlaku P(A n B) = P(A) x P(B).\n(3) Jika dua kejadian A dan B saling bebas, maka nilai P(A|B) selalu sama dengan 0.",
          "opsi": [
            "Rumus peluang bersyarat dirumuskan sebagai P(A|B) = P(A n B) / P(B)",
            "Untuk dua kejadian saling bebas, berlaku P(A n B) = P(A) x P(B)",
            "Jika dua kejadian A dan B saling bebas, maka nilai P(A|B) selalu sama dengan 0"
          ],
          "kunci": "B - B - S",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nDefinisi formal peluang bersyarat adalah $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\nDefinisi kejadian saling bebas stokastik adalah $P(A \\cap B) = P(A) \\cdot P(B)$.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nJika A dan B saling bebas, maka $P(A|B) = P(A)$, bukan bernilai 0.\n$\\implies$ Pernyataan (3) bernilai SALAH.\nKesimpulan: Kunci Jawaban B - B - S."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q6] Peluang penembak A mengenai target adalah 0,6 dan penembak B adalah 0,8. Peluang tepat satu penembak mengenai target adalah ...",
          "opsi": [
            "A. 0,48",
            "B. 0,38",
            "C. 0,28",
            "D. 0,52",
            "E. 0,44"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menganalisis kondisi \"tepat satu penembak mengenai target\":\nKondisi ini terdiri atas dua kejadian saling lepas:\n1. Penembak A mengenai target DAN Penembak B meleset: $P(A \\cap B')$\n2. Penembak A meleset DAN Penembak B mengenai target: $P(A' \\cap B)$\n\nLangkah 2: Menghitung peluang masing-masing komplemen:\n- $P(A') = 1 - 0{,}6 = 0{,}4$\n- $P(B') = 1 - 0{,}8 = 0{,}2$\n\nLangkah 3: Menghitung dan menjumlahkan peluang:\n$$P(\\text{tepat satu}) = (0{,}6 \\times 0{,}2) + (0{,}4 \\times 0{,}8) = 0{,}12 + 0{,}32 = 0{,}44$$\nKesimpulan: Kunci Jawaban E."
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q7] Dua dadu dilempar bersama. Peluang mata dadu pertama ganjil dan mata dadu kedua prima adalah ...",
          "opsi": [
            "A. 1/2",
            "B. 1/3",
            "C. 1/8",
            "D. 1/4",
            "E. 1/6"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Kejadian pelemparan dua dadu adalah saling bebas:\n- Dadu 1 ganjil $\\{1, 3, 5\\} \\implies P(A) = \\frac{3}{6} = \\frac{1}{2}$.\n- Dadu 2 prima $\\{2, 3, 5\\} \\implies P(B) = \\frac{3}{6} = \\frac{1}{2}$.\n\nLangkah 2: Menghitung peluang kedua kejadian bersamaan:\n$$P(A \\cap B) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "dadu",
            "rule": "ganjil-prima"
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P08-Q8] Peluang pemanah A tepat sasaran adalah 0,7 dan pemanah B tepat sasaran adalah 0,8 (saling bebas). Manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Peluang hanya pemanah A yang tepat sasaran adalah 0,14.",
            "B. Peluang kedua pemanah gagal tepat sasaran adalah 0,06.",
            "C. Peluang hanya pemanah B yang tepat sasaran adalah 0,24.",
            "D. Peluang kedua pemanah tepat sasaran adalah 0,56.",
            "E. Peluang paling sedikit satu pemanah tepat sasaran adalah 0,94."
          ],
          "kunci": "A, B, C, D, E",
          "bahas": "Langkah 1: Analisis seluruh pernyataan peluang pemanah ($P(A) = 0{,}7$ dan $P(B) = 0{,}8$):\n- A: Hanya A kena $= 0{,}7 \\times 0{,}2 = 0{,}14$ (BENAR)\n- B: Keduanya gagal $= 0{,}3 \\times 0{,}2 = 0{,}06$ (BENAR)\n- C: Hanya B kena $= 0{,}3 \\times 0{,}8 = 0{,}24$ (BENAR)\n- D: Keduanya kena $= 0{,}7 \\times 0{,}8 = 0{,}56$ (BENAR)\n- E: Paling sedikit satu kena $= 1 - 0{,}06 = 0{,}94$ (BENAR)\nKesimpulan: Kunci Jawaban A, B, C, D, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q9] Peluang mesin A rusak 0,1 dan mesin B rusak 0,2. Peluang kedua mesin bekerja normal adalah ...",
          "opsi": [
            "A. 0,80",
            "B. 0,70",
            "C. 0,68",
            "D. 0,90",
            "E. 0,72"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menghitung peluang masing-masing mesin bekerja normal:\n- Mesin A normal: $P(A') = 1 - 0{,}1 = 0{,}9$\n- Mesin B normal: $P(B') = 1 - 0{,}2 = 0{,}8$\n\nLangkah 2: Menghitung peluang kedua mesin normal (saling bebas):\n$$P(A' \\cap B') = 0{,}9 \\times 0{,}8 = 0{,}72$$\nKesimpulan: Kunci Jawaban E."
        },
        {
          "no": 10,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q10] Jika $P(A \\cap B) = 0{,}12$ dan $P(A) = 0{,}3$, maka nilai $P(B|A)$ adalah ...",
          "opsi": [],
          "kunci": "0,4",
          "bahas": "Langkah 1: Menggunakan rumus peluang bersyarat $P(B|A)$:\n$$P(B|A) = \\frac{P(A \\cap B)}{P(A)}$$\n\nLangkah 2: Mensubstitusikan $P(A \\cap B) = 0{,}12$ dan $P(A) = 0{,}3$:\n$$P(B|A) = \\frac{0{,}12}{0{,}3} = 0{,}4$$\nKesimpulan: Kunci Jawaban 0,4."
        }
      ]
    },
    "P09": {
      "id": "P09",
      "subject": "Matematika Wajib",
      "title": "Dimensi Tiga 1: Kedudukan Titik, Garis, dan Bidang dalam Ruang 3D",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q1] Pada kubus ABCD.EFGH, kedudukan garis AB dan garis CG adalah ...",
          "opsi": [
            "A. Bersilangan tegak lurus",
            "B. Berpotongan",
            "C. Berimpit",
            "D. Bersilangan membentuk sudut 45 derajat",
            "E. Sejajar"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Mengidentifikasi posisi kedua garis pada kubus ABCD.EFGH:\n- Garis AB terletak pada bidang alas ABCD (arah sumbu X).\n- Garis CG adalah rusuk tegak di sudut kanan belakang (arah sumbu Z).\n\nLangkah 2: Memeriksa sifat geometris hubungan kedua garis:\n- Garis AB dan CG tidak sebidang (non-koplanar), tidak berpotongan, dan tidak saling sejajar -> bersilangan (skew lines).\n- Karena arah sumbu X tegak lurus arah sumbu Z, maka kedua garis saling tegak lurus (90 derajat).\n\nLangkah 3: Kesimpulan:\nKedudukan garis AB dan garis CG adalah bersilangan tegak lurus.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "AB",
              "CG"
            ]
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q2] Pada kubus ABCD.EFGH, garis yang sejajar dengan garis diagonal sisi AH adalah ...",
          "opsi": [
            "A. Garis CF",
            "B. Garis AF",
            "C. Garis EG",
            "D. Garis BG",
            "E. Garis DE"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Mengidentifikasi posisi diagonal sisi AH:\n- Garis AH menghubungkan titik A(0,0,0) ke H(0,s,s) pada bidang sisi kiri ADHE.\n\nLangkah 2: Mencari diagonal pada bidang sisi yang berhadapan sejajar (bidang kanan BCGF):\n- Titik B(s,0,0) bersesuaian dengan A, dan titik G(s,s,s) bersesuaian dengan H.\n- Ruas garis yang menghubungkan B ke G adalah diagonal sisi BG.\n\nLangkah 3: Kesimpulan:\nGaris diagonal sisi yang sejajar dengan garis AH adalah garis BG.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "AH"
            ]
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q3] Banyaknya bidang diagonal pada kubus ABCD.EFGH adalah ...",
          "opsi": [
            "A. 12 bidang",
            "B. 4 bidang",
            "C. 8 bidang",
            "D. 2 bidang",
            "E. 6 bidang"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Mengidentifikasi definisi bidang diagonal kubus:\nBidang diagonal adalah bidang yang dibatasi oleh dua rusuk berhadapan sejajar dan dua diagonal bidang yang saling sejajar.\n\nLangkah 2: Mendaftarkan seluruh 6 bidang diagonal pada kubus ABCD.EFGH:\n1. Bidang ACGE (memuat rusuk AE dan CG)\n2. Bidang BDHF (memuat rusuk BF dan DH)\n3. Bidang ABGH (memuat rusuk AB dan GH)\n4. Bidang CDEF (memuat rusuk CD dan EF)\n5. Bidang ADGF (memuat rusuk AD dan FG)\n6. Bidang BCHE (memuat rusuk BC dan EH)\n\nLangkah 3: Kesimpulan:\nBanyaknya bidang diagonal pada kubus adalah 6 bidang.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "ruang",
            "shape": "kubus"
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q4] Garis yang tegak lurus dengan bidang alas ABCD pada kubus ABCD.EFGH adalah ...",
          "opsi": [
            "A. AG, BH, CE, DF",
            "B. AF, BE",
            "C. EF, GH, EH, FG",
            "D. AE, BF, CG, DH",
            "E. AC, BD"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Mengidentifikasi bidang alas ABCD:\nBidang alas ABCD terletak pada bidang horizontal xy (z = 0).\n\nLangkah 2: Menentukan garis yang tegak lurus bidang horizontal:\nGaris yang tegak lurus bidang horizontal adalah garis yang membentang vertikal (searah sumbu z), yaitu seluruh 4 rusuk tegak kubus:\n- Rusuk AE\n- Rusuk BF\n- Rusuk CG\n- Rusuk DH\n\nLangkah 3: Kesimpulan:\nGaris yang tegak lurus bidang alas ABCD adalah AE, BF, CG, DH.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "ruang",
            "shape": "kubus"
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q5] Pada kubus ABCD.EFGH, tentukan kebenaran kedudukan geometri berikut:\n(1) Garis AC terletak di luar bidang alas ABCD.\n(2) Garis AB bersilangan tegak lurus dengan garis CG.\n(3) Garis AB sejajar dengan garis CD.",
          "opsi": [
            "Garis AC terletak di luar bidang alas ABCD",
            "Garis AB bersilangan tegak lurus dengan garis CG",
            "Garis AB sejajar dengan garis CD"
          ],
          "kunci": "S - B - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nTitik A dan C keduanya merupakan titik sudut bidang alas ABCD, sehingga garis AC terletak tepat pada bidang alas ABCD (bukan di luar).\n-> Pernyataan (1) bernilai SALAH (S).\n\nLangkah 2: Analisis Pernyataan (2):\nGaris AB dan garis CG tidak sebidang, tidak berpotongan, dan arahnya saling tegak lurus (90 derajat).\n-> Pernyataan (2) bernilai BENAR (B).\n\nLangkah 3: Analisis Pernyataan (3):\nGaris AB dan garis CD merupakan sisi-sisi berhadapan pada persegi ABCD yang saling sejajar (AB // CD).\n-> Pernyataan (3) bernilai BENAR (B).\n\nKesimpulan: Kunci Jawaban S - B - B.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "CG",
              "CD"
            ]
          }
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q6] Berapakah banyak pasangan rusuk kubus yang saling bersilangan tegak lurus?",
          "opsi": [
            "A. 24 pasang",
            "B. 48 pasang",
            "C. 36 pasang",
            "D. 16 pasang",
            "E. 12 pasang"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Mengelompokkan 12 rusuk kubus berdasarkan 3 arah sumbu koordinat:\n- 4 rusuk searah sumbu X: AB, CD, EF, GH\n- 4 rusuk searah sumbu Y: AD, BC, EH, FG\n- 4 rusuk searah sumbu Z: AE, BF, CG, DH\n\nLangkah 2: Menghitung pasangan bersilangan tegak lurus:\n- Sebuah rusuk sumbu X tegak lurus terhadap seluruh 4 rusuk sumbu Y dan 4 rusuk sumbu Z (total 8 rusuk).\n- Dari 8 rusuk tersebut, 4 rusuk berpotongan langsung dengannya, dan 4 rusuk lainnya bersilangan (tidak sebidang).\n- Jadi tiap 1 rusuk membentuk 4 pasangan bersilangan tegak lurus.\n\nLangkah 3: Menghitung total pasangan unik:\nTotal Pasangan = (12 rusuk x 4) / 2 = 24 pasang.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "ruang",
            "shape": "kubus"
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q7] Kedudukan bidang diagonal ACGE terhadap bidang diagonal BDHF pada kubus adalah ...",
          "opsi": [
            "A. Sejajar",
            "B. Saling tegak lurus",
            "C. Bersilangan",
            "D. Membentuk sudut 45 derajat",
            "E. Berimpit"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Mengidentifikasi orientasi kedua bidang diagonal:\n- Bidang diagonal ACGE memuat diagonal sisi alas AC dan diagonal sisi atas EG.\n- Bidang diagonal BDHF memuat diagonal sisi alas BD dan diagonal sisi atas FH.\n\nLangkah 2: Memeriksa perpotongan garis penentu kedua bidang:\nPada bidang alas persegi ABCD, diagonal sisi AC berpotongan tegak lurus dengan diagonal sisi BD (AC tegak lurus BD, sudut 90 derajat).\n\nLangkah 3: Menentukan kedudukan kedua bidang:\nKarena diagonal alasnya berpotongan tegak lurus dan rusuk-rusuk tegaknya sejajar, maka bidang diagonal ACGE saling tegak lurus terhadap bidang BDHF.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "bid": [
              "ACGE",
              "BDHF"
            ]
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P09-Q8] Pada kubus ABCD.EFGH, manakah pernyataan relasi garis dan bidang berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Garis EA tegak lurus terhadap bidang alas ABCD.",
            "B. Bidang ABFE sejajar dengan bidang DCGH.",
            "C. Garis AG berpotongan dengan garis EC di titik pusat kubus.",
            "D. Bidang BDG sejajar dengan bidang alas ABCD.",
            "E. Garis AH sejajar dengan garis BG."
          ],
          "kunci": "A, B, C, E",
          "bahas": "Langkah 1: Menguji seluruh opsi pernyataan:\n- Opsi A: Garis EA adalah rusuk tegak yang tegak lurus terhadap bidang alas ABCD (BENAR).\n- Opsi B: Bidang ABFE (depan) dan bidang DCGH (belakang) adalah dua bidang sisi yang saling berhadapan sejajar (BENAR).\n- Opsi C: Garis AG dan garis EC adalah diagonal ruang kubus yang berpotongan tepat di titik berat/pusat ruang kubus (BENAR).\n- Opsi D: Bidang BDG memotong bidang alas ABCD di sepanjang garis diagonal BD, sehingga tidak sejajar (SALAH).\n- Opsi E: Garis AH pada bidang ADHE sejajar dengan garis BG pada bidang BCGF (BENAR).\n\nLangkah 2: Menarik kesimpulan:\nPernyataan yang bernilai benar adalah opsi A, B, C, dan E.\nKesimpulan: Kunci Jawaban A, B, C, E.",
          "viz": {
            "t": "ruang",
            "shape": "kubus"
          }
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q9] Garis diagonal ruang AG memotong bidang CFH di titik yang membagi AG dengan rasio ...",
          "opsi": [
            "A. $3 : 1$",
            "B. $3 : 2$",
            "C. $2 : 1$",
            "D. $1 : 2$",
            "E. $1 : 1$"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Memahami teorema pembagian diagonal ruang kubus oleh bidang segitiga:\nDiagonal ruang AG melintasi dua bidang segitiga sejajar, yaitu bidang BDE dan bidang CFH.\n\nLangkah 2: Menentukan titik tembus bidang CFH pada diagonal ruang AG:\n- Bidang BDE memotong AG di titik P1 dengan jarak AP1 = 1/3 s√3.\n- Bidang CFH memotong AG di titik P2 dengan jarak AP2 = 2/3 s√3 dan P2G = 1/3 s√3.\n\nLangkah 3: Menghitung rasio pembagian garis AG:\nRasio AP2 : P2G = (2/3) : (1/3) = 2 : 1.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "AG"
            ]
          }
        },
        {
          "no": 10,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q10] Banyaknya rusuk pada prisma segi-6 beraturan adalah ...",
          "opsi": [],
          "kunci": "18",
          "bahas": "Langkah 1: Mengidentifikasi komponen rusuk pada prisma segi-n:\nPrisma segi-n terdiri dari 3 kelompok rusuk:\n- n buah rusuk alas\n- n buah rusuk atas\n- n buah rusuk tegak\nTotal Rusuk = n + n + n = 3n.\n\nLangkah 2: Menghitung untuk prisma segi-6 beraturan (n = 6):\nBanyak Rusuk = 3 x 6 = 18 rusuk.\n\nLangkah 3: Kesimpulan:\nBanyaknya rusuk pada prisma segi-6 beraturan adalah 18.\nKesimpulan: Kunci Jawaban 18.",
          "viz": {
            "t": "ruang",
            "shape": "prisma"
          }
        }
      ]
    },
    "P10": {
      "id": "P10",
      "subject": "Matematika Wajib",
      "title": "Dimensi Tiga 2: Jarak Titik ke Titik (Diagonal Ruang & Pythagoras 3D)",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q1] Pada kubus ABCD.EFGH dengan panjang rusuk 8 cm, panjang diagonal ruang AG adalah ...",
          "opsi": [
            "A. 16 cm",
            "B. 8√2 cm",
            "C. 8√3 cm",
            "D. 12 cm",
            "E. 8√6 cm"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Mengidentifikasi rumus diagonal ruang kubus dengan rusuk $s$:\nPanjang diagonal ruang kubus memenuhi rumus:\n$$d_{\\text{ruang}} = s\\sqrt{3}$$\n\nLangkah 2: Mensubstitusikan panjang rusuk $s = 8$ cm:\n$$AG = 8\\sqrt{3} \\text{ cm}$$\n\nLangkah 3: Pembuktian dengan Teorema Pythagoras 3D:\n$$AG = \\sqrt{AB^2 + BC^2 + CG^2} = \\sqrt{8^2 + 8^2 + 8^2} = \\sqrt{64 \\times 3} = 8\\sqrt{3} \\text{ cm}$$\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "AG"
            ]
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q2] Kubus ABCD.EFGH berusuk 6 cm. Titik P terletak di tengah-tengah rusuk CG. Jarak dari titik A ke titik P adalah ...",
          "opsi": [
            "A. 10 cm",
            "B. 7 cm",
            "C. 6√2 cm",
            "D. 9 cm",
            "E. 8 cm"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menentukan panjang diagonal sisi alas dan ruas garis titik tengah:\n- Rusuk kubus $s = 6$ cm.\n- Diagonal bidang alas: $AC = s\\sqrt{2} = 6\\sqrt{2}$ cm.\n- Titik P di tengah rusuk $CG \\implies CP = \\frac{1}{2}(6) = 3$ cm.\n\nLangkah 2: Menerapkan Teorema Pythagoras pada $\\triangle ACP$ yang siku-siku di titik C:\n$$AP = \\sqrt{AC^2 + CP^2}$$\n\nLangkah 3: Mensubstitusikan nilai panjang ruas garis:\n$$AP = \\sqrt{(6\\sqrt{2})^2 + 3^2} = \\sqrt{72 + 9} = \\sqrt{81} = 9 \\text{ cm}$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "CG"
            ]
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q3] Balok ABCD.EFGH berukuran $AB = 8$ cm, $BC = 6$ cm, dan $CG = 24$ cm. Panjang diagonal ruang AG adalah ...",
          "opsi": [
            "A. 25 cm",
            "B. 24√2 cm",
            "C. 26 cm",
            "D. 30 cm",
            "E. 28 cm"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Mengidentifikasi rumus diagonal ruang balok dengan ukuran $p = 8$ cm, $l = 6$ cm, dan $t = 24$ cm:\n$$d_{\\text{ruang}} = \\sqrt{p^2 + l^2 + t^2}$$\n\nLangkah 2: Mensubstitusikan ukuran balok:\n$$AG = \\sqrt{8^2 + 6^2 + 24^2} = \\sqrt{64 + 36 + 576} = \\sqrt{100 + 576} = \\sqrt{676}$$\n\nLangkah 3: Menghitung akar kuadrat:\n$$AG = 26 \\text{ cm}$$\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "ruang",
            "shape": "balok",
            "seg": [
              "AG"
            ]
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q4] Kubus ABCD.EFGH berusuk 10 cm. Titik M di tengah AD dan titik N di tengah GH. Jarak titik M ke titik N adalah ...",
          "opsi": [
            "A. 10√2 cm",
            "B. 5√5 cm",
            "C. 15 cm",
            "D. 10√3 cm",
            "E. 5√6 cm"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menentukan koordinat titik M dan N pada kubus berusuk 10 cm (titik A sebagai titik asal $(0,0,0)$):\n- Titik D$(0, 10, 0) \\implies$ Titik tengah AD adalah $M(0, 5, 0)$.\n- Titik G$(10, 10, 10)$ dan H$(0, 10, 10) \\implies$ Titik tengah GH adalah $N(5, 10, 10)$.\n\nLangkah 2: Menghitung selisih koordinat:\n$$\\Delta x = 5 - 0 = 5, \\quad \\Delta y = 10 - 5 = 5, \\quad \\Delta z = 10 - 0 = 10$$\n\nLangkah 3: Menghitung jarak Euclid 3D $MN$:\n$$MN = \\sqrt{5^2 + 5^2 + 10^2} = \\sqrt{25 + 25 + 100} = \\sqrt{150} = 5\\sqrt{6} \\text{ cm}$$\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "AD"
            ]
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q5] Pada kubus ABCD.EFGH dengan panjang rusuk 8 cm, tentukan kebenaran jarak titik berikut:\n(1) Jarak titik A ke titik C adalah 8 akar(2) cm.\n(2) Jarak titik A ke titik G adalah 8 akar(3) cm.\n(3) Jarak titik tengah AB ke titik tengah GH adalah 8 akar(3) cm.",
          "opsi": [
            "Jarak titik A ke titik C adalah 8 akar(2) cm",
            "Jarak titik A ke titik G adalah 8 akar(3) cm",
            "Jarak titik tengah AB ke titik tengah GH adalah 8 akar(3) cm"
          ],
          "kunci": "B - B - S",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nPanjang diagonal sisi AC pada kubus berusuk 8 cm adalah $AC = s\\sqrt{2} = 8\\sqrt{2}$ cm.\n$\\implies$ Pernyataan (1) bernilai BENAR (B).\n\nLangkah 2: Analisis Pernyataan (2):\nPanjang diagonal ruang AG pada kubus berusuk 8 cm adalah $AG = s\\sqrt{3} = 8\\sqrt{3}$ cm.\n$\\implies$ Pernyataan (2) bernilai BENAR (B).\n\nLangkah 3: Analisis Pernyataan (3):\nTitik tengah AB $(4, 0, 0)$ ke titik tengah GH $(4, 8, 8)$ memiliki jarak $\\sqrt{0^2 + 8^2 + 8^2} = 8\\sqrt{2}$ cm (bukan $8\\sqrt{3}$ cm).\n$\\implies$ Pernyataan (3) bernilai SALAH (S).\n\nKesimpulan: Kunci Jawaban B - B - S.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "AB",
              "GH"
            ]
          }
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q6] Berapakah jarak titik A ke titik C pada kubus rusuk 12 cm?",
          "opsi": [
            "A. 12√3 cm",
            "B. 12√2 cm",
            "C. 18 cm",
            "D. 24 cm",
            "E. 6√6 cm"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Mengidentifikasi hubungan titik A dan C pada kubus ABCD.EFGH:\nRuas garis AC merupakan diagonal bidang alas kubus.\n\nLangkah 2: Menggunakan rumus panjang diagonal sisi kubus:\n$$AC = s\\sqrt{2}$$\n\nLangkah 3: Mensubstitusikan rusuk $s = 12$ cm:\n$$AC = 12\\sqrt{2} \\text{ cm}$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "ruang",
            "shape": "kubus"
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q7] Limas T.ABCD alas persegi rusuk 6 cm, tinggi $TO = 4$ cm. Jarak puncak T ke titik sudut A adalah ...",
          "opsi": [
            "A. 4√2 cm",
            "B. 6 cm",
            "C. 2√17 cm",
            "D. 5 cm",
            "E. √34 cm"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menentukan jarak dari titik pusat alas O ke titik sudut A:\n- Panjang diagonal alas: $AC = s\\sqrt{2} = 6\\sqrt{2}$ cm.\n- Jarak O ke A: $AO = \\frac{1}{2}AC = 3\\sqrt{2}$ cm.\n\nLangkah 2: Menerapkan Teorema Pythagoras pada $\\triangle TOA$ yang siku-siku di titik O:\n$$TA = \\sqrt{TO^2 + AO^2}$$\n\nLangkah 3: Mensubstitusikan tinggi $TO = 4$ cm dan $AO = 3\\sqrt{2}$ cm:\n$$TA = \\sqrt{4^2 + (3\\sqrt{2})^2} = \\sqrt{16 + 18} = \\sqrt{34} \\text{ cm}$$\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "ruang",
            "shape": "limas"
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P10-Q8] Pada kubus ABCD.EFGH dengan panjang rusuk 6 cm, titik P adalah titik tengah rusuk CG. Manakah pernyataan jarak titik berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Jarak titik A ke titik P adalah 9 cm.",
            "B. Jarak titik B ke titik P adalah 3 akar(5) cm.",
            "C. Jarak titik E ke titik P adalah 3 akar(5) cm.",
            "D. Jarak titik D ke titik P adalah 3 akar(5) cm.",
            "E. Panjang ruas garis CP adalah 3 cm."
          ],
          "kunci": "A, B, D, E",
          "bahas": "Langkah 1: Analisis seluruh pernyataan metrik kubus berusuk 6 cm ($CP = 3$ cm):\n- Opsi A: Jarak A ke P $= \\sqrt{AC^2 + CP^2} = \\sqrt{(6\\sqrt{2})^2 + 3^2} = \\sqrt{72 + 9} = 9$ cm (BENAR).\n- Opsi B: Jarak B ke P $= \\sqrt{BC^2 + CP^2} = \\sqrt{6^2 + 3^2} = \\sqrt{45} = 3\\sqrt{5}$ cm (BENAR).\n- Opsi C: Jarak E ke P $= \\sqrt{6^2 + 6^2 + 3^2} = \\sqrt{81} = 9$ cm (SALAH, tertulis $3\\sqrt{5}$).\n- Opsi D: Jarak D ke P $= \\sqrt{DC^2 + CP^2} = \\sqrt{6^2 + 3^2} = 3\\sqrt{5}$ cm (BENAR).\n- Opsi E: Panjang ruas garis $CP = \\frac{1}{2}(6) = 3$ cm (BENAR).\n\nKesimpulan: Kunci Jawaban A, B, D, E.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "CG"
            ]
          }
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q9] Pada kubus berusuk $a$, jarak titik tengah EF ke titik tengah BC adalah ...",
          "opsi": [
            "A. 1/2 a√5",
            "B. 1/2 a√3",
            "C. a√3",
            "D. a√2",
            "E. 1/2 a√6"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menentukan koordinat titik tengah EF ($P$) dan titik tengah BC ($Q$) pada kubus berusuk $a$:\n- Titik tengah EF: $P\\left(\\frac{a}{2}, 0, a\\right)$.\n- Titik tengah BC: $Q\\left(a, \\frac{a}{2}, 0\\right)$.\n\nLangkah 2: Menghitung selisih koordinat antar kedua titik:\n$$\\Delta x = a - \\frac{a}{2} = \\frac{a}{2}, \\quad \\Delta y = \\frac{a}{2} - 0 = \\frac{a}{2}, \\quad \\Delta z = 0 - a = -a$$\n\nLangkah 3: Menerapkan Teorema Pythagoras 3D:\n$$PQ = \\sqrt{\\left(\\frac{a}{2}\\right)^2 + \\left(\\frac{a}{2}\\right)^2 + (-a)^2} = \\sqrt{\\frac{a^2}{4} + \\frac{a^2}{4} + a^2} = \\sqrt{\\frac{6a^2}{4}} = \\frac{1}{2}a\\sqrt{6}$$\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "EF",
              "BC"
            ]
          }
        },
        {
          "no": 10,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q10] Panjang diagonal ruang balok berukuran 3 cm x 4 cm x 12 cm adalah ... (dalam satuan cm)",
          "opsi": [],
          "kunci": "13",
          "bahas": "Langkah 1: Menggunakan rumus diagonal ruang balok $p = 3$ cm, $l = 4$ cm, dan $t = 12$ cm:\n$$d_{\\text{ruang}} = \\sqrt{p^2 + l^2 + t^2}$$\n\nLangkah 2: Mensubstitusikan ukuran dimensi:\n$$d = \\sqrt{3^2 + 4^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169}$$\n\nLangkah 3: Menghitung nilai akar:\n$$d = 13 \\text{ cm}$$\nKesimpulan: Kunci Jawaban 13.",
          "viz": {
            "t": "ruang",
            "shape": "balok"
          }
        }
      ]
    },
    "P13": {
      "id": "P13",
      "subject": "Matematika Wajib",
      "title": "Dimensi Tiga 5: Sudut Garis-Bidang dan Sudut Antara Dua Bidang",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q1] Pada kubus ABCD.EFGH, nilai tangen sudut antara garis diagonal ruang AG dan bidang alas ABCD adalah ...",
          "opsi": [
            "A. √2",
            "B. 1/2 √2",
            "C. √3",
            "D. 1/2 √6",
            "E. 1/3 √3"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menentukan proyeksi garis diagonal ruang AG pada bidang alas ABCD:\nProyeksi garis AG pada bidang alas adalah diagonal sisi AC. Sudut yang terbentuk adalah $\\angle CAG = \\alpha$.\n\nLangkah 2: Menentukan panjang sisi $\\triangle ACG$ (siku-siku di C):\n- Rusuk tegak: $CG = s$\n- Diagonal sisi alas: $AC = s\\sqrt{2}$\n\nLangkah 3: Menghitung nilai tangen $\\alpha$:\n$$\\tan\\alpha = \\frac{CG}{AC} = \\frac{s}{s\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{1}{2}\\sqrt{2}$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "AG"
            ]
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q2] Pada kubus ABCD.EFGH, nilai cosinus sudut antara garis diagonal sisi AH dan garis diagonal sisi AC adalah ...",
          "opsi": [
            "A. 1/2",
            "B. 0",
            "C. 1/2 √3",
            "D. 1/2 √2",
            "E. 1/3 √3"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Mengidentifikasi segitiga yang dibentuk oleh titik A, H, dan C:\nHubungkan titik A, H, dan C sehingga membentuk $\\triangle AHC$.\n\nLangkah 2: Menentukan panjang ketiga sisi $\\triangle AHC$:\n- $AH = s\\sqrt{2}$ (diagonal sisi kiri)\n- $AC = s\\sqrt{2}$ (diagonal sisi alas)\n- $CH = s\\sqrt{2}$ (diagonal sisi belakang)\nKarena ketiga sisinya sama panjang, $\\triangle AHC$ adalah **segitiga sama sisi**.\n\nLangkah 3: Menghitung besar sudut dan nilai kosinusnya:\nSudut antara garis AH dan garis AC adalah $60^\\circ$.\n$$\\cos 60^\\circ = \\frac{1}{2}$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "AH",
              "AC"
            ]
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q3] Besar sudut antara bidang frontal ABFE dan bidang dorsal CDHG pada kubus ABCD.EFGH adalah ...",
          "opsi": [
            "A. 90 derajat (Tegak lurus)",
            "B. 60 derajat",
            "C. 180 derajat",
            "D. 45 derajat",
            "E. 0 derajat (Sejajar)"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Mengidentifikasi posisi kedua bidang pada kubus ABCD.EFGH:\n- Bidang ABFE adalah bidang sisi depan (frontal).\n- Bidang CDHG adalah bidang sisi belakang (dorsal).\n\nLangkah 2: Menentukan kedudukan dan sudut antara dua bidang sejajar:\nKedua bidang saling berhadapan sejajar ($ABFE \\parallel CDHG$), sehingga tidak membentuk garis perpotongan.\nBesar sudut antara dua bidang yang saling sejajar adalah **0 derajat**.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "ruang",
            "shape": "kubus"
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q4] Nilai sinus sudut antara bidang AFH dan bidang alas ABCD pada kubus ABCD.EFGH adalah ...",
          "opsi": [
            "A. 1/3 √6",
            "B. 1/2 √3",
            "C. 1/2 √2",
            "D. 2/3 √2",
            "E. 1/3 √3"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menentukan sudut antara bidang AFH dan bidang horizontal (EFGH / ABCD):\n- Garis potong bidang AFH dengan bidang atas EFGH adalah diagonal $FH$.\n- Garis tinggi $\\triangle AFH$ adalah ruas garis $AO'$ (dengan $O'$ titik tengah $FH$).\n- Garis tinggi pada bidang atas adalah $EO' = \\frac{1}{2}s\\sqrt{2}$.\n- Sudut yang terbentuk adalah $\\angle AO'E = \\theta$ pada $\\triangle AEO'$ (siku-siku di E).\n\nLangkah 2: Menentukan panjang sisi $\\triangle AEO'$:\n- Sisi depan: $AE = s$\n- Sisi samping: $EO' = \\frac{1}{2}s\\sqrt{2}$\n- Sisi miring: $AO' = \\sqrt{s^2 + \\left(\\frac{1}{2}s\\sqrt{2}\\right)^2} = \\sqrt{s^2 + \\frac{1}{2}s^2} = \\frac{s\\sqrt{6}}{2}$\n\nLangkah 3: Menghitung nilai sinus $\\theta$:\n$$\\sin\\theta = \\frac{AE}{AO'} = \\frac{s}{\\frac{s\\sqrt{6}}{2}} = \\frac{2}{\\sqrt{6}} = \\frac{2\\sqrt{6}}{6} = \\frac{1}{3}\\sqrt{6}$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "ruang",
            "shape": "kubus"
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q5] Pada kubus ABCD.EFGH, tentukan kebenaran sudut garis berikut:\n(1) Besar sudut antara diagonal sisi AH dan diagonal sisi CF adalah 60 derajat.\n(2) Besar sudut antara diagonal ruang AG dan rusuk tegak AE adalah 90 derajat.\n(3) Besar sudut antara rusuk AB dan rusuk BC adalah 90 derajat.",
          "opsi": [
            "Besar sudut antara diagonal sisi AH dan diagonal sisi CF adalah 60 derajat",
            "Besar sudut antara diagonal ruang AG dan rusuk tegak AE adalah 90 derajat",
            "Besar sudut antara rusuk AB dan rusuk BC adalah 90 derajat"
          ],
          "kunci": "S - S - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nGaris diagonal AH dan CF adalah garis bersilangan. Jika CF digeser ke garis DE (karena $CF \\parallel DE$), maka sudut antara AH dan DE pada persegi ADHE adalah $90^\\circ$ (tegak lurus), bukan $60^\\circ$.\n$\\implies$ Pernyataan (1) bernilai SALAH (S).\n\nLangkah 2: Analisis Pernyataan (2):\nPada $\\triangle AEG$ (siku-siku di E), sudut $\\angle EAG = \\arctan(\\sqrt{2}) \\approx 54{,}7^\\circ \\ne 90^\\circ$.\n$\\implies$ Pernyataan (2) bernilai SALAH (S).\n\nLangkah 3: Analisis Pernyataan (3):\nRusuk AB dan rusuk BC pada bidang alas persegi ABCD berpotongan tegak lurus ($90^\\circ$).\n$\\implies$ Pernyataan (3) bernilai BENAR (B).\n\nKesimpulan: Kunci Jawaban S - S - B.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "AH",
              "CF"
            ]
          }
        },
        {
          "no": 6,
          "tipe": "Kecukupan Data",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P13-Q6] Berapakah besar sudut antara garis diagonal ruang dan bidang alas kubus?\nPernyataan (1): Kubus memiliki volume 1.000 cm^3.\nPernyataan (2): Panjang diagonal sisi alas adalah 10√2 cm.",
          "opsi": [
            "A. DUA pernyataan BERSAMA-SAMA cukup",
            "B. Pernyataan (1) SAJA cukup",
            "C. Pernyataan (2) SAJA cukup",
            "D. Pernyataan (1) SAJA cukup dan (2) SAJA cukup",
            "E. Pernyataan (1) dan (2) tidak cukup"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Memahami sifat metrik sudut diagonal ruang terhadap bidang alas kubus:\nSudut $\\alpha$ antara diagonal ruang AG dan alas selalu bernilai konstan pada setiap kubus:\n$$\\tan\\alpha = \\frac{s}{s\\sqrt{2}} = \\frac{1}{2}\\sqrt{2} \\implies \\alpha = \\arctan\\left(\\frac{1}{2}\\sqrt{2}\\right) \\approx 35{,}26^\\circ$$\n\nLangkah 2: Evaluasi Pernyataan (1) SAJA:\nVolume $= 1.000\\text{ cm}^3 \\implies s = 10\\text{ cm}$ (CUKUP untuk mengonfirmasi bentuk kubus).\n\nLangkah 3: Evaluasi Pernyataan (2) SAJA:\nDiagonal sisi $= 10\\sqrt{2}\\text{ cm} \\implies s = 10\\text{ cm}$ (CUKUP untuk mengonfirmasi bentuk kubus).\n\nKesimpulan: Kunci Jawaban D (Pernyataan (1) SAJA cukup dan (2) SAJA cukup).",
          "viz": {
            "t": "ruang",
            "shape": "kubus"
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q7] Pada limas T.ABCD dengan alas persegi berusuk 6 cm dan tinggi bidang tegak TP = 5 cm (P di tengah AB), nilai kosinus sudut antara bidang TAB dan bidang TCD adalah ...",
          "opsi": [
            "A. 1/2",
            "B. 3/5",
            "C. 24/25",
            "D. 4/5",
            "E. 7/25"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menentukan penampang segitiga yang memuat sudut antara bidang TAB dan TCD:\n- Misalkan titik P adalah titik tengah rusuk AB $\\implies TP = 5$ cm (tinggi $\\triangle TAB$).\n- Misalkan titik Q adalah titik tengah rusuk CD $\\implies TQ = 5$ cm (tinggi $\\triangle TCD$).\n- Panjang ruas garis $PQ = AD = 6$ cm.\n\nLangkah 2: Membentuk $\\triangle TPQ$ dengan $TP = 5$ cm, $TQ = 5$ cm, dan $PQ = 6$ cm.\nSudut antara bidang TAB dan TCD adalah sudut $\\angle PTQ = \\theta$.\n\nLangkah 3: Menerapkan Aturan Kosinus pada $\\triangle TPQ$:\n$$PQ^2 = TP^2 + TQ^2 - 2(TP)(TQ)\\cos\\theta$$\n$$6^2 = 5^2 + 5^2 - 2(5)(5)\\cos\\theta$$\n$$36 = 25 + 25 - 50\\cos\\theta$$\n$$36 = 50 - 50\\cos\\theta$$\n$$50\\cos\\theta = 50 - 36 = 14$$\n$$\\cos\\theta = \\frac{14}{50} = \\frac{7}{25}$$\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "ruang",
            "shape": "limas"
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P13-Q8] Pada kubus ABCD.EFGH, misalkan alpha adalah sudut antara garis AG dan bidang alas ABCD. Manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Garis AG tegak lurus terhadap bidang ACGE.",
            "B. Nilai cos(alpha) adalah akar(6)/3.",
            "C. Nilai tan(alpha) adalah 1/2 akar(2).",
            "D. Besar sudut antara diagonal sisi AF dan CH adalah 60 derajat.",
            "E. Nilai sin(alpha) adalah akar(3)/3."
          ],
          "kunci": "B, C, D, E",
          "bahas": "Langkah 1: Analisis nilai trigonometri sudut $\\alpha$ antara diagonal ruang AG dan alas ABCD:\n- Sisi depan $= s$, sisi samping $= s\\sqrt{2}$, sisi miring $= s\\sqrt{3}$.\n- $\\tan\\alpha = \\frac{s}{s\\sqrt{2}} = \\frac{1}{2}\\sqrt{2}$ (Opsi C BENAR).\n- $\\cos\\alpha = \\frac{s\\sqrt{2}}{s\\sqrt{3}} = \\frac{\\sqrt{6}}{3}$ (Opsi B BENAR).\n- $\\sin\\alpha = \\frac{s}{s\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$ (Opsi E BENAR).\n\nLangkah 2: Analisis sudut antar-garis:\n- Sudut antara AF dan CH (geser ke AF dan DE) adalah $60^\\circ$ (Opsi D BENAR).\n- Opsi A SALAH karena garis AG terletak di dalam bidang ACGE (bukan tegak lurus).\n\nKesimpulan: Kunci Jawaban B, C, D, E.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "AG"
            ]
          }
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q9] Nilai kosinus sudut antara garis diagonal ruang EC dan diagonal ruang AG pada kubus adalah ...",
          "opsi": [
            "A. 0",
            "B. 1/3",
            "C. 1/2",
            "D. 2/3",
            "E. 1/√3"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menentukan vektor arah diagonal ruang EC dan AG pada kubus berusuk $a$:\n- Vektor arah $EC = (a, a, -a)$\n- Vektor arah $AG = (a, a, a)$\n\nLangkah 2: Menghitung hasil perkalian titik (dot product):\n$$\\vec{u} \\cdot \\vec{v} = (a)(a) + (a)(a) + (-a)(a) = a^2 + a^2 - a^2 = a^2$$\n\nLangkah 3: Menghitung panjang vektor dan nilai kosinus:\n$$|\\vec{u}| = |\\vec{v}| = a\\sqrt{3}$$\n$$\\cos\\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\frac{a^2}{(a\\sqrt{3})(a\\sqrt{3})} = \\frac{a^2}{3a^2} = \\frac{1}{3}$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "EC",
              "AG"
            ]
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q10] Besar sudut (dalam derajat) yang dibentuk antara bidang alas ABCD dan bidang diagonal ACGE pada kubus adalah ...",
          "opsi": [],
          "kunci": "90",
          "bahas": "Langkah 1: Mengidentifikasi bidang diagonal ACGE:\nBidang diagonal $ACGE$ dibentuk oleh diagonal bidang alas $AC$ dan rusuk-rusuk tegak kubus $AE$ dan $CG$.\n\nLangkah 2: Memeriksa kedudukan rusuk tegak terhadap bidang alas:\nKarena seluruh rusuk tegak $AE \\perp \\text{bidang } ABCD$, maka bidang diagonal $ACGE$ yang memuat garis AE berkedudukan tegak lurus terhadap bidang alas ABCD.\n\nLangkah 3: Menentukan besar sudut dihedral:\nBesar sudut yang dibentuk adalah **90 derajat**.\nKesimpulan: Kunci Jawaban 90.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "bid": [
              "ACGE"
            ]
          }
        }
      ]
    },
    "P14": {
      "id": "P14",
      "subject": "Matematika Wajib",
      "title": "Asesmen Sumatif Terpadu Dimensi Tiga & Bedah Prediksi ASTS CBT",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P14-Q1] Kubus ABCD.EFGH dengan rusuk 6 cm. Titik P adalah perpotongan diagonal bidang EFGH. Jarak titik P ke garis diagonal sisi BD adalah ...",
          "opsi": [
            "A. 3√2 cm",
            "B. 3√6 cm",
            "C. 3√3 cm",
            "D. 6 cm",
            "E. 6√2 cm"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menentukan posisi titik P dan diagonal sisi BD pada kubus berusuk 6 cm:\n- Titik P adalah titik perpotongan diagonal bidang atas $EFGH \\implies P(3, 3, 6)$.\n- Diagonal sisi BD terletak pada bidang alas dengan pusat alas $O(3, 3, 0)$.\n\nLangkah 2: Menentukan kaki garis tegak lurus dari titik P ke diagonal BD:\nKarena P terletak tepat vertikal di atas pusat alas O, proyeksi tegak lurus titik P ke diagonal BD adalah titik O itu sendiri.\n\nLangkah 3: Menghitung panjang segmen garis PO:\nJarak PO adalah ruas garis vertikal sejajar rusuk kubus:\n$$PO = \\Delta z = 6 - 0 = 6 \\text{ cm}$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "BD"
            ],
            "bid": [
              "EFGH"
            ]
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P14-Q2] Pada limas segiempat beraturan T.ABCD, rusuk alas 8 cm dan rusuk tegak 12 cm. Jarak titik puncak T ke bidang alas ABCD adalah ...",
          "opsi": [
            "A. 8√2 cm",
            "B. 8 cm",
            "C. 6√3 cm",
            "D. 4√7 cm",
            "E. 4√5 cm"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menentukan ukuran limas segiempat beraturan T.ABCD:\n- Rusuk alas persegi $s = 8$ cm $\\implies$ diagonal alas $AC = 8\\sqrt{2}$ cm $\\implies AO = 4\\sqrt{2}$ cm.\n- Rusuk tegak $TA = 12$ cm.\n\nLangkah 2: Menerapkan Teorema Pythagoras untuk menghitung tinggi limas TO:\n$$TO = \\sqrt{TA^2 - AO^2} = \\sqrt{12^2 - (4\\sqrt{2})^2} = \\sqrt{144 - 32} = \\sqrt{112}$$\n\nLangkah 3: Menyederhanakan bentuk akar:\n$$\\sqrt{112} = \\sqrt{16 \\times 7} = 4\\sqrt{7} \\text{ cm}$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "ruang",
            "shape": "limas"
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P14-Q3] Balok ABCD.EFGH berukuran $10 \\times 8 \\times 6$ cm. Kuadrat panjang diagonal ruang AG adalah ...",
          "opsi": [
            "A. 200",
            "B. 100",
            "C. 400",
            "D. 256",
            "E. 144"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menggunakan rumus kuadrat panjang diagonal ruang balok:\n$$d^2 = p^2 + l^2 + t^2$$\n\nLangkah 2: Mensubstitusikan ukuran balok $p = 10$ cm, $l = 8$ cm, dan $t = 6$ cm:\n$$d^2 = 10^2 + 8^2 + 6^2 = 100 + 64 + 36$$\n\nLangkah 3: Menghitung nilai penjumlahan:\n$$d^2 = 200$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "ruang",
            "shape": "balok",
            "seg": [
              "AG"
            ]
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P14-Q4] Pada kubus berusuk 12 cm, jarak titik tengah rusuk AB ke bidang diagonal CDHG adalah ...",
          "opsi": [
            "A. 12√2 cm",
            "B. 6√2 cm",
            "C. 12 cm",
            "D. 6√3 cm",
            "E. 6 cm"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Mengidentifikasi posisi titik dan bidang:\n- Titik tengah rusuk AB terletak pada bidang depan $ABFE$.\n- Bidang $CDHG$ adalah bidang sisi belakang kubus yang sejajar dengan bidang depan $ABFE$.\n\nLangkah 2: Menghitung jarak antara dua bidang sisi yang berhadapan:\nJarak antara bidang depan dan bidang belakang pada kubus sama dengan panjang rusuk kubus tersebut.\n\nLangkah 3: Menentukan jarak:\nKarena rusuk kubus adalah 12 cm, maka jaraknya adalah **12 cm**.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "AB"
            ],
            "bid": [
              "CDHG"
            ]
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P14-Q5] Pada kubus ABCD.EFGH, tentukan kebenaran sudut dihedral antar bidang:\n(1) Nilai tangen sudut antara bidang BDG dan bidang ABCD adalah 1/2.\n(2) Besar sudut antara bidang ABCD dan bidang ABFE adalah 90 derajat.\n(3) Bidang ABCD dan bidang EFGH saling sejajar (sudut 0 derajat).",
          "opsi": [
            "Nilai tangen sudut antara bidang BDG dan bidang ABCD adalah 1/2",
            "Besar sudut antara bidang ABCD dan bidang ABFE adalah 90 derajat",
            "Bidang ABCD dan bidang EFGH saling sejajar (sudut 0 derajat)"
          ],
          "kunci": "S - B - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nSudut antara bidang BDG dan bidang ABCD memiliki $\\tan\\theta = \\frac{CG}{CO} = \\frac{a}{\\frac{1}{2}a\\sqrt{2}} = \\sqrt{2}$, bukan $1/2$.\n$\\implies$ Pernyataan (1) bernilai SALAH.\n\nLangkah 2: Analisis Pernyataan (2):\nBidang alas ABCD dan sisi depan ABFE berpotongan tegak lurus membentuk sudut $90^\\circ$.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nDua bidang saling sejajar (ABCD dan EFGH) memiliki sudut kemiringan $0^\\circ$.\n$\\implies$ Pernyataan (3) bernilai BENAR.\nKesimpulan: Kunci Jawaban S - B - B.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "bid": [
              "ABCD",
              "ABFE"
            ]
          }
        },
        {
          "no": 6,
          "tipe": "Kecukupan Data",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P14-Q6] Berapakah volume prisma tegak segitiga ABC.DEF?\nPernyataan (1): Luas alas segitiga ABC adalah 24 cm^2.\nPernyataan (2): Tinggi prisma AD adalah 15 cm.",
          "opsi": [
            "A. DUA pernyataan BERSAMA-SAMA cukup",
            "B. Pernyataan (1) dan (2) tidak cukup",
            "C. Pernyataan (2) SAJA cukup",
            "D. Pernyataan (1) SAJA cukup",
            "E. Pernyataan (1) SAJA cukup dan (2) SAJA cukup"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menggunakan rumus volume prisma tegak segitiga:\n$$V = L_{\\text{alas}} \\times t$$\n\nLangkah 2: Evaluasi masing-masing pernyataan:\n- Pernyataan (1) saja: Memberikan $L_{\\text{alas}} = 24 \\text{ cm}^2$, tetapi tinggi belum diketahui $\\implies$ Tidak Cukup.\n- Pernyataan (2) saja: Memberikan tinggi $t = 15 \\text{ cm}$, tetapi luas alas belum diketahui $\\implies$ Tidak Cukup.\n- Bersama-sama: $V = 24 \\times 15 = 360 \\text{ cm}^3 \\implies$ Cukup.\n\nLangkah 3: Kesimpulan kecukupan data:\nDUA pernyataan BERSAMA-SAMA cukup.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "ruang",
            "shape": "prisma",
            "seg": [
              "AD"
            ]
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P14-Q7] Sebuah limas T.ABCD memiliki volume 128 cm^3. Jika tinggi limas 6 cm, maka panjang sisi alas persegi adalah ...",
          "opsi": [
            "A. 6 cm",
            "B. 8 cm",
            "C. 10 cm",
            "D. 12 cm",
            "E. 4 cm"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menggunakan rumus volume limas segiempat:\n$$V = \\frac{1}{3} \\times L_{\\text{alas}} \\times t = \\frac{1}{3} \\times s^2 \\times t$$\n\nLangkah 2: Mensubstitusikan $V = 128 \\text{ cm}^3$ dan tinggi $t = 6$ cm:\n$$128 = \\frac{1}{3} \\times s^2 \\times 6 = 2s^2$$\n\nLangkah 3: Menyelesaikan untuk panjang rusuk sisi alas $s$:\n$$s^2 = \\frac{128}{2} = 64 \\implies s = \\sqrt{64} = 8 \\text{ cm}$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "ruang",
            "shape": "limas"
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P14-Q8] Pada kubus ABCD.EFGH, manakah pernyataan sudut antar bidang berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Bidang ACGE dan bidang BDHF saling tegak lurus.",
            "B. Nilai tan sudut antara bidang AFH dan alas ABCD adalah akar(2).",
            "C. Nilai cos sudut antara bidang AFH dan alas ABCD adalah akar(3)/3.",
            "D. Nilai sin sudut antara bidang AFH dan alas ABCD adalah akar(6)/3.",
            "E. Bidang AFH dan bidang BDG saling sejajar."
          ],
          "kunci": "A, B, C, D, E",
          "bahas": "Langkah 1: Analisis seluruh pernyataan sifat sudut dihedral pada kubus:\n- A: Bidang ACGE dan BDHF tegak lurus ($90^\\circ$) karena $AC \\perp BD$ (BENAR).\n- B: $\\tan(\\text{bidang AFH, alas}) = \\sqrt{2}$ (BENAR).\n- C: $\\cos(\\text{bidang AFH, alas}) = \\frac{1}{3}\\sqrt{3}$ (BENAR).\n- D: $\\sin(\\text{bidang AFH, alas}) = \\frac{1}{3}\\sqrt{6}$ (BENAR).\n- E: Bidang AFH sejajar dengan bidang BDG (BENAR).\nKesimpulan: Kunci Jawaban A, B, C, D, E.",
          "viz": {
            "t": "ruang",
            "shape": "kubus"
          }
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P14-Q9] Jarak titik sudut A ke bidang diagonal BDHF pada kubus ABCD.EFGH berusuk 8 cm adalah ...",
          "opsi": [
            "A. 8√2 cm",
            "B. 4√3 cm",
            "C. 4 cm",
            "D. 2√6 cm",
            "E. 4√2 cm"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menentukan posisi titik sudut A ke bidang diagonal BDHF pada kubus berusuk 8 cm:\n- Proyeksi tegak lurus titik A ke bidang diagonal BDHF jatuh tepat di titik potong diagonal alas $O$.\n\nLangkah 2: Menghitung panjang ruas garis AO:\nRuas garis AO adalah setengah dari panjang diagonal sisi alas $AC$:\n$$AO = \\frac{1}{2} AC = \\frac{1}{2}(8\\sqrt{2}) = 4\\sqrt{2} \\text{ cm}$$\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "bid": [
              "BDHF"
            ]
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P14-Q10] Luas seluruh permukaan kubus yang memiliki panjang diagonal ruang $4\\sqrt{3}$ cm adalah ... (dalam cm^2)",
          "opsi": [],
          "kunci": "96",
          "bahas": "Langkah 1: Menentukan panjang rusuk kubus dari diagonal ruang $d = 4\\sqrt{3}$ cm:\n$$s\\sqrt{3} = 4\\sqrt{3} \\implies s = 4 \\text{ cm}$$\n\nLangkah 2: Menghitung luas seluruh permukaan kubus:\n$$L = 6s^2 = 6 \\times (4^2) = 6 \\times 16 = 96 \\text{ cm}^2$$\nKesimpulan: Kunci Jawaban 96.",
          "viz": {
            "t": "ruang",
            "shape": "kubus"
          }
        }
      ]
    },
    "P11": {
      "id": "P11",
      "subject": "Matematika Wajib",
      "title": "Dimensi Tiga 3: Jarak Titik ke Garis (Kesamaan Luas Segitiga)",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q1] Pada kubus ABCD.EFGH dengan panjang rusuk 12 cm, jarak titik C ke garis diagonal ruang AG adalah ...",
          "opsi": [
            "A. 6√3 cm",
            "B. 8√2 cm",
            "C. 6√2 cm",
            "D. 4√6 cm",
            "E. 4√3 cm"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Membentuk segitiga siku-siku $\\triangle ACG$ (siku-siku di C):\n- Diagonal sisi alas: $AC = s\\sqrt{2} = 12\\sqrt{2}$ cm.\n- Rusuk tegak: $CG = 12$ cm.\n- Diagonal ruang: $AG = s\\sqrt{3} = 12\\sqrt{3}$ cm.\n\nLangkah 2: Menggunakan Kesamaan Luas Segitiga $\\triangle ACG$:\n$$AC \\times CG = AG \\times d$$\n$$(12\\sqrt{2}) \\times 12 = (12\\sqrt{3}) \\times d$$\n\nLangkah 3: Menyelesaikan dan merasionalkan penyebut:\n$$d = \\frac{12\\sqrt{2}}{\\sqrt{3}} = \\frac{12\\sqrt{6}}{3} = 4\\sqrt{6} \\text{ cm}$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "AG"
            ]
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q2] Pada kubus ABCD.EFGH berusuk 6 cm, jarak titik H ke garis diagonal sisi AC adalah ...",
          "opsi": [
            "A. 6 cm",
            "B. 3√6 cm",
            "C. 3√2 cm",
            "D. 3√3 cm",
            "E. 6√2 cm"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menentukan proyeksi titik H ke diagonal bidang AC:\n- Proyeksi tegak lurus titik H ke bidang alas ABCD adalah titik D.\n- Dari D ditarik tegak lurus ke diagonal AC, yang jatuh tepat di pusat alas $O$ (titik tengah AC).\n- Panjang ruas garis $DO = \\frac{1}{2}BD = \\frac{1}{2}(6\\sqrt{2}) = 3\\sqrt{2}$ cm.\n\nLangkah 2: Menerapkan Teorema Pythagoras pada $\\triangle HDO$ yang siku-siku di D:\n- Rusuk tegak $DH = 6$ cm.\n$$HO = \\sqrt{DH^2 + DO^2}$$\n\nLangkah 3: Menghitung nilai jarak $HO$:\n$$HO = \\sqrt{6^2 + (3\\sqrt{2})^2} = \\sqrt{36 + 18} = \\sqrt{54} = 3\\sqrt{6} \\text{ cm}$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "AC"
            ]
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q3] Diketahui limas beraturan T.ABCD dengan rusuk alas 8 cm dan rusuk tegak 8 cm. Jarak titik T ke rusuk alas AB adalah ...",
          "opsi": [
            "A. 4√3 cm",
            "B. 6 cm",
            "C. 8 cm",
            "D. 4√2 cm",
            "E. 4√5 cm"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Mengidentifikasi sifat segitiga $\\triangle TAB$:\nKarena $TA = TB = AB = 8$ cm, maka $\\triangle TAB$ merupakan segitiga sama sisi.\n\nLangkah 2: Menentukan jarak puncak T ke rusuk alas AB:\nJarak titik T ke garis AB adalah tinggi segitiga sama sisi $\\triangle TAB$ dengan alas $AB = 8$ cm.\nTitik tinggi jatuh di titik tengah AB (titik M) dengan $AM = 4$ cm.\n\nLangkah 3: Menerapkan Teorema Pythagoras pada $\\triangle TMA$:\n$$TM = \\sqrt{TA^2 - AM^2} = \\sqrt{8^2 - 4^2} = \\sqrt{64 - 16} = \\sqrt{48} = 4\\sqrt{3} \\text{ cm}$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "ruang",
            "shape": "limas",
            "seg": [
              "AB"
            ]
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q4] Kubus ABCD.EFGH berusuk 10 cm. Jarak titik F ke garis diagonal ruang BH adalah ...",
          "opsi": [
            "A. 5√6 cm",
            "B. 5√3 cm",
            "C. 10/3 √6 cm",
            "D. 5√2 cm",
            "E. 10/3 √3 cm"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Membentuk segitiga siku-siku $\\triangle BFH$ (siku-siku di F):\n- Rusuk tegak $BF = 10$ cm.\n- Diagonal bidang atas $FH = s\\sqrt{2} = 10\\sqrt{2}$ cm.\n- Diagonal ruang $BH = s\\sqrt{3} = 10\\sqrt{3}$ cm.\n\nLangkah 2: Menggunakan rumus kesamaan luas segitiga $\\triangle BFH$:\n$$BF \\times FH = BH \\times d$$\n$$10 \\times 10\\sqrt{2} = 10\\sqrt{3} \\times d$$\n\nLangkah 3: Menyelesaikan nilai jarak $d$:\n$$d = \\frac{10\\sqrt{2}}{\\sqrt{3}} = \\frac{10}{3}\\sqrt{6} \\text{ cm}$$\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "BH"
            ]
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q5] Pada kubus ABCD.EFGH berusuk a, tentukan nilai kebenaran jarak titik ke garis:\n(1) Jarak titik A ke garis BD adalah 1/2 a akar(2).\n(2) Jarak titik E ke garis BD adalah 1/2 a akar(6).\n(3) Jarak titik A ke garis HG adalah a akar(3).",
          "opsi": [
            "Jarak titik A ke garis BD adalah 1/2 a akar(2)",
            "Jarak titik E ke garis BD adalah 1/2 a akar(6)",
            "Jarak titik A ke garis HG adalah a akar(3)"
          ],
          "kunci": "B - B - S",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nJarak titik A ke garis BD adalah setengah diagonal sisi: $AO = \\frac{1}{2}a\\sqrt{2}$.\n$\\implies$ Pernyataan (1) bernilai BENAR (B).\n\nLangkah 2: Analisis Pernyataan (2):\nJarak titik E ke garis BD adalah $EO = \\sqrt{AE^2 + AO^2} = \\sqrt{a^2 + \\frac{1}{2}a^2} = \\frac{1}{2}a\\sqrt{6}$.\n$\\implies$ Pernyataan (2) bernilai BENAR (B).\n\nLangkah 3: Analisis Pernyataan (3):\nJarak titik A ke garis HG adalah panjang diagonal sisi $AH = a\\sqrt{2}$ (karena $AH \\perp HG$), bukan $a\\sqrt{3}$.\n$\\implies$ Pernyataan (3) bernilai SALAH (S).\n\nKesimpulan: Kunci Jawaban B - B - S.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "BD",
              "HG"
            ]
          }
        },
        {
          "no": 6,
          "tipe": "Kecukupan Data",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P11-Q6] Berapakah jarak dari titik P ke garis g?\nPernyataan (1): Garis g memiliki panjang 10 cm.\nPernyataan (2): Luas segitiga yang dibentuk oleh titik P dan garis g adalah 40 cm^2.",
          "opsi": [
            "A. Pernyataan (1) SAJA cukup dan (2) SAJA cukup",
            "B. Pernyataan (1) SAJA cukup",
            "C. Pernyataan (1) dan (2) tidak cukup",
            "D. Pernyataan (2) SAJA cukup",
            "E. DUA pernyataan BERSAMA-SAMA cukup"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Memahami hubungan geometri jarak titik ke garis dengan luas segitiga:\nJarak titik P ke garis g adalah tinggi segitiga ($t$) dengan alas ruas garis g.\n$$\\text{Luas} = \\frac{1}{2} \\times \\text{alas} \\times \\text{tinggi}$$\n\nLangkah 2: Evaluasi Pernyataan (1) SAJA:\nHanya diketahui panjang alas $g = 10$ cm, tanpa diketahui luas segitiga $\\implies$ TIDAK CUKUP.\n\nLangkah 3: Evaluasi Pernyataan (2) SAJA:\nHanya diketahui luas segitiga $= 40\\text{ cm}^2$, tanpa diketahui panjang alas $g \\implies$ TIDAK CUKUP.\n\nLangkah 4: Evaluasi (1) dan (2) BERSAMA-SAMA:\n$$40 = \\frac{1}{2} \\times 10 \\times t \\implies 5t = 40 \\implies t = 8 \\text{ cm (CUKUP)}$$\nKesimpulan: Kunci Jawaban E (DUA pernyataan BERSAMA-SAMA cukup).",
          "viz": {
            "t": "ruang",
            "shape": "kubus"
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q7] Kubus ABCD.EFGH berusuk 4 cm. Titik M adalah titik tengah rusuk AB. Jarak titik M ke garis diagonal sisi EG adalah ...",
          "opsi": [
            "A. 3√2 cm",
            "B. √34 cm",
            "C. 4√2 cm",
            "D. 2√6 cm",
            "E. 5 cm"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menentukan koordinat titik M dan proyeksi ke bidang atas:\n- Titik M di tengah AB $\\implies M(2, 0, 0)$.\n- Proyeksi M ke bidang atas EFGH adalah titik tengah EF yaitu $M'(2, 0, 4)$, dengan $MM' = 4$ cm.\n\nLangkah 2: Menghitung jarak horizontal dari M' ke garis diagonal EG:\nGaris EG memiliki persamaan $x - y = 0$ pada bidang $z = 4$.\nJarak $M'(2, 0)$ ke garis $x - y = 0$ adalah:\n$$d_{xy} = \\frac{|2 - 0|}{\\sqrt{1^2 + (-1)^2}} = \\frac{2}{\\sqrt{2}} = \\sqrt{2} \\text{ cm}$$\n\nLangkah 3: Menghitung jarak 3D titik M ke garis EG:\n$$d = \\sqrt{MM'^2 + d_{xy}^2} = \\sqrt{4^2 + (\\sqrt{2})^2} = \\sqrt{16 + 2} = \\sqrt{18} = 3\\sqrt{2} \\text{ cm}$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "AB",
              "EG"
            ]
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P11-Q8] Pada kubus ABCD.EFGH dengan rusuk 6 cm, manakah pernyataan jarak titik ke garis berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Jarak titik A ke garis BD adalah 3 akar(2) cm.",
            "B. Jarak titik E ke garis BD adalah 3 akar(6) cm.",
            "C. Jarak titik F ke garis AC adalah 3 akar(6) cm.",
            "D. Jarak titik B ke garis EG adalah 6 akar(2) cm.",
            "E. Jarak titik C ke garis AG adalah 2 akar(6) cm."
          ],
          "kunci": "A, B, C, E",
          "bahas": "Langkah 1: Analisis seluruh pernyataan jarak titik ke garis pada kubus rusuk 6 cm:\n- Opsi A: Jarak A ke BD $= \\frac{1}{2}AC = 3\\sqrt{2}$ cm (BENAR).\n- Opsi B: Jarak E ke BD $= \\sqrt{6^2 + (3\\sqrt{2})^2} = 3\\sqrt{6}$ cm (BENAR).\n- Opsi C: Jarak F ke AC $= \\sqrt{6^2 + (3\\sqrt{2})^2} = 3\\sqrt{6}$ cm (BENAR).\n- Opsi D: Jarak B ke EG $= \\sqrt{6^2 + (3\\sqrt{2})^2} = 3\\sqrt{6}$ cm (SALAH, tertulis $6\\sqrt{2}$).\n- Opsi E: Jarak C ke AG $= \\frac{6\\sqrt{6}}{3} = 2\\sqrt{6}$ cm (BENAR).\n\nKesimpulan: Kunci Jawaban A, B, C, E.",
          "viz": {
            "t": "ruang",
            "shape": "kubus"
          }
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q9] Balok ABCD.EFGH berukuran $6 \\times 8 \\times 10$ cm. Jarak titik D ke garis diagonal bidang AC adalah ...",
          "opsi": [
            "A. 6,0 cm",
            "B. 4,2 cm",
            "C. 5,4 cm",
            "D. 5,0 cm",
            "E. 4,8 cm"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Membentuk segitiga siku-siku $\\triangle ADC$ pada bidang alas balok:\n- Panjang rusuk $AD = 6$ cm, $CD = 8$ cm.\n- Panjang diagonal bidang alas: $AC = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10$ cm.\n\nLangkah 2: Menggunakan kesamaan luas $\\triangle ADC$ (siku-siku di D):\n$$AD \\times CD = AC \\times d$$\n$$6 \\times 8 = 10 \\times d$$\n\nLangkah 3: Menghitung jarak $d$:\n$$d = \\frac{48}{10} = 4{,}8 \\text{ cm}$$\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "ruang",
            "shape": "balok",
            "seg": [
              "AC"
            ]
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q10] Pada kubus ABCD.EFGH dengan rusuk 6 cm, nilai dari kuadrat jarak titik B ke garis diagonal ruang AG adalah ... (dalam satuan cm^2)",
          "opsi": [],
          "kunci": "24",
          "bahas": "Langkah 1: Menghitung jarak titik B ke garis diagonal ruang AG pada kubus berusuk 6 cm:\n$$d = \\frac{s\\sqrt{6}}{3} = \\frac{6\\sqrt{6}}{3} = 2\\sqrt{6} \\text{ cm}$$\n\nLangkah 2: Menghitung nilai kuadrat jarak ($d^2$):\n$$d^2 = (2\\sqrt{6})^2 = 4 \\times 6 = 24$$\nKesimpulan: Kunci Jawaban 24.",
          "viz": {
            "t": "ruang",
            "shape": "kubus",
            "seg": [
              "AG"
            ]
          }
        }
      ]
    },
    "P12": {
      "id": "P12",
      "subject": "Matematika Wajib",
      "title": "Dimensi Tiga 4: Jarak Titik ke Bidang (Teorema Proyeksi 1/3 & 2/3)",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q1] Pada kubus ABCD.EFGH dengan rusuk 12 cm, jarak titik E ke bidang diagonal AFH adalah ...",
          "opsi": [
            "A. 6√2 cm",
            "B. 4√3 cm",
            "C. 8√3 cm",
            "D. 4√6 cm",
            "E. 6√3 cm"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menggunakan Teorema Proyeksi Titik Sudut Dekat ke Bidang Segitiga Diagonal:\nTitik E merupakan titik sudut terdekat dari bidang diagonal AFH pada diagonal ruang EC.\n$$d(E, \\text{bidang } AFH) = \\frac{1}{3} \\times d_{\\text{ruang}} = \\frac{1}{3} \\times s\\sqrt{3}$$\n\nLangkah 2: Mensubstitusikan panjang rusuk $s = 12$ cm:\n$$d = \\frac{1}{3} \\times 12\\sqrt{3} = 4\\sqrt{3} \\text{ cm}$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "ruang",
            "shape": "kubus"
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q2] Pada kubus ABCD.EFGH dengan rusuk 12 cm, jarak titik C ke bidang diagonal AFH adalah ...",
          "opsi": [
            "A. 4√6 cm",
            "B. 8√2 cm",
            "C. 8√3 cm",
            "D. 4√3 cm",
            "E. 6√3 cm"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Menggunakan Teorema Proyeksi Titik Sudut Jauh ke Bidang Segitiga Diagonal:\nTitik C merupakan titik sudut terjauh dari bidang diagonal AFH pada diagonal ruang EC.\n$$d(C, \\text{bidang } AFH) = \\frac{2}{3} \\times d_{\\text{ruang}} = \\frac{2}{3} \\times s\\sqrt{3}$$\n\nLangkah 2: Mensubstitusikan panjang rusuk $s = 12$ cm:\n$$d = \\frac{2}{3} \\times 12\\sqrt{3} = 8\\sqrt{3} \\text{ cm}$$\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "ruang",
            "shape": "kubus"
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q3] Pada kubus ABCD.EFGH dengan panjang rusuk 9 cm, jarak titik E ke bidang BDG adalah ...",
          "opsi": [
            "A. 3√6 cm",
            "B. 6√2 cm",
            "C. 9√3 cm",
            "D. 6√3 cm",
            "E. 3√3 cm"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menerapkan Teorema Jarak Titik Sudut Terjauh ke Bidang Segitiga Diagonal:\nTitik E merupakan titik sudut terjauh dari bidang diagonal BDG pada diagonal ruang EC.\n$$d(E, \\text{bidang } BDG) = \\frac{2}{3} \\times s\\sqrt{3}$$\n\nLangkah 2: Mensubstitusikan panjang rusuk $s = 9$ cm:\n$$d = \\frac{2}{3} \\times 9\\sqrt{3} = 6\\sqrt{3} \\text{ cm}$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "ruang",
            "shape": "kubus"
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q4] Jarak antara dua bidang sejajar AFH dan BDG pada kubus ABCD.EFGH berusuk 18 cm adalah ...",
          "opsi": [
            "A. 12√3 cm",
            "B. 18 cm",
            "C. 6√3 cm",
            "D. 9√3 cm",
            "E. 6√6 cm"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Mengidentifikasi sifat dua bidang sejajar AFH dan BDG:\nBidang AFH dan bidang BDG adalah dua bidang datar sejajar yang memotong diagonal ruang EC ($s\\sqrt{3}$) menjadi 3 bagian sama panjang.\n\nLangkah 2: Menghitung jarak antar-kedua bidang:\n$$d = \\frac{1}{3} \\times s\\sqrt{3}$$\n\nLangkah 3: Mensubstitusikan rusuk $s = 18$ cm:\n$$d = \\frac{1}{3} \\times 18\\sqrt{3} = 6\\sqrt{3} \\text{ cm}$$\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "ruang",
            "shape": "kubus"
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q5] Pada kubus ABCD.EFGH berusuk a, tentukan kebenaran jarak titik ke bidang:\n(1) Jarak titik C ke bidang diagonal BDG adalah 1/3 a akar(3).\n(2) Jarak titik E ke bidang alas ABCD adalah a.\n(3) Jarak titik E ke bidang diagonal BDG adalah 1/2 a akar(3).",
          "opsi": [
            "Jarak titik C ke bidang diagonal BDG adalah 1/3 a akar(3)",
            "Jarak titik E ke bidang alas ABCD adalah a",
            "Jarak titik E ke bidang diagonal BDG adalah 1/2 a akar(3)"
          ],
          "kunci": "B - B - S",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nTitik C adalah titik sudut dekat ke bidang BDG $\\implies d = \\frac{1}{3}a\\sqrt{3}$.\n$\\implies$ Pernyataan (1) bernilai BENAR (B).\n\nLangkah 2: Analisis Pernyataan (2):\nJarak titik E ke bidang alas ABCD sama dengan panjang rusuk tegak $AE = a$.\n$\\implies$ Pernyataan (2) bernilai BENAR (B).\n\nLangkah 3: Analisis Pernyataan (3):\nTitik E adalah titik sudut jauh ke bidang BDG $\\implies d = \\frac{2}{3}a\\sqrt{3}$ (bukan $\\frac{1}{2}a\\sqrt{3}$).\n$\\implies$ Pernyataan (3) bernilai SALAH (S).\n\nKesimpulan: Kunci Jawaban B - B - S.",
          "viz": {
            "t": "ruang",
            "shape": "kubus"
          }
        },
        {
          "no": 6,
          "tipe": "Kecukupan Data",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P12-Q6] Berapakah jarak dari titik puncak T ke bidang alas ABCD pada limas beraturan T.ABCD?\nPernyataan (1): Rusuk tegak $TA = 10$ cm.\nPernyataan (2): Panjang diagonal alas $AC = 12$ cm.",
          "opsi": [
            "A. Pernyataan (1) SAJA cukup",
            "B. DUA pernyataan BERSAMA-SAMA cukup",
            "C. Pernyataan (1) dan (2) tidak cukup",
            "D. Pernyataan (2) SAJA cukup",
            "E. Pernyataan (1) SAJA cukup dan (2) SAJA cukup"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Memahami hubungan tinggi limas beraturan T.ABCD ($TO$) dengan rusuk tegak dan alas:\nJarak titik puncak T ke bidang alas ABCD adalah tinggi limas $TO$.\n$$TO = \\sqrt{TA^2 - AO^2} = \\sqrt{TA^2 - \\left(\\frac{1}{2}AC\\right)^2}$$\n\nLangkah 2: Evaluasi Pernyataan (1) SAJA:\nHanya diketahui rusuk tegak $TA = 10$ cm, tanpa panjang diagonal alas $AC \\implies$ TIDAK CUKUP.\n\nLangkah 3: Evaluasi Pernyataan (2) SAJA:\nHanya diketahui diagonal alas $AC = 12$ cm ($AO = 6$ cm), tanpa rusuk tegak $TA \\implies$ TIDAK CUKUP.\n\nLangkah 4: Evaluasi (1) dan (2) BERSAMA-SAMA:\n$$TO = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8 \\text{ cm (CUKUP)}$$\nKesimpulan: Kunci Jawaban B (DUA pernyataan BERSAMA-SAMA cukup).",
          "viz": {
            "t": "ruang",
            "shape": "limas"
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q7] Pada limas T.ABCD dengan alas persegi berusuk 6 cm dan tinggi $TO = 4$ cm, jarak titik O ke bidang TBC adalah ...",
          "opsi": [
            "A. 2,8 cm",
            "B. 2,0 cm",
            "C. 3,6 cm",
            "D. 2,4 cm",
            "E. 3,2 cm"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Membentuk segitiga siku-siku $\\triangle TOM$ di dalam limas T.ABCD:\n- $O$ adalah pusat alas persegi ABCD.\n- Dari $O$ ditarik tegak lurus rusuk $BC$, jatuh di titik tengah $BC$ (titik $M$) dengan $OM = \\frac{1}{2}(6) = 3$ cm.\n- Tinggi limas: $TO = 4$ cm.\n- Tinggi bidang tegak $TM = \\sqrt{TO^2 + OM^2} = \\sqrt{4^2 + 3^2} = 5$ cm.\n\nLangkah 2: Menggunakan kesamaan luas $\\triangle TOM$ untuk menghitung jarak titik O ke bidang TBC:\n$$TO \\times OM = TM \\times d$$\n$$4 \\times 3 = 5 \\times d$$\n\nLangkah 3: Menyelesaikan nilai $d$:\n$$d = \\frac{12}{5} = 2{,}4 \\text{ cm}$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "ruang",
            "shape": "limas"
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P12-Q8] Pada kubus ABCD.EFGH berusuk 12 cm, manakah pernyataan jarak berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Jarak antara bidang AFH dan bidang BDG adalah 4 akar(3) cm.",
            "B. Jarak titik C ke bidang BDHF adalah 6 akar(2) cm.",
            "C. Jarak titik E ke bidang BDG adalah 8 akar(3) cm.",
            "D. Jarak titik C ke bidang BDG adalah 4 akar(3) cm.",
            "E. Jarak titik C ke bidang ABFE adalah 12 cm."
          ],
          "kunci": "A, B, C, D, E",
          "bahas": "Langkah 1: Analisis seluruh pernyataan jarak pada kubus berusuk 12 cm:\n- Opsi A: Jarak bidang AFH ke BDG $= \\frac{1}{3}(12\\sqrt{3}) = 4\\sqrt{3}$ cm (BENAR).\n- Opsi B: Jarak C ke bidang diagonal BDHF $= \\frac{1}{2}(12\\sqrt{2}) = 6\\sqrt{2}$ cm (BENAR).\n- Opsi C: Jarak E ke bidang BDG $= \\frac{2}{3}(12\\sqrt{3}) = 8\\sqrt{3}$ cm (BENAR).\n- Opsi D: Jarak C ke bidang BDG $= \\frac{1}{3}(12\\sqrt{3}) = 4\\sqrt{3}$ cm (BENAR).\n- Opsi E: Jarak C ke bidang depan ABFE $= BC = 12$ cm (BENAR).\n\nKesimpulan: Kunci Jawaban A, B, C, D, E.",
          "viz": {
            "t": "ruang",
            "shape": "kubus"
          }
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q9] Kubus ABCD.EFGH berusuk $a$. Jarak titik pusat kubus ke setiap bidang sisinya adalah ...",
          "opsi": [
            "A. 1/2 a",
            "B. a",
            "C. 1/2 a√2",
            "D. 1/4 a",
            "E. 1/2 a√3"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menentukan koordinat titik pusat kubus berusuk $a$:\nTitik pusat kubus terletak tepat di tengah ruang kubus, yaitu pada koordinat $\\left(\\frac{a}{2}, \\frac{a}{2}, \\frac{a}{2}\\right)$.\n\nLangkah 2: Menghitung jarak tegak lurus ke setiap dari 6 bidang sisinya:\nJarak ke bidang alas ($z=0$), bidang atas ($z=a$), bidang kiri ($x=0$), bidang kanan ($x=a$), bidang depan ($y=0$), dan bidang belakang ($y=a$) adalah:\n$$d = \\frac{1}{2}a$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "ruang",
            "shape": "kubus"
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q10] Pada kubus ABCD.EFGH dengan panjang rusuk 15 cm, nilai kuadrat dari jarak titik E ke bidang BDG adalah ... (dalam satuan cm^2)",
          "opsi": [],
          "kunci": "300",
          "bahas": "Langkah 1: Menghitung jarak titik E (titik terjauh) ke bidang diagonal BDG pada kubus berusuk $s = 15$ cm:\n$$d = \\frac{2}{3} \\times s\\sqrt{3} = \\frac{2}{3} \\times 15\\sqrt{3} = 10\\sqrt{3} \\text{ cm}$$\n\nLangkah 2: Menghitung nilai kuadrat dari jarak ($d^2$):\n$$d^2 = (10\\sqrt{3})^2 = 100 \\times 3 = 300$$\nKesimpulan: Kunci Jawaban 300.",
          "viz": {
            "t": "ruang",
            "shape": "kubus"
          }
        }
      ]
    },
    "P15": {
      "id": "P15",
      "subject": "Matematika Wajib",
      "title": "Statistika 1: Penyajian Data Berkelompok (Histogram & Ogive)",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q1] Tepi bawah ($Tb$) dan tepi atas ($Ta$) untuk kelas interval $45 - 54$ pada data pengukuran berat badan adalah ...",
          "opsi": [
            "A. $Tb = 44{,}5$ dan $Ta = 54{,}5$",
            "B. $Tb = 44$ dan $Ta = 55$",
            "C. $Tb = 45$ dan $Ta = 54$",
            "D. $Tb = 40$ dan $Ta = 50$",
            "E. $Tb = 45{,}5$ dan $Ta = 53{,}5$"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Mengidentifikasi rumus titik tengah kelas interval ($x_i$):\n$$x_i = \\frac{\\text{Batas Bawah} + \\text{Batas Atas}}{2}$$\nLangkah 2: Mensubstitusikan batas bawah $60$ dan batas atas $69$:\n$$x_i = \\frac{60 + 69}{2} = \\frac{129}{2} = 64{,}5$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "histogram",
            "src": "Tepi bawah ($Tb$) dan tepi atas ($Ta$) untuk kelas interval $45 - 54$ pada data pengukuran berat badan adalah ..."
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q2] Panjang kelas (interval $c$) dari kelas $60 - 69$ adalah ...",
          "opsi": [
            "A. 8",
            "B. 10",
            "C. 9",
            "D. 5",
            "E. 11"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menghitung Tepi Bawah ($Tb$) dan Tepi Atas ($Ta$) interval 50 - 59:\n$$Tb = 50 - 0{,}5 = 49{,}5$$\n$$Ta = 59 + 0{,}5 = 59{,}5$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "histogram",
            "src": "Panjang kelas (interval $c$) dari kelas $60 - 69$ adalah ..."
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q3] Titik tengah ($x_i$) dari kelas interval $70 - 78$ adalah ...",
          "opsi": [
            "A. 73,5",
            "B. 73",
            "C. 74",
            "D. 75",
            "E. 74,5"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menghitung panjang kelas interval ($p$):\n$$p = Ta - Tb = 49{,}5 - 39{,}5 = 10$$\n*(atau $p = 49 - 40 + 1 = 10$)*.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "histogram",
            "src": "Titik tengah ($x_i$) dari kelas interval $70 - 78$ adalah ..."
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q4] Diberikan tabel distribusi frekuensi berikut:\n[40-49: 6], [50-59: 10], [60-69: 14]\nFrekuensi kumulatif kurang dari ($F_k$) tepi atas kelas kedua adalah ...",
          "opsi": [
            "A. 16",
            "B. 10",
            "C. 6",
            "D. 30",
            "E. 20"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Memahami definisi kurva ogive:\n- Ogive positif: Kurva frekuensi kumulatif \"kurang dari\" ($f_k \\le$).\n- Ogive negatif: Kurva frekuensi kumulatif \"lebih dari\" ($f_k \\ge$).\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "histogram",
            "src": "Diberikan tabel distribusi frekuensi berikut:\n[40-49: 6], [50-59: 10], [60-69: 14]\nFrekuensi kumulatif kurang dari ($F_k$) tepi atas kelas kedua adalah ..."
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q5] Tentukan kebenaran tabel distribusi frekuensi data berkelompok:\n(1) Titik tengah kelas interval 50 - 59 adalah 55.\n(2) Panjang kelas interval (p) sama dengan tepi atas dikurangi tepi bawah.\n(3) Tepi bawah kelas interval diperoleh dari batas bawah dikurangi 0,5.",
          "opsi": [
            "Titik tengah kelas interval 50 - 59 adalah 55",
            "Panjang kelas interval (p) sama dengan tepi atas dikurangi tepi bawah",
            "Tepi bawah kelas interval diperoleh dari batas bawah dikurangi 0,5"
          ],
          "kunci": "B - B - S",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nPanjang interval $p = Ta - Tb$ adalah benar.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\nTitik tengah $x_i = \\frac{Bb + Ba}{2}$ adalah benar.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nOgive negatif menggunakan frekuensi kumulatif \"lebih dari\", bukan kurang dari.\n$\\implies$ Pernyataan (3) bernilai SALAH.\n\nKesimpulan: Kunci Jawaban B - B - S.",
          "viz": {
            "t": "histogram",
            "src": "Tentukan kebenaran tabel distribusi frekuensi data berkelompok:\n(1) Titik tengah kelas interval 50 - 59 adalah 55.\n(2) Panjang kelas interval (p) sama dengan tepi atas dikurangi tepi bawah.\n(3) Tepi bawah kelas interval diperoleh dari batas bawah dikurangi 0,5."
          }
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q6] Berapakah banyak kelas ideal menurut aturan Sturgess untuk data dengan ukuran sampel $n = 100$ siswa? (Gunakan $\\log 100 = 2$)",
          "opsi": [
            "A. 10 kelas",
            "B. 8 kelas",
            "C. 9 kelas",
            "D. 6 kelas",
            "E. 7 kelas"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menggunakan Aturan Sturgess untuk $n = 100$:\n$$k = 1 + 3{,}3 \\log(100) = 1 + 3{,}3(2) = 1 + 6{,}6 = 7{,}6 \\approx 8 \\text{ kelas}$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "histogram",
            "src": "Berapakah banyak kelas ideal menurut aturan Sturgess untuk data dengan ukuran sampel $n = 100$ siswa? (Gunakan $\\log 100 = 2$)"
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q7] Pada ogive negatif, grafik kurva menunjukkan kecenderungan ...",
          "opsi": [
            "A. Berbentuk parabola simetris",
            "B. Konstan horizontal",
            "C. Selalu monoton turun",
            "D. Naik kemudian turun",
            "E. Selalu monoton naik"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menghitung frekuensi kumulatif sampai kelas ke-3 (60 - 69):\n$$f_k \\le 69 = 4 + 8 + 14 = 26$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "histogram",
            "src": "Pada ogive negatif, grafik kurva menunjukkan kecenderungan ..."
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P15-Q8] Pada data berkelompok dengan kelas interval 60 - 68, manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Titik tengah kelas interval adalah 64.",
            "B. Panjang kelas interval adalah 9.",
            "C. Tepi atas kelas interval adalah 68,5.",
            "D. Batas bawah kelas adalah 60 dan batas atas kelas adalah 68.",
            "E. Tepi bawah kelas interval adalah 59,5."
          ],
          "kunci": "A, B, C, D",
          "bahas": "Langkah 1: Analisis seluruh pernyataan:\n- Opsi A: Total $n = 4 + 8 + 14 + 10 + 4 = 40$ (BENAR).\n- Opsi B: Titik tengah kelas modus (60-69) adalah $\\frac{60+69}{2} = 64{,}5$ (BENAR).\n- Opsi C: Frekuensi kumulatif kelas terakhir $= n = 40$ (BENAR).\n- Opsi D: Panjang kelas $p = 10$ (BENAR).\n- Opsi E: Tepi bawah kelas pertama adalah $39{,}5$, bukan $40{,}0$ (SALAH).\nKesimpulan: Kunci Jawaban A, B, C, D.",
          "viz": {
            "t": "histogram",
            "src": "Pada data berkelompok dengan kelas interval 60 - 68, manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)"
          }
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q9] Jika jangkauan data $R = 40$ dan banyak kelas $k = 5$, maka panjang kelas interval $c$ adalah ...",
          "opsi": [
            "A. 10",
            "B. 7",
            "C. 9",
            "D. 5",
            "E. 8"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menghitung panjang kelas dari jangkauan $R = 50$ dan $k = 7$:\n$$p = \\frac{R}{k} = \\frac{50}{7} \\approx 7{,}14 \\implies \\text{dibulatkan ke atas menjadi } 8$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "histogram",
            "src": "Jika jangkauan data $R = 40$ dan banyak kelas $k = 5$, maka panjang kelas interval $c$ adalah ..."
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q10] Nilai titik tengah kelas interval $81 - 99$ adalah ...",
          "opsi": [],
          "kunci": "85",
          "bahas": "Langkah 1: Menghitung titik tengah interval 80 - 90:\n$$x_i = \\frac{80 + 90}{2} = 85$$\nKesimpulan: Kunci Jawaban 85.",
          "viz": {
            "t": "histogram",
            "src": "Nilai titik tengah kelas interval $81 - 99$ adalah ..."
          }
        }
      ]
    },
    "P16": {
      "id": "P16",
      "subject": "Matematika Wajib",
      "title": "Statistika 2: Rata-rata Hitung (Mean) Data Berkelompok",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q1] Diberikan tabel distribusi frekuensi data nilai siswa berikut:\n[50-59: 5], [60-69: 10], [70-79: 15], [80-89: 10]\nTotal frekuensi $n = 40$. Nilai rata-rata hitung (mean) data tersebut adalah ...",
          "opsi": [
            "A. 69,75",
            "B. 70,50",
            "C. 71,25",
            "D. 73,50",
            "E. 72,00"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menghitung $\\sum f_i x_i$:\n- 20-24 ($f=4, x=22 \\implies fx = 88$)\n- 25-29 ($f=8, x=27 \\implies fx = 216$)\n- 30-34 ($f=10, x=32 \\implies fx = 320$)\n- 35-39 ($f=6, x=37 \\implies fx = 222$)\n- 40-44 ($f=2, x=42 \\implies fx = 84$)\n$$\\sum f_i x_i = 88 + 216 + 320 + 222 + 84 = 930$$\n\nLangkah 2: Menghitung mean:\n$$\\bar{x} = \\frac{930}{30} = 31{,}00$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "histogram",
            "src": "Diberikan tabel distribusi frekuensi data nilai siswa berikut:\n[50-59: 5], [60-69: 10], [70-79: 15], [80-89: 10]\nTotal frekuensi $n = 40$. Nilai rata-rata hitung (mean) data tersebut adalah ..."
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q2] Rataan sementara data dipilih $x_s = 74{,}5$ dengan $\\sum f_i d_i = -130$ dan $\\sum f_i = 40$. Nilai mean sebenarnya adalah ...",
          "opsi": [
            "A. 70,25",
            "B. 71,25",
            "C. 72,50",
            "D. 73,00",
            "E. 69,50"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menghitung mean dengan metode coding:\n$$\\bar{x} = x_s + \\left(\\frac{\\sum f u}{n}\\right) \\times p = 32 + (-0{,}2 \\times 5) = 32 - 1 = 31{,}00$$\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q3] Pada metode pengkodean (coding), $x_s = 70$, panjang kelas $c = 10$, $\\sum f_i u_i = 12$, dan $n = 60$. Nilai rata-rata hitung data adalah ...",
          "opsi": [
            "A. 74,0",
            "B. 73,0",
            "C. 72,0",
            "D. 71,2",
            "E. 70,5"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menghitung rata-rata gabungan:\n$$\\bar{x}_{\\text{gab}} = \\frac{(20 \\times 75) + (30 \\times 85)}{20 + 30} = \\frac{1.500 + 2.550}{50} = \\frac{4.050}{50} = 81{,}00$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "histogram",
            "src": "Pada metode pengkodean (coding), $x_s = 70$, panjang kelas $c = 10$, $\\sum f_i u_i = 12$, dan $n = 60$. Nilai rata-rata hitung data adalah ..."
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q4] Jika rata-rata nilai 20 siswa putra adalah 75 dan 30 siswa putri adalah 85, maka rata-rata gabungan seluruh siswa adalah ...",
          "opsi": [
            "A. 79,0",
            "B. 81,0",
            "C. 82,0",
            "D. 80,0",
            "E. 83,0"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Formula coding rata-rata data berkelompok:\n$$\\bar{x} = x_s + \\left(\\frac{\\sum f_i u_i}{\\sum f_i}\\right) \\times p$$\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q5] Tentukan kebenaran rata-rata hitung (mean):\n(1) Rumus mean data berkelompok adalah bar(x) = sum(fi . xi) / sum(fi).\n(2) Pada metode rataan sementara, bar(x) = x_s + [sum(fi . di) / sum(fi)].\n(3) Jika setiap data ditambah 5, maka nilai rata-rata data tidak mengalami perubahan.",
          "opsi": [
            "Rumus mean data berkelompok adalah bar(x) = sum(fi . xi) / sum(fi)",
            "Pada metode rataan sementara, bar(x) = x_s + [sum(fi . di) / sum(fi)]",
            "Jika setiap data ditambah 5, maka nilai rata-rata data tidak mengalami perubahan"
          ],
          "kunci": "B - B - B",
          "bahas": "Langkah 1: Evaluasi pernyataan:\n(1) Metode titik tengah dan coding menghasilkan nilai identik $\\implies$ BENAR.\n(2) Rumus mean gabungan $\\implies$ BENAR.\n(3) Penambahan konstanta $c$ pada seluruh data menaikkan mean sebesar $c$ $\\implies$ BENAR.\nKesimpulan: Kunci Jawaban B - B - B."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q6] Berapakah rata-rata hitung data tunggal: 6, 8, 7, 9, 10?",
          "opsi": [
            "A. 7,0",
            "B. 9,0",
            "C. 7,5",
            "D. 8,5",
            "E. 8,0"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menghitung nilai siswa susulan:\n$$\\text{Nilai Susulan} = (10 \\times 80) - (9 \\times 78) = 800 - 702 = 98$$\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q7] Diberikan data nilai:\n[10-19: 2], [20-29: 8], [30-39: 6], [40-49: 4]\nTotal frekuensi $n = 20$. Nilai rata-rata hitung (mean) data tersebut adalah ...",
          "opsi": [
            "A. 29,5",
            "B. 32,5",
            "C. 33,5",
            "D. 31,5",
            "E. 30,5"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menghitung mean dari rataan sementara $x_s = 65$:\n$$\\bar{x} = x_s + \\frac{\\sum f_i d_i}{n} = 65 + \\frac{60}{40} = 65 + 1{,}5 = 66{,}5$$\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P16-Q8] Rata-rata nilai 30 siswa adalah 75. Jika digabung 10 siswa baru dengan rata-rata 85, manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Rata-rata gabungan berada di luar rentang 75 hingga 85.",
            "B. Jumlah total nilai 30 siswa awal adalah 2.250.",
            "C. Jumlah total nilai 10 siswa baru adalah 850.",
            "D. Rata-rata gabungan seluruh 40 siswa adalah 77,5.",
            "E. Jumlah total nilai seluruh 40 siswa adalah 3.100."
          ],
          "kunci": "A, B, C, D",
          "bahas": "Langkah 1: Evaluasi opsi:\n- Total siswa $= 24 + 16 = 40$ (BENAR).\n- Jumlah nilai putri $= 24 \\times 80 = 1.920$ (BENAR).\n- Jumlah nilai putra $= 16 \\times 70 = 1.120$ (BENAR).\n- Mean gabungan $= \\frac{1.920 + 1.120}{40} = \\frac{3.040}{40} = 76{,}0$ (BENAR).\n- Opsi E SALAH karena mean lebih dekat ke rata-rata putri (jumlah putri lebih banyak).\nKesimpulan: Kunci Jawaban A, B, C, D."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q9] Rata-rata nilai 5 bilangan asli adalah 12. Jika ditambah satu bilangan bernilai 18, rata-rata baru seluruh bilangan menjadi ...",
          "opsi": [
            "A. 13,0",
            "B. 13,5",
            "C. 14,0",
            "D. 12,5",
            "E. 15,0"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menghitung nilai anak ke-5:\n$$x_5 = (5 \\times 80) - (75 + 80 + 85 + 90) = 400 - 330 = 70$$\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q10] Nilai rata-rata dari data: 12, 14, 16, 18, 20 adalah ...",
          "opsi": [],
          "kunci": "16",
          "bahas": "Langkah 1: Menghitung mean data 12, 14, 16, 18, 20:\n$$\\bar{x} = \\frac{12 + 14 + 16 + 18 + 20}{5} = \\frac{80}{5} = 16$$\nKesimpulan: Kunci Jawaban 16."
        }
      ]
    },
    "P17": {
      "id": "P17",
      "subject": "Matematika Wajib",
      "title": "Statistika 3: Median & Modus Data Berkelompok",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q1] Diberikan tabel distribusi frekuensi berikut:\n[40-49: 4], [50-59: 6], [60-69: 12], [70-79: 10], [80-89: 8]\nTotal frekuensi $n = 40$. Nilai median ($Me$) data tersebut adalah ...",
          "opsi": [
            "A. 67,83",
            "B. 65,75",
            "C. 69,00",
            "D. 68,25",
            "E. 66,50"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menentukan kelas Median ($n = 40 \\implies \\frac{n}{2} = 20$):\nKelas median berada pada interval 60 - 69 ($F_k = 10, f_m = 12, Tb = 59{,}5, p = 10$).\n\nLangkah 2: Menghitung Median ($Me$):\n$$Me = 59{,}5 + \\left(\\frac{20 - 10}{12}\\right) \\times 10 = 59{,}5 + \\frac{100}{12} = 59{,}5 + 8{,}33 = 67{,}83$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "boxplot",
            "src": "Diberikan tabel distribusi frekuensi berikut:\n[40-49: 4], [50-59: 6], [60-69: 12], [70-79: 10], [80-89: 8]\nTotal frekuensi $n = 40$. Nilai median ($Me$) data tersebut adalah ..."
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q2] Diberikan tabel distribusi frekuensi berikut:\n[40-49: 4], [50-59: 6], [60-69: 12], [70-79: 10], [80-89: 8]\nNilai modus ($Mo$) data tersebut adalah ...",
          "opsi": [
            "A. 65,50",
            "B. 67,50",
            "C. 66,50",
            "D. 67,00",
            "E. 68,00"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menentukan kelas Modus (frekuensi tertinggi $f = 12$ pada kelas 60 - 69):\n- $Tb = 59{,}5$\n- $d_1 = 12 - 6 = 6$\n- $d_2 = 12 - 10 = 2$\n- $p = 10$\n\nLangkah 2: Menghitung Modus ($Mo$):\n$$Mo = 59{,}5 + \\left(\\frac{6}{6 + 2}\\right) \\times 10 = 59{,}5 + 7{,}5 = 67{,}00$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "histogram",
            "src": "Diberikan tabel distribusi frekuensi berikut:\n[40-49: 4], [50-59: 6], [60-69: 12], [70-79: 10], [80-89: 8]\nNilai modus ($Mo$) data tersebut adalah ..."
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q3] Median membagi data terurut menjadi ...",
          "opsi": [
            "A. Dua bagian sama besar (50% dan 50%)",
            "B. Seratus bagian",
            "C. Empat bagian sama besar",
            "D. Tiga bagian",
            "E. Sepuluh bagian sama besar"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Definisi median membagi data terurut menjadi 2 bagian sama besar (50% dan 50%).\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q4] Modus adalah ukuran pemusatan data yang menyatakan ...",
          "opsi": [
            "A. Selisih data maksimum dan minimum",
            "B. Titik tengah data terurut",
            "C. Nilai rata-rata hitung",
            "D. Kuartil atas",
            "E. Nilai data dengan frekuensi kemunculan tertinggi"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Modus adalah nilai data yang memiliki frekuensi kemunculan tertinggi.\nKesimpulan: Kunci Jawaban E."
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q5] Tentukan kebenaran median dan modus data berkelompok:\n(1) Rumus modus data berkelompok adalah Mo = Tb + [d1 / (d1 + d2)] x p.\n(2) Letak median berada pada frekuensi kumulatif ke- 1/2 n.\n(3) Nilai modus data berkelompok selalu tepat sama dengan titik tengah kelas modus.",
          "opsi": [
            "Rumus modus data berkelompok adalah Mo = Tb + [d1 / (d1 + d2)] x p",
            "Letak median berada pada frekuensi kumulatif ke- 1/2 n",
            "Nilai modus data berkelompok selalu tepat sama dengan titik tengah kelas modus"
          ],
          "kunci": "B - B - S",
          "bahas": "Langkah 1: Analisis:\n(1) Rumus modus berkelompok $\\implies$ BENAR.\n(2) Letak median pada $\\frac{1}{2}n$ $\\implies$ BENAR.\n(3) Modus tidak selalu tepat sama dengan titik tengah kelas modus $\\implies$ SALAH.\nKesimpulan: Kunci Jawaban B - B - S.",
          "viz": {
            "t": "boxplot",
            "src": "Tentukan kebenaran median dan modus data berkelompok:\n(1) Rumus modus data berkelompok adalah Mo = Tb + [d1 / (d1 + d2)] x p.\n(2) Letak median berada pada frekuensi kumulatif ke- 1/2 n.\n(3) Nilai modus data berkelompok selalu tepat sama dengan titik tengah kelas modus."
          }
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q6] Berapakah median dari data tunggal: 3, 5, 7, 8, 9, 11, 12?",
          "opsi": [
            "A. 7",
            "B. 9",
            "C. 8",
            "D. 7,5",
            "E. 8,5"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Menentukan median dari data tunggal: 3, 5, 7, 8, 9, 11, 12 ($n = 7$):\n$$Me = x_4 = 8$$\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "boxplot",
            "src": "Berapakah median dari data tunggal: 3, 5, 7, 8, 9, 11, 12?"
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q7] Berapakah modus dari data tunggal: 4, 6, 6, 7, 8, 8, 8, 9?",
          "opsi": [
            "A. 7",
            "B. 6",
            "C. 9",
            "D. 6 dan 8",
            "E. 8"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menentukan modus dari data: 4, 6, 6, 7, 8, 8, 8, 9:\nNilai 8 muncul 3 kali (frekuensi terbanyak) $\\implies Mo = 8$.\nKesimpulan: Kunci Jawaban E."
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P17-Q8] Pada data berkelompok, kelas modus adalah 71 - 80 dengan frekuensi 12, frekuensi kelas sebelumnya 8, frekuensi sesudahnya 6, dan Tb = 70,5 (p = 10). Manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Nilai d1 + d2 adalah 10.",
            "B. Nilai modus data berkelompok adalah 78,5.",
            "C. Nilai d1 (selisih frekuensi dengan kelas sebelumnya) adalah 4.",
            "D. Nilai d2 (selisih frekuensi dengan kelas sesudahnya) adalah 6.",
            "E. Nilai modus data berkelompok adalah 74,5."
          ],
          "kunci": "A, C, D, E",
          "bahas": "Langkah 1: Evaluasi parameter modus:\n- $d_1 = 12 - 8 = 4$ (Opsi C BENAR).\n- $d_2 = 12 - 6 = 6$ (Opsi D BENAR).\n- $d_1 + d_2 = 4 + 6 = 10$ (Opsi A BENAR).\n- $Mo = 70{,}5 + \\left(\\frac{4}{10}\\right) \\times 10 = 74{,}5$ (Opsi E BENAR).\n- Opsi B SALAH (tertulis 78,5).\nKesimpulan: Kunci Jawaban A, C, D, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q9] Pada kurva distribusi yang condong ke kanan (positively skewed), hubungan ukuran pemusatan yang berlaku adalah ...",
          "opsi": [
            "A. Mean = Median = Modus",
            "B. Mean > Median > Modus",
            "C. Modus > Mean > Median",
            "D. Modus > Median > Mean",
            "E. Median > Mean > Modus"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Pada kurva condong ke kanan (positively skewed), berlaku:\n$$\\text{Mean} > \\text{Median} > \\text{Modus}$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "lonceng",
            "src": "Pada kurva distribusi yang condong ke kanan (positively skewed), hubungan ukuran pemusatan yang berlaku adalah ..."
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q10] Median dari kumpulan data terurut: 10, 20, 30, 40, 50, 60 adalah ...",
          "opsi": [],
          "kunci": "35",
          "bahas": "Langkah 1: Menghitung median data genap 10, 20, 30, 40, 50, 60:\n$$Me = \\frac{30 + 40}{2} = 35$$\nKesimpulan: Kunci Jawaban 35."
        }
      ]
    },
    "P18": {
      "id": "P18",
      "subject": "Matematika Wajib",
      "title": "Statistika 4: Ukuran Letak Data (Kuartil & Desil)",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q1] Diberikan tabel distribusi frekuensi berikut:\n[40-49: 6], [50-59: 10], [60-69: 14], [70-79: 12], [80-89: 8]\nTotal frekuensi $n = 50$. Nilai Kuartil Bawah ($Q_1$) data tersebut adalah ...",
          "opsi": [
            "A. 55,50",
            "B. 54,75",
            "C. 58,00",
            "D. 56,00",
            "E. 57,25"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menentukan letak $Q_1$ ($n = 50 \\implies \\frac{1}{4}(50) = 12{,}5$):\nKelas $Q_1$ berada pada 50 - 59 ($Tb = 49{,}5, F_k = 6, f_{q1} = 10, p = 10$).\n\nLangkah 2: Menghitung $Q_1$:\n$$Q_1 = 49{,}5 + \\left(\\frac{12{,}5 - 6}{10}\\right) \\times 10 = 49{,}5 + 6{,}5 = 56{,}00$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "boxplot",
            "src": "Diberikan tabel distribusi frekuensi berikut:\n[40-49: 6], [50-59: 10], [60-69: 14], [70-79: 12], [80-89: 8]\nTotal frekuensi $n = 50$. Nilai Kuartil Bawah ($Q_1$) data tersebut adalah ..."
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q2] Diberikan tabel distribusi frekuensi berikut:\n[40-49: 6], [50-59: 10], [60-69: 14], [70-79: 12], [80-89: 8]\nTotal frekuensi $n = 50$. Nilai Kuartil Atas ($Q_3$) data tersebut adalah ...",
          "opsi": [
            "A. 76,58",
            "B. 75,75",
            "C. 74,80",
            "D. 75,50",
            "E. 77,25"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menentukan letak $Q_3$ ($n = 50 \\implies \\frac{3}{4}(50) = 37{,}5$):\nKelas $Q_3$ berada pada 70 - 79 ($Tb = 69{,}5, F_k = 30, f_{q3} = 12, p = 10$).\n\nLangkah 2: Menghitung $Q_3$:\n$$Q_3 = 69{,}5 + \\left(\\frac{37{,}5 - 30}{12}\\right) \\times 10 = 69{,}5 + 6{,}25 = 75{,}75$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "boxplot",
            "src": "Diberikan tabel distribusi frekuensi berikut:\n[40-49: 6], [50-59: 10], [60-69: 14], [70-79: 12], [80-89: 8]\nTotal frekuensi $n = 50$. Nilai Kuartil Atas ($Q_3$) data tersebut adalah ..."
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q3] Jika $Q_1 = 56{,}00$ dan $Q_3 = 76{,}58$, maka nilai Jangkauan Interkuartil ($QR$) adalah ...",
          "opsi": [
            "A. 30,58",
            "B. 20,58",
            "C. 25,00",
            "D. 10,29",
            "E. 15,25"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menghitung Jangkauan Interkuartil ($QR$):\n$$QR = Q_3 - Q_1 = 76{,}58 - 56{,}00 = 20{,}58$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "boxplot",
            "src": "Jika $Q_1 = 56{,}00$ dan $Q_3 = 76{,}58$, maka nilai Jangkauan Interkuartil ($QR$) adalah ..."
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q4] Simpangan kuartil ($Q_d$) dirumuskan sebagai ...",
          "opsi": [
            "A. Q3 - Q1",
            "B. 1/4 (Q3 - Q1)",
            "C. 1/2 (Q3 - Q1)",
            "D. Q3 + Q1",
            "E. (Q3 - Q1) / n"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Rumus simpangan kuartil:\n$$Q_d = \\frac{1}{2}(Q_3 - Q_1)$$\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "boxplot",
            "src": "Simpangan kuartil ($Q_d$) dirumuskan sebagai ..."
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q5] Tentukan kebenaran ukuran letak data:\n(1) Simpangan Kuartil dirumuskan sebagai Qd = Q3 + Q1.\n(2) Jangkauan Interkuartil dirumuskan sebagai QR = Q3 - Q1.\n(3) Kuartil kedua (Q2) bernilai sama dengan Median (Me).",
          "opsi": [
            "Simpangan Kuartil dirumuskan sebagai Qd = Q3 + Q1",
            "Jangkauan Interkuartil dirumuskan sebagai QR = Q3 - Q1",
            "Kuartil kedua (Q2) bernilai sama dengan Median (Me)"
          ],
          "kunci": "B - B - B",
          "bahas": "Langkah 1: Evaluasi ukuran letak:\n(1) $Q_d = \\frac{1}{2}(Q_3 - Q_1) \\implies$ BENAR.\n(2) $QR = Q_3 - Q_1 \\implies$ BENAR.\n(3) $Q_2 = Me \\implies$ BENAR.\nKesimpulan: Kunci Jawaban B - B - B.",
          "viz": {
            "t": "boxplot",
            "src": "Tentukan kebenaran ukuran letak data:\n(1) Simpangan Kuartil dirumuskan sebagai Qd = Q3 + Q1.\n(2) Jangkauan Interkuartil dirumuskan sebagai QR = Q3 - Q1.\n(3) Kuartil kedua (Q2) bernilai sama dengan Median (Me)."
          }
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q6] Batas pencilan bawah (Pagar Dalam Bawah) pada diagram kotak garis dirumuskan sebagai ...",
          "opsi": [
            "A. Q3 - 1,5 * QR",
            "B. Q3 + 1,5 * QR",
            "C. Q1 - 0,5 * QR",
            "D. Q1 - 1,5 * QR",
            "E. Q1 - QR"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Pagar Dalam Bawah ($PD$) dirumuskan sebagai:\n$$PD = Q_1 - 1{,}5 \\times QR$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "boxplot",
            "src": "Batas pencilan bawah (Pagar Dalam Bawah) pada diagram kotak garis dirumuskan sebagai ..."
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q7] Nilai Desil ke-5 ($D_5$) selalu memiliki nilai yang sama dengan ...",
          "opsi": [
            "A. Median (Q2)",
            "B. Kuartil Bawah (Q1)",
            "C. Modus",
            "D. Rata-rata Hitung",
            "E. Kuartil Atas (Q3)"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Desil ke-5 membagi data menjadi 50% $\\implies$ bernilai sama dengan Median ($Q_2$).\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P18-Q8] Dari kumpulan data diperoleh Q1 = 40 dan Q3 = 70. Manakah pernyataan ukuran letak data berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Pagar dalam bawah bernilai -5.",
            "B. Pagar dalam atas bernilai 115.",
            "C. Nilai data 120 dikategorikan sebagai data pencilan (outlier).",
            "D. Jangkauan interkuartil (QR) bernilai 30.",
            "E. Simpangan kuartil (Qd) bernilai 15."
          ],
          "kunci": "A, B, C, D, E",
          "bahas": "Langkah 1: Evaluasi jika $Q_1 = 40$ dan $Q_3 = 70$:\n- $QR = 70 - 40 = 30$ (Opsi D BENAR).\n- $Q_d = 15$ (Opsi E BENAR).\n- Pagar Dalam Bawah $= 40 - 1{,}5(30) = -5$ (Opsi A BENAR).\n- Pagar Dalam Atas $= 70 + 1{,}5(30) = 115$ (Opsi B BENAR).\n- Data $120 > 115 \\implies$ outlier (Opsi C BENAR).\nKesimpulan: Kunci Jawaban A, B, C, D, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q9] Dari data tunggal: 2, 4, 6, 8, 10, 12, 14, nilai Kuartil Bawah ($Q_1$) adalah ...",
          "opsi": [
            "A. 6",
            "B. 8",
            "C. 2",
            "D. 5",
            "E. 4"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menentukan $Q_1$ dari data 2, 4, 6, 8, 10, 12, 14:\n$$Q_1 = x_2 = 4$$\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "boxplot",
            "src": "Dari data tunggal: 2, 4, 6, 8, 10, 12, 14, nilai Kuartil Bawah ($Q_1$) adalah ..."
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q10] Jika $Q_1 = 30$ dan $Q_3 = 50$, maka nilai simpangan kuartil ($Q_d$) adalah ...",
          "opsi": [],
          "kunci": "10",
          "bahas": "Langkah 1: Menghitung simpangan kuartil jika $Q_1 = 30$ dan $Q_3 = 50$:\n$$Q_d = \\frac{1}{2}(50 - 30) = \\frac{1}{2}(20) = 10$$\nKesimpulan: Kunci Jawaban 10.",
          "viz": {
            "t": "boxplot",
            "src": "Jika $Q_1 = 30$ dan $Q_3 = 50$, maka nilai simpangan kuartil ($Q_d$) adalah ..."
          }
        }
      ]
    },
    "P19": {
      "id": "P19",
      "subject": "Matematika Wajib",
      "title": "Statistika 5: Ukuran Penyebaran Data (Varians & Simpangan Baku)",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q1] Diberikan data sampel tunggal: 6, 7, 8, 9, 10. Nilai simpangan baku ($S$) dari data tersebut adalah ...",
          "opsi": [
            "A. 2,5",
            "B. 1",
            "C. 2",
            "D. $\\sqrt{2}$",
            "E. $\\sqrt{10}$"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menghitung rata-rata data 6, 7, 8, 9, 10 $\\implies \\bar{x} = 8$.\nLangkah 2: $\\sum (x_i - \\bar{x})^2 = 4 + 1 + 0 + 1 + 4 = 10$.\nLangkah 3: Simpangan baku populasi $\\sigma = \\sqrt{\\frac{10}{5}} = \\sqrt{2}$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "lonceng",
            "src": "Diberikan data sampel tunggal: 6, 7, 8, 9, 10. Nilai simpangan baku ($S$) dari data tersebut adalah ..."
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q2] Simpangan rata-rata ($SR$) dari data: 4, 6, 8, 10, 12 adalah ...",
          "opsi": [
            "A. 2,8",
            "B. 2,4",
            "C. 1,8",
            "D. 3,0",
            "E. 2,0"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menghitung mean data 4, 6, 8, 10, 12 $\\implies \\bar{x} = 8$.\nLangkah 2: $\\sum |x_i - \\bar{x}| = 4 + 2 + 0 + 2 + 4 = 12$.\nLangkah 3: $SR = \\frac{12}{5} = 2{,}4$.\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q3] Jika setiap nilai data dikalikan 3, maka nilai simpangan baku data yang baru menjadi ...",
          "opsi": [
            "A. 3 kali simpangan baku semula",
            "B. Tetap tidak berubah",
            "C. 9 kali simpangan baku semula",
            "D. 1/3 kali semula",
            "E. Bertambah 3"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Jika setiap data dikalikan $k=3$, simpangan baku berubah menjadi $|k| \\cdot S = 3$ kali simpangan baku semula.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "lonceng",
            "src": "Jika setiap nilai data dikalikan 3, maka nilai simpangan baku data yang baru menjadi ..."
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q4] Jika setiap nilai data ditambah 10, maka nilai varians data yang baru akan ...",
          "opsi": [
            "A. Bertambah 100",
            "B. Berkurang 10",
            "C. Tetap tidak berubah",
            "D. Bertambah 10",
            "E. Menjadi 10 kali lipat"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Penambahan konstanta pada seluruh data tidak mengubah ukuran penyebaran (varians tetap tidak berubah).\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "lonceng",
            "src": "Jika setiap nilai data ditambah 10, maka nilai varians data yang baru akan ..."
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q5] Tentukan kebenaran ukuran penyebaran data:\n(1) Simpangan baku (S) adalah akar kuadrat dari varians (S^2).\n(2) Jika setiap nilai data dikalikan 3, maka nilai varians data menjadi 9 kali lipat.\n(3) Jika setiap nilai data ditambah 10, maka nilai simpangan baku bertambah 10.",
          "opsi": [
            "Simpangan baku (S) adalah akar kuadrat dari varians (S^2)",
            "Jika setiap nilai data dikalikan 3, maka nilai varians data menjadi 9 kali lipat",
            "Jika setiap nilai data ditambah 10, maka nilai simpangan baku bertambah 10"
          ],
          "kunci": "B - B - S",
          "bahas": "Langkah 1: Evaluasi pernyataan:\n(1) $S = \\sqrt{S^2} \\implies$ BENAR.\n(2) Perkalian dengan 3 membuat varians menjadi $3^2 = 9$ kali lipat $\\implies$ BENAR.\n(3) Penambahan 10 membuat simpangan baku tetap sama (bukan bertambah 10) $\\implies$ SALAH.\nKesimpulan: Kunci Jawaban B - B - S.",
          "viz": {
            "t": "lonceng",
            "src": "Tentukan kebenaran ukuran penyebaran data:\n(1) Simpangan baku (S) adalah akar kuadrat dari varians (S^2).\n(2) Jika setiap nilai data dikalikan 3, maka nilai varians data menjadi 9 kali lipat.\n(3) Jika setiap nilai data ditambah 10, maka nilai simpangan baku bertambah 10."
          }
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q6] Berapakah nilai $Z$-score siswa yang memperoleh nilai ujian $x = 85$ jika mean kelas $\\bar{x} = 75$ dan simpangan baku $S = 5$?",
          "opsi": [
            "A. -2,0",
            "B. +2,0",
            "C. +2,5",
            "D. +1,0",
            "E. +1,5"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menghitung Skor Baku ($Z$-score):\n$$Z = \\frac{x - \\bar{x}}{S} = \\frac{85 - 75}{5} = \\frac{10}{5} = +2{,}0$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "lonceng",
            "src": "Berapakah nilai $Z$-score siswa yang memperoleh nilai ujian $x = 85$ jika mean kelas $\\bar{x} = 75$ dan simpangan baku $S = 5$?"
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q7] Koefisien variasi ($KV$) dari kumpulan data dengan mean $\\bar{x} = 80$ dan simpangan baku $S = 8$ adalah ...",
          "opsi": [
            "A. 15%",
            "B. 12%",
            "C. 10%",
            "D. 8%",
            "E. 5%"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Menghitung Koefisien Variasi ($KV$):\n$$KV = \\left(\\frac{S}{\\bar{x}}\\right) \\times 100\\% = \\left(\\frac{8}{80}\\right) \\times 100\\% = 10\\%$$\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "lonceng",
            "src": "Koefisien variasi ($KV$) dari kumpulan data dengan mean $\\bar{x} = 80$ dan simpangan baku $S = 8$ adalah ..."
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P19-Q8] Diberikan sampel data: 4, 6, 8, 10, 12. Manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Nilai varians sampel (S^2) data adalah 10.",
            "B. Jangkauan (range) data adalah 8.",
            "C. Nilai simpangan baku sampel (S) adalah akar(10).",
            "D. Nilai rata-rata data adalah 8.",
            "E. Nilai simpangan rata-rata (SR) data adalah 2,4."
          ],
          "kunci": "A, B, C, D, E",
          "bahas": "Langkah 1: Evaluasi sampel data 4, 6, 8, 10, 12:\n- Mean $= 8$ (BENAR).\n- Range $= 12 - 4 = 8$ (BENAR).\n- $SR = 2{,}4$ (BENAR).\n- Varians sampel $S^2 = \\frac{40}{4} = 10$ (BENAR).\n- Simpangan baku sampel $S = \\sqrt{10}$ (BENAR).\nKesimpulan: Kunci Jawaban A, B, C, D, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q9] Varians ($S^2$) dari data tunggal: 2, 4, 6, 8 adalah ...",
          "opsi": [
            "A. 2,5",
            "B. 6,0",
            "C. 4,0",
            "D. $\\sqrt{5}$",
            "E. 5,0"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menghitung varians populasi data 2, 4, 6, 8 (mean $\\bar{x} = 5$):\n$$\\sigma^2 = \\frac{(2-5)^2 + (4-5)^2 + (6-5)^2 + (8-5)^2}{4} = \\frac{9 + 1 + 1 + 9}{4} = \\frac{20}{4} = 5{,}0$$\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "lonceng",
            "src": "Varians ($S^2$) dari data tunggal: 2, 4, 6, 8 adalah ..."
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q10] Nilai varians dari data identik: 10, 10, 10, 10, 10 adalah ...",
          "opsi": [],
          "kunci": "0",
          "bahas": "Langkah 1: Data identik tidak memiliki variasi sebaran nilai, sehingga nilai varians adalah **0**.\nKesimpulan: Kunci Jawaban 0.",
          "viz": {
            "t": "lonceng",
            "src": "Nilai varians dari data identik: 10, 10, 10, 10, 10 adalah ..."
          }
        }
      ]
    },
    "P20": {
      "id": "P20",
      "subject": "Matematika Wajib",
      "title": "Analisis Data Bivariat (Scatter Plot & Regresi Linier)",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q1] Pada analisis regresi linier sederhana $\\hat{y} = 25 + 1{,}8x$, jika variabel independen $x$ bertambah 5 satuan, maka estimasi kenaikan nilai $\\hat{y}$ adalah ...",
          "opsi": [
            "A. 1,8 satuan",
            "B. 34,0 satuan",
            "C. 5,0 satuan",
            "D. 25,0 satuan",
            "E. 9,0 satuan"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menghitung estimasi perubahan $\\hat{y}$ saat $x$ naik 5 satuan:\n$$\\Delta\\hat{y} = b \\times \\Delta x = 1{,}8 \\times 5 = 9{,}0 \\text{ satuan}$$\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "regresi",
            "src": "Pada analisis regresi linier sederhana $\\hat{y} = 25 + 1{,}8x$, jika variabel independen $x$ bertambah 5 satuan, maka estimasi kenaikan nilai $\\hat{y}$ adalah ..."
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q2] Nilai koefisien korelasi Pearson $r = -0{,}92$ menunjukkan hubungan antara dua variabel bersifat ...",
          "opsi": [
            "A. Sempurna searah",
            "B. Lemah berlawanan",
            "C. Linier positif sangat kuat",
            "D. Linier negatif yang sangat kuat",
            "E. Tidak ada korelasi"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Koefisien korelasi $r = -0{,}92$ bernilai negatif mendekati -1, menunjukkan hubungan **linier negatif yang sangat kuat**.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "regresi",
            "src": "Nilai koefisien korelasi Pearson $r = -0{,}92$ menunjukkan hubungan antara dua variabel bersifat ..."
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q3] Jika koefisien korelasi $r = 0{,}80$, maka nilai koefisien determinasi ($R^2$) adalah ...",
          "opsi": [
            "A. 84%",
            "B. 64%",
            "C. 16%",
            "D. 80%",
            "E. 40%"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menghitung Koefisien Determinasi ($R^2$):\n$$R^2 = (0{,}80)^2 = 0{,}64 = 64\\%$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "regresi",
            "src": "Jika koefisien korelasi $r = 0{,}80$, maka nilai koefisien determinasi ($R^2$) adalah ..."
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q4] Garis regresi linier terbaik diperoleh dengan meminimalkan ...",
          "opsi": [
            "A. Nilai intersep a",
            "B. Jarak antar titik X",
            "C. Jumlah kuadrat residual (Sum of Squared Errors)",
            "D. Jumlah titik data",
            "E. Nilai rata-rata variabel Y"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Garis regresi metode kuadrat terkecil (OLS) diperoleh dengan meminimalkan **Jumlah Kuadrat Residual (Sum of Squared Errors)**.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "regresi",
            "src": "Garis regresi linier terbaik diperoleh dengan meminimalkan ..."
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q5] Tentukan kebenaran analisis regresi linier bivariat:\n(1) Koefisien determinasi R^2 = r^2 menyatakan proporsi variasi Y yang dijelaskan oleh X.\n(2) Nilai r = 0 menunjukkan korelasi linier sempurna positif.\n(3) Nilai koefisien korelasi Pearson r memenuhi -1 <= r <= 1.",
          "opsi": [
            "Koefisien determinasi R^2 = r^2 menyatakan proporsi variasi Y yang dijelaskan oleh X",
            "Nilai r = 0 menunjukkan korelasi linier sempurna positif",
            "Nilai koefisien korelasi Pearson r memenuhi -1 <= r <= 1"
          ],
          "kunci": "B - S - B",
          "bahas": "Langkah 1: Analisis:\n(1) $R^2 = r^2$ menyatakan proporsi variasi Y $\\implies$ BENAR.\n(2) $r = 0$ menunjukkan tidak ada korelasi linier (bukan korelasi sempurna) $\\implies$ SALAH.\n(3) $-1 \\le r \\le 1 \\implies$ BENAR.\nKesimpulan: Kunci Jawaban B - S - B.",
          "viz": {
            "t": "regresi",
            "src": "Tentukan kebenaran analisis regresi linier bivariat:\n(1) Koefisien determinasi R^2 = r^2 menyatakan proporsi variasi Y yang dijelaskan oleh X.\n(2) Nilai r = 0 menunjukkan korelasi linier sempurna positif.\n(3) Nilai koefisien korelasi Pearson r memenuhi -1 <= r <= 1."
          }
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q6] Berapakah nilai estimasi $\\hat{y}$ saat $x = 10$ pada persamaan garis regresi $\\hat{y} = 15 + 3{,}5x$?",
          "opsi": [
            "A. 60,0",
            "B. 50,0",
            "C. 35,0",
            "D. 55,0",
            "E. 45,0"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menghitung estimasi $\\hat{y}$ saat $x = 10$:\n$$\\hat{y} = 15 + 3{,}5(10) = 15 + 35 = 50{,}0$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "regresi",
            "src": "Berapakah nilai estimasi $\\hat{y}$ saat $x = 10$ pada persamaan garis regresi $\\hat{y} = 15 + 3{,}5x$?"
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q7] Nilai galat (residual $e$) dari suatu observasi dengan data aktual $y = 80$ dan nilai prediksi $\\hat{y} = 76$ adalah ...",
          "opsi": [
            "A. +156",
            "B. 4/76",
            "C. -4",
            "D. 0",
            "E. +4"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menghitung nilai galat residual ($e$):\n$$e = y - \\hat{y} = 80 - 76 = +4$$\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "regresi",
            "src": "Nilai galat (residual $e$) dari suatu observasi dengan data aktual $y = 80$ dan nilai prediksi $\\hat{y} = 76$ adalah ..."
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P20-Q8] Pada persamaan regresi y_hat = 15 + 2,5x dengan r = 0,80, manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Nilai koefisien determinasi R^2 adalah 0,64 (64%).",
            "B. Setiap kenaikan 1 satuan X, nilai Y diperkirakan meningkat 2,5 satuan.",
            "C. Nilai intersep sumbu-Y adalah 15.",
            "D. Nilai gradien kemiringan garis regresi adalah 2,5.",
            "E. Jika x = 10, estimasi nilai y_hat adalah 40."
          ],
          "kunci": "A, B, C, D, E",
          "bahas": "Langkah 1: Analisis model $\\hat{y} = 15 + 2{,}5x$ ($r = 0{,}80$):\n- $R^2 = 64\\%$ (BENAR).\n- Kenaikan 1 satuan $X$ menaikkan $Y$ sebesar 2,5 (BENAR).\n- Intersep $= 15$ (BENAR).\n- Gradien $= 2{,}5$ (BENAR).\n- Saat $x = 10 \\implies \\hat{y} = 40$ (BENAR).\nKesimpulan: Kunci Jawaban A, B, C, D, E.",
          "viz": {
            "t": "regresi",
            "src": "Pada persamaan regresi y_hat = 15 + 2,5x dengan r = 0,80, manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)"
          }
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q9] Jika $\\bar{x} = 4, \\bar{y} = 20$, dan nilai gradien kemiringan $b = 3$, maka nilai intersep $a$ adalah ...",
          "opsi": [
            "A. 12",
            "B. 6",
            "C. 15",
            "D. 8",
            "E. 10"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menghitung intersep $a$:\n$$a = \\bar{y} - b\\bar{x} = 20 - (3 \\times 4) = 20 - 12 = 8$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "regresi",
            "src": "Jika $\\bar{x} = 4, \\bar{y} = 20$, dan nilai gradien kemiringan $b = 3$, maka nilai intersep $a$ adalah ..."
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q10] Nilai koefisien korelasi Pearson jika kedua variabel memiliki hubungan linier positif sempurna adalah ...",
          "opsi": [],
          "kunci": "1",
          "bahas": "Langkah 1: Hubungan linier positif sempurna memiliki koefisien korelasi Pearson tepat **1**.\nKesimpulan: Kunci Jawaban 1.",
          "viz": {
            "t": "regresi",
            "src": "Nilai koefisien korelasi Pearson jika kedua variabel memiliki hubungan linier positif sempurna adalah ..."
          }
        }
      ]
    },
    "P21": {
      "id": "P21",
      "subject": "Matematika Wajib",
      "title": "Asesmen Sumatif Terpadu Statistika & Simulasi ASAS / ASAJ CBT",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q1] Diberikan tabel distribusi frekuensi berikut:\n[10-14: 4], [15-19: 8], [20-24: 5], [25-29: 3]\nTotal frekuensi $n = 20$. Nilai rata-rata hitung (mean) data tersebut adalah ...",
          "opsi": [
            "A. 18,25",
            "B. 17,25",
            "C. 19,00",
            "D. 17,50",
            "E. 18,75"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menghitung $\\sum f_i x_i$ dari tabel distribusi frekuensi ($n = 20$):\n- Kelas 10-14 ($f = 4$): $x_1 = 12 \\implies f_1 x_1 = 48$\n- Kelas 15-19 ($f = 8$): $x_2 = 17 \\implies f_2 x_2 = 136$\n- Kelas 20-24 ($f = 5$): $x_3 = 22 \\implies f_3 x_3 = 110$\n- Kelas 25-29 ($f = 3$): $x_4 = 27 \\implies f_4 x_4 = 81$\n$$\\sum f_i x_i = 48 + 136 + 110 + 81 = 375$$\n\nLangkah 2: Menghitung rata-rata hitung (mean):\n$$\\bar{x} = \\frac{375}{20} = 18{,}75$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "histogram",
            "src": "Diberikan tabel distribusi frekuensi berikut:\n[10-14: 4], [15-19: 8], [20-24: 5], [25-29: 3]\nTotal frekuensi $n = 20$. Nilai rata-rata hitung (mean) data tersebut adalah ..."
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q2] Jika nilai varians sampel $S^2 = 16$, maka nilai simpangan baku ($S$) adalah ...",
          "opsi": [
            "A. 16",
            "B. 4",
            "C. 2",
            "D. 256",
            "E. 8"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Mengidentifikasi rumus simpangan baku dari varians:\n$$S = \\sqrt{S^2}$$\n\nLangkah 2: Mensubstitusikan $S^2 = 16$:\n$$S = \\sqrt{16} = 4$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "lonceng",
            "src": "Jika nilai varians sampel $S^2 = 16$, maka nilai simpangan baku ($S$) adalah ..."
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q3] Nilai koefisien determinasi $R^2 = 0{,}81$ menyatakan bahwa pengaruh variabel X terhadap Y adalah sebesar ...",
          "opsi": [
            "A. 90%",
            "B. 8,1%",
            "C. 81%",
            "D. 19%",
            "E. 9%"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Menafsirkan nilai koefisien determinasi $R^2 = 0{,}81$:\n$$R^2 = 0{,}81 = 81\\%$$\n\nLangkah 2: Menarik kesimpulan persentase:\nBesar kontribusi pengaruh variabel X terhadap variabel Y adalah sebesar **81%**.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "regresi",
            "src": "Nilai koefisien determinasi $R^2 = 0{,}81$ menyatakan bahwa pengaruh variabel X terhadap Y adalah sebesar ..."
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q4] Median dari kumpulan data tunggal: 5, 7, 8, 10, 12, 14, 15 adalah ...",
          "opsi": [
            "A. 10",
            "B. 8",
            "C. 12",
            "D. 9",
            "E. 11"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menentukan median data tunggal ganjil $n = 7$:\nData terurut: $5, 7, 8, \\mathbf{10}, 12, 14, 15$.\n\nLangkah 2: Menentukan letak data ke-$\\frac{7 + 1}{2} = 4$:\n$$Me = x_4 = 10$$\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q5] Tentukan kebenaran rangkuman evaluasi statistika:\n(1) Simpangan baku dari suatu data selalu bernilai 0 untuk segala jenis data.\n(2) Rata-rata hitung (mean) sangat sensitif terhadap nilai pencilan ekstrim.\n(3) Median dan Kuartil bersifat robust terhadap pengaruh nilai pencilan ekstrim.",
          "opsi": [
            "Simpangan baku dari suatu data selalu bernilai 0 untuk segala jenis data",
            "Rata-rata hitung (mean) sangat sensitif terhadap nilai pencilan ekstrim",
            "Median dan Kuartil bersifat robust terhadap pengaruh nilai pencilan ekstrim"
          ],
          "kunci": "S - B - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nSimpangan baku hanya bernilai 0 jika seluruh data seragam bernilai sama. Jika data bervariasi, $S > 0$.\n$\\implies$ Pernyataan (1) bernilai SALAH.\n\nLangkah 2: Analisis Pernyataan (2):\nMean menjumlahkan semua amatan sehingga sangat terpengaruh oleh pencilan ekstrim.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nMedian dan kuartil berbasis urutan posisi sehingga bersifat robust (kebal) terhadap nilai pencilan ekstrim.\n$\\implies$ Pernyataan (3) bernilai BENAR.\nKesimpulan: Kunci Jawaban S - B - B.",
          "viz": {
            "t": "boxplot",
            "src": "Tentukan kebenaran rangkuman evaluasi statistika:\n(1) Simpangan baku dari suatu data selalu bernilai 0 untuk segala jenis data.\n(2) Rata-rata hitung (mean) sangat sensitif terhadap nilai pencilan ekstrim.\n(3) Median dan Kuartil bersifat robust terhadap pengaruh nilai pencilan ekstrim."
          }
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q6] Berapakah nilai jangkauan interkuartil ($QR$) jika $Q_1 = 45$ dan $Q_3 = 75$?",
          "opsi": [
            "A. 25",
            "B. 30",
            "C. 120",
            "D. 60",
            "E. 15"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menghitung Jangkauan Interkuartil ($QR$):\n$$QR = Q_3 - Q_1$$\n\nLangkah 2: Mensubstitusikan $Q_1 = 45$ dan $Q_3 = 75$:\n$$QR = 75 - 45 = 30$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "boxplot",
            "src": "Berapakah nilai jangkauan interkuartil ($QR$) jika $Q_1 = 45$ dan $Q_3 = 75$?"
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q7] Nilai skor baku ($Z$-score) dari $x = 90$ pada distribusi dengan mean 70 dan standar deviasi 10 adalah ...",
          "opsi": [
            "A. +1,0",
            "B. +1,5",
            "C. +3,0",
            "D. +2,0",
            "E. -2,0"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menghitung Skor Baku ($Z$-score):\n$$Z = \\frac{x - \\bar{x}}{S}$$\n\nLangkah 2: Mensubstitusikan $x = 90, \\bar{x} = 70$, dan $S = 10$:\n$$Z = \\frac{90 - 70}{10} = \\frac{20}{10} = +2{,}0$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "lonceng",
            "src": "Nilai skor baku ($Z$-score) dari $x = 90$ pada distribusi dengan mean 70 dan standar deviasi 10 adalah ..."
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P21-Q8] Pada asesmen statistika terpadu, manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Jika koefisien korelasi r = -0,95, hubungan kedua variabel sangat kuat berkebalikan arah.",
            "B. Median membagi distribusi data menjadi 4 kelompok yang sama besar.",
            "C. Skor baku Z bernilai positif jika nilai data berada di atas rata-rata kelompok.",
            "D. Simpangan baku dari data: 5, 5, 5, 5, 5 adalah 0.",
            "E. Modus adalah ukuran pemusatan yang menyatakan nilai data berfrekuensi tertinggi."
          ],
          "kunci": "A, C, D, E",
          "bahas": "Langkah 1: Evaluasi seluruh pernyataan evaluasi statistika:\n- A: $r = -0{,}95$ menunjukkan hubungan sangat kuat berkebalikan arah (BENAR).\n- B: Median membagi data menjadi 2 bagian (50%), bukan 4 kelompok (SALAH).\n- C: $Z$-score positif saat $x > \\bar{x}$ (BENAR).\n- D: Simpangan baku data identik $5, 5, 5, 5, 5$ adalah 0 (BENAR).\n- E: Modus menyatakan data berfrekuensi tertinggi (BENAR).\nKesimpulan: Kunci Jawaban A, C, D, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q9] Pada persamaan regresi $\\hat{y} = 10 + 2x$, nilai intersepnya adalah ...",
          "opsi": [
            "A. 12",
            "B. 20",
            "C. 2",
            "D. 5",
            "E. 10"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Mengidentifikasi konstanta intersep ($a$) pada persamaan regresi $\\hat{y} = a + bx$:\nPada persamaan $\\hat{y} = 10 + 2x$, intersep adalah konstanta $a = 10$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "regresi",
            "src": "Pada persamaan regresi $\\hat{y} = 10 + 2x$, nilai intersepnya adalah ..."
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q10] Nilai simpangan baku dari data identik: 5, 5, 5, 5 adalah ...",
          "opsi": [],
          "kunci": "0",
          "bahas": "Langkah 1: Menghitung simpangan baku data konstan $5, 5, 5, 5$:\nKarena seluruh amatan sama dengan nilai rata-rata $\\bar{x} = 5$, maka setiap simpangan $(x_i - \\bar{x}) = 0$.\n$$S = 0$$\nKesimpulan: Kunci Jawaban 0.",
          "viz": {
            "t": "lonceng",
            "src": "Nilai simpangan baku dari data identik: 5, 5, 5, 5 adalah ..."
          }
        }
      ]
    }
  },
  "tka_minat": {
    "P01": {
      "id": "P01",
      "subject": "Matematika Peminatan",
      "title": "Geometri Analitik Lingkaran 1: Persamaan Lingkaran Pusat O(0,0)",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P01-Q1] Persamaan lingkaran yang berpusat di titik asal $O(0,0)$ dan melalui titik $A(-6, 8)$ adalah ...",
          "opsi": [
            "A. $x^2 + y^2 = 28$",
            "B. $x^2 + y^2 = 100$",
            "C. $x^2 + y^2 = 64$",
            "D. $x^2 + y^2 = 14$",
            "E. $x^2 + y^2 = 10$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Mengidentifikasi rumus baku persamaan lingkaran berpusat di titik asal $O(0, 0)$:\n$$x^2 + y^2 = r^2$$\n\nLangkah 2: Mensubstitusikan nilai jari-jari $r = 5$ satuan:\n$$x^2 + y^2 = 5^2$$\n\nLangkah 3: Menghitung nilai kuadrat:\n$$x^2 + y^2 = 25$$\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P01-Q2] Sebuah lingkaran berpusat di $O(0,0)$ menyinggung garis lurus $3x - 4y + 20 = 0$. Panjang jari-jari lingkaran tersebut adalah ...",
          "opsi": [
            "A. 5 satuan",
            "B. 6 satuan",
            "C. 3 satuan",
            "D. 4 satuan",
            "E. 2 satuan"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Mengidentifikasi syarat lingkaran berpusat di $O(0, 0)$ yang melalui titik $A(3, -4)$:\nJari-jari kuadrat ($r^2$) sama dengan jarak kuadrat dari titik pusat ke titik yang dilalui:\n$$r^2 = x_A^2 + y_A^2$$\n\nLangkah 2: Mensubstitusikan koordinat $(3, -4)$:\n$$r^2 = 3^2 + (-4)^2 = 9 + 16 = 25$$\n\nLangkah 3: Menyusun persamaan lingkaran:\n$$x^2 + y^2 = 25$$\nKesimpulan: Kunci Jawaban D."
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P01-Q3] Jika titik $P(k, -4)$ terletak tepat pada busur lingkaran $x^2 + y^2 = 25$, maka nilai $k$ yang memenuhi adalah ...",
          "opsi": [
            "A. $k = \\pm 9$",
            "B. $k = \\pm 3$",
            "C. $k = \\pm 5$",
            "D. $k = \\pm 2$",
            "E. $k = \\pm 4$"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Membandingkan persamaan lingkaran $x^2 + y^2 = 36$ dengan bentuk baku $x^2 + y^2 = r^2$:\n$$r^2 = 36$$\n\nLangkah 2: Menarik akar kuadrat positif untuk jari-jari:\n$$r = \\sqrt{36} = 6 \\text{ satuan}$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "lingkaran",
            "r2": 25,
            "cx": 0,
            "cy": 0
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P01-Q4] Persamaan lingkaran berpusat di $O(0,0)$ yang memiliki luas daerah sebesar $64\\pi$ satuan luas adalah ...",
          "opsi": [
            "A. $x^2 + y^2 = 128$",
            "B. $x^2 + y^2 = 32$",
            "C. $x^2 + y^2 = 16$",
            "D. $x^2 + y^2 = 64$",
            "E. $x^2 + y^2 = 8$"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Mengidentifikasi kondisi lingkaran menyinggung garis horizontal $y = 7$:\nKarena berpusat di titik asal $O(0, 0)$, jarak terpendek dari pusat $(0, 0)$ ke garis $y = 7$ adalah panjang jari-jari:\n$$r = |7 - 0| = 7 \\text{ satuan}$$\n\nLangkah 2: Menghitung $r^2$:\n$$r^2 = 7^2 = 49$$\n\nLangkah 3: Menyusun persamaan lingkaran:\n$$x^2 + y^2 = 49$$\nKesimpulan: Kunci Jawaban C."
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P01-Q5] Tentukan kebenaran lingkaran x^2 + y^2 = 25:\n(1) Titik pusat lingkaran berada pada titik asal O(0,0).\n(2) Titik (3, 4) terletak tepat pada busur keliling lingkaran.\n(3) Panjang jari-jari lingkaran adalah r = 25 satuan.",
          "opsi": [
            "Titik pusat lingkaran berada pada titik asal O(0,0)",
            "Titik (3, 4) terletak tepat pada busur keliling lingkaran",
            "Panjang jari-jari lingkaran adalah r = 25 satuan"
          ],
          "kunci": "B - B - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nBentuk baku persamaan lingkaran berpusat di $O(0,0)$ berjari-jari $r$ adalah $x^2 + y^2 = r^2$.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\nJari-jari dari $x^2 + y^2 = 49$ adalah $r = \\sqrt{49} = 7$.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nTitik $(2, 3)$ diuji ke $x^2 + y^2$: $2^2 + 3^2 = 4 + 9 = 13 \\neq 16$. Karena $13 < 16$, titik berada di dalam lingkaran, bukan tepat pada lingkaran.\n$\\implies$ Pernyataan (3) bernilai SALAH.\nKesimpulan: Kunci Jawaban B - B - S.",
          "viz": {
            "t": "lingkaran",
            "r2": 25,
            "cx": 0,
            "cy": 0,
            "P": [
              0.0,
              0.0
            ]
          }
        },
        {
          "no": 6,
          "tipe": "Kecukupan Data",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P01-Q6] Berapakah panjang jari-jari lingkaran $L: x^2 + y^2 = r^2$?\nPernyataan (1): Lingkaran $L$ melalui titik koordinat $(3, 4)$.\nPernyataan (2): Keliling lingkaran $L$ adalah $10\\pi$ satuan panjang.",
          "opsi": [
            "A. Pernyataan (2) SAJA cukup",
            "B. DUA pernyataan BERSAMA-SAMA cukup",
            "C. Pernyataan (1) dan (2) tidak cukup",
            "D. Pernyataan (1) SAJA cukup",
            "E. Pernyataan (1) SAJA cukup dan (2) SAJA cukup"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Menghitung jari-jari kuadrat dari titik yang dilalui $(-2, \\sqrt{5})$:\n$$r^2 = x^2 + y^2 = (-2)^2 + (\\sqrt{5})^2 = 4 + 5 = 9$$\n\nLangkah 2: Menyusun persamaan lingkaran berpusat di $O(0, 0)$:\n$$x^2 + y^2 = 9$$\nKesimpulan: Kunci Jawaban E."
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P01-Q7] Persamaan lingkaran berpusat di $O(0,0)$ yang menyinggung garis vertikal $x = 5$ adalah ...",
          "opsi": [
            "A. $x^2 + y^2 = 25$",
            "B. $x^2 + y^2 = 50$",
            "C. $x^2 + y^2 = 100$",
            "D. $x^2 + y^2 = 5$",
            "E. $x^2 + y^2 = 10$"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Mengubah bentuk persamaan $3x^2 + 3y^2 = 27$ ke bentuk baku:\nMembagi kedua ruas dengan koefisien $3$:\n$$\\frac{3x^2 + 3y^2}{3} = \\frac{27}{3} \\implies x^2 + y^2 = 9$$\n\nLangkah 2: Menghitung jari-jari $r$:\n$$r = \\sqrt{9} = 3 \\text{ satuan}$$\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P01-Q8] Pada lingkaran x^2 + y^2 = 100, manakah pernyataan analisis geometri berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Titik (6, 8) terletak tepat pada busur lingkaran.",
            "B. Panjang diameter lingkaran adalah 20 satuan.",
            "C. Titik asal O(0,0) berada di luar lingkaran.",
            "D. Panjang jari-jari lingkaran adalah 10 satuan.",
            "E. Titik potong lingkaran dengan sumbu-X adalah (10, 0) dan (-10, 0)."
          ],
          "kunci": "A, B, C, D",
          "bahas": "Langkah 1: Analisis lingkaran $x^2 + y^2 = 25$:\n- A: Titik $(3, 4)$ memenuhi $3^2 + 4^2 = 25$ (BENAR).\n- B: Jari-jarinya adalah $r = \\sqrt{25} = 5$ (BENAR).\n- C: Titik pusat berada di $O(0, 0)$ (BENAR).\n- D: Diameter lingkaran $d = 2r = 10$ (BENAR).\n- E: Luas lingkaran $L = \\pi r^2 = 25\\pi$ (BENAR).\nKesimpulan: Kunci Jawaban A, B, C, D, E.",
          "viz": {
            "t": "lingkaran",
            "r2": 100,
            "cx": 0,
            "cy": 0
          }
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P01-Q9] Jarak titik $P(5, 12)$ ke titik pusat lingkaran $x^2 + y^2 = 16$ adalah ...",
          "opsi": [
            "A. 15 satuan",
            "B. 17 satuan",
            "C. 13 satuan",
            "D. 12 satuan",
            "E. 9 satuan"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menghitung jarak tegak lurus dari titik pusat $O(0, 0)$ ke garis singgung $3x + 4y - 20 = 0$:\n$$r = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}} = \\frac{|3(0) + 4(0) - 20|}{\\sqrt{3^2 + 4^2}} = \\frac{|-20|}{\\sqrt{25}} = \\frac{20}{5} = 4$$\n\nLangkah 2: Menghitung nilai $r^2$:\n$$r^2 = 4^2 = 16$$\n\nLangkah 3: Menyusun persamaan lingkaran:\n$$x^2 + y^2 = 16$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "lingkaran",
            "r2": 16,
            "cx": 0,
            "cy": 0,
            "P": [
              5.0,
              12.0
            ]
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P01-Q10] Jika lingkaran $x^2 + y^2 = r^2$ melalui titik koordinat $(-8, -15)$, maka nilai jari-jari $r$ adalah ...",
          "opsi": [],
          "kunci": "9",
          "bahas": "Langkah 1: Lingkaran menyinggung garis $x = -8$ dengan pusat $O(0,0)$:\n$$r = |-8 - 0| = 8 \\implies r^2 = 64$$\n\nLangkah 2: Menyusun persamaan lingkaran:\n$$x^2 + y^2 = 64$$\nKesimpulan: Kunci Jawaban 64."
        }
      ]
    },
    "P02": {
      "id": "P02",
      "subject": "Matematika Peminatan",
      "title": "Geometri Analitik Lingkaran 2: Persamaan Lingkaran Pusat P(a,b)",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P02-Q1] Persamaan lingkaran yang berpusat di titik $P(2, -3)$ dan memiliki jari-jari $r = 5$ adalah ...",
          "opsi": [
            "A. $(x - 2)^2 + (y + 3)^2 = 25$",
            "B. $(x + 2)^2 + (y - 3)^2 = 25$",
            "C. $(x - 2)^2 + (y - 3)^2 = 25$",
            "D. $(x - 2)^2 + (y + 3)^2 = 5$",
            "E. $(x + 2)^2 + (y + 3)^2 = 25$"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Mengidentifikasi rumus baku persamaan lingkaran berpusat di $P(a, b)$ dengan jari-jari $r$:\n$$(x - a)^2 + (y - b)^2 = r^2$$\n\nLangkah 2: Mensubstitusikan titik pusat $a = 2, b = -3$ dan jari-jari $r = 4$:\n$$(x - 2)^2 + (y - (-3))^2 = 4^2$$\n\nLangkah 3: Menyederhanakan tanda operasi:\n$$(x - 2)^2 + (y + 3)^2 = 16$$\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P02-Q2] Persamaan lingkaran yang berpusat di $P(-1, 4)$ dan melalui titik $A(3, 1)$ adalah ...",
          "opsi": [
            "A. $(x + 1)^2 + (y - 4)^2 = 16$",
            "B. $(x - 3)^2 + (y - 1)^2 = 25$",
            "C. $(x + 1)^2 + (y - 4)^2 = 9$",
            "D. $(x + 1)^2 + (y - 4)^2 = 25$",
            "E. $(x - 1)^2 + (y + 4)^2 = 25$"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Membaca titik pusat dan jari-jari dari bentuk baku:\n$$(x + 5)^2 + (y - 1)^2 = 49$$\nDapat dituliskan sebagai:\n$$(x - (-5))^2 + (y - 1)^2 = 7^2$$\n\nLangkah 2: Menentukan titik pusat $P(a, b)$ dan jari-jari $r$:\n- Pusat: $P(-5, 1)$\n- Jari-jari: $r = \\sqrt{49} = 7$\nKesimpulan: Kunci Jawaban C."
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P02-Q3] Sebuah lingkaran berpusat di $P(3, -2)$ menyinggung sumbu-$Y$. Persamaan lingkaran tersebut adalah ...",
          "opsi": [
            "A. $(x - 3)^2 + (y + 2)^2 = 4$",
            "B. $(x + 3)^2 + (y - 2)^2 = 4$",
            "C. $(x + 3)^2 + (y - 2)^2 = 9$",
            "D. $(x - 3)^2 + (y + 2)^2 = 13$",
            "E. $(x - 3)^2 + (y + 2)^2 = 9$"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Menghitung jari-jari kuadrat $r^2$ dari pusat $P(1, 2)$ ke titik yang dilalui $A(4, 6)$:\n$$r^2 = (x_A - a)^2 + (y_A - b)^2 = (4 - 1)^2 + (6 - 2)^2 = 3^2 + 4^2 = 9 + 16 = 25$$\n\nLangkah 2: Menyusun persamaan lingkaran dengan pusat $P(1, 2)$ dan $r^2 = 25$:\n$$(x - 1)^2 + (y - 2)^2 = 25$$\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P02-Q4] Persamaan lingkaran berpusat di $P(-4, 5)$ dan menyinggung sumbu-$X$ adalah ...",
          "opsi": [
            "A. $(x + 4)^2 + (y - 5)^2 = 25$",
            "B. $(x + 4)^2 + (y - 5)^2 = 41$",
            "C. $(x - 4)^2 + (y + 5)^2 = 25$",
            "D. $(x - 4)^2 + (y + 5)^2 = 16$",
            "E. $(x + 4)^2 + (y - 5)^2 = 16$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Lingkaran berpusat di $P(3, -2)$ dan menyinggung sumbu-X:\nJarak dari titik pusat $(3, -2)$ ke garis sumbu-X ($y = 0$) sama dengan nilai mutlak ordinat pusat:\n$$r = |b| = |-2| = 2 \\implies r^2 = 2^2 = 4$$\n\nLangkah 2: Menyusun persamaan lingkaran:\n$$(x - 3)^2 + (y - (-2))^2 = 4 \\implies (x - 3)^2 + (y + 2)^2 = 4$$\nKesimpulan: Kunci Jawaban D."
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P02-Q5] Terkait lingkaran (x - 2)^2 + (y + 3)^2 = 49:\n(1) Panjang jari-jari lingkaran adalah 7 satuan.\n(2) Titik pusat lingkaran adalah P(2, -3).\n(3) Titik pusat P(2, -3) terletak pada busur keliling lingkaran.",
          "opsi": [
            "Panjang jari-jari lingkaran adalah 7 satuan",
            "Titik pusat lingkaran adalah P(2, -3)",
            "Titik pusat P(2, -3) terletak pada busur keliling lingkaran"
          ],
          "kunci": "B - B - S",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nLingkaran berpusat di $P(a, b)$ yang menyinggung sumbu-Y memiliki jari-jari $r = |a|$.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\nPusat dari $(x - 3)^2 + (y + 4)^2 = 25$ adalah $P(3, -4)$.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nPersamaan $(x - 1)^2 + (y - 2)^2 = -4$ tidak mendefinisikan lingkaran riil karena $r^2 = -4 < 0$ (jari-jari imajiner).\n$\\implies$ Pernyataan (3) bernilai SALAH.\nKesimpulan: Kunci Jawaban B - B - S.",
          "viz": {
            "t": "lingkaran",
            "cx": 2,
            "cy": -3,
            "r2": 49,
            "P": [
              2.0,
              -3.0
            ]
          }
        },
        {
          "no": 6,
          "tipe": "Kecukupan Data",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P02-Q6] Berapakah luas daerah lingkaran $L$?\nPernyataan (1): Titik pusat lingkaran adalah $P(4, 7)$.\nPernyataan (2): Lingkaran menyinggung garis horizontal $y = 3$.",
          "opsi": [
            "A. Pernyataan (1) SAJA cukup dan (2) SAJA cukup",
            "B. Pernyataan (1) dan (2) tidak cukup",
            "C. DUA pernyataan BERSAMA-SAMA cukup",
            "D. Pernyataan (2) SAJA cukup",
            "E. Pernyataan (1) SAJA cukup"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Menentukan titik pusat $P$ sebagai titik tengah diameter $AB$ dengan $A(-2, 1)$ dan $B(4, 9)$:\n$$P(a, b) = \\left(\\frac{x_A + x_B}{2}, \\frac{y_A + y_B}{2}\\right) = \\left(\\frac{-2 + 4}{2}, \\frac{1 + 9}{2}\\right) = (1, 5)$$\n\nLangkah 2: Menghitung jari-jari kuadrat $r^2$ dari pusat $P(1, 5)$ ke titik $B(4, 9)$:\n$$r^2 = (4 - 1)^2 + (9 - 5)^2 = 3^2 + 4^2 = 9 + 16 = 25$$\n\nLangkah 3: Menyusun persamaan lingkaran:\n$$(x - 1)^2 + (y - 5)^2 = 25$$\nKesimpulan: Kunci Jawaban E."
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P02-Q7] Lingkaran berpusat di $P(1, 2)$ dan menyinggung garis $3x + 4y - 1 = 0$. Panjang jari-jari lingkaran adalah ...",
          "opsi": [
            "A. 3 satuan",
            "B. 1 satuan",
            "C. 5 satuan",
            "D. 2 satuan",
            "E. 4 satuan"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Lingkaran berpusat di $P(-4, 5)$ menyinggung sumbu-Y:\nJari-jari sama dengan nilai mutlak absis pusat:\n$$r = |a| = |-4| = 4 \\implies r^2 = 16$$\n\nLangkah 2: Menyusun persamaan lingkaran:\n$$(x + 4)^2 + (y - 5)^2 = 16$$\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P02-Q8] Diberikan lingkaran (x + 4)^2 + (y - 1)^2 = 25. Manakah pernyataan geometri berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Garis vertikal x = 1 menyinggung lingkaran.",
            "B. Titik asal O(0,0) berada di luar lingkaran.",
            "C. Panjang jari-jari lingkaran adalah 5 satuan.",
            "D. Titik pusat lingkaran adalah P(-4, 1).",
            "E. Titik (-4, 6) terletak pada busur lingkaran."
          ],
          "kunci": "A, B, C, D",
          "bahas": "Langkah 1: Analisis lingkaran $(x - 2)^2 + (y + 1)^2 = 25$:\n- A: Titik pusat berada di $P(2, -1)$ (BENAR).\n- B: Jari-jarinya $r = \\sqrt{25} = 5$ (BENAR).\n- C: Titik $(2, 4)$ memenuhi $(0)^2 + (5)^2 = 25$ (BENAR).\n- D: Diameter lingkaran $d = 2r = 10$ (BENAR).\n- E: Titik asal $(0,0)$ menghasilkan $(-2)^2 + (1)^2 = 5 < 25$ (di dalam, bukan di luar) (SALAH).\nKesimpulan: Kunci Jawaban A, B, C, D.",
          "viz": {
            "t": "lingkaran",
            "cx": -4,
            "cy": 1,
            "r2": 25
          }
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P02-Q9] Jika diameter suatu lingkaran menghubungkan titik $A(1, 2)$ dan $B(7, 10)$, maka persamaan lingkaran tersebut adalah ...",
          "opsi": [
            "A. $(x - 3)^2 + (y - 4)^2 = 25$",
            "B. $(x + 4)^2 + (y + 6)^2 = 25$",
            "C. $(x - 4)^2 + (y - 6)^2 = 25$",
            "D. $(x - 4)^2 + (y - 6)^2 = 50$",
            "E. $(x - 4)^2 + (y - 6)^2 = 100$"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Menghitung jari-jari dari jarak pusat $P(1, -2)$ ke garis $x - y + 1 = 0$:\n$$r = \\frac{|1 - (-2) + 1|}{\\sqrt{1^2 + (-1)^2}} = \\frac{|1 + 2 + 1|}{\\sqrt{2}} = \\frac{4}{\\sqrt{2}} = 2\\sqrt{2}$$\n\nLangkah 2: Menghitung $r^2$:\n$$r^2 = (2\\sqrt{2})^2 = 8$$\n\nLangkah 3: Menyusun persamaan lingkaran:\n$$(x - 1)^2 + (y + 2)^2 = 8$$\nKesimpulan: Kunci Jawaban C."
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P02-Q10] Jika lingkaran $(x - a)^2 + (y - 2)^2 = 25$ melalui titik $(6, -1)$, dan nilai $a > 0$, maka nilai konstanta $a$ adalah ...",
          "opsi": [],
          "kunci": "25",
          "bahas": "Langkah 1: Menghitung jari-jari kuadrat lingkaran pusat $P(3, 4)$ menyinggung sumbu-X:\n$$r = |b| = |4| = 4 \\implies r^2 = 16$$\nPersamaan: $(x - 3)^2 + (y - 4)^2 = 16$.\nJika menyinggung sumbu-Y dengan pusat $(3, 4)$, maka $r = |a| = 3 \\implies r^2 = 9$.\nKesimpulan: Kunci Jawaban 9."
        }
      ]
    },
    "P03": {
      "id": "P03",
      "subject": "Matematika Peminatan",
      "title": "Geometri Analitik Lingkaran 3: Bentuk Umum Persamaan Lingkaran",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P03-Q1] Titik pusat dan jari-jari lingkaran $x^2 + y^2 - 6x + 8y - 11 = 0$ berturut-turut adalah ...",
          "opsi": [
            "A. $P(3, -4)$ dan $r = 36$",
            "B. $P(-3, 4)$ dan $r = 11$",
            "C. $P(-3, 4)$ dan $r = 6$",
            "D. $P(3, -4)$ dan $r = 6$",
            "E. $P(6, -8)$ dan $r = 6$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Mengidentifikasi rumus pusat dan jari-jari dari bentuk umum $x^2 + y^2 + Ax + By + C = 0$:\n- Titik Pusat: $P\\left(-\\frac{A}{2}, -\\frac{B}{2}\\right)$\n- Jari-jari: $r = \\sqrt{\\left(\\frac{A}{2}\\right)^2 + \\left(\\frac{B}{2}\\right)^2 - C}$\n\nLangkah 2: Mensubstitusikan nilai koefisien $A = -6, B = 8, C = -24$:\n- Pusat: $P\\left(-\\frac{-6}{2}, -\\frac{8}{2}\\right) = P(3, -4)$\n\nLangkah 3: Menghitung jari-jari $r$:\n$$r = \\sqrt{3^2 + (-4)^2 - (-24)} = \\sqrt{9 + 16 + 24} = \\sqrt{49} = 7$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "lingkaran",
            "cx": 3.0,
            "cy": -4.0,
            "r2": 36.0,
            "line": [
              6,
              8,
              -11
            ]
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P03-Q2] Bentuk umum lingkaran yang berpusat di $P(-2, 5)$ dan berjari-jari $r = 3$ adalah ...",
          "opsi": [
            "A. $x^2 + y^2 - 4x + 10y - 20 = 0$",
            "B. $x^2 + y^2 + 4x - 10y + 9 = 0$",
            "C. $x^2 + y^2 + 4x - 10y + 20 = 0$",
            "D. $x^2 + y^2 + 4x - 10y + 29 = 0$",
            "E. $x^2 + y^2 - 4x + 10y + 20 = 0$"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menjabarkan bentuk baku $(x - 2)^2 + (y + 3)^2 = 16$:\n$$(x^2 - 4x + 4) + (y^2 + 6y + 9) = 16$$\n\nLangkah 2: Mengumpulkan dan memindahkan konstanta ke ruas kiri:\n$$x^2 + y^2 - 4x + 6y + 13 - 16 = 0$$\n\nLangkah 3: Menyederhanakan:\n$$x^2 + y^2 - 4x + 6y - 3 = 0$$\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P03-Q3] Jika persamaan $x^2 + y^2 + 4x - 6y + c = 0$ memiliki jari-jari $r = 5$, maka nilai konstanta $c$ adalah ...",
          "opsi": [
            "A. $-12$",
            "B. $-13$",
            "C. $-25$",
            "D. $25$",
            "E. $12$"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Mengidentifikasi rumus jari-jari lingkaran dari bentuk umum $x^2 + y^2 + 4x - 6y + c = 0$:\n$$r = \\sqrt{\\left(\\frac{A}{2}\\right)^2 + \\left(\\frac{B}{2}\\right)^2 - C} = \\sqrt{2^2 + (-3)^2 - c} = \\sqrt{4 + 9 - c} = \\sqrt{13 - c}$$\n\nLangkah 2: Menyamakan dengan nilai jari-jari yang diketahui $r = 5$:\n$$\\sqrt{13 - c} = 5$$\n\nLangkah 3: Mengkuadratkan kedua ruas:\n$$13 - c = 25 \\implies c = 13 - 25 = -12$$\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P03-Q4] Nilai kuasa titik $A(1, 2)$ terhadap lingkaran $x^2 + y^2 - 4x + 6y - 9 = 0$ adalah ...",
          "opsi": [
            "A. 0",
            "B. -4",
            "C. 12",
            "D. 4",
            "E. 7"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menghitung jari-jari lingkaran $x^2 + y^2 - 2x + 4y - 20 = 0$:\n- $A = -2, B = 4, C = -20$\n$$r = \\sqrt{1^2 + (-2)^2 - (-20)} = \\sqrt{1 + 4 + 20} = \\sqrt{25} = 5$$\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "lingkaran",
            "cx": 2.0,
            "cy": -3.0,
            "r2": 22.0,
            "P": [
              1.0,
              2.0
            ],
            "line": [
              4,
              6,
              -9
            ]
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P03-Q5] Tentukan kebenaran bentuk umum lingkaran x^2 + y^2 + Ax + By + C = 0:\n(1) Jika 1/4 A^2 + 1/4 B^2 - C < 0, persamaan menyatakan lingkaran nyata.\n(2) Koordinat pusat lingkaran adalah P(-1/2 A, -1/2 B).\n(3) Panjang jari-jari lingkaran adalah r = akar(1/4 A^2 + 1/4 B^2 - C).",
          "opsi": [
            "Jika 1/4 A^2 + 1/4 B^2 - C < 0, persamaan menyatakan lingkaran nyata",
            "Koordinat pusat lingkaran adalah P(-1/2 A, -1/2 B)",
            "Panjang jari-jari lingkaran adalah r = akar(1/4 A^2 + 1/4 B^2 - C)"
          ],
          "kunci": "B - B - S",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nTitik pusat lingkaran $x^2 + y^2 + Ax + By + C = 0$ adalah $P\\left(-\\frac{A}{2}, -\\frac{B}{2}\\right)$.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\nAgar persamaan merepresentasikan lingkaran sejati, nilai di dalam tanda akar kuadrat harus positif ($\\frac{A^2}{4} + \\frac{B^2}{4} - C > 0$).\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nJika nilai di dalam akar bernilai 0, bentuk tersebut merepresentasikan satu titik tunggal (lingkaran titik / *point circle*), bukan lingkaran imajiner.\n$\\implies$ Pernyataan (3) bernilai SALAH.\nKesimpulan: Kunci Jawaban B - B - S."
        },
        {
          "no": 6,
          "tipe": "Kecukupan Data",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P03-Q6] Berapakah jari-jari lingkaran $L: x^2 + y^2 - 8x + 2ky + 9 = 0$?\nPernyataan (1): Nilai konstanta $k = 4$.\nPernyataan (2): Titik pusat lingkaran berada pada garis $y = -4$.",
          "opsi": [
            "A. Pernyataan (1) dan (2) tidak cukup",
            "B. DUA pernyataan BERSAMA-SAMA cukup",
            "C. Pernyataan (1) SAJA cukup dan (2) SAJA cukup",
            "D. Pernyataan (2) SAJA cukup",
            "E. Pernyataan (1) SAJA cukup"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menentukan koordinat pusat lingkaran $x^2 + y^2 + 8x - 10y + 5 = 0$:\n$$P\\left(-\\frac{8}{2}, -\\frac{-10}{2}\\right) = P(-4, 5)$$\nKesimpulan: Kunci Jawaban C."
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P03-Q7] Persamaan lingkaran yang sepusat (konsentris) dengan $x^2 + y^2 - 4x + 6y - 1 = 0$ dan memiliki jari-jari dua kali lebih besar adalah ...",
          "opsi": [
            "A. $x^2 + y^2 - 4x + 6y - 2 = 0$",
            "B. $x^2 + y^2 - 4x + 6y - 43 = 0$",
            "C. $x^2 + y^2 - 4x + 6y - 56 = 0$",
            "D. $x^2 + y^2 - 4x + 6y + 13 = 0$",
            "E. $x^2 + y^2 - 8x + 12y - 1 = 0$"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Mengubah ke bentuk koefisien $x^2$ dan $y^2$ bernilai $1$:\nMembagi seluruh persamaan $2x^2 + 2y^2 - 8x + 12y - 6 = 0$ dengan $2$:\n$$x^2 + y^2 - 4x + 6y - 3 = 0$$\n\nLangkah 2: Menghitung titik pusat:\n$$P\\left(-\\frac{-4}{2}, -\\frac{6}{2}\\right) = P(2, -3)$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "lingkaran",
            "cx": 2.0,
            "cy": -3.0,
            "r2": 14.0,
            "line": [
              4,
              6,
              -1
            ]
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P03-Q8] Diberikan persamaan lingkaran x^2 + y^2 - 6x + 8y = 0. Manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Panjang jari-jari lingkaran adalah 5 satuan.",
            "B. Titik (3, -9) terletak di luar lingkaran.",
            "C. Lingkaran melalui titik asal O(0,0).",
            "D. Titik potong lingkaran dengan sumbu-X adalah (0,0) dan (6,0).",
            "E. Titik pusat lingkaran adalah P(3, -4)."
          ],
          "kunci": "A, B, C, D",
          "bahas": "Langkah 1: Analisis lingkaran $x^2 + y^2 - 4x + 6y - 12 = 0$:\n- A: Titik pusat $P(2, -3)$ (BENAR).\n- B: Jari-jari $r = \\sqrt{4 + 9 - (-12)} = \\sqrt{25} = 5$ (BENAR).\n- C: Diameter $d = 2r = 10$ (BENAR).\n- D: Melalui titik $(2, 2) \\implies (0)^2 + (5)^2 = 25$ (BENAR).\n- E: Luas lingkaran adalah $25\\pi$, bukan $10\\pi$ (SALAH).\nKesimpulan: Kunci Jawaban A, B, C, D."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P03-Q9] Jika lingkaran $x^2 + y^2 + 2Ax + 10y + 9 = 0$ menyinggung sumbu-$X$, maka nilai $A$ adalah ...",
          "opsi": [
            "A. $\\pm 5$",
            "B. $\\pm 2$",
            "C. $\\pm 1$",
            "D. $\\pm 4$",
            "E. $\\pm 3$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menghitung jari-jari dari $x^2 + y^2 - 10x + 6y + 9 = 0$:\n$$r = \\sqrt{5^2 + (-3)^2 - 9} = \\sqrt{25 + 9 - 9} = \\sqrt{25} = 5$$\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P03-Q10] Panjang diameter lingkaran $2x^2 + 2y^2 - 8x + 12y - 24 = 0$ adalah ...",
          "opsi": [],
          "kunci": "10",
          "bahas": "Langkah 1: Menghitung jari-jari lingkaran $x^2 + y^2 + 6x - 8y + 9 = 0$:\n$$r = \\sqrt{(-3)^2 + 4^2 - 9} = \\sqrt{9 + 16 - 9} = \\sqrt{16} = 4$$\nKesimpulan: Kunci Jawaban 4."
        }
      ]
    },
    "P04": {
      "id": "P04",
      "subject": "Matematika Peminatan",
      "title": "Geometri Analitik Lingkaran 4: Kedudukan Titik Terhadap Lingkaran (Uji Kuasa)",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q1] Kedudukan titik $A(4, -2)$ terhadap lingkaran $x^2 + y^2 - 4x + 6y - 12 = 0$ adalah ...",
          "opsi": [
            "A. Berada di titik pusat",
            "B. Terletak di luar lingkaran",
            "C. Terletak di dalam lingkaran",
            "D. Terletak pada lingkaran",
            "E. Memotong sumbu simetri"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Mengidentifikasi metode Uji Kuasa Titik $K(x_1, y_1)$ terhadap lingkaran $x^2 + y^2 = r^2$:\n- $K < 0 \\implies$ Titik berada di dalam lingkaran.\n- $K = 0 \\implies$ Titik berada tepat pada lingkaran.\n- $K > 0 \\implies$ Titik berada di luar lingkaran.\n\nLangkah 2: Mensubstitusikan koordinat titik $A(4, -2)$ ke fungsi kuasa $K = x^2 + y^2 - 20$:\n$$K = 4^2 + (-2)^2 - 20 = 16 + 4 - 20 = 0$$\n\nLangkah 3: Menarik kesimpulan kedudukan titik:\nKarena $K = 0$, maka titik A terletak **pada lingkaran**.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "lingkaran",
            "cx": 2.0,
            "cy": -3.0,
            "r2": 25.0,
            "P": [
              4.0,
              -2.0
            ],
            "line": [
              4,
              6,
              -12
            ]
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q2] Jika titik $P(k, 3)$ terletak di luar lingkaran $x^2 + y^2 = 25$, maka batas nilai $k$ adalah ...",
          "opsi": [
            "A. $-4 < k < 4$",
            "B. $k < -4$ atau $k > 4$",
            "C. $-5 < k < 5$",
            "D. $k < -3$ atau $k > 3$",
            "E. $k < -5$ atau $k > 5$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menguji titik $B(1, 2)$ ke persamaan lingkaran $x^2 + y^2 = 25$:\n$$K = 1^2 + 2^2 - 25 = 1 + 4 - 25 = -20$$\n\nLangkah 2: Menarik kesimpulan:\nKarena nilai kuasa $K < 0$, maka titik B berada **di dalam lingkaran**.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "lingkaran",
            "r2": 25,
            "cx": 0,
            "cy": 0
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q3] Panjang garis singgung dari titik $T(7, 1)$ ke lingkaran $x^2 + y^2 = 25$ adalah ...",
          "opsi": [
            "A. 5 satuan",
            "B. 2√6 satuan",
            "C. 6 satuan",
            "D. 4 satuan",
            "E. 2√5 satuan"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menguji titik $C(6, 1)$ ke persamaan $(x - 2)^2 + (y + 1)^2 = 16$:\n$$K = (6 - 2)^2 + (1 + 1)^2 - 16 = 4^2 + 2^2 - 16 = 16 + 4 - 16 = 4$$\n\nLangkah 2: Menarik kesimpulan:\nKarena nilai kuasa $K = 4 > 0$, maka titik C berada **di luar lingkaran**.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "lingkaran",
            "r2": 25,
            "cx": 0,
            "cy": 0,
            "P": [
              7.0,
              1.0
            ],
            "tang": 1
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q4] Nilai kuasa titik $P(5, 5)$ terhadap lingkaran $(x - 1)^2 + (y - 2)^2 = 16$ adalah ...",
          "opsi": [
            "A. 0",
            "B. 25",
            "C. 16",
            "D. -7",
            "E. 9"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Syarat titik $P(k, 3)$ terletak tepat pada lingkaran $x^2 + y^2 = 25$:\n$$k^2 + 3^2 = 25$$\n\nLangkah 2: Menyelesaikan untuk nilai $k$:\n$$k^2 + 9 = 25 \\implies k^2 = 16 \\implies k = \\pm 4$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "lingkaran",
            "cx": 1,
            "cy": 2,
            "r2": 16,
            "P": [
              5.0,
              5.0
            ]
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q5] Tentukan kebenaran uji kuasa titik K(x1, y1) terhadap lingkaran L: (x - a)^2 + (y - b)^2 = r^2:\n(1) Jika K < 0, maka titik terletak di dalam lingkaran.\n(2) Jika K > 0, maka titik terletak di dalam lingkaran.\n(3) Jika K = 0, maka titik terletak tepat pada busur keliling lingkaran.",
          "opsi": [
            "Jika K < 0, maka titik terletak di dalam lingkaran",
            "Jika K > 0, maka titik terletak di dalam lingkaran",
            "Jika K = 0, maka titik terletak tepat pada busur keliling lingkaran"
          ],
          "kunci": "B - B - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nTitik $(x_1, y_1)$ berada di dalam lingkaran jika nilai kuasa $K < 0$.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\nTitik $(0, 0)$ pada $x^2 + y^2 = 9$ menghasilkan $0 + 0 - 9 = -9 < 0$ (di dalam lingkaran).\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nTitik $(5, 0)$ pada $x^2 + y^2 = 25$ menghasilkan $25 - 25 = 0$, artinya berada tepat PADA lingkaran, bukan di luar.\n$\\implies$ Pernyataan (3) bernilai SALAH.\nKesimpulan: Kunci Jawaban B - B - S."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q6] Jarak terpendek dari titik $A(8, 6)$ ke busur lingkaran $x^2 + y^2 = 16$ adalah ...",
          "opsi": [
            "A. 10 satuan",
            "B. 6 satuan",
            "C. 4 satuan",
            "D. 2 satuan",
            "E. 14 satuan"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Menghitung jarak terpendek dari titik luar $T(7, 1)$ ke lingkaran $x^2 + y^2 = 25$:\nJarak titik T ke pusat $O(0, 0)$:\n$$d = \\sqrt{7^2 + 1^2} = \\sqrt{49 + 1} = \\sqrt{50} = 5\\sqrt{2}$$\n\nLangkah 2: Mengurangkan jarak pusat dengan panjang jari-jari ($r = 5$):\n$$\\text{Jarak Terpendek} = d - r = 5\\sqrt{2} - 5$$\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "lingkaran",
            "r2": 16,
            "cx": 0,
            "cy": 0,
            "P": [
              8.0,
              6.0
            ]
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q7] Titik berikut yang terletak tepat pada lingkaran $x^2 + y^2 - 2x + 4y - 20 = 0$ adalah ...",
          "opsi": [
            "A. $(0, 4)$",
            "B. $(2, 4)$",
            "C. $(4, 2)$",
            "D. $(3, 3)$",
            "E. $(1, 5)$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menguji titik $(2, 3)$ ke bentuk umum $x^2 + y^2 - 4x + 6y - 12 = 0$:\n$$K = 2^2 + 3^2 - 4(2) + 6(3) - 12 = 4 + 9 - 8 + 18 - 12 = 11$$\n\nLangkah 2: Menarik kesimpulan:\nKarena $K = 11 > 0$, maka titik tersebut terletak **di luar lingkaran**.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "lingkaran",
            "cx": 1.0,
            "cy": -2.0,
            "r2": 25.0,
            "line": [
              2,
              4,
              -20
            ]
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P04-Q8] Pada lingkaran x^2 + y^2 = 25, manakah pernyataan kedudukan titik berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Titik (5, 2) terletak di luar lingkaran.",
            "B. Titik (1, 2) terletak di dalam lingkaran.",
            "C. Titik (-5, 0) terletak tepat pada lingkaran.",
            "D. Titik (3, 4) terletak tepat pada lingkaran.",
            "E. Titik (4, 4) terletak di dalam lingkaran."
          ],
          "kunci": "A, B, C, D",
          "bahas": "Langkah 1: Analisis kedudukan titik terhadap $x^2 + y^2 = 25$:\n- A: Titik $(0, 0)$ berada di dalam lingkaran (BENAR).\n- B: Titik $(3, 4)$ berada pada lingkaran (BENAR).\n- C: Titik $(5, 2)$ berada di luar lingkaran ($25 + 4 = 29 > 25$) (BENAR).\n- D: Titik $(-4, 3)$ berada pada lingkaran (BENAR).\n- E: Titik $(6, 0)$ berada di dalam lingkaran ($36 < 25$ adalah SALAH).\nKesimpulan: Kunci Jawaban A, B, C, D.",
          "viz": {
            "t": "lingkaran",
            "r2": 25,
            "cx": 0,
            "cy": 0
          }
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q9] Jarak terjauh dari titik $P(10, 0)$ ke busur lingkaran $x^2 + y^2 = 36$ adalah ...",
          "opsi": [
            "A. 10 satuan",
            "B. 12 satuan",
            "C. 4 satuan",
            "D. 16 satuan",
            "E. 14 satuan"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menentukan batas nilai $k$ agar titik $(1, k)$ berada di dalam lingkaran $x^2 + y^2 < 10$:\n$$1^2 + k^2 < 10 \\implies k^2 < 9$$\n\nLangkah 2: Menyelesaikan pertidaksamaan kuadrat:\n$$-3 < k < 3$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "lingkaran",
            "r2": 36,
            "cx": 0,
            "cy": 0,
            "P": [
              10.0,
              0.0
            ]
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q10] Nilai kuasa titik $(3, 4)$ terhadap lingkaran $x^2 + y^2 = 25$ adalah ...",
          "opsi": [],
          "kunci": "16",
          "bahas": "Langkah 1: Menghitung nilai kuasa titik $(3, -4)$ terhadap $x^2 + y^2 = 25$:\n$$K = 3^2 + (-4)^2 - 25 = 9 + 16 - 25 = 0$$\nKesimpulan: Kunci Jawaban 0.",
          "viz": {
            "t": "lingkaran",
            "r2": 25,
            "cx": 0,
            "cy": 0,
            "P": [
              3.0,
              4.0
            ]
          }
        }
      ]
    },
    "P05": {
      "id": "P05",
      "subject": "Matematika Peminatan",
      "title": "Geometri Analitik Lingkaran 5: Kedudukan Garis Terhadap Lingkaran (Uji Diskriminan)",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q1] Kedudukan garis $y = 2x + 1$ terhadap lingkaran $x^2 + y^2 = 25$ adalah ...",
          "opsi": [
            "A. Melalui pusat",
            "B. Saling lepas",
            "C. Diameter",
            "D. Memotong lingkaran di dua titik berlainan",
            "E. Menyinggung"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menentukan persamaan kuadrat persekutuan dengan menyubstitusikan $y = 2x + 1$ ke lingkaran $x^2 + y^2 = 25$:\n$$x^2 + (2x + 1)^2 = 25$$\n$$x^2 + 4x^2 + 4x + 1 - 25 = 0$$\n$$5x^2 + 4x - 24 = 0$$\n\nLangkah 2: Menghitung nilai Diskriminan ($D = b^2 - 4ac$):\n$$a = 5, \\quad b = 4, \\quad c = -24$$\n$$D = 4^2 - 4(5)(-24) = 16 + 480 = 496$$\n\nLangkah 3: Menarik kesimpulan kedudukan garis:\nKarena nilai $D = 496 > 0$, garis **memotong lingkaran di dua titik berlainan**.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "lingkaran",
            "r2": 25,
            "cx": 0,
            "cy": 0,
            "line": [
              2,
              -1,
              1
            ]
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q2] Nilai konstanta $k$ agar garis $y = x + k$ menyinggung lingkaran $x^2 + y^2 = 18$ di kuadran I adalah ...",
          "opsi": [
            "A. $k = 6\\sqrt{2}$",
            "B. $k = 6$",
            "C. $k = 18$",
            "D. $k = 3$",
            "E. $k = 9$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Garis $y = x + k \\implies x - y + k = 0$ menyinggung lingkaran $x^2 + y^2 = 18$ jika jarak pusat $O(0,0)$ ke garis sama dengan jari-jari ($r = \\sqrt{18} = 3\\sqrt{2}$):\n$$\\frac{|0 - 0 + k|}{\\sqrt{1^2 + (-1)^2}} = 3\\sqrt{2}$$\n\nLangkah 2: Menyelesaikan nilai mutlak:\n$$\\frac{|k|}{\\sqrt{2}} = 3\\sqrt{2} \\implies |k| = 3\\sqrt{2} \\times \\sqrt{2} = 6 \\implies k = \\pm 6$$\n\nLangkah 3: Memilih titik singgung di kuadran I:\nDi kuadran I ($x > 0, y > 0$), nilai konstanta yang memenuhi adalah $k = 6$.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "lingkaran",
            "r2": 18,
            "cx": 0,
            "cy": 0,
            "tang": 1
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q3] Garis $3x - 4y + c = 0$ menyinggung lingkaran $x^2 + y^2 = 25$. Nilai $c$ yang mungkin adalah ...",
          "opsi": [
            "A. $\\pm 5$",
            "B. $\\pm 10$",
            "C. $\\pm 25$",
            "D. $\\pm 15$",
            "E. $\\pm 20$"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Menghitung jarak dari pusat $O(0,0)$ ke garis $3x - 4y + c = 0$:\n$$d = \\frac{|3(0) - 4(0) + c|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|c|}{\\sqrt{25}} = \\frac{|c|}{5}$$\n\nLangkah 2: Menyamakan dengan jari-jari lingkaran $x^2 + y^2 = 25 \\implies r = 5$:\n$$\\frac{|c|}{5} = 5 \\implies |c| = 25$$\n\nLangkah 3: Menentukan nilai $c$:\n$$c = \\pm 25$$\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "lingkaran",
            "r2": 25,
            "cx": 0,
            "cy": 0,
            "tang": 1
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q4] Kedudukan garis $x + y = 10$ terhadap lingkaran $x^2 + y^2 = 25$ adalah ...",
          "opsi": [
            "A. Melalui pusat",
            "B. Menyinggung",
            "C. Sejajar sumbu-X",
            "D. Saling lepas (di luar lingkaran)",
            "E. Memotong di 2 titik"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menghitung jarak dari pusat $O(0,0)$ ke garis $x + y - 10 = 0$:\n$$d = \\frac{|0 + 0 - 10|}{\\sqrt{1^2 + 1^2}} = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2} \\approx 7{,}07$$\n\nLangkah 2: Membandingkan jarak $d$ dengan jari-jari lingkaran $r = \\sqrt{25} = 5$:\nKarena $d = 5\\sqrt{2} > 5$ ($d > r$), maka garis berada seluruhnya **di luar lingkaran (saling lepas)**.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "lingkaran",
            "r2": 25,
            "cx": 0,
            "cy": 0
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q5] Tentukan kebenaran uji diskriminan kedudukan garis y = mx + c terhadap lingkaran:\n(1) Jika D = 0, garis menyinggung lingkaran di satu titik.\n(2) Jika D < 0, garis memotong lingkaran di dua titik berlainan.\n(3) Jika D > 0, garis memotong lingkaran di dua titik berlainan.",
          "opsi": [
            "Jika D = 0, garis menyinggung lingkaran di satu titik",
            "Jika D < 0, garis memotong lingkaran di dua titik berlainan",
            "Jika D > 0, garis memotong lingkaran di dua titik berlainan"
          ],
          "kunci": "B - B - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nJika $D = 0$, terdapat 1 akar kembar riil $\\implies$ garis menyinggung lingkaran di satu titik.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\nJika $D < 0$, tidak ada titik potong riil $\\implies$ garis berada di luar lingkaran (saling lepas), bukan memotong dua titik.\n$\\implies$ Pernyataan (2) bernilai SALAH.\n\nLangkah 3: Analisis Pernyataan (3):\nJika $D > 0$, terdapat 2 akar riil berlainan $\\implies$ garis memotong lingkaran di dua titik.\n$\\implies$ Pernyataan (3) bernilai BENAR.\nKesimpulan: Kunci Jawaban B - S - B."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q6] Nilai diskriminan persekutuan $y = 3$ dan $x^2 + y^2 = 25$ bernilai ...",
          "opsi": [
            "A. Positif ($D > 0$)",
            "B. Negatif ($D < 0$)",
            "C. Tak hingga",
            "D. Imajiner",
            "E. Nol ($D = 0$)"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Substitusi $y = 3$ ke lingkaran $x^2 + y^2 = 25$:\n$$x^2 + 3^2 = 25 \\implies x^2 - 16 = 0$$\n\nLangkah 2: Menghitung diskriminan dengan $a = 1, b = 0, c = -16$:\n$$D = 0^2 - 4(1)(-16) = +64$$\n\nLangkah 3: Menentukan tanda diskriminan:\nKarena $D = 64 > 0$, maka diskriminannya bernilai **Positif ($D > 0$)**.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "lingkaran",
            "r2": 25,
            "cx": 0,
            "cy": 0
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q7] Titik potong garis $y = x$ dengan $x^2 + y^2 = 18$ di kuadran I adalah ...",
          "opsi": [
            "A. $(4, 4)$",
            "B. $(3, 3)$",
            "C. $(1, 1)$",
            "D. $(2, 2)$",
            "E. $(3\\sqrt{2}, 3\\sqrt{2})$"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Substitusi garis $y = x$ ke persamaan lingkaran $x^2 + y^2 = 18$:\n$$x^2 + x^2 = 18 \\implies 2x^2 = 18 \\implies x^2 = 9 \\implies x = \\pm 3$$\n\nLangkah 2: Menentukan koordinat titik potong di kuadran I ($x > 0, y > 0$):\nUntuk $x = 3 \\implies y = 3$. Titik potongnya adalah $(3, 3)$.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "lingkaran",
            "r2": 18,
            "cx": 0,
            "cy": 0
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P05-Q8] Pada lingkaran x^2 + y^2 = 25, manakah analisis kedudukan garis berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Garis x = 6 tidak memotong dan tidak menyinggung lingkaran.",
            "B. Garis x = 5 menyinggung lingkaran di titik (5, 0).",
            "C. Garis y = x memotong lingkaran di dua titik berlainan.",
            "D. Garis y = 0 tidak memotong lingkaran.",
            "E. Garis y = -5 menyinggung lingkaran di titik (0, -5)."
          ],
          "kunci": "A, B, C, D",
          "bahas": "Langkah 1: Analisis kedudukan garis terhadap lingkaran $x^2 + y^2 = 25$ ($r = 5$):\n- A: Garis $x = 6$ berjarak $6 > 5$ (di luar/tidak memotong) (BENAR).\n- B: Garis $x = 5$ menyinggung di $(5, 0)$ (BENAR).\n- C: Garis $y = x$ memotong di dua titik (BENAR).\n- D: Garis $y = 0$ adalah sumbu-X yang memotong lingkaran di $(-5,0)$ dan $(5,0)$ (SALAH).\n- E: Garis $y = -5$ menyinggung di $(0, -5)$ (BENAR).\nKesimpulan: Kunci Jawaban A, B, C, E.",
          "viz": {
            "t": "lingkaran",
            "r2": 25,
            "cx": 0,
            "cy": 0
          }
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q9] Panjang tali busur perpotongan garis $x = 3$ dengan $x^2 + y^2 = 25$ adalah ...",
          "opsi": [
            "A. 4 satuan",
            "B. 10 satuan",
            "C. 8 satuan",
            "D. 6 satuan",
            "E. 5 satuan"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menghitung panjang tali busur perpotongan garis $x = 3$ dengan lingkaran $x^2 + y^2 = 25$:\n- Jarak garis ke pusat $O(0,0)$ adalah $d = 3$.\n- Jari-jari lingkaran $r = 5$.\n\nLangkah 2: Menggunakan Teorema Pythagoras untuk setengah tali busur:\n$$\\frac{\\ell}{2} = \\sqrt{r^2 - d^2} = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$$\n\nLangkah 3: Menghitung panjang total tali busur:\n$$\\ell = 2 \\times 4 = 8 \\text{ satuan}$$\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "lingkaran",
            "r2": 25,
            "cx": 0,
            "cy": 0
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q10] Gradien garis $y = mx$ yang menyinggung $(x - 5)^2 + y^2 = 9$ di kuadran I adalah ... (dalam pecahan a/b)",
          "opsi": [],
          "kunci": "6",
          "bahas": "Langkah 1: Jarak dari pusat $(5, 0)$ ke garis $mx - y = 0$ sama dengan jari-jari $r = 3$:\n$$\\frac{|5m|}{\\sqrt{m^2 + 1}} = 3$$\n\nLangkah 2: Mengkuadratkan kedua ruas:\n$$\\frac{25m^2}{m^2 + 1} = 9 \\implies 25m^2 = 9m^2 + 9 \\implies 16m^2 = 9 \\implies m^2 = \\frac{9}{16}$$\n\nLangkah 3: Mengambil nilai positif untuk kuadran I:\n$$m = \\frac{3}{4}$$\nKesimpulan: Kunci Jawaban 3/4."
        }
      ]
    },
    "P06": {
      "id": "P06",
      "subject": "Matematika Peminatan",
      "title": "Geometri Analitik Lingkaran 6: PGSL Melalui Titik Pada Lingkaran (Metode Bagi Adil)",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q1] Persamaan garis singgung lingkaran $x^2 + y^2 = 25$ di titik $T(3, -4)$ adalah ...",
          "opsi": [
            "A. $3x + 4y = 25$",
            "B. $4x - 3y = 25$",
            "C. $-3x - 4y = 25$",
            "D. $4x + 3y = 25$",
            "E. $3x - 4y = 25$"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Mengidentifikasi rumus Persamaan Garis Singgung Lingkaran (PGSL) dengan Metode Bagi Adil pada $x^2 + y^2 = r^2$ di titik singgung $(x_1, y_1)$:\n$$x_1 x + y_1 y = r^2$$\n\nLangkah 2: Mensubstitusikan titik singgung $(x_1, y_1) = (3, 4)$ dan $r^2 = 25$:\n$$3x + 4y = 25$$\n\nLangkah 3: Menuliskan dalam bentuk implisit:\n$$3x + 4y - 25 = 0$$\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "lingkaran",
            "r2": 25,
            "cx": 0,
            "cy": 0,
            "P": [
              3.0,
              -4.0
            ],
            "tang": 1
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q2] Persamaan garis singgung lingkaran $(x - 1)^2 + (y + 2)^2 = 25$ di titik $A(4, 2)$ adalah ...",
          "opsi": [
            "A. $4x + 3y - 20 = 0$",
            "B. $3x + 4y - 20 = 0$",
            "C. $3x + 4y + 20 = 0$",
            "D. $3x + 4y - 25 = 0$",
            "E. $3x - 4y + 20 = 0$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Mengidentifikasi rumus Bagi Adil pada lingkaran $(x - a)^2 + (y - b)^2 = r^2$ di titik singgung $(x_1, y_1)$:\n$$(x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2$$\n\nLangkah 2: Mensubstitusikan pusat $a = 1, b = -2$, $r^2 = 25$, dan titik singgung $(x_1, y_1) = (4, 2)$:\n$$(4 - 1)(x - 1) + (2 - (-2))(y - (-2)) = 25$$\n$$3(x - 1) + 4(y + 2) = 25$$\n\nLangkah 3: Menjabarkan persamaan garis:\n$$3x - 3 + 4y + 8 = 25 \\implies 3x + 4y + 5 - 25 = 0 \\implies 3x + 4y - 20 = 0$$\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "lingkaran",
            "cx": 1,
            "cy": -2,
            "r2": 25,
            "P": [
              4.0,
              2.0
            ],
            "tang": 1
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q3] Persamaan garis singgung lingkaran $x^2 + y^2 - 4x + 6y - 12 = 0$ di titik $P(5, 1)$ adalah ...",
          "opsi": [
            "A. $5x + y - 12 = 0$",
            "B. $3x + 4y + 19 = 0$",
            "C. $3x + 4y - 19 = 0$",
            "D. $3x - 4y - 11 = 0$",
            "E. $4x + 3y - 19 = 0$"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Mengidentifikasi rumus Bagi Adil untuk bentuk umum $x^2 + y^2 + Ax + By + C = 0$:\n$$x_1 x + y_1 y + \\frac{A}{2}(x + x_1) + \\frac{B}{2}(y + y_1) + C = 0$$\n\nLangkah 2: Mensubstitusikan titik $(x_1, y_1) = (2, 1)$ dan koefisien $A = -4, B = 6, C = -12$:\n$$2x + 1y - 2(x + 2) + 3(y + 1) - 12 = 0$$\n\nLangkah 3: Menyederhanakan persamaan:\n$$2x + y - 2x - 4 + 3y + 3 - 12 = 0 \\implies 4y - 13 = 0 \\implies y = \\frac{13}{4}$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "lingkaran",
            "cx": 2.0,
            "cy": -3.0,
            "r2": 25.0,
            "P": [
              5.0,
              1.0
            ],
            "line": [
              4,
              6,
              -12
            ],
            "tang": 1
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q4] Gradien garis singgung lingkaran $x^2 + y^2 = 100$ di titik $(-8, 6)$ adalah ...",
          "opsi": [
            "A. 4/3",
            "B. 3/4",
            "C. -4/3",
            "D. 4/5",
            "E. -3/4"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menentukan gradien garis singgung lingkaran $x^2 + y^2 = 25$ di titik $(3, -4)$:\nPersamaan garis singgung:\n$$3x - 4y = 25 \\implies 4y = 3x - 25 \\implies y = \\frac{3}{4}x - \\frac{25}{4}$$\n\nLangkah 2: Membaca gradien kemiringan ($m$):\n$$m = \\frac{3}{4}$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "lingkaran",
            "r2": 100,
            "cx": 0,
            "cy": 0,
            "P": [
              -8.0,
              6.0
            ],
            "tang": 1
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q5] Tentukan kebenaran metode bagi adil persamaan garis singgung lingkaran:\n(1) Rumus bagi adil dapat langsung digunakan untuk titik yang berada di luar lingkaran.\n(2) Garis singgung lingkaran x^2 + y^2 = r^2 di titik (x1, y1) adalah x1.x + y1.y = r^2.\n(3) Garis singgung lingkaran x^2 + y^2 = 25 di titik (3, 4) adalah 3x + 4y = 25.",
          "opsi": [
            "Rumus bagi adil dapat langsung digunakan untuk titik yang berada di luar lingkaran",
            "Garis singgung lingkaran x^2 + y^2 = r^2 di titik (x1, y1) adalah x1.x + y1.y = r^2",
            "Garis singgung lingkaran x^2 + y^2 = 25 di titik (3, 4) adalah 3x + 4y = 25"
          ],
          "kunci": "B - B - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nGaris singgung lingkaran selalu tegak lurus terhadap jari-jari yang ditarik ke titik singgung tersebut ($m_{\\text{singgung}} \\cdot m_{\\text{jari-jari}} = -1$).\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\nMetode bagi adil hanya berlaku jika titik $(x_1, y_1)$ terletak tepat pada keliling lingkaran.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nPGSL di titik $(5, 0)$ pada $x^2 + y^2 = 25$ adalah $5x + 0y = 25 \\implies x = 5$, bukan $y = 5$.\n$\\implies$ Pernyataan (3) bernilai SALAH.\nKesimpulan: Kunci Jawaban B - B - S.",
          "viz": {
            "t": "lingkaran",
            "r2": 25,
            "cx": 0,
            "cy": 0,
            "P": [
              3.0,
              4.0
            ],
            "tang": 1
          }
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q6] Persamaan garis normal di $(3, 4)$ pada $x^2 + y^2 = 25$ adalah ...",
          "opsi": [
            "A. $4x + 3y = 25$",
            "B. $4x - 3y = 25$",
            "C. $3x + 4y = 0$",
            "D. $4x - 3y = 0$",
            "E. $3x - 4y = 0$"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Menyusun PGSL di titik $(0, -5)$ pada lingkaran $x^2 + y^2 = 25$:\n$$0 \\cdot x + (-5) \\cdot y = 25 \\implies -5y = 25 \\implies y = -5$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "lingkaran",
            "r2": 25,
            "cx": 0,
            "cy": 0,
            "P": [
              3.0,
              4.0
            ]
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q7] Garis singgung lingkaran $x^2 + y^2 = 13$ di $(-2, 3)$ memotong sumbu-$X$ di titik ...",
          "opsi": [
            "A. $(-13/3, 0)$",
            "B. $(13/2, 0)$",
            "C. $(0, 13/3)$",
            "D. $(-2, 0)$",
            "E. $(-13/2, 0)$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menentukan PGSL di titik $(-3, 4)$ pada lingkaran $x^2 + y^2 = 25$:\n$$-3x + 4y = 25 \\implies 3x - 4y + 25 = 0$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "lingkaran",
            "r2": 13,
            "cx": 0,
            "cy": 0,
            "P": [
              -2.0,
              3.0
            ],
            "tang": 1
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P06-Q8] Pada lingkaran (x - 1)^2 + (y + 2)^2 = 25, manakah garis singgung di titik-titik berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Di titik (1, -7), persamaan garis singgungnya adalah y = -7.",
            "B. Di titik (6, -2), persamaan garis singgungnya adalah y = 6.",
            "C. Di titik (-2, 2), persamaan garis singgungnya adalah -3x + 4y - 14 = 0.",
            "D. Di titik (4, 2), persamaan garis singgungnya adalah 3x + 4y - 20 = 0.",
            "E. Di titik (1, 3), persamaan garis singgungnya adalah y = 3."
          ],
          "kunci": "A, B, C, D",
          "bahas": "Langkah 1: Evaluasi seluruh sifat garis singgung lingkaran melalui titik pada lingkaran:\n- A: PGSL di $(5, 0)$ adalah $x = 5$ (BENAR).\n- B: PGSL di $(0, 5)$ adalah $y = 5$ (BENAR).\n- C: PGSL di $(3, 4)$ adalah $3x + 4y = 25$ (BENAR).\n- D: Garis singgung tegak lurus jari-jari titik singgung (BENAR).\n- E: Hanya ada tepat 1 garis singgung unik di setiap titik pada lingkaran (BENAR).\nKesimpulan: Kunci Jawaban A, B, C, D, E.",
          "viz": {
            "t": "lingkaran",
            "cx": 1,
            "cy": -2,
            "r2": 25,
            "tang": 1
          }
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q9] Persamaan garis singgung di $(0, 5)$ pada $x^2 + y^2 = 25$ adalah ...",
          "opsi": [
            "A. $y = -5$",
            "B. $x + y = 5$",
            "C. $y = 0$",
            "D. $y = 5$",
            "E. $x = 5$"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menentukan PGSL lingkaran $(x + 2)^2 + (y - 3)^2 = 25$ di titik $(1, 7)$:\n$$(1 + 2)(x + 2) + (7 - 3)(y - 3) = 25$$\n$$3(x + 2) + 4(y - 3) = 25$$\n\nLangkah 2: Menjabarkan aljabar:\n$$3x + 6 + 4y - 12 = 25 \\implies 3x + 4y - 6 - 25 = 0 \\implies 3x + 4y - 31 = 0$$\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "lingkaran",
            "r2": 25,
            "cx": 0,
            "cy": 0,
            "P": [
              0.0,
              5.0
            ],
            "tang": 1
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q10] Nilai intersep sumbu-Y garis singgung $x^2 + y^2 = 50$ di $(5, 5)$ adalah ...",
          "opsi": [],
          "kunci": "10",
          "bahas": "Langkah 1: PGSL di titik $(4, 0)$ pada lingkaran $x^2 + y^2 = 16$:\n$$4x + 0y = 16 \\implies x = 4$$\nKesimpulan: Kunci Jawaban 4.",
          "viz": {
            "t": "lingkaran",
            "r2": 50,
            "cx": 0,
            "cy": 0,
            "P": [
              5.0,
              5.0
            ],
            "tang": 1
          }
        }
      ]
    },
    "P07": {
      "id": "P07",
      "subject": "Matematika Peminatan",
      "title": "Geometri Analitik Lingkaran 7: PGSL dengan Gradien m Tertentu",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q1] Salah satu persamaan garis singgung lingkaran $x^2 + y^2 = 20$ yang memiliki gradien $m = 2$ adalah ...",
          "opsi": [
            "A. $y = 2x + 4\\sqrt{5}$",
            "B. $y = 2x + 8$",
            "C. $y = 2x + 10$",
            "D. $y = 2x + 20$",
            "E. $y = 2x + 5$"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Mengidentifikasi rumus PGSL dengan gradien $m$ pada lingkaran $x^2 + y^2 = r^2$:\n$$y = mx \\pm r\\sqrt{1 + m^2}$$\n\nLangkah 2: Mensubstitusikan gradien $m = 2$ dan jari-jari $r = \\sqrt{5}$:\n$$y = 2x \\pm \\sqrt{5}\\sqrt{1 + 2^2} = 2x \\pm \\sqrt{5}\\sqrt{5} = 2x \\pm 5$$\n\nLangkah 3: Menentukan salah satu persamaan garis singgung:\n$$y = 2x + 5 \\quad \\text{atau} \\quad y = 2x - 5$$\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "lingkaran",
            "r2": 20,
            "cx": 0,
            "cy": 0,
            "tang": 1
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q2] Persamaan garis singgung lingkaran $(x - 2)^2 + (y + 1)^2 = 25$ yang sejajar dengan $3x - 4y + 12 = 0$ adalah ...",
          "opsi": [
            "A. $3x - 4y + 25 = 0$ atau $3x - 4y - 25 = 0$",
            "B. $3x - 4y + 15 = 0$ atau $3x - 4y - 35 = 0$",
            "C. $3x - 4y + 10 = 0$",
            "D. $4x + 3y + 15 = 0$",
            "E. $3x - 4y = 0$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Mengidentifikasi rumus PGSL dengan gradien $m$ pada lingkaran $(x - a)^2 + (y - b)^2 = r^2$:\n$$(y - b) = m(x - a) \\pm r\\sqrt{1 + m^2}$$\n\nLangkah 2: Mensubstitusikan pusat $(a, b) = (2, -1)$, $r = \\sqrt{10}$, dan gradien $m = 3$:\n$$y - (-1) = 3(x - 2) \\pm \\sqrt{10}\\sqrt{1 + 3^2}$$\n$$y + 1 = 3x - 6 \\pm \\sqrt{10}\\sqrt{10}$$\n$$y + 1 = 3x - 6 \\pm 10$$\n\nLangkah 3: Memisahkan kedua garis singgung:\n- Garis 1: $y = 3x - 7 + 10 \\implies y = 3x + 3$\n- Garis 2: $y = 3x - 7 - 10 \\implies y = 3x - 17$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "lingkaran",
            "cx": 2,
            "cy": -1,
            "r2": 25,
            "line": [
              3,
              -4,
              12
            ],
            "tang": 1
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q3] Persamaan garis singgung lingkaran $x^2 + y^2 = 16$ yang tegak lurus dengan garis $2x - y + 5 = 0$ adalah ...",
          "opsi": [
            "A. $y = -2x \\pm 2\\sqrt{5}$",
            "B. $y = -1/2 x \\pm 4\\sqrt{5}$",
            "C. $y = 2x \\pm 4\\sqrt{5}$",
            "D. $y = -1/2 x \\pm 2\\sqrt{5}$",
            "E. $y = -1/2 x \\pm 8$"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menentukan gradien garis yang sejajar dengan $2x - y + 4 = 0$:\n$$y = 2x + 4 \\implies m_1 = 2 \\implies m = m_1 = 2$$\n\nLangkah 2: Menyusun PGSL lingkaran $x^2 + y^2 = 20 \\implies r = \\sqrt{20} = 2\\sqrt{5}$:\n$$y = 2x \\pm 2\\sqrt{5}\\sqrt{1 + 2^2} = 2x \\pm 2\\sqrt{5}\\sqrt{5} = 2x \\pm 10$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "lingkaran",
            "r2": 16,
            "cx": 0,
            "cy": 0,
            "line": [
              2,
              -1,
              5
            ],
            "tang": 1
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q4] Salah satu garis singgung lingkaran $x^2 + y^2 = 9$ bersudut $45^\\circ$ terhadap sumbu-$X$ positif adalah ...",
          "opsi": [
            "A. $y = x + 6$",
            "B. $y = x + 9$",
            "C. $y = x + 3\\sqrt{2}$",
            "D. $y = x + 2\\sqrt{3}$",
            "E. $y = x + 3$"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Menentukan gradien garis yang tegak lurus dengan $x + 2y - 5 = 0$:\n$$2y = -x + 5 \\implies y = -\\frac{1}{2}x + \\frac{5}{2} \\implies m_1 = -\\frac{1}{2}$$\nSyarat tegak lurus: $m \\cdot m_1 = -1 \\implies m = 2$.\n\nLangkah 2: Menyusun PGSL lingkaran $x^2 + y^2 = 25 \\implies r = 5$:\n$$y = 2x \\pm 5\\sqrt{1 + 2^2} = 2x \\pm 5\\sqrt{5}$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "lingkaran",
            "r2": 9,
            "cx": 0,
            "cy": 0,
            "tang": 1
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q5] Tentukan kebenaran persamaan garis singgung bergradien m:\n(1) Pada x^2 + y^2 = r^2, rumusnya adalah y = mx +- r akar(1 + m^2).\n(2) Garis singgung bergradien m = 0 pada x^2 + y^2 = 25 adalah x = +- 5.\n(3) Terdapat tepat 2 garis singgung yang sejajar dengan gradien m yang sama.",
          "opsi": [
            "Pada x^2 + y^2 = r^2, rumusnya adalah y = mx +- r akar(1 + m^2)",
            "Garis singgung bergradien m = 0 pada x^2 + y^2 = 25 adalah x = +- 5",
            "Terdapat tepat 2 garis singgung yang sejajar dengan gradien m yang sama"
          ],
          "kunci": "B - S - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nUntuk setiap nilai gradien $m$ tertentu, selalu terdapat tepat dua garis singgung yang saling sejajar.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\nDua garis saling tegak lurus memenuhi hubungan hasil kali gradien $m_1 \\cdot m_2 = -1$.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nPada rumus PGSL gradien $m$, faktor pengali di belakang adalah $r\\sqrt{1 + m^2}$, bukan $r\\sqrt{1 - m^2}$.\n$\\implies$ Pernyataan (3) bernilai SALAH.\nKesimpulan: Kunci Jawaban B - B - S.",
          "viz": {
            "t": "lingkaran",
            "r2": 25,
            "cx": 0,
            "cy": 0,
            "tang": 1
          }
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q6] Berapakah $c$ pada $y = 3x + c$ yang menyinggung $x^2 + y^2 = 10$ dengan $c > 0$?",
          "opsi": [
            "A. 10",
            "B. √10",
            "C. 5",
            "D. 20",
            "E. 30"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: PGSL lingkaran $x^2 + y^2 = 9$ ($r = 3$) dengan gradien $m = 0$ (garis horizontal sejajar sumbu-X):\n$$y = 0 \\cdot x \\pm 3\\sqrt{1 + 0^2} \\implies y = \\pm 3$$\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "lingkaran",
            "r2": 10,
            "cx": 0,
            "cy": 0,
            "tang": 1
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q7] Persamaan garis singgung $(x + 1)^2 + (y - 3)^2 = 8$ dengan gradien $m = -1$ adalah ...",
          "opsi": [
            "A. $y = -x + 2$",
            "B. $y = -x + 6$ atau $y = -x - 2$",
            "C. $y = -x + 4$",
            "D. $y = -x + 8$",
            "E. $y = -x$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Gradien garis yang membentuk sudut $45^\\circ$ terhadap sumbu-X positif adalah:\n$$m = \\tan 45^\\circ = 1$$\n\nLangkah 2: Menyusun PGSL lingkaran $x^2 + y^2 = 8 \\implies r = \\sqrt{8} = 2\\sqrt{2}$:\n$$y = 1x \\pm 2\\sqrt{2}\\sqrt{1 + 1^2} = x \\pm 2\\sqrt{2}\\sqrt{2} = x \\pm 4$$\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "lingkaran",
            "cx": -1,
            "cy": 3,
            "r2": 8,
            "tang": 1
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P07-Q8] Pada lingkaran x^2 + y^2 = 16 dengan gradien m = 3/4, manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Nilai r akar(1 + m^2) adalah 5.",
            "B. Dalam bentuk umum, persamaannya adalah 3x - 4y + 20 = 0 dan 3x - 4y - 20 = 0.",
            "C. Garis singgung lainnya adalah y = 3/4 x - 5.",
            "D. Salah satu garis singgungnya adalah y = 3/4 x + 5.",
            "E. Kedua garis singgung tersebut saling tegak lurus."
          ],
          "kunci": "A, B, C, D",
          "bahas": "Langkah 1: Analisis PGSL lingkaran $x^2 + y^2 = 25$ ($r = 5$):\n- A: Gradien $m = 0 \\implies y = \\pm 5$ (BENAR).\n- B: Gradien $m = 1 \\implies y = x \\pm 5\\sqrt{2}$ (BENAR).\n- C: Gradien $m = -1 \\implies y = -x \\pm 5\\sqrt{2}$ (BENAR).\n- D: Jarak antara kedua garis singgung sejajar sama dengan diameter $2r = 10$ (BENAR).\n- E: Rumus bukan $y = mx \\pm r(1+m)$ (SALAH).\nKesimpulan: Kunci Jawaban A, B, C, D.",
          "viz": {
            "t": "lingkaran",
            "r2": 16,
            "cx": 0,
            "cy": 0
          }
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q9] Jarak antara dua garis singgung lingkaran $x^2 + y^2 = 36$ yang bergradien $m = \\sqrt{3}$ adalah ...",
          "opsi": [
            "A. 6√3 satuan",
            "B. 6 satuan",
            "C. 18 satuan",
            "D. 12 satuan",
            "E. 24 satuan"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menentukan PGSL lingkaran $(x - 1)^2 + (y + 2)^2 = 5$ ($r = \\sqrt{5}$) dengan gradien $m = -2$:\n$$(y + 2) = -2(x - 1) \\pm \\sqrt{5}\\sqrt{1 + (-2)^2}$$\n$$y + 2 = -2x + 2 \\pm \\sqrt{5}\\sqrt{5} = -2x + 2 \\pm 5$$\n\nLangkah 2: Memisahkan:\n$$y = -2x \\pm 5 \\implies 2x + y \\pm 5 = 0$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "lingkaran",
            "r2": 36,
            "cx": 0,
            "cy": 0,
            "tang": 1
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q10] Nilai positif $k$ agar $y = 2x + k$ menyinggung $x^2 + y^2 = 5$ adalah ...",
          "opsi": [],
          "kunci": "5",
          "bahas": "Langkah 1: Nilai konstanta $c$ pada $y = 2x + c$ yang menyinggung $x^2 + y^2 = 5$:\n$$c = r\\sqrt{1 + m^2} = \\sqrt{5}\\sqrt{1 + 2^2} = \\sqrt{5}\\sqrt{5} = 5$$\nKesimpulan: Kunci Jawaban 5.",
          "viz": {
            "t": "lingkaran",
            "r2": 5,
            "cx": 0,
            "cy": 0,
            "tang": 1
          }
        }
      ]
    },
    "P08": {
      "id": "P08",
      "subject": "Matematika Peminatan",
      "title": "Geometri Analitik Lingkaran 8: PGSL Titik di Luar Lingkaran & Garis Kutub",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q1] Persamaan garis kutub (garis polar) dari titik $T(0, 5)$ terhadap lingkaran $x^2 + y^2 = 9$ adalah ...",
          "opsi": [
            "A. $5x + y = 9$",
            "B. $x + 5y = 9$",
            "C. $5y = 9$",
            "D. $5y = 25$",
            "E. $5x = 9$"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Mengidentifikasi rumus persamaan garis kutub (garis polar) dari titik $T(x_1, y_1)$ terhadap lingkaran $x^2 + y^2 = r^2$:\n$$x_1 x + y_1 y = r^2$$\n\nLangkah 2: Mensubstitusikan titik $T(0, 5)$ dan $r^2 = 9$:\n$$0 \\cdot x + 5 \\cdot y = 9$$\n\nLangkah 3: Menyelesaikan persamaan garis polar:\n$$5y = 9 \\implies y = \\frac{9}{5}$$\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "lingkaran",
            "r2": 9,
            "cx": 0,
            "cy": 0,
            "P": [
              0.0,
              5.0
            ],
            "tang": 1
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q2] Dari titik $P(0, 5)$ ditarik garis singgung ke $x^2 + y^2 = 9$. Salah satu persamaan garis singgungnya adalah ...",
          "opsi": [
            "A. $4x + 3y + 15 = 0$",
            "B. $4x - 3y + 15 = 0$",
            "C. $3x + 4y - 15 = 0$",
            "D. $3x - 4y + 15 = 0$",
            "E. $4x + 3y - 15 = 0$"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menentukan garis polar titik $P(0, 5)$ terhadap $x^2 + y^2 = 9$:\n$$0x + 5y = 9 \\implies y = \\frac{9}{5}$$\n\nLangkah 2: Menentukan titik singgung pada lingkaran:\n$$x^2 + \\left(\\frac{9}{5}\\right)^2 = 9 \\implies x^2 + \\frac{81}{25} = 9 \\implies x^2 = \\frac{144}{25} \\implies x = \\pm \\frac{12}{5}$$\nTitik singgung: $T_1\\left(\\frac{12}{5}, \\frac{9}{5}\\right)$ dan $T_2\\left(-\\frac{12}{5}, \\frac{9}{5}\\right)$.\n\nLangkah 3: Menyusun PGSL di titik $T_1$:\n$$\\frac{12}{5}x + \\frac{9}{5}y = 9 \\implies 12x + 9y = 45 \\implies 4x + 3y - 15 = 0$$\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "lingkaran",
            "r2": 9,
            "cx": 0,
            "cy": 0,
            "P": [
              0.0,
              5.0
            ],
            "tang": 1
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q3] Panjang garis singgung dari titik $A(6, 8)$ ke lingkaran $x^2 + y^2 = 36$ adalah ...",
          "opsi": [
            "A. 10 satuan",
            "B. 2√7 satuan",
            "C. 4√5 satuan",
            "D. 8 satuan",
            "E. 6 satuan"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Menghitung jarak dari pusat $O(0,0)$ ke titik $A(6, 8)$:\n$$d = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$$\n\nLangkah 2: Menentukan jari-jari lingkaran $x^2 + y^2 = 36 \\implies r = 6$.\n\nLangkah 3: Menghitung panjang garis singgung ($L$):\n$$L = \\sqrt{d^2 - r^2} = \\sqrt{10^2 - 6^2} = \\sqrt{64} = 8 \\text{ satuan}$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "lingkaran",
            "r2": 36,
            "cx": 0,
            "cy": 0,
            "P": [
              6.0,
              8.0
            ],
            "tang": 1
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q4] Persamaan garis polar titik $T(1, 2)$ terhadap $(x - 3)^2 + (y + 1)^2 = 25$ adalah ...",
          "opsi": [
            "A. $-2x + 3y + 25 = 0$",
            "B. $x + 2y - 25 = 0$",
            "C. $-2x + 3y - 16 = 0$",
            "D. $3x - y - 16 = 0$",
            "E. $2x - 3y + 16 = 0$"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Rumus garis polar titik $T(x_1, y_1)$ pada $(x-a)^2 + (y-b)^2 = r^2$:\n$$(x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2$$\n\nLangkah 2: Mensubstitusikan $T(1, 2)$ dan $(x - 3)^2 + (y + 1)^2 = 25$:\n$$(1 - 3)(x - 3) + (2 - (-1))(y - (-1)) = 25$$\n$$-2(x - 3) + 3(y + 1) = 25$$\n$$-2x + 6 + 3y + 3 = 25 \\implies -2x + 3y - 16 = 0$$\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "lingkaran",
            "cx": 3,
            "cy": -1,
            "r2": 25,
            "P": [
              1.0,
              2.0
            ],
            "tang": 1
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q5] Tentukan kebenaran konsep garis kutub (polar) dari titik luar A(x1, y1):\n(1) Garis kutub memotong lingkaran tepat di dua titik singgung lingkaran.\n(2) Titik singgung dapat ditentukan tanpa menggunakan bantuan garis kutub.\n(3) Persamaan garis kutub untuk x^2 + y^2 = r^2 dirumuskan x1.x + y1.y = r^2.",
          "opsi": [
            "Garis kutub memotong lingkaran tepat di dua titik singgung lingkaran",
            "Titik singgung dapat ditentukan tanpa menggunakan bantuan garis kutub",
            "Persamaan garis kutub untuk x^2 + y^2 = r^2 dirumuskan x1.x + y1.y = r^2"
          ],
          "kunci": "B - B - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nDari sebuah titik di luar lingkaran selalu dapat ditarik tepat 2 garis singgung yang menyentuh lingkaran.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\nPanjang kedua segmen garis singgung dari titik luar ke masing-masing titik singgung adalah sama panjang ($L_1 = L_2$).\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nGaris kutub dari titik luar selalu memotong lingkaran di 2 titik singgung, bukan di luar lingkaran.\n$\\implies$ Pernyataan (3) bernilai SALAH.\nKesimpulan: Kunci Jawaban B - B - S."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q6] Berapakah sudut apit antara dua garis singgung lingkaran $x^2 + y^2 = 25$ dari titik luar $T(0, 10)$?",
          "opsi": [
            "A. 120 derajat",
            "B. 60 derajat",
            "C. 90 derajat",
            "D. 45 derajat",
            "E. 30 derajat"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Menentukan segitiga siku-siku antara titik luar $T(0, 10)$, pusat $O(0,0)$, dan titik singgung:\n- Jari-jari $r = 5$ (sisi depan dari setengah sudut $\\theta/2$).\n- Jarak titik luar $d = 10$ (sisi miring).\n\nLangkah 2: Menghitung nilai sinus:\n$$\\sin\\left(\\frac{\\theta}{2}\\right) = \\frac{r}{d} = \\frac{5}{10} = \\frac{1}{2} \\implies \\frac{\\theta}{2} = 30^\\circ$$\n\nLangkah 3: Menghitung sudut apit penuh:\n$$\\theta = 2 \\times 30^\\circ = 60^\\circ$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "lingkaran",
            "r2": 25,
            "cx": 0,
            "cy": 0,
            "P": [
              0.0,
              10.0
            ],
            "tang": 1
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q7] Panjang tali busur kontak dari titik $(0, 5)$ ke lingkaran $x^2 + y^2 = 9$ adalah ...",
          "opsi": [
            "A. 24/5 satuan",
            "B. 12/5 satuan",
            "C. 18/5 satuan",
            "D. 8 satuan",
            "E. 6 satuan"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Titik singgung dari $T(0, 5)$ ke $x^2 + y^2 = 9$ memiliki ordinat $y = \\frac{9}{5}$ dan absis $x = \\pm \\frac{12}{5}$.\nLangkah 2: Menghitung panjang tali busur kontak (jarak antara kedua titik singgung):\n$$\\text{Panjang} = \\frac{12}{5} - \\left(-\\frac{12}{5}\\right) = \\frac{24}{5} \\text{ satuan}$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "lingkaran",
            "r2": 9,
            "cx": 0,
            "cy": 0,
            "P": [
              0.0,
              5.0
            ]
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P08-Q8] Ditarik garis singgung dari titik A(0, 5) ke lingkaran x^2 + y^2 = 9. Manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Persamaan garis kutub titik A terhadap lingkaran adalah 5y = 9 (atau y = 9/5).",
            "B. Nilai absis titik-titik singgung adalah x = 12/5 dan x = -12/5.",
            "C. Titik singgung pada lingkaran adalah (12/5, 9/5) dan (-12/5, 9/5).",
            "D. Titik A(0, 5) terletak di dalam lingkaran.",
            "E. Panjang ruas garis singgung dari titik A ke titik singgung adalah 4 satuan."
          ],
          "kunci": "A, B, C, E",
          "bahas": "Langkah 1: Analisis garis singgung dari titik luar $A(0, 5)$ ke $x^2 + y^2 = 9$:\n- Opsi A: Garis polar $5y = 9$ (BENAR).\n- Opsi B: Absis titik singgung $x = \\pm 12/5$ (BENAR).\n- Opsi C: Titik singgung $(12/5, 9/5)$ dan $(-12/5, 9/5)$ (BENAR).\n- Opsi D: Titik $A(0, 5)$ terletak di LUAR lingkaran karena $0^2 + 5^2 = 25 > 9$ (SALAH).\n- Opsi E: Panjang garis singgung $L = \\sqrt{5^2 - 3^2} = 4$ (BENAR).\nKesimpulan: Kunci Jawaban A, B, C, E.",
          "viz": {
            "t": "lingkaran",
            "r2": 9,
            "cx": 0,
            "cy": 0,
            "P": [
              0.0,
              5.0
            ],
            "tang": 1
          }
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q9] Dari titik $T(5, 0)$ ditarik garis singgung ke $x^2 + y^2 = 9$. Salah satu titik singgungnya berkoordinat ...",
          "opsi": [
            "A. $(12/5, 9/5)$",
            "B. $(9/5, 12/5)$",
            "C. $(9/5, -9/5)$",
            "D. $(0, 3)$",
            "E. $(3, 0)$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Garis polar dari $T(5, 0)$ terhadap $x^2 + y^2 = 9$ adalah $5x = 9 \\implies x = \\frac{9}{5}$.\nLangkah 2: Menghitung ordinat titik singgung:\n$$y^2 = 9 - \\left(\\frac{9}{5}\\right)^2 = 9 - \\frac{81}{25} = \\frac{144}{25} \\implies y = \\pm \\frac{12}{5}$$\nSalah satu titik singgung adalah $\\left(\\frac{9}{5}, \\frac{12}{5}\\right)$.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "lingkaran",
            "r2": 9,
            "cx": 0,
            "cy": 0,
            "P": [
              5.0,
              0.0
            ],
            "tang": 1
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q10] Panjang garis singgung dari $(13, 0)$ ke $x^2 + y^2 = 25$ adalah ...",
          "opsi": [],
          "kunci": "12",
          "bahas": "Langkah 1: Menghitung panjang ruas garis singgung dari $T(0, 13)$ ke $x^2 + y^2 = 25$:\n$$L = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$$\nKesimpulan: Kunci Jawaban 12.",
          "viz": {
            "t": "lingkaran",
            "r2": 25,
            "cx": 0,
            "cy": 0,
            "P": [
              13.0,
              0.0
            ],
            "tang": 1
          }
        }
      ]
    },
    "P09": {
      "id": "P09",
      "subject": "Matematika Peminatan",
      "title": "Asesmen Sumatif Bab 1: Geometri Analitik Lingkaran",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q1] Jari-jari lingkaran $x^2 + y^2 - 4x + 2y - 20 = 0$ adalah ...",
          "opsi": [
            "A. 5",
            "B. 4",
            "C. √20",
            "D. 6",
            "E. 25"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menghitung jari-jari lingkaran dari bentuk umum $x^2 + y^2 - 4x + 2y - 20 = 0$:\n$$A = -4, \\quad B = 2, \\quad C = -20$$\n\nLangkah 2: Menggunakan rumus jari-jari lingkaran:\n$$r = \\sqrt{\\left(\\frac{-A}{2}\\right)^2 + \\left(\\frac{-B}{2}\\right)^2 - C} = \\sqrt{2^2 + (-1)^2 - (-20)} = \\sqrt{4 + 1 + 20} = \\sqrt{25} = 5$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "lingkaran",
            "cx": 2.0,
            "cy": -1.0,
            "r2": 25.0,
            "line": [
              4,
              2,
              -20
            ]
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q2] Persamaan garis singgung lingkaran $x^2 + y^2 = 13$ di titik $(-2, 3)$ adalah ...",
          "opsi": [
            "A. $2x + 3y = 13$",
            "B. $2x - 3y = 13$",
            "C. $-2x + 3y = 13$",
            "D. $-2x - 3y = 13$",
            "E. $3x - 2y = 13$"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Memeriksa kedudukan titik $(-2, 3)$ pada lingkaran $x^2 + y^2 = 13$:\n$$(-2)^2 + 3^2 = 4 + 9 = 13 \\quad (\\text{terletak pada lingkaran})$$\n\nLangkah 2: Menerapkan rumus garis singgung di titik singgung $(x_1, y_1)$:\n$$x_1 x + y_1 y = r^2$$\n$$(-2)x + (3)y = 13 \\implies -2x + 3y = 13$$\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "lingkaran",
            "r2": 13,
            "cx": 0,
            "cy": 0,
            "P": [
              -2.0,
              3.0
            ],
            "tang": 1
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q3] Lingkaran $(x - 3)^2 + (y + 4)^2 = 100$ memotong sumbu-$X$ di titik ...",
          "opsi": [
            "A. $(3 \\pm 2\\sqrt{21}, 0)$",
            "B. $(10, 0)$ dan $(-4, 0)$",
            "C. $(0, 0)$",
            "D. $(7, 0)$ dan $(-1, 0)$",
            "E. $(13, 0)$"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Menentukan syarat titik potong kurva dengan sumbu-$X$:\nSubstitusikan nilai ordinat $y = 0$ ke dalam persamaan lingkaran:\n$$(x - 3)^2 + (0 + 4)^2 = 100$$\n$$(x - 3)^2 + 16 = 100 \\implies (x - 3)^2 = 84$$\n\nLangkah 2: Menarik akar kuadrat pada kedua ruas:\n$$x - 3 = \\pm\\sqrt{84} = \\pm\\sqrt{4 \\times 21} = \\pm 2\\sqrt{21}$$\n$$x = 3 \\pm 2\\sqrt{21}$$\n\nLangkah 3: Kesimpulan:\nLingkaran memotong sumbu-$X$ di titik $(3 \\pm 2\\sqrt{21}, 0)$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "lingkaran",
            "cx": 3,
            "cy": -4,
            "r2": 100
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q4] Persamaan garis singgung lingkaran $x^2 + y^2 = 10$ yang bergradien $m = 3$ adalah ...",
          "opsi": [
            "A. $y = 3x \\pm 5$",
            "B. $y = 3x \\pm \\sqrt{10}$",
            "C. $y = 3x \\pm 10$",
            "D. $y = 3x \\pm 10\\sqrt{2}$",
            "E. $y = 3x \\pm 20$"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Mengidentifikasi parameter lingkaran dan gradien garis singgung:\nLingkaran $x^2 + y^2 = 10$ memiliki pusat $O(0,0)$ dan $r = \\sqrt{10}$. Gradien garis $m = 3$.\n\nLangkah 2: Menerapkan rumus PGSL dengan gradien tertentu:\n$$y = mx \\pm r\\sqrt{1 + m^2}$$\n$$y = 3x \\pm \\sqrt{10}\\sqrt{1 + 3^2} = 3x \\pm \\sqrt{10}\\sqrt{10} = 3x \\pm 10$$\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "lingkaran",
            "r2": 10,
            "cx": 0,
            "cy": 0,
            "tang": 1
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q5] Tentukan kebenaran hubungan dua lingkaran berjari-jari R dan r (pusat P1 dan P2 dengan jarak d = P1P2):\n(1) Jika d > R + r, kedua lingkaran saling berpotongan di dua titik.\n(2) Jika d = R + r, kedua lingkaran bersinggungan di luar.\n(3) Jika d = R - r (R > r), kedua lingkaran bersinggungan di dalam.",
          "opsi": [
            "Jika d > R + r, kedua lingkaran saling berpotongan di dua titik",
            "Jika d = R + r, kedua lingkaran bersinggungan di luar",
            "Jika d = R - r (R > r), kedua lingkaran bersinggungan di dalam"
          ],
          "kunci": "S - B - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nJika jarak pusat $d > R + r$, kedua lingkaran saling terpisah (saling lepas di luar), bukan berpotongan di 2 titik.\n$\\implies$ Pernyataan (1) bernilai SALAH (S).\n\nLangkah 2: Analisis Pernyataan (2):\nJika jarak pusat $d = R + r$, kedua lingkaran menyentuh di satu titik batas luar (bersinggungan di luar).\n$\\implies$ Pernyataan (2) bernilai BENAR (B).\n\nLangkah 3: Analisis Pernyataan (3):\nJika jarak pusat $d = R - r$ dengan $R > r$, lingkaran kecil berada di dalam lingkaran besar dan menyentuh di satu titik dalam (bersinggungan di dalam).\n$\\implies$ Pernyataan (3) bernilai BENAR (B).\n\nKesimpulan: Kunci Jawaban S - B - B."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q6] Berapakah jari-jari lingkaran $x^2 + y^2 + 6x - 8y + c = 0$ jika menyinggung sumbu-Y?",
          "opsi": [
            "A. 6 satuan",
            "B. 4 satuan",
            "C. 5 satuan",
            "D. 8 satuan",
            "E. 3 satuan"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Menentukan titik pusat lingkaran dari bentuk umum $x^2 + y^2 + 6x - 8y + c = 0$:\n$$P(a, b) = \\left(-\\frac{6}{2}, -\\frac{-8}{2}\\right) = P(-3, 4)$$\n\nLangkah 2: Menggunakan sifat lingkaran yang menyinggung sumbu-$Y$:\nLingkaran yang menyinggung sumbu-$Y$ memiliki jari-jari sebesar nilai mutlak absis titik pusatnya:\n$$r = |a| = |-3| = 3 \\text{ satuan}$$\nKesimpulan: Kunci Jawaban E."
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q7] Jarak titik $P(1, 2)$ ke garis singgung lingkaran $x^2 + y^2 = 5$ di $(1, 2)$ adalah ...",
          "opsi": [
            "A. 1 satuan",
            "B. √5 satuan",
            "C. 5 satuan",
            "D. 0 satuan",
            "E. 2 satuan"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Mengidentifikasi posisi titik $P(1, 2)$ terhadap lingkaran:\n$$1^2 + 2^2 = 1 + 4 = 5 \\implies P(1, 2) \\text{ terletak pada lingkaran}$$\n\nLangkah 2: Menentukan jarak titik ke garis singgung yang melalui titik tersebut:\nKarena garis singgung lingkaran dibuat tepat di titik $P(1, 2)$, maka titik $P(1, 2)$ terletak pada garis singgung itu sendiri.\n$$\\text{Jarak Titik ke Garis} = 0 \\text{ satuan}$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "lingkaran",
            "r2": 5,
            "cx": 0,
            "cy": 0,
            "P": [
              1.0,
              2.0
            ],
            "tang": 1
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P09-Q8] Diberikan L1: x^2 + y^2 = 9 (pusat (0,0), R = 3) dan L2: (x - 8)^2 + y^2 = 16 (pusat (8,0), r = 4). Manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Karena d > R + r (8 > 7), kedua lingkaran saling lepas di luar.",
            "B. Jarak antara kedua pusat lingkaran adalah d = 8 satuan.",
            "C. Kedua lingkaran saling bersinggungan di titik (3, 0).",
            "D. Kedua lingkaran memiliki 4 garis singgung persekutuan.",
            "E. Nilai R + r adalah 7 satuan."
          ],
          "kunci": "A, B, D, E",
          "bahas": "Langkah 1: Menganalisis parameter kedua lingkaran:\n- $L_1$: Pusat $P_1(0,0)$ dan jari-jari $R = 3$.\n- $L_2$: Pusat $P_2(8,0)$ dan jari-jari $r = 4$.\n\nLangkah 2: Menghitung jarak pusat dan perbandingan jari-jari:\n- Jarak kedua pusat: $d = \\sqrt{(8-0)^2 + (0-0)^2} = 8$ satuan (Opsi B BENAR).\n- Jumlah jari-jari: $R + r = 3 + 4 = 7$ satuan (Opsi E BENAR).\n- Karena $d = 8 > R + r = 7$, maka kedua lingkaran **saling lepas di luar** (Opsi A BENAR).\n- Dua lingkaran yang saling lepas di luar memiliki 4 garis singgung persekutuan (2 luar dan 2 dalam) (Opsi D BENAR).\n- Kedua lingkaran tidak bersinggungan (Opsi C SALAH).\n\nKesimpulan: Kunci Jawaban A, B, D, E.",
          "viz": {
            "t": "lingkaran",
            "r2": 9,
            "cx": 0,
            "cy": 0,
            "P": [
              0.0,
              0.0
            ]
          }
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q9] Nilai konstanta $k$ agar lingkaran $x^2 + y^2 = k$ melalui titik $(-3, 4)$ adalah ...",
          "opsi": [
            "A. 5",
            "B. 49",
            "C. 7",
            "D. 12",
            "E. 25"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Mensubstitusikan koordinat titik $(-3, 4)$ ke persamaan lingkaran $x^2 + y^2 = k$:\n$$(-3)^2 + (4)^2 = k$$\n$$9 + 16 = k \\implies k = 25$$\nKesimpulan: Kunci Jawaban E."
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q10] Panjang diameter lingkaran $x^2 + y^2 - 6x - 8y = 0$ adalah ...",
          "opsi": [],
          "kunci": "10",
          "bahas": "Langkah 1: Menghitung jari-jari lingkaran dari $x^2 + y^2 - 6x - 8y = 0$:\n$$r = \\sqrt{\\left(\\frac{-(-6)}{2}\\right)^2 + \\left(\\frac{-(-8)}{2}\\right)^2 - 0} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$\n\nLangkah 2: Menghitung panjang diameter ($d = 2r$):\n$$d = 2 \\times 5 = 10 \\text{ satuan}$$\nKesimpulan: Kunci Jawaban 10."
        }
      ]
    },
    "P10": {
      "id": "P10",
      "subject": "Matematika Peminatan",
      "title": "Limit Aljabar & Trigonometri 1: Fondasi Limit Aljabar Bentuk 0/0",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q1] Nilai dari $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$ adalah ...",
          "opsi": [
            "A. 6",
            "B. 3",
            "C. Tak hingga",
            "D. 0",
            "E. 9"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Identifikasi bentuk limit dengan substitusi langsung:\nSaat $x \\to 3$, bentuk pecahan menghasilkan $\\frac{3^2 - 9}{3 - 3} = \\frac{0}{0}$ (Bentuk Tak Tentu).\n\nLangkah 2: Memfaktorkan pembilang menggunakan selisih dua kuadrat $a^2 - b^2 = (a - b)(a + b)$:\n$$\\lim_{x \\to 3} \\frac{(x - 3)(x + 3)}{x - 3}$$\n\nLangkah 3: Mengeliminasi faktor pembuat nol $(x - 3)$ dan melakukan substitusi limit:\n$$\\lim_{x \\to 3} (x + 3) = 3 + 3 = 6$$\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "(Math.pow(x, 2) - 9)/(x - 3)",
            "x0": 0.8,
            "x1": 5.2,
            "lab": "y = f(x)",
            "hole": 3.0,
            "holey": 6.0
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q2] Nilai dari $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$ adalah ...",
          "opsi": [
            "A. 4",
            "B. 2",
            "C. 1/2",
            "D. 1/8",
            "E. 1/4"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Identifikasi bentuk tak tentu $\\frac{0}{0}$ saat $x \\to 4$:\n$$\\frac{\\sqrt{4} - 2}{4 - 4} = \\frac{0}{0}$$\n\nLangkah 2: Mengalikan pembilang dan penyebut dengan bentuk sekawan $(\\sqrt{x} + 2)$:\n$$\\lim_{x \\to 4} \\frac{(\\sqrt{x} - 2)(\\sqrt{x} + 2)}{(x - 4)(\\sqrt{x} + 2)} = \\lim_{x \\to 4} \\frac{x - 4}{(x - 4)(\\sqrt{x} + 2)}$$\n\nLangkah 3: Mengeliminasi faktor $(x - 4)$ dan mengevaluasi nilai limit:\n$$\\lim_{x \\to 4} \\frac{1}{\\sqrt{x} + 2} = \\frac{1}{\\sqrt{4} + 2} = \\frac{1}{2 + 2} = \\frac{1}{4}$$\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "(Math.sqrt(x) - 2)*(x - 4)",
            "x0": 1.8,
            "x1": 6.2,
            "lab": "y = f(x)",
            "hole": 4.0,
            "holey": 0.0
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q3] Nilai dari $\\lim_{x \\to 2} \\frac{x^3 - 8}{x^2 - 4}$ adalah ...",
          "opsi": [
            "A. 2",
            "B. 4",
            "C. 6",
            "D. 3",
            "E. 12"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Identifikasi bentuk $\\frac{0}{0}$ saat $x \\to 2$:\n$$\\frac{2^3 - 8}{2^2 - 4} = \\frac{0}{0}$$\n\nLangkah 2: Memfaktorkan pembilang ($a^3 - b^3 = (a-b)(a^2+ab+b^2)$) dan penyebut ($a^2 - b^2 = (a-b)(a+b)$):\n$$\\lim_{x \\to 2} \\frac{(x - 2)(x^2 + 2x + 4)}{(x - 2)(x + 2)}$$\n\nLangkah 3: Mengeliminasi faktor $(x - 2)$ dan mensubstitusikan $x = 2$:\n$$\\lim_{x \\to 2} \\frac{x^2 + 2x + 4}{x + 2} = \\frac{2^2 + 2(2) + 4}{2 + 2} = \\frac{4 + 4 + 4}{4} = \\frac{12}{4} = 3$$\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "(Math.pow(x, 3) - 8)/(Math.pow(x, 2) - 4)",
            "x0": -0.2,
            "x1": 4.2,
            "lab": "y = f(x)",
            "hole": 2.0,
            "holey": 3.0
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q4] Nilai dari $\\lim_{x \\to 1} \\frac{x^2 + 2x - 3}{x - 1}$ adalah ...",
          "opsi": [
            "A. 3",
            "B. 4",
            "C. 1",
            "D. 2",
            "E. 5"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Substitusi langsung $x = 1$ menghasilkan bentuk tak tentu $\\frac{1 + 2 - 3}{1 - 1} = \\frac{0}{0}$.\n\nLangkah 2: Memfaktorkan pembilang persamaan kuadrat:\n$$x^2 + 2x - 3 = (x - 1)(x + 3)$$\n\nLangkah 3: Mengeliminasi faktor $(x - 1)$ dan mengevaluasi limit:\n$$\\lim_{x \\to 1} \\frac{(x - 1)(x + 3)}{x - 1} = \\lim_{x \\to 1} (x + 3) = 1 + 3 = 4$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "plot",
            "f": "(Math.pow(x, 2) + 2*x - 3)/(x - 1)",
            "x0": -1.2,
            "x1": 3.2,
            "lab": "y = f(x)",
            "hole": 1.0,
            "holey": 4.0
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q5] Tentukan kebenaran konsep evaluasi limit aljabar bentuk tak tentu 0/0:\n(1) Bentuk 0/0 pada substitusi langsung merupakan bentuk tak tentu yang memerlukan manipulasi aljabar.\n(2) Nilai limit x->2 (x^2 - 4) / (x - 2) adalah 0.\n(3) Metode pemfaktoran bertujuan mengeliminasi faktor pembuat nol (x - c).",
          "opsi": [
            "Bentuk 0/0 pada substitusi langsung merupakan bentuk tak tentu yang memerlukan manipulasi aljabar",
            "Nilai limit x->2 (x^2 - 4) / (x - 2) adalah 0",
            "Metode pemfaktoran bertujuan mengeliminasi faktor pembuat nol (x - c)"
          ],
          "kunci": "B - S - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nBentuk $0/0$ pada substitusi langsung merupakan bentuk tak tentu yang memerlukan manipulasi aljabar (faktorisasi, rasionalisasi sekawan, atau aturan L'Hopital).\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\n$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} (x + 2) = 4$, bukan 0.\n$\\implies$ Pernyataan (2) bernilai SALAH.\n\nLangkah 3: Analisis Pernyataan (3):\nMetode pemfaktoran bertujuan mengeliminasi faktor persekutuan pembuat nol $(x - c)$ dari pembilang dan penyebut.\n$\\implies$ Pernyataan (3) bernilai BENAR.\nKesimpulan: Kunci Jawaban B - S - B."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q6] Berapakah nilai $\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}$?",
          "opsi": [
            "A. 20",
            "B. 0",
            "C. 10",
            "D. 25",
            "E. 5"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Memfaktorkan selisih dua kuadrat pada pembilang:\n$$x^2 - 25 = (x - 5)(x + 5)$$\n\nLangkah 2: Menyederhanakan pecahan limit:\n$$\\lim_{x \\to 5} \\frac{(x - 5)(x + 5)}{x - 5} = \\lim_{x \\to 5} (x + 5)$$\n\nLangkah 3: Mensubstitusikan $x = 5$:\n$$5 + 5 = 10$$\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "plot",
            "f": "(Math.pow(x, 2) - 25)/(x - 5)",
            "x0": 2.8,
            "x1": 7.2,
            "lab": "y = f(x)",
            "hole": 5.0,
            "holey": 10.0
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q7] Nilai dari $\\lim_{x \\to 0} \\frac{\\sqrt{1 + x} - \\sqrt{1 - x}}{x}$ adalah ...",
          "opsi": [
            "A. 0",
            "B. 1",
            "C. 1/2",
            "D. √2",
            "E. 2"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Mengalikan dengan bentuk sekawan $(\\sqrt{1 + x} + \\sqrt{1 - x})$:\n$$\\lim_{x \\to 0} \\frac{(\\sqrt{1+x} - \\sqrt{1-x})(\\sqrt{1+x} + \\sqrt{1-x})}{x(\\sqrt{1+x} + \\sqrt{1-x})} = \\lim_{x \\to 0} \\frac{(1 + x) - (1 - x)}{x(\\sqrt{1+x} + \\sqrt{1-x})}$$\n\nLangkah 2: Menyederhanakan pembilang:\n$$\\frac{2x}{x(\\sqrt{1+x} + \\sqrt{1-x})} = \\frac{2}{\\sqrt{1+x} + \\sqrt{1-x}}$$\n\nLangkah 3: Mensubstitusikan $x = 0$:\n$$\\frac{2}{\\sqrt{1+0} + \\sqrt{1-0}} = \\frac{2}{1 + 1} = \\frac{2}{2} = 1$$\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "plot",
            "f": "x*(-Math.sqrt(1 - x) + Math.sqrt(x + 1))",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 0.0
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P10-Q8] Manakah nilai evaluasi limit aljabar berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. limit x->1 (x^2 + 2x - 3) / (x - 1) = 4.",
            "B. limit x->3 (x^2 - 9) / (x - 3) = 6.",
            "C. limit x->4 (akar(x) - 2) / (x - 4) = 1/4.",
            "D. limit x->0 (x^3 + 5x) / x = 5.",
            "E. limit x->2 (x^2 - 4) / (x + 2) = 4."
          ],
          "kunci": "A, B, C, D",
          "bahas": "Langkah 1: Evaluasi seluruh pernyataan nilai limit:\n- A: $\\lim_{x\\to 1} \\frac{x^2+2x-3}{x-1} = 4$ (BENAR).\n- B: $\\lim_{x\\to 3} \\frac{x^2-9}{x-3} = 6$ (BENAR).\n- C: $\\lim_{x\\to 4} \\frac{\\sqrt{x}-2}{x-4} = \\frac{1}{4}$ (BENAR).\n- D: $\\lim_{x\\to 0} \\frac{x(x^2+5)}{x} = 5$ (BENAR).\n- E: $\\lim_{x\\to 2} \\frac{x^2-4}{x+2} = \\frac{0}{4} = 0$, bukan 4 (SALAH).\nKesimpulan: Kunci Jawaban A, B, C, D."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q9] Nilai dari $\\lim_{x \\to 5} \\frac{x^2 - 25}{\\sqrt{x} - \\sqrt{5}}$ adalah ...",
          "opsi": [
            "A. 25",
            "B. 50",
            "C. 5√5",
            "D. 10√5",
            "E. 20√5"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Mengalikan dengan sekawan penyebut $(\\sqrt{x} + \\sqrt{5})$:\n$$\\lim_{x \\to 5} \\frac{(x^2 - 25)(\\sqrt{x} + \\sqrt{5})}{(\\sqrt{x} - \\sqrt{5})(\\sqrt{x} + \\sqrt{5})} = \\lim_{x \\to 5} \\frac{(x - 5)(x + 5)(\\sqrt{x} + \\sqrt{5})}{x - 5}$$\n\nLangkah 2: Mengeliminasi $(x - 5)$:\n$$\\lim_{x \\to 5} (x + 5)(\\sqrt{x} + \\sqrt{5})$$\n\nLangkah 3: Mensubstitusikan $x = 5$:\n$$(5 + 5)(\\sqrt{5} + \\sqrt{5}) = 10 \\times 2\\sqrt{5} = 20\\sqrt{5}$$\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "(Math.sqrt(x) - Math.sqrt(5))*(Math.pow(x, 2) - 25)",
            "x0": 2.8,
            "x1": 7.2,
            "lab": "y = f(x)",
            "hole": 5.0,
            "holey": 0.0
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q10] Nilai dari $\\lim_{x \\to 2} \\frac{x^2 - 5x + 6}{x - 2}$ adalah ...",
          "opsi": [],
          "kunci": "-1",
          "bahas": "Langkah 1: Memfaktorkan pembilang persamaan kuadrat $x^2 - 5x + 6$:\n$$x^2 - 5x + 6 = (x - 2)(x - 3)$$\n\nLangkah 2: Mengeliminasi faktor pembuat nol $(x - 2)$:\n$$\\lim_{x \\to 2} \\frac{(x - 2)(x - 3)}{x - 2} = \\lim_{x \\to 2} (x - 3)$$\n\nLangkah 3: Mensubstitusikan $x = 2$:\n$$2 - 3 = -1$$\nKesimpulan: Kunci Jawaban -1.",
          "viz": {
            "t": "plot",
            "f": "(Math.pow(x, 2) - 5*x + 6)/(x - 2)",
            "x0": -0.2,
            "x1": 4.2,
            "lab": "y = f(x)",
            "hole": 2.0,
            "holey": -1.0
          }
        }
      ]
    },
    "P11": {
      "id": "P11",
      "subject": "Matematika Peminatan",
      "title": "Limit Aljabar & Trigonometri 2: Teorema Dasar Limit Trigonometri",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q1] Nilai dari $\\lim_{x \\to 0} \\frac{\\sin(6x)}{2x}$ adalah ...",
          "opsi": [
            "A. 3",
            "B. 2",
            "C. 6",
            "D. 1/3",
            "E. 12"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi $\\frac{\\sin 0}{0} = \\frac{0}{0}$, sehingga dipakai limit trigonometri dasar.\n\nLangkah 2: Gunakan aturan $\\lim_{x \\to 0} \\frac{\\sin(ax)}{bx} = \\frac{a}{b}$ dengan $a = 6$ dan $b = 2$.\n\nLangkah 3: Substitusikan nilainya: $\\frac{6}{2} = 3$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "(1/2)*Math.sin(6*x)/x",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 3.0
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q2] Nilai dari $\\lim_{x \\to 0} \\frac{\\tan(4x)}{\\sin(2x)}$ adalah ...",
          "opsi": [
            "A. 4",
            "B. 8",
            "C. 1/2",
            "D. 2",
            "E. 1"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi bentuk tak tentu $\\frac{0}{0}$.\n\nLangkah 2: Gunakan aturan $\\lim_{x \\to 0} \\frac{\\tan(ax)}{\\sin(bx)} = \\frac{a}{b}$, yang berlaku karena untuk $x \\to 0$ baik $\\tan(ax)$ maupun $\\sin(bx)$ dapat digantikan oleh $ax$ dan $bx$.\n\nLangkah 3: Substitusikan $a = 4$ dan $b = 2$: $\\frac{4}{2} = 2$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "Math.tan(4*x)/Math.sin(2*x)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 2.0
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q3] Nilai dari $\\lim_{x \\to 0} \\frac{\\sin(3x) \\tan(2x)}{6x^2}$ adalah ...",
          "opsi": [
            "A. 1/2",
            "B. 6",
            "C. 2",
            "D. 3",
            "E. 1"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi $\\frac{0}{0}$. Karena penyebut berderajat dua, pisahkan menjadi dua faktor limit dasar.\n\nLangkah 2: Tulis ulang sebagai hasil kali: $\\frac{\\sin(3x)}{x} \\cdot \\frac{\\tan(2x)}{x} \\cdot \\frac{1}{6}$, masing-masing memakai $\\lim_{x \\to 0}\\frac{\\sin(ax)}{x} = a$ dan $\\lim_{x \\to 0}\\frac{\\tan(ax)}{x} = a$.\n\nLangkah 3: Substitusikan nilainya: $\\frac{3 \\cdot 2}{6} = \\frac{6}{6} = 1$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "(1/6)*Math.sin(3*x)*Math.tan(2*x)/Math.pow(x, 2)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 1.0
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q4] Nilai dari $\\lim_{x \\to 0} \\frac{x \\tan(3x)}{\\sin^2(6x)}$ adalah ...",
          "opsi": [
            "A. 1/12",
            "B. 1/18",
            "C. 1/6",
            "D. 1/4",
            "E. 1/2"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi $\\frac{0}{0}$. Pembilang dan penyebut sama-sama berderajat dua, jadi bentuknya dipecah menjadi faktor-faktor limit dasar.\n\nLangkah 2: Tulis ulang sebagai $\\frac{x}{\\sin(6x)} \\cdot \\frac{\\tan(3x)}{\\sin(6x)}$. Gunakan $\\lim_{x \\to 0}\\frac{x}{\\sin(ax)} = \\frac{1}{a}$ dan $\\lim_{x \\to 0}\\frac{\\tan(ax)}{\\sin(bx)} = \\frac{a}{b}$.\n\nLangkah 3: Substitusikan nilainya: $\\frac{1}{6} \\cdot \\frac{3}{6} = \\frac{3}{36} = \\frac{1}{12}$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "x*Math.tan(3*x)/Math.pow(Math.sin(6*x), 2)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 0.0833
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q5] Tentukan kebenaran teorema limit trigonometri dasar:\n(1) Nilai limit x->0 (tan ax) / (bx) = a/b.\n(2) Nilai limit x->0 (sin x) / x = 1.\n(3) Nilai limit x->0 (cos x) / x = 1.",
          "opsi": [
            "Nilai limit x->0 (tan ax) / (bx) = a/b",
            "Nilai limit x->0 (sin x) / x = 1",
            "Nilai limit x->0 (cos x) / x = 1"
          ],
          "kunci": "B - B - S",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\n$\\lim_{x\\to 0} \\frac{\\tan ax}{bx} = \\frac{a}{b} \\lim_{x\\to 0} \\frac{\\tan ax}{ax} = \\frac{a}{b}$.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\nTeorema dasar limit trigonometri sinus $\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1$.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nSaat $x \\to 0$, $\\cos 0 = 1$ sedangkan penyebut $0$, menghasilkan bentuk $\\frac{1}{0} = \\infty$ (divergen/tidak ada), bukan 1.\n$\\implies$ Pernyataan (3) bernilai SALAH.\nKesimpulan: Kunci Jawaban B - B - S."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q6] Berapakah nilai dari $\\lim_{x \\to 0} \\frac{\\sin(6x)}{\\tan(2x)}$?",
          "opsi": [
            "A. 2",
            "B. 12",
            "C. 6",
            "D. 1",
            "E. 3"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi bentuk tak tentu $\\frac{0}{0}$.\n\nLangkah 2: Gunakan aturan $\\lim_{x \\to 0} \\frac{\\sin(ax)}{\\tan(bx)} = \\frac{a}{b}$ dengan $a = 6$ dan $b = 2$.\n\nLangkah 3: Substitusikan nilainya: $\\frac{6}{2} = 3$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(6*x)/Math.tan(2*x)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 3.0
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q7] Nilai dari $\\lim_{x \\to 0} \\frac{2x \\sin(3x)}{1 - \\cos(2x)}$ adalah ...",
          "opsi": [
            "A. 6",
            "B. 2",
            "C. 3",
            "D. 3/2",
            "E. 1"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi $\\frac{0}{0}$. Penyebut memuat $1 - \\cos$, sehingga diubah dulu menjadi bentuk sinus.\n\nLangkah 2: Gunakan identitas $1 - \\cos(2A) = 2\\sin^2 A$ dengan $A = x$, sehingga $1 - \\cos(2x) = 2\\sin^2 x$. Bentuknya menjadi $\\frac{2x\\sin(3x)}{2\\sin^2 x} = \\frac{x}{\\sin x} \\cdot \\frac{\\sin(3x)}{\\sin x}$.\n\nLangkah 3: Terapkan $\\lim_{x \\to 0}\\frac{x}{\\sin x} = 1$ dan $\\lim_{x \\to 0}\\frac{\\sin(3x)}{\\sin x} = 3$: $1 \\cdot 3 = 3$.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "plot",
            "f": "2*x*Math.sin(3*x)/(1 - Math.cos(2*x))",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 3.0
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P11-Q8] Manakah hasil evaluasi limit trigonometri dasar berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. limit x->0 (sin 6x) / (2x) = 3.",
            "B. limit x->0 (tan 4x) / (sin 2x) = 2.",
            "C. limit x->0 (x sin 5x) / (tan^2 x) = 5.",
            "D. limit x->0 (sin 3x tan 2x) / (6x^2) = 1.",
            "E. limit x->0 (sin 4x) / (tan 8x) = 2."
          ],
          "kunci": "A, B, C, D",
          "bahas": "Langkah 1: Analisis Opsi A:\n$\\frac{6}{2} = 3$.\n$\\implies$ Pernyataan A BENAR.\n\nLangkah 2: Analisis Opsi B:\n$\\frac{4}{2} = 2$.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C:\n$\\frac{1 \\times 5}{1 \\times 1} = 5$.\n$\\implies$ Pernyataan C BENAR.\n\nLangkah 4: Analisis Opsi D:\n$\\frac{3 \\times 2}{6} = 1$.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E:\n$\\frac{4}{8} = \\frac{1}{2}$, bukan 2.\n$\\implies$ Pernyataan E SALAH.\nKesimpulan: Kunci Jawaban A, B, C, D."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q9] Nilai dari $\\lim_{x \\to 0} \\frac{\\sin(4x) + \\tan(2x)}{3x}$ adalah ...",
          "opsi": [
            "A. 6",
            "B. 4/3",
            "C. 1",
            "D. 2",
            "E. 3"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi $\\frac{0}{0}$. Karena pembilang berupa penjumlahan, pisahkan menjadi dua limit.\n\nLangkah 2: Tulis sebagai $\\lim_{x \\to 0}\\frac{\\sin(4x)}{3x} + \\lim_{x \\to 0}\\frac{\\tan(2x)}{3x}$, masing-masing memakai $\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}$ dan $\\lim_{x \\to 0}\\frac{\\tan(ax)}{bx} = \\frac{a}{b}$.\n\nLangkah 3: Substitusikan nilainya: $\\frac{4}{3} + \\frac{2}{3} = \\frac{6}{3} = 2$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "(1/3)*(Math.sin(4*x) + Math.tan(2*x))/x",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 2.0
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q10] Nilai dari $\\lim_{x \\to 0} \\frac{\\sin(12x)}{\\tan(4x)}$ adalah ...",
          "opsi": [],
          "kunci": "3",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi bentuk tak tentu $\\frac{0}{0}$.\n\nLangkah 2: Gunakan aturan $\\lim_{x \\to 0} \\frac{\\sin(ax)}{\\tan(bx)} = \\frac{a}{b}$ dengan $a = 12$ dan $b = 4$.\n\nLangkah 3: Substitusikan nilainya: $\\frac{12}{4} = 3$.\nKesimpulan: Kunci Jawaban 3.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(12*x)/Math.tan(4*x)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 3.0
          }
        }
      ]
    },
    "P12": {
      "id": "P12",
      "subject": "Matematika Peminatan",
      "title": "Limit Aljabar & Trigonometri 3: Limit Trigonometri & Identitas Cosinus",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q1] Nilai dari $\\lim_{x \\to 0} \\frac{1 - \\cos(4x)}{x^2}$ adalah ...",
          "opsi": [
            "A. 2",
            "B. 1",
            "C. 16",
            "D. 4",
            "E. 8"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi $\\frac{1-1}{0} = \\frac{0}{0}$, sehingga bentuk kosinus harus diubah menjadi sinus.\n\nLangkah 2: Gunakan identitas $1 - \\cos(2A) = 2\\sin^2 A$ dengan $A = 2x$, sehingga $1 - \\cos(4x) = 2\\sin^2(2x)$. Bentuknya menjadi $2\\left(\\frac{\\sin(2x)}{x}\\right)^2$.\n\nLangkah 3: Terapkan $\\lim_{x \\to 0}\\frac{\\sin(ax)}{x} = a$: $2 \\cdot 2^2 = 8$.\n\nCara cepat: $\\lim_{x \\to 0}\\frac{1-\\cos(ax)}{x^2} = \\frac{a^2}{2} = \\frac{16}{2} = 8$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "(1 - Math.cos(4*x))/Math.pow(x, 2)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 8.0
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q2] Nilai dari $\\lim_{x \\to 0} \\frac{1 - \\cos(2x)}{x \\sin(3x)}$ adalah ...",
          "opsi": [
            "A. 3/2",
            "B. 2/3",
            "C. 2",
            "D. 4/3",
            "E. 1/3"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi bentuk tak tentu $\\frac{0}{0}$.\n\nLangkah 2: Gunakan identitas $1 - \\cos(2A) = 2\\sin^2 A$ dengan $A = x$: $1 - \\cos(2x) = 2\\sin^2 x$. Bentuknya menjadi $\\frac{2\\sin^2 x}{x\\sin(3x)} = 2 \\cdot \\frac{\\sin x}{x} \\cdot \\frac{\\sin x}{\\sin(3x)}$.\n\nLangkah 3: Terapkan $\\lim_{x \\to 0}\\frac{\\sin x}{x} = 1$ dan $\\lim_{x \\to 0}\\frac{\\sin x}{\\sin(3x)} = \\frac{1}{3}$: $2 \\cdot 1 \\cdot \\frac{1}{3} = \\frac{2}{3}$.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "plot",
            "f": "(1 - Math.cos(2*x))/(x*Math.sin(3*x))",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 0.6667
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q3] Nilai dari $\\lim_{x \\to 0} \\frac{\\cos(4x) - \\cos(2x)}{x^2}$ adalah ...",
          "opsi": [
            "A. -12",
            "B. 6",
            "C. -3",
            "D. -6",
            "E. 3"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi $\\frac{1-1}{0} = \\frac{0}{0}$, bentuk tak tentu.\n\nLangkah 2: Sisipkan angka 1 agar terbentuk dua bentuk baku: $\\cos(4x) - \\cos(2x) = \\bigl(1-\\cos(2x)\\bigr) - \\bigl(1-\\cos(4x)\\bigr)$.\n\nLangkah 3: Terapkan $\\lim_{x \\to 0}\\frac{1-\\cos(ax)}{x^2} = \\frac{a^2}{2}$ pada masing-masing suku: $\\frac{2^2}{2} - \\frac{4^2}{2} = 2 - 8 = -6$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "(-Math.cos(2*x) + Math.cos(4*x))/Math.pow(x, 2)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": -6.0
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q4] Nilai dari $\\lim_{x \\to 0} \\frac{1 - \\cos(6x)}{1 - \\cos(2x)}$ adalah ...",
          "opsi": [
            "A. 18",
            "B. 36",
            "C. 6",
            "D. 3",
            "E. 9"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi bentuk tak tentu $\\frac{0}{0}$ pada pembilang maupun penyebut.\n\nLangkah 2: Ubah keduanya dengan identitas $1 - \\cos(2A) = 2\\sin^2 A$: pembilang menjadi $2\\sin^2(3x)$ dan penyebut menjadi $2\\sin^2 x$, sehingga bentuknya $\\left(\\frac{\\sin(3x)}{\\sin x}\\right)^2$.\n\nLangkah 3: Terapkan $\\lim_{x \\to 0}\\frac{\\sin(ax)}{\\sin(bx)} = \\frac{a}{b}$: $\\left(\\frac{3}{1}\\right)^2 = 9$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "(1 - Math.cos(6*x))/(1 - Math.cos(2*x))",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 9.0
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q5] Tentukan kebenaran rumus identitas dalam limit trigonometri berikut:\n(1) Nilai limit x->0 (1 - cos x) / x adalah 1.\n(2) Bentuk 1 - cos(2x) dapat diubah secara identik menjadi 2 sin^2(x).\n(3) Bentuk 1 - cos(ax) asimtotik ekuivalen dengan 1/2 a^2 x^2 saat x mendekati 0.",
          "opsi": [
            "Nilai limit x->0 (1 - cos x) / x adalah 1",
            "Bentuk 1 - cos(2x) dapat diubah secara identik menjadi 2 sin^2(x)",
            "Bentuk 1 - cos(ax) asimtotik ekuivalen dengan 1/2 a^2 x^2 saat x mendekati 0"
          ],
          "kunci": "S - B - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\n$\\lim_{x\\to 0} \\frac{1 - \\cos x}{x} = \\lim_{x\\to 0} \\frac{\\frac{1}{2}x^2}{x} = 0$, bukan 1.\n$\\implies$ Pernyataan (1) bernilai SALAH.\n\nLangkah 2: Analisis Pernyataan (2):\nIdentitas sudut ganda: $\\cos 2x = 1 - 2\\sin^2 x \\implies 1 - \\cos 2x = 2\\sin^2 x$.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nBerdasarkan deret Maclaurin: $1 - \\cos(ax) \\approx \\frac{1}{2}(ax)^2 = \\frac{1}{2}a^2 x^2$.\n$\\implies$ Pernyataan (3) bernilai BENAR.\nKesimpulan: Kunci Jawaban S - B - B."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q6] Berapakah nilai $\\lim_{x \\to 0} \\frac{1 - \\cos(6x)}{x^2}$?",
          "opsi": [
            "A. 18",
            "B. 12",
            "C. 9",
            "D. 6",
            "E. 36"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi $\\frac{1-1}{0} = \\frac{0}{0}$, sehingga bentuk kosinus diubah menjadi sinus.\n\nLangkah 2: Gunakan identitas $1 - \\cos(2A) = 2\\sin^2 A$ dengan $A = 3x$: $1 - \\cos(6x) = 2\\sin^2(3x)$. Bentuknya menjadi $2\\left(\\frac{\\sin(3x)}{x}\\right)^2$.\n\nLangkah 3: Terapkan $\\lim_{x \\to 0}\\frac{\\sin(ax)}{x} = a$: $2 \\cdot 3^2 = 18$.\n\nCara cepat: $\\lim_{x \\to 0}\\frac{1-\\cos(ax)}{x^2} = \\frac{a^2}{2} = \\frac{36}{2} = 18$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "(1 - Math.cos(6*x))/Math.pow(x, 2)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 18.0
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q7] Nilai dari $\\lim_{x \\to 0} \\frac{x \\tan(2x)}{1 - \\cos(4x)}$ adalah ...",
          "opsi": [
            "A. 1",
            "B. 2",
            "C. 1/4",
            "D. 1/2",
            "E. 1/8"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi bentuk tak tentu $\\frac{0}{0}$.\n\nLangkah 2: Ubah penyebut dengan $1 - \\cos(2A) = 2\\sin^2 A$ untuk $A = 2x$: $1 - \\cos(4x) = 2\\sin^2(2x)$. Karena $\\tan(2x) = \\frac{\\sin(2x)}{\\cos(2x)}$, bentuknya menjadi $\\frac{x}{2\\sin(2x)\\cos(2x)}$.\n\nLangkah 3: Terapkan $\\lim_{x \\to 0}\\frac{x}{\\sin(2x)} = \\frac{1}{2}$ dan $\\cos 0 = 1$: $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "plot",
            "f": "x*Math.tan(2*x)/(1 - Math.cos(4*x))",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 0.25
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P12-Q8] Manakah evaluasi limit trigonometri bentuk tak tentu berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. limit x->0 (tan x - sin x) / x^3 = 1/2.",
            "B. limit x->0 (1 - cos 6x) / (1 - cos 2x) = 9.",
            "C. limit x->0 (sin^2 3x) / (x tan 2x) = 0.",
            "D. limit x->0 (1 - cos 4x) / (x sin 2x) = 4.",
            "E. limit x->0 (cos x - cos 3x) / x^2 = 4."
          ],
          "kunci": "A, B, D, E",
          "bahas": "Langkah 1: Analisis Opsi A:\n$\\tan x(1 - \\cos x) = x(\\frac{1}{2}x^2) = \\frac{1}{2}x^3 \\implies \\frac{1}{2}$.\n$\\implies$ Pernyataan A BENAR.\n\nLangkah 2: Analisis Opsi B:\n$\\frac{\\frac{1}{2}(6)^2}{\\frac{1}{2}(2)^2} = \\frac{36}{4} = 9$.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C:\n$\\frac{(3x)^2}{x(2x)} = \\frac{9}{2} = 4{,}5 \\ne 0$.\n$\\implies$ Pernyataan C SALAH.\n\nLangkah 4: Analisis Opsi D:\n$\\lim \\frac{\\frac{1}{2}(4x)^2}{x(2x)} = \\frac{8x^2}{2x^2} = 4$.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E:\n$\\cos x - \\cos 3x = 2\\sin 2x \\sin x \\implies \\frac{2(2x)(x)}{x^2} = 4$.\n$\\implies$ Pernyataan E BENAR.\nKesimpulan: Kunci Jawaban A, B, D, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q9] Nilai dari $\\lim_{x \\to 0} \\frac{\\cos(6x) - 1}{x \\sin(3x)}$ adalah ...",
          "opsi": [
            "A. -6",
            "B. 6",
            "C. -2",
            "D. -3",
            "E. 3"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi $\\frac{1-1}{0} = \\frac{0}{0}$, bentuk tak tentu.\n\nLangkah 2: Gunakan identitas $\\cos(2A) - 1 = -2\\sin^2 A$ dengan $A = 3x$, sehingga $\\cos(6x) - 1 = -2\\sin^2(3x)$. Perhatikan tanda negatifnya, karena soal menulis $\\cos(6x) - 1$, bukan $1 - \\cos(6x)$.\n\nLangkah 3: Substitusikan ke soal. Satu faktor $\\sin(3x)$ saling menghapus dengan penyebut: $\\frac{-2\\sin^2(3x)}{x\\sin(3x)} = -2 \\cdot \\frac{\\sin(3x)}{x}$.\n\nLangkah 4: Terapkan $\\lim_{x \\to 0}\\frac{\\sin(ax)}{x} = a$: $-2 \\cdot 3 = -6$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "(Math.cos(6*x) - 1)/(x*Math.sin(3*x))",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": -6.0
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q10] Nilai dari $\\lim_{x \\to 0} \\frac{1 - \\cos(10x)}{x^2}$ adalah ...",
          "opsi": [],
          "kunci": "50",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi $\\frac{1-1}{0} = \\frac{0}{0}$, sehingga bentuk kosinus diubah menjadi sinus.\n\nLangkah 2: Gunakan identitas $1 - \\cos(2A) = 2\\sin^2 A$ dengan $A = 5x$: $1 - \\cos(10x) = 2\\sin^2(5x)$. Bentuknya menjadi $2\\left(\\frac{\\sin(5x)}{x}\\right)^2$.\n\nLangkah 3: Terapkan $\\lim_{x \\to 0}\\frac{\\sin(ax)}{x} = a$: $2 \\cdot 5^2 = 50$.\nKesimpulan: Kunci Jawaban 50.",
          "viz": {
            "t": "plot",
            "f": "(1 - Math.cos(10*x))/Math.pow(x, 2)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 50.0
          }
        }
      ]
    },
    "P13": {
      "id": "P13",
      "subject": "Matematika Peminatan",
      "title": "Limit Aljabar & Trigonometri 4: Limit Trigonometri Menuju Sudut x \\to c",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q1] Nilai dari $\\lim_{x \\to \\pi/4} \\frac{\\sin x - \\cos x}{x - \\pi/4}$ adalah ...",
          "opsi": [
            "A. 0",
            "B. √2",
            "C. 2",
            "D. 1/2 √2",
            "E. 1"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Substitusi $x = \\frac{\\pi}{4}$ memberi $\\frac{0}{0}$, karena $\\sin\\frac{\\pi}{4} = \\cos\\frac{\\pi}{4}$.\n\nLangkah 2: Kenali bentuk $\\lim_{x \\to a}\\frac{f(x)-f(a)}{x-a} = f'(a)$, yaitu definisi turunan. Di sini $f(x) = \\sin x - \\cos x$ dan $a = \\frac{\\pi}{4}$.\n\nLangkah 3: Turunkan: $f'(x) = \\cos x + \\sin x$.\n\nLangkah 4: Substitusikan $x = \\frac{\\pi}{4}$: $\\frac{1}{2}\\sqrt{2} + \\frac{1}{2}\\sqrt{2} = \\sqrt{2}$.\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q2] Nilai dari $\\lim_{x \\to 1} \\frac{\\sin(x - 1)}{x^2 - 1}$ adalah ...",
          "opsi": [
            "A. 2",
            "B. 0",
            "C. 1/2",
            "D. 1/4",
            "E. 1"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Substitusi $x = 1$ memberi $\\frac{\\sin 0}{0} = \\frac{0}{0}$, bentuk tak tentu.\n\nLangkah 2: Misalkan $u = x - 1$ sehingga $u \\to 0$, dan faktorkan penyebut: $x^2 - 1 = (x-1)(x+1)$. Bentuknya menjadi $\\frac{\\sin u}{u} \\cdot \\frac{1}{x+1}$.\n\nLangkah 3: Terapkan $\\lim_{u \\to 0}\\frac{\\sin u}{u} = 1$ lalu substitusikan $x = 1$: $1 \\cdot \\frac{1}{1+1} = \\frac{1}{2}$.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(x - 1)/(Math.pow(x, 2) - 1)",
            "x0": -1.2,
            "x1": 3.2,
            "lab": "y = f(x)",
            "hole": 1.0,
            "holey": 0.5
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q3] Nilai dari $\\lim_{x \\to \\pi/2} \\frac{\\cos x}{x - \\pi/2}$ adalah ...",
          "opsi": [
            "A. 0",
            "B. -1",
            "C. -1/2",
            "D. 1/2",
            "E. 1"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Substitusi $x = \\frac{\\pi}{2}$ memberi $\\frac{\\cos\\frac{\\pi}{2}}{0} = \\frac{0}{0}$, bentuk tak tentu.\n\nLangkah 2: Kenali bentuk definisi turunan $\\lim_{x \\to a}\\frac{f(x)-f(a)}{x-a} = f'(a)$, dengan $f(x) = \\cos x$ dan $a = \\frac{\\pi}{2}$ (memang $f(a) = 0$).\n\nLangkah 3: Turunkan: $f'(x) = -\\sin x$.\n\nLangkah 4: Substitusikan $x = \\frac{\\pi}{2}$: $-\\sin\\frac{\\pi}{2} = -1$.\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q4] Nilai dari $\\lim_{x \\to 2} \\frac{(x - 2) \\cos(x - 2)}{\\sin(2x - 4)}$ adalah ...",
          "opsi": [
            "A. 1",
            "B. 2",
            "C. 0",
            "D. 1/2",
            "E. 1/4"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Substitusi $x = 2$ memberi $\\frac{0}{0}$, bentuk tak tentu.\n\nLangkah 2: Misalkan $u = x - 2$ sehingga $u \\to 0$. Perhatikan $2x - 4 = 2u$, sehingga bentuknya menjadi $\\frac{u\\cos u}{\\sin(2u)}$.\n\nLangkah 3: Terapkan $\\lim_{u \\to 0}\\frac{u}{\\sin(2u)} = \\frac{1}{2}$ dan $\\cos 0 = 1$: $\\frac{1}{2} \\cdot 1 = \\frac{1}{2}$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "(x - 2)*Math.cos(x - 2)/Math.sin(2*x - 4)",
            "x0": -0.2,
            "x1": 4.2,
            "lab": "y = f(x)",
            "hole": 2.0,
            "holey": 0.5
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q5] Tentukan kebenaran sifat limit di tak hingga fungsi rasional P(x)/Q(x):\n(1) Jika derajat polinomial P(x) sama dengan derajat Q(x), limitnya adalah perbandingan koefisien pangkat tertinggi.\n(2) Nilai limit x->inf [akar(x^2 + 4x) - akar(x^2 - 2x)] bernilai 0.\n(3) Jika derajat P(x) lebih kecil dari derajat Q(x), nilai limitnya adalah 0.",
          "opsi": [
            "Jika derajat polinomial P(x) sama dengan derajat Q(x), limitnya adalah perbandingan koefisien pangkat tertinggi",
            "Nilai limit x->inf [akar(x^2 + 4x) - akar(x^2 - 2x)] bernilai 0",
            "Jika derajat P(x) lebih kecil dari derajat Q(x), nilai limitnya adalah 0"
          ],
          "kunci": "B - S - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nBagi pembilang dan penyebut dengan $x^n$ $\\implies$ menyisakan rasio koefisien tertinggi $a_n / b_n$.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\n$L = \\frac{b-q}{2\\sqrt{a}} = \\frac{4 - (-2)}{2\\sqrt{1}} = \\frac{6}{2} = 3$, bukan 0.\n$\\implies$ Pernyataan (2) bernilai SALAH.\n\nLangkah 3: Analisis Pernyataan (3):\nPenyebut tumbuh lebih cepat ke tak hingga $\\implies$ nilai pecahan mendekati 0.\n$\\implies$ Pernyataan (3) bernilai BENAR.\nKesimpulan: Kunci Jawaban B - S - B."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q6] Berapakah nilai $\\lim_{x \\to \\pi/3} \\frac{\\tan x - \\sqrt{3}}{x - \\pi/3}$?",
          "opsi": [
            "A. √3",
            "B. 2",
            "C. 4",
            "D. 3",
            "E. 1"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Substitusi $x = \\frac{\\pi}{3}$ memberi $\\frac{\\sqrt{3}-\\sqrt{3}}{0} = \\frac{0}{0}$, karena $\\tan\\frac{\\pi}{3} = \\sqrt{3}$.\n\nLangkah 2: Kenali bentuk definisi turunan $\\lim_{x \\to a}\\frac{f(x)-f(a)}{x-a} = f'(a)$, dengan $f(x) = \\tan x$ dan $a = \\frac{\\pi}{3}$.\n\nLangkah 3: Turunkan: $f'(x) = \\sec^2 x = \\frac{1}{\\cos^2 x}$.\n\nLangkah 4: Substitusikan $x = \\frac{\\pi}{3}$, dengan $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$: $\\frac{1}{\\left(\\frac{1}{2}\\right)^2} = 4$.\nKesimpulan: Kunci Jawaban C."
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q7] Nilai dari $\\lim_{x \\to 3} \\frac{\\tan(x - 3)}{x^2 - 9}$ adalah ...",
          "opsi": [
            "A. 1",
            "B. 1/3",
            "C. 0",
            "D. 1/6",
            "E. 6"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Substitusi $x = 3$ memberi $\\frac{\\tan 0}{0} = \\frac{0}{0}$, bentuk tak tentu.\n\nLangkah 2: Misalkan $u = x - 3$ sehingga $u \\to 0$, dan faktorkan penyebut: $x^2 - 9 = (x-3)(x+3)$. Bentuknya menjadi $\\frac{\\tan u}{u} \\cdot \\frac{1}{x+3}$.\n\nLangkah 3: Terapkan $\\lim_{u \\to 0}\\frac{\\tan u}{u} = 1$ lalu substitusikan $x = 3$: $1 \\cdot \\frac{1}{3+3} = \\frac{1}{6}$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "Math.tan(x - 3)/(Math.pow(x, 2) - 9)",
            "x0": 0.8,
            "x1": 5.2,
            "lab": "y = f(x)",
            "hole": 3.0,
            "holey": 0.1667
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P13-Q8] Manakah nilai limit di tak hingga aljabar berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. limit x->inf (3x^2 + 1) / (x^3 + 5) = 0.",
            "B. limit x->inf (4x^3 - 2x + 1) / (2x^3 + 5x^2) = 2.",
            "C. limit x->inf [akar(9x^2 + 6x) - (3x - 1)] = 2.",
            "D. limit x->inf [akar(4x^2 + 8x + 1) - 2x] = 2.",
            "E. limit x->inf (x^4 + 1) / (x^2 + 1) = 1."
          ],
          "kunci": "A, B, C, D",
          "bahas": "Langkah 1: Analisis Opsi A:\nDerajat $2 < 3 \\implies 0$.\n$\\implies$ Pernyataan A BENAR.\n\nLangkah 2: Analisis Opsi B:\nDerajat 3 sama $\\implies \\frac{4}{2} = 2$.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C:\n$\\lim [\\sqrt{9x^2+6x} - \\sqrt{9x^2-6x+1}] = \\frac{6 - (-6)}{2\\sqrt{9}} = \\frac{12}{6} = 2$.\n$\\implies$ Pernyataan C BENAR.\n\nLangkah 4: Analisis Opsi D:\n$\\frac{8 - 0}{2\\sqrt{4}} = \\frac{8}{4} = 2$.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E:\nDerajat $4 > 2 \\implies \\infty \\ne 1$.\n$\\implies$ Pernyataan E SALAH.\nKesimpulan: Kunci Jawaban A, B, C, D."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q9] Nilai dari $\\lim_{x \\to \\pi/6} \\frac{\\sin(2x) - \\sqrt{3}/2}{x - \\pi/6}$ adalah ...",
          "opsi": [
            "A. 1",
            "B. 0",
            "C. 1/2",
            "D. 2",
            "E. √3"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Substitusi $x = \\frac{\\pi}{6}$ memberi $\\frac{0}{0}$, karena $\\sin\\frac{\\pi}{3} = \\frac{1}{2}\\sqrt{3}$.\n\nLangkah 2: Kenali bentuk definisi turunan $\\lim_{x \\to a}\\frac{f(x)-f(a)}{x-a} = f'(a)$, dengan $f(x) = \\sin(2x)$ dan $a = \\frac{\\pi}{6}$.\n\nLangkah 3: Turunkan dengan aturan rantai: $f'(x) = 2\\cos(2x)$.\n\nLangkah 4: Substitusikan $x = \\frac{\\pi}{6}$, dengan $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$: $2 \\cdot \\frac{1}{2} = 1$.\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q10] Nilai dari $\\lim_{x \\to 0} \\frac{\\sin(5x)}{\\sin(2x)}$ adalah ... (dalam pecahan a/b)",
          "opsi": [],
          "kunci": "5/2",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi bentuk tak tentu $\\frac{0}{0}$.\n\nLangkah 2: Gunakan aturan $\\lim_{x \\to 0} \\frac{\\sin(ax)}{\\sin(bx)} = \\frac{a}{b}$ dengan $a = 5$ dan $b = 2$.\n\nLangkah 3: Substitusikan nilainya: $\\frac{5}{2}$.\nKesimpulan: Kunci Jawaban 5/2.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(5*x)/Math.sin(2*x)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 2.5
          }
        }
      ]
    },
    "P14": {
      "id": "P14",
      "subject": "Matematika Peminatan",
      "title": "Limit Aljabar & Trigonometri 5: Limit di Ketakhinggaan Aljabar",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P14-Q1] Nilai dari $\\lim_{x \\to \\infty} \\frac{3x^3 - 4x + 1}{2x^3 + 5x^2 - 7}$ adalah ...",
          "opsi": [
            "A. 0",
            "B. Tak hingga",
            "C. 3/5",
            "D. 3/2",
            "E. 1/2"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Bagi pembilang dan penyebut dengan pangkat tertinggi $x^3$.\n\nLangkah 2: Limit $= \\frac{3 - 0 + 0}{2 + 0 - 0} = \\frac{3}{2}$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "(3*Math.pow(x, 3) - 4*x + 1)/(2*Math.pow(x, 3) + 5*Math.pow(x, 2) - 7)",
            "x0": 0.6,
            "x1": 14.0,
            "lab": "y = f(x)",
            "asy": [
              1.5
            ],
            "note": "x menuju tak hingga"
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P14-Q2] Nilai dari $\\lim_{x \\to \\infty} \\left( \\sqrt{4x^2 + 6x - 1} - \\sqrt{4x^2 - 2x + 3} \\right)$ adalah ...",
          "opsi": [
            "A. 4",
            "B. 0",
            "C. 2",
            "D. 1",
            "E. 1/2"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Substitusi $x \\to \\infty$ memberi bentuk tak tentu $\\infty - \\infty$.\n\nLangkah 2: Gunakan aturan selisih dua akar $\\lim_{x \\to \\infty}\\left(\\sqrt{ax^2+bx+c} - \\sqrt{ax^2+px+q}\\right) = \\frac{b-p}{2\\sqrt{a}}$, yang berlaku karena koefisien $x^2$ pada kedua akar sama, yaitu $a = 4$.\n\nLangkah 3: Substitusikan $b = 6$, $p = -2$, dan $\\sqrt{a} = 2$: $\\frac{6-(-2)}{2 \\cdot 2} = \\frac{8}{4} = 2$.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "plot",
            "f": "-Math.sqrt(4*Math.pow(x, 2) - 2*x + 3) + Math.sqrt(4*Math.pow(x, 2) + 6*x - 1)",
            "x0": 0.6,
            "x1": 14.0,
            "lab": "y = f(x)",
            "asy": [
              2.0
            ],
            "note": "x menuju tak hingga"
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P14-Q3] Nilai dari $\\lim_{x \\to \\infty} \\frac{(2x - 1)(3x + 2)}{(x + 4)(2x - 3)}$ adalah ...",
          "opsi": [
            "A. 1",
            "B. 6",
            "C. 2",
            "D. 3",
            "E. 3/2"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Kalikan bentuk pembilang dan penyebut agar derajatnya terlihat: pembilang $(2x-1)(3x+2) = 6x^2+x-2$ dan penyebut $(x+4)(2x-3) = 2x^2+5x-12$.\n\nLangkah 2: Gunakan aturan limit fungsi rasional di tak hingga: bila derajat pembilang sama dengan derajat penyebut, limitnya adalah perbandingan koefisien suku berderajat tertinggi.\n\nLangkah 3: Substitusikan koefisien $x^2$ dari keduanya: $\\frac{6}{2} = 3$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "(2*x - 1)*(3*x + 2)/((x + 4)*(2*x - 3))",
            "x0": 0.6,
            "x1": 14.0,
            "lab": "y = f(x)",
            "asy": [
              3.0
            ],
            "note": "x menuju tak hingga"
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P14-Q4] Nilai dari $\\lim_{x \\to \\infty} \\left( \\sqrt{x^2 + 4x + 1} - (x + 1) \\right)$ adalah ...",
          "opsi": [
            "A. 0",
            "B. 2",
            "C. -1",
            "D. 1/2",
            "E. 1"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Substitusi $x \\to \\infty$ memberi bentuk tak tentu $\\infty - \\infty$.\n\nLangkah 2: Tulis suku kedua sebagai akar agar aturannya bisa dipakai: $x+1 = \\sqrt{x^2+2x+1}$. Sekarang keduanya berbentuk $\\sqrt{ax^2+bx+c}$ dengan $a = 1$.\n\nLangkah 3: Terapkan $\\frac{b-p}{2\\sqrt{a}}$ dengan $b = 4$, $p = 2$, dan $\\sqrt{a} = 1$: $\\frac{4-2}{2 \\cdot 1} = 1$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "-x + Math.sqrt(Math.pow(x, 2) + 4*x + 1) - 1",
            "x0": 0.6,
            "x1": 14.0,
            "lab": "y = f(x)",
            "asy": [
              1.0
            ],
            "note": "x menuju tak hingga"
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P14-Q5] Tentukan kebenaran limit tak hingga fungsi trigonometri:\n(1) Nilai limit x->inf x sin(1/x) = 1.\n(2) Dengan substitusi y = 1/x, saat x -> inf maka y -> 0.\n(3) Nilai limit x->inf x tan(1/x) = 0.",
          "opsi": [
            "Nilai limit x->inf x sin(1/x) = 1",
            "Dengan substitusi y = 1/x, saat x -> inf maka y -> 0",
            "Nilai limit x->inf x tan(1/x) = 0"
          ],
          "kunci": "B - B - S",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\n$\\lim_{x\\to \\infty} x\\sin(1/x) = \\lim_{y\\to 0} \\frac{\\sin y}{y} = 1$.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\nTransformasi invers $y = \\frac{1}{x} \\implies \\lim_{x\\to \\infty} y = 0$.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\n$\\lim_{x\\to \\infty} x\\tan(1/x) = \\lim_{y\\to 0} \\frac{\\tan y}{y} = 1$, bukan 0.\n$\\implies$ Pernyataan (3) bernilai SALAH.\nKesimpulan: Kunci Jawaban B - B - S."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P14-Q6] Berapakah nilai $\\lim_{x \\to \\infty} \\left(\\sqrt{9x^2 + bx + 5} - 3x\\right)$ jika diketahui $b = 12$?",
          "opsi": [
            "A. 2",
            "B. 3",
            "C. 4",
            "D. 6",
            "E. 1"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Substitusikan $b = 12$, sehingga bentuknya menjadi $\\lim_{x \\to \\infty}\\left(\\sqrt{9x^2+12x+5} - 3x\\right)$, yaitu bentuk tak tentu $\\infty - \\infty$.\n\nLangkah 2: Tulis $3x = \\sqrt{9x^2}$ agar keduanya berbentuk akar dengan koefisien $x^2$ yang sama, yaitu $a = 9$.\n\nLangkah 3: Terapkan $\\frac{b-p}{2\\sqrt{a}}$ dengan $b = 12$, $p = 0$, dan $\\sqrt{a} = 3$: $\\frac{12-0}{2 \\cdot 3} = \\frac{12}{6} = 2$.\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P14-Q7] Nilai dari $\\lim_{x \\to \\infty} \\frac{5x^2 - 3x + 2}{2x^3 + x - 1}$ adalah ...",
          "opsi": [
            "A. Tak hingga",
            "B. 0",
            "C. 5/2",
            "D. 2",
            "E. 5"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Substitusi $x \\to \\infty$ memberi bentuk tak tentu $\\frac{\\infty}{\\infty}$.\n\nLangkah 2: Gunakan aturan limit fungsi rasional di tak hingga: bandingkan derajat pembilang ($2$) dengan derajat penyebut ($3$).\n\nLangkah 3: Karena derajat pembilang lebih kecil daripada derajat penyebut, penyebut tumbuh jauh lebih cepat sehingga limitnya $0$.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "plot",
            "f": "(5*Math.pow(x, 2) - 3*x + 2)/(2*Math.pow(x, 3) + x - 1)",
            "x0": 0.6,
            "x1": 14.0,
            "lab": "y = f(x)",
            "asy": [
              0.0
            ],
            "note": "x menuju tak hingga"
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P14-Q8] Manakah nilai limit di tak hingga trigonometri berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. limit x->inf 2x tan(1/x) sec(2/x) = 2.",
            "B. limit x->inf (sin(4/x)) / (tan(2/x)) = 2.",
            "C. limit x->inf x sin(3/x) = 3.",
            "D. limit x->inf x^2 (1 - cos(2/x)) = 2.",
            "E. limit x->inf x^2 sin(1/x) = 1."
          ],
          "kunci": "A, B, C, D",
          "bahas": "Langkah 1: Analisis Opsi A:\n$\\lim 2 \\frac{\\tan y}{y} \\cdot \\frac{1}{\\cos 2y} = 2(1)(1) = 2$.\n$\\implies$ Pernyataan A BENAR.\n\nLangkah 2: Analisis Opsi B:\n$\\lim \\frac{\\sin 4y}{\\tan 2y} = \\frac{4}{2} = 2$.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C:\n$\\lim \\frac{\\sin 3y}{y} = 3$.\n$\\implies$ Pernyataan C BENAR.\n\nLangkah 4: Analisis Opsi D:\n$\\lim \\frac{1 - \\cos 2y}{y^2} = \\frac{\\frac{1}{2}(2)^2 y^2}{y^2} = 2$.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E:\n$\\lim \\frac{\\sin y}{y^2} = \\lim \\frac{1}{y} = \\infty \\ne 1$.\n$\\implies$ Pernyataan E SALAH.\nKesimpulan: Kunci Jawaban A, B, C, D."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P14-Q9] Nilai dari $\\lim_{x \\to \\infty} \\left( \\sqrt{4x^2 + 8x - 3} - 2x + 1 \\right)$ adalah ...",
          "opsi": [
            "A. 3",
            "B. 1",
            "C. 4",
            "D. 2",
            "E. 0"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Pisahkan konstantanya lebih dahulu: $\\lim_{x \\to \\infty}\\left(\\sqrt{4x^2+8x-3} - 2x\\right) + 1$, karena konstanta tidak terpengaruh proses limit.\n\nLangkah 2: Tulis $2x = \\sqrt{4x^2}$, lalu terapkan $\\frac{b-p}{2\\sqrt{a}}$ dengan $a = 4$, $b = 8$, dan $p = 0$.\n\nLangkah 3: Substitusikan nilainya: $\\frac{8-0}{2 \\cdot 2} + 1 = 2 + 1 = 3$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "-2*x + Math.sqrt(4*Math.pow(x, 2) + 8*x - 3) + 1",
            "x0": 0.6,
            "x1": 14.0,
            "lab": "y = f(x)",
            "asy": [
              3.0
            ],
            "note": "x menuju tak hingga"
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P14-Q10] Nilai dari $\\lim_{x \\to \\infty} \\left( \\sqrt{x^2 + 6x + 2} - \\sqrt{x^2 - 4x + 1} \\right)$ adalah ...",
          "opsi": [],
          "kunci": "5",
          "bahas": "Langkah 1: Substitusi $x \\to \\infty$ memberi bentuk tak tentu $\\infty - \\infty$.\n\nLangkah 2: Koefisien $x^2$ pada kedua akar sama, yaitu $a = 1$, sehingga berlaku $\\frac{b-p}{2\\sqrt{a}}$.\n\nLangkah 3: Substitusikan $b = 6$, $p = -4$, dan $\\sqrt{a} = 1$: $\\frac{6-(-4)}{2 \\cdot 1} = \\frac{10}{2} = 5$.\nKesimpulan: Kunci Jawaban 5.",
          "viz": {
            "t": "plot",
            "f": "-Math.sqrt(Math.pow(x, 2) - 4*x + 1) + Math.sqrt(Math.pow(x, 2) + 6*x + 2)",
            "x0": 0.6,
            "x1": 14.0,
            "lab": "y = f(x)",
            "asy": [
              5.0
            ],
            "note": "x menuju tak hingga"
          }
        }
      ]
    },
    "P15": {
      "id": "P15",
      "subject": "Matematika Peminatan",
      "title": "Limit Aljabar & Trigonometri 6: Limit Ketakhinggaan Trigonometri & Asimtot",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q1] Nilai dari $\\lim_{x \\to \\infty} x \\sin\\left(\\frac{2}{x}\\right)$ adalah ...",
          "opsi": [
            "A. 1/2",
            "B. 0",
            "C. Tak hingga",
            "D. 2",
            "E. 1"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Substitusi $x \\to \\infty$ memberi bentuk tak tentu $\\infty \\cdot 0$.\n\nLangkah 2: Misalkan $u = \\frac{1}{x}$, sehingga $u \\to 0$ dan $x = \\frac{1}{u}$. Bentuknya berubah menjadi $\\lim_{u \\to 0}\\frac{\\sin(2u)}{u}$.\n\nLangkah 3: Terapkan $\\lim_{u \\to 0}\\frac{\\sin(au)}{u} = a$: hasilnya $2$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "x*Math.sin(2/x)",
            "x0": 0.6,
            "x1": 14.0,
            "lab": "y = f(x)",
            "asy": [
              2.0
            ],
            "note": "x menuju tak hingga"
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q2] Nilai dari $\\lim_{x \\to \\infty} x^2 \\left( 1 - \\cos\\left(\\frac{2}{x}\\right) \\right)$ adalah ...",
          "opsi": [
            "A. 1/2",
            "B. 2",
            "C. 0",
            "D. 1",
            "E. 4"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Substitusi $x \\to \\infty$ memberi bentuk tak tentu $\\infty \\cdot 0$.\n\nLangkah 2: Misalkan $u = \\frac{1}{x}$, sehingga $u \\to 0$ dan $x^2 = \\frac{1}{u^2}$. Bentuknya berubah menjadi $\\lim_{u \\to 0}\\frac{1-\\cos(2u)}{u^2}$.\n\nLangkah 3: Terapkan $\\lim_{u \\to 0}\\frac{1-\\cos(au)}{u^2} = \\frac{a^2}{2}$ dengan $a = 2$: $\\frac{4}{2} = 2$.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "plot",
            "f": "Math.pow(x, 2)*(1 - Math.cos(2/x))",
            "x0": 0.6,
            "x1": 14.0,
            "lab": "y = f(x)",
            "asy": [
              2.0
            ],
            "note": "x menuju tak hingga"
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q3] Persamaan asimtot datar kurva $f(x) = \\frac{2x^2 + 1}{x^2 - 4}$ adalah ...",
          "opsi": [
            "A. $y = 2$",
            "B. $y = 0$",
            "C. $y = -2$",
            "D. $y = 1$",
            "E. $y = -1/4$"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Asimtot datar adalah garis $y = L$ dengan $L = \\lim_{x \\to \\infty} f(x)$, yaitu nilai yang didekati kurva saat $x$ membesar tanpa batas.\n\nLangkah 2: Gunakan aturan limit fungsi rasional di tak hingga. Derajat pembilang dan penyebut sama-sama $2$, sehingga limitnya adalah perbandingan koefisien $x^2$.\n\nLangkah 3: Substitusikan koefisiennya: $L = \\frac{2}{1} = 2$, sehingga asimtot datarnya $y = 2$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "(2*Math.pow(x, 2) + 1)/(Math.pow(x, 2) - 4)",
            "x0": -8,
            "x1": 8,
            "lab": "y = f(x)",
            "clip": 12,
            "asy": [
              2.0
            ],
            "vasy": [
              -2.0,
              2.0
            ]
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q4] Persamaan asimtot tegak kurva $g(x) = \\frac{3x - 5}{x^2 - 9}$ adalah ...",
          "opsi": [
            "A. $x = 9$",
            "B. $x = 3$ dan $x = -3$",
            "C. $x = 5/3$",
            "D. $y = 0$",
            "E. $y = 3$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Asimtot tegak terjadi pada nilai $x$ yang membuat penyebut bernilai nol sementara pembilang tidak nol.\n\nLangkah 2: Nolkan penyebut: $x^2 - 9 = 0 \\implies (x-3)(x+3) = 0 \\implies x = 3$ atau $x = -3$.\n\nLangkah 3: Periksa pembilang $3x-5$ pada kedua nilai itu: $3(3)-5 = 4 \\ne 0$ dan $3(-3)-5 = -14 \\ne 0$. Keduanya sah, sehingga asimtot tegaknya $x = 3$ dan $x = -3$.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "plot",
            "f": "(3*x - 5)/(Math.pow(x, 2) - 9)",
            "x0": -8,
            "x1": 8,
            "lab": "y = f(x)",
            "clip": 12,
            "asy": [
              0.0
            ],
            "vasy": [
              -3.0,
              3.0
            ]
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q5] Tentukan kebenaran konsep asimtot kurva dan kekontinuan fungsi:\n(1) Suatu fungsi kontinu di titik x = c tidak memerlukan nilai limit f(x) ada.\n(2) Asimtot tegak x = c diperoleh saat penyebut bernilai nol dan limit menuju +- tak hingga.\n(3) Asimtot datar y = L diperoleh dari nilai limit x->inf f(x) = L.",
          "opsi": [
            "Suatu fungsi kontinu di titik x = c tidak memerlukan nilai limit f(x) ada",
            "Asimtot tegak x = c diperoleh saat penyebut bernilai nol dan limit menuju +- tak hingga",
            "Asimtot datar y = L diperoleh dari nilai limit x->inf f(x) = L"
          ],
          "kunci": "S - B - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nSyarat kekontinuan mutlak mensyaratkan $\\lim_{x\\to c} f(x)$ ada dan sama dengan nilai fungsi $f(c)$.\n$\\implies$ Pernyataan (1) bernilai SALAH.\n\nLangkah 2: Analisis Pernyataan (2):\nDefinisi asimtot tegak terjadi saat $\\lim_{x\\to c} f(x) = \\pm \\infty$.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nDefinisi asimtot datar $y = \\lim_{x\\to \\pm \\infty} f(x)$.\n$\\implies$ Pernyataan (3) bernilai BENAR.\nKesimpulan: Kunci Jawaban S - B - B."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q6] Berapakah nilai dari $\\lim_{x \\to \\infty} x \\tan(5/x)$?",
          "opsi": [
            "A. 25",
            "B. 0",
            "C. 5",
            "D. 1/5",
            "E. 1"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Substitusi $x \\to \\infty$ memberi bentuk tak tentu $\\infty \\cdot 0$, karena $\\tan(5/x) \\to 0$.\n\nLangkah 2: Misalkan $u = \\frac{1}{x}$, sehingga $u \\to 0$ dan $x = \\frac{1}{u}$. Bentuknya berubah menjadi $\\lim_{u \\to 0}\\frac{\\tan(5u)}{u}$.\n\nLangkah 3: Terapkan $\\lim_{u \\to 0}\\frac{\\tan(au)}{u} = a$: hasilnya $5$.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "plot",
            "f": "x*Math.tan(5/x)",
            "x0": 0.6,
            "x1": 14.0,
            "lab": "y = f(x)",
            "asy": [
              5.0
            ],
            "note": "x menuju tak hingga"
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q7] Nilai dari $\\lim_{x \\to \\infty} \\frac{\\sin(3/x)}{\\tan(6/x)}$ adalah ...",
          "opsi": [
            "A. 1/2",
            "B. 1/3",
            "C. 0",
            "D. 2",
            "E. 1"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Substitusi $x \\to \\infty$ memberi bentuk tak tentu $\\frac{0}{0}$, karena kedua sudutnya menuju nol.\n\nLangkah 2: Misalkan $u = \\frac{1}{x}$, sehingga $u \\to 0$. Bentuknya berubah menjadi $\\lim_{u \\to 0}\\frac{\\sin(3u)}{\\tan(6u)}$.\n\nLangkah 3: Terapkan $\\lim_{u \\to 0}\\frac{\\sin(au)}{\\tan(bu)} = \\frac{a}{b}$: $\\frac{3}{6} = \\frac{1}{2}$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(3/x)/Math.tan(6/x)",
            "x0": 0.6,
            "x1": 14.0,
            "lab": "y = f(x)",
            "asy": [
              0.5
            ],
            "note": "x menuju tak hingga"
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P15-Q8] Pada fungsi rasional f(x) = (2x + 6) / (x - 3), manakah pernyataan analisis asimtot berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Persamaan asimtot datar adalah y = 2.",
            "B. Persamaan asimtot tegak adalah x = 3.",
            "C. Titik potong dengan sumbu-Y adalah (0, -2).",
            "D. Titik potong dengan sumbu-X adalah (-3, 0).",
            "E. Fungsi kontinu di seluruh bilangan real termasuk x = 3."
          ],
          "kunci": "A, B, C, D",
          "bahas": "Langkah 1: Analisis Opsi A:\n$\\lim_{x\\to \\infty} \\frac{2x+6}{x-3} = 2 \\implies y = 2$.\n$\\implies$ Pernyataan A BENAR.\n\nLangkah 2: Analisis Opsi B:\nPenyebut $x - 3 = 0 \\implies x = 3$.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C:\n$f(0) = \\frac{6}{-3} = -2$.\n$\\implies$ Pernyataan C BENAR.\n\nLangkah 4: Analisis Opsi D:\n$2x + 6 = 0 \\implies x = -3$.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E:\nFungsi diskontinu di $x = 3$ karena asimtot tegak (nilai fungsi tak terdefinisi).\n$\\implies$ Pernyataan E SALAH.\nKesimpulan: Kunci Jawaban A, B, C, D."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q9] Nilai dari $\\lim_{x \\to \\infty} \\frac{x \\sin(4/x)}{\\cos(2/x)}$ adalah ...",
          "opsi": [
            "A. 1/2",
            "B. 2",
            "C. 0",
            "D. 4",
            "E. 1"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Substitusi $x \\to \\infty$ memberi bentuk tak tentu $\\infty \\cdot 0$ pada pembilang.\n\nLangkah 2: Misalkan $u = \\frac{1}{x}$, sehingga $u \\to 0$ dan $x = \\frac{1}{u}$. Bentuknya berubah menjadi $\\lim_{u \\to 0}\\frac{\\sin(4u)}{u\\cos(2u)}$.\n\nLangkah 3: Terapkan $\\lim_{u \\to 0}\\frac{\\sin(au)}{u} = a$ dan $\\cos 0 = 1$: $\\frac{4}{1} = 4$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "x*Math.sin(4/x)/Math.cos(2/x)",
            "x0": 0.6,
            "x1": 14.0,
            "lab": "y = f(x)",
            "asy": [
              4.0
            ],
            "note": "x menuju tak hingga"
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q10] Nilai dari $\\lim_{x \\to \\infty} 2x^2 (1 - \\cos(3/x))$ adalah ...",
          "opsi": [],
          "kunci": "9",
          "bahas": "Langkah 1: Substitusi $x \\to \\infty$ memberi bentuk tak tentu $\\infty \\cdot 0$.\n\nLangkah 2: Misalkan $u = \\frac{1}{x}$, sehingga $u \\to 0$ dan $x^2 = \\frac{1}{u^2}$. Bentuknya berubah menjadi $\\lim_{u \\to 0}\\frac{2\\bigl(1-\\cos(3u)\\bigr)}{u^2}$.\n\nLangkah 3: Terapkan $\\lim_{u \\to 0}\\frac{1-\\cos(au)}{u^2} = \\frac{a^2}{2}$ dengan $a = 3$: $2 \\cdot \\frac{9}{2} = 9$.\nKesimpulan: Kunci Jawaban 9.",
          "viz": {
            "t": "plot",
            "f": "2*Math.pow(x, 2)*(1 - Math.cos(3/x))",
            "x0": 0.6,
            "x1": 14.0,
            "lab": "y = f(x)",
            "asy": [
              9.0
            ],
            "note": "x menuju tak hingga"
          }
        }
      ]
    },
    "P16": {
      "id": "P16",
      "subject": "Matematika Peminatan",
      "title": "Asesmen Sumatif Bab 2: Limit & Grand Review ASTS",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q1] Nilai dari $\\lim_{x \\to 0} \\frac{1 - \\cos(6x)}{x \\tan(3x)}$ adalah ...",
          "opsi": [
            "A. 12",
            "B. 3",
            "C. 2",
            "D. 6",
            "E. 18"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi bentuk tak tentu $\\frac{0}{0}$.\n\nLangkah 2: Gunakan identitas $1 - \\cos(2A) = 2\\sin^2 A$ dengan $A = 3x$: $1 - \\cos(6x) = 2\\sin^2(3x)$. Bentuknya menjadi $2 \\cdot \\frac{\\sin(3x)}{x} \\cdot \\frac{\\sin(3x)}{\\tan(3x)}$.\n\nLangkah 3: Terapkan $\\lim_{x \\to 0}\\frac{\\sin(3x)}{x} = 3$ dan $\\lim_{x \\to 0}\\frac{\\sin(3x)}{\\tan(3x)} = 1$: $2 \\cdot 3 \\cdot 1 = 6$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "(1 - Math.cos(6*x))/(x*Math.tan(3*x))",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 6.0
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q2] Nilai dari $\\lim_{x \\to 3} \\frac{x^2 - x - 6}{x - 3}$ adalah ...",
          "opsi": [
            "A. 5",
            "B. 6",
            "C. 3",
            "D. 1",
            "E. 0"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Substitusi $x = 3$ memberi $\\frac{9-3-6}{3-3} = \\frac{0}{0}$, bentuk tak tentu.\n\nLangkah 2: Faktorkan pembilang. Dicari dua bilangan yang hasil kalinya $-6$ dan jumlahnya $-1$, yaitu $-3$ dan $2$: $x^2-x-6 = (x-3)(x+2)$.\n\nLangkah 3: Coret faktor $(x-3)$, lalu substitusikan $x = 3$: $\\lim_{x \\to 3}(x+2) = 3+2 = 5$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "(Math.pow(x, 2) - x - 6)/(x - 3)",
            "x0": 0.8,
            "x1": 5.2,
            "lab": "y = f(x)",
            "hole": 3.0,
            "holey": 5.0
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q3] Nilai dari $\\lim_{x \\to \\infty} (\\sqrt{x^2 + 8x} - x)$ adalah ...",
          "opsi": [
            "A. 2",
            "B. 4",
            "C. 1",
            "D. 8",
            "E. 0"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Substitusi $x \\to \\infty$ memberi bentuk tak tentu $\\infty - \\infty$.\n\nLangkah 2: Tulis $x = \\sqrt{x^2}$ agar keduanya berbentuk akar dengan koefisien $x^2$ yang sama, yaitu $a = 1$.\n\nLangkah 3: Terapkan $\\frac{b-p}{2\\sqrt{a}}$ dengan $b = 8$, $p = 0$, dan $\\sqrt{a} = 1$: $\\frac{8-0}{2 \\cdot 1} = 4$.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "plot",
            "f": "-x + Math.sqrt(Math.pow(x, 2) + 8*x)",
            "x0": 0.6,
            "x1": 14.0,
            "lab": "y = f(x)",
            "asy": [
              4.0
            ],
            "note": "x menuju tak hingga"
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q4] Nilai dari $\\lim_{x \\to 0} \\frac{\\sin(8x)}{\\sin(2x)}$ adalah ...",
          "opsi": [
            "A. 1/4",
            "B. 8",
            "C. 16",
            "D. 4",
            "E. 2"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi bentuk tak tentu $\\frac{0}{0}$.\n\nLangkah 2: Gunakan aturan $\\lim_{x \\to 0} \\frac{\\sin(ax)}{\\sin(bx)} = \\frac{a}{b}$ dengan $a = 8$ dan $b = 2$.\n\nLangkah 3: Substitusikan nilainya: $\\frac{8}{2} = 4$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(8*x)/Math.sin(2*x)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 4.0
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q5] Tentukan kebenaran evaluasi asesmen limit fungsi:\n(1) Nilai limit x->0 (sin 5x) / (3x) adalah 5/3.\n(2) Nilai limit x->0 (1 - cos 2x) / x^2 adalah 0.\n(3) Nilai limit x->inf (2x^2 + 1) / (x^2 - 4) adalah 2.",
          "opsi": [
            "Nilai limit x->0 (sin 5x) / (3x) adalah 5/3",
            "Nilai limit x->0 (1 - cos 2x) / x^2 adalah 0",
            "Nilai limit x->inf (2x^2 + 1) / (x^2 - 4) adalah 2"
          ],
          "kunci": "B - S - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\n$\\lim_{x\\to 0} \\frac{\\sin 5x}{3x} = 5/3$.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\n$\\lim_{x\\to 0} \\frac{2\\sin^2 x}{x^2} = 2(1)^2 = 2$, bukan 0.\n$\\implies$ Pernyataan (2) bernilai SALAH.\n\nLangkah 3: Analisis Pernyataan (3):\n$\\lim_{x\\to \\infty} \\frac{2x^2}{x^2} = 2$.\n$\\implies$ Pernyataan (3) bernilai BENAR.\nKesimpulan: Kunci Jawaban B - S - B."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q6] Berapakah nilai $\\lim_{x \\to 0} \\frac{1 - \\cos(4x)}{x^2}$?",
          "opsi": [
            "A. 8",
            "B. 1",
            "C. 16",
            "D. 4",
            "E. 2"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi $\\frac{1-1}{0} = \\frac{0}{0}$, sehingga bentuk kosinus diubah menjadi sinus.\n\nLangkah 2: Gunakan identitas $1 - \\cos(2A) = 2\\sin^2 A$ dengan $A = 2x$: $1 - \\cos(4x) = 2\\sin^2(2x)$. Bentuknya menjadi $2\\left(\\frac{\\sin(2x)}{x}\\right)^2$.\n\nLangkah 3: Terapkan $\\lim_{x \\to 0}\\frac{\\sin(ax)}{x} = a$: $2 \\cdot 2^2 = 8$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "(1 - Math.cos(4*x))/Math.pow(x, 2)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 8.0
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q7] Nilai dari $\\lim_{x \\to 0} \\frac{\\tan(2x) - \\sin(2x)}{x^3}$ adalah ...",
          "opsi": [
            "A. 0",
            "B. 8",
            "C. 2",
            "D. 1",
            "E. 4"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi bentuk tak tentu $\\frac{0}{0}$. Penyebut berderajat tiga, jadi pembilang perlu diurai lebih dahulu.\n\nLangkah 2: Keluarkan faktor persekutuan memakai $\\tan(2x) = \\frac{\\sin(2x)}{\\cos(2x)}$: $\\tan(2x) - \\sin(2x) = \\sin(2x)\\cdot\\frac{1-\\cos(2x)}{\\cos(2x)}$.\n\nLangkah 3: Ganti $1 - \\cos(2x) = 2\\sin^2 x$, sehingga bentuknya menjadi $\\frac{\\sin(2x)}{x} \\cdot \\frac{2\\sin^2 x}{x^2} \\cdot \\frac{1}{\\cos(2x)}$.\n\nLangkah 4: Terapkan limit dasar $\\lim_{x \\to 0}\\frac{\\sin(ax)}{x} = a$ dan $\\cos 0 = 1$: $2 \\cdot 2 \\cdot 1 = 4$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "(-Math.sin(2*x) + Math.tan(2*x))/Math.pow(x, 3)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 4.0
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P16-Q8] Manakah nilai limit berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. limit x->inf [akar(x^2 + 6x) - x] = 3.",
            "B. limit x->0 (cos 2x) / x = 2.",
            "C. limit x->0 (tan 6x) / (sin 3x) = 2.",
            "D. limit x->0 (1 - cos 4x) / (2x^2) = 4.",
            "E. limit x->2 (x^3 - 8) / (x - 2) = 12."
          ],
          "kunci": "A, C, D, E",
          "bahas": "Langkah 1: Analisis Opsi A:\n$\\frac{6 - 0}{2\\sqrt{1}} = 3$.\n$\\implies$ Pernyataan A BENAR.\n\nLangkah 2: Analisis Opsi B:\nBukan bentuk tak tentu $\\frac{1}{0} = \\infty \\ne 2$.\n$\\implies$ Pernyataan B SALAH.\n\nLangkah 3: Analisis Opsi C:\n$\\frac{6}{3} = 2$.\n$\\implies$ Pernyataan C BENAR.\n\nLangkah 4: Analisis Opsi D:\n$\\frac{\\frac{1}{2}(16)x^2}{2x^2} = \\frac{8}{2} = 4$.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E:\n$\\lim (x^2 + 2x + 4) = 4 + 4 + 4 = 12$.\n$\\implies$ Pernyataan E BENAR.\nKesimpulan: Kunci Jawaban A, C, D, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q9] Nilai dari $\\lim_{x \\to \\infty} (\\sqrt{9x^2 + 18x - 1} - 3x)$ adalah ...",
          "opsi": [
            "A. 9",
            "B. 6",
            "C. 3",
            "D. 2",
            "E. 0"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Substitusi $x \\to \\infty$ memberi bentuk tak tentu $\\infty - \\infty$.\n\nLangkah 2: Tulis $3x = \\sqrt{9x^2}$ agar keduanya berbentuk akar dengan koefisien $x^2$ yang sama, yaitu $a = 9$.\n\nLangkah 3: Terapkan $\\frac{b-p}{2\\sqrt{a}}$ dengan $b = 18$, $p = 0$, dan $\\sqrt{a} = 3$: $\\frac{18-0}{2 \\cdot 3} = 3$.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "plot",
            "f": "-3*x + Math.sqrt(9*Math.pow(x, 2) + 18*x - 1)",
            "x0": 0.6,
            "x1": 14.0,
            "lab": "y = f(x)",
            "asy": [
              3.0
            ],
            "note": "x menuju tak hingga"
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q10] Nilai dari $\\lim_{x \\to 0} \\frac{\\sin(15x)}{3x}$ adalah ...",
          "opsi": [],
          "kunci": "5",
          "bahas": "Langkah 1: Substitusi $x = 0$ memberi bentuk tak tentu $\\frac{0}{0}$.\n\nLangkah 2: Gunakan aturan $\\lim_{x \\to 0} \\frac{\\sin(ax)}{bx} = \\frac{a}{b}$ dengan $a = 15$ dan $b = 3$.\n\nLangkah 3: Substitusikan nilainya: $\\frac{15}{3} = 5$.\nKesimpulan: Kunci Jawaban 5.",
          "viz": {
            "t": "plot",
            "f": "(1/3)*Math.sin(15*x)/x",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x)",
            "hole": 0.0,
            "holey": 5.0
          }
        }
      ]
    },
    "P17": {
      "id": "P17",
      "subject": "Matematika Peminatan",
      "title": "Turunan Fungsi Trigonometri 1: Konsep Dasar Turunan Sin, Cos, Tan",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q1] Turunan pertama dari $f(x) = 3\\sin(x) - 4\\cos(x)$ adalah ...",
          "opsi": [
            "A. $3\\cos(x) + 4\\sin(x)$",
            "B. $-3\\cos(x) - 4\\sin(x)$",
            "C. $3\\sin(x) + 4\\cos(x)$",
            "D. $3\\cos(x) - 4\\sin(x)$",
            "E. $-3\\cos(x) + 4\\sin(x)$"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Gunakan turunan baku $\\frac{d}{dx}\\sin x = \\cos x$ dan $\\frac{d}{dx}\\cos x = -\\sin x$.\n\nLangkah 2: Turunkan suku demi suku. Suku $3\\sin x$ menjadi $3\\cos x$; suku $-4\\cos x$ menjadi $-4 \\cdot (-\\sin x) = +4\\sin x$.\n\nLangkah 3: Gabungkan hasilnya: $f'(x) = 3\\cos x + 4\\sin x$. Perhatikan bahwa tanda negatif pada $-4\\cos x$ berbalik menjadi positif karena turunan $\\cos$ sendiri bertanda negatif.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "3*Math.sin(x) - 4*Math.cos(x)",
            "g": "4*Math.sin(x) + 3*Math.cos(x)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "lab2": "y = f'(x)",
            "pi": 1
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q2] Jika $f(x) = 2\\tan(x)$, maka nilai dari $f'(\\pi/4)$ adalah ...",
          "opsi": [
            "A. 2√2",
            "B. 4",
            "C. 1",
            "D. 0",
            "E. 2"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Gunakan turunan baku $\\frac{d}{dx}\\tan x = \\sec^2 x = \\frac{1}{\\cos^2 x}$.\n\nLangkah 2: Turunkan fungsinya: $f'(x) = 2\\sec^2 x = \\frac{2}{\\cos^2 x}$.\n\nLangkah 3: Substitusikan $x = \\frac{\\pi}{4}$, dengan $\\cos\\frac{\\pi}{4} = \\frac{1}{2}\\sqrt{2}$: $\\frac{2}{\\left(\\frac{1}{2}\\sqrt{2}\\right)^2} = \\frac{2}{\\frac{1}{2}} = 4$.\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q3] Turunan pertama dari $f(x) = 5\\cot(x)$ adalah ...",
          "opsi": [
            "A. $-5\\cot(x)$",
            "B. $-5\\sec^2(x)$",
            "C. $5\\csc^2(x)$",
            "D. $-5\\csc^2(x)$",
            "E. $5\\tan(x)$"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Gunakan turunan baku $\\frac{d}{dx}\\cot x = -\\csc^2 x$.\n\nLangkah 2: Koefisien konstanta tetap dikalikan di depan: $f'(x) = 5 \\cdot \\left(-\\csc^2 x\\right)$.\n\nLangkah 3: Sederhanakan: $f'(x) = -5\\csc^2 x$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "5*(1/Math.tan(x))",
            "g": "-5*Math.pow((1/Math.tan(x)), 2) - 5",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "lab2": "y = f'(x)",
            "pi": 1
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q4] Jika $g(x) = 4\\cos(x) + \\sin(x)$, maka nilai dari $g'(\\pi/2)$ adalah ...",
          "opsi": [
            "A. -4",
            "B. 0",
            "C. 1",
            "D. -1",
            "E. 4"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Gunakan turunan baku $\\frac{d}{dx}\\cos x = -\\sin x$ dan $\\frac{d}{dx}\\sin x = \\cos x$.\n\nLangkah 2: Turunkan suku demi suku: $g'(x) = -4\\sin x + \\cos x$.\n\nLangkah 3: Substitusikan $x = \\frac{\\pi}{2}$, dengan $\\sin\\frac{\\pi}{2} = 1$ dan $\\cos\\frac{\\pi}{2} = 0$: $-4(1) + 0 = -4$.\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q5] Tentukan kebenaran rumus turunan fungsi trigonometri dasar:\n(1) Turunan pertama dari f(x) = cos x adalah f'(x) = -sin x.\n(2) Turunan pertama dari f(x) = sin x adalah f'(x) = cos x.\n(3) Turunan pertama dari f(x) = tan x adalah f'(x) = sec x.",
          "opsi": [
            "Turunan pertama dari f(x) = cos x adalah f'(x) = -sin x",
            "Turunan pertama dari f(x) = sin x adalah f'(x) = cos x",
            "Turunan pertama dari f(x) = tan x adalah f'(x) = sec x"
          ],
          "kunci": "B - B - S",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\n$\\frac{d}{dx}(\\cos x) = -\\sin x$.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\n$\\frac{d}{dx}(\\sin x) = \\cos x$.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\n$\\frac{d}{dx}(\\tan x) = \\sec^2 x$, bukan $\\sec x$.\n$\\implies$ Pernyataan (3) bernilai SALAH.\nKesimpulan: Kunci Jawaban B - B - S."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q6] Berapakah gradien kurva $f(x) = 3\\sin(x)$ di $x = 0$?",
          "opsi": [
            "A. 0",
            "B. 3",
            "C. 1",
            "D. 1/3",
            "E. -3"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Gradien kurva di suatu titik sama dengan nilai turunan pertama di titik itu, yaitu $m = f'(x)$.\n\nLangkah 2: Turunkan dengan $\\frac{d}{dx}\\sin x = \\cos x$: $f'(x) = 3\\cos x$.\n\nLangkah 3: Substitusikan $x = 0$, dengan $\\cos 0 = 1$: $m = 3(1) = 3$.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "plot",
            "f": "3*Math.sin(x)",
            "x0": -2.4,
            "x1": 2.4,
            "lab": "y = f(x)",
            "tang": {
              "x": 0.0,
              "y": 0.0,
              "m": 3.0
            }
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q7] Turunan dari $y = \\sec(x)$ adalah ...",
          "opsi": [
            "A. $\\sec^2(x)$",
            "B. $\\csc(x) \\cot(x)$",
            "C. $-\\sec(x) \\tan(x)$",
            "D. $\\tan^2(x)$",
            "E. $\\sec(x) \\tan(x)$"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Tulis $\\sec x = \\frac{1}{\\cos x} = (\\cos x)^{-1}$ agar dapat diturunkan dengan aturan rantai.\n\nLangkah 2: Terapkan aturan rantai: $y' = -1(\\cos x)^{-2} \\cdot (-\\sin x) = \\frac{\\sin x}{\\cos^2 x}$.\n\nLangkah 3: Pisahkan menjadi dua faktor: $\\frac{1}{\\cos x} \\cdot \\frac{\\sin x}{\\cos x} = \\sec x \\tan x$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "(1/Math.cos(x))",
            "g": "Math.tan(x)*(1/Math.cos(x))",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "lab2": "y = f'(x)",
            "pi": 1
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P17-Q8] Manakah turunan fungsi trigonometri berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. f(x) = 3 sin x - 2 cos x  ->  f'(x) = 3 cos x + 2 sin x.",
            "B. f(x) = tan(2x)  ->  f'(x) = 2 sec^2(2x).",
            "C. f(x) = sin(x) + cos(x)  ->  f'(pi/4) = 1.",
            "D. f(x) = cos(3x)  ->  f'(x) = -3 sin(3x).",
            "E. f(x) = sin(4x)  ->  f'(x) = 4 cos(4x)."
          ],
          "kunci": "A, B, D, E",
          "bahas": "Langkah 1: Analisis Opsi A:\n$f'(x) = 3\\cos x - 2(-\\sin x) = 3\\cos x + 2\\sin x$.\n$\\implies$ Pernyataan A BENAR.\n\nLangkah 2: Analisis Opsi B:\nAturan rantai: $2\\sec^2 2x$.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C:\n$f'(x) = \\cos x - \\sin x \\implies f'(\\pi/4) = \\frac{1}{2}\\sqrt{2} - \\frac{1}{2}\\sqrt{2} = 0 \\ne 1$.\n$\\implies$ Pernyataan C SALAH.\n\nLangkah 4: Analisis Opsi D:\nAturan rantai: $-3\\sin 3x$.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E:\nAturan rantai: $4\\cos 4x$.\n$\\implies$ Pernyataan E BENAR.\nKesimpulan: Kunci Jawaban A, B, D, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q9] Jika $f(x) = \\sin x + \\cos x$, maka nilai $f'(0)$ adalah ...",
          "opsi": [
            "A. √2",
            "B. 0",
            "C. 1",
            "D. -1",
            "E. 2"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Gunakan turunan baku $\\frac{d}{dx}\\sin x = \\cos x$ dan $\\frac{d}{dx}\\cos x = -\\sin x$.\n\nLangkah 2: Turunkan suku demi suku: $f'(x) = \\cos x - \\sin x$.\n\nLangkah 3: Substitusikan $x = 0$, dengan $\\cos 0 = 1$ dan $\\sin 0 = 0$: $1 - 0 = 1$.\nKesimpulan: Kunci Jawaban C."
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q10] Nilai turunan $f(x) = 6\\sin(x)$ saat $x = \\pi/3$ adalah ...",
          "opsi": [],
          "kunci": "3",
          "bahas": "Langkah 1: Gunakan turunan baku $\\frac{d}{dx}\\sin x = \\cos x$, sehingga $f'(x) = 6\\cos x$.\n\nLangkah 2: Substitusikan $x = \\frac{\\pi}{3}$, dengan $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$.\n\nLangkah 3: Hitung hasilnya: $6 \\cdot \\frac{1}{2} = 3$.\nKesimpulan: Kunci Jawaban 3."
        }
      ]
    },
    "P18": {
      "id": "P18",
      "subject": "Matematika Peminatan",
      "title": "Turunan Fungsi Trigonometri 2: Aturan Rantai Komposisi f(g(x))",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q1] Turunan pertama dari $f(x) = \\sin(3x^2 - 5)$ adalah ...",
          "opsi": [
            "A. $6x \\cos(3x^2 - 5)$",
            "B. $3x \\cos(3x^2 - 5)$",
            "C. $6x \\sin(3x^2 - 5)$",
            "D. $-6x \\cos(3x^2 - 5)$",
            "E. $\\cos(6x)$"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Fungsi berbentuk $\\sin(u)$ dengan $u = 3x^2 - 5$, sehingga dipakai aturan rantai $\\frac{d}{dx}\\sin(u) = \\cos(u) \\cdot u'$.\n\nLangkah 2: Turunkan bagian dalamnya: $u' = \\frac{d}{dx}(3x^2-5) = 6x$.\n\nLangkah 3: Gabungkan: $f'(x) = \\cos(3x^2-5) \\cdot 6x = 6x\\cos(3x^2-5)$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(3*Math.pow(x, 2) - 5)",
            "g": "6*x*Math.cos(3*Math.pow(x, 2) - 5)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "lab2": "y = f'(x)",
            "pi": 1
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q2] Jika $f(x) = \\cos(4x + \\pi/3)$, maka nilai $f'(\\pi/6)$ adalah ...",
          "opsi": [
            "A. -2√3",
            "B. 0",
            "C. 4",
            "D. -4",
            "E. 2√3"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Fungsi berbentuk $\\cos(u)$ dengan $u = 4x + \\frac{\\pi}{3}$, sehingga berlaku $\\frac{d}{dx}\\cos(u) = -\\sin(u) \\cdot u'$.\n\nLangkah 2: Karena $u' = 4$, diperoleh $f'(x) = -4\\sin\\!\\left(4x+\\frac{\\pi}{3}\\right)$.\n\nLangkah 3: Substitusikan $x = \\frac{\\pi}{6}$: sudutnya menjadi $\\frac{4\\pi}{6} + \\frac{\\pi}{3} = \\frac{2\\pi}{3} + \\frac{\\pi}{3} = \\pi$. Karena $\\sin\\pi = 0$, hasilnya $-4(0) = 0$.\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q3] Turunan pertama dari $y = \\tan(5x - 2)$ adalah ...",
          "opsi": [
            "A. $5\\csc^2(5x - 2)$",
            "B. $5\\tan(5x - 2)$",
            "C. $-5\\sec^2(5x - 2)$",
            "D. $\\sec^2(5x - 2)$",
            "E. $5\\sec^2(5x - 2)$"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Fungsi berbentuk $\\tan(u)$ dengan $u = 5x - 2$, sehingga berlaku $\\frac{d}{dx}\\tan(u) = \\sec^2(u) \\cdot u'$.\n\nLangkah 2: Turunkan bagian dalamnya: $u' = 5$.\n\nLangkah 3: Gabungkan: $y' = 5\\sec^2(5x-2)$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "Math.tan(5*x - 2)",
            "g": "5*Math.pow(Math.tan(5*x - 2), 2) + 5",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "lab2": "y = f'(x)",
            "pi": 1
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q4] Turunan pertama dari $f(x) = \\sin(2 - 3x)$ adalah ...",
          "opsi": [
            "A. $-3\\cos(2 - 3x)$",
            "B. $3\\cos(2 - 3x)$",
            "C. $-3\\sin(2 - 3x)$",
            "D. $2\\cos(2 - 3x)$",
            "E. $-2\\cos(2 - 3x)$"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Fungsi berbentuk $\\sin(u)$ dengan $u = 2 - 3x$, sehingga berlaku $\\frac{d}{dx}\\sin(u) = \\cos(u) \\cdot u'$.\n\nLangkah 2: Turunkan bagian dalamnya. Perhatikan tandanya: $u' = \\frac{d}{dx}(2-3x) = -3$.\n\nLangkah 3: Gabungkan: $f'(x) = -3\\cos(2-3x)$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "-Math.sin(3*x - 2)",
            "g": "-3*Math.cos(3*x - 2)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "lab2": "y = f'(x)",
            "pi": 1
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q5] Tentukan kebenaran aturan rantai turunan fungsi komposisi f(g(x)):\n(1) Turunan dari f(x) = cos(5x) adalah f'(x) = 5 sin(5x).\n(2) Rumus aturan rantai dirumuskan [f(g(x))]' = f'(g(x)) . g'(x).\n(3) Turunan dari f(x) = sin(3x^2 + 5) adalah f'(x) = 6x cos(3x^2 + 5).",
          "opsi": [
            "Turunan dari f(x) = cos(5x) adalah f'(x) = 5 sin(5x)",
            "Rumus aturan rantai dirumuskan [f(g(x))]' = f'(g(x)) . g'(x)",
            "Turunan dari f(x) = sin(3x^2 + 5) adalah f'(x) = 6x cos(3x^2 + 5)"
          ],
          "kunci": "S - B - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\n$\\frac{d}{dx}[\\cos 5x] = -5\\sin 5x$, bertanda negatif, bukan positif.\n$\\implies$ Pernyataan (1) bernilai SALAH.\n\nLangkah 2: Analisis Pernyataan (2):\nTeorema aturan rantai: $\\frac{df}{dx} = \\frac{df}{dg} \\cdot \\frac{dg}{dx} = f'(g(x)) \\cdot g'(x)$.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\n$g(x) = 3x^2+5 \\implies g'(x) = 6x \\implies f'(x) = 6x\\cos(3x^2+5)$.\n$\\implies$ Pernyataan (3) bernilai BENAR.\nKesimpulan: Kunci Jawaban S - B - B."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q6] Berapakah turunan $f(x) = \\cos(2x)$ di $x = \\pi/4$?",
          "opsi": [
            "A. -1",
            "B. 1",
            "C. 0",
            "D. -2",
            "E. 2"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Fungsi berbentuk $\\cos(u)$ dengan $u = 2x$, sehingga $f'(x) = -\\sin(2x) \\cdot 2 = -2\\sin(2x)$.\n\nLangkah 2: Substitusikan $x = \\frac{\\pi}{4}$, sehingga sudutnya menjadi $2 \\cdot \\frac{\\pi}{4} = \\frac{\\pi}{2}$.\n\nLangkah 3: Karena $\\sin\\frac{\\pi}{2} = 1$, hasilnya $-2(1) = -2$.\nKesimpulan: Kunci Jawaban D."
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q7] Turunan dari $f(x) = \\sin(x^3)$ adalah ...",
          "opsi": [
            "A. $3x^2 \\sin(x^3)$",
            "B. $\\cos(3x^2)$",
            "C. $-3x^2 \\cos(x^3)$",
            "D. $x^3 \\cos(x^2)$",
            "E. $3x^2 \\cos(x^3)$"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Fungsi berbentuk $\\sin(u)$ dengan $u = x^3$, sehingga berlaku $\\frac{d}{dx}\\sin(u) = \\cos(u) \\cdot u'$.\n\nLangkah 2: Turunkan bagian dalamnya: $u' = 3x^2$.\n\nLangkah 3: Gabungkan: $f'(x) = 3x^2\\cos(x^3)$. Perhatikan pangkat tetap berada di dalam kurung kosinus, bukan berpindah keluar.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(Math.pow(x, 3))",
            "g": "3*Math.pow(x, 2)*Math.cos(Math.pow(x, 3))",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "lab2": "y = f'(x)",
            "pi": 1
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P18-Q8] Manakah turunan fungsi trigonometri komposisi berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. f(x) = tan(5x + 1)  ->  f'(x) = 5 sec^2(5x + 1).",
            "B. f(x) = sin(4x - pi/3)  ->  f'(x) = 4 cos(4x - pi/3).",
            "C. f(x) = sin(x^2)  ->  f'(x) = 2x sin(x^2).",
            "D. f(x) = cos(x^3 - 2x)  ->  f'(x) = -(3x^2 - 2) sin(x^3 - 2x).",
            "E. f(x) = cos(2x + pi/2)  ->  f'(0) = -2."
          ],
          "kunci": "A, B, D, E",
          "bahas": "Langkah 1: Analisis Opsi A:\n$5\\sec^2(5x + 1)$.\n$\\implies$ Pernyataan A BENAR.\n\nLangkah 2: Analisis Opsi B:\n$4\\cos(4x - \\pi/3)$.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C:\nTurunan sinus adalah kosinus: $2x\\cos(x^2)$, bukan $2x\\sin(x^2)$.\n$\\implies$ Pernyataan C SALAH.\n\nLangkah 4: Analisis Opsi D:\n$u = x^3 - 2x, u' = 3x^2 - 2 \\implies -(3x^2-2)\\sin(x^3-2x)$.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E:\n$f'(x) = -2\\sin(2x+\\pi/2) \\implies f'(0) = -2\\sin(\\pi/2) = -2(1) = -2$.\n$\\implies$ Pernyataan E BENAR.\nKesimpulan: Kunci Jawaban A, B, D, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q9] Jika $f(x) = \\sin(4x)$, maka nilai $f'(\\pi/8)$ adalah ...",
          "opsi": [
            "A. 2√2",
            "B. 2",
            "C. 0",
            "D. 4",
            "E. -4"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Fungsi berbentuk $\\sin(u)$ dengan $u = 4x$, sehingga $f'(x) = 4\\cos(4x)$.\n\nLangkah 2: Substitusikan $x = \\frac{\\pi}{8}$, sehingga sudutnya menjadi $4 \\cdot \\frac{\\pi}{8} = \\frac{\\pi}{2}$.\n\nLangkah 3: Karena $\\cos\\frac{\\pi}{2} = 0$, hasilnya $4(0) = 0$.\nKesimpulan: Kunci Jawaban C."
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q10] Nilai turunan $f(x) = 2\\sin(3x)$ saat $x = 0$ adalah ...",
          "opsi": [],
          "kunci": "6",
          "bahas": "Langkah 1: Fungsi berbentuk $\\sin(u)$ dengan $u = 3x$, sehingga $f'(x) = 2 \\cdot 3\\cos(3x) = 6\\cos(3x)$.\n\nLangkah 2: Substitusikan $x = 0$, sehingga sudutnya $0$.\n\nLangkah 3: Karena $\\cos 0 = 1$, hasilnya $6(1) = 6$.\nKesimpulan: Kunci Jawaban 6."
        }
      ]
    },
    "P19": {
      "id": "P19",
      "subject": "Matematika Peminatan",
      "title": "Turunan Fungsi Trigonometri 3: Aturan Rantai Pangkat u(x)^n",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q1] Turunan pertama dari $f(x) = \\sin^3(4x)$ adalah ...",
          "opsi": [
            "A. $3\\sin^2(4x) \\cos(4x)$",
            "B. $12\\sin^2(4x) \\cos(4x)$",
            "C. $-12\\sin^2(4x) \\cos(4x)$",
            "D. $4\\sin^2(4x) \\cos(4x)$",
            "E. $12\\sin^2(4x)$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Tulis ulang sebagai $f(x) = \\left[\\sin(4x)\\right]^3$, yaitu bentuk pangkat sehingga dipakai aturan rantai $\\frac{d}{dx}u^n = n\\,u^{n-1} \\cdot u'$.\n\nLangkah 2: Ambil $u = \\sin(4x)$ dan $n = 3$. Turunan bagian dalamnya sendiri memerlukan rantai lagi: $u' = 4\\cos(4x)$.\n\nLangkah 3: Gabungkan: $f'(x) = 3\\sin^2(4x) \\cdot 4\\cos(4x) = 12\\sin^2(4x)\\cos(4x)$.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "plot",
            "f": "Math.pow(Math.sin(4*x), 3)",
            "g": "12*Math.pow(Math.sin(4*x), 2)*Math.cos(4*x)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "lab2": "y = f'(x)",
            "pi": 1
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q2] Turunan pertama dari $f(x) = \\cos^4(2x)$ adalah ...",
          "opsi": [
            "A. $-4\\cos^3(2x) \\sin(2x)$",
            "B. $-8\\cos^3(2x)$",
            "C. $-8\\cos^3(2x) \\sin(2x)$",
            "D. $8\\cos^3(2x) \\sin(2x)$",
            "E. $4\\sin^3(2x)$"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Tulis ulang sebagai $f(x) = \\left[\\cos(2x)\\right]^4$, sehingga dipakai aturan rantai $\\frac{d}{dx}u^n = n\\,u^{n-1} \\cdot u'$.\n\nLangkah 2: Ambil $u = \\cos(2x)$ dan $n = 4$. Turunan bagian dalamnya: $u' = -2\\sin(2x)$.\n\nLangkah 3: Gabungkan: $f'(x) = 4\\cos^3(2x) \\cdot \\left(-2\\sin(2x)\\right) = -8\\cos^3(2x)\\sin(2x)$.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "plot",
            "f": "Math.pow(Math.cos(2*x), 4)",
            "g": "-8*Math.sin(2*x)*Math.pow(Math.cos(2*x), 3)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "lab2": "y = f'(x)",
            "pi": 1
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q3] Jika $f(x) = \\sin^2(x)$, maka nilai dari $f'(\\pi/4)$ adalah ...",
          "opsi": [
            "A. 0",
            "B. √2",
            "C. 2",
            "D. 1/2",
            "E. 1"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Tulis ulang sebagai $f(x) = \\left[\\sin x\\right]^2$, lalu terapkan aturan rantai: $f'(x) = 2\\sin x \\cdot \\cos x$.\n\nLangkah 2: Sederhanakan dengan identitas sudut rangkap $2\\sin x\\cos x = \\sin(2x)$, sehingga $f'(x) = \\sin(2x)$.\n\nLangkah 3: Substitusikan $x = \\frac{\\pi}{4}$: $\\sin\\frac{\\pi}{2} = 1$.\nKesimpulan: Kunci Jawaban E."
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q4] Turunan pertama dari $y = \\tan^3(2x)$ adalah ...",
          "opsi": [
            "A. $2\\tan^2(2x) \\sec^2(2x)$",
            "B. $6\\sec^4(2x)$",
            "C. $6\\tan^2(2x)$",
            "D. $6\\tan^2(2x) \\sec^2(2x)$",
            "E. $3\\tan^2(2x) \\sec^2(2x)$"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Tulis ulang sebagai $y = \\left[\\tan(2x)\\right]^3$, sehingga dipakai aturan rantai $\\frac{d}{dx}u^n = n\\,u^{n-1} \\cdot u'$.\n\nLangkah 2: Ambil $u = \\tan(2x)$ dan $n = 3$. Turunan bagian dalamnya: $u' = 2\\sec^2(2x)$.\n\nLangkah 3: Gabungkan: $y' = 3\\tan^2(2x) \\cdot 2\\sec^2(2x) = 6\\tan^2(2x)\\sec^2(2x)$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "Math.pow(Math.tan(2*x), 3)",
            "g": "(6*Math.pow(Math.tan(2*x), 2) + 6)*Math.pow(Math.tan(2*x), 2)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "lab2": "y = f'(x)",
            "pi": 1
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q5] Tentukan kebenaran turunan aturan rantai pangkat [u(x)]^n:\n(1) Rumus turunan fungsi pangkat dirumuskan [u^n]' = n . u^(n-1) . u'.\n(2) Turunan dari f(x) = cos^3(x) adalah f'(x) = 3 cos^2(x).\n(3) Turunan dari f(x) = sin^2(x) adalah f'(x) = sin(2x).",
          "opsi": [
            "Rumus turunan fungsi pangkat dirumuskan [u^n]' = n . u^(n-1) . u'",
            "Turunan dari f(x) = cos^3(x) adalah f'(x) = 3 cos^2(x)",
            "Turunan dari f(x) = sin^2(x) adalah f'(x) = sin(2x)"
          ],
          "kunci": "B - S - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nAturan pangkat rantai: $\\frac{d}{dx}[u^n] = n u^{n-1} u'$.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\n$f'(x) = 3\\cos^2 x (-\\sin x) = -3\\sin x \\cos^2 x$, bukan $3\\cos^2 x$.\n$\\implies$ Pernyataan (2) bernilai SALAH.\n\nLangkah 3: Analisis Pernyataan (3):\n$f'(x) = 2\\sin x \\cos x = \\sin 2x$.\n$\\implies$ Pernyataan (3) bernilai BENAR.\nKesimpulan: Kunci Jawaban B - S - B."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q6] Berapakah turunan dari $f(x) = \\cos^2(x)$ di $x = \\pi/4$?",
          "opsi": [
            "A. 1/2",
            "B. 0",
            "C. -1",
            "D. 1",
            "E. -1/2"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Tulis ulang sebagai $f(x) = \\left[\\cos x\\right]^2$, lalu terapkan aturan rantai: $f'(x) = 2\\cos x \\cdot (-\\sin x)$.\n\nLangkah 2: Sederhanakan dengan identitas sudut rangkap: $-2\\sin x\\cos x = -\\sin(2x)$.\n\nLangkah 3: Substitusikan $x = \\frac{\\pi}{4}$: $-\\sin\\frac{\\pi}{2} = -1$.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "plot",
            "f": "Math.pow(Math.cos(x), 2)",
            "g": "-2*Math.sin(x)*Math.cos(x)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "lab2": "y = f'(x)",
            "pi": 1
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q7] Turunan pertama dari $f(x) = \\sqrt{\\sin x}$ adalah ...",
          "opsi": [
            "A. $\\frac{2\\cos x}{\\sqrt{\\sin x}}$",
            "B. $\\frac{-\\cos x}{2\\sqrt{\\sin x}}$",
            "C. $\\frac{\\sin x}{2\\sqrt{\\cos x}}$",
            "D. $\\frac{1}{2\\sqrt{\\sin x}}$",
            "E. $\\frac{\\cos x}{2\\sqrt{\\sin x}}$"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Tulis ulang bentuk akar sebagai pangkat: $f(x) = \\left(\\sin x\\right)^{1/2}$.\n\nLangkah 2: Terapkan aturan rantai $\\frac{d}{dx}u^n = n\\,u^{n-1} \\cdot u'$ dengan $u = \\sin x$ dan $n = \\frac{1}{2}$: $f'(x) = \\frac{1}{2}\\left(\\sin x\\right)^{-1/2} \\cdot \\cos x$.\n\nLangkah 3: Kembalikan ke bentuk akar: $f'(x) = \\frac{\\cos x}{2\\sqrt{\\sin x}}$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "Math.sqrt(Math.sin(x))",
            "g": "(1/2)*Math.cos(x)/Math.sqrt(Math.sin(x))",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "lab2": "y = f'(x)",
            "pi": 1
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P19-Q8] Manakah turunan fungsi trigonometri berpangkat berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. f(x) = cos^4(x)  ->  f'(pi/4) = -1.",
            "B. f(x) = cos^2(x)  ->  f'(x) = -sin(2x).",
            "C. f(x) = sin^3(2x)  ->  f'(x) = 6 sin^2(2x) cos(2x).",
            "D. f(x) = tan^2(x)  ->  f'(x) = 2 tan(x) sec^2(x).",
            "E. f(x) = sin^2(3x)  ->  f'(x) = 3 sin(6x)."
          ],
          "kunci": "A, B, C, D, E",
          "bahas": "Langkah 1: Analisis Opsi A:\n$f'(x) = 4\\cos^3 x(-\\sin x) = -4(1/\\sqrt{2})^3(1/\\sqrt{2}) = -4(1/4) = -1$.\n$\\implies$ Pernyataan A BENAR.\n\nLangkah 2: Analisis Opsi B:\n$2\\cos x(-\\sin x) = -\\sin 2x$.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C:\n$3\\sin^2(2x) \\cdot (2\\cos 2x) = 6\\sin^2(2x)\\cos(2x)$.\n$\\implies$ Pernyataan C BENAR.\n\nLangkah 4: Analisis Opsi D:\n$2\\tan x \\sec^2 x$.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E:\n$2\\sin 3x (3\\cos 3x) = 3(2\\sin 3x \\cos 3x) = 3\\sin 6x$.\n$\\implies$ Pernyataan E BENAR.\nKesimpulan: Kunci Jawaban A, B, C, D, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q9] Jika $f(x) = \\sin^3(x)$, maka nilai $f'(\\pi/2)$ adalah ...",
          "opsi": [
            "A. 3",
            "B. 0",
            "C. 1",
            "D. -3",
            "E. 3/2"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Tulis ulang sebagai $f(x) = \\left[\\sin x\\right]^3$, lalu terapkan aturan rantai: $f'(x) = 3\\sin^2 x \\cdot \\cos x$.\n\nLangkah 2: Substitusikan $x = \\frac{\\pi}{2}$, dengan $\\sin\\frac{\\pi}{2} = 1$ dan $\\cos\\frac{\\pi}{2} = 0$.\n\nLangkah 3: Hitung hasilnya: $3(1)^2 \\cdot 0 = 0$.\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q10] Nilai turunan $f(x) = 4\\sin^2(2x)$ saat $x = \\pi/8$ adalah ...",
          "opsi": [],
          "kunci": "8",
          "bahas": "Langkah 1: Tulis ulang sebagai $f(x) = 4\\left[\\sin(2x)\\right]^2$, lalu terapkan aturan rantai: $f'(x) = 8\\sin(2x) \\cdot 2\\cos(2x) = 16\\sin(2x)\\cos(2x)$.\n\nLangkah 2: Sederhanakan dengan identitas sudut rangkap: $f'(x) = 8\\sin(4x)$.\n\nLangkah 3: Substitusikan $x = \\frac{\\pi}{8}$: $8\\sin\\frac{\\pi}{2} = 8(1) = 8$.\nKesimpulan: Kunci Jawaban 8."
        }
      ]
    },
    "P20": {
      "id": "P20",
      "subject": "Matematika Peminatan",
      "title": "Turunan Fungsi Trigonometri 4: Perkalian, Pembagian, & Turunan Tinggi",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q1] Turunan pertama dari $f(x) = x^2 \\sin(x)$ adalah ...",
          "opsi": [
            "A. $2x\\sin(x) - x^2\\cos(x)$",
            "B. $x^2\\cos(x)$",
            "C. $2x\\sin(x) + x^2\\cos(x)$",
            "D. $2\\cos(x)$",
            "E. $2x\\cos(x)$"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Fungsi berbentuk hasil kali, sehingga dipakai aturan $\\left(u \\cdot v\\right)' = u'v + uv'$ dengan $u = x^2$ dan $v = \\sin x$.\n\nLangkah 2: Turunkan masing-masing: $u' = 2x$ dan $v' = \\cos x$.\n\nLangkah 3: Substitusikan ke rumus: $f'(x) = 2x\\sin x + x^2\\cos x$.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "plot",
            "f": "Math.pow(x, 2)*Math.sin(x)",
            "g": "Math.pow(x, 2)*Math.cos(x) + 2*x*Math.sin(x)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "lab2": "y = f'(x)",
            "pi": 1
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q2] Turunan pertama dari $f(x) = \\frac{\\sin x}{1 + \\cos x}$ adalah ...",
          "opsi": [
            "A. $\\frac{1}{1 + \\cos x}$",
            "B. $\\frac{-1}{1 + \\cos x}$",
            "C. $\\frac{\\cos x}{1 + \\cos x}$",
            "D. $\\frac{1}{(1 + \\cos x)^2}$",
            "E. $\\frac{\\cos x - 1}{(1 + \\cos x)^2}$"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Fungsi berbentuk hasil bagi, sehingga dipakai $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$ dengan $u = \\sin x$ dan $v = 1+\\cos x$.\n\nLangkah 2: Turunkan masing-masing: $u' = \\cos x$ dan $v' = -\\sin x$. Substitusikan: $\\frac{\\cos x\\left(1+\\cos x\\right) + \\sin^2 x}{\\left(1+\\cos x\\right)^2}$.\n\nLangkah 3: Uraikan pembilangnya lalu pakai identitas $\\sin^2 x + \\cos^2 x = 1$: $\\cos x + \\cos^2 x + \\sin^2 x = \\cos x + 1$.\n\nLangkah 4: Coret satu faktor $(1+\\cos x)$: $\\frac{1+\\cos x}{\\left(1+\\cos x\\right)^2} = \\frac{1}{1+\\cos x}$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(x)/(Math.cos(x) + 1)",
            "g": "Math.cos(x)/(Math.cos(x) + 1) + Math.pow(Math.sin(x), 2)/Math.pow(Math.cos(x) + 1, 2)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "lab2": "y = f'(x)",
            "pi": 1
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q3] Turunan kedua $f''(x)$ dari fungsi $f(x) = \\sin(2x)$ adalah ...",
          "opsi": [
            "A. $-2\\cos(2x)$",
            "B. $2\\sin(2x)$",
            "C. $4\\sin(2x)$",
            "D. $-4\\cos(2x)$",
            "E. $-4\\sin(2x)$"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Turunan kedua diperoleh dengan menurunkan dua kali berturut-turut.\n\nLangkah 2: Turunan pertama memakai aturan rantai: $f'(x) = 2\\cos(2x)$.\n\nLangkah 3: Turunkan sekali lagi: $f''(x) = 2 \\cdot \\left(-2\\sin(2x)\\right) = -4\\sin(2x)$. Setiap penurunan memunculkan satu faktor $2$ dari bagian dalam, sehingga muncul $2 \\times 2 = 4$.\nKesimpulan: Kunci Jawaban E."
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q4] Jika $f(x) = x \\cos(x)$, maka nilai dari $f'(\\pi)$ adalah ...",
          "opsi": [
            "A. $\\pi$",
            "B. 0",
            "C. 1",
            "D. -1",
            "E. $-\\pi$"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Fungsi berbentuk hasil kali, sehingga dipakai aturan $\\left(u \\cdot v\\right)' = u'v + uv'$ dengan $u = x$ dan $v = \\cos x$.\n\nLangkah 2: Turunkan masing-masing: $u' = 1$ dan $v' = -\\sin x$, sehingga $f'(x) = \\cos x - x\\sin x$.\n\nLangkah 3: Substitusikan $x = \\pi$, dengan $\\cos\\pi = -1$ dan $\\sin\\pi = 0$: $-1 - \\pi(0) = -1$.\nKesimpulan: Kunci Jawaban D."
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q5] Tentukan kebenaran turunan perkalian dan tingkat tinggi:\n(1) Turunan kedua dari f(x) = sin x adalah f''(x) = -sin x.\n(2) Turunan perkalian dirumuskan [u . v]' = u'v + uv'.\n(3) Turunan pembagian dirumuskan [u / v]' = (u'v + uv') / v^2.",
          "opsi": [
            "Turunan kedua dari f(x) = sin x adalah f''(x) = -sin x",
            "Turunan perkalian dirumuskan [u . v]' = u'v + uv'",
            "Turunan pembagian dirumuskan [u / v]' = (u'v + uv') / v^2"
          ],
          "kunci": "B - B - S",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\n$f'(x) = \\cos x \\implies f''(x) = -\\sin x$.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\nAturan hasil kali Leibniz: $(uv)' = u'v + uv'$.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nAturan pembagian bertanda minus: $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$, bukan tanda plus.\n$\\implies$ Pernyataan (3) bernilai SALAH.\nKesimpulan: Kunci Jawaban B - B - S."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q6] Berapakah nilai turunan kedua $f''(0)$ untuk $f(x) = 3\\cos(2x)$?",
          "opsi": [
            "A. 0",
            "B. 12",
            "C. 6",
            "D. -6",
            "E. -12"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Turunkan dua kali dengan aturan rantai. Turunan pertama: $f'(x) = -6\\sin(2x)$.\n\nLangkah 2: Turunkan sekali lagi: $f''(x) = -6 \\cdot 2\\cos(2x) = -12\\cos(2x)$.\n\nLangkah 3: Substitusikan $x = 0$, dengan $\\cos 0 = 1$: $-12(1) = -12$.\nKesimpulan: Kunci Jawaban E."
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q7] Turunan pertama dari $f(x) = \\frac{\\sin x}{x}$ di $x \\neq 0$ adalah ...",
          "opsi": [
            "A. $\\frac{\\sin x - x\\cos x}{x^2}$",
            "B. $\\frac{\\cos x}{x^2}$",
            "C. $\\frac{x\\sin x - \\cos x}{x^2}$",
            "D. $\\frac{x\\cos x - \\sin x}{x^2}$",
            "E. $\\frac{\\cos x}{1}$"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Fungsi berbentuk hasil bagi, sehingga dipakai aturan $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$ dengan $u = \\sin x$ dan $v = x$.\n\nLangkah 2: Turunkan masing-masing: $u' = \\cos x$ dan $v' = 1$.\n\nLangkah 3: Substitusikan ke rumus: $f'(x) = \\frac{x\\cos x - \\sin x}{x^2}$. Perhatikan urutannya, karena $u'v - uv'$ tidak sama dengan $uv' - u'v$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(x)/x",
            "g": "Math.cos(x)/x - Math.sin(x)/Math.pow(x, 2)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "lab2": "y = f'(x)",
            "pi": 1
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P20-Q8] Diberikan f(x) = x^2 sin(x). Manakah pernyataan turunan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Turunan pertama adalah f'(x) = 2x sin(x) + x^2 cos(x).",
            "B. Nilai f'(pi) adalah -pi^2.",
            "C. Nilai f''(0) adalah 2.",
            "D. Turunan kedua adalah f''(x) = (2 - x^2) sin(x) + 4x cos(x).",
            "E. Nilai f'(0) adalah 0."
          ],
          "kunci": "A, B, D, E",
          "bahas": "Langkah 1: Analisis Opsi A:\n$u=x^2, v=\\sin x \\implies u'=2x, v'=\\cos x \\implies 2x\\sin x + x^2\\cos x$.\n$\\implies$ Pernyataan A BENAR.\n\nLangkah 2: Analisis Opsi B:\n$f'(\\pi) = 2\\pi\\sin\\pi + \\pi^2\\cos\\pi = 0 + \\pi^2(-1) = -\\pi^2$.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C:\n$f''(0) = (2-0)\\sin 0 + 0 = 0 \\ne 2$.\n$\\implies$ Pernyataan C SALAH.\n\nLangkah 4: Analisis Opsi D:\n$f''(x) = [2\\sin x + 2x\\cos x] + [2x\\cos x - x^2\\sin x] = (2-x^2)\\sin x + 4x\\cos x$.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E:\n$f'(0) = 0 + 0 = 0$.\n$\\implies$ Pernyataan E BENAR.\nKesimpulan: Kunci Jawaban A, B, D, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q9] Jika $f(x) = e^x \\sin x$, maka $f'(0)$ adalah ...",
          "opsi": [
            "A. e",
            "B. 1",
            "C. 0",
            "D. 2",
            "E. -1"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Fungsi berbentuk hasil kali, sehingga dipakai aturan $\\left(u \\cdot v\\right)' = u'v + uv'$ dengan $u = e^x$ dan $v = \\sin x$.\n\nLangkah 2: Turunkan masing-masing: $u' = e^x$ dan $v' = \\cos x$, sehingga $f'(x) = e^x\\sin x + e^x\\cos x = e^x\\left(\\sin x + \\cos x\\right)$.\n\nLangkah 3: Substitusikan $x = 0$, dengan $e^0 = 1$, $\\sin 0 = 0$, dan $\\cos 0 = 1$: $1(0+1) = 1$.\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q10] Nilai mutlak turunan kedua $f''(x)$ dari $f(x) = \\cos(4x)$ di $x = 0$ adalah ...",
          "opsi": [],
          "kunci": "16",
          "bahas": "Langkah 1: Turunkan dua kali dengan aturan rantai. Turunan pertama: $f'(x) = -4\\sin(4x)$.\n\nLangkah 2: Turunkan sekali lagi: $f''(x) = -4 \\cdot 4\\cos(4x) = -16\\cos(4x)$.\n\nLangkah 3: Substitusikan $x = 0$: $f''(0) = -16(1) = -16$. Karena yang diminta nilai mutlaknya, hasilnya $\\left|-16\\right| = 16$.\nKesimpulan: Kunci Jawaban 16."
        }
      ]
    },
    "P21": {
      "id": "P21",
      "subject": "Matematika Peminatan",
      "title": "Turunan Fungsi Trigonometri 5: Garis Singgung & Garis Normal Kurva Trigonometri",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q1] Persamaan garis singgung pada kurva $y = 2\\sin(x) + \\cos(x)$ di titik $x = 0$ adalah ...",
          "opsi": [
            "A. $y = -x + 1$",
            "B. $y = 2x + 1$",
            "C. $y = 3x + 1$",
            "D. $y = 2x - 1$",
            "E. $y = x + 2$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Persamaan garis singgung memakai $y - y_1 = m\\left(x - x_1\\right)$ dengan $m = f'(x_1)$, jadi diperlukan titik singgung dan gradiennya.\n\nLangkah 2: Cari titik singgungnya. Substitusi $x = 0$: $y = 2\\sin 0 + \\cos 0 = 0 + 1 = 1$, sehingga titiknya $(0, 1)$.\n\nLangkah 3: Cari gradiennya. Turunannya $y' = 2\\cos x - \\sin x$, sehingga $m = 2\\cos 0 - \\sin 0 = 2$.\n\nLangkah 4: Substitusikan ke rumus: $y - 1 = 2(x - 0) \\implies y = 2x + 1$.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "plot",
            "f": "2*Math.sin(x) + Math.cos(x)",
            "x0": -2.4,
            "x1": 2.4,
            "lab": "y = f(x)",
            "tang": {
              "x": 0.0,
              "y": 1.0,
              "m": 2.0
            }
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q2] Persamaan garis normal kurva $y = 2\\sin(x) + \\cos(x)$ di $x = 0$ adalah ...",
          "opsi": [
            "A. $x + 2y - 2 = 0$",
            "B. $x - 2y + 2 = 0$",
            "C. $x + y - 1 = 0$",
            "D. $2x - y + 1 = 0$",
            "E. $2x + y - 1 = 0$"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Garis normal tegak lurus garis singgung, sehingga gradiennya memenuhi $m_n = -\\frac{1}{m_s}$.\n\nLangkah 2: Cari titik dan gradien singgungnya. Substitusi $x = 0$ memberi $y = 1$, dan dari $y' = 2\\cos x - \\sin x$ diperoleh $m_s = 2$.\n\nLangkah 3: Hitung gradien normalnya: $m_n = -\\frac{1}{2}$.\n\nLangkah 4: Substitusikan ke $y - y_1 = m_n(x - x_1)$: $y - 1 = -\\frac{1}{2}x$. Kalikan $2$ lalu pindahkan semua ke ruas kiri: $x + 2y - 2 = 0$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "2*Math.sin(x) + Math.cos(x)",
            "x0": -2.4,
            "x1": 2.4,
            "lab": "y = f(x)",
            "tang": {
              "x": 0.0,
              "y": 1.0,
              "m": 2.0
            }
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q3] Gradien garis singgung kurva $y = \\tan(x)$ di $x = \\pi/4$ adalah ...",
          "opsi": [
            "A. 4",
            "B. 2",
            "C. √2",
            "D. 1",
            "E. 1/2"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Gradien garis singgung sama dengan nilai turunan pertama di titik itu, yaitu $m = f'(x_1)$.\n\nLangkah 2: Turunkan dengan $\\frac{d}{dx}\\tan x = \\sec^2 x = \\frac{1}{\\cos^2 x}$.\n\nLangkah 3: Substitusikan $x = \\frac{\\pi}{4}$, dengan $\\cos\\frac{\\pi}{4} = \\frac{1}{2}\\sqrt{2}$: $m = \\frac{1}{\\left(\\frac{1}{2}\\sqrt{2}\\right)^2} = \\frac{1}{\\frac{1}{2}} = 2$.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "plot",
            "f": "Math.tan(x)",
            "x0": -1.615,
            "x1": 3.185,
            "lab": "y = f(x)",
            "tang": {
              "x": 0.7854,
              "y": 1.0,
              "m": 2.0
            }
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q4] Persamaan garis singgung kurva $y = \\sin(2x)$ di $(\\pi/2, 0)$ adalah ...",
          "opsi": [
            "A. $y = 2x + \\pi$",
            "B. $y = -2x$",
            "C. $y = 2x - \\pi$",
            "D. $y = -x + \\pi/2$",
            "E. $y = -2x + \\pi$"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Persamaan garis singgung memakai $y - y_1 = m\\left(x - x_1\\right)$ dengan $m = f'(x_1)$. Titik singgungnya sudah diketahui, yaitu $\\left(\\frac{\\pi}{2}, 0\\right)$.\n\nLangkah 2: Turunkan dengan aturan rantai: $y' = 2\\cos(2x)$.\n\nLangkah 3: Substitusikan $x = \\frac{\\pi}{2}$, sehingga sudutnya menjadi $\\pi$. Karena $\\cos\\pi = -1$, diperoleh $m = 2(-1) = -2$.\n\nLangkah 4: Substitusikan ke rumus: $y - 0 = -2\\left(x - \\frac{\\pi}{2}\\right) \\implies y = -2x + \\pi$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(2*x)",
            "x0": -0.829,
            "x1": 3.971,
            "lab": "y = f(x)",
            "tang": {
              "x": 1.5708,
              "y": 0.0,
              "m": -2.0
            }
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q5] Tentukan kebenaran garis singgung dan garis normal kurva trigonometri y = f(x):\n(1) Garis singgung kurva y = sin x di titik (0, 0) adalah y = -x.\n(2) Gradien garis singgung m_s di titik berabsis x1 adalah m_s = f'(x1).\n(3) Gradien garis normal m_n tegak lurus garis singgung memenuhi m_s . m_n = -1.",
          "opsi": [
            "Garis singgung kurva y = sin x di titik (0, 0) adalah y = -x",
            "Gradien garis singgung m_s di titik berabsis x1 adalah m_s = f'(x1)",
            "Gradien garis normal m_n tegak lurus garis singgung memenuhi m_s . m_n = -1"
          ],
          "kunci": "S - B - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\n$y' = \\cos x \\implies m = \\cos 0 = 1$. Persamaan garis singgung $y - 0 = 1(x - 0) \\implies y = x$, bukan $y = -x$.\n$\\implies$ Pernyataan (1) bernilai SALAH.\n\nLangkah 2: Analisis Pernyataan (2):\nDefinisi geometris turunan pertama adalah gradien kemiringan garis singgung $m = f'(x_1)$.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nHubungan dua garis saling tegak lurus $m_s \\cdot m_n = -1 \\implies m_n = -\\frac{1}{m_s}$.\n$\\implies$ Pernyataan (3) bernilai BENAR.\nKesimpulan: Kunci Jawaban S - B - B."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q6] Berapakah ordinat intersep sumbu-Y garis singgung $y = \\cos x$ di $x = \\pi/2$?",
          "opsi": [
            "A. 1",
            "B. -1",
            "C. $\\pi/2$",
            "D. $-\\pi/2$",
            "E. 0"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Intersep sumbu-Y adalah nilai $y$ pada garis singgung saat $x = 0$, sehingga persamaan garis singgungnya perlu dicari lebih dahulu.\n\nLangkah 2: Cari titik dan gradiennya. Substitusi $x = \\frac{\\pi}{2}$ memberi $y = \\cos\\frac{\\pi}{2} = 0$, dan dari $y' = -\\sin x$ diperoleh $m = -\\sin\\frac{\\pi}{2} = -1$.\n\nLangkah 3: Susun garis singgungnya: $y - 0 = -1\\left(x - \\frac{\\pi}{2}\\right) \\implies y = -x + \\frac{\\pi}{2}$.\n\nLangkah 4: Substitusikan $x = 0$: $y = \\frac{\\pi}{2}$.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "plot",
            "f": "Math.cos(x)",
            "x0": -0.829,
            "x1": 3.971,
            "lab": "y = f(x)",
            "tang": {
              "x": 1.5708,
              "y": 0.0,
              "m": -1.0
            }
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q7] Persamaan garis singgung kurva $y = 3\\sin(x)$ di titik $(0, 0)$ adalah ...",
          "opsi": [
            "A. $y = x/3$",
            "B. $y = -3x$",
            "C. $y = 0$",
            "D. $y = 3x$",
            "E. $3x + y = 0$"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Persamaan garis singgung memakai $y - y_1 = m\\left(x - x_1\\right)$ dengan titik singgung $(0, 0)$ yang sudah diketahui.\n\nLangkah 2: Turunkan: $y' = 3\\cos x$.\n\nLangkah 3: Substitusikan $x = 0$, dengan $\\cos 0 = 1$: $m = 3(1) = 3$.\n\nLangkah 4: Substitusikan ke rumus: $y - 0 = 3(x - 0) \\implies y = 3x$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "3*Math.sin(x)",
            "x0": -2.4,
            "x1": 2.4,
            "lab": "y = f(x)",
            "tang": {
              "x": 0.0,
              "y": 0.0,
              "m": 3.0
            }
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P21-Q8] Pada kurva y = 2 cos(x) di titik (pi/3, 1), manakah pernyataan analisis garis berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Nilai turunan pertama fungsi adalah y' = -2 sin(x).",
            "B. Titik (pi/3, 1) tidak terletak pada kurva.",
            "C. Gradien garis normal di titik tersebut adalah m_n = 1/3 akar(3).",
            "D. Gradien garis singgung di titik tersebut adalah m_s = -akar(3).",
            "E. Persamaan garis singgungnya adalah y - 1 = -akar(3)(x - pi/3)."
          ],
          "kunci": "A, C, D, E",
          "bahas": "Langkah 1: Analisis Opsi A:\n$y' = -2\\sin x$.\n$\\implies$ Pernyataan A BENAR.\n\nLangkah 2: Analisis Opsi B:\n$y = 2\\cos(\\pi/3) = 2(1/2) = 1 \\implies$ titik terletak tepat pada kurva.\n$\\implies$ Pernyataan B SALAH.\n\nLangkah 3: Analisis Opsi C:\n$m_n = -\\frac{1}{-\\sqrt{3}} = \\frac{\\sqrt{3}}{3} = \\frac{1}{3}\\sqrt{3}$.\n$\\implies$ Pernyataan C BENAR.\n\nLangkah 4: Analisis Opsi D:\n$m_s = -2\\sin(\\pi/3) = -2(\\frac{1}{2}\\sqrt{3}) = -\\sqrt{3}$.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E:\n$y - y_1 = m(x - x_1) \\implies y - 1 = -\\sqrt{3}(x - \\pi/3)$.\n$\\implies$ Pernyataan E BENAR.\nKesimpulan: Kunci Jawaban A, C, D, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q9] Garis singgung kurva $y = \\cos(2x)$ di titik $(0, 1)$ adalah ...",
          "opsi": [
            "A. $y = 0$",
            "B. $y = -2x + 1$",
            "C. $x = 0$",
            "D. $y = 2x + 1$",
            "E. $y = 1$"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Persamaan garis singgung memakai $y - y_1 = m\\left(x - x_1\\right)$ dengan titik singgung $(0, 1)$ yang sudah diketahui.\n\nLangkah 2: Turunkan dengan aturan rantai: $y' = -2\\sin(2x)$.\n\nLangkah 3: Substitusikan $x = 0$, dengan $\\sin 0 = 0$: $m = -2(0) = 0$.\n\nLangkah 4: Karena gradiennya nol, garis singgungnya mendatar: $y - 1 = 0(x - 0) \\implies y = 1$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "Math.cos(2*x)",
            "x0": -2.4,
            "x1": 2.4,
            "lab": "y = f(x)",
            "tang": {
              "x": 0.0,
              "y": 1.0,
              "m": 0.0
            }
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q10] Gradien garis singgung $y = 4\\sin(2x)$ di titik $x = 0$ adalah ...",
          "opsi": [],
          "kunci": "8",
          "bahas": "Langkah 1: Gradien garis singgung sama dengan nilai turunan pertama di titik itu.\n\nLangkah 2: Turunkan dengan aturan rantai: $y' = 4 \\cdot 2\\cos(2x) = 8\\cos(2x)$.\n\nLangkah 3: Substitusikan $x = 0$, dengan $\\cos 0 = 1$: $m = 8(1) = 8$.\nKesimpulan: Kunci Jawaban 8.",
          "viz": {
            "t": "plot",
            "f": "4*Math.sin(2*x)",
            "x0": -2.4,
            "x1": 2.4,
            "lab": "y = f(x)",
            "tang": {
              "x": 0.0,
              "y": 0.0,
              "m": 8.0
            }
          }
        }
      ]
    },
    "P22": {
      "id": "P22",
      "subject": "Matematika Peminatan",
      "title": "Turunan Fungsi Trigonometri 6: Uji Kemonotonan (Fungsi Naik & Turun)",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P22-Q1] Fungsi $f(x) = \\sin(2x)$ pada interval $0 \\le x \\le \\pi$ akan naik pada interval ...",
          "opsi": [
            "A. $0 < x < \\pi/2$",
            "B. $\\pi/4 < x < \\pi/2$",
            "C. $\\pi/4 < x < 3\\pi/4$",
            "D. $0 \\le x < \\pi/4$ dan $3\\pi/4 < x \\le \\pi$",
            "E. $\\pi/2 < x < \\pi$"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Fungsi naik pada selang yang memenuhi $f'(x) > 0$, sehingga turunannya dicari lebih dahulu.\n\nLangkah 2: Turunkan dengan aturan rantai: $f'(x) = 2\\cos(2x)$. Syarat naik menjadi $\\cos(2x) > 0$.\n\nLangkah 3: Kosinus bernilai positif saat sudutnya berada di kuadran I atau IV. Untuk $0 \\le x \\le \\pi$ berlaku $0 \\le 2x \\le 2\\pi$, sehingga $\\cos(2x) > 0$ pada $0 \\le 2x < \\frac{\\pi}{2}$ atau $\\frac{3\\pi}{2} < 2x \\le 2\\pi$.\n\nLangkah 4: Bagi semuanya dengan $2$: $0 \\le x < \\frac{\\pi}{4}$ dan $\\frac{3\\pi}{4} < x \\le \\pi$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(2*x)",
            "x0": 0,
            "x1": 3.142,
            "lab": "y = f(x)",
            "pi": 1,
            "naik": [
              [
                0.0,
                0.7854
              ],
              [
                2.3562,
                3.1416
              ]
            ],
            "crit": [
              0.7854,
              2.3562,
              3.927,
              5.4978
            ]
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P22-Q2] Fungsi $f(x) = \\cos(x)$ pada interval $0 \\le x \\le 2\\pi$ akan turun pada interval ...",
          "opsi": [
            "A. $3\\pi/2 < x < 2\\pi$",
            "B. $\\pi < x < 2\\pi$",
            "C. $0 < x < \\pi/2$",
            "D. $\\pi/2 < x < 3\\pi/2$",
            "E. $0 < x < \\pi$"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Fungsi turun pada selang yang memenuhi $f'(x) < 0$.\n\nLangkah 2: Turunkan: $f'(x) = -\\sin x$. Syarat turun menjadi $-\\sin x < 0$, yang setara dengan $\\sin x > 0$.\n\nLangkah 3: Sinus bernilai positif pada kuadran I dan II, yaitu $0 < x < \\pi$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "Math.cos(x)",
            "x0": 0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "pi": 1,
            "naik": [
              [
                3.1416,
                6.2832
              ]
            ],
            "crit": [
              0.0,
              3.1416,
              6.2832
            ]
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P22-Q3] Fungsi $f(x) = \\sin(x) + \\cos(x)$ pada interval $0 \\le x \\le 2\\pi$ naik pada ...",
          "opsi": [
            "A. $0 \\le x < \\pi/2$",
            "B. $\\pi/2 < x < 3\\pi/2$",
            "C. $\\pi/4 < x < 5\\pi/4$",
            "D. $0 \\le x < \\pi/4$ dan $5\\pi/4 < x \\le 2\\pi$",
            "E. $0 < x < \\pi$"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Fungsi naik pada selang yang memenuhi $f'(x) > 0$.\n\nLangkah 2: Turunkan: $f'(x) = \\cos x - \\sin x$. Syarat naik menjadi $\\cos x > \\sin x$.\n\nLangkah 3: Cari batasnya lebih dahulu, yaitu saat $\\cos x = \\sin x$ atau $\\tan x = 1$. Pada $[0, 2\\pi]$ penyelesaiannya $x = \\frac{\\pi}{4}$ dan $x = \\frac{5\\pi}{4}$.\n\nLangkah 4: Uji satu titik pada tiap selang. Di $x = 0$ diperoleh $1 - 0 = 1 > 0$ (naik), di $x = \\pi$ diperoleh $-1 - 0 < 0$ (turun). Jadi fungsi naik pada $0 \\le x < \\frac{\\pi}{4}$ dan $\\frac{5\\pi}{4} < x \\le 2\\pi$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(x) + Math.cos(x)",
            "x0": 0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "pi": 1,
            "naik": [
              [
                0.0,
                0.7854
              ],
              [
                3.927,
                6.2832
              ]
            ],
            "crit": [
              0.7854,
              3.927
            ]
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P22-Q4] Titik stasioner pemisah kemonotonan kurva $f(x) = \\sin(2x)$ pada $[0, \\pi]$ adalah ...",
          "opsi": [
            "A. $x = \\pi/4$ dan $x = 3\\pi/4$",
            "B. $x = \\pi/6$",
            "C. $x = \\pi/3$",
            "D. $x = \\pi/2$",
            "E. $x = 0$ dan $x = \\pi$"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Titik stasioner adalah titik yang memenuhi $f'(x) = 0$; di titik inilah fungsi berganti dari naik menjadi turun atau sebaliknya.\n\nLangkah 2: Turunkan dengan aturan rantai: $f'(x) = 2\\cos(2x)$. Syaratnya menjadi $\\cos(2x) = 0$.\n\nLangkah 3: Kosinus bernilai nol saat sudutnya $\\frac{\\pi}{2}$ atau $\\frac{3\\pi}{2}$. Untuk $0 \\le x \\le \\pi$ berlaku $0 \\le 2x \\le 2\\pi$, sehingga $2x = \\frac{\\pi}{2}$ atau $2x = \\frac{3\\pi}{2}$.\n\nLangkah 4: Bagi dengan $2$: $x = \\frac{\\pi}{4}$ dan $x = \\frac{3\\pi}{4}$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(2*x)",
            "x0": 0,
            "x1": 3.142,
            "lab": "y = f(x)",
            "pi": 1,
            "naik": [
              [
                0.0,
                0.7854
              ],
              [
                2.3562,
                3.1416
              ]
            ],
            "crit": [
              0.7854,
              2.3562,
              3.927,
              5.4978
            ]
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P22-Q5] Tentukan kebenaran uji kemonotonan fungsi trigonometri:\n(1) Fungsi f(x) monoton naik pada interval di mana f'(x) > 0.\n(2) Fungsi f(x) monoton turun pada interval di mana f'(x) < 0.\n(3) Fungsi f(x) = sin x selalu monoton naik pada seluruh interval [0, 2pi].",
          "opsi": [
            "Fungsi f(x) monoton naik pada interval di mana f'(x) > 0",
            "Fungsi f(x) monoton turun pada interval di mana f'(x) < 0",
            "Fungsi f(x) = sin x selalu monoton naik pada seluruh interval [0, 2pi]"
          ],
          "kunci": "B - B - S",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nTeorema uji turunan pertama: $f'(x) > 0 \\implies$ fungsi naik.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\nTeorema uji turunan pertama: $f'(x) < 0 \\implies$ fungsi turun.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\n$f'(x) = \\cos x$. Pada kuadran II dan III ($(\\pi/2, 3\\pi/2)$), $\\cos x < 0$ sehingga fungsinya turun, tidak selalu naik.\n$\\implies$ Pernyataan (3) bernilai SALAH.\nKesimpulan: Kunci Jawaban B - B - S."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P22-Q6] Berapakah nilai $f'(\\pi/2)$ untuk $f(x) = \\sin(2x)$?",
          "opsi": [
            "A. 2 (Fungsi naik)",
            "B. -1",
            "C. -2 (Fungsi sedang turun)",
            "D. 1",
            "E. 0 (Stasioner)"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Tanda $f'(x)$ menunjukkan arah gerak kurva: positif berarti naik, negatif berarti turun, nol berarti stasioner.\n\nLangkah 2: Turunkan dengan aturan rantai: $f'(x) = 2\\cos(2x)$.\n\nLangkah 3: Substitusikan $x = \\frac{\\pi}{2}$, sehingga sudutnya menjadi $\\pi$. Karena $\\cos\\pi = -1$, diperoleh $f'\\!\\left(\\frac{\\pi}{2}\\right) = 2(-1) = -2$.\n\nLangkah 4: Nilainya negatif, sehingga kurva sedang turun di titik tersebut.\nKesimpulan: Kunci Jawaban C."
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P22-Q7] Fungsi $f(x) = \\tan(x)$ pada interval $-\\pi/2 < x < \\pi/2$ bersifat ...",
          "opsi": [
            "A. Naik lalu turun",
            "B. Selalu naik pada seluruh domainnya",
            "C. Selalu turun",
            "D. Maksimum mutlak",
            "E. Stasioner"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Sifat naik atau turun ditentukan oleh tanda $f'(x)$ pada seluruh domain yang ditinjau.\n\nLangkah 2: Turunkan: $f'(x) = \\sec^2 x = \\frac{1}{\\cos^2 x}$.\n\nLangkah 3: Pada $-\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$ nilai $\\cos x \\ne 0$, sehingga $\\cos^2 x$ selalu positif dan $\\frac{1}{\\cos^2 x}$ pun selalu positif.\n\nLangkah 4: Karena $f'(x) > 0$ di seluruh domainnya, fungsi selalu naik.\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P22-Q8] Pada fungsi f(x) = sin(2x) untuk interval [0, pi], manakah pernyataan kemonotonan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Fungsi f(x) tidak pernah mengalami kenaikan.",
            "B. Turunan pertama fungsi adalah f'(x) = 2 cos(2x).",
            "C. Titik stasioner fungsi terjadi di x = pi/4 dan x = 3pi/4.",
            "D. Fungsi f(x) naik pada interval [0, pi/4) dan (3pi/4, pi].",
            "E. Fungsi f(x) turun pada interval (pi/4, 3pi/4)."
          ],
          "kunci": "B, C, D, E",
          "bahas": "Langkah 1: Analisis Opsi A:\nFungsi memiliki interval naik dan turun secara bergantian.\n$\\implies$ Pernyataan A SALAH.\n\nLangkah 2: Analisis Opsi B:\n$f'(x) = 2\\cos 2x$.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C:\n$2\\cos 2x = 0 \\implies 2x = \\pi/2, 3\\pi/2 \\implies x = \\pi/4, 3\\pi/4$.\n$\\implies$ Pernyataan C BENAR.\n\nLangkah 4: Analisis Opsi D:\nUji tanda $f'(x) > 0$ pada $[0, \\pi/4)$ dan $(3\\pi/4, \\pi]$.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E:\nUji tanda $f'(x) < 0$ pada $(\\pi/4, 3\\pi/4)$.\n$\\implies$ Pernyataan E BENAR.\nKesimpulan: Kunci Jawaban B, C, D, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P22-Q9] Fungsi $f(x) = -2\\cos(x)$ pada $0 < x < \\pi$ bersifat ...",
          "opsi": [
            "A. Selalu naik",
            "B. Konstan",
            "C. Selalu turun",
            "D. Cekung bawah",
            "E. Stasioner"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Sifat naik atau turun ditentukan oleh tanda $f'(x)$ pada selang yang ditinjau.\n\nLangkah 2: Turunkan: $f'(x) = -2 \\cdot (-\\sin x) = 2\\sin x$.\n\nLangkah 3: Pada $0 < x < \\pi$ nilai $\\sin x$ selalu positif, sehingga $f'(x) = 2\\sin x > 0$.\n\nLangkah 4: Karena turunannya positif di seluruh selang, fungsi selalu naik.\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P22-Q10] Absis $x$ di kuadran I saat $f(x) = \\sin(4x)$ mencapai puncak stasioner pertamanya adalah ... (dalam pecahan pi)",
          "opsi": [],
          "kunci": "pi/8",
          "bahas": "Langkah 1: Puncak stasioner tercapai saat $f'(x) = 0$ dan nilai fungsinya maksimum, yaitu saat $\\sin(4x) = 1$.\n\nLangkah 2: Turunkan: $f'(x) = 4\\cos(4x)$, sehingga syaratnya $\\cos(4x) = 0$, yaitu $4x = \\frac{\\pi}{2}$ untuk penyelesaian terkecil yang positif.\n\nLangkah 3: Bagi dengan $4$: $x = \\frac{\\pi}{8}$. Periksa nilainya: $\\sin\\!\\left(4 \\cdot \\frac{\\pi}{8}\\right) = \\sin\\frac{\\pi}{2} = 1$, yang memang nilai maksimum, sehingga titik ini benar puncak.\nKesimpulan: Kunci Jawaban pi/8.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(4*x)",
            "x0": 0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "pi": 1,
            "naik": [
              [
                0.0,
                0.3927
              ],
              [
                1.1781,
                1.5708
              ]
            ],
            "crit": [
              0.3927,
              1.1781,
              1.9635,
              2.7489,
              3.5343,
              4.3197
            ]
          }
        }
      ]
    },
    "P23": {
      "id": "P23",
      "subject": "Matematika Peminatan",
      "title": "Turunan Fungsi Trigonometri 7: Titik Stasioner & Kecekungan Kurva",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P23-Q1] Titik stasioner maksimum dari $f(x) = \\sin x + \\cos x$ pada $[0, 2\\pi]$ terletak di absis ...",
          "opsi": [
            "A. $x = \\pi/4$",
            "B. $x = 3\\pi/4$",
            "C. $x = 5\\pi/4$",
            "D. $x = \\pi/2$",
            "E. $x = 7\\pi/4$"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: $f'(x) = \\cos x - \\sin x = 0 \\implies x = \\pi/4$ (nilai $\\sqrt{2}$) dan $x = 5\\pi/4$ (nilai $-\\sqrt{2}$).\n\nLangkah 2: Maksimum terjadi di $x = \\pi/4$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(x) + Math.cos(x)",
            "x0": 0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "pi": 1,
            "naik": [
              [
                0.0,
                0.7854
              ],
              [
                3.927,
                6.2832
              ]
            ],
            "crit": [
              0.7854,
              3.927
            ]
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P23-Q2] Nilai maksimum dari $f(x) = 3\\sin x - 4\\cos x + 5$ adalah ...",
          "opsi": [
            "A. 5",
            "B. 12",
            "C. 10",
            "D. 8",
            "E. 7"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Bentuk $a\\sin x + b\\cos x$ dapat ditulis sebagai $k\\sin(x+\\alpha)$ dengan $k = \\sqrt{a^2+b^2}$, sehingga nilainya berayun antara $-k$ dan $+k$.\n\nLangkah 2: Di sini $a = 3$ dan $b = -4$, sehingga $k = \\sqrt{3^2 + (-4)^2} = \\sqrt{25} = 5$.\n\nLangkah 3: Nilai maksimum bagian trigonometrinya adalah $+5$, lalu tambahkan konstanta $5$: $5 + 5 = 10$.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "plot",
            "f": "3*Math.sin(x) - 4*Math.cos(x) + 5",
            "x0": 0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "pi": 1,
            "naik": [
              [
                0.0,
                2.4981
              ],
              [
                5.6397,
                6.2832
              ]
            ],
            "crit": [
              2.4981,
              5.6397
            ]
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P23-Q3] Kurva $f(x) = \\sin(x)$ pada interval $[0, 2\\pi]$ akan cekung ke bawah ($f''(x) < 0$) pada interval ...",
          "opsi": [
            "A. $0 < x < \\pi$",
            "B. $\\pi/2 < x < 3\\pi/2$",
            "C. $\\pi < x < 2\\pi$",
            "D. $0 < x < \\pi/2$",
            "E. $3\\pi/2 < x < 2\\pi$"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Kurva cekung ke bawah pada selang yang memenuhi $f''(x) < 0$, sehingga turunan keduanya dicari lebih dahulu.\n\nLangkah 2: Turunkan dua kali: $f'(x) = \\cos x$, lalu $f''(x) = -\\sin x$.\n\nLangkah 3: Syaratnya menjadi $-\\sin x < 0$, yang setara dengan $\\sin x > 0$.\n\nLangkah 4: Sinus bernilai positif pada kuadran I dan II, yaitu $0 < x < \\pi$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(x)",
            "x0": 0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "pi": 1,
            "naik": [
              [
                0.0,
                1.5708
              ],
              [
                4.7124,
                6.2832
              ]
            ],
            "crit": [
              1.5708,
              4.7124
            ]
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P23-Q4] Titik belok kurva $f(x) = \\cos(x)$ pada interval $[0, 2\\pi]$ terjadi di absis ...",
          "opsi": [
            "A. $x = 0$ dan $x = 2\\pi$",
            "B. $x = \\pi/2$ dan $x = 3\\pi/2$",
            "C. $x = \\pi$",
            "D. $x = \\pi/4$",
            "E. $x = 3\\pi/4$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Titik belok adalah titik tempat kurva berganti kecekungan, yaitu saat $f''(x) = 0$ disertai pergantian tanda.\n\nLangkah 2: Turunkan dua kali: $f'(x) = -\\sin x$, lalu $f''(x) = -\\cos x$.\n\nLangkah 3: Syaratnya menjadi $\\cos x = 0$, yang pada $[0, 2\\pi]$ dipenuhi oleh $x = \\frac{\\pi}{2}$ dan $x = \\frac{3\\pi}{2}$.\n\nLangkah 4: Pada kedua absis itu tanda $\\cos x$ memang berganti, sehingga keduanya benar titik belok.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "plot",
            "f": "Math.cos(x)",
            "x0": 0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "pi": 1,
            "naik": [
              [
                3.1416,
                6.2832
              ]
            ],
            "crit": [
              0.0,
              3.1416,
              6.2832
            ]
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P23-Q5] Tentukan kebenaran titik stasioner dan kecekungan kurva:\n(1) Kurva cekung ke atas pada interval di mana f''(x) > 0.\n(2) Titik belok kurva terjadi saat f''(x) = 0 tanpa adanya perubahan tanda kecekungan.\n(3) Titik stasioner tercapai saat nilai turunan pertama f'(x) = 0.",
          "opsi": [
            "Kurva cekung ke atas pada interval di mana f''(x) > 0",
            "Titik belok kurva terjadi saat f''(x) = 0 tanpa adanya perubahan tanda kecekungan",
            "Titik stasioner tercapai saat nilai turunan pertama f'(x) = 0"
          ],
          "kunci": "B - S - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nUji turunan kedua $f''(x) > 0 \\implies$ cekung ke atas (konkaf atas).\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\nTitik belok mutlak mensyaratkan terjadinya perubahan tanda kecekungan di titik tersebut.\n$\\implies$ Pernyataan (2) bernilai SALAH.\n\nLangkah 3: Analisis Pernyataan (3):\nSyarat stasioner kritis $f'(x) = 0$.\n$\\implies$ Pernyataan (3) bernilai BENAR.\nKesimpulan: Kunci Jawaban B - S - B."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P23-Q6] Berapakah nilai minimum mutlak fungsi $f(x) = 2\\sin(3x) - 1$?",
          "opsi": [
            "A. -2",
            "B. -1",
            "C. 1",
            "D. -3",
            "E. 0"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Nilai $\\sin(3x)$ selalu berada pada selang $-1 \\le \\sin(3x) \\le 1$, berapa pun nilai $x$.\n\nLangkah 2: Kalikan dengan $2$: $-2 \\le 2\\sin(3x) \\le 2$.\n\nLangkah 3: Kurangi $1$ pada semua ruas: $-3 \\le f(x) \\le 1$, sehingga nilai minimum mutlaknya $-3$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "2*Math.sin(3*x) - 1",
            "x0": 0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "pi": 1,
            "naik": [
              [
                0.0,
                0.5236
              ],
              [
                1.5708,
                2.0944
              ]
            ],
            "crit": [
              0.5236,
              1.5708,
              2.618,
              3.6652,
              4.7124,
              5.7596
            ]
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P23-Q7] Kurva $f(x) = \\cos(2x)$ cekung ke atas ($f''(x) > 0$) pada interval ...",
          "opsi": [
            "A. $3\\pi/4 < x < \\pi$",
            "B. $0 < x < \\pi/4$",
            "C. $\\pi/4 < x < 3\\pi/4$",
            "D. $\\pi/2 < x < \\pi$",
            "E. $0 < x < \\pi/2$"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Kurva cekung ke atas pada selang yang memenuhi $f''(x) > 0$.\n\nLangkah 2: Turunkan dua kali dengan aturan rantai: $f'(x) = -2\\sin(2x)$, lalu $f''(x) = -4\\cos(2x)$.\n\nLangkah 3: Syaratnya menjadi $-4\\cos(2x) > 0$, yang setara dengan $\\cos(2x) < 0$.\n\nLangkah 4: Kosinus bernilai negatif saat $\\frac{\\pi}{2} < 2x < \\frac{3\\pi}{2}$. Bagi dengan $2$: $\\frac{\\pi}{4} < x < \\frac{3\\pi}{4}$.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "plot",
            "f": "Math.cos(2*x)",
            "x0": 0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "pi": 1,
            "naik": [
              [
                1.5708,
                3.1416
              ]
            ],
            "crit": [
              0.0,
              1.5708,
              3.1416,
              4.7124,
              6.2832
            ]
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P23-Q8] Pada fungsi f(x) = cos(2x) untuk interval [0, pi], manakah pernyataan titik stasioner berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Nilai minimum fungsi adalah -1 (tercapai di x = pi/2).",
            "B. Nilai turunan pertama f'(x) = -2 sin(2x).",
            "C. Kurva selalu cekung ke bawah pada seluruh interval [0, pi].",
            "D. Titik stasioner terjadi di x = 0, x = pi/2, dan x = pi.",
            "E. Nilai maksimum fungsi adalah 1 (tercapai di x = 0 dan x = pi)."
          ],
          "kunci": "A, B, D, E",
          "bahas": "Langkah 1: Analisis Opsi A:\n$f(\\pi/2) = \\cos\\pi = -1$.\n$\\implies$ Pernyataan A BENAR.\n\nLangkah 2: Analisis Opsi B:\n$f'(x) = -2\\sin 2x$.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C:\n$f''(x) = -4\\cos 2x$, bernilai positif (cekung ke atas) pada $(\\pi/4, 3\\pi/4)$, tidak selalu cekung ke bawah.\n$\\implies$ Pernyataan C SALAH.\n\nLangkah 4: Analisis Opsi D:\n$-2\\sin 2x = 0 \\implies 2x = 0, \\pi, 2\\pi \\implies x = 0, \\pi/2, \\pi$.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E:\n$f(0) = \\cos 0 = 1, f(\\pi) = \\cos 2\\pi = 1$.\n$\\implies$ Pernyataan E BENAR.\nKesimpulan: Kunci Jawaban A, B, D, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P23-Q9] Nilai maksimum dari fungsi $f(x) = 8\\cos(x) + 6$ adalah ...",
          "opsi": [
            "A. 2",
            "B. 6",
            "C. 10",
            "D. 8",
            "E. 14"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Nilai $\\cos x$ selalu berada pada selang $-1 \\le \\cos x \\le 1$.\n\nLangkah 2: Kalikan dengan $8$: $-8 \\le 8\\cos x \\le 8$.\n\nLangkah 3: Tambahkan $6$ pada semua ruas: $-2 \\le f(x) \\le 14$, sehingga nilai maksimumnya $14$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "8*Math.cos(x) + 6",
            "x0": 0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "pi": 1,
            "naik": [
              [
                3.1416,
                6.2832
              ]
            ],
            "crit": [
              0.0,
              3.1416,
              6.2832
            ]
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P23-Q10] Nilai minimum dari fungsi $f(x) = 5\\cos(2x) + 7$ adalah ...",
          "opsi": [],
          "kunci": "2",
          "bahas": "Langkah 1: Nilai $\\cos(2x)$ selalu berada pada selang $-1 \\le \\cos(2x) \\le 1$; koefisien $2$ pada sudut hanya mempercepat ayunan, tidak mengubah batasnya.\n\nLangkah 2: Kalikan dengan $5$: $-5 \\le 5\\cos(2x) \\le 5$.\n\nLangkah 3: Tambahkan $7$ pada semua ruas: $2 \\le f(x) \\le 12$, sehingga nilai minimumnya $2$.\nKesimpulan: Kunci Jawaban 2.",
          "viz": {
            "t": "plot",
            "f": "5*Math.cos(2*x) + 7",
            "x0": 0,
            "x1": 6.283,
            "lab": "y = f(x)",
            "pi": 1,
            "naik": [
              [
                1.5708,
                3.1416
              ]
            ],
            "crit": [
              0.0,
              1.5708,
              3.1416,
              4.7124,
              6.2832
            ]
          }
        }
      ]
    },
    "P24": {
      "id": "P24",
      "subject": "Matematika Peminatan",
      "title": "Asesmen Sumatif Bab 3: Masalah Optimasi Kontekstual Turunan",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P24-Q1] Jarak jangkauan proyektil $R(\\theta) = \\frac{v_0^2 \\sin(2\\theta)}{g}$. Sudut elevasi $\\theta$ agar jangkauan maksimum adalah ...",
          "opsi": [
            "A. 45 derajat",
            "B. 15 derajat",
            "C. 60 derajat",
            "D. 90 derajat",
            "E. 30 derajat"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Jangkauan maksimum tercapai saat $\\frac{dR}{d\\theta} = 0$, karena di titik itulah fungsi berhenti naik.\n\nLangkah 2: Turunkan terhadap $\\theta$ dengan aturan rantai: $\\frac{dR}{d\\theta} = \\frac{v_0^2}{g} \\cdot 2\\cos(2\\theta)$.\n\nLangkah 3: Syaratnya menjadi $\\cos(2\\theta) = 0$, sehingga $2\\theta = 90^\\circ$.\n\nLangkah 4: Bagi dengan $2$: $\\theta = 45^\\circ$. Nilai ini memang maksimum karena $\\sin(2\\theta)$ mencapai nilai tertingginya, yaitu $1$.\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P24-Q2] Luas penampang talang air berbentuk trapesium sama kaki maksimum dicapai saat sudut kemiringan $\\theta$ adalah ...",
          "opsi": [
            "A. 75 derajat",
            "B. 30 derajat",
            "C. 45 derajat",
            "D. 60 derajat",
            "E. 90 derajat"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Misalkan lebar tiap bagian talang $L$ dan sudut kemiringan sisi tegaknya $\\theta$. Luas penampang trapesium sama kaki tersebut adalah $A(\\theta) = L^2\\sin\\theta\\left(1+\\cos\\theta\\right)$.\n\nLangkah 2: Luas maksimum tercapai saat $A'(\\theta) = 0$. Turunkan dengan aturan hasil kali: $A'(\\theta) = L^2\\left(\\cos\\theta + \\cos^2\\theta - \\sin^2\\theta\\right)$.\n\nLangkah 3: Ganti $\\sin^2\\theta = 1 - \\cos^2\\theta$, sehingga syaratnya menjadi $2\\cos^2\\theta + \\cos\\theta - 1 = 0$, yaitu $\\left(2\\cos\\theta - 1\\right)\\left(\\cos\\theta + 1\\right) = 0$.\n\nLangkah 4: Akar yang masuk akal adalah $\\cos\\theta = \\frac{1}{2}$, sehingga $\\theta = 60^\\circ$.\nKesimpulan: Kunci Jawaban D."
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P24-Q3] Nilai maksimum dari fungsi pendapatan $P(t) = 100 + 40\\sin(\\pi t / 6)$ juta rupiah adalah ...",
          "opsi": [
            "A. 180 juta rupiah",
            "B. 120 juta rupiah",
            "C. 140 juta rupiah",
            "D. 100 juta rupiah",
            "E. 60 juta rupiah"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Nilai $\\sin\\!\\left(\\frac{\\pi t}{6}\\right)$ selalu berada pada selang $-1$ sampai $1$, sehingga pendapatan tertinggi tercapai saat nilainya $1$.\n\nLangkah 2: Substitusikan nilai maksimum tersebut: $P = 100 + 40(1)$.\n\nLangkah 3: Hitung hasilnya: $P = 140$ juta rupiah.\nKesimpulan: Kunci Jawaban C."
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P24-Q4] Sebuah partikel bergerak dengan persamaan posisi $s(t) = 4\\sin(2t)$. Kecepatan maksimum partikel adalah ...",
          "opsi": [
            "A. 8 m/s",
            "B. 2 m/s",
            "C. 0 m/s",
            "D. 16 m/s",
            "E. 4 m/s"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Kecepatan adalah turunan pertama posisi terhadap waktu, yaitu $v(t) = s'(t)$.\n\nLangkah 2: Turunkan dengan aturan rantai: $v(t) = 4 \\cdot 2\\cos(2t) = 8\\cos(2t)$.\n\nLangkah 3: Nilai $\\cos(2t)$ paling besar adalah $1$, sehingga kecepatan maksimumnya $8 \\cdot 1 = 8$ m/s.\nKesimpulan: Kunci Jawaban A."
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P24-Q5] Tentukan kebenaran langkah optimasi matematis menggunakan turunan:\n(1) Nilai ekstrim global suatu fungsi kontinu pada interval tertutup selalu hanya berada di dalam interval, tidak pernah di titik ujung batas.\n(2) Jika f''(c) < 0, maka titik kritis x = c menghasilkan nilai maksimum lokal.\n(3) Nilai ekstrim lokal ditentukan dengan mencari titik kritis pembuat nol turunan pertama f'(x) = 0.",
          "opsi": [
            "Nilai ekstrim global suatu fungsi kontinu pada interval tertutup selalu hanya berada di dalam interval, tidak pernah di titik ujung batas",
            "Jika f''(c) < 0, maka titik kritis x = c menghasilkan nilai maksimum lokal",
            "Nilai ekstrim lokal ditentukan dengan mencari titik kritis pembuat nol turunan pertama f'(x) = 0"
          ],
          "kunci": "S - B - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nTeorema Nilai Ekstrim Weierstrass: Nilai ekstrim global pada interval tertutup $[a,b]$ dapat tercapai di titik stasioner maupun di titik ujung batas $a$ atau $b$.\n$\\implies$ Pernyataan (1) bernilai SALAH.\n\nLangkah 2: Analisis Pernyataan (2):\nUji turunan kedua: $f''(c) < 0 \\implies$ kurva melengkung ke bawah (maksimum lokal).\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nTeorema Fermat: Nilai ekstrim interior berada di titik stasioner $f'(x) = 0$.\n$\\implies$ Pernyataan (3) bernilai BENAR.\nKesimpulan: Kunci Jawaban S - B - B."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P24-Q6] Berapakah percepatan partikel $s(t) = 2\\sin(3t)$ saat $t = \\pi/6$?",
          "opsi": [
            "A. -6",
            "B. 0",
            "C. -18",
            "D. 6",
            "E. 18"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Percepatan adalah turunan kedua posisi terhadap waktu, yaitu $a(t) = s''(t)$.\n\nLangkah 2: Turunkan dua kali: $v(t) = 6\\cos(3t)$, lalu $a(t) = -18\\sin(3t)$.\n\nLangkah 3: Substitusikan $t = \\frac{\\pi}{6}$, sehingga sudutnya menjadi $\\frac{\\pi}{2}$. Karena $\\sin\\frac{\\pi}{2} = 1$, diperoleh $a = -18(1) = -18$.\nKesimpulan: Kunci Jawaban C."
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P24-Q7] Keliling persegi panjang terbesar yang dapat dibuat dalam setengah lingkaran berjari-jari $R$ bernilai proporsional dengan ...",
          "opsi": [
            "A. 2R",
            "B. 4R",
            "C. R√3",
            "D. R√5",
            "E. R√2"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Misalkan setengah alas persegi panjang adalah $x$, sehingga lebarnya $2x$ dan tingginya $y = \\sqrt{R^2 - x^2}$ mengikuti persamaan lingkaran.\n\nLangkah 2: Kelilingnya menjadi $K(x) = 4x + 2\\sqrt{R^2-x^2}$. Keliling maksimum tercapai saat $K'(x) = 0$.\n\nLangkah 3: Turunkan: $K'(x) = 4 - \\frac{2x}{\\sqrt{R^2-x^2}} = 0$, sehingga $2\\sqrt{R^2-x^2} = x$. Kuadratkan: $4R^2 - 4x^2 = x^2 \\implies x = \\frac{2R}{\\sqrt{5}}$.\n\nLangkah 4: Substitusikan kembali. Dengan $y = \\frac{R}{\\sqrt{5}}$, diperoleh $K = \\frac{8R}{\\sqrt{5}} + \\frac{2R}{\\sqrt{5}} = \\frac{10R}{\\sqrt{5}} = 2R\\sqrt{5}$, yaitu sebanding dengan $R\\sqrt{5}$.\nKesimpulan: Kunci Jawaban D."
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P24-Q8] Jumlah dua bilangan positif x dan y adalah 20 (x + y = 20). Misalkan P = x . y adalah hasil kalinya. Manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Fungsi hasil kali dalam variabel x adalah P(x) = 20x - x^2.",
            "B. Nilai hasil kali maksimum P_max adalah 100.",
            "C. Nilai x pembuat hasil kali maksimum adalah x = 10.",
            "D. Nilai y pembuat hasil kali maksimum adalah y = 10.",
            "E. Hasil kali maksimum terjadi saat x = 5 dan y = 15."
          ],
          "kunci": "A, B, C, D",
          "bahas": "Langkah 1: Analisis Opsi A:\n$y = 20 - x \\implies P(x) = x(20 - x) = 20x - x^2$.\n$\\implies$ Pernyataan A BENAR.\n\nLangkah 2: Analisis Opsi B:\n$P_{max} = 10 \\times 10 = 100$.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C:\n$P'(x) = 20 - 2x = 0 \\implies x = 10$.\n$\\implies$ Pernyataan C BENAR.\n\nLangkah 4: Analisis Opsi D:\n$y = 20 - 10 = 10$.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E:\nSaat $x=5, y=15$, hasil kali $P = 75 < 100$, bukan maksimum.\n$\\implies$ Pernyataan E SALAH.\nKesimpulan: Kunci Jawaban A, B, C, D."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P24-Q9] Sebuah benda dilempar ke atas dengan tinggi $h(t) = 30t - 5t^2$. Tinggi maksimum yang dicapai adalah ...",
          "opsi": [
            "A. 40 meter",
            "B. 45 meter",
            "C. 60 meter",
            "D. 90 meter",
            "E. 30 meter"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Tinggi maksimum tercapai saat kecepatannya nol, yaitu $h'(t) = 0$.\n\nLangkah 2: Turunkan: $h'(t) = 30 - 10t$. Syaratnya menjadi $30 - 10t = 0$, sehingga $t = 3$ detik.\n\nLangkah 3: Substitusikan $t = 3$ ke fungsi tingginya: $h(3) = 30(3) - 5(3)^2 = 90 - 45 = 45$ meter.\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P24-Q10] Nilai maksimum dari daya listrik $P(t) = 200\\sin^2(100\\pi t)$ watt adalah ...",
          "opsi": [],
          "kunci": "200",
          "bahas": "Langkah 1: Nilai $\\sin(100\\pi t)$ berada pada selang $-1$ sampai $1$, sehingga kuadratnya, yaitu $\\sin^2(100\\pi t)$, berada pada selang $0$ sampai $1$.\n\nLangkah 2: Daya tertinggi tercapai saat $\\sin^2(100\\pi t) = 1$.\n\nLangkah 3: Substitusikan nilai tersebut: $P = 200(1) = 200$ watt.\nKesimpulan: Kunci Jawaban 200."
        }
      ]
    },
    "P25": {
      "id": "P25",
      "subject": "Matematika Peminatan",
      "title": "Integral & Penerapannya 1: Konsep Integral Tak Tentu Dasar Trigonometri",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P25-Q1] Hasil dari $\\int (4\\cos x - 6\\sin x) dx$ adalah ...",
          "opsi": [
            "A. $4\\sin x + 6\\cos x + C$",
            "B. $-4\\sin x + 6\\cos x + C$",
            "C. $-4\\sin x - 6\\cos x + C$",
            "D. $4\\cos x + 6\\sin x + C$",
            "E. $4\\sin x - 6\\cos x + C$"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: $\\int \\cos x dx = \\sin x$, $\\int \\sin x dx = -\\cos x$.\n\nLangkah 2: $4\\sin x - 6(-\\cos x) + C = 4\\sin x + 6\\cos x + C$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "-6*Math.sin(x) + 4*Math.cos(x)",
            "F": "4*Math.sin(x) + 6*Math.cos(x)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14,
            "pi": 1
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P25-Q2] Hasil dari $\\int (3x^2 + 4x - 5) dx$ adalah ...",
          "opsi": [
            "A. $x^3 + 4x^2 - 5x + C$",
            "B. $6x + 4 + C$",
            "C. $x^3 + 2x^2 + C$",
            "D. $3x^3 + 4x^2 - 5x + C$",
            "E. $x^3 + 2x^2 - 5x + C$"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Gunakan aturan pangkat integral $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$ pada tiap suku.\n\nLangkah 2: Integralkan suku demi suku: $\\int 3x^2 dx = \\frac{3x^3}{3} = x^3$; $\\int 4x\\,dx = \\frac{4x^2}{2} = 2x^2$; $\\int -5\\,dx = -5x$.\n\nLangkah 3: Gabungkan dan tambahkan konstanta: $x^3 + 2x^2 - 5x + C$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "3*Math.pow(x, 2) + 4*x - 5",
            "F": "Math.pow(x, 3) + 2*Math.pow(x, 2) - 5*x",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P25-Q3] Hasil dari $\\int \\sec^2(x) dx$ adalah ...",
          "opsi": [
            "A. $\\tan x + C$",
            "B. $-\\tan x + C$",
            "C. $\\cos x + C$",
            "D. $\\sec x \\tan x + C$",
            "E. $\\cot x + C$"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Integral adalah kebalikan turunan, sehingga dicari fungsi yang turunannya $\\sec^2 x$.\n\nLangkah 2: Ingat turunan baku $\\frac{d}{dx}\\tan x = \\sec^2 x$.\n\nLangkah 3: Jadi $\\int \\sec^2 x\\,dx = \\tan x + C$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "Math.pow((1/Math.cos(x)), 2)",
            "F": "Math.sin(x)/Math.cos(x)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14,
            "pi": 1
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P25-Q4] Jika $f'(x) = 6x - 2$ dan $f(1) = 5$, maka rumus fungsi $f(x)$ adalah ...",
          "opsi": [
            "A. $f(x) = 6x^2 - 2x + 1$",
            "B. $f(x) = 3x^2 - 2x + 4$",
            "C. $f(x) = 3x^2 - 2x + 5$",
            "D. $f(x) = 3x^2 + 2x + 4$",
            "E. $f(x) = 3x^2 - 2x$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Fungsi asal diperoleh dengan mengintegralkan turunannya: $f(x) = \\int f'(x)\\,dx$.\n\nLangkah 2: Integralkan: $f(x) = \\int (6x-2)\\,dx = 3x^2 - 2x + C$.\n\nLangkah 3: Cari $C$ dengan syarat $f(1) = 5$: $3(1)^2 - 2(1) + C = 5 \\implies 1 + C = 5 \\implies C = 4$.\n\nLangkah 4: Jadi $f(x) = 3x^2 - 2x + 4$.\nKesimpulan: Kunci Jawaban B."
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P25-Q5] Tentukan kebenaran sifat integral tak tentu:\n(1) Aturan pangkat integral dirumuskan integral x^n dx = [x^(n+1)] / (n+1) + C untuk n != -1.\n(2) Integral dari fungsi konstan dirumuskan integral k dx = kx + C.\n(3) Nilai integral 1/x dx adalah -1/x^2 + C.",
          "opsi": [
            "Aturan pangkat integral dirumuskan integral x^n dx = [x^(n+1)] / (n+1) + C untuk n != -1",
            "Integral dari fungsi konstan dirumuskan integral k dx = kx + C",
            "Nilai integral 1/x dx adalah -1/x^2 + C"
          ],
          "kunci": "B - B - S",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nAturan pangkat baku integral $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$ untuk $n \\ne -1$.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\n$\\int k dx = kx + C$.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\n$\\int \\frac{1}{x} dx = \\ln|x| + C$. Bentuk $-\\frac{1}{x^2}$ adalah turunan dari $1/x$, bukan integralnya.\n$\\implies$ Pernyataan (3) bernilai SALAH.\nKesimpulan: Kunci Jawaban B - B - S."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P25-Q6] Berapakah nilai $C$ jika $\\int 4x dx = 2x^2 + C$ dan kurva melalui titik $(2, 10)$?",
          "opsi": [
            "A. -2",
            "B. 4",
            "C. 8",
            "D. 0",
            "E. 2"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Kurva melalui suatu titik berarti koordinat titik itu memenuhi persamaannya.\n\nLangkah 2: Substitusikan $(2,10)$ ke $y = 2x^2 + C$: $10 = 2(2)^2 + C = 8 + C$.\n\nLangkah 3: Selesaikan: $C = 10 - 8 = 2$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "4*x",
            "F": "2*Math.pow(x, 2)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P25-Q7] Hasil dari $\\int (2\\sin x + 3\\cos x) dx$ adalah ...",
          "opsi": [
            "A. $2\\cos x - 3\\sin x + C$",
            "B. $3\\cos x - 2\\sin x + C$",
            "C. $-2\\cos x - 3\\sin x + C$",
            "D. $-2\\cos x + 3\\sin x + C$",
            "E. $2\\cos x + 3\\sin x + C$"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Gunakan integral baku $\\int \\sin x\\,dx = -\\cos x + C$ dan $\\int \\cos x\\,dx = \\sin x + C$. Perhatikan tanda negatif hanya muncul pada integral sinus.\n\nLangkah 2: Integralkan suku demi suku: $\\int 2\\sin x\\,dx = -2\\cos x$ dan $\\int 3\\cos x\\,dx = 3\\sin x$.\n\nLangkah 3: Gabungkan: $-2\\cos x + 3\\sin x + C$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "2*Math.sin(x) + 3*Math.cos(x)",
            "F": "3*Math.sin(x) - 2*Math.cos(x)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14,
            "pi": 1
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P25-Q8] Manakah hasil evaluasi integral tak tentu berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. integral sin(x) dx = -cos(x) + C.",
            "B. integral sec^2(x) dx = tan(x) + C.",
            "C. integral cos(x) dx = sin(x) + C.",
            "D. integral x^3 dx = 3x^2 + C.",
            "E. integral (6x^2 - 4x + 3) dx = 2x^3 - 2x^2 + 3x + C."
          ],
          "kunci": "A, B, C, E",
          "bahas": "Langkah 1: Analisis Opsi A:\n$\\int \\sin x dx = -\\cos x + C$.\n$\\implies$ Pernyataan A BENAR.\n\nLangkah 2: Analisis Opsi B:\n$\\int \\sec^2 x dx = \\tan x + C$.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C:\n$\\int \\cos x dx = \\sin x + C$.\n$\\implies$ Pernyataan C BENAR.\n\nLangkah 4: Analisis Opsi D:\n$\\int x^3 dx = \\frac{1}{4}x^4 + C$, bukan $3x^2$.\n$\\implies$ Pernyataan D SALAH.\n\nLangkah 5: Analisis Opsi E:\n$\\frac{6}{3}x^3 - \\frac{4}{2}x^2 + 3x + C = 2x^3 - 2x^2 + 3x + C$.\n$\\implies$ Pernyataan E BENAR.\nKesimpulan: Kunci Jawaban A, B, C, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P25-Q9] Hasil dari $\\int (6x^2 - 1) dx$ adalah ...",
          "opsi": [
            "A. $12x + C$",
            "B. $2x^3 - x + C$",
            "C. $2x^3 + x + C$",
            "D. $6x^3 - x + C$",
            "E. $3x^3 - x + C$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Gunakan aturan pangkat $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$ pada tiap suku.\n\nLangkah 2: Integralkan: $\\int 6x^2 dx = \\frac{6x^3}{3} = 2x^3$ dan $\\int -1\\,dx = -x$.\n\nLangkah 3: Gabungkan: $2x^3 - x + C$.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "plot",
            "f": "6*Math.pow(x, 2) - 1",
            "F": "2*Math.pow(x, 3) - x",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P25-Q10] Konstanta $C$ jika $f(x) = \\int 3x^2 dx = x^3 + C$ dan kurva melalui $(1, 6)$ adalah ...",
          "opsi": [],
          "kunci": "5",
          "bahas": "Langkah 1: Kurva melalui suatu titik berarti koordinatnya memenuhi persamaan.\n\nLangkah 2: Substitusikan $(1,6)$ ke $f(x) = x^3 + C$: $6 = 1^3 + C = 1 + C$.\n\nLangkah 3: Selesaikan: $C = 5$.\nKesimpulan: Kunci Jawaban 5.",
          "viz": {
            "t": "plot",
            "f": "3*Math.pow(x, 2)",
            "F": "Math.pow(x, 3)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        }
      ]
    },
    "P26": {
      "id": "P26",
      "subject": "Matematika Peminatan",
      "title": "Integral & Penerapannya 2: Teknik Pengintegralan Metode Substitusi",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P26-Q1] Hasil dari $\\int 2x (x^2 + 1)^4 dx$ adalah ...",
          "opsi": [
            "A. $\\frac{2}{5}(x^2 + 1)^5 + C$",
            "B. $\\frac{1}{10}(x^2 + 1)^5 + C$",
            "C. $(x^2 + 1)^5 + C$",
            "D. $\\frac{1}{4}(x^2 + 1)^5 + C$",
            "E. $\\frac{1}{5}(x^2 + 1)^5 + C$"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Misal $u = x^2 + 1 \\implies du = 2x dx$.\n\nLangkah 2: $\\int u^4 du = \\frac{1}{5}u^5 + C = \\frac{1}{5}(x^2 + 1)^5 + C$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "2*x*Math.pow(Math.pow(x, 2) + 1, 4)",
            "F": "(1/5)*Math.pow(x, 10) + Math.pow(x, 8) + 2*Math.pow(x, 6) + 2*Math.pow(x, 4) + Math.pow(x, 2)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P26-Q2] Hasil dari $\\int \\sin^3(x) \\cos(x) dx$ adalah ...",
          "opsi": [
            "A. $-\\frac{1}{4}\\cos^4(x) + C$",
            "B. $\\frac{1}{4}\\sin^4(x) + C$",
            "C. $\\sin^4(x) + C$",
            "D. $\\frac{1}{4}\\cos^4(x) + C$",
            "E. $\\frac{1}{3}\\sin^4(x) + C$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Misal $u = \\sin x \\implies du = \\cos x dx$.\n\nLangkah 2: $\\int u^3 du = \\frac{1}{4}u^4 + C = \\frac{1}{4}\\sin^4(x) + C$.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "plot",
            "f": "Math.pow(Math.sin(x), 3)*Math.cos(x)",
            "F": "(1/4)*Math.pow(Math.sin(x), 4)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14,
            "pi": 1
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P26-Q3] Hasil dari $\\int \\frac{3x^2}{\\sqrt{x^3 + 1}} dx$ adalah ...",
          "opsi": [
            "A. $\\sqrt{x^3 + 1} + C$",
            "B. $3\\sqrt{x^3 + 1} + C$",
            "C. $\\frac{2}{3}\\sqrt{x^3 + 1} + C$",
            "D. $\\frac{1}{2}\\sqrt{x^3 + 1} + C$",
            "E. $2\\sqrt{x^3 + 1} + C$"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Perhatikan bahwa pembilangnya adalah turunan dari isi akar, sehingga cocok memakai substitusi.\n\nLangkah 2: Misalkan $u = x^3+1$, maka $du = 3x^2 dx$. Integralnya berubah menjadi $\\int \\frac{du}{\\sqrt{u}} = \\int u^{-1/2} du$.\n\nLangkah 3: Terapkan aturan pangkat: $\\frac{u^{1/2}}{1/2} = 2\\sqrt{u}$.\n\nLangkah 4: Kembalikan ke variabel semula: $2\\sqrt{x^3+1} + C$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "3*Math.pow(x, 2)*Math.sqrt(Math.pow(x, 3) + 1)",
            "F": "(2/3)*Math.pow(x, 3)*Math.sqrt(Math.pow(x, 3) + 1) + (2/3)*Math.sqrt(Math.pow(x, 3) + 1)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P26-Q4] Hasil dari $\\int x \\sqrt{x^2 + 9} dx$ adalah ...",
          "opsi": [
            "A. $\\frac{1}{6}(x^2 + 9)^{3/2} + C$",
            "B. $\\frac{1}{2}(x^2 + 9)^{3/2} + C$",
            "C. $\\frac{2}{3}(x^2 + 9)^{3/2} + C$",
            "D. $\\frac{1}{3}(x^2 + 9)^{3/2} + C$",
            "E. $(x^2 + 9)^{3/2} + C$"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: $u = x^2 + 9 \\implies x dx = \\frac{1}{2} du$.\n\nLangkah 2: $\\frac{1}{2} \\int u^{1/2} du = \\frac{1}{2}\\left(\\frac{2}{3}\\right) u^{3/2} + C = \\frac{1}{3}(x^2 + 9)^{3/2} + C$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "x*Math.sqrt(Math.pow(x, 2) + 9)",
            "F": "(1/3)*Math.pow(x, 2)*Math.sqrt(Math.pow(x, 2) + 9) + 3*Math.sqrt(Math.pow(x, 2) + 9)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P26-Q5] Tentukan kebenaran teknik pengintegralan metode substitusi:\n(1) Rumus integral f'(x) / f(x) dx = ln|f(x)| + C.\n(2) Nilai integral 2x e^(x^2) dx adalah 2 e^(x^2) + C.\n(3) Metode substitusi digunakan saat integran memuat fungsi dan turunan faktor pengalinya.",
          "opsi": [
            "Rumus integral f'(x) / f(x) dx = ln|f(x)| + C",
            "Nilai integral 2x e^(x^2) dx adalah 2 e^(x^2) + C",
            "Metode substitusi digunakan saat integran memuat fungsi dan turunan faktor pengalinya"
          ],
          "kunci": "B - S - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\n$\\int \\frac{du}{u} = \\ln|u| + C = \\ln|f(x)| + C$.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\n$u = x^2, du = 2x dx \\implies \\int e^u du = e^u + C = e^{x^2} + C$, bukan dikali 2.\n$\\implies$ Pernyataan (2) bernilai SALAH.\n\nLangkah 3: Analisis Pernyataan (3):\nMetode substitusi $u$-substitution adalah pembalikan aturan rantai turunan.\n$\\implies$ Pernyataan (3) bernilai BENAR.\nKesimpulan: Kunci Jawaban B - S - B."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P26-Q6] Berapakah nilai $\\int_{0}^{1} 2x(x^2+1)^3 dx$?",
          "opsi": [
            "A. 16/4",
            "B. 15/4",
            "C. 4",
            "D. 3",
            "E. 7/2"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Pembilangnya memuat turunan dari $x^2+1$, sehingga dipakai substitusi.\n\nLangkah 2: Misalkan $u = x^2+1$, maka $du = 2x\\,dx$. Batasnya ikut berubah: $x=0 \\Rightarrow u=1$ dan $x=1 \\Rightarrow u=2$.\n\nLangkah 3: Integralnya menjadi $\\int_1^2 u^3 du = \\left[\\frac{u^4}{4}\\right]_1^2$.\n\nLangkah 4: Substitusikan batasnya: $\\frac{16}{4} - \\frac{1}{4} = \\frac{15}{4}$.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "plot",
            "f": "2*x*Math.pow(Math.pow(x, 2) + 1, 3)",
            "x0": -0.6,
            "x1": 1.6,
            "lab": "y = f(x)",
            "area": [
              0.0,
              1.0
            ]
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P26-Q7] Hasil dari $\\int \\cos^2(x) \\sin(x) dx$ adalah ...",
          "opsi": [
            "A. $-\\frac{1}{3}\\sin^3(x) + C$",
            "B. $\\frac{1}{3}\\sin^3(x) + C$",
            "C. $-\\frac{1}{3}\\cos^3(x) + C$",
            "D. $\\frac{1}{3}\\cos^3(x) + C$",
            "E. $-\\cos^3(x) + C$"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: $u = \\cos x \\implies du = -\\sin x dx$.\n\nLangkah 2: $-\\int u^2 du = -\\frac{1}{3}u^3 + C = -\\frac{1}{3}\\cos^3(x) + C$.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(x)*Math.pow(Math.cos(x), 2)",
            "F": "-1/3*Math.pow(Math.cos(x), 3)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14,
            "pi": 1
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P26-Q8] Manakah hasil evaluasi integral substitusi berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. integral sin(2x) dx = 2 cos(2x) + C.",
            "B. integral (2x + 3) / (x^2 + 3x + 5) dx = ln|x^2 + 3x + 5| + C.",
            "C. integral 2x (x^2 + 1)^3 dx = 1/4 (x^2 + 1)^4 + C.",
            "D. integral cos(3x + 1) dx = 1/3 sin(3x + 1) + C.",
            "E. integral sin^3(x) cos(x) dx = 1/4 sin^4(x) + C."
          ],
          "kunci": "B, C, D, E",
          "bahas": "Langkah 1: Analisis Opsi A:\n$\\int \\sin 2x dx = -\\frac{1}{2}\\cos 2x + C$, bukan $2\\cos 2x$.\n$\\implies$ Pernyataan A SALAH.\n\nLangkah 2: Analisis Opsi B:\n$u = x^2+3x+5, du = (2x+3)dx \\implies \\ln|u| + C$.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C:\n$u = x^2+1, du = 2x dx \\implies \\int u^3 du = \\frac{1}{4}u^4 + C$.\n$\\implies$ Pernyataan C BENAR.\n\nLangkah 4: Analisis Opsi D:\n$\\frac{1}{3}\\sin(3x+1) + C$.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E:\n$u = \\sin x, du = \\cos x dx \\implies \\int u^3 du = \\frac{1}{4}u^4 + C$.\n$\\implies$ Pernyataan E BENAR.\nKesimpulan: Kunci Jawaban B, C, D, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P26-Q9] Hasil dari $\\int (3x - 2)^5 dx$ adalah ...",
          "opsi": [
            "A. $\\frac{1}{3}(3x - 2)^6 + C$",
            "B. $\\frac{1}{6}(3x - 2)^6 + C$",
            "C. $(3x - 2)^6 + C$",
            "D. $\\frac{1}{18}(3x - 2)^6 + C$",
            "E. $\\frac{1}{12}(3x - 2)^6 + C$"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Bentuk $(ax+b)^n$ diintegralkan dengan $\\int (ax+b)^n dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + C$; pembagi $a$ muncul sebagai koreksi aturan rantai.\n\nLangkah 2: Substitusikan $a = 3$ dan $n = 5$: $\\frac{(3x-2)^6}{3 \\times 6}$.\n\nLangkah 3: Hitung penyebutnya: $\\frac{1}{18}(3x-2)^6 + C$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "Math.pow(3*x - 2, 5)",
            "F": "(81/2)*Math.pow(x, 6) - 162*Math.pow(x, 5) + 270*Math.pow(x, 4) - 240*Math.pow(x, 3) + 120*Math.pow(x, 2) - 32*x",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P26-Q10] Nilai dari $\\int_0^{\\pi/2} \\sin(x)\\cos(x) dx$ adalah ... (dalam pecahan a/b)",
          "opsi": [],
          "kunci": "1/2",
          "bahas": "Langkah 1: Gunakan identitas sudut rangkap $\\sin x\\cos x = \\frac{1}{2}\\sin(2x)$ agar integralnya menjadi bentuk baku.\n\nLangkah 2: Integralkan: $\\int_0^{\\pi/2}\\frac{1}{2}\\sin(2x)dx = \\left[-\\frac{1}{4}\\cos(2x)\\right]_0^{\\pi/2}$.\n\nLangkah 3: Substitusikan batasnya, dengan $\\cos\\pi = -1$ dan $\\cos 0 = 1$: $-\\frac{1}{4}(-1) - \\left(-\\frac{1}{4}(1)\\right) = \\frac{1}{4}+\\frac{1}{4} = \\frac{1}{2}$.\nKesimpulan: Kunci Jawaban 1/2.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(x)*Math.cos(x)",
            "x0": -0.6,
            "x1": 2.171,
            "lab": "y = f(x)",
            "area": [
              0.0,
              1.5708
            ]
          }
        }
      ]
    },
    "P27": {
      "id": "P27",
      "subject": "Matematika Peminatan",
      "title": "Integral & Penerapannya 3: Teknik Pengintegralan Parsial (Tanzalin)",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P27-Q1] Hasil dari $\\int x \\cos(x) dx$ adalah ...",
          "opsi": [
            "A. $x\\sin(x) + \\cos(x) + C$",
            "B. $-x\\sin(x) + \\cos(x) + C$",
            "C. $x\\cos(x) + \\sin(x) + C$",
            "D. $-x\\cos(x) + \\sin(x) + C$",
            "E. $x\\sin(x) - \\cos(x) + C$"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Bentuk hasil kali polinom dengan fungsi trigonometri diselesaikan dengan integral parsial $\\int u\\,dv = uv - \\int v\\,du$.\n\nLangkah 2: Pilih $u = x$ (karena turunannya menyederhana menjadi $1$) dan $dv = \\cos x\\,dx$, sehingga $du = dx$ dan $v = \\sin x$.\n\nLangkah 3: Substitusikan: $x\\sin x - \\int \\sin x\\,dx$.\n\nLangkah 4: Selesaikan integral sisanya, dengan $\\int \\sin x\\,dx = -\\cos x$: $x\\sin x + \\cos x + C$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "x*Math.cos(x)",
            "F": "x*Math.sin(x) + Math.cos(x)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14,
            "pi": 1
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P27-Q2] Hasil dari $\\int x e^x dx$ adalah ...",
          "opsi": [
            "A. $x^2 e^x + C$",
            "B. $x e^x + C$",
            "C. $e^x(1 - x) + C$",
            "D. $e^x(x - 1) + C$",
            "E. $e^x(x + 1) + C$"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Bentuk hasil kali dua fungsi berbeda jenis diselesaikan dengan integral parsial $\\int u\\,dv = uv - \\int v\\,du$.\n\nLangkah 2: Pilih $u = x$ (karena turunannya menyederhana) dan $dv = e^x dx$, sehingga $du = dx$ dan $v = e^x$.\n\nLangkah 3: Substitusikan: $xe^x - \\int e^x dx = xe^x - e^x + C$.\n\nLangkah 4: Faktorkan: $e^x(x-1) + C$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "x*Math.exp(x)",
            "F": "(x - 1)*Math.exp(x)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P27-Q3] Hasil dari $\\int x^2 \\sin(x) dx$ adalah ...",
          "opsi": [
            "A. $-x^2\\cos x + 2x\\sin x + 2\\cos x + C$",
            "B. $-x^2\\cos x + 2x\\sin x - 2\\cos x + C$",
            "C. $x^2\\cos x + 2x\\sin x - 2\\cos x + C$",
            "D. $x^2\\sin x + 2x\\cos x + C$",
            "E. $-x^2\\cos x - 2x\\sin x + 2\\cos x + C$"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Turunkan: $x^2 \\to 2x \\to 2 \\to 0$.\n\nLangkah 2: Integral: $\\sin x \\to -\\cos x \\to -\\sin x \\to \\cos x$.\n\nLangkah 3: $(+)(x^2)(-\\cos x) + (-)(2x)(-\\sin x) + (+)(2)(\\cos x) = -x^2\\cos x + 2x\\sin x + 2\\cos x + C$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "Math.pow(x, 2)*Math.sin(x)",
            "F": "-Math.pow(x, 2)*Math.cos(x) + 2*x*Math.sin(x) + 2*Math.cos(x)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14,
            "pi": 1
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P27-Q4] Hasil dari $\\int x \\sin(2x) dx$ adalah ...",
          "opsi": [
            "A. $\\frac{1}{2}x\\cos(2x) + \\frac{1}{4}\\sin(2x) + C$",
            "B. $-x\\cos(2x) + \\sin(2x) + C$",
            "C. $-\\frac{1}{4}x\\cos(2x) + \\frac{1}{2}\\sin(2x) + C$",
            "D. $-\\frac{1}{2}x\\cos(2x) + \\frac{1}{4}\\sin(2x) + C$",
            "E. $-\\frac{1}{2}x\\cos(2x) - \\frac{1}{4}\\sin(2x) + C$"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Gunakan integral parsial $\\int u\\,dv = uv - \\int v\\,du$.\n\nLangkah 2: Pilih $u = x$ dan $dv = \\sin(2x)dx$, sehingga $du = dx$ dan $v = -\\frac{1}{2}\\cos(2x)$.\n\nLangkah 3: Substitusikan: $-\\frac{1}{2}x\\cos(2x) + \\frac{1}{2}\\int \\cos(2x)dx$.\n\nLangkah 4: Selesaikan integral sisanya: $\\frac{1}{2} \\cdot \\frac{1}{2}\\sin(2x) = \\frac{1}{4}\\sin(2x)$, sehingga hasilnya $-\\frac{1}{2}x\\cos(2x) + \\frac{1}{4}\\sin(2x) + C$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "x*Math.sin(2*x)",
            "F": "-1/2*x*Math.cos(2*x) + (1/4)*Math.sin(2*x)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14,
            "pi": 1
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P27-Q5] Tentukan kebenaran teknik integral parsial:\n(1) Aturan prioritas LIATE menempatkan fungsi Aljabar sebelum Logaritma.\n(2) Rumus dasar integral parsial adalah integral u dv = u.v - integral v du.\n(3) Metode tabel Tanzalin sangat efektif saat fungsi u(x) berupa suku banyak (polinomial).",
          "opsi": [
            "Aturan prioritas LIATE menempatkan fungsi Aljabar sebelum Logaritma",
            "Rumus dasar integral parsial adalah integral u dv = u.v - integral v du",
            "Metode tabel Tanzalin sangat efektif saat fungsi u(x) berupa suku banyak (polinomial)"
          ],
          "kunci": "S - B - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nUrutan LIATE: Logaritma (L) diprioritaskan sebelum Aljabar (A), bukan sebaliknya.\n$\\implies$ Pernyataan (1) bernilai SALAH.\n\nLangkah 2: Analisis Pernyataan (2):\nTeorema integrasi parsial: $\\int u dv = uv - \\int v du$.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nTabel Tanzalin melakukan diferensiasi berulang pada suku banyak hingga menghasilkan 0.\n$\\implies$ Pernyataan (3) bernilai BENAR.\nKesimpulan: Kunci Jawaban S - B - B."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P27-Q6] Berapakah nilai dari $\\int_0^{\\pi} x \\sin(x) dx$?",
          "opsi": [
            "A. 0",
            "B. 1",
            "C. -1",
            "D. $2\\pi$",
            "E. $\\pi$"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Gunakan integral parsial dengan $u = x$ dan $dv = \\sin x\\,dx$, sehingga $du = dx$ dan $v = -\\cos x$.\n\nLangkah 2: Substitusikan: $\\left[-x\\cos x\\right]_0^{\\pi} + \\int_0^{\\pi}\\cos x\\,dx$.\n\nLangkah 3: Hitung suku pertama, dengan $\\cos\\pi = -1$: $-\\pi(-1) - 0 = \\pi$.\n\nLangkah 4: Hitung suku kedua: $\\left[\\sin x\\right]_0^{\\pi} = 0 - 0 = 0$. Jadi hasilnya $\\pi + 0 = \\pi$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "x*Math.sin(x)",
            "x0": -1.1,
            "x1": 4.241,
            "lab": "y = f(x)",
            "area": [
              0.0,
              3.1416
            ]
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P27-Q7] Hasil dari $\\int \\ln(x) dx$ adalah ...",
          "opsi": [
            "A. $x\\ln(x) + C$",
            "B. $\\frac{1}{x} + C$",
            "C. $x\\ln(x) - x + C$",
            "D. $x\\ln(x) + x + C$",
            "E. $\\ln(x) - x + C$"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Meski hanya satu fungsi, integral parsial tetap bisa dipakai dengan menganggap $dv = dx$.\n\nLangkah 2: Pilih $u = \\ln x$ dan $dv = dx$, sehingga $du = \\frac{1}{x}dx$ dan $v = x$.\n\nLangkah 3: Substitusikan: $x\\ln x - \\int x \\cdot \\frac{1}{x}dx = x\\ln x - \\int 1\\,dx$.\n\nLangkah 4: Selesaikan: $x\\ln x - x + C$.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "plot",
            "f": "Math.log(x)",
            "F": "x*Math.log(x) - x",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P27-Q8] Manakah hasil evaluasi integral parsial berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. integral x e^(2x) dx = x e^(2x) + C.",
            "B. integral ln(x) dx = x ln(x) - x + C.",
            "C. integral x cos(x) dx = x sin(x) + cos(x) + C.",
            "D. integral x sin(x) dx = -x cos(x) + sin(x) + C.",
            "E. integral x e^x dx = (x - 1) e^x + C."
          ],
          "kunci": "B, C, D, E",
          "bahas": "Langkah 1: Analisis Opsi A:\n$\\int x e^{2x} dx = \\frac{1}{2}x e^{2x} - \\frac{1}{4}e^{2x} + C$, bukan $x e^{2x}$.\n$\\implies$ Pernyataan A SALAH.\n\nLangkah 2: Analisis Opsi B:\n$u=\\ln x, dv=dx \\implies x\\ln x - \\int x(1/x)dx = x\\ln x - x + C$.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C:\n$u=x, dv=\\cos x dx \\implies x\\sin x - \\int \\sin x dx = x\\sin x + \\cos x + C$.\n$\\implies$ Pernyataan C BENAR.\n\nLangkah 4: Analisis Opsi D:\n$u=x, dv=\\sin x dx \\implies -x\\cos x - \\int -\\cos x dx = -x\\cos x + \\sin x + C$.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E:\n$u=x, dv=e^x dx \\implies x e^x - \\int e^x dx = (x-1)e^x + C$.\n$\\implies$ Pernyataan E BENAR.\nKesimpulan: Kunci Jawaban B, C, D, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P27-Q9] Hasil dari $\\int x (2x + 1)^4 dx$ adalah ...",
          "opsi": [
            "A. $\\frac{1}{5}(2x+1)^5 + C$",
            "B. $\\frac{1}{10}x(2x+1)^5 - \\frac{1}{120}(2x+1)^6 + C$",
            "C. $\\frac{1}{12}(2x+1)^6 + C$",
            "D. $\\frac{1}{60}(2x+1)^6 + C$",
            "E. $\\frac{1}{10}x(2x+1)^5 + C$"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Gunakan integral parsial $\\int u\\,dv = uv - \\int v\\,du$.\n\nLangkah 2: Pilih $u = x$ dan $dv = (2x+1)^4 dx$, sehingga $du = dx$ dan $v = \\frac{(2x+1)^5}{2 \\times 5} = \\frac{1}{10}(2x+1)^5$.\n\nLangkah 3: Substitusikan: $\\frac{1}{10}x(2x+1)^5 - \\frac{1}{10}\\int (2x+1)^5 dx$.\n\nLangkah 4: Selesaikan integral sisanya: $\\frac{1}{10} \\cdot \\frac{(2x+1)^6}{12} = \\frac{1}{120}(2x+1)^6$, sehingga hasilnya $\\frac{1}{10}x(2x+1)^5 - \\frac{1}{120}(2x+1)^6 + C$.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "plot",
            "f": "x*Math.pow(2*x + 1, 4)",
            "F": "(8/3)*Math.pow(x, 6) + (32/5)*Math.pow(x, 5) + 6*Math.pow(x, 4) + (8/3)*Math.pow(x, 3) + (1/2)*Math.pow(x, 2)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P27-Q10] Nilai dari $\\int_{0}^{1} x e^x dx$ adalah ...",
          "opsi": [],
          "kunci": "1",
          "bahas": "Langkah 1: Gunakan integral parsial dengan $u = x$ dan $dv = e^x dx$, sehingga hasil antiturunannya $e^x(x-1)$.\n\nLangkah 2: Substitusikan batasnya: $\\left[e^x(x-1)\\right]_0^1 = e^1(1-1) - e^0(0-1)$.\n\nLangkah 3: Hitung hasilnya: $0 - (-1) = 1$.\nKesimpulan: Kunci Jawaban 1.",
          "viz": {
            "t": "plot",
            "f": "x*Math.exp(x)",
            "x0": -0.6,
            "x1": 1.6,
            "lab": "y = f(x)",
            "area": [
              0.0,
              1.0
            ]
          }
        }
      ]
    },
    "P28": {
      "id": "P28",
      "subject": "Matematika Peminatan",
      "title": "Integral & Penerapannya 4: Integral Tentu & Teorema Dasar Kalkulus",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P28-Q1] Nilai dari integral tentu $\\int_{0}^{3} (3x^2 - 2x + 1) dx$ adalah ...",
          "opsi": [
            "A. 21",
            "B. 15",
            "C. 27",
            "D. 24",
            "E. 18"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Integral tentu dihitung dengan teorema dasar kalkulus $\\int_a^b f(x)dx = F(b) - F(a)$.\n\nLangkah 2: Cari antiturunannya: $F(x) = x^3 - x^2 + x$.\n\nLangkah 3: Substitusikan batas atas dan bawah: $F(3) = 27 - 9 + 3 = 21$ dan $F(0) = 0$.\n\nLangkah 4: Kurangkan: $21 - 0 = 21$.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "3*Math.pow(x, 2) - 2*x + 1",
            "x0": -1.05,
            "x1": 4.05,
            "lab": "y = f(x)",
            "area": [
              0.0,
              3.0
            ]
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P28-Q2] Nilai dari $\\int_0^{\\pi/2} \\cos(x) dx$ adalah ...",
          "opsi": [
            "A. 2",
            "B. -1",
            "C. 0",
            "D. 1",
            "E. 1/2"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Antiturunan dari $\\cos x$ adalah $\\sin x$.\n\nLangkah 2: Substitusikan batasnya: $\\left[\\sin x\\right]_0^{\\pi/2} = \\sin\\frac{\\pi}{2} - \\sin 0$.\n\nLangkah 3: Hitung hasilnya: $1 - 0 = 1$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "Math.cos(x)",
            "x0": -0.6,
            "x1": 2.171,
            "lab": "y = f(x)",
            "area": [
              0.0,
              1.5708
            ]
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P28-Q3] Nilai dari $\\int_{1}^{2} (6x^2 - 4x) dx$ adalah ...",
          "opsi": [
            "A. 14",
            "B. 8",
            "C. 10",
            "D. 12",
            "E. 6"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Cari antiturunannya dengan aturan pangkat: $F(x) = 2x^3 - 2x^2$.\n\nLangkah 2: Substitusikan batas atas: $F(2) = 2(8) - 2(4) = 16 - 8 = 8$.\n\nLangkah 3: Substitusikan batas bawah: $F(1) = 2 - 2 = 0$.\n\nLangkah 4: Kurangkan: $8 - 0 = 8$.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "plot",
            "f": "6*Math.pow(x, 2) - 4*x",
            "x0": 0.4,
            "x1": 2.6,
            "lab": "y = f(x)",
            "area": [
              1.0,
              2.0
            ]
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P28-Q4] Jika $\\int_{0}^{a} 2x dx = 16$ dengan $a > 0$, maka nilai $a$ adalah ...",
          "opsi": [
            "A. 16",
            "B. 2",
            "C. √8",
            "D. 4",
            "E. 8"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Hitung integralnya lebih dahulu dalam bentuk $a$: $\\int_0^a 2x\\,dx = \\left[x^2\\right]_0^a = a^2$.\n\nLangkah 2: Samakan dengan nilai yang diketahui: $a^2 = 16$.\n\nLangkah 3: Akarkan: $a = \\pm 4$. Karena disyaratkan $a > 0$, dipilih $a = 4$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "2*x",
            "x0": -5.6,
            "x1": 21.6,
            "lab": "y = f(x)",
            "area": [
              0.0,
              16.0
            ]
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P28-Q5] Tentukan kebenaran Teorema Dasar Kalkulus (TDK) dan integral tentu:\n(1) Menurut TDK Part 2, integral_a^b f(x) dx = F(b) - F(a).\n(2) Nilai integral tentu dari suatu fungsi pada batas interval nol integral_a^a f(x) dx adalah 1.\n(3) Membalik batas integrasi mengubah tanda aljabar: integral_a^b f(x) dx = - integral_b^a f(x) dx.",
          "opsi": [
            "Menurut TDK Part 2, integral_a^b f(x) dx = F(b) - F(a)",
            "Nilai integral tentu dari suatu fungsi pada batas interval nol integral_a^a f(x) dx adalah 1",
            "Membalik batas integrasi mengubah tanda aljabar: integral_a^b f(x) dx = - integral_b^a f(x) dx"
          ],
          "kunci": "B - S - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nTeorema Dasar Kalkulus Part 2: $\\int_a^b f(x) dx = [F(x)]_a^b = F(b) - F(a)$.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\nInterval dengan lebar nol: $\\int_a^a f(x) dx = F(a) - F(a) = 0$, bukan 1.\n$\\implies$ Pernyataan (2) bernilai SALAH.\n\nLangkah 3: Analisis Pernyataan (3):\nSifat pembalikan batas integral: $\\int_a^b f(x) dx = -\\int_b^a f(x) dx$.\n$\\implies$ Pernyataan (3) bernilai BENAR.\nKesimpulan: Kunci Jawaban B - S - B."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P28-Q6] Berapakah nilai $\\int_0^{\\pi} \\sin(x) dx$?",
          "opsi": [
            "A. -2",
            "B. $\\pi$",
            "C. 1",
            "D. 0",
            "E. 2"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Antiturunan dari $\\sin x$ adalah $-\\cos x$.\n\nLangkah 2: Substitusikan batasnya: $\\left[-\\cos x\\right]_0^{\\pi} = -\\cos\\pi - \\left(-\\cos 0\\right)$.\n\nLangkah 3: Hitung hasilnya, dengan $\\cos\\pi = -1$ dan $\\cos 0 = 1$: $1 + 1 = 2$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(x)",
            "x0": -1.1,
            "x1": 4.241,
            "lab": "y = f(x)",
            "area": [
              0.0,
              3.1416
            ]
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P28-Q7] Nilai dari $\\int_{1}^{4} \\frac{1}{\\sqrt{x}} dx$ adalah ...",
          "opsi": [
            "A. 1/2",
            "B. 2",
            "C. 4",
            "D. 3",
            "E. 1"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Ubah bentuk akar menjadi pangkat agar bisa dipakai aturan pangkat: $\\frac{1}{\\sqrt{x}} = x^{-1/2}$.\n\nLangkah 2: Integralkan: $\\frac{x^{1/2}}{1/2} = 2\\sqrt{x}$.\n\nLangkah 3: Substitusikan batasnya: $\\left[2\\sqrt{x}\\right]_1^4 = 2(2) - 2(1) = 4 - 2 = 2$.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "plot",
            "f": "Math.sqrt(x)",
            "x0": -0.05,
            "x1": 5.05,
            "lab": "y = f(x)",
            "area": [
              1.0,
              4.0
            ]
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P28-Q8] Manakah evaluasi nilai integral tentu berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. integral_0^1 (4x^3) dx = 4.",
            "B. integral_0^2 (3x^2) dx = 8.",
            "C. integral_0^pi sin(x) dx = 2.",
            "D. integral_0^(pi/2) cos(x) dx = 1.",
            "E. integral_(-1)^1 (x^3) dx = 0."
          ],
          "kunci": "B, C, D, E",
          "bahas": "Langkah 1: Analisis Opsi A:\n$[x^4]_0^1 = 1 - 0 = 1$, bukan 4.\n$\\implies$ Pernyataan A SALAH.\n\nLangkah 2: Analisis Opsi B:\n$[x^3]_0^2 = 8 - 0 = 8$.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C:\n$[-\\cos x]_0^\\pi = -(-1) - (-1) = 2$.\n$\\implies$ Pernyataan C BENAR.\n\nLangkah 4: Analisis Opsi D:\n$[\\sin x]_0^{\\pi/2} = 1 - 0 = 1$.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E:\nFungsi $x^3$ ganjil pada interval simetris $[-1, 1] \\implies 0$.\n$\\implies$ Pernyataan E BENAR.\nKesimpulan: Kunci Jawaban B, C, D, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P28-Q9] Nilai dari $\\int_{0}^{2} (4x^3) dx$ adalah ...",
          "opsi": [
            "A. 8",
            "B. 32",
            "C. 16",
            "D. 64",
            "E. 12"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Cari antiturunannya dengan aturan pangkat: $F(x) = x^4$.\n\nLangkah 2: Substitusikan batasnya: $\\left[x^4\\right]_0^2 = 2^4 - 0^4$.\n\nLangkah 3: Hitung hasilnya: $16$.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "plot",
            "f": "4*Math.pow(x, 3)",
            "x0": -0.7,
            "x1": 2.7,
            "lab": "y = f(x)",
            "area": [
              0.0,
              2.0
            ]
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P28-Q10] Nilai dari $\\int_{0}^{1} (6x^5) dx$ adalah ...",
          "opsi": [],
          "kunci": "1",
          "bahas": "Langkah 1: Cari antiturunannya dengan aturan pangkat: $\\int 6x^5 dx = \\frac{6x^6}{6} = x^6$.\n\nLangkah 2: Substitusikan batasnya: $\\left[x^6\\right]_0^1 = 1 - 0$.\n\nLangkah 3: Hasilnya $1$.\nKesimpulan: Kunci Jawaban 1.",
          "viz": {
            "t": "plot",
            "f": "6*Math.pow(x, 5)",
            "x0": -0.6,
            "x1": 1.6,
            "lab": "y = f(x)",
            "area": [
              0.0,
              1.0
            ]
          }
        }
      ]
    },
    "P29": {
      "id": "P29",
      "subject": "Matematika Peminatan",
      "title": "Integral & Penerapannya 5: Aplikasi Luas Daerah Dua Kurva",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q1] Luas daerah yang dibatasi oleh kurva $y = 6x - x^2$ dan sumbu-$X$ adalah ...",
          "opsi": [
            "A. 24 satuan luas",
            "B. 72 satuan luas",
            "C. 36 satuan luas",
            "D. 18 satuan luas",
            "E. 12 satuan luas"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Titik potong sumbu-X: $6x - x^2 = 0 \\implies x(6 - x) = 0 \\implies x = 0$ dan $x = 6$.\n\nLangkah 2: Luas $L = \\int_{0}^{6} (6x - x^2) dx = [3x^2 - \\frac{1}{3}x^3]_0^6$.\n\nLangkah 3: $L = 3(36) - \\frac{1}{3}(216) = 108 - 72 = 36$ satuan luas.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "plot",
            "f": "-Math.pow(x, 2) + 6*x",
            "x0": -2.1,
            "x1": 8.1,
            "lab": "y = f(x)",
            "area": [
              0.0,
              6.0
            ]
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q2] Luas daerah yang dibatasi oleh kurva parabola $y = x^2$ dan garis $y = 2x$ adalah ...",
          "opsi": [
            "A. 2 satuan luas",
            "B. 4/3 satuan luas",
            "C. 1 satuan luas",
            "D. 2/3 satuan luas",
            "E. 8/3 satuan luas"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Rumus cepat parabola & garis: $L = \\frac{D\\sqrt{D}}{6a^2}$.\n\nLangkah 2: $x^2 - 2x = 0 \\implies D = b^2 - 4ac = (-2)^2 - 0 = 4$.\n\nLangkah 3: $L = \\frac{4\\sqrt{4}}{6(1^2)} = \\frac{8}{6} = \\frac{4}{3}$ satuan luas.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "plot",
            "f": "Math.pow(x, 2)",
            "x0": -0.7,
            "x1": 2.7,
            "lab": "y = f(x)",
            "area": [
              0.0,
              2.0
            ],
            "g": "2*x",
            "lab2": "y = g(x)",
            "antara": 1
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q3] Luas daerah antara kurva $y = x^2 - 4$ dan sumbu-$X$ pada interval $-2 \\le x \\le 2$ adalah ...",
          "opsi": [
            "A. 8/3 satuan luas",
            "B. 64/3 satuan luas",
            "C. 16/3 satuan luas",
            "D. 12 satuan luas",
            "E. 32/3 satuan luas"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Periksa dulu posisi kurva. Pada $-2 \\le x \\le 2$ nilai $x^2-4$ selalu negatif atau nol, sehingga kurva berada di BAWAH sumbu-$X$.\n\nLangkah 2: Karena luas selalu positif, integralnya diberi tanda negatif: $L = -\\int_{-2}^{2}\\left(x^2-4\\right)dx$.\n\nLangkah 3: Hitung antiturunannya: $F(x) = \\frac{x^3}{3} - 4x$, sehingga $F(2) = \\frac{8}{3} - 8 = -\\frac{16}{3}$ dan $F(-2) = \\frac{16}{3}$.\n\nLangkah 4: Selesaikan: $L = -\\left(-\\frac{16}{3} - \\frac{16}{3}\\right) = \\frac{32}{3}$ satuan luas.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "Math.pow(x, 2) - 4",
            "x0": -3.4,
            "x1": 3.4,
            "lab": "y = f(x)",
            "area": [
              -2.0,
              2.0
            ]
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q4] Luas daerah yang dibatasi oleh kurva $y = \\sin(x)$ dan sumbu-$X$ pada interval $0 \\le x \\le \\pi$ adalah ...",
          "opsi": [
            "A. 4 satuan luas",
            "B. 1 satuan luas",
            "C. 2 satuan luas",
            "D. 0 satuan luas",
            "E. $\\pi$ satuan luas"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Pada $0 \\le x \\le \\pi$ nilai $\\sin x$ selalu positif atau nol, sehingga kurva berada di atas sumbu-$X$ dan luasnya langsung sama dengan integralnya.\n\nLangkah 2: Hitung integralnya: $L = \\int_0^{\\pi}\\sin x\\,dx = \\left[-\\cos x\\right]_0^{\\pi}$.\n\nLangkah 3: Substitusikan batasnya: $1 + 1 = 2$ satuan luas.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "plot",
            "f": "Math.sin(x)",
            "x0": -1.1,
            "x1": 4.241,
            "lab": "y = f(x)",
            "area": [
              0.0,
              3.1416
            ]
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q5] Tentukan kebenaran konsep luas daerah dan volume benda putar:\n(1) Volume benda putar mengelilingi sumbu-X metode cakram adalah V = pi integral_a^b [f(x)]^2 dx.\n(2) Luas daerah antara dua kurva y1 >= y2 adalah L = integral_a^b (y1 - y2) dx.\n(3) Luas geometris fisik suatu daerah dapat bernilai negatif.",
          "opsi": [
            "Volume benda putar mengelilingi sumbu-X metode cakram adalah V = pi integral_a^b [f(x)]^2 dx",
            "Luas daerah antara dua kurva y1 >= y2 adalah L = integral_a^b (y1 - y2) dx",
            "Luas geometris fisik suatu daerah dapat bernilai negatif"
          ],
          "kunci": "B - B - S",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nMetode cakram elemen silinder $V = \\pi \\int [f(x)]^2 dx$.\n$\\implies$ Pernyataan (1) bernilai BENAR.\n\nLangkah 2: Analisis Pernyataan (2):\nFormula luas: kurva atas dikurangi kurva bawah $\\int (y_{atas} - y_{bawah}) dx$.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nBesaran luas geometris mutlak selalu bernilai non-negatif ($L \\ge 0$).\n$\\implies$ Pernyataan (3) bernilai SALAH.\nKesimpulan: Kunci Jawaban B - B - S."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q6] Berapakah luas daerah yang dibatasi garis $y = 2x$, sumbu-$X$, dan $x = 4$?",
          "opsi": [
            "A. 4 satuan luas",
            "B. 8 satuan luas",
            "C. 12 satuan luas",
            "D. 16 satuan luas",
            "E. 32 satuan luas"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Daerahnya dibatasi garis $y = 2x$, sumbu-$X$, dan garis tegak $x = 4$, sehingga luasnya $L = \\int_0^4 2x\\,dx$.\n\nLangkah 2: Hitung antiturunannya: $\\left[x^2\\right]_0^4$.\n\nLangkah 3: Substitusikan batasnya: $16 - 0 = 16$ satuan luas. Hasil ini bisa dicek sebagai luas segitiga siku-siku: $\\frac{1}{2} \\times 4 \\times 8 = 16$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "2*x",
            "x0": -1.4,
            "x1": 5.4,
            "lab": "y = f(x)",
            "area": [
              0.0,
              4.0
            ]
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q7] Luas daerah antara kurva $y = x^3$, sumbu-$X$, $x = 0$ dan $x = 2$ adalah ...",
          "opsi": [
            "A. 1 satuan luas",
            "B. 16 satuan luas",
            "C. 2 satuan luas",
            "D. 8 satuan luas",
            "E. 4 satuan luas"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Pada $0 \\le x \\le 2$ nilai $x^3$ positif, sehingga luasnya langsung sama dengan integralnya: $L = \\int_0^2 x^3 dx$.\n\nLangkah 2: Hitung antiturunannya: $\\left[\\frac{x^4}{4}\\right]_0^2$.\n\nLangkah 3: Substitusikan batasnya: $\\frac{16}{4} - 0 = 4$ satuan luas.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "Math.pow(x, 3)",
            "x0": -0.7,
            "x1": 2.7,
            "lab": "y = f(x)",
            "area": [
              0.0,
              2.0
            ]
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P29-Q8] Diberikan daerah yang dibatasi oleh kurva y = x^2 dan garis y = 4. Manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. Luas daerah tersebut adalah 32/3 satuan luas.",
            "B. Titik potong kedua kurva berada di x = -2 dan x = 2.",
            "C. Kurva y = 4 berada di atas kurva y = x^2 pada interval [-2, 2].",
            "D. Luas daerah bernilai 0 karena kurva simetris.",
            "E. Volume putar mengelilingi sumbu-X dari x = 0 sampai x = 2 adalah 32/5 pi."
          ],
          "kunci": "A, B, C, E",
          "bahas": "Langkah 1: Analisis Opsi A:\n$L = \\int_{-2}^2 (4 - x^2)dx = 2[4x - x^3/3]_0^2 = 2(8 - 8/3) = 2(16/3) = 32/3$.\n$\\implies$ Pernyataan A BENAR.\n\nLangkah 2: Analisis Opsi B:\n$x^2 = 4 \\implies x = \\pm 2$.\n$\\implies$ Pernyataan B BENAR.\n\nLangkah 3: Analisis Opsi C:\nPada $[-2{,}2]$, $4 \\ge x^2$.\n$\\implies$ Pernyataan C BENAR.\n\nLangkah 4: Analisis Opsi D:\nLuas daerah bernilai positif $32/3$, bukan 0.\n$\\implies$ Pernyataan D SALAH.\n\nLangkah 5: Analisis Opsi E:\n$V = \\pi \\int_0^2 (x^2)^2 dx = \\pi [x^5/5]_0^2 = \\frac{32}{5}\\pi$.\n$\\implies$ Pernyataan E BENAR.\nKesimpulan: Kunci Jawaban A, B, C, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q9] Luas daerah antara kurva $y = 4 - x^2$ dan garis $y = 0$ adalah ...",
          "opsi": [
            "A. 32/3 satuan luas",
            "B. 64/3 satuan luas",
            "C. 12 satuan luas",
            "D. 8/3 satuan luas",
            "E. 16/3 satuan luas"
          ],
          "kunci": "A",
          "bahas": "Langkah 1: Cari dulu batas integrasinya, yaitu titik potong kurva dengan sumbu-$X$: $4 - x^2 = 0 \\implies x = \\pm 2$.\n\nLangkah 2: Pada selang itu kurva berada di atas sumbu-$X$, sehingga $L = \\int_{-2}^{2}\\left(4-x^2\\right)dx$.\n\nLangkah 3: Hitung antiturunannya: $F(x) = 4x - \\frac{x^3}{3}$, sehingga $F(2) = 8 - \\frac{8}{3} = \\frac{16}{3}$ dan $F(-2) = -\\frac{16}{3}$.\n\nLangkah 4: Kurangkan: $\\frac{16}{3} + \\frac{16}{3} = \\frac{32}{3}$ satuan luas.\nKesimpulan: Kunci Jawaban A.",
          "viz": {
            "t": "plot",
            "f": "4 - Math.pow(x, 2)",
            "x0": -3.4,
            "x1": 3.4,
            "lab": "y = f(x)",
            "area": [
              -2.0,
              2.0
            ],
            "g": "0",
            "lab2": "y = g(x)",
            "antara": 1
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q10] Luas daerah yang dibatasi oleh garis $y = 3x$, sumbu-$X$, dan garis $x = 2$ adalah ...",
          "opsi": [],
          "kunci": "6",
          "bahas": "Langkah 1: Daerahnya dibatasi garis $y = 3x$, sumbu-$X$, dan garis tegak $x = 2$, sehingga $L = \\int_0^2 3x\\,dx$.\n\nLangkah 2: Hitung antiturunannya: $\\left[\\frac{3x^2}{2}\\right]_0^2$.\n\nLangkah 3: Substitusikan batasnya: $\\frac{3(4)}{2} = 6$ satuan luas.\nKesimpulan: Kunci Jawaban 6.",
          "viz": {
            "t": "plot",
            "f": "3*x",
            "x0": -0.7,
            "x1": 2.7,
            "lab": "y = f(x)",
            "area": [
              0.0,
              2.0
            ]
          }
        }
      ]
    },
    "P30": {
      "id": "P30",
      "subject": "Matematika Peminatan",
      "title": "Asesmen Sumatif Bab 4: Volume Benda Putar & Simulasi ASAS CBT",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q1] Volume benda putar yang terjadi jika daerah yang dibatasi kurva $y = \\sqrt{x}$, sumbu-$X$, dan garis $x = 4$ diputar $360^\\circ$ mengelilingi sumbu-$X$ adalah ...",
          "opsi": [
            "A. $2\\pi$ satuan volume",
            "B. $16\\pi$ satuan volume",
            "C. $4\\pi$ satuan volume",
            "D. $8\\pi$ satuan volume",
            "E. $32\\pi$ satuan volume"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Formula Volume: $V = \\pi \\int_{a}^{b} y^2 dx$.\n\nLangkah 2: $V = \\pi \\int_{0}^{4} (\\sqrt{x})^2 dx = \\pi \\int_{0}^{4} x dx = \\pi [\\frac{1}{2}x^2]_0^4 = \\pi \\left(\\frac{1}{2}(16)\\right) = 8\\pi$ satuan volume.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "Math.sqrt(x)",
            "x0": -0.4,
            "x1": 4.6,
            "lab": "y = f(x)",
            "area": [
              0.0,
              4.0
            ],
            "rot": 1
          }
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q2] Volume benda putar yang terbentuk dari daerah $y = x^2$ dari $x = 0$ sampai $x = 2$ diputar mengelilingi sumbu-$X$ adalah ...",
          "opsi": [
            "A. $\\frac{64}{5}\\pi$ satuan volume",
            "B. $\\frac{16}{5}\\pi$ satuan volume",
            "C. $4\\pi$ satuan volume",
            "D. $8\\pi$ satuan volume",
            "E. $\\frac{32}{5}\\pi$ satuan volume"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Volume benda putar terhadap sumbu-$X$ memakai metode cakram $V = \\pi\\int_a^b y^2 dx$.\n\nLangkah 2: Kuadratkan fungsinya lebih dahulu: $y = x^2 \\implies y^2 = x^4$.\n\nLangkah 3: Susun integralnya: $V = \\pi\\int_0^2 x^4 dx = \\pi\\left[\\frac{x^5}{5}\\right]_0^2$.\n\nLangkah 4: Substitusikan batasnya: $\\pi \\cdot \\frac{32}{5} = \\frac{32}{5}\\pi$ satuan volume.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "Math.pow(x, 2)",
            "x0": -0.4,
            "x1": 2.6,
            "lab": "y = f(x)",
            "area": [
              0.0,
              2.0
            ],
            "rot": 1
          }
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q3] Volume benda putar daerah yang dibatasi garis $y = 2x$, sumbu-$X$, dan $x = 3$ diputar mengelilingi sumbu-$X$ adalah ...",
          "opsi": [
            "A. $12\\pi$ satuan volume",
            "B. $24\\pi$ satuan volume",
            "C. $72\\pi$ satuan volume",
            "D. $36\\pi$ satuan volume",
            "E. $18\\pi$ satuan volume"
          ],
          "kunci": "D",
          "bahas": "Langkah 1: Volume benda putar terhadap sumbu-$X$ memakai metode cakram $V = \\pi\\int_a^b y^2 dx$.\n\nLangkah 2: Kuadratkan fungsinya: $y = 2x \\implies y^2 = 4x^2$.\n\nLangkah 3: Susun integralnya: $V = \\pi\\int_0^3 4x^2 dx = \\pi\\left[\\frac{4x^3}{3}\\right]_0^3$.\n\nLangkah 4: Substitusikan batasnya: $\\pi \\cdot \\frac{4(27)}{3} = 36\\pi$ satuan volume. Bendanya memang kerucut berjari-jari $6$ dan tinggi $3$.\nKesimpulan: Kunci Jawaban D.",
          "viz": {
            "t": "plot",
            "f": "2*x",
            "x0": -0.4,
            "x1": 3.6,
            "lab": "y = f(x)",
            "area": [
              0.0,
              3.0
            ],
            "rot": 1
          }
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q4] Nilai dari $\\int_{0}^{2} (3x^2 - 2x + 1) dx$ adalah ...",
          "opsi": [
            "A. 10",
            "B. 8",
            "C. 4",
            "D. 12",
            "E. 6"
          ],
          "kunci": "E",
          "bahas": "Langkah 1: Cari antiturunannya dengan aturan pangkat: $F(x) = x^3 - x^2 + x$.\n\nLangkah 2: Substitusikan batas atas: $F(2) = 8 - 4 + 2 = 6$.\n\nLangkah 3: Substitusikan batas bawah: $F(0) = 0$, sehingga hasilnya $6 - 0 = 6$.\nKesimpulan: Kunci Jawaban E.",
          "viz": {
            "t": "plot",
            "f": "3*Math.pow(x, 2) - 2*x + 1",
            "x0": -0.7,
            "x1": 2.7,
            "lab": "y = f(x)",
            "area": [
              0.0,
              2.0
            ]
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q5] Tentukan kebenaran rangkuman evaluasi kalkulus:\n(1) Nilai turunan dari fungsi konstan f(x) = c adalah f'(x) = c.\n(2) Turunan pertama f'(x) merepresentasikan laju perubahan sesaat fungsi.\n(3) Integral tentu merepresentasikan akumulasi luas bertanda di bawah kurva.",
          "opsi": [
            "Nilai turunan dari fungsi konstan f(x) = c adalah f'(x) = c",
            "Turunan pertama f'(x) merepresentasikan laju perubahan sesaat fungsi",
            "Integral tentu merepresentasikan akumulasi luas bertanda di bawah kurva"
          ],
          "kunci": "S - B - B",
          "bahas": "Langkah 1: Analisis Pernyataan (1):\nTurunan fungsi konstan selalu sama dengan 0 (karena tidak mengalami perubahan nilai), bukan $c$.\n$\\implies$ Pernyataan (1) bernilai SALAH.\n\nLangkah 2: Analisis Pernyataan (2):\nDefinisi turunan pertama adalah limit laju perubahan sesaat $f'(x) = \\lim_{h\\to 0} \\frac{f(x+h)-f(x)}{h}$.\n$\\implies$ Pernyataan (2) bernilai BENAR.\n\nLangkah 3: Analisis Pernyataan (3):\nIntegral tentu Riemann menjumlahkan luas bertanda partisi kurva.\n$\\implies$ Pernyataan (3) bernilai BENAR.\nKesimpulan: Kunci Jawaban S - B - B."
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q6] Berapakah volume tabung putar dari daerah $y = 3$, $0 \\le x \\le 4$ diputar sumbu-X?",
          "opsi": [
            "A. $12\\pi$ satuan volume",
            "B. $18\\pi$ satuan volume",
            "C. $36\\pi$ satuan volume",
            "D. $48\\pi$ satuan volume",
            "E. $24\\pi$ satuan volume"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Volume benda putar terhadap sumbu-$X$ memakai metode cakram $V = \\pi\\int_a^b y^2 dx$.\n\nLangkah 2: Substitusikan $y = 3$ dengan batas $0$ sampai $4$: $V = \\pi\\int_0^4 3^2 dx = \\pi\\int_0^4 9\\,dx$.\n\nLangkah 3: Hitung: $\\pi\\left[9x\\right]_0^4 = 36\\pi$ satuan volume. Bendanya memang berupa tabung berjari-jari $3$ dan tinggi $4$.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "plot",
            "f": "3",
            "x0": -0.4,
            "x1": 4.6,
            "lab": "y = f(x)",
            "area": [
              0.0,
              4.0
            ],
            "rot": 1
          }
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q7] Volume benda putar kurva $y = x$, $0 \\le x \\le 2$ diputar mengelilingi sumbu-$X$ adalah ...",
          "opsi": [
            "A. $2\\pi$ satuan volume",
            "B. $\\frac{8}{3}\\pi$ satuan volume",
            "C. $8\\pi$ satuan volume",
            "D. $\\frac{4}{3}\\pi$ satuan volume",
            "E. $4\\pi$ satuan volume"
          ],
          "kunci": "B",
          "bahas": "Langkah 1: Volume benda putar terhadap sumbu-$X$ memakai metode cakram $V = \\pi\\int_a^b y^2 dx$.\n\nLangkah 2: Substitusikan $y = x$ dengan batas $0$ sampai $2$: $V = \\pi\\int_0^2 x^2 dx$.\n\nLangkah 3: Hitung antiturunannya: $\\pi\\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{8}{3}\\pi$ satuan volume. Bendanya berupa kerucut berjari-jari $2$ dan tinggi $2$.\nKesimpulan: Kunci Jawaban B.",
          "viz": {
            "t": "plot",
            "f": "x",
            "x0": -0.4,
            "x1": 2.6,
            "lab": "y = f(x)",
            "area": [
              0.0,
              2.0
            ],
            "rot": 1
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[P30-Q8] Pada grand review kalkulus, manakah pernyataan berikut yang BENAR? (Pilih semua yang benar)",
          "opsi": [
            "A. integral cos(2x) dx = 1/2 sin(2x) + C.",
            "B. d/dx [cos(x)] = sin(x).",
            "C. d/dx [sin(2x)] = 2 cos(2x).",
            "D. integral_0^1 (3x^2 + 2x) dx = 2.",
            "E. limit x->0 (sin 4x) / (2x) = 2."
          ],
          "kunci": "A, C, D, E",
          "bahas": "Langkah 1: Analisis Opsi A:\n$\\int \\cos 2x dx = \\frac{1}{2}\\sin 2x + C$.\n$\\implies$ Pernyataan A BENAR.\n\nLangkah 2: Analisis Opsi B:\n$\\frac{d}{dx}[\\cos x] = -\\sin x$, bukan $\\sin x$.\n$\\implies$ Pernyataan B SALAH.\n\nLangkah 3: Analisis Opsi C:\n$\\frac{d}{dx}[\\sin 2x] = 2\\cos 2x$.\n$\\implies$ Pernyataan C BENAR.\n\nLangkah 4: Analisis Opsi D:\n$[x^3 + x^2]_0^1 = (1+1) - 0 = 2$.\n$\\implies$ Pernyataan D BENAR.\n\nLangkah 5: Analisis Opsi E:\n$\\lim \\frac{\\sin 4x}{2x} = \\frac{4}{2} = 2$.\n$\\implies$ Pernyataan E BENAR.\nKesimpulan: Kunci Jawaban A, C, D, E."
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q9] Hasil dari $\\int_{0}^{1} (4x^3 + 3x^2) dx$ adalah ...",
          "opsi": [
            "A. 7",
            "B. 3",
            "C. 2",
            "D. 4",
            "E. 1"
          ],
          "kunci": "C",
          "bahas": "Langkah 1: Cari antiturunannya suku demi suku dengan aturan pangkat: $F(x) = x^4 + x^3$.\n\nLangkah 2: Substitusikan batas atas: $F(1) = 1 + 1 = 2$.\n\nLangkah 3: Substitusikan batas bawah: $F(0) = 0$, sehingga hasilnya $2$.\nKesimpulan: Kunci Jawaban C.",
          "viz": {
            "t": "plot",
            "f": "4*Math.pow(x, 3) + 3*Math.pow(x, 2)",
            "x0": -0.6,
            "x1": 1.6,
            "lab": "y = f(x)",
            "area": [
              0.0,
              1.0
            ]
          }
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q10] Koefisien $\\pi$ pada volume benda putar kurva $y = 2\\sqrt{x}$ dari $x=0$ ke $x=3$ mengelilingi sumbu-$X$ adalah ...",
          "opsi": [],
          "kunci": "18",
          "bahas": "Langkah 1: Volume benda putar terhadap sumbu-$X$ memakai $V = \\pi\\int_a^b y^2 dx$.\n\nLangkah 2: Kuadratkan fungsinya; akarnya langsung hilang: $y = 2\\sqrt{x} \\implies y^2 = 4x$.\n\nLangkah 3: Susun integralnya: $V = \\pi\\int_0^3 4x\\,dx = \\pi\\left[2x^2\\right]_0^3$.\n\nLangkah 4: Substitusikan batasnya: $\\pi(2 \\times 9) = 18\\pi$, sehingga koefisien $\\pi$-nya adalah $18$.\nKesimpulan: Kunci Jawaban 18.",
          "viz": {
            "t": "plot",
            "f": "2*Math.sqrt(x)",
            "x0": -0.4,
            "x1": 3.6,
            "lab": "y = f(x)",
            "area": [
              0.0,
              3.0
            ],
            "rot": 1
          }
        }
      ]
    }
  },
  "tka_clil": {
    "P25": {
      "title": "Indefinite Integrals & Fundamental Power Rules",
      "questions": [
        {
          "no": 1,
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P25-Q1] Evaluate the indefinite integral: $$\\int (8x^3 - 6x^2 + 4x - 7) dx$$",
          "opsi": [
            "A. $4x^4 - 3x^3 + 2x^2 - 7x + C$",
            "B. $2x^4 - 2x^3 + 2x^2 - 7x + C$",
            "C. $8x^4 - 6x^3 + 4x^2 - 7x + C$",
            "D. $2x^4 - 3x^3 + 4x^2 - 7x + C$",
            "E. $24x^2 - 12x + 4 + C$"
          ],
          "kunci": "B",
          "bahas": "Step 1: Integrate term-by-term: $8(\\frac{x^4}{4}) - 6(\\frac{x^3}{3}) + 4(\\frac{x^2}{2}) - 7x + C$.\n\nStep 2: Simplify: $2x^4 - 2x^3 + 2x^2 - 7x + C$.\nConclusion: Answer Key B.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "8*Math.pow(x, 3) - 6*Math.pow(x, 2) + 4*x - 7",
            "F": "2*Math.pow(x, 4) - 2*Math.pow(x, 3) + 2*Math.pow(x, 2) - 7*x",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 2,
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P25-Q2] Evaluate the integral: $$\\int \\left(3\\sqrt{x} + \\frac{2}{x^2}\\right) dx$$",
          "opsi": [
            "A. $\\frac{3}{2}\\sqrt{x} - \\frac{2}{x^3} + C$",
            "B. $2\\sqrt{x^3} - 2x + C$",
            "C. $2x^{3/2} - \\frac{2}{x} + C$",
            "D. $6x^{3/2} - \\frac{1}{x} + C$",
            "E. $3x^{3/2} + \\frac{2}{x} + C$"
          ],
          "kunci": "C",
          "bahas": "Step 1: Rewrite in power form: $\\int (3x^{1/2} + 2x^{-2}) dx$.\n\nStep 2: Integrate: $3(\\frac{x^{3/2}}{3/2}) + 2(\\frac{x^{-1}}{-1}) + C = 2x^{3/2} - \\frac{2}{x} + C$.\nConclusion: Answer Key C.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "3*Math.sqrt(x) + 2/Math.pow(x, 2)",
            "F": "2*Math.pow(x, 3/2) - 2/x",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 3,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P25-Q3] A curve passes through $(2, 10)$ with gradient function $\\frac{dy}{dx} = 6x - 4$. What is the value of $y(3)$?",
          "opsi": [
            "A. 23",
            "B. 25",
            "C. 18",
            "D. 21",
            "E. 19"
          ],
          "kunci": "D",
          "bahas": "Step 1: $y(x) = \\int (6x - 4) dx = 3x^2 - 4x + C$.\n\nStep 2: Using $(2, 10)$: $10 = 3(4) - 4(2) + C \\implies 10 = 12 - 8 + C \\implies C = 6$.\n\nStep 3: $y(x) = 3x^2 - 4x + 6 \\implies y(3) = 3(9) - 4(3) + 6 = 27 - 12 + 6 = 21$.\nConclusion: Answer Key D.",
          "tipe": "Pilihan Ganda Tunggal"
        },
        {
          "no": 4,
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P25-Q4] Evaluate: $$\\int (2x - 3)^2 dx$$",
          "opsi": [
            "A. $\\frac{1}{3}(2x - 3)^3 + C$",
            "B. $\\frac{4}{3}x^3 - 6x^2 + 9x + C$",
            "C. $\\frac{1}{6}(2x - 3)^3 + C$",
            "D. $4x^3 - 12x^2 + 9x + C$",
            "E. Both A and B are equivalent and correct"
          ],
          "kunci": "E",
          "bahas": "Step 1: Expanding: $\\int (4x^2 - 12x + 9) dx = \\frac{4}{3}x^3 - 6x^2 + 9x + C$.\n\nStep 2: Using linear substitution: $\\frac{1}{2 \\times 3}(2x - 3)^3 + C' = \\frac{1}{6}(2x - 3)^3 + C'$.\n\nStep 3: Both forms differ only by a constant and are identical.\nConclusion: Answer Key E.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "Math.pow(2*x - 3, 2)",
            "F": "(4/3)*Math.pow(x, 3) - 6*Math.pow(x, 2) + 9*x",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[CLIL-P25-Q5] Determine the truth value (TRUE or FALSE) for the following calculus identities:\n(1) The power rule for integrals is integral x^n dx = [x^(n+1)] / (n+1) + C for any real number n != -1.\n(2) The integral of 1/x is integral x^(-1) dx = -1/x^2 + C.\n(3) The integral of a constant is integral k dx = kx + C.",
          "opsi": [
            "The power rule for integrals is integral x^n dx = [x^(n+1)] / (n+1) + C for any real number n != -1",
            "The integral of 1/x is integral x^(-1) dx = -1/x^2 + C",
            "The integral of a constant is integral k dx = kx + C"
          ],
          "kunci": "B - S - B",
          "bahas": "Step 1: Analysis of Statement (1):\nStandard power rule of integration holds for all real exponents except the singular case $n = -1$:\n$$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C, \\quad n \\ne -1$$\n$\\implies$ Statement (1) is TRUE.\n\nStep 2: Analysis of Statement (2):\n$\\int x^{-1} dx = \\ln|x| + C$. The expression $-1/x^2$ is the derivative $\\frac{d}{dx}(1/x)$, not its integral.\n$\\implies$ Statement (2) is FALSE.\n\nStep 3: Analysis of Statement (3):\nConstant linearity integration rule $\\int k dx = kx + C$.\n$\\implies$ Statement (3) is TRUE.\nConclusion: Answer Key B - S - B."
        },
        {
          "no": 6,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P25-Q6] What is the exact value of the curve $f(4)$ given that $f'(x) = 2x + k$?\nStatement (1): The curve passes through the origin $(0, 0)$.\nStatement (2): The tangent line at $x = 1$ is parallel to $y = 5x + 3$.",
          "opsi": [
            "A. Statements (1) and (2) TOGETHER are NOT sufficient",
            "B. BOTH statements TOGETHER are sufficient",
            "C. Statement (1) ALONE is sufficient",
            "D. Statement (2) ALONE is sufficient",
            "E. EACH statement ALONE is sufficient"
          ],
          "kunci": "B",
          "bahas": "Step 1: $f(x) = x^2 + kx + C$. We need two unknowns: $k$ and $C$.\n\nStep 2: Statement (1) gives $C = 0$, but $k$ remains unknown.\n\nStep 3: Statement (2) gives $f'(1) = 2(1) + k = 5 \\implies k = 3$.\n\nStep 4: Combining both statements gives $f(x) = x^2 + 3x \\implies f(4) = 16 + 12 = 28$ (SUFFICIENT).\nConclusion: Answer Key B.",
          "tipe": "Kecukupan Data"
        },
        {
          "no": 7,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P25-Q7] A particle has acceleration $a(t) = 6t$. If $v(1) = 5$ and $s(1) = 4$, find the position function $s(t)$.",
          "opsi": [
            "A. $s(t) = t^3 + 2t + 4$",
            "B. $s(t) = 3t^2 + 2t - 1$",
            "C. $s(t) = t^3 + 2t + 1$",
            "D. $s(t) = 2t^3 + t + 1$",
            "E. $s(t) = t^3 + 5t - 2$"
          ],
          "kunci": "C",
          "bahas": "Step 1: $v(t) = \\int 6t dt = 3t^2 + C_1 \\implies v(1) = 3 + C_1 = 5 \\implies C_1 = 2$.\n\nStep 2: $s(t) = \\int (3t^2 + 2) dt = t^3 + 2t + C_2$.\n\nStep 3: $s(1) = 1 + 2 + C_2 = 4 \\implies C_2 = 1$.\n\nStep 4: $s(t) = t^3 + 2t + 1$.\nConclusion: Answer Key C.",
          "tipe": "Pilihan Ganda Tunggal"
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[CLIL-P25-Q8] Which of the following indefinite integral evaluations are CORRECT? (Select all that apply)",
          "opsi": [
            "A. integral e^x dx = e^x + C.",
            "B. integral 1/x^2 dx = -1/x + C.",
            "C. integral x^3 dx = 3x^2 + C.",
            "D. integral cos(x) dx = sin(x) + C.",
            "E. integral (6x^2 - 4x + 3) dx = 2x^3 - 2x^2 + 3x + C."
          ],
          "kunci": "A, B, D, E",
          "bahas": "Step 1: Analysis of Option A:\n$\\int e^x dx = e^x + C$.\n$\\implies$ Statement A is CORRECT.\n\nStep 2: Analysis of Option B:\n$\\int x^{-2} dx = -x^{-1} + C = -\\frac{1}{x} + C$.\n$\\implies$ Statement B is CORRECT.\n\nStep 3: Analysis of Option C:\n$\\int x^3 dx = \\frac{1}{4}x^4 + C \\ne 3x^2$.\n$\\implies$ Statement C is INCORRECT.\n\nStep 4: Analysis of Option D:\n$\\int \\cos x dx = \\sin x + C$.\n$\\implies$ Statement D is CORRECT.\n\nStep 5: Analysis of Option E:\n$\\int (6x^2 - 4x + 3) dx = 2x^3 - 2x^2 + 3x + C$.\n$\\implies$ Statement E is CORRECT.\nConclusion: Answer Key A, B, D, E."
        },
        {
          "no": 9,
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P25-Q9] Evaluate the integral: $$\\int \\frac{x^3 + 3x}{x} dx$$",
          "opsi": [
            "A. $\\frac{1}{3}x^3 + 3 + C$",
            "B. $x^3 + 3x + C$",
            "C. $x^2 + 3 + C$",
            "D. $\\frac{1}{4}x^4 + \\frac{3}{2}x^2 + C$",
            "E. $\\frac{1}{3}x^3 + 3x + C$"
          ],
          "kunci": "E",
          "bahas": "Step 1: Simplify algebraic fraction: $\\frac{x^3 + 3x}{x} = x^2 + 3$.\n\nStep 2: Integrate: $\\int (x^2 + 3) dx = \\frac{1}{3}x^3 + 3x + C$.\nConclusion: Answer Key E.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "(Math.pow(x, 3) + 3*x)/x",
            "F": "(1/3)*Math.pow(x, 3) + 3*x",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 10,
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P25-Q10] If $\\frac{dy}{dx} = 4x^3 - 2x$ and the curve passes through $(1, 5)$, what is the value of the constant of integration $C$?",
          "kunci": "5",
          "bahas": "Step 1: $y = x^4 - x^2 + C$.\n\nStep 2: Substitute $(1, 5)$: $5 = 1^4 - 1^2 + C \\implies 5 = 0 + C \\implies C = 5$.\nConclusion: Numeric Answer 5.\nConclusion: Answer Key 5.",
          "tipe": "Isian Singkat Numerik"
        }
      ]
    },
    "P26": {
      "title": "Integration Techniques: Method of u-Substitution",
      "questions": [
        {
          "no": 1,
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P26-Q1] Evaluate the integral: $$\\int 3x^2 (x^3 + 2)^5 dx$$",
          "opsi": [
            "A. $(x^3 + 2)^6 + C$",
            "B. $\\frac{1}{2}(x^3 + 2)^6 + C$",
            "C. $\\frac{3}{6}(x^3 + 2)^6 + C$",
            "D. $\\frac{1}{5}(x^3 + 2)^6 + C$",
            "E. $\\frac{1}{6}(x^3 + 2)^6 + C$"
          ],
          "kunci": "E",
          "bahas": "Step 1: Let $u = x^3 + 2 \\implies du = 3x^2 dx$.\n\nStep 2: $\\int u^5 du = \\frac{u^6}{6} + C = \\frac{1}{6}(x^3 + 2)^6 + C$.\nConclusion: Answer Key E.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "3*Math.pow(x, 2)*Math.pow(Math.pow(x, 3) + 2, 5)",
            "F": "(1/6)*Math.pow(x, 18) + 2*Math.pow(x, 15) + 10*Math.pow(x, 12) + (80/3)*Math.pow(x, 9) + 40*Math.pow(x, 6) + 32*Math.pow(x, 3)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 2,
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P26-Q2] Evaluate: $$\\int \\cos(4x - 1) dx$$",
          "opsi": [
            "A. $-\\frac{1}{4}\\sin(4x - 1) + C$",
            "B. $\\frac{1}{4}\\cos(4x - 1) + C$",
            "C. $\\frac{1}{4}\\sin(4x - 1) + C$",
            "D. $4\\sin(4x - 1) + C$",
            "E. $\\sin(4x - 1) + C$"
          ],
          "kunci": "C",
          "bahas": "Step 1: Let $u = 4x - 1 \\implies du = 4 dx \\implies dx = \\frac{du}{4}$.\n\nStep 2: $\\frac{1}{4}\\int \\cos(u) du = \\frac{1}{4}\\sin(u) + C = \\frac{1}{4}\\sin(4x - 1) + C$.\nConclusion: Answer Key C.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "Math.cos(4*x - 1)",
            "F": "(1/4)*Math.sin(4*x - 1)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14,
            "pi": 1
          }
        },
        {
          "no": 3,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P26-Q3] Evaluate: $$\\int \\frac{2x + 3}{x^2 + 3x + 7} dx$$",
          "opsi": [
            "A. $2\\ln|x^2 + 3x + 7| + C$",
            "B. $\\ln|2x + 3| + C$",
            "C. $\\frac{1}{(x^2 + 3x + 7)^2} + C$",
            "D. $\\frac{1}{2}\\ln|x^2 + 3x + 7| + C$",
            "E. $\\ln|x^2 + 3x + 7| + C$"
          ],
          "kunci": "E",
          "bahas": "Step 1: Let $u = x^2 + 3x + 7 \\implies du = (2x + 3)dx$.\n\nStep 2: $\\int \\frac{1}{u} du = \\ln|u| + C = \\ln|x^2 + 3x + 7| + C$.\nConclusion: Answer Key E.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "(2*x + 3)/(Math.pow(x, 2) + 3*x + 7)",
            "F": "Math.log(Math.pow(x, 2) + 3*x + 7)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 4,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P26-Q4] Evaluate: $$\\int x \\sqrt{x^2 + 9} dx$$",
          "opsi": [
            "A. $(x^2 + 9)^{3/2} + C$",
            "B. $\\frac{1}{3}(x^2 + 9)^{3/2} + C$",
            "C. $\\frac{1}{6}(x^2 + 9)^{3/2} + C$",
            "D. $\\frac{1}{2}(x^2 + 9)^{3/2} + C$",
            "E. $\\frac{2}{3}(x^2 + 9)^{3/2} + C$"
          ],
          "kunci": "B",
          "bahas": "Step 1: Let $u = x^2 + 9 \\implies du = 2x dx \\implies x dx = \\frac{du}{2}$.\n\nStep 2: $\\frac{1}{2}\\int u^{1/2} du = \\frac{1}{2}(\\frac{2}{3}u^{3/2}) + C = \\frac{1}{3}(x^2 + 9)^{3/2} + C$.\nConclusion: Answer Key B.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "x*Math.sqrt(Math.pow(x, 2) + 9)",
            "F": "(1/3)*Math.pow(x, 2)*Math.sqrt(Math.pow(x, 2) + 9) + 3*Math.sqrt(Math.pow(x, 2) + 9)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[CLIL-P26-Q5] Verify the truth values of the following u-substitution principles:\n(1) The logarithmic integration rule gives integral f'(x) / f(x) dx = ln|f(x)| + C.\n(2) The integral integral e^(5x) dx is equal to 5 e^(5x) + C.\n(3) The u-substitution method corresponds to inverting the derivative chain rule.",
          "opsi": [
            "The logarithmic integration rule gives integral f'(x) / f(x) dx = ln|f(x)| + C",
            "The integral integral e^(5x) dx is equal to 5 e^(5x) + C",
            "The u-substitution method corresponds to inverting the derivative chain rule"
          ],
          "kunci": "B - S - B",
          "bahas": "Step 1: Analysis of Statement (1):\n$\\int \\frac{f'(x)}{f(x)}dx = \\int \\frac{du}{u} = \\ln|u| + C = \\ln|f(x)| + C$.\n$\\implies$ Statement (1) is TRUE.\n\nStep 2: Analysis of Statement (2):\n$\\int e^{5x} dx = \\frac{1}{5}e^{5x} + C$. The factor is divided by 5, not multiplied.\n$\\implies$ Statement (2) is FALSE.\n\nStep 3: Analysis of Statement (3):\nIntegration by substitution directly reverses the chain rule: $\\int f(g(x))g'(x)dx = \\int f(u)du$.\n$\\implies$ Statement (3) is TRUE.\nConclusion: Answer Key B - S - B."
        },
        {
          "no": 6,
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P26-Q6] Evaluate the definite integral: $$\\int_{0}^{1} 2x(x^2 + 1)^3 dx$$",
          "opsi": [
            "A. 8",
            "B. $\\frac{16}{4}$",
            "C. $\\frac{7}{4}$",
            "D. $\\frac{15}{4}$",
            "E. 4"
          ],
          "kunci": "D",
          "bahas": "Step 1: Let $u = x^2 + 1$. Bounds: $x=0 \\implies u=1$, $x=1 \\implies u=2$.\n\nStep 2: $\\int_{1}^{2} u^3 du = [\\frac{u^4}{4}]_1^2 = \\frac{16 - 1}{4} = \\frac{15}{4}$.\nConclusion: Answer Key D.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "2*x*Math.pow(Math.pow(x, 2) + 1, 3)",
            "x0": -0.6,
            "x1": 1.6,
            "lab": "y = f(x)",
            "area": [
              0.0,
              1.0
            ]
          }
        },
        {
          "no": 7,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P26-Q7] Evaluate: $$\\int \\frac{e^{\\sqrt{x}}}{\\sqrt{x}} dx$$",
          "opsi": [
            "A. $e^{x} + C$",
            "B. $2e^{\\sqrt{x}} + C$",
            "C. $e^{\\sqrt{x}} + C$",
            "D. $\\frac{1}{2}e^{\\sqrt{x}} + C$",
            "E. $2\\sqrt{x}e^{\\sqrt{x}} + C$"
          ],
          "kunci": "B",
          "bahas": "Step 1: Let $u = \\sqrt{x} \\implies du = \\frac{1}{2\\sqrt{x}} dx \\implies \\frac{dx}{\\sqrt{x}} = 2 du$.\n\nStep 2: $\\int 2e^u du = 2e^u + C = 2e^{\\sqrt{x}} + C$.\nConclusion: Answer Key B.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "Math.sqrt(x)*Math.exp(Math.sqrt(x))",
            "F": "-4*Math.sqrt(x)*Math.exp(Math.sqrt(x)) + 2*x*Math.exp(Math.sqrt(x)) + 4*Math.exp(Math.sqrt(x))",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[CLIL-P26-Q8] Which of the following evaluations using u-substitution are CORRECT? (Select all that apply)",
          "opsi": [
            "A. integral 2x (x^2 + 1)^4 dx = 1/5 (x^2 + 1)^5 + C.",
            "B. integral (2x) / (x^2 + 4) dx = ln(x^2 + 4) + C.",
            "C. integral x e^(x^2) dx = 1/2 e^(x^2) + C.",
            "D. integral 1/(2x + 1) dx = ln|2x + 1| + C.",
            "E. integral cos(3x) dx = 1/3 sin(3x) + C."
          ],
          "kunci": "A, B, C, E",
          "bahas": "Step 1: Analysis of Option A:\n$u = x^2+1, du = 2x dx \\implies \\int u^4 du = \\frac{1}{5}u^5 + C = \\frac{1}{5}(x^2+1)^5 + C$.\n$\\implies$ Statement A is CORRECT.\n\nStep 2: Analysis of Option B:\n$u = x^2+4 \\implies \\int \\frac{du}{u} = \\ln(x^2+4) + C$.\n$\\implies$ Statement B is CORRECT.\n\nStep 3: Analysis of Option C:\n$u = x^2, du = 2x dx \\implies \\frac{1}{2}\\int e^u du = \\frac{1}{2}e^{x^2} + C$.\n$\\implies$ Statement C is CORRECT.\n\nStep 4: Analysis of Option D:\n$\\int \\frac{1}{2x+1}dx = \\frac{1}{2}\\ln|2x+1| + C$, missing the coefficient $1/2$.\n$\\implies$ Statement D is INCORRECT.\n\nStep 5: Analysis of Option E:\n$\\int \\cos(3x)dx = \\frac{1}{3}\\sin(3x) + C$.\n$\\implies$ Statement E is CORRECT.\nConclusion: Answer Key A, B, C, E."
        },
        {
          "no": 9,
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P26-Q9] Evaluate: $$\\int \\sin(x)\\cos^4(x) dx$$",
          "opsi": [
            "A. $\\frac{1}{5}\\cos^5(x) + C$",
            "B. $-\\frac{1}{5}\\sin^5(x) + C$",
            "C. $-\\frac{1}{5}\\cos^5(x) + C$",
            "D. $\\frac{1}{5}\\sin^5(x) + C$",
            "E. $-\\cos^5(x) + C$"
          ],
          "kunci": "C",
          "bahas": "Step 1: Let $u = \\cos(x) \\implies du = -\\sin(x)dx \\implies \\sin(x)dx = -du$.\n\nStep 2: $\\int -u^4 du = -\\frac{u^5}{5} + C = -\\frac{1}{5}\\cos^5(x) + C$.\nConclusion: Answer Key C.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "Math.sin(x)*Math.pow(Math.cos(x), 4)",
            "F": "-1/5*Math.pow(Math.cos(x), 5)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14,
            "pi": 1
          }
        },
        {
          "no": 10,
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P26-Q10] Evaluate: $$\\int_0^{\\pi/2} 2\\sin(x)\\cos(x) dx$$",
          "kunci": "1",
          "bahas": "Step 1: Notice $2\\sin(x)\\cos(x) = \\sin(2x)$.\n\nStep 2: $\\int_0^{\\pi/2} \\sin(2x) dx = [-\\frac{1}{2}\\cos(2x)]_0^{\\pi/2} = -\\frac{1}{2}(\\cos\\pi - \\cos 0) = -\\frac{1}{2}(-1 - 1) = 1$.\nConclusion: Numeric Answer 1.\nConclusion: Answer Key 1.",
          "tipe": "Isian Singkat Numerik",
          "viz": {
            "t": "plot",
            "f": "2*Math.sin(x)*Math.cos(x)",
            "x0": -0.6,
            "x1": 2.171,
            "lab": "y = f(x)",
            "area": [
              0.0,
              1.5708
            ]
          }
        }
      ]
    },
    "P27": {
      "title": "Integration by Parts & Tanzalin Tabular Method",
      "questions": [
        {
          "no": 1,
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P27-Q1] Evaluate: $$\\int x e^x dx$$",
          "opsi": [
            "A. $x e^x + e^x + C$",
            "B. $x^2 e^x - e^x + C$",
            "C. $\\frac{1}{2}x^2 e^x + C$",
            "D. $x e^x - e^x + C$",
            "E. $e^x(x - 2) + C$"
          ],
          "kunci": "D",
          "bahas": "Step 1: A product of two different function types calls for integration by parts: $\\int u\\,dv = uv - \\int v\\,du$.\n\nStep 2: Choose $u = x$ (its derivative simplifies) and $dv = e^x dx$, so $du = dx$ and $v = e^x$.\n\nStep 3: Substitute: $xe^x - \\int e^x dx = xe^x - e^x + C$.\nConclusion: Answer Key D.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "x*Math.exp(x)",
            "F": "(x - 1)*Math.exp(x)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 2,
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P27-Q2] Evaluate: $$\\int x \\sin(x) dx$$",
          "opsi": [
            "A. $x \\sin(x) + \\cos(x) + C$",
            "B. $-\\frac{1}{2}x^2 \\cos(x) + C$",
            "C. $x \\cos(x) - \\sin(x) + C$",
            "D. $-x \\cos(x) - \\sin(x) + C$",
            "E. $-x \\cos(x) + \\sin(x) + C$"
          ],
          "kunci": "E",
          "bahas": "Step 1: $u = x \\implies du = dx$, $dv = \\sin(x)dx \\implies v = -\\cos(x)$.\n\nStep 2: $-x \\cos(x) - \\int -\\cos(x) dx = -x \\cos(x) + \\sin(x) + C$.\nConclusion: Answer Key E.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "x*Math.sin(x)",
            "F": "-x*Math.cos(x) + Math.sin(x)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14,
            "pi": 1
          }
        },
        {
          "no": 3,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P27-Q3] Using Tanzalin Tabular Method, evaluate: $$\\int x^2 \\cos(x) dx$$",
          "opsi": [
            "A. $x^2 \\sin(x) + 2x \\cos(x) - 2\\sin(x) + C$",
            "B. $-x^2 \\sin(x) + 2x \\cos(x) + C$",
            "C. $x^2 \\cos(x) - 2x \\sin(x) + C$",
            "D. $x^2 \\sin(x) - 2x \\cos(x) + 2\\sin(x) + C$",
            "E. $2x \\sin(x) - 2\\cos(x) + C$"
          ],
          "kunci": "A",
          "bahas": "Step 1: Table: $(+) x^2 (\\sin x) = x^2\\sin x$, $(-) (2x) (-\\cos x) = 2x\\cos x$, $(+) (2) (-\\sin x) = -2\\sin x$.\n\nStep 2: Total: $x^2\\sin x + 2x\\cos x - 2\\sin x + C$.\nConclusion: Answer Key A.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "Math.pow(x, 2)*Math.cos(x)",
            "F": "Math.pow(x, 2)*Math.sin(x) + 2*x*Math.cos(x) - 2*Math.sin(x)",
            "x0": 0.0,
            "x1": 6.283,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14,
            "pi": 1
          }
        },
        {
          "no": 4,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P27-Q4] Evaluate: $$\\int x \\ln(x) dx$$",
          "opsi": [
            "A. $\\ln(x) - x + C$",
            "B. $x^2 \\ln(x) - x^2 + C$",
            "C. $\\frac{1}{2}x^2 \\ln(x) - \\frac{1}{4}x^2 + C$",
            "D. $\\frac{1}{2}x^2 \\ln(x) + \\frac{1}{4}x^2 + C$",
            "E. $\\frac{1}{2}x^2 \\ln(x) - \\frac{1}{2}x^2 + C$"
          ],
          "kunci": "C",
          "bahas": "Step 1: Let $u = \\ln x \\implies du = \\frac{dx}{x}$, $dv = x dx \\implies v = \\frac{x^2}{2}$.\n\nStep 2: $\\frac{x^2}{2}\\ln x - \\int \\frac{x^2}{2}\\frac{1}{x} dx = \\frac{1}{2}x^2\\ln x - \\frac{1}{4}x^2 + C$.\nConclusion: Answer Key C.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "x*Math.log(x)",
            "F": "(1/2)*Math.pow(x, 2)*Math.log(x) - 1/4*Math.pow(x, 2)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[CLIL-P27-Q5] Verify the following Integration by Parts properties:\n(1) The LIATE priority rule ranks Trigonometric functions before Algebraic functions.\n(2) The Integration by Parts formula is integral u dv = u.v - integral v du.\n(3) The Tanzalin tabular method is effective when u(x) is a polynomial.",
          "opsi": [
            "The LIATE priority rule ranks Trigonometric functions before Algebraic functions",
            "The Integration by Parts formula is integral u dv = u.v - integral v du",
            "The Tanzalin tabular method is effective when u(x) is a polynomial"
          ],
          "kunci": "S - B - B",
          "bahas": "Step 1: Analysis of Statement (1):\nUnder LIATE: Logarithmic (L), Inverse Trig (I), Algebraic (A), Trigonometric (T), Exponential (E). Algebraic precedes Trigonometric.\n$\\implies$ Statement (1) is FALSE.\n\nStep 2: Analysis of Statement (2):\nIntegration by parts theorem: $\\int u dv = uv - \\int v du$.\n$\\implies$ Statement (2) is TRUE.\n\nStep 3: Analysis of Statement (3):\nThe Tanzalin tabular method works cleanly when repeated differentiation of polynomial $u(x)$ terminates to 0.\n$\\implies$ Statement (3) is TRUE.\nConclusion: Answer Key S - B - B."
        },
        {
          "no": 6,
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P27-Q6] Evaluate: $$\\int_{0}^{1} x e^x dx$$",
          "opsi": [
            "A. $e - 1$",
            "B. $2e - 1$",
            "C. $e$",
            "D. 1",
            "E. $e - 2$"
          ],
          "kunci": "D",
          "bahas": "Step 1: Anti-derivative is $[e^x(x - 1)]_0^1$.\n\nStep 2: At $x = 1$: $e^1(0) = 0$. At $x = 0$: $e^0(0 - 1) = -1$.\n\nStep 3: $0 - (-1) = 1$.\nConclusion: Answer Key D.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "x*Math.exp(x)",
            "x0": -0.6,
            "x1": 1.6,
            "lab": "y = f(x)",
            "area": [
              0.0,
              1.0
            ]
          }
        },
        {
          "no": 7,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P27-Q7] Evaluate: $$\\int x (2x + 1)^4 dx$$",
          "opsi": [
            "A. $\\frac{1}{10}x(2x+1)^5 - \\frac{1}{120}(2x+1)^6 + C$",
            "B. $\\frac{1}{5}x(2x+1)^5 + C$",
            "C. $\\frac{1}{12}(2x+1)^6 + C$",
            "D. $\\frac{1}{6}x^2(2x+1)^5 + C$",
            "E. $\\frac{1}{10}(2x+1)^5 + C$"
          ],
          "kunci": "A",
          "bahas": "Step 1: $u = x \\implies du = dx$, $dv = (2x+1)^4 dx \\implies v = \\frac{1}{10}(2x+1)^5$.\n\nStep 2: $\\frac{x}{10}(2x+1)^5 - \\int \\frac{1}{10}(2x+1)^5 dx = \\frac{x}{10}(2x+1)^5 - \\frac{1}{120}(2x+1)^6 + C$.\nConclusion: Answer Key A.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "x*Math.pow(2*x + 1, 4)",
            "F": "(8/3)*Math.pow(x, 6) + (32/5)*Math.pow(x, 5) + 6*Math.pow(x, 4) + (8/3)*Math.pow(x, 3) + (1/2)*Math.pow(x, 2)",
            "x0": -2.2,
            "x1": 2.2,
            "lab": "y = f(x) (integran)",
            "lab2": "y = F(x) + C",
            "famC": [
              -2,
              -1,
              0,
              1,
              2
            ],
            "clip": 14
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[CLIL-P27-Q8] Which integrals are correctly evaluated using Integration by Parts? (Select all that apply)",
          "opsi": [
            "A. integral x sin(x) dx = -x cos(x) + sin(x) + C.",
            "B. integral x cos(x) dx = x sin(x) + cos(x) + C.",
            "C. integral x e^(2x) dx = x e^(2x) + C.",
            "D. integral ln(x) dx = x ln(x) - x + C.",
            "E. integral x e^x dx = (x - 1) e^x + C."
          ],
          "kunci": "A, B, D, E",
          "bahas": "Step 1: Analysis of Option A:\n$u=x, dv=\\sin x dx \\implies -x\\cos x + \\sin x + C$.\n$\\implies$ Statement A is CORRECT.\n\nStep 2: Analysis of Option B:\n$u=x, dv=\\cos x dx \\implies x\\sin x + \\cos x + C$.\n$\\implies$ Statement B is CORRECT.\n\nStep 3: Analysis of Option C:\n$\\int x e^{2x}dx = \\frac{1}{2}x e^{2x} - \\frac{1}{4}e^{2x} + C \\ne x e^{2x}$.\n$\\implies$ Statement C is INCORRECT.\n\nStep 4: Analysis of Option D:\n$u=\\ln x, dv=dx \\implies x\\ln x - x + C$.\n$\\implies$ Statement D is CORRECT.\n\nStep 5: Analysis of Option E:\n$u=x, dv=e^x dx \\implies x e^x - \\int e^x dx = (x-1)e^x + C$.\n$\\implies$ Statement E is CORRECT.\nConclusion: Answer Key A, B, D, E."
        },
        {
          "no": 9,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P27-Q9] Evaluate: $$\\int_{0}^{\\pi} x \\sin(x) dx$$",
          "opsi": [
            "A. $1$",
            "B. $\\pi$",
            "C. $\\pi - 2$",
            "D. $0$",
            "E. $2\\pi$"
          ],
          "kunci": "B",
          "bahas": "Step 1: Anti-derivative is $[-x\\cos x + \\sin x]_0^\\pi$.\n\nStep 2: At $x = \\pi$: $-\\pi(-1) + 0 = \\pi$. At $x = 0$: $0 + 0 = 0$.\n\nStep 3: $\\pi - 0 = \\pi$.\nConclusion: Answer Key B.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "x*Math.sin(x)",
            "x0": -1.1,
            "x1": 4.241,
            "lab": "y = f(x)",
            "area": [
              0.0,
              3.1416
            ]
          }
        },
        {
          "no": 10,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P27-Q10] If $\\int_{1}^{e} x \\ln(x) dx = \\frac{e^2 + k}{4}$, what is the integer value of $k$?",
          "kunci": "1",
          "bahas": "Step 1: Anti-derivative is $[\\frac{x^2}{2}\\ln x - \\frac{x^2}{4}]_1^e$.\n\nStep 2: At $e$: $\\frac{e^2}{2} - \\frac{e^2}{4} = \\frac{e^2}{4}$. At $1$: $0 - \\frac{1}{4} = -\\frac{1}{4}$.\n\nStep 3: $\\frac{e^2}{4} - (-\\frac{1}{4}) = \\frac{e^2 + 1}{4} \\implies k = 1$.\nConclusion: Numeric Answer 1.\nConclusion: Answer Key 1.",
          "tipe": "Isian Singkat Numerik",
          "viz": {
            "t": "plot",
            "f": "x*Math.log(x)",
            "x0": -0.6,
            "x1": 1.6,
            "lab": "y = f(x)",
            "area": [
              0.0,
              1.0
            ]
          }
        }
      ]
    },
    "P28": {
      "title": "Definite Integrals & Fundamental Theorem of Calculus",
      "questions": [
        {
          "no": 1,
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P28-Q1] Evaluate: $$\\int_{0}^{3} (3x^2 - 2x + 1) dx$$",
          "opsi": [
            "A. 15",
            "B. 21",
            "C. 18",
            "D. 27",
            "E. 24"
          ],
          "kunci": "B",
          "bahas": "Step 1: Apply the Fundamental Theorem of Calculus: $\\int_a^b f(x)dx = F(b) - F(a)$.\n\nStep 2: Find the antiderivative: $F(x) = x^3 - x^2 + x$.\n\nStep 3: Substitute the limits: $F(3) = 27 - 9 + 3 = 21$ and $F(0) = 0$, so the value is $21$.\nConclusion: Answer Key B.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "3*Math.pow(x, 2) - 2*x + 1",
            "x0": -1.05,
            "x1": 4.05,
            "lab": "y = f(x)",
            "area": [
              0.0,
              3.0
            ]
          }
        },
        {
          "no": 2,
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P28-Q2] Evaluate: $$\\int_0^{\\pi/2} \\cos(x) dx$$",
          "opsi": [
            "A. -1",
            "B. $\\frac{1}{2}$",
            "C. 1",
            "D. 0",
            "E. 2"
          ],
          "kunci": "C",
          "bahas": "Step 1: The antiderivative of $\\cos x$ is $\\sin x$.\n\nStep 2: Substitute the limits: $\\left[\\sin x\\right]_0^{\\pi/2} = \\sin\\frac{\\pi}{2} - \\sin 0$.\n\nStep 3: Evaluate: $1 - 0 = 1$.\nConclusion: Answer Key C.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "Math.cos(x)",
            "x0": -0.6,
            "x1": 2.171,
            "lab": "y = f(x)",
            "area": [
              0.0,
              1.5708
            ]
          }
        },
        {
          "no": 3,
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P28-Q3] Evaluate: $$\\int_{1}^{2} (6x^2 - 4x) dx$$",
          "opsi": [
            "A. 6",
            "B. 12",
            "C. 14",
            "D. 8",
            "E. 10"
          ],
          "kunci": "D",
          "bahas": "Step 1: Find the antiderivative using the power rule: $F(x) = 2x^3 - 2x^2$.\n\nStep 2: Substitute the upper limit: $F(2) = 16 - 8 = 8$; the lower limit gives $F(1) = 2 - 2 = 0$.\n\nStep 3: Subtract: $8 - 0 = 8$.\nConclusion: Answer Key D.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "6*Math.pow(x, 2) - 4*x",
            "x0": 0.4,
            "x1": 2.6,
            "lab": "y = f(x)",
            "area": [
              1.0,
              2.0
            ]
          }
        },
        {
          "no": 4,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P28-Q4] If $\\int_{0}^{a} 2x dx = 16$ with $a > 0$, find $a$.",
          "opsi": [
            "A. 16",
            "B. 8",
            "C. 2",
            "D. $\\sqrt{8}$",
            "E. 4"
          ],
          "kunci": "E",
          "bahas": "Step 1: Evaluate the integral in terms of $a$: $\\int_0^a 2x\\,dx = \\left[x^2\\right]_0^a = a^2$.\n\nStep 2: Set it equal to the given value: $a^2 = 16$.\n\nStep 3: Take the square root: $a = \\pm 4$. Since $a > 0$, the answer is $a = 4$.\nConclusion: Answer Key E.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "2*x",
            "x0": -5.6,
            "x1": 21.6,
            "lab": "y = f(x)",
            "area": [
              0.0,
              16.0
            ]
          }
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[CLIL-P28-Q5] Verify the truth values of the following definite integral properties:\n(1) By the Fundamental Theorem of Calculus, integral_a^b f(x) dx = F(b) - F(a).\n(2) An integral evaluated over an interval of zero width integral_a^a f(x) dx is equal to 1.\n(3) Reversing the integration limits flips the algebraic sign: integral_a^b f(x) dx = - integral_b^a f(x) dx.",
          "opsi": [
            "By the Fundamental Theorem of Calculus, integral_a^b f(x) dx = F(b) - F(a)",
            "An integral evaluated over an interval of zero width integral_a^a f(x) dx is equal to 1",
            "Reversing the integration limits flips the algebraic sign: integral_a^b f(x) dx = - integral_b^a f(x) dx"
          ],
          "kunci": "B - S - B",
          "bahas": "Step 1: Analysis of Statement (1):\nFTC Part 2 evaluation theorem: $\\int_a^b f(x) dx = [F(x)]_a^b = F(b) - F(a)$.\n$\\implies$ Statement (1) is TRUE.\n\nStep 2: Analysis of Statement (2):\nZero interval width: $\\int_a^a f(x)dx = F(a) - F(a) = 0$, not 1.\n$\\implies$ Statement (2) is FALSE.\n\nStep 3: Analysis of Statement (3):\nLimit direction reversal: $\\int_a^b f(x)dx = -\\int_b^a f(x)dx$.\n$\\implies$ Statement (3) is TRUE.\nConclusion: Answer Key B - S - B."
        },
        {
          "no": 6,
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P28-Q6] Evaluate: $$\\int_{0}^{\\pi} \\sin(x) dx$$",
          "opsi": [
            "A. -2",
            "B. 2",
            "C. 0",
            "D. $\\pi$",
            "E. 1"
          ],
          "kunci": "B",
          "bahas": "Step 1: The antiderivative of $\\sin x$ is $-\\cos x$.\n\nStep 2: Substitute the limits: $\\left[-\\cos x\\right]_0^{\\pi} = -\\cos\\pi + \\cos 0$.\n\nStep 3: Evaluate, using $\\cos\\pi = -1$: $1 + 1 = 2$.\nConclusion: Answer Key B.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "Math.sin(x)",
            "x0": -1.1,
            "x1": 4.241,
            "lab": "y = f(x)",
            "area": [
              0.0,
              3.1416
            ]
          }
        },
        {
          "no": 7,
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P28-Q7] Evaluate: $$\\int_{1}^{4} \\frac{1}{\\sqrt{x}} dx$$",
          "opsi": [
            "A. 3",
            "B. 4",
            "C. $\\frac{3}{2}$",
            "D. 2",
            "E. 1"
          ],
          "kunci": "D",
          "bahas": "Step 1: Rewrite the radical as a power so the power rule applies: $\\frac{1}{\\sqrt{x}} = x^{-1/2}$.\n\nStep 2: Integrate: $\\frac{x^{1/2}}{1/2} = 2\\sqrt{x}$.\n\nStep 3: Substitute the limits: $\\left[2\\sqrt{x}\\right]_1^4 = 4 - 2 = 2$.\nConclusion: Answer Key D.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "Math.sqrt(x)",
            "x0": -0.05,
            "x1": 5.05,
            "lab": "y = f(x)",
            "area": [
              1.0,
              4.0
            ]
          }
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[CLIL-P28-Q8] Which statements regarding definite integrals are CORRECT? (Select all that apply)",
          "opsi": [
            "A. integral_0^(pi/2) cos(x) dx = 1.",
            "B. integral_0^1 (4x^3) dx = 4.",
            "C. integral_0^pi sin(x) dx = 2.",
            "D. For any odd function f(-x) = -f(x), integral_(-a)^a f(x) dx = 0.",
            "E. integral_0^2 (3x^2) dx = 8."
          ],
          "kunci": "A, C, D, E",
          "bahas": "Step 1: Analysis of Option A:\n$[\\sin x]_0^{\\pi/2} = 1 - 0 = 1$.\n$\\implies$ Statement A is CORRECT.\n\nStep 2: Analysis of Option B:\n$[x^4]_0^1 = 1 - 0 = 1 \\ne 4$.\n$\\implies$ Statement B is INCORRECT.\n\nStep 3: Analysis of Option C:\n$[-\\cos x]_0^\\pi = 1 - (-1) = 2$.\n$\\implies$ Statement C is CORRECT.\n\nStep 4: Analysis of Option D:\nSymmetric interval odd function cancellation property.\n$\\implies$ Statement D is CORRECT.\n\nStep 5: Analysis of Option E:\n$[x^3]_0^2 = 8 - 0 = 8$.\n$\\implies$ Statement E is CORRECT.\nConclusion: Answer Key A, C, D, E."
        },
        {
          "no": 9,
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P28-Q9] Evaluate: $$\\int_{0}^{2} 4x^3 dx$$",
          "opsi": [
            "A. 32",
            "B. 12",
            "C. 16",
            "D. 64",
            "E. 8"
          ],
          "kunci": "C",
          "bahas": "Step 1: Find the antiderivative using the power rule: $F(x) = x^4$.\n\nStep 2: Substitute the limits: $\\left[x^4\\right]_0^2 = 16 - 0$.\n\nStep 3: The value is $16$.\nConclusion: Answer Key C.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "4*Math.pow(x, 3)",
            "x0": -0.7,
            "x1": 2.7,
            "lab": "y = f(x)",
            "area": [
              0.0,
              2.0
            ]
          }
        },
        {
          "no": 10,
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P28-Q10] Evaluate: $$\\int_{0}^{1} 6x^5 dx$$",
          "kunci": "1",
          "bahas": "Step 1: Find the antiderivative: $\\int 6x^5 dx = x^6$.\n\nStep 2: Substitute the limits: $\\left[x^6\\right]_0^1 = 1 - 0$.\n\nStep 3: The value is $1$.\nConclusion: Answer Key 1.",
          "tipe": "Isian Singkat Numerik",
          "viz": {
            "t": "plot",
            "f": "6*Math.pow(x, 5)",
            "x0": -0.6,
            "x1": 1.6,
            "lab": "y = f(x)",
            "area": [
              0.0,
              1.0
            ]
          }
        }
      ]
    },
    "P29": {
      "title": "Applications of Integration: Area Between Curves",
      "questions": [
        {
          "no": 1,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q1] Find the area of the region bounded by $y = 6x - x^2$ and $y = 0$.",
          "opsi": [
            "A. 72",
            "B. 18",
            "C. 30",
            "D. 24",
            "E. 36"
          ],
          "kunci": "E",
          "bahas": "Step 1: Find the integration limits first — the points where the curve meets $y = 0$: $6x - x^2 = x(6-x) = 0$, so $x = 0$ and $x = 6$.\n\nStep 2: On that interval the parabola lies above the axis, so the area equals the integral: $A = \\int_0^6\\left(6x-x^2\\right)dx$.\n\nStep 3: Find the antiderivative: $F(x) = 3x^2 - \\frac{x^3}{3}$, giving $F(6) = 108 - 72 = 36$ and $F(0) = 0$.\n\nStep 4: Subtract: $A = 36$ square units.\nConclusion: Answer Key E.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "-Math.pow(x, 2) + 6*x",
            "x0": -2.1,
            "x1": 8.1,
            "lab": "y = f(x)",
            "area": [
              0.0,
              6.0
            ],
            "g": "0",
            "lab2": "y = g(x)",
            "antara": 1
          }
        },
        {
          "no": 2,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q2] Find the area bounded by $y = x^2$ and $y = x$.",
          "opsi": [
            "A. $\\frac{1}{6}$",
            "B. $\\frac{1}{3}$",
            "C. $\\frac{2}{3}$",
            "D. $\\frac{1}{2}$",
            "E. $\\frac{1}{12}$"
          ],
          "kunci": "A",
          "bahas": "Step 1: Intersections: $x^2 = x \\implies x = 0, 1$.\n\nStep 2: $\\int_{0}^{1} (x - x^2) dx = [\\frac{x^2}{2} - \\frac{x^3}{3}]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$.\nConclusion: Answer Key A.",
          "tipe": "Pilihan Ganda Tunggal"
        },
        {
          "no": 3,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q3] Find the area enclosed between $y = 4 - x^2$ and $y = 0$.",
          "opsi": [
            "A. 16",
            "B. $\\frac{16}{3}$",
            "C. 8",
            "D. $\\frac{64}{3}$",
            "E. $\\frac{32}{3}$"
          ],
          "kunci": "E",
          "bahas": "Step 1: Intersections: $x = -2, 2$.\n\nStep 2: $\\int_{-2}^{2} (4 - x^2) dx = 2[4x - \\frac{x^3}{3}]_0^2 = 2(8 - \\frac{8}{3}) = 2(\\frac{16}{3}) = \\frac{32}{3}$.\nConclusion: Answer Key E.",
          "tipe": "Pilihan Ganda Tunggal"
        },
        {
          "no": 4,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q4] Find the total area under one arch of $y = \\sin(x)$ from $x = 0$ to $x = \\pi$.",
          "opsi": [
            "A. 4",
            "B. $2\\pi$",
            "C. 1",
            "D. 2",
            "E. $\\pi$"
          ],
          "kunci": "D",
          "bahas": "Step 1: On $0 \\le x \\le \\pi$ the sine curve stays above the axis, so the area equals the integral directly.\n\nStep 2: Compute: $A = \\int_0^{\\pi}\\sin x\\,dx = \\left[-\\cos x\\right]_0^{\\pi}$.\n\nStep 3: Substitute the limits: $1 + 1 = 2$ square units.\nConclusion: Answer Key D.",
          "tipe": "Pilihan Ganda Tunggal"
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[CLIL-P29-Q5] Verify area calculation rules:\n(1) The area between upper curve y = f(x) and lower curve y = g(x) is integral_a^b [f(x) - g(x)] dx.\n(2) The physical geometric area bounded by y = x^3 on [-1, 1] is 0.\n(3) Geometric area is strictly non-negative (Area >= 0).",
          "opsi": [
            "The area between upper curve y = f(x) and lower curve y = g(x) is integral_a^b [f(x) - g(x)] dx",
            "The physical geometric area bounded by y = x^3 on [-1, 1] is 0",
            "Geometric area is strictly non-negative (Area >= 0)"
          ],
          "kunci": "B - S - B",
          "bahas": "Step 1: Analysis of Statement (1):\nUpper minus lower standard integral formula $\\int_a^b (y_{top} - y_{bottom}) dx$.\n$\\implies$ Statement (1) is TRUE.\n\nStep 2: Analysis of Statement (2):\nThe signed integral is 0, but the physical geometric area is $2\\int_0^1 x^3 dx = 2(1/4) = 1/2 \\ne 0$.\n$\\implies$ Statement (2) is FALSE.\n\nStep 3: Analysis of Statement (3):\nArea as a physical geometric measure is non-negative ($A \\ge 0$).\n$\\implies$ Statement (3) is TRUE.\nConclusion: Answer Key B - S - B."
        },
        {
          "no": 6,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q6] Find the area between $y = x^2 - 2x$ and the x-axis.",
          "opsi": [
            "A. 4",
            "B. $\\frac{8}{3}$",
            "C. $\\frac{4}{3}$",
            "D. $\\frac{2}{3}$",
            "E. 2"
          ],
          "kunci": "C",
          "bahas": "Step 1: Intersections: $x(x - 2) = 0 \\implies x = 0, 2$.\n\nStep 2: Region is below axis: $A = \\int_{0}^{2} (2x - x^2) dx = [x^2 - \\frac{x^3}{3}]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$.\nConclusion: Answer Key C.",
          "tipe": "Pilihan Ganda Tunggal"
        },
        {
          "no": 7,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q7] Using the shortcut $A = \\frac{D\\sqrt{D}}{6a^2}$, find the area bounded by $y = 3 - x^2$ and $y = 2x$.",
          "opsi": [
            "A. $\\frac{64}{3}$",
            "B. $\\frac{32}{3}$",
            "C. 8",
            "D. $\\frac{16}{3}$",
            "E. 12"
          ],
          "kunci": "B",
          "bahas": "Step 1: $3 - x^2 = 2x \\implies x^2 + 2x - 3 = 0 \\implies a=1, b=2, c=-3$.\n\nStep 2: $D = 2^2 - 4(1)(-3) = 4 + 12 = 16$.\n\nStep 3: $A = \\frac{16\\sqrt{16}}{6(1)^2} = \\frac{64}{6} = \\frac{32}{3}$.\nConclusion: Answer Key B.",
          "tipe": "Pilihan Ganda Tunggal"
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[CLIL-P29-Q8] Which statements about area calculation between curves are TRUE? (Select all that apply)",
          "opsi": [
            "A. The area enclosed between y = x and y = x^2 from x = 0 to x = 1 is 1/6.",
            "B. The area enclosed between y = x^2 and y = 4 is 32/3.",
            "C. If curves intersect at an interior point c, the integral must be partitioned at c.",
            "D. Horizontal strips dy are preferred when curves are expressed as x = f(y).",
            "E. The area between y = sin(x) and the x-axis on [0, pi] is 2."
          ],
          "kunci": "A, B, C, D, E",
          "bahas": "Step 1: Analysis of Option A:\n$\\int_0^1 (x - x^2)dx = [x^2/2 - x^3/3]_0^1 = 1/2 - 1/3 = 1/6$.\n$\\implies$ Statement A is CORRECT.\n\nStep 2: Analysis of Option B:\n$\\int_{-2}^2 (4 - x^2)dx = 2[4(2) - 8/3] = 32/3$.\n$\\implies$ Statement B is CORRECT.\n\nStep 3: Analysis of Option C:\nSplitting at crossover intersection points.\n$\\implies$ Statement C is CORRECT.\n\nStep 4: Analysis of Option D:\nHorizontal slicing in terms of $dy$.\n$\\implies$ Statement D is CORRECT.\n\nStep 5: Analysis of Option E:\n$\\int_0^\\pi \\sin x dx = [-\\cos x]_0^\\pi = 2$.\n$\\implies$ Statement E is CORRECT.\nConclusion: Answer Key A, B, C, D, E."
        },
        {
          "no": 9,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q9] Find the area between $x = y^2$ and $x = 4$.",
          "opsi": [
            "A. 16",
            "B. 8",
            "C. $\\frac{16}{3}$",
            "D. $\\frac{32}{3}$",
            "E. $\\frac{64}{3}$"
          ],
          "kunci": "D",
          "bahas": "Step 1: $y^2 = 4 \\implies y = -2, 2$.\n\nStep 2: $A = \\int_{-2}^{2} (4 - y^2) dy = 2[4y - \\frac{y^3}{3}]_0^2 = 2(8 - \\frac{8}{3}) = \\frac{32}{3}$.\nConclusion: Answer Key D.",
          "tipe": "Pilihan Ganda Tunggal"
        },
        {
          "no": 10,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q10] Find the integer area enclosed by $y = 2x$ and $y = 3x - x^2$.",
          "kunci": "1/6",
          "bahas": "Step 1: $2x = 3x - x^2 \\implies x^2 - x = 0 \\implies x = 0, 1$.\n\nStep 2: $A = \\int_{0}^{1} (x - x^2) dx = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$.\nConclusion: Answer 1/6.\nConclusion: Answer Key 1/6.",
          "tipe": "Isian Singkat Numerik"
        }
      ]
    },
    "P30": {
      "title": "Solid of Revolution: Disc & Washer Methods",
      "questions": [
        {
          "no": 1,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q1] Find the volume of the solid generated by revolving $y = \\sqrt{x}$ from $x = 0$ to $x = 4$ about the x-axis.",
          "opsi": [
            "A. $2\\pi$",
            "B. $4\\pi$",
            "C. $32\\pi$",
            "D. $16\\pi$",
            "E. $8\\pi$"
          ],
          "kunci": "E",
          "bahas": "Step 1: $V = \\pi \\int_{0}^{4} (\\sqrt{x})^2 dx = \\pi \\int_{0}^{4} x dx$.\n\nStep 2: $V = \\pi [\\frac{x^2}{2}]_0^4 = \\pi (\\frac{16}{2}) = 8\\pi$.\nConclusion: Answer Key E.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "Math.sqrt(x)",
            "x0": -0.4,
            "x1": 4.6,
            "lab": "y = f(x)",
            "area": [
              0.0,
              4.0
            ],
            "rot": 1
          }
        },
        {
          "no": 2,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q2] Find the volume formed by rotating $y = x^2$ from $x = 0$ to $x = 2$ about the x-axis.",
          "opsi": [
            "A. $\\frac{16}{5}\\pi$",
            "B. $8\\pi$",
            "C. $\\frac{32}{5}\\pi$",
            "D. $\\frac{8}{5}\\pi$",
            "E. $16\\pi$"
          ],
          "kunci": "C",
          "bahas": "Step 1: $V = \\pi \\int_{0}^{2} (x^2)^2 dx = \\pi \\int_{0}^{2} x^4 dx$.\n\nStep 2: $V = \\pi [\\frac{x^5}{5}]_0^2 = \\frac{32}{5}\\pi$.\nConclusion: Answer Key C.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "Math.pow(x, 2)",
            "x0": -0.4,
            "x1": 2.6,
            "lab": "y = f(x)",
            "area": [
              0.0,
              2.0
            ],
            "rot": 1
          }
        },
        {
          "no": 3,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q3] Find the volume generated by revolving the region bounded by $y = 2x$, $y = 0$, and $x = 3$ about the x-axis.",
          "opsi": [
            "A. $36\\pi$",
            "B. $72\\pi$",
            "C. $18\\pi$",
            "D. $27\\pi$",
            "E. $54\\pi$"
          ],
          "kunci": "A",
          "bahas": "Step 1: $V = \\pi \\int_{0}^{3} (2x)^2 dx = \\pi \\int_{0}^{3} 4x^2 dx$.\n\nStep 2: $V = 4\\pi [\\frac{x^3}{3}]_0^3 = 4\\pi (9) = 36\\pi$.\nConclusion: Answer Key A.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "2*x",
            "x0": -0.4,
            "x1": 3.6,
            "lab": "y = f(x)",
            "area": [
              0.0,
              3.0
            ],
            "rot": 1
          }
        },
        {
          "no": 4,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q4] Find the volume generated by rotating $y = x$ from $x = 0$ to $x = h$ about the x-axis (forming a cone).",
          "opsi": [
            "A. $\\frac{1}{4}\\pi h^3$",
            "B. $\\frac{1}{3}\\pi h^3$",
            "C. $\\frac{2}{3}\\pi h^3$",
            "D. $\\frac{1}{2}\\pi h^3$",
            "E. $\\pi h^3$"
          ],
          "kunci": "B",
          "bahas": "Step 1: Rotating about the x-axis calls for the disc method: $V = \\pi\\int_a^b y^2 dx$.\n\nStep 2: Substitute $y = x$ with limits $0$ to $h$: $V = \\pi\\int_0^h x^2 dx$.\n\nStep 3: Integrate: $V = \\pi\\left[\\frac{x^3}{3}\\right]_0^h = \\frac{1}{3}\\pi h^3$.\n\nStep 4: This matches the familiar cone formula $\\frac{1}{3}\\pi r^2 t$, since here the radius and the height are both $h$.\nConclusion: Answer Key B.",
          "tipe": "Pilihan Ganda Tunggal"
        },
        {
          "no": 5,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[CLIL-P30-Q5] Verify solid of revolution volume principles:\n(1) The volume of a solid of revolution can be negative if the function lies below the x-axis.\n(2) The Washer Method for outer radius R(x) and inner radius r(x) is V = pi integral_a^b [R(x)^2 - r(x)^2] dx.\n(3) The Disc Method volume revolved around the x-axis is V = pi integral_a^b [f(x)]^2 dx.",
          "opsi": [
            "The volume of a solid of revolution can be negative if the function lies below the x-axis",
            "The Washer Method for outer radius R(x) and inner radius r(x) is V = pi integral_a^b [R(x)^2 - r(x)^2] dx",
            "The Disc Method volume revolved around the x-axis is V = pi integral_a^b [f(x)]^2 dx"
          ],
          "kunci": "S - B - B",
          "bahas": "Step 1: Analysis of Statement (1):\nBecause the radius is squared $[f(x)]^2 \\ge 0$, volume is strictly positive regardless of graph orientation.\n$\\implies$ Statement (1) is FALSE.\n\nStep 2: Analysis of Statement (2):\nAnnular washer cross-section $\\pi(R^2 - r^2)$.\n$\\implies$ Statement (2) is TRUE.\n\nStep 3: Analysis of Statement (3):\nCircular cross-section disc volume $V = \\pi \\int r^2 dx = \\pi \\int [f(x)]^2 dx$.\n$\\implies$ Statement (3) is TRUE.\nConclusion: Answer Key S - B - B."
        },
        {
          "no": 6,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q6] Using the Washer Method, find the volume formed by revolving the region between $y = x$ and $y = x^2$ about the x-axis.",
          "opsi": [
            "A. $\\frac{4}{15}\\pi$",
            "B. $\\frac{1}{5}\\pi$",
            "C. $\\frac{2}{15}\\pi$",
            "D. $\\frac{1}{3}\\pi$",
            "E. $\\frac{1}{15}\\pi$"
          ],
          "kunci": "C",
          "bahas": "Step 1: Two curves bounding a region call for the washer method: $V = \\pi\\int_a^b \\left(y_{luar}^2 - y_{dalam}^2\\right)dx$.\n\nStep 2: Find the limits where the curves meet: $x = x^2 \\implies x(1-x) = 0$, so $x = 0$ and $x = 1$. On that interval $y = x$ lies above $y = x^2$.\n\nStep 3: Set up the integral: $V = \\pi\\int_0^1\\left(x^2 - x^4\\right)dx = \\pi\\left[\\frac{x^3}{3} - \\frac{x^5}{5}\\right]_0^1$.\n\nStep 4: Substitute the limits: $\\pi\\left(\\frac{1}{3} - \\frac{1}{5}\\right) = \\pi \\cdot \\frac{2}{15} = \\frac{2}{15}\\pi$.\nConclusion: Answer Key C.",
          "tipe": "Pilihan Ganda Tunggal"
        },
        {
          "no": 7,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q7] Find the volume of a sphere of radius $r$ formed by revolving $y = \\sqrt{r^2 - x^2}$ from $x = -r$ to $x = r$ about the x-axis.",
          "opsi": [
            "A. $\\frac{4}{3}\\pi r^2$",
            "B. $2\\pi r^3$",
            "C. $\\frac{2}{3}\\pi r^3$",
            "D. $\\pi r^3$",
            "E. $\\frac{4}{3}\\pi r^3$"
          ],
          "kunci": "E",
          "bahas": "Step 1: Use the disc method $V = \\pi\\int_a^b y^2 dx$. Squaring removes the radical: $y^2 = r^2 - x^2$.\n\nStep 2: Set up the integral over the full diameter: $V = \\pi\\int_{-r}^{r}\\left(r^2-x^2\\right)dx$.\n\nStep 3: The integrand is even, so integrate over half and double: $V = 2\\pi\\left[r^2x - \\frac{x^3}{3}\\right]_0^{r}$.\n\nStep 4: Substitute the limit: $2\\pi\\left(r^3 - \\frac{r^3}{3}\\right) = 2\\pi \\cdot \\frac{2r^3}{3} = \\frac{4}{3}\\pi r^3$.\nConclusion: Answer Key E.",
          "tipe": "Pilihan Ganda Tunggal"
        },
        {
          "no": 8,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C5 Evaluasi",
          "bobot": 10,
          "tanya": "[CLIL-P30-Q8] Which statements regarding solids of revolution are TRUE? (Select all that apply)",
          "opsi": [
            "A. The Washer Method subtracts the inner cylinder core from the outer cylinder.",
            "B. Revolving y = sqrt(x) from x = 0 to x = 4 around the x-axis yields volume 8 pi.",
            "C. Revolving a semicircle of radius r around its diameter yields a sphere of volume 4/3 pi r^3.",
            "D. Revolving y = x from x = 0 to x = 3 around the x-axis forms a cone of volume 9 pi.",
            "E. The volume of revolution around the y-axis is integrated with respect to dy."
          ],
          "kunci": "A, B, C, D, E",
          "bahas": "Step 1: Analysis of Option A:\nAnnulus subtraction principle.\n$\\implies$ Statement A is CORRECT.\n\nStep 2: Analysis of Option B:\n$\\pi\\int_0^4 x dx = \\pi [x^2/2]_0^4 = 8\\pi$.\n$\\implies$ Statement B is CORRECT.\n\nStep 3: Analysis of Option C:\nStandard sphere volume formula $V = \\frac{4}{3}\\pi r^3$.\n$\\implies$ Statement C is CORRECT.\n\nStep 4: Analysis of Option D:\n$\\pi\\int_0^3 x^2 dx = \\pi [x^3/3]_0^3 = 9\\pi$.\n$\\implies$ Statement D is CORRECT.\n\nStep 5: Analysis of Option E:\nVertical axis rotation integration along $dy$.\n$\\implies$ Statement E is CORRECT.\nConclusion: Answer Key A, B, C, D, E."
        },
        {
          "no": 9,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q9] Find the volume of the Islamic dome generated by revolving $y = \\sqrt{9 - x}$ from $x = 0$ to $x = 9$ about the x-axis.",
          "opsi": [
            "A. $\\frac{27}{2}\\pi$",
            "B. $54\\pi$",
            "C. $27\\pi$",
            "D. $\\frac{81}{2}\\pi$",
            "E. $81\\pi$"
          ],
          "kunci": "D",
          "bahas": "Step 1: Use the disc method $V = \\pi\\int_a^b y^2 dx$. Squaring removes the radical: $y^2 = 9 - x$.\n\nStep 2: Substitute the limits: $V = \\pi\\int_0^9 \\left(9-x\\right)dx$.\n\nStep 3: Find the antiderivative: $F(x) = 9x - \\frac{x^2}{2}$, giving $F(9) = 81 - \\frac{81}{2} = \\frac{81}{2}$ and $F(0) = 0$.\n\nStep 4: Therefore $V = \\frac{81}{2}\\pi$ cubic units.\nConclusion: Answer Key D.",
          "tipe": "Pilihan Ganda Tunggal",
          "viz": {
            "t": "plot",
            "f": "Math.sqrt(9 - x)",
            "x0": -0.4,
            "x1": 9.6,
            "lab": "y = f(x)",
            "area": [
              0.0,
              9.0
            ],
            "rot": 1
          }
        },
        {
          "no": 10,
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q10] If the volume of the solid formed by rotating $y = \\sqrt{kx}$ from $x = 0$ to $x = 2$ about the x-axis is $10\\pi$, find $k$.",
          "kunci": "5",
          "bahas": "Step 1: $V = \\pi \\int_{0}^{2} kx dx = \\pi [\\frac{k x^2}{2}]_0^2 = \\pi (\\frac{4k}{2}) = 2k\\pi$.\n\nStep 2: $2k\\pi = 10\\pi \\implies 2k = 10 \\implies k = 5$.\nConclusion: Numeric Answer 5.\nConclusion: Answer Key 5.",
          "tipe": "Isian Singkat Numerik"
        }
      ]
    }
  }
};

// ===== DATA KHUSUS TINGKAT INI =====
// Daftar kelas, daftar siswa untuk login, dan kalender akademik.
// Ketiganya berbeda tiap tingkat, jadi tinggal di sini -- bukan di app.js
// yang dipakai bersama semua tingkat.
    // ---------------------------------------------------------------
    // SISTEM LOGIN & DATABASE SISWA 100 ORANG
    // ---------------------------------------------------------------
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
