"use client"

import { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX, X, Move, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const tracks = [
  { name: "Vultures", path: "/music/vultures.mp3" },
  { name: "Track 2", path: "/music/track2.mp3" },
  { name: "Track 3", path: "/music/track3.mp3" }
]

export default function MusicPlayer() {
  const [isMuted, setIsMuted] = useState(true)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isHidden, setIsHidden] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const audioRef = useRef(null)
  const playerRef = useRef(null)

  // Initialize position
  useEffect(() => {
    setPosition({
      x: window.innerWidth - 100,
      y: window.innerHeight - 100
    })
  }, [])

  // Handle dragging
  const startDrag = (e) => {
    e.stopPropagation()
    setIsDragging(true)
    document.body.style.userSelect = 'none'
  }

  const handleDrag = (e) => {
    if (!isDragging) return
    
    const clientX = e.clientX || e.touches?.[0]?.clientX
    const clientY = e.clientY || e.touches?.[0]?.clientY
    
    if (clientX && clientY) {
      setPosition({
        x: clientX - (playerRef.current?.offsetWidth / 2 || 0),
        y: clientY - (playerRef.current?.offsetHeight / 2 || 0)
      })
    }
  }

  const stopDrag = () => {
    setIsDragging(false)
    document.body.style.userSelect = ''
    setIsMenuOpen(false) // Close menu when dragging stops
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleDrag)
      document.addEventListener('touchmove', handleDrag, { passive: false })
      document.addEventListener('mouseup', stopDrag)
      document.addEventListener('touchend', stopDrag)
    }

    return () => {
      document.removeEventListener('mousemove', handleDrag)
      document.removeEventListener('touchmove', handleDrag)
      document.removeEventListener('mouseup', stopDrag)
      document.removeEventListener('touchend', stopDrag)
    }
  }, [isDragging])

  // Initialize audio
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.volume = 0.5
        audioRef.current.muted = false
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true)
            setIsMuted(false)
          })
          .catch(e => console.log("Autoplay blocked:", e))
      }
    }

    document.addEventListener('click', handleFirstInteraction, { once: true })
    return () => document.removeEventListener('click', handleFirstInteraction)
  }, [isPlaying])

  // Handle track changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = tracks[currentTrackIndex].path
      if (isPlaying) {
        audioRef.current.play()
      }
    }
  }, [currentTrackIndex, isPlaying])

  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !audioRef.current.muted
      audioRef.current.muted = newMutedState
      setIsMuted(newMutedState)
      
      if (!isPlaying && !newMutedState) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.log("Playback failed:", e))
      }
    }
  }

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length)
  }

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length)
  }

  const toggleMenu = (e) => {
    e.stopPropagation()
    setIsMenuOpen(!isMenuOpen)
  }

  if (isHidden) return null

  return (
    <div 
      ref={playerRef}
      className="fixed z-50 select-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'pointer',
        touchAction: isDragging ? 'none' : 'auto'
      }}
    >
      <AnimatePresence>
        {isMenuOpen && (
          <div className="absolute -left-1/2 -top-1/2 w-48 h-48 flex items-center justify-center pointer-events-none">
            {/* Previous Track Button */}
            <motion.button
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{ scale: 1, x: -60, y: 0 }}
              exit={{ scale: 0, x: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={prevTrack}
              className="absolute bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all pointer-events-auto"
              aria-label="Previous track"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </motion.button>

            {/* Move Button */}
            <motion.button
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{ scale: 1, x: 0, y: -60 }}
              exit={{ scale: 0, x: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
              onMouseDown={startDrag}
              onTouchStart={startDrag}
              className="absolute bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all pointer-events-auto"
              aria-label="Move player"
            >
              <Move className="h-5 w-5 text-white" />
            </motion.button>

            {/* Hide Button */}
            <motion.button
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{ scale: 1, x: 0, y: 60 }}
              exit={{ scale: 0, x: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
              onClick={() => setIsHidden(true)}
              className="absolute bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all pointer-events-auto"
              aria-label="Hide player"
            >
              <X className="h-5 w-5 text-white" />
            </motion.button>

            {/* Next Track Button */}
            <motion.button
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{ scale: 1, x: 60, y: 0 }}
              exit={{ scale: 0, x: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.3 }}
              onClick={nextTrack}
              className="absolute bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all pointer-events-auto"
              aria-label="Next track"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleMenu}
        whileTap={{ scale: 0.9 }}
        className="p-4 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all relative"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMuted ? (
          <VolumeX className="h-6 w-6 text-white" />
        ) : (
          <Volume2 className="h-6 w-6 text-white" />
        )}
        {!isMuted && isPlaying && (
          <motion.div 
            className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </motion.button>

      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  )
}
