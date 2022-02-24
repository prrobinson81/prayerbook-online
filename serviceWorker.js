const staticPrayerBookOnline = "dev-pbo-site-v1"
const assets = [
    "./",
    "./favicon.ico",
    "./favicon.svg",
    "./index.html",
    "./css/style.css",
    "./js/app.js",
    "./images/EucharistElementsHeader-noFont.svg",
    "./services/The-Lords-Supper-or-Holy-Communion.html",
]

self.oninstall = function(event) {
    event.waitUntil(
        caches.open(staticPrayerBookOnline).then(function(cache) {
            return cache.addAll(assets)
        })
    );
}

self.onactivate = function(event) {
    var keepList = [staticPrayerBookOnline];

    event.waitUntil(
        caches.keys().then(function(cacheNameList) {
            return Promise.all(cacheNameList.map(function(cacheName) {
                if(keepList.indexOf(cacheName) === -1) {
                    return caches.delete(cacheName);
                }
            }));
        })
    );
}

self.onfetch = function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            console.log(event.request.url);
            return response || fetch(event.request).then(function(response) {
                return caches.open(staticPrayerBookOnline).then(function(cache) {
                    cache.put(event.request, response.clone());
                    return response;
                }).catch(() => {
                    return caches.match('./fallback.html');
                })
            });
        })
    );
}