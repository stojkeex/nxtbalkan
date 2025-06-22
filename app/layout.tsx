import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { LoadingScreen } from "@/components/loading-screen"
import { NotificationToasts } from "@/components/notification-toasts"
import { LiveSupportSystem } from "@/components/live-support-system"
import { ScrollToTop } from "@/components/scroll-to-top"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NXT Balkan - Revolutionizing Balkan Music",
  description: "Music production, artist management, and promotion agency specializing in Balkan music.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Client-side protection scripts */}
          <Script id="disable-devtools" strategy="afterInteractive">
            {`
              // Disable right click
              document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
              });
              
              // Disable keyboard shortcuts
              document.addEventListener('keydown', function(e) {
                // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
                if (
                  e.key === 'F12' ||
                  (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                  (e.ctrlKey && e.shiftKey && e.key === 'J') ||
                  (e.ctrlKey && e.key === 'U') ||
                  (e.ctrlKey && e.key === 'u')
                ) {
                  e.preventDefault();
                }
              });
              
              // Anti-devtools detection (basic)
              function detectDevTools() {
                if(window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160) {
                  document.body.innerHTML = '<h1 style="color:white;text-align:center;margin-top:50px;">Developer tools are not allowed</h1>';
                  window.location.reload();
                }
              }
              
              setInterval(detectDevTools, 1000);
            `}
          </Script>

          {/* Visual deterrent overlay */}
          <div id="protection-overlay" className="fixed inset-0 pointer-events-none z-[99999] select-none" />
          
          {/* Content */}
          <LoadingScreen />
          <CustomCursor />
          <ScrollToTop />
          <Navigation />
          <main>{children}</main>
          <NotificationToasts />
          <LiveSupportSystem />
        </ThemeProvider>
      </body>
    </html>
  )
}