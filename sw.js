// sw.js

self.addEventListener("install", (event) => {
  console.log("Service Worker Installed 🚀");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker Activated ✅");
  event.waitUntil(self.clients.claim());
});

// Simple Cache for Offline Support
const CACHE_NAME = "tap-tap-cache-v1";

const ASSETS = [
  "/",
  "/index.html",
  "/icon.png",
  "/manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});