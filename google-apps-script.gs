/**
 * PENERIMA HASIL CBT — MATH CIHUY
 * ================================
 * Skrip ini dipasang di Google Sheets dan menjadi "database" tempat
 * portal mengirim hasil CBT siswa secara otomatis.
 *
 * CARA MEMASANG
 * -------------
 * 1. Buat Google Spreadsheet baru.
 * 2. Menu Ekstensi -> Apps Script.
 * 3. Hapus isi Code.gs, tempel seluruh berkas ini, lalu simpan.
 * 4. Klik Deploy -> New deployment.
 *      Jenis    : Web app
 *      Execute as   : Me
 *      Who has access: Anyone            <- WAJIB, kalau "Anyone with
 *                                           Google account" portal akan
 *                                           ditolak karena siswa tidak login.
 * 5. Salin URL yang berakhiran /exec.
 * 6. Buka portal, login guru, tombol Dashboard -> tempel URL itu di
 *    kolom "Webhook URL" -> Simpan URL.
 *
 * Setelah itu tidak ada lagi yang perlu dilakukan: setiap siswa yang
 * menuntaskan satu paket CBT hasilnya masuk sendiri ke sheet ini.
 *
 * CATATAN
 * -------
 * - Baris header dibuat otomatis pada kiriman pertama.
 * - Kiriman ganda ditolak: kunci uniknya NIS + mapel + paket + skor.
 *   Kalau siswa mengulang dan skornya berubah, barisnya diperbarui,
 *   bukan ditambah.
 * - Setiap perubahan skrip ini perlu Deploy ulang (Manage deployments ->
 *   ikon pensil -> Version: New version) supaya URL yang lama tetap sama.
 */

var NAMA_SHEET = 'Hasil CBT';

var KOLOM = [
  'Waktu Kirim',
  'NIS',
  'Nama Siswa',
  'Kelas',
  'Mapel',
  'Kode Pertemuan',
  'Skor',
  'Jumlah Soal',
  'Benar',
  'Salah',
  'Durasi (detik)',
  'Durasi (menit)'
];

var NAMA_MAPEL = {
  wajib: 'Matematika Wajib',
  minat: 'Matematika Peminatan',
  clil: 'CLIL English',
  custom: 'Tryout Racikan'
};


function doPost(e) {
  var kunci = LockService.getScriptLock();
  try {
    // Dua siswa bisa selesai pada detik yang sama; tanpa kunci barisnya
    // bisa saling menimpa.
    kunci.waitLock(20000);

    var data = JSON.parse(e.postData.contents);
    var sheet = ambilSheet_();
    var baris = susunBaris_(data);

    var adaDi = cariBarisSama_(sheet, data);
    if (adaDi > 0) {
      sheet.getRange(adaDi, 1, 1, baris.length).setValues([baris]);
      return balas_({ ok: true, status: 'diperbarui', baris: adaDi });
    }

    sheet.appendRow(baris);
    return balas_({ ok: true, status: 'ditambahkan', baris: sheet.getLastRow() });

  } catch (err) {
    return balas_({ ok: false, pesan: String(err) });
  } finally {
    kunci.releaseLock();
  }
}


/** Dipakai untuk mengecek dari browser bahwa URL-nya hidup. */
/**
 * Dipakai untuk mengambil data nilai siswa ke Dashboard Guru di semua browser
 * dan mengecek status aktif Webhook.
 */
function doGet(e) {
  try {
    var sheet = ambilSheet_();
    var jml = sheet.getLastRow() - 1;
    if (jml < 1) {
      return balas_({ ok: true, pesan: 'Penerima hasil CBT Math Cihuy aktif (Belum ada data).', data: [] });
    }

    var data = sheet.getRange(2, 1, jml, KOLOM.length).getValues();
    var hasil = [];

    for (var i = 0; i < data.length; i++) {
      var row = data[i];
      if (!row[1]) continue; // Skip jika NIS kosong
      
      var detik = Number(row[10]) || 0;
      hasil.push({
        timestamp: row[0] instanceof Date ? row[0].toISOString() : (row[0] || new Date().toISOString()),
        nis: String(row[1] || '').trim(),
        nama: String(row[2] || '').trim(),
        kelas: String(row[3] || '').trim(),
        mapel: String(row[4] || '').trim(),
        kode_pertemuan: String(row[5] || '').trim(),
        skor: Number(row[6]) || 0,
        jumlah_soal: Number(row[7]) || 0,
        jumlah_benar: Number(row[8]) || 0,
        jumlah_salah: Number(row[9]) || 0,
        durasi_detik: detik,
        durasi_menit: Number(row[11]) || (Math.round(detik / 6) / 10)
      });
    }

    return balas_({ ok: true, count: hasil.length, data: hasil });
  } catch (err) {
    return balas_({ ok: false, pesan: 'Gagal membaca spreadsheet: ' + String(err), data: [] });
  }
}


function ambilSheet_() {
  var buku = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = buku.getSheetByName(NAMA_SHEET);
  if (!sheet) sheet = buku.insertSheet(NAMA_SHEET);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(KOLOM);
    var kepala = sheet.getRange(1, 1, 1, KOLOM.length);
    kepala.setFontWeight('bold')
          .setBackground('#0B1220')
          .setFontColor('#FFFFFF');
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, KOLOM.length);
  }
  return sheet;
}


function susunBaris_(d) {
  var detik = Number(d.durasi_detik) || 0;
  return [
    d.timestamp ? new Date(d.timestamp) : new Date(),
    String(d.nis || ''),
    d.nama || '',
    d.kelas || '',
    NAMA_MAPEL[d.mapel] || d.mapel || 'Matematika Wajib',
    d.kode_pertemuan || '',
    Number(d.skor) || 0,
    Number(d.jumlah_soal) || 0,
    Number(d.jumlah_benar) || 0,
    Number(d.jumlah_salah) || 0,
    detik,
    Math.round(detik / 6) / 10
  ];
}


/**
 * Mencari baris dengan NIS + mapel + paket yang sama.
 * Mengembalikan nomor barisnya, atau 0 kalau belum ada.
 */
function cariBarisSama_(sheet, d) {
  var jml = sheet.getLastRow() - 1;
  if (jml < 1) return 0;

  var nilai = sheet.getRange(2, 2, jml, 5).getValues();   // NIS..Kode Pertemuan
  var nis = String(d.nis || '');
  var mapel = NAMA_MAPEL[d.mapel] || d.mapel || 'Matematika Wajib';
  var paket = d.kode_pertemuan || '';

  for (var i = 0; i < nilai.length; i++) {
    if (String(nilai[i][0]) === nis &&
        String(nilai[i][3]) === mapel &&
        String(nilai[i][4]) === paket) {
      return i + 2;
    }
  }
  return 0;
}


function balas_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
