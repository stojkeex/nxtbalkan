"use client"

import type React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
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
  List,
  Plus,
  FolderOpen,
  Heart,
  MoreHorizontal,
  Check,
  Search,
} from "lucide-react"

interface Track {
  id: number
  title: string
  artist: string
  album: string
  duration: string
  cover: string
  audioUrl: string
  fileObject?: File
}

interface Playlist {
  id: number
  name: string
  tracks: Track[]
  isCustom: boolean
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

const defaultPlaylists: Playlist[] = [
  {
    id: 1,
    name: "All Songs",
    tracks: sampleTracks,
    isCustom: false,
  },
  {
    id: 2,
    name: "Favorites",
    tracks: [],
    isCustom: false,
  },
]

export default function FloatingMusicPlayer() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [showPlaylistSelector, setShowPlaylistSelector] = useState(false)
  const [showAddToPlaylist, setShowAddToPlaylist] = useState(false)
  const [showDesktopPlaylistSelector, setShowDesktopPlaylistSelector] = useState(false)
  const [currentTrack, setCurrentTrack] = useState<Track>(sampleTracks[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState([75])
  const [isMuted, setIsMuted] = useState(false)
  const [isShuffled, setIsShuffled] = useState(false)
  const [repeatMode, setRepeatMode] = useState(0)
  const [shuffledTracks, setShuffledTracks] = useState<Track[]>([])
  const [currentShuffleIndex, setCurrentShuffleIndex] = useState(0)
  const [playlists, setPlaylists] = useState<Playlist[]>(defaultPlaylists)
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist>(defaultPlaylists[0])
  const [newPlaylistName, setNewPlaylistName] = useState("")
  const [showCreatePlaylist, setShowCreatePlaylist] = useState(false)
  const [selectedPlaylistForAdd, setSelectedPlaylistForAdd] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [allTracks, setAllTracks] = useState<Track[]>(sampleTracks)
  const [notification, setNotification] = useState("")

  const audioRef = useRef<HTMLAudioElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const tempAudioRef = useRef<HTMLAudioElement>(null)

  // 🎵 Media Session API Setup
  useEffect(() => {
    if ("mediaSession" in navigator) {
      // Set metadata for current track
      navigator.mediaSession.metadata = new MediaMetadata({
        title: `${currentTrack.title} • NXT Balkan`,
        artist: currentTrack.artist,
        album: currentTrack.album,
        artwork: [
          {
            src: currentTrack.cover || "/favicon/favicon-192x192.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: currentTrack.cover || "/favicon/favicon-192x192.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: currentTrack.cover || "/favicon/favicon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: currentTrack.cover || "/favicon/favicon-192x192.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: currentTrack.cover || "/favicon/favicon-192x192.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: currentTrack.cover || "/favicon/favicon-192x192.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      })

      // Set playback state
      navigator.mediaSession.playbackState = isPlaying ? "playing" : "paused"

      // Set action handlers
      navigator.mediaSession.setActionHandler("play", () => {
        console.log("🎵 Media Session: Play")
        togglePlay()
      })

      navigator.mediaSession.setActionHandler("pause", () => {
        console.log("🎵 Media Session: Pause")
        togglePlay()
      })

      navigator.mediaSession.setActionHandler("previoustrack", () => {
        console.log("🎵 Media Session: Previous Track")
        previousTrack()
      })

      navigator.mediaSession.setActionHandler("nexttrack", () => {
        console.log("🎵 Media Session: Next Track")
        nextTrack()
      })

      navigator.mediaSession.setActionHandler("stop", () => {
        console.log("🎵 Media Session: Stop")
        setIsPlaying(false)
        if (audioRef.current) {
          audioRef.current.pause()
          audioRef.current.currentTime = 0
        }
      })

      // Seek handlers for progress control
      navigator.mediaSession.setActionHandler("seekbackward", (details) => {
        console.log("🎵 Media Session: Seek Backward", details.seekOffset)
        if (audioRef.current) {
          audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - (details.seekOffset || 10))
        }
      })

      navigator.mediaSession.setActionHandler("seekforward", (details) => {
        console.log("🎵 Media Session: Seek Forward", details.seekOffset)
        if (audioRef.current) {
          audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + (details.seekOffset || 10))
        }
      })

      navigator.mediaSession.setActionHandler("seekto", (details) => {
        console.log("🎵 Media Session: Seek To", details.seekTime, "Duration:", duration)
        if (
          audioRef.current &&
          details.seekTime !== undefined &&
          details.seekTime >= 0 &&
          details.seekTime <= duration
        ) {
          const seekTime = Math.min(details.seekTime, duration)
          audioRef.current.currentTime = seekTime
          setCurrentTime(seekTime)
          console.log("🎵 Seeked to:", seekTime)
        }
      })

      // Update position state for progress bar
      if (isPlaying && duration > 0 && currentTime >= 0) {
        try {
          navigator.mediaSession.setPositionState({
            duration: duration,
            playbackRate: 1.0,
            position: currentTime,
          })
        } catch (error) {
          console.log("Media Session position error:", error)
        }
      }
    }
  }, [currentTrack, isPlaying, currentTime, duration])

  // Update Media Session when track changes
  useEffect(() => {
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: `${currentTrack.title} • NXT Balkan`,
        artist: currentTrack.artist,
        album: currentTrack.album,
        artwork: [
          {
            src: currentTrack.cover || "/favicon/favicon-192x192.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: currentTrack.cover || "/favicon/favicon-192x192.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: currentTrack.cover || "/favicon/favicon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: currentTrack.cover || "/favicon/favicon-192x192.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: currentTrack.cover || "/favicon/favicon-192x192.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: currentTrack.cover || "/favicon/favicon-192x192.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      })
    }
  }, [currentTrack])

  // Handle file uploads with mobile support
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return

    const newTracks: Track[] = []
    let hasValidFiles = false

    for (const file of Array.from(files)) {
      if (!file.type.startsWith("audio/") && !file.name.toLowerCase().endsWith(".mp3")) {
        continue
      }

      hasValidFiles = true
      let audioUrl = ""
      let trackDuration = "0:00"

      try {
        audioUrl = URL.createObjectURL(file)
        trackDuration = await getAudioDuration(file)
      } catch (error) {
        console.log("Using fallback for file:", file.name)
        audioUrl = ""
      }

      newTracks.push({
        id: Date.now() + Math.random(),
        title: file.name.replace(/\.[^/.]+$/, ""),
        artist: "Unknown Artist",
        album: "Local Files",
        duration: trackDuration,
        cover: "/placeholder.svg?height=300&width=300",
        audioUrl: audioUrl,
        fileObject: audioUrl ? undefined : file,
      })
    }

    if (!hasValidFiles) {
      setNotification("Please select valid MP3 files")
      setTimeout(() => setNotification(""), 3000)
      return
    }

    setAllTracks((prev) => [...prev, ...newTracks])
    setPlaylists((prev) =>
      prev.map((playlist) =>
        playlist.name === "All Songs" ? { ...playlist, tracks: [...playlist.tracks, ...newTracks] } : playlist,
      ),
    )

    if (currentPlaylist.name === "All Songs") {
      setCurrentPlaylist((prev) => ({
        ...prev,
        tracks: [...prev.tracks, ...newTracks],
      }))
    }

    setNotification(`Added ${newTracks.length} track(s)`)
    setTimeout(() => setNotification(""), 3000)
    if (event.target) event.target.value = ""
  }

  const getAudioDuration = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const audio = new Audio()
      const url = URL.createObjectURL(file)

      audio.addEventListener("loadedmetadata", () => {
        const duration = audio.duration || 0
        const minutes = Math.floor(duration / 60)
        const seconds = Math.floor(duration % 60)
        resolve(`${minutes}:${seconds.toString().padStart(2, "0")}`)
        URL.revokeObjectURL(url)
      })

      audio.addEventListener("error", () => {
        resolve("0:00")
        URL.revokeObjectURL(url)
      })

      audio.src = url
    })
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Resetiraj pozicijo samo pri spremembi pesmi
    audio.currentTime = 0
    setCurrentTime(0)

    if (currentTrack.fileObject && !currentTrack.audioUrl) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          audio.src = e.target.result as string
          if (isPlaying) audio.play().catch(console.error)
        }
      }
      reader.readAsDataURL(currentTrack.fileObject)
    } else {
      audio.src = currentTrack.audioUrl
      if (isPlaying) audio.play().catch(console.error)
    }

    const updateTime = () => {
      const currentTimeValue = audio.currentTime
      setCurrentTime(currentTimeValue)

      // Popravi Media Session position - posodobi samo če je pesem v teku in imamo veljavne vrednosti
      if ("mediaSession" in navigator && duration > 0 && currentTimeValue >= 0 && currentTimeValue <= duration) {
        try {
          navigator.mediaSession.setPositionState({
            duration: Math.floor(duration),
            playbackRate: audio.playbackRate || 1.0,
            position: Math.floor(currentTimeValue),
          })
          console.log("🎵 Position updated:", Math.floor(currentTimeValue), "/", Math.floor(duration))
        } catch (error) {
          console.log("Position state error:", error)
        }
      }
    }

    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => handleTrackEnd()

    // Enhanced audio event listeners
    const handlePlay = () => {
      setIsPlaying(true)
      if ("mediaSession" in navigator) {
        navigator.mediaSession.playbackState = "playing"
      }
    }

    const handlePause = () => {
      setIsPlaying(false)
      if ("mediaSession" in navigator) {
        navigator.mediaSession.playbackState = "paused"
      }
    }

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("play", handlePlay)
    audio.addEventListener("pause", handlePause)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("play", handlePlay)
      audio.removeEventListener("pause", handlePause)
    }
  }, [currentTrack.id])

  const handleTrackEnd = useCallback(() => {
    if (repeatMode === 2) {
      audioRef.current?.play()
    } else {
      nextTrack()
    }
  }, [repeatMode])

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      console.log("🎵 Pausing at:", audioRef.current.currentTime)
      audioRef.current.pause()
    } else {
      console.log("🎵 Resuming from:", audioRef.current.currentTime)
      // Ne spreminjaj currentTime, samo nadaljuj predvajanje
      audioRef.current.play().catch(console.error)
    }
    // State se bo posodobil preko event listenerjev
  }

  const nextTrack = useCallback(() => {
    const tracks = isShuffled ? shuffledTracks : currentPlaylist.tracks
    const currentIndex = tracks.findIndex((t) => t.id === currentTrack.id)
    const nextIndex = (currentIndex + 1) % tracks.length
    console.log("🎵 Next track:", tracks[nextIndex].title)
    setCurrentTrack(tracks[nextIndex])
    setCurrentTime(0) // Resetiraj pozicijo za novo pesem
    setIsPlaying(true)
  }, [currentTrack.id, currentPlaylist.tracks, isShuffled, shuffledTracks])

  const previousTrack = useCallback(() => {
    const tracks = isShuffled ? shuffledTracks : currentPlaylist.tracks
    const currentIndex = tracks.findIndex((t) => t.id === currentTrack.id)
    const prevIndex = currentIndex === 0 ? tracks.length - 1 : currentIndex - 1
    console.log("🎵 Previous track:", tracks[prevIndex].title)
    setCurrentTrack(tracks[prevIndex])
    setCurrentTime(0) // Resetiraj pozicijo za novo pesem
    setIsPlaying(true)
  }, [currentTrack.id, currentPlaylist.tracks, isShuffled, shuffledTracks])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const toggleShuffle = () => {
    if (!isShuffled) {
      const shuffled = [...currentPlaylist.tracks].sort(() => Math.random() - 0.5)
      setShuffledTracks(shuffled)
      setCurrentShuffleIndex(shuffled.findIndex((t) => t.id === currentTrack.id))
    }
    setIsShuffled(!isShuffled)
  }

  const toggleRepeat = () => {
    setRepeatMode((prev) => (prev + 1) % 3)
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleProgressChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0]
      setCurrentTime(value[0])
    }
  }

  const handleVolumeChange = (value: number[]) => {
    if (audioRef.current) {
      setVolume(value)
      audioRef.current.volume = value[0] / 100
      setIsMuted(value[0] === 0)
    }
  }

  const selectTrack = (track: Track) => {
    console.log("🎵 Selecting new track:", track.title)
    setCurrentTrack(track)
    setCurrentTime(0) // Resetiraj samo pri novi pesmi
    setIsPlaying(true)
  }

  const createNewPlaylist = () => {
    if (newPlaylistName.trim()) {
      const newPlaylist: Playlist = {
        id: Date.now(),
        name: newPlaylistName.trim(),
        tracks: [],
        isCustom: true,
      }
      setPlaylists((prev) => [...prev, newPlaylist])
      setNewPlaylistName("")
      setShowCreatePlaylist(false)
      setShowAddToPlaylist(true)
      setSelectedPlaylistForAdd(newPlaylist.id)
    }
  }

  const addTrackToPlaylist = (trackId: number, playlistId: number) => {
    const track = allTracks.find((t) => t.id === trackId)
    if (!track) return

    setPlaylists((prev) =>
      prev.map((playlist) =>
        playlist.id === playlistId && !playlist.tracks.some((t) => t.id === trackId)
          ? { ...playlist, tracks: [...playlist.tracks, track] }
          : playlist,
      ),
    )
  }

  const selectPlaylist = (playlist: Playlist) => {
    setCurrentPlaylist(playlist)
    setShowPlaylistSelector(false)
    setShowDesktopPlaylistSelector(false)
    if (playlist.tracks.length > 0) {
      setCurrentTrack(playlist.tracks[0])
    }
  }

  const filteredTracks = allTracks.filter(
    (track) =>
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.album.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const openPlayer = () => {
    setIsOpen(true)
    setIsMinimized(false)
    // Dodaj smooth animacijo
    document.body.style.overflow = "hidden" // Prepreči scroll med animacijo
    setTimeout(() => {
      document.body.style.overflow = "auto"
    }, 500)
  }

  const closePlayer = () => {
    // Dodaj fade out animacijo
    const playerElement = document.querySelector('[data-player="main"]')
    if (playerElement) {
      playerElement.classList.add("animate-out", "slide-out-to-left-4", "fade-out")
    }
    setTimeout(() => {
      setIsOpen(false)
      setIsMinimized(false)
    }, 300)
  }

  const minimizePlayer = () => {
    setIsMinimized(true)
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl || (currentTrack.fileObject ? "" : "")}
        crossOrigin="anonymous"
      />
      <input
        ref={fileInputRef}
        type="file"
        accept="audio/*,.mp3"
        multiple
        onChange={handleFileUpload}
        className="hidden"
      />

      {notification && (
        <div className="fixed bottom-4 left-4 right-4 bg-black/90 text-white p-3 rounded-lg text-center z-50 flex items-center justify-between">
          <span>{notification}</span>
          <Button onClick={() => setNotification("")} size="sm">
            OK
          </Button>
        </div>
      )}

      {!isOpen && (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50">
          <Button
            onClick={openPlayer}
            className="w-10 h-16 md:w-12 md:h-20 rounded-r-xl rounded-l-none bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-black shadow-2xl hover:scale-105 hover:translate-x-1 transition-all duration-300 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <Music className="h-4 w-4 md:h-5 md:w-5 relative z-10" />
          </Button>
          {isPlaying && (
            <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full animate-ping"></div>
          )}
        </div>
      )}

      {isOpen && (
        <div
          data-player="main"
          className={`fixed z-50 transition-all duration-500 ease-out ${
            isMinimized
              ? "bottom-4 left-0 w-72 h-16 md:bottom-6 md:left-0 md:w-80 md:h-20"
              : "inset-0 md:bottom-6 md:left-0 md:right-auto md:top-auto md:w-96 md:max-h-[80vh] md:inset-auto"
          }`}
        >
          {/* Mobile Full Screen View */}
          <div className={`${isMinimized ? "hidden" : "block md:hidden"} h-full w-full`}>
            <div className="h-full w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-y-auto">
              <div className="sticky top-0 z-10 bg-gradient-to-b from-gray-900 to-gray-900/95 backdrop-blur-sm flex items-center justify-between p-4 pt-12">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={minimizePlayer}
                  className="text-white hover:bg-white/10 w-12 h-12"
                >
                  <ChevronDown className="h-7 w-7" />
                </Button>
                <div className="text-center">
                  <h2 className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    NXT Balkan
                  </h2>
                  <p className="text-xs text-gray-400">Music Player</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closePlayer}
                  className="text-white hover:bg-white/10 w-12 h-12"
                >
                  <X className="h-7 w-7" />
                </Button>
              </div>

              {showPlaylistSelector && (
                <div className="absolute inset-0 bg-black/90 backdrop-blur-sm z-20 flex flex-col">
                  <div className="flex items-center justify-between p-4 pt-12">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      Select Playlist
                    </h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowPlaylistSelector(false)}
                      className="text-white hover:bg-white/10 w-12 h-12"
                    >
                      <X className="h-7 w-7" />
                    </Button>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4">
                    <div className="mb-6">
                      <Button
                        onClick={() => setShowCreatePlaylist(true)}
                        className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-black font-semibold py-4 rounded-xl"
                      >
                        <Plus className="h-6 w-6 mr-2" />
                        Create New Playlist
                      </Button>

                      <Button
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full mt-3 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 rounded-xl"
                      >
                        <FolderOpen className="h-6 w-6 mr-2" />
                        Add Local Files
                      </Button>
                    </div>

                    <div className="space-y-3">
                      {playlists.map((playlist) => (
                        <div
                          key={playlist.id}
                          onClick={() => selectPlaylist(playlist)}
                          className={`p-4 rounded-xl cursor-pointer transition-all hover:bg-white/10 ${
                            currentPlaylist.id === playlist.id ? "bg-white/20" : "bg-white/5"
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
                              {playlist.name === "Favorites" ? (
                                <Heart className="h-6 w-6 text-black" />
                              ) : (
                                <List className="h-6 w-6 text-black" />
                              )}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-white">{playlist.name}</h4>
                              <p className="text-sm text-gray-400">{playlist.tracks.length} songs</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {showCreatePlaylist && (
                <div className="absolute inset-0 bg-black/90 backdrop-blur-sm z-30 flex flex-col">
                  <div className="flex items-center justify-between p-4 pt-12">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      Create Playlist
                    </h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowCreatePlaylist(false)}
                      className="text-white hover:bg-white/10 w-12 h-12"
                    >
                      <X className="h-7 w-7" />
                    </Button>
                  </div>

                  <div className="flex-1 p-4">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Playlist Name</label>
                        <input
                          type="text"
                          value={newPlaylistName}
                          onChange={(e) => setNewPlaylistName(e.target.value)}
                          placeholder="Enter playlist name..."
                          className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                      </div>
                      <Button
                        onClick={createNewPlaylist}
                        disabled={!newPlaylistName.trim()}
                        className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-black font-semibold py-4 rounded-xl disabled:opacity-50"
                      >
                        Create Playlist
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {showAddToPlaylist && (
                <div className="absolute inset-0 bg-black/90 backdrop-blur-sm z-30 flex flex-col">
                  <div className="flex items-center justify-between p-4 pt-12">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      Add Songs
                    </h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowAddToPlaylist(false)}
                      className="text-white hover:bg-white/10 w-12 h-12"
                    >
                      <X className="h-7 w-7" />
                    </Button>
                  </div>

                  <div className="p-4">
                    <div className="relative mb-4">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search songs..."
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto px-4 pb-4">
                    <div className="space-y-2">
                      {filteredTracks.map((track) => {
                        const isInPlaylist = selectedPlaylistForAdd
                          ? playlists
                              .find((p) => p.id === selectedPlaylistForAdd)
                              ?.tracks.some((t) => t.id === track.id)
                          : false

                        return (
                          <div
                            key={track.id}
                            onClick={() =>
                              selectedPlaylistForAdd && addTrackToPlaylist(track.id, selectedPlaylistForAdd)
                            }
                            className={`flex items-center space-x-4 p-3 rounded-xl cursor-pointer transition-all hover:bg-white/5 ${
                              isInPlaylist ? "bg-green-500/20" : "bg-white/5"
                            }`}
                          >
                            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src={track.cover || "/placeholder.svg?height=48&width=48"}
                                alt={track.album}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-base font-medium truncate text-white">{track.title}</p>
                              <p className="text-sm text-gray-400 truncate">{track.artist}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              {isInPlaylist && <Check className="h-5 w-5 text-green-400" />}
                              <span className="text-sm text-gray-400">{track.duration}</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}

              {!showPlaylistSelector && !showCreatePlaylist && !showAddToPlaylist && (
                <div className="pb-4">
                  <div className="flex justify-center px-8 py-4">
                    <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={currentTrack.cover || "/placeholder.svg?height=288&width=288"}
                        alt={currentTrack.album}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="px-8 py-2 text-center">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-1">
                      {currentTrack.title}
                    </h1>
                    <p className="text-base text-gray-300 mb-1">{currentTrack.artist}</p>
                    <p className="text-sm text-gray-400">{currentTrack.album} • NXT Balkan</p>
                  </div>

                  <div className="px-8 py-3">
                    <Slider
                      value={[currentTime]}
                      max={duration || 100}
                      step={1}
                      onValueChange={handleProgressChange}
                      className="w-full [&>span:first-child]:h-2 [&>span:first-child]:bg-white/20 [&_[role=slider]]:bg-gradient-to-r [&_[role=slider]]:from-cyan-400 [&_[role=slider]]:to-purple-500 [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-gradient-to-r [&>span:first-child_span]:from-cyan-400 [&>span:first-child_span]:to-purple-500"
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-2">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>

                  <div className="px-8 py-4">
                    <div className="flex items-center justify-center space-x-8">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleShuffle}
                        className={`hover:bg-white/10 text-gray-300 w-14 h-14 ${isShuffled ? "text-cyan-400" : ""}`}
                      >
                        <Shuffle className="h-7 w-7" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={previousTrack}
                        className="hover:bg-white/10 text-gray-300 w-14 h-14"
                      >
                        <SkipBack className="h-8 w-8" />
                      </Button>

                      <Button
                        onClick={togglePlay}
                        size="icon"
                        className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-black"
                      >
                        {isPlaying ? <Pause className="h-10 w-10" /> : <Play className="h-10 w-10 ml-1" />}
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={nextTrack}
                        className="hover:bg-white/10 text-gray-300 w-14 h-14"
                      >
                        <SkipForward className="h-8 w-8" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleRepeat}
                        className={`hover:bg-white/10 text-gray-300 w-14 h-14 ${repeatMode > 0 ? "text-cyan-400" : ""}`}
                      >
                        {repeatMode === 2 ? <Repeat1 className="h-7 w-7" /> : <Repeat className="h-7 w-7" />}
                      </Button>
                    </div>
                  </div>

                  <div className="px-4 pb-8">
                    <div className="bg-black/20 rounded-2xl p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-medium text-gray-300 flex items-center">
                          <List className="h-5 w-5 mr-2" />
                          {currentPlaylist.name} ({currentPlaylist.tracks.length} songs)
                        </h4>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setShowPlaylistSelector(true)}
                          className="text-gray-300 hover:bg-white/10 w-10 h-10"
                        >
                          <MoreHorizontal className="h-5 w-5" />
                        </Button>
                      </div>
                      <div className="space-y-2">
                        {currentPlaylist.tracks.map((track, index) => (
                          <div
                            key={track.id}
                            onClick={() => selectTrack(track)}
                            className={`flex items-center space-x-4 p-3 rounded-xl cursor-pointer transition-all hover:bg-white/5 ${
                              currentTrack.id === track.id ? "bg-white/10" : ""
                            }`}
                          >
                            <div className="w-6 text-center">
                              <span className="text-sm text-gray-400">{index + 1}</span>
                            </div>
                            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src={track.cover || "/placeholder.svg?height=48&width=48"}
                                alt={track.album}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p
                                className={`text-base font-medium truncate ${
                                  currentTrack.id === track.id
                                    ? "bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                                    : "text-white"
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
              )}
            </div>
          </div>

          {/* Desktop Floating Player */}
          <Card
            className={`${isMinimized ? "block" : "hidden md:block"} bg-black/90 backdrop-blur-xl border-gray-800 overflow-hidden shadow-2xl animate-in slide-in-from-bottom-4 slide-in-from-left-4 transform transition-all duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <CardContent className="p-0">
              {showDesktopPlaylistSelector && (
                <div className="absolute inset-0 bg-black/90 backdrop-blur-sm z-30 rounded-lg overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Select Playlist
                      </h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setShowDesktopPlaylistSelector(false)}
                        className="text-white hover:bg-white/10 w-8 h-8"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {playlists.map((playlist) => (
                        <div
                          key={playlist.id}
                          onClick={() => selectPlaylist(playlist)}
                          className={`p-3 rounded-lg cursor-pointer transition-all hover:bg-white/10 ${
                            currentPlaylist.id === playlist.id ? "bg-white/20" : "bg-white/5"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
                              {playlist.name === "Favorites" ? (
                                <Heart className="h-4 w-4 text-black" />
                              ) : (
                                <List className="h-4 w-4 text-black" />
                              )}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-white text-sm">{playlist.name}</h4>
                              <p className="text-xs text-gray-400">{playlist.tracks.length} songs</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 space-y-2">
                      <Button
                        onClick={() => {
                          setShowDesktopPlaylistSelector(false)
                          setShowCreatePlaylist(true)
                        }}
                        className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-black font-semibold py-2 rounded-lg text-sm"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Create New Playlist
                      </Button>

                      <Button
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-2 rounded-lg text-sm"
                      >
                        <FolderOpen className="h-4 w-4 mr-2" />
                        Add Local Files
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {isMinimized ? (
                <div className="flex items-center p-3 space-x-2 md:p-4 md:space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={currentTrack.cover || "/placeholder.svg?height=48&width=48"}
                      alt={currentTrack.album}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate text-xs md:text-sm bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      {currentTrack.title}
                    </p>
                    <p className="text-xs text-gray-400 truncate hidden md:block">{currentTrack.artist}</p>
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
                <div className="space-y-3 p-4 md:space-y-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-base md:text-lg font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      NXT Balkan Player
                    </h2>
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

                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={currentTrack.cover || "/placeholder.svg?height=64&width=64"}
                        alt={currentTrack.album}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm md:text-base font-semibold truncate bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        {currentTrack.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-400 truncate">{currentTrack.artist}</p>
                      <p className="text-xs text-gray-500 truncate">{currentTrack.album} • NXT Balkan</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Slider
                      value={[currentTime]}
                      max={duration || 100}
                      step={1}
                      onValueChange={handleProgressChange}
                      className="w-full [&>span:first-child]:h-1 [&>span:first-child]:bg-white/20 [&_[role=slider]]:bg-gradient-to-r [&_[role=slider]]:from-cyan-400 [&_[role=slider]]:to-purple-500 [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-gradient-to-r [&>span:first-child_span]:from-cyan-400 [&>span:first-child_span]:to-purple-500"
                    />
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>

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
                      {repeatMode === 2 ? (
                        <Repeat1 className="h-3 w-3 md:h-4 md:w-4" />
                      ) : (
                        <Repeat className="h-3 w-3 md:h-4 md:w-4" />
                      )}
                    </Button>
                  </div>

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
                    <span className="text-xs text-gray-400 w-6 md:w-8">{isMuted ? 0 : volume[0]}</span>
                  </div>

                  <div className="space-y-2 max-h-32 md:max-h-48 overflow-y-auto bg-black/20 rounded-lg p-2 md:p-3 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <h4
                        className="text-xs md:text-sm font-medium text-gray-400 cursor-pointer hover:text-cyan-400 transition-colors"
                        onClick={() => setShowDesktopPlaylistSelector(true)}
                      >
                        {currentPlaylist.name} ▼
                      </h4>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-6 h-6 hover:bg-white/10 text-gray-400"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    {currentPlaylist.tracks.map((track) => (
                      <div
                        key={track.id}
                        onClick={() => selectTrack(track)}
                        className={`flex items-center space-x-2 md:space-x-3 p-2 rounded-lg cursor-pointer transition-all hover:bg-white/5 ${
                          currentTrack.id === track.id ? "bg-white/10" : ""
                        }`}
                      >
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded overflow-hidden flex-shrink-0">
                          <img
                            src={track.cover || "/placeholder.svg?height=32&width=32"}
                            alt={track.album}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className={`text-xs md:text-sm font-medium truncate ${
                              currentTrack.id === track.id
                                ? "bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                                : "text-white"
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
                          <span className="text-xs text-gray-400">{track.duration}</span>
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
