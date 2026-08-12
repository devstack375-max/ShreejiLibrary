import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';

export default function GallerySection({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      category: 'cubicles',
      title: 'Acoustic Wooden Study Cubicles',
      description: 'Dimmable LED task lamps and acoustic side panels at every seat.',
      src: '/assets/study_cubicles.png'
    },
    {
      id: 2,
      category: 'lounge',
      title: '24°C Climate Controlled AC Hall',
      description: 'Spacious silent study room with wide central aisle and ergonomic seating.',
      src: '/assets/ac_hall.png'
    },
    {
      id: 3,
      category: 'lockers',
      title: 'Secure Storage Lockers',
      description: 'Personal storage unit for your textbooks, notes, and laptop.',
      src: '/assets/personal_lockers.png'
    },
    {
      id: 4,
      category: 'beverage',
      title: 'Complimentary Beverage & RO Station',
      description: 'Clean RO drinking water and hot tea/coffee break counter.',
      src: '/assets/beverage_lounge.png'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="gallery" className="py-24 bg-white text-[#201E1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#983132]">04 — GALLERY</span>
              <div className="h-[1px] w-12 bg-[#F5E4E4]" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#201E1F] leading-tight">
              A look inside.
            </h2>
            
            <p className="mt-3 text-lg text-[#201E1F]/70 font-normal">
              Experience the atmosphere before your visit.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'cubicles', label: 'Study Cubicles' },
              { id: 'lounge', label: 'AC Hall' },
              { id: 'lockers', label: 'Lockers' },
              { id: 'beverage', label: 'Beverage Bar' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-[#983132] text-white shadow-md'
                    : 'bg-[#FFF8F5] text-[#201E1F]/70 hover:text-[#983132] border border-[#F5E4E4]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Image Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredImages.map((img) => (
            <motion.div
              key={img.id}
              variants={itemVariants}
              layout
              onClick={() => setSelectedImage(img)}
              className="group relative rounded-3xl overflow-hidden shadow-md border border-[#F5E4E4] cursor-pointer h-[320px] bg-[#FFF8F5]"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201E1F]/90 via-[#201E1F]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#EB6A30] transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#FFF0E8] transition-colors">
                    {img.title}
                  </h4>
                  <p className="text-xs text-white/80 font-normal line-clamp-2">
                    {img.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Schedule Walk-Through CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-[#201E1F] via-[#2a1c1d] to-[#983132] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#EB6A30]/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EB6A30]">FREE DEMO DAY</span>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight">
              Experience the environment before you visit.
            </h3>
            <p className="text-sm sm:text-base text-[#F5E4E4]/80">
              Schedule a 15-minute walk-through or request a 1-day trial desk pass.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="relative z-10 bg-[#EB6A30] hover:bg-[#d5571e] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shrink-0"
          >
            Schedule a walk-through
          </button>
        </motion.div>

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
              <p className="text-sm text-gray-300">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
