"use client"

import { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX, Music, Settings, X } from 'lucide-react'

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
  const audioRef = useRef(null)

  useEffect(() => {
    const handleFirstClick = () => {
      if (audioRef.current && !showMenu) {
        audioRef.current.volume = 0.3
        audioRef.current.muted = false
        audioRef.current.play().catch(e => console.log("Autoplay blocked:", e))
        setIsMuted(false)
      }
    }

    document.addEventListener('click', handleFirstClick)
    return () => document.removeEventListener('click', handleFirstClick)
  }, [showMenu])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = tracks[currentTrackIndex].path
      if (!isMuted) audioRef.current.play()
    }
  }, [currentTrackIndex])

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const changeTrack = (index) => {
    setCurrentTrackIndex(index)
    setShowMenu(false)
  }

  const toggleMenu = (e) => {
    e.stopPropagation()
    setShowMenu(!showMenu)
  }

  if (isHidden) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {showMenu && (
        <div className="bg-black/80 backdrop-blur-md border border-white/20 rounded-lg p-4 shadow-lg w-64">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-white">Music Settings</h3>
            <button 
              onClick={() => setShowMenu(false)}
              className="text-white/50 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mb-4">
            <h4 className="text-sm text-white/70 mb-2">Select Track</h4>
            <div className="space-y-2">
              {tracks.map((track, index) => (
                <button
                  key={index}
                  onClick={() => changeTrack(index)}
                  className={`w-full text-left p-2 rounded ${currentTrackIndex === index ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5'}`}
                >
                  {track.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => setIsHidden(true)}
              className="text-white/70 hover:text-white text-sm flex items-center gap-2"
            >
              <X size={16} /> Hide Player
            </button>
            <button
              onClick={toggleMute}
              className="text-white/70 hover:text-white text-sm flex items-center gap-2"
            >
              {isMuted ? (
                <>
                  <VolumeX size={16} /> Unmute
                </>
              ) : (
                <>
                  <Volume2 size={16} /> Mute
                </>
              )}
            </button>
          </div>
        </div>
      )}

      <button
        onClick={toggleMenu}
        className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all relative"
        aria-label="Music settings"
      >
        {isMuted ? (
          <VolumeX className="h-6 w-6 text-white" />
        ) : (
          <Volume2 className="h-6 w-6 text-white" />
        )}
        <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3 animate-pulse"></div>
      </button>
    </div>
  )
}
