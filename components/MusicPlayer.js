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
  const [orbitAngle, setOrbitAngle] = useState(0)
  const audioRef = useRef(null)
  const playerRef = useRef(null)
  const animationRef = useRef(null)

  // Initialize position higher on screen
  useEffect(() => {
    setPosition({
      x: window.innerWidth - 100,
      y: window.innerHeight - 180
    })

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Orbit animation
  useEffect(() => {
    if (isMenuOpen) {
      const animateOrbit = () => {
        setOrbitAngle(prev => (prev + 0.5) % 360)
        animationRef.current = requestAnimationFrame(animateOrbit)
      }
      animationRef.current = requestAnimationFrame(animateOrbit)
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isMenuOpen])

  // Handle dragging with boundaries
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
        x: Math.max(80, Math.min(window.innerWidth - 80, clientX - 24)),
        y: Math.max(80, Math.min(window.innerHeight - 80, clientY - 24))
      })
    }
  }

  const stopDrag = () => {
    setIsDragging(false)
    document.body.style.userSelect = ''
    setIsMenuOpen(false)
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

  // Audio initialization
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

  // Track handling
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
    setIsMenuOpen(false)
  }

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length)
    setIsMenuOpen(false)
  }

  const toggleMenu = (e) => {
    e.stopPropagation()
    setIsMenuOpen(!isMenuOpen)
  }

  if (isHidden) return null

  // Circular button configuration
  const orbitRadius = 70
  const buttons = [
    { icon: <ChevronLeft className="h-5 w-5 text-white" />, action: prevTrack, angleOffset: 0, label: "Previous track" },
    { icon: <Move className="h-5 w-5 text-white" />, action: startDrag, angleOffset: 90, label: "Move player" },
    { icon: <X className="h-5 w-5 text-white" />, action: () => setIsHidden(true), angleOffset: 180, label: "Hide player" },
    { icon: <ChevronRight className="h-5 w-5 text-white" />, action: nextTrack, angleOffset: 270, label: "Next track" }
  ]

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
          <>
            {buttons.map((button, index) => {
              const currentAngle = (orbitAngle + button.angleOffset) % 360
              const radians = (currentAngle * Math.PI) / 180
              const x = orbitRadius * Math.cos(radians)
              const y = orbitRadius * Math.sin(radians)
              
              return (
                <motion.button
                  key={index}
                  initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                  animate={{ 
                    scale: 1,
                    x: x,
                    y: y,
                    opacity: 1
                  }}
                  exit={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.1
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    button.action()
                  }}
                  onMouseDown={button.label === "Move player" ? button.action : undefined}
                  onTouchStart={button.label === "Move player" ? button.action : undefined}
                  className="absolute bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all pointer-events-auto shadow-lg"
                  aria-label={button.label}
                  style={{
                    originX: 0.5,
                    originY: 0.5
                  }}
                >
                  {button.icon}
                </motion.button>
              )
            })}
          </>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleMenu}
        whileTap={{ scale: 0.9 }}
        className="p-4 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all relative shadow-lg z-10"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        animate={{
          rotate: isMenuOpen ? 180 : 0
        }}
        transition={{ type: 'spring', stiffness: 300 }}
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
