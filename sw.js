// Service worker Portal Matematika XII
const VERSI = 'gis-math-xii-v5-fixed';
const ISI = ['./', './index.html', './login.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (e) => {
  self.skipWaiting();
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

  if (req.mode === 'navigate') {
    if (url.pathname.includes('login')) {
      e.respondWith(
        fetch(req).catch(() => caches.match('./login.html'))
      );
      return;
    }
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