import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Why us', href: '#features' },
    { name: 'Membership', href: '#plans' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass-nav shadow-sm py-3 border-b border-[#F5E4E4]' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - White pill box when at top over hero, blends cleanly into navbar on scroll */}
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
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[15px] font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#EB6A30] hover:after:w-full after:transition-all after:duration-300 ${
                  scrolled 
                    ? 'text-[#201E1F] hover:text-[#983132]' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenBooking}
              className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 group ${
                scrolled
                  ? 'bg-[#983132] hover:bg-[#7f2728] text-white hover:shadow-[#983132]/20'
                  : 'bg-white hover:bg-white/90 text-[#201E1F]'
              }`}
            >
              <span>Book a seat</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#983132] text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow-sm"
            >
              Book
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
              Book a seat
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
