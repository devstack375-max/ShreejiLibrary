import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Users, ChevronDown } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="top" className="relative min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16 flex flex-col justify-between text-white overflow-hidden max-w-full">
      
      {/* Real Library Homepage Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/WhatsApp Image 2026-08-16 at 12.58.48 PM.jpeg" 
          alt="ShreeJi Reading Library Study Hall" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#201E1F]/85 via-[#201E1F]/70 to-[#201E1F]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#201E1F]/80 via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 flex-1 flex flex-col justify-center w-full">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[#983132]/60 border border-[#EB6A30]/50 text-[#FFF0E8] px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-6 sm:mb-8 backdrop-blur-md self-start max-w-full"
        >
          <span className="w-2 h-2 rounded-full bg-[#EB6A30] animate-pulse shrink-0" />
          <span className="truncate">Now accepting new student intake</span>
        </motion.div>

        {/* Main Headline */}
        <div className="max-w-4xl w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-6 break-words"
          >
            Your perfect study environment for{' '}
            <span className="font-serif italic text-[#EB6A30] inline-block">
              maximum focus.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-base sm:text-xl text-white/90 max-w-2xl font-normal leading-relaxed mb-8 sm:mb-10"
          >
            Escape distractions and study in a calm, air-conditioned, professionally managed reading space designed for serious students.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-14 w-full sm:w-auto"
          >
            <button
              onClick={onOpenBooking}
              className="bg-[#EB6A30] hover:bg-[#d5571e] text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 group"
            >
              <span>Book a seat</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#reading-space"
              className="border border-white/40 hover:border-white bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-full transition-all duration-300 backdrop-blur-md text-center"
            >
              Explore Cubicle Setup
            </a>
          </motion.div>
        </div>

      </div>

      {/* Bottom Key Stats Strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="pt-6 sm:pt-8 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-6 lg:gap-12">
          
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 sm:gap-4">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#983132]/60 border border-[#983132] flex items-center justify-center text-[#EB6A30] shrink-0 backdrop-blur-sm">
              <Users className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-lg sm:text-3xl lg:text-4xl font-extrabold text-white">800+</p>
              <p className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-semibold">STUDENTS</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 sm:gap-4">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#983132]/60 border border-[#983132] flex items-center justify-center text-[#EB6A30] shrink-0 backdrop-blur-sm">
              <Clock className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-lg sm:text-3xl lg:text-4xl font-extrabold text-white">17 HRS</p>
              <p className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-semibold">DAILY</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 sm:gap-4">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#983132]/60 border border-[#983132] flex items-center justify-center text-[#EB6A30] shrink-0 backdrop-blur-sm">
              <Star className="w-4 h-4 sm:w-6 sm:h-6 fill-[#EB6A30]" />
            </div>
            <div>
              <p className="text-lg sm:text-3xl lg:text-4xl font-extrabold text-white">4.9 ★</p>
              <p className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-semibold">RATING</p>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-6 sm:pt-8">
          <a href="#about" className="flex flex-col items-center gap-1 text-white/60 hover:text-[#EB6A30] transition-colors text-xs uppercase tracking-widest font-semibold">
            <span>SCROLL</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </motion.div>

    </section>
  );
}
