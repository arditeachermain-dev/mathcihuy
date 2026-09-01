// Service worker Math Cihuy.
//
// Portal ini punya satu halaman per tingkat -- kelas XII di '/', kelas XI di
// '/11' -- yang berbagi berkas kode (mathcihuy.css, vendor.js, app.js,
// app-akhir.js). Yang berbeda hanya berkas datanya.
//
// Dua jebakan yang sudah pernah menggigit dan sengaja dijaga di sini:
//
// 1. Versi lama menjawab SETIAP navigasi dengan './index.html'. Sejak ada lebih
//    dari satu halaman, itu keliru: membuka '/11' akan menyajikan portal kelas
//    XII. Sekarang tiap alamat disimpan dan disajikan menurut alamatnya sendiri.
//
// 2. Cloudflare Pages membuang akhiran .html: '/11.html' dipantulkan (308) ke
//    '/11'. Kalau yang disimpan adalah alamat ber-.html, isi cache-nya berupa
//    respons hasil pantulan -- dan peramban MENOLAK respons semacam itu untuk
//    permintaan navigasi, sehingga halaman gagal terbuka sama sekali. Karena
//    itu yang disimpan hanya alamat kanonik ('/' dan '/11'), dan respons yang
//    ternyata hasil pantulan tidak pernah dipakai untuk navigasi.
const VERSI = 'mathcihuy-v1788284648';

// Hanya alamat kanonik -- jangan pernah menambahkan yang berakhiran .html.
const HALAMAN = ['./', './11'];
const ASET = [
  './mathcihuy.css', './vendor.js', './app.js', './app-akhir.js',
  './data-xii.js', './data-xi.js',
  './manifest.json', './icon-192.png', './icon-512.png'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(VERSI).then((c) =>
      // Satu berkas yang gagal tidak boleh menggagalkan seluruh pemasangan,
      // jadi disimpan satu per satu, bukan lewat addAll.
      Promise.all(HALAMAN.concat(ASET).map((u) =>
        fetch(u, { redirect: 'follow' })
          .then((res) => (res && res.ok && !res.redirected) ? c.put(u, res) : null)
          .catch(() => null)
      ))
    ).catch(() => {})
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((k) => Promise.all(k.filter((n) => n !== VERSI).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (e) => {
  if (e.data === 'lewati-tunggu') self.skipWaiting();
});

// Alamat mana pun yang diketik, petakan ke kunci simpanan yang kanonik.
function kunciHalaman(pathname) {
  if (pathname === '/' || pathname === '/index.html' || pathname === '/index') return './';
  if (pathname === '/11' || pathname === '/11.html') return './11';
  return null;
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    const kunci = kunciHalaman(url.pathname);
    if (!kunci) return;                       // alamat lain: biarkan apa adanya
    e.respondWith((async () => {
      const tersimpan = await caches.match(kunci);
      // Respons hasil pantulan tidak sah untuk navigasi -- jangan dipakai.
      const sah = tersimpan && !tersimpan.redirected ? tersimpan : null;
      if (sah) {
        // Segarkan simpanan di latar, tanpa menahan pembukaan halaman.
        e.waitUntil(fetch(req).then((res) => {
          if (res && res.ok && !res.redirected) {
            return caches.open(VERSI).then((c) => c.put(kunci, res.clone()));
          }
        }).catch(() => {}));
        return sah;
      }
      try {
        const res = await fetch(req);
        if (res && res.ok && !res.redirected) {
          const salinan = res.clone();
          e.waitUntil(caches.open(VERSI).then((c) => c.put(kunci, salinan)));
        }
        return res;
      } catch (err) {
        // Jaringan mati dan belum pernah tersimpan: sajikan halaman mana pun
        // yang ada supaya portal tidak benar-benar kosong.
        const cadangan = await caches.match('./');
        if (cadangan && !cadangan.redirected) return cadangan;
        throw err;
      }
    })());
    return;
  }

  // Aset (css/js/gambar): sajikan dari simpanan supaya cepat dan tetap jalan
  // tanpa jaringan, TAPI selalu ambil versi baru di latar. Tanpa ini, berkas
  // kode yang sudah tersimpan akan dipakai selamanya dan perbaikan tidak
  // pernah sampai ke perangkat siswa. Pembaruan terpakai pada pembukaan
  // berikutnya.
  e.respondWith(
    caches.match(req).then((tersimpan) => {
      const dariJaringan = fetch(req).then((res) => {
        if (res && res.ok && res.type === 'basic' && !res.redirected) {
          const salinan = res.clone();
          caches.open(VERSI).then((c) => c.put(req, salinan));
        }
        return res;
      }).catch(() => tersimpan);
      if (tersimpan) { e.waitUntil(dariJaringan.catch(() => {})); return tersimpan; }
      return dariJaringan;
    })
  );
});
