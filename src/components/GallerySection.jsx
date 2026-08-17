import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';

export default function GallerySection({ onOpenBooking }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-white text-[#201E1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#983132]">05 — REAL GALLERY</span>
            <div className="h-[1px] w-12 bg-[#F5E4E4]" />
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#201E1F]">
            A look inside our library.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#201E1F]/70">
            100% authentic photos of ShreeJi Reading Library facilities and study environment.
          </p>
        </motion.div>

        {/* Real Photos Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          
          {/* Column 1: Library Main Entrance Door */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedImage({
              src: '/WhatsApp Image 2026-08-16 at 12.58.51 PM (1).jpeg',
              title: 'Library Main Entrance',
              desc: 'Welcome entrance with ShreeJi logo, Bhagat Singh & Swami Vivekananda posters'
            })}
            className="group relative rounded-3xl overflow-hidden shadow-sm border border-[#F5E4E4] cursor-pointer h-[520px] bg-[#FFF8F5]"
          >
            <img
              src="/WhatsApp Image 2026-08-16 at 12.58.51 PM (1).jpeg"
              alt="ShreeJi Library Entrance Door"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#201E1F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white text-sm font-semibold flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-[#EB6A30]" /> Main Entrance Door
              </span>
            </div>
          </motion.div>

          {/* Column 2: Stacked 2 Cards */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onClick={() => setSelectedImage({
                src: '/WhatsApp Image 2026-08-16 at 12.58.48 PM (2).jpeg',
                title: 'Assigned Cubicles with Study Maps',
                desc: 'Cubicles #17, #18, #19 equipped with India & Gujarat maps for UPSC & GPSC aspirants'
              })}
              className="group relative rounded-3xl overflow-hidden shadow-sm border border-[#F5E4E4] cursor-pointer h-[250px] bg-[#FFF8F5]"
            >
              <img
                src="/WhatsApp Image 2026-08-16 at 12.58.48 PM (2).jpeg"
                alt="Study Cubicles with Maps"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201E1F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white text-sm font-semibold flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-[#EB6A30]" /> Cubicles with Maps
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => setSelectedImage({
                src: '/WhatsApp Image 2026-08-16 at 12.58.47 PM.jpeg',
                title: 'Mitsubishi Heavy Duty Jetflow AC',
                desc: 'High capacity 24°C climate controlled air conditioning for zero humidity comfort'
              })}
              className="group relative rounded-3xl overflow-hidden shadow-sm border border-[#F5E4E4] cursor-pointer h-[255px] bg-[#FFF8F5]"
            >
              <img
                src="/WhatsApp Image 2026-08-16 at 12.58.47 PM.jpeg"
                alt="Mitsubishi AC Unit"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201E1F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white text-sm font-semibold flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-[#EB6A30]" /> Mitsubishi Jetflow AC
                </span>
              </div>
            </motion.div>
          </div>

          {/* Column 3: Stacked 2 Cards */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              onClick={() => setSelectedImage({
                src: '/WhatsApp Image 2026-08-16 at 12.58.50 PM (1).jpeg',
                title: 'Soundproof Acoustic Wall Panels',
                desc: 'Special sound dampening foam panels for maximum silence & GATE study section'
              })}
              className="group relative rounded-3xl overflow-hidden shadow-sm border border-[#F5E4E4] cursor-pointer h-[250px] bg-[#FFF8F5]"
            >
              <img
                src="/WhatsApp Image 2026-08-16 at 12.58.50 PM (1).jpeg"
                alt="Acoustic Soundproof Study Zone"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201E1F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white text-sm font-semibold flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-[#EB6A30]" /> Soundproof Acoustic Zone
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.25 }}
              onClick={() => setSelectedImage({
                src: '/WhatsApp Image 2026-08-16 at 12.58.50 PM (2).jpeg',
                title: 'Open Air Terrace Refreshment Lounge',
                desc: 'Spacious open terrace for study breaks, tea/coffee & fresh air'
              })}
              className="group relative rounded-3xl overflow-hidden shadow-sm border border-[#F5E4E4] cursor-pointer h-[255px] bg-[#FFF8F5]"
            >
              <img
                src="/WhatsApp Image 2026-08-16 at 12.58.50 PM (2).jpeg"
                alt="Terrace Break Area"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201E1F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white text-sm font-semibold flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-[#EB6A30]" /> Terrace Break Area
                </span>
              </div>
            </motion.div>
          </div>

          {/* Column 4: Long Central Study Hall Aisle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setSelectedImage({
              src: '/WhatsApp Image 2026-08-16 at 12.58.49 PM (3).jpeg',
              title: 'Main Study Hall Row #1 to #33',
              desc: 'Spacious central aisle with individual numbered cubicles & ceiling fans'
            })}
            className="group relative rounded-3xl overflow-hidden shadow-sm border border-[#F5E4E4] cursor-pointer h-[520px] bg-[#FFF8F5]"
          >
            <img
              src="/WhatsApp Image 2026-08-16 at 12.58.49 PM (3).jpeg"
              alt="Main Study Hall Aisle"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#201E1F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white text-sm font-semibold flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-[#EB6A30]" /> Main Study Hall Row
              </span>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 p-3 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl w-full bg-[#201E1F] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full max-h-[75vh] object-contain bg-black"
            />
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold text-white mb-1">{selectedImage.title}</h3>
              <p className="text-sm text-gray-300">{selectedImage.desc}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
