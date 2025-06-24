import { type NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const subscription = await request.json()
    const userAgent = request.headers.get("user-agent") || ""
    const forwarded = request.headers.get("x-forwarded-for")
    const ip = forwarded ? forwarded.split(",")[0] : request.ip

    // Validacija subscription objekta
    if (!subscription.endpoint || !subscription.keys?.p256dh || !subscription.keys?.auth) {
      return NextResponse.json({ success: false, error: "Invalid subscription object" }, { status: 400 })
    }

    // Shrani v Supabase
    const { data, error } = await supabaseAdmin
      .from("push_subscriptions")
      .upsert(
        {
          endpoint: subscription.endpoint,
          p256dh: subscription.keys.p256dh,
          auth: subscription.keys.auth,
          user_agent: userAgent,
          ip_address: ip,
          last_used: new Date().toISOString(),
          is_active: true,
        },
        {
          onConflict: "endpoint",
        },
      )
      .select()

    if (error) {
      console.error("❌ Supabase error:", error)
      return NextResponse.json({ success: false, error: "Database error" }, { status: 500 })
    }

    console.log("✅ New subscription saved:", subscription.endpoint.substring(0, 50) + "...")

    // Pošlji dobrodošlo obvestilo
    setTimeout(async () => {
      try {
        await fetch(`${request.nextUrl.origin}/api/push/send`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: "🎵 Dobrodošli v NXT Balkan!",
            body: "Uspešno ste se naročili na obvestila. Obveščali vas bomo o novi glasbi in dogodkih!",
            icon: "/favicon/favicon-192x192.png",
            url: "/",
            targetEndpoint: subscription.endpoint, // Pošlji samo temu uporabniku
          }),
        })
      } catch (error) {
        console.log("Welcome notification failed:", error)
      }
    }, 2000)

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to NXT Balkan notifications",
      id: data?.[0]?.id,
    })
  } catch (error) {
    console.error("❌ Subscribe error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const { data: subscriptions, error } = await supabaseAdmin
      .from("push_subscriptions")
      .select("id, created_at, is_active, user_agent")
      .eq("is_active", true)

    if (error) {
      throw error
    }

    return NextResponse.json({
      success: true,
      total_subscribers: subscriptions?.length || 0,
      subscriptions: subscriptions?.map((sub) => ({
        id: sub.id,
        created_at: sub.created_at,
        user_agent: sub.user_agent?.substring(0, 100) + "...",
      })),
    })
  } catch (error) {
    console.error("❌ Get subscriptions error:", error)
    return NextResponse.json({ success: false, error: "Failed to get subscriptions" }, { status: 500 })
  }
}
