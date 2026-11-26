---
name: raidboss
description: >-
  Standard operational skill for the Weekly Raid Boss (Titan Statigo) event in Math Cihuy.
  Integrates GIS Teacher IT Professional Standards, TKA & UTBK psychometrics,
  Class XII Mathematics curriculum (Wajib P15/P16 & Minat P17), professional game development
  combat systems (per-question attack, real-time combo streaks, combat juice, pause/resume anytime),
  and anti-cheat IT security with 15-minute bot lockout penalties.
---

# SKILL: RAID BOSS (TITAN STATIGO WEEKLY CAMPAIGN)
**Guru Pengampu:** Mr. Ardi (Muhammad Ardiansyah, S.Pd.Gr.)  
**Satuan Pendidikan:** SMA Global Islamic School 2 Serpong  
**Target:** Kelas XII (Fase F) • Skuad F1–F2 & Skuad F3–F4  
**Domain:** Gamifikasi Edukasi, Asesmen TKA/UTBK, Anti-Cheat IT Security, & Game Engineering

---

## 1. PERSONA & CORE PHILOSOPHY
1. **Inspirational Teacher & Senior IT Supervisor:**
   - Menyapa siswa dengan sebutan **Mr. Ardi** / **Mr** (DILARANG menggunakan sapaan "Bapak").
   - Bersih dari penyebutan nama sekolah ("GIS 2" / "Global Islamic School 2") pada UI siswa demi menjaga estetika netral portal.
   - Mengusung tema visual **Notion Warm Paper**: latar lembut (`#F7F6F3`), kontainer putih bersih (`#FFFFFF`), border halus (`#E8E6DF`), dan teks charcoal kontras tinggi (`#2F3437`). Hindari neon gelap yang menyilaukan mata.
2. **Professional Game Developer & Gamer:**
   - Memperlakukan latihan soal bukan sebagai beban tugas yang membosankan (*drill fatigue*), melainkan sebagai **Raid Boss Battle Mingguan** yang adiktif, memuaskan (*satisfying game feel*), dan menumbuhkan *flow state*.
   - Mengimplementasikan *combat feedback loop*: damage popups, combo hit counters, micro-screen shake saat critical, dan debriefing pertarungan dengan worked examples KaTeX langkah demi langkah.

---

## 2. ARSITEKTUR KAMPANYE MINGGUAN: 50 SOAL TKA
Event Raid Boss Titan Statigo berlangsung dalam siklus mingguan (reset setiap Minggu 23:59 WIB) dengan struktur **50 Butir Soal per Siswa**:

### A. Pembagian Skuad & Kurikulum Aktif
- **🛡️ Skuad F1 – F2 (12 F.1 & 12 F.2 • Wajib Only):**
  - Beban: Tepat **50 Soal Matematika Wajib**.
  - Materi: **P15** (Distribusi Frekuensi, Tepi Kelas, Histogram, Ogive Positif & Negatif) dan **P16** (Rata-rata Hitung Data Berkelompok via Titik Tengah, Rataan Sementara, & Coding).
- **⚔️ Skuad F3 – F4 (12 F.3 & 12 F.4 • Terpadu):**
  - Beban: Tepat **50 Soal Campuran (25 Wajib P15/P16 + 25 Minat P17)**.
  - Materi Wajib (25 Soal): P15 & P16 Statistika Data Berkelompok.
  - Materi Peminatan (25 Soal): **P17 Turunan Fungsi Trigonometri Dasar** (Definisi limit turunan, derivatif dasar $\sin x$, $\cos x$, $\tan x$, kombinasi linier, gradien garis singgung, dan laju perubahan).

### B. Kalibrasi Psikometri Standar TKA (Asesmen Nasional Pusmendik)
Setiap paket 50 butir wajib memenuhi sebaran tingkat kesukaran dan 5 model baku:
1. **25% Level 1 (Mudah):** Fondasi konseptual, pembacaan grafik/tabel langsung, dan substitusi rumus dasar.
2. **50% Level 2 (Sedang):** Penerapan model matematika 2 langkah, penentuan kelas interpolasi, dan turunan berantai dasar.
3. **25% Level 3 (HOTS / Sulit):** Analisis bivariat kontekstual Indonesia (IKN, logistik maritim, energi hijau), pembuktian sifat, dan evaluasi argumen matematis.
4. **5 Model Baku:** Single MC, Pilihan Ganda Kompleks (True/False Table), Menjodohkan, Paragraf Rumpang, dan Kausatif Sebab-Akibat.

---

## 3. MEKANIK COMBAT & GAME ENGINEERING (PER-SOAL ATTACK)
1. **Submit Attack Tiap Soal (Instant Feedback):**
   - Siswa tidak perlu menunggu 50 soal selesai untuk menyerang. Siswa dapat menekan tombol **"⚔️ Hantam Titan"** pada setiap butir soal yang sedang dibuka.
   - Begitu tombol ditekan:
     - **BENAR:** Menghasilkan damage instan ke Titan Statigo, menaikkan meteran Combo, menampilkan animasi damage popup, mengubah bubble menjadi hijau (*Hit*), dan membuka pembahasan KaTeX. Soal dikunci untuk mencegah farming.
     - **SALAH:** Combo terputus (*Combo Break*), 0 damage, bubble berubah menjadi merah (*Miss*), dan membuka pembahasan KaTeX empatik agar siswa langsung belajar dari kekeliruannya.
2. **Real-time Combo Multiplier:**
   - $\text{Combo } 1\times - 4\times$: Multiplier $1{,}0\times$ (100 DMG per soal).
   - $\text{Combo } 5\times - 9\times$: Multiplier $1{,}2\times$ (120 DMG per soal).
   - $\text{Combo } 10\times - 19\times$: Multiplier $1{,}5\times$ (150 DMG per soal).
   - $\text{Combo } 20\times+$: Multiplier $2{,}0\times$ (200 DMG per soal — *TITAN BLAZE MODE*).
3. **Bisa Ditunda & Dilanjutkan Kapan Saja (Pause & Resume):**
   - Siswa dapat mengerjakan 5 soal hari ini, menekan **"💾 Simpan & Tunda"**, lalu melanjutkannya besok.
   - Seluruh riwayat jawaban, perolehan damage, status bubble, dan combo tersimpan aman di `localStorage` dan tersinkronisasi ke server.

---

## 4. SISTEM KEAMANAN IT: ANTI-CHEAT & 15-MINUTE BOT LOCKOUT
Untuk menjaga integritas dan keadilan kompetisi antarsains kelas XII, diterapkan protokol pendeteksian otomatis berstandar IT profesional:

1. **Prinsip Dasar: Cognitive Fluency Bukanlah Bot (Zero False-Positive Policy):**
   - **Kecepatan Analisis Manusia yang Tajam adalah Keunggulan Kognitif:** Siswa cerdas atau guru yang menguasai konsep dapat melakukan *mental math* dan mengenali pola soal hitungan dalam hitungan detik (misalnya langsung mengenali tepi bawah $Tb = 59{,}5$ atau titik puncak limit). **DILARANG KERAS** menggunakan heuristik durasi/waktu pengerjaan (misal $< 3$ detik atau $< 3$ menit) sebagai indikator bot!
   - **Deteksi Murni Skrip Teknis & Automasi Mesin (Script-Only Detection):**
     - **Synthetic Event Injection:** Penyerangan dieksekusi tanpa event interaksi nyata (`!event` atau `event.isTrusted === false`), yang menandakan manipulasi via konsol developer atau skrip inject `.click()`.
     - **Headless Browser & WebDriver Automation:** Terdeteksinya runtime otomasi browser mesin (`window.navigator.webdriver === true`, Puppeteer, Playwright, Selenium, Nightmare, PhantomJS).
     - **Console Injection Tamper:** Pemanggilan fungsi serangan langsung dari konsol global tanpa interaksi tombol UI yang sah.

2. **Penalti Pembekuan 15 Menit (Lockout Penalty) & Self-Healing:**
   - Jika automasi skrip teknis terverifikasi:
     - Sistem menampilkan modal peringatan darurat:
       `⚠️ SISTEM INTEGRITAS & ANTI-CHEAT AKTIF: Proteksi Skrip & Automasi Terdeteksi`
     - Akses penyerangan Raid Boss Titan Statigo **DIBEKUKAN SELAMA TEPAT 15 MENIT** (900 detik).
     - Timestamp kedaluwarsa dicatat di `localStorage` (`raid_bot_penalty_${nis}`) beserta log alasan teknis (`raid_bot_penalty_reason_${nis}`).
     - Tampilkan hitung mundur real-time (`15:00` $\to$ `00:00`). Selama timer aktif, tombol serang dinonaktifkan sepenuhnya.
   - **Mekanisme Self-Healing:**
     - Sistem secara otomatis membersihkan (*sweep & delete*) penalti lama yang disebabkan oleh false-positive heuristik durasi/kecepatan lama pada saat inisialisasi aplikasi, sehingga pengguna yang terkena false positive sebelumnya langsung pulih seketika tanpa harus menunggu 15 menit.
   - **Pengecualian Rate-Limit Backend (`/api/nilai`):**
     - Pengiriman per-soal dari event Raid Boss diberikan flag eksplisit (`is_sync: true`, `source: 'raid'`) sehingga tidak terkena cooldown 30 detik antar-paket ujian CBT standar.

---

## 5. STANDARD DEPLOYMENT & VERIFIKASI ZERO-BUG
1. **Deterministik PRNG:** Gunakan fungsi `Mulberry32` dengan seed `${nis}_${weekId}_${squad}` untuk mengacak 50 soal secara konsisten per siswa.
2. **Pre-Deployment Checklist:**
   - Uji sintaks JavaScript: `node -c <file.js>`.
   - Pastikan rumus KaTeX tidak memiliki kurung kurawal rusak.
   - Verifikasi responsive layout di desktop (1280x800) dan mobile (390x844).
   - Selalu bump version query string script (`?v=...`) pada `index.html`.
