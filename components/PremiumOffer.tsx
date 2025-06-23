"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PremiumOffer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }, 4000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black bg-opacity-70 flex items-center justify-center p-4 backdrop-blur-sm"
      >
        <div className="relative p-[2px] rounded-xl" 
          style={{
            background: 'linear-gradient(90deg, #00ffff, #ff00ff, #ffff00)',
          }}
        >
          <motion.div 
            initial={{ y: 50, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            className="relative bg-gray-900 bg-opacity-80 backdrop-blur-lg rounded-xl p-8 max-w-md w-full"
          >
            {/* Close button (X) */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Close premium offer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Premium content */}
            <div className="text-center">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2 gradient-text-neon">
                  Upgrade to Premium
                </h2>
                <p className="text-gray-300">Unlock all features and enjoy ad-free experience</p>
              </div>

              <div className="bg-black bg-opacity-40 rounded-lg p-6 mb-6 border border-gray-700">
                <ul className="space-y-3 text-left text-white">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No advertisements
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Exclusive content
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Priority support
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold gradient-text-neon mb-2">$9.99<span className="text-sm font-normal text-gray-400">/month</span></div>
                <p className="gradient-text-neon text-sm">Cancel anytime</p>
              </div>

              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity shadow-lg">
                Get Premium Now
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
