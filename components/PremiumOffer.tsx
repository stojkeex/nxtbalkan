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
        className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4 backdrop-blur-md"
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Main modal */}
        <div className="relative">
          {/* Glowing border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-75 animate-pulse" />

          <motion.div
            initial={{ y: 50, scale: 0.9, rotateX: 15 }}
            animate={{ y: 0, scale: 1, rotateX: 0 }}
            exit={{ y: 50, scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-6 md:p-8 max-w-md w-full mx-auto shadow-2xl border border-gray-800/50"
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 p-2 rounded-full hover:bg-white/10"
              aria-label="Close premium offer"
            >
              <X className="h-5 w-5" />
            </motion.button>

            {/* Header with crown */}
            <div className="text-center mb-6">
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4 shadow-lg"
              >
                <Crown className="h-8 w-8 text-black" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                🎵 NXT Balkan Premium
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 text-sm md:text-base"
              >
                Unlock the ultimate music experience
              </motion.p>
            </div>

            {/* Limited time offer */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-3 mb-6 text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <Clock className="h-4 w-4 text-orange-400" />
                <span className="text-orange-400 font-semibold text-sm">LIMITED TIME OFFER</span>
              </div>
              <div className="text-white font-mono text-lg">{formatTime(timeLeft)}</div>
              <div className="text-xs text-gray-400">Offer expires soon!</div>
            </motion.div>

            {/* Pricing */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-gray-400 line-through text-xl">$19.99</span>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-2 py-1 rounded-full text-xs font-bold"
                >
                  50% OFF
                </motion.div>
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-1">
                $9.99
              </div>
              <div className="text-gray-400 text-sm">per month • Cancel anytime</div>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-6">
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
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div
                    className={`p-2 rounded-full ${feature.premium ? "bg-gradient-to-r from-cyan-400/20 to-purple-500/20" : "bg-green-400/20"}`}
                  >
                    <feature.icon className={`h-4 w-4 ${feature.premium ? "text-cyan-400" : "text-green-400"}`} />
                  </div>
                  <span className="text-white text-sm flex-1">{feature.text}</span>
                  {feature.premium && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-0.5 rounded-full text-xs font-bold">
                      NEW
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-3 mb-6"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-white font-semibold text-sm">4.9/5</span>
              </div>
              <p className="text-gray-300 text-xs">
                "Best music platform for Balkan music! Premium is totally worth it." - Over 10,000+ happy users
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-black font-bold py-4 px-6 rounded-xl shadow-lg text-base md:text-lg relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                />
                <div className="relative flex items-center justify-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Start Premium Now
                  <Gift className="h-5 w-5" />
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleClose}
                className="w-full bg-transparent border border-gray-600 text-gray-300 font-medium py-3 px-6 rounded-xl hover:bg-white/5 transition-colors text-sm"
              >
                Maybe Later
              </motion.button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-800">
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Shield className="h-3 w-3" />
                Secure Payment
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Check className="h-3 w-3" />
                30-Day Guarantee
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 blur-sm"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-60 blur-sm"
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
