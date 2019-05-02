importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  workbox.precaching.precacheAndRoute([]);

  workbox.routing.registerRoute(
    /(.*)cdn\.ampproject\.org(.*)/,
    workbox.strategies.staleWhileRevalidate()
  );

  workbox.routing.registerRoute(
    /(.*)platform\.twitter\.com(.*)/,
    workbox.strategies.staleWhileRevalidate()
  );

  workbox.routing.registerRoute(
    /(.*)blog\.liyaodong\.com(.*)/,
    workbox.strategies.staleWhileRevalidate()
  );

  workbox.routing.registerRoute(
    /(.*)pbs\.twimg\.com(.*)/,
    workbox.strategies.staleWhileRevalidate()
  );

  workbox.routing.registerRoute(
    /(.*)image\.liyaodong\.com(.*)/,
    workbox.strategies.staleWhileRevalidate()
  );

  workbox.routing.registerRoute(
    /(.*)cdn\.jsdelivr\.net(.*)/,
    workbox.strategies.staleWhileRevalidate()
  );

  workbox.routing.registerRoute(/(.*)/, args => {
    return articleHandler.handle(args).then(response => {
      if (!response) {
        return caches.match('/offline.html');
      }
      return response;
    });
  });
}
