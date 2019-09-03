importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
);

if (workbox) {
    workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "e44da5943fc83e50b623b8e19eed373e"
  },
  {
    "url": "disqus.html",
    "revision": "7de433892759b5938bbbcbad9d888590"
  },
  {
    "url": "favicon.ico",
    "revision": "d80a640a8b76b59614ee6b4705bd8497"
  },
  {
    "url": "gitalk.html",
    "revision": "9a04f2bc146073759f288ab72d65d4fb"
  },
  {
    "url": "images/avatar.png",
    "revision": "fdd9ee6e0813043accca50e0e64b2bd0"
  },
  {
    "url": "images/back.svg",
    "revision": "f16d1bbdbdd8628fd88d4ac221132158"
  },
  {
    "url": "images/beer.jpg",
    "revision": "9468c783dff5f9cf6cc13a03aa97d6a8"
  },
  {
    "url": "images/bg.jpg",
    "revision": "9115fce86c1c669120e2f33587dbee11"
  },
  {
    "url": "images/cat.jpg",
    "revision": "028fe3a87c9d4b1f2c7ab458374231c7"
  },
  {
    "url": "images/house.jpg",
    "revision": "fd4265aca23e60764ed07f3ffa9b6a09"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "80017350757af7257af3b28db5017773"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "344a93cde49eafac02f8cb9747b40f4f"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "1562bf901c0a770e25af8ac9ba6eb3d6"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "2a8789e751495aba76b0da4019aa3d5a"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "fae51583d6de07cc70dcf4b98fb7c31d"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "68727a02f9ff37476034daa95e7faa02"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "a404403b6a87d12a8ae5ee8cad1da3f7"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "215e3efbc4fdf1e017fc090cdfc5cb40"
  },
  {
    "url": "images/reading.jpg",
    "revision": "d75884093cec29c4d9be3ad9e2623c8c"
  },
  {
    "url": "index_pc.html",
    "revision": "5f6e748375daf5ee7623716a7e3bb933"
  },
  {
    "url": "index.html",
    "revision": "e64da323fb710c3ceb06e0efc2d023bb"
  },
  {
    "url": "offline.html",
    "revision": "2252fbec8c99cba368fce98bc8bdb521"
  },
  {
    "url": "src/css/app.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "src/js/app.js",
    "revision": "61b9f3c68f54084b7198671f4276fe3b"
  },
  {
    "url": "src/js/dji.js",
    "revision": "b662c78bf9ca0c7f422d5de645c5d84e"
  },
  {
    "url": "workbox-config.js",
    "revision": "d3ec773c007395ff9e6ae74acca436f9"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "224ab9b4518b741a14e031d128b9f11e"
  }
]);

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
}
