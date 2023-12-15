self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('study-v1').then(function(cache) {
            return cache.addAll([
                './',
                './index.html',
                './css/scores.css',
                './css/topbar.css',
                './res/gift.jpg',
                './res/icon/256.svg',
                './res/icon/256.png'
            ])
        })
    )
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request)
        })
    )
})