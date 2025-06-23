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
import Head from "next/head"
import { PremiumOffer } from '@/components/PremiumOffer';
import FloatingMusicPlayer from "@/components/floating-music-player"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NXT Balkan - Revolutionizing Balkan Music",
  description: "Music production, artist management, and promotion agency specializing in Balkan music.",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ]
  },
  manifest: '/favicon/site.webmanifest',
  themeColor: '#000000',
  appleWebApp: {
    capable: true,
    title: 'NXT Balkan',
    statusBarStyle: 'black-translucent'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <Head>
        {/* Primary Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nxtbalkan.com/" />
        <meta property="og:title" content="NXT Balkan - Revolutionizing Balkan Music" />
        <meta property="og:description" content="Music production, artist management, and promotion agency specializing in Balkan music." />
        <meta property="og:image" content="https://nxtbalkan.com/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nxtbalkan.com/" />
        <meta property="twitter:title" content="NXT Balkan - Revolutionizing Balkan Music" />
        <meta property="twitter:description" content="Music production, artist management, and promotion agency specializing in Balkan music." />
        <meta property="twitter:image" content="https://nxtbalkan.com/images/og-image.jpg" />
      </Head>
      
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
          <CustomCursor />
          <ScrollToTop />
          <Navigation />
          <main>{children}</main>
          <LoadingScreen />
          <PremiumOffer />
          <NotificationToasts />
          <LiveSupportSystem />
          <FloatingMusicPlayer />
        </ThemeProvider>
      </body>
    </html>
  )
}
