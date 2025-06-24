import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side client z service role key
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

// Database types
export interface PushSubscription {
  id: number
  endpoint: string
  p256dh: string
  auth: string
  user_agent?: string
  ip_address?: string
  created_at: string
  last_used: string
  is_active: boolean
}

export interface PushNotification {
  id: number
  title: string
  body: string
  icon?: string
  image?: string
  url?: string
  tag?: string
  sent_count: number
  success_count: number
  error_count: number
  created_at: string
  sent_at?: string
  scheduled_for?: string
  status: "draft" | "scheduled" | "sending" | "sent" | "failed"
}

export interface PushDeliveryLog {
  id: number
  notification_id: number
  subscription_id: number
  status: "sent" | "failed" | "clicked"
  error_message?: string
  created_at: string
}
