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
                Located in a quiet academic neighborhood near India Gate with easy parking and public transit access.
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
                    Rajpath Area, Near India Gate, Central Secretariat, New Delhi, Delhi 110001
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
                    Phone: <a href="tel:+916353321530" className="font-semibold hover:text-[#983132]">+91 63533 21530</a><br />
                    Email: <a href="mailto:contact@shreejilibrary.com" className="hover:text-[#983132]">contact@shreejilibrary.com</a>
                  </p>
                </div>
              </motion.div>

            </div>

          </motion.div>

          {/* Interactive Google Map for India Gate */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="bg-white p-3 rounded-3xl border border-[#F5E4E4] shadow-xl relative overflow-hidden h-[420px]">
              <iframe
                title="India Gate Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5620641617477!2d77.2270034762024!3d28.612911975674723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1.25rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
