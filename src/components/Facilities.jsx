import React from 'react';
import { motion } from 'framer-motion';

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-[#FFF8F5] text-[#201E1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#983132]">04 — FACILITIES</span>
            <div className="h-[1px] w-12 bg-[#F5E4E4]" />
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#201E1F]">
            Considered, not compromised.
          </h2>
        </motion.div>

        <div className="space-y-24">
          
          {/* Row 1: Real Hall Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#F5E4E4] bg-white h-[380px] sm:h-[420px]">
                <img
                  src="/WhatsApp Image 2026-08-16 at 12.58.49 PM (3).jpeg"
                  alt="Air-conditioned silent study hall"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-4"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#983132]/70">
                THE HALL
              </span>

              <h3 className="text-3xl sm:text-4xl font-bold text-[#201E1F] leading-tight">
                Air-conditioned, silent, and built for long sessions.
              </h3>

              <p className="text-base sm:text-lg text-[#201E1F]/75 leading-relaxed font-normal pt-2">
                Wide central aisle, wooden cubicles with acoustic panels between desks, LED task lamps at every seat. High capacity Mitsubishi Heavy Duty AC keeps temperature comfortable from morning to night.
              </p>
            </motion.div>

          </div>

          {/* Row 2: Text Left, Real Cubicle Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-4 order-2 lg:order-1"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#983132]/70">
                YOUR DESK
              </span>

              <h3 className="text-3xl sm:text-4xl font-bold text-[#201E1F] leading-tight">
                Your own private corner every single day.
              </h3>

              <p className="text-base sm:text-lg text-[#201E1F]/75 leading-relaxed font-normal pt-2">
                Full-size wooden desk, ergonomic lumbar chair, individual power socket, LED light, and top shelf for textbooks & study maps. Leave everything set up for tomorrow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 order-1 lg:order-2"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#F5E4E4] bg-white h-[380px] sm:h-[420px]">
                <img
                  src="/WhatsApp Image 2026-08-16 at 12.58.48 PM (2).jpeg"
                  alt="Your private cubicle setup with maps"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
