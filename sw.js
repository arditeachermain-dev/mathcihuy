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
const VERSI = 'mathcihuy-v20261003_wajib_p15_p21_audited';

// Hanya alamat kanonik -- jangan pernah menambahkan yang berakhiran .html.
const HALAMAN = ['./', './11', './10', './simulasi-akm'];
const ASET = [
  './mathcihuy.css', './vendor.js', './app.js', './app-akhir.js',
  './data-xii.js', './data-xi.js', './data-x.js', './data-students.js', './data-akm.js',
  './manifest.json', './icon-192.png', './icon-512.png', './gis_official_logo.png'
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
  if (pathname === '/10' || pathname === '/10.html') return './10';
  if (pathname === '/simulasi-akm' || pathname === '/simulasi-akm.html') return './simulasi-akm';
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
      // 1. Prioritas Utama (Network-First): Selalu ambil HTML paling mutakhir saat online
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2800);
        const res = await fetch(req, { signal: controller.signal });
        clearTimeout(timeoutId);
        if (res && res.ok && !res.redirected) {
          const salinan = res.clone();
          e.waitUntil(caches.open(VERSI).then((c) => c.put(kunci, salinan)));
          return res;
        }
      } catch (err) {
        // Jaringan timeout, offline, atau sinyal lambat: lanjut ke cache
      }

      // 2. Cache-Fallback: Sajikan salinan offline jika jaringan terputus
      const tersimpan = await caches.match(kunci);
      const sah = tersimpan && !tersimpan.redirected ? tersimpan : null;
      if (sah) return sah;

      // Jaringan mati dan belum pernah tersimpan: sajikan halaman mana pun yang ada
      const cadangan = await caches.match('./');
      if (cadangan && !cadangan.redirected) return cadangan;

      return fetch(req);
    })());
    return;
  }

  // Aset (css/js/gambar): Network-First dengan Cache-Fallback
  // Memastikan pembaruan kode langsung aktif seketika pada refresh pertama saat online,
  // dan tetap 100% berfungsi normal secara offline dari cache.
  e.respondWith(
    fetch(req).then((res) => {
      if (res && res.ok && !res.redirected) {
        const salinan = res.clone();
        caches.open(VERSI).then((c) => c.put(req, salinan));
      }
      return res;
    }).catch(async () => {
      const tersimpan = await caches.match(req);
      if (tersimpan) return tersimpan;
      const cleanUrl = req.url.split('?')[0];
      return await caches.match(cleanUrl);
    })
  );
});
