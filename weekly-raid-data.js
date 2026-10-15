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
}
  };

  function getWeeklyCampaignId(refDate) {
    const now = refDate ? new Date(refDate) : new Date();
    // Launch Time Pekan 2 (W42): Senin, 12 Oktober 2026 pukul 05:00 WIB (2026-10-11T22:00:00.000Z)
    const w42LaunchTime = new Date('2026-10-11T22:00:00.000Z').getTime();
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
      } else {
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

  const currentPool = WEEKLY_POOLS[getWeeklyCampaignId()] || WEEKLY_POOLS['2026-W42'];

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
