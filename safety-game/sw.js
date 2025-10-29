
const CACHE_NAME = 'sg-cache-v1';
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/intro.html',
  '/scenarios/scenario-01.html',
  '/css/styles.css',
  '/js/app.js',
  '/js/sw-register.js',
  '/manifest.webmanifest',
  '/assets/images/icons/icon-192.png',
  '/assets/images/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME ? caches.delete(k) : null)))
      .then(() => self.clients.claim())
  );
});

// Stale-while-revalidate for same-origin requests
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (new URL(req.url).origin !== self.location.origin) return; // ignore cross-origin
  event.respondWith(
    caches.match(req).then(cached => {
      const fetchPromise = fetch(req).then(networkRes => {
        // Clone and store if ok
        if(networkRes && networkRes.status === 200 && req.method === 'GET'){
          const resClone = networkRes.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, resClone)).catch(()=>{});
        }
        return networkRes;
      }).catch(()=> cached);
      return cached || fetchPromise;
    })
  );
});
