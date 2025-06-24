import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { title, body, icon, image, url } = await request.json()

    const notificationData = {
      title: title || "🎵 NXT Balkan",
      body: body || "Nova glasba je na voljo!",
      icon: icon || "/favicon/favicon-192x192.png",
      image: image || "/images/notification-banner.jpg",
      badge: "/favicon/favicon-96x96.png",
      tag: "nxt-balkan-music",
      requireInteraction: false,
      vibrate: [200, 100, 200],
      data: {
        url: url || "/",
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

    // V demo verziji samo vrnemo podatke
    // V produkciji bi poslali vsem naročnikom z web-push

    return NextResponse.json({
      success: true,
      message: "Obvestilo pripravljeno za pošiljanje",
      notification: notificationData,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("❌ Napaka pri pošiljanju obvestila:", error)
    return NextResponse.json({ success: false, error: "Napaka pri pošiljanju obvestila" }, { status: 500 })
  }
}
