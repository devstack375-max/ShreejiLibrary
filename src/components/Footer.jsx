import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#201E1F] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
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
              A premium reading space and silent study library engineered for serious UPSC, GPSC, CA, NEET & Competitive Exam aspirants.
            </p>

            <div className="pt-2 text-xs text-[#EB6A30] font-semibold">
              ShreeJi Reading Library © 2026. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#EB6A30]">NAVIGATION</h4>
            <ul className="space-y-2 text-sm text-[#F5E4E4]/80 font-medium">
              <li><a href="#about" className="hover:text-[#EB6A30] transition-colors">About Us</a></li>
              <li><a href="#features" className="hover:text-[#EB6A30] transition-colors">Why Us</a></li>
              <li><a href="#plans" className="hover:text-[#EB6A30] transition-colors">Membership Plans</a></li>
              <li><a href="#seatmap" className="hover:text-[#EB6A30] transition-colors">Live Seat Map</a></li>
              <li><a href="#gallery" className="hover:text-[#EB6A30] transition-colors">Photo Gallery</a></li>
              <li><a href="#faq" className="hover:text-[#EB6A30] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#EB6A30]">POLICIES</h4>
            <ul className="space-y-2 text-sm text-[#F5E4E4]/80 font-medium">
              <li><a href="#faq" className="hover:text-[#EB6A30] transition-colors">Silence Code Rules</a></li>
              <li><a href="#faq" className="hover:text-[#EB6A30] transition-colors">Privacy Policy</a></li>
              <li><a href="#faq" className="hover:text-[#EB6A30] transition-colors">Terms of Membership</a></li>
              <li><a href="#faq" className="hover:text-[#EB6A30] transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#EB6A30]">LIBRARY HOURS</h4>
            <div className="text-sm text-[#F5E4E4]/80 space-y-1">
              <p className="font-semibold text-white">Mon – Sun (7 Days)</p>
              <p className="text-[#983132] font-bold bg-[#F5E4E4] px-3 py-1 rounded-full inline-block text-xs">
                6:00 AM – 11:00 PM
              </p>
              <p className="text-xs text-[#F5E4E4]/60 pt-2">
                24°C Climate Controlled AC
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5E4E4]/60">
          <p>Designed for ShreeJi Reading Library • Powered by React & Node.js</p>
          
          <a
            href="#top"
            className="flex items-center gap-1.5 text-white hover:text-[#EB6A30] transition-colors font-semibold uppercase tracking-wider"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
