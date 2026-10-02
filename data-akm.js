// data-akm.js
// DATA BANK SOAL RESMI SIMULASI TKA & AKM PUSMENDIK (LITERASI NUMERASI KELAS XII)
// SMA GLOBAL ISLAMIC SCHOOL 2 SERPONG • TP 2026/2027
// Standar 5 Model Baku AKM / Asesmen Nasional Pusmendik Kemendikbudristek
// Paket Soal: 25 Butir per Paket • Alokasi Waktu: 75 Menit

const AKM_DATA = {
  "packages": [
    {
      "id": "GLADI_01",
      "code": "SIMULASI-01",
      "title": "Gladi Bersih ANBK Literasi Numerasi Gelombang 2",
      "subtitle": "Persiapan Resmi Asesmen Nasional & TKA Kelas XII • SMA GIS 2 Serpong",
      "targetDate": "12 - 18 Oktober 2026",
      "durationMinutes": 75,
      "totalQuestions": 25,
      "kategoriLevel": "Fase F (Kelas XII SMA)",
      "questions": [
        {
          "id": 1,
          "num": 1,
          "model": 1,
          "modelName": "Pernyataan Benar / Salah (Tabel 4 Baris)",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Applying (Penerapan)",
          "konteks": "Sosial, Finansial & Keamanan Perbankan",
          "stimulusTitle": "Sistem Pengamanan Brankas Digital Bank Syariah Serpong",
          "stimulusBadge": "Kaidah Pencacahan & Peluang",
          "stimulusText": "<p class=\"leading-relaxed\">Sebuah brankas penyimpanan dana kas dan aset perbankan syariah di kawasan Serpong menggunakan sistem pengamanan pintu berlapis berbasis kode PIN alfanumerik 6 karakter.</p>\n    <div class=\"my-3 p-3.5 rounded-xl border bg-slate-50 border-slate-200 text-slate-800 text-xs space-y-1.5 shadow-sm\">\n      <p class=\"font-bold text-slate-900 flex items-center gap-2\"><i class=\"fa-solid fa-shield-halved text-blue-600\"></i> Ketentuan Pembuatan Kode PIN Brankas:</p>\n      <ul class=\"list-disc list-inside space-y-1 pl-1 text-slate-700\">\n        <li>Kode terdiri atas <strong>2 huruf kapital pertama</strong> diikuti oleh <strong>4 angka desimal</strong> (format: <code class=\"px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded font-mono font-bold\">H₁ H₂ D₁ D₂ D₃ D₄</code>).</li>\n        <li>Dua huruf pertama dipilih dari himpunan huruf terbatas: <code class=\"px-1.5 py-0.5 bg-slate-200 text-slate-800 rounded font-mono font-bold\">{A, B, C, D, E}</code> tanpa pengulangan huruf.</li>\n        <li>Empat angka dipilih dari himpunan angka bukan nol: <code class=\"px-1.5 py-0.5 bg-slate-200 text-slate-800 rounded font-mono font-bold\">{1, 2, 3, 4, 5, 6, 7, 8, 9}</code> dengan ketentuan khusus:\n          <ul class=\"list-circle list-inside pl-4 mt-1 space-y-0.5 text-slate-600\">\n            <li>Angka pertama (<code class=\"font-mono\">D₁</code>) harus berupa <strong>bilangan ganjil</strong>.</li>\n            <li>Angka terakhir (<code class=\"font-mono\">D₄</code>) harus berupa <strong>bilangan genap</strong>.</li>\n            <li>Seluruh 4 angka yang digunakan <strong>tidak boleh ada yang berulang</strong>.</li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n    <p class=\"leading-relaxed\">Tim audit keamanan siber menguji ketahanan brankas tersebut terhadap potensi serangan tebakan acak (<em>brute force</em>) untuk memastikan perlindungan optimal.</p>",
          "questionText": "Berdasarkan stimulus di atas, tentukan status kebenaran (BENAR atau SALAH) untuk setiap pernyataan matematis berikut!",
          "payload": {
            "rows": [
              {
                "id": "r1",
                "statement": "Banyaknya variasi susunan 2 huruf awal yang dapat dipilih adalah tepat 20 variasi.",
                "key": "B",
                "bahas": "Dua huruf tanpa pengulangan dari 5 huruf: P(5, 2) = 5 × 4 = 20 variasi. (BENAR)"
              },
              {
                "id": "r2",
                "statement": "Banyaknya variasi susunan 4 angka PIN yang memenuhi kriteria ganjil di awal dan genap di akhir adalah 840 variasi.",
                "key": "B",
                "bahas": "Posisi D₁ (ganjil: 1,3,5,7,9) = 5 cara. Posisi D₄ (genap: 2,4,6,8) = 4 cara. Dua posisi tengah D₂ dan D₃ dipilih dari sisa 7 angka: 7 × 6 = 42 cara. Total variasi angka = 5 × 4 × 42 = 840 variasi. (BENAR)"
              },
              {
                "id": "r3",
                "statement": "Total variasi kode PIN 6 karakter lengkap yang dapat dibentuk adalah sebanyak 16.800 kode brankas berbeda.",
                "key": "B",
                "bahas": "Total variasi lengkap = (Variasi Huruf) × (Variasi Angka) = 20 × 840 = 16.800 kode. (BENAR)"
              },
              {
                "id": "r4",
                "statement": "Peluang seseorang berhasil membuka brankas dalam satu kali tebakan acak lebih besar dari 0,01%.",
                "key": "S",
                "bahas": "Peluang 1 tebakan benar = 1 / 16.800 ≈ 0,0000595 = 0,00595%. Nilai ini JAUH LEBIH KECIL dari 0,01% (0,0001). Maka pernyataan ini SALAH."
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Matematis:</strong><br>\n    1. <em>Kombinasi Huruf:</em> $P(5, 2) = 5 \\times 4 = 20$ cara.<br>\n    2. <em>Kombinasi Angka:</em> Posisi $D_1$ (5 opsi ganjil), $D_4$ (4 opsi genap), $D_2$ dan $D_3$ dari sisa 7 angka ($7 \\times 6 = 42$). Total $= 5 \\times 42 \\times 4 = 840$ cara.<br>\n    3. <em>Total Kode:</em> $20 \\times 840 = 16.800$ kode.<br>\n    4. <em>Peluang tebakan:</em> $\\frac{1}{16.800} \\approx 0,00595\\% < 0,01\\%$.<br>\n    <strong>Kunci Jawaban:</strong> B - B - B - S."
        },
        {
          "id": 2,
          "num": 2,
          "model": 1,
          "modelName": "Pernyataan Benar / Salah (Tabel 4 Baris)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Reasoning (Penalaran HOTS)",
          "konteks": "Arsitektur Bangunan & Rekayasa Konstruksi",
          "stimulusTitle": "Desain Kanopi Baja Aula Pertemuan Utama GIS 2 Serpong",
          "stimulusBadge": "Geometri Dimensi Tiga (Balok)",
          "stimulusText": "<p class=\"leading-relaxed\">Sebuah kanopi aula serbaguna dirancang dengan struktur rangka baja balok beraturan $ABCD.EFGH$. Bidang lantai dasar dimodelkan sebagai persegi $ABCD$ berukuran $12\\text{ m} \\times 12\\text{ m}$, dan tinggi tiang kolom tegak kanopi ($AE = BF = CG = DH$) adalah setinggi $6\\text{ meter}$.</p>\n    <div class=\"my-3 p-3.5 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1\">\n      <p class=\"font-bold text-slate-900 flex items-center gap-2\"><i class=\"fa-solid fa-cube text-emerald-600\"></i> Koordinat Titik Acuan Rangka:</p>\n      <p>• Titik $P$ berada tepat di tengah-tengah lantai dasar $ABCD$ (titik perpotongan diagonal $AC$ dan $BD$).</p>\n      <p>• Titik $Q$ berada tepat di tengah-tengah rangka atap $EFGH$ (titik perpotongan diagonal $EG$ dan $FH$).</p>\n      <p>• Kabel baja penguat dipasang menghubungkan beberapa titik simpul krusial untuk menahan beban angin kencang.</p>\n    </div>",
          "questionText": "Tentukan status kebenaran (BENAR atau SALAH) untuk setiap analisis dimensi tiga berikut!",
          "payload": {
            "rows": [
              {
                "id": "r1",
                "statement": "Jarak bentang terjauh antara dua titik sudut rangka kanopi (panjang diagonal ruang AG) adalah tepat 18 meter.",
                "key": "B",
                "bahas": "AG = √(12² + 12² + 6²) = √(144 + 144 + 36) = √324 = 18 meter. (BENAR)"
              },
              {
                "id": "r2",
                "statement": "Jarak langsung dari titik pusat lantai P ke titik sudut atap G adalah tepat 6√3 meter.",
                "key": "B",
                "bahas": "Koordinat P(6, 6, 0) dan G(12, 12, 6) → PG = √((12-6)² + (12-6)² + (6-0)²) = √(36 + 36 + 36) = √108 = 6√3 meter. (BENAR)"
              },
              {
                "id": "r3",
                "statement": "Jarak tegak lurus dari titik P ke rusuk atap GH adalah tepat 6√5 meter.",
                "key": "S",
                "bahas": "Jarak titik P(6, 6, 0) ke garis GH (y=12, z=6) adalah √( (12-6)² + (6-0)² ) = √(36 + 36) = √72 = 6√2 meter, bukan 6√5 meter. (SALAH)"
              },
              {
                "id": "r4",
                "statement": "Nilai sinus sudut kemiringan bentangan kawat AG terhadap bidang lantai ABCD adalah 1/3.",
                "key": "B",
                "bahas": "Proyeksi AG ke lantai adalah AC = √(12² + 12²) = 12√2 meter. Tinggi CG = 6 meter. Sinus sudut = CG / AG = 6 / 18 = 1/3. (BENAR)"
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Matematis:</strong><br>\n    1. <em>Diagonal Ruang $AG$:</em> $\\sqrt{12^2 + 12^2 + 6^2} = \\sqrt{324} = 18\\text{ m}$.<br>\n    2. <em>Jarak $P$ ke $G$:</em> $P$ titik tengah $ABCD$, $PG = \\sqrt{6^2 + 6^2 + 6^2} = \\sqrt{108} = 6\\sqrt{3}\\text{ m}$.<br>\n    3. <em>Jarak $P$ ke garis $GH$:</em> $\\sqrt{6^2 + 6^2} = 6\\sqrt{2}\\text{ m} \\neq 6\\sqrt{5}\\text{ m}$.<br>\n    4. <em>Sinus sudut garis $AG$ dan lantai:</em> $\\sin \\theta = \\frac{CG}{AG} = \\frac{6}{18} = \\frac{1}{3}$.<br>\n    <strong>Kunci Jawaban:</strong> B - B - S - B."
        },
        {
          "id": 3,
          "num": 3,
          "model": 1,
          "modelName": "Pernyataan Benar / Salah (Tabel 4 Baris)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Knowing (Pemahaman)",
          "konteks": "Sains Terapan & Energi Terbarukan",
          "stimulusTitle": "Audit Efisiensi Produksi Listrik Panel Surya PLTS Kampus GIS 2",
          "stimulusBadge": "Statistika Deskriptif & Pemusatan Data",
          "stimulusText": "<p class=\"leading-relaxed\">Tim laboratorium rekayasa energi terbarukan SMA GIS 2 Serpong mencatat data produksi energi listrik harian (dalam satuan kWh) dari sebuah instalasi PLTS atap selama 5 bulan berturut-turut (Januari hingga Mei):</p>\n    <div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs flex justify-around font-mono font-bold text-blue-900 shadow-sm\">\n      <span>Jan: 120 kWh</span>\n      <span>Feb: 140 kWh</span>\n      <span>Mar: 150 kWh</span>\n      <span>Apr: 130 kWh</span>\n      <span>Mei: 160 kWh</span>\n    </div>\n    <p class=\"leading-relaxed\">Data tersebut dianalisis untuk menguji kestabilan suplai daya sebelum penambahan inverter cadangan.</p>",
          "questionText": "Tentukan status kebenaran (BENAR atau SALAH) untuk setiap analisis parameter statistika berikut!",
          "payload": {
            "rows": [
              {
                "id": "r1",
                "statement": "Rata-rata (mean) produksi energi listrik bulanan adalah tepat 140 kWh.",
                "key": "B",
                "bahas": "Mean = (120 + 140 + 150 + 130 + 160) / 5 = 700 / 5 = 140 kWh. (BENAR)"
              },
              {
                "id": "r2",
                "statement": "Simpangan rata-rata (SR) dari produksi energi listrik bulanan adalah 12 kWh.",
                "key": "B",
                "bahas": "Deviasi mutlak: |120-140|=20, |140-140|=0, |150-140|=10, |130-140|=10, |160-140|=20. Total = 60. SR = 60 / 5 = 12 kWh. (BENAR)"
              },
              {
                "id": "r3",
                "statement": "Nilai median data produksi listrik sama persis dengan nilai rata-rata hitung (mean).",
                "key": "B",
                "bahas": "Data urut: 120, 130, 140, 150, 160. Median = 140 kWh. Mean = 140 kWh. Keduanya bernilai sama. (BENAR)"
              },
              {
                "id": "r4",
                "statement": "Jangkauan (range) data produksi energi bulanan melebihi 50 kWh.",
                "key": "S",
                "bahas": "Range = Nilai Maksimum - Nilai Minimum = 160 - 120 = 40 kWh. Nilai ini TIDAK melebihi 50 kWh. (SALAH)"
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Statistika:</strong><br>\n    1. <em>Mean:</em> $\\bar{x} = \\frac{120 + 140 + 150 + 130 + 160}{5} = \\frac{700}{5} = 140\\text{ kWh}$.<br>\n    2. <em>Simpangan Rata-rata:</em> $SR = \\frac{20 + 0 + 10 + 10 + 20}{5} = \\frac{60}{5} = 12\\text{ kWh}$.<br>\n    3. <em>Median:</em> Urutan ${120, 130, 140, 150, 160}$, median $= 140\\text{ kWh} = \\bar{x}$.<br>\n    4. <em>Jangkauan:</em> $160 - 120 = 40\\text{ kWh} \\le 50\\text{ kWh}$.<br>\n    <strong>Kunci Jawaban:</strong> B - B - B - S."
        },
        {
          "id": 4,
          "num": 4,
          "model": 1,
          "modelName": "Pernyataan Benar / Salah (Tabel 4 Baris)",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Applying (Penerapan)",
          "konteks": "Sosial, Perjalanan & Logistik",
          "stimulusTitle": "Optimalisasi Rute Penerbangan Delegasi Umrah Siswa GIS",
          "stimulusBadge": "Aturan Perkalian & Kombinasi Rute",
          "stimulusText": "<p class=\"leading-relaxed\">Sekolah merencanakan program Umrah Edukasi Siswa GIS 2 Serpong dari Jakarta menuju Jeddah. Biro perjalanan menawarkan tiga pilihan kota transit:</p>\n    <div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs space-y-1 text-slate-800\">\n      <p>• <strong>Via Doha:</strong> Tersedia 4 pilihan maskapai Jakarta-Doha dan 3 maskapai lanjutan Doha-Jeddah.</p>\n      <p>• <strong>Via Dubai:</strong> Tersedia 3 pilihan maskapai Jakarta-Dubai dan 4 maskapai lanjutan Dubai-Jeddah.</p>\n      <p>• <strong>Via Muscat:</strong> Tersedia 2 pilihan maskapai Jakarta-Muscat dan 2 maskapai lanjutan Muscat-Jeddah.</p>\n    </div>\n    <p class=\"leading-relaxed\">Seluruh rute saling independen dan dapat dipilih oleh panitia keberangkatan.</p>",
          "questionText": "Tentukan status kebenaran (BENAR atau SALAH) untuk setiap analisis rute perjalanan berikut!",
          "payload": {
            "rows": [
              {
                "id": "r1",
                "statement": "Banyak pilihan rute penerbangan bila transit melalui Doha adalah tepat 12 rute variasi.",
                "key": "B",
                "bahas": "Rute via Doha = 4 × 3 = 12 rute. (BENAR)"
              },
              {
                "id": "r2",
                "statement": "Banyak pilihan rute penerbangan bila transit melalui Muscat adalah 4 rute variasi.",
                "key": "B",
                "bahas": "Rute via Muscat = 2 × 2 = 4 rute. (BENAR)"
              },
              {
                "id": "r3",
                "statement": "Total variasi seluruh rute penerbangan dari Jakarta ke Jeddah yang dapat dipilih adalah 28 rute.",
                "key": "B",
                "bahas": "Total rute = (4 × 3) + (3 × 4) + (2 × 2) = 12 + 12 + 4 = 28 rute. (BENAR)"
              },
              {
                "id": "r4",
                "statement": "Peluang terpilih rute yang transit melalui Dubai jika dipilih secara acak adalah 3/7.",
                "key": "B",
                "bahas": "Rute via Dubai = 12 rute. Peluang = 12 / 28 = 3/7. (BENAR)"
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Matematis:</strong><br>\n    1. <em>Via Doha:</em> $4 \\times 3 = 12$ rute.<br>\n    2. <em>Via Dubai:</em> $3 \\times 4 = 12$ rute.<br>\n    3. <em>Via Muscat:</em> $2 \\times 2 = 4$ rute.<br>\n    4. <em>Total Variasi:</em> $12 + 12 + 4 = 28$ rute.<br>\n    5. <em>Peluang via Dubai:</em> $\\frac{12}{28} = \\frac{3}{7}$.<br>\n    <strong>Kunci Jawaban:</strong> B - B - B - B."
        },
        {
          "id": 5,
          "num": 5,
          "model": 1,
          "modelName": "Pernyataan Benar / Salah (Tabel 4 Baris)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Reasoning (Penalaran)",
          "konteks": "Arsitektur & Seni Bangunan",
          "stimulusTitle": "Desain Piramida Kaca Museum Mini Edukasi Sains GIS 2",
          "stimulusBadge": "Geometri Dimensi Tiga (Limas Beraturan)",
          "stimulusText": "<p class=\"leading-relaxed\">Sebuah paviliun pameran dirancang berbentuk limas segiempat beraturan $T.ABCD$. Bidang alas $ABCD$ merupakan persegi dengan panjang sisi $8\\sqrt{2}\\text{ meter}$, sedangkan panjang setiap rusuk tegak kaca ($TA = TB = TC = TD$) adalah $10\\text{ meter}$.</p>\n    <p class=\"leading-relaxed\">Titik $O$ adalah titik perpotongan diagonal bidang alas $AC$ dan $BD$, serta menjadi titik proyeksi tegak lurus puncak $T$ terhadap lantai dasar.</p>",
          "questionText": "Tentukan status kebenaran (BENAR atau SALAH) untuk setiap analisis geometri limas berikut!",
          "payload": {
            "rows": [
              {
                "id": "r1",
                "statement": "Tinggi tegak puncak piramida dari lantai dasar (panjang TO) adalah tepat 6 meter.",
                "key": "B",
                "bahas": "Diagonal AC = (8√2) × √2 = 16 m. AO = 8 m. Tinggi TO = √(10² - 8²) = √(100 - 64) = √36 = 6 meter. (BENAR)"
              },
              {
                "id": "r2",
                "statement": "Panjang garis tinggi pada bidang sisi tegak segitiga TAB adalah 2√17 meter.",
                "key": "B",
                "bahas": "Titik tengah AB adalah M. Jarak OM = (8√2) / 2 = 4√2 m. TM = √(TO² + OM²) = √(6² + (4√2)²) = √(36 + 32) = √68 = 2√17 meter. (BENAR)"
              },
              {
                "id": "r3",
                "statement": "Volume ruang dalam paviliun piramida kaca tersebut adalah 256 meter kubik.",
                "key": "B",
                "bahas": "Luas alas = (8√2)² = 128 m². Volume = 1/3 × Luas Alas × Tinggi = 1/3 × 128 × 6 = 256 m³. (BENAR)"
              },
              {
                "id": "r4",
                "statement": "Jarak titik sudut alas A ke rusuk tegak TC adalah tepat 10 meter.",
                "key": "S",
                "bahas": "Pada segitiga TAC, alas AC = 16 m, tinggi TO = 6 m. Jarak A ke TC = (AC × TO) / TC = (16 × 6) / 10 = 9,6 meter, bukan 10 meter. (SALAH)"
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Matematis:</strong><br>\n    1. <em>Diagonal Alas $AC$:</em> $8\\sqrt{2} \\times \\sqrt{2} = 16\\text{ m} \\implies AO = 8\\text{ m}$.<br>\n    2. <em>Tinggi Limas $TO$:</em> $\\sqrt{10^2 - 8^2} = 6\\text{ m}$.<br>\n    3. <em>Garis Tinggi Sisi Tegak $TM$:</em> $\\sqrt{6^2 + (4\\sqrt{2})^2} = \\sqrt{68} = 2\\sqrt{17}\\text{ m}$.<br>\n    4. <em>Volume:</em> $\\frac{1}{3} \\times 128 \\times 6 = 256\\text{ m}^3$.<br>\n    5. <em>Jarak $A$ ke $TC$:</em> $\\frac{16 \\times 6}{10} = 9,6\\text{ m} \\neq 10\\text{ m}$.<br>\n    <strong>Kunci Jawaban:</strong> B - B - B - S."
        },
        {
          "id": 6,
          "num": 6,
          "model": 2,
          "modelName": "Menjodohkan (Premis Kolom A ↔ Respons Kolom B)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Applying (Penerapan Probabilitas)",
          "konteks": "Kesehatan Publik & Uji Diagnostik Medis",
          "stimulusTitle": "Uji Skrining Medis Cepat & Teorema Bayes Probabilitas",
          "stimulusBadge": "Peluang Bersyarat & Teorema Bayes",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam program pemeriksaan kesehatan berkala siswa SMA GIS 2 Serpong, sebuah alat uji cepat (<em>rapid diagnostic test</em>) digunakan untuk mendeteksi infeksi tertentu pada populasi remaja.</p>\n    <div class=\"my-3 p-3.5 rounded-xl border bg-slate-50 border-slate-200 text-slate-800 text-xs space-y-1 shadow-sm\">\n      <p class=\"font-bold text-slate-900 flex items-center gap-2\"><i class=\"fa-solid fa-notes-medical text-rose-600\"></i> Karakteristik Parameter Uji Laboratorium:</p>\n      <p>• <strong>Prevalensi penyakit:</strong> Peluang siswa terinfeksi di populasi adalah $P(S) = 0,02$ (2%).</p>\n      <p>• <strong>Sensitivitas alat:</strong> Peluang hasil uji positif jika benar sakit adalah $P(+|S) = 0,95$ (95%).</p>\n      <p>• <strong>Spesifisitas alat:</strong> Peluang hasil uji negatif jika benar sehat adalah $P(-|S') = 0,90$ (90%), sehingga peluang positif palsu adalah $P(+|S') = 0,10$ (10%).</p>\n    </div>",
          "questionText": "Pasangkan premis probabilitas di Kolom A dengan nilai numerik yang tepat di Kolom B!",
          "payload": {
            "columnA": [
              {
                "id": "A1",
                "text": "Peluang seorang siswa benar sakit dan hasil uji positif: P(S ∩ +)"
              },
              {
                "id": "A2",
                "text": "Peluang seorang siswa sehat tetapi hasil uji positif palsu: P(S' ∩ +)"
              },
              {
                "id": "A3",
                "text": "Peluang total seorang siswa memperoleh hasil tes positif: P(+)"
              },
              {
                "id": "A4",
                "text": "Peluang seorang siswa benar sakit jika hasil ujinya positif: P(S | +)"
              }
            ],
            "columnB": [
              {
                "id": "B1",
                "text": "0,019 (1,9%)"
              },
              {
                "id": "B2",
                "text": "0,098 (9,8%)"
              },
              {
                "id": "B3",
                "text": "0,117 (11,7%)"
              },
              {
                "id": "B4",
                "text": "19 / 117 (sekitar 16,24%)"
              },
              {
                "id": "B5",
                "text": "0,883 (88,3%)"
              },
              {
                "id": "B6",
                "text": "0,020 (2,0%)"
              },
              {
                "id": "B7",
                "text": "0,950 (95,0%)"
              }
            ],
            "correctPairs": {
              "A1": "B1",
              "A2": "B2",
              "A3": "B3",
              "A4": "B4"
            }
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Teorema Bayes:</strong><br>\n    1. $P(S \\cap +) = P(S) \\cdot P(+|S) = 0,02 \\times 0,95 = 0,019$ (1,9%).<br>\n    2. $P(S' \\cap +) = P(S') \\cdot P(+|S') = 0,98 \\times 0,10 = 0,098$ (9,8%).<br>\n    3. Peluang Total: $P(+) = 0,019 + 0,098 = 0,117$ (11,7%).<br>\n    4. Peluang Bersyarat Bayes: $P(S|+) = \\frac{0,019}{0,117} = \\frac{19}{117} \\approx 16,24\\%$.<br>\n    <strong>Pasangan Benar:</strong> A1 ↔ B1, A2 ↔ B2, A3 ↔ B3, A4 ↔ B4."
        },
        {
          "id": 7,
          "num": 7,
          "model": 2,
          "modelName": "Menjodohkan (Premis Kolom A ↔ Respons Kolom B)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Applying (Penerapan)",
          "konteks": "Teknik Sipil & Struktur Rangka Atap",
          "stimulusTitle": "Rangka Konstruksi Atap Limas Beraturan T.ABCD",
          "stimulusBadge": "Jarak Titik & Garis pada Limas",
          "stimulusText": "<p class=\"leading-relaxed\">Struktur atap paviliun olahraga SMA GIS 2 berbentuk limas segiempat beraturan $T.ABCD$ dengan alas persegi $ABCD$ berukuran sisi $6\\text{ meter}$, serta tinggi puncak limas dari lantai dasar ($TO$) adalah $4\\text{ meter}$.</p>\n    <p class=\"leading-relaxed\">Titik $O$ adalah pusat simetri lantai dasar tempat tiang pusat berdiri tegak lurus, dan $M$ adalah titik tengah rusuk alas $AB$.</p>",
          "questionText": "Pasangkan deskripsi besaran geometris di Kolom A dengan ukuran metrik yang tepat di Kolom B!",
          "payload": {
            "columnA": [
              {
                "id": "A1",
                "text": "Panjang rusuk tegak pembentuk kerangka atap (TA = TB = TC = TD)"
              },
              {
                "id": "A2",
                "text": "Panjang garis tinggi bidang sisi tegak segitiga TAB (panjang TM)"
              },
              {
                "id": "A3",
                "text": "Jarak titik puncak T ke bidang lantai dasar ABCD (panjang TO)"
              },
              {
                "id": "A4",
                "text": "Luas seluruh permukaan selimut atap kaca limas (luas 4 segitiga tegak)"
              }
            ],
            "columnB": [
              {
                "id": "B1",
                "text": "√34 meter (sekitar 5,83 m)"
              },
              {
                "id": "B2",
                "text": "5 meter"
              },
              {
                "id": "B3",
                "text": "4 meter"
              },
              {
                "id": "B4",
                "text": "60 meter persegi"
              },
              {
                "id": "B5",
                "text": "36 meter persegi"
              },
              {
                "id": "B6",
                "text": "6√2 meter"
              },
              {
                "id": "B7",
                "text": "48 meter persegi"
              }
            ],
            "correctPairs": {
              "A1": "B1",
              "A2": "B2",
              "A3": "B3",
              "A4": "B4"
            }
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Metrik Limas:</strong><br>\n    1. $AC = 6\\sqrt{2}\\text{ m} \\implies AO = 3\\sqrt{2}\\text{ m}$. Rusuk tegak $TA = \\sqrt{4^2 + (3\\sqrt{2})^2} = \\sqrt{16+18} = \\sqrt{34}\\text{ m}$.<br>\n    2. Titik tengah $AB$ adalah $M \\implies OM = 3\\text{ m}$. Tinggi segitiga $TM = \\sqrt{TO^2 + OM^2} = \\sqrt{4^2 + 3^2} = 5\\text{ m}$.<br>\n    3. Tinggi limas $TO = 4\\text{ m}$.<br>\n    4. Luas 4 segitiga selimut $= 4 \\times (\\frac{1}{2} \\times 6 \\times 5) = 60\\text{ m}^2$.<br>\n    <strong>Pasangan Benar:</strong> A1 ↔ B1, A2 ↔ B2, A3 ↔ B3, A4 ↔ B4."
        },
        {
          "id": 8,
          "num": 8,
          "model": 2,
          "modelName": "Menjodohkan (Premis Kolom A ↔ Respons Kolom B)",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Reasoning (Penalaran)",
          "konteks": "Pendidikan & Kompetisi Siswa Berprestasi",
          "stimulusTitle": "Seleksi Delegasi Tim Olimpiade Sains GIS 2 Serpong",
          "stimulusBadge": "Kombinatorika & Pemilihan Delegasi",
          "stimulusText": "<p class=\"leading-relaxed\">Klub Sains SMA GIS 2 Serpong menyeleksi siswa terbaik untuk dikirim ke ajang Olimpiade Sains Nasional (OSN). Terdapat 6 siswa putra dan 5 siswa putri yang lolos tahap karantina awal (total 11 kandidat berprestasi).</p>\n    <p class=\"leading-relaxed\">Panitia akan membentuk tim perwakilan beranggotakan 4 siswa dengan berbagai skema penugasan.</p>",
          "questionText": "Pasangkan kriteria susunan delegasi di Kolom A dengan banyaknya kombinasi yang tepat di Kolom B!",
          "payload": {
            "columnA": [
              {
                "id": "A1",
                "text": "Banyak cara memilih 4 siswa tanpa membedakan jenis kelamin (bebas)"
              },
              {
                "id": "A2",
                "text": "Banyak cara memilih delegasi yang terdiri atas tepat 2 putra dan 2 putri"
              },
              {
                "id": "A3",
                "text": "Banyak cara memilih delegasi dengan syarat minimal beranggotakan 3 siswa putra"
              },
              {
                "id": "A4",
                "text": "Banyak cara memilih delegasi dengan syarat seluruh anggotanya adalah siswa putri"
              }
            ],
            "columnB": [
              {
                "id": "B1",
                "text": "330 cara"
              },
              {
                "id": "B2",
                "text": "150 cara"
              },
              {
                "id": "B3",
                "text": "115 cara"
              },
              {
                "id": "B4",
                "text": "5 cara"
              },
              {
                "id": "B5",
                "text": "210 cara"
              },
              {
                "id": "B6",
                "text": "75 cara"
              },
              {
                "id": "B7",
                "text": "15 cara"
              }
            ],
            "correctPairs": {
              "A1": "B1",
              "A2": "B2",
              "A3": "B3",
              "A4": "B4"
            }
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Kombinasi:</strong><br>\n    1. Bebas: $C(11, 4) = \\frac{11 \\times 10 \\times 9 \\times 8}{4 \\times 3 \\times 2 \\times 1} = 330$ cara.<br>\n    2. 2 Putra & 2 Putri: $C(6, 2) \\times C(5, 2) = 15 \\times 10 = 150$ cara.<br>\n    3. Minimal 3 Putra: $(3\\text{ Putra, } 1\\text{ Putri}) + (4\\text{ Putra}) = [C(6,3) \\times C(5,1)] + [C(6,4) \\times C(5,0)] = (20 \\times 5) + (15 \\times 1) = 115$ cara.<br>\n    4. 4 Putri: $C(5, 4) = 5$ cara.<br>\n    <strong>Pasangan Benar:</strong> A1 ↔ B1, A2 ↔ B2, A3 ↔ B3, A4 ↔ B4."
        },
        {
          "id": 9,
          "num": 9,
          "model": 2,
          "modelName": "Menjodohkan (Premis Kolom A ↔ Respons Kolom B)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Knowing (Pemahaman Konsep)",
          "konteks": "Pendidikan & Evaluasi Hasil Belajar",
          "stimulusTitle": "Analisis Ukuran Penyebaran Data Hasil Uji Numerasi",
          "stimulusBadge": "Statistika: Ukuran Penyebaran Data",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam rangka pemetaan capaian literasi numerasi, guru matematika mengumpulkan sampel nilai dari 8 siswa terpilih:</p>\n    <div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs font-mono font-bold text-center text-slate-800 shadow-sm\">\n      60, &nbsp; 70, &nbsp; 75, &nbsp; 80, &nbsp; 80, &nbsp; 85, &nbsp; 90, &nbsp; 100\n    </div>\n    <p class=\"leading-relaxed\">Data tersebut diolah untuk menentukan parameter penyebaran dan letak data guna laporan evaluasi kurikulum.</p>",
          "questionText": "Pasangkan parameter statistika di Kolom A dengan nilai perhitungannya yang tepat di Kolom B!",
          "payload": {
            "columnA": [
              {
                "id": "A1",
                "text": "Jangkauan nilai data (Range = Xmax - Xmin)"
              },
              {
                "id": "A2",
                "text": "Nilai Kuartil Pertama / Kuartil Bawah (Q1)"
              },
              {
                "id": "A3",
                "text": "Jangkauan Interkuartil (QR = Q3 - Q1)"
              },
              {
                "id": "A4",
                "text": "Simpangan Kuartil / Rentang Semi-Interkuartil (Qd = 1/2 QR)"
              }
            ],
            "columnB": [
              {
                "id": "B1",
                "text": "40"
              },
              {
                "id": "B2",
                "text": "72,5"
              },
              {
                "id": "B3",
                "text": "15"
              },
              {
                "id": "B4",
                "text": "7,5"
              },
              {
                "id": "B5",
                "text": "80"
              },
              {
                "id": "B6",
                "text": "87,5"
              },
              {
                "id": "B7",
                "text": "20"
              }
            ],
            "correctPairs": {
              "A1": "B1",
              "A2": "B2",
              "A3": "B3",
              "A4": "B4"
            }
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Statistika:</strong><br>\n    1. <em>Range:</em> $100 - 60 = 40$.<br>\n    2. Data berurutan 8 nilai. $Q_1 = \\frac{70 + 75}{2} = 72,5$, $Q_3 = \\frac{85 + 90}{2} = 87,5$.<br>\n    3. <em>Jangkauan Interkuartil ($QR$):</em> $Q_3 - Q_1 = 87,5 - 72,5 = 15$.<br>\n    4. <em>Simpangan Kuartil ($Q_d$):</em> $\\frac{1}{2} \\times 15 = 7,5$.<br>\n    <strong>Pasangan Benar:</strong> A1 ↔ B1, A2 ↔ B2, A3 ↔ B3, A4 ↔ B4."
        },
        {
          "id": 10,
          "num": 10,
          "model": 2,
          "modelName": "Menjodohkan (Premis Kolom A ↔ Respons Kolom B)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Applying (Penerapan Jarak)",
          "konteks": "Sains & Kristalografi Kubus Beraturan",
          "stimulusTitle": "Karakteristik Metrik Jarak Ruang Kubus ABCD.EFGH",
          "stimulusBadge": "Dimensi Tiga: Titik, Garis, dan Bidang",
          "stimulusText": "<p class=\"leading-relaxed\">Diberikan sebuah kristal pirit berbentuk kubus beraturan $ABCD.EFGH$ dengan panjang setiap rusuknya adalah $s = 6\\text{ cm}$.</p>\n    <p class=\"leading-relaxed\">Titik-titik simpul kubus digunakan sebagai acuan untuk menghitung berbagai jarak tegak lurus antar unsur ruang.</p>",
          "questionText": "Pasangkan deskripsi jarak pada ruang kubus di Kolom A dengan nilai eksak di Kolom B!",
          "payload": {
            "columnA": [
              {
                "id": "A1",
                "text": "Jarak titik sudut A ke diagonal bidang alas BD"
              },
              {
                "id": "A2",
                "text": "Jarak titik sudut C ke diagonal ruang BH"
              },
              {
                "id": "A3",
                "text": "Jarak titik sudut E ke bidang diagonal BDG"
              },
              {
                "id": "A4",
                "text": "Jarak antara bidang sejajar AFH dan bidang BDG"
              }
            ],
            "columnB": [
              {
                "id": "B1",
                "text": "3√2 cm"
              },
              {
                "id": "B2",
                "text": "2√6 cm"
              },
              {
                "id": "B3",
                "text": "4√3 cm"
              },
              {
                "id": "B4",
                "text": "2√3 cm"
              },
              {
                "id": "B5",
                "text": "6√2 cm"
              },
              {
                "id": "B6",
                "text": "6√3 cm"
              },
              {
                "id": "B7",
                "text": "3√6 cm"
              }
            ],
            "correctPairs": {
              "A1": "B1",
              "A2": "B2",
              "A3": "B3",
              "A4": "B4"
            }
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Rumus Jarak Kubus:</strong><br>\n    1. Jarak $A$ ke $BD = \\frac{1}{2} s\\sqrt{2} = 3\\sqrt{2}\\text{ cm}$.<br>\n    2. Jarak $C$ ke diagonal ruang $BH = \\frac{s\\sqrt{6}}{3} = \\frac{6\\sqrt{6}}{3} = 2\\sqrt{6}\\text{ cm}$.<br>\n    3. Jarak $E$ ke bidang $BDG = \\frac{2}{3} s\\sqrt{3} = 4\\sqrt{3}\\text{ cm}$.<br>\n    4. Jarak antara bidang $AFH$ dan $BDG = \\frac{1}{3} s\\sqrt{3} = 2\\sqrt{3}\\text{ cm}$.<br>\n    <strong>Pasangan Benar:</strong> A1 ↔ B1, A2 ↔ B2, A3 ↔ B3, A4 ↔ B4."
        },
        {
          "id": 11,
          "num": 11,
          "model": 3,
          "modelName": "Paragraf Rumpang Numerik (4 Bagian Kosong)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Knowing (Pemahaman Komputasi)",
          "konteks": "Energi Ramah Lingkungan & Fasilitas Sekolah",
          "stimulusTitle": "Audit Kapasitas Output Inverter PLTS Atap GIS 2",
          "stimulusBadge": "Pemusatan & Penyebaran Data",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam rangka program <em>Green Campus</em>, teknisi laboratorium SMA GIS 2 Serpong melakukan uji pembebanan pada 5 unit sel inverter listrik surya. Daya output stabil yang tercatat (dalam Watt) adalah sebagai berikut:</p>\n    <div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs font-mono font-bold text-center text-slate-800 shadow-sm\">\n      200 Watt, &nbsp; 220 Watt, &nbsp; 240 Watt, &nbsp; 260 Watt, &nbsp; 280 Watt\n    </div>\n    <p class=\"leading-relaxed\">Lengkapilah laporan evaluasi teknis berikut dengan menuliskan nilai numerik hasil perhitungan!</p>",
          "questionText": "Isikan angka hasil perhitungan pada setiap bagian kosong di bawah ini:",
          "payload": {
            "clozeText": "Berdasarkan data 5 inverter di atas, nilai rata-rata hitung (mean) daya listrik yang dihasilkan adalah (1) [___] Watt. Nilai tengah (median) daya inverter adalah sebesar (2) [___] Watt. Selisih rentang daya maksimum dan minimum (jangkauan data) bernilai (3) [___] Watt, dan simpangan rata-rata (SR) dari kelima inverter tersebut adalah sebesar (4) [___] Watt.",
            "blanks": [
              {
                "id": "b1",
                "label": "(1)",
                "placeholder": "mean...",
                "correctValues": [
                  "240",
                  "240.0"
                ]
              },
              {
                "id": "b2",
                "label": "(2)",
                "placeholder": "median...",
                "correctValues": [
                  "240",
                  "240.0"
                ]
              },
              {
                "id": "b3",
                "label": "(3)",
                "placeholder": "jangkauan...",
                "correctValues": [
                  "80",
                  "80.0"
                ]
              },
              {
                "id": "b4",
                "label": "(4)",
                "placeholder": "SR...",
                "correctValues": [
                  "24",
                  "24.0"
                ]
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Nilai:</strong><br>\n    1. <em>Mean:</em> $\\frac{200 + 220 + 240 + 260 + 280}{5} = \\frac{1200}{5} = 240$ Watt.<br>\n    2. <em>Median:</em> Data simetris ganjil, nilai tengah $= 240$ Watt.<br>\n    3. <em>Jangkauan (Range):</em> $280 - 200 = 80$ Watt.<br>\n    4. <em>Simpangan Rata-rata ($SR$):</em> Deviasi: $|-40|=40, |-20|=20, 0, 20, 40$. Total $= 120$. $SR = \\frac{120}{5} = 24$ Watt.<br>\n    <strong>Kunci Isian:</strong> (1) 240, (2) 240, (3) 80, (4) 24."
        },
        {
          "id": 12,
          "num": 12,
          "model": 3,
          "modelName": "Paragraf Rumpang Numerik (4 Bagian Kosong)",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Applying (Penerapan Peluang)",
          "konteks": "Pendidikan & Teori Permainan",
          "stimulusTitle": "Eksperimen Pengambilan Bola Tanpa Pengembalian",
          "stimulusBadge": "Peluang Bersyarat & Frekuensi Harapan",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam sebuah kotak tertutup terdapat 5 bola berwarna merah dan 3 bola berwarna putih (total 8 bola homogen identik). Dua bola diambil satu per satu secara acak berturut-turut tanpa pengembalian bola pertama ke dalam kotak.</p>",
          "questionText": "Lengkapilah analisis peluang teoritis berikut dengan nilai pecahan atau bilangan bulat yang tepat:",
          "payload": {
            "clozeText": "Peluang terambil bola pertama merah dan bola kedua merah adalah sebesar (1) [___]. Selanjutnya, peluang terambil bola pertama merah kemudian disusul bola kedua putih adalah (2) [___]. Dengan demikian, peluang kejadian terambil dua bola yang berlainan warna bernilai (3) [___]. Jika percobaan pengambilan 2 bola tersebut diulang sebanyak 56 kali, maka frekuensi harapan terambil kedua bola berwarna merah adalah sebanyak (4) [___] kali.",
            "blanks": [
              {
                "id": "b1",
                "label": "(1)",
                "placeholder": "pecahan...",
                "correctValues": [
                  "5/14",
                  "20/56",
                  "0.357",
                  "0,357"
                ]
              },
              {
                "id": "b2",
                "label": "(2)",
                "placeholder": "pecahan...",
                "correctValues": [
                  "15/56",
                  "0.268",
                  "0,268"
                ]
              },
              {
                "id": "b3",
                "label": "(3)",
                "placeholder": "pecahan...",
                "correctValues": [
                  "15/28",
                  "30/56",
                  "0.536",
                  "0,536"
                ]
              },
              {
                "id": "b4",
                "label": "(4)",
                "placeholder": "frekuensi...",
                "correctValues": [
                  "20",
                  "20 kali"
                ]
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Peluang:</strong><br>\n    1. $P(M_1 \\cap M_2) = \\frac{5}{8} \\times \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}$.<br>\n    2. $P(M_1 \\cap P_2) = \\frac{5}{8} \\times \\frac{3}{7} = \\frac{15}{56}$.<br>\n    3. Beda warna: $P(M_1 P_2) + P(P_1 M_2) = \\frac{15}{56} + (\\frac{3}{8} \\times \\frac{5}{7}) = \\frac{30}{56} = \\frac{15}{28}$.<br>\n    4. Frekuensi Harapan 2 Merah: $56 \\times \\frac{5}{14} = 20$ kali.<br>\n    <strong>Kunci Isian:</strong> (1) 5/14, (2) 15/56, (3) 15/28, (4) 20."
        },
        {
          "id": 13,
          "num": 13,
          "model": 3,
          "modelName": "Paragraf Rumpang Numerik (4 Bagian Kosong)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Applying (Penerapan Dimensi Tiga)",
          "konteks": "Teknik Mesin & Fabrikasi Balok Kayu",
          "stimulusTitle": "Pengukuran Metrik Presisi Balok Kayu ABCD.EFGH",
          "stimulusBadge": "Geometri Balok: Jarak & Volume",
          "stimulusText": "<p class=\"leading-relaxed\">Sebuah balok kayu jati presisi $ABCD.EFGH$ memiliki ukuran panjang rusuk alas $AB = 8\\text{ cm}$, lebar $BC = 6\\text{ cm}$, dan tinggi tegak $AE = 12\\text{ cm}$.</p>",
          "questionText": "Isikan nilai numerik hasil perhitungan dimensi tiga pada paragraf berikut:",
          "payload": {
            "clozeText": "Panjang diagonal bidang alas balok AC adalah (1) [___] cm. Jarak tegak lurus dari titik sudut alas B ke garis diagonal AC adalah (2) [___] cm. Panjang diagonal ruang balok AG yang dihitung menggunakan teorema Pythagoras 3 dimensi adalah tepat (3) [___] cm. Volume total balok kayu jati tersebut adalah sebesar (4) [___] cm³.",
            "blanks": [
              {
                "id": "b1",
                "label": "(1)",
                "placeholder": "cm...",
                "correctValues": [
                  "10",
                  "10 cm"
                ]
              },
              {
                "id": "b2",
                "label": "(2)",
                "placeholder": "cm...",
                "correctValues": [
                  "4.8",
                  "4,8",
                  "24/5"
                ]
              },
              {
                "id": "b3",
                "label": "(3)",
                "placeholder": "cm...",
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
                "label": "(4)",
                "placeholder": "cm³...",
                "correctValues": [
                  "576",
                  "576 cm3"
                ]
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Metrik Balok:</strong><br>\n    1. $AC = \\sqrt{8^2 + 6^2} = \\sqrt{100} = 10\\text{ cm}$.<br>\n    2. Jarak $B$ ke $AC = \\frac{AB \\times BC}{AC} = \\frac{8 \\times 6}{10} = 4,8\\text{ cm}$.<br>\n    3. Diagonal Ruang $AG = \\sqrt{8^2 + 6^2 + 12^2} = \\sqrt{100 + 144} = \\sqrt{244} = 2\\sqrt{61}\\text{ cm}$.<br>\n    4. Volume $= 8 \\times 6 \\times 12 = 576\\text{ cm}^3$.<br>\n    <strong>Kunci Isian:</strong> (1) 10, (2) 4.8, (3) 2√61, (4) 576."
        },
        {
          "id": 14,
          "num": 14,
          "model": 3,
          "modelName": "Paragraf Rumpang Numerik (4 Bagian Kosong)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Reasoning (Penalaran Bivariat)",
          "konteks": "Edukasi & Efektivitas Waktu Belajar",
          "stimulusTitle": "Analisis Regresi Linier Durasi Belajar vs Skor Ujian",
          "stimulusBadge": "Statistika Bivariat: Garis Regresi",
          "stimulusText": "<p class=\"leading-relaxed\">Guru Bimbingan Konseling meneliti hubungan antara rata-rata durasi belajar mandiri per hari ($x$, dalam jam) dan skor asesmen matematika ($y$) dari 5 siswa:</p>\n    <div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs font-mono font-bold text-slate-800 text-center shadow-sm\">\n      (1 jam, 60 pt), &nbsp; (2 jam, 70 pt), &nbsp; (3 jam, 75 pt), &nbsp; (4 jam, 85 pt), &nbsp; (5 jam, 90 pt)\n    </div>",
          "questionText": "Lengkapilah analisis persamaan garis regresi linier ŷ = a + bx berikut dengan angka yang tepat:",
          "payload": {
            "clozeText": "Berdasarkan 5 pasangan data di atas, nilai rata-rata jam belajar siswa adalah (1) [___] jam. Nilai kemiringan (gradien) garis regresi b bernilai (2) [___]. Nilai konstanta intersep regresi a adalah (3) [___]. Dengan model ini, prediksi skor asesmen seorang siswa yang belajar mandiri selama 4 jam per hari adalah (4) [___] poin.",
            "blanks": [
              {
                "id": "b1",
                "label": "(1)",
                "placeholder": "jam...",
                "correctValues": [
                  "3",
                  "3.0"
                ]
              },
              {
                "id": "b2",
                "label": "(2)",
                "placeholder": "nilai b...",
                "correctValues": [
                  "7.5",
                  "7,5",
                  "15/2"
                ]
              },
              {
                "id": "b3",
                "label": "(3)",
                "placeholder": "nilai a...",
                "correctValues": [
                  "53.5",
                  "53,5",
                  "107/2"
                ]
              },
              {
                "id": "b4",
                "label": "(4)",
                "placeholder": "prediksi...",
                "correctValues": [
                  "83.5",
                  "83,5"
                ]
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Regresi Linier:</strong><br>\n    1. $\\bar{x} = \\frac{1+2+3+4+5}{5} = 3$, $\\bar{y} = \\frac{60+70+75+85+90}{5} = 76$.<br>\n    2. $\\sum x^2 = 55$, $\\sum xy = 60 + 140 + 225 + 340 + 450 = 1215$.<br>\n    $b = \\frac{5(1215) - 15(380)}{5(55) - 15^2} = \\frac{6075 - 5700}{275 - 225} = \\frac{375}{50} = 7,5$.<br>\n    3. $a = \\bar{y} - b\\bar{x} = 76 - 7,5(3) = 53,5$.<br>\n    4. $\\hat{y}(4) = 53,5 + 7,5(4) = 83,5$.<br>\n    <strong>Kunci Isian:</strong> (1) 3, (2) 7.5, (3) 53.5, (4) 83.5."
        },
        {
          "id": 15,
          "num": 15,
          "model": 3,
          "modelName": "Paragraf Rumpang Numerik (4 Bagian Kosong)",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Applying (Penerapan Pencacahan)",
          "konteks": "Teknologi Informasi & Akses Lab Komputer",
          "stimulusTitle": "Formasi Kode Akses Kartu Cerdas Laboratorium GIS",
          "stimulusBadge": "Permutasi & Aturan Pengisian Tempat",
          "stimulusText": "<p class=\"leading-relaxed\">Sistem kunci pintar pintu laboratorium komputer SMA GIS 2 Serpong menggunakan kartu dengan kode sandi 3 digit angka berbeda yang dipilih dari himpunan angka prima dan genap tertentu: ${2, 3, 5, 7, 8}$.</p>",
          "questionText": "Isikan bilangan yang tepat untuk melengkapi analisis variasi kode berikut:",
          "payload": {
            "clozeText": "Banyaknya variasi kode 3 angka berbeda yang dapat dibentuk tanpa syarat adalah sebanyak (1) [___] kode. Di antara variasi tersebut, banyaknya kode yang bernilai ganjil adalah (2) [___] kode. Sedangkan banyaknya kode yang bernilai genap adalah sebanyak (3) [___] kode. Peluang terpilihnya kode yang bernilai genap jika dipilih secara acak adalah sebesar (4) [___].",
            "blanks": [
              {
                "id": "b1",
                "label": "(1)",
                "placeholder": "total...",
                "correctValues": [
                  "60"
                ]
              },
              {
                "id": "b2",
                "label": "(2)",
                "placeholder": "ganjil...",
                "correctValues": [
                  "36"
                ]
              },
              {
                "id": "b3",
                "label": "(3)",
                "placeholder": "genap...",
                "correctValues": [
                  "24"
                ]
              },
              {
                "id": "b4",
                "label": "(4)",
                "placeholder": "peluang...",
                "correctValues": [
                  "0.4",
                  "0,4",
                  "2/5",
                  "24/60"
                ]
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Pencacahan:</strong><br>\n    1. Total kode: $P(5, 3) = 5 \\times 4 \\times 3 = 60$ kode.<br>\n    2. Kode ganjil: Digit akhir ${3, 5, 7}$ (3 opsi). Dua digit pertama dari 4 angka sisa: $4 \\times 3 = 12$. Total $= 12 \\times 3 = 36$ kode.<br>\n    3. Kode genap: Digit akhir ${2, 8}$ (2 opsi). Total $= 12 \\times 2 = 24$ kode.<br>\n    4. Peluang genap: $\\frac{24}{60} = \\frac{2}{5} = 0,4$.<br>\n    <strong>Kunci Isian:</strong> (1) 60, (2) 36, (3) 24, (4) 0.4."
        },
        {
          "id": 16,
          "num": 16,
          "model": 4,
          "modelName": "Sebab - Akibat Analitis",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Reasoning (Penalaran Kausalitas)",
          "konteks": "Sains & Analisis Vektor Tiga Dimensi",
          "stimulusTitle": "Teorema Trisepsi Diagonal Ruang Kubus ABCD.EFGH",
          "stimulusBadge": "Geometri Ruang: Bidang Sejajar",
          "stimulusText": "<p class=\"leading-relaxed\">Pada kubus beraturan $ABCD.EFGH$, diagonal ruang $CE$ menghubungkan dua titik sudut yang saling berhadapan. Dibuat dua bidang penampang yaitu bidang $AFH$ dan bidang $BDG$.</p>",
          "questionText": "Analisis kebenaran pernyataan dan alasan berikut, serta tentukan hubungan sebab-akibat keduanya!",
          "payload": {
            "pernyataan": "Diagonal ruang CE menembus bidang AFH dan bidang BDG secara tegak lurus serta terbagi menjadi tiga segmen garis yang sama panjang (rasio 1 : 1 : 1).",
            "alasan": "Bidang AFH dan bidang BDG merupakan dua bidang datar yang saling sejajar dan masing-masing tegak lurus terhadap vektor arah diagonal ruang CE.",
            "options": [
              {
                "id": "A",
                "text": "Pernyataan BENAR, Alasan BENAR, dan keduanya menunjukkan hubungan SEBAB - AKIBAT."
              },
              {
                "id": "B",
                "text": "Pernyataan BENAR, Alasan BENAR, tetapi keduanya TIDAK menunjukkan hubungan sebab - akibat."
              },
              {
                "id": "C",
                "text": "Pernyataan BENAR, tetapi Alasan SALAH."
              },
              {
                "id": "D",
                "text": "Pernyataan SALAH, tetapi Alasan BENAR."
              },
              {
                "id": "E",
                "text": "Pernyataan dan Alasan keduanya SALAH."
              }
            ],
            "key": "A"
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Geometris:</strong><br>\n    1. Vektor normal bidang $AFH$ dan bidang $BDG$ keduanya kolinear dengan vektor diagonal ruang $CE$. Maka kedua bidang tersebut saling sejajar dan keduanya tegak lurus terhadap garis $CE$ (Alasan BENAR).<br>\n    2. Karena saling sejajar tegak lurus, jarak dari $E$ ke bidang $AFH = \\frac{1}{3}s\\sqrt{3}$, jarak antara kedua bidang $= \\frac{1}{3}s\\sqrt{3}$, dan jarak dari bidang $BDG$ ke $C = \\frac{1}{3}s\\sqrt{3}$. Ketiga segmen bernilai sama panjang (Pernyataan BENAR).<br>\n    3. Hubungan keduanya adalah sebab-akibat langsung.<br>\n    <strong>Kunci Jawaban: A.</strong>"
        },
        {
          "id": 17,
          "num": 17,
          "model": 4,
          "modelName": "Sebab - Akibat Analitis",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Reasoning (Penalaran Analitis)",
          "konteks": "Metodologi Riset & Sains Data",
          "stimulusTitle": "Prinsip Statistika: Korelasi Linier vs Hubungan Kausalitas",
          "stimulusBadge": "Korelasi Pearson vs Kausalitas",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam sebuah studi observasional pada suatu kota pesisir, ditemukan bahwa terdapat korelasi positif yang sangat kuat ($r = +0,92$) antara tingkat penjualan es krim dan frekuensi kasus kecelakaan renang di pantai.</p>",
          "questionText": "Analisis kebenaran pernyataan dan alasan berikut, serta tentukan hubungan sebab-akibat keduanya!",
          "payload": {
            "pernyataan": "Tingginya nilai koefisien korelasi r = +0,92 secara ilmiah membuktikan bahwa meningkatnya konsumsi es krim merupakan faktor penyebab langsung (kausalitas) meningkatnya kasus kecelakaan di pantai.",
            "alasan": "Koefisien korelasi Pearson hanya mengukur derajat keeratan hubungan linier antara dua variabel numerik, tanpa membuktikan adanya hubungan sebab-akibat (kausatif) secara substantif.",
            "options": [
              {
                "id": "A",
                "text": "Pernyataan BENAR, Alasan BENAR, dan keduanya menunjukkan hubungan SEBAB - AKIBAT."
              },
              {
                "id": "B",
                "text": "Pernyataan BENAR, Alasan BENAR, tetapi keduanya TIDAK menunjukkan hubungan sebab - akibat."
              },
              {
                "id": "C",
                "text": "Pernyataan BENAR, tetapi Alasan SALAH."
              },
              {
                "id": "D",
                "text": "Pernyataan SALAH, tetapi Alasan BENAR."
              },
              {
                "id": "E",
                "text": "Pernyataan dan Alasan keduanya SALAH."
              }
            ],
            "key": "D"
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Metodologi Statistika:</strong><br>\n    1. Prinsip dasar: <em>Correlation does not imply causation</em>. Penjualan es krim dan kecelakaan renang keduanya dipengaruhi variabel pengganggu (<em>confounding variable</em>) yaitu cuaca panas/musim liburan. Menimpulkan es krim menyebabkan kecelakaan adalah sesat pikir statistik. (Pernyataan SALAH).<br>\n    2. Koefisien Pearson hanya mengukur kovariasi linier, bukan arah kausalitas eksperimental. (Alasan BENAR).<br>\n    <strong>Kunci Jawaban: D.</strong>"
        },
        {
          "id": 18,
          "num": 18,
          "model": 4,
          "modelName": "Sebab - Akibat Analitis",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Knowing (Pemahaman Teori Probabilitas)",
          "konteks": "Teori Peluang & Logika Matematika",
          "stimulusTitle": "Relasi Kejadian Saling Lepas vs Kejadian Saling Bebas",
          "stimulusBadge": "Aksioma Teori Probabilitas",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam aksioma probabilitas Kolmogorov, kejadian saling lepas (*mutually exclusive*) dan kejadian saling bebas (*independent events*) memiliki definisi formal yang sering kali disalahpahami oleh siswa.</p>",
          "questionText": "Analisis kebenaran pernyataan dan alasan berikut, serta tentukan hubungan sebab-akibat keduanya!",
          "payload": {
            "pernyataan": "Dua buah kejadian acak A dan B yang masing-masing memiliki peluang bukan nol (P(A) > 0 dan P(B) > 0) tidak mungkin berstatus saling lepas sekaligus saling bebas.",
            "alasan": "Kondisi saling lepas mensyaratkan P(A ∩ B) = 0, sedangkan kondisi saling bebas dengan peluang positif mensyaratkan P(A ∩ B) = P(A) · P(B) > 0, sehingga kedua kondisi saling kontradiktif.",
            "options": [
              {
                "id": "A",
                "text": "Pernyataan BENAR, Alasan BENAR, dan keduanya menunjukkan hubungan SEBAB - AKIBAT."
              },
              {
                "id": "B",
                "text": "Pernyataan BENAR, Alasan BENAR, tetapi keduanya TIDAK menunjukkan hubungan sebab - akibat."
              },
              {
                "id": "C",
                "text": "Pernyataan BENAR, tetapi Alasan SALAH."
              },
              {
                "id": "D",
                "text": "Pernyataan SALAH, tetapi Alasan BENAR."
              },
              {
                "id": "E",
                "text": "Pernyataan dan Alasan keduanya SALAH."
              }
            ],
            "key": "A"
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Aksioma Peluang:</strong><br>\n    1. Jika saling lepas: $P(A \\cap B) = 0$.<br>\n    2. Jika saling bebas: $P(A \\cap B) = P(A) \\times P(B)$.<br>\n    3. Karena $P(A) > 0$ dan $P(B) > 0$, maka $P(A) \\times P(B) > 0$. Nilai positif ini mustahil bernilai $0$. Kedua syarat bertolak belakang secara matematis.<br>\n    Pernyataan Benar, Alasan Benar, dan Alasan menerangkan penyebab kontradiksi secara valid.<br>\n    <strong>Kunci Jawaban: A.</strong>"
        },
        {
          "id": 19,
          "num": 19,
          "model": 4,
          "modelName": "Sebab - Akibat Analitis",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Reasoning (Penalaran Ruang)",
          "konteks": "Geometri Tiga Dimensi",
          "stimulusTitle": "Kedudukan Garis Bersilangan pada Bangun Ruang Kubus",
          "stimulusBadge": "Kedudukan Garis dalam Ruang Tiga Dimensi",
          "stimulusText": "<p class=\"leading-relaxed\">Pada kubus $ABCD.EFGH$, diperhatikan kedudukan rusuk alas $AB$ dan rusuk tegak di sudut seberang $CG$.</p>",
          "questionText": "Analisis kebenaran pernyataan dan alasan berikut, serta tentukan hubungan sebab-akibat keduanya!",
          "payload": {
            "pernyataan": "Garis AB dan garis CG pada kubus ABCD.EFGH merupakan dua garis yang saling bersilangan tegak lurus.",
            "alasan": "Garis AB dan garis CG tidak terletak pada satu bidang bersama (non-koplanar) dan arah vektor AB tegak lurus terhadap arah vektor CG.",
            "options": [
              {
                "id": "A",
                "text": "Pernyataan BENAR, Alasan BENAR, dan keduanya menunjukkan hubungan SEBAB - AKIBAT."
              },
              {
                "id": "B",
                "text": "Pernyataan BENAR, Alasan BENAR, tetapi keduanya TIDAK menunjukkan hubungan sebab - akibat."
              },
              {
                "id": "C",
                "text": "Pernyataan BENAR, tetapi Alasan SALAH."
              },
              {
                "id": "D",
                "text": "Pernyataan SALAH, tetapi Alasan BENAR."
              },
              {
                "id": "E",
                "text": "Pernyataan dan Alasan keduanya SALAH."
              }
            ],
            "key": "A"
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Geometris:</strong><br>\n    1. Dua garis bersilangan jika dan hanya jika keduanya tidak berpotongan dan tidak sejajar (tidak terletak pada satu bidang bersama). Rusuk $AB$ sejajar $CD$, dan $CG \\perp CD$, sehingga $AB \\perp CG$. (Pernyataan BENAR).<br>\n    2. Alasan menyatakan definisi dan kondisi ketegaklurusan dua garis bersilangan secara tepat. (Alasan BENAR).<br>\n    3. Keduanya berhubungan sebab-akibat.<br>\n    <strong>Kunci Jawaban: A.</strong>"
        },
        {
          "id": 20,
          "num": 20,
          "model": 4,
          "modelName": "Sebab - Akibat Analitis",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Applying (Penerapan Sifat Statistika)",
          "konteks": "Analisis Data Statistik & Transformasi Data",
          "stimulusTitle": "Pengaruh Transformasi Linier terhadap Simpangan Baku",
          "stimulusBadge": "Sifat Ukuran Penyebaran Data",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam standardisasi nilai rapor siswa, sebuah data sampel $x_i$ ditransformasikan secara linier mengikuti fungsi $y_i = 2x_i + 5$. Guru mengamati perubahan nilai ukuran simpangan baku ($S$).</p>",
          "questionText": "Analisis kebenaran pernyataan dan alasan berikut, serta tentukan hubungan sebab-akibat keduanya!",
          "payload": {
            "pernyataan": "Nilai simpangan baku baru (Sy) setelah transformasi data yi = 2xi + 5 akan menjadi tepat dua kali lipat ditambah lima dari simpangan baku semula (Sy = 2Sx + 5).",
            "alasan": "Penambahan bilangan konstan pada setiap data hanya menggeser lokasi pusat distribusi data tanpa mengubah jarak atau dispersi relatif antar data terhadap rata-ratanya.",
            "options": [
              {
                "id": "A",
                "text": "Pernyataan BENAR, Alasan BENAR, dan keduanya menunjukkan hubungan SEBAB - AKIBAT."
              },
              {
                "id": "B",
                "text": "Pernyataan BENAR, Alasan BENAR, tetapi keduanya TIDAK menunjukkan hubungan sebab - akibat."
              },
              {
                "id": "C",
                "text": "Pernyataan BENAR, tetapi Alasan SALAH."
              },
              {
                "id": "D",
                "text": "Pernyataan SALAH, tetapi Alasan BENAR."
              },
              {
                "id": "E",
                "text": "Pernyataan dan Alasan keduanya SALAH."
              }
            ],
            "key": "D"
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Sifat Penyebaran:</strong><br>\n    1. Sifat transformasi linier ukuran penyebaran (varians, simpangan baku): Jika $y = ax + b$, maka $S_y = |a| \\cdot S_x$. Di sini $S_y = 2 S_x$. Penambahan konstanta $b=5$ sama sekali tidak berpengaruh pada simpangan baku. (Pernyataan SALAH).<br>\n    2. Penambahan konstanta memang hanya menggeser rata-rata tanpa mengubah dispersi jarak antar data. (Alasan BENAR).<br>\n    <strong>Kunci Jawaban: D.</strong>"
        },
        {
          "id": 21,
          "num": 21,
          "model": 5,
          "modelName": "Pilihan Ganda Kompleks (Checkbox Multi-Select)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Reasoning (Penalaran Statistika)",
          "konteks": "Teknologi IoT & Pemantauan Perangkat Sekolah",
          "stimulusTitle": "Uji Daya Tahan Baterai Perangkat IoT Smart School",
          "stimulusBadge": "Kuartil, Outlier, & Boxplot",
          "stimulusText": "<p class=\"leading-relaxed\">Tim IT sekolah menguji ketahanan masa pakai baterai (dalam jam operasional) pada 8 unit sensor lingkungan IoT sebelum dipasang di ruang kelas:</p>\n    <div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs font-mono font-bold text-center text-slate-800 shadow-sm\">\n      110, &nbsp; 115, &nbsp; 120, &nbsp; 120, &nbsp; 125, &nbsp; 130, &nbsp; 135, &nbsp; 180 jam\n    </div>",
          "questionText": "Beri tanda centang (✓) pada setiap pernyataan di bawah ini yang bernilai BENAR! (Jawaban benar lebih dari satu)",
          "payload": {
            "statements": [
              {
                "id": "c1",
                "text": "Nilai median (Q2) dari daya tahan baterai kedelapan sensor adalah 122,5 jam.",
                "key": true
              },
              {
                "id": "c2",
                "text": "Jangkauan interkuartil (QR = Q3 - Q1) daya tahan baterai adalah tepat 15 jam.",
                "key": true
              },
              {
                "id": "c3",
                "text": "Sensor dengan daya tahan 180 jam terklasifikasi sebagai data pencilan (outlier) atas karena melebihi batas Pagar Atas (155 jam).",
                "key": true
              },
              {
                "id": "c4",
                "text": "Nilai kuartil pertama / kuartil bawah (Q1) dari data tersebut adalah tepat 120 jam.",
                "key": false
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Kuartil & Outlier:</strong><br>\n    1. Data urut: $110, 115, 120, 120, 125, 130, 135, 180$.<br>\n    2. Median $Q_2 = \\frac{120 + 125}{2} = 122,5$ jam. (Pernyataan 1 BENAR).<br>\n    3. $Q_1 = \\frac{115 + 120}{2} = 117,5$ jam (bukan 120 jam, Pernyataan 4 SALAH).<br>\n    4. $Q_3 = \\frac{130 + 135}{2} = 132,5$ jam. $QR = 132,5 - 117,5 = 15$ jam. (Pernyataan 2 BENAR).<br>\n    5. Pagar Atas $= Q_3 + 1,5(QR) = 132,5 + 22,5 = 155$ jam. Nilai $180 > 155$ adalah outlier. (Pernyataan 3 BENAR).<br>\n    <strong>Pernyataan yang Dicentang:</strong> 1, 2, dan 3."
        },
        {
          "id": 22,
          "num": 22,
          "model": 5,
          "modelName": "Pilihan Ganda Kompleks (Checkbox Multi-Select)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Applying (Penerapan Bangun Ruang)",
          "konteks": "Industri Kreatif & Kemasan Cinderamata",
          "stimulusTitle": "Kemasan Cinderamata Bidang Empat Beraturan (Regular Tetrahedron)",
          "stimulusBadge": "Geometri Tetrahedron Beraturan",
          "stimulusText": "<p class=\"leading-relaxed\">Untuk menyambut wisuda akbar siswa, sebuah kemasan cinderamata eksklusif dirancang berbentuk bidang empat beraturan (<em>regular tetrahedron</em>) $T.ABC$ dengan panjang seluruh rusuknya sama yaitu $s = 6\\sqrt{2}\\text{ cm}$. Seluruh 4 bidang pembatasnya berupa segitiga sama sisi kongruen.</p>",
          "questionText": "Beri tanda centang (✓) pada setiap pernyataan metrik berikut yang bernilai BENAR!",
          "payload": {
            "statements": [
              {
                "id": "c1",
                "text": "Luas salah satu bidang sisi segitiga sama sisi pembentuk kemasan adalah 18√3 cm².",
                "key": true
              },
              {
                "id": "c2",
                "text": "Luas seluruh permukaan karton kemasan (4 bidang sisi) adalah 72√3 cm².",
                "key": true
              },
              {
                "id": "c3",
                "text": "Tinggi tegak kemasan tetrahedron dari bidang alas ke puncak adalah 4√3 cm.",
                "key": true
              },
              {
                "id": "c4",
                "text": "Volume ruang dalam kemasan cinderamata tersebut adalah tepat 144 cm³.",
                "key": false
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Tetrahedron:</strong><br>\n    1. Rusuk $s = 6\\sqrt{2}\\text{ cm}$. Luas 1 segitiga $= \\frac{1}{4} s^2 \\sqrt{3} = \\frac{1}{4} (72) \\sqrt{3} = 18\\sqrt{3}\\text{ cm}^2$. (Pernyataan 1 BENAR).<br>\n    2. Luas Permukaan total $= 4 \\times 18\\sqrt{3} = 72\\sqrt{3}\\text{ cm}^2$. (Pernyataan 2 BENAR).<br>\n    3. Tinggi tetrahedron $h = s\\sqrt{\\frac{2}{3}} = 6\\sqrt{2} \\times \\frac{\\sqrt{6}}{3} = 4\\sqrt{3}\\text{ cm}$. (Pernyataan 3 BENAR).<br>\n    4. Volume $= \\frac{s^3\\sqrt{2}}{12} = \\frac{(6\\sqrt{2})^3 \\sqrt{2}}{12} = \\frac{216 \\times 2\\sqrt{2} \\times \\sqrt{2}}{12} = 72\\text{ cm}^3$ (bukan $144\\text{ cm}^3$, Pernyataan 4 SALAH).<br>\n    <strong>Pernyataan yang Dicentang:</strong> 1, 2, dan 3."
        },
        {
          "id": 23,
          "num": 23,
          "model": 5,
          "modelName": "Pilihan Ganda Kompleks (Checkbox Multi-Select)",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Applying (Penerapan Permutasi)",
          "konteks": "Organisasi Siswa & Protokol Rapat",
          "stimulusTitle": "Formasi Susunan Tempat Duduk Melingkar Rapat OSIS",
          "stimulusBadge": "Permutasi Siklis & Peluang",
          "stimulusText": "<p class=\"leading-relaxed\">Lima orang pengurus inti OSIS (termasuk Ketua dan Sekretaris) mengadakan rapat koordinasi dengan duduk mengelilingi sebuah meja bundar rapat pimpinan.</p>",
          "questionText": "Beri tanda centang (✓) pada setiap pernyataan kombinatorika berikut yang bernilai BENAR!",
          "payload": {
            "statements": [
              {
                "id": "c1",
                "text": "Banyaknya cara susunan duduk melingkar bebas tanpa syarat khusus adalah 24 variasi cara.",
                "key": true
              },
              {
                "id": "c2",
                "text": "Banyaknya cara susunan duduk dengan syarat Ketua dan Sekretaris selalu berdampingan adalah 12 variasi cara.",
                "key": true
              },
              {
                "id": "c3",
                "text": "Peluang Ketua dan Sekretaris duduk berdampingan jika posisi diacak bebas adalah 1/2.",
                "key": true
              },
              {
                "id": "c4",
                "text": "Jika kelima siswa duduk berjajar lurus di panggung dan Ketua-Sekretaris berdampingan, ada 120 cara susunan.",
                "key": false
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Permutasi Siklis:</strong><br>\n    1. Bebas melingkar: $(5-1)! = 4! = 24$ cara. (Pernyataan 1 BENAR).<br>\n    2. Berdampingan: gabungkan Ketua & Sekretaris jadi 1 entitas $\\implies (4-1)! \\times 2! = 6 \\times 2 = 12$ cara. (Pernyataan 2 BENAR).<br>\n    3. Peluang berdampingan: $\\frac{12}{24} = \\frac{1}{2}$. (Pernyataan 3 BENAR).<br>\n    4. Jajar lurus berdampingan: $4! \\times 2! = 48$ cara, bukan 120 cara. (Pernyataan 4 SALAH).<br>\n    <strong>Pernyataan yang Dicentang:</strong> 1, 2, dan 3."
        },
        {
          "id": 24,
          "num": 24,
          "model": 5,
          "modelName": "Pilihan Ganda Kompleks (Checkbox Multi-Select)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Knowing (Pemahaman Probabilitas)",
          "konteks": "Teori Peluang & Eksperimen Acak",
          "stimulusTitle": "Distribusi Probabilitas Pelemparan Dua Dadu Homogen",
          "stimulusBadge": "Peluang Bersama Ruang Sampel 36",
          "stimulusText": "<p class=\"leading-relaxed\">Dua buah dadu bermata enam yang seimbang dan homogen dilemparkan secara serentak satu kali. Hasil yang diamati adalah jumlah dari kedua mata dadu yang muncul pada sisi atas.</p>",
          "questionText": "Beri tanda centang (✓) pada setiap pernyataan peluang berikut yang bernilai BENAR!",
          "payload": {
            "statements": [
              {
                "id": "c1",
                "text": "Peluang muncul jumlah kedua mata dadu bernilai 7 adalah tepat 1/6.",
                "key": true
              },
              {
                "id": "c2",
                "text": "Peluang muncul jumlah kedua mata dadu bernilai minimal 10 (10, 11, atau 12) adalah 1/6.",
                "key": true
              },
              {
                "id": "c3",
                "text": "Peluang muncul kedua mata dadu bernilai kembar (angka sama) adalah 1/6.",
                "key": true
              },
              {
                "id": "c4",
                "text": "Peluang muncul jumlah kedua mata dadu berupa bilangan prima adalah tepat 1/2.",
                "key": false
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Ruang Sampel Dua Dadu:</strong><br>\n    1. Jumlah 7: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1) \\implies 6$ cara. Peluang $= \\frac{6}{36} = \\frac{1}{6}$. (Pernyataan 1 BENAR).<br>\n    2. Jumlah $\\ge 10$: $(4,6), (5,5), (5,6), (6,4), (6,5), (6,6) \\implies 6$ cara. Peluang $= \\frac{6}{36} = \\frac{1}{6}$. (Pernyataan 2 BENAR).<br>\n    3. Angka kembar: $(1,1), \\dots, (6,6) \\implies 6$ cara. Peluang $= \\frac{6}{36} = \\frac{1}{6}$. (Pernyataan 3 BENAR).<br>\n    4. Jumlah prima: 2 (1), 3 (2), 5 (4), 7 (6), 11 (2) $\\implies 1+2+4+6+2 = 15$ cara. Peluang $= \\frac{15}{36} = \\frac{5}{12} \\neq \\frac{1}{2}$. (Pernyataan 4 SALAH).<br>\n    <strong>Pernyataan yang Dicentang:</strong> 1, 2, dan 3."
        },
        {
          "id": 25,
          "num": 25,
          "model": 5,
          "modelName": "Pilihan Ganda Kompleks (Checkbox Multi-Select)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Reasoning (Penalaran Bangun Ruang)",
          "konteks": "Arsitektur & Penampang Irisan Geometri",
          "stimulusTitle": "Irisan Bidang Penampang pada Kubus ABCD.EFGH",
          "stimulusBadge": "Geometri Dimensi Tiga: Penampang Bidang",
          "stimulusText": "<p class=\"leading-relaxed\">Pada sebuah kubus beraturan $ABCD.EFGH$ dengan panjang rusuk $s = 6\\text{ cm}$, dibuat beberapa bidang datar yang memotong atau melalui titik-titik sudut tertentu kubus.</p>",
          "questionText": "Beri tanda centang (✓) pada setiap pernyataan geometri irisan berikut yang bernilai BENAR!",
          "payload": {
            "statements": [
              {
                "id": "c1",
                "text": "Penampang irisan bidang yang dibentuk oleh titik-titik A, C, dan H adalah segitiga sama sisi berukuran sisi 6√2 cm.",
                "key": true
              },
              {
                "id": "c2",
                "text": "Luas daerah penampang segitiga ACH adalah tepat 18√3 cm².",
                "key": true
              },
              {
                "id": "c3",
                "text": "Luas daerah bidang diagonal BDHF pada kubus tersebut adalah 36√2 cm².",
                "key": true
              },
              {
                "id": "c4",
                "text": "Penampang irisan bidang yang memuat titik-titik B, D, dan E berbentuk trapesium sama kaki.",
                "key": false
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Irisan Bidang:</strong><br>\n    1. Sisi segitiga $ACH$: $AC = 6\\sqrt{2}, AH = 6\\sqrt{2}, CH = 6\\sqrt{2}$. Semuanya diagonal bidang, sehingga segitiga sama sisi. (Pernyataan 1 BENAR).<br>\n    2. Luas $\\Delta ACH = \\frac{1}{4} (6\\sqrt{2})^2 \\sqrt{3} = \\frac{1}{4} (72) \\sqrt{3} = 18\\sqrt{3}\\text{ cm}^2$. (Pernyataan 2 BENAR).<br>\n    3. Bidang diagonal $BDHF$: persegi panjang berukuran $6\\sqrt{2} \\times 6 = 36\\sqrt{2}\\text{ cm}^2$. (Pernyataan 3 BENAR).<br>\n    4. Bidang $BDE$ melalui diagonal bidang $BD = 6\\sqrt{2}, BE = 6\\sqrt{2}, DE = 6\\sqrt{2}$ berbentuk segitiga sama sisi, bukan trapesium. (Pernyataan 4 SALAH).<br>\n    <strong>Pernyataan yang Dicentang:</strong> 1, 2, dan 3."
        }
      ]
    },
    {
      "id": "GLADI_02",
      "code": "SIMULASI-02",
      "title": "Drilling Asesmen Nasional TKA & Literasi Sains Gelombang 2",
      "subtitle": "Bank Soal HOTS & Pemantapan Penalaran Asesmen Nasional • SMA GIS 2 Serpong",
      "targetDate": "19 - 25 Oktober 2026",
      "durationMinutes": 75,
      "totalQuestions": 25,
      "kategoriLevel": "Fase F (Kelas XII SMA)",
      "questions": [
        {
          "id": 26,
          "num": 1,
          "model": 1,
          "modelName": "Pernyataan Benar / Salah (Tabel 4 Baris)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Applying (Penerapan Statistika)",
          "konteks": "Pendidikan & Evaluasi Rombel Belajar",
          "stimulusTitle": "Analisis Komparatif Skor Rata-rata Try Out TKA Empat Rombel",
          "stimulusBadge": "Statistika: Pemusatan & Penyebaran",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam rangka audit persiapan Gladi Bersih ANBK, koordinator kurikulum menganalisis skor rata-rata try out numerasi dari empat rombel belajar kelas XII:</p>\n    <div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs font-mono font-bold text-center text-slate-800 shadow-sm\">\n      12 F.1: 75 poin, &nbsp; 12 F.2: 80 poin, &nbsp; 12 F.3: 85 poin, &nbsp; 12 F.4: 90 poin\n    </div>",
          "questionText": "Tentukan status kebenaran (BENAR atau SALAH) untuk setiap analisis komparatif berikut!",
          "payload": {
            "rows": [
              {
                "id": "r1",
                "statement": "Rata-rata (mean) keseluruhan skor dari keempat rombel adalah tepat 82,5 poin.",
                "key": "B",
                "bahas": "Mean = (75 + 80 + 85 + 90) / 4 = 330 / 4 = 82,5 poin. (BENAR)"
              },
              {
                "id": "r2",
                "statement": "Simpangan rata-rata (SR) dari skor keempat rombel bernilai tepat 5,0 poin.",
                "key": "B",
                "bahas": "Deviasi: |75-82,5|=7,5; |80-82,5|=2,5; |85-82,5|=2,5; |90-82,5|=7,5. Total = 20. SR = 20 / 4 = 5,0 poin. (BENAR)"
              },
              {
                "id": "r3",
                "statement": "Nilai median skor keempat rombel bernilai sama persis dengan nilai rata-rata hitung.",
                "key": "B",
                "bahas": "Median = (80 + 85) / 2 = 82,5 poin. Nilai ini sama dengan mean (82,5). (BENAR)"
              },
              {
                "id": "r4",
                "statement": "Jangkauan (range) selisih nilai rombel tertinggi dan terendah melebihi 20 poin.",
                "key": "S",
                "bahas": "Range = 90 - 75 = 15 poin. Nilai ini tidak melebihi 20 poin. (SALAH)"
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Statistika:</strong><br>\n    1. <em>Mean:</em> $\\frac{75 + 80 + 85 + 90}{4} = \\frac{330}{4} = 82,5$ poin.<br>\n    2. <em>Simpangan Rata-rata ($SR$):</em> $\\frac{7,5 + 2,5 + 2,5 + 7,5}{4} = \\frac{20}{4} = 5,0$ poin.<br>\n    3. <em>Median:</em> $\\frac{80 + 85}{2} = 82,5$ poin $= \\text{Mean}$.<br>\n    4. <em>Range:</em> $90 - 75 = 15 \\le 20$ poin.<br>\n    <strong>Kunci Jawaban:</strong> B - B - B - S."
        },
        {
          "id": 27,
          "num": 2,
          "model": 1,
          "modelName": "Pernyataan Benar / Salah (Tabel 4 Baris)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Applying (Penerapan Dimensi Tiga)",
          "konteks": "Teknik Panggung & Tata Cahaya Seni",
          "stimulusTitle": "Instalasi Lampu Sorot Panggung Seni & Geometri Kubus",
          "stimulusBadge": "Geometri Dimensi Tiga: Kubus ABCD.EFGH",
          "stimulusText": "<p class=\"leading-relaxed\">Sebuah panggung pementasan seni siswa dimodelkan sebagai kubus beraturan $ABCD.EFGH$ dengan panjang rusuk $8\\text{ meter}$. Sebuah lampu sorot utama dipasang pada titik sudut atap $H$. Titik acuan di lantai dasar adalah persegi $ABCD$.</p>",
          "questionText": "Tentukan status kebenaran (BENAR atau SALAH) untuk setiap analisis posisi sorot cahaya berikut!",
          "payload": {
            "rows": [
              {
                "id": "r1",
                "statement": "Jarak langsung lampu sorot di titik H ke titik sudut lantai B (diagonal ruang HB) adalah 8√3 meter.",
                "key": "B",
                "bahas": "Diagonal ruang kubus dengan s=8 m adalah s√3 = 8√3 meter. (BENAR)"
              },
              {
                "id": "r2",
                "statement": "Jarak lampu sorot di H ke titik pusat lantai dasar P (titik potong AC dan BD) adalah 4√6 meter.",
                "key": "B",
                "bahas": "Proyeksi H ke lantai adalah D. DP = 1/2 s√2 = 4√2 m. HP = √(HD² + DP²) = √(8² + (4√2)²) = √(64 + 32) = √96 = 4√6 meter. (BENAR)"
              },
              {
                "id": "r3",
                "statement": "Jarak lampu sorot di H ke garis tepi lantai AB adalah 8√2 meter.",
                "key": "B",
                "bahas": "Garis AB tegak lurus bidang ADHE di titik A. Jarak H ke AB adalah panjang ruas garis HA = s√2 = 8√2 meter. (BENAR)"
              },
              {
                "id": "r4",
                "statement": "Jarak terpendek dari lampu sorot H ke garis diagonal bidang lantai AC adalah tepat 8 meter.",
                "key": "S",
                "bahas": "Jarak H ke garis AC adalah ruas garis HP = 4√6 meter (sekitar 9,8 m), bukan 8 meter. (SALAH)"
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Geometris:</strong><br>\n    1. Diagonal ruang $HB = 8\\sqrt{3}\\text{ m}$.<br>\n    2. Jarak $H$ ke pusat lantai $P$: $\\sqrt{8^2 + (4\\sqrt{2})^2} = \\sqrt{96} = 4\\sqrt{6}\\text{ m}$.<br>\n    3. Jarak $H$ ke garis $AB$: $HA = 8\\sqrt{2}\\text{ m}$.<br>\n    4. Jarak $H$ ke garis $AC$: $HP = 4\\sqrt{6}\\text{ m} \\neq 8\\text{ m}$.<br>\n    <strong>Kunci Jawaban:</strong> B - B - B - S."
        },
        {
          "id": 28,
          "num": 3,
          "model": 1,
          "modelName": "Pernyataan Benar / Salah (Tabel 4 Baris)",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Knowing (Pemahaman Barisan & Deret)",
          "konteks": "Kewirausahaan Siswa & Produk Kreatif",
          "stimulusTitle": "Pertumbuhan Produksi Kerajinan Bambu Ramah Lingkungan",
          "stimulusBadge": "Pola Bilangan & Deret Aritmetika",
          "stimulusText": "<p class=\"leading-relaxed\">Unit kewirausahaan siswa SMA GIS 2 memproduksi suvenir anyaman bambu ramah lingkungan. Pada bulan pertama diproduksi 100 unit. Karena meningkatnya pesanan, produksi ditambah secara tetap sebanyak 20 unit setiap bulan berikutnya.</p>",
          "questionText": "Tentukan status kebenaran (BENAR atau SALAH) untuk setiap analisis produksi berikut!",
          "payload": {
            "rows": [
              {
                "id": "r1",
                "statement": "Banyaknya anyaman bambu yang diproduksi pada bulan ke-6 adalah tepat 200 unit.",
                "key": "B",
                "bahas": "U6 = a + 5b = 100 + 5(20) = 200 unit. (BENAR)"
              },
              {
                "id": "r2",
                "statement": "Jumlah total produksi kumulatif selama 6 bulan pertama adalah 900 unit suvenir.",
                "key": "B",
                "bahas": "S6 = 6/2 × (100 + 200) = 3 × 300 = 900 unit. (BENAR)"
              },
              {
                "id": "r3",
                "statement": "Rata-rata produksi suvenir per bulan selama 6 bulan pertama adalah 150 unit.",
                "key": "B",
                "bahas": "Rata-rata = S6 / 6 = 900 / 6 = 150 unit per bulan. (BENAR)"
              },
              {
                "id": "r4",
                "statement": "Peningkatan produksi pada bulan ke-6 dibandingkan bulan pertama mencapai lebih dari 150%.",
                "key": "S",
                "bahas": "Persentase kenaikan = (200 - 100) / 100 × 100% = 100%. Nilai ini tidak melebihi 150%. (SALAH)"
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Deret Aritmetika:</strong><br>\n    1. $U_6 = 100 + 5(20) = 200$ unit.<br>\n    2. $S_6 = \\frac{6}{2}(100 + 200) = 900$ unit.<br>\n    3. Rata-rata $= \\frac{900}{6} = 150$ unit.<br>\n    4. Kenaikan $= 100\\% \\le 150\\%$.<br>\n    <strong>Kunci Jawaban:</strong> B - B - B - S."
        },
        {
          "id": 29,
          "num": 4,
          "model": 1,
          "modelName": "Pernyataan Benar / Salah (Tabel 4 Baris)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Applying (Penerapan Peluang Populasi)",
          "konteks": "Ekologi Lingkungan & Konservasi Alam",
          "stimulusTitle": "Estimasi Populasi Ikan Waduk dengan Metode Mark-Recapture",
          "stimulusBadge": "Peluang & Rasio Lincoln-Petersen",
          "stimulusText": "<p class=\"leading-relaxed\">Klub Pecinta Lingkungan SMA GIS 2 memperkirakan populasi ikan nila di danau buatan menggunakan teknik penangkapan kembali bertanda (<em>mark-recapture</em>). Sebanyak $M = 200$ ekor ikan ditangkap pertama kali, ditandai dengan gelang sirip khusus, lalu dilepasliarkan kembali.</p>\n    <p class=\"leading-relaxed\">Seminggu kemudian, ditangkap sampel kedua sebanyak $C = 150$ ekor ikan, dan ditemukan $R = 15$ ekor di antaranya memiliki tanda gelang sirip.</p>",
          "questionText": "Tentukan status kebenaran (BENAR atau SALAH) untuk setiap analisis populasi berikut!",
          "payload": {
            "rows": [
              {
                "id": "r1",
                "statement": "Proporsi ikan bertanda yang tertangkap pada penangkapan kedua adalah tepat 10%.",
                "key": "B",
                "bahas": "Proporsi = 15 / 150 = 0,10 = 10%. (BENAR)"
              },
              {
                "id": "r2",
                "statement": "Estimasi total populasi ikan nila di danau buatan tersebut adalah 2.000 ekor.",
                "key": "B",
                "bahas": "N = (M × C) / R = (200 × 150) / 15 = 30.000 / 15 = 2.000 ekor. (BENAR)"
              },
              {
                "id": "r3",
                "statement": "Jika pada sampel kedua tertangkap 30 ekor ikan bertanda, estimasi populasi danau menjadi 1.000 ekor.",
                "key": "B",
                "bahas": "N baru = (200 × 150) / 30 = 30.000 / 30 = 1.000 ekor. (BENAR)"
              },
              {
                "id": "r4",
                "statement": "Peluang seekor ikan yang ditangkap pada sampel kedua memiliki tanda melebihi 25%.",
                "key": "S",
                "bahas": "Peluang tertangkap bertanda pada sampel kedua adalah 15/150 = 10%, yang jauh lebih kecil dari 25%. (SALAH)"
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Estimasi Populasi:</strong><br>\n    1. Proporsi sampel: $\\frac{15}{150} = 10\\%$.<br>\n    2. Estimasi populasi $\\hat{N} = \\frac{200 \\times 150}{15} = 2.000$ ekor.<br>\n    3. Jika $R=30$: $\\hat{N} = \\frac{200 \\times 150}{30} = 1.000$ ekor.<br>\n    4. Peluang $= 10\\% < 25\\%$.<br>\n    <strong>Kunci Jawaban:</strong> B - B - B - S."
        },
        {
          "id": 30,
          "num": 5,
          "model": 1,
          "modelName": "Pernyataan Benar / Salah (Tabel 4 Baris)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Reasoning (Penalaran Bangun Ruang)",
          "konteks": "Arsitektur Gazebo & Taman Sekolah",
          "stimulusTitle": "Desain Konstruksi Menara Gazebo Prisma Segienam Beraturan",
          "stimulusBadge": "Geometri Dimensi Tiga: Prisma Segienam",
          "stimulusText": "<p class=\"leading-relaxed\">Sebuah menara pantau taman sekolah dirancang berbentuk prisma tegak segienam beraturan. Panjang setiap rusuk alas segienam adalah $a = 4\\text{ meter}$ dan tinggi tegak tiang kolom prisma adalah $t = 6\\text{ meter}$.</p>",
          "questionText": "Tentukan status kebenaran (BENAR atau SALAH) untuk setiap analisis metrik prisma berikut!",
          "payload": {
            "rows": [
              {
                "id": "r1",
                "statement": "Luas lantai dasar prisma berbentuk segienam beraturan adalah tepat 24√3 meter persegi.",
                "key": "B",
                "bahas": "Segienam terdiri atas 6 segitiga sama sisi (s=4 m): 6 × (1/4 × 4² × √3) = 6 × 4√3 = 24√3 m². (BENAR)"
              },
              {
                "id": "r2",
                "statement": "Luas seluruh bidang dinding tegak pembatas menara adalah 144 meter persegi.",
                "key": "B",
                "bahas": "Keliling alas = 6 × 4 = 24 m. Luas selimut = 24 × 6 = 144 m². (BENAR)"
              },
              {
                "id": "r3",
                "statement": "Volume kapasitas ruang dalam menara gazebo tersebut adalah 144√3 meter kubik.",
                "key": "B",
                "bahas": "Volume = Luas alas × Tinggi = 24√3 × 6 = 144√3 m³. (BENAR)"
              },
              {
                "id": "r4",
                "statement": "Jarak bentang terjauh antara dua titik sudut pada lantai dasar segienam adalah 4 meter.",
                "key": "S",
                "bahas": "Jarak bentang terjauh adalah diagonal utama segienam = 2a = 2 × 4 = 8 meter, bukan 4 meter. (SALAH)"
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Metrik Prisma:</strong><br>\n    1. Luas alas segienam $= 6 \\times \\frac{\\sqrt{3}}{4}(4^2) = 24\\sqrt{3}\\text{ m}^2$.<br>\n    2. Luas selimut $= (6 \\times 4) \\times 6 = 144\\text{ m}^2$.<br>\n    3. Volume $= 24\\sqrt{3} \\times 6 = 144\\sqrt{3}\\text{ m}^3$.<br>\n    4. Bentang terjauh $= 2 \\times 4 = 8\\text{ m} \\neq 4\\text{ m}$.<br>\n    <strong>Kunci Jawaban:</strong> B - B - B - S."
        },
        {
          "id": 31,
          "num": 6,
          "model": 2,
          "modelName": "Menjodohkan (Premis Kolom A ↔ Respons Kolom B)",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Applying (Penerapan Kaidah Pencacahan)",
          "konteks": "Pendidikan & Seleksi Lomba Sains",
          "stimulusTitle": "Seleksi Delegasi Lomba Sains Multi-Kategori GIS 2",
          "stimulusBadge": "Kombinatorika & Aturan Perkalian",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam pembentukan tim olimpiade, terdapat 5 siswa bidang Matematika, 4 siswa bidang Fisika, dan 3 siswa bidang Informatika yang lolos seleksi berkas (total 12 siswa berprestasi).</p>",
          "questionText": "Pasangkan deskripsi susunan delegasi di Kolom A dengan banyaknya cara pemilihan di Kolom B!",
          "payload": {
            "columnA": [
              {
                "id": "A1",
                "text": "Banyak cara memilih 1 wakil Matematika dan 1 wakil Fisika"
              },
              {
                "id": "A2",
                "text": "Banyak cara memilih 1 wakil dari masing-masing ketiga bidang ilmu"
              },
              {
                "id": "A3",
                "text": "Banyak cara memilih 2 siswa bebas dari seluruh 12 siswa tanpa syarat bidang"
              },
              {
                "id": "A4",
                "text": "Banyak cara memilih 2 siswa yang keduanya harus berasal dari bidang Matematika"
              }
            ],
            "columnB": [
              {
                "id": "B1",
                "text": "20 cara"
              },
              {
                "id": "B2",
                "text": "60 cara"
              },
              {
                "id": "B3",
                "text": "66 cara"
              },
              {
                "id": "B4",
                "text": "10 cara"
              },
              {
                "id": "B5",
                "text": "120 cara"
              },
              {
                "id": "B6",
                "text": "12 cara"
              },
              {
                "id": "B7",
                "text": "15 cara"
              }
            ],
            "correctPairs": {
              "A1": "B1",
              "A2": "B2",
              "A3": "B3",
              "A4": "B4"
            }
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Kaidah Pencacahan:</strong><br>\n    1. 1 Mat & 1 Fis: $5 \\times 4 = 20$ cara.<br>\n    2. 1 Mat, 1 Fis, 1 Info: $5 \\times 4 \\times 3 = 60$ cara.<br>\n    3. 2 Siswa Bebas: $C(12, 2) = \\frac{12 \\times 11}{2} = 66$ cara.<br>\n    4. 2 Siswa Matematika: $C(5, 2) = 10$ cara.<br>\n    <strong>Pasangan Benar:</strong> A1 ↔ B1, A2 ↔ B2, A3 ↔ B3, A4 ↔ B4."
        },
        {
          "id": 32,
          "num": 7,
          "model": 2,
          "modelName": "Menjodohkan (Premis Kolom A ↔ Respons Kolom B)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Reasoning (Penalaran Geometris)",
          "konteks": "Ekowisata & Tenda Berkemah Glamping",
          "stimulusTitle": "Desain Tenda Glamping Piramida Segitiga Beraturan T.ABC",
          "stimulusBadge": "Geometri Dimensi Tiga: Tetrahedron",
          "stimulusText": "<p class=\"leading-relaxed\">Sebuah tenda perkemahan modern dirancang berbentuk limas segitiga beraturan (bidang empat beraturan) $T.ABC$ dengan panjang setiap rusuk kawat penyangga adalah $s = 6\\text{ meter}$. Bidang lantai alas $ABC$ dan ketiga dinding berupa segitiga sama sisi.</p>",
          "questionText": "Pasangkan ukuran besaran geometris di Kolom A dengan nilai eksak di Kolom B!",
          "payload": {
            "columnA": [
              {
                "id": "A1",
                "text": "Panjang garis tinggi bidang segitiga alas sama sisi ABC"
              },
              {
                "id": "A2",
                "text": "Tinggi tegak puncak tenda T dari bidang lantai dasar ABC"
              },
              {
                "id": "A3",
                "text": "Luas salah satu bidang sisi kain dinding penutup tenda"
              },
              {
                "id": "A4",
                "text": "Luas seluruh permukaan ketiga dinding kain pembatas tenda"
              }
            ],
            "columnB": [
              {
                "id": "B1",
                "text": "3√3 meter"
              },
              {
                "id": "B2",
                "text": "2√6 meter"
              },
              {
                "id": "B3",
                "text": "9√3 meter persegi"
              },
              {
                "id": "B4",
                "text": "27√3 meter persegi"
              },
              {
                "id": "B5",
                "text": "36 meter persegi"
              },
              {
                "id": "B6",
                "text": "6√2 meter"
              },
              {
                "id": "B7",
                "text": "18√3 meter persegi"
              }
            ],
            "correctPairs": {
              "A1": "B1",
              "A2": "B2",
              "A3": "B3",
              "A4": "B4"
            }
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Metrik Tetrahedron:</strong><br>\n    1. Tinggi segitiga alas sama sisi: $\\frac{1}{2} s\\sqrt{3} = 3\\sqrt{3}\\text{ m}$.<br>\n    2. Tinggi puncak tetrahedron: $s\\sqrt{\\frac{2}{3}} = 6 \\times \\frac{\\sqrt{6}}{3} = 2\\sqrt{6}\\text{ m}$.<br>\n    3. Luas 1 bidang dinding: $\\frac{1}{4} (6^2)\\sqrt{3} = 9\\sqrt{3}\\text{ m}^2$.<br>\n    4. Luas 3 bidang dinding: $3 \\times 9\\sqrt{3} = 27\\sqrt{3}\\text{ m}^2$.<br>\n    <strong>Pasangan Benar:</strong> A1 ↔ B1, A2 ↔ B2, A3 ↔ B3, A4 ↔ B4."
        },
        {
          "id": 33,
          "num": 8,
          "model": 2,
          "modelName": "Menjodohkan (Premis Kolom A ↔ Respons Kolom B)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Knowing (Pemahaman Ukuran Letak)",
          "konteks": "Statistika Deskriptif Hasil Belajar",
          "stimulusTitle": "Karakteristik Ukuran Letak Data Nilai Ujian Siswa",
          "stimulusBadge": "Kuartil & Jangkauan Data Terurut",
          "stimulusText": "<p class=\"leading-relaxed\">Data nilai asesmen matematika dari 10 siswa berurutan adalah sebagai berikut:</p>\n    <div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs font-mono font-bold text-center text-slate-800 shadow-sm\">\n      50, &nbsp; 60, &nbsp; 65, &nbsp; 70, &nbsp; 75, &nbsp; 80, &nbsp; 85, &nbsp; 90, &nbsp; 95, &nbsp; 100\n    </div>",
          "questionText": "Pasangkan ukuran statistik di Kolom A dengan nilai numerik yang tepat di Kolom B!",
          "payload": {
            "columnA": [
              {
                "id": "A1",
                "text": "Jangkauan nilai data (Range)"
              },
              {
                "id": "A2",
                "text": "Nilai Kuartil Bawah (Q1)"
              },
              {
                "id": "A3",
                "text": "Nilai Median / Kuartil Tengah (Q2)"
              },
              {
                "id": "A4",
                "text": "Nilai Kuartil Atas (Q3)"
              }
            ],
            "columnB": [
              {
                "id": "B1",
                "text": "50"
              },
              {
                "id": "B2",
                "text": "65"
              },
              {
                "id": "B3",
                "text": "77,5"
              },
              {
                "id": "B4",
                "text": "90"
              },
              {
                "id": "B5",
                "text": "25"
              },
              {
                "id": "B6",
                "text": "80"
              },
              {
                "id": "B7",
                "text": "100"
              }
            ],
            "correctPairs": {
              "A1": "B1",
              "A2": "B2",
              "A3": "B3",
              "A4": "B4"
            }
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Kuartil:</strong><br>\n    1. Range $= 100 - 50 = 50$.<br>\n    2. Data 10 observasi terurut: $Q_1 = X_3 = 65$.<br>\n    3. Median $Q_2 = \\frac{75 + 80}{2} = 77,5$.<br>\n    4. $Q_3 = X_8 = 90$.<br>\n    <strong>Pasangan Benar:</strong> A1 ↔ B1, A2 ↔ B2, A3 ↔ B3, A4 ↔ B4."
        },
        {
          "id": 34,
          "num": 9,
          "model": 2,
          "modelName": "Menjodohkan (Premis Kolom A ↔ Respons Kolom B)",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Applying (Penerapan Kombinatorika)",
          "konteks": "Teknologi Informasi & Keamanan Sandi",
          "stimulusTitle": "Sistem Pembuatan Sandi Akun E-Learning Sekolah",
          "stimulusBadge": "Aturan Pengisian Tempat (Filling Slots)",
          "stimulusText": "<p class=\"leading-relaxed\">Setiap siswa membuat sandi 4 karakter untuk portal e-learning dengan format: <strong>2 huruf kapital</strong> diikuti oleh <strong>2 digit angka</strong>. Dua huruf dipilih dari himpunan ${A, B, C}$ (huruf boleh berulang). Dua angka dipilih dari himpunan ${1, 2, 3, 4}$ (angka tidak boleh berulang).</p>",
          "questionText": "Pasangkan ketentuan sandi di Kolom A dengan banyaknya variasi kombinasi di Kolom B!",
          "payload": {
            "columnA": [
              {
                "id": "A1",
                "text": "Banyak variasi susunan 2 huruf pertama (boleh berulang)"
              },
              {
                "id": "A2",
                "text": "Banyak variasi susunan 2 digit angka terakhir (tidak berulang)"
              },
              {
                "id": "A3",
                "text": "Total seluruh kemungkinan sandi lengkap yang dapat dibentuk"
              },
              {
                "id": "A4",
                "text": "Banyak kemungkinan sandi jika kedua angka harus sama-sama ganjil {1, 3}"
              }
            ],
            "columnB": [
              {
                "id": "B1",
                "text": "9 variasi"
              },
              {
                "id": "B2",
                "text": "12 variasi"
              },
              {
                "id": "B3",
                "text": "108 variasi"
              },
              {
                "id": "B4",
                "text": "18 variasi"
              },
              {
                "id": "B5",
                "text": "144 variasi"
              },
              {
                "id": "B6",
                "text": "24 variasi"
              },
              {
                "id": "B7",
                "text": "36 variasi"
              }
            ],
            "correctPairs": {
              "A1": "B1",
              "A2": "B2",
              "A3": "B3",
              "A4": "B4"
            }
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Pengisian Tempat:</strong><br>\n    1. Dua huruf (boleh ulang): $3 \\times 3 = 9$ variasi.<br>\n    2. Dua angka (tanpa ulang): $4 \\times 3 = 12$ variasi.<br>\n    3. Total sandi lengkap: $9 \\times 12 = 108$ variasi.<br>\n    4. Angka ganjil ${1, 3}$ tanpa ulang: $2 \\times 1 = 2$ variasi angka. Total $= 9 \\times 2 = 18$ variasi.<br>\n    <strong>Pasangan Benar:</strong> A1 ↔ B1, A2 ↔ B2, A3 ↔ B3, A4 ↔ B4."
        },
        {
          "id": 35,
          "num": 10,
          "model": 2,
          "modelName": "Menjodohkan (Premis Kolom A ↔ Respons Kolom B)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Applying (Penerapan Jarak Dimensi Tiga)",
          "konteks": "Geometri Ruang Kubus",
          "stimulusTitle": "Metrik Garis dan Bidang pada Kubus ABCD.EFGH",
          "stimulusBadge": "Dimensi Tiga: Panjang Rusuk 12 cm",
          "stimulusText": "<p class=\"leading-relaxed\">Diberikan kubus beraturan $ABCD.EFGH$ dengan panjang setiap rusuknya $s = 12\\text{ cm}$. Titik $O$ adalah titik perpotongan diagonal bidang alas $AC$ dan $BD$.</p>",
          "questionText": "Pasangkan unsur jarak geometris di Kolom A dengan nilai eksak di Kolom B!",
          "payload": {
            "columnA": [
              {
                "id": "A1",
                "text": "Jarak titik sudut A ke garis diagonal bidang alas BD"
              },
              {
                "id": "A2",
                "text": "Jarak titik sudut puncak E ke garis diagonal bidang alas BD"
              },
              {
                "id": "A3",
                "text": "Jarak titik sudut B ke garis diagonal ruang kubus AG"
              },
              {
                "id": "A4",
                "text": "Jarak titik sudut C ke bidang diagonal BDG"
              }
            ],
            "columnB": [
              {
                "id": "B1",
                "text": "6√2 cm"
              },
              {
                "id": "B2",
                "text": "6√6 cm"
              },
              {
                "id": "B3",
                "text": "4√6 cm"
              },
              {
                "id": "B4",
                "text": "4√3 cm"
              },
              {
                "id": "B5",
                "text": "12√2 cm"
              },
              {
                "id": "B6",
                "text": "12√3 cm"
              },
              {
                "id": "B7",
                "text": "8√3 cm"
              }
            ],
            "correctPairs": {
              "A1": "B1",
              "A2": "B2",
              "A3": "B3",
              "A4": "B4"
            }
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Metrik Kubus:</strong><br>\n    1. Jarak $A$ ke $BD = \\frac{1}{2} s\\sqrt{2} = 6\\sqrt{2}\\text{ cm}$.<br>\n    2. Jarak $E$ ke $BD$: ruas garis $EO = \\sqrt{AE^2 + AO^2} = \\sqrt{12^2 + (6\\sqrt{2})^2} = \\sqrt{144 + 72} = \\sqrt{216} = 6\\sqrt{6}\\text{ cm}$.<br>\n    3. Jarak $B$ ke $AG = \\frac{s\\sqrt{6}}{3} = \\frac{12\\sqrt{6}}{3} = 4\\sqrt{6}\\text{ cm}$.<br>\n    4. Jarak $C$ ke bidang $BDG = \\frac{1}{3} s\\sqrt{3} = 4\\sqrt{3}\\text{ cm}$.<br>\n    <strong>Pasangan Benar:</strong> A1 ↔ B1, A2 ↔ B2, A3 ↔ B3, A4 ↔ B4."
        },
        {
          "id": 36,
          "num": 11,
          "model": 3,
          "modelName": "Paragraf Rumpang Numerik (4 Bagian Kosong)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Knowing (Pemahaman Dispersi)",
          "konteks": "Ekonomi Syariah & Investasi Emas",
          "stimulusTitle": "Tren Fluktuasi Harga Logam Mulia Investasi Syariah",
          "stimulusBadge": "Statistika Dispersi: Rataan & Varians",
          "stimulusText": "<p class=\"leading-relaxed\">Catatan harga beli emas murni batangan (dalam ratus ribu rupiah per gram) selama 4 bulan berturut-turut tercatat sebagai berikut:</p>\n    <div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs font-mono font-bold text-center text-slate-800 shadow-sm\">\n      10, &nbsp; 12, &nbsp; 14, &nbsp; 16 &nbsp; (ratus ribu rupiah)\n    </div>",
          "questionText": "Lengkapilah analisis statistika deskriptif pada paragraf berikut dengan bilangan yang tepat:",
          "payload": {
            "clozeText": "Rata-rata hitung (mean) harga emas batangan selama 4 bulan tersebut adalah (1) [___] ratus ribu rupiah per gram. Jangkauan selisih harga tertinggi dan terendah bernilai (2) [___] ratus ribu rupiah. Nilai simpangan rata-rata (SR) harga emas adalah sebesar (3) [___] ratus ribu rupiah, dan varians populasi dari data tersebut adalah (4) [___].",
            "blanks": [
              {
                "id": "b1",
                "label": "(1)",
                "placeholder": "mean...",
                "correctValues": [
                  "13",
                  "13.0"
                ]
              },
              {
                "id": "b2",
                "label": "(2)",
                "placeholder": "range...",
                "correctValues": [
                  "6",
                  "6.0"
                ]
              },
              {
                "id": "b3",
                "label": "(3)",
                "placeholder": "SR...",
                "correctValues": [
                  "2",
                  "2.0"
                ]
              },
              {
                "id": "b4",
                "label": "(4)",
                "placeholder": "varians...",
                "correctValues": [
                  "5",
                  "5.0"
                ]
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Statistika:</strong><br>\n    1. Mean $= \\frac{10+12+14+16}{4} = \\frac{52}{4} = 13$.<br>\n    2. Range $= 16 - 10 = 6$.<br>\n    3. Simpangan rata-rata: $\\frac{|10-13| + |12-13| + |14-13| + |16-13|}{4} = \\frac{3+1+1+3}{4} = 2$.<br>\n    4. Varians $\\sigma^2 = \\frac{3^2 + 1^2 + 1^2 + 3^2}{4} = \\frac{9+1+1+9}{4} = 5$.<br>\n    <strong>Kunci Isian:</strong> (1) 13, (2) 6, (3) 2, (4) 5."
        },
        {
          "id": 37,
          "num": 12,
          "model": 3,
          "modelName": "Paragraf Rumpang Numerik (4 Bagian Kosong)",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Applying (Penerapan Permutasi)",
          "konteks": "Linguistik & Kode Anagram Kata",
          "stimulusTitle": "Analisis Anagram & Permutasi Kata 'KOLABORASI'",
          "stimulusBadge": "Permutasi dengan Unsur yang Sama",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam kegiatan literasi bahasa, siswa menganalisis susunan huruf dari kata bermakna positif: <strong>KOLABORASI</strong>.</p>",
          "questionText": "Isikan angka yang tepat untuk melengkapi analisis permutasi kata tersebut:",
          "payload": {
            "clozeText": "Jumlah total huruf pada kata KOLABORASI adalah sebanyak (1) [___] huruf. Di antara huruf tersebut, terdapat (2) [___] jenis huruf yang masing-masing berulang sebanyak 2 kali (yaitu huruf O dan A). Total variasi susunan kata (anagram) berbeda yang dapat dibentuk dari seluruh huruf tersebut adalah (3) [___] susunan. Jika susunan kata disyaratkan harus diawali dengan huruf K dan diakhiri dengan huruf I, maka terdapat sebanyak (4) [___] susunan kata berbeda.",
            "blanks": [
              {
                "id": "b1",
                "label": "(1)",
                "placeholder": "jumlah huruf...",
                "correctValues": [
                  "10"
                ]
              },
              {
                "id": "b2",
                "label": "(2)",
                "placeholder": "huruf ulang...",
                "correctValues": [
                  "2"
                ]
              },
              {
                "id": "b3",
                "label": "(3)",
                "placeholder": "total susunan...",
                "correctValues": [
                  "907200",
                  "907.200"
                ]
              },
              {
                "id": "b4",
                "label": "(4)",
                "placeholder": "syarat awal akhir...",
                "correctValues": [
                  "10080",
                  "10.080"
                ]
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Permutasi Unsur Sama:</strong><br>\n    1. Total huruf: 10 huruf (K, O, L, A, B, O, R, A, S, I).<br>\n    2. Huruf berulang: O muncul 2 kali, A muncul 2 kali (ada 2 jenis huruf).<br>\n    3. Anagram total: $\\frac{10!}{2! \\times 2!} = \\frac{3.628.800}{4} = 907.200$ susunan.<br>\n    4. Diawali K diakhiri I: sisa 8 huruf di tengah dengan O:2 dan A:2 $\\implies \\frac{8!}{2! \\times 2!} = \\frac{40.320}{4} = 10.080$ susunan.<br>\n    <strong>Kunci Isian:</strong> (1) 10, (2) 2, (3) 907200, (4) 10080."
        },
        {
          "id": 38,
          "num": 13,
          "model": 3,
          "modelName": "Paragraf Rumpang Numerik (4 Bagian Kosong)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Applying (Penerapan Volume & Debit)",
          "konteks": "Teknik Lingkungan & Bak Penampungan Air",
          "stimulusTitle": "Volume Air pada Bak Penampungan Bentuk Prisma Trapesium",
          "stimulusBadge": "Geometri Pengukuran & Kapasitas",
          "stimulusText": "<p class=\"leading-relaxed\">Sebuah bak penampungan air hujan berbentuk prisma tegak dengan penampang alas trapesium sama kaki. Panjang sisi sejajar alas trapesium adalah 4 meter (atas) dan 2 meter (bawah), dengan tinggi trapesium 1,5 meter. Panjang membujur bak penampungan adalah 10 meter.</p>",
          "questionText": "Isikan nilai numerik pada bagian rumpang paragraf berikut:",
          "payload": {
            "clozeText": "Luas bidang penampang trapesium bak tersebut adalah sebesar (1) [___] meter persegi. Kapasitas volume total tampungan bak air ketika terisi penuh adalah (2) [___] meter kubik. Jika saat ini air di dalam bak baru terisi tepat separuh kapasitasnya, maka volume air yang ada adalah (3) [___] meter kubik. Dengan pompa air berdebit pengisian 1,5 meter kubik per menit, waktu yang diperlukan untuk mengisi bak dari keadaan kosong hingga penuh adalah (4) [___] menit.",
            "blanks": [
              {
                "id": "b1",
                "label": "(1)",
                "placeholder": "m²...",
                "correctValues": [
                  "4.5",
                  "4,5"
                ]
              },
              {
                "id": "b2",
                "label": "(2)",
                "placeholder": "m³...",
                "correctValues": [
                  "45",
                  "45.0"
                ]
              },
              {
                "id": "b3",
                "label": "(3)",
                "placeholder": "separuh...",
                "correctValues": [
                  "22.5",
                  "22,5"
                ]
              },
              {
                "id": "b4",
                "label": "(4)",
                "placeholder": "menit...",
                "correctValues": [
                  "30",
                  "30 menit"
                ]
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Geometri Pengukuran:</strong><br>\n    1. Luas trapesium: $\\frac{4 + 2}{2} \\times 1,5 = 3 \\times 1,5 = 4,5\\text{ m}^2$.<br>\n    2. Volume total: $4,5 \\times 10 = 45\\text{ m}^3$.<br>\n    3. Separuh kapasitas: $\\frac{45}{2} = 22,5\\text{ m}^3$.<br>\n    4. Waktu pengisian: $\\frac{45}{1,5} = 30$ menit.<br>\n    <strong>Kunci Isian:</strong> (1) 4.5, (2) 45, (3) 22.5, (4) 30."
        },
        {
          "id": 39,
          "num": 14,
          "model": 3,
          "modelName": "Paragraf Rumpang Numerik (4 Bagian Kosong)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Reasoning (Penalaran Bivariat)",
          "konteks": "Kantin Sehat & Kepuasan Konsumen",
          "stimulusTitle": "Analisis Regresi Variasi Menu Kantin vs Kepuasan Siswa",
          "stimulusBadge": "Statistika Bivariat: Garis Regresi Linier",
          "stimulusText": "<p class=\"leading-relaxed\">Survei kantin sehat sekolah menganalisis korelasi antara skor variasi menu ($x$) dan skor indeks kepuasan siswa ($y$). Diketahui dari 5 gerai sampel diperoleh rata-rata skor $\\bar{x} = 4$ dan $\\bar{y} = 16$. Kemiringan garis regresi adalah $b = 2,5$.</p>",
          "questionText": "Lengkapilah analisis persamaan model regresi linier berikut dengan angka yang tepat:",
          "payload": {
            "clozeText": "Rata-rata skor variasi menu kantin adalah (1) [___]. Nilai rata-rata kepuasan siswa bernilai (2) [___]. Nilai konstanta intersep regresi a yang dihitung dari rumus a = ȳ - bx̄ adalah (3) [___]. Jika sebuah gerai memperkaya variasi menu hingga mencapai skor x = 6, maka prediksi skor indeks kepuasan siswa ŷ adalah sebesar (4) [___].",
            "blanks": [
              {
                "id": "b1",
                "label": "(1)",
                "placeholder": "rataan x...",
                "correctValues": [
                  "4",
                  "4.0"
                ]
              },
              {
                "id": "b2",
                "label": "(2)",
                "placeholder": "rataan y...",
                "correctValues": [
                  "16",
                  "16.0"
                ]
              },
              {
                "id": "b3",
                "label": "(3)",
                "placeholder": "nilai a...",
                "correctValues": [
                  "6",
                  "6.0"
                ]
              },
              {
                "id": "b4",
                "label": "(4)",
                "placeholder": "prediksi...",
                "correctValues": [
                  "21",
                  "21.0"
                ]
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Regresi:</strong><br>\n    1. $\\bar{x} = 4$.<br>\n    2. $\\bar{y} = 16$.<br>\n    3. $a = \\bar{y} - b\\bar{x} = 16 - 2,5(4) = 16 - 10 = 6$. Persamaan regresi: $\\hat{y} = 6 + 2,5x$.<br>\n    4. Untuk $x = 6$: $\\hat{y} = 6 + 2,5(6) = 6 + 15 = 21$.<br>\n    <strong>Kunci Isian:</strong> (1) 4, (2) 16, (3) 6, (4) 21."
        },
        {
          "id": 40,
          "num": 15,
          "model": 3,
          "modelName": "Paragraf Rumpang Numerik (4 Bagian Kosong)",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Applying (Penerapan Teori Peluang)",
          "konteks": "Eksperimen Laboratorium & Probabilitas",
          "stimulusTitle": "Peluang Pengambilan Kelereng Campuran Bertahap",
          "stimulusBadge": "Peluang Kejadian Majemuk",
          "stimulusText": "<p class=\"leading-relaxed\">Sebuah kantong kain berisi 6 butir kelereng berwarna biru dan 4 butir kelereng berwarna kuning (total 10 kelereng homogen). Dua butir kelereng diambil secara acak sekaligus dari dalam kantong.</p>",
          "questionText": "Isikan nilai pecahan atau bilangan bulat untuk melengkapi analisis peluang kejadian majemuk berikut:",
          "payload": {
            "clozeText": "Banyaknya anggota ruang sampel n(S) pengambilan 2 kelereng dari 10 kelereng adalah (1) [___] kemungkinan. Banyaknya cara terambil 2 kelereng yang keduanya berwarna biru adalah (2) [___] cara. Peluang terambil kedua kelereng berwarna biru bernilai (3) [___]. Sedangkan peluang terambil 1 kelereng biru dan 1 kelereng kuning adalah sebesar (4) [___].",
            "blanks": [
              {
                "id": "b1",
                "label": "(1)",
                "placeholder": "ruang sampel...",
                "correctValues": [
                  "45"
                ]
              },
              {
                "id": "b2",
                "label": "(2)",
                "placeholder": "keduanya biru...",
                "correctValues": [
                  "15"
                ]
              },
              {
                "id": "b3",
                "label": "(3)",
                "placeholder": "peluang biru...",
                "correctValues": [
                  "1/3",
                  "15/45",
                  "0.33",
                  "0,33"
                ]
              },
              {
                "id": "b4",
                "label": "(4)",
                "placeholder": "peluang beda...",
                "correctValues": [
                  "8/15",
                  "24/45",
                  "0.53",
                  "0,53"
                ]
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Peluang Majemuk:</strong><br>\n    1. Ruang sampel: $n(S) = C(10, 2) = \\frac{10 \\times 9}{2} = 45$.<br>\n    2. Keduanya biru: $C(6, 2) = \\frac{6 \\times 5}{2} = 15$ cara.<br>\n    3. Peluang keduanya biru: $\\frac{15}{45} = \\frac{1}{3}$.<br>\n    4. 1 Biru & 1 Kuning: $\\frac{C(6, 1) \\times C(4, 1)}{45} = \\frac{24}{45} = \\frac{8}{15}$.<br>\n    <strong>Kunci Isian:</strong> (1) 45, (2) 15, (3) 1/3, (4) 8/15."
        },
        {
          "id": 41,
          "num": 16,
          "model": 4,
          "modelName": "Sebab - Akibat Analitis",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Reasoning (Penalaran Pemusatan Data)",
          "konteks": "Metodologi Statistik & Analisis Pencilan",
          "stimulusTitle": "Resistensi Ukuran Pemusatan terhadap Pencilan (Outlier)",
          "stimulusBadge": "Median vs Rata-rata pada Distribusi Mencong",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam penyajian profil pendapatan atau data waktu respons sistem komputer, distribusi data sering kali memiliki nilai ekstrem yang jauh menyimpang (<em>outlier</em>).</p>",
          "questionText": "Analisis kebenaran pernyataan dan alasan berikut, serta tentukan hubungan sebab-akibat keduanya!",
          "payload": {
            "pernyataan": "Nilai median lebih direkomendasikan daripada rata-rata hitung (mean) sebagai representasi nilai pusat data ketika distribusi data memiliki nilai pencilan (outlier) ekstrem.",
            "alasan": "Nilai median bersifat resisten (kebal) terhadap pengaruh pencilan ekstrem karena perhitungannya semata-mata bertumpu pada posisi urutan tengah data, bukan penjumlahan seluruh nilai numerik observasi.",
            "options": [
              {
                "id": "A",
                "text": "Pernyataan BENAR, Alasan BENAR, dan keduanya menunjukkan hubungan SEBAB - AKIBAT."
              },
              {
                "id": "B",
                "text": "Pernyataan BENAR, Alasan BENAR, tetapi keduanya TIDAK menunjukkan hubungan sebab - akibat."
              },
              {
                "id": "C",
                "text": "Pernyataan BENAR, tetapi Alasan SALAH."
              },
              {
                "id": "D",
                "text": "Pernyataan SALAH, tetapi Alasan BENAR."
              },
              {
                "id": "E",
                "text": "Pernyataan dan Alasan keduanya SALAH."
              }
            ],
            "key": "A"
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Sifat Statistika:</strong><br>\n    1. Rata-rata sangat peka terhadap pencilan karena seluruh nilai dijumlahkan. Satu nilai ekstrem besar menarik nilai mean menjauhi mayoritas data. Oleh karena itu, median lebih disukai sebagai ukuran pusat (Pernyataan BENAR).<br>\n    2. Definisi matematis median hanya melihat posisi tengah, sehingga nilai ekstrem tidak mengubah nilainya (Alasan BENAR).<br>\n    3. Alasan menerangkan argumen kausalitas secara tepat.<br>\n    <strong>Kunci Jawaban: A.</strong>"
        },
        {
          "id": 42,
          "num": 17,
          "model": 4,
          "modelName": "Sebab - Akibat Analitis",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Knowing (Pemahaman Aksioma Ruang)",
          "konteks": "Geometri Dimensi Tiga",
          "stimulusTitle": "Kedudukan Garis Bersilangan pada Ruang Tiga Dimensi",
          "stimulusBadge": "Aksioma Geometri Ruang Euclid",
          "stimulusText": "<p class=\"leading-relaxed\">Dua garis lurus $g$ dan $h$ berada di dalam ruang bangun tiga dimensi.</p>",
          "questionText": "Analisis kebenaran pernyataan dan alasan berikut, serta tentukan hubungan sebab-akibat keduanya!",
          "payload": {
            "pernyataan": "Dua buah garis lurus di dalam ruang tiga dimensi yang tidak berpotongan pasti merupakan dua garis yang saling sejajar satu sama lain.",
            "alasan": "Di dalam ruang tiga dimensi, dua garis yang tidak terletak pada satu bidang bersama (non-koplanar) dapat berstatus saling bersilangan meskipun tidak pernah berpotongan.",
            "options": [
              {
                "id": "A",
                "text": "Pernyataan BENAR, Alasan BENAR, dan keduanya menunjukkan hubungan SEBAB - AKIBAT."
              },
              {
                "id": "B",
                "text": "Pernyataan BENAR, Alasan BENAR, tetapi keduanya TIDAK menunjukkan hubungan sebab - akibat."
              },
              {
                "id": "C",
                "text": "Pernyataan BENAR, tetapi Alasan SALAH."
              },
              {
                "id": "D",
                "text": "Pernyataan SALAH, tetapi Alasan BENAR."
              },
              {
                "id": "E",
                "text": "Pernyataan dan Alasan keduanya SALAH."
              }
            ],
            "key": "D"
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Geometris:</strong><br>\n    1. Pernyataan bahwa \"garis yang tidak berpotongan pasti sejajar\" hanya berlaku pada bidang datar 2 dimensi. Pada ruang 3 dimensi, dua garis yang tidak berpotongan bisa bersilangan jika tidak sebidang. (Pernyataan SALAH).<br>\n    2. Alasan menyatakan definisi yang sah mengenai garis bersilangan di ruang 3D. (Alasan BENAR).<br>\n    <strong>Kunci Jawaban: D.</strong>"
        },
        {
          "id": 43,
          "num": 18,
          "model": 4,
          "modelName": "Sebab - Akibat Analitis",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Knowing (Pemahaman Aksioma Peluang)",
          "konteks": "Teori Probabilitas",
          "stimulusTitle": "Prinsip Peluang Kejadian Komplemen",
          "stimulusBadge": "Aksioma Peluang Saling Lepas",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam prakiraan cuaca sains atmosfer, peluang terjadinya hujan lebat esok hari di kawasan Serpong dimodelkan sebagai kejadian $H$.</p>",
          "questionText": "Analisis kebenaran pernyataan dan alasan berikut, serta tentukan hubungan sebab-akibat keduanya!",
          "payload": {
            "pernyataan": "Jika peluang terjadinya hujan esok hari adalah P(H) = 0,35, maka peluang esok hari tidak turun hujan adalah tepat P(H') = 0,65.",
            "alasan": "Hubungan antara suatu kejadian dan komplemennya selalu memenuhi persamaan P(A) + P(A') = 1 karena keduanya merupakan dua kejadian saling lepas yang menyusun seluruh ruang sampel.",
            "options": [
              {
                "id": "A",
                "text": "Pernyataan BENAR, Alasan BENAR, dan keduanya menunjukkan hubungan SEBAB - AKIBAT."
              },
              {
                "id": "B",
                "text": "Pernyataan BENAR, Alasan BENAR, tetapi keduanya TIDAK menunjukkan hubungan sebab - akibat."
              },
              {
                "id": "C",
                "text": "Pernyataan BENAR, tetapi Alasan SALAH."
              },
              {
                "id": "D",
                "text": "Pernyataan SALAH, tetapi Alasan BENAR."
              },
              {
                "id": "E",
                "text": "Pernyataan dan Alasan keduanya SALAH."
              }
            ],
            "key": "A"
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Probabilitas:</strong><br>\n    1. $P(H') = 1 - 0,35 = 0,65$. (Pernyataan BENAR).<br>\n    2. $A$ dan $A'$ saling lepas dan gabungannya adalah ruang sampel $S$, sehingga $P(A \\cup A') = P(A) + P(A') = P(S) = 1$. (Alasan BENAR).<br>\n    3. Alasan merupakan landasan teoritis pembuktian pernyataan.<br>\n    <strong>Kunci Jawaban: A.</strong>"
        },
        {
          "id": 44,
          "num": 19,
          "model": 4,
          "modelName": "Sebab - Akibat Analitis",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Reasoning (Penalaran Simetri Ruang)",
          "konteks": "Geometri Limas Beraturan",
          "stimulusTitle": "Proyeksi Titik Puncak Limas Beraturan ke Bidang Alas",
          "stimulusBadge": "Geometri Ruang: Proyeksi Ortogonal",
          "stimulusText": "<p class=\"leading-relaxed\">Pada sebuah limas segiempat beraturan $T.ABCD$ dengan alas persegi $ABCD$, diperhatikan proyeksi titik puncak $T$ terhadap bidang alas.</p>",
          "questionText": "Analisis kebenaran pernyataan dan alasan berikut, serta tentukan hubungan sebab-akibat keduanya!",
          "payload": {
            "pernyataan": "Proyeksi tegak lurus titik puncak T terhadap bidang lantai dasar ABCD selalu jatuh tepat pada titik perpotongan kedua diagonal alas persegi ABCD.",
            "alasan": "Pada limas segiempat beraturan, seluruh rusuk tegak (TA, TB, TC, TD) memiliki panjang yang sama sehingga titik puncak T berjarak sama ke setiap titik sudut bidang alas.",
            "options": [
              {
                "id": "A",
                "text": "Pernyataan BENAR, Alasan BENAR, dan keduanya menunjukkan hubungan SEBAB - AKIBAT."
              },
              {
                "id": "B",
                "text": "Pernyataan BENAR, Alasan BENAR, tetapi keduanya TIDAK menunjukkan hubungan sebab - akibat."
              },
              {
                "id": "C",
                "text": "Pernyataan BENAR, tetapi Alasan SALAH."
              },
              {
                "id": "D",
                "text": "Pernyataan SALAH, tetapi Alasan BENAR."
              },
              {
                "id": "E",
                "text": "Pernyataan dan Alasan keduanya SALAH."
              }
            ],
            "key": "A"
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Proyeksi:</strong><br>\n    1. Misalkan $O$ proyeksi $T$ ke alas. Segitiga siku-siku $TOA, TOB, TOC, TOD$ semuanya memiliki sisi tegak $TO$ sama dan sisi miring $TA=TB=TC=TD$ sama. Berdasarkan kekongruenan hipotenusa-kaki, maka $OA = OB = OC = OD$. Titik yang berjarak sama ke keempat sudut persegi adalah titik pusat perpotongan diagonal (Pernyataan BENAR).<br>\n    2. Alasan menyatakan kondisi rusuk tegak sama panjang secara benar (Alasan BENAR).<br>\n    3. Keduanya berhubungan sebab-akibat.<br>\n    <strong>Kunci Jawaban: A.</strong>"
        },
        {
          "id": 45,
          "num": 20,
          "model": 4,
          "modelName": "Sebab - Akibat Analitis",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Reasoning (Penalaran Sifat Simpangan Baku)",
          "konteks": "Analisis Statistika Matematika",
          "stimulusTitle": "Pengaruh Pengali Negatif terhadap Ukuran Simpangan Baku",
          "stimulusBadge": "Sifat Dispersi Data",
          "stimulusText": "<p class=\"leading-relaxed\">Suatu variabel acak data sampel $X$ memiliki simpangan baku $S_X = 4$. Setiap data dikalikan dengan bilangan negatif $-3$ menghasilkan variabel baru $Y = -3X$.</p>",
          "questionText": "Analisis kebenaran pernyataan dan alasan berikut, serta tentukan hubungan sebab-akibat keduanya!",
          "payload": {
            "pernyataan": "Nilai simpangan baku dari data baru Y = -3X akan bernilai negatif dua belas (Sy = -12).",
            "alasan": "Simpangan baku didefinisikan sebagai akar kuadrat positif dari varians sehingga nilainya menurut definisi aksioma matematika selalu bernilai non-negatif (Sy ≥ 0).",
            "options": [
              {
                "id": "A",
                "text": "Pernyataan BENAR, Alasan BENAR, dan keduanya menunjukkan hubungan SEBAB - AKIBAT."
              },
              {
                "id": "B",
                "text": "Pernyataan BENAR, Alasan BENAR, tetapi keduanya TIDAK menunjukkan hubungan sebab - akibat."
              },
              {
                "id": "C",
                "text": "Pernyataan BENAR, tetapi Alasan SALAH."
              },
              {
                "id": "D",
                "text": "Pernyataan SALAH, tetapi Alasan BENAR."
              },
              {
                "id": "E",
                "text": "Pernyataan dan Alasan keduanya SALAH."
              }
            ],
            "key": "D"
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Dispersi:</strong><br>\n    1. Transformasi linier pada simpangan baku: $S_Y = |-3| \\times S_X = 3 \\times 4 = 12$, bukan $-12$. Simpangan baku mengukur jarak penyebaran, nilainya tidak pernah negatif. (Pernyataan SALAH).<br>\n    2. Simpangan baku adalah akar kuadrat kuadratis, nilainya selalu non-negatif. (Alasan BENAR).<br>\n    <strong>Kunci Jawaban: D.</strong>"
        },
        {
          "id": 46,
          "num": 21,
          "model": 5,
          "modelName": "Pilihan Ganda Kompleks (Checkbox Multi-Select)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Knowing (Pemahaman Distribusi Peluang)",
          "konteks": "Teori Peluang & Eksperimen Probabilitas",
          "stimulusTitle": "Distribusi Probabilitas Jumlah Mata Dua Dadu Homogen",
          "stimulusBadge": "Peluang Bersama Ruang Sampel 36",
          "stimulusText": "<p class=\"leading-relaxed\">Dua buah dadu bermata enam dilempar secara bersamaan satu kali. Hasil yang diamati adalah jumlah dari mata dadu yang muncul pada kedua dadu.</p>",
          "questionText": "Beri tanda centang (✓) pada setiap pernyataan peluang berikut yang bernilai BENAR!",
          "payload": {
            "statements": [
              {
                "id": "c1",
                "text": "Peluang muncul jumlah kedua mata dadu bernilai 6 adalah tepat 5/36.",
                "key": true
              },
              {
                "id": "c2",
                "text": "Peluang muncul jumlah kedua mata dadu bernilai 8 adalah tepat 5/36.",
                "key": true
              },
              {
                "id": "c3",
                "text": "Jumlah mata dadu yang memiliki peluang terbesar untuk muncul adalah bernilai 7 (peluang 6/36).",
                "key": true
              },
              {
                "id": "c4",
                "text": "Peluang muncul jumlah kedua mata dadu bernilai genap adalah tepat 3/4.",
                "key": false
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Distribusi Dadu:</strong><br>\n    1. Jumlah 6: $(1,5),(2,4),(3,3),(4,2),(5,1) \\implies 5$ cara. Peluang $= \\frac{5}{36}$. (Pernyataan 1 BENAR).<br>\n    2. Jumlah 8: $(2,6),(3,5),(4,4),(5,3),(6,2) \\implies 5$ cara. Peluang $= \\frac{5}{36}$. (Pernyataan 2 BENAR).<br>\n    3. Jumlah 7: 6 cara (modus distribusi dadu), peluang $= \\frac{6}{36} = \\frac{1}{6}$. (Pernyataan 3 BENAR).<br>\n    4. Jumlah genap: 18 cara dari 36. Peluang $= \\frac{18}{36} = \\frac{1}{2} \\neq \\frac{3}{4}$. (Pernyataan 4 SALAH).<br>\n    <strong>Pernyataan yang Dicentang:</strong> 1, 2, dan 3."
        },
        {
          "id": 47,
          "num": 22,
          "model": 5,
          "modelName": "Pilihan Ganda Kompleks (Checkbox Multi-Select)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Applying (Penerapan Metrik Ruang)",
          "konteks": "Desain Kontainer & Kemasan Balok",
          "stimulusTitle": "Karakteristik Metrik Ruang Balok ABCD.EFGH",
          "stimulusBadge": "Geometri Balok 12 × 4 × 3 cm",
          "stimulusText": "<p class=\"leading-relaxed\">Sebuah kotak penyimpanan kargo berbentuk balok $ABCD.EFGH$ memiliki ukuran rusuk panjang $AB = 12\\text{ cm}$, lebar $BC = 4\\text{ cm}$, dan tinggi $AE = 3\\text{ cm}$.</p>",
          "questionText": "Beri tanda centang (✓) pada setiap pernyataan metrik balok berikut yang bernilai BENAR!",
          "payload": {
            "statements": [
              {
                "id": "c1",
                "text": "Panjang diagonal bidang alas AC adalah tepat 4√10 cm.",
                "key": true
              },
              {
                "id": "c2",
                "text": "Panjang diagonal ruang balok AG adalah tepat 13 cm.",
                "key": true
              },
              {
                "id": "c3",
                "text": "Luas seluruh permukaan bidang balok adalah 192 cm².",
                "key": true
              },
              {
                "id": "c4",
                "text": "Volume kapasitas ruang dalam balok tersebut adalah 288 cm³.",
                "key": false
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Metrik Balok:</strong><br>\n    1. Diagonal alas $AC = \\sqrt{12^2 + 4^2} = \\sqrt{144 + 16} = \\sqrt{160} = 4\\sqrt{10}\\text{ cm}$. (Pernyataan 1 BENAR).<br>\n    2. Diagonal ruang $AG = \\sqrt{12^2 + 4^2 + 3^2} = \\sqrt{144 + 16 + 9} = \\sqrt{169} = 13\\text{ cm}$. (Pernyataan 2 BENAR).<br>\n    3. Luas Permukaan $= 2(12 \\times 4 + 12 \\times 3 + 4 \\times 3) = 2(48 + 36 + 12) = 192\\text{ cm}^2$. (Pernyataan 3 BENAR).<br>\n    4. Volume $= 12 \\times 4 \\times 3 = 144\\text{ cm}^3 \\neq 288\\text{ cm}^3$. (Pernyataan 4 SALAH).<br>\n    <strong>Pernyataan yang Dicentang:</strong> 1, 2, dan 3."
        },
        {
          "id": 48,
          "num": 23,
          "model": 5,
          "modelName": "Pilihan Ganda Kompleks (Checkbox Multi-Select)",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Applying (Penerapan Kombinasi)",
          "konteks": "Kantin Sekolah & Menu Nutrisi Sehat",
          "stimulusTitle": "Kombinasi Paket Menu Makan Siang Sehat Siswa",
          "stimulusBadge": "Kombinatorika: Kombinasi Pemilihan Paket",
          "stimulusText": "<p class=\"leading-relaxed\">Kantin sekolah sehat GIS menyediakan 4 pilihan lauk protein dan 3 pilihan jenis sayur berserat tinggi untuk paket makan siang sehat.</p>",
          "questionText": "Beri tanda centang (✓) pada setiap pernyataan kombinasi menu berikut yang bernilai BENAR!",
          "payload": {
            "statements": [
              {
                "id": "c1",
                "text": "Banyaknya pilihan kombinasi paket jika siswa memilih tepat 1 lauk dan 1 sayur adalah 12 variasi paket.",
                "key": true
              },
              {
                "id": "c2",
                "text": "Banyaknya cara memilih 2 jenis lauk berbeda dari 4 pilihan yang tersedia adalah 6 cara.",
                "key": true
              },
              {
                "id": "c3",
                "text": "Banyaknya pilihan paket jika siswa memilih 2 jenis lauk berbeda dan 1 jenis sayur adalah 18 variasi paket.",
                "key": true
              },
              {
                "id": "c4",
                "text": "Total cara memilih 3 jenis makanan bebas dari seluruh 7 pilihan makanan adalah 70 cara.",
                "key": false
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Kombinasi Menu:</strong><br>\n    1. 1 Lauk & 1 Sayur: $4 \\times 3 = 12$ paket. (Pernyataan 1 BENAR).<br>\n    2. 2 Lauk dari 4: $C(4, 2) = 6$ cara. (Pernyataan 2 BENAR).<br>\n    3. 2 Lauk & 1 Sayur: $6 \\times 3 = 18$ paket. (Pernyataan 3 BENAR).<br>\n    4. 3 Makanan dari 7: $C(7, 3) = \\frac{7 \\times 6 \\times 5}{6} = 35$ cara, bukan 70 cara. (Pernyataan 4 SALAH).<br>\n    <strong>Pernyataan yang Dicentang:</strong> 1, 2, dan 3."
        },
        {
          "id": 49,
          "num": 24,
          "model": 5,
          "modelName": "Pilihan Ganda Kompleks (Checkbox Multi-Select)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Knowing (Pemahaman Tabel Distribusi)",
          "konteks": "Evaluasi Pendidikan & Kurikulum Sekolah",
          "stimulusTitle": "Analisis Distribusi Frekuensi Nilai Asesmen Numerasi",
          "stimulusBadge": "Statistika: Modus & Karakteristik Kelas",
          "stimulusText": "<p class=\"leading-relaxed\">Berikut adalah tabel distribusi frekuensi nilai ujian numerasi dari 40 siswa kelas XII:</p>\n    <div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs font-mono font-bold text-center text-slate-800 shadow-sm\">\n      51–60 (f=4), &nbsp; 61–70 (f=8), &nbsp; 71–80 (f=15), &nbsp; 81–90 (f=10), &nbsp; 91–100 (f=3)\n    </div>",
          "questionText": "Beri tanda centang (✓) pada setiap pernyataan parameter distribusi berikut yang bernilai BENAR!",
          "payload": {
            "statements": [
              {
                "id": "c1",
                "text": "Panjang kelas interval (p) dari tabel distribusi frekuensi di atas adalah tepat 10.",
                "key": true
              },
              {
                "id": "c2",
                "text": "Kelas interval modus terletak pada rentang nilai 71 – 80 karena memiliki frekuensi tertinggi (f = 15).",
                "key": true
              },
              {
                "id": "c3",
                "text": "Tepi bawah (Tb) dari kelas interval modus adalah 70,5.",
                "key": true
              },
              {
                "id": "c4",
                "text": "Banyaknya siswa yang memperoleh nilai di atas 80 adalah sebanyak 25 siswa.",
                "key": false
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Tabel Distribusi:</strong><br>\n    1. Panjang kelas $p = 60 - 51 + 1 = 10$. (Pernyataan 1 BENAR).<br>\n    2. Frekuensi tertinggi $= 15$ pada interval $71 - 80$. (Pernyataan 2 BENAR).<br>\n    3. Tepi bawah modus $Tb = 71 - 0,5 = 70,5$. (Pernyataan 3 BENAR).<br>\n    4. Siswa di atas 80: kelas $81-90$ (10) dan $91-100$ (3) $\\implies 10 + 3 = 13$ siswa, bukan 25 siswa. (Pernyataan 4 SALAH).<br>\n    <strong>Pernyataan yang Dicentang:</strong> 1, 2, dan 3."
        },
        {
          "id": 50,
          "num": 25,
          "model": 5,
          "modelName": "Pilihan Ganda Kompleks (Checkbox Multi-Select)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Reasoning (Penalaran Sudut Garis-Bidang)",
          "konteks": "Geometri Dimensi Tiga Kubus",
          "stimulusTitle": "Sudut Antara Garis dan Bidang pada Kubus ABCD.EFGH",
          "stimulusBadge": "Trigonometri Ruang 3 Dimensi",
          "stimulusText": "<p class=\"leading-relaxed\">Pada kubus beraturan $ABCD.EFGH$ dengan panjang rusuk $s$, diamati sudut-sudut yang terbentuk antara ruas garis tertentu dengan bidang alas $ABCD$.</p>",
          "questionText": "Beri tanda centang (✓) pada setiap pernyataan geometri sudut berikut yang bernilai BENAR!",
          "payload": {
            "statements": [
              {
                "id": "c1",
                "text": "Tangen sudut antara diagonal ruang AG dan bidang alas ABCD bernilai 1/√2 = √2/2.",
                "key": true
              },
              {
                "id": "c2",
                "text": "Besar sudut antara garis diagonal bidang AF dan bidang lantai ABCD adalah tepat 45°.",
                "key": true
              },
              {
                "id": "c3",
                "text": "Garis rusuk tegak AE membentuk sudut 90° (tegak lurus) terhadap bidang lantai ABCD.",
                "key": true
              },
              {
                "id": "c4",
                "text": "Besar sudut perpotongan antara dua diagonal ruang AG dan BH adalah tepat 90°.",
                "key": false
              }
            ]
          },
          "bahasLengkap": "<strong>Langkah Pembuktian Sudut Garis-Bidang:</strong><br>\n    1. Proyeksi $AG$ ke alas adalah $AC$. $\\tan \\angle CAG = \\frac{CG}{AC} = \\frac{s}{s\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$. (Pernyataan 1 BENAR).<br>\n    2. Proyeksi $AF$ ke alas adalah $AB$. Segitiga $ABF$ siku-siku sama kaki, sudutnya $45^\\circ$. (Pernyataan 2 BENAR).<br>\n    3. Rusuk tegak $AE \\perp$ bidang alas $ABCD$ ($90^\\circ$). (Pernyataan 3 BENAR).<br>\n    4. Sudut antara dua diagonal ruang kubus memenuhi $\\cos \\theta = \\frac{1}{3} \\implies \\theta \\approx 70,53^\\circ \\neq 90^\\circ$. (Pernyataan 4 SALAH).<br>\n    <strong>Pernyataan yang Dicentang:</strong> 1, 2, dan 3."
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AKM_DATA;
}
