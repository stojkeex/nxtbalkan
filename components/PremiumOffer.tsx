"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Crown, Zap, Target, Users, Sparkles, X, Check, Clock, Shield, Star } from "lucide-react"

export function PremiumOffer() {
  const [isVisible, setIsVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes countdown

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden"
    }, 8000) // Show after 8 seconds

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
        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-3"
      >
        <div className="relative w-full max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto max-h-[90vh] overflow-y-auto">
          <motion.div
            initial={{ y: 20, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-gray-900/90 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700 overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-10 text-gray-400 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Mobile Layout */}
            <div className="block md:hidden p-5 space-y-4">
              {/* Header */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-xl mb-3 border border-cyan-400/30">
                  <Crown className="h-6 w-6 text-cyan-400" />
                </div>
                <h2 className="text-xl font-light mb-1 text-white">
                  Premium{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-medium">
                    Package
                  </span>
                </h2>
                <p className="text-gray-300 text-sm">Digital transformation solution</p>
              </div>

              {/* Timer */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-cyan-400/30 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <Clock className="h-3 w-3 text-cyan-400" />
                  <span className="text-cyan-400 font-medium text-xs">LIMITED OFFER</span>
                </div>
                <div className="text-white font-mono text-lg">{formatTime(timeLeft)}</div>
              </div>

              {/* Pricing */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-gray-400 line-through text-base">€4,999</span>
                  <div className="bg-gradient-to-r from-cyan-400 to-pink-400 text-black px-2 py-0.5 rounded-full text-xs font-medium">
                    40% OFF
                  </div>
                </div>
                <div className="text-2xl font-light text-white mb-1">€2,999</div>
                <div className="text-gray-400 text-xs">Complete solution</div>
              </div>

              {/* Features - Compact */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                    <Zap className="h-3 w-3 text-cyan-400" />
                  </div>
                  <span className="text-white">Brand strategy & web development</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                    <Users className="h-3 w-3 text-cyan-400" />
                  </div>
                  <span className="text-white">6-month support included</span>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-medium py-3 px-4 rounded-lg shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center gap-1.5">
                  <Sparkles className="h-4 w-4" />
                  Claim Package
                </div>
              </button>

              <button
                onClick={handleClose}
                className="w-full bg-transparent border border-gray-600 text-gray-300 font-medium py-2 px-4 rounded-lg hover:bg-white/5 transition-colors text-sm"
              >
                Maybe Later
              </button>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-0">
              {/* Left side - Content */}
              <div className="p-6 lg:p-8 space-y-5">
                {/* Header */}
                <div className="text-left">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-xl mb-4 border border-cyan-400/30">
                    <Crown className="h-7 w-7 text-cyan-400" />
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-light mb-2 text-white">
                    Premium{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-medium">
                      Package
                    </span>
                  </h2>

                  <p className="text-gray-300 text-base">Complete digital transformation solution</p>
                </div>

                {/* Pricing */}
                <div className="text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-gray-400 line-through text-xl">€4,999</span>
                    <div className="bg-gradient-to-r from-cyan-400 to-pink-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                      40% OFF
                    </div>
                  </div>
                  <div className="text-3xl font-light text-white mb-1">€2,999</div>
                  <div className="text-gray-400">One-time • 6-month support</div>
                </div>

                {/* Features - Compact */}
                <div className="space-y-3">
                  {[
                    { icon: Zap, text: "Brand strategy & identity" },
                    { icon: Target, text: "Custom web development" },
                    { icon: Users, text: "Marketing & support" },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                        <feature.icon className="h-4 w-4 text-cyan-400" />
                      </div>
                      <span className="text-white">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 pt-2">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      Claim Premium Package
                    </div>
                  </button>

                  <button
                    onClick={handleClose}
                    className="w-full bg-transparent border border-gray-600 text-gray-300 font-medium py-2.5 px-6 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    Maybe Later
                  </button>
                </div>

                {/* Trust badges */}
                <div className="flex items-center gap-6 pt-3 border-t border-gray-800">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Shield className="h-4 w-4" />
                    Secure
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Check className="h-4 w-4" />
                    Guarantee
                  </div>
                </div>
              </div>

              {/* Right side - Visual/Timer */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 lg:p-8 flex flex-col justify-center items-center text-center border-l border-gray-700">
                {/* Limited time offer */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-cyan-400/30 rounded-xl p-5 mb-5 w-full max-w-xs">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-cyan-400" />
                    <span className="text-cyan-400 font-medium text-sm">LIMITED OFFER</span>
                  </div>
                  <div className="text-white font-mono text-2xl mb-1">{formatTime(timeLeft)}</div>
                  <div className="text-xs text-gray-400">Expires soon!</div>
                </div>

                {/* Social proof */}
                <div className="bg-gradient-to-r from-cyan-500/5 to-pink-500/5 border border-gray-700 rounded-xl p-5 w-full max-w-xs">
                  <div className="text-3xl font-light bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    200+
                  </div>
                  <div className="text-white font-medium mb-1">Projects</div>
                  <div className="text-xs text-gray-400">"Best digital agency!"</div>

                  <div className="flex justify-center gap-0.5 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
