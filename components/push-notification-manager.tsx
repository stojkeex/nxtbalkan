"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Bell, Music, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function PushNotificationManager() {
  const [isSupported, setIsSupported] = useState(false)
  const [permission, setPermission] = useState<NotificationPermission>("default")
  const [subscription, setSubscription] = useState<PushSubscription | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isInStandaloneMode, setIsInStandaloneMode] = useState(false)

  useEffect(() => {
    // Preveri iOS in PWA status
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const standalone = window.matchMedia("(display-mode: standalone)").matches
    setIsIOS(iOS)
    setIsInStandaloneMode(standalone)

    // Preveri podporo za push obvestila
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true)
      setPermission(Notification.permission)

      // Prikaži prompt po 10 sekundah, če obvestila niso omogočena
      const timer = setTimeout(() => {
        if (Notification.permission === "default") {
          setShowPrompt(true)
        }
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [])

  const urlBase64ToUint8Array = (base64String: string) => {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/")
    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }

  const subscribeToPush = async () => {
    try {
      const registration = await navigator.serviceWorker.ready

      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          "BNXzwK8Xh9JkdWWOYKGHQqL8r5t6y7u8i9o0p1q2w3e4r5t6y7u8i9o0p1q2w3e4r5t6y7u8i9o0p1q2w3e4",
        ),
      })

      setSubscription(sub)

      // Pošlji subscription na strežnik
      await fetch("/api/notifications/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sub),
      })

      console.log("✅ Uspešno naročen na NXT Balkan obvestila!")
      setShowPrompt(false)

      // Pošlji dobrodošlo obvestilo
      setTimeout(() => {
        new Notification("🎵 NXT Balkan", {
          body: "Uspešno ste se naročili na obvestila! Obveščali vas bomo o novi glasbi.",
          icon: "/favicon/favicon-192x192.png",
        })
      }, 1000)
    } catch (error) {
      console.error("❌ Napaka pri naročanju:", error)
    }
  }

  const requestPermission = async () => {
    const permission = await Notification.requestPermission()
    setPermission(permission)

    if (permission === "granted") {
      await subscribeToPush()
    } else {
      setShowPrompt(false)
    }
  }

  if (!isSupported || permission === "denied") {
    return null
  }

  // Če je iOS in ni v PWA načinu, ne prikaži prompt
  if (isIOS && !isInStandaloneMode) {
    return null
  }

  return (
    <>
      {showPrompt && permission === "default" && (
        <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-4">
          <Card className="bg-gradient-to-r from-purple-900/90 to-pink-900/90 border-purple-500/20 backdrop-blur-sm max-w-sm">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full">
                  <Music className="h-5 w-5 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">🎵 Ostanite povezani z NXT Balkan</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Omogočite obvestila za najnovejše pesmi, ekskluzivne izdaje in novice naših umetnikov.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      onClick={requestPermission}
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      <Bell className="h-4 w-4 mr-1" />
                      Omogoči
                    </Button>
                    <Button
                      onClick={() => setShowPrompt(false)}
                      size="sm"
                      variant="ghost"
                      className="text-gray-400 hover:text-white"
                    >
                      Pozneje
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={() => setShowPrompt(false)}
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-white p-1"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
