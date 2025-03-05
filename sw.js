const CACHE_NAME = "service-worker/v1";

// Install event - triggered once the service worker is registered
self.addEventListener("install", (event) => {
    // Wait until the cache is opened and add the essential files to it
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            // Add specific resources to cache for offline use
            return cache.addAll(["./index.html", "./script.js", "./style.css", "./ponting.avif"]);
        })
    );
});

// Activate event - triggered once the service worker is installed
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            // Delete any old caches that are not the current version (CACHE_NAME)
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME)  // Filter out the current cache name
                    .map((key) => caches.delete(key))   // Delete all other caches except the current one
            );
        })
    );
});

// Fetch event - triggered for every network request
self.addEventListener("fetch", (event) => {
    // Intercept the request and decide how to respond
    event.respondWith(
        fetch(event.request)  // Try to fetch the request from the network
            .then(resp => {
                console.log("Online");  // Log if the network is available
                const clone = resp.clone();  // Clone the response before caching it
                // Open the cache and store the cloned response for future use
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, clone);
                });
                // Return the network response to the client
                return resp;
            })
            // If the network fetch fails (e.g., offline), serve the cached response
            .catch(() => {
                console.log("Offline");  // Log if the network is unavailable
                return caches.match(event.request)  // Match the request in the cache
                    .then((resp) => resp);  // Return the cached response if found
            })
    );
});
