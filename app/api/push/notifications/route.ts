import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function GET() {
  try {
    const { data: notifications, error } = await supabaseAdmin
      .from("push_notifications")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50)

    if (error) throw error

    return NextResponse.json({
      success: true,
      notifications: notifications || [],
    })
  } catch (error) {
    console.error("❌ Get notifications error:", error)
    return NextResponse.json({ success: false, error: "Failed to get notifications" }, { status: 500 })
  }
}
