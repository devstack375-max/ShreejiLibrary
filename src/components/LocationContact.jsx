import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function LocationContact() {
  return (
    <section id="contact" className="py-24 bg-[#FFF8F5] text-[#201E1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#983132]">08 — VISIT US</span>
          <div className="h-[1px] w-12 bg-[#F5E4E4]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#201E1F] leading-tight">
                Come find us.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#201E1F]/70">
                Located in a quiet academic neighborhood with easy parking and public transit access.
              </p>
            </div>

            <div className="space-y-6">
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#F5E4E4] shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#983132] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#201E1F] text-base">Library Location</h4>
                  <p className="text-sm text-[#201E1F]/80 mt-1">
                    2nd Floor, ShreeJi Academic Hub, Near University Commerce College Circle, Main Road.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#F5E4E4] shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#EB6A30] text-white flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#201E1F] text-base">Operating Hours</h4>
                  <p className="text-sm text-[#201E1F]/80 mt-1">
                    Monday – Sunday (7 Days a Week)<br />
                    <strong className="text-[#983132]">6:00 AM – 11:00 PM</strong>
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#F5E4E4] shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#201E1F] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#EB6A30]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#201E1F] text-base">Direct Contact</h4>
                  <p className="text-sm text-[#201E1F]/80 mt-1">
                    Phone: <a href="tel:+919876543210" className="font-semibold hover:text-[#983132]">+91 98765 43210</a><br />
                    Email: <a href="mailto:contact@shreejilibrary.com" className="hover:text-[#983132]">contact@shreejilibrary.com</a>
                  </p>
                </div>
              </motion.div>

            </div>

          </motion.div>

          {/* Map Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="bg-white p-4 rounded-3xl border border-[#F5E4E4] shadow-xl relative overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden h-[420px] bg-[#FFF8F5]">
                <div className="absolute inset-0 bg-[radial-gradient(#983132_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-20" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    className="w-16 h-16 rounded-full bg-[#983132] text-white flex items-center justify-center shadow-xl mb-4"
                  >
                    <MapPin className="w-8 h-8 text-[#EB6A30]" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#201E1F] mb-1">ShreeJi Reading Library</h3>
                  <p className="text-xs text-[#201E1F]/70 max-w-xs mb-4">
                    Prime Quiet Location • Air Conditioned • Private Lockers
                  </p>
                  <span className="bg-[#FFF0E8] border border-[#EB6A30] text-[#983132] font-bold text-xs px-4 py-2 rounded-full shadow-sm">
                    Open Daily 6:00 AM – 11:00 PM
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
