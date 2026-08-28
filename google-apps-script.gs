/**
 * PENERIMA HASIL CBT — MATH CIHUY (FAIL-SAFE VERSION)
 * ===================================================
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

/**
 * PENGAMBILAN DATA (doGet) — Mendukung JSON dan JSONP
 */
function doGet(e) {
  var callback = (e && e.parameter && e.parameter.callback) ? e.parameter.callback : null;
  try {
    var sheet = ambilSheet_();
    if (!sheet) {
      return balasJsonP_({ ok: false, pesan: 'Sheet tidak ditemukan atau spreadsheet tidak aktif', data: [] }, callback);
    }

    var lastRow = sheet.getLastRow();
    var hasil = [];

    if (lastRow > 1) {
      var jml = lastRow - 1;
      var numCols = Math.min(sheet.getLastColumn(), KOLOM.length);
      var data = sheet.getRange(2, 1, jml, numCols).getValues();

      for (var i = 0; i < data.length; i++) {
        var row = data[i];
        if (!row[1]) continue; // Lewati jika kolom NIS kosong
        
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
    }

    return balasJsonP_({ ok: true, count: hasil.length, data: hasil }, callback);

  } catch (err) {
    return balasJsonP_({ ok: false, pesan: 'Error server: ' + String(err.message || err), data: [] }, callback);
  }
}

/**
 * PENERIMAAN DATA HASIL CBT (doPost)
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);

    var contents = (e && e.postData && e.postData.contents) ? e.postData.contents : '{}';
    var data = JSON.parse(contents);
    var sheet = ambilSheet_();
    if (!sheet) {
      return balasJsonP_({ ok: false, pesan: 'Gagal membuka sheet' });
    }

    var baris = susunBaris_(data);
    var adaDi = cariBarisSama_(sheet, data);

    if (adaDi > 0) {
      sheet.getRange(adaDi, 1, 1, baris.length).setValues([baris]);
      return balasJsonP_({ ok: true, status: 'diperbarui', baris: adaDi });
    }

    sheet.appendRow(baris);
    return balasJsonP_({ ok: true, status: 'ditambahkan', baris: sheet.getLastRow() });

  } catch (err) {
    return balasJsonP_({ ok: false, pesan: String(err.message || err) });
  } finally {
    try { lock.releaseLock(); } catch(ign) {}
  }
}

function ambilSheet_() {
  var buku = SpreadsheetApp.getActiveSpreadsheet();
  if (!buku) return null;

  var sheet = buku.getSheetByName(NAMA_SHEET);
  if (!sheet) sheet = buku.insertSheet(NAMA_SHEET);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(KOLOM);
    try {
      var kepala = sheet.getRange(1, 1, 1, KOLOM.length);
      kepala.setFontWeight('bold')
            .setBackground('#0B1220')
            .setFontColor('#FFFFFF');
      sheet.setFrozenRows(1);
    } catch(e) {}
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

function cariBarisSama_(sheet, d) {
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) return 0;

  var jml = lastRow - 1;
  var nilai = sheet.getRange(2, 2, jml, 5).getValues(); // NIS..Kode Pertemuan
  var nis = String(d.nis || '').trim();
  var mapel = NAMA_MAPEL[d.mapel] || d.mapel || 'Matematika Wajib';
  var paket = String(d.kode_pertemuan || '').trim();

  for (var i = 0; i < nilai.length; i++) {
    if (String(nilai[i][0]).trim() === nis &&
        String(nilai[i][3]).trim() === mapel &&
        String(nilai[i][4]).trim() === paket) {
      return i + 2;
    }
  }
  return 0;
}

function balasJsonP_(obj, callback) {
  var str = JSON.stringify(obj);
  if (callback) {
    return ContentService
      .createTextOutput(callback + '(' + str + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService
    .createTextOutput(str)
    .setMimeType(ContentService.MimeType.JSON);
}
