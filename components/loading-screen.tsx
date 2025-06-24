"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Hide scrollbar during loading
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"

    const timer = setTimeout(() => {
      setIsLoading(false)
      // Restore scrollbar when loading is done
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
    }, 4000)

    return () => {
      clearTimeout(timer)
      // Cleanup: restore scrollbar if component unmounts
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
    }
  }, [])

  if (!isMounted) {
    return null
  }

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="text-center">
        {/* Spinning Circle - Much Larger */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto mb-12 relative"
        >
          <div
            className="absolute inset-0 rounded-full p-[3px] sm:p-[4px]"
            style={{
              background: "linear-gradient(90deg, #06b6d4, #ec4899, #06b6d4)",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
            }}
          />
          <div className="w-full h-full rounded-full bg-black" />

          {/* Inner glow effect */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-pink-500/10 blur-sm" />
        </motion.div>

        {/* Logo Image - Larger and More Prominent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <img
            src="/nxtbalkancolored2.png"
            alt="NXT Balkan"
            className="mx-auto w-56 h-auto sm:w-64 md:w-72 lg:w-80 xl:w-96"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-8"
        >
          Digital Excellence Redefined
        </motion.p>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-6"
        >
          Loading your experience...
        </motion.p>

        {/* Animated dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center space-x-2"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.2,
              }}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400"
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
