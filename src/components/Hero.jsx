import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Users, ChevronDown } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="top" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between text-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero_bg.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#201E1F]/70 via-[#201E1F]/50 to-[#201E1F]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#201E1F]/60 via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 flex-1 flex flex-col justify-center">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[#983132]/40 border border-[#EB6A30]/40 text-[#FFF0E8] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-md self-start"
        >
          <span className="w-2 h-2 rounded-full bg-[#EB6A30] animate-pulse" />
          <span>Now accepting August intake</span>
        </motion.div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Your perfect study environment for{' '}
            <span className="font-serif italic text-[#EB6A30]">
              maximum focus.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-lg sm:text-xl text-white/80 max-w-2xl font-normal leading-relaxed mb-10"
          >
            Escape distractions and study in a calm, air-conditioned, professionally managed reading space designed for serious students.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap items-center gap-4 mb-14"
          >
            <button
              onClick={onOpenBooking}
              className="bg-white hover:bg-white/90 text-[#201E1F] font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 group"
            >
              <span>Join today</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#contact"
              className="border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white font-medium text-base px-7 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              Book a seat
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
        <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 sm:gap-12">
          
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#983132]/40 border border-[#983132]/60 flex items-center justify-center text-[#EB6A30] shrink-0 backdrop-blur-sm">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white">800+</p>
              <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-semibold">STUDENTS</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#983132]/40 border border-[#983132]/60 flex items-center justify-center text-[#EB6A30] shrink-0 backdrop-blur-sm">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white">17</p>
              <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-semibold">HOURS DAILY</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#983132]/40 border border-[#983132]/60 flex items-center justify-center text-[#EB6A30] shrink-0 backdrop-blur-sm">
              <Star className="w-6 h-6 fill-[#EB6A30]" />
            </div>
            <div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white">4.9</p>
              <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-semibold">GOOGLE RATING</p>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-8">
          <a href="#about" className="flex flex-col items-center gap-1 text-white/40 hover:text-[#EB6A30] transition-colors text-xs uppercase tracking-widest font-semibold">
            <span>SCROLL</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </motion.div>

    </section>
  );
}
