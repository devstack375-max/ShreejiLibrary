import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Snappy, clean timer (1.2 seconds max)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: 'easeInOut' } 
          }}
          className="fixed inset-0 z-[100] bg-white text-[#201E1F] flex flex-col items-center justify-center p-4 overflow-hidden select-none"
        >
          <div className="relative flex flex-col items-center text-center">
            
            {/* Minimal Logo with Spinning Accent Ring */}
            <div className="relative mb-6">
              <div className="absolute -inset-3 rounded-full border-2 border-t-[#EB6A30] border-r-transparent border-b-[#983132] border-l-transparent animate-spin" />
              <div className="w-20 h-20 rounded-2xl bg-white p-2 shadow-md flex items-center justify-center border border-[#F5E4E4]">
                <img 
                  src="/assets/logo.jpg" 
                  alt="ShreeJi Reading Library Logo" 
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
            </div>

            {/* Minimal Brand Title */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-bold uppercase tracking-widest text-[#983132] mb-1"
            >
              ShreeJi Reading Library
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xs text-[#201E1F]/60 font-serif italic"
            >
              Your space for maximum focus
            </motion.p>

            {/* Minimal Thin Progress Line */}
            <div className="w-32 h-[2px] bg-[#F5E4E4] rounded-full overflow-hidden mt-6">
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="h-full bg-[#EB6A30] rounded-full"
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
