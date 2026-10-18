/**
 * WEEKLY_RAID_BANK: KAMPANYE RAID BOSS MINGGUAN TITAN STATIGO (50 SOAL TKA)
 * SMA Global Islamic School 2 Serpong - Tahun Pelajaran 2026/2027
 * Guru Pengampu: Mr. Ardi
 *
 * Standar Profesional Pembuatan Soal TKA (Pusmendik BSKAP Kemendikbudristek):
 * - 5 Model Baku Asesmen Nasional:
 *   1. Pilihan Ganda Biasa (Single MC dengan sebaran kunci A-E berimbang & distractor miskonsepsi)
 *   2. Pilihan Ganda Kompleks (True/False Table - Benar/Salah B-S)
 *   3. Pilihan Ganda Kompleks (Checkbox Multi-Select)
 *   4. Isian Singkat Numerik (Paragraf Rumpang / Direct Numeric)
 *   5. Kausatif Sebab-Akibat (Pernyataan & Alasan analitis)
 * - Kalibrasi Kesukaran: Level 1 (Mudah), Level 2 (Sedang), Level 3 (HOTS)
 * - Skuad F1 - F2: 50 Butir Wajib
 * - Skuad F3 - F4: 50 Butir Terpadu (25 Wajib + 25 Minat)
 * - Multi-Week Campaign Architecture:
 *   - 2026-W41 (Pekan 1): Wajib P15/P16 + Minat P17 (Closed)
 *   - 2026-W42 (Pekan 2): Wajib P17/P18 + Minat P18/P19 (Rilis Senin 12 Okt 2026 05.00 WIB)
 * - Zero False-Positive Anti-Cheat & KaTeX Step-by-Step Guidance
 */

(function() {
  const WEEKLY_POOLS = {
    '2026-W41': {
  "matwa": [
    {
      "id": "WR-W01",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Tepi Kelas & Titik Tengah",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Data hasil uji kuat tekan balok beton proyek infrastruktur nasional disajikan dalam interval kelas $60 - 74\\text{ MPa}$. Tentukan tepi bawah ($Tb$), tepi atas ($Ta$), dan titik tengah ($x_i$) untuk kelas tersebut!",
      "opsi": [
        "A. $Tb = 60{,}0$; $Ta = 74{,}0$; dan $x_i = 67$",
        "B. $Tb = 59{,}5$; $Ta = 74{,}5$; dan $x_i = 67$",
        "C. $Tb = 59{,}5$; $Ta = 75{,}5$; dan $x_i = 67{,}5$",
        "D. $Tb = 60{,}5$; $Ta = 73{,}5$; dan $x_i = 66$",
        "E. $Tb = 59{,}0$; $Ta = 75{,}0$; dan $x_i = 68$"
      ],
      "kunci": "B",
      "bahas": "Langkah 1: Tepi bawah $Tb = 60 - 0{,}5 = 59{,}5$.\nLangkah 2: Tepi atas $Ta = 74 + 0{,}5 = 74{,}5$.\nLangkah 3: Titik tengah $x_i = \\frac{60 + 74}{2} = \\frac{134}{2} = 67$.\nKesimpulan: Kunci B benar ($Tb = 59{,}5$; $Ta = 74{,}5$; $x_i = 67$).",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-W02",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Analisis Frekuensi Histogram",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Sebuah histogram menampilkan 5 batang kelas berat kontainer logistik pelabuhan dengan tepi kelas berturut-turut $10{,}5; 20{,}5; 30{,}5; 40{,}5; 50{,}5; 60{,}5$. Frekuensi masing-masing kelas adalah $6, 12, 18, 10, 4$.\n\nBerapa persen (%) kontainer yang memiliki berat lebih dari $30{,}5\\text{ ton}$? (Ketik angka saja tanpa tanda persen)",
      "opsi": [],
      "kunci": "64",
      "bahas": "Langkah 1: Total kontainer $N = 6 + 12 + 18 + 10 + 4 = 50$.\nLangkah 2: Kontainer dengan berat $> 30{,}5\\text{ ton}$ berada pada kelas 3, 4, dan 5: $18 + 10 + 4 = 32$.\nLangkah 3: Persentase $= \\frac{32}{50} \\times 100\\% = 64\\%$.\nKesimpulan: Jawaban numerik pasti adalah 64.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-W03",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Analisis Ogive Distribusi Kumulatif",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Diberikan tabel distribusi frekuensi skor asesmen: $21-30$ ($4$), $31-40$ ($8$), $41-50$ ($15$), $51-60$ ($10$), $61-70$ ($3$). Total responden adalah $40$ siswa. Analisis kebenaran setiap pernyataan berikut terkait kurva Ogive:",
      "opsi": [
        "Frekuensi kumulatif kurang dari atau sama dengan $50{,}5$ pada Ogive Positif adalah 27.",
        "Frekuensi kumulatif lebih dari atau sama dengan $40{,}5$ pada Ogive Negatif adalah 15.",
        "Titik potong kurva Ogive Positif dan Ogive Negatif terjadi pada frekuensi kumulatif 20 (setara Median).",
        "Panjang interval kelas ($c$) pada tabel distribusi tersebut adalah 9."
      ],
      "kunci": "B - S - B - S",
      "bahas": "Analisis Pernyataan:\n1. Baris 1: $F_k \\le 50{,}5$ menjumlahkan kelas 1 s.d. 3: $4 + 8 + 15 = 27$. (BENAR)\n2. Baris 2: $F_k \\ge 40{,}5$ adalah kelas 3, 4, dan 5: $15 + 10 + 3 = 28$, bukan 15. (SALAH)\n3. Baris 3: Titik potong Ogive Positif dan Negatif selalu pada $N/2 = 40/2 = 20$ (Median). (BENAR)\n4. Baris 4: Panjang kelas $c = 30 - 21 + 1 = 10$, bukan 9. (SALAH)\nKesimpulan: Kunci adalah B - S - B - S.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W04",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Titik Potong Ogive & Ukuran Pemusatan",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Pada diagram distribusi frekuensi kumulatif, perpotongan antara kurva Ogive Positif ($F_k$ kurang dari) dan Ogive Negatif ($F_k$ lebih dari) secara teoritis merepresentasikan nilai ukuran pemusatan ...",
      "opsi": [
        "A. Modus ($Mo$)",
        "B. Rata-rata Hitung (Mean $\\bar{x}$)",
        "C. Median ($Me$)",
        "D. Kuartil Bawah ($Q_1$)",
        "E. Jangkauan Interkuartil ($QR$)"
      ],
      "kunci": "C",
      "bahas": "Langkah 1: Ogive Positif bergerak naik dari $0$ ke $N$, sedangkan Ogive Negatif bergerak turun dari $N$ ke $0$.\nLangkah 2: Titik potong keduanya berada pada ordinat frekuensi kumulatif $50\\%$ dari seluruh data ($N/2$).\nLangkah 3: Nilai data pada absis perpotongan tersebut adalah Median ($Me$).\nKesimpulan: Kunci C benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-W05",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Rekonstruksi Interval & Karakteristik Data",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Tiga titik tengah kelas interval pertama berturut-turut adalah $x_1 = 25{,}5; x_2 = 35{,}5;$ dan $x_3 = 45{,}5$. Jika data berupa bilangan bulat, centang SEMUA pernyataan yang bernilai BENAR!",
      "opsi": [
        "A. Panjang kelas interval ($c$) data tersebut adalah 10 satuan.",
        "B. Interval kelas kedua adalah $30 - 40$.",
        "C. Tepi bawah kelas kedua adalah $Tb_2 = 30{,}5$ dan tepi atasnya adalah $Ta_2 = 40{,}5$.",
        "D. Batas bawah kelas pertama adalah 20.",
        "E. Jarak antar titik tengah tidak sama sehingga lebar balok histogram bervariasi."
      ],
      "kunci": "A, C",
      "bahas": "Evaluasi Opsi:\n- Opsi A: $c = 35{,}5 - 25{,}5 = 10$. (BENAR)\n- Opsi B: Karena $c = 10$, interval kelas kedua adalah $31 - 40$ (bukan $30 - 40$). (SALAH)\n- Opsi C: Tepi bawah $Tb_2 = 35{,}5 - 5 = 30{,}5$ dan $Ta_2 = 35{,}5 + 5 = 40{,}5$. (BENAR)\n- Opsi D: Interval kelas pertama adalah $21 - 30$, batas bawahnya adalah 21. (SALAH)\n- Opsi E: Jarak antar titik tengah konstan ($10$), lebar balok histogram seragam. (SALAH)\nKesimpulan: Opsi yang benar adalah A dan C.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W06",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Luas Balok Histogram",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Pada histogram frekuensi standar dengan skala absis menyatakan nilai data dan skala ordinat menyatakan frekuensi per satuan lebar, jika total frekuensi pengamatan adalah $N = 80$ dan setiap kelas memiliki panjang interval konstan $c = 6$, maka luas total seluruh persegi panjang batang histogram adalah ...",
      "opsi": [
        "A. $80\\text{ satuan luas}$",
        "B. $13{,}33\\text{ satuan luas}$",
        "C. $240\\text{ satuan luas}$",
        "D. $480\\text{ satuan luas}$",
        "E. $960\\text{ satuan luas}$"
      ],
      "kunci": "D",
      "bahas": "Langkah 1: Setiap batang histogram memiliki lebar alas $= c$ dan tinggi $= f_i$.\nLangkah 2: Luas satu batang $= c \\times f_i$.\nLangkah 3: Luas total $= \\sum (c \\times f_i) = c \\sum f_i = 6 \\times 80 = 480\\text{ satuan luas}$.\nKesimpulan: Kunci D benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W07",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Poligon Frekuensi & Kurva Mulus",
      "tipe": "Kausatif Sebab-Akibat",
      "tanya": "Pernyataan: Titik puncak dari poligon frekuensi suatu data berkelompok selalu berkoordinat pada absis yang merupakan titik tengah ($x_i$) dari kelas interval yang memiliki frekuensi terbesar.\nSEBAB\nAlasan: Poligon frekuensi dibentuk dengan menghubungkan koordinat titik tengah sisi atas setiap balok histogram dengan garis lurus berurutan.",
      "opsi": [
        "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab-akibat.",
        "B. Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab-akibat.",
        "C. Pernyataan benar dan alasan salah.",
        "D. Pernyataan salah dan alasan benar.",
        "E. Pernyataan dan alasan keduanya salah."
      ],
      "kunci": "A",
      "bahas": "Analisis:\n1. Pernyataan: BENAR. Puncak tertinggi poligon berada pada batang tertinggi (frekuensi terbesar), absisnya adalah titik tengah kelas tersebut.\n2. Alasan: BENAR. Definisi poligon frekuensi adalah kurva garis yang menghubungkan titik-titik $(x_i, f_i)$ di mana $x_i$ adalah titik tengah balok histogram.\n3. Hubungan: Alasan menerangkan secara kausal mengapa koordinat absis puncak poligon selalu berupa titik tengah kelas frekuensi maksimum.\nKesimpulan: Kunci A benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W08",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Frekuensi Kumulatif Lebih Dari",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Data hasil panen padi organik di suatu sentra lumbung pangan disajikan dalam tabel frekuensi: $30-39\\text{ ton}$ ($5$), $40-49\\text{ ton}$ ($12$), $50-59\\text{ ton}$ ($20$), $60-69\\text{ ton}$ ($15$), $70-79\\text{ ton}$ ($8$). Banyak sentra yang memproduksi gabah sekurang-kurangnya $49{,}5\\text{ ton}$ adalah ...",
      "opsi": [
        "A. $17\\text{ sentra}$",
        "B. $25\\text{ sentra}$",
        "C. $35\\text{ sentra}$",
        "D. $38\\text{ sentra}$",
        "E. $43\\text{ sentra}$"
      ],
      "kunci": "E",
      "bahas": "Langkah 1: Nilai $49{,}5\\text{ ton}$ merupakan tepi bawah kelas ke-3 ($50-59$).\nLangkah 2: Sekurang-kurangnya $49{,}5\\text{ ton}$ berarti frekuensi kumulatif $\\ge 49{,}5\\text{ ton}$ (kelas 3, 4, dan 5).\nLangkah 3: Jumlah sentra $= 20 + 15 + 8 = 43\\text{ sentra}$.\nKesimpulan: Kunci E benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W09",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Rekonstruksi Tepi Kelas & Poligon",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Dua titik tengah berurutan pada poligon frekuensi adalah $x_k = 64$ dan $x_{k+1} = 73$. Data merupakan variabel kontinu. Tentukan status kebenaran pernyataan berikut:",
      "opsi": [
        "Panjang kelas interval data tersebut adalah 10 satuan.",
        "Tepi atas kelas ke-$k$ berimpit dengan tepi bawah kelas ke-$(k+1)$ pada nilai 68,5.",
        "Selisih antara tepi atas dan tepi bawah setiap kelas adalah 9 satuan.",
        "Titik tengah kelas berikutnya ($x_{k+2}$) adalah 81."
      ],
      "kunci": "S - B - B - S",
      "bahas": "Analisis Pernyataan:\n1. Baris 1: Panjang kelas $c = x_{k+1} - x_k = 73 - 64 = 9$ satuan, bukan 10. (SALAH)\n2. Baris 2: Tepi perbatasan antarkelas $= \\frac{x_k + x_{k+1}}{2} = \\frac{64 + 73}{2} = 68{,}5$. (BENAR)\n3. Baris 3: Selisih tepi atas dan tepi bawah adalah panjang kelas $c = 9$. (BENAR)\n4. Baris 4: Titik tengah berikutnya $x_{k+2} = 73 + 9 = 82$, bukan 81. (SALAH)\nKesimpulan: Kunci adalah S - B - B - S.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W10",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Rekonstruksi Frekuensi Total dari Poligon",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Poligon frekuensi memiliki 5 titik koordinat: $(12, 15), (17, 30), (22, 45), (27, 20),$ dan $(32, 10)$. Berapakah jumlah total sampel ($N$) yang diobservasi dalam penelitian tersebut?",
      "opsi": [],
      "kunci": "120",
      "bahas": "Langkah 1: Ordinat ($y$) dari titik-titik poligon mewakili frekuensi masing-masing kelas.\nLangkah 2: $N = \\sum f_i = 15 + 30 + 45 + 20 + 10$.\nLangkah 3: $N = 120$.\nKesimpulan: Jawaban numerik pasti adalah 120.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-W11",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Ogive Relatif & Persentase",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Pada Ogive Relatif Negatif ($F_k\\%$ lebih dari), titik pada tepi bawah kelas pertama selalu memiliki persentase frekuensi sebesar ...",
      "opsi": [
        "A. $100\\%$",
        "B. $0\\%$",
        "C. $50\\%$",
        "D. Tergantung nilai frekuensi kelas pertama",
        "E. $1\\%$"
      ],
      "kunci": "A",
      "bahas": "Langkah 1: Ogive Negatif merepresentasikan data yang nilainya 'lebih dari atau sama dengan' tepi bawah.\nLangkah 2: Karena seluruh data pasti bernilai $\\ge$ tepi bawah kelas paling awal, frekuensi kumulatifnya mencakup $100\\%$ dari seluruh sampel.\nKesimpulan: Kunci A benar ($100\\%$).",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-W12",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Analisis Histogram Simetris",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Sebuah histogram menampilkan 5 kelas frekuensi yang tersusun simetris sempurna: $f = [8, 18, 28, 18, 8]$ dengan interval kelas pertama $20 - 29$. Centang SEMUA pernyataan yang bernilai BENAR!",
      "opsi": [
        "A. Total sampel data adalah 70.",
        "B. Nilai modus data terletak tepat di dalam kelas interval ke-3 ($40 - 49$).",
        "C. Persentase frekuensi kelas yang nilainya kurang dari $39{,}5$ adalah $50\\%$.",
        "D. Frekuensi kumulatif kurang dari $49{,}5$ adalah 54.",
        "E. Ogive positif data tersebut berbentuk garis lurus linear sempurna."
      ],
      "kunci": "B, D",
      "bahas": "Evaluasi Opsi:\n- Opsi A: Total data $N = 8 + 18 + 28 + 18 + 8 = 80$ (bukan 70). (SALAH)\n- Opsi B: Frekuensi terbesar adalah $28$ pada kelas ke-3 ($40 - 49$). (BENAR)\n- Opsi C: Nilai $< 39{,}5$ mencakup kelas 1 & 2 ($8 + 18 = 26$). Persentase $= 26/80 = 32{,}5\\%$ (bukan $50\\%$). (SALAH)\n- Opsi D: Nilai $< 49{,}5$ mencakup kelas 1, 2, 3: $8 + 18 + 28 = 54$. (BENAR)\n- Opsi E: Ogive data simetris berbentuk huruf S (sigmoidal), bukan garis lurus. (SALAH)\nKesimpulan: Opsi B dan D benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W13",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Batas Kelas vs Tepi Kelas",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Diberikan kelas interval $45{,}0 - 54{,}9$ untuk data hasil panen yang dicatat dalam ketelitian persepuluhan (satu angka di belakang koma). Nilai tepi bawah ($Tb$) dan tepi atas ($Ta$) kelas tersebut adalah ...",
      "opsi": [
        "A. $Tb = 44{,}5$ dan $Ta = 54{,}5$",
        "B. $Tb = 44{,}95$ dan $Ta = 54{,}95$",
        "C. $Tb = 44{,}0$ dan $Ta = 55{,}0$",
        "D. $Tb = 45{,}0$ dan $Ta = 54{,}9$",
        "E. $Tb = 44{,}9$ dan $Ta = 55{,}0$"
      ],
      "kunci": "B",
      "bahas": "Langkah 1: Untuk data dengan ketelitian 1 desimal ($0{,}1$), setengah satuan unit adalah $\\frac{0{,}1}{2} = 0{,}05$.\nLangkah 2: Tepi bawah $Tb = 45{,}0 - 0{,}05 = 44{,}95$.\nLangkah 3: Tepi atas $Ta = 54{,}9 + 0{,}05 = 54{,}95$.\nKesimpulan: Kunci B benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W14",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Distribusi Frekuensi Bimodal",
      "tipe": "Kausatif Sebab-Akibat",
      "tanya": "Pernyataan: Pada histogram distribusi frekuensi yang memiliki dua puncak batang terpisah sama tinggi (distribusi bimodal), kurva poligon frekuensinya akan memiliki dua titik balik maksimum lokal.\nSEBAB\nAlasan: Setiap distribusi frekuensi berkelompok yang memiliki dua kelas puncak pasti memiliki nilai rata-rata hitung (mean) yang sama persis dengan nilai kedua modusnya.",
      "opsi": [
        "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab-akibat.",
        "B. Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab-akibat.",
        "C. Pernyataan benar dan alasan salah.",
        "D. Pernyataan salah dan alasan benar.",
        "E. Pernyataan dan alasan keduanya salah."
      ],
      "kunci": "C",
      "bahas": "Analisis:\n1. Pernyataan: BENAR. Pada distribusi bimodal, terdapat dua puncak terpisah sehingga poligon frekuensi memiliki dua titik balik maksimum lokal.\n2. Alasan: SALAH. Pada distribusi bimodal, nilai mean berada di antara kedua puncak tersebut dan umumnya berbeda dengan kedua nilai modusnya.\nKesimpulan: Pernyataan benar dan alasan salah (Kunci C).",
      "level": "Level 3 (HOTS)"
    },
    {
      "id": "WR-W15",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Menentukan Banyak Kelas (Aturan Sturgess)",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Dalam riset emisi karbon kendaraan dengan ukuran sampel $n = 100$ data, peneliti menyusun tabel distribusi frekuensi menggunakan Aturan Sturgess $k = 1 + 3{,}322 \\log(n)$. Banyak kelas ($k$) yang direkomendasikan adalah ...",
      "opsi": [
        "A. 6 kelas",
        "B. 7 kelas",
        "C. 8 kelas",
        "D. 9 kelas",
        "E. 10 kelas"
      ],
      "kunci": "C",
      "bahas": "Langkah 1: $\\log(100) = 2$.\nLangkah 2: $k = 1 + 3{,}322(2) = 1 + 6{,}644 = 7{,}644$.\nLangkah 3: Pembulatan ke atas pada aturan pengelompokan data menghasilkan $k = 8$ kelas.\nKesimpulan: Kunci C benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W16",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Rekonstruksi Interval Kelas Terbuka",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Suatu data pendapatan memiliki kelas interval terbuka pada batas atas: '$\\ge 100\\text{ juta rupiah}$' dengan frekuensi $5$. Analisis implikasi matematis dari kelas terbuka tersebut:",
      "opsi": [
        "Kelas terbuka tersebut tidak memiliki batas atas definitif.",
        "Titik tengah ($x_i$) untuk kelas terbuka tersebut tidak dapat dihitung secara eksak tanpa informasi datum maksimum.",
        "Kurva Ogive Positif tidak dapat digambarkan sama sekali jika ada kelas terbuka.",
        "Luas balok histogram kelas terbuka tidak dapat didefinisikan secara geometri berhingga."
      ],
      "kunci": "B - B - S - B",
      "bahas": "Analisis:\n1. Baris 1: BENAR. Tidak ada batas atas tertulis pada interval terbuka '$\\ge 100$'.\n2. Baris 2: BENAR. Tanpa batas atas, nilai tengah $(Tb + Ta)/2$ tidak terdefinisi eksak.\n3. Baris 3: SALAH. Ogive Positif tetap dapat memetakan titik kumulatif pada tepi bawah kelas terbuka.\n4. Baris 4: BENAR. Balok histogram memerlukan alas $c$ berhingga; jika tanpa batas atas, lebar balok tak terhingga.\nKesimpulan: Kunci adalah B - B - S - B.",
      "level": "Level 3 (HOTS)"
    },
    {
      "id": "WR-W17",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Titik Tengah dari Tepi Kelas",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Suatu kelas interval memiliki tepi bawah $Tb = 71{,}5$ dan tepi atas $Ta = 80{,}5$. Berapakah nilai titik tengah ($x_i$) kelas tersebut?",
      "opsi": [],
      "kunci": "76",
      "bahas": "Langkah 1: Titik tengah $x_i = \\frac{Tb + Ta}{2}$.\nLangkah 2: $x_i = \\frac{71{,}5 + 80{,}5}{2} = \\frac{152}{2} = 76$.\nKesimpulan: Jawaban numerik pasti adalah 76.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-W18",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Frekuensi Relatif Kelas Tertentu",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Diberikan distribusi frekuensi: $1-5$ ($3$), $6-10$ ($7$), $11-15$ ($12$), $16-20$ ($10$), $21-25$ ($8$). Frekuensi relatif kelas ke-3 dalam bentuk persen adalah ...",
      "opsi": [
        "A. $12\\%$",
        "B. $20\\%$",
        "C. $25\\%$",
        "D. $30\\%$",
        "E. $35\\%$"
      ],
      "kunci": "D",
      "bahas": "Langkah 1: Total frekuensi $N = 3 + 7 + 12 + 10 + 8 = 40$.\nLangkah 2: Frekuensi kelas ke-3 adalah $f_3 = 12$.\nLangkah 3: Frekuensi relatif $= \\frac{12}{40} \\times 100\\% = 30\\%$.\nKesimpulan: Kunci D benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-W19",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Transformasi Histogram ke Poligon",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Ketika mengonversi histogram frekuensi menjadi kurva poligon frekuensi, centang SEMUA kaidah metodologis yang BENAR!",
      "opsi": [
        "A. Titik koordinat poligon diambil dari titik tengah sisi atas setiap batang balok histogram.",
        "B. Sumbu horizontal poligon wajib menggunakan tepi kelas.",
        "C. Ujung kiri dan kanan poligon dibiarkan melayang di udara tanpa menyentuh sumbu absis.",
        "D. Ujung kurva poligon ditutup ke sumbu horizontal pada titik tengah kelas imajiner sebelum kelas pertama dan sesudah kelas terakhir dengan frekuensi 0.",
        "E. Luas daerah di bawah kurva poligon tertutup setara dengan luas total seluruh balok histogram."
      ],
      "kunci": "A, D, E",
      "bahas": "Evaluasi Kaidah:\n- Opsi A: BENAR, titik puncak poligon adalah $(x_i, f_i)$.\n- Opsi B: SALAH, sumbu horizontal menggunakan titik tengah ($x_i$).\n- Opsi C: SALAH, poligon tidak boleh dibiarkan mengambang.\n- Opsi D: BENAR, kurva ditutup ke titik tengah kelas semu sebelum dan sesudahnya dengan frekuensi $0$.\n- Opsi E: BENAR, luas poligon tertutup sama persis dengan luas total balok histogram.\nKesimpulan: Opsi A, D, dan E benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W20",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Karakteristik Ogive Relatif",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Pada kurva Ogive Relatif (persentase frekuensi kumulatif kurang dari), nilai ordinat pada tepi atas kelas terakhir selalu bernilai tepat ...",
      "opsi": [
        "A. $0\\%$",
        "B. $50\\%$",
        "C. Tergantung banyaknya kelas",
        "D. $90\\%$",
        "E. $100\\%$"
      ],
      "kunci": "E",
      "bahas": "Langkah 1: Ogive Positif menjumlahkan seluruh frekuensi dari kelas pertama sampai kelas terakhir.\nLangkah 2: Pada tepi atas kelas paling akhir, seluruh $N$ datum telah terhitung.\nLangkah 3: Dalam skala relatif, $\\frac{N}{N} \\times 100\\% = 100\\%$.\nKesimpulan: Kunci E benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-W21",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Interval dari Tepi Kelas",
      "tipe": "Kausatif Sebab-Akibat",
      "tanya": "Pernyataan: Jika tepi bawah suatu kelas data bilangan bulat adalah $49{,}5$ dan tepi atasnya adalah $59{,}5$, maka interval kelas aslinya adalah $50 - 59$.\nSEBAB\nAlasan: Panjang interval kelas data tersebut diperoleh dari selisih tepi atas dikurangi tepi bawah, yaitu $59{,}5 - 49{,}5 = 10$.",
      "opsi": [
        "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab-akibat.",
        "B. Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab-akibat.",
        "C. Pernyataan benar dan alasan salah.",
        "D. Pernyataan salah dan alasan benar.",
        "E. Pernyataan dan alasan keduanya salah."
      ],
      "kunci": "B",
      "bahas": "Analisis:\n1. Pernyataan: BENAR. Batas bawah bulat $= 49{,}5 + 0{,}5 = 50$, batas atas bulat $= 59{,}5 - 0{,}5 = 59$. Interval $= 50 - 59$.\n2. Alasan: BENAR. Panjang kelas $c = Ta - Tb = 59{,}5 - 49{,}5 = 10$.\n3. Hubungan: Keduanya benar, namun alasan menghitung panjang kelas bukan merupakan hukum kausal yang mendefinisikan pembentukan batas bulat $50-59$ dari tepi desimal.\nKesimpulan: Kunci B benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W22",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Analisis Titik Tengah & Lebar Kelas",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Diberikan kelas interval $100 - 110$ untuk data bilangan bulat. Evaluasi kebenaran pernyataan-pernyataan berikut:",
      "opsi": [
        "Panjang kelas interval tersebut adalah 10 satuan.",
        "Titik tengah kelas interval tersebut adalah 105.",
        "Tepi bawah kelas tersebut adalah 99,5 dan tepi atasnya adalah 110,5.",
        "Banyak bilangan bulat yang tercakup dalam interval tersebut adalah 11 bilangan."
      ],
      "kunci": "S - B - B - B",
      "bahas": "Analisis:\n1. Baris 1: Panjang kelas bilangan bulat adalah $c = 110 - 100 + 1 = 11$, bukan 10. (SALAH)\n2. Baris 2: Titik tengah $x_i = \\frac{100 + 110}{2} = 105$. (BENAR)\n3. Baris 3: Tepi bawah $Tb = 100 - 0{,}5 = 99{,}5$; Tepi atas $Ta = 110{,}5$. (BENAR)\n4. Baris 4: Bilangan dari 100 s.d. 110 berjumlah $110 - 100 + 1 = 11$ bilangan. (BENAR)\nKesimpulan: Kunci adalah S - B - B - B.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W23",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Modus Visual Histogram",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Tiga balok berturut-turut pada histogram memiliki tepi kelas $[9{,}5; 19{,}5]$, $[19{,}5; 29{,}5]$, dan $[29{,}5; 39{,}5]$ dengan frekuensi berturut-turut $8, 20,$ dan $12$. Kelas modus data tersebut adalah ...",
      "opsi": [
        "A. $20 - 29$",
        "B. $10 - 19$",
        "C. $30 - 39$",
        "D. $19{,}5 - 29{,}5$",
        "E. $20 - 30$"
      ],
      "kunci": "A",
      "bahas": "Langkah 1: Kelas dengan frekuensi tertinggi adalah balok tengah dengan frekuensi $20$.\nLangkah 2: Tepi kelas balok tersebut adalah $[19{,}5; 29{,}5]$.\nLangkah 3: Interval kelas bulat aslinya adalah $(19{,}5 + 0{,}5) - (29{,}5 - 0{,}5) = 20 - 29$.\nKesimpulan: Kunci A benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-W24",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Persentase Kumulatif & Ogive",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Total sampel data adalah $N = 80$. Frekuensi kumulatif kurang dari $Ta_3 = 60{,}5$ adalah 60 datum. Centang SEMUA pernyataan yang BENAR!",
      "opsi": [
        "A. Persentase data yang bernilai $\\le 60{,}5$ adalah $60\\%$.",
        "B. Persentase data yang bernilai $\\le 60{,}5$ adalah $75\\%$.",
        "C. Banyak datum yang nilainya $> 60{,}5$ adalah 20 datum.",
        "D. Titik pada Ogive Negatif di absis $60{,}5$ bernilai 60 datum.",
        "E. Titik pada Ogive Negatif di absis $60{,}5$ bernilai 20 datum."
      ],
      "kunci": "B, C, E",
      "bahas": "Evaluasi:\n- Opsi A & B: Persentase $\\le 60{,}5 = \\frac{60}{80} \\times 100\\% = 75\\%$. Jadi B benar, A salah.\n- Opsi C: Sisanya $= 80 - 60 = 20$ datum. (BENAR)\n- Opsi D & E: Pada Ogive Negatif ($F_k$ lebih dari), frekuensinya adalah datum yang $> 60{,}5$, yaitu $20$ datum. Jadi E benar, D salah.\nKesimpulan: Opsi B, C, dan E benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W25",
      "mapel": "Matematika Wajib",
      "materi": "P15 • Rekonstruksi Tepi dari Puncak Poligon",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Puncak tertinggi poligon frekuensi berada di koordinat $(27, 24)$. Jika panjang kelas interval data tersebut konstan $c = 6$ dan data merupakan bilangan bulat dengan batas teratur, interval kelas modus aslinya adalah ...",
      "opsi": [
        "A. $23 - 29$",
        "B. $25 - 30$",
        "C. $24 - 30$",
        "D. $24 - 29$",
        "E. $25 - 29$"
      ],
      "kunci": "D",
      "bahas": "Langkah 1: Panjang kelas $c = 6$. Untuk interval bulat $24 - 29$, banyaknya data adalah $29 - 24 + 1 = 6$.\nLangkah 2: Tepi bawah $Tb = 23{,}5$, tepi atas $Ta = 29{,}5$.\nLangkah 3: Titik tengah interval tersebut adalah $\\frac{24 + 29}{2} = 26{,}5 \\approx 27$.\nKesimpulan: Kunci D ($24 - 29$) benar.",
      "level": "Level 3 (HOTS)"
    },
    {
      "id": "WR-W26",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Rata-rata Hitung Metode Titik Tengah",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Diberikan tabel distribusi frekuensi nilai ujian matematika: $40-49$ ($4$), $50-59$ ($6$), $60-69$ ($10$), $70-79$ ($14$), $80-89$ ($6$). Nilai rata-rata hitung (mean $\\bar{x}$) data tersebut adalah ...",
      "opsi": [
        "A. $65{,}5$",
        "B. $66{,}0$",
        "C. $67{,}5$",
        "D. $68{,}0$",
        "E. $69{,}5$"
      ],
      "kunci": "C",
      "bahas": "Langkah 1: Tentukan titik tengah ($x_i$): $44{,}5; 54{,}5; 64{,}5; 74{,}5; 84{,}5$.\nLangkah 2: Hitung $f_i \\times x_i$:\n- $4 \\times 44{,}5 = 178$\n- $6 \\times 54{,}5 = 327$\n- $10 \\times 64{,}5 = 645$\n- $14 \\times 74{,}5 = 1043$\n- $6 \\times 84{,}5 = 507$\nLangkah 3: $\\sum f_i x_i = 178 + 327 + 645 + 1043 + 507 = 2700$.\nLangkah 4: $N = 40 \\implies \\bar{x} = \\frac{2700}{40} = 67{,}5$.\nKesimpulan: Kunci C benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-W27",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Mean Metode Pengkodean (Coding)",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Pada tabel soal sebelumnya ($N = 40, c = 10$), jika digunakan metode pengkodean dengan rataan sementara pada kelas ke-3 ($x_s = 64{,}5$) sehingga kode kelasnya berturut-turut adalah $u_i = -2, -1, 0, 1, 2$ dengan frekuensi $4, 6, 10, 14, 6$.\n\nBerapakah nilai total dari $\\sum f_i u_i$?",
      "opsi": [],
      "kunci": "12",
      "bahas": "Langkah 1: Hitung masing-masing perkalian $f_i u_i$:\n- $4 \\times (-2) = -8$\n- $6 \\times (-1) = -6$\n- $10 \\times 0 = 0$\n- $14 \\times 1 = 14$\n- $6 \\times 2 = 12$\nLangkah 2: $\\sum f_i u_i = -8 - 6 + 0 + 14 + 12 = 12$.\nKesimpulan: Jawaban numerik pasti adalah 12.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-W28",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Rata-rata Gabungan Dua Rombel",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Nilai rata-rata tes matematika kelas XII F.1 ($25$ siswa) adalah $82$, dan kelas XII F.2 ($25$ siswa) adalah $78$. Nilai rata-rata gabungan dari kedua rombongan belajar tersebut adalah ...",
      "opsi": [
        "A. $79{,}0$",
        "B. $79{,}5$",
        "C. $80{,}5$",
        "D. $80{,}0$",
        "E. $81{,}0$"
      ],
      "kunci": "D",
      "bahas": "Langkah 1: Karena jumlah siswa kedua rombel sama banyak ($n_1 = n_2 = 25$), rata-rata gabungan merupakan rata-rata sederhana dari kedua mean.\nLangkah 2: $\\bar{x}_{gab} = \\frac{82 + 78}{2} = \\frac{160}{2} = 80{,}0$.\nKesimpulan: Kunci D benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-W29",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Rekonstruksi Frekuensi Hilang",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Distribusi frekuensi: $10-14$ ($4$), $15-19$ ($6$), $20-24$ ($k$), $25-29$ ($4$). Diketahui titik tengah kelas adalah $12, 17, 22, 27$ dan nilai mean data adalah $\\bar{x} = 19{,}5$. Tentukan kebenaran setiap pernyataan berikut:",
      "opsi": [
        "Nilai frekuensi tak diketahui $k$ adalah tepat 6.",
        "Total seluruh data pengamatan ($N$) adalah 18.",
        "Jumlah hasil kali frekuensi dan titik tengah seluruhnya adalah 390.",
        "Nilai rata-rata hitung berada tepat di dalam kelas interval ke-2 ($15-19$)."
      ],
      "kunci": "B - S - B - B",
      "bahas": "Analisis:\n1. Persamaan mean: $\\bar{x} = \\frac{4(12) + 6(17) + 22k + 4(27)}{4 + 6 + k + 4} = \\frac{48 + 102 + 22k + 108}{14 + k} = \\frac{258 + 22k}{14 + k} = 19{,}5$.\n2. $258 + 22k = 19{,}5(14 + k) = 273 + 19{,}5k$.\n3. $22k - 19{,}5k = 273 - 258 \\implies 2{,}5k = 15 \\implies k = 6$. (Baris 1: BENAR)\n4. Total data $N = 14 + k = 14 + 6 = 20$ (bukan 18). (Baris 2: SALAH)\n5. $\\sum f x = 258 + 22(6) = 258 + 132 = 390$. (Baris 3: BENAR)\n6. Mean $= 19{,}5$ berada di perbatasan kelas ke-2 ($Ta = 19{,}5$). (Baris 4: BENAR)\nKesimpulan: Kunci adalah B - S - B - B.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W30",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Transformasi Linier Nilai Mean",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Rata-rata nilai ulangan matematika 40 siswa adalah $65$. Guru melakukan konversi penskalaan standar: setiap nilai siswa dikalikan $1{,}2$ kemudian ditambah $5$. Rata-rata nilai baru kelas tersebut adalah ...",
      "opsi": [
        "A. $75$",
        "B. $78$",
        "C. $80$",
        "D. $82$",
        "E. $83$"
      ],
      "kunci": "E",
      "bahas": "Langkah 1: Sifat transformasi linier mean: jika $y_i = a x_i + b$, maka $\\bar{y} = a \\bar{x} + b$.\nLangkah 2: Di sini $a = 1{,}2$ dan $b = 5$.\nLangkah 3: $\\bar{y} = 1{,}2(65) + 5 = 78 + 5 = 83$.\nKesimpulan: Kunci E benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-W31",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Analisis Rataan Sementara Emisi Karbon",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Data emisi karbon industri (ton): $10-19$ ($6$), $20-29$ ($10$), $30-39$ ($14$), $40-49$ ($10$). Titik tengah kelas berturut-turut $14{,}5; 24{,}5; 34{,}5; 44{,}5$. Jika ditetapkan rataan sementara $x_s = 34{,}5$, centang SEMUA pernyataan yang BENAR!",
      "opsi": [
        "A. Deviasi titik tengah ($d_i = x_i - x_s$) untuk kelas pertama adalah $-20$.",
        "B. Jumlah seluruh frekuensi ($N$) adalah 40 industri.",
        "C. Nilai total deviasi berbobot $\\sum f_i d_i$ bernilai positif.",
        "D. Nilai rata-rata hitung asli (mean) emisi karbon adalah $29{,}5\\text{ ton}$.",
        "E. Karena nilai rataan sementara diambil $34{,}5$, maka mean pasti lebih besar dari $34{,}5$."
      ],
      "kunci": "A, B, D",
      "bahas": "Evaluasi:\n- Deviasi $d_i = [-20, -10, 0, 10]$. Kelas 1: $14{,}5 - 34{,}5 = -20$. (Opsi A: BENAR)\n- $N = 6 + 10 + 14 + 10 = 40$. (Opsi B: BENAR)\n- $\\sum f_i d_i = 6(-20) + 10(-10) + 14(0) + 10(10) = -120 - 100 + 0 + 100 = -120$ (negatif). (Opsi C: SALAH)\n- $\\bar{x} = 34{,}5 + \\frac{-120}{40} = 34{,}5 - 3 = 29{,}5\\text{ ton}$. (Opsi D: BENAR)\n- Mean $29{,}5 < 34{,}5$. (Opsi E: SALAH)\nKesimpulan: Opsi A, B, dan D benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W32",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Efektivitas Metode Coding",
      "tipe": "Kausatif Sebab-Akibat",
      "tanya": "Pernyataan: Perhitungan rata-rata data berkelompok dengan metode pengkodean ($u_i = \\frac{x_i - x_s}{c}$) selalu menghasilkan nilai mean yang identik dengan metode titik tengah konvensional ($\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}$).\nSEBAB\nAlasan: Rumus metode pengkodean diturunkan secara aljabar eksak dari sifat distributif penjumlahan rata-rata tertimbang.",
      "opsi": [
        "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab-akibat.",
        "B. Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab-akibat.",
        "C. Pernyataan benar dan alasan salah.",
        "D. Pernyataan salah dan alasan benar.",
        "E. Pernyataan dan alasan keduanya salah."
      ],
      "kunci": "A",
      "bahas": "Analisis:\n1. Pernyataan: BENAR. Nilai mean dari kedua metode selalu sama persis secara matematis.\n2. Alasan: BENAR. Formula $\\bar{x} = x_s + c \\left(\\frac{\\sum f_i u_i}{\\sum f_i}\\right)$ merupakan bentuk aljabar ekuivalen dari $\\frac{\\sum f_i x_i}{\\sum f_i}$.\n3. Hubungan: Penurunan aljabar yang sah menjadi penyebab mengapa hasil akhirnya selalu bernilai identik.\nKesimpulan: Kunci A benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W33",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Rata-rata Tiga Kelompok",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Tiga kelompok riset sains beranggotakan $10, 15,$ dan $25$ siswa memiliki nilai rata-rata berturut-turut $70, 80,$ dan $90$. Nilai rata-rata gabungan seluruh 50 siswa tersebut adalah ...",
      "opsi": [
        "A. $83$",
        "B. $80$",
        "C. $82$",
        "D. $85$",
        "E. $84$"
      ],
      "kunci": "A",
      "bahas": "Langkah 1: Hitung total nilai masing-masing kelompok:\n- Kelompok 1: $10 \\times 70 = 700$\n- Kelompok 2: $15 \\times 80 = 1200$\n- Kelompok 3: $25 \\times 90 = 2250$\nLangkah 2: Total nilai $= 700 + 1200 + 2250 = 4150$.\nLangkah 3: Total siswa $= 10 + 15 + 25 = 50$.\nLangkah 4: $\\bar{x}_{gab} = \\frac{4150}{50} = 83$.\nKesimpulan: Kunci A benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W34",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Rekonstruksi Siswa Baru Masuk",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Rata-rata nilai ulangan harian 29 siswa adalah $75$. Jika nilai seorang siswa pindahan yang baru masuk digabungkan, nilai rata-rata kelas naik menjadi $75{,}5$.\n\nBerapakah nilai ulangan siswa baru tersebut?",
      "opsi": [],
      "kunci": "90",
      "bahas": "Langkah 1: Total nilai awal 29 siswa $= 29 \\times 75 = 2175$.\nLangkah 2: Setelah 1 siswa masuk, banyak siswa $= 30$ orang dengan rata-rata $75{,}5$.\nLangkah 3: Total nilai baru $= 30 \\times 75{,}5 = 2265$.\nLangkah 4: Nilai siswa baru $= 2265 - 2175 = 90$.\nKesimpulan: Jawaban numerik pasti adalah 90.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W35",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Koreksi Salah Catat Data",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Pada pengukuran 30 sampel, seorang asisten salah mencatat nilai suatu sampel: terbaca $55$, padahal nilai sebenarnya adalah $85$. Jika rata-rata awal sebelum dikoreksi adalah $60$, maka rata-rata yang benar setelah dikoreksi adalah ...",
      "opsi": [
        "A. $60{,}5$",
        "B. $61{,}0$",
        "C. $61{,}5$",
        "D. $62{,}0$",
        "E. $63{,}0$"
      ],
      "kunci": "B",
      "bahas": "Langkah 1: Selisih data $= 85 - 55 = +30$.\nLangkah 2: Efek penambahan terhadap rata-rata $= \\frac{+30}{30} = +1{,}0$.\nLangkah 3: Mean terkoreksi $= 60 + 1{,}0 = 61{,}0$.\nKesimpulan: Kunci B benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W36",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Rataan Sementara Data Simetris",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Diberikan tabel tinggi bibit mangrove: $11-15\\text{ cm}$ ($4$), $16-20\\text{ cm}$ ($8$), $21-25\\text{ cm}$ ($14$), $26-30\\text{ cm}$ ($8$), $31-35\\text{ cm}$ ($4$). Titik tengah kelas berturut-turut $13, 18, 23, 28, 33$. Analisis sifat rataan data simetris ini:",
      "opsi": [
        "Jika dipilih rataan sementara $x_s = 23$, maka jumlah deviasi berbobot $\\sum f_i d_i$ bernilai 40.",
        "Karena distribusi frekuensi simetris sempurna terhadap kelas tengah ($21-25$), maka nilai mean data adalah tepat 23 cm.",
        "Jika seluruh frekuensi dikalikan dua, nilai mean data akan bertambah menjadi 46 cm.",
        "Jika setiap bibit bertumbuh 5 cm, maka rata-rata baru menjadi 28 cm."
      ],
      "kunci": "S - B - S - B",
      "bahas": "Analisis:\n1. Baris 1: Karena simetris terhadap $23$, deviasi negatif dan positif saling menghilangkan: $\\sum f_i d_i = 4(-10) + 8(-5) + 14(0) + 8(5) + 4(10) = 0$ (bukan 40). (SALAH)\n2. Baris 2: Karena $\\sum f_i d_i = 0$, $\\bar{x} = x_s = 23\\text{ cm}$. (BENAR)\n3. Baris 3: Mengalikan frekuensi dengan konstanta tidak mengubah bobot proporsional, mean tetap $23\\text{ cm}$ (bukan 46). (SALAH)\n4. Baris 4: Menambah setiap nilai dengan $5$ menaikkan mean sebesar $5$: $23 + 5 = 28\\text{ cm}$. (BENAR)\nKesimpulan: Kunci adalah S - B - S - B.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W37",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Pembuktian Sifat Deviasi Rataan",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Untuk setiap kumpulan data kuantitatif dengan rata-rata hitung $\\bar{x}$, jumlah seluruh deviasi datum terhadap mean-nya, yaitu $\\sum_{i=1}^n (x_i - \\bar{x})$, selalu bernilai ...",
      "opsi": [
        "A. Lebih besar dari nol",
        "B. Tergantung nilai varians",
        "C. Tepat sama dengan nol",
        "D. Sama dengan ukuran sampel $n$",
        "E. Sama dengan nilai median"
      ],
      "kunci": "C",
      "bahas": "Langkah 1: $\\sum_{i=1}^n (x_i - \\bar{x}) = \\sum x_i - \\sum \\bar{x}$.\nLangkah 2: Karena $\\sum x_i = n \\bar{x}$ dan $\\sum \\bar{x} = n \\bar{x}$, maka:\nLangkah 3: $\\sum (x_i - \\bar{x}) = n \\bar{x} - n \\bar{x} = 0$.\nKesimpulan: Kunci C benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-W38",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Rasio Frekuensi dari Rata-rata Gabungan",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Rata-rata nilai matematika siswa putra adalah $74$, dan siswa putri adalah $84$. Rata-rata gabungan seluruh siswa di kelas tersebut adalah $80$. Centang SEMUA pernyataan yang BENAR!",
      "opsi": [
        "A. Jumlah siswa putra lebih banyak daripada jumlah siswa putri.",
        "B. Perbandingan banyak siswa putra dan siswa putri adalah $2 : 3$.",
        "C. Persentase siswa putra di kelas tersebut adalah $50\\%$.",
        "D. Persentase siswa putri di kelas tersebut adalah $60\\%$.",
        "E. Jika jumlah siswa putri 20 orang, maka jumlah siswa putra adalah 15 orang."
      ],
      "kunci": "B, D",
      "bahas": "Evaluasi:\n- Rumus gabungan: $74 n_a + 84 n_i = 80 (n_a + n_i) \\implies 84 n_i - 80 n_i = 80 n_a - 74 n_a \\implies 4 n_i = 6 n_a \\implies \\frac{n_a}{n_i} = \\frac{4}{6} = \\frac{2}{3}$.\n- Jadi rasio putra : putri $= 2 : 3$. Siswa putri lebih banyak. (Opsi A salah, B BENAR)\n- Persentase putri $= \\frac{3}{2+3} \\times 100\\% = 60\\%$. (Opsi C salah, D BENAR)\n- Jika putri 20, putra $= \\frac{2}{3} \\times 20 = 13{,}3$ (tidak bulat). (Opsi E salah)\nKesimpulan: Opsi B dan D benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W39",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Rata-rata Datum Dikeluarkan",
      "tipe": "Kausatif Sebab-Akibat",
      "tanya": "Pernyataan: Nilai rata-rata dari 5 datum adalah 20. Jika datum terbesar bernilai 32 dikeluarkan, maka rata-rata dari 4 datum yang tersisa menurun menjadi 17.\nSEBAB\nAlasan: Mengeluarkan datum yang nilainya lebih besar daripada rata-rata kelompok akan selalu menurunkan nilai rata-rata dari datum yang tersisa.",
      "opsi": [
        "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab-akibat.",
        "B. Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab-akibat.",
        "C. Pernyataan benar dan alasan salah.",
        "D. Pernyataan salah dan alasan benar.",
        "E. Pernyataan dan alasan keduanya salah."
      ],
      "kunci": "A",
      "bahas": "Analisis:\n1. Pernyataan: Total awal $= 5 \\times 20 = 100$. Setelah 32 dikeluarkan, total $= 100 - 32 = 68$. Mean baru $= 68 / 4 = 17$. (BENAR)\n2. Alasan: Jika $x_{keluar} > \\bar{x}$, maka $\\bar{x}_{baru} < \\bar{x}$ (selalu menurunkan rata-rata). (BENAR)\n3. Hubungan: Alasan menerangkan prinsip matematis universal mengapa rata-rata datum tersisa menurun menjadi 17. (BENAR & KAUSAL)\nKesimpulan: Kunci A benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W40",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Efek Pengurangan dan Pembagian Mean",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Rata-rata sekelompok data awal adalah $\\bar{x} = 50$. Jika setiap data dikurangi $10$, kemudian hasilnya dibagi $2$, maka nilai rata-rata kelompok data yang baru adalah ...",
      "opsi": [
        "A. $15$",
        "B. $30$",
        "C. $25$",
        "D. $20$",
        "E. $40$"
      ],
      "kunci": "D",
      "bahas": "Langkah 1: Transformasi setiap nilai: $y_i = \\frac{x_i - 10}{2}$.\nLangkah 2: Sifat mean: $\\bar{y} = \\frac{\\bar{x} - 10}{2}$.\nLangkah 3: $\\bar{y} = \\frac{50 - 10}{2} = \\frac{40}{2} = 20$.\nKesimpulan: Kunci D benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-W41",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Rata-rata Kadar Hemoglobin Pasien",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Data kadar hemoglobin ($40$ pasien): $10-12$ ($5$), $13-15$ ($15$), $16-18$ ($10$), $19-21$ ($10$). Titik tengah kelas berturut-turut $11, 14, 17, 20$. Evaluasi kebenaran pernyataan-pernyataan berikut:",
      "opsi": [
        "Jumlah hasil kali $f_i x_i$ seluruhnya adalah 635.",
        "Rata-rata kadar hemoglobin pasien adalah 15,875 g/dL.",
        "Kelas yang memuat nilai rata-rata adalah kelas pertama ($10-12$).",
        "Jika dipilih rataan sementara $x_s = 14$, nilai total deviasi $\\sum f_i d_i$ bernilai negatif."
      ],
      "kunci": "B - B - S - S",
      "bahas": "Analisis:\n1. $\\sum f x = 5(11) + 15(14) + 10(17) + 10(20) = 55 + 210 + 170 + 200 = 635$. (Baris 1: BENAR)\n2. Mean $= 635 / 40 = 15{,}875\\text{ g/dL}$. (Baris 2: BENAR)\n3. Nilai $15{,}875$ berada di kelas ke-3 ($16-18$), bukan kelas pertama. (Baris 3: SALAH)\n4. Deviasi terhadap $14$: $5(-3) + 15(0) + 10(3) + 10(6) = -15 + 0 + 30 + 60 = +75$ (positif, bukan negatif). (Baris 4: SALAH)\nKesimpulan: Kunci adalah B - B - S - S.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W42",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Deviasi Rataan Sementara Hemoglobin",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Pada data hemoglobin di atas ($N = 40$), jika digunakan rataan sementara $x_s = 14$ dengan deviasi titik tengah $d_i = x_i - x_s$, berapakah nilai dari $\\sum f_i d_i$?",
      "opsi": [],
      "kunci": "75",
      "bahas": "Langkah 1: Hitung $d_i = x_i - 14$:\n- Kelas 1: $11 - 14 = -3$\n- Kelas 2: $14 - 14 = 0$\n- Kelas 3: $17 - 14 = 3$\n- Kelas 4: $20 - 14 = 6$\nLangkah 2: $\\sum f_i d_i = 5(-3) + 15(0) + 10(3) + 10(6) = -15 + 0 + 30 + 60 = 75$.\nKesimpulan: Jawaban numerik pasti adalah 75.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W43",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Rata-rata Gabungan dengan Proporsi",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Rata-rata ujian matematika kelas A adalah $85$ dan kelas B adalah $75$. Jika jumlah siswa kelas A adalah $40\\%$ dari seluruh siswa gabungan, maka nilai rata-rata gabungan kedua kelas adalah ...",
      "opsi": [
        "A. $77$",
        "B. $78$",
        "C. $81$",
        "D. $80$",
        "E. $79$"
      ],
      "kunci": "E",
      "bahas": "Langkah 1: Proporsi siswa: $w_A = 0{,}4$ dan $w_B = 0{,}6$.\nLangkah 2: $\\bar{x}_{gab} = 0{,}4(85) + 0{,}6(75)$.\nLangkah 3: $0{,}4(85) = 34$ dan $0{,}6(75) = 45$.\nLangkah 4: $\\bar{x}_{gab} = 34 + 45 = 79$.\nKesimpulan: Kunci E benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W44",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Penambahan Siswa & Evaluasi Nilai",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Nilai rata-rata ulangan 9 siswa adalah $78$. Andi mengikuti tes susulan dan nilainya digabungkan sehingga nilai rata-rata 10 siswa menjadi $80$. Centang SEMUA pernyataan yang BENAR!",
      "opsi": [
        "A. Jumlah total nilai 9 siswa sebelum Andi bergabung adalah 702.",
        "B. Nilai ulangan Andi adalah 92.",
        "C. Nilai ulangan Andi adalah 98.",
        "D. Jumlah total nilai 10 siswa setelah Andi bergabung adalah 800.",
        "E. Nilai Andi lebih rendah daripada rata-rata awal."
      ],
      "kunci": "A, C, D",
      "bahas": "Evaluasi:\n- Total 9 siswa $= 9 \\times 78 = 702$. (Opsi A: BENAR)\n- Total 10 siswa $= 10 \\times 80 = 800$. (Opsi D: BENAR)\n- Nilai Andi $= 800 - 702 = 98$. (Opsi C: BENAR, Opsi B: SALAH)\n- Nilai Andi ($98$) jauh lebih tinggi dari $78$. (Opsi E: SALAH)\nKesimpulan: Opsi A, C, dan D benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-W45",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Dua Data Ekstrem Dikeluarkan",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Rata-rata tinggi badan 10 pemain basket adalah $185\\text{ cm}$. Jika pemain tertinggi ($198\\text{ cm}$) dan pemain terpendek ($172\\text{ cm}$) dikeluarkan dari skuad, maka rata-rata tinggi badan 8 pemain yang tersisa adalah ...",
      "opsi": [
        "A. $185\\text{ cm}$",
        "B. $184\\text{ cm}$",
        "C. $186\\text{ cm}$",
        "D. $183{,}5\\text{ cm}$",
        "E. $185{,}5\\text{ cm}$"
      ],
      "kunci": "A",
      "bahas": "Langkah 1: Total tinggi 10 pemain $= 10 \\times 185 = 1850\\text{ cm}$.\nLangkah 2: Jumlah tinggi 2 pemain yang dikeluarkan $= 198 + 172 = 370\\text{ cm}$.\nLangkah 3: Rata-rata 2 pemain tersebut $= 370 / 2 = 185\\text{ cm}$ (sama persis dengan mean awal!).\nLangkah 4: Total sisa $= 1850 - 370 = 1480\\text{ cm}$. Rata-rata 8 pemain $= 1480 / 8 = 185\\text{ cm}$.\nKesimpulan: Kunci A benar.",
      "level": "Level 3 (HOTS)"
    },
    {
      "id": "WR-W46",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Rata-rata Kuis Statistika",
      "tipe": "Kausatif Sebab-Akibat",
      "tanya": "Pernyataan: Pada data berkelompok dengan interval teratur, nilai rata-rata hitung (mean) selalu berada di antara batas bawah kelas pertama dan batas atas kelas terakhir.\nSEBAB\nAlasan: Rata-rata hitung merupakan ukuran pemusatan data yang dipengaruhi oleh setiap nilai datum dan frekuensi bobotnya.",
      "opsi": [
        "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab-akibat.",
        "B. Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab-akibat.",
        "C. Pernyataan benar dan alasan salah.",
        "D. Pernyataan salah dan alasan benar.",
        "E. Pernyataan dan alasan keduanya salah."
      ],
      "kunci": "B",
      "bahas": "Analisis:\n1. Pernyataan: BENAR. Secara matematis, $\\min(x_i) \\le \\bar{x} \\le \\max(x_i)$, sehingga mean selalu terletak di dalam bentang interval data.\n2. Alasan: BENAR. Mean adalah ukuran pemusatan yang memperhitungkan seluruh nilai dan frekuensi.\n3. Hubungan: Keduanya benar, namun alasan adalah definisi umum sifat mean, bukan bukti khusus keterikatan batas interval.\nKesimpulan: Kunci B benar.",
      "level": "Level 3 (HOTS)"
    },
    {
      "id": "WR-W47",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Coding Rataan Kuis Berkelompok",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Data nilai kuis ($N = 40$): $60-64$ ($3$), $65-69$ ($7$), $70-74$ ($10$), $75-79$ ($12$), $80-84$ ($8$). Titik tengah: $62, 67, 72, 77, 82$. Ditetapkan $x_s = 72$ dengan panjang kelas $c = 5$. Evaluasi pernyataan berikut:",
      "opsi": [
        "Kode kelas berturut-turut adalah $u_i = -2, -1, 0, 1, 2$.",
        "Total hasil kali kode dan frekuensi $\\sum f_i u_i$ bernilai 25.",
        "Nilai rata-rata hitung data kuis tersebut adalah 73,875.",
        "Jika rataan sementara diganti menjadi $x_s = 77$, nilai akhir rata-rata hitung akan berubah."
      ],
      "kunci": "B - S - B - S",
      "bahas": "Analisis:\n1. Kode kelas: $u_i = (x_i - 72)/5 = [-2, -1, 0, 1, 2]$. (Baris 1: BENAR)\n2. $\\sum f_i u_i = 3(-2) + 7(-1) + 10(0) + 12(1) + 8(2) = -6 - 7 + 0 + 12 + 16 = 15$ (bukan 25). (Baris 2: SALAH)\n3. $\\bar{x} = 72 + 5 \\left(\\frac{15}{40}\\right) = 72 + \\frac{75}{40} = 72 + 1{,}875 = 73{,}875$. (Baris 3: BENAR)\n4. Pemilihan $x_s$ yang berbeda tidak akan mengubah nilai akhir mean. (Baris 4: SALAH)\nKesimpulan: Kunci adalah B - S - B - S.",
      "level": "Level 3 (HOTS)"
    },
    {
      "id": "WR-W48",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Rata-rata Gabungan Rombel F3 & F4",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Nilai rata-rata kelas XII F.3 ($26$ siswa) adalah $80$, dan kelas XII F.4 ($24$ siswa) adalah $75$. Nilai rata-rata gabungan kedua rombel tersebut adalah ...",
      "opsi": [
        "A. $77{,}0$",
        "B. $77{,}6$",
        "C. $78{,}2$",
        "D. $78{,}5$",
        "E. $79{,}0$"
      ],
      "kunci": "B",
      "bahas": "Langkah 1: Total nilai F.3 $= 26 \\times 80 = 2080$.\nLangkah 2: Total nilai F.4 $= 24 \\times 75 = 1800$.\nLangkah 3: Total nilai gabungan $= 2080 + 1800 = 3880$.\nLangkah 4: Total siswa $= 26 + 24 = 50$.\nLangkah 5: $\\bar{x}_{gab} = \\frac{3880}{50} = 77{,}6$.\nKesimpulan: Kunci B benar.",
      "level": "Level 3 (HOTS)"
    },
    {
      "id": "WR-W49",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Kenaikan Nilai Setelah Remedial",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Rata-rata ulangan 32 siswa adalah $65$. Setelah remedial, 2 siswa yang awalnya memperoleh nilai $40$ dan $45$ berhasil menaikkan nilainya masing-masing menjadi $70$ dan $75$. Centang SEMUA pernyataan yang BENAR!",
      "opsi": [
        "A. Total pertambahan nilai dari kedua siswa tersebut adalah 60 poin.",
        "B. Rata-rata nilai baru kelas naik sebesar 2,5 poin.",
        "C. Rata-rata nilai baru kelas menjadi 68,75.",
        "D. Total nilai seluruh kelas sekarang adalah 2.100.",
        "E. Rata-rata nilai baru kelas adalah tepat 66,875."
      ],
      "kunci": "A, E",
      "bahas": "Evaluasi:\n- Tambahan nilai siswa 1 $= 70 - 40 = 30$.\n- Tambahan nilai siswa 2 $= 75 - 45 = 30$.\n- Total pertambahan nilai $= 30 + 30 = 60$ poin. (Opsi A: BENAR)\n- Kenaikan rata-rata $= \\frac{60}{32} = 1{,}875$ poin (bukan 2,5). (Opsi B: SALAH)\n- Rata-rata baru $= 65 + 1{,}875 = 66{,}875$. (Opsi E: BENAR, C: SALAH)\n- Total nilai baru $= 32 \\times 65 + 60 = 2080 + 60 = 2140$ (bukan 2100). (Opsi D: SALAH)\nKesimpulan: Opsi A dan E benar.",
      "level": "Level 3 (HOTS)"
    },
    {
      "id": "WR-W50",
      "mapel": "Matematika Wajib",
      "materi": "P16 • Sifat Linearitas Skala Transformasi",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Rata-rata nilai awal suatu angkatan adalah $\\bar{x} = 45$. Kurikulum melakukan penyesuaian formula $y = \\frac{2x + 30}{3}$. Nilai rata-rata baru setelah penyesuaian formula tersebut adalah ...",
      "opsi": [
        "A. $38$",
        "B. $39$",
        "C. $40$",
        "D. $42$",
        "E. $45$"
      ],
      "kunci": "C",
      "bahas": "Langkah 1: Formula transformasi: $y = \\frac{2}{3}x + 10$.\nLangkah 2: Sifat rata-rata: $\\bar{y} = \\frac{2}{3}\\bar{x} + 10$.\nLangkah 3: $\\bar{y} = \\frac{2}{3}(45) + 10 = 30 + 10 = 40$.\nKesimpulan: Kunci C benar.",
      "level": "Level 3 (HOTS)"
    }
  ],
  "matmin": [
    {
      "id": "WR-M01",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Turunan Dasar Sinus & Cosinus",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Turunan pertama dari fungsi trigonometri $f(x) = 5\\sin(x) + 3\\cos(x)$ adalah ...",
      "opsi": [
        "A. $5\\sin(x) - 3\\cos(x)$",
        "B. $5\\cos(x) - 3\\sin(x)$",
        "C. $-5\\cos(x) + 3\\sin(x)$",
        "D. $5\\cos(x) + 3\\sin(x)$",
        "E. $-5\\sin(x) - 3\\cos(x)$"
      ],
      "kunci": "B",
      "bahas": "Langkah 1: Aturan dasar: $\\frac{d}{dx}[\\sin(x)] = \\cos(x)$ dan $\\frac{d}{dx}[\\cos(x)] = -\\sin(x)$.\nLangkah 2: $f'(x) = 5\\cos(x) + 3(-\\sin(x)) = 5\\cos(x) - 3\\sin(x)$.\nKesimpulan: Kunci B benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-M02",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Aturan Rantai Koefisien Sudut",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Diberikan fungsi trigonometri $g(x) = 4\\cos(3x) - 2\\sin(5x)$. Berapakah nilai dari turunan pertama pada titik $x = 0$, yaitu $g'(0)$?",
      "opsi": [],
      "kunci": "-10",
      "bahas": "Langkah 1: Aturan rantai linier:\n- $\\frac{d}{dx}[4\\cos(3x)] = 4 \\times 3(-\\sin(3x)) = -12\\sin(3x)$\n- $\\frac{d}{dx}[-2\\sin(5x)] = -2 \\times 5(\\cos(5x)) = -10\\cos(5x)$\nLangkah 2: $g'(x) = -12\\sin(3x) - 10\\cos(5x)$.\nLangkah 3: Substitusi $x = 0$:\n$g'(0) = -12\\sin(0) - 10\\cos(0) = -12(0) - 10(1) = -10$.\nKesimpulan: Jawaban numerik pasti adalah -10.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-M03",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Evaluasi Nilai Turunan di Titik Tertentu",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Jika $h(x) = 6\\sin(2x) + 4\\cos(x)$, maka nilai dari $h'\\left(\\frac{\\pi}{6}\\right)$ adalah ...",
      "opsi": [
        "A. $2$",
        "B. $3$",
        "C. $4$",
        "D. $6$",
        "E. $8$"
      ],
      "kunci": "C",
      "bahas": "Langkah 1: Turunkan fungsi $h(x)$:\n$h'(x) = 6(2\\cos(2x)) + 4(-\\sin(x)) = 12\\cos(2x) - 4\\sin(x)$.\nLangkah 2: Evaluasi pada $x = \\frac{\\pi}{6}$:\n$h'\\left(\\frac{\\pi}{6}\\right) = 12\\cos\\left(\\frac{\\pi}{3}\\right) - 4\\sin\\left(\\frac{\\pi}{6}\\right)$.\nLangkah 3: Karena $\\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$ dan $\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$, maka:\n$h'\\left(\\frac{\\pi}{6}\\right) = 12\\left(\\frac{1}{2}\\right) - 4\\left(\\frac{1}{2}\\right) = 6 - 2 = 4$.\nKesimpulan: Kunci C benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-M04",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Teorema Dasar Turunan Trigonometri",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Analisis kebenaran setiap pernyataan mengenai teorema dasar kalkulus diferensial trigonometri berikut:",
      "opsi": [
        "Turunan pertama dari fungsi tangen adalah $\\frac{d}{dx}[\\tan(x)] = \\sec^2(x)$.",
        "Turunan pertama dari fungsi sekan adalah $\\frac{d}{dx}[\\sec(x)] = \\sec(x)\\tan(x)$.",
        "Turunan pertama dari fungsi kotangen adalah $\\frac{d}{dx}[\\cot(x)] = \\csc^2(x)$.",
        "Turunan pertama dari fungsi kuadrat sinus $y = \\sin^2(x)$ setara dengan $\\sin(2x)$."
      ],
      "kunci": "B - B - S - B",
      "bahas": "Analisis Teorema:\n1. Baris 1: $\\frac{d}{dx}[\\tan(x)] = \\sec^2(x)$. (BENAR)\n2. Baris 2: $\\frac{d}{dx}[\\sec(x)] = \\sec(x)\\tan(x)$. (BENAR)\n3. Baris 3: $\\frac{d}{dx}[\\cot(x)] = -\\csc^2(x)$ (ada tanda negatif, jadi pernyataan tanpa minus adalah SALAH).\n4. Baris 4: Aturan rantai $\\frac{d}{dx}[\\sin^2(x)] = 2\\sin(x)\\cos(x) = \\sin(2x)$. (BENAR)\nKesimpulan: Kunci adalah B - B - S - B.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-M05",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Gradien Garis Singgung Trigonometri",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Gradien garis singgung kurva $y = 2\\tan(x)$ pada titik berabsis $x = \\frac{\\pi}{4}$ adalah ...",
      "opsi": [
        "A. $1$",
        "B. $2$",
        "C. $2\\sqrt{2}$",
        "D. $4$",
        "E. $8$"
      ],
      "kunci": "D",
      "bahas": "Langkah 1: Turunan pertama $y' = 2\\sec^2(x) = \\frac{2}{\\cos^2(x)}$.\nLangkah 2: Evaluasi pada $x = \\frac{\\pi}{4}$:\n$\\cos\\left(\\frac{\\pi}{4}\\right) = \\frac{1}{2}\\sqrt{2} \\implies \\cos^2\\left(\\frac{\\pi}{4}\\right) = \\frac{1}{2}$.\nLangkah 3: $m = \\frac{2}{1/2} = 4$.\nKesimpulan: Kunci D benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-M06",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Turunan Kombinasi Tangen & Cosinus",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Diberikan $f(x) = 3\\tan(x) - 4\\cos(x)$. Centang SEMUA pernyataan yang bernilai BENAR mengenai fungsi turunan $f'(x)$!",
      "opsi": [
        "A. Turunan pertama fungsi adalah $f'(x) = 3\\sec^2(x) + 4\\sin(x)$.",
        "B. Nilai dari $f'(0)$ adalah 0.",
        "C. Nilai dari $f'(0)$ adalah 3.",
        "D. Nilai dari $f'\\left(\\frac{\\pi}{6}\\right)$ adalah 4.",
        "E. Garis singgung kurva di $x = 0$ membentuk sudut tumpul terhadap sumbu-X positif."
      ],
      "kunci": "A, C",
      "bahas": "Evaluasi:\n- Turunan: $f'(x) = 3\\sec^2(x) - 4(-\\sin(x)) = 3\\sec^2(x) + 4\\sin(x)$. (Opsi A: BENAR)\n- Di $x = 0$: $f'(0) = 3(1)^2 + 4(0) = 3$. (Opsi C: BENAR, Opsi B: SALAH)\n- Di $x = \\pi/6$: $f'(\\pi/6) = 3(2/\\sqrt{3})^2 + 4(1/2) = 3(4/3) + 2 = 6$ (bukan 4). (Opsi D: SALAH)\n- Gradien di $x=0$ adalah $m = 3 > 0$, jadi sudut lancip, bukan tumpul. (Opsi E: SALAH)\nKesimpulan: Opsi A dan C benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-M07",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Aturan Rantai Sudut Majemuk",
      "tipe": "Kausatif Sebab-Akibat",
      "tanya": "Pernyataan: Turunan pertama dari fungsi $y = 2\\sin(4x - \\pi)$ adalah $y' = 8\\cos(4x - \\pi)$.\nSEBAB\nAlasan: Berdasarkan aturan rantai kalkulus diferensial, jika $y = k\\sin(u)$ dengan $u = ax + b$, maka turunan pertamanya adalah $y' = k \\cdot a \\cdot \\cos(ax + b)$.",
      "opsi": [
        "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab-akibat.",
        "B. Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab-akibat.",
        "C. Pernyataan benar dan alasan salah.",
        "D. Pernyataan salah dan alasan benar.",
        "E. Pernyataan dan alasan keduanya salah."
      ],
      "kunci": "A",
      "bahas": "Analisis:\n1. Pernyataan: BENAR. $y' = 2 \\times 4\\cos(4x - \\pi) = 8\\cos(4x - \\pi)$.\n2. Alasan: BENAR. Rumus turunan komposit linier $y = k\\sin(ax+b) \\implies y' = ka\\cos(ax+b)$.\n3. Hubungan: Alasan adalah dalil aturan rantai yang mendasari kebenaran pernyataan tersebut secara kausal.\nKesimpulan: Kunci A benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-M08",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Evaluasi Sudut Istimewa Cosinus",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Jika $f(x) = 4\\cos(2x)$, maka nilai dari $f'\\left(\\frac{\\pi}{4}\\right)$ adalah ...",
      "opsi": [
        "A. $8$",
        "B. $4$",
        "C. $0$",
        "D. $-4$",
        "E. $-8$"
      ],
      "kunci": "E",
      "bahas": "Langkah 1: $f'(x) = 4 \\times 2(-\\sin(2x)) = -8\\sin(2x)$.\nLangkah 2: Evaluasi pada $x = \\frac{\\pi}{4}$:\n$f'\\left(\\frac{\\pi}{4}\\right) = -8\\sin\\left(2 \\times \\frac{\\pi}{4}\\right) = -8\\sin\\left(\\frac{\\pi}{2}\\right)$.\nLangkah 3: Karena $\\sin\\left(\\frac{\\pi}{2}\\right) = 1$, maka $f'\\left(\\frac{\\pi}{4}\\right) = -8(1) = -8$.\nKesimpulan: Kunci E benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-M09",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Aturan Hasil Bagi Aljabar-Trigonometri",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Diberikan fungsi rasional trigonometri $f(x) = \\frac{\\sin(x)}{x}$ untuk $x \\neq 0$. Evaluasi kebenaran pernyataan-pernyataan berikut:",
      "opsi": [
        "Turunan pertama fungsi adalah $f'(x) = \\frac{\\cos(x)}{1} = \\cos(x)$.",
        "Menurut aturan pembagian $\\frac{u'v - uv'}{v^2}$, diperoleh $f'(x) = \\frac{x\\cos(x) - \\sin(x)}{x^2}$.",
        "Nilai limit fungsi di titik asal adalah $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$.",
        "Fungsi $f(x)$ tidak memiliki turunan di seluruh selang bilangan real positif $(0, \\infty)$."
      ],
      "kunci": "S - B - B - S",
      "bahas": "Analisis:\n1. Baris 1: Menurunkan pembilang dan penyebut secara terpisah adalah kesalahan fatal aturan hasil bagi. (SALAH)\n2. Baris 2: $u = \\sin x \\implies u' = \\cos x$; $v = x \\implies v' = 1$. $f'(x) = \\frac{x\\cos x - \\sin x}{x^2}$. (BENAR)\n3. Baris 3: Teorema limit dasar trigonometri $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$. (BENAR)\n4. Baris 4: Untuk $x > 0$, penyebut $x^2 \\neq 0$ sehingga fungsi diferensiabel di seluruh $(0, \\infty)$. (SALAH)\nKesimpulan: Kunci adalah S - B - B - S.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-M10",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Gradien Garis Normal Kurva Sinus",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Garis normal adalah garis yang tegak lurus dengan garis singgung di titik singgung yang sama. Berapakah gradien garis normal pada kurva $y = \\sin(x)$ di titik asal $(0, 0)$?",
      "opsi": [],
      "kunci": "-1",
      "bahas": "Langkah 1: Turunan kurva $y' = \\cos(x)$.\nLangkah 2: Gradien garis singgung di $x = 0$: $m_s = \\cos(0) = 1$.\nLangkah 3: Garis normal tegak lurus garis singgung: $m_n \\times m_s = -1 \\implies m_n = -\\frac{1}{1} = -1$.\nKesimpulan: Jawaban numerik pasti adalah -1.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-M11",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Turunan Kombinasi Sinus & Cosinus Majemuk",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Turunan pertama dari fungsi $f(x) = 2\\sin(3x) - 3\\cos(2x)$ adalah ...",
      "opsi": [
        "A. $6\\cos(3x) + 6\\sin(2x)$",
        "B. $6\\cos(3x) - 6\\sin(2x)$",
        "C. $-6\\cos(3x) + 6\\sin(2x)$",
        "D. $2\\cos(3x) + 3\\sin(2x)$",
        "E. $6\\cos(3x) - 3\\sin(2x)$"
      ],
      "kunci": "A",
      "bahas": "Langkah 1: Turunan suku pertama: $\\frac{d}{dx}[2\\sin(3x)] = 2 \\times 3\\cos(3x) = 6\\cos(3x)$.\nLangkah 2: Turunan suku kedua: $\\frac{d}{dx}[-3\\cos(2x)] = -3 \\times 2(-\\sin(2x)) = +6\\sin(2x)$.\nLangkah 3: Gabungkan: $f'(x) = 6\\cos(3x) + 6\\sin(2x)$.\nKesimpulan: Kunci A benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-M12",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Analisis Kurva Kuadrat Sinus",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Diberikan fungsi $y = \\sin^2(x)$. Centang SEMUA pernyataan yang bernilai BENAR!",
      "opsi": [
        "A. Turunan pertama fungsi adalah $y' = 2\\cos(x)$.",
        "B. Turunan pertama fungsi adalah $y' = 2\\sin(x)\\cos(x) = \\sin(2x)$.",
        "C. Nilai dari $y'\\left(\\frac{\\pi}{4}\\right)$ adalah 1.",
        "D. Nilai dari $y'(0)$ dan $y'\\left(\\frac{\\pi}{2}\\right)$ keduanya bernilai 0.",
        "E. Gradien garis singgung kurva di $x = \\frac{\\pi}{4}$ adalah 0."
      ],
      "kunci": "B, C, D",
      "bahas": "Evaluasi:\n- $y' = 2\\sin x \\cos x = \\sin(2x)$. (Opsi B: BENAR, Opsi A: SALAH)\n- Di $x = \\pi/4$: $y' = \\sin(2 \\times \\pi/4) = \\sin(\\pi/2) = 1$. (Opsi C: BENAR, Opsi E: SALAH)\n- Di $x = 0$: $\\sin(0) = 0$. Di $x = \\pi/2$: $\\sin(\\pi) = 0$. Keduanya bernilai 0. (Opsi D: BENAR)\nKesimpulan: Opsi B, C, dan D benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-M13",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Evaluasi Turunan Identitas Cosinus Ganda",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Diberikan $g(x) = \\cos^2(x) - \\sin^2(x)$. Nilai dari $g'\\left(\\frac{\\pi}{6}\\right)$ adalah ...",
      "opsi": [
        "A. $-\\sqrt{2}$",
        "B. $-\\sqrt{3}$",
        "C. $-1$",
        "D. $\\sqrt{3}$",
        "E. $2$"
      ],
      "kunci": "B",
      "bahas": "Langkah 1: Gunakan identitas sudut ganda: $g(x) = \\cos(2x)$.\nLangkah 2: Turunan pertama: $g'(x) = -2\\sin(2x)$.\nLangkah 3: Evaluasi pada $x = \\frac{\\pi}{6}$:\n$g'\\left(\\frac{\\pi}{6}\\right) = -2\\sin\\left(2 \\times \\frac{\\pi}{6}\\right) = -2\\sin\\left(\\frac{\\pi}{3}\\right)$.\nLangkah 4: Karena $\\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}\\sqrt{3}$, maka:\n$g'\\left(\\frac{\\pi}{6}\\right) = -2\\left(\\frac{1}{2}\\sqrt{3}\\right) = -\\sqrt{3}$.\nKesimpulan: Kunci B benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-M14",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Aturan Perkalian $x \\cos x$",
      "tipe": "Kausatif Sebab-Akibat",
      "tanya": "Pernyataan: Turunan pertama dari fungsi $h(x) = x\\cos(x)$ adalah $h'(x) = \\cos(x) - x\\sin(x)$.\nSEBAB\nAlasan: Turunan dari perkalian dua fungsi sembarang $f(x) = u(x) \\cdot v(x)$ selalu sama dengan hasil kali dari masing-masing turunannya, yaitu $u'(x) \\cdot v'(x)$.",
      "opsi": [
        "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab-akibat.",
        "B. Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab-akibat.",
        "C. Pernyataan benar dan alasan salah.",
        "D. Pernyataan salah dan alasan benar.",
        "E. Pernyataan dan alasan keduanya salah."
      ],
      "kunci": "C",
      "bahas": "Analisis:\n1. Pernyataan: BENAR. $u = x \\implies u' = 1$; $v = \\cos x \\implies v' = -\\sin x$. $h'(x) = 1 \\cdot \\cos x + x(-\\sin x) = \\cos x - x\\sin x$.\n2. Alasan: SALAH. Aturan hasil kali yang benar adalah $(uv)' = u'v + uv'$, BUKAN $u' \\cdot v'$.\nKesimpulan: Pernyataan benar dan alasan salah (Kunci C).",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-M15",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Kecepatan Sesaat Gerak Harmonik",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Posisi partikel dinyatakan oleh persamaan simpangan $s(t) = 4\\sin(2t) + 3\\cos(2t)$ dalam meter. Kecepatan awal partikel pada saat $t = 0$ detik adalah ...",
      "opsi": [
        "A. $4\\text{ m/s}$",
        "B. $6\\text{ m/s}$",
        "C. $8\\text{ m/s}$",
        "D. $10\\text{ m/s}$",
        "E. $14\\text{ m/s}$"
      ],
      "kunci": "C",
      "bahas": "Langkah 1: Kecepatan adalah turunan pertama posisi: $v(t) = s'(t)$.\nLangkah 2: $v(t) = 4(2\\cos(2t)) + 3(-2\\sin(2t)) = 8\\cos(2t) - 6\\sin(2t)$.\nLangkah 3: Evaluasi pada $t = 0$:\n$v(0) = 8\\cos(0) - 6\\sin(0) = 8(1) - 6(0) = 8\\text{ m/s}$.\nKesimpulan: Kunci C benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-M16",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Sifat Turunan Tangen Komposit",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Diberikan kurva $f(x) = \\tan(2x)$. Analisis kebenaran setiap pernyataan berikut:",
      "opsi": [
        "Turunan pertama kurva adalah $f'(x) = 2\\sec^2(2x)$.",
        "Gradien garis singgung kurva di titik asal $(0,0)$ adalah 0.",
        "Persamaan garis singgung di titik asal $(0,0)$ adalah $y = 2x$.",
        "Nilai dari $f'(x)$ dapat bernilai negatif pada interval domain terdefinisi."
      ],
      "kunci": "B - S - B - S",
      "bahas": "Analisis:\n1. Baris 1: $f'(x) = 2\\sec^2(2x)$. (BENAR)\n2. Baris 2: $m = f'(0) = 2\\sec^2(0) = 2(1) = 2$ (bukan 0). (SALAH)\n3. Baris 3: Melalui $(0,0)$ dengan gradien $m = 2$: $y - 0 = 2(x - 0) \\implies y = 2x$. (BENAR)\n4. Baris 4: Karena $\\sec^2(2x) \\ge 1$, nilai $f'(x) = 2\\sec^2(2x) \\ge 2$ selalu positif, tidak pernah negatif. (SALAH)\nKesimpulan: Kunci adalah B - S - B - S.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-M17",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Nilai Turunan Kombinasi di Titik Nol",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Jika $g(x) = \\sin(3x) + 2\\cos(x)$, berapakah nilai pasti dari turunan pertama pada titik $x = 0$, yaitu $g'(0)$?",
      "opsi": [],
      "kunci": "3",
      "bahas": "Langkah 1: $g'(x) = 3\\cos(3x) - 2\\sin(x)$.\nLangkah 2: Evaluasi pada $x = 0$:\n$g'(0) = 3\\cos(0) - 2\\sin(0) = 3(1) - 2(0) = 3$.\nKesimpulan: Jawaban numerik pasti adalah 3.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "WR-M18",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Evaluasi Turunan di $x = \\pi/2$",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Diberikan $h(x) = 3\\sin(x) - 2\\cos(2x)$. Nilai dari $h'\\left(\\frac{\\pi}{2}\\right)$ adalah ...",
      "opsi": [
        "A. $-3$",
        "B. $-1$",
        "C. $3$",
        "D. $0$",
        "E. $4$"
      ],
      "kunci": "D",
      "bahas": "Langkah 1: $h'(x) = 3\\cos(x) - 2(-2\\sin(2x)) = 3\\cos(x) + 4\\sin(2x)$.\nLangkah 2: Evaluasi pada $x = \\frac{\\pi}{2}$:\n$h'\\left(\\frac{\\pi}{2}\\right) = 3\\cos\\left(\\frac{\\pi}{2}\\right) + 4\\sin(\\pi)$.\nLangkah 3: Karena $\\cos\\left(\\frac{\\pi}{2}\\right) = 0$ dan $\\sin(\\pi) = 0$, maka:\n$h'\\left(\\frac{\\pi}{2}\\right) = 3(0) + 4(0) = 0$.\nKesimpulan: Kunci D benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-M19",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Turunan Identitas Sinus Ganda",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Diberikan fungsi $f(x) = \\sin(x)\\cos(x)$. Centang SEMUA pernyataan yang bernilai BENAR mengenai turunan pertamanya!",
      "opsi": [
        "A. Turunan pertama dapat dituliskan dalam bentuk $f'(x) = \\cos(2x)$.",
        "B. Nilai dari $f'(0)$ adalah 0.",
        "C. Nilai dari $f'\\left(\\frac{\\pi}{4}\\right)$ adalah 1.",
        "D. Nilai maksimum dari turunan pertama $f'(x)$ adalah 1.",
        "E. Fungsi $f'(x)$ identik dengan $\\sin^2(x) - \\cos^2(x)$."
      ],
      "kunci": "A, D",
      "bahas": "Evaluasi:\n- $f(x) = \\frac{1}{2}\\sin(2x) \\implies f'(x) = \\cos(2x) = \\cos^2(x) - \\sin^2(x)$. (Opsi A: BENAR, Opsi E: SALAH)\n- Di $x = 0$: $f'(0) = \\cos(0) = 1$ (bukan 0). (Opsi B: SALAH)\n- Di $x = \\pi/4$: $f'(\\pi/4) = \\cos(\\pi/2) = 0$ (bukan 1). (Opsi C: SALAH)\n- Nilai maksimum fungsi cosinus adalah 1. (Opsi D: BENAR)\nKesimpulan: Opsi A dan D benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "WR-M20",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Gradien Garis Singgung Cosinus",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Gradien garis singgung kurva $y = 3\\cos(x)$ pada titik berabsis $x = \\frac{\\pi}{6}$ adalah ...",
      "opsi": [
        "A. $1{,}5$",
        "B. $3$",
        "C. $-3$",
        "D. $-\\frac{3}{2}\\sqrt{3}$",
        "E. $-1{,}5$"
      ],
      "kunci": "E",
      "bahas": "Langkah 1: Turunan kurva: $y' = -3\\sin(x)$.\nLangkah 2: Evaluasi pada $x = \\frac{\\pi}{6}$:\n$m = -3\\sin\\left(\\frac{\\pi}{6}\\right) = -3\\left(\\frac{1}{2}\\right) = -1{,}5$.\nKesimpulan: Kunci E benar.",
      "level": "Level 3 (HOTS)"
    },
    {
      "id": "WR-M21",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Turunan Kombinasi Sinus & Tangen",
      "tipe": "Kausatif Sebab-Akibat",
      "tanya": "Pernyataan: Turunan pertama dari fungsi $f(x) = 4\\sin(x) - 2\\tan(x)$ pada absis $x = 0$ memiliki nilai gradien sebesar 2.\nSEBAB\nAlasan: Gradien garis singgung kurva di setiap titik pada bidang Kartesius ditentukan oleh nilai turunan pertama fungsi di titik tersebut.",
      "opsi": [
        "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab-akibat.",
        "B. Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab-akibat.",
        "C. Pernyataan benar dan alasan salah.",
        "D. Pernyataan salah dan alasan benar.",
        "E. Pernyataan dan alasan keduanya salah."
      ],
      "kunci": "B",
      "bahas": "Analisis:\n1. Pernyataan: $f'(x) = 4\\cos(x) - 2\\sec^2(x)$. Di $x=0$: $f'(0) = 4(1) - 2(1) = 2$. (BENAR)\n2. Alasan: BENAR. Definisi geometri turunan pertama adalah gradien garis singgung kurva di titik tersebut.\n3. Hubungan: Alasan menyatakan definisi umum gradien geometri, bukan kalkulasi khusus koefisien $4-2=2$.\nKesimpulan: Kunci B benar.",
      "level": "Level 3 (HOTS)"
    },
    {
      "id": "WR-M22",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Ekstremum Turunan Cosinus Koefisien Negatif",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Diberikan fungsi $y = -3\\cos(5x)$. Analisis kebenaran pernyataan-pernyataan berikut mengenai turunan pertamanya:",
      "opsi": [
        "Turunan pertama fungsi adalah $y' = 15\\sin(5x)$.",
        "Nilai turunan pertama di titik asal $x = 0$ bernilai 0.",
        "Nilai maksimum dari turunan pertama $y'$ adalah 15.",
        "Nilai dari $y'$ selalu bernilai positif untuk semua bilangan real $x$."
      ],
      "kunci": "B - B - B - S",
      "bahas": "Analisis:\n1. Baris 1: $y' = -3 \\times 5(-\\sin(5x)) = 15\\sin(5x)$. (BENAR)\n2. Baris 2: $y'(0) = 15\\sin(0) = 0$. (BENAR)\n3. Baris 3: Karena rentang nilai sinus adalah $[-1, 1]$, nilai maksimum $y'$ adalah $15(1) = 15$. (BENAR)\n4. Baris 4: Fungsi sinus periodik berosilasi antara $-15$ dan $+15$, jadi tidak selalu positif. (SALAH)\nKesimpulan: Kunci adalah B - B - B - S.",
      "level": "Level 3 (HOTS)"
    },
    {
      "id": "WR-M23",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Sifat Sudut Negatif Cosinus",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Turunan pertama dari fungsi $g(x) = \\cos(-3x)$ adalah ...",
      "opsi": [
        "A. $-3\\sin(3x)$",
        "B. $3\\sin(3x)$",
        "C. $-3\\sin(-3x)$",
        "D. $3\\cos(3x)$",
        "E. $-3\\cos(-3x)$"
      ],
      "kunci": "A",
      "bahas": "Langkah 1: Gunakan sifat fungsi genap cosinus: $\\cos(-\\theta) = \\cos(\\theta)$, sehingga $g(x) = \\cos(3x)$.\nLangkah 2: Turunan dari $\\cos(3x)$ adalah $g'(x) = -3\\sin(3x)$.\nLangkah 3: Alternatif via aturan rantai: $g'(x) = -\\sin(-3x) \\cdot (-3) = 3\\sin(-3x) = -3\\sin(3x)$ (hasil identik).\nKesimpulan: Kunci A benar.",
      "level": "Level 3 (HOTS)"
    },
    {
      "id": "WR-M24",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Aturan Perkalian Polinomial Kubik-Cosinus",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Diberikan $f(x) = x^3 \\cos(x)$. Centang SEMUA pernyataan yang bernilai BENAR mengenai turunan pertamanya!",
      "opsi": [
        "A. Turunan pertamanya adalah $f'(x) = 3x^2 \\cos(x) + x^3 \\sin(x)$.",
        "B. Turunan pertamanya adalah $f'(x) = 3x^2 \\cos(x) - x^3 \\sin(x)$.",
        "C. Nilai dari $f'(0)$ adalah 3.",
        "D. Garis singgung kurva di titik asal $(0,0)$ memiliki gradien $m = 1$.",
        "E. Garis singgung kurva di titik asal $(0,0)$ sejajar dengan sumbu-X (horizontal)."
      ],
      "kunci": "B, E",
      "bahas": "Evaluasi:\n- Aturan hasil kali: $u = x^3 \\implies u' = 3x^2$; $v = \\cos x \\implies v' = -\\sin x$.\n- $f'(x) = 3x^2\\cos x - x^3\\sin x$. (Opsi B: BENAR, Opsi A: SALAH)\n- Di $x = 0$: $f'(0) = 3(0)^2\\cos(0) - 0^3\\sin(0) = 0$. (Opsi C: SALAH, Opsi D: SALAH)\n- Karena gradien di $(0,0)$ adalah $m = 0$, garis singgung berbentuk horizontal (sejajar sumbu-X). (Opsi E: BENAR)\nKesimpulan: Opsi B dan E benar.",
      "level": "Level 3 (HOTS)"
    },
    {
      "id": "WR-M25",
      "mapel": "Additional Mathematics",
      "materi": "P17 • Gradien Kurva Tangen Komposit di Asal",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Gradien garis singgung kurva $y = \\tan(2x)$ di titik asal $(0, 0)$ adalah ...",
      "opsi": [
        "A. $1$",
        "B. $2$",
        "C. $4$",
        "D. $0$",
        "E. Tak terdefinisi"
      ],
      "kunci": "B",
      "bahas": "Langkah 1: Turunan kurva $y' = 2\\sec^2(2x) = \\frac{2}{\\cos^2(2x)}$.\nLangkah 2: Evaluasi pada $x = 0$:\n$m = \\frac{2}{\\cos^2(0)} = \\frac{2}{1^2} = 2$.\nKesimpulan: Kunci B benar.",
      "level": "Level 3 (HOTS)"
    }
  ]
},
    '2026-W42': {
  "matwa": [
    {
      "id": "W42-W01",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Interpolasi Median Data Berkelompok",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Diberikan tabel distribusi frekuensi waktu tunggu pelayanan logistik pelabuhan (menit):\nInterval: $10-19$ (4), $20-29$ (8), $30-39$ (14), $40-49$ (10), $50-59$ (4).\nTotal sampel $N = 40$. Nilai median ($Me$) dari data tersebut adalah ...",
      "opsi": [
        "A. $35{,}21\\text{ menit}$",
        "B. $34{,}50\\text{ menit}$",
        "C. $33{,}07\\text{ menit}$",
        "D. $36{,}14\\text{ menit}$",
        "E. $32{,}85\\text{ menit}$"
      ],
      "kunci": "A",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-W02",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Modus Data Berkelompok via Selisih Frekuensi",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Sebuah tabel distribusi frekuensi memiliki kelas modus pada interval $50 - 59$ dengan frekuensi 18. Frekuensi kelas sebelum kelas modus adalah 12, dan frekuensi kelas setelah kelas modus adalah 14. Jika panjang kelas adalah $c = 10$, tentukan nilai Modus ($Mo$) data tersebut! (Ketik angka desimal dengan koma atau titik, contoh: 56 atau 55.5)",
      "opsi": [],
      "kunci": "55.5",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-W03",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Sifat Pemusatan Data Positively Skewed",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Analisis kebenaran setiap pernyataan berikut terkait hubungan nilai Mean ($\\bar{x}$), Median ($Me$), dan Modus ($Mo$) pada data berdistribusi miring ke kanan (positively skewed):",
      "opsi": [
        "Pada kurva condong ke kanan (positively skewed), berlaku relasi urutan $\\bar{x} > Me > Mo$.",
        "Puncak tertinggi poligon frekuensi selalu menunjukkan absis yang bernilai Median.",
        "Jika data berdistribusi simetris sempurna (kurva lonceng Gauss), maka $\\bar{x} = Me = Mo$.",
        "Nilai modus sangat dipengaruhi oleh keberadaan nilai ekstrem (outlier) di ujung kanan."
      ],
      "kunci": "B - S - B - S",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W04",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Rekonstruksi Frekuensi Hilang dari Median",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Diberikan tabel distribusi frekuensi dengan total $N = 60$ responden:\n$20-29$ (8), $30-39$ ($p$), $40-49$ (18), $50-59$ ($q$), $60-69$ (6).\nDiketahui nilai Median data adalah $Me = 43{,}5$. Jika panjang interval kelas $c = 10$, maka nilai frekuensi $p$ adalah ...",
      "opsi": [
        "A. $12$",
        "B. $15$",
        "C. $14$",
        "D. $16$",
        "E. $18$"
      ],
      "kunci": "B",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 3 (HOTS)"
    },
    {
      "id": "W42-W05",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Evaluasi Modus Histogram Bimodal",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Sebuah histogram menampilkan 6 batang frekuensi. Batang kedua ($20-29$) dan batang kelima ($50-59$) memiliki tinggi puncak frekuensi yang sama yaitu 25, sedangkan batang lainnya memiliki frekuensi kurang dari 15. Centang SEMUA pernyataan yang BENAR!",
      "opsi": [
        "A. Data tersebut merupakan data berkarakteristik Bimodal (memiliki dua modus).",
        "B. Median data tersebut dipastikan selalu sama dengan rata-rata kedua nilai modusnya.",
        "C. Nilai modus pertama berada pada rentang interval $20 - 29$.",
        "D. Nilai modus kedua berada pada rentang interval $50 - 59$.",
        "E. Rumus interpolasi modus baku hanya dapat diterapkan jika data strictly unimodal."
      ],
      "kunci": "A, C, D",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W06",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Kausatif Hubungan Median & Ogive",
      "tipe": "Kausatif Sebab-Akibat",
      "tanya": "Pernyataan: Absis titik potong kurva Ogive Kurang Dari (Ogive Positif) dan Ogive Lebih Dari (Ogive Negatif) selalu bertepatan dengan nilai Median data.\n\nSEBAB\n\nAlasan: Pada titik perpotongan kedua kurva ogive, frekuensi kumulatif data bernilai tepat separuh dari total observasi ($50\\% N$).",
      "opsi": [
        "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat.",
        "B. Pernyataan benar, alasan benar, tetapi keduanya TIDAK menunjukkan hubungan sebab akibat.",
        "C. Pernyataan benar dan alasan salah.",
        "D. Pernyataan salah dan alasan benar.",
        "E. Pernyataan dan alasan keduanya salah."
      ],
      "kunci": "A",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W07",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Titik Tengah Kelas Median",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Data hasil uji konsumsi energi kendaraan listrik (kWh/100 km):\n$12-14$ (6), $15-17$ (12), $18-20$ (18), $21-23$ (10), $24-26$ (4).\nTitik tengah ($x_i$) dari kelas yang memuat nilai Median adalah ...",
      "opsi": [
        "A. $16$",
        "B. $18$",
        "C. $19$",
        "D. $20$",
        "E. $22$"
      ],
      "kunci": "C",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-W08",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Pengaruh Transformasi Linier terhadap Modus",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Suatu data kelompok memiliki modus awal $Mo = 64$. Jika setiap datum dalam kumpulan data tersebut diubah dengan rumus $y_i = 1{,}5 x_i - 6$, berapakah nilai modus data yang baru ($Mo_{\\text{baru}}$)? (Ketik angka pasti)",
      "opsi": [],
      "kunci": "90",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W09",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Modus Data Interval Desimal",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Data hasil panen padi organik (ton/hektar):\n$4{,}0 - 4{,}9$ (5), $5{,}0 - 5{,}9$ (15), $6{,}0 - 6{,}9$ (20), $7{,}0 - 7{,}9$ (10).\nNilai Modus data panen tersebut adalah ...",
      "opsi": [
        "A. $6{,}50\\text{ ton}$",
        "B. $6{,}43\\text{ ton}$",
        "C. $6{,}15\\text{ ton}$",
        "D. $6{,}28\\text{ ton}$",
        "E. $6{,}35\\text{ ton}$"
      ],
      "kunci": "D",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W10",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Perbandingan Sensitivitas Median vs Mean",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Diberikan data pendapatan bulanan warga desa terpencil di mana terdapat 1 pengusaha tambang dengan penghasilan Rp 500.000.000/bulan di antara 99 warga berpenghasilan rata-rata Rp 3.000.000/bulan. Evaluasi kebenaran analisis statistika berikut:",
      "opsi": [
        "Nilai Rata-rata hitung (Mean) pendapatan akan melonjak tinggi dan tidak mewakili kondisi mayoritas warga.",
        "Nilai Median pendapatan akan tetap stabil mendekati Rp 3.000.000 dan lebih representatif.",
        "Nilai Modus akan berubah menjadi Rp 500.000.000 karena merupakan nilai tertinggi.",
        "Dalam analisis ekonomi ketimpangan sosial, Median lebih dianjurkan daripada Mean."
      ],
      "kunci": "B - B - S - B",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W11",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Modus dengan Selisih Frekuensi Sama",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Sebuah tabel distribusi memiliki kelas modus pada interval $70 - 79$ dengan frekuensi 24. Jika frekuensi kelas sebelum dan sesudah kelas modus bernilai sama persis yaitu 16, maka nilai modus data tersebut adalah ...",
      "opsi": [
        "A. $73{,}5$",
        "B. $74{,}0$",
        "C. $75{,}5$",
        "D. $75{,}0$",
        "E. $74{,}5$"
      ],
      "kunci": "E",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-W12",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Modus Berkelompok Ujung Tabel",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Pada survei usia balita (bulan), interval $0 - 11$ memiliki frekuensi tertinggi sebesar 30. Interval kedua ($12 - 23$) memiliki frekuensi 18. Karena interval $0 - 11$ berada di batas paling awal, frekuensi kelas sebelumnya dianggap $0$. Tentukan nilai modus usia balita tersebut! (Tepi bawah $Tb = -0{,}5$, panjang kelas $c = 12$. Ketik angka desimal pembulatan 1 desimal, misal: 7.0)",
      "opsi": [],
      "kunci": "7.0",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 3 (HOTS)"
    },
    {
      "id": "W42-W13",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Analisis Perubahan Frekuensi terhadap Median",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Pada suatu tabel distribusi data berkelompok, jika frekuensi pada kelas tertinggi (ujung kanan) bertambah sebanyak 10 datum, sedangkan frekuensi kelas lainnya tetap, bagaimanakah posisi dan nilai Median?",
      "opsi": [
        "A. Posisi datum median bergeser ke kanan ($N/2$ membesar), sehingga nilai median cenderung meningkat.",
        "B. Nilai Median dipastikan tetap berada di angka yang sama persis.",
        "C. Nilai Median pasti bergeser ke kiri (berkurang nilainya).",
        "D. Modus data otomatis bergeser mengikuti kelas tertinggi tersebut.",
        "E. Panjang kelas interval ($c$) otomatis membesar."
      ],
      "kunci": "A",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W14",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Validasi Rumus Median Kontinu",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Perhatikan rumus interpolasi median: $Me = Tb + \\left(\\frac{\\frac{n}{2} - F_k}{f_m}\\right) \\times c$. Centang SEMUA pernyataan yang bernilai BENAR!",
      "opsi": [
        "A. $Tb$ merepresentasikan batas bawah nyata dari kelas yang memuat datum ke-$N/2$.",
        "B. $F_k$ adalah frekuensi kumulatif seluruh kelas SEBELUM kelas median berada.",
        "C. $f_m$ adalah frekuensi absolut dari kelas median itu sendiri.",
        "D. $c$ adalah panjang rentang interval kelas median ($c = Ta - Tb$).",
        "E. Median data berkelompok selalu bernilai bilangan bulat walaupun tepi bawahnya berupa desimal."
      ],
      "kunci": "A, B, C, D",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W15",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Hubungan Empiris Karl Pearson",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Pada distribusi data agak miring (moderately skewed), Karl Pearson merumuskan hubungan empiris: $\\text{Mean} - \\text{Modus} \\approx 3(\\text{Mean} - \\text{Median})$. Jika diketahui $\\text{Mean} = 75$ dan $\\text{Median} = 72$, perkiraan nilai Modus data tersebut adalah ...",
      "opsi": [
        "A. $63$",
        "B. $66$",
        "C. $69$",
        "D. $71$",
        "E. $60$"
      ],
      "kunci": "B",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W16",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Kausatif Sensitivitas Modus terhadap Panjang Kelas",
      "tipe": "Kausatif Sebab-Akibat",
      "tanya": "Pernyataan: Nilai Modus data berkelompok yang dihitung dari tabel distribusi frekuensi dapat berubah jika lebar interval kelas ($c$) diubah meskipun data mentahnya sama.\n\nSEBAB\n\nAlasan: Nilai modus data berkelompok selalu identik dan sama persis dengan nilai rata-rata hitung (mean) data tersebut.",
      "opsi": [
        "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat.",
        "B. Pernyataan benar, alasan benar, tetapi keduanya TIDAK menunjukkan hubungan sebab akibat.",
        "C. Pernyataan benar dan alasan salah.",
        "D. Pernyataan salah dan alasan benar.",
        "E. Pernyataan dan alasan keduanya salah."
      ],
      "kunci": "C",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W17",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Median dari Poligon Frekuensi Kumulatif",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Pada kurva Ogive Kurang Dari dengan total $N = 100$, titik koordinat yang memiliki ordinat $50$ berada tepat di absis $62{,}4$. Nilai median dari data yang direpresentasikan kurva tersebut adalah ...",
      "opsi": [
        "A. $50{,}0$",
        "B. $56{,}2$",
        "C. $62{,}4$",
        "D. $74{,}8$",
        "E. $48{,}0$"
      ],
      "kunci": "C",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-W18",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Perhitungan Selisih Modus & Median",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Diberikan data berkelompok dengan $Tb = 40{,}5, c = 10, d_1 = 4, d_2 = 6$ untuk kelas modus. Pada data yang sama, kelas median memiliki $Tb = 40{,}5, N = 80, F_k = 32, f_m = 16$. Tentukan selisih absolut $|Mo - Me|$ dari kedua ukuran pemusatan tersebut! (Ketik angka desimal, contoh: 1.0 atau 0.5)",
      "opsi": [],
      "kunci": "1.0",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W19",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Modus Data Dua Puncak Berdampingan",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Jika dua kelas interval yang berdampingan memiliki frekuensi tertinggi yang sama besar ($f_1 = f_2 = 25$), bagaimana status modus data tersebut?",
      "opsi": [
        "A. Data tersebut tidak memiliki modus sama sekali.",
        "B. Modus data adalah 25.",
        "C. Nilai modus diambil dari rata-rata titik tengah kedua interval.",
        "D. Modusnya berada tepat di perbatasan (tepi kelas bersama) antara kedua interval tersebut.",
        "E. Salah satu interval harus dipilih secara acak."
      ],
      "kunci": "D",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 3 (HOTS)"
    },
    {
      "id": "W42-W20",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Evaluasi Median Berkelompok Genap vs Ganjil",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Tentukan status kebenaran dari pernyataan berikut tentang ukuran pemusatan data:",
      "opsi": [
        "Pada data berkelompok, formula interpolasi median menggunakan nilai $N/2$ baik untuk $N$ genap maupun $N$ ganjil.",
        "Pada data tunggal berukuran genap $N = 20$, median dihitung dari rata-rata datum ke-10 dan datum ke-11.",
        "Kelebihan utama median dibanding rata-rata hitung adalah ketahanannya (robustness) terhadap nilai ekstrem.",
        "Modus selalu bernilai tunggal pada setiap kumpulan data observasi numerik."
      ],
      "kunci": "B - B - B - S",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-W21",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Median pada Distribusi Frekuensi Simetris",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Diberikan tabel berfrekuensi simetris sempurna:\n$20-29$ (4), $30-39$ (10), $40-49$ (16), $50-59$ (10), $60-69$ (4).\nTanpa perlu menghitung rumus rumit, nilai median dari tabel tersebut dapat dipastikan bernilai ...",
      "opsi": [
        "A. $40{,}5$",
        "B. $45{,}5$",
        "C. $45{,}0$",
        "D. $49{,}5$",
        "E. $44{,}5$"
      ],
      "kunci": "E",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-W22",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Rekonstruksi Modus Histogram",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Pada diagram histogram, tiga balok berurutan memiliki tinggi $8, 20,$ dan $12$. Tepi kelas balok tengah adalah $[19{,}5; 29{,}5]$. Centang SEMUA pernyataan yang bernilai BENAR!",
      "opsi": [
        "A. Titik puncak balok histogram tertinggi menentukan letak kelas modus.",
        "B. Nilai $d_1$ diukur dari selisih tinggi balok modus dengan balok di sebelah kirinya.",
        "C. Nilai $d_2$ diukur dari selisih tinggi balok modus dengan balok di sebelah kanannya.",
        "D. Garis silang diagonal antar sudut balok tetangga berpotongan pada absis nilai modus.",
        "E. Modus data berkelompok tidak memerlukan panjang kelas interval ($c$) dalam perhitungannya."
      ],
      "kunci": "A, B, C, D",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W23",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Logika Modus Data Frekuensi Konstan",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Jika seluruh kelas interval pada suatu tabel distribusi frekuensi memiliki jumlah frekuensi yang sama besar (misal setiap kelas memiliki frekuensi 15), kesimpulan yang paling tepat adalah ...",
      "opsi": [
        "A. Data tersebut tidak memiliki modus (tidak ada nilai yang paling sering muncul dibanding lainnya).",
        "B. Data tersebut memiliki modus di setiap kelas.",
        "C. Nilai modusnya adalah 15.",
        "D. Modus data bertepatan dengan nilai median.",
        "E. Modus bernilai nol."
      ],
      "kunci": "A",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-W24",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Nilai Median Pecahan Desimal",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Diberikan $Tb = 20{,}5, c = 5, N = 50, F_k = 20, f_m = 10$. Hitung nilai Median data tersebut! (Ketik angka desimal)",
      "opsi": [],
      "kunci": "23.0",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-W25",
      "mapel": "Matematika Wajib",
      "materi": "P17 • Soal HOTS: Optimasi Biaya Distribusi dari Median",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Dalam teori optimasi logistik nasional, lokasi gudang transit ($X$) yang meminimalkan total jarak absolut $\\sum |x_i - X|$ ke seluruh toko retail secara matematis bertepatan dengan ...",
      "opsi": [
        "A. Nilai Mean (Rata-rata)",
        "B. Nilai Median",
        "C. Nilai Modus",
        "D. Nilai Kuartil Bawah",
        "E. Titik Tengah Jangkauan (Mid-Range)"
      ],
      "kunci": "B",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 3 (HOTS)"
    },
    {
      "id": "W42-W26",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Kuartil Bawah (Q1) Data Berkelompok",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Diberikan tabel distribusi frekuensi skor asesmen ($N = 80$):\n$40-49$ (10), $50-59$ (20), $60-69$ (25), $70-79$ (15), $80-89$ (10).\nNilai Kuartil Bawah ($Q_1$) data tersebut adalah ...",
      "opsi": [
        "A. $52{,}50$",
        "B. $55{,}50$",
        "C. $54{,}50$",
        "D. $56{,}25$",
        "E. $53{,}75$"
      ],
      "kunci": "C",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-W27",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Jangkauan Interkuartil & Simpangan Kuartil",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Dari hasil pengukuran massa komponen presisi diperoleh nilai Kuartil Bawah $Q_1 = 48{,}5\\text{ gram}$ dan Kuartil Atas $Q_3 = 76{,}5\\text{ gram}$. Tentukan nilai Simpangan Kuartil ($Q_d$) data tersebut! (Ketik angka)",
      "opsi": [],
      "kunci": "14",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-W28",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Deteksi Outlier (Pencilan) via Pagar Tukey",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Diketahui nilai $Q_1 = 30$ dan $Q_3 = 50$ pada suatu kumpulan data ujian. Evaluasi kebenaran batas pencilan (Outlier) berikut:",
      "opsi": [
        "Nilai batas Pagar Dalam Bawah ($PD$) dihitung menggunakan rumus $Q_3 - 1{,}5 \\times QR$.",
        "Nilai batas Pagar Dalam Atas ($PA$) dihitung menggunakan rumus $Q_3 + 1{,}5 \\times QR$.",
        "Langkah ($L$) dalam kriteria Tukey didefinisikan sebagai $1{,}5 \\times QR$.",
        "Datum yang nilainya melampaui Pagar Dalam Atas dikategorikan sebagai pencilan atas."
      ],
      "kunci": "S - B - B - B",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W29",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Kuartil Atas (Q3) Data Berkelompok",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Diberikan tabel frekuensi data kecepatan kendaraan ($N = 100$):\n$30-39$ (15), $40-49$ (25), $50-59$ (30), $60-69$ (20), $70-79$ (10).\nNilai Kuartil Atas ($Q_3$) data tersebut adalah ...",
      "opsi": [
        "A. $61{,}5\\text{ km/jam}$",
        "B. $64{,}0\\text{ km/jam}$",
        "C. $63{,}5\\text{ km/jam}$",
        "D. $62{,}0\\text{ km/jam}$",
        "E. $60{,}5\\text{ km/jam}$"
      ],
      "kunci": "D",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-W30",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Desil ke-7 (D7) Data Berkelompok",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Pada kumpulan data berkelompok dengan total $N = 60$, posisi Desil ke-7 ($D_7$) dihitung dengan formula letak $\\frac{7}{10} N$. Centang SEMUA pernyataan yang BENAR!",
      "opsi": [
        "A. Nilai $D_7$ membatasi $70\\%$ data terendah dan $30\\%$ data tertinggi.",
        "B. Posisi letak datum untuk $D_7$ adalah datum ke-42.",
        "C. Nilai $D_5$ selalu bertepatan dengan nilai Median ($Q_2$).",
        "D. Rumus desil menggunakan pembagi kelipatan 10 pada posisi datumnya.",
        "E. Nilai $D_7$ selalu lebih kecil daripada Kuartil Bawah ($Q_1$)."
      ],
      "kunci": "A, B, C, D",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W31",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Kausatif Simetri Boxplot",
      "tipe": "Kausatif Sebab-Akibat",
      "tanya": "Pernyataan: Jika pada diagram kotak garis (boxplot) panjang sungut kiri sama dengan panjang sungut kanan dan garis median tepat di tengah kotak, maka data berdistribusi simetris.\n\nSEBAB\n\nAlasan: Nilai median membagi kumpulan data terurut menjadi dua bagian yang berukuran persis sama banyak frekuensinya.",
      "opsi": [
        "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat.",
        "B. Pernyataan benar, alasan benar, tetapi keduanya TIDAK menunjukkan hubungan sebab akibat.",
        "C. Pernyataan benar dan alasan salah.",
        "D. Pernyataan salah dan alasan benar.",
        "E. Pernyataan dan alasan keduanya salah."
      ],
      "kunci": "B",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W32",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Perhitungan Desil ke-3 (D3)",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Diberikan $Tb = 30{,}5, c = 10, N = 100, F_k = 24, f_{D} = 12$. Tentukan nilai Desil ke-3 ($D_3$) data tersebut! (Ketik angka desimal)",
      "opsi": [],
      "kunci": "35.5",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-W33",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Kuartil Data Tunggal dengan Interpolasi",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Diberikan kumpulan data terurut: $4, 7, 9, 11, 14, 18, 20, 22, 25$. Nilai Kuartil Bawah ($Q_1$) dan Kuartil Atas ($Q_3$) dari data tersebut adalah ...",
      "opsi": [
        "A. $Q_1 = 7{,}5$ dan $Q_3 = 21{,}5$",
        "B. $Q_1 = 7$ dan $Q_3 = 22$",
        "C. $Q_1 = 8$ dan $Q_3 = 20$",
        "D. $Q_1 = 9$ dan $Q_3 = 21$",
        "E. $Q_1 = 8$ dan $Q_3 = 21$"
      ],
      "kunci": "E",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-W34",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Penentuan Pagar Luar (Outer Fence)",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Suatu distribusi data memiliki $Q_1 = 60$ dan $Q_3 = 90$. Berapakah batas nilai Pagar Luar Atas ($PL$) untuk mendeteksi pencilan ekstrem?",
      "opsi": [
        "A. $135$",
        "B. $120$",
        "C. $150$",
        "D. $180$",
        "E. $105$"
      ],
      "kunci": "A",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W35",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Desil dan Persentil",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Evaluasi kesetaraan nilai antar-ukuran letak data berikut:",
      "opsi": [
        "Desil membagi data menjadi 10 interval berfrekuensi sama sehingga terdapat 9 titik desil ($D_1$ s.d. $D_9$).",
        "Persentil membagi data menjadi 100 interval berfrekuensi sama sehingga terdapat 99 titik persentil.",
        "Nilai Desil ke-5 ($D_5$) dan Persentil ke-50 ($P_{50}$) selalu bernilai tepat sama dengan Median ($Q_2$).",
        "Desil ke-5 ($D_5$) dan Persentil ke-50 ($P_{50}$) selalu bernilai tepat sama dengan Kuartil Bawah ($Q_1$)."
      ],
      "kunci": "B - B - B - S",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-W36",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Kuartil dari Histogram Berfrekuensi Miring",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Jika pada suatu kumpulan data diketahui $Q_2 - Q_1 = 18$ dan $Q_3 - Q_2 = 6$, bentuk sebaran distribusi data tersebut condong ke arah ...",
      "opsi": [
        "A. Condong ke kanan (Positively Skewed)",
        "B. Condong ke kiri (Negatively Skewed)",
        "C. Simetris Sempurna",
        "D. Uniform (Seragam)",
        "E. Bimodal"
      ],
      "kunci": "B",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 3 (HOTS)"
    },
    {
      "id": "W42-W37",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Nilai IQR pada Transformasi Data",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Kumpulan data awal memiliki $QR = 16$. Jika setiap nilai datum dikalikan 3 kemudian dikurangi 10 ($y_i = 3x_i - 10$), berapakah nilai Jangkauan Interkuartil ($QR$) yang baru? (Ketik angka)",
      "opsi": [],
      "kunci": "48",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W38",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Penafsiran Diagram Kotak Garis (Boxplot)",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Sebuah boxplot menampilkan 5 angka ringkasan: $\\text{Min} = 10, Q_1 = 25, Q_2 = 40, Q_3 = 65, \\text{Max} = 95$. Centang SEMUA pernyataan yang BENAR!",
      "opsi": [
        "A. Garis tengah di dalam kotak mewakili nilai Median ($Q_2$).",
        "B. Batas kiri kotak menunjukkan Kuartil Bawah ($Q_1$) dan batas kanan kotak menunjukkan Kuartil Atas ($Q_3$).",
        "C. Panjang kotak horizontal merepresentasikan Jangkauan Interkuartil ($QR = Q_3 - Q_1$).",
        "D. Titik-titik di luar sungut (whiskers) menandakan datum pencilan (outlier).",
        "E. Panjang kotak pada boxplot mewakili nilai varians data."
      ],
      "kunci": "A, B, C, D",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W39",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Rekonstruksi Nilai Tertinggi Tanpa Outlier",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Jika $Q_1 = 40$ dan $Q_3 = 70$, nilai pengamatan terbesar yang MASIH dianggap wajar (bukan pencilan atas) tidak boleh melebihi ...",
      "opsi": [
        "A. $100$",
        "B. $110$",
        "C. $115$",
        "D. $120$",
        "E. $125$"
      ],
      "kunci": "C",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W40",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Desil ke-8 (D8) Data Berkelompok",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Data hasil uji tarik baja beton ($N = 50$):\n$100-109$ (5), $110-119$ (10), $120-129$ (20), $130-139$ (10), $140-149$ (5).\nNilai Desil ke-8 ($D_8$) data tersebut adalah ...",
      "opsi": [
        "A. $132{,}5$",
        "B. $133{,}0$",
        "C. $135{,}5$",
        "D. $134{,}5$",
        "E. $136{,}0$"
      ],
      "kunci": "D",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W41",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Kausatif Perbandingan IQR vs Jangkauan Total",
      "tipe": "Kausatif Sebab-Akibat",
      "tanya": "Pernyataan: Jangkauan Interkuartil ($QR$) sangat rentan dan mudah terdistorsi oleh keberadaan nilai pencilan ekstrem di ujung atas data.\n\nSEBAB\n\nAlasan: Jangkauan Interkuartil hanya mengukur rentang $50\\%$ data di bagian tengah ($Q_3 - Q_1$) dan mengabaikan $25\\%$ data terbawah serta $25\\%$ data teratas.",
      "opsi": [
        "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat.",
        "B. Pernyataan benar, alasan benar, tetapi keduanya TIDAK menunjukkan hubungan sebab akibat.",
        "C. Pernyataan benar dan alasan salah.",
        "D. Pernyataan salah dan alasan benar.",
        "E. Pernyataan dan alasan keduanya salah."
      ],
      "kunci": "D",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W42",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Kuartil dari Histogram Kumulatif",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Jika suatu distribusi frekuensi memiliki $Tb_{Q1} = 24{,}5, c = 5, \\frac{1}{4}N = 25, F_k = 15, f_1 = 20$. Tentukan nilai Kuartil Bawah ($Q_1$)! (Ketik angka desimal)",
      "opsi": [],
      "kunci": "27.0",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-W43",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Desil ke-1 (D1) Data Berkelompok",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Data nilai tes matematika ($N = 80$):\n$50-59$ (8), $60-69$ (16), $70-79$ (24), $80-89$ (20), $90-99$ (12).\nNilai Desil ke-1 ($D_1$) data tersebut adalah ...",
      "opsi": [
        "A. $55{,}5$",
        "B. $58{,}5$",
        "C. $57{,}5$",
        "D. $56{,}5$",
        "E. $59{,}5$"
      ],
      "kunci": "E",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W44",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Identifikasi Outlier Bawah",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Data waktu reaksi atlet: $Q_1 = 120\\text{ ms}$ dan $Q_3 = 160\\text{ ms}$. Sebuah datum dianggap sebagai pencilan bawah (abnormal cepat) jika nilainya kurang dari ...",
      "opsi": [
        "A. $60\\text{ ms}$",
        "B. $70\\text{ ms}$",
        "C. $80\\text{ ms}$",
        "D. $90\\text{ ms}$",
        "E. $100\\text{ ms}$"
      ],
      "kunci": "A",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W45",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Evaluasi Proposisi Ukuran Letak",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Tentukan kebenaran pernyataan berikut mengenai ukuran letak:",
      "opsi": [
        "Kuartil membagi kumpulan data terurut menjadi 4 bagian yang sama banyak frekuensinya.",
        "Desil membagi kumpulan data terurut menjadi 10 bagian yang sama banyak frekuensinya.",
        "Persentil membagi data menjadi 100 bagian yang sama banyak frekuensinya.",
        "Selalu terdapat tepat 4 nilai kuartil (Q1, Q2, Q3, Q4) yang dihitung dalam statistika."
      ],
      "kunci": "B - B - B - S",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-W46",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Kuartil pada Ogive Positif",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Pada kurva Ogive Positif dengan $N = 200$, nilai Kuartil Bawah ($Q_1$), Median ($Me$), dan Kuartil Atas ($Q_3$) berturut-turut dicari pada ordinat frekuensi kumulatif ...",
      "opsi": [
        "A. $25, 50, 75$",
        "B. $50, 100, 150$",
        "C. $40, 100, 160$",
        "D. $50, 120, 180$",
        "E. $20, 50, 80$"
      ],
      "kunci": "B",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-W47",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Penentuan Desil ke-9 (D9)",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Sebuah perusahaan hanya akan merekrut $10\\%$ pelamar terbaik dari tes seleksi berkas ($N = 200$). Batas skor minimal kelulusan dapat ditentukan menggunakan nilai ...",
      "opsi": [
        "A. Kuartil Atas ($Q_3$)",
        "B. Desil ke-1 ($D_1$)",
        "C. Desil ke-9 ($D_9$)",
        "D. Desil ke-8 ($D_8$)",
        "E. Median ($Q_2$)"
      ],
      "kunci": "C",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W48",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Rasio Simpangan Kuartil terhadap Rentang",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Jika $Q_1 = 20$ dan $Q_3 = 60$, berapakah nilai Jangkauan Interkuartil ($QR$)? (Ketik angka)",
      "opsi": [],
      "kunci": "40",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-W49",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Properti Ketahanan Kuartil terhadap Outlier",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Mengapa ukuran letak kuartil ($Q_1, Q_2, Q_3$) sering digunakan dalam visualisasi boxplot untuk laporan ilmiah? Centang SEMUA pernyataan yang BENAR!",
      "opsi": [
        "A. Kuartil tahan (robust) terhadap gangguan nilai-nilai ekstrem (outlier).",
        "B. Boxplot langsung memperlihatkan simetri, dispersi, dan potensi pencilan secara visual.",
        "C. Kuartil dapat dihitung untuk data yang memiliki skala pengukuran minimal ordinal.",
        "D. Jangkauan interkuartil ($Q_3 - Q_1$) mewakili konsentrasi $50\\%$ data inti.",
        "E. Kuartil selalu identik dengan nilai varians data."
      ],
      "kunci": "A, B, C, D",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-W50",
      "mapel": "Matematika Wajib",
      "materi": "P18 • Soal HOTS: Analisis Ambang Kelulusan UTBK via Desil",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Pada simulasi UTBK nasional dengan 10.000 peserta, skor berdistribusi normal dengan $Q_1 = 480, Q_2 = 560, Q_3 = 640$. Jika suatu program studi menetapkan kuota hanya untuk $20\\%$ peserta teratas, nilai ambang batas skor minimal yang dibutuhkan berada pada ...",
      "opsi": [
        "A. Lebih rendah dari $Q_3$",
        "B. Tepat sama dengan $Q_3$",
        "C. Median ($Q_2$)",
        "D. Desil ke-8 ($D_8$) yang bernilai lebih tinggi dari $Q_3$",
        "E. Desil ke-2 ($D_2$)"
      ],
      "kunci": "D",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 3 (HOTS)"
    }
  ],
  "matmin": [
    {
      "id": "W42-M01",
      "mapel": "Additional Mathematics",
      "materi": "P18 • Aturan Rantai Fungsi Trigonometri Linier",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Turunan pertama dari fungsi $f(x) = \\sin(5x - \\frac{\\pi}{3})$ adalah ...",
      "opsi": [
        "A. $f'(x) = 5\\sin(5x - \\frac{\\pi}{3})$",
        "B. $f'(x) = -5\\cos(5x - \\frac{\\pi}{3})$",
        "C. $f'(x) = \\frac{1}{5}\\cos(5x - \\frac{\\pi}{3})$",
        "D. $f'(x) = 5\\cos(5x - \\frac{\\pi}{3})$",
        "E. $f'(x) = -5\\sin(5x - \\frac{\\pi}{3})$"
      ],
      "kunci": "D",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-M02",
      "mapel": "Additional Mathematics",
      "materi": "P18 • Turunan Rantai Komposisi Kuadratik",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Diberikan fungsi $f(x) = \\cos(2x^2 - 1)$. Tentukan nilai dari $\\frac{f'(1)}{\\sin(1)}$! (Ketik angka bulat)",
      "opsi": [],
      "kunci": "-4",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-M03",
      "mapel": "Additional Mathematics",
      "materi": "P18 • Sifat Aturan Rantai Fungsi Trigonometri",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Analisis kebenaran setiap turunan fungsi trigonometri berikut berdasarkan aturan rantai:",
      "opsi": [
        "Turunan dari $y = \\tan(3x)$ adalah $y' = 3\\sec^2(3x)$.",
        "Turunan dari $y = \\cos(4 - 2x)$ adalah $y' = 2\\sin(4 - 2x)$.",
        "Turunan dari $y = \\sin(x^3)$ adalah $y' = 3x^2\\cos(x^3)$.",
        "Turunan dari $y = \\cot(2x)$ adalah $y' = 2\\csc^2(2x)$."
      ],
      "kunci": "B - B - B - S",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-M04",
      "mapel": "Additional Mathematics",
      "materi": "P18 • Turunan Pangkat Trigonometri [u(x)]^n",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Turunan pertama dari fungsi $f(x) = \\sin^4(3x)$ adalah ...",
      "opsi": [
        "A. $f'(x) = 4\\sin^3(3x)\\cos(3x)$",
        "B. $f'(x) = 12\\sin^3(3x)\\cos(3x)$",
        "C. $f'(x) = 12\\sin^3(3x)$",
        "D. $f'(x) = 6\\sin^2(6x)$",
        "E. $f'(x) = -12\\sin^3(3x)\\cos(3x)$"
      ],
      "kunci": "B",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-M05",
      "mapel": "Additional Mathematics",
      "materi": "P18 • Turunan Fungsi Trigonometri Sudut Ganda",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Diberikan $f(x) = \\cos^2(x) - \\sin^2(x)$. Centang SEMUA bentuk turunan $f'(x)$ yang BENAR!",
      "opsi": [
        "A. $f'(x) = -2\\sin(2x)$",
        "B. $f'(x) = -4\\sin(x)\\cos(x)$",
        "C. $f'(x) = -2\\cos(2x)$",
        "D. $f'(x) = 2\\sin(2x)$",
        "E. Nilai $f'(\\frac{\\pi}{4}) = -2$"
      ],
      "kunci": "A, B, E",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-M06",
      "mapel": "Additional Mathematics",
      "materi": "P18 • Kausatif Derivatif Pangkat Genap Sinus",
      "tipe": "Kausatif Sebab-Akibat",
      "tanya": "Pernyataan: Turunan pertama dari $f(x) = \\sin^2(x)$ dan $g(x) = -\\cos^2(x)$ menghasilkan fungsi turunan yang identik sama, yaitu $\\sin(2x)$.\n\nSEBAB\n\nAlasan: Dua fungsi yang hanya berselisih suatu konstanta pasti memiliki turunan pertama yang sama persis.",
      "opsi": [
        "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat.",
        "B. Pernyataan benar, alasan benar, tetapi keduanya TIDAK menunjukkan hubungan sebab akibat.",
        "C. Pernyataan benar dan alasan salah.",
        "D. Pernyataan salah dan alasan benar.",
        "E. Pernyataan dan alasan keduanya salah."
      ],
      "kunci": "A",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-M07",
      "mapel": "Additional Mathematics",
      "materi": "P18 • Evaluasi Nilai Turunan Trigonometri Sudut Khusus",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Jika $f(x) = 6\\cos^3(2x)$, nilai dari $f'(\\frac{\\pi}{6})$ adalah ...",
      "opsi": [
        "A. $-\\frac{9}{2}$",
        "B. $-9\\sqrt{3}$",
        "C. $-\\frac{9\\sqrt{3}}{4}$",
        "D. $-9$",
        "E. $-\\frac{9\\sqrt{3}}{2}$"
      ],
      "kunci": "E",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 3 (HOTS)"
    },
    {
      "id": "W42-M08",
      "mapel": "Additional Mathematics",
      "materi": "P18 • Turunan Tangen Berpangkat",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Diberikan $y = \\tan^2(x)$. Nilai dari $y'(\\frac{\\pi}{4})$ adalah ... (Ketik angka bulat)",
      "opsi": [],
      "kunci": "4",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-M09",
      "mapel": "Additional Mathematics",
      "materi": "P18 • Turunan Akar Fungsi Sinus",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Turunan pertama dari $f(x) = \\sqrt{\\sin(2x)}$ pada domain di mana $\\sin(2x) > 0$ adalah ...",
      "opsi": [
        "A. $f'(x) = \\frac{\\cos(2x)}{2\\sqrt{\\sin(2x)}}$",
        "B. $f'(x) = \\frac{2\\cos(2x)}{\\sqrt{\\sin(2x)}}$",
        "C. $f'(x) = \\frac{\\cos(2x)}{\\sqrt{\\sin(2x)}}$",
        "D. $f'(x) = -\\frac{\\cos(2x)}{\\sqrt{\\sin(2x)}}$",
        "E. $f'(x) = \\frac{1}{2\\sqrt{\\cos(2x)}}$"
      ],
      "kunci": "C",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-M10",
      "mapel": "Additional Mathematics",
      "materi": "P18 • Nilai Stasioner Turunan Pertama",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Titik stasioner dari kurva $f(x) = \\sin^2(x)$ pada interval $0 \\le x \\le \\pi$ terjadi saat $x$ bernilai ...",
      "opsi": [
        "A. $x = 0, \\frac{\\pi}{2}, \\pi$",
        "B. $x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}$",
        "C. $x = \\frac{\\pi}{3}, \\frac{2\\pi}{3}$",
        "D. $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$",
        "E. Hanya saat $x = \\frac{\\pi}{2}$"
      ],
      "kunci": "A",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-M11",
      "mapel": "Additional Mathematics",
      "materi": "P18 • Turunan Fungsi Kebalikan (Secan)",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Turunan pertama dari $y = \\sec(3x)$ adalah ...",
      "opsi": [
        "A. $y' = \\frac{3}{\\cos^2(3x)}$",
        "B. $y' = -3\\sec(3x)\\tan(3x)$",
        "C. $y' = 3\\sec^2(3x)$",
        "D. $y' = 3\\sec(3x)\\tan(3x)$",
        "E. $y' = 3\\csc(3x)\\cot(3x)$"
      ],
      "kunci": "D",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-M12",
      "mapel": "Additional Mathematics",
      "materi": "P18 • Turunan Pangkat Tiga Cosinus",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Diberikan $f(x) = \\cos^3(x)$. Tentukan status kebenaran dari pernyataan berikut:",
      "opsi": [
        "Turunan pertama adalah $f'(x) = -3\\cos^2(x)\\sin(x)$.",
        "Nilai $f'(0) = 0$.",
        "Nilai $f'(\\frac{\\pi}{2}) = 1$.",
        "Nilai $f'(\\frac{\\pi}{4}) = -\\frac{3\\sqrt{2}}{4}$."
      ],
      "kunci": "B - B - S - B",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-M13",
      "mapel": "Additional Mathematics",
      "materi": "P18 • Gradien Garis Singgung Kurva Kuadrat Sinus",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Tentukan gradien garis singgung ($m$) kurva $y = 4\\sin^2(x)$ pada titik dengan absis $x = \\frac{\\pi}{4}$! (Ketik angka bulat)",
      "opsi": [],
      "kunci": "4",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-M14",
      "mapel": "Additional Mathematics",
      "materi": "P19 • Turunan Perkalian Aljabar & Sinus",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Turunan pertama dari fungsi $f(x) = x^2 \\sin(x)$ adalah ...",
      "opsi": [
        "A. $f'(x) = 2x\\cos(x)$",
        "B. $f'(x) = 2x\\sin(x) + x^2\\cos(x)$",
        "C. $f'(x) = 2x\\sin(x) - x^2\\cos(x)$",
        "D. $f'(x) = x^2\\cos(x) - 2x\\sin(x)$",
        "E. $f'(x) = 2x\\cos(x) + x^2\\sin(x)$"
      ],
      "kunci": "B",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-M15",
      "mapel": "Additional Mathematics",
      "materi": "P19 • Nilai Turunan Perkalian x · cos(x)",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Diberikan fungsi $f(x) = x \\cos(x)$. Tentukan nilai dari $f'(\\pi)$! (Ketik angka bulat bertanda negatif jika minus)",
      "opsi": [],
      "kunci": "-1",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-M16",
      "mapel": "Additional Mathematics",
      "materi": "P19 • Turunan Pembagian Sinus per Cosinus",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Gunakan aturan pembagian $y = \\frac{u}{v} = \\frac{\\sin x}{\\cos x}$ untuk membuktikan turunan fungsi tangen. Hasil penurunannya adalah ...",
      "opsi": [
        "A. $y' = 1$",
        "B. $y' = \\csc^2(x)$",
        "C. $y' = -\\sec^2(x)$",
        "D. $y' = \\frac{\\cos^2 x - \\sin^2 x}{\\cos^2 x}$",
        "E. $y' = \\sec^2(x)$"
      ],
      "kunci": "E",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-M17",
      "mapel": "Additional Mathematics",
      "materi": "P19 • Turunan Pembagian (sin x)/(1 + cos x)",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Turunan pertama dari fungsi $f(x) = \\frac{\\sin x}{1 + \\cos x}$ setelah disederhanakan adalah ...",
      "opsi": [
        "A. $f'(x) = \\frac{1}{(1 + \\cos x)^2}$",
        "B. $f'(x) = \\frac{\\cos x}{1 + \\cos x}$",
        "C. $f'(x) = \\frac{1}{1 + \\cos x}$",
        "D. $f'(x) = \\frac{\\sin x}{1 + \\cos x}$",
        "E. $f'(x) = \\frac{2}{1 + \\cos x}$"
      ],
      "kunci": "C",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-M18",
      "mapel": "Additional Mathematics",
      "materi": "P19 • Evaluasi Hasil Turunan Perkalian & Pembagian",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Analisis kebenaran setiap turunan fungsi trigonometri berikut:",
      "opsi": [
        "Turunan dari $f(x) = x \\sin(x)$ adalah $f'(x) = \\sin(x) + x\\cos(x)$.",
        "Turunan dari $f(x) = \\frac{x}{\\sin x}$ adalah $f'(x) = \\frac{\\sin x - x\\cos x}{\\sin^2 x}$.",
        "Turunan dari $f(x) = \\sin(x)\\cos(x)$ adalah $f'(x) = \\cos(2x)$.",
        "Turunan dari $f(x) = \\frac{1}{\\cos x}$ adalah $f'(x) = -\\frac{\\sin x}{\\cos^2 x}$."
      ],
      "kunci": "B - B - B - S",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-M19",
      "mapel": "Additional Mathematics",
      "materi": "P19 • Gradien Garis Singgung Fungsi Perkalian",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Tentukan gradien garis singgung kurva $y = (2x - \\pi)\\sin(x)$ pada titik berabsis $x = \\frac{\\pi}{2}$! (Ketik angka bulat)",
      "opsi": [],
      "kunci": "2",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-M20",
      "mapel": "Additional Mathematics",
      "materi": "P19 • Kausatif Rumus Pembagian Trigonometri",
      "tipe": "Kausatif Sebab-Akibat",
      "tanya": "Pernyataan: Turunan pertama dari $f(x) = \\sin(2x)$ adalah $f'(x) = 2\\cos(2x)$.\n\nSEBAB\n\nAlasan: Fungsi dasar $g(x) = \\cos(x)$ memiliki nilai stasioner saat $x = 0$ dan $x = \\pi$.",
      "opsi": [
        "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat.",
        "B. Pernyataan benar, alasan benar, tetapi keduanya TIDAK menunjukkan hubungan sebab akibat.",
        "C. Pernyataan benar dan alasan salah.",
        "D. Pernyataan salah dan alasan benar.",
        "E. Pernyataan dan alasan keduanya salah."
      ],
      "kunci": "B",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 3 (HOTS)"
    },
    {
      "id": "W42-M21",
      "mapel": "Additional Mathematics",
      "materi": "P19 • Turunan Perkalian Tiga Suku Trigonometri",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Jika $f(x) = x^3 \\cos(2x)$, nilai dari $f''(0)$ adalah ...",
      "opsi": [
        "A. $0$",
        "B. $6$",
        "C. $-12$",
        "D. $12$",
        "E. $-6$"
      ],
      "kunci": "A",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-M22",
      "mapel": "Additional Mathematics",
      "materi": "P19 • Sifat Pembagian Kuosien Trigonometri",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Diberikan fungsi $f(x) = \\frac{\\cos x}{x}$ untuk $x > 0$. Centang SEMUA pernyataan yang bernilai BENAR!",
      "opsi": [
        "A. Rumus turunan pertamanya adalah $f'(x) = \\frac{-x\\sin x - \\cos x}{x^2}$.",
        "B. Pada saat $x = \\pi$, nilai $f'(\\pi) = \\frac{1}{\\pi^2}$.",
        "C. Pada saat $x = \\frac{\\pi}{2}$, nilai $f'(\\frac{\\pi}{2}) = -\\frac{2}{\\pi}$.",
        "D. Turunan fungsi ini diperoleh menggunakan aturan hasil bagi $\\frac{u'v - uv'}{v^2}$.",
        "E. Nilai $f'(x)$ selalu bernilai positif untuk setiap $x > 0$."
      ],
      "kunci": "A, B, C, D",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-M23",
      "mapel": "Additional Mathematics",
      "materi": "P19 • Turunan Tangen dan Secan Perkalian",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Turunan pertama dari fungsi $f(x) = \\sec(x) \\tan(x)$ adalah ...",
      "opsi": [
        "A. $f'(x) = \\sec^3(x)$",
        "B. $f'(x) = \\sec(x)(\\sec^2 x - \\tan^2 x)$",
        "C. $f'(x) = 2\\sec^2(x)\\tan(x)$",
        "D. $f'(x) = \\sec(x)(\\tan^2 x + \\sec^2 x)$",
        "E. $f'(x) = \\tan^3(x)$"
      ],
      "kunci": "D",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W42-M24",
      "mapel": "Additional Mathematics",
      "materi": "P19 • Evaluasi Turunan Pembagian di Sudut Tertentu",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Jika $f(x) = \\frac{1 + \\sin x}{\\cos x}$, tentukan nilai dari $f'(0)$! (Ketik angka bulat)",
      "opsi": [],
      "kunci": "1",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W42-M25",
      "mapel": "Additional Mathematics",
      "materi": "P19 • Optimasi Luas Segitiga via Turunan Trigonometri",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Sebuah segitiga sama kaki memiliki panjang dua sisi sama $a = 10\\text{ cm}$. Luas segitiga sebagai fungsi sudut puncak $\\theta$ dirumuskan oleh $L(\\theta) = \\frac{1}{2}(10)(10)\\sin(\\theta) = 50\\sin(\\theta)$. Agar luas segitiga mencapai maksimum, nilai turunan $L'(\\theta) = 0$, yang menghasilkan sudut puncak $\\theta$ sebesar ...",
      "opsi": [
        "A. $45^\\circ$",
        "B. $90^\\circ$",
        "C. $60^\\circ$",
        "D. $120^\\circ$",
        "E. $30^\\circ$"
      ],
      "kunci": "B",
      "bahas": "🔒 Pembahasan langkah demi langkah dan kunci resmi butir soal Pekan W42 (Wajib P17-P18 & Minat P18-P19) dikunci sementara hingga Minggu, 18 Oktober 2026 pukul 23:59 WIB demi menjaga integritas asesmen angkatan XII.",
      "level": "Level 2 (Sedang)"
    }
  ]
},
    '2026-W43': {
  "matwa": [
  {
    "id": "W43-W01",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 10 • Eksponen Pertumbuhan Biologis",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Dalam uji kultur laboratorium biomedis, koloni bakteri *Escherichia coli* berkembang biak secara eksponensial memenuhi formula $N(t) = N_0 \\cdot 2^{t/20}$, dengan $t$ menyatakan waktu pembiakan dalam menit dan $N_0$ adalah jumlah bakteri mula-mula. Jika pada awal pengamatan cawan petri berisi 300 bakteri, berapakah jumlah bakteri setelah pembiakan berlangsung selama 2 jam?",
    "opsi": [
      "A. $9.600$ bakteri",
      "B. $14.400$ bakteri",
      "C. $19.200$ bakteri",
      "D. $38.400$ bakteri",
      "E. $76.800$ bakteri"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Identifikasi variabel pada formula pertumbuhan eksponensial:\n$N_0 = 300$ bakteri, $t = 2\\text{ jam} = 120\\text{ menit}$.\n\nLangkah 2: Hitung rasio eksponen:\n$\\frac{t}{20} = \\frac{120}{20} = 6$.\n\nLangkah 3: Hitung jumlah akhir bakteri:\n$N(120) = 300 \\cdot 2^6 = 300 \\cdot 64 = 19.200\\text{ bakteri}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-W02",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 10 • Eksponen Peluruhan Radioisotop Medis",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Di rumah sakit onkologi, unsur radioisotop Iodium-131 ($^{131}\\text{I}$) digunakan untuk terapi kanker tiroid. Unsur ini meluruh mengikuti persamaan $A(t) = A_0 \\left(\\frac{1}{2}\\right)^{t/8}$, dengan $t$ menyatakan waktu peluruhan dalam hari dan $A_0$ adalah aktivitas radiasi awal. Jika sampel awal memiliki aktivitas radiasi $160\\text{ mCi}$, berapakah sisa aktivitas radiasi setelah 32 hari penyimpanan?",
    "opsi": [
      "A. $5\\text{ mCi}$",
      "B. $10\\text{ mCi}$",
      "C. $20\\text{ mCi}$",
      "D. $40\\text{ mCi}$",
      "E. $80\\text{ mCi}$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Diketahui aktivitas awal $A_0 = 160\\text{ mCi}$, waktu paruh $T_{1/2} = 8\\text{ hari}$, dan waktu peluruhan $t = 32\\text{ hari}$.\n\nLangkah 2: Hitung pangkat peluruhan:\n$\\frac{t}{8} = \\frac{32}{8} = 4$.\n\nLangkah 3: Hitung sisa zat radioaktif:\n$A(32) = 160 \\times \\left(\\frac{1}{2}\\right)^4 = 160 \\times \\frac{1}{16} = 10\\text{ mCi}$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-W03",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 10 • Logaritma Magnitudo Gempa BMKG",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) mengukur skala kekuatan gempa tektonik menggunakan formula magnitudo Richter $M = \\log\\left(\\frac{I}{I_0}\\right)$, dengan $I$ adalah intensitas fisik gempa dan $I_0$ adalah intensitas gempa ambang minimum. Stasiun geofisika mencatat gempa Padang berkekuatan $M_1 = 6,8$ skala Richter dan gempa susulan Cilacap berkekuatan $M_2 = 4,8$ skala Richter. Berapa kali lipat intensitas fisik gempa Padang dibandingkan dengan gempa Cilacap?",
    "opsi": [
      "A. $2$ kali lipat",
      "B. $20$ kali lipat",
      "C. $50$ kali lipat",
      "D. $100$ kali lipat",
      "E. $200$ kali lipat"
    ],
    "kunci": "D",
    "bahas": "Langkah 1: Tuliskan persamaan logaritma untuk kedua gempa:\n$M_1 = \\log(I_1 / I_0) = 6,8$\n$M_2 = \\log(I_2 / I_0) = 4,8$.\n\nLangkah 2: Kurangkan kedua persamaan:\n$M_1 - M_2 = \\log\\left(\\frac{I_1}{I_0}\\right) - \\log\\left(\\frac{I_2}{I_0}\\right) = \\log\\left(\\frac{I_1}{I_2}\\right)$.\n$6,8 - 4,8 = 2 \\implies \\log\\left(\\frac{I_1}{I_2}\\right) = 2$.\n\nLangkah 3: Ubah ke bentuk eksponen:\n$\\frac{I_1}{I_2} = 10^2 = 100\\text{ kali lipat}$.\n\nKesimpulan: Kunci D benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W04",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 10 • Logaritma Taraf Intensitas Akustik",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Taraf intensitas akustik sebuah sumber bunyi dirumuskan dengan $TI = 10 \\log\\left(\\frac{I}{I_0}\\right)\\text{ dB}$, dengan $I_0 = 10^{-12}\\text{ W/m}^2$. Di apron landasan pacu bandara internasional, sebuah mesin pesawat jet menghasilkan taraf intensitas $TI_1 = 120\\text{ dB}$. Jika terdapat 100 mesin pesawat jet identik yang dinyalakan secara bersamaan, berapakah taraf intensitas gabungan yang dihasilkan?",
    "opsi": [
      "A. $122\\text{ dB}$",
      "B. $130\\text{ dB}$",
      "C. $140\\text{ dB}$",
      "D. $220\\text{ dB}$",
      "E. $240\\text{ dB}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Rumus taraf intensitas untuk $n$ sumber bunyi identik:\n$TI_n = TI_1 + 10 \\log(n)$.\n\nLangkah 2: Substitusikan $TI_1 = 120\\text{ dB}$ dan $n = 100$:\n$TI_{100} = 120 + 10 \\log(100)$.\n\nLangkah 3: Hitung nilai logaritma:\n$\\log(100) = 2 \\implies TI_{100} = 120 + 10(2) = 120 + 20 = 140\\text{ dB}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W05",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 10 • Barisan Aritmetika Hilirisasi Logam",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Sebuah perusahaan smelter hilirisasi nikel meningkatkan volume produksi feronikel secara bertahap. Pada bulan pertama, smelter menghasilkan $120\\text{ ton}$ feronikel. Karena efisiensi mesin baru, setiap bulan berikutnya produksi selalu meningkat secara tetap sebesar $15\\text{ ton}$. Berapakah total volume feronikel yang berhasil diproduksi smelter tersebut selama 1 tahun pertama (12 bulan)?",
    "opsi": [
      "A. $2.160\\text{ ton}$",
      "B. $2.340\\text{ ton}$",
      "C. $2.430\\text{ ton}$",
      "D. $2.580\\text{ ton}$",
      "E. $2.850\\text{ ton}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Modelkan sebagai deret aritmetika dengan suku pertama $a = 120$, beda $b = 15$, dan banyak bulan $n = 12$.\n\nLangkah 2: Gunakan rumus jumlah deret aritmetika $S_n = \\frac{n}{2}[2a + (n - 1)b]$:\n$S_{12} = \\frac{12}{2} [2(120) + (12 - 1)(15)]$.\n\nLangkah 3: Selesaikan perhitungan:\n$S_{12} = 6 [240 + 11(15)] = 6 [240 + 165] = 6 [405] = 2.430\\text{ ton}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W06",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 10 • Deret Geometri Tak Hingga Pantulan Bola",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Pada pengujian kualitas bola tenis di laboratorium olahraga, sebuah bola dijatuhkan dari ketinggian $12\\text{ meter}$ di atas lantai beton keras. Setelah menyentuh lantai, bola memantul kembali ke atas mencapai ketinggian $\\frac{3}{5}$ dari tinggi sebelumnya, lalu jatuh dan memantul lagi secara berulang. Berapakah panjang seluruh lintasan gerak bola sampai akhirnya berhenti di lantai?",
    "opsi": [
      "A. $30\\text{ meter}$",
      "B. $36\\text{ meter}$",
      "C. $48\\text{ meter}$",
      "D. $60\\text{ meter}$",
      "E. $72\\text{ meter}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Gunakan rumus praktis lintasan bola memantul tak hingga dengan ketinggian awal $h = 12$ dan rasio pantulan $\\frac{a}{b} = \\frac{3}{5}$:\n$S_{\\infty} = h \\left(\\frac{b + a}{b - a}\\right)$.\n\nLangkah 2: Substitusikan nilai $h = 12, a = 3, b = 5$:\n$S_{\\infty} = 12 \\times \\left(\\frac{5 + 3}{5 - 3}\\right) = 12 \\times \\frac{8}{2} = 12 \\times 4 = 48\\text{ meter}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W07",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 10 • Bunga Tunggal Deposito Pendidikan Syariah",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Orang tua siswa mendepositokan dana awal sebesar $\\text{Rp}50.000.000$ pada produk simpanan pendidikan dengan bagi hasil bunga tunggal sebesar $6\\%$ per tahun. Jika saat dicairkan total simpanan tersebut telah berkembang menjadi $\\text{Rp}68.000.000$, berapa tahun jangka waktu simpanan dana tersebut di bank?",
    "opsi": [
      "A. $4\\text{ tahun}$",
      "B. $5\\text{ tahun}$",
      "C. $6\\text{ tahun}$",
      "D. $7\\text{ tahun}$",
      "E. $8\\text{ tahun}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Hitung total bunga yang diperoleh:\n$B = M_t - M_0 = 68.000.000 - 50.000.000 = \\text{Rp}18.000.000$.\n\nLangkah 2: Hitung bunga tunggal yang diperoleh per tahun:\n$B_{\\text{tahun}} = 6\\% \\times 50.000.000 = \\text{Rp}3.000.000$.\n\nLangkah 3: Hitung jangka waktu penempatan simpanan ($t$):\n$t = \\frac{B}{B_{\\text{tahun}}} = \\frac{18.000.000}{3.000.000} = 6\\text{ tahun}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-W08",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 10 • SPLDV Pengadaan Komputer Sekolah",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Tim IT sekolah melakukan pengadaan perangkat laboratorium komputer. Pembelian 3 unit printer laser dan 5 unit scanner flatbed membutuhkan biaya $\\text{Rp}19.500.000$. Pada toko penyedia yang sama, pembelian 2 unit printer laser dan 3 unit scanner flatbed jenis identik menghabiskan biaya $\\text{Rp}12.300.000$. Berapakah total harga jika panitia membeli tepat 1 unit printer laser dan 1 unit scanner flatbed?",
    "opsi": [
      "A. $\\text{Rp}4.800.000$",
      "B. $\\text{Rp}5.100.000$",
      "C. $\\text{Rp}5.400.000$",
      "D. $\\text{Rp}5.700.000$",
      "E. $\\text{Rp}6.000.000$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Misalkan harga printer laser $= x$ dan harga scanner $= y$ (dalam jutaan rupiah).\nModel matematika:\n(1) $3x + 5y = 19,5$\n(2) $2x + 3y = 12,3$\n\nLangkah 2: Eliminasi $x$:\nKalikan (1) dengan 2: $6x + 10y = 39,0$\nKalikan (2) dengan 3: $6x + 9y = 36,9$\nKurangkan: $y = 2,1$ (harga scanner = Rp2.100.000).\n\nLangkah 3: Substitusikan $y = 2,1$ ke persamaan (2):\n$2x + 3(2,1) = 12,3 \\implies 2x + 6,3 = 12,3 \\implies 2x = 6,0 \\implies x = 3,0$ (harga printer = Rp3.000.000).\n\nLangkah 4: Hitung harga 1 printer dan 1 scanner:\n$x + y = 3,0 + 2,1 = 5,1\\text{ juta} = \\text{Rp}5.100.000$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W09",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 10 • SPLTV Paket Pupuk Pertanian Modern",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Kelompok tani modern memesan tiga jenis pupuk (Urea, SP-36, dan NPK) dalam tiga paket bundling. Paket A berisi 1 karung Urea, 2 karung SP-36, dan 1 karung NPK seharga $\\text{Rp}190.000$. Paket B berisi 2 karung Urea, 1 karung SP-36, dan 3 karung NPK seharga $\\text{Rp}320.000$. Paket C berisi 3 karung Urea, 2 karung SP-36, dan 2 karung NPK seharga $\\text{Rp}350.000$. Berapakah harga satuan untuk 1 karung pupuk NPK?",
    "opsi": [
      "A. $\\text{Rp}40.000$",
      "B. $\\text{Rp}50.000$",
      "C. $\\text{Rp}60.000$",
      "D. $\\text{Rp}70.000$",
      "E. $\\text{Rp}80.000$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Misalkan harga Urea $= u$, SP-36 $= s$, NPK $= n$ (dalam ribuan rupiah):\n(1) $u + 2s + n = 190$\n(2) $2u + s + 3n = 320$\n(3) $3u + 2s + 2n = 350$\n\nLangkah 2: Kurangkan persamaan (3) dengan persamaan (1):\n$(3u + 2s + 2n) - (u + 2s + n) = 350 - 190$\n$2u + n = 160 \\implies 2u = 160 - n$.\n\nLangkah 3: Dari persamaan (2), nyatakan $s$ dalam $u$ dan $n$:\n$s = 320 - 2u - 3n = 320 - (160 - n) - 3n = 160 - 2n$.\n\nLangkah 4: Substitusikan ke persamaan (1) dikali 2:\n$2u + 4s + 2n = 380$\n$(160 - n) + 4(160 - 2n) + 2n = 380$\n$160 - n + 640 - 8n + 2n = 380$\n$800 - 7n = 380 \\implies 7n = 420 \\implies n = 60$.\n\nJadi, harga 1 karung pupuk NPK adalah Rp60.000.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W10",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 10 • Trigonometri Klinometer Menara BTS",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Seorang teknisi telekomunikasi mengukur tinggi menara pemancar BTS menggunakan klinometer dari titik tanah datar berjarak $20\\text{ meter}$ dari dasar pondasi menara. Sudut elevasi klinometer ke puncak menara terbaca sebesar $60^\\circ$. Jika tinggi mata teknisi dari permukaan tanah adalah $1,6\\text{ meter}$, berapakah tinggi total menara pemancar BTS tersebut?",
    "opsi": [
      "A. $(1,6 + 10\\sqrt{3})\\text{ meter}$",
      "B. $(1,6 + 20\\sqrt{3})\\text{ meter}$",
      "C. $(1,6 + 40\\sqrt{3})\\text{ meter}$",
      "D. $(1,6 + 20\\sqrt{2})\\text{ meter}$",
      "E. $(1,6 + 30\\sqrt{3})\\text{ meter}$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Buat pemodelan segitiga siku-siku antara posisi mata teknisi, garis horizontal, dan puncak menara:\nJarak horizontal $x = 20\\text{ m}$, sudut elevasi $\\alpha = 60^\\circ$.\n\nLangkah 2: Hitung tinggi relatif puncak menara di atas garis mata ($y$):\n$\\tan(60^\\circ) = \\frac{y}{x} \\implies \\sqrt{3} = \\frac{y}{20} \\implies y = 20\\sqrt{3}\\text{ meter}$.\n\nLangkah 3: Hitung tinggi total menara dari permukaan tanah:\n$H = h_{\\text{mata}} + y = (1,6 + 20\\sqrt{3})\\text{ meter}$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-W11",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 10 • Aturan Cosinus Navigasi Kapal Patroli",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Dua kapal patroli Badan Keamanan Laut (Bakamla) bertolak secara serentak dari dermaga pangkalan yang sama di titik $O$. Kapal pertama berlayar ke arah timur laut sejauh $6\\text{ mil laut}$, sedangkan kapal kedua berlayar ke arah yang membentuk sudut $60^\\circ$ terhadap lintasan kapal pertama sejauh $10\\text{ mil laut}$. Berapakah jarak langsung antara kedua kapal patroli tersebut pada posisi terakhir?",
    "opsi": [
      "A. $2\\sqrt{17}\\text{ mil laut}$",
      "B. $2\\sqrt{19}\\text{ mil laut}$",
      "C. $4\\sqrt{5}\\text{ mil laut}$",
      "D. $2\\sqrt{21}\\text{ mil laut}$",
      "E. $8\\text{ mil laut}$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Modelkan posisi kedua kapal dengan Aturan Cosinus pada segitiga dengan sisi $a = 6$, $b = 10$, dan sudut apit $\\theta = 60^\\circ$:\n$d^2 = a^2 + b^2 - 2ab \\cos(\\theta)$.\n\nLangkah 2: Masukkan nilai yang diketahui:\n$d^2 = 6^2 + 10^2 - 2(6)(10) \\cos(60^\\circ)$\n$d^2 = 36 + 100 - 120(0,5)$\n$d^2 = 136 - 60 = 76$.\n\nLangkah 3: Sederhanakan bentuk akar:\n$d = \\sqrt{76} = \\sqrt{4 \\times 19} = 2\\sqrt{19}\\text{ mil laut}$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W12",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 10 • Aturan Sinus Triangulasi Pos SAR",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Tim SAR mendeteksi sinyal darurat pendaki di titik $C$ melalui dua pos pantau $A$ dan $B$ yang berjarak $8\\sqrt{2}\\text{ km}$. Berdasarkan pembacaan sudut kompas, sudut $\\angle CAB = 105^\\circ$ dan sudut $\\angle CBA = 30^\\circ$. Berapakah jarak langsung dari pos pantau $A$ ke titik sinyal pendaki $C$?",
    "opsi": [
      "A. $4\\sqrt{2}\\text{ km}$",
      "B. $6\\text{ km}$",
      "C. $8\\text{ km}$",
      "D. $8\\sqrt{2}\\text{ km}$",
      "E. $12\\text{ km}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Hitung besar sudut $\\angle C$ pada segitiga $ABC$:\n$\\angle C = 180^\\circ - (105^\\circ + 30^\\circ) = 180^\\circ - 135^\\circ = 45^\\circ$.\n\nLangkah 2: Gunakan Aturan Sinus untuk mencari jarak $AC$:\n$\\frac{AC}{\\sin(\\angle CBA)} = \\frac{AB}{\\sin(\\angle C)}$.\n\nLangkah 3: Masukkan nilai sudut dan panjang $AB = 8\\sqrt{2}$:\n$\\frac{AC}{\\sin(30^\\circ)} = \\frac{8\\sqrt{2}}{\\sin(45^\\circ)}$\n$\\frac{AC}{1/2} = \\frac{8\\sqrt{2}}{\\sqrt{2}/2} = 16 \\implies AC = 16 \\times \\frac{1}{2} = 8\\text{ km}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W13",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 10 • Pola Satuan Eksponen Kriptografi",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Protokol enkripsi data digital kunci privat memanfaatkan siklus keteraturan angka satuan dari perpangkatan bilangan bulat besar $7^{2026}$. Berapakah angka satuan (digit terakhir) dari bilangan hasil perpangkatan $7^{2026}$ tersebut?",
    "opsi": [
      "A. $1$",
      "B. $3$",
      "C. $7$",
      "D. $9$",
      "E. $5$"
    ],
    "kunci": "D",
    "bahas": "Langkah 1: Amati pola angka satuan perpangkatan 7:\n$7^1 = 7$\n$7^2 = 49 \\implies 9$\n$7^3 = 343 \\implies 3$\n$7^4 = 2401 \\implies 1$\n$7^5 = 16807 \\implies 7$ (berulang setiap periode 4).\n\nLangkah 2: Bagi eksponen 2026 dengan periode 4:\n$2026 = 4 \\times 506 + 2$ (bersisa 2).\n\nLangkah 3: Karena bersisa 2, angka satuannya identik dengan $7^2$, yaitu 9.\n\nKesimpulan: Kunci D benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-W14",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 10 • Sistem Pertidaksamaan Efisiensi Logistik",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Manajer proyek konstruksi IKN menyewa dua jenis armada pengangkut material: Truk Tipe X (kapasitas 4 ton, biaya sewa Rp1.000.000/hari) dan Truk Tipe Y (kapasitas 6 ton, biaya sewa Rp1.200.000/hari). Total material tanah yang wajib dipindahkan setiap hari minimal $120\\text{ ton}$. Berapakah jumlah armada Truk Tipe Y yang harus disewa agar target angkutan terpenuhi dengan total pengeluaran biaya sewa serendah mungkin?",
    "opsi": [
      "A. $10\\text{ unit}$",
      "B. $15\\text{ unit}$",
      "C. $20\\text{ unit}$",
      "D. $25\\text{ unit}$",
      "E. $30\\text{ unit}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Modelkan fungsi kendala dan biaya:\nKendala kapasitas: $4x + 6y \\ge 120 \\iff 2x + 3y \\ge 60$ ($x, y \\ge 0$).\nFungsi objektif biaya minimum: $Z = 1.000.000x + 1.200.000y$.\n\nLangkah 2: Analisis efisiensi biaya per ton material:\nTruk X: $\\frac{1.000.000}{4} = \\text{Rp}250.000\\text{ per ton}$.\nTruk Y: $\\frac{1.200.000}{6} = \\text{Rp}200.000\\text{ per ton}$.\nKarena Truk Y lebih hemat biaya per ton, armada harus dimaksimalkan pada Truk Y.\n\nLangkah 3: Uji titik pojok daerah penyelesaian:\nTitik $(0, 20) \\implies Z = 1.200.000(20) = \\text{Rp}24.000.000$ (semua Truk Y).\nTitik $(30, 0) \\implies Z = 1.000.000(30) = \\text{Rp}30.000.000$.\nBiaya minimum dicapai saat menyewa 20 unit Truk Tipe Y dan 0 unit Truk Tipe X.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W15",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 10 • Bentuk Akar Struktur Kanopi Stasiun",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Dalam desain arsitektur atap kanopi stasiun LRT, panjang balok baja penyangga dinyatakan dalam bentuk pecahan akar $\\frac{12}{\\sqrt{7} - \\sqrt{3}}\\text{ meter}$. Bentuk ekuivalen yang telah dirasionalkan penyebutnya untuk mempermudah fabrikasi konstruksi adalah...",
    "opsi": [
      "A. $(2\\sqrt{7} + 2\\sqrt{3})\\text{ meter}$",
      "B. $(3\\sqrt{7} + 3\\sqrt{3})\\text{ meter}$",
      "C. $(4\\sqrt{7} + 4\\sqrt{3})\\text{ meter}$",
      "D. $(6\\sqrt{7} + 6\\sqrt{3})\\text{ meter}$",
      "E. $(3\\sqrt{7} - 3\\sqrt{3})\\text{ meter}$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Kalikan pembilang dan penyebut dengan bentuk sekawan penyebut $(\\sqrt{7} + \\sqrt{3})$:\n$\\frac{12}{\\sqrt{7} - \\sqrt{3}} \\times \\frac{\\sqrt{7} + \\sqrt{3}}{\\sqrt{7} + \\sqrt{3}}$.\n\nLangkah 2: Selesaikan bentuk selisih kuadrat di penyebut:\n$(\\sqrt{7})^2 - (\\sqrt{3})^2 = 7 - 3 = 4$.\n\nLangkah 3: Sederhanakan pecahan:\n$\\frac{12(\\sqrt{7} + \\sqrt{3})}{4} = 3(\\sqrt{7} + \\sqrt{3}) = (3\\sqrt{7} + 3\\sqrt{3})\\text{ meter}$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-W16",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 11 • Fungsi Komposisi Dua Tahap Mesin Tekstil",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Sebuah pabrik tekstil memproduksi kain melalui dua tahapan mesin berurutan. Mesin I memproses $x$ ton serat kapas menjadi bahan benang melalui rumus $f(x) = 3x - 2$. Mesin II mengolah bahan benang $m$ menjadi gulungan kain siap jual melalui rumus $g(m) = 2m^2 + 5$. Jika bahan baku serat kapas yang dimasukkan ke mesin I adalah $4\\text{ ton}$, berapakah total ton gulungan kain yang dihasilkan pabrik tersebut?",
    "opsi": [
      "A. $195\\text{ ton}$",
      "B. $200\\text{ ton}$",
      "C. $205\\text{ ton}$",
      "D. $210\\text{ ton}$",
      "E. $225\\text{ ton}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Hitung hasil produksi benang dari Mesin I dengan $x = 4$:\n$f(4) = 3(4) - 2 = 12 - 2 = 10\\text{ ton benang}$.\n\nLangkah 2: Masukkan hasil $m = 10$ ke Mesin II:\n$g(10) = 2(10)^2 + 5 = 2(100) + 5 = 200 + 5 = 205\\text{ ton gulungan kain}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W17",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 11 • Fungsi Komposisi Diskon Ganda Toko",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Pusat perbelanjaan memberikan promosi diskon bertingkat untuk pembelian laptop: diskon pertama sebesar $20\\%$ melalui fungsi $f(x) = 0,8x$, dilanjutkan potongan voucher cashback sebesar $\\text{Rp}50.000$ melalui fungsi $g(x) = x - 50.000$. Jika harga banderol awal laptop adalah $\\text{Rp}8.000.000$, berapakah harga akhir yang harus dibayar konsumen setelah penerapan komposisi $(g \\circ f)(x)$?",
    "opsi": [
      "A. $\\text{Rp}6.300.000$",
      "B. $\\text{Rp}6.350.000$",
      "C. $\\text{Rp}6.400.000$",
      "D. $\\text{Rp}6.450.000$",
      "E. $\\text{Rp}6.500.000$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Terapkan fungsi diskon pertama $f(x)$ pada harga awal $x = 8.000.000$:\n$f(8.000.000) = 0,8 \\times 8.000.000 = 6.400.000$.\n\nLangkah 2: Terapkan fungsi potongan voucher $g(x)$ pada hasil tahap pertama:\n$(g \\circ f)(8.000.000) = g(6.400.000) = 6.400.000 - 50.000 = \\text{Rp}6.350.000$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-W18",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 11 • Fungsi Invers Konversi Valuta Asing",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Sebuah loket penukaran valuta asing (money changer) melayani konversi dari mata uang Dolar AS ($x$) ke mata uang Rupiah ($y$) dengan aturan fungsi $f(x) = 15.500x - 25.000$ (setelah dikurangi biaya administrasi tetap $\\text{Rp}25.000$). Jika seorang turis menerima uang tunai Rupiah sebesar $\\text{Rp}46.475.000$, berapa nilai nominal Dolar AS yang ia tukarkan?",
    "opsi": [
      "A. $2.500\\text{ USD}$",
      "B. $2.800\\text{ USD}$",
      "C. $3.000\\text{ USD}$",
      "D. $3.200\\text{ USD}$",
      "E. $3.500\\text{ USD}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Bentuk persamaan dari aturan fungsi $y = f(x)$:\n$15.500x - 25.000 = 46.475.000$.\n\nLangkah 2: Selesaikan nilai $x$:\n$15.500x = 46.475.000 + 25.000 = 46.500.000$.\n$x = \\frac{46.500.000}{15.500} = 3.000\\text{ USD}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W19",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 11 • Fungsi Invers Pecahan Rasional",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Konsentrasi larutan desinfektan dalam tangki pencucian diatur menurut fungsi rasional $f(x) = \\frac{4x + 1}{2x - 3}$ dengan $x \\neq \\frac{3}{2}$. Rumus fungsi invers $f^{-1}(x)$ untuk menentukan kembali dosis bahan asal adalah...",
    "opsi": [
      "A. $f^{-1}(x) = \\frac{3x + 1}{2x - 4}, \\quad x \\neq 2$",
      "B. $f^{-1}(x) = \\frac{3x - 1}{2x - 4}, \\quad x \\neq 2$",
      "C. $f^{-1}(x) = \\frac{4x + 3}{2x - 1}, \\quad x \\neq \\frac{1}{2}$",
      "D. $f^{-1}(x) = \\frac{2x + 1}{4x - 3}, \\quad x \\neq \\frac{3}{4}$",
      "E. $f^{-1}(x) = \\frac{3x + 1}{2x + 4}, \\quad x \\neq -2$"
    ],
    "kunci": "A",
    "bahas": "Langkah 1: Rumus cepat invers fungsi rasional $f(x) = \\frac{ax + b}{cx + d} \\implies f^{-1}(x) = \\frac{-dx + b}{cx - a}$.\n\nLangkah 2: Identifikasi koefisien:\n$a = 4, b = 1, c = 2, d = -3$.\n\nLangkah 3: Substitusikan ke rumus:\n$f^{-1}(x) = \\frac{-(-3)x + 1}{2x - 4} = \\frac{3x + 1}{2x - 4}, \\quad x \\neq 2$.\n\nKesimpulan: Kunci A benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W20",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 11 • Operasi Matriks Omzet Cabang Restoran",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Manajemen restoran mencatat jumlah porsi Paket Nasi ($N$) dan Paket Minuman ($M$) yang terjual di Cabang A dan Cabang B dalam matriks penjualan $S = \\begin{pmatrix} 40 & 60 \\\\ 25 & 35 \\end{pmatrix}$ (baris 1 = Cabang A, baris 2 = Cabang B). Jika harga per porsi dinyatakan dalam matriks kolom harga $P = \\begin{pmatrix} 20.000 \\\\ 8.000 \\end{pmatrix}$, berapakah total omzet pendapatan penjualan khusus di Cabang A?",
    "opsi": [
      "A. $\\text{Rp}1.120.000$",
      "B. $\\text{Rp}1.240.000$",
      "C. $\\text{Rp}1.280.000$",
      "D. $\\text{Rp}1.320.000$",
      "E. $\\text{Rp}1.400.000$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Kalikan baris 1 matriks penjualan dengan matriks kolom harga:\nOmzet Cabang A $= 40(20.000) + 60(8.000)$.\n\nLangkah 2: Selesaikan perkalian:\nOmzet Cabang A $= 800.000 + 480.000 = \\text{Rp}1.280.000$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-W21",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 11 • Determinan Matriks Syarat Singular",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Dalam analisis kestabilan jaringan transmisi listrik, matriks impedansi $M = \\begin{pmatrix} 2k & 4 \\\\ 6 & k + 1 \\end{pmatrix}$ harus memiliki determinan sama dengan nol (matriks singular). Nilai-nilai konstanta $k$ yang memenuhi kondisi tersebut adalah...",
    "opsi": [
      "A. $k = 2$ atau $k = -6$",
      "B. $k = 3$ atau $k = -4$",
      "C. $k = 4$ atau $k = -3$",
      "D. $k = 1$ atau $k = -12$",
      "E. $k = 6$ atau $k = -2$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Rumus determinan matriks $2 \\times 2$:\n$\\det(M) = (2k)(k + 1) - (4)(6) = 0$.\n\nLangkah 2: Sederhanakan persamaan kuadrat:\n$2k^2 + 2k - 24 = 0$.\nBagi kedua ruas dengan 2:\n$k^2 + k - 12 = 0$.\n\nLangkah 3: Faktorkan persamaan kuadrat:\n$(k + 4)(k - 3) = 0 \\implies k = 3$ atau $k = -4$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W22",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 11 • Invers Matriks Sandi Hill Cipher",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Dalam sistem keamanan sandi matriks (Hill Cipher), pesan teks dienkripsi dengan matriks kunci $K = \\begin{pmatrix} 3 & 5 \\\\ 1 & 2 \\end{pmatrix}$. Untuk memecahkan dan membaca kembali pesan asli (dekripsi), penerima membutuhkan matriks invers $K^{-1}$. Matriks invers $K^{-1}$ tersebut adalah...",
    "opsi": [
      "A. $\\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$",
      "B. $\\begin{pmatrix} -2 & 5 \\\\ 1 & -3 \\end{pmatrix}$",
      "C. $\\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix}$",
      "D. $\\begin{pmatrix} 2 & 5 \\\\ 1 & 3 \\end{pmatrix}$",
      "E. $\\begin{pmatrix} 1 & -5 \\\\ -1 & 3 \\end{pmatrix}$"
    ],
    "kunci": "A",
    "bahas": "Langkah 1: Hitung determinan matriks $K$:\n$\\det(K) = (3)(2) - (5)(1) = 6 - 5 = 1$.\n\nLangkah 2: Rumus invers matriks $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}^{-1} = \\frac{1}{\\det} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$:\n$K^{-1} = \\frac{1}{1} \\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix} = \\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$.\n\nKesimpulan: Kunci A benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-W23",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 11 • Transformasi Translasi Crane Dermaga",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Sebuah crane gantry otomatis di pelabuhan peti kemas memindahkan kontainer dari koordinat posisi awal $A(4, -7)$ melalui translasi $T_1 = \\begin{pmatrix} -6 \\\\ 9 \\end{pmatrix}$, kemudian digeser kembali oleh translasi kedua $T_2 = \\begin{pmatrix} 5 \\\\ -3 \\end{pmatrix}$. Di manakah koordinat posisi akhir kontainer tersebut diletakkan?",
    "opsi": [
      "A. $(3, 1)$",
      "B. $(3, -1)$",
      "C. $(-2, 2)$",
      "D. $(5, -1)$",
      "E. $(1, -3)$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Gabungkan kedua vektor translasi:\n$T_{\\text{total}} = T_1 + T_2 = \\begin{pmatrix} -6 + 5 \\\\ 9 + (-3) \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ 6 \\end{pmatrix}$.\n\nLangkah 2: Tambahkan translasi total ke koordinat awal $A(4, -7)$:\n$x' = 4 + (-1) = 3$\n$y' = -7 + 6 = -1$.\nPosisi akhir kontainer adalah $(3, -1)$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-W24",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 11 • Transformasi Refleksi dan Rotasi Radar",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Titik koordinat sinyal pesawat pada layar radar pengawas udara mula-mula berada pada posisi $P(-3, 5)$. Layar radar melakukan kalibrasi dengan merefleksikan posisi tersebut terhadap garis $y = x$, kemudian memutarnya sebesar $90^\\circ$ berlawanan arah putaran jarum jam dengan pusat $O(0, 0)$. Koordinat akhir sinyal pesawat setelah kalibrasi adalah...",
    "opsi": [
      "A. $(-5, -3)$",
      "B. $(3, -5)$",
      "C. $(3, 5)$",
      "D. $(-3, 5)$",
      "E. $(5, 3)$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Refleksi terhadap garis $y = x$:\n$(x, y) \\to (y, x)$.\nTitik awal $P(-3, 5) \\implies P'(5, -3)$.\n\nLangkah 2: Rotasi $R(O, 90^\\circ)$ berlawanan arah jarum jam:\n$(x', y') \\to (-y', x')$.\nDari $P'(5, -3) \\implies P''(-(-3), 5) = P''(3, 5)$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W25",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 11 • Transformasi Dilatasi Skala Masterplan",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Pada dokumen masterplan digital tata ruang, sebuah bidang lahan hijau berbentuk segitiga memiliki luas awal $15\\text{ cm}^2$. Tim arsitek memperbesar gambar tersebut menggunakan transformasi dilatasi berpusat di titik $P(1, 2)$ dengan faktor skala $k = 4$. Berapakah luas bidang lahan hijau tersebut pada gambar rancangan setelah didilatasi?",
    "opsi": [
      "A. $60\\text{ cm}^2$",
      "B. $120\\text{ cm}^2$",
      "C. $180\\text{ cm}^2$",
      "D. $240\\text{ cm}^2$",
      "E. $300\\text{ cm}^2$"
    ],
    "kunci": "D",
    "bahas": "Langkah 1: Pahami sifat dilatasi bangun datar 2 dimensi:\nJika suatu bidang datar didilatasi dengan faktor skala $k$, maka luas bayangannya adalah $L' = k^2 \\times L$.\n\nLangkah 2: Substitusikan faktor skala $k = 4$ dan luas awal $L = 15\\text{ cm}^2$:\n$L' = 4^2 \\times 15 = 16 \\times 15 = 240\\text{ cm}^2$.\n\nKesimpulan: Kunci D benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W26",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 11 • Polinomial Teorema Sisa Reaksi Kimia",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Persamaan laju reaksi dalam reaktor kimia dikarakterisasi oleh suku banyak polinomial $P(x) = 2x^3 - 5x^2 + 4x + k$. Berdasarkan pengukuran sensor, ketika fungsi reaksi tersebut dibagi oleh $(x - 2)$, nilai sisa reaksinya tepat sebesar $11$. Berapakah nilai dari konstanta reaksi $k$?",
    "opsi": [
      "A. $3$",
      "B. $5$",
      "C. $7$",
      "D. $9$",
      "E. $11$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Berdasarkan Teorema Sisa Polinomial, jika $P(x)$ dibagi $(x - c)$, maka sisanya adalah $S = P(c)$.\nDalam soal ini pembagi adalah $(x - 2)$, maka $S = P(2) = 11$.\n\nLangkah 2: Hitung nilai $P(2)$:\n$P(2) = 2(2)^3 - 5(2)^2 + 4(2) + k = 11$\n$2(8) - 5(4) + 8 + k = 11$\n$16 - 20 + 8 + k = 11$\n$4 + k = 11 \\implies k = 7$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W27",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 11 • GSPL Gir Transmisi Sepeda",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Sistem transmisi rantai mengaitkan dua gir lingkaran dengan jari-jari masing-masing $R = 14\\text{ cm}$ dan $r = 5\\text{ cm}$. Jika jarak antara kedua poros sumbu pusat gir adalah $15\\text{ cm}$, berapakah panjang rentangan bebas rantai pada garis singgung persekutuan luar ($GSPL$)?",
    "opsi": [
      "A. $10\\text{ cm}$",
      "B. $11\\text{ cm}$",
      "C. $12\\text{ cm}$",
      "D. $13\\text{ cm}$",
      "E. $14\\text{ cm}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Rumus panjang garis singgung persekutuan luar dua lingkaran:\n$d = \\sqrt{p^2 - (R - r)^2}$.\n\nLangkah 2: Masukkan nilai $p = 15, R = 14, r = 5$:\n$R - r = 14 - 5 = 9\\text{ cm}$.\n$d = \\sqrt{15^2 - 9^2} = \\sqrt{225 - 81} = \\sqrt{144} = 12\\text{ cm}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-W28",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 11 • Sudut Pusat dan Sudut Keliling Kubah",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Pada struktur lingkaran penyangga kubah masjid agung, busur $AB$ menghadap ke sudut pusat lingkaran $\\angle AOB = 110^\\circ$. Titik $C$ terletak pada lengkungan busur mayor lingkaran yang sama menghadap ke busur $AB$. Berapakah besar sudut keliling $\\angle ACB$?",
    "opsi": [
      "A. $45^\\circ$",
      "B. $55^\\circ$",
      "C. $65^\\circ$",
      "D. $70^\\circ$",
      "E. $110^\\circ$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Teorema sudut lingkaran menyatakan bahwa jika sudut keliling dan sudut pusat menghadap busur yang sama, maka:\n$\\text{Sudut Keliling} = \\frac{1}{2} \\times \\text{Sudut Pusat}$.\n\nLangkah 2: Hitung besar $\\angle ACB$:\n$\\angle ACB = \\frac{1}{2} \\times 110^\\circ = 55^\\circ$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-W29",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 11 • Luas Juring Panel Surya Satelit",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Sayap panel surya satelit komunikasi SATRIA berbentuk juring lingkaran dengan sudut pusat $\\alpha = 60^\\circ$ dan jari-jari $r = 21\\text{ cm}$. Menggunakan pendekatan $\\pi = \\frac{22}{7}$, berapakah luas permukaan panel surya tersebut?",
    "opsi": [
      "A. $154\\text{ cm}^2$",
      "B. $198\\text{ cm}^2$",
      "C. $231\\text{ cm}^2$",
      "D. $264\\text{ cm}^2$",
      "E. $462\\text{ cm}^2$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Rumus luas juring lingkaran:\n$L = \\frac{\\alpha}{360^\\circ} \\times \\pi r^2$.\n\nLangkah 2: Masukkan $\\alpha = 60^\\circ, r = 21, \\pi = \\frac{22}{7}$:\n$L = \\frac{60^\\circ}{360^\\circ} \\times \\frac{22}{7} \\times 21 \\times 21$.\n\nLangkah 3: Sederhanakan perhitungan:\n$L = \\frac{1}{6} \\times 22 \\times 3 \\times 21 = \\frac{1}{6} \\times 66 \\times 21 = 11 \\times 21 = 231\\text{ cm}^2$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-W30",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 11 • Menjodohkan Sifat Aljabar dan Invers",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Perhatikan premis hubungan aljabar fungsi berikut:\n(1) Nilai dari $(f \\circ f^{-1})(x)$\n(2) Syarat matematis mutlak agar fungsi $f(x)$ memiliki fungsi invers $f^{-1}(x)$\n(3) Bentuk penguraian dari invers komposisi $(f \\circ g)^{-1}(x)$\n(4) Nilai determinan dari matriks identitas $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$\n\nPasangan yang benar berturut-turut untuk premis (1), (2), (3), dan (4) adalah...",
    "opsi": [
      "A. (1) $x$, (2) Fungsi Bijektif, (3) $(g^{-1} \\circ f^{-1})(x)$, (4) $1$",
      "B. (1) $1$, (2) Fungsi Surjektif, (3) $(f^{-1} \\circ g^{-1})(x)$, (4) $0$",
      "C. (1) $x$, (2) Fungsi Injektif, (3) $(f^{-1} \\circ g^{-1})(x)$, (4) $1$",
      "D. (1) $0$, (2) Fungsi Bijektif, (3) $(g^{-1} \\circ f^{-1})(x)$, (4) $2$",
      "E. (1) $x^2$, (2) Fungsi Kontinu, (3) $(g \\circ f)^{-1}(x)$, (4) $1$"
    ],
    "kunci": "A",
    "bahas": "Langkah 1: Evaluasi premis (1): Komposisi suatu fungsi dengan inversnya selalu menghasilkan fungsi identitas, yaitu $(f \\circ f^{-1})(x) = x$.\nLangkah 2: Evaluasi premis (2): Fungsi memiliki invers jika dan hanya jika fungsi tersebut bijektif (injektif sekaligus surjektif / korespondensi satu-satu).\nLangkah 3: Evaluasi premis (3): Invers dari komposisi fungsi membalik urutan, yaitu $(f \\circ g)^{-1}(x) = (g^{-1} \\circ f^{-1})(x)$.\nLangkah 4: Evaluasi premis (4): Determinan matriks identitas ordo $2 \\times 2$ adalah $(1)(1) - (0)(0) = 1$.\n\nKesimpulan: Kunci A benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W31",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 12 • Geometri Tiga Dimensi Jarak Titik ke Garis",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Sebuah rak server komputer berbentuk balok $ABCD.EFGH$ memiliki dimensi panjang $AB = 8\\text{ cm}$, lebar $BC = 6\\text{ cm}$, dan tinggi $CG = 10\\text{ cm}$. Berapakah jarak tegak lurus dari titik sudut $A$ ke garis diagonal bidang alas $BD$?",
    "opsi": [
      "A. $3,6\\text{ cm}$",
      "B. $4,2\\text{ cm}$",
      "C. $4,8\\text{ cm}$",
      "D. $5,0\\text{ cm}$",
      "E. $5,4\\text{ cm}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Perhatikan segitiga siku-siku $ABD$ pada bidang alas, siku-siku di $A$.\nPanjang $AB = 8\\text{ cm}$, $AD = BC = 6\\text{ cm}$.\nPanjang hipotenusa $BD = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = 10\\text{ cm}$.\n\nLangkah 2: Jarak titik $A$ ke garis $BD$ adalah tinggi segitiga $h$ yang ditarik dari $A$ ke $BD$ tegak lurus.\nGunakan kesamaan luas segitiga $ABD$:\n$\\text{Luas} = \\frac{1}{2} \\times AB \\times AD = \\frac{1}{2} \\times BD \\times h$.\n$8 \\times 6 = 10 \\times h \\implies 48 = 10h \\implies h = 4,8\\text{ cm}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W32",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 12 • Geometri Tiga Dimensi Titik Tengah ke Diagonal Ruang",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Pada kubus $ABCD.EFGH$ dengan panjang rusuk $6\\text{ cm}$, titik $M$ terletak tepat di tengah-tengah rusuk $EH$. Berapakah jarak tegak lurus dari titik $M$ ke garis diagonal ruang $AG$?",
    "opsi": [
      "A. $2\\sqrt{2}\\text{ cm}$",
      "B. $2\\sqrt{3}\\text{ cm}$",
      "C. $3\\sqrt{2}\\text{ cm}$",
      "D. $3\\sqrt{3}\\text{ cm}$",
      "E. $4\\sqrt{2}\\text{ cm}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Tetapkan sistem koordinat Cartesius dengan titik $A(0, 0, 0)$ sebagai pusat:\n$G(6, 6, 6)$, rusuk $EH$ menghubungkan $E(0, 0, 6)$ dan $H(0, 6, 6)$.\nTitik tengah $M = \\left(0, \\frac{0+6}{2}, 6\\right) = (0, 3, 6)$.\n\nLangkah 2: Tentukan vektor posisi:\n$\\vec{AG} = (6, 6, 6)$, vektor satuan searah $\\vec{AG}$ adalah $\\vec{u} = \\frac{1}{\\sqrt{3}}(1, 1, 1)$.\nVektor $\\vec{AM} = (0, 3, 6)$.\n\nLangkah 3: Hitung proyeksi skalar $\\vec{AM}$ pada arah $\\vec{AG}$:\n$p = \\vec{AM} \\cdot \\vec{u} = \\frac{0(1) + 3(1) + 6(1)}{\\sqrt{3}} = \\frac{9}{\\sqrt{3}} = 3\\sqrt{3}$.\n\nLangkah 4: Hitung jarak tegak lurus $d$ menggunakan teorema Pythagoras vektor:\n$|\\vec{AM}|^2 = 0^2 + 3^2 + 6^2 = 9 + 36 = 45$.\n$d = \\sqrt{|\\vec{AM}|^2 - p^2} = \\sqrt{45 - (3\\sqrt{3})^2} = \\sqrt{45 - 27} = \\sqrt{18} = 3\\sqrt{2}\\text{ cm}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 3 (Sulit / HOTS)"
  },
  {
    "id": "W43-W33",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 12 • Geometri Tiga Dimensi Jarak Titik ke Bidang Kubus",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Pada kubus $ABCD.EFGH$ dengan panjang rusuk $12\\text{ cm}$, berapakah jarak dari titik sudut $C$ ke bidang segitiga $BDG$?",
    "opsi": [
      "A. $2\\sqrt{3}\\text{ cm}$",
      "B. $3\\sqrt{3}\\text{ cm}$",
      "C. $4\\sqrt{3}\\text{ cm}$",
      "D. $6\\sqrt{3}\\text{ cm}$",
      "E. $8\\sqrt{3}\\text{ cm}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Teorema bidang pembagi diagonal ruang pada kubus:\nDiagonal ruang $CE$ memotong tegak lurus bidang $BDG$ dan bidang $AFH$.\nJarak dari titik $C$ ke bidang $BDG$ adalah tepat $\\frac{1}{3}$ dari panjang diagonal ruang $CE$.\n\nLangkah 2: Hitung panjang diagonal ruang $CE$:\n$CE = s\\sqrt{3} = 12\\sqrt{3}\\text{ cm}$.\n\nLangkah 3: Hitung jarak titik $C$ ke bidang $BDG$:\n$d = \\frac{1}{3} \\times 12\\sqrt{3} = 4\\sqrt{3}\\text{ cm}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W34",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 12 • Sudut Rusuk Tegak dan Bidang Alas Limas",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Sebuah limas tegak beraturan $T.ABCD$ memiliki alas persegi dengan panjang rusuk alas $6\\text{ cm}$ dan panjang rusuk tegak $6\\text{ cm}$. Jika $\\alpha$ menyatakan besar sudut antara rusuk tegak $TA$ dan bidang alas $ABCD$, berapakah nilai dari $\\cos(\\alpha)$?",
    "opsi": [
      "A. $\\frac{1}{2}$",
      "B. $\\frac{1}{2}\\sqrt{2}$",
      "C. $\\frac{1}{2}\\sqrt{3}$",
      "D. $\\frac{1}{3}\\sqrt{3}$",
      "E. $\\frac{2}{3}\\sqrt{2}$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Proyeksikan titik puncak $T$ ke bidang alas $ABCD$, jatuh di titik pusat diagonal $O$.\nSudut antara $TA$ dan bidang alas adalah $\\alpha = \\angle TAO$.\n\nLangkah 2: Hitung panjang diagonal alas $AC$:\n$AC = 6\\sqrt{2}\\text{ cm} \\implies AO = \\frac{1}{2} \\times 6\\sqrt{2} = 3\\sqrt{2}\\text{ cm}$.\n\nLangkah 3: Perhatikan segitiga siku-siku $TOA$, siku-siku di $O$:\n$\\cos(\\alpha) = \\frac{AO}{TA} = \\frac{3\\sqrt{2}}{6} = \\frac{1}{2}\\sqrt{2}$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W35",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 12 • Statistika Rata-rata Gabungan Dua Rombel",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Rombel 12 F.1 yang terdiri dari 24 siswa memperoleh rata-rata nilai tes kemampuan akademik sebesar 76. Rombel 12 F.2 yang terdiri dari 26 siswa memperoleh nilai rata-rata sebesar 86. Berapakah nilai rata-rata gabungan dari seluruh siswa kedua rombel tersebut?",
    "opsi": [
      "A. $80,4$",
      "B. $80,8$",
      "C. $81,2$",
      "D. $81,6$",
      "E. $82,0$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Rumus rata-rata gabungan:\n$\\bar{x}_{\\text{gab}} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}$.\n\nLangkah 2: Substitusikan $n_1 = 24, \\bar{x}_1 = 76, n_2 = 26, \\bar{x}_2 = 86$:\nJumlah nilai 12 F.1 $= 24 \\times 76 = 1.824$.\nJumlah nilai 12 F.2 $= 26 \\times 86 = 2.236$.\nTotal siswa $= 24 + 26 = 50$.\n\nLangkah 3: Hitung rata-rata gabungan:\n$\\bar{x}_{\\text{gab}} = \\frac{1.824 + 2.236}{50} = \\frac{4.060}{50} = 81,2$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-W36",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 12 • Statistika Penambahan Siswa Baru",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Nilai rata-rata tes matematika dari sekelompok 19 orang siswa adalah 75. Ketika 1 orang siswa baru bernama Farhan masuk dan nilainya digabungkan ke dalam kelompok tersebut, rata-rata nilai kelas naik menjadi 76. Berapakah nilai tes matematika yang diperoleh Farhan?",
    "opsi": [
      "A. $85$",
      "B. $90$",
      "C. $95$",
      "D. $98$",
      "E. $100$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Hitung total nilai mula-mula dari 19 siswa:\n$\\Sigma x_{\\text{awal}} = 19 \\times 75 = 1.425$.\n\nLangkah 2: Hitung total nilai setelah Farhan bergabung (total 20 siswa):\n$\\Sigma x_{\\text{akhir}} = 20 \\times 76 = 1.520$.\n\nLangkah 3: Nilai Farhan adalah selisih kedua total nilai tersebut:\n$x_{\\text{Farhan}} = 1.520 - 1.425 = 95$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-W37",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 12 • Statistika Modus Data Berkelompok",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Data waktu tunggu pelayanan paspor (dalam menit) di kantor imigrasi dicatat dalam tabel distribusi frekuensi berikut:\n$$\\begin{array}{|c|c|}\n\\hline\n\\textbf{Waktu (menit)} & \\textbf{Frekuensi} \\\\\n\\hline\n11 - 15 & 6 \\\\\n16 - 20 & 10 \\\\\n21 - 25 & 18 \\\\\n26 - 30 & 16 \\\\\n31 - 35 & 4 \\\\\n\\hline\n\\end{array}$$\nBerapakah nilai modus waktu tunggu pelayanan paspor tersebut?",
    "opsi": [
      "A. $23,5\\text{ menit}$",
      "B. $24,0\\text{ menit}$",
      "C. $24,5\\text{ menit}$",
      "D. $25,0\\text{ menit}$",
      "E. $25,5\\text{ menit}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Tentukan kelas modus:\nFrekuensi terbesar adalah 18 pada interval $21 - 25$.\nTepi bawah $T_b = 21 - 0,5 = 20,5$.\nPanjang kelas $p = 25 - 21 + 1 = 5$.\n\nLangkah 2: Hitung selisih frekuensi:\n$d_1 = 18 - 10 = 8$.\n$d_2 = 18 - 16 = 2$.\n\nLangkah 3: Gunakan rumus modus data berkelompok:\n$Mo = T_b + \\left(\\frac{d_1}{d_1 + d_2}\\right) \\times p$\n$Mo = 20,5 + \\left(\\frac{8}{8 + 2}\\right) \\times 5 = 20,5 + \\left(\\frac{8}{10}\\right) \\times 5 = 20,5 + 4,0 = 24,5\\text{ menit}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W38",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 12 • Statistika Median Data Berkelompok",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Tabel distribusi frekuensi berikut menunjukkan berat muatan logistik kargo penerbangan udara:\n$$\\begin{array}{|c|c|c|}\n\\hline\n\\textbf{Berat (kg)} & \\textbf{Frekuensi} & \\textbf{Frekuensi Kumulatif}\\\\\n\\hline\n40 - 49 & 8 & 8 \\\\\n50 - 59 & 12 & 20 \\\\\n60 - 69 & 20 & 40 \\\\\n70 - 79 & 14 & 54 \\\\\n80 - 89 & 6 & 60 \\\\\n\\hline\n\\end{array}$$\nBerapakah nilai median berat muatan kargo tersebut?",
    "opsi": [
      "A. $62,5\\text{ kg}$",
      "B. $63,5\\text{ kg}$",
      "C. $64,5\\text{ kg}$",
      "D. $65,0\\text{ kg}$",
      "E. $65,5\\text{ kg}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Total frekuensi $N = 60$. Letak median adalah pada data ke-$\\frac{N}{2} = \\frac{60}{2} = 30$.\nData ke-30 berada pada kelas interval $60 - 69$ (karena $F_k$ kelas sebelumnya = 20, dan $F_k$ kelas ini = 40).\n\nLangkah 2: Identifikasi parameter rumus median:\nTepi bawah $T_b = 59,5$.\nFrekuensi kumulatif sebelum kelas median $F_k = 20$.\nFrekuensi kelas median $f_m = 20$.\nPanjang kelas $p = 10$.\n\nLangkah 3: Hitung nilai median:\n$Me = T_b + \\left(\\frac{\\frac{N}{2} - F_k}{f_m}\\right) \\times p$\n$Me = 59,5 + \\left(\\frac{30 - 20}{20}\\right) \\times 10 = 59,5 + \\left(\\frac{10}{20}\\right) \\times 10 = 59,5 + 5 = 64,5\\text{ kg}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W39",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 12 • Jangkauan Interkuartil dan Batas Outlier",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Dalam audit jaringan internet serat optik di gedung perkantoran, diperoleh kuartil bawah kecepatan transfer data $Q_1 = 28\\text{ Mbps}$ dan kuartil atas $Q_3 = 52\\text{ Mbps}$. Menggunakan aturan Tukey (Boxplot), suatu data koneksi digolongkan sebagai pencilan atas (*upper outlier*) ekstrem jika kecepatannya melebihi...",
    "opsi": [
      "A. $76\\text{ Mbps}$",
      "B. $82\\text{ Mbps}$",
      "C. $88\\text{ Mbps}$",
      "D. $94\\text{ Mbps}$",
      "E. $100\\text{ Mbps}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Hitung jangkauan interkuartil ($QR$):\n$QR = Q_3 - Q_1 = 52 - 28 = 24\\text{ Mbps}$.\n\nLangkah 2: Rumus batas pagar atas (*upper fence*) Tukey:\n$\\text{Pagar Atas} = Q_3 + 1,5 \\times QR$.\n\nLangkah 3: Substitusikan nilai $Q_3$ dan $QR$:\n$\\text{Pagar Atas} = 52 + 1,5(24) = 52 + 36 = 88\\text{ Mbps}$.\nData bernilai lebih dari $88\\text{ Mbps}$ diklasifikasikan sebagai outlier.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W40",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 12 • Statistika Bivariat Garis Regresi Linier",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Analisis bivariat hubungan antara alokasi biaya iklan digital ($x$, dalam jutaan rupiah) dan omzet penjualan bulanan ($y$, dalam jutaan rupiah) menghasilkan persamaan garis regresi linier $\\hat{y} = 45 + 3,2x$. Jika pada bulan depan manajemen mengalokasikan anggaran iklan sebesar $\\text{Rp}15.000.000$ ($x = 15$), berapakah estimasi omzet penjualan yang diprediksi?",
    "opsi": [
      "A. $\\text{Rp}87.000.000$",
      "B. $\\text{Rp}90.000.000$",
      "C. $\\text{Rp}93.000.000$",
      "D. $\\text{Rp}96.000.000$",
      "E. $\\text{Rp}102.000.000$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Substitusikan nilai variabel bebas $x = 15$ ke dalam persamaan regresi:\n$\\hat{y} = 45 + 3,2(15)$.\n\nLangkah 2: Selesaikan perhitungan:\n$3,2 \\times 15 = 48$.\n$\\hat{y} = 45 + 48 = 93\\text{ juta rupiah} = \\text{Rp}93.000.000$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-W41",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 12 • Kaidah Pencacahan PIN Mobile Banking",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Seorang nasabah bank membuat kode PIN keamanan 4-digit dari himpunan angka $\\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\\}$. Ketentuan pembuatan PIN: angka pertama tidak boleh 0, angka terakhir wajib berupa angka ganjil, dan tidak boleh ada angka yang berulang (semua angka berbeda). Berapa banyak variasi kode PIN yang dapat dibentuk?",
    "opsi": [
      "A. $1.840$",
      "B. $2.016$",
      "C. $2.240$",
      "D. $2.520$",
      "E. $3.024$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Terapkan aturan pengisian tempat (*filling slots*) 4 digit $(D_1, D_2, D_3, D_4)$:\n- Digit ke-4 ($D_4$) harus angka ganjil $\\{1, 3, 5, 7, 9\\} \\implies 5$ pilihan.\n- Digit ke-1 ($D_1$) tidak boleh 0 dan tidak boleh sama dengan $D_4$. Dari total 10 angka, 2 angka tidak boleh digunakan $\\implies 10 - 2 = 8$ pilihan.\n- Digit ke-2 ($D_2$) bebas asalkan berbeda dari $D_1$ dan $D_4$. Dari 10 angka, sudah terpakai 2 angka $\\implies 8$ pilihan.\n- Digit ke-3 ($D_3$) dari 10 angka, sudah terpakai 3 angka $\\implies 7$ pilihan.\n\nLangkah 2: Kalikan seluruh pilihan slot:\nBanyak variasi PIN $= 8 \\times 8 \\times 7 \\times 5 = 2.240$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W42",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 12 • Permutasi Unsur Sama Kata NUSANTARA",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Panitia pameran teknologi IKN menyusun kode plakat akreditasi delegasi dari huruf-huruf pembentuk kata \"NUSANTARA\". Berapakah banyak susunan kata sandi 9-huruf berbeda yang dapat dibentuk dari huruf-huruf tersebut?",
    "opsi": [
      "A. $15.120$",
      "B. $20.160$",
      "C. $30.240$",
      "D. $40.320$",
      "E. $60.480$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Hitung frekuensi huruf pada kata \"NUSANTARA\":\nTotal huruf $n = 9$.\nHuruf N: 2, U: 1, S: 1, A: 3, T: 1, R: 1.\n\nLangkah 2: Gunakan rumus permutasi dengan unsur yang sama:\n$P = \\frac{n!}{k_1! \\cdot k_2!} = \\frac{9!}{3! \\times 2!}$.\n\nLangkah 3: Hitung nilai faktorial:\n$9! = 362.880$\n$3! \\times 2! = 6 \\times 2 = 12$\n$P = \\frac{362.880}{12} = 30.240$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-W43",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 12 • Kombinasi Pemilihan Delegasi Bersyarat",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Dari klub sains SMA yang beranggotakan 6 siswa putra dan 5 siswa putri, akan dibentuk tim delegasi olimpiade yang beranggotakan 4 orang. Jika tim delegasi tersebut diwajibkan memiliki minimal 2 orang siswa putri, berapakah banyak susunan tim delegasi yang dapat dibentuk?",
    "opsi": [
      "A. $185\\text{ cara}$",
      "B. $200\\text{ cara}$",
      "C. $215\\text{ cara}$",
      "D. $230\\text{ cara}$",
      "E. $245\\text{ cara}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Bagi kasus susunan tim beranggotakan 4 orang dengan syarat minimal 2 putri:\nKasus 1: 2 putri dan 2 putra\n$C(5, 2) \\times C(6, 2) = 10 \\times 15 = 150$.\n\nKasus 2: 3 putri dan 1 putra\n$C(5, 3) \\times C(6, 1) = 10 \\times 6 = 60$.\n\nKasus 3: 4 putri dan 0 putra\n$C(5, 4) \\times C(6, 0) = 5 \\times 1 = 5$.\n\nLangkah 2: Jumlahkan seluruh kasus:\nTotal cara $= 150 + 60 + 5 = 215\\text{ cara}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W44",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 12 • Peluang Inklusi-Eksklusi Apartemen Eksekutif",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Pengelola gedung apartemen memiliki 40 unit kamar di lantai eksekutif dengan rincian fasilitas:\n- 24 unit kamar memiliki pemandangan kota (*City View*).\n- 16 unit kamar memiliki fasilitas balkon pribadi (*Private Balcony*).\n- 8 unit kamar memiliki pemandangan kota sekaligus balkon pribadi.\nJika seorang tamu memilih satu unit kamar secara acak, berapakah peluang tamu tersebut memperoleh kamar dengan pemandangan kota **atau** fasilitas balkon pribadi?",
    "opsi": [
      "A. $\\frac{1}{2}$",
      "B. $\\frac{3}{5}$",
      "C. $\\frac{7}{10}$",
      "D. $\\frac{4}{5}$",
      "E. $\\frac{9}{10}$"
    ],
    "kunci": "D",
    "bahas": "Langkah 1: Identifikasi parameter peluang majemuk:\nTotal kamar $n(S) = 40$.\nKamar City View $n(A) = 24$.\nKamar Balkon $n(B) = 16$.\nIrisan keduanya $n(A \\cap B) = 8$.\n\nLangkah 2: Gunakan prinsip inklusi-eksklusi untuk mencari $n(A \\cup B)$:\n$n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 24 + 16 - 8 = 32\\text{ unit kamar}$.\n\nLangkah 3: Hitung peluangnya:\n$P(A \\cup B) = \\frac{n(A \\cup B)}{n(S)} = \\frac{32}{40} = \\frac{4}{5}$.\n\nKesimpulan: Kunci D benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W45",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 12 • Peluang Kejadian Saling Bebas Generator RS",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Sebuah instalasi gawat darurat rumah sakit dilengkapi dua unit generator listrik darurat independen, Generator A dan Generator B. Probabilitas Generator A gagal menyala saat listrik PLN padam adalah $0,04$, sedangkan probabilitas Generator B gagal menyala adalah $0,05$. Jika kedua generator bekerja saling bebas, berapakah probabilitas bahwa minimal ada satu generator yang berhasil menyala saat terjadi pemadaman listrik?",
    "opsi": [
      "A. $0,900$",
      "B. $0,912$",
      "C. $0,950$",
      "D. $0,998$",
      "E. $0,999$"
    ],
    "kunci": "D",
    "bahas": "Langkah 1: Gunakan prinsip komplemen:\nKejadian \"minimal satu generator berhasil menyala\" merupakan komplemen dari kejadian \"kedua generator gagal menyala secara bersamaan\".\n\nLangkah 2: Karena independen (saling bebas), peluang kedua generator gagal:\n$P(A_{\\text{gagal}} \\cap B_{\\text{gagal}}) = P(A_{\\text{gagal}}) \\times P(B_{\\text{gagal}}) = 0,04 \\times 0,05 = 0,002$.\n\nLangkah 3: Hitung peluang komplemennya:\n$P(\\text{minimal 1 menyala}) = 1 - 0,002 = 0,998$.\n\nKesimpulan: Kunci D benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W46",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 12 • Peluang Bersyarat Teorema Bayes Uji Diagnostik",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Pada pengujian skrining medis massal, diketahui $2\\%$ dari populasi mengidap suatu infeksi virus tertentu. Suatu alat tes cepat memiliki akurasi: jika orang terinfeksi, hasil tes positif sebesar $95\\%$; namun jika orang sehat, alat tes memberi hasil positif palsu (*false positive*) sebesar $5\\%$. Jika seorang warga dipilih secara acak dan hasil tesnya menunjukkan positif, berapakah probabilitas sesungguhnya bahwa warga tersebut benar-benar mengidap infeksi virus?",
    "opsi": [
      "A. $\\frac{2}{100}$",
      "B. $\\frac{19}{68}$",
      "C. $\\frac{38}{100}$",
      "D. $\\frac{95}{100}$",
      "E. $\\frac{68}{100}$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Tuliskan probabilitas dasar:\n$P(V) = 0,02$ (terinfeksi), $P(S) = 0,98$ (sehat).\n$P(+ | V) = 0,95$ dan $P(+ | S) = 0,05$.\n\nLangkah 2: Hitung probabilitas total hasil tes positif $P(+)$:\n$P(+) = P(V) \\times P(+ | V) + P(S) \\times P(+ | S)$\n$P(+) = 0,02(0,95) + 0,98(0,05) = 0,019 + 0,049 = 0,068$.\n\nLangkah 3: Gunakan Teorema Bayes untuk menghitung $P(V | +)$:\n$P(V | +) = \\frac{P(V \\cap +)}{P(+)} = \\frac{0,019}{0,068} = \\frac{19}{68}$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 3 (Sulit / HOTS)"
  },
  {
    "id": "W43-W47",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 12 • Pemodelan Pecahan Rasional Kecepatan Mobil",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Pak Rian menempuh perjalanan dinas antar-kota sejauh $180\\text{ km}$ menggunakan mobil. Saat berangkat cuaca cerah dan mobil melaju dengan kecepatan rata-rata $v\\text{ km/jam}$. Namun saat perjalanan pulang, hujan lebat mengguyur sepanjang jalan tol sehingga kecepatan rata-rata mobil berkurang $15\\text{ km/jam}$, yang mengakibatkan durasi perjalanan pulang menjadi 1 jam lebih lama dibandingkan saat berangkat. Berapakah kecepatan rata-rata mobil Pak Rian saat berangkat?",
    "opsi": [
      "A. $45\\text{ km/jam}$",
      "B. $50\\text{ km/jam}$",
      "C. $60\\text{ km/jam}$",
      "D. $75\\text{ km/jam}$",
      "E. $80\\text{ km/jam}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Rumuskan waktu tempuh $t = \\frac{s}{v}$:\nWaktu berangkat $t_1 = \\frac{180}{v}$.\nWaktu pulang $t_2 = \\frac{180}{v - 15}$.\nSelisih waktu tempuh $t_2 - t_1 = 1\\text{ jam}$.\n\nLangkah 2: Susun persamaan pecahan rasional:\n$\\frac{180}{v - 15} - \\frac{180}{v} = 1$.\n$180 \\left[\\frac{v - (v - 15)}{v(v - 15)}\\right] = 1 \\implies \\frac{180(15)}{v^2 - 15v} = 1$.\n$2.700 = v^2 - 15v \\implies v^2 - 15v - 2.700 = 0$.\n\nLangkah 3: Faktorkan persamaan kuadrat:\n$(v - 60)(v + 45) = 0$.\nKarena kecepatan bernilai positif, maka $v = 60\\text{ km/jam}$.\n(Uji: berangkat = 180/60 = 3 jam; pulang = 180/45 = 4 jam; selisih = 1 jam, cocok!).\n\nKesimpulan: Kunci C benar.",
    "level": "Level 3 (Sulit / HOTS)"
  },
  {
    "id": "W43-W48",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 12 • Model Kausatif Sebab-Akibat Median vs Mean",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Perhatikan dua pernyataan matematis berikut:\n**Pernyataan:** Dalam menganalisis data pendapatan rumah tangga di suatu wilayah yang memiliki kesenjangan ekonomi ekstrem, nilai Median lebih tepat dan representatif digunakan sebagai ukuran pemusatan dibandingkan nilai Mean (rata-rata hitung).\n**SEBAB**\n**Alasan:** Nilai Mean sangat sensitif dan mudah terdistorsi oleh keberadaan nilai pencilan (*outlier*) ekstrem, sedangkan nilai Median tidak terpengaruh oleh besarnya nilai ekstrem tersebut.\n\nHubungan logis yang tepat antara kedua pernyataan di atas adalah...",
    "opsi": [
      "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat yang valid.",
      "B. Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat.",
      "C. Pernyataan benar, tetapi alasan bernilai salah.",
      "D. Pernyataan salah, tetapi alasan bernilai benar.",
      "E. Pernyataan dan alasan keduanya bernilai salah."
    ],
    "kunci": "A",
    "bahas": "Langkah 1: Analisis Pernyataan: Benar. Pada data yang memiliki skewness tinggi (miring ekstrem) seperti pendapatan masyarakat, median adalah ukuran pemusatan terbaik karena mencerminkan pendapatan 50% warga terbawah dan teratas secara seimbang.\nLangkah 2: Analisis Alasan: Benar. Secara matematis, rumus Mean menjumlahkan seluruh nilai sehingga satu pencilan miliarder akan melipatgandakan rata-rata, sedangkan Median hanya bergantung pada posisi urutan tengah data.\nLangkah 3: Analisis Hubungan: Kausalitas valid. Alasan menerangkan secara langsung penyebab mengapa pernyataan tersebut benar.\n\nKesimpulan: Kunci A benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W49",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 12 • Pilihan Ganda Kompleks Analisis Boxplot",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Audit performa respons server (dalam detik) menghasilkan ringkasan lima serangkai data: Nilai Minimum $= 2$, Kuartil Bawah $Q_1 = 5$, Median $Q_2 = 8$, Kuartil Atas $Q_3 = 12$, dan Nilai Maksimum $= 25$.\n\nPerhatikan 4 pernyataan berikut:\n(1) Jangkauan interkuartil ($QR$) waktu respons server adalah 7 detik.\n(2) Waktu respons maksimum sebesar 25 detik teridentifikasi sebagai pencilan (*outlier*).\n(3) Tepat $50\\%$ data respons server berada di dalam interval 5 detik hingga 12 detik.\n(4) Distribusi data respons server memiliki bentuk kemiringan miring ke kiri (*skewed left*).\n\nPernyataan yang bernilai **BENAR** adalah...",
    "opsi": [
      "A. (1) dan (3) saja",
      "B. (1), (2), dan (3)",
      "C. (2) dan (4) saja",
      "D. (4) saja",
      "E. Semua pernyataan bernilai benar"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Evaluasi (1): $QR = Q_3 - Q_1 = 12 - 5 = 7\\text{ detik}$. (BENAR)\nLangkah 2: Evaluasi (2): Pagar atas $= Q_3 + 1,5(QR) = 12 + 1,5(7) = 22,5$. Karena nilai maksimum $25 > 22,5$, maka 25 detik adalah outlier. (BENAR)\nLangkah 3: Evaluasi (3): Sifat kuartil memastikan tepat $50\\%$ data tengah selalu berada di antara $Q_1$ dan $Q_3$, yaitu interval $[5, 12]$. (BENAR)\nLangkah 4: Evaluasi (4): Panjang bentangan kanan $(25 - 8 = 17)$ jauh lebih panjang daripada bentangan kiri $(8 - 2 = 6)$, sehingga kurva memiliki ekor panjang di kanan (*skewed right*), bukan *skewed left*. (SALAH)\n\nJadi, pernyataan yang benar adalah (1), (2), dan (3).\n\nKesimpulan: Kunci B benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-W50",
    "mapel": "Matematika Wajib",
    "materi": "Kelas 12 • Checkbox Pusmendik Kelulusan Bimbel",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Data kelulusan 100 siswa kelas XII di sebuah bimbingan belajar mencatat: 60 siswa lulus seleksi PTN melalui jalur SNBP, 50 siswa lulus melalui jalur SNBT, dan 20 siswa berhasil lulus melalui kedua jalur tersebut secara bersamaan.\n\nPerhatikan pernyataan-pernyataan berikut:\n(1) Siswa yang hanya lulus melalui jalur SNBP saja berjumlah 40 orang.\n(2) Siswa yang tidak lulus di kedua jalur seleksi tersebut berjumlah 10 orang.\n(3) Peluang terpilihnya siswa yang hanya lulus di salah satu jalur seleksi saja adalah $\\frac{7}{10}$.\n(4) Rasio perbandingan antara siswa yang lulus SNBT saja terhadap SNBP saja adalah $3 : 4$.\n\nPernyataan yang bernilai **BENAR** adalah...",
    "opsi": [
      "A. (1) dan (2) saja",
      "B. (1), (2), dan (3)",
      "C. (2), (3), dan (4)",
      "D. (1), (2), (3), dan (4)",
      "E. (3) dan (4) saja"
    ],
    "kunci": "D",
    "bahas": "Langkah 1: Buat diagram Venn pembagian himpunan:\n- Lulus kedua jalur (irisan): 20 orang.\n- SNBP saja: $60 - 20 = 40$ orang. (Pernyataan 1 BENAR)\n- SNBT saja: $50 - 20 = 30$ orang.\n- Total siswa lulus minimal satu jalur: $40 + 20 + 30 = 90$ orang.\n- Tidak lulus kedua jalur: $100 - 90 = 10$ orang. (Pernyataan 2 BENAR)\n\nLangkah 2: Evaluasi pernyataan 3:\nSiswa lulus salah satu jalur saja: $40 + 30 = 70$ orang.\nPeluangnya $= \\frac{70}{100} = \\frac{7}{10}$. (Pernyataan 3 BENAR)\n\nLangkah 3: Evaluasi pernyataan 4:\nRasio SNBT saja : SNBP saja $= 30 : 40 = 3 : 4$. (Pernyataan 4 BENAR)\n\nKeempat pernyataan (1), (2), (3), dan (4) bernilai BENAR.\n\nKesimpulan: Kunci D benar.",
    "level": "Level 2 (Sedang)"
  }
],
  "matmin": [
  {
    "id": "W43-M01",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 10 Minat • Vektor Perkalian Skalar dan Sudut Lintasan Drone",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Dua lintasan drone inspeksi pertanian cerdas dinyatakan dalam vektor posisi $\\vec{u} = 2\\vec{i} - \\vec{j} + 2\\vec{k}$ dan $\\vec{v} = 4\\vec{i} + 4\\vec{j} - 2\\vec{k}$. Berapakah besar sudut perpotongan antara kedua lintasan drone tersebut?",
    "opsi": [
      "A. $30^\\circ$",
      "B. $45^\\circ$",
      "C. $60^\\circ$",
      "D. $90^\\circ$",
      "E. $120^\\circ$"
    ],
    "kunci": "D",
    "bahas": "Langkah 1: Hitung hasil kali skalar (dot product) $\\vec{u} \\cdot \\vec{v}$:\n$\\vec{u} \\cdot \\vec{v} = (2)(4) + (-1)(4) + (2)(-2) = 8 - 4 - 4 = 0$.\n\nLangkah 2: Gunakan hubungan $\\cos(\\theta) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| |\\vec{v}|}$:\nKarena hasil kali skalar bernilai 0, maka $\\cos(\\theta) = 0$.\n\nLangkah 3: Sudut dengan kosinus 0 adalah $\\theta = 90^\\circ$ (kedua vektor saling tegak lurus ortogonal).\n\nKesimpulan: Kunci D benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-M02",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 10 Minat • Vektor Proyeksi Skalar Ortogonal",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Dalam analisis mekanika struktur jembatan gantung, vektor gaya tarikan kabel dinyatakan oleh $\\vec{a} = 4\\vec{i} + 5\\vec{j} + 3\\vec{k}$ dan vektor penopang balok baja adalah $\\vec{b} = 2\\vec{i} + 2\\vec{j} + \\vec{k}$. Berapakah panjang proyeksi skalar ortogonal dari vektor gaya $\\vec{a}$ pada vektor balok $\\vec{b}$?",
    "opsi": [
      "A. $5$",
      "B. $6$",
      "C. $7$",
      "D. $8$",
      "E. $9$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Rumus panjang proyeksi skalar ortogonal $\\vec{a}$ pada $\\vec{b}$:\n$|\\vec{c}| = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$.\n\nLangkah 2: Hitung perkalian skalar $\\vec{a} \\cdot \\vec{b}$:\n$\\vec{a} \\cdot \\vec{b} = (4)(2) + (5)(2) + (3)(1) = 8 + 10 + 3 = 21$.\n\nLangkah 3: Hitung panjang vektor $\\vec{b}$:\n$|\\vec{b}| = \\sqrt{2^2 + 2^2 + 1^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$.\n\nLangkah 4: Hitung nilai proyeksi skalar:\n$|\\vec{c}| = \\frac{21}{3} = 7$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M03",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 10 Minat • Vektor Proyeksi Ortogonal",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Diketahui vektor lintasan partikel $\\vec{u} = 3\\vec{i} + 4\\vec{j} + 4\\vec{k}$ dan vektor medan acuan $\\vec{v} = 2\\vec{i} + 2\\vec{j} + \\vec{k}$. Proyeksi vektor ortogonal dari vektor $\\vec{u}$ pada arah vektor $\\vec{v}$ adalah...",
    "opsi": [
      "A. $2\\vec{i} + 2\\vec{j} + \\vec{k}$",
      "B. $3\\vec{i} + 3\\vec{j} + 2\\vec{k}$",
      "C. $4\\vec{i} + 4\\vec{j} + 2\\vec{k}$",
      "D. $6\\vec{i} + 6\\vec{j} + 3\\vec{k}$",
      "E. $4\\vec{i} - 4\\vec{j} + 2\\vec{k}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Rumus proyeksi vektor ortogonal $\\vec{u}$ pada $\\vec{v}$:\n$\\vec{p} = \\left(\\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|^2}\\right) \\vec{v}$.\n\nLangkah 2: Hitung dot product $\\vec{u} \\cdot \\vec{v}$:\n$\\vec{u} \\cdot \\vec{v} = (3)(2) + (4)(2) + (4)(1) = 6 + 8 + 4 = 18$.\n\nLangkah 3: Hitung panjang kuadrat $|\\vec{v}|^2$:\n$|\\vec{v}|^2 = 2^2 + 2^2 + 1^2 = 4 + 4 + 1 = 9$.\n\nLangkah 4: Tentukan vektor hasil proyeksi:\n$\\vec{p} = \\left(\\frac{18}{9}\\right) \\vec{v} = 2(2\\vec{i} + 2\\vec{j} + \\vec{k}) = 4\\vec{i} + 4\\vec{j} + 2\\vec{k}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M04",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 11 Minat • Polinomial Teorema Sisa Derajat Dua",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Suatu suku banyak polinomial $P(x)$ jika dibagi oleh $(x - 1)$ memberikan sisa $5$, dan jika dibagi oleh $(x + 2)$ memberikan sisa $-4$. Berapakah sisa pembagian suku banyak $P(x)$ tersebut jika dibagi oleh $(x^2 + x - 2)$?",
    "opsi": [
      "A. $2x + 3$",
      "B. $3x - 2$",
      "C. $3x + 2$",
      "D. $4x - 1$",
      "E. $5x - 3$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Faktorkan pembagi derajat dua:\n$x^2 + x - 2 = (x - 1)(x + 2)$.\nMisalkan sisa pembagian adalah $S(x) = ax + b$.\n\nLangkah 2: Terapkan Teorema Sisa Polinomial:\n$P(1) = S(1) \\implies a(1) + b = 5 \\iff a + b = 5$\n$P(-2) = S(-2) \\implies a(-2) + b = -4 \\iff -2a + b = -4$.\n\nLangkah 3: Eliminasi $b$:\n$(a + b) - (-2a + b) = 5 - (-4)$\n$3a = 9 \\implies a = 3$.\nSubstitusi $a = 3 \\implies 3 + b = 5 \\implies b = 2$.\nMaka sisa pembagian adalah $S(x) = 3x + 2$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M05",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 11 Minat • Polinomial Hubungan Akar Vieta",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Persamaan suku banyak derajat tiga $2x^3 - 6x^2 + 10x - 8 = 0$ memiliki tiga akar real maupun kompleks $x_1, x_2,$ dan $x_3$. Berapakah nilai dari $\\frac{1}{x_1} + \\frac{1}{x_2} + \\frac{1}{x_3}$?",
    "opsi": [
      "A. $\\frac{3}{4}$",
      "B. $1$",
      "C. $\\frac{5}{4}$",
      "D. $\\frac{3}{2}$",
      "E. $2$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Samakan penyebut bentuk pecahan yang ditanyakan:\n$\\frac{1}{x_1} + \\frac{1}{x_2} + \\frac{1}{x_3} = \\frac{x_1 x_2 + x_2 x_3 + x_1 x_3}{x_1 x_2 x_3}$.\n\nLangkah 2: Gunakan Teorema Vieta untuk persamaan $ax^3 + bx^2 + cx + d = 0$ ($a = 2, b = -6, c = 10, d = -8$):\n$x_1 x_2 + x_2 x_3 + x_1 x_3 = \\frac{c}{a} = \\frac{10}{2} = 5$\n$x_1 x_2 x_3 = -\\frac{d}{a} = -\\frac{-8}{2} = 4$.\n\nLangkah 3: Substitusikan ke rumus pecahan:\n$\\frac{1}{x_1} + \\frac{1}{x_2} + \\frac{1}{x_3} = \\frac{5}{4}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M06",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 11 Minat • Lingkaran Pusat P(a, b) Menyinggung Garis",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Sebuah lingkaran memiliki titik pusat di $P(2, -3)$ dan menyinggung garis lurus $3x - 4y + 7 = 0$. Persamaan umum lingkaran tersebut adalah...",
    "opsi": [
      "A. $x^2 + y^2 - 4x + 6y - 12 = 0$",
      "B. $x^2 + y^2 - 4x + 6y + 12 = 0$",
      "C. $x^2 + y^2 + 4x - 6y - 12 = 0$",
      "D. $x^2 + y^2 - 4x - 6y - 12 = 0$",
      "E. $x^2 + y^2 - 2x + 3y - 25 = 0$"
    ],
    "kunci": "A",
    "bahas": "Langkah 1: Jari-jari lingkaran adalah jarak titik pusat $P(2, -3)$ ke garis singgung $3x - 4y + 7 = 0$:\n$r = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}} = \\frac{|3(2) - 4(-3) + 7|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|6 + 12 + 7|}{5} = \\frac{25}{5} = 5$.\n\nLangkah 2: Bentuk baku persamaan lingkaran berpusat $(2, -3)$ dengan jari-jari $r = 5$:\n$(x - 2)^2 + (y + 3)^2 = 5^2$.\n\nLangkah 3: Jabarkan ke bentuk umum:\n$x^2 - 4x + 4 + y^2 + 6y + 9 = 25$\n$x^2 + y^2 - 4x + 6y + 13 - 25 = 0$\n$x^2 + y^2 - 4x + 6y - 12 = 0$.\n\nKesimpulan: Kunci A benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M07",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 11 Minat • PGSL Tegak Lurus Garis Tertentu",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Persamaan garis singgung pada lingkaran $x^2 + y^2 = 25$ yang tegak lurus dengan garis $4x + 3y - 10 = 0$ adalah...",
    "opsi": [
      "A. $3x - 4y \\pm 20 = 0$",
      "B. $3x - 4y \\pm 25 = 0$",
      "C. $4x + 3y \\pm 25 = 0$",
      "D. $3x + 4y \\pm 25 = 0$",
      "E. $4x - 3y \\pm 25 = 0$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Tentukan gradien garis yang diketahui:\n$4x + 3y - 10 = 0 \\implies m_1 = -\\frac{4}{3}$.\nKarena garis singgung tegak lurus, maka $m \\cdot m_1 = -1 \\implies m = \\frac{3}{4}$.\n\nLangkah 2: Gunakan rumus PGSL lingkaran $x^2 + y^2 = r^2$ dengan gradien $m$ ($r = 5$):\n$y = mx \\pm r\\sqrt{1 + m^2}$.\n\nLangkah 3: Hitung suku akar:\n$\\sqrt{1 + m^2} = \\sqrt{1 + \\left(\\frac{3}{4}\\right)^2} = \\sqrt{1 + \\frac{9}{16}} = \\sqrt{\\frac{25}{16}} = \\frac{5}{4}$.\n\nLangkah 4: Masukkan ke rumus PGSL:\n$y = \\frac{3}{4}x \\pm 5\\left(\\frac{5}{4}\\right) \\implies 4y = 3x \\pm 25 \\iff 3x - 4y \\pm 25 = 0$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M08",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 11 Minat • Lingkaran Uji Kuasa Titik",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Diberikan persamaan lingkaran $L \\equiv x^2 + y^2 - 6x + 8y - 11 = 0$ dan sebuah titik koordinat pemantau $T(7, 2)$. Tentukan nilai kuasa titik $T$ terhadap lingkaran serta kedudukan titik $T$ tersebut.",
    "opsi": [
      "A. $K = 0$, titik terletak tepat pada lingkaran",
      "B. $K = -9$, titik terletak di dalam lingkaran",
      "C. $K = 16$, titik terletak di luar lingkaran",
      "D. $K = 25$, titik terletak di luar lingkaran",
      "E. $K = 9$, titik terletak tepat pada lingkaran"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Substitusikan koordinat titik $T(7, 2)$ ke dalam fungsi lingkaran $K(x, y) = x^2 + y^2 - 6x + 8y - 11$:\n$K(7, 2) = 7^2 + 2^2 - 6(7) + 8(2) - 11$.\n\nLangkah 2: Hitung nilainya:\n$K(7, 2) = 49 + 4 - 42 + 16 - 11 = 16$.\n\nLangkah 3: Analisis kedudukan titik berdasarkan tanda kuasa:\nKarena $K = 16 > 0$, maka titik $T(7, 2)$ terletak di luar lingkaran.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-M09",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 11 Minat • Jarak Pusat Dua Lingkaran",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Dua lingkaran pada peta geospasial memiliki persamaan $L_1 \\equiv x^2 + y^2 - 4x - 6y - 12 = 0$ dan $L_2 \\equiv x^2 + y^2 + 6x + 18y + 25 = 0$. Berapakah jarak antara kedua titik pusat lingkaran tersebut?",
    "opsi": [
      "A. $10$",
      "B. $12$",
      "C. $13$",
      "D. $15$",
      "E. $17$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Tentukan titik pusat masing-masing lingkaran dari bentuk $x^2 + y^2 + Ax + By + C = 0$:\nPusat $P = \\left(-\\frac{A}{2}, -\\frac{B}{2}\\right)$.\nPusat $L_1$: $P_1 = \\left(-\\frac{-4}{2}, -\\frac{-6}{2}\\right) = (2, 3)$.\nPusat $L_2$: $P_2 = \\left(-\\frac{6}{2}, -\\frac{18}{2}\\right) = (-3, -9)$.\n\nLangkah 2: Hitung jarak euclid antara $P_1$ dan $P_2$:\n$d = \\sqrt{(-3 - 2)^2 + (-9 - 3)^2} = \\sqrt{(-5)^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-M10",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 11 Minat • Lingkaran Garis Tali Busur Sekutu",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Dua lingkaran berpotongan di dua titik: $L_1 \\equiv x^2 + y^2 + 2x - 4y - 4 = 0$ dan $L_2 \\equiv x^2 + y^2 - 4x + 2y - 10 = 0$. Persamaan garis tali busur sekutu (*radical axis*) yang menghubungkan kedua titik potong tersebut adalah...",
    "opsi": [
      "A. $x + y - 1 = 0$",
      "B. $x - y + 1 = 0$",
      "C. $2x - y + 3 = 0$",
      "D. $x - 2y + 1 = 0$",
      "E. $x + 2y - 3 = 0$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Persamaan tali busur sekutu dua lingkaran diperoleh dari selisih kedua persamaan lingkaran: $L_1 - L_2 = 0$.\n\nLangkah 2: Kurangkan persamaan $L_1$ dengan $L_2$:\n$(x^2 + y^2 + 2x - 4y - 4) - (x^2 + y^2 - 4x + 2y - 10) = 0$\n$2x - (-4x) - 4y - 2y - 4 - (-10) = 0$\n$6x - 6y + 6 = 0$.\n\nLangkah 3: Bagi seluruh suku dengan 6:\n$x - y + 1 = 0$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M11",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 10 Minat • Vektor Tiga Titik Kolinier Segaris",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Tiga stasiun transmisi radar berada pada koordinat $A(1, 2, 3)$, $B(3, 6, 7)$, dan $C(m, 10, n)$. Jika ketiga stasiun tersebut berada pada satu garis lurus yang sama (kolinier), berapakah nilai dari $m + n$?",
    "opsi": [
      "A. $12$",
      "B. $14$",
      "C. $16$",
      "D. $18$",
      "E. $20$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Tentukan vektor arah $\\vec{AB}$:\n$\\vec{AB} = (3 - 1, 6 - 2, 7 - 3) = (2, 4, 4)$.\n\nLangkah 2: Tentukan vektor $\\vec{AC}$:\n$\\vec{AC} = (m - 1, 10 - 2, n - 3) = (m - 1, 8, n - 3)$.\n\nLangkah 3: Syarat kolinier: $\\vec{AC} = k \\cdot \\vec{AB}$:\nDari komponen $y$: $8 = k(4) \\implies k = 2$.\nDari komponen $x$: $m - 1 = 2(2) = 4 \\implies m = 5$.\nDari komponen $z$: $n - 3 = 2(4) = 8 \\implies n = 11$.\n\nLangkah 4: Hitung $m + n$:\n$m + n = 5 + 11 = 16$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M12",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 11 Minat • Polinomial Pembagian Horner Koefisien Pecahan",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Suku banyak polinomial $P(x) = 2x^3 - 5x^2 + 8x - 5$ dibagi oleh $(2x - 1)$. Hasil bagi $H(x)$ dan sisa pembagian $S$ berturut-turut adalah...",
    "opsi": [
      "A. $H(x) = x^2 - 2x + 3$ dan $S = -2$",
      "B. $H(x) = 2x^2 - 4x + 6$ dan $S = -2$",
      "C. $H(x) = x^2 - 2x + 3$ dan $S = 2$",
      "D. $H(x) = x^2 + 2x - 3$ dan $S = -2$",
      "E. $H(x) = x^2 - 4x + 3$ dan $S = -1$"
    ],
    "kunci": "A",
    "bahas": "Langkah 1: Gunakan skema Horner dengan pembuat nol pembagi $x = \\frac{1}{2}$:\nKoefisien: $2, -5, 8, -5$\n- Turunkan: 2\n- $2 \\times \\frac{1}{2} = 1 \\implies -5 + 1 = -4$\n- $-4 \\times \\frac{1}{2} = -2 \\implies 8 + (-2) = 6$\n- $6 \\times \\frac{1}{2} = 3 \\implies -5 + 3 = -2$ (Sisa $S = -2$).\n\nLangkah 2: Karena pembagi berbentuk $(ax - b) = (2x - 1)$, koefisien hasil bagi Horner harus dibagi dengan $a = 2$:\n$H(x) = \\frac{2x^2 - 4x + 6}{2} = x^2 - 2x + 3$.\n\nKesimpulan: Kunci A benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M13",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 11 Minat • Geometri Transformasi Matriks Komposisi",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Titik $A(2, -1)$ ditransformasikan oleh matriks $T_1 = \\begin{pmatrix} 2 & 1 \\\\ -1 & 3 \\end{pmatrix}$ dilanjutkan oleh transformasi matriks kedua $T_2 = \\begin{pmatrix} 1 & 4 \\\\ 0 & 2 \\end{pmatrix}$. Koordinat bayangan akhir dari titik $A$ adalah...",
    "opsi": [
      "A. $(-15, -8)$",
      "B. $(-17, -10)$",
      "C. $(-13, -10)$",
      "D. $(17, 10)$",
      "E. $(-17, 10)$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Tentukan matriks komposisi $T = T_2 \\cdot T_1$:\n$T = \\begin{pmatrix} 1 & 4 \\\\ 0 & 2 \\end{pmatrix} \\begin{pmatrix} 2 & 1 \\\\ -1 & 3 \\end{pmatrix} = \\begin{pmatrix} 1(2) + 4(-1) & 1(1) + 4(3) \\\\ 0(2) + 2(-1) & 0(1) + 2(3) \\end{pmatrix} = \\begin{pmatrix} -2 & 13 \\\\ -2 & 6 \\end{pmatrix}$.\n\nLangkah 2: Kalikan matriks komposisi dengan koordinat titik $A(2, -1)$:\n$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} -2 & 13 \\\\ -2 & 6 \\end{pmatrix} \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} -2(2) + 13(-1) \\\\ -2(2) + 6(-1) \\end{pmatrix} = \\begin{pmatrix} -4 - 13 \\\\ -4 - 6 \\end{pmatrix} = \\begin{pmatrix} -17 \\\\ -10 \\end{pmatrix}$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M14",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 11 Minat • Trigonometri Sudut Rangkap Sudut Tumpul",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Diketahui $\\sin(\\alpha) = \\frac{3}{5}$ dengan $\\alpha$ berada pada kuadran II (sudut tumpul, $90^\\circ < \\alpha < 180^\\circ$). Berapakah nilai eksak dari $\\cos(2\\alpha)$?",
    "opsi": [
      "A. $-\\frac{24}{25}$",
      "B. $-\\frac{7}{25}$",
      "C. $\\frac{7}{25}$",
      "D. $\\frac{24}{25}$",
      "E. $\\frac{16}{25}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Gunakan identitas sudut rangkap kosinus yang hanya melibatkan sinus:\n$\\cos(2\\alpha) = 1 - 2\\sin^2(\\alpha)$.\n\nLangkah 2: Masukkan nilai $\\sin(\\alpha) = \\frac{3}{5}$:\n$\\cos(2\\alpha) = 1 - 2\\left(\\frac{3}{5}\\right)^2 = 1 - 2\\left(\\frac{9}{25}\\right) = 1 - \\frac{18}{25} = \\frac{7}{25}$.\n\nCatatan: Tanda kosinus sudut rangkap tidak dipengaruhi kuadran $\\alpha$ asal secara terpisah karena langsung terhitung melalui kuadrat nilai sinusnya.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-M15",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 11 Minat • Persamaan Trigonometri Tangen",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Himpunan penyelesaian dari persamaan trigonometri $\\sqrt{3}\\tan(2x - 30^\\circ) = 1$ untuk interval $0^\\circ \\le x \\le 180^\\circ$ adalah...",
    "opsi": [
      "A. $\\{30^\\circ, 60^\\circ\\}$",
      "B. $\\{30^\\circ, 120^\\circ\\}$",
      "C. $\\{60^\\circ, 150^\\circ\\}$",
      "D. $\\{45^\\circ, 135^\\circ\\}$",
      "E. $\\{30^\\circ, 150^\\circ\\}$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Sederhanakan bentuk persamaan:\n$\\tan(2x - 30^\\circ) = \\frac{1}{\\sqrt{3}} = \\tan(30^\\circ)$.\n\nLangkah 2: Gunakan rumus penyelesaian persamaan tangen:\n$2x - 30^\\circ = 30^\\circ + k \\cdot 180^\\circ$\n$2x = 60^\\circ + k \\cdot 180^\\circ \\implies x = 30^\\circ + k \\cdot 90^\\circ$.\n\nLangkah 3: Masukkan nilai $k$ bulat:\n- Untuk $k = 0 \\implies x = 30^\\circ$.\n- Untuk $k = 1 \\implies x = 30^\\circ + 90^\\circ = 120^\\circ$.\n- Untuk $k = 2 \\implies x = 210^\\circ$ (melebihi rentang $180^\\circ$).\nMaka himpunan penyelesaian adalah $\\{30^\\circ, 120^\\circ\\}$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M16",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 11 Minat • Panjang Garis Singgung Titik Luar Lingkaran",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Dari stasiun pengendali radar di titik $P(8, 6)$, dipancarkan sinyal pembatas yang menyinggung zona lingkaran pertahanan udara $x^2 + y^2 = 25$ di titik $T$. Berapakah panjang ruas garis singgung $PT$ tersebut?",
    "opsi": [
      "A. $5\\sqrt{2}$",
      "B. $5\\sqrt{3}$",
      "C. $8$",
      "D. $10$",
      "E. $5\\sqrt{5}$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Lingkaran $x^2 + y^2 = 25$ berpusat di $O(0, 0)$ dengan jari-jari $r = 5$.\n\nLangkah 2: Hitung jarak dari titik pusat $O(0, 0)$ ke titik luar $P(8, 6)$:\n$OP = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = 10$.\n\nLangkah 3: Segitiga $OTP$ adalah segitiga siku-siku di titik singgung $T$ (karena jari-jari $OT$ tegak lurus garis singgung $PT$):\n$PT = \\sqrt{OP^2 - r^2} = \\sqrt{10^2 - 5^2} = \\sqrt{100 - 25} = \\sqrt{75} = 5\\sqrt{3}$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-M17",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 10 Minat • Vektor Luas Segitiga Cross Product Tiga Dimensi",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Tiga titik koordinat di ruang tiga dimensi membentuk segitiga dengan titik-titik sudut $A(1, 0, 0)$, $B(0, 2, 0)$, dan $C(0, 0, 3)$. Luas bidang segitiga $ABC$ tersebut adalah...",
    "opsi": [
      "A. $3$",
      "B. $3,5$",
      "C. $4$",
      "D. $4,5$",
      "E. $7$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Bentuk dua vektor sisi segitiga dari titik $A$:\n$\\vec{AB} = (0 - 1, 2 - 0, 0 - 0) = (-1, 2, 0)$\n$\\vec{AC} = (0 - 1, 0 - 0, 3 - 0) = (-1, 0, 3)$.\n\nLangkah 2: Hitung perkalian silang (cross product) $\\vec{AB} \\times \\vec{AC}$:\n$\\vec{AB} \\times \\vec{AC} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ -1 & 2 & 0 \\\\ -1 & 0 & 3 \\end{vmatrix} = \\vec{i}(6 - 0) - \\vec{j}(-3 - 0) + \\vec{k}(0 - (-2)) = (6, 3, 2)$.\n\nLangkah 3: Hitung panjang vektor hasil perkalian silang:\n$|\\vec{AB} \\times \\vec{AC}| = \\sqrt{6^2 + 3^2 + 2^2} = \\sqrt{36 + 9 + 4} = \\sqrt{49} = 7$.\n\nLangkah 4: Luas segitiga adalah setengah dari panjang cross product:\n$\\text{Luas} = \\frac{1}{2} |\\vec{AB} \\times \\vec{AC}| = \\frac{7}{2} = 3,5\\text{ satuan luas}$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M18",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 11 Minat • Polinomial Jumlah Kuadrat Akar-Akar Real",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Persamaan suku banyak derajat tiga $x^3 - 4x^2 + x + 6 = 0$ memiliki akar-akar $x_1, x_2,$ dan $x_3$. Berapakah nilai dari jumlah kuadrat seluruh akar-akarnya ($x_1^2 + x_2^2 + x_3^2$)?",
    "opsi": [
      "A. $12$",
      "B. $14$",
      "C. $16$",
      "D. $18$",
      "E. $20$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Berdasarkan Teorema Vieta untuk persamaan $x^3 - 4x^2 + x + 6 = 0$ ($a = 1, b = -4, c = 1, d = 6$):\n$x_1 + x_2 + x_3 = -\\frac{b}{a} = 4$\n$x_1 x_2 + x_2 x_3 + x_1 x_3 = \\frac{c}{a} = 1$.\n\nLangkah 2: Gunakan identitas aljabar kuadrat:\n$x_1^2 + x_2^2 + x_3^2 = (x_1 + x_2 + x_3)^2 - 2(x_1 x_2 + x_2 x_3 + x_1 x_3)$.\n\nLangkah 3: Hitung nilainya:\n$x_1^2 + x_2^2 + x_3^2 = 4^2 - 2(1) = 16 - 2 = 14$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-M19",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 10 Minat • Pertidaksamaan Nilai Mutlak Linear",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Himpunan semua nilai $x$ real yang memenuhi pertidaksamaan nilai mutlak $|2x - 3| < x + 6$ adalah...",
    "opsi": [
      "A. $-3 < x < 9$",
      "B. $-1 < x < 9$",
      "C. $x < -1 \\text{ atau } x > 9$",
      "D. $1 < x < 9$",
      "E. $-1 < x < 6$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Syarat ruas kanan harus non-negatif: $x + 6 > 0 \\implies x > -6$.\n\nLangkah 2: Jabarkan sifat pertidaksamaan nilai mutlak $|A| < B \\iff -B < A < B$:\n$-(x + 6) < 2x - 3 < x + 6$.\n\nLangkah 3: Selesaikan pertidaksamaan kiri:\n$-x - 6 < 2x - 3 \\implies -3 < 3x \\implies x > -1$.\n\nLangkah 4: Selesaikan pertidaksamaan kanan:\n2x - 3 < x + 6 \\implies x < 9$.\n\nLangkah 5: Iriskan kedua hasil:\n$-1 < x < 9$ (semua nilai memenuhi syarat $x > -6$).\n\nKesimpulan: Kunci B benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M20",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 11 Minat • Model Kausatif Sebab-Akibat Garis Singgung Lingkaran",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Perhatikan dua pernyataan matematis berikut:\n**Pernyataan:** Garis vertikal $x = 5$ menyinggung kurva lingkaran $x^2 + y^2 = 25$ tepat di titik koordinat $(5, 0)$.\n**SEBAB**\n**Alasan:** Garis singgung pada lingkaran selalu tegak lurus dengan jari-jari lingkaran yang ditarik melalui titik singgung tersebut.\n\nHubungan logis yang tepat antara kedua pernyataan di atas adalah...",
    "opsi": [
      "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat yang valid.",
      "B. Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat.",
      "C. Pernyataan benar, tetapi alasan bernilai salah.",
      "D. Pernyataan salah, tetapi alasan bernilai benar.",
      "E. Pernyataan dan alasan keduanya bernilai salah."
    ],
    "kunci": "A",
    "bahas": "Langkah 1: Analisis Pernyataan: Benar. Lingkaran $x^2 + y^2 = 25$ memiliki jari-jari $r = 5$ berpusat di $(0, 0)$. Titik $(5, 0)$ terletak pada lingkaran. Garis $x = 5$ adalah garis vertikal yang hanya memotong lingkaran di satu titik yaitu $(5, 0)$, sehingga garis $x = 5$ adalah garis singgung.\nLangkah 2: Analisis Alasan: Benar. Berdasarkan teorema dasar geometri Euklides, garis singgung lingkaran di sembarang titik selalu tegak lurus terhadap ruas garis jari-jari di titik singgung tersebut.\nLangkah 3: Analisis Hubungan: Kausalitas valid. Karena jari-jari dari $(0, 0)$ ke $(5, 0)$ berimpit dengan sumbu X (horizontal), maka garis singgungnya harus tegak lurus sumbu X (garis vertikal $x = 5$). Alasan menerangkan pernyataan secara sempurna.\n\nKesimpulan: Kunci A benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M21",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Limit Trigonometri Identitas Cosinus Sudut Rangkap",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Nilai dari limit trigonometri $\\lim_{x \\to 0} \\frac{1 - \\cos(6x)}{x \\tan(3x)}$ adalah...",
    "opsi": [
      "A. $2$",
      "B. $3$",
      "C. $6$",
      "D. $9$",
      "E. $18$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Gunakan identitas trigonometri sudut rangkap:\n$1 - \\cos(6x) = 2\\sin^2(3x)$.\n\nLangkah 2: Substitusikan ke bentuk limit:\n$\\lim_{x \\to 0} \\frac{2\\sin(3x)\\sin(3x)}{x \\tan(3x)} = 2 \\times \\lim_{x \\to 0} \\frac{\\sin(3x)}{x} \\times \\lim_{x \\to 0} \\frac{\\sin(3x)}{\\tan(3x)}$.\n\nLangkah 3: Hitung nilai limit dasar:\n$\\lim_{x \\to 0} \\frac{\\sin(3x)}{x} = 3$\n$\\lim_{x \\to 0} \\frac{\\sin(3x)}{\\tan(3x)} = \\frac{3}{3} = 1$.\n\nLangkah 4: Hasil akhir $= 2 \\times 3 \\times 1 = 6$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M22",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Limit Trigonometri Aljabar 0/0",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Nilai dari limit trigonometri $\\lim_{x \\to 0} \\frac{\\sin(4x) + \\tan(2x)}{3x \\cos(2x)}$ adalah...",
    "opsi": [
      "A. $\\frac{2}{3}$",
      "B. $1$",
      "C. $\\frac{4}{3}$",
      "D. $2$",
      "E. $3$"
    ],
    "kunci": "D",
    "bahas": "Langkah 1: Bagi pembilang dan penyebut dengan $x$:\n$\\lim_{x \\to 0} \\frac{\\frac{\\sin(4x)}{x} + \\frac{\\tan(2x)}{x}}{3 \\cos(2x)}$.\n\nLangkah 2: Hitung limit masing-masing suku saat $x \\to 0$:\n$\\frac{\\sin(4x)}{x} \\to 4$\n$\\frac{\\tan(2x)}{x} \\to 2$\n$\\cos(2x) \\to \\cos(0) = 1$.\n\nLangkah 3: Hitung hasil akhir:\n$\\frac{4 + 2}{3(1)} = \\frac{6}{3} = 2$.\n\nKesimpulan: Kunci D benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-M23",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Limit Tak Hingga Selisih Bentuk Akar Kuadrat",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Nilai dari limit di ketakhinggaan $\\lim_{x \\to \\infty} \\left( \\sqrt{4x^2 + 8x - 5} - (2x - 3) \\right)$ adalah...",
    "opsi": [
      "A. $2$",
      "B. $3$",
      "C. $4$",
      "D. $5$",
      "E. $6$"
    ],
    "kunci": "D",
    "bahas": "Langkah 1: Ubah suku linear $(2x - 3)$ ke bentuk akar kuadrat sempurna:\n$2x - 3 = \\sqrt{(2x - 3)^2} = \\sqrt{4x^2 - 12x + 9}$.\n\nLangkah 2: Limit menjadi bentuk baku selisih akar $\\lim_{x \\to \\infty} (\\sqrt{ax^2 + bx + c} - \\sqrt{ax^2 + qx + r})$:\nDiperoleh koefisien $a = 4, b = 8, q = -12$.\n\nLangkah 3: Gunakan rumus praktis $\\frac{b - q}{2\\sqrt{a}}$:\n$L = \\frac{8 - (-12)}{2\\sqrt{4}} = \\frac{8 + 12}{2(2)} = \\frac{20}{4} = 5$.\n\nKesimpulan: Kunci D benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M24",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Limit Tak Hingga Fungsi Trigonometri",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Nilai dari limit di ketakhinggaan $\\lim_{x \\to \\infty} x \\sin\\left(\\frac{3}{x}\\right) \\cos\\left(\\frac{2}{x}\\right)$ adalah...",
    "opsi": [
      "A. $0$",
      "B. $1$",
      "C. $2$",
      "D. $3$",
      "E. $6$"
    ],
    "kunci": "D",
    "bahas": "Langkah 1: Gunakan pemisalan substitusi variabel:\nMisalkan $y = \\frac{1}{x}$. Saat $x \\to \\infty$, maka $y \\to 0$.\n\nLangkah 2: Tuliskan kembali bentuk limit dalam variabel $y$:\n$\\lim_{y \\to 0} \\frac{1}{y} \\sin(3y) \\cos(2y) = \\lim_{y \\to 0} \\frac{\\sin(3y)}{y} \\times \\lim_{y \\to 0} \\cos(2y)$.\n\nLangkah 3: Selesaikan perhitungan:\n$\\lim_{y \\to 0} \\frac{\\sin(3y)}{y} = 3$\n$\\lim_{y \\to 0} \\cos(2y) = \\cos(0) = 1$.\nHasil limit $= 3 \\times 1 = 3$.\n\nKesimpulan: Kunci D benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M25",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Turunan Trigonometri Aturan Rantai Berpangkat",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Turunan pertama dari fungsi trigonometri berpangkat $f(x) = \\sin^3(4x - \\pi)$ adalah $f'(x) = \\dots$",
    "opsi": [
      "A. $3\\sin^2(4x - \\pi)\\cos(4x - \\pi)$",
      "B. $4\\sin^2(4x - \\pi)\\cos(4x - \\pi)$",
      "C. $12\\sin^2(4x - \\pi)\\cos(4x - \\pi)$",
      "D. $12\\cos^3(4x - \\pi)$",
      "E. $-12\\sin^2(4x - \\pi)\\cos(4x - \\pi)$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Terapkan aturan rantai turunan fungsi komposisi $[u(x)]^n$:\n$\\frac{d}{dx}[u^n] = n u^{n-1} \\cdot u'$.\n\nLangkah 2: Tentukan komponen:\n$u(x) = \\sin(4x - \\pi) \\implies u'(x) = \\cos(4x - \\pi) \\cdot 4 = 4\\cos(4x - \\pi)$.\nPangkat $n = 3$.\n\nLangkah 3: Susun turunan lengkap:\n$f'(x) = 3\\sin^2(4x - \\pi) \\cdot [4\\cos(4x - \\pi)] = 12\\sin^2(4x - \\pi)\\cos(4x - \\pi)$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M26",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Turunan Trigonometri Aturan Perkalian u . v",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Diberikan fungsi $f(x) = x^2 \\cos(2x)$. Nilai dari turunan pertama $f'(x)$ yang dievaluasi pada absis $x = \\frac{\\pi}{4}$ adalah...",
    "opsi": [
      "A. $-\\frac{\\pi^2}{4}$",
      "B. $-\\frac{\\pi^2}{8}$",
      "C. $0$",
      "D. $\\frac{\\pi^2}{8}$",
      "E. $\\frac{\\pi}{2}$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Gunakan aturan perkalian turunan $(u \\cdot v)' = u'v + uv'$:\n$u = x^2 \\implies u' = 2x$\n$v = \\cos(2x) \\implies v' = -2\\sin(2x)$.\n$f'(x) = 2x\\cos(2x) - 2x^2\\sin(2x)$.\n\nLangkah 2: Substitusikan $x = \\frac{\\pi}{4}$:\n$2x = 2\\left(\\frac{\\pi}{4}\\right) = \\frac{\\pi}{2}$.\n$\\cos\\left(\\frac{\\pi}{2}\\right) = 0$ dan $\\sin\\left(\\frac{\\pi}{2}\\right) = 1$.\n\nLangkah 3: Hitung nilainya:\n$f'\\left(\\frac{\\pi}{4}\\right) = 2\\left(\\frac{\\pi}{4}\\right)(0) - 2\\left(\\frac{\\pi}{4}\\right)^2(1) = 0 - 2\\left(\\frac{\\pi^2}{16}\\right) = -\\frac{\\pi^2}{8}$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M27",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Garis Singgung Kurva Trigonometri",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Persamaan garis singgung pada kurva fungsi trigonometri $y = 2\\sin(x) + \\cos(x)$ di titik potong sumbu Y (titik yang berabsis $x = 0$) adalah...",
    "opsi": [
      "A. $2x - y + 1 = 0$",
      "B. $2x - y - 1 = 0$",
      "C. $x - 2y + 2 = 0$",
      "D. $2x + y - 1 = 0$",
      "E. $x + 2y - 2 = 0$"
    ],
    "kunci": "A",
    "bahas": "Langkah 1: Cari koordinat titik singgung $(x_1, y_1)$ di $x = 0$:\n$y_1 = 2\\sin(0) + \\cos(0) = 2(0) + 1 = 1 \\implies (0, 1)$.\n\nLangkah 2: Cari gradien garis singgung $m = y'$:\n$y' = 2\\cos(x) - \\sin(x)$.\nDi $x = 0 \\implies m = 2\\cos(0) - \\sin(0) = 2(1) - 0 = 2$.\n\nLangkah 3: Bentuk persamaan garis singgung $y - y_1 = m(x - x_1)$:\n$y - 1 = 2(x - 0) \\implies y = 2x + 1 \\iff 2x - y + 1 = 0$.\n\nKesimpulan: Kunci A benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-M28",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Selang Kemonotonan Kurva Naik",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Grafik fungsi trigonometri $f(x) = \\sin(2x)$ pada interval $0 \\le x \\le \\pi$ akan bergerak naik (*strictly increasing*) pada selang interval...",
    "opsi": [
      "A. $\\frac{\\pi}{4} < x < \\frac{3\\pi}{4}$",
      "B. $0 \\le x < \\frac{\\pi}{4}$ atau $\\frac{3\\pi}{4} < x \\le \\pi$",
      "C. $0 \\le x < \\frac{\\pi}{2}$",
      "D. $\\frac{\\pi}{2} < x < \\pi$",
      "E. $\\frac{\\pi}{6} < x < \\frac{5\\pi}{6}$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Syarat fungsi naik adalah turunan pertamanya bernilai positif: $f'(x) > 0$.\n$f'(x) = 2\\cos(2x) > 0 \\iff \\cos(2x) > 0$.\n\nLangkah 2: Pada interval $0 \\le x \\le \\pi$, sudut ganda berada pada rentang $0 \\le 2x \\le 2\\pi$.\nKosinus bernilai positif pada kuadran I dan kuadran IV:\n- Kuadran I: $0 \\le 2x < \\frac{\\pi}{2} \\implies 0 \\le x < \\frac{\\pi}{4}$.\n- Kuadran IV: $\\frac{3\\pi}{2} < 2x \\le 2\\pi \\implies \\frac{3\\pi}{4} < x \\le \\pi$.\n\nMaka fungsi naik pada selang $0 \\le x < \\frac{\\pi}{4}$ atau $\\frac{3\\pi}{4} < x \\le \\pi$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M29",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Optimasi Kontekstual Ketinggian Maksimum Peluru",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Sebuah peluru kendali penelitian cuaca ditembakkan vertikal ke atmosfer dengan persamaan lintasan ketinggian $h(t) = 120t - 5t^2$, dengan $h$ menyatakan tinggi dalam meter dan $t$ adalah waktu terbang dalam sekon. Berapakah ketinggian maksimum yang dapat dicapai peluru tersebut sebelum jatuh kembali?",
    "opsi": [
      "A. $600\\text{ meter}$",
      "B. $640\\text{ meter}$",
      "C. $720\\text{ meter}$",
      "D. $800\\text{ meter}$",
      "E. $960\\text{ meter}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Ketinggian maksimum dicapai saat kecepatan sesaat sama dengan nol ($h'(t) = 0$):\n$h'(t) = 120 - 10t = 0 \\implies 10t = 120 \\implies t = 12\\text{ sekon}$.\n\nLangkah 2: Substitusikan waktu puncak $t = 12$ ke persamaan fungsi ketinggian:\n$h(12) = 120(12) - 5(12)^2$\n$h(12) = 1.440 - 5(144) = 1.440 - 720 = 720\\text{ meter}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-M30",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Optimasi Luas Lahan Persegi Panjang",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Seorang petani memanfaatkan kawat pagar pembatas sepanjang $200\\text{ meter}$ untuk memagari sebidang lahan persegi panjang di sepanjang tepi sungai lurus (sisi lahan yang berbatasan langsung dengan sungai tidak memerlukan pagar). Berapakah luas area maksimum lahan pertanian yang dapat dipagari?",
    "opsi": [
      "A. $2.500\\text{ m}^2$",
      "B. $3.600\\text{ m}^2$",
      "C. $5.000\\text{ m}^2$",
      "D. $6.400\\text{ m}^2$",
      "E. $10.000\\text{ m}^2$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Misalkan panjang sisi tegak lurus sungai adalah $y$ dan sisi sejajar sungai adalah $x$.\nPanjang kawat pagar: $x + 2y = 200 \\implies x = 200 - 2y$.\n\nLangkah 2: Bentuk fungsi luas lahan $L(y) = x \\cdot y$:\n$L(y) = (200 - 2y)y = 200y - 2y^2$.\n\nLangkah 3: Luas maksimum tercapai saat turunan pertama $L'(y) = 0$:\n$L'(y) = 200 - 4y = 0 \\implies 4y = 200 \\implies y = 50\\text{ meter}$.\nSisi sejajar sungai: $x = 200 - 2(50) = 100\\text{ meter}$.\n\nLangkah 4: Hitung luas maksimum:\n$L_{\\text{maks}} = 100 \\times 50 = 5.000\\text{ m}^2$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M31",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Integral Tak Tentu Polinomial Aljabar",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Hasil pengintegralan tak tentu dari fungsi $\\int (6x^2 - 4x + 5) \\, dx$ adalah...",
    "opsi": [
      "A. $3x^3 - 2x^2 + 5x + C$",
      "B. $2x^3 - 2x^2 + 5x + C$",
      "C. $2x^3 - 4x^2 + 5x + C$",
      "D. $6x^3 - 2x^2 + 5x + C$",
      "E. $2x^3 - x^2 + 5x + C$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Gunakan rumus dasar integral tak tentu $\\int x^n dx = \\frac{1}{n+1} x^{n+1} + C$:\n$\\int 6x^2 dx = 6 \\left(\\frac{1}{3}x^3\\right) = 2x^3$\n$\\int -4x dx = -4 \\left(\\frac{1}{2}x^2\\right) = -2x^2$\n$\\int 5 dx = 5x$.\n\nLangkah 2: Gabungkan seluruh suku dan tambahkan konstanta integrasi $C$:\n$2x^3 - 2x^2 + 5x + C$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-M32",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Integral Tak Tentu Trigonometri Sudut Rangkap",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Hasil pengintegralan dari $\\int (4\\sin(2x) - 6\\cos(3x)) \\, dx$ adalah...",
    "opsi": [
      "A. $2\\cos(2x) - 2\\sin(3x) + C$",
      "B. $-2\\cos(2x) - 2\\sin(3x) + C$",
      "C. $-2\\cos(2x) + 2\\sin(3x) + C$",
      "D. $-8\\cos(2x) - 18\\sin(3x) + C$",
      "E. $-4\\cos(2x) - 6\\sin(3x) + C$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Rumus integral dasar fungsi trigonometri:\n$\\int \\sin(ax) dx = -\\frac{1}{a} \\cos(ax) + C$\n$\\int \\cos(bx) dx = \\frac{1}{b} \\sin(bx) + C$.\n\nLangkah 2: Integralkan suku pertama:\n$\\int 4\\sin(2x) dx = 4 \\left(-\\frac{1}{2}\\cos(2x)\\right) = -2\\cos(2x)$.\n\nLangkah 3: Integralkan suku kedua:\n$\\int -6\\cos(3x) dx = -6 \\left(\\frac{1}{3}\\sin(3x)\\right) = -2\\sin(3x)$.\n\nHasil lengkap $= -2\\cos(2x) - 2\\sin(3x) + C$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-M33",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Integral Metode Substitusi Aljabar",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Hasil pengintegralan $\\int 6x(x^2 - 1)^4 \\, dx$ adalah...",
    "opsi": [
      "A. $\\frac{1}{5}(x^2 - 1)^5 + C$",
      "B. $\\frac{3}{5}(x^2 - 1)^5 + C$",
      "C. $\\frac{6}{5}(x^2 - 1)^5 + C$",
      "D. $\\frac{3}{4}(x^2 - 1)^4 + C$",
      "E. $(x^2 - 1)^5 + C$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Gunakan metode substitusi:\nMisalkan $u = x^2 - 1 \\implies \\frac{du}{dx} = 2x \\implies dx = \\frac{du}{2x}$.\n\nLangkah 2: Substitusikan ke dalam bentuk integral:\n$\\int 6x \\cdot u^4 \\cdot \\frac{du}{2x} = \\int 3u^4 du$.\n\nLangkah 3: Selesaikan integral terhadap variabel $u$:\n$3 \\left(\\frac{1}{5}u^5\\right) + C = \\frac{3}{5}(x^2 - 1)^5 + C$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M34",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Integral Metode Substitusi Trigonometri",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Hasil dari pengintegralan $\\int \\sin^4(x) \\cos(x) \\, dx$ adalah...",
    "opsi": [
      "A. $\\frac{1}{4}\\sin^5(x) + C$",
      "B. $\\frac{1}{5}\\sin^5(x) + C$",
      "C. $\\frac{1}{5}\\cos^5(x) + C$",
      "D. $-\\frac{1}{5}\\sin^5(x) + C$",
      "E. $\\sin^5(x) + C$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Gunakan metode substitusi trigonometri:\nMisalkan $u = \\sin(x) \\implies du = \\cos(x) dx$.\n\nLangkah 2: Bentuk integral menjadi sederhana:\n$\\int u^4 du = \\frac{1}{5}u^5 + C$.\n\nLangkah 3: Kembalikan variabel $u = \\sin(x)$:\n$\\frac{1}{5}\\sin^5(x) + C$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-M35",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Integral Parsial Metode Tanzalin Eksponensial",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Hasil pengintegralan dari $\\int (2x + 1) e^{2x} \\, dx$ adalah...",
    "opsi": [
      "A. $(x - 1)e^{2x} + C$",
      "B. $x e^{2x} + C$",
      "C. $(x + 1)e^{2x} + C$",
      "D. $2x e^{2x} + C$",
      "E. \\left(x - \\frac{1}{2}\\right)e^{2x} + C$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Gunakan integral parsial metode tabular (Tanzalin):\nKolom Turunan $D$: $(2x + 1) \\to 2 \\to 0$.\nKolom Integral $I$: $e^{2x} \\to \\frac{1}{2}e^{2x} \\to \\frac{1}{4}e^{2x}$.\n\nLangkah 2: Pasangkan dengan tanda selang-seling $(+, -)$:\n$= +(2x + 1)\\left(\\frac{1}{2}e^{2x}\\right) - 2\\left(\\frac{1}{4}e^{2x}\\right) + C$\n$= \\left(x + \\frac{1}{2}\\right)e^{2x} - \\frac{1}{2}e^{2x} + C$.\n\nLangkah 3: Sederhanakan suku aljabar:\n$= \\left(x + \\frac{1}{2} - \\frac{1}{2}\\right)e^{2x} + C = x e^{2x} + C$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M36",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Integral Parsial Aljabar Trigonometri",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Hasil pengintegralan dari $\\int x \\cos(x) \\, dx$ adalah...",
    "opsi": [
      "A. $x\\sin(x) - \\cos(x) + C$",
      "B. $x\\cos(x) + \\sin(x) + C$",
      "C. $x\\sin(x) + \\cos(x) + C$",
      "D. $-x\\sin(x) + \\cos(x) + C$",
      "E. $x^2 \\sin(x) + C$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Gunakan rumus integral parsial $\\int u \\, dv = uv - \\int v \\, du$:\n$u = x \\implies du = dx$\n$dv = \\cos(x) dx \\implies v = \\sin(x)$.\n\nLangkah 2: Masukkan ke rumus parsial:\n$\\int x\\cos(x) dx = x\\sin(x) - \\int \\sin(x) dx$.\n\nLangkah 3: Selesaikan integral dari sinus:\n$\\int \\sin(x) dx = -\\cos(x)$.\n$= x\\sin(x) - (-\\cos(x)) + C = x\\sin(x) + \\cos(x) + C$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M37",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Integral Tentu Polinomial Aljabar",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Nilai eksak dari integral tentu $\\int_1^3 (3x^2 - 4x + 2) \\, dx$ adalah...",
    "opsi": [
      "A. $10$",
      "B. $12$",
      "C. $14$",
      "D. $16$",
      "E. $18$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Tentukan antiturunan fungsi aljabar:\n$F(x) = \\int (3x^2 - 4x + 2) dx = x^3 - 2x^2 + 2x$.\n\nLangkah 2: Evaluasi pada batas atas $x = 3$:\n$F(3) = 3^3 - 2(3^2) + 2(3) = 27 - 18 + 6 = 15$.\n\nLangkah 3: Evaluasi pada batas bawah $x = 1$:\n$F(1) = 1^3 - 2(1^2) + 2(1) = 1 - 2 + 2 = 1$.\n\nLangkah 4: Hitung selisih Teorema Dasar Kalkulus:\n$\\int_1^3 (3x^2 - 4x + 2) dx = F(3) - F(1) = 15 - 1 = 14$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-M38",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Integral Tentu Trigonometri Batas Sudut",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Nilai dari integral tentu $\\int_0^{\\pi/2} (\\sin(x) + \\cos(x)) \\, dx$ adalah...",
    "opsi": [
      "A. $0$",
      "B. $1$",
      "C. $\\sqrt{2}$",
      "D. $2$",
      "E. $2\\sqrt{2}$"
    ],
    "kunci": "D",
    "bahas": "Langkah 1: Antiturunan dari $(\\sin(x) + \\cos(x))$:\n$F(x) = -\\cos(x) + \\sin(x)$.\n\nLangkah 2: Evaluasi pada batas atas $x = \\frac{\\pi}{2}$:\n$F\\left(\\frac{\\pi}{2}\\right) = -\\cos\\left(\\frac{\\pi}{2}\\right) + \\sin\\left(\\frac{\\pi}{2}\\right) = 0 + 1 = 1$.\n\nLangkah 3: Evaluasi pada batas bawah $x = 0$:\n$F(0) = -\\cos(0) + \\sin(0) = -1 + 0 = -1$.\n\nLangkah 4: Hitung selisih batas:\n$F\\left(\\frac{\\pi}{2}\\right) - F(0) = 1 - (-1) = 2$.\n\nKesimpulan: Kunci D benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-M39",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Luas Daerah Parabola dan Sumbu X",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Luas daerah yang dibatasi oleh lengkungan kurva parabola $y = 6x - x^2$ dan sumbu X adalah...",
    "opsi": [
      "A. $24\\text{ satuan luas}$",
      "B. $30\\text{ satuan luas}$",
      "C. $36\\text{ satuan luas}$",
      "D. $42\\text{ satuan luas}$",
      "E. $48\\text{ satuan luas}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Tentukan titik potong kurva dengan sumbu X ($y = 0$):\n$6x - x^2 = 0 \\implies x(6 - x) = 0 \\implies x = 0$ dan $x = 6$.\n\nLangkah 2: Metode Integral Tentu:\n$\\text{Luas} = \\int_0^6 (6x - x^2) dx = \\left[ 3x^2 - \\frac{1}{3}x^3 \\right]_0^6$.\n\nLangkah 3: Evaluasi batas:\n$= 3(6^2) - \\frac{1}{3}(6^3) = 3(36) - \\frac{216}{3} = 108 - 72 = 36\\text{ satuan luas}$.\n(Alternatif rumus Archimedes: $D = 36 - 0 = 36 \\implies \\text{Luas} = \\frac{D\\sqrt{D}}{6a^2} = \\frac{36 \\times 6}{6(1)^2} = 36$).\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M40",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Luas Daerah Antara Dua Kurva Parabola dan Garis",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Luas daerah tertutup yang dibatasi oleh kurva parabola $y = x^2$ dan garis lurus $y = 2x + 3$ adalah...",
    "opsi": [
      "A. $\\frac{16}{3}\\text{ satuan luas}$",
      "B. $\\frac{28}{3}\\text{ satuan luas}$",
      "C. $\\frac{32}{3}\\text{ satuan luas}$",
      "D. $\\frac{35}{3}\\text{ satuan luas}$",
      "E. $\\frac{64}{3}\\text{ satuan luas}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Cari titik potong kedua kurva:\n$x^2 = 2x + 3 \\implies x^2 - 2x - 3 = 0$.\nFaktorkan: $(x - 3)(x + 1) = 0 \\implies x_1 = -1, x_2 = 3$.\n\nLangkah 2: Gunakan formula Archimedes luas daerah tertutup parabola dan garis:\nPersamaan selisih: $x^2 - 2x - 3 = 0 \\implies a = 1, b = -2, c = -3$.\nHitung Diskriminan $D = b^2 - 4ac = (-2)^2 - 4(1)(-3) = 4 + 12 = 16$.\n\nLangkah 3: Hitung luas menggunakan formula $\\frac{D\\sqrt{D}}{6a^2}$:\n$\\text{Luas} = \\frac{16 \\sqrt{16}}{6(1)^2} = \\frac{16 \\times 4}{6} = \\frac{64}{6} = \\frac{32}{3} = 10\\frac{2}{3}\\text{ satuan luas}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M41",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Volume Benda Putar Mengelilingi Sumbu X",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Volume benda putar yang terbentuk jika daerah yang dibatasi oleh garis lurus $y = 2x$, sumbu X, garis batas $x = 1$, dan $x = 3$ diputar mengelilingi sumbu X sejauh $360^\\circ$ adalah...",
    "opsi": [
      "A. $26\\pi\\text{ satuan volume}$",
      "B. $32\\pi\\text{ satuan volume}$",
      "C. $\\frac{104}{3}\\pi\\text{ satuan volume}$",
      "D. $36\\pi\\text{ satuan volume}$",
      "E. $\\frac{112}{3}\\pi\\text{ satuan volume}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Rumus volume benda putar mengelilingi sumbu X metode cakram:\n$V = \\pi \\int_a^b y^2 dx$.\n\nLangkah 2: Masukkan $y = 2x$, batas $a = 1, b = 3$:\n$V = \\pi \\int_1^3 (2x)^2 dx = \\pi \\int_1^3 4x^2 dx$.\n\nLangkah 3: Integralkan:\n$V = \\pi \\left[ \\frac{4}{3}x^3 \\right]_1^3 = \\pi \\left( \\frac{4}{3}(3^3) - \\frac{4}{3}(1^3) \\right) = \\pi \\left( \\frac{4}{3}(27) - \\frac{4}{3} \\right) = \\pi \\left( 36 - \\frac{4}{3} \\right) = \\frac{104}{3}\\pi\\text{ satuan volume}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M42",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Volume Benda Putar Antara Dua Kurva Metode Cincin",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Volume benda putar yang dihasilkan jika daerah tertutup di kuadran I yang dibatasi oleh kurva parabola $y = x^2$ dan garis $y = 2x$ diputar mengelilingi sumbu X sejauh $360^\\circ$ adalah...",
    "opsi": [
      "A. $\\frac{32}{15}\\pi\\text{ satuan volume}$",
      "B. $\\frac{48}{15}\\pi\\text{ satuan volume}$",
      "C. $\\frac{64}{15}\\pi\\text{ satuan volume}$",
      "D. $\\frac{72}{15}\\pi\\text{ satuan volume}$",
      "E. $\\frac{96}{15}\\pi\\text{ satuan volume}$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Cari titik potong kedua kurva:\n$x^2 = 2x \\implies x^2 - 2x = 0 \\implies x(x - 2) = 0 \\implies x = 0$ dan $x = 2$.\nPada interval $[0, 2]$, garis $y = 2x$ berada di atas kurva $y = x^2$.\n\nLangkah 2: Rumus metode cincin (*washer method*):\n$V = \\pi \\int_0^2 \\left[ (2x)^2 - (x^2)^2 \\right] dx = \\pi \\int_0^2 (4x^2 - x^4) dx$.\n\nLangkah 3: Selesaikan pengintegralan:\n$V = \\pi \\left[ \\frac{4}{3}x^3 - \\frac{1}{5}x^5 \\right]_0^2 = \\pi \\left( \\frac{4}{3}(8) - \\frac{1}{5}(32) \\right) = \\pi \\left( \\frac{32}{3} - \\frac{32}{5} \\right) = 32\\pi \\left( \\frac{5 - 3}{15} \\right) = \\frac{64}{15}\\pi\\text{ satuan volume}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 3 (Sulit / HOTS)"
  },
  {
    "id": "W43-M43",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Integral Tentu Substitusi Tangen Secan",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Nilai eksak dari integral tentu trigonometri $\\int_0^{\\pi/4} \\tan^3(x) \\sec^2(x) \\, dx$ adalah...",
    "opsi": [
      "A. $\\frac{1}{8}$",
      "B. $\\frac{1}{6}$",
      "C. $\\frac{1}{4}$",
      "D. $\\frac{1}{2}$",
      "E. $1$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Gunakan substitusi $u = \\tan(x) \\implies du = \\sec^2(x) dx$.\n\nLangkah 2: Ubah batas integrasi:\n- Saat $x = 0 \\implies u = \\tan(0) = 0$.\n- Saat $x = \\frac{\\pi}{4} \\implies u = \\tan\\left(\\frac{\\pi}{4}\\right) = 1$.\n\nLangkah 3: Selesaikan integral dalam variabel $u$:\n$\\int_0^1 u^3 du = \\left[ \\frac{1}{4}u^4 \\right]_0^1 = \\frac{1}{4}(1^4) - 0 = \\frac{1}{4}$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M44",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Asimtot Datar dan Asimtot Tegak Kurva Rasional",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Diberikan grafik kurva fungsi rasional $f(x) = \\frac{3x - 6}{x + 2}$. Persamaan asimtot datar dan asimtot tegak dari grafik fungsi tersebut berturut-turut adalah...",
    "opsi": [
      "A. $y = 2$ dan $x = -3$",
      "B. $y = 3$ dan $x = 2$",
      "C. $y = 3$ dan $x = -2$",
      "D. $y = -2$ dan $x = 3$",
      "E. $y = 1$ dan $x = -2$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Asimtot datar diperoleh dari nilai limit fungsi di ketakhinggaan:\n$y = \\lim_{x \\to \\infty} \\frac{3x - 6}{x + 2} = \\frac{3}{1} = 3$.\n\nLangkah 2: Asimtot tegak diperoleh dari pembuat nol penyebut saat pembilang tidak nol:\n$x + 2 = 0 \\implies x = -2$.\n(Uji pembilang: $3(-2) - 6 = -12 \\neq 0$, valid sebagai asimtot tegak).\n\nMaka asimtot datar $y = 3$ dan asimtot tegak $x = -2$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 1 (Mudah)"
  },
  {
    "id": "W43-M45",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Integral Tentu Pecahan Bentuk Logaritma Alami",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Nilai dari integral tentu $\\int_1^4 \\frac{2x + 3}{x^2 + 3x} \\, dx$ adalah...",
    "opsi": [
      "A. $\\ln(3)$",
      "B. $\\ln(5)$",
      "C. $\\ln(7)$",
      "D. $\\ln(14)$",
      "E. $\\ln(28)$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Perhatikan bahwa pembilang $(2x + 3)$ merupakan turunan langsung dari penyebut $(x^2 + 3x)$.\nMisalkan $u = x^2 + 3x \\implies du = (2x + 3) dx$.\n\nLangkah 2: Ubah batas integrasi:\n- Batas bawah $x = 1 \\implies u = 1^2 + 3(1) = 4$.\n- Batas atas $x = 4 \\implies u = 4^2 + 3(4) = 16 + 12 = 28$.\n\nLangkah 3: Hitung integral:\n$\\int_4^{28} \\frac{du}{u} = [\\ln|u|]_4^{28} = \\ln(28) - \\ln(4) = \\ln\\left(\\frac{28}{4}\\right) = \\ln(7)$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M46",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Titik Belok Kurva Polinomial Kubik",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Titik belok (*inflection point*) dari grafik fungsi polinomial kubik $f(x) = x^3 - 6x^2 + 9x + 2$ terletak pada koordinat...",
    "opsi": [
      "A. $(1, 6)$",
      "B. $(2, 4)$",
      "C. $(3, 2)$",
      "D. $(2, 2)$",
      "E. $(0, 2)$"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Titik belok terjadi saat turunan kedua sama dengan nol ($f''(x) = 0$) dan terjadi perubahan kecekungan.\n$f'(x) = 3x^2 - 12x + 9$\n$f''(x) = 6x - 12$.\n\nLangkah 2: Cari nilai absis titik belok:\n$6x - 12 = 0 \\implies 6x = 12 \\implies x = 2$.\n\nLangkah 3: Cari ordinat $y$ dengan mensubstitusikan $x = 2$ ke fungsi awal:\n$f(2) = 2^3 - 6(2^2) + 9(2) + 2 = 8 - 24 + 18 + 2 = 4$.\nKoordinat titik belok adalah $(2, 4)$.\n\nKesimpulan: Kunci B benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M47",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Turunan Kedua Percepatan Gerak Partikel",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Posisi gerak lurus suatu partikel dinyatakan oleh persamaan $s(t) = t^3 - 9t^2 + 24t + 5$, dengan $s$ dalam meter dan $t$ dalam sekon. Berapakah percepatan partikel tersebut pada saat kecepatannya berhenti sesaat ($v = 0$) untuk yang kedua kalinya?",
    "opsi": [
      "A. $2\\text{ m/s}^2$",
      "B. $4\\text{ m/s}^2$",
      "C. $6\\text{ m/s}^2$",
      "D. $8\\text{ m/s}^2$",
      "E. $12\\text{ m/s}^2$"
    ],
    "kunci": "C",
    "bahas": "Langkah 1: Kecepatan sesaat adalah turunan pertama dari fungsi posisi $v(t) = s'(t)$:\n$v(t) = 3t^2 - 18t + 24 = 0$.\nBagi dengan 3:\n$t^2 - 6t + 8 = 0 \\iff (t - 2)(t - 4) = 0$.\nKecepatan bernilai nol saat $t_1 = 2\\text{ s}$ dan saat kedua kalinya pada $t_2 = 4\\text{ s}$.\n\nLangkah 2: Percepatan adalah turunan kedua posisi $a(t) = s''(t) = v'(t)$:\n$a(t) = 6t - 18$.\n\nLangkah 3: Masukkan waktu $t = 4\\text{ s}$:\n$a(4) = 6(4) - 18 = 24 - 18 = 6\\text{ m/s}^2$.\n\nKesimpulan: Kunci C benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M48",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Model Kausatif Sebab-Akibat Titik Stasioner vs Ekstrem",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Perhatikan dua pernyataan matematis berikut:\n**Pernyataan:** Fungsi aljabar $f(x) = x^3$ tidak memiliki nilai maksimum lokal maupun nilai minimum lokal di titik $x = 0$.\n**SEBAB**\n**Alasan:** Syarat perlu suatu fungsi memiliki nilai ekstrem lokal di titik kritis $c$ adalah $f'(c) = 0$, namun kondisi $f'(c) = 0$ bukan merupakan syarat cukup bagi keberadaan nilai ekstrem lokal.\n\nHubungan logis yang tepat antara kedua pernyataan di atas adalah...",
    "opsi": [
      "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat yang valid.",
      "B. Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat.",
      "C. Pernyataan benar, tetapi alasan bernilai salah.",
      "D. Pernyataan salah, tetapi alasan bernilai benar.",
      "E. Pernyataan dan alasan keduanya bernilai salah."
    ],
    "kunci": "A",
    "bahas": "Langkah 1: Analisis Pernyataan: Benar. Turunan $f'(x) = 3x^2 \\implies f'(0) = 0$. Namun di sekitar $x = 0$, $f'(x) > 0$ baik untuk $x < 0$ maupun $x > 0$ (fungsi selalu naik), sehingga titik $(0, 0)$ merupakan titik belok stasioner horizontal, bukan puncak (maksimum) maupun lembah (minimum).\nLangkah 2: Analisis Alasan: Benar. Teorema Fermat menyatakan bahwa jika $f$ memiliki ekstrem lokal dan terdiferensialkan, maka $f'(c) = 0$ (syarat perlu). Akan tetapi, agar menjadi titik ekstrem lokal, turunan pertama harus berganti tanda (uji turunan pertama) atau $f''(c) \\neq 0$ (uji turunan kedua) yang merupakan syarat cukupnya.\nLangkah 3: Analisis Hubungan: Kausalitas valid. Alasan menerangkan secara fundamental mengapa fungsi $f(x) = x^3$ tidak memiliki nilai ekstrem di titik stasionernya.\n\nKesimpulan: Kunci A benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M49",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Pilihan Ganda Kompleks Integral dan Luas Daerah",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Diberikan fungsi parabola kuadrat $f(x) = x^2 - 4x + 3$.\n\nPerhatikan 4 pernyataan matematis berikut:\n(1) Kurva memotong sumbu X di titik $(1, 0)$ dan $(3, 0)$.\n(2) Nilai integral tentu $\\int_1^3 (x^2 - 4x + 3) \\, dx = -\\frac{4}{3}$.\n(3) Luas daerah tertutup antara kurva dan sumbu X pada interval $[1, 3]$ adalah $\\frac{4}{3}\\text{ satuan luas}$.\n(4) Pada interval tertutup $[1, 3]$, seluruh grafik kurva berada di atas sumbu X ($f(x) \\ge 0$).\n\nPernyataan yang bernilai **BENAR** adalah...",
    "opsi": [
      "A. (1) dan (2) saja",
      "B. (1), (2), dan (3)",
      "C. (2) dan (4) saja",
      "D. (3) dan (4) saja",
      "E. Semua pernyataan bernilai benar"
    ],
    "kunci": "B",
    "bahas": "Langkah 1: Evaluasi (1): Pembuat nol fungsi $x^2 - 4x + 3 = 0 \\iff (x - 1)(x - 3) = 0 \\implies x = 1$ dan $x = 3$. Kurva memotong sumbu X di $(1, 0)$ dan $(3, 0)$. (BENAR)\nLangkah 2: Evaluasi (2): $\\int_1^3 (x^2 - 4x + 3) dx = \\left[ \\frac{1}{3}x^3 - 2x^2 + 3x \\right]_1^3 = (9 - 18 + 9) - \\left(\\frac{1}{3} - 2 + 3\\right) = 0 - \\frac{4}{3} = -\\frac{4}{3}$. (BENAR)\nLangkah 3: Evaluasi (3): Karena integral bernilai $-\\frac{4}{3}$, maka luas daerah fisik adalah nilai mutlaknya yaitu $\\left|-\\frac{4}{3}\\right| = \\frac{4}{3}\\text{ satuan luas}$. (BENAR)\nLangkah 4: Evaluasi (4): Uji titik $x = 2$: $f(2) = 2^2 - 4(2) + 3 = -1 < 0$. Kurva berada di bawah sumbu X, bukan di atas sumbu X. (SALAH)\n\nPernyataan yang benar adalah (1), (2), dan (3).\n\nKesimpulan: Kunci B benar.",
    "level": "Level 2 (Sedang)"
  },
  {
    "id": "W43-M50",
    "mapel": "Additional Mathematics",
    "materi": "Kelas 12 Minat • Checkbox Pusmendik Analisis Kurva Gelombang Sinus",
    "tipe": "Pilihan Ganda Tunggal",
    "tanya": "Diberikan persamaan kurva gelombang fungsi trigonometri $y = 3\\sin(2x - \\pi) + 1$ untuk domain $0 \\le x \\le \\pi$.\n\nPerhatikan pernyataan-pernyataan berikut:\n(1) Nilai maksimum kurva fungsi tersebut adalah $4$.\n(2) Nilai minimum kurva fungsi tersebut adalah $-2$.\n(3) Periode satu gelombang penuh dari fungsi tersebut adalah $\\pi$.\n(4) Amplitudo simpangan gelombang fungsi tersebut adalah $3$.\n\nPernyataan yang bernilai **BENAR** adalah...",
    "opsi": [
      "A. (1) dan (2) saja",
      "B. (1), (2), dan (3)",
      "C. (2), (3), dan (4)",
      "D. (1), (2), (3), dan (4)",
      "E. (3) dan (4) saja"
    ],
    "kunci": "D",
    "bahas": "Langkah 1: Bentuk umum gelombang $y = A\\sin(k(x - c)) + D$:\nAmplitudo $|A| = |3| = 3$. (Pernyataan 4 BENAR)\nPergeseran vertikal $D = 1$, koefisien frekuensi $k = 2$.\n\nLangkah 2: Hitung nilai ekstrem:\n- Nilai Maksimum $= |A| + D = 3(1) + 1 = 4$. (Pernyataan 1 BENAR)\n- Nilai Minimum $= -|A| + D = 3(-1) + 1 = -2$. (Pernyataan 2 BENAR)\n\nLangkah 3: Hitung periode gelombang:\n$\\text{Periode} = \\frac{2\\pi}{k} = \\frac{2\\pi}{2} = \\pi$. (Pernyataan 3 BENAR)\n\nSeluruh pernyataan (1), (2), (3), dan (4) bernilai BENAR.\n\nKesimpulan: Kunci D benar.",
    "level": "Level 2 (Sedang)"
  }
]
}
  };

  function getWeeklyCampaignId(refDate) {
    const now = refDate ? new Date(refDate) : new Date();
    // Launch Time Pekan 2 (W42): Senin, 12 Oktober 2026 pukul 05:00 WIB
    const w42LaunchTime = new Date('2026-10-11T22:00:00.000Z').getTime();
    // Launch Time Pekan 3 (W43): Senin, 19 Oktober 2026 pukul 00:00 WIB (2026-10-18T17:00:00.000Z)
    const w43LaunchTime = new Date('2026-10-18T17:00:00.000Z').getTime();
    if (now.getTime() >= w43LaunchTime) {
      return '2026-W43';
    }
    if (now.getTime() < w42LaunchTime) {
      return '2026-W41';
    }
    const wibNow = new Date(now.getTime() + (7 * 60 * 60 * 1000));
    const dayOfWeek = wibNow.getUTCDay();
    const hours = wibNow.getUTCHours();
    if (dayOfWeek === 1 && hours < 5) {
      wibNow.setUTCDate(wibNow.getUTCDate() - 1);
    }
    const year = wibNow.getUTCFullYear();
    const d = new Date(Date.UTC(wibNow.getUTCFullYear(), wibNow.getUTCMonth(), wibNow.getUTCDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return `${year}-W${String(weekNo).padStart(2, '0')}`;
  }

  function stringToSeed(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  }

  function mulberry32(a) {
    return function() {
      let t = a += 0x6D2B79F5;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffleWithRng(array, rng) {
    const a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getWeeklyRaid50Questions(nis, weekId, squadType) {
    const wId = weekId || getWeeklyCampaignId();
    const squad = squadType || 'F1_F2';
    const activePool = WEEKLY_POOLS[wId] || WEEKLY_POOLS['2026-W42'] || WEEKLY_POOLS['2026-W41'];
    let raw = [];

    if (squad === 'F1_F2') {
      raw = (activePool.matwa || []).filter(q => (q.mapel || '').toLowerCase() !== 'additional mathematics');
    } else {
      if (wId === '2026-W41') {
        // 25 Matwa (13 P15 + 12 P16) + 25 Matmin (P17)
        const w25 = [
          ...activePool.matwa.slice(0, 13),
          ...activePool.matwa.slice(25, 37)
        ];
        const m25 = [...activePool.matmin.slice(0, 25)];
        raw = [...w25, ...m25];
      } else if (wId === '2026-W42') {
        // 2026-W42: 25 Matwa (13 P17 + 12 P18) + 25 Matmin (13 P18 + 12 P19)
        const w25 = [
          ...activePool.matwa.slice(0, 13),
          ...activePool.matwa.slice(25, 37)
        ];
        const m25 = [
          ...activePool.matmin.slice(0, 13),
          ...activePool.matmin.slice(13, 25)
        ];
        raw = [...w25, ...m25];
      } else if (wId === '2026-W43') {
        // 2026-W43 (Gladi Bersih TKA Nasional): 25 TKA Wajib (8 K10 + 8 K11 + 9 K12) + 25 TKA Minat (10 K10-K11 + 15 K12)
        const w25 = [
          ...activePool.matwa.slice(0, 8),    // K10 (8 soal: W01-W08)
          ...activePool.matwa.slice(15, 23),  // K11 (8 soal: W16-W23)
          ...activePool.matwa.slice(30, 39)   // K12 (9 soal: W31-W39)
        ];
        const m25 = [
          ...activePool.matmin.slice(0, 10),  // K10-K11 Minat (10 soal: M01-M10)
          ...activePool.matmin.slice(20, 35)  // K12 Minat (15 soal: M21-M35)
        ];
        raw = [...w25, ...m25];
      } else {
        const w25 = [...activePool.matwa.slice(0, 25)];
        const m25 = [...activePool.matmin.slice(0, 25)];
        raw = [...w25, ...m25];
      }
    }

    const seedKey = (nis || 'ANON') + '_' + wId + '_' + squad;
    const rng = mulberry32(stringToSeed(seedKey));
    const shuffled = shuffleWithRng(raw, rng);

    return shuffled.map((q, idx) => ({
      ...q,
      campaignIndex: idx,
      no: idx + 1,
      _squadType: squad,
      _weekId: wId,
      _sourceSubject: q.mapel,
      _sourceKode: (q.materi || '').split(/[•\u2022\uFFFD]/)[0]?.trim() || '',
      _sourceTitle: (q.materi || '').split(/[•\u2022\uFFFD]/)[1]?.trim() || q.materi || ''
    }));
  }

  const currentPool = WEEKLY_POOLS[getWeeklyCampaignId()] || WEEKLY_POOLS['2026-W43'] || WEEKLY_POOLS['2026-W42'];

  if (typeof window !== 'undefined') {
    window.WEEKLY_RAID_BANK = currentPool;
    window.WEEKLY_POOLS = WEEKLY_POOLS;
    window.getWeeklyCampaignId = getWeeklyCampaignId;
    window.getWeeklyRaid50Questions = getWeeklyRaid50Questions;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      WEEKLY_POOL: currentPool,
      WEEKLY_POOLS,
      getWeeklyCampaignId,
      getWeeklyRaid50Questions
    };
  }
})();
