const CACHE_NAME = "radio-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/Assets/Styles/boot.css",
    "/Assets/Styles/style1.css",
    "/Assets/jquery.js",
    "/icon-192x192.png",
    "/icon-512x512.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
