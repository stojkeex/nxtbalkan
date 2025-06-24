"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Sparkles, Star, Users, Zap } from "lucide-react"

interface Toast {
  id: number
  message: string
  icon: React.ReactNode
  type: "offer" | "success" | "info"
}

export function NotificationToasts() {
  const [toasts, setToasts] = useState<Toast[]>([])
  const [isMounted, setIsMounted] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  const messages = [
    {
      icon: <Sparkles className="h-4 w-4 text-cyan-400" />,
      message: "Limited time: 40% off Premium Digital Package",
      type: "offer" as const,
    },
    {
      icon: <Star className="h-4 w-4 text-yellow-400" />,
      message: "New client testimonial: '5-star experience with NXT Balkan!'",
      type: "success" as const,
    },
    {
      icon: <Users className="h-4 w-4 text-purple-400" />,
      message: "Just completed another successful brand transformation",
      type: "success" as const,
    },
    {
      icon: <Zap className="h-4 w-4 text-orange-400" />,
      message: "Free consultation available - Book your strategy session",
      type: "offer" as const,
    },
    {
      icon: <Star className="h-4 w-4 text-cyan-400" />,
      message: "Featured project: 300% increase in client's online sales",
      type: "success" as const,
    },
    {
      icon: <Sparkles className="h-4 w-4 text-pink-400" />,
      message: "New service: AI-powered marketing automation now available",
      type: "info" as const,
    },
    {
      icon: <Users className="h-4 w-4 text-cyan-400" />,
      message: "50+ successful projects completed this year",
      type: "success" as const,
    },
    {
      icon: <Zap className="h-4 w-4 text-cyan-400" />,
      message: "Early bird special: Save 25% on Q1 2025 projects",
      type: "offer" as const,
    },
  ]

  // Check if device is desktop
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768) // md breakpoint
    }

    checkIsDesktop()
    window.addEventListener("resize", checkIsDesktop)

    return () => window.removeEventListener("resize", checkIsDesktop)
  }, [])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || !isDesktop) return

    const showRandomToast = () => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)]
      const newToast: Toast = {
        id: Date.now(),
        message: randomMessage.message,
        icon: randomMessage.icon,
        type: randomMessage.type,
      }

      setToasts((prev) => [...prev, newToast])

      // Auto remove after 6 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== newToast.id))
      }, 6000)
    }

    // Show first toast after 5 seconds
    const initialTimer = setTimeout(showRandomToast, 5000)

    // Then show random toasts every 20-35 seconds
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        // 40% chance every interval
        showRandomToast()
      }
    }, 20000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [isMounted, isDesktop])

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  const getToastStyles = (type: string) => {
    switch (type) {
      case "offer":
        return "border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 to-pink-500/10"
      case "success":
        return "border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
      case "info":
        return "border-purple-400/30 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
      default:
        return "border-gray-400/30 bg-gray-900/80"
    }
  }

  if (!isMounted || !isDesktop) {
    return null
  }

  return (
    <div className="fixed bottom-6 left-6 z-40 pointer-events-none max-w-sm">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -50, y: -20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              opacity: { duration: 0.3 },
            }}
            className="mb-3 pointer-events-auto"
          >
            <div
              className={`backdrop-blur-md border rounded-xl p-4 shadow-xl transition-all duration-300 hover:scale-105 ${getToastStyles(toast.type)}`}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">{toast.icon}</div>
                <p className="text-white text-sm flex-1 leading-relaxed font-medium">{toast.message}</p>
                <button
                  onClick={() => removeToast(toast.id)}
                  className="text-gray-400 hover:text-white transition-colors flex-shrink-0 p-1 rounded-full hover:bg-white/10"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
