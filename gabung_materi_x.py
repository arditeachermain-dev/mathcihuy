# -*- coding: utf-8 -*-
"""Gabungkan paket materi kelas X dari folder materi-x/ ke data-x.js.

Setiap berkas materi-x/X_WAJIB_*.json berisi {"_catatan", "paket": [...]},
dan setiap paket berbentuk {"id", "judul", "materi", "soal"} -- sama seperti
berkas di materi-xi/. 'materi' masuk ke db.wajib (urut id), 'soal' masuk ke
db.tka_wajib dengan kunci id-nya. Paket dengan id yang sudah ada DITIMPA,
jadi skrip ini aman dijalankan berulang kali.

Daftar bab di kepala data-x.js ikut diperbarui: bab yang sudah ada isinya
ditulis rentang pertemuannya, bab yang belum tetap "belum ditulis".

Jalankan setiap kali ada berkas di materi-x/ yang berubah:
    python gabung_materi_x.py
"""
import glob, io, json, os, re, sys

D = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.abspath(__file__))
berkas_data = os.path.join(D, 'data-x.js')
s = io.open(berkas_data, encoding='utf-8').read()

m = re.search(r'^const db = (\{.*\});$', s, re.M)
assert m, "baris 'const db = {...};' tidak ditemukan di data-x.js"
db = json.loads(m.group(1))

n = 0
for path in sorted(glob.glob(os.path.join(D, 'materi-x', 'X_WAJIB_*.json'))):
    for p in json.load(io.open(path, encoding='utf-8'))['paket']:
        pid = p['id']
        assert p['materi']['id'] == pid and p['soal']['id'] == pid, pid
        assert len(p['soal']['questions']) == 10, pid
        db['wajib'] = [x for x in db['wajib'] if x['id'] != pid] + [p['materi']]
        db['tka_wajib'][pid] = p['soal']
        n += 1

db['wajib'].sort(key=lambda x: x['id'])
db['tka_wajib'] = dict(sorted(db['tka_wajib'].items()))
assert [x['id'] for x in db['wajib']] == list(db['tka_wajib']), "materi dan soal tidak sepasang"

# Perbarui daftar bab di kepala berkas.
rentang = {}
for x in db['wajib']:
    rentang.setdefault(x['bab'], []).append(x['id'])

def baris_bab(mb):
    nama = mb.group(1)
    if nama not in rentang:
        return mb.group(0)
    ids = rentang[nama]
    return '// %s%s-%s (%d paket)' % (nama.ljust(53), ids[0], ids[-1], len(ids))

s = re.sub(r'^// (Bab \d+: .+?) {2,}\S.*$', baris_bab, s, flags=re.M)

CATATAN = '// Bab 5 dst. ditulis di materi-x/ dan digabungkan oleh gabung_materi_x.py.'
if CATATAN not in s:
    s = s.replace('-- JANGAN DISUNTING TANGAN.\n',
                  '-- JANGAN DISUNTING TANGAN.\n' + CATATAN + '\n', 1)

m = re.search(r'^const db = (\{.*\});$', s, re.M)   # posisi bergeser setelah kepala diubah
s = s[:m.start(1)] + json.dumps(db, ensure_ascii=False) + s[m.end(1):]
io.open(berkas_data, 'w', encoding='utf-8', newline='\n').write(s)
print("data-x.js diperbarui: %d paket dari materi-x/, total %d pertemuan wajib"
      % (n, len(db['wajib'])))
