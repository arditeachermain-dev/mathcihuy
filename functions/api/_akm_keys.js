// functions/api/_akm_keys.js
// Server-Side AKM Answer Keys, Partial-Credit Grading Engine & On-Demand Solutions
// Generated from AKM Pusmendik Bank — NEVER served statically to browsers.

export const AKM_MASTER = {
  "GLADI_01": [
    {
      "id": 1,
      "num": 1,
      "model": 4,
      "bahasLengkap": "<strong>Langkah Pembuktian Geometris:</strong><br>\n    1. Vektor normal bidang $AFH$ dan bidang $BDG$ keduanya kolinear dengan vektor diagonal ruang $CE$. Maka kedua bidang tersebut saling sejajar dan keduanya tegak lurus terhadap garis $CE$ (Alasan BENAR).<br>\n    2. Karena saling sejajar tegak lurus, jarak dari $E$ ke bidang $AFH = \\frac{1}{3}s\\sqrt{3}$, jarak antara kedua bidang $= \\frac{1}{3}s\\sqrt{3}$, dan jarak dari bidang $BDG$ ke $C = \\frac{1}{3}s\\sqrt{3}$. Ketiga segmen bernilai sama panjang (Pernyataan BENAR).<br>\n    3. Hubungan keduanya adalah sebab-akibat langsung.<br>\n    <strong>Kunci Jawaban: A.</strong>",
      "key": "A"
    },
    {
      "id": 2,
      "num": 2,
      "model": 1,
      "bahasLengkap": "<strong>Langkah Pembuktian Matematis:</strong><br>\n    1. <em>Kombinasi Huruf:</em> $P(5, 2) = 5 \\times 4 = 20$ cara.<br>\n    2. <em>Kombinasi Angka:</em> Posisi $D_1$ (5 opsi ganjil), $D_4$ (4 opsi genap), $D_2$ dan $D_3$ dari sisa 7 angka ($7 \\times 6 = 42$). Total $= 5 \\times 42 \\times 4 = 840$ cara.<br>\n    3. <em>Total Kode:</em> $20 \\times 840 = 16.800$ kode.<br>\n    4. <em>Peluang tebakan:</em> $\\frac{1}{16.800} \\approx 0,00595\\% < 0,01\\%$.<br>\n    <strong>Kunci Jawaban:</strong> B - B - B - S.",
      "rows": [
        {
          "id": "r1",
          "key": "B",
          "bahas": "Dua huruf tanpa pengulangan dari 5 huruf: P(5, 2) = 5 × 4 = 20 variasi. (BENAR)"
        },
        {
          "id": "r2",
          "key": "B",
          "bahas": "Posisi D₁ (ganjil: 1,3,5,7,9) = 5 cara. Posisi D₄ (genap: 2,4,6,8) = 4 cara. Dua posisi tengah D₂ dan D₃ dipilih dari sisa 7 angka: 7 × 6 = 42 cara. Total variasi angka = 5 × 4 × 42 = 840 variasi. (BENAR)"
        },
        {
          "id": "r3",
          "key": "B",
          "bahas": "Total variasi lengkap = (Variasi Huruf) × (Variasi Angka) = 20 × 840 = 16.800 kode. (BENAR)"
        },
        {
          "id": "r4",
          "key": "S",
          "bahas": "Peluang 1 tebakan benar = 1 / 16.800 ≈ 0,0000595 = 0,00595%. Nilai ini JAUH LEBIH KECIL dari 0,01% (0,0001). Maka pernyataan ini SALAH."
        }
      ]
    },
    {
      "id": 3,
      "num": 3,
      "model": 5,
      "bahasLengkap": "<strong>Langkah Pembuktian Kuartil & Outlier:</strong><br>\n    1. Data urut: $110, 115, 120, 120, 125, 130, 135, 180$.<br>\n    2. Median $Q_2 = \\frac{120 + 125}{2} = 122,5$ jam. (Pernyataan 1 BENAR).<br>\n    3. $Q_1 = \\frac{115 + 120}{2} = 117,5$ jam (bukan 120 jam, Pernyataan 4 SALAH).<br>\n    4. $Q_3 = \\frac{130 + 135}{2} = 132,5$ jam. $QR = 132,5 - 117,5 = 15$ jam. (Pernyataan 2 BENAR).<br>\n    5. Pagar Atas $= Q_3 + 1,5(QR) = 132,5 + 22,5 = 155$ jam. Nilai $180 > 155$ adalah outlier. (Pernyataan 3 BENAR).<br>\n    <strong>Pernyataan yang Dicentang:</strong> 1, 2, dan 3.",
      "statements": [
        {
          "id": "c1",
          "key": true
        },
        {
          "id": "c2",
          "key": true
        },
        {
          "id": "c3",
          "key": true
        },
        {
          "id": "c4",
          "key": false
        }
      ]
    },
    {
      "id": 4,
      "num": 4,
      "model": 2,
      "bahasLengkap": "<strong>Langkah Pembuktian Teorema Bayes:</strong><br>\n    1. $P(S \\cap +) = P(S) \\cdot P(+|S) = 0,02 \\times 0,95 = 0,019$ (1,9%).<br>\n    2. $P(S' \\cap +) = P(S') \\cdot P(+|S') = 0,98 \\times 0,10 = 0,098$ (9,8%).<br>\n    3. Peluang Total: $P(+) = 0,019 + 0,098 = 0,117$ (11,7%).<br>\n    4. Peluang Bersyarat Bayes: $P(S|+) = \\frac{0,019}{0,117} = \\frac{19}{117} \\approx 16,24\\%$.<br>\n    <strong>Pasangan Benar:</strong> A1 ↔ B1, A2 ↔ B2, A3 ↔ B3, A4 ↔ B4.",
      "correctPairs": {
        "A1": "B1",
        "A2": "B2",
        "A3": "B3",
        "A4": "B4"
      }
    },
    {
      "id": 5,
      "num": 5,
      "model": 3,
      "bahasLengkap": "<strong>Langkah Pembuktian Nilai:</strong><br>\n    1. <em>Mean:</em> $\\frac{200 + 220 + 240 + 260 + 280}{5} = \\frac{1200}{5} = 240$ Watt.<br>\n    2. <em>Median:</em> Data simetris ganjil, nilai tengah $= 240$ Watt.<br>\n    3. <em>Jangkauan (Range):</em> $280 - 200 = 80$ Watt.<br>\n    4. <em>Simpangan Rata-rata ($SR$):</em> Deviasi: $|-40|=40, |-20|=20, 0, 20, 40$. Total $= 120$. $SR = \\frac{120}{5} = 24$ Watt.<br>\n    <strong>Kunci Isian:</strong> (1) 240, (2) 240, (3) 80, (4) 24.",
      "blanks": [
        {
          "id": "b1",
          "correctValues": [
            "240",
            "240.0"
          ]
        },
        {
          "id": "b2",
          "correctValues": [
            "240",
            "240.0"
          ]
        },
        {
          "id": "b3",
          "correctValues": [
            "80",
            "80.0"
          ]
        },
        {
          "id": "b4",
          "correctValues": [
            "24",
            "24.0"
          ]
        }
      ]
    },
    {
      "id": 6,
      "num": 6,
      "model": 1,
      "bahasLengkap": "<strong>Langkah Pembuktian Matematis:</strong><br>\n    1. <em>Diagonal Ruang $AG$:</em> $\\sqrt{12^2 + 12^2 + 6^2} = \\sqrt{324} = 18\\text{ m}$.<br>\n    2. <em>Jarak $P$ ke $G$:</em> $P$ titik tengah $ABCD$, $PG = \\sqrt{6^2 + 6^2 + 6^2} = \\sqrt{108} = 6\\sqrt{3}\\text{ m}$.<br>\n    3. <em>Jarak $P$ ke garis $GH$:</em> $\\sqrt{6^2 + 6^2} = 6\\sqrt{2}\\text{ m} \\neq 6\\sqrt{5}\\text{ m}$.<br>\n    4. <em>Sinus sudut garis $AG$ dan lantai:</em> $\\sin \\theta = \\frac{CG}{AG} = \\frac{6}{18} = \\frac{1}{3}$.<br>\n    <strong>Kunci Jawaban:</strong> B - B - S - B.",
      "rows": [
        {
          "id": "r1",
          "key": "B",
          "bahas": "AG = √(12² + 12² + 6²) = √(144 + 144 + 36) = √324 = 18 meter. (BENAR)"
        },
        {
          "id": "r2",
          "key": "B",
          "bahas": "Koordinat P(6, 6, 0) dan G(12, 12, 6) → PG = √((12-6)² + (12-6)² + (6-0)²) = √(36 + 36 + 36) = √108 = 6√3 meter. (BENAR)"
        },
        {
          "id": "r3",
          "key": "S",
          "bahas": "Jarak titik P(6, 6, 0) ke garis GH (y=12, z=6) adalah √( (12-6)² + (6-0)² ) = √(36 + 36) = √72 = 6√2 meter, bukan 6√5 meter. (SALAH)"
        },
        {
          "id": "r4",
          "key": "B",
          "bahas": "Proyeksi AG ke lantai adalah AC = √(12² + 12²) = 12√2 meter. Tinggi CG = 6 meter. Sinus sudut = CG / AG = 6 / 18 = 1/3. (BENAR)"
        }
      ]
    },
    {
      "id": 7,
      "num": 7,
      "model": 4,
      "bahasLengkap": "<strong>Langkah Pembuktian Metodologi Statistika:</strong><br>\n    1. Prinsip dasar: <em>Correlation does not imply causation</em>. Penjualan es krim dan kecelakaan renang keduanya dipengaruhi variabel pengganggu (<em>confounding variable</em>) yaitu cuaca panas/musim liburan. Menimpulkan es krim menyebabkan kecelakaan adalah sesat pikir statistik. (Pernyataan SALAH).<br>\n    2. Koefisien Pearson hanya mengukur kovariasi linier, bukan arah kausalitas eksperimental. (Alasan BENAR).<br>\n    <strong>Kunci Jawaban: D.</strong>",
      "key": "D"
    },
    {
      "id": 8,
      "num": 8,
      "model": 3,
      "bahasLengkap": "<strong>Langkah Pembuktian Peluang:</strong><br>\n    1. $P(M_1 \\cap M_2) = \\frac{5}{8} \\times \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}$.<br>\n    2. $P(M_1 \\cap P_2) = \\frac{5}{8} \\times \\frac{3}{7} = \\frac{15}{56}$.<br>\n    3. Beda warna: $P(M_1 P_2) + P(P_1 M_2) = \\frac{15}{56} + (\\frac{3}{8} \\times \\frac{5}{7}) = \\frac{30}{56} = \\frac{15}{28}$.<br>\n    4. Frekuensi Harapan 2 Merah: $56 \\times \\frac{5}{14} = 20$ kali.<br>\n    <strong>Kunci Isian:</strong> (1) 5/14, (2) 15/56, (3) 15/28, (4) 20.",
      "blanks": [
        {
          "id": "b1",
          "correctValues": [
            "5/14",
            "20/56",
            "0.357",
            "0,357"
          ]
        },
        {
          "id": "b2",
          "correctValues": [
            "15/56",
            "0.268",
            "0,268"
          ]
        },
        {
          "id": "b3",
          "correctValues": [
            "15/28",
            "30/56",
            "0.536",
            "0,536"
          ]
        },
        {
          "id": "b4",
          "correctValues": [
            "20",
            "20 kali"
          ]
        }
      ]
    },
    {
      "id": 9,
      "num": 9,
      "model": 5,
      "bahasLengkap": "<strong>Langkah Pembuktian Tetrahedron:</strong><br>\n    1. Rusuk $s = 6\\sqrt{2}\\text{ cm}$. Luas 1 segitiga $= \\frac{1}{4} s^2 \\sqrt{3} = \\frac{1}{4} (72) \\sqrt{3} = 18\\sqrt{3}\\text{ cm}^2$. (Pernyataan 1 BENAR).<br>\n    2. Luas Permukaan total $= 4 \\times 18\\sqrt{3} = 72\\sqrt{3}\\text{ cm}^2$. (Pernyataan 2 BENAR).<br>\n    3. Tinggi tetrahedron $h = s\\sqrt{\\frac{2}{3}} = 6\\sqrt{2} \\times \\frac{\\sqrt{6}}{3} = 4\\sqrt{3}\\text{ cm}$. (Pernyataan 3 BENAR).<br>\n    4. Volume $= \\frac{s^3\\sqrt{2}}{12} = \\frac{(6\\sqrt{2})^3 \\sqrt{2}}{12} = \\frac{216 \\times 2\\sqrt{2} \\times \\sqrt{2}}{12} = 72\\text{ cm}^3$ (bukan $144\\text{ cm}^3$, Pernyataan 4 SALAH).<br>\n    <strong>Pernyataan yang Dicentang:</strong> 1, 2, dan 3.",
      "statements": [
        {
          "id": "c1",
          "key": true
        },
        {
          "id": "c2",
          "key": true
        },
        {
          "id": "c3",
          "key": true
        },
        {
          "id": "c4",
          "key": false
        }
      ]
    },
    {
      "id": 10,
      "num": 10,
      "model": 2,
      "bahasLengkap": "<strong>Langkah Pembuktian Metrik Limas:</strong><br>\n    1. $AC = 6\\sqrt{2}\\text{ m} \\implies AO = 3\\sqrt{2}\\text{ m}$. Rusuk tegak $TA = \\sqrt{4^2 + (3\\sqrt{2})^2} = \\sqrt{16+18} = \\sqrt{34}\\text{ m}$.<br>\n    2. Titik tengah $AB$ adalah $M \\implies OM = 3\\text{ m}$. Tinggi segitiga $TM = \\sqrt{TO^2 + OM^2} = \\sqrt{4^2 + 3^2} = 5\\text{ m}$.<br>\n    3. Tinggi limas $TO = 4\\text{ m}$.<br>\n    4. Luas 4 segitiga selimut $= 4 \\times (\\frac{1}{2} \\times 6 \\times 5) = 60\\text{ m}^2$.<br>\n    <strong>Pasangan Benar:</strong> A1 ↔ B1, A2 ↔ B2, A3 ↔ B3, A4 ↔ B4.",
      "correctPairs": {
        "A1": "B1",
        "A2": "B2",
        "A3": "B3",
        "A4": "B4"
      }
    },
    {
      "id": 11,
      "num": 11,
      "model": 5,
      "bahasLengkap": "<strong>Langkah Pembuktian Permutasi Siklis:</strong><br>\n    1. Bebas melingkar: $(5-1)! = 4! = 24$ cara. (Pernyataan 1 BENAR).<br>\n    2. Berdampingan: gabungkan Ketua & Sekretaris jadi 1 entitas $\\implies (4-1)! \\times 2! = 6 \\times 2 = 12$ cara. (Pernyataan 2 BENAR).<br>\n    3. Peluang berdampingan: $\\frac{12}{24} = \\frac{1}{2}$. (Pernyataan 3 BENAR).<br>\n    4. Jajar lurus berdampingan: $4! \\times 2! = 48$ cara, bukan 120 cara. (Pernyataan 4 SALAH).<br>\n    <strong>Pernyataan yang Dicentang:</strong> 1, 2, dan 3.",
      "statements": [
        {
          "id": "c1",
          "key": true
        },
        {
          "id": "c2",
          "key": true
        },
        {
          "id": "c3",
          "key": true
        },
        {
          "id": "c4",
          "key": false
        }
      ]
    },
    {
      "id": 12,
      "num": 12,
      "model": 2,
      "bahasLengkap": "<strong>Langkah Pembuktian Kombinasi:</strong><br>\n    1. Bebas: $C(11, 4) = \\frac{11 \\times 10 \\times 9 \\times 8}{4 \\times 3 \\times 2 \\times 1} = 330$ cara.<br>\n    2. 2 Putra & 2 Putri: $C(6, 2) \\times C(5, 2) = 15 \\times 10 = 150$ cara.<br>\n    3. Minimal 3 Putra: $(3\\text{ Putra, } 1\\text{ Putri}) + (4\\text{ Putra}) = [C(6,3) \\times C(5,1)] + [C(6,4) \\times C(5,0)] = (20 \\times 5) + (15 \\times 1) = 115$ cara.<br>\n    4. 4 Putri: $C(5, 4) = 5$ cara.<br>\n    <strong>Pasangan Benar:</strong> A1 ↔ B1, A2 ↔ B2, A3 ↔ B3, A4 ↔ B4.",
      "correctPairs": {
        "A1": "B1",
        "A2": "B2",
        "A3": "B3",
        "A4": "B4"
      }
    },
    {
      "id": 13,
      "num": 13,
      "model": 1,
      "bahasLengkap": "<strong>Langkah Pembuktian Statistika:</strong><br>\n    1. <em>Mean:</em> $\\bar{x} = \\frac{120 + 140 + 150 + 130 + 160}{5} = \\frac{700}{5} = 140\\text{ kWh}$.<br>\n    2. <em>Simpangan Rata-rata:</em> $SR = \\frac{20 + 0 + 10 + 10 + 20}{5} = \\frac{60}{5} = 12\\text{ kWh}$.<br>\n    3. <em>Median:</em> Urutan ${120, 130, 140, 150, 160}$, median $= 140\\text{ kWh} = \\bar{x}$.<br>\n    4. <em>Jangkauan:</em> $160 - 120 = 40\\text{ kWh} \\le 50\\text{ kWh}$.<br>\n    <strong>Kunci Jawaban:</strong> B - B - B - S.",
      "rows": [
        {
          "id": "r1",
          "key": "B",
          "bahas": "Mean = (120 + 140 + 150 + 130 + 160) / 5 = 700 / 5 = 140 kWh. (BENAR)"
        },
        {
          "id": "r2",
          "key": "B",
          "bahas": "Deviasi mutlak: |120-140|=20, |140-140|=0, |150-140|=10, |130-140|=10, |160-140|=20. Total = 60. SR = 60 / 5 = 12 kWh. (BENAR)"
        },
        {
          "id": "r3",
          "key": "B",
          "bahas": "Data urut: 120, 130, 140, 150, 160. Median = 140 kWh. Mean = 140 kWh. Keduanya bernilai sama. (BENAR)"
        },
        {
          "id": "r4",
          "key": "S",
          "bahas": "Range = Nilai Maksimum - Nilai Minimum = 160 - 120 = 40 kWh. Nilai ini TIDAK melebihi 50 kWh. (SALAH)"
        }
      ]
    },
    {
      "id": 14,
      "num": 14,
      "model": 3,
      "bahasLengkap": "<strong>Langkah Pembuktian Metrik Balok:</strong><br>\n    1. $AC = \\sqrt{8^2 + 6^2} = \\sqrt{100} = 10\\text{ cm}$.<br>\n    2. Jarak $B$ ke $AC = \\frac{AB \\times BC}{AC} = \\frac{8 \\times 6}{10} = 4,8\\text{ cm}$.<br>\n    3. Diagonal Ruang $AG = \\sqrt{8^2 + 6^2 + 12^2} = \\sqrt{100 + 144} = \\sqrt{244} = 2\\sqrt{61}\\text{ cm}$.<br>\n    4. Volume $= 8 \\times 6 \\times 12 = 576\\text{ cm}^3$.<br>\n    <strong>Kunci Isian:</strong> (1) 10, (2) 4.8, (3) 2√61, (4) 576.",
      "blanks": [
        {
          "id": "b1",
          "correctValues": [
            "10",
            "10 cm"
          ]
        },
        {
          "id": "b2",
          "correctValues": [
            "4.8",
            "4,8",
            "24/5"
          ]
        },
        {
          "id": "b3",
          "correctValues": [
            "2√61",
            "2V61",
            "√244",
            "V244",
            "15.62",
            "15,62"
          ]
        },
        {
          "id": "b4",
          "correctValues": [
            "576",
            "576 cm3"
          ]
        }
      ]
    },
    {
      "id": 15,
      "num": 15,
      "model": 4,
      "bahasLengkap": "<strong>Langkah Pembuktian Aksioma Peluang:</strong><br>\n    1. Jika saling lepas: $P(A \\cap B) = 0$.<br>\n    2. Jika saling bebas: $P(A \\cap B) = P(A) \\times P(B)$.<br>\n    3. Karena $P(A) > 0$ dan $P(B) > 0$, maka $P(A) \\times P(B) > 0$. Nilai positif ini mustahil bernilai $0$. Kedua syarat bertolak belakang secara matematis.<br>\n    Pernyataan Benar, Alasan Benar, dan Alasan menerangkan penyebab kontradiksi secara valid.<br>\n    <strong>Kunci Jawaban: A.</strong>",
      "key": "A"
    },
    {
      "id": 16,
      "num": 16,
      "model": 2,
      "bahasLengkap": "<strong>Langkah Pembuktian Statistika:</strong><br>\n    1. <em>Range:</em> $100 - 60 = 40$.<br>\n    2. Data berurutan 8 nilai. $Q_1 = \\frac{70 + 75}{2} = 72,5$, $Q_3 = \\frac{85 + 90}{2} = 87,5$.<br>\n    3. <em>Jangkauan Interkuartil ($QR$):</em> $Q_3 - Q_1 = 87,5 - 72,5 = 15$.<br>\n    4. <em>Simpangan Kuartil ($Q_d$):</em> $\\frac{1}{2} \\times 15 = 7,5$.<br>\n    <strong>Pasangan Benar:</strong> A1 ↔ B1, A2 ↔ B2, A3 ↔ B3, A4 ↔ B4.",
      "correctPairs": {
        "A1": "B1",
        "A2": "B2",
        "A3": "B3",
        "A4": "B4"
      }
    },
    {
      "id": 17,
      "num": 17,
      "model": 5,
      "bahasLengkap": "<strong>Langkah Pembuktian Ruang Sampel Dua Dadu:</strong><br>\n    1. Jumlah 7: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1) \\implies 6$ cara. Peluang $= \\frac{6}{36} = \\frac{1}{6}$. (Pernyataan 1 BENAR).<br>\n    2. Jumlah $\\ge 10$: $(4,6), (5,5), (5,6), (6,4), (6,5), (6,6) \\implies 6$ cara. Peluang $= \\frac{6}{36} = \\frac{1}{6}$. (Pernyataan 2 BENAR).<br>\n    3. Angka kembar: $(1,1), \\dots, (6,6) \\implies 6$ cara. Peluang $= \\frac{6}{36} = \\frac{1}{6}$. (Pernyataan 3 BENAR).<br>\n    4. Jumlah prima: 2 (1), 3 (2), 5 (4), 7 (6), 11 (2) $\\implies 1+2+4+6+2 = 15$ cara. Peluang $= \\frac{15}{36} = \\frac{5}{12} \\neq \\frac{1}{2}$. (Pernyataan 4 SALAH).<br>\n    <strong>Pernyataan yang Dicentang:</strong> 1, 2, dan 3.",
      "statements": [
        {
          "id": "c1",
          "key": true
        },
        {
          "id": "c2",
          "key": true
        },
        {
          "id": "c3",
          "key": true
        },
        {
          "id": "c4",
          "key": false
        }
      ]
    },
    {
      "id": 18,
      "num": 18,
      "model": 4,
      "bahasLengkap": "<strong>Langkah Pembuktian Geometris:</strong><br>\n    1. Dua garis bersilangan jika dan hanya jika keduanya tidak berpotongan dan tidak sejajar (tidak terletak pada satu bidang bersama). Rusuk $AB$ sejajar $CD$, dan $CG \\perp CD$, sehingga $AB \\perp CG$. (Pernyataan BENAR).<br>\n    2. Alasan menyatakan definisi dan kondisi ketegaklurusan dua garis bersilangan secara tepat. (Alasan BENAR).<br>\n    3. Keduanya berhubungan sebab-akibat.<br>\n    <strong>Kunci Jawaban: A.</strong>",
      "key": "A"
    },
    {
      "id": 19,
      "num": 19,
      "model": 1,
      "bahasLengkap": "<strong>Langkah Pembuktian Matematis:</strong><br>\n    1. <em>Via Doha:</em> $4 \\times 3 = 12$ rute.<br>\n    2. <em>Via Dubai:</em> $3 \\times 4 = 12$ rute.<br>\n    3. <em>Via Muscat:</em> $2 \\times 2 = 4$ rute.<br>\n    4. <em>Total Variasi:</em> $12 + 12 + 4 = 28$ rute.<br>\n    5. <em>Peluang via Dubai:</em> $\\frac{12}{28} = \\frac{3}{7}$.<br>\n    <strong>Kunci Jawaban:</strong> B - B - B - B.",
      "rows": [
        {
          "id": "r1",
          "key": "B",
          "bahas": "Rute via Doha = 4 × 3 = 12 rute. (BENAR)"
        },
        {
          "id": "r2",
          "key": "B",
          "bahas": "Rute via Muscat = 2 × 2 = 4 rute. (BENAR)"
        },
        {
          "id": "r3",
          "key": "B",
          "bahas": "Total rute = (4 × 3) + (3 × 4) + (2 × 2) = 12 + 12 + 4 = 28 rute. (BENAR)"
        },
        {
          "id": "r4",
          "key": "B",
          "bahas": "Rute via Dubai = 12 rute. Peluang = 12 / 28 = 3/7. (BENAR)"
        }
      ]
    },
    {
      "id": 20,
      "num": 20,
      "model": 3,
      "bahasLengkap": "<strong>Langkah Pembuktian Regresi Linier:</strong><br>\n    1. $\\bar{x} = \\frac{1+2+3+4+5}{5} = 3$, $\\bar{y} = \\frac{60+70+75+85+90}{5} = 76$.<br>\n    2. $\\sum x^2 = 55$, $\\sum xy = 60 + 140 + 225 + 340 + 450 = 1215$.<br>\n    $b = \\frac{5(1215) - 15(380)}{5(55) - 15^2} = \\frac{6075 - 5700}{275 - 225} = \\frac{375}{50} = 7,5$.<br>\n    3. $a = \\bar{y} - b\\bar{x} = 76 - 7,5(3) = 53,5$.<br>\n    4. $\\hat{y}(4) = 53,5 + 7,5(4) = 83,5$.<br>\n    <strong>Kunci Isian:</strong> (1) 3, (2) 7.5, (3) 53.5, (4) 83.5.",
      "blanks": [
        {
          "id": "b1",
          "correctValues": [
            "3",
            "3.0"
          ]
        },
        {
          "id": "b2",
          "correctValues": [
            "7.5",
            "7,5",
            "15/2"
          ]
        },
        {
          "id": "b3",
          "correctValues": [
            "53.5",
            "53,5",
            "107/2"
          ]
        },
        {
          "id": "b4",
          "correctValues": [
            "83.5",
            "83,5"
          ]
        }
      ]
    },
    {
      "id": 21,
      "num": 21,
      "model": 3,
      "bahasLengkap": "<strong>Langkah Pembuktian Pencacahan:</strong><br>\n    1. Total kode: $P(5, 3) = 5 \\times 4 \\times 3 = 60$ kode.<br>\n    2. Kode ganjil: Digit akhir ${3, 5, 7}$ (3 opsi). Dua digit pertama dari 4 angka sisa: $4 \\times 3 = 12$. Total $= 12 \\times 3 = 36$ kode.<br>\n    3. Kode genap: Digit akhir ${2, 8}$ (2 opsi). Total $= 12 \\times 2 = 24$ kode.<br>\n    4. Peluang genap: $\\frac{24}{60} = \\frac{2}{5} = 0,4$.<br>\n    <strong>Kunci Isian:</strong> (1) 60, (2) 36, (3) 24, (4) 0.4.",
      "blanks": [
        {
          "id": "b1",
          "correctValues": [
            "60"
          ]
        },
        {
          "id": "b2",
          "correctValues": [
            "36"
          ]
        },
        {
          "id": "b3",
          "correctValues": [
            "24"
          ]
        },
        {
          "id": "b4",
          "correctValues": [
            "0.4",
            "0,4",
            "2/5",
            "24/60"
          ]
        }
      ]
    },
    {
      "id": 22,
      "num": 22,
      "model": 4,
      "bahasLengkap": "<strong>Langkah Pembuktian Sifat Penyebaran:</strong><br>\n    1. Sifat transformasi linier ukuran penyebaran (varians, simpangan baku): Jika $y = ax + b$, maka $S_y = |a| \\cdot S_x$. Di sini $S_y = 2 S_x$. Penambahan konstanta $b=5$ sama sekali tidak berpengaruh pada simpangan baku. (Pernyataan SALAH).<br>\n    2. Penambahan konstanta memang hanya menggeser rata-rata tanpa mengubah dispersi jarak antar data. (Alasan BENAR).<br>\n    <strong>Kunci Jawaban: D.</strong>",
      "key": "D"
    },
    {
      "id": 23,
      "num": 23,
      "model": 2,
      "bahasLengkap": "<strong>Langkah Pembuktian Rumus Jarak Kubus:</strong><br>\n    1. Jarak $A$ ke $BD = \\frac{1}{2} s\\sqrt{2} = 3\\sqrt{2}\\text{ cm}$.<br>\n    2. Jarak $C$ ke diagonal ruang $BH = \\frac{s\\sqrt{6}}{3} = \\frac{6\\sqrt{6}}{3} = 2\\sqrt{6}\\text{ cm}$.<br>\n    3. Jarak $E$ ke bidang $BDG = \\frac{2}{3} s\\sqrt{3} = 4\\sqrt{3}\\text{ cm}$.<br>\n    4. Jarak antara bidang $AFH$ dan $BDG = \\frac{1}{3} s\\sqrt{3} = 2\\sqrt{3}\\text{ cm}$.<br>\n    <strong>Pasangan Benar:</strong> A1 ↔ B1, A2 ↔ B2, A3 ↔ B3, A4 ↔ B4.",
      "correctPairs": {
        "A1": "B1",
        "A2": "B2",
        "A3": "B3",
        "A4": "B4"
      }
    },
    {
      "id": 24,
      "num": 24,
      "model": 5,
      "bahasLengkap": "<strong>Langkah Pembuktian Irisan Bidang:</strong><br>\n    1. Sisi segitiga $ACH$: $AC = 6\\sqrt{2}, AH = 6\\sqrt{2}, CH = 6\\sqrt{2}$. Semuanya diagonal bidang, sehingga segitiga sama sisi. (Pernyataan 1 BENAR).<br>\n    2. Luas $\\Delta ACH = \\frac{1}{4} (6\\sqrt{2})^2 \\sqrt{3} = \\frac{1}{4} (72) \\sqrt{3} = 18\\sqrt{3}\\text{ cm}^2$. (Pernyataan 2 BENAR).<br>\n    3. Bidang diagonal $BDHF$: persegi panjang berukuran $6\\sqrt{2} \\times 6 = 36\\sqrt{2}\\text{ cm}^2$. (Pernyataan 3 BENAR).<br>\n    4. Bidang $BDE$ melalui diagonal bidang $BD = 6\\sqrt{2}, BE = 6\\sqrt{2}, DE = 6\\sqrt{2}$ berbentuk segitiga sama sisi, bukan trapesium. (Pernyataan 4 SALAH).<br>\n    <strong>Pernyataan yang Dicentang:</strong> 1, 2, dan 3.",
      "statements": [
        {
          "id": "c1",
          "key": true
        },
        {
          "id": "c2",
          "key": true
        },
        {
          "id": "c3",
          "key": true
        },
        {
          "id": "c4",
          "key": false
        }
      ]
    },
    {
      "id": 25,
      "num": 25,
      "model": 1,
      "bahasLengkap": "<strong>Langkah Pembuktian Matematis:</strong><br>\n    1. <em>Diagonal Alas $AC$:</em> $8\\sqrt{2} \\times \\sqrt{2} = 16\\text{ m} \\implies AO = 8\\text{ m}$.<br>\n    2. <em>Tinggi Limas $TO$:</em> $\\sqrt{10^2 - 8^2} = 6\\text{ m}$.<br>\n    3. <em>Garis Tinggi Sisi Tegak $TM$:</em> $\\sqrt{6^2 + (4\\sqrt{2})^2} = \\sqrt{68} = 2\\sqrt{17}\\text{ m}$.<br>\n    4. <em>Volume:</em> $\\frac{1}{3} \\times 128 \\times 6 = 256\\text{ m}^3$.<br>\n    5. <em>Jarak $A$ ke $TC$:</em> $\\frac{16 \\times 6}{10} = 9,6\\text{ m} \\neq 10\\text{ m}$.<br>\n    <strong>Kunci Jawaban:</strong> B - B - B - S.",
      "rows": [
        {
          "id": "r1",
          "key": "B",
          "bahas": "Diagonal AC = (8√2) × √2 = 16 m. AO = 8 m. Tinggi TO = √(10² - 8²) = √(100 - 64) = √36 = 6 meter. (BENAR)"
        },
        {
          "id": "r2",
          "key": "B",
          "bahas": "Titik tengah AB adalah M. Jarak OM = (8√2) / 2 = 4√2 m. TM = √(TO² + OM²) = √(6² + (4√2)²) = √(36 + 32) = √68 = 2√17 meter. (BENAR)"
        },
        {
          "id": "r3",
          "key": "B",
          "bahas": "Luas alas = (8√2)² = 128 m². Volume = 1/3 × Luas Alas × Tinggi = 1/3 × 128 × 6 = 256 m³. (BENAR)"
        },
        {
          "id": "r4",
          "key": "S",
          "bahas": "Pada segitiga TAC, alas AC = 16 m, tinggi TO = 6 m. Jarak A ke TC = (AC × TO) / TC = (16 × 6) / 10 = 9,6 meter, bukan 10 meter. (SALAH)"
        }
      ]
    }
  ],
  "GLADI_02": [
    {
      "id": 1,
      "num": 1,
      "model": 1,
      "bahasLengkap": "<strong>Langkah Pembuktian Statistika:</strong><br>\n    1. <em>Mean:</em> $\\frac{75 + 80 + 85 + 90}{4} = \\frac{330}{4} = 82,5$ poin.<br>\n    2. <em>Simpangan Rata-rata ($SR$):</em> $\\frac{7,5 + 2,5 + 2,5 + 7,5}{4} = \\frac{20}{4} = 5,0$ poin.<br>\n    3. <em>Median:</em> $\\frac{80 + 85}{2} = 82,5$ poin $= \\text{Mean}$.<br>\n    4. <em>Range:</em> $90 - 75 = 15 \\le 20$ poin.<br>\n    <strong>Kunci Jawaban:</strong> B - B - B - S.",
      "rows": [
        {
          "id": "r1",
          "key": "B",
          "bahas": "Mean = (75 + 80 + 85 + 90) / 4 = 330 / 4 = 82,5 poin. (BENAR)"
        },
        {
          "id": "r2",
          "key": "B",
          "bahas": "Deviasi: |75-82,5|=7,5; |80-82,5|=2,5; |85-82,5|=2,5; |90-82,5|=7,5. Total = 20. SR = 20 / 4 = 5,0 poin. (BENAR)"
        },
        {
          "id": "r3",
          "key": "B",
          "bahas": "Median = (80 + 85) / 2 = 82,5 poin. Nilai ini sama dengan mean (82,5). (BENAR)"
        },
        {
          "id": "r4",
          "key": "S",
          "bahas": "Range = 90 - 75 = 15 poin. Nilai ini tidak melebihi 20 poin. (SALAH)"
        }
      ]
    },
    {
      "id": 2,
      "num": 2,
      "model": 4,
      "bahasLengkap": "<strong>Langkah Pembuktian Sifat Statistika:</strong><br>\n    1. Rata-rata sangat peka terhadap pencilan karena seluruh nilai dijumlahkan. Satu nilai ekstrem besar menarik nilai mean menjauhi mayoritas data. Oleh karena itu, median lebih disukai sebagai ukuran pusat (Pernyataan BENAR).<br>\n    2. Definisi matematis median hanya melihat posisi tengah, sehingga nilai ekstrem tidak mengubah nilainya (Alasan BENAR).<br>\n    3. Alasan menerangkan argumen kausalitas secara tepat.<br>\n    <strong>Kunci Jawaban: A.</strong>",
      "key": "A"
    },
    {
      "id": 3,
      "num": 3,
      "model": 2,
      "bahasLengkap": "<strong>Langkah Pembuktian Kaidah Pencacahan:</strong><br>\n    1. 1 Mat & 1 Fis: $5 \\times 4 = 20$ cara.<br>\n    2. 1 Mat, 1 Fis, 1 Info: $5 \\times 4 \\times 3 = 60$ cara.<br>\n    3. 2 Siswa Bebas: $C(12, 2) = \\frac{12 \\times 11}{2} = 66$ cara.<br>\n    4. 2 Siswa Matematika: $C(5, 2) = 10$ cara.<br>\n    <strong>Pasangan Benar:</strong> A1 ↔ B1, A2 ↔ B2, A3 ↔ B3, A4 ↔ B4.",
      "correctPairs": {
        "A1": "B1",
        "A2": "B2",
        "A3": "B3",
        "A4": "B4"
      }
    },
    {
      "id": 4,
      "num": 4,
      "model": 5,
      "bahasLengkap": "<strong>Langkah Pembuktian Distribusi Dadu:</strong><br>\n    1. Jumlah 6: $(1,5),(2,4),(3,3),(4,2),(5,1) \\implies 5$ cara. Peluang $= \\frac{5}{36}$. (Pernyataan 1 BENAR).<br>\n    2. Jumlah 8: $(2,6),(3,5),(4,4),(5,3),(6,2) \\implies 5$ cara. Peluang $= \\frac{5}{36}$. (Pernyataan 2 BENAR).<br>\n    3. Jumlah 7: 6 cara (modus distribusi dadu), peluang $= \\frac{6}{36} = \\frac{1}{6}$. (Pernyataan 3 BENAR).<br>\n    4. Jumlah genap: 18 cara dari 36. Peluang $= \\frac{18}{36} = \\frac{1}{2} \\neq \\frac{3}{4}$. (Pernyataan 4 SALAH).<br>\n    <strong>Pernyataan yang Dicentang:</strong> 1, 2, dan 3.",
      "statements": [
        {
          "id": "c1",
          "key": true
        },
        {
          "id": "c2",
          "key": true
        },
        {
          "id": "c3",
          "key": true
        },
        {
          "id": "c4",
          "key": false
        }
      ]
    },
    {
      "id": 5,
      "num": 5,
      "model": 3,
      "bahasLengkap": "<strong>Langkah Pembuktian Statistika:</strong><br>\n    1. Mean $= \\frac{10+12+14+16}{4} = \\frac{52}{4} = 13$.<br>\n    2. Range $= 16 - 10 = 6$.<br>\n    3. Simpangan rata-rata: $\\frac{|10-13| + |12-13| + |14-13| + |16-13|}{4} = \\frac{3+1+1+3}{4} = 2$.<br>\n    4. Varians $\\sigma^2 = \\frac{3^2 + 1^2 + 1^2 + 3^2}{4} = \\frac{9+1+1+9}{4} = 5$.<br>\n    <strong>Kunci Isian:</strong> (1) 13, (2) 6, (3) 2, (4) 5.",
      "blanks": [
        {
          "id": "b1",
          "correctValues": [
            "13",
            "13.0"
          ]
        },
        {
          "id": "b2",
          "correctValues": [
            "6",
            "6.0"
          ]
        },
        {
          "id": "b3",
          "correctValues": [
            "2",
            "2.0"
          ]
        },
        {
          "id": "b4",
          "correctValues": [
            "5",
            "5.0"
          ]
        }
      ]
    },
    {
      "id": 6,
      "num": 6,
      "model": 4,
      "bahasLengkap": "<strong>Langkah Pembuktian Geometris:</strong><br>\n    1. Pernyataan bahwa \"garis yang tidak berpotongan pasti sejajar\" hanya berlaku pada bidang datar 2 dimensi. Pada ruang 3 dimensi, dua garis yang tidak berpotongan bisa bersilangan jika tidak sebidang. (Pernyataan SALAH).<br>\n    2. Alasan menyatakan definisi yang sah mengenai garis bersilangan di ruang 3D. (Alasan BENAR).<br>\n    <strong>Kunci Jawaban: D.</strong>",
      "key": "D"
    },
    {
      "id": 7,
      "num": 7,
      "model": 2,
      "bahasLengkap": "<strong>Langkah Pembuktian Metrik Tetrahedron:</strong><br>\n    1. Tinggi segitiga alas sama sisi: $\\frac{1}{2} s\\sqrt{3} = 3\\sqrt{3}\\text{ m}$.<br>\n    2. Tinggi puncak tetrahedron: $s\\sqrt{\\frac{2}{3}} = 6 \\times \\frac{\\sqrt{6}}{3} = 2\\sqrt{6}\\text{ m}$.<br>\n    3. Luas 1 bidang dinding: $\\frac{1}{4} (6^2)\\sqrt{3} = 9\\sqrt{3}\\text{ m}^2$.<br>\n    4. Luas 3 bidang dinding: $3 \\times 9\\sqrt{3} = 27\\sqrt{3}\\text{ m}^2$.<br>\n    <strong>Pasangan Benar:</strong> A1 ↔ B1, A2 ↔ B2, A3 ↔ B3, A4 ↔ B4.",
      "correctPairs": {
        "A1": "B1",
        "A2": "B2",
        "A3": "B3",
        "A4": "B4"
      }
    },
    {
      "id": 8,
      "num": 8,
      "model": 1,
      "bahasLengkap": "<strong>Langkah Pembuktian Geometris:</strong><br>\n    1. Diagonal ruang $HB = 8\\sqrt{3}\\text{ m}$.<br>\n    2. Jarak $H$ ke pusat lantai $P$: $\\sqrt{8^2 + (4\\sqrt{2})^2} = \\sqrt{96} = 4\\sqrt{6}\\text{ m}$.<br>\n    3. Jarak $H$ ke garis $AB$: $HA = 8\\sqrt{2}\\text{ m}$.<br>\n    4. Jarak $H$ ke garis $AC$: $HP = 4\\sqrt{6}\\text{ m} \\neq 8\\text{ m}$.<br>\n    <strong>Kunci Jawaban:</strong> B - B - B - S.",
      "rows": [
        {
          "id": "r1",
          "key": "B",
          "bahas": "Diagonal ruang kubus dengan s=8 m adalah s√3 = 8√3 meter. (BENAR)"
        },
        {
          "id": "r2",
          "key": "B",
          "bahas": "Proyeksi H ke lantai adalah D. DP = 1/2 s√2 = 4√2 m. HP = √(HD² + DP²) = √(8² + (4√2)²) = √(64 + 32) = √96 = 4√6 meter. (BENAR)"
        },
        {
          "id": "r3",
          "key": "B",
          "bahas": "Garis AB tegak lurus bidang ADHE di titik A. Jarak H ke AB adalah panjang ruas garis HA = s√2 = 8√2 meter. (BENAR)"
        },
        {
          "id": "r4",
          "key": "S",
          "bahas": "Jarak H ke garis AC adalah ruas garis HP = 4√6 meter (sekitar 9,8 m), bukan 8 meter. (SALAH)"
        }
      ]
    },
    {
      "id": 9,
      "num": 9,
      "model": 3,
      "bahasLengkap": "<strong>Langkah Pembuktian Permutasi Unsur Sama:</strong><br>\n    1. Total huruf: 10 huruf (K, O, L, A, B, O, R, A, S, I).<br>\n    2. Huruf berulang: O muncul 2 kali, A muncul 2 kali (ada 2 jenis huruf).<br>\n    3. Anagram total: $\\frac{10!}{2! \\times 2!} = \\frac{3.628.800}{4} = 907.200$ susunan.<br>\n    4. Diawali K diakhiri I: sisa 8 huruf di tengah dengan O:2 dan A:2 $\\implies \\frac{8!}{2! \\times 2!} = \\frac{40.320}{4} = 10.080$ susunan.<br>\n    <strong>Kunci Isian:</strong> (1) 10, (2) 2, (3) 907200, (4) 10080.",
      "blanks": [
        {
          "id": "b1",
          "correctValues": [
            "10"
          ]
        },
        {
          "id": "b2",
          "correctValues": [
            "2"
          ]
        },
        {
          "id": "b3",
          "correctValues": [
            "907200",
            "907.200"
          ]
        },
        {
          "id": "b4",
          "correctValues": [
            "10080",
            "10.080"
          ]
        }
      ]
    },
    {
      "id": 10,
      "num": 10,
      "model": 5,
      "bahasLengkap": "<strong>Langkah Pembuktian Metrik Balok:</strong><br>\n    1. Diagonal alas $AC = \\sqrt{12^2 + 4^2} = \\sqrt{144 + 16} = \\sqrt{160} = 4\\sqrt{10}\\text{ cm}$. (Pernyataan 1 BENAR).<br>\n    2. Diagonal ruang $AG = \\sqrt{12^2 + 4^2 + 3^2} = \\sqrt{144 + 16 + 9} = \\sqrt{169} = 13\\text{ cm}$. (Pernyataan 2 BENAR).<br>\n    3. Luas Permukaan $= 2(12 \\times 4 + 12 \\times 3 + 4 \\times 3) = 2(48 + 36 + 12) = 192\\text{ cm}^2$. (Pernyataan 3 BENAR).<br>\n    4. Volume $= 12 \\times 4 \\times 3 = 144\\text{ cm}^3 \\neq 288\\text{ cm}^3$. (Pernyataan 4 SALAH).<br>\n    <strong>Pernyataan yang Dicentang:</strong> 1, 2, dan 3.",
      "statements": [
        {
          "id": "c1",
          "key": true
        },
        {
          "id": "c2",
          "key": true
        },
        {
          "id": "c3",
          "key": true
        },
        {
          "id": "c4",
          "key": false
        }
      ]
    },
    {
      "id": 11,
      "num": 11,
      "model": 2,
      "bahasLengkap": "<strong>Langkah Pembuktian Kuartil:</strong><br>\n    1. Range $= 100 - 50 = 50$.<br>\n    2. Data 10 observasi terurut: $Q_1 = X_3 = 65$.<br>\n    3. Median $Q_2 = \\frac{75 + 80}{2} = 77,5$.<br>\n    4. $Q_3 = X_8 = 90$.<br>\n    <strong>Pasangan Benar:</strong> A1 ↔ B1, A2 ↔ B2, A3 ↔ B3, A4 ↔ B4.",
      "correctPairs": {
        "A1": "B1",
        "A2": "B2",
        "A3": "B3",
        "A4": "B4"
      }
    },
    {
      "id": 12,
      "num": 12,
      "model": 5,
      "bahasLengkap": "<strong>Langkah Pembuktian Kombinasi Menu:</strong><br>\n    1. 1 Lauk & 1 Sayur: $4 \\times 3 = 12$ paket. (Pernyataan 1 BENAR).<br>\n    2. 2 Lauk dari 4: $C(4, 2) = 6$ cara. (Pernyataan 2 BENAR).<br>\n    3. 2 Lauk & 1 Sayur: $6 \\times 3 = 18$ paket. (Pernyataan 3 BENAR).<br>\n    4. 3 Makanan dari 7: $C(7, 3) = \\frac{7 \\times 6 \\times 5}{6} = 35$ cara, bukan 70 cara. (Pernyataan 4 SALAH).<br>\n    <strong>Pernyataan yang Dicentang:</strong> 1, 2, dan 3.",
      "statements": [
        {
          "id": "c1",
          "key": true
        },
        {
          "id": "c2",
          "key": true
        },
        {
          "id": "c3",
          "key": true
        },
        {
          "id": "c4",
          "key": false
        }
      ]
    },
    {
      "id": 13,
      "num": 13,
      "model": 4,
      "bahasLengkap": "<strong>Langkah Pembuktian Probabilitas:</strong><br>\n    1. $P(H') = 1 - 0,35 = 0,65$. (Pernyataan BENAR).<br>\n    2. $A$ dan $A'$ saling lepas dan gabungannya adalah ruang sampel $S$, sehingga $P(A \\cup A') = P(A) + P(A') = P(S) = 1$. (Alasan BENAR).<br>\n    3. Alasan merupakan landasan teoritis pembuktian pernyataan.<br>\n    <strong>Kunci Jawaban: A.</strong>",
      "key": "A"
    },
    {
      "id": 14,
      "num": 14,
      "model": 1,
      "bahasLengkap": "<strong>Langkah Pembuktian Deret Aritmetika:</strong><br>\n    1. $U_6 = 100 + 5(20) = 200$ unit.<br>\n    2. $S_6 = \\frac{6}{2}(100 + 200) = 900$ unit.<br>\n    3. Rata-rata $= \\frac{900}{6} = 150$ unit.<br>\n    4. Kenaikan $= 100\\% \\le 150\\%$.<br>\n    <strong>Kunci Jawaban:</strong> B - B - B - S.",
      "rows": [
        {
          "id": "r1",
          "key": "B",
          "bahas": "U6 = a + 5b = 100 + 5(20) = 200 unit. (BENAR)"
        },
        {
          "id": "r2",
          "key": "B",
          "bahas": "S6 = 6/2 × (100 + 200) = 3 × 300 = 900 unit. (BENAR)"
        },
        {
          "id": "r3",
          "key": "B",
          "bahas": "Rata-rata = S6 / 6 = 900 / 6 = 150 unit per bulan. (BENAR)"
        },
        {
          "id": "r4",
          "key": "S",
          "bahas": "Persentase kenaikan = (200 - 100) / 100 × 100% = 100%. Nilai ini tidak melebihi 150%. (SALAH)"
        }
      ]
    },
    {
      "id": 15,
      "num": 15,
      "model": 3,
      "bahasLengkap": "<strong>Langkah Pembuktian Geometri Pengukuran:</strong><br>\n    1. Luas trapesium: $\\frac{4 + 2}{2} \\times 1,5 = 3 \\times 1,5 = 4,5\\text{ m}^2$.<br>\n    2. Volume total: $4,5 \\times 10 = 45\\text{ m}^3$.<br>\n    3. Separuh kapasitas: $\\frac{45}{2} = 22,5\\text{ m}^3$.<br>\n    4. Waktu pengisian: $\\frac{45}{1,5} = 30$ menit.<br>\n    <strong>Kunci Isian:</strong> (1) 4.5, (2) 45, (3) 22.5, (4) 30.",
      "blanks": [
        {
          "id": "b1",
          "correctValues": [
            "4.5",
            "4,5"
          ]
        },
        {
          "id": "b2",
          "correctValues": [
            "45",
            "45.0"
          ]
        },
        {
          "id": "b3",
          "correctValues": [
            "22.5",
            "22,5"
          ]
        },
        {
          "id": "b4",
          "correctValues": [
            "30",
            "30 menit"
          ]
        }
      ]
    },
    {
      "id": 16,
      "num": 16,
      "model": 5,
      "bahasLengkap": "<strong>Langkah Pembuktian Tabel Distribusi:</strong><br>\n    1. Panjang kelas $p = 60 - 51 + 1 = 10$. (Pernyataan 1 BENAR).<br>\n    2. Frekuensi tertinggi $= 15$ pada interval $71 - 80$. (Pernyataan 2 BENAR).<br>\n    3. Tepi bawah modus $Tb = 71 - 0,5 = 70,5$. (Pernyataan 3 BENAR).<br>\n    4. Siswa di atas 80: kelas $81-90$ (10) dan $91-100$ (3) $\\implies 10 + 3 = 13$ siswa, bukan 25 siswa. (Pernyataan 4 SALAH).<br>\n    <strong>Pernyataan yang Dicentang:</strong> 1, 2, dan 3.",
      "statements": [
        {
          "id": "c1",
          "key": true
        },
        {
          "id": "c2",
          "key": true
        },
        {
          "id": "c3",
          "key": true
        },
        {
          "id": "c4",
          "key": false
        }
      ]
    },
    {
      "id": 17,
      "num": 17,
      "model": 1,
      "bahasLengkap": "<strong>Langkah Pembuktian Estimasi Populasi:</strong><br>\n    1. Proporsi sampel: $\\frac{15}{150} = 10\\%$.<br>\n    2. Estimasi populasi $\\hat{N} = \\frac{200 \\times 150}{15} = 2.000$ ekor.<br>\n    3. Jika $R=30$: $\\hat{N} = \\frac{200 \\times 150}{30} = 1.000$ ekor.<br>\n    4. Peluang $= 10\\% < 25\\%$.<br>\n    <strong>Kunci Jawaban:</strong> B - B - B - S.",
      "rows": [
        {
          "id": "r1",
          "key": "B",
          "bahas": "Proporsi = 15 / 150 = 0,10 = 10%. (BENAR)"
        },
        {
          "id": "r2",
          "key": "B",
          "bahas": "N = (M × C) / R = (200 × 150) / 15 = 30.000 / 15 = 2.000 ekor. (BENAR)"
        },
        {
          "id": "r3",
          "key": "B",
          "bahas": "N baru = (200 × 150) / 30 = 30.000 / 30 = 1.000 ekor. (BENAR)"
        },
        {
          "id": "r4",
          "key": "S",
          "bahas": "Peluang tertangkap bertanda pada sampel kedua adalah 15/150 = 10%, yang jauh lebih kecil dari 25%. (SALAH)"
        }
      ]
    },
    {
      "id": 18,
      "num": 18,
      "model": 3,
      "bahasLengkap": "<strong>Langkah Pembuktian Regresi:</strong><br>\n    1. $\\bar{x} = 4$.<br>\n    2. $\\bar{y} = 16$.<br>\n    3. $a = \\bar{y} - b\\bar{x} = 16 - 2,5(4) = 16 - 10 = 6$. Persamaan regresi: $\\hat{y} = 6 + 2,5x$.<br>\n    4. Untuk $x = 6$: $\\hat{y} = 6 + 2,5(6) = 6 + 15 = 21$.<br>\n    <strong>Kunci Isian:</strong> (1) 4, (2) 16, (3) 6, (4) 21.",
      "blanks": [
        {
          "id": "b1",
          "correctValues": [
            "4",
            "4.0"
          ]
        },
        {
          "id": "b2",
          "correctValues": [
            "16",
            "16.0"
          ]
        },
        {
          "id": "b3",
          "correctValues": [
            "6",
            "6.0"
          ]
        },
        {
          "id": "b4",
          "correctValues": [
            "21",
            "21.0"
          ]
        }
      ]
    },
    {
      "id": 19,
      "num": 19,
      "model": 2,
      "bahasLengkap": "<strong>Langkah Pembuktian Pengisian Tempat:</strong><br>\n    1. Dua huruf (boleh ulang): $3 \\times 3 = 9$ variasi.<br>\n    2. Dua angka (tanpa ulang): $4 \\times 3 = 12$ variasi.<br>\n    3. Total sandi lengkap: $9 \\times 12 = 108$ variasi.<br>\n    4. Angka ganjil ${1, 3}$ tanpa ulang: $2 \\times 1 = 2$ variasi angka. Total $= 9 \\times 2 = 18$ variasi.<br>\n    <strong>Pasangan Benar:</strong> A1 ↔ B1, A2 ↔ B2, A3 ↔ B3, A4 ↔ B4.",
      "correctPairs": {
        "A1": "B1",
        "A2": "B2",
        "A3": "B3",
        "A4": "B4"
      }
    },
    {
      "id": 20,
      "num": 20,
      "model": 4,
      "bahasLengkap": "<strong>Langkah Pembuktian Proyeksi:</strong><br>\n    1. Misalkan $O$ proyeksi $T$ ke alas. Segitiga siku-siku $TOA, TOB, TOC, TOD$ semuanya memiliki sisi tegak $TO$ sama dan sisi miring $TA=TB=TC=TD$ sama. Berdasarkan kekongruenan hipotenusa-kaki, maka $OA = OB = OC = OD$. Titik yang berjarak sama ke keempat sudut persegi adalah titik pusat perpotongan diagonal (Pernyataan BENAR).<br>\n    2. Alasan menyatakan kondisi rusuk tegak sama panjang secara benar (Alasan BENAR).<br>\n    3. Keduanya berhubungan sebab-akibat.<br>\n    <strong>Kunci Jawaban: A.</strong>",
      "key": "A"
    },
    {
      "id": 21,
      "num": 21,
      "model": 3,
      "bahasLengkap": "<strong>Langkah Pembuktian Peluang Majemuk:</strong><br>\n    1. Ruang sampel: $n(S) = C(10, 2) = \\frac{10 \\times 9}{2} = 45$.<br>\n    2. Keduanya biru: $C(6, 2) = \\frac{6 \\times 5}{2} = 15$ cara.<br>\n    3. Peluang keduanya biru: $\\frac{15}{45} = \\frac{1}{3}$.<br>\n    4. 1 Biru & 1 Kuning: $\\frac{C(6, 1) \\times C(4, 1)}{45} = \\frac{24}{45} = \\frac{8}{15}$.<br>\n    <strong>Kunci Isian:</strong> (1) 45, (2) 15, (3) 1/3, (4) 8/15.",
      "blanks": [
        {
          "id": "b1",
          "correctValues": [
            "45"
          ]
        },
        {
          "id": "b2",
          "correctValues": [
            "15"
          ]
        },
        {
          "id": "b3",
          "correctValues": [
            "1/3",
            "15/45",
            "0.33",
            "0,33"
          ]
        },
        {
          "id": "b4",
          "correctValues": [
            "8/15",
            "24/45",
            "0.53",
            "0,53"
          ]
        }
      ]
    },
    {
      "id": 22,
      "num": 22,
      "model": 1,
      "bahasLengkap": "<strong>Langkah Pembuktian Metrik Prisma:</strong><br>\n    1. Luas alas segienam $= 6 \\times \\frac{\\sqrt{3}}{4}(4^2) = 24\\sqrt{3}\\text{ m}^2$.<br>\n    2. Luas selimut $= (6 \\times 4) \\times 6 = 144\\text{ m}^2$.<br>\n    3. Volume $= 24\\sqrt{3} \\times 6 = 144\\sqrt{3}\\text{ m}^3$.<br>\n    4. Bentang terjauh $= 2 \\times 4 = 8\\text{ m} \\neq 4\\text{ m}$.<br>\n    <strong>Kunci Jawaban:</strong> B - B - B - S.",
      "rows": [
        {
          "id": "r1",
          "key": "B",
          "bahas": "Segienam terdiri atas 6 segitiga sama sisi (s=4 m): 6 × (1/4 × 4² × √3) = 6 × 4√3 = 24√3 m². (BENAR)"
        },
        {
          "id": "r2",
          "key": "B",
          "bahas": "Keliling alas = 6 × 4 = 24 m. Luas selimut = 24 × 6 = 144 m². (BENAR)"
        },
        {
          "id": "r3",
          "key": "B",
          "bahas": "Volume = Luas alas × Tinggi = 24√3 × 6 = 144√3 m³. (BENAR)"
        },
        {
          "id": "r4",
          "key": "S",
          "bahas": "Jarak bentang terjauh adalah diagonal utama segienam = 2a = 2 × 4 = 8 meter, bukan 4 meter. (SALAH)"
        }
      ]
    },
    {
      "id": 23,
      "num": 23,
      "model": 5,
      "bahasLengkap": "<strong>Langkah Pembuktian Sudut Garis-Bidang:</strong><br>\n    1. Proyeksi $AG$ ke alas adalah $AC$. $\\tan \\angle CAG = \\frac{CG}{AC} = \\frac{s}{s\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$. (Pernyataan 1 BENAR).<br>\n    2. Proyeksi $AF$ ke alas adalah $AB$. Segitiga $ABF$ siku-siku sama kaki, sudutnya $45^\\circ$. (Pernyataan 2 BENAR).<br>\n    3. Rusuk tegak $AE \\perp$ bidang alas $ABCD$ ($90^\\circ$). (Pernyataan 3 BENAR).<br>\n    4. Sudut antara dua diagonal ruang kubus memenuhi $\\cos \\theta = \\frac{1}{3} \\implies \\theta \\approx 70,53^\\circ \\neq 90^\\circ$. (Pernyataan 4 SALAH).<br>\n    <strong>Pernyataan yang Dicentang:</strong> 1, 2, dan 3.",
      "statements": [
        {
          "id": "c1",
          "key": true
        },
        {
          "id": "c2",
          "key": true
        },
        {
          "id": "c3",
          "key": true
        },
        {
          "id": "c4",
          "key": false
        }
      ]
    },
    {
      "id": 24,
      "num": 24,
      "model": 4,
      "bahasLengkap": "<strong>Langkah Pembuktian Dispersi:</strong><br>\n    1. Transformasi linier pada simpangan baku: $S_Y = |-3| \\times S_X = 3 \\times 4 = 12$, bukan $-12$. Simpangan baku mengukur jarak penyebaran, nilainya tidak pernah negatif. (Pernyataan SALAH).<br>\n    2. Simpangan baku adalah akar kuadrat kuadratis, nilainya selalu non-negatif. (Alasan BENAR).<br>\n    <strong>Kunci Jawaban: D.</strong>",
      "key": "D"
    },
    {
      "id": 25,
      "num": 25,
      "model": 2,
      "bahasLengkap": "<strong>Langkah Pembuktian Metrik Kubus:</strong><br>\n    1. Jarak $A$ ke $BD = \\frac{1}{2} s\\sqrt{2} = 6\\sqrt{2}\\text{ cm}$.<br>\n    2. Jarak $E$ ke $BD$: ruas garis $EO = \\sqrt{AE^2 + AO^2} = \\sqrt{12^2 + (6\\sqrt{2})^2} = \\sqrt{144 + 72} = \\sqrt{216} = 6\\sqrt{6}\\text{ cm}$.<br>\n    3. Jarak $B$ ke $AG = \\frac{s\\sqrt{6}}{3} = \\frac{12\\sqrt{6}}{3} = 4\\sqrt{6}\\text{ cm}$.<br>\n    4. Jarak $C$ ke bidang $BDG = \\frac{1}{3} s\\sqrt{3} = 4\\sqrt{3}\\text{ cm}$.<br>\n    <strong>Pasangan Benar:</strong> A1 ↔ B1, A2 ↔ B2, A3 ↔ B3, A4 ↔ B4.",
      "correctPairs": {
        "A1": "B1",
        "A2": "B2",
        "A3": "B3",
        "A4": "B4"
      }
    }
  ]
};

function isClozeCorrect(userVal, correctList) {
  if (userVal === undefined || userVal === null || userVal === '') return false;
  const cleanUser = String(userVal).trim().toLowerCase().replace(/,/g, '.');
  return (correctList || []).some(c => {
    const cleanC = String(c).trim().toLowerCase().replace(/,/g, '.');
    return cleanUser === cleanC || String(userVal).trim().toLowerCase() === String(c).trim().toLowerCase();
  });
}

export function gradeAkmSubmission(kodePertemuan, userAnswers) {
  const pkgKey = String(kodePertemuan || '').trim().toUpperCase();
  const questions = AKM_MASTER[pkgKey];
  if (!questions || !Array.isArray(questions) || !userAnswers || typeof userAnswers !== 'object') {
    return null;
  }

  const totalSoal = questions.length;
  const maxQScore = 100 / totalSoal;
  let totalEarnedScore = 0;
  let fullRightCount = 0;
  const evaluations = [];
  const details = [];

  for (let i = 0; i < totalSoal; i++) {
    const q = questions[i];
    const ans = userAnswers[q.id] !== undefined ? userAnswers[q.id] : userAnswers[String(q.id)];
    let qEarned = 0;

    if (ans !== undefined && ans !== null) {
      switch (q.model) {
        case 1: {
          const rows = q.rows || [];
          let cr = 0;
          rows.forEach(r => { if (ans[r.id] === r.key) cr++; });
          qEarned = rows.length > 0 ? (cr / rows.length) * maxQScore : 0;
          break;
        }
        case 2: {
          const pairs = q.correctPairs || {};
          const keys = Object.keys(pairs);
          let cp = 0;
          keys.forEach(pid => { if (ans[pid] === pairs[pid]) cp++; });
          qEarned = keys.length > 0 ? (cp / keys.length) * maxQScore : 0;
          break;
        }
        case 3: {
          const blanks = q.blanks || [];
          let cb = 0;
          blanks.forEach(b => { if (isClozeCorrect(ans[b.id], b.correctValues)) cb++; });
          qEarned = blanks.length > 0 ? (cb / blanks.length) * maxQScore : 0;
          break;
        }
        case 4: {
          qEarned = (String(ans).trim().toUpperCase() === String(q.key).trim().toUpperCase()) ? maxQScore : 0;
          break;
        }
        case 5: {
          const chosen = Array.isArray(ans) ? ans : [];
          const stmts = q.statements || [];
          let cd = 0;
          stmts.forEach(st => {
            if (Boolean(st.key) === chosen.includes(st.id)) cd++;
          });
          qEarned = stmts.length > 0 ? (cd / stmts.length) * maxQScore : 0;
          break;
        }
      }
    }

    const qPct = maxQScore > 0 ? (qEarned / maxQScore) : 0;
    const isFullRight = qPct >= 0.999;
    if (isFullRight) fullRightCount++;
    totalEarnedScore += qEarned;
    evaluations.push({ id: q.id, q_idx: i, pct: qPct, is_right: isFullRight });
    details.push({ q_idx: i, id: q.id, earned: Number(qEarned.toFixed(2)), max: maxQScore, is_right: isFullRight });
  }

  const finalSkor = Math.round(totalEarnedScore);
  return {
    skor: finalSkor,
    jumlah_soal: totalSoal,
    jumlah_benar: fullRightCount,
    jumlah_salah: totalSoal - fullRightCount,
    evaluations,
    details,
    server_verified: true
  };
}

export function getAkmSolutions(kodePertemuan) {
  const pkgKey = String(kodePertemuan || '').trim().toUpperCase();
  const questions = AKM_MASTER[pkgKey];
  if (!questions) return null;
  return questions.map((q, idx) => ({
    q_idx: idx,
    id: q.id,
    model: q.model,
    bahas: q.bahasLengkap,
    bahasLengkap: q.bahasLengkap,
    rows: q.rows,
    correctPairs: q.correctPairs,
    blanks: q.blanks,
    key: q.key,
    statements: q.statements
  }));
}
