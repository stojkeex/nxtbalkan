import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function GET() {
  try {
    // Pridobi število aktivnih naročnikov
    const { data: subscriptions, error: subsError } = await supabaseAdmin
      .from("push_subscriptions")
      .select("id")
      .eq("is_active", true)

    if (subsError) throw subsError

    // Pridobi statistike obvestil
    const { data: notifications, error: notifError } = await supabaseAdmin
      .from("push_notifications")
      .select("sent_count, success_count, error_count, status")
      .eq("status", "sent")

    if (notifError) throw notifError

    // Izračunaj statistike
    const totalSent = notifications?.reduce((sum, n) => sum + (n.sent_count || 0), 0) || 0
    const totalSuccess = notifications?.reduce((sum, n) => sum + (n.success_count || 0), 0) || 0
    const successRate = totalSent > 0 ? Math.round((totalSuccess / totalSent) * 100) : 0

    // Pridobi zadnja obvestila
    const { data: recentNotifications, error: recentError } = await supabaseAdmin
      .from("push_notifications")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5)

    if (recentError) throw recentError

    return NextResponse.json({
      success: true,
      stats: {
        total_subscribers: subscriptions?.length || 0,
        total_sent: totalSent,
        success_rate: successRate,
        recent_notifications: recentNotifications || [],
      },
    })
  } catch (error) {
    console.error("❌ Stats error:", error)
    return NextResponse.json({ success: false, error: "Failed to get stats" }, { status: 500 })
  }
}
