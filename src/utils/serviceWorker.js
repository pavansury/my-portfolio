// This file handles service worker registration and unregistration

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

// Only register service worker in production
export function register() {
  if (import.meta.env.PROD && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = '/service-worker.js';
      
      navigator.serviceWorker.register(swUrl).then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }).catch(error => {
        console.error('Error during service worker registration:', error);
      });
    });
  } else {
    // In development, ensure any existing service workers are unregistered
    unregister();
  }
}

// Call unregister immediately to clean up any existing service workers
if (import.meta.env.DEV) {
  unregister();
}
