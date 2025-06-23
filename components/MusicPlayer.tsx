"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Shuffle,
  Repeat,
  Heart,
  MoreHorizontal,
  Music,
  X,
  Maximize2,
  Minimize2,
} from "lucide-react";

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: number;
  artwork: string;
}

const tracks: Track[] = [
  {
    id: 1,
    title: "Midnight Dreams",
    artist: "Luna Sol",
    album: "Ethereal Nights",
    duration: 245,
    artwork:
      "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    title: "Digital Horizons",
    artist: "Cyber Wave",
    album: "Future Sounds",
    duration: 198,
    artwork:
      "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    title: "Ocean Breeze",
    artist: "Aqua Melody",
    album: "Natural Elements",
    duration: 267,
    artwork:
      "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export const MusicPlayer: React.FC = () => {
  // Player state
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState<"none" | "one" | "all">("none");
  const [isLiked, setIsLiked] = useState(false);

  const progressRef = useRef<HTMLDivElement>(null);
  const volumeRef = useRef<HTMLDivElement>(null);

  const currentTrack = tracks[currentTrackIndex];

  // Simulate playback progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= currentTrack.duration) {
            setIsPlaying(false);
            handleNext();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrack.duration]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (isShuffled) {
      setCurrentTrackIndex(Math.floor(Math.random() * tracks.length));
    } else {
      setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    }
    setCurrentTime(0);
  };

  const handlePrevious = () => {
    if (currentTime > 3) {
      setCurrentTime(0);
    } else {
      setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
      setCurrentTime(0);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * currentTrack.duration;
      setCurrentTime(Math.floor(newTime));
    }
  };

  const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (volumeRef.current) {
      const rect = volumeRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newVolume = clickX / rect.width;
      setVolume(Math.max(0, Math.min(1, newVolume)));
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled);
  };

  const cycleRepeat = () => {
    const modes: ("none" | "one" | "all")[] = ["none", "one", "all"];
    const currentIndex = modes.indexOf(repeatMode);
    setRepeatMode(modes[(currentIndex + 1) % modes.length]);
  };

  const togglePlayer = () => {
    setIsPlayerOpen(!isPlayerOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const closePlayer = () => {
    setIsPlayerOpen(false);
    setIsMinimized(false);
  };

  const progress = (currentTime / currentTrack.duration) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      {/* Main Landing Page */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Music
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-white/80 mb-8">
            Experience
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12 px-4">
            Odkrijte premium glasbeni predvajalnik, navdihnjen z iPhone 16 Pro Max dizajnom. Kliknite na gumb v spodnjem desnem kotu za začetek.
          </p>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-16 px-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-400 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-white">Smooth Experience</h3>
              <p className="text-white/80 mt-2">Nežno in intuitivno uporabniško izkušnjo, ki deluje na vseh napravah.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-400 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-white">Multi-platform</h3>
              <p className="text-white/80 mt-2">Podpira vse vrste naprav: računalnike, pametne telefone in tablice.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Music Player */}
      <div className={`fixed bottom-0 left-0 w-full transition-all duration-500 ${isPlayerOpen ? "h-[80vh]" : "h-20"} bg-gradient-to-b from-slate-900 to-transparent`}>

        {/* Player Controls */}
        <div className="flex items-center justify-between py-3 px-4 md:px-8 text-white">
          {/* Previous Button */}
          <button onClick={handlePrevious} className="w-10 h-10 flex items-center justify-center bg-gray-600/40 rounded-full hover:bg-gray-600/70 transition-all duration-200">
            <SkipBack size={20} />
          </button>

          {/* Play/Pause Button */}
          <button onClick={handlePlayPause} className="w-14 h-14 flex items-center justify-center bg-blue-500/20 rounded-full hover:bg-blue-500/50 transition-all duration-200">
            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
          </button>

          {/* Next Button */}
          <button onClick={handleNext} className="w-10 h-10 flex items-center justify-center bg-gray-600/40 rounded-full hover:bg-gray-600/70 transition-all duration-200">
            <SkipForward size={20} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="px-8 py-2">
          <div ref={progressRef} onClick={handleProgressClick} className="h-1 bg-gray-700 rounded-full cursor-pointer">
            <div style={{ width: `${progress}%` }} className="h-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
          </div>
          <div className="flex justify-between text-xs text-white/80 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(currentTrack.duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
