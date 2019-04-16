/* eslint-disable */

var cacheName = 'plant-shop';
var filesToCache = [
  '/build/static/js/2.7821fefe.chunk',
  '/build/static/jsmain.ad6b4d2d.chunk',
  '/build/static/js/runtime~main.a8a9905a',
  '/build/static/css/2.197423c0.chunk',
  '/build/static/css/main.a0580fea.chunk',
  '/build/index.html',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});