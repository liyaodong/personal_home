module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "**/*.{html,ico,png,svg,jpg,css,js}",
    "manifest.webmanifest"
  ],
  "swDest": "sw.js",
  "swSrc": "src/js/sw.js",
  "globIgnores": [
    "./workbox-config.js"
  ],
};
