const staticCacheName = 'site-static';
const assets = [
  '/',
  '/index.html',
  '/main.js'
];


self.addEventListener("install", e => {

  e.waitUntil(
    caches.open(staticCacheName)
      .then(cache => {
        console.log('cached assets', assets);
  
        cache.addAll(assets)
      })
      .catch(() => console.log('failed caching', assets))
  );

  console.log('Service worker installed', e)
});

self.addEventListener("activate", e => console.log('Service worker activated', e));

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request)
      .then(cacheRes => cacheRes || fetch(e.request))
  );

  console.log('Service worker fetch', e)
});