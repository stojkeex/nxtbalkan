"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Crown, Music, Download, Headphones, Sparkles, X, Check, Gift, Clock, Shield } from "lucide-react"

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
        className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-3 backdrop-blur-sm"
      >
        <div className="relative w-full max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 20, scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-10 gradient-text hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10"
            >
              <X className="h-4 w-4 md:h-5 md:w-5" />
            </button>

            {/* Mobile Layout */}
            <div className="block md:hidden p-4 space-y-4">
              {/* Header */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl mb-3 shadow-lg">
                  <Crown className="h-6 w-6 text-black" />
                </div>
                <h2 className="text-xl font-bold mb-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text gradient-text">
                  NXT Balkan Premium
                </h2>
                <p className="text-gray-300 text-sm">Ultimate music experience</p>
              </div>

              {/* Timer */}
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <Clock className="h-3 w-3 text-orange-400" />
                  <span className="text-orange-400 font-semibold text-xs">LIMITED OFFER</span>
                </div>
                <div className="text-white font-mono text-lg">{formatTime(timeLeft)}</div>
              </div>

              {/* Pricing */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-gray-400 line-through text-lg">$19.99</span>
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-2 py-0.5 rounded-full text-xs font-bold">
                    50% OFF
                  </div>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-1">
                  $9.99
                </div>
                <div className="text-gray-400 text-sm">per month</div>
              </div>

              {/* Features - Only 2 for mobile */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20">
                    <Music className="h-4 w-4 text-cyan-400" />
                  </div>
                  <span className="text-white text-sm">Unlimited streaming</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20">
                    <Download className="h-4 w-4 text-cyan-400" />
                  </div>
                  <span className="text-white text-sm">Offline downloads</span>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-black font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center gap-1.5">
                  <Sparkles className="h-4 w-4" />
                  Start Premium Now
                </div>
              </button>

              <button
                onClick={handleClose}
                className="w-full bg-transparent border border-gray-600 text-gray-300 font-medium py-2.5 px-4 rounded-lg hover:bg-white/5 transition-colors text-sm"
              >
                Maybe Later
              </button>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-0">
              {/* Left side - Content */}
              <div className="p-6 md:p-8 lg:p-10 space-y-6">
                {/* Header */}
                <div className="text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mb-4 shadow-lg">
                    <Crown className="h-8 w-8 text-black" />
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    NXT Balkan Premium
                  </h2>

                  <p className="text-gray-300 text-base md:text-lg">Unlock the ultimate music experience</p>
                </div>

                {/* Pricing */}
                <div className="text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-gray-400 line-through text-xl">$19.99</span>
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      50% OFF
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-1">
                    $9.99
                  </div>
                  <div className="text-gray-400">per month • Cancel anytime</div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {[
                    { icon: Music, text: "Unlimited high-quality streaming" },
                    { icon: Download, text: "Download for offline listening" },
                    { icon: Headphones, text: "Exclusive unreleased tracks" },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20">
                        <feature.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <span className="text-white">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 pt-2">
                  <button className="w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-black font-bold py-4 px-6 rounded-xl shadow-lg text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-center justify-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      Start Premium Now
                      <Gift className="h-5 w-5" />
                    </div>
                  </button>

                  <button
                    onClick={handleClose}
                    className="w-full bg-transparent border border-gray-600 text-gray-300 font-medium py-3 px-6 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    Maybe Later
                  </button>
                </div>

                {/* Trust badges */}
                <div className="flex items-center gap-6 pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Shield className="h-4 w-4" />
                    Secure Payment
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Check className="h-4 w-4" />
                    30-Day Guarantee
                  </div>
                </div>
              </div>

              {/* Right side - Visual/Timer */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 md:p-8 lg:p-10 flex flex-col justify-center items-center text-center border-l border-gray-700/50">
                {/* Limited time offer */}
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-6 mb-6 w-full max-w-xs">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-orange-400" />
                    <span className="text-orange-400 font-semibold">LIMITED OFFER</span>
                  </div>
                  <div className="text-white font-mono text-3xl mb-1">{formatTime(timeLeft)}</div>
                  <div className="text-sm text-gray-400">Expires soon!</div>
                </div>

                {/* Social proof */}
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 w-full max-w-xs">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    10,000+
                  </div>
                  <div className="text-white font-semibold mb-1">Happy Users</div>
                  <div className="text-sm text-gray-400">"Best music platform for Balkan music!"</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
