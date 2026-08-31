self.addEventListener('install', (e) => {
    console.log('Nutri Service Worker Installed');
});
self.addEventListener('fetch', (e) => {
    // Basic bypass for now, full offline support can be added later
});
