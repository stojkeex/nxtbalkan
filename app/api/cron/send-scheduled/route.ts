import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function GET() {
  try {
    // Pridobi scheduled obvestila, ki so pripravljena za pošiljanje
    const now = new Date().toISOString()

    const { data: scheduledNotifications, error } = await supabaseAdmin
      .from("push_notifications")
      .select("*")
      .eq("status", "scheduled")
      .lte("scheduled_for", now)

    if (error) throw error

    if (!scheduledNotifications || scheduledNotifications.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No scheduled notifications to send",
        processed: 0,
      })
    }

    let processed = 0

    // Pošlji vsako scheduled obvestilo
    for (const notification of scheduledNotifications) {
      try {
        // Označi kot sending
        await supabaseAdmin.from("push_notifications").update({ status: "sending" }).eq("id", notification.id)

        // Pošlji obvestilo
        const response = await fetch(`${process.env.NEXTAUTH_URL}/api/push/send`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: notification.title,
            body: notification.body,
            icon: notification.icon,
            image: notification.image,
            url: notification.url,
            tag: notification.tag,
          }),
        })

        if (response.ok) {
          processed++
          console.log(`✅ Sent scheduled notification: ${notification.title}`)
        } else {
          console.error(`❌ Failed to send scheduled notification: ${notification.title}`)
        }
      } catch (error) {
        console.error(`❌ Error processing notification ${notification.id}:`, error)
      }
    }

    return NextResponse.json({
      success: true,
      message: `Processed ${processed} scheduled notifications`,
      processed,
    })
  } catch (error) {
    console.error("❌ Cron job error:", error)
    return NextResponse.json({ success: false, error: "Cron job failed" }, { status: 500 })
  }
}
