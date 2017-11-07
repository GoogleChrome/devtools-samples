self.addEventListener('install', () => {
  console.log('Install install install');
  self.skipWaiting();
});

self.addEventListener('push', (event) => {
  const title = 'Custom Push Notifications';
  const options = {
    body: event.data.text()
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('sync', event => console.log(event.tag));
