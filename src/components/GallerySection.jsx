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
            <span className="text-xs font-bold uppercase tracking-widest text-[#983132]">05 — GALLERY</span>
            <div className="h-[1px] w-12 bg-[#F5E4E4]" />
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#201E1F]">
            A look inside.
          </h2>
        </motion.div>

        {/* Masonry Bento Grid matching exact screenshot layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          
          {/* Column 1: Tall Single Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedImage({
              src: '/assets/student_study.png',
              title: 'Focused Study Environment',
              desc: 'Dedicated silent space for serious aspirants'
            })}
            className="group relative rounded-3xl overflow-hidden shadow-sm border border-[#F5E4E4] cursor-pointer h-[520px] bg-[#FFF8F5]"
          >
            <img
              src="/assets/student_study.png"
              alt="Focused Student Studying"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#201E1F]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white text-sm font-semibold flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-[#EB6A30]" /> Focused Study Zone
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
                src: '/assets/gallery_notes.png',
                title: 'Organized Study Table',
                desc: 'Clean space for notes, textbooks & laptops'
              })}
              className="group relative rounded-3xl overflow-hidden shadow-sm border border-[#F5E4E4] cursor-pointer h-[250px] bg-[#FFF8F5]"
            >
              <img
                src="/assets/gallery_notes.png"
                alt="Organized Study Desk"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201E1F]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white text-sm font-semibold flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-[#EB6A30]" /> Notes & Reference Books
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => setSelectedImage({
                src: '/assets/gallery_reception.png',
                title: 'Library Reception Desk',
                desc: 'Friendly staff and RFID entry desk'
              })}
              className="group relative rounded-3xl overflow-hidden shadow-sm border border-[#F5E4E4] cursor-pointer h-[255px] bg-[#FFF8F5]"
            >
              <img
                src="/assets/gallery_reception.png"
                alt="Library Reception Desk"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201E1F]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white text-sm font-semibold flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-[#EB6A30]" /> Library Reception Desk
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
                src: '/assets/ac_hall.png',
                title: '24°C Climate Controlled AC Hall',
                desc: 'Spacious study room with acoustic cubicles'
              })}
              className="group relative rounded-3xl overflow-hidden shadow-sm border border-[#F5E4E4] cursor-pointer h-[250px] bg-[#FFF8F5]"
            >
              <img
                src="/assets/ac_hall.png"
                alt="AC Study Hall"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201E1F]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white text-sm font-semibold flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-[#EB6A30]" /> AC Silent Reading Hall
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.25 }}
              onClick={() => setSelectedImage({
                src: '/assets/desk_closeup.png',
                title: 'Private Desk & Task Lamp',
                desc: 'Individual power sockets & dimmable LED lamp'
              })}
              className="group relative rounded-3xl overflow-hidden shadow-sm border border-[#F5E4E4] cursor-pointer h-[255px] bg-[#FFF8F5]"
            >
              <img
                src="/assets/desk_closeup.png"
                alt="Private Desk Closeup"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201E1F]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white text-sm font-semibold flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-[#EB6A30]" /> Personal Desk Setup
                </span>
              </div>
            </motion.div>
          </div>

          {/* Column 4: Tall Single Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setSelectedImage({
              src: '/assets/gallery_nook.png',
              title: 'Cozy Night Study Corner',
              desc: 'Warm ambient lighting & quiet reading nook'
            })}
            className="group relative rounded-3xl overflow-hidden shadow-sm border border-[#F5E4E4] cursor-pointer h-[520px] bg-[#FFF8F5]"
          >
            <img
              src="/assets/gallery_nook.png"
              alt="Cozy Reading Nook"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#201E1F]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white text-sm font-semibold flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-[#EB6A30]" /> Cozy Reading Nook
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
              className="w-full max-h-[70vh] object-cover"
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
