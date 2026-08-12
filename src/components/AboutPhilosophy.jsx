import React from 'react';
import { motion } from 'framer-motion';
import { VolumeX, Flame, ShieldCheck, Sparkles } from 'lucide-react';

export default function AboutPhilosophy() {
  return (
    <section id="about" className="py-24 bg-white text-[#201E1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#983132]">01 — ABOUT US</span>
          <div className="h-[1px] w-12 bg-[#F5E4E4]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-5xl font-bold tracking-tight text-[#201E1F] leading-tight"
            >
              A space built for one thing —{' '}
              <span className="font-serif italic text-[#983132]">deep focus.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg text-[#201E1F]/80 leading-relaxed font-normal"
            >
              <strong className="text-[#983132]">ShreeJi Reading Library</strong> is not a traditional library. We don't lend books. We offer something far harder to find — a quiet, disciplined, professionally managed room where serious students come to prepare for the exams that will define their careers.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-[#201E1F]/80 leading-relaxed font-normal"
            >
              Every element — the temperature, the dimmable desk lighting, the ergonomic chair you sit in, the absolute silence around you — is tuned so your only job is to open your book and disappear into it.
            </motion.p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-5 rounded-2xl bg-[#FFF8F5] border border-[#F5E4E4] flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#983132]/10 text-[#983132] flex items-center justify-center shrink-0">
                  <VolumeX className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#201E1F] text-base mb-1">Strict Silence Code</h4>
                  <p className="text-sm text-[#201E1F]/70">Zero noise tolerance with acoustic partitions for uninterrupted study.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-5 rounded-2xl bg-[#FFF8F5] border border-[#F5E4E4] flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EB6A30]/10 text-[#EB6A30] flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#201E1F] text-base mb-1">High-Drive Environment</h4>
                  <p className="text-sm text-[#201E1F]/70">Surround yourself with dedicated peer aspirants aiming for top ranks.</p>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Right Image / Card Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFF8F5] group">
              <img 
                src="/assets/ac_hall.png" 
                alt="ShreeJi Reading Library Study Space" 
                className="w-full h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201E1F]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-[#F5E4E4] shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#983132]">ACADEMIC EXCELLENCE</span>
                  <Sparkles className="w-4 h-4 text-[#EB6A30]" />
                </div>
                <p className="text-sm text-[#201E1F] font-semibold">
                  "The cleanest & quietest reading library experience in the city."
                </p>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 200 }}
              className="absolute -top-6 -left-6 bg-[#983132] text-white p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3"
            >
              <ShieldCheck className="w-6 h-6 text-[#EB6A30]" />
              <div>
                <p className="text-xs font-bold text-white/80">RESERVED DESKS</p>
                <p className="text-sm font-extrabold text-white">Fixed Seat Guarantee</p>
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
