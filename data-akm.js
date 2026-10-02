// data-akm.js
// DATA BANK SOAL RESMI SIMULASI TKA & AKM PUSMENDIK (LITERASI NUMERASI KELAS XII)
// SMA GLOBAL ISLAMIC SCHOOL 2 SERPONG • TP 2026/2027
// Standar 5 Model Baku AKM / Asesmen Nasional Pusmendik Kemendikbudristek

const AKM_DATA = {
  packages: [
    {
      id: "GLADI_01",
      code: "SIMULASI-01",
      title: "Gladi Bersih ANBK Literasi Numerasi Gelombang 2",
      subtitle: "Persiapan Resmi Asesmen Nasional & TKA Kelas XII • SMA GIS 2 Serpong",
      targetDate: "12 - 18 Oktober 2026",
      durationMinutes: 60,
      totalQuestions: 10,
      kategoriLevel: "Fase F (Kelas XII SMA)",
      questions: [
        // ====================================================================
        // NOMOR 1: MODEL 1 (PERNYATAAN BENAR DAN SALAH)
        // ====================================================================
        {
          id: 1,
          num: 1,
          model: 1,
          modelName: "Pernyataan Benar / Salah (Tabel 4 Baris)",
          domain: "Aljabar & Kaidah Pencacahan",
          kognitif: "Applying (Penerapan)",
          konteks: "Sosial, Finansial & Keamanan Perbankan",
          stimulusTitle: "Sistem Pengamanan Brankas Digital Bank Syariah Serpong",
          stimulusBadge: "Kaidah Pencacahan & Peluang",
          stimulusText: `<p class="leading-relaxed">Sebuah brankas penyimpanan dana kas dan aset perbankan syariah di kawasan Serpong menggunakan sistem pengamanan pintu berlapis berbasis kode PIN alfanumerik 6 karakter.</p>
          <div class="my-3 p-3.5 rounded-xl border bg-slate-50 border-slate-200 text-slate-800 text-xs space-y-1.5 shadow-sm">
            <p class="font-bold text-slate-900 flex items-center gap-2"><i class="fa-solid fa-shield-halved text-blue-600"></i> Ketentuan Pembuatan Kode PIN Brankas:</p>
            <ul class="list-disc list-inside space-y-1 pl-1 text-slate-700">
              <li>Kode terdiri atas <strong>2 huruf kapital pertama</strong> diikuti oleh <strong>4 angka desimal</strong> (format: <code class="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded font-mono font-bold">H₁ H₂ D₁ D₂ D₃ D₄</code>).</li>
              <li>Dua huruf pertama dipilih dari himpunan huruf vokal dan konsonan terbatas: <code class="px-1.5 py-0.5 bg-slate-200 text-slate-800 rounded font-mono font-bold">{A, B, C, D, E}</code> tanpa pengulangan huruf.</li>
              <li>Empat angka dipilih dari himpunan angka bukan nol: <code class="px-1.5 py-0.5 bg-slate-200 text-slate-800 rounded font-mono font-bold">{1, 2, 3, 4, 5, 6, 7, 8, 9}</code> dengan ketentuan khusus:
                <ul class="list-circle list-inside pl-4 mt-1 space-y-0.5 text-slate-600">
                  <li>Angka pertama (<code class="font-mono">D₁</code>) harus berupa <strong>bilangan ganjil</strong>.</li>
                  <li>Angka terakhir (<code class="font-mono">D₄</code>) harus berupa <strong>bilangan genap</strong>.</li>
                  <li>Seluruh 4 angka yang digunakan <strong>tidak boleh ada yang berulang</strong>.</li>
                </ul>
              </li>
            </ul>
          </div>
          <p class="leading-relaxed">Tim audit keamanan siber menguji ketahanan brankas tersebut terhadap potensi serangan tebakan acak (<em>brute force</em>) untuk memastikan perlindungan optimal.</p>`,
          questionText: "Berdasarkan stimulus di atas, tentukan status kebenaran (BENAR atau SALAH) untuk setiap pernyataan matematis berikut!",
          payload: {
            rows: [
              {
                id: "r1",
                statement: "Banyaknya variasi susunan 2 huruf awal yang dapat dipilih adalah tepat 20 variasi kombinasi.",
                key: "B",
                bahas: "Dua huruf tanpa pengulangan dari 5 huruf: P(5, 2) = 5 × 4 = 20 variasi. (BENAR)"
              },
              {
                id: "r2",
                statement: "Banyaknya variasi susunan 4 angka PIN yang memenuhi kriteria ganjil di awal dan genap di akhir adalah 840 variasi.",
                key: "B",
                bahas: "Posisi D₁ (ganjil: 1,3,5,7,9) = 5 cara. Posisi D₄ (genap: 2,4,6,8) = 4 cara. Dua posisi tengah D₂ dan D₃ dipilih dari sisa 7 angka: 7 × 6 = 42 cara. Total variasi angka = 5 × 4 × 42 = 840 variasi. (BENAR)"
              },
              {
                id: "r3",
                statement: "Total variasi kode PIN 6 karakter lengkap yang dapat dibentuk adalah sebanyak 16.800 kode brankas berbeda.",
                key: "B",
                bahas: "Total variasi lengkap = (Variasi Huruf) × (Variasi Angka) = 20 × 840 = 16.800 kode. (BENAR)"
              },
              {
                id: "r4",
                statement: "Peluang seseorang berhasil membuka brankas dalam satu kali tebakan acak lebih besar dari 0,01%.",
                key: "S",
                bahas: "Peluang 1 tebakan benar = 1 / 16.800 ≈ 0,0000595 = 0,00595%. Nilai ini JAUH LEBIH KECIL dari 0,01% (0,0001). Maka pernyataan ini SALAH."
              }
            ]
          },
          bahasLengkap: `<strong>Langkah Pembuktian Matematis:</strong><br>
          1. <em>Kombinasi Huruf:</em> Karena tidak berulang, posisi pertama 5 opsi, kedua 4 opsi → $5 \\times 4 = 20$ cara.<br>
          2. <em>Kombinasi Angka:</em> Himpunan ganjil $\{1,3,5,7,9\}$ (5 opsi) dan genap $\{2,4,6,8\}$ (4 opsi) saling lepas. Sisa angka untuk posisi ke-2 dan ke-3 adalah $9 - 2 = 7$ angka, sehingga $7 \\times 6 = 42$ cara. Total angka $= 5 \\times 42 \\times 4 = 840$ cara.<br>
          3. <em>Total Kode:</em> $20 \\times 840 = 16.800$ kode.<br>
          4. <em>Peluang tebakan:</em> $\\frac{1}{16.800} \\approx 0,00595\\% < 0,01\\%$.<br>
          <strong>Kunci Jawaban:</strong> B - B - B - S.`
        },

        // ====================================================================
        // NOMOR 2: MODEL 1 (PERNYATAAN BENAR DAN SALAH)
        // ====================================================================
        {
          id: 2,
          num: 2,
          model: 1,
          modelName: "Pernyataan Benar / Salah (Tabel 4 Baris)",
          domain: "Geometri Ruang & Pengukuran",
          kognitif: "Reasoning (Penalaran HOTS)",
          konteks: "Arsitektur Bangunan & Rekayasa Konstruksi",
          stimulusTitle: "Desain Kanopi Baja Aula Pertemuan Utama GIS 2 Serpong",
          stimulusBadge: "Geometri Dimensi Tiga (Balok)",
          stimulusText: `<p class="leading-relaxed">Sebuah kanopi aula serbaguna dirancang dengan struktur rangka baja balok beraturan $ABCD.EFGH$. Bidang lantai dasar dimodelkan sebagai persegi $ABCD$ berukuran $12\\text{ m} \\times 12\\text{ m}$, dan tinggi tiang kolom tegak kanopi ($AE = BF = CG = DH$) adalah setinggi $6\\text{ meter}$.</p>
          <div class="my-3 p-3.5 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1">
            <p class="font-bold text-slate-900 flex items-center gap-2"><i class="fa-solid fa-cube text-emerald-600"></i> Koordinat Titik Acuan Rangka:</p>
            <p>• Titik $P$ berada tepat di tengah-tengah lantai dasar $ABCD$ (titik perpotongan diagonal $AC$ dan $BD$).</p>
            <p>• Titik $Q$ berada tepat di tengah-tengah rangka atap $EFGH$ (titik perpotongan diagonal $EG$ dan $FH$).</p>
            <p>• Kabel baja penguat dipasang menghubungkan beberapa titik simpul krusial untuk menahan beban angin kencang.</p>
          </div>`,
          questionText: "Tentukan status kebenaran (BENAR atau SALAH) untuk setiap analisis dimensi tiga berikut!",
          payload: {
            rows: [
              {
                id: "r1",
                statement: "Jarak bentang terjauh antara dua titik sudut rangka kanopi (panjang kabel diagonal ruang AG) adalah tepat 18 meter.",
                key: "B",
                bahas: "AG = √(12² + 12² + 6²) = √(144 + 144 + 36) = √324 = 18 meter. (BENAR)"
              },
              {
                id: "r2",
                statement: "Jarak langsung dari titik pusat lantai P ke titik sudut atap G adalah tepat 6√3 meter.",
                key: "B",
                bahas: "Koordinat P(6, 6, 0) dan G(12, 12, 6) → PG = √((12-6)² + (12-6)² + (6-0)²) = √(36 + 36 + 36) = √108 = 6√3 meter. (BENAR)"
              },
              {
                id: "r3",
                statement: "Jarak tegak lurus dari titik sudut atap E ke garis diagonal lantai BD adalah sepanjang 6√3 meter.",
                key: "B",
                bahas: "Proyeksi E ke lantai adalah A. Garis BD tegak lurus AP di P (diagonal persegi). Berdasarkan Teorema 3 Tegak Lurus, jarak E ke BD adalah EP = √(AE² + AP²) = √(6² + (6√2)²) = √(36 + 72) = √108 = 6√3 meter. (BENAR)"
              },
              {
                id: "r4",
                statement: "Nilai tangen sudut yang dibentuk oleh diagonal ruang AG terhadap bidang lantai dasar ABCD adalah sebesar 1/2 √2.",
                key: "S",
                bahas: "Proyeksi AG ke lantai adalah AC = 12√2 m. Sudut θ = ∠GAC. tan θ = CG / AC = 6 / (12√2) = 1 / (2√2) = √2 / 4. Nilai tangen adalah 1/4 √2, BUKAN 1/2 √2. (SALAH)"
              }
            ]
          },
          bahasLengkap: `<strong>Langkah Pembuktian Dimensi Tiga:</strong><br>
          1. <em>Diagonal Ruang:</em> $AG = \\sqrt{p^2 + l^2 + t^2} = \\sqrt{144 + 144 + 36} = \\sqrt{324} = 18\\text{ m}$. (B)<br>
          2. <em>Jarak P ke G:</em> Di bidang ortogonal tegak melalui $P$ dan $G$, $PC = 6\\sqrt{2}$, $CG = 6 \\implies PG = \\sqrt{(6\\sqrt{2})^2 + 6^2} = \\sqrt{72 + 36} = 6\\sqrt{3}\\text{ m}$. (B)<br>
          3. <em>Jarak E ke BD:</em> Sesuai Teorema Pythagoras 3D, $EP = \\sqrt{AE^2 + AP^2} = \\sqrt{36 + 72} = 6\\sqrt{3}\\text{ m}$. (B)<br>
          4. <em>Tangen Sudut:</em> $\\tan \\theta = \\frac{6}{12\\sqrt{2}} = \\frac{1}{2\\sqrt{2}} = \\frac{\\sqrt{2}}{4}$. (S)<br>
          <strong>Kunci Jawaban:</strong> B - B - B - S.`
        },

        // ====================================================================
        // NOMOR 3: MODEL 2 (MENJODOHKAN)
        // ====================================================================
        {
          id: 3,
          num: 3,
          model: 2,
          modelName: "Menjodohkan (Premis Kolom A ↔ Respons Kolom B)",
          domain: "Data & Ketidakpastian",
          kognitif: "Applying (Penerapan)",
          konteks: "Saintifik, Medis & Epidemiologi",
          stimulusTitle: "Uji Skrining Medis Cepat & Teorema Bayes Probabilitas",
          stimulusBadge: "Peluang Bersyarat & Teorema Bayes",
          stimulusText: `<p class="leading-relaxed">Dalam program skrining massal kesehatan untuk mendeteksi paparan virus musiman pada populasi warga di suatu kota satelit, otoritas kesehatan menggunakan alat tes diagnostik cepat (<em>Rapid Diagnostic Kit</em>). Karakteristik epidemiologis dan performa uji laboratorium tersebut adalah sebagai berikut:</p>
          <div class="my-3 p-3.5 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1">
            <p>• <strong>Tingkat Prevalensi ($P(\\text{Sakit})$):</strong> $2\\%$ dari total populasi warga terinfeksi virus secara aktual ($P = 0{,}02$).</p>
            <p>• <strong>Sensitivitas Uji (*True Positive*):</strong> Akurasi alat mencapai $95\\%$ dalam mendeteksi hasil Positif pada orang yang benar-benar sakit.</p>
            <p>• <strong>Galat Positif Semu (*False Positive*):</strong> Alat memiliki galat $4\\%$ memberikan hasil Positif keliru pada orang yang sebenarnya sehat.</p>
            <p>• Sebanyak $10.000$ orang warga menjalani tes skrining serentak.</p>
          </div>`,
          questionText: "Pasangkan setiap karakteristik probabilitas pada Kolom A dengan nilai besaran numerik yang tepat pada Kolom B!",
          payload: {
            columnA: [
              { id: "A1", text: "Peluang seseorang benar-benar sakit DAN mendapatkan hasil tes Positif: P(Sakit ∩ Positif)" },
              { id: "A2", text: "Total probabilitas semesta seseorang mendapatkan hasil tes Positif: P(Positif)" },
              { id: "A3", text: "Peluang sesungguhnya seseorang benar-benar terinfeksi virus jika hasil tesnya Positif: P(Sakit | Positif)" },
              { id: "A4", text: "Estimasi jumlah warga yang sehat tetapi mendapatkan hasil positif keliru (False Positive) dari 10.000 peserta" }
            ],
            columnB: [
              { id: "B1", text: "1,90% (0,0190)" },
              { id: "B2", text: "5,82% (0,0582)" },
              { id: "B3", text: "95/291 (≈ 32,65%)" },
              { id: "B4", text: "392 orang" },
              { id: "B5", text: "190 orang" },
              { id: "B6", text: "95,00% (0,9500)" },
              { id: "B7", text: "4,00% (0,0400)" }
            ],
            correctPairs: {
              "A1": "B1",
              "A2": "B2",
              "A3": "B3",
              "A4": "B4"
            }
          },
          bahasLengkap: `<strong>Perhitungan Teorema Bayes:</strong><br>
          1. $P(\\text{Sakit} \\cap \\text{Pos}) = 0{,}02 \\times 0{,}95 = 0{,}0190 = 1{,}90\\%$ → <strong>Pasangan B1</strong>.<br>
          2. $P(\\text{Sehat} \\cap \\text{Pos}) = 0{,}98 \\times 0{,}04 = 0{,}0392$. Total $P(\\text{Pos}) = 0{,}0190 + 0{,}0392 = 0{,}0582 = 5{,}82\\%$ → <strong>Pasangan B2</strong>.<br>
          3. $P(\\text{Sakit} \\mid \\text{Pos}) = \\frac{0{,}0190}{0{,}0582} = \\frac{190}{582} = \\frac{95}{291} \\approx 32{,}65\\%$ → <strong>Pasangan B3</strong>.<br>
          4. Orang sehat positif semu $= 10.000 \\times 0{,}0392 = 392\\text{ orang}$ → <strong>Pasangan B4</strong>.`
        },

        // ====================================================================
        // NOMOR 4: MODEL 2 (MENJODOHKAN)
        // ====================================================================
        {
          id: 4,
          num: 4,
          model: 2,
          modelName: "Menjodohkan (Premis Kolom A ↔ Respons Kolom B)",
          domain: "Geometri Ruang & Pengukuran",
          kognitif: "Reasoning (Penalaran HOTS)",
          konteks: "Arsitektur Bangunan & Rekayasa Gudang",
          stimulusTitle: "Rangka Konstruksi Atap Limas Beraturan T.ABCD",
          stimulusBadge: "Geometri Dimensi Tiga (Limas)",
          stimulusText: `<p class="leading-relaxed">Struktur atap paviliun serbaguna berbentuk limas tegak beraturan $T.ABCD$ dengan alas persegi $ABCD$. Rangka baja memiliki spesifikasi ukuran eksak sebagai berikut:</p>
          <div class="my-3 p-3.5 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1">
            <p>• Panjang rusuk alas persegi: $AB = BC = CD = DA = 8\\text{ cm}$.</p>
            <p>• Panjang rusuk tegak pengikat: $TA = TB = TC = TD = 4\\sqrt{6}\\text{ cm}$.</p>
            <p>• Titik $O$ adalah titik pusat bidang alas $ABCD$ (proyeksi tegak lurus puncak $T$ ke alas).</p>
            <p>• Titik $E$ adalah titik tengah rusuk alas $AB$, dan titik $M$ adalah titik tengah rusuk tegak $TC$.</p>
          </div>`,
          questionText: "Jodohkan setiap elemen geometris pada Kolom A dengan nilai eksak panjang atau nilai trigonometri yang bersesuaian pada Kolom B!",
          payload: {
            columnA: [
              { id: "A1", text: "Tinggi tegak limas dari puncak T ke lantai alas (panjang ruas TO)" },
              { id: "A2", text: "Tinggi segitiga sisi tegak TAB dari puncak T ke rusuk alas AB (panjang ruas TE)" },
              { id: "A3", text: "Nilai kosinus sudut (cos α) antara bidang sisi tegak TAB dengan bidang alas ABCD" },
              { id: "A4", text: "Jarak eksak dari titik M (tengah rusuk tegak TC) ke rusuk alas AB" }
            ],
            columnB: [
              { id: "B1", text: "8 cm" },
              { id: "B2", text: "4√5 cm" },
              { id: "B3", text: "1/5 √5" },
              { id: "B4", text: "2√13 cm" },
              { id: "B5", text: "4√3 cm" },
              { id: "B6", text: "1/3 √6" },
              { id: "B7", text: "10 cm" }
            ],
            correctPairs: {
              "A1": "B1",
              "A2": "B2",
              "A3": "B3",
              "A4": "B4"
            }
          },
          bahasLengkap: `<strong>Perhitungan Geometri Limas:</strong><br>
          1. $AC = 8\\sqrt{2} \\implies AO = 4\\sqrt{2}$. Tinggi $TO = \\sqrt{(4\\sqrt{6})^2 - (4\\sqrt{2})^2} = \\sqrt{96 - 32} = \\sqrt{64} = 8\\text{ cm}$ → <strong>B1</strong>.<br>
          2. Pada $\\Delta TOE$, $OE = 4\\text{ cm} \\implies TE = \\sqrt{8^2 + 4^2} = \\sqrt{80} = 4\\sqrt{5}\\text{ cm}$ → <strong>B2</strong>.<br>
          3. $\\cos \\alpha = \\frac{OE}{TE} = \\frac{4}{4\\sqrt{5}} = \\frac{1}{\\sqrt{5}} = \\frac{1}{5}\\sqrt{5}$ → <strong>B3</strong>.<br>
          4. Proyeksi titik tengah $M$ ke alas berjarak $6\\text{ cm}$ dari rusuk $AB$, dan tinggi titik $M$ adalah $\\frac{1}{2}TO = 4\\text{ cm}$. Jarak $= \\sqrt{4^2 + 6^2} = \\sqrt{52} = 2\\sqrt{13}\\text{ cm}$ → <strong>B4</strong>.`
        },

        // ====================================================================
        // NOMOR 5: MODEL 3 (PARAGRAF RUMPANG NUMERIK)
        // ====================================================================
        {
          id: 5,
          num: 5,
          model: 3,
          modelName: "Paragraf Rumpang Numerik (4 Bagian Kosong)",
          domain: "Data & Ketidakpastian",
          kognitif: "Applying (Penerapan)",
          konteks: "Teknologi Energi Bersih & Kelestarian Lingkungan",
          stimulusTitle: "Efisiensi Pembangkit Listrik Tenaga Surya (PLTS) Atap Kampus GIS 2",
          stimulusBadge: "Analisis Data Bivariat & Regresi Linier",
          stimulusText: `<p class="leading-relaxed">Dalam rangka mendukung inisiatif <em>Green Campus</em>, SMA Global Islamic School 2 Serpong memasang sistem panel surya fotovoltaik di atap gedung sekolah. Data observasi selama lima hari berturut-turut mencatat hubungan antara intensitas radiasi matahari ($x$, dalam $\\text{kW/m}^2$) dengan total energi listrik harian yang diproduksi ($y$, dalam $\\text{kWh}$):</p>
          <div class="my-3 overflow-x-auto">
            <table class="w-full text-xs text-center border-collapse border border-slate-300">
              <thead class="bg-slate-100 font-bold text-slate-800">
                <tr>
                  <th class="border border-slate-300 p-2">Hari Observasi</th>
                  <th class="border border-slate-300 p-2">Radiasi Matahari (x) [kW/m²]</th>
                  <th class="border border-slate-300 p-2">Energi Listrik (y) [kWh]</th>
                </tr>
              </thead>
              <tbody class="text-slate-700">
                <tr><td class="border border-slate-300 p-1.5 font-bold">Hari 1</td><td class="border border-slate-300 p-1.5 font-mono">1</td><td class="border border-slate-300 p-1.5 font-mono">2</td></tr>
                <tr><td class="border border-slate-300 p-1.5 font-bold">Hari 2</td><td class="border border-slate-300 p-1.5 font-mono">2</td><td class="border border-slate-300 p-1.5 font-mono">5</td></tr>
                <tr><td class="border border-slate-300 p-1.5 font-bold">Hari 3</td><td class="border border-slate-300 p-1.5 font-mono">3</td><td class="border border-slate-300 p-1.5 font-mono">7</td></tr>
                <tr><td class="border border-slate-300 p-1.5 font-bold">Hari 4</td><td class="border border-slate-300 p-1.5 font-mono">4</td><td class="border border-slate-300 p-1.5 font-mono">11</td></tr>
                <tr><td class="border border-slate-300 p-1.5 font-bold">Hari 5</td><td class="border border-slate-300 p-1.5 font-mono">5</td><td class="border border-slate-300 p-1.5 font-mono">15</td></tr>
              </tbody>
            </table>
          </div>
          <p class="leading-relaxed text-xs text-slate-600">Gunakan rumus garis regresi linier metode kuadrat terkecil $\\hat{y} = a + bx$ dengan $b = \\frac{n\\sum xy - (\\sum x)(\\sum y)}{n\\sum x^2 - (\\sum x)^2}$ dan $a = \\bar{y} - b\\bar{x}$.</p>`,
          questionText: "Lengkapilah bagian rumpang (1), (2), (3), dan (4) pada paragraf laporan analisis berikut dengan mengetikkan nilai numerik eksak atau desimal yang tepat!",
          payload: {
            clozeText: `Berdasarkan data observasi selama 5 hari, diperoleh rata-rata intensitas radiasi matahari harian (x̄) sebesar (1) [___] kW/m². Dengan analisis regresi linier metode kuadrat terkecil, nilai koefisien arah garis regresi (gradien b) adalah sebesar (2) [___], sedangkan nilai konstanta intersep garis regresi (a) adalah sebesar (3) [___]. Dengan model persamaan garis regresi tersebut, jika pada hari berikutnya intensitas radiasi matahari mencapai 6 kW/m², maka estimasi produksi energi listrik panel surya adalah sebesar (4) [___] kWh.`,
            blanks: [
              {
                id: "b1",
                label: "(1)",
                correctValues: ["3", "3.0", "3,0"],
                placeholder: "Nilai rata-rata radiasi x̄",
                unit: "kW/m²",
                bahas: "x̄ = (1+2+3+4+5)/5 = 15/5 = 3 kW/m²."
              },
              {
                id: "b2",
                label: "(2)",
                correctValues: ["3.2", "3,2", "16/5"],
                placeholder: "Gradien b",
                unit: "",
                bahas: "Σx = 15, Σy = 40, Σx² = 55, Σxy = 152. b = (5(152) - 15(40)) / (5(55) - 225) = (760 - 600) / (275 - 225) = 160 / 50 = 3,2."
              },
              {
                id: "b3",
                label: "(3)",
                correctValues: ["-1.6", "-1,6", "-8/5"],
                placeholder: "Intersep a",
                unit: "",
                bahas: "ȳ = 40/5 = 8. a = ȳ - b(x̄) = 8 - (3,2)(3) = 8 - 9,6 = -1,6."
              },
              {
                id: "b4",
                label: "(4)",
                correctValues: ["17.6", "17,6"],
                placeholder: "Prediksi energi saat x=6",
                unit: "kWh",
                bahas: "ŷ = -1,6 + 3,2(6) = -1,6 + 19,2 = 17,6 kWh."
              }
            ]
          },
          bahasLengkap: `<strong>Perhitungan Regresi Linier Data Bivariat:</strong><br>
          1. $\\bar{x} = 15/5 = \\mathbf{3}$<br>
          2. $\\sum xy = 152 \\implies b = \\frac{5(152) - 15(40)}{5(55) - 15^2} = \\frac{160}{50} = \\mathbf{3{,}2}$<br>
          3. $a = 8 - 3{,}2(3) = 8 - 9{,}6 = \\mathbf{-1{,}6}$<br>
          4. Untuk $x = 6$: $\\hat{y} = -1{,}6 + 3{,}2(6) = \\mathbf{17{,}6\\text{ kWh}}$.<br>
          <strong>Kunci Isian:</strong> (1) 3 | (2) 3,2 | (3) -1,6 | (4) 17,6.`
        },

        // ====================================================================
        // NOMOR 6: MODEL 3 (PARAGRAF RUMPANG NUMERIK)
        // ====================================================================
        {
          id: 6,
          num: 6,
          model: 3,
          modelName: "Paragraf Rumpang Numerik (4 Bagian Kosong)",
          domain: "Aljabar & Kaidah Pencacahan",
          kognitif: "Applying (Penerapan)",
          konteks: "Permainan Sains & Percobaan Eksperimen",
          stimulusTitle: "Eksperimen Pengambilan Bola Tanpa Pengembalian",
          stimulusBadge: "Peluang Bersyarat & Frekuensi Harapan",
          stimulusText: `<p class="leading-relaxed">Dalam kegiatan praktikum statistika dan probabilitas di laboratorium matematika, sebuah wadah tertutup berisi bola identik yang terdiri atas <strong>6 bola berwarna merah</strong> dan <strong>4 bola berwarna biru</strong> (total 10 bola). Dua bola diambil secara acak satu per satu <strong>tanpa pengembalian</strong>.</p>
          <p class="leading-relaxed text-xs text-slate-600 mt-2">Seluruh rangkaian pengambilan dua bola ini kemudian diulang kembali secara independen sebanyak <strong>90 kali percobaan</strong> untuk menguji konsistensi frekuensi harapan empiris.</p>`,
          questionText: "Isilah bagian rumpang (1), (2), (3), dan (4) dengan menuliskan bentuk pecahan biasa atau bilangan bulat yang tepat!",
          payload: {
            clozeText: `Pada pengambilan dua bola secara berturut-turut tanpa pengembalian, peluang terambilnya bola pertama merah dan bola kedua merah adalah sebesar (1) [___]. Sementara itu, peluang terambilnya bola pertama merah dan bola kedua biru adalah sebesar (2) [___]. Jika dihitung peluang terambilnya kedua bola berbeda warna (satu merah dan satu biru), nilainya adalah sebesar (3) [___]. Berdasarkan peluang tersebut, dari 90 kali percobaan pengambilan dua bola, frekuensi harapan terambil kedua bola berwarna merah adalah sebanyak (4) [___] kali.`,
            blanks: [
              {
                id: "b1",
                label: "(1)",
                correctValues: ["1/3", "30/90", "5/15", "0.33", "0,33"],
                placeholder: "Peluang merah-merah",
                unit: "",
                bahas: "P(M₁ ∩ M₂) = (6/10) × (5/9) = 30/90 = 1/3."
              },
              {
                id: "b2",
                label: "(2)",
                correctValues: ["4/15", "24/90", "8/30"],
                placeholder: "Peluang merah-biru",
                unit: "",
                bahas: "P(M₁ ∩ B₂) = (6/10) × (4/9) = 24/90 = 4/15."
              },
              {
                id: "b3",
                label: "(3)",
                correctValues: ["8/15", "48/90", "16/30"],
                placeholder: "Peluang berlainan warna",
                unit: "",
                bahas: "P(Beda) = P(M, B) + P(B, M) = 24/90 + (4/10 × 6/9) = 48/90 = 8/15."
              },
              {
                id: "b4",
                label: "(4)",
                correctValues: ["30"],
                placeholder: "Frekuensi harapan",
                unit: "kali",
                bahas: "Fh(M, M) = 90 × (1/3) = 30 kali."
              }
            ]
          },
          bahasLengkap: `<strong>Langkah Probabilitas Berturut-turut:</strong><br>
          1. $P(M_1 \\cap M_2) = \\frac{6}{10} \\times \\frac{5}{9} = \\frac{30}{90} = \\mathbf{\\frac{1}{3}}$.<br>
          2. $P(M_1 \\cap B_2) = \\frac{6}{10} \\times \\frac{4}{9} = \\frac{24}{90} = \\mathbf{\\frac{4}{15}}$.<br>
          3. $P(\\text{Beda Warna}) = \\frac{24}{90} + \\frac{24}{90} = \\frac{48}{90} = \\mathbf{\\frac{8}{15}}$.<br>
          4. Frekuensi Harapan $= 90 \\times \\frac{1}{3} = \\mathbf{30\\text{ kali}}$.<br>
          <strong>Kunci Isian:</strong> (1) 1/3 | (2) 4/15 | (3) 8/15 | (4) 30.`
        },

        // ====================================================================
        // NOMOR 7: MODEL 4 (SEBAB AKIBAT ANALITIS)
        // ====================================================================
        {
          id: 7,
          num: 7,
          model: 4,
          modelName: "Sebab - Akibat Analitis",
          domain: "Geometri Ruang & Pengukuran",
          kognitif: "Reasoning (Penalaran HOTS)",
          konteks: "Matematika Murni & Teorema Geometri Ruang",
          stimulusTitle: "Teorema Trisepsi Diagonal Ruang Kubus ABCD.EFGH",
          stimulusBadge: "Jarak Titik ke Bidang Dimensi Tiga",
          stimulusText: `<p class="leading-relaxed">Diberikan kubus beraturan $ABCD.EFGH$ dengan panjang rusuk $s$. Di dalam geometri ruang, terdapat dua bidang segitiga diagonal yang sejajar, yaitu bidang $AFH$ dan bidang $BDG$. Diagonal ruang $EC$ menghubungkan titik sudut $E$ di bidang atap dengan titik sudut $C$ di bidang alas yang saling berseberangan.</p>`,
          questionText: "Analisis kebenaran Pernyataan, kebenaran Alasan, serta keabsahan hubungan sebab-akibat di antara keduanya!",
          payload: {
            pernyataan: "Pada kubus ABCD.EFGH dengan panjang rusuk s, jarak tegak lurus dari titik sudut C ke bidang segitiga diagonal BDG adalah sebesar 1/3 s√3.",
            alasan: "Diagonal ruang EC pada kubus ABCD.EFGH dipotong tegak lurus menjadi tiga segmen yang sama panjang oleh perpotongan bidang AFH dan bidang BDG.",
            options: [
              { id: "A", text: "Pernyataan BENAR, Alasan BENAR, dan keduanya menunjukkan hubungan SEBAB-AKIBAT." },
              { id: "B", text: "Pernyataan BENAR, Alasan BENAR, tetapi keduanya TIDAK menunjukkan hubungan sebab-akibat." },
              { id: "C", text: "Pernyataan BENAR, tetapi Alasan SALAH." },
              { id: "D", text: "Pernyataan SALAH, tetapi Alasan BENAR." },
              { id: "E", text: "Pernyataan dan Alasan, KEDUANYA SALAH." }
            ],
            key: "A"
          },
          bahasLengkap: `<strong>Analisis Logika & Geometris:</strong><br>
          • <em>Pernyataan:</em> Jarak titik $C$ ke bidang $BDG$ adalah $\\frac{1}{3} s\\sqrt{3}$. Ini adalah <strong>BENAR</strong> (teorema baku jarak titik sudut ke bidang diagonal terdekat).<br>
          • <em>Alasan:</em> Diagonal ruang $EC$ dengan panjang $s\\sqrt{3}$ memang ditembus tegak lurus oleh bidang $AFH$ dan $BDG$, membaginya tepat menjadi 3 segmen kongruen dengan panjang masing-masing $\\frac{1}{3} s\\sqrt{3}$. Ini adalah <strong>BENAR</strong>.<br>
          • <em>Hubungan Kausal:</em> Karena segmen diagonal ruang tersebut tegak lurus terhadap kedua bidang dan terbagi menjadi 3 bagian yang sama, maka jarak titik sudut $C$ ke bidang terdekat ($BDG$) setara dengan panjang 1 segmen trisepsi tersebut ($\\frac{1}{3} EC = \\frac{1}{3} s\\sqrt{3}$). Artinya, Alasan MENJELASKAN MENGAPA Pernyataan bernilai benar.<br>
          <strong>Kesimpulan:</strong> Pernyataan Benar, Alasan Benar, dan berhubungan Sebab-Akibat (Pilihan A).`
        },

        // ====================================================================
        // NOMOR 8: MODEL 4 (SEBAB AKIBAT ANALITIS)
        // ====================================================================
        {
          id: 8,
          num: 8,
          model: 4,
          modelName: "Sebab - Akibat Analitis",
          domain: "Data & Ketidakpastian",
          kognitif: "Knowing (Pemahaman Konseptual)",
          konteks: "Statistika & Metodologi Penelitian Ilmiah",
          stimulusTitle: "Prinsip Statistika: Korelasi Linier vs Hubungan Kausalitas",
          stimulusBadge: "Analisis Data Bivariat (Korelasi Pearson)",
          stimulusText: `<p class="leading-relaxed">Dalam analisis data bivariat, peneliti kerap mengukur koefisien korelasi momen-tangguh Pearson ($r$) antara dua variabel $X$ dan $Y$ yang memiliki skala numerik. Prinsip metodologi statistika modern membedakan secara tegas antara derajat asosiasi linier dengan hubungan kausalitas (sebab-akibat).</p>`,
          questionText: "Analisis kebenaran Pernyataan, kebenaran Alasan, serta keabsahan hubungan kausal di antara keduanya!",
          payload: {
            pernyataan: "Adanya nilai koefisien korelasi Pearson r yang sangat mendekati +1 pada data bivariat membuktikan secara mutlak bahwa perubahan pada variabel X pasti merupakan penyebab langsung (kausalitas tunggal) dari perubahan pada variabel Y.",
            alasan: "Koefisien korelasi Pearson hanya mengukur derajat keeratan dan arah hubungan linier antar dua variabel, bukan membuktikan mekanisme hubungan sebab-akibat (correlation does not imply causation).",
            options: [
              { id: "A", text: "Pernyataan BENAR, Alasan BENAR, dan keduanya menunjukkan hubungan SEBAB-AKIBAT." },
              { id: "B", text: "Pernyataan BENAR, Alasan BENAR, tetapi keduanya TIDAK menunjukkan hubungan sebab-akibat." },
              { id: "C", text: "Pernyataan BENAR, tetapi Alasan SALAH." },
              { id: "D", text: "Pernyataan SALAH, tetapi Alasan BENAR." },
              { id: "E", text: "Pernyataan dan Alasan, KEDUANYA SALAH." }
            ],
            key: "D"
          },
          bahasLengkap: `<strong>Analisis Logika Statistika:</strong><br>
          • <em>Pernyataan:</em> Nilai $r \\approx +1$ membuktikan hubungan kausalitas secara mutlak. Ini adalah <strong>SALAH</strong>. Prinsip dasar statistika menyatakan <em>"Correlation does not imply causation"</em> (bisa terjadi korelasi semu atau dipengaruhi variabel perancu ketiga).<br>
          • <em>Alasan:</em> Koefisien korelasi Pearson hanya mengukur keeratan asosiasi linier, bukan membuktikan mekanisme sebab-akibat. Ini adalah <strong>BENAR</strong>.<br>
          <strong>Kesimpulan:</strong> Pernyataan SALAH dan Alasan BENAR (Pilihan D).`
        },

        // ====================================================================
        // NOMOR 9: MODEL 5 (PILIHAN GANDA KOMPLEKS / CHECKBOX MULTI-SELECT)
        // ====================================================================
        {
          id: 9,
          num: 9,
          model: 5,
          modelName: "Pilihan Ganda Kompleks (Checkbox Multi-Select)",
          domain: "Data & Ketidakpastian",
          kognitif: "Applying (Penerapan)",
          konteks: "Teknologi, Industri & Kendali Mutu",
          stimulusTitle: "Uji Daya Tahan Baterai Perangkat IoT Smart School",
          stimulusBadge: "Statistika Data Berkelompok (Median, Modus, Kuartil)",
          stimulusText: `<p class="leading-relaxed">Laboratorium Komputer dan Jaringan SMA GIS 2 Serpong melakukan uji ketahanan daya baterai lithium terhadap $40\\text{ unit}$ modul sensor IoT <em>Smart School</em>. Data lama waktu bertahan baterai (dalam satuan jam) dirangkum dalam tabel distribusi frekuensi berikut:</p>
          <div class="my-3 overflow-x-auto">
            <table class="w-full text-xs text-center border-collapse border border-slate-300">
              <thead class="bg-slate-100 font-bold text-slate-800">
                <tr>
                  <th class="border border-slate-300 p-2">Daya Tahan Baterai (Jam)</th>
                  <th class="border border-slate-300 p-2">Frekuensi (fi)</th>
                  <th class="border border-slate-300 p-2">Frekuensi Kumulatif (Fk)</th>
                </tr>
              </thead>
              <tbody class="text-slate-700">
                <tr><td class="border border-slate-300 p-1.5 font-mono">21 - 25</td><td class="border border-slate-300 p-1.5 font-mono">4</td><td class="border border-slate-300 p-1.5 font-mono">4</td></tr>
                <tr><td class="border border-slate-300 p-1.5 font-mono">26 - 30</td><td class="border border-slate-300 p-1.5 font-mono">8</td><td class="border border-slate-300 p-1.5 font-mono">12</td></tr>
                <tr><td class="border border-slate-300 p-1.5 font-mono font-bold bg-blue-50 text-blue-900">31 - 35</td><td class="border border-slate-300 p-1.5 font-mono font-bold bg-blue-50 text-blue-900">14</td><td class="border border-slate-300 p-1.5 font-mono font-bold bg-blue-50 text-blue-900">26</td></tr>
                <tr><td class="border border-slate-300 p-1.5 font-mono">36 - 40</td><td class="border border-slate-300 p-1.5 font-mono">10</td><td class="border border-slate-300 p-1.5 font-mono">36</td></tr>
                <tr><td class="border border-slate-300 p-1.5 font-mono">41 - 45</td><td class="border border-slate-300 p-1.5 font-mono">4</td><td class="border border-slate-300 p-1.5 font-mono">40</td></tr>
              </tbody>
            </table>
          </div>`,
          questionText: "Beri tanda centang (✓) pada kotak untuk setiap pernyataan yang bernilai BENAR! (Jawaban benar lebih dari satu)",
          payload: {
            statements: [
              {
                id: "c1",
                text: "Nilai modus daya tahan baterai pada kelompok data tersebut adalah tepat 33,5 jam.",
                key: true,
                bahas: "Kelas modus: 31-35. Tb = 30,5, d1 = 14-8 = 6, d2 = 14-10 = 4, p = 5. Mo = 30,5 + (6/(6+4)) × 5 = 30,5 + 3 = 33,5 jam. (BENAR)"
              },
              {
                id: "c2",
                text: "Sebanyak 35% dari total unit baterai sensor IoT memiliki daya tahan operasional lebih dari 35 jam.",
                key: true,
                bahas: "Baterai > 35 jam: kelas 36-40 (10 unit) + kelas 41-45 (4 unit) = 14 unit. Persentase = (14/40) × 100% = 35%. (BENAR)"
              },
              {
                id: "c3",
                text: "Nilai median waktu operasional baterai lebih besar daripada nilai modusnya.",
                key: false,
                bahas: "Median (n/2 = 20): kelas 31-35. Tb = 30,5, Fk = 12, fi = 14, p = 5. Me = 30,5 + ((20-12)/14) × 5 = 30,5 + 2,86 = 33,36 jam. Karena 33,36 < 33,5 (Modus), maka Median LEBIH KECIL dari Modus. (SALAH)"
              },
              {
                id: "c4",
                text: "Nilai kuartil bawah (Q1) dari data daya tahan baterai tersebut adalah sebesar 29,25 jam.",
                key: true,
                bahas: "Q1 (n/4 = 10): kelas 26-30. Tb = 25,5, Fk = 4, fi = 8, p = 5. Q1 = 25,5 + ((10-4)/8) × 5 = 25,5 + 3,75 = 29,25 jam. (BENAR)"
              }
            ]
          },
          bahasLengkap: `<strong>Perhitungan Ukuran Pemusatan & Letak Data Berkelompok:</strong><br>
          1. <em>Modus:</em> $M_o = 30{,}5 + \\frac{6}{6+4} \\times 5 = 30{,}5 + 3 = \\mathbf{33{,}5\\text{ jam}}$. (Centang ✓)<br>
          2. <em>Persentase > 35 jam:</em> $\\frac{10 + 4}{40} \\times 100\\% = \\mathbf{35\\%}$. (Centang ✓)<br>
          3. <em>Median:</em> $M_e = 30{,}5 + \\frac{8}{14} \\times 5 \\approx 33{,}36\\text{ jam}$. Lebih kecil dari Modus, bukan lebih besar. (Jangan dicentang)<br>
          4. <em>Kuartil Pertama $Q_1$:</em> $Q_1 = 25{,}5 + \\frac{6}{8} \\times 5 = 25{,}5 + 3{,}75 = \\mathbf{29{,}25\\text{ jam}}$. (Centang ✓)<br>
          <strong>Kunci Jawaban:</strong> Pernyataan 1, 2, dan 4.`
        },

        // ====================================================================
        // NOMOR 10: MODEL 5 (PILIHAN GANDA KOMPLEKS / CHECKBOX MULTI-SELECT)
        // ====================================================================
        {
          id: 10,
          num: 10,
          model: 5,
          modelName: "Pilihan Ganda Kompleks (Checkbox Multi-Select)",
          domain: "Geometri Ruang & Pengukuran",
          kognitif: "Reasoning (Penalaran HOTS)",
          konteks: "Desain Produk & Geometri Ruang",
          stimulusTitle: "Kemasan Cinderamata Bidang Empat Beraturan (Regular Tetrahedron)",
          stimulusBadge: "Geometri Dimensi Tiga (Tetrahedron)",
          stimulusText: `<p class="leading-relaxed">Sebuah kemasan produk cinderamata eksklusif wisuda SMA GIS 2 Serpong dirancang dengan bentuk bidang empat beraturan (<em>regular tetrahedron</em>) $T.ABC$. Seluruh rusuk pembentuknya memiliki panjang yang sama, yaitu $s = 6\\text{ cm}$. Kemasan ini terbuat dari lembaran karton tebal berpola lipatan piramida segitiga sama sisi.</p>`,
          questionText: "Beri tanda centang (✓) pada kotak untuk setiap karakteristik geometris kemasan yang bernilai BENAR! (Jawaban benar lebih dari satu)",
          payload: {
            statements: [
              {
                id: "c1",
                text: "Tinggi tegak kemasan dari titik puncak T ke bidang alas segitiga ABC adalah tepat 2√6 cm.",
                key: true,
                bahas: "Tinggi tetrahedron reguler h = s√(2/3) = (s√6)/3 = (6√6)/3 = 2√6 cm. (BENAR)"
              },
              {
                id: "c2",
                text: "Volume ruang kemasan cinderamata tersebut adalah sebesar 18√2 cm³.",
                key: true,
                bahas: "Luas alas = (1/4)s²√3 = 9√3 cm². Volume = (1/3) × (9√3) × (2√6) = 6√18 = 18√2 cm³. (BENAR)"
              },
              {
                id: "c3",
                text: "Luas total seluruh lembaran karton permukaan kemasan adalah sebesar 36√3 cm².",
                key: true,
                bahas: "Luas permukaan = 4 × Luas satu segitiga sama sisi = 4 × 9√3 = 36√3 cm². (BENAR)"
              },
              {
                id: "c4",
                text: "Nilai kosinus sudut (cos α) antara bidang sisi tegak TAB dengan bidang alas ABC adalah tepat 1/3.",
                key: true,
                bahas: "Tinggi segitiga sisi = 3√3 cm. Jarak pusat ke rusuk alas = √3 cm. cos α = √3 / (3√3) = 1/3. (BENAR)"
              }
            ]
          },
          bahasLengkap: `<strong>Perhitungan Geometri Tetrahedron Beraturan $s = 6\\text{ cm}$:</strong><br>
          1. $h = \\frac{6\\sqrt{6}}{3} = \\mathbf{2\\sqrt{6}\\text{ cm}}$. (Centang ✓)<br>
          2. $V = \\frac{1}{3} (9\\sqrt{3})(2\\sqrt{6}) = \\mathbf{18\\sqrt{2}\\text{ cm}^3}$. (Centang ✓)<br>
          3. $L_{permukaan} = 4 \\times \\left(\\frac{1}{4} \\cdot 36\\sqrt{3}\\right) = \\mathbf{36\\sqrt{3}\\text{ cm}^2}$. (Centang ✓)<br>
          4. $\\cos \\alpha = \\frac{1}{3}$. (Centang ✓)<br>
          <strong>Kunci Jawaban:</strong> SEMUA pernyataan (1, 2, 3, dan 4) bernilai BENAR.`
        }
      ]
    },
    {
      id: "GLADI_02",
      code: "SIMULASI-02",
      title: "Drilling Asesmen Nasional TKA & Literasi Sains Gelombang 2",
      subtitle: "Drilling Pemantapan 5 Model Soal AKM Fase F • SMA GIS 2 Serpong",
      targetDate: "12 - 18 Oktober 2026",
      durationMinutes: 60,
      totalQuestions: 10,
      kategoriLevel: "Fase F (Kelas XII SMA)",
      questions: [
        // ====================================================================
        // NOMOR 1: MODEL 1 (PERNYATAAN BENAR DAN SALAH)
        // ====================================================================
        {
          id: 11,
          num: 1,
          model: 1,
          modelName: "Pernyataan Benar / Salah (Tabel 4 Baris)",
          domain: "Data & Ketidakpastian",
          kognitif: "Applying (Penerapan)",
          konteks: "Sosial, Akademik & Evaluasi Pendidikan",
          stimulusTitle: "Analisis Komparatif Skor Try Out TKA Empat Rombel Kelas XII",
          stimulusBadge: "Statistika Data: Rataan Gabungan & Kuartil",
          stimulusText: `<p class="leading-relaxed">SMA GIS 2 Serpong melaksanakan Try Out simulasi TKA Matematika untuk 100 siswa kelas XII yang terbagi rata ke dalam 4 rombel belajar (masing-masing rombel beranggotakan tepat 25 siswa: 12 F-1, 12 F-2, 12 F-3, dan 12 F-4). Data hasil evaluasi tercatat sebagai berikut:</p>
          <div class="my-3 p-3.5 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1">
            <p>• Rata-rata nilai kelas 12 F-1 adalah <strong>76</strong>, kelas 12 F-2 adalah <strong>80</strong>, kelas 12 F-3 adalah <strong>88</strong>, dan kelas 12 F-4 adalah <strong>84</strong>.</p>
            <p>• Pada kelas 12 F-3 (rombel asuhan Mr. Ardi), nilai kuartil bawah $Q_1 = 82$, median $Q_2 = 88$, dan kuartil atas $Q_3 = 94$.</p>
          </div>`,
          questionText: "Tentukan status kebenaran (BENAR atau SALAH) untuk setiap kesimpulan analisis statistika berikut!",
          payload: {
            rows: [
              {
                id: "r1",
                statement: "Nilai rata-rata gabungan seluruh 100 siswa kelas XII pada Try Out tersebut adalah tepat 82.",
                key: "B",
                bahas: "x̄_gab = (76 + 80 + 88 + 84) / 4 = 328 / 4 = 82. (BENAR)"
              },
              {
                id: "r2",
                statement: "Jangkauan interkuartil (IQR) data nilai pada rombel 12 F-3 adalah sebesar 12 poin.",
                key: "B",
                bahas: "IQR = Q3 - Q1 = 94 - 82 = 12. (BENAR)"
              },
              {
                id: "r3",
                statement: "Batas nilai minimum agar suatu skor tidak dikategorikan sebagai pencilan bawah (outlier) di 12 F-3 adalah 70.",
                key: "S",
                bahas: "Pagar Bawah = Q1 - 1,5(IQR) = 82 - 1,5(12) = 82 - 18 = 64. Nilainya adalah 64, bukan 70. (SALAH)"
              },
              {
                id: "r4",
                statement: "Rata-rata gabungan rombel 12 F-3 dan 12 F-4 adalah tepat 86.",
                key: "B",
                bahas: "x̄(F3+F4) = (88 + 84) / 2 = 172 / 2 = 86. (BENAR)"
              }
            ]
          },
          bahasLengkap: `<strong>Pembuktian Statistika Deskriptif:</strong><br>
          1. $\\bar{x}_{gab} = \\frac{25(76)+25(80)+25(88)+25(84)}{100} = \\frac{76+80+88+84}{4} = \\mathbf{82}$. (B)<br>
          2. $IQR = Q_3 - Q_1 = 94 - 82 = \\mathbf{12}$. (B)<br>
          3. Batas pagar bawah $= Q_1 - 1{,}5(IQR) = 82 - 18 = \\mathbf{64}$. Pernyataan menyatakan 70, maka SALAH.<br>
          4. $\\bar{x}_{F3+F4} = \\frac{88+84}{2} = \\mathbf{86}$. (B)<br>
          <strong>Kunci:</strong> B - B - S - B.`
        },

        // ====================================================================
        // NOMOR 2: MODEL 1 (PERNYATAAN BENAR DAN SALAH)
        // ====================================================================
        {
          id: 12,
          num: 2,
          model: 1,
          modelName: "Pernyataan Benar / Salah (Tabel 4 Baris)",
          domain: "Geometri Ruang & Pengukuran",
          kognitif: "Reasoning (Penalaran HOTS)",
          konteks: "Sains & Teknologi Panggung",
          stimulusTitle: "Instalasi Lampu Sorot Panggung Seni & Geometri Kubus",
          stimulusBadge: "Jarak Garis ke Bidang pada Kubus",
          stimulusText: `<p class="leading-relaxed">Pada tata panggung pementasan teater sekolah, rangka panggung dimodelkan sebagai kubus $ABCD.EFGH$ dengan panjang rusuk $10\\text{ meter}$. Sebuah rel lampu sorot dipasang membentang lurus di sepanjang rusuk $AE$, dan bidang reflektor cahaya dipasang pada bidang diagonal $BDHF$.</p>`,
          questionText: "Tentukan status kebenaran (BENAR atau SALAH) untuk setiap pernyataan geometris berikut!",
          payload: {
            rows: [
              {
                id: "r1",
                statement: "Garis rusuk rel AE terletak sejajar dengan bidang reflektor diagonal BDHF.",
                key: "B",
                bahas: "Garis AE sejajar dengan garis DH yang terletak pada bidang BDHF. Menurut teorema geometri ruang, jika suatu garis sejajar dengan salah satu garis pada bidang, maka garis tersebut sejajar dengan bidang tersebut. (BENAR)"
              },
              {
                id: "r2",
                statement: "Jarak tegak lurus terpendek dari garis rel AE ke bidang reflektor BDHF adalah tepat 5√2 meter.",
                key: "B",
                bahas: "Karena AE sejajar BDHF, jarak AE ke BDHF sama dengan jarak titik A ke garis BD (karena BD pada bidang BDHF dan BDHF tegak lurus bidang ABCD). Jarak A ke BD adalah 1/2 AC = 1/2 (10√2) = 5√2 meter. (BENAR)"
              },
              {
                id: "r3",
                statement: "Garis diagonal bidang AH tegak lurus terhadap garis diagonal bidang BG.",
                key: "B",
                bahas: "Garis BG sejajar dengan AH'? AH pada ABGH tegak lurus terhadap BG karena ABGH adalah bidang persegi panjang dengan sisi berlawanan saling tegak lurus dalam proyeksi kubus (BG tegak lurus bidang ACH). Garis AH tegak lurus BG pada kubus beraturan. (BENAR)"
              },
              {
                id: "r4",
                statement: "Jarak dari titik sudut C ke bidang diagonal BDHF adalah 10√2 meter.",
                key: "S",
                bahas: "Jarak C ke bidang BDHF adalah 1/2 diagonal AC = 1/2 (10√2) = 5√2 meter, BUKAN 10√2 meter. (SALAH)"
              }
            ]
          },
          bahasLengkap: `<strong>Analisis Dimensi Tiga Kubus $s = 10\\text{ m}$:</strong><br>
          1. $AE \\parallel DH \\subset BDHF \\implies AE \\parallel BDHF$. (B)<br>
          2. Jarak garis $AE$ ke bidang $BDHF = \\frac{1}{2} AC = \\frac{1}{2}(10\\sqrt{2}) = \\mathbf{5\\sqrt{2}\\text{ m}}$. (B)<br>
          3. $AH \\perp BG$ bersilangan tegak lurus pada kubus. (B)<br>
          4. Jarak $C$ ke $BDHF = 5\\sqrt{2}\\text{ m}$, bukan $10\\sqrt{2}\\text{ m}$. (S)<br>
          <strong>Kunci:</strong> B - B - B - S.`
        },

        // ====================================================================
        // NOMOR 3: MODEL 2 (MENJODOHKAN)
        // ====================================================================
        {
          id: 13,
          num: 3,
          model: 2,
          modelName: "Menjodohkan (Premis Kolom A ↔ Respons Kolom B)",
          domain: "Aljabar & Kaidah Pencacahan",
          kognitif: "Applying (Penerapan)",
          konteks: "Kompetisi Sains & Prestasi Sekolah",
          stimulusTitle: "Seleksi Delegasi Olimpiade Sains Nasional (OSN) GIS 2 Serpong",
          stimulusBadge: "Kombinasi Pemilihan Delegasi Bersyarat",
          stimulusText: `<p class="leading-relaxed">Klub Matematika SMA GIS 2 Serpong memiliki <strong>6 siswa putra</strong> dan <strong>5 siswa putri</strong> berprestasi. Pihak sekolah akan memilih sebuah tim delegasi beranggotakan <strong>4 siswa</strong> untuk mewakili sekolah pada kompetisi cerdas cermat tingkat nasional.</p>`,
          questionText: "Jodohkan setiap syarat komposisi pemilihan delegasi pada Kolom A dengan banyaknya variasi susunan tim yang mungkin pada Kolom B!",
          payload: {
            columnA: [
              { id: "A1", text: "Banyak cara memilih tim delegasi dengan syarat wajib beranggotakan minimal 2 siswa putri" },
              { id: "A2", text: "Banyak cara memilih tim delegasi dengan komposisi tepat 3 siswa putra dan 1 siswa putri" },
              { id: "A3", text: "Banyak cara memilih tim delegasi yang seluruhnya terdiri dari siswa putra (tanpa putri)" },
              { id: "A4", text: "Total cara memilih 4 siswa secara bebas dari seluruh 11 calon delegasi tanpa syarat gender" }
            ],
            columnB: [
              { id: "B1", text: "215 cara" },
              { id: "B2", text: "100 cara" },
              { id: "B3", text: "15 cara" },
              { id: "B4", text: "330 cara" },
              { id: "B5", text: "150 cara" },
              { id: "B6", text: "75 cara" }
            ],
            correctPairs: {
              "A1": "B1",
              "A2": "B2",
              "A3": "B3",
              "A4": "B4"
            }
          },
          bahasLengkap: `<strong>Perhitungan Kombinasi:</strong><br>
          1. <em>Minimal 2 putri:</em> (2Pa,2Pi) + (1Pa,3Pi) + (0Pa,4Pi) = [C(6,2)·C(5,2)] + [C(6,1)·C(5,3)] + [C(6,0)·C(5,4)] = (15·10) + (6·10) + (1·5) = 150 + 60 + 5 = <strong>215 cara</strong> (B1).<br>
          2. <em>Tepat 3 putra & 1 putri:</em> C(6,3)·C(5,1) = 20 · 5 = <strong>100 cara</strong> (B2).<br>
          3. <em>Semua putra:</em> C(6,4) = <strong>15 cara</strong> (B3).<br>
          4. <em>Total bebas:</em> C(11,4) = (11·10·9·8)/(4·3·2·1) = <strong>330 cara</strong> (B4).`
        },

        // ====================================================================
        // NOMOR 4: MODEL 2 (MENJODOHKAN)
        // ====================================================================
        {
          id: 14,
          num: 4,
          model: 2,
          modelName: "Menjodohkan (Premis Kolom A ↔ Respons Kolom B)",
          domain: "Geometri Ruang & Pengukuran",
          kognitif: "Applying (Penerapan)",
          konteks: "Desain Arsitektur Tenda Glamping",
          stimulusTitle: "Desain Tenda Glamping Piramida Bidang Empat Beraturan",
          stimulusBadge: "Geometri Dimensi Tiga (Tetrahedron)",
          stimulusText: `<p class="leading-relaxed">Sebuah tenda perkemahan modern (*glamping*) dirancang mengadopsi struktur bidang empat beraturan (*regular tetrahedron*) $T.ABC$ dengan panjang seluruh rusuknya $s = 6\\text{ meter}$.</p>`,
          questionText: "Jodohkan setiap besaran geometris tenda pada Kolom A dengan nilai eksak yang bersesuaian pada Kolom B!",
          payload: {
            columnA: [
              { id: "A1", text: "Tinggi tiang penyangga tegak utama di pusat tenda dari puncak T ke lantai" },
              { id: "A2", text: "Luas lantai dasar perkemahan tenda (segitiga sama sisi ABC)" },
              { id: "A3", text: "Volume kapasitas ruang udara di dalam tenda glamping" },
              { id: "A4", text: "Nilai kosinus sudut kemiringan dinding kain tenda terhadap bidang lantai" }
            ],
            columnB: [
              { id: "B1", text: "2√6 meter" },
              { id: "B2", text: "9√3 m²" },
              { id: "B3", text: "18√2 m³" },
              { id: "B4", text: "1/3" },
              { id: "B5", text: "4√3 meter" },
              { id: "B6", text: "36√2 m³" }
            ],
            correctPairs: {
              "A1": "B1",
              "A2": "B2",
              "A3": "B3",
              "A4": "B4"
            }
          },
          bahasLengkap: `<strong>Perhitungan Geometri Tetrahedron $s = 6\\text{ m}$:</strong><br>
          1. Tinggi $h = \\frac{s\\sqrt{6}}{3} = \\frac{6\\sqrt{6}}{3} = \\mathbf{2\\sqrt{6}\\text{ m}}$ (B1).<br>
          2. Luas alas $L = \\frac{1}{4}(6^2)\\sqrt{3} = \\mathbf{9\\sqrt{3}\\text{ m}^2}$ (B2).<br>
          3. Volume $V = \\frac{1}{3}(9\\sqrt{3})(2\\sqrt{6}) = \\mathbf{18\\sqrt{2}\\text{ m}^3}$ (B3).<br>
          4. Sudut dihedral $\\cos \\alpha = \\mathbf{1/3}$ (B4).`
        },

        // ====================================================================
        // NOMOR 5: MODEL 3 (PARAGRAF RUMPANG NUMERIK)
        // ====================================================================
        {
          id: 15,
          num: 5,
          model: 3,
          modelName: "Paragraf Rumpang Numerik (4 Bagian Kosong)",
          domain: "Data & Ketidakpastian",
          kognitif: "Applying (Penerapan)",
          konteks: "Ekonomi, Finansial & Investasi Syariah",
          stimulusTitle: "Tren Pertumbuhan Harga Logam Mulia Investasi Syariah",
          stimulusBadge: "Analisis Data Bivariat & Prediksi Regresi",
          stimulusText: `<p class="leading-relaxed">Data pengamatan harga logam mulia emas ($y$, dalam ratusan ribu rupiah per gram) selama empat tahun berturut-turut ($x = 1, 2, 3, 4$):</p>
          <div class="my-3 overflow-x-auto">
            <table class="w-full text-xs text-center border-collapse border border-slate-300">
              <thead class="bg-slate-100 font-bold text-slate-800">
                <tr>
                  <th class="border border-slate-300 p-2">Tahun ke- (x)</th>
                  <th class="border border-slate-300 p-2">1</th>
                  <th class="border border-slate-300 p-2">2</th>
                  <th class="border border-slate-300 p-2">3</th>
                  <th class="border border-slate-300 p-2">4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-slate-300 p-1.5 font-bold">Harga (y)</td>
                  <td class="border border-slate-300 p-1.5 font-mono">6</td>
                  <td class="border border-slate-300 p-1.5 font-mono">9</td>
                  <td class="border border-slate-300 p-1.5 font-mono">11</td>
                  <td class="border border-slate-300 p-1.5 font-mono">14</td>
                </tr>
              </tbody>
            </table>
          </div>`,
          questionText: "Isilah bagian rumpang (1), (2), (3), dan (4) pada laporan prediksi berikut dengan angka eksak atau desimal!",
          payload: {
            clozeText: `Dari data 4 periode tahun tersebut, diperoleh rata-rata nilai x (x̄) sebesar (1) [___] dan rata-rata nilai y (ȳ) sebesar 10. Nilai koefisien arah garis regresi b bernilai (2) [___], sedangkan konstanta intersep a bernilai (3) [___]. Dengan model persamaan ŷ = a + bx, maka estimasi harga emas pada tahun ke-5 (x = 5) diprediksi mencapai nilai (4) [___] ratusan ribu rupiah.`,
            blanks: [
              {
                id: "b1",
                label: "(1)",
                correctValues: ["2.5", "2,5", "5/2"],
                placeholder: "Rata-rata x̄",
                unit: "",
                bahas: "x̄ = (1+2+3+4)/4 = 10/4 = 2,5."
              },
              {
                id: "b2",
                label: "(2)",
                correctValues: ["2.6", "2,6", "13/5"],
                placeholder: "Gradien b",
                unit: "",
                bahas: "Σx=10, Σy=40, Σx²=30, Σxy=1(6)+2(9)+3(11)+4(14)=6+18+33+56=113. b = (4(113) - 10(40)) / (4(30) - 100) = (452 - 400) / 20 = 52 / 20 = 2,6."
              },
              {
                id: "b3",
                label: "(3)",
                correctValues: ["3.5", "3,5", "7/2"],
                placeholder: "Intersep a",
                unit: "",
                bahas: "a = ȳ - b(x̄) = 10 - 2,6(2,5) = 10 - 6,5 = 3,5."
              },
              {
                id: "b4",
                label: "(4)",
                correctValues: ["16.5", "16,5", "33/2"],
                placeholder: "Prediksi saat x=5",
                unit: "",
                bahas: "ŷ = 3,5 + 2,6(5) = 3,5 + 13 = 16,5."
              }
            ]
          },
          bahasLengkap: `<strong>Perhitungan Regresi Linier:</strong><br>
          1. $\\bar{x} = \\mathbf{2{,}5}$<br>
          2. $b = \\frac{4(113) - 400}{120 - 100} = \\frac{52}{20} = \\mathbf{2{,}6}$<br>
          3. $a = 10 - 2{,}6(2{,}5) = \\mathbf{3{,}5}$<br>
          4. Untuk $x = 5$: $\\hat{y} = 3{,}5 + 2{,}6(5) = \\mathbf{16{,}5}$.<br>
          <strong>Kunci:</strong> (1) 2,5 | (2) 2,6 | (3) 3,5 | (4) 16,5.`
        },

        // ====================================================================
        // NOMOR 6: MODEL 3 (PARAGRAF RUMPANG NUMERIK)
        // ====================================================================
        {
          id: 16,
          num: 6,
          model: 3,
          modelName: "Paragraf Rumpang Numerik (4 Bagian Kosong)",
          domain: "Aljabar & Kaidah Pencacahan",
          kognitif: "Applying (Penerapan)",
          konteks: "Kombinatorika Huruf & Sandi Bahasa",
          stimulusTitle: "Analisis Anagram & Permutasi Kata 'KOLABORASI'",
          stimulusBadge: "Permutasi Unsur Sama & Peluang",
          stimulusText: `<p class="leading-relaxed">Diberikan kata <strong>"KOLABORASI"</strong> yang terdiri atas 10 huruf: K (1), O (2), L (1), A (2), B (1), R (1), S (1), I (1). Huruf vokal terdiri atas O, A, O, A, I (total 5 huruf vokal).</p>`,
          questionText: "Isilah bagian rumpang (1), (2), (3), dan (4) dengan menuliskan bilangan bulat atau nilai pecahan desimal yang tepat!",
          payload: {
            clozeText: `Pada kata "KOLABORASI", terdapat sebanyak (1) [___] huruf vokal. Banyak susunan kata berbeda yang dapat dibentuk dari seluruh huruf kata tersebut adalah sebanyak (2) [___] kata. Jika disyaratkan huruf K dan I harus menempati posisi paling ujung depan dan paling ujung belakang (K...I atau I...K), banyaknya susunan kata adalah sebanyak (3) [___] susunan. Peluang huruf pertama yang terambil secara acak merupakan huruf vokal adalah sebesar (4) [___].`,
            blanks: [
              {
                id: "b1",
                label: "(1)",
                correctValues: ["5"],
                placeholder: "Jumlah vokal",
                unit: "huruf",
                bahas: "Huruf vokal: O, A, O, A, I = 5 huruf."
              },
              {
                id: "b2",
                label: "(2)",
                correctValues: ["453600", "453.600"],
                placeholder: "Total susunan kata",
                unit: "kata",
                bahas: "10! / (2! × 2!) = 3.628.800 / 4 = 453.600 kata."
              },
              {
                id: "b3",
                label: "(3)",
                correctValues: ["20160", "20.160"],
                placeholder: "Susunan ujung K...I",
                unit: "susunan",
                bahas: "Sisa 8 huruf di tengah: 8! / (2! × 2!) = 40.320 / 4 = 10.080. Dua permutasi ujung (K...I atau I...K): 10.080 × 2 = 20.160 susunan."
              },
              {
                id: "b4",
                label: "(4)",
                correctValues: ["0.5", "0,5", "1/2", "5/10"],
                placeholder: "Peluang huruf pertama vokal",
                unit: "",
                bahas: "P(Vokal) = 5 / 10 = 0,5 (atau 1/2)."
              }
            ]
          },
          bahasLengkap: `<strong>Kombinatorika Kata "KOLABORASI":</strong><br>
          1. Jumlah vokal: O, A, O, A, I $= \\mathbf{5\\text{ huruf}}$.<br>
          2. Total anagram $= \\frac{10!}{2! \\cdot 2!} = \\frac{3.628.800}{4} = \\mathbf{453.600\\text{ kata}}$.<br>
          3. Ujung K dan I $= 2! \\times \\frac{8!}{2! \\cdot 2!} = 2 \\times 10.080 = \\mathbf{20.160\\text{ kata}}$.<br>
          4. Peluang vokal pertama $= 5/10 = \\mathbf{0{,}5}$.<br>
          <strong>Kunci:</strong> (1) 5 | (2) 453600 | (3) 20160 | (4) 0,5.`
        },

        // ====================================================================
        // NOMOR 7: MODEL 4 (SEBAB AKIBAT ANALITIS)
        // ====================================================================
        {
          id: 17,
          num: 7,
          model: 4,
          modelName: "Sebab - Akibat Analitis",
          domain: "Data & Ketidakpastian",
          kognitif: "Knowing (Pemahaman Konseptual)",
          konteks: "Statistika & Analisis Ketahanan Data",
          stimulusTitle: "Resistensi Ukuran Pemusatan terhadap Pencilan (Outlier)",
          stimulusBadge: "Statistika Deskriptif (Mean vs Median)",
          stimulusText: `<p class="leading-relaxed">Dalam pengolahan data distribusi frekuensi yang memiliki sebaran tidak simetris (menceng kanan atau menceng kiri), pemilihan ukuran pemusatan yang representatif sangat krusial untuk menghindari bias interpretasi.</p>`,
          questionText: "Analisis kebenaran Pernyataan, kebenaran Alasan, serta keabsahan relasi kausal di antara keduanya!",
          payload: {
            pernyataan: "Nilai median dari suatu kumpulan data berdistribusi miring selalu lebih tahan (resisten) terhadap pengaruh keberadaan nilai ekstrem atau pencilan (outlier) dibandingkan dengan nilai rata-rata hitung (mean).",
            alasan: "Perhitungan nilai median hanya mempertimbangkan posisi urutan data yang berada tepat di tengah setelah data diurutkan, bukan menjumlahkan besaran kuantitatif setiap nilai data.",
            options: [
              { id: "A", text: "Pernyataan BENAR, Alasan BENAR, dan keduanya menunjukkan hubungan SEBAB-AKIBAT." },
              { id: "B", text: "Pernyataan BENAR, Alasan BENAR, tetapi keduanya TIDAK menunjukkan hubungan sebab-akibat." },
              { id: "C", text: "Pernyataan BENAR, tetapi Alasan SALAH." },
              { id: "D", text: "Pernyataan SALAH, tetapi Alasan BENAR." },
              { id: "E", text: "Pernyataan dan Alasan, KEDUANYA SALAH." }
            ],
            key: "A"
          },
          bahasLengkap: `<strong>Analisis Logika Statistika:</strong><br>
          • <em>Pernyataan:</em> Median lebih resisten terhadap outlier dibanding mean. Ini <strong>BENAR</strong>.<br>
          • <em>Alasan:</em> Median adalah ukuran berbasis posisi (order statistics), bukan besaran agregat numerik yang ditarik oleh pencilan. Ini <strong>BENAR</strong>.<br>
          • <em>Relasi Kausal:</em> Alasan menjelaskan secara tepat mengapa pernyataan terjadi. Keduanya benar dan berhubungan sebab-akibat.<br>
          <strong>Kunci:</strong> A.`
        },

        // ====================================================================
        // NOMOR 8: MODEL 4 (SEBAB AKIBAT ANALITIS)
        // ====================================================================
        {
          id: 18,
          num: 8,
          model: 4,
          modelName: "Sebab - Akibat Analitis",
          domain: "Geometri Ruang & Pengukuran",
          kognitif: "Reasoning (Penalaran HOTS)",
          konteks: "Kedudukan Garis dalam Ruang Tiga Dimensi",
          stimulusTitle: "Kedudukan Garis Bersilangan pada Kubus ABCD.EFGH",
          stimulusBadge: "Geometri Dimensi Tiga",
          stimulusText: `<p class="leading-relaxed">Diberikan kubus $ABCD.EFGH$. Di dalam ruang dimensi tiga, dua garis dikatakan bersilangan jika kedua garis tersebut tidak berpotongan dan tidak terletak pada satu bidang datar yang sama.</p>`,
          questionText: "Analisis kebenaran Pernyataan, kebenaran Alasan, serta keabsahan hubungan sebab-akibat di antara keduanya!",
          payload: {
            pernyataan: "Garis diagonal sisi AH dan garis diagonal sisi BG pada kubus ABCD.EFGH memiliki kedudukan bersilangan tegak lurus (perpendicular skew lines).",
            alasan: "Garis diagonal BG sejajar dengan garis diagonal AH karena keduanya berada pada bidang diagonal kubus yang sama.",
            options: [
              { id: "A", text: "Pernyataan BENAR, Alasan BENAR, dan keduanya menunjukkan hubungan SEBAB-AKIBAT." },
              { id: "B", text: "Pernyataan BENAR, Alasan BENAR, tetapi keduanya TIDAK menunjukkan hubungan sebab-akibat." },
              { id: "C", text: "Pernyataan BENAR, tetapi Alasan SALAH." },
              { id: "D", text: "Pernyataan SALAH, tetapi Alasan BENAR." },
              { id: "E", text: "Pernyataan dan Alasan, KEDUANYA SALAH." }
            ],
            key: "C"
          },
          bahasLengkap: `<strong>Analisis Kedudukan Garis:</strong><br>
          • <em>Pernyataan:</em> Garis $AH$ dan $BG$ bersilangan tegak lurus. Untuk mengujinya, geser $BG$ sejajar ke $AF$. Segitiga $AFH$ adalah segitiga sama sisi ($AF = FH = HA$), sudutnya $60^\\circ$? Tidak! Proyeksi $BG$ pada bidang $ADHE$ adalah $AH'$ yang tegak lurus $AH$ (diagonal persegi sisi saling tegak lurus). Maka garis $AH$ dan $BG$ bersilangan tegak lurus. Pernyataan <strong>BENAR</strong>.<br>
          • <em>Alasan:</em> Garis $BG$ sejajar dengan $AH$ dan berada pada bidang diagonal yang sama. Ini <strong>SALAH</strong> (keduanya bersilangan, tidak sejajar, dan tidak sebidang).<br>
          <strong>Kunci:</strong> C.`
        },

        // ====================================================================
        // NOMOR 9: MODEL 5 (PILIHAN GANDA KOMPLEKS / CHECKBOX MULTI-SELECT)
        // ====================================================================
        {
          id: 19,
          num: 9,
          model: 5,
          modelName: "Pilihan Ganda Kompleks (Checkbox Multi-Select)",
          domain: "Data & Ketidakpastian",
          kognitif: "Applying (Penerapan)",
          konteks: "Probabilitas Eksperimen Dua Dadu",
          stimulusTitle: "Distribusi Probabilitas Pelemparan Dua Dadu Homogen",
          stimulusBadge: "Peluang Kejadian Majemuk",
          stimulusText: `<p class="leading-relaxed">Dua buah dadu bermata enam yang seimbang dilempar undi secara bersamaan sebanyak satu kali. Ruang sampel memiliki total $36$ titik sampel berbobot peluang sama ($n(S) = 36$).</p>`,
          questionText: "Beri tanda centang (✓) pada kotak untuk setiap pernyataan yang bernilai BENAR! (Jawaban benar lebih dari satu)",
          payload: {
            statements: [
              {
                id: "c1",
                text: "Peluang munculnya jumlah kedua mata dadu sama dengan 7 adalah sebesar 1/6.",
                key: true,
                bahas: "Titik sampel jumlah 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 titik. Peluang = 6/36 = 1/6. (BENAR)"
              },
              {
                id: "c2",
                text: "Peluang munculnya jumlah kedua mata dadu berupa bilangan prima adalah sebesar 15/36 (atau 5/12).",
                key: true,
                bahas: "Jumlah prima: 2 (1 titik), 3 (2 titik), 5 (4 titik), 7 (6 titik), 11 (2 titik). Total = 1 + 2 + 4 + 6 + 2 = 15 titik. Peluang = 15/36 = 5/12. (BENAR)"
              },
              {
                id: "c3",
                text: "Peluang munculnya jumlah kedua mata dadu minimal 10 (bernilai 10, 11, atau 12) adalah tepat 1/6.",
                key: true,
                bahas: "Jumlah 10 (3 titik: 4-6, 5-5, 6-4), 11 (2 titik: 5-6, 6-5), 12 (1 titik: 6-6). Total = 6 titik. Peluang = 6/36 = 1/6. (BENAR)"
              },
              {
                id: "c4",
                text: "Peluang munculnya kedua mata dadu bernilai sama (mata dadu kembar) adalah sebesar 1/4.",
                key: false,
                bahas: "Mata dadu kembar: (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) = 6 titik. Peluang = 6/36 = 1/6, BUKAN 1/4. (SALAH)"
              }
            ]
          },
          bahasLengkap: `<strong>Perhitungan Titik Sampel Dua Dadu:</strong><br>
          1. Jumlah 7: $6/36 = \\mathbf{1/6}$. (Centang ✓)<br>
          2. Jumlah Prima: $\\{2,3,5,7,11\\} = 15/36 = \\mathbf{5/12}$. (Centang ✓)<br>
          3. Jumlah $\\ge 10$: $\\{10,11,12\\} = 6/36 = \\mathbf{1/6}$. (Centang ✓)<br>
          4. Mata Kembar: $6/36 = 1/6$, bukan $1/4$. (Jangan dicentang)<br>
          <strong>Kunci:</strong> Pernyataan 1, 2, dan 3.`
        },

        // ====================================================================
        // NOMOR 10: MODEL 5 (PILIHAN GANDA KOMPLEKS / CHECKBOX MULTI-SELECT)
        // ====================================================================
        {
          id: 20,
          num: 10,
          model: 5,
          modelName: "Pilihan Ganda Kompleks (Checkbox Multi-Select)",
          domain: "Geometri Ruang & Pengukuran",
          kognitif: "Reasoning (Penalaran HOTS)",
          konteks: "Dimensi Tiga Balok ABCD.EFGH",
          stimulusTitle: "Karakteristik Metrik Ruang Balok ABCD.EFGH",
          stimulusBadge: "Geometri Dimensi Tiga",
          stimulusText: `<p class="leading-relaxed">Diberikan balok $ABCD.EFGH$ dengan ukuran panjang rusuk $AB = 8\\text{ cm}$, lebar rusuk $BC = 6\\text{ cm}$, dan tinggi rusuk tegak $CG = 5\\text{ cm}$.</p>`,
          questionText: "Beri tanda centang (✓) pada kotak untuk setiap karakteristik metrik balok yang bernilai BENAR! (Jawaban benar lebih dari satu)",
          payload: {
            statements: [
              {
                id: "c1",
                text: "Panjang diagonal bidang alas AC adalah tepat 10 cm.",
                key: true,
                bahas: "AC = √(8² + 6²) = √(64 + 36) = √100 = 10 cm. (BENAR)"
              },
              {
                id: "c2",
                text: "Panjang diagonal ruang AG adalah tepat 5√5 cm.",
                key: true,
                bahas: "AG = √(AC² + CG²) = √(10² + 5²) = √(100 + 25) = √125 = 5√5 cm. (BENAR)"
              },
              {
                id: "c3",
                text: "Luas bidang diagonal ACGE yang dibentuk oleh diagonal alas dan rusuk tegak adalah 50 cm².",
                key: true,
                bahas: "Luas ACGE = AC × CG = 10 × 5 = 50 cm². (BENAR)"
              },
              {
                id: "c4",
                text: "Jarak titik sudut C ke garis diagonal bidang BD bernilai 4,8 cm.",
                key: true,
                bahas: "Pada segitiga siku-siku BCD (BC=6, CD=8, BD=10), jarak C ke BD = (BC × CD) / BD = (6 × 8) / 10 = 48 / 10 = 4,8 cm. (BENAR)"
              }
            ]
          },
          bahasLengkap: `<strong>Perhitungan Geometri Balok $8 \\times 6 \\times 5$:</strong><br>
          1. $AC = \\sqrt{8^2+6^2} = \\mathbf{10\\text{ cm}}$. (Centang ✓)<br>
          2. $AG = \\sqrt{10^2+5^2} = \\sqrt{125} = \\mathbf{5\\sqrt{5}\\text{ cm}}$. (Centang ✓)<br>
          3. $L_{ACGE} = 10 \\times 5 = \\mathbf{50\\text{ cm}^2}$. (Centang ✓)<br>
          4. Jarak $C \\to BD = \\frac{6 \\times 8}{10} = \\mathbf{4{,}8\\text{ cm}}$. (Centang ✓)<br>
          <strong>Kunci:</strong> SEMUA pernyataan (1, 2, 3, dan 4) bernilai BENAR.`
        }
      ]
    }
  ]
};

// Ekspor ke browser window atau Node.js
if (typeof window !== 'undefined') {
  window.AKM_DATA = AKM_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AKM_DATA;
}
