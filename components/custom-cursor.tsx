"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("hover-target")
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("hover-target")
      ) {
        setIsHovering(false)
      }
    }

    const handleMouseOut = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseout", handleMouseOut)
    document.addEventListener("mouseover", handleMouseEnter)
    document.addEventListener("mouseout", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseout", handleMouseOut)
      document.removeEventListener("mouseover", handleMouseEnter)
      document.removeEventListener("mouseout", handleMouseLeave)
    }
  }, [])

  if (!isMounted) return null

  if (!isVisible) return null

  return (
    <div className="hidden md:block">
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-3 h-3 bg-white rounded-full" />
      </motion.div>

      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] border border-white/50 rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="w-8 h-8" />
      </motion.div>
    </div>
  )
}
