import React from 'react';
import { motion } from 'framer-motion';
import { 
  Snowflake, 
  Armchair, 
  Grid, 
  Wifi, 
  Plug, 
  VolumeX, 
  ShieldCheck, 
  Droplets, 
  Sparkles, 
  RefreshCw, 
  Zap, 
  Sun, 
  Clock, 
  Wallet, 
  Heart, 
  Lock, 
  Car 
} from 'lucide-react';

export default function Features() {
  const features = [
    { icon: Snowflake, title: 'Fully Air Conditioned' },
    { icon: Armchair, title: 'Ergonomic Chairs' },
    { icon: Grid, title: 'Spacious Study Tables' },
    { icon: Wifi, title: 'High-Speed Wi-Fi' },
    { icon: Plug, title: 'Individual Charging Points' },
    { icon: VolumeX, title: 'Silent Study Environment' },
    { icon: ShieldCheck, title: '24×7 CCTV Security' },
    { icon: Droplets, title: 'Purified Drinking Water' },
    { icon: Sparkles, title: 'Clean Washrooms' },
    { icon: RefreshCw, title: 'Daily Cleaning' },
    { icon: Zap, title: 'Power Backup' },
    { icon: Sun, title: 'Natural Lighting' },
    { icon: Clock, title: 'Flexible Timings' },
    { icon: Wallet, title: 'Affordable Membership' },
    { icon: Heart, title: 'Friendly Management' },
    { icon: Lock, title: 'Safe Environment' },
    { icon: Car, title: 'Parking Facility' }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="features" className="py-24 bg-[#FFF8F5] text-[#201E1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#983132]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#983132]">02 — WHY SHREEJI</span>
            <div className="h-[1px] w-8 bg-[#983132]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#201E1F] max-w-3xl leading-tight">
            Every detail designed to keep you in{' '}
            <span className="font-serif italic text-[#EB6A30]">flow.</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-[#201E1F]/70 max-w-2xl font-normal">
            Considered, not compromised. We took away every friction point so you can focus entirely on conquering your goals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                className="bg-white p-6 rounded-2xl border border-[#F5E4E4] card-hover-shadow flex flex-col justify-between h-[130px] group"
              >
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-xl bg-[#FFF0E8] text-[#EB6A30] group-hover:bg-[#983132] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Feature Title */}
                <h3 className="text-sm font-bold text-[#201E1F] group-hover:text-[#983132] transition-colors leading-snug">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
