const staticPrayerBookOnline = "dev-pbo-site-v1"
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "js/app.js",
    "images/EucharistElements.svg",
    "services/The-Lords-Supper-or-Holy-Communion.html",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticPrayerBookOnline).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})