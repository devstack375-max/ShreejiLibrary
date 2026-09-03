import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { PlansProvider } from './context/PlansContext';
import { AuthProvider } from './context/AuthContext';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutPhilosophy from './components/AboutPhilosophy';
import PerfectReadingSpace from './components/PerfectReadingSpace';
import Features from './components/Features';
import MembershipPricing from './components/MembershipPricing';
import Facilities from './components/Facilities';
import GallerySection from './components/GallerySection';
import AspirantsFocus from './components/AspirantsFocus';
import DayTimeline from './components/DayTimeline';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import LocationContact from './components/LocationContact';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AdminModal from './components/AdminModal';
import StudentAuthModal from './components/StudentAuthModal';

function MainApp() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [studentBookingData, setStudentBookingData] = useState(null);

  const scrollToBooking = () => {
    const el = document.getElementById('booking') || document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    scrollToBooking();
  };

  const handleOpenStudentPortal = (data) => {
    setStudentBookingData(data);
    setIsStudentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#201E1F] selection:bg-[#EB6A30] selection:text-white relative overflow-x-hidden max-w-full w-full">
      
      {/* Preloader Animation */}
      <Preloader />

      {/* Navigation Header */}
      <Navbar 
        onOpenBooking={scrollToBooking} 
        onOpenAuth={() => { setStudentBookingData(null); setIsStudentModalOpen(true); }}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Hero Section */}
      <Hero onOpenBooking={scrollToBooking} />

      {/* About / Philosophy Section */}
      <AboutPhilosophy />

      {/* Anatomy of Perfect Reading Space (Interactive Callout Cubicle Photo) */}
      <PerfectReadingSpace />

      {/* Why Us / Key Features Grid */}
      <Features />

      {/* Membership Pricing Section with Software Plan Manager Option */}
      <MembershipPricing 
        onSelectPlan={handleSelectPlan} 
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Facilities Showcase Section */}
      <Facilities />

      {/* Photo Gallery Section with View More and Slideshow */}
      <GallerySection onOpenBooking={scrollToBooking} />

      {/* Target Aspirants Section */}
      <AspirantsFocus />

      {/* Daily Routine & Timeline */}
      <DayTimeline />

      {/* Member Testimonials */}
      <Testimonials />

      {/* FAQ Accordion */}
      <FAQSection />

      {/* Location & Contact Information */}
      <LocationContact />

      {/* Seat Booking Form */}
      <BookingForm 
        selectedPlan={selectedPlan} 
        onOpenStudentPortal={handleOpenStudentPortal}
      />

      {/* Footer */}
      <Footer 
        onOpenAdmin={() => setIsAdminOpen(true)} 
        onOpenAuth={() => { setStudentBookingData(null); setIsStudentModalOpen(true); }}
      />

      {/* Floating Go To Top Button */}
      <ScrollToTop />

      {/* Software Admin & Plan Benefits Manager Modal */}
      <AdminModal 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)} 
      />

      {/* Unified Firebase Student & Admin Auth Modal */}
      <StudentAuthModal
        isOpen={isStudentModalOpen}
        onClose={() => setIsStudentModalOpen(false)}
        initialData={studentBookingData}
        onAdminSuccess={() => setIsAdminOpen(true)}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <PlansProvider>
          <MainApp />
        </PlansProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}
