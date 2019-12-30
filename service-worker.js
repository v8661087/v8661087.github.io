// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = "static-cache-v3";
const DATA_CACHE_NAME = "data-cache-v1";
// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "dist/img/typewriter.jpg",
  "images/icons/icon-144x144.png",
  "images/kuo.png",
  "images/FRONTEND.jpg",
  "images/BACKEND.jpg",
  "images/TOOLS.jpg",
  "images/React-Shopping-Cart.jpg",
  "images/React-Shopping-Cart.gif",
  "images/React-To-Do List.jpg",
  "images/React-To-Do List.gif",
  "images/React-CommentApp.jpg",
  "images/React-CommentApp.gif",
  "images/React-WeatherApp.jpg",
  "images/React-WeatherApp.gif",
  "images/vue-ecommerce-1.jpg",
  "images/vue-ecommerce-2.jpg",
  "images/night-1.jpg",
  "images/night-2.jpg",
  "images/TwitchApi.jpg",
  "images/mate-1.jpg",
  "images/mate-2.jpg",
  "images/mate-3.jpg",
  "images/mate-4.jpg",
  "images/mate-5.jpg",
  "images/photo.jpg",
  "images/github.png",
  "src/reset.css",
  "dist/index.bundle.css",
  "dist/modal.bundle.js",
  "dist/scroll.bundle.js",
  "dist/smooth_scroll.bundle.js",
  "manifest.json"
];
self.addEventListener("install", evt => {
  console.log("[ServiceWorker] Install");
  // CODELAB: Precache static resources here.
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("[ServiceWorker] Pre-caching offline page");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", evt => {
  console.log("[ServiceWorker] Activate");
  // CODELAB: Remove previous cached data from disk.
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("[ServiceWorker] Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", evt => {
  console.log("[ServiceWorker] Fetch", evt.request.url);
  // CODELAB: Add fetch event handler here.
 /* if (evt.request.url.includes('/forecast/')) {
    console.log('[Service Worker] Fetch (data)', evt.request.url);
    evt.respondWith(
        caches.open(DATA_CACHE_NAME).then((cache) => {
          return fetch(evt.request)
              .then((response) => {
                // If the response was good, clone it and store it in the cache.
                if (response.status === 200) {
                  cache.put(evt.request.url, response.clone());
                }
                return response;
              }).catch((err) => {
                // Network request failed, try to get it from the cache.
                return cache.match(evt.request);
              });
        }));
    return;
  }*/
  evt.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(evt.request)
            .then((response) => {
              return response || fetch(evt.request);
            });
      })
  );
});
