"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Crown,
  Zap,
  Shield,
  Star,
  Music,
  Download,
  Headphones,
  Sparkles,
  X,
  Check,
  Gift,
  Clock,
  Users,
} from "lucide-react"

export function PremiumOffer() {
  const [isVisible, setIsVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes countdown

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden"
    }, 4000)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
    }
  }, [])

  useEffect(() => {
    if (isVisible && timeLeft > 0) {
      const countdown = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(countdown)
    }
  }, [isVisible, timeLeft])

  const handleClose = () => {
    setIsVisible(false)
    document.body.style.overflow = ""
    document.documentElement.style.overflow = ""
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-2 sm:p-4 backdrop-blur-md overflow-y-auto"
      >
        {/* Main modal - responsive container */}
        <div className="relative w-full max-w-sm mx-auto my-auto flex items-center justify-center min-h-0">
          {/* Glowing border effect */}
          <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl sm:rounded-2xl blur opacity-75 animate-pulse" />

          <motion.div
            initial={{ y: 30, scale: 0.95, rotateX: 10 }}
            animate={{ y: 0, scale: 1, rotateX: 0 }}
            exit={{ y: 30, scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-xl sm:rounded-2xl w-full shadow-2xl border border-gray-800/50 max-h-[95vh] overflow-y-auto"
          >
            {/* Scrollable content */}
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors z-10 p-1.5 sm:p-2 rounded-full hover:bg-white/10"
                aria-label="Close premium offer"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>

              {/* Header with crown */}
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-3 sm:mb-4 shadow-lg"
                >
                  <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-black" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight"
                >
                  🎵 NXT Balkan Premium
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-300 text-sm sm:text-base"
                >
                  Unlock the ultimate music experience
                </motion.p>
              </div>

              {/* Limited time offer */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg sm:rounded-xl p-2.5 sm:p-3 text-center"
              >
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-orange-400" />
                  <span className="text-orange-400 font-semibold text-xs sm:text-sm">LIMITED TIME OFFER</span>
                </div>
                <div className="text-white font-mono text-base sm:text-lg">{formatTime(timeLeft)}</div>
                <div className="text-xs text-gray-400">Offer expires soon!</div>
              </motion.div>

              {/* Pricing */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1 sm:mb-2">
                  <span className="text-gray-400 line-through text-lg sm:text-xl">$19.99</span>
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-2 py-0.5 sm:py-1 rounded-full text-xs font-bold"
                  >
                    50% OFF
                  </motion.div>
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-1">
                  $9.99
                </div>
                <div className="text-gray-400 text-sm">per month • Cancel anytime</div>
              </div>

              {/* Features - compact for mobile */}
              <div className="space-y-2 sm:space-y-3">
                {[
                  { icon: Music, text: "Unlimited high-quality streaming", premium: true },
                  { icon: Download, text: "Download songs for offline listening", premium: true },
                  { icon: Headphones, text: "Exclusive unreleased tracks", premium: true },
                  { icon: Zap, text: "Ad-free experience", premium: false },
                  { icon: Shield, text: "Priority customer support", premium: false },
                  { icon: Users, text: "Early access to concerts & events", premium: true },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div
                      className={`p-1.5 sm:p-2 rounded-full ${feature.premium ? "bg-gradient-to-r from-cyan-400/20 to-purple-500/20" : "bg-green-400/20"}`}
                    >
                      <feature.icon
                        className={`h-3 w-3 sm:h-4 sm:w-4 ${feature.premium ? "text-cyan-400" : "text-green-400"}`}
                      />
                    </div>
                    <span className="text-white text-xs sm:text-sm flex-1 leading-tight">{feature.text}</span>
                    {feature.premium && (
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-1.5 sm:px-2 py-0.5 rounded-full text-xs font-bold">
                        NEW
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social proof - compact */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-2.5 sm:p-3"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-white font-semibold text-xs sm:text-sm">4.9/5</span>
                </div>
                <p className="text-gray-300 text-xs leading-tight">
                  "Best music platform for Balkan music! Premium is totally worth it." - Over 10,000+ happy users
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <div className="space-y-2 sm:space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-black font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl shadow-lg text-sm sm:text-base md:text-lg relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                  />
                  <div className="relative flex items-center justify-center gap-1.5 sm:gap-2">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                    Start Premium Now
                    <Gift className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleClose}
                  className="w-full bg-transparent border border-gray-600 text-gray-300 font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:bg-white/5 transition-colors text-sm"
                >
                  Maybe Later
                </motion.button>
              </div>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 border-t border-gray-800">
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Shield className="h-3 w-3" />
                  Secure Payment
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Check className="h-3 w-3" />
                  30-Day Guarantee
                </div>
              </div>
            </div>

            {/* Floating elements - smaller on mobile */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 blur-sm"
            />
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-6 sm:h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-60 blur-sm"
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
