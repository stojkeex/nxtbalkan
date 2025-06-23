import React, { useState, useEffect, useRef } from 'react';
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
  Minimize2
} from 'lucide-react';

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
    artwork: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    title: "Digital Horizons",
    artist: "Cyber Wave",
    album: "Future Sounds",
    duration: 198,
    artwork: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    title: "Ocean Breeze",
    artist: "Aqua Melody",
    album: "Natural Elements",
    duration: 267,
    artwork: "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export const CompleteMusicPlayer: React.FC = () => {
  // Player state
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState<'none' | 'one' | 'all'>('none');
  const [isLiked, setIsLiked] = useState(false);
  
  const progressRef = useRef<HTMLDivElement>(null);
  const volumeRef = useRef<HTMLDivElement>(null);
  
  const currentTrack = tracks[currentTrackIndex];
  
  // Simulate playback progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
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
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
    const modes: ('none' | 'one' | 'all')[] = ['none', 'one', 'all'];
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
            Odkrijte premium glasbeni predvajalnik, navdihnjen z iPhone 16 Pro Max dizajnom. 
            Kliknite na gumb v spodnjem desnem kotu za začetek.
          </p>
          
          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-16 px-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-400 rounded-full"></div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Premium Design</h3>
              <p className="text-white/70 text-sm">Eleganten dizajn inspiriran z Apple estetiko</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-400 rounded-full"></div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Responsive</h3>
              <p className="text-white/70 text-sm">Popolno delovanje na vseh napravah</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 sm:col-span-2 md:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-400 rounded-full"></div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Intuitive</h3>
              <p className="text-white/70 text-sm">Enostavno upravljanje z glasbo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 text-right">
        <p className="text-white/40 text-xs sm:text-sm mb-2">Kliknite za odprtje predvajalnika</p>
        <div className="flex items-center justify-end space-x-2">
          <span className="text-white/60 text-xs">Music Player</span>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Floating Button */}
      {!isPlayerOpen && (
        <button
          onClick={togglePlayer}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-110 active:scale-95 group"
        >
          <Music className="w-6 h-6 sm:w-8 sm:h-8 text-white mx-auto group-hover:animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      )}

      {/* Music Player Modal */}
      {isPlayerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closePlayer}
          />
          
          {/* Player Container */}
          <div className={`relative transition-all duration-300 ${
            isMinimized 
              ? 'w-80 h-20' 
              : 'w-full max-w-sm sm:max-w-md h-auto max-h-[95vh] overflow-hidden'
          }`}>
            
            {/* Minimized View */}
            {isMinimized ? (
              <div className="bg-black/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-4 flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                  <img 
                    src={currentTrack.artwork}
                    alt="Current track"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{currentTrack.title}</p>
                  <p className="text-white/60 text-xs truncate">{currentTrack.artist}</p>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={handlePlayPause}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 text-black" fill="currentColor" />
                    ) : (
                      <Play className="w-4 h-4 text-black ml-0.5" fill="currentColor" />
                    )}
                  </button>
                  <button
                    onClick={toggleMinimize}
                    className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Maximize2 className="w-4 h-4 text-white" />
                  </button>
                  <button
                    onClick={closePlayer}
                    className="w-8 h-8 bg-white/10 hover:bg-red-500/50 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            ) : (
              /* Full Player View */
              <div className="bg-black/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
                {/* Background Blur */}
                <div 
                  className="absolute inset-0 opacity-20 blur-3xl"
                  style={{
                    backgroundImage: `url(${currentTrack.artwork})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                <div className="relative z-10 p-4 sm:p-6">
                  {/* Header Controls */}
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <MoreHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
                    </button>
                    <div className="text-center">
                      <p className="text-white/60 text-xs font-medium">PLAYING FROM LIBRARY</p>
                      <p className="text-white text-xs font-semibold mt-1">{currentTrack.album}</p>
                    </div>
                    <div className="flex space-x-1">
                      <button 
                        onClick={() => setIsLiked(!isLiked)}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                      >
                        <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isLiked ? 'text-red-500 fill-red-500' : 'text-white/80'}`} />
                      </button>
                      <button
                        onClick={toggleMinimize}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                      >
                        <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
                      </button>
                      <button
                        onClick={closePlayer}
                        className="p-2 hover:bg-red-500/50 rounded-full transition-colors"
                      >
                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Album Artwork */}
                  <div className="mb-6 sm:mb-8">
                    <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={currentTrack.artwork} 
                        alt={currentTrack.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </div>

                  {/* Track Info */}
                  <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2">{currentTrack.title}</h1>
                    <p className="text-white/70 text-base sm:text-lg">{currentTrack.artist}</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div 
                      ref={progressRef}
                      onClick={handleProgressClick}
                      className="relative h-1 bg-white/20 rounded-full cursor-pointer group"
                    >
                      <div 
                        className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                      <div 
                        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ left: `${progress}%`, transform: 'translateX(-50%) translateY(-50%)' }}
                      />
                    </div>
                    <div className="flex justify-between text-white/60 text-sm mt-2">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(currentTrack.duration)}</span>
                    </div>
                  </div>

                  {/* Main Controls */}
                  <div className="flex items-center justify-center space-x-4 sm:space-x-8 mb-6 sm:mb-8">
                    <button 
                      onClick={toggleShuffle}
                      className={`p-2 rounded-full transition-colors ${isShuffled ? 'text-blue-400' : 'text-white/60 hover:text-white'}`}
                    >
                      <Shuffle className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    
                    <button 
                      onClick={handlePrevious}
                      className="p-2 sm:p-3 text-white hover:text-white/80 transition-colors"
                    >
                      <SkipBack className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" />
                    </button>
                    
                    <button 
                      onClick={handlePlayPause}
                      className="p-3 sm:p-4 bg-white rounded-full hover:bg-white/90 transition-all duration-200 transform hover:scale-105 active:scale-95"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 sm:w-8 sm:h-8 text-black" fill="currentColor" />
                      ) : (
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-black ml-1" fill="currentColor" />
                      )}
                    </button>
                    
                    <button 
                      onClick={handleNext}
                      className="p-2 sm:p-3 text-white hover:text-white/80 transition-colors"
                    >
                      <SkipForward className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" />
                    </button>
                    
                    <button 
                      onClick={cycleRepeat}
                      className={`p-2 rounded-full transition-colors relative ${
                        repeatMode !== 'none' ? 'text-blue-400' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      <Repeat className="w-4 h-4 sm:w-5 sm:h-5" />
                      {repeatMode === 'one' && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full text-xs flex items-center justify-center text-white font-bold">
                          1
                        </span>
                      )}
                    </button>
                  </div>

                  {/* Volume Control */}
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={toggleMute}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </button>
                    
                    <div 
                      ref={volumeRef}
                      onClick={handleVolumeClick}
                      className="flex-1 h-1 bg-white/20 rounded-full cursor-pointer group"
                    >
                      <div 
                        className="h-full bg-white rounded-full transition-all duration-200"
                        style={{ width: `${isMuted ? 0 : volume * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
