import { type NextRequest, NextResponse } from "next/server"
import webpush from "web-push"
import { supabaseAdmin } from "@/lib/supabase"

// Nastavi VAPID ključe
webpush.setVapidDetails(
  `mailto:${process.env.VAPID_EMAIL}`,
  process.env.VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!,
)

export async function POST(request: NextRequest) {
  try {
    const {
      title,
      body,
      icon,
      image,
      url,
      tag,
      targetEndpoint, // Za pošiljanje specifičnemu uporabniku
      scheduleFor, // Za scheduled obvestila
    } = await request.json()

    // Validacija
    if (!title || !body) {
      return NextResponse.json({ success: false, error: "Title and body are required" }, { status: 400 })
    }

    // Ustvari notification zapis
    const { data: notification, error: notificationError } = await supabaseAdmin
      .from("push_notifications")
      .insert({
        title,
        body,
        icon: icon || "/favicon/favicon-192x192.png",
        image,
        url: url || "/",
        tag: tag || "nxt-balkan",
        scheduled_for: scheduleFor,
        status: scheduleFor ? "scheduled" : "sending",
      })
      .select()
      .single()

    if (notificationError) {
      console.error("❌ Failed to create notification:", notificationError)
      return NextResponse.json({ success: false, error: "Failed to create notification" }, { status: 500 })
    }

    // Če je scheduled, ne pošlji zdaj
    if (scheduleFor) {
      return NextResponse.json({
        success: true,
        message: "Notification scheduled successfully",
        notification_id: notification.id,
        scheduled_for: scheduleFor,
      })
    }

    // Pridobi naročnike
    let subscriptionsQuery = supabaseAdmin.from("push_subscriptions").select("*").eq("is_active", true)

    // Če je targetEndpoint, pošlji samo temu uporabniku
    if (targetEndpoint) {
      subscriptionsQuery = subscriptionsQuery.eq("endpoint", targetEndpoint)
    }

    const { data: subscriptions, error: subscriptionsError } = await subscriptionsQuery

    if (subscriptionsError) {
      console.error("❌ Failed to get subscriptions:", subscriptionsError)
      return NextResponse.json({ success: false, error: "Failed to get subscriptions" }, { status: 500 })
    }

    if (!subscriptions || subscriptions.length === 0) {
      return NextResponse.json({
        success: false,
        error: "No active subscriptions found",
      })
    }

    // Pripravi payload
    const payload = JSON.stringify({
      title: `${title} • NXT Balkan`,
      body,
      icon: icon || "/favicon/favicon-192x192.png",
      image,
      badge: "/favicon/favicon-96x96.png",
      tag: tag || "nxt-balkan",
      requireInteraction: false,
      silent: false,
      vibrate: [200, 100, 200],
      data: {
        url: url || "/",
        timestamp: Date.now(),
        notificationId: notification.id,
      },
      actions: [
        {
          action: "open",
          title: "🎧 Odpri",
          icon: "/favicon/favicon-96x96.png",
        },
        {
          action: "later",
          title: "⏰ Pozneje",
          icon: "/favicon/favicon-96x96.png",
        },
      ],
    })

    // Pošlji obvestila
    let successCount = 0
    let errorCount = 0
    const deliveryLogs = []

    console.log(`🚀 Sending notification to ${subscriptions.length} subscribers...`)

    for (const subscription of subscriptions) {
      try {
        const pushSubscription = {
          endpoint: subscription.endpoint,
          keys: {
            p256dh: subscription.p256dh,
            auth: subscription.auth,
          },
        }

        await webpush.sendNotification(pushSubscription, payload)
        successCount++

        deliveryLogs.push({
          notification_id: notification.id,
          subscription_id: subscription.id,
          status: "sent",
        })

        console.log(`✅ Sent to: ${subscription.endpoint.substring(0, 50)}...`)
      } catch (error: any) {
        errorCount++
        console.error(`❌ Failed to send to ${subscription.endpoint.substring(0, 50)}...:`, error.message)

        deliveryLogs.push({
          notification_id: notification.id,
          subscription_id: subscription.id,
          status: "failed",
          error_message: error.message,
        })

        // Če je subscription neveljaven, ga deaktiviraj
        if (error.statusCode === 410 || error.statusCode === 404) {
          await supabaseAdmin.from("push_subscriptions").update({ is_active: false }).eq("id", subscription.id)
        }
      }
    }

    // Shrani delivery logs
    if (deliveryLogs.length > 0) {
      await supabaseAdmin.from("push_delivery_logs").insert(deliveryLogs)
    }

    // Posodobi notification statistike
    await supabaseAdmin
      .from("push_notifications")
      .update({
        sent_count: subscriptions.length,
        success_count: successCount,
        error_count: errorCount,
        sent_at: new Date().toISOString(),
        status: errorCount === 0 ? "sent" : "failed",
      })
      .eq("id", notification.id)

    console.log(`📊 Notification sent: ${successCount} success, ${errorCount} errors`)

    return NextResponse.json({
      success: true,
      message: "Notifications sent successfully",
      notification_id: notification.id,
      total_sent: subscriptions.length,
      success_count: successCount,
      error_count: errorCount,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("❌ Send notification error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
