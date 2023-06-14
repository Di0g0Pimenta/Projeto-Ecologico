// Instale o Service Worker
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('offline-cache').then(function(cache) {
        return cache.addAll([
          // Lista de recursos que você deseja armazenar em cache para acesso offline
          '/Pages/Offline.html'
        ]);
      })
    );
  });
  
  // Intercepte as solicitações de rede
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        // Retorna a resposta em cache se encontrada
        if (response) {
          return response;
        }
        // Caso contrário, faz uma solicitação de rede
        return fetch(event.request).catch(function() {
          // Exibe a página de fallback quando a rede estiver offline
          return caches.match('/offline.html');
        });
      })
    );
  });
  