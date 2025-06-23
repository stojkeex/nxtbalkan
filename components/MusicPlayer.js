"use client"

import { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function MusicPlayer() {
  const [isMuted, setIsMuted] = useState(true)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Poskusimo predvajati ob prvem uporabnikovem interakciju
    const handleFirstInteraction = () => {
      if (audioRef.current && !hasInteracted) {
        audioRef.current.volume = 0.5
        audioRef.current.muted = false
        audioRef.current.play().catch(e => console.error("Play failed:", e))
        setHasInteracted(true)
      }
    }

    document.addEventListener('click', handleFirstInteraction, { once: true })
    
    return () => {
      document.removeEventListener('click', handleFirstInteraction)
    }
  }, [hasInteracted])

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted
      setIsMuted(audioRef.current.muted)
      
      // Če še ni bilo interakcije, poskusimo predvajati
      if (!hasInteracted) {
        audioRef.current.play().catch(e => console.error("Play failed:", e))
        setHasInteracted(true)
      }
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio 
        ref={audioRef} 
        loop
        src="/music/vultures.mp3" // Preverite, da je pot do datoteke pravilna
      />
      
      <button
        onClick={toggleMute}
        className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? (
          <VolumeX className="h-6 w-6 text-white" />
        ) : (
          <Volume2 className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  )
}
