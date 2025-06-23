"use client"

import { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX, X } from 'lucide-react'

const tracks = [
  { name: "Vultures", path: "/music/vultures.mp3" },
  { name: "Track 2", path: "/music/track2.mp3" },
  { name: "Track 3", path: "/music/track3.mp3" }
]

export default function MusicPlayer() {
  const [isMuted, setIsMuted] = useState(true)
  const [showMenu, setShowMenu] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isHidden, setIsHidden] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)
  const menuRef = useRef(null)

  // Handle clicks outside menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  // Initialize audio and handle first interaction
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

  // Toggle mute/unmute
  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !audioRef.current.muted
      audioRef.current.muted = newMutedState
      setIsMuted(newMutedState)
      
      // Try to play if not already playing
      if (!isPlaying && !newMutedState) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.log("Playback failed:", e))
      }
    }
  }

  const changeTrack = (index) => {
    setCurrentTrackIndex(index)
    setShowMenu(false)
    if (!isMuted) {
      audioRef.current.play()
    }
  }

  const toggleMenu = (e) => {
    e.stopPropagation()
    setShowMenu(!showMenu)
  }

  if (isHidden) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {showMenu && (
        <div 
          ref={menuRef}
          className="bg-black/90 backdrop-blur-md border border-white/20 rounded-lg p-4 shadow-lg w-72 max-w-[90vw]"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-white text-lg">Music Settings</h3>
            <button 
              onClick={() => setShowMenu(false)}
              className="text-white/50 hover:text-white p-1"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mb-4">
            <h4 className="text-sm text-white/70 mb-2">Select Track</h4>
            <div className="space-y-2 max-h-[40vh] overflow-y-auto">
              {tracks.map((track, index) => (
                <button
                  key={index}
                  onClick={() => changeTrack(index)}
                  className={`w-full text-left p-3 rounded-lg text-sm ${currentTrackIndex === index ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5'}`}
                >
                  {track.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={toggleMute}
              className={`w-full p-3 rounded-lg flex items-center justify-between text-sm ${isMuted ? 'text-white/70' : 'text-white'}`}
            >
              <span>{isMuted ? "Unmute" : "Mute"}</span>
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            
            <button
              onClick={() => setIsHidden(true)}
              className="w-full p-3 rounded-lg text-white/70 hover:text-white flex items-center justify-between text-sm"
            >
              <span>Hide Music Player</span>
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={toggleMenu}
        className="p-4 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all relative touch-manipulation active:scale-95"
        aria-label={showMenu ? "Close settings" : "Open settings"}
      >
        {isMuted ? (
          <VolumeX className="h-6 w-6 text-white" />
        ) : (
          <Volume2 className="h-6 w-6 text-white" />
        )}
        {!isMuted && isPlaying && (
          <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3 animate-pulse"></div>
        )}
      </button>

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
