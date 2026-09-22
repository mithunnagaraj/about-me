// The portfolio does not currently use offline caching, but this endpoint
// safely retires any service-worker registration left by an earlier build.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", () => {
  // Network-first behavior keeps the site aligned with the latest deployment.
});
