import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { saveBookingToFirestore } from '../firebase';
import { useLanguage } from '../context/LanguageContext';

export default function BookingForm({ selectedPlan }) {
  const { language, t } = useLanguage();
  const isGu = language === 'gu';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    exam: '',
    plan: 'Half Day — 6 hrs · ₹700',
    shift: 'Full Day (06:00 AM – 11:00 PM)',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (selectedPlan) {
      const planName = selectedPlan === 'full-day' 
        ? (isGu ? 'ફુલ ડે પ્લાન — ₹1000/માસિક' : 'Full Day Plan — ₹1000/mo')
        : (isGu ? 'હાફ ડે પ્લાન — ₹700/માસિક' : 'Half Day Plan — ₹700/mo');
      setFormData(prev => ({
        ...prev,
        plan: planName
      }));
    }
  }, [selectedPlan, isGu]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setToast({ 
        type: 'error', 
        text: isGu ? 'કૃપા કરીને તમારું નામ અને ફોન નંબર દાખલ કરો.' : 'Please fill in your Name and Phone number.' 
      });
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
        exam: formData.exam,
        plan: formData.plan,
        shift: formData.shift,
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

    setToast({
      type: 'success',
      text: t('booking.successDesc')
    });
    setFormData({
      name: '',
      phone: '',
      exam: '',
      plan: isGu ? 'હાફ ડે પ્લાન — ₹700/માસિક' : 'Half Day — 6 hrs · ₹700',
      shift: isGu ? 'ફુલ ડે (સવારે ૦૬:૦૦ – રાત્રે ૧૧:૦૦)' : 'Full Day (06:00 AM – 11:00 PM)',
      message: ''
    });

    setLoading(false);
  };

  return (
    <section id="booking" className="py-24 bg-[#201E1F] text-white relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[350px] sm:h-[500px] bg-[#983132]/25 blur-[120px] pointer-events-none" />

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
            <span>{t('booking.badge')}</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
            {t('booking.headingStart')}
            <span className="font-serif italic text-[#EB6A30]">{t('booking.headingHighlight')}</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#F5E4E4]/80 max-w-xl mx-auto">
            {t('booking.subtitle')}
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
                {t('booking.fullName')}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('booking.fullNamePlaceholder')}
                required
                className="w-full px-4 py-3.5 rounded-2xl bg-white/90 text-[#201E1F] placeholder-gray-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#EB6A30] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#F5E4E4] mb-2">
                {t('booking.phone')}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('booking.phonePlaceholder')}
                required
                className="w-full px-4 py-3.5 rounded-2xl bg-white/90 text-[#201E1F] placeholder-gray-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#EB6A30] transition-all"
              />
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#F5E4E4] mb-2">
                {t('booking.exam')}
              </label>
              <input
                type="text"
                name="exam"
                value={formData.exam}
                onChange={handleChange}
                placeholder={t('booking.examPlaceholder')}
                className="w-full px-4 py-3.5 rounded-2xl bg-white/90 text-[#201E1F] placeholder-gray-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#EB6A30] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#F5E4E4] mb-2">
                {t('booking.planSelect')}
              </label>
              <select
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl bg-white/90 text-[#201E1F] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#EB6A30] transition-all"
              >
                <option value={isGu ? 'ફુલ ડે પ્લાન — ₹1000/માસિક' : 'Full Day — 17 hrs · ₹1000/mo'}>
                  {isGu ? 'ફુલ ડે પ્લાન (૧૭ કલાક) — ₹1000/માસિક' : 'Full Day (17 hrs) — ₹1000 / month'}
                </option>
                <option value={isGu ? 'હાફ ડે પ્લાન — ₹700/માસિક' : 'Half Day — 6-8 hrs · ₹700/mo'}>
                  {isGu ? 'હાફ ડે પ્લાન (૬-૮ કલાક) — ₹700/માસિક' : 'Half Day (6-8 hrs) — ₹700 / month'}
                </option>
              </select>
            </div>

          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#F5E4E4] mb-2">
              {t('booking.shiftSelect')}
            </label>
            <select
              name="shift"
              value={formData.shift}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-2xl bg-white/90 text-[#201E1F] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#EB6A30] transition-all"
            >
              <option value="Full Day (06:00 AM – 11:00 PM)">{t('booking.slotFullDay')}</option>
              <option value="Morning Shift (06:00 AM – 02:00 PM)">{t('booking.slotMorning')}</option>
              <option value="Evening Shift (02:00 PM – 11:00 PM)">{t('booking.slotEvening')}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#F5E4E4] mb-2">
              {isGu ? 'વિશેષ નોંધ અથવા પ્રશ્ન (વૈકલ્પિક)' : 'SPECIAL REQUESTS OR QUESTIONS (OPTIONAL)'}
            </label>
            <textarea
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder={isGu ? 'કોઈ ખાસ જરૂરિયાત હોય તો અહીં લખો...' : 'Tell us your preferred joining date or any questions...'}
              className="w-full px-4 py-3.5 rounded-2xl bg-white/90 text-[#201E1F] placeholder-gray-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#EB6A30] transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-full bg-[#EB6A30] hover:bg-[#d5571e] text-white font-bold text-base transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>{t('booking.submitting')}</span>
              </>
            ) : (
              <>
                <span>{t('booking.submitBtn')}</span>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>

        </motion.form>

      </div>
    </section>
  );
}
