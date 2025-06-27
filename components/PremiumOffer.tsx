"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Zap, Target, Users, Sparkles, X, Check, Clock, Shield, Star } from "lucide-react";

//============================================================================
// BACKGROUND HELPER COMPONENTS
// These components are included here for ease of use.
//============================================================================

const StarrySky = () => {
    const stars = useMemo(() => {
        return Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            size: `${Math.random() * 2 + 0.5}px`,
            duration: Math.random() * 2 + 2,
            delay: Math.random() * 3,
        }));
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {stars.map(star => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white"
                    style={{ top: star.y, left: star.x, width: star.size, height: star.size }}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}
            <ShootingStar />
        </div>
    );
};

const ShootingStar = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 4000);
        }, 12000);
        return () => clearInterval(interval);
    }, []);

    const path = useMemo(() => {
        const startX = Math.random() * 100;
        const startY = -10;
        const endX = startX - (Math.random() * 50 + 30);
        const endY = 110;
        return { startX, startY, endX, endY };
    }, [isAnimating]);

    return (
        <AnimatePresence>
            {isAnimating && (
                <motion.div
                    className="absolute rounded-full bg-white/80"
                    style={{ top: `${path.startY}%`, left: `${path.startX}%`, width: '3px', height: '3px', filter: 'blur(1.5px)' }}
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{
                        x: `calc(${path.endX - path.startX}vw)`,
                        y: `calc(${path.endY - path.startY}vh)`,
                        opacity: [0, 1, 0.5, 0]
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 4, ease: [0.6, -0.05, 0.01, 0.99] }}
                />
            )}
        </AnimatePresence>
    );
}

//============================================================================
// MAIN COMPONENT: PremiumOffer
// FIX: Reverted to a named `export function` to match the import statement.
//============================================================================

export function PremiumOffer() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }, 8000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (isVisible && timeLeft > 0) {
      const countdown = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [isVisible, timeLeft]);

  const handleClose = () => {
    setIsVisible(false);
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-3"
      >
        <motion.div
            className="absolute top-[-15%] left-[-15%] w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl opacity-50"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
            className="absolute bottom-[-15%] right-[-15%] w-[600px] h-[600px] bg-gradient-to-tl from-pink-500/10 to-transparent rounded-full blur-3xl opacity-50"
            animate={{ rotate: -360 }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear", delay: 5 }}
        />

        <div className="relative w-full max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto max-h-[95vh] overflow-y-auto scrollbar-hide">
          <motion.div
            initial={{ y: 20, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-black/70 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
          >
            <StarrySky />
            
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-20 text-gray-400 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Mobile Layout */}
            <div className="block md:hidden p-5 space-y-4 relative z-10">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-xl mb-3 border border-cyan-400/30">
                  <Crown className="h-6 w-6 text-cyan-400" />
                </div>
                <h2 className="text-xl font-light mb-1 text-white">
                  Premium{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-medium">
                    Package
                  </span>
                </h2>
                <p className="text-gray-300 text-sm">Digital transformation solution</p>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-cyan-400/30 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <Clock className="h-3 w-3 text-cyan-400" />
                  <span className="text-cyan-400 font-medium text-xs">LIMITED TIME OFFER</span>
                </div>
                <div className="text-white font-mono text-lg">{formatTime(timeLeft)}</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-gray-400 line-through text-base">€4,999</span>
                  <div className="bg-gradient-to-r from-cyan-400 to-pink-400 text-black px-2 py-0.5 rounded-full text-xs font-medium">
                    40% OFF
                  </div>
                </div>
                <div className="text-2xl font-light text-white mb-1">€2,999</div>
                <div className="text-gray-400 text-xs">Complete solution</div>
              </div>

              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0"> <Zap className="h-3 w-3 text-cyan-400" /> </div>
                  <span className="text-white">Brand strategy & web development</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0"> <Users className="h-3 w-3 text-cyan-400" /> </div>
                  <span className="text-white">6-month support included</span>
                </div>
              </div>

              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-medium py-3 px-4 rounded-lg shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                <div className="flex items-center justify-center gap-1.5"> <Sparkles className="h-4 w-4" /> Claim Package </div>
              </motion.button>
              <motion.button onClick={handleClose} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full bg-transparent border border-gray-600 text-gray-300 font-medium py-2 px-4 rounded-lg hover:bg-white/5 transition-colors text-sm"> Maybe Later </motion.button>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-0 relative z-10">
              <div className="p-6 lg:p-8 space-y-5">
                <div className="text-left">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-xl mb-4 border border-cyan-400/30"> <Crown className="h-7 w-7 text-cyan-400" /> </div>
                  <h2 className="text-2xl lg:text-3xl font-light mb-2 text-white">
                    Premium <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-medium"> Package </span>
                  </h2>
                  <p className="text-gray-300 text-base">Complete digital transformation solution</p>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-gray-400 line-through text-xl">€4,999</span>
                    <div className="bg-gradient-to-r from-cyan-400 to-pink-400 text-black px-3 py-1 rounded-full text-sm font-medium"> 40% OFF </div>
                  </div>
                  <div className="text-3xl font-light text-white mb-1">€2,999</div>
                  <div className="text-gray-400">One-time payment • 6-month support</div>
                </div>
                <div className="space-y-3">
                  {[ { icon: Zap, text: "Brand strategy & identity" }, { icon: Target, text: "Custom web development" }, { icon: Users, text: "Marketing & post-launch support" }, ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0"> <feature.icon className="h-4 w-4 text-cyan-400" /> </div>
                      <span className="text-white">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 pt-2">
                  <motion.button className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-medium py-3 px-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(45, 212, 191, 0.4)' }} whileTap={{ scale: 0.95 }}>
                    <div className="flex items-center justify-center gap-2"> <Sparkles className="h-5 w-5" /> Claim Premium Package </div>
                  </motion.button>
                  <motion.button onClick={handleClose} className="w-full bg-transparent border border-gray-600 text-gray-300 font-medium py-2.5 px-6 rounded-lg hover:bg-white/5" whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.05)' }} whileTap={{ scale: 0.95 }}> Maybe Later </motion.button>
                </div>
              </div>
              <div className="bg-black/40 p-6 lg:p-8 flex flex-col justify-center items-center text-center border-l border-white/10">
                <div className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-cyan-400/30 rounded-xl p-5 mb-5 w-full max-w-xs">
                  <div className="flex items-center justify-center gap-2 mb-2"> <Clock className="h-4 w-4 text-cyan-400" /> <span className="text-cyan-400 font-medium text-sm">LIMITED TIME OFFER</span> </div>
                  <div className="text-white font-mono text-2xl mb-1">{formatTime(timeLeft)}</div>
                  <div className="text-xs text-gray-400">Offer expires soon!</div>
                </div>
                <div className="bg-gradient-to-r from-cyan-500/5 to-pink-500/5 border border-gray-700 rounded-xl p-5 w-full max-w-xs">
                  <div className="text-3xl font-light bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-2"> 200+ </div>
                  <div className="text-white font-medium mb-1">Completed projects</div>
                  <div className="text-xs text-gray-400">"The best digital agency!"</div>
                  <div className="flex justify-center gap-0.5 mt-2">
                    {[...Array(5)].map((_, i) => ( <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" /> ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
