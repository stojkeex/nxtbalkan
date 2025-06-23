"use client"

import type React from "react"

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
  const [repeatMode, setRepeatMode] = useState(0) // 0: off, 1: all, 2: one
  const [shuffledTracks, setShuffledTracks] = useState<Track[]>([])
  const [currentShuffleIndex, setCurrentShuffleIndex] = useState(0)
  const [playlists, setPlaylists] = useState<Playlist[]>(defaultPlaylists)
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist>(defaultPlaylists[0])
  const [newPlaylistName, setNewPlaylistName] = useState("")
  const [showCreatePlaylist, setShowCreatePlaylist] = useState(false)
  const [selectedPlaylistForAdd, setSelectedPlaylistForAdd] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [allTracks, setAllTracks] = useState<Track[]>(sampleTracks)

  const audioRef = useRef<HTMLAudioElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const tempAudioRef = useRef<HTMLAudioElement>(null)

  // Media Session API for system notifications - Enhanced
  useEffect(() => {
    if ("mediaSession" in navigator) {
      // Set metadata immediately
      navigator.mediaSession.metadata = new MediaMetadata({
        title: `${currentTrack.title} • NXT Balkan`,
        artist: currentTrack.artist,
        album: `NXT Balkan - ${currentTrack.album}`,
        artwork: [
          {
            src: currentTrack.cover,
            sizes: "96x96",
            type: "image/jpeg",
          },
          {
            src: currentTrack.cover,
            sizes: "128x128",
            type: "image/jpeg",
          },
          {
            src: currentTrack.cover,
            sizes: "192x192",
            type: "image/jpeg",
          },
          {
            src: currentTrack.cover,
            sizes: "256x256",
            type: "image/jpeg",
          },
          {
            src: currentTrack.cover,
            sizes: "384x384",
            type: "image/jpeg",
          },
          {
            src: currentTrack.cover,
            sizes: "512x512",
            type: "image/jpeg",
          },
        ],
      })

      // Set action handlers
      navigator.mediaSession.setActionHandler("play", () => {
        if (!isPlaying) togglePlay()
      })

      navigator.mediaSession.setActionHandler("pause", () => {
        if (isPlaying) togglePlay()
      })

      navigator.mediaSession.setActionHandler("previoustrack", () => {
        previousTrack()
      })

      navigator.mediaSession.setActionHandler("nexttrack", () => {
        nextTrack()
      })

      navigator.mediaSession.setActionHandler("seekbackward", (details) => {
        const audio = audioRef.current
        if (audio) {
          audio.currentTime = Math.max(audio.currentTime - (details.seekOffset || 10), 0)
        }
      })

      navigator.mediaSession.setActionHandler("seekforward", (details) => {
        const audio = audioRef.current
        if (audio) {
          audio.currentTime = Math.min(audio.currentTime + (details.seekOffset || 10), audio.duration)
        }
      })

      navigator.mediaSession.setActionHandler("seekto", (details) => {
        const audio = audioRef.current
        if (audio && details.seekTime) {
          audio.currentTime = details.seekTime
        }
      })

      // Update playback state
      navigator.mediaSession.playbackState = isPlaying ? "playing" : "paused"

      // Force update for mobile browsers
      if (isPlaying) {
        setTimeout(() => {
          navigator.mediaSession.playbackState = "playing"
        }, 100)
      }
    }
  }, [currentTrack, isPlaying])

  // Update position state
  useEffect(() => {
    if ("mediaSession" in navigator && "setPositionState" in navigator.mediaSession) {
      navigator.mediaSession.setPositionState({
        duration: duration,
        playbackRate: 1,
        position: currentTime,
      })
    }
  }, [currentTime, duration])

  // Initialize shuffled tracks
  useEffect(() => {
    if (isShuffled && shuffledTracks.length === 0) {
      const shuffled = [...currentPlaylist.tracks].sort(() => Math.random() - 0.5)
      setShuffledTracks(shuffled)
      const currentIndex = shuffled.findIndex((track) => track.id === currentTrack.id)
      setCurrentShuffleIndex(currentIndex >= 0 ? currentIndex : 0)
    }
  }, [isShuffled, currentTrack, currentPlaylist])

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
      const shuffled = [...currentPlaylist.tracks].sort(() => Math.random() - 0.5)
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
    const tracks = isShuffled ? shuffledTracks : currentPlaylist.tracks
    if (isShuffled && shuffledTracks.length > 0) {
      const nextIndex = (currentShuffleIndex + 1) % shuffledTracks.length
      setCurrentShuffleIndex(nextIndex)
      setCurrentTrack(shuffledTracks[nextIndex])
    } else {
      const currentIndex = tracks.findIndex((track) => track.id === currentTrack.id)
      const nextIndex = (currentIndex + 1) % tracks.length
      setCurrentTrack(tracks[nextIndex])
    }
    setIsPlaying(true)
  }

  const previousTrack = () => {
    const tracks = isShuffled ? shuffledTracks : currentPlaylist.tracks
    if (isShuffled && shuffledTracks.length > 0) {
      const prevIndex = currentShuffleIndex === 0 ? shuffledTracks.length - 1 : currentShuffleIndex - 1
      setCurrentShuffleIndex(prevIndex)
      setCurrentTrack(shuffledTracks[prevIndex])
    } else {
      const currentIndex = tracks.findIndex((track) => track.id === currentTrack.id)
      const prevIndex = currentIndex === 0 ? tracks.length - 1 : currentIndex - 1
      setCurrentTrack(tracks[prevIndex])
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
    setShowPlaylistSelector(false)
    setShowCreatePlaylist(false)
    setShowAddToPlaylist(false)
    setShowDesktopPlaylistSelector(false)
  }

  const minimizePlayer = () => {
    setIsMinimized(true)
    setShowPlaylistSelector(false)
    setShowCreatePlaylist(false)
    setShowAddToPlaylist(false)
    setShowDesktopPlaylistSelector(false)
  }

  // Get audio duration helper function
  const getAudioDuration = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const audio = new Audio()
      const url = URL.createObjectURL(file)

      audio.addEventListener("loadedmetadata", () => {
        const duration = audio.duration
        const minutes = Math.floor(duration / 60)
        const seconds = Math.floor(duration % 60)
        const formattedDuration = `${minutes}:${seconds.toString().padStart(2, "0")}`
        URL.revokeObjectURL(url)
        resolve(formattedDuration)
      })

      audio.addEventListener("error", () => {
        URL.revokeObjectURL(url)
        resolve("0:00")
      })

      audio.src = url
    })
  }

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    const newTracks: Track[] = []

    for (const file of Array.from(files)) {
      if (file.type.startsWith("audio/")) {
        const url = URL.createObjectURL(file)
        const duration = await getAudioDuration(file)

        const newTrack: Track = {
          id: Date.now() + Math.random(),
          title: file.name.replace(/\.[^/.]+$/, ""),
          artist: "Unknown Artist",
          album: "Local Files",
          duration: duration,
          cover: "/placeholder.svg?height=300&width=300",
          audioUrl: url,
        }

        newTracks.push(newTrack)
      }
    }

    // Add to all tracks
    setAllTracks((prev) => [...prev, ...newTracks])

    // Add to All Songs playlist
    setPlaylists((prev) =>
      prev.map((playlist) =>
        playlist.name === "All Songs" ? { ...playlist, tracks: [...playlist.tracks, ...newTracks] } : playlist,
      ),
    )

    // Update current playlist if it's All Songs
    if (currentPlaylist.name === "All Songs") {
      setCurrentPlaylist((prev) => ({
        ...prev,
        tracks: [...prev.tracks, ...newTracks],
      }))
    }

    // Reset file input
    if (event.target) {
      event.target.value = ""
    }
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

  const selectPlaylist = (playlist: Playlist) => {
    setCurrentPlaylist(playlist)
    setShowPlaylistSelector(false)
    setShowDesktopPlaylistSelector(false)
    if (playlist.tracks.length > 0) {
      setCurrentTrack(playlist.tracks[0])
    }
  }

  const addTrackToPlaylist = (trackId: number, playlistId: number) => {
    const track = allTracks.find((t) => t.id === trackId)
    if (!track) return

    setPlaylists((prev) =>
      prev.map((playlist) => {
        if (playlist.id === playlistId) {
          // Check if track already exists in playlist
          const trackExists = playlist.tracks.some((t) => t.id === trackId)
          if (!trackExists) {
            return { ...playlist, tracks: [...playlist.tracks, track] }
          }
        }
        return playlist
      }),
    )

    // Update current playlist if it's the one being modified
    if (currentPlaylist.id === playlistId) {
      const trackExists = currentPlaylist.tracks.some((t) => t.id === trackId)
      if (!trackExists) {
        setCurrentPlaylist((prev) => ({
          ...prev,
          tracks: [...prev.tracks, track],
        }))
      }
    }
  }

  const filteredTracks = allTracks.filter(
    (track) =>
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.album.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
        return <Repeat className="h-7 w-7" />
      case 2:
        return <Repeat1 className="h-7 w-7" />
      default:
        return <Repeat className="h-7 w-7" />
    }
  }

  return (
    <>
      <audio ref={audioRef} src={currentTrack.audioUrl} />
      <audio ref={tempAudioRef} />
      <input ref={fileInputRef} type="file" accept="audio/*" multiple onChange={handleFileUpload} className="hidden" />

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
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={minimizePlayer}
                  className="text-white hover:bg-white/10 w-12 h-12"
                >
                  <ChevronDown className="h-7 w-7" />
                </Button>
                <div className="text-center">
                  <h2 className="text-lg font-semibold gradient-text-neon">NXT Balkan</h2>
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

              {/* Playlist Selector Modal */}
              {showPlaylistSelector && (
                <div className="absolute inset-0 bg-black/90 backdrop-blur-sm z-10 flex flex-col">
                  <div className="flex items-center justify-between p-4 pt-12">
                    <h3 className="text-xl font-bold gradient-text-neon">Select Playlist</h3>
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
                    {/* Create New Playlist */}
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

                    {/* Existing Playlists */}
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

              {/* Create Playlist Modal */}
              {showCreatePlaylist && (
                <div className="absolute inset-0 bg-black/90 backdrop-blur-sm z-20 flex flex-col">
                  <div className="flex items-center justify-between p-4 pt-12">
                    <h3 className="text-xl font-bold gradient-text-neon">Create Playlist</h3>
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

              {/* Add to Playlist Modal */}
              {showAddToPlaylist && (
                <div className="absolute inset-0 bg-black/90 backdrop-blur-sm z-20 flex flex-col">
                  <div className="flex items-center justify-between p-4 pt-12">
                    <h3 className="text-xl font-bold gradient-text-neon">Add Songs</h3>
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
                                src={track.cover || "/placeholder.svg"}
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

              {/* Mobile Content - Always show playlist at bottom */}
              {!showPlaylistSelector && !showCreatePlaylist && !showAddToPlaylist && (
                <>
                  {/* Mobile Album Art */}
                  <div className="flex justify-center px-8 py-4">
                    <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={currentTrack.cover || "/placeholder.svg"}
                        alt={currentTrack.album}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Mobile Track Info */}
                  <div className="px-8 py-2 text-center">
                    <h1 className="text-xl font-bold gradient-text-neon mb-1">{currentTrack.title}</h1>
                    <p className="text-base text-gray-300 mb-1">{currentTrack.artist}</p>
                    <p className="text-sm text-gray-400">{currentTrack.album}</p>
                  </div>

                  {/* Mobile Progress Bar */}
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

                  {/* Mobile Controls - Larger buttons */}
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
                        {getRepeatIconMobile()}
                      </Button>
                    </div>
                  </div>

                  {/* Mobile Playlist - Always Visible */}
                  <div className="px-4 pb-8 flex-1 overflow-hidden">
                    <div className="bg-black/20 rounded-2xl p-4 h-full overflow-y-auto backdrop-blur-sm">
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
                      {currentPlaylist.tracks.map((track, index) => (
                        <div
                          key={track.id}
                          onClick={() => selectTrack(track)}
                          className={`flex items-center space-x-4 p-3 rounded-xl cursor-pointer transition-all hover:bg-white/5 mb-2 ${
                            currentTrack.id === track.id ? "bg-white/10" : ""
                          }`}
                        >
                          <div className="w-6 text-center">
                            <span className="text-sm text-gray-400">{index + 1}</span>
                          </div>
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
                </>
              )}
            </div>
          </div>

          {/* Desktop Floating Player */}
          <Card
            className={`${isMinimized ? "block" : "hidden md:block"} professional-card hover-card floating-player-glass overflow-hidden shadow-2xl animate-in slide-in-from-bottom-4 slide-in-from-right-4`}
          >
            <CardContent className="p-0">
              {/* Desktop Playlist Selector Modal */}
              {showDesktopPlaylistSelector && (
                <div className="absolute inset-0 bg-black/90 backdrop-blur-sm z-30 rounded-lg overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold gradient-text-neon">Select Playlist</h3>
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
                    <div className="flex items-center justify-between">
                      <h4
                        className="text-xs md:text-sm font-medium text-muted-foreground cursor-pointer hover:text-cyan-400 transition-colors"
                        onClick={() => setShowDesktopPlaylistSelector(true)}
                      >
                        {currentPlaylist.name} ▼
                      </h4>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-6 h-6 hover:bg-white/10 text-muted-foreground"
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
