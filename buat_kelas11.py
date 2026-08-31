# -*- coding: utf-8 -*-
"""Hasilkan index11.html dari index.html.

11.html adalah HALAMAN kelas 11 (dibuka di /11): alamatnya sendiri, materinya sendiri.
Yang dipakai bersama dengan kelas 12 adalah mathcihuy.css, vendor.js, app.js,
dan app-akhir.js -- jadi tidak ada kode yang digandakan, dan perbaikan cukup
dikerjakan sekali untuk kedua tingkat.

Jalankan ulang berkas ini setiap kali index.html berubah:
    python buat_kelas11.py
"""
import io, os, re, sys
D = sys.argv[1] if len(sys.argv) > 1 else '.'
sumber = os.path.join(D, 'index.html')
tujuan = os.path.join(D, '11.html')
s = io.open(sumber, encoding='utf-8').read()

GANTI = [
    ('<script src="data-xii.js"></script>', '<script src="data-xi.js"></script>', 1),
    ('Kelas XII (Fase F)',                  'Kelas XI (Fase F)',                 None),
    ('Kelas XII',                           'Kelas XI',                          None),
    ('Matematika XII',                      'Matematika XI',                     None),
    ('XII</',                               'XI</',                              None),
    ('KELAS XII',                           'KELAS XI',                          None),
    ('kelas XII',                           'kelas XI',                          None),
]
n = 0
for lama, baru, wajib in GANTI:
    c = s.count(lama)
    if wajib is not None:
        assert c == wajib, "pola %r ketemu %d kali (harusnya %d)" % (lama, c, wajib)
    s = s.replace(lama, baru); n += c

sisa = re.findall(r'XII', s)
assert not sisa, "masih ada %d rujukan XII di 11.html" % len(sisa)
io.open(tujuan, 'w', encoding='utf-8').write(s)
print("11.html dibuat: %d penggantian, %s bita" % (n, "{:,}".format(len(s.encode()))))
