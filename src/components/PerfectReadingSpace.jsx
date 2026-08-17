import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Plug, Grid, Armchair, Sparkles } from 'lucide-react';

export default function PerfectReadingSpace() {
  const pointerPoints = [
    {
      id: 'light',
      title: 'Warm LED Task Light',
      desc: 'Individual overhead warm light designed to illuminate your books with zero glare or eye fatigue.',
      icon: Sun,
      color: '#EB6A30',
      badgePos: 'top-6 left-4 sm:left-8',
      targetPos: { top: '16%', left: '50%' }
    },
    {
      id: 'power',
      title: 'Personal Power Point',
      desc: 'Dedicated 230V socket & switchboard at every desk for laptop charging, iPad & mobile devices.',
      icon: Plug,
      color: '#983132',
      badgePos: 'top-6 right-4 sm:right-8',
      targetPos: { top: '21%', left: '70%' }
    },
    {
      id: 'table',
      title: 'Spacious Study Table',
      desc: 'Wide wooden cubicle table with top storage shelf for textbooks, notes, and study material.',
      icon: Grid,
      color: '#EB6A30',
      badgePos: 'bottom-32 left-4 sm:left-8',
      targetPos: { top: '52%', left: '48%' }
    },
    {
      id: 'chair',
      title: 'Ergonomic Mesh Chair',
      desc: 'Adjustable black lumbar support office chair engineered for 10-14 hours of continuous comfortable sitting.',
      icon: Armchair,
      color: '#201E1F',
      badgePos: 'bottom-6 right-4 sm:right-8',
      targetPos: { top: '75%', left: '52%' }
    }
  ];

  return (
    <section id="reading-space" className="py-24 bg-white text-[#201E1F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#983132]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#983132]">THE PERFECT CUBICLE</span>
            <div className="h-[1px] w-8 bg-[#983132]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#201E1F]">
            Anatomy of the{' '}
            <span className="font-serif italic text-[#EB6A30]">perfect reading space.</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-[#201E1F]/70 font-normal">
            Every cubicle at ShreeJi Reading Library is equipped with essential features designed for long, productive study hours.
          </p>
        </motion.div>

        {/* Real Cubicle Photo with Animated Pointer Lines & Feature Callouts */}
        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border border-[#F5E4E4] shadow-2xl bg-[#FFF8F5]">
          
          {/* Main Cubicle Photo */}
          <img 
            src="/WhatsApp Image 2026-08-16 at 12.58.48 PM (1).jpeg" 
            alt="ShreeJi Reading Library Cubicle Setup" 
            className="w-full h-auto object-cover min-h-[500px] sm:min-h-[650px]"
          />

          {/* Overlay Dark Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

          {/* Interactive Feature Callout Cards with Line Highlights */}
          <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-between pointer-events-none">
            
            {/* Top Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pointer-events-auto">
              
              {/* Light Feature Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#F5E4E4] shadow-lg flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFF0E8] text-[#EB6A30] flex items-center justify-center shrink-0">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#201E1F] flex items-center gap-1.5">
                    <span>1. LED Task Light</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#EB6A30]" />
                  </h4>
                  <p className="text-xs text-[#201E1F]/70 mt-1 leading-snug">
                    Overhead warm light illumination for zero glare during long reading sessions.
                  </p>
                </div>
              </motion.div>

              {/* Power Point Feature Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#F5E4E4] shadow-lg flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5E4E4] text-[#983132] flex items-center justify-center shrink-0">
                  <Plug className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#201E1F] flex items-center gap-1.5">
                    <span>2. Power Point & Socket</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#983132]" />
                  </h4>
                  <p className="text-xs text-[#201E1F]/70 mt-1 leading-snug">
                    Individual 230V socket & switchboard at every desk for laptop & phone charging.
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Pointer Dots on Image */}
            {/* 1. Light Target Pin */}
            <div className="absolute top-[18%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#EB6A30] opacity-75" />
              <div className="relative bg-[#EB6A30] text-white font-bold text-xs px-2.5 py-1 rounded-full shadow-lg border-2 border-white flex items-center gap-1">
                <span>Light</span>
              </div>
            </div>

            {/* 2. Power Point Target Pin */}
            <div className="absolute top-[21%] left-[70%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#983132] opacity-75" />
              <div className="relative bg-[#983132] text-white font-bold text-xs px-2.5 py-1 rounded-full shadow-lg border-2 border-white flex items-center gap-1">
                <span>Power Point</span>
              </div>
            </div>

            {/* 3. Table Target Pin */}
            <div className="absolute top-[52%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#EB6A30] opacity-75" />
              <div className="relative bg-[#EB6A30] text-white font-bold text-xs px-2.5 py-1 rounded-full shadow-lg border-2 border-white flex items-center gap-1">
                <span>Table</span>
              </div>
            </div>

            {/* 4. Chair Target Pin */}
            <div className="absolute top-[75%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#201E1F] opacity-75" />
              <div className="relative bg-[#201E1F] text-white font-bold text-xs px-2.5 py-1 rounded-full shadow-lg border-2 border-white flex items-center gap-1">
                <span>Chair</span>
              </div>
            </div>

            {/* Bottom Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pointer-events-auto">
              
              {/* Table Feature Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#F5E4E4] shadow-lg flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFF0E8] text-[#EB6A30] flex items-center justify-center shrink-0">
                  <Grid className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#201E1F] flex items-center gap-1.5">
                    <span>3. Spacious Study Table</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#EB6A30]" />
                  </h4>
                  <p className="text-xs text-[#201E1F]/70 mt-1 leading-snug">
                    Wide wooden cubicle table with top shelf storage for all your books and stationery.
                  </p>
                </div>
              </motion.div>

              {/* Chair Feature Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#F5E4E4] shadow-lg flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#201E1F] text-white flex items-center justify-center shrink-0">
                  <Armchair className="w-5 h-5 text-[#EB6A30]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#201E1F] flex items-center gap-1.5">
                    <span>4. Ergonomic Chair</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#EB6A30]" />
                  </h4>
                  <p className="text-xs text-[#201E1F]/70 mt-1 leading-snug">
                    Adjustable black lumbar support office chair for 10-14 hours of posture-friendly sitting.
                  </p>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
