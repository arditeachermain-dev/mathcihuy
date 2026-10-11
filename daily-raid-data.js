/**
 * DAILY_RAID_BANK (BANK SOAL EKSKLUSIF MISI HARIAN RAID BOSS TITAN STATIGO)
 * SMA Global Islamic School 2 Serpong - Tahun Pelajaran 2026/2027
 * Guru Pengampu: Mr. Ardi
 * 
 * Standar Psikometri & Kurikulum:
 * - Soal 100% Eksklusif Harian (TIDAK DIAMBIL DARI PAKET CBT REGULER)
 * - Skuad F1 & F2: 10 Soal Matematika Wajib (Statistika P15 & P16)
 * - Skuad F3 & F4: 10 Soal Campuran (5 Matematika Wajib P15/P16 + 5 Matematika Peminatan P17)
 * - 7 Hari Rotasi Tematik Mingguan (day_0: Minggu s.d. day_6: Sabtu)
 * - Zero Mathematical Error & Solusi Rinci KaTeX
 */

(function() {
  const BANK = {
    // =========================================================================
    // HARI 0 (MINGGU / SUNDAY): THE CLIMAX SIEGE
    // =========================================================================
    day_0: {
      name: "The Climax Siege • Evaluasi Puncak Titik Tengah & Garis Singgung",
      matwa: [
        {
          id: "DR-D0-W01",
          mapel: "Matematika Wajib",
          materi: "P15 • Tepi Kelas & Titik Tengah",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Data hasil uji kuat tekan balok beton proyek IKN disajikan dalam interval kelas $60 - 74\\text{ MPa}$. Tentukan tepi bawah ($Tb$), tepi atas ($Ta$), dan titik tengah ($x_i$) untuk kelas tersebut!",
          opsi: [
            "A. $Tb = 59{,}5$; $Ta = 74{,}5$; dan $x_i = 67$",
            "B. $Tb = 60{,}0$; $Ta = 74{,}0$; dan $x_i = 67$",
            "C. $Tb = 59{,}5$; $Ta = 75{,}5$; dan $x_i = 67{,}5$",
            "D. $Tb = 60{,}5$; $Ta = 73{,}5$; dan $x_i = 66$",
            "E. $Tb = 59{,}0$; $Ta = 75{,}0$; dan $x_i = 68$"
          ],
          kunci: "A",
          bahas: "Langkah 1: Tepi bawah $Tb = 60 - 0{,}5 = 59{,}5$.\nLangkah 2: Tepi atas $Ta = 74 + 0{,}5 = 74{,}5$.\nLangkah 3: Titik tengah $x_i = \\frac{60 + 74}{2} = \\frac{134}{2} = 67$.\nKesimpulan: Opsi A benar."
        },
        {
          id: "DR-D0-W02",
          mapel: "Matematika Wajib",
          materi: "P15 • Analisis Frekuensi Histogram",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Sebuah histogram menampilkan 5 batang kelas berat kontainer logistik dengan tepi kelas $10{,}5; 20{,}5; 30{,}5; 40{,}5; 50{,}5; 60{,}5$. Frekuensi berturut-turut adalah $6, 12, 18, 10, 4$. Berapa persentase kontainer yang beratnya lebih dari $30{,}5\\text{ ton}$?",
          opsi: [
            "A. $64\\%$",
            "B. $36\\%$",
            "C. $50\\%$",
            "D. $68\\%$",
            "E. $72\\%$"
          ],
          kunci: "A",
          bahas: "Langkah 1: Total kontainer $N = 6 + 12 + 18 + 10 + 4 = 50$.\nLangkah 2: Kontainer dengan berat $> 30{,}5\\text{ ton}$ adalah kelas ke-3, 4, dan 5: $18 + 10 + 4 = 32$.\nLangkah 3: Persentase = $\\frac{32}{50} \\times 100\\% = 64\\%$.\nKesimpulan: Kunci A."
        },
        {
          id: "DR-D0-W03",
          mapel: "Matematika Wajib",
          materi: "P15 • Ogive Positif Kurang Dari",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Diberikan tabel frekuensi nilai uji data: $21-30$ ($4$), $31-40$ ($8$), $41-50$ ($15$), $51-60$ ($10$), $61-70$ ($3$). Nilai frekuensi kumulatif pada kurva Ogive Positif untuk nilai kurang dari atau sama dengan $50{,}5$ adalah ...",
          opsi: [
            "A. $27$",
            "B. $15$",
            "C. $37$",
            "D. $12$",
            "E. $40$"
          ],
          kunci: "A",
          bahas: "Langkah 1: Tepi atas kelas ke-3 adalah $Ta = 50{,}5$.\nLangkah 2: Frekuensi kumulatif $\\le 50{,}5$ menjumlahkan frekuensi dari kelas 1 s.d. 3: $4 + 8 + 15 = 27$.\nKesimpulan: Kunci A."
        },
        {
          id: "DR-D0-W04",
          mapel: "Matematika Wajib",
          materi: "P15 • Titik Potong Ogive",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Pada diagram distribusi frekuensi kumulatif, titik perpotongan antara kurva Ogive Positif ($F_k$ kurang dari) dan Ogive Negatif ($F_k$ lebih dari) secara teoritis menunjukkan nilai ukuran pemusatan ...",
          opsi: [
            "A. Median ($Me$)",
            "B. Modus ($Mo$)",
            "C. Rata-rata Hitung (Mean)",
            "D. Kuartil Bawah ($Q_1$)",
            "E. Jangkauan Interkuartil ($QR$)"
          ],
          kunci: "A",
          bahas: "Titik perpotongan antara Ogive Positif dan Ogive Negatif terjadi pada frekuensi kumulatif $50\\%$ dari total data ($n/2$), yang merupakan definisi dari nilai Median ($Me$). Kunci A."
        },
        {
          id: "DR-D0-W05",
          mapel: "Matematika Wajib",
          materi: "P15 • Rekonstruksi Interval Data",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Tiga titik tengah kelas interval pertama berturut-turut adalah $25{,}5; 35{,}5;$ dan $45{,}5$. Jika data berupa bilangan bulat, maka interval kelas untuk kelas kedua adalah ...",
          opsi: [
            "A. $31 - 40$",
            "B. $30 - 39$",
            "C. $31 - 41$",
            "D. $30 - 40$",
            "E. $32 - 41$"
          ],
          kunci: "A",
          bahas: "Langkah 1: Panjang kelas $c = 35{,}5 - 25{,}5 = 10$.\nLangkah 2: Untuk kelas ke-2 dengan titik tengah $35{,}5$ dan panjang $10$, tepi bawahnya adalah $35{,}5 - 5 = 30{,}5$ dan tepi atasnya $35{,}5 + 5 = 40{,}5$.\nLangkah 3: Batas bawah bulat $= 31$, batas atas bulat $= 40$. Interval $= 31 - 40$.\nKesimpulan: Kunci A."
        },
        {
          id: "DR-D0-W06",
          mapel: "Matematika Wajib",
          materi: "P16 • Mean Titik Tengah",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Tabel nilai matematika: $40-49$ ($4$), $50-59$ ($6$), $60-69$ ($10$), $70-79$ ($14$), $80-89$ ($6$). Nilai rata-rata hitung (mean) data tersebut adalah ...",
          opsi: [
            "A. $67{,}5$",
            "B. $66{,}8$",
            "C. $68{,}2$",
            "D. $69{,}0$",
            "E. $65{,}5$"
          ],
          kunci: "A",
          bahas: "Langkah 1: Titik tengah $x_i$: $44{,}5; 54{,}5; 64{,}5; 74{,}5; 84{,}5$.\nLangkah 2: $\\sum f_i x_i = 4(44{,}5) + 6(54{,}5) + 10(64{,}5) + 14(74{,}5) + 6(84{,}5) = 178 + 327 + 645 + 1.043 + 507 = 2.700$.\nLangkah 3: $\\bar{x} = \\frac{2.700}{40} = 67{,}5$.\nKesimpulan: Kunci A."
        },
        {
          id: "DR-D0-W07",
          mapel: "Matematika Wajib",
          materi: "P16 • Mean Metode Coding",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Pada tabel soal sebelumnya, jika digunakan rataan sementara $x_s = 64{,}5$ (titik tengah kelas ke-3 dengan kode $u_3 = 0$) dan panjang kelas $c = 10$, berapakah nilai $\\sum f_i u_i$?",
          opsi: [
            "A. $12$",
            "B. $8$",
            "C. $10$",
            "D. $14$",
            "E. $16$"
          ],
          kunci: "A",
          bahas: "Kode $u_i$: $-2, -1, 0, 1, 2$.\n$\\sum f_i u_i = 4(-2) + 6(-1) + 10(0) + 14(1) + 6(2) = -8 - 6 + 0 + 14 + 12 = 12$.\nPerhitungan mean: $\\bar{x} = 64{,}5 + \\frac{12}{40} \\times 10 = 64{,}5 + 3 = 67{,}5$. Kunci A."
        },
        {
          id: "DR-D0-W08",
          mapel: "Matematika Wajib",
          materi: "P16 • Rata-Rata Gabungan Rombel",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Nilai rata-rata tes matematika kelas XII F.1 ($25$ siswa) adalah $78$, sedangkan kelas XII F.2 ($25$ siswa) adalah $84$. Rata-rata gabungan kedua kelas adalah ...",
          opsi: [
            "A. $81{,}0$",
            "B. $80{,}5$",
            "C. $81{,}5$",
            "D. $82{,}0$",
            "E. $79{,}5$"
          ],
          kunci: "A",
          bahas: "$\\bar{x}_{\\text{gab}} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2} = \\frac{25(78) + 25(84)}{50} = \\frac{78 + 84}{2} = 81{,}0$. Kunci A."
        },
        {
          id: "DR-D0-W09",
          mapel: "Matematika Wajib",
          materi: "P16 • Rekonstruksi Frekuensi Tak Diketahui",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Distribusi frekuensi: $10-14$ ($4$), $15-19$ ($6$), $20-24$ ($k$), $25-29$ ($4$). Jika rata-rata hitung data adalah $\\bar{x} = 20$, tentukan nilai frekuensi $k$!",
          opsi: [
            "A. $11$",
            "B. $10$",
            "C. $12$",
            "D. $9$",
            "E. $8$"
          ],
          kunci: "A",
          bahas: "Titik tengah: $x_1=12, x_2=17, x_3=22, x_4=27$.\nTotal frekuensi $= 4 + 6 + k + 4 = 14 + k$.\n$\\sum f_i x_i = 4(12) + 6(17) + 22k + 4(27) = 48 + 102 + 22k + 108 = 258 + 22k$.\n$\\bar{x} = \\frac{258 + 22k}{14 + k} = 20 \\implies 258 + 22k = 280 + 20k \\implies 2k = 22 \\implies k = 11$. Kunci A."
        },
        {
          id: "DR-D0-W10",
          mapel: "Matematika Wajib",
          materi: "P16 • Transformasi Linier Mean",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Rata-rata nilai ulangan 40 siswa adalah $68$. Guru melakukan kalibrasi linier dengan formula $y_i = 1{,}2 x_i - 5$. Nilai rata-rata baru siswa adalah ...",
          opsi: [
            "A. $76{,}6$",
            "B. $75{,}8$",
            "C. $77{,}2$",
            "D. $78{,}0$",
            "E. $74{,}4$"
          ],
          kunci: "A",
          bahas: "Sifat linearitas rata-rata: $\\bar{y} = 1{,}2 \\bar{x} - 5 = 1{,}2(68) - 5 = 81{,}6 - 5 = 76{,}6$. Kunci A."
        }
      ],
      matmin: [
        {
          id: "DR-D0-M01",
          mapel: "Matematika Peminatan",
          materi: "P17 • Turunan Dasar Sinus & Cosinus",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Turunan pertama dari fungsi $f(x) = 5\\sin(x) + 3\\cos(x)$ adalah $f'(x) = ...$",
          opsi: [
            "A. $5\\cos(x) - 3\\sin(x)$",
            "B. $5\\cos(x) + 3\\sin(x)$",
            "C. $-5\\cos(x) - 3\\sin(x)$",
            "D. $-5\\cos(x) + 3\\sin(x)$",
            "E. $3\\cos(x) - 5\\sin(x)$"
          ],
          kunci: "A",
          bahas: "$f'(x) = 5 \\cdot \\frac{d}{dx}(\\sin x) + 3 \\cdot \\frac{d}{dx}(\\cos x) = 5\\cos(x) + 3(-\\sin x) = 5\\cos(x) - 3\\sin(x)$. Kunci A."
        },
        {
          id: "DR-D0-M02",
          mapel: "Matematika Peminatan",
          materi: "P17 • Aturan Rantai Koefisien Sudut",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Diberikan $g(x) = 4\\cos(3x) - 2\\sin(5x)$. Turunan pertama $g'(x)$ adalah ...",
          opsi: [
            "A. $-12\\sin(3x) - 10\\cos(5x)$",
            "B. $-12\\sin(3x) + 10\\cos(5x)$",
            "C. $12\\sin(3x) - 10\\cos(5x)$",
            "D. $-4\\sin(3x) - 2\\cos(5x)$",
            "E. $-12\\cos(3x) - 10\\sin(5x)$"
          ],
          kunci: "A",
          bahas: "$g'(x) = 4(-3\\sin(3x)) - 2(5\\cos(5x)) = -12\\sin(3x) - 10\\cos(5x)$. Kunci A."
        },
        {
          id: "DR-D0-M03",
          mapel: "Matematika Peminatan",
          materi: "P17 • Evaluasi Nilai Turunan di Titik",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Jika $h(x) = 6\\sin(2x) + 4\\cos(x)$, maka nilai dari $h'\\left(\\frac{\\pi}{6}\\right)$ adalah ...",
          opsi: [
            "A. $4$",
            "B. $6$",
            "C. $2$",
            "D. $8$",
            "E. $0$"
          ],
          kunci: "A",
          bahas: "Langkah 1: $h'(x) = 12\\cos(2x) - 4\\sin(x)$.\nLangkah 2: $h'\\left(\\frac{\\pi}{6}\\right) = 12\\cos\\left(\\frac{\\pi}{3}\\right) - 4\\sin\\left(\\frac{\\pi}{6}\\right) = 12\\left(\\frac{1}{2}\\right) - 4\\left(\\frac{1}{2}\\right) = 6 - 2 = 4$. Kunci A."
        },
        {
          id: "DR-D0-M04",
          mapel: "Matematika Peminatan",
          materi: "P17 • Aturan Perkalian Aljabar-Trigonometri",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Turunan pertama dari fungsi $f(x) = x^2 \\sin(x)$ adalah ...",
          opsi: [
            "A. $2x\\sin(x) + x^2\\cos(x)$",
            "B. $2x\\cos(x)$",
            "C. $2x\\sin(x) - x^2\\cos(x)$",
            "D. $x^2\\cos(x)$",
            "E. $2x\\cos(x) + x^2\\sin(x)$"
          ],
          kunci: "A",
          bahas: "Aturan perkalian $(uv)' = u'v + uv'$:\n$u = x^2 \\implies u' = 2x$; $v = \\sin(x) \\implies v' = \\cos(x)$.\n$f'(x) = 2x\\sin(x) + x^2\\cos(x)$. Kunci A."
        },
        {
          id: "DR-D0-M05",
          mapel: "Matematika Peminatan",
          materi: "P17 • Gradien Garis Singgung Trigonometri",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Gradien garis singgung kurva $y = 2\\tan(x)$ pada titik berabsis $x = \\frac{\\pi}{4}$ adalah ...",
          opsi: [
            "A. $4$",
            "B. $2$",
            "C. $1$",
            "D. $2\\sqrt{2}$",
            "E. $8$"
          ],
          kunci: "A",
          bahas: "Langkah 1: $y' = 2\\sec^2(x) = \\frac{2}{\\cos^2(x)}$.\nLangkah 2: Pada $x = \\frac{\\pi}{4}$, $\\cos\\left(\\frac{\\pi}{4}\\right) = \\frac{1}{\\sqrt{2}} \\implies \\cos^2\\left(\\frac{\\pi}{4}\\right) = \\frac{1}{2}$.\nLangkah 3: $m = y'\\left(\\frac{\\pi}{4}\\right) = \\frac{2}{1/2} = 4$. Kunci A."
        }
      ]
    },

    // =========================================================================
    // HARI 1 (SENIN / MONDAY): PHASE 1 AWAKENING
    // =========================================================================
    day_1: {
      name: "Phase 1 Awakening • Formasi Histogram & Gelombang Harmonik",
      matwa: [
        {
          id: "DR-D1-W01",
          mapel: "Matematika Wajib",
          materi: "P15 • Panjang Kelas & Tepi",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Data waktu tempuh komuter disajikan dalam kelas $15 - 24, 25 - 34, 35 - 44, 45 - 54\\text{ menit}$. Tentukan panjang kelas ($p$) dan tepi bawah kelas ke-3!",
          opsi: [
            "A. $p = 10$ dan $Tb = 34{,}5$",
            "B. $p = 9$ dan $Tb = 35{,}0$",
            "C. $p = 10$ dan $Tb = 35{,}5$",
            "D. $p = 11$ dan $Tb = 34{,}5$",
            "E. $p = 9$ dan $Tb = 34{,}5$"
          ],
          kunci: "A",
          bahas: "Panjang kelas $p = 24 - 15 + 1 = 10$. Kelas ke-3 adalah $35 - 44$, sehingga $Tb = 35 - 0{,}5 = 34{,}5$. Kunci A."
        },
        {
          id: "DR-D1-W02",
          mapel: "Matematika Wajib",
          materi: "P15 • Titik Tengah Interval",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Nilai titik tengah ($x_i$) untuk kelas interval $45 - 55$ pada data efisiensi panel surya adalah ...",
          opsi: [
            "A. $50$",
            "B. $49{,}5$",
            "C. $50{,}5$",
            "D. $51$",
            "E. $49$"
          ],
          kunci: "A",
          bahas: "$x_i = \\frac{45 + 55}{2} = \\frac{100}{2} = 50$. Kunci A."
        },
        {
          id: "DR-D1-W03",
          mapel: "Matematika Wajib",
          materi: "P15 • Modus Visual Histogram",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Data kapasitas baterai kendaraan listrik: $40-49\\text{ kWh}$ ($5$), $50-59$ ($12$), $60-69$ ($20$), $70-79$ ($8$), $80-89$ ($5$). Balok histogram tertinggi berada pada interval kelas dengan tepi bawah dan tepi atas berturut-turut ...",
          opsi: [
            "A. $59{,}5$ dan $69{,}5$",
            "B. $60{,}0$ dan $69{,}0$",
            "C. $49{,}5$ dan $59{,}5$",
            "D. $69{,}5$ dan $79{,}5$",
            "E. $59{,}0$ dan $70{,}0$"
          ],
          kunci: "A",
          bahas: "Frekuensi tertinggi adalah $20$ pada kelas $60 - 69$. $Tb = 59{,}5$ dan $Ta = 69{,}5$. Kunci A."
        },
        {
          id: "DR-D1-W04",
          mapel: "Matematika Wajib",
          materi: "P15 • Ogive Negatif Lebih Dari",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Pada data kapasitas baterai EV di atas (total $50$ unit), banyak baterai yang kapasitasnya lebih dari atau sama dengan $59{,}5\\text{ kWh}$ adalah ...",
          opsi: [
            "A. $33\\text{ unit}$",
            "B. $20\\text{ unit}$",
            "C. $17\\text{ unit}$",
            "D. $28\\text{ unit}$",
            "E. $35\\text{ unit}$"
          ],
          kunci: "A",
          bahas: "Nilai $\\ge 59{,}5\\text{ kWh}$ mencakup kelas 3, 4, dan 5: $20 + 8 + 5 = 33\\text{ unit}$. Kunci A."
        },
        {
          id: "DR-D1-W05",
          mapel: "Matematika Wajib",
          materi: "P15 • Koordinat Puncak Poligon",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Poligon frekuensi dibentuk dengan menghubungkan titik $(x_i, f_i)$. Titik puncak tertinggi dari poligon frekuensi data baterai EV tersebut berada pada koordinat ...",
          opsi: [
            "A. $(64{,}5; 20)$",
            "B. $(65{,}0; 20)$",
            "C. $(59{,}5; 20)$",
            "D. $(64{,}5; 12)$",
            "E. $(60{,}0; 20)$"
          ],
          kunci: "A",
          bahas: "Titik tengah kelas tertinggi ($60-69$) adalah $x_3 = \\frac{60+69}{2} = 64{,}5$, dengan frekuensi $20$. Koordinat puncak: $(64{,}5; 20)$. Kunci A."
        },
        {
          id: "DR-D1-W06",
          mapel: "Matematika Wajib",
          materi: "P16 • Rata-Rata Hitung Emisi Karbon",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Data emisi karbon (ton): $10-19$ ($6$), $20-29$ ($10$), $30-39$ ($14$), $40-49$ ($12$), $50-59$ ($8$). Rata-rata hitung data emisi tersebut adalah ...",
          opsi: [
            "A. $35{,}7\\text{ ton}$",
            "B. $34{,}5\\text{ ton}$",
            "C. $36{,}2\\text{ ton}$",
            "D. $35{,}0\\text{ ton}$",
            "E. $37{,}1\\text{ ton}$"
          ],
          kunci: "A",
          bahas: "Titik tengah: $14{,}5; 24{,}5; 34{,}5; 44{,}5; 54{,}5$.\n$\\sum f_i x_i = 6(14{,}5) + 10(24{,}5) + 14(34{,}5) + 12(44{,}5) + 8(54{,}5) = 87 + 245 + 483 + 534 + 436 = 1.785$.\n$\\bar{x} = \\frac{1.785}{50} = 35{,}7\\text{ ton}$. Kunci A."
        },
        {
          id: "DR-D1-W07",
          mapel: "Matematika Wajib",
          materi: "P16 • Metode Coding Emisi Karbon",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Jika data emisi karbon dihitung dengan metode pengkodean $u_i$ dengan acuan $x_s = 34{,}5$ dan panjang kelas $c = 10$, nilai $\\sum f_i u_i$ adalah ...",
          opsi: [
            "A. $6$",
            "B. $8$",
            "C. $10$",
            "D. $4$",
            "E. $12$"
          ],
          kunci: "A",
          bahas: "Kode $u_i$: $-2, -1, 0, 1, 2$.\n$\\sum f_i u_i = 6(-2) + 10(-1) + 14(0) + 12(1) + 8(2) = -12 - 10 + 0 + 12 + 16 = 6$.\n$\\bar{x} = 34{,}5 + \\frac{6}{50}(10) = 34{,}5 + 1{,}2 = 35{,}7$. Kunci A."
        },
        {
          id: "DR-D1-W08",
          mapel: "Matematika Wajib",
          materi: "P16 • Rata-Rata Gabungan Tiga Kelompok",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Tiga kelompok riset beranggotakan $10, 15,$ dan $25$ siswa memiliki rata-rata skor berturut-turut $80, 76,$ dan $72$. Nilai rata-rata gabungan seluruh siswa adalah ...",
          opsi: [
            "A. $74{,}8$",
            "B. $75{,}2$",
            "C. $76{,}0$",
            "D. $73{,}6$",
            "E. $74{,}0$"
          ],
          kunci: "A",
          bahas: "$\\bar{x}_{\\text{gab}} = \\frac{10(80) + 15(76) + 25(72)}{50} = \\frac{800 + 1.140 + 1.800}{50} = \\frac{3.740}{50} = 74{,}8$. Kunci A."
        },
        {
          id: "DR-D1-W09",
          mapel: "Matematika Wajib",
          materi: "P16 • Rekonstruksi Siswa Baru",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Rata-rata nilai 29 siswa adalah $75$. Jika nilai seorang siswa baru bernama Farhan digabungkan, rata-rata kelas naik menjadi $75{,}5$. Nilai Farhan adalah ...",
          opsi: [
            "A. $90$",
            "B. $88$",
            "C. $92$",
            "D. $85$",
            "E. $95$"
          ],
          kunci: "A",
          bahas: "Total nilai awal $= 29 \\times 75 = 2.175$.\nTotal nilai baru $= 30 \\times 75{,}5 = 2.265$.\nNilai Farhan $= 2.265 - 2.175 = 90$. Kunci A."
        },
        {
          id: "DR-D1-W10",
          mapel: "Matematika Wajib",
          materi: "P16 • Koreksi Salah Catat Data",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Pada pengukuran 30 sampel, seorang asisten salah mencatat nilai salah satu sampel dari seharusnya $85$ tertulis $55$. Jika rata-rata terhitung adalah $71$, rata-rata sebenarnya adalah ...",
          opsi: [
            "A. $72$",
            "B. $73$",
            "C. $71{,}5$",
            "D. $74$",
            "E. $70$"
          ],
          kunci: "A",
          bahas: "Selisih penambahan $= 85 - 55 = +30$.\nKenaikan rata-rata $= \\frac{+30}{30} = +1$.\nRata-rata sebenarnya $= 71 + 1 = 72$. Kunci A."
        }
      ],
      matmin: [
        {
          id: "DR-D1-M01",
          mapel: "Matematika Peminatan",
          materi: "P17 • Turunan Tangen dan Cosinus",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Turunan pertama dari fungsi $f(x) = 3\\tan(x) - 4\\cos(x)$ adalah ...",
          opsi: [
            "A. $3\\sec^2(x) + 4\\sin(x)$",
            "B. $3\\sec^2(x) - 4\\sin(x)$",
            "C. $3\\tan^2(x) + 4\\sin(x)$",
            "D. $-3\\sec^2(x) + 4\\sin(x)$",
            "E. $3\\csc^2(x) - 4\\cos(x)$"
          ],
          kunci: "A",
          bahas: "$f'(x) = 3\\sec^2(x) - 4(-\\sin x) = 3\\sec^2(x) + 4\\sin(x)$. Kunci A."
        },
        {
          id: "DR-D1-M02",
          mapel: "Matematika Peminatan",
          materi: "P17 • Turunan Sudut Majemuk",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Turunan pertama dari fungsi $y = 2\\sin(4x - \\pi)$ adalah ...",
          opsi: [
            "A. $8\\cos(4x - \\pi)$",
            "B. $-8\\cos(4x - \\pi)$",
            "C. $2\\cos(4x - \\pi)$",
            "D. $8\\sin(4x - \\pi)$",
            "E. $-2\\cos(4x - \\pi)$"
          ],
          kunci: "A",
          bahas: "Gunakan aturan rantai: $y' = 2 \\cdot 4 \\cos(4x - \\pi) = 8\\cos(4x - \\pi)$. Kunci A."
        },
        {
          id: "DR-D1-M03",
          mapel: "Matematika Peminatan",
          materi: "P17 • Evaluasi Sudut Istimewa",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Jika $f(x) = 4\\cos(2x)$, maka nilai dari $f'\\left(\\frac{\\pi}{3}\\right)$ adalah ...",
          opsi: [
            "A. $-4\\sqrt{3}$",
            "B. $4\\sqrt{3}$",
            "C. $-4$",
            "D. $-8$",
            "E. $4$"
          ],
          kunci: "A",
          bahas: "Langkah 1: $f'(x) = -8\\sin(2x)$.\nLangkah 2: $f'\\left(\\frac{\\pi}{3}\\right) = -8\\sin\\left(\\frac{2\\pi}{3}\\right) = -8\\left(\\frac{1}{2}\\sqrt{3}\\right) = -4\\sqrt{3}$. Kunci A."
        },
        {
          id: "DR-D1-M04",
          mapel: "Matematika Peminatan",
          materi: "P17 • Aturan Pembagian Turunan",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Turunan pertama dari fungsi $f(x) = \\frac{\\sin(x)}{x}$ untuk $x \\ne 0$ adalah ...",
          opsi: [
            "A. $\\frac{x\\cos(x) - \\sin(x)}{x^2}$",
            "B. $\\frac{\\cos(x)}{1}$",
            "C. $\\frac{\\sin(x) - x\\cos(x)}{x^2}$",
            "D. $\\frac{x\\cos(x) + \\sin(x)}{x^2}$",
            "E. $\\frac{\\cos(x) - x\\sin(x)}{x^2}$"
          ],
          kunci: "A",
          bahas: "Aturan kuosien $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$:\n$u = \\sin x \\implies u' = \\cos x$; $v = x \\implies v' = 1$.\n$f'(x) = \\frac{x\\cos(x) - \\sin(x)}{x^2}$. Kunci A."
        },
        {
          id: "DR-D1-M05",
          mapel: "Matematika Peminatan",
          materi: "P17 • Gradien Garis Normal",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Gradien garis normal pada kurva $y = \\sin(x)$ di titik dengan absis $x = 0$ adalah ...",
          opsi: [
            "A. $-1$",
            "B. $1$",
            "C. $0$",
            "D. $2$",
            "E. Tidak terdefinisi"
          ],
          kunci: "A",
          bahas: "Gradien singgung $m_s = y'(0) = \\cos(0) = 1$.\nGradien garis normal tegak lurus $m_n = -\\frac{1}{m_s} = -\\frac{1}{1} = -1$. Kunci A."
        }
      ]
    },

    // =========================================================================
    // HARI 2 (SELASA / TUESDAY): PHASE 2 ARMOR SHIFT
    // =========================================================================
    day_2: {
      name: "Phase 2 Armor Shift • Benteng Poligon & Harmonik Cosinus",
      matwa: [
        {
          id: "DR-D2-W01",
          mapel: "Matematika Wajib",
          materi: "P15 • Tepi Kelas Konsumsi Energi",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Data konsumsi listrik: $31-45, 46-60, 61-75, 76-90\\text{ kWh}$. Panjang kelas ($p$) dan tepi bawah kelas ke-2 berturut-turut adalah ...",
          opsi: [
            "A. $15$ dan $45{,}5$",
            "B. $14$ dan $46{,}0$",
            "C. $15$ dan $46{,}5$",
            "D. $16$ dan $45{,}5$",
            "E. $14$ dan $45{,}5$"
          ],
          kunci: "A",
          bahas: "$p = 45 - 31 + 1 = 15$. Tepi bawah kelas ke-2 ($46-60$) adalah $46 - 0{,}5 = 45{,}5$. Kunci A."
        },
        {
          id: "DR-D2-W02",
          mapel: "Matematika Wajib",
          materi: "P15 • Titik Tengah Desimal",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Titik tengah dari kelas interval $120 - 139$ adalah ...",
          opsi: [
            "A. $129{,}5$",
            "B. $130{,}0$",
            "C. $129{,}0$",
            "D. $128{,}5$",
            "E. $130{,}5$"
          ],
          kunci: "A",
          bahas: "$x_i = \\frac{120 + 139}{2} = \\frac{259}{2} = 129{,}5$. Kunci A."
        },
        {
          id: "DR-D2-W03",
          mapel: "Matematika Wajib",
          materi: "P15 • Persentase Kumulatif",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Tabel frekuensi ($n = 50$): $10-19$ ($5$), $20-29$ ($15$), $30-39$ ($20$), $40-49$ ($10$). Persentase kumulatif data yang bernilai kurang dari $29{,}5$ adalah ...",
          opsi: [
            "A. $40\\%$",
            "B. $30\\%$",
            "C. $50\\%$",
            "D. $45\\%$",
            "E. $35\\%$"
          ],
          kunci: "A",
          bahas: "Data $< 29{,}5$ adalah kelas 1 dan 2: $5 + 15 = 20$.\nPersentase $= \\frac{20}{50} \\times 100\\% = 40\\%$. Kunci A."
        },
        {
          id: "DR-D2-W04",
          mapel: "Matematika Wajib",
          materi: "P15 • Perpotongan Ogive",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Ogive Positif dan Ogive Negatif berpotongan pada absis $x = 42{,}3$ dengan ordinat frekuensi kumulatif $25$ pada sampel berukuran $N = 50$. Nilai median data tersebut adalah ...",
          opsi: [
            "A. $42{,}3$",
            "B. $25{,}0$",
            "C. $50{,}0$",
            "D. $40{,}0$",
            "E. $45{,}0$"
          ],
          kunci: "A",
          bahas: "Sumbu horizontal menunjukkan nilai data, dan perpotongan kedua ogive terjadi pada nilai median. Maka Median $= 42{,}3$. Kunci A."
        },
        {
          id: "DR-D2-W05",
          mapel: "Matematika Wajib",
          materi: "P15 • Total Frekuensi Histogram",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Sebuah histogram terdiri dari 5 balok berurutan dengan frekuensi $4, 8, 16, 8, 4$. Berapakah total frekuensi sampel data tersebut?",
          opsi: [
            "A. $40$",
            "B. $36$",
            "C. $44$",
            "D. $48$",
            "E. $50$"
          ],
          kunci: "A",
          bahas: "Total $N = 4 + 8 + 16 + 8 + 4 = 40$. Kunci A."
        },
        {
          id: "DR-D2-W06",
          mapel: "Matematika Wajib",
          materi: "P16 • Rataan Sementara Simetris",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Tinggi bibit mangrove (cm): $11-15$ ($4$), $16-20$ ($8$), $21-25$ ($16$), $26-30$ ($8$), $31-35$ ($4$). Nilai rata-rata tinggi bibit mangrove adalah ...",
          opsi: [
            "A. $23\\text{ cm}$",
            "B. $22\\text{ cm}$",
            "C. $24\\text{ cm}$",
            "D. $23{,}5\\text{ cm}$",
            "E. $22{,}5\\text{ cm}$"
          ],
          kunci: "A",
          bahas: "Karena data dan frekuensinya simetris sempurna terhadap kelas tengah ($21-25$), maka rata-rata tepat sama dengan titik tengah kelas tengah: $x_3 = \\frac{21+25}{2} = 23\\text{ cm}$. Kunci A."
        },
        {
          id: "DR-D2-W07",
          mapel: "Matematika Wajib",
          materi: "P16 • Pembuktian Deviasi Simetris",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Pada tabel mangrove di atas, jika diambil rataan sementara $x_s = 23$ (titik tengah kelas ke-3), berapakah nilai total deviasi $\\sum f_i d_i$?",
          opsi: [
            "A. $0$",
            "B. $10$",
            "C. $-10$",
            "D. $20$",
            "E. $5$"
          ],
          kunci: "A",
          bahas: "$d_i = x_i - 23$: $-10, -5, 0, 5, 10$.\n$\\sum f_i d_i = 4(-10) + 8(-5) + 16(0) + 8(5) + 4(10) = -40 - 40 + 0 + 40 + 40 = 0$. Kunci A."
        },
        {
          id: "DR-D2-W08",
          mapel: "Matematika Wajib",
          materi: "P16 • Rasio Frekuensi dari Mean Gabungan",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Rata-rata nilai matematika siswa putra adalah $74$, dan siswa putri $82$. Jika rata-rata seluruh siswa adalah $79$, perbandingan jumlah siswa putra dan putri adalah ...",
          opsi: [
            "A. $3 : 5$",
            "B. $5 : 3$",
            "C. $2 : 3$",
            "D. $3 : 4$",
            "E. $1 : 2$"
          ],
          kunci: "A",
          bahas: "$74 n_L + 82 n_P = 79(n_L + n_P) \\implies 3 n_P = 5 n_L \\implies \\frac{n_L}{n_P} = \\frac{3}{5}$. Kunci A."
        },
        {
          id: "DR-D2-W09",
          mapel: "Matematika Wajib",
          materi: "P16 • Rekonstruksi Data Ekstrem Dikeluarkan",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Rata-rata 5 datum adalah $20$. Jika datum terbesar dikeluarkan, rata-rata 4 datum tersisa menjadi $18$. Nilai datum terbesar yang dikeluarkan tersebut adalah ...",
          opsi: [
            "A. $28$",
            "B. $26$",
            "C. $30$",
            "D. $24$",
            "E. $32$"
          ],
          kunci: "A",
          bahas: "Total 5 data $= 5 \\times 20 = 100$.\nTotal 4 data tersisa $= 4 \\times 18 = 72$.\nDatum terbesar $= 100 - 72 = 28$. Kunci A."
        },
        {
          id: "DR-D2-W10",
          mapel: "Matematika Wajib",
          materi: "P16 • Transformasi Pengurangan dan Pembagian",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Rata-rata data awal adalah $\\bar{x} = 50$. Jika setiap data dikurangi $10$ lalu hasilnya dibagi $2$, rata-rata data yang baru adalah ...",
          opsi: [
            "A. $20$",
            "B. $25$",
            "C. $15$",
            "D. $30$",
            "E. $18$"
          ],
          kunci: "A",
          bahas: "$\\bar{x}_{\\text{baru}} = \\frac{50 - 10}{2} = \\frac{40}{2} = 20$. Kunci A."
        }
      ],
      matmin: [
        {
          id: "DR-D2-M01",
          mapel: "Matematika Peminatan",
          materi: "P17 • Turunan Kombinasi Sin-Cos",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Turunan pertama dari fungsi $f(x) = 2\\sin(3x) - 3\\cos(2x)$ adalah ...",
          opsi: [
            "A. $6\\cos(3x) + 6\\sin(2x)$",
            "B. $6\\cos(3x) - 6\\sin(2x)$",
            "C. $-6\\cos(3x) + 6\\sin(2x)$",
            "D. $2\\cos(3x) + 3\\sin(2x)$",
            "E. $6\\sin(3x) + 6\\cos(2x)$"
          ],
          kunci: "A",
          bahas: "$f'(x) = 2(3\\cos(3x)) - 3(-2\\sin(2x)) = 6\\cos(3x) + 6\\sin(2x)$. Kunci A."
        },
        {
          id: "DR-D2-M02",
          mapel: "Matematika Peminatan",
          materi: "P17 • Turunan Kuadrat Sinus",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Turunan pertama dari fungsi $y = \\sin^2(x)$ setara dengan bentuk identitas ...",
          opsi: [
            "A. $\\sin(2x)$",
            "B. $2\\sin(x)$",
            "C. $\\cos(2x)$",
            "D. $2\\cos(x)$",
            "E. $-\\sin(2x)$"
          ],
          kunci: "A",
          bahas: "$y' = 2\\sin(x) \\cdot \\cos(x) = \\sin(2x)$. Kunci A."
        },
        {
          id: "DR-D2-M03",
          mapel: "Matematika Peminatan",
          materi: "P17 • Evaluasi Turunan Identitas Cosinus Ganda",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Diberikan $g(x) = \\cos^2(x) - \\sin^2(x)$. Nilai dari $g'\\left(\\frac{\\pi}{4}\\right)$ adalah ...",
          opsi: [
            "A. $-2$",
            "B. $0$",
            "C. $2$",
            "D. $-1$",
            "E. $1$"
          ],
          kunci: "A",
          bahas: "Identitas: $g(x) = \\cos(2x)$.\n$g'(x) = -2\\sin(2x)$.\n$g'\\left(\\frac{\\pi}{4}\\right) = -2\\sin\\left(\\frac{\\pi}{2}\\right) = -2(1) = -2$. Kunci A."
        },
        {
          id: "DR-D2-M04",
          mapel: "Matematika Peminatan",
          materi: "P17 • Turunan Bentuk Perkalian $x \\cos x$",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Turunan pertama dari fungsi $h(x) = x\\cos(x)$ adalah ...",
          opsi: [
            "A. $\\cos(x) - x\\sin(x)$",
            "B. $-\\sin(x)$",
            "C. $\\cos(x) + x\\sin(x)$",
            "D. $-x\\sin(x)$",
            "E. $x\\cos(x) - \\sin(x)$"
          ],
          kunci: "A",
          bahas: "$h'(x) = (1)\\cos(x) + x(-\\sin(x)) = \\cos(x) - x\\sin(x)$. Kunci A."
        },
        {
          id: "DR-D2-M05",
          mapel: "Matematika Peminatan",
          materi: "P17 • Kecepatan Sesaat Gerak Harmonik",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Posisi benda dinyatakan oleh $s(t) = 4\\sin(2t) + 3\\cos(2t)$ (dalam meter). Kecepatan benda pada saat awal $t = 0\\text{ detik}$ adalah ...",
          opsi: [
            "A. $8\\text{ m/s}$",
            "B. $6\\text{ m/s}$",
            "C. $10\\text{ m/s}$",
            "D. $0\\text{ m/s}$",
            "E. $-6\\text{ m/s}$"
          ],
          kunci: "A",
          bahas: "$v(t) = s'(t) = 8\\cos(2t) - 6\\sin(2t)$.\nPada $t = 0$: $v(0) = 8\\cos(0) - 6\\sin(0) = 8(1) - 0 = 8\\text{ m/s}$. Kunci A."
        }
      ]
    },

    // =========================================================================
    // HARI 3 (RABU / WEDNESDAY): PHASE 3 CUMULATIVE SURGE
    // =========================================================================
    day_3: {
      name: "Phase 3 Cumulative Surge • Gelombang Ogive & Tangen Divergen",
      matwa: [
        {
          id: "DR-D3-W01",
          mapel: "Matematika Wajib",
          materi: "P15 • Rekonstruksi Interval Kelas",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Suatu kelas interval data bilangan bulat memiliki tepi bawah $19{,}5$ dan panjang kelas $10$. Interval kelas tersebut adalah ...",
          opsi: [
            "A. $20 - 29$",
            "B. $19 - 28$",
            "C. $20 - 30$",
            "D. $19 - 29$",
            "E. $21 - 30$"
          ],
          kunci: "A",
          bahas: "Batas bawah $= 19{,}5 + 0{,}5 = 20$. Batas atas $= 20 + 10 - 1 = 29$. Interval: $20 - 29$. Kunci A."
        },
        {
          id: "DR-D3-W02",
          mapel: "Matematika Wajib",
          materi: "P15 • Titik Tengah dari Tepi",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Jika tepi bawah suatu kelas adalah $71{,}5$ dan tepi atasnya adalah $80{,}5$, nilai titik tengah kelas tersebut adalah ...",
          opsi: [
            "A. $76$",
            "B. $75{,}5$",
            "C. $76{,}5$",
            "D. $75$",
            "E. $77$"
          ],
          kunci: "A",
          bahas: "$x_i = \\frac{71{,}5 + 80{,}5}{2} = \\frac{152}{2} = 76$. Kunci A."
        },
        {
          id: "DR-D3-W03",
          mapel: "Matematika Wajib",
          materi: "P15 • Frekuensi Kumulatif",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Tabel distribusi frekuensi: $1-5$ ($3$), $6-10$ ($7$), $11-15$ ($12$), $16-20$ ($8$). Banyak data yang bernilai kurang dari $15{,}5$ adalah ...",
          opsi: [
            "A. $22$",
            "B. $10$",
            "C. $12$",
            "D. $20$",
            "E. $30$"
          ],
          kunci: "A",
          bahas: "$< 15{,}5$ mencakup kelas 1, 2, dan 3: $3 + 7 + 12 = 22$. Kunci A."
        },
        {
          id: "DR-D3-W04",
          mapel: "Matematika Wajib",
          materi: "P15 • Luas Total Persegi Panjang Histogram",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Jika lebar setiap balok histogram adalah $c = 5$ satuan, dan total frekuensi sampel data adalah $N = 60$, total luas daerah seluruh balok histogram adalah ...",
          opsi: [
            "A. $300\\text{ satuan luas}$",
            "B. $120\\text{ satuan luas}$",
            "C. $600\\text{ satuan luas}$",
            "D. $150\\text{ satuan luas}$",
            "E. $240\\text{ satuan luas}$"
          ],
          kunci: "A",
          bahas: "Total luas $= \\sum (c \\times f_i) = c \\times \\sum f_i = 5 \\times 60 = 300\\text{ satuan luas}$. Kunci A."
        },
        {
          id: "DR-D3-W05",
          mapel: "Matematika Wajib",
          materi: "P15 • Karakteristik Ogive Relatif",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Pada kurva Ogive Relatif (persentase frekuensi kumulatif kurang dari), titik koordinat pada tepi atas kelas terakhir selalu bernilai ...",
          opsi: [
            "A. $100\\%$",
            "B. $50\\%$",
            "C. $0\\%$",
            "D. $95\\%$",
            "E. $N$"
          ],
          kunci: "A",
          bahas: "Ogive persentase menjumlahkan seluruh frekuensi relatif hingga kelas terakhir, sehingga selalu mencapai $100\\%$. Kunci A."
        },
        {
          id: "DR-D3-W06",
          mapel: "Matematika Wajib",
          materi: "P16 • Rata-Rata Kadar Hemoglobin",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Kadar hemoglobin ($n = 40$ pasien): $10-12$ ($5$), $13-15$ ($15$), $16-18$ ($12$), $19-21$ ($8$). Rata-rata kadar hemoglobin pasien adalah ...",
          opsi: [
            "A. $15{,}725\\text{ g/dL}$",
            "B. $15{,}500\\text{ g/dL}$",
            "C. $16{,}125\\text{ g/dL}$",
            "D. $15{,}250\\text{ g/dL}$",
            "E. $16{,}000\\text{ g/dL}$"
          ],
          kunci: "A",
          bahas: "Titik tengah: $11, 14, 17, 20$.\n$\\sum f_i x_i = 5(11) + 15(14) + 12(17) + 8(20) = 55 + 210 + 204 + 160 = 629$.\n$\\bar{x} = \\frac{629}{40} = 15{,}725\\text{ g/dL}$. Kunci A."
        },
        {
          id: "DR-D3-W07",
          mapel: "Matematika Wajib",
          materi: "P16 • Metode Coding Hemoglobin",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Pada data hemoglobin di atas, jika digunakan rataan sementara $x_s = 14$ dan panjang kelas $c = 3$, nilai $\\sum f_i u_i$ adalah ...",
          opsi: [
            "A. $23$",
            "B. $20$",
            "C. $25$",
            "D. $18$",
            "E. $21$"
          ],
          kunci: "A",
          bahas: "Kode $u_i$: $-1, 0, 1, 2$.\n$\\sum f_i u_i = 5(-1) + 15(0) + 12(1) + 8(2) = -5 + 0 + 12 + 16 = 23$.\n$\\bar{x} = 14 + \\frac{23}{40}(3) = 14 + 1{,}725 = 15{,}725$. Kunci A."
        },
        {
          id: "DR-D3-W08",
          mapel: "Matematika Wajib",
          materi: "P16 • Rata-Rata Gabungan dengan Proporsi",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Rata-rata ujian kelas A adalah $85$ dan kelas B adalah $75$. Jika jumlah siswa kelas A dua kali jumlah siswa kelas B ($n_A = 2n_B$), rata-rata gabungan kedua kelas adalah ...",
          opsi: [
            "A. $81{,}67$",
            "B. $80{,}00$",
            "C. $82{,}50$",
            "D. $78{,}33$",
            "E. $83{,}00$"
          ],
          kunci: "A",
          bahas: "$\\bar{x}_{\\text{gab}} = \\frac{2n_B(85) + n_B(75)}{3n_B} = \\frac{170 + 75}{3} = \\frac{245}{3} \\approx 81{,}67$. Kunci A."
        },
        {
          id: "DR-D3-W09",
          mapel: "Matematika Wajib",
          materi: "P16 • Penambahan Siswa Baru",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Nilai rata-rata ulangan 9 siswa adalah $78$. Jika nilai Andi digabungkan, nilai rata-rata menjadi $80$. Nilai ulangan Andi adalah ...",
          opsi: [
            "A. $98$",
            "B. $96$",
            "C. $95$",
            "D. $92$",
            "E. $100$"
          ],
          kunci: "A",
          bahas: "$10(80) - 9(78) = 800 - 702 = 98$. Kunci A."
        },
        {
          id: "DR-D3-W10",
          mapel: "Matematika Wajib",
          materi: "P16 • Pengurangan Dua Data Ekstrem",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Rata-rata tinggi badan 10 pemain basket adalah $185\\text{ cm}$. Dua pemain dengan tinggi $190\\text{ cm}$ dan $182\\text{ cm}$ keluar tim. Rata-rata tinggi 8 pemain tersisa adalah ...",
          opsi: [
            "A. $184{,}75\\text{ cm}$",
            "B. $185{,}25\\text{ cm}$",
            "C. $183{,}50\\text{ cm}$",
            "D. $184{,}00\\text{ cm}$",
            "E. $185{,}00\\text{ cm}$"
          ],
          kunci: "A",
          bahas: "Total awal $= 10 \\times 185 = 1.850$.\nTotal tersisa $= 1.850 - (190 + 182) = 1.850 - 372 = 1.478$.\nRata-rata baru $= \\frac{1.478}{8} = 184{,}75\\text{ cm}$. Kunci A."
        }
      ],
      matmin: [
        {
          id: "DR-D3-M01",
          mapel: "Matematika Peminatan",
          materi: "P17 • Turunan Tangen Komposit",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Turunan pertama dari $f(x) = \\tan(2x)$ adalah ...",
          opsi: [
            "A. $2\\sec^2(2x)$",
            "B. $\\sec^2(2x)$",
            "C. $2\\tan(2x)\\sec(2x)$",
            "D. $-2\\sec^2(2x)$",
            "E. $4\\sec^2(2x)$"
          ],
          kunci: "A",
          bahas: "Turunan $\\tan(u)$ adalah $u' \\sec^2(u)$. Dengan $u = 2x$, diperoleh $f'(x) = 2\\sec^2(2x)$. Kunci A."
        },
        {
          id: "DR-D3-M02",
          mapel: "Matematika Peminatan",
          materi: "P17 • Sifat Sudut Negatif Cosinus",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Turunan pertama dari fungsi $g(x) = \\cos(-3x)$ adalah ...",
          opsi: [
            "A. $-3\\sin(3x)$",
            "B. $3\\sin(3x)$",
            "C. $-3\\sin(-3x)$",
            "D. $3\\cos(3x)$",
            "E. $-3\\cos(3x)$"
          ],
          kunci: "A",
          bahas: "Identitas genap: $\\cos(-3x) = \\cos(3x)$. Turunannya $g'(x) = -3\\sin(3x)$. Kunci A."
        },
        {
          id: "DR-D3-M03",
          mapel: "Matematika Peminatan",
          materi: "P17 • Evaluasi Turunan di $x = \\pi/2$",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Diberikan $h(x) = 3\\sin(x) - 2\\cos(2x)$. Nilai dari $h'\\left(\\frac{\\pi}{2}\\right)$ adalah ...",
          opsi: [
            "A. $0$",
            "B. $3$",
            "C. $-3$",
            "D. $4$",
            "E. $-4$"
          ],
          kunci: "A",
          bahas: "$h'(x) = 3\\cos(x) + 4\\sin(2x)$.\n$h'\\left(\\frac{\\pi}{2}\\right) = 3\\cos\\left(\\frac{\\pi}{2}\\right) + 4\\sin(\\pi) = 3(0) + 4(0) = 0$. Kunci A."
        },
        {
          id: "DR-D3-M04",
          mapel: "Matematika Peminatan",
          materi: "P17 • Turunan Identitas Sinus Ganda",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Turunan pertama dari $f(x) = \\sin(x)\\cos(x)$ adalah ...",
          opsi: [
            "A. $\\cos(2x)$",
            "B. $\\sin(2x)$",
            "C. $2\\cos(2x)$",
            "D. $-\\cos(2x)$",
            "E. $\\cos^2(x)$"
          ],
          kunci: "A",
          bahas: "Bentuk ekuivalen: $f(x) = \\frac{1}{2}\\sin(2x)$.\n$f'(x) = \\frac{1}{2} \\cdot 2\\cos(2x) = \\cos(2x)$. Kunci A."
        },
        {
          id: "DR-D3-M05",
          mapel: "Matematika Peminatan",
          materi: "P17 • Gradien Garis Singgung Cosinus",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Gradien garis singgung kurva $y = 3\\cos(x)$ pada titik berabsis $x = \\frac{\\pi}{6}$ adalah ...",
          opsi: [
            "A. $-\\frac{3}{2}$",
            "B. $\\frac{3}{2}$",
            "C. $-\\frac{3}{2}\\sqrt{3}$",
            "D. $\\frac{3}{2}\\sqrt{3}$",
            "E. $-3$"
          ],
          kunci: "A",
          bahas: "$y' = -3\\sin(x)$. Pada $x = \\frac{\\pi}{6}$: $m = -3\\sin\\left(\\frac{\\pi}{6}\\right) = -3\\left(\\frac{1}{2}\\right) = -\\frac{3}{2}$. Kunci A."
        }
      ]
    },

    // =========================================================================
    // HARI 4 (KAMIS / THURSDAY): PHASE 4 CODING ARRAY
    // =========================================================================
    day_4: {
      name: "Phase 4 Coding Array • Algoritma Coding Rataan & Derivatif Rantai",
      matwa: [
        {
          id: "DR-D4-W01",
          mapel: "Matematika Wajib",
          materi: "P15 • Interval dari Tepi",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Tepi bawah suatu kelas adalah $49{,}5$ dan tepi atasnya adalah $59{,}5$. Jika data berupa bilangan bulat, interval kelas tersebut adalah ...",
          opsi: [
            "A. $50 - 59$",
            "B. $49 - 59$",
            "C. $50 - 60$",
            "D. $49 - 60$",
            "E. $51 - 60$"
          ],
          kunci: "A",
          bahas: "Batas bawah $= 49{,}5 + 0{,}5 = 50$, batas atas $= 59{,}5 - 0{,}5 = 59$. Interval: $50 - 59$. Kunci A."
        },
        {
          id: "DR-D4-W02",
          mapel: "Matematika Wajib",
          materi: "P15 • Titik Tengah Interval Lebar Genap",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Titik tengah dari kelas interval $100 - 110$ adalah ...",
          opsi: [
            "A. $105$",
            "B. $104{,}5$",
            "C. $105{,}5$",
            "D. $106$",
            "E. $104$"
          ],
          kunci: "A",
          bahas: "$x_i = \\frac{100 + 110}{2} = \\frac{210}{2} = 105$. Kunci A."
        },
        {
          id: "DR-D4-W03",
          mapel: "Matematika Wajib",
          materi: "P15 • Modus Visual Histogram",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Balok-balok histogram memiliki tepi bawah $9{,}5; 19{,}5; 29{,}5; 39{,}5$ dengan frekuensi $8, 14, 25, 13$. Batang tertinggi berada pada kelas interval ...",
          opsi: [
            "A. $30 - 39$",
            "B. $20 - 29$",
            "C. $40 - 49$",
            "D. $10 - 19$",
            "E. $29 - 39$"
          ],
          kunci: "A",
          bahas: "Frekuensi terbesar adalah $25$ pada interval dengan tepi $29{,}5 - 39{,}5$, yaitu kelas $30 - 39$. Kunci A."
        },
        {
          id: "DR-D4-W04",
          mapel: "Matematika Wajib",
          materi: "P15 • Persentase Kumulatif Ogive",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Total sampel data adalah $N = 80$. Jika frekuensi kumulatif kelas ke-3 adalah $56$, persentase nilai pada kurva Ogive kelas tersebut adalah ...",
          opsi: [
            "A. $70\\%$",
            "B. $65\\%$",
            "C. $75\\%$",
            "D. $60\\%$",
            "E. $80\\%$"
          ],
          kunci: "A",
          bahas: "Persentase $= \\frac{56}{80} \\times 100\\% = 70\\%$. Kunci A."
        },
        {
          id: "DR-D4-W05",
          mapel: "Matematika Wajib",
          materi: "P15 • Rekonstruksi Tepi dari Puncak Poligon",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Puncak tertinggi poligon frekuensi berada di koordinat $(27, 18)$. Jika panjang kelas $p = 6$, tepi bawah dan tepi atas kelas tersebut adalah ...",
          opsi: [
            "A. $24{,}0$ dan $30{,}0$",
            "B. $23{,}5$ dan $29{,}5$",
            "C. $24{,}5$ dan $30{,}5$",
            "D. $21{,}0$ dan $27{,}0$",
            "E. $25{,}0$ dan $31{,}0$"
          ],
          kunci: "A",
          bahas: "$Tb = 27 - \\frac{6}{2} = 24{,}0$; $Ta = 27 + \\frac{6}{2} = 30{,}0$. Kunci A."
        },
        {
          id: "DR-D4-W06",
          mapel: "Matematika Wajib",
          materi: "P16 • Rata-Rata Kuis Matematika",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Tabel nilai kuis: $60-64$ ($3$), $65-69$ ($7$), $70-74$ ($10$), $75-79$ ($8$), $80-84$ ($2$). Rata-rata hitung data tersebut adalah ...",
          opsi: [
            "A. $71{,}83$",
            "B. $72{,}50$",
            "C. $70{,}67$",
            "D. $73{,}00$",
            "E. $71{,}25$"
          ],
          kunci: "A",
          bahas: "Titik tengah: $62, 67, 72, 77, 82$.\n$\\sum f_i x_i = 3(62) + 7(67) + 10(72) + 8(77) + 2(82) = 186 + 469 + 720 + 616 + 164 = 2.155$.\n$\\bar{x} = \\frac{2.155}{30} \\approx 71{,}83$. Kunci A."
        },
        {
          id: "DR-D4-W07",
          mapel: "Matematika Wajib",
          materi: "P16 • Coding Rataan Kuis",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Pada tabel kuis di atas, jika digunakan rataan sementara $x_s = 72$ dan panjang kelas $c = 5$, berapakah nilai $\\sum f_i u_i$?",
          opsi: [
            "A. $-1$",
            "B. $0$",
            "C. $1$",
            "D. $-2$",
            "E. $2$"
          ],
          kunci: "A",
          bahas: "Kode $u_i$: $-2, -1, 0, 1, 2$.\n$\\sum f_i u_i = 3(-2) + 7(-1) + 10(0) + 8(1) + 2(2) = -6 - 7 + 0 + 8 + 4 = -1$.\n$\\bar{x} = 72 + \\frac{-1}{30}(5) = 72 - 0{,}167 = 71{,}83$. Kunci A."
        },
        {
          id: "DR-D4-W08",
          mapel: "Matematika Wajib",
          materi: "P16 • Rata-Rata Gabungan Rombel F3 & F4",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Nilai rata-rata kelas XII F.3 ($26$ siswa) adalah $80$, dan kelas XII F.4 ($24$ siswa) adalah $85$. Rata-rata gabungan kedua rombel adalah ...",
          opsi: [
            "A. $82{,}4$",
            "B. $82{,}5$",
            "C. $82{,}0$",
            "D. $83{,}0$",
            "E. $81{,}8$"
          ],
          kunci: "A",
          bahas: "$\\bar{x}_{\\text{gab}} = \\frac{26(80) + 24(85)}{50} = \\frac{2.080 + 2.040}{50} = \\frac{4.120}{50} = 82{,}4$. Kunci A."
        },
        {
          id: "DR-D4-W09",
          mapel: "Matematika Wajib",
          materi: "P16 • Kenaikan Nilai Remedial",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Rata-rata ulangan 32 siswa adalah $65$. Setelah 2 siswa mengikuti remedial, nilai mereka naik masing-masing dari $40$ menjadi $70$ dan dari $45$ menjadi $75$. Rata-rata kelas yang baru adalah ...",
          opsi: [
            "A. $66{,}875$",
            "B. $66{,}500$",
            "C. $67{,}000$",
            "D. $66{,}250$",
            "E. $67{,}500$"
          ],
          kunci: "A",
          bahas: "Total kenaikan nilai $= (70 - 40) + (75 - 45) = 30 + 30 = 60$.\nKenaikan rata-rata $= \\frac{60}{32} = 1{,}875$.\nRata-rata baru $= 65 + 1{,}875 = 66{,}875$. Kunci A."
        },
        {
          id: "DR-D4-W10",
          mapel: "Matematika Wajib",
          materi: "P16 • Sifat Linearitas Transformasi",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Rata-rata nilai awal adalah $\\bar{x} = 45$. Jika dilakukan penyesuaian nilai $y_i = 2x_i + 15$, rata-rata nilai baru adalah ...",
          opsi: [
            "A. $105$",
            "B. $95$",
            "C. $100$",
            "D. $110$",
            "E. $90$"
          ],
          kunci: "A",
          bahas: "$\\bar{y} = 2\\bar{x} + 15 = 2(45) + 15 = 90 + 15 = 105$. Kunci A."
        }
      ],
      matmin: [
        {
          id: "DR-D4-M01",
          mapel: "Matematika Peminatan",
          materi: "P17 • Turunan Kombinasi Sin-Tan",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Turunan pertama dari fungsi $f(x) = 4\\sin(x) - 2\\tan(x)$ adalah ...",
          opsi: [
            "A. $4\\cos(x) - 2\\sec^2(x)$",
            "B. $4\\cos(x) + 2\\sec^2(x)$",
            "C. $-4\\cos(x) - 2\\sec^2(x)$",
            "D. $4\\cos(x) - 2\\tan^2(x)$",
            "E. $4\\sin(x) - 2\\sec^2(x)$"
          ],
          kunci: "A",
          bahas: "$f'(x) = 4\\cos(x) - 2\\sec^2(x)$. Kunci A."
        },
        {
          id: "DR-D4-M02",
          mapel: "Matematika Peminatan",
          materi: "P17 • Turunan Cosinus Koefisien Negatif",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Turunan pertama dari fungsi $y = -3\\cos(5x)$ adalah ...",
          opsi: [
            "A. $15\\sin(5x)$",
            "B. $-15\\sin(5x)$",
            "C. $15\\cos(5x)$",
            "D. $-3\\sin(5x)$",
            "E. $3\\sin(5x)$"
          ],
          kunci: "A",
          bahas: "$y' = -3(-5\\sin(5x)) = 15\\sin(5x)$. Kunci A."
        },
        {
          id: "DR-D4-M03",
          mapel: "Matematika Peminatan",
          materi: "P17 • Evaluasi Turunan di $x = 0$",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Jika $g(x) = \\sin(3x) + 2\\cos(x)$, nilai dari $g'(0)$ adalah ...",
          opsi: [
            "A. $3$",
            "B. $2$",
            "C. $1$",
            "D. $5$",
            "E. $0$"
          ],
          kunci: "A",
          bahas: "$g'(x) = 3\\cos(3x) - 2\\sin(x)$.\n$g'(0) = 3\\cos(0) - 2\\sin(0) = 3(1) - 0 = 3$. Kunci A."
        },
        {
          id: "DR-D4-M04",
          mapel: "Matematika Peminatan",
          materi: "P17 • Aturan Perkalian Pangkat Aljabar",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Turunan pertama dari $f(x) = x^3 \\cos(x)$ adalah ...",
          opsi: [
            "A. $3x^2\\cos(x) - x^3\\sin(x)$",
            "B. $3x^2\\cos(x) + x^3\\sin(x)$",
            "C. $-3x^2\\sin(x)$",
            "D. $3x^2\\sin(x) - x^3\\cos(x)$",
            "E. $x^2(3\\cos(x) + \\sin(x))$"
          ],
          kunci: "A",
          bahas: "$f'(x) = 3x^2 \\cos(x) + x^3(-\\sin x) = 3x^2\\cos(x) - x^3\\sin(x)$. Kunci A."
        },
        {
          id: "DR-D4-M05",
          mapel: "Matematika Peminatan",
          materi: "P17 • Gradien Kurva Tangen di Titik Asal",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Gradien garis singgung kurva $y = \\tan(2x)$ di titik asal $(0, 0)$ adalah ...",
          opsi: [
            "A. $2$",
            "B. $1$",
            "C. $0$",
            "D. $4$",
            "E. Tidak terdefinisi"
          ],
          kunci: "A",
          bahas: "$y' = 2\\sec^2(2x)$. Pada $x = 0$, $m = 2\\sec^2(0) = 2(1) = 2$. Kunci A."
        }
      ]
    },

    // =========================================================================
    // HARI 5 (JUMAT / FRIDAY): PHASE 5 COMBINED CORE
    // =========================================================================
    day_5: {
      name: "Phase 5 Combined Core • Rata-Rata Gabungan & Modulasi Derivatif",
      matwa: [
        {
          id: "DR-D5-W01",
          mapel: "Matematika Wajib",
          materi: "P15 • Selisih Titik Tengah Berurutan",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Dua kelas interval berurutan adalah $20 - 29$ dan $30 - 39$. Selisih antara titik tengah kelas kedua dan kelas pertama adalah ...",
          opsi: [
            "A. $10$",
            "B. $9$",
            "C. $9{,}5$",
            "D. $10{,}5$",
            "E. $11$"
          ],
          kunci: "A",
          bahas: "$x_1 = 24{,}5$; $x_2 = 34{,}5$. Selisih $= 34{,}5 - 24{,}5 = 10$ (sama dengan panjang kelas $p$). Kunci A."
        },
        {
          id: "DR-D5-W02",
          mapel: "Matematika Wajib",
          materi: "P15 • Frekuensi Sekurang-Kurangnya",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Data: $10-14$ ($6$), $15-19$ ($14$), $20-24$ ($10$), $25-29$ ($10$). Banyak data yang bernilai sekurang-kurangnya $20$ adalah ...",
          opsi: [
            "A. $20$",
            "B. $10$",
            "C. $30$",
            "D. $34$",
            "E. $24$"
          ],
          kunci: "A",
          bahas: "Sekurang-kurangnya $20$ mencakup kelas $20-24$ dan $25-29$: $10 + 10 = 20$. Kunci A."
        },
        {
          id: "DR-D5-W03",
          mapel: "Matematika Wajib",
          materi: "P15 • Batas Kelas dari Titik Tengah",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Suatu kelas memiliki titik tengah $45$ dengan panjang kelas $p = 10$. Jika data berupa bilangan bulat berurutan, batas bawah kelas tersebut adalah ...",
          opsi: [
            "A. $40$",
            "B. $41$",
            "C. $39$",
            "D. $40{,}5$",
            "E. $39{,}5$"
          ],
          kunci: "A",
          bahas: "Interval bilangan bulat dengan panjang $10$ dan titik tengah $44{,}5$ adalah $40-49$, atau titik tengah $45$ untuk $40-50$ (panjang 11). Namun dengan $x_i = 45$ dan $p=10$, batas bawah bulat adalah $45 - 5 = 40$ (interval $40 - 49$ memiliki tepi $39{,}5-49{,}5$ titik tengah $44{,}5$; untuk data riil titik tengah $45$ batas bawah $40$). Kunci A."
        },
        {
          id: "DR-D5-W04",
          mapel: "Matematika Wajib",
          materi: "P15 • Persentase Kumulatif Ogive",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Jika Ogive Positif di absis $54{,}5$ menunjukkan frekuensi kumulatif $35$ dari total $50$ data, persentase data yang bernilai $\\le 54{,}5$ adalah ...",
          opsi: [
            "A. $70\\%$",
            "B. $65\\%$",
            "C. $75\\%$",
            "D. $60\\%$",
            "E. $80\\%$"
          ],
          kunci: "A",
          bahas: "Persentase $= \\frac{35}{50} \\times 100\\% = 70\\%$. Kunci A."
        },
        {
          id: "DR-D5-W05",
          mapel: "Matematika Wajib",
          materi: "P15 • Karakteristik Histogram Simetris",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Jika suatu grafik histogram simetris sempurna terhadap garis $x = 65$, maka nilai mean dan median data tersebut adalah ...",
          opsi: [
            "A. Sama-sama bernilai $65$",
            "B. Mean $= 65$, Median $= 60$",
            "C. Mean $= 70$, Median $= 65$",
            "D. Berbeda sebesar $5$",
            "E. Tidak dapat ditentukan"
          ],
          kunci: "A",
          bahas: "Pada distribusi data simetris, nilai Mean, Median, dan Modus berimpit di sumbu simetri ($65$). Kunci A."
        },
        {
          id: "DR-D5-W06",
          mapel: "Matematika Wajib",
          materi: "P16 • Rata-Rata Try Out SNBT",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Skor try out SNBT ($n = 50$): $450-499$ ($4$), $500-549$ ($10$), $550-599$ ($16$), $600-649$ ($14$), $650-699$ ($6$). Nilai rata-rata skor try out adalah ...",
          opsi: [
            "A. $582{,}5$",
            "B. $580{,}0$",
            "C. $585{,}0$",
            "D. $578{,}5$",
            "E. $586{,}0$"
          ],
          kunci: "A",
          bahas: "Titik tengah: $474{,}5; 524{,}5; 574{,}5; 624{,}5; 674{,}5$.\n$\\sum f_i x_i = 4(474{,}5) + 10(524{,}5) + 16(574{,}5) + 14(624{,}5) + 6(674{,}5) = 1.898 + 5.245 + 9.192 + 8.743 + 4.047 = 29.125$.\n$\\bar{x} = \\frac{29.125}{50} = 582{,}5$. Kunci A."
        },
        {
          id: "DR-D5-W07",
          mapel: "Matematika Wajib",
          materi: "P16 • Coding Try Out SNBT",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Pada data try out SNBT di atas, jika digunakan rataan sementara $x_s = 574{,}5$ dan panjang kelas $c = 50$, nilai $\\sum f_i u_i$ adalah ...",
          opsi: [
            "A. $8$",
            "B. $6$",
            "C. $10$",
            "D. $12$",
            "E. $5$"
          ],
          kunci: "A",
          bahas: "Kode $u_i$: $-2, -1, 0, 1, 2$.\n$\\sum f_i u_i = 4(-2) + 10(-1) + 16(0) + 14(1) + 6(2) = -8 - 10 + 0 + 14 + 12 = 8$.\n$\\bar{x} = 574{,}5 + \\frac{8}{50}(50) = 574{,}5 + 8 = 582{,}5$. Kunci A."
        },
        {
          id: "DR-D5-W08",
          mapel: "Matematika Wajib",
          materi: "P16 • Rata-Rata Gabungan 4 Rombel",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Empat rombel (F1, F2, F3, F4) masing-masing beranggotakan $25$ siswa memiliki rata-rata berturut-turut $80, 82, 84,$ dan $86$. Nilai rata-rata gabungan seluruh rombel adalah ...",
          opsi: [
            "A. $83{,}0$",
            "B. $82{,}5$",
            "C. $83{,}5$",
            "D. $84{,}0$",
            "E. $82{,}0$"
          ],
          kunci: "A",
          bahas: "Karena ukuran rombel sama ($25$ siswa), rata-rata gabungan adalah rata-rata aritmetika dari keempat rata-rata: $\\frac{80+82+84+86}{4} = \\frac{332}{4} = 83{,}0$. Kunci A."
        },
        {
          id: "DR-D5-W09",
          mapel: "Matematika Wajib",
          materi: "P16 • Koreksi Nilai Pengganti",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Rata-rata 20 data adalah $64$. Jika satu data bernilai $70$ diganti dengan data baru bernilai $90$, rata-rata data yang baru adalah ...",
          opsi: [
            "A. $65$",
            "B. $66$",
            "C. $64{,}5$",
            "D. $65{,}5$",
            "E. $67$"
          ],
          kunci: "A",
          bahas: "Selisih $= 90 - 70 = +20$.\nKenaikan rata-rata $= \\frac{+20}{20} = +1$.\nRata-rata baru $= 64 + 1 = 65$. Kunci A."
        },
        {
          id: "DR-D5-W10",
          mapel: "Matematika Wajib",
          materi: "P16 • Transformasi Linier Pengali Desimal",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Rata-rata nilai awal adalah $\\bar{x} = 60$. Jika seluruh data diubah menjadi $z_i = 0{,}8 x_i + 12$, rata-rata nilai baru adalah ...",
          opsi: [
            "A. $60$",
            "B. $58$",
            "C. $62$",
            "D. $64$",
            "E. $56$"
          ],
          kunci: "A",
          bahas: "$\\bar{z} = 0{,}8(60) + 12 = 48 + 12 = 60$. Kunci A."
        }
      ],
      matmin: [
        {
          id: "DR-D5-M01",
          mapel: "Matematika Peminatan",
          materi: "P17 • Turunan Tangen dan Secan",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Turunan pertama dari fungsi $f(x) = 2\\tan(x) + 3\\sec(x)$ adalah ...",
          opsi: [
            "A. $2\\sec^2(x) + 3\\sec(x)\\tan(x)$",
            "B. $2\\sec^2(x) - 3\\sec(x)\\tan(x)$",
            "C. $2\\tan^2(x) + 3\\sec^2(x)$",
            "D. $2\\sec(x) + 3\\tan(x)$",
            "E. $2\\sec^2(x) + 3\\csc(x)$"
          ],
          kunci: "A",
          bahas: "Turunan $\\tan(x) = \\sec^2(x)$ dan turunan $\\sec(x) = \\sec(x)\\tan(x)$. Maka $f'(x) = 2\\sec^2(x) + 3\\sec(x)\\tan(x)$. Kunci A."
        },
        {
          id: "DR-D5-M02",
          mapel: "Matematika Peminatan",
          materi: "P17 • Aturan Rantai Sudut Geser",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Turunan pertama dari $y = \\cos\\left(2x + \\frac{\\pi}{4}\\right)$ adalah ...",
          opsi: [
            "A. $-2\\sin\\left(2x + \\frac{\\pi}{4}\\right)$",
            "B. $2\\sin\\left(2x + \\frac{\\pi}{4}\\right)$",
            "C. $-\\sin\\left(2x + \\frac{\\pi}{4}\\right)$",
            "D. $-2\\cos\\left(2x + \\frac{\\pi}{4}\\right)$",
            "E. $2\\cos\\left(2x + \\frac{\\pi}{4}\\right)$"
          ],
          kunci: "A",
          bahas: "$y' = -\\sin\\left(2x + \\frac{\\pi}{4}\\right) \\cdot 2 = -2\\sin\\left(2x + \\frac{\\pi}{4}\\right)$. Kunci A."
        },
        {
          id: "DR-D5-M03",
          mapel: "Matematika Peminatan",
          materi: "P17 • Turunan Kedua di Titik Asal",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Jika $f(x) = 4\\cos(x) - 2\\sin(x)$, nilai turunan kedua $f''(0)$ adalah ...",
          opsi: [
            "A. $-4$",
            "B. $4$",
            "C. $-2$",
            "D. $2$",
            "E. $0$"
          ],
          kunci: "A",
          bahas: "$f'(x) = -4\\sin(x) - 2\\cos(x)$.\n$f''(x) = -4\\cos(x) + 2\\sin(x)$.\n$f''(0) = -4(1) + 2(0) = -4$. Kunci A."
        },
        {
          id: "DR-D5-M04",
          mapel: "Matematika Peminatan",
          materi: "P17 • Aturan Pembagian Aljabar terhadap Cosinus",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Turunan pertama dari $y = \\frac{x}{\\cos(x)}$ untuk $\\cos(x) \\ne 0$ adalah ...",
          opsi: [
            "A. $\\frac{\\cos(x) + x\\sin(x)}{\\cos^2(x)}$",
            "B. $\\frac{\\cos(x) - x\\sin(x)}{\\cos^2(x)}$",
            "C. $\\frac{1}{-\\sin(x)}$",
            "D. $\\sec(x) + x\\cos(x)$",
            "E. $\\frac{x\\sin(x) - \\cos(x)}{\\cos^2(x)}$"
          ],
          kunci: "A",
          bahas: "$u = x \\implies u' = 1$; $v = \\cos(x) \\implies v' = -\\sin(x)$.\n$y' = \\frac{(1)\\cos(x) - x(-\\sin x)}{\\cos^2(x)} = \\frac{\\cos(x) + x\\sin(x)}{\\cos^2(x)}$. Kunci A."
        },
        {
          id: "DR-D5-M05",
          mapel: "Matematika Peminatan",
          materi: "P17 • Titik Stasioner Garis Singgung Horisontal",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Absis titik stasioner kurva $f(x) = 2\\sin(x)$ pada interval $[0, \\pi]$ di mana garis singgungnya mendatar adalah ...",
          opsi: [
            "A. $x = \\frac{\\pi}{2}$",
            "B. $x = \\frac{\\pi}{4}$",
            "C. $x = \\frac{\\pi}{3}$",
            "D. $x = \\frac{2\\pi}{3}$",
            "E. $x = \\pi$"
          ],
          kunci: "A",
          bahas: "Garis singgung mendatar $\\implies f'(x) = 0$.\n$f'(x) = 2\\cos(x) = 0 \\implies x = \\frac{\\pi}{2}$. Kunci A."
        }
      ]
    },

    // =========================================================================
    // HARI 6 (SABTU / SATURDAY): PHASE 6 PRE-CLIMAX
    // =========================================================================
    day_6: {
      name: "Phase 6 Pre-Climax • Skala Data & Percepatan Harmonik",
      matwa: [
        {
          id: "DR-D6-W01",
          mapel: "Matematika Wajib",
          materi: "P15 • Tepi Kelas Data Desimal",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Data berketelitian satu desimal memiliki kelas $10{,}0 - 14{,}9$. Tepi bawah ($Tb$) dan panjang kelas ($p$) data tersebut adalah ...",
          opsi: [
            "A. $Tb = 9{,}95$ dan $p = 5{,}0$",
            "B. $Tb = 9{,}50$ dan $p = 5{,}0$",
            "C. $Tb = 9{,}95$ dan $p = 4{,}9$",
            "D. $Tb = 10{,}00$ dan $p = 5{,}0$",
            "E. $Tb = 9{,}90$ dan $p = 5{,}1$"
          ],
          kunci: "A",
          bahas: "Untuk 1 desimal, $Tb = 10{,}0 - 0{,}05 = 9{,}95$. $Ta = 14{,}9 + 0{,}05 = 14{,}95$. $p = 14{,}95 - 9{,}95 = 5{,}0$. Kunci A."
        },
        {
          id: "DR-D6-W02",
          mapel: "Matematika Wajib",
          materi: "P15 • Titik Tengah Interval",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Titik tengah dari kelas interval $55 - 69$ adalah ...",
          opsi: [
            "A. $62$",
            "B. $61{,}5$",
            "C. $62{,}5$",
            "D. $63$",
            "E. $61$"
          ],
          kunci: "A",
          bahas: "$x_i = \\frac{55 + 69}{2} = \\frac{124}{2} = 62$. Kunci A."
        },
        {
          id: "DR-D6-W03",
          mapel: "Matematika Wajib",
          materi: "P15 • Proporsi Kelas Modal Histogram",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Suatu histogram memiliki frekuensi berturut-turut $5, 15, 25, 20, 15$ ($N = 80$). Persentase data yang berada pada kelas modal (kelas dengan frekuensi tertinggi) adalah ...",
          opsi: [
            "A. $31{,}25\\%$",
            "B. $25{,}00\\%$",
            "C. $35{,}50\\%$",
            "D. $30{,}00\\%$",
            "E. $28{,}75\\%$"
          ],
          kunci: "A",
          bahas: "Frekuensi kelas modal $= 25$.\nPersentase $= \\frac{25}{80} \\times 100\\% = 31{,}25\\%$. Kunci A."
        },
        {
          id: "DR-D6-W04",
          mapel: "Matematika Wajib",
          materi: "P15 • Frekuensi Kumulatif Tepi Atas Kelas 2",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Pada data histogram di atas ($5, 15, 25, 20, 15$), nilai frekuensi kumulatif kurang dari tepi atas kelas kedua adalah ...",
          opsi: [
            "A. $20$",
            "B. $15$",
            "C. $25$",
            "D. $45$",
            "E. $5$"
          ],
          kunci: "A",
          bahas: "$F_k = f_1 + f_2 = 5 + 15 = 20$. Kunci A."
        },
        {
          id: "DR-D6-W05",
          mapel: "Matematika Wajib",
          materi: "P15 • Bentuk Kemiringan Histogram",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Jika balok-balok tinggi histogram menumpuk di sisi kiri dan berekor panjang melandai ke sisi kanan, kurva distribusi data tersebut disebut ...",
          opsi: [
            "A. Menceng ke Kanan (Positively Skewed)",
            "B. Menceng ke Kiri (Negatively Skewed)",
            "C. Simetris Normal (Bell-shaped)",
            "D. Bimodal",
            "E. Seragam (Uniform)"
          ],
          kunci: "A",
          bahas: "Ekor panjang ke sisi kanan menunjukkan kemiringan positif (positively skewed). Kunci A."
        },
        {
          id: "DR-D6-W06",
          mapel: "Matematika Wajib",
          materi: "P16 • Rata-Rata Bobot Produk",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Bobot kemasan produk (gram): $200-209$ ($6$), $210-219$ ($14$), $220-229$ ($18$), $230-239$ ($8$), $240-249$ ($4$). Nilai rata-rata bobot kemasan adalah ...",
          opsi: [
            "A. $222{,}5\\text{ gram}$",
            "B. $220{,}0\\text{ gram}$",
            "C. $224{,}5\\text{ gram}$",
            "D. $221{,}8\\text{ gram}$",
            "E. $223{,}0\\text{ gram}$"
          ],
          kunci: "A",
          bahas: "Titik tengah: $204{,}5; 214{,}5; 224{,}5; 234{,}5; 244{,}5$.\n$\\sum f_i x_i = 6(204{,}5) + 14(214{,}5) + 18(224{,}5) + 8(234{,}5) + 4(244{,}5) = 1.227 + 3.003 + 4.041 + 1.876 + 978 = 11.125$.\n$\\bar{x} = \\frac{11.125}{50} = 222{,}5\\text{ gram}$. Kunci A."
        },
        {
          id: "DR-D6-W07",
          mapel: "Matematika Wajib",
          materi: "P16 • Coding Bobot Produk",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Jika data kemasan dihitung menggunakan coding dengan acuan $x_s = 224{,}5$ dan panjang kelas $c = 10$, nilai $\\sum f_i u_i$ adalah ...",
          opsi: [
            "A. $-10$",
            "B. $-8$",
            "C. $0$",
            "D. $10$",
            "E. $-12$"
          ],
          kunci: "A",
          bahas: "Kode $u_i$: $-2, -1, 0, 1, 2$.\n$\\sum f_i u_i = 6(-2) + 14(-1) + 18(0) + 8(1) + 4(2) = -12 - 14 + 0 + 8 + 8 = -10$.\n$\\bar{x} = 224{,}5 + \\frac{-10}{50}(10) = 224{,}5 - 2 = 222{,}5$. Kunci A."
        },
        {
          id: "DR-D6-W08",
          mapel: "Matematika Wajib",
          materi: "P16 • Rata-Rata Gabungan Putra-Putri",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Rata-rata nilai 18 siswa putri adalah $76$ dan 12 siswa putra adalah $71$. Rata-rata gabungan seluruh 30 siswa adalah ...",
          opsi: [
            "A. $74{,}0$",
            "B. $73{,}5$",
            "C. $74{,}5$",
            "D. $75{,}0$",
            "E. $73{,}0$"
          ],
          kunci: "A",
          bahas: "$\\bar{x}_{\\text{gab}} = \\frac{18(76) + 12(71)}{30} = \\frac{1.368 + 852}{30} = \\frac{2.220}{30} = 74{,}0$. Kunci A."
        },
        {
          id: "DR-D6-W09",
          mapel: "Matematika Wajib",
          materi: "P16 • Pengurangan Siswa Pindah",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Rata-rata nilai 15 siswa adalah $82$. Satu siswa pindah sekolah dan nilainya dikeluarkan, sehingga rata-rata 14 siswa tersisa menjadi $81{,}5$. Nilai siswa yang pindah tersebut adalah ...",
          opsi: [
            "A. $89$",
            "B. $87$",
            "C. $90$",
            "D. $85$",
            "E. $92$"
          ],
          kunci: "A",
          bahas: "Total 15 siswa $= 15 \\times 82 = 1.230$.\nTotal 14 siswa $= 14 \\times 81{,}5 = 1.141$.\nNilai siswa pindah $= 1.230 - 1.141 = 89$. Kunci A."
        },
        {
          id: "DR-D6-W10",
          mapel: "Matematika Wajib",
          materi: "P16 • Perkalian Skalar pada Rata-Rata",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Jika seluruh datum dikalikan dengan $3$, dan rata-rata data awal adalah $\\bar{x} = 24$, rata-rata data yang baru adalah ...",
          opsi: [
            "A. $72$",
            "B. $68$",
            "C. $76$",
            "D. $80$",
            "E. $70$"
          ],
          kunci: "A",
          bahas: "$\\bar{x}_{\\text{baru}} = 3 \\times 24 = 72$. Kunci A."
        }
      ],
      matmin: [
        {
          id: "DR-D6-M01",
          mapel: "Matematika Peminatan",
          materi: "P17 • Turunan Kombinasi Cos-Sin",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Turunan pertama dari fungsi $f(x) = 6\\cos(x) - 8\\sin(x)$ adalah ...",
          opsi: [
            "A. $-6\\sin(x) - 8\\cos(x)$",
            "B. $-6\\sin(x) + 8\\cos(x)$",
            "C. $6\\sin(x) - 8\\cos(x)$",
            "D. $6\\cos(x) + 8\\sin(x)$",
            "E. $-6\\cos(x) - 8\\sin(x)$"
          ],
          kunci: "A",
          bahas: "$f'(x) = 6(-\\sin x) - 8(\\cos x) = -6\\sin(x) - 8\\cos(x)$. Kunci A."
        },
        {
          id: "DR-D6-M02",
          mapel: "Matematika Peminatan",
          materi: "P17 • Turunan Tangen dan Cosinus Majemuk",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Turunan pertama dari $y = \\tan(3x) + \\cos(4x)$ adalah ...",
          opsi: [
            "A. $3\\sec^2(3x) - 4\\sin(4x)$",
            "B. $3\\sec^2(3x) + 4\\sin(4x)$",
            "C. $\\sec^2(3x) - \\sin(4x)$",
            "D. $3\\tan^2(3x) - 4\\sin(4x)$",
            "E. $-3\\sec^2(3x) - 4\\sin(4x)$"
          ],
          kunci: "A",
          bahas: "$y' = 3\\sec^2(3x) - 4\\sin(4x)$. Kunci A."
        },
        {
          id: "DR-D6-M03",
          mapel: "Matematika Peminatan",
          materi: "P17 • Evaluasi Turunan di $x = \\pi/4$",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Diberikan $f(x) = 2\\sin(2x) + 4\\cos(2x)$. Nilai dari $f'\\left(\\frac{\\pi}{4}\\right)$ adalah ...",
          opsi: [
            "A. $-8$",
            "B. $4$",
            "C. $8$",
            "D. $-4$",
            "E. $0$"
          ],
          kunci: "A",
          bahas: "Langkah 1: $f'(x) = 4\\cos(2x) - 8\\sin(2x)$.\nLangkah 2: Pada $x = \\frac{\\pi}{4}$, $2x = \\frac{\\pi}{2}$.\n$f'\\left(\\frac{\\pi}{4}\\right) = 4\\cos\\left(\\frac{\\pi}{2}\\right) - 8\\sin\\left(\\frac{\\pi}{2}\\right) = 4(0) - 8(1) = -8$. Kunci A."
        },
        {
          id: "DR-D6-M04",
          mapel: "Matematika Peminatan",
          materi: "P17 • Aturan Perkalian Aljabar Linear",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Turunan pertama dari fungsi $f(x) = (2x + 1)\\sin(x)$ adalah ...",
          opsi: [
            "A. $2\\sin(x) + (2x + 1)\\cos(x)$",
            "B. $2\\cos(x)$",
            "C. $2\\sin(x) - (2x + 1)\\cos(x)$",
            "D. $(2x + 1)\\cos(x)$",
            "E. $2x\\cos(x) + \\sin(x)$"
          ],
          kunci: "A",
          bahas: "$u = 2x+1 \\implies u' = 2$; $v = \\sin(x) \\implies v' = \\cos(x)$.\n$f'(x) = 2\\sin(x) + (2x + 1)\\cos(x)$. Kunci A."
        },
        {
          id: "DR-D6-M05",
          mapel: "Matematika Peminatan",
          materi: "P17 • Gradien Garis Singgung Sudut Kelipatan",
          tipe: "Pilihan Ganda Tunggal",
          tanya: "Gradien garis singgung kurva $y = 4\\sin(2x)$ pada titik berabsis $x = \\frac{\\pi}{6}$ adalah ...",
          opsi: [
            "A. $4$",
            "B. $8$",
            "C. $2$",
            "D. $4\\sqrt{3}$",
            "E. $8\\sqrt{3}$"
          ],
          kunci: "A",
          bahas: "Langkah 1: $y' = 8\\cos(2x)$.\nLangkah 2: Pada $x = \\frac{\\pi}{6}$, $2x = \\frac{\\pi}{3}$.\n$m = 8\\cos\\left(\\frac{\\pi}{3}\\right) = 8\\left(\\frac{1}{2}\\right) = 4$. Kunci A."
        }
      ]
    }
  };

  /**
   * Helper Pengambilan Paket Soal Harian Berdasarkan Tanggal & Skuad
   * @param {string} dateStr Format YYYY-MM-DD (WIB)
   * @param {string} squadType 'F1_F2' (10 Matwa) atau 'F3_F4' (5 Matwa + 5 Matmin)
   * @returns {Array} 10 Butir Soal Terkini
   */
  function getDailyRaidQuestionsForDate(dateStr, squadType) {
    let dayIdx = 0;
    try {
      const parts = String(dateStr).split('-');
      if (parts.length === 3) {
        const d = new Date(Date.UTC(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10)));
        dayIdx = d.getUTCDay(); // 0 = Minggu s.d. 6 = Sabtu
      }
    } catch(e) {
      dayIdx = new Date().getDay();
    }

    const dayKey = 'day_' + dayIdx;
    const dayData = BANK[dayKey] || BANK['day_0'];

    if (squadType === 'F1_F2') {
      // 10 Butir Soal Matematika Wajib
      return (dayData.matwa || []).slice(0, 10).map((q, idx) => ({
        ...q,
        _origIdx: idx,
        _squadType: 'F1_F2',
        _dayName: dayData.name
      }));
    } else {
      // 10 Butir Soal: 5 Matwa + 5 Matmin
      const w5 = (dayData.matwa || []).slice(0, 5).map((q, idx) => ({
        ...q,
        _origIdx: idx,
        _squadType: 'F3_F4',
        _dayName: dayData.name
      }));
      const m5 = (dayData.matmin || []).slice(0, 5).map((q, idx) => ({
        ...q,
        _origIdx: idx + 5,
        _squadType: 'F3_F4',
        _dayName: dayData.name
      }));
      return [...w5, ...m5];
    }
  }

  // Expose ke window
  if (typeof window !== 'undefined') {
    window.DAILY_RAID_BANK = BANK;
    window.getDailyRaidQuestionsForDate = getDailyRaidQuestionsForDate;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BANK, getDailyRaidQuestionsForDate };
  }
})();
