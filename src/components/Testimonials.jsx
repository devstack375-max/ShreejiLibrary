import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Aarav Mehta',
      exam: 'GPSC Class-1 Rank 14',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      text: 'ShreeJi Reading Library gave me the quiet discipline I could never find at home. Having a fixed assigned seat and continuous 24°C AC kept me in peak flow for 10+ hours every day.',
      stars: 5
    },
    {
      name: 'Kavya Shah',
      exam: 'CA Final Top Scorer',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      text: 'The acoustic cubicles are incredible. Absolutely zero noise, dimmable desk lamp, fast dual fiber Wi-Fi for video lectures, and safe locker. Best reading space by far!',
      stars: 5
    },
    {
      name: 'Deepak Joshi',
      exam: 'UPSC Mains Qualified',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      text: 'Having my personal desk set up every morning meant I never wasted a single minute. The staff is polite and strictly maintains silence across all reading rooms.',
      stars: 5
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } }
  };

  return (
    <section className="py-24 bg-[#FFF8F5] text-[#201E1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#983132]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#983132]">06 — TESTIMONIALS</span>
            <div className="h-[1px] w-8 bg-[#983132]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#201E1F]">
            What our members say.
          </h2>
          <p className="mt-3 text-lg text-[#201E1F]/70">
            Trusted by hundreds of serious learners and competitive exam achievers.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((rev, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              className="bg-white p-8 rounded-3xl border border-[#F5E4E4] shadow-md flex flex-col justify-between relative group hover:border-[#EB6A30] transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#FFF0E8] group-hover:text-[#F5E4E4] transition-colors" />

              <div>
                <div className="flex items-center gap-1 text-[#EB6A30] mb-6">
                  {Array.from({ length: rev.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#EB6A30]" />
                  ))}
                </div>

                <p className="text-sm text-[#201E1F]/80 leading-relaxed italic mb-8">
                  "{rev.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-[#FFF8F5]">
                <img 
                  src={rev.avatar} 
                  alt={rev.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#983132]"
                />
                <div>
                  <h4 className="font-bold text-[#201E1F] text-base flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle className="w-4 h-4 text-[#983132]" />
                  </h4>
                  <p className="text-xs font-semibold text-[#EB6A30]">{rev.exam}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
