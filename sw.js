// Service worker Portal Matematika XII.
// Strategi: cache-first untuk kerangka aplikasi (satu berkas HTML mandiri
// berisi seluruh soal, rumus, font, dan ikon), sehingga portal terbuka penuh
// tanpa jaringan. Pembaruan diunduh di latar dan baru dipakai setelah guru
// menyetujui muat ulang.
const VERSI = 'gis-math-xii-1b5a56c83de6';
const ISI = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSI).then((c) => c.addAll(ISI)).catch(() => {}));
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

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Navigasi: pakai simpanan lebih dulu supaya portal tetap terbuka saat
  // jaringan sekolah mati, lalu segarkan simpanan di latar.
  if (req.mode === 'navigate') {
    e.respondWith(
      caches.match('./index.html').then((tersimpan) => {
        const dariJaringan = fetch(req).then((res) => {
          if (res && res.ok) caches.open(VERSI).then((c) => c.put('./index.html', res.clone()));
          return res;
        }).catch(() => tersimpan);
        return tersimpan || dariJaringan;
      })
    );
    return;
  }

  e.respondWith(
    caches.match(req).then((tersimpan) => {
      if (tersimpan) return tersimpan;
      return fetch(req).then((res) => {
        if (res && res.ok && res.type === 'basic') {
          const salinan = res.clone();
          caches.open(VERSI).then((c) => c.put(req, salinan));
        }
        return res;
      }).catch(() => tersimpan);
    })
  );
});
