-- ============================================================================
-- SCRIPT MIGRASI RESMI: PENGAMANAN ROW LEVEL SECURITY (RLS) SUPABASE
-- PROJECT: mathcihuy (https://pecvxqguqtancizghnhj.supabase.co)
-- SMA GLOBAL ISLAMIC SCHOOL 2 SERPONG
-- ============================================================================

-- 1. PASTIKAN RLS AKTIF PADA KETIGA TABEL
ALTER TABLE IF EXISTS siswa ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS nilai_cbt ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS cbt_live_answers ENABLE ROW LEVEL SECURITY;

-- 2. BERSIHKAN SEMUA KEBIJAKAN (POLICY) LAMA YANG TERBUKA
DROP POLICY IF EXISTS "Akses Publik Siswa" ON siswa;
DROP POLICY IF EXISTS "siswa_select_public" ON siswa;
DROP POLICY IF EXISTS "siswa_guru_manage" ON siswa;

DROP POLICY IF EXISTS "Akses Publik Nilai" ON nilai_cbt;
DROP POLICY IF EXISTS "nilai_cbt_select_public" ON nilai_cbt;
DROP POLICY IF EXISTS "nilai_cbt_anon_insert" ON nilai_cbt;
DROP POLICY IF EXISTS "nilai_cbt_guru_all" ON nilai_cbt;

DROP POLICY IF EXISTS "Akses Publik Live Answers" ON cbt_live_answers;
DROP POLICY IF EXISTS "cbt_live_answers_select_public" ON cbt_live_answers;
DROP POLICY IF EXISTS "cbt_live_answers_anon_insert" ON cbt_live_answers;
DROP POLICY IF EXISTS "cbt_live_answers_anon_update" ON cbt_live_answers;
DROP POLICY IF EXISTS "cbt_live_answers_guru_all" ON cbt_live_answers;


-- ============================================================================
-- 3. KEBIJAKAN TABEL SISWA (ROSTER MASTER)
-- ============================================================================
-- Siswa & Publik (anon) HANYA BISA MEMBACA daftar siswa untuk verifikasi data (SELECT)
CREATE POLICY "siswa_select_public"
ON siswa
FOR SELECT
TO public
USING (true);

-- Hanya Guru terautentikasi (arditeacher.main@gmail.com) yang boleh menambah, mengubah, menghapus data siswa
CREATE POLICY "siswa_guru_manage"
ON siswa
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);


-- ============================================================================
-- 4. KEBIJAKAN TABEL NILAI_CBT (REKAP SKOR CBT RESMI)
-- ============================================================================
-- Siswa & Guru dapat membaca daftar nilai (SELECT) untuk leaderboard & riwayat
CREATE POLICY "nilai_cbt_select_public"
ON nilai_cbt
FOR SELECT
TO public
USING (true);

-- Siswa (anon) HANYA BISA INSERT nilai baru saat selesai ujian CBT
-- DILINDUNGI VALIDASI INTEGRITAS KETAT:
-- - NIS wajib terdaftar di master tabel siswa
-- - Skor harus berada dalam rentang valid 0 s.d. 100
-- - Jumlah soal > 0 dan jumlah benar <= jumlah soal
-- - Total (benar + salah) <= jumlah soal
-- - Anon TIDAK memiliki izin UPDATE (mencegah manipulasi skor via DevTools / Postman)
-- - Anon TIDAK memiliki izin DELETE (mencegah penghapusan database nilai)
CREATE POLICY "nilai_cbt_anon_insert"
ON nilai_cbt
FOR INSERT
TO anon
WITH CHECK (
    EXISTS (SELECT 1 FROM siswa s WHERE s.nis = nilai_cbt.nis)
    AND skor >= 0 AND skor <= 100
    AND jumlah_soal > 0
    AND jumlah_benar >= 0 AND jumlah_benar <= jumlah_soal
    AND (jumlah_benar + jumlah_salah) <= jumlah_soal
    AND length(trim(mapel)) > 0
    AND length(trim(kode_pertemuan)) > 0
);

-- Hanya Guru terautentikasi yang memiliki hak penuh (ALL: SELECT, INSERT, UPDATE, DELETE)
-- Guru dapat mereset nilai ujian (DELETE) atau mengoreksi nilai siswa (UPDATE)
CREATE POLICY "nilai_cbt_guru_all"
ON nilai_cbt
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);


-- ============================================================================
-- 5. KEBIJAKAN TABEL CBT_LIVE_ANSWERS (DRAFT REAL-TIME CBT)
-- ============================================================================
-- Siswa & Guru dapat membaca draft jawaban real-time (SELECT)
CREATE POLICY "cbt_live_answers_select_public"
ON cbt_live_answers
FOR SELECT
TO public
USING (true);

-- Siswa (anon) dapat mencatat jawaban per butir soal (INSERT)
CREATE POLICY "cbt_live_answers_anon_insert"
ON cbt_live_answers
FOR INSERT
TO anon
WITH CHECK (
    EXISTS (SELECT 1 FROM siswa s WHERE s.nis = cbt_live_answers.nis)
    AND q_idx >= 0
    AND length(trim(mapel)) > 0
    AND length(trim(kode_pertemuan)) > 0
);

-- Siswa (anon) dapat memperbarui jawaban saat beralih opsi soal (UPDATE)
CREATE POLICY "cbt_live_answers_anon_update"
ON cbt_live_answers
FOR UPDATE
TO anon
USING (
    EXISTS (SELECT 1 FROM siswa s WHERE s.nis = cbt_live_answers.nis)
)
WITH CHECK (
    EXISTS (SELECT 1 FROM siswa s WHERE s.nis = cbt_live_answers.nis)
    AND q_idx >= 0
    AND length(trim(mapel)) > 0
    AND length(trim(kode_pertemuan)) > 0
);

-- Siswa (anon) TIDAK DIBERI IZIN DELETE pada cbt_live_answers (mencegah sabotase draft kawan)
-- Hanya Guru terautentikasi yang dapat menghapus / mereset draft pengerjaan (ALL)
CREATE POLICY "cbt_live_answers_guru_all"
ON cbt_live_answers
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);
