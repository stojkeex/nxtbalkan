import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { LoadingScreen } from "@/components/loading-screen";
import { NotificationToasts } from "@/components/notification-toasts";
import { LiveSupportSystem } from "@/components/live-support-system";
import { ScrollToTop } from "@/components/scroll-to-top";
import Script from "next/script";
import { PremiumOffer } from "@/components/PremiumOffer";
import FloatingMusicPlayer from "@/components/floating-music-player";
import { PushNotificationManager } from "@/components/push-notification-manager";
import { IOSPWAPrompt } from "@/components/ios-pwa-prompt";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NXT Balkan - Revolutionizing Balkan Music",
  description: "Music production, artist management, and promotion agency specializing in Balkan music.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    title: "NXT Balkan",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    type: "website",
    url: "https://nxtbalkan.com/",
    title: "NXT Balkan - Revolutionizing Balkan Music",
    description: "Music production, artist management, and promotion agency specializing in Balkan music.",
    images: [{ url: "https://nxtbalkan.com/images/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NXT Balkan - Revolutionizing Balkan Music",
    description: "Music production, artist management, and promotion agency specializing in Balkan music.",
    images: ["https://nxtbalkan.com/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white relative overflow-x-hidden`}>
        {/* ANIMIRANO OZADJE */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-cyan-500/10 to-pink-500/10"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
                x: `${Math.random() * 100 - 50}px`,
                y: `${Math.random() * 100 - 50}px`,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
          {/* Gradient blobs */}
          <motion.div
            className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-500/5 to-pink-500/10 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-500/5 to-cyan-500/10 blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Script id="register-sw" strategy="afterInteractive">
            {`
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('🎵 NXT Balkan SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('❌ SW registration failed: ', registrationError);
                    });
                });
              }
            `}
          </Script>

          <Script id="disable-devtools" strategy="afterInteractive">
            {`
              document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
              });
              document.addEventListener('keydown', function(e) {
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
              function detectDevTools() {
                if(window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160) {
                  document.body.innerHTML = '<h1 style="color:white;text-align:center;margin-top:50px;">Developer tools are not allowed</h1>';
                  window.location.reload();
                }
              }
              setInterval(detectDevTools, 1000);
            `}
          </Script>

          <div id="protection-overlay" className="fixed inset-0 pointer-events-none z-[99999] select-none" />
          <CustomCursor />
          <ScrollToTop />
          <Navigation />
          <main className="relative z-10">{children}</main>
          <LoadingScreen />
          <PremiumOffer />
          <NotificationToasts />
          <LiveSupportSystem />
          <FloatingMusicPlayer />
          <PushNotificationManager />
          <IOSPWAPrompt />
        </ThemeProvider>
      </body>
    </html>
  );
}
