-- ===========================================================================
-- MATH CIHUY -- MIGRASI 02 (LANGKAH 2 DARI 2) : BUANG KUNCI UNIK LAMA
-- ---------------------------------------------------------------------------
-- JALANKAN HANYA SETELAH app.js DAN app-akhir.js VERSI BARU SUDAH TERPASANG
-- DAN TERBUKTI JALAN (coba satu paket, pastikan nilainya masuk).
--
-- Kunci lama, UNIQUE (nis, mapel, kode_pertemuan), masih melarang satu NIS
-- punya dua baris untuk paket yang sama. Selama hanya kelas XII yang aktif,
-- itu tidak terasa. Begitu kelas XI mulai memakai kode paket yang sama
-- ("Wajib P01"), kunci lama inilah yang akan menolak barisnya.
--
-- Berkas ini membuangnya. Aman diulang (idempoten).
-- ===========================================================================

BEGIN;

-- ---------------------------------------------------------------------------
-- Penjagaan: jangan buang kunci lama kalau kunci baru belum ada. Tanpa ini,
-- salah urut berarti tabel kehilangan SELURUH kunci uniknya dan nilai mulai
-- berlipat ganda diam-diam.
-- ---------------------------------------------------------------------------
DO $$
DECLARE baru INT;
BEGIN
  SELECT count(*) INTO baru FROM pg_constraint
   WHERE conname IN ('unik_nilai_cbt_v2','unik_jawaban_soal_v2');
  IF baru <> 2 THEN
    RAISE EXCEPTION
      'Dibatalkan: kunci baru belum lengkap (ditemukan %, seharusnya 2). '
      'Jalankan MIGRASI_01_TINGKAT.sql lebih dahulu.', baru;
  END IF;
END $$;

ALTER TABLE nilai_cbt        DROP CONSTRAINT IF EXISTS unik_nilai_cbt;
ALTER TABLE cbt_live_answers DROP CONSTRAINT IF EXISTS unik_jawaban_soal;

-- ---------------------------------------------------------------------------
-- Buktikan keadaan akhirnya benar: kunci lama hilang, kunci baru tinggal.
-- ---------------------------------------------------------------------------
DO $$
DECLARE lama INT; baru INT;
BEGIN
  SELECT count(*) INTO lama FROM pg_constraint
   WHERE conname IN ('unik_nilai_cbt','unik_jawaban_soal');
  SELECT count(*) INTO baru FROM pg_constraint
   WHERE conname IN ('unik_nilai_cbt_v2','unik_jawaban_soal_v2');
  IF lama <> 0 OR baru <> 2 THEN
    RAISE EXCEPTION 'Keadaan akhir salah (kunci lama: %, kunci baru: %)', lama, baru;
  END IF;
  RAISE NOTICE 'Selesai. Kunci lama dibuang, kunci bertingkat aktif. Kelas X/XI/XII kini tidak saling menimpa.';
END $$;

COMMIT;

-- ===========================================================================
-- VERIFIKASI
-- ===========================================================================
-- SELECT conname, pg_get_constraintdef(oid) FROM pg_constraint
--  WHERE conname LIKE 'unik_%' ORDER BY conname;
