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
  Repeat1,
  ChevronDown,
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
    title: "VULTURES",
    artist: "¥$, Ye, Ty Dolla $ign",
    album: "VULTURES 1",
    duration: "4:24",
    cover:
      "https://lh3.googleusercontent.com/Gv6RFeTy0GXha5O_ppV_D-kVlS7MG4vdXMhPfFY30pRaU3TFzDESG_0ORMo5BgdshhRaiZqP1lJfsa4",
    audioUrl: "/music/vultures.mp3",
  },
  {
    id: 2,
    title: "CARNIVAL",
    artist: "¥$, Ye, Ty Dolla $ign",
    album: "VULTURES 1",
    duration: "4:21",
    cover:
      "https://lh3.googleusercontent.com/Gv6RFeTy0GXha5O_ppV_D-kVlS7MG4vdXMhPfFY30pRaU3TFzDESG_0ORMo5BgdshhRaiZqP1lJfsa4",
    audioUrl: "/music/CARNIVAL.mp3",
  },
  {
    id: 3,
    title: "Heartless",
    artist: "Kanye West",
    album: "808's and Heartbreak",
    duration: "3:30",
    cover:
      "https://lh3.googleusercontent.com/exflW3HncdenT5gT0RFYTF4PfxoC2UIAjC3gdVO9troE_u8bW7g8tqvqas9x_hozALD5wu_rYbm0k1Jk",
    audioUrl: "/music/Heartless.mp3",
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
  const [repeatMode, setRepeatMode] = useState(0) // 0: off, 1: all, 2: one
  const [shuffledTracks, setShuffledTracks] = useState<Track[]>([])
  const [currentShuffleIndex, setCurrentShuffleIndex] = useState(0)

  const audioRef = useRef<HTMLAudioElement>(null)

  // Initialize shuffled tracks
  useEffect(() => {
    if (isShuffled && shuffledTracks.length === 0) {
      const shuffled = [...sampleTracks].sort(() => Math.random() - 0.5)
      setShuffledTracks(shuffled)
      const currentIndex = shuffled.findIndex((track) => track.id === currentTrack.id)
      setCurrentShuffleIndex(currentIndex >= 0 ? currentIndex : 0)
    }
  }, [isShuffled, currentTrack])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)

    const handleEnded = () => {
      handleTrackEnd()
    }

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [currentTrack, repeatMode, isShuffled])

  // Handle what happens when track ends
  const handleTrackEnd = () => {
    if (repeatMode === 2) {
      // Repeat current track
      const audio = audioRef.current
      if (audio) {
        audio.currentTime = 0
        audio.play()
      }
    } else if (repeatMode === 1 || isShuffled) {
      // Repeat all or shuffle - go to next track
      nextTrack()
    } else {
      // No repeat - stop playing
      setIsPlaying(false)
    }
  }

  // Auto-load & play the new track (fixes NotSupportedError)
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // force reload so browser recognises the new source
    audio.load()

    const handleReady = () => {
      // play only after the source is ready
      if (isPlaying) {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(console.error)
      }
    }

    audio.addEventListener("loadeddata", handleReady)
    return () => audio.removeEventListener("loadeddata", handleReady)
  }, [currentTrack])

  // Lock body scroll when mobile player is open
  useEffect(() => {
    if (isOpen && !isMinimized) {
      // Only lock on mobile
      const isMobile = window.innerWidth < 768
      if (isMobile) {
        document.body.style.overflow = "hidden"
        document.body.style.position = "fixed"
        document.body.style.width = "100%"
      }
    } else {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
    }

    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
    }
  }, [isOpen, isMinimized])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(console.error)
    }
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

  const toggleShuffle = () => {
    if (!isShuffled) {
      // Turn on shuffle
      const shuffled = [...sampleTracks].sort(() => Math.random() - 0.5)
      setShuffledTracks(shuffled)
      const currentIndex = shuffled.findIndex((track) => track.id === currentTrack.id)
      setCurrentShuffleIndex(currentIndex >= 0 ? currentIndex : 0)
      setIsShuffled(true)
    } else {
      // Turn off shuffle
      setIsShuffled(false)
      setShuffledTracks([])
      setCurrentShuffleIndex(0)
    }
  }

  const toggleRepeat = () => {
    setRepeatMode((prev) => (prev + 1) % 3)
    // 0: no repeat, 1: repeat all, 2: repeat one
  }

  const nextTrack = () => {
    if (isShuffled && shuffledTracks.length > 0) {
      const nextIndex = (currentShuffleIndex + 1) % shuffledTracks.length
      setCurrentShuffleIndex(nextIndex)
      setCurrentTrack(shuffledTracks[nextIndex])
    } else {
      const currentIndex = sampleTracks.findIndex((track) => track.id === currentTrack.id)
      const nextIndex = (currentIndex + 1) % sampleTracks.length
      setCurrentTrack(sampleTracks[nextIndex])
    }
    setIsPlaying(true)
  }

  const previousTrack = () => {
    if (isShuffled && shuffledTracks.length > 0) {
      const prevIndex = currentShuffleIndex === 0 ? shuffledTracks.length - 1 : currentShuffleIndex - 1
      setCurrentShuffleIndex(prevIndex)
      setCurrentTrack(shuffledTracks[prevIndex])
    } else {
      const currentIndex = sampleTracks.findIndex((track) => track.id === currentTrack.id)
      const prevIndex = currentIndex === 0 ? sampleTracks.length - 1 : currentIndex - 1
      setCurrentTrack(sampleTracks[prevIndex])
    }
    setIsPlaying(true)
  }

  const selectTrack = (track: Track) => {
    setCurrentTrack(track)
    setIsPlaying(true)

    // Update shuffle index if shuffled
    if (isShuffled && shuffledTracks.length > 0) {
      const shuffleIndex = shuffledTracks.findIndex((t) => t.id === track.id)
      if (shuffleIndex >= 0) {
        setCurrentShuffleIndex(shuffleIndex)
      }
    }
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

  const getRepeatIcon = () => {
    switch (repeatMode) {
      case 1:
        return <Repeat className="h-3 w-3 md:h-4 md:w-4" />
      case 2:
        return <Repeat1 className="h-3 w-3 md:h-4 md:w-4" />
      default:
        return <Repeat className="h-3 w-3 md:h-4 md:w-4" />
    }
  }

  const getRepeatIconMobile = () => {
    switch (repeatMode) {
      case 1:
        return <Repeat className="h-6 w-6" />
      case 2:
        return <Repeat1 className="h-6 w-6" />
      default:
        return <Repeat className="h-6 w-6" />
    }
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

      {/* Mobile Full Screen Player */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-500 ease-out ${
            isMinimized
              ? "bottom-4 right-4 w-72 h-16 md:bottom-6 md:right-6 md:w-80 md:h-20"
              : "inset-0 md:bottom-6 md:right-6 md:left-auto md:top-auto md:w-96 md:max-h-[80vh] md:inset-auto"
          }`}
        >
          {/* Mobile Full Screen View */}
          <div className={`${isMinimized ? "hidden" : "block md:hidden"} h-full w-full`}>
            <div className="h-full w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-4 pt-12">
                <Button variant="ghost" size="icon" onClick={minimizePlayer} className="text-white hover:bg-white/10">
                  <ChevronDown className="h-6 w-6" />
                </Button>
                <h2 className="text-lg font-semibold gradient-text-neon">Now Playing</h2>
                <Button variant="ghost" size="icon" onClick={closePlayer} className="text-white hover:bg-white/10">
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Mobile Album Art */}
              <div className="flex justify-center px-8 py-8">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={currentTrack.cover || "/placeholder.svg"}
                    alt={currentTrack.album}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Mobile Track Info */}
              <div className="px-8 py-4 text-center">
                <h1 className="text-2xl font-bold gradient-text-neon mb-2">{currentTrack.title}</h1>
                <p className="text-lg text-gray-300 mb-1">{currentTrack.artist}</p>
                <p className="text-sm text-gray-400">{currentTrack.album}</p>
              </div>

              {/* Mobile Progress Bar */}
              <div className="px-8 py-4">
                <Slider
                  value={[currentTime]}
                  max={duration || 100}
                  step={1}
                  onValueChange={handleProgressChange}
                  className="w-full [&>span:first-child]:h-1 [&>span:first-child]:bg-white/20 [&_[role=slider]]:bg-gradient-to-r [&_[role=slider]]:from-cyan-400 [&_[role=slider]]:to-purple-500 [&_[role=slider]]:w-4 [&_[role=slider]]:h-4 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-gradient-to-r [&>span:first-child_span]:from-cyan-400 [&>span:first-child_span]:to-purple-500"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Mobile Controls */}
              <div className="px-8 py-6">
                <div className="flex items-center justify-center space-x-8">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleShuffle}
                    className={`hover:bg-white/10 text-gray-300 w-12 h-12 ${isShuffled ? "text-cyan-400" : ""}`}
                  >
                    <Shuffle className="h-6 w-6" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={previousTrack}
                    className="hover:bg-white/10 text-gray-300 w-12 h-12"
                  >
                    <SkipBack className="h-7 w-7" />
                  </Button>

                  <Button
                    onClick={togglePlay}
                    size="icon"
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-black"
                  >
                    {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextTrack}
                    className="hover:bg-white/10 text-gray-300 w-12 h-12"
                  >
                    <SkipForward className="h-7 w-7" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleRepeat}
                    className={`hover:bg-white/10 text-gray-300 w-12 h-12 ${repeatMode > 0 ? "text-cyan-400" : ""}`}
                  >
                    {getRepeatIconMobile()}
                  </Button>
                </div>
              </div>

              {/* Mobile Playlist */}
              <div className="px-4 pb-8 flex-1 overflow-hidden">
                <div className="bg-black/20 rounded-2xl p-4 h-full overflow-y-auto backdrop-blur-sm">
                  <h4 className="text-lg font-medium text-gray-300 mb-4">Up Next</h4>
                  {sampleTracks.map((track) => (
                    <div
                      key={track.id}
                      onClick={() => selectTrack(track)}
                      className={`flex items-center space-x-4 p-3 rounded-xl cursor-pointer transition-all hover:bg-white/5 mb-2 ${
                        currentTrack.id === track.id ? "bg-white/10" : ""
                      }`}
                    >
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={track.cover || "/placeholder.svg"}
                          alt={track.album}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-base font-medium truncate ${
                            currentTrack.id === track.id ? "gradient-text-neon" : "text-white"
                          }`}
                        >
                          {track.title}
                        </p>
                        <p className="text-sm text-gray-400 truncate">{track.artist}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {currentTrack.id === track.id && isPlaying && (
                          <div className="flex items-center space-x-1">
                            <div className="w-1 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                            <div
                              className="w-1 h-3 bg-purple-500 rounded-full animate-pulse"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                            <div
                              className="w-1 h-5 bg-cyan-400 rounded-full animate-pulse"
                              style={{ animationDelay: "0.4s" }}
                            ></div>
                          </div>
                        )}
                        <span className="text-sm text-gray-400">{track.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Floating Player */}
          <Card
            className={`${isMinimized ? "block" : "hidden md:block"} professional-card hover-card floating-player-glass overflow-hidden shadow-2xl animate-in slide-in-from-bottom-4 slide-in-from-right-4`}
          >
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
                /* Desktop Full Player View */
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
                      onClick={toggleShuffle}
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
                      onClick={toggleRepeat}
                      className={`hover:bg-white/10 text-gray-300 w-8 h-8 md:w-10 md:h-10 ${repeatMode > 0 ? "text-cyan-400" : ""}`}
                    >
                      {getRepeatIcon()}
                    </Button>
                  </div>

                  {/* Volume Control - Desktop Only */}
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
                        onClick={() => selectTrack(track)}
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
