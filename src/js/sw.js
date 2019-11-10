importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
);
if (workbox) {
    workbox.precaching.precacheAndRoute([]);

    const registStaleWhileRevalidate = regex => {
        workbox.routing.registerRoute(
            regex,
            workbox.strategies.staleWhileRevalidate()
        );
    };

    const routeThatNeedCache = [
        /(.*)cdn\.ampproject\.org(.*)/,
        /(.*)platform\.twitter\.com(.*)/,
        /(.*)blog\.liyaodong\.com(.*)/,
        /(.*)pbs\.twimg\.com(.*)/,
        /(.*)image\.liyaodong\.com(.*)/,
        /(.*)cdn\.jsdelivr\.net(.*)/,
    ];

    routeThatNeedCache.forEach(registStaleWhileRevalidate);

    addEventListener('message', (event) => {
        if (event.data && event.data.type === 'SKIP_WAITING') {
            skipWaiting();
        }
    });
}
