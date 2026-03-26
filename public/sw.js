const CACHE_VERSION = 'v2'
const STATIC_CACHE = `vivabem-static-${CACHE_VERSION}`
const DYNAMIC_CACHE = `vivabem-dynamic-${CACHE_VERSION}`

const STATIC_ASSETS = [
    '/manifest.json',
    '/favicon.svg',
    '/images/logo.svg',
    '/images/og-image.svg',
]

const CACHE_STRATEGIES = {
    static: 'cache-first',
    dynamic: 'stale-while-revalidate',
    api: 'network-first',
}

// Install event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then((cache) => {
            return cache.addAll(STATIC_ASSETS)
        })
    )
    self.skipWaiting()
})

// Activate event
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                        return caches.delete(cacheName)
                    }
                })
            )
        })
    )
    self.clients.claim()
})

// Fetch event
self.addEventListener('fetch', (event) => {
    const { request } = event
    const url = new URL(request.url)

    // Skip non-GET requests
    if (request.method !== 'GET') {
        return
    }

    // Skip chrome-extension and other non-http requests
    if (!url.protocol.startsWith('http')) {
        return
    }

    // Never cache Next.js internals or dev/HMR assets.
    if (
        url.pathname.startsWith('/_next/') ||
        url.pathname.startsWith('/__nextjs') ||
        url.searchParams.has('v')
    ) {
        return
    }

    // Keep navigation fresh and avoid serving stale HTML shells.
    if (request.mode === 'navigate') {
        event.respondWith(handleNavigationRequest(request))
        return
    }

    // Handle different types of requests
    if (request.destination === 'image') {
        event.respondWith(handleImageRequest(request))
    } else if (url.pathname.startsWith('/api/')) {
        event.respondWith(handleApiRequest(request))
    } else if (STATIC_ASSETS.includes(url.pathname)) {
        event.respondWith(handleStaticRequest(request))
    } else {
        event.respondWith(handleDynamicRequest(request))
    }
})

// Cache-first strategy for images
async function handleImageRequest(request) {
    const cache = await caches.open(DYNAMIC_CACHE)
    const cachedResponse = await cache.match(request)

    if (cachedResponse) {
        return cachedResponse
    }

    try {
        const networkResponse = await fetch(request)
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone())
        }
        return networkResponse
    } catch (error) {
        // Return a placeholder image if offline
        return new Response(
            '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect fill="#f3f4f6" width="400" height="300"/><text fill="#9ca3af" font-family="sans-serif" font-size="14" x="50%" y="50%" text-anchor="middle" dy=".3em">Imagem não disponível</text></svg>',
            { headers: { 'Content-Type': 'image/svg+xml' } }
        )
    }
}

// Network-first strategy for API calls
async function handleApiRequest(request) {
    try {
        const networkResponse = await fetch(request)
        if (networkResponse.ok) {
            const cache = await caches.open(DYNAMIC_CACHE)
            cache.put(request, networkResponse.clone())
        }
        return networkResponse
    } catch (error) {
        const cache = await caches.open(DYNAMIC_CACHE)
        const cachedResponse = await cache.match(request)

        if (cachedResponse) {
            return cachedResponse
        }

        return new Response(
            JSON.stringify({ error: 'Offline', message: 'Você está offline. Tente novamente quando a conexão for restabelecida.' }),
            {
                status: 503,
                headers: { 'Content-Type': 'application/json' }
            }
        )
    }
}

// Cache-first strategy for static assets
async function handleStaticRequest(request) {
    const cache = await caches.open(STATIC_CACHE)
    const cachedResponse = await cache.match(request)

    if (cachedResponse) {
        return cachedResponse
    }

    try {
        const networkResponse = await fetch(request)
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone())
        }
        return networkResponse
    } catch (error) {
        return new Response('Offline', { status: 503 })
    }
}

// Network-first strategy for navigations/pages.
async function handleNavigationRequest(request) {
    const cache = await caches.open(DYNAMIC_CACHE)

    try {
        const networkResponse = await fetch(request)
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone())
        }
        return networkResponse
    } catch (error) {
        const cachedResponse = await cache.match(request)

        if (cachedResponse) {
            return cachedResponse
        }

        return Response.error()
    }
}

// Stale-while-revalidate strategy for dynamic content
async function handleDynamicRequest(request) {
    const cache = await caches.open(DYNAMIC_CACHE)
    const cachedResponse = await cache.match(request)

    const networkResponsePromise = fetch(request).then((networkResponse) => {
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone())
        }
        return networkResponse
    }).catch(() => null)

    return cachedResponse || networkResponsePromise || Response.error()
}

// Background sync for form submissions
self.addEventListener('sync', (event) => {
    if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundSync())
    }
})

async function doBackgroundSync() {
    // Handle background sync for form submissions
    console.log('Background sync triggered')
}

// Push notifications
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'Nova atualização disponível',
        icon: '/images/logo.svg',
        badge: '/images/logo.svg',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            { action: 'explore', title: 'Ver detalhes' },
            { action: 'close', title: 'Fechar' }
        ]
    }

    event.waitUntil(
        self.registration.showNotification('VivaBem Saúde', options)
    )
})

// Notification click
self.addEventListener('notificationclick', (event) => {
    event.notification.close()

    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/')
        )
    }
})