importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded`);

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
    "url": "images/reading.jpg",
    "revision": "d75884093cec29c4d9be3ad9e2623c8c"
  },
  {
    "url": "index_pc.html",
    "revision": "5f6e748375daf5ee7623716a7e3bb933"
  },
  {
    "url": "index.html",
    "revision": "b928c623e5e015297573590a147a4148"
  },
  {
    "url": "src/css/app.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "src/js/app.js",
    "revision": "3aa7706634ca441e801e33d341a85f1d"
  },
  {
    "url": "src/js/dji.js",
    "revision": "b662c78bf9ca0c7f422d5de645c5d84e"
  }
]);
} else {
  console.log(`Boo! Workbox didn't load`);
}
