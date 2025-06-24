import { type NextRequest, NextResponse } from "next/server"

// V produkciji uporabi bazo podatkov
const subscriptions = new Set<string>()

export async function POST(request: NextRequest) {
  try {
    const subscription = await request.json()

    // Shrani naročnino
    subscriptions.add(JSON.stringify(subscription))

    console.log("🔔 Nova naročnina na NXT Balkan obvestila:", subscription.endpoint)

    return NextResponse.json({
      success: true,
      message: "Uspešno naročen na obvestila",
      subscribers: subscriptions.size,
    })
  } catch (error) {
    console.error("❌ Napaka pri naročanju:", error)
    return NextResponse.json({ success: false, error: "Napaka pri naročanju" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    service: "NXT Balkan Push Notifications",
    subscribers: subscriptions.size,
    status: "active",
  })
}
