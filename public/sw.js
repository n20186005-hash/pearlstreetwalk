// Retire only the known former site cache; do not substitute an offline homepage for unknown URLs.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(caches.delete('psm-v1').then(()=>self.registration.unregister()).then(()=>self.clients.claim())));
