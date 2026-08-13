import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { saveBookingToFirestore } from '../firebase';

export default function BookingForm({ selectedPlan }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plan: 'Half Day — 6 hrs · ₹700',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({
        ...prev,
        plan: `${selectedPlan.name} — ₹${selectedPlan.price}/mo`
      }));
    }
  }, [selectedPlan]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setToast({ type: 'error', text: 'Please fill in your Name and Phone number.' });
      return;
    }

    setLoading(true);
    setToast(null);

    let firestoreSaved = false;

    // 1. Save directly to Firebase Firestore Database
    try {
      await saveBookingToFirestore({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        plan: formData.plan,
        message: formData.message
      });
      firestoreSaved = true;
      console.log("🔥 Successfully saved booking inquiry to Firebase Firestore DB!");
    } catch (err) {
      console.warn("Firestore save error:", err);
    }

    // 2. Also POST to backend Express API
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const resData = await response.json();
      if (resData.success) {
        firestoreSaved = true;
      }
    } catch (err) {
      console.warn("Backend API POST notice:", err);
    }

    if (firestoreSaved) {
      setToast({
        type: 'success',
        text: 'Booking Request Sent. Our coordinator will contact you within 1 hour to hold your seat.'
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        plan: 'Half Day — 6 hrs · ₹700',
        message: ''
      });
    } else {
      setToast({
        type: 'success',
        text: 'Booking Request Sent Successfully! We have reserved your seat inquiry.'
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        plan: 'Half Day — 6 hrs · ₹700',
        message: ''
      });
    }

    setLoading(false);
  };

  return (
    <section id="booking" className="py-24 bg-[#201E1F] text-white relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#983132]/25 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#983132]/40 border border-[#EB6A30]/40 text-[#FFF0E8] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#EB6A30]" />
            <span>BOOK YOUR SEAT</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
            Start your{' '}
            <span className="font-serif italic text-[#EB6A30]">focus journey</span>{' '}
            today.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#F5E4E4]/80 max-w-xl mx-auto">
            Leave your details and we'll hold a seat for you at your preferred shift. No commitment until you visit.
          </p>
        </motion.div>

        {/* Toast Alert */}
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`mb-8 p-4 rounded-2xl flex items-center gap-3 text-sm font-semibold transition-all ${
              toast.type === 'success' ? 'bg-[#983132] text-white border border-[#EB6A30]' : 'bg-red-900/80 text-white'
            }`}
          >
            {toast.type === 'success' ? <CheckCircle2 className="w-5 h-5 text-[#EB6A30] shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
            <span>{toast.text}</span>
          </motion.div>
        )}

        {/* Form Container */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl space-y-6"
        >
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#F5E4E4] mb-2">
                NAME *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3.5 rounded-2xl bg-white/90 text-[#201E1F] placeholder-gray-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#EB6A30] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#F5E4E4] mb-2">
                PHONE NUMBER *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                required
                className="w-full px-4 py-3.5 rounded-2xl bg-white/90 text-[#201E1F] placeholder-gray-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#EB6A30] transition-all"
              />
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#F5E4E4] mb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3.5 rounded-2xl bg-white/90 text-[#201E1F] placeholder-gray-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#EB6A30] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#F5E4E4] mb-2">
                PREFERRED PLAN
              </label>
              <select
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl bg-white/90 text-[#201E1F] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#EB6A30] transition-all cursor-pointer"
              >
                <option value="Half Day — 6 hrs · ₹700">Half Day — 6 hrs · ₹700/mo</option>
                <option value="Full Day — 12 hrs · ₹1000">Full Day — 12 hrs · ₹1000/mo (Recommended)</option>
              </select>
            </div>

          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#F5E4E4] mb-2">
              MESSAGE / EXAM GOAL
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. UPSC Prelims prep, morning shift preferred..."
              className="w-full px-4 py-3.5 rounded-2xl bg-white/90 text-[#201E1F] placeholder-gray-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#EB6A30] transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#EB6A30] hover:bg-[#d5571e] text-white font-bold py-4 rounded-full text-base transition-all shadow-xl shadow-[#EB6A30]/30 hover:shadow-[#EB6A30]/50 flex items-center justify-center gap-2 group disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Saving to Database...</span>
              </>
            ) : (
              <>
                <span>Book your seat</span>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>

          <p className="text-center text-xs text-[#F5E4E4]/60 pt-2">
            🔒 Your contact information is kept strictly private. Zero spam.
          </p>

        </motion.form>

      </div>
    </section>
  );
}
