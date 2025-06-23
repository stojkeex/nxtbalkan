"use client"
import { motion } from 'framer-motion'
import { Play, Pause, Music } from 'lucide-react'
import { useAudio } from './AudioContext'

interface FloatingButtonProps {
  onClick: () => void
  position: { x: number; y: number }
}

export function FloatingButton({ onClick, position }: FloatingButtonProps) {
  const { isPlaying, currentTrack } = useAudio()

  return (
    <motion.button
      onClick={onClick}
      className="fixed z-40 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center group"
      style={{ left: position.x, top: position.y }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: isPlaying 
          ? "0 0 30px rgba(147, 51, 234, 0.6), 0 0 60px rgba(147, 51, 234, 0.3)"
          : "0 10px 30px rgba(0, 0, 0, 0.3)"
      }}
    >
      {currentTrack ? (
        <>
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white ml-1" />
          )}
          {isPlaying && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          )}
        </>
      ) : (
        <Music className="w-6 h-6 text-white" />
      )}
    </motion.button>
  )
}
