-- ===========================================================================
-- MATH CIHUY -- MIGRASI 01 : DUKUNGAN MULTI-TINGKAT (KELAS X, XI, XII)
-- ---------------------------------------------------------------------------
-- Masalah yang diperbaiki:
--   Kunci unik nilai_cbt saat ini (nis, mapel, kode_pertemuan) tidak memuat
--   tingkat. Begitu kelas 10 dan 11 dibuat, "Wajib P01" kelas 10 dan
--   "Wajib P01" kelas 12 memakai kunci yang sama, sehingga nilai saling
--   menimpa dan dasbor guru mencampur ketiganya.
--
-- Cara pakai:
--   Supabase -> SQL Editor -> tempel seluruh berkas ini -> Run.
--   Seluruhnya satu transaksi: kalau ada satu langkah gagal, TIDAK ADA
--   perubahan yang tersimpan. Aman diulang (idempoten).
--
-- Prasyarat: tabel nilai_cbt & cbt_live_answers masih kosong (0 baris).
--            Kalau sudah terisi, migrasi ini tetap jalan -- baris lama akan
--            diisi tingkatnya dari tabel siswa.
-- ===========================================================================

BEGIN;

-- ---------------------------------------------------------------------------
-- 1. siswa.tingkat -- diturunkan otomatis dari kolom kelas
--    Tidak perlu diisi manual dan tidak bisa melenceng dari kelas.
--    Urutan CASE penting: 'XII F1' juga cocok dengan pola 'X%', jadi
--    XII harus diperiksa lebih dulu, lalu XI, baru X.
-- ---------------------------------------------------------------------------
ALTER TABLE siswa
  ADD COLUMN IF NOT EXISTS tingkat SMALLINT
  GENERATED ALWAYS AS (
    CASE
      WHEN kelas LIKE 'XII%' THEN 12
      WHEN kelas LIKE 'XI%'  THEN 11
      WHEN kelas LIKE 'X%'   THEN 10
      ELSE NULL
    END
  ) STORED;

-- Berhenti kalau ada kelas yang tidak terbaca, daripada diam-diam NULL.
DO $$
DECLARE jml INT;
BEGIN
  SELECT count(*) INTO jml FROM siswa WHERE tingkat IS NULL;
  IF jml > 0 THEN
    RAISE EXCEPTION
      'Migrasi dibatalkan: % baris siswa punya kelas yang tidak dikenali. '
      'Kolom kelas harus diawali X, XI, atau XII (contoh: "XII F1").', jml;
  END IF;
END $$;

-- ---------------------------------------------------------------------------
-- 2. Kolom tingkat pada tabel nilai
--    Sengaja BUKAN generated: cbt_live_answers tidak menyimpan kelas, dan
--    kelas yang dikirim aplikasi punya nilai cadangan 'XII' kalau sesi tidak
--    lengkap. Sumber kebenarannya harus tabel siswa, bukan kiriman peramban.
-- ---------------------------------------------------------------------------
ALTER TABLE nilai_cbt        ADD COLUMN IF NOT EXISTS tingkat SMALLINT;
ALTER TABLE cbt_live_answers ADD COLUMN IF NOT EXISTS tingkat SMALLINT;

-- SECURITY DEFINER supaya fungsi ini tetap bisa membaca tabel siswa
-- setelah akses publik ke tabel itu dicabut di langkah 6.
CREATE OR REPLACE FUNCTION isi_tingkat_dari_siswa()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  SELECT s.tingkat INTO NEW.tingkat FROM siswa s WHERE s.nis = NEW.nis;
  IF NEW.tingkat IS NULL THEN
    RAISE EXCEPTION 'NIS % tidak terdaftar di tabel siswa', NEW.nis;
  END IF;
  RETURN NEW;
END $$;

DROP TRIGGER IF EXISTS trg_tingkat_nilai ON nilai_cbt;
CREATE TRIGGER trg_tingkat_nilai
  BEFORE INSERT OR UPDATE ON nilai_cbt
  FOR EACH ROW EXECUTE FUNCTION isi_tingkat_dari_siswa();

DROP TRIGGER IF EXISTS trg_tingkat_live ON cbt_live_answers;
CREATE TRIGGER trg_tingkat_live
  BEFORE INSERT OR UPDATE ON cbt_live_answers
  FOR EACH ROW EXECUTE FUNCTION isi_tingkat_dari_siswa();

-- ---------------------------------------------------------------------------
-- 3. Isi baris lama (kalau ada). Saat ini kedua tabel kosong.
-- ---------------------------------------------------------------------------
UPDATE nilai_cbt        SET tingkat = tingkat WHERE tingkat IS NULL;
UPDATE cbt_live_answers SET tingkat = tingkat WHERE tingkat IS NULL;

ALTER TABLE nilai_cbt        ALTER COLUMN tingkat SET NOT NULL;
ALTER TABLE cbt_live_answers ALTER COLUMN tingkat SET NOT NULL;

-- ---------------------------------------------------------------------------
-- 4. Kunci unik baru -- inti dari migrasi ini
-- ---------------------------------------------------------------------------
ALTER TABLE nilai_cbt DROP CONSTRAINT IF EXISTS unik_nilai_cbt;
ALTER TABLE nilai_cbt ADD  CONSTRAINT unik_nilai_cbt
  UNIQUE (nis, tingkat, mapel, kode_pertemuan);

ALTER TABLE cbt_live_answers DROP CONSTRAINT IF EXISTS unik_jawaban_soal;
ALTER TABLE cbt_live_answers ADD  CONSTRAINT unik_jawaban_soal
  UNIQUE (nis, tingkat, mapel, kode_pertemuan, q_idx);

-- ---------------------------------------------------------------------------
-- 5. Indeks untuk dasbor guru (menyaring per tingkat)
-- ---------------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_nilai_tingkat
  ON nilai_cbt (tingkat, kelas, waktu_submit DESC);
CREATE INDEX IF NOT EXISTS idx_live_tingkat
  ON cbt_live_answers (tingkat, updated_at DESC);

-- ---------------------------------------------------------------------------
-- 6. Tutup akses publik ke tabel siswa
--    Aplikasi TIDAK PERNAH membaca tabel ini -- daftar nama untuk login
--    tertanam di index.html (STUDENTS_DATA). Jadi mencabut policy ini tidak
--    mengubah perilaku apa pun, tapi menghentikan siapa pun membaca nama,
--    NIS, dan kelas 100 siswa hanya bermodal kunci publik di halaman.
--    RLS aktif + tanpa policy = tidak ada akses lewat kunci anon.
--    Anda sendiri tetap bisa membukanya lewat Table Editor / SQL Editor.
-- ---------------------------------------------------------------------------
DROP POLICY IF EXISTS "Akses Publik Siswa" ON siswa;

COMMIT;

-- ===========================================================================
-- VERIFIKASI -- jalankan terpisah setelah COMMIT berhasil
-- ===========================================================================
-- SELECT tingkat, kelas, count(*) FROM siswa GROUP BY 1,2 ORDER BY 1,2;
--
-- SELECT conname, pg_get_constraintdef(oid)
-- FROM pg_constraint
-- WHERE conname IN ('unik_nilai_cbt','unik_jawaban_soal');
