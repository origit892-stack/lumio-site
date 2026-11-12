// Lumio 4.1 — service worker. SHELL ONLY: caches static shell files.
// Paths are relative to THIS file (public/) so the app works from any
// subpath (GitHub Pages serves it at /lumio-site/, not /).
const CACHE='lumio-shell-v4.1';const ASSETS=['../','../index.html','../app.mjs','../core.mjs','../study.mjs','../importers.mjs','../connectors.mjs','../config.mjs','../style.css','icon.svg'];self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
