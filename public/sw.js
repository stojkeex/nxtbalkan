// NXT Balkan Service Worker za Push Obvestila
const CACHE_NAME = "nxt-balkan-v1"
const urlsToCache = ["/", "/favicon/favicon-192x192.png", "/favicon/favicon-512x512.png", "/images/og-image.jpg"]

// Namestitev Service Worker-ja
self.addEventListener("install", (event) => {
  console.log("🎵 NXT Balkan SW: Nameščam...")
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)))
  self.skipWaiting()
})

// Aktivacija Service Worker-ja
self.addEventListener("activate", (event) => {
  console.log("🎵 NXT Balkan SW: Aktiviran")
  event.waitUntil(self.clients.claim())
})

// Push obvestila
self.addEventListener("push", (event) => {
  console.log("🎵 NXT Balkan: Prejeto push obvestilo")

  let notificationData = {
    title: "🎵 NXT Balkan",
    body: "Nova glasba je na voljo!",
    icon: "/favicon/favicon-192x192.png",
    badge: "/favicon/favicon-96x96.png",
    image: "/images/notification-banner.jpg",
    tag: "nxt-balkan-notification",
    requireInteraction: false,
    silent: false,
    vibrate: [200, 100, 200],
    data: {
      url: "/",
      timestamp: Date.now(),
    },
    actions: [
      {
        action: "open",
        title: "🎧 Poslušaj",
        icon: "/favicon/favicon-96x96.png",
      },
      {
        action: "later",
        title: "⏰ Pozneje",
        icon: "/favicon/favicon-96x96.png",
      },
    ],
  }

  if (event.data) {
    try {
      const pushData = event.data.json()
      notificationData = { ...notificationData, ...pushData }
    } catch (e) {
      notificationData.body = event.data.text() || notificationData.body
    }
  }

  event.waitUntil(self.registration.showNotification(notificationData.title, notificationData))
})

// Klik na obvestilo
self.addEventListener("notificationclick", (event) => {
  console.log("🎵 NXT Balkan: Klik na obvestilo")

  event.notification.close()

  if (event.action === "open") {
    event.waitUntil(clients.openWindow(event.notification.data?.url || "/"))
  } else if (event.action === "later") {
    // Pošlji obvestilo čez 1 uro
    setTimeout(() => {
      self.registration.showNotification("🎵 NXT Balkan - Opomnik", {
        body: "Ne pozabi poslušati nove glasbe!",
        icon: "/favicon/favicon-192x192.png",
        tag: "nxt-balkan-reminder",
      })
    }, 3600000) // 1 ura
  } else {
    // Privzeto - odpri glavno stran
    event.waitUntil(clients.openWindow("/"))
  }
})

// Zapiranje obvestila
self.addEventListener("notificationclose", (event) => {
  console.log("🎵 NXT Balkan: Obvestilo zaprto")

  // Analitika - sledenje zaprtim obvestilom
  if (event.notification.data) {
    console.log("Obvestilo zaprto:", event.notification.data)
  }
})

// Background Sync za offline funkcionalnost
self.addEventListener("sync", (event) => {
  if (event.tag === "background-sync") {
    event.waitUntil(doBackgroundSync())
  }
})

function doBackgroundSync() {
  // Sinhroniziraj podatke ko je povezava na voljo
  return fetch("/api/notifications/subscribe")
    .then((response) => response.json())
    .catch((err) => console.log("Sync failed:", err))
}
