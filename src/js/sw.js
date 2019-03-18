importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded`);

  workbox.precaching.precacheAndRoute([]);

  self.addEventListener('install', event => {
    const urls = [
      'https://cdn.ampproject.org/v0.js',
    ];
    const cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(urls)));
  });
} else {
  console.log(`Boo! Workbox didn't load`);
}
