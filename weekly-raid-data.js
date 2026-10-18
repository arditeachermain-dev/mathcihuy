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
      "bahas": "Langkah 1: Identifikasi variabel: $N_0 = 300$, $t = 120\\text{ menit}$.\nLangkah 2: Rasio eksponen: $\\frac{t}{20} = \\frac{120}{20} = 6$.\nLangkah 3: Jumlah akhir: $N(120) = 300 \\cdot 2^6 = 300 \\cdot 64 = 19.200\\text{ bakteri}$.\nKesimpulan: Kunci C benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-W02",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 10 • Eksponen Peluruhan Radioisotop Medis",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Di rumah sakit onkologi, unsur radioisotop Iodium-131 ($^{131}\\text{I}$) digunakan untuk terapi kanker tiroid. Unsur ini meluruh mengikuti persamaan $A(t) = A_0 \\left(\\frac{1}{2}\\right)^{t/8}$, dengan $t$ menyatakan waktu peluruhan dalam hari dan $A_0$ adalah aktivitas radiasi awal. Jika sampel awal memiliki aktivitas radiasi $160\\text{ mCi}$, berapakah sisa aktivitas radiasi (dalam mCi) setelah disimpan selama 32 hari? (Tuliskan bilangan bulat akhirnya saja)",
      "opsi": [],
      "kunci": "10",
      "bahas": "Langkah 1: $A_0 = 160\\text{ mCi}$, waktu paruh $T_{1/2} = 8\\text{ hari}$, $t = 32\\text{ hari}$.\nLangkah 2: Pangkat peluruhan: $\\frac{32}{8} = 4$.\nLangkah 3: Sisa aktivitas: $A(32) = 160 \\times \\left(\\frac{1}{2}\\right)^4 = 160 \\times \\frac{1}{16} = 10\\text{ mCi}$.\nKesimpulan: Nilai numerik = 10.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-W03",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 10 • Logaritma Terapan Gempa & Kebisingan",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Analisis kebenaran setiap pernyataan berikut terkait penerapan fungsi logaritma dalam sains dan geofisika:",
      "opsi": [
        "Gempa tektonik Padang bermagnitudo 6,8 SR memiliki intensitas fisik tepat 100 kali lebih kuat dibandingkan gempa susulan Cilacap 4,8 SR.",
        "Jika satu mesin jet bandara menghasilkan taraf intensitas 120 dB, maka 100 mesin jet sejenis yang dinyalakan bersamaan akan menghasilkan 240 dB.",
        "Nilai selisih taraf intensitas bunyi $\\Delta TI = 10\\log(n)$ bertambah secara logaritmik terhadap kelipatan jumlah sumber bunyi $n$.",
        "Skala Richter merupakan skala linier di mana setiap kenaikan 1 skala setara dengan penambahan 10 kali energi fisik gempa."
      ],
      "kunci": "B - S - B - S",
      "bahas": "Langkah 1: Pernyataan 1 BENAR: $M_1 - M_2 = 6,8 - 4,8 = 2 \\implies I_1 / I_2 = 10^2 = 100$ kali lipat.\nLangkah 2: Pernyataan 2 SALAH: $TI_{100} = 120 + 10\\log(100) = 120 + 20 = 140\\text{ dB}$, bukan 240 dB.\nLangkah 3: Pernyataan 3 BENAR: Rumus penambahan bunyi adalah logaritmik $\\Delta TI = 10\\log(n)$.\nLangkah 4: Pernyataan 4 SALAH: Skala Richter adalah skala logaritmik, bukan skala linier.\nKesimpulan: Kunci = B - S - B - S.",
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
      "bahas": "Langkah 1: Rumus taraf intensitas $n$ sumber identik: $TI_n = TI_1 + 10 \\log(n)$.\nLangkah 2: Substitusikan $TI_1 = 120\\text{ dB}$ dan $n = 100$:\n$TI_{100} = 120 + 10 \\log(100) = 120 + 10(2) = 140\\text{ dB}$.\nKesimpulan: Kunci C benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W05",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 10 • Barisan dan Deret Terapan Industri",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Sebuah smelter nikel memproduksi feronikel dengan volume bulan pertama 120 ton dan bertambah tetap 15 ton setiap bulan. Di lab pengujian, sebuah bola dijatuhkan dari 12 meter dan memantul $\\frac{3}{5}$ kali tinggi sebelumnya secara berulang.\n\nBeri centang pada semua pernyataan yang bernilai BENAR:",
      "opsi": [
        "A. Volume produksi feronikel pada bulan ke-6 mencapai 195 ton.",
        "B. Total volume feronikel yang diproduksi selama 1 tahun pertama (12 bulan) adalah 2.430 ton.",
        "C. Panjang seluruh lintasan gerak bola sampai akhirnya berhenti adalah 48 meter.",
        "D. Pola produksi feronikel bulanan membentuk deret geometri dengan rasio konstan.",
        "E. Bola mencapai ketinggian 8 meter pada pantulan pertamanya di lantai."
      ],
      "kunci": "A, B, C",
      "bahas": "Langkah 1: Opsi A BENAR: $U_6 = 120 + (6-1)(15) = 120 + 75 = 195$ ton.\nLangkah 2: Opsi B BENAR: $S_{12} = \\frac{12}{2}[2(120) + 11(15)] = 6[240 + 165] = 6(405) = 2.430$ ton.\nLangkah 3: Opsi C BENAR: $S_\\infty = 12 \\times \\frac{5+3}{5-3} = 12 \\times 4 = 48$ meter.\nLangkah 4: Opsi D SALAH: Penambahan tetap 15 ton adalah barisan aritmetika, bukan geometri.\nLangkah 5: Opsi E SALAH: Tinggi pantulan pertama $= 12 \\times \\frac{3}{5} = 7,2$ meter ($< 8$ m).\nKesimpulan: Kunci = A, B, C.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W06",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 10 • Deret Geometri Tak Hingga Pantulan Bola",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Pada pengujian kualitas bola di laboratorium olahraga, sebuah bola dijatuhkan dari ketinggian $12\\text{ meter}$. Setiap kali menyentuh lantai, bola memantul mencapai $\\frac{3}{5}$ dari tinggi sebelumnya secara berulang. Berapakah panjang seluruh lintasan bola (dalam meter) sampai berhenti? (Tuliskan bilangan bulat akhirnya saja)",
      "opsi": [],
      "kunci": "48",
      "bahas": "Langkah 1: Gunakan formula panjang lintasan bola $S_\\infty = h \\left(\\frac{b+a}{b-a}\\right)$.\nLangkah 2: Dengan $h = 12$, rasio pantulan $\\frac{a}{b} = \\frac{3}{5}$:\n$S_\\infty = 12 \\times \\frac{5+3}{5-3} = 12 \\times \\frac{8}{2} = 48\\text{ meter}$.\nKesimpulan: Nilai numerik = 48.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W07",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 10 • Bunga Tunggal Deposito Pendidikan Syariah",
      "tipe": "Kausatif Sebab-Akibat",
      "tanya": "Perhatikan dua pernyataan berikut:\n**Pernyataan:** Simpanan deposito pendidikan syariah sebesar $\\text{Rp}50.000.000$ dengan bagi hasil bunga tunggal $6\\%$ per tahun membutuhkan waktu tepat 6 tahun untuk berkembang menjadi $\\text{Rp}68.000.000$.\n**SEBAB**\n**Alasan:** Pada sistem bunga tunggal, akumulasi pertambahan imbal hasil bunga dihitung secara konstan hanya berdasarkan besaran modal pokok simpanan mula-mula.\n\nHubungan logis yang tepat antara kedua pernyataan di atas adalah...",
      "opsi": [
        "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab-akibat yang valid.",
        "B. Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab-akibat.",
        "C. Pernyataan benar dan alasan salah.",
        "D. Pernyataan salah dan alasan benar.",
        "E. Pernyataan dan alasan keduanya salah."
      ],
      "kunci": "A",
      "bahas": "Langkah 1: Pernyataan BENAR: Bunga total Rp18.000.000, bunga per tahun $6\\% \\times 50\\text{ jt} = 3\\text{ jt}$. Waktu $t = 18/3 = 6$ tahun.\nLangkah 2: Alasan BENAR: Definisi sistem bunga tunggal adalah bunga konstan terhadap modal awal.\nLangkah 3: Alasan menjelaskan secara langsung rumus pembagi yang menghasilkan waktu 6 tahun. Kausalitas valid.\nKesimpulan: Kunci A.",
      "level": "Level 2 (Sedang)"
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
      "bahas": "Langkah 1: Model: (1) $3x + 5y = 19,5$; (2) $2x + 3y = 12,3$.\nLangkah 2: Eliminasi $x$: $2(1) - 3(2) \\implies y = 2,1$ juta (scanner).\nLangkah 3: Substitusi $y = 2,1 \\implies 2x + 6,3 = 12,3 \\implies x = 3,0$ juta (printer).\nLangkah 4: Harga $x + y = 3,0 + 2,1 = 5,1$ juta = Rp5.100.000.\nKesimpulan: Kunci B benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W09",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 10 • SPLTV Paket Pupuk Pertanian Modern",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Kelompok tani memesan tiga paket pupuk (Urea, SP-36, NPK). Paket A (1 Urea, 2 SP-36, 1 NPK) seharga Rp190.000. Paket B (2 Urea, 1 SP-36, 3 NPK) seharga Rp320.000. Paket C (3 Urea, 2 SP-36, 2 NPK) seharga Rp350.000. Berapakah harga satuan untuk 1 karung pupuk NPK (dalam rupiah)? (Tuliskan bilangan bulat angka saja tanpa simbol mata uang)",
      "opsi": [],
      "kunci": "60000",
      "bahas": "Langkah 1: (1) $u + 2s + n = 190$; (2) $2u + s + 3n = 320$; (3) $3u + 2s + 2n = 350$.\nLangkah 2: (3) - (1) $\\implies 2u + n = 160 \\implies 2u = 160 - n$.\nLangkah 3: Dari (2), $s = 320 - 2u - 3n = 160 - 2n$.\nLangkah 4: Kalikan (1) dengan 2: $(160 - n) + 4(160 - 2n) + 2n = 380 \\implies 800 - 7n = 380 \\implies 7n = 420 \\implies n = 60$ ribu rupiah = Rp60.000.\nKesimpulan: Nilai numerik = 60000.",
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
      "bahas": "Langkah 1: Tinggi di atas garis mata: $y = x \\tan(60^\\circ) = 20\\sqrt{3}\\text{ meter}$.\nLangkah 2: Tinggi total menara: $H = 1,6 + 20\\sqrt{3}\\text{ meter}$.\nKesimpulan: Kunci B benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-W11",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 10 • Aturan Cosinus Navigasi Kapal Patroli",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Dua kapal patroli Badan Keamanan Laut (Bakamla) bertolak serentak dari dermaga pangkalan di titik $O$. Kapal pertama berlayar ke arah timur laut sejauh $6\\text{ mil laut}$, sedangkan kapal kedua berlayar ke arah yang membentuk sudut $60^\\circ$ terhadap lintasan kapal pertama sejauh $10\\text{ mil laut}$. Berapakah jarak langsung antara kedua kapal patroli tersebut pada posisi terakhir?",
      "opsi": [
        "A. $2\\sqrt{17}\\text{ mil laut}$",
        "B. $2\\sqrt{19}\\text{ mil laut}$",
        "C. $4\\sqrt{5}\\text{ mil laut}$",
        "D. $2\\sqrt{21}\\text{ mil laut}$",
        "E. $8\\text{ mil laut}$"
      ],
      "kunci": "B",
      "bahas": "Langkah 1: Aturan Cosinus: $d^2 = 6^2 + 10^2 - 2(6)(10)\\cos(60^\\circ)$.\nLangkah 2: $d^2 = 36 + 100 - 60 = 76$.\nLangkah 3: $d = \\sqrt{76} = 2\\sqrt{19}\\text{ mil laut}$.\nKesimpulan: Kunci B benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W12",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 10 • Aturan Sinus Triangulasi Pos SAR",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Tim SAR mendeteksi sinyal darurat pendaki di titik $C$ melalui dua pos pantau $A$ dan $B$ yang berjarak $8\\sqrt{2}\\text{ km}$. Sudut $\\angle CAB = 105^\\circ$ dan sudut $\\angle CBA = 30^\\circ$. Berapakah jarak langsung dari pos pantau $A$ ke titik sinyal $C$ (dalam km)? (Tuliskan hanya bilangan bulat angka akhirnya saja)",
      "opsi": [],
      "kunci": "8",
      "bahas": "Langkah 1: Sudut $\\angle C = 180^\\circ - (105^\\circ + 30^\\circ) = 45^\\circ$.\nLangkah 2: Aturan Sinus: $\\frac{AC}{\\sin(30^\\circ)} = \\frac{AB}{\\sin(45^\\circ)}$.\nLangkah 3: $AC = 8\\sqrt{2} \\times \\frac{1/2}{\\sqrt{2}/2} = 8\\text{ km}$.\nKesimpulan: Nilai numerik = 8.",
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
      "bahas": "Langkah 1: Siklus satuan 7: $7, 9, 3, 1$ (periode 4).\nLangkah 2: $2026 = 4 \\times 506 + 2$ (bersisa 2).\nLangkah 3: Angka satuan sama dengan $7^2 = 49 \\implies 9$.\nKesimpulan: Kunci D benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-W14",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 10 • Sistem Pertidaksamaan Efisiensi Logistik",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Manajer proyek konstruksi IKN menyewa armada: Truk Tipe X (kapasitas 4 ton, sewa Rp1.000.000/hari) dan Truk Tipe Y (kapasitas 6 ton, sewa Rp1.200.000/hari). Target angkutan tanah minimal 120 ton per hari ($4x + 6y \\ge 120$).\n\nCentang semua pernyataan yang bernilai BENAR:",
      "opsi": [
        "A. Biaya sewa per ton material pada armada Truk Y lebih murah dibandingkan Truk X.",
        "B. Jika seluruh armada menggunakan Truk X saja, dibutuhkan minimal 25 unit truk.",
        "C. Titik pojok daerah penyelesaian untuk penggunaan Truk Y saja adalah $(0, 20)$ dengan biaya Rp24.000.000.",
        "D. Biaya sewa minimum harian dicapai dengan menyewa 20 unit Truk Tipe Y dan 0 unit Truk Tipe X.",
        "E. Menyewa 15 unit Truk X dan 10 unit Truk Y menghabiskan biaya total Rp30.000.000."
      ],
      "kunci": "A, C, D",
      "bahas": "Langkah 1: Opsi A BENAR: Truk Y Rp200.000/ton vs Truk X Rp250.000/ton.\nLangkah 2: Opsi B SALAH: Untuk Truk X saja, $4x \\ge 120 \\implies x \\ge 30$ unit (bukan 25).\nLangkah 3: Opsi C BENAR: $6y \\ge 120 \\implies y = 20$, biaya $= 20 \\times 1,2\\text{ jt} = 24$ juta.\nLangkah 4: Opsi D BENAR: Karena Truk Y lebih efisien, biaya minimum Rp24.000.000 dicapai pada $(0, 20)$.\nLangkah 5: Opsi E SALAH: Biaya $= 15(1\\text{ jt}) + 10(1,2\\text{ jt}) = 15 + 12 = 27$ juta (bukan 30 juta).\nKesimpulan: Kunci = A, C, D.",
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
      "bahas": "Langkah 1: Kalikan sekawan: $\\frac{12(\\sqrt{7} + \\sqrt{3})}{7 - 3} = \\frac{12(\\sqrt{7} + \\sqrt{3})}{4}$.\nLangkah 2: $3(\\sqrt{7} + \\sqrt{3}) = 3\\sqrt{7} + 3\\sqrt{3}\\text{ meter}$.\nKesimpulan: Kunci B benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-W16",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 11 • Fungsi Komposisi Dua Tahap Mesin Tekstil",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Sebuah pabrik tekstil memproses $x$ ton serat kapas menjadi bahan benang melalui rumus $f(x) = 3x - 2$. Mesin II mengolah benang $m$ menjadi gulungan kain melalui rumus $g(m) = 2m^2 + 5$. Jika bahan baku serat kapas yang dimasukkan ke mesin I adalah $4\\text{ ton}$, berapakah total ton gulungan kain yang dihasilkan pabrik tersebut?",
      "opsi": [
        "A. $195\\text{ ton}$",
        "B. $200\\text{ ton}$",
        "C. $205\\text{ ton}$",
        "D. $210\\text{ ton}$",
        "E. $225\\text{ ton}$"
      ],
      "kunci": "C",
      "bahas": "Langkah 1: $f(4) = 3(4) - 2 = 10$ ton benang.\nLangkah 2: $g(10) = 2(100) + 5 = 205$ ton gulungan kain.\nKesimpulan: Kunci C benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W17",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 11 • Fungsi Komposisi Diskon Ganda Toko",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Pusat perbelanjaan memberikan promosi diskon bertingkat: diskon pertama 20% melalui $f(x) = 0,8x$, dilanjutkan voucher cashback Rp50.000 melalui $g(x) = x - 50.000$. Jika harga banderol laptop adalah Rp8.000.000, berapakah harga akhir yang harus dibayar konsumen setelah $(g \\circ f)(x)$ (dalam rupiah)? (Tuliskan bilangan bulat angka saja tanpa tanda titik atau rupiah)",
      "opsi": [],
      "kunci": "6350000",
      "bahas": "Langkah 1: $f(8.000.000) = 0,8 \\times 8.000.000 = 6.400.000$.\nLangkah 2: $g(6.400.000) = 6.400.000 - 50.000 = 6.350.000$.\nKesimpulan: Nilai numerik = 6350000.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-W18",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 11 • Fungsi Invers Konversi Valuta Asing",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Sebuah money changer menerapkan rumus penukaran Dolar AS ($x$) ke Rupiah ($y$) dengan $f(x) = 15.500x - 25.000$. Jika turis menerima uang tunai Rupiah sebesar Rp46.475.000, berapa nominal Dolar AS yang ia tukarkan? (Tuliskan hanya angka bulatnya saja)",
      "opsi": [],
      "kunci": "3000",
      "bahas": "Langkah 1: $15.500x - 25.000 = 46.475.000$.\nLangkah 2: $15.500x = 46.500.000 \\implies x = 3.000\\text{ USD}$.\nKesimpulan: Nilai numerik = 3000.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W19",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 11 • Fungsi Invers Pecahan Rasional",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Konsentrasi larutan desinfektan diatur menurut fungsi rasional $f(x) = \\frac{4x + 1}{2x - 3}$ dengan $x \\neq \\frac{3}{2}$. Rumus fungsi invers $f^{-1}(x)$ untuk menentukan kembali dosis bahan asal adalah...",
      "opsi": [
        "A. $f^{-1}(x) = \\frac{3x + 1}{2x - 4}, \\quad x \\neq 2$",
        "B. $f^{-1}(x) = \\frac{3x - 1}{2x - 4}, \\quad x \\neq 2$",
        "C. $f^{-1}(x) = \\frac{4x + 3}{2x - 1}, \\quad x \\neq \\frac{1}{2}$",
        "D. $f^{-1}(x) = \\frac{2x + 1}{4x - 3}, \\quad x \\neq \\frac{3}{4}$",
        "E. $f^{-1}(x) = \\frac{3x + 1}{2x + 4}, \\quad x \\neq -2$"
      ],
      "kunci": "A",
      "bahas": "Langkah 1: Rumus invers: $f^{-1}(x) = \\frac{-dx + b}{cx - a}$.\nLangkah 2: Koefisien $a = 4, b = 1, c = 2, d = -3$.\nLangkah 3: $f^{-1}(x) = \\frac{3x + 1}{2x - 4}, x \\neq 2$.\nKesimpulan: Kunci A benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W20",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 11 • Operasi Matriks Omzet Cabang Restoran",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Matriks penjualan menu Makanan dan Minuman di Cabang A dan B adalah $S = \\begin{pmatrix} 40 & 60 \\\\ 25 & 35 \\end{pmatrix}$, dan harga per porsi adalah $P = \\begin{pmatrix} 20.000 \\\\ 8.000 \\end{pmatrix}$. Analisis kebenaran setiap pernyataan berikut:",
      "opsi": [
        "Total omzet pendapatan khusus di Cabang A adalah Rp1.280.000.",
        "Total omzet pendapatan khusus di Cabang B adalah Rp780.000.",
        "Selisih pendapatan antara Cabang A dan Cabang B adalah Rp400.000.",
        "Total seluruh pendapatan dari kedua cabang digabungkan adalah Rp2.060.000."
      ],
      "kunci": "B - B - S - B",
      "bahas": "Langkah 1: Cabang A: $40(20.000) + 60(8.000) = 800.000 + 480.000 = \\text{Rp}1.280.000$. (BENAR)\nLangkah 2: Cabang B: $25(20.000) + 35(8.000) = 500.000 + 280.000 = \\text{Rp}780.000$. (BENAR)\nLangkah 3: Selisih: $1.280.000 - 780.000 = \\text{Rp}500.000$, bukan Rp400.000. (SALAH)\nLangkah 4: Total gabungan: $1.280.000 + 780.000 = \\text{Rp}2.060.000$. (BENAR)\nKesimpulan: Kunci = B - B - S - B.",
      "level": "Level 2 (Sedang)"
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
      "bahas": "Langkah 1: $\\det(M) = 2k(k + 1) - 24 = 0$.\nLangkah 2: $2k^2 + 2k - 24 = 0 \\iff k^2 + k - 12 = 0$.\nLangkah 3: $(k + 4)(k - 3) = 0 \\implies k = 3$ atau $k = -4$.\nKesimpulan: Kunci B benar.",
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
      "bahas": "Langkah 1: $\\det(K) = 6 - 5 = 1$.\nLangkah 2: $K^{-1} = \\frac{1}{1} \\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$.\nKesimpulan: Kunci A benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-W23",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 11 • Transformasi Translasi Ganda Crane Pelabuhan",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Sebuah kontainer di dermaga berposisi awal di $A(4, -7)$. Crane melakukan translasi $T_1 = \\begin{pmatrix} -6 \\\\ 9 \\end{pmatrix}$, kemudian digeser lagi oleh $T_2 = \\begin{pmatrix} 5 \\\\ -3 \\end{pmatrix}$.\n\nCentang semua pernyataan yang bernilai BENAR:",
      "opsi": [
        "A. Posisi kontainer setelah translasi pertama $T_1$ adalah $(-2, -2)$.",
        "B. Vektor translasi tunggal gabungan $T_1 + T_2$ adalah $\\begin{pmatrix} -1 \\\\ 6 \\end{pmatrix}$.",
        "C. Posisi akhir kontainer setelah kedua pergeseran adalah $(3, 1)$.",
        "D. Koordinat posisi akhir kontainer adalah $(3, -1)$.",
        "E. Total perpindahan bersih crane sepanjang sumbu X adalah ke kanan sejauh 5 satuan."
      ],
      "kunci": "B, D",
      "bahas": "Langkah 1: Opsi A SALAH: $A' = (4-6, -7+9) = (-2, 2)$, bukan $(-2, -2)$.\nLangkah 2: Opsi B BENAR: $T_{\\text{total}} = \\begin{pmatrix} -6+5 \\\\ 9-3 \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ 6 \\end{pmatrix}$.\nLangkah 3: Opsi C SALAH dan Opsi D BENAR: $A'' = (4-1, -7+6) = (3, -1)$.\nLangkah 4: Opsi E SALAH: Perpindahan bersih sumbu X adalah $-1$ satuan (ke kiri 1 satuan).\nKesimpulan: Kunci = B, D.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W24",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 11 • Transformasi Refleksi dan Rotasi Radar",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Titik sinyal radar pesawat mula-mula berada pada posisi $P(-3, 5)$. Sinyal dikalibrasi dengan merefleksikan posisi tersebut terhadap garis $y = x$, kemudian diputar $90^\\circ$ berlawanan arah jarum jam dengan pusat $O(0, 0)$. Koordinat akhir sinyal pesawat setelah kalibrasi adalah...",
      "opsi": [
        "A. $(-5, -3)$",
        "B. $(3, -5)$",
        "C. $(3, 5)$",
        "D. $(-3, 5)$",
        "E. $(5, 3)$"
      ],
      "kunci": "C",
      "bahas": "Langkah 1: Refleksi $y = x$: $(-3, 5) \\to (5, -3)$.\nLangkah 2: Rotasi $+90^\\circ$: $(x', y') \\to (-y', x') \\implies (-(-3), 5) = (3, 5)$.\nKesimpulan: Kunci C benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W25",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 11 • Transformasi Dilatasi Skala Masterplan",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Pada masterplan tata ruang digital, bidang lahan hijau memiliki luas awal $15\\text{ cm}^2$. Gambar tersebut diperbesar dengan transformasi dilatasi faktor skala $k = 4$. Berapakah luas bidang lahan hijau pada gambar setelah didilatasi (dalam $\\text{cm}^2$)? (Tuliskan bilangan bulat akhirnya saja)",
      "opsi": [],
      "kunci": "240",
      "bahas": "Langkah 1: Rumus perbesaran luas 2D: $L' = k^2 \\times L$.\nLangkah 2: $L' = 4^2 \\times 15 = 16 \\times 15 = 240\\text{ cm}^2$.\nKesimpulan: Nilai numerik = 240.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-W26",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 11 • Polinomial Teorema Sisa Reaksi Kimia",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Laju reaksi kimia dikarakterisasi oleh polinomial $P(x) = 2x^3 - 5x^2 + 4x + k$. Ketika fungsi reaksi tersebut dibagi oleh $(x - 2)$, nilai sisa reaksinya tepat sebesar $11$. Berapakah nilai dari konstanta reaksi $k$?",
      "opsi": [
        "A. $3$",
        "B. $5$",
        "C. $7$",
        "D. $9$",
        "E. $11$"
      ],
      "kunci": "C",
      "bahas": "Langkah 1: $P(2) = 2(8) - 5(4) + 8 + k = 11$.\nLangkah 2: $16 - 20 + 8 + k = 11 \\implies 4 + k = 11 \\implies k = 7$.\nKesimpulan: Kunci C benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W27",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 11 • GSPL Gir Transmisi Sepeda",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Dua gir transmisi sepeda memiliki jari-jari $R = 14\\text{ cm}$ dan $r = 5\\text{ cm}$. Jarak antara kedua pusat poros gir adalah $15\\text{ cm}$. Berapakah panjang rentangan bebas rantai pada garis singgung persekutuan luar (dalam cm)? (Tuliskan bilangan bulat angka saja)",
      "opsi": [],
      "kunci": "12",
      "bahas": "Langkah 1: $d = \\sqrt{p^2 - (R - r)^2}$.\nLangkah 2: $R - r = 14 - 5 = 9\\text{ cm}$.\nLangkah 3: $d = \\sqrt{15^2 - 9^2} = \\sqrt{225 - 81} = \\sqrt{144} = 12\\text{ cm}$.\nKesimpulan: Nilai numerik = 12.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-W28",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 11 • Sudut Pusat dan Sudut Keliling Kubah Masjid",
      "tipe": "Kausatif Sebab-Akibat",
      "tanya": "Perhatikan dua pernyataan matematis berikut:\n**Pernyataan:** Pada struktur penopang kubah masjid, sudut keliling $\\angle ACB$ yang menghadap busur yang sama dengan sudut pusat $\\angle AOB = 110^\\circ$ memiliki besar tepat $55^\\circ$.\n**SEBAB**\n**Alasan:** Teorema sudut lingkaran menetapkan bahwa besar sudut keliling selalu sama dengan setengah dari besar sudut pusat apabila kedua sudut tersebut menghadap busur lingkaran yang sama.\n\nHubungan logis yang tepat antara kedua pernyataan di atas adalah...",
      "opsi": [
        "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab-akibat yang valid.",
        "B. Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab-akibat.",
        "C. Pernyataan benar dan alasan salah.",
        "D. Pernyataan salah dan alasan benar.",
        "E. Pernyataan dan alasan keduanya salah."
      ],
      "kunci": "A",
      "bahas": "Langkah 1: Pernyataan BENAR: Sudut keliling $= \\frac{1}{2} \\times 110^\\circ = 55^\\circ$.\nLangkah 2: Alasan BENAR: Definisi teorema sudut pusat dan keliling.\nLangkah 3: Kausalitas VALID: Alasan merupakan dasar penarikan kesimpulan pernyataan.\nKesimpulan: Kunci A.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-W29",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 11 • Geometri Lingkaran Juring Panel Surya",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Sayap panel surya satelit berbentuk juring lingkaran dengan sudut pusat $\\alpha = 60^\\circ$ dan jari-jari $r = 21\\text{ cm}$ (gunakan $\\pi = \\frac{22}{7}$). Analisis kebenaran setiap pernyataan berikut:",
      "opsi": [
        "Luas permukaan juring panel surya tersebut adalah $231\\text{ cm}^2$.",
        "Panjang busur lengkung luar juring panel surya tersebut adalah $44\\text{ cm}$.",
        "Panjang busur lengkung luar juring tersebut adalah $22\\text{ cm}$.",
        "Keliling total bidang juring panel surya adalah $44\\text{ cm}$."
      ],
      "kunci": "B - S - B - S",
      "bahas": "Langkah 1: Luas $= \\frac{60}{360} \\times \\frac{22}{7} \\times 21 \\times 21 = \\frac{1}{6} \\times 66 \\times 21 = 231\\text{ cm}^2$. (Pernyataan 1 BENAR)\nLangkah 2: Panjang busur $= \\frac{60}{360} \\times 2 \\times \\frac{22}{7} \\times 21 = \\frac{1}{6} \\times 132 = 22\\text{ cm}$. (Pernyataan 2 SALAH, Pernyataan 3 BENAR)\nLangkah 3: Keliling total $= \\text{busur} + 2r = 22 + 42 = 64\\text{ cm}$, bukan 44 cm. (Pernyataan 4 SALAH)\nKesimpulan: Kunci = B - S - B - S.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W30",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 11 • Karakteristik Aljabar dan Invers",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Perhatikan sifat-sifat fundamental dalam fungsi dan matriks aljabar.\n\nCentang semua pernyataan yang bernilai BENAR:",
      "opsi": [
        "A. Nilai komposisi fungsi dengan fungsi inversnya $(f \\circ f^{-1})(x)$ selalu menghasilkan fungsi identitas $x$.",
        "B. Suatu fungsi dijamin selalu memiliki fungsi invers jika fungsi tersebut surjektif meskipun tidak injektif.",
        "C. Invers dari fungsi komposisi membalik urutan fungsi: $(f \\circ g)^{-1}(x) = (g^{-1} \\circ f^{-1})(x)$.",
        "D. Determinan dari matriks identitas berordo sembarang selalu bernilai 1.",
        "E. Matriks singular adalah matriks yang memiliki nilai determinan tidak sama dengan nol."
      ],
      "kunci": "A, C, D",
      "bahas": "Langkah 1: Opsi A BENAR: $(f \\circ f^{-1})(x) = x$.\nLangkah 2: Opsi B SALAH: Syarat mutlak invers adalah fungsi bijektif (injektif dan surjektif).\nLangkah 3: Opsi C BENAR: Sifat invers komposisi membalik urutan.\nLangkah 4: Opsi D BENAR: Determinan matriks identitas selalu 1.\nLangkah 5: Opsi E SALAH: Matriks singular adalah matriks yang determinannya sama dengan nol.\nKesimpulan: Kunci = A, C, D.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W31",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 12 • Geometri Tiga Dimensi Jarak Titik ke Garis",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Sebuah rak server komputer berbentuk balok $ABCD.EFGH$ memiliki panjang $AB = 8\\text{ cm}$, lebar $BC = 6\\text{ cm}$, dan tinggi $CG = 10\\text{ cm}$. Berapakah jarak tegak lurus dari titik sudut $A$ ke garis diagonal bidang alas $BD$?",
      "opsi": [
        "A. $3,6\\text{ cm}$",
        "B. $4,2\\text{ cm}$",
        "C. $4,8\\text{ cm}$",
        "D. $5,0\\text{ cm}$",
        "E. $5,4\\text{ cm}$"
      ],
      "kunci": "C",
      "bahas": "Langkah 1: $BD = \\sqrt{8^2 + 6^2} = 10\\text{ cm}$.\nLangkah 2: Kesamaan luas: $\\frac{1}{2} \\times 8 \\times 6 = \\frac{1}{2} \\times 10 \\times h \\implies h = 4,8\\text{ cm}$.\nKesimpulan: Kunci C benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W32",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 12 • Geometri Tiga Dimensi Titik Tengah ke Diagonal Ruang",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Pada kubus $ABCD.EFGH$ dengan rusuk $6\\text{ cm}$, titik $M$ terletak tepat di tengah rusuk $EH$. Berapakah jarak tegak lurus dari titik $M$ ke garis diagonal ruang $AG$?",
      "opsi": [
        "A. $2\\sqrt{2}\\text{ cm}$",
        "B. $2\\sqrt{3}\\text{ cm}$",
        "C. $3\\sqrt{2}\\text{ cm}$",
        "D. $3\\sqrt{3}\\text{ cm}$",
        "E. $4\\sqrt{2}\\text{ cm}$"
      ],
      "kunci": "C",
      "bahas": "Langkah 1: $A(0,0,0), G(6,6,6) \\implies \\vec{u} = \\frac{1}{\\sqrt{3}}(1,1,1)$. Titik $M(0,3,6)$.\nLangkah 2: Proyeksi skalar $\\vec{AM}$ pada arah $AG$: $p = \\frac{0+3+6}{\\sqrt{3}} = 3\\sqrt{3}$.\nLangkah 3: Jarak $d = \\sqrt{|\\vec{AM}|^2 - p^2} = \\sqrt{45 - 27} = \\sqrt{18} = 3\\sqrt{2}\\text{ cm}$.\nKesimpulan: Kunci C benar.",
      "level": "Level 3 (Sulit / HOTS)"
    },
    {
      "id": "W43-W33",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 12 • Geometri Tiga Dimensi Jarak Titik ke Bidang Kubus",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Pada kubus $ABCD.EFGH$ dengan panjang rusuk $6\\sqrt{3}\\text{ cm}$, berapakah jarak tegak lurus dari titik sudut $C$ ke bidang diagonal $BDG$ (dalam cm)? (Tuliskan hanya bilangan bulat angka hasilnya saja)",
      "opsi": [],
      "kunci": "6",
      "bahas": "Langkah 1: Jarak titik sudut $C$ ke bidang $BDG$ adalah $\\frac{1}{3}$ dari panjang diagonal ruang $CE$.\nLangkah 2: Panjang diagonal ruang $CE = s\\sqrt{3} = (6\\sqrt{3})(\\sqrt{3}) = 18\\text{ cm}$.\nLangkah 3: Jarak $d = \\frac{1}{3} \\times 18 = 6\\text{ cm}$.\nKesimpulan: Nilai numerik = 6.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W34",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 12 • Sudut Rusuk Tegak dan Bidang Alas Limas",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Sebuah limas tegak beraturan $T.ABCD$ memiliki alas persegi rusuk $6\\text{ cm}$ dan rusuk tegak $6\\text{ cm}$. Jika $\\alpha$ menyatakan besar sudut antara rusuk tegak $TA$ dan bidang alas $ABCD$, berapakah nilai dari $\\cos(\\alpha)$?",
      "opsi": [
        "A. $\\frac{1}{2}$",
        "B. $\\frac{1}{2}\\sqrt{2}$",
        "C. $\\frac{1}{2}\\sqrt{3}$",
        "D. $\\frac{1}{3}\\sqrt{3}$",
        "E. $\\frac{2}{3}\\sqrt{2}$"
      ],
      "kunci": "B",
      "bahas": "Langkah 1: Diagonal alas $AC = 6\\sqrt{2} \\implies AO = 3\\sqrt{2}\\text{ cm}$.\nLangkah 2: $\\cos(\\alpha) = \\frac{AO}{TA} = \\frac{3\\sqrt{2}}{6} = \\frac{1}{2}\\sqrt{2}$.\nKesimpulan: Kunci B benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W35",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 12 • Statistika Rata-rata Gabungan Dua Rombel",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Rombel 12 F.1 yang terdiri dari 24 siswa memperoleh rata-rata nilai tes 76. Rombel 12 F.2 yang terdiri dari 26 siswa memperoleh nilai rata-rata 86. Berapakah nilai rata-rata gabungan dari seluruh siswa kedua rombel tersebut? (Tuliskan bilangan desimal dengan tanda titik atau koma)",
      "opsi": [],
      "kunci": "81.2",
      "bahas": "Langkah 1: Jumlah nilai 12 F.1: $24 \\times 76 = 1.824$.\nLangkah 2: Jumlah nilai 12 F.2: $26 \\times 86 = 2.236$.\nLangkah 3: Rata-rata gabungan: $\\frac{1.824 + 2.236}{50} = \\frac{4.060}{50} = 81,2$.\nKesimpulan: Nilai numerik = 81.2.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-W36",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 12 • Statistika Penambahan Siswa Baru",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Rata-rata nilai matematika 19 siswa adalah 75. Ketika 1 siswa baru bernama Farhan masuk dan nilainya digabungkan, nilai rata-rata kelas naik menjadi 76. Berapakah nilai tes matematika yang diperoleh Farhan? (Tuliskan bilangan bulat angka saja)",
      "opsi": [],
      "kunci": "95",
      "bahas": "Langkah 1: Total awal: $19 \\times 75 = 1.425$.\nLangkah 2: Total setelah Farhan: $20 \\times 76 = 1.520$.\nLangkah 3: Nilai Farhan: $1.520 - 1.425 = 95$.\nKesimpulan: Nilai numerik = 95.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-W37",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 12 • Statistika Modus Data Berkelompok",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Data waktu tunggu pelayanan paspor dicatat dalam tabel frekuensi:\n$$\\begin{array}{|c|c|}\n\\hline\n\\textbf{Waktu (menit)} & \\textbf{Frekuensi} \\\\\n\\hline\n11 - 15 & 6 \\\\\n16 - 20 & 10 \\\\\n21 - 25 & 18 \\\\\n26 - 30 & 16 \\\\\n31 - 35 & 4 \\\\\n\\hline\n\\end{array}$$\nBerapakah nilai modus waktu tunggu pelayanan paspor tersebut?",
      "opsi": [
        "A. $23,5\\text{ menit}$",
        "B. $24,0\\text{ menit}$",
        "C. $24,5\\text{ menit}$",
        "D. $25,0\\text{ menit}$",
        "E. $25,5\\text{ menit}$"
      ],
      "kunci": "C",
      "bahas": "Langkah 1: Kelas modus $21 - 25$, $T_b = 20,5, p = 5$.\nLangkah 2: $d_1 = 18 - 10 = 8$, $d_2 = 18 - 16 = 2$.\nLangkah 3: $Mo = 20,5 + \\left(\\frac{8}{8 + 2}\\right) \\times 5 = 20,5 + 4,0 = 24,5\\text{ menit}$.\nKesimpulan: Kunci C benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W38",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 12 • Statistika Median Data Berkelompok",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Tabel distribusi frekuensi berat muatan kargo penerbangan udara:\n$$\\begin{array}{|c|c|c|}\n\\hline\n\\textbf{Berat (kg)} & \\textbf{Frekuensi} & \\textbf{Frek. Kumulatif}\\\\\n\\hline\n40 - 49 & 8 & 8 \\\\\n50 - 59 & 12 & 20 \\\\\n60 - 69 & 20 & 40 \\\\\n70 - 79 & 14 & 54 \\\\\n80 - 89 & 6 & 60 \\\\\n\\hline\n\\end{array}$$\nBerapakah nilai median berat muatan kargo tersebut?",
      "opsi": [
        "A. $62,5\\text{ kg}$",
        "B. $63,5\\text{ kg}$",
        "C. $64,5\\text{ kg}$",
        "D. $65,0\\text{ kg}$",
        "E. $65,5\\text{ kg}$"
      ],
      "kunci": "C",
      "bahas": "Langkah 1: $N = 60 \\implies N/2 = 30$, interval median $60 - 69$.\nLangkah 2: $T_b = 59,5, F_k = 20, f_m = 20, p = 10$.\nLangkah 3: $Me = 59,5 + \\frac{30 - 20}{20} \\times 10 = 59,5 + 5 = 64,5\\text{ kg}$.\nKesimpulan: Kunci C benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W39",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 12 • Jangkauan Interkuartil dan Batas Outlier",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Dalam audit jaringan serat optik, kuartil bawah kecepatan transfer data adalah $Q_1 = 28\\text{ Mbps}$ dan kuartil atas $Q_3 = 52\\text{ Mbps}$. Menggunakan aturan Tukey, berapakah nilai batas pagar atas (*upper fence*) pencilan (dalam Mbps)? (Tuliskan bilangan bulat akhirnya saja)",
      "opsi": [],
      "kunci": "88",
      "bahas": "Langkah 1: $QR = Q_3 - Q_1 = 52 - 28 = 24\\text{ Mbps}$.\nLangkah 2: Pagar atas $= Q_3 + 1,5 \\times QR = 52 + 1,5(24) = 52 + 36 = 88\\text{ Mbps}$.\nKesimpulan: Nilai numerik = 88.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W40",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 12 • Statistika Bivariat Garis Regresi Linier",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Persamaan garis regresi hubungan antara biaya iklan digital ($x$, juta rupiah) dan omzet penjualan bulanan ($y$, juta rupiah) adalah $\\hat{y} = 45 + 3,2x$. Jika dianggarkan biaya iklan Rp15.000.000 ($x = 15$), berapakah estimasi omzet penjualan yang diprediksi?",
      "opsi": [
        "A. $\\text{Rp}87.000.000$",
        "B. $\\text{Rp}90.000.000$",
        "C. $\\text{Rp}93.000.000$",
        "D. $\\text{Rp}96.000.000$",
        "E. $\\text{Rp}102.000.000$"
      ],
      "kunci": "C",
      "bahas": "Langkah 1: $\\hat{y} = 45 + 3,2(15) = 45 + 48 = 93\\text{ juta} = \\text{Rp}93.000.000$.\nKesimpulan: Kunci C benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-W41",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 12 • Kaidah Pencacahan PIN Mobile Banking",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Seorang nasabah membuat kode PIN 4-digit dari himpunan angka $\\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\\}$. Ketentuan: digit pertama tidak boleh 0, digit terakhir wajib angka ganjil, dan semua digit harus berbeda. Berapa banyak variasi PIN yang dapat dibentuk? (Tuliskan hanya bilangan angka akhirnya saja)",
      "opsi": [],
      "kunci": "2240",
      "bahas": "Langkah 1: Slot 4 (ganjil) = 5 opsi. Slot 1 (bukan 0 dan bukan slot 4) = 8 opsi.\nLangkah 2: Slot 2 = 8 opsi. Slot 3 = 7 opsi.\nLangkah 3: Banyak variasi $= 8 \\times 8 \\times 7 \\times 5 = 2.240$.\nKesimpulan: Nilai numerik = 2240.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W42",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 12 • Permutasi Unsur Sama Kata NUSANTARA",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Panitia menyusun kode akreditasi dari seluruh huruf pembentuk kata \"NUSANTARA\". Berapakah banyak susunan kata 9-huruf berbeda yang dapat dibentuk? (Tuliskan hanya bilangan bulat angka hasilnya saja)",
      "opsi": [],
      "kunci": "30240",
      "bahas": "Langkah 1: Total huruf 9, huruf A ada 3, huruf N ada 2.\nLangkah 2: $P = \\frac{9!}{3! \\times 2!} = \\frac{362.880}{6 \\times 2} = 30.240$.\nKesimpulan: Nilai numerik = 30240.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-W43",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 12 • Kombinasi Pemilihan Delegasi Bersyarat",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Dari klub sains yang beranggotakan 6 siswa putra dan 5 siswa putri, akan dibentuk tim delegasi beranggotakan 4 orang dengan syarat minimal 2 siswi putri. Berapa banyak cara memilih delegasi tersebut?",
      "opsi": [
        "A. $185\\text{ cara}$",
        "B. $200\\text{ cara}$",
        "C. $215\\text{ cara}$",
        "D. $230\\text{ cara}$",
        "E. $245\\text{ cara}$"
      ],
      "kunci": "C",
      "bahas": "Langkah 1: Kasus 1 (2 putri, 2 putra): $C(5,2) \\times C(6,2) = 10 \\times 15 = 150$.\nLangkah 2: Kasus 2 (3 putri, 1 putra): $C(5,3) \\times C(6,1) = 10 \\times 6 = 60$.\nLangkah 3: Kasus 3 (4 putri, 0 putra): $C(5,4) \\times C(6,0) = 5 \\times 1 = 5$.\nLangkah 4: Total cara $= 150 + 60 + 5 = 215$.\nKesimpulan: Kunci C benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W44",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 12 • Peluang Inklusi-Eksklusi Apartemen Eksekutif",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Pengelola gedung apartemen memiliki 40 unit kamar di lantai eksekutif:\n- 24 unit kamar memiliki pemandangan kota (*City View*).\n- 16 unit kamar memiliki fasilitas balkon pribadi (*Private Balcony*).\n- 8 unit kamar memiliki pemandangan kota sekaligus balkon pribadi.\nJika seorang tamu memilih satu unit kamar secara acak, berapakah peluang tamu tersebut memperoleh kamar dengan pemandangan kota **atau** fasilitas balkon pribadi?",
      "opsi": [
        "A. $\\frac{1}{2}$",
        "B. $\\frac{3}{5}$",
        "C. $\\frac{7}{10}$",
        "D. $\\frac{4}{5}$",
        "E. $\\frac{9}{10}$"
      ],
      "kunci": "D",
      "bahas": "Langkah 1: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 24 + 16 - 8 = 32$.\nLangkah 2: $P(A \\cup B) = \\frac{32}{40} = \\frac{4}{5}$.\nKesimpulan: Kunci D benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W45",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 12 • Peluang Kejadian Saling Bebas Generator RS",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Dua unit generator listrik darurat independen di rumah sakit: probabilitas Generator A gagal menyala adalah $0,04$, dan Generator B gagal menyala adalah $0,05$. Jika kedua generator bekerja saling bebas, berapakah probabilitas minimal satu generator berhasil menyala saat terjadi pemadaman listrik?",
      "opsi": [
        "A. $0,900$",
        "B. $0,912$",
        "C. $0,950$",
        "D. $0,998$",
        "E. $0,999$"
      ],
      "kunci": "D",
      "bahas": "Langkah 1: Peluang kedua generator gagal $= 0,04 \\times 0,05 = 0,002$.\nLangkah 2: Peluang minimal satu menyala $= 1 - 0,002 = 0,998$.\nKesimpulan: Kunci D benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W46",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 12 • Peluang Bersyarat Teorema Bayes Uji Diagnostik",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Pada pengujian skrining medis, diketahui $2\\%$ dari populasi mengidap infeksi virus. Alat tes cepat memiliki akurasi: jika terinfeksi, hasil positif sebesar $95\\%$; jika sehat, hasil positif palsu sebesar $5\\%$. Jika seorang warga dipilih acak dan hasil tesnya positif, berapakah probabilitas bahwa ia benar-benar terinfeksi virus?",
      "opsi": [
        "A. $\\frac{2}{100}$",
        "B. $\\frac{19}{68}$",
        "C. $\\frac{38}{100}$",
        "D. $\\frac{95}{100}$",
        "E. $\\frac{68}{100}$"
      ],
      "kunci": "B",
      "bahas": "Langkah 1: $P(+) = 0,02(0,95) + 0,98(0,05) = 0,019 + 0,049 = 0,068$.\nLangkah 2: $P(V|+) = \\frac{0,019}{0,068} = \\frac{19}{68}$.\nKesimpulan: Kunci B benar.",
      "level": "Level 3 (Sulit / HOTS)"
    },
    {
      "id": "W43-W47",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 12 • Pemodelan Pecahan Rasional Kecepatan Mobil",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Pak Rian menempuh perjalanan $180\\text{ km}$. Saat berangkat cerah dengan kecepatan $v\\text{ km/jam}$. Saat pulang hujan lebat sehingga kecepatan berkurang $15\\text{ km/jam}$ dan durasi perjalanan menjadi 1 jam lebih lama ($\\frac{180}{v-15} - \\frac{180}{v} = 1$). Berapakah kecepatan rata-rata mobil Pak Rian saat berangkat (dalam km/jam)? (Tuliskan bilangan bulat angka saja)",
      "opsi": [],
      "kunci": "60",
      "bahas": "Langkah 1: $\\frac{180(15)}{v^2 - 15v} = 1 \\implies v^2 - 15v - 2.700 = 0$.\nLangkah 2: $(v - 60)(v + 45) = 0 \\implies v = 60\\text{ km/jam}$.\nKesimpulan: Nilai numerik = 60.",
      "level": "Level 3 (Sulit / HOTS)"
    },
    {
      "id": "W43-W48",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 12 • Model Kausatif Sebab-Akibat Median vs Mean",
      "tipe": "Kausatif Sebab-Akibat",
      "tanya": "Perhatikan dua pernyataan matematis berikut:\n**Pernyataan:** Dalam menganalisis data pendapatan rumah tangga di suatu wilayah yang memiliki kesenjangan ekonomi ekstrem, nilai Median lebih tepat dan representatif digunakan sebagai ukuran pemusatan dibandingkan nilai Mean (rata-rata hitung).\n**SEBAB**\n**Alasan:** Nilai Mean sangat sensitif dan mudah terdistorsi oleh keberadaan nilai pencilan (*outlier*) ekstrem, sedangkan nilai Median tidak terpengaruh oleh besarnya nilai ekstrem tersebut.\n\nHubungan logis yang tepat antara kedua pernyataan di atas adalah...",
      "opsi": [
        "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat yang valid.",
        "B. Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat.",
        "C. Pernyataan benar, tetapi alasan bernilai salah.",
        "D. Pernyataan salah, tetapi alasan bernilai benar.",
        "E. Pernyataan dan alasan keduanya bernilai salah."
      ],
      "kunci": "A",
      "bahas": "Langkah 1: Pernyataan BENAR: Median adalah ukuran pemusatan terbaik untuk distribusi data miring ekstrem.\nLangkah 2: Alasan BENAR: Mean sensitif terhadap outlier, median berbasis urutan letak posisi tengah.\nLangkah 3: Alasan menjelaskan secara langsung keabsahan pernyataan. Hubungan kausal valid.\nKesimpulan: Kunci A.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W49",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 12 • Analisis Lima Serangkai Boxplot",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Audit performa respons server (dalam detik) menghasilkan ringkasan lima serangkai data: Nilai Minimum $= 2$, Kuartil Bawah $Q_1 = 5$, Median $Q_2 = 8$, Kuartil Atas $Q_3 = 12$, dan Nilai Maksimum $= 25$. Analisis kebenaran setiap pernyataan berikut:",
      "opsi": [
        "Jangkauan interkuartil ($QR$) waktu respons server adalah tepat 7 detik.",
        "Waktu respons maksimum sebesar 25 detik teridentifikasi sebagai pencilan (*outlier*).",
        "Tepat $50\\%$ data respons server berada di dalam interval 5 detik hingga 12 detik.",
        "Bentuk visual kurva histogram data tersebut memiliki kemiringan miring ke kiri (*skewed left*)."
      ],
      "kunci": "B - B - B - S",
      "bahas": "Langkah 1: $QR = 12 - 5 = 7$ detik. (BENAR)\nLangkah 2: Pagar atas $= 12 + 1,5(7) = 22,5$. Nilai $25 > 22,5$ adalah outlier. (BENAR)\nLangkah 3: Rentang $[Q_1, Q_3] = [5, 12]$ selalu memuat tepat $50\\%$ data tengah. (BENAR)\nLangkah 4: Bentangan kanan ($25 - 8 = 17$) jauh lebih panjang dari bentangan kiri ($8 - 2 = 6$), maka distribusi miring ke kanan (*skewed right*), bukan *skewed left*. (SALAH)\nKesimpulan: Kunci = B - B - B - S.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-W50",
      "mapel": "Matematika Wajib",
      "materi": "Kelas 12 • Checkbox Pusmendik Kelulusan Bimbel",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Data kelulusan 100 siswa di sebuah bimbingan belajar mencatat: 60 siswa lulus seleksi PTN via SNBP, 50 siswa lulus via SNBT, dan 20 siswa berhasil lulus melalui kedua jalur tersebut secara bersamaan.\n\nCentang semua pernyataan yang bernilai BENAR:",
      "opsi": [
        "A. Siswa yang hanya lulus melalui jalur SNBP saja berjumlah 40 orang.",
        "B. Siswa yang tidak lulus di kedua jalur seleksi tersebut berjumlah 10 orang.",
        "C. Peluang terpilihnya siswa yang hanya lulus di salah satu jalur seleksi saja adalah $\\frac{7}{10}$.",
        "D. Rasio perbandingan antara siswa yang lulus SNBT saja terhadap SNBP saja adalah $3 : 4$.",
        "E. Peluang seorang siswa terpilih lulus minimal di salah satu jalur seleksi adalah $\\frac{4}{5}$."
      ],
      "kunci": "A, B, C, D",
      "bahas": "Langkah 1: Opsi A BENAR: SNBP saja $= 60 - 20 = 40$ orang.\nLangkah 2: Opsi B BENAR: Tidak lulus $= 100 - (40 + 20 + 30) = 10$ orang.\nLangkah 3: Opsi C BENAR: Lulus salah satu saja $= 40 + 30 = 70 \\implies P = 70/100 = 7/10$.\nLangkah 4: Opsi D BENAR: Rasio SNBT saja : SNBP saja $= 30 : 40 = 3 : 4$.\nLangkah 5: Opsi E SALAH: Peluang minimal satu jalur $= 90/100 = 9/10$, bukan $4/5$.\nKesimpulan: Kunci = A, B, C, D.",
      "level": "Level 2 (Sedang)"
    }
  ],
  "matmin": [
    {
      "id": "W43-M01",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 10 Minat • Vektor Perkalian Skalar dan Sudut Lintasan Drone",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Dua lintasan drone inspeksi pertanian dinyatakan dalam vektor posisi $\\vec{u} = 2\\vec{i} - \\vec{j} + 2\\vec{k}$ dan $\\vec{v} = 4\\vec{i} + 4\\vec{j} - 2\\vec{k}$. Berapakah besar sudut perpotongan antara kedua lintasan drone tersebut?",
      "opsi": [
        "A. $30^\\circ$",
        "B. $45^\\circ$",
        "C. $60^\\circ$",
        "D. $90^\\circ$",
        "E. $120^\\circ$"
      ],
      "kunci": "D",
      "bahas": "Langkah 1: $\\vec{u} \\cdot \\vec{v} = 8 - 4 - 4 = 0$.\nLangkah 2: Karena dot product $= 0$, maka $\\cos(\\theta) = 0 \\implies \\theta = 90^\\circ$.\nKesimpulan: Kunci D benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-M02",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 10 Minat • Vektor Proyeksi Skalar Ortogonal",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Vektor gaya tarikan kabel jembatan dinyatakan oleh $\\vec{a} = 4\\vec{i} + 5\\vec{j} + 3\\vec{k}$ dan vektor penopang balok baja adalah $\\vec{b} = 2\\vec{i} + 2\\vec{j} + \\vec{k}$. Berapakah panjang proyeksi skalar ortogonal dari vektor gaya $\\vec{a}$ pada vektor balok $\\vec{b}$? (Tuliskan bilangan bulat hasilnya saja)",
      "opsi": [],
      "kunci": "7",
      "bahas": "Langkah 1: $\\vec{a} \\cdot \\vec{b} = 4(2) + 5(2) + 3(1) = 8 + 10 + 3 = 21$.\nLangkah 2: $|\\vec{b}| = \\sqrt{4 + 4 + 1} = 3$.\nLangkah 3: Panjang proyeksi skalar $= \\frac{21}{3} = 7$.\nKesimpulan: Nilai numerik = 7.",
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
      "bahas": "Langkah 1: $\\vec{u} \\cdot \\vec{v} = 6 + 8 + 4 = 18$.\nLangkah 2: $|\\vec{v}|^2 = 4 + 4 + 1 = 9$.\nLangkah 3: Vektor proyeksi $= \\frac{18}{9} \\vec{v} = 2(2\\vec{i} + 2\\vec{j} + \\vec{k}) = 4\\vec{i} + 4\\vec{j} + 2\\vec{k}$.\nKesimpulan: Kunci C benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-M04",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 11 Minat • Polinomial Teorema Sisa Derajat Dua",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Suatu suku banyak polinomial $P(x)$ jika dibagi oleh $(x - 1)$ memberikan sisa $5$, dan jika dibagi oleh $(x + 2)$ memberikan sisa $-4$. Berapakah sisa pembagian suku banyak $P(x)$ jika dibagi oleh $(x^2 + x - 2)$?",
      "opsi": [
        "A. $2x + 3$",
        "B. $3x - 2$",
        "C. $3x + 2$",
        "D. $4x - 1$",
        "E. $5x - 3$"
      ],
      "kunci": "C",
      "bahas": "Langkah 1: $S(x) = ax + b$.\nLangkah 2: $P(1) = a + b = 5$, $P(-2) = -2a + b = -4$.\nLangkah 3: $3a = 9 \\implies a = 3, b = 2 \\implies S(x) = 3x + 2$.\nKesimpulan: Kunci C benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-M05",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 11 Minat • Polinomial Hubungan Akar Vieta",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Persamaan suku banyak derajat tiga $2x^3 - 6x^2 + 10x - 8 = 0$ memiliki tiga akar $x_1, x_2,$ dan $x_3$. Berapakah nilai dari $\\frac{1}{x_1} + \\frac{1}{x_2} + \\frac{1}{x_3}$?",
      "opsi": [
        "A. $\\frac{3}{4}$",
        "B. $1$",
        "C. $\\frac{5}{4}$",
        "D. $\\frac{3}{2}$",
        "E. $2$"
      ],
      "kunci": "C",
      "bahas": "Langkah 1: $\\sum \\frac{1}{x_i} = \\frac{x_1 x_2 + x_2 x_3 + x_1 x_3}{x_1 x_2 x_3}$.\nLangkah 2: $x_1 x_2 + x_2 x_3 + x_1 x_3 = \\frac{10}{2} = 5$.\nLangkah 3: $x_1 x_2 x_3 = -\\frac{-8}{2} = 4 \\implies \\frac{5}{4}$.\nKesimpulan: Kunci C benar.",
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
      "bahas": "Langkah 1: $r = \\frac{|3(2) - 4(-3) + 7|}{\\sqrt{9 + 16}} = \\frac{25}{5} = 5$.\nLangkah 2: $(x - 2)^2 + (y + 3)^2 = 25 \\iff x^2 + y^2 - 4x + 6y - 12 = 0$.\nKesimpulan: Kunci A benar.",
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
      "bahas": "Langkah 1: $m_1 = -4/3 \\implies m = 3/4$.\nLangkah 2: $y = mx \\pm r\\sqrt{1 + m^2} = \\frac{3}{4}x \\pm 5\\left(\\frac{5}{4}\\right) \\implies 3x - 4y \\pm 25 = 0$.\nKesimpulan: Kunci B benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-M08",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 11 Minat • Lingkaran Uji Kuasa Titik",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Diberikan lingkaran $L \\equiv x^2 + y^2 - 6x + 8y - 11 = 0$ dan titik pemantau $T(7, 2)$. Analisis kebenaran setiap pernyataan berikut:",
      "opsi": [
        "Pusat dari lingkaran $L$ berada pada koordinat $(3, -4)$.",
        "Jari-jari lingkaran $L$ bernilai 5 satuan panjang.",
        "Nilai kuasa titik $T(7, 2)$ terhadap lingkaran $L$ adalah $K = 16$.",
        "Titik $T(7, 2)$ terletak tepat pada lengkungan keliling lingkaran."
      ],
      "kunci": "B - S - B - S",
      "bahas": "Langkah 1: Pusat lingkaran $P = \\left(-\\frac{A}{2}, -\\frac{B}{2}\\right) = (3, -4)$. (Pernyataan 1 BENAR)\nLangkah 2: Jari-jari $r = \\sqrt{3^2 + (-4)^2 - (-11)} = \\sqrt{9 + 16 + 11} = \\sqrt{36} = 6\\text{ satuan panjang} \\neq 5$. (Pernyataan 2 SALAH)\nLangkah 3: Kuasa titik $T(7, 2)$ adalah $K = 7^2 + 2^2 - 6(7) + 8(2) - 11 = 49 + 4 - 42 + 16 - 11 = 16$. (Pernyataan 3 BENAR)\nLangkah 4: Karena nilai kuasa $K = 16 > 0$, maka titik $T(7, 2)$ terletak di luar lingkaran, bukan pada keliling lingkaran. (Pernyataan 4 SALAH)\nKesimpulan: Status kebenaran adalah B - S - B - S.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-M09",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 11 Minat • Jarak Pusat Dua Lingkaran",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Dua lingkaran pada peta geospasial memiliki persamaan $L_1 \\equiv x^2 + y^2 - 4x - 6y - 12 = 0$ dan $L_2 \\equiv x^2 + y^2 + 6x + 18y + 25 = 0$. Berapakah jarak antara kedua titik pusat lingkaran tersebut? (Tuliskan bilangan bulat hasilnya saja)",
      "opsi": [],
      "kunci": "13",
      "bahas": "Langkah 1: Pusat $L_1: (2, 3)$, pusat $L_2: (-3, -9)$.\nLangkah 2: Jarak $d = \\sqrt{(-3 - 2)^2 + (-9 - 3)^2} = \\sqrt{25 + 144} = 13$.\nKesimpulan: Nilai numerik = 13.",
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
      "bahas": "Langkah 1: $L_1 - L_2 = 0 \\implies 6x - 6y + 6 = 0$.\nLangkah 2: Bagi 6: $x - y + 1 = 0$.\nKesimpulan: Kunci B benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-M11",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 10 Minat • Vektor Tiga Titik Kolinier Segaris",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Tiga stasiun radar berada pada koordinat $A(1, 2, 3)$, $B(3, 6, 7)$, dan $C(m, 10, n)$. Jika ketiga stasiun berada pada satu garis lurus yang sama (kolinier), berapakah nilai dari $m + n$? (Tuliskan bilangan bulat akhirnya saja)",
      "opsi": [],
      "kunci": "16",
      "bahas": "Langkah 1: $\\vec{AB} = (2, 4, 4)$, $\\vec{AC} = (m-1, 8, n-3)$.\nLangkah 2: Komponen y: $8 = 4k \\implies k = 2$.\nLangkah 3: $m - 1 = 4 \\implies m = 5$; $n - 3 = 8 \\implies n = 11$.\nLangkah 4: $m + n = 5 + 11 = 16$.\nKesimpulan: Nilai numerik = 16.",
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
      "bahas": "Langkah 1: Horner di $x = 1/2 \\implies$ koefisien $(2, -4, 6)$ dan sisa $-2$.\nLangkah 2: $H(x) = \\frac{2x^2 - 4x + 6}{2} = x^2 - 2x + 3$.\nKesimpulan: Kunci A benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-M13",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 11 Minat • Geometri Transformasi Matriks Komposisi",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Titik $A(2, -1)$ ditransformasikan oleh matriks $T_1 = \\begin{pmatrix} 2 & 1 \\\\ -1 & 3 \\end{pmatrix}$ dilanjutkan $T_2 = \\begin{pmatrix} 1 & 4 \\\\ 0 & 2 \\end{pmatrix}$. Koordinat bayangan akhir dari titik $A$ adalah...",
      "opsi": [
        "A. $(-15, -8)$",
        "B. $(-17, -10)$",
        "C. $(-13, -10)$",
        "D. $(17, 10)$",
        "E. $(-17, 10)$"
      ],
      "kunci": "B",
      "bahas": "Langkah 1: $T_2 \\cdot T_1 = \\begin{pmatrix} -2 & 13 \\\\ -2 & 6 \\end{pmatrix}$.\nLangkah 2: Bayangan: $\\begin{pmatrix} -2 & 13 \\\\ -2 & 6 \\end{pmatrix} \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} -17 \\\\ -10 \\end{pmatrix}$.\nKesimpulan: Kunci B benar.",
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
      "bahas": "Langkah 1: $\\cos(2\\alpha) = 1 - 2\\sin^2(\\alpha)$.\nLangkah 2: $\\cos(2\\alpha) = 1 - 2(9/25) = 1 - 18/25 = 7/25$.\nKesimpulan: Kunci C benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-M15",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 11 Minat • Persamaan Trigonometri Tangen",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Diberikan persamaan trigonometri $\\sqrt{3}\\tan(2x - 30^\\circ) = 1$ untuk interval $0^\\circ \\le x \\le 180^\\circ$.\n\nCentang semua sudut penyelesaian yang memenuhi persamaan tersebut:",
      "opsi": [
        "A. $x = 30^\\circ$",
        "B. $x = 60^\\circ$",
        "C. $x = 120^\\circ$",
        "D. $x = 150^\\circ$",
        "E. $x = 45^\\circ$"
      ],
      "kunci": "A, C",
      "bahas": "Langkah 1: $\\tan(2x - 30^\\circ) = \\frac{1}{\\sqrt{3}} = \\tan(30^\\circ)$.\nLangkah 2: $2x - 30^\\circ = 30^\\circ + k \\cdot 180^\\circ \\implies x = 30^\\circ + k \\cdot 90^\\circ$.\nLangkah 3: Untuk $k = 0 \\implies x = 30^\\circ$ (Opsi A BENAR).\nLangkah 4: Untuk $k = 1 \\implies x = 120^\\circ$ (Opsi C BENAR).\nKesimpulan: Kunci = A, C.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-M16",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 11 Minat • Panjang Garis Singgung Titik Luar Lingkaran",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Dari stasiun radar di titik $P(8, 6)$, ditarik garis singgung ke zona lingkaran pertahanan udara $x^2 + y^2 = 25$ di titik $T$. Berapakah panjang ruas garis singgung $PT$ tersebut?",
      "opsi": [
        "A. $5\\sqrt{2}$",
        "B. $5\\sqrt{3}$",
        "C. $8$",
        "D. $10$",
        "E. $5\\sqrt{5}$"
      ],
      "kunci": "B",
      "bahas": "Langkah 1: $OP = \\sqrt{8^2 + 6^2} = 10, r = 5$.\nLangkah 2: $PT = \\sqrt{10^2 - 5^2} = \\sqrt{75} = 5\\sqrt{3}$.\nKesimpulan: Kunci B benar.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-M17",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 10 Minat • Vektor Luas Segitiga Cross Product Tiga Dimensi",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Tiga titik koordinat membentuk segitiga dengan sudut $A(1, 0, 0)$, $B(0, 2, 0)$, dan $C(0, 0, 3)$. Berapakah luas bidang segitiga $ABC$ tersebut? (Tuliskan bilangan desimal dengan tanda titik atau koma)",
      "opsi": [],
      "kunci": "3.5",
      "bahas": "Langkah 1: $\\vec{AB} = (-1, 2, 0), \\vec{AC} = (-1, 0, 3)$.\nLangkah 2: $\\vec{AB} \\times \\vec{AC} = (6, 3, 2) \\implies |\\vec{AB} \\times \\vec{AC}| = \\sqrt{36 + 9 + 4} = 7$.\nLangkah 3: Luas $= 7/2 = 3,5\\text{ satuan luas}$.\nKesimpulan: Nilai numerik = 3.5.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-M18",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 11 Minat • Polinomial Jumlah Kuadrat Akar-Akar Real",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Persamaan suku banyak derajat tiga $x^3 - 4x^2 + x + 6 = 0$ memiliki akar-akar $x_1, x_2,$ dan $x_3$. Berapakah nilai dari jumlah kuadrat seluruh akar-akarnya ($x_1^2 + x_2^2 + x_3^2$)? (Tuliskan bilangan bulat hasilnya saja)",
      "opsi": [],
      "kunci": "14",
      "bahas": "Langkah 1: $\\sum x_i = 4, \\sum x_i x_j = 1$.\nLangkah 2: $\\sum x_i^2 = (4)^2 - 2(1) = 16 - 2 = 14$.\nKesimpulan: Nilai numerik = 14.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-M19",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 10 Minat • Pertidaksamaan Nilai Mutlak Linear",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Diberikan pertidaksamaan nilai mutlak linear $|2x - 3| < x + 6$.\n\nCentang semua nilai $x$ bilangan bulat yang termasuk ke dalam himpunan penyelesaian pertidaksamaan tersebut:",
      "opsi": [
        "A. $x = -2$",
        "B. $x = 0$",
        "C. $x = 10$",
        "D. $x = 5$",
        "E. $x = -5$"
      ],
      "kunci": "B, D",
      "bahas": "Langkah 1: Solusi pertidaksamaan: $-(x + 6) < 2x - 3 < x + 6 \\implies -1 < x < 9$.\nLangkah 2: Uji opsi:\n- Opsi A: $x = -2$ di luar interval (SALAH).\n- Opsi B: $x = 0$ berada dalam $-1 < x < 9$ (BENAR).\n- Opsi C: $x = 10$ di luar interval (SALAH).\n- Opsi D: $x = 5$ berada dalam $-1 < x < 9$ (BENAR).\n- Opsi E: $x = -5$ di luar interval (SALAH).\nKesimpulan: Kunci = B, D.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-M20",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 11 Minat • Model Kausatif Garis Singgung Lingkaran",
      "tipe": "Kausatif Sebab-Akibat",
      "tanya": "Perhatikan dua pernyataan matematis berikut:\n**Pernyataan:** Garis vertikal $x = 5$ menyinggung kurva lingkaran $x^2 + y^2 = 25$ tepat di titik koordinat $(5, 0)$.\n**SEBAB**\n**Alasan:** Garis singgung pada lingkaran selalu tegak lurus dengan jari-jari lingkaran yang ditarik melalui titik singgung tersebut.\n\nHubungan logis yang tepat antara kedua pernyataan di atas adalah...",
      "opsi": [
        "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat yang valid.",
        "B. Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat.",
        "C. Pernyataan benar, tetapi alasan bernilai salah.",
        "D. Pernyataan salah, tetapi alasan bernilai benar.",
        "E. Pernyataan dan alasan keduanya bernilai salah."
      ],
      "kunci": "A",
      "bahas": "Langkah 1: Pernyataan BENAR: Garis $x = 5$ menyinggung di $(5, 0)$.\nLangkah 2: Alasan BENAR: Teorema dasar garis singgung tegak lurus jari-jari.\nLangkah 3: Alasan menjelaskan garis vertikal tegak lurus sumbu X. Kausalitas valid.\nKesimpulan: Kunci A.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-M21",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 12 Minat • Limit Trigonometri Identitas Cosinus Sudut Rangkap",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Berapakah nilai limit trigonometri $\\lim_{x \\to 0} \\frac{1 - \\cos(6x)}{x \\tan(3x)}$? (Tuliskan bilangan bulat hasilnya saja)",
      "opsi": [],
      "kunci": "6",
      "bahas": "Langkah 1: $1 - \\cos(6x) = 2\\sin^2(3x)$.\nLangkah 2: $\\lim_{x \\to 0} \\frac{2\\sin(3x)\\sin(3x)}{x \\tan(3x)} = 2 \\times 3 \\times 1 = 6$.\nKesimpulan: Nilai numerik = 6.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-M22",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 12 Minat • Limit Trigonometri Aljabar 0/0",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Berapakah nilai dari limit trigonometri $\\lim_{x \\to 0} \\frac{\\sin(4x) + \\tan(2x)}{3x \\cos(2x)}$? (Tuliskan bilangan bulat hasilnya saja)",
      "opsi": [],
      "kunci": "2",
      "bahas": "Langkah 1: Bagi pembilang dan penyebut dengan $x$ saat $x \\to 0$:\n$\\frac{4 + 2}{3(1)} = \\frac{6}{3} = 2$.\nKesimpulan: Nilai numerik = 2.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-M23",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 12 Minat • Limit Tak Hingga Selisih Bentuk Akar Kuadrat",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Berapakah nilai dari limit di ketakhinggaan $\\lim_{x \\to \\infty} \\left( \\sqrt{4x^2 + 8x - 5} - (2x - 3) \\right)$? (Tuliskan bilangan bulat hasilnya saja)",
      "opsi": [],
      "kunci": "5",
      "bahas": "Langkah 1: $2x - 3 = \\sqrt{4x^2 - 12x + 9}$.\nLangkah 2: Rumus $\\frac{b - q}{2\\sqrt{a}} = \\frac{8 - (-12)}{2(2)} = \\frac{20}{4} = 5$.\nKesimpulan: Nilai numerik = 5.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-M24",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 12 Minat • Limit Tak Hingga Fungsi Trigonometri",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Berapakah nilai dari limit di ketakhinggaan $\\lim_{x \\to \\infty} x \\sin\\left(\\frac{3}{x}\\right) \\cos\\left(\\frac{2}{x}\\right)$? (Tuliskan bilangan bulat hasilnya saja)",
      "opsi": [],
      "kunci": "3",
      "bahas": "Langkah 1: Misal $y = 1/x \\to 0$.\nLangkah 2: $\\lim_{y \\to 0} \\frac{\\sin(3y)}{y} \\cos(2y) = 3(1) = 3$.\nKesimpulan: Nilai numerik = 3.",
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
      "bahas": "Langkah 1: Aturan rantai: $3\\sin^2(4x - \\pi) \\cdot 4\\cos(4x - \\pi) = 12\\sin^2(4x - \\pi)\\cos(4x - \\pi)$.\nKesimpulan: Kunci C benar.",
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
      "bahas": "Langkah 1: $f'(x) = 2x\\cos(2x) - 2x^2\\sin(2x)$.\nLangkah 2: Di $x = \\pi/4$: $2(\\pi/4)(0) - 2(\\pi^2/16)(1) = -\\frac{\\pi^2}{8}$.\nKesimpulan: Kunci B benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-M27",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 12 Minat • Garis Singgung Kurva Trigonometri",
      "tipe": "Pilihan Ganda Tunggal",
      "tanya": "Persamaan garis singgung pada kurva fungsi trigonometri $y = 2\\sin(x) + \\cos(x)$ di titik potong sumbu Y (titik berabsis $x = 0$) adalah...",
      "opsi": [
        "A. $2x - y + 1 = 0$",
        "B. $2x - y - 1 = 0$",
        "C. $x - 2y + 2 = 0$",
        "D. $2x + y - 1 = 0$",
        "E. $x + 2y - 2 = 0$"
      ],
      "kunci": "A",
      "bahas": "Langkah 1: Titik singgung $(0, 1)$, gradien $m = y'(0) = 2(1) - 0 = 2$.\nLangkah 2: $y - 1 = 2(x - 0) \\implies 2x - y + 1 = 0$.\nKesimpulan: Kunci A benar.",
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
      "bahas": "Langkah 1: $f'(x) = 2\\cos(2x) > 0 \\iff \\cos(2x) > 0$.\nLangkah 2: $0 \\le 2x < \\pi/2 \\implies 0 \\le x < \\pi/4$ atau $3\\pi/2 < 2x \\le 2\\pi \\implies 3\\pi/4 < x \\le \\pi$.\nKesimpulan: Kunci B benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-M29",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 12 Minat • Optimasi Kontekstual Ketinggian Maksimum Peluru",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Sebuah peluru kendali ditembakkan vertikal ke atmosfer dengan persamaan lintasan ketinggian $h(t) = 120t - 5t^2$, dengan $h$ dalam meter dan $t$ dalam sekon. Berapakah ketinggian maksimum yang dicapai peluru (dalam meter)? (Tuliskan bilangan bulat hasilnya saja)",
      "opsi": [],
      "kunci": "720",
      "bahas": "Langkah 1: $h'(t) = 120 - 10t = 0 \\implies t = 12\\text{ s}$.\nLangkah 2: $h(12) = 1.440 - 5(144) = 720\\text{ meter}$.\nKesimpulan: Nilai numerik = 720.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-M30",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 12 Minat • Optimasi Luas Lahan Persegi Panjang",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Seorang petani memiliki kawat sepanjang $200\\text{ meter}$ untuk memagari lahan persegi panjang di tepi sungai lurus (sisi di tepi sungai tidak dipagar: $x + 2y = 200$). Berapakah luas area maksimum yang dapat dipagari (dalam $\\text{m}^2$)? (Tuliskan bilangan bulat hasilnya saja)",
      "opsi": [],
      "kunci": "5000",
      "bahas": "Langkah 1: $L(y) = (200 - 2y)y = 200y - 2y^2$.\nLangkah 2: $L'(y) = 200 - 4y = 0 \\implies y = 50\\text{ m}, x = 100\\text{ m}$.\nLangkah 3: Luas maksimum $= 100 \\times 50 = 5.000\\text{ m}^2$.\nKesimpulan: Nilai numerik = 5000.",
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
      "bahas": "Langkah 1: $\\int (6x^2 - 4x + 5) dx = 2x^3 - 2x^2 + 5x + C$.\nKesimpulan: Kunci B benar.",
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
      "bahas": "Langkah 1: $4(-1/2\\cos(2x)) - 6(1/3\\sin(3x)) + C = -2\\cos(2x) - 2\\sin(3x) + C$.\nKesimpulan: Kunci B benar.",
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
      "bahas": "Langkah 1: $u = x^2 - 1 \\implies du = 2x dx \\implies \\int 3u^4 du = \\frac{3}{5}u^5 + C = \\frac{3}{5}(x^2 - 1)^5 + C$.\nKesimpulan: Kunci B benar.",
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
      "bahas": "Langkah 1: $u = \\sin(x) \\implies du = \\cos(x) dx \\implies \\int u^4 du = \\frac{1}{5}\\sin^5(x) + C$.\nKesimpulan: Kunci B benar.",
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
        "E. $\\left(x - \\frac{1}{2}\\right)e^{2x} + C$"
      ],
      "kunci": "B",
      "bahas": "Langkah 1: Metode Tanzalin: $+(2x + 1)(1/2 e^{2x}) - 2(1/4 e^{2x}) = (x + 1/2)e^{2x} - 1/2 e^{2x} = x e^{2x} + C$.\nKesimpulan: Kunci B benar.",
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
      "bahas": "Langkah 1: $\\int x\\cos(x) dx = x\\sin(x) - \\int \\sin(x) dx = x\\sin(x) + \\cos(x) + C$.\nKesimpulan: Kunci C benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-M37",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 12 Minat • Integral Tentu Polinomial Aljabar",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Berapakah nilai eksak dari integral tentu $\\int_1^3 (3x^2 - 4x + 2) \\, dx$? (Tuliskan bilangan bulat hasilnya saja)",
      "opsi": [],
      "kunci": "14",
      "bahas": "Langkah 1: $[x^3 - 2x^2 + 2x]_1^3 = (27 - 18 + 6) - (1 - 2 + 2) = 15 - 1 = 14$.\nKesimpulan: Nilai numerik = 14.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-M38",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 12 Minat • Integral Tentu Trigonometri Batas Sudut",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Berapakah nilai dari integral tentu trigonometri $\\int_0^{\\pi/2} (\\sin(x) + \\cos(x)) \\, dx$? (Tuliskan bilangan bulat hasilnya saja)",
      "opsi": [],
      "kunci": "2",
      "bahas": "Langkah 1: $[-\\cos(x) + \\sin(x)]_0^{\\pi/2} = (0 + 1) - (-1 + 0) = 1 - (-1) = 2$.\nKesimpulan: Nilai numerik = 2.",
      "level": "Level 1 (Mudah)"
    },
    {
      "id": "W43-M39",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 12 Minat • Luas Daerah Parabola dan Sumbu X",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Berapakah luas daerah yang dibatasi oleh kurva parabola $y = 6x - x^2$ dan sumbu X? (Tuliskan bilangan bulat hasilnya saja)",
      "opsi": [],
      "kunci": "36",
      "bahas": "Langkah 1: Pembuat nol $x = 0, 6$.\nLangkah 2: Rumus Archimedes: $\\frac{D\\sqrt{D}}{6a^2} = \\frac{36 \\times 6}{6} = 36\\text{ satuan luas}$.\nKesimpulan: Nilai numerik = 36.",
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
      "bahas": "Langkah 1: $x^2 - 2x - 3 = 0 \\implies D = 16$.\nLangkah 2: Luas Archimedes: $\\frac{16 \\times 4}{6} = \\frac{64}{6} = \\frac{32}{3}\\text{ satuan luas}$.\nKesimpulan: Kunci C benar.",
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
      "bahas": "Langkah 1: $V = \\pi \\int_1^3 4x^2 dx = \\pi \\left[ \\frac{4}{3}x^3 \\right]_1^3 = \\pi \\left(36 - \\frac{4}{3}\\right) = \\frac{104}{3}\\pi$.\nKesimpulan: Kunci C benar.",
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
      "bahas": "Langkah 1: $V = \\pi \\int_0^2 (4x^2 - x^4) dx = \\pi \\left[ \\frac{32}{3} - \\frac{32}{5} \\right] = \\frac{64}{15}\\pi$.\nKesimpulan: Kunci C benar.",
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
      "bahas": "Langkah 1: $u = \\tan(x) \\implies \\int_0^1 u^3 du = \\left[ \\frac{1}{4}u^4 \\right]_0^1 = \\frac{1}{4}$.\nKesimpulan: Kunci C benar.",
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
      "bahas": "Langkah 1: Datar: $\\lim_{x \\to \\infty} \\frac{3x-6}{x+2} = 3 \\implies y = 3$.\nLangkah 2: Tegak: $x + 2 = 0 \\implies x = -2$.\nKesimpulan: Kunci C benar.",
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
      "bahas": "Langkah 1: $u = x^2 + 3x \\implies du = (2x + 3)dx$.\nLangkah 2: $[\\ln|u|]_4^{28} = \\ln(28/4) = \\ln(7)$.\nKesimpulan: Kunci C benar.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-M46",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 12 Minat • Analisis Titik Belok dan Kecekungan Kurva",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Diberikan kurva fungsi kubik $f(x) = x^3 - 6x^2 + 9x + 2$. Analisis kebenaran setiap pernyataan berikut:",
      "opsi": [
        "Turunan kedua dari fungsi tersebut adalah $f''(x) = 6x - 12$.",
        "Titik belok (*inflection point*) kurva terletak pada koordinat $(2, 4)$.",
        "Pada interval $x < 2$, grafik fungsi berbentuk cekung ke atas (*concave up*).",
        "Pada interval $x > 2$, grafik fungsi berbentuk cekung ke atas (*concave up*)."
      ],
      "kunci": "B - B - S - B",
      "bahas": "Langkah 1: $f'(x) = 3x^2 - 12x + 9 \\implies f''(x) = 6x - 12$. (Pernyataan 1 BENAR)\nLangkah 2: $f''(x) = 0 \\implies x = 2, f(2) = 4$. Titik belok $(2, 4)$. (Pernyataan 2 BENAR)\nLangkah 3: Untuk $x < 2$, $f''(x) < 0$ maka cekung ke bawah (*concave down*), bukan cekung ke atas. (Pernyataan 3 SALAH)\nLangkah 4: Untuk $x > 2$, $f''(x) > 0$ maka cekung ke atas (*concave up*). (Pernyataan 4 BENAR)\nKesimpulan: Kunci = B - B - S - B.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-M47",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 12 Minat • Turunan Kedua Percepatan Gerak Partikel",
      "tipe": "Isian Singkat Numerik",
      "tanya": "Posisi gerak lurus partikel dinyatakan oleh $s(t) = t^3 - 9t^2 + 24t + 5$, dengan $s$ dalam meter dan $t$ dalam sekon. Berapakah percepatan partikel (dalam $\\text{m/s}^2$) pada saat kecepatannya berhenti sesaat ($v = 0$) untuk yang kedua kalinya? (Tuliskan bilangan bulat hasilnya saja)",
      "opsi": [],
      "kunci": "6",
      "bahas": "Langkah 1: $v(t) = 3(t - 2)(t - 4) = 0 \\implies$ kedua kalinya pada $t = 4\\text{ s}$.\nLangkah 2: $a(t) = 6t - 18 \\implies a(4) = 24 - 18 = 6\\text{ m/s}^2$.\nKesimpulan: Nilai numerik = 6.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-M48",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 12 Minat • Model Kausatif Titik Stasioner vs Ekstrem",
      "tipe": "Kausatif Sebab-Akibat",
      "tanya": "Perhatikan dua pernyataan matematis berikut:\n**Pernyataan:** Fungsi aljabar $f(x) = x^3$ tidak memiliki nilai maksimum lokal maupun nilai minimum lokal di titik $x = 0$.\n**SEBAB**\n**Alasan:** Syarat perlu suatu fungsi memiliki nilai ekstrem lokal di titik kritis $c$ adalah $f'(c) = 0$, namun kondisi $f'(c) = 0$ bukan merupakan syarat cukup bagi keberadaan nilai ekstrem lokal.\n\nHubungan logis yang tepat antara kedua pernyataan di atas adalah...",
      "opsi": [
        "A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat yang valid.",
        "B. Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat.",
        "C. Pernyataan benar, tetapi alasan bernilai salah.",
        "D. Pernyataan salah, tetapi alasan bernilai benar.",
        "E. Pernyataan dan alasan keduanya bernilai salah."
      ],
      "kunci": "A",
      "bahas": "Langkah 1: Pernyataan BENAR: Di $x = 0$, fungsi memiliki titik belok stasioner, bukan puncak/lembah.\nLangkah 2: Alasan BENAR: $f'(c) = 0$ adalah syarat perlu, tetapi syarat cukup memerlukan pergantian tanda turunan.\nLangkah 3: Alasan menjelaskan secara langsung mengapa pernyataan benar. Kausalitas valid.\nKesimpulan: Kunci A.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-M49",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 12 Minat • Evaluasi Luas dan Integral Parabola",
      "tipe": "Pilihan Benar / Salah",
      "tanya": "Diberikan grafik kurva parabola $f(x) = x^2 - 4x + 3$. Analisis kebenaran setiap pernyataan berikut:",
      "opsi": [
        "Kurva memotong sumbu X tepat di dua titik, yaitu $(1, 0)$ dan $(3, 0)$.",
        "Nilai integral tentu $\\int_1^3 (x^2 - 4x + 3) \\, dx$ adalah $-\\frac{4}{3}$.",
        "Luas daerah fisik antara kurva dan sumbu X pada interval $[1, 3]$ adalah $\\frac{4}{3}\\text{ satuan luas}$.",
        "Pada interval tertutup $[1, 3]$, seluruh grafik kurva berada di atas sumbu X."
      ],
      "kunci": "B - B - B - S",
      "bahas": "Langkah 1: Akar $x^2 - 4x + 3 = 0 \\implies x = 1, 3$. (Pernyataan 1 BENAR)\nLangkah 2: $[\\frac{1}{3}x^3 - 2x^2 + 3x]_1^3 = 0 - \\frac{4}{3} = -\\frac{4}{3}$. (Pernyataan 2 BENAR)\nLangkah 3: Luas fisik $= |-\\frac{4}{3}| = \\frac{4}{3}$ satuan luas. (Pernyataan 3 BENAR)\nLangkah 4: Kurva berada di bawah sumbu X pada $[1, 3]$ (misal $f(2) = -1 < 0$). (Pernyataan 4 SALAH)\nKesimpulan: Kunci = B - B - B - S.",
      "level": "Level 2 (Sedang)"
    },
    {
      "id": "W43-M50",
      "mapel": "Additional Mathematics",
      "materi": "Kelas 12 Minat • Checkbox Pusmendik Analisis Gelombang Sinus",
      "tipe": "Pilihan Ganda Kompleks",
      "tanya": "Diberikan persamaan kurva gelombang fungsi trigonometri $y = 3\\sin(2x - \\pi) + 1$ untuk domain $0 \\le x \\le \\pi$.\n\nCentang semua pernyataan yang bernilai BENAR:",
      "opsi": [
        "A. Nilai maksimum gelombang fungsi tersebut adalah 4.",
        "B. Nilai minimum gelombang fungsi tersebut adalah -2.",
        "C. Periode satu gelombang penuh dari fungsi tersebut adalah $\\pi$.",
        "D. Amplitudo simpangan gelombang fungsi tersebut adalah 3.",
        "E. Titik puncak gelombang pertama terjadi pada absis $x = \\pi$."
      ],
      "kunci": "A, B, C, D",
      "bahas": "Langkah 1: Opsi A BENAR: Nilai maksimum $y = 3(1) + 1 = 4$.\nLangkah 2: Opsi B BENAR: Nilai minimum $y = 3(-1) + 1 = -2$.\nLangkah 3: Opsi C BENAR: Periode gelombang $T = \\frac{2\\pi}{k} = \\frac{2\\pi}{2} = \\pi$.\nLangkah 4: Opsi D BENAR: Amplitudo simpangan $|A| = 3$.\nLangkah 5: Opsi E SALAH: Pada $x = \\pi$, $y = 3\\sin(2\\pi - \\pi) + 1 = 3\\sin(\\pi) + 1 = 1$, bukan nilai puncak (titik puncak terjadi saat $\\sin(2x - \\pi) = 1 \\implies 2x - \\pi = \\frac{\\pi}{2} \\implies x = \\frac{3\\pi}{4}$).\nKesimpulan: Pernyataan yang benar adalah A, B, C, D.",
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
    let wId = weekId;
    let squad = squadType;
    if (wId === 'F1_F2' || wId === 'F3_F4') {
      squad = wId;
      wId = getWeeklyCampaignId();
    }
    wId = wId || getWeeklyCampaignId();
    squad = squad || 'F1_F2';
    const activePool = WEEKLY_POOLS[wId] || WEEKLY_POOLS['2026-W43'] || WEEKLY_POOLS['2026-W42'];
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
        // 2026-W43 (Gladi Bersih TKA Nasional 5 Model Pusmendik):
        // 25 TKA Wajib (7 K10 + 8 K11 + 10 K12) + 25 TKA Minat (10 K10-K11 + 15 K12)
        // Menjamin seluruh 5 model Pusmendik hadir: PG Tunggal, Isian Numerik, Benar/Salah, PG Kompleks, Kausatif!
        const wSelectedIds = [
          'W43-W01', 'W43-W02', 'W43-W03', 'W43-W05', 'W43-W06', 'W43-W07', 'W43-W09',
          'W43-W16', 'W43-W17', 'W43-W20', 'W43-W22', 'W43-W23', 'W43-W25', 'W43-W28', 'W43-W29',
          'W43-W31', 'W43-W33', 'W43-W34', 'W43-W35', 'W43-W37', 'W43-W40', 'W43-W41', 'W43-W48', 'W43-W49', 'W43-W50'
        ];
        const mSelectedIds = [
          'W43-M01', 'W43-M02', 'W43-M04', 'W43-M06', 'W43-M08', 'W43-M09', 'W43-M14', 'W43-M15', 'W43-M19', 'W43-M20',
          'W43-M21', 'W43-M23', 'W43-M25', 'W43-M27', 'W43-M29', 'W43-M32', 'W43-M33', 'W43-M35', 'W43-M38', 'W43-M40', 'W43-M41', 'W43-M46', 'W43-M48', 'W43-M49', 'W43-M50'
        ];
        const w25 = wSelectedIds.map(id => activePool.matwa.find(q => q.id === id)).filter(Boolean);
        const m25 = mSelectedIds.map(id => activePool.matmin.find(q => q.id === id)).filter(Boolean);
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
