const webpush = require("web-push")

console.log("🔑 Generating VAPID keys for NXT Balkan Push Notifications...\n")

const vapidKeys = webpush.generateVAPIDKeys()

console.log("📋 Add these to your .env.local file:")
console.log("=====================================")
console.log(`VAPID_PUBLIC_KEY="${vapidKeys.publicKey}"`)
console.log(`VAPID_PRIVATE_KEY="${vapidKeys.privateKey}"`)
console.log(`VAPID_EMAIL="admin@nxtbalkan.com"`)
console.log("=====================================\n")

console.log("🔧 Also add these to your Vercel environment variables:")
console.log("- VAPID_PUBLIC_KEY")
console.log("- VAPID_PRIVATE_KEY")
console.log("- VAPID_EMAIL")
console.log("- SUPABASE_URL")
console.log("- SUPABASE_ANON_KEY")
console.log("- SUPABASE_SERVICE_ROLE_KEY\n")

console.log("✅ VAPID keys generated successfully!")
console.log("🎵 Ready for NXT Balkan push notifications! 🚀")
