-- ===========================================================================
-- MATH CIHUY -- MIGRASI 01 (LANGKAH 1 DARI 2) : DUKUNGAN TINGKAT X / XI / XII
-- ---------------------------------------------------------------------------
-- Masalah yang diperbaiki:
--   Kunci unik nilai_cbt saat ini (nis, mapel, kode_pertemuan) tidak memuat
--   tingkat. Begitu kelas 10 dan 11 dibuat, "Wajib P01" kelas 11 dan
--   "Wajib P01" kelas 12 memakai kunci yang sama, sehingga nilai saling
--   menimpa dan dasbor guru mencampur ketiganya.
--
-- MENGAPA DUA LANGKAH -- ini penting, mohon dibaca:
--   Kalau kunci lama langsung dibuang bersamaan, akan ada jeda antara
--   "SQL sudah dijalankan" dan "app.js baru sudah diunggah". Selama jeda itu
--   SETIAP pengiriman nilai ditolak server, dan -- pada app.js yang sekarang --
--   peramban tetap menulis "Nilai CBT berhasil disubmit" di konsol. Jadi
--   nilainya hilang tanpa seorang pun tahu. Sudah diuji, memang begitu:
--     ERROR: there is no unique or exclusion constraint matching the
--            ON CONFLICT specification
--
--   Berkas ini karena itu MENAMBAH kunci baru tanpa membuang kunci lama.
--   Selama langkah 1, app.js lama DAN app.js baru sama-sama bekerja, sehingga
--   tidak ada jeda sama sekali dan tidak ada nilai yang bisa hilang.
--   Kunci lama baru dibuang di MIGRASI_02_HAPUS_KUNCI_LAMA.sql, sesudah
--   app.js baru terpasang.
--
-- URUTAN YANG BENAR:
--   1. Pastikan tabel siswa sudah terisi lengkap.
--   2. Jalankan berkas ini.                      <-- aman kapan saja
--   3. Unggah app.js + app-akhir.js versi baru.
--   4. Jalankan MIGRASI_02_HAPUS_KUNCI_LAMA.sql. <-- aman kapan saja
--
-- Cara pakai:
--   Supabase -> SQL Editor -> tempel seluruh berkas ini -> Run.
--   Seluruhnya satu transaksi: kalau ada satu langkah gagal, TIDAK ADA
--   perubahan yang tersimpan. Aman diulang (idempoten).
-- ===========================================================================

BEGIN;

-- ---------------------------------------------------------------------------
-- 0. PENJAGAAN AWAL -- dijalankan sebelum apa pun diubah.
--    Sesudah migrasi ini, SETIAP nilai yang masuk wajib punya NIS yang
--    terdaftar di tabel siswa; kalau tidak, trigger menolaknya. Karena itu
--    tabel siswa harus sudah terisi LEBIH DAHULU. Kalau masih kosong,
--    seluruh pengiriman nilai akan gagal setelah migrasi ini.
-- ---------------------------------------------------------------------------
DO $$
DECLARE jml INT;
BEGIN
  SELECT count(*) INTO jml FROM siswa;
  IF jml = 0 THEN
    RAISE EXCEPTION
      'Migrasi dibatalkan: tabel siswa masih KOSONG. Isi dahulu seluruh '
      'daftar siswa, sebab sesudah migrasi ini setiap NIS yang tidak '
      'terdaftar akan ditolak ketika mengirim nilai.';
  END IF;
  RAISE NOTICE 'Penjagaan awal lolos: % siswa terdaftar.', jml;
END $$;

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
-- 3. Isi baris lama (kalau ada).
-- ---------------------------------------------------------------------------
-- Ditulis terang-terangan dengan JOIN ke tabel siswa. Bentuk sebelumnya,
-- "SET tingkat = tingkat", sebenarnya bekerja -- tetapi hanya karena trigger
-- BEFORE UPDATE di atas diam-diam mengisinya. Menulisnya begini membuat
-- maksudnya jelas dan tetap benar seandainya triggernya kelak diubah.
UPDATE nilai_cbt n
   SET tingkat = s.tingkat
  FROM siswa s
 WHERE s.nis = n.nis AND n.tingkat IS NULL;

UPDATE cbt_live_answers c
   SET tingkat = s.tingkat
  FROM siswa s
 WHERE s.nis = c.nis AND c.tingkat IS NULL;

-- Kalau ada baris nilai yang NIS-nya tidak terdaftar di tabel siswa, katakan
-- dengan jelas -- jangan biarkan pesannya berupa "column contains null values"
-- yang tidak menunjuk sebabnya.
DO $$
DECLARE yatim TEXT;
BEGIN
  SELECT string_agg(DISTINCT nis, ', ') INTO yatim FROM (
    SELECT nis FROM nilai_cbt        WHERE tingkat IS NULL
    UNION
    SELECT nis FROM cbt_live_answers WHERE tingkat IS NULL
  ) t;
  IF yatim IS NOT NULL THEN
    RAISE EXCEPTION
      'Migrasi dibatalkan: ada nilai tersimpan dengan NIS yang tidak terdaftar '
      'di tabel siswa -> %. Daftarkan dahulu NIS itu, atau hapus barisnya.', yatim;
  END IF;
END $$;

ALTER TABLE nilai_cbt        ALTER COLUMN tingkat SET NOT NULL;
ALTER TABLE cbt_live_answers ALTER COLUMN tingkat SET NOT NULL;

-- ---------------------------------------------------------------------------
-- 4. Kunci unik BARU -- ditambahkan BERDAMPINGAN dengan yang lama
--    Nama sengaja dibedakan (_v2) supaya keduanya bisa hidup bersama.
--    Kunci lama dibuang di MIGRASI_02, sesudah app.js baru terpasang.
-- ---------------------------------------------------------------------------
ALTER TABLE nilai_cbt DROP CONSTRAINT IF EXISTS unik_nilai_cbt_v2;
ALTER TABLE nilai_cbt ADD  CONSTRAINT unik_nilai_cbt_v2
  UNIQUE (nis, tingkat, mapel, kode_pertemuan);

ALTER TABLE cbt_live_answers DROP CONSTRAINT IF EXISTS unik_jawaban_soal_v2;
ALTER TABLE cbt_live_answers ADD  CONSTRAINT unik_jawaban_soal_v2
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
--    Aplikasi TIDAK PERNAH membaca tabel ini -- sudah diperiksa: tidak ada
--    satu pun from('siswa') di app.js, app-akhir.js, index.html, 11.html,
--    maupun login.html. Daftar nama untuk login tertanam di halaman.
--    Jadi mencabut policy ini tidak mengubah perilaku apa pun, tapi
--    menghentikan siapa pun membaca nama, NIS, dan kelas 100 siswa hanya
--    bermodal kunci publik yang memang tercetak di halaman.
--    Anda sendiri tetap bisa membukanya lewat Table Editor / SQL Editor,
--    sebab keduanya memakai service role yang tidak tunduk pada RLS.
-- ---------------------------------------------------------------------------
-- RLS harus MENYALA. Mencabut policy pada tabel yang RLS-nya mati sama sekali
-- tidak menutup apa pun -- tabelnya justru tetap terbuka lebar.
ALTER TABLE siswa ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Akses Publik Siswa" ON siswa;

-- Nama policy bisa saja berbeda dari dugaan. Cabut sisanya, dan catat apa saja
-- yang dicabut supaya dapat diperiksa.
DO $$
DECLARE p RECORD;
BEGIN
  FOR p IN SELECT policyname FROM pg_policies
            WHERE schemaname = 'public' AND tablename = 'siswa' LOOP
    EXECUTE format('DROP POLICY %I ON siswa', p.policyname);
    RAISE NOTICE 'Policy dicabut dari tabel siswa: %', p.policyname;
  END LOOP;
END $$;

-- Buktikan lubangnya benar-benar tertutup.
DO $$
DECLARE sisa INT; rls BOOLEAN;
BEGIN
  SELECT count(*) INTO sisa FROM pg_policies
   WHERE schemaname = 'public' AND tablename = 'siswa';
  SELECT relrowsecurity INTO rls FROM pg_class WHERE relname = 'siswa';
  IF sisa > 0 OR NOT rls THEN
    RAISE EXCEPTION 'Tabel siswa MASIH terbuka (policy tersisa: %, RLS: %)', sisa, rls;
  END IF;
  RAISE NOTICE 'Tabel siswa kini tertutup dari kunci publik.';
END $$;

-- ---------------------------------------------------------------------------
-- 7. Buktikan kedua kunci hidup berdampingan -- inilah yang membuat
--    langkah ini bebas jeda.
-- ---------------------------------------------------------------------------
DO $$
DECLARE lama INT; baru INT;
BEGIN
  SELECT count(*) INTO lama FROM pg_constraint
   WHERE conname IN ('unik_nilai_cbt','unik_jawaban_soal');
  SELECT count(*) INTO baru FROM pg_constraint
   WHERE conname IN ('unik_nilai_cbt_v2','unik_jawaban_soal_v2');
  IF baru <> 2 THEN
    RAISE EXCEPTION 'Kunci baru tidak lengkap (ditemukan %, seharusnya 2)', baru;
  END IF;
  RAISE NOTICE 'Kunci lama aktif: % -- kunci baru aktif: %. app.js lama dan baru sama-sama jalan.', lama, baru;
END $$;

COMMIT;

-- ===========================================================================
-- VERIFIKASI -- jalankan terpisah setelah COMMIT berhasil
-- ===========================================================================
-- SELECT tingkat, kelas, count(*) FROM siswa GROUP BY 1,2 ORDER BY 1,2;
--
-- SELECT conname, pg_get_constraintdef(oid) FROM pg_constraint
--  WHERE conname LIKE 'unik_%' ORDER BY conname;
