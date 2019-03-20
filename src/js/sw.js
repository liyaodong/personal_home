importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  workbox.precaching.precacheAndRoute([]);

  workbox.router.registerRoute(
    /(.*)cdn\.ampproject\.org(.*)/,
    workbox.strategies.staleWhileRevalidate()
  );

  workbox.router.registerRoute(
    /(.*)platform\.twitter\.com(.*)/,
    workbox.strategies.staleWhileRevalidate()
  );

  workbox.router.registerRoute(
    /(.*)blog\.liyaodong\.com(.*)/,
    workbox.strategies.staleWhileRevalidate()
  );

  workbox.router.registerRoute(
    /(.*)pbs\.twimg\.com(.*)/,
    workbox.strategies.staleWhileRevalidate()
  );

  workbox.router.registerRoute(
    /(.*)image\.liyaodong\.com(.*)/,
    workbox.strategies.staleWhileRevalidate()
  );

  workbox.router.registerRoute(
    /(.*)cdn\.jsdelivr\.net(.*)/,
    workbox.strategies.staleWhileRevalidate()
  );
}
