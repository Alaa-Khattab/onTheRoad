const cacheName = 'cache-1'

const pathsToCache = [
  '/',
  '/bundle.js',
  '/style.css',
  '/responsive.css'
]

// Runs when a service worker installs!
self.addEventListener(
  'install',
  event =>
    event.waitUntil(
      caches.open(cacheName)
      .then(
        cache =>
          cache.addAll(pathsToCache)
      )
    )
)

// Clears old cache if a new service worker activates!
self.addEventListener(
  'activate',
  event => (
    event.waitUntil(
      caches.keys()
      .then(
        cacheKeys =>
          Promise.all(
            cacheKeys
            .filter(
              key =>
                key !== cacheName
            )
            .map(
              key =>
                caches.delete(key)
            )
          )
      )
    ),
    self.clients.claim()
  )
)

// Intercepts fetches if there is a match in the cache!
self.addEventListener(
  'fetch',
  event =>
    event.respondWith(
      fetch(event.request.url)
      .catch(
        err =>
          // If it fails, look in the cache!
          caches.match(event.request)
      )
    )
)
