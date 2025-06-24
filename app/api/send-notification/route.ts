import { type NextRequest, NextResponse } from "next/server"
import webpush from "web-push"

// VAPID ključi (v produkciji uporabi environment variable)
const vapidKeys = {
  publicKey: "BEl62iUYgUivxIkv69yViEuiBIa40HI80NqIUHI80NqIUHI80NqIUHI80NqIUHI80NqIUHI80NqI",
  privateKey: "your-private-vapid-key-here",
}

webpush.setVapidDetails("mailto:your-email@example.com", vapidKeys.publicKey, vapidKeys.privateKey)

// Simulacija shranjenih naročnin (v produkciji uporabi bazo)
const subscriptions: any[] = []

export async function POST(request: NextRequest) {
  try {
    const { title, body, icon } = await request.json()

    const payload = JSON.stringify({
      title: title || "Novo obvestilo",
      body: body || "Imate novo sporočilo",
      icon: icon || "/icon-192x192.png",
      badge: "/badge-72x72.png",
      timestamp: Date.now(),
      requireInteraction: true,
    })

    // V demo verziji pošljemo obvestilo direktno v brskalnik
    // V produkciji bi poslali vsem naročnikom

    return NextResponse.json({
      success: true,
      message: "Obvestilo poslano",
      payload: JSON.parse(payload),
    })
  } catch (error) {
    console.error("Napaka pri pošiljanju:", error)
    return NextResponse.json({ success: false, error: "Napaka pri pošiljanju obvestila" }, { status: 500 })
  }
}
