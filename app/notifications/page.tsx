"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Bell, Music, Send } from "lucide-react"

export default function NotificationsTestPage() {
  const [title, setTitle] = useState("🎵 Nova pesem!")
  const [body, setBody] = useState("Poslušajte najnovejšo pesem od NXT Balkan umetnikov!")
  const [sending, setSending] = useState(false)

  const sendTestNotification = async () => {
    setSending(true)
    try {
      const response = await fetch("/api/notifications/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          body,
          icon: "/favicon/favicon-192x192.png",
          image: "/images/notification-banner.jpg",
          url: "/",
        }),
      })

      const result = await response.json()

      if (result.success) {
        // Prikaži lokalno obvestilo za test
        if (Notification.permission === "granted") {
          new Notification(title, {
            body,
            icon: "/favicon/favicon-192x192.png",
            tag: "nxt-balkan-test",
          })
        }
        alert("✅ Testno obvestilo poslano!")
      }
    } catch (error) {
      console.error("❌ Napaka:", error)
      alert("❌ Napaka pri pošiljanju obvestila")
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-2xl mx-auto space-y-6 pt-20">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🎵 NXT Balkan Obvestila
          </h1>
          <p className="text-gray-400">Testiraj push obvestila za spletno stran</p>
        </div>

        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-purple-400" />
              Pošlji testno obvestilo
            </CardTitle>
            <CardDescription>Ustvari in pošlji testno push obvestilo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-300 mb-2 block">Naslov obvestila</label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white"
                placeholder="Vnesite naslov..."
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-300 mb-2 block">Vsebina obvestila</label>
              <Textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white"
                placeholder="Vnesite vsebino obvestila..."
                rows={3}
              />
            </div>

            <Button
              onClick={sendTestNotification}
              disabled={sending || !title || !body}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              {sending ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Pošiljam...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Pošlji obvestilo
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Music className="h-5 w-5 text-purple-400" />
              Kako deluje?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-gray-400">
            <p>• Service Worker se registrira v ozadju</p>
            <p>• Push obvestila delujejo tudi ko je spletna stran zaprta</p>
            <p>• Obvestila se prikažejo v sistemskem območju</p>
            <p>• Uporabniki lahko kliknejo na obvestilo za odprtje strani</p>
            <p>• Deluje na vseh modernih brskalnikih in platformah</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
