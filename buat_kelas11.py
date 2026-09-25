# -*- coding: utf-8 -*-
"""Hasilkan 10.html dan 11.html dari index.html.

index.html adalah halaman kelas XII (dibuka di /) dan menjadi SATU-SATUNYA
sumber tampilan. 11.html (dibuka di /11) dan 10.html (dibuka di /10) adalah
salinannya yang memuat berkas data tingkatnya sendiri. Kode yang dipakai
bersama -- mathcihuy.css, vendor.js, app.js, app-akhir.js -- tidak digandakan,
jadi perbaikan cukup dikerjakan sekali untuk ketiga tingkat.

Yang diganti di setiap salinan: nama tingkat, fase, berkas data, angka
pertemuan dan soal, daftar bab di kartu beranda, daftar pertemuan di dasbor
guru, dan jadwal KBM (jadwal di index.html milik rombel kelas XII). Angka dan
daftar itu dihitung dari berkas data tingkatnya, bukan ditulis tangan. app.js
juga mengisi ulang angka-angka itu saat halaman dibuka, jadi salinan tetap
benar walaupun berkas data berubah sebelum skrip ini dijalankan lagi.

Jalankan ulang setiap kali index.html atau salah satu berkas data berubah:
    python buat_kelas11.py
"""
import html, io, json, os, re, sys

D = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.abspath(__file__))

TINGKAT = [
    # (berkas keluaran, nama tingkat, fase, berkas data)
    ('11.html', 'XI', 'F', 'data-xi.js'),
    ('10.html', 'X',  'E', 'data-x.js'),
]


def baca_db(berkas):
    s = io.open(os.path.join(D, berkas), encoding='utf-8').read()
    m = re.search(r'^const db = (\{.*\});$', s, re.M)
    assert m, "baris 'const db = {...};' tidak ditemukan di %s" % berkas
    return json.loads(m.group(1))


def daftar_bab(paket):
    """'Bab 1: Polinomial', 'Bab 2: ...' -> 'Polinomial, ..., dan ...'."""
    nama = []
    for p in paket:
        b = re.sub(r'^Bab\s*\d+\s*:\s*', '', p.get('bab', '')).strip()
        if b and b not in nama:
            nama.append(b)
    if len(nama) <= 1:
        return ''.join(nama)
    return ', '.join(nama[:-1]) + ', dan ' + nama[-1]


def judul_paket(pkt):
    return re.sub(r'^\s*[A-Z]?\d+\s*•\s*', '', pkt.get('title', '')).replace('$', '')


def ganti(s, pola, baru, harus=1, regex=False, flags=0):
    """Ganti pola dan pastikan jumlah kemunculannya sesuai harapan, supaya
    perubahan index.html yang tidak terduga langsung ketahuan."""
    if regex:
        s2, c = re.subn(pola, lambda m: baru, s, flags=flags)
    else:
        c = s.count(pola)
        s2 = s.replace(pola, baru)
    assert c == harus, "pola %r ketemu %d kali (harusnya %d)" % (pola[:60], c, harus)
    return s2


def sub1(s, pola, fungsi, flags=0):
    """re.sub yang WAJIB mengena tepat satu kali."""
    s2, c = re.subn(pola, fungsi, s, flags=flags)
    assert c == 1, "pola %r ketemu %d kali (harusnya 1)" % (pola[:60], c)
    return s2


def div_berakhir(s, awal):
    """Posisi sesudah </div> penutup elemen <div ...> yang dimulai di 'awal'."""
    kedalaman = 0
    for m in re.finditer(r'<div\b|</div>', s[awal:]):
        kedalaman += 1 if m.group(0) == '<div' else -1
        if kedalaman == 0:
            return awal + m.end()
    raise AssertionError('penutup <div> tidak ditemukan')


def bangun(sumber, nama, fase, berkas_data):
    db = baca_db(berkas_data)
    jml = {k: len(db.get(k, [])) for k in ('wajib', 'minat', 'clil')}
    butir = {k: sum(len(p.get('questions', [])) for p in db.get('tka_' + k, {}).values())
             for k in ('wajib', 'minat', 'clil')}
    total_soal = sum(butir.values())
    total_pertemuan = sum(jml.values())
    e = html.escape

    s = sumber
    s = ganti(s, '<title>Math Cihuy • Portal Matematika Kelas XII</title>',
              '<title>Math Cihuy • Portal Matematika Kelas %s</title>' % nama)
    mapel = [m for m, k in (('Wajib', 'wajib'), ('Peminatan', 'minat'), ('CLIL', 'clil')) if jml[k]]
    # "Wajib, Peminatan, dan 1000 soal" / "Matematika Wajib dan 480 soal"
    mapel = ', '.join(mapel) + ',' if len(mapel) > 1 else 'Matematika ' + mapel[0]
    s = ganti(s, r'<meta name="description" content="[^"]*">',
              '<meta name="description" content="Semua materi Matematika Kelas %s dalam satu tempat — %s '
              'dan %d soal drilling untuk TKA dan UTBK-SNBT. Sekali dibuka, bisa dipakai tanpa internet.">'
              % (nama, mapel, total_soal), regex=True)
    s = ganti(s, 'border-blue-500/30">XII</span>', 'border-blue-500/30">%s</span>' % nama)
    s = ganti(s, 'MATHCIHUY • KELAS XII (FASE F)', 'MATHCIHUY • KELAS %s (FASE %s)' % (nama, fase))

    # Kartu beranda
    s = ganti(s, r'<span id="jml-wajib-kartu">\d+</span>', '<span id="jml-wajib-kartu">%d</span>' % jml['wajib'], regex=True)
    s = ganti(s, r'<span id="jml-minat-kartu">\d+</span>', '<span id="jml-minat-kartu">%d</span>' % jml['minat'], regex=True)
    s = ganti(s, r'<span id="jml-soal-kartu">\d+</span>', '<span id="jml-soal-kartu">%d</span>' % total_soal, regex=True)
    s = ganti(s, r'<span id="butir-wajib-kartu">\d+</span>', '<span id="butir-wajib-kartu">%d</span>' % butir['wajib'], regex=True)
    s = ganti(s, r'<span id="butir-minat-kartu">\d+</span>', '<span id="butir-minat-kartu">%d</span>' % butir['minat'], regex=True)
    for k in ('wajib', 'minat'):
        teks = daftar_bab(db.get(k, []))
        teks = teks + '.' if teks else 'Belum ada materi untuk tingkat ini.'
        s = sub1(s, r'(<p id="bab-%s-kartu"[^>]*>)\s*.*?\s*(</p>)' % k,
                 lambda m: m.group(1) + '\n                ' + e(teks) + '\n              ' + m.group(2),
                 flags=re.S)

    # Sidebar, peta konsep, kartu skor
    s = ganti(s, 'Silabus Fase F', 'Silabus Fase %s' % fase)
    s = ganti(s, 'Math Cihuy &bull; Kelas XII', 'Math Cihuy &bull; Kelas %s' % nama)
    s = ganti(s, r'id="drawer-progress-label">0 / \d+ Pertemuan', 'id="drawer-progress-label">0 / %d Pertemuan' % total_pertemuan, regex=True)
    s = ganti(s, 'Diagram prasyarat antar bab Matematika kelas XII', 'Diagram prasyarat antar bab Matematika kelas %s' % nama)
    s = ganti(s, 'Math Cihuy • Kelas XII Fase F', 'Math Cihuy • Kelas %s Fase %s' % (nama, fase))

    # Judul paket bawaan sebelum app.js mengisinya
    pertama = next(iter(db.get('tka_wajib', {}).values()), {})
    jp = e(judul_paket(pertama))
    s = sub1(s, r'(<span id="tka-pkg-name"[^>]*>)[^<]*(</span>)', lambda m: m.group(1) + 'P01 ' + jp + m.group(2))
    s = sub1(s, r'(<h3 id="scorecard-pkg-title"[^>]*>)[^<]*(</h3>)', lambda m: m.group(1) + 'P01 • ' + jp + m.group(2))

    # Berkas data tingkat ini
    s = sub1(s, r'<script src="data-xii\.js(\?v=[^"]*)?"></script>',
             lambda m: '<script src="%s%s"></script>' % (berkas_data, m.group(1) or ''))

    # Dasbor guru: jumlah per mapel dan daftar pertemuan
    s = sub1(s, r'(id="opsi-wajib">Matematika Wajib \()\d+', lambda m: m.group(1) + str(jml['wajib']))
    s = sub1(s, r'(id="opsi-minat">Additional Mathematics \()\d+', lambda m: m.group(1) + str(jml['minat']))
    s = sub1(s, r'(id="opsi-clil">CLIL English \()\d+', lambda m: m.group(1) + str(jml['clil']))
    opsi = ''.join('\n                        <option value="%s">%s - %s</option>' % (e(pid), e(pid), e(judul_paket(p)))
                   for pid, p in db.get('tka_wajib', {}).items())
    s = sub1(s, r'(\n\s*<option value="P\d+">[^\n]*</option>)+', lambda m: opsi)

    # Jadwal KBM di index.html adalah jadwal rombel kelas XII.
    awal = s.index('<div id="modal-view-kbm"')
    akhir = div_berakhir(s, awal)
    s = s[:awal] + ('<div id="modal-view-kbm" class="hidden space-y-3">\n'
                    '        <div class="p-6 rounded-2xl border border-slate-800 bg-slate-950 text-center text-sm text-slate-400">\n'
                    '          Jadwal KBM kelas %s belum diisi.\n'
                    '        </div>\n'
                    '      </div>' % nama) + s[akhir:]

    # Pemeriksaan akhir: tidak boleh ada sisa milik kelas XII, kecuali tautan
    # "XII" pada pilihan tingkat di header.
    sisa = s.replace('data-tingkat="12" title="Portal Kelas XII"', '').replace('>XII</a>', '')
    assert 'XII' not in sisa, 'masih ada rujukan XII: %r' % re.findall(r'.{40}XII.{20}', sisa)[:3]
    assert not re.search(r'\b12 F\.\d', s), 'masih ada rombel kelas XII'
    if fase != 'F':
        assert 'Fase F' not in s and 'FASE F' not in s, 'masih ada Fase F'
    return s, total_pertemuan, total_soal


sumber = io.open(os.path.join(D, 'index.html'), encoding='utf-8').read()
for keluaran, nama, fase, berkas_data in TINGKAT:
    hasil, n_pertemuan, n_soal = bangun(sumber, nama, fase, berkas_data)
    io.open(os.path.join(D, keluaran), 'w', encoding='utf-8', newline='\n').write(hasil)
    print("%s dibuat: kelas %s, %d pertemuan, %d soal, %s bita"
          % (keluaran, nama, n_pertemuan, n_soal, "{:,}".format(len(hasil.encode()))))
