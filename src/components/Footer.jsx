import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language, t } = useLanguage();
  const isGu = language === 'gu';

  return (
    <footer className="bg-[#201E1F] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-8 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="h-12 flex items-center">
              <img 
                src="/assets/logo.jpg" 
                alt="ShreeJi Reading Library" 
                className="h-11 w-auto object-contain rounded-md"
              />
            </div>

            <p className="text-sm text-[#F5E4E4]/70 leading-relaxed max-w-sm">
              {t('footer.tagline')}
            </p>

            <div className="pt-2 text-xs text-[#EB6A30] font-semibold">
              ShreeJi Reading Library © 2026. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#EB6A30]">
              {isGu ? 'ઝડપી લિંક્સ' : 'NAVIGATION'}
            </h4>
            <ul className="space-y-2 text-sm text-[#F5E4E4]/80 font-medium">
              <li><a href="#about" className="hover:text-[#EB6A30] transition-colors">{t('nav.about')}</a></li>
              <li><a href="#features" className="hover:text-[#EB6A30] transition-colors">{t('nav.whyUs')}</a></li>
              <li><a href="#reading-space" className="hover:text-[#EB6A30] transition-colors">{t('nav.cubicle')}</a></li>
              <li><a href="#plans" className="hover:text-[#EB6A30] transition-colors">{t('nav.membership')}</a></li>
              <li><a href="#facilities" className="hover:text-[#EB6A30] transition-colors">{t('nav.facilities')}</a></li>
              <li><a href="#gallery" className="hover:text-[#EB6A30] transition-colors">{t('nav.gallery')}</a></li>
              <li><a href="#faq" className="hover:text-[#EB6A30] transition-colors">{t('nav.faq')}</a></li>
            </ul>
          </div>

          {/* Target Aspirants */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#EB6A30]">
              {isGu ? 'પરીક્ષાઓ' : 'TARGET EXAMS'}
            </h4>
            <ul className="space-y-2 text-sm text-[#F5E4E4]/80 font-medium">
              <li><a href="#about" className="hover:text-[#EB6A30] transition-colors">UPSC / GPSC Class 1-2</a></li>
              <li><a href="#about" className="hover:text-[#EB6A30] transition-colors">CA / CS / CMA</a></li>
              <li><a href="#about" className="hover:text-[#EB6A30] transition-colors">NEET & JEE Top Rankers</a></li>
              <li><a href="#about" className="hover:text-[#EB6A30] transition-colors">GATE, ESE & Technical</a></li>
              <li><a href="#about" className="hover:text-[#EB6A30] transition-colors">Bank PO & SSC CGL</a></li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#EB6A30]">
              {isGu ? 'લાઇબ્રેરીનો સમય' : 'LIBRARY HOURS'}
            </h4>
            <div className="text-sm text-[#F5E4E4]/80 space-y-1">
              <p className="font-semibold text-white">{isGu ? 'સોમવાર – રવિવાર (સાતેય દિવસ)' : 'Mon – Sun (7 Days)'}</p>
              <p className="text-[#983132] font-bold bg-[#F5E4E4] px-3 py-1 rounded-full inline-block text-xs">
                06:00 AM – 11:00 PM
              </p>
              <p className="pt-2 text-xs text-[#F5E4E4]/70">
                {isGu ? 'સંપર્ક નંબર:' : 'Contact:'} <a href="tel:+916353321530" className="text-white font-bold hover:text-[#EB6A30]">+91 63533 21530</a>
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F5E4E4]/50 gap-4">
          <p>{t('footer.copyright')}</p>
          <div className="flex items-center gap-6">
            <span>Air Conditioned</span>
            <span>•</span>
            <span>Silent Study Desks</span>
            <span>•</span>
            <span>High-Speed Wi-Fi</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
