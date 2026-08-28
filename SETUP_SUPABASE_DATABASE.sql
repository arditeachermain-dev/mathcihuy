-- ===========================================================================
-- SKRIP SETUP DATABASE SUPABASE PORTAL MATEMATIKA MATHCIHUY
-- Sekolah: SMA Global Islamic School 2 Serpong (Kelas XII TP 2026/2027)
-- ===========================================================================

-- 1. BUAT TABEL SISWA
CREATE TABLE IF NOT EXISTS siswa (
    nis VARCHAR(20) PRIMARY KEY,
    nama VARCHAR(150) NOT NULL,
    kelas VARCHAR(10) NOT NULL,
    access_level VARCHAR(20) DEFAULT 'full',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. BUAT TABEL NILAI CBT (REKAPITULASI HASIL)
CREATE TABLE IF NOT EXISTS nilai_cbt (
    id BIGSERIAL PRIMARY KEY,
    nis VARCHAR(20) REFERENCES siswa(nis) ON DELETE CASCADE,
    nama VARCHAR(150),
    kelas VARCHAR(10),
    mapel VARCHAR(30) NOT NULL,
    kode_pertemuan VARCHAR(20) NOT NULL,
    skor INT NOT NULL DEFAULT 0,
    jumlah_soal INT NOT NULL DEFAULT 10,
    jumlah_benar INT NOT NULL DEFAULT 0,
    jumlah_salah INT NOT NULL DEFAULT 0,
    durasi_detik INT NOT NULL DEFAULT 0,
    status_kktp VARCHAR(20) GENERATED ALWAYS AS (
        CASE WHEN skor >= 75 THEN 'TUNTAS KKTP' ELSE 'REMEDIAL' END
    ) STORED,
    waktu_submit TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unik_nilai_cbt UNIQUE (nis, mapel, kode_pertemuan)
);

-- 3. BUAT TABEL REAL-TIME AUTO-SYNC JAWABAN PER BUTIR SOAL
CREATE TABLE IF NOT EXISTS cbt_live_answers (
    id BIGSERIAL PRIMARY KEY,
    nis VARCHAR(20) REFERENCES siswa(nis) ON DELETE CASCADE,
    mapel VARCHAR(30) NOT NULL,
    kode_pertemuan VARCHAR(20) NOT NULL,
    q_idx INT NOT NULL,
    chosen VARCHAR(50),
    is_right BOOLEAN,
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unik_jawaban_soal UNIQUE (nis, mapel, kode_pertemuan, q_idx)
);

-- 4. AKTIFKAN ROW LEVEL SECURITY & POLICY AKSES
ALTER TABLE siswa ENABLE ROW LEVEL SECURITY;
ALTER TABLE nilai_cbt ENABLE ROW LEVEL SECURITY;
ALTER TABLE cbt_live_answers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Akses Publik Siswa" ON siswa;
DROP POLICY IF EXISTS "Akses Publik Nilai" ON nilai_cbt;
DROP POLICY IF EXISTS "Akses Publik Live Answers" ON cbt_live_answers;

CREATE POLICY "Akses Publik Siswa" ON siswa FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Akses Publik Nilai" ON nilai_cbt FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Akses Publik Live Answers" ON cbt_live_answers FOR ALL USING (true) WITH CHECK (true);

-- 5. MASUKKAN 100 DATA SISWA RESMI KELAS XII (12 F.1 s.d 12 F.4)
INSERT INTO siswa (nis, nama, kelas, access_level) VALUES
('24400004', 'Aisyah Rachma Ufaira', 'XII F1', 'wajib_only'),
('24400005', 'Al Atha Uqail Ahmad Yudanto', 'XII F1', 'wajib_only'),
('24400006', 'Alifatis Muhammad Khalid', 'XII F1', 'wajib_only'),
('24400007', 'Alifia Nur Arfa Dinata', 'XII F1', 'wajib_only'),
('24400008', 'Alika Ayu Namira', 'XII F1', 'wajib_only'),
('24400010', 'Almira Latifah Alma Suryana', 'XII F1', 'wajib_only'),
('24400012', 'Aqeela Khumaira Hardian', 'XII F1', 'wajib_only'),
('24400019', 'Athalariq Akbar Mukti', 'XII F1', 'wajib_only'),
('24400024', 'Bilqis Zhafif Khumaira', 'XII F1', 'wajib_only'),
('24400028', 'Danish Attaya Akbar', 'XII F1', 'wajib_only'),
('24400031', 'Fazila Kayla Shiva', 'XII F1', 'wajib_only'),
('24400037', 'Hamzah Athaullah Sathi', 'XII F1', 'wajib_only'),
('24400044', 'Kaori Yobi Kalevi', 'XII F1', 'wajib_only'),
('24400046', 'Keisha Maritza Ahmad', 'XII F1', 'wajib_only'),
('24400047', 'Khayra Putri Ariny', 'XII F1', 'wajib_only'),
('24400052', 'Maheswari Kirana Paramitha Riyadh', 'XII F1', 'wajib_only'),
('24400058', 'Muhammad Fachrizky Athaya', 'XII F1', 'wajib_only'),
('24400065', 'Nala Ardika Naraditya Althaf', 'XII F1', 'wajib_only'),
('24400075', 'Nesya Linetta Sarostha', 'XII F1', 'wajib_only'),
('24400076', 'Nur Hanifah Qiani', 'XII F1', 'wajib_only'),
('24400078', 'Prinsa Amikal Suria', 'XII F1', 'wajib_only'),
('24400081', 'Rakei Friandary', 'XII F1', 'wajib_only'),
('24400088', 'Rhania Syifa Evliya', 'XII F1', 'wajib_only'),
('24400091', 'Satoru Kenzie', 'XII F1', 'wajib_only'),
('24400097', 'Yusfa Nova Almira', 'XII F1', 'wajib_only'),
('24400003', 'Ahmad Dzaka Fithraya Rasalhague', 'XII F2', 'wajib_only'),
('24400009', 'Alliyah Noor', 'XII F2', 'wajib_only'),
('24400011', 'Anezka Kendra Cielika', 'XII F2', 'wajib_only'),
('24400013', 'Arfa Adiwinata Setyadi', 'XII F2', 'wajib_only'),
('24400014', 'Arizty Al Ghayda Mahardhika', 'XII F2', 'wajib_only'),
('24400015', 'Arjuna Satrio Lanang', 'XII F2', 'wajib_only'),
('24400029', 'Emir Kaysan Askar', 'XII F2', 'wajib_only'),
('25400101', 'Galuh Chandra Kirana', 'XII F2', 'wajib_only'),
('24400035', 'Ghazi Saverio Wangkoro', 'XII F2', 'wajib_only'),
('24400040', 'Hilgan Rabbani Kusnadi', 'XII F2', 'wajib_only'),
('24400045', 'Kayla Asyifa Jasmine', 'XII F2', 'wajib_only'),
('24400048', 'Kiminurintani Ghimaz Pratiwi', 'XII F2', 'wajib_only'),
('24400057', 'Muhammad Bintang Satria', 'XII F2', 'wajib_only'),
('24400061', 'Muhammad Hanif Hafuza Martono', 'XII F2', 'wajib_only'),
('24400064', 'Nadifa Misyka Alfarisi', 'XII F2', 'wajib_only'),
('24400068', 'Nasya Bintang Atifa', 'XII F2', 'wajib_only'),
('24400069', 'Nasya Shifra Edgina', 'XII F2', 'wajib_only'),
('24400073', 'Nayla Rasya', 'XII F2', 'wajib_only'),
('24400077', 'Oryza Sativa', 'XII F2', 'wajib_only'),
('24400087', 'Revayya Almira Radhiza', 'XII F2', 'wajib_only'),
('24400090', 'Sashikianna Putri Sugiharjo', 'XII F2', 'wajib_only'),
('24400092', 'Sausan Audrey Lathifah', 'XII F2', 'wajib_only'),
('24400095', 'Tzeirasuva Mustika Ananta Ralliargya', 'XII F2', 'wajib_only'),
('24400096', 'Vania Azzara', 'XII F2', 'wajib_only'),
('24400098', 'Zahra Kaila Putri', 'XII F2', 'wajib_only'),
('24400001', 'Abdurrahman Athar', 'XII F3', 'full'),
('24400016', 'Asha Maulida Nasuha', 'XII F3', 'full'),
('24400017', 'Assyifa Q Aina', 'XII F3', 'full'),
('24400018', 'Atha Maiva Dialfi', 'XII F3', 'full'),
('24400021', 'Auriel Latisha Rustiadi', 'XII F3', 'full'),
('24400026', 'Chalisa Nasha Janitra', 'XII F3', 'full'),
('24400027', 'Cyrilla Qanita Salsabila', 'XII F3', 'full'),
('24400032', 'Fazli Fayyaz Bibra', 'XII F3', 'full'),
('24400033', 'Gavin Ananta Mudiartono', 'XII F3', 'full'),
('24400034', 'Gede Radheya Javaskalki Nararya', 'XII F3', 'full'),
('24400043', 'Jae Hwa Evelyn Az Zahra', 'XII F3', 'full'),
('24400049', 'Kinanthi Sekarlangit', 'XII F3', 'full'),
('24400050', 'Kyara Najla Putri', 'XII F3', 'full'),
('24400053', 'Miftahul Rizqi Rabani', 'XII F3', 'full'),
('24400054', 'Milan Adyaraka Sudiro', 'XII F3', 'full'),
('24400055', 'Mohammed Febro Arkenzie', 'XII F3', 'full'),
('24400056', 'Muhammad Arkan Wicaksena', 'XII F3', 'full'),
('24400062', 'Muhammad Mufid Zhafran', 'XII F3', 'full'),
('24400066', 'Nararya Fatih Mainza', 'XII F3', 'full'),
('24400070', 'Naufal Indriatno', 'XII F3', 'full'),
('24400071', 'Navira Qisya Camilla', 'XII F3', 'full'),
('24400072', 'Nayla Adriani Noormandiri', 'XII F3', 'full'),
('24400074', 'Nazwa Avrilia Putri Abzis', 'XII F3', 'full'),
('24400085', 'Raydhan Jiffar Seniawanputra', 'XII F3', 'full'),
('24400094', 'Syahra Lenira Rangkuti', 'XII F3', 'full'),
('24400002', 'Ahmad Bayanaka Rajab', 'XII F4', 'full'),
('24400020', 'Atsyla Athano Biandra', 'XII F4', 'full'),
('24400022', 'Azzadin Al Azzam', 'XII F4', 'full'),
('24400023', 'Bianda Alana Bilham', 'XII F4', 'full'),
('24400025', 'Bima Fattah Ghaisan', 'XII F4', 'full'),
('24400030', 'Fabian Putra Anzil Firdaus', 'XII F4', 'full'),
('24400036', 'Gwen Rasendriya Doanda', 'XII F4', 'full'),
('24400038', 'Hanako Marihot Kiarra Tampubolon', 'XII F4', 'full'),
('24400039', 'Hazika Hanin Aqilani', 'XII F4', 'full'),
('24400041', 'Ikram Apriliano Putra Keisa', 'XII F4', 'full'),
('24400042', 'Izzan Maulana', 'XII F4', 'full'),
('24400059', 'Muhammad Farras Afif', 'XII F4', 'full'),
('24400060', 'Muhammad Firman Thaheer', 'XII F4', 'full'),
('24400063', 'Muhammad Regan Arrizki', 'XII F4', 'full'),
('24400067', 'Naryama Damai Abyasa', 'XII F4', 'full'),
('24400079', 'Raden Zaviero Marcega', 'XII F4', 'full'),
('24400080', 'Raditya Kara Nararya', 'XII F4', 'full'),
('24400082', 'Rakha Sanjaya', 'XII F4', 'full'),
('24400083', 'Rania Zivanka Kurniawan', 'XII F4', 'full'),
('24400084', 'Raushan Garlen Disiyona', 'XII F4', 'full'),
('24400086', 'Reyhan Putra Sahlan', 'XII F4', 'full'),
('24400089', 'Safa Klarisza Praja Darma', 'XII F4', 'full'),
('24400093', 'Setia Muhammad Abrar', 'XII F4', 'full'),
('24400099', 'Zerlinda Arissa Hudoyo', 'XII F4', 'full'),
('24400100', 'Zharfa Qisthina Alifah', 'XII F4', 'full')
ON CONFLICT (nis) DO UPDATE SET nama = EXCLUDED.nama, kelas = EXCLUDED.kelas, access_level = EXCLUDED.access_level;

-- SELESAI! Database Supabase mathcihuy telah siap 100%.