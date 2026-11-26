// data-akm.js
// DATA BANK SOAL RESMI SIMULASI TKA & AKM PUSMENDIK (ZERO FRONTEND ANSWER KEYS)
// Seluruh kunci jawaban & pembahasan lengkap telah dipindahkan ke backend (functions/api/_akm_keys.js)

const AKM_DATA = {
  "packages": [
    {
      "id": "GLADI_01",
      "code": "SIMULASI-01",
      "title": "Gladi Bersih ANBK Literasi Numerasi Gelombang 2",
      "subtitle": "Persiapan Resmi Asesmen Nasional & TKA Kelas XII",
      "targetDate": "12 - 18 Oktober 2026",
      "durationMinutes": 75,
      "totalQuestions": 25,
      "kategoriLevel": "Fase F (Kelas XII SMA)",
      "questions": [
        {
          "id": 1,
          "num": 1,
          "model": 4,
          "modelName": "Sebab - Akibat Analitis",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Reasoning (Penalaran Kausalitas)",
          "konteks": "Sains & Analisis Vektor Tiga Dimensi",
          "stimulusTitle": "Teorema Trisepsi Diagonal Ruang Kubus ABCD.EFGH",
          "stimulusBadge": "Geometri Ruang: Bidang Sejajar",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam geometri ruang, terdapat teorema klasik mengenai irisan antara diagonal ruang kubus $ABCD.EFGH$ dengan dua bidang diagonal segitiga yang sejajar, yaitu bidang $AFH$ dan bidang $BDG$.</p>\n<div class=\"my-3 flex justify-center\">\n    <svg viewBox=\"0 0 280 200\" class=\"w-64 max-w-full h-auto drop-shadow-sm bg-slate-50 border border-slate-200 rounded-xl p-2\" xmlns=\"http://www.w3.org/2000/svg\">\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#2563eb\"/>\n        </marker>\n      </defs>\n      <!-- Back edges (dashed) -->\n      <line x1=\"50\" y1=\"140\" x2=\"110\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <line x1=\"110\" y1=\"100\" x2=\"230\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <line x1=\"110\" y1=\"100\" x2=\"110\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      \n      <!-- Front base and verticals -->\n      <line x1=\"50\" y1=\"140\" x2=\"170\" y2=\"140\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"170\" y1=\"140\" x2=\"230\" y2=\"100\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"50\" y1=\"140\" x2=\"50\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"230\" y1=\"100\" x2=\"230\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      \n      <!-- Top face -->\n      <line x1=\"50\" y1=\"70\" x2=\"110\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"110\" y1=\"30\" x2=\"230\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"230\" y1=\"30\" x2=\"170\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"170\" y1=\"70\" x2=\"50\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      \n      <!-- Highlighted diagonal (CE) -->\n      <line x1=\"230\" y1=\"100\" x2=\"50\" y2=\"70\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"5,3\"/>\n      <circle cx=\"230\" cy=\"100\" r=\"3.5\" fill=\"#dc2626\"/>\n      <circle cx=\"50\" cy=\"70\" r=\"3.5\" fill=\"#dc2626\"/>\n      \n      <!-- Vertex Labels -->\n      <text x=\"36\" y=\"152\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">A</text>\n      <text x=\"178\" y=\"152\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">B</text>\n      <text x=\"238\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\">C</text>\n      <text x=\"96\" y=\"102\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#64748b\">D</text>\n      <text x=\"36\" y=\"70\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\">E</text>\n      <text x=\"178\" y=\"68\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">F</text>\n      <text x=\"238\" y=\"30\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">G</text>\n      <text x=\"96\" y=\"28\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">H</text>\n      \n      <!-- Rusuk dimension indicator -->\n      <text x=\"100\" y=\"158\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"middle\">s = 6 cm</text>\n    </svg>\n  </div>\n<div class=\"my-3 p-3.5 rounded-xl border bg-slate-50 border-slate-200 text-slate-800 text-xs space-y-1.5 shadow-sm\">\n  <p class=\"font-bold text-slate-900\"><i class=\"fa-solid fa-cube text-blue-600 mr-1\"></i> Karakteristik Geometri Ruang:</p>\n  <ul class=\"list-disc list-inside space-y-1 text-slate-700\">\n    <li>Panjang rusuk kubus $s = 6\\text{ cm}$.</li>\n    <li>Diagonal ruang $CE$ memiliki panjang $s\\sqrt{3} = 6\\sqrt{3}\\text{ cm}$.</li>\n    <li>Bidang $AFH$ tegak lurus terhadap diagonal ruang $CE$ dan memotongnya di titik $P$.</li>\n    <li>Bidang $BDG$ tegak lurus terhadap diagonal ruang $CE$ dan memotongnya di titik $Q$.</li>\n  </ul>\n</div>\n<p class=\"leading-relaxed\">Kedua bidang tersebut membagi ruas garis diagonal ruang $CE$ menjadi tiga segmen garis yang sama panjang.</p>",
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
            ]
          }
        },
        {
          "id": 2,
          "num": 2,
          "model": 1,
          "modelName": "Pernyataan Benar / Salah (Tabel 4 Baris)",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Applying (Penerapan)",
          "konteks": "Sosial, Finansial & Keamanan Perbankan",
          "stimulusTitle": "Sistem Pengamanan Brankas Digital Bank Syariah",
          "stimulusBadge": "Kaidah Pencacahan & Peluang",
          "stimulusText": "<p class=\"leading-relaxed\">Sebuah brankas penyimpanan dana kas dan aset perbankan syariah di kawasan perkotaan menggunakan sistem pengamanan pintu berlapis berbasis kode PIN alfanumerik 6 karakter.</p>\n<div class=\"my-3 overflow-x-auto\">\n  <table class=\"w-full text-xs border border-slate-200 rounded-xl overflow-hidden\">\n    <thead class=\"bg-blue-50 text-blue-900 font-bold\">\n      <tr>\n        <th class=\"p-2 border border-slate-200\">Bagian PIN</th>\n        <th class=\"p-2 border border-slate-200\">Format Karakter</th>\n        <th class=\"p-2 border border-slate-200\">Himpunan Asal</th>\n        <th class=\"p-2 border border-slate-200\">Aturan Khusus</th>\n      </tr>\n    </thead>\n    <tbody class=\"divide-y divide-slate-100 bg-white\">\n      <tr>\n        <td class=\"p-2 font-bold text-center border border-slate-200\">Karakter 1-2</td>\n        <td class=\"p-2 text-center border border-slate-200\">2 Huruf Kapital ($H_1, H_2$)</td>\n        <td class=\"p-2 text-center border border-slate-200 font-mono\">{A, B, C, D, E}</td>\n        <td class=\"p-2 border border-slate-200\">Tanpa pengulangan huruf ($P(5,2) = 20$)</td>\n      </tr>\n      <tr>\n        <td class=\"p-2 font-bold text-center border border-slate-200\">Karakter 3-6</td>\n        <td class=\"p-2 text-center border border-slate-200\">4 Angka ($D_1, D_2, D_3, D_4$)</td>\n        <td class=\"p-2 text-center border border-slate-200 font-mono\">{1, 2, 3, 4, 5, 6, 7, 8, 9}</td>\n        <td class=\"p-2 border border-slate-200\">$D_1$ ganjil, $D_4$ genap, tidak berulang ($5 \\times 4 \\times 7 \\times 6 = 840$)</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"leading-relaxed\">Tim audit keamanan siber menguji ketahanan brankas tersebut terhadap potensi serangan tebakan acak (<em>brute force</em>) untuk memastikan perlindungan optimal.</p>",
          "questionText": "Berdasarkan stimulus di atas, tentukan status kebenaran (BENAR atau SALAH) untuk setiap pernyataan matematis berikut!",
          "payload": {
            "rows": [
              {
                "id": "r1",
                "statement": "Banyaknya variasi susunan 2 huruf awal yang dapat dipilih adalah tepat 20 variasi."
              },
              {
                "id": "r2",
                "statement": "Banyaknya variasi susunan 4 angka PIN yang memenuhi kriteria ganjil di awal dan genap di akhir adalah 840 variasi."
              },
              {
                "id": "r3",
                "statement": "Total variasi kode PIN 6 karakter lengkap yang dapat dibentuk adalah sebanyak 16.800 kode brankas berbeda."
              },
              {
                "id": "r4",
                "statement": "Peluang seseorang berhasil membuka brankas dalam satu kali tebakan acak lebih besar dari 0,01%."
              }
            ]
          }
        },
        {
          "id": 3,
          "num": 3,
          "model": 5,
          "modelName": "Pilihan Ganda Kompleks (Checkbox Multi-Select)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Reasoning (Penalaran Statistika)",
          "konteks": "Teknologi IoT & Pemantauan Perangkat Sekolah",
          "stimulusTitle": "Uji Daya Tahan Baterai Perangkat IoT Smart School",
          "stimulusBadge": "Kuartil, Outlier, & Boxplot",
          "stimulusText": "<p class=\"leading-relaxed\">Laboratorium Sains SMA melakukan pengujian daya tahan operasional baterai pada 8 unit sensor IoT pemantau kualitas udara sekolah. Data masa pakai baterai (dalam satuan jam) yang tercatat setelah pengujian beban kerja kontinu adalah sebagai berikut:</p>\n<div class=\"my-3 flex justify-center\">\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-xl shadow-xs text-center space-y-2 max-w-md w-full\">\n    <span class=\"text-xs font-bold text-slate-800 uppercase tracking-wider block\">Data Masa Pakai Baterai 8 Sensor IoT (Jam)</span>\n    <div class=\"grid grid-cols-4 gap-2 text-xs font-mono font-bold\">\n      <div class=\"p-2 bg-blue-50 border border-blue-200 text-blue-900 rounded-lg\">110 jam</div>\n      <div class=\"p-2 bg-blue-50 border border-blue-200 text-blue-900 rounded-lg\">115 jam</div>\n      <div class=\"p-2 bg-blue-50 border border-blue-200 text-blue-900 rounded-lg\">120 jam</div>\n      <div class=\"p-2 bg-blue-50 border border-blue-200 text-blue-900 rounded-lg\">120 jam</div>\n      <div class=\"p-2 bg-blue-50 border border-blue-200 text-blue-900 rounded-lg\">125 jam</div>\n      <div class=\"p-2 bg-blue-50 border border-blue-200 text-blue-900 rounded-lg\">130 jam</div>\n      <div class=\"p-2 bg-blue-50 border border-blue-200 text-blue-900 rounded-lg\">135 jam</div>\n      <div class=\"p-2 bg-rose-50 border border-rose-300 text-rose-800 rounded-lg font-black\">180 jam</div>\n    </div>\n    <span class=\"text-[10px] text-slate-500 italic block\">*Data telah disusun berurutan dari nilai terendah hingga nilai tertinggi.</span>\n  </div>\n</div>\n<div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1\">\n  <p class=\"font-bold text-slate-900\"><i class=\"fa-solid fa-chart-simple text-blue-600 mr-1\"></i> Parameter Data Pengujian:</p>\n  <ul class=\"list-disc list-inside space-y-0.5 text-slate-700\">\n    <li>Ukuran sampel pengujian: $n = 8$ unit sensor IoT.</li>\n    <li>Data terurut: $110, 115, 120, 120, 125, 130, 135, 180$ (jam).</li>\n    <li>Tim teknisi menganalisis ukuran letak (kuartil) dan mendeteksi kemungkinan adanya data pencilan (<em>outlier</em>).</li>\n  </ul>\n</div>\n<p class=\"leading-relaxed\">Evaluasi statistik ini menjadi dasar standarisasi spesifikasi baterai sebelum pemasangan massal di seluruh area sekolah.</p>",
          "questionText": "Beri tanda centang (✓) pada setiap pernyataan di bawah ini yang bernilai BENAR! (Jawaban benar lebih dari satu)",
          "payload": {
            "statements": [
              {
                "id": "c1",
                "text": "Nilai median (Q2) dari daya tahan baterai kedelapan sensor adalah 122,5 jam."
              },
              {
                "id": "c2",
                "text": "Jangkauan interkuartil (QR = Q3 - Q1) daya tahan baterai adalah tepat 15 jam."
              },
              {
                "id": "c3",
                "text": "Sensor dengan daya tahan 180 jam terklasifikasi sebagai data pencilan (outlier) atas karena melebihi batas Pagar Atas (155 jam)."
              },
              {
                "id": "c4",
                "text": "Nilai kuartil pertama / kuartil bawah (Q1) dari data tersebut adalah tepat 120 jam."
              }
            ]
          }
        },
        {
          "id": 4,
          "num": 4,
          "model": 2,
          "modelName": "Menjodohkan (Premis Kolom A ↔ Respons Kolom B)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Applying (Penerapan Probabilitas)",
          "konteks": "Kesehatan Publik & Uji Diagnostik Medis",
          "stimulusTitle": "Uji Skrining Medis Cepat & Teorema Bayes Probabilitas",
          "stimulusBadge": "Peluang Bersyarat & Teorema Bayes",
          "stimulusText": "<p class=\"leading-relaxed\">Unit Kesehatan Sekolah (UKS) SMA bekerja sama dengan Dinas Kesehatan mengadakan skrining cepat antigen influenza menjelang musim ujian.</p>\n<div class=\"my-3 flex justify-center\">\n    <svg viewBox=\"0 0 280 150\" class=\"w-64 max-w-full h-auto drop-shadow-sm bg-slate-50 border border-slate-200 rounded-xl p-2\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Root -->\n      <circle cx=\"30\" cy=\"75\" r=\"4\" fill=\"#1e293b\"/>\n      <text x=\"16\" y=\"92\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"bold\" fill=\"#1e293b\">Populasi</text>\n      <!-- Branch 1 (Sakit) -->\n      <line x1=\"30\" y1=\"75\" x2=\"115\" y2=\"40\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n      <text x=\"48\" y=\"46\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"bold\" fill=\"#dc2626\">P(S)=0.02</text>\n      <circle cx=\"115\" cy=\"40\" r=\"3.5\" fill=\"#dc2626\"/>\n      <text x=\"122\" y=\"38\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#dc2626\">S (Sakit)</text>\n      <!-- Branch 2 (Sehat) -->\n      <line x1=\"30\" y1=\"75\" x2=\"115\" y2=\"110\" stroke=\"#059669\" stroke-width=\"2\"/>\n      <text x=\"48\" y=\"106\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"bold\" fill=\"#059669\">P(S')=0.98</text>\n      <circle cx=\"115\" cy=\"110\" r=\"3.5\" fill=\"#059669\"/>\n      <text x=\"122\" y=\"116\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#059669\">S' (Sehat)</text>\n      <!-- Sub-branches from S -->\n      <line x1=\"115\" y1=\"40\" x2=\"210\" y2=\"22\" stroke=\"#2563eb\" stroke-width=\"1.5\"/>\n      <text x=\"148\" y=\"22\" font-family=\"sans-serif\" font-size=\"8\" fill=\"#2563eb\">P(+|S)=0.95</text>\n      <text x=\"216\" y=\"26\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"bold\" fill=\"#2563eb\">0.019 (+)</text>\n      <line x1=\"115\" y1=\"40\" x2=\"210\" y2=\"54\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n      <text x=\"148\" y=\"56\" font-family=\"sans-serif\" font-size=\"8\" fill=\"#64748b\">P(-|S)=0.05</text>\n      <text x=\"216\" y=\"58\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#64748b\">0.001 (-)</text>\n      <!-- Sub-branches from S' -->\n      <line x1=\"115\" y1=\"110\" x2=\"210\" y2=\"95\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n      <text x=\"148\" y=\"94\" font-family=\"sans-serif\" font-size=\"8\" fill=\"#d97706\">P(+|S')=0.10</text>\n      <text x=\"216\" y=\"99\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"bold\" fill=\"#d97706\">0.098 (+)</text>\n      <line x1=\"115\" y1=\"110\" x2=\"210\" y2=\"130\" stroke=\"#059669\" stroke-width=\"1.5\"/>\n      <text x=\"148\" y=\"132\" font-family=\"sans-serif\" font-size=\"8\" fill=\"#059669\">P(-|S')=0.90</text>\n      <text x=\"216\" y=\"134\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#059669\">0.882 (-)</text>\n    </svg>\n  </div>\n<div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1\">\n  <p class=\"font-bold text-slate-900\"><i class=\"fa-solid fa-notes-medical text-rose-600 mr-1\"></i> Data Parameter Uji:</p>\n  <ul class=\"list-disc list-inside space-y-0.5 text-slate-700\">\n    <li>Prevalensi infeksi di populasi: $P(S) = 0,02$ (2% siswa terinfeksi flu).</li>\n    <li>Sensitivitas alat uji (True Positive): $P(+|S) = 0,95$ (95%).</li>\n    <li>Laju positif palsu (False Positive): $P(+|S') = 0,10$ (10%), sehingga spesifisitas alat (True Negative) $P(-|S') = 0,90$ (90%).</li>\n  </ul>\n</div>\n<p class=\"leading-relaxed\">Petugas medis menghitung probabilitas posterior untuk menentukan tindakan karantina yang presisi.</p>",
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
            ]
          }
        },
        {
          "id": 5,
          "num": 5,
          "model": 3,
          "modelName": "Paragraf Rumpang Numerik (4 Bagian Kosong)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Knowing (Pemahaman Komputasi)",
          "konteks": "Energi Ramah Lingkungan & Fasilitas Sekolah",
          "stimulusTitle": "Audit Kapasitas Output Inverter PLTS Atap Sekolah",
          "stimulusBadge": "Pemusatan & Penyebaran Data",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam rangka program <em>Green Campus</em>, teknisi laboratorium SMA melakukan uji pembebanan pada 5 unit sel inverter listrik surya. Daya output stabil yang tercatat (dalam Watt) adalah sebagai berikut:</p>\n    <div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs font-mono font-bold text-center text-slate-800 shadow-sm\">\n      200 Watt, &nbsp; 220 Watt, &nbsp; 240 Watt, &nbsp; 260 Watt, &nbsp; 280 Watt\n    </div>\n    <p class=\"leading-relaxed\">Lengkapilah laporan evaluasi teknis berikut dengan menuliskan nilai numerik hasil perhitungan!</p>",
          "questionText": "Isikan angka hasil perhitungan pada setiap bagian kosong di bawah ini:",
          "payload": {
            "clozeText": "Berdasarkan data 5 inverter di atas, nilai rata-rata hitung (mean) daya listrik yang dihasilkan adalah (1) [___] Watt. Nilai tengah (median) daya inverter adalah sebesar (2) [___] Watt. Selisih rentang daya maksimum dan minimum (jangkauan data) bernilai (3) [___] Watt, dan simpangan rata-rata (SR) dari kelima inverter tersebut adalah sebesar (4) [___] Watt.",
            "blanks": [
              {
                "id": "b1",
                "label": "(1)",
                "placeholder": "mean..."
              },
              {
                "id": "b2",
                "label": "(2)",
                "placeholder": "median..."
              },
              {
                "id": "b3",
                "label": "(3)",
                "placeholder": "jangkauan..."
              },
              {
                "id": "b4",
                "label": "(4)",
                "placeholder": "SR..."
              }
            ]
          }
        },
        {
          "id": 6,
          "num": 6,
          "model": 1,
          "modelName": "Pernyataan Benar / Salah (Tabel 4 Baris)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Reasoning (Penalaran HOTS)",
          "konteks": "Arsitektur Bangunan & Rekayasa Konstruksi",
          "stimulusTitle": "Desain Kanopi Baja Aula Pertemuan Utama",
          "stimulusBadge": "Geometri Dimensi Tiga (Balok)",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam renovasi kanopi baja aula pertemuan utama, arsitek memodelkan kerangka atap berbasis struktur balok $ABCD.EFGH$ dengan lantai dasar berbentuk persegi berukuran $12\\text{ m} \\times 12\\text{ m}$ ($AB = BC = 12\\text{ m}$) dan tinggi tiang kolom $CG = 6\\text{ m}$. Titik $P$ merupakan titik pusat lantai dasar $ABCD$ (titik potong diagonal $AC$ dan $BD$).</p>\n<div class=\"my-3 flex justify-center\">\n    <svg viewBox=\"0 0 280 180\" class=\"w-64 max-w-full h-auto drop-shadow-sm bg-slate-50 border border-slate-200 rounded-xl p-2\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Back edges (dashed) -->\n      <line x1=\"50\" y1=\"140\" x2=\"110\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <line x1=\"110\" y1=\"100\" x2=\"230\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <line x1=\"110\" y1=\"100\" x2=\"110\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      \n      <!-- Front base and verticals -->\n      <line x1=\"50\" y1=\"140\" x2=\"170\" y2=\"140\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"170\" y1=\"140\" x2=\"230\" y2=\"100\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"50\" y1=\"140\" x2=\"50\" y2=\"95\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"95\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"230\" y1=\"100\" x2=\"230\" y2=\"55\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      \n      <!-- Top face -->\n      <line x1=\"50\" y1=\"95\" x2=\"110\" y2=\"55\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"110\" y1=\"55\" x2=\"230\" y2=\"55\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"230\" y1=\"55\" x2=\"170\" y2=\"95\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"170\" y1=\"95\" x2=\"50\" y2=\"95\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      \n      <!-- Diagonal AG -->\n      <line x1=\"50\" y1=\"140\" x2=\"230\" y2=\"55\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"5,3\"/>\n      <circle cx=\"50\" cy=\"140\" r=\"3.5\" fill=\"#dc2626\"/>\n      <circle cx=\"230\" cy=\"55\" r=\"3.5\" fill=\"#dc2626\"/>\n      \n      <!-- Center P -->\n      <circle cx=\"140\" cy=\"120\" r=\"3\" fill=\"#2563eb\"/>\n      <text x=\"145\" y=\"125\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563eb\">P</text>\n      \n      <!-- Vertex Labels -->\n      <text x=\"36\" y=\"152\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">A</text>\n      <text x=\"178\" y=\"152\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">B</text>\n      <text x=\"238\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">C</text>\n      <text x=\"96\" y=\"102\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#64748b\">D</text>\n      <text x=\"36\" y=\"95\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">E</text>\n      <text x=\"178\" y=\"93\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">F</text>\n      <text x=\"238\" y=\"55\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">G</text>\n      <text x=\"96\" y=\"53\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#64748b\">H</text>\n      \n      <!-- Dimensions -->\n      <text x=\"110\" y=\"155\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"middle\">AB = 12 m</text>\n      <text x=\"240\" y=\"78\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563eb\">t = 6 m</text>\n    </svg>\n  </div>\n<div class=\"my-3 p-3.5 rounded-xl border bg-slate-50 border-slate-200 text-slate-800 text-xs space-y-1.5 shadow-sm\">\n  <p class=\"font-bold text-slate-900\"><i class=\"fa-solid fa-shapes text-blue-600 mr-1\"></i> Data Metrik Struktur Rangka Kanopi:</p>\n  <ul class=\"list-disc list-inside space-y-1 text-slate-700\">\n    <li>Ukuran alas persegi: panjang $AB = 12\\text{ m}$, lebar $BC = 12\\text{ m}$.</li>\n    <li>Tinggi tiang kanopi: $CG = 6\\text{ m}$.</li>\n    <li>Titik $P$ adalah titik pusat lantai dasar $ABCD$ (titik tengah diagonal $AC$ dan $BD$).</li>\n  </ul>\n</div>\n<p class=\"leading-relaxed\">Studi metrik ruang ini digunakan untuk memastikan toleransi beban kabel baja penyangga atap.</p>",
          "questionText": "Tentukan status kebenaran (BENAR atau SALAH) untuk setiap analisis dimensi tiga berikut!",
          "payload": {
            "rows": [
              {
                "id": "r1",
                "statement": "Jarak bentang terjauh antara dua titik sudut rangka kanopi (panjang diagonal ruang AG) adalah tepat 18 meter."
              },
              {
                "id": "r2",
                "statement": "Jarak langsung dari titik pusat lantai P ke titik sudut atap G adalah tepat 6√3 meter."
              },
              {
                "id": "r3",
                "statement": "Jarak tegak lurus dari titik P ke rusuk atap GH adalah tepat 6√5 meter."
              },
              {
                "id": "r4",
                "statement": "Nilai sinus sudut kemiringan bentangan kawat AG terhadap bidang lantai ABCD adalah 1/3."
              }
            ]
          }
        },
        {
          "id": 7,
          "num": 7,
          "model": 4,
          "modelName": "Sebab - Akibat Analitis",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Reasoning (Penalaran Analitis)",
          "konteks": "Metodologi Riset & Sains Data",
          "stimulusTitle": "Prinsip Statistika: Korelasi Linier vs Hubungan Kausalitas",
          "stimulusBadge": "Korelasi Pearson vs Kausalitas",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam riset literasi data siswa kelas XII, dilakukan analisis hubungan antara durasi penggunaan platform pembelajaran digital ($x$ dalam jam per minggu) dengan capaian skor asesmen matematika ($y$).</p>\n<div class=\"my-3 flex justify-center\">\n    <svg viewBox=\"0 0 280 180\" class=\"w-64 max-w-full h-auto drop-shadow-sm bg-slate-50 border border-slate-200 rounded-xl p-2\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Axes -->\n      <line x1=\"40\" y1=\"150\" x2=\"260\" y2=\"150\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <line x1=\"40\" y1=\"150\" x2=\"40\" y2=\"20\" stroke=\"#334155\" stroke-width=\"2\"/>\n      \n      <!-- Axis Labels -->\n      <text x=\"250\" y=\"165\" font-size=\"10\" font-family=\"sans-serif\" fill=\"#64748b\" font-weight=\"bold\">x (Jam)</text>\n      <text x=\"10\" y=\"25\" font-size=\"10\" font-family=\"sans-serif\" fill=\"#64748b\" font-weight=\"bold\">y (Skor)</text>\n      \n      <!-- Gridlines -->\n      <line x1=\"40\" y1=\"110\" x2=\"250\" y2=\"110\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n      <line x1=\"40\" y1=\"70\" x2=\"250\" y2=\"70\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n      <line x1=\"100\" y1=\"150\" x2=\"100\" y2=\"30\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n      <line x1=\"180\" y1=\"150\" x2=\"180\" y2=\"30\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n      \n      <!-- Regression line -->\n      <line x1=\"45\" y1=\"135\" x2=\"245\" y2=\"45\" stroke=\"#2563eb\" stroke-width=\"2.5\"/>\n      \n      <!-- Scatter Points -->\n      <circle cx=\"60\" cy=\"128\" r=\"4\" fill=\"#059669\"/>\n      <circle cx=\"85\" cy=\"118\" r=\"4\" fill=\"#059669\"/>\n      <circle cx=\"110\" cy=\"102\" r=\"4\" fill=\"#059669\"/>\n      <circle cx=\"135\" cy=\"98\" r=\"4\" fill=\"#059669\"/>\n      <circle cx=\"160\" cy=\"80\" r=\"4\" fill=\"#059669\"/>\n      <circle cx=\"190\" cy=\"72\" r=\"4\" fill=\"#059669\"/>\n      <circle cx=\"215\" cy=\"58\" r=\"4\" fill=\"#059669\"/>\n      <circle cx=\"235\" cy=\"48\" r=\"4\" fill=\"#059669\"/>\n      \n      <!-- Formula badge -->\n      <rect x=\"70\" y=\"25\" width=\"130\" height=\"24\" rx=\"6\" fill=\"#eff6ff\" stroke=\"#bfdbfe\" stroke-width=\"1\"/>\n      <text x=\"135\" y=\"41\" font-family=\"monospace\" font-size=\"10\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">ŷ = 20 + 1.5x</text>\n    </svg>\n  </div>\n<div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1\">\n  <p class=\"font-bold text-slate-900\"><i class=\"fa-solid fa-chart-line text-blue-600 mr-1\"></i> Hasil Analisis Statistik Bivariat:</p>\n  <ul class=\"list-disc list-inside space-y-0.5 text-slate-700\">\n    <li>Koefisien korelasi Pearson $r = +0.88$ (korelasi positif sangat kuat).</li>\n    <li>Persamaan garis regresi linier: $\\hat{y} = 20 + 1.5x$.</li>\n    <li>Koefisien determinasi $R^2 = (0.88)^2 \\approx 0.7744$ (77.44% variansi skor diterangkan oleh durasi belajar).</li>\n  </ul>\n</div>\n<p class=\"leading-relaxed\">Guru pembimbing menelaah apakah korelasi statistik yang tinggi ini secara otomatis membuktikan hubungan sebab-akibat langsung.</p>",
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
            ]
          }
        },
        {
          "id": 8,
          "num": 8,
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
                "placeholder": "pecahan..."
              },
              {
                "id": "b2",
                "label": "(2)",
                "placeholder": "pecahan..."
              },
              {
                "id": "b3",
                "label": "(3)",
                "placeholder": "pecahan..."
              },
              {
                "id": "b4",
                "label": "(4)",
                "placeholder": "frekuensi..."
              }
            ]
          }
        },
        {
          "id": 9,
          "num": 9,
          "model": 5,
          "modelName": "Pilihan Ganda Kompleks (Checkbox Multi-Select)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Applying (Penerapan Bangun Ruang)",
          "konteks": "Industri Kreatif & Kemasan Cinderamata",
          "stimulusTitle": "Kemasan Cinderamata Bidang Empat Beraturan (Regular Tetrahedron)",
          "stimulusBadge": "Geometri Tetrahedron Beraturan",
          "stimulusText": "<p class=\"leading-relaxed\">Panitia Wisuda SMA merancang kotak cinderamata eksklusif berbentuk bidang empat beraturan (<em>regular tetrahedron</em>) $T.ABC$ dengan panjang setiap rusuk pembentuknya adalah $s = 6\\sqrt{2}\\text{ cm}$. Keempat bidang sisinya (bidang alas $ABC$ serta tiga dinding tegak $TAB, TBC, TCA$) seluruhnya berupa segitiga sama sisi yang kongruen.</p>\n<div class=\"my-3 flex justify-center\">\n    <svg viewBox=\"0 0 260 190\" class=\"w-60 max-w-full h-auto drop-shadow-sm bg-slate-50 border border-slate-200 rounded-xl p-2\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Base edges -->\n      <line x1=\"40\" y1=\"150\" x2=\"220\" y2=\"150\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"40\" y1=\"150\" x2=\"130\" y2=\"115\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <line x1=\"220\" y1=\"150\" x2=\"130\" y2=\"115\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      \n      <!-- Height TO -->\n      <line x1=\"130\" y1=\"35\" x2=\"130\" y2=\"138\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n      <circle cx=\"130\" cy=\"138\" r=\"3\" fill=\"#2563eb\"/>\n      <text x=\"136\" y=\"90\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"bold\" fill=\"#2563eb\">h = 4√3 cm</text>\n      \n      <!-- Slanted edges from Apex T -->\n      <line x1=\"130\" y1=\"35\" x2=\"40\" y2=\"150\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"130\" y1=\"35\" x2=\"220\" y2=\"150\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"130\" y1=\"35\" x2=\"130\" y2=\"115\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <circle cx=\"130\" cy=\"35\" r=\"4\" fill=\"#dc2626\"/>\n      \n      <!-- Labels -->\n      <text x=\"126\" y=\"26\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\">T</text>\n      <text x=\"26\" y=\"158\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">A</text>\n      <text x=\"228\" y=\"158\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">B</text>\n      <text x=\"134\" y=\"116\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#64748b\">C</text>\n      <text x=\"130\" y=\"170\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">s = 6√2 cm</text>\n    </svg>\n  </div>\n<div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1\">\n  <p class=\"font-bold text-slate-900\"><i class=\"fa-solid fa-shapes text-amber-600 mr-1\"></i> Spesifikasi Geometris Tetrahedron Beraturan:</p>\n  <ul class=\"list-disc list-inside space-y-0.5 text-slate-700\">\n    <li>Panjang setiap rusuk kerangka: $s = 6\\sqrt{2}\\text{ cm}$.</li>\n    <li>Keempat bidang sisi ($T.ABC$) merupakan segitiga sama sisi berukuran kongruen.</li>\n    <li>Tinggi tegak tetrahedron dari alas ke puncak: $h = s\\sqrt{\\frac{2}{3}} = 4\\sqrt{3}\\text{ cm}$.</li>\n    <li>Volume tetrahedron beraturan: $V = \\frac{s^3\\sqrt{2}}{12}$.</li>\n  </ul>\n</div>\n<p class=\"leading-relaxed\">Tim desain menghitung metrik luas permukaan dan kapasitas ruang kemasan untuk efisiensi bahan akrilik pembuatnya.</p>",
          "questionText": "Beri tanda centang (✓) pada setiap pernyataan metrik berikut yang bernilai BENAR!",
          "payload": {
            "statements": [
              {
                "id": "c1",
                "text": "Luas salah satu bidang sisi segitiga sama sisi pembentuk kemasan adalah 18√3 cm²."
              },
              {
                "id": "c2",
                "text": "Luas seluruh permukaan karton kemasan (4 bidang sisi) adalah 72√3 cm²."
              },
              {
                "id": "c3",
                "text": "Tinggi tegak kemasan tetrahedron dari bidang alas ke puncak adalah 4√3 cm."
              },
              {
                "id": "c4",
                "text": "Volume ruang dalam kemasan cinderamata tersebut adalah tepat 144 cm³."
              }
            ]
          }
        },
        {
          "id": 10,
          "num": 10,
          "model": 2,
          "modelName": "Menjodohkan (Premis Kolom A ↔ Respons Kolom B)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Applying (Penerapan)",
          "konteks": "Teknik Sipil & Struktur Rangka Atap",
          "stimulusTitle": "Rangka Konstruksi Atap Limas Beraturan T.ABCD",
          "stimulusBadge": "Jarak Titik & Garis pada Limas",
          "stimulusText": "<p class=\"leading-relaxed\">Pembangunan gazebo terbuka di taman hijau sekolah mengadopsi struktur limas beraturan $T.ABCD$ dengan alas bujur sangkar berukuran $6\\text{ m} \\times 6\\text{ m}$ dan tinggi limas $TO = 4\\text{ m}$.</p>\n<div class=\"my-3 flex justify-center\">\n    <svg viewBox=\"0 0 280 210\" class=\"w-64 max-w-full h-auto drop-shadow-sm bg-slate-50 border border-slate-200 rounded-xl p-2\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Base edges -->\n      <line x1=\"45\" y1=\"160\" x2=\"175\" y2=\"160\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"175\" y1=\"160\" x2=\"235\" y2=\"115\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"45\" y1=\"160\" x2=\"105\" y2=\"115\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <line x1=\"105\" y1=\"115\" x2=\"235\" y2=\"115\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      \n      <!-- Center O and height TO -->\n      <line x1=\"140\" y1=\"137.5\" x2=\"140\" y2=\"50\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n      <circle cx=\"140\" cy=\"137.5\" r=\"3\" fill=\"#2563eb\"/>\n      <circle cx=\"140\" cy=\"50\" r=\"4\" fill=\"#dc2626\"/>\n      <text x=\"148\" y=\"95\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563eb\">t = 4 m</text>\n      <text x=\"145\" y=\"148\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563eb\">O</text>\n\n      <!-- Slanted edges -->\n      <line x1=\"140\" y1=\"50\" x2=\"45\" y2=\"160\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"140\" y1=\"50\" x2=\"175\" y2=\"160\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"140\" y1=\"50\" x2=\"235\" y2=\"115\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"140\" y1=\"50\" x2=\"105\" y2=\"115\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n\n      <!-- Labels -->\n      <text x=\"135\" y=\"42\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\">T</text>\n      <text x=\"32\" y=\"170\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">A</text>\n      <text x=\"182\" y=\"170\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">B</text>\n      <text x=\"242\" y=\"120\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">C</text>\n      <text x=\"92\" y=\"112\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#64748b\">D</text>\n      \n      <!-- Base dimension -->\n      <text x=\"110\" y=\"178\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">AB = 6 m</text>\n    </svg>\n  </div>\n<div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1\">\n  <p class=\"font-bold text-slate-900\"><i class=\"fa-solid fa-ruler-combined text-blue-600 mr-1\"></i> Metrik Penyangga Limas Gazebo:</p>\n  <ul class=\"list-disc list-inside space-y-0.5 text-slate-700\">\n    <li>Panjang rusuk alas $AB = 6\\text{ m}$, tinggi limas $TO = 4\\text{ m}$.</li>\n    <li>Jarak titik pusat alas $O$ ke rusuk alas $AB$ adalah $OM = \\frac{1}{2}AB = 3\\text{ m}$.</li>\n    <li>Tinggi segitiga sisi tegak (apotema) $TM = \\sqrt{TO^2 + OM^2} = \\sqrt{4^2 + 3^2} = 5\\text{ m}$.</li>\n  </ul>\n</div>\n<p class=\"leading-relaxed\">Data dimensi ini mendasari pemilihan balok penopang atap genteng bitumen tahan gempa.</p>",
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
            ]
          }
        },
        {
          "id": 11,
          "num": 11,
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
                "text": "Banyaknya cara susunan duduk melingkar bebas tanpa syarat khusus adalah 24 variasi cara."
              },
              {
                "id": "c2",
                "text": "Banyaknya cara susunan duduk dengan syarat Ketua dan Sekretaris selalu berdampingan adalah 12 variasi cara."
              },
              {
                "id": "c3",
                "text": "Peluang Ketua dan Sekretaris duduk berdampingan jika posisi diacak bebas adalah 1/2."
              },
              {
                "id": "c4",
                "text": "Jika kelima siswa duduk berjajar lurus di panggung dan Ketua-Sekretaris berdampingan, ada 120 cara susunan."
              }
            ]
          }
        },
        {
          "id": 12,
          "num": 12,
          "model": 2,
          "modelName": "Menjodohkan (Premis Kolom A ↔ Respons Kolom B)",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Reasoning (Penalaran)",
          "konteks": "Pendidikan & Kompetisi Siswa Berprestasi",
          "stimulusTitle": "Seleksi Delegasi Tim Olimpiade Sains",
          "stimulusBadge": "Kombinatorika & Pemilihan Delegasi",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam rangka persiapan Olimpiade Sains Nasional (OSN) tingkat provinsi, sekolah menyeleksi 11 siswa terbaik dari klub sains olimpiade. Komposisi calon delegasi terdiri atas <strong>6 siswa putra</strong> dan <strong>5 siswa putri</strong>.</p>\n<div class=\"my-3 flex justify-center\">\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-xl shadow-xs max-w-md w-full space-y-2\">\n    <div class=\"flex justify-between items-center border-b border-slate-200 pb-2\">\n      <span class=\"font-bold text-xs text-slate-800 flex items-center gap-1.5\"><i class=\"fa-solid fa-graduation-cap text-blue-600\"></i> Calon Delegasi OSN Sekolah</span>\n      <span class=\"px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800\">Total 11 Siswa</span>\n    </div>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2.5 bg-blue-50/80 border border-blue-200/80 rounded-lg text-center\">\n        <p class=\"font-black text-blue-900 text-lg\">6 Siswa</p>\n        <p class=\"text-[11px] font-medium text-blue-700\">Kandidat Putra</p>\n      </div>\n      <div class=\"p-2.5 bg-pink-50/80 border border-pink-200/80 rounded-lg text-center\">\n        <p class=\"font-black text-pink-900 text-lg\">5 Siswa</p>\n        <p class=\"text-[11px] font-medium text-pink-700\">Kandidat Putri</p>\n      </div>\n    </div>\n    <p class=\"text-[11px] text-slate-600 text-center font-medium\">Akan dibentuk satu tim delegasi resmi beranggotakan tepat <strong>4 orang siswa</strong>.</p>\n  </div>\n</div>\n<div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1\">\n  <p class=\"font-bold text-slate-900\"><i class=\"fa-solid fa-clipboard-list text-blue-600 mr-1\"></i> Ketentuan Seleksi:</p>\n  <ul class=\"list-disc list-inside space-y-0.5 text-slate-700\">\n    <li>Setiap siswa memiliki peluang yang setara untuk terpilih.</li>\n    <li>Kombinasi pemilihan dihitung tanpa memperhatikan urutan jabatan (kombinasi $C(n, r)$).</li>\n  </ul>\n</div>\n<p class=\"leading-relaxed\">Tim pembina menganalisis berbagai variasi komposisi delegasi guna merumuskan strategi tim terbaik.</p>",
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
            ]
          }
        },
        {
          "id": 13,
          "num": 13,
          "model": 1,
          "modelName": "Pernyataan Benar / Salah (Tabel 4 Baris)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Knowing (Pemahaman)",
          "konteks": "Sains Terapan & Energi Terbarukan",
          "stimulusTitle": "Audit Efisiensi Produksi Listrik Panel Surya PLTS Sekolah",
          "stimulusBadge": "Statistika Deskriptif & Pemusatan Data",
          "stimulusText": "<p class=\"leading-relaxed\">Tim laboratorium rekayasa energi terbarukan SMA mencatat data produksi energi listrik harian (dalam satuan kWh) dari sebuah instalasi PLTS atap selama 5 bulan berturut-turut (Januari hingga Mei):</p>\n    <div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs flex justify-around font-mono font-bold text-blue-900 shadow-sm\">\n      <span>Jan: 120 kWh</span>\n      <span>Feb: 140 kWh</span>\n      <span>Mar: 150 kWh</span>\n      <span>Apr: 130 kWh</span>\n      <span>Mei: 160 kWh</span>\n    </div>\n    <p class=\"leading-relaxed\">Data tersebut dianalisis untuk menguji kestabilan suplai daya sebelum penambahan inverter cadangan.</p>",
          "questionText": "Tentukan status kebenaran (BENAR atau SALAH) untuk setiap analisis parameter statistika berikut!",
          "payload": {
            "rows": [
              {
                "id": "r1",
                "statement": "Rata-rata (mean) produksi energi listrik bulanan adalah tepat 140 kWh."
              },
              {
                "id": "r2",
                "statement": "Simpangan rata-rata (SR) dari produksi energi listrik bulanan adalah 12 kWh."
              },
              {
                "id": "r3",
                "statement": "Nilai median data produksi listrik sama persis dengan nilai rata-rata hitung (mean)."
              },
              {
                "id": "r4",
                "statement": "Jangkauan (range) data produksi energi bulanan melebihi 50 kWh."
              }
            ]
          }
        },
        {
          "id": 14,
          "num": 14,
          "model": 3,
          "modelName": "Paragraf Rumpang Numerik (4 Bagian Kosong)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Applying (Penerapan Dimensi Tiga)",
          "konteks": "Teknik Mesin & Fabrikasi Balok Kayu",
          "stimulusTitle": "Pengukuran Metrik Presisi Balok Kayu ABCD.EFGH",
          "stimulusBadge": "Geometri Balok: Jarak & Volume",
          "stimulusText": "<p class=\"leading-relaxed\">Di bengkel robotika dan laboratorium presisi, siswa kelas XII melakukan pengukuran dimensi balok kayu $ABCD.EFGH$ berkepadatan tinggi. Balok kayu tersebut memiliki bidang alas persegi panjang $ABCD$ berukuran panjang $AB = 8\\text{ cm}$ dan lebar $BC = 6\\text{ cm}$, serta tinggi tegak balok $CG = 12\\text{ cm}$.</p>\n<div class=\"my-3 flex justify-center\">\n    <svg viewBox=\"0 0 300 200\" class=\"w-72 max-w-full h-auto drop-shadow-sm bg-slate-50 border border-slate-200 rounded-xl p-2\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Back edges dashed -->\n      <line x1=\"60\" y1=\"150\" x2=\"120\" y2=\"115\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <line x1=\"120\" y1=\"115\" x2=\"240\" y2=\"115\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <line x1=\"120\" y1=\"115\" x2=\"120\" y2=\"35\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      \n      <!-- Front base and verticals -->\n      <line x1=\"60\" y1=\"150\" x2=\"180\" y2=\"150\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"180\" y1=\"150\" x2=\"240\" y2=\"115\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"60\" y1=\"150\" x2=\"60\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"180\" y1=\"150\" x2=\"180\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"240\" y1=\"115\" x2=\"240\" y2=\"35\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      \n      <!-- Top face -->\n      <line x1=\"60\" y1=\"70\" x2=\"120\" y2=\"35\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"120\" y1=\"35\" x2=\"240\" y2=\"35\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"240\" y1=\"35\" x2=\"180\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"180\" y1=\"70\" x2=\"60\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      \n      <!-- Diagonal AG -->\n      <line x1=\"60\" y1=\"150\" x2=\"240\" y2=\"35\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/>\n      <circle cx=\"60\" cy=\"150\" r=\"3.5\" fill=\"#dc2626\"/>\n      <circle cx=\"240\" cy=\"35\" r=\"3.5\" fill=\"#dc2626\"/>\n\n      <!-- Labels -->\n      <text x=\"46\" y=\"162\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">A</text>\n      <text x=\"186\" y=\"162\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">B</text>\n      <text x=\"248\" y=\"120\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">C</text>\n      <text x=\"108\" y=\"115\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#64748b\">D</text>\n      <text x=\"46\" y=\"68\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">E</text>\n      <text x=\"186\" y=\"68\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">F</text>\n      <text x=\"248\" y=\"35\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">G</text>\n      <text x=\"108\" y=\"32\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#64748b\">H</text>\n      \n      <!-- Dimensions -->\n      <text x=\"120\" y=\"166\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"middle\">AB = 8 cm</text>\n      <text x=\"220\" y=\"145\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563eb\">BC = 6 cm</text>\n      <text x=\"36\" y=\"110\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563eb\">t = 12 cm</text>\n    </svg>\n  </div>\n<div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1\">\n  <p class=\"font-bold text-slate-900\"><i class=\"fa-solid fa-cube text-blue-600 mr-1\"></i> Data Dimensi Balok Kayu Presisi:</p>\n  <ul class=\"list-disc list-inside space-y-0.5 text-slate-700\">\n    <li>Panjang rusuk alas: $AB = 8\\text{ cm}$, lebar $BC = 6\\text{ cm}$, tinggi tegak balok $t = CG = 12\\text{ cm}$.</li>\n    <li>Diagonal bidang alas: $AC = \\sqrt{8^2 + 6^2} = \\sqrt{100} = 10\\text{ cm}$.</li>\n    <li>Panjang diagonal ruang balok: $AG = \\sqrt{8^2 + 6^2 + 12^2} = \\sqrt{244} = 2\\sqrt{61}\\text{ cm}$.</li>\n  </ul>\n</div>\n<p class=\"leading-relaxed\">Presisi dimensi balok ini krusial untuk kestabilan dudukan sasis robot beroda.</p>",
          "questionText": "Isikan nilai numerik hasil perhitungan dimensi tiga pada paragraf berikut:",
          "payload": {
            "clozeText": "Panjang diagonal bidang alas balok AC adalah (1) [___] cm. Jarak tegak lurus dari titik sudut alas B ke garis diagonal AC adalah (2) [___] cm. Panjang diagonal ruang balok AG yang dihitung menggunakan teorema Pythagoras 3 dimensi adalah tepat (3) [___] cm. Volume total balok kayu jati tersebut adalah sebesar (4) [___] cm³.",
            "blanks": [
              {
                "id": "b1",
                "label": "(1)",
                "placeholder": "cm..."
              },
              {
                "id": "b2",
                "label": "(2)",
                "placeholder": "cm..."
              },
              {
                "id": "b3",
                "label": "(3)",
                "placeholder": "cm..."
              },
              {
                "id": "b4",
                "label": "(4)",
                "placeholder": "cm³..."
              }
            ]
          }
        },
        {
          "id": 15,
          "num": 15,
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
            ]
          }
        },
        {
          "id": 16,
          "num": 16,
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
            ]
          }
        },
        {
          "id": 17,
          "num": 17,
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
                "text": "Peluang muncul jumlah kedua mata dadu bernilai 7 adalah tepat 1/6."
              },
              {
                "id": "c2",
                "text": "Peluang muncul jumlah kedua mata dadu bernilai minimal 10 (10, 11, atau 12) adalah 1/6."
              },
              {
                "id": "c3",
                "text": "Peluang muncul kedua mata dadu bernilai kembar (angka sama) adalah 1/6."
              },
              {
                "id": "c4",
                "text": "Peluang muncul jumlah kedua mata dadu berupa bilangan prima adalah tepat 1/2."
              }
            ]
          }
        },
        {
          "id": 18,
          "num": 18,
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
            ]
          }
        },
        {
          "id": 19,
          "num": 19,
          "model": 1,
          "modelName": "Pernyataan Benar / Salah (Tabel 4 Baris)",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Applying (Penerapan)",
          "konteks": "Sosial, Perjalanan & Logistik",
          "stimulusTitle": "Optimalisasi Rute Penerbangan Delegasi Umrah Siswa",
          "stimulusBadge": "Aturan Perkalian & Kombinasi Rute",
          "stimulusText": "<p class=\"leading-relaxed\">Sekolah merencanakan program Umrah Edukasi Siswa dari Jakarta menuju Jeddah. Biro perjalanan menawarkan tiga pilihan kota transit:</p>\n    <div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs space-y-1 text-slate-800\">\n      <p>• <strong>Via Doha:</strong> Tersedia 4 pilihan maskapai Jakarta-Doha dan 3 maskapai lanjutan Doha-Jeddah.</p>\n      <p>• <strong>Via Dubai:</strong> Tersedia 3 pilihan maskapai Jakarta-Dubai dan 4 maskapai lanjutan Dubai-Jeddah.</p>\n      <p>• <strong>Via Muscat:</strong> Tersedia 2 pilihan maskapai Jakarta-Muscat dan 2 maskapai lanjutan Muscat-Jeddah.</p>\n    </div>\n    <p class=\"leading-relaxed\">Seluruh rute saling independen dan dapat dipilih oleh panitia keberangkatan.</p>",
          "questionText": "Tentukan status kebenaran (BENAR atau SALAH) untuk setiap analisis rute perjalanan berikut!",
          "payload": {
            "rows": [
              {
                "id": "r1",
                "statement": "Banyak pilihan rute penerbangan bila transit melalui Doha adalah tepat 12 rute variasi."
              },
              {
                "id": "r2",
                "statement": "Banyak pilihan rute penerbangan bila transit melalui Muscat adalah 4 rute variasi."
              },
              {
                "id": "r3",
                "statement": "Total variasi seluruh rute penerbangan dari Jakarta ke Jeddah yang dapat dipilih adalah 28 rute."
              },
              {
                "id": "r4",
                "statement": "Peluang terpilih rute yang transit melalui Dubai jika dipilih secara acak adalah 3/7."
              }
            ]
          }
        },
        {
          "id": 20,
          "num": 20,
          "model": 3,
          "modelName": "Paragraf Rumpang Numerik (4 Bagian Kosong)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Reasoning (Penalaran Bivariat)",
          "konteks": "Edukasi & Efektivitas Waktu Belajar",
          "stimulusTitle": "Analisis Regresi Linier Durasi Belajar vs Skor Ujian",
          "stimulusBadge": "Statistika Bivariat: Garis Regresi",
          "stimulusText": "<p class=\"leading-relaxed\">Koordinator kurikulum menganalisis efektivitas bimbingan intensif persiapan TKA melalui korelasi antara durasi belajar mandiri harian ($x$ dalam jam) dan skor try out ($y$ dalam poin) dari sampel 5 orang siswa:</p>\n<div class=\"my-3 overflow-x-auto\">\n  <table class=\"w-full max-w-md mx-auto text-xs border border-slate-200 rounded-xl overflow-hidden shadow-xs\">\n    <thead class=\"bg-blue-50 text-blue-900 font-bold text-center\">\n      <tr>\n        <th class=\"p-2 border border-slate-200\">Siswa</th>\n        <th class=\"p-2 border border-slate-200\">Belajar ($x$ Jam)</th>\n        <th class=\"p-2 border border-slate-200\">Skor ($y$ Poin)</th>\n        <th class=\"p-2 border border-slate-200\">$x^2$</th>\n        <th class=\"p-2 border border-slate-200\">$x \\cdot y$</th>\n      </tr>\n    </thead>\n    <tbody class=\"divide-y divide-slate-100 bg-white font-mono text-center\">\n      <tr><td class=\"p-1.5 font-bold font-sans\">A</td><td class=\"p-1.5\">1</td><td class=\"p-1.5\">60</td><td class=\"p-1.5 text-slate-500\">1</td><td class=\"p-1.5 text-slate-500\">60</td></tr>\n      <tr><td class=\"p-1.5 font-bold font-sans\">B</td><td class=\"p-1.5\">2</td><td class=\"p-1.5\">70</td><td class=\"p-1.5 text-slate-500\">4</td><td class=\"p-1.5 text-slate-500\">140</td></tr>\n      <tr><td class=\"p-1.5 font-bold font-sans\">C</td><td class=\"p-1.5\">3</td><td class=\"p-1.5\">75</td><td class=\"p-1.5 text-slate-500\">9</td><td class=\"p-1.5 text-slate-500\">225</td></tr>\n      <tr><td class=\"p-1.5 font-bold font-sans\">D</td><td class=\"p-1.5\">4</td><td class=\"p-1.5\">85</td><td class=\"p-1.5 text-slate-500\">16</td><td class=\"p-1.5 text-slate-500\">340</td></tr>\n      <tr><td class=\"p-1.5 font-bold font-sans\">E</td><td class=\"p-1.5\">5</td><td class=\"p-1.5\">90</td><td class=\"p-1.5 text-slate-500\">25</td><td class=\"p-1.5 text-slate-500\">450</td></tr>\n      <tr class=\"bg-blue-50/50 font-bold text-blue-900\"><td class=\"p-1.5 font-sans\">Total (Σ)</td><td class=\"p-1.5\">15</td><td class=\"p-1.5\">380</td><td class=\"p-1.5\">55</td><td class=\"p-1.5\">1215</td></tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1\">\n  <p class=\"font-bold text-slate-900\"><i class=\"fa-solid fa-chart-line text-blue-600 mr-1\"></i> Rumus Regresi Linier ($\\hat{y} = a + bx$):</p>\n  <ul class=\"list-disc list-inside space-y-0.5 text-slate-700\">\n    <li>Kemiringan garis (gradien): $b = \\frac{n\\sum xy - (\\sum x)(\\sum y)}{n\\sum x^2 - (\\sum x)^2}$.</li>\n    <li>Konstanta intersep: $a = \\bar{y} - b\\bar{x}$, dengan $\\bar{x} = \\frac{\\sum x}{n}$ dan $\\bar{y} = \\frac{\\sum y}{n}$.</li>\n  </ul>\n</div>\n<p class=\"leading-relaxed\">Gunakan data tabel di atas untuk menyelesaikan analisis regresi linier pada paragraf rumpang berikut.</p>",
          "questionText": "Lengkapilah analisis persamaan garis regresi linier ŷ = a + bx berikut dengan angka yang tepat:",
          "payload": {
            "clozeText": "Berdasarkan 5 pasangan data di atas, nilai rata-rata jam belajar siswa adalah (1) [___] jam. Nilai kemiringan (gradien) garis regresi b bernilai (2) [___]. Nilai konstanta intersep regresi a adalah (3) [___]. Dengan model ini, prediksi skor asesmen seorang siswa yang belajar mandiri selama 4 jam per hari adalah (4) [___] poin.",
            "blanks": [
              {
                "id": "b1",
                "label": "(1)",
                "placeholder": "jam..."
              },
              {
                "id": "b2",
                "label": "(2)",
                "placeholder": "nilai b..."
              },
              {
                "id": "b3",
                "label": "(3)",
                "placeholder": "nilai a..."
              },
              {
                "id": "b4",
                "label": "(4)",
                "placeholder": "prediksi..."
              }
            ]
          }
        },
        {
          "id": 21,
          "num": 21,
          "model": 3,
          "modelName": "Paragraf Rumpang Numerik (4 Bagian Kosong)",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Applying (Penerapan Pencacahan)",
          "konteks": "Teknologi Informasi & Akses Lab Komputer",
          "stimulusTitle": "Formasi Kode Akses Kartu Cerdas Laboratorium",
          "stimulusBadge": "Permutasi & Aturan Pengisian Tempat",
          "stimulusText": "<p class=\"leading-relaxed\">Sistem kunci pintar pintu laboratorium komputer SMA menggunakan kartu dengan kode sandi 3 digit angka berbeda yang dipilih dari himpunan angka prima dan genap tertentu: ${2, 3, 5, 7, 8}$.</p>",
          "questionText": "Isikan bilangan yang tepat untuk melengkapi analisis variasi kode berikut:",
          "payload": {
            "clozeText": "Banyaknya variasi kode 3 angka berbeda yang dapat dibentuk tanpa syarat adalah sebanyak (1) [___] kode. Di antara variasi tersebut, banyaknya kode yang bernilai ganjil adalah (2) [___] kode. Sedangkan banyaknya kode yang bernilai genap adalah sebanyak (3) [___] kode. Peluang terpilihnya kode yang bernilai genap jika dipilih secara acak adalah sebesar (4) [___].",
            "blanks": [
              {
                "id": "b1",
                "label": "(1)",
                "placeholder": "total..."
              },
              {
                "id": "b2",
                "label": "(2)",
                "placeholder": "ganjil..."
              },
              {
                "id": "b3",
                "label": "(3)",
                "placeholder": "genap..."
              },
              {
                "id": "b4",
                "label": "(4)",
                "placeholder": "peluang..."
              }
            ]
          }
        },
        {
          "id": 22,
          "num": 22,
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
            ]
          }
        },
        {
          "id": 23,
          "num": 23,
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
            ]
          }
        },
        {
          "id": 24,
          "num": 24,
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
                "text": "Penampang irisan bidang yang dibentuk oleh titik-titik A, C, dan H adalah segitiga sama sisi berukuran sisi 6√2 cm."
              },
              {
                "id": "c2",
                "text": "Luas daerah penampang segitiga ACH adalah tepat 18√3 cm²."
              },
              {
                "id": "c3",
                "text": "Luas daerah bidang diagonal BDHF pada kubus tersebut adalah 36√2 cm²."
              },
              {
                "id": "c4",
                "text": "Penampang irisan bidang yang memuat titik-titik B, D, dan E berbentuk trapesium sama kaki."
              }
            ]
          }
        },
        {
          "id": 25,
          "num": 25,
          "model": 1,
          "modelName": "Pernyataan Benar / Salah (Tabel 4 Baris)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Reasoning (Penalaran)",
          "konteks": "Arsitektur & Seni Bangunan",
          "stimulusTitle": "Desain Piramida Kaca Museum Mini Edukasi Sains",
          "stimulusBadge": "Geometri Dimensi Tiga (Limas Beraturan)",
          "stimulusText": "<p class=\"leading-relaxed\">Sebuah paviliun pameran dirancang berbentuk limas segiempat beraturan $T.ABCD$. Bidang alas $ABCD$ merupakan persegi dengan panjang sisi $8\\sqrt{2}\\text{ meter}$, sedangkan panjang setiap rusuk tegak kaca ($TA = TB = TC = TD$) adalah $10\\text{ meter}$.</p>\n    <p class=\"leading-relaxed\">Titik $O$ adalah titik perpotongan diagonal bidang alas $AC$ dan $BD$, serta menjadi titik proyeksi tegak lurus puncak $T$ terhadap lantai dasar.</p>",
          "questionText": "Tentukan status kebenaran (BENAR atau SALAH) untuk setiap analisis geometri limas berikut!",
          "payload": {
            "rows": [
              {
                "id": "r1",
                "statement": "Tinggi tegak puncak piramida dari lantai dasar (panjang TO) adalah tepat 6 meter."
              },
              {
                "id": "r2",
                "statement": "Panjang garis tinggi pada bidang sisi tegak segitiga TAB adalah 2√17 meter."
              },
              {
                "id": "r3",
                "statement": "Volume ruang dalam paviliun piramida kaca tersebut adalah 256 meter kubik."
              },
              {
                "id": "r4",
                "statement": "Jarak titik sudut alas A ke rusuk tegak TC adalah tepat 10 meter."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "GLADI_02",
      "code": "SIMULASI-02",
      "title": "Drilling Terpadu TKA & Asesmen Nasional Gelombang 2",
      "subtitle": "Pendalaman Soal Tingkat Lanjut & Bedah TKA Fase F",
      "targetDate": "26 - 29 Oktober 2026",
      "durationMinutes": 75,
      "totalQuestions": 25,
      "kategoriLevel": "Fase F (Kelas XII SMA)",
      "questions": [
        {
          "id": 1,
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
                "statement": "Rata-rata (mean) keseluruhan skor dari keempat rombel adalah tepat 82,5 poin."
              },
              {
                "id": "r2",
                "statement": "Simpangan rata-rata (SR) dari skor keempat rombel bernilai tepat 5,0 poin."
              },
              {
                "id": "r3",
                "statement": "Nilai median skor keempat rombel bernilai sama persis dengan nilai rata-rata hitung."
              },
              {
                "id": "r4",
                "statement": "Jangkauan (range) selisih nilai rombel tertinggi dan terendah melebihi 20 poin."
              }
            ]
          }
        },
        {
          "id": 2,
          "num": 2,
          "model": 4,
          "modelName": "Sebab - Akibat Analitis",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Reasoning (Penalaran Pemusatan Data)",
          "konteks": "Metodologi Statistik & Analisis Pencilan",
          "stimulusTitle": "Resistensi Ukuran Pemusatan terhadap Pencilan (Outlier)",
          "stimulusBadge": "Median vs Rata-rata pada Distribusi Mencong",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam evaluasi hasil belajar mandiri persiapan asesmen nasional, guru matematika mencatat durasi belajar mingguan (dalam jam) dari 7 orang siswa dalam satu kelompok belajar:</p>\n<div class=\"my-3 flex justify-center\">\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-xl shadow-xs max-w-md w-full space-y-2 text-center\">\n    <span class=\"text-xs font-bold text-slate-800 uppercase tracking-wider block\">Data Durasi Belajar Mingguan (Jam)</span>\n    <div class=\"flex justify-center gap-2 text-xs font-mono font-bold flex-wrap\">\n      <span class=\"px-2.5 py-1.5 bg-blue-50 border border-blue-200 text-blue-900 rounded-lg\">8 jam</span>\n      <span class=\"px-2.5 py-1.5 bg-blue-50 border border-blue-200 text-blue-900 rounded-lg\">10 jam</span>\n      <span class=\"px-2.5 py-1.5 bg-blue-50 border border-blue-200 text-blue-900 rounded-lg\">11 jam</span>\n      <span class=\"px-2.5 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-lg font-black\">12 jam (Median)</span>\n      <span class=\"px-2.5 py-1.5 bg-blue-50 border border-blue-200 text-blue-900 rounded-lg\">12 jam</span>\n      <span class=\"px-2.5 py-1.5 bg-blue-50 border border-blue-200 text-blue-900 rounded-lg\">14 jam</span>\n      <span class=\"px-2.5 py-1.5 bg-rose-50 border border-rose-300 text-rose-800 rounded-lg font-black\">45 jam (Pencilan)</span>\n    </div>\n    <div class=\"grid grid-cols-2 gap-2 text-left pt-2 text-xs border-t border-slate-200\">\n      <div class=\"p-2 bg-white rounded border border-slate-200\">\n        <span class=\"text-[11px] text-slate-500 block\">Rata-rata (Mean):</span>\n        <span class=\"font-bold font-mono text-slate-800 text-sm\">x̄ = 16,0 jam</span>\n        <span class=\"text-[10px] text-rose-600 block\">*Tertarik jauh oleh nilai 45</span>\n      </div>\n      <div class=\"p-2 bg-white rounded border border-slate-200\">\n        <span class=\"text-[11px] text-slate-500 block\">Median (Nilai Tengah):</span>\n        <span class=\"font-bold font-mono text-emerald-700 text-sm\">Me = 12,0 jam</span>\n        <span class=\"text-[10px] text-emerald-600 block\">*Tetap stabil mewakili mayoritas</span>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1\">\n  <p class=\"font-bold text-slate-900\"><i class=\"fa-solid fa-chart-pie text-blue-600 mr-1\"></i> Karakteristik Ukuran Pemusatan:</p>\n  <ul class=\"list-disc list-inside space-y-0.5 text-slate-700\">\n    <li>Keberadaan satu nilai ekstrem besar ($45\\text{ jam}$) mendongkrak rata-rata hingga $16\\text{ jam}$, padahal 6 dari 7 siswa hanya belajar $\\le 14\\text{ jam}$.</li>\n    <li>Nilai median tetap bertahan di angka $12\\text{ jam}$, membuktikan ketahanan (*robustness*) posisi median terhadap pencilan.</li>\n  </ul>\n</div>\n<p class=\"leading-relaxed\">Fenomena ini mendasari pertimbangan statistik dalam memilih ukuran representatif bagi data yang tidak simetris (mencong).</p>",
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
            ]
          }
        },
        {
          "id": 3,
          "num": 3,
          "model": 2,
          "modelName": "Menjodohkan (Premis Kolom A ↔ Respons Kolom B)",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Applying (Penerapan Kaidah Pencacahan)",
          "konteks": "Pendidikan & Seleksi Lomba Sains",
          "stimulusTitle": "Seleksi Delegasi Lomba Sains Multi-Kategori",
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
            ]
          }
        },
        {
          "id": 4,
          "num": 4,
          "model": 5,
          "modelName": "Pilihan Ganda Kompleks (Checkbox Multi-Select)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Knowing (Pemahaman Distribusi Peluang)",
          "konteks": "Teori Peluang & Eksperimen Probabilitas",
          "stimulusTitle": "Distribusi Probabilitas Jumlah Mata Dua Dadu Homogen",
          "stimulusBadge": "Peluang Bersama Ruang Sampel 36",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam eksperimen probabilitas di laboratorium matematika, dua buah dadu bermata enam yang seimbang dan homogen dilemparkan secara serentak satu kali. Ruang sampel dari percobaan ini terdiri atas $6 \\times 6 = 36$ kemungkinan pasangan terurut $(d_1, d_2)$:</p>\n<div class=\"my-3 overflow-x-auto\">\n  <table class=\"w-full max-w-md mx-auto text-xs border border-slate-200 rounded-xl overflow-hidden shadow-xs text-center font-mono\">\n    <thead class=\"bg-blue-50 text-blue-900 font-bold font-sans\">\n      <tr>\n        <th class=\"p-1.5 border border-slate-200\">Dadu 1 \\ 2</th>\n        <th class=\"p-1.5 border border-slate-200\">1</th>\n        <th class=\"p-1.5 border border-slate-200\">2</th>\n        <th class=\"p-1.5 border border-slate-200\">3</th>\n        <th class=\"p-1.5 border border-slate-200\">4</th>\n        <th class=\"p-1.5 border border-slate-200\">5</th>\n        <th class=\"p-1.5 border border-slate-200\">6</th>\n      </tr>\n    </thead>\n    <tbody class=\"divide-y divide-slate-100 bg-white\">\n      <tr><td class=\"p-1 font-bold bg-slate-50 font-sans\">1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td class=\"bg-blue-50/70 font-bold text-blue-700\">7</td></tr>\n      <tr><td class=\"p-1 font-bold bg-slate-50 font-sans\">2</td><td>3</td><td>4</td><td>5</td><td>6</td><td class=\"bg-blue-50/70 font-bold text-blue-700\">7</td><td>8</td></tr>\n      <tr><td class=\"p-1 font-bold bg-slate-50 font-sans\">3</td><td>4</td><td>5</td><td>6</td><td class=\"bg-blue-50/70 font-bold text-blue-700\">7</td><td>8</td><td>9</td></tr>\n      <tr><td class=\"p-1 font-bold bg-slate-50 font-sans\">4</td><td>5</td><td>6</td><td class=\"bg-blue-50/70 font-bold text-blue-700\">7</td><td>8</td><td>9</td><td>10</td></tr>\n      <tr><td class=\"p-1 font-bold bg-slate-50 font-sans\">5</td><td>6</td><td class=\"bg-blue-50/70 font-bold text-blue-700\">7</td><td>8</td><td>9</td><td>10</td><td>11</td></tr>\n      <tr><td class=\"p-1 font-bold bg-slate-50 font-sans\">6</td><td class=\"bg-blue-50/70 font-bold text-blue-700\">7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td></tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1\">\n  <p class=\"font-bold text-slate-900\"><i class=\"fa-solid fa-dice text-blue-600 mr-1\"></i> Karakteristik Distribusi Jumlah Mata Dadu:</p>\n  <ul class=\"list-disc list-inside space-y-0.5 text-slate-700\">\n    <li>Ukuran ruang sampel gabungan: $n(S) = 36$ titik sampel berbobot sama.</li>\n    <li>Nilai jumlah mata dadu yang mungkin berkisar antara $2$ hingga $12$.</li>\n    <li>Nilai jumlah $7$ merupakan modus distribusi dengan frekuensi kemunculan terbanyak ($6$ titik sampel).</li>\n  </ul>\n</div>\n<p class=\"leading-relaxed\">Gunakan tabel kisi ruang sampel di atas untuk menganalisis probabilitas teoritis pada setiap pernyataan berikut.</p>",
          "questionText": "Beri tanda centang (✓) pada setiap pernyataan peluang berikut yang bernilai BENAR!",
          "payload": {
            "statements": [
              {
                "id": "c1",
                "text": "Peluang muncul jumlah kedua mata dadu bernilai 6 adalah tepat 5/36."
              },
              {
                "id": "c2",
                "text": "Peluang muncul jumlah kedua mata dadu bernilai 8 adalah tepat 5/36."
              },
              {
                "id": "c3",
                "text": "Jumlah mata dadu yang memiliki peluang terbesar untuk muncul adalah bernilai 7 (peluang 6/36)."
              },
              {
                "id": "c4",
                "text": "Peluang muncul jumlah kedua mata dadu bernilai genap adalah tepat 3/4."
              }
            ]
          }
        },
        {
          "id": 5,
          "num": 5,
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
                "placeholder": "mean..."
              },
              {
                "id": "b2",
                "label": "(2)",
                "placeholder": "range..."
              },
              {
                "id": "b3",
                "label": "(3)",
                "placeholder": "SR..."
              },
              {
                "id": "b4",
                "label": "(4)",
                "placeholder": "varians..."
              }
            ]
          }
        },
        {
          "id": 6,
          "num": 6,
          "model": 4,
          "modelName": "Sebab - Akibat Analitis",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Knowing (Pemahaman Aksioma Ruang)",
          "konteks": "Geometri Dimensi Tiga",
          "stimulusTitle": "Kedudukan Garis Bersilangan pada Ruang Tiga Dimensi",
          "stimulusBadge": "Aksioma Geometri Ruang Euclid",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam aksioma geometri ruang Euclid tiga dimensi, kedudukan relatif antara dua garis lurus dianalisis berdasarkan keberadaan bidang persekutuan (bidang datar bersama yang memuat kedua garis tersebut).</p>\n<div class=\"my-3 flex justify-center\">\n    <svg viewBox=\"0 0 280 180\" class=\"w-64 max-w-full h-auto drop-shadow-sm bg-slate-50 border border-slate-200 rounded-xl p-2\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Back edges dashed -->\n      <line x1=\"50\" y1=\"130\" x2=\"110\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <line x1=\"110\" y1=\"90\" x2=\"230\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <line x1=\"110\" y1=\"90\" x2=\"110\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      \n      <!-- Front base and verticals -->\n      <line x1=\"50\" y1=\"130\" x2=\"170\" y2=\"130\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"170\" y1=\"130\" x2=\"230\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"50\" y1=\"130\" x2=\"50\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"170\" y1=\"130\" x2=\"170\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"230\" y1=\"90\" x2=\"230\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      \n      <!-- Top face -->\n      <line x1=\"50\" y1=\"70\" x2=\"110\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"110\" y1=\"30\" x2=\"230\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"230\" y1=\"30\" x2=\"170\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"170\" y1=\"70\" x2=\"50\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      \n      <!-- Highlighted Line 1: AB (Front bottom) -->\n      <line x1=\"50\" y1=\"130\" x2=\"170\" y2=\"130\" stroke=\"#2563eb\" stroke-width=\"3\"/>\n      <text x=\"110\" y=\"145\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"middle\">Garis g₁ (AB)</text>\n      \n      <!-- Highlighted Line 2: CG (Right back vertical) -->\n      <line x1=\"230\" y1=\"90\" x2=\"230\" y2=\"30\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n      <text x=\"245\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#dc2626\">Garis g₂ (CG)</text>\n      \n      <!-- Labels -->\n      <text x=\"38\" y=\"140\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\">A</text>\n      <text x=\"175\" y=\"140\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\">B</text>\n      <text x=\"236\" y=\"98\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">C</text>\n      <text x=\"96\" y=\"92\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#64748b\">D</text>\n      <text x=\"38\" y=\"68\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">E</text>\n      <text x=\"175\" y=\"68\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">F</text>\n      <text x=\"236\" y=\"28\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">G</text>\n      <text x=\"96\" y=\"28\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#64748b\">H</text>\n    </svg>\n  </div>\n<div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1\">\n  <p class=\"font-bold text-slate-900\"><i class=\"fa-solid fa-shapes text-blue-600 mr-1\"></i> Aksioma Kedudukan Dua Garis dalam Ruang:</p>\n  <ul class=\"list-disc list-inside space-y-0.5 text-slate-700\">\n    <li><strong>Koplanar (Sebidang):</strong> Berpotongan (memiliki 1 titik temu) ATAU Sejajar (tidak berpotongan, arah sama).</li>\n    <li><strong>Non-Koplanar (Tidak Sebidang):</strong> Bersilangan (tidak berpotongan dan tidak sejajar, seperti garis $AB$ dan $CG$).</li>\n  </ul>\n</div>\n<p class=\"leading-relaxed\">Pemahaman aksiomatis ini fundamental dalam rekayasa mekanikal untuk mencegah interferensi pipa saluran fluida dan kabel kelistrikan.</p>",
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
            ]
          }
        },
        {
          "id": 7,
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
            ]
          }
        },
        {
          "id": 8,
          "num": 8,
          "model": 1,
          "modelName": "Pernyataan Benar / Salah (Tabel 4 Baris)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Applying (Penerapan Dimensi Tiga)",
          "konteks": "Teknik Panggung & Tata Cahaya Seni",
          "stimulusTitle": "Instalasi Lampu Sorot Panggung Seni & Geometri Kubus",
          "stimulusBadge": "Geometri Dimensi Tiga: Kubus ABCD.EFGH",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam pementasan apresiasi seni sekolah, teknisi tata cahaya memasang lampu sorot di sudut langit-langit aula serbaguna yang dimodelkan sebagai kubus $ABCD.EFGH$ berukuran rusuk $8\\text{ m}$.</p>\n<div class=\"my-3 flex justify-center\">\n    <svg viewBox=\"0 0 280 200\" class=\"w-64 max-w-full h-auto drop-shadow-sm bg-slate-50 border border-slate-200 rounded-xl p-2\" xmlns=\"http://www.w3.org/2000/svg\">\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#2563eb\"/>\n        </marker>\n      </defs>\n      <!-- Back edges (dashed) -->\n      <line x1=\"50\" y1=\"140\" x2=\"110\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <line x1=\"110\" y1=\"100\" x2=\"230\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <line x1=\"110\" y1=\"100\" x2=\"110\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      \n      <!-- Front base and verticals -->\n      <line x1=\"50\" y1=\"140\" x2=\"170\" y2=\"140\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"170\" y1=\"140\" x2=\"230\" y2=\"100\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"50\" y1=\"140\" x2=\"50\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"230\" y1=\"100\" x2=\"230\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      \n      <!-- Top face -->\n      <line x1=\"50\" y1=\"70\" x2=\"110\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"110\" y1=\"30\" x2=\"230\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"230\" y1=\"30\" x2=\"170\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"170\" y1=\"70\" x2=\"50\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      \n      <!-- Highlighted diagonal (BH) -->\n      <line x1=\"170\" y1=\"140\" x2=\"110\" y2=\"30\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"5,3\"/>\n      <circle cx=\"170\" cy=\"140\" r=\"3.5\" fill=\"#dc2626\"/>\n      <circle cx=\"110\" cy=\"30\" r=\"3.5\" fill=\"#dc2626\"/>\n      \n      <!-- Vertex Labels -->\n      <text x=\"36\" y=\"152\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">A</text>\n      <text x=\"178\" y=\"152\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\">B</text>\n      <text x=\"238\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">C</text>\n      <text x=\"96\" y=\"102\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#64748b\">D</text>\n      <text x=\"36\" y=\"70\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">E</text>\n      <text x=\"178\" y=\"68\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">F</text>\n      <text x=\"238\" y=\"30\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">G</text>\n      <text x=\"96\" y=\"28\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\">H</text>\n      \n      <!-- Rusuk dimension indicator -->\n      <text x=\"100\" y=\"158\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"middle\">s = 8 m</text>\n    </svg>\n  </div>\n<div class=\"my-3 p-3.5 rounded-xl border bg-slate-50 border-slate-200 text-slate-800 text-xs space-y-1.5 shadow-sm\">\n  <p class=\"font-bold text-slate-900\"><i class=\"fa-solid fa-lightbulb text-amber-500 mr-1\"></i> Data Spasial Titik Sorot:</p>\n  <ul class=\"list-disc list-inside space-y-1 text-slate-700\">\n    <li>Lampu sorot terpasang kokoh pada titik sudut atas $H$.</li>\n    <li>Panggung utama berada di sudut diagonal dasar berlawanan pada titik $B$.</li>\n    <li>Jarak jangkauan sinar lampu dari sudut $H$ ke titik $B$ sama dengan panjang diagonal ruang $HB = s\\sqrt{3} = 8\\sqrt{3}\\text{ m}$.</li>\n  </ul>\n</div>\n<p class=\"leading-relaxed\">Kalkulasi jarak ruang ini penting untuk memilih sudut lensa fokus (*beam angle*) lampu sorot panggung.</p>",
          "questionText": "Tentukan status kebenaran (BENAR atau SALAH) untuk setiap analisis posisi sorot cahaya berikut!",
          "payload": {
            "rows": [
              {
                "id": "r1",
                "statement": "Jarak langsung lampu sorot di titik H ke titik sudut lantai B (diagonal ruang HB) adalah 8√3 meter."
              },
              {
                "id": "r2",
                "statement": "Jarak lampu sorot di H ke titik pusat lantai dasar P (titik potong AC dan BD) adalah 4√6 meter."
              },
              {
                "id": "r3",
                "statement": "Jarak lampu sorot di H ke garis tepi lantai AB adalah 8√2 meter."
              },
              {
                "id": "r4",
                "statement": "Jarak terpendek dari lampu sorot H ke garis diagonal bidang lantai AC adalah tepat 8 meter."
              }
            ]
          }
        },
        {
          "id": 9,
          "num": 9,
          "model": 3,
          "modelName": "Paragraf Rumpang Numerik (4 Bagian Kosong)",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Applying (Penerapan Permutasi)",
          "konteks": "Linguistik & Kode Anagram Kata",
          "stimulusTitle": "Analisis Anagram & Permutasi Kata 'KOLABORASI'",
          "stimulusBadge": "Permutasi dengan Unsur yang Sama",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam kompetisi linguistik komputasi dan enkripsi kode, tim olimpiade menganalisis variasi kata sandi (anagram) yang dapat dibentuk dari kata <strong>KOLABORASI</strong>.</p>\n<div class=\"my-3 flex justify-center\">\n    <svg viewBox=\"0 0 400 95\" class=\"w-full max-w-md h-auto drop-shadow-sm bg-slate-50 border border-slate-200 rounded-xl p-2\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Letter Tiles for KOLABORASI -->\n      <!-- K -->\n      <rect x=\"10\" y=\"20\" width=\"32\" height=\"40\" rx=\"6\" fill=\"#f1f5f9\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n      <text x=\"26\" y=\"46\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">K</text>\n      <text x=\"26\" y=\"15\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#94a3b8\" text-anchor=\"middle\">1</text>\n      <!-- O -->\n      <rect x=\"48\" y=\"20\" width=\"32\" height=\"40\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n      <text x=\"64\" y=\"46\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0369a1\" text-anchor=\"middle\">O</text>\n      <text x=\"64\" y=\"15\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"bold\" fill=\"#0284c7\" text-anchor=\"middle\">2</text>\n      <!-- L -->\n      <rect x=\"86\" y=\"20\" width=\"32\" height=\"40\" rx=\"6\" fill=\"#f1f5f9\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n      <text x=\"102\" y=\"46\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">L</text>\n      <text x=\"102\" y=\"15\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#94a3b8\" text-anchor=\"middle\">3</text>\n      <!-- A -->\n      <rect x=\"124\" y=\"20\" width=\"32\" height=\"40\" rx=\"6\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/>\n      <text x=\"140\" y=\"46\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#b45309\" text-anchor=\"middle\">A</text>\n      <text x=\"140\" y=\"15\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"bold\" fill=\"#d97706\" text-anchor=\"middle\">4</text>\n      <!-- B -->\n      <rect x=\"162\" y=\"20\" width=\"32\" height=\"40\" rx=\"6\" fill=\"#f1f5f9\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n      <text x=\"178\" y=\"46\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">B</text>\n      <text x=\"178\" y=\"15\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#94a3b8\" text-anchor=\"middle\">5</text>\n      <!-- O -->\n      <rect x=\"200\" y=\"20\" width=\"32\" height=\"40\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n      <text x=\"216\" y=\"46\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0369a1\" text-anchor=\"middle\">O</text>\n      <text x=\"216\" y=\"15\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"bold\" fill=\"#0284c7\" text-anchor=\"middle\">6</text>\n      <!-- R -->\n      <rect x=\"238\" y=\"20\" width=\"32\" height=\"40\" rx=\"6\" fill=\"#f1f5f9\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n      <text x=\"254\" y=\"46\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">R</text>\n      <text x=\"254\" y=\"15\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#94a3b8\" text-anchor=\"middle\">7</text>\n      <!-- A -->\n      <rect x=\"276\" y=\"20\" width=\"32\" height=\"40\" rx=\"6\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/>\n      <text x=\"292\" y=\"46\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#b45309\" text-anchor=\"middle\">A</text>\n      <text x=\"292\" y=\"15\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"bold\" fill=\"#d97706\" text-anchor=\"middle\">8</text>\n      <!-- S -->\n      <rect x=\"314\" y=\"20\" width=\"32\" height=\"40\" rx=\"6\" fill=\"#f1f5f9\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n      <text x=\"330\" y=\"46\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">S</text>\n      <text x=\"330\" y=\"15\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#94a3b8\" text-anchor=\"middle\">9</text>\n      <!-- I -->\n      <rect x=\"352\" y=\"20\" width=\"32\" height=\"40\" rx=\"6\" fill=\"#f1f5f9\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n      <text x=\"368\" y=\"46\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">I</text>\n      <text x=\"368\" y=\"15\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#94a3b8\" text-anchor=\"middle\">10</text>\n      <!-- Summary tag below -->\n      <rect x=\"60\" y=\"68\" width=\"280\" height=\"20\" rx=\"5\" fill=\"#f8fafc\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n      <text x=\"200\" y=\"82\" font-family=\"sans-serif\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">Total: 10 Huruf | Huruf O: 2 Kali | Huruf A: 2 Kali</text>\n    </svg>\n  </div>\n<div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1\">\n  <p class=\"font-bold text-slate-900\"><i class=\"fa-solid fa-font text-blue-600 mr-1\"></i> Karakteristik Huruf Penyusun:</p>\n  <ul class=\"list-disc list-inside space-y-0.5 text-slate-700\">\n    <li>Jumlah seluruh huruf penyusun: $n = 10$ huruf (K, O, L, A, B, O, R, A, S, I).</li>\n    <li>Terdapat 2 jenis huruf berulang: huruf <strong>O</strong> berulang 2 kali ($k_1 = 2$) dan huruf <strong>A</strong> berulang 2 kali ($k_2 = 2$).</li>\n    <li>Huruf lainnya (K, L, B, R, S, I) masing-masing hanya berulang 1 kali.</li>\n    <li>Rumus permutasi unsur berulang: $P = \\frac{n!}{k_1! \\times k_2! \\times \\dots \\times k_m!}$.</li>\n  </ul>\n</div>\n<p class=\"leading-relaxed\">Analisis kombinatorika ini diterapkan untuk menghitung variasi kata sandi terhadap potensi pemindaian sistem keamanan digital.</p>",
          "questionText": "Isikan angka yang tepat untuk melengkapi analisis permutasi kata tersebut:",
          "payload": {
            "clozeText": "Jumlah total huruf pada kata KOLABORASI adalah sebanyak (1) [___] huruf. Di antara huruf tersebut, terdapat (2) [___] jenis huruf yang masing-masing berulang sebanyak 2 kali (yaitu huruf O dan A). Total variasi susunan kata (anagram) berbeda yang dapat dibentuk dari seluruh huruf tersebut adalah (3) [___] susunan. Jika susunan kata disyaratkan harus diawali dengan huruf K dan diakhiri dengan huruf I, maka terdapat sebanyak (4) [___] susunan kata berbeda.",
            "blanks": [
              {
                "id": "b1",
                "label": "(1)",
                "placeholder": "jumlah huruf..."
              },
              {
                "id": "b2",
                "label": "(2)",
                "placeholder": "huruf ulang..."
              },
              {
                "id": "b3",
                "label": "(3)",
                "placeholder": "total susunan..."
              },
              {
                "id": "b4",
                "label": "(4)",
                "placeholder": "syarat awal akhir..."
              }
            ]
          }
        },
        {
          "id": 10,
          "num": 10,
          "model": 5,
          "modelName": "Pilihan Ganda Kompleks (Checkbox Multi-Select)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Applying (Penerapan Metrik Ruang)",
          "konteks": "Desain Kontainer & Kemasan Balok",
          "stimulusTitle": "Karakteristik Metrik Ruang Balok ABCD.EFGH",
          "stimulusBadge": "Geometri Balok 12 × 4 × 3 cm",
          "stimulusText": "<p class=\"leading-relaxed\">Sebuah wadah pelindung baterai litium untuk mobil surya dirancang dalam wujud balok presisi $ABCD.EFGH$ dengan spesifikasi dimensi terukur.</p>\n<div class=\"my-3 flex justify-center\">\n    <svg viewBox=\"0 0 300 200\" class=\"w-72 max-w-full h-auto drop-shadow-sm bg-slate-50 border border-slate-200 rounded-xl p-2\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Back edges dashed -->\n      <line x1=\"50\" y1=\"150\" x2=\"120\" y2=\"105\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <line x1=\"120\" y1=\"105\" x2=\"260\" y2=\"105\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <line x1=\"120\" y1=\"105\" x2=\"120\" y2=\"35\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      \n      <!-- Front base and verticals -->\n      <line x1=\"50\" y1=\"150\" x2=\"190\" y2=\"150\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"190\" y1=\"150\" x2=\"260\" y2=\"105\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"50\" y1=\"150\" x2=\"50\" y2=\"80\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"190\" y1=\"150\" x2=\"190\" y2=\"80\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"260\" y1=\"105\" x2=\"260\" y2=\"35\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      \n      <!-- Top face -->\n      <line x1=\"50\" y1=\"80\" x2=\"120\" y2=\"35\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"120\" y1=\"35\" x2=\"260\" y2=\"35\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"260\" y1=\"35\" x2=\"190\" y2=\"80\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"190\" y1=\"80\" x2=\"50\" y2=\"80\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      \n      <!-- Diagonal AG -->\n      <line x1=\"50\" y1=\"150\" x2=\"260\" y2=\"35\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/>\n      <circle cx=\"50\" cy=\"150\" r=\"3.5\" fill=\"#2563eb\"/>\n      <circle cx=\"260\" cy=\"35\" r=\"3.5\" fill=\"#2563eb\"/>\n\n      <!-- Labels -->\n      <text x=\"36\" y=\"162\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\">A</text>\n      <text x=\"196\" y=\"162\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">B</text>\n      <text x=\"268\" y=\"110\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">C</text>\n      <text x=\"108\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#64748b\">D</text>\n      <text x=\"36\" y=\"78\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">E</text>\n      <text x=\"196\" y=\"78\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">F</text>\n      <text x=\"268\" y=\"35\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\">G</text>\n      <text x=\"108\" y=\"32\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#64748b\">H</text>\n      \n      <!-- Dimensions -->\n      <text x=\"120\" y=\"168\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">p = 12 cm</text>\n      <text x=\"235\" y=\"138\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#475569\">l = 4 cm</text>\n      <text x=\"28\" y=\"118\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#475569\">t = 3 cm</text>\n    </svg>\n  </div>\n<div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1\">\n  <p class=\"font-bold text-slate-900\"><i class=\"fa-solid fa-boxes-stacked text-blue-600 mr-1\"></i> Karakteristik Dimensi:</p>\n  <ul class=\"list-disc list-inside space-y-0.5 text-slate-700\">\n    <li>Panjang $p = 12\\text{ cm}$, lebar $l = 4\\text{ cm}$, dan tinggi $t = 3\\text{ cm}$.</li>\n    <li>Luas seluruh permukaan balok $L = 2(pl + pt + lt) = 2(48 + 36 + 12) = 192\\text{ cm}^2$.</li>\n    <li>Volume wadah pelindung $V = p \\times l \\times t = 12 \\times 4 \\times 3 = 144\\text{ cm}^3$.</li>\n  </ul>\n</div>\n<p class=\"leading-relaxed\">Karakteristik geometri ini menentukan disipasi panas dan keamanan sel baterai selama berkendara.</p>",
          "questionText": "Beri tanda centang (✓) pada setiap pernyataan metrik balok berikut yang bernilai BENAR!",
          "payload": {
            "statements": [
              {
                "id": "c1",
                "text": "Panjang diagonal bidang alas AC adalah tepat 4√10 cm."
              },
              {
                "id": "c2",
                "text": "Panjang diagonal ruang balok AG adalah tepat 13 cm."
              },
              {
                "id": "c3",
                "text": "Luas seluruh permukaan bidang balok adalah 192 cm²."
              },
              {
                "id": "c4",
                "text": "Volume kapasitas ruang dalam balok tersebut adalah 288 cm³."
              }
            ]
          }
        },
        {
          "id": 11,
          "num": 11,
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
            ]
          }
        },
        {
          "id": 12,
          "num": 12,
          "model": 5,
          "modelName": "Pilihan Ganda Kompleks (Checkbox Multi-Select)",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Applying (Penerapan Kombinasi)",
          "konteks": "Kantin Sekolah & Menu Nutrisi Sehat",
          "stimulusTitle": "Kombinasi Paket Menu Makan Siang Sehat Siswa",
          "stimulusBadge": "Kombinatorika: Kombinasi Pemilihan Paket",
          "stimulusText": "<p class=\"leading-relaxed\">Kantin sekolah sehat menyediakan 4 pilihan lauk protein dan 3 pilihan jenis sayur berserat tinggi untuk paket makan siang sehat.</p>",
          "questionText": "Beri tanda centang (✓) pada setiap pernyataan kombinasi menu berikut yang bernilai BENAR!",
          "payload": {
            "statements": [
              {
                "id": "c1",
                "text": "Banyaknya pilihan kombinasi paket jika siswa memilih tepat 1 lauk dan 1 sayur adalah 12 variasi paket."
              },
              {
                "id": "c2",
                "text": "Banyaknya cara memilih 2 jenis lauk berbeda dari 4 pilihan yang tersedia adalah 6 cara."
              },
              {
                "id": "c3",
                "text": "Banyaknya pilihan paket jika siswa memilih 2 jenis lauk berbeda dan 1 jenis sayur adalah 18 variasi paket."
              },
              {
                "id": "c4",
                "text": "Total cara memilih 3 jenis makanan bebas dari seluruh 7 pilihan makanan adalah 70 cara."
              }
            ]
          }
        },
        {
          "id": 13,
          "num": 13,
          "model": 4,
          "modelName": "Sebab - Akibat Analitis",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Knowing (Pemahaman Aksioma Peluang)",
          "konteks": "Teori Probabilitas",
          "stimulusTitle": "Prinsip Peluang Kejadian Komplemen",
          "stimulusBadge": "Aksioma Peluang Saling Lepas",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam prakiraan cuaca sains atmosfer, peluang terjadinya hujan lebat esok hari di kawasan perkotaan dimodelkan sebagai kejadian $H$.</p>",
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
            ]
          }
        },
        {
          "id": 14,
          "num": 14,
          "model": 1,
          "modelName": "Pernyataan Benar / Salah (Tabel 4 Baris)",
          "domain": "Aljabar & Kaidah Pencacahan",
          "kognitif": "Knowing (Pemahaman Barisan & Deret)",
          "konteks": "Kewirausahaan Siswa & Produk Kreatif",
          "stimulusTitle": "Pertumbuhan Produksi Kerajinan Bambu Ramah Lingkungan",
          "stimulusBadge": "Pola Bilangan & Deret Aritmetika",
          "stimulusText": "<p class=\"leading-relaxed\">Unit kewirausahaan siswa SMA memproduksi suvenir anyaman bambu ramah lingkungan. Pada bulan pertama diproduksi 100 unit. Karena meningkatnya pesanan, produksi ditambah secara tetap sebanyak 20 unit setiap bulan berikutnya.</p>",
          "questionText": "Tentukan status kebenaran (BENAR atau SALAH) untuk setiap analisis produksi berikut!",
          "payload": {
            "rows": [
              {
                "id": "r1",
                "statement": "Banyaknya anyaman bambu yang diproduksi pada bulan ke-6 adalah tepat 200 unit."
              },
              {
                "id": "r2",
                "statement": "Jumlah total produksi kumulatif selama 6 bulan pertama adalah 900 unit suvenir."
              },
              {
                "id": "r3",
                "statement": "Rata-rata produksi suvenir per bulan selama 6 bulan pertama adalah 150 unit."
              },
              {
                "id": "r4",
                "statement": "Peningkatan produksi pada bulan ke-6 dibandingkan bulan pertama mencapai lebih dari 150%."
              }
            ]
          }
        },
        {
          "id": 15,
          "num": 15,
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
                "placeholder": "m²..."
              },
              {
                "id": "b2",
                "label": "(2)",
                "placeholder": "m³..."
              },
              {
                "id": "b3",
                "label": "(3)",
                "placeholder": "separuh..."
              },
              {
                "id": "b4",
                "label": "(4)",
                "placeholder": "menit..."
              }
            ]
          }
        },
        {
          "id": 16,
          "num": 16,
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
                "text": "Panjang kelas interval (p) dari tabel distribusi frekuensi di atas adalah tepat 10."
              },
              {
                "id": "c2",
                "text": "Kelas interval modus terletak pada rentang nilai 71 – 80 karena memiliki frekuensi tertinggi (f = 15)."
              },
              {
                "id": "c3",
                "text": "Tepi bawah (Tb) dari kelas interval modus adalah 70,5."
              },
              {
                "id": "c4",
                "text": "Banyaknya siswa yang memperoleh nilai di atas 80 adalah sebanyak 25 siswa."
              }
            ]
          }
        },
        {
          "id": 17,
          "num": 17,
          "model": 1,
          "modelName": "Pernyataan Benar / Salah (Tabel 4 Baris)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Applying (Penerapan Peluang Populasi)",
          "konteks": "Ekologi Lingkungan & Konservasi Alam",
          "stimulusTitle": "Estimasi Populasi Ikan Waduk dengan Metode Mark-Recapture",
          "stimulusBadge": "Peluang & Rasio Lincoln-Petersen",
          "stimulusText": "<p class=\"leading-relaxed\">Klub Pecinta Lingkungan SMA memperkirakan populasi ikan nila di danau buatan menggunakan teknik penangkapan kembali bertanda (<em>mark-recapture</em>). Sebanyak $M = 200$ ekor ikan ditangkap pertama kali, ditandai dengan gelang sirip khusus, lalu dilepasliarkan kembali.</p>\n    <p class=\"leading-relaxed\">Seminggu kemudian, ditangkap sampel kedua sebanyak $C = 150$ ekor ikan, dan ditemukan $R = 15$ ekor di antaranya memiliki tanda gelang sirip.</p>",
          "questionText": "Tentukan status kebenaran (BENAR atau SALAH) untuk setiap analisis populasi berikut!",
          "payload": {
            "rows": [
              {
                "id": "r1",
                "statement": "Proporsi ikan bertanda yang tertangkap pada penangkapan kedua adalah tepat 10%."
              },
              {
                "id": "r2",
                "statement": "Estimasi total populasi ikan nila di danau buatan tersebut adalah 2.000 ekor."
              },
              {
                "id": "r3",
                "statement": "Jika pada sampel kedua tertangkap 30 ekor ikan bertanda, estimasi populasi danau menjadi 1.000 ekor."
              },
              {
                "id": "r4",
                "statement": "Peluang seekor ikan yang ditangkap pada sampel kedua memiliki tanda melebihi 25%."
              }
            ]
          }
        },
        {
          "id": 18,
          "num": 18,
          "model": 3,
          "modelName": "Paragraf Rumpang Numerik (4 Bagian Kosong)",
          "domain": "Data & Ketidakpastian",
          "kognitif": "Reasoning (Penalaran Bivariat)",
          "konteks": "Kantin Sehat & Kepuasan Konsumen",
          "stimulusTitle": "Analisis Regresi Variasi Menu Kantin vs Kepuasan Siswa",
          "stimulusBadge": "Statistika Bivariat: Garis Regresi Linier",
          "stimulusText": "<p class=\"leading-relaxed\">Pengelola kantin sekolah meneliti korelasi antara banyaknya variasi paket makanan sehat ($x$ menu) terhadap estimasi skor indeks kepuasan siswa ($y$).</p>\n<div class=\"my-3 flex justify-center\">\n    <svg viewBox=\"0 0 280 180\" class=\"w-64 max-w-full h-auto drop-shadow-sm bg-slate-50 border border-slate-200 rounded-xl p-2\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Axes -->\n      <line x1=\"45\" y1=\"145\" x2=\"260\" y2=\"145\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <line x1=\"45\" y1=\"145\" x2=\"45\" y2=\"25\" stroke=\"#334155\" stroke-width=\"2\"/>\n      \n      <text x=\"250\" y=\"160\" font-size=\"9\" font-family=\"sans-serif\" fill=\"#64748b\" font-weight=\"bold\">Variasi Menu (x)</text>\n      <text x=\"10\" y=\"22\" font-size=\"9\" font-family=\"sans-serif\" fill=\"#64748b\" font-weight=\"bold\">Kepuasan (y)</text>\n      \n      <!-- Grid -->\n      <line x1=\"45\" y1=\"105\" x2=\"255\" y2=\"105\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n      <line x1=\"45\" y1=\"65\" x2=\"255\" y2=\"65\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n      <line x1=\"115\" y1=\"145\" x2=\"115\" y2=\"35\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n      <line x1=\"185\" y1=\"145\" x2=\"185\" y2=\"35\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n      \n      <!-- Regression Line -->\n      <line x1=\"50\" y1=\"130\" x2=\"245\" y2=\"45\" stroke=\"#2563eb\" stroke-width=\"2.5\"/>\n      \n      <!-- Scatter Points -->\n      <circle cx=\"65\" cy=\"122\" r=\"3.5\" fill=\"#059669\"/>\n      <circle cx=\"95\" cy=\"110\" r=\"3.5\" fill=\"#059669\"/>\n      <circle cx=\"120\" cy=\"100\" r=\"3.5\" fill=\"#059669\"/>\n      <circle cx=\"150\" cy=\"85\" r=\"3.5\" fill=\"#059669\"/>\n      <!-- Centroid point (x_bar=4, y_bar=16) -->\n      <circle cx=\"150\" cy=\"85\" r=\"5.5\" fill=\"#dc2626\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n      <text x=\"165\" y=\"82\" font-family=\"sans-serif\" font-size=\"8.5\" font-weight=\"bold\" fill=\"#dc2626\">(x̄=4, ȳ=16)</text>\n      <circle cx=\"180\" cy=\"72\" r=\"3.5\" fill=\"#059669\"/>\n      <circle cx=\"210\" cy=\"60\" r=\"3.5\" fill=\"#059669\"/>\n      <circle cx=\"235\" cy=\"48\" r=\"3.5\" fill=\"#059669\"/>\n      \n      <!-- Formula badge -->\n      <rect x=\"75\" y=\"28\" width=\"130\" height=\"22\" rx=\"5\" fill=\"#eff6ff\" stroke=\"#bfdbfe\" stroke-width=\"1\"/>\n      <text x=\"140\" y=\"43\" font-family=\"monospace\" font-size=\"10\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">ŷ = 6 + 2.5x</text>\n    </svg>\n  </div>\n<div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1\">\n  <p class=\"font-bold text-slate-900\"><i class=\"fa-solid fa-chart-line text-blue-600 mr-1\"></i> Data Statistik Regresi Sampel:</p>\n  <ul class=\"list-disc list-inside space-y-0.5 text-slate-700\">\n    <li>Rata-rata skor variasi menu kantin yang disurvei: $\\bar{x} = 4$.</li>\n    <li>Rata-rata skor indeks kepuasan siswa yang tercatat: $\\bar{y} = 16$.</li>\n    <li>Kemiringan (gradien) garis regresi sampel: $b = 2.5$.</li>\n    <li>Rumus intersep: $a = \\bar{y} - b\\bar{x}$. Persamaan garis regresi: $\\hat{y} = a + bx$.</li>\n  </ul>\n</div>\n<p class=\"leading-relaxed\">Model regresi linier ini dimanfaatkan manajemen kantin untuk mengestimasi peningkatan kepuasan konsumen terhadap ekspansi menu sehat.</p>",
          "questionText": "Lengkapilah analisis persamaan model regresi linier berikut dengan angka yang tepat:",
          "payload": {
            "clozeText": "Rata-rata skor variasi menu kantin adalah (1) [___]. Nilai rata-rata kepuasan siswa bernilai (2) [___]. Nilai konstanta intersep regresi a yang dihitung dari rumus a = ȳ - bx̄ adalah (3) [___]. Jika sebuah gerai memperkaya variasi menu hingga mencapai skor x = 6, maka prediksi skor indeks kepuasan siswa ŷ adalah sebesar (4) [___].",
            "blanks": [
              {
                "id": "b1",
                "label": "(1)",
                "placeholder": "rataan x..."
              },
              {
                "id": "b2",
                "label": "(2)",
                "placeholder": "rataan y..."
              },
              {
                "id": "b3",
                "label": "(3)",
                "placeholder": "nilai a..."
              },
              {
                "id": "b4",
                "label": "(4)",
                "placeholder": "prediksi..."
              }
            ]
          }
        },
        {
          "id": 19,
          "num": 19,
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
            ]
          }
        },
        {
          "id": 20,
          "num": 20,
          "model": 4,
          "modelName": "Sebab - Akibat Analitis",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Reasoning (Penalaran Simetri Ruang)",
          "konteks": "Geometri Limas Beraturan",
          "stimulusTitle": "Proyeksi Titik Puncak Limas Beraturan ke Bidang Alas",
          "stimulusBadge": "Geometri Ruang: Proyeksi Ortogonal",
          "stimulusText": "<p class=\"leading-relaxed\">Miniatur tugu prestasi sekolah dirancang menyerupai limas beraturan $T.ABCD$ dengan alas bujur sangkar berukuran rusuk alas $8\\text{ cm}$ dan tinggi puncak $12\\text{ cm}$.</p>\n<div class=\"my-3 flex justify-center\">\n    <svg viewBox=\"0 0 280 210\" class=\"w-64 max-w-full h-auto drop-shadow-sm bg-slate-50 border border-slate-200 rounded-xl p-2\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Base edges -->\n      <line x1=\"45\" y1=\"160\" x2=\"175\" y2=\"160\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"175\" y1=\"160\" x2=\"235\" y2=\"115\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"45\" y1=\"160\" x2=\"105\" y2=\"115\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <line x1=\"105\" y1=\"115\" x2=\"235\" y2=\"115\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      \n      <!-- Center O and height TO -->\n      <line x1=\"140\" y1=\"137.5\" x2=\"140\" y2=\"30\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n      <circle cx=\"140\" cy=\"137.5\" r=\"3\" fill=\"#2563eb\"/>\n      <circle cx=\"140\" cy=\"30\" r=\"4\" fill=\"#dc2626\"/>\n      <text x=\"148\" y=\"85\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563eb\">t = 12 cm</text>\n      <text x=\"145\" y=\"148\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563eb\">O</text>\n\n      <!-- Slanted edges -->\n      <line x1=\"140\" y1=\"30\" x2=\"45\" y2=\"160\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"140\" y1=\"30\" x2=\"175\" y2=\"160\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"140\" y1=\"30\" x2=\"235\" y2=\"115\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"140\" y1=\"30\" x2=\"105\" y2=\"115\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n\n      <!-- Labels -->\n      <text x=\"135\" y=\"22\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\">T</text>\n      <text x=\"32\" y=\"170\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">A</text>\n      <text x=\"182\" y=\"170\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">B</text>\n      <text x=\"242\" y=\"120\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">C</text>\n      <text x=\"92\" y=\"112\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#64748b\">D</text>\n      \n      <!-- Base dimension -->\n      <text x=\"110\" y=\"178\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">AB = 8 cm</text>\n    </svg>\n  </div>\n<div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1\">\n  <p class=\"font-bold text-slate-900\"><i class=\"fa-solid fa-monument text-blue-600 mr-1\"></i> Data Metrik Tugu:</p>\n  <ul class=\"list-disc list-inside space-y-0.5 text-slate-700\">\n    <li>Panjang rusuk alas $s = 8\\text{ cm}$, tinggi limas $TO = 12\\text{ cm}$.</li>\n    <li>Diagonal alas $AC = s\\sqrt{2} = 8\\sqrt{2}\\text{ cm}$, sehingga $AO = 4\\sqrt{2}\\text{ cm}$.</li>\n    <li>Panjang rusuk tegak penyangga $TA = \\sqrt{TO^2 + AO^2} = \\sqrt{144 + 32} = \\sqrt{176} = 4\\sqrt{11}\\text{ cm}$.</li>\n  </ul>\n</div>\n<p class=\"leading-relaxed\">Perhitungan ini digunakan untuk memotong lempengan akrilik plakat penghargaan secara presisi CNC.</p>",
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
            ]
          }
        },
        {
          "id": 21,
          "num": 21,
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
                "placeholder": "ruang sampel..."
              },
              {
                "id": "b2",
                "label": "(2)",
                "placeholder": "keduanya biru..."
              },
              {
                "id": "b3",
                "label": "(3)",
                "placeholder": "peluang biru..."
              },
              {
                "id": "b4",
                "label": "(4)",
                "placeholder": "peluang beda..."
              }
            ]
          }
        },
        {
          "id": 22,
          "num": 22,
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
                "statement": "Luas lantai dasar prisma berbentuk segienam beraturan adalah tepat 24√3 meter persegi."
              },
              {
                "id": "r2",
                "statement": "Luas seluruh bidang dinding tegak pembatas menara adalah 144 meter persegi."
              },
              {
                "id": "r3",
                "statement": "Volume kapasitas ruang dalam menara gazebo tersebut adalah 144√3 meter kubik."
              },
              {
                "id": "r4",
                "statement": "Jarak bentang terjauh antara dua titik sudut pada lantai dasar segienam adalah 4 meter."
              }
            ]
          }
        },
        {
          "id": 23,
          "num": 23,
          "model": 5,
          "modelName": "Pilihan Ganda Kompleks (Checkbox Multi-Select)",
          "domain": "Geometri Ruang & Pengukuran",
          "kognitif": "Reasoning (Penalaran Sudut Garis-Bidang)",
          "konteks": "Geometri Dimensi Tiga Kubus",
          "stimulusTitle": "Sudut Antara Garis dan Bidang pada Kubus ABCD.EFGH",
          "stimulusBadge": "Trigonometri Ruang 3 Dimensi",
          "stimulusText": "<p class=\"leading-relaxed\">Dalam modul praktikum geometri ruang analitis tiga dimensi, guru memodelkan kubus $ABCD.EFGH$ dengan rusuk $8\\text{ cm}$ untuk menyelidiki sudut antara garis diagonal ruang dan bidang alas.</p>\n<div class=\"my-3 flex justify-center\">\n    <svg viewBox=\"0 0 280 200\" class=\"w-64 max-w-full h-auto drop-shadow-sm bg-slate-50 border border-slate-200 rounded-xl p-2\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Back edges -->\n      <line x1=\"50\" y1=\"140\" x2=\"110\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <line x1=\"110\" y1=\"100\" x2=\"230\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <line x1=\"110\" y1=\"100\" x2=\"110\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      \n      <!-- Front base and verticals -->\n      <line x1=\"50\" y1=\"140\" x2=\"170\" y2=\"140\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"170\" y1=\"140\" x2=\"230\" y2=\"100\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"50\" y1=\"140\" x2=\"50\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"230\" y1=\"100\" x2=\"230\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      \n      <!-- Top face -->\n      <line x1=\"50\" y1=\"70\" x2=\"110\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"110\" y1=\"30\" x2=\"230\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"230\" y1=\"30\" x2=\"170\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <line x1=\"170\" y1=\"70\" x2=\"50\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      \n      <!-- Diagonal line EC (Ruang) and AC (Alas) -->\n      <line x1=\"50\" y1=\"70\" x2=\"230\" y2=\"100\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"5,3\"/>\n      <line x1=\"50\" y1=\"140\" x2=\"230\" y2=\"100\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n      \n      <!-- Labels -->\n      <text x=\"36\" y=\"152\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">A</text>\n      <text x=\"178\" y=\"152\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">B</text>\n      <text x=\"238\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\">C</text>\n      <text x=\"96\" y=\"102\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#64748b\">D</text>\n      <text x=\"36\" y=\"70\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">E</text>\n      <text x=\"178\" y=\"68\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">F</text>\n      <text x=\"238\" y=\"30\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">G</text>\n      <text x=\"96\" y=\"28\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#64748b\">H</text>\n\n      <text x=\"100\" y=\"158\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"middle\">s = 8 cm</text>\n    </svg>\n  </div>\n<div class=\"my-3 p-3 rounded-xl border bg-slate-50 border-slate-200 text-xs text-slate-800 space-y-1\">\n  <p class=\"font-bold text-slate-900\"><i class=\"fa-solid fa-compass-drafting text-blue-600 mr-1\"></i> Analisis Sudut Garis-Bidang:</p>\n  <ul class=\"list-disc list-inside space-y-0.5 text-slate-700\">\n    <li>Proyeksi ortogonal diagonal ruang $EC$ ke bidang alas $ABCD$ adalah diagonal sisi $AC$.</li>\n    <li>Sudut antara garis $EC$ dan bidang alas $ABCD$ adalah sudut $\\angle ECA$.</li>\n    <li>Pada segitiga siku-siku $EAC$ di $A$: $\\tan(\\angle ECA) = \\frac{EA}{AC} = \\frac{s}{s\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{1}{2}\\sqrt{2}$.</li>\n  </ul>\n</div>\n<p class=\"leading-relaxed\">Konsep proyeksi sudut ini esensial untuk memahami kemiringan instalasi atap panel surya gedung sekolah.</p>",
          "questionText": "Beri tanda centang (✓) pada setiap pernyataan geometri sudut berikut yang bernilai BENAR!",
          "payload": {
            "statements": [
              {
                "id": "c1",
                "text": "Tangen sudut antara diagonal ruang AG dan bidang alas ABCD bernilai 1/√2 = √2/2."
              },
              {
                "id": "c2",
                "text": "Besar sudut antara garis diagonal bidang AF dan bidang lantai ABCD adalah tepat 45°."
              },
              {
                "id": "c3",
                "text": "Garis rusuk tegak AE membentuk sudut 90° (tegak lurus) terhadap bidang lantai ABCD."
              },
              {
                "id": "c4",
                "text": "Besar sudut perpotongan antara dua diagonal ruang AG dan BH adalah tepat 90°."
              }
            ]
          }
        },
        {
          "id": 24,
          "num": 24,
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
            ]
          }
        },
        {
          "id": 25,
          "num": 25,
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
            ]
          }
        }
      ]
    }
  ]
};
