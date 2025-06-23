"use client"
import { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react'

export interface Track {
  id: string
  name: string
  artist: string
  path: string
  duration?: number
  cover?: string
}

interface AudioContextType {
  tracks: Track[]
  currentTrack: Track | null
  currentTrackIndex: number
  isPlaying: boolean
  volume: number
  currentTime: number
  duration: number
  isLoading: boolean
  play: () => void
  pause: () => void
  nextTrack: () => void
  prevTrack: () => void
  selectTrack: (index: number) => void
  setVolume: (volume: number) => void
  seekTo: (time: number) => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

const DEFAULT_TRACKS: Track[] = [
  { 
    id: '1', 
    name: "Demo Track 1", 
    artist: "Demo Artist", 
    path: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  },
  { 
    id: '2', 
    name: "Demo Track 2", 
    artist: "Another Artist", 
    path: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  }
]

export function AudioProvider({ children }: { children: ReactNode }) {
  const [tracks] = useState<Track[]>(DEFAULT_TRACKS)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolumeState] = useState(0.7)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  
  const audioRef = useRef<HTMLAudioElement>(null)
  const intervalRef = useRef<number | null>(null)

  const currentTrack = tracks[currentTrackIndex] || null

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !currentTrack) return

    console.log('Loading track:', currentTrack.name)
    setIsLoading(true)
    audio.src = currentTrack.path
    audio.volume = volume

    const handleLoadedData = () => {
      console.log('Track loaded, duration:', audio.duration)
      setDuration(audio.duration || 0)
      setIsLoading(false)
    }

    const handleEnded = () => {
      console.log('Track ended, going to next')
      nextTrack()
    }

    const handleError = (e: any) => {
      console.error('Audio error:', e)
      setIsLoading(false)
    }

    audio.addEventListener('loadeddata', handleLoadedData)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)

    return () => {
      audio.removeEventListener('loadeddata', handleLoadedData)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
    }
  }, [currentTrack, volume])

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime)
        }
      }, 100)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying])

  const play = async () => {
    console.log('Play clicked')
    if (audioRef.current) {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
        console.log('Playing successfully')
      } catch (error) {
        console.error('Error playing audio:', error)
      }
    }
  }

  const pause = () => {
    console.log('Pause clicked')
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length
    console.log('Next track:', nextIndex)
    setCurrentTrackIndex(nextIndex)
    setCurrentTime(0)
  }

  const prevTrack = () => {
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length
    console.log('Previous track:', prevIndex)
    setCurrentTrackIndex(prevIndex)
    setCurrentTime(0)
  }

  const selectTrack = (index: number) => {
    if (index >= 0 && index < tracks.length) {
      console.log('Selecting track:', index)
      setCurrentTrackIndex(index)
      setCurrentTime(0)
    }
  }

  const setVolume = (newVolume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume))
    setVolumeState(clampedVolume)
    if (audioRef.current) {
      audioRef.current.volume = clampedVolume
    }
  }

  const seekTo = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  const value: AudioContextType = {
    tracks,
    currentTrack,
    currentTrackIndex,
    isPlaying,
    volume,
    currentTime,
    duration,
    isLoading,
    play,
    pause,
    nextTrack,
    prevTrack,
    selectTrack,
    setVolume,
    seekTo
  }

  return (
    <AudioContext.Provider value={value}>
      {children}
      <audio ref={audioRef} preload="metadata" />
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}
