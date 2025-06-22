"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-white/20 z-50"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress / 100 }}
      style={{ transformOrigin: "0%" }}
      transition={{ duration: 0.1 }}
    >
      <motion.div 
        className="h-full w-full"
        style={{
          background: "linear-gradient(90deg, #00ffff, #ff00ff, #ffff00)",
        }}
      />
    </motion.div>
  );
}