"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Bell, Send, Users, BarChart3, Clock, CheckCircle, XCircle, Calendar, ImageIcon, Link, Tag } from "lucide-react"

interface NotificationStats {
  total_subscribers: number
  total_sent: number
  success_rate: number
  recent_notifications: any[]
}

export default function AdminNotificationsPage() {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [icon, setIcon] = useState("/favicon/favicon-192x192.png")
  const [image, setImage] = useState("")
  const [url, setUrl] = useState("/")
  const [tag, setTag] = useState("nxt-balkan")
  const [scheduleFor, setScheduleFor] = useState("")
  const [sending, setSending] = useState(false)
  const [stats, setStats] = useState<NotificationStats | null>(null)
  const [notifications, setNotifications] = useState([])
  const [message, setMessage] = useState("")

  useEffect(() => {
    loadStats()
    loadNotifications()
  }, [])

  const loadStats = async () => {
    try {
      const response = await fetch("/api/push/stats")
      const data = await response.json()
      if (data.success) {
        setStats(data.stats)
      }
    } catch (error) {
      console.error("Failed to load stats:", error)
    }
  }

  const loadNotifications = async () => {
    try {
      const response = await fetch("/api/push/notifications")
      const data = await response.json()
      if (data.success) {
        setNotifications(data.notifications)
      }
    } catch (error) {
      console.error("Failed to load notifications:", error)
    }
  }

  const sendNotification = async () => {
    if (!title || !body) {
      setMessage("❌ Naslov in besedilo sta obvezna")
      return
    }

    setSending(true)
    try {
      const response = await fetch("/api/push/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          body,
          icon,
          image: image || undefined,
          url,
          tag,
          scheduleFor: scheduleFor || undefined,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setMessage(
          scheduleFor
            ? `✅ Obvestilo načrtovano za ${new Date(scheduleFor).toLocaleString()}`
            : `✅ Obvestilo poslano ${result.success_count}/${result.total_sent} naročnikom`,
        )

        // Resetiraj form
        setTitle("")
        setBody("")
        setImage("")
        setScheduleFor("")

        // Osveži statistike
        loadStats()
        loadNotifications()
      } else {
        setMessage(`❌ Napaka: ${result.error}`)
      }
    } catch (error) {
      setMessage("❌ Napaka pri pošiljanju obvestila")
      console.error("Send error:", error)
    } finally {
      setSending(false)
    }
  }

  const sendTestNotification = async () => {
    setSending(true)
    try {
      const response = await fetch("/api/push/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "🧪 Test obvestilo",
          body: "To je testno obvestilo iz admin panela",
          icon: "/favicon/favicon-192x192.png",
          url: "/admin/notifications",
        }),
      })

      const result = await response.json()
      setMessage(
        result.success ? `✅ Test obvestilo poslano ${result.success_count} naročnikom` : `❌ Napaka: ${result.error}`,
      )
    } catch (error) {
      setMessage("❌ Napaka pri pošiljanju testnega obvestila")
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-6xl mx-auto space-y-6 pt-20">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🎵 NXT Balkan Admin Panel
          </h1>
          <p className="text-gray-400">Upravljanje push obvestil</p>
        </div>

        {message && (
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <span>{message}</span>
                <Button variant="ghost" size="sm" onClick={() => setMessage("")} className="text-gray-400">
                  ✕
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Statistike */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-2xl font-bold text-white">{stats.total_subscribers}</p>
                    <p className="text-sm text-gray-400">Naročniki</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Send className="h-5 w-5 text-green-400" />
                  <div>
                    <p className="text-2xl font-bold text-white">{stats.total_sent}</p>
                    <p className="text-sm text-gray-400">Poslano</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="text-2xl font-bold text-white">{stats.success_rate}%</p>
                    <p className="text-sm text-gray-400">Uspešnost</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-orange-400" />
                  <div>
                    <p className="text-2xl font-bold text-white">
                      {notifications.filter((n) => n.status === "scheduled").length}
                    </p>
                    <p className="text-sm text-gray-400">Načrtovano</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pošlji obvestilo */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-purple-400" />
                Novo obvestilo
              </CardTitle>
              <CardDescription>Ustvari in pošlji push obvestilo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Naslov *</label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="🎵 Nova pesem je na voljo!"
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Besedilo *</label>
                <Textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Poslušajte najnovejšo pesem od naših umetnikov..."
                  className="bg-gray-800 border-gray-700 text-white"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block flex items-center gap-1">
                    <ImageIcon className="h-4 w-4" />
                    Ikona
                  </label>
                  <Input
                    value={icon}
                    onChange={(e) => setIcon(e.target.value)}
                    placeholder="/favicon/favicon-192x192.png"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block flex items-center gap-1">
                    <Link className="h-4 w-4" />
                    URL
                  </label>
                  <Input
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="/"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Slika (opcijsko)</label>
                  <Input
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block flex items-center gap-1">
                    <Tag className="h-4 w-4" />
                    Tag
                  </label>
                  <Input
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    placeholder="nxt-balkan"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Načrtovano pošiljanje (opcijsko)
                </label>
                <Input
                  type="datetime-local"
                  value={scheduleFor}
                  onChange={(e) => setScheduleFor(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={sendNotification}
                  disabled={sending || !title || !body}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  {sending ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      {scheduleFor ? "Načrtovanje..." : "Pošiljam..."}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      {scheduleFor ? "Načrtuj" : "Pošlji"}
                    </>
                  )}
                </Button>

                <Button
                  onClick={sendTestNotification}
                  disabled={sending}
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800"
                >
                  🧪 Test
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Zgodovina obvestil */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-400" />
                Zgodovina obvestil
              </CardTitle>
              <CardDescription>Zadnja poslana obvestila</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {notifications.length === 0 ? (
                  <p className="text-gray-400 text-center py-4">Ni poslanih obvestil</p>
                ) : (
                  notifications.slice(0, 10).map((notification: any) => (
                    <div key={notification.id} className="p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-white text-sm">{notification.title}</h4>
                          <p className="text-xs text-gray-400 mt-1">{notification.body}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge
                              variant={
                                notification.status === "sent"
                                  ? "default"
                                  : notification.status === "failed"
                                    ? "destructive"
                                    : notification.status === "scheduled"
                                      ? "secondary"
                                      : "outline"
                              }
                              className="text-xs"
                            >
                              {notification.status === "sent" && <CheckCircle className="h-3 w-3 mr-1" />}
                              {notification.status === "failed" && <XCircle className="h-3 w-3 mr-1" />}
                              {notification.status === "scheduled" && <Clock className="h-3 w-3 mr-1" />}
                              {notification.status}
                            </Badge>
                            <span className="text-xs text-gray-500">
                              {notification.success_count}/{notification.sent_count}
                            </span>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">
                          {new Date(notification.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
