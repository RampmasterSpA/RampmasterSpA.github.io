// public/sw.js
const CACHE_NAME = 'rampmaster-v2026-1'; // Incrementamos versión para forzar actualización

// Instalación: Forzar espera y tomar control
self.addEventListener('install', (event) => {
  self.skipWaiting(); // El nuevo SW se activa inmediatamente
});

// Activación: Limpiar cachés antiguas y reclamar clientes
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(), // Tomar control de las pestañas abiertas
      caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Eliminando caché antigua:', key);
            return caches.delete(key);
          }
        }));
      })
    ])
  );
});

// Intercepción de peticiones
self.addEventListener('fetch', (event) => {
  // Solo interceptar peticiones GET
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // 1. Estrategia Network-First para HTML (Navegación)
  // Asegura que el usuario vea siempre los precios y textos actualizados.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Si la red responde, actualizamos la caché y devolvemos
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // Si falla la red (offline), devolvemos lo que haya en caché
          return caches.match(event.request);
        })
    );
    return;
  }

  // 2. Estrategia Cache-First para Assets Estáticos (Imágenes, Fuentes, Scripts)
  // Prioriza velocidad para recursos que cambian poco.
  if (url.pathname.match(/\.(png|jpg|jpeg|svg|woff2|css|js|json)$/)) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request).then((response) => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        });
      })
    );
    return;
  }

  // 3. Fallback por defecto
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
