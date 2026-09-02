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
import { useLanguage } from '../context/LanguageContext';

export default function Features() {
  const { language, t } = useLanguage();
  const isGu = language === 'gu';

  const features = [
    { icon: Snowflake, title: isGu ? 'સંપૂર્ણ એર કંડિશન્ડ' : 'Fully Air Conditioned' },
    { icon: Armchair, title: isGu ? 'આરામદાયક અર્ગોનોમિક ખુરશી' : 'Ergonomic Chairs' },
    { icon: Grid, title: isGu ? 'વિશાળ સ્ટડી ડેસ્ક' : 'Spacious Study Tables' },
    { icon: Wifi, title: isGu ? 'હાઇ-સ્પીડ ફાઇબર વાઇ-ફાઇ' : 'High-Speed Wi-Fi' },
    { icon: Plug, title: isGu ? 'સ્વતંત્ર ચાર્જિંગ પોઇન્ટ્સ' : 'Individual Charging Points' },
    { icon: VolumeX, title: isGu ? 'સંપૂર્ણ સાયલન્ટ વાતાવરણ' : 'Silent Study Environment' },
    { icon: ShieldCheck, title: isGu ? '૨૪×૭ CCTV કેમેરા સુરક્ષા' : '24×7 CCTV Security' },
    { icon: Droplets, title: isGu ? 'શુદ્ધ ઠંડુ RO પીવાનું પાણી' : 'Purified Drinking Water' },
    { icon: Sparkles, title: isGu ? 'સ્વચ્છ અને હાઇજેનિક વૉશરૂમ' : 'Clean Washrooms' },
    { icon: RefreshCw, title: isGu ? 'રોજિંદી સાફ-સફાઈ' : 'Daily Cleaning' },
    { icon: Zap, title: isGu ? '૧૦૦% પાવર બેકઅપ' : 'Power Backup' },
    { icon: Sun, title: isGu ? 'કુદરતી રોશની અને વેન્ટિલેશન' : 'Natural Lighting' },
    { icon: Clock, title: isGu ? 'અનુકૂળ સમયપત્રક' : 'Flexible Timings' },
    { icon: Wallet, title: isGu ? 'કિફાયતી માસિક ફી' : 'Affordable Membership' },
    { icon: Heart, title: isGu ? 'વિદ્યાર્થી-મૈત્રીપૂર્ણ સંચાલન' : 'Friendly Management' },
    { icon: Lock, title: isGu ? 'સુરક્ષિત લોકર સુવિધા' : 'Personal Secure Lockers' },
    { icon: Car, title: isGu ? 'ટૂ-વ્હીલર પાર્કિંગ સુવિધા' : 'Parking Facility' }
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#983132]">{t('features.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#201E1F]">
            {t('features.headingStart')}
            <span className="font-serif italic text-[#EB6A30]">{t('features.headingHighlight')}</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-[#201E1F]/70 font-normal">
            {t('features.subtitle')}
          </p>
        </motion.div>

        {/* 17 Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-[#F5E4E4] hover:border-[#983132]/30 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[110px] sm:min-h-[120px] shadow-sm hover:shadow-md hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFF0E8] text-[#983132] flex items-center justify-center mb-3 group-hover:bg-[#983132] group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-[#201E1F] leading-tight line-clamp-2">
                  {feature.title}
                </h4>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
