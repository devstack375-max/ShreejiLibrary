import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.whyUs'), href: '#features' },
    { name: t('nav.cubicle'), href: '#reading-space' },
    { name: t('nav.membership'), href: '#plans' },
    { name: t('nav.facilities'), href: '#facilities' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.faq'), href: '#faq' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass-nav shadow-sm py-3 border-b border-[#F5E4E4]' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3 group shrink-0">
            <div className={`transition-all duration-300 flex items-center justify-center ${
              scrolled 
                ? 'bg-transparent p-0 shadow-none border-0' 
                : 'bg-white px-3.5 py-1.5 rounded-xl shadow-md border border-white/20'
            }`}>
              <img 
                src="/assets/logo.jpg" 
                alt="ShreeJi Reading Library Logo" 
                className="h-9 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[14px] xl:text-[15px] font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#EB6A30] hover:after:w-full after:transition-all after:duration-300 ${
                  scrolled 
                    ? 'text-[#201E1F] hover:text-[#983132]' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs: Language Toggle & Book a Seat */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher Button */}
            <div className={`flex items-center p-1 rounded-full border transition-all ${
              scrolled 
                ? 'bg-[#FFF8F5] border-[#F5E4E4]' 
                : 'bg-black/30 border-white/20 backdrop-blur-md'
            }`}>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  language === 'en'
                    ? 'bg-[#983132] text-white shadow-sm'
                    : scrolled ? 'text-[#201E1F]/70 hover:text-[#201E1F]' : 'text-white/70 hover:text-white'
                }`}
                title="English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('gu')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  language === 'gu'
                    ? 'bg-[#983132] text-white shadow-sm'
                    : scrolled ? 'text-[#201E1F]/70 hover:text-[#201E1F]' : 'text-white/70 hover:text-white'
                }`}
                title="ગુજરાતી"
              >
                ગુજરાતી
              </button>
            </div>

            <button
              onClick={onOpenBooking}
              className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 group ${
                scrolled
                  ? 'bg-[#983132] hover:bg-[#7f2728] text-white hover:shadow-[#983132]/20'
                  : 'bg-white hover:bg-white/90 text-[#201E1F]'
              }`}
            >
              <span>{t('nav.bookSeat')}</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'gu' : 'en')}
              className={`text-xs font-bold px-2.5 py-1.5 rounded-full border flex items-center gap-1 ${
                scrolled 
                  ? 'bg-[#FFF8F5] border-[#F5E4E4] text-[#983132]' 
                  : 'bg-black/40 border-white/20 text-white backdrop-blur-md'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-[#EB6A30]" />
              <span>{language === 'en' ? 'GU' : 'EN'}</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="bg-[#983132] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm"
            >
              {t('nav.bookSeat')}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 focus:outline-none ${scrolled ? 'text-[#201E1F]' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#F5E4E4] px-4 pt-3 pb-6 space-y-3 shadow-xl">
          {/* Mobile Language Selector inside drawer */}
          <div className="flex items-center justify-between py-2 border-b border-[#F5E4E4]">
            <span className="text-xs font-semibold text-[#201E1F]/60 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#EB6A30]" /> Select Language / ભાષા
            </span>
            <div className="flex items-center gap-1 bg-[#FFF8F5] p-1 rounded-full border border-[#F5E4E4]">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  language === 'en' ? 'bg-[#983132] text-white' : 'text-[#201E1F]'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('gu')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  language === 'gu' ? 'bg-[#983132] text-white' : 'text-[#201E1F]'
                }`}
              >
                ગુજરાતી
              </button>
            </div>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#201E1F] hover:text-[#983132] py-2 border-b border-[#FFF8F5]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full bg-[#983132] text-white font-semibold py-3 rounded-full text-center"
            >
              {t('nav.bookSeat')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
