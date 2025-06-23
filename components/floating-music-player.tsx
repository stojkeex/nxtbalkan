"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Music,
  X,
  Minimize2,
  Shuffle,
  Repeat,
} from "lucide-react"

interface Track {
  id: number
  title: string
  artist: string
  album: string
  duration: string
  cover: string
  audioUrl: string
}

const sampleTracks: Track[] = [
  {
    id: 1,
    title: "Midnight Dreams",
    artist: "Luna Eclipse",
    album: "Neon Nights",
    duration: "3:42",
    cover: "/placeholder.svg?height=300&width=300",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
  },
  {
    id: 2,
    title: "Electric Pulse",
    artist: "Cyber Wave",
    album: "Digital Horizon",
    duration: "4:15",
    cover: "/placeholder.svg?height=300&width=300",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
  },
  {
    id: 3,
    title: "Stellar Journey",
    artist: "Cosmic Drift",
    album: "Beyond Stars",
    duration: "5:28",
    cover: "/placeholder.svg?height=300&width=300",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
  },
]

export default function FloatingMusicPlayer() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [currentTrack, setCurrentTrack] = useState<Track>(sampleTracks[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState([75])
  const [isMuted, setIsMuted] = useState(false)
  const [isShuffled, setIsShuffled] = useState(false)
  const [repeatMode, setRepeatMode] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
    }
  }, [currentTrack])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleProgressChange = (value: number[]) => {
    const audio = audioRef.current
    if (!audio) return

    audio.currentTime = value[0]
    setCurrentTime(value[0])
  }

  const handleVolumeChange = (value: number[]) => {
    const audio = audioRef.current
    if (!audio) return

    setVolume(value)
    audio.volume = value[0] / 100
    setIsMuted(value[0] === 0)
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isMuted) {
      audio.volume = volume[0] / 100
      setIsMuted(false)
    } else {
      audio.volume = 0
      setIsMuted(true)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const nextTrack = () => {
    const currentIndex = sampleTracks.findIndex((track) => track.id === currentTrack.id)
    const nextIndex = (currentIndex + 1) % sampleTracks.length
    setCurrentTrack(sampleTracks[nextIndex])
  }

  const previousTrack = () => {
    const currentIndex = sampleTracks.findIndex((track) => track.id === currentTrack.id)
    const prevIndex = currentIndex === 0 ? sampleTracks.length - 1 : currentIndex - 1
    setCurrentTrack(sampleTracks[prevIndex])
  }

  const openPlayer = () => {
    setIsOpen(true)
    setIsMinimized(false)
  }

  const closePlayer = () => {
    setIsOpen(false)
    setIsMinimized(false)
  }

  const minimizePlayer = () => {
    setIsMinimized(true)
  }

  return (
    <>
      <audio ref={audioRef} src={currentTrack.audioUrl} />

      {/* Floating Icon */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
          <Button
            onClick={openPlayer}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-black shadow-2xl hover:scale-110 transition-all duration-300"
          >
            <Music className="h-6 w-6 md:h-8 md:w-8" />
          </Button>
          {isPlaying && (
            <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full animate-ping"></div>
          )}
        </div>
      )}

      {/* Floating Player */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-500 ease-out ${
            isMinimized
              ? "bottom-4 right-4 w-72 h-16 md:bottom-6 md:right-6 md:w-80 md:h-20"
              : "bottom-4 right-4 left-4 w-auto h-auto max-h-[85vh] md:bottom-6 md:right-6 md:left-auto md:w-96 md:max-h-[80vh]"
          }`}
        >
          <Card className="professional-card hover-card floating-player-glass overflow-hidden shadow-2xl animate-in slide-in-from-bottom-4 slide-in-from-right-4">
            <CardContent className="p-0">
              {/* Minimized View */}
              {isMinimized ? (
                <div className="flex items-center p-3 space-x-2 md:p-4 md:space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={currentTrack.cover || "/placeholder.svg"}
                      alt={currentTrack.album}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate text-xs md:text-sm gradient-text-neon">{currentTrack.title}</p>
                    <p className="text-xs text-muted-foreground truncate hidden md:block">{currentTrack.artist}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={togglePlay}
                      className={`w-7 h-7 md:w-8 md:h-8 hover:bg-white/10 ${isPlaying ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black" : "text-white"}`}
                    >
                      {isPlaying ? (
                        <Pause className="h-3 w-3 md:h-4 md:w-4" />
                      ) : (
                        <Play className="h-3 w-3 md:h-4 md:w-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMinimized(false)}
                      className="w-7 h-7 md:w-8 md:h-8 hover:bg-white/10 text-white"
                    >
                      <Music className="h-3 w-3 md:h-4 md:w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={closePlayer}
                      className="w-7 h-7 md:w-8 md:h-8 hover:bg-white/10 text-white"
                    >
                      <X className="h-3 w-3 md:h-4 md:w-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                /* Full Player View */
                <div className="space-y-3 p-4 md:space-y-4 md:p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h2 className="text-base md:text-lg font-semibold gradient-text-neon">Music Player</h2>
                    <div className="flex items-center space-x-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={minimizePlayer}
                        className="w-7 h-7 md:w-8 md:h-8 hover:bg-white/10 text-white"
                      >
                        <Minimize2 className="h-3 w-3 md:h-4 md:w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={closePlayer}
                        className="w-7 h-7 md:w-8 md:h-8 hover:bg-white/10 text-white"
                      >
                        <X className="h-3 w-3 md:h-4 md:w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Current Track */}
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={currentTrack.cover || "/placeholder.svg"}
                        alt={currentTrack.album}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm md:text-base font-semibold truncate gradient-text-neon">
                        {currentTrack.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground truncate">{currentTrack.artist}</p>
                      <p className="text-xs text-muted-foreground truncate">{currentTrack.album}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <Slider
                      value={[currentTime]}
                      max={duration || 100}
                      step={1}
                      onValueChange={handleProgressChange}
                      className="w-full [&>span:first-child]:h-1 [&>span:first-child]:bg-white/20 [&_[role=slider]]:bg-gradient-to-r [&_[role=slider]]:from-cyan-400 [&_[role=slider]]:to-purple-500 [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-gradient-to-r [&>span:first-child_span]:from-cyan-400 [&>span:first-child_span]:to-purple-500"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>

                  {/* Control Buttons */}
                  <div className="flex items-center justify-center space-x-3 md:space-x-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsShuffled(!isShuffled)}
                      className={`hover:bg-white/10 text-gray-300 w-8 h-8 md:w-10 md:h-10 ${isShuffled ? "text-cyan-400" : ""}`}
                    >
                      <Shuffle className="h-3 w-3 md:h-4 md:w-4" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={previousTrack}
                      className="hover:bg-white/10 text-gray-300 w-8 h-8 md:w-10 md:h-10"
                    >
                      <SkipBack className="h-3 w-3 md:h-4 md:w-4" />
                    </Button>

                    <Button
                      onClick={togglePlay}
                      size="icon"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-black"
                    >
                      {isPlaying ? (
                        <Pause className="h-4 w-4 md:h-5 md:w-5" />
                      ) : (
                        <Play className="h-4 w-4 md:h-5 md:w-5 ml-0.5" />
                      )}
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextTrack}
                      className="hover:bg-white/10 text-gray-300 w-8 h-8 md:w-10 md:h-10"
                    >
                      <SkipForward className="h-3 w-3 md:h-4 md:w-4" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setRepeatMode((repeatMode + 1) % 3)}
                      className={`hover:bg-white/10 text-gray-300 w-8 h-8 md:w-10 md:h-10 ${repeatMode > 0 ? "text-cyan-400" : ""}`}
                    >
                      <Repeat className="h-3 w-3 md:h-4 md:w-4" />
                    </Button>
                  </div>

                  {/* Volume Control */}
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="icon" onClick={toggleMute} className="hover:bg-white/10 w-8 h-8">
                      {isMuted ? (
                        <VolumeX className="h-3 w-3 md:h-4 md:w-4" />
                      ) : (
                        <Volume2 className="h-3 w-3 md:h-4 md:w-4" />
                      )}
                    </Button>
                    <Slider
                      value={isMuted ? [0] : volume}
                      max={100}
                      step={1}
                      onValueChange={handleVolumeChange}
                      className="flex-1 [&>span:first-child]:h-1 [&>span:first-child]:bg-white/20 [&_[role=slider]]:bg-white [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-white"
                    />
                    <span className="text-xs text-muted-foreground w-6 md:w-8">{isMuted ? 0 : volume[0]}</span>
                  </div>

                  {/* Playlist */}
                  <div className="space-y-2 max-h-32 md:max-h-48 overflow-y-auto bg-black/20 rounded-lg p-2 md:p-3 backdrop-blur-sm">
                    <h4 className="text-xs md:text-sm font-medium text-muted-foreground">Playlist</h4>
                    {sampleTracks.map((track) => (
                      <div
                        key={track.id}
                        onClick={() => setCurrentTrack(track)}
                        className={`flex items-center space-x-2 md:space-x-3 p-2 rounded-lg cursor-pointer transition-all hover:bg-white/5 ${
                          currentTrack.id === track.id ? "bg-white/10" : ""
                        }`}
                      >
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded overflow-hidden flex-shrink-0">
                          <img
                            src={track.cover || "/placeholder.svg"}
                            alt={track.album}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className={`text-xs md:text-sm font-medium truncate ${
                              currentTrack.id === track.id ? "gradient-text-neon" : "text-white"
                            }`}
                          >
                            {track.title}
                          </p>
                          <p className="text-xs text-white/70 truncate">{track.artist}</p>
                        </div>
                        <div className="flex items-center space-x-1 md:space-x-2">
                          {currentTrack.id === track.id && isPlaying && (
                            <div className="flex items-center space-x-0.5">
                              <div className="w-0.5 h-2 md:h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                              <div
                                className="w-0.5 h-1.5 md:h-2 bg-purple-500 rounded-full animate-pulse"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                              <div
                                className="w-0.5 h-3 md:h-4 bg-cyan-400 rounded-full animate-pulse"
                                style={{ animationDelay: "0.4s" }}
                              ></div>
                            </div>
                          )}
                          <span className="text-xs text-muted-foreground">{track.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
