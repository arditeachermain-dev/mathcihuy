// ===========================================================================
// DATA KELAS X -- Math Cihuy
// Berkas ini HANYA berisi hal yang berbeda antar tingkat. Kode aplikasi
// (app.js), tampilan (mathcihuy.css), dan pustaka (vendor.js) dipakai bersama
// dengan kelas XI dan XII, sehingga perbaikan cukup dikerjakan sekali.
//
// Kelas X hanya mendapat Matematika Wajib; bank minat dan clil sengaja
// dibiarkan kosong agar bentuknya tetap sama dengan tingkat lain.
//
// DIHASILKAN OLEH materi10/bangun_data_x.py -- JANGAN DISUNTING TANGAN.
// Bab 5 dst. ditulis di materi-x/ dan digabungkan oleh gabung_materi_x.py.
// ===========================================================================
const TINGKAT = 10;
const NAMA_TINGKAT = 'X';

// 1. MATERI & SOAL
// --- MATEMATIKA WAJIB ---
// Bab 1: Eksponen dan Logaritma                        P01-P07 (7 paket)
// Bab 2: Barisan dan Deret                             P08-P13 (6 paket)
// Bab 3: Vektor dan Operasinya                         P14-P19 (6 paket)
// Bab 4: Perbandingan Trigonometri                     P20-P26 (7 paket)
// Bab 5: Sistem Persamaan dan Pertidaksamaan Linear    P27-P32 (6 paket)
// Bab 6: Fungsi Kuadrat                                P33-P38 (6 paket)
// Bab 7: Statistika                                    P39-P44 (6 paket)
// Bab 8: Peluang                                       P45-P48 (4 paket)
const db = {
  "wajib": [
    {
      "id": "P01",
      "bab": "Bab 1: Eksponen dan Logaritma",
      "title": "Bilangan Berpangkat dan Sifat-Sifat Dasarnya",
      "obj": [
        "Menjelaskan arti $a^n$ sebagai perkalian berulang, serta membedakan peran bilangan pokok dan pangkatnya.",
        "Memakai lima sifat dasar pangkat untuk menyederhanakan bentuk seperti $a^m \\cdot a^n$, $a^m : a^n$, dan $(a^m)^n$.",
        "Membedakan $(-2)^4$ dari $-2^4$, dan menjelaskan mengapa keduanya tidak sama."
      ],
      "hook": "Selembar kertas dilipat dua. Sekarang ada $2$ lapis. Dilipat lagi: $4$ lapis. Lagi: $8$ lapis. Kalau bisa dilipat $30$ kali, tebalnya melampaui $100$ km — padahal kertasnya tidak bertambah sehelai pun. Yang meledak bukan jumlah kertasnya, melainkan PANGKATNYA. Bab ini dimulai dari alat untuk menulis dan mengolah bilangan sebesar itu tanpa harus menghitungnya satu-satu.",
      "toolkit": [
        {
          "name": "Arti Pangkat",
          "math": "$$a^n = \\underbrace{a \\times a \\times \\dots \\times a}_{n \\text{ faktor}}$$"
        },
        {
          "name": "Perkalian: Pangkat Dijumlahkan",
          "math": "$$a^m \\cdot a^n = a^{m+n}$$"
        },
        {
          "name": "Pembagian: Pangkat Dikurangkan",
          "math": "$$\\frac{a^m}{a^n} = a^{m-n}$$"
        },
        {
          "name": "Pangkat Berpangkat: Dikalikan",
          "math": "$$(a^m)^n = a^{m \\cdot n}$$"
        },
        {
          "name": "Pangkat Menyebar ke Perkalian",
          "math": "$$(ab)^n = a^n b^n \\quad \\text{dan} \\quad \\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$"
        }
      ],
      "examples": [
        {
          "problem": "Sederhanakan $2^3 \\cdot 2^4$, lalu periksa hasilnya dengan menghitung kedua faktornya lebih dahulu.",
          "solution": "Langkah 1: Bilangan pokoknya sama, yaitu $2$. Karena bentuknya perkalian, pangkatnya dijumlahkan.\n$2^3 \\cdot 2^4 = 2^{3+4} = 2^7$\n\nLangkah 2: Hitung nilainya.\n$2^7 = 128$\n\nLangkah 3: Periksa lewat jalan lain, yaitu menghitung tiap faktornya dahulu.\n$2^3 = 8$ dan $2^4 = 16$\n\nLangkah 4: Kalikan keduanya.\n$8 \\times 16 = 128$ — cocok\n\nLangkah 5: Perhatikan dari mana sifat itu datang. $2^3$ berarti tiga faktor $2$, dan $2^4$ berarti empat faktor $2$; digabung menjadi tujuh faktor $2$. Pangkatnya dijumlahkan karena BANYAK FAKTORNYA yang dijumlahkan.\n\nLangkah 6: Kekeliruan yang sering terjadi adalah mengalikan pangkatnya menjadi $2^{12}$. Nilainya $4096$, jauh dari $128$.\n\nKesimpulan: $2^3 \\cdot 2^4 = 2^7 = 128$."
        },
        {
          "problem": "Sederhanakan $\\dfrac{3^7}{3^4}$ dan jelaskan mengapa pangkatnya dikurangkan.",
          "solution": "Langkah 1: Bilangan pokoknya sama, yaitu $3$. Karena bentuknya pembagian, pangkatnya dikurangkan.\n$\\frac{3^7}{3^4} = 3^{7-4} = 3^3$\n\nLangkah 2: Hitung nilainya.\n$3^3 = 27$\n\nLangkah 3: Periksa dengan menuliskan faktornya apa adanya.\n$\\frac{3 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3}{3 \\cdot 3 \\cdot 3 \\cdot 3}$\n\nLangkah 4: Empat faktor $3$ di bawah menghapus empat faktor $3$ di atas. Yang tersisa tiga faktor $3$.\n$3 \\cdot 3 \\cdot 3 = 27$ — cocok\n\nLangkah 5: Jadi pengurangan pangkat itu bukan aturan hafalan; ia menghitung BERAPA FAKTOR YANG TERSISA setelah saling menghapus.\n\nLangkah 6: Periksa dengan angka besar sekalipun aturannya tetap. $\\frac{3^7}{3^4} = \\frac{2187}{81} = 27$ — cocok.\n\nKesimpulan: $\\frac{3^7}{3^4} = 3^3 = 27$."
        },
        {
          "problem": "Sederhanakan $(2^3)^2$ dan bandingkan dengan $2^3 \\cdot 2^2$. Apakah keduanya sama?",
          "solution": "Langkah 1: Pada pangkat berpangkat, pangkatnya dikalikan.\n$(2^3)^2 = 2^{3 \\times 2} = 2^6 = 64$\n\nLangkah 2: Periksa dengan menghitung isi kurungnya dahulu.\n$2^3 = 8$, lalu $8^2 = 64$ — cocok\n\nLangkah 3: Sekarang hitung yang kedua. Ini perkalian, jadi pangkatnya dijumlahkan.\n$2^3 \\cdot 2^2 = 2^{3+2} = 2^5 = 32$\n\nLangkah 4: Bandingkan. $64 \\neq 32$, jadi keduanya TIDAK sama.\n\nLangkah 5: Bedanya ada pada artinya. $(2^3)^2$ berarti $2^3$ dikalikan dengan dirinya sendiri: $8 \\times 8$. Sedangkan $2^3 \\cdot 2^2$ berarti $8 \\times 4$.\n\nLangkah 6: Inilah sebabnya tanda kurung harus dibaca dengan saksama. Kurung menentukan APA yang dipangkatkan.\n\nKesimpulan: $(2^3)^2 = 64$ sedangkan $2^3 \\cdot 2^2 = 32$; keduanya berbeda."
        },
        {
          "problem": "Hitunglah $(-2)^4$ dan $-2^4$. Mengapa hasilnya berbeda?",
          "solution": "Langkah 1: Pada $(-2)^4$, yang dipangkatkan adalah $-2$ seluruhnya, sebab ia berada di dalam kurung.\n$(-2)^4 = (-2)(-2)(-2)(-2)$\n\nLangkah 2: Kalikan berpasangan. Dua bilangan negatif dikalikan memberi hasil positif.\n$(-2)(-2) = 4$ dan $(-2)(-2) = 4$\n\nLangkah 3: Kalikan hasilnya.\n$4 \\times 4 = 16$, jadi $(-2)^4 = 16$\n\nLangkah 4: Pada $-2^4$ tidak ada kurung. Pangkat dikerjakan LEBIH DAHULU daripada tanda negatif, jadi yang dipangkatkan hanya $2$.\n$-2^4 = -(2^4) = -(16) = -16$\n\nLangkah 5: Bandingkan. $(-2)^4 = 16$ tetapi $-2^4 = -16$; berbeda tanda.\n\nLangkah 6: Aturan umumnya: bilangan negatif berpangkat GENAP memberi hasil positif, berpangkat GANJIL memberi hasil negatif. Periksa: $(-2)^3 = -8$.\n\nLangkah 7: Karena itu ketika menuliskan bilangan negatif berpangkat, kurungnya tidak boleh dilupakan.\n\nKesimpulan: $(-2)^4 = 16$ dan $-2^4 = -16$."
        },
        {
          "problem": "Sederhanakan $\\dfrac{(2a^3)^2 \\cdot a^4}{a^5}$ untuk $a \\neq 0$, lalu periksa dengan $a = 2$.",
          "solution": "Langkah 1: Kerjakan kurungnya dahulu. Pangkat $2$ menyebar ke SETIAP faktor di dalam kurung, termasuk angka $2$ di depan.\n$(2a^3)^2 = 2^2 \\cdot (a^3)^2 = 4a^6$\n\nLangkah 2: Tuliskan kembali seluruh bentuknya.\n$\\frac{4a^6 \\cdot a^4}{a^5}$\n\nLangkah 3: Gabungkan yang di atas. Pangkatnya dijumlahkan.\n$a^6 \\cdot a^4 = a^{10}$, jadi bentuknya $\\frac{4a^{10}}{a^5}$\n\nLangkah 4: Bagi dengan mengurangkan pangkatnya.\n$\\frac{4a^{10}}{a^5} = 4a^{10-5} = 4a^5$\n\nLangkah 5: Periksa dengan $a = 2$. Hitung bentuk ASLINYA lebih dahulu.\n$(2 \\cdot 2^3)^2 = (2 \\cdot 8)^2 = 16^2 = 256$, lalu $\\frac{256 \\cdot 2^4}{2^5} = \\frac{256 \\times 16}{32} = \\frac{4096}{32} = 128$\n\nLangkah 6: Sekarang hitung bentuk hasil penyederhanaannya.\n$4 \\cdot 2^5 = 4 \\times 32 = 128$ — cocok\n\nLangkah 7: Kekeliruan yang paling sering terjadi di Langkah 1 adalah menulis $2a^6$, yakni lupa memangkatkan angka $2$-nya. Dengan $a = 2$ itu memberi $64$, bukan $128$ — jadi kekeliruannya langsung tampak kalau diperiksa dengan angka.\n\nKesimpulan: Bentuknya menjadi $4a^5$."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, tuliskan $2^{10}$ sebagai satu bilangan biasa. Lalu tanpa menghitung ulang dari awal, tentukan $2^{11}$, $2^{20}$, dan $2^{9}$ — masing-masing dengan memanfaatkan $2^{10}$ yang sudah kalian punya, dan tuliskan sifat mana yang kalian pakai untuk setiap soal. Terakhir: apakah $2^{20}$ itu dua kali $2^{10}$? Jelaskan jawaban kalian di papan.",
      "summary_data": {
        "summary": [
          "$a^n$ berarti $a$ dikalikan dengan dirinya sendiri sebanyak $n$ kali; $a$ disebut bilangan pokok dan $n$ pangkatnya.",
          "Pada perkalian dengan pokok yang sama, pangkatnya DIJUMLAHKAN: $a^m \\cdot a^n = a^{m+n}$.",
          "Pada pembagian dengan pokok yang sama, pangkatnya DIKURANGKAN: $\\frac{a^m}{a^n} = a^{m-n}$.",
          "Pada pangkat berpangkat, pangkatnya DIKALIKAN: $(a^m)^n = a^{mn}$.",
          "Pangkat menyebar ke seluruh faktor di dalam kurung: $(ab)^n = a^n b^n$, jadi $(2a^3)^2 = 4a^6$ dan bukan $2a^6$.",
          "$(-2)^4 = 16$ tetapi $-2^4 = -16$; kurungnya menentukan apa yang dipangkatkan.",
          "Bilangan negatif berpangkat genap bernilai positif, berpangkat ganjil bernilai negatif.",
          "Seluruh sifat di atas hanya berlaku bila bilangan pokoknya SAMA; $2^3 \\cdot 3^2$ tidak dapat digabungkan."
        ],
        "islamic": "Ilmu hitung menolong manusia memahami keteraturan ciptaan. \"Dan Dia menciptakan segala sesuatu, lalu menetapkan ukuran-ukurannya dengan tepat.\" (QS. Al-Furqan: 2)"
      },
      "collab_cases": [
        "Sederhanakan $5^4 \\cdot 5^3$ dan tuliskan nilainya.",
        "Sederhanakan $\\frac{7^9}{7^6}$ dan tuliskan nilainya.",
        "Sederhanakan $(3^2)^3$ lalu bandingkan dengan $3^2 \\cdot 3^3$.",
        "Hitunglah $(-3)^3$ dan $-3^2$, lalu jelaskan bedanya.",
        "Sederhanakan $\\frac{(3x^2)^3}{x^4}$ untuk $x \\neq 0$, lalu periksa dengan $x = 2$."
      ]
    },
    {
      "id": "P02",
      "bab": "Bab 1: Eksponen dan Logaritma",
      "title": "Pangkat Nol, Pangkat Bulat Negatif, dan Notasi Ilmiah",
      "obj": [
        "Menurunkan $a^0 = 1$ dan $a^{-n} = \\frac{1}{a^n}$ dari sifat pembagian pangkat, bukan menghafalkannya.",
        "Menghitung bentuk berpangkat negatif, termasuk pangkat negatif pada pecahan seperti $\\left(\\frac{a}{b}\\right)^{-n}$.",
        "Menuliskan bilangan yang sangat besar atau sangat kecil dalam notasi ilmiah $a \\times 10^n$ dengan $1 \\le a < 10$."
      ],
      "hook": "Massa satu elektron kira-kira $0{,}00000000000000000000000000091$ kg. Menulisnya saja sudah menyita satu baris, dan menghitung dengannya hampir mustahil tanpa salah menghitung nol. Pertemuan ini memperkenalkan dua gagasan yang membuat bilangan seperti itu jinak: pangkat negatif, dan notasi ilmiah.",
      "toolkit": [
        {
          "name": "Pangkat Nol",
          "math": "$$a^0 = 1 \\quad (a \\neq 0)$$"
        },
        {
          "name": "Pangkat Negatif",
          "math": "$$a^{-n} = \\frac{1}{a^n} \\quad \\text{dan} \\quad \\frac{1}{a^{-n}} = a^n$$"
        },
        {
          "name": "Pangkat Negatif pada Pecahan",
          "math": "$$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^{n}$$"
        },
        {
          "name": "Notasi Ilmiah",
          "math": "$$N = a \\times 10^n, \\quad 1 \\le a < 10$$"
        },
        {
          "name": "Arah Perpindahan Koma",
          "math": "$$\\text{koma ke kiri} \\Rightarrow n \\text{ positif}, \\quad \\text{ke kanan} \\Rightarrow n \\text{ negatif}$$"
        }
      ],
      "examples": [
        {
          "problem": "Tunjukkan mengapa $5^0 = 1$ dengan memakai sifat pembagian pangkat.",
          "solution": "Langkah 1: Tuliskan pembagian dua pangkat yang SAMA.\n$\\frac{5^3}{5^3}$\n\nLangkah 2: Hitung dengan cara pertama, yaitu langsung. Bilangan apa pun dibagi dirinya sendiri sama dengan $1$.\n$\\frac{125}{125} = 1$\n\nLangkah 3: Hitung dengan cara kedua, yaitu memakai sifat pengurangan pangkat.\n$\\frac{5^3}{5^3} = 5^{3-3} = 5^0$\n\nLangkah 4: Kedua cara menghitung benda yang sama, jadi hasilnya harus sama.\n$5^0 = 1$\n\nLangkah 5: Perhatikan bahwa $a^0 = 1$ bukan aturan yang dikarang; ia HARUS bernilai $1$ supaya sifat pengurangan pangkat tetap berlaku.\n\nLangkah 6: Syaratnya $a \\neq 0$. Bentuk $0^0$ tidak diberi nilai, sebab $\\frac{0^3}{0^3}$ sendiri tidak terdefinisi.\n\nKesimpulan: $5^0 = 1$, dan umumnya $a^0 = 1$ untuk $a \\neq 0$."
        },
        {
          "problem": "Tunjukkan mengapa $2^{-3} = \\frac{1}{8}$, lalu hitung $3^{-2}$.",
          "solution": "Langkah 1: Tuliskan pembagian yang penyebutnya berpangkat lebih besar.\n$\\frac{2^2}{2^5}$\n\nLangkah 2: Hitung dengan cara pertama, yaitu mencoret faktor yang sama.\n$\\frac{2 \\cdot 2}{2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2} = \\frac{1}{2^3} = \\frac{1}{8}$\n\nLangkah 3: Hitung dengan cara kedua, yaitu sifat pengurangan pangkat.\n$\\frac{2^2}{2^5} = 2^{2-5} = 2^{-3}$\n\nLangkah 4: Karena keduanya benda yang sama, maka:\n$2^{-3} = \\frac{1}{8}$\n\nLangkah 5: Jadi pangkat negatif berarti KEBALIKAN, bukan bilangan negatif. Nilai $2^{-3}$ tetap positif.\n\nLangkah 6: Terapkan pada $3^{-2}$.\n$3^{-2} = \\frac{1}{3^2} = \\frac{1}{9}$\n\nLangkah 7: Kekeliruan yang paling sering terjadi adalah menulis $3^{-2} = -9$. Periksa saja: $\\frac{1}{9}$ bernilai kurang dari $1$, sedangkan $-9$ negatif — keduanya jelas berbeda.\n\nKesimpulan: $2^{-3} = \\frac{1}{8}$ dan $3^{-2} = \\frac{1}{9}$."
        },
        {
          "problem": "Hitunglah $\\left(\\dfrac{2}{3}\\right)^{-3}$.",
          "solution": "Langkah 1: Pakai arti pangkat negatif, yaitu kebalikan.\n$\\left(\\frac{2}{3}\\right)^{-3} = \\frac{1}{\\left(\\frac{2}{3}\\right)^{3}}$\n\nLangkah 2: Hitung pangkat tiga pecahannya. Pangkat menyebar ke pembilang dan penyebut.\n$\\left(\\frac{2}{3}\\right)^{3} = \\frac{2^3}{3^3} = \\frac{8}{27}$\n\nLangkah 3: Ambil kebalikannya.\n$\\frac{1}{\\frac{8}{27}} = \\frac{27}{8}$\n\nLangkah 4: Periksa dengan jalan pintas yang setara, yaitu membalik pecahannya lebih dahulu.\n$\\left(\\frac{2}{3}\\right)^{-3} = \\left(\\frac{3}{2}\\right)^{3} = \\frac{27}{8}$ — cocok\n\nLangkah 5: Perhatikan kemasukakalannya. Pecahan $\\frac{2}{3}$ kurang dari $1$, jadi pangkat negatifnya harus LEBIH dari $1$. Nilai $\\frac{27}{8} = 3{,}375$ memang demikian.\n\nLangkah 6: Kekeliruan yang sering terjadi adalah menjawab $\\frac{8}{27}$, yakni lupa bahwa pangkatnya negatif.\n\nKesimpulan: $\\left(\\frac{2}{3}\\right)^{-3} = \\frac{27}{8}$."
        },
        {
          "problem": "Tuliskan $0{,}00072$ dan $6\\,720\\,000$ dalam notasi ilmiah.",
          "solution": "Langkah 1: Ingat syaratnya. Bentuknya $a \\times 10^n$ dengan $1 \\le a < 10$, jadi tepat satu angka bukan nol di depan koma.\n\nLangkah 2: Kerjakan $0{,}00072$. Geser komanya ke KANAN sampai bertemu angka $7$.\n$0{,}00072 \\to 7{,}2$ setelah koma digeser $4$ tempat\n\nLangkah 3: Koma digeser ke kanan berarti bilangannya diperbesar, jadi harus dikecilkan kembali dengan pangkat NEGATIF.\n$0{,}00072 = 7{,}2 \\times 10^{-4}$\n\nLangkah 4: Periksa. $7{,}2 \\times 10^{-4} = \\frac{7{,}2}{10000} = 0{,}00072$ — cocok\n\nLangkah 5: Kerjakan $6\\,720\\,000$. Geser komanya ke KIRI sampai tinggal satu angka di depan koma.\n$6\\,720\\,000 \\to 6{,}72$ setelah koma digeser $6$ tempat\n\nLangkah 6: Koma digeser ke kiri berarti bilangannya dikecilkan, jadi harus diperbesar kembali dengan pangkat POSITIF.\n$6\\,720\\,000 = 6{,}72 \\times 10^{6}$\n\nLangkah 7: Periksa. $6{,}72 \\times 1000000 = 6\\,720\\,000$ — cocok\n\nKesimpulan: $0{,}00072 = 7{,}2 \\times 10^{-4}$ dan $6\\,720\\,000 = 6{,}72 \\times 10^{6}$."
        },
        {
          "problem": "Sederhanakan $\\dfrac{2^{-3} \\cdot 8^{2}}{4^{-1}}$.",
          "solution": "Langkah 1: Sifat pangkat menuntut pokok yang sama, jadi ubah semuanya menjadi pokok $2$.\n$8 = 2^3$ dan $4 = 2^2$\n\nLangkah 2: Tulis ulang tiap bagiannya.\n$8^2 = (2^3)^2 = 2^6$ dan $4^{-1} = (2^2)^{-1} = 2^{-2}$\n\nLangkah 3: Susun kembali bentuknya.\n$\\frac{2^{-3} \\cdot 2^{6}}{2^{-2}}$\n\nLangkah 4: Jumlahkan pangkat di pembilang.\n$2^{-3+6} = 2^{3}$, jadi bentuknya $\\frac{2^3}{2^{-2}}$\n\nLangkah 5: Kurangkan pangkatnya. Perhatikan bahwa yang dikurangkan bilangan negatif.\n$2^{3-(-2)} = 2^{3+2} = 2^5 = 32$\n\nLangkah 6: Periksa dengan angka apa adanya.\n$\\frac{\\frac{1}{8} \\times 64}{\\frac{1}{4}} = \\frac{8}{\\frac{1}{4}} = 8 \\times 4 = 32$ — cocok\n\nLangkah 7: Kekeliruan yang paling sering terjadi di Langkah 5 adalah menulis $2^{3-2} = 2$, yakni lupa bahwa mengurangi $-2$ berarti menambah $2$.\n\nKesimpulan: $\\frac{2^{-3} \\cdot 8^{2}}{4^{-1}} = 32$."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, susun daftar nilai $2^4, 2^3, 2^2, 2^1$ — lalu LANJUTKAN daftarnya ke bawah sampai $2^{-3}$ tanpa memakai rumus pangkat negatif sama sekali. Perhatikan pola apa yang terjadi pada nilainya setiap kali pangkatnya turun satu, dan pakai pola itu untuk menebak $2^0$ dan $2^{-1}$. Terakhir: tuliskan di papan mengapa pola itu MEMAKSA $2^0 = 1$, bukan sekadar menyarankannya.",
      "summary_data": {
        "summary": [
          "$a^0 = 1$ untuk setiap $a \\neq 0$; nilainya harus $1$ agar sifat $\\frac{a^m}{a^n} = a^{m-n}$ tetap berlaku ketika $m = n$.",
          "$a^{-n} = \\frac{1}{a^n}$; pangkat negatif berarti KEBALIKAN, bukan bilangan negatif, sehingga $3^{-2} = \\frac{1}{9}$ dan bukan $-9$.",
          "$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^{n}$; pecahannya cukup dibalik lalu dipangkatkan positif.",
          "Mengurangkan pangkat negatif berarti menambah: $\\frac{a^3}{a^{-2}} = a^{3+2} = a^5$.",
          "Notasi ilmiah berbentuk $a \\times 10^n$ dengan $1 \\le a < 10$, jadi tepat satu angka bukan nol di depan koma.",
          "Koma digeser ke kanan memberi pangkat negatif; digeser ke kiri memberi pangkat positif.",
          "Seluruh sifat pangkat pada pertemuan sebelumnya tetap berlaku untuk pangkat nol dan negatif."
        ],
        "islamic": "Yang sangat besar dan yang sangat kecil sama-sama terukur. \"Tidak ada yang tersembunyi dari-Nya sekalipun sebesar zarrah di langit maupun di bumi.\" (QS. Saba': 3)"
      },
      "collab_cases": [
        "Hitunglah $7^0 + 4^{-1}$.",
        "Hitunglah $\\left(\\frac{3}{5}\\right)^{-2}$.",
        "Sederhanakan $\\frac{5^{-2} \\cdot 5^{6}}{5^{3}}$.",
        "Tuliskan $0{,}00045$ dan $38\\,500\\,000$ dalam notasi ilmiah.",
        "Sederhanakan $\\frac{3^{-2} \\cdot 27}{9^{-1}}$."
      ]
    },
    {
      "id": "P03",
      "bab": "Bab 1: Eksponen dan Logaritma",
      "title": "Bentuk Akar dan Pangkat Rasional",
      "obj": [
        "Menjelaskan $\\sqrt[n]{a}$ sebagai bilangan yang bila dipangkatkan $n$ menghasilkan $a$, serta menyederhanakan bentuk akar dengan faktor kuadrat sempurna.",
        "Mengubah bentuk akar menjadi pangkat rasional dan sebaliknya, memakai $a^{m/n} = \\sqrt[n]{a^m}$.",
        "Menjumlahkan dan mengurangkan bentuk akar yang sejenis, serta menjelaskan mengapa $\\sqrt{a} + \\sqrt{b} \\neq \\sqrt{a+b}$."
      ],
      "hook": "Sisi sebuah persegi yang luasnya $72$ cm$^2$ panjangnya $\\sqrt{72}$ cm. Kalkulator menjawab $8{,}485281374\\dots$ — angka yang tidak pernah berhenti dan tidak pernah berpola. Namun bentuk yang sama dapat dituliskan dengan tepat sebagai $6\\sqrt{2}$: pendek, eksak, dan mudah dihitung lebih lanjut. Pertemuan ini tentang cara membaca dan merapikan bilangan semacam itu.",
      "toolkit": [
        {
          "name": "Arti Akar Pangkat n",
          "math": "$$\\sqrt[n]{a} = b \\iff b^n = a$$"
        },
        {
          "name": "Akar Menyebar ke Perkalian",
          "math": "$$\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b} \\quad (a, b \\ge 0)$$"
        },
        {
          "name": "Pangkat Rasional",
          "math": "$$a^{\\frac{m}{n}} = \\sqrt[n]{a^{m}} = \\left(\\sqrt[n]{a}\\right)^{m}$$"
        },
        {
          "name": "Akar Sejenis Dijumlahkan",
          "math": "$$p\\sqrt{a} + q\\sqrt{a} = (p+q)\\sqrt{a}$$"
        },
        {
          "name": "Yang TIDAK Berlaku",
          "math": "$$\\sqrt{a} + \\sqrt{b} \\neq \\sqrt{a+b}$$"
        }
      ],
      "examples": [
        {
          "problem": "Sederhanakan $\\sqrt{72}$.",
          "solution": "Langkah 1: Cari faktor $72$ yang berupa kuadrat sempurna, dan ambil yang TERBESAR.\nKuadrat sempurna yang membagi $72$: $4$, $9$, dan $36$. Yang terbesar $36$.\n\nLangkah 2: Tuliskan $72$ sebagai perkalian faktor itu dengan sisanya.\n$72 = 36 \\times 2$\n\nLangkah 3: Pakai sifat akar menyebar ke perkalian.\n$\\sqrt{72} = \\sqrt{36} \\times \\sqrt{2}$\n\nLangkah 4: Akar kuadrat sempurnanya dapat dihitung tepat.\n$\\sqrt{36} = 6$, jadi $\\sqrt{72} = 6\\sqrt{2}$\n\nLangkah 5: Periksa dengan memangkatkan kembali.\n$(6\\sqrt{2})^2 = 36 \\times 2 = 72$ — cocok\n\nLangkah 6: Perhatikan mengapa faktor TERBESAR yang dipilih. Kalau dipakai $4$, hasilnya $2\\sqrt{18}$, yang masih dapat disederhanakan lagi karena $18 = 9 \\times 2$.\n\nKesimpulan: $\\sqrt{72} = 6\\sqrt{2}$."
        },
        {
          "problem": "Hitunglah $8^{\\frac{2}{3}}$ dengan dua cara, lalu bandingkan mana yang lebih ringan.",
          "solution": "Langkah 1: Ingat artinya. Penyebut pangkatnya menjadi indeks akar, pembilangnya menjadi pangkat.\n$8^{\\frac{2}{3}} = \\sqrt[3]{8^{2}} = \\left(\\sqrt[3]{8}\\right)^{2}$\n\nLangkah 2: Cara pertama, pangkatkan dahulu.\n$8^2 = 64$, lalu $\\sqrt[3]{64} = 4$ sebab $4^3 = 64$\n\nLangkah 3: Cara kedua, akarkan dahulu.\n$\\sqrt[3]{8} = 2$ sebab $2^3 = 8$, lalu $2^2 = 4$\n\nLangkah 4: Kedua cara memberi $4$, jadi keduanya sah.\n\nLangkah 5: Bandingkan bebannya. Cara kedua jauh lebih ringan, sebab angkanya tetap kecil; cara pertama sempat melewati $64$.\n\nLangkah 6: Karena itu, pada soal seperti $32^{\\frac{3}{5}}$ lebih baik diakarkan dahulu: $\\sqrt[5]{32} = 2$, lalu $2^3 = 8$. Kalau dipangkatkan dahulu, angkanya menjadi $32^3 = 32768$.\n\nKesimpulan: $8^{\\frac{2}{3}} = 4$, dan akarkan-dahulu lebih ringan."
        },
        {
          "problem": "Sederhanakan $\\sqrt{50} + \\sqrt{18} - \\sqrt{8}$.",
          "solution": "Langkah 1: Akar hanya dapat dijumlahkan bila SEJENIS, yaitu akarnya sama. Jadi sederhanakan setiap suku dahulu.\n\nLangkah 2: Kerjakan suku pertama.\n$\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$\n\nLangkah 3: Kerjakan suku kedua.\n$\\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2}$\n\nLangkah 4: Kerjakan suku ketiga.\n$\\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}$\n\nLangkah 5: Ketiganya kini sejenis, semuanya $\\sqrt{2}$. Jumlahkan koefisiennya saja.\n$5\\sqrt{2} + 3\\sqrt{2} - 2\\sqrt{2} = (5 + 3 - 2)\\sqrt{2} = 6\\sqrt{2}$\n\nLangkah 6: Periksa dengan desimal. $\\sqrt{50} \\approx 7{,}071$, $\\sqrt{18} \\approx 4{,}243$, $\\sqrt{8} \\approx 2{,}828$, sehingga hasilnya $\\approx 8{,}486$. Sementara $6\\sqrt{2} \\approx 8{,}485$ — cocok.\n\nLangkah 7: Perhatikan bahwa menjumlahkan isi akarnya keliru: $\\sqrt{50+18} = \\sqrt{68} \\approx 8{,}246$, berbeda dari jawabannya.\n\nKesimpulan: $\\sqrt{50} + \\sqrt{18} - \\sqrt{8} = 6\\sqrt{2}$."
        },
        {
          "problem": "Hitunglah $\\left(\\dfrac{16}{81}\\right)^{-\\frac{3}{4}}$.",
          "solution": "Langkah 1: Kerjakan tanda negatifnya dahulu dengan membalik pecahannya.\n$\\left(\\frac{16}{81}\\right)^{-\\frac{3}{4}} = \\left(\\frac{81}{16}\\right)^{\\frac{3}{4}}$\n\nLangkah 2: Pangkat rasionalnya diakarkan dahulu, sebab angkanya jadi lebih kecil. Indeks akarnya $4$.\n$\\sqrt[4]{81} = 3$ sebab $3^4 = 81$, dan $\\sqrt[4]{16} = 2$ sebab $2^4 = 16$\n\nLangkah 3: Jadi akar pangkat empat pecahannya adalah $\\frac{3}{2}$.\n$\\left(\\frac{81}{16}\\right)^{\\frac{1}{4}} = \\frac{3}{2}$\n\nLangkah 4: Sekarang pangkatkan tiga.\n$\\left(\\frac{3}{2}\\right)^{3} = \\frac{27}{8}$\n\nLangkah 5: Periksa kemasukakalannya. Pecahan $\\frac{16}{81}$ kurang dari $1$, jadi pangkat negatifnya harus lebih dari $1$. Nilai $\\frac{27}{8} = 3{,}375$ memang demikian.\n\nLangkah 6: Kekeliruan yang sering terjadi adalah lupa membalik pecahannya, sehingga jawabannya menjadi $\\frac{8}{27}$ — justru kebalikan dari yang benar.\n\nKesimpulan: $\\left(\\frac{16}{81}\\right)^{-\\frac{3}{4}} = \\frac{27}{8}$."
        },
        {
          "problem": "Hitunglah $\\sqrt[3]{-27} + \\sqrt{49}$, lalu jelaskan mengapa $\\sqrt{-49}$ tidak dibahas di kelas X.",
          "solution": "Langkah 1: Kerjakan suku pertama. Cari bilangan yang bila dipangkatkan tiga menghasilkan $-27$.\n$(-3)^3 = -27$, jadi $\\sqrt[3]{-27} = -3$\n\nLangkah 2: Kerjakan suku kedua.\n$7^2 = 49$, jadi $\\sqrt{49} = 7$\n\nLangkah 3: Jumlahkan keduanya.\n$-3 + 7 = 4$\n\nLangkah 4: Sekarang perhatikan bedanya dengan $\\sqrt{-49}$. Yang dicari adalah bilangan yang dipangkatkan DUA menghasilkan $-49$.\n\nLangkah 5: Bilangan positif dipangkatkan dua memberi hasil positif; bilangan negatif dipangkatkan dua juga memberi hasil positif. Tidak ada bilangan real yang memberi $-49$.\n\nLangkah 6: Jadi akar berindeks GANJIL boleh memuat bilangan negatif, sedangkan akar berindeks GENAP tidak — dalam himpunan bilangan real.\n\nLangkah 7: Bentuk seperti $\\sqrt{-49}$ baru diberi makna di kelas XI, lewat bilangan imajiner.\n\nKesimpulan: $\\sqrt[3]{-27} + \\sqrt{49} = 4$, sedangkan $\\sqrt{-49}$ tidak bernilai real."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, hitunglah $\\sqrt{9} + \\sqrt{16}$ dan $\\sqrt{9 + 16}$ — keduanya, lalu bandingkan. Setelah itu carilah SATU pasang bilangan $a$ dan $b$ (keduanya positif) yang membuat $\\sqrt{a} + \\sqrt{b}$ dan $\\sqrt{a+b}$ bernilai sama, atau tuliskan alasan mengapa pasangan seperti itu tidak mungkin ada. Jawaban kalian harus disertai perhitungan, bukan hanya pernyataan.",
      "summary_data": {
        "summary": [
          "$\\sqrt[n]{a} = b$ berarti $b^n = a$; akar adalah kebalikan dari pemangkatan.",
          "Bentuk akar disederhanakan dengan memisahkan faktor kuadrat sempurna TERBESAR, misalnya $\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}$.",
          "$a^{\\frac{m}{n}} = \\sqrt[n]{a^{m}} = \\left(\\sqrt[n]{a}\\right)^{m}$; penyebut pangkat menjadi indeks akar.",
          "Mengakarkan dahulu biasanya lebih ringan daripada memangkatkan dahulu: $32^{\\frac{3}{5}}$ lebih mudah lewat $\\sqrt[5]{32} = 2$.",
          "Hanya akar SEJENIS yang dapat dijumlahkan, dan yang dijumlahkan koefisiennya: $5\\sqrt{2} + 3\\sqrt{2} = 8\\sqrt{2}$.",
          "$\\sqrt{a} + \\sqrt{b} \\neq \\sqrt{a+b}$; periksa saja dengan $a = 9$ dan $b = 16$.",
          "Akar berindeks ganjil boleh memuat bilangan negatif ($\\sqrt[3]{-27} = -3$), akar berindeks genap tidak.",
          "Pangkat negatif pada pecahan tetap dikerjakan dengan membalik pecahannya lebih dahulu."
        ],
        "islamic": "Ukuran yang tepat lebih utama daripada perkiraan yang tergesa. \"Dan sempurnakanlah takaran dan timbangan dengan adil.\" (QS. Al-An'am: 152)"
      },
      "collab_cases": [
        "Sederhanakan $\\sqrt{200}$.",
        "Hitunglah $27^{\\frac{2}{3}}$ dengan cara akarkan-dahulu.",
        "Sederhanakan $\\sqrt{75} + \\sqrt{12}$.",
        "Hitunglah $\\left(\\frac{4}{9}\\right)^{-\\frac{3}{2}}$.",
        "Hitunglah $\\sqrt[3]{-8} + \\sqrt{36}$."
      ]
    },
    {
      "id": "P04",
      "bab": "Bab 1: Eksponen dan Logaritma",
      "title": "Operasi Bentuk Akar dan Merasionalkan Penyebut",
      "obj": [
        "Mengalikan bentuk akar, termasuk memakai $(a+b)(a-b) = a^2 - b^2$ untuk pasangan sekawan.",
        "Merasionalkan penyebut berbentuk $\\sqrt{b}$ maupun $a \\pm b\\sqrt{c}$ dengan mengalikan sekawannya.",
        "Menjelaskan mengapa mengalikan pembilang DAN penyebut dengan bilangan yang sama tidak mengubah nilai pecahannya."
      ],
      "hook": "Manakah yang lebih mudah dihitung tanpa kalkulator: $\\frac{6}{\\sqrt{3}}$ atau $2\\sqrt{3}$? Keduanya bilangan yang SAMA. Tetapi yang pertama menuntut pembagian dengan $1{,}732\\dots$, sedangkan yang kedua hanya perkalian. Merasionalkan penyebut bukan soal kerapian belaka — ia memindahkan bagian yang sukar dari penyebut ke pembilang, tempat ia jauh lebih mudah diurus.",
      "toolkit": [
        {
          "name": "Penyebut Berupa Akar Tunggal",
          "math": "$$\\frac{p}{\\sqrt{b}} = \\frac{p}{\\sqrt{b}} \\cdot \\frac{\\sqrt{b}}{\\sqrt{b}} = \\frac{p\\sqrt{b}}{b}$$"
        },
        {
          "name": "Pasangan Sekawan",
          "math": "$$(a + b\\sqrt{c})(a - b\\sqrt{c}) = a^2 - b^2 c$$"
        },
        {
          "name": "Penyebut Dua Suku",
          "math": "$$\\frac{p}{a + b\\sqrt{c}} = \\frac{p(a - b\\sqrt{c})}{a^2 - b^2 c}$$"
        },
        {
          "name": "Kuadrat Dua Suku Berakar",
          "math": "$$(\\sqrt{m} + \\sqrt{n})^2 = m + n + 2\\sqrt{mn}$$"
        },
        {
          "name": "Mengapa Sah",
          "math": "$$\\frac{p}{q} = \\frac{p}{q} \\cdot \\frac{k}{k} \\quad (k \\neq 0)$$"
        }
      ],
      "examples": [
        {
          "problem": "Rasionalkan penyebut $\\dfrac{6}{\\sqrt{3}}$.",
          "solution": "Langkah 1: Yang mengganggu adalah akar di penyebut. Kalikan pembilang DAN penyebut dengan $\\sqrt{3}$.\n$\\frac{6}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}}$\n\nLangkah 2: Perhatikan bahwa langkah itu sah. Yang dikalikan adalah $\\frac{\\sqrt{3}}{\\sqrt{3}} = 1$, dan mengalikan dengan $1$ tidak mengubah nilai.\n\nLangkah 3: Kerjakan penyebutnya. Akar dikalikan dirinya sendiri menghilangkan akarnya.\n$\\sqrt{3} \\cdot \\sqrt{3} = 3$\n\nLangkah 4: Kerjakan pembilangnya.\n$6 \\cdot \\sqrt{3} = 6\\sqrt{3}$\n\nLangkah 5: Susun lalu sederhanakan.\n$\\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$\n\nLangkah 6: Periksa dengan desimal. $\\frac{6}{1{,}732} \\approx 3{,}464$, dan $2 \\times 1{,}732 = 3{,}464$ — cocok.\n\nKesimpulan: $\\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$."
        },
        {
          "problem": "Hitunglah $(2 + \\sqrt{3})(2 - \\sqrt{3})$ dan jelaskan mengapa hasilnya tidak memuat akar.",
          "solution": "Langkah 1: Bentuknya adalah pasangan sekawan, yaitu dua suku yang hanya berbeda tandanya. Pakai $(a+b)(a-b) = a^2 - b^2$.\n$a = 2$ dan $b = \\sqrt{3}$\n\nLangkah 2: Masukkan ke rumusnya.\n$(2)^2 - (\\sqrt{3})^2$\n\nLangkah 3: Hitung tiap kuadratnya. Kuadrat dari akar menghapus akarnya.\n$4 - 3 = 1$\n\nLangkah 4: Periksa dengan menjabarkan seluruhnya.\n$4 - 2\\sqrt{3} + 2\\sqrt{3} - 3 = 4 - 3 = 1$ — cocok\n\nLangkah 5: Perhatikan Langkah 4 dengan saksama. Kedua suku tengahnya, $-2\\sqrt{3}$ dan $+2\\sqrt{3}$, saling menghapus. Justru itulah gunanya sekawan.\n\nLangkah 6: Inilah alasan sekawan dipakai untuk merasionalkan: ia menjamin akarnya hilang dari penyebut.\n\nKesimpulan: $(2+\\sqrt{3})(2-\\sqrt{3}) = 1$."
        },
        {
          "problem": "Rasionalkan penyebut $\\dfrac{4}{3 + \\sqrt{2}}$.",
          "solution": "Langkah 1: Penyebutnya dua suku, jadi kalikan dengan SEKAWANNYA, yaitu $3 - \\sqrt{2}$.\n$\\frac{4}{3+\\sqrt{2}} \\cdot \\frac{3-\\sqrt{2}}{3-\\sqrt{2}}$\n\nLangkah 2: Kerjakan penyebutnya dengan rumus selisih kuadrat.\n$(3)^2 - (\\sqrt{2})^2 = 9 - 2 = 7$\n\nLangkah 3: Kerjakan pembilangnya.\n$4(3 - \\sqrt{2}) = 12 - 4\\sqrt{2}$\n\nLangkah 4: Susun hasilnya.\n$\\frac{12 - 4\\sqrt{2}}{7}$\n\nLangkah 5: Periksa apakah masih dapat disederhanakan. Pembilangnya punya faktor $4$, tetapi $7$ tidak — jadi bentuk ini sudah paling sederhana.\n\nLangkah 6: Periksa dengan desimal. $\\frac{4}{3+1{,}414} = \\frac{4}{4{,}414} \\approx 0{,}906$, dan $\\frac{12 - 5{,}657}{7} = \\frac{6{,}343}{7} \\approx 0{,}906$ — cocok.\n\nLangkah 7: Perhatikan tanda pada pembilangnya. Kekeliruan yang sering terjadi adalah menulis $12 + 4\\sqrt{2}$, yaitu memakai sekawan yang salah.\n\nKesimpulan: $\\frac{4}{3+\\sqrt{2}} = \\frac{12 - 4\\sqrt{2}}{7}$."
        },
        {
          "problem": "Rasionalkan penyebut $\\dfrac{10}{5 + 2\\sqrt{3}}$.",
          "solution": "Langkah 1: Sekawan dari $5 + 2\\sqrt{3}$ adalah $5 - 2\\sqrt{3}$. Hanya tandanya yang diubah; angka $2$ tetap ikut.\n$\\frac{10}{5+2\\sqrt{3}} \\cdot \\frac{5-2\\sqrt{3}}{5-2\\sqrt{3}}$\n\nLangkah 2: Kerjakan penyebutnya. Perhatikan bahwa yang dikuadratkan adalah $2\\sqrt{3}$ seluruhnya.\n$(5)^2 - (2\\sqrt{3})^2 = 25 - 4 \\times 3 = 25 - 12 = 13$\n\nLangkah 3: Kerjakan pembilangnya.\n$10(5 - 2\\sqrt{3}) = 50 - 20\\sqrt{3}$\n\nLangkah 4: Susun hasilnya.\n$\\frac{50 - 20\\sqrt{3}}{13}$\n\nLangkah 5: Periksa dengan desimal. $\\frac{10}{5+3{,}464} = \\frac{10}{8{,}464} \\approx 1{,}181$, dan $\\frac{50 - 34{,}64}{13} = \\frac{15{,}36}{13} \\approx 1{,}182$ — cocok.\n\nLangkah 6: Kekeliruan yang paling sering terjadi ada di Langkah 2: menulis $25 - 2 \\times 3 = 19$, yaitu lupa mengkuadratkan angka $2$-nya juga.\n\nKesimpulan: $\\frac{10}{5+2\\sqrt{3}} = \\frac{50 - 20\\sqrt{3}}{13}$."
        },
        {
          "problem": "Hitunglah $(\\sqrt{5} + \\sqrt{2})^2$.",
          "solution": "Langkah 1: Ini kuadrat jumlah, jadi pakai $(a+b)^2 = a^2 + 2ab + b^2$. Jangan dikira $a^2 + b^2$.\n$a = \\sqrt{5}$ dan $b = \\sqrt{2}$\n\nLangkah 2: Hitung $a^2$ dan $b^2$. Kuadrat menghapus akarnya.\n$(\\sqrt{5})^2 = 5$ dan $(\\sqrt{2})^2 = 2$\n\nLangkah 3: Hitung suku tengahnya.\n$2 \\cdot \\sqrt{5} \\cdot \\sqrt{2} = 2\\sqrt{10}$\n\nLangkah 4: Jumlahkan seluruhnya.\n$5 + 2 + 2\\sqrt{10} = 7 + 2\\sqrt{10}$\n\nLangkah 5: Periksa dengan desimal. $(\\sqrt{5}+\\sqrt{2})^2 = (2{,}236 + 1{,}414)^2 = 3{,}650^2 \\approx 13{,}32$, dan $7 + 2 \\times 3{,}162 = 13{,}32$ — cocok.\n\nLangkah 6: Perhatikan bahwa suku tengahnya TIDAK dapat digabung dengan $7$, sebab $2\\sqrt{10}$ bukan bilangan bulat. Jadi bentuk ini sudah selesai.\n\nLangkah 7: Kekeliruan yang sering terjadi adalah menjawab $7$, yaitu melupakan suku tengahnya sama sekali.\n\nKesimpulan: $(\\sqrt{5}+\\sqrt{2})^2 = 7 + 2\\sqrt{10}$."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, rasionalkan $\\frac{1}{\\sqrt{2}+1}$. Lalu rasionalkan $\\frac{1}{\\sqrt{3}+\\sqrt{2}}$ dan $\\frac{1}{\\sqrt{4}+\\sqrt{3}}$. Tuliskan ketiga hasilnya berurutan, dan jumlahkan ketiganya. Apa yang kalian dapati? Jelaskan di papan mengapa hasil penjumlahannya menjadi sesederhana itu.",
      "summary_data": {
        "summary": [
          "Merasionalkan penyebut berarti memindahkan akar dari penyebut ke pembilang, tempat ia lebih mudah dihitung.",
          "Caranya mengalikan pembilang DAN penyebut dengan bilangan yang sama, sebab $\\frac{k}{k} = 1$ dan mengalikan dengan $1$ tidak mengubah nilai.",
          "Penyebut $\\sqrt{b}$ dikalikan $\\sqrt{b}$; penyebut $a + b\\sqrt{c}$ dikalikan sekawannya $a - b\\sqrt{c}$.",
          "Sekawan bekerja karena $(a+b)(a-b) = a^2 - b^2$ membuat suku tengahnya saling menghapus.",
          "Pada $(a + b\\sqrt{c})(a - b\\sqrt{c})$, yang dikuadratkan adalah $b\\sqrt{c}$ seluruhnya: $(2\\sqrt{3})^2 = 12$, bukan $6$.",
          "$(\\sqrt{m} + \\sqrt{n})^2 = m + n + 2\\sqrt{mn}$; suku tengahnya tidak boleh dilupakan.",
          "Bentuk hasil rasionalisasi masih perlu diperiksa, apakah pembilang dan penyebutnya punya faktor bersama."
        ],
        "islamic": "Menyederhanakan yang rumit adalah bentuk kemudahan yang diajarkan agama. \"Allah menghendaki kemudahan bagimu, dan tidak menghendaki kesukaran bagimu.\" (QS. Al-Baqarah: 185)"
      },
      "collab_cases": [
        "Rasionalkan $\\frac{8}{\\sqrt{2}}$.",
        "Hitunglah $(5+\\sqrt{2})(5-\\sqrt{2})$.",
        "Rasionalkan $\\frac{6}{4+\\sqrt{7}}$.",
        "Rasionalkan $\\frac{9}{2+\\sqrt{3}}$.",
        "Hitunglah $(\\sqrt{7}+\\sqrt{3})^2$."
      ]
    },
    {
      "id": "P05",
      "bab": "Bab 1: Eksponen dan Logaritma",
      "title": "Fungsi Eksponen: Pertumbuhan dan Peluruhan",
      "obj": [
        "Membedakan fungsi eksponen $f(x) = a \\cdot b^x$ dari fungsi pangkat $f(x) = x^n$, dan menyebutkan ciri grafiknya.",
        "Menentukan apakah suatu fungsi eksponen tumbuh atau meluruh dari nilai bilangan pokoknya.",
        "Menyusun model $N(t) = N_0 \\cdot b^{t/p}$ untuk masalah pertumbuhan dan peluruhan, lalu memakainya untuk menghitung."
      ],
      "hook": "Sebuah bakteri membelah menjadi dua setiap $20$ menit. Mulai dari $1000$ bakteri, dalam dua jam jumlahnya bukan $6000$ — melainkan $64\\,000$. Perkalian tumbuh dengan melangkah; pemangkatan tumbuh dengan melompat. Pertemuan ini tentang cara menulis lompatan itu sebagai sebuah fungsi, lalu memakainya untuk meramal.",
      "toolkit": [
        {
          "name": "Bentuk Umum",
          "math": "$$f(x) = a \\cdot b^{x}, \\quad a \\neq 0, \\; b > 0, \\; b \\neq 1$$"
        },
        {
          "name": "Tumbuh atau Meluruh",
          "math": "$$b > 1 \\Rightarrow \\text{tumbuh}, \\qquad 0 < b < 1 \\Rightarrow \\text{meluruh}$$"
        },
        {
          "name": "Nilai Awal",
          "math": "$$f(0) = a \\cdot b^{0} = a$$"
        },
        {
          "name": "Model Pertumbuhan",
          "math": "$$N(t) = N_0 \\cdot b^{\\frac{t}{p}}$$"
        },
        {
          "name": "Pertumbuhan Persen",
          "math": "$$N(t) = N_0 (1 + i)^{t}, \\quad \\text{peluruhan } N_0 (1 - i)^{t}$$"
        }
      ],
      "examples": [
        {
          "problem": "Bedakan $f(x) = 2^x$ dari $g(x) = x^2$ dengan menghitung nilainya untuk $x = 1, 2, 3, 4, 10$.",
          "solution": "Langkah 1: Perhatikan letak $x$-nya. Pada $f$, $x$ berada di PANGKAT; pada $g$, $x$ berada di bilangan pokok.\n\nLangkah 2: Hitung $f(x) = 2^x$.\n$f(1) = 2$, $f(2) = 4$, $f(3) = 8$, $f(4) = 16$, $f(10) = 1024$\n\nLangkah 3: Hitung $g(x) = x^2$.\n$g(1) = 1$, $g(2) = 4$, $g(3) = 9$, $g(4) = 16$, $g(10) = 100$\n\nLangkah 4: Bandingkan. Pada $x = 2$ dan $x = 4$ keduanya sama, jadi beberapa titik yang sama tidak membuat dua fungsi menjadi sama.\n\nLangkah 5: Bandingkan di $x = 10$. Nilai $f$ sepuluh kali lebih besar daripada $g$. Semakin jauh, jaraknya semakin melebar tanpa batas.\n\nLangkah 6: Perhatikan pola pertumbuhannya. Pada $f$, setiap $x$ bertambah $1$ nilainya DIKALIKAN $2$. Pada $g$, yang bertambah selisihnya, bukan kelipatannya.\n\nKesimpulan: $f(x) = 2^x$ fungsi eksponen, $g(x) = x^2$ fungsi pangkat; keduanya berbeda meski berpotongan di beberapa titik."
        },
        {
          "problem": "Diberikan $f(x) = 2 \\cdot 3^{x}$. Hitunglah $f(0)$, $f(2)$, dan tentukan apakah fungsi ini tumbuh atau meluruh.",
          "solution": "Langkah 1: Hitung $f(0)$. Ingat $b^0 = 1$.\n$f(0) = 2 \\cdot 3^{0} = 2 \\cdot 1 = 2$\n\nLangkah 2: Jadi nilai awalnya $2$, yang memang sama dengan koefisien $a$-nya.\n\nLangkah 3: Hitung $f(2)$. Kerjakan pemangkatan LEBIH DAHULU daripada perkalian.\n$3^2 = 9$, lalu $f(2) = 2 \\times 9 = 18$\n\nLangkah 4: Periksa urutannya. Kalau $2 \\times 3$ dikerjakan dahulu lalu dipangkatkan, hasilnya $6^2 = 36$ — keliru, sebab yang dipangkatkan hanya $3$.\n\nLangkah 5: Tentukan tumbuh atau meluruh dari bilangan pokoknya.\n$b = 3 > 1$, jadi fungsinya TUMBUH\n\nLangkah 6: Periksa dengan menghitung satu nilai lagi. $f(1) = 2 \\times 3 = 6$, dan barisan $2, 6, 18$ memang membesar dengan dikalikan $3$ setiap langkah.\n\nKesimpulan: $f(0) = 2$, $f(2) = 18$, dan fungsinya tumbuh."
        },
        {
          "problem": "Bakteri membelah menjadi dua setiap $20$ menit. Mula-mula ada $1000$ bakteri. Berapa banyak bakteri setelah $2$ jam?",
          "solution": "Langkah 1: Samakan satuan waktunya lebih dahulu.\n$2$ jam $= 120$ menit\n\nLangkah 2: Hitung banyaknya periode pembelahan.\n$\\frac{120}{20} = 6$ periode\n\nLangkah 3: Susun modelnya. Setiap periode jumlahnya dikalikan $2$.\n$N = 1000 \\cdot 2^{6}$\n\nLangkah 4: Hitung pemangkatannya.\n$2^6 = 64$\n\nLangkah 5: Kalikan.\n$N = 1000 \\times 64 = 64\\,000$\n\nLangkah 6: Periksa dengan menghitung periode demi periode.\n$1000 \\to 2000 \\to 4000 \\to 8000 \\to 16\\,000 \\to 32\\,000 \\to 64\\,000$ — cocok, enam langkah\n\nLangkah 7: Kekeliruan yang paling sering terjadi adalah mengalikan, yaitu $1000 \\times 2 \\times 6 = 12\\,000$. Itu menganggap pertumbuhannya melangkah, padahal ia melompat.\n\nKesimpulan: Setelah $2$ jam ada $64\\,000$ bakteri."
        },
        {
          "problem": "Suatu zat radioaktif bermassa $80$ mg dan waktu paruhnya $5$ tahun. Berapa massanya setelah $15$ tahun?",
          "solution": "Langkah 1: Waktu paruh berarti setiap $5$ tahun massanya menjadi SEPARUH.\n\nLangkah 2: Hitung banyaknya periode paruh.\n$\\frac{15}{5} = 3$ periode\n\nLangkah 3: Susun modelnya dengan bilangan pokok $\\frac{1}{2}$.\n$N = 80 \\cdot \\left(\\frac{1}{2}\\right)^{3}$\n\nLangkah 4: Hitung pemangkatannya.\n$\\left(\\frac{1}{2}\\right)^{3} = \\frac{1}{8}$\n\nLangkah 5: Kalikan.\n$N = 80 \\times \\frac{1}{8} = 10$ mg\n\nLangkah 6: Periksa periode demi periode.\n$80 \\to 40 \\to 20 \\to 10$ — cocok, tiga langkah\n\nLangkah 7: Perhatikan bahwa bilangan pokoknya $\\frac{1}{2}$, yang terletak antara $0$ dan $1$ — itulah tanda PELURUHAN.\n\nLangkah 8: Kekeliruan yang sering terjadi adalah membagi dengan $3$, yaitu $\\frac{80}{3} \\approx 26{,}7$. Peluruhan tidak membagi dengan banyaknya periode, melainkan membagi dua BERULANG.\n\nKesimpulan: Setelah $15$ tahun massanya $10$ mg."
        },
        {
          "problem": "Penduduk sebuah desa $8000$ orang dan bertambah $5\\%$ setiap tahun. Berapa penduduknya setelah $3$ tahun?",
          "solution": "Langkah 1: Bertambah $5\\%$ berarti setiap tahun jumlahnya menjadi $105\\%$ dari tahun sebelumnya.\n$b = 1 + 0{,}05 = 1{,}05$\n\nLangkah 2: Susun modelnya.\n$N = 8000 \\cdot (1{,}05)^{3}$\n\nLangkah 3: Hitung pemangkatannya bertahap.\n$1{,}05^2 = 1{,}1025$, lalu $1{,}1025 \\times 1{,}05 = 1{,}157625$\n\nLangkah 4: Kalikan dengan penduduk awalnya.\n$N = 8000 \\times 1{,}157625 = 9261$\n\nLangkah 5: Periksa tahun demi tahun.\n$8000 \\to 8400 \\to 8820 \\to 9261$ — cocok\n\nLangkah 6: Perhatikan bahwa pertambahannya TIDAK tetap: $400$, lalu $420$, lalu $441$. Yang tetap adalah persentasenya, bukan jumlahnya.\n\nLangkah 7: Kekeliruan yang sering terjadi adalah menghitung $5\\% \\times 3 = 15\\%$ lalu menjawab $9200$. Selisihnya $61$ orang, dan selisih itu justru berasal dari bunga yang ikut berbunga.\n\nKesimpulan: Setelah $3$ tahun penduduknya $9261$ orang."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, buat tabel untuk $f(x) = 2^x$ dengan $x = 0, 1, 2, 3, 4, 5$, dan tabel kedua untuk $g(x) = 2x + 1$ dengan $x$ yang sama. Gambar kedua grafiknya pada satu bidang koordinat. Tentukan di mana saja keduanya berpotongan, dan di sebelah mana $g$ justru LEBIH BESAR dari $f$. Terakhir tuliskan: apakah ada nilai $x$ yang cukup besar sehingga $g$ mengejar $f$ kembali? Jelaskan alasannya.",
      "summary_data": {
        "summary": [
          "Fungsi eksponen berbentuk $f(x) = a \\cdot b^x$ dengan $b > 0$ dan $b \\neq 1$; variabelnya berada di PANGKAT.",
          "Pada $f(x) = a \\cdot b^x$, nilai awalnya $f(0) = a$, sebab $b^0 = 1$.",
          "Bilangan pokok $b > 1$ berarti tumbuh; $0 < b < 1$ berarti meluruh.",
          "Fungsi eksponen berbeda dari fungsi pangkat: pada $2^x$ variabelnya di pangkat, pada $x^2$ di bilangan pokok.",
          "Pertumbuhan $i$ per periode memberi $b = 1+i$; peluruhan memberi $b = 1-i$.",
          "Model umum masalah berperiode: $N(t) = N_0 \\cdot b^{t/p}$ dengan $p$ panjang satu periode.",
          "Pemangkatan dikerjakan sebelum perkalian: pada $2 \\cdot 3^2$ yang dipangkatkan hanya $3$, hasilnya $18$ bukan $36$.",
          "Kekeliruan yang paling sering terjadi adalah mengalikan dengan banyaknya periode alih-alih memangkatkan."
        ],
        "islamic": "Yang kecil dapat menjadi besar bila terus ditumbuhkan. \"Perumpamaan orang yang menafkahkan hartanya di jalan Allah adalah seperti sebutir benih yang menumbuhkan tujuh tangkai, pada tiap tangkai seratus biji.\" (QS. Al-Baqarah: 261)"
      },
      "collab_cases": [
        "Diberikan $f(x) = 3 \\cdot 2^x$. Hitunglah $f(0)$, $f(1)$, dan $f(4)$.",
        "Bakteri berlipat tiga setiap jam. Mula-mula $50$ bakteri. Berapa setelah $4$ jam?",
        "Zat bermassa $160$ mg dengan waktu paruh $4$ hari. Berapa massanya setelah $12$ hari?",
        "Tabungan $Rp5.000.000$ tumbuh $4\\%$ setahun. Berapa saldonya setelah $2$ tahun?",
        "Tentukan apakah $f(x) = 5 \\cdot \\left(\\frac{2}{3}\\right)^x$ tumbuh atau meluruh, dan hitung $f(2)$."
      ]
    },
    {
      "id": "P06",
      "bab": "Bab 1: Eksponen dan Logaritma",
      "title": "Logaritma: Pengertian dan Sifat-Sifatnya",
      "obj": [
        "Menjelaskan logaritma sebagai kebalikan pemangkatan, yaitu ${}^{a}\\log b = c \\iff a^{c} = b$, serta syarat $a > 0$, $a \\neq 1$, dan $b > 0$.",
        "Menghitung nilai logaritma yang eksak, termasuk yang hasilnya negatif atau berupa pecahan.",
        "Memakai sifat penjumlahan, pengurangan, dan pangkat pada logaritma untuk menyederhanakan bentuk gabungan."
      ],
      "hook": "Pertemuan lalu pertanyaannya: \"$1000$ bakteri berlipat dua setiap jam — ada berapa setelah $6$ jam?\" Jawabannya $2^6 \\times 1000$. Sekarang pertanyaannya dibalik: \"Setelah berapa jam bakterinya mencapai $64\\,000$?\" Yang dicari bukan hasilnya lagi, melainkan PANGKATNYA. Alat untuk mencari pangkat itulah yang bernama logaritma.",
      "toolkit": [
        {
          "name": "Arti Logaritma",
          "math": "$${}^{a}\\log b = c \\iff a^{c} = b$$"
        },
        {
          "name": "Dua Nilai yang Selalu Diingat",
          "math": "$${}^{a}\\log 1 = 0 \\quad \\text{dan} \\quad {}^{a}\\log a = 1$$"
        },
        {
          "name": "Penjumlahan",
          "math": "$${}^{a}\\log m + {}^{a}\\log n = {}^{a}\\log (m \\cdot n)$$"
        },
        {
          "name": "Pengurangan",
          "math": "$${}^{a}\\log m - {}^{a}\\log n = {}^{a}\\log \\frac{m}{n}$$"
        },
        {
          "name": "Pangkat Turun ke Depan",
          "math": "$${}^{a}\\log m^{n} = n \\cdot {}^{a}\\log m$$"
        }
      ],
      "examples": [
        {
          "problem": "Hitunglah ${}^{3}\\log 81$ dengan memakai definisi logaritma.",
          "solution": "Langkah 1: Tuliskan apa yang sedang ditanyakan. Bentuk ${}^{3}\\log 81$ berarti: tiga dipangkatkan berapa supaya menjadi $81$?\n${}^{3}\\log 81 = c \\iff 3^{c} = 81$\n\nLangkah 2: Naikkan pangkat $3$ satu per satu sampai bertemu $81$.\n$3^1 = 3$, $3^2 = 9$, $3^3 = 27$, $3^4 = 81$\n\nLangkah 3: Jadi pangkatnya $4$.\n${}^{3}\\log 81 = 4$\n\nLangkah 4: Periksa dengan mengembalikannya ke bentuk pangkat.\n$3^4 = 81$ — cocok\n\nLangkah 5: Perhatikan bahwa logaritma TIDAK menanyakan hasil perkalian; ia menanyakan BANYAKNYA faktor. Itulah sebabnya ia disebut kebalikan pemangkatan.\n\nLangkah 6: Kekeliruan yang sering terjadi adalah menjawab $27$, yaitu membagi $81$ dengan $3$. Pembagian menjawab soal yang berbeda.\n\nKesimpulan: ${}^{3}\\log 81 = 4$."
        },
        {
          "problem": "Hitunglah ${}^{2}\\log \\dfrac{1}{8}$.",
          "solution": "Langkah 1: Tuliskan pertanyaannya sebagai bentuk pangkat.\n${}^{2}\\log \\frac{1}{8} = c \\iff 2^{c} = \\frac{1}{8}$\n\nLangkah 2: Perhatikan bahwa $\\frac{1}{8}$ kurang dari $1$, sedangkan $2$ berpangkat positif selalu lebih dari $1$. Jadi pangkatnya harus NEGATIF.\n\nLangkah 3: Tuliskan $\\frac{1}{8}$ sebagai pangkat dari $2$.\n$\\frac{1}{8} = \\frac{1}{2^3} = 2^{-3}$\n\nLangkah 4: Bandingkan dengan $2^{c}$.\n$2^{c} = 2^{-3} \\Rightarrow c = -3$\n\nLangkah 5: Periksa dengan mengembalikannya.\n$2^{-3} = \\frac{1}{8}$ — cocok\n\nLangkah 6: Perhatikan pola umumnya: bila yang dilogaritmakan kurang dari $1$ sedangkan bilangan pokoknya lebih dari $1$, hasilnya selalu negatif.\n\nLangkah 7: Sebaliknya, ${}^{2}\\log 8 = 3$. Jadi ${}^{2}\\log \\frac{1}{8}$ dan ${}^{2}\\log 8$ hanya berbeda tanda.\n\nKesimpulan: ${}^{2}\\log \\frac{1}{8} = -3$."
        },
        {
          "problem": "Hitunglah ${}^{2}\\log 4 + {}^{2}\\log 8$ dengan dua cara.",
          "solution": "Langkah 1: Cara pertama, hitung masing-masing lalu jumlahkan.\n${}^{2}\\log 4 = 2$ sebab $2^2 = 4$\n\nLangkah 2: Lanjutkan.\n${}^{2}\\log 8 = 3$ sebab $2^3 = 8$\n\nLangkah 3: Jumlahkan.\n$2 + 3 = 5$\n\nLangkah 4: Cara kedua, pakai sifat penjumlahan logaritma. Yang dijumlahkan logaritmanya, yang DIKALIKAN bilangannya.\n${}^{2}\\log 4 + {}^{2}\\log 8 = {}^{2}\\log (4 \\times 8) = {}^{2}\\log 32$\n\nLangkah 5: Hitung hasilnya.\n${}^{2}\\log 32 = 5$ sebab $2^5 = 32$ — cocok dengan cara pertama\n\nLangkah 6: Perhatikan dari mana sifat itu datang. Menjumlahkan pangkat berarti mengalikan bilangannya: $2^2 \\times 2^3 = 2^5$. Sifat logaritma hanyalah sifat pangkat yang dibaca dari arah berlawanan.\n\nLangkah 7: Kekeliruan yang sering terjadi adalah menulis ${}^{2}\\log 4 + {}^{2}\\log 8 = {}^{2}\\log 12$, yakni bilangannya yang dijumlahkan. Nilainya bukan $5$, dan ${}^{2}\\log 12$ pun bukan bilangan bulat.\n\nKesimpulan: ${}^{2}\\log 4 + {}^{2}\\log 8 = 5$."
        },
        {
          "problem": "Hitunglah ${}^{3}\\log 18 - {}^{3}\\log 2$.",
          "solution": "Langkah 1: Coba hitung tiap sukunya sendiri-sendiri lebih dahulu.\n${}^{3}\\log 18$ bukan bilangan bulat, sebab $3^2 = 9$ dan $3^3 = 27$ — tidak ada yang tepat $18$\n\nLangkah 2: Jadi cara menghitung satu-satu TIDAK menolong di sini. Inilah soal yang memang memaksa pemakaian sifatnya.\n\nLangkah 3: Pakai sifat pengurangan. Yang dikurangkan logaritmanya, yang DIBAGI bilangannya.\n${}^{3}\\log 18 - {}^{3}\\log 2 = {}^{3}\\log \\frac{18}{2}$\n\nLangkah 4: Hitung pembagiannya.\n$\\frac{18}{2} = 9$\n\nLangkah 5: Hitung logaritmanya.\n${}^{3}\\log 9 = 2$ sebab $3^2 = 9$\n\nLangkah 6: Periksa dengan desimal. ${}^{3}\\log 18 \\approx 2{,}631$ dan ${}^{3}\\log 2 \\approx 0{,}631$; selisihnya $2{,}000$ — cocok.\n\nLangkah 7: Perhatikan bahwa yang dibagi adalah BILANGANNYA, bukan logaritmanya. Membagi logaritmanya memberi $\\frac{2{,}631}{0{,}631} \\approx 4{,}17$, yang sama sekali lain.\n\nKesimpulan: ${}^{3}\\log 18 - {}^{3}\\log 2 = 2$."
        },
        {
          "problem": "Hitunglah ${}^{2}\\log 8^{4}$.",
          "solution": "Langkah 1: Pakai sifat pangkat pada logaritma. Pangkatnya turun menjadi pengali di depan.\n${}^{2}\\log 8^{4} = 4 \\cdot {}^{2}\\log 8$\n\nLangkah 2: Hitung logaritma yang tersisa.\n${}^{2}\\log 8 = 3$ sebab $2^3 = 8$\n\nLangkah 3: Kalikan.\n$4 \\times 3 = 12$\n\nLangkah 4: Periksa lewat jalan lain, yaitu hitung $8^4$ dahulu.\n$8^4 = 4096$, dan $2^{12} = 4096$, jadi ${}^{2}\\log 4096 = 12$ — cocok\n\nLangkah 5: Bandingkan bebannya. Cara pertama hanya mengalikan dua bilangan kecil; cara kedua harus melewati $4096$.\n\nLangkah 6: Perhatikan dari mana sifat itu datang. $8^4 = (2^3)^4 = 2^{12}$, jadi pangkatnya memang dikalikan — dan itulah yang muncul sebagai pengali di depan logaritmanya.\n\nLangkah 7: Kekeliruan yang sering terjadi adalah menulis $\\left({}^{2}\\log 8\\right)^{4} = 3^4 = 81$. Pangkatnya melekat pada $8$, bukan pada logaritmanya.\n\nKesimpulan: ${}^{2}\\log 8^{4} = 12$."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, hitunglah ${}^{2}\\log 8$, ${}^{4}\\log 8$, dan ${}^{8}\\log 8$ — ketiganya. Susun hasilnya berurutan dan perhatikan apa yang terjadi pada nilainya ketika bilangan pokoknya membesar sementara yang dilogaritmakan tetap. Lalu tebak ${}^{16}\\log 8$ SEBELUM menghitungnya, tuliskan tebakan kalian, baru buktikan. Terakhir: adakah bilangan pokok yang membuat hasilnya tepat $1$? Dan yang membuat hasilnya negatif?",
      "summary_data": {
        "summary": [
          "${}^{a}\\log b = c$ berarti $a^{c} = b$; logaritma mencari PANGKATNYA, bukan hasilnya.",
          "Syaratnya $a > 0$, $a \\neq 1$, dan $b > 0$; logaritma dari bilangan negatif atau nol tidak terdefinisi.",
          "${}^{a}\\log 1 = 0$ sebab $a^0 = 1$, dan ${}^{a}\\log a = 1$ sebab $a^1 = a$.",
          "Bila $b < 1$ sedangkan $a > 1$, hasil logaritmanya NEGATIF, misalnya ${}^{2}\\log \\frac{1}{8} = -3$.",
          "Logaritma DIJUMLAHKAN berarti bilangannya DIKALIKAN: ${}^{a}\\log m + {}^{a}\\log n = {}^{a}\\log(mn)$.",
          "Logaritma DIKURANGKAN berarti bilangannya DIBAGI: ${}^{a}\\log m - {}^{a}\\log n = {}^{a}\\log \\frac{m}{n}$.",
          "Pangkat pada bilangan yang dilogaritmakan turun menjadi pengali: ${}^{a}\\log m^{n} = n \\cdot {}^{a}\\log m$.",
          "Perhatikan letak pangkatnya: ${}^{2}\\log 8^{4} = 12$, sedangkan $\\left({}^{2}\\log 8\\right)^{4} = 81$ — keduanya berbeda.",
          "Seluruh sifat logaritma hanyalah sifat pangkat yang dibaca dari arah sebaliknya."
        ],
        "islamic": "Menelusuri kembali sebab dari akibat adalah cara berpikir yang diajarkan. \"Maka apakah mereka tidak memperhatikan bagaimana unta itu diciptakan?\" (QS. Al-Ghasyiyah: 17)"
      },
      "collab_cases": [
        "Hitunglah ${}^{5}\\log 125$.",
        "Hitunglah ${}^{3}\\log \\frac{1}{27}$.",
        "Hitunglah ${}^{2}\\log 16 + {}^{2}\\log 4$.",
        "Hitunglah ${}^{5}\\log 250 - {}^{5}\\log 2$.",
        "Hitunglah ${}^{3}\\log 9^{3}$."
      ]
    },
    {
      "id": "P07",
      "bab": "Bab 1: Eksponen dan Logaritma",
      "title": "Persamaan Eksponen dan Logaritma Sederhana",
      "obj": [
        "Menyelesaikan persamaan eksponen dengan menyamakan bilangan pokoknya, memakai sifat $a^{f(x)} = a^{g(x)} \\Rightarrow f(x) = g(x)$.",
        "Menyelesaikan persamaan logaritma sederhana dengan mengubahnya ke bentuk pangkat.",
        "Memeriksa daerah asal persamaan logaritma, dan membuang akar yang tidak memenuhi syarat."
      ],
      "hook": "Dua pertemuan lalu kita menghitung: $1000$ bakteri berlipat dua setiap jam, ada berapa setelah $6$ jam. Sekarang soalnya dibalik: jumlahnya sudah $64\\,000$ — sudah berapa jam berlalu? Yang dicari kini bersembunyi di PANGKAT, dan untuk mengeluarkannya ada dua jalan: menyamakan bilangan pokoknya, atau memakai logaritma. Pertemuan ini menutup Bab 1 dengan mempertemukan keduanya.",
      "toolkit": [
        {
          "name": "Menyamakan Bilangan Pokok",
          "math": "$$a^{f(x)} = a^{g(x)} \\Rightarrow f(x) = g(x) \\quad (a > 0, \\; a \\neq 1)$$"
        },
        {
          "name": "Dari Logaritma ke Pangkat",
          "math": "$${}^{a}\\log f(x) = c \\Rightarrow f(x) = a^{c}$$"
        },
        {
          "name": "Menggabungkan Dua Logaritma",
          "math": "$${}^{a}\\log m + {}^{a}\\log n = {}^{a}\\log (mn)$$"
        },
        {
          "name": "Daerah Asal Wajib Diperiksa",
          "math": "$${}^{a}\\log f(x) \\text{ ada} \\iff f(x) > 0$$"
        },
        {
          "name": "Ruas Kanan Dijadikan Logaritma",
          "math": "$$c = {}^{a}\\log a^{c}$$"
        }
      ],
      "examples": [
        {
          "problem": "Selesaikan $2^{x+1} = 32$.",
          "solution": "Langkah 1: Bilangan pokok di ruas kiri adalah $2$. Ubah ruas kanan menjadi pangkat dari $2$ juga.\n$32 = 2^5$\n\nLangkah 2: Tuliskan persamaannya dengan pokok yang sama.\n$2^{x+1} = 2^{5}$\n\nLangkah 3: Karena pokoknya sama, pangkatnya harus sama.\n$x + 1 = 5$\n\nLangkah 4: Selesaikan.\n$x = 4$\n\nLangkah 5: Periksa dengan memasukkannya kembali ke persamaan ASLI.\n$2^{4+1} = 2^5 = 32$ — cocok\n\nLangkah 6: Perhatikan mengapa langkah 3 sah. Fungsi $2^x$ selalu naik, jadi tidak ada dua pangkat berbeda yang memberi hasil sama. Karena itu pangkatnya boleh langsung disamakan.\n\nLangkah 7: Kekeliruan yang sering terjadi adalah langsung menulis $x + 1 = 32$, yaitu menyamakan pangkat dengan HASILNYA, bukan dengan pangkat ruas kanan.\n\nKesimpulan: $x = 4$."
        },
        {
          "problem": "Selesaikan $9^{x} = 27$.",
          "solution": "Langkah 1: Pokok kedua ruas berbeda, yaitu $9$ dan $27$. Cari pokok bersama yang lebih kecil.\n$9 = 3^2$ dan $27 = 3^3$\n\nLangkah 2: Tulis ulang kedua ruasnya dengan pokok $3$.\n$(3^2)^{x} = 3^3$\n\nLangkah 3: Rapikan ruas kirinya. Pada pangkat berpangkat, pangkatnya dikalikan.\n$3^{2x} = 3^{3}$\n\nLangkah 4: Samakan pangkatnya.\n$2x = 3$\n\nLangkah 5: Selesaikan.\n$x = \\frac{3}{2}$\n\nLangkah 6: Periksa dengan memasukkannya kembali.\n$9^{\\frac{3}{2}} = \\left(\\sqrt{9}\\right)^{3} = 3^{3} = 27$ — cocok\n\nLangkah 7: Perhatikan bahwa jawabannya tidak harus bilangan bulat. Periksa kemasukakalannya: $9^1 = 9$ dan $9^2 = 81$, jadi jawabannya memang harus antara $1$ dan $2$.\n\nKesimpulan: $x = \\frac{3}{2}$."
        },
        {
          "problem": "Selesaikan $2^{x} = \\dfrac{1}{16}$.",
          "solution": "Langkah 1: Perhatikan bahwa ruas kanan kurang dari $1$, sedangkan pokoknya $2 > 1$. Jadi jawabannya pasti NEGATIF.\n\nLangkah 2: Ubah ruas kanan menjadi pangkat dari $2$.\n$\\frac{1}{16} = \\frac{1}{2^4} = 2^{-4}$\n\nLangkah 3: Tuliskan persamaannya.\n$2^{x} = 2^{-4}$\n\nLangkah 4: Samakan pangkatnya.\n$x = -4$\n\nLangkah 5: Periksa dengan memasukkannya kembali.\n$2^{-4} = \\frac{1}{16}$ — cocok, dan tandanya sesuai dugaan di Langkah 1\n\nLangkah 6: Kekeliruan yang sering terjadi adalah menjawab $4$, yakni lupa tanda negatifnya. Dugaan tanda di Langkah 1 justru berguna untuk menangkap kekeliruan seperti itu sebelum selesai.\n\nKesimpulan: $x = -4$."
        },
        {
          "problem": "Selesaikan ${}^{2}\\log (x - 1) = 3$.",
          "solution": "Langkah 1: Tuliskan daerah asalnya LEBIH DAHULU, sebelum menghitung apa pun. Yang dilogaritmakan harus positif.\n$x - 1 > 0 \\Rightarrow x > 1$\n\nLangkah 2: Ubah persamaannya dari bentuk logaritma menjadi bentuk pangkat.\n${}^{2}\\log (x-1) = 3 \\Rightarrow x - 1 = 2^{3}$\n\nLangkah 3: Hitung ruas kanannya.\n$x - 1 = 8$\n\nLangkah 4: Selesaikan.\n$x = 9$\n\nLangkah 5: Periksa terhadap daerah asal Langkah 1. Memang $9 > 1$, jadi jawabannya diterima.\n\nLangkah 6: Periksa dengan memasukkannya kembali ke persamaan asli.\n${}^{2}\\log (9-1) = {}^{2}\\log 8 = 3$ — cocok\n\nLangkah 7: Kekeliruan yang sering terjadi adalah menulis $x - 1 = 3^2$, yaitu menukar bilangan pokok dengan hasilnya. Itu memberi $x = 10$, yang tidak memenuhi persamaannya.\n\nKesimpulan: $x = 9$."
        },
        {
          "problem": "Selesaikan ${}^{3}\\log x + {}^{3}\\log (x - 2) = 1$.",
          "solution": "Langkah 1: Tuliskan daerah asalnya lebih dahulu. KEDUA bentuk yang dilogaritmakan harus positif.\n$x > 0$ dan $x - 2 > 0$, jadi syaratnya $x > 2$\n\nLangkah 2: Gabungkan kedua logaritmanya dengan sifat penjumlahan.\n${}^{3}\\log \\left[x(x-2)\\right] = 1$\n\nLangkah 3: Ubah ke bentuk pangkat.\n$x(x-2) = 3^{1} = 3$\n\nLangkah 4: Jabarkan lalu susun menjadi persamaan kuadrat.\n$x^2 - 2x = 3 \\Rightarrow x^2 - 2x - 3 = 0$\n\nLangkah 5: Faktorkan.\n$(x-3)(x+1) = 0$, jadi $x = 3$ atau $x = -1$\n\nLangkah 6: Sekarang saring dengan daerah asal Langkah 1. Syaratnya $x > 2$.\n$x = 3$ diterima; $x = -1$ DIBUANG\n\nLangkah 7: Perhatikan mengapa $x = -1$ harus dibuang. Bila dimasukkan, ia menuntut ${}^{3}\\log(-1)$, dan logaritma dari bilangan negatif tidak terdefinisi. Akar seperti ini disebut akar palsu; ia muncul karena langkah 3 menghilangkan jejak daerah asalnya.\n\nLangkah 8: Periksa jawabannya dengan memasukkannya kembali.\n${}^{3}\\log 3 + {}^{3}\\log 1 = 1 + 0 = 1$ — cocok\n\nKesimpulan: $x = 3$; akar $x = -1$ dibuang karena di luar daerah asal."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, selesaikan ${}^{2}\\log x + {}^{2}\\log (x-6) = 4$ secara lengkap — mulai dengan menuliskan daerah asalnya SEBELUM menghitung. Setelah dapat kedua akar persamaan kuadratnya, tuliskan untuk MASING-MASING akar: apa yang terjadi kalau akar itu dimasukkan ke persamaan aslinya. Terakhir jelaskan di papan: langkah manakah dalam pengerjaan kalian yang menjadi tempat akar palsu itu menyelinap masuk?",
      "summary_data": {
        "summary": [
          "Pada persamaan eksponen, samakan bilangan pokoknya lebih dahulu; setelah pokoknya sama, pangkatnya boleh langsung disamakan.",
          "$a^{f(x)} = a^{g(x)} \\Rightarrow f(x) = g(x)$, sah karena fungsi eksponen selalu naik atau selalu turun sehingga tidak berulang nilainya.",
          "Bila ruas kanan kurang dari $1$ sedangkan pokoknya lebih dari $1$, jawabannya pasti negatif — dugaan tanda ini berguna untuk memeriksa hasil.",
          "Jawaban persamaan eksponen tidak harus bulat; $9^x = 27$ memberi $x = \\frac{3}{2}$.",
          "Persamaan logaritma diselesaikan dengan mengubahnya ke bentuk pangkat: ${}^{a}\\log f(x) = c \\Rightarrow f(x) = a^{c}$.",
          "Daerah asal persamaan logaritma harus dituliskan SEBELUM menghitung: setiap bentuk yang dilogaritmakan wajib positif.",
          "Akar yang tidak memenuhi daerah asal harus DIBUANG, betapa pun ia memenuhi persamaan kuadrat yang muncul di tengah pengerjaan.",
          "Akar palsu menyelinap masuk pada langkah yang menghilangkan tanda logaritmanya; karena itu setiap jawaban selalu diperiksa kembali ke persamaan asli."
        ],
        "islamic": "Memeriksa kembali sebelum menyimpulkan adalah sikap yang dituntun. \"Hai orang-orang yang beriman, jika datang kepadamu orang fasik membawa berita, maka periksalah dengan teliti.\" (QS. Al-Hujurat: 6)"
      },
      "collab_cases": [
        "Selesaikan $3^{x-1} = 81$.",
        "Selesaikan $4^{x} = 8$.",
        "Selesaikan $5^{x} = \\frac{1}{125}$.",
        "Selesaikan ${}^{3}\\log (x+2) = 2$.",
        "Selesaikan ${}^{2}\\log x + {}^{2}\\log (x-2) = 3$, dan sebutkan akar yang harus dibuang."
      ]
    },
    {
      "id": "P08",
      "bab": "Bab 2: Barisan dan Deret",
      "title": "Pola Bilangan dan Pengertian Barisan",
      "obj": [
        "Menemukan pola pada suatu barisan bilangan dengan memeriksa selisih maupun perbandingan antarsukunya.",
        "Menuliskan rumus suku ke-$n$ dari pola yang ditemukan, lalu memakainya untuk mencari suku yang jauh.",
        "Membedakan barisan aritmetika, barisan geometri, dan barisan yang bukan keduanya."
      ],
      "hook": "Susunan batang korek api membentuk segitiga berjajar: satu segitiga butuh $3$ batang, dua segitiga $5$ batang, tiga segitiga $7$ batang. Berapa batang untuk seratus segitiga? Menggambarnya satu per satu akan memakan berjam-jam. Yang diperlukan bukan gambarnya, melainkan POLANYA — dan begitu polanya ditulis sebagai rumus, suku ke-seratus sama mudahnya dengan suku ke-tiga.",
      "toolkit": [
        {
          "name": "Barisan dan Sukunya",
          "math": "$$U_1, U_2, U_3, \\dots, U_n, \\dots$$"
        },
        {
          "name": "Uji Selisih (Aritmetika)",
          "math": "$$U_2 - U_1 = U_3 - U_2 = \\dots = b$$"
        },
        {
          "name": "Uji Perbandingan (Geometri)",
          "math": "$$\\frac{U_2}{U_1} = \\frac{U_3}{U_2} = \\dots = r$$"
        },
        {
          "name": "Rumus Suku ke-n",
          "math": "$$U_n = f(n), \\quad n = 1, 2, 3, \\dots$$"
        },
        {
          "name": "Memeriksa Rumus",
          "math": "$$\\text{hitung } U_1, U_2, U_3 \\text{ dan cocokkan}$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan dua suku berikutnya dari $2, 5, 10, 17, \\dots$ dan tuliskan rumus suku ke-$n$-nya.",
          "solution": "Langkah 1: Periksa selisih antarsukunya lebih dahulu.\n$5 - 2 = 3$, $10 - 5 = 5$, $17 - 10 = 7$\n\nLangkah 2: Selisihnya TIDAK tetap, jadi barisan ini bukan aritmetika. Tetapi selisihnya sendiri berpola: $3, 5, 7$ — bertambah $2$ setiap kali.\n\nLangkah 3: Lanjutkan pola selisihnya. Berikutnya $9$, lalu $11$.\n$17 + 9 = 26$ dan $26 + 11 = 37$\n\nLangkah 4: Sekarang cari rumusnya. Bandingkan tiap suku dengan kuadrat nomornya.\n$n = 1: 1^2 = 1$, sukunya $2$; $n = 2: 2^2 = 4$, sukunya $5$; $n = 3: 3^2 = 9$, sukunya $10$\n\nLangkah 5: Setiap suku ternyata satu lebih besar daripada kuadrat nomornya.\n$U_n = n^2 + 1$\n\nLangkah 6: Periksa rumusnya pada suku yang BELUM dipakai untuk menyusunnya.\n$U_4 = 4^2 + 1 = 17$ — cocok, dan $U_5 = 25 + 1 = 26$ — cocok dengan Langkah 3\n\nLangkah 7: Perhatikan mengapa pemeriksaan di Langkah 6 penting. Rumus yang hanya dicocokkan pada suku yang dipakai menyusunnya belum teruji sama sekali.\n\nKesimpulan: Dua suku berikutnya $26$ dan $37$, dengan $U_n = n^2 + 1$."
        },
        {
          "problem": "Diberikan $U_n = 3n - 1$. Tuliskan lima suku pertamanya, lalu tentukan jenis barisannya.",
          "solution": "Langkah 1: Masukkan $n = 1$ sampai $n = 5$ satu per satu.\n$U_1 = 3(1) - 1 = 2$\n\nLangkah 2: Lanjutkan.\n$U_2 = 5$, $U_3 = 8$, $U_4 = 11$, $U_5 = 14$\n\nLangkah 3: Tuliskan barisannya.\n$2, 5, 8, 11, 14, \\dots$\n\nLangkah 4: Uji selisihnya.\n$5-2 = 3$, $8-5 = 3$, $11-8 = 3$, $14-11 = 3$ — selalu $3$\n\nLangkah 5: Karena selisihnya tetap, barisan ini ARITMETIKA dengan beda $3$.\n\nLangkah 6: Perhatikan hubungannya dengan rumusnya. Angka $3$ pada $3n$ itulah bedanya — sebab setiap $n$ bertambah $1$, nilai $3n$ bertambah $3$.\n\nLangkah 7: Uji juga perbandingannya untuk memastikan ia bukan geometri.\n$\\frac{5}{2} = 2{,}5$ sedangkan $\\frac{8}{5} = 1{,}6$ — tidak tetap, jadi bukan geometri\n\nKesimpulan: Barisannya $2, 5, 8, 11, 14$; aritmetika dengan beda $3$."
        },
        {
          "problem": "Tentukan rumus suku ke-$n$ dari barisan $4, 9, 14, 19, \\dots$",
          "solution": "Langkah 1: Uji selisihnya.\n$9-4 = 5$, $14-9 = 5$, $19-14 = 5$ — tetap, jadi aritmetika dengan $b = 5$\n\nLangkah 2: Karena bedanya $5$, rumusnya pasti memuat $5n$. Hitung $5n$ untuk tiap nomor.\n$n = 1: 5$, $n = 2: 10$, $n = 3: 15$, $n = 4: 20$\n\nLangkah 3: Bandingkan dengan barisan aslinya.\n$5 \\to 4$, $10 \\to 9$, $15 \\to 14$, $20 \\to 19$ — selalu berkurang $1$\n\nLangkah 4: Jadi rumusnya.\n$U_n = 5n - 1$\n\nLangkah 5: Periksa pada suku yang belum dipakai, yaitu suku kelima.\nBarisan aslinya berikutnya $19 + 5 = 24$, dan $U_5 = 25 - 1 = 24$ — cocok\n\nLangkah 6: Perhatikan cara cepatnya. Pada barisan aritmetika, rumusnya selalu berbentuk $U_n = bn + c$, dengan $c$ dicari dari $U_1 = b + c$. Di sini $4 = 5 + c$, jadi $c = -1$.\n\nKesimpulan: $U_n = 5n - 1$."
        },
        {
          "problem": "Susunan batang korek membentuk segitiga berjajar: $1$ segitiga butuh $3$ batang, $2$ segitiga butuh $5$, $3$ segitiga butuh $7$. Berapa batang untuk $20$ segitiga?",
          "solution": "Langkah 1: Tuliskan datanya sebagai barisan.\n$3, 5, 7, \\dots$\n\nLangkah 2: Uji selisihnya.\n$5-3 = 2$ dan $7-5 = 2$ — tetap, jadi aritmetika dengan $b = 2$\n\nLangkah 3: Pahami dari mana $2$ itu datang. Segitiga pertama butuh $3$ batang penuh; setiap segitiga berikutnya menumpang satu sisi pada tetangganya, jadi hanya menambah $2$ batang.\n\nLangkah 4: Susun rumusnya. Bedanya $2$, jadi berbentuk $U_n = 2n + c$.\n$U_1 = 3 \\Rightarrow 2 + c = 3 \\Rightarrow c = 1$\n\nLangkah 5: Jadi $U_n = 2n + 1$.\n\nLangkah 6: Periksa pada data yang ada.\n$U_2 = 5$ dan $U_3 = 7$ — keduanya cocok\n\nLangkah 7: Hitung yang ditanyakan.\n$U_{20} = 2(20) + 1 = 41$\n\nLangkah 8: Periksa kemasukakalannya. Kalau setiap segitiga butuh $3$ batang tanpa berbagi, jawabannya $60$; karena berbagi sisi, jawabannya harus jauh lebih kecil — dan $41$ memang demikian.\n\nKesimpulan: Diperlukan $41$ batang korek."
        },
        {
          "problem": "Tentukan jenis barisan $1, 4, 9, 16, 25, \\dots$ dan jelaskan alasannya.",
          "solution": "Langkah 1: Uji selisihnya.\n$4-1 = 3$, $9-4 = 5$, $16-9 = 7$, $25-16 = 9$\n\nLangkah 2: Selisihnya tidak tetap, jadi BUKAN aritmetika.\n\nLangkah 3: Uji perbandingannya.\n$\\frac{4}{1} = 4$, $\\frac{9}{4} = 2{,}25$, $\\frac{16}{9} \\approx 1{,}78$\n\nLangkah 4: Perbandingannya juga tidak tetap, jadi BUKAN geometri.\n\nLangkah 5: Jadi barisan ini bukan keduanya. Namun ia tetap berpola: setiap suku adalah kuadrat nomornya.\n$U_n = n^2$\n\nLangkah 6: Periksa.\n$U_5 = 25$ — cocok\n\nLangkah 7: Perhatikan bahwa selisihnya sendiri, yaitu $3, 5, 7, 9$, justru membentuk barisan aritmetika. Barisan seperti ini disebut barisan bertingkat dua, dan sering muncul pada pola bangun datar.\n\nKesimpulan: Bukan aritmetika maupun geometri; ia barisan persegi dengan $U_n = n^2$."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, tuliskan barisan $1, 3, 6, 10, 15, \\dots$ (banyaknya bola pada susunan segitiga). Tentukan tiga suku berikutnya, lalu uji apakah ia aritmetika atau geometri — tuliskan hasil ujinya, bukan hanya kesimpulannya. Terakhir: hitung selisih antarsukunya dan perhatikan barisan selisih itu. Apa yang kalian dapati, dan apa kaitannya dengan cara menebak suku ke-$20$ tanpa menuliskan seluruh barisannya?",
      "summary_data": {
        "summary": [
          "Barisan adalah urutan bilangan yang mengikuti pola; suku ke-$n$ ditulis $U_n$.",
          "Uji jenisnya dengan dua langkah: periksa SELISIH antarsuku (aritmetika bila tetap), lalu periksa PERBANDINGAN antarsuku (geometri bila tetap).",
          "Barisan boleh berpola tanpa menjadi aritmetika maupun geometri, misalnya $1, 4, 9, 16$ dengan $U_n = n^2$.",
          "Pada barisan aritmetika, rumusnya selalu berbentuk $U_n = bn + c$ dengan $b$ bedanya.",
          "Rumus yang baru disusun harus diperiksa pada suku yang BELUM dipakai untuk menyusunnya; kalau tidak, ia belum teruji.",
          "Barisan bertingkat dua dikenali dari barisan selisihnya yang justru aritmetika, seperti $2, 5, 10, 17$ dengan selisih $3, 5, 7$.",
          "Manfaat rumus suku ke-$n$ adalah menghitung suku yang jauh tanpa menuliskan seluruh barisannya."
        ],
        "islamic": "Keteraturan adalah tanda yang dapat dibaca. \"Sesungguhnya Kami menciptakan segala sesuatu menurut ukuran.\" (QS. Al-Qamar: 49)"
      },
      "collab_cases": [
        "Tentukan dua suku berikutnya dari $3, 7, 11, 15, \\dots$ dan rumus suku ke-$n$-nya.",
        "Diberikan $U_n = 4n + 2$. Tuliskan empat suku pertamanya dan tentukan bedanya.",
        "Tentukan rumus suku ke-$n$ dari $7, 12, 17, 22, \\dots$",
        "Tentukan jenis barisan $2, 6, 18, 54, \\dots$ beserta alasannya.",
        "Tentukan jenis barisan $1, 8, 27, 64, \\dots$ dan tuliskan rumus suku ke-$n$-nya."
      ]
    },
    {
      "id": "P09",
      "bab": "Bab 2: Barisan dan Deret",
      "title": "Barisan Aritmetika: Menentukan Suku ke-n",
      "obj": [
        "Menurunkan rumus $U_n = a + (n-1)b$ dari arti barisan aritmetika, bukan menghafalkannya.",
        "Menghitung suku ke-$n$ bila suku pertama dan bedanya diketahui, termasuk untuk beda negatif.",
        "Menentukan $a$ dan $b$ dari dua suku yang diketahui, lalu memakainya menjawab pertanyaan lain."
      ],
      "hook": "Sebuah gedung pertunjukan menyusun kursinya makin melebar ke belakang: baris pertama $20$ kursi, tiap baris berikutnya bertambah $3$. Berapa kursi di baris ke-$12$? Menghitungnya satu baris demi satu baris memang bisa — tetapi kalau yang ditanya baris ke-$200$, cara itu runtuh. Satu rumus menyelesaikan keduanya dengan usaha yang sama.",
      "toolkit": [
        {
          "name": "Beda",
          "math": "$$b = U_2 - U_1 = U_3 - U_2 = \\dots$$"
        },
        {
          "name": "Suku ke-n",
          "math": "$$U_n = a + (n-1)b$$"
        },
        {
          "name": "Mengapa $(n-1)$",
          "math": "$$U_1 \\text{ belum ditambah } b \\text{ sama sekali}$$"
        },
        {
          "name": "Dua Suku Diketahui",
          "math": "$$b = \\frac{U_n - U_m}{n - m}$$"
        },
        {
          "name": "Beda Negatif",
          "math": "$$b < 0 \\Rightarrow \\text{barisannya turun}$$"
        }
      ],
      "examples": [
        {
          "problem": "Turunkan rumus $U_n$ untuk barisan aritmetika dengan suku pertama $a$ dan beda $b$.",
          "solution": "Langkah 1: Tuliskan suku-sukunya satu per satu, jangan langsung ke rumus.\n$U_1 = a$\n\nLangkah 2: Suku kedua diperoleh dengan menambah $b$ sekali.\n$U_2 = a + b$\n\nLangkah 3: Suku ketiga ditambah $b$ dua kali.\n$U_3 = a + 2b$\n\nLangkah 4: Suku keempat ditambah $b$ tiga kali.\n$U_4 = a + 3b$\n\nLangkah 5: Perhatikan polanya. Banyaknya $b$ yang ditambahkan selalu SATU KURANG dari nomor sukunya.\n$U_n = a + (n-1)b$\n\nLangkah 6: Periksa pada $n = 1$. Ini pemeriksaan yang paling penting.\n$U_1 = a + (1-1)b = a + 0 = a$ — cocok\n\nLangkah 7: Kekeliruan yang paling sering terjadi adalah menulis $U_n = a + nb$. Rumus itu memberi $U_1 = a + b$, padahal suku pertama belum ditambah apa pun.\n\nKesimpulan: $U_n = a + (n-1)b$, dan $(n-1)$-nya berasal dari suku pertama yang belum ditambah $b$."
        },
        {
          "problem": "Barisan aritmetika mempunyai $a = 7$ dan $b = 4$. Hitunglah $U_{15}$.",
          "solution": "Langkah 1: Tuliskan rumusnya.\n$U_n = a + (n-1)b$\n\nLangkah 2: Masukkan yang diketahui.\n$U_{15} = 7 + (15-1)(4)$\n\nLangkah 3: Kerjakan kurungnya dahulu.\n$15 - 1 = 14$\n\nLangkah 4: Kalikan.\n$14 \\times 4 = 56$\n\nLangkah 5: Jumlahkan.\n$U_{15} = 7 + 56 = 63$\n\nLangkah 6: Periksa kemasukakalannya dengan menghitung kasar. Dari suku ke-$1$ ke suku ke-$15$ ada $14$ langkah, masing-masing $4$, jadi naiknya sekitar $56$ dari $7$.\n\nLangkah 7: Kekeliruan yang sering terjadi adalah memakai $15 \\times 4 = 60$, sehingga jawabannya $67$ — satu langkah kelebihan.\n\nKesimpulan: $U_{15} = 63$."
        },
        {
          "problem": "Diketahui $U_3 = 11$ dan $U_7 = 27$. Tentukan $a$, $b$, dan $U_{10}$.",
          "solution": "Langkah 1: Perhatikan jarak antara kedua suku itu.\nDari suku ke-$3$ ke suku ke-$7$ ada $7 - 3 = 4$ langkah\n\nLangkah 2: Selama $4$ langkah nilainya naik sebanyak:\n$27 - 11 = 16$\n\nLangkah 3: Jadi setiap langkah naik:\n$b = \\frac{16}{4} = 4$\n\nLangkah 4: Sekarang mundur dari $U_3$ ke $U_1$, yaitu $2$ langkah ke belakang.\n$a = 11 - 2(4) = 11 - 8 = 3$\n\nLangkah 5: Periksa kedua suku yang diketahui.\n$U_3 = 3 + 2(4) = 11$ — cocok; $U_7 = 3 + 6(4) = 27$ — cocok\n\nLangkah 6: Hitung yang ditanyakan.\n$U_{10} = 3 + 9(4) = 3 + 36 = 39$\n\nLangkah 7: Periksa lewat jalan lain tanpa mencari $a$. Dari $U_7$ ke $U_{10}$ ada $3$ langkah.\n$27 + 3(4) = 39$ — cocok\n\nKesimpulan: $a = 3$, $b = 4$, dan $U_{10} = 39$."
        },
        {
          "problem": "Barisan aritmetika $40, 37, 34, \\dots$ Suku keberapakah yang bernilai $1$?",
          "solution": "Langkah 1: Tentukan $a$ dan $b$.\n$a = 40$ dan $b = 37 - 40 = -3$\n\nLangkah 2: Perhatikan bahwa bedanya NEGATIF, jadi barisannya menurun. Masuk akal bila suatu saat mencapai $1$.\n\nLangkah 3: Tuliskan persamaannya dengan $U_n = 1$.\n$40 + (n-1)(-3) = 1$\n\nLangkah 4: Jabarkan kurungnya.\n$40 - 3n + 3 = 1$\n\nLangkah 5: Rapikan.\n$43 - 3n = 1 \\Rightarrow 3n = 42 \\Rightarrow n = 14$\n\nLangkah 6: Periksa dengan memasukkannya kembali.\n$U_{14} = 40 + 13(-3) = 40 - 39 = 1$ — cocok\n\nLangkah 7: Perhatikan bahwa $n$ HARUS bilangan asli. Kalau perhitungan semacam ini menghasilkan pecahan, artinya bilangan itu bukan anggota barisannya sama sekali.\n\nKesimpulan: Bilangan $1$ adalah suku ke-$14$."
        },
        {
          "problem": "Kursi di gedung pertunjukan: baris pertama $20$ kursi, tiap baris berikutnya bertambah $3$. Berapa kursi di baris ke-$12$?",
          "solution": "Langkah 1: Kenali polanya. Bertambah tetap, jadi aritmetika.\n$a = 20$ dan $b = 3$\n\nLangkah 2: Tuliskan rumusnya.\n$U_{12} = 20 + (12-1)(3)$\n\nLangkah 3: Kerjakan kurungnya.\n$12 - 1 = 11$\n\nLangkah 4: Kalikan lalu jumlahkan.\n$11 \\times 3 = 33$, sehingga $U_{12} = 20 + 33 = 53$\n\nLangkah 5: Periksa dengan mendaftar beberapa baris awal dan akhirnya.\n$20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53$ — baris keduabelas memang $53$\n\nLangkah 6: Perhatikan bahwa daftar itu hanya dipakai untuk MEMERIKSA. Untuk baris ke-$200$, rumusnya tetap sama mudahnya sedangkan daftarnya tidak mungkin ditulis.\n\nLangkah 7: Kekeliruan yang sering terjadi adalah memakai $12 \\times 3 = 36$, sehingga jawabannya $56$ — itu jawaban untuk baris ke-$13$.\n\nKesimpulan: Baris ke-$12$ memuat $53$ kursi."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, sebuah barisan aritmetika diketahui $U_4 = 17$ dan $U_9 = 42$. Tentukan $a$ dan $b$, lalu tentukan suku keberapa yang bernilai $100$. Kalau jawabannya BUKAN bilangan asli, tuliskan apa artinya itu — jangan dibulatkan. Terakhir, buatlah sendiri satu barisan aritmetika yang memuat $100$ sebagai salah satu sukunya, dan tunjukkan suku keberapa.",
      "summary_data": {
        "summary": [
          "Barisan aritmetika bertambah dengan beda tetap: $b = U_2 - U_1 = U_3 - U_2 = \\dots$",
          "Suku ke-$n$-nya $U_n = a + (n-1)b$; yang ditambahkan $(n-1)$ kali $b$, bukan $n$ kali.",
          "$(n-1)$ berasal dari kenyataan bahwa suku pertama belum ditambah $b$ sama sekali; periksalah selalu dengan $n = 1$.",
          "Beda negatif berarti barisannya menurun, dan rumusnya tetap berlaku apa adanya.",
          "Dari dua suku yang diketahui, $b = \\frac{U_n - U_m}{n - m}$ — penyebutnya selisih NOMOR, bukan selisih nilai.",
          "Untuk mencari suku keberapa suatu bilangan, susun $U_n = $ bilangan itu lalu selesaikan; $n$ harus bilangan asli.",
          "Kalau $n$ yang diperoleh berupa pecahan, bilangan itu bukan anggota barisannya — jangan dibulatkan.",
          "Mendaftar sukunya berguna untuk MEMERIKSA, tetapi rumusnya yang membuat suku jauh dapat dihitung."
        ],
        "islamic": "Kemajuan yang tetap meski sedikit lebih dicintai daripada yang banyak lalu berhenti. \"Amalan yang paling dicintai Allah adalah yang terus-menerus walaupun sedikit.\" (HR. Bukhari dan Muslim)"
      },
      "collab_cases": [
        "Barisan aritmetika dengan $a = 9$ dan $b = 6$. Hitunglah $U_{20}$.",
        "Tentukan $U_{12}$ dari barisan $5, 11, 17, 23, \\dots$",
        "Diketahui $U_2 = 13$ dan $U_6 = 29$. Tentukan $a$, $b$, dan $U_{15}$.",
        "Pada barisan $50, 46, 42, \\dots$, suku keberapakah yang bernilai $2$?",
        "Gaji awal $Rp3.000.000$ dan naik $Rp150.000$ tiap tahun. Berapa gaji pada tahun ke-$10$?"
      ]
    },
    {
      "id": "P10",
      "bab": "Bab 2: Barisan dan Deret",
      "title": "Deret Aritmetika: Jumlah n Suku Pertama",
      "obj": [
        "Membedakan barisan (urutan sukunya) dari deret (jumlah sukunya), dan menuliskan $S_n$ dengan tepat.",
        "Menurunkan $S_n = \\frac{n}{2}(2a + (n-1)b)$ dengan cara Gauss, lalu memakainya pada soal.",
        "Memakai hubungan $U_n = S_n - S_{n-1}$ untuk menemukan suku dari rumus jumlahnya."
      ],
      "hook": "Konon Gauss kecil dihukum menjumlahkan $1$ sampai $100$. Ia selesai dalam hitungan detik: bukan dengan menjumlahkan satu per satu, melainkan dengan memasangkan $1$ dengan $100$, $2$ dengan $99$, dan seterusnya — lima puluh pasang yang masing-masing berjumlah $101$. Cara itu bukan kebetulan; ia bekerja pada SETIAP deret aritmetika, dan dari sanalah rumus pertemuan ini lahir.",
      "toolkit": [
        {
          "name": "Barisan dan Deret",
          "math": "$$\\text{barisan: } U_1, U_2, \\dots \\qquad \\text{deret: } U_1 + U_2 + \\dots$$"
        },
        {
          "name": "Jumlah n Suku (dari a dan b)",
          "math": "$$S_n = \\frac{n}{2}\\left(2a + (n-1)b\\right)$$"
        },
        {
          "name": "Jumlah n Suku (dari a dan U_n)",
          "math": "$$S_n = \\frac{n}{2}\\left(a + U_n\\right)$$"
        },
        {
          "name": "Suku dari Jumlah",
          "math": "$$U_n = S_n - S_{n-1}$$"
        },
        {
          "name": "Suku Pertama",
          "math": "$$U_1 = S_1$$"
        }
      ],
      "examples": [
        {
          "problem": "Tunjukkan cara Gauss menjumlahkan $1 + 2 + 3 + \\dots + 100$, lalu jelaskan mengapa caranya sah.",
          "solution": "Langkah 1: Tuliskan deretnya dua kali, yang kedua dibalik urutannya.\n$S = 1 + 2 + 3 + \\dots + 100$\n$S = 100 + 99 + 98 + \\dots + 1$\n\nLangkah 2: Jumlahkan kedua baris itu suku demi suku, dari kiri.\n$1 + 100 = 101$, $2 + 99 = 101$, $3 + 98 = 101$\n\nLangkah 3: Perhatikan mengapa setiap pasangan berjumlah sama. Ketika suku baris pertama naik $1$, suku baris kedua turun $1$ — jumlahnya tidak berubah.\n\nLangkah 4: Ada $100$ pasangan, masing-masing $101$.\n$2S = 100 \\times 101 = 10\\,100$\n\nLangkah 5: Jadi jumlah yang dicari adalah separuhnya.\n$S = \\frac{10\\,100}{2} = 5050$\n\nLangkah 6: Susun cara itu menjadi rumus umum. Baris pertama bersuku awal $a$, baris kedua bersuku awal $U_n$; tiap pasangan berjumlah $a + U_n$, dan ada $n$ pasangan.\n$2S_n = n(a + U_n) \\Rightarrow S_n = \\frac{n}{2}(a + U_n)$\n\nLangkah 7: Ganti $U_n$ dengan $a + (n-1)b$ untuk mendapatkan bentuk yang satunya.\n$S_n = \\frac{n}{2}\\left(2a + (n-1)b\\right)$\n\nKesimpulan: $1 + 2 + \\dots + 100 = 5050$, dan cara Gauss berlaku untuk setiap deret aritmetika."
        },
        {
          "problem": "Hitunglah jumlah $10$ suku pertama dari deret dengan $a = 3$ dan $b = 4$.",
          "solution": "Langkah 1: Tuliskan rumusnya.\n$S_n = \\frac{n}{2}\\left(2a + (n-1)b\\right)$\n\nLangkah 2: Masukkan yang diketahui.\n$S_{10} = \\frac{10}{2}\\left(2(3) + (10-1)(4)\\right)$\n\nLangkah 3: Kerjakan isi kurungnya lebih dahulu.\n$2(3) = 6$ dan $9 \\times 4 = 36$, sehingga isinya $6 + 36 = 42$\n\nLangkah 4: Kerjakan pecahan di depannya.\n$\\frac{10}{2} = 5$\n\nLangkah 5: Kalikan.\n$S_{10} = 5 \\times 42 = 210$\n\nLangkah 6: Periksa lewat rumus yang satunya. Suku ke-$10$-nya $U_{10} = 3 + 9(4) = 39$.\n$S_{10} = \\frac{10}{2}(3 + 39) = 5 \\times 42 = 210$ — cocok\n\nLangkah 7: Periksa sekali lagi dengan menjumlahkan apa adanya.\n$3+7+11+15+19+23+27+31+35+39 = 210$ — cocok\n\nKesimpulan: $S_{10} = 210$."
        },
        {
          "problem": "Hitunglah $2 + 5 + 8 + \\dots + 29$.",
          "solution": "Langkah 1: Perhatikan bahwa yang diketahui adalah suku TERAKHIRNYA, bukan banyaknya suku. Jadi cari dahulu ada berapa suku.\n$a = 2$ dan $b = 3$\n\nLangkah 2: Susun persamaan dengan $U_n = 29$.\n$2 + (n-1)(3) = 29$\n\nLangkah 3: Selesaikan.\n$(n-1)(3) = 27 \\Rightarrow n - 1 = 9 \\Rightarrow n = 10$\n\nLangkah 4: Jadi ada $10$ suku. Sekarang pakai rumus yang memuat suku terakhir.\n$S_{10} = \\frac{10}{2}(2 + 29)$\n\nLangkah 5: Hitung.\n$S_{10} = 5 \\times 31 = 155$\n\nLangkah 6: Periksa lewat rumus yang satunya.\n$S_{10} = \\frac{10}{2}\\left(2(2) + 9(3)\\right) = 5(4 + 27) = 5 \\times 31 = 155$ — cocok\n\nLangkah 7: Kekeliruan yang paling sering terjadi adalah langsung memakai $n = 29$, seolah banyaknya suku sama dengan suku terakhirnya. Itu memberi jawaban ribuan — jauh meleset.\n\nKesimpulan: $2 + 5 + 8 + \\dots + 29 = 155$."
        },
        {
          "problem": "Diketahui $S_n = n^2 + 2n$. Tentukan $U_5$.",
          "solution": "Langkah 1: Ingat hubungannya. Jumlah sampai suku ke-$5$ dikurangi jumlah sampai suku ke-$4$ menyisakan suku ke-$5$ saja.\n$U_5 = S_5 - S_4$\n\nLangkah 2: Hitung $S_5$.\n$S_5 = 5^2 + 2(5) = 25 + 10 = 35$\n\nLangkah 3: Hitung $S_4$.\n$S_4 = 4^2 + 2(4) = 16 + 8 = 24$\n\nLangkah 4: Kurangkan.\n$U_5 = 35 - 24 = 11$\n\nLangkah 5: Periksa dengan mencari rumus sukunya. Hitung beberapa $S_n$ lalu selisihkan.\n$S_1 = 3$, $S_2 = 8$, $S_3 = 15$, $S_4 = 24$, $S_5 = 35$\n\nLangkah 6: Selisih berurutannya adalah sukunya sendiri.\n$U_1 = 3$, $U_2 = 5$, $U_3 = 7$, $U_4 = 9$, $U_5 = 11$ — cocok, dan barisannya aritmetika dengan $b = 2$\n\nLangkah 7: Kekeliruan yang sering terjadi adalah memasukkan $n = 5$ ke rumus $S_n$ lalu menyebutnya $U_5$. Nilai $35$ itu JUMLAH lima suku pertama, bukan suku kelimanya.\n\nKesimpulan: $U_5 = 11$."
        },
        {
          "problem": "Hitunglah jumlah $20$ suku pertama dari $5, 2, -1, -4, \\dots$",
          "solution": "Langkah 1: Tentukan $a$ dan $b$.\n$a = 5$ dan $b = 2 - 5 = -3$\n\nLangkah 2: Bedanya negatif, jadi sukunya menurun dan lama-kelamaan menjadi negatif. Jumlahnya pun mungkin negatif — itu wajar.\n\nLangkah 3: Masukkan ke rumusnya.\n$S_{20} = \\frac{20}{2}\\left(2(5) + (20-1)(-3)\\right)$\n\nLangkah 4: Kerjakan isi kurungnya.\n$2(5) = 10$ dan $19 \\times (-3) = -57$, sehingga isinya $10 - 57 = -47$\n\nLangkah 5: Kalikan dengan $\\frac{20}{2} = 10$.\n$S_{20} = 10 \\times (-47) = -470$\n\nLangkah 6: Periksa lewat rumus yang satunya. Suku ke-$20$-nya $U_{20} = 5 + 19(-3) = -52$.\n$S_{20} = \\frac{20}{2}(5 + (-52)) = 10 \\times (-47) = -470$ — cocok\n\nLangkah 7: Periksa kemasukakalannya. Suku-sukunya berkisar dari $5$ sampai $-52$, rata-ratanya sekitar $-23{,}5$; dikalikan $20$ suku memberi sekitar $-470$.\n\nKesimpulan: $S_{20} = -470$."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, hitunglah $1 + 2 + 3 + \\dots + 50$ dengan cara Gauss — tuliskan pasangannya, jangan langsung memakai rumus. Lalu hitung $1 + 2 + \\dots + 49$, yang banyak sukunya GANJIL. Apa yang terjadi pada cara memasangkan tadi, dan bagaimana kalian mengatasinya? Terakhir, tuliskan apakah rumus $S_n = \\frac{n}{2}(a + U_n)$ tetap berlaku untuk banyak suku ganjil, dan tunjukkan buktinya dengan angka.",
      "summary_data": {
        "summary": [
          "Barisan adalah urutan sukunya; deret adalah JUMLAH sukunya. $S_n$ berarti jumlah $n$ suku pertama.",
          "$S_n = \\frac{n}{2}\\left(2a + (n-1)b\\right)$ dipakai bila yang diketahui $a$ dan $b$.",
          "$S_n = \\frac{n}{2}(a + U_n)$ dipakai bila yang diketahui suku pertama dan suku terakhirnya.",
          "Kedua rumus itu satu benda yang sama; pilihannya hanya soal apa yang sudah diketahui.",
          "Cara Gauss bekerja karena ketika satu suku naik, pasangannya turun sebanyak yang sama.",
          "Bila yang diketahui suku TERAKHIR, cari dahulu banyaknya suku dengan $U_n = a + (n-1)b$ — jangan memakai nilai suku terakhir sebagai $n$.",
          "$U_n = S_n - S_{n-1}$; nilai $S_5$ adalah jumlah lima suku, bukan suku kelima.",
          "$S_n$ boleh bernilai negatif bila bedanya negatif dan sukunya banyak."
        ],
        "islamic": "Yang sedikit bila dikumpulkan menjadi banyak. \"Barangsiapa mengerjakan kebaikan seberat zarrah pun, niscaya dia akan melihat balasannya.\" (QS. Az-Zalzalah: 7)"
      },
      "collab_cases": [
        "Hitunglah $S_{12}$ dari deret dengan $a = 4$ dan $b = 5$.",
        "Hitunglah $3 + 7 + 11 + \\dots + 43$.",
        "Diketahui $S_n = 2n^2 + n$. Tentukan $U_4$.",
        "Hitunglah jumlah $15$ suku pertama dari $30, 27, 24, \\dots$",
        "Baris kursi: baris pertama $18$ kursi, bertambah $4$ tiap baris, ada $10$ baris. Berapa kursi seluruhnya?"
      ]
    },
    {
      "id": "P11",
      "bab": "Bab 2: Barisan dan Deret",
      "title": "Barisan Geometri: Menentukan Suku ke-n",
      "obj": [
        "Menurunkan rumus $U_n = a r^{n-1}$ dari arti barisan geometri, dan membedakannya dari barisan aritmetika.",
        "Menghitung suku ke-$n$ barisan geometri, termasuk untuk rasio berupa pecahan.",
        "Menentukan $a$ dan $r$ dari dua suku yang diketahui, serta menyisipkan bilangan agar terbentuk barisan geometri."
      ],
      "hook": "Selembar kertas dilipat dua: $1$ lapis menjadi $2$, lalu $4$, lalu $8$. Sebuah zat radioaktif justru sebaliknya: $80$ mg menjadi $40$, lalu $20$, lalu $10$. Keduanya tampak berlawanan, tetapi bentuknya sama persis — setiap langkah nilainya DIKALIKAN dengan bilangan yang tetap. Pada yang pertama pengalinya $2$, pada yang kedua $\\frac{1}{2}$.",
      "toolkit": [
        {
          "name": "Rasio",
          "math": "$$r = \\frac{U_2}{U_1} = \\frac{U_3}{U_2} = \\dots$$"
        },
        {
          "name": "Suku ke-n",
          "math": "$$U_n = a \\cdot r^{\\,n-1}$$"
        },
        {
          "name": "Mengapa $(n-1)$",
          "math": "$$U_1 \\text{ belum dikalikan } r \\text{ sama sekali}$$"
        },
        {
          "name": "Dua Suku Diketahui",
          "math": "$$\\frac{U_n}{U_m} = r^{\\,n-m}$$"
        },
        {
          "name": "Rasio Pecahan",
          "math": "$$0 < r < 1 \\Rightarrow \\text{barisannya mengecil}$$"
        }
      ],
      "examples": [
        {
          "problem": "Turunkan rumus $U_n$ untuk barisan geometri dengan suku pertama $a$ dan rasio $r$.",
          "solution": "Langkah 1: Tuliskan suku-sukunya satu per satu.\n$U_1 = a$\n\nLangkah 2: Suku kedua diperoleh dengan mengalikan $r$ sekali.\n$U_2 = a r$\n\nLangkah 3: Suku ketiga dikalikan $r$ dua kali.\n$U_3 = a r^2$\n\nLangkah 4: Suku keempat dikalikan $r$ tiga kali.\n$U_4 = a r^3$\n\nLangkah 5: Perhatikan polanya. Banyaknya $r$ selalu SATU KURANG dari nomor sukunya.\n$U_n = a r^{\\,n-1}$\n\nLangkah 6: Periksa pada $n = 1$.\n$U_1 = a r^{0} = a \\cdot 1 = a$ — cocok\n\nLangkah 7: Bandingkan dengan barisan aritmetika. Di sana $(n-1)$ kali $b$ DITAMBAHKAN; di sini $(n-1)$ kali $r$ DIKALIKAN. Letak $(n-1)$-nya sama, perannya berbeda.\n\nKesimpulan: $U_n = a r^{\\,n-1}$."
        },
        {
          "problem": "Tentukan $U_8$ dari barisan $3, 6, 12, 24, \\dots$",
          "solution": "Langkah 1: Uji jenisnya. Periksa selisihnya dahulu.\n$6-3 = 3$ tetapi $12-6 = 6$ — tidak tetap, jadi bukan aritmetika\n\nLangkah 2: Periksa perbandingannya.\n$\\frac{6}{3} = 2$, $\\frac{12}{6} = 2$, $\\frac{24}{12} = 2$ — tetap, jadi geometri dengan $r = 2$\n\nLangkah 3: Masukkan ke rumusnya.\n$U_8 = 3 \\cdot 2^{8-1} = 3 \\cdot 2^{7}$\n\nLangkah 4: Hitung pemangkatannya lebih dahulu.\n$2^7 = 128$\n\nLangkah 5: Kalikan.\n$U_8 = 3 \\times 128 = 384$\n\nLangkah 6: Periksa dengan mendaftar barisannya.\n$3, 6, 12, 24, 48, 96, 192, 384$ — suku kedelapannya memang $384$\n\nLangkah 7: Kekeliruan yang sering terjadi adalah memakai $2^8 = 256$, sehingga jawabannya $768$ — itu $U_9$.\n\nKesimpulan: $U_8 = 384$."
        },
        {
          "problem": "Tentukan $U_8$ dari barisan $64, 32, 16, \\dots$",
          "solution": "Langkah 1: Uji perbandingannya.\n$\\frac{32}{64} = \\frac{1}{2}$ dan $\\frac{16}{32} = \\frac{1}{2}$ — tetap, jadi geometri dengan $r = \\frac{1}{2}$\n\nLangkah 2: Perhatikan bahwa $0 < r < 1$, jadi barisannya MENGECIL. Jawabannya harus jauh lebih kecil dari $64$.\n\nLangkah 3: Masukkan ke rumusnya.\n$U_8 = 64 \\cdot \\left(\\frac{1}{2}\\right)^{7}$\n\nLangkah 4: Hitung pemangkatannya.\n$\\left(\\frac{1}{2}\\right)^{7} = \\frac{1}{128}$\n\nLangkah 5: Kalikan.\n$U_8 = \\frac{64}{128} = \\frac{1}{2}$\n\nLangkah 6: Periksa dengan mendaftar barisannya.\n$64, 32, 16, 8, 4, 2, 1, \\frac{1}{2}$ — suku kedelapannya memang $\\frac{1}{2}$\n\nLangkah 7: Perhatikan bahwa sukunya tidak pernah mencapai nol, hanya makin mendekat. Sifat inilah yang nanti melahirkan deret tak hingga.\n\nKesimpulan: $U_8 = \\frac{1}{2}$."
        },
        {
          "problem": "Diketahui barisan geometri dengan $U_2 = 6$ dan $U_5 = 48$. Tentukan $a$, $r$, dan $U_7$.",
          "solution": "Langkah 1: Bagi kedua suku yang diketahui. Yang tidak diketahui, yaitu $a$, akan saling menghapus.\n$\\frac{U_5}{U_2} = \\frac{a r^{4}}{a r^{1}} = r^{3}$\n\nLangkah 2: Masukkan angkanya.\n$\\frac{48}{6} = 8$, jadi $r^{3} = 8$\n\nLangkah 3: Tarik akar pangkat tiga.\n$r = 2$\n\nLangkah 4: Cari $a$ dari $U_2$.\n$U_2 = a r = 6 \\Rightarrow 2a = 6 \\Rightarrow a = 3$\n\nLangkah 5: Periksa kedua suku yang diketahui.\n$U_2 = 3(2) = 6$ — cocok; $U_5 = 3 \\cdot 2^4 = 48$ — cocok\n\nLangkah 6: Hitung yang ditanyakan.\n$U_7 = 3 \\cdot 2^{6} = 3 \\times 64 = 192$\n\nLangkah 7: Periksa lewat jalan lain tanpa mencari $a$. Dari $U_5$ ke $U_7$ ada $2$ langkah, jadi dikalikan $2^2 = 4$.\n$48 \\times 4 = 192$ — cocok\n\nKesimpulan: $a = 3$, $r = 2$, dan $U_7 = 192$."
        },
        {
          "problem": "Sisipkan tiga bilangan di antara $3$ dan $48$ sehingga terbentuk barisan geometri. Tentukan bilangan-bilangan itu.",
          "solution": "Langkah 1: Gambarkan susunannya. Tiga bilangan disisipkan, jadi seluruhnya menjadi lima suku.\n$3, \\_\\_, \\_\\_, \\_\\_, 48$\n\nLangkah 2: Jadi $3$ adalah $U_1$ dan $48$ adalah $U_5$.\n\nLangkah 3: Bagi keduanya.\n$\\frac{U_5}{U_1} = r^{4} = \\frac{48}{3} = 16$\n\nLangkah 4: Tarik akar pangkat empat.\n$r = 2$\n\nLangkah 5: Bangun barisannya dengan mengalikan $2$ berulang.\n$3, 6, 12, 24, 48$\n\nLangkah 6: Jadi bilangan yang disisipkan adalah $6$, $12$, dan $24$.\n\nLangkah 7: Periksa perbandingannya sekali lagi.\n$\\frac{6}{3} = \\frac{12}{6} = \\frac{24}{12} = \\frac{48}{24} = 2$ — seluruhnya tetap\n\nLangkah 8: Kekeliruan yang sering terjadi ada di Langkah 3: menulis $r^3 = 16$ karena menghitung banyaknya bilangan yang disisipkan alih-alih jarak nomornya. Jarak dari $U_1$ ke $U_5$ adalah $4$, bukan $3$.\n\nKesimpulan: Bilangan yang disisipkan adalah $6$, $12$, dan $24$."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, bandingkan dua barisan berikut sampai suku ke-$10$ — tuliskan keduanya penuh. Barisan A aritmetika: $a = 100$, $b = 50$. Barisan B geometri: $a = 2$, $r = 2$. Pada suku keberapa barisan B mulai melampaui barisan A? Tuliskan juga nilai kedua barisan pada suku ke-$20$ (boleh ditaksir untuk yang geometri). Terakhir: jelaskan mengapa barisan B pasti menyusul, betapa pun besar suku pertama barisan A.",
      "summary_data": {
        "summary": [
          "Barisan geometri tumbuh dengan DIKALIKAN rasio tetap: $r = \\frac{U_2}{U_1} = \\frac{U_3}{U_2} = \\dots$",
          "Suku ke-$n$-nya $U_n = a r^{\\,n-1}$; pangkatnya $(n-1)$ sebab suku pertama belum dikalikan $r$ sama sekali.",
          "Uji jenis barisan dengan dua langkah: periksa selisihnya (aritmetika) lalu perbandingannya (geometri).",
          "Rasio antara $0$ dan $1$ membuat barisannya mengecil, tetapi tidak pernah mencapai nol.",
          "Dari dua suku yang diketahui, $\\frac{U_n}{U_m} = r^{\\,n-m}$ — pangkatnya selisih NOMOR sukunya.",
          "Menyisipkan $k$ bilangan di antara dua bilangan membuat jarak nomornya menjadi $k+1$, bukan $k$.",
          "Kerjakan pemangkatan sebelum perkalian: pada $3 \\cdot 2^{7}$ yang dipangkatkan hanya $2$.",
          "Barisan geometri dengan $r > 1$ pada akhirnya selalu melampaui barisan aritmetika mana pun."
        ],
        "islamic": "Kebaikan dapat berlipat jauh melebihi yang dikira. \"Allah melipatgandakan (ganjaran) bagi siapa yang Dia kehendaki.\" (QS. Al-Baqarah: 261)"
      },
      "collab_cases": [
        "Tentukan $U_7$ dari barisan $2, 6, 18, 54, \\dots$",
        "Barisan geometri dengan $a = 5$ dan $r = 2$. Hitunglah $U_9$.",
        "Tentukan $U_6$ dari barisan $81, 27, 9, \\dots$",
        "Diketahui $U_3 = 20$ dan $U_6 = 160$. Tentukan $a$, $r$, dan $U_8$.",
        "Sisipkan dua bilangan di antara $5$ dan $135$ agar terbentuk barisan geometri."
      ]
    },
    {
      "id": "P12",
      "bab": "Bab 2: Barisan dan Deret",
      "title": "Deret Geometri dan Deret Geometri Tak Hingga",
      "obj": [
        "Memakai $S_n = \\frac{a(r^n - 1)}{r - 1}$ untuk menghitung jumlah $n$ suku pertama deret geometri.",
        "Menjelaskan syarat $|r| < 1$ agar deret tak hingga mempunyai jumlah, lalu memakai $S_\\infty = \\frac{a}{1-r}$.",
        "Menerapkan deret tak hingga pada masalah nyata, termasuk mengubah desimal berulang menjadi pecahan."
      ],
      "hook": "Sebuah bola dijatuhkan dari ketinggian $10$ m dan tiap kali memantul $\\frac{3}{5}$ dari ketinggian sebelumnya. Secara matematis ia memantul TAK TERHINGGA kali. Namun jarak yang ditempuhnya bukan tak terhingga — ia berhenti tepat di $40$ m. Bagaimana penjumlahan tak berhingga suku bisa berhenti pada bilangan yang terbatas? Pertemuan ini menjawabnya.",
      "toolkit": [
        {
          "name": "Jumlah n Suku",
          "math": "$$S_n = \\frac{a\\left(r^{n} - 1\\right)}{r - 1}, \\quad r \\neq 1$$"
        },
        {
          "name": "Bentuk Lain yang Setara",
          "math": "$$S_n = \\frac{a\\left(1 - r^{n}\\right)}{1 - r}$$"
        },
        {
          "name": "Syarat Deret Tak Hingga",
          "math": "$$|r| < 1 \\quad \\text{(konvergen)}$$"
        },
        {
          "name": "Jumlah Tak Hingga",
          "math": "$$S_\\infty = \\frac{a}{1 - r}$$"
        },
        {
          "name": "Bola Memantul",
          "math": "$$\\text{jarak} = h + 2 \\cdot \\frac{hr}{1-r}$$"
        }
      ],
      "examples": [
        {
          "problem": "Hitunglah jumlah $6$ suku pertama deret geometri dengan $a = 2$ dan $r = 3$.",
          "solution": "Langkah 1: Tuliskan rumusnya. Karena $r > 1$, bentuk $\\frac{a(r^n - 1)}{r - 1}$ paling nyaman sebab pembilang dan penyebutnya positif.\n$S_n = \\frac{a\\left(r^{n} - 1\\right)}{r - 1}$\n\nLangkah 2: Masukkan yang diketahui.\n$S_6 = \\frac{2\\left(3^{6} - 1\\right)}{3 - 1}$\n\nLangkah 3: Hitung pemangkatannya.\n$3^6 = 729$\n\nLangkah 4: Kerjakan kurungnya.\n$729 - 1 = 728$\n\nLangkah 5: Masukkan lalu sederhanakan.\n$S_6 = \\frac{2 \\times 728}{2} = 728$\n\nLangkah 6: Periksa dengan menjumlahkan apa adanya.\n$2 + 6 + 18 + 54 + 162 + 486 = 728$ — cocok\n\nLangkah 7: Kekeliruan yang sering terjadi adalah memakai $3^5$ karena terbawa rumus suku ke-$n$. Pada rumus JUMLAH, pangkatnya $n$ — bukan $n-1$.\n\nKesimpulan: $S_6 = 728$."
        },
        {
          "problem": "Hitunglah $64 + 32 + 16 + \\dots$ sampai $8$ suku.",
          "solution": "Langkah 1: Tentukan $a$ dan $r$.\n$a = 64$ dan $r = \\frac{32}{64} = \\frac{1}{2}$\n\nLangkah 2: Karena $r < 1$, pakai bentuk $\\frac{a(1 - r^n)}{1 - r}$ supaya tidak berurusan dengan tanda negatif.\n$S_8 = \\frac{64\\left(1 - \\left(\\frac{1}{2}\\right)^{8}\\right)}{1 - \\frac{1}{2}}$\n\nLangkah 3: Hitung pemangkatannya.\n$\\left(\\frac{1}{2}\\right)^{8} = \\frac{1}{256}$\n\nLangkah 4: Kerjakan kurungnya.\n$1 - \\frac{1}{256} = \\frac{255}{256}$\n\nLangkah 5: Kerjakan penyebutnya lalu bagi. Membagi dengan $\\frac{1}{2}$ sama dengan mengalikan $2$.\n$S_8 = 64 \\times \\frac{255}{256} \\times 2 = \\frac{255}{2}$\n\nLangkah 6: Tuliskan sebagai desimal supaya mudah diperiksa.\n$S_8 = 127{,}5$\n\nLangkah 7: Periksa dengan menjumlahkan apa adanya.\n$64+32+16+8+4+2+1+\\frac{1}{2} = 127{,}5$ — cocok\n\nLangkah 8: Perhatikan bahwa jumlahnya sudah mendekati $128$ dan tidak akan pernah melampauinya, berapa pun suku ditambahkan. Inilah yang membuka gagasan deret tak hingga.\n\nKesimpulan: $S_8 = \\frac{255}{2} = 127{,}5$."
        },
        {
          "problem": "Hitunglah $8 + 4 + 2 + 1 + \\dots$ jika diteruskan tak terhingga, lalu jelaskan mengapa jumlahnya terbatas.",
          "solution": "Langkah 1: Tentukan $a$ dan $r$.\n$a = 8$ dan $r = \\frac{4}{8} = \\frac{1}{2}$\n\nLangkah 2: Periksa syaratnya. Karena $\\left|\\frac{1}{2}\\right| < 1$, deretnya konvergen — jumlahnya ada.\n\nLangkah 3: Masukkan ke rumusnya.\n$S_\\infty = \\frac{a}{1-r} = \\frac{8}{1 - \\frac{1}{2}}$\n\nLangkah 4: Kerjakan penyebutnya.\n$1 - \\frac{1}{2} = \\frac{1}{2}$\n\nLangkah 5: Bagi. Membagi dengan $\\frac{1}{2}$ sama dengan mengalikan $2$.\n$S_\\infty = 8 \\times 2 = 16$\n\nLangkah 6: Periksa dengan menjumlahkan beberapa suku.\n$8 = 8$; $8+4 = 12$; $+2 = 14$; $+1 = 15$; $+\\frac{1}{2} = 15{,}5$; $+\\frac{1}{4} = 15{,}75$\n\nLangkah 7: Perhatikan polanya. Setiap suku baru menutup SEPARUH dari jarak yang tersisa menuju $16$ — jadi jumlahnya makin dekat ke $16$ tetapi tidak pernah melewatinya.\n\nLangkah 8: Itulah sebabnya jumlahnya terbatas. Sukunya mengecil begitu cepat sehingga seluruh ekornya pun tidak cukup untuk melampaui $16$.\n\nKesimpulan: $S_\\infty = 16$."
        },
        {
          "problem": "Bola dijatuhkan dari ketinggian $10$ m dan tiap kali memantul $\\frac{3}{5}$ dari ketinggian sebelumnya. Hitunglah panjang seluruh lintasannya.",
          "solution": "Langkah 1: Pisahkan lintasannya menjadi dua bagian. Turun pertama terjadi SEKALI saja.\nTurun pertama $= 10$ m\n\nLangkah 2: Setelah itu, setiap pantulan berarti naik lalu turun pada ketinggian yang sama. Jadi tiap ketinggian pantulan dihitung DUA kali.\n\nLangkah 3: Ketinggian pantulan pertamanya.\n$10 \\times \\frac{3}{5} = 6$ m\n\nLangkah 4: Ketinggian pantulan berikutnya membentuk deret geometri dengan $a = 6$ dan $r = \\frac{3}{5}$.\n$S_\\infty = \\frac{6}{1 - \\frac{3}{5}} = \\frac{6}{\\frac{2}{5}} = 6 \\times \\frac{5}{2} = 15$ m\n\nLangkah 5: Karena tiap ketinggian dilalui dua kali, kalikan dua.\n$2 \\times 15 = 30$ m\n\nLangkah 6: Jumlahkan dengan turun pertamanya.\n$10 + 30 = 40$ m\n\nLangkah 7: Periksa kemasukakalannya. Lintasannya harus lebih dari $10$ m tetapi tidak mungkin tak terhingga, sebab pantulannya mengecil cepat. Nilai $40$ m masuk akal.\n\nLangkah 8: Kekeliruan yang paling sering terjadi adalah mengalikan SELURUHNYA dengan dua, sehingga jawabannya $50$ m. Turun pertama tidak boleh dihitung dua kali — bolanya tidak pernah naik $10$ m.\n\nKesimpulan: Panjang seluruh lintasannya $40$ m."
        },
        {
          "problem": "Ubahlah $0{,}272727\\dots$ menjadi bentuk pecahan biasa dengan memakai deret tak hingga.",
          "solution": "Langkah 1: Uraikan desimalnya sebagai penjumlahan.\n$0{,}272727\\dots = 0{,}27 + 0{,}0027 + 0{,}000027 + \\dots$\n\nLangkah 2: Tuliskan setiap suku sebagai pecahan.\n$\\frac{27}{100} + \\frac{27}{10\\,000} + \\frac{27}{1\\,000\\,000} + \\dots$\n\nLangkah 3: Uji perbandingannya untuk memastikan ia geometri.\n$\\frac{27/10\\,000}{27/100} = \\frac{1}{100}$ — tetap, jadi $r = \\frac{1}{100}$\n\nLangkah 4: Periksa syaratnya. Karena $\\frac{1}{100} < 1$, deretnya konvergen.\n\nLangkah 5: Masukkan ke rumusnya dengan $a = \\frac{27}{100}$.\n$S_\\infty = \\frac{\\frac{27}{100}}{1 - \\frac{1}{100}} = \\frac{\\frac{27}{100}}{\\frac{99}{100}}$\n\nLangkah 6: Bagi pecahan dengan pecahan.\n$\\frac{27}{100} \\times \\frac{100}{99} = \\frac{27}{99}$\n\nLangkah 7: Sederhanakan dengan membagi $9$.\n$\\frac{27}{99} = \\frac{3}{11}$\n\nLangkah 8: Periksa dengan pembagian biasa.\n$3 \\div 11 = 0{,}272727\\dots$ — cocok\n\nKesimpulan: $0{,}272727\\dots = \\frac{3}{11}$."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, hitunglah $S_\\infty$ dari $9 + 3 + 1 + \\frac{1}{3} + \\dots$ Lalu coba pakai rumus yang sama pada deret $2 + 4 + 8 + 16 + \\dots$ — tuliskan angka yang keluar dari rumusnya. Jumlah deret itu jelas membesar tanpa batas, jadi angka yang kalian dapat itu TIDAK sah. Jelaskan di papan: syarat apa yang dilanggar, dan mengapa rumus tetap memberi angka meski syaratnya dilanggar?",
      "summary_data": {
        "summary": [
          "$S_n = \\frac{a(r^{n} - 1)}{r - 1}$ untuk $r \\neq 1$; pangkatnya $n$, bukan $n-1$ seperti pada rumus suku ke-$n$.",
          "Bentuk $\\frac{a(1 - r^{n})}{1 - r}$ setara, dan lebih nyaman ketika $r < 1$.",
          "Deret tak hingga punya jumlah HANYA bila $|r| < 1$; di luar syarat itu jumlahnya membesar tanpa batas.",
          "$S_\\infty = \\frac{a}{1-r}$, dan rumus ini akan tetap mengeluarkan angka meski syaratnya dilanggar — angka itu tidak sah.",
          "Jumlah tak hingga bisa terbatas karena sukunya mengecil begitu cepat sehingga seluruh ekornya tidak cukup melampaui suatu nilai.",
          "Pada bola memantul, turun pertama dihitung SEKALI sedangkan tiap ketinggian pantulan dihitung DUA kali.",
          "Desimal berulang dapat diubah menjadi pecahan dengan menguraikannya sebagai deret geometri.",
          "Periksa selalu dengan menjumlahkan beberapa suku pertama; jumlah parsialnya harus mendekati jawaban dan tidak melampauinya."
        ],
        "islamic": "Yang berkurang sedikit-sedikit pun ada batas akhirnya. \"Dan segala sesuatu pada-Nya ada ketentuan.\" (QS. Ar-Ra'd: 8)"
      },
      "collab_cases": [
        "Hitunglah jumlah $5$ suku pertama deret geometri dengan $a = 3$ dan $r = 2$.",
        "Hitunglah $81 + 27 + 9 + \\dots$ sampai $4$ suku.",
        "Hitunglah $S_\\infty$ dari $20 + 10 + 5 + \\dots$",
        "Hitunglah $S_\\infty$ dari $12 + 8 + \\frac{16}{3} + \\dots$",
        "Ubahlah $0{,}444\\dots$ menjadi pecahan biasa dengan memakai deret tak hingga."
      ]
    },
    {
      "id": "P13",
      "bab": "Bab 2: Barisan dan Deret",
      "title": "Penerapan Barisan dan Deret pada Masalah Nyata",
      "obj": [
        "Memutuskan apakah suatu keadaan nyata berpola aritmetika atau geometri, dari kata kunci pada soalnya.",
        "Memilih rumus yang tepat: suku ke-$n$ bila yang dicari keadaan pada satu saat, jumlah bila yang dicari totalnya.",
        "Menerjemahkan keterangan waktu menjadi nomor suku dengan benar, termasuk membedakan \"mula-mula\" dari \"setelah $n$ periode\"."
      ],
      "hook": "Dua tawaran kerja. Yang pertama: gaji $Rp3$ juta, naik $Rp200$ ribu setiap tahun. Yang kedua: gaji $Rp2$ juta, naik $8\\%$ setiap tahun. Mana yang lebih menguntungkan? Jawabannya bergantung pada berapa lama Anda bertahan — dan seluruh perhitungannya memakai dua rumus yang sudah kita punya. Pertemuan ini tentang mengenali rumus mana yang dipakai, sebab di soal nyata tidak ada yang menuliskannya untuk kita.",
      "toolkit": [
        {
          "name": "Kata Kunci Aritmetika",
          "math": "$$\\text{\"bertambah/berkurang } p \\text{ setiap ...\"}$$"
        },
        {
          "name": "Kata Kunci Geometri",
          "math": "$$\\text{\"menjadi } k \\text{ kali\", \"naik } p\\% \\text{ setiap ...\"}$$"
        },
        {
          "name": "Satu Saat atau Total",
          "math": "$$\\text{satu saat} \\to U_n, \\qquad \\text{total} \\to S_n$$"
        },
        {
          "name": "Persen Menjadi Rasio",
          "math": "$$\\text{naik } p\\% \\Rightarrow r = 1 + \\frac{p}{100}$$"
        },
        {
          "name": "Nomor Suku",
          "math": "$$\\text{mula-mula} = U_1 \\Rightarrow \\text{setelah } n \\text{ periode} = U_{n+1}$$"
        }
      ],
      "examples": [
        {
          "problem": "Gaji awal seorang pegawai $Rp3.000.000$ dan naik $Rp200.000$ setiap tahun. Berapa gajinya pada tahun ke-$8$?",
          "solution": "Langkah 1: Kenali polanya dari kata kuncinya. \"Naik $Rp200.000$ setiap tahun\" berarti BERTAMBAH TETAP — jadi aritmetika.\n$a = 3.000.000$ dan $b = 200.000$\n\nLangkah 2: Yang ditanyakan gaji pada SATU tahun tertentu, bukan total sepanjang karier. Jadi yang dipakai $U_n$, bukan $S_n$.\n\nLangkah 3: Tahun pertama adalah $U_1$, jadi tahun ke-$8$ adalah $U_8$.\n$U_8 = 3.000.000 + (8-1)(200.000)$\n\nLangkah 4: Kerjakan kurungnya lalu kalikan.\n$7 \\times 200.000 = 1.400.000$\n\nLangkah 5: Jumlahkan.\n$U_8 = 3.000.000 + 1.400.000 = 4.400.000$\n\nLangkah 6: Periksa dengan mendaftar.\n$3{,}0$ — $3{,}2$ — $3{,}4$ — $3{,}6$ — $3{,}8$ — $4{,}0$ — $4{,}2$ — $4{,}4$ (dalam juta) — tahun kedelapan memang $4{,}4$ juta\n\nLangkah 7: Kekeliruan yang sering terjadi adalah memakai $8 \\times 200.000$, sehingga jawabannya $4.600.000$. Kenaikan pertama baru terjadi pada tahun KEDUA, jadi sampai tahun ke-$8$ hanya ada $7$ kenaikan.\n\nKesimpulan: Gaji pada tahun ke-$8$ adalah $Rp4.400.000$."
        },
        {
          "problem": "Produksi pabrik bulan pertama $120$ unit dan bertambah $15$ unit setiap bulan. Berapa produksi seluruhnya selama $10$ bulan pertama?",
          "solution": "Langkah 1: Kenali polanya. \"Bertambah $15$ setiap bulan\" berarti aritmetika.\n$a = 120$ dan $b = 15$\n\nLangkah 2: Yang ditanyakan SELURUHNYA selama $10$ bulan, jadi yang dipakai $S_n$ — bukan $U_n$.\n\nLangkah 3: Masukkan ke rumus jumlah.\n$S_{10} = \\frac{10}{2}\\left(2(120) + (10-1)(15)\\right)$\n\nLangkah 4: Kerjakan isi kurungnya.\n$240 + 135 = 375$\n\nLangkah 5: Kalikan dengan $\\frac{10}{2} = 5$.\n$S_{10} = 5 \\times 375 = 1875$ unit\n\nLangkah 6: Periksa lewat rumus yang satunya. Produksi bulan ke-$10$ adalah $U_{10} = 120 + 9(15) = 255$.\n$S_{10} = \\frac{10}{2}(120 + 255) = 5 \\times 375 = 1875$ — cocok\n\nLangkah 7: Periksa kemasukakalannya. Produksinya berkisar $120$ sampai $255$, rata-rata sekitar $187{,}5$; dikalikan $10$ bulan memberi $1875$.\n\nLangkah 8: Kekeliruan yang sering terjadi adalah menjawab $255$, yaitu produksi bulan ke-$10$ saja — padahal yang diminta totalnya.\n\nKesimpulan: Produksi seluruhnya $1875$ unit."
        },
        {
          "problem": "Nilai sebuah mesin $Rp50.000.000$ dan menyusut $20\\%$ setiap tahun. Berapa nilainya setelah $3$ tahun?",
          "solution": "Langkah 1: Kenali polanya. \"Menyusut $20\\%$ setiap tahun\" berarti dikalikan bilangan yang tetap — jadi geometri, bukan aritmetika.\n\nLangkah 2: Ubah persennya menjadi rasio. Menyusut berarti yang TERSISA $80\\%$.\n$r = 1 - 0{,}2 = 0{,}8$\n\nLangkah 3: Tentukan nomor sukunya. Keadaan mula-mula adalah $U_1$, jadi setelah $3$ tahun adalah $U_4$.\n$U_4 = 50.000.000 \\times (0{,}8)^{3}$\n\nLangkah 4: Hitung pemangkatannya bertahap.\n$0{,}8^2 = 0{,}64$, lalu $0{,}64 \\times 0{,}8 = 0{,}512$\n\nLangkah 5: Kalikan.\n$U_4 = 50.000.000 \\times 0{,}512 = 25.600.000$\n\nLangkah 6: Periksa tahun demi tahun.\n$50$ juta $\\to 40$ juta $\\to 32$ juta $\\to 25{,}6$ juta — tiga langkah, cocok\n\nLangkah 7: Perhatikan bahwa penyusutannya TIDAK tetap dalam rupiah: $10$ juta, lalu $8$ juta, lalu $6{,}4$ juta. Yang tetap persentasenya.\n\nLangkah 8: Kekeliruan yang sering terjadi adalah menghitung $20\\% \\times 3 = 60\\%$ lalu menjawab $20$ juta. Selisihnya $5{,}6$ juta — cukup besar untuk menjadi masalah nyata.\n\nKesimpulan: Nilai mesin setelah $3$ tahun adalah $Rp25.600.000$."
        },
        {
          "problem": "Seutas tali dipotong menjadi $7$ bagian yang panjangnya membentuk barisan geometri. Potongan terpendek $3$ cm dan terpanjang $192$ cm. Berapa panjang tali semula?",
          "solution": "Langkah 1: Tentukan yang diketahui. Tujuh potongan berarti tujuh suku.\n$U_1 = 3$ dan $U_7 = 192$\n\nLangkah 2: Bagi keduanya untuk mencari rasionya.\n$\\frac{U_7}{U_1} = r^{6} = \\frac{192}{3} = 64$\n\nLangkah 3: Tarik akar pangkat enam. Cari bilangan yang dipangkatkan enam memberi $64$.\n$2^6 = 64$, jadi $r = 2$\n\nLangkah 4: Yang ditanyakan panjang tali SEMULA, yaitu jumlah seluruh potongannya — jadi $S_7$.\n$S_7 = \\frac{3\\left(2^{7} - 1\\right)}{2 - 1}$\n\nLangkah 5: Hitung pemangkatannya lalu kurangkan.\n$2^7 = 128$, sehingga $128 - 1 = 127$\n\nLangkah 6: Bagi dengan $2 - 1 = 1$.\n$S_7 = 3 \\times 127 = 381$ cm\n\nLangkah 7: Periksa dengan mendaftar potongannya.\n$3, 6, 12, 24, 48, 96, 192$ — jumlahnya $381$, dan potongan terpanjangnya memang $192$\n\nLangkah 8: Perhatikan pangkat pada Langkah 2. Jarak dari suku ke-$1$ ke suku ke-$7$ adalah $6$, bukan $7$.\n\nKesimpulan: Panjang tali semula $381$ cm."
        },
        {
          "problem": "Bandingkan dua tawaran: (A) gaji $Rp3$ juta naik $Rp200$ ribu tiap tahun; (B) gaji $Rp2$ juta naik $8\\%$ tiap tahun. Tawaran mana yang gajinya lebih besar pada tahun ke-$10$?",
          "solution": "Langkah 1: Kenali polanya masing-masing. Tawaran A bertambah tetap, jadi aritmetika; tawaran B naik dalam persen, jadi geometri.\n\nLangkah 2: Hitung tawaran A pada tahun ke-$10$.\n$U_{10} = 3.000.000 + 9(200.000) = 3.000.000 + 1.800.000 = 4.800.000$\n\nLangkah 3: Ubah persen tawaran B menjadi rasio.\n$r = 1 + 0{,}08 = 1{,}08$\n\nLangkah 4: Hitung tawaran B pada tahun ke-$10$.\n$U_{10} = 2.000.000 \\times (1{,}08)^{9}$\n\nLangkah 5: Hitung pemangkatannya bertahap.\n$1{,}08^{3} \\approx 1{,}2597$; $1{,}08^{6} \\approx 1{,}5869$; $1{,}08^{9} \\approx 1{,}9990$\n\nLangkah 6: Kalikan.\n$U_{10} \\approx 2.000.000 \\times 1{,}999 \\approx 3.998.000$\n\nLangkah 7: Bandingkan. Pada tahun ke-$10$, tawaran A ($Rp4{,}8$ juta) masih lebih besar daripada tawaran B ($\\approx Rp4{,}0$ juta).\n\nLangkah 8: Namun perhatikan arahnya. Kenaikan A selalu $Rp200$ ribu, sedangkan kenaikan B tahun itu sudah sekitar $Rp296$ ribu dan terus membesar. Pertumbuhan geometri pada akhirnya selalu menyusul — pertanyaannya hanya kapan.\n\nKesimpulan: Pada tahun ke-$10$ tawaran A lebih besar, tetapi tawaran B tumbuh lebih cepat dan akan menyusul bila masa kerjanya cukup panjang."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, hitunglah gaji tahunan kedua tawaran pada contoh terakhir untuk tahun ke-$1$, ke-$10$, ke-$15$, dan ke-$20$ — buat tabelnya. Tentukan pada tahun keberapa tawaran B melampaui tawaran A (boleh dengan mencoba-coba, tuliskan percobaannya). Lalu jawab pertanyaan yang berbeda: kalau yang dibandingkan TOTAL penghasilan selama $20$ tahun, tawaran mana yang menang? Jelaskan mengapa jawaban kedua pertanyaan itu bisa berbeda.",
      "summary_data": {
        "summary": [
          "\"Bertambah/berkurang sebesar $p$ setiap ...\" menandakan ARITMETIKA; \"menjadi $k$ kali\" atau \"naik $p\\%$ setiap ...\" menandakan GEOMETRI.",
          "Bila yang dicari keadaan pada SATU saat, pakai $U_n$; bila yang dicari TOTAL sepanjang beberapa periode, pakai $S_n$.",
          "Naik $p\\%$ memberi $r = 1 + \\frac{p}{100}$; menyusut $p\\%$ memberi $r = 1 - \\frac{p}{100}$.",
          "Keadaan mula-mula adalah $U_1$, sehingga keadaan setelah $n$ periode adalah $U_{n+1}$ — inilah sumber kekeliruan yang paling sering.",
          "Pada barisan aritmetika, sampai suku ke-$n$ hanya terjadi $(n-1)$ kali penambahan.",
          "Persentase yang tetap tidak berarti jumlah rupiah yang tetap; $20\\%$ dari nilai yang menyusut selalu makin kecil.",
          "Menghitung $p\\%$ dikalikan banyaknya periode selalu keliru untuk pertumbuhan geometri.",
          "Periksa jawaban dengan mendaftar beberapa periode awalnya; daftar itu murah dan menangkap hampir semua kekeliruan penomoran."
        ],
        "islamic": "Merencanakan masa depan dengan perhitungan adalah bagian dari kesungguhan. \"Dan hendaklah setiap diri memperhatikan apa yang telah diperbuatnya untuk hari esok.\" (QS. Al-Hasyr: 18)"
      },
      "collab_cases": [
        "Gaji awal $Rp2.500.000$ naik $Rp175.000$ tiap tahun. Berapa gaji pada tahun ke-$6$?",
        "Produksi bulan pertama $80$ unit, bertambah $12$ unit tiap bulan. Berapa total produksi $8$ bulan pertama?",
        "Nilai kendaraan $Rp120.000.000$ menyusut $25\\%$ tiap tahun. Berapa nilainya setelah $2$ tahun?",
        "Bakteri berlipat dua tiap $30$ menit, mula-mula $400$. Berapa banyaknya setelah $3$ jam?",
        "Tali dipotong menjadi $5$ bagian membentuk barisan geometri; terpendek $2$ cm dan terpanjang $162$ cm. Berapa panjang tali semula?"
      ]
    },
    {
      "id": "P14",
      "bab": "Bab 3: Vektor dan Operasinya",
      "title": "Pengertian Vektor, Notasi, dan Penyajiannya",
      "obj": [
        "Membedakan besaran vektor dari besaran skalar dengan alasan, bukan dengan hafalan daftar.",
        "Menuliskan sebuah vektor dalam notasi $\\vec{AB}$ maupun $\\vec{a}$, dan membaca arti kedua notasi itu.",
        "Menyatakan kapan dua vektor disebut SAMA, dan menjelaskan mengapa $\\vec{AB}$ dan $\\vec{BA}$ tidak sama."
      ],
      "hook": "Seseorang memberi petunjuk: \"jalan $500$ meter dari sini\". Petunjuk itu belum cukup — $500$ meter ke arah mana? Sebaliknya, kalau ia berkata \"jalan ke utara\", itu juga belum cukup — sampai di mana? Ada besaran yang baru lengkap bila BESAR dan ARAHnya disebutkan sekaligus. Besaran semacam itulah yang disebut vektor, dan seluruh bab ini bekerja dengannya.",
      "toolkit": [
        {
          "name": "Skalar",
          "math": "$$\\text{cukup besarnya saja: } 5\\ \\text{kg},\\ 28^\\circ,\\ 12\\ \\text{detik}$$"
        },
        {
          "name": "Vektor",
          "math": "$$\\text{besar DAN arah: } 500\\ \\text{m ke utara}$$"
        },
        {
          "name": "Notasi",
          "math": "$$\\vec{AB} \\quad \\text{atau} \\quad \\vec{a}$$"
        },
        {
          "name": "Dua Vektor Sama",
          "math": "$$\\text{panjang sama} \\;\\wedge\\; \\text{arah sama}$$"
        },
        {
          "name": "Lawan Vektor",
          "math": "$$\\vec{BA} = -\\vec{AB}$$"
        }
      ],
      "examples": [
        {
          "problem": "Kelompokkan besaran berikut menjadi skalar atau vektor, dan sebutkan alasannya: (a) massa $5$ kg, (b) perpindahan $40$ m ke utara, (c) suhu $28^\\circ$, (d) gaya $30$ N ke bawah.",
          "solution": "Langkah 1: Pakai satu pertanyaan penguji untuk setiap besaran — \"kalau arahnya diganti, apakah besaran ini berubah?\"\n\nLangkah 2: Periksa (a) massa $5$ kg. Massa $5$ kg ke utara dan massa $5$ kg ke selatan adalah massa yang sama. Arah tidak berpengaruh.\nJadi massa adalah SKALAR.\n\nLangkah 3: Periksa (b) perpindahan $40$ m ke utara. Berpindah $40$ m ke utara berakhir di tempat yang berbeda dengan berpindah $40$ m ke selatan.\nJadi perpindahan adalah VEKTOR.\n\nLangkah 4: Periksa (c) suhu $28^\\circ$. Tidak ada artinya mengatakan \"suhu $28^\\circ$ ke kanan\".\nJadi suhu adalah SKALAR.\n\nLangkah 5: Periksa (d) gaya $30$ N ke bawah. Mendorong benda ke bawah berbeda akibatnya dengan mendorongnya ke atas dengan kekuatan yang sama.\nJadi gaya adalah VEKTOR.\n\nLangkah 6: Perhatikan bahwa yang menentukan bukan satuannya, melainkan apakah arah ikut menentukan artinya. Panjang tali $40$ m adalah skalar, sedangkan perpindahan $40$ m adalah vektor — satuannya sama, jenisnya berbeda.\n\nKesimpulan: Skalar (a) dan (c); vektor (b) dan (d), sebab pada keduanya arah ikut menentukan arti besarannya."
        },
        {
          "problem": "Jelaskan arti notasi $\\vec{AB}$, lalu jelaskan hubungan $\\vec{AB}$ dengan $\\vec{BA}$.",
          "solution": "Langkah 1: Baca notasinya menurut urutan hurufnya. Huruf pertama adalah titik PANGKAL, huruf kedua adalah titik UJUNG.\n$\\vec{AB}$: berangkat dari $A$, berakhir di $B$\n\nLangkah 2: Gambarkan sebagai ruas garis berarah. Panjang ruas garisnya menyatakan besar vektornya, sedangkan mata anak panahnya menyatakan arahnya.\n\nLangkah 3: Sekarang balik urutannya.\n$\\vec{BA}$: berangkat dari $B$, berakhir di $A$\n\nLangkah 4: Bandingkan panjangnya. Jarak dari $A$ ke $B$ sama dengan jarak dari $B$ ke $A$, jadi panjang keduanya SAMA.\n\nLangkah 5: Bandingkan arahnya. Mata anak panahnya menunjuk ke pihak yang berseberangan, jadi arahnya BERLAWANAN.\n\nLangkah 6: Karena syarat kesamaan vektor menuntut panjang DAN arah yang sama, kedua vektor itu tidak sama. Hubungannya dituliskan sebagai lawan.\n$\\vec{BA} = -\\vec{AB}$\n\nLangkah 7: Kekeliruan yang sering terjadi adalah menganggap $\\vec{AB}$ dan $\\vec{BA}$ sama karena \"garisnya satu\". Yang satu memang garisnya, tetapi arahnya dua.\n\nKesimpulan: $\\vec{AB}$ berpangkal di $A$ dan berujung di $B$; $\\vec{BA} = -\\vec{AB}$, yaitu sama panjang tetapi berlawanan arah."
        },
        {
          "problem": "Dua vektor digambar di tempat yang berbeda pada satu bidang: $\\vec{u}$ dari $(0,0)$ ke $(3,2)$, dan $\\vec{v}$ dari $(4,1)$ ke $(7,3)$. Apakah $\\vec{u} = \\vec{v}$?",
          "solution": "Langkah 1: Ingat syarat kesamaan vektor: panjang sama dan arah sama. Titik pangkalnya TIDAK disyaratkan sama.\n\nLangkah 2: Periksa perubahan mendatar dan tegaknya untuk $\\vec{u}$.\nMendatar: $3 - 0 = 3$; tegak: $2 - 0 = 2$\n\nLangkah 3: Periksa hal yang sama untuk $\\vec{v}$.\nMendatar: $7 - 4 = 3$; tegak: $3 - 1 = 2$\n\nLangkah 4: Karena perubahan mendatar dan tegaknya sama, kemiringannya sama dan mata anak panahnya menunjuk ke pihak yang sama — jadi arahnya sama.\n\nLangkah 5: Panjangnya pun mengikuti, sebab ditentukan oleh kedua perubahan itu.\n$\\sqrt{3^2 + 2^2} = \\sqrt{13}$ untuk keduanya\n\nLangkah 6: Perhatikan bahwa keduanya digambar di TEMPAT yang berbeda. Sebuah vektor boleh digeser ke mana saja tanpa berubah, selama panjang dan arahnya dijaga. Vektor tidak terikat pada satu tempat.\n\nLangkah 7: Kekeliruan yang sering terjadi adalah menyimpulkan \"tidak sama, sebab titik pangkalnya berbeda\". Yang disyaratkan bukan titik pangkalnya.\n\nKesimpulan: $\\vec{u} = \\vec{v}$, sebab perubahan mendatar dan tegaknya sama sehingga panjang dan arahnya sama; letaknya tidak disyaratkan."
        },
        {
          "problem": "Pada jajargenjang $ABCD$, tentukan semua vektor di antara keempat titik sudutnya yang sama dengan $\\vec{AB}$.",
          "solution": "Langkah 1: Gambarkan jajargenjangnya dengan urutan titik $A$, $B$, $C$, $D$ mengelilingi bangun itu. Sisi $AB$ berhadapan dengan sisi $DC$.\n\nLangkah 2: Ingat sifat jajargenjang: dua sisi yang berhadapan sama panjang dan sejajar.\n$AB = DC$ dan $AB \\parallel DC$\n\nLangkah 3: Sekarang periksa arahnya, bukan hanya kesejajarannya. Dari $A$ ke $B$ kita bergerak searah dengan gerak dari $D$ ke $C$.\nJadi $\\vec{AB} = \\vec{DC}$\n\nLangkah 4: Periksa calon yang salah, yaitu $\\vec{CD}$. Panjangnya memang sama, tetapi arahnya berlawanan.\n$\\vec{CD} = -\\vec{AB}$\n\nLangkah 5: Periksa $\\vec{AD}$. Ia terletak pada sisi yang lain, jadi arahnya berbeda sama sekali — bukan sama, bukan pula lawan.\n\nLangkah 6: Periksa $\\vec{BA}$. Ini lawan $\\vec{AB}$, jadi juga bukan.\n\nLangkah 7: Perhatikan bahwa dari empat titik sudut hanya SATU vektor yang sama dengan $\\vec{AB}$, yaitu $\\vec{DC}$ — dan kunci memilihnya adalah memperhatikan urutan hurufnya.\n\nKesimpulan: Hanya $\\vec{DC}$ yang sama dengan $\\vec{AB}$; $\\vec{CD}$ dan $\\vec{BA}$ adalah lawannya."
        },
        {
          "problem": "Diberikan empat titik berbeda $P$, $Q$, $R$, dan $S$. Berapa banyak vektor berbeda yang dapat dibentuk dengan memilih dua di antaranya sebagai pangkal dan ujung?",
          "solution": "Langkah 1: Sebuah vektor ditentukan oleh PASANGAN BERURUTAN: titik pangkal lebih dahulu, titik ujung kemudian.\n\nLangkah 2: Pilih titik pangkalnya. Ada $4$ pilihan: $P$, $Q$, $R$, atau $S$.\n\nLangkah 3: Pilih titik ujungnya. Titik ujung tidak boleh sama dengan titik pangkalnya, sebab itu akan memberi vektor nol yang tidak punya arah tertentu. Jadi tinggal $3$ pilihan.\n\nLangkah 4: Kalikan kedua pilihan itu.\n$4 \\times 3 = 12$\n\nLangkah 5: Periksa dengan mendaftarnya untuk meyakinkan diri.\n$\\vec{PQ}, \\vec{PR}, \\vec{PS}, \\vec{QP}, \\vec{QR}, \\vec{QS}, \\vec{RP}, \\vec{RQ}, \\vec{RS}, \\vec{SP}, \\vec{SQ}, \\vec{SR}$ — ada $12$\n\nLangkah 6: Perhatikan mengapa jawabannya bukan $6$. Kalau yang dihitung adalah RUAS GARIS, jawabannya memang $6$, sebab $PQ$ dan $QP$ adalah ruas garis yang sama. Tetapi vektor membedakan arah, sehingga setiap ruas garis memberi DUA vektor.\n\nLangkah 7: Inilah sebabnya urutan huruf pada notasi vektor bukan hiasan; ia bagian dari keterangannya.\n\nKesimpulan: Ada $12$ vektor berbeda, yaitu dua kali banyaknya ruas garis, sebab setiap ruas garis memberi dua arah."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, gambarlah persegi $KLMN$ beserta kedua diagonalnya. Daftarkan SEMUA vektor di antara keempat titik sudutnya yang panjangnya sama dengan $\\vec{KL}$, lalu pisahkan mana yang SAMA dengan $\\vec{KL}$ dan mana yang hanya sama panjang. Selanjutnya jawablah: apakah $\\vec{KM}$ dan $\\vec{LN}$ sama panjang? apakah keduanya sama? Tuliskan alasannya dengan menyebut kedua syarat kesamaan vektor.",
      "summary_data": {
        "summary": [
          "Skalar cukup dinyatakan dengan besarnya saja; vektor baru lengkap bila besar DAN arahnya disebutkan.",
          "Ujilah dengan satu pertanyaan: kalau arahnya diganti, apakah besaran itu berubah? Kalau ya, ia vektor.",
          "Satuan tidak menentukan jenisnya: panjang $40$ m skalar, perpindahan $40$ m vektor.",
          "Pada notasi $\\vec{AB}$, huruf pertama titik pangkal dan huruf kedua titik ujung — urutannya bermakna.",
          "Pada gambar, panjang ruas garis menyatakan besar vektornya dan mata anak panahnya menyatakan arahnya.",
          "Dua vektor SAMA bila panjang dan arahnya sama; titik pangkalnya tidak disyaratkan sama.",
          "Sebuah vektor boleh digeser ke mana saja selama panjang dan arahnya dijaga — vektor tidak terikat tempat.",
          "$\\vec{BA} = -\\vec{AB}$: sama panjang, berlawanan arah, dan karena itu BUKAN vektor yang sama.",
          "Vektor nol panjangnya $0$ dan tidak mempunyai arah tertentu."
        ],
        "islamic": "Sebuah amal dinilai bukan hanya dari besarnya, melainkan juga dari arah yang dituju. \"Sesungguhnya setiap amal itu bergantung pada niatnya.\" (HR. Bukhari dan Muslim)"
      },
      "collab_cases": [
        "Kelompokkan menjadi skalar atau vektor beserta alasannya: waktu tempuh $2$ jam, kecepatan $60$ km/jam ke barat, volume $3$ liter, percepatan $9{,}8$ m/detik$^2$ ke bawah.",
        "Jelaskan mengapa $\\vec{PQ}$ dan $\\vec{QP}$ tidak sama, meskipun keduanya terletak pada satu garis yang sama.",
        "Vektor $\\vec{u}$ digambar dari $(1,1)$ ke $(5,4)$ dan vektor $\\vec{v}$ dari $(2,-3)$ ke $(6,0)$. Apakah $\\vec{u} = \\vec{v}$? Tunjukkan alasannya.",
        "Pada jajargenjang $PQRS$, tuliskan vektor yang sama dengan $\\vec{PS}$ dan vektor yang merupakan lawannya.",
        "Dari lima titik berbeda, berapa banyak vektor berbeda yang dapat dibentuk? Bandingkan dengan banyaknya ruas garis, lalu jelaskan selisihnya."
      ]
    },
    {
      "id": "P15",
      "bab": "Bab 3: Vektor dan Operasinya",
      "title": "Vektor pada Bidang Koordinat dan Vektor Posisi",
      "obj": [
        "Menyatakan sebuah vektor dengan komponennya, yaitu perubahan mendatar dan perubahan tegaknya.",
        "Menghitung $\\vec{AB}$ dari koordinat $A$ dan $B$, serta menemukan salah satu titik bila vektornya diketahui.",
        "Membedakan vektor posisi dari vektor sembarang, dan menuliskan vektor dalam bentuk $x\\vec{i} + y\\vec{j}$."
      ],
      "hook": "Menggambar anak panah cukup untuk mengerti apa itu vektor, tetapi tidak cukup untuk MENGHITUNG dengannya. Begitu bidang koordinat dipasang, setiap vektor dapat dituliskan sebagai dua bilangan saja: berapa ke kanan dan berapa ke atas. Dua bilangan itu membawa seluruh keterangan vektornya — dan sejak itu seluruh operasi vektor menjadi hitungan biasa.",
      "toolkit": [
        {
          "name": "Komponen",
          "math": "$$\\vec{a} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$$"
        },
        {
          "name": "Vektor Posisi",
          "math": "$$P(x,y) \\Rightarrow \\vec{OP} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$$"
        },
        {
          "name": "Dari Dua Titik",
          "math": "$$\\vec{AB} = \\begin{pmatrix} x_B - x_A \\\\ y_B - y_A \\end{pmatrix}$$"
        },
        {
          "name": "Bentuk Basis",
          "math": "$$\\vec{a} = x\\vec{i} + y\\vec{j}$$"
        },
        {
          "name": "Kesamaan Komponen",
          "math": "$$\\begin{pmatrix} x_1 \\\\ y_1 \\end{pmatrix} = \\begin{pmatrix} x_2 \\\\ y_2 \\end{pmatrix} \\Leftrightarrow x_1 = x_2 \\;\\wedge\\; y_1 = y_2$$"
        }
      ],
      "examples": [
        {
          "problem": "Titik $A(2,-1)$ dan $B(5,3)$. Tentukan $\\vec{AB}$ dan $\\vec{BA}$, lalu bandingkan keduanya.",
          "solution": "Langkah 1: Ingat arti komponen. Komponen pertama adalah perubahan MENDATAR, komponen kedua perubahan TEGAK.\n\nLangkah 2: Untuk $\\vec{AB}$, kurangkan koordinat titik UJUNG dengan koordinat titik PANGKAL.\nMendatar: $5 - 2 = 3$\n\nLangkah 3: Kerjakan komponen tegaknya.\nTegak: $3 - (-1) = 3 + 1 = 4$\n\nLangkah 4: Tuliskan hasilnya.\n$\\vec{AB} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$\n\nLangkah 5: Sekarang $\\vec{BA}$. Titik pangkalnya $B$, titik ujungnya $A$.\nMendatar: $2 - 5 = -3$; tegak: $-1 - 3 = -4$\n\nLangkah 6: Tuliskan hasilnya dan bandingkan.\n$\\vec{BA} = \\begin{pmatrix} -3 \\\\ -4 \\end{pmatrix} = -\\vec{AB}$\n\nLangkah 7: Kekeliruan yang paling sering terjadi adalah mengurangkan pangkal dikurangi ujung. Aturannya selalu UJUNG dikurangi PANGKAL — dan tanda minus pada $(-1)$ harus ditulis lengkap dengan kurungnya.\n\nKesimpulan: $\\vec{AB} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ dan $\\vec{BA} = \\begin{pmatrix} -3 \\\\ -4 \\end{pmatrix}$, yang merupakan lawannya."
        },
        {
          "problem": "Jelaskan perbedaan vektor posisi titik $P(-3,5)$ dengan vektor $\\vec{AB}$ untuk $A(1,1)$ dan $B(-2,6)$.",
          "solution": "Langkah 1: Vektor posisi adalah vektor yang titik pangkalnya SELALU di titik asal $O(0,0)$.\n\nLangkah 2: Hitung vektor posisi $P$.\n$\\vec{OP} = \\begin{pmatrix} -3 - 0 \\\\ 5 - 0 \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ 5 \\end{pmatrix}$\n\nLangkah 3: Perhatikan bahwa komponennya persis koordinat titiknya. Inilah keistimewaan vektor posisi — tidak perlu dihitung, cukup dibaca.\n\nLangkah 4: Sekarang hitung $\\vec{AB}$, yang pangkalnya BUKAN di $O$.\n$\\vec{AB} = \\begin{pmatrix} -2 - 1 \\\\ 6 - 1 \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ 5 \\end{pmatrix}$\n\nLangkah 5: Ternyata komponennya sama. Jadi sebagai VEKTOR, keduanya sama.\n$\\vec{OP} = \\vec{AB}$\n\nLangkah 6: Perbedaannya hanya pada LETAK gambarnya: yang satu digambar dari $O$, yang lain dari $A$. Letak bukan bagian dari keterangan vektor.\n\nLangkah 7: Perhatikan bahwa \"vektor posisi\" adalah keterangan tentang cara menggambarnya, bukan jenis vektor yang berbeda.\n\nKesimpulan: Keduanya vektor yang SAMA, yaitu $\\begin{pmatrix} -3 \\\\ 5 \\end{pmatrix}$; sebutan vektor posisi hanya menandai bahwa pangkalnya di $O$."
        },
        {
          "problem": "Diketahui $\\vec{AB} = \\begin{pmatrix} 6 \\\\ -2 \\end{pmatrix}$ dan $A(1,5)$. Tentukan koordinat $B$.",
          "solution": "Langkah 1: Tuliskan hubungan yang dipakai.\n$\\vec{AB} = \\begin{pmatrix} x_B - x_A \\\\ y_B - y_A \\end{pmatrix}$\n\nLangkah 2: Samakan komponen mendatarnya.\n$x_B - 1 = 6$\n\nLangkah 3: Selesaikan.\n$x_B = 6 + 1 = 7$\n\nLangkah 4: Samakan komponen tegaknya.\n$y_B - 5 = -2$\n\nLangkah 5: Selesaikan.\n$y_B = -2 + 5 = 3$\n\nLangkah 6: Periksa kembali dengan menghitung $\\vec{AB}$ dari kedua titiknya.\n$\\begin{pmatrix} 7 - 1 \\\\ 3 - 5 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ -2 \\end{pmatrix}$ — cocok\n\nLangkah 7: Cara cepatnya: titik ujung diperoleh dengan MENAMBAHKAN komponen vektornya pada titik pangkal. Kekeliruan yang sering terjadi adalah menguranginya, sehingga diperoleh $(-5, 7)$.\n\nKesimpulan: $B(7,3)$."
        },
        {
          "problem": "Diketahui $\\vec{AB} = \\begin{pmatrix} -4 \\\\ 3 \\end{pmatrix}$ dan $B(2,-1)$. Tentukan koordinat $A$.",
          "solution": "Langkah 1: Perhatikan bahwa kali ini yang diketahui titik UJUNGnya, jadi arah penyelesaiannya berkebalikan dengan soal sebelumnya.\n\nLangkah 2: Tuliskan hubungannya.\n$x_B - x_A = -4$ dan $y_B - y_A = 3$\n\nLangkah 3: Masukkan komponen mendatarnya.\n$2 - x_A = -4$\n\nLangkah 4: Selesaikan.\n$-x_A = -4 - 2 = -6 \\Rightarrow x_A = 6$\n\nLangkah 5: Masukkan komponen tegaknya lalu selesaikan.\n$-1 - y_A = 3 \\Rightarrow -y_A = 4 \\Rightarrow y_A = -4$\n\nLangkah 6: Periksa kembali.\n$\\vec{AB} = \\begin{pmatrix} 2 - 6 \\\\ -1 - (-4) \\end{pmatrix} = \\begin{pmatrix} -4 \\\\ 3 \\end{pmatrix}$ — cocok\n\nLangkah 7: Cara cepatnya: titik pangkal diperoleh dengan MENGURANGKAN komponen vektornya dari titik ujung. Perhatikan bahwa hasilnya $(6,-4)$, bukan $(-2,2)$ yang muncul bila komponennya ditambahkan.\n\nKesimpulan: $A(6,-4)$."
        },
        {
          "problem": "Tuliskan $\\vec{a} = 3\\vec{i} - 7\\vec{j}$ dalam bentuk kolom, dan tuliskan $\\begin{pmatrix} -5 \\\\ 2 \\end{pmatrix}$ dalam bentuk basis. Lalu tentukan $x$ dan $y$ bila $\\begin{pmatrix} 2x-1 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 7 \\\\ y+2 \\end{pmatrix}$.",
          "solution": "Langkah 1: Ingat arti $\\vec{i}$ dan $\\vec{j}$. Keduanya vektor satuan pada arah sumbu: $\\vec{i}$ satu satuan ke kanan, $\\vec{j}$ satu satuan ke atas.\n$\\vec{i} = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$ dan $\\vec{j} = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$\n\nLangkah 2: Maka bilangan di depan $\\vec{i}$ menjadi komponen pertama dan bilangan di depan $\\vec{j}$ menjadi komponen kedua.\n$3\\vec{i} - 7\\vec{j} = \\begin{pmatrix} 3 \\\\ -7 \\end{pmatrix}$\n\nLangkah 3: Perhatikan bahwa tanda minusnya ikut terbawa; komponen kedua $-7$, bukan $7$.\n\nLangkah 4: Sebaliknya, tuliskan bentuk kolom menjadi bentuk basis.\n$\\begin{pmatrix} -5 \\\\ 2 \\end{pmatrix} = -5\\vec{i} + 2\\vec{j}$\n\nLangkah 5: Sekarang selesaikan kesamaan vektornya. Dua vektor sama berarti komponen yang BERSESUAIAN sama, jadi diperoleh dua persamaan.\n$2x - 1 = 7$ dan $5 = y + 2$\n\nLangkah 6: Selesaikan keduanya.\n$2x = 8 \\Rightarrow x = 4$; dan $y = 5 - 2 = 3$\n\nLangkah 7: Periksa dengan memasukkannya kembali.\n$\\begin{pmatrix} 2(4)-1 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 7 \\\\ 5 \\end{pmatrix}$ dan $\\begin{pmatrix} 7 \\\\ 3+2 \\end{pmatrix} = \\begin{pmatrix} 7 \\\\ 5 \\end{pmatrix}$ — cocok\n\nKesimpulan: $3\\vec{i} - 7\\vec{j} = \\begin{pmatrix} 3 \\\\ -7 \\end{pmatrix}$, $\\begin{pmatrix} -5 \\\\ 2 \\end{pmatrix} = -5\\vec{i} + 2\\vec{j}$, serta $x = 4$ dan $y = 3$ sehingga $x + y = 7$."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, letakkan titik $P(-4,1)$, $Q(2,-3)$, dan $R(5,4)$. Hitunglah $\\vec{PQ}$, $\\vec{QR}$, dan $\\vec{PR}$ dalam bentuk kolom. Kemudian periksalah apakah $\\vec{PQ} + \\vec{QR} = \\vec{PR}$, dan jelaskan mengapa hal itu HARUS berlaku dengan menunjuk pada cara komponennya dihitung. Terakhir, tentukan koordinat titik $S$ agar $\\vec{RS} = \\vec{PQ}$, lalu tunjukkan dengan hitungan bahwa $\\vec{PR} = \\vec{QS}$ ikut berlaku dan jelaskan apa artinya bagi bangun $PQSR$.",
      "summary_data": {
        "summary": [
          "Komponen vektor adalah dua bilangan: perubahan mendatar dan perubahan tegak.",
          "$\\vec{AB} = \\begin{pmatrix} x_B - x_A \\\\ y_B - y_A \\end{pmatrix}$ — selalu UJUNG dikurangi PANGKAL, tidak pernah sebaliknya.",
          "Vektor posisi berpangkal di $O$, sehingga komponennya persis koordinat titiknya.",
          "Sebutan vektor posisi hanya menandai cara menggambarnya; ia bukan jenis vektor yang berbeda.",
          "Bila vektor dan titik pangkalnya diketahui, titik ujung diperoleh dengan MENAMBAHKAN komponennya.",
          "Bila vektor dan titik ujungnya diketahui, titik pangkal diperoleh dengan MENGURANGKAN komponennya.",
          "$\\vec{i}$ dan $\\vec{j}$ adalah vektor satuan pada arah kedua sumbu, sehingga $x\\vec{i} + y\\vec{j} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$.",
          "Dua vektor sama bila komponen yang bersesuaian sama — satu kesamaan vektor memberi dua persamaan.",
          "Tanda minus pada koordinat harus ditulis lengkap dengan kurungnya: $3 - (-1) = 4$, bukan $2$."
        ],
        "islamic": "Setiap tempat mempunyai kedudukannya terhadap satu pusat, dan tidak ada yang lepas dari pengetahuan-Nya. \"Dan Dia bersama kamu di mana saja kamu berada.\" (QS. Al-Hadid: 4)"
      },
      "collab_cases": [
        "Titik $A(-2,4)$ dan $B(3,-1)$. Tentukan $\\vec{AB}$ dan $\\vec{BA}$ dalam bentuk kolom.",
        "Tuliskan vektor posisi titik $M(0,-6)$ dan titik $N(-7,0)$, lalu jelaskan apa yang istimewa dari keduanya.",
        "Diketahui $\\vec{PQ} = \\begin{pmatrix} -3 \\\\ 8 \\end{pmatrix}$ dan $P(4,-2)$. Tentukan koordinat $Q$.",
        "Diketahui $\\vec{KL} = \\begin{pmatrix} 5 \\\\ -1 \\end{pmatrix}$ dan $L(-1,6)$. Tentukan koordinat $K$.",
        "Tentukan $p$ dan $q$ bila $\\begin{pmatrix} 3p+2 \\\\ -4 \\end{pmatrix} = \\begin{pmatrix} 11 \\\\ 2q \\end{pmatrix}$."
      ]
    },
    {
      "id": "P16",
      "bab": "Bab 3: Vektor dan Operasinya",
      "title": "Penjumlahan dan Pengurangan Vektor",
      "obj": [
        "Menjumlahkan dua vektor dengan aturan segitiga dan aturan jajargenjang, serta menjelaskan bahwa keduanya memberi hasil yang sama.",
        "Menjumlahkan dan mengurangkan vektor melalui komponennya, termasuk untuk tiga vektor atau lebih.",
        "Memakai hubungan $\\vec{AB} + \\vec{BC} = \\vec{AC}$ untuk menyatakan sebuah vektor dengan vektor-vektor lain."
      ],
      "hook": "Sebuah perahu diarahkan ke utara, tetapi arus sungai menariknya ke timur. Perahu itu tidak pergi ke utara, dan tidak pula ke timur — ia menempuh satu arah baru yang tidak diperintahkan oleh siapa pun. Arah baru itu adalah JUMLAH kedua vektornya, dan menjumlahkan vektor tidak sama dengan menjumlahkan bilangan: $8$ dan $6$ dapat menghasilkan $10$.",
      "toolkit": [
        {
          "name": "Aturan Segitiga",
          "math": "$$\\vec{AB} + \\vec{BC} = \\vec{AC}$$"
        },
        {
          "name": "Aturan Jajargenjang",
          "math": "$$\\vec{a} + \\vec{b} = \\text{diagonal dari titik pangkal bersama}$$"
        },
        {
          "name": "Lewat Komponen",
          "math": "$$\\begin{pmatrix} a_1 \\\\ a_2 \\end{pmatrix} + \\begin{pmatrix} b_1 \\\\ b_2 \\end{pmatrix} = \\begin{pmatrix} a_1 + b_1 \\\\ a_2 + b_2 \\end{pmatrix}$$"
        },
        {
          "name": "Pengurangan",
          "math": "$$\\vec{a} - \\vec{b} = \\vec{a} + (-\\vec{b})$$"
        },
        {
          "name": "Sifat",
          "math": "$$\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}, \\quad \\vec{a} + \\vec{0} = \\vec{a}$$"
        }
      ],
      "examples": [
        {
          "problem": "Jelaskan aturan segitiga untuk menjumlahkan dua vektor, lalu tunjukkan bahwa aturan jajargenjang memberi hasil yang sama.",
          "solution": "Langkah 1: Aturan segitiga bekerja dengan menyambung. Gambarkan $\\vec{a}$ lebih dahulu, lalu gambarkan $\\vec{b}$ dengan titik pangkalnya di titik UJUNG $\\vec{a}$.\n\nLangkah 2: Jumlahnya adalah vektor dari titik pangkal $\\vec{a}$ menuju titik ujung $\\vec{b}$ — yaitu sisi ketiga segitiga itu.\nDengan nama titik: $\\vec{AB} + \\vec{BC} = \\vec{AC}$\n\nLangkah 3: Aturan jajargenjang bekerja dengan cara lain. Gambarkan $\\vec{a}$ dan $\\vec{b}$ dari SATU titik pangkal yang sama, lalu lengkapi menjadi jajargenjang.\n\nLangkah 4: Jumlahnya adalah diagonal jajargenjang itu yang berpangkal di titik yang sama.\n\nLangkah 5: Tunjukkan bahwa keduanya sama. Pada jajargenjang, sisi yang berhadapan dengan $\\vec{b}$ adalah vektor yang SAMA dengan $\\vec{b}$ — sudah dibahas pada P14.\n\nLangkah 6: Maka menyusuri $\\vec{a}$ lalu sisi yang sama dengan $\\vec{b}$ itu persis pekerjaan aturan segitiga, dan ujungnya adalah titik sudut yang sama.\n\nLangkah 7: Perhatikan bahwa aturan jajargenjang hanya sekadar aturan segitiga yang digambar tanpa menggeser $\\vec{b}$ — keduanya bukan dua aturan yang berbeda, melainkan satu aturan dengan dua cara menggambar.\n\nKesimpulan: Kedua aturan memberi hasil yang sama, sebab sisi jajargenjang yang berhadapan dengan $\\vec{b}$ adalah vektor yang sama dengan $\\vec{b}$."
        },
        {
          "problem": "Diketahui $\\vec{a} = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$ dan $\\vec{b} = \\begin{pmatrix} -5 \\\\ 6 \\end{pmatrix}$. Hitunglah $\\vec{a} + \\vec{b}$ dan $\\vec{a} - \\vec{b}$.",
          "solution": "Langkah 1: Penjumlahan lewat komponen dikerjakan komponen demi komponen — yang atas dengan yang atas, yang bawah dengan yang bawah.\n\nLangkah 2: Kerjakan komponen atas untuk penjumlahannya.\n$3 + (-5) = -2$\n\nLangkah 3: Kerjakan komponen bawahnya.\n$-2 + 6 = 4$\n\nLangkah 4: Tuliskan hasilnya.\n$\\vec{a} + \\vec{b} = \\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix}$\n\nLangkah 5: Sekarang pengurangannya. Kerjakan dengan cara yang sama, tetapi kurangkan.\nAtas: $3 - (-5) = 3 + 5 = 8$; bawah: $-2 - 6 = -8$\n\nLangkah 6: Tuliskan hasilnya.\n$\\vec{a} - \\vec{b} = \\begin{pmatrix} 8 \\\\ -8 \\end{pmatrix}$\n\nLangkah 7: Periksa dengan jalan lain, yaitu memakai lawan vektornya.\n$-\\vec{b} = \\begin{pmatrix} 5 \\\\ -6 \\end{pmatrix}$, sehingga $\\vec{a} + (-\\vec{b}) = \\begin{pmatrix} 3+5 \\\\ -2-6 \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ -8 \\end{pmatrix}$ — cocok\n\nKesimpulan: $\\vec{a} + \\vec{b} = \\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix}$ dan $\\vec{a} - \\vec{b} = \\begin{pmatrix} 8 \\\\ -8 \\end{pmatrix}$."
        },
        {
          "problem": "Diketahui $\\vec{u} = \\begin{pmatrix} -1 \\\\ 4 \\end{pmatrix}$, $\\vec{v} = \\begin{pmatrix} 3 \\\\ 3 \\end{pmatrix}$, dan $\\vec{w} = \\begin{pmatrix} 2 \\\\ -6 \\end{pmatrix}$. Hitunglah $\\vec{u} + \\vec{v} - \\vec{w}$.",
          "solution": "Langkah 1: Untuk tiga vektor atau lebih, kerjakan tetap komponen demi komponen. Tidak perlu menjumlahkan dua-dua lebih dahulu.\n\nLangkah 2: Kerjakan komponen atasnya sekaligus.\n$-1 + 3 - 2 = 0$\n\nLangkah 3: Kerjakan komponen bawahnya sekaligus. Perhatikan bahwa yang dikurangkan adalah $-6$.\n$4 + 3 - (-6) = 4 + 3 + 6 = 13$\n\nLangkah 4: Tuliskan hasilnya.\n$\\vec{u} + \\vec{v} - \\vec{w} = \\begin{pmatrix} 0 \\\\ 13 \\end{pmatrix}$\n\nLangkah 5: Periksa lewat jalan lain, yaitu menjumlahkan dua-dua.\n$\\vec{u} + \\vec{v} = \\begin{pmatrix} 2 \\\\ 7 \\end{pmatrix}$, lalu $\\begin{pmatrix} 2 \\\\ 7 \\end{pmatrix} - \\begin{pmatrix} 2 \\\\ -6 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 13 \\end{pmatrix}$ — cocok\n\nLangkah 6: Perhatikan hasil komponen atasnya yang bernilai $0$. Itu bukan kekeliruan; artinya vektor hasilnya tidak bergeser ke kanan maupun ke kiri, melainkan tegak lurus ke atas.\n\nLangkah 7: Kekeliruan yang paling sering terjadi adalah menulis $4 + 3 - 6 = 1$, yaitu lupa bahwa tanda minus pada operasinya bertemu tanda minus pada komponennya.\n\nKesimpulan: $\\vec{u} + \\vec{v} - \\vec{w} = \\begin{pmatrix} 0 \\\\ 13 \\end{pmatrix}$, yaitu vektor yang tegak lurus ke atas sepanjang $13$ satuan."
        },
        {
          "problem": "Diketahui $\\vec{a} + \\vec{b} = \\begin{pmatrix} 5 \\\\ -1 \\end{pmatrix}$ dan $\\vec{a} - \\vec{b} = \\begin{pmatrix} 1 \\\\ 7 \\end{pmatrix}$. Tentukan $\\vec{a}$ dan $\\vec{b}$.",
          "solution": "Langkah 1: Perhatikan bahwa ini sistem persamaan, hanya saja yang tidak diketahui berupa vektor. Caranya sama seperti pada bilangan.\n\nLangkah 2: Jumlahkan kedua persamaan itu. Suku $\\vec{b}$ akan saling menghapus.\n$(\\vec{a} + \\vec{b}) + (\\vec{a} - \\vec{b}) = 2\\vec{a}$\n\nLangkah 3: Kerjakan ruas kanannya.\n$\\begin{pmatrix} 5 \\\\ -1 \\end{pmatrix} + \\begin{pmatrix} 1 \\\\ 7 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 6 \\end{pmatrix}$\n\nLangkah 4: Bagi dua untuk mendapatkan $\\vec{a}$.\n$\\vec{a} = \\begin{pmatrix} 3 \\\\ 3 \\end{pmatrix}$\n\nLangkah 5: Cari $\\vec{b}$ dengan mengurangkan kedua persamaan itu, atau cukup memasukkan $\\vec{a}$ pada persamaan pertama.\n$\\vec{b} = \\begin{pmatrix} 5 \\\\ -1 \\end{pmatrix} - \\begin{pmatrix} 3 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ -4 \\end{pmatrix}$\n\nLangkah 6: Periksa keduanya pada persamaan yang belum dipakai.\n$\\vec{a} - \\vec{b} = \\begin{pmatrix} 3-2 \\\\ 3-(-4) \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 7 \\end{pmatrix}$ — cocok\n\nLangkah 7: Kekeliruan yang sering terjadi adalah lupa membagi dua, sehingga dijawab $\\vec{a} = \\begin{pmatrix} 6 \\\\ 6 \\end{pmatrix}$ — yang sebenarnya $2\\vec{a}$.\n\nKesimpulan: $\\vec{a} = \\begin{pmatrix} 3 \\\\ 3 \\end{pmatrix}$ dan $\\vec{b} = \\begin{pmatrix} 2 \\\\ -4 \\end{pmatrix}$."
        },
        {
          "problem": "Pada segitiga $ABC$, diketahui $\\vec{AB} = \\vec{u}$ dan $\\vec{AC} = \\vec{v}$. Nyatakan $\\vec{BC}$ dengan $\\vec{u}$ dan $\\vec{v}$.",
          "solution": "Langkah 1: Pakai aturan segitiga sebagai alat penyusun, bukan sebagai rumus hafalan. Pilih jalan dari $B$ ke $C$ yang melewati titik yang vektornya diketahui, yaitu $A$.\n$\\vec{BC} = \\vec{BA} + \\vec{AC}$\n\nLangkah 2: Perhatikan bahwa $\\vec{BA}$ belum diketahui, tetapi $\\vec{AB}$ diketahui. Keduanya berlawanan.\n$\\vec{BA} = -\\vec{AB} = -\\vec{u}$\n\nLangkah 3: Masukkan keduanya.\n$\\vec{BC} = -\\vec{u} + \\vec{v}$\n\nLangkah 4: Rapikan penulisannya.\n$\\vec{BC} = \\vec{v} - \\vec{u}$\n\nLangkah 5: Periksa dengan contoh berangka. Ambil $A(0,0)$, $B(3,1)$, dan $C(1,5)$.\n$\\vec{u} = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$ dan $\\vec{v} = \\begin{pmatrix} 1 \\\\ 5 \\end{pmatrix}$\n\nLangkah 6: Hitung kedua ruasnya.\n$\\vec{BC} = \\begin{pmatrix} 1-3 \\\\ 5-1 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix}$, sedangkan $\\vec{v} - \\vec{u} = \\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix}$ — cocok\n\nLangkah 7: Kekeliruan yang paling sering terjadi adalah menjawab $\\vec{u} - \\vec{v}$. Cara menghindarinya: hasilnya harus berpangkal di $B$, jadi yang DIKURANGKAN adalah vektor menuju $B$.\n\nKesimpulan: $\\vec{BC} = \\vec{v} - \\vec{u}$, yaitu vektor menuju ujung dikurangi vektor menuju pangkal."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, gambarlah dua vektor $\\vec{p}$ dan $\\vec{q}$ yang panjangnya masing-masing $5$ dan $3$ satuan. Susunlah tiga gambar berbeda: keduanya searah, keduanya berlawanan arah, dan keduanya saling tegak lurus. Untuk setiap gambar, tentukan panjang $\\vec{p} + \\vec{q}$. Kemudian jawablah: berapa panjang TERBESAR dan TERKECIL yang mungkin bagi $\\vec{p} + \\vec{q}$, dan mengapa panjang jumlah dua vektor tidak pernah melebihi jumlah panjangnya?",
      "summary_data": {
        "summary": [
          "Aturan segitiga: gambarkan vektor kedua mulai dari ujung vektor pertama, lalu tarik dari pangkal awal ke ujung akhir.",
          "$\\vec{AB} + \\vec{BC} = \\vec{AC}$ — huruf yang bertemu di tengah saling menghapus.",
          "Aturan jajargenjang memberi hasil yang sama, sebab sisi yang berhadapan adalah vektor yang sama.",
          "Lewat komponen, penjumlahan dan pengurangan dikerjakan komponen demi komponen.",
          "$\\vec{a} - \\vec{b} = \\vec{a} + (-\\vec{b})$ — mengurangkan sama dengan menambahkan lawannya.",
          "Penjumlahan vektor bersifat komutatif dan asosiatif, tetapi PENGURANGAN tidak: $\\vec{a} - \\vec{b} \\neq \\vec{b} - \\vec{a}$.",
          "$\\vec{AB} + \\vec{BA} = \\vec{0}$, sebab keduanya saling berlawanan.",
          "Panjang jumlah dua vektor tidak pernah melebihi jumlah panjangnya; keduanya sama hanya bila kedua vektor searah.",
          "Pada $\\vec{BC} = \\vec{v} - \\vec{u}$, yang dikurangkan adalah vektor menuju titik PANGKAL hasilnya."
        ],
        "islamic": "Kekuatan yang bergabung dalam satu arah jauh melampaui jumlah masing-masingnya. \"Orang mukmin dengan mukmin lainnya bagaikan satu bangunan, saling menguatkan satu sama lain.\" (HR. Bukhari dan Muslim)"
      },
      "collab_cases": [
        "Diketahui $\\vec{a} = \\begin{pmatrix} 4 \\\\ -7 \\end{pmatrix}$ dan $\\vec{b} = \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$. Hitunglah $\\vec{a} + \\vec{b}$ dan $\\vec{b} - \\vec{a}$.",
        "Hitunglah $\\vec{p} + \\vec{q} - \\vec{r}$ untuk $\\vec{p} = \\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}$, $\\vec{q} = \\begin{pmatrix} -3 \\\\ -8 \\end{pmatrix}$, dan $\\vec{r} = \\begin{pmatrix} 1 \\\\ -4 \\end{pmatrix}$.",
        "Diketahui $\\vec{a} + \\vec{b} = \\begin{pmatrix} 8 \\\\ 2 \\end{pmatrix}$ dan $\\vec{a} - \\vec{b} = \\begin{pmatrix} 2 \\\\ -6 \\end{pmatrix}$. Tentukan $\\vec{a}$ dan $\\vec{b}$.",
        "Pada segitiga $PQR$ diketahui $\\vec{PQ} = \\vec{m}$ dan $\\vec{QR} = \\vec{n}$. Nyatakan $\\vec{RP}$ dengan $\\vec{m}$ dan $\\vec{n}$.",
        "Dua gaya bekerja pada satu titik: $\\begin{pmatrix} 7 \\\\ -3 \\end{pmatrix}$ N dan $\\begin{pmatrix} -2 \\\\ 11 \\end{pmatrix}$ N. Tentukan vektor resultannya."
      ]
    },
    {
      "id": "P17",
      "bab": "Bab 3: Vektor dan Operasinya",
      "title": "Perkalian Vektor dengan Skalar dan Vektor Segaris",
      "obj": [
        "Menghitung $k\\vec{a}$ lewat komponennya, serta menjelaskan pengaruh tanda dan besar $k$ terhadap arah dan panjangnya.",
        "Menguji apakah dua vektor segaris, dengan mencari satu bilangan $k$ yang berlaku untuk SELURUH komponennya.",
        "Membuktikan bahwa tiga titik terletak pada satu garis dengan memakai kelipatan vektor."
      ],
      "hook": "Kalau sebuah gaya dilipatgandakan tiga kali, arahnya tidak berubah — hanya kekuatannya. Tetapi kalau gaya itu dikalikan $-1$, arahnya berbalik sepenuhnya sementara kekuatannya tetap. Satu bilangan pengali dapat mengatur dua hal sekaligus: besarnya diatur oleh nilai mutlaknya, arahnya diatur oleh tandanya. Dari gagasan sederhana itu lahir cara menguji apakah tiga titik terletak pada satu garis.",
      "toolkit": [
        {
          "name": "Lewat Komponen",
          "math": "$$k\\begin{pmatrix} a_1 \\\\ a_2 \\end{pmatrix} = \\begin{pmatrix} ka_1 \\\\ ka_2 \\end{pmatrix}$$"
        },
        {
          "name": "Pengaruh Tanda",
          "math": "$$k > 0: \\text{searah}; \\quad k < 0: \\text{berlawanan arah}$$"
        },
        {
          "name": "Distributif",
          "math": "$$k(\\vec{a} + \\vec{b}) = k\\vec{a} + k\\vec{b}$$"
        },
        {
          "name": "Segaris",
          "math": "$$\\vec{a} \\parallel \\vec{b} \\Leftrightarrow \\vec{b} = k\\vec{a}$$"
        },
        {
          "name": "Tiga Titik Segaris",
          "math": "$$A, B, C \\text{ segaris} \\Leftrightarrow \\vec{AC} = k\\,\\vec{AB}$$"
        }
      ],
      "examples": [
        {
          "problem": "Diketahui $\\vec{a} = \\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix}$. Hitunglah $3\\vec{a}$, $-\\vec{a}$, dan $\\frac{1}{2}\\vec{a}$, lalu jelaskan apa yang terjadi pada arah dan panjangnya.",
          "solution": "Langkah 1: Perkalian dengan skalar dikerjakan pada SETIAP komponen, tidak hanya pada salah satunya.\n\nLangkah 2: Hitung $3\\vec{a}$.\n$3\\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} -6 \\\\ 15 \\end{pmatrix}$\n\nLangkah 3: Perhatikan arahnya. Karena $3 > 0$, kedua komponennya berubah tanpa berganti tanda — jadi arahnya SAMA, hanya panjangnya menjadi tiga kali.\n\nLangkah 4: Hitung $-\\vec{a}$, yaitu perkalian dengan $-1$.\n$-\\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ -5 \\end{pmatrix}$\n\nLangkah 5: Kedua tandanya berbalik, jadi arahnya BERLAWANAN sedangkan panjangnya tetap.\n\nLangkah 6: Hitung $\\frac{1}{2}\\vec{a}$.\n$\\frac{1}{2}\\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ \\frac{5}{2} \\end{pmatrix}$\n\nLangkah 7: Karena penggalinya positif tetapi kurang dari $1$, arahnya sama sedangkan panjangnya menjadi separuh. Jadi aturannya: TANDA mengatur arah, NILAI MUTLAK mengatur panjang.\n\nKesimpulan: $3\\vec{a} = \\begin{pmatrix} -6 \\\\ 15 \\end{pmatrix}$ searah dan tiga kali lebih panjang; $-\\vec{a} = \\begin{pmatrix} 2 \\\\ -5 \\end{pmatrix}$ berlawanan arah dan sama panjang; $\\frac{1}{2}\\vec{a} = \\begin{pmatrix} -1 \\\\ \\frac{5}{2} \\end{pmatrix}$ searah dan separuh panjangnya."
        },
        {
          "problem": "Diketahui $\\vec{p} = \\begin{pmatrix} 6 \\\\ -9 \\end{pmatrix}$. Hitunglah $-\\frac{2}{3}\\vec{p}$.",
          "solution": "Langkah 1: Perhatikan lebih dahulu bahwa penggalinya negatif dan berupa pecahan, sehingga hasilnya akan berlawanan arah dan lebih pendek.\n\nLangkah 2: Kerjakan komponen atasnya.\n$-\\frac{2}{3} \\times 6 = -\\frac{12}{3} = -4$\n\nLangkah 3: Kerjakan komponen bawahnya. Perhatikan bahwa dua tanda negatif bertemu.\n$-\\frac{2}{3} \\times (-9) = \\frac{18}{3} = 6$\n\nLangkah 4: Tuliskan hasilnya.\n$-\\frac{2}{3}\\vec{p} = \\begin{pmatrix} -4 \\\\ 6 \\end{pmatrix}$\n\nLangkah 5: Periksa ramalan pada langkah 1. Tanda kedua komponennya memang berbalik dari $(+, -)$ menjadi $(-, +)$ — jadi arahnya berlawanan, sesuai ramalan.\n\nLangkah 6: Periksa panjangnya secara kasar. Komponennya mengecil dari $6$ dan $-9$ menjadi $-4$ dan $6$, yaitu dua per tiganya — sesuai pula.\n\nLangkah 7: Kekeliruan yang sering terjadi adalah menerapkan tanda minusnya hanya pada satu komponen, sehingga dijawab $\\begin{pmatrix} -4 \\\\ -6 \\end{pmatrix}$. Penggali berlaku untuk SEMUA komponen.\n\nKesimpulan: $-\\frac{2}{3}\\vec{p} = \\begin{pmatrix} -4 \\\\ 6 \\end{pmatrix}$."
        },
        {
          "problem": "Diketahui $\\vec{a} = \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$ dan $\\vec{b} = \\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix}$. Hitunglah $2\\vec{a} - 3\\vec{b}$.",
          "solution": "Langkah 1: Kerjakan perkaliannya lebih dahulu, baru pengurangannya — sama seperti urutan operasi pada bilangan.\n\nLangkah 2: Hitung $2\\vec{a}$.\n$2\\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ -2 \\end{pmatrix}$\n\nLangkah 3: Hitung $3\\vec{b}$.\n$3\\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} -6 \\\\ 12 \\end{pmatrix}$\n\nLangkah 4: Sekarang kurangkan komponen demi komponen. Perhatikan bahwa komponen atas yang dikurangkan bernilai $-6$.\nAtas: $6 - (-6) = 6 + 6 = 12$\n\nLangkah 5: Kerjakan komponen bawahnya.\nBawah: $-2 - 12 = -14$\n\nLangkah 6: Tuliskan hasilnya.\n$2\\vec{a} - 3\\vec{b} = \\begin{pmatrix} 12 \\\\ -14 \\end{pmatrix}$\n\nLangkah 7: Kekeliruan yang sering terjadi ada dua: mengurangkan lebih dahulu lalu mengalikan, dan lupa bahwa $6 - (-6)$ bernilai $12$. Keduanya dapat dihindari dengan menuliskan hasil perkaliannya secara terpisah seperti pada langkah 2 dan 3.\n\nKesimpulan: $2\\vec{a} - 3\\vec{b} = \\begin{pmatrix} 12 \\\\ -14 \\end{pmatrix}$."
        },
        {
          "problem": "Tentukan apakah $\\begin{pmatrix} 4 \\\\ -6 \\end{pmatrix}$ segaris dengan $\\begin{pmatrix} -6 \\\\ 9 \\end{pmatrix}$, dan apakah ia segaris dengan $\\begin{pmatrix} 6 \\\\ 4 \\end{pmatrix}$.",
          "solution": "Langkah 1: Dua vektor segaris bila yang satu merupakan KELIPATAN yang lain. Yang harus dicari adalah satu bilangan $k$ yang berlaku untuk SELURUH komponennya.\n\nLangkah 2: Periksa pasangan pertama. Cari $k$ dari komponen atasnya.\n$4k = -6 \\Rightarrow k = -\\frac{3}{2}$\n\nLangkah 3: Ujilah $k$ itu pada komponen bawahnya. Inilah langkah yang tidak boleh dilewati.\n$-6 \\times \\left(-\\frac{3}{2}\\right) = 9$ — cocok\n\nLangkah 4: Karena satu nilai $k$ berlaku untuk kedua komponennya, keduanya SEGARIS, dan karena $k$ negatif arahnya berlawanan.\n\nLangkah 5: Periksa pasangan kedua dengan cara yang sama.\n$4k = 6 \\Rightarrow k = \\frac{3}{2}$\n\nLangkah 6: Uji pada komponen bawahnya.\n$-6 \\times \\frac{3}{2} = -9$, padahal yang diminta $4$ — tidak cocok\n\nLangkah 7: Perhatikan bahwa keliru besar bila hanya komponen atasnya yang diperiksa. Penguji lain yang setara: kedua vektor segaris bila $a_1 b_2 - a_2 b_1 = 0$. Untuk pasangan pertama, $4(9) - (-6)(-6) = 36 - 36 = 0$; untuk pasangan kedua, $4(4) - (-6)(6) = 16 + 36 = 52 \\neq 0$.\n\nKesimpulan: $\\begin{pmatrix} 4 \\\\ -6 \\end{pmatrix}$ segaris dengan $\\begin{pmatrix} -6 \\\\ 9 \\end{pmatrix}$ dengan $k = -\\frac{3}{2}$, tetapi tidak segaris dengan $\\begin{pmatrix} 6 \\\\ 4 \\end{pmatrix}$."
        },
        {
          "problem": "Tunjukkan bahwa titik $A(1,2)$, $B(4,8)$, dan $C(6,12)$ terletak pada satu garis.",
          "solution": "Langkah 1: Gagasannya: kalau ketiga titik segaris, maka dua vektor yang berpangkal di titik yang sama harus segaris.\n\nLangkah 2: Hitung $\\vec{AB}$.\n$\\vec{AB} = \\begin{pmatrix} 4-1 \\\\ 8-2 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix}$\n\nLangkah 3: Hitung $\\vec{AC}$.\n$\\vec{AC} = \\begin{pmatrix} 6-1 \\\\ 12-2 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 10 \\end{pmatrix}$\n\nLangkah 4: Cari $k$ dari komponen atasnya.\n$3k = 5 \\Rightarrow k = \\frac{5}{3}$\n\nLangkah 5: Uji pada komponen bawahnya.\n$6 \\times \\frac{5}{3} = 10$ — cocok\n\nLangkah 6: Karena $\\vec{AC} = \\frac{5}{3}\\vec{AB}$ dan keduanya berpangkal di titik $A$ yang sama, ketiga titik itu terletak pada satu garis.\n\nLangkah 7: Perhatikan bahwa $k$ tidak harus bilangan bulat; yang disyaratkan hanyalah SATU nilai $k$ yang berlaku untuk seluruh komponennya. Periksa pula dengan penguji hasil kali silang: $3(10) - 6(5) = 0$.\n\nKesimpulan: Ketiga titik segaris, sebab $\\vec{AC} = \\frac{5}{3}\\vec{AB}$ dan kedua vektor itu berpangkal di titik yang sama."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, tuliskan vektor $\\vec{a} = \\begin{pmatrix} 2 \\\\ -5 \\end{pmatrix}$. Buatlah TIGA vektor yang segaris dengannya: satu yang searah dan lebih panjang, satu yang searah dan lebih pendek, dan satu yang berlawanan arah. Tuliskan nilai $k$ untuk masing-masingnya. Kemudian tentukan nilai $m$ agar $\\begin{pmatrix} m \\\\ 15 \\end{pmatrix}$ segaris dengan $\\vec{a}$, dan jelaskan mengapa mencocokkan satu komponen saja belum cukup untuk menyimpulkan bahwa dua vektor segaris.",
      "summary_data": {
        "summary": [
          "$k\\vec{a}$ dihitung dengan mengalikan SETIAP komponennya dengan $k$ — tidak boleh hanya salah satunya.",
          "Tanda $k$ mengatur arah: $k > 0$ searah, $k < 0$ berlawanan arah.",
          "Nilai mutlak $k$ mengatur panjang: $|k| > 1$ memanjang, $|k| < 1$ memendek.",
          "$k = 0$ memberi vektor nol, dan vektor nol tidak mempunyai arah tertentu.",
          "$k(\\vec{a} + \\vec{b}) = k\\vec{a} + k\\vec{b}$ — penggalinya masuk ke kedua vektornya.",
          "Kerjakan perkalian skalar lebih dahulu, baru penjumlahan atau pengurangannya.",
          "Dua vektor SEGARIS bila ada satu $k$ dengan $\\vec{b} = k\\vec{a}$; nilai $k$ itu harus berlaku untuk SELURUH komponennya.",
          "Penguji yang setara untuk vektor di bidang: $\\vec{a} \\parallel \\vec{b}$ bila $a_1 b_2 - a_2 b_1 = 0$.",
          "Tiga titik $A$, $B$, $C$ segaris bila $\\vec{AC} = k\\,\\vec{AB}$; nilai $k$ tidak harus bulat."
        ],
        "islamic": "Berjalan lebih cepat atau lebih lambat masih boleh berbeda, tetapi arahnya harus satu. \"Tunjukilah kami jalan yang lurus.\" (QS. Al-Fatihah: 6)"
      },
      "collab_cases": [
        "Diketahui $\\vec{a} = \\begin{pmatrix} -3 \\\\ 7 \\end{pmatrix}$. Hitunglah $4\\vec{a}$, $-2\\vec{a}$, dan $\\frac{1}{3}\\vec{a}$.",
        "Hitunglah $3\\vec{p} - 2\\vec{q}$ untuk $\\vec{p} = \\begin{pmatrix} 5 \\\\ -2 \\end{pmatrix}$ dan $\\vec{q} = \\begin{pmatrix} -1 \\\\ 6 \\end{pmatrix}$.",
        "Periksa apakah $\\begin{pmatrix} 6 \\\\ -10 \\end{pmatrix}$ segaris dengan $\\begin{pmatrix} -9 \\\\ 15 \\end{pmatrix}$, lalu sebutkan nilai $k$-nya.",
        "Tentukan $t$ agar $\\begin{pmatrix} t \\\\ -12 \\end{pmatrix}$ segaris dengan $\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$.",
        "Periksa apakah titik $P(-1,3)$, $Q(2,9)$, dan $R(4,13)$ terletak pada satu garis, lalu jelaskan hasilnya."
      ]
    },
    {
      "id": "P18",
      "bab": "Bab 3: Vektor dan Operasinya",
      "title": "Panjang Vektor dan Vektor Satuan",
      "obj": [
        "Menurunkan rumus panjang vektor dari teorema Pythagoras, bukan menghafalkannya.",
        "Menghitung panjang vektor dan jarak dua titik, termasuk yang hasilnya berupa bentuk akar.",
        "Menentukan vektor satuan searah sebuah vektor, dan memeriksa bahwa panjangnya tepat $1$."
      ],
      "hook": "Sebuah kapal berlayar $9$ km ke timur lalu $12$ km ke utara. Ia menempuh $21$ km, tetapi dari pelabuhan ia hanya berjarak $15$ km. Angka $15$ itu tidak muncul dari penjumlahan biasa; ia muncul dari sebuah segitiga siku-siku yang tersembunyi di dalam komponen vektornya. Begitu segitiga itu terlihat, panjang setiap vektor dapat dihitung tanpa mengukur.",
      "toolkit": [
        {
          "name": "Panjang Vektor",
          "math": "$$\\left| \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\right| = \\sqrt{x^2 + y^2}$$"
        },
        {
          "name": "Dari Pythagoras",
          "math": "$$x^2 + y^2 = |\\vec{a}|^2$$"
        },
        {
          "name": "Jarak Dua Titik",
          "math": "$$|\\vec{AB}| = \\sqrt{(x_B-x_A)^2 + (y_B-y_A)^2}$$"
        },
        {
          "name": "Vektor Satuan",
          "math": "$$\\hat{a} = \\frac{\\vec{a}}{|\\vec{a}|}, \\quad |\\hat{a}| = 1$$"
        },
        {
          "name": "Panjang Kelipatan",
          "math": "$$|k\\vec{a}| = |k|\\,|\\vec{a}|$$"
        }
      ],
      "examples": [
        {
          "problem": "Turunkan rumus panjang vektor $\\vec{a} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$, lalu hitunglah panjang $\\begin{pmatrix} -8 \\\\ 6 \\end{pmatrix}$.",
          "solution": "Langkah 1: Gambarkan vektornya dari titik asal. Komponen $x$ menyatakan pergeseran mendatar dan komponen $y$ pergeseran tegak.\n\nLangkah 2: Kedua pergeseran itu saling TEGAK LURUS, sebab yang satu sejajar sumbu datar dan yang lain sejajar sumbu tegak.\n\nLangkah 3: Jadi vektornya menjadi sisi miring sebuah segitiga siku-siku yang kedua sisi tegaknya $|x|$ dan $|y|$.\n\nLangkah 4: Terapkan teorema Pythagoras.\n$|\\vec{a}|^2 = x^2 + y^2$\n\nLangkah 5: Ambil akarnya. Yang diambil hanya akar positif, sebab panjang tidak pernah negatif.\n$|\\vec{a}| = \\sqrt{x^2 + y^2}$\n\nLangkah 6: Sekarang hitung panjang $\\begin{pmatrix} -8 \\\\ 6 \\end{pmatrix}$. Perhatikan bahwa tanda minusnya hilang setelah dikuadratkan.\n$\\sqrt{(-8)^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$\n\nLangkah 7: Kekeliruan yang sering terjadi adalah menjumlahkan komponennya, yaitu $-8 + 6 = -2$. Panjang tidak pernah negatif, jadi hasil semacam itu langsung menandakan cara yang keliru.\n\nKesimpulan: $|\\vec{a}| = \\sqrt{x^2 + y^2}$, dan panjang $\\begin{pmatrix} -8 \\\\ 6 \\end{pmatrix}$ adalah $10$."
        },
        {
          "problem": "Hitunglah panjang $\\begin{pmatrix} 3 \\\\ -3 \\end{pmatrix}$ dan jarak antara titik $A(2,-3)$ dan $B(7,9)$.",
          "solution": "Langkah 1: Hitung panjang vektor yang pertama.\n$\\sqrt{3^2 + (-3)^2} = \\sqrt{9 + 9} = \\sqrt{18}$\n\nLangkah 2: Sederhanakan akarnya dengan memisahkan kuadrat sempurna.\n$\\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2}$\n\nLangkah 3: Perhatikan bahwa hasilnya tidak bulat, dan itu wajar. Jangan dibulatkan menjadi $4$ atau $5$ kalau soalnya tidak meminta pendekatan.\n\nLangkah 4: Sekarang jarak dua titik. Jarak antara $A$ dan $B$ adalah PANJANG vektor $\\vec{AB}$, jadi cari komponennya lebih dahulu.\n$\\vec{AB} = \\begin{pmatrix} 7-2 \\\\ 9-(-3) \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 12 \\end{pmatrix}$\n\nLangkah 5: Hitung panjangnya.\n$\\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$\n\nLangkah 6: Periksa bahwa arah tidak berpengaruh pada jarak. Kalau dihitung $\\vec{BA} = \\begin{pmatrix} -5 \\\\ -12 \\end{pmatrix}$, panjangnya tetap $\\sqrt{25+144} = 13$.\n\nLangkah 7: Perhatikan bahwa rumus jarak dua titik bukan rumus baru; ia rumus panjang vektor yang komponennya dihitung dari selisih koordinat.\n\nKesimpulan: Panjang $\\begin{pmatrix} 3 \\\\ -3 \\end{pmatrix}$ adalah $3\\sqrt{2}$, dan jarak $A$ ke $B$ adalah $13$."
        },
        {
          "problem": "Tentukan vektor satuan yang searah dengan $\\vec{a} = \\begin{pmatrix} -6 \\\\ 8 \\end{pmatrix}$, lalu buktikan bahwa panjangnya tepat $1$.",
          "solution": "Langkah 1: Vektor satuan adalah vektor yang panjangnya $1$ dan arahnya sama dengan vektor semula. Cara memperolehnya: bagi vektornya dengan panjangnya sendiri.\n$\\hat{a} = \\frac{\\vec{a}}{|\\vec{a}|}$\n\nLangkah 2: Hitung panjangnya lebih dahulu.\n$|\\vec{a}| = \\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$\n\nLangkah 3: Bagi setiap komponennya dengan $10$.\n$\\hat{a} = \\frac{1}{10}\\begin{pmatrix} -6 \\\\ 8 \\end{pmatrix} = \\begin{pmatrix} -\\frac{3}{5} \\\\ \\frac{4}{5} \\end{pmatrix}$\n\nLangkah 4: Sekarang buktikan panjangnya. Ini bukan langkah tambahan, melainkan pemeriksaan yang menentukan benar atau tidaknya pekerjaan tadi.\n$\\left| \\hat{a} \\right| = \\sqrt{\\left(-\\frac{3}{5}\\right)^2 + \\left(\\frac{4}{5}\\right)^2}$\n\nLangkah 5: Kerjakan kuadratnya.\n$= \\sqrt{\\frac{9}{25} + \\frac{16}{25}} = \\sqrt{\\frac{25}{25}}$\n\nLangkah 6: Sederhanakan.\n$= \\sqrt{1} = 1$ — terbukti\n\nLangkah 7: Perhatikan bahwa arahnya tidak berubah, sebab pembaginya bilangan POSITIF. Kekeliruan yang sering terjadi adalah membagi hanya salah satu komponennya, atau membagi dengan salah satu komponen alih-alih dengan panjangnya.\n\nKesimpulan: $\\hat{a} = \\begin{pmatrix} -\\frac{3}{5} \\\\ \\frac{4}{5} \\end{pmatrix}$, dan panjangnya terbukti tepat $1$."
        },
        {
          "problem": "Diketahui $|\\vec{a}| = 5$. Tentukan panjang $-3\\vec{a}$, lalu jelaskan mengapa jawabannya tidak negatif.",
          "solution": "Langkah 1: Tuliskan sifat yang dipakai.\n$|k\\vec{a}| = |k| \\, |\\vec{a}|$\n\nLangkah 2: Perhatikan bahwa yang diambil adalah NILAI MUTLAK penggalinya.\n$|-3| = 3$\n\nLangkah 3: Kalikan.\n$|-3\\vec{a}| = 3 \\times 5 = 15$\n\nLangkah 4: Jelaskan mengapa bukan $-15$. Panjang adalah ukuran, dan ukuran tidak pernah negatif.\n\nLangkah 5: Periksa dengan contoh berangka. Ambil $\\vec{a} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$, yang panjangnya memang $5$.\n$-3\\vec{a} = \\begin{pmatrix} -9 \\\\ -12 \\end{pmatrix}$\n\nLangkah 6: Hitung panjangnya langsung.\n$\\sqrt{(-9)^2 + (-12)^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$ — cocok\n\nLangkah 7: Perhatikan bahwa tanda minus pada penggalinya tetap berperan, hanya saja perannya pada ARAH — vektornya berbalik — bukan pada panjangnya.\n\nKesimpulan: $|-3\\vec{a}| = 15$; tanda minus membalik arahnya, bukan mengurangi panjangnya."
        },
        {
          "problem": "Vektor $\\begin{pmatrix} p \\\\ -4 \\end{pmatrix}$ mempunyai panjang $5$. Tentukan semua nilai $p$ yang mungkin.",
          "solution": "Langkah 1: Tuliskan rumus panjangnya lalu samakan dengan yang diketahui.\n$\\sqrt{p^2 + (-4)^2} = 5$\n\nLangkah 2: Kuadratkan kedua ruasnya untuk melepas akarnya.\n$p^2 + 16 = 25$\n\nLangkah 3: Pindahkan sukunya.\n$p^2 = 25 - 16 = 9$\n\nLangkah 4: Ambil akarnya. Perhatikan bahwa ada DUA penyelesaian, sebab kedua bilangan itu kuadratnya $9$.\n$p = 3$ atau $p = -3$\n\nLangkah 5: Periksa keduanya dengan memasukkannya kembali.\n$\\sqrt{3^2 + 16} = \\sqrt{25} = 5$ dan $\\sqrt{(-3)^2 + 16} = \\sqrt{25} = 5$ — keduanya sah\n\nLangkah 6: Jelaskan mengapa keduanya diterima. Kedua vektor itu berbeda — yang satu mengarah ke kanan bawah, yang lain ke kiri bawah — tetapi panjangnya sama.\n\nLangkah 7: Kekeliruan yang paling sering terjadi adalah hanya menuliskan $p = 3$. Padahal panjang tidak membedakan arah, sehingga soal semacam ini hampir selalu berjawab dua. Kekeliruan lain adalah menjawab $p = 9$, yaitu lupa mengakarkan.\n\nKesimpulan: $p = 3$ atau $p = -3$; keduanya sah sebab panjang tidak membedakan arah."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, tuliskan $\\vec{a} = \\begin{pmatrix} 5 \\\\ -12 \\end{pmatrix}$. Hitunglah $|\\vec{a}|$, lalu tentukan vektor satuan searah $\\vec{a}$ dan BUKTIKAN panjangnya $1$. Selanjutnya hitunglah $|3\\vec{a}|$ dengan dua cara: memakai sifat $|k\\vec{a}| = |k||\\vec{a}|$, dan menghitung komponen $3\\vec{a}$ lebih dahulu. Terakhir, temukan sebuah vektor yang panjangnya $26$ dan searah dengan $\\vec{a}$, lalu jelaskan bagaimana vektor satuan membantu menemukannya.",
      "summary_data": {
        "summary": [
          "Panjang vektor berasal dari Pythagoras: kedua komponennya saling tegak lurus dan vektornya menjadi sisi miring.",
          "$\\left| \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\right| = \\sqrt{x^2 + y^2}$ — komponennya dikuadratkan, jadi tanda minusnya hilang.",
          "Panjang tidak pernah negatif; hasil negatif langsung menandakan cara yang keliru.",
          "Jarak dua titik adalah panjang vektor yang menghubungkannya, jadi bukan rumus baru.",
          "Jarak dari $A$ ke $B$ sama dengan jarak dari $B$ ke $A$, sebab tandanya hilang saat dikuadratkan.",
          "Hasil berupa bentuk akar seperti $3\\sqrt{2}$ sudah merupakan jawaban; jangan dibulatkan tanpa diminta.",
          "Vektor satuan diperoleh dengan membagi vektornya dengan PANJANGNYA sendiri, bukan dengan salah satu komponennya.",
          "Selalu periksa bahwa vektor satuan yang diperoleh panjangnya tepat $1$.",
          "$|k\\vec{a}| = |k|\\,|\\vec{a}|$ — yang dipakai nilai mutlak $k$, sebab tandanya mengatur arah dan bukan panjang.",
          "Soal \"panjangnya $5$, tentukan komponen yang belum diketahui\" hampir selalu berjawab dua nilai."
        ],
        "islamic": "Mengukur dengan teliti dan jujur adalah bagian dari amanah, bukan sekadar urusan angka. \"Dan sempurnakanlah takaran dan timbangan dengan adil.\" (QS. Al-An'am: 152)"
      },
      "collab_cases": [
        "Hitunglah panjang $\\begin{pmatrix} -7 \\\\ 24 \\end{pmatrix}$ dan panjang $\\begin{pmatrix} 2 \\\\ -2 \\end{pmatrix}$.",
        "Hitunglah jarak antara titik $P(-4,1)$ dan $Q(4,-5)$.",
        "Tentukan vektor satuan searah dengan $\\begin{pmatrix} 9 \\\\ -12 \\end{pmatrix}$, lalu buktikan panjangnya $1$.",
        "Diketahui $|\\vec{b}| = 7$. Tentukan $|4\\vec{b}|$ dan $|-2\\vec{b}|$, serta jelaskan tandanya.",
        "Vektor $\\begin{pmatrix} -5 \\\\ q \\end{pmatrix}$ panjangnya $13$. Tentukan semua nilai $q$ yang mungkin."
      ]
    },
    {
      "id": "P19",
      "bab": "Bab 3: Vektor dan Operasinya",
      "title": "Penerapan Vektor pada Masalah Nyata",
      "obj": [
        "Menerjemahkan masalah perpindahan, kecepatan, dan gaya menjadi vektor komponen, lalu menjawabnya.",
        "Membedakan PANJANG LINTASAN dari BESAR PERPINDAHAN, dan menjelaskan mengapa keduanya jarang sama.",
        "Menentukan titik tengah sebuah ruas garis dengan memakai vektor posisi."
      ],
      "hook": "Sebuah kapal berlayar $9$ km ke timur lalu $12$ km ke utara. Nahkodanya mencatat menempuh $21$ km; alat pelacaknya mencatat $15$ km dari pelabuhan. Keduanya benar, sebab keduanya mengukur hal yang berbeda. Bab ini menutup dengan soal-soal yang seluruhnya berangkat dari keadaan nyata — dan pekerjaan tersulitnya bukan berhitung, melainkan memutuskan besaran mana yang sebenarnya ditanyakan.",
      "toolkit": [
        {
          "name": "Perpindahan",
          "math": "$$\\vec{s} = \\begin{pmatrix} \\text{ke timur} \\\\ \\text{ke utara} \\end{pmatrix}$$"
        },
        {
          "name": "Besar Perpindahan",
          "math": "$$|\\vec{s}| = \\sqrt{x^2 + y^2}$$"
        },
        {
          "name": "Panjang Lintasan",
          "math": "$$\\text{jumlah panjang setiap penggalnya}$$"
        },
        {
          "name": "Resultan Gaya",
          "math": "$$\\vec{R} = \\vec{F_1} + \\vec{F_2}$$"
        },
        {
          "name": "Titik Tengah",
          "math": "$$\\vec{OM} = \\frac{1}{2}\\left( \\vec{OA} + \\vec{OB} \\right)$$"
        }
      ],
      "examples": [
        {
          "problem": "Sebuah kapal berlayar $9$ km ke timur, lalu $12$ km ke utara. Tentukan vektor perpindahannya, besar perpindahannya, dan panjang lintasannya.",
          "solution": "Langkah 1: Tetapkan lebih dahulu arah mana yang positif. Sepakati timur sebagai arah mendatar positif dan utara sebagai arah tegak positif.\n\nLangkah 2: Tuliskan kedua penggal perjalanannya sebagai vektor.\n$\\vec{s_1} = \\begin{pmatrix} 9 \\\\ 0 \\end{pmatrix}$ dan $\\vec{s_2} = \\begin{pmatrix} 0 \\\\ 12 \\end{pmatrix}$\n\nLangkah 3: Perpindahan seluruhnya adalah JUMLAH keduanya.\n$\\vec{s} = \\begin{pmatrix} 9 \\\\ 12 \\end{pmatrix}$\n\nLangkah 4: Hitung besar perpindahannya, yaitu panjang vektor itu.\n$|\\vec{s}| = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$ km\n\nLangkah 5: Sekarang hitung panjang lintasannya, yaitu jumlah panjang setiap penggalnya.\n$9 + 12 = 21$ km\n\nLangkah 6: Bandingkan keduanya. Lintasannya $21$ km, perpindahannya $15$ km — keduanya berbeda sebab kapal itu berbelok.\n\nLangkah 7: Perhatikan kapan keduanya sama: hanya bila seluruh perjalanannya lurus tanpa berbelok. Setiap belokan membuat perpindahan lebih kecil daripada lintasannya.\n\nKesimpulan: $\\vec{s} = \\begin{pmatrix} 9 \\\\ 12 \\end{pmatrix}$ km, besar perpindahannya $15$ km, sedangkan panjang lintasannya $21$ km."
        },
        {
          "problem": "Dua gaya bekerja pada satu benda: $\\vec{F_1} = \\begin{pmatrix} 9 \\\\ -2 \\end{pmatrix}$ newton dan $\\vec{F_2} = \\begin{pmatrix} -4 \\\\ 6 \\end{pmatrix}$ newton. Tentukan vektor resultannya dan besarnya.",
          "solution": "Langkah 1: Resultan dua gaya yang bekerja pada satu titik adalah JUMLAH kedua vektor gayanya.\n$\\vec{R} = \\vec{F_1} + \\vec{F_2}$\n\nLangkah 2: Jumlahkan komponen mendatarnya.\n$9 + (-4) = 5$\n\nLangkah 3: Jumlahkan komponen tegaknya.\n$-2 + 6 = 4$\n\nLangkah 4: Tuliskan vektor resultannya.\n$\\vec{R} = \\begin{pmatrix} 5 \\\\ 4 \\end{pmatrix}$ newton\n\nLangkah 5: Hitung besarnya, yaitu panjang vektor resultan itu.\n$|\\vec{R}| = \\sqrt{5^2 + 4^2} = \\sqrt{25 + 16} = \\sqrt{41}$ newton\n\nLangkah 6: Perhatikan bahwa hasilnya bukan bilangan bulat, dan itu wajar. Bentuk $\\sqrt{41}$ sudah merupakan jawaban; kalau diminta pendekatan, nilainya sekitar $6{,}4$.\n\nLangkah 7: Periksa kemasukakalannya. Besar masing-masing gayanya sekitar $9{,}2$ dan $7{,}2$, sedangkan resultannya hanya sekitar $6{,}4$ — lebih kecil daripada keduanya. Itu masuk akal, sebab kedua gaya itu sebagian saling melawan.\n\nKesimpulan: $\\vec{R} = \\begin{pmatrix} 5 \\\\ 4 \\end{pmatrix}$ newton dengan besar $\\sqrt{41}$ newton."
        },
        {
          "problem": "Sebuah perahu diarahkan tegak lurus ke utara dengan kecepatan $8$ km/jam, sedangkan arus sungai mengalir ke timur dengan kecepatan $6$ km/jam. Tentukan besar kecepatan perahu yang sebenarnya.",
          "solution": "Langkah 1: Kenali bahwa ada DUA kecepatan yang bekerja bersamaan, dan keduanya vektor.\n\nLangkah 2: Tuliskan keduanya dengan timur sebagai arah mendatar positif.\nPerahu: $\\begin{pmatrix} 0 \\\\ 8 \\end{pmatrix}$; arus: $\\begin{pmatrix} 6 \\\\ 0 \\end{pmatrix}$\n\nLangkah 3: Kecepatan yang sebenarnya adalah jumlah keduanya.\n$\\vec{v} = \\begin{pmatrix} 6 \\\\ 8 \\end{pmatrix}$ km/jam\n\nLangkah 4: Hitung besarnya.\n$|\\vec{v}| = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ km/jam\n\nLangkah 5: Perhatikan bahwa perahu itu bergerak LEBIH CEPAT daripada yang diarahkan nahkodanya, yaitu $10$ km/jam alih-alih $8$ km/jam. Arus menambah kecepatannya walaupun tidak menambah kemajuannya ke utara.\n\nLangkah 6: Perhatikan juga bahwa perahu tidak sampai di titik yang dituju. Ia menyimpang ke timur, sebab arahnya kini bukan utara lagi.\n\nLangkah 7: Kekeliruan yang sering terjadi adalah menjumlahkan begitu saja menjadi $14$ km/jam. Cara itu hanya sah bila kedua kecepatannya SEARAH; di sini keduanya saling tegak lurus.\n\nKesimpulan: Besar kecepatan perahu yang sebenarnya $10$ km/jam, yaitu lebih besar daripada $8$ km/jam meskipun arahnya menyimpang dari utara."
        },
        {
          "problem": "Tentukan titik tengah ruas garis yang menghubungkan $A(-3,7)$ dan $B(9,1)$, dengan memakai vektor posisi.",
          "solution": "Langkah 1: Tuliskan vektor posisi kedua titiknya.\n$\\vec{OA} = \\begin{pmatrix} -3 \\\\ 7 \\end{pmatrix}$ dan $\\vec{OB} = \\begin{pmatrix} 9 \\\\ 1 \\end{pmatrix}$\n\nLangkah 2: Susun jalan menuju titik tengah $M$. Dari $O$ ke $A$, lalu setengah perjalanan dari $A$ ke $B$.\n$\\vec{OM} = \\vec{OA} + \\frac{1}{2}\\vec{AB}$\n\nLangkah 3: Hitung $\\vec{AB}$ lebih dahulu.\n$\\vec{AB} = \\begin{pmatrix} 9-(-3) \\\\ 1-7 \\end{pmatrix} = \\begin{pmatrix} 12 \\\\ -6 \\end{pmatrix}$\n\nLangkah 4: Ambil separuhnya lalu jumlahkan.\n$\\vec{OM} = \\begin{pmatrix} -3 \\\\ 7 \\end{pmatrix} + \\begin{pmatrix} 6 \\\\ -3 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$\n\nLangkah 5: Periksa lewat jalan lain, yaitu rata-rata kedua vektor posisinya.\n$\\frac{1}{2}\\left( \\begin{pmatrix} -3 \\\\ 7 \\end{pmatrix} + \\begin{pmatrix} 9 \\\\ 1 \\end{pmatrix} \\right) = \\frac{1}{2}\\begin{pmatrix} 6 \\\\ 8 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ — cocok\n\nLangkah 6: Periksa sekali lagi dengan syarat titik tengah, yaitu $|\\vec{AM}| = |\\vec{MB}|$.\n$\\vec{AM} = \\begin{pmatrix} 6 \\\\ -3 \\end{pmatrix}$ dan $\\vec{MB} = \\begin{pmatrix} 6 \\\\ -3 \\end{pmatrix}$ — bahkan sama sebagai vektor\n\nLangkah 7: Perhatikan bahwa rumus rata-rata itu bukan rumus hafalan yang berdiri sendiri; ia hasil dari langkah 2 setelah dirapikan.\n\nKesimpulan: Titik tengahnya $M(3,4)$, dan komponennya adalah rata-rata koordinat kedua ujungnya."
        },
        {
          "problem": "Sebuah benda berpindah dari $A(2,1)$ ke $B(6,4)$, lalu dari $B$ ke $C(9,8)$. Tentukan panjang lintasannya dan besar perpindahannya.",
          "solution": "Langkah 1: Lintasannya terdiri atas dua penggal lurus, jadi panjangnya adalah jumlah panjang kedua penggal itu.\n\nLangkah 2: Hitung penggal pertama.\n$\\vec{AB} = \\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$, sehingga $|\\vec{AB}| = \\sqrt{16+9} = \\sqrt{25} = 5$\n\nLangkah 3: Hitung penggal kedua.\n$\\vec{BC} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$, sehingga $|\\vec{BC}| = \\sqrt{9+16} = \\sqrt{25} = 5$\n\nLangkah 4: Jumlahkan keduanya untuk memperoleh panjang lintasannya.\n$5 + 5 = 10$ satuan\n\nLangkah 5: Sekarang perpindahannya, yaitu vektor dari titik AWAL langsung ke titik AKHIR.\n$\\vec{AC} = \\begin{pmatrix} 9-2 \\\\ 8-1 \\end{pmatrix} = \\begin{pmatrix} 7 \\\\ 7 \\end{pmatrix}$\n\nLangkah 6: Hitung besarnya.\n$|\\vec{AC}| = \\sqrt{49+49} = \\sqrt{98} = 7\\sqrt{2}$ satuan, yaitu sekitar $9{,}9$\n\nLangkah 7: Perhatikan bahwa perpindahannya lebih kecil daripada lintasannya, dan selisihnya tipis sebab kedua penggal itu arahnya hampir sama. Periksa pula bahwa $\\vec{AB} + \\vec{BC} = \\begin{pmatrix} 7 \\\\ 7 \\end{pmatrix} = \\vec{AC}$ — perpindahan memang jumlah vektor penggalnya, sedangkan lintasan jumlah PANJANGnya.\n\nKesimpulan: Panjang lintasannya $10$ satuan, sedangkan besar perpindahannya $7\\sqrt{2}$ satuan."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, gambarlah perjalanan berikut pada bidang koordinat — seorang pengantar berangkat dari $(0,0)$, menuju $(8,0)$, lalu ke $(8,6)$, lalu ke $(3,6)$. Hitunglah panjang lintasannya dan besar perpindahannya, lalu bandingkan keduanya. Selanjutnya rancang sendiri satu perjalanan tiga penggal yang panjang lintasannya $24$ satuan tetapi besar perpindahannya $0$, dan jelaskan syarat apa yang harus dipenuhi perjalanan semacam itu.",
      "summary_data": {
        "summary": [
          "Tetapkan arah positif lebih dahulu (misalnya timur dan utara), lalu tuliskan setiap penggal perjalanan sebagai vektor.",
          "PERPINDAHAN adalah jumlah vektor penggalnya; PANJANG LINTASAN adalah jumlah panjang penggalnya.",
          "Keduanya sama hanya bila perjalanannya lurus tanpa berbelok; setiap belokan membuat perpindahan lebih kecil.",
          "Perjalanan yang kembali ke titik awal mempunyai perpindahan $\\vec{0}$ walaupun lintasannya panjang.",
          "Resultan beberapa gaya pada satu titik adalah JUMLAH vektor gayanya, lalu besarnya dihitung sebagai panjang vektor.",
          "Dua kecepatan yang saling tegak lurus tidak boleh dijumlahkan begitu saja; pakailah Pythagoras.",
          "Arus yang tegak lurus arah perahu menambah kecepatannya, tetapi membuat perahu menyimpang dari tujuan.",
          "Titik tengah: $\\vec{OM} = \\frac{1}{2}(\\vec{OA} + \\vec{OB})$, yaitu rata-rata koordinat kedua ujungnya.",
          "Pekerjaan tersulit pada soal cerita bukan berhitung, melainkan memutuskan apakah yang ditanyakan lintasan, perpindahan, atau resultan."
        ],
        "islamic": "Ilmu menjadi berharga ketika dipakai menyelesaikan urusan orang banyak. \"Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya.\" (HR. Ath-Thabrani)"
      },
      "collab_cases": [
        "Seorang pelari berlari $15$ m ke timur lalu $20$ m ke utara. Tentukan vektor perpindahannya, besar perpindahannya, dan panjang lintasannya.",
        "Dua gaya $\\begin{pmatrix} 8 \\\\ -1 \\end{pmatrix}$ newton dan $\\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix}$ newton bekerja pada satu titik. Tentukan resultannya beserta besarnya.",
        "Sebuah perahu diarahkan ke utara dengan kecepatan $12$ km/jam sedangkan arus mengalir ke timur $5$ km/jam. Tentukan besar kecepatan perahu yang sebenarnya.",
        "Tentukan titik tengah ruas garis yang menghubungkan $P(-5,2)$ dan $Q(7,-8)$.",
        "Sebuah benda berpindah dari $K(1,1)$ ke $L(4,5)$ lalu ke $M(8,2)$. Bandingkan panjang lintasannya dengan besar perpindahannya."
      ]
    },
    {
      "id": "P20",
      "bab": "Bab 4: Perbandingan Trigonometri",
      "title": "Perbandingan Trigonometri pada Segitiga Siku-siku",
      "obj": [
        "Menentukan sisi depan, sisi samping, dan sisi miring terhadap suatu sudut lancip yang dipilih.",
        "Menghitung nilai $\\sin$, $\\cos$, dan $\\tan$ suatu sudut dari panjang sisi segitiga siku-siku.",
        "Melengkapi sisi yang belum diketahui dengan Pythagoras bila salah satu perbandingan diketahui."
      ],
      "hook": "Dua segitiga siku-siku dengan sudut lancip yang sama besar — yang satu kecil, yang lain sepuluh kali lebih besar. Panjang sisinya jauh berbeda, tetapi PERBANDINGAN antarsisinya persis sama. Perbandingan yang tidak peduli pada ukuran itulah yang dinamai sinus, kosinus, dan tangen, dan justru karena tidak peduli ukuran ia dapat dipakai mengukur tinggi menara tanpa memanjatnya.",
      "toolkit": [
        {
          "name": "Sinus",
          "math": "$$\\sin \\alpha = \\frac{\\text{depan}}{\\text{miring}}$$"
        },
        {
          "name": "Kosinus",
          "math": "$$\\cos \\alpha = \\frac{\\text{samping}}{\\text{miring}}$$"
        },
        {
          "name": "Tangen",
          "math": "$$\\tan \\alpha = \\frac{\\text{depan}}{\\text{samping}}$$"
        },
        {
          "name": "Sisi Miring",
          "math": "$$\\text{miring} = \\sqrt{\\text{depan}^2 + \\text{samping}^2}$$"
        },
        {
          "name": "Batasnya",
          "math": "$$0 < \\sin \\alpha < 1 \\quad \\text{dan} \\quad 0 < \\cos \\alpha < 1$$"
        }
      ],
      "examples": [
        {
          "problem": "Pada segitiga siku-siku, jelaskan cara menentukan sisi depan, sisi samping, dan sisi miring terhadap sebuah sudut lancip $\\alpha$.",
          "solution": "Langkah 1: Tentukan lebih dahulu sisi MIRINGnya. Sisi miring selalu sisi yang berhadapan dengan sudut siku-siku, dan ia satu-satunya sisi yang tidak berubah walaupun sudut yang ditinjau diganti.\n\nLangkah 2: Sekarang pandang sudut $\\alpha$ yang ditinjau. Sisi DEPAN adalah sisi yang berhadapan dengan $\\alpha$, yaitu yang tidak menyentuh titik sudut $\\alpha$ sama sekali.\n\nLangkah 3: Sisi SAMPING adalah sisi yang mengapit $\\alpha$ dan bukan sisi miring.\n\nLangkah 4: Periksa dengan contoh. Pada segitiga $ABC$ yang siku-siku di $B$, tinjau sudut $A$.\nMiring $AC$; depan $BC$; samping $AB$\n\nLangkah 5: Sekarang tinjau sudut $C$ pada segitiga yang sama.\nMiring tetap $AC$; depan $AB$; samping $BC$\n\nLangkah 6: Perhatikan bahwa sisi depan dan sisi samping BERTUKAR ketika sudut yang ditinjau diganti, sedangkan sisi miring tetap.\n\nLangkah 7: Inilah sebabnya kalimat \"sisi depan\" tidak pernah bermakna sendirian; ia selalu berarti depan TERHADAP sudut yang mana.\n\nKesimpulan: Sisi miring ditentukan oleh sudut siku-sikunya, sedangkan sisi depan dan sisi samping ditentukan oleh sudut lancip yang sedang ditinjau."
        },
        {
          "problem": "Segitiga siku-siku mempunyai sisi depan $3$ dan sisi samping $4$ terhadap sudut $\\alpha$. Hitunglah $\\sin \\alpha$, $\\cos \\alpha$, dan $\\tan \\alpha$.",
          "solution": "Langkah 1: Cari sisi miringnya lebih dahulu, sebab dua di antara tiga perbandingan itu memerlukannya.\n$\\text{miring} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$\n\nLangkah 2: Hitung sinusnya.\n$\\sin \\alpha = \\frac{\\text{depan}}{\\text{miring}} = \\frac{3}{5}$\n\nLangkah 3: Hitung kosinusnya.\n$\\cos \\alpha = \\frac{\\text{samping}}{\\text{miring}} = \\frac{4}{5}$\n\nLangkah 4: Hitung tangennya. Perhatikan bahwa sisi miring tidak dipakai sama sekali di sini.\n$\\tan \\alpha = \\frac{\\text{depan}}{\\text{samping}} = \\frac{3}{4}$\n\nLangkah 5: Periksa kemasukakalannya. Sisi depan dan sisi samping selalu lebih pendek daripada sisi miring, jadi sinus dan kosinus HARUS bernilai antara $0$ dan $1$ — dan keduanya memang demikian.\n\nLangkah 6: Periksa lewat identitas yang berlaku umum.\n$\\left(\\frac{3}{5}\\right)^2 + \\left(\\frac{4}{5}\\right)^2 = \\frac{9}{25} + \\frac{16}{25} = 1$ — cocok\n\nLangkah 7: Perhatikan bahwa tangen boleh lebih besar daripada $1$; yang dibandingkan dua sisi tegak, dan tidak ada aturan mana yang lebih panjang.\n\nKesimpulan: $\\sin \\alpha = \\frac{3}{5}$, $\\cos \\alpha = \\frac{4}{5}$, dan $\\tan \\alpha = \\frac{3}{4}$."
        },
        {
          "problem": "Pada segitiga $ABC$ yang siku-siku di $B$, diketahui $AB = 8$ dan $BC = 6$. Hitunglah $\\cos A$ dan $\\cos C$.",
          "solution": "Langkah 1: Cari sisi miringnya, yaitu sisi di hadapan sudut siku-siku $B$.\n$AC = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$\n\nLangkah 2: Tinjau sudut $A$. Sisi sampingnya adalah $AB$, sebab $AB$ mengapit $A$ dan bukan sisi miring.\n\nLangkah 3: Hitung kosinusnya.\n$\\cos A = \\frac{AB}{AC} = \\frac{8}{10} = \\frac{4}{5}$\n\nLangkah 4: Sekarang tinjau sudut $C$. Sisi sampingnya BUKAN $AB$ lagi, melainkan $BC$.\n\nLangkah 5: Hitung kosinusnya.\n$\\cos C = \\frac{BC}{AC} = \\frac{6}{10} = \\frac{3}{5}$\n\nLangkah 6: Periksa hubungan keduanya. Sudut $A$ dan $C$ saling berpenyiku, dan memang $\\cos A = \\frac{4}{5}$ sama dengan $\\sin C = \\frac{8}{10}$.\n\nLangkah 7: Kekeliruan yang paling sering terjadi adalah memakai sisi samping sudut $A$ untuk menghitung perbandingan sudut $C$. Tuliskan selalu sisi mana yang depan dan mana yang samping SEBELUM berhitung.\n\nKesimpulan: $\\cos A = \\frac{4}{5}$ dan $\\cos C = \\frac{3}{5}$; keduanya berbeda karena sudut yang ditinjau berbeda."
        },
        {
          "problem": "Diketahui $\\sin \\alpha = \\frac{5}{13}$ dengan $\\alpha$ sudut lancip. Hitunglah $\\cos \\alpha$ dan $\\tan \\alpha$.",
          "solution": "Langkah 1: Terjemahkan yang diketahui menjadi panjang sisi. Karena $\\sin \\alpha = \\frac{\\text{depan}}{\\text{miring}}$, ambil segitiga dengan sisi depan $5$ dan sisi miring $13$.\n\nLangkah 2: Perhatikan bahwa sisi miringnya memang yang terpanjang, jadi segitiga semacam itu ada.\n\nLangkah 3: Cari sisi sampingnya dengan Pythagoras.\n$\\text{samping} = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$\n\nLangkah 4: Hitung kosinusnya.\n$\\cos \\alpha = \\frac{12}{13}$\n\nLangkah 5: Hitung tangennya.\n$\\tan \\alpha = \\frac{5}{12}$\n\nLangkah 6: Periksa dengan identitas.\n$\\left(\\frac{5}{13}\\right)^2 + \\left(\\frac{12}{13}\\right)^2 = \\frac{25 + 144}{169} = 1$ — cocok\n\nLangkah 7: Kekeliruan yang sering terjadi adalah MENJUMLAHKAN kuadratnya untuk mencari sisi samping. Yang dicari sisi tegak, jadi kuadratnya dikurangkan; menjumlahkan hanya sah bila yang dicari sisi miring.\n\nKesimpulan: $\\cos \\alpha = \\frac{12}{13}$ dan $\\tan \\alpha = \\frac{5}{12}$."
        },
        {
          "problem": "Diketahui $\\tan \\beta = \\frac{8}{15}$ dengan $\\beta$ lancip. Hitunglah $\\sin \\beta + \\cos \\beta$.",
          "solution": "Langkah 1: Terjemahkan yang diketahui menjadi panjang sisi. Karena tangen membandingkan kedua sisi tegak, ambil sisi depan $8$ dan sisi samping $15$.\n\nLangkah 2: Cari sisi miringnya. Kali ini kuadratnya DIJUMLAHKAN, sebab yang dicari sisi miring.\n$\\text{miring} = \\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$\n\nLangkah 3: Hitung sinusnya.\n$\\sin \\beta = \\frac{8}{17}$\n\nLangkah 4: Hitung kosinusnya.\n$\\cos \\beta = \\frac{15}{17}$\n\nLangkah 5: Jumlahkan keduanya. Penyebutnya sudah sama, jadi cukup pembilangnya.\n$\\frac{8}{17} + \\frac{15}{17} = \\frac{23}{17}$\n\nLangkah 6: Periksa kemasukakalannya. Hasilnya lebih besar daripada $1$ tetapi lebih kecil daripada $2$ — masuk akal, sebab sinus dan kosinus masing-masing antara $0$ dan $1$.\n\nLangkah 7: Perhatikan bahwa $\\frac{23}{17}$ tidak dapat disederhanakan, dan itu wajar. Jangan dipaksa menjadi bilangan bulat.\n\nKesimpulan: $\\sin \\beta + \\cos \\beta = \\frac{23}{17}$."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, gambarlah segitiga $KLM$ yang siku-siku di $L$ dengan $KL = 20$ dan $LM = 21$. Hitunglah keenam bilangan berikut: $\\sin K$, $\\cos K$, $\\tan K$, $\\sin M$, $\\cos M$, dan $\\tan M$. Kemudian temukan sendiri DUA hubungan di antara keenam bilangan itu, dan jelaskan mengapa hubungan itu harus berlaku dengan menunjuk pada sisi mana yang dipakai masing-masingnya.",
      "summary_data": {
        "summary": [
          "Sisi miring selalu sisi di hadapan sudut siku-siku, dan tidak berubah walaupun sudut yang ditinjau diganti.",
          "Sisi depan dan sisi samping BERTUKAR ketika sudut lancip yang ditinjau diganti.",
          "$\\sin \\alpha = \\frac{\\text{depan}}{\\text{miring}}$, $\\cos \\alpha = \\frac{\\text{samping}}{\\text{miring}}$, $\\tan \\alpha = \\frac{\\text{depan}}{\\text{samping}}$.",
          "Perbandingan itu tidak berubah walaupun segitiganya diperbesar, sebab yang dibandingkan nisbah antarsisinya.",
          "Sinus dan kosinus sudut lancip selalu bernilai antara $0$ dan $1$, sebab sisi tegak selalu lebih pendek daripada sisi miring.",
          "Tangen boleh lebih besar daripada $1$, sebab yang dibandingkan dua sisi tegak.",
          "Bila mencari sisi MIRING, kuadratnya dijumlahkan; bila mencari sisi TEGAK, kuadratnya dikurangkan.",
          "Satu perbandingan yang diketahui sudah cukup untuk menemukan kedua perbandingan lainnya lewat Pythagoras.",
          "Periksalah selalu dengan $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$."
        ],
        "islamic": "Nilai sesuatu tidak ditentukan oleh besar kecilnya, melainkan oleh perbandingan yang tetap di dalamnya. \"Sesungguhnya Allah menciptakan segala sesuatu dengan ukuran.\" (QS. Al-Qamar: 49)"
      },
      "collab_cases": [
        "Segitiga siku-siku dengan sisi depan $7$ dan sisi samping $24$ terhadap sudut $\\alpha$. Hitunglah $\\sin \\alpha$, $\\cos \\alpha$, dan $\\tan \\alpha$.",
        "Pada segitiga $PQR$ yang siku-siku di $Q$, diketahui $PQ = 9$ dan $QR = 12$. Hitunglah $\\sin P$ dan $\\sin R$.",
        "Diketahui $\\cos \\alpha = \\frac{20}{29}$ dengan $\\alpha$ lancip. Hitunglah $\\sin \\alpha$ dan $\\tan \\alpha$.",
        "Diketahui $\\tan \\theta = \\frac{40}{9}$ dengan $\\theta$ lancip. Hitunglah $\\sin \\theta + \\cos \\theta$.",
        "Segitiga siku-siku mempunyai sisi miring $41$ dan satu sisi tegak $9$. Hitunglah ketiga perbandingan trigonometri bagi sudut yang menghadap sisi $9$ itu."
      ]
    },
    {
      "id": "P21",
      "bab": "Bab 4: Perbandingan Trigonometri",
      "title": "Perbandingan Trigonometri Sudut Istimewa",
      "obj": [
        "Menurunkan nilai perbandingan trigonometri $30^\\circ$, $45^\\circ$, dan $60^\\circ$ dari kedua segitiga baku, bukan menghafalkannya.",
        "Menetapkan nilai untuk $0^\\circ$ dan $90^\\circ$, serta menjelaskan mengapa $\\tan 90^\\circ$ tidak terdefinisi.",
        "Menghitung nilai bentuk gabungan seperti $2\\sin 30^\\circ \\cdot \\cos 60^\\circ + \\tan 45^\\circ$ secara tepat, tanpa pembulatan."
      ],
      "hook": "Sebagian besar sudut memberi nilai sinus yang berantakan — $\\sin 37^\\circ$ tidak dapat ditulis rapi tanpa kalkulator. Tetapi ada lima sudut yang nilainya dapat dibaca langsung dari dua gambar sederhana: setengah segitiga sama sisi, dan segitiga siku-siku sama kaki. Dua gambar itu menggantikan seluruh tabel hafalan — dan tidak pernah lupa.",
      "toolkit": [
        {
          "name": "Segitiga $30$-$60$",
          "math": "$$\\text{sisi } 1 : \\sqrt{3} : 2$$"
        },
        {
          "name": "Segitiga $45$",
          "math": "$$\\text{sisi } 1 : 1 : \\sqrt{2}$$"
        },
        {
          "name": "Sinus",
          "math": "$$\\sin 30^\\circ = \\frac{1}{2}, \\; \\sin 45^\\circ = \\frac{1}{2}\\sqrt{2}, \\; \\sin 60^\\circ = \\frac{1}{2}\\sqrt{3}$$"
        },
        {
          "name": "Kosinus",
          "math": "$$\\cos 30^\\circ = \\frac{1}{2}\\sqrt{3}, \\; \\cos 45^\\circ = \\frac{1}{2}\\sqrt{2}, \\; \\cos 60^\\circ = \\frac{1}{2}$$"
        },
        {
          "name": "Tangen",
          "math": "$$\\tan 30^\\circ = \\frac{1}{3}\\sqrt{3}, \\; \\tan 45^\\circ = 1, \\; \\tan 60^\\circ = \\sqrt{3}$$"
        }
      ],
      "examples": [
        {
          "problem": "Turunkan nilai $\\sin 30^\\circ$, $\\cos 30^\\circ$, $\\sin 60^\\circ$, dan $\\cos 60^\\circ$ dari segitiga sama sisi.",
          "solution": "Langkah 1: Gambarkan segitiga sama sisi bersisi $2$. Ketiga sudutnya masing-masing $60^\\circ$.\n\nLangkah 2: Tarik garis tinggi dari salah satu titik sudut. Garis itu membelah segitiga menjadi dua segitiga siku-siku yang sama, dan membelah sudut $60^\\circ$ di puncaknya menjadi dua sudut $30^\\circ$.\n\nLangkah 3: Perhatikan salah satu segitiga siku-siku itu. Sisi miringnya $2$, dan alasnya terbelah menjadi $1$.\n\nLangkah 4: Cari garis tingginya dengan Pythagoras — jangan dihafal, hitunglah.\n$t = \\sqrt{2^2 - 1^2} = \\sqrt{4 - 1} = \\sqrt{3}$\n\nLangkah 5: Sekarang tinjau sudut $30^\\circ$ di puncak. Sisi depannya $1$ dan sisi sampingnya $\\sqrt{3}$.\n$\\sin 30^\\circ = \\frac{1}{2}$ dan $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2} = \\frac{1}{2}\\sqrt{3}$\n\nLangkah 6: Sekarang tinjau sudut $60^\\circ$ di alas. Sisi depan dan sisi sampingnya BERTUKAR.\n$\\sin 60^\\circ = \\frac{1}{2}\\sqrt{3}$ dan $\\cos 60^\\circ = \\frac{1}{2}$\n\nLangkah 7: Perhatikan bahwa nilai sinus dan kosinus kedua sudut itu saling bertukar. Itu bukan kebetulan, melainkan akibat langsung dari kedua sudut itu saling berpenyiku.\n\nKesimpulan: Dari satu gambar diperoleh empat nilai sekaligus: $\\sin 30^\\circ = \\cos 60^\\circ = \\frac{1}{2}$ dan $\\cos 30^\\circ = \\sin 60^\\circ = \\frac{1}{2}\\sqrt{3}$."
        },
        {
          "problem": "Turunkan nilai $\\sin 45^\\circ$, $\\cos 45^\\circ$, dan $\\tan 45^\\circ$ dari segitiga siku-siku sama kaki.",
          "solution": "Langkah 1: Gambarkan segitiga siku-siku dengan kedua sisi tegaknya sama panjang, masing-masing $1$.\n\nLangkah 2: Karena kedua sisi tegaknya sama, kedua sudut lancipnya pun sama besar. Jumlah keduanya $90^\\circ$, jadi masing-masing $45^\\circ$.\n\nLangkah 3: Cari sisi miringnya dengan Pythagoras.\n$\\sqrt{1^2 + 1^2} = \\sqrt{2}$\n\nLangkah 4: Hitung sinusnya.\n$\\sin 45^\\circ = \\frac{1}{\\sqrt{2}}$\n\nLangkah 5: Rasionalkan penyebutnya, sebagaimana kebiasaan penulisan pada Bab 1.\n$\\frac{1}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}} \\times \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2} = \\frac{1}{2}\\sqrt{2}$\n\nLangkah 6: Kosinusnya persis sama, sebab sisi depan dan sisi sampingnya sama panjang.\n$\\cos 45^\\circ = \\frac{1}{2}\\sqrt{2}$\n\nLangkah 7: Tangennya membandingkan kedua sisi tegak yang sama panjang itu.\n$\\tan 45^\\circ = \\frac{1}{1} = 1$\n\nKesimpulan: $\\sin 45^\\circ = \\cos 45^\\circ = \\frac{1}{2}\\sqrt{2}$ dan $\\tan 45^\\circ = 1$."
        },
        {
          "problem": "Tentukan nilai perbandingan trigonometri untuk $0^\\circ$ dan $90^\\circ$, serta jelaskan mengapa $\\tan 90^\\circ$ tidak terdefinisi.",
          "solution": "Langkah 1: Bayangkan segitiga siku-siku yang sudut lancipnya dikecilkan terus menerus menuju $0^\\circ$. Sisi depannya makin pendek, sedangkan sisi miring dan sisi sampingnya makin berimpit.\n\nLangkah 2: Maka perbandingannya menuju nilai berikut.\n$\\sin 0^\\circ = 0$ dan $\\cos 0^\\circ = 1$\n\nLangkah 3: Tangennya mengikuti.\n$\\tan 0^\\circ = \\frac{0}{1} = 0$\n\nLangkah 4: Sekarang besarkan sudutnya menuju $90^\\circ$. Kini sisi depannya yang berimpit dengan sisi miring, sedangkan sisi sampingnya makin pendek menuju nol.\n$\\sin 90^\\circ = 1$ dan $\\cos 90^\\circ = 0$\n\nLangkah 5: Susun tangennya.\n$\\tan 90^\\circ = \\frac{1}{0}$\n\nLangkah 6: Pembagian dengan nol tidak mempunyai hasil. Jadi $\\tan 90^\\circ$ TIDAK TERDEFINISI — bukan bernilai nol, dan bukan pula tak berhingga sebagai bilangan.\n\nLangkah 7: Kekeliruan yang paling sering terjadi adalah menuliskan $\\tan 90^\\circ = 0$ karena melihat angka nol pada kosinusnya. Yang nol adalah PENYEBUTnya, dan justru itulah sebabnya ia tidak terdefinisi.\n\nKesimpulan: $\\sin 0^\\circ = 0$, $\\cos 0^\\circ = 1$, $\\tan 0^\\circ = 0$, $\\sin 90^\\circ = 1$, $\\cos 90^\\circ = 0$, sedangkan $\\tan 90^\\circ$ tidak terdefinisi."
        },
        {
          "problem": "Hitunglah nilai $\\sin 60^\\circ \\cdot \\cos 30^\\circ$ dan nilai $\\frac{\\sin 60^\\circ}{\\cos 30^\\circ}$.",
          "solution": "Langkah 1: Tuliskan kedua nilai yang diperlukan.\n$\\sin 60^\\circ = \\frac{1}{2}\\sqrt{3}$ dan $\\cos 30^\\circ = \\frac{1}{2}\\sqrt{3}$\n\nLangkah 2: Perhatikan bahwa keduanya SAMA. Itu akibat kedua sudutnya saling berpenyiku.\n\nLangkah 3: Kerjakan hasil kalinya.\n$\\frac{1}{2}\\sqrt{3} \\times \\frac{1}{2}\\sqrt{3} = \\frac{1}{4} \\times 3 = \\frac{3}{4}$\n\nLangkah 4: Perhatikan bahwa $\\sqrt{3} \\times \\sqrt{3} = 3$, bukan $\\sqrt{9}$ yang lalu dibiarkan berakar.\n\nLangkah 5: Sekarang kerjakan hasil baginya. Karena kedua bilangannya sama, hasilnya langsung terlihat.\n$\\frac{\\frac{1}{2}\\sqrt{3}}{\\frac{1}{2}\\sqrt{3}} = 1$\n\nLangkah 6: Periksa dengan mengerjakannya secara panjang.\n$\\frac{1}{2}\\sqrt{3} \\div \\frac{1}{2}\\sqrt{3} = \\frac{1}{2}\\sqrt{3} \\times \\frac{2}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{2\\sqrt{3}} = 1$ — cocok\n\nLangkah 7: Perhatikan bahwa kedua soal itu memakai bilangan yang sama persis, tetapi hasilnya jauh berbeda — $\\frac{3}{4}$ dan $1$. Membaca tanda operasinya adalah separuh pekerjaan.\n\nKesimpulan: $\\sin 60^\\circ \\cdot \\cos 30^\\circ = \\frac{3}{4}$, sedangkan $\\frac{\\sin 60^\\circ}{\\cos 30^\\circ} = 1$."
        },
        {
          "problem": "Hitunglah nilai $2\\sin 30^\\circ \\cdot \\cos 60^\\circ + \\tan 45^\\circ$.",
          "solution": "Langkah 1: Ganti setiap perbandingan dengan nilainya lebih dahulu, sebelum berhitung.\n$\\sin 30^\\circ = \\frac{1}{2}$, $\\cos 60^\\circ = \\frac{1}{2}$, $\\tan 45^\\circ = 1$\n\nLangkah 2: Tuliskan bentuknya kembali.\n$2 \\times \\frac{1}{2} \\times \\frac{1}{2} + 1$\n\nLangkah 3: Kerjakan perkaliannya lebih dahulu, sesuai urutan operasi.\n$2 \\times \\frac{1}{2} = 1$\n\nLangkah 4: Lanjutkan perkaliannya.\n$1 \\times \\frac{1}{2} = \\frac{1}{2}$\n\nLangkah 5: Baru kerjakan penjumlahannya.\n$\\frac{1}{2} + 1 = \\frac{3}{2}$\n\nLangkah 6: Periksa dengan nilai hampiran. $\\sin 30^\\circ$ dan $\\cos 60^\\circ$ keduanya $0{,}5$, sehingga sukunya $2 \\times 0{,}25 = 0{,}5$, lalu ditambah $1$ menjadi $1{,}5$ — cocok dengan $\\frac{3}{2}$.\n\nLangkah 7: Kekeliruan yang sering terjadi adalah menjumlahkan lebih dahulu, yaitu menghitung $\\frac{1}{2} + 1$ lalu dikalikan — cara itu memberi $3$, dan salah. Urutan operasi pada trigonometri sama persis seperti pada aljabar biasa.\n\nKesimpulan: $2\\sin 30^\\circ \\cdot \\cos 60^\\circ + \\tan 45^\\circ = \\frac{3}{2}$."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, gambarlah kedua segitiga baku LENGKAP dengan panjang sisinya, lalu susun sendiri tabel nilai $\\sin$, $\\cos$, dan $\\tan$ untuk $0^\\circ$, $30^\\circ$, $45^\\circ$, $60^\\circ$, dan $90^\\circ$ — dibaca dari gambar, bukan dari hafalan. Setelah tabelnya jadi, temukan DUA pola pada tabel itu dan jelaskan sebabnya. Terakhir, hitunglah $\\frac{\\sin 30^\\circ + \\cos 60^\\circ}{\\tan 45^\\circ}$ dan $\\tan 60^\\circ \\cdot \\tan 30^\\circ$, lalu terangkan mengapa hasil yang kedua sesederhana itu.",
      "summary_data": {
        "summary": [
          "Semua nilai sudut istimewa dapat dibaca dari DUA gambar: setengah segitiga sama sisi, dan segitiga siku-siku sama kaki.",
          "Setengah segitiga sama sisi memberi perbandingan sisi $1 : \\sqrt{3} : 2$, yang melahirkan nilai $30^\\circ$ dan $60^\\circ$.",
          "Segitiga siku-siku sama kaki memberi perbandingan $1 : 1 : \\sqrt{2}$, yang melahirkan nilai $45^\\circ$.",
          "$\\sin 30^\\circ = \\frac{1}{2}$, $\\sin 45^\\circ = \\frac{1}{2}\\sqrt{2}$, $\\sin 60^\\circ = \\frac{1}{2}\\sqrt{3}$ — nilainya naik seiring naiknya sudut.",
          "Nilai kosinus adalah nilai sinus yang dibaca terbalik: $\\cos 30^\\circ = \\sin 60^\\circ$ dan seterusnya.",
          "$\\tan 30^\\circ = \\frac{1}{3}\\sqrt{3}$, $\\tan 45^\\circ = 1$, $\\tan 60^\\circ = \\sqrt{3}$; penyebut berakar selalu dirasionalkan.",
          "$\\sin 0^\\circ = 0$, $\\cos 0^\\circ = 1$, $\\sin 90^\\circ = 1$, $\\cos 90^\\circ = 0$.",
          "$\\tan 90^\\circ$ TIDAK TERDEFINISI, sebab penyebutnya nol — bukan bernilai nol.",
          "Ganti setiap perbandingan dengan nilainya lebih dahulu, baru berhitung mengikuti urutan operasi biasa.",
          "$\\sqrt{3} \\times \\sqrt{3} = 3$; jangan dibiarkan berakar."
        ],
        "islamic": "Yang penting dihafal sedikit saja; selebihnya cukup dipahami sumbernya. \"Dan sungguh telah Kami mudahkan Al-Qur'an untuk peringatan, maka adakah yang mau mengambil pelajaran?\" (QS. Al-Qamar: 17)"
      },
      "collab_cases": [
        "Hitunglah $\\sin 30^\\circ + \\cos 60^\\circ + \\tan 45^\\circ$.",
        "Hitunglah $\\cos 45^\\circ \\cdot \\sin 45^\\circ$.",
        "Hitunglah $\\tan 60^\\circ - \\tan 30^\\circ$, lalu tuliskan hasilnya dalam bentuk paling sederhana.",
        "Hitunglah $4\\sin 60^\\circ \\cdot \\cos 30^\\circ - 2\\sin 90^\\circ$.",
        "Jelaskan mengapa $\\tan 90^\\circ$ tidak terdefinisi, dan mengapa jawaban \"$\\tan 90^\\circ = 0$\" keliru."
      ]
    },
    {
      "id": "P22",
      "bab": "Bab 4: Perbandingan Trigonometri",
      "title": "Menentukan Panjang Sisi dan Besar Sudut",
      "obj": [
        "Memilih perbandingan yang tepat ($\\sin$, $\\cos$, atau $\\tan$) berdasarkan sisi mana yang diketahui dan mana yang dicari.",
        "Menghitung panjang sisi yang belum diketahui pada segitiga siku-siku bersudut istimewa.",
        "Menentukan besar sudut lancip bila dua panjang sisi diketahui, lalu memeriksa hasilnya."
      ],
      "hook": "Sampai pertemuan lalu, arahnya selalu sama: sisi diketahui, perbandingan dicari. Sekarang arahnya dibalik — sudut dan satu sisi diketahui, sisi lainnya dicari. Justru arah inilah yang dipakai di luar kelas: tidak seorang pun mengukur tinggi menara dengan meteran, tetapi mengukur sudut pandang dan satu jarak mendatar itu mudah.",
      "toolkit": [
        {
          "name": "Memilih Perbandingan",
          "math": "$$\\text{lihat SISI mana yang diketahui dan mana yang dicari}$$"
        },
        {
          "name": "Depan & Miring",
          "math": "$$\\sin \\alpha = \\frac{\\text{depan}}{\\text{miring}}$$"
        },
        {
          "name": "Samping & Miring",
          "math": "$$\\cos \\alpha = \\frac{\\text{samping}}{\\text{miring}}$$"
        },
        {
          "name": "Depan & Samping",
          "math": "$$\\tan \\alpha = \\frac{\\text{depan}}{\\text{samping}}$$"
        },
        {
          "name": "Mencari Sudut",
          "math": "$$\\text{hitung perbandingannya, lalu cocokkan dengan tabel sudut istimewa}$$"
        }
      ],
      "examples": [
        {
          "problem": "Sebuah segitiga siku-siku mempunyai sudut $30^\\circ$ dan sisi miring $20$ cm. Tentukan panjang sisi di depan sudut $30^\\circ$.",
          "solution": "Langkah 1: Daftarkan apa yang diketahui dan apa yang dicari — inilah langkah yang menentukan perbandingan mana yang dipakai.\nDiketahui: sisi MIRING; dicari: sisi DEPAN\n\nLangkah 2: Perbandingan yang memuat sisi depan dan sisi miring sekaligus adalah sinus.\n$\\sin 30^\\circ = \\frac{\\text{depan}}{20}$\n\nLangkah 3: Masukkan nilai sudut istimewanya.\n$\\frac{1}{2} = \\frac{\\text{depan}}{20}$\n\nLangkah 4: Selesaikan dengan perkalian silang.\n$\\text{depan} = 20 \\times \\frac{1}{2} = 10$ cm\n\nLangkah 5: Periksa kemasukakalannya. Sisi depan harus lebih pendek daripada sisi miring — dan $10 < 20$, memang demikian.\n\nLangkah 6: Periksa pula dengan sifat yang khas: pada segitiga bersudut $30^\\circ$, sisi di depan sudut $30^\\circ$ SELALU separuh sisi miringnya. Sifat itu datang dari segitiga sama sisi yang dibelah dua.\n\nLangkah 7: Kekeliruan yang sering terjadi adalah memakai tangen. Tangen tidak memuat sisi miring sama sekali, jadi ia tidak dapat dipakai di sini.\n\nKesimpulan: Panjang sisi di depan sudut $30^\\circ$ adalah $10$ cm, yaitu separuh sisi miringnya."
        },
        {
          "problem": "Sebuah segitiga siku-siku mempunyai sudut $60^\\circ$ dan sisi samping (yang mengapit sudut itu, bukan sisi miring) sepanjang $8$ cm. Tentukan panjang sisi di depan sudut $60^\\circ$.",
          "solution": "Langkah 1: Daftarkan yang diketahui dan yang dicari.\nDiketahui: sisi SAMPING; dicari: sisi DEPAN\n\nLangkah 2: Perbandingan yang memuat keduanya tanpa sisi miring adalah tangen.\n$\\tan 60^\\circ = \\frac{\\text{depan}}{8}$\n\nLangkah 3: Masukkan nilainya.\n$\\sqrt{3} = \\frac{\\text{depan}}{8}$\n\nLangkah 4: Selesaikan.\n$\\text{depan} = 8\\sqrt{3}$ cm\n\nLangkah 5: Periksa kemasukakalannya dengan hampiran. $\\sqrt{3} \\approx 1{,}73$, jadi hasilnya sekitar $13{,}9$ cm.\n\nLangkah 6: Masuk akal, sebab sudut $60^\\circ$ lebih besar daripada $45^\\circ$ sehingga sisi depannya harus LEBIH PANJANG daripada sisi sampingnya.\n\nLangkah 7: Perhatikan bahwa jawabannya dibiarkan dalam bentuk akar. Menuliskan $13{,}9$ boleh hanya bila soalnya meminta hampiran; bentuk $8\\sqrt{3}$ itulah nilai yang tepat.\n\nKesimpulan: Panjang sisi di depan sudut $60^\\circ$ adalah $8\\sqrt{3}$ cm."
        },
        {
          "problem": "Sebuah segitiga siku-siku mempunyai sudut $45^\\circ$ dan sisi di depan sudut itu sepanjang $7$ cm. Tentukan panjang sisi miringnya.",
          "solution": "Langkah 1: Daftarkan yang diketahui dan yang dicari.\nDiketahui: sisi DEPAN; dicari: sisi MIRING\n\nLangkah 2: Perbandingan yang memuat keduanya adalah sinus. Perhatikan bahwa kali ini yang dicari ada di PENYEBUT.\n$\\sin 45^\\circ = \\frac{7}{\\text{miring}}$\n\nLangkah 3: Masukkan nilainya.\n$\\frac{1}{2}\\sqrt{2} = \\frac{7}{\\text{miring}}$\n\nLangkah 4: Selesaikan dengan perkalian silang.\n$\\text{miring} \\times \\frac{1}{2}\\sqrt{2} = 7 \\Rightarrow \\text{miring} = \\frac{7}{\\frac{1}{2}\\sqrt{2}} = \\frac{14}{\\sqrt{2}}$\n\nLangkah 5: Rasionalkan penyebutnya.\n$\\frac{14}{\\sqrt{2}} \\times \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{14\\sqrt{2}}{2} = 7\\sqrt{2}$ cm\n\nLangkah 6: Periksa kemasukakalannya. $7\\sqrt{2} \\approx 9{,}9$ cm, jadi sisi miringnya lebih panjang daripada sisi depannya — memang harus demikian.\n\nLangkah 7: Perhatikan bedanya dengan contoh pertama: di sana yang dicari berada di pembilang sehingga cukup DIKALIKAN, sedangkan di sini ia di penyebut sehingga harus DIBAGI. Tuliskan selalu persamaannya lengkap sebelum menghitung.\n\nKesimpulan: Panjang sisi miringnya $7\\sqrt{2}$ cm."
        },
        {
          "problem": "Sebuah segitiga siku-siku mempunyai sisi depan $5$ dan sisi miring $10$ terhadap sudut $\\alpha$. Tentukan besar $\\alpha$.",
          "solution": "Langkah 1: Kali ini yang dicari SUDUTnya, jadi arahnya berkebalikan dengan ketiga contoh sebelumnya.\n\nLangkah 2: Sisi yang diketahui adalah depan dan miring, jadi hitunglah sinusnya.\n$\\sin \\alpha = \\frac{5}{10}$\n\nLangkah 3: Sederhanakan.\n$\\sin \\alpha = \\frac{1}{2}$\n\nLangkah 4: Cocokkan dengan tabel sudut istimewa. Sudut yang sinusnya $\\frac{1}{2}$ adalah $30^\\circ$.\n$\\alpha = 30^\\circ$\n\nLangkah 5: Periksa dengan memasukkannya kembali.\n$\\sin 30^\\circ = \\frac{1}{2}$ — cocok\n\nLangkah 6: Periksa kemasukakalannya secara gambar. Sisi depannya hanya separuh sisi miring, jadi sudutnya memang kecil.\n\nLangkah 7: Perhatikan bahwa langkah 3 tidak boleh dilewati. Kalau $\\frac{5}{10}$ dicocokkan begitu saja dengan tabel, ia tidak akan ditemukan; tabel hanya memuat bentuk yang sudah sederhana.\n\nKesimpulan: $\\alpha = 30^\\circ$."
        },
        {
          "problem": "Sebuah tangga bersandar pada dinding dan membentuk sudut $60^\\circ$ dengan lantai. Panjang tangga $4$ m. Tentukan tinggi ujung atas tangga dari lantai dan jarak kaki tangga ke dinding.",
          "solution": "Langkah 1: Gambarkan keadaannya. Tangga menjadi sisi MIRING, dinding menjadi sisi tegak, dan lantai menjadi sisi datar.\n\nLangkah 2: Tentukan kedudukan setiap sisi terhadap sudut $60^\\circ$ di lantai.\nMiring $= 4$ (tangga); depan $=$ tinggi di dinding; samping $=$ jarak di lantai\n\nLangkah 3: Untuk tingginya, pakai sinus sebab yang terlibat sisi depan dan sisi miring.\n$\\sin 60^\\circ = \\frac{\\text{tinggi}}{4} \\Rightarrow \\text{tinggi} = 4 \\times \\frac{1}{2}\\sqrt{3} = 2\\sqrt{3}$ m\n\nLangkah 4: Untuk jaraknya, pakai kosinus sebab yang terlibat sisi samping dan sisi miring.\n$\\cos 60^\\circ = \\frac{\\text{jarak}}{4} \\Rightarrow \\text{jarak} = 4 \\times \\frac{1}{2} = 2$ m\n\nLangkah 5: Periksa dengan Pythagoras — pemeriksaan yang seluruhnya tidak memakai trigonometri.\n$(2\\sqrt{3})^2 + 2^2 = 12 + 4 = 16 = 4^2$ — cocok\n\nLangkah 6: Periksa kemasukakalannya. $2\\sqrt{3} \\approx 3{,}46$ m, jadi tangganya berdiri cukup tegak — masuk akal untuk sudut $60^\\circ$.\n\nLangkah 7: Perhatikan bahwa tangganya SELALU sisi miring, jadi panjangnya tidak pernah menjadi sisi depan maupun sisi samping. Kekeliruan yang sering terjadi adalah menganggap tinggi dinding sama dengan panjang tangga.\n\nKesimpulan: Tinggi ujung atas tangga $2\\sqrt{3}$ m dan jarak kaki tangga ke dinding $2$ m."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, gambarlah segitiga $ABC$ yang siku-siku di $C$ dengan besar sudut $A = 30^\\circ$ dan $AB = 16$ cm. Hitunglah $BC$, $AC$, dan besar sudut $B$. Kemudian periksalah hasilnya dengan Pythagoras — bukan dengan trigonometri lagi. Selanjutnya buatlah sendiri satu segitiga siku-siku bersudut $45^\\circ$ yang salah satu sisinya $9$ cm, lalu hitung kedua sisi lainnya; bandingkan dengan kelompok lain, dan jelaskan mengapa jawabannya bisa berbeda-beda padahal soalnya sama.",
      "summary_data": {
        "summary": [
          "Langkah pertama selalu sama: daftarkan sisi mana yang DIKETAHUI dan sisi mana yang DICARI.",
          "Depan dan miring terlibat $\\Rightarrow$ pakai sinus; samping dan miring $\\Rightarrow$ kosinus; depan dan samping $\\Rightarrow$ tangen.",
          "Bila yang dicari berada di PEMBILANG, ia diperoleh dengan mengalikan; bila di PENYEBUT, dengan membagi.",
          "Tuliskan persamaannya lengkap sebelum menghitung — itu yang mencegah tertukarnya kali dengan bagi.",
          "Pada segitiga bersudut $30^\\circ$, sisi di depan $30^\\circ$ selalu separuh sisi miringnya.",
          "Pada segitiga siku-siku sama kaki, kedua sudut lancipnya $45^\\circ$ dan sisi miringnya $\\sqrt{2}$ kali kakinya.",
          "Untuk mencari SUDUT, hitung perbandingannya lebih dahulu, SEDERHANAKAN, baru cocokkan dengan tabel.",
          "Jawaban berbentuk akar seperti $8\\sqrt{3}$ sudah merupakan nilai yang tepat; jangan dibulatkan tanpa diminta.",
          "Periksalah hasilnya dengan Pythagoras, sebab pemeriksaan itu tidak memakai trigonometri sama sekali.",
          "Pada soal tangga, tangganya selalu sisi MIRING — bukan sisi tegak."
        ],
        "islamic": "Yang tidak terjangkau tangan masih dapat dijangkau akal, bila diberi alat yang tepat. \"Dan Dia mengajarkan kepadamu apa yang belum kamu ketahui.\" (QS. An-Nisa: 113)"
      },
      "collab_cases": [
        "Segitiga siku-siku dengan sudut $30^\\circ$ dan sisi miring $14$ cm. Tentukan kedua sisi tegaknya.",
        "Segitiga siku-siku dengan sudut $45^\\circ$ dan satu sisi tegak $11$ cm. Tentukan sisi miringnya.",
        "Segitiga siku-siku dengan sudut $60^\\circ$ dan sisi di depan sudut itu $9\\sqrt{3}$ cm. Tentukan sisi sampingnya.",
        "Segitiga siku-siku dengan sisi depan $6\\sqrt{3}$ dan sisi samping $6$ terhadap sudut $\\alpha$. Tentukan besar $\\alpha$.",
        "Sebuah tangga $10$ m bersandar dengan sudut $30^\\circ$ terhadap lantai. Tentukan tinggi ujung atasnya dan jarak kakinya ke dinding, lalu periksa dengan Pythagoras."
      ]
    },
    {
      "id": "P23",
      "bab": "Bab 4: Perbandingan Trigonometri",
      "title": "Cosecan, Secan, dan Cotangen",
      "obj": [
        "Menuliskan cosecan, secan, dan cotangen sebagai kebalikan dari sinus, kosinus, dan tangen.",
        "Menghitung ketiganya dari panjang sisi segitiga siku-siku maupun dari sudut istimewa.",
        "Menjelaskan mengapa ada nilai yang tidak terdefinisi, dan pada sudut mana hal itu terjadi."
      ],
      "hook": "Tiga perbandingan pertama membandingkan sisi dengan cara tertentu — lalu ada tiga lagi yang tidak membawa gagasan baru sama sekali: mereka hanya perbandingan yang sama dibaca TERBALIK. Justru karena tidak membawa gagasan baru, ketiganya mudah — asalkan satu hal dijaga: yang dibalik itu pasangannya yang mana. Cosecan berpasangan dengan sinus, bukan dengan kosinus, meskipun namanya mirip.",
      "toolkit": [
        {
          "name": "Cosecan",
          "math": "$$\\csc \\alpha = \\frac{1}{\\sin \\alpha} = \\frac{\\text{miring}}{\\text{depan}}$$"
        },
        {
          "name": "Secan",
          "math": "$$\\sec \\alpha = \\frac{1}{\\cos \\alpha} = \\frac{\\text{miring}}{\\text{samping}}$$"
        },
        {
          "name": "Cotangen",
          "math": "$$\\cot \\alpha = \\frac{1}{\\tan \\alpha} = \\frac{\\text{samping}}{\\text{depan}}$$"
        },
        {
          "name": "Pasangannya",
          "math": "$$\\sin \\leftrightarrow \\csc, \\quad \\cos \\leftrightarrow \\sec, \\quad \\tan \\leftrightarrow \\cot$$"
        },
        {
          "name": "Cotangen Lain",
          "math": "$$\\cot \\alpha = \\frac{\\cos \\alpha}{\\sin \\alpha}$$"
        }
      ],
      "examples": [
        {
          "problem": "Tuliskan ketiga perbandingan kebalikan beserta pasangannya, lalu jelaskan mengapa nama cosecan mudah menyesatkan.",
          "solution": "Langkah 1: Tuliskan pasangannya satu per satu.\n$\\csc \\alpha = \\frac{1}{\\sin \\alpha}$, $\\sec \\alpha = \\frac{1}{\\cos \\alpha}$, $\\cot \\alpha = \\frac{1}{\\tan \\alpha}$\n\nLangkah 2: Perhatikan bahwa COsecan berpasangan dengan SINUS, bukan dengan KOsinus. Awalan \"co\" pada kedua nama itu tidak menandakan pasangan.\n\nLangkah 3: Begitu pula SECAN berpasangan dengan KOSINUS, bukan dengan sinus.\n\nLangkah 4: Hanya COTANGEN yang namanya sesuai dengan dugaan, yaitu berpasangan dengan TANGEN.\n\nLangkah 5: Tuliskan pula bentuk sisinya, supaya dapat dipakai langsung tanpa menghitung sinus lebih dahulu.\n$\\csc \\alpha = \\frac{\\text{miring}}{\\text{depan}}$, $\\sec \\alpha = \\frac{\\text{miring}}{\\text{samping}}$, $\\cot \\alpha = \\frac{\\text{samping}}{\\text{depan}}$\n\nLangkah 6: Perhatikan pola yang memudahkan: ketiganya hanya menukar pembilang dengan penyebut pada rumus pasangannya.\n\nLangkah 7: Perhatikan akibatnya pada nilainya. Karena sinus dan kosinus sudut lancip selalu kurang dari $1$, maka cosecan dan secan sudut lancip selalu LEBIH BESAR daripada $1$.\n\nKesimpulan: Cosecan membalik sinus, secan membalik kosinus, cotangen membalik tangen; awalan \"co\" pada namanya bukan petunjuk pasangan."
        },
        {
          "problem": "Diketahui $\\sin \\alpha = \\frac{3}{5}$ dengan $\\alpha$ lancip. Hitunglah $\\csc \\alpha$, $\\sec \\alpha$, dan $\\cot \\alpha$.",
          "solution": "Langkah 1: Cosecan langsung diperoleh dengan membalik sinusnya.\n$\\csc \\alpha = \\frac{1}{\\frac{3}{5}} = \\frac{5}{3}$\n\nLangkah 2: Untuk dua lainnya, perlu kosinus dan tangennya. Terjemahkan dahulu menjadi panjang sisi.\nDepan $= 3$, miring $= 5$\n\nLangkah 3: Cari sisi sampingnya dengan Pythagoras.\n$\\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$\n\nLangkah 4: Hitung secannya, yaitu miring dibagi samping.\n$\\sec \\alpha = \\frac{5}{4}$\n\nLangkah 5: Hitung cotangennya, yaitu samping dibagi depan.\n$\\cot \\alpha = \\frac{4}{3}$\n\nLangkah 6: Periksa dengan membalik pasangannya. Kosinusnya $\\frac{4}{5}$ sehingga secannya $\\frac{5}{4}$ — cocok; tangennya $\\frac{3}{4}$ sehingga cotangennya $\\frac{4}{3}$ — cocok.\n\nLangkah 7: Perhatikan bahwa cosecan dan secan keduanya lebih besar daripada $1$, sedangkan cotangen boleh apa saja — sebab yang dibandingkan dua sisi tegak.\n\nKesimpulan: $\\csc \\alpha = \\frac{5}{3}$, $\\sec \\alpha = \\frac{5}{4}$, dan $\\cot \\alpha = \\frac{4}{3}$."
        },
        {
          "problem": "Hitunglah $\\sec 60^\\circ$ dan $\\cot 30^\\circ$.",
          "solution": "Langkah 1: Untuk secan, ambil nilai kosinusnya lebih dahulu.\n$\\cos 60^\\circ = \\frac{1}{2}$\n\nLangkah 2: Balikkan.\n$\\sec 60^\\circ = \\frac{1}{\\frac{1}{2}} = 2$\n\nLangkah 3: Periksa lewat sisi segitiganya. Terhadap sudut $60^\\circ$, sisi sampingnya $1$ dan sisi miringnya $2$, jadi $\\frac{\\text{miring}}{\\text{samping}} = \\frac{2}{1} = 2$ — cocok.\n\nLangkah 4: Untuk cotangen, ambil nilai tangennya.\n$\\tan 30^\\circ = \\frac{1}{3}\\sqrt{3}$\n\nLangkah 5: Balikkan, lalu rapikan.\n$\\cot 30^\\circ = \\frac{1}{\\frac{1}{3}\\sqrt{3}} = \\frac{3}{\\sqrt{3}} = \\frac{3\\sqrt{3}}{3} = \\sqrt{3}$\n\nLangkah 6: Periksa lewat sisi segitiganya. Terhadap sudut $30^\\circ$, sisi sampingnya $\\sqrt{3}$ dan sisi depannya $1$, jadi $\\frac{\\sqrt{3}}{1} = \\sqrt{3}$ — cocok.\n\nLangkah 7: Perhatikan bahwa membalik bentuk berakar hampir selalu perlu dirasionalkan. Jawaban $\\frac{3}{\\sqrt{3}}$ benar nilainya, tetapi belum rapi penulisannya.\n\nKesimpulan: $\\sec 60^\\circ = 2$ dan $\\cot 30^\\circ = \\sqrt{3}$."
        },
        {
          "problem": "Diketahui $\\tan \\alpha = \\frac{12}{5}$ dengan $\\alpha$ lancip. Hitunglah $\\sec \\alpha$ dan $\\csc \\alpha$.",
          "solution": "Langkah 1: Terjemahkan yang diketahui menjadi panjang sisi.\nDepan $= 12$, samping $= 5$\n\nLangkah 2: Cari sisi miringnya. Karena yang dicari sisi miring, kuadratnya dijumlahkan.\n$\\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$\n\nLangkah 3: Hitung secannya, yaitu miring dibagi samping.\n$\\sec \\alpha = \\frac{13}{5}$\n\nLangkah 4: Hitung cosecannya, yaitu miring dibagi depan.\n$\\csc \\alpha = \\frac{13}{12}$\n\nLangkah 5: Periksa lewat pasangannya. Kosinusnya $\\frac{5}{13}$ dan sinusnya $\\frac{12}{13}$, dan membalik keduanya memberi hasil yang sama — cocok.\n\nLangkah 6: Periksa kemasukakalannya. Keduanya lebih besar daripada $1$, sebagaimana seharusnya untuk sudut lancip.\n\nLangkah 7: Kekeliruan yang paling sering terjadi adalah menukar keduanya, yaitu menjawab $\\sec \\alpha = \\frac{13}{12}$. Cara menghindarinya: secan berpasangan dengan KOSINUS, dan kosinus memakai sisi SAMPING.\n\nKesimpulan: $\\sec \\alpha = \\frac{13}{5}$ dan $\\csc \\alpha = \\frac{13}{12}$."
        },
        {
          "problem": "Tentukan nilai $\\csc 90^\\circ$, $\\sec 0^\\circ$, lalu jelaskan mengapa $\\csc 0^\\circ$ dan $\\cot 0^\\circ$ tidak terdefinisi.",
          "solution": "Langkah 1: Hitung $\\csc 90^\\circ$ dari sinusnya.\n$\\sin 90^\\circ = 1$, sehingga $\\csc 90^\\circ = \\frac{1}{1} = 1$\n\nLangkah 2: Hitung $\\sec 0^\\circ$ dari kosinusnya.\n$\\cos 0^\\circ = 1$, sehingga $\\sec 0^\\circ = \\frac{1}{1} = 1$\n\nLangkah 3: Sekarang susun $\\csc 0^\\circ$.\n$\\sin 0^\\circ = 0$, sehingga $\\csc 0^\\circ = \\frac{1}{0}$\n\nLangkah 4: Pembagian dengan nol tidak mempunyai hasil, jadi $\\csc 0^\\circ$ TIDAK TERDEFINISI.\n\nLangkah 5: Susun pula $\\cot 0^\\circ$.\n$\\tan 0^\\circ = 0$, sehingga $\\cot 0^\\circ = \\frac{1}{0}$ — juga tidak terdefinisi\n\nLangkah 6: Susun aturan umumnya. Sebuah perbandingan kebalikan tidak terdefinisi tepat ketika PASANGANnya bernilai nol.\n$\\csc$ mati di $0^\\circ$; $\\sec$ mati di $90^\\circ$; $\\cot$ mati di $0^\\circ$\n\nLangkah 7: Perhatikan bahwa \"tidak terdefinisi\" tidak sama dengan \"bernilai nol\". Justru nilainya membesar tanpa batas ketika sudutnya mendekati titik itu.\n\nKesimpulan: $\\csc 90^\\circ = 1$ dan $\\sec 0^\\circ = 1$; sedangkan $\\csc 0^\\circ$ dan $\\cot 0^\\circ$ tidak terdefinisi sebab pasangannya bernilai nol."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, susunlah tabel LENGKAP berisi enam perbandingan ($\\sin$, $\\cos$, $\\tan$, $\\csc$, $\\sec$, $\\cot$) untuk sudut $30^\\circ$, $45^\\circ$, dan $60^\\circ$ — seluruhnya dibaca dari kedua segitiga baku. Tandai setiap kotak yang nilainya lebih besar daripada $1$, lalu jelaskan mengapa kotak-kotak itu berkumpul di baris tertentu. Terakhir, daftarkan SEMUA sudut istimewa yang membuat salah satu dari keenam perbandingan itu tidak terdefinisi, beserta alasannya.",
      "summary_data": {
        "summary": [
          "$\\csc \\alpha = \\frac{1}{\\sin \\alpha}$, $\\sec \\alpha = \\frac{1}{\\cos \\alpha}$, $\\cot \\alpha = \\frac{1}{\\tan \\alpha}$.",
          "Awalan \"co\" bukan petunjuk pasangan: COsecan berpasangan dengan SINUS, dan SECAN dengan KOSINUS.",
          "Lewat sisi: $\\csc \\alpha = \\frac{\\text{miring}}{\\text{depan}}$, $\\sec \\alpha = \\frac{\\text{miring}}{\\text{samping}}$, $\\cot \\alpha = \\frac{\\text{samping}}{\\text{depan}}$.",
          "Ketiganya hanya menukar pembilang dengan penyebut pada rumus pasangannya — tidak ada gagasan baru.",
          "$\\cot \\alpha$ boleh pula dihitung sebagai $\\frac{\\cos \\alpha}{\\sin \\alpha}$.",
          "Cosecan dan secan sudut lancip SELALU lebih besar daripada $1$, sebab sisi miring selalu terpanjang.",
          "Cotangen boleh bernilai berapa pun, sebab yang dibandingkan dua sisi tegak.",
          "Sebuah perbandingan kebalikan tidak terdefinisi tepat ketika PASANGANnya bernilai nol.",
          "$\\csc 0^\\circ$ dan $\\cot 0^\\circ$ tidak terdefinisi; $\\sec 90^\\circ$ dan $\\tan 90^\\circ$ juga tidak.",
          "Membalik bentuk berakar hampir selalu perlu dirasionalkan penyebutnya."
        ],
        "islamic": "Memandang satu hal dari arah yang berlawanan sering memudahkan, bukan menyulitkan. \"Maka sesungguhnya bersama kesulitan ada kemudahan.\" (QS. Al-Insyirah: 5)"
      },
      "collab_cases": [
        "Diketahui $\\sin \\alpha = \\frac{7}{25}$ dengan $\\alpha$ lancip. Hitunglah $\\csc \\alpha$, $\\sec \\alpha$, dan $\\cot \\alpha$.",
        "Hitunglah $\\csc 45^\\circ$, $\\sec 45^\\circ$, dan $\\cot 45^\\circ$.",
        "Hitunglah $\\csc 60^\\circ$ dan $\\cot 60^\\circ$, lalu rasionalkan penyebutnya.",
        "Diketahui $\\cot \\theta = \\frac{20}{21}$ dengan $\\theta$ lancip. Hitunglah $\\sin \\theta$ dan $\\sec \\theta$.",
        "Jelaskan pada sudut istimewa mana saja $\\sec$ dan $\\cot$ tidak terdefinisi, beserta alasannya."
      ]
    },
    {
      "id": "P24",
      "bab": "Bab 4: Perbandingan Trigonometri",
      "title": "Hubungan Antarperbandingan dan Sudut Penyiku",
      "obj": [
        "Menurunkan identitas $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ dari teorema Pythagoras, bukan menghafalkannya.",
        "Memakai identitas itu untuk menemukan satu perbandingan dari perbandingan lain tanpa menggambar segitiga.",
        "Memakai hubungan sudut penyiku $\\sin \\alpha = \\cos(90^\\circ - \\alpha)$ untuk menyederhanakan bentuk."
      ],
      "hook": "Sampai sekarang, mencari kosinus dari sinus selalu melewati gambar segitiga dan Pythagoras. Ternyata Pythagoras itu dapat dituliskan SEKALI SAJA dalam bahasa perbandingan — dan hasilnya satu kalimat pendek yang berlaku untuk setiap sudut: $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$. Sejak itu segitiganya tidak perlu digambar lagi.",
      "toolkit": [
        {
          "name": "Identitas Dasar",
          "math": "$$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$$"
        },
        {
          "name": "Tangen",
          "math": "$$\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}$$"
        },
        {
          "name": "Sudut Penyiku",
          "math": "$$\\sin \\alpha = \\cos(90^\\circ - \\alpha)$$"
        },
        {
          "name": "Penyiku Tangen",
          "math": "$$\\tan \\alpha = \\cot(90^\\circ - \\alpha)$$"
        },
        {
          "name": "Pemakaiannya",
          "math": "$$\\cos \\alpha = \\sqrt{1 - \\sin^2 \\alpha} \\quad (\\alpha \\text{ lancip})$$"
        }
      ],
      "examples": [
        {
          "problem": "Turunkan identitas $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ dari teorema Pythagoras.",
          "solution": "Langkah 1: Ambil segitiga siku-siku dengan sisi depan $a$, sisi samping $b$, dan sisi miring $c$ terhadap sudut $\\alpha$.\n\nLangkah 2: Tuliskan Pythagoras.\n$a^2 + b^2 = c^2$\n\nLangkah 3: Tuliskan kedua perbandingannya.\n$\\sin \\alpha = \\frac{a}{c}$ dan $\\cos \\alpha = \\frac{b}{c}$\n\nLangkah 4: Kuadratkan keduanya lalu jumlahkan.\n$\\sin^2 \\alpha + \\cos^2 \\alpha = \\frac{a^2}{c^2} + \\frac{b^2}{c^2} = \\frac{a^2 + b^2}{c^2}$\n\nLangkah 5: Ganti pembilangnya memakai hasil langkah 2.\n$= \\frac{c^2}{c^2} = 1$\n\nLangkah 6: Perhatikan bahwa penurunan ini TIDAK memakai angka tertentu, jadi hasilnya berlaku untuk segitiga siku-siku apa pun — dan karena itu untuk sudut lancip apa pun.\n\nLangkah 7: Perhatikan penulisannya. $\\sin^2 \\alpha$ berarti $(\\sin \\alpha)^2$, bukan $\\sin(\\alpha^2)$. Keduanya sangat berbeda.\n\nKesimpulan: $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ adalah teorema Pythagoras yang dituliskan dalam bahasa perbandingan; ia berlaku untuk setiap sudut."
        },
        {
          "problem": "Diketahui $\\sin \\alpha = \\frac{7}{25}$ dengan $\\alpha$ lancip. Hitunglah $\\cos \\alpha$ tanpa menggambar segitiga.",
          "solution": "Langkah 1: Tuliskan identitas dasarnya.\n$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$\n\nLangkah 2: Masukkan yang diketahui.\n$\\left(\\frac{7}{25}\\right)^2 + \\cos^2 \\alpha = 1$\n\nLangkah 3: Kerjakan kuadratnya.\n$\\frac{49}{625} + \\cos^2 \\alpha = 1$\n\nLangkah 4: Pindahkan sukunya.\n$\\cos^2 \\alpha = 1 - \\frac{49}{625} = \\frac{625 - 49}{625} = \\frac{576}{625}$\n\nLangkah 5: Ambil akarnya. Karena $\\alpha$ lancip, hanya akar positif yang diambil.\n$\\cos \\alpha = \\sqrt{\\frac{576}{625}} = \\frac{24}{25}$\n\nLangkah 6: Periksa lewat jalan segitiga sebagai jalan kedua. Depan $7$, miring $25$, sehingga samping $= \\sqrt{625 - 49} = 24$ dan $\\cos \\alpha = \\frac{24}{25}$ — cocok.\n\nLangkah 7: Perhatikan mengapa syarat \"lancip\" disebutkan. Tanpa syarat itu, $\\cos \\alpha$ boleh pula bernilai $-\\frac{24}{25}$; sudut tumpul baru dibahas di kelas berikutnya.\n\nKesimpulan: $\\cos \\alpha = \\frac{24}{25}$."
        },
        {
          "problem": "Jelaskan mengapa $\\sin \\alpha = \\cos(90^\\circ - \\alpha)$, lalu pakailah untuk menyatakan $\\sin 37^\\circ$ sebagai kosinus.",
          "solution": "Langkah 1: Ambil segitiga siku-siku dengan kedua sudut lancip $\\alpha$ dan $\\beta$.\n\nLangkah 2: Jumlah ketiga sudut segitiga $180^\\circ$, dan satu di antaranya sudah $90^\\circ$.\n$\\alpha + \\beta = 90^\\circ$, sehingga $\\beta = 90^\\circ - \\alpha$\n\nLangkah 3: Sekarang perhatikan sisinya. Sisi yang menjadi sisi DEPAN bagi $\\alpha$ adalah sisi SAMPING bagi $\\beta$ — sudah dibahas pada P20.\n\nLangkah 4: Maka kedua perbandingan itu memakai pecahan yang sama persis.\n$\\sin \\alpha = \\frac{\\text{depan bagi } \\alpha}{\\text{miring}} = \\frac{\\text{samping bagi } \\beta}{\\text{miring}} = \\cos \\beta$\n\nLangkah 5: Ganti $\\beta$ dengan bentuknya.\n$\\sin \\alpha = \\cos(90^\\circ - \\alpha)$\n\nLangkah 6: Terapkan pada $37^\\circ$.\n$\\sin 37^\\circ = \\cos(90^\\circ - 37^\\circ) = \\cos 53^\\circ$\n\nLangkah 7: Periksa dengan sudut istimewa yang sudah diketahui nilainya.\n$\\sin 30^\\circ = \\frac{1}{2}$ dan $\\cos 60^\\circ = \\frac{1}{2}$ — memang sama, dan $30^\\circ + 60^\\circ = 90^\\circ$\n\nKesimpulan: $\\sin \\alpha = \\cos(90^\\circ - \\alpha)$ sebab sisi depan bagi satu sudut lancip adalah sisi samping bagi sudut lancip lainnya; jadi $\\sin 37^\\circ = \\cos 53^\\circ$."
        },
        {
          "problem": "Hitunglah $\\sin^2 25^\\circ + \\sin^2 65^\\circ$ tanpa kalkulator.",
          "solution": "Langkah 1: Perhatikan kedua sudutnya lebih dahulu, sebelum mencoba berhitung.\n$25^\\circ + 65^\\circ = 90^\\circ$ — keduanya saling berpenyiku\n\nLangkah 2: Pakai hubungan sudut penyiku pada suku yang kedua.\n$\\sin 65^\\circ = \\cos(90^\\circ - 65^\\circ) = \\cos 25^\\circ$\n\nLangkah 3: Tuliskan bentuknya kembali.\n$\\sin^2 25^\\circ + \\cos^2 25^\\circ$\n\nLangkah 4: Sekarang bentuknya persis identitas dasar, dengan sudut yang sama pada kedua sukunya.\n$= 1$\n\nLangkah 5: Perhatikan bahwa nilai $\\sin 25^\\circ$ sendiri TIDAK PERLU diketahui. Yang dipakai hanyalah hubungan antarkeduanya.\n\nLangkah 6: Periksa dengan hampiran. $\\sin 25^\\circ \\approx 0{,}423$ dan $\\sin 65^\\circ \\approx 0{,}906$.\n$0{,}423^2 + 0{,}906^2 \\approx 0{,}179 + 0{,}821 = 1{,}000$ — cocok\n\nLangkah 7: Kekeliruan yang sering terjadi adalah menjumlahkan sudutnya lebih dahulu, yaitu menghitung $\\sin^2 90^\\circ = 1$. Hasilnya kebetulan sama di sini, tetapi caranya keliru dan akan salah pada soal lain.\n\nKesimpulan: $\\sin^2 25^\\circ + \\sin^2 65^\\circ = 1$, sebab kedua sudutnya saling berpenyiku."
        },
        {
          "problem": "Diketahui $\\cos \\alpha = \\frac{5}{13}$ dengan $\\alpha$ lancip. Hitunglah $\\frac{\\sin \\alpha}{\\tan \\alpha}$.",
          "solution": "Langkah 1: Jangan langsung berhitung. Sederhanakan bentuknya lebih dahulu dengan mengganti tangennya.\n$\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}$\n\nLangkah 2: Masukkan ke bentuk yang diminta.\n$\\frac{\\sin \\alpha}{\\tan \\alpha} = \\frac{\\sin \\alpha}{\\frac{\\sin \\alpha}{\\cos \\alpha}}$\n\nLangkah 3: Membagi dengan pecahan sama dengan mengalikan dengan kebalikannya.\n$= \\sin \\alpha \\times \\frac{\\cos \\alpha}{\\sin \\alpha}$\n\nLangkah 4: Suku $\\sin \\alpha$ saling menghapus.\n$= \\cos \\alpha$\n\nLangkah 5: Jadi jawabannya sudah diketahui tanpa menghitung sinus sama sekali.\n$\\frac{\\sin \\alpha}{\\tan \\alpha} = \\frac{5}{13}$\n\nLangkah 6: Periksa dengan jalan panjang. Sisi depannya $\\sqrt{169 - 25} = 12$, jadi $\\sin \\alpha = \\frac{12}{13}$ dan $\\tan \\alpha = \\frac{12}{5}$.\n$\\frac{\\frac{12}{13}}{\\frac{12}{5}} = \\frac{12}{13} \\times \\frac{5}{12} = \\frac{5}{13}$ — cocok\n\nLangkah 7: Perhatikan pelajarannya: menyederhanakan bentuknya lebih dahulu membuat pekerjaan berhitungnya HILANG sama sekali. Periksalah selalu apakah bentuknya dapat diringkas sebelum angka dimasukkan.\n\nKesimpulan: $\\frac{\\sin \\alpha}{\\tan \\alpha} = \\cos \\alpha = \\frac{5}{13}$."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, tuliskan $\\sin \\alpha = \\frac{20}{29}$ dengan $\\alpha$ lancip. Hitunglah $\\cos \\alpha$ dan $\\tan \\alpha$ dengan DUA cara: lewat identitas $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$, dan lewat gambar segitiga beserta Pythagoras. Bandingkan kedua cara itu dan nyatakan mana yang lebih cepat serta mengapa. Selanjutnya sederhanakan $\\cos^2 40^\\circ + \\cos^2 50^\\circ$ dan $\\frac{\\cos \\alpha}{\\cot \\alpha}$ tanpa memasukkan angka apa pun.",
      "summary_data": {
        "summary": [
          "$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ adalah teorema Pythagoras yang dituliskan dalam bahasa perbandingan.",
          "$\\sin^2 \\alpha$ berarti $(\\sin \\alpha)^2$, bukan $\\sin(\\alpha^2)$.",
          "Untuk $\\alpha$ lancip, $\\cos \\alpha = \\sqrt{1 - \\sin^2 \\alpha}$ — hanya akar positif yang diambil.",
          "$\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}$; dari sana banyak bentuk dapat diringkas sebelum dihitung.",
          "Sudut penyiku: $\\sin \\alpha = \\cos(90^\\circ - \\alpha)$ dan $\\tan \\alpha = \\cot(90^\\circ - \\alpha)$.",
          "Sebabnya geometris: sisi DEPAN bagi satu sudut lancip adalah sisi SAMPING bagi sudut lancip lainnya.",
          "Bila dua sudut pada soal berjumlah $90^\\circ$, hampir selalu hubungan penyiku itulah yang dimaksud.",
          "$\\sin^2 25^\\circ + \\sin^2 65^\\circ = 1$ tanpa perlu mengetahui nilai $\\sin 25^\\circ$ sama sekali.",
          "Sederhanakan bentuknya LEBIH DAHULU; sering pekerjaan berhitungnya hilang seluruhnya.",
          "Jangan menjumlahkan sudut di dalam tanda perbandingan: $\\sin 25^\\circ + \\sin 65^\\circ \\neq \\sin 90^\\circ$."
        ],
        "islamic": "Hal-hal yang tampak terpisah sering ternyata terikat oleh satu aturan yang sama. \"Dan segala sesuatu pada-Nya ada ukurannya.\" (QS. Ar-Ra'd: 8)"
      },
      "collab_cases": [
        "Diketahui $\\sin \\alpha = \\frac{9}{41}$ dengan $\\alpha$ lancip. Hitunglah $\\cos \\alpha$ memakai identitas dasar.",
        "Nyatakan $\\cos 28^\\circ$ sebagai sinus sebuah sudut.",
        "Sederhanakan $\\sin^2 18^\\circ + \\sin^2 72^\\circ$ beserta alasannya.",
        "Diketahui $\\tan \\alpha = \\frac{21}{20}$ dengan $\\alpha$ lancip. Hitunglah $\\sin \\alpha \\cdot \\cos \\alpha$.",
        "Sederhanakan $\\frac{\\cos \\alpha}{\\cot \\alpha}$ tanpa memasukkan angka, lalu periksa hasilnya dengan $\\alpha = 45^\\circ$."
      ]
    },
    {
      "id": "P25",
      "bab": "Bab 4: Perbandingan Trigonometri",
      "title": "Sudut Elevasi dan Sudut Depresi",
      "obj": [
        "Membedakan sudut elevasi dari sudut depresi, dan menggambar keduanya dengan garis mendatar sebagai acuan.",
        "Menghitung tinggi benda dari jarak mendatar dan sudut elevasi, serta sebaliknya.",
        "Memperhitungkan tinggi mata pengamat, dan menjelaskan kapan tinggi itu boleh diabaikan."
      ],
      "hook": "Tinggi menara Eiffel tidak pernah diukur dengan meteran dari bawah ke atas. Yang diukur hanyalah dua hal yang mudah: jarak mendatar ke kakinya, dan sudut pandang mata ke puncaknya. Dua angka itu — lewat tangen — memberi tingginya. Seluruh pekerjaan pertemuan ini adalah menerjemahkan keadaan nyata menjadi satu segitiga siku-siku yang benar.",
      "toolkit": [
        {
          "name": "Sudut Elevasi",
          "math": "$$\\text{dari garis mendatar ke ATAS}$$"
        },
        {
          "name": "Sudut Depresi",
          "math": "$$\\text{dari garis mendatar ke BAWAH}$$"
        },
        {
          "name": "Mencari Tinggi",
          "math": "$$\\text{tinggi} = \\text{jarak} \\times \\tan \\alpha$$"
        },
        {
          "name": "Mencari Jarak",
          "math": "$$\\text{jarak} = \\frac{\\text{tinggi}}{\\tan \\alpha}$$"
        },
        {
          "name": "Tinggi Mata",
          "math": "$$\\text{tinggi benda} = \\text{tinggi dari mata} + \\text{tinggi mata}$$"
        }
      ],
      "examples": [
        {
          "problem": "Jelaskan perbedaan sudut elevasi dan sudut depresi, serta hubungan keduanya bila dua orang saling memandang.",
          "solution": "Langkah 1: Kedua sudut itu SELALU diukur dari garis MENDATAR, bukan dari garis tegak. Inilah satu-satunya hal yang perlu dijaga.\n\nLangkah 2: Sudut elevasi dibentuk oleh garis pandang yang menuju ke ATAS dengan garis mendatar.\n\nLangkah 3: Sudut depresi dibentuk oleh garis pandang yang menuju ke BAWAH dengan garis mendatar.\n\nLangkah 4: Sekarang bayangkan seseorang di puncak gedung memandang mobil di bawah, dan pengemudi mobil itu memandang balik ke puncak.\n\nLangkah 5: Kedua garis mendatarnya sejajar, sedangkan garis pandangnya satu garis yang sama. Jadi kedua sudut itu merupakan sudut dalam berseberangan.\n\nLangkah 6: Maka keduanya SAMA BESAR.\nsudut depresi dari atas $=$ sudut elevasi dari bawah\n\nLangkah 7: Kekeliruan yang paling sering terjadi adalah mengukur sudut depresi dari garis TEGAK gedungnya. Kalau sudut depresinya $60^\\circ$, sudut terhadap dinding adalah $30^\\circ$ — dan memakai yang keliru membuat seluruh jawabannya salah.\n\nKesimpulan: Sudut elevasi diukur dari garis mendatar ke atas dan sudut depresi ke bawah; bila dua orang saling memandang, keduanya sama besar sebab merupakan sudut dalam berseberangan."
        },
        {
          "problem": "Sebuah tiang dipandang dari jarak $60$ m dengan sudut elevasi $30^\\circ$. Tentukan tinggi puncak tiang diukur dari ketinggian mata pengamat.",
          "solution": "Langkah 1: Gambarkan segitiganya. Jarak mendatar menjadi sisi SAMPING, dan tinggi yang dicari menjadi sisi DEPAN terhadap sudut $30^\\circ$.\n\nLangkah 2: Perbandingan yang memuat sisi depan dan sisi samping adalah tangen.\n$\\tan 30^\\circ = \\frac{\\text{tinggi}}{60}$\n\nLangkah 3: Masukkan nilai sudut istimewanya.\n$\\frac{1}{3}\\sqrt{3} = \\frac{\\text{tinggi}}{60}$\n\nLangkah 4: Selesaikan.\n$\\text{tinggi} = 60 \\times \\frac{1}{3}\\sqrt{3} = 20\\sqrt{3}$ m\n\nLangkah 5: Periksa lewat jalan yang lain, tanpa tangen sama sekali. Sisi miringnya $\\frac{60}{\\cos 30^\\circ} = \\frac{60}{\\frac{1}{2}\\sqrt{3}} = 40\\sqrt{3}$, lalu tingginya $40\\sqrt{3} \\times \\sin 30^\\circ = 20\\sqrt{3}$ — cocok.\n\nLangkah 6: Periksa kemasukakalannya. $20\\sqrt{3} \\approx 34{,}6$ m, jadi lebih pendek daripada jarak $60$ m. Masuk akal, sebab sudut $30^\\circ$ lebih kecil daripada $45^\\circ$.\n\nLangkah 7: Perhatikan bahwa yang diminta tinggi DARI KETINGGIAN MATA, jadi tinggi mata pengamat tidak perlu ditambahkan. Kalau yang diminta tinggi tiang seluruhnya, tinggi mata harus ikut dihitung.\n\nKesimpulan: Tinggi puncak tiang dari ketinggian mata pengamat adalah $20\\sqrt{3}$ m, yaitu sekitar $34{,}6$ m."
        },
        {
          "problem": "Dari puncak gedung setinggi $40$ m, sebuah mobil terlihat dengan sudut depresi $60^\\circ$. Tentukan jarak mobil itu dari kaki gedung.",
          "solution": "Langkah 1: Gambarkan keadaannya. Tarik garis MENDATAR dari puncak gedung, lalu ukur sudut depresi $60^\\circ$ dari garis itu ke bawah menuju mobil.\n\nLangkah 2: Pindahkan sudutnya ke tempat yang lebih mudah dipakai. Sudut elevasi dari mobil ke puncak gedung juga $60^\\circ$, sebab keduanya sudut dalam berseberangan.\n\nLangkah 3: Sekarang segitiganya jelas. Terhadap sudut $60^\\circ$ di posisi mobil, tinggi gedung menjadi sisi DEPAN dan jarak yang dicari menjadi sisi SAMPING.\n$\\tan 60^\\circ = \\frac{40}{\\text{jarak}}$\n\nLangkah 4: Masukkan nilainya.\n$\\sqrt{3} = \\frac{40}{\\text{jarak}}$\n\nLangkah 5: Selesaikan. Karena yang dicari berada di penyebut, ia diperoleh dengan MEMBAGI.\n$\\text{jarak} = \\frac{40}{\\sqrt{3}} = \\frac{40\\sqrt{3}}{3}$ m\n\nLangkah 6: Periksa kemasukakalannya. $\\frac{40\\sqrt{3}}{3} \\approx 23{,}1$ m, jadi lebih pendek daripada tinggi gedungnya. Masuk akal, sebab sudut $60^\\circ$ cukup tajam sehingga mobilnya dekat.\n\nLangkah 7: Kekeliruan yang paling sering terjadi adalah memakai sudut $60^\\circ$ sebagai sudut terhadap DINDING gedung, sehingga jaraknya dihitung $40 \\tan 60^\\circ = 40\\sqrt{3} \\approx 69{,}3$ m — hampir tiga kali terlalu besar.\n\nKesimpulan: Jarak mobil dari kaki gedung adalah $\\frac{40\\sqrt{3}}{3}$ m, yaitu sekitar $23{,}1$ m."
        },
        {
          "problem": "Seorang pengamat dengan tinggi mata $1{,}6$ m melihat puncak pohon dengan sudut elevasi $45^\\circ$ dari jarak $10$ m. Tentukan tinggi pohon itu.",
          "solution": "Langkah 1: Sadari bahwa segitiganya TIDAK dimulai dari tanah, melainkan dari MATA pengamat.\n\nLangkah 2: Hitung lebih dahulu tinggi puncak pohon di atas ketinggian mata.\n$\\tan 45^\\circ = \\frac{t}{10} \\Rightarrow t = 10 \\times 1 = 10$ m\n\nLangkah 3: Perhatikan bahwa $10$ m itu BUKAN tinggi pohonnya. Itu hanya bagian pohon yang berada di atas ketinggian mata.\n\nLangkah 4: Tambahkan tinggi mata pengamat untuk memperoleh tinggi dari tanah.\n$10 + 1{,}6 = 11{,}6$ m\n\nLangkah 5: Periksa dengan gambar. Bagian pohon dari tanah sampai setinggi mata adalah $1{,}6$ m, lalu dari situ ke puncak $10$ m lagi — seluruhnya $11{,}6$ m.\n\nLangkah 6: Periksa kemasukakalannya. Jawabannya harus LEBIH BESAR daripada $10$ m, dan memang demikian.\n\nLangkah 7: Perhatikan kapan tinggi mata boleh diabaikan: hanya bila soalnya menyebut \"dari ketinggian mata\", atau bila tinggi mata tidak diberikan sama sekali. Kalau angkanya diberikan, ia diberikan untuk dipakai.\n\nKesimpulan: Tinggi pohon itu $11{,}6$ m, yaitu $10$ m di atas ketinggian mata ditambah $1{,}6$ m tinggi matanya."
        },
        {
          "problem": "Sebuah layang-layang diterbangkan dengan benang lurus sepanjang $50$ m yang membentuk sudut elevasi $60^\\circ$ dengan tanah. Tentukan tinggi layang-layang itu dan jarak mendatarnya dari penerbangnya.",
          "solution": "Langkah 1: Perhatikan apa yang diketahui — kali ini BUKAN jarak mendatar, melainkan panjang BENANG.\n\nLangkah 2: Benang yang lurus adalah sisi MIRING segitiga itu, bukan sisi samping.\n\nLangkah 3: Untuk tingginya, pakai sinus sebab yang terlibat sisi depan dan sisi miring.\n$\\sin 60^\\circ = \\frac{\\text{tinggi}}{50} \\Rightarrow \\text{tinggi} = 50 \\times \\frac{1}{2}\\sqrt{3} = 25\\sqrt{3}$ m\n\nLangkah 4: Untuk jarak mendatarnya, pakai kosinus.\n$\\cos 60^\\circ = \\frac{\\text{jarak}}{50} \\Rightarrow \\text{jarak} = 50 \\times \\frac{1}{2} = 25$ m\n\nLangkah 5: Periksa dengan Pythagoras — pemeriksaan tanpa trigonometri.\n$(25\\sqrt{3})^2 + 25^2 = 1875 + 625 = 2500 = 50^2$ — cocok\n\nLangkah 6: Periksa kemasukakalannya. $25\\sqrt{3} \\approx 43{,}3$ m, jadi layang-layangnya cukup tinggi dan tidak jauh mendatar — sesuai sudut $60^\\circ$ yang tajam.\n\nLangkah 7: Perhatikan pelajaran pokoknya: TANGEN hanya dipakai bila yang diketahui atau dicari adalah jarak MENDATAR bersama tinggi. Begitu yang diketahui panjang benang, tali, atau tangga, ia sisi miring — dan yang dipakai sinus atau kosinus.\n\nKesimpulan: Tinggi layang-layang $25\\sqrt{3}$ m dan jarak mendatarnya $25$ m."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, gambarlah keadaan berikut — sebuah pohon dipandang dari jarak mendatar $12$ m dengan sudut elevasi $60^\\circ$, sedangkan tinggi mata pengamatnya $1{,}5$ m. Hitunglah (a) tinggi puncak pohon di atas ketinggian mata, (b) jarak pandang dari mata ke puncak pohon, dan (c) tinggi pohon seluruhnya. Kemudian jelaskan pada bagian mana tangen dipakai dan pada bagian mana tidak boleh dipakai, beserta alasannya.",
      "summary_data": {
        "summary": [
          "Sudut elevasi dan sudut depresi SELALU diukur dari garis MENDATAR, bukan dari garis tegak.",
          "Elevasi mengarah ke atas, depresi mengarah ke bawah.",
          "Bila dua orang saling memandang, sudut depresi dari atas sama besar dengan sudut elevasi dari bawah — keduanya sudut dalam berseberangan.",
          "$\\text{tinggi} = \\text{jarak mendatar} \\times \\tan \\alpha$, dan $\\text{jarak} = \\frac{\\text{tinggi}}{\\tan \\alpha}$.",
          "Tangen hanya dipakai bila yang terlibat tinggi bersama jarak MENDATAR.",
          "Bila yang diketahui panjang benang, tali, tangga, atau garis pandang, itu sisi MIRING — pakailah sinus atau kosinus.",
          "Bila tinggi mata pengamat diberikan angkanya, ia diberikan untuk DITAMBAHKAN pada hasilnya.",
          "Tinggi mata diabaikan hanya bila soalnya menyebut \"dari ketinggian mata\" atau angkanya tidak diberikan.",
          "Jangan mengukur sudut depresi dari dinding gedung; kalau depresinya $60^\\circ$, sudut terhadap dinding $30^\\circ$.",
          "Periksalah hasilnya dengan Pythagoras, dan periksa kemasukakalannya dengan membandingkan sudutnya terhadap $45^\\circ$."
        ],
        "islamic": "Mengangkat pandangan ke atas adalah cara manusia mengenali kebesaran yang melampaui dirinya. \"Maka tidakkah mereka memperhatikan langit di atas mereka, bagaimana Kami membangunnya?\" (QS. Qaf: 6)"
      },
      "collab_cases": [
        "Sebuah menara dipandang dari jarak $80$ m dengan sudut elevasi $45^\\circ$. Tentukan tingginya diukur dari ketinggian mata pengamat.",
        "Dari puncak bukit setinggi $90$ m, sebuah perahu terlihat dengan sudut depresi $30^\\circ$. Tentukan jarak perahu dari kaki bukit.",
        "Sebuah balon terbang dengan tali lurus $120$ m yang membentuk sudut $30^\\circ$ dengan tanah. Tentukan tinggi balon dan jarak mendatarnya.",
        "Seorang pengamat bertinggi mata $1{,}7$ m melihat puncak tiang dengan sudut elevasi $45^\\circ$ dari jarak $14$ m. Tentukan tinggi tiang seluruhnya.",
        "Jelaskan mengapa memakai sudut depresi sebagai sudut terhadap dinding gedung menghasilkan jawaban yang salah, dengan satu contoh berangka."
      ]
    },
    {
      "id": "P26",
      "bab": "Bab 4: Perbandingan Trigonometri",
      "title": "Penerapan Trigonometri pada Masalah Nyata",
      "obj": [
        "Menerjemahkan keadaan nyata — tanjakan, tangga, atap, eskalator, pelayaran — menjadi satu segitiga siku-siku yang benar.",
        "Memutuskan sisi mana yang miring dan perbandingan mana yang dipakai berdasarkan besaran yang diketahui.",
        "Menentukan besar sudut kemiringan bila dua panjang diketahui, lalu menguji kemasukakalan jawabannya."
      ],
      "hook": "Pada soal cerita, bagian tersulitnya hampir selalu bukan berhitung. Kalimat \"menempuh $400$ m di sepanjang jalan yang menanjak\" dan \"berjalan $400$ m secara mendatar\" berbeda maknanya sama sekali: yang pertama sisi miring, yang kedua sisi samping. Menempatkan satu angka pada sisi yang keliru sudah cukup untuk membuat seluruh jawabannya salah, walaupun hitungannya rapi.",
      "toolkit": [
        {
          "name": "Sepanjang Lintasan",
          "math": "$$\\text{jalan, tangga, tali, papan} \\Rightarrow \\text{sisi MIRING}$$"
        },
        {
          "name": "Mendatar",
          "math": "$$\\text{jarak di tanah} \\Rightarrow \\text{sisi SAMPING}$$"
        },
        {
          "name": "Tegak",
          "math": "$$\\text{tinggi, beda tinggi} \\Rightarrow \\text{sisi DEPAN}$$"
        },
        {
          "name": "Miring & Tegak",
          "math": "$$\\text{tegak} = \\text{miring} \\times \\sin \\alpha$$"
        },
        {
          "name": "Miring & Mendatar",
          "math": "$$\\text{mendatar} = \\text{miring} \\times \\cos \\alpha$$"
        }
      ],
      "examples": [
        {
          "problem": "Sebuah jalan menanjak membentuk sudut $30^\\circ$ dengan arah mendatar. Setelah menempuh $400$ m di sepanjang jalan itu, berapa ketinggian yang dicapai?",
          "solution": "Langkah 1: Baca kalimatnya dengan cermat. \"Menempuh $400$ m DI SEPANJANG JALAN\" berarti $400$ m itu diukur menyusuri jalannya, jadi ia sisi MIRING.\n\nLangkah 2: Yang dicari adalah ketinggian, yaitu sisi TEGAK — sisi depan terhadap sudut $30^\\circ$.\n\nLangkah 3: Perbandingan yang memuat sisi depan dan sisi miring adalah sinus.\n$\\sin 30^\\circ = \\frac{\\text{tinggi}}{400}$\n\nLangkah 4: Masukkan nilainya lalu selesaikan.\n$\\text{tinggi} = 400 \\times \\frac{1}{2} = 200$ m\n\nLangkah 5: Periksa kemasukakalannya. Ketinggiannya harus lebih kecil daripada jarak yang ditempuh — dan $200 < 400$, memang demikian.\n\nLangkah 6: Periksa pula jarak mendatarnya sebagai pelengkap.\n$400 \\cos 30^\\circ = 200\\sqrt{3} \\approx 346$ m, dan $200^2 + (200\\sqrt{3})^2 = 40000 + 120000 = 160000 = 400^2$ — cocok\n\nLangkah 7: Kekeliruan yang paling sering terjadi adalah memakai tangen, yaitu $400 \\tan 30^\\circ \\approx 231$ m. Cara itu menganggap $400$ m diukur secara MENDATAR, padahal soalnya menyebut di sepanjang jalan.\n\nKesimpulan: Ketinggian yang dicapai $200$ m, yaitu separuh jarak yang ditempuh — sifat khas sudut $30^\\circ$."
        },
        {
          "problem": "Sebuah tangga sepanjang $6$ m bersandar pada dinding dan membentuk sudut $60^\\circ$ dengan lantai. Tentukan jarak kaki tangga ke dinding dan tinggi ujung atasnya.",
          "solution": "Langkah 1: Tangga selalu sisi MIRING, sebab ia membentang dari lantai ke dinding.\n\nLangkah 2: Jarak kaki tangga ke dinding diukur di LANTAI, jadi ia sisi samping terhadap sudut $60^\\circ$.\n\nLangkah 3: Pakai kosinus.\n$\\cos 60^\\circ = \\frac{\\text{jarak}}{6} \\Rightarrow \\text{jarak} = 6 \\times \\frac{1}{2} = 3$ m\n\nLangkah 4: Tinggi ujung atas diukur pada DINDING, jadi ia sisi depan. Pakai sinus.\n$\\sin 60^\\circ = \\frac{\\text{tinggi}}{6} \\Rightarrow \\text{tinggi} = 6 \\times \\frac{1}{2}\\sqrt{3} = 3\\sqrt{3}$ m\n\nLangkah 5: Periksa dengan Pythagoras.\n$3^2 + (3\\sqrt{3})^2 = 9 + 27 = 36 = 6^2$ — cocok\n\nLangkah 6: Periksa kemasukakalannya. $3\\sqrt{3} \\approx 5{,}2$ m, jadi tangganya berdiri cukup tegak — sesuai sudut $60^\\circ$ yang tajam.\n\nLangkah 7: Perhatikan hubungan terbaliknya: semakin BESAR sudut tangga terhadap lantai, semakin DEKAT kakinya ke dinding dan semakin tinggi ujungnya. Hubungan ini sering diuji tanpa angka.\n\nKesimpulan: Jarak kaki tangga ke dinding $3$ m dan tinggi ujung atasnya $3\\sqrt{3}$ m."
        },
        {
          "problem": "Sebuah papan seluncur panjangnya $10$ m dan ujung atasnya berada pada ketinggian $5$ m. Tentukan besar sudut kemiringan papan terhadap tanah.",
          "solution": "Langkah 1: Kali ini yang dicari SUDUTnya, jadi hitunglah perbandingannya lebih dahulu.\n\nLangkah 2: Tentukan kedudukan kedua panjang yang diketahui. Papan seluncur adalah sisi MIRING, dan ketinggian adalah sisi DEPAN.\n\nLangkah 3: Perbandingan yang memuat keduanya adalah sinus.\n$\\sin \\alpha = \\frac{5}{10}$\n\nLangkah 4: Sederhanakan.\n$\\sin \\alpha = \\frac{1}{2}$\n\nLangkah 5: Cocokkan dengan tabel sudut istimewa.\n$\\alpha = 30^\\circ$\n\nLangkah 6: Periksa dengan memasukkannya kembali.\n$10 \\sin 30^\\circ = 5$ — cocok\n\nLangkah 7: Periksa kemasukakalannya secara gambar. Ketinggiannya hanya separuh panjang papannya, jadi papan itu cukup landai — masuk akal untuk seluncur, dan sudut $30^\\circ$ memang landai.\n\nKesimpulan: Sudut kemiringan papan terhadap tanah adalah $30^\\circ$."
        },
        {
          "problem": "Sebuah atap berbentuk segitiga sama kaki dengan lebar alas $12$ m. Sisi miring atapnya membentuk sudut $30^\\circ$ dengan alasnya. Tentukan panjang satu sisi miring atap itu.",
          "solution": "Langkah 1: Gambarkan atapnya sebagai segitiga sama kaki, lalu tarik garis tinggi dari puncaknya.\n\nLangkah 2: Garis tinggi itu membelah alasnya menjadi dua bagian yang sama, sehingga terbentuk segitiga siku-siku.\n$12 \\div 2 = 6$ m\n\nLangkah 3: Perhatikan bahwa yang dipakai $6$ m, bukan $12$ m. Melewatkan langkah pembelahan ini adalah kekeliruan yang paling sering terjadi pada soal atap.\n\nLangkah 4: Terhadap sudut $30^\\circ$ di ujung alas, bagian alas $6$ m menjadi sisi SAMPING dan sisi miring atap menjadi sisi MIRING.\n$\\cos 30^\\circ = \\frac{6}{\\text{miring}}$\n\nLangkah 5: Masukkan nilainya lalu selesaikan.\n$\\text{miring} = \\frac{6}{\\frac{1}{2}\\sqrt{3}} = \\frac{12}{\\sqrt{3}} = \\frac{12\\sqrt{3}}{3} = 4\\sqrt{3}$ m\n\nLangkah 6: Periksa kemasukakalannya. $4\\sqrt{3} \\approx 6{,}93$ m, jadi lebih panjang daripada $6$ m — memang harus demikian sebab ia sisi miring.\n\nLangkah 7: Periksa pula tinggi atapnya sebagai pelengkap: $6 \\tan 30^\\circ = 2\\sqrt{3} \\approx 3{,}46$ m, dan $6^2 + (2\\sqrt{3})^2 = 36 + 12 = 48 = (4\\sqrt{3})^2$ — cocok.\n\nKesimpulan: Panjang satu sisi miring atap itu $4\\sqrt{3}$ m, yaitu sekitar $6{,}93$ m."
        },
        {
          "problem": "Sebuah eskalator panjangnya $24$ m dengan sudut kemiringan $30^\\circ$. Tentukan beda tinggi kedua ujungnya dan panjang mendatar yang ditempuhnya.",
          "solution": "Langkah 1: Eskalator membentang lurus dari bawah ke atas, jadi $24$ m itu sisi MIRING.\n\nLangkah 2: Beda tinggi adalah sisi TEGAK, jadi pakai sinus.\n$\\sin 30^\\circ = \\frac{\\text{beda tinggi}}{24}$\n\nLangkah 3: Selesaikan.\n$\\text{beda tinggi} = 24 \\times \\frac{1}{2} = 12$ m\n\nLangkah 4: Panjang mendatarnya adalah sisi SAMPING, jadi pakai kosinus.\n$\\cos 30^\\circ = \\frac{\\text{mendatar}}{24} \\Rightarrow \\text{mendatar} = 24 \\times \\frac{1}{2}\\sqrt{3} = 12\\sqrt{3}$ m\n\nLangkah 5: Periksa dengan Pythagoras.\n$12^2 + (12\\sqrt{3})^2 = 144 + 432 = 576 = 24^2$ — cocok\n\nLangkah 6: Periksa kemasukakalannya. Panjang mendatarnya $12\\sqrt{3} \\approx 20{,}8$ m, jauh lebih besar daripada beda tingginya. Masuk akal, sebab $30^\\circ$ adalah kemiringan yang landai.\n\nLangkah 7: Perhatikan bahwa kedua jawabannya JUMLAHnya bukan $24$ m. Sisi tegak dan sisi mendatar tidak pernah berjumlah sama dengan sisi miringnya; hubungannya lewat Pythagoras, bukan penjumlahan biasa.\n\nKesimpulan: Beda tinggi kedua ujung eskalator $12$ m dan panjang mendatarnya $12\\sqrt{3}$ m."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, kerjakan keadaan berikut — sebuah tangga sepanjang $8$ m bersandar pada dinding dengan sudut $60^\\circ$ terhadap lantai. Hitunglah tinggi ujung atasnya, jarak kakinya ke dinding, dan besar sudut antara tangga dengan DINDING. Selanjutnya, tanpa menghitung lagi, ramalkan apa yang terjadi pada kedua jarak itu bila sudutnya diubah menjadi $30^\\circ$ — lalu buktikan ramalan kalian dengan hitungan. Terakhir, buatlah satu soal cerita sendiri yang angkanya WAJIB ditempatkan pada sisi miring, dan tukarkan dengan kelompok lain.",
      "summary_data": {
        "summary": [
          "Bacalah kalimatnya sebelum berhitung: \"di sepanjang jalan\" berarti sisi MIRING, \"secara mendatar\" berarti sisi SAMPING.",
          "Jalan, tangga, tali, benang, papan, dan eskalator selalu sisi MIRING.",
          "Jarak di tanah adalah sisi SAMPING; tinggi dan beda tinggi adalah sisi DEPAN.",
          "Diketahui sisi miring $\\Rightarrow$ pakai sinus untuk yang tegak dan kosinus untuk yang mendatar; tangen TIDAK dipakai.",
          "Diketahui jarak mendatar bersama tinggi $\\Rightarrow$ barulah tangen dipakai.",
          "Pada soal atap segitiga sama kaki, alasnya harus DIBELAH DUA lebih dahulu.",
          "Untuk mencari sudut: hitung perbandingannya, sederhanakan, lalu cocokkan dengan tabel sudut istimewa.",
          "Semakin besar sudut tangga terhadap lantai, semakin dekat kakinya ke dinding dan semakin tinggi ujungnya.",
          "Sisi tegak dan sisi mendatar tidak pernah berjumlah sama dengan sisi miringnya; hubungannya lewat Pythagoras.",
          "Periksalah setiap jawaban dengan Pythagoras dan dengan membandingkan sudutnya terhadap $45^\\circ$."
        ],
        "islamic": "Ilmu yang benar selalu berujung pada pekerjaan yang bermanfaat bagi orang lain. \"Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya.\" (HR. Ath-Thabrani)"
      },
      "collab_cases": [
        "Sebuah jalan menanjak bersudut $30^\\circ$ ditempuh sejauh $560$ m di sepanjang jalannya. Tentukan ketinggian yang dicapai.",
        "Sebuah tangga $14$ m bersandar dengan sudut $45^\\circ$ terhadap lantai. Tentukan tinggi ujung atasnya dan jarak kakinya ke dinding.",
        "Sebuah atap segitiga sama kaki beralas $20$ m dengan sudut kemiringan $45^\\circ$. Tentukan panjang satu sisi miring atapnya.",
        "Sebuah papan seluncur panjangnya $12$ m dan ujung atasnya berada pada ketinggian $6\\sqrt{3}$ m. Tentukan sudut kemiringannya.",
        "Sebuah eskalator dengan sudut $45^\\circ$ mempunyai beda tinggi $9$ m. Tentukan panjang eskalator itu."
      ]
    },
    {
      "id": "P27",
      "bab": "Bab 5: Sistem Persamaan dan Pertidaksamaan Linear",
      "title": "Persamaan Linear Tiga Variabel dan Model SPLTV",
      "obj": [
        "Mengenali persamaan linear tiga variabel $ax + by + cz = d$ dan membedakannya dari persamaan yang bukan linear.",
        "Memeriksa apakah suatu tripel $(x, y, z)$ merupakan penyelesaian SPLTV dengan menyubstitusikannya ke SETIAP persamaan.",
        "Menerjemahkan soal cerita yang memuat tiga besaran tak diketahui menjadi sistem tiga persamaan linear."
      ],
      "hook": "Satu nota belanja \"$2$ kg apel, $1$ kg jeruk, dan $1$ kg mangga seharga Rp$105.000$\" belum cukup untuk mengetahui harga masing-masing buah — ada banyak sekali pasangan harga yang cocok dengan nota itu. Baru setelah memegang TIGA nota yang berbeda, harga ketiganya dapat dipastikan. Itulah inti Sistem Persamaan Linear Tiga Variabel: tiga besaran yang tidak diketahui memerlukan tiga keterangan yang saling melengkapi.",
      "toolkit": [
        {
          "name": "Bentuk Umum",
          "math": "$$ax + by + cz = d$$"
        },
        {
          "name": "Syarat Linear",
          "math": "$$\\text{pangkat tiap variabel } = 1,\\ \\text{tanpa } xy,\\ yz,\\ xz$$"
        },
        {
          "name": "Bentuk SPLTV",
          "math": "$$\\begin{cases} a_1x + b_1y + c_1z = d_1 \\\\ a_2x + b_2y + c_2z = d_2 \\\\ a_3x + b_3y + c_3z = d_3 \\end{cases}$$"
        },
        {
          "name": "Uji Penyelesaian",
          "math": "$$(x, y, z) \\text{ memenuhi SEMUA persamaan}$$"
        },
        {
          "name": "Pemodelan",
          "math": "$$3 \\text{ besaran tak diketahui} \\Rightarrow 3 \\text{ persamaan}$$"
        }
      ],
      "examples": [
        {
          "problem": "Manakah di antara persamaan berikut yang merupakan persamaan linear tiga variabel? (a) $2x - y + 3z = 7$; (b) $xy + z = 4$; (c) $x^2 + y + z = 1$; (d) $\\frac{x}{2} + y - z = 0$; (e) $\\frac{1}{x} + y + z = 3$.",
          "solution": "Langkah 1: Ingat syaratnya: setiap variabel hanya boleh berpangkat satu, tidak boleh ada perkalian antarvariabel, dan tidak boleh ada variabel di penyebut.\n\nLangkah 2: Persamaan (a) memuat $x$, $y$, dan $z$ yang masing-masing berpangkat satu. Persamaan (a) LINEAR.\n\nLangkah 3: Persamaan (b) memuat suku $xy$, yaitu perkalian dua variabel. Suku seperti itu berderajat dua, jadi (b) BUKAN linear.\n\nLangkah 4: Persamaan (c) memuat $x^2$, jadi (c) BUKAN linear.\n\nLangkah 5: Persamaan (d) memuat $\\frac{x}{2}$. Bentuk ini sama dengan $\\frac{1}{2}x$ — variabelnya ada di PEMBILANG dan berpangkat satu. Persamaan (d) LINEAR.\n\nLangkah 6: Persamaan (e) memuat $\\frac{1}{x}$, yaitu $x^{-1}$. Variabel di penyebut membuat pangkatnya negatif, jadi (e) BUKAN linear.\n\nLangkah 7: Perhatikan bedanya (d) dan (e): pecahan boleh ada, asalkan variabelnya tidak berada di penyebut.\n\nKesimpulan: Persamaan linear tiga variabel adalah (a) dan (d)."
        },
        {
          "problem": "Periksalah apakah $(1, 2, 3)$ merupakan penyelesaian sistem $x + y + z = 6$, $2x - y + z = 3$, dan $x + 2y - z = 2$.",
          "solution": "Langkah 1: Tripel $(1, 2, 3)$ berarti $x = 1$, $y = 2$, dan $z = 3$. Urutannya selalu $x$, lalu $y$, lalu $z$.\n\nLangkah 2: Uji persamaan pertama.\n$1 + 2 + 3 = 6$ — cocok\n\nLangkah 3: Uji persamaan kedua.\n$2(1) - 2 + 3 = 2 - 2 + 3 = 3$ — cocok\n\nLangkah 4: Uji persamaan ketiga.\n$1 + 2(2) - 3 = 1 + 4 - 3 = 2$ — cocok\n\nLangkah 5: Ketiga persamaan terpenuhi. Pengujian WAJIB dilakukan pada ketiganya; berhenti setelah satu persamaan cocok adalah kekeliruan yang sering terjadi.\n\nKesimpulan: Tripel $(1, 2, 3)$ merupakan penyelesaian sistem itu."
        },
        {
          "problem": "Periksalah apakah $(2, -1, 1)$ merupakan penyelesaian sistem $x + y + z = 2$, $2x + y - z = 2$, dan $x - y + z = 5$.",
          "solution": "Langkah 1: Tulis nilainya: $x = 2$, $y = -1$, $z = 1$. Gunakan kurung saat menyubstitusikan bilangan negatif.\n\nLangkah 2: Uji persamaan pertama.\n$2 + (-1) + 1 = 2$ — cocok\n\nLangkah 3: Uji persamaan kedua.\n$2(2) + (-1) - 1 = 4 - 1 - 1 = 2$ — cocok\n\nLangkah 4: Uji persamaan ketiga.\n$2 - (-1) + 1 = 2 + 1 + 1 = 4$\n\nLangkah 5: Hasilnya $4$, padahal ruas kanannya $5$. Persamaan ketiga TIDAK terpenuhi.\n\nLangkah 6: Cukup satu persamaan yang gagal untuk menggugurkan sebuah tripel. Dua persamaan yang cocok tidak ada artinya bila persamaan ketiga tidak cocok.\n\nLangkah 7: Perhatikan tanda pada langkah 4: $-(-1) = +1$. Tanpa kurung, orang sering menulis $2 - 1 + 1 = 2$ lalu keliru menyimpulkan.\n\nKesimpulan: Tripel $(2, -1, 1)$ BUKAN penyelesaian sistem itu, sebab tidak memenuhi persamaan ketiga."
        },
        {
          "problem": "Tiga nota belanja buah (dalam ribu rupiah): $2$ kg apel, $1$ kg jeruk, $1$ kg mangga seharga $105$; $1$ kg apel, $2$ kg jeruk, $1$ kg mangga seharga $95$; $1$ kg apel, $1$ kg jeruk, $2$ kg mangga seharga $100$. Susunlah SPLTV-nya, lalu tentukan harga tiap buah.",
          "solution": "Langkah 1: Tetapkan variabelnya lebih dahulu. Misalkan $a$ = harga $1$ kg apel, $j$ = harga $1$ kg jeruk, $m$ = harga $1$ kg mangga, semuanya dalam ribu rupiah.\n\nLangkah 2: Terjemahkan tiap nota menjadi satu persamaan.\n$2a + j + m = 105$\n$a + 2j + m = 95$\n$a + j + 2m = 100$\n\nLangkah 3: Perhatikan polanya: setiap buah muncul sekali dengan koefisien $2$ dan dua kali dengan koefisien $1$. Jumlahkan ketiga persamaan.\n$4a + 4j + 4m = 300$\n\nLangkah 4: Bagi dengan $4$.\n$a + j + m = 75$\n\nLangkah 5: Kurangkan hasil ini dari tiap persamaan semula.\n$a = 105 - 75 = 30$\n$j = 95 - 75 = 20$\n$m = 100 - 75 = 25$\n\nLangkah 6: Periksa pada ketiga nota.\n$2(30) + 20 + 25 = 105$, $30 + 2(20) + 25 = 95$, $30 + 20 + 2(25) = 100$ — semuanya cocok\n\nLangkah 7: Cara menjumlahkan semua persamaan ini hanya ampuh bila susunan koefisiennya simetris seperti di sini. Cara umum untuk sistem apa pun dipelajari pada pertemuan berikutnya.\n\nKesimpulan: Harga apel Rp$30.000$/kg, jeruk Rp$20.000$/kg, dan mangga Rp$25.000$/kg."
        },
        {
          "problem": "Jumlah tiga bilangan adalah $20$. Bilangan pertama dua kali bilangan kedua, dan bilangan ketiga $4$ lebih besar daripada bilangan kedua. Tentukan ketiga bilangan itu.",
          "solution": "Langkah 1: Misalkan ketiga bilangan itu $x$, $y$, dan $z$.\n\nLangkah 2: Terjemahkan setiap kalimat.\n\"Jumlahnya $20$\": $x + y + z = 20$\n\"Pertama dua kali kedua\": $x = 2y$\n\"Ketiga $4$ lebih besar daripada kedua\": $z = y + 4$\n\nLangkah 3: Dua persamaan terakhir sudah menyatakan $x$ dan $z$ dalam $y$. Substitusikan keduanya ke persamaan pertama.\n$2y + y + (y + 4) = 20$\n\nLangkah 4: Sederhanakan lalu selesaikan.\n$4y + 4 = 20 \\Rightarrow 4y = 16 \\Rightarrow y = 4$\n\nLangkah 5: Hitung dua bilangan lainnya.\n$x = 2(4) = 8$ dan $z = 4 + 4 = 8$\n\nLangkah 6: Periksa semua keterangan: $8 + 4 + 8 = 20$, $8 = 2 \\times 4$, dan $8 = 4 + 4$ — semuanya cocok.\n\nLangkah 7: Kekeliruan yang sering terjadi adalah menulis \"$4$ lebih besar daripada kedua\" sebagai $y = z + 4$. Yang lebih besar adalah bilangan KETIGA, jadi $4$ ditambahkan pada $y$.\n\nKesimpulan: Ketiga bilangan itu adalah $8$, $4$, dan $8$."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, setiap kelompok menulis satu SPLTV karangan sendiri yang penyelesaiannya sudah dipilih lebih dahulu, misalnya $(2, -1, 3)$. Tukarkan sistem itu dengan kelompok lain TANPA memberitahukan penyelesaiannya. Kelompok penerima menguji lima tripel tebakan dan harus menemukan mana yang merupakan penyelesaian. Terakhir, setiap kelompok mengubah SATU angka ruas kanan pada sistemnya sendiri, lalu menjelaskan mengapa tripel semula tidak lagi menjadi penyelesaian.",
      "summary_data": {
        "summary": [
          "Persamaan linear tiga variabel berbentuk $ax + by + cz = d$ dengan $a$, $b$, $c$ tidak semuanya nol.",
          "Setiap variabel berpangkat satu; tidak ada suku $xy$, $yz$, $xz$, $x^2$, atau variabel di penyebut.",
          "Pecahan seperti $\\frac{x}{2}$ tetap linear karena variabelnya berada di pembilang.",
          "Satu persamaan tiga variabel mempunyai tak hingga banyak penyelesaian; diperlukan tiga persamaan untuk memastikan satu penyelesaian.",
          "Tripel $(x, y, z)$ selalu dibaca berurutan: bilangan pertama $x$, kedua $y$, ketiga $z$.",
          "Sebuah tripel disebut penyelesaian SPLTV hanya bila memenuhi KETIGA persamaan.",
          "Satu persamaan yang gagal sudah cukup untuk menggugurkan sebuah tripel.",
          "Saat menyubstitusikan bilangan negatif, selalu gunakan kurung.",
          "Pemodelan dimulai dengan menetapkan arti setiap variabel beserta satuannya.",
          "Kalimat \"$A$ lebih besar $4$ daripada $B$\" diterjemahkan menjadi $A = B + 4$, bukan $B = A + 4$."
        ],
        "islamic": "Ketelitian dalam memeriksa adalah bagian dari amanah. Allah berfirman: \"Wahai orang-orang yang beriman, jika datang kepadamu orang fasik membawa suatu berita, maka telitilah kebenarannya.\" (QS. Al-Hujurat: 6)"
      },
      "collab_cases": [
        "Tentukan manakah yang merupakan persamaan linear tiga variabel: $3x - y + 2z = 5$, $x + yz = 2$, $\\frac{y}{3} - x + z = 1$, $x^2 - y + z = 0$.",
        "Periksalah apakah $(3, 1, -2)$ merupakan penyelesaian sistem $x + y + z = 2$, $x - y + 2z = -2$, $2x + y - z = 9$.",
        "Tentukan nilai $k$ agar $(1, k, 2)$ memenuhi persamaan $4x - 3y + z = 3$.",
        "Harga $1$ tas, $1$ sepatu, dan $1$ topi berjumlah Rp$350.000$. Harga sepatu Rp$50.000$ lebih mahal daripada tas, dan harga tas tiga kali harga topi. Susunlah SPLTV-nya lalu tentukan harga masing-masing.",
        "Selesaikan sistem $x + y = 10$, $y + z = 14$, $x + z = 12$ dengan menjumlahkan ketiga persamaan lebih dahulu."
      ]
    },
    {
      "id": "P28",
      "bab": "Bab 5: Sistem Persamaan dan Pertidaksamaan Linear",
      "title": "Menyelesaikan SPLTV dengan Metode Substitusi",
      "obj": [
        "Memilih variabel yang paling mudah dinyatakan dalam variabel lain, yaitu yang koefisiennya $1$ atau $-1$.",
        "Menyubstitusikan bentuk itu ke dua persamaan lainnya untuk memperoleh sistem dua variabel, lalu menyelesaikannya sampai tuntas.",
        "Memeriksa jawaban akhir pada KETIGA persamaan semula dan melacak kekeliruan tanda saat menyubstitusikan bentuk bertanda minus."
      ],
      "hook": "Bayangkan tiga orang yang saling menunjuk: \"tanya saja dia\". Ani berkata umurnya satu tahun di atas Budi, Budi berkata umurnya satu tahun di atas Cici, dan Cici hanya tahu bahwa umur mereka bertiga berjumlah $27$ tahun. Selama setiap orang menunjuk orang lain, tidak ada jawaban. Begitu semua pernyataan dituliskan dalam SATU nama saja, soalnya tiba-tiba menjadi persamaan satu variabel yang mudah. Itulah metode substitusi: mengganti variabel dengan bentuk yang setara sampai hanya tersisa satu variabel.",
      "toolkit": [
        {
          "name": "Langkah 1: Pilih",
          "math": "$$\\text{pilih variabel berkoefisien } \\pm 1$$"
        },
        {
          "name": "Langkah 2: Nyatakan",
          "math": "$$x + y + z = 6 \\Rightarrow z = 6 - x - y$$"
        },
        {
          "name": "Langkah 3: Substitusikan",
          "math": "$$\\text{SPLTV} \\rightarrow \\text{SPLDV} \\rightarrow \\text{satu variabel}$$"
        },
        {
          "name": "Minus di Depan Kurung",
          "math": "$$-(6 - x - y) = -6 + x + y$$"
        },
        {
          "name": "Langkah 4: Periksa",
          "math": "$$(x, y, z) \\text{ diuji pada ketiga persamaan semula}$$"
        }
      ],
      "examples": [
        {
          "problem": "Selesaikan sistem $x + y + z = 9$, $x - y = 1$, dan $y - z = 1$ dengan metode substitusi.",
          "solution": "Langkah 1: Persamaan kedua dan ketiga masing-masing hanya memuat dua variabel. Nyatakan $x$ dan $z$ dalam $y$.\n$x - y = 1 \\Rightarrow x = y + 1$\n$y - z = 1 \\Rightarrow z = y - 1$\n\nLangkah 2: Substitusikan keduanya ke persamaan pertama.\n$(y + 1) + y + (y - 1) = 9$\n\nLangkah 3: Sederhanakan. Bilangan $+1$ dan $-1$ saling menghapus.\n$3y = 9 \\Rightarrow y = 3$\n\nLangkah 4: Hitung $x$ dan $z$ dari bentuk pada Langkah 1.\n$x = 3 + 1 = 4$ dan $z = 3 - 1 = 2$\n\nLangkah 5: Periksa pada ketiga persamaan semula.\n$4 + 3 + 2 = 9$, $4 - 3 = 1$, $3 - 2 = 1$ — semuanya cocok\n\nLangkah 6: Perhatikan Langkah 1 pada persamaan ketiga: dari $y - z = 1$ diperoleh $z = y - 1$, bukan $z = 1 - y$. Pindahkan suku dengan hati-hati.\n\nKesimpulan: Penyelesaiannya $(x, y, z) = (4, 3, 2)$."
        },
        {
          "problem": "Selesaikan sistem $x + 2y - z = 3$, $2x - y + z = 4$, dan $x + y + z = 4$ dengan metode substitusi.",
          "solution": "Langkah 1: Pilih variabel yang koefisiennya $1$. Pada persamaan ketiga semua koefisiennya $1$, jadi nyatakan $z$ darinya.\n$z = 4 - x - y$\n\nLangkah 2: Substitusikan ke persamaan pertama. Perhatikan tanda minus di depan kurung.\n$x + 2y - (4 - x - y) = 3$\n$x + 2y - 4 + x + y = 3 \\Rightarrow 2x + 3y = 7$\n\nLangkah 3: Substitusikan ke persamaan kedua.\n$2x - y + (4 - x - y) = 4$\n$x - 2y + 4 = 4 \\Rightarrow x = 2y$\n\nLangkah 4: Sekarang tinggal sistem dua variabel. Substitusikan $x = 2y$ ke $2x + 3y = 7$.\n$4y + 3y = 7 \\Rightarrow y = 1$\n\nLangkah 5: Hitung $x$ dan $z$.\n$x = 2(1) = 2$ dan $z = 4 - 2 - 1 = 1$\n\nLangkah 6: Periksa pada ketiga persamaan semula.\n$2 + 2 - 1 = 3$, $4 - 1 + 1 = 4$, $2 + 1 + 1 = 4$ — semuanya cocok\n\nLangkah 7: Kekeliruan yang paling sering terjadi ada di Langkah 2: menulis $-(4 - x - y)$ sebagai $-4 - x - y$. Tanda minus harus dibagikan ke SETIAP suku di dalam kurung.\n\nKesimpulan: Penyelesaiannya $(x, y, z) = (2, 1, 1)$."
        },
        {
          "problem": "Selesaikan sistem $2x + y - z = 1$, $x - y + 2z = 5$, dan $x + y + z = 6$ dengan menyatakan $z$ dari persamaan pertama.",
          "solution": "Langkah 1: Pada persamaan pertama koefisien $z$ adalah $-1$. Pindahkan $z$ ke ruas kanan.\n$2x + y - z = 1 \\Rightarrow z = 2x + y - 1$\n\nLangkah 2: Substitusikan ke persamaan kedua.\n$x - y + 2(2x + y - 1) = 5$\n$x - y + 4x + 2y - 2 = 5 \\Rightarrow 5x + y = 7$\n\nLangkah 3: Substitusikan ke persamaan ketiga.\n$x + y + (2x + y - 1) = 6 \\Rightarrow 3x + 2y = 7$\n\nLangkah 4: Dari $5x + y = 7$ diperoleh $y = 7 - 5x$. Substitusikan ke $3x + 2y = 7$.\n$3x + 2(7 - 5x) = 7 \\Rightarrow 3x + 14 - 10x = 7 \\Rightarrow -7x = -7 \\Rightarrow x = 1$\n\nLangkah 5: Hitung $y$ lalu $z$.\n$y = 7 - 5(1) = 2$ dan $z = 2(1) + 2 - 1 = 3$\n\nLangkah 6: Periksa pada ketiga persamaan semula.\n$2 + 2 - 3 = 1$, $1 - 2 + 6 = 5$, $1 + 2 + 3 = 6$ — semuanya cocok\n\nLangkah 7: Pada Langkah 2, angka $2$ di depan kurung dikalikan ke SETIAP suku: $2(2x + y - 1) = 4x + 2y - 2$. Lupa mengalikan $-1$ dengan $2$ adalah kekeliruan yang sering muncul.\n\nKesimpulan: Penyelesaiannya $(x, y, z) = (1, 2, 3)$."
        },
        {
          "problem": "Selesaikan sistem $x + y = 5$, $y + z = 8$, dan $x + z = 7$ dengan metode substitusi.",
          "solution": "Langkah 1: Setiap persamaan hanya memuat dua variabel. Mulailah dari persamaan pertama dan nyatakan $y$ dalam $x$.\n$y = 5 - x$\n\nLangkah 2: Substitusikan ke persamaan kedua untuk menyatakan $z$ dalam $x$ juga.\n$(5 - x) + z = 8 \\Rightarrow z = 3 + x$\n\nLangkah 3: Sekarang $y$ dan $z$ sama-sama dinyatakan dalam $x$. Substitusikan $z$ ke persamaan ketiga.\n$x + (3 + x) = 7 \\Rightarrow 2x = 4 \\Rightarrow x = 2$\n\nLangkah 4: Hitung $y$ dan $z$.\n$y = 5 - 2 = 3$ dan $z = 3 + 2 = 5$\n\nLangkah 5: Periksa pada ketiga persamaan semula.\n$2 + 3 = 5$, $3 + 5 = 8$, $2 + 5 = 7$ — semuanya cocok\n\nLangkah 6: Pola \"berantai\" seperti ini — $y$ dari persamaan pertama, lalu $z$ dari persamaan kedua — sangat cocok untuk substitusi karena setiap langkah hanya memindahkan satu suku.\n\nKesimpulan: Penyelesaiannya $(x, y, z) = (2, 3, 5)$."
        },
        {
          "problem": "Selesaikan sistem $2x + 3y + z = 11$, $3x - y + 2z = 7$, dan $x + y - z = 0$. Jelaskan pula mengapa pilihan variabel pertama itu penting.",
          "solution": "Langkah 1: Bandingkan pilihannya. Menyatakan $x$ dari persamaan pertama menghasilkan $x = \\frac{11 - 3y - z}{2}$, yaitu pecahan yang merepotkan. Persamaan ketiga semua koefisiennya $\\pm 1$, jadi pilihlah $z$ darinya.\n$z = x + y$\n\nLangkah 2: Substitusikan ke persamaan pertama.\n$2x + 3y + (x + y) = 11 \\Rightarrow 3x + 4y = 11$\n\nLangkah 3: Substitusikan ke persamaan kedua.\n$3x - y + 2(x + y) = 7 \\Rightarrow 5x + y = 7$\n\nLangkah 4: Dari $5x + y = 7$ diperoleh $y = 7 - 5x$. Substitusikan ke $3x + 4y = 11$.\n$3x + 4(7 - 5x) = 11 \\Rightarrow 3x + 28 - 20x = 11 \\Rightarrow -17x = -17 \\Rightarrow x = 1$\n\nLangkah 5: Hitung $y$ lalu $z$.\n$y = 7 - 5 = 2$ dan $z = 1 + 2 = 3$\n\nLangkah 6: Periksa pada ketiga persamaan semula.\n$2 + 6 + 3 = 11$, $3 - 2 + 6 = 7$, $1 + 2 - 3 = 0$ — semuanya cocok\n\nLangkah 7: Pilihan variabel pertama tidak mengubah jawaban akhir, tetapi sangat menentukan panjang dan rumitnya hitungan. Carilah koefisien $1$ atau $-1$ sebelum mulai.\n\nKesimpulan: Penyelesaiannya $(x, y, z) = (1, 2, 3)$; memilih $z$ dari persamaan ketiga menghindarkan hitungan dari pecahan."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, selesaikan sistem $3x - y + z = 4$, $x + 2y - z = 1$, $2x + y + 2z = 7$ dengan TIGA pilihan awal yang berbeda — satu anggota menyatakan $y$ dari persamaan pertama, satu menyatakan $z$ dari persamaan pertama, dan satu menyatakan $x$ dari persamaan kedua. Bandingkan panjang hitungan ketiganya dan pastikan jawabannya sama. Terakhir, tuliskan satu \"jebakan tanda minus\" yang kalian temui, lalu tunjukkan cara menghindarinya.",
      "summary_data": {
        "summary": [
          "Metode substitusi mengganti satu variabel dengan bentuk yang setara sampai tersisa satu variabel.",
          "Pilih variabel yang koefisiennya $1$ atau $-1$ agar tidak muncul pecahan.",
          "Satu substitusi mengubah SPLTV menjadi sistem dua variabel (SPLDV).",
          "Substitusi kedua mengubah SPLDV menjadi persamaan satu variabel.",
          "Tanda minus di depan kurung dibagikan ke setiap suku: $-(a - b) = -a + b$.",
          "Bilangan di depan kurung dikalikan ke setiap suku, termasuk suku konstanta.",
          "Setelah satu variabel diketahui, hitung variabel lainnya dengan cara mundur.",
          "Jawaban akhir selalu diuji pada KETIGA persamaan semula, bukan pada persamaan hasil olahan.",
          "Sistem berpola berantai, seperti $x + y$, $y + z$, $x + z$, sangat cocok diselesaikan dengan substitusi.",
          "Pilihan variabel pertama tidak mengubah jawaban, tetapi menentukan mudah atau sulitnya hitungan."
        ],
        "islamic": "Setiap persoalan yang tampak rumit selalu mempunyai jalan keluar bila dikerjakan langkah demi langkah. \"Maka sesungguhnya beserta kesulitan ada kemudahan. Sesungguhnya beserta kesulitan ada kemudahan.\" (QS. Al-Insyirah: 5–6)"
      },
      "collab_cases": [
        "Selesaikan sistem $x = y + 2$, $z = 2y$, dan $x + y + z = 14$.",
        "Selesaikan sistem $x + y + z = 6$, $x - y + z = 2$, dan $x + y - z = 0$ dengan menyatakan $z$ dari persamaan pertama.",
        "Selesaikan sistem $2x + y - z = 3$, $x + y + z = 4$, dan $x - y + z = 0$.",
        "Selesaikan sistem $x + y = 8$, $y + z = 11$, dan $x + z = 9$ dengan substitusi berantai.",
        "Selesaikan sistem $3x - y + z = 4$, $x + 2y - z = 1$, dan $2x + y + 2z = 7$. Variabel mana yang paling tepat dipilih lebih dahulu? Jelaskan."
      ]
    },
    {
      "id": "P29",
      "bab": "Bab 5: Sistem Persamaan dan Pertidaksamaan Linear",
      "title": "Menyelesaikan SPLTV dengan Metode Eliminasi dan Gabungan",
      "obj": [
        "Menyamakan koefisien satu variabel pada dua persamaan, lalu menjumlahkan atau mengurangkannya untuk menghilangkan variabel itu.",
        "Menyelesaikan SPLTV dengan pola tiga variabel → dua variabel → satu variabel, memakai eliminasi saja atau gabungan eliminasi dan substitusi.",
        "Mengenali sistem yang tidak mempunyai penyelesaian ketika eliminasi menghasilkan kalimat mustahil seperti $0 = 4$."
      ],
      "hook": "Catatan pertama: harga $1$ apel ditambah $1$ jeruk adalah Rp$9.000$. Catatan kedua: $1$ apel lebih mahal Rp$1.000$ daripada $1$ jeruk. Tuliskan keduanya sebagai persamaan, $a + j = 9.000$ dan $a - j = 1.000$, lalu JUMLAHKAN: jeruknya saling meniadakan dan tersisa $2a = 10.000$. Dua pernyataan yang benar tetap menghasilkan pernyataan yang benar bila dijumlahkan atau dikurangkan — dan kita dapat mengaturnya agar satu variabel lenyap. Itulah metode eliminasi, dan pada SPLTV gagasan yang sama dipakai dua kali.",
      "toolkit": [
        {
          "name": "Samakan Koefisien",
          "math": "$$\\text{kalikan persamaan agar koefisien satu variabel sama atau berlawanan}$$"
        },
        {
          "name": "Koefisien Berlawanan",
          "math": "$$(+k) + (-k) = 0 \\Rightarrow \\text{JUMLAHKAN}$$"
        },
        {
          "name": "Koefisien Sama",
          "math": "$$(+k) - (+k) = 0 \\Rightarrow \\text{KURANGKAN}$$"
        },
        {
          "name": "Alur Eliminasi",
          "math": "$$3 \\text{ persamaan} \\xrightarrow{\\text{eliminasi}} 2 \\text{ persamaan} \\xrightarrow{\\text{eliminasi}} 1 \\text{ persamaan}$$"
        },
        {
          "name": "Kalimat Mustahil",
          "math": "$$0 = k,\\ k \\neq 0 \\Rightarrow \\text{tidak ada penyelesaian}$$"
        }
      ],
      "examples": [
        {
          "problem": "Selesaikan sistem $x + y + z = 6$, $x - y + z = 2$, dan $2x + y - z = 1$ dengan metode eliminasi.",
          "solution": "Langkah 1: Perhatikan koefisien $z$: $+1$, $+1$, dan $-1$. Persamaan ketiga berlawanan tanda dengan dua lainnya, jadi $z$ paling mudah dieliminasi dengan menjumlahkan.\n\nLangkah 2: Jumlahkan persamaan pertama dan ketiga.\n$(x + y + z) + (2x + y - z) = 6 + 1 \\Rightarrow 3x + 2y = 7$\n\nLangkah 3: Jumlahkan persamaan kedua dan ketiga.\n$(x - y + z) + (2x + y - z) = 2 + 1 \\Rightarrow 3x = 3$\n\nLangkah 4: Pada Langkah 3 ternyata $y$ pun ikut hilang. Langsung diperoleh $x = 1$.\n\nLangkah 5: Substitusikan ke $3x + 2y = 7$.\n$3 + 2y = 7 \\Rightarrow y = 2$\n\nLangkah 6: Hitung $z$ dari persamaan pertama.\n$1 + 2 + z = 6 \\Rightarrow z = 3$\n\nLangkah 7: Periksa pada ketiga persamaan semula.\n$1 + 2 + 3 = 6$, $1 - 2 + 3 = 2$, $2 + 2 - 3 = 1$ — semuanya cocok\n\nKesimpulan: Penyelesaiannya $(x, y, z) = (1, 2, 3)$."
        },
        {
          "problem": "Selesaikan sistem $2x + 3y - z = 5$, $x - 2y + 2z = 4$, dan $x + y + z = 5$.",
          "solution": "Langkah 1: Pilih $z$ untuk dieliminasi. Koefisiennya $-1$, $+2$, dan $+1$ — mudah disamakan.\n\nLangkah 2: Eliminasi $z$ dari persamaan pertama dan kedua. Kalikan persamaan pertama dengan $2$ agar koefisien $z$ menjadi $-2$, lalu jumlahkan.\n$4x + 6y - 2z = 10$\n$(4x + 6y - 2z) + (x - 2y + 2z) = 10 + 4 \\Rightarrow 5x + 4y = 14$\n\nLangkah 3: Eliminasi $z$ dari persamaan pertama dan ketiga. Koefisiennya sudah berlawanan, jadi langsung jumlahkan.\n$(2x + 3y - z) + (x + y + z) = 5 + 5 \\Rightarrow 3x + 4y = 10$\n\nLangkah 4: Sekarang ada dua persamaan dua variabel dengan koefisien $y$ yang sama. Kurangkan.\n$(5x + 4y) - (3x + 4y) = 14 - 10 \\Rightarrow 2x = 4 \\Rightarrow x = 2$\n\nLangkah 5: Substitusikan ke $3x + 4y = 10$.\n$6 + 4y = 10 \\Rightarrow y = 1$\n\nLangkah 6: Hitung $z$ dari persamaan ketiga.\n$2 + 1 + z = 5 \\Rightarrow z = 2$\n\nLangkah 7: Periksa pada ketiga persamaan semula.\n$4 + 3 - 2 = 5$, $2 - 2 + 4 = 4$, $2 + 1 + 2 = 5$ — semuanya cocok\n\nKesimpulan: Penyelesaiannya $(x, y, z) = (2, 1, 2)$."
        },
        {
          "problem": "Selesaikan sistem $3x + 2y - z = -1$, $2x - 3y + 2z = 9$, dan $x + y + 3z = 6$.",
          "solution": "Langkah 1: Tidak ada dua persamaan yang koefisiennya langsung sama. Pilih $z$ karena persamaan pertama memuat $-z$ yang mudah dikalikan.\n\nLangkah 2: Kalikan persamaan pertama dengan $2$, lalu jumlahkan dengan persamaan kedua.\n$6x + 4y - 2z = -2$\n$(6x + 4y - 2z) + (2x - 3y + 2z) = -2 + 9 \\Rightarrow 8x + y = 7$\n\nLangkah 3: Kalikan persamaan pertama dengan $3$, lalu jumlahkan dengan persamaan ketiga.\n$9x + 6y - 3z = -3$\n$(9x + 6y - 3z) + (x + y + 3z) = -3 + 6 \\Rightarrow 10x + 7y = 3$\n\nLangkah 4: Eliminasi $y$. Kalikan $8x + y = 7$ dengan $7$, lalu kurangkan $10x + 7y = 3$.\n$56x + 7y = 49$\n$(56x + 7y) - (10x + 7y) = 49 - 3 \\Rightarrow 46x = 46 \\Rightarrow x = 1$\n\nLangkah 5: Hitung $y$ dari $8x + y = 7$.\n$8 + y = 7 \\Rightarrow y = -1$\n\nLangkah 6: Hitung $z$ dari persamaan ketiga.\n$1 + (-1) + 3z = 6 \\Rightarrow 3z = 6 \\Rightarrow z = 2$\n\nLangkah 7: Periksa pada ketiga persamaan semula.\n$3 - 2 - 2 = -1$, $2 + 3 + 4 = 9$, $1 - 1 + 6 = 6$ — semuanya cocok\n\nKesimpulan: Penyelesaiannya $(x, y, z) = (1, -1, 2)$."
        },
        {
          "problem": "Selesaikan sistem $x + 2y + z = 8$, $2x + y - z = 1$, dan $x - y + 2z = 5$ dengan metode gabungan eliminasi dan substitusi.",
          "solution": "Langkah 1: Metode gabungan: eliminasi dipakai untuk menurunkan banyaknya variabel, lalu substitusi dipakai untuk menuntaskan.\n\nLangkah 2: Eliminasi $z$ dari persamaan pertama dan kedua dengan menjumlahkannya.\n$(x + 2y + z) + (2x + y - z) = 8 + 1 \\Rightarrow 3x + 3y = 9 \\Rightarrow x + y = 3$\n\nLangkah 3: Eliminasi $z$ dari persamaan kedua dan ketiga. Kalikan persamaan kedua dengan $2$, lalu jumlahkan.\n$(4x + 2y - 2z) + (x - y + 2z) = 2 + 5 \\Rightarrow 5x + y = 7$\n\nLangkah 4: Sekarang substitusi. Dari $x + y = 3$ diperoleh $y = 3 - x$.\n$5x + (3 - x) = 7 \\Rightarrow 4x = 4 \\Rightarrow x = 1$\n\nLangkah 5: Hitung $y$ lalu $z$.\n$y = 3 - 1 = 2$, dan dari persamaan pertama $1 + 4 + z = 8 \\Rightarrow z = 3$\n\nLangkah 6: Periksa pada ketiga persamaan semula.\n$1 + 4 + 3 = 8$, $2 + 2 - 3 = 1$, $1 - 2 + 6 = 5$ — semuanya cocok\n\nLangkah 7: Pada Langkah 2, persamaan $3x + 3y = 9$ dibagi $3$ lebih dahulu. Menyederhanakan sedini mungkin membuat angka tetap kecil.\n\nKesimpulan: Penyelesaiannya $(x, y, z) = (1, 2, 3)$."
        },
        {
          "problem": "Tunjukkan bahwa sistem $x + y + z = 3$, $2x + 2y + 2z = 10$, dan $x - y + z = 1$ tidak mempunyai penyelesaian.",
          "solution": "Langkah 1: Perhatikan persamaan kedua. Ruas kirinya tepat dua kali ruas kiri persamaan pertama.\n\nLangkah 2: Kalikan persamaan pertama dengan $2$.\n$2x + 2y + 2z = 6$\n\nLangkah 3: Kurangkan dari persamaan kedua.\n$(2x + 2y + 2z) - (2x + 2y + 2z) = 10 - 6$\n\nLangkah 4: Hasilnya.\n$0 = 4$\n\nLangkah 5: Kalimat $0 = 4$ mustahil benar untuk nilai $x$, $y$, $z$ berapa pun. Artinya tidak ada tripel yang memenuhi kedua persamaan itu sekaligus.\n\nLangkah 6: Maknanya: persamaan pertama menyatakan $x + y + z = 3$, sedangkan persamaan kedua sama dengan $x + y + z = 5$. Jumlah yang sama tidak mungkin bernilai $3$ dan $5$ sekaligus.\n\nLangkah 7: Bandingkan bila ruas kanannya $6$: eliminasi menghasilkan $0 = 0$, yang selalu benar. Sistem seperti itu mempunyai tak hingga banyak penyelesaian, bukan tidak punya.\n\nKesimpulan: Sistem itu tidak mempunyai penyelesaian (himpunan penyelesaiannya kosong), karena eliminasi menghasilkan kalimat mustahil $0 = 4$."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, setiap kelompok menyelesaikan sistem $2x + y + z = 4$, $x - 2y + z = 5$, $3x + y - 2z = 3$ dengan mengeliminasi variabel yang BERBEDA — ada yang mulai dari $x$, ada yang dari $y$, ada yang dari $z$. Bandingkan jawaban dan banyaknya langkah. Selanjutnya, ubahlah satu ruas kanan persamaan kedua sehingga sistemnya menjadi tidak mempunyai penyelesaian — apakah hal itu mungkin untuk sistem ini? Jelaskan alasan kalian.",
      "summary_data": {
        "summary": [
          "Eliminasi berarti menghilangkan satu variabel dengan menjumlahkan atau mengurangkan dua persamaan.",
          "Koefisien berlawanan tanda dihilangkan dengan MENJUMLAHKAN; koefisien sama dihilangkan dengan MENGURANGKAN.",
          "Bila koefisiennya belum sama, kalikan satu atau kedua persamaan dengan bilangan yang tepat.",
          "Mengalikan satu persamaan dengan bilangan tak nol tidak mengubah penyelesaiannya.",
          "Eliminasi variabel yang SAMA dari dua pasang persamaan untuk memperoleh sistem dua variabel.",
          "Metode gabungan: eliminasi untuk menurunkan banyaknya variabel, substitusi untuk menuntaskan.",
          "Sederhanakan persamaan hasil eliminasi sedini mungkin, misalnya membagi $3x + 3y = 9$ menjadi $x + y = 3$.",
          "Hasil $0 = k$ dengan $k \\neq 0$ berarti sistem tidak mempunyai penyelesaian.",
          "Hasil $0 = 0$ berarti persamaannya bergantungan dan sistem dapat mempunyai tak hingga banyak penyelesaian.",
          "Jawaban akhir selalu diperiksa pada ketiga persamaan semula."
        ],
        "islamic": "Kejujuran dan ketelitian dalam menimbang adalah perintah langsung. \"Dan sempurnakanlah takaran apabila kamu menakar, dan timbanglah dengan timbangan yang benar.\" (QS. Al-Isra: 35)"
      },
      "collab_cases": [
        "Selesaikan sistem $x + y + z = 9$, $x - y + z = 3$, dan $x + y - z = 1$ dengan metode eliminasi.",
        "Selesaikan sistem $2x + y + z = 7$, $x + 2y + z = 8$, dan $x + y + 2z = 9$.",
        "Selesaikan sistem $2x - y + z = 6$, $x + y - 2z = 2$, dan $x - 3y + z = 1$.",
        "Jelaskan mengapa sistem $x + y + z = 3$, $2x + 2y + 2z = 6$, dan $x - y = 1$ tidak mempunyai tepat satu penyelesaian.",
        "Selesaikan sistem $4x - y + 2z = 9$, $x + 3y - z = -4$, dan $2x + y + 3z = 7$ dengan metode gabungan."
      ]
    },
    {
      "id": "P30",
      "bab": "Bab 5: Sistem Persamaan dan Pertidaksamaan Linear",
      "title": "Penerapan SPLTV pada Masalah Nyata",
      "obj": [
        "Menetapkan tiga variabel beserta satuannya dari sebuah soal cerita, lalu menerjemahkan setiap keterangan menjadi persamaan.",
        "Menyelesaikan model SPLTV dan menjawab tepat besaran yang ditanyakan, bukan sekadar menuliskan nilai $x$, $y$, dan $z$.",
        "Menguji kewajaran jawaban terhadap keadaan nyata — harga tidak negatif, umur dan banyak barang berupa bilangan cacah."
      ],
      "hook": "Seorang pedagang lupa mencatat harga tiga jenis kue, tetapi ia masih menyimpan tiga nota penjualan kemarin. Seorang kasir ingin tahu berapa banyak tiket dewasa, pelajar, dan anak yang terjual dari jumlah tiket dan uang di laci. Seorang perancang ingin tahu persamaan lengkung yang melalui tiga titik. Ketiga masalah itu tampak berbeda, tetapi kerangkanya sama: tiga besaran yang tidak diketahui, tiga keterangan yang saling mengikat. Kemampuan terpenting di sini bukan berhitung — melainkan MENERJEMAHKAN kalimat menjadi persamaan dengan tepat.",
      "toolkit": [
        {
          "name": "1. Tetapkan Variabel",
          "math": "$$x, y, z = \\text{besaran yang dicari (beserta satuannya)}$$"
        },
        {
          "name": "2. Terjemahkan",
          "math": "$$\\text{satu keterangan} \\Rightarrow \\text{satu persamaan}$$"
        },
        {
          "name": "Kata Kunci",
          "math": "$$\\text{lebih } k \\text{ daripada} \\Rightarrow +k;\\quad n \\text{ kali} \\Rightarrow \\times n$$"
        },
        {
          "name": "Bilangan Tiga Angka",
          "math": "$$\\overline{abc} = 100a + 10b + c$$"
        },
        {
          "name": "Parabola Melalui Tiga Titik",
          "math": "$$y = ax^2 + bx + c \\text{ melalui } (x_1, y_1) \\Rightarrow ax_1^2 + bx_1 + c = y_1$$"
        }
      ],
      "examples": [
        {
          "problem": "Harga $2$ roti, $1$ susu, dan $1$ keju adalah Rp$30.000$. Harga $1$ roti, $2$ susu, dan $1$ keju adalah Rp$33.000$. Harga $1$ roti, $1$ susu, dan $2$ keju adalah Rp$37.000$. Tentukan harga masing-masing.",
          "solution": "Langkah 1: Tetapkan variabel dalam ribu rupiah: $r$ = harga $1$ roti, $s$ = harga $1$ susu, $k$ = harga $1$ keju.\n\nLangkah 2: Terjemahkan ketiga keterangan.\n$2r + s + k = 30$\n$r + 2s + k = 33$\n$r + s + 2k = 37$\n\nLangkah 3: Susunan koefisiennya simetris, jadi jumlahkan ketiganya.\n$4r + 4s + 4k = 100 \\Rightarrow r + s + k = 25$\n\nLangkah 4: Kurangkan $r + s + k = 25$ dari tiap persamaan.\n$r = 30 - 25 = 5$, $s = 33 - 25 = 8$, $k = 37 - 25 = 12$\n\nLangkah 5: Periksa: $10 + 8 + 12 = 30$, $5 + 16 + 12 = 33$, $5 + 8 + 24 = 37$ — semuanya cocok.\n\nLangkah 6: Periksa kewajarannya: ketiga harga positif, dan keju paling mahal — sesuai dengan nota ketiga yang totalnya paling besar ketika keju dibeli dua.\n\nKesimpulan: Harga roti Rp$5.000$, susu Rp$8.000$, dan keju Rp$12.000$."
        },
        {
          "problem": "Jumlah umur ayah, ibu, dan seorang anak adalah $90$ tahun. Ayah $6$ tahun lebih tua daripada ibu, dan umur ibu tiga kali umur anak. Tentukan umur masing-masing.",
          "solution": "Langkah 1: Tetapkan variabel dalam tahun: $a$ = umur ayah, $i$ = umur ibu, $n$ = umur anak.\n\nLangkah 2: Terjemahkan.\n$a + i + n = 90$\n\"Ayah $6$ tahun lebih tua daripada ibu\": $a = i + 6$\n\"Umur ibu tiga kali umur anak\": $i = 3n$\n\nLangkah 3: Nyatakan semuanya dalam $n$.\n$i = 3n$ dan $a = 3n + 6$\n\nLangkah 4: Substitusikan ke persamaan pertama.\n$(3n + 6) + 3n + n = 90 \\Rightarrow 7n = 84 \\Rightarrow n = 12$\n\nLangkah 5: Hitung umur lainnya.\n$i = 36$ dan $a = 42$\n\nLangkah 6: Periksa: $42 + 36 + 12 = 90$, $42 = 36 + 6$, $36 = 3 \\times 12$ — semuanya cocok, dan umurnya wajar.\n\nLangkah 7: Kekeliruan yang sering terjadi adalah menulis \"umur ibu tiga kali umur anak\" sebagai $n = 3i$. Bacalah: yang BESAR (ibu) sama dengan tiga kali yang KECIL (anak).\n\nKesimpulan: Umur ayah $42$ tahun, ibu $36$ tahun, dan anak $12$ tahun."
        },
        {
          "problem": "Sebuah bilangan tiga angka mempunyai jumlah angka-angka $14$. Angka ratusannya dua kali angka satuan, dan angka puluhannya $2$ lebih besar daripada angka satuan. Tentukan bilangan itu.",
          "solution": "Langkah 1: Misalkan angka ratusan $a$, puluhan $b$, dan satuan $c$. Bilangannya ditulis $\\overline{abc} = 100a + 10b + c$.\n\nLangkah 2: Terjemahkan.\n$a + b + c = 14$, $a = 2c$, $b = c + 2$\n\nLangkah 3: Substitusikan ke persamaan pertama.\n$2c + (c + 2) + c = 14 \\Rightarrow 4c = 12 \\Rightarrow c = 3$\n\nLangkah 4: Hitung angka lainnya.\n$a = 6$ dan $b = 5$\n\nLangkah 5: Susun bilangannya: ratusan $6$, puluhan $5$, satuan $3$, jadi $653$.\n\nLangkah 6: Periksa: $6 + 5 + 3 = 14$, $6 = 2 \\times 3$, $5 = 3 + 2$ — cocok. Setiap angka juga berada di antara $0$ dan $9$, sebagaimana mestinya.\n\nLangkah 7: Jangan menjumlahkan $a + b + c$ lalu menyebutnya bilangan itu. Yang ditanyakan bilangannya, yaitu $653$, bukan jumlah angkanya.\n\nKesimpulan: Bilangan itu adalah $653$."
        },
        {
          "problem": "Sebuah pertunjukan menjual $100$ tiket: tiket dewasa Rp$20.000$, pelajar Rp$15.000$, dan anak Rp$10.000$. Pendapatannya Rp$1.600.000$, dan banyak tiket pelajar dua kali tiket anak. Berapa banyak tiket setiap jenis?",
          "solution": "Langkah 1: Tetapkan variabel: $d$, $p$, $a$ = banyak tiket dewasa, pelajar, dan anak. Hitung uang dalam ribu rupiah.\n\nLangkah 2: Terjemahkan.\n$d + p + a = 100$\n$20d + 15p + 10a = 1600$\n$p = 2a$\n\nLangkah 3: Substitusikan $p = 2a$ ke dua persamaan pertama.\n$d + 3a = 100$\n$20d + 30a + 10a = 1600 \\Rightarrow 20d + 40a = 1600 \\Rightarrow d + 2a = 80$\n\nLangkah 4: Kurangkan kedua persamaan dua variabel itu.\n$(d + 3a) - (d + 2a) = 100 - 80 \\Rightarrow a = 20$\n\nLangkah 5: Hitung lainnya.\n$p = 40$ dan $d = 100 - 60 = 40$\n\nLangkah 6: Periksa: $40 + 40 + 20 = 100$ tiket, dan $800 + 600 + 200 = 1600$ ribu — cocok.\n\nLangkah 7: Periksa kewajarannya: semua jawaban bilangan cacah. Bila hitungan menghasilkan $17{,}5$ tiket, pasti ada kekeliruan pada model atau hitungan.\n\nKesimpulan: Terjual $40$ tiket dewasa, $40$ tiket pelajar, dan $20$ tiket anak."
        },
        {
          "problem": "Tentukan fungsi $y = ax^2 + bx + c$ yang grafiknya melalui titik $(1, 2)$, $(2, 3)$, dan $(3, 6)$.",
          "solution": "Langkah 1: Setiap titik yang dilalui memberikan satu persamaan: masukkan $x$ dan $y$-nya.\n\nLangkah 2: Titik $(1, 2)$: $a + b + c = 2$\nTitik $(2, 3)$: $4a + 2b + c = 3$\nTitik $(3, 6)$: $9a + 3b + c = 6$\n\nLangkah 3: Hasilnya SPLTV dalam $a$, $b$, $c$. Eliminasi $c$: kurangkan persamaan pertama dari kedua, dan kedua dari ketiga.\n$3a + b = 1$\n$5a + b = 3$\n\nLangkah 4: Kurangkan lagi.\n$2a = 2 \\Rightarrow a = 1$, lalu $b = 1 - 3 = -2$\n\nLangkah 5: Hitung $c$.\n$1 - 2 + c = 2 \\Rightarrow c = 3$\n\nLangkah 6: Periksa pada ketiga titik: $1 - 2 + 3 = 2$, $4 - 4 + 3 = 3$, $9 - 6 + 3 = 6$ — semuanya cocok.\n\nLangkah 7: Contoh ini menjadi jembatan ke bab Fungsi Kuadrat: tiga titik menentukan tepat satu parabola, sama seperti tiga persamaan menentukan tepat satu tripel.\n\nKesimpulan: Fungsi yang dicari adalah $y = x^2 - 2x + 3$."
        }
      ],
      "btc": "Kelompok VNPS: Setiap kelompok mengarang satu soal cerita SPLTV dari kehidupan sekolah — kantin, koperasi, tiket pentas seni, atau iuran kelas — yang jawabannya bilangan cacah. Tuliskan soalnya di papan tanpa jawaban, lalu kelompok lain menyelesaikannya. Kelompok pengarang menilai: apakah variabelnya ditetapkan dengan satuan, apakah setiap kalimat diterjemahkan tepat, dan apakah jawabannya diperiksa kewajarannya. Diskusikan satu kalimat yang paling mudah salah diterjemahkan.",
      "summary_data": {
        "summary": [
          "Mulailah dengan menetapkan arti setiap variabel beserta satuannya.",
          "Satu keterangan dalam soal diterjemahkan menjadi satu persamaan.",
          "\"$A$ lebih $k$ daripada $B$\" berarti $A = B + k$; \"$A$ adalah $n$ kali $B$\" berarti $A = nB$.",
          "Nyatakan uang dalam satuan ribu agar angkanya kecil, lalu kembalikan ke rupiah di akhir.",
          "Bilangan tiga angka $\\overline{abc}$ bernilai $100a + 10b + c$, dengan setiap angka di antara $0$ dan $9$.",
          "Parabola $y = ax^2 + bx + c$ yang melalui tiga titik menghasilkan SPLTV dalam $a$, $b$, $c$.",
          "Susunan koefisien yang simetris dapat diselesaikan cepat dengan menjumlahkan ketiga persamaan.",
          "Jawablah TEPAT yang ditanyakan — umur ayah, bilangannya, atau banyak tiket pelajar.",
          "Harga, umur, dan banyak barang tidak boleh negatif; banyak barang harus bilangan cacah.",
          "Jawaban yang tidak wajar adalah tanda adanya kekeliruan pada model atau hitungan."
        ],
        "islamic": "Ilmu yang dipakai untuk menyelesaikan persoalan nyata mengangkat derajat pemiliknya. \"...niscaya Allah akan mengangkat (derajat) orang-orang yang beriman di antaramu dan orang-orang yang diberi ilmu beberapa derajat.\" (QS. Al-Mujadilah: 11)"
      },
      "collab_cases": [
        "Harga $2$ pensil, $3$ buku, dan $1$ penggaris Rp$23.000$; $3$ pensil, $1$ buku, dan $2$ penggaris Rp$19.000$; $1$ pensil, $2$ buku, dan $3$ penggaris Rp$24.000$. Tentukan harga masing-masing.",
        "Jumlah umur tiga bersaudara A, B, dan C adalah $58$ tahun. Umur C $6$ tahun lebih muda daripada B, dan umur A dua kali umur C. Tentukan umur masing-masing.",
        "Sebuah bilangan tiga angka mempunyai jumlah angka $16$. Angka puluhannya dua kali angka satuan, dan angka ratusannya $4$ lebih besar daripada angka satuan. Tentukan bilangan itu.",
        "Terjual $60$ tiket: dewasa Rp$25.000$, anak Rp$15.000$, lansia Rp$10.000$, dengan pendapatan Rp$1.150.000$. Banyak tiket anak dua kali tiket lansia. Tentukan banyak tiket setiap jenis.",
        "Tentukan fungsi $y = ax^2 + bx + c$ yang grafiknya melalui $(0, 1)$, $(1, 4)$, dan $(-1, 0)$."
      ]
    },
    {
      "id": "P31",
      "bab": "Bab 5: Sistem Persamaan dan Pertidaksamaan Linear",
      "title": "Pertidaksamaan Linear Dua Variabel dan Daerah Penyelesaiannya",
      "obj": [
        "Menggambar garis batas pertidaksamaan $ax + by \\le c$ dan menentukan apakah garis itu digambar penuh atau putus-putus.",
        "Menentukan daerah penyelesaian dengan uji titik, termasuk ketika garis batasnya melalui titik $O(0, 0)$.",
        "Menyusun pertidaksamaan dari grafik daerah penyelesaian maupun dari soal cerita yang memuat kata \"paling banyak\" atau \"tidak lebih dari\"."
      ],
      "hook": "Uang saku Rp$100.000$ untuk membeli buku seharga Rp$20.000$ dan pulpen seharga Rp$5.000$. Berapa buku dan pulpen yang dapat dibeli? Jawabannya bukan satu pasangan, melainkan BANYAK: $5$ buku saja, $3$ buku dan $8$ pulpen, $1$ buku dan $10$ pulpen, dan seterusnya. Persamaan menghasilkan satu garis, tetapi batasan \"tidak lebih dari\" menghasilkan satu DAERAH. Pada bab ini, jawaban kita berpindah dari titik dan garis menjadi bidang yang diarsir.",
      "toolkit": [
        {
          "name": "Bentuk Umum",
          "math": "$$ax + by \\le c,\\quad ax + by < c,\\quad ax + by \\ge c,\\quad ax + by > c$$"
        },
        {
          "name": "Garis Batas",
          "math": "$$ax + by = c \\text{ melalui } \\left(\\tfrac{c}{a}, 0\\right) \\text{ dan } \\left(0, \\tfrac{c}{b}\\right)$$"
        },
        {
          "name": "Penuh atau Putus-putus",
          "math": "$$\\le, \\ge \\Rightarrow \\text{garis penuh};\\qquad <, > \\Rightarrow \\text{garis putus-putus}$$"
        },
        {
          "name": "Uji Titik",
          "math": "$$\\text{uji } O(0, 0):\\ \\text{benar} \\Rightarrow \\text{daerah memuat } O;\\ \\text{salah} \\Rightarrow \\text{daerah seberang}$$"
        },
        {
          "name": "Bentuk y Terisolasi",
          "math": "$$y \\ge mx + n \\Rightarrow \\text{di ATAS garis};\\qquad y \\le mx + n \\Rightarrow \\text{di BAWAH garis}$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan daerah penyelesaian $2x + 3y \\le 12$ pada bidang koordinat.",
          "solution": "Langkah 1: Ubah tanda $\\le$ menjadi $=$ untuk memperoleh garis batas.\n$2x + 3y = 12$\n\nLangkah 2: Cari titik potong dengan sumbu.\n$y = 0 \\Rightarrow x = 6$, titik $(6, 0)$\n$x = 0 \\Rightarrow y = 4$, titik $(0, 4)$\n\nLangkah 3: Tanda $\\le$ memuat \"sama dengan\", jadi titik-titik pada garis ikut menjadi penyelesaian. Gambar garis PENUH melalui $(6, 0)$ dan $(0, 4)$.\n\nLangkah 4: Uji titik $O(0, 0)$, yang tidak terletak pada garis.\n$2(0) + 3(0) = 0 \\le 12$ — benar\n\nLangkah 5: Karena benar, daerah penyelesaiannya adalah sisi garis yang MEMUAT $O$, yaitu di bawah garis.\n\nLangkah 6: Periksa dengan titik di seberang, misalnya $(6, 4)$: $12 + 12 = 24 \\le 12$ — salah. Titik itu memang berada di luar daerah.\n\nKesimpulan: Daerah penyelesaiannya adalah sisi garis $2x + 3y = 12$ yang memuat $O(0, 0)$, dengan garisnya sendiri ikut termasuk (digambar penuh)."
        },
        {
          "problem": "Tentukan daerah penyelesaian $x - 2y > 4$.",
          "solution": "Langkah 1: Garis batasnya $x - 2y = 4$.\n\nLangkah 2: Cari titik potong.\n$y = 0 \\Rightarrow x = 4$, titik $(4, 0)$\n$x = 0 \\Rightarrow -2y = 4 \\Rightarrow y = -2$, titik $(0, -2)$\n\nLangkah 3: Tanda $>$ tidak memuat \"sama dengan\", jadi titik pada garis BUKAN penyelesaian. Gambar garis PUTUS-PUTUS.\n\nLangkah 4: Uji $O(0, 0)$.\n$0 - 0 = 0 > 4$ — salah\n\nLangkah 5: Karena salah, daerah penyelesaiannya adalah sisi garis yang TIDAK memuat $O$, yaitu di sebelah kanan bawah garis.\n\nLangkah 6: Periksa dengan titik $(6, 0)$ di sisi itu: $6 - 0 = 6 > 4$ — benar, cocok.\n\nLangkah 7: Periksa pula titik pada garis, misalnya $(4, 0)$: $4 > 4$ — salah. Itulah alasan garisnya putus-putus.\n\nKesimpulan: Daerah penyelesaiannya adalah sisi garis $x - 2y = 4$ yang tidak memuat $O$, dengan garis batas putus-putus."
        },
        {
          "problem": "Tentukan daerah penyelesaian $3x - y \\ge 0$.",
          "solution": "Langkah 1: Garis batasnya $3x - y = 0$, atau $y = 3x$. Garis ini melalui $O(0, 0)$ dan $(1, 3)$.\n\nLangkah 2: Tanda $\\ge$, jadi garisnya PENUH.\n\nLangkah 3: Titik $O$ terletak TEPAT pada garis, sehingga tidak dapat dipakai untuk menentukan sisi. Uji $O$ selalu menghasilkan $0 \\ge 0$, benar di sisi mana pun.\n\nLangkah 4: Pilih titik uji lain yang jelas tidak pada garis, misalnya $(1, 0)$.\n$3(1) - 0 = 3 \\ge 0$ — benar\n\nLangkah 5: Jadi daerah penyelesaiannya adalah sisi yang memuat $(1, 0)$, yaitu di sebelah kanan bawah garis $y = 3x$.\n\nLangkah 6: Cara lain: tulis sebagai $y \\le 3x$. Tanda $\\le$ pada bentuk $y$ terisolasi berarti daerah di BAWAH garis — hasilnya sama.\n\nKesimpulan: Daerah penyelesaiannya adalah sisi garis $y = 3x$ yang memuat $(1, 0)$, yaitu di bawah garis, dengan garis penuh."
        },
        {
          "problem": "Sebuah garis batas melalui $(4, 0)$ dan $(0, 2)$ dan digambar penuh. Daerah yang diarsir memuat titik $O(0, 0)$. Tentukan pertidaksamaannya.",
          "solution": "Langkah 1: Garis yang memotong sumbu $x$ di $(p, 0)$ dan sumbu $y$ di $(0, q)$ mempunyai persamaan $qx + py = pq$.\n\nLangkah 2: Di sini $p = 4$ dan $q = 2$.\n$2x + 4y = 8 \\Rightarrow x + 2y = 4$\n\nLangkah 3: Periksa kedua titik: $4 + 0 = 4$ dan $0 + 4 = 4$ — cocok.\n\nLangkah 4: Garisnya penuh, jadi tandanya $\\le$ atau $\\ge$.\n\nLangkah 5: Tentukan arah tanda dengan titik $O$ yang termasuk daerah.\n$0 + 0 = 0$, dan $0$ lebih KECIL daripada $4$\n\nLangkah 6: Jadi tanda yang benar adalah $\\le$.\n$x + 2y \\le 4$\n\nLangkah 7: Periksa dengan titik di seberang, misalnya $(4, 2)$: $4 + 4 = 8 \\le 4$ — salah, sehingga titik itu memang tidak diarsir.\n\nKesimpulan: Pertidaksamaannya adalah $x + 2y \\le 4$."
        },
        {
          "problem": "Dengan uang paling banyak Rp$100.000$, Rina membeli $x$ buku seharga Rp$20.000$ dan $y$ pulpen seharga Rp$5.000$. Susunlah model pertidaksamaannya, lalu periksa apakah pembelian $3$ buku dan $7$ pulpen serta $4$ buku dan $5$ pulpen memungkinkan.",
          "solution": "Langkah 1: Dalam ribu rupiah, total belanjanya $20x + 5y$.\n\nLangkah 2: \"Paling banyak Rp$100.000$\" berarti totalnya tidak boleh melebihi $100$, dan boleh tepat $100$.\n$20x + 5y \\le 100$\n\nLangkah 3: Sederhanakan dengan membagi $5$.\n$4x + y \\le 20$\n\nLangkah 4: Banyak barang tidak mungkin negatif, jadi ditambahkan $x \\ge 0$ dan $y \\ge 0$.\n\nLangkah 5: Periksa $3$ buku dan $7$ pulpen.\n$4(3) + 7 = 19 \\le 20$ — memungkinkan, dan masih tersisa Rp$5.000$\n\nLangkah 6: Periksa $4$ buku dan $5$ pulpen.\n$4(4) + 5 = 21 \\le 20$ — salah, uangnya kurang Rp$5.000$\n\nKesimpulan: Modelnya $4x + y \\le 20$ dengan $x \\ge 0$ dan $y \\ge 0$. Pembelian $3$ buku dan $7$ pulpen memungkinkan, sedangkan $4$ buku dan $5$ pulpen tidak."
        }
      ],
      "btc": "Kelompok VNPS: Setiap kelompok menggambar empat daerah di papan — $2x + y \\le 6$, $2x + y < 6$, $2x + y \\ge 6$, dan $y > 2x$ — lengkap dengan titik uji yang dipakai. Lalu, kelompok lain menunjuk satu titik sembarang di papan dan kelompok penggambar harus menyatakan, tanpa menghitung, di daerah mana saja titik itu berada; kemudian buktikan dengan substitusi. Terakhir, jelaskan mengapa titik $O$ tidak dapat dipakai untuk $y > 2x$.",
      "summary_data": {
        "summary": [
          "Pertidaksamaan linear dua variabel berbentuk $ax + by \\le c$ (atau $<$, $\\ge$, $>$).",
          "Penyelesaiannya bukan satu titik, melainkan satu DAERAH pada bidang koordinat.",
          "Garis batas diperoleh dengan mengganti tanda ketidaksamaan menjadi $=$.",
          "Tanda $\\le$ atau $\\ge$ digambar garis penuh; tanda $<$ atau $>$ digambar garis putus-putus.",
          "Uji titik: bila titik uji memenuhi, daerahnya adalah sisi yang memuat titik itu; bila tidak, sisi seberangnya.",
          "Titik $O(0, 0)$ adalah titik uji termudah, KECUALI bila garis batasnya melalui $O$.",
          "Bila garis melalui $O$, pakailah titik uji lain seperti $(1, 0)$ atau $(0, 1)$.",
          "Pada bentuk $y \\ge mx + n$ daerahnya di atas garis; pada $y \\le mx + n$ di bawah garis.",
          "Garis yang memotong sumbu di $(p, 0)$ dan $(0, q)$ mempunyai persamaan $qx + py = pq$.",
          "\"Paling banyak\" dan \"tidak lebih dari\" berarti $\\le$; \"paling sedikit\" dan \"tidak kurang dari\" berarti $\\ge$."
        ],
        "islamic": "Setiap kemampuan mempunyai batasnya, dan Allah tidak menuntut melampaui batas itu. \"Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya.\" (QS. Al-Baqarah: 286)"
      },
      "collab_cases": [
        "Gambarlah daerah penyelesaian $3x + 4y \\le 24$ lengkap dengan titik potong dan titik ujinya.",
        "Gambarlah daerah penyelesaian $x - y > 2$. Apakah titik $(3, 1)$ termasuk? Jelaskan.",
        "Tentukan daerah penyelesaian $2x - y \\ge 0$. Titik uji apa yang kalian pakai, dan mengapa?",
        "Sebuah garis batas melalui $(6, 0)$ dan $(0, 3)$, digambar putus-putus, dan daerah yang diarsir TIDAK memuat $O$. Tuliskan pertidaksamaannya.",
        "Periksalah apakah titik $(2, 3)$, $(4, 1)$, dan $(-1, 5)$ memenuhi $2x + y \\le 7$."
      ]
    },
    {
      "id": "P32",
      "bab": "Bab 5: Sistem Persamaan dan Pertidaksamaan Linear",
      "title": "Sistem Pertidaksamaan Linear Dua Variabel dan Penerapannya",
      "obj": [
        "Menentukan daerah penyelesaian sistem pertidaksamaan linear dua variabel sebagai IRISAN daerah penyelesaian setiap pertidaksamaannya.",
        "Menentukan titik-titik pojok daerah penyelesaian, termasuk titik potong dua garis batas yang dihitung dengan eliminasi.",
        "Memodelkan masalah nyata yang memuat beberapa batasan sekaligus menjadi sistem pertidaksamaan, lengkap dengan kendala $x \\ge 0$ dan $y \\ge 0$."
      ],
      "hook": "Seorang pengrajin membuat kursi dan meja. Kayunya terbatas, jam kerjanya juga terbatas. Setiap batasan sendiri-sendiri mengizinkan banyak kemungkinan, tetapi rencana produksi yang SAH harus memenuhi SEMUA batasan sekaligus: cukup kayunya DAN cukup waktunya DAN banyak barangnya tidak negatif. Pada gambar, setiap batasan mengarsir satu daerah, dan daerah yang tertutup arsiran dari semua batasan itulah pilihan yang benar-benar mungkin. Daerah itu menjadi bekal utama Program Linear di kelas XI.",
      "toolkit": [
        {
          "name": "Daerah Penyelesaian Sistem",
          "math": "$$\\text{DP sistem} = \\text{irisan DP semua pertidaksamaan}$$"
        },
        {
          "name": "Kendala Nonnegatif",
          "math": "$$x \\ge 0,\\ y \\ge 0 \\Rightarrow \\text{kuadran I beserta sumbunya}$$"
        },
        {
          "name": "Titik Pojok",
          "math": "$$\\text{titik potong dua garis batas yang memenuhi SEMUA pertidaksamaan}$$"
        },
        {
          "name": "Titik Potong Dua Garis",
          "math": "$$\\begin{cases} a_1x + b_1y = c_1 \\\\ a_2x + b_2y = c_2 \\end{cases} \\Rightarrow \\text{eliminasi}$$"
        },
        {
          "name": "Membaca Kendala",
          "math": "$$\\text{paling banyak} \\Rightarrow \\le;\\qquad \\text{paling sedikit} \\Rightarrow \\ge$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan daerah penyelesaian dan titik-titik pojok sistem $x + y \\le 6$, $2x + y \\le 8$, $x \\ge 0$, $y \\ge 0$.",
          "solution": "Langkah 1: Garis batas pertama $x + y = 6$ melalui $(6, 0)$ dan $(0, 6)$. Uji $O$: $0 \\le 6$ benar, jadi daerahnya di sisi $O$.\n\nLangkah 2: Garis batas kedua $2x + y = 8$ melalui $(4, 0)$ dan $(0, 8)$. Uji $O$: $0 \\le 8$ benar, jadi daerahnya juga di sisi $O$.\n\nLangkah 3: Kendala $x \\ge 0$ dan $y \\ge 0$ membatasi daerah di kuadran I.\n\nLangkah 4: Daerah penyelesaiannya adalah bagian yang memenuhi KEEMPATnya: segi empat di kuadran I, di bawah kedua garis.\n\nLangkah 5: Cari titik potong kedua garis dengan eliminasi.\n$(2x + y) - (x + y) = 8 - 6 \\Rightarrow x = 2$, lalu $y = 4$\n\nLangkah 6: Perhatikan titik potong dengan sumbu. Di sumbu $x$, garis kedua memotong lebih dulu di $(4, 0)$; titik $(6, 0)$ melanggar $2x + y \\le 8$ karena $12 > 8$. Di sumbu $y$, garis pertama memotong lebih dulu di $(0, 6)$; titik $(0, 8)$ melanggar $x + y \\le 6$.\n\nLangkah 7: Jadi titik pojoknya $(0, 0)$, $(4, 0)$, $(2, 4)$, dan $(0, 6)$. Periksa $(2, 4)$: $6 \\le 6$ dan $8 \\le 8$ — memenuhi keduanya.\n\nKesimpulan: Daerah penyelesaiannya berbentuk segi empat dengan titik pojok $(0, 0)$, $(4, 0)$, $(2, 4)$, dan $(0, 6)$."
        },
        {
          "problem": "Periksalah apakah titik $(1, 4)$ dan $(3, 3)$ termasuk daerah penyelesaian sistem $x + y \\le 6$, $2x + y \\le 8$, $x \\ge 0$, $y \\ge 0$.",
          "solution": "Langkah 1: Sebuah titik termasuk daerah penyelesaian sistem hanya bila memenuhi SETIAP pertidaksamaan.\n\nLangkah 2: Uji $(1, 4)$ pada pertidaksamaan pertama.\n$1 + 4 = 5 \\le 6$ — benar\n\nLangkah 3: Uji $(1, 4)$ pada pertidaksamaan kedua.\n$2 + 4 = 6 \\le 8$ — benar. Koordinatnya juga tidak negatif.\n\nLangkah 4: Jadi $(1, 4)$ termasuk daerah penyelesaian.\n\nLangkah 5: Uji $(3, 3)$ pada pertidaksamaan pertama.\n$3 + 3 = 6 \\le 6$ — benar, titik ini tepat pada garis\n\nLangkah 6: Uji $(3, 3)$ pada pertidaksamaan kedua.\n$6 + 3 = 9 \\le 8$ — salah\n\nLangkah 7: Satu pertidaksamaan yang gagal sudah cukup untuk mengeluarkan $(3, 3)$ dari daerah penyelesaian sistem.\n\nKesimpulan: Titik $(1, 4)$ termasuk daerah penyelesaian, sedangkan $(3, 3)$ tidak."
        },
        {
          "problem": "Suatu daerah di kuadran I dibatasi dari atas oleh garis yang melalui $(4, 0)$ dan $(0, 4)$, serta garis yang melalui $(6, 0)$ dan $(0, 2)$. Daerahnya berada di bawah kedua garis. Tentukan sistem pertidaksamaan dan titik-titik pojoknya.",
          "solution": "Langkah 1: Garis melalui $(4, 0)$ dan $(0, 4)$: $4x + 4y = 16 \\Rightarrow x + y = 4$.\n\nLangkah 2: Garis melalui $(6, 0)$ dan $(0, 2)$: $2x + 6y = 12 \\Rightarrow x + 3y = 6$.\n\nLangkah 3: Daerah di bawah kedua garis memuat $O$, dan $O$ memberikan ruas kiri $0$ yang lebih kecil. Jadi tandanya $\\le$.\n$x + y \\le 4$, $x + 3y \\le 6$, $x \\ge 0$, $y \\ge 0$\n\nLangkah 4: Titik potong kedua garis.\n$(x + 3y) - (x + y) = 6 - 4 \\Rightarrow 2y = 2 \\Rightarrow y = 1$, lalu $x = 3$\n\nLangkah 5: Di sumbu $x$, pilih titik potong yang lebih dekat ke $O$: $(4, 0)$, sebab $(6, 0)$ melanggar $x + y \\le 4$.\n\nLangkah 6: Di sumbu $y$, pilih $(0, 2)$, sebab $(0, 4)$ melanggar $x + 3y \\le 6$ karena $12 > 6$.\n\nLangkah 7: Titik pojoknya $(0, 0)$, $(4, 0)$, $(3, 1)$, dan $(0, 2)$.\n\nKesimpulan: Sistemnya $x + y \\le 4$, $x + 3y \\le 6$, $x \\ge 0$, $y \\ge 0$, dengan titik pojok $(0, 0)$, $(4, 0)$, $(3, 1)$, dan $(0, 2)$."
        },
        {
          "problem": "Seorang pengrajin membuat $x$ kursi dan $y$ meja. Sebuah kursi memerlukan $2$ unit kayu dan $3$ jam kerja; sebuah meja memerlukan $4$ unit kayu dan $2$ jam kerja. Tersedia paling banyak $40$ unit kayu dan $36$ jam kerja. Susunlah modelnya dan tentukan titik potong kedua garis batas.",
          "solution": "Langkah 1: Susun tabel: kursi ($2$ kayu, $3$ jam), meja ($4$ kayu, $2$ jam), persediaan ($40$ kayu, $36$ jam).\n\nLangkah 2: Kendala kayu: $2x + 4y \\le 40$, disederhanakan menjadi $x + 2y \\le 20$.\n\nLangkah 3: Kendala waktu: $3x + 2y \\le 36$.\n\nLangkah 4: Banyak barang tidak negatif: $x \\ge 0$ dan $y \\ge 0$.\n\nLangkah 5: Titik potong $x + 2y = 20$ dan $3x + 2y = 36$.\n$(3x + 2y) - (x + 2y) = 36 - 20 \\Rightarrow 2x = 16 \\Rightarrow x = 8$, lalu $y = 6$\n\nLangkah 6: Periksa: $8 + 12 = 20$ kayu (setelah dibagi $2$) dan $24 + 12 = 36$ jam — tepat habis keduanya.\n\nLangkah 7: Artinya, membuat $8$ kursi dan $6$ meja memakai seluruh kayu DAN seluruh jam kerja. Titik pojok seperti ini sering menjadi jawaban soal optimasi di kelas XI.\n\nKesimpulan: Modelnya $x + 2y \\le 20$, $3x + 2y \\le 36$, $x \\ge 0$, $y \\ge 0$, dan titik potong kedua garis batasnya $(8, 6)$."
        },
        {
          "problem": "Tentukan titik-titik pojok daerah penyelesaian sistem $x + y \\ge 4$, $x \\le 5$, $y \\le 3$, $x \\ge 0$, $y \\ge 0$.",
          "solution": "Langkah 1: Pertidaksamaan $x + y \\ge 4$ bertanda $\\ge$. Uji $O$: $0 \\ge 4$ salah, jadi daerahnya di seberang $O$, yaitu MENJAUHI titik asal.\n\nLangkah 2: Pertidaksamaan $x \\le 5$ adalah daerah di kiri garis tegak $x = 5$, dan $y \\le 3$ adalah daerah di bawah garis mendatar $y = 3$.\n\nLangkah 3: Irisannya adalah segi empat yang \"terpotong\" pada pojok kiri bawahnya oleh garis $x + y = 4$.\n\nLangkah 4: Titik pojok pada garis $x + y = 4$: dengan $y = 3$ diperoleh $x = 1$, titik $(1, 3)$; dengan $y = 0$ diperoleh $x = 4$, titik $(4, 0)$.\n\nLangkah 5: Titik pojok lainnya: $(5, 0)$ dan $(5, 3)$.\n\nLangkah 6: Periksa setiap titik pada semua pertidaksamaan, misalnya $(1, 3)$: $4 \\ge 4$, $1 \\le 5$, $3 \\le 3$ — memenuhi.\n\nLangkah 7: Perhatikan bahwa $O(0, 0)$ BUKAN titik pojok di sini, karena ia melanggar $x + y \\ge 4$.\n\nKesimpulan: Titik pojoknya $(1, 3)$, $(4, 0)$, $(5, 0)$, dan $(5, 3)$."
        }
      ],
      "btc": "Kelompok VNPS: Setiap kelompok merancang soal produksi sendiri — misalnya kue kering dan kue basah dengan batasan tepung dan waktu oven — lalu menyusun sistem pertidaksamaannya. Di papan, gambar daerah penyelesaiannya dengan warna berbeda untuk setiap pertidaksamaan, tandai irisannya, dan hitung semua titik pojoknya. Kelompok lain lalu memilih satu titik pojok dan harus menjelaskan arti titik itu dalam cerita (misalnya: \"semua tepung terpakai habis\").",
      "summary_data": {
        "summary": [
          "Daerah penyelesaian sistem adalah IRISAN daerah penyelesaian setiap pertidaksamaan.",
          "Sebuah titik termasuk daerah penyelesaian sistem hanya bila memenuhi SEMUA pertidaksamaan.",
          "Kendala $x \\ge 0$ dan $y \\ge 0$ membatasi daerah di kuadran I; kendala ini hampir selalu ada pada soal cerita.",
          "Titik pojok adalah titik potong dua garis batas yang tetap memenuhi semua pertidaksamaan.",
          "Titik potong dua garis batas dihitung dengan eliminasi atau substitusi.",
          "Di setiap sumbu, titik potong yang dipakai adalah yang tidak melanggar pertidaksamaan lain.",
          "Titik pojok perlu diperiksa pada semua pertidaksamaan, bukan hanya pada dua garis yang membentuknya.",
          "Daerah bertanda $\\ge$ dengan ruas kanan positif menjauhi $O$, sehingga $O$ tidak menjadi titik pojok.",
          "\"Paling banyak\" berarti $\\le$ dan \"paling sedikit\" berarti $\\ge$.",
          "Titik pojok hasil perpotongan kendala sering berarti \"dua sumber daya habis terpakai bersamaan\"."
        ],
        "islamic": "Mengatur sumber daya dengan batas yang wajar adalah ciri hamba Allah yang baik. \"Dan orang-orang yang apabila membelanjakan (harta), mereka tidak berlebihan, dan tidak (pula) kikir, di antara keduanya secara wajar.\" (QS. Al-Furqan: 67)"
      },
      "collab_cases": [
        "Tentukan daerah penyelesaian dan titik-titik pojok sistem $x + y \\le 5$, $x + 2y \\le 8$, $x \\ge 0$, $y \\ge 0$.",
        "Periksalah apakah titik $(2, 2)$ dan $(4, 2)$ termasuk daerah penyelesaian sistem $2x + y \\le 8$, $x + y \\le 5$, $x \\ge 0$, $y \\ge 0$.",
        "Tentukan titik potong garis $3x + 2y = 12$ dan $x + 2y = 8$, lalu periksa apakah titik itu memenuhi $x \\ge 0$ dan $y \\ge 0$.",
        "Sebuah toko menjual tas jenis A (modal Rp$40.000$) dan jenis B (modal Rp$60.000$). Modal yang tersedia paling banyak Rp$1.200.000$ dan tempatnya hanya muat $25$ tas. Susunlah modelnya dan tentukan titik potong kedua garis batas.",
        "Gambarlah daerah penyelesaian $x + y \\ge 3$, $x \\le 4$, $y \\le 4$, $x \\ge 0$, $y \\ge 0$, lalu tentukan semua titik pojoknya."
      ]
    },
    {
      "id": "P33",
      "bab": "Bab 6: Fungsi Kuadrat",
      "title": "Bentuk Umum Fungsi Kuadrat dan Nilai Fungsinya",
      "obj": [
        "Mengenali fungsi kuadrat $f(x) = ax^2 + bx + c$ dengan $a \\neq 0$, termasuk yang ditulis dalam bentuk perkalian atau urutan acak, dan menentukan nilai $a$, $b$, $c$.",
        "Menghitung nilai fungsi $f(k)$ dengan menyubstitusikan $x = k$ secara cermat, terutama untuk $k$ negatif.",
        "Membaca arah buka grafik dari tanda $a$ dan titik potong sumbu $Y$ dari nilai $c$."
      ],
      "hook": "Sebuah bola basket dilempar ke ring. Tingginya naik, melambat, berhenti sesaat di puncak, lalu turun lagi — lintasannya melengkung, bukan lurus. Air mancur, lengkung jembatan, dan pantulan antena parabola mengikuti bentuk yang sama. Semuanya digambarkan oleh fungsi yang memuat $x^2$: fungsi kuadrat. Suku $x^2$ itulah yang membuat grafiknya berbelok, sesuatu yang tidak pernah dapat dilakukan oleh fungsi linear.",
      "toolkit": [
        {
          "name": "Bentuk Umum",
          "math": "$$f(x) = ax^2 + bx + c,\\quad a \\neq 0$$"
        },
        {
          "name": "Nilai Fungsi",
          "math": "$$f(k) = ak^2 + bk + c$$"
        },
        {
          "name": "Arah Buka",
          "math": "$$a > 0 \\Rightarrow \\text{terbuka ke atas};\\qquad a < 0 \\Rightarrow \\text{terbuka ke bawah}$$"
        },
        {
          "name": "Potong Sumbu Y",
          "math": "$$x = 0 \\Rightarrow f(0) = c \\Rightarrow (0, c)$$"
        },
        {
          "name": "Bentuk Lain",
          "math": "$$a(x - p)(x - q) \\quad \\text{dan} \\quad a(x - h)^2 + k$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan nilai $a$, $b$, dan $c$ dari (i) $f(x) = 5 - x^2 + 2x$ dan (ii) $g(x) = 2x(x - 3)$.",
          "solution": "Langkah 1: Nilai $a$, $b$, $c$ baru dapat dibaca setelah fungsi ditulis urut: suku $x^2$, lalu suku $x$, lalu konstanta.\n\nLangkah 2: Susun ulang (i).\n$f(x) = -x^2 + 2x + 5$\n\nLangkah 3: Baca koefisiennya, termasuk tandanya.\n$a = -1$, $b = 2$, $c = 5$\n\nLangkah 4: Pada (i), $-x^2$ berarti koefisiennya $-1$. Menulis $a = 1$ adalah kekeliruan yang sering terjadi.\n\nLangkah 5: Jabarkan (ii) lebih dahulu.\n$g(x) = 2x \\cdot x - 2x \\cdot 3 = 2x^2 - 6x$\n\nLangkah 6: Tidak ada suku konstanta, jadi $c = 0$.\n$a = 2$, $b = -6$, $c = 0$\n\nLangkah 7: Fungsi (ii) tetap fungsi kuadrat walaupun $c = 0$. Syaratnya hanya $a \\neq 0$.\n\nKesimpulan: (i) $a = -1$, $b = 2$, $c = 5$; (ii) $a = 2$, $b = -6$, $c = 0$."
        },
        {
          "problem": "Diketahui $f(x) = x^2 - 4x + 3$. Hitunglah $f(-1)$, $f(0)$, $f(2)$, dan $f(5)$.",
          "solution": "Langkah 1: Ganti setiap $x$ dengan bilangan yang diminta, dan beri kurung pada bilangan negatif.\n\nLangkah 2: Hitung $f(-1)$.\n$(-1)^2 - 4(-1) + 3 = 1 + 4 + 3 = 8$\n\nLangkah 3: Hitung $f(0)$.\n$0 - 0 + 3 = 3$\n\nLangkah 4: Hitung $f(2)$.\n$4 - 8 + 3 = -1$\n\nLangkah 5: Hitung $f(5)$.\n$25 - 20 + 3 = 8$\n\nLangkah 6: Perhatikan bahwa $f(-1) = f(5) = 8$. Kedua $x$ itu sama jauhnya dari $x = 2$, dan $f(2) = -1$ adalah nilai terkecil yang didapat. Inilah petunjuk awal tentang SUMBU SIMETRI yang dipelajari pada pertemuan berikutnya.\n\nLangkah 7: Kekeliruan yang sering terjadi pada $f(-1)$ adalah menulis $-1^2 = -1$. Dengan kurung, $(-1)^2 = 1$.\n\nKesimpulan: $f(-1) = 8$, $f(0) = 3$, $f(2) = -1$, dan $f(5) = 8$."
        },
        {
          "problem": "Manakah yang merupakan fungsi kuadrat: $f(x) = (x + 2)^2 - x^2$ atau $g(x) = (2x - 1)(x + 3)$?",
          "solution": "Langkah 1: Jangan menilai dari bentuk luarnya. Jabarkan lebih dahulu.\n\nLangkah 2: Jabarkan $f(x)$.\n$(x + 2)^2 = x^2 + 4x + 4$, sehingga $f(x) = x^2 + 4x + 4 - x^2 = 4x + 4$\n\nLangkah 3: Suku $x^2$ saling menghapus. Yang tersisa berderajat satu, jadi $f$ adalah fungsi LINEAR.\n\nLangkah 4: Jabarkan $g(x)$.\n$2x \\cdot x + 2x \\cdot 3 - 1 \\cdot x - 1 \\cdot 3 = 2x^2 + 6x - x - 3 = 2x^2 + 5x - 3$\n\nLangkah 5: Koefisien $x^2$ adalah $2 \\neq 0$, jadi $g$ adalah fungsi kuadrat.\n\nLangkah 6: Periksa dengan satu nilai, misalnya $x = 1$: $f(1) = 9 - 1 = 8 = 4 + 4$ dan $g(1) = 1 \\times 4 = 4 = 2 + 5 - 3$ — cocok.\n\nKesimpulan: Hanya $g(x) = (2x - 1)(x + 3) = 2x^2 + 5x - 3$ yang merupakan fungsi kuadrat; $f(x)$ ternyata fungsi linear $4x + 4$."
        },
        {
          "problem": "Diketahui $f(x) = x^2 + kx - 6$ dan $f(2) = 4$. Tentukan nilai $k$.",
          "solution": "Langkah 1: Keterangan $f(2) = 4$ berarti: bila $x = 2$, hasilnya $4$.\n\nLangkah 2: Substitusikan $x = 2$.\n$2^2 + k(2) - 6 = 4$\n\nLangkah 3: Sederhanakan.\n$4 + 2k - 6 = 4 \\Rightarrow 2k - 2 = 4$\n\nLangkah 4: Selesaikan.\n$2k = 6 \\Rightarrow k = 3$\n\nLangkah 5: Periksa: $f(x) = x^2 + 3x - 6$, dan $f(2) = 4 + 6 - 6 = 4$ — cocok.\n\nLangkah 6: Soal seperti ini mengubah fungsi kuadrat menjadi persamaan linear dalam $k$, karena $x$ sudah diganti bilangan.\n\nKesimpulan: Nilai $k = 3$."
        },
        {
          "problem": "Keliling sebuah persegi panjang $20$ cm dan panjang salah satu sisinya $x$ cm. Nyatakan luasnya sebagai fungsi $L(x)$, lalu hitung $L(3)$, $L(5)$, dan $L(7)$.",
          "solution": "Langkah 1: Keliling $20$ berarti panjang ditambah lebar sama dengan $10$. Jadi sisi lainnya $10 - x$.\n\nLangkah 2: Tulis luasnya.\n$L(x) = x(10 - x) = -x^2 + 10x$\n\nLangkah 3: Ini fungsi kuadrat dengan $a = -1 < 0$, jadi grafiknya terbuka ke BAWAH — ada nilai terbesar.\n\nLangkah 4: Hitung nilai-nilainya.\n$L(3) = 3 \\times 7 = 21$, $L(5) = 5 \\times 5 = 25$, $L(7) = 7 \\times 3 = 21$\n\nLangkah 5: Perhatikan bahwa $L(3) = L(7)$: persegi panjang $3 \\times 7$ dan $7 \\times 3$ memang sama.\n\nLangkah 6: Dari ketiga nilai itu, $L(5) = 25$ terbesar, yaitu ketika bangunnya persegi. Pertemuan-pertemuan berikutnya akan membuktikan bahwa itu memang yang terbesar.\n\nKesimpulan: $L(x) = -x^2 + 10x$, dengan $L(3) = 21$, $L(5) = 25$, dan $L(7) = 21$ cm$^2$."
        }
      ],
      "btc": "Kelompok VNPS: Setiap kelompok menerima satu fungsi — $f(x) = x^2 - 2x - 3$, $f(x) = -x^2 + 4x$, atau $f(x) = 2x^2 - 8$. Buatlah tabel nilai untuk $x = -3$ sampai $x = 5$, lalu plot titik-titiknya pada kertas berpetak di papan dan hubungkan dengan lengkung yang halus. Tandai titik potong sumbu $Y$ dan pasangan titik yang nilainya sama. Terakhir, bandingkan ketiga grafik: apa hubungan tanda $a$ dengan arah bukanya?",
      "summary_data": {
        "summary": [
          "Fungsi kuadrat berbentuk $f(x) = ax^2 + bx + c$ dengan syarat $a \\neq 0$.",
          "Susun fungsi dengan urutan $x^2$, $x$, konstanta sebelum membaca $a$, $b$, $c$.",
          "Tanda koefisien ikut dibaca: pada $-x^2$, nilai $a = -1$.",
          "Nilai $b$ atau $c$ boleh nol; yang tidak boleh nol hanya $a$.",
          "Bentuk perkalian atau kuadrat harus dijabarkan dulu — suku $x^2$ bisa saja saling menghapus.",
          "Nilai $f(k)$ diperoleh dengan mengganti setiap $x$ dengan $k$; bilangan negatif selalu diberi kurung.",
          "$(-1)^2 = 1$, sedangkan $-1^2 = -1$.",
          "Grafik memotong sumbu $Y$ di $(0, c)$.",
          "Grafik terbuka ke atas bila $a > 0$ dan ke bawah bila $a < 0$.",
          "Dua nilai $x$ yang menghasilkan $f$ sama merupakan petunjuk letak sumbu simetri."
        ],
        "islamic": "Mengerjakan sesuatu dengan cermat dan sebaik-baiknya adalah bagian dari ibadah. \"Sesungguhnya Allah mewajibkan berbuat ihsan (kebaikan) atas segala sesuatu.\" (HR. Muslim)"
      },
      "collab_cases": [
        "Tentukan nilai $a$, $b$, $c$ dari $f(x) = 7 - 3x^2$ dan $g(x) = (x - 4)(x + 1)$.",
        "Diketahui $f(x) = 2x^2 - 3x - 5$. Hitunglah $f(-2)$, $f(0)$, dan $f(3)$.",
        "Periksalah apakah $h(x) = (x - 1)^2 - (x + 1)^2$ merupakan fungsi kuadrat.",
        "Diketahui $f(x) = ax^2 - 2x + 1$ dan $f(-1) = 6$. Tentukan nilai $a$.",
        "Sebuah kawat sepanjang $24$ cm dibentuk menjadi persegi panjang dengan panjang $x$ cm. Nyatakan luasnya sebagai fungsi $x$ dan tentukan arah buka grafiknya."
      ]
    },
    {
      "id": "P34",
      "bab": "Bab 6: Fungsi Kuadrat",
      "title": "Sumbu Simetri dan Titik Puncak",
      "obj": [
        "Menentukan persamaan sumbu simetri $x = -\\frac{b}{2a}$ dan menjelaskan mengapa grafik fungsi kuadrat simetris terhadapnya.",
        "Menentukan titik puncak beserta nilai maksimum atau minimum, baik dengan substitusi $x_p$ maupun dengan rumus $-\\frac{D}{4a}$.",
        "Membaca titik puncak langsung dari bentuk $a(x - h)^2 + k$ dan memakai kesimetrian untuk menemukan sumbu simetri dari dua titik bernilai sama."
      ],
      "hook": "Pada pertemuan lalu, fungsi $f(x) = x^2 - 4x + 3$ memberikan $f(-1) = f(5) = 8$ dan $f(0) = f(4) = 3$. Pasangan-pasangan itu selalu mengapit $x = 2$ dengan jarak yang sama. Grafik fungsi kuadrat ternyata seperti kupu-kupu: bila dilipat pada satu garis tegak, kedua sayapnya berimpit tepat. Garis lipat itu adalah SUMBU SIMETRI, dan tepat di atasnya terletak titik tertinggi atau terendah grafik — TITIK PUNCAK.",
      "toolkit": [
        {
          "name": "Sumbu Simetri",
          "math": "$$x_p = -\\frac{b}{2a}$$"
        },
        {
          "name": "Nilai Puncak",
          "math": "$$y_p = f(x_p) = -\\frac{D}{4a},\\quad D = b^2 - 4ac$$"
        },
        {
          "name": "Titik Puncak",
          "math": "$$\\left(-\\frac{b}{2a},\\ -\\frac{D}{4a}\\right)$$"
        },
        {
          "name": "Bentuk Puncak",
          "math": "$$f(x) = a(x - h)^2 + k \\Rightarrow \\text{puncak } (h, k)$$"
        },
        {
          "name": "Maksimum atau Minimum",
          "math": "$$a > 0 \\Rightarrow y_p \\text{ minimum};\\qquad a < 0 \\Rightarrow y_p \\text{ maksimum}$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan sumbu simetri, titik puncak, dan jenis nilai ekstrem fungsi $f(x) = x^2 - 4x + 3$.",
          "solution": "Langkah 1: Baca koefisiennya.\n$a = 1$, $b = -4$, $c = 3$\n\nLangkah 2: Hitung sumbu simetri. Perhatikan tanda minus di depan pecahan.\n$x_p = -\\frac{-4}{2(1)} = \\frac{4}{2} = 2$\n\nLangkah 3: Hitung nilai puncak dengan menyubstitusikan $x = 2$.\n$f(2) = 4 - 8 + 3 = -1$\n\nLangkah 4: Titik puncaknya $(2, -1)$.\n\nLangkah 5: Karena $a = 1 > 0$, grafik terbuka ke atas dan puncaknya titik TERENDAH. Jadi $-1$ adalah nilai minimum.\n\nLangkah 6: Periksa kesimetrian: $f(0) = 3$ dan $f(4) = 3$ — kedua $x$ berjarak $2$ dari sumbu $x = 2$, dan nilainya sama.\n\nKesimpulan: Sumbu simetri $x = 2$, titik puncak $(2, -1)$, dan nilai minimumnya $-1$."
        },
        {
          "problem": "Tentukan titik puncak dan nilai ekstrem $f(x) = -2x^2 + 8x - 5$.",
          "solution": "Langkah 1: Baca koefisiennya.\n$a = -2$, $b = 8$, $c = -5$\n\nLangkah 2: Hitung sumbu simetri.\n$x_p = -\\frac{8}{2(-2)} = -\\frac{8}{-4} = 2$\n\nLangkah 3: Hitung nilai puncak.\n$f(2) = -2(4) + 16 - 5 = -8 + 16 - 5 = 3$\n\nLangkah 4: Titik puncaknya $(2, 3)$.\n\nLangkah 5: Karena $a = -2 < 0$, grafik terbuka ke bawah dan puncaknya titik TERTINGGI. Jadi $3$ adalah nilai maksimum.\n\nLangkah 6: Periksa dengan titik sekitar: $f(1) = -2 + 8 - 5 = 1$ dan $f(3) = -18 + 24 - 5 = 1$ — keduanya lebih kecil daripada $3$ dan sama besar, sesuai kesimetrian.\n\nLangkah 7: Kekeliruan yang sering terjadi adalah $x_p = -\\frac{8}{4} = -2$, yaitu lupa bahwa $2a = -4$ bernilai negatif.\n\nKesimpulan: Titik puncak $(2, 3)$ dengan nilai maksimum $3$."
        },
        {
          "problem": "Tentukan titik puncak $f(x) = x^2 + 6x + 5$ memakai rumus diskriminan, lalu periksa dengan substitusi.",
          "solution": "Langkah 1: Baca koefisiennya.\n$a = 1$, $b = 6$, $c = 5$\n\nLangkah 2: Hitung sumbu simetri.\n$x_p = -\\frac{6}{2} = -3$\n\nLangkah 3: Hitung diskriminan.\n$D = b^2 - 4ac = 36 - 20 = 16$\n\nLangkah 4: Hitung nilai puncak dengan rumus.\n$y_p = -\\frac{D}{4a} = -\\frac{16}{4} = -4$\n\nLangkah 5: Periksa dengan substitusi.\n$f(-3) = 9 - 18 + 5 = -4$ — cocok\n\nLangkah 6: Kedua cara selalu memberikan hasil yang sama. Rumus $-\\frac{D}{4a}$ berguna bila $x_p$ berupa pecahan yang merepotkan untuk disubstitusikan.\n\nKesimpulan: Titik puncaknya $(-3, -4)$, dan $-4$ adalah nilai minimum."
        },
        {
          "problem": "Tentukan titik puncak $f(x) = 2(x - 1)^2 + 3$, lalu tunjukkan bahwa hasilnya sama dengan memakai rumus $-\\frac{b}{2a}$.",
          "solution": "Langkah 1: Bentuk $a(x - h)^2 + k$ disebut bentuk puncak. Di sini $a = 2$, $h = 1$, $k = 3$.\n\nLangkah 2: Suku $2(x - 1)^2$ tidak pernah negatif, dan bernilai nol tepat saat $x = 1$. Jadi nilai terkecil $f$ adalah $0 + 3 = 3$, tercapai di $x = 1$.\n\nLangkah 3: Titik puncaknya $(1, 3)$, dengan nilai minimum $3$.\n\nLangkah 4: Sekarang jabarkan.\n$2(x^2 - 2x + 1) + 3 = 2x^2 - 4x + 5$\n\nLangkah 5: Pakai rumus.\n$x_p = -\\frac{-4}{4} = 1$ dan $f(1) = 2 - 4 + 5 = 3$ — cocok\n\nLangkah 6: Perhatikan tanda pada bentuk puncak: $(x - 1)$ berarti $h = +1$. Bila tertulis $(x + 1)$, maka $h = -1$.\n\nKesimpulan: Titik puncaknya $(1, 3)$, dan kedua cara menghasilkan titik yang sama."
        },
        {
          "problem": "Grafik $f(x) = x^2 + bx + c$ melalui titik $(1, 5)$ dan $(7, 5)$. Tentukan sumbu simetri, nilai $b$ dan $c$, lalu titik puncaknya.",
          "solution": "Langkah 1: Kedua titik mempunyai ordinat sama, yaitu $5$. Karena grafiknya simetris, sumbu simetri tepat di tengah-tengah absisnya.\n$x_p = \\frac{1 + 7}{2} = 4$\n\nLangkah 2: Pakai rumus sumbu simetri dengan $a = 1$.\n$-\\frac{b}{2} = 4 \\Rightarrow b = -8$\n\nLangkah 3: Hitung $c$ dari titik $(1, 5)$.\n$1 - 8 + c = 5 \\Rightarrow c = 12$\n\nLangkah 4: Periksa dengan titik $(7, 5)$: $49 - 56 + 12 = 5$ — cocok.\n\nLangkah 5: Hitung nilai puncak.\n$f(4) = 16 - 32 + 12 = -4$\n\nLangkah 6: Jadi $f(x) = x^2 - 8x + 12$ dengan puncak $(4, -4)$.\n\nKesimpulan: Sumbu simetri $x = 4$, $b = -8$, $c = 12$, dan titik puncaknya $(4, -4)$."
        }
      ],
      "btc": "Kelompok VNPS: Setiap kelompok menerima satu fungsi dalam bentuk umum, misalnya $f(x) = x^2 - 6x + 5$, $f(x) = -x^2 + 2x + 3$, atau $f(x) = 2x^2 + 8x + 1$. Tentukan titik puncaknya dengan DUA cara — substitusi $x_p$ dan rumus $-\\frac{D}{4a}$ — lalu tuliskan ulang fungsinya dalam bentuk puncak $a(x - h)^2 + k$ dan jabarkan kembali untuk memeriksa. Terakhir, pilih dua titik yang simetris terhadap sumbu dan tunjukkan bahwa nilai fungsinya sama.",
      "summary_data": {
        "summary": [
          "Grafik fungsi kuadrat simetris terhadap garis tegak $x = -\\frac{b}{2a}$.",
          "Titik puncak terletak pada sumbu simetri.",
          "Nilai puncak dapat dihitung dengan $f(x_p)$ atau dengan $-\\frac{D}{4a}$, dengan $D = b^2 - 4ac$.",
          "Bila $a > 0$, nilai puncak adalah nilai MINIMUM; bila $a < 0$, nilai MAKSIMUM.",
          "Hati-hati dengan tanda: $2a$ ikut bertanda negatif bila $a$ negatif.",
          "Pada bentuk $a(x - h)^2 + k$, titik puncaknya $(h, k)$ tanpa perlu dihitung.",
          "$(x - 1)$ berarti $h = 1$, sedangkan $(x + 1)$ berarti $h = -1$.",
          "Dua titik pada grafik yang ordinatnya sama selalu mengapit sumbu simetri di tengah-tengahnya.",
          "Titik $(x_p + d, y)$ dan $(x_p - d, y)$ adalah pasangan cermin terhadap sumbu simetri.",
          "Selalu periksa nilai puncak dengan membandingkannya dengan nilai fungsi di dekatnya."
        ],
        "islamic": "Keseimbangan adalah ciri ciptaan Allah. \"Kamu sekali-kali tidak melihat pada ciptaan Tuhan Yang Maha Pemurah sesuatu yang tidak seimbang.\" (QS. Al-Mulk: 3)"
      },
      "collab_cases": [
        "Tentukan sumbu simetri dan titik puncak $f(x) = x^2 - 6x + 5$.",
        "Tentukan nilai maksimum $f(x) = -x^2 + 2x + 8$ dan untuk $x$ berapa nilai itu tercapai.",
        "Tentukan titik puncak $f(x) = 2x^2 + 8x + 1$ dengan rumus $-\\frac{D}{4a}$.",
        "Tuliskan titik puncak $f(x) = -3(x + 2)^2 + 5$, lalu tentukan apakah itu maksimum atau minimum.",
        "Grafik $f(x) = x^2 + bx + c$ melalui $(-2, 7)$ dan $(4, 7)$. Tentukan sumbu simetri dan nilai $b$."
      ]
    },
    {
      "id": "P35",
      "bab": "Bab 6: Fungsi Kuadrat",
      "title": "Titik Potong Sumbu Koordinat dan Diskriminan",
      "obj": [
        "Menentukan titik potong grafik fungsi kuadrat dengan sumbu $Y$ dan sumbu $X$, memakai pemfaktoran maupun rumus kuadratik.",
        "Menghitung diskriminan $D = b^2 - 4ac$ dan memakainya untuk menentukan banyaknya titik potong grafik dengan sumbu $X$ tanpa menggambar.",
        "Menentukan nilai parameter agar grafik memotong, menyinggung, atau tidak memotong sumbu $X$."
      ],
      "hook": "Sebuah bola ditendang dari tanah. Kapan ia menyentuh tanah lagi? Pertanyaan itu sama dengan mencari saat tingginya NOL, yaitu titik potong grafik dengan sumbu $X$. Namun tidak setiap parabola memotong sumbu $X$: ada yang memotongnya di dua titik, ada yang hanya menyentuhnya di satu titik, dan ada yang berbelok sebelum mencapainya sehingga melayang seluruhnya di atas (atau di bawah) sumbu. Ternyata ada satu bilangan yang dapat memberitahu hal itu sebelum kita menggambar apa pun: DISKRIMINAN.",
      "toolkit": [
        {
          "name": "Potong Sumbu Y",
          "math": "$$x = 0 \\Rightarrow (0, c)$$"
        },
        {
          "name": "Potong Sumbu X",
          "math": "$$f(x) = 0 \\Rightarrow ax^2 + bx + c = 0$$"
        },
        {
          "name": "Rumus Kuadratik",
          "math": "$$x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a},\\quad D = b^2 - 4ac$$"
        },
        {
          "name": "Arti Diskriminan",
          "math": "$$D > 0:\\ \\text{dua titik};\\quad D = 0:\\ \\text{menyinggung};\\quad D < 0:\\ \\text{tidak memotong}$$"
        },
        {
          "name": "Pemfaktoran",
          "math": "$$x^2 + bx + c = (x + p)(x + q),\\ \\ p + q = b,\\ \\ pq = c$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan titik potong grafik $f(x) = x^2 - 5x + 6$ dengan kedua sumbu koordinat.",
          "solution": "Langkah 1: Titik potong sumbu $Y$: ambil $x = 0$.\n$f(0) = 6$, jadi titiknya $(0, 6)$\n\nLangkah 2: Titik potong sumbu $X$: ambil $f(x) = 0$.\n$x^2 - 5x + 6 = 0$\n\nLangkah 3: Faktorkan. Cari dua bilangan yang hasil kalinya $6$ dan jumlahnya $-5$, yaitu $-2$ dan $-3$.\n$(x - 2)(x - 3) = 0$\n\nLangkah 4: Hasil kali nol berarti salah satu faktornya nol.\n$x = 2$ atau $x = 3$\n\nLangkah 5: Jadi titik potong sumbu $X$ adalah $(2, 0)$ dan $(3, 0)$.\n\nLangkah 6: Periksa: $f(2) = 4 - 10 + 6 = 0$ dan $f(3) = 9 - 15 + 6 = 0$ — cocok.\n\nLangkah 7: Perhatikan urutan koordinat: titik pada sumbu $X$ ditulis $(x, 0)$, sedangkan pada sumbu $Y$ ditulis $(0, y)$.\n\nKesimpulan: Grafik memotong sumbu $Y$ di $(0, 6)$ dan sumbu $X$ di $(2, 0)$ dan $(3, 0)$."
        },
        {
          "problem": "Tentukan titik potong grafik $f(x) = 2x^2 + x - 3$ dengan sumbu $X$.",
          "solution": "Langkah 1: Selesaikan $2x^2 + x - 3 = 0$. Karena $a \\neq 1$, faktorkan dengan cara $a \\cdot c$: cari dua bilangan yang hasil kalinya $2 \\times (-3) = -6$ dan jumlahnya $1$, yaitu $3$ dan $-2$.\n\nLangkah 2: Pecah suku tengahnya.\n$2x^2 + 3x - 2x - 3 = 0$\n\nLangkah 3: Kelompokkan.\n$x(2x + 3) - 1(2x + 3) = 0 \\Rightarrow (2x + 3)(x - 1) = 0$\n\nLangkah 4: Selesaikan.\n$x = -\\frac{3}{2}$ atau $x = 1$\n\nLangkah 5: Periksa $x = 1$: $2 + 1 - 3 = 0$. Periksa $x = -\\frac{3}{2}$: $2 \\cdot \\frac{9}{4} - \\frac{3}{2} - 3 = \\frac{9}{2} - \\frac{3}{2} - 3 = 0$ — cocok.\n\nLangkah 6: Jadi titik potongnya $\\left(-\\frac{3}{2}, 0\\right)$ dan $(1, 0)$.\n\nKesimpulan: Grafik memotong sumbu $X$ di $\\left(-\\frac{3}{2}, 0\\right)$ dan $(1, 0)$."
        },
        {
          "problem": "Tentukan titik potong grafik $f(x) = x^2 - 4x + 1$ dengan sumbu $X$.",
          "solution": "Langkah 1: Coba faktorkan: dua bilangan dengan hasil kali $1$ dan jumlah $-4$ tidak ada di antara bilangan bulat. Pakai rumus kuadratik.\n\nLangkah 2: Hitung diskriminan.\n$D = (-4)^2 - 4(1)(1) = 16 - 4 = 12$\n\nLangkah 3: Masukkan ke rumus.\n$x = \\frac{4 \\pm \\sqrt{12}}{2}$\n\nLangkah 4: Sederhanakan akarnya.\n$\\sqrt{12} = 2\\sqrt{3}$, jadi $x = \\frac{4 \\pm 2\\sqrt{3}}{2} = 2 \\pm \\sqrt{3}$\n\nLangkah 5: Titik potongnya $(2 - \\sqrt{3}, 0)$ dan $(2 + \\sqrt{3}, 0)$, kira-kira $(0{,}27; 0)$ dan $(3{,}73; 0)$.\n\nLangkah 6: Periksa kesimetrian: kedua akar mengapit $x = 2$ dengan jarak sama, dan $x_p = -\\frac{-4}{2} = 2$ — cocok.\n\nLangkah 7: Kekeliruan yang sering terjadi adalah membagi hanya $4$ dengan $2$ tetapi tidak membagi $2\\sqrt{3}$, sehingga ditulis $2 \\pm 2\\sqrt{3}$.\n\nKesimpulan: Grafik memotong sumbu $X$ di $(2 - \\sqrt{3}, 0)$ dan $(2 + \\sqrt{3}, 0)$."
        },
        {
          "problem": "Tanpa menggambar, tentukan kedudukan grafik $f(x) = x^2 - 6x + 9$, $g(x) = x^2 + 2x + 5$, dan $h(x) = x^2 - x - 2$ terhadap sumbu $X$.",
          "solution": "Langkah 1: Hitung diskriminan setiap fungsi.\n\nLangkah 2: $f$: $D = 36 - 36 = 0$. Grafiknya MENYINGGUNG sumbu $X$ di satu titik, yaitu di $x = -\\frac{-6}{2} = 3$. Memang $f(x) = (x - 3)^2$.\n\nLangkah 3: $g$: $D = 4 - 20 = -16 < 0$. Grafiknya TIDAK memotong sumbu $X$.\n\nLangkah 4: Karena $a = 1 > 0$ dan tidak memotong, grafik $g$ seluruhnya di ATAS sumbu $X$; nilainya selalu positif. Puncaknya $(-1, 4)$ memang di atas sumbu.\n\nLangkah 5: $h$: $D = 1 + 8 = 9 > 0$. Grafiknya memotong sumbu $X$ di DUA titik. Memang $h(x) = (x - 2)(x + 1)$.\n\nLangkah 6: Diskriminan menjawab pertanyaan \"berapa banyak titik potong\" tanpa harus mencari titiknya.\n\nKesimpulan: $f$ menyinggung sumbu $X$ ($D = 0$), $g$ tidak memotong sumbu $X$ ($D < 0$), dan $h$ memotong di dua titik ($D > 0$)."
        },
        {
          "problem": "Tentukan nilai $m$ agar grafik $f(x) = x^2 - 4x + m$ menyinggung sumbu $X$, lalu tentukan pula nilai $m$ agar grafik tidak memotong sumbu $X$.",
          "solution": "Langkah 1: Hitung diskriminan dalam $m$.\n$D = 16 - 4m$\n\nLangkah 2: Menyinggung berarti $D = 0$.\n$16 - 4m = 0 \\Rightarrow m = 4$\n\nLangkah 3: Periksa: $f(x) = x^2 - 4x + 4 = (x - 2)^2$, yang menyentuh sumbu $X$ tepat di $(2, 0)$ — cocok.\n\nLangkah 4: Tidak memotong berarti $D < 0$.\n$16 - 4m < 0 \\Rightarrow -4m < -16 \\Rightarrow m > 4$\n\nLangkah 5: Perhatikan: saat membagi dengan bilangan negatif $-4$, tanda ketidaksamaan BERBALIK.\n\nLangkah 6: Periksa dengan $m = 5$: $D = 16 - 20 = -4 < 0$ — memang tidak memotong.\n\nLangkah 7: Maknanya, menambah $m$ menggeser grafik ke atas. Pada $m = 4$ ia tepat menyentuh sumbu, dan di atas itu ia terangkat seluruhnya.\n\nKesimpulan: Grafik menyinggung sumbu $X$ bila $m = 4$, dan tidak memotong sumbu $X$ bila $m > 4$."
        }
      ],
      "btc": "Kelompok VNPS: Setiap kelompok menulis TIGA fungsi kuadrat karangan sendiri di papan — satu yang memotong sumbu $X$ di dua titik, satu yang menyinggung, dan satu yang tidak memotong — tanpa memberi tahu mana yang mana. Kelompok lain menentukan kedudukannya hanya dengan diskriminan, lalu kelompok pengarang membuktikannya dengan memfaktorkan atau menghitung titik puncak. Terakhir, ubahlah satu angka pada fungsi yang \"memotong\" sehingga menjadi \"menyinggung\".",
      "summary_data": {
        "summary": [
          "Grafik memotong sumbu $Y$ di $(0, c)$.",
          "Titik potong sumbu $X$ diperoleh dari $ax^2 + bx + c = 0$.",
          "Pemfaktoran $x^2 + bx + c$: cari dua bilangan yang hasil kalinya $c$ dan jumlahnya $b$.",
          "Bila $a \\neq 1$, cari dua bilangan yang hasil kalinya $a \\cdot c$ dan jumlahnya $b$, lalu pecah suku tengahnya.",
          "Rumus kuadratik $x = \\frac{-b \\pm \\sqrt{D}}{2a}$ berlaku untuk semua persamaan kuadrat.",
          "Diskriminan $D = b^2 - 4ac$ menentukan banyaknya titik potong dengan sumbu $X$.",
          "$D > 0$: dua titik potong; $D = 0$: menyinggung; $D < 0$: tidak memotong.",
          "Bila $D < 0$ dan $a > 0$, grafik seluruhnya di atas sumbu $X$; bila $D < 0$ dan $a < 0$, seluruhnya di bawah.",
          "Kedua titik potong sumbu $X$ selalu simetris terhadap sumbu simetri.",
          "Membagi ketidaksamaan dengan bilangan negatif membalik arah tandanya."
        ],
        "islamic": "Setiap ciptaan mempunyai ukuran dan ketentuannya. \"Sesungguhnya Kami menciptakan segala sesuatu menurut ukuran.\" (QS. Al-Qamar: 49)"
      },
      "collab_cases": [
        "Tentukan titik potong grafik $f(x) = x^2 + x - 12$ dengan kedua sumbu.",
        "Tentukan titik potong grafik $f(x) = 3x^2 - 5x - 2$ dengan sumbu $X$ dengan cara pemfaktoran.",
        "Tentukan titik potong grafik $f(x) = x^2 - 2x - 1$ dengan sumbu $X$ memakai rumus kuadratik.",
        "Tanpa menggambar, tentukan kedudukan grafik $f(x) = 2x^2 - 3x + 4$ terhadap sumbu $X$.",
        "Tentukan nilai $k$ agar grafik $f(x) = x^2 + kx + 9$ menyinggung sumbu $X$."
      ]
    },
    {
      "id": "P36",
      "bab": "Bab 6: Fungsi Kuadrat",
      "title": "Menggambar Grafik Fungsi Kuadrat",
      "obj": [
        "Menggambar sketsa grafik fungsi kuadrat secara runtut: arah buka, titik potong sumbu, sumbu simetri, titik puncak, dan titik bantu cermin.",
        "Menjelaskan pergeseran grafik $y = x^2$ menjadi $y = a(x - h)^2 + k$.",
        "Menyimpulkan tanda $a$, $b$, $c$, dan $D$ dari gambar grafik, serta sebaliknya."
      ],
      "hook": "Seorang arsitek tidak menggambar lengkung jembatan dengan menghitung seribu titik. Ia cukup menandai beberapa titik PENTING — kedua kaki lengkung, puncaknya, dan sepasang titik bantu — lalu menarik lengkung halus melaluinya. Dengan bekal pertemuan-pertemuan sebelumnya, kita sudah memiliki semua titik penting itu. Pertemuan ini merangkainya menjadi satu prosedur, sehingga sketsa grafik yang benar dapat dibuat dalam beberapa menit.",
      "toolkit": [
        {
          "name": "1. Arah Buka",
          "math": "$$a > 0 \\Rightarrow \\text{terbuka ke atas } (\\cup);\\qquad a < 0 \\Rightarrow \\text{terbuka ke bawah } (\\cap)$$"
        },
        {
          "name": "2. Titik Potong",
          "math": "$$(0, c) \\text{ dan } (x_1, 0), (x_2, 0) \\text{ bila } D \\ge 0$$"
        },
        {
          "name": "3. Puncak",
          "math": "$$\\left(-\\frac{b}{2a},\\ f\\!\\left(-\\frac{b}{2a}\\right)\\right)$$"
        },
        {
          "name": "4. Titik Cermin",
          "math": "$$(0, c) \\longleftrightarrow (2x_p, c)$$"
        },
        {
          "name": "Pergeseran",
          "math": "$$y = (x - h)^2 + k:\\ \\text{geser } h \\text{ ke kanan},\\ k \\text{ ke atas}$$"
        }
      ],
      "examples": [
        {
          "problem": "Buatlah sketsa grafik $f(x) = x^2 - 2x - 3$.",
          "solution": "Langkah 1: Arah buka: $a = 1 > 0$, jadi grafik terbuka ke ATAS.\n\nLangkah 2: Titik potong sumbu $Y$: $f(0) = -3$, titik $(0, -3)$.\n\nLangkah 3: Titik potong sumbu $X$: $x^2 - 2x - 3 = (x - 3)(x + 1) = 0$, jadi $(-1, 0)$ dan $(3, 0)$.\n\nLangkah 4: Sumbu simetri dan puncak: $x_p = -\\frac{-2}{2} = 1$ dan $f(1) = 1 - 2 - 3 = -4$. Titik puncak $(1, -4)$.\n\nLangkah 5: Titik cermin: $(0, -3)$ berjarak $1$ di kiri sumbu, jadi pasangannya $(2, -3)$. Periksa: $f(2) = 4 - 4 - 3 = -3$ — cocok.\n\nLangkah 6: Plot kelima titik itu — $(-1, 0)$, $(0, -3)$, $(1, -4)$, $(2, -3)$, $(3, 0)$ — lalu hubungkan dengan lengkung halus berbentuk U. Jangan menghubungkannya dengan ruas-ruas garis lurus.\n\nLangkah 7: Periksa: kedua titik potong sumbu $X$ berjarak sama dari $x = 1$, yaitu $2$ satuan — sesuai kesimetrian.\n\nKesimpulan: Grafiknya parabola terbuka ke atas dengan puncak $(1, -4)$, memotong sumbu $X$ di $(-1, 0)$ dan $(3, 0)$, serta memotong sumbu $Y$ di $(0, -3)$."
        },
        {
          "problem": "Buatlah sketsa grafik $f(x) = -x^2 + 4x$.",
          "solution": "Langkah 1: Arah buka: $a = -1 < 0$, jadi grafik terbuka ke BAWAH.\n\nLangkah 2: Titik potong sumbu $Y$: $f(0) = 0$, yaitu titik asal $O(0, 0)$.\n\nLangkah 3: Titik potong sumbu $X$: $-x^2 + 4x = x(4 - x) = 0$, jadi $(0, 0)$ dan $(4, 0)$.\n\nLangkah 4: Puncak: $x_p = -\\frac{4}{2(-1)} = 2$ dan $f(2) = -4 + 8 = 4$. Titik puncak $(2, 4)$.\n\nLangkah 5: Titik bantu: $f(1) = 3$ dan cerminnya $f(3) = 3$. Titik $(1, 3)$ dan $(3, 3)$.\n\nLangkah 6: Plot $(0, 0)$, $(1, 3)$, $(2, 4)$, $(3, 3)$, $(4, 0)$, lalu hubungkan dengan lengkung berbentuk $\\cap$.\n\nLangkah 7: Karena $c = 0$, grafik melalui titik asal. Titik potong sumbu $Y$ sekaligus menjadi salah satu titik potong sumbu $X$.\n\nKesimpulan: Grafiknya parabola terbuka ke bawah dengan puncak $(2, 4)$, melalui $(0, 0)$ dan $(4, 0)$."
        },
        {
          "problem": "Buatlah sketsa grafik $f(x) = x^2 + 2x + 3$.",
          "solution": "Langkah 1: Arah buka: $a = 1 > 0$, terbuka ke atas.\n\nLangkah 2: Titik potong sumbu $Y$: $(0, 3)$.\n\nLangkah 3: Periksa titik potong sumbu $X$ dengan diskriminan: $D = 4 - 12 = -8 < 0$. Grafik TIDAK memotong sumbu $X$.\n\nLangkah 4: Puncak: $x_p = -\\frac{2}{2} = -1$ dan $f(-1) = 1 - 2 + 3 = 2$. Titik puncak $(-1, 2)$, di atas sumbu $X$ — sesuai dengan $D < 0$.\n\nLangkah 5: Karena tidak ada titik potong sumbu $X$, titik bantu menjadi penting. Cermin $(0, 3)$ adalah $(-2, 3)$. Tambahkan $f(1) = 6$ dan cerminnya $(-3, 6)$.\n\nLangkah 6: Plot $(-3, 6)$, $(-2, 3)$, $(-1, 2)$, $(0, 3)$, $(1, 6)$, lalu hubungkan. Seluruh grafik berada di atas sumbu $X$.\n\nKesimpulan: Grafiknya parabola terbuka ke atas dengan puncak $(-1, 2)$, memotong sumbu $Y$ di $(0, 3)$, dan tidak memotong sumbu $X$."
        },
        {
          "problem": "Jelaskan bagaimana grafik $y = (x - 3)^2 + 1$ diperoleh dari grafik $y = x^2$.",
          "solution": "Langkah 1: Grafik $y = x^2$ berpuncak di $(0, 0)$.\n\nLangkah 2: Pada $y = (x - 3)^2$, nilai nol dari kuadratnya tercapai saat $x = 3$, bukan $x = 0$. Jadi puncaknya pindah ke $x = 3$: grafik DIGESER $3$ satuan ke KANAN.\n\nLangkah 3: Perhatikan arahnya: tanda minus pada $(x - 3)$ menggeser ke kanan, bukan ke kiri. Ini sering terbalik.\n\nLangkah 4: Penambahan $+1$ di luar kuadrat menaikkan setiap nilai $y$ sebesar $1$: grafik DIGESER $1$ satuan ke ATAS.\n\nLangkah 5: Puncak barunya $(3, 1)$. Bentuk dan lebar lengkungnya tidak berubah karena $a$ tetap $1$.\n\nLangkah 6: Periksa dengan satu titik: pada $y = x^2$, titik $(1, 1)$ digeser menjadi $(4, 2)$, dan $(4 - 3)^2 + 1 = 2$ — cocok.\n\nKesimpulan: Grafik $y = (x - 3)^2 + 1$ adalah grafik $y = x^2$ yang digeser $3$ satuan ke kanan dan $1$ satuan ke atas, dengan puncak $(3, 1)$."
        },
        {
          "problem": "Sebuah grafik $y = ax^2 + bx + c$ terbuka ke bawah, memotong sumbu $Y$ di atas titik asal, dan puncaknya berada di sebelah kanan sumbu $Y$. Tentukan tanda $a$, $b$, dan $c$.",
          "solution": "Langkah 1: Terbuka ke bawah berarti $a < 0$.\n\nLangkah 2: Memotong sumbu $Y$ di atas titik asal berarti $(0, c)$ di atas $O$, jadi $c > 0$.\n\nLangkah 3: Puncak di sebelah kanan sumbu $Y$ berarti $x_p = -\\frac{b}{2a} > 0$.\n\nLangkah 4: Karena $a < 0$, penyebut $2a$ negatif. Agar $-\\frac{b}{2a}$ positif, $\\frac{b}{2a}$ harus negatif, sehingga $b$ dan $a$ berlawanan tanda.\n\nLangkah 5: Jadi $b > 0$.\n\nLangkah 6: Periksa dengan contoh $y = -x^2 + 4x + 1$: $a = -1 < 0$, $c = 1 > 0$, $x_p = 2 > 0$, dan $b = 4 > 0$ — cocok.\n\nKesimpulan: $a < 0$, $b > 0$, dan $c > 0$."
        }
      ],
      "btc": "Kelompok VNPS: Di papan berpetak, setiap kelompok menggambar grafik $y = x^2$, lalu di atasnya menggambar $y = (x - 2)^2$, $y = x^2 - 3$, $y = (x + 1)^2 + 2$, dan $y = -x^2 + 4$ dengan warna berbeda. Tuliskan titik puncak setiap grafik dan gambarkan panah pergeserannya dari $(0, 0)$. Selanjutnya, kelompok lain menggambar SATU parabola sembarang dan kelompok penggambar harus menebak tanda $a$, $b$, $c$, dan $D$ dari gambar itu saja.",
      "summary_data": {
        "summary": [
          "Langkah menggambar: arah buka, titik potong sumbu $Y$, titik potong sumbu $X$, puncak, titik cermin, lalu hubungkan.",
          "Hubungkan titik-titik dengan lengkung halus, bukan ruas garis lurus.",
          "Bila $D < 0$, grafik tidak memotong sumbu $X$, sehingga titik bantu cermin menjadi sangat penting.",
          "Titik $(0, c)$ selalu mempunyai cermin $(2x_p, c)$.",
          "Grafik $y = (x - h)^2 + k$ adalah $y = x^2$ yang digeser $h$ ke kanan dan $k$ ke atas.",
          "$(x - 3)$ menggeser ke KANAN, sedangkan $(x + 3)$ menggeser ke KIRI.",
          "Nilai $a$ menentukan arah buka dan kelebaran; pergeseran tidak mengubah bentuk grafik.",
          "Tanda $c$ terbaca dari titik potong sumbu $Y$: di atas $O$ berarti $c > 0$.",
          "Letak puncak terhadap sumbu $Y$ menentukan tanda $b$: puncak di kanan berarti $a$ dan $b$ berlawanan tanda.",
          "Periksa sketsa dengan kesimetrian: titik-titik dengan nilai $y$ sama harus berjarak sama dari sumbu simetri."
        ],
        "islamic": "Keteraturan alam adalah tanda bagi orang yang mau berpikir. \"Sesungguhnya dalam penciptaan langit dan bumi, dan pergantian malam dan siang terdapat tanda-tanda (kebesaran Allah) bagi orang yang berakal.\" (QS. Ali 'Imran: 190)"
      },
      "collab_cases": [
        "Buatlah sketsa grafik $f(x) = x^2 - 4x + 3$ lengkap dengan titik potong, puncak, dan satu pasang titik cermin.",
        "Buatlah sketsa grafik $f(x) = -x^2 + 2x + 3$.",
        "Buatlah sketsa grafik $f(x) = x^2 - 2x + 4$. Mengapa grafik ini tidak memotong sumbu $X$?",
        "Jelaskan pergeseran yang mengubah $y = x^2$ menjadi $y = (x + 2)^2 - 5$, lalu tentukan puncaknya.",
        "Sebuah grafik terbuka ke atas, memotong sumbu $Y$ di bawah titik asal, dan puncaknya di sebelah kiri sumbu $Y$. Tentukan tanda $a$, $b$, dan $c$."
      ]
    },
    {
      "id": "P37",
      "bab": "Bab 6: Fungsi Kuadrat",
      "title": "Menyusun Fungsi Kuadrat dari Grafik atau Titik yang Diketahui",
      "obj": [
        "Memilih bentuk fungsi yang paling sesuai dengan keterangan yang tersedia: bentuk titik potong, bentuk puncak, atau bentuk umum.",
        "Menyusun fungsi kuadrat dari dua titik potong sumbu $X$ dan satu titik lain, dari titik puncak dan satu titik lain, atau dari tiga titik sembarang.",
        "Memeriksa fungsi yang diperoleh pada SEMUA titik yang diketahui dan menjabarkannya ke bentuk umum."
      ],
      "hook": "Sampai di sini kita selalu diberi fungsinya, lalu diminta menggambar grafiknya. Dalam kehidupan nyata, arahnya sering terbalik: seorang insinyur mengukur lengkung sebuah jembatan — lebarnya, tinggi puncaknya — lalu harus menuliskan fungsinya agar dapat menghitung tinggi lengkung di sembarang titik. Kuncinya adalah memilih BENTUK fungsi yang tepat. Bentuk yang tepat membuat soalnya selesai dalam dua baris; bentuk yang salah memaksa kita menyelesaikan sistem tiga persamaan.",
      "toolkit": [
        {
          "name": "Dua Titik Potong Sumbu X",
          "math": "$$(x_1, 0), (x_2, 0) \\Rightarrow y = a(x - x_1)(x - x_2)$$"
        },
        {
          "name": "Titik Puncak",
          "math": "$$(h, k) \\Rightarrow y = a(x - h)^2 + k$$"
        },
        {
          "name": "Menyinggung Sumbu X",
          "math": "$$(p, 0) \\Rightarrow y = a(x - p)^2$$"
        },
        {
          "name": "Tiga Titik Sembarang",
          "math": "$$y = ax^2 + bx + c \\Rightarrow \\text{SPLTV dalam } a, b, c$$"
        },
        {
          "name": "Mencari a",
          "math": "$$\\text{substitusikan satu titik lain yang diketahui}$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan fungsi kuadrat yang grafiknya memotong sumbu $X$ di $(1, 0)$ dan $(5, 0)$ serta melalui $(0, 5)$.",
          "solution": "Langkah 1: Diketahui dua titik potong sumbu $X$, jadi pakai bentuk titik potong.\n$y = a(x - 1)(x - 5)$\n\nLangkah 2: Nilai $a$ belum diketahui. Substitusikan titik ketiga, $(0, 5)$.\n$5 = a(0 - 1)(0 - 5) = a(-1)(-5) = 5a$\n\nLangkah 3: Selesaikan.\n$a = 1$\n\nLangkah 4: Tulis fungsinya lalu jabarkan.\n$y = (x - 1)(x - 5) = x^2 - 6x + 5$\n\nLangkah 5: Periksa ketiga titik: $1 - 6 + 5 = 0$, $25 - 30 + 5 = 0$, dan $0 - 0 + 5 = 5$ — semuanya cocok.\n\nLangkah 6: Perhatikan tandanya: titik potong $(1, 0)$ menghasilkan faktor $(x - 1)$, bukan $(x + 1)$.\n\nKesimpulan: Fungsinya $y = x^2 - 6x + 5$."
        },
        {
          "problem": "Tentukan fungsi kuadrat yang berpuncak di $(2, -3)$ dan melalui titik $(0, 1)$.",
          "solution": "Langkah 1: Diketahui titik puncak, jadi pakai bentuk puncak.\n$y = a(x - 2)^2 - 3$\n\nLangkah 2: Substitusikan titik $(0, 1)$.\n$1 = a(0 - 2)^2 - 3 = 4a - 3$\n\nLangkah 3: Selesaikan.\n$4a = 4 \\Rightarrow a = 1$\n\nLangkah 4: Tulis fungsinya lalu jabarkan.\n$y = (x - 2)^2 - 3 = x^2 - 4x + 4 - 3 = x^2 - 4x + 1$\n\nLangkah 5: Periksa puncak: $x_p = -\\frac{-4}{2} = 2$ dan $f(2) = 4 - 8 + 1 = -3$ — cocok. Periksa $(0, 1)$: $f(0) = 1$ — cocok.\n\nLangkah 6: Bentuk puncak sangat efisien: hanya satu bilangan yang dicari, yaitu $a$.\n\nKesimpulan: Fungsinya $y = x^2 - 4x + 1$."
        },
        {
          "problem": "Tentukan fungsi kuadrat yang berpuncak di $(-1, 4)$ dan memotong sumbu $X$ di $(1, 0)$.",
          "solution": "Langkah 1: Diketahui titik puncak, jadi pakai bentuk puncak. Perhatikan $h = -1$.\n$y = a(x + 1)^2 + 4$\n\nLangkah 2: Substitusikan $(1, 0)$.\n$0 = a(1 + 1)^2 + 4 = 4a + 4$\n\nLangkah 3: Selesaikan.\n$a = -1$\n\nLangkah 4: Nilai $a$ negatif, jadi grafik terbuka ke bawah — masuk akal, sebab puncaknya di atas sumbu $X$ tetapi grafiknya turun memotong sumbu.\n\nLangkah 5: Jabarkan.\n$y = -(x^2 + 2x + 1) + 4 = -x^2 - 2x + 3$\n\nLangkah 6: Periksa: $f(1) = -1 - 2 + 3 = 0$ dan $f(-1) = -1 + 2 + 3 = 4$ — cocok. Titik potong lainnya, cermin dari $x = 1$ terhadap $x = -1$, adalah $x = -3$: $f(-3) = -9 + 6 + 3 = 0$ — cocok.\n\nKesimpulan: Fungsinya $y = -x^2 - 2x + 3$."
        },
        {
          "problem": "Tentukan fungsi kuadrat yang grafiknya melalui $(0, -3)$, $(1, 0)$, dan $(2, 5)$.",
          "solution": "Langkah 1: Ketiga titik tidak berupa titik puncak maupun sepasang titik potong sumbu $X$ yang diketahui semua, jadi pakai bentuk umum $y = ax^2 + bx + c$.\n\nLangkah 2: Titik $(0, -3)$ langsung memberikan $c = -3$.\n\nLangkah 3: Titik $(1, 0)$: $a + b - 3 = 0 \\Rightarrow a + b = 3$.\n\nLangkah 4: Titik $(2, 5)$: $4a + 2b - 3 = 5 \\Rightarrow 4a + 2b = 8 \\Rightarrow 2a + b = 4$.\n\nLangkah 5: Kurangkan kedua persamaan.\n$(2a + b) - (a + b) = 4 - 3 \\Rightarrow a = 1$, lalu $b = 2$\n\nLangkah 6: Fungsinya $y = x^2 + 2x - 3$. Periksa: $-3$, $1 + 2 - 3 = 0$, $4 + 4 - 3 = 5$ — semuanya cocok.\n\nLangkah 7: Titik dengan $x = 0$ selalu memudahkan, karena langsung memberikan $c$ dan mengubah SPLTV menjadi sistem dua variabel.\n\nKesimpulan: Fungsinya $y = x^2 + 2x - 3$."
        },
        {
          "problem": "Tentukan fungsi kuadrat yang grafiknya menyinggung sumbu $X$ di $(3, 0)$ dan melalui $(1, 8)$.",
          "solution": "Langkah 1: Menyinggung sumbu $X$ di $(3, 0)$ berarti titik itu sekaligus PUNCAK dengan $k = 0$.\n$y = a(x - 3)^2$\n\nLangkah 2: Substitusikan $(1, 8)$.\n$8 = a(1 - 3)^2 = 4a$\n\nLangkah 3: Selesaikan.\n$a = 2$\n\nLangkah 4: Jabarkan.\n$y = 2(x^2 - 6x + 9) = 2x^2 - 12x + 18$\n\nLangkah 5: Periksa diskriminan: $D = 144 - 4(2)(18) = 144 - 144 = 0$ — memang menyinggung. Periksa $(1, 8)$: $2 - 12 + 18 = 8$ — cocok.\n\nLangkah 6: Bentuk ini dapat dipandang dari dua sisi: bentuk puncak dengan $k = 0$, atau bentuk titik potong dengan $x_1 = x_2 = 3$.\n\nKesimpulan: Fungsinya $y = 2x^2 - 12x + 18$."
        }
      ],
      "btc": "Kelompok VNPS: Guru menempelkan tiga gambar parabola di papan — satu dengan dua titik potong sumbu $X$ dan satu titik lain yang terbaca, satu dengan puncak dan satu titik lain, dan satu yang hanya menampilkan tiga titik sembarang. Setiap kelompok menyusun fungsi ketiganya, tetapi SEBELUM menghitung harus menuliskan bentuk mana yang dipilih dan mengapa. Kelompok yang memakai bentuk berbeda untuk gambar yang sama membandingkan panjang hitungannya.",
      "summary_data": {
        "summary": [
          "Pilih bentuk fungsi berdasarkan keterangan yang tersedia.",
          "Dua titik potong sumbu $X$ $(x_1, 0)$ dan $(x_2, 0)$: pakai $y = a(x - x_1)(x - x_2)$.",
          "Titik puncak $(h, k)$: pakai $y = a(x - h)^2 + k$.",
          "Menyinggung sumbu $X$ di $(p, 0)$: pakai $y = a(x - p)^2$.",
          "Tiga titik sembarang: pakai $y = ax^2 + bx + c$ dan selesaikan SPLTV-nya.",
          "Nilai $a$ dicari dengan menyubstitusikan satu titik lain yang diketahui.",
          "Titik $(1, 0)$ menghasilkan faktor $(x - 1)$; titik $(-1, 0)$ menghasilkan $(x + 1)$.",
          "Tanda $a$ harus sesuai dengan arah buka yang terlihat pada grafik.",
          "Titik dengan $x = 0$ langsung memberikan nilai $c$.",
          "Periksa fungsi akhir pada SEMUA titik yang diketahui."
        ],
        "islamic": "Mencari ilmu adalah jalan yang dimudahkan Allah. \"Barang siapa menempuh suatu jalan untuk mencari ilmu, Allah akan memudahkan baginya jalan menuju surga.\" (HR. Muslim)"
      },
      "collab_cases": [
        "Tentukan fungsi kuadrat yang memotong sumbu $X$ di $(-2, 0)$ dan $(3, 0)$ serta melalui $(0, -12)$.",
        "Tentukan fungsi kuadrat yang berpuncak di $(1, 5)$ dan melalui $(3, -3)$.",
        "Tentukan fungsi kuadrat yang melalui $(0, 4)$, $(1, 3)$, dan $(-1, 9)$.",
        "Tentukan fungsi kuadrat yang menyinggung sumbu $X$ di $(-2, 0)$ dan melalui $(0, 8)$.",
        "Sebuah lengkung jembatan berbentuk parabola dengan lebar $20$ m di permukaan jalan dan tinggi puncak $5$ m. Letakkan titik asal di salah satu kaki lengkung, lalu tentukan fungsinya."
      ]
    },
    {
      "id": "P38",
      "bab": "Bab 6: Fungsi Kuadrat",
      "title": "Penerapan Fungsi Kuadrat: Nilai Maksimum dan Minimum",
      "obj": [
        "Memodelkan masalah nyata — lintasan benda, luas, hasil kali, dan pendapatan — menjadi fungsi kuadrat satu variabel.",
        "Menentukan nilai maksimum atau minimum model itu beserta nilai variabel yang menghasilkannya, memakai titik puncak.",
        "Menafsirkan hasil dalam konteks: satuan, batas nilai yang masuk akal, dan jawaban atas pertanyaan yang sebenarnya diajukan."
      ],
      "hook": "Petani ingin kandang seluas-luasnya dengan pagar yang terbatas. Pengelola bioskop ingin pendapatan setinggi-tingginya, padahal menaikkan harga tiket membuat penonton berkurang. Pelatih ingin tahu setinggi apa bola yang ditendang pemainnya. Ketiganya mencari yang TERBESAR, dan ketiganya berakhir pada fungsi kuadrat yang terbuka ke bawah. Jawabannya selalu ada di tempat yang sama: di titik puncak.",
      "toolkit": [
        {
          "name": "1. Tetapkan Variabel",
          "math": "$$x = \\text{besaran yang dapat diatur}$$"
        },
        {
          "name": "2. Susun Model",
          "math": "$$\\text{besaran yang dioptimalkan} = f(x) = ax^2 + bx + c$$"
        },
        {
          "name": "3. Nilai Optimum",
          "math": "$$x_p = -\\frac{b}{2a},\\quad f(x_p) = \\text{maks } (a < 0) \\text{ atau min } (a > 0)$$"
        },
        {
          "name": "Dua Bilangan",
          "math": "$$x + y = s \\Rightarrow xy \\text{ maksimum saat } x = y = \\frac{s}{2}$$"
        },
        {
          "name": "Lintasan Benda",
          "math": "$$h(t) = -5t^2 + v_0 t + h_0$$"
        }
      ],
      "examples": [
        {
          "problem": "Tinggi sebuah bola yang ditendang ke atas setelah $t$ detik adalah $h(t) = -5t^2 + 20t$ meter. Tentukan tinggi maksimumnya, kapan tercapai, dan kapan bola kembali ke tanah.",
          "solution": "Langkah 1: Fungsinya kuadrat dengan $a = -5 < 0$, jadi mempunyai nilai MAKSIMUM di puncak.\n\nLangkah 2: Waktu mencapai puncak.\n$t_p = -\\frac{20}{2(-5)} = 2$ detik\n\nLangkah 3: Tinggi maksimum.\n$h(2) = -5(4) + 40 = -20 + 40 = 20$ meter\n\nLangkah 4: Bola kembali ke tanah saat $h(t) = 0$.\n$-5t^2 + 20t = -5t(t - 4) = 0 \\Rightarrow t = 0$ atau $t = 4$\n\nLangkah 5: Nilai $t = 0$ adalah saat bola ditendang, jadi bola kembali ke tanah pada $t = 4$ detik.\n\nLangkah 6: Periksa kesimetrian: naik $2$ detik dan turun $2$ detik — waktu puncak tepat di tengah $0$ dan $4$.\n\nKesimpulan: Tinggi maksimum $20$ meter pada detik ke-$2$, dan bola kembali ke tanah pada detik ke-$4$."
        },
        {
          "problem": "Keliling sebuah persegi panjang $40$ cm. Tentukan ukuran yang membuat luasnya terbesar dan berapa luas itu.",
          "solution": "Langkah 1: Misalkan panjangnya $x$ cm. Karena panjang ditambah lebar $= 20$, lebarnya $20 - x$.\n\nLangkah 2: Susun model luas.\n$L(x) = x(20 - x) = -x^2 + 20x$\n\nLangkah 3: Nilai $a = -1 < 0$, jadi ada luas maksimum.\n\nLangkah 4: Cari $x$ di puncak.\n$x_p = -\\frac{20}{2(-1)} = 10$\n\nLangkah 5: Hitung luas maksimum.\n$L(10) = 10 \\times 10 = 100$ cm$^2$\n\nLangkah 6: Ukurannya $10 \\times 10$ — sebuah persegi. Dari semua persegi panjang berkeliling sama, persegilah yang luasnya terbesar.\n\nLangkah 7: Periksa dengan ukuran lain: $9 \\times 11 = 99$ dan $8 \\times 12 = 96$ — keduanya lebih kecil.\n\nKesimpulan: Luas terbesar $100$ cm$^2$, dicapai bila bangunnya persegi berukuran $10 \\times 10$ cm."
        },
        {
          "problem": "Seorang peternak mempunyai $60$ m pagar untuk membuat kandang persegi panjang yang salah satu sisinya menempel pada tembok (tidak perlu dipagari). Tentukan luas maksimum kandang itu.",
          "solution": "Langkah 1: Misalkan dua sisi yang tegak lurus tembok masing-masing $x$ m. Sisi yang sejajar tembok memakai sisa pagar: $60 - 2x$ m.\n\nLangkah 2: Susun model luas.\n$L(x) = x(60 - 2x) = -2x^2 + 60x$\n\nLangkah 3: Cari $x$ di puncak.\n$x_p = -\\frac{60}{2(-2)} = 15$\n\nLangkah 4: Hitung ukuran dan luasnya. Sisi sejajar tembok $60 - 30 = 30$ m.\n$L(15) = 15 \\times 30 = 450$ m$^2$\n\nLangkah 5: Perhatikan bahwa jawabannya BUKAN persegi: sisi sejajar tembok dua kali sisi lainnya, karena tembok menggantikan satu sisi pagar.\n\nLangkah 6: Periksa: $x = 14$ memberikan $14 \\times 32 = 448$, dan $x = 16$ memberikan $16 \\times 28 = 448$ — keduanya lebih kecil dan sama besar, sesuai kesimetrian.\n\nLangkah 7: Batas masuk akal: $x$ harus di antara $0$ dan $30$ agar semua sisi positif, dan $x = 15$ memang di dalamnya.\n\nKesimpulan: Luas maksimum $450$ m$^2$, dengan ukuran $15$ m (tegak lurus tembok) kali $30$ m (sejajar tembok)."
        },
        {
          "problem": "Jumlah dua bilangan adalah $12$. Tentukan kedua bilangan itu agar hasil kalinya sebesar-besarnya.",
          "solution": "Langkah 1: Misalkan bilangan pertama $x$. Bilangan kedua $12 - x$.\n\nLangkah 2: Susun model hasil kali.\n$P(x) = x(12 - x) = -x^2 + 12x$\n\nLangkah 3: Cari puncaknya.\n$x_p = -\\frac{12}{-2} = 6$\n\nLangkah 4: Bilangan kedua $12 - 6 = 6$, dan hasil kalinya $36$.\n\nLangkah 5: Periksa: $5 \\times 7 = 35$ dan $4 \\times 8 = 32$ — keduanya lebih kecil.\n\nLangkah 6: Polanya sama dengan persegi panjang pada Contoh 2: bila jumlahnya tetap, hasil kali terbesar dicapai saat kedua bilangan SAMA.\n\nKesimpulan: Kedua bilangan itu $6$ dan $6$, dengan hasil kali maksimum $36$."
        },
        {
          "problem": "Sebuah bioskop menjual tiket Rp$20.000$ dan rata-rata ditonton $300$ orang. Setiap kenaikan harga Rp$1.000$ membuat penonton berkurang $10$ orang. Tentukan harga tiket yang memberikan pendapatan terbesar.",
          "solution": "Langkah 1: Misalkan harga dinaikkan $n$ kali Rp$1.000$. Harga menjadi $(20 + n)$ ribu, dan penonton menjadi $300 - 10n$ orang.\n\nLangkah 2: Susun model pendapatan dalam ribu rupiah.\n$R(n) = (20 + n)(300 - 10n)$\n\nLangkah 3: Jabarkan.\n$R(n) = 6000 - 200n + 300n - 10n^2 = -10n^2 + 100n + 6000$\n\nLangkah 4: Cari puncaknya.\n$n_p = -\\frac{100}{2(-10)} = 5$\n\nLangkah 5: Harga tiket $20 + 5 = 25$ ribu, penonton $300 - 50 = 250$ orang.\n$R(5) = 25 \\times 250 = 6250$ ribu\n\nLangkah 6: Periksa: tanpa kenaikan, $R(0) = 20 \\times 300 = 6000$ ribu. Kenaikan harga ternyata menambah pendapatan Rp$250.000$, walaupun penontonnya berkurang.\n\nLangkah 7: Jawablah pertanyaan yang sebenarnya: yang ditanyakan HARGA tiketnya, bukan nilai $n$.\n\nKesimpulan: Harga tiket Rp$25.000$ memberikan pendapatan terbesar, yaitu Rp$6.250.000$."
        }
      ],
      "btc": "Kelompok VNPS: Setiap kelompok diberi tali sepanjang $2$ meter. Bentuklah beberapa persegi panjang yang berbeda di atas kertas berpetak, catat ukuran dan luasnya dalam tabel di papan, lalu gambarkan titik-titik (panjang, luas) pada bidang koordinat. Apa bentuk sebaran titik-titik itu? Susun fungsinya, tentukan puncaknya, dan bandingkan dengan pengamatan. Terakhir, ulangi soalnya bila salah satu sisi menempel pada dinding kelas — apakah jawabannya masih persegi?",
      "summary_data": {
        "summary": [
          "Soal optimasi dimulai dengan menetapkan satu variabel yang dapat diatur.",
          "Nyatakan semua besaran lain dalam variabel itu memakai keterangan pada soal.",
          "Model yang terbuka ke bawah ($a < 0$) mempunyai nilai maksimum; yang terbuka ke atas ($a > 0$) mempunyai nilai minimum.",
          "Nilai optimum tercapai di $x_p = -\\frac{b}{2a}$, dan besarnya $f(x_p)$.",
          "Pada lintasan $h(t) = -5t^2 + v_0 t$, waktu puncak tepat di tengah waktu naik dan turun.",
          "Persegi panjang berkeliling tetap mempunyai luas terbesar ketika berbentuk persegi.",
          "Bila satu sisi menempel tembok, sisi yang sejajar tembok menjadi dua kali sisi lainnya.",
          "Dua bilangan berjumlah tetap mempunyai hasil kali terbesar bila keduanya sama.",
          "Periksalah batas nilai yang masuk akal: panjang, waktu, dan banyak barang tidak boleh negatif.",
          "Jawablah TEPAT yang ditanyakan — harga, ukuran, atau luas — bukan sekadar nilai variabelnya."
        ],
        "islamic": "Hidup adalah ujian untuk menjadi yang terbaik amalnya, bukan yang terbanyak. \"Yang menjadikan mati dan hidup, supaya Dia menguji kamu, siapa di antara kamu yang lebih baik amalnya.\" (QS. Al-Mulk: 2)"
      },
      "collab_cases": [
        "Tinggi sebuah roket air setelah $t$ detik adalah $h(t) = -5t^2 + 30t$ meter. Tentukan tinggi maksimumnya dan kapan roket jatuh kembali.",
        "Keliling sebuah persegi panjang $36$ cm. Tentukan luas maksimumnya.",
        "Seorang petani mempunyai $80$ m pagar untuk kandang persegi panjang yang satu sisinya menempel pada sungai. Tentukan ukuran dan luas maksimumnya.",
        "Selisih dua bilangan adalah $10$. Tentukan kedua bilangan itu agar hasil kalinya sekecil-kecilnya.",
        "Harga sewa sepeda Rp$30.000$ per hari dengan $200$ penyewa. Setiap kenaikan Rp$1.000$ mengurangi $5$ penyewa. Tentukan harga sewa yang memberikan pendapatan terbesar."
      ]
    },
    {
      "id": "P39",
      "bab": "Bab 7: Statistika",
      "title": "Penyajian Data: Tabel Frekuensi dan Diagram",
      "obj": [
        "Menyusun tabel distribusi frekuensi data tunggal, lengkap dengan frekuensi relatif dan frekuensi kumulatif.",
        "Membaca dan membuat diagram batang, diagram lingkaran, serta diagram batang-daun.",
        "Memilih bentuk penyajian yang sesuai dengan jenis data dan pertanyaan yang ingin dijawab."
      ],
      "hook": "Dua puluh nilai ulangan ditulis berderet: $6, 7, 8, 7, 9, 6, 8, 8, 7, 10, \\dots$ Berapa siswa yang mendapat $8$? Nilai berapa yang paling sering muncul? Adakah yang di bawah $6$? Dari deretan angka, semua pertanyaan itu harus dijawab dengan menghitung ulang satu per satu. Setelah angka yang sama dikumpulkan dalam tabel, atau digambar sebagai batang-batang, jawabannya terlihat dalam sekali pandang. Statistika dimulai dari sini: menata data agar dapat BERBICARA.",
      "toolkit": [
        {
          "name": "Frekuensi",
          "math": "$$f = \\text{banyak kemunculan suatu nilai},\\qquad \\sum f = n$$"
        },
        {
          "name": "Frekuensi Relatif",
          "math": "$$f_{\\text{rel}} = \\frac{f}{n} \\times 100\\%$$"
        },
        {
          "name": "Frekuensi Kumulatif",
          "math": "$$f_{\\text{kum}}(x) = \\text{banyak data yang nilainya} \\le x$$"
        },
        {
          "name": "Sudut Diagram Lingkaran",
          "math": "$$\\text{sudut} = \\frac{f}{n} \\times 360^\\circ$$"
        },
        {
          "name": "Batang-Daun",
          "math": "$$\\text{batang} = \\text{puluhan},\\quad \\text{daun} = \\text{satuan}:\\ 4 \\mid 2\\ 5 \\Rightarrow 42,\\ 45$$"
        }
      ],
      "examples": [
        {
          "problem": "Nilai ulangan $20$ siswa: $6, 7, 8, 7, 9, 6, 8, 8, 7, 10, 5, 8, 7, 9, 8, 6, 7, 8, 9, 8$. Susunlah tabel distribusi frekuensinya.",
          "solution": "Langkah 1: Tentukan nilai terkecil dan terbesar: $5$ dan $10$. Tuliskan semua nilai dari $5$ sampai $10$ dalam kolom pertama.\n\nLangkah 2: Bacalah data satu per satu dan beri satu turus pada nilai yang sesuai. Cara ini lebih aman daripada menghitung setiap nilai terpisah, karena setiap data disentuh tepat sekali.\n\nLangkah 3: Hitung turusnya.\n$5$: $1$, $6$: $3$, $7$: $5$, $8$: $7$, $9$: $3$, $10$: $1$\n\nLangkah 4: Periksa jumlah frekuensinya.\n$1 + 3 + 5 + 7 + 3 + 1 = 20$ — sama dengan banyak data\n\nLangkah 5: Dari tabel langsung terbaca: nilai yang paling sering muncul adalah $8$ (tujuh siswa), dan hanya satu siswa yang mendapat $10$.\n\nLangkah 6: Bila jumlah frekuensi tidak sama dengan $n$, pasti ada data yang terlewat atau terhitung dua kali.\n\nKesimpulan: Tabel frekuensinya: $5 \\to 1$, $6 \\to 3$, $7 \\to 5$, $8 \\to 7$, $9 \\to 3$, $10 \\to 1$, dengan jumlah $20$."
        },
        {
          "problem": "Dari tabel pada Contoh 1, tentukan frekuensi relatif nilai $8$ dan banyak siswa yang nilainya paling tinggi $7$.",
          "solution": "Langkah 1: Frekuensi relatif membandingkan frekuensi dengan seluruh data.\n$\\frac{7}{20} \\times 100\\% = 35\\%$\n\nLangkah 2: Jadi $35\\%$ siswa mendapat nilai $8$.\n\nLangkah 3: \"Paling tinggi $7$\" berarti nilainya $7$ atau kurang, yaitu $5$, $6$, dan $7$.\n\nLangkah 4: Jumlahkan frekuensinya — inilah frekuensi kumulatif sampai nilai $7$.\n$1 + 3 + 5 = 9$\n\nLangkah 5: Periksa dengan sisi lainnya: yang nilainya LEBIH dari $7$ adalah $7 + 3 + 1 = 11$, dan $9 + 11 = 20$ — cocok.\n\nLangkah 6: Perhatikan kata kuncinya: \"paling tinggi $7$\" memuat $7$, sedangkan \"kurang dari $7$\" tidak memuatnya.\n\nKesimpulan: Frekuensi relatif nilai $8$ adalah $35\\%$, dan $9$ siswa nilainya paling tinggi $7$."
        },
        {
          "problem": "Berat badan (kg) $15$ siswa: $42, 45, 47, 51, 53, 53, 55, 58, 60, 61, 61, 61, 64, 68, 72$. Sajikan dalam diagram batang-daun, lalu tentukan banyak siswa yang beratnya $50$ sampai $59$ kg.",
          "solution": "Langkah 1: Pisahkan setiap data menjadi batang (angka puluhan) dan daun (angka satuan). Contohnya, $42$ menjadi batang $4$ daun $2$.\n\nLangkah 2: Tuliskan batang secara berurutan, lalu daunnya secara urut dari kecil ke besar.\n$4 \\mid 2\\ 5\\ 7$\n$5 \\mid 1\\ 3\\ 3\\ 5\\ 8$\n$6 \\mid 0\\ 1\\ 1\\ 1\\ 4\\ 8$\n$7 \\mid 2$\n\nLangkah 3: Periksa banyaknya daun: $3 + 5 + 6 + 1 = 15$ — sama dengan banyak data.\n\nLangkah 4: Berat $50$ sampai $59$ kg ada pada batang $5$, yang mempunyai $5$ daun.\n\nLangkah 5: Diagram batang-daun tetap menyimpan setiap nilai asli, sekaligus memperlihatkan bentuk sebarannya — baris batang $6$ paling panjang, jadi data paling banyak di rentang $60$-an.\n\nLangkah 6: Dari diagram juga langsung terbaca: berat terkecil $42$ kg, terbesar $72$ kg, dan nilai yang paling sering muncul $61$ kg.\n\nKesimpulan: Ada $5$ siswa yang beratnya $50$ sampai $59$ kg."
        },
        {
          "problem": "Banyak buku yang dipinjam di perpustakaan sekolah dalam sepekan: Senin $12$, Selasa $8$, Rabu $15$, Kamis $10$, Jumat $5$. Tentukan persentase peminjaman hari Rabu dan besar sudutnya bila disajikan dalam diagram lingkaran.",
          "solution": "Langkah 1: Hitung jumlah seluruhnya.\n$12 + 8 + 15 + 10 + 5 = 50$ buku\n\nLangkah 2: Hitung persentase hari Rabu.\n$\\frac{15}{50} \\times 100\\% = 30\\%$\n\nLangkah 3: Hitung sudutnya pada diagram lingkaran.\n$\\frac{15}{50} \\times 360^\\circ = 108^\\circ$\n\nLangkah 4: Periksa dengan persentase: $30\\%$ dari $360^\\circ$ adalah $0{,}3 \\times 360^\\circ = 108^\\circ$ — cocok.\n\nLangkah 5: Sebagai pemeriksaan menyeluruh, sudut semua hari harus berjumlah $360^\\circ$: $86{,}4^\\circ + 57{,}6^\\circ + 108^\\circ + 72^\\circ + 36^\\circ = 360^\\circ$ — cocok.\n\nLangkah 6: Diagram batang lebih cocok untuk membandingkan BANYAK peminjaman antarhari, sedangkan diagram lingkaran lebih cocok untuk melihat BAGIAN dari keseluruhan.\n\nKesimpulan: Peminjaman hari Rabu $30\\%$ dari seluruhnya, dengan sudut $108^\\circ$ pada diagram lingkaran."
        },
        {
          "problem": "Tentukan bentuk penyajian yang paling sesuai untuk: (a) warna kesukaan siswa satu kelas; (b) suhu udara setiap jam dari pukul $06.00$ sampai $18.00$; (c) nilai ulangan $30$ siswa bila ingin tetap melihat setiap nilainya.",
          "solution": "Langkah 1: Kenali jenis datanya lebih dahulu: data kategori (berupa nama atau jenis) atau data numerik (berupa bilangan).\n\nLangkah 2: (a) Warna kesukaan adalah data KATEGORI. Diagram batang atau diagram lingkaran cocok; urutan batangnya bebas.\n\nLangkah 3: (b) Suhu setiap jam adalah data yang BERUBAH TERHADAP WAKTU. Diagram garis paling cocok karena memperlihatkan naik-turunnya.\n\nLangkah 4: (c) Nilai ulangan adalah data NUMERIK. Diagram batang-daun cocok karena setiap nilai asli tetap terlihat, sekaligus tampak sebarannya.\n\nLangkah 5: Diagram garis TIDAK cocok untuk (a): garis penghubung antarwarna tidak mempunyai arti apa pun.\n\nLangkah 6: Pemilihan yang keliru tidak membuat datanya salah, tetapi dapat menyesatkan pembaca.\n\nKesimpulan: (a) diagram batang atau lingkaran; (b) diagram garis; (c) diagram batang-daun."
        }
      ],
      "btc": "Kelompok VNPS: Setiap kelompok mengumpulkan satu data kecil dari teman sekelas — misalnya banyak saudara kandung, ukuran sepatu, atau waktu tempuh ke sekolah dalam menit. Di papan, sajikan data yang sama dalam DUA bentuk berbeda: tabel frekuensi dan salah satu diagram. Tuliskan tiga kesimpulan yang dapat dibaca dari penyajian itu. Kelompok lain lalu menilai: diagram mana yang paling cepat menjawab pertanyaan \"nilai berapa yang paling sering muncul?\"",
      "summary_data": {
        "summary": [
          "Frekuensi adalah banyaknya kemunculan suatu nilai; jumlah semua frekuensi sama dengan banyak data $n$.",
          "Turus membantu menghitung frekuensi tanpa ada data yang terlewat.",
          "Frekuensi relatif $= \\frac{f}{n} \\times 100\\%$.",
          "Frekuensi kumulatif suatu nilai adalah banyak data yang nilainya kurang dari atau sama dengan nilai itu.",
          "\"Paling tinggi $x$\" memuat $x$; \"kurang dari $x$\" tidak memuat $x$.",
          "Sudut diagram lingkaran $= \\frac{f}{n} \\times 360^\\circ$, dan semua sudut berjumlah $360^\\circ$.",
          "Diagram batang-daun memisahkan puluhan (batang) dan satuan (daun) sehingga nilai aslinya tetap terlihat.",
          "Data kategori disajikan dengan diagram batang atau lingkaran.",
          "Data yang berubah terhadap waktu disajikan dengan diagram garis.",
          "Selalu periksa: jumlah frekuensi $= n$ dan jumlah sudut $= 360^\\circ$."
        ],
        "islamic": "Membaca dengan cermat adalah perintah pertama yang turun kepada Rasulullah ﷺ. \"Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan.\" (QS. Al-'Alaq: 1)"
      },
      "collab_cases": [
        "Susunlah tabel frekuensi dari data banyak saudara kandung $20$ siswa: $1, 2, 0, 3, 2, 1, 1, 2, 4, 2, 3, 1, 2, 0, 2, 1, 3, 2, 1, 2$.",
        "Dari tabel pada soal nomor 1, tentukan frekuensi relatif siswa yang mempunyai $2$ saudara dan banyak siswa yang saudaranya paling banyak $1$.",
        "Sajikan data nilai $38, 42, 45, 45, 51, 56, 58, 62, 63, 63, 67, 70, 74$ dalam diagram batang-daun.",
        "Dari $40$ siswa, $10$ memilih voli, $14$ basket, $6$ bulu tangkis, dan sisanya futsal. Hitunglah sudut setiap bagian pada diagram lingkaran.",
        "Tentukan diagram yang paling sesuai untuk menyajikan (a) jumlah pengunjung kantin setiap hari selama sebulan, (b) jenis transportasi siswa ke sekolah."
      ]
    },
    {
      "id": "P40",
      "bab": "Bab 7: Statistika",
      "title": "Ukuran Pemusatan Data Tunggal: Rata-rata, Median, dan Modus",
      "obj": [
        "Menghitung rata-rata, median, dan modus data tunggal, termasuk median untuk banyak data genap maupun ganjil.",
        "Menentukan data yang belum diketahui dari nilai rata-rata, dan menghitung perubahan rata-rata bila ada data yang ditambahkan.",
        "Memilih ukuran pemusatan yang paling tepat mewakili data, terutama bila terdapat nilai yang sangat ekstrem."
      ],
      "hook": "Lima karyawan sebuah toko bergaji $4$, $4$, $5$, $5$, dan $32$ juta rupiah sebulan — yang terakhir adalah gaji pemiliknya. Iklan lowongan menulis \"rata-rata gaji di toko kami $10$ juta rupiah!\" Perhitungannya benar, tetapi empat dari lima orang di sana bergaji jauh di bawah itu. Satu bilangan yang mewakili sekumpulan data memang sangat berguna, tetapi bilangan yang MANA yang dipakai menentukan apakah kita memberi gambaran yang jujur atau menyesatkan.",
      "toolkit": [
        {
          "name": "Rata-rata (Mean)",
          "math": "$$\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_n}{n} = \\frac{\\sum x}{n}$$"
        },
        {
          "name": "Median n Ganjil",
          "math": "$$Me = x_{\\frac{n+1}{2}} \\quad (\\text{data sudah diurutkan})$$"
        },
        {
          "name": "Median n Genap",
          "math": "$$Me = \\frac{x_{\\frac{n}{2}} + x_{\\frac{n}{2}+1}}{2}$$"
        },
        {
          "name": "Modus",
          "math": "$$Mo = \\text{nilai dengan frekuensi terbesar}$$"
        },
        {
          "name": "Jumlah dari Rata-rata",
          "math": "$$\\sum x = n \\cdot \\bar{x}$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan rata-rata, median, dan modus data $7, 8, 6, 9, 8, 10, 8, 7$.",
          "solution": "Langkah 1: Hitung jumlah dan banyak data.\n$\\sum x = 7 + 8 + 6 + 9 + 8 + 10 + 8 + 7 = 63$ dan $n = 8$\n\nLangkah 2: Hitung rata-rata.\n$\\bar{x} = \\frac{63}{8} = 7{,}875$\n\nLangkah 3: Urutkan data untuk median. Langkah ini WAJIB.\n$6, 7, 7, 8, 8, 8, 9, 10$\n\nLangkah 4: Banyak data genap ($n = 8$), jadi median adalah rata-rata data ke-$4$ dan ke-$5$.\n$Me = \\frac{8 + 8}{2} = 8$\n\nLangkah 5: Modus adalah nilai yang paling sering muncul. Nilai $8$ muncul tiga kali.\n$Mo = 8$\n\nLangkah 6: Kekeliruan yang sering terjadi adalah mengambil data tengah SEBELUM diurutkan. Pada urutan asli, data ke-$4$ dan ke-$5$ adalah $9$ dan $8$, yang memberikan median $8{,}5$ — salah.\n\nKesimpulan: Rata-rata $7{,}875$, median $8$, dan modus $8$."
        },
        {
          "problem": "Tentukan rata-rata, median, dan modus data $12, 15, 11, 18, 14$.",
          "solution": "Langkah 1: Hitung rata-rata.\n$\\bar{x} = \\frac{12 + 15 + 11 + 18 + 14}{5} = \\frac{70}{5} = 14$\n\nLangkah 2: Urutkan data.\n$11, 12, 14, 15, 18$\n\nLangkah 3: Banyak data ganjil ($n = 5$), jadi median adalah data ke-$\\frac{5 + 1}{2} = 3$.\n$Me = 14$\n\nLangkah 4: Setiap nilai muncul tepat satu kali, sehingga tidak ada nilai yang lebih sering daripada yang lain.\n\nLangkah 5: Data seperti ini dikatakan TIDAK mempunyai modus.\n\nLangkah 6: Kebetulan rata-rata dan median sama-sama $14$. Hal itu terjadi bila data tersebar cukup seimbang di kiri dan kanan nilai tengahnya.\n\nKesimpulan: Rata-rata $14$, median $14$, dan data ini tidak mempunyai modus."
        },
        {
          "problem": "Rata-rata lima nilai ulangan Dina adalah $80$. Empat di antaranya $78$, $85$, $72$, dan $90$. Tentukan nilai kelima.",
          "solution": "Langkah 1: Dari rata-rata, hitung JUMLAH seluruh nilai.\n$\\sum x = n \\cdot \\bar{x} = 5 \\times 80 = 400$\n\nLangkah 2: Jumlahkan empat nilai yang diketahui.\n$78 + 85 + 72 + 90 = 325$\n\nLangkah 3: Nilai kelima adalah selisihnya.\n$400 - 325 = 75$\n\nLangkah 4: Periksa: $\\frac{325 + 75}{5} = \\frac{400}{5} = 80$ — cocok.\n\nLangkah 5: Cara berpikir \"ubah rata-rata menjadi jumlah\" adalah kunci hampir semua soal rata-rata yang memuat data hilang.\n\nKesimpulan: Nilai kelima Dina adalah $75$."
        },
        {
          "problem": "Rata-rata nilai $30$ siswa adalah $75$. Setelah seorang siswa baru ikut ujian susulan, rata-ratanya menjadi $74$. Tentukan nilai siswa baru itu.",
          "solution": "Langkah 1: Hitung jumlah nilai sebelum siswa baru.\n$30 \\times 75 = 2250$\n\nLangkah 2: Hitung jumlah nilai sesudahnya. Banyak siswa sekarang $31$.\n$31 \\times 74 = 2294$\n\nLangkah 3: Nilai siswa baru adalah selisih kedua jumlah.\n$2294 - 2250 = 44$\n\nLangkah 4: Periksa kemasukakalannya: rata-rata TURUN, jadi nilai siswa baru harus di bawah rata-rata lama. Memang $44 < 75$.\n\nLangkah 5: Kekeliruan yang sering terjadi adalah tetap memakai $30$ sebagai pembagi setelah ada siswa baru.\n\nKesimpulan: Nilai siswa baru itu $44$."
        },
        {
          "problem": "Gaji lima orang di sebuah toko (juta rupiah): $4, 4, 5, 5, 32$. Tentukan rata-rata dan mediannya, lalu tentukan ukuran mana yang lebih jujur mewakili gaji di toko itu.",
          "solution": "Langkah 1: Hitung rata-rata.\n$\\bar{x} = \\frac{4 + 4 + 5 + 5 + 32}{5} = \\frac{50}{5} = 10$\n\nLangkah 2: Data sudah urut. Median adalah data ke-$3$.\n$Me = 5$\n\nLangkah 3: Bandingkan dengan datanya: empat dari lima orang bergaji $4$ atau $5$ juta, jauh di bawah $10$ juta.\n\nLangkah 4: Rata-rata \"tertarik\" oleh satu nilai ekstrem, yaitu $32$. Median hanya melihat posisi tengah, sehingga tidak terpengaruh besarnya nilai ekstrem itu.\n\nLangkah 5: Bila $32$ diganti $320$, rata-ratanya melonjak menjadi $67{,}6$, sedangkan mediannya tetap $5$.\n\nLangkah 6: Jadi untuk data yang memuat nilai sangat ekstrem, median lebih mewakili sebagian besar data.\n\nKesimpulan: Rata-rata $10$ juta dan median $5$ juta; median lebih jujur mewakili gaji sebagian besar orang di toko itu."
        }
      ],
      "btc": "Kelompok VNPS: Setiap kelompok mencatat satu data dari anggota kelas — misalnya waktu tidur semalam (jam) atau uang jajan harian (ribu rupiah) — minimal $10$ data. Di papan, hitunglah rata-rata, median, dan modusnya. Kemudian tambahkan satu data khayalan yang sangat ekstrem (misalnya uang jajan Rp$500.000$) dan hitung ulang ketiganya. Ukuran mana yang berubah paling jauh? Tuliskan satu kalimat saran: kapan sebaiknya memakai median alih-alih rata-rata.",
      "summary_data": {
        "summary": [
          "Rata-rata $\\bar{x} = \\frac{\\sum x}{n}$ memakai seluruh data.",
          "Median adalah nilai tengah SETELAH data diurutkan.",
          "Bila $n$ ganjil, median adalah data ke-$\\frac{n + 1}{2}$.",
          "Bila $n$ genap, median adalah rata-rata data ke-$\\frac{n}{2}$ dan ke-$\\left(\\frac{n}{2} + 1\\right)$.",
          "Modus adalah nilai yang paling sering muncul; data boleh mempunyai lebih dari satu modus atau tidak mempunyai modus.",
          "Dari rata-rata dapat dihitung jumlah data: $\\sum x = n \\cdot \\bar{x}$.",
          "Soal data hilang diselesaikan dengan mengubah rata-rata menjadi jumlah.",
          "Bila data bertambah, pembaginya juga bertambah.",
          "Rata-rata mudah tertarik oleh nilai ekstrem; median tidak.",
          "Bila setiap data ditambah $k$, rata-rata, median, dan modusnya juga bertambah $k$."
        ],
        "islamic": "Sikap pertengahan adalah jalan yang dipuji. \"Dan demikian pula Kami telah menjadikan kamu (umat Islam) umat pertengahan agar kamu menjadi saksi atas (perbuatan) manusia.\" (QS. Al-Baqarah: 143)"
      },
      "collab_cases": [
        "Tentukan rata-rata, median, dan modus data $5, 8, 7, 6, 8, 9, 8, 5, 7, 10$.",
        "Tentukan median data $23, 19, 27, 21, 25, 30, 18$.",
        "Rata-rata enam bilangan adalah $15$. Lima di antaranya $12, 18, 14, 16, 20$. Tentukan bilangan keenam.",
        "Rata-rata nilai $24$ siswa adalah $70$. Bila nilai guru ($100$) ikut dimasukkan secara keliru, berapakah rata-rata yang diperoleh?",
        "Harga rumah di sebuah jalan (juta rupiah): $350, 400, 380, 420, 390, 2500$. Ukuran pemusatan mana yang lebih tepat dipakai untuk menggambarkan harga rumah di jalan itu? Jelaskan dengan hitungan."
      ]
    },
    {
      "id": "P41",
      "bab": "Bab 7: Statistika",
      "title": "Ukuran Pemusatan dari Tabel Frekuensi dan Rata-rata Gabungan",
      "obj": [
        "Menghitung rata-rata, median, dan modus dari tabel distribusi frekuensi data tunggal memakai frekuensi kumulatif.",
        "Menghitung rata-rata gabungan dua kelompok yang banyak anggotanya berbeda, serta rata-rata salah satu kelompok bila rata-rata gabungannya diketahui.",
        "Menentukan frekuensi yang belum diketahui dari rata-rata yang diketahui."
      ],
      "hook": "Kelas A yang berisi $20$ siswa mendapat rata-rata $70$, dan kelas B yang berisi $30$ siswa mendapat rata-rata $80$. Berapa rata-rata seluruh $50$ siswa? Jawaban cepat \"$75$, tengah-tengah $70$ dan $80$\" ternyata KELIRU, karena kelas B lebih besar sehingga lebih berat pengaruhnya. Pertemuan ini membahas cara menghitung ukuran pemusatan ketika data sudah tersusun dalam tabel atau terbagi dalam beberapa kelompok — keadaan yang jauh lebih sering dijumpai daripada deretan data mentah.",
      "toolkit": [
        {
          "name": "Rata-rata dari Tabel",
          "math": "$$\\bar{x} = \\frac{\\sum f \\cdot x}{\\sum f}$$"
        },
        {
          "name": "Letak Median",
          "math": "$$n \\text{ ganjil: data ke-}\\tfrac{n+1}{2};\\quad n \\text{ genap: rata-rata data ke-}\\tfrac{n}{2} \\text{ dan ke-}\\left(\\tfrac{n}{2}+1\\right)$$"
        },
        {
          "name": "Frekuensi Kumulatif",
          "math": "$$\\text{dipakai untuk menemukan baris tempat data ke-}k \\text{ berada}$$"
        },
        {
          "name": "Rata-rata Gabungan",
          "math": "$$\\bar{x}_{\\text{gab}} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}$$"
        },
        {
          "name": "Modus dari Tabel",
          "math": "$$Mo = \\text{nilai pada baris dengan } f \\text{ terbesar}$$"
        }
      ],
      "examples": [
        {
          "problem": "Tabel nilai $20$ siswa: nilai $5$ ada $1$, $6$ ada $3$, $7$ ada $5$, $8$ ada $7$, $9$ ada $3$, dan $10$ ada $1$. Tentukan rata-rata, median, dan modusnya.",
          "solution": "Langkah 1: Rata-rata: kalikan setiap nilai dengan frekuensinya, lalu jumlahkan.\n$5(1) + 6(3) + 7(5) + 8(7) + 9(3) + 10(1) = 5 + 18 + 35 + 56 + 27 + 10 = 151$\n\nLangkah 2: Bagi dengan banyak data.\n$\\bar{x} = \\frac{151}{20} = 7{,}55$\n\nLangkah 3: Median: $n = 20$ genap, jadi median adalah rata-rata data ke-$10$ dan ke-$11$.\n\nLangkah 4: Susun frekuensi kumulatif.\nnilai $5$: $1$; nilai $6$: $4$; nilai $7$: $9$; nilai $8$: $16$\n\nLangkah 5: Data ke-$10$ sampai ke-$16$ semuanya bernilai $8$. Jadi data ke-$10$ dan ke-$11$ keduanya $8$.\n$Me = \\frac{8 + 8}{2} = 8$\n\nLangkah 6: Modus: frekuensi terbesar adalah $7$, milik nilai $8$.\n$Mo = 8$\n\nLangkah 7: Kekeliruan yang sering terjadi adalah membagi $151$ dengan banyak BARIS ($6$) alih-alih banyak data ($20$).\n\nKesimpulan: Rata-rata $7{,}55$, median $8$, dan modus $8$."
        },
        {
          "problem": "Tabel nilai $25$ siswa: nilai $4$ ada $3$, $5$ ada $5$, $6$ ada $8$, $7$ ada $6$, dan $8$ ada $3$. Tentukan rata-rata dan mediannya.",
          "solution": "Langkah 1: Hitung $\\sum f \\cdot x$.\n$4(3) + 5(5) + 6(8) + 7(6) + 8(3) = 12 + 25 + 48 + 42 + 24 = 151$\n\nLangkah 2: Hitung rata-rata.\n$\\bar{x} = \\frac{151}{25} = 6{,}04$\n\nLangkah 3: Median: $n = 25$ ganjil, jadi median adalah data ke-$\\frac{25 + 1}{2} = 13$.\n\nLangkah 4: Frekuensi kumulatif.\nnilai $4$: $3$; nilai $5$: $8$; nilai $6$: $16$\n\nLangkah 5: Data ke-$9$ sampai ke-$16$ bernilai $6$, dan data ke-$13$ berada di rentang itu.\n$Me = 6$\n\nLangkah 6: Periksa kemasukakalannya: rata-rata $6{,}04$ dan median $6$ berdekatan, sesuai dengan tabel yang frekuensinya cukup seimbang di sekitar nilai $6$.\n\nKesimpulan: Rata-rata $6{,}04$ dan median $6$."
        },
        {
          "problem": "Kelas A berisi $20$ siswa dengan rata-rata $70$, dan kelas B berisi $30$ siswa dengan rata-rata $80$. Tentukan rata-rata gabungan kedua kelas.",
          "solution": "Langkah 1: Ubah setiap rata-rata menjadi jumlah nilai.\nKelas A: $20 \\times 70 = 1400$\nKelas B: $30 \\times 80 = 2400$\n\nLangkah 2: Jumlahkan seluruh nilai dan seluruh siswa.\n$1400 + 2400 = 3800$ dan $20 + 30 = 50$\n\nLangkah 3: Hitung rata-rata gabungan.\n$\\bar{x}_{\\text{gab}} = \\frac{3800}{50} = 76$\n\nLangkah 4: Hasilnya BUKAN $75$. Kelas B lebih besar sehingga rata-rata gabungan lebih dekat ke $80$.\n\nLangkah 5: Periksa kemasukakalannya: rata-rata gabungan selalu berada di antara kedua rata-rata kelompok, dan $70 < 76 < 80$.\n\nLangkah 6: Rata-rata dari kedua rata-rata, yaitu $75$, hanya benar bila kedua kelompok sama besar.\n\nKesimpulan: Rata-rata gabungan kedua kelas adalah $76$."
        },
        {
          "problem": "Rata-rata nilai $40$ siswa adalah $72$. Rata-rata nilai $15$ siswa putra adalah $68$. Tentukan rata-rata nilai siswa putri.",
          "solution": "Langkah 1: Banyak siswa putri.\n$40 - 15 = 25$\n\nLangkah 2: Jumlah nilai seluruh siswa.\n$40 \\times 72 = 2880$\n\nLangkah 3: Jumlah nilai siswa putra.\n$15 \\times 68 = 1020$\n\nLangkah 4: Jumlah nilai siswa putri.\n$2880 - 1020 = 1860$\n\nLangkah 5: Rata-rata siswa putri.\n$\\frac{1860}{25} = 74{,}4$\n\nLangkah 6: Periksa arahnya: rata-rata putra ($68$) di bawah rata-rata gabungan ($72$), jadi rata-rata putri harus di atas $72$. Memang $74{,}4 > 72$.\n\nKesimpulan: Rata-rata nilai siswa putri adalah $74{,}4$."
        },
        {
          "problem": "Tabel nilai: nilai $6$ ada $4$ siswa, nilai $7$ ada $x$ siswa, dan nilai $8$ ada $6$ siswa. Rata-ratanya $7{,}1$. Tentukan $x$.",
          "solution": "Langkah 1: Tulis rumus rata-rata dari tabel.\n$\\frac{6(4) + 7x + 8(6)}{4 + x + 6} = 7{,}1$\n\nLangkah 2: Sederhanakan.\n$\\frac{72 + 7x}{10 + x} = 7{,}1$\n\nLangkah 3: Kalikan silang.\n$72 + 7x = 71 + 7{,}1x$\n\nLangkah 4: Kumpulkan suku $x$.\n$72 - 71 = 7{,}1x - 7x \\Rightarrow 1 = 0{,}1x \\Rightarrow x = 10$\n\nLangkah 5: Periksa: $\\frac{24 + 70 + 48}{20} = \\frac{142}{20} = 7{,}1$ — cocok.\n\nLangkah 6: Perhatikan bahwa $x$ muncul di pembilang DAN di penyebut, karena frekuensi baru ikut menambah banyak data.\n\nKesimpulan: Nilai $x = 10$."
        }
      ],
      "btc": "Kelompok VNPS: Guru membagi kelas menjadi dua kelompok yang TIDAK sama besar, dan setiap siswa menuliskan satu bilangan bulat pilihannya dari $1$ sampai $10$. Setiap kelompok menghitung rata-rata kelompoknya di papan. Sebelum menghitung rata-rata seluruh kelas, setiap kelompok menebak dulu hasilnya, lalu membuktikannya dengan dua cara: menjumlahkan semua bilangan, dan memakai rumus rata-rata gabungan. Mengapa rata-rata dari dua rata-rata kelompok tidak sama dengan rata-rata seluruh kelas?",
      "summary_data": {
        "summary": [
          "Rata-rata dari tabel frekuensi: $\\bar{x} = \\frac{\\sum f \\cdot x}{\\sum f}$.",
          "Pembaginya adalah banyak DATA ($\\sum f$), bukan banyak baris tabel.",
          "Letak median ditentukan dengan frekuensi kumulatif: cari baris tempat data ke-$k$ berada.",
          "Modus dari tabel adalah nilai pada baris dengan frekuensi terbesar.",
          "Rata-rata gabungan: $\\bar{x}_{\\text{gab}} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}$.",
          "Rata-rata gabungan lebih dekat ke rata-rata kelompok yang lebih besar.",
          "Rata-rata dari dua rata-rata hanya benar bila kedua kelompok sama besar.",
          "Rata-rata gabungan selalu berada di antara rata-rata kelompok-kelompoknya.",
          "Untuk mencari rata-rata satu kelompok, kurangkan jumlah kelompok lain dari jumlah seluruhnya.",
          "Frekuensi yang belum diketahui muncul di pembilang dan penyebut rumus rata-rata."
        ],
        "islamic": "Perbedaan kelompok adalah untuk saling mengenal dan saling melengkapi. \"Wahai manusia! Sungguh, Kami telah menciptakan kamu dari seorang laki-laki dan seorang perempuan, kemudian Kami jadikan kamu berbangsa-bangsa dan bersuku-suku agar kamu saling mengenal.\" (QS. Al-Hujurat: 13)"
      },
      "collab_cases": [
        "Tabel ukuran sepatu $30$ siswa: ukuran $37$ ada $4$, $38$ ada $9$, $39$ ada $10$, $40$ ada $5$, $41$ ada $2$. Tentukan rata-rata, median, dan modusnya.",
        "Kelas X-1 ($32$ siswa) mempunyai rata-rata $78$, dan kelas X-2 ($28$ siswa) mempunyai rata-rata $81$. Tentukan rata-rata gabungannya.",
        "Rata-rata tinggi $30$ siswa adalah $160$ cm. Rata-rata tinggi $12$ siswa putri adalah $154$ cm. Tentukan rata-rata tinggi siswa putra.",
        "Tabel nilai: $5$ ada $3$, $6$ ada $x$, $7$ ada $5$. Rata-ratanya $6{,}2$. Tentukan $x$.",
        "Rata-rata nilai $10$ siswa adalah $60$. Dua siswa yang semula bernilai $40$ dan $50$ mengikuti perbaikan dan keduanya mendapat $70$. Tentukan rata-rata yang baru."
      ]
    },
    {
      "id": "P42",
      "bab": "Bab 7: Statistika",
      "title": "Kuartil dan Diagram Kotak Garis",
      "obj": [
        "Menentukan kuartil bawah $Q_1$, kuartil tengah $Q_2$, dan kuartil atas $Q_3$ data tunggal, baik untuk banyak data ganjil maupun genap.",
        "Menyusun statistik lima serangkai dan menggambarkannya sebagai diagram kotak garis (boxplot).",
        "Membaca diagram kotak garis untuk menyimpulkan sebaran data, seperti persentase data di antara dua kuartil."
      ],
      "hook": "Median membelah data menjadi dua bagian sama banyak. Bagaimana bila kita ingin tahu lebih jauh: nilai berapa yang menjadi batas seperempat siswa terbawah? Berapa nilai minimal untuk masuk seperempat teratas? Membelah lagi setiap separuh data menghasilkan tiga titik potong yang disebut KUARTIL. Bersama nilai terkecil dan terbesar, kelima bilangan itu dapat digambar sebagai sebuah kotak dengan dua kumis — gambar ringkas yang memperlihatkan pusat sekaligus sebaran data.",
      "toolkit": [
        {
          "name": "Kuartil Tengah",
          "math": "$$Q_2 = \\text{median seluruh data (terurut)}$$"
        },
        {
          "name": "Kuartil Bawah",
          "math": "$$Q_1 = \\text{median separuh data di bawah } Q_2$$"
        },
        {
          "name": "Kuartil Atas",
          "math": "$$Q_3 = \\text{median separuh data di atas } Q_2$$"
        },
        {
          "name": "n Ganjil",
          "math": "$$\\text{data ke-}Q_2 \\text{ TIDAK ikut ke separuh bawah maupun atas}$$"
        },
        {
          "name": "Statistik Lima Serangkai",
          "math": "$$x_{\\min},\\ Q_1,\\ Q_2,\\ Q_3,\\ x_{\\max}$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan $Q_1$, $Q_2$, dan $Q_3$ dari data $3, 5, 6, 8, 9, 11, 12, 14, 15$.",
          "solution": "Langkah 1: Data sudah terurut dan $n = 9$ (ganjil).\n\nLangkah 2: $Q_2$ adalah median, yaitu data ke-$5$.\n$Q_2 = 9$\n\nLangkah 3: Karena $n$ ganjil, data ke-$5$ tidak ikut ke separuh mana pun. Separuh bawah: $3, 5, 6, 8$. Separuh atas: $11, 12, 14, 15$.\n\nLangkah 4: $Q_1$ adalah median separuh bawah.\n$Q_1 = \\frac{5 + 6}{2} = 5{,}5$\n\nLangkah 5: $Q_3$ adalah median separuh atas.\n$Q_3 = \\frac{12 + 14}{2} = 13$\n\nLangkah 6: Periksa pembagiannya: di bawah $5{,}5$ ada $2$ data, di antara $5{,}5$ dan $9$ ada $2$ data, di antara $9$ dan $13$ ada $2$ data, dan di atas $13$ ada $2$ data — empat bagian yang sama banyak.\n\nKesimpulan: $Q_1 = 5{,}5$, $Q_2 = 9$, dan $Q_3 = 13$."
        },
        {
          "problem": "Tentukan $Q_1$, $Q_2$, dan $Q_3$ dari data $2, 4, 5, 7, 8, 10, 11, 13$.",
          "solution": "Langkah 1: Data terurut dan $n = 8$ (genap).\n\nLangkah 2: $Q_2$ adalah rata-rata data ke-$4$ dan ke-$5$.\n$Q_2 = \\frac{7 + 8}{2} = 7{,}5$\n\nLangkah 3: Karena $n$ genap, data terbagi tepat menjadi dua separuh. Separuh bawah: $2, 4, 5, 7$. Separuh atas: $8, 10, 11, 13$.\n\nLangkah 4: $Q_1$ adalah median separuh bawah.\n$Q_1 = \\frac{4 + 5}{2} = 4{,}5$\n\nLangkah 5: $Q_3$ adalah median separuh atas.\n$Q_3 = \\frac{10 + 11}{2} = 10{,}5$\n\nLangkah 6: Perhatikan bahwa ketiga kuartil di sini bukan data asli, melainkan nilai di antara dua data. Hal itu wajar.\n\nKesimpulan: $Q_1 = 4{,}5$, $Q_2 = 7{,}5$, dan $Q_3 = 10{,}5$."
        },
        {
          "problem": "Susunlah statistik lima serangkai data $3, 5, 6, 8, 9, 11, 12, 14, 15$ dan jelaskan bentuk diagram kotak garisnya.",
          "solution": "Langkah 1: Dari Contoh 1: $Q_1 = 5{,}5$, $Q_2 = 9$, $Q_3 = 13$. Nilai terkecil $3$ dan terbesar $15$.\n\nLangkah 2: Statistik lima serangkai.\n$x_{\\min} = 3$, $Q_1 = 5{,}5$, $Q_2 = 9$, $Q_3 = 13$, $x_{\\max} = 15$\n\nLangkah 3: Gambar sebuah garis bilangan yang memuat $3$ sampai $15$.\n\nLangkah 4: Gambar KOTAK dari $Q_1 = 5{,}5$ sampai $Q_3 = 13$, lalu tarik garis tegak di dalamnya pada $Q_2 = 9$.\n\nLangkah 5: Tarik KUMIS kiri dari $5{,}5$ ke $3$, dan kumis kanan dari $13$ ke $15$.\n\nLangkah 6: Kotak memuat $50\\%$ data yang di tengah, sedangkan setiap kumis memuat $25\\%$ data. Kumis kiri ($2{,}5$ satuan) dan kanan ($2$ satuan) hampir sama panjang, jadi ujung-ujung datanya tersebar cukup seimbang.\n\nKesimpulan: Statistik lima serangkainya $3$; $5{,}5$; $9$; $13$; $15$, digambar sebagai kotak dari $5{,}5$ sampai $13$ dengan garis median di $9$ dan kumis ke $3$ dan $15$."
        },
        {
          "problem": "Diagram kotak garis nilai ujian $80$ siswa menunjukkan: nilai terkecil $40$, $Q_1 = 55$, $Q_2 = 65$, $Q_3 = 75$, dan nilai terbesar $95$. Berapa siswa yang nilainya di antara $55$ dan $75$, dan berapa yang nilainya di atas $75$?",
          "solution": "Langkah 1: Kuartil membagi data terurut menjadi empat bagian yang masing-masing berisi sekitar $25\\%$ data.\n\nLangkah 2: Di antara $Q_1 = 55$ dan $Q_3 = 75$ terdapat dua bagian, yaitu $50\\%$ data.\n$50\\% \\times 80 = 40$ siswa\n\nLangkah 3: Di atas $Q_3 = 75$ terdapat satu bagian, yaitu $25\\%$ data.\n$25\\% \\times 80 = 20$ siswa\n\nLangkah 4: Perhatikan bahwa kumis kanan ($75$ ke $95$, panjang $20$) lebih panjang daripada kumis kiri ($40$ ke $55$, panjang $15$). Artinya seperempat siswa teratas nilainya lebih tersebar daripada seperempat terbawah — walaupun banyak siswanya SAMA.\n\nLangkah 5: Panjang bagian diagram tidak menunjukkan banyak data; setiap bagian selalu berisi sekitar seperempat data.\n\nKesimpulan: Sekitar $40$ siswa nilainya di antara $55$ dan $75$, dan sekitar $20$ siswa nilainya di atas $75$."
        },
        {
          "problem": "Tabel nilai $20$ siswa: nilai $5$ ada $2$, $6$ ada $4$, $7$ ada $5$, $8$ ada $6$, dan $9$ ada $3$. Tentukan ketiga kuartilnya.",
          "solution": "Langkah 1: $n = 20$. $Q_2$ adalah rata-rata data ke-$10$ dan ke-$11$; separuh bawah adalah data ke-$1$ sampai ke-$10$, dan separuh atas data ke-$11$ sampai ke-$20$.\n\nLangkah 2: Frekuensi kumulatif.\nnilai $5$: $2$; nilai $6$: $6$; nilai $7$: $11$; nilai $8$: $17$; nilai $9$: $20$\n\nLangkah 3: $Q_2$: data ke-$10$ dan ke-$11$ bernilai $7$.\n$Q_2 = 7$\n\nLangkah 4: $Q_1$ adalah median data ke-$1$ sampai ke-$10$, yaitu rata-rata data ke-$5$ dan ke-$6$. Keduanya bernilai $6$.\n$Q_1 = 6$\n\nLangkah 5: $Q_3$ adalah median data ke-$11$ sampai ke-$20$, yaitu rata-rata data ke-$15$ dan ke-$16$. Keduanya bernilai $8$.\n$Q_3 = 8$\n\nLangkah 6: Frekuensi kumulatif menghindarkan kita dari menuliskan kedua puluh data satu per satu.\n\nKesimpulan: $Q_1 = 6$, $Q_2 = 7$, dan $Q_3 = 8$."
        }
      ],
      "btc": "Kelompok VNPS: Setiap kelompok mengukur tinggi badan (cm) anggota kelas atau memakai data tinggi yang disiapkan guru, minimal $15$ data. Di papan, urutkan datanya, tentukan statistik lima serangkai, lalu gambar diagram kotak garisnya di atas garis bilangan berskala. Tempelkan diagram kelompok-kelompok lain di bawahnya pada skala yang sama. Tuliskan dua kalimat perbandingan: mana yang mediannya lebih tinggi, dan mana yang kotaknya lebih lebar?",
      "summary_data": {
        "summary": [
          "Kuartil membagi data terurut menjadi empat bagian yang sama banyak.",
          "$Q_2$ adalah median seluruh data.",
          "$Q_1$ adalah median separuh bawah, dan $Q_3$ adalah median separuh atas.",
          "Bila $n$ ganjil, data tengah ($Q_2$) tidak ikut ke separuh bawah maupun atas.",
          "Bila $n$ genap, data terbagi tepat menjadi dua separuh yang sama banyak.",
          "Kuartil boleh bukan data asli, misalnya rata-rata dua data yang berdampingan.",
          "Statistik lima serangkai: nilai terkecil, $Q_1$, $Q_2$, $Q_3$, nilai terbesar.",
          "Kotak pada diagram kotak garis memuat sekitar $50\\%$ data yang di tengah.",
          "Setiap kumis memuat sekitar $25\\%$ data; kumis yang panjang berarti data di bagian itu lebih tersebar.",
          "Frekuensi kumulatif memudahkan penentuan kuartil dari tabel frekuensi."
        ],
        "islamic": "Keadilan menuntut takaran dan pembagian yang tepat. \"Dan sempurnakanlah takaran dan timbangan dengan adil.\" (QS. Al-An'am: 152)"
      },
      "collab_cases": [
        "Tentukan $Q_1$, $Q_2$, dan $Q_3$ dari data $12, 15, 9, 20, 18, 11, 14$.",
        "Tentukan $Q_1$, $Q_2$, dan $Q_3$ dari data $3, 7, 8, 5, 12, 14, 21, 13, 18, 10$.",
        "Susunlah statistik lima serangkai data nomor 2 dan gambar diagram kotak garisnya.",
        "Diagram kotak garis nilai $120$ siswa: terkecil $30$, $Q_1 = 50$, $Q_2 = 62$, $Q_3 = 70$, terbesar $98$. Berapa siswa yang nilainya di bawah $50$? Mana yang lebih tersebar, seperempat terbawah atau teratas?",
        "Tabel nilai $24$ siswa: $6$ ada $3$, $7$ ada $7$, $8$ ada $8$, $9$ ada $4$, $10$ ada $2$. Tentukan ketiga kuartilnya."
      ]
    },
    {
      "id": "P43",
      "bab": "Bab 7: Statistika",
      "title": "Ukuran Penyebaran: Jangkauan, Jangkauan Antarkuartil, Ragam, dan Simpangan Baku",
      "obj": [
        "Menghitung jangkauan, jangkauan antarkuartil, dan simpangan kuartil data tunggal.",
        "Menghitung simpangan rata-rata, ragam, dan simpangan baku data tunggal maupun data dalam tabel frekuensi.",
        "Membandingkan keseragaman dua kelompok data yang rata-ratanya sama memakai ukuran penyebaran."
      ],
      "hook": "Dua pemanah sama-sama memperoleh skor rata-rata $7$. Anak panah pemanah pertama menancap di $6, 7, 7, 8, 7$ — rapat mengelilingi pusat. Anak panah pemanah kedua menancap di $3, 5, 7, 9, 11$ — tercecer ke mana-mana. Rata-rata tidak dapat membedakan keduanya, padahal jelas siapa yang lebih konsisten. Yang dibutuhkan adalah ukuran seberapa jauh data MENYEBAR dari pusatnya.",
      "toolkit": [
        {
          "name": "Jangkauan",
          "math": "$$J = x_{\\max} - x_{\\min}$$"
        },
        {
          "name": "Jangkauan Antarkuartil",
          "math": "$$H = Q_3 - Q_1,\\qquad Q_d = \\tfrac{1}{2}(Q_3 - Q_1)$$"
        },
        {
          "name": "Simpangan Rata-rata",
          "math": "$$SR = \\frac{\\sum |x - \\bar{x}|}{n}$$"
        },
        {
          "name": "Ragam",
          "math": "$$s^2 = \\frac{\\sum (x - \\bar{x})^2}{n}$$"
        },
        {
          "name": "Simpangan Baku",
          "math": "$$s = \\sqrt{s^2} = \\sqrt{\\frac{\\sum (x - \\bar{x})^2}{n}}$$"
        }
      ],
      "examples": [
        {
          "problem": "Tentukan jangkauan, jangkauan antarkuartil, dan simpangan kuartil data $4, 7, 9, 10, 12, 15, 18$.",
          "solution": "Langkah 1: Jangkauan adalah selisih nilai terbesar dan terkecil.\n$J = 18 - 4 = 14$\n\nLangkah 2: Tentukan kuartil. $n = 7$, $Q_2 = 10$ (data ke-$4$). Separuh bawah $4, 7, 9$ dan separuh atas $12, 15, 18$.\n$Q_1 = 7$ dan $Q_3 = 15$\n\nLangkah 3: Jangkauan antarkuartil.\n$H = Q_3 - Q_1 = 15 - 7 = 8$\n\nLangkah 4: Simpangan kuartil adalah setengahnya.\n$Q_d = \\frac{1}{2} \\times 8 = 4$\n\nLangkah 5: Jangkauan hanya memakai dua data paling ujung, sehingga sangat peka terhadap nilai ekstrem. Jangkauan antarkuartil hanya melihat $50\\%$ data di tengah, sehingga lebih stabil.\n\nKesimpulan: Jangkauan $14$, jangkauan antarkuartil $8$, dan simpangan kuartil $4$."
        },
        {
          "problem": "Tentukan ragam dan simpangan baku data $2, 4, 4, 4, 5, 5, 7, 9$.",
          "solution": "Langkah 1: Hitung rata-rata lebih dahulu.\n$\\bar{x} = \\frac{2 + 4 + 4 + 4 + 5 + 5 + 7 + 9}{8} = \\frac{40}{8} = 5$\n\nLangkah 2: Hitung simpangan setiap data dari rata-rata, $x - \\bar{x}$.\n$-3, -1, -1, -1, 0, 0, 2, 4$\n\nLangkah 3: Periksa: jumlah simpangan selalu nol. $-3 - 1 - 1 - 1 + 0 + 0 + 2 + 4 = 0$ — cocok. Itulah sebabnya simpangan harus dikuadratkan (atau dimutlakkan) sebelum dijumlahkan.\n\nLangkah 4: Kuadratkan setiap simpangan.\n$9, 1, 1, 1, 0, 0, 4, 16$\n\nLangkah 5: Jumlahkan lalu bagi dengan $n$.\n$s^2 = \\frac{32}{8} = 4$\n\nLangkah 6: Simpangan baku adalah akar ragam.\n$s = \\sqrt{4} = 2$\n\nLangkah 7: Simpangan baku mempunyai satuan yang sama dengan datanya, sedangkan ragam bersatuan kuadrat. Karena itu simpangan baku lebih mudah ditafsirkan.\n\nKesimpulan: Ragamnya $4$ dan simpangan bakunya $2$."
        },
        {
          "problem": "Tentukan simpangan rata-rata data $2, 4, 4, 4, 5, 5, 7, 9$.",
          "solution": "Langkah 1: Rata-ratanya $5$ (lihat Contoh 2).\n\nLangkah 2: Hitung jarak setiap data ke rata-rata dengan nilai mutlak.\n$|{-3}|, |{-1}|, |{-1}|, |{-1}|, 0, 0, |2|, |4| = 3, 1, 1, 1, 0, 0, 2, 4$\n\nLangkah 3: Jumlahkan.\n$3 + 1 + 1 + 1 + 0 + 0 + 2 + 4 = 12$\n\nLangkah 4: Bagi dengan $n$.\n$SR = \\frac{12}{8} = 1{,}5$\n\nLangkah 5: Artinya, secara rata-rata setiap data berjarak $1{,}5$ satuan dari rata-ratanya.\n\nLangkah 6: Simpangan rata-rata ($1{,}5$) lebih kecil daripada simpangan baku ($2$). Pengkuadratan memberi bobot lebih besar pada data yang jauh, seperti $9$.\n\nKesimpulan: Simpangan rata-ratanya $1{,}5$."
        },
        {
          "problem": "Skor dua pemanah: A $= 6, 7, 7, 8, 7$ dan B $= 3, 5, 7, 9, 11$. Bandingkan keseragaman keduanya memakai ragam.",
          "solution": "Langkah 1: Rata-rata A: $\\frac{35}{5} = 7$. Rata-rata B: $\\frac{35}{5} = 7$. Rata-ratanya sama.\n\nLangkah 2: Ragam A. Simpangan: $-1, 0, 0, 1, 0$. Kuadrat: $1, 0, 0, 1, 0$.\n$s_A^2 = \\frac{2}{5} = 0{,}4$\n\nLangkah 3: Ragam B. Simpangan: $-4, -2, 0, 2, 4$. Kuadrat: $16, 4, 0, 4, 16$.\n$s_B^2 = \\frac{40}{5} = 8$\n\nLangkah 4: Ragam B dua puluh kali ragam A.\n\nLangkah 5: Simpangan baku: $s_A = \\sqrt{0{,}4} \\approx 0{,}63$ dan $s_B = \\sqrt{8} = 2\\sqrt{2} \\approx 2{,}83$.\n\nLangkah 6: Semakin kecil ukuran penyebaran, semakin seragam datanya. Jadi pemanah A jauh lebih konsisten.\n\nKesimpulan: Walaupun rata-ratanya sama, ragam A ($0{,}4$) jauh lebih kecil daripada ragam B ($8$), sehingga skor pemanah A lebih seragam."
        },
        {
          "problem": "Tabel nilai: nilai $2$ ada $1$, nilai $4$ ada $3$, nilai $6$ ada $3$, dan nilai $8$ ada $1$. Tentukan ragam dan simpangan bakunya.",
          "solution": "Langkah 1: Hitung rata-rata.\n$\\bar{x} = \\frac{2(1) + 4(3) + 6(3) + 8(1)}{8} = \\frac{40}{8} = 5$\n\nLangkah 2: Hitung simpangan kuadrat setiap nilai.\n$(2 - 5)^2 = 9$, $(4 - 5)^2 = 1$, $(6 - 5)^2 = 1$, $(8 - 5)^2 = 9$\n\nLangkah 3: Kalikan setiap simpangan kuadrat dengan frekuensinya.\n$9(1) + 1(3) + 1(3) + 9(1) = 24$\n\nLangkah 4: Bagi dengan banyak data.\n$s^2 = \\frac{24}{8} = 3$\n\nLangkah 5: Simpangan baku.\n$s = \\sqrt{3} \\approx 1{,}73$\n\nLangkah 6: Kekeliruan yang sering terjadi adalah lupa mengalikan dengan frekuensi, sehingga diperoleh $\\frac{9 + 1 + 1 + 9}{8} = 2{,}5$.\n\nKesimpulan: Ragamnya $3$ dan simpangan bakunya $\\sqrt{3} \\approx 1{,}73$."
        }
      ],
      "btc": "Kelompok VNPS: Setiap anggota kelompok melempar kertas yang diremas ke sebuah keranjang dari jarak yang sama sebanyak lima kali, dan mencatat jarak jatuhnya dari pusat keranjang (cm). Di papan, hitung rata-rata, jangkauan, dan simpangan baku setiap anggota. Siapa yang paling konsisten? Apakah orang dengan rata-rata jarak terkecil selalu juga yang paling konsisten? Diskusikan mengapa kedua ukuran itu menjawab pertanyaan yang berbeda.",
      "summary_data": {
        "summary": [
          "Ukuran penyebaran menunjukkan seberapa jauh data tersebar dari pusatnya.",
          "Jangkauan $J = x_{\\max} - x_{\\min}$ hanya memakai dua data dan sangat peka terhadap nilai ekstrem.",
          "Jangkauan antarkuartil $H = Q_3 - Q_1$ melihat $50\\%$ data di tengah, dan simpangan kuartil $Q_d = \\frac{1}{2}H$.",
          "Jumlah simpangan $\\sum (x - \\bar{x})$ selalu nol, sehingga simpangan dimutlakkan atau dikuadratkan.",
          "Simpangan rata-rata $SR = \\frac{\\sum |x - \\bar{x}|}{n}$.",
          "Ragam $s^2 = \\frac{\\sum (x - \\bar{x})^2}{n}$ bersatuan kuadrat.",
          "Simpangan baku $s = \\sqrt{s^2}$ bersatuan sama dengan data.",
          "Pada tabel frekuensi, setiap simpangan kuadrat dikalikan frekuensinya.",
          "Semakin kecil ukuran penyebaran, semakin seragam (konsisten) datanya.",
          "Jika semua data sama, semua ukuran penyebarannya nol."
        ],
        "islamic": "Keseimbangan adalah amanah yang tidak boleh dirusak. \"Dan langit telah ditinggikan-Nya dan Dia ciptakan keseimbangan, agar kamu jangan merusak keseimbangan itu.\" (QS. Ar-Rahman: 7–8)"
      },
      "collab_cases": [
        "Tentukan jangkauan, jangkauan antarkuartil, dan simpangan kuartil data $6, 9, 11, 13, 14, 17, 20, 22, 25$.",
        "Tentukan ragam dan simpangan baku data $3, 5, 6, 8, 8$.",
        "Tentukan simpangan rata-rata data $10, 12, 14, 16, 18$.",
        "Nilai dua siswa dalam lima ulangan: Andi $70, 72, 75, 78, 80$ dan Budi $55, 65, 75, 85, 95$. Siapa yang nilainya lebih konsisten? Tunjukkan dengan ragam.",
        "Tabel nilai: $5$ ada $2$, $7$ ada $6$, $9$ ada $2$. Tentukan ragam dan simpangan bakunya."
      ]
    },
    {
      "id": "P44",
      "bab": "Bab 7: Statistika",
      "title": "Pencilan, Transformasi Data, dan Membandingkan Kelompok Data",
      "obj": [
        "Menentukan pencilan memakai batas $Q_1 - 1{,}5H$ dan $Q_3 + 1{,}5H$, serta menjelaskan pengaruh pencilan terhadap rata-rata dan median.",
        "Menentukan perubahan ukuran pemusatan dan penyebaran bila setiap data ditambah atau dikalikan dengan bilangan yang sama.",
        "Membandingkan dua kelompok data memakai statistik lima serangkai dan ukuran penyebaran, lalu menarik kesimpulan yang jujur."
      ],
      "hook": "Sembilan siswa mengukur waktu tempuh ke sekolah: kebanyakan $12$ sampai $20$ menit, tetapi satu siswa menulis $45$ menit. Apakah ia tinggal sangat jauh, terjebak macet, atau salah menulis $15$? Nilai yang \"menyendiri\" seperti itu disebut PENCILAN. Pencilan tidak boleh diabaikan begitu saja, tetapi juga tidak boleh dibiarkan menguasai kesimpulan. Pertemuan ini menutup bab Statistika dengan cara mengenali pencilan, memahami apa yang terjadi pada ukuran-ukuran data bila datanya diubah, dan membandingkan dua kelompok data secara adil.",
      "toolkit": [
        {
          "name": "Pagar Pencilan",
          "math": "$$\\text{bawah} = Q_1 - 1{,}5H,\\qquad \\text{atas} = Q_3 + 1{,}5H,\\qquad H = Q_3 - Q_1$$"
        },
        {
          "name": "Pencilan",
          "math": "$$x < \\text{pagar bawah} \\quad \\text{atau} \\quad x > \\text{pagar atas}$$"
        },
        {
          "name": "Setiap Data Ditambah k",
          "math": "$$\\bar{x} \\to \\bar{x} + k;\\quad s,\\ J,\\ H \\text{ tetap}$$"
        },
        {
          "name": "Setiap Data Dikali k",
          "math": "$$\\bar{x} \\to k\\bar{x};\\quad s \\to |k|s;\\quad J \\to |k|J;\\quad s^2 \\to k^2 s^2$$"
        },
        {
          "name": "Bentuk Umum",
          "math": "$$y = ax + b \\Rightarrow \\bar{y} = a\\bar{x} + b,\\quad s_y = |a| s_x$$"
        }
      ],
      "examples": [
        {
          "problem": "Waktu tempuh $9$ siswa (menit): $12, 14, 15, 15, 16, 18, 19, 20, 45$. Tentukan apakah ada pencilan.",
          "solution": "Langkah 1: Tentukan kuartil. $n = 9$, $Q_2 = 16$ (data ke-$5$). Separuh bawah $12, 14, 15, 15$: $Q_1 = 14{,}5$. Separuh atas $18, 19, 20, 45$: $Q_3 = 19{,}5$.\n\nLangkah 2: Jangkauan antarkuartil.\n$H = 19{,}5 - 14{,}5 = 5$\n\nLangkah 3: Hitung pagar bawah.\n$14{,}5 - 1{,}5(5) = 14{,}5 - 7{,}5 = 7$\n\nLangkah 4: Hitung pagar atas.\n$19{,}5 + 7{,}5 = 27$\n\nLangkah 5: Periksa setiap data. Tidak ada data di bawah $7$. Data $45$ melebihi $27$.\n\nLangkah 6: Jadi $45$ adalah pencilan. Langkah berikutnya bukan membuangnya, melainkan memeriksanya: apakah salah catat, atau memang keadaan istimewa?\n\nKesimpulan: Data $45$ adalah pencilan karena melebihi pagar atas $27$."
        },
        {
          "problem": "Dari data Contoh 1, bandingkan rata-rata dan median sebelum dan sesudah pencilan $45$ disisihkan.",
          "solution": "Langkah 1: Dengan $45$: jumlah data $174$, jadi rata-rata $\\frac{174}{9} \\approx 19{,}33$, dan median $16$.\n\nLangkah 2: Tanpa $45$: data $12, 14, 15, 15, 16, 18, 19, 20$, jumlahnya $129$.\n\nLangkah 3: Rata-rata tanpa pencilan.\n$\\frac{129}{8} = 16{,}125$\n\nLangkah 4: Median tanpa pencilan: $n = 8$, rata-rata data ke-$4$ dan ke-$5$.\n$\\frac{15 + 16}{2} = 15{,}5$\n\nLangkah 5: Bandingkan perubahannya. Rata-rata berubah sekitar $3{,}2$ menit, sedangkan median hanya berubah $0{,}5$ menit.\n\nLangkah 6: Rata-rata $19{,}33$ bahkan lebih besar daripada delapan dari sembilan data — tidak mewakili kebanyakan siswa. Inilah alasan median lebih disukai bila ada pencilan.\n\nKesimpulan: Pencilan menggeser rata-rata sekitar $3{,}2$ menit tetapi median hanya $0{,}5$ menit; median lebih tahan terhadap pencilan."
        },
        {
          "problem": "Sekelompok data mempunyai rata-rata $60$, simpangan baku $8$, dan jangkauan $30$. Tentukan ketiga ukuran itu bila (a) setiap data ditambah $5$; (b) setiap data dikalikan $2$.",
          "solution": "Langkah 1: (a) Menambah $5$ menggeser semua data sejauh $5$ ke kanan, tanpa mengubah jarak antardata.\n\nLangkah 2: Rata-rata ikut bergeser.\n$60 + 5 = 65$\n\nLangkah 3: Ukuran penyebaran mengukur JARAK antardata, dan jarak itu tidak berubah.\nsimpangan baku tetap $8$, jangkauan tetap $30$\n\nLangkah 4: (b) Mengalikan $2$ memperbesar semua data sekaligus jarak antardata menjadi dua kali.\n\nLangkah 5: Rata-rata.\n$2 \\times 60 = 120$\nSimpangan baku.\n$2 \\times 8 = 16$\nJangkauan.\n$2 \\times 30 = 60$\n\nLangkah 6: Ragam ikut berubah menjadi $2^2 = 4$ kali: dari $64$ menjadi $256$, karena ragam adalah kuadrat simpangan baku.\n\nKesimpulan: (a) rata-rata $65$, simpangan baku $8$, jangkauan $30$; (b) rata-rata $120$, simpangan baku $16$, jangkauan $60$."
        },
        {
          "problem": "Nilai ujian mempunyai rata-rata $60$ dan simpangan baku $8$. Guru mengubah setiap nilai $x$ menjadi $y = 1{,}5x + 10$. Tentukan rata-rata dan simpangan baku nilai yang baru.",
          "solution": "Langkah 1: Transformasi $y = ax + b$ terdiri dari dua tahap: dikalikan $a = 1{,}5$, lalu ditambah $b = 10$.\n\nLangkah 2: Rata-rata mengikuti kedua tahap.\n$\\bar{y} = 1{,}5(60) + 10 = 90 + 10 = 100$\n\nLangkah 3: Simpangan baku hanya terpengaruh oleh perkalian.\n$s_y = 1{,}5 \\times 8 = 12$\n\nLangkah 4: Penambahan $10$ tidak mengubah simpangan baku, karena hanya menggeser semua nilai.\n\nLangkah 5: Periksa dengan dua nilai contoh: $52$ dan $68$ (berjarak $16$) menjadi $88$ dan $112$ (berjarak $24 = 1{,}5 \\times 16$) — jaraknya dikali $1{,}5$, bukan ditambah $10$.\n\nKesimpulan: Rata-rata baru $100$ dan simpangan baku baru $12$."
        },
        {
          "problem": "Statistik lima serangkai nilai dua kelas: kelas A $= 50; 60; 70; 80; 90$ dan kelas B $= 40; 65; 72; 76; 98$. Bandingkan kedua kelas.",
          "solution": "Langkah 1: Pusat data: median A $= 70$ dan median B $= 72$. Siswa \"tengah\" kelas B sedikit lebih tinggi nilainya.\n\nLangkah 2: Sebaran bagian tengah: $H_A = 80 - 60 = 20$ dan $H_B = 76 - 65 = 11$. Separuh siswa yang di tengah kelas B jauh lebih seragam.\n\nLangkah 3: Sebaran keseluruhan: $J_A = 90 - 50 = 40$ dan $J_B = 98 - 40 = 58$. Kelas B mempunyai nilai-nilai ekstrem yang lebih jauh, di bawah maupun di atas.\n\nLangkah 4: Kesimpulan kelas B \"lebih baik\" atau \"lebih buruk\" terlalu sederhana. Yang jujur: kelas B sedikit lebih tinggi di tengah dan lebih seragam di bagian tengah, tetapi mempunyai siswa-siswa di kedua ujung yang jauh dari kelompoknya.\n\nLangkah 5: Kita TIDAK dapat menyimpulkan rata-rata kelas mana yang lebih besar, karena statistik lima serangkai tidak memuat rata-rata.\n\nKesimpulan: Median B sedikit lebih tinggi dan bagian tengahnya lebih seragam ($H$ lebih kecil), tetapi jangkauan B lebih besar karena nilai-nilai ujungnya lebih ekstrem."
        }
      ],
      "btc": "Kelompok VNPS: Setiap kelompok menerima data nyata yang memuat satu pencilan, misalnya harga sepuluh sepeda di sebuah toko, termasuk satu sepeda balap yang sangat mahal. Di papan, (1) tentukan kuartil dan pagar pencilan, (2) hitung rata-rata dan median dengan dan tanpa pencilan, dan (3) tuliskan dua kalimat laporan: satu yang MENYESATKAN tetapi hitungannya benar, dan satu yang jujur. Kelompok lain menebak mana yang menyesatkan dan menjelaskan mengapa.",
      "summary_data": {
        "summary": [
          "Pencilan adalah data yang jauh terpisah dari sebagian besar data.",
          "Pagar bawah $= Q_1 - 1{,}5H$ dan pagar atas $= Q_3 + 1{,}5H$, dengan $H = Q_3 - Q_1$.",
          "Data di luar kedua pagar disebut pencilan.",
          "Pencilan perlu diperiksa (salah catat atau keadaan istimewa), bukan langsung dibuang.",
          "Pencilan sangat memengaruhi rata-rata, jangkauan, dan simpangan baku, tetapi hampir tidak memengaruhi median dan $H$.",
          "Bila setiap data ditambah $k$, ukuran pemusatan bertambah $k$ dan ukuran penyebaran tetap.",
          "Bila setiap data dikali $k$, ukuran pemusatan dan penyebaran ikut dikali $|k|$, sedangkan ragam dikali $k^2$.",
          "Untuk $y = ax + b$: $\\bar{y} = a\\bar{x} + b$ dan $s_y = |a| s_x$.",
          "Membandingkan dua kelompok memerlukan ukuran pusat DAN ukuran penyebaran.",
          "Kesimpulan dari data harus jujur: tidak melebihi apa yang benar-benar ditunjukkan datanya."
        ],
        "islamic": "Menyajikan data secara jujur adalah bagian dari menegakkan keadilan. \"Wahai orang-orang yang beriman! Jadilah kamu penegak keadilan, menjadi saksi karena Allah, walaupun terhadap dirimu sendiri.\" (QS. An-Nisa: 135)"
      },
      "collab_cases": [
        "Tentukan pagar pencilan dan pencilan (jika ada) dari data $31, 35, 36, 38, 40, 41, 43, 44, 70$.",
        "Data harga (ribu rupiah) $15, 18, 20, 20, 22, 25, 150$. Hitunglah rata-rata dan median dengan dan tanpa $150$, lalu jelaskan ukuran mana yang lebih tepat.",
        "Sekelompok data mempunyai rata-rata $45$ dan simpangan baku $6$. Tentukan rata-rata dan simpangan baku baru bila setiap data dikurangi $5$ lalu dikalikan $3$.",
        "Suhu rata-rata sebuah kota $25^\\circ$C dengan simpangan baku $2^\\circ$C. Tentukan rata-rata dan simpangan bakunya dalam Fahrenheit, memakai $F = 1{,}8C + 32$.",
        "Statistik lima serangkai tinggi badan siswa putra $= 150; 160; 166; 170; 182$ dan putri $= 145; 152; 156; 160; 168$. Bandingkan keduanya dengan tiga kalimat."
      ]
    },
    {
      "id": "P45",
      "bab": "Bab 8: Peluang",
      "title": "Percobaan Acak, Ruang Sampel, dan Kejadian",
      "obj": [
        "Menjelaskan arti percobaan acak, ruang sampel, titik sampel, dan kejadian dengan contoh sehari-hari.",
        "Menyusun ruang sampel dengan cara mendaftar, tabel, dan diagram pohon, lalu menghitung banyaknya titik sampel.",
        "Menentukan anggota suatu kejadian, termasuk kejadian mustahil dan kejadian pasti, serta membedakan titik sampel yang urutannya berbeda."
      ],
      "hook": "Sebelum pertandingan, wasit melempar koin untuk menentukan siapa yang memilih lapangan. Tidak ada yang tahu hasilnya — itulah sebabnya cara itu dianggap adil. Namun walaupun hasil SATU lemparan tidak dapat diramalkan, SEMUA hasil yang mungkin dapat didaftar dengan pasti: angka atau gambar. Matematika peluang bermula dari keyakinan sederhana ini: kita tidak dapat mengetahui apa yang akan terjadi, tetapi kita dapat mengetahui dengan tepat apa saja yang MUNGKIN terjadi.",
      "toolkit": [
        {
          "name": "Ruang Sampel",
          "math": "$$S = \\text{himpunan semua hasil yang mungkin}$$"
        },
        {
          "name": "Titik Sampel",
          "math": "$$\\text{setiap anggota } S;\\quad n(S) = \\text{banyaknya}$$"
        },
        {
          "name": "Kejadian",
          "math": "$$A \\subseteq S;\\quad n(A) = \\text{banyak anggota } A$$"
        },
        {
          "name": "Koin dan Dadu",
          "math": "$$n \\text{ koin}: 2^n;\\qquad n \\text{ dadu}: 6^n;\\qquad 1 \\text{ koin} + 1 \\text{ dadu}: 12$$"
        },
        {
          "name": "Kejadian Khusus",
          "math": "$$\\text{mustahil}: A = \\varnothing;\\qquad \\text{pasti}: A = S$$"
        }
      ],
      "examples": [
        {
          "problem": "Dua koin dilempar bersamaan. Tentukan ruang sampelnya dan kejadian munculnya tepat satu angka.",
          "solution": "Langkah 1: Tandai sisi koin dengan A (angka) dan G (gambar). Tuliskan hasil koin pertama lalu koin kedua.\n\nLangkah 2: Daftar semua kemungkinan.\n$S = \\{AA, AG, GA, GG\\}$, jadi $n(S) = 4$\n\nLangkah 3: Kejadian tepat satu angka: pilih titik sampel yang memuat tepat satu A.\n$\\{AG, GA\\}$, jadi $n = 2$\n\nLangkah 4: Perhatikan bahwa $AG$ dan $GA$ adalah dua titik sampel yang BERBEDA: pada $AG$ koin pertama yang angka, pada $GA$ koin kedua.\n\nLangkah 5: Kekeliruan yang sering terjadi adalah menulis ruang sampelnya $\\{AA, AG, GG\\}$ dengan tiga anggota. Bila kedua koin diberi warna berbeda, jelas terlihat bahwa \"merah angka, biru gambar\" tidak sama dengan \"merah gambar, biru angka\".\n\nKesimpulan: $S = \\{AA, AG, GA, GG\\}$ dengan $n(S) = 4$, dan kejadian tepat satu angka $= \\{AG, GA\\}$."
        },
        {
          "problem": "Tiga koin dilempar bersamaan. Susunlah ruang sampelnya dengan diagram pohon, lalu tentukan kejadian munculnya paling sedikit dua gambar.",
          "solution": "Langkah 1: Diagram pohon: koin pertama bercabang dua (A atau G); setiap cabang bercabang dua lagi untuk koin kedua; dan setiap cabang itu bercabang dua lagi untuk koin ketiga.\n\nLangkah 2: Banyak ujung cabang.\n$2 \\times 2 \\times 2 = 8$\n\nLangkah 3: Baca setiap jalur dari kiri ke kanan.\n$S = \\{AAA, AAG, AGA, AGG, GAA, GAG, GGA, GGG\\}$\n\nLangkah 4: \"Paling sedikit dua gambar\" berarti dua gambar ATAU tiga gambar.\n\nLangkah 5: Pilih anggotanya.\n$\\{AGG, GAG, GGA, GGG\\}$, jadi $n = 4$\n\nLangkah 6: Jangan lupa $GGG$. Kata \"paling sedikit\" memuat juga kemungkinan yang lebih banyak.\n\nKesimpulan: $n(S) = 8$, dan kejadian paling sedikit dua gambar $= \\{AGG, GAG, GGA, GGG\\}$ dengan $4$ anggota."
        },
        {
          "problem": "Dua dadu dilempar bersamaan. Tentukan banyak titik sampelnya dan kejadian jumlah mata dadu $7$.",
          "solution": "Langkah 1: Susun tabel: baris untuk mata dadu pertama ($1$ sampai $6$), kolom untuk mata dadu kedua ($1$ sampai $6$).\n\nLangkah 2: Setiap sel adalah satu titik sampel $(a, b)$.\n$n(S) = 6 \\times 6 = 36$\n\nLangkah 3: Cari pasangan yang jumlahnya $7$. Untuk setiap nilai $a$, pasangannya $b = 7 - a$.\n$(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)$\n\nLangkah 4: Jadi $n = 6$.\n\nLangkah 5: Pada tabel, sel-sel berjumlah $7$ membentuk satu garis diagonal. Jumlah $7$ adalah jumlah yang paling banyak titik sampelnya.\n\nLangkah 6: Sekali lagi, $(3, 4)$ dan $(4, 3)$ dihitung terpisah karena dadunya berbeda.\n\nKesimpulan: $n(S) = 36$, dan kejadian jumlah mata $7$ mempunyai $6$ titik sampel."
        },
        {
          "problem": "Sebuah koin dan sebuah dadu dilempar bersamaan. Tentukan $n(S)$ dan kejadian munculnya angka pada koin dan mata genap pada dadu.",
          "solution": "Langkah 1: Setiap hasil koin (A atau G) dapat berpasangan dengan setiap hasil dadu ($1$ sampai $6$).\n$n(S) = 2 \\times 6 = 12$\n\nLangkah 2: Tuliskan ruang sampelnya.\n$S = \\{(A,1), \\dots, (A,6), (G,1), \\dots, (G,6)\\}$\n\nLangkah 3: Kejadian yang diminta memerlukan DUA syarat sekaligus: koinnya A DAN dadunya genap.\n\nLangkah 4: Pilih anggotanya.\n$\\{(A, 2), (A, 4), (A, 6)\\}$, jadi $n = 3$\n\nLangkah 5: Periksa: dari $6$ titik sampel berawalan A, setengahnya bermata genap — memang $3$.\n\nKesimpulan: $n(S) = 12$, dan kejadiannya $\\{(A, 2), (A, 4), (A, 6)\\}$."
        },
        {
          "problem": "Sebuah dadu dilempar sekali. Tentukan kejadian (a) muncul mata $7$; (b) muncul mata kurang dari $7$; (c) muncul mata faktor dari $6$.",
          "solution": "Langkah 1: Ruang sampelnya $S = \\{1, 2, 3, 4, 5, 6\\}$.\n\nLangkah 2: (a) Tidak ada mata $7$ pada dadu. Kejadiannya $\\varnothing$ — kejadian MUSTAHIL.\n\nLangkah 3: (b) Semua mata dadu kurang dari $7$. Kejadiannya $\\{1, 2, 3, 4, 5, 6\\} = S$ — kejadian PASTI.\n\nLangkah 4: (c) Faktor dari $6$ adalah $1, 2, 3, 6$. Kejadiannya $\\{1, 2, 3, 6\\}$ dengan $4$ anggota.\n\nLangkah 5: Setiap kejadian selalu merupakan himpunan bagian dari $S$, termasuk $\\varnothing$ dan $S$ sendiri.\n\nKesimpulan: (a) $\\varnothing$ (mustahil); (b) $S$ (pasti); (c) $\\{1, 2, 3, 6\\}$."
        }
      ],
      "btc": "Kelompok VNPS: Setiap kelompok memilih satu percobaan — dua koin, tiga koin, koin dan dadu, atau dua dadu. Di papan, susun ruang sampelnya dengan DUA cara (misalnya tabel dan diagram pohon) dan pastikan banyaknya sama. Lalu tulislah tiga kejadian karangan sendiri: satu yang mustahil, satu yang pasti, dan satu yang anggotanya tepat $3$. Kelompok lain memeriksa apakah setiap kejadian itu benar.",
      "summary_data": {
        "summary": [
          "Percobaan acak adalah percobaan yang hasilnya tidak dapat dipastikan sebelumnya, tetapi semua kemungkinannya diketahui.",
          "Ruang sampel $S$ adalah himpunan semua hasil yang mungkin; setiap anggotanya disebut titik sampel.",
          "Kejadian adalah himpunan bagian dari ruang sampel.",
          "$n$ koin mempunyai $2^n$ titik sampel, dan $n$ dadu mempunyai $6^n$ titik sampel.",
          "Ruang sampel dapat disusun dengan mendaftar, tabel, atau diagram pohon.",
          "Titik sampel yang urutannya berbeda, seperti $AG$ dan $GA$ atau $(2, 5)$ dan $(5, 2)$, dihitung terpisah.",
          "\"Paling sedikit $k$\" berarti $k$ atau lebih.",
          "Kejadian mustahil adalah $\\varnothing$; kejadian pasti adalah $S$.",
          "Pada dua dadu, jumlah mata $7$ mempunyai titik sampel terbanyak, yaitu $6$.",
          "Selalu periksa: banyak titik sampel hasil daftar harus sama dengan hasil perkalian."
        ],
        "islamic": "Hanya Allah yang mengetahui dengan pasti apa yang akan terjadi. \"Dan pada sisi Allah-lah kunci-kunci semua yang gaib; tidak ada yang mengetahuinya kecuali Dia sendiri.\" (QS. Al-An'am: 59)"
      },
      "collab_cases": [
        "Susunlah ruang sampel pelemparan dua koin dan satu dadu. Berapa $n(S)$-nya?",
        "Pada pelemparan tiga koin, tentukan kejadian munculnya tepat satu gambar.",
        "Pada pelemparan dua dadu, tentukan kejadian jumlah mata dadu $10$ dan kejadian jumlah mata dadu $13$.",
        "Pada pelemparan dua dadu, tentukan kejadian munculnya mata dadu pertama lebih besar daripada mata dadu kedua. Berapa anggotanya?",
        "Dalam sebuah kantong terdapat kartu bernomor $1$ sampai $10$. Satu kartu diambil. Tentukan kejadian terambil kartu bernomor prima dan kejadian terambil kartu bernomor kelipatan $3$."
      ]
    },
    {
      "id": "P46",
      "bab": "Bab 8: Peluang",
      "title": "Peluang Suatu Kejadian dan Frekuensi Relatif",
      "obj": [
        "Menghitung peluang suatu kejadian dengan rumus $P(A) = \\frac{n(A)}{n(S)}$ pada koin, dadu, kartu, dan pengambilan benda dari kantong.",
        "Menjelaskan kisaran nilai peluang $0 \\le P(A) \\le 1$ beserta arti peluang $0$ dan $1$.",
        "Menghitung frekuensi relatif dari hasil percobaan dan membandingkannya dengan peluang teoretis."
      ],
      "hook": "Kalau sebuah dadu dilempar, seberapa besar kemungkinan muncul mata $6$? Setiap orang merasa tahu jawabannya: \"satu dari enam\". Tetapi apa sebenarnya arti \"satu dari enam\"? Bukan berarti dari enam lemparan pasti muncul satu kali mata $6$ — bisa saja tidak muncul sama sekali, atau muncul tiga kali. Artinya, bila dadu dilempar SANGAT banyak kali, kira-kira seperenam hasilnya bermata $6$. Pertemuan ini memberi angka pada rasa \"kemungkinan\" itu, lalu mengujinya dengan percobaan sungguhan.",
      "toolkit": [
        {
          "name": "Peluang Teoretis",
          "math": "$$P(A) = \\frac{n(A)}{n(S)}$$"
        },
        {
          "name": "Kisaran Peluang",
          "math": "$$0 \\le P(A) \\le 1$$"
        },
        {
          "name": "Nilai Khusus",
          "math": "$$P(\\varnothing) = 0\\ (\\text{mustahil});\\qquad P(S) = 1\\ (\\text{pasti})$$"
        },
        {
          "name": "Frekuensi Relatif",
          "math": "$$f_r(A) = \\frac{\\text{banyak kejadian } A \\text{ muncul}}{\\text{banyak percobaan}}$$"
        },
        {
          "name": "Kartu Remi",
          "math": "$$52 \\text{ kartu}: 4 \\text{ jenis} \\times 13;\\ \\ 26 \\text{ merah},\\ 26 \\text{ hitam};\\ \\ 12 \\text{ bergambar (J, Q, K)}$$"
        }
      ],
      "examples": [
        {
          "problem": "Sebuah dadu dilempar sekali. Tentukan peluang munculnya mata dadu prima.",
          "solution": "Langkah 1: Ruang sampel.\n$S = \\{1, 2, 3, 4, 5, 6\\}$, $n(S) = 6$\n\nLangkah 2: Mata prima: $2, 3, 5$. Ingat bahwa $1$ bukan bilangan prima.\n$n(A) = 3$\n\nLangkah 3: Hitung peluangnya.\n$P(A) = \\frac{3}{6} = \\frac{1}{2}$\n\nLangkah 4: Periksa kisarannya: $0 \\le \\frac{1}{2} \\le 1$ — wajar.\n\nLangkah 5: Rumus $\\frac{n(A)}{n(S)}$ hanya berlaku bila setiap titik sampel MEMPUNYAI KESEMPATAN SAMA untuk muncul. Dadu yang seimbang memenuhi syarat itu.\n\nKesimpulan: Peluang munculnya mata prima adalah $\\frac{1}{2}$."
        },
        {
          "problem": "Dua dadu dilempar bersamaan. Tentukan peluang jumlah mata dadu $7$.",
          "solution": "Langkah 1: Ruang sampel dua dadu: $n(S) = 36$.\n\nLangkah 2: Titik sampel berjumlah $7$.\n$(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)$, jadi $n(A) = 6$\n\nLangkah 3: Hitung peluangnya.\n$P(A) = \\frac{6}{36} = \\frac{1}{6}$\n\nLangkah 4: Bandingkan dengan jumlah $2$, yang hanya dapat terjadi dengan $(1, 1)$: peluangnya $\\frac{1}{36}$. Jumlah $7$ enam kali lebih mungkin.\n\nLangkah 5: Kekeliruan yang sering terjadi adalah menganggap semua jumlah ($2$ sampai $12$) sama mungkinnya, sehingga peluangnya $\\frac{1}{11}$. Jumlah-jumlah itu tidak sama mungkin karena banyak titik sampelnya berbeda.\n\nKesimpulan: Peluang jumlah mata dadu $7$ adalah $\\frac{1}{6}$."
        },
        {
          "problem": "Sebuah kantong berisi $5$ kelereng merah, $3$ biru, dan $2$ hijau. Satu kelereng diambil secara acak. Tentukan peluang terambil kelereng biru dan peluang terambil kelereng kuning.",
          "solution": "Langkah 1: Banyak seluruh kelereng.\n$n(S) = 5 + 3 + 2 = 10$\n\nLangkah 2: Peluang biru.\n$P(\\text{biru}) = \\frac{3}{10}$\n\nLangkah 3: Tidak ada kelereng kuning, jadi kejadian itu mustahil.\n$P(\\text{kuning}) = \\frac{0}{10} = 0$\n\nLangkah 4: Periksa: $P(\\text{merah}) + P(\\text{biru}) + P(\\text{hijau}) = \\frac{5}{10} + \\frac{3}{10} + \\frac{2}{10} = 1$. Jumlah peluang semua kemungkinan yang tidak saling tumpang tindih selalu $1$.\n\nLangkah 5: Setiap kelereng dianggap mempunyai kesempatan sama untuk terambil — itulah arti \"secara acak\".\n\nKesimpulan: $P(\\text{biru}) = \\frac{3}{10}$ dan $P(\\text{kuning}) = 0$."
        },
        {
          "problem": "Satu kartu diambil secara acak dari satu set kartu remi ($52$ kartu). Tentukan peluang terambil kartu As, kartu hati, dan kartu bergambar berwarna merah.",
          "solution": "Langkah 1: Satu set kartu remi berisi $4$ jenis (sekop, hati, wajik, keriting) yang masing-masing $13$ kartu: As, $2$ sampai $10$, J, Q, K. Hati dan wajik berwarna merah.\n\nLangkah 2: Kartu As ada $4$, satu dari setiap jenis.\n$P(\\text{As}) = \\frac{4}{52} = \\frac{1}{13}$\n\nLangkah 3: Kartu hati ada $13$.\n$P(\\text{hati}) = \\frac{13}{52} = \\frac{1}{4}$\n\nLangkah 4: Kartu bergambar (J, Q, K) berwarna merah: $3$ dari hati dan $3$ dari wajik.\n$P = \\frac{6}{52} = \\frac{3}{26}$\n\nLangkah 5: Perhatikan bahwa As tidak termasuk kartu bergambar; kartu bergambar hanya J, Q, dan K.\n\nKesimpulan: $P(\\text{As}) = \\frac{1}{13}$, $P(\\text{hati}) = \\frac{1}{4}$, dan $P(\\text{bergambar merah}) = \\frac{3}{26}$."
        },
        {
          "problem": "Sebuah koin dilempar $100$ kali dan muncul angka sebanyak $46$ kali. Tentukan frekuensi relatif munculnya angka dan bandingkan dengan peluang teoretisnya.",
          "solution": "Langkah 1: Frekuensi relatif adalah perbandingan banyak kemunculan dengan banyak percobaan.\n$f_r = \\frac{46}{100} = 0{,}46$\n\nLangkah 2: Peluang teoretis munculnya angka pada koin seimbang.\n$P = \\frac{1}{2} = 0{,}5$\n\nLangkah 3: Keduanya tidak sama persis, tetapi berdekatan. Selisih seperti itu wajar dalam percobaan sungguhan.\n\nLangkah 4: Bila koin dilempar $1.000$ atau $10.000$ kali, frekuensi relatifnya cenderung makin mendekati $0{,}5$.\n\nLangkah 5: Bila frekuensi relatifnya tetap jauh dari $0{,}5$ walaupun percobaannya sangat banyak (misalnya $0{,}3$ dari $10.000$ lemparan), ada alasan untuk menduga koinnya tidak seimbang.\n\nKesimpulan: Frekuensi relatifnya $0{,}46$, dekat dengan peluang teoretis $0{,}5$; makin banyak percobaan, keduanya cenderung makin dekat."
        }
      ],
      "btc": "Kelompok VNPS: Setiap kelompok melempar dua koin sebanyak $40$ kali dan mencatat banyaknya muncul $0$, $1$, dan $2$ angka. Di papan, hitung frekuensi relatif ketiganya, lalu bandingkan dengan peluang teoretis $\\frac{1}{4}$, $\\frac{1}{2}$, dan $\\frac{1}{4}$. Gabungkan hasil seluruh kelompok menjadi satu tabel. Apakah frekuensi relatif gabungan lebih dekat ke peluang teoretis daripada hasil satu kelompok? Jelaskan mengapa.",
      "summary_data": {
        "summary": [
          "Peluang kejadian $A$: $P(A) = \\frac{n(A)}{n(S)}$, bila setiap titik sampel berkesempatan sama.",
          "Nilai peluang selalu $0 \\le P(A) \\le 1$.",
          "Peluang kejadian mustahil $0$, dan peluang kejadian pasti $1$.",
          "Jumlah peluang semua kemungkinan yang tidak tumpang tindih sama dengan $1$.",
          "Pada dua dadu, jumlah-jumlah mata tidak sama mungkin; jumlah $7$ paling mungkin.",
          "Kartu remi: $52$ kartu, $4$ jenis masing-masing $13$, $26$ merah, $12$ kartu bergambar (J, Q, K).",
          "Bilangan $1$ bukan bilangan prima.",
          "Frekuensi relatif $=$ banyak kemunculan dibagi banyak percobaan.",
          "Frekuensi relatif cenderung mendekati peluang teoretis bila percobaan diulang sangat banyak kali.",
          "Peluang $\\frac{1}{6}$ tidak berarti pasti muncul sekali dalam enam percobaan."
        ],
        "islamic": "Masa depan adalah rahasia Allah; manusia hanya dapat memperkirakan dan berusaha. \"Dan tidak ada seorang pun yang dapat mengetahui (dengan pasti) apa yang akan diusahakannya besok.\" (QS. Luqman: 34)"
      },
      "collab_cases": [
        "Sebuah dadu dilempar sekali. Tentukan peluang munculnya mata kelipatan $3$.",
        "Dua dadu dilempar bersamaan. Tentukan peluang jumlah mata dadu $10$.",
        "Sebuah kantong berisi $6$ bola merah dan $4$ bola putih. Tentukan peluang terambil bola putih.",
        "Satu kartu diambil dari satu set kartu remi. Tentukan peluang terambil kartu King berwarna hitam.",
        "Sebuah dadu dilempar $60$ kali dan mata $4$ muncul $13$ kali. Tentukan frekuensi relatifnya dan bandingkan dengan peluang teoretisnya."
      ]
    },
    {
      "id": "P47",
      "bab": "Bab 8: Peluang",
      "title": "Peluang Komplemen dan Frekuensi Harapan",
      "obj": [
        "Menghitung peluang komplemen suatu kejadian dengan $P(A') = 1 - P(A)$, terutama untuk kejadian berkata kunci \"paling sedikit satu\" atau \"bukan\".",
        "Menghitung frekuensi harapan $F_h(A) = n \\times P(A)$ dan menafsirkannya sebagai perkiraan, bukan kepastian.",
        "Memakai peluang dan frekuensi harapan dalam masalah nyata seperti pertanian, produksi, dan cuaca."
      ],
      "hook": "Tiga koin dilempar. Berapa peluang munculnya paling sedikit satu angka? Kita dapat mendaftar semua kemungkinan yang memuat angka — ada tujuh. Tetapi lihatlah dari sisi sebaliknya: hanya ADA SATU cara untuk TIDAK mendapat angka sama sekali, yaitu $GGG$. Menghitung yang sedikit lalu mengurangkannya dari seluruhnya sering jauh lebih cepat. Itulah gagasan peluang komplemen. Pertemuan ini juga menjawab pertanyaan praktis: bila suatu percobaan diulang ratusan kali, KIRA-KIRA berapa kali suatu kejadian akan muncul?",
      "toolkit": [
        {
          "name": "Komplemen",
          "math": "$$A' = \\text{kejadian BUKAN } A$$"
        },
        {
          "name": "Peluang Komplemen",
          "math": "$$P(A') = 1 - P(A)$$"
        },
        {
          "name": "Paling Sedikit Satu",
          "math": "$$P(\\text{paling sedikit satu}) = 1 - P(\\text{tidak ada sama sekali})$$"
        },
        {
          "name": "Frekuensi Harapan",
          "math": "$$F_h(A) = n \\times P(A)$$"
        },
        {
          "name": "Arti Frekuensi Harapan",
          "math": "$$\\text{perkiraan banyak kemunculan, bukan kepastian}$$"
        }
      ],
      "examples": [
        {
          "problem": "Dua dadu dilempar bersamaan. Tentukan peluang jumlah mata dadu BUKAN $7$.",
          "solution": "Langkah 1: Hitung dulu peluang kejadian yang lebih mudah, yaitu jumlah mata $7$.\n$P(A) = \\frac{6}{36} = \\frac{1}{6}$\n\nLangkah 2: \"Bukan $7$\" adalah komplemennya.\n$P(A') = 1 - \\frac{1}{6} = \\frac{5}{6}$\n\nLangkah 3: Cara langsung memerlukan penghitungan $30$ titik sampel yang jumlahnya bukan $7$. Cara komplemen hanya memerlukan $6$.\n\nLangkah 4: Periksa: $\\frac{1}{6} + \\frac{5}{6} = 1$ — setiap hasil pasti termasuk salah satu dari keduanya.\n\nKesimpulan: Peluang jumlah mata dadu bukan $7$ adalah $\\frac{5}{6}$."
        },
        {
          "problem": "Tiga koin dilempar bersamaan. Tentukan peluang munculnya paling sedikit satu angka.",
          "solution": "Langkah 1: Komplemen dari \"paling sedikit satu angka\" adalah \"tidak ada angka sama sekali\", yaitu $GGG$.\n\nLangkah 2: Peluang tidak ada angka.\n$P(GGG) = \\frac{1}{8}$\n\nLangkah 3: Pakai komplemen.\n$P(\\text{paling sedikit satu angka}) = 1 - \\frac{1}{8} = \\frac{7}{8}$\n\nLangkah 4: Periksa dengan mendaftar: dari $8$ titik sampel, hanya $GGG$ yang tidak memuat angka, jadi $7$ yang memuat — cocok.\n\nLangkah 5: Kata kunci \"paling sedikit satu\" hampir selalu menjadi tanda untuk memakai komplemen.\n\nKesimpulan: Peluang munculnya paling sedikit satu angka adalah $\\frac{7}{8}$."
        },
        {
          "problem": "Sebuah dadu dilempar $120$ kali. Tentukan frekuensi harapan munculnya mata $3$.",
          "solution": "Langkah 1: Peluang munculnya mata $3$ pada satu lemparan.\n$P = \\frac{1}{6}$\n\nLangkah 2: Kalikan dengan banyak percobaan.\n$F_h = 120 \\times \\frac{1}{6} = 20$\n\nLangkah 3: Artinya, dari $120$ lemparan DIHARAPKAN sekitar $20$ kali muncul mata $3$.\n\nLangkah 4: Dalam percobaan sungguhan, hasilnya mungkin $17$ atau $23$ kali. Frekuensi harapan adalah perkiraan terbaik, bukan hasil yang pasti.\n\nKesimpulan: Frekuensi harapan munculnya mata $3$ adalah $20$ kali."
        },
        {
          "problem": "Dua koin dilempar bersamaan sebanyak $200$ kali. Tentukan frekuensi harapan munculnya dua gambar.",
          "solution": "Langkah 1: Ruang sampel satu kali lemparan: $\\{AA, AG, GA, GG\\}$.\n\nLangkah 2: Peluang dua gambar.\n$P(GG) = \\frac{1}{4}$\n\nLangkah 3: Frekuensi harapan.\n$F_h = 200 \\times \\frac{1}{4} = 50$\n\nLangkah 4: Perhatikan bahwa \"banyak percobaan\" adalah $200$ kali melempar dua koin, bukan $400$ koin.\n\nLangkah 5: Bandingkan dengan \"tepat satu gambar\", yang peluangnya $\\frac{2}{4}$: frekuensi harapannya $100$, dua kali lebih sering.\n\nKesimpulan: Frekuensi harapan munculnya dua gambar adalah $50$ kali."
        },
        {
          "problem": "Peluang sebuah bibit cabai tumbuh adalah $0{,}85$. Seorang petani menanam $400$ bibit. Berapa bibit yang diharapkan tumbuh, dan berapa yang diharapkan tidak tumbuh?",
          "solution": "Langkah 1: Frekuensi harapan bibit tumbuh.\n$F_h = 400 \\times 0{,}85 = 340$\n\nLangkah 2: Peluang tidak tumbuh adalah komplemennya.\n$1 - 0{,}85 = 0{,}15$\n\nLangkah 3: Frekuensi harapan bibit tidak tumbuh.\n$400 \\times 0{,}15 = 60$\n\nLangkah 4: Periksa: $340 + 60 = 400$ — cocok.\n\nLangkah 5: Perkiraan ini berguna bagi petani untuk menyiapkan cadangan bibit, misalnya menanam sedikit lebih banyak agar tetap mendapat jumlah tanaman yang diinginkan.\n\nKesimpulan: Diharapkan $340$ bibit tumbuh dan $60$ bibit tidak tumbuh."
        }
      ],
      "btc": "Kelompok VNPS: Setiap kelompok melempar tiga koin sebanyak $40$ kali dan mencatat berapa kali muncul \"paling sedikit satu angka\". Sebelum melempar, tuliskan di papan frekuensi harapannya ($40 \\times \\frac{7}{8} = 35$). Setelah selesai, bandingkan hasil nyata dengan harapan. Gabungkan hasil semua kelompok: apakah hasil gabungannya lebih dekat ke frekuensi harapan gabungan? Diskusikan juga: mengapa lebih mudah menghitung \"paling sedikit satu angka\" melalui komplemennya?",
      "summary_data": {
        "summary": [
          "Komplemen kejadian $A$, ditulis $A'$, adalah kejadian \"bukan $A$\".",
          "$P(A) + P(A') = 1$, sehingga $P(A') = 1 - P(A)$.",
          "Pakai komplemen bila kejadian sebaliknya lebih mudah dihitung.",
          "Komplemen \"paling sedikit satu\" adalah \"tidak ada sama sekali\".",
          "Frekuensi harapan $F_h(A) = n \\times P(A)$, dengan $n$ banyak percobaan.",
          "Frekuensi harapan adalah perkiraan; hasil nyata dapat sedikit berbeda.",
          "Frekuensi harapan tidak harus bilangan bulat, misalnya $10 \\times \\frac{1}{6} \\approx 1{,}67$.",
          "Banyak percobaan dihitung per pengulangan, bukan per benda: $200$ kali melempar dua koin berarti $n = 200$.",
          "Frekuensi harapan kejadian dan komplemennya berjumlah $n$.",
          "Peluang dan frekuensi harapan membantu merencanakan kegiatan nyata seperti bertani dan berproduksi."
        ],
        "islamic": "Berusaha sebaik-baiknya, lalu bertawakal atas hasilnya. Rasulullah ﷺ bersabda kepada seorang sahabat: \"Ikatlah (untamu), kemudian bertawakallah.\" (HR. At-Tirmidzi)"
      },
      "collab_cases": [
        "Sebuah dadu dilempar sekali. Tentukan peluang munculnya mata bukan $6$.",
        "Empat koin dilempar bersamaan. Tentukan peluang munculnya paling sedikit satu gambar.",
        "Dua dadu dilempar $144$ kali. Tentukan frekuensi harapan munculnya mata kembar.",
        "Peluang seorang siswa terlambat pada suatu hari adalah $0{,}05$. Dalam $200$ hari sekolah, berapa hari siswa itu diharapkan TIDAK terlambat?",
        "Dua dadu dilempar bersamaan. Tentukan peluang munculnya paling sedikit satu mata $6$ dengan memakai komplemen."
      ]
    },
    {
      "id": "P48",
      "bab": "Bab 8: Peluang",
      "title": "Peluang Kejadian Majemuk: Saling Lepas dan Saling Bebas",
      "obj": [
        "Menghitung peluang gabungan dua kejadian dengan $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.",
        "Mengenali kejadian saling lepas ($A \\cap B = \\varnothing$) dan menghitung peluangnya dengan menjumlahkan.",
        "Mengenali kejadian saling bebas dan menghitung peluang kedua kejadian terjadi bersamaan dengan mengalikan."
      ],
      "hook": "Sebuah dadu dilempar. Peluang mata genap $\\frac{3}{6}$, peluang mata prima $\\frac{3}{6}$. Apakah peluang mata genap ATAU prima sama dengan $\\frac{3}{6} + \\frac{3}{6} = 1$, yaitu pasti? Tentu tidak — mata $1$ tidak genap dan tidak prima! Kesalahannya: mata $2$ terhitung dua kali, sekali sebagai genap dan sekali sebagai prima. Pertemuan terakhir kelas X ini mengajarkan cara menggabungkan dua kejadian dengan benar: kapan peluang boleh dijumlahkan, kapan harus dikurangi bagian yang tumpang tindih, dan kapan justru harus dikalikan.",
      "toolkit": [
        {
          "name": "Gabungan (ATAU)",
          "math": "$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$"
        },
        {
          "name": "Saling Lepas",
          "math": "$$A \\cap B = \\varnothing \\Rightarrow P(A \\cup B) = P(A) + P(B)$$"
        },
        {
          "name": "Saling Bebas (DAN)",
          "math": "$$P(A \\cap B) = P(A) \\times P(B)$$"
        },
        {
          "name": "Tanda Saling Lepas",
          "math": "$$\\text{tidak mungkin terjadi bersamaan dalam satu percobaan}$$"
        },
        {
          "name": "Tanda Saling Bebas",
          "math": "$$\\text{hasil yang satu tidak memengaruhi peluang yang lain}$$"
        }
      ],
      "examples": [
        {
          "problem": "Sebuah dadu dilempar sekali. Tentukan peluang munculnya mata genap atau mata prima.",
          "solution": "Langkah 1: Kejadian $A$ (genap) $= \\{2, 4, 6\\}$ dan kejadian $B$ (prima) $= \\{2, 3, 5\\}$.\n\nLangkah 2: Irisannya — yang genap sekaligus prima.\n$A \\cap B = \\{2\\}$\n\nLangkah 3: Pakai rumus gabungan.\n$P(A \\cup B) = \\frac{3}{6} + \\frac{3}{6} - \\frac{1}{6} = \\frac{5}{6}$\n\nLangkah 4: Periksa dengan mendaftar: $A \\cup B = \\{2, 3, 4, 5, 6\\}$, ada $5$ anggota, jadi $\\frac{5}{6}$ — cocok.\n\nLangkah 5: Suku $-P(A \\cap B)$ mengoreksi mata $2$ yang terhitung dua kali. Tanpa koreksi itu, hasilnya $1$ — keliru, karena mata $1$ tidak termasuk.\n\nKesimpulan: Peluang munculnya mata genap atau prima adalah $\\frac{5}{6}$."
        },
        {
          "problem": "Dua dadu dilempar bersamaan. Tentukan peluang jumlah mata dadu $5$ atau $9$.",
          "solution": "Langkah 1: Jumlah $5$ dan jumlah $9$ tidak mungkin terjadi pada satu lemparan yang sama. Kedua kejadian SALING LEPAS.\n\nLangkah 2: Jumlah $5$: $(1, 4), (2, 3), (3, 2), (4, 1)$.\n$P = \\frac{4}{36}$\n\nLangkah 3: Jumlah $9$: $(3, 6), (4, 5), (5, 4), (6, 3)$.\n$P = \\frac{4}{36}$\n\nLangkah 4: Karena saling lepas, peluangnya langsung dijumlahkan.\n$P = \\frac{4}{36} + \\frac{4}{36} = \\frac{8}{36} = \\frac{2}{9}$\n\nLangkah 5: Pada kejadian saling lepas, $P(A \\cap B) = 0$, sehingga rumus gabungan menjadi penjumlahan biasa.\n\nKesimpulan: Peluang jumlah mata dadu $5$ atau $9$ adalah $\\frac{2}{9}$."
        },
        {
          "problem": "Satu kartu diambil dari satu set kartu remi. Tentukan peluang terambil kartu As atau kartu hati.",
          "solution": "Langkah 1: Kartu As ada $4$; kartu hati ada $13$.\n\nLangkah 2: Kedua kejadian TIDAK saling lepas: As hati termasuk keduanya.\n$n(\\text{As} \\cap \\text{hati}) = 1$\n\nLangkah 3: Pakai rumus gabungan.\n$P = \\frac{4}{52} + \\frac{13}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13}$\n\nLangkah 4: Periksa dengan menghitung langsung: $13$ kartu hati ditambah $3$ As yang bukan hati $= 16$ kartu — cocok.\n\nLangkah 5: Kekeliruan yang sering terjadi adalah menjawab $\\frac{17}{52}$, karena As hati terhitung dua kali.\n\nKesimpulan: Peluang terambil kartu As atau hati adalah $\\frac{4}{13}$."
        },
        {
          "problem": "Sebuah koin dan sebuah dadu dilempar bersamaan. Tentukan peluang munculnya angka pada koin dan mata $6$ pada dadu.",
          "solution": "Langkah 1: Hasil koin tidak memengaruhi hasil dadu, dan sebaliknya. Kedua kejadian SALING BEBAS.\n\nLangkah 2: Peluang masing-masing.\n$P(\\text{angka}) = \\frac{1}{2}$ dan $P(\\text{mata } 6) = \\frac{1}{6}$\n\nLangkah 3: Karena saling bebas, peluang keduanya terjadi bersamaan adalah hasil kalinya.\n$P = \\frac{1}{2} \\times \\frac{1}{6} = \\frac{1}{12}$\n\nLangkah 4: Periksa dengan ruang sampel: dari $12$ titik sampel, hanya $(A, 6)$ yang memenuhi, jadi $\\frac{1}{12}$ — cocok.\n\nLangkah 5: Perhatikan kata penghubungnya: \"atau\" mengarah ke penjumlahan (gabungan), sedangkan \"dan\" pada kejadian saling bebas mengarah ke perkalian.\n\nKesimpulan: Peluangnya $\\frac{1}{12}$."
        },
        {
          "problem": "Kantong I berisi $3$ bola merah dan $2$ bola putih. Kantong II berisi $4$ bola merah dan $6$ bola putih. Dari setiap kantong diambil satu bola. Tentukan peluang kedua bola berwarna merah.",
          "solution": "Langkah 1: Pengambilan dari kantong I tidak memengaruhi isi kantong II. Kedua kejadian saling bebas.\n\nLangkah 2: Peluang merah dari kantong I.\n$\\frac{3}{5}$\n\nLangkah 3: Peluang merah dari kantong II.\n$\\frac{4}{10} = \\frac{2}{5}$\n\nLangkah 4: Kalikan.\n$P = \\frac{3}{5} \\times \\frac{2}{5} = \\frac{6}{25}$\n\nLangkah 5: Kekeliruan yang sering terjadi adalah menggabungkan isi kedua kantong menjadi satu ($7$ merah dari $15$ bola) sehingga menjawab $\\frac{7}{15}$. Kedua kantong adalah percobaan terpisah.\n\nKesimpulan: Peluang kedua bola berwarna merah adalah $\\frac{6}{25}$."
        }
      ],
      "btc": "Kelompok VNPS: Di papan, setiap kelompok menulis EMPAT pasangan kejadian karangan sendiri dari percobaan dadu, koin, atau kartu — dua pasangan yang saling lepas dan dua yang tidak. Tukarkan dengan kelompok lain, yang harus menentukan mana yang saling lepas, menghitung peluang gabungannya, dan menjelaskan alasannya. Terakhir, setiap kelompok merancang satu soal \"dua kantong\" yang memakai perkalian, lalu memeriksa jawabannya dengan mendaftar semua pasangan hasil.",
      "summary_data": {
        "summary": [
          "Peluang gabungan: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.",
          "Suku $-P(A \\cap B)$ mengoreksi titik sampel yang terhitung dua kali.",
          "Dua kejadian saling lepas bila tidak mungkin terjadi bersamaan, yaitu $A \\cap B = \\varnothing$.",
          "Untuk kejadian saling lepas: $P(A \\cup B) = P(A) + P(B)$.",
          "Dua kejadian saling bebas bila terjadinya yang satu tidak memengaruhi peluang yang lain.",
          "Untuk kejadian saling bebas: $P(A \\cap B) = P(A) \\times P(B)$.",
          "Kata \"atau\" biasanya berarti gabungan; kata \"dan\" pada kejadian saling bebas berarti perkalian.",
          "Hasil koin dan dadu, atau pengambilan dari dua kantong berbeda, adalah contoh kejadian saling bebas.",
          "Kejadian genap dan ganjil pada satu dadu adalah contoh kejadian saling lepas.",
          "Selalu periksa jawaban dengan mendaftar ruang sampel bila ruang sampelnya kecil."
        ],
        "islamic": "Setelah berikhtiar dengan sungguh-sungguh, serahkan hasilnya kepada Allah. \"Kemudian apabila engkau telah membulatkan tekad, maka bertawakallah kepada Allah. Sungguh, Allah mencintai orang-orang yang bertawakal.\" (QS. Ali 'Imran: 159)"
      },
      "collab_cases": [
        "Sebuah dadu dilempar sekali. Tentukan peluang munculnya mata ganjil atau mata kelipatan $3$.",
        "Dua dadu dilempar bersamaan. Tentukan peluang jumlah mata dadu $4$ atau $10$.",
        "Satu kartu diambil dari satu set kartu remi. Tentukan peluang terambil kartu bergambar (J, Q, K) atau kartu wajik.",
        "Dua dadu dilempar bersamaan. Tentukan peluang munculnya mata genap pada dadu pertama dan mata $5$ pada dadu kedua.",
        "Kantong A berisi $2$ bola merah dan $3$ bola biru; kantong B berisi $5$ bola merah dan $5$ bola biru. Satu bola diambil dari setiap kantong. Tentukan peluang terambil satu merah dari A dan satu biru dari B."
      ]
    }
  ],
  "clil": [],
  "minat": [],
  "tka_wajib": {
    "P01": {
      "id": "P01",
      "subject": "wajib",
      "title": "P01 • Bilangan Berpangkat dan Sifat-Sifat Dasarnya",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P01-Q1] Bentuk $3^4$ berarti $\\dots$",
          "opsi": [
            "A. $3 \\times 4$",
            "B. $4 \\times 4 \\times 4$",
            "C. $3 \\times 3 \\times 3 \\times 3$",
            "D. $3 + 3 + 3 + 3$",
            "E. $4 \\times 3 \\times 3$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P01-Q2] Nilai dari $2^5 \\cdot 2^3$ adalah $\\dots$",
          "opsi": [
            "A. $2^{15}$",
            "B. $64$",
            "C. $32768$",
            "D. $256$",
            "E. $16$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P01-Q3] Bentuk sederhana dari $\\dfrac{5^8}{5^5}$ adalah $\\dots$",
          "opsi": [
            "A. $125$",
            "B. $5^{13}$",
            "C. $625$",
            "D. $5^{40}$",
            "E. $1$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P01-Q4] Nilai dari $(4^3)^2$ adalah $\\dots$",
          "opsi": [
            "A. $64$",
            "B. $128$",
            "C. $512$",
            "D. $1024$",
            "E. $4096$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P01-Q5] Bentuk sederhana dari $\\dfrac{(2x^3)^4}{x^7}$ untuk $x \\neq 0$ adalah $\\dots$",
          "opsi": [
            "A. $2x^5$",
            "B. $16x^5$",
            "C. $8x^5$",
            "D. $16x^{12}$",
            "E. $2x^{12}$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P01-Q6] Nilai dari $(-3)^4 - (-3)^3$ adalah $\\dots$",
          "opsi": [
            "A. $54$",
            "B. $-108$",
            "C. $-54$",
            "D. $108$",
            "E. $0$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P01-Q7] Nilai dari $\\dfrac{9^3 \\cdot 3^4}{27^2}$ adalah $\\dots$",
          "opsi": [
            "A. $81$",
            "B. $27$",
            "C. $243$",
            "D. $9$",
            "E. $3$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P01-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) $2^3 \\cdot 3^2 = 6^5$",
            "(2) $(-5)^2 = 25$ dan $-5^2 = -25$",
            "(3) $(3a^2)^3 = 27a^6$"
          ],
          "kunci": "S - B - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P01-Q9] Pilihlah SEMUA bentuk yang nilainya sama dengan $2^6$.",
          "opsi": [
            "A. $2^2 \\cdot 2^4$",
            "B. $(2^2)^3$",
            "C. $2^3 \\cdot 2^3$",
            "D. $\\dfrac{2^{10}}{2^5}$",
            "E. $4^3$"
          ],
          "kunci": "A, B, C, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P01-Q10] Nilai dari $\\dfrac{(5^3)^2 \\cdot 5}{5^5}$ adalah $\\dots$",
          "opsi": [],
          "kunci": "25",
          "bahas": ""
        }
      ]
    },
    "P02": {
      "id": "P02",
      "subject": "wajib",
      "title": "P02 • Pangkat Nol, Pangkat Bulat Negatif, dan Notasi Ilmiah",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P02-Q1] Alasan yang tepat mengapa $7^0 = 1$ adalah $\\dots$",
          "opsi": [
            "A. karena setiap bilangan yang tidak dikalikan bernilai nol",
            "B. karena $\\frac{7^3}{7^3}$ sama dengan $7^{3-3} = 7^0$, sedangkan pembagian itu juga bernilai $1$",
            "C. karena nol adalah bilangan netral pada perkalian",
            "D. karena $7 \\times 0 = 0$ lalu ditambah satu",
            "E. karena semua bilangan berpangkat selalu berakhir di satu"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P02-Q2] Nilai dari $3^{-2}$ adalah $\\dots$",
          "opsi": [
            "A. $-9$",
            "B. $-6$",
            "C. $9$",
            "D. $-\\dfrac{1}{9}$",
            "E. $\\dfrac{1}{9}$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P02-Q3] Nilai dari $\\left(\\dfrac{2}{3}\\right)^{-3}$ adalah $\\dots$",
          "opsi": [
            "A. $\\dfrac{8}{27}$",
            "B. $-\\dfrac{27}{8}$",
            "C. $\\dfrac{27}{8}$",
            "D. $\\dfrac{6}{9}$",
            "E. $-\\dfrac{8}{27}$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P02-Q4] Bentuk sederhana dari $\\dfrac{4^{-2} \\cdot 4^{5}}{4^{2}}$ adalah $\\dots$",
          "opsi": [
            "A. $4$",
            "B. $16$",
            "C. $\\dfrac{1}{4}$",
            "D. $1$",
            "E. $64$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P02-Q5] Bentuk notasi ilmiah dari $0{,}00072$ adalah $\\dots$",
          "opsi": [
            "A. $72 \\times 10^{-5}$",
            "B. $7{,}2 \\times 10^{-3}$",
            "C. $0{,}72 \\times 10^{-3}$",
            "D. $7{,}2 \\times 10^{-4}$",
            "E. $7{,}2 \\times 10^{4}$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P02-Q6] Nilai dari $\\left(2^{-1} + 3^{-1}\\right)^{-1}$ adalah $\\dots$",
          "opsi": [
            "A. $5$",
            "B. $\\dfrac{6}{5}$",
            "C. $\\dfrac{5}{6}$",
            "D. $\\dfrac{1}{5}$",
            "E. $6$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P02-Q7] Nilai dari $\\dfrac{2^{-3} \\cdot 8^{2}}{4^{-1}}$ adalah $\\dots$",
          "opsi": [
            "A. $2$",
            "B. $8$",
            "C. $\\dfrac{1}{32}$",
            "D. $16$",
            "E. $32$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P02-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) $5^{-2}$ bernilai negatif",
            "(2) $\\left(\\frac{4}{7}\\right)^{-1} = \\frac{7}{4}$",
            "(3) $\\frac{a^{5}}{a^{-3}} = a^{8}$ untuk $a \\neq 0$"
          ],
          "kunci": "S - B - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P02-Q9] Pilihlah SEMUA bentuk yang nilainya sama dengan $\\dfrac{1}{4}$.",
          "opsi": [
            "A. $2^{-2}$",
            "B. $4^{-1}$",
            "C. $\\left(\\dfrac{1}{2}\\right)^{2}$",
            "D. $(-2)^{-2}$",
            "E. $-4^{-1}$"
          ],
          "kunci": "A, B, C, D",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P02-Q10] Nilai dari $\\left(\\dfrac{1}{5}\\right)^{-3}$ adalah $\\dots$",
          "opsi": [],
          "kunci": "125",
          "bahas": ""
        }
      ]
    },
    "P03": {
      "id": "P03",
      "subject": "wajib",
      "title": "P03 • Bentuk Akar dan Pangkat Rasional",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P03-Q1] Pernyataan $\\sqrt[4]{a} = b$ setara dengan $\\dots$",
          "opsi": [
            "A. $a^4 = b$",
            "B. $4b = a$",
            "C. $b^{\\frac{1}{4}} = a$",
            "D. $b^4 = a$",
            "E. $4a = b$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P03-Q2] Bentuk paling sederhana dari $\\sqrt{72}$ adalah $\\dots$",
          "opsi": [
            "A. $6\\sqrt{2}$",
            "B. $12$",
            "C. $8\\sqrt{2}$",
            "D. $36\\sqrt{2}$",
            "E. $12\\sqrt{6}$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P03-Q3] Nilai dari $8^{\\frac{2}{3}}$ adalah $\\dots$",
          "opsi": [
            "A. $16$",
            "B. $\\dfrac{16}{3}$",
            "C. $2$",
            "D. $6$",
            "E. $4$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P03-Q4] Nilai dari $32^{\\frac{3}{5}}$ adalah $\\dots$",
          "opsi": [
            "A. $2$",
            "B. $\\dfrac{96}{5}$",
            "C. $8$",
            "D. $16$",
            "E. $32768$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P03-Q5] Bentuk sederhana dari $\\sqrt{50} + \\sqrt{18} - \\sqrt{8}$ adalah $\\dots$",
          "opsi": [
            "A. $\\sqrt{60}$",
            "B. $6\\sqrt{2}$",
            "C. $10\\sqrt{2}$",
            "D. $4\\sqrt{2}$",
            "E. $\\sqrt{2}$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P03-Q6] Nilai dari $\\left(\\dfrac{16}{81}\\right)^{-\\frac{3}{4}}$ adalah $\\dots$",
          "opsi": [
            "A. $\\dfrac{27}{8}$",
            "B. $\\dfrac{8}{27}$",
            "C. $\\dfrac{3}{2}$",
            "D. $\\dfrac{2}{3}$",
            "E. $\\dfrac{81}{16}$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P03-Q7] Nilai dari $\\sqrt[3]{-27} + \\sqrt{49}$ adalah $\\dots$",
          "opsi": [
            "A. $10$",
            "B. $-10$",
            "C. $4$",
            "D. $-4$",
            "E. tidak bernilai real"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P03-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) $\\sqrt{9} + \\sqrt{16} = \\sqrt{25}$",
            "(2) $\\sqrt{3} \\cdot \\sqrt{12} = 6$",
            "(3) $\\sqrt[3]{-64} = -4$"
          ],
          "kunci": "S - B - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P03-Q9] Pilihlah SEMUA bentuk yang nilainya sama dengan $3$.",
          "opsi": [
            "A. $27^{\\frac{1}{3}}$",
            "B. $9^{\\frac{1}{2}}$",
            "C. $81^{\\frac{1}{4}}$",
            "D. $3^{\\frac{1}{3}}$",
            "E. $\\left(\\dfrac{1}{3}\\right)^{-1}$"
          ],
          "kunci": "A, B, C, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P03-Q10] Nilai dari $\\sqrt{12} \\cdot \\sqrt{27}$ adalah $\\dots$",
          "opsi": [],
          "kunci": "18",
          "bahas": ""
        }
      ]
    },
    "P04": {
      "id": "P04",
      "subject": "wajib",
      "title": "P04 • Operasi Bentuk Akar dan Merasionalkan Penyebut",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P04-Q1] Mengalikan pembilang dan penyebut suatu pecahan dengan $\\sqrt{5}$ tidak mengubah nilainya karena $\\dots$",
          "opsi": [
            "A. akar selalu bernilai satu",
            "B. penyebut yang berakar tidak punya nilai",
            "C. perkalian dengan akar selalu menghasilkan bilangan bulat",
            "D. pembilang dan penyebut boleh diubah sesuka hati",
            "E. yang dikalikan sebenarnya $\\dfrac{\\sqrt{5}}{\\sqrt{5}}$, dan bentuk itu bernilai $1$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P04-Q2] Bentuk rasional dari $\\dfrac{6}{\\sqrt{3}}$ adalah $\\dots$",
          "opsi": [
            "A. $\\dfrac{2\\sqrt{3}}{3}$",
            "B. $2\\sqrt{3}$",
            "C. $6\\sqrt{3}$",
            "D. $\\dfrac{\\sqrt{3}}{2}$",
            "E. $3\\sqrt{3}$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P04-Q3] Bentuk rasional dari $\\dfrac{4}{3 + \\sqrt{2}}$ adalah $\\dots$",
          "opsi": [
            "A. $\\dfrac{12 - 4\\sqrt{2}}{7}$",
            "B. $\\dfrac{12 + 4\\sqrt{2}}{7}$",
            "C. $\\dfrac{12 - 4\\sqrt{2}}{11}$",
            "D. $12 - 4\\sqrt{2}$",
            "E. $\\dfrac{4 - \\sqrt{2}}{7}$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P04-Q4] Nilai dari $(2 + \\sqrt{3})(2 - \\sqrt{3})$ adalah $\\dots$",
          "opsi": [
            "A. $7$",
            "B. $4 - \\sqrt{3}$",
            "C. $-1$",
            "D. $1$",
            "E. $4\\sqrt{3}$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q5] Bentuk rasional dari $\\dfrac{10}{5 + 2\\sqrt{3}}$ adalah $\\dots$",
          "opsi": [
            "A. $\\dfrac{50 - 20\\sqrt{3}}{19}$",
            "B. $\\dfrac{50 + 20\\sqrt{3}}{13}$",
            "C. $\\dfrac{50 - 20\\sqrt{3}}{13}$",
            "D. $\\dfrac{50 - 20\\sqrt{3}}{37}$",
            "E. $\\dfrac{10 - 2\\sqrt{3}}{13}$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q6] Nilai dari $(\\sqrt{5} + \\sqrt{2})^2$ adalah $\\dots$",
          "opsi": [
            "A. $7$",
            "B. $7 + 2\\sqrt{7}$",
            "C. $10$",
            "D. $7 + \\sqrt{10}$",
            "E. $7 + 2\\sqrt{10}$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q7] Bentuk rasional dari $\\dfrac{2}{\\sqrt{5} - \\sqrt{3}}$ adalah $\\dots$",
          "opsi": [
            "A. $\\sqrt{5} - \\sqrt{3}$",
            "B. $\\sqrt{5} + \\sqrt{3}$",
            "C. $\\dfrac{\\sqrt{5} + \\sqrt{3}}{2}$",
            "D. $2\\sqrt{5} + 2\\sqrt{3}$",
            "E. $\\dfrac{2\\sqrt{15}}{15}$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Sekawan dari $4 - 3\\sqrt{2}$ adalah $-4 + 3\\sqrt{2}$",
            "(2) $(3\\sqrt{2})^2 = 18$",
            "(3) $(\\sqrt{6}+\\sqrt{2})(\\sqrt{6}-\\sqrt{2}) = 4$"
          ],
          "kunci": "S - B - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P04-Q9] Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. $\\sqrt{8} \\cdot \\sqrt{2} = 4$",
            "B. $\\dfrac{1}{\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2}$",
            "C. $(1+\\sqrt{3})^2 = 4 + 2\\sqrt{3}$",
            "D. $(\\sqrt{7})^2 = 7$",
            "E. $\\sqrt{9 + 16} = 3 + 4$"
          ],
          "kunci": "A, B, C, D",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P04-Q10] Nilai dari $(3 + \\sqrt{7})(3 - \\sqrt{7})$ adalah $\\dots$",
          "opsi": [],
          "kunci": "2",
          "bahas": ""
        }
      ]
    },
    "P05": {
      "id": "P05",
      "subject": "wajib",
      "title": "P05 • Fungsi Eksponen: Pertumbuhan dan Peluruhan",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P05-Q1] Di antara fungsi berikut, yang merupakan fungsi eksponen adalah $\\dots$",
          "opsi": [
            "A. $f(x) = 3^{x}$",
            "B. $f(x) = x^{3}$",
            "C. $f(x) = 3x$",
            "D. $f(x) = \\sqrt{x}$",
            "E. $f(x) = 1^{x}$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P05-Q2] Diberikan $f(x) = 2 \\cdot 3^{x}$. Nilai $f(2)$ adalah $\\dots$",
          "opsi": [
            "A. $12$",
            "B. $36$",
            "C. $18$",
            "D. $6$",
            "E. $9$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P05-Q3] Bakteri membelah menjadi dua setiap $20$ menit. Mula-mula ada $1000$ bakteri. Banyak bakteri setelah $2$ jam adalah $\\dots$",
          "opsi": [
            "A. $12\\,000$",
            "B. $64\\,000$",
            "C. $6000$",
            "D. $16\\,000$",
            "E. $128\\,000$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P05-Q4] Suatu zat radioaktif bermassa $80$ mg dengan waktu paruh $5$ tahun. Massa zat setelah $15$ tahun adalah $\\dots$",
          "opsi": [
            "A. $40$ mg",
            "B. $20$ mg",
            "C. $120$ mg",
            "D. $5$ mg",
            "E. $10$ mg"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q5] Penduduk sebuah desa $8000$ orang dan bertambah $5\\%$ setiap tahun. Banyak penduduk setelah $3$ tahun adalah $\\dots$",
          "opsi": [
            "A. $9200$",
            "B. $8400$",
            "C. $9000$",
            "D. $9261$",
            "E. $12\\,000$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q6] Di antara fungsi berikut, yang grafiknya MENURUN adalah $\\dots$",
          "opsi": [
            "A. $f(x) = 4^{x}$",
            "B. $f(x) = 2 \\cdot 3^{x}$",
            "C. $f(x) = \\left(\\dfrac{1}{2}\\right)^{x}$",
            "D. $f(x) = 5 \\cdot 2^{x}$",
            "E. $f(x) = \\left(\\dfrac{5}{4}\\right)^{x}$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q7] Fungsi $f(x) = a \\cdot 2^{x}$ memenuhi $f(3) = 40$. Nilai $f(5)$ adalah $\\dots$",
          "opsi": [
            "A. $80$",
            "B. $200$",
            "C. $320$",
            "D. $160$",
            "E. $120$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Grafik $f(x) = a \\cdot b^x$ dengan $a > 0$ selalu memotong sumbu-Y di titik $(0, a)$",
            "(2) Fungsi $f(x) = \\left(\\frac{3}{5}\\right)^x$ tumbuh",
            "(3) Pada peluruhan $30\\%$ per tahun, bilangan pokoknya $0{,}7$"
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P05-Q9] Diberikan $f(x) = 3 \\cdot 2^{x}$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. $f(0) = 3$",
            "B. $f(1) = 6$",
            "C. Setiap $x$ bertambah $1$, nilai $f$ dikalikan $2$",
            "D. $f(2) = 36$",
            "E. Grafiknya naik"
          ],
          "kunci": "A, B, C, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P05-Q10] Bakteri berlipat tiga setiap jam. Mula-mula ada $200$ bakteri. Banyak bakteri setelah $4$ jam adalah $\\dots$",
          "opsi": [],
          "kunci": "16200",
          "bahas": ""
        }
      ]
    },
    "P06": {
      "id": "P06",
      "subject": "wajib",
      "title": "P06 • Logaritma: Pengertian dan Sifat-Sifatnya",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P06-Q1] Pernyataan ${}^{2}\\log 8 = 3$ setara dengan $\\dots$",
          "opsi": [
            "A. $8^{3} = 2$",
            "B. $2^{3} = 8$",
            "C. $3^{2} = 8$",
            "D. $2 \\times 3 = 8$",
            "E. $8^{2} = 3$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P06-Q2] Nilai dari ${}^{3}\\log 81$ adalah $\\dots$",
          "opsi": [
            "A. $27$",
            "B. $3$",
            "C. $81$",
            "D. $4$",
            "E. $9$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P06-Q3] Nilai dari ${}^{2}\\log \\dfrac{1}{8}$ adalah $\\dots$",
          "opsi": [
            "A. $3$",
            "B. $\\dfrac{1}{3}$",
            "C. $-3$",
            "D. $-\\dfrac{1}{3}$",
            "E. $8$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P06-Q4] Nilai dari ${}^{2}\\log 4 + {}^{2}\\log 8$ adalah $\\dots$",
          "opsi": [
            "A. $5$",
            "B. $6$",
            "C. $12$",
            "D. $32$",
            "E. $\\dfrac{2}{3}$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q5] Nilai dari ${}^{3}\\log 18 - {}^{3}\\log 2$ adalah $\\dots$",
          "opsi": [
            "A. $16$",
            "B. $9$",
            "C. $\\dfrac{1}{2}$",
            "D. $4$",
            "E. $2$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q6] Nilai dari ${}^{2}\\log 8^{4}$ adalah $\\dots$",
          "opsi": [
            "A. $7$",
            "B. $81$",
            "C. $4096$",
            "D. $12$",
            "E. $\\dfrac{3}{4}$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q7] Nilai dari ${}^{9}\\log 27$ adalah $\\dots$",
          "opsi": [
            "A. $\\dfrac{3}{2}$",
            "B. $3$",
            "C. $\\dfrac{2}{3}$",
            "D. $\\dfrac{1}{3}$",
            "E. $2$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) ${}^{7}\\log 1 = 0$",
            "(2) ${}^{2}\\log 5 + {}^{2}\\log 3 = {}^{2}\\log 8$",
            "(3) ${}^{5}\\log 0$ tidak terdefinisi"
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q9] Pilihlah SEMUA bentuk yang nilainya sama dengan $3$.",
          "opsi": [
            "A. ${}^{2}\\log 8$",
            "B. ${}^{5}\\log 125$",
            "C. ${}^{3}\\log 27$",
            "D. ${}^{9}\\log 27$",
            "E. ${}^{2}\\log 4 + {}^{2}\\log 2$"
          ],
          "kunci": "A, B, C, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P06-Q10] Nilai dari ${}^{2}\\log 32 + {}^{3}\\log 27 - {}^{5}\\log 25$ adalah $\\dots$",
          "opsi": [],
          "kunci": "6",
          "bahas": ""
        }
      ]
    },
    "P07": {
      "id": "P07",
      "subject": "wajib",
      "title": "P07 • Persamaan Eksponen dan Logaritma Sederhana",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P07-Q1] Dari $5^{f(x)} = 5^{g(x)}$ dapat disimpulkan $f(x) = g(x)$. Alasannya adalah $\\dots$",
          "opsi": [
            "A. karena $5$ bilangan prima",
            "B. karena pangkat selalu bernilai positif",
            "C. karena fungsi $5^{x}$ selalu naik, sehingga tidak ada dua pangkat berbeda yang memberi nilai sama",
            "D. karena kedua ruas boleh dibagi $5$",
            "E. karena $f$ dan $g$ pasti fungsi linear"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P07-Q2] Nilai $x$ yang memenuhi $2^{x+1} = 32$ adalah $\\dots$",
          "opsi": [
            "A. $31$",
            "B. $16$",
            "C. $5$",
            "D. $6$",
            "E. $4$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P07-Q3] Nilai $x$ yang memenuhi $3^{2x} = 81$ adalah $\\dots$",
          "opsi": [
            "A. $40{,}5$",
            "B. $8$",
            "C. $3$",
            "D. $2$",
            "E. $4$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P07-Q4] Nilai $x$ yang memenuhi $2^{x} = \\dfrac{1}{16}$ adalah $\\dots$",
          "opsi": [
            "A. $4$",
            "B. $-4$",
            "C. $\\dfrac{1}{4}$",
            "D. $-2$",
            "E. $8$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q5] Nilai $x$ yang memenuhi $9^{x} = 27$ adalah $\\dots$",
          "opsi": [
            "A. $\\dfrac{3}{2}$",
            "B. $3$",
            "C. $\\dfrac{2}{3}$",
            "D. $\\dfrac{1}{3}$",
            "E. $2$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q6] Nilai $x$ yang memenuhi ${}^{2}\\log (x - 1) = 3$ adalah $\\dots$",
          "opsi": [
            "A. $4$",
            "B. $7$",
            "C. $10$",
            "D. $6$",
            "E. $9$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q7] Himpunan penyelesaian ${}^{3}\\log x + {}^{3}\\log (x - 2) = 1$ adalah $\\dots$",
          "opsi": [
            "A. $\\{-1, 3\\}$",
            "B. $\\{3\\}$",
            "C. $\\{-1\\}$",
            "D. $\\{1, 3\\}$",
            "E. $\\{5\\}$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Persamaan $2^{x} = 0$ tidak punya penyelesaian",
            "(2) Penyelesaian $4^{x} = 8$ adalah $x = 2$",
            "(3) Pada ${}^{5}\\log (x-3) = 2$, daerah asalnya $x > 3$"
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P07-Q9] Pilihlah SEMUA persamaan yang penyelesaiannya $x = 3$.",
          "opsi": [
            "A. $2^{x} = 8$",
            "B. $3^{x-1} = 9$",
            "C. ${}^{2}\\log (x+5) = 3$",
            "D. $5^{x} = 15$",
            "E. $4^{x-1} = 64$"
          ],
          "kunci": "A, B, C",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P07-Q10] Nilai $x$ yang memenuhi $5^{x-2} = 125$ adalah $\\dots$",
          "opsi": [],
          "kunci": "5",
          "bahas": ""
        }
      ]
    },
    "P08": {
      "id": "P08",
      "subject": "wajib",
      "title": "P08 • Pola Bilangan dan Pengertian Barisan",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P08-Q1] Di antara barisan berikut, yang merupakan barisan aritmetika adalah $\\dots$",
          "opsi": [
            "A. $1, 2, 4, 8, \\dots$",
            "B. $5, 9, 13, 17, \\dots$",
            "C. $1, 4, 9, 16, \\dots$",
            "D. $2, 6, 18, 54, \\dots$",
            "E. $1, 1, 2, 3, 5, \\dots$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P08-Q2] Suku berikutnya dari barisan $2, 5, 10, 17, \\dots$ adalah $\\dots$",
          "opsi": [
            "A. $22$",
            "B. $24$",
            "C. $25$",
            "D. $26$",
            "E. $34$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P08-Q3] Diberikan $U_n = 3n - 1$. Nilai $U_{12}$ adalah $\\dots$",
          "opsi": [
            "A. $35$",
            "B. $36$",
            "C. $11$",
            "D. $38$",
            "E. $2$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P08-Q4] Rumus suku ke-$n$ dari barisan $4, 9, 14, 19, \\dots$ adalah $\\dots$",
          "opsi": [
            "A. $U_n = 4n$",
            "B. $U_n = n + 5$",
            "C. $U_n = 5n + 1$",
            "D. $U_n = 4n + 5$",
            "E. $U_n = 5n - 1$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q5] Batang korek disusun menjadi segitiga berjajar: $1$ segitiga butuh $3$ batang, $2$ segitiga butuh $5$ batang, $3$ segitiga butuh $7$ batang. Banyak batang untuk $20$ segitiga adalah $\\dots$",
          "opsi": [
            "A. $60$",
            "B. $43$",
            "C. $41$",
            "D. $40$",
            "E. $23$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P08-Q6] Barisan $1, 4, 9, 16, 25, \\dots$ termasuk $\\dots$",
          "opsi": [
            "A. barisan aritmetika dengan beda $3$",
            "B. bukan aritmetika maupun geometri",
            "C. barisan geometri dengan rasio $4$",
            "D. barisan aritmetika dengan beda $5$",
            "E. barisan geometri dengan rasio $2$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q7] Diberikan $U_n = n^2 - 2n$. Nilai $U_5 - U_3$ adalah $\\dots$",
          "opsi": [
            "A. $18$",
            "B. $4$",
            "C. $8$",
            "D. $12$",
            "E. $6$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Barisan $10, 7, 4, 1, \\dots$ adalah aritmetika dengan beda $-3$",
            "(2) Setiap barisan yang berpola pasti aritmetika atau geometri",
            "(3) Pada $U_n = 2n + 5$, suku pertamanya $7$"
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P08-Q9] Diberikan barisan $3, 6, 12, 24, \\dots$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. Barisannya geometri dengan rasio $2$",
            "B. Suku berikutnya adalah $48$",
            "C. Selisih antarsukunya tetap",
            "D. $U_n = 3 \\cdot 2^{n-1}$",
            "E. Suku ke-$6$ adalah $96$"
          ],
          "kunci": "A, B, D, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P08-Q10] Diberikan $U_n = 2n^2 + 1$. Nilai $U_7$ adalah $\\dots$",
          "opsi": [],
          "kunci": "99",
          "bahas": ""
        }
      ]
    },
    "P09": {
      "id": "P09",
      "subject": "wajib",
      "title": "P09 • Barisan Aritmetika: Menentukan Suku ke-n",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P09-Q1] Pada barisan aritmetika, yang dimaksud beda adalah $\\dots$",
          "opsi": [
            "A. hasil bagi suku kedua dengan suku pertama",
            "B. selisih suku terakhir dengan suku pertama",
            "C. selisih tetap antara suatu suku dengan suku sebelumnya",
            "D. jumlah dua suku yang berurutan",
            "E. banyaknya suku dalam barisan itu"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P09-Q2] Barisan aritmetika dengan $a = 7$ dan $b = 4$. Nilai $U_{15}$ adalah $\\dots$",
          "opsi": [
            "A. $63$",
            "B. $67$",
            "C. $60$",
            "D. $56$",
            "E. $11$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P09-Q3] Nilai $U_{20}$ dari barisan $3, 8, 13, 18, \\dots$ adalah $\\dots$",
          "opsi": [
            "A. $103$",
            "B. $93$",
            "C. $100$",
            "D. $95$",
            "E. $98$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q4] Suatu barisan aritmetika mempunyai $U_3 = 11$ dan $U_7 = 27$. Nilai $U_{10}$ adalah $\\dots$",
          "opsi": [
            "A. $43$",
            "B. $39$",
            "C. $35$",
            "D. $47$",
            "E. $38$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q5] Suatu barisan aritmetika mempunyai $U_5 = 20$ dan $U_9 = 32$. Suku pertamanya adalah $\\dots$",
          "opsi": [
            "A. $5$",
            "B. $17$",
            "C. $11$",
            "D. $8$",
            "E. $14$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P09-Q6] Pada barisan $40, 37, 34, \\dots$, bilangan $1$ merupakan suku ke-$\\dots$",
          "opsi": [
            "A. $12$",
            "B. $13$",
            "C. $14$",
            "D. $15$",
            "E. $16$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q7] Kursi sebuah gedung disusun dengan baris pertama $20$ kursi dan tiap baris berikutnya bertambah $3$ kursi. Banyak kursi pada baris ke-$12$ adalah $\\dots$",
          "opsi": [
            "A. $53$",
            "B. $56$",
            "C. $50$",
            "D. $36$",
            "E. $60$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Pada barisan aritmetika, $U_n = a + nb$",
            "(2) Jika $b < 0$ maka barisannya menurun",
            "(3) Pada barisan $2, 9, 16, \\dots$ berlaku $U_8 = 51$"
          ],
          "kunci": "S - B - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P09-Q9] Diberikan barisan aritmetika $6, 10, 14, 18, \\dots$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. Bedanya $4$",
            "B. $U_{10} = 42$",
            "C. $U_n = 4n + 2$",
            "D. Bilangan $50$ merupakan salah satu sukunya",
            "E. Bilangan $61$ merupakan salah satu sukunya"
          ],
          "kunci": "A, B, C, D",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P09-Q10] Barisan aritmetika dengan $a = 5$ dan $b = 7$. Nilai $U_{25}$ adalah $\\dots$",
          "opsi": [],
          "kunci": "173",
          "bahas": ""
        }
      ]
    },
    "P10": {
      "id": "P10",
      "subject": "wajib",
      "title": "P10 • Deret Aritmetika: Jumlah n Suku Pertama",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P10-Q1] Lambang $S_8$ pada deret aritmetika berarti $\\dots$",
          "opsi": [
            "A. suku ke-$8$ barisan itu",
            "B. beda antara suku ke-$8$ dan suku pertama",
            "C. banyaknya suku sampai bernilai $8$",
            "D. jumlah delapan suku pertama barisan itu",
            "E. hasil bagi suku ke-$8$ dengan suku pertama"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P10-Q2] Jumlah $10$ suku pertama deret aritmetika dengan $a = 3$ dan $b = 4$ adalah $\\dots$",
          "opsi": [
            "A. $420$",
            "B. $210$",
            "C. $195$",
            "D. $39$",
            "E. $390$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P10-Q3] Nilai dari $2 + 5 + 8 + \\dots + 29$ adalah $\\dots$",
          "opsi": [
            "A. $1276$",
            "B. $310$",
            "C. $155$",
            "D. $145$",
            "E. $186$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q4] Diketahui $S_n = n^2 + 2n$. Nilai $U_5$ adalah $\\dots$",
          "opsi": [
            "A. $11$",
            "B. $35$",
            "C. $24$",
            "D. $9$",
            "E. $59$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q5] Jumlah $20$ suku pertama dari $5, 2, -1, -4, \\dots$ adalah $\\dots$",
          "opsi": [
            "A. $470$",
            "B. $-500$",
            "C. $-52$",
            "D. $-235$",
            "E. $-470$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P10-Q6] Nilai dari $1 + 2 + 3 + \\dots + 100$ adalah $\\dots$",
          "opsi": [
            "A. $10100$",
            "B. $5000$",
            "C. $4950$",
            "D. $5050$",
            "E. $101$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q7] Sebuah gedung punya $12$ baris kursi. Baris pertama $20$ kursi dan tiap baris berikutnya bertambah $3$ kursi. Banyak kursi seluruhnya adalah $\\dots$",
          "opsi": [
            "A. $53$",
            "B. $438$",
            "C. $876$",
            "D. $240$",
            "E. $636$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) $S_1 = U_1$",
            "(2) Pada deret dengan $b$ negatif, nilai $S_n$ tidak mungkin negatif",
            "(3) $S_n = \\frac{n}{2}(a + U_n)$ dan $S_n = \\frac{n}{2}(2a + (n-1)b)$ memberi hasil yang sama"
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P10-Q9] Diberikan deret aritmetika $4 + 9 + 14 + 19 + \\dots$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. $b = 5$",
            "B. $U_{10} = 49$",
            "C. $S_{10} = 265$",
            "D. $S_4 = 46$",
            "E. $S_{10} = 490$"
          ],
          "kunci": "A, B, C, D",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P10-Q10] Jumlah $15$ suku pertama deret aritmetika dengan $a = 4$ dan $b = 6$ adalah $\\dots$",
          "opsi": [],
          "kunci": "690",
          "bahas": ""
        }
      ]
    },
    "P11": {
      "id": "P11",
      "subject": "wajib",
      "title": "P11 • Barisan Geometri: Menentukan Suku ke-n",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P11-Q1] Pada barisan geometri, yang dimaksud rasio adalah $\\dots$",
          "opsi": [
            "A. selisih tetap antara dua suku berurutan",
            "B. jumlah dua suku yang berurutan",
            "C. banyaknya suku dalam barisan itu",
            "D. hasil kali semua sukunya",
            "E. hasil bagi tetap antara suatu suku dengan suku sebelumnya"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P11-Q2] Nilai $U_8$ dari barisan $3, 6, 12, 24, \\dots$ adalah $\\dots$",
          "opsi": [
            "A. $768$",
            "B. $192$",
            "C. $384$",
            "D. $42$",
            "E. $96$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P11-Q3] Barisan geometri dengan $a = 2$ dan $r = 3$. Nilai $U_6$ adalah $\\dots$",
          "opsi": [
            "A. $1458$",
            "B. $486$",
            "C. $36$",
            "D. $162$",
            "E. $729$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q4] Barisan geometri mempunyai $U_2 = 6$ dan $U_5 = 48$. Nilai $U_7$ adalah $\\dots$",
          "opsi": [
            "A. $96$",
            "B. $384$",
            "C. $144$",
            "D. $192$",
            "E. $768$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P11-Q5] Nilai $U_8$ dari barisan $64, 32, 16, \\dots$ adalah $\\dots$",
          "opsi": [
            "A. $\\dfrac{1}{2}$",
            "B. $\\dfrac{1}{4}$",
            "C. $1$",
            "D. $2$",
            "E. $8$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q6] Suatu bakteri berlipat tiga setiap jam. Mula-mula ada $5$ bakteri. Banyak bakteri setelah $6$ jam adalah $\\dots$",
          "opsi": [
            "A. $90$",
            "B. $105$",
            "C. $1215$",
            "D. $10935$",
            "E. $3645$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q7] Tiga bilangan disisipkan di antara $3$ dan $48$ sehingga terbentuk barisan geometri. Bilangan yang berada di tengah adalah $\\dots$",
          "opsi": [
            "A. $6$",
            "B. $24$",
            "C. $12$",
            "D. $16$",
            "E. $25{,}5$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Pada barisan geometri, $U_n = a r^{\\,n}$",
            "(2) Barisan $5, 5, 5, 5, \\dots$ adalah geometri dengan rasio $1$",
            "(3) Jika $0 < r < 1$ maka suku-sukunya makin mengecil"
          ],
          "kunci": "S - B - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P11-Q9] Diberikan barisan $2, 6, 18, 54, \\dots$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. Rasionya $3$",
            "B. $U_5 = 162$",
            "C. $U_n = 2 \\cdot 3^{\\,n-1}$",
            "D. Selisih antarsukunya tetap",
            "E. $U_7 = 1458$"
          ],
          "kunci": "A, B, C, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P11-Q10] Barisan geometri dengan $a = 1$ dan $r = 2$. Nilai $U_{11}$ adalah $\\dots$",
          "opsi": [],
          "kunci": "1024",
          "bahas": ""
        }
      ]
    },
    "P12": {
      "id": "P12",
      "subject": "wajib",
      "title": "P12 • Deret Geometri dan Deret Geometri Tak Hingga",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P12-Q1] Deret geometri tak hingga mempunyai jumlah hanya jika $\\dots$",
          "opsi": [
            "A. $|r| < 1$",
            "B. $|r| > 1$",
            "C. $r$ bilangan bulat",
            "D. $a > 0$",
            "E. $r = 1$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P12-Q2] Jumlah $6$ suku pertama deret geometri dengan $a = 2$ dan $r = 3$ adalah $\\dots$",
          "opsi": [
            "A. $242$",
            "B. $486$",
            "C. $1456$",
            "D. $364$",
            "E. $728$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P12-Q3] Jumlah $8$ suku pertama dari $64 + 32 + 16 + \\dots$ adalah $\\dots$",
          "opsi": [
            "A. $128$",
            "B. $126$",
            "C. $64$",
            "D. $127{,}5$",
            "E. $255$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P12-Q4] Jumlah dari $8 + 4 + 2 + 1 + \\dots$ yang diteruskan tak terhingga adalah $\\dots$",
          "opsi": [
            "A. $\\dfrac{16}{3}$",
            "B. $15$",
            "C. $16$",
            "D. $32$",
            "E. tidak punya jumlah"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q5] Deret geometri tak hingga mempunyai $a = 9$ dan $r = \\dfrac{2}{3}$. Jumlahnya adalah $\\dots$",
          "opsi": [
            "A. $\\dfrac{27}{5}$",
            "B. $27$",
            "C. $6$",
            "D. $13{,}5$",
            "E. $18$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q6] Bola dijatuhkan dari ketinggian $10$ m dan tiap kali memantul $\\dfrac{3}{5}$ dari ketinggian sebelumnya. Panjang seluruh lintasan bola sampai berhenti adalah $\\dots$",
          "opsi": [
            "A. $40$ m",
            "B. $50$ m",
            "C. $25$ m",
            "D. $15$ m",
            "E. tak terhingga"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q7] Bentuk pecahan biasa dari $0{,}272727\\dots$ adalah $\\dots$",
          "opsi": [
            "A. $\\dfrac{27}{100}$",
            "B. $\\dfrac{3}{10}$",
            "C. $\\dfrac{27}{10}$",
            "D. $\\dfrac{11}{3}$",
            "E. $\\dfrac{3}{11}$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Deret $3 + 6 + 12 + 24 + \\dots$ punya jumlah tak hingga yang terbatas",
            "(2) Pada rumus $S_n$ deret geometri, pangkat $r$-nya adalah $n$",
            "(3) Deret $1 + \\frac{1}{3} + \\frac{1}{9} + \\dots$ berjumlah $\\frac{3}{2}$"
          ],
          "kunci": "S - B - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P12-Q9] Diberikan deret $20 + 10 + 5 + \\dots$ Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. Rasionya $\\dfrac{1}{2}$",
            "B. Deretnya konvergen",
            "C. $S_\\infty = 40$",
            "D. $S_3 = 35$",
            "E. $S_\\infty = 30$"
          ],
          "kunci": "A, B, C, D",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P12-Q10] Deret geometri tak hingga dengan $a = 12$ dan $r = \\dfrac{1}{3}$. Jumlahnya adalah $\\dots$",
          "opsi": [],
          "kunci": "18",
          "bahas": ""
        }
      ]
    },
    "P13": {
      "id": "P13",
      "subject": "wajib",
      "title": "P13 • Penerapan Barisan dan Deret pada Masalah Nyata",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P13-Q1] Di antara keadaan berikut, yang membentuk barisan GEOMETRI adalah $\\dots$",
          "opsi": [
            "A. gaji naik $Rp200.000$ setiap tahun",
            "B. nilai kendaraan menyusut $15\\%$ setiap tahun",
            "C. tabungan bertambah $Rp50.000$ setiap bulan",
            "D. kursi tiap baris bertambah $3$ dari baris sebelumnya",
            "E. suhu turun $2^\\circ$C setiap jam"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P13-Q2] Gaji awal seorang pegawai $Rp3.000.000$ dan naik $Rp200.000$ setiap tahun. Gaji pada tahun ke-$8$ adalah $\\dots$",
          "opsi": [
            "A. $Rp4.600.000$",
            "B. $Rp1.400.000$",
            "C. $Rp3.200.000$",
            "D. $Rp4.400.000$",
            "E. $Rp5.000.000$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P13-Q3] Produksi pabrik pada bulan pertama $120$ unit dan bertambah $15$ unit setiap bulan. Produksi seluruhnya selama $10$ bulan pertama adalah $\\dots$",
          "opsi": [
            "A. $255$ unit",
            "B. $1200$ unit",
            "C. $1875$ unit",
            "D. $3750$ unit",
            "E. $1350$ unit"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q4] Penduduk sebuah kota $5000$ orang dan menjadi dua kali setiap $10$ tahun. Banyak penduduk setelah $40$ tahun adalah $\\dots$",
          "opsi": [
            "A. $40\\,000$",
            "B. $20\\,000$",
            "C. $160\\,000$",
            "D. $45\\,000$",
            "E. $80\\,000$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q5] Nilai sebuah mesin $Rp50.000.000$ dan menyusut $20\\%$ setiap tahun. Nilainya setelah $3$ tahun adalah $\\dots$",
          "opsi": [
            "A. $Rp25.600.000$",
            "B. $Rp20.000.000$",
            "C. $Rp32.000.000$",
            "D. $Rp20.480.000$",
            "E. $Rp30.000.000$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q6] Seutas tali dipotong menjadi $7$ bagian yang panjangnya membentuk barisan geometri. Potongan terpendek $3$ cm dan terpanjang $192$ cm. Panjang tali semula adalah $\\dots$",
          "opsi": [
            "A. $195$ cm",
            "B. $381$ cm",
            "C. $384$ cm",
            "D. $765$ cm",
            "E. $1365$ cm"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q7] Angsuran bulan pertama $Rp1.000.000$ dan berkurang $Rp25.000$ setiap bulan. Besar angsuran pada bulan ke-$12$ adalah $\\dots$",
          "opsi": [
            "A. $Rp700.000$",
            "B. $Rp975.000$",
            "C. $Rp300.000$",
            "D. $Rp725.000$",
            "E. $Rp750.000$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) \"Tabungan naik $6\\%$ setiap tahun\" membentuk barisan geometri",
            "(2) Jika mula-mula ada $100$ bakteri dan berlipat dua tiap jam, setelah $5$ jam ada $U_5 = 1600$ bakteri",
            "(3) Untuk mencari total produksi selama setahun, yang dipakai $S_n$ bukan $U_n$"
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q9] Sebuah tabungan $Rp1.000.000$ berbunga majemuk $10\\%$ per tahun. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. Rasionya $1{,}1$",
            "B. Saldo setelah $1$ tahun $Rp1.100.000$",
            "C. Saldo setelah $3$ tahun $Rp1.331.000$",
            "D. Saldo setelah $3$ tahun $Rp1.300.000$",
            "E. Bunga tahun kedua lebih besar daripada bunga tahun pertama"
          ],
          "kunci": "A, B, C, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P13-Q10] Angsuran bulan pertama $Rp1.000.000$ dan berkurang $Rp25.000$ setiap bulan. Total angsuran selama $12$ bulan adalah $Rp\\dots$ (tuliskan angkanya saja)",
          "opsi": [],
          "kunci": "10350000",
          "bahas": ""
        }
      ]
    },
    "P14": {
      "id": "P14",
      "subject": "wajib",
      "title": "P14 • Pengertian Vektor, Notasi, dan Penyajiannya",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P14-Q1] Yang membedakan besaran vektor dari besaran skalar adalah $\\dots$",
          "opsi": [
            "A. vektor selalu bernilai positif, sedangkan skalar boleh negatif",
            "B. vektor selalu lebih besar nilainya daripada skalar",
            "C. vektor mempunyai besar sekaligus arah, sedangkan skalar hanya mempunyai besar",
            "D. vektor hanya dipakai dalam geometri, sedangkan skalar dalam aljabar",
            "E. vektor tidak dapat dijumlahkan, sedangkan skalar dapat dijumlahkan"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P14-Q2] Di antara besaran berikut, yang merupakan besaran vektor adalah $\\dots$",
          "opsi": [
            "A. suhu ruangan",
            "B. massa benda",
            "C. panjang tali",
            "D. waktu tempuh",
            "E. perpindahan mobil"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P14-Q3] Notasi $\\vec{AB}$ berarti $\\dots$",
          "opsi": [
            "A. vektor dengan titik pangkal $A$ dan titik ujung $B$",
            "B. vektor dengan titik pangkal $B$ dan titik ujung $A$",
            "C. panjang ruas garis $AB$ tanpa memperhatikan arah",
            "D. jumlah vektor $\\vec{a}$ dengan vektor $\\vec{b}$",
            "E. hasil kali koordinat titik $A$ dengan koordinat titik $B$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P14-Q4] Pernyataan yang BENAR mengenai hubungan $\\vec{BA}$ dengan $\\vec{AB}$ adalah $\\dots$",
          "opsi": [
            "A. keduanya merupakan vektor yang sama",
            "B. panjang $\\vec{BA}$ dua kali panjang $\\vec{AB}$",
            "C. $\\vec{BA}$ tegak lurus terhadap $\\vec{AB}$",
            "D. $\\vec{BA} = -\\vec{AB}$, yaitu sama panjang tetapi berlawanan arah",
            "E. $\\vec{BA}$ selalu lebih panjang daripada $\\vec{AB}$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P14-Q5] Dua vektor disebut SAMA apabila $\\dots$",
          "opsi": [
            "A. panjangnya sama, sedangkan arahnya boleh berbeda",
            "B. panjang dan arahnya sama, meskipun titik pangkalnya berbeda",
            "C. titik pangkal dan titik ujungnya sama-sama sama",
            "D. keduanya terletak pada satu garis yang sama",
            "E. arahnya sama, sedangkan panjangnya boleh berbeda"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P14-Q6] Pada jajargenjang $ABCD$ dengan titik-titik sudut terurut mengelilingi bangun itu, vektor yang SAMA dengan $\\vec{AB}$ adalah $\\dots$",
          "opsi": [
            "A. $\\vec{BA}$",
            "B. $\\vec{CD}$",
            "C. $\\vec{DC}$",
            "D. $\\vec{AD}$",
            "E. $\\vec{CA}$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P14-Q7] Sebuah vektor digambarkan sebagai ruas garis berarah. Bagian gambar yang menyatakan BESAR vektor itu adalah $\\dots$",
          "opsi": [
            "A. arah mata anak panahnya",
            "B. letak titik pangkalnya",
            "C. letak titik ujungnya",
            "D. warna garis yang dipakai",
            "E. panjang ruas garisnya"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P14-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Vektor nol tidak mempunyai arah tertentu",
            "(2) $\\vec{AB}$ dan $\\vec{BA}$ merupakan vektor yang sama",
            "(3) Dua vektor yang sama panjang pastilah dua vektor yang sama"
          ],
          "kunci": "B - S - S",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P14-Q9] Pilihlah SEMUA besaran yang merupakan besaran vektor.",
          "opsi": [
            "A. kecepatan angin $20$ km/jam ke arah timur",
            "B. massa beras $5$ kg",
            "C. gaya tarik $30$ N ke atas",
            "D. suhu udara $28^\\circ$",
            "E. perpindahan $40$ m ke utara"
          ],
          "kunci": "A, C, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P14-Q10] Diberikan empat titik berbeda $A$, $B$, $C$, dan $D$. Banyaknya vektor berbeda yang dapat dibentuk dengan memilih dua di antara keempat titik itu sebagai titik pangkal dan titik ujung adalah $\\dots$",
          "opsi": [],
          "kunci": "12",
          "bahas": ""
        }
      ]
    },
    "P15": {
      "id": "P15",
      "subject": "wajib",
      "title": "P15 • Vektor pada Bidang Koordinat dan Vektor Posisi",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P15-Q1] Vektor posisi titik $P(-3,5)$ adalah $\\dots$",
          "opsi": [
            "A. $\\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}$",
            "B. $\\begin{pmatrix} 5 \\\\ -3 \\end{pmatrix}$",
            "C. $\\begin{pmatrix} 3 \\\\ -5 \\end{pmatrix}$",
            "D. $\\begin{pmatrix} -3 \\\\ 5 \\end{pmatrix}$",
            "E. $\\begin{pmatrix} -5 \\\\ 3 \\end{pmatrix}$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P15-Q2] Diketahui $A(2,-1)$ dan $B(5,3)$. Vektor $\\vec{AB}$ adalah $\\dots$",
          "opsi": [
            "A. $\\begin{pmatrix} 7 \\\\ 2 \\end{pmatrix}$",
            "B. $\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$",
            "C. $\\begin{pmatrix} -3 \\\\ -4 \\end{pmatrix}$",
            "D. $\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$",
            "E. $\\begin{pmatrix} 10 \\\\ -3 \\end{pmatrix}$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P15-Q3] Diketahui $P(4,-2)$ dan $Q(-1,6)$. Vektor $\\vec{QP}$ adalah $\\dots$",
          "opsi": [
            "A. $\\begin{pmatrix} -5 \\\\ 8 \\end{pmatrix}$",
            "B. $\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$",
            "C. $\\begin{pmatrix} 5 \\\\ 8 \\end{pmatrix}$",
            "D. $\\begin{pmatrix} -5 \\\\ -8 \\end{pmatrix}$",
            "E. $\\begin{pmatrix} 5 \\\\ -8 \\end{pmatrix}$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P15-Q4] Vektor $\\vec{a} = 3\\vec{i} - 7\\vec{j}$ bila dituliskan dalam bentuk kolom menjadi $\\dots$",
          "opsi": [
            "A. $\\begin{pmatrix} 3 \\\\ -7 \\end{pmatrix}$",
            "B. $\\begin{pmatrix} -7 \\\\ 3 \\end{pmatrix}$",
            "C. $\\begin{pmatrix} 3 \\\\ 7 \\end{pmatrix}$",
            "D. $\\begin{pmatrix} -3 \\\\ 7 \\end{pmatrix}$",
            "E. $\\begin{pmatrix} 7 \\\\ -3 \\end{pmatrix}$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q5] Diketahui $\\vec{AB} = \\begin{pmatrix} 6 \\\\ -2 \\end{pmatrix}$ dan $A(1,5)$. Koordinat titik $B$ adalah $\\dots$",
          "opsi": [
            "A. $(5, 7)$",
            "B. $(-5, 7)$",
            "C. $(7, 3)$",
            "D. $(7, -3)$",
            "E. $(5, 3)$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q6] Diketahui $\\vec{AB} = \\begin{pmatrix} -4 \\\\ 3 \\end{pmatrix}$ dan $B(2,-1)$. Koordinat titik $A$ adalah $\\dots$",
          "opsi": [
            "A. $(-2, 2)$",
            "B. $(-6, 4)$",
            "C. $(2, 4)$",
            "D. $(6, -4)$",
            "E. $(6, 4)$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q7] Diketahui $\\begin{pmatrix} 2x-1 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 7 \\\\ y+2 \\end{pmatrix}$. Nilai $x + y$ adalah $\\dots$",
          "opsi": [
            "A. $5$",
            "B. $7$",
            "C. $9$",
            "D. $11$",
            "E. $3$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Vektor posisi suatu titik selalu berpangkal di titik asal $O$",
            "(2) Komponen $\\vec{AB}$ dan komponen $\\vec{BA}$ selalu berlawanan tanda",
            "(3) Vektor $\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$ dan vektor $\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$ adalah vektor yang sama"
          ],
          "kunci": "B - B - S",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P15-Q9] Diketahui $A(-2,1)$, $B(4,5)$, dan $C(1,-3)$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. $\\vec{AB} = \\begin{pmatrix} 6 \\\\ 4 \\end{pmatrix}$",
            "B. $\\vec{BC} = \\begin{pmatrix} -3 \\\\ -8 \\end{pmatrix}$",
            "C. $\\vec{CA} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$",
            "D. Vektor posisi titik $C$ adalah $\\begin{pmatrix} 1 \\\\ -3 \\end{pmatrix}$",
            "E. $\\vec{AB} + \\vec{BC} = \\vec{AC}$"
          ],
          "kunci": "A, B, D, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P15-Q10] Diketahui $A(-3,2)$, $B(4,y)$, dan $\\vec{AB} = \\begin{pmatrix} 7 \\\\ -5 \\end{pmatrix}$. Nilai $y$ adalah $\\dots$",
          "opsi": [],
          "kunci": "-3",
          "bahas": ""
        }
      ]
    },
    "P16": {
      "id": "P16",
      "subject": "wajib",
      "title": "P16 • Penjumlahan dan Pengurangan Vektor",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P16-Q1] Menurut aturan segitiga, $\\vec{AB} + \\vec{BC} = \\dots$",
          "opsi": [
            "A. $\\vec{AC}$",
            "B. $\\vec{CA}$",
            "C. $\\vec{BA}$",
            "D. $\\vec{CB}$",
            "E. $\\vec{AB}$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P16-Q2] Diketahui $\\vec{a} = \\binom{3}{-2}$ dan $\\vec{b} = \\binom{-5}{6}$. Hasil $\\vec{a} + \\vec{b}$ adalah $\\dots$",
          "opsi": [
            "A. $\\binom{8}{-8}$",
            "B. $\\binom{-2}{-4}$",
            "C. $\\binom{-2}{4}$",
            "D. $\\binom{2}{4}$",
            "E. $\\binom{-15}{-12}$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P16-Q3] Diketahui $\\vec{p} = \\binom{7}{1}$ dan $\\vec{q} = \\binom{2}{-4}$. Hasil $\\vec{p} - \\vec{q}$ adalah $\\dots$",
          "opsi": [
            "A. $\\binom{9}{-3}$",
            "B. $\\binom{5}{5}$",
            "C. $\\binom{5}{-5}$",
            "D. $\\binom{-5}{-5}$",
            "E. $\\binom{9}{5}$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P16-Q4] Diketahui $\\vec{u} = \\binom{-1}{4}$, $\\vec{v} = \\binom{3}{3}$, dan $\\vec{w} = \\binom{2}{-6}$. Hasil $\\vec{u} + \\vec{v} - \\vec{w}$ adalah $\\dots$",
          "opsi": [
            "A. $\\binom{4}{1}$",
            "B. $\\binom{0}{1}$",
            "C. $\\binom{-4}{13}$",
            "D. $\\binom{4}{13}$",
            "E. $\\binom{0}{13}$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q5] Diketahui $\\vec{a} + \\vec{b} = \\binom{5}{-1}$ dan $\\vec{a} - \\vec{b} = \\binom{1}{7}$. Vektor $\\vec{a}$ adalah $\\dots$",
          "opsi": [
            "A. $\\binom{2}{-4}$",
            "B. $\\binom{6}{6}$",
            "C. $\\binom{3}{-3}$",
            "D. $\\binom{3}{3}$",
            "E. $\\binom{4}{8}$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q6] Pada segitiga $ABC$ diketahui $\\vec{AB} = \\vec{u}$ dan $\\vec{AC} = \\vec{v}$. Vektor $\\vec{BC}$ dapat dinyatakan sebagai $\\dots$",
          "opsi": [
            "A. $\\vec{v} - \\vec{u}$",
            "B. $\\vec{u} - \\vec{v}$",
            "C. $\\vec{u} + \\vec{v}$",
            "D. $-\\vec{u} - \\vec{v}$",
            "E. $\\frac{1}{2}(\\vec{u} + \\vec{v})$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P16-Q7] Dua gaya bekerja pada satu titik, yaitu $\\vec{F_1} = \\binom{4}{3}$ newton dan $\\vec{F_2} = \\binom{-1}{9}$ newton. Vektor resultannya adalah $\\dots$",
          "opsi": [
            "A. $\\binom{5}{-6}$ newton",
            "B. $\\binom{3}{6}$ newton",
            "C. $\\binom{3}{12}$ newton",
            "D. $\\binom{-4}{27}$ newton",
            "E. $\\binom{-3}{-12}$ newton"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) $\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}$ berlaku untuk setiap dua vektor",
            "(2) $\\vec{a} - \\vec{b} = \\vec{b} - \\vec{a}$ berlaku untuk setiap dua vektor",
            "(3) $\\vec{AB} + \\vec{BA} = \\vec{0}$"
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P16-Q9] Diketahui $\\vec{a} = \\binom{2}{-3}$ dan $\\vec{b} = \\binom{-4}{1}$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. $\\vec{a} + \\vec{b} = \\binom{-2}{-2}$",
            "B. $\\vec{a} - \\vec{b} = \\binom{6}{-4}$",
            "C. $\\vec{b} - \\vec{a} = \\binom{6}{-4}$",
            "D. $\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}$",
            "E. $(\\vec{a} - \\vec{b}) + \\vec{b} = \\vec{a}$"
          ],
          "kunci": "A, B, D, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P16-Q10] Diketahui $\\vec{a} = \\binom{8}{-5}$, $\\vec{b} = \\binom{-3}{2}$, dan $\\vec{c} = \\binom{1}{6}$. Komponen BAWAH dari $\\vec{a} + \\vec{b} + \\vec{c}$ adalah $\\dots$",
          "opsi": [],
          "kunci": "3",
          "bahas": ""
        }
      ]
    },
    "P17": {
      "id": "P17",
      "subject": "wajib",
      "title": "P17 • Perkalian Vektor dengan Skalar dan Vektor Segaris",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P17-Q1] Jika $k < 0$ dan $\\vec{a}$ bukan vektor nol, maka vektor $k\\vec{a}$ $\\dots$",
          "opsi": [
            "A. searah dengan $\\vec{a}$ dan selalu lebih panjang",
            "B. berlawanan arah dengan $\\vec{a}$",
            "C. tegak lurus terhadap $\\vec{a}$",
            "D. selalu sama dengan vektor nol",
            "E. searah dengan $\\vec{a}$ dan selalu lebih pendek"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P17-Q2] Diketahui $\\vec{a} = \\binom{-2}{5}$. Hasil $3\\vec{a}$ adalah $\\dots$",
          "opsi": [
            "A. $\\binom{-6}{5}$",
            "B. $\\binom{6}{15}$",
            "C. $\\binom{-5}{8}$",
            "D. $\\binom{-6}{15}$",
            "E. $\\binom{6}{-15}$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P17-Q3] Diketahui $\\vec{p} = \\binom{6}{-9}$. Hasil $-\\frac{2}{3}\\vec{p}$ adalah $\\dots$",
          "opsi": [
            "A. $\\binom{4}{-6}$",
            "B. $\\binom{-4}{-6}$",
            "C. $\\binom{-4}{6}$",
            "D. $\\binom{-9}{6}$",
            "E. $\\binom{9}{-6}$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q4] Diketahui $\\vec{a} = \\binom{3}{-1}$ dan $\\vec{b} = \\binom{-2}{4}$. Hasil $2\\vec{a} - 3\\vec{b}$ adalah $\\dots$",
          "opsi": [
            "A. $\\binom{12}{-14}$",
            "B. $\\binom{0}{10}$",
            "C. $\\binom{12}{14}$",
            "D. $\\binom{-12}{14}$",
            "E. $\\binom{6}{-2}$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q5] Vektor yang SEGARIS dengan $\\binom{4}{-6}$ adalah $\\dots$",
          "opsi": [
            "A. $\\binom{6}{4}$",
            "B. $\\binom{-3}{2}$",
            "C. $\\binom{2}{3}$",
            "D. $\\binom{-6}{-9}$",
            "E. $\\binom{-6}{9}$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q6] Vektor $\\binom{p}{6}$ segaris dengan $\\binom{4}{-8}$. Nilai $p$ adalah $\\dots$",
          "opsi": [
            "A. $-4$",
            "B. $-3$",
            "C. $3$",
            "D. $-12$",
            "E. $\\frac{4}{3}$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q7] Diberikan titik $A(1,2)$, $B(4,8)$, dan $C(6,12)$. Pernyataan yang BENAR adalah $\\dots$",
          "opsi": [
            "A. ketiga titik itu tidak terletak pada satu garis",
            "B. $\\vec{AB}$ dan $\\vec{AC}$ saling tegak lurus",
            "C. $\\vec{AC} = 2\\,\\vec{AB}$",
            "D. ketiga titik itu segaris, sebab $\\vec{AC} = \\frac{5}{3}\\,\\vec{AB}$",
            "E. $\\vec{AB} = \\vec{AC}$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) $0 \\cdot \\vec{a} = \\vec{0}$ untuk setiap vektor $\\vec{a}$",
            "(2) Vektor $\\binom{2}{5}$ dan $\\binom{-6}{-15}$ saling segaris",
            "(3) $k(\\vec{a} + \\vec{b}) = k\\vec{a} + \\vec{b}$ berlaku untuk setiap $k$"
          ],
          "kunci": "B - B - S",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q9] Diketahui $\\vec{a} = \\binom{-3}{2}$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. $4\\vec{a} = \\binom{-12}{8}$",
            "B. $-\\vec{a} = \\binom{3}{-2}$",
            "C. $\\vec{a}$ segaris dengan $\\binom{9}{-6}$",
            "D. $\\vec{a}$ segaris dengan $\\binom{2}{-3}$",
            "E. $2\\vec{a}$ berlawanan arah dengan $\\vec{a}$"
          ],
          "kunci": "A, B, C",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P17-Q10] Vektor $\\binom{-5}{k}$ segaris dengan $\\binom{15}{9}$. Nilai $k$ adalah $\\dots$",
          "opsi": [],
          "kunci": "-3",
          "bahas": ""
        }
      ]
    },
    "P18": {
      "id": "P18",
      "subject": "wajib",
      "title": "P18 • Panjang Vektor dan Vektor Satuan",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P18-Q1] Panjang vektor $\\binom{x}{y}$ dihitung dengan $\\dots$",
          "opsi": [
            "A. $x + y$",
            "B. $\\frac{x}{y}$",
            "C. $x^2 + y^2$",
            "D. $\\sqrt{x} + \\sqrt{y}$",
            "E. $\\sqrt{x^2 + y^2}$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P18-Q2] Panjang vektor $\\binom{-8}{6}$ adalah $\\dots$",
          "opsi": [
            "A. $10$",
            "B. $14$",
            "C. $2$",
            "D. $100$",
            "E. $\\sqrt{28}$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P18-Q3] Panjang vektor $\\binom{3}{-3}$ adalah $\\dots$",
          "opsi": [
            "A. $6$",
            "B. $0$",
            "C. $9$",
            "D. $3\\sqrt{2}$",
            "E. $\\sqrt{6}$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P18-Q4] Jarak antara titik $A(2,-3)$ dan $B(7,9)$ adalah $\\dots$",
          "opsi": [
            "A. $17$",
            "B. $\\sqrt{17}$",
            "C. $13$",
            "D. $169$",
            "E. $7$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q5] Vektor satuan yang searah dengan $\\binom{-6}{8}$ adalah $\\dots$",
          "opsi": [
            "A. $\\begin{pmatrix} -6 \\\\ 8 \\end{pmatrix}$",
            "B. $\\begin{pmatrix} -\\frac{3}{5} \\\\ \\frac{4}{5} \\end{pmatrix}$",
            "C. $\\begin{pmatrix} \\frac{3}{5} \\\\ -\\frac{4}{5} \\end{pmatrix}$",
            "D. $\\begin{pmatrix} -\\frac{3}{10} \\\\ \\frac{4}{10} \\end{pmatrix}$",
            "E. $\\begin{pmatrix} -\\frac{1}{6} \\\\ \\frac{1}{8} \\end{pmatrix}$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P18-Q6] Diketahui $|\\vec{a}| = 5$. Panjang $-3\\vec{a}$ adalah $\\dots$",
          "opsi": [
            "A. $-15$",
            "B. $5$",
            "C. $\\frac{5}{3}$",
            "D. $8$",
            "E. $15$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q7] Vektor $\\binom{p}{-4}$ mempunyai panjang $5$. Nilai $p$ yang mungkin adalah $\\dots$",
          "opsi": [
            "A. $3$ atau $-3$",
            "B. $3$ saja",
            "C. $9$ atau $-9$",
            "D. $1$ atau $-1$",
            "E. $\\sqrt{41}$ atau $-\\sqrt{41}$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Panjang sebuah vektor tidak mungkin bernilai negatif",
            "(2) $|-\\vec{a}| = |\\vec{a}|$ untuk setiap vektor $\\vec{a}$",
            "(3) Panjang vektor $\\binom{3}{4}$ adalah $7$"
          ],
          "kunci": "B - B - S",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P18-Q9] Diketahui $\\vec{a} = \\binom{5}{-12}$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. $|\\vec{a}| = 13$",
            "B. $|\\vec{a}| = 17$",
            "C. vektor satuan searah $\\vec{a}$ adalah $\\begin{pmatrix} \\frac{5}{13} \\\\ -\\frac{12}{13} \\end{pmatrix}$",
            "D. $|2\\vec{a}| = 26$",
            "E. $|\\vec{a}| = |-\\vec{a}|$"
          ],
          "kunci": "A, C, D, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P18-Q10] Diketahui $A(-1,4)$ dan $B(11,-1)$. Panjang $\\vec{AB}$ adalah $\\dots$",
          "opsi": [],
          "kunci": "13",
          "bahas": ""
        }
      ]
    },
    "P19": {
      "id": "P19",
      "subject": "wajib",
      "title": "P19 • Penerapan Vektor pada Masalah Nyata",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P19-Q1] Sebuah pesawat tanpa awak terbang $30$ m ke timur, kemudian $40$ m ke utara. Besar perpindahannya adalah $\\dots$",
          "opsi": [
            "A. $70$ m",
            "B. $10$ m",
            "C. $50$ m",
            "D. $35$ m",
            "E. $2500$ m"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P19-Q2] Seorang anak berjalan $12$ m ke barat, kemudian $5$ m ke selatan. Besar perpindahannya adalah $\\dots$",
          "opsi": [
            "A. $17$ m",
            "B. $13$ m",
            "C. $7$ m",
            "D. $\\sqrt{17}$ m",
            "E. $169$ m"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q3] Dua gaya bekerja pada satu titik, yaitu $\\binom{9}{-2}$ newton dan $\\binom{-4}{6}$ newton. Besar resultannya adalah $\\dots$",
          "opsi": [
            "A. $\\sqrt{41}$ newton",
            "B. $\\sqrt{61}$ newton",
            "C. $9$ newton",
            "D. $41$ newton",
            "E. $\\sqrt{85}$ newton"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q4] Sebuah perahu diarahkan tegak lurus ke utara dengan kecepatan $8$ km/jam, sedangkan arus sungai mengalir ke timur dengan kecepatan $6$ km/jam. Besar kecepatan perahu yang sebenarnya adalah $\\dots$",
          "opsi": [
            "A. $14$ km/jam",
            "B. $2$ km/jam",
            "C. $48$ km/jam",
            "D. $10$ km/jam",
            "E. $\\sqrt{14}$ km/jam"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q5] Sebuah pesawat bergerak dengan vektor kecepatan tetap $\\binom{120}{-50}$ km/jam. Besar perpindahannya setelah $2$ jam adalah $\\dots$",
          "opsi": [
            "A. $130$ km",
            "B. $170$ km",
            "C. $\\sqrt{130}$ km",
            "D. $520$ km",
            "E. $260$ km"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P19-Q6] Titik tengah ruas garis yang menghubungkan $A(-3,7)$ dan $B(9,1)$ adalah $\\dots$",
          "opsi": [
            "A. $(6, 8)$",
            "B. $(3, -3)$",
            "C. $(3, 4)$",
            "D. $(-6, 3)$",
            "E. $(12, -6)$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q7] Sebuah benda berpindah dari $A(2,1)$ ke $B(6,4)$, lalu dari $B$ ke $C(9,8)$. Panjang LINTASAN yang ditempuhnya adalah $\\dots$",
          "opsi": [
            "A. $5$ satuan",
            "B. $10$ satuan",
            "C. $7\\sqrt{2}$ satuan",
            "D. $14$ satuan",
            "E. $\\sqrt{58}$ satuan"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Besar perpindahan dan panjang lintasan selalu bernilai sama",
            "(2) Resultan dua gaya yang sama besar dan berlawanan arah adalah vektor nol",
            "(3) Kecepatan termasuk besaran vektor"
          ],
          "kunci": "S - B - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P19-Q9] Sebuah kapal berlayar $9$ km ke timur, kemudian $12$ km ke utara. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. vektor perpindahannya $\\binom{9}{12}$ km",
            "B. besar perpindahannya $21$ km",
            "C. besar perpindahannya $15$ km",
            "D. panjang lintasan yang ditempuhnya $21$ km",
            "E. panjang lintasannya sama dengan besar perpindahannya"
          ],
          "kunci": "A, C, D",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P19-Q10] Sebuah mobil berpindah dengan vektor perpindahan $\\binom{-24}{7}$ km. Besar perpindahannya, dalam km, adalah $\\dots$",
          "opsi": [],
          "kunci": "25",
          "bahas": ""
        }
      ]
    },
    "P20": {
      "id": "P20",
      "subject": "wajib",
      "title": "P20 • Perbandingan Trigonometri pada Segitiga Siku-siku",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P20-Q1] Pada segitiga siku-siku, nilai sinus suatu sudut lancip adalah perbandingan antara $\\dots$",
          "opsi": [
            "A. sisi samping dengan sisi miring",
            "B. sisi depan dengan sisi samping",
            "C. sisi depan dengan sisi miring",
            "D. sisi miring dengan sisi depan",
            "E. sisi samping dengan sisi depan"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P20-Q2] Sebuah segitiga siku-siku mempunyai sisi depan $3$ dan sisi samping $4$ terhadap sudut $\\alpha$. Nilai $\\sin \\alpha$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{3}{5}$",
            "B. $\\frac{4}{5}$",
            "C. $\\frac{3}{4}$",
            "D. $\\frac{5}{3}$",
            "E. $\\frac{4}{3}$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P20-Q3] Pada segitiga $ABC$ yang siku-siku di $B$, diketahui $AB = 8$ dan $BC = 6$. Nilai $\\cos A$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{3}{5}$",
            "B. $\\frac{3}{4}$",
            "C. $\\frac{5}{4}$",
            "D. $\\frac{4}{5}$",
            "E. $\\frac{4}{3}$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q4] Diketahui $\\sin \\alpha = \\frac{5}{13}$ dengan $\\alpha$ sudut lancip. Nilai $\\tan \\alpha$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{12}{13}$",
            "B. $\\frac{5}{12}$",
            "C. $\\frac{12}{5}$",
            "D. $\\frac{13}{12}$",
            "E. $\\frac{13}{5}$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q5] Sebuah segitiga siku-siku mempunyai sisi miring $25$ dan salah satu sisi tegaknya $7$. Nilai tangen sudut yang menghadap sisi $7$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{7}{25}$",
            "B. $\\frac{24}{25}$",
            "C. $\\frac{25}{24}$",
            "D. $\\frac{24}{7}$",
            "E. $\\frac{7}{24}$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q6] Diketahui $\\tan \\beta = \\frac{8}{15}$ dengan $\\beta$ sudut lancip. Nilai $\\sin \\beta + \\cos \\beta$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{23}{15}$",
            "B. $\\frac{7}{17}$",
            "C. $\\frac{23}{17}$",
            "D. $\\frac{17}{23}$",
            "E. $\\frac{120}{289}$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q7] Pada segitiga $PQR$ yang siku-siku di $Q$, diketahui $PQ = 9$ dan $PR = 15$. Nilai $\\tan P$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{4}{3}$",
            "B. $\\frac{3}{4}$",
            "C. $\\frac{3}{5}$",
            "D. $\\frac{4}{5}$",
            "E. $\\frac{5}{3}$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Nilai sinus sebuah sudut lancip selalu kurang dari $1$",
            "(2) Nilai tangen sebuah sudut lancip selalu kurang dari $1$",
            "(3) Pada segitiga siku-siku bersisi $6$, $8$, dan $10$, kosinus sudut terkecilnya adalah $\\frac{4}{5}$"
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P20-Q9] Sebuah segitiga siku-siku mempunyai kedua sisi tegak $9$ dan $12$. Misalkan $\\alpha$ sudut yang menghadap sisi $9$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. sisi miringnya $15$",
            "B. $\\sin \\alpha = \\frac{3}{5}$",
            "C. $\\cos \\alpha = \\frac{3}{4}$",
            "D. $\\tan \\alpha = \\frac{3}{4}$",
            "E. $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$"
          ],
          "kunci": "A, B, D, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P20-Q10] Sebuah segitiga siku-siku mempunyai sisi miring $26$ dan salah satu sisi tegaknya $10$. Panjang sisi tegak yang lain adalah $\\dots$",
          "opsi": [],
          "kunci": "24",
          "bahas": ""
        }
      ]
    },
    "P21": {
      "id": "P21",
      "subject": "wajib",
      "title": "P21 • Perbandingan Trigonometri Sudut Istimewa",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P21-Q1] Nilai $\\sin 30^\\circ$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{1}{3}$",
            "B. $\\frac{1}{2}$",
            "C. $\\frac{1}{2}\\sqrt{2}$",
            "D. $\\frac{1}{2}\\sqrt{3}$",
            "E. $1$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P21-Q2] Nilai $\\cos 45^\\circ$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{1}{2}$",
            "B. $\\frac{1}{2}\\sqrt{3}$",
            "C. $\\sqrt{2}$",
            "D. $\\frac{1}{2}\\sqrt{2}$",
            "E. $1$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P21-Q3] Nilai $\\tan 60^\\circ$ adalah $\\dots$",
          "opsi": [
            "A. $\\sqrt{3}$",
            "B. $\\frac{1}{3}\\sqrt{3}$",
            "C. $1$",
            "D. $\\frac{1}{2}\\sqrt{3}$",
            "E. $3$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P21-Q4] Nilai $\\sin 30^\\circ + \\cos 60^\\circ$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{1}{2}$",
            "B. $\\sqrt{3}$",
            "C. $\\frac{1}{2}\\sqrt{3}$",
            "D. $\\frac{3}{2}$",
            "E. $1$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P21-Q5] Nilai $\\sin 60^\\circ \\cdot \\cos 30^\\circ$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{1}{2}$",
            "B. $\\frac{1}{4}$",
            "C. $\\frac{3}{4}$",
            "D. $\\frac{1}{2}\\sqrt{3}$",
            "E. $\\frac{3}{2}$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q6] Nilai $\\frac{\\sin 60^\\circ}{\\cos 30^\\circ}$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{1}{2}$",
            "B. $1$",
            "C. $\\sqrt{3}$",
            "D. $\\frac{3}{4}$",
            "E. $\\frac{1}{3}\\sqrt{3}$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q7] Nilai $2\\sin 30^\\circ \\cdot \\cos 60^\\circ + \\tan 45^\\circ$ adalah $\\dots$",
          "opsi": [
            "A. $1$",
            "B. $\\frac{1}{2}$",
            "C. $2$",
            "D. $\\frac{3}{2}$",
            "E. $\\frac{5}{2}$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P21-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) $\\sin 45^\\circ = \\cos 45^\\circ$",
            "(2) $\\tan 90^\\circ = 0$",
            "(3) $\\cos 0^\\circ = 1$"
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P21-Q9] Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. $\\sin 0^\\circ = 0$",
            "B. $\\cos 90^\\circ = 1$",
            "C. $\\tan 30^\\circ = \\frac{1}{3}\\sqrt{3}$",
            "D. $\\sin 60^\\circ = \\cos 30^\\circ$",
            "E. $\\tan 45^\\circ = 1$"
          ],
          "kunci": "A, C, D, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P21-Q10] Nilai $4\\sin 30^\\circ + 2\\cos 0^\\circ$ adalah $\\dots$",
          "opsi": [],
          "kunci": "4",
          "bahas": ""
        }
      ]
    },
    "P22": {
      "id": "P22",
      "subject": "wajib",
      "title": "P22 • Menentukan Panjang Sisi dan Besar Sudut",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P22-Q1] Sebuah segitiga siku-siku mempunyai sudut $30^\\circ$ dan sisi miring $20$ cm. Panjang sisi di depan sudut $30^\\circ$ adalah $\\dots$",
          "opsi": [
            "A. $20$ cm",
            "B. $10\\sqrt{3}$ cm",
            "C. $\\frac{20}{3}\\sqrt{3}$ cm",
            "D. $5$ cm",
            "E. $10$ cm"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P22-Q2] Sebuah segitiga siku-siku mempunyai sudut $60^\\circ$ dan sisi samping yang mengapit sudut itu sepanjang $8$ cm. Panjang sisi di depan sudut $60^\\circ$ adalah $\\dots$",
          "opsi": [
            "A. $8$ cm",
            "B. $8\\sqrt{3}$ cm",
            "C. $4\\sqrt{3}$ cm",
            "D. $16$ cm",
            "E. $\\frac{8}{3}\\sqrt{3}$ cm"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P22-Q3] Sebuah segitiga siku-siku mempunyai sudut $45^\\circ$ dan sisi di depan sudut itu sepanjang $7$ cm. Panjang sisi miringnya adalah $\\dots$",
          "opsi": [
            "A. $7$ cm",
            "B. $14$ cm",
            "C. $7\\sqrt{2}$ cm",
            "D. $\\frac{7}{2}\\sqrt{2}$ cm",
            "E. $7\\sqrt{3}$ cm"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P22-Q4] Sebuah segitiga siku-siku mempunyai sisi miring $12$ cm dan sudut $60^\\circ$. Panjang sisi yang mengapit sudut $60^\\circ$ selain sisi miringnya adalah $\\dots$",
          "opsi": [
            "A. $6$ cm",
            "B. $6\\sqrt{3}$ cm",
            "C. $12\\sqrt{3}$ cm",
            "D. $4\\sqrt{3}$ cm",
            "E. $3$ cm"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P22-Q5] Pada sebuah segitiga siku-siku, sisi depan dan sisi miring terhadap sudut $\\alpha$ berturut-turut $5$ dan $10$. Besar $\\alpha$ adalah $\\dots$",
          "opsi": [
            "A. $60^\\circ$",
            "B. $45^\\circ$",
            "C. $90^\\circ$",
            "D. $30^\\circ$",
            "E. $0^\\circ$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P22-Q6] Sebuah segitiga siku-siku sama kaki mempunyai panjang kaki $6$ cm. Besar sudut lancipnya dan panjang sisi miringnya berturut-turut adalah $\\dots$",
          "opsi": [
            "A. $30^\\circ$ dan $12$ cm",
            "B. $60^\\circ$ dan $6\\sqrt{3}$ cm",
            "C. $45^\\circ$ dan $12$ cm",
            "D. $30^\\circ$ dan $6\\sqrt{2}$ cm",
            "E. $45^\\circ$ dan $6\\sqrt{2}$ cm"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P22-Q7] Sebuah tangga bersandar pada dinding dan membentuk sudut $60^\\circ$ dengan lantai. Panjang tangga $4$ m. Tinggi ujung atas tangga dari lantai adalah $\\dots$",
          "opsi": [
            "A. $2$ m",
            "B. $2\\sqrt{3}$ m",
            "C. $4\\sqrt{3}$ m",
            "D. $\\frac{4}{3}\\sqrt{3}$ m",
            "E. $8$ m"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P22-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Pada segitiga siku-siku bersudut $30^\\circ$, sisi di depan sudut $30^\\circ$ selalu separuh sisi miringnya",
            "(2) Pada segitiga siku-siku sama kaki, kedua sudut lancipnya masing-masing $45^\\circ$",
            "(3) Segitiga siku-siku bersudut $60^\\circ$ dengan sisi miring $10$ mempunyai sisi di depan $60^\\circ$ sepanjang $5$"
          ],
          "kunci": "B - B - S",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P22-Q9] Pada segitiga $ABC$ yang siku-siku di $C$, diketahui besar sudut $A = 30^\\circ$ dan $AB = 16$ cm. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. $BC = 8$ cm",
            "B. $AC = 8\\sqrt{3}$ cm",
            "C. besar sudut $B = 60^\\circ$",
            "D. $AC = 8$ cm",
            "E. $BC = 8\\sqrt{3}$ cm"
          ],
          "kunci": "A, B, C",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P22-Q10] Sebuah segitiga siku-siku mempunyai sudut $30^\\circ$ dan sisi miring $18$ cm. Panjang sisi di depan sudut $30^\\circ$, dalam cm, adalah $\\dots$",
          "opsi": [],
          "kunci": "9",
          "bahas": ""
        }
      ]
    },
    "P23": {
      "id": "P23",
      "subject": "wajib",
      "title": "P23 • Cosecan, Secan, dan Cotangen",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P23-Q1] Perbandingan trigonometri yang merupakan kebalikan dari sinus adalah $\\dots$",
          "opsi": [
            "A. cosecan",
            "B. secan",
            "C. cotangen",
            "D. tangen",
            "E. kosinus"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P23-Q2] Rumus cotangen sebuah sudut dinyatakan sebagai $\\dots$",
          "opsi": [
            "A. $\\frac{1}{\\sin \\alpha}$",
            "B. $\\frac{1}{\\cos \\alpha}$",
            "C. $\\frac{\\cos \\alpha}{\\sin \\alpha}$",
            "D. $\\frac{\\sin \\alpha}{\\cos \\alpha}$",
            "E. $\\frac{1}{\\sin \\alpha \\cos \\alpha}$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P23-Q3] Jika $\\sin \\alpha = \\frac{3}{5}$, maka nilai $\\csc \\alpha$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{3}{5}$",
            "B. $\\frac{4}{5}$",
            "C. $\\frac{5}{4}$",
            "D. $\\frac{4}{3}$",
            "E. $\\frac{5}{3}$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P23-Q4] Nilai $\\sec 60^\\circ$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{1}{2}$",
            "B. $\\sqrt{3}$",
            "C. $\\frac{2}{3}\\sqrt{3}$",
            "D. $2$",
            "E. $\\frac{1}{2}\\sqrt{3}$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P23-Q5] Nilai $\\cot 30^\\circ$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{1}{3}\\sqrt{3}$",
            "B. $\\sqrt{3}$",
            "C. $2$",
            "D. $\\frac{2}{3}\\sqrt{3}$",
            "E. $\\frac{1}{2}\\sqrt{3}$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P23-Q6] Diketahui $\\tan \\alpha = \\frac{12}{5}$ dengan $\\alpha$ lancip. Nilai $\\sec \\alpha$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{13}{5}$",
            "B. $\\frac{13}{12}$",
            "C. $\\frac{5}{13}$",
            "D. $\\frac{12}{13}$",
            "E. $\\frac{5}{12}$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P23-Q7] Nilai $\\csc 30^\\circ \\cdot \\cos 60^\\circ$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{1}{2}$",
            "B. $2$",
            "C. $1$",
            "D. $4$",
            "E. $\\frac{1}{4}$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P23-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) $\\csc 90^\\circ = 1$",
            "(2) $\\sec 0^\\circ = 0$",
            "(3) $\\cot 45^\\circ = 1$"
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P23-Q9] Diketahui $\\cos \\alpha = \\frac{8}{17}$ dengan $\\alpha$ lancip. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. $\\sec \\alpha = \\frac{17}{8}$",
            "B. $\\sin \\alpha = \\frac{15}{17}$",
            "C. $\\csc \\alpha = \\frac{17}{15}$",
            "D. $\\cot \\alpha = \\frac{15}{8}$",
            "E. $\\tan \\alpha = \\frac{15}{8}$"
          ],
          "kunci": "A, B, C, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P23-Q10] Jika $\\cos \\alpha = \\frac{1}{4}$, maka nilai $\\sec \\alpha$ adalah $\\dots$",
          "opsi": [],
          "kunci": "4",
          "bahas": ""
        }
      ]
    },
    "P24": {
      "id": "P24",
      "subject": "wajib",
      "title": "P24 • Hubungan Antarperbandingan dan Sudut Penyiku",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P24-Q1] Identitas dasar trigonometri yang BENAR adalah $\\dots$",
          "opsi": [
            "A. $\\sin \\alpha + \\cos \\alpha = 1$",
            "B. $\\sin^2 \\alpha - \\cos^2 \\alpha = 1$",
            "C. $\\tan \\alpha = \\frac{\\cos \\alpha}{\\sin \\alpha}$",
            "D. $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$",
            "E. $\\tan^2 \\alpha + 1 = \\sin^2 \\alpha$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P24-Q2] Diketahui $\\sin \\alpha = \\frac{7}{25}$ dengan $\\alpha$ lancip. Nilai $\\cos \\alpha$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{18}{25}$",
            "B. $\\frac{7}{24}$",
            "C. $\\frac{25}{24}$",
            "D. $\\frac{24}{7}$",
            "E. $\\frac{24}{25}$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P24-Q3] Nilai $\\sin 37^\\circ$ sama dengan $\\dots$",
          "opsi": [
            "A. $\\cos 37^\\circ$",
            "B. $\\cos 53^\\circ$",
            "C. $\\sin 53^\\circ$",
            "D. $\\tan 53^\\circ$",
            "E. $\\tan 37^\\circ$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P24-Q4] Diketahui $\\tan \\alpha = \\frac{3}{4}$ dengan $\\alpha$ lancip. Nilai $\\sin \\alpha \\cdot \\cos \\alpha$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{3}{4}$",
            "B. $\\frac{7}{25}$",
            "C. $\\frac{12}{25}$",
            "D. $\\frac{25}{12}$",
            "E. $\\frac{12}{20}$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P24-Q5] Diketahui $\\cos \\alpha = \\frac{5}{13}$ dengan $\\alpha$ lancip. Nilai $\\frac{\\sin \\alpha}{\\tan \\alpha}$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{5}{13}$",
            "B. $\\frac{12}{13}$",
            "C. $\\frac{13}{5}$",
            "D. $\\frac{144}{169}$",
            "E. $\\frac{12}{5}$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P24-Q6] Nilai $\\sin^2 25^\\circ + \\sin^2 65^\\circ$ adalah $\\dots$",
          "opsi": [
            "A. $0$",
            "B. $\\frac{1}{2}$",
            "C. $2$",
            "D. $1$",
            "E. $\\frac{1}{2}\\sqrt{2}$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P24-Q7] Diketahui $\\tan \\alpha = 1$ dengan $\\alpha$ sudut lancip. Nilai $\\sin \\alpha + \\cos \\alpha$ adalah $\\dots$",
          "opsi": [
            "A. $1$",
            "B. $2$",
            "C. $\\frac{1}{2}\\sqrt{2}$",
            "D. $\\frac{3}{2}$",
            "E. $\\sqrt{2}$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P24-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) $\\sin 30^\\circ = \\cos 60^\\circ$",
            "(2) $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ hanya berlaku untuk sudut istimewa",
            "(3) $\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}$ berlaku untuk setiap $\\alpha$ dengan $\\cos \\alpha \\neq 0$"
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P24-Q9] Diketahui $\\alpha$ sudut lancip dengan $\\sin \\alpha = \\frac{20}{29}$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. $\\cos \\alpha = \\frac{21}{29}$",
            "B. $\\tan \\alpha = \\frac{20}{21}$",
            "C. $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$",
            "D. $\\cos \\alpha = \\frac{9}{29}$",
            "E. $\\sin \\alpha = \\cos(90^\\circ - \\alpha)$"
          ],
          "kunci": "A, B, C, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P24-Q10] Nilai $\\cos^2 40^\\circ + \\cos^2 50^\\circ$ adalah $\\dots$",
          "opsi": [],
          "kunci": "1",
          "bahas": ""
        }
      ]
    },
    "P25": {
      "id": "P25",
      "subject": "wajib",
      "title": "P25 • Sudut Elevasi dan Sudut Depresi",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P25-Q1] Sudut elevasi adalah sudut yang dibentuk oleh $\\dots$",
          "opsi": [
            "A. garis pandang ke bawah dengan garis mendatar",
            "B. garis pandang ke atas dengan garis mendatar",
            "C. dua garis pandang yang saling tegak lurus",
            "D. garis mendatar dengan garis tegak",
            "E. garis pandang dengan garis tegak"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P25-Q2] Sebuah tiang dipandang dari jarak mendatar $60$ m dengan sudut elevasi $30^\\circ$. Tinggi puncak tiang diukur dari ketinggian mata pengamat adalah $\\dots$",
          "opsi": [
            "A. $20\\sqrt{3}$ m",
            "B. $60\\sqrt{3}$ m",
            "C. $30$ m",
            "D. $20$ m",
            "E. $30\\sqrt{3}$ m"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P25-Q3] Puncak sebuah menara dipandang dengan sudut elevasi $45^\\circ$ dari jarak mendatar $25$ m. Tinggi menara diukur dari ketinggian mata pengamat adalah $\\dots$",
          "opsi": [
            "A. $25\\sqrt{2}$ m",
            "B. $50$ m",
            "C. $25$ m",
            "D. $\\frac{25}{2}\\sqrt{2}$ m",
            "E. $12{,}5$ m"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P25-Q4] Dari puncak sebuah gedung setinggi $40$ m, sebuah mobil terlihat dengan sudut depresi $60^\\circ$. Jarak mobil itu dari kaki gedung adalah $\\dots$",
          "opsi": [
            "A. $40\\sqrt{3}$ m",
            "B. $80$ m",
            "C. $20\\sqrt{3}$ m",
            "D. $20$ m",
            "E. $\\frac{40}{3}\\sqrt{3}$ m"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P25-Q5] Seorang pengamat dengan tinggi mata $1{,}6$ m melihat puncak sebuah pohon dengan sudut elevasi $45^\\circ$ dari jarak mendatar $10$ m. Tinggi pohon itu adalah $\\dots$",
          "opsi": [
            "A. $10$ m",
            "B. $8{,}4$ m",
            "C. $10{,}6$ m",
            "D. $11{,}6$ m",
            "E. $16$ m"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P25-Q6] Sebuah layang-layang diterbangkan dengan benang lurus sepanjang $50$ m yang membentuk sudut elevasi $60^\\circ$ dengan tanah. Tinggi layang-layang dari tanah adalah $\\dots$",
          "opsi": [
            "A. $25$ m",
            "B. $25\\sqrt{3}$ m",
            "C. $50\\sqrt{3}$ m",
            "D. $\\frac{50}{3}\\sqrt{3}$ m",
            "E. $100$ m"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P25-Q7] Dari puncak sebuah mercusuar setinggi $30$ m, sebuah perahu terlihat dengan sudut depresi $30^\\circ$. Jarak perahu dari kaki mercusuar adalah $\\dots$",
          "opsi": [
            "A. $30\\sqrt{3}$ m",
            "B. $10\\sqrt{3}$ m",
            "C. $60$ m",
            "D. $15$ m",
            "E. $30$ m"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P25-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Sudut depresi diukur dari garis mendatar ke arah bawah",
            "(2) Sudut elevasi selalu lebih besar daripada $90^\\circ$",
            "(3) Bila dua orang pada ketinggian berbeda saling memandang, sudut elevasi dari bawah sama besar dengan sudut depresi dari atas"
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P25-Q9] Sebuah pohon dipandang dari jarak mendatar $12$ m dengan sudut elevasi $60^\\circ$, sedangkan tinggi mata pengamatnya $1{,}5$ m. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. tinggi puncak pohon di atas ketinggian mata adalah $12\\sqrt{3}$ m",
            "B. jarak pandang dari mata ke puncak pohon adalah $24$ m",
            "C. tinggi pohon seluruhnya adalah $(12\\sqrt{3} + 1{,}5)$ m",
            "D. tinggi puncak pohon di atas ketinggian mata adalah $6\\sqrt{3}$ m",
            "E. jarak pandang dari mata ke puncak pohon adalah $12\\sqrt{3}$ m"
          ],
          "kunci": "A, B, C",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P25-Q10] Sebuah menara dipandang dari jarak mendatar $45$ m dengan sudut elevasi $45^\\circ$. Tinggi menara diukur dari ketinggian mata pengamat, dalam meter, adalah $\\dots$",
          "opsi": [],
          "kunci": "45",
          "bahas": ""
        }
      ]
    },
    "P26": {
      "id": "P26",
      "subject": "wajib",
      "title": "P26 • Penerapan Trigonometri pada Masalah Nyata",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P26-Q1] Sebuah jalan menanjak membentuk sudut $30^\\circ$ dengan arah mendatar. Setelah menempuh $400$ m di sepanjang jalan itu, ketinggian yang dicapai adalah $\\dots$",
          "opsi": [
            "A. $400$ m",
            "B. $200\\sqrt{3}$ m",
            "C. $200$ m",
            "D. $\\frac{400}{3}\\sqrt{3}$ m",
            "E. $800$ m"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P26-Q2] Sebuah tangga sepanjang $6$ m bersandar pada dinding dan membentuk sudut $60^\\circ$ dengan lantai. Jarak kaki tangga ke dinding adalah $\\dots$",
          "opsi": [
            "A. $6\\sqrt{3}$ m",
            "B. $3\\sqrt{3}$ m",
            "C. $12$ m",
            "D. $3$ m",
            "E. $2\\sqrt{3}$ m"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P26-Q3] Sebuah kapal berlayar sejauh $80$ km dengan arah yang membentuk sudut $60^\\circ$ terhadap arah timur. Jarak yang ditempuhnya ke arah utara adalah $\\dots$",
          "opsi": [
            "A. $40\\sqrt{3}$ km",
            "B. $40$ km",
            "C. $80\\sqrt{3}$ km",
            "D. $\\frac{80}{3}\\sqrt{3}$ km",
            "E. $160$ km"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P26-Q4] Sebuah papan seluncur panjangnya $10$ m dan ujung atasnya berada pada ketinggian $5$ m. Besar sudut kemiringan papan itu terhadap tanah adalah $\\dots$",
          "opsi": [
            "A. $45^\\circ$",
            "B. $30^\\circ$",
            "C. $60^\\circ$",
            "D. $90^\\circ$",
            "E. $0^\\circ$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P26-Q5] Sebuah atap berbentuk segitiga sama kaki dengan lebar alas $12$ m. Sisi miring atapnya membentuk sudut $30^\\circ$ dengan alasnya. Panjang satu sisi miring atap itu adalah $\\dots$",
          "opsi": [
            "A. $6\\sqrt{3}$ m",
            "B. $12$ m",
            "C. $6$ m",
            "D. $3\\sqrt{3}$ m",
            "E. $4\\sqrt{3}$ m"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P26-Q6] Sebuah pesawat tanpa awak naik lurus membentuk sudut $45^\\circ$ dengan tanah dan menempuh $30$ m di sepanjang lintasannya. Jarak mendatar yang ditempuhnya adalah $\\dots$",
          "opsi": [
            "A. $30$ m",
            "B. $30\\sqrt{2}$ m",
            "C. $15\\sqrt{2}$ m",
            "D. $15$ m",
            "E. $15\\sqrt{3}$ m"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P26-Q7] Sebuah eskalator panjangnya $24$ m dengan sudut kemiringan $30^\\circ$. Beda tinggi antara kedua ujungnya adalah $\\dots$",
          "opsi": [
            "A. $24$ m",
            "B. $12\\sqrt{3}$ m",
            "C. $8\\sqrt{3}$ m",
            "D. $12$ m",
            "E. $48$ m"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P26-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Pada jalan menanjak bersudut $30^\\circ$, ketinggian yang dicapai selalu separuh panjang jalan yang ditempuh",
            "(2) Semakin besar sudut kemiringan tangga terhadap lantai, semakin jauh kaki tangga dari dinding",
            "(3) Sebuah tangga $10$ m dengan sudut $60^\\circ$ terhadap lantai mencapai tinggi $5\\sqrt{3}$ m"
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P26-Q9] Sebuah tangga sepanjang $8$ m bersandar pada dinding dan membentuk sudut $60^\\circ$ dengan lantai. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. tinggi ujung atas tangga adalah $4\\sqrt{3}$ m",
            "B. jarak kaki tangga ke dinding adalah $4$ m",
            "C. tinggi ujung atas tangga adalah $4$ m",
            "D. sudut antara tangga dan dinding adalah $30^\\circ$",
            "E. jarak kaki tangga ke dinding adalah $4\\sqrt{3}$ m"
          ],
          "kunci": "A, B, D",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P26-Q10] Sebuah jalan menanjak bersudut $30^\\circ$ ditempuh sejauh $90$ m di sepanjang jalannya. Ketinggian yang dicapai, dalam meter, adalah $\\dots$",
          "opsi": [],
          "kunci": "45",
          "bahas": ""
        }
      ]
    },
    "P27": {
      "id": "P27",
      "subject": "wajib",
      "title": "P27 • Persamaan Linear Tiga Variabel dan Model SPLTV",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P27-Q1] Persamaan berikut yang merupakan persamaan linear tiga variabel adalah $\\dots$",
          "opsi": [
            "A. $x^2 + y + z = 5$",
            "B. $xy + 2z = 7$",
            "C. $3x - 2y + z = 8$",
            "D. $\\frac{2}{x} + y - z = 1$",
            "E. $\\sqrt{x} + y + z = 4$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P27-Q2] Penyelesaian sistem $x + y + z = 6$, $x - y + z = 2$, dan $2x + y - z = 1$ adalah $\\dots$",
          "opsi": [
            "A. $(3, 2, 1)$",
            "B. $(2, 1, 3)$",
            "C. $(2, 2, 2)$",
            "D. $(1, 2, 3)$",
            "E. $(1, 3, 2)$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P27-Q3] Tripel $(2, -1, k)$ memenuhi persamaan $3x + 2y - z = 1$. Nilai $k$ adalah $\\dots$",
          "opsi": [
            "A. $1$",
            "B. $-3$",
            "C. $3$",
            "D. $5$",
            "E. $7$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P27-Q4] Ani membeli $2$ buku, $1$ pulpen, dan $1$ pensil seharga Rp$26.000$. Budi membeli $1$ buku, $2$ pulpen, dan $1$ pensil seharga Rp$21.000$. Cici membeli $1$ buku, $1$ pulpen, dan $2$ pensil seharga Rp$18.000$. Bila $x$, $y$, $z$ berturut-turut harga satu buku, satu pulpen, dan satu pensil, model yang tepat adalah $\\dots$",
          "opsi": [
            "A. $2x + y + z = 18.000$, $x + 2y + z = 21.000$, $x + y + 2z = 26.000$",
            "B. $2x + y + z = 26.000$, $x + 2y + z = 21.000$, $x + y + 2z = 18.000$",
            "C. $x + 2y + 2z = 26.000$, $2x + y + 2z = 21.000$, $2x + 2y + z = 18.000$",
            "D. $2x + 2y + z = 26.000$, $x + 2y + 2z = 21.000$, $2x + y + 2z = 18.000$",
            "E. $x + y + z = 26.000$, $x + y + z = 21.000$, $x + y + z = 18.000$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P27-Q5] Jumlah tiga bilangan adalah $30$. Bilangan pertama sama dengan jumlah dua bilangan lainnya, dan bilangan kedua $3$ lebih besar daripada bilangan ketiga. Bilangan kedua adalah $\\dots$",
          "opsi": [
            "A. $15$",
            "B. $6$",
            "C. $12$",
            "D. $3$",
            "E. $9$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P27-Q6] Diketahui $x + y + z = 12$, $y = 2x$, dan $z = 3x$. Nilai $z$ adalah $\\dots$",
          "opsi": [
            "A. $6$",
            "B. $2$",
            "C. $4$",
            "D. $12$",
            "E. $8$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P27-Q7] Diketahui $x + y = 5$, $y + z = 7$, dan $x + z = 6$. Nilai $x + y + z$ adalah $\\dots$",
          "opsi": [
            "A. $18$",
            "B. $6$",
            "C. $12$",
            "D. $9$",
            "E. $3$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P27-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Persamaan $2x + yz = 5$ adalah persamaan linear tiga variabel.",
            "(2) Tripel $(1, 0, 2)$ adalah penyelesaian sistem $2x + y + z = 4$, $x - y + z = 3$, $x + y - z = -1$.",
            "(3) Sebuah tripel yang memenuhi dua dari tiga persamaan SPLTV sudah pasti merupakan penyelesaian sistem itu."
          ],
          "kunci": "S - B - S",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P27-Q9] Pilihlah SEMUA tripel yang memenuhi persamaan $x + y + z = 4$.",
          "opsi": [
            "A. $(1, 1, 2)$",
            "B. $(0, 4, 0)$",
            "C. $(2, 2, 2)$",
            "D. $(-1, 3, 2)$",
            "E. $(3, 2, 1)$"
          ],
          "kunci": "A, B, D",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P27-Q10] Diketahui $x + y = 7$, $y + z = 9$, dan $x + z = 8$. Nilai $x$ adalah $\\dots$",
          "opsi": [],
          "kunci": "3",
          "bahas": ""
        }
      ]
    },
    "P28": {
      "id": "P28",
      "subject": "wajib",
      "title": "P28 • Menyelesaikan SPLTV dengan Metode Substitusi",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P28-Q1] Pada sistem $2x + 3y + z = 10$, $3x + 2y + 4z = 15$, dan $4x + 5y + 3z = 20$, langkah substitusi yang paling mudah adalah menyatakan $\\dots$",
          "opsi": [
            "A. $x$ dari persamaan pertama",
            "B. $y$ dari persamaan kedua",
            "C. $z$ dari persamaan pertama",
            "D. $z$ dari persamaan kedua",
            "E. $x$ dari persamaan ketiga"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P28-Q2] Diketahui $x + y + z = 6$, $x = 2y$, dan $z = y + 2$. Nilai $y$ adalah $\\dots$",
          "opsi": [
            "A. $2$",
            "B. $1$",
            "C. $3$",
            "D. $4$",
            "E. $6$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P28-Q3] Bentuk $z = 5 - x - y$ disubstitusikan ke persamaan $2x - y + 3z = 9$. Hasilnya adalah $\\dots$",
          "opsi": [
            "A. $x - 2y = -6$",
            "B. $5x + 2y = -6$",
            "C. $x + 4y = -24$",
            "D. $x + 4y = 6$",
            "E. $x - 4y = 6$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P28-Q4] Penyelesaian sistem $x + 2y - z = 3$, $2x - y + z = 4$, dan $x + y + z = 4$ adalah $(x, y, z)$. Nilai $x$ adalah $\\dots$",
          "opsi": [
            "A. $2$",
            "B. $1$",
            "C. $4$",
            "D. $3$",
            "E. $-1$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P28-Q5] Diketahui $x + y = 5$, $y + z = 8$, dan $x + z = 7$. Nilai $z$ adalah $\\dots$",
          "opsi": [
            "A. $3$",
            "B. $10$",
            "C. $2$",
            "D. $7$",
            "E. $5$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P28-Q6] Penyelesaian sistem $2x + y - z = 1$, $x - y + 2z = 5$, dan $x + y + z = 6$ adalah $(x, y, z)$. Nilai $x + 2y + 3z$ adalah $\\dots$",
          "opsi": [
            "A. $12$",
            "B. $14$",
            "C. $16$",
            "D. $10$",
            "E. $18$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P28-Q7] Tripel $(a, b, c)$ adalah penyelesaian sistem $2x + 3y + z = 11$, $3x - y + 2z = 7$, dan $x + y - z = 0$. Nilai $a \\cdot b \\cdot c$ adalah $\\dots$",
          "opsi": [
            "A. $5$",
            "B. $12$",
            "C. $6$",
            "D. $9$",
            "E. $3$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P28-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Pada metode substitusi, sebaiknya dipilih variabel yang koefisiennya $1$ atau $-1$ agar tidak muncul pecahan.",
            "(2) Menyubstitusikan $z = 4 - x - y$ ke $3x + y - 2z = 1$ menghasilkan $5x + 3y = -7$.",
            "(3) Sistem $x = y + 1$, $y = z + 1$, $x + y + z = 9$ mempunyai penyelesaian $(4, 3, 2)$."
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P28-Q9] Pada sistem $x + y + z = 6$, $2x - y + z = 3$, dan $x + 2y - z = 2$, bentuk $z = 6 - x - y$ disubstitusikan ke persamaan kedua dan ketiga. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. Substitusi ke persamaan kedua menghasilkan $x - 2y = -3$.",
            "B. Substitusi ke persamaan ketiga menghasilkan $2x + 3y = 8$.",
            "C. Nilai $y = 2$.",
            "D. Nilai $x = 2$.",
            "E. Nilai $z = 3$."
          ],
          "kunci": "A, B, C, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P28-Q10] Diketahui $x = 2y$, $y = 3z$, dan $x + y + z = 20$. Nilai $x$ adalah $\\dots$",
          "opsi": [],
          "kunci": "12",
          "bahas": ""
        }
      ]
    },
    "P29": {
      "id": "P29",
      "subject": "wajib",
      "title": "P29 • Menyelesaikan SPLTV dengan Metode Eliminasi dan Gabungan",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P29-Q1] Untuk mengeliminasi $y$ dari persamaan $x + 2y - z = 4$ dan $3x - y + 2z = 5$ dengan cara menjumlahkan, persamaan kedua harus dikalikan dengan $\\dots$",
          "opsi": [
            "A. $\\frac{1}{2}$",
            "B. $-1$",
            "C. $2$",
            "D. $3$",
            "E. $-2$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P29-Q2] Diketahui $x + y + z = 10$, $x - y + z = 4$, dan $x + y - z = 2$. Nilai $z$ adalah $\\dots$",
          "opsi": [
            "A. $3$",
            "B. $2$",
            "C. $6$",
            "D. $4$",
            "E. $5$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P29-Q3] Hasil eliminasi $z$ dari persamaan $2x + y + z = 7$ dan $x - y + z = 2$ adalah $\\dots$",
          "opsi": [
            "A. $x + 2y = 5$",
            "B. $3x + 2z = 9$",
            "C. $x = 5$",
            "D. $x + 2y = 9$",
            "E. $3x = 9$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q4] Penyelesaian sistem $3x + 2y - z = -1$, $2x - 3y + 2z = 9$, dan $x + y + 3z = 6$ adalah $(x, y, z)$. Nilai $x + y + z$ adalah $\\dots$",
          "opsi": [
            "A. $0$",
            "B. $4$",
            "C. $2$",
            "D. $-2$",
            "E. $1$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q5] Sistem berikut yang TIDAK mempunyai penyelesaian adalah $\\dots$",
          "opsi": [
            "A. $x + y + z = 2$, $2x + 2y + 2z = 4$, $x - y = 0$",
            "B. $x + y + z = 2$, $2x + 2y + 2z = 5$, $x - y = 0$",
            "C. $x + y + z = 3$, $x - y + z = 1$, $x + y - z = 1$",
            "D. $x + y = 2$, $y + z = 2$, $x + z = 2$",
            "E. $x = 1$, $y = 1$, $z = 1$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P29-Q6] Diketahui $2x + y + z = 7$, $x + 2y + z = 8$, dan $x + y + 2z = 9$. Nilai $x + y + z$ adalah $\\dots$",
          "opsi": [
            "A. $24$",
            "B. $12$",
            "C. $8$",
            "D. $6$",
            "E. $3$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q7] Seorang siswa mengeliminasi sistem $x + y + z = 6$, $x - y + z = 2$, dan $2x + y - z = 1$, lalu memperoleh $3x + 2y = 7$ dan $3x = 3$. Nilai $y$ adalah $\\dots$",
          "opsi": [
            "A. $2$",
            "B. $1$",
            "C. $3$",
            "D. $\\frac{7}{3}$",
            "E. $\\frac{5}{2}$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Mengalikan satu persamaan dengan bilangan tak nol tidak mengubah penyelesaian sistemnya.",
            "(2) Menjumlahkan $x + y - z = 2$ dan $x - y + z = 4$ menghasilkan $2x = 6$, sehingga $x = 3$.",
            "(3) Jika eliminasi menghasilkan $0 = 5$, sistem itu mempunyai tak hingga banyak penyelesaian."
          ],
          "kunci": "B - B - S",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P29-Q9] Diketahui sistem $x + y + z = 6$, $x + 2y + 3z = 14$, dan $2x + y - z = 1$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. Persamaan kedua dikurangi persamaan pertama menghasilkan $y + 2z = 8$.",
            "B. Persamaan pertama ditambah persamaan ketiga menghasilkan $3x + 2y = 7$.",
            "C. Nilai $x = 2$.",
            "D. Nilai $z = 3$.",
            "E. Nilai $x + y = 4$."
          ],
          "kunci": "A, B, D",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P29-Q10] Diketahui $x + y + z = 2$, $x - y + z = 4$, dan $x + y - z = 0$. Nilai $2x + 3y + 4z$ adalah $\\dots$",
          "opsi": [],
          "kunci": "5",
          "bahas": ""
        }
      ]
    },
    "P30": {
      "id": "P30",
      "subject": "wajib",
      "title": "P30 • Penerapan SPLTV pada Masalah Nyata",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P30-Q1] Harga $1$ kg gula, $1$ kg beras, dan $1$ liter minyak berturut-turut $x$, $y$, dan $z$. Kalimat \"harga $2$ kg gula dan $3$ kg beras sama dengan harga $4$ liter minyak\" dimodelkan sebagai $\\dots$",
          "opsi": [
            "A. $2x + 3y + 4z = 0$",
            "B. $2x + 3y = 4z$",
            "C. $2x = 3y + 4z$",
            "D. $x + y = z$",
            "E. $4x + 3y = 2z$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P30-Q2] Jumlah umur ayah, ibu, dan anak adalah $80$ tahun. Ayah $3$ tahun lebih tua daripada ibu, dan umur ibu tiga kali umur anak. Umur ayah adalah $\\dots$",
          "opsi": [
            "A. $33$ tahun",
            "B. $11$ tahun",
            "C. $36$ tahun",
            "D. $39$ tahun",
            "E. $44$ tahun"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P30-Q3] Harga $2$ roti, $1$ susu, dan $1$ keju Rp$26.000$; $1$ roti, $2$ susu, dan $1$ keju Rp$25.000$; $1$ roti, $1$ susu, dan $2$ keju Rp$29.000$. Harga $1$ keju adalah $\\dots$",
          "opsi": [
            "A. Rp$6.000$",
            "B. Rp$5.000$",
            "C. Rp$20.000$",
            "D. Rp$9.000$",
            "E. Rp$8.000$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q4] Sebuah bilangan tiga angka mempunyai jumlah angka $15$. Angka ratusannya dua kali angka satuan, dan angka puluhannya $3$ lebih besar daripada angka satuan. Bilangan itu adalah $\\dots$",
          "opsi": [
            "A. $636$",
            "B. $366$",
            "C. $456$",
            "D. $663$",
            "E. $546$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q5] Terjual $100$ tiket: dewasa Rp$20.000$, pelajar Rp$15.000$, dan anak Rp$10.000$, dengan pendapatan Rp$1.600.000$. Banyak tiket pelajar dua kali tiket anak. Banyak tiket pelajar yang terjual adalah $\\dots$",
          "opsi": [
            "A. $20$",
            "B. $30$",
            "C. $60$",
            "D. $50$",
            "E. $40$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q6] Grafik $y = ax^2 + bx + c$ melalui titik $(1, 2)$, $(2, 3)$, dan $(3, 6)$. Nilai $a + b + c$ adalah $\\dots$",
          "opsi": [
            "A. $2$",
            "B. $3$",
            "C. $6$",
            "D. $1$",
            "E. $0$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P30-Q7] Tiga kelas mengumpulkan donasi Rp$1.200.000$. Kelas X-A mengumpulkan Rp$100.000$ lebih banyak daripada X-B, dan X-C mengumpulkan dua kali X-B. Donasi kelas X-A adalah $\\dots$",
          "opsi": [
            "A. Rp$275.000$",
            "B. Rp$375.000$",
            "C. Rp$550.000$",
            "D. Rp$400.000$",
            "E. Rp$300.000$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Jumlah umur tiga bersaudara $30$ tahun dan umur mereka berurutan berselisih $2$ tahun. Umur yang tertua $14$ tahun.",
            "(2) Parabola $y = ax^2 + bx + c$ yang melalui titik $(0, 5)$ pasti mempunyai $c = 5$.",
            "(3) Pada soal harga barang, jawaban $x = -2.000$ dapat diterima asalkan memenuhi ketiga persamaan."
          ],
          "kunci": "S - B - S",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q9] Harga $2$ kg apel, $1$ kg jeruk, dan $1$ kg mangga Rp$85.000$; $1$ kg apel, $2$ kg jeruk, dan $1$ kg mangga Rp$75.000$; $1$ kg apel, $1$ kg jeruk, dan $2$ kg mangga Rp$80.000$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. Harga $1$ kg apel, $1$ kg jeruk, dan $1$ kg mangga bersama-sama Rp$60.000$.",
            "B. Jeruk adalah buah yang paling murah.",
            "C. Selisih harga $1$ kg apel dan $1$ kg mangga Rp$10.000$.",
            "D. Harga $3$ kg mangga Rp$60.000$.",
            "E. Harga $1$ kg apel dan $1$ kg jeruk bersama-sama Rp$45.000$."
          ],
          "kunci": "A, B, D",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P30-Q10] Grafik $y = ax^2 + bx + c$ melalui titik $(0, 1)$, $(1, 4)$, dan $(-1, 0)$. Nilai $y$ saat $x = 3$ adalah $\\dots$",
          "opsi": [],
          "kunci": "16",
          "bahas": ""
        }
      ]
    },
    "P31": {
      "id": "P31",
      "subject": "wajib",
      "title": "P31 • Pertidaksamaan Linear Dua Variabel dan Daerah Penyelesaiannya",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P31-Q1] Titik berikut yang memenuhi pertidaksamaan $2x + 3y \\le 12$ adalah $\\dots$",
          "opsi": [
            "A. $(3, 3)$",
            "B. $(6, 1)$",
            "C. $(0, 5)$",
            "D. $(3, 2)$",
            "E. $(5, 1)$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P31-Q2] Garis batas daerah penyelesaian $x + y < 5$ digambar $\\dots$",
          "opsi": [
            "A. penuh, melalui $(5, 0)$ dan $(0, 5)$",
            "B. putus-putus, melalui $(5, 0)$ dan $(0, 5)$",
            "C. penuh, melalui $(1, 0)$ dan $(0, 1)$",
            "D. putus-putus, melalui $(0, 0)$ dan $(5, 5)$",
            "E. penuh, melalui $(0, 5)$ dan $(5, 5)$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P31-Q3] Daerah penyelesaian $3x + 2y \\ge 6$ adalah $\\dots$",
          "opsi": [
            "A. sisi yang tidak memuat $O$, dibatasi garis penuh melalui $(2, 0)$ dan $(0, 3)$",
            "B. sisi yang memuat $O$, dibatasi garis penuh melalui $(2, 0)$ dan $(0, 3)$",
            "C. sisi yang tidak memuat $O$, dibatasi garis putus-putus melalui $(2, 0)$ dan $(0, 3)$",
            "D. sisi yang memuat $O$, dibatasi garis penuh melalui $(3, 0)$ dan $(0, 2)$",
            "E. sisi yang tidak memuat $O$, dibatasi garis penuh melalui $(3, 0)$ dan $(0, 2)$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P31-Q4] Garis batas suatu daerah melalui $(3, 0)$ dan $(0, 6)$ dan digambar penuh. Daerah yang diarsir memuat titik $O(0, 0)$. Pertidaksamaan daerah itu adalah $\\dots$",
          "opsi": [
            "A. $2x + y \\ge 6$",
            "B. $x + 2y \\le 6$",
            "C. $2x + y < 6$",
            "D. $x + 2y \\ge 6$",
            "E. $2x + y \\le 6$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P31-Q5] Titik yang terletak pada daerah penyelesaian $x - 2y \\le 0$ adalah $\\dots$",
          "opsi": [
            "A. $(4, 1)$",
            "B. $(2, 0)$",
            "C. $(1, 2)$",
            "D. $(3, 1)$",
            "E. $(5, 2)$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P31-Q6] Dengan uang paling banyak Rp$100.000$, seseorang membeli buku Rp$20.000$ per buah dan pulpen Rp$5.000$ per buah. Pembelian yang MUNGKIN dilakukan adalah $\\dots$",
          "opsi": [
            "A. $4$ buku dan $5$ pulpen",
            "B. $5$ buku dan $1$ pulpen",
            "C. $2$ buku dan $13$ pulpen",
            "D. $3$ buku dan $8$ pulpen",
            "E. $21$ pulpen saja"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P31-Q7] Lift sebuah gedung mampu mengangkut paling banyak $600$ kg. Berat rata-rata orang dewasa $60$ kg dan anak $30$ kg. Bila $x$ = banyak orang dewasa dan $y$ = banyak anak, model yang tepat adalah $\\dots$",
          "opsi": [
            "A. $2x + y \\ge 20$",
            "B. $2x + y \\le 20$",
            "C. $x + 2y \\le 20$",
            "D. $2x + y < 20$",
            "E. $60x + 30y \\ge 600$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P31-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Titik $O(0, 0)$ memenuhi pertidaksamaan $x + y > 0$.",
            "(2) Garis batas daerah penyelesaian $2x - 3y \\ge 6$ digambar penuh.",
            "(3) Daerah penyelesaian $y \\ge 2x + 1$ terletak di atas garis $y = 2x + 1$."
          ],
          "kunci": "S - B - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P31-Q9] Pilihlah SEMUA titik yang terletak pada daerah penyelesaian $3x - y < 6$.",
          "opsi": [
            "A. $(0, 0)$",
            "B. $(2, 0)$",
            "C. $(3, 4)$",
            "D. $(4, 5)$",
            "E. $(1, -2)$"
          ],
          "kunci": "A, C, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P31-Q10] Banyak pasangan bilangan cacah $(x, y)$ yang memenuhi $x + y \\le 3$ adalah $\\dots$",
          "opsi": [],
          "kunci": "10",
          "bahas": ""
        }
      ]
    },
    "P32": {
      "id": "P32",
      "subject": "wajib",
      "title": "P32 • Sistem Pertidaksamaan Linear Dua Variabel dan Penerapannya",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P32-Q1] Daerah penyelesaian suatu sistem pertidaksamaan linear dua variabel adalah $\\dots$",
          "opsi": [
            "A. gabungan daerah penyelesaian semua pertidaksamaannya",
            "B. daerah penyelesaian pertidaksamaan pertama saja",
            "C. irisan daerah penyelesaian semua pertidaksamaannya",
            "D. daerah di luar semua garis batasnya",
            "E. daerah yang selalu memuat titik $O(0, 0)$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P32-Q2] Titik berikut yang termasuk daerah penyelesaian sistem $x + y \\le 6$, $2x + y \\le 8$, $x \\ge 0$, $y \\ge 0$ adalah $\\dots$",
          "opsi": [
            "A. $(3, 3)$",
            "B. $(1, 4)$",
            "C. $(4, 1)$",
            "D. $(0, 7)$",
            "E. $(5, 0)$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P32-Q3] Titik potong garis $x + y = 6$ dan $2x + y = 8$ adalah $\\dots$",
          "opsi": [
            "A. $(2, 4)$",
            "B. $(4, 2)$",
            "C. $(3, 3)$",
            "D. $(1, 5)$",
            "E. $(4, 0)$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P32-Q4] Daerah penyelesaian sistem $x + y \\le 4$, $x + 3y \\le 6$, $x \\ge 0$, $y \\ge 0$ mempunyai beberapa titik pojok. Titik berikut yang BUKAN titik pojoknya adalah $\\dots$",
          "opsi": [
            "A. $(0, 0)$",
            "B. $(4, 0)$",
            "C. $(3, 1)$",
            "D. $(0, 2)$",
            "E. $(0, 4)$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P32-Q5] Sebuah kursi memerlukan $3$ unit kayu dan $4$ jam kerja, sedangkan sebuah meja memerlukan $6$ unit kayu dan $2$ jam kerja. Tersedia paling banyak $60$ unit kayu dan $48$ jam kerja. Bila $x$ = banyak kursi dan $y$ = banyak meja, model yang tepat adalah $\\dots$",
          "opsi": [
            "A. $2x + y \\le 20$, $x + 2y \\le 24$, $x \\ge 0$, $y \\ge 0$",
            "B. $x + 2y \\ge 20$, $2x + y \\ge 24$, $x \\ge 0$, $y \\ge 0$",
            "C. $3x + 6y \\le 48$, $4x + 2y \\le 60$, $x \\ge 0$, $y \\ge 0$",
            "D. $x + 2y \\le 20$, $2x + y \\le 24$, $x \\ge 0$, $y \\ge 0$",
            "E. $x + 2y \\le 20$, $2x + y \\le 24$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P32-Q6] Banyak titik pojok daerah penyelesaian sistem $x + y \\ge 3$, $x \\le 4$, $y \\le 4$, $x \\ge 0$, $y \\ge 0$ adalah $\\dots$",
          "opsi": [
            "A. $3$",
            "B. $4$",
            "C. $5$",
            "D. $6$",
            "E. $7$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P32-Q7] Suatu daerah di kuadran I terletak di bawah garis yang melalui $(0, 4)$ dan $(8, 0)$, serta di sebelah kiri garis $x = 6$, dengan batas-batasnya ikut termasuk. Sistem pertidaksamaan daerah itu adalah $\\dots$",
          "opsi": [
            "A. $2x + y \\le 8$, $x \\le 6$, $x \\ge 0$, $y \\ge 0$",
            "B. $x + 2y \\le 8$, $x \\le 6$, $x \\ge 0$, $y \\ge 0$",
            "C. $x + 2y \\ge 8$, $x \\le 6$, $x \\ge 0$, $y \\ge 0$",
            "D. $x + 2y \\le 8$, $y \\le 6$, $x \\ge 0$, $y \\ge 0$",
            "E. $2x + y \\le 8$, $y \\le 6$, $x \\ge 0$, $y \\ge 0$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P32-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Titik $(2, 4)$ termasuk daerah penyelesaian sistem $x + y \\le 6$, $2x + y \\le 8$, $x \\ge 0$, $y \\ge 0$.",
            "(2) Kalimat \"paling sedikit $10$ buah\" diterjemahkan menjadi $x \\le 10$.",
            "(3) Kendala $x \\ge 0$ dan $y \\ge 0$ membatasi daerah penyelesaian di kuadran I."
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P32-Q9] Pilihlah SEMUA titik pojok daerah penyelesaian sistem $x + y \\le 5$, $x + 2y \\le 8$, $x \\ge 0$, $y \\ge 0$.",
          "opsi": [
            "A. $(0, 0)$",
            "B. $(5, 0)$",
            "C. $(0, 5)$",
            "D. $(2, 3)$",
            "E. $(8, 0)$"
          ],
          "kunci": "A, B, D",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P32-Q10] Sebuah toko menjual $x$ tas jenis A dengan modal Rp$40.000$ per buah dan $y$ tas jenis B dengan modal Rp$60.000$ per buah. Modal paling banyak Rp$1.200.000$ dan tempatnya muat paling banyak $25$ tas. Titik potong kedua garis batasnya adalah $(a, b)$. Nilai $a - b$ adalah $\\dots$",
          "opsi": [],
          "kunci": "5",
          "bahas": ""
        }
      ]
    },
    "P33": {
      "id": "P33",
      "subject": "wajib",
      "title": "P33 • Bentuk Umum Fungsi Kuadrat dan Nilai Fungsinya",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P33-Q1] Fungsi berikut yang merupakan fungsi kuadrat adalah $\\dots$",
          "opsi": [
            "A. $f(x) = 2x + 5$",
            "B. $f(x) = x^3 - x$",
            "C. $f(x) = (x + 1)^2 - x^2$",
            "D. $f(x) = 3 - x^2$",
            "E. $f(x) = \\frac{1}{x^2}$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P33-Q2] Pada fungsi $f(x) = 4 - 3x - 2x^2$, nilai $a$, $b$, dan $c$ berturut-turut adalah $\\dots$",
          "opsi": [
            "A. $4$, $-3$, $-2$",
            "B. $-2$, $-3$, $4$",
            "C. $2$, $3$, $4$",
            "D. $-2$, $3$, $4$",
            "E. $-3$, $-2$, $4$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P33-Q3] Diketahui $f(x) = 2x^2 - 3x + 1$. Nilai $f(-2)$ adalah $\\dots$",
          "opsi": [
            "A. $3$",
            "B. $-1$",
            "C. $15$",
            "D. $11$",
            "E. $7$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P33-Q4] Diketahui $f(x) = x^2 + kx - 6$ dan $f(2) = 4$. Nilai $k$ adalah $\\dots$",
          "opsi": [
            "A. $1$",
            "B. $2$",
            "C. $-3$",
            "D. $3$",
            "E. $5$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P33-Q5] Fungsi $f(x) = (2x - 1)(x + 3)$ ditulis dalam bentuk $ax^2 + bx + c$. Nilai $b$ adalah $\\dots$",
          "opsi": [
            "A. $6$",
            "B. $-1$",
            "C. $-3$",
            "D. $7$",
            "E. $5$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P33-Q6] Grafik fungsi $f(x) = -x^2 + 4x - 5$ $\\dots$",
          "opsi": [
            "A. terbuka ke atas dan memotong sumbu $Y$ di $(0, 5)$",
            "B. terbuka ke atas dan memotong sumbu $Y$ di $(0, -5)$",
            "C. terbuka ke bawah dan memotong sumbu $Y$ di $(0, 5)$",
            "D. terbuka ke bawah dan memotong sumbu $Y$ di $(0, -5)$",
            "E. terbuka ke bawah dan memotong sumbu $Y$ di $(-5, 0)$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P33-Q7] Keliling sebuah persegi panjang $24$ cm dan lebarnya $x$ cm. Luasnya sebagai fungsi $x$ adalah $\\dots$",
          "opsi": [
            "A. $L(x) = -x^2 + 12x$",
            "B. $L(x) = x^2 - 12x$",
            "C. $L(x) = -x^2 + 24x$",
            "D. $L(x) = x(24 - x)$",
            "E. $L(x) = 12x - 2x^2$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P33-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Fungsi $f(x) = (x + 3)^2 - x^2$ adalah fungsi kuadrat.",
            "(2) Jika $f(x) = x^2 - 4x + 3$, maka $f(1) = f(3)$.",
            "(3) Grafik $f(x) = 3 - 2x^2$ terbuka ke atas."
          ],
          "kunci": "S - B - S",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P33-Q9] Diketahui $f(x) = x^2 - 2x - 8$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. $f(0) = -8$",
            "B. $f(4) = 0$",
            "C. $f(-2) = 0$",
            "D. Grafik $f$ terbuka ke bawah.",
            "E. $f(1) = -7$"
          ],
          "kunci": "A, B, C",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P33-Q10] Diketahui $f(x) = ax^2 + 3x - 4$ dan $f(2) = 10$. Nilai $a$ adalah $\\dots$",
          "opsi": [],
          "kunci": "2",
          "bahas": ""
        }
      ]
    },
    "P34": {
      "id": "P34",
      "subject": "wajib",
      "title": "P34 • Sumbu Simetri dan Titik Puncak",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P34-Q1] Persamaan sumbu simetri grafik $f(x) = x^2 - 6x + 5$ adalah $\\dots$",
          "opsi": [
            "A. $x = -3$",
            "B. $x = 3$",
            "C. $x = 6$",
            "D. $x = -6$",
            "E. $x = 5$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P34-Q2] Titik puncak grafik $f(x) = x^2 + 4x - 1$ adalah $\\dots$",
          "opsi": [
            "A. $(-2, -5)$",
            "B. $(2, 11)$",
            "C. $(-2, 11)$",
            "D. $(2, -5)$",
            "E. $(-4, -1)$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P34-Q3] Nilai maksimum fungsi $f(x) = -x^2 + 6x - 4$ adalah $\\dots$",
          "opsi": [
            "A. $3$",
            "B. $14$",
            "C. $-4$",
            "D. $5$",
            "E. $9$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P34-Q4] Titik puncak dan jenis nilai ekstrem fungsi $f(x) = 2(x + 1)^2 - 7$ adalah $\\dots$",
          "opsi": [
            "A. $(1, -7)$, minimum",
            "B. $(-1, 7)$, maksimum",
            "C. $(-1, -7)$, maksimum",
            "D. $(1, 7)$, minimum",
            "E. $(-1, -7)$, minimum"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P34-Q5] Sumbu simetri grafik $f(x) = x^2 + bx + 3$ adalah $x = 2$. Nilai minimum fungsi itu adalah $\\dots$",
          "opsi": [
            "A. $3$",
            "B. $-4$",
            "C. $-1$",
            "D. $7$",
            "E. $1$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P34-Q6] Grafik sebuah fungsi kuadrat melalui titik $(-1, 4)$ dan $(5, 4)$. Persamaan sumbu simetrinya adalah $\\dots$",
          "opsi": [
            "A. $x = 3$",
            "B. $x = 4$",
            "C. $x = 6$",
            "D. $x = 2$",
            "E. $x = -2$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P34-Q7] Nilai minimum fungsi $f(x) = x^2 - 2x - 3$ adalah $\\dots$",
          "opsi": [
            "A. $-3$",
            "B. $-4$",
            "C. $4$",
            "D. $-16$",
            "E. $1$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P34-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Fungsi $f(x) = -3x^2 + 5$ mempunyai nilai maksimum $5$.",
            "(2) Titik puncak grafik $f(x) = (x - 2)^2 + 1$ adalah $(-2, 1)$.",
            "(3) Jika $a > 0$, titik puncak adalah titik terendah grafik."
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P34-Q9] Diketahui $f(x) = -x^2 + 4x + 5$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. Sumbu simetrinya $x = 2$.",
            "B. Titik puncaknya $(2, 9)$.",
            "C. Nilai minimumnya $9$.",
            "D. $f(0) = f(4)$.",
            "E. Titik puncaknya $(-2, -7)$."
          ],
          "kunci": "A, B, D",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P34-Q10] Nilai minimum fungsi $f(x) = 2x^2 - 12x + 7$ adalah $\\dots$",
          "opsi": [],
          "kunci": "-11",
          "bahas": ""
        }
      ]
    },
    "P35": {
      "id": "P35",
      "subject": "wajib",
      "title": "P35 • Titik Potong Sumbu Koordinat dan Diskriminan",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P35-Q1] Titik potong grafik $f(x) = x^2 - 7x + 10$ dengan sumbu $X$ adalah $\\dots$",
          "opsi": [
            "A. $(2, 0)$ dan $(5, 0)$",
            "B. $(-2, 0)$ dan $(-5, 0)$",
            "C. $(0, 2)$ dan $(0, 5)$",
            "D. $(1, 0)$ dan $(10, 0)$",
            "E. $(-1, 0)$ dan $(10, 0)$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P35-Q2] Nilai diskriminan fungsi $f(x) = 2x^2 - 3x - 2$ adalah $\\dots$",
          "opsi": [
            "A. $-7$",
            "B. $1$",
            "C. $25$",
            "D. $17$",
            "E. $7$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P35-Q3] Kedudukan grafik $f(x) = x^2 + 2x + 5$ terhadap sumbu $X$ adalah $\\dots$",
          "opsi": [
            "A. memotong sumbu $X$ di dua titik",
            "B. menyinggung sumbu $X$ di satu titik",
            "C. memotong sumbu $X$ di $(-1, 0)$",
            "D. tidak memotong maupun menyinggung sumbu $X$",
            "E. memotong sumbu $X$ di $(5, 0)$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P35-Q4] Absis titik potong grafik $f(x) = x^2 - 4x + 1$ dengan sumbu $X$ adalah $\\dots$",
          "opsi": [
            "A. $4 \\pm \\sqrt{3}$",
            "B. $2 \\pm 2\\sqrt{3}$",
            "C. $-2 \\pm \\sqrt{3}$",
            "D. $1 \\pm \\sqrt{3}$",
            "E. $2 \\pm \\sqrt{3}$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P35-Q5] Grafik $f(x) = x^2 - 4x + m$ menyinggung sumbu $X$. Nilai $m$ adalah $\\dots$",
          "opsi": [
            "A. $2$",
            "B. $-4$",
            "C. $4$",
            "D. $16$",
            "E. $8$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P35-Q6] Grafik $f(x) = x^2 + 2x + k$ tidak memotong sumbu $X$. Syarat nilai $k$ adalah $\\dots$",
          "opsi": [
            "A. $k < 1$",
            "B. $k > 1$",
            "C. $k = 1$",
            "D. $k > -1$",
            "E. $k < -1$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P35-Q7] Grafik $f(x) = 2x^2 + x - 3$ memotong sumbu $X$ di dua titik. Jarak antara kedua titik itu adalah $\\dots$",
          "opsi": [
            "A. $\\frac{5}{2}$",
            "B. $\\frac{1}{2}$",
            "C. $\\frac{3}{2}$",
            "D. $1$",
            "E. $2$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P35-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Grafik $f(x) = x^2 - 6x + 9$ menyinggung sumbu $X$ di $(3, 0)$.",
            "(2) Jika $D < 0$ dan $a > 0$, grafik fungsi kuadrat seluruhnya berada di atas sumbu $X$.",
            "(3) Grafik $f(x) = x^2 - 9$ memotong sumbu $X$ di $(9, 0)$ dan $(-9, 0)$."
          ],
          "kunci": "B - B - S",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P35-Q9] Pilihlah SEMUA fungsi yang grafiknya memotong sumbu $X$ di dua titik berbeda.",
          "opsi": [
            "A. $f(x) = x^2 - 5x + 6$",
            "B. $f(x) = x^2 + 4x + 4$",
            "C. $f(x) = x^2 - 3$",
            "D. $f(x) = x^2 + x + 1$",
            "E. $f(x) = -x^2 + 2x + 8$"
          ],
          "kunci": "A, C, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P35-Q10] Grafik $f(x) = x^2 - 7x + 12$ memotong sumbu $X$ di titik $(x_1, 0)$ dan $(x_2, 0)$. Nilai $x_1 + x_2$ adalah $\\dots$",
          "opsi": [],
          "kunci": "7",
          "bahas": ""
        }
      ]
    },
    "P36": {
      "id": "P36",
      "subject": "wajib",
      "title": "P36 • Menggambar Grafik Fungsi Kuadrat",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P36-Q1] Titik puncak grafik $y = (x + 2)^2 - 3$ adalah $\\dots$",
          "opsi": [
            "A. $(2, -3)$",
            "B. $(-2, 3)$",
            "C. $(-2, -3)$",
            "D. $(2, 3)$",
            "E. $(-3, -2)$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P36-Q2] Grafik $y = x^2 - 2x - 3$ memotong sumbu $X$ di titik $\\dots$",
          "opsi": [
            "A. $(1, 0)$ dan $(-3, 0)$",
            "B. $(-1, 0)$ dan $(3, 0)$",
            "C. $(0, -3)$ dan $(0, 1)$",
            "D. $(1, 0)$ dan $(3, 0)$",
            "E. $(-1, 0)$ dan $(-3, 0)$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P36-Q3] Grafik $y = (x - 3)^2 + 1$ diperoleh dari grafik $y = x^2$ dengan menggesernya $\\dots$",
          "opsi": [
            "A. $3$ satuan ke kanan dan $1$ satuan ke atas",
            "B. $3$ satuan ke kiri dan $1$ satuan ke atas",
            "C. $3$ satuan ke kanan dan $1$ satuan ke bawah",
            "D. $3$ satuan ke kiri dan $1$ satuan ke bawah",
            "E. $1$ satuan ke kanan dan $3$ satuan ke atas"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P36-Q4] Grafik $y = ax^2 + bx + c$ terbuka ke bawah, memotong sumbu $Y$ di atas titik asal, dan puncaknya di sebelah kanan sumbu $Y$. Tanda $a$, $b$, dan $c$ adalah $\\dots$",
          "opsi": [
            "A. $a > 0$, $b > 0$, $c > 0$",
            "B. $a < 0$, $b < 0$, $c > 0$",
            "C. $a < 0$, $b > 0$, $c < 0$",
            "D. $a < 0$, $b > 0$, $c > 0$",
            "E. $a > 0$, $b < 0$, $c > 0$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P36-Q5] Grafik sebuah fungsi kuadrat terbuka ke atas, tidak memotong sumbu $X$, dan memotong sumbu $Y$ di $(0, 3)$. Fungsi itu adalah $\\dots$",
          "opsi": [
            "A. $y = x^2 - 4x + 3$",
            "B. $y = -x^2 + 2x + 3$",
            "C. $y = x^2 + 3x$",
            "D. $y = x^2 - 2x - 3$",
            "E. $y = x^2 + 2x + 3$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P36-Q6] Grafik $y = x^2 - 4x + 1$ melalui titik $(0, 1)$. Titik lain pada grafik yang ordinatnya juga $1$ adalah $\\dots$",
          "opsi": [
            "A. $(-4, 1)$",
            "B. $(2, 1)$",
            "C. $(4, 1)$",
            "D. $(1, 4)$",
            "E. $(8, 1)$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P36-Q7] Grafik $y = -x^2 + 4x$ memotong sumbu $X$ di titik $O$ dan $P$, dan puncaknya $Q$. Luas segitiga $OPQ$ adalah $\\dots$",
          "opsi": [
            "A. $4$",
            "B. $8$",
            "C. $16$",
            "D. $2$",
            "E. $12$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P36-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Grafik $y = x^2 + 2x + 3$ seluruhnya berada di atas sumbu $X$.",
            "(2) Grafik $y = -2x^2 + 1$ terbuka ke atas.",
            "(3) Grafik $y = (x + 1)^2$ diperoleh dari $y = x^2$ yang digeser $1$ satuan ke kanan."
          ],
          "kunci": "B - S - S",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P36-Q9] Diketahui grafik $y = x^2 - 6x + 8$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. Sumbu simetrinya $x = 3$.",
            "B. Titik puncaknya $(3, -1)$.",
            "C. Grafiknya memotong sumbu $X$ di $(2, 0)$ dan $(4, 0)$.",
            "D. Grafiknya memotong sumbu $Y$ di $(0, -8)$.",
            "E. Grafiknya terbuka ke bawah."
          ],
          "kunci": "A, B, C",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P36-Q10] Grafik $y = x^2 - 2x - 8$ memotong sumbu $X$ di titik $A$ dan $B$, dan puncaknya $C$. Luas segitiga $ABC$ adalah $\\dots$",
          "opsi": [],
          "kunci": "27",
          "bahas": ""
        }
      ]
    },
    "P37": {
      "id": "P37",
      "subject": "wajib",
      "title": "P37 • Menyusun Fungsi Kuadrat dari Grafik atau Titik yang Diketahui",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P37-Q1] Fungsi kuadrat yang grafiknya memotong sumbu $X$ di $(-2, 0)$ dan $(3, 0)$ dapat ditulis dalam bentuk $\\dots$",
          "opsi": [
            "A. $y = a(x - 2)(x + 3)$",
            "B. $y = a(x + 2)(x - 3)$",
            "C. $y = a(x + 2)(x + 3)$",
            "D. $y = a(x - 2)(x - 3)$",
            "E. $y = a(x^2 + 6)$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P37-Q2] Fungsi kuadrat yang berpuncak di $(1, -4)$ dan melalui $(0, -3)$ adalah $\\dots$",
          "opsi": [
            "A. $y = x^2 - 2x - 3$",
            "B. $y = x^2 + 2x - 3$",
            "C. $y = -x^2 + 2x - 3$",
            "D. $y = x^2 - 2x + 5$",
            "E. $y = 2x^2 - 4x - 3$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P37-Q3] Fungsi kuadrat yang memotong sumbu $X$ di $(1, 0)$ dan $(4, 0)$ serta melalui $(0, 8)$ adalah $\\dots$",
          "opsi": [
            "A. $y = x^2 - 5x + 4$",
            "B. $y = 2x^2 + 10x + 8$",
            "C. $y = 8x^2 - 40x + 32$",
            "D. $y = 2x^2 - 10x + 8$",
            "E. $y = -2x^2 + 10x - 8$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P37-Q4] Grafik sebuah fungsi kuadrat berpuncak di $(2, 5)$ dan melalui $(0, 1)$. Nilai fungsi itu saat $x = 3$ adalah $\\dots$",
          "opsi": [
            "A. $5$",
            "B. $2$",
            "C. $4$",
            "D. $1$",
            "E. $8$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P37-Q5] Fungsi kuadrat yang grafiknya menyinggung sumbu $X$ di $(-1, 0)$ dan melalui $(1, 12)$ adalah $\\dots$",
          "opsi": [
            "A. $y = 3x^2 - 6x + 3$",
            "B. $y = x^2 + 2x + 1$",
            "C. $y = 12x^2 + 24x + 12$",
            "D. $y = 3x^2 + 3$",
            "E. $y = 3x^2 + 6x + 3$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P37-Q6] Fungsi kuadrat yang grafiknya melalui $(0, 2)$, $(1, 3)$, dan $(-1, 5)$ adalah $\\dots$",
          "opsi": [
            "A. $y = 2x^2 - x + 2$",
            "B. $y = 2x^2 + x + 2$",
            "C. $y = x^2 - 2x + 2$",
            "D. $y = -2x^2 + x + 2$",
            "E. $y = 2x^2 - x - 2$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P37-Q7] Grafik sebuah fungsi kuadrat memotong sumbu $X$ di $(-1, 0)$ dan $(5, 0)$, dan ordinat puncaknya $-9$. Nilai fungsi itu saat $x = 0$ adalah $\\dots$",
          "opsi": [
            "A. $5$",
            "B. $-5$",
            "C. $-9$",
            "D. $9$",
            "E. $-4$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P37-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Fungsi kuadrat yang berpuncak di $(0, 0)$ dan melalui $(1, 3)$ adalah $y = x^2 + 3$.",
            "(2) Jika grafik fungsi kuadrat memotong sumbu $X$ di $(2, 0)$ dan $(6, 0)$, sumbu simetrinya $x = 4$.",
            "(3) Grafik $y = (x - 3)^2 - 1$ memotong sumbu $X$ di $(2, 0)$ dan $(4, 0)$."
          ],
          "kunci": "S - B - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P37-Q9] Pilihlah SEMUA fungsi yang grafiknya melalui titik $(1, 0)$ dan $(3, 0)$.",
          "opsi": [
            "A. $y = x^2 - 4x + 3$",
            "B. $y = 2x^2 - 8x + 6$",
            "C. $y = -x^2 + 4x - 3$",
            "D. $y = x^2 + 4x + 3$",
            "E. $y = x^2 - 4x - 3$"
          ],
          "kunci": "A, B, C",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P37-Q10] Fungsi kuadrat $y = ax^2 + bx + c$ berpuncak di $(3, -2)$ dan melalui $(1, 6)$. Nilai $b + c$ adalah $\\dots$",
          "opsi": [],
          "kunci": "4",
          "bahas": ""
        }
      ]
    },
    "P38": {
      "id": "P38",
      "subject": "wajib",
      "title": "P38 • Penerapan Fungsi Kuadrat: Nilai Maksimum dan Minimum",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P38-Q1] Tinggi sebuah bola setelah $t$ detik adalah $h(t) = -5t^2 + 30t$ meter. Tinggi maksimum bola itu adalah $\\dots$",
          "opsi": [
            "A. $30$ m",
            "B. $45$ m",
            "C. $90$ m",
            "D. $15$ m",
            "E. $60$ m"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P38-Q2] Jumlah dua bilangan adalah $20$. Hasil kali terbesar kedua bilangan itu adalah $\\dots$",
          "opsi": [
            "A. $100$",
            "B. $20$",
            "C. $400$",
            "D. $96$",
            "E. $50$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P38-Q3] Pagar sepanjang $40$ m dipakai untuk membuat kandang persegi panjang yang satu sisinya menempel pada tembok. Luas maksimum kandang itu adalah $\\dots$",
          "opsi": [
            "A. $100$ m$^2$",
            "B. $400$ m$^2$",
            "C. $200$ m$^2$",
            "D. $160$ m$^2$",
            "E. $150$ m$^2$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P38-Q4] Tinggi sebuah bola yang dilempar dari atas gedung setelah $t$ detik adalah $h(t) = -5t^2 + 20t + 25$ meter. Bola itu menyentuh tanah pada detik ke- $\\dots$",
          "opsi": [
            "A. $2$",
            "B. $4$",
            "C. $1$",
            "D. $5$",
            "E. $25$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P38-Q5] Harga sewa sepeda Rp$30.000$ per hari dengan $200$ penyewa. Setiap kenaikan harga Rp$1.000$ mengurangi $5$ penyewa. Harga sewa yang memberikan pendapatan terbesar adalah $\\dots$",
          "opsi": [
            "A. Rp$30.000$",
            "B. Rp$32.500$",
            "C. Rp$40.000$",
            "D. Rp$25.000$",
            "E. Rp$35.000$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P38-Q6] Keliling sebuah persegi panjang $36$ cm. Luas terbesar persegi panjang itu adalah $\\dots$",
          "opsi": [
            "A. $324$ cm$^2$",
            "B. $72$ cm$^2$",
            "C. $81$ cm$^2$",
            "D. $36$ cm$^2$",
            "E. $90$ cm$^2$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P38-Q7] Selisih dua bilangan adalah $10$. Hasil kali terkecil kedua bilangan itu adalah $\\dots$",
          "opsi": [
            "A. $0$",
            "B. $-25$",
            "C. $25$",
            "D. $-10$",
            "E. $-50$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P38-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Fungsi $h(t) = -5t^2 + 20t$ mencapai nilai maksimum $20$ pada $t = 2$.",
            "(2) Fungsi $f(x) = x^2 - 6x + 10$ mempunyai nilai maksimum $1$.",
            "(3) Dari semua persegi panjang berkeliling sama, luas terbesar dimiliki oleh persegi."
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P38-Q9] Tinggi sebuah bola setelah $t$ detik adalah $h(t) = -5t^2 + 40t$ meter. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. Tinggi maksimum bola $80$ m.",
            "B. Tinggi maksimum tercapai pada $t = 4$ detik.",
            "C. Bola kembali ke tanah pada $t = 8$ detik.",
            "D. Tinggi bola pada $t = 2$ sama dengan pada $t = 6$.",
            "E. Tinggi bola pada $t = 1$ adalah $45$ m."
          ],
          "kunci": "A, B, C, D",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P38-Q10] Sebuah kebun persegi panjang akan dipagari kawat sepanjang $100$ m pada tiga sisinya, sedangkan sisi keempat berupa tembok. Luas maksimum kebun itu, dalam m$^2$, adalah $\\dots$",
          "opsi": [],
          "kunci": "1250",
          "bahas": ""
        }
      ]
    },
    "P39": {
      "id": "P39",
      "subject": "wajib",
      "title": "P39 • Penyajian Data: Tabel Frekuensi dan Diagram",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P39-Q1] Data nilai: $7, 8, 6, 8, 9, 7, 8, 10, 8, 7$. Frekuensi nilai $8$ adalah $\\dots$",
          "opsi": [
            "A. $3$",
            "B. $4$",
            "C. $5$",
            "D. $2$",
            "E. $10$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P39-Q2] Tabel frekuensi nilai $25$ siswa: nilai $5$ ada $2$, nilai $6$ ada $5$, nilai $7$ ada $8$, nilai $8$ ada $x$, dan nilai $9$ ada $4$. Nilai $x$ adalah $\\dots$",
          "opsi": [
            "A. $4$",
            "B. $5$",
            "C. $7$",
            "D. $6$",
            "E. $8$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P39-Q3] Dari $40$ siswa, $14$ siswa memilih basket sebagai olahraga kesukaan. Frekuensi relatif pemilih basket adalah $\\dots$",
          "opsi": [
            "A. $14\\%$",
            "B. $28\\%$",
            "C. $35\\%$",
            "D. $40\\%$",
            "E. $54\\%$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P39-Q4] Dari $36$ siswa, $9$ siswa memilih futsal. Besar sudut bagian futsal pada diagram lingkaran adalah $\\dots$",
          "opsi": [
            "A. $90^\\circ$",
            "B. $9^\\circ$",
            "C. $36^\\circ$",
            "D. $45^\\circ$",
            "E. $120^\\circ$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P39-Q5] Perhatikan diagram batang-daun nilai ulangan berikut. $$\\begin{array}{r|l} 5 & 2\\ \\ 4\\ \\ 4\\ \\ 7 \\\\ 6 & 0\\ \\ 3\\ \\ 5\\ \\ 5\\ \\ 5\\ \\ 8 \\\\ 7 & 1\\ \\ 2\\ \\ 6 \\end{array}$$ Banyak siswa yang nilainya paling sedikit $65$ adalah $\\dots$",
          "opsi": [
            "A. $6$",
            "B. $3$",
            "C. $4$",
            "D. $10$",
            "E. $7$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P39-Q6] Perhatikan tabel frekuensi nilai ulangan berikut. [5 : 2], [6 : 5], [7 : 8], [8 : 6], [9 : 4] Banyak siswa yang nilainya kurang dari $8$ adalah $\\dots$",
          "opsi": [
            "A. $8$",
            "B. $15$",
            "C. $21$",
            "D. $6$",
            "E. $10$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P39-Q7] Hobi $45$ siswa disajikan dalam diagram lingkaran. Bagian \"membaca\" mempunyai sudut $120^\\circ$. Banyak siswa yang hobinya membaca adalah $\\dots$",
          "opsi": [
            "A. $12$",
            "B. $20$",
            "C. $30$",
            "D. $15$",
            "E. $120$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P39-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Jumlah semua frekuensi pada tabel distribusi frekuensi sama dengan banyak data.",
            "(2) Diagram garis paling tepat untuk menyajikan data warna kesukaan siswa.",
            "(3) Pada diagram batang-daun, baris $4 \\mid 2\\ 5\\ 7$ menyajikan data $42$, $45$, dan $47$."
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P39-Q9] Perhatikan diagram batang-daun berikut. $$\\begin{array}{r|l} 3 & 5\\ \\ 8 \\\\ 4 & 0\\ \\ 2\\ \\ 2\\ \\ 7 \\\\ 5 & 1\\ \\ 3\\ \\ 3\\ \\ 3\\ \\ 9 \\\\ 6 & 4 \\end{array}$$ Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. Banyak datanya $12$.",
            "B. Nilai terkecilnya $35$.",
            "C. Nilai yang paling sering muncul adalah $53$.",
            "D. Nilai terbesarnya $59$.",
            "E. Ada $3$ data yang nilainya $40$ sampai $49$."
          ],
          "kunci": "A, B, C",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P39-Q10] Kegiatan ekstrakurikuler $60$ siswa disajikan dalam diagram lingkaran. Bagian \"sepak bola\" mempunyai sudut $150^\\circ$. Banyak siswa yang mengikuti sepak bola adalah $\\dots$",
          "opsi": [],
          "kunci": "25",
          "bahas": ""
        }
      ]
    },
    "P40": {
      "id": "P40",
      "subject": "wajib",
      "title": "P40 • Ukuran Pemusatan Data Tunggal: Rata-rata, Median, dan Modus",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P40-Q1] Rata-rata data $6, 8, 7, 9, 10$ adalah $\\dots$",
          "opsi": [
            "A. $7$",
            "B. $8$",
            "C. $9$",
            "D. $8{,}5$",
            "E. $40$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P40-Q2] Median data $9, 4, 7, 5, 8, 6$ adalah $\\dots$",
          "opsi": [
            "A. $6$",
            "B. $7$",
            "C. $6{,}5$",
            "D. $5{,}5$",
            "E. $7{,}5$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P40-Q3] Modus data $3, 5, 4, 5, 6, 4, 5, 7$ adalah $\\dots$",
          "opsi": [
            "A. $4$",
            "B. $6$",
            "C. $3$",
            "D. $5$",
            "E. $7$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P40-Q4] Rata-rata enam bilangan adalah $8$. Lima di antaranya $5, 8, 6, 9, 7$. Bilangan keenam adalah $\\dots$",
          "opsi": [
            "A. $13$",
            "B. $8$",
            "C. $7$",
            "D. $11$",
            "E. $35$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P40-Q5] Rata-rata nilai $30$ siswa adalah $75$. Setelah seorang siswa mengikuti ujian susulan, rata-rata nilai $31$ siswa itu menjadi $74$. Nilai siswa yang ikut ujian susulan adalah $\\dots$",
          "opsi": [
            "A. $74$",
            "B. $73$",
            "C. $45$",
            "D. $60$",
            "E. $44$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P40-Q6] Gaji lima orang di sebuah toko (juta rupiah): $4, 4, 5, 5, 32$. Ukuran pemusatan yang paling tepat mewakili gaji sebagian besar orang di toko itu adalah $\\dots$",
          "opsi": [
            "A. rata-rata, karena memakai semua data",
            "B. median, karena tidak terpengaruh oleh nilai yang sangat ekstrem",
            "C. modus, karena selalu tunggal",
            "D. rata-rata, karena nilainya paling besar",
            "E. jangkauan, karena memuat nilai terbesar"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P40-Q7] Data $4, x, 7, 9, 10$ sudah terurut dari kecil ke besar dan mempunyai rata-rata $7$. Nilai $x$ adalah $\\dots$",
          "opsi": [
            "A. $6$",
            "B. $7$",
            "C. $4$",
            "D. $5$",
            "E. $3$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P40-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Median data $3, 9, 4, 8, 5$ adalah $4$.",
            "(2) Sebuah data boleh mempunyai lebih dari satu modus.",
            "(3) Jika setiap data ditambah $5$, rata-ratanya juga bertambah $5$."
          ],
          "kunci": "S - B - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P40-Q9] Diketahui data $5, 7, 7, 8, 9, 10, 10, 10, 6$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. Rata-ratanya $8$.",
            "B. Mediannya $8$.",
            "C. Modusnya $7$.",
            "D. Modusnya $10$.",
            "E. Mediannya $9$."
          ],
          "kunci": "A, B, D",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P40-Q10] Rata-rata lima nilai ulangan adalah $80$. Empat di antaranya $78$, $85$, $72$, dan $90$. Nilai kelima adalah $\\dots$",
          "opsi": [],
          "kunci": "75",
          "bahas": ""
        }
      ]
    },
    "P41": {
      "id": "P41",
      "subject": "wajib",
      "title": "P41 • Ukuran Pemusatan dari Tabel Frekuensi dan Rata-rata Gabungan",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P41-Q1] Perhatikan tabel frekuensi nilai berikut. [6 : 2], [7 : 3], [8 : 4], [9 : 1] Rata-rata nilai itu adalah $\\dots$",
          "opsi": [
            "A. $7{,}5$",
            "B. $7{,}4$",
            "C. $7$",
            "D. $8$",
            "E. $74$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P41-Q2] Perhatikan tabel frekuensi nilai berikut. [5 : 2], [6 : 4], [7 : 5], [8 : 6], [9 : 3] Median data itu adalah $\\dots$",
          "opsi": [
            "A. $6$",
            "B. $6{,}5$",
            "C. $7$",
            "D. $7{,}5$",
            "E. $8$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P41-Q3] Perhatikan tabel frekuensi nilai berikut. [5 : 2], [6 : 4], [7 : 5], [8 : 6], [9 : 3] Modus data itu adalah $\\dots$",
          "opsi": [
            "A. $6$",
            "B. $5$",
            "C. $7$",
            "D. $9$",
            "E. $8$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P41-Q4] Kelas A berisi $20$ siswa dengan rata-rata $70$, dan kelas B berisi $30$ siswa dengan rata-rata $80$. Rata-rata gabungan kedua kelas adalah $\\dots$",
          "opsi": [
            "A. $75$",
            "B. $150$",
            "C. $74$",
            "D. $76$",
            "E. $78$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P41-Q5] Rata-rata nilai $40$ siswa adalah $72$. Rata-rata nilai $15$ siswa putra adalah $68$. Rata-rata nilai siswa putri adalah $\\dots$",
          "opsi": [
            "A. $74{,}4$",
            "B. $76$",
            "C. $70$",
            "D. $73{,}5$",
            "E. $75$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P41-Q6] Pada sebuah tabel, nilai $6$ diperoleh $4$ siswa, nilai $7$ diperoleh $x$ siswa, dan nilai $8$ diperoleh $6$ siswa. Rata-ratanya $7{,}1$. Nilai $x$ adalah $\\dots$",
          "opsi": [
            "A. $5$",
            "B. $8$",
            "C. $10$",
            "D. $12$",
            "E. $6$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P41-Q7] Rata-rata nilai $10$ siswa adalah $60$. Dua siswa yang semula bernilai $40$ dan $50$ mengikuti perbaikan dan keduanya mendapat $70$. Rata-rata nilai yang baru adalah $\\dots$",
          "opsi": [
            "A. $62$",
            "B. $65$",
            "C. $70$",
            "D. $64$",
            "E. $66$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P41-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Rata-rata gabungan dua kelas selalu sama dengan rata-rata dari kedua rata-rata kelas itu.",
            "(2) Pada tabel frekuensi, rata-rata dihitung dengan $\\frac{\\sum f \\cdot x}{\\sum f}$.",
            "(3) Median dari tabel nilai $6$ ada $3$, $7$ ada $4$, dan $8$ ada $3$ adalah $7{,}5$."
          ],
          "kunci": "S - B - S",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P41-Q9] Perhatikan tabel frekuensi nilai berikut. [4 : 3], [5 : 5], [6 : 8], [7 : 6], [8 : 3] Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. Banyak datanya $25$.",
            "B. Rata-ratanya $6{,}04$.",
            "C. Mediannya $6$.",
            "D. Modusnya $7$.",
            "E. Ada $9$ siswa yang nilainya paling sedikit $7$."
          ],
          "kunci": "A, B, C, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P41-Q10] Rata-rata lima bilangan adalah $12$. Setelah satu bilangan dibuang, rata-rata empat bilangan sisanya menjadi $10$. Bilangan yang dibuang adalah $\\dots$",
          "opsi": [],
          "kunci": "20",
          "bahas": ""
        }
      ]
    },
    "P42": {
      "id": "P42",
      "subject": "wajib",
      "title": "P42 • Kuartil dan Diagram Kotak Garis",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P42-Q1] Kuartil tengah $Q_2$ dari data $4, 7, 9, 10, 12, 15, 18$ adalah $\\dots$",
          "opsi": [
            "A. $9$",
            "B. $10$",
            "C. $12$",
            "D. $11$",
            "E. $7$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P42-Q2] Kuartil bawah $Q_1$ dari data $4, 7, 9, 10, 12, 15, 18$ adalah $\\dots$",
          "opsi": [
            "A. $7$",
            "B. $8$",
            "C. $5{,}5$",
            "D. $9$",
            "E. $4$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P42-Q3] Kuartil atas $Q_3$ dari data $2, 4, 5, 7, 8, 10, 11, 13$ adalah $\\dots$",
          "opsi": [
            "A. $10$",
            "B. $11$",
            "C. $8$",
            "D. $10{,}5$",
            "E. $9$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P42-Q4] Statistik lima serangkai ($x_{\\min}$; $Q_1$; $Q_2$; $Q_3$; $x_{\\max}$) dari data $3, 5, 6, 8, 9, 11, 12, 14, 15$ adalah $\\dots$",
          "opsi": [
            "A. $3$; $5$; $9$; $12$; $15$",
            "B. $3$; $6$; $9$; $12$; $15$",
            "C. $3$; $5{,}5$; $9$; $13$; $15$",
            "D. $3$; $5{,}5$; $8{,}5$; $13$; $15$",
            "E. $5{,}5$; $9$; $13$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P42-Q5] Diagram kotak garis nilai $80$ siswa menunjukkan: terkecil $40$, $Q_1 = 55$, $Q_2 = 65$, $Q_3 = 75$, terbesar $95$. Banyak siswa yang nilainya di antara $55$ dan $75$ kira-kira $\\dots$",
          "opsi": [
            "A. $20$",
            "B. $40$",
            "C. $60$",
            "D. $80$",
            "E. $50$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P42-Q6] Diagram kotak garis nilai ujian suatu kelas menunjukkan: terkecil $40$, $Q_1 = 55$, $Q_2 = 65$, $Q_3 = 75$, terbesar $95$. Pernyataan yang BENAR adalah $\\dots$",
          "opsi": [
            "A. setengah siswa mendapat nilai di atas $75$",
            "B. rata-rata nilai kelas itu $65$",
            "C. tidak ada siswa yang mendapat nilai $50$",
            "D. jangkauan data itu $40$",
            "E. sekitar seperempat siswa mendapat nilai di bawah $55$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P42-Q7] Perhatikan tabel frekuensi nilai berikut. [5 : 2], [6 : 4], [7 : 5], [8 : 6], [9 : 3] Kuartil atas $Q_3$ data itu adalah $\\dots$",
          "opsi": [
            "A. $7$",
            "B. $7{,}5$",
            "C. $9$",
            "D. $8$",
            "E. $8{,}5$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P42-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Kuartil tengah $Q_2$ sama dengan median.",
            "(2) Di antara $Q_1$ dan $Q_3$ terdapat sekitar $50\\%$ data.",
            "(3) Kuartil bawah data $1, 2, 3, 4, 5, 6, 7, 8$ adalah $2$."
          ],
          "kunci": "B - B - S",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P42-Q9] Diketahui data $10, 12, 15, 15, 18, 20, 22, 25, 30, 32$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. $Q_1 = 15$",
            "B. $Q_2 = 19$",
            "C. $Q_3 = 25$",
            "D. $Q_3 = 30$",
            "E. $Q_2 = 18$"
          ],
          "kunci": "A, B, C",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P42-Q10] Diketahui data $5, 8, 9, 12, 14, 15, 17, 20, 21$. Nilai $Q_1 + Q_3$ adalah $\\dots$",
          "opsi": [],
          "kunci": "27",
          "bahas": ""
        }
      ]
    },
    "P43": {
      "id": "P43",
      "subject": "wajib",
      "title": "P43 • Ukuran Penyebaran: Jangkauan, Jangkauan Antarkuartil, Ragam, dan Simpangan Baku",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P43-Q1] Jangkauan data $12, 7, 15, 9, 20, 11$ adalah $\\dots$",
          "opsi": [
            "A. $13$",
            "B. $8$",
            "C. $20$",
            "D. $15$",
            "E. $5$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P43-Q2] Jangkauan antarkuartil data $4, 7, 9, 10, 12, 15, 18$ adalah $\\dots$",
          "opsi": [
            "A. $14$",
            "B. $4$",
            "C. $8$",
            "D. $7$",
            "E. $11$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P43-Q3] Ragam data $2, 4, 4, 4, 5, 5, 7, 9$ adalah $\\dots$",
          "opsi": [
            "A. $2$",
            "B. $4$",
            "C. $32$",
            "D. $16$",
            "E. $1{,}5$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P43-Q4] Simpangan baku data $1, 2, 3, 4, 5$ adalah $\\dots$",
          "opsi": [
            "A. $2$",
            "B. $1{,}2$",
            "C. $10$",
            "D. $\\sqrt{2}$",
            "E. $2\\sqrt{2}$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P43-Q5] Simpangan rata-rata data $2, 4, 6, 8, 10$ adalah $\\dots$",
          "opsi": [
            "A. $2$",
            "B. $12$",
            "C. $6$",
            "D. $2{,}8$",
            "E. $2{,}4$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P43-Q6] Kelima kelompok data berikut mempunyai rata-rata sama, yaitu $5$. Kelompok yang datanya PALING seragam adalah $\\dots$",
          "opsi": [
            "A. $4, 5, 5, 5, 6$",
            "B. $3, 4, 5, 6, 7$",
            "C. $1, 5, 5, 5, 9$",
            "D. $1, 3, 5, 7, 9$",
            "E. $2, 5, 5, 5, 8$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P43-Q7] Perhatikan tabel frekuensi nilai berikut. [2 : 1], [4 : 3], [6 : 3], [8 : 1] Ragam data itu adalah $\\dots$",
          "opsi": [
            "A. $5$",
            "B. $24$",
            "C. $3$",
            "D. $\\sqrt{3}$",
            "E. $2{,}5$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P43-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Jangkauan hanya bergantung pada data terbesar dan data terkecil.",
            "(2) Simpangan baku selalu lebih besar daripada ragam.",
            "(3) Jika semua data bernilai sama, simpangan bakunya nol."
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P43-Q9] Diketahui data $3, 5, 7, 9, 11$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. Rata-ratanya $7$.",
            "B. Jangkauannya $8$.",
            "C. Ragamnya $8$.",
            "D. Simpangan bakunya $8$.",
            "E. Simpangan rata-ratanya $2{,}4$."
          ],
          "kunci": "A, B, C, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P43-Q10] Ragam data $1, 3, 5, 7, 9$ adalah $\\dots$",
          "opsi": [],
          "kunci": "8",
          "bahas": ""
        }
      ]
    },
    "P44": {
      "id": "P44",
      "subject": "wajib",
      "title": "P44 • Pencilan, Transformasi Data, dan Membandingkan Kelompok Data",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P44-Q1] Suatu data mempunyai $Q_1 = 20$ dan $Q_3 = 30$. Pagar atas untuk menentukan pencilan adalah $\\dots$",
          "opsi": [
            "A. $40$",
            "B. $45$",
            "C. $35$",
            "D. $50$",
            "E. $60$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P44-Q2] Pencilan pada data $12, 14, 15, 15, 16, 18, 19, 20, 45$ adalah $\\dots$",
          "opsi": [
            "A. $12$",
            "B. $20$",
            "C. $45$",
            "D. $12$ dan $45$",
            "E. tidak ada"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P44-Q3] Sekelompok data mempunyai rata-rata $60$ dan simpangan baku $8$. Bila setiap data ditambah $5$, rata-rata dan simpangan baku yang baru berturut-turut adalah $\\dots$",
          "opsi": [
            "A. $65$ dan $8$",
            "B. $65$ dan $13$",
            "C. $60$ dan $13$",
            "D. $300$ dan $40$",
            "E. $65$ dan $40$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P44-Q4] Sekelompok data mempunyai rata-rata $50$ dan simpangan baku $6$. Setiap data dikalikan $2$, lalu dikurangi $10$. Rata-rata dan simpangan baku yang baru berturut-turut adalah $\\dots$",
          "opsi": [
            "A. $90$ dan $2$",
            "B. $100$ dan $12$",
            "C. $90$ dan $6$",
            "D. $90$ dan $12$",
            "E. $40$ dan $12$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P44-Q5] Dari data $5, 6, 6, 7, 8, 40$, data $40$ disisihkan. Pernyataan yang BENAR adalah $\\dots$",
          "opsi": [
            "A. median turun $5{,}6$",
            "B. rata-rata tidak berubah",
            "C. median naik",
            "D. rata-rata naik",
            "E. rata-rata turun $5{,}6$, sedangkan median hanya turun $0{,}5$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P44-Q6] Ukuran pemusatan yang paling tepat dipakai untuk data yang memuat pencilan adalah $\\dots$",
          "opsi": [
            "A. rata-rata",
            "B. median",
            "C. jangkauan",
            "D. ragam",
            "E. nilai terbesar"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P44-Q7] Statistik lima serangkai nilai kelas A $= 50; 60; 70; 80; 90$ dan kelas B $= 40; 65; 72; 76; 98$. Pernyataan yang BENAR adalah $\\dots$",
          "opsi": [
            "A. jangkauan antarkuartil kelas A lebih kecil daripada kelas B",
            "B. median kelas A lebih tinggi daripada kelas B",
            "C. jangkauan kelas B lebih besar daripada kelas A",
            "D. rata-rata kelas A pasti lebih tinggi daripada kelas B",
            "E. nilai tertinggi terdapat di kelas A"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P44-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Jika setiap data dikalikan $3$, simpangan bakunya juga menjadi $3$ kali semula.",
            "(2) Jika setiap data ditambah $10$, jangkauannya bertambah $10$.",
            "(3) Pencilan berpengaruh besar terhadap rata-rata, tetapi kecil terhadap median."
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P44-Q9] Diketahui data $2, 20, 22, 23, 25, 26, 28, 30, 31$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. $Q_1 = 21$",
            "B. Jangkauan antarkuartilnya $8$.",
            "C. Data $2$ adalah pencilan.",
            "D. Data $31$ adalah pencilan.",
            "E. Pagar atasnya $41$."
          ],
          "kunci": "A, B, C, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P44-Q10] Nilai ujian mempunyai rata-rata $60$ dan simpangan baku $8$. Setiap nilai $x$ diubah menjadi $y = 1{,}5x + 10$. Simpangan baku nilai yang baru adalah $\\dots$",
          "opsi": [],
          "kunci": "12",
          "bahas": ""
        }
      ]
    },
    "P45": {
      "id": "P45",
      "subject": "wajib",
      "title": "P45 • Percobaan Acak, Ruang Sampel, dan Kejadian",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P45-Q1] Banyak titik sampel pada pelemparan tiga koin bersamaan adalah $\\dots$",
          "opsi": [
            "A. $6$",
            "B. $8$",
            "C. $9$",
            "D. $3$",
            "E. $16$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P45-Q2] Banyak titik sampel pada pelemparan dua dadu bersamaan adalah $\\dots$",
          "opsi": [
            "A. $12$",
            "B. $18$",
            "C. $36$",
            "D. $6$",
            "E. $72$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P45-Q3] Dua dadu dilempar bersamaan. Banyak titik sampel kejadian jumlah mata dadu $8$ adalah $\\dots$",
          "opsi": [
            "A. $4$",
            "B. $6$",
            "C. $3$",
            "D. $5$",
            "E. $7$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P45-Q4] Sebuah koin dan sebuah dadu dilempar bersamaan. Banyak titik sampel kejadian munculnya gambar dan mata dadu prima adalah $\\dots$",
          "opsi": [
            "A. $3$",
            "B. $6$",
            "C. $2$",
            "D. $4$",
            "E. $12$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P45-Q5] Tiga koin dilempar bersamaan. Banyak titik sampel kejadian munculnya paling sedikit dua angka adalah $\\dots$",
          "opsi": [
            "A. $3$",
            "B. $1$",
            "C. $7$",
            "D. $8$",
            "E. $4$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P45-Q6] Dua dadu dilempar bersamaan. Banyak titik sampel kejadian munculnya mata dadu kembar adalah $\\dots$",
          "opsi": [
            "A. $12$",
            "B. $6$",
            "C. $36$",
            "D. $2$",
            "E. $3$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P45-Q7] Dua dadu dilempar bersamaan. Banyak titik sampel kejadian selisih kedua mata dadu sama dengan $2$ adalah $\\dots$",
          "opsi": [
            "A. $4$",
            "B. $6$",
            "C. $8$",
            "D. $10$",
            "E. $5$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P45-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Ruang sampel pelemparan satu dadu adalah $\\{1, 2, 3, 4, 5, 6\\}$.",
            "(2) Pada pelemparan dua dadu, $(2, 5)$ dan $(5, 2)$ adalah titik sampel yang sama.",
            "(3) Kejadian munculnya mata $7$ pada pelemparan satu dadu adalah kejadian mustahil."
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P45-Q9] Dua dadu dilempar bersamaan. Pilihlah SEMUA titik sampel yang termasuk kejadian jumlah mata dadu $10$.",
          "opsi": [
            "A. $(4, 6)$",
            "B. $(5, 5)$",
            "C. $(6, 4)$",
            "D. $(3, 7)$",
            "E. $(5, 6)$"
          ],
          "kunci": "A, B, C",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P45-Q10] Empat koin dilempar bersamaan. Banyak titik sampel kejadian munculnya tepat dua angka adalah $\\dots$",
          "opsi": [],
          "kunci": "6",
          "bahas": ""
        }
      ]
    },
    "P46": {
      "id": "P46",
      "subject": "wajib",
      "title": "P46 • Peluang Suatu Kejadian dan Frekuensi Relatif",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P46-Q1] Sebuah dadu dilempar sekali. Peluang munculnya mata dadu genap adalah $\\dots$",
          "opsi": [
            "A. $\\frac{1}{6}$",
            "B. $\\frac{1}{3}$",
            "C. $\\frac{1}{2}$",
            "D. $\\frac{2}{3}$",
            "E. $1$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P46-Q2] Dua dadu dilempar bersamaan. Peluang jumlah mata dadu $5$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{1}{9}$",
            "B. $\\frac{5}{36}$",
            "C. $\\frac{1}{6}$",
            "D. $\\frac{1}{12}$",
            "E. $\\frac{4}{9}$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P46-Q3] Sebuah kantong berisi $4$ bola merah dan $6$ bola putih. Satu bola diambil secara acak. Peluang terambil bola putih adalah $\\dots$",
          "opsi": [
            "A. $\\frac{2}{5}$",
            "B. $\\frac{6}{4}$",
            "C. $\\frac{1}{6}$",
            "D. $\\frac{3}{5}$",
            "E. $\\frac{1}{10}$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P46-Q4] Satu kartu diambil secara acak dari satu set kartu remi. Peluang terambil kartu King adalah $\\dots$",
          "opsi": [
            "A. $\\frac{1}{52}$",
            "B. $\\frac{1}{4}$",
            "C. $\\frac{4}{13}$",
            "D. $\\frac{1}{26}$",
            "E. $\\frac{1}{13}$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P46-Q5] Dua koin dilempar bersamaan. Peluang munculnya paling sedikit satu gambar adalah $\\dots$",
          "opsi": [
            "A. $\\frac{1}{2}$",
            "B. $\\frac{3}{4}$",
            "C. $\\frac{1}{4}$",
            "D. $1$",
            "E. $\\frac{2}{3}$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P46-Q6] Sebuah dadu dilempar $60$ kali, dan mata $6$ muncul $12$ kali. Frekuensi relatif munculnya mata $6$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{1}{6}$",
            "B. $12$",
            "C. $\\frac{1}{12}$",
            "D. $\\frac{1}{5}$",
            "E. $5$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P46-Q7] Dua dadu dilempar bersamaan. Peluang jumlah mata dadu lebih dari $9$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{1}{6}$",
            "B. $\\frac{5}{18}$",
            "C. $\\frac{5}{36}$",
            "D. $\\frac{1}{12}$",
            "E. $\\frac{1}{3}$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P46-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Peluang suatu kejadian dapat bernilai $1{,}2$.",
            "(2) Peluang kejadian mustahil adalah $0$.",
            "(3) Frekuensi relatif hasil percobaan selalu sama persis dengan peluang teoretisnya."
          ],
          "kunci": "S - B - S",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P46-Q9] Sebuah kantong berisi $3$ bola merah, $5$ bola biru, dan $2$ bola kuning. Satu bola diambil secara acak. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. $P(\\text{merah}) = \\frac{3}{10}$",
            "B. $P(\\text{biru}) = \\frac{1}{2}$",
            "C. $P(\\text{kuning}) = \\frac{1}{5}$",
            "D. $P(\\text{hijau}) = \\frac{1}{10}$",
            "E. $P(\\text{bukan biru}) = \\frac{1}{2}$"
          ],
          "kunci": "A, B, C, E",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P46-Q10] Sebuah kantong berisi $20$ kelereng. Peluang terambil kelereng merah adalah $0{,}35$. Banyak kelereng merah di dalam kantong adalah $\\dots$",
          "opsi": [],
          "kunci": "7",
          "bahas": ""
        }
      ]
    },
    "P47": {
      "id": "P47",
      "subject": "wajib",
      "title": "P47 • Peluang Komplemen dan Frekuensi Harapan",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P47-Q1] Peluang suatu kejadian $A$ adalah $0{,}3$. Peluang komplemennya adalah $\\dots$",
          "opsi": [
            "A. $0{,}3$",
            "B. $0{,}7$",
            "C. $1{,}3$",
            "D. $0$",
            "E. $1$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P47-Q2] Dua dadu dilempar bersamaan. Peluang munculnya mata dadu yang TIDAK kembar adalah $\\dots$",
          "opsi": [
            "A. $\\frac{1}{6}$",
            "B. $\\frac{1}{2}$",
            "C. $\\frac{5}{6}$",
            "D. $\\frac{11}{12}$",
            "E. $\\frac{2}{3}$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P47-Q3] Sebuah dadu dilempar $150$ kali. Frekuensi harapan munculnya mata dadu prima adalah $\\dots$",
          "opsi": [
            "A. $25$",
            "B. $50$",
            "C. $150$",
            "D. $75$",
            "E. $100$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P47-Q4] Dua koin dilempar bersamaan sebanyak $80$ kali. Frekuensi harapan munculnya dua angka adalah $\\dots$",
          "opsi": [
            "A. $20$",
            "B. $40$",
            "C. $60$",
            "D. $10$",
            "E. $80$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P47-Q5] Tiga koin dilempar bersamaan. Peluang munculnya paling sedikit satu gambar adalah $\\dots$",
          "opsi": [
            "A. $\\frac{1}{8}$",
            "B. $\\frac{3}{8}$",
            "C. $\\frac{1}{2}$",
            "D. $\\frac{3}{4}$",
            "E. $\\frac{7}{8}$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P47-Q6] Peluang sebuah bibit tumbuh adalah $0{,}85$. Dari $400$ bibit yang ditanam, banyak bibit yang diharapkan TIDAK tumbuh adalah $\\dots$",
          "opsi": [
            "A. $340$",
            "B. $60$",
            "C. $85$",
            "D. $15$",
            "E. $400$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P47-Q7] Dua dadu dilempar bersamaan sebanyak $180$ kali. Frekuensi harapan munculnya jumlah mata dadu $7$ adalah $\\dots$",
          "opsi": [
            "A. $6$",
            "B. $36$",
            "C. $30$",
            "D. $60$",
            "E. $5$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P47-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Untuk setiap kejadian $A$, berlaku $P(A) + P(A') = 1$.",
            "(2) Frekuensi harapan selalu berupa bilangan bulat.",
            "(3) Pada pelemparan dua dadu, peluang munculnya paling sedikit satu mata $6$ adalah $\\frac{11}{36}$."
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P47-Q9] Sebuah dadu dilempar $60$ kali. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. Frekuensi harapan mata $1$ adalah $10$.",
            "B. Frekuensi harapan mata genap adalah $30$.",
            "C. Frekuensi harapan mata lebih dari $4$ adalah $20$.",
            "D. Frekuensi harapan mata $7$ adalah $10$.",
            "E. Frekuensi harapan mata bukan $6$ adalah $55$."
          ],
          "kunci": "A, B, C",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P47-Q10] Peluang turun hujan pada suatu hari di sebuah kota adalah $0{,}4$. Dalam $30$ hari, banyak hari TIDAK hujan yang diharapkan adalah $\\dots$",
          "opsi": [],
          "kunci": "18",
          "bahas": ""
        }
      ]
    },
    "P48": {
      "id": "P48",
      "subject": "wajib",
      "title": "P48 • Peluang Kejadian Majemuk: Saling Lepas dan Saling Bebas",
      "questions": [
        {
          "no": 1,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C2 Pemahaman",
          "bobot": 10,
          "tanya": "[P48-Q1] Dua kejadian $A$ dan $B$ disebut saling lepas apabila $\\dots$",
          "opsi": [
            "A. $A \\cap B = S$",
            "B. $A \\cap B = \\varnothing$",
            "C. $P(A) = P(B)$",
            "D. $A \\cup B = \\varnothing$",
            "E. $P(A) \\times P(B) = 1$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 2,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P48-Q2] Sebuah dadu dilempar sekali. Peluang munculnya mata genap atau mata prima adalah $\\dots$",
          "opsi": [
            "A. $1$",
            "B. $\\frac{2}{3}$",
            "C. $\\frac{5}{6}$",
            "D. $\\frac{1}{6}$",
            "E. $\\frac{1}{2}$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 3,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P48-Q3] Dua dadu dilempar bersamaan. Peluang jumlah mata dadu $5$ atau $9$ adalah $\\dots$",
          "opsi": [
            "A. $\\frac{1}{9}$",
            "B. $\\frac{1}{3}$",
            "C. $\\frac{4}{9}$",
            "D. $\\frac{2}{9}$",
            "E. $\\frac{1}{18}$"
          ],
          "kunci": "D",
          "bahas": ""
        },
        {
          "no": 4,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C3 Penerapan",
          "bobot": 10,
          "tanya": "[P48-Q4] Sebuah koin dan sebuah dadu dilempar bersamaan. Peluang munculnya gambar pada koin dan mata ganjil pada dadu adalah $\\dots$",
          "opsi": [
            "A. $\\frac{1}{4}$",
            "B. $\\frac{1}{2}$",
            "C. $\\frac{1}{12}$",
            "D. $\\frac{3}{4}$",
            "E. $\\frac{1}{6}$"
          ],
          "kunci": "A",
          "bahas": ""
        },
        {
          "no": 5,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P48-Q5] Satu kartu diambil dari satu set kartu remi. Peluang terambil kartu King atau kartu berwarna merah adalah $\\dots$",
          "opsi": [
            "A. $\\frac{15}{26}$",
            "B. $\\frac{1}{2}$",
            "C. $\\frac{8}{13}$",
            "D. $\\frac{1}{13}$",
            "E. $\\frac{7}{13}$"
          ],
          "kunci": "E",
          "bahas": ""
        },
        {
          "no": 6,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P48-Q6] Kantong I berisi $3$ bola merah dan $2$ bola putih. Kantong II berisi $4$ bola merah dan $6$ bola putih. Dari setiap kantong diambil satu bola. Peluang kedua bola berwarna putih adalah $\\dots$",
          "opsi": [
            "A. $\\frac{8}{15}$",
            "B. $\\frac{6}{25}$",
            "C. $\\frac{2}{5}$",
            "D. $\\frac{12}{25}$",
            "E. $\\frac{3}{5}$"
          ],
          "kunci": "B",
          "bahas": ""
        },
        {
          "no": 7,
          "tipe": "Pilihan Ganda Tunggal",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P48-Q7] Kejadian $A$ dan $B$ saling bebas dengan $P(A) = 0{,}5$ dan $P(B) = 0{,}4$. Nilai $P(A \\cup B)$ adalah $\\dots$",
          "opsi": [
            "A. $0{,}9$",
            "B. $0{,}2$",
            "C. $0{,}7$",
            "D. $0{,}1$",
            "E. $0{,}6$"
          ],
          "kunci": "C",
          "bahas": ""
        },
        {
          "no": 8,
          "tipe": "Pilihan Benar / Salah",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P48-Q8] Tentukan benar atau salah setiap pernyataan berikut.",
          "opsi": [
            "(1) Pada pelemparan satu dadu, kejadian munculnya mata genap dan kejadian munculnya mata ganjil saling lepas.",
            "(2) Jika $A$ dan $B$ saling lepas, maka $P(A \\cup B) = P(A) \\times P(B)$.",
            "(3) Hasil pelemparan sebuah koin dan sebuah dadu merupakan kejadian yang saling bebas."
          ],
          "kunci": "B - S - B",
          "bahas": ""
        },
        {
          "no": 9,
          "tipe": "Pilihan Ganda Kompleks",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P48-Q9] Sebuah dadu dilempar sekali. Kejadian $A = \\{1, 2, 3\\}$ dan $B = \\{3, 4\\}$. Pilihlah SEMUA pernyataan yang benar.",
          "opsi": [
            "A. $P(A \\cap B) = \\frac{1}{6}$",
            "B. $P(A \\cup B) = \\frac{2}{3}$",
            "C. $A$ dan $B$ saling lepas.",
            "D. $P(A) + P(B) - P(A \\cap B) = \\frac{2}{3}$",
            "E. $P(A \\cup B) = \\frac{5}{6}$"
          ],
          "kunci": "A, B, D",
          "bahas": ""
        },
        {
          "no": 10,
          "tipe": "Isian Singkat Numerik",
          "level": "C4 Analisis",
          "bobot": 10,
          "tanya": "[P48-Q10] Dua dadu dilempar bersamaan sebanyak $72$ kali. Frekuensi harapan munculnya jumlah mata dadu $5$ atau $9$ adalah $\\dots$",
          "opsi": [],
          "kunci": "16",
          "bahas": ""
        }
      ]
    }
  },
  "tka_clil": {},
  "tka_minat": {}
};

    window.STUDENTS_DATA = {
  '23400016': { nama: 'Aunillah Fath Al Ashya', kelas: 'Alumni 2026', access_level: 'all' },
  'aunillah': { nama: 'Aunillah Fath Al Ashya', kelas: 'Alumni 2026', access_level: 'all' }
};

const CALENDAR_DATA = [];
