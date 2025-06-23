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
  const animationRef = useRef(null)

  // Nastavi začetno pozicijo predvajalnika
  useEffect(() => {
    setPosition({
      x: window.innerWidth - 100,
      y: window.innerHeight - 180
    })
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  // Vrtenje gumba brez spreminjanja oddaljenosti
  useEffect(() => {
    const animateOrbit = () => {
      if (isMenuOpen) {
        setOrbitAngle(prev => (prev + 1) % 360)
        animationRef.current = requestAnimationFrame(animateOrbit)
      }
    }

    if (isMenuOpen) {
      animationRef.current = requestAnimationFrame(animateOrbit)
    } else {
      cancelAnimationFrame(animationRef.current)
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isMenuOpen])

  // Začetno nalaganje audio datotek
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

  // Posodobi trenutno predvajano skladbo
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = tracks[currentTrackIndex].path
      if (isPlaying) audioRef.current.play()
    }
  }, [currentTrackIndex, isPlaying])

  const toggleMute = () => {
    if (audioRef.current) {
      const newMuted = !audioRef.current.muted
      audioRef.current.muted = newMuted
      setIsMuted(newMuted)

      if (!isPlaying && !newMuted) {
        audioRef.current.play().then(() => setIsPlaying(true))
      }
    }
  }

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length)
  }

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length)
  }

  const orbitRadius = 70
  const menuButtons = [
    { icon: <ChevronLeft className="h-5 w-5 text-white" />, action: prevTrack, label: "Previous" },
    { icon: <Move className="h-5 w-5 text-white" />, action: startDrag, label: "Move" },
    { icon: <X className="h-5 w-5 text-white" />, action: () => setIsHidden(true), label: "Hide" },
    { icon: <ChevronRight className="h-5 w-5 text-white" />, action: nextTrack, label: "Next" }
  ]

  if (isHidden) return null

  // Glavni gumb brez animacije
  const handleToggleMenu = (e) => {
    e.stopPropagation()
    setIsMenuOpen(prev => !prev)
  }

  return (
    <div
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
            {menuButtons.map((btn, i) => {
              const angle = (orbitAngle + i * (360 / menuButtons.length)) * (Math.PI / 180)
              const x = orbitRadius * Math.cos(angle)
              const y = orbitRadius * Math.sin(angle)

              return (
                <motion.button
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, x, y, opacity: 1 }}
                  exit={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    btn.action(e)
                  }}
                  onMouseDown={btn.label === "Move" ? btn.action : undefined}
                  onTouchStart={btn.label === "Move" ? btn.action : undefined}
                  className="absolute bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all shadow-lg"
                  aria-label={btn.label}
                >
                  {btn.icon}
                </motion.button>
              )
            })}
          </>
        )}
      </AnimatePresence>

      {/* Glavni gumb brez animacije */}
      <motion.button
        onClick={handleToggleMenu}
        className="p-4 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all relative shadow-lg z-10"
        aria-label="Toggle menu"
      >
        {isMuted ? <VolumeX className="h-6 w-6 text-white" /> : <Volume2 className="h-6 w-6 text-white" />}
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
