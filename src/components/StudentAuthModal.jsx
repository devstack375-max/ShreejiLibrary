import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  UserCheck, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Download, 
  Lock, 
  Phone, 
  User, 
  BookOpen, 
  ShieldCheck, 
  Clock, 
  Wifi, 
  LogIn,
  KeyRound,
  Mail,
  Loader2,
  AlertCircle,
  Armchair,
  LogOut
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

export default function StudentAuthModal({ isOpen, onClose, initialData, onAdminSuccess }) {
  const { language, t } = useLanguage();
  const isGu = language === 'gu';
  const { currentUser, login, signup, logout, assignSeatToUser } = useAuth();

  // Tab states: 'login' | 'signup' | 'pass' | 'profile'
  const [tab, setTab] = useState('login');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Login Form State
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Sign Up Form State
  const [signUpData, setSignUpData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    if (initialData) {
      setSignUpData(prev => ({
        ...prev,
        name: initialData.name || prev.name,
        phone: initialData.phone || prev.phone,
        email: initialData.email || prev.email
      }));

      // If user is ALREADY logged in when clicking Final Seat -> assign seat & show confirmed pass!
      if (initialData.directConfirm && currentUser) {
        const generatedSeat = `Cubicle #${Math.floor(Math.random() * 32) + 1}`;
        assignSeatToUser(generatedSeat, initialData.plan);
        setTab('pass');
      } else {
        setTab('signup');
      }
    } else {
      if (currentUser) {
        setTab(currentUser.hasActiveBooking ? 'pass' : 'profile');
      } else {
        setTab('login');
      }
    }
    setErrorMessage('');
  }, [initialData, isOpen, currentUser]);

  // Handle Unified Login
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginIdentifier || !loginPassword) {
      setErrorMessage(isGu ? 'મોબાઇલ / ઇમેઇલ / આઈડી અને પાસવર્ડ દાખલ કરો' : 'Enter mobile / email / ID and password');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const result = await login(loginIdentifier, loginPassword);
      
      // If determined as Admin: directly open Admin Software
      if (result.role === 'admin') {
        onClose();
        if (onAdminSuccess) {
          onAdminSuccess();
        }
      } else {
        // If logged in student: check if they have booked a seat
        if (result.user?.hasActiveBooking) {
          setTab('pass');
        } else {
          setTab('profile');
        }
      }
    } catch (err) {
      setErrorMessage(err.message || (isGu ? 'ખોટો લોગિન આઈડી અથવા પાસવર્ડ.' : 'Invalid login credentials. Please check your ID/Phone and password.'));
    } finally {
      setLoading(false);
    }
  };

  // Handle Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!signUpData.name || !signUpData.phone) {
      setErrorMessage(isGu ? 'કૃપા કરીને પૂરું નામ અને ફોન નંબર લખો.' : 'Please enter your Name and Phone number.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    const seatToAssign = initialData ? `Cubicle #${Math.floor(Math.random() * 32) + 1}` : null;
    const planToAssign = initialData ? initialData.plan : null;

    try {
      await signup({
        name: signUpData.name,
        phone: signUpData.phone,
        email: signUpData.email,
        password: signUpData.password || 'shreeji123',
        seatNumber: seatToAssign,
        plan: planToAssign,
        role: 'student'
      });

      // If came from booking form -> show pass; if plain sign up -> show profile welcome
      if (initialData) {
        setTab('pass');
      } else {
        setTab('profile');
      }
    } catch (err) {
      setErrorMessage(err.message || 'Error creating account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoToBooking = () => {
    onClose();
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[160] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none overflow-y-auto">
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 20 }}
        transition={{ duration: 0.25 }}
        className="bg-[#201E1F] text-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-white/15 my-auto relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 bg-white/10 hover:bg-[#EB6A30] text-white p-2.5 rounded-full transition-colors border border-white/10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Banner */}
        <div className="bg-gradient-to-r from-[#983132] via-[#7a2627] to-[#201E1F] p-6 text-white border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#EB6A30]">
              <UserCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-[#EB6A30] text-white px-2.5 py-0.5 rounded-full">
                  SHREEJI PORTAL
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                {tab === 'pass' 
                  ? (isGu ? 'તમારું સીટ એલોકેશન પાસ' : 'Final Seat Confirmed Pass') 
                  : tab === 'profile'
                  ? (isGu ? 'વિદ્યાર્થી એકાઉન્ટ પ્રોફાઇલ' : 'Student Account Dashboard')
                  : tab === 'login'
                  ? (isGu ? 'એકાઉન્ટ લોગિન' : 'Account Login')
                  : (isGu ? 'વિદ્યાર્થી સાઇન અપ' : 'Student Sign Up')}
              </h3>
            </div>
          </div>
        </div>

        {/* Tab Switcher (Only shown on Login / Signup tabs) */}
        {(tab === 'login' || tab === 'signup') && (
          <div className="flex border-b border-white/10 bg-black/40 p-1.5 gap-1 text-xs font-bold">
            <button
              onClick={() => { setTab('login'); setErrorMessage(''); }}
              className={`flex-1 py-2.5 rounded-2xl transition-all flex items-center justify-center gap-1.5 ${
                tab === 'login' 
                  ? 'bg-[#983132] text-white shadow-md' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>{isGu ? '૧. લોગિન' : '1. Login'}</span>
            </button>

            <button
              onClick={() => { setTab('signup'); setErrorMessage(''); }}
              className={`flex-1 py-2.5 rounded-2xl transition-all flex items-center justify-center gap-1.5 ${
                tab === 'signup' 
                  ? 'bg-[#EB6A30] text-white shadow-md' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isGu ? '૨. સાઇન અપ' : '2. Sign Up'}</span>
            </button>
          </div>
        )}

        {/* BODY CONTAINER */}
        <div className="p-6 sm:p-8">
          
          {errorMessage && (
            <div className="mb-4 p-3.5 rounded-xl bg-red-900/60 border border-red-500 text-red-200 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* VIEW 1: LOGIN (TAB 1) */}
          {tab === 'login' && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                  {isGu ? 'મોબાઇલ નંબર / ઇમેઇલ / આઈડી *' : 'Mobile Number / Email / ID *'}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={loginIdentifier}
                    onChange={(e) => setLoginIdentifier(e.target.value)}
                    placeholder="Enter Phone, Email, or Admin ID"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/15 text-sm font-medium text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#983132]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                  {isGu ? 'પાસવર્ડ અથવા પિન *' : 'Password or PIN *'}
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Enter Password or PIN"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/15 text-sm font-medium text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#983132]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-[#983132] hover:bg-[#7f2728] text-white font-extrabold text-sm transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                    <>
                      <LogIn className="w-4 h-4" />
                      <span>{isGu ? 'લોગિન કરો' : 'Login to Account'}</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-white/40 pt-1">
                {isGu ? 'નવું એકાઉન્ટ બનાવવા માટે ઉપર "૨. સાઇન અપ" પર ક્લિક કરો.' : 'Need an account? Click "2. Sign Up" above.'}
              </p>
            </form>
          )}

          {/* VIEW 2: SIGN UP (TAB 2) */}
          {tab === 'signup' && (
            <form onSubmit={handleSignUp} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                  {isGu ? 'પૂરું નામ *' : 'Full Name *'}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={signUpData.name}
                    onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
                    placeholder="Enter your full name"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/15 text-sm font-medium text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#EB6A30]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                    {isGu ? 'મોબાઇલ નંબર *' : 'Mobile Number *'}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={signUpData.phone}
                      onChange={(e) => setSignUpData({ ...signUpData, phone: e.target.value })}
                      placeholder="10-digit number"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/15 text-sm font-medium text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#EB6A30]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                    {isGu ? 'ઇમેઇલ એડ્રેસ' : 'Email Address (Optional)'}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={signUpData.email}
                      onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/15 text-sm font-medium text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#EB6A30]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                  {isGu ? 'પાસવર્ડ બનાવો *' : 'Password *'}
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={signUpData.password}
                    onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                    placeholder="Create a secure password"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/15 text-sm font-medium text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#EB6A30]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-[#EB6A30] hover:bg-[#d5571e] text-white font-extrabold text-sm transition-all shadow-lg flex items-center justify-center gap-2 group disabled:opacity-60"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>{isGu ? 'સાઇન અપ કરો' : 'Create Account'}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* VIEW 3: PROFILE / ADMIN DASHBOARD */}
          {tab === 'profile' && currentUser && (
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-[#983132] text-white flex items-center justify-center mx-auto text-xl font-bold">
                  {currentUser.role === 'admin' ? <Shield className="w-8 h-8 text-[#EB6A30]" /> : (currentUser.displayName?.charAt(0) || 'S')}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{currentUser.displayName || (currentUser.role === 'admin' ? 'Library Administrator' : 'Student')}</h4>
                  <p className="text-xs text-white/60 font-mono mt-0.5">{currentUser.email || currentUser.phone}</p>
                </div>

                {currentUser.role === 'admin' ? (
                  <div className="p-4 rounded-2xl bg-[#983132]/40 border border-[#EB6A30]/40 text-[#FFF0E8] text-xs space-y-1">
                    <p className="font-bold flex items-center justify-center gap-1.5 text-[#EB6A30]">
                      <Shield className="w-4 h-4" />
                      <span>{isGu ? 'એડમિનિસ્ટ્રેટર એકાઉન્ટ સક્રિય છે' : 'Chief Administrator Privileges Active'}</span>
                    </p>
                    <p className="text-[11px] text-white/70">
                      {isGu ? 'મેમ્બરશિપ પ્લાન, લાભો અને સીટ રિઝર્વેશન મેનેજ કરવા માટે નીચે ક્લિક કરો.' : 'Access full staff software to manage seat bookings, custom plan benefits, and pricing.'}
                    </p>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-amber-900/40 border border-amber-500/40 text-amber-200 text-xs space-y-1">
                    <p className="font-bold flex items-center justify-center gap-1.5">
                      <Armchair className="w-4 h-4 text-amber-400" />
                      <span>{isGu ? 'હજુ સુધી કોઈ સીટ બુક કરેલ નથી' : 'No Study Seat Booked Yet'}</span>
                    </p>
                    <p className="text-[11px] text-amber-200/80">
                      {isGu ? 'તમારો અભ્યાસ શરૂ કરવા માટે નીચે ક્લિક કરીને મનપસંદ સીટ અને પ્લાન પસંદ કરો.' : 'Select a membership plan on the homepage to get your reserved cubicle desk.'}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                {currentUser.role === 'admin' ? (
                  <button
                    onClick={() => {
                      onClose();
                      if (onAdminSuccess) onAdminSuccess();
                    }}
                    className="w-full sm:flex-1 py-4 rounded-full bg-[#983132] hover:bg-[#7f2728] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg border border-[#EB6A30]/40"
                  >
                    <Shield className="w-4 h-4 text-[#EB6A30]" />
                    <span>{isGu ? 'એડમિન પોર્ટલ ખોલો →' : 'Open Staff Admin Portal →'}</span>
                  </button>
                ) : (
                  <button
                    onClick={handleGoToBooking}
                    className="w-full sm:flex-1 py-4 rounded-full bg-[#EB6A30] hover:bg-[#d5571e] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Armchair className="w-4 h-4" />
                    <span>{isGu ? 'સીટ બુક કરો (Book Seat) →' : 'Book Your Study Seat Now →'}</span>
                  </button>
                )}

                <button
                  onClick={logout}
                  className="w-full sm:w-auto px-6 py-4 rounded-full bg-red-950/60 hover:bg-red-900/80 text-red-200 font-semibold text-xs border border-red-500/40 flex items-center justify-center gap-1.5"
                >
                  <LogOut className="w-3.5 h-3.5 text-red-400" />
                  <span>{isGu ? 'લોગ આઉટ' : 'Sign Out'}</span>
                </button>
              </div>
            </div>
          )}

          {/* VIEW 4: CONFIRMED FINAL SEAT DIGITAL PASS (ONLY WHEN SEAT IS BOOKED!) */}
          {tab === 'pass' && currentUser?.seatNumber && (
            <div className="space-y-6">
              
              {/* Success Badge */}
              <div className="p-3 bg-emerald-900/60 border border-emerald-500 text-emerald-200 text-xs font-bold rounded-2xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isGu ? 'સીટ સફળતાપૂર્વક કન્ફર્મ થઈ ગઈ છે!' : 'Seat Successfully Confirmed & Desk Allocated!'}</span>
              </div>

              {/* Digital Pass Card */}
              <div className="bg-gradient-to-br from-[#FFF8F5] to-white text-[#201E1F] p-6 rounded-3xl border-2 border-[#EB6A30] shadow-2xl relative overflow-hidden">
                
                {/* Header inside Card */}
                <div className="flex items-center justify-between pb-4 border-b border-[#F5E4E4]">
                  <div>
                    <h4 className="font-extrabold text-lg text-[#983132]">ShreeJi Reading Library</h4>
                    <p className="text-[10px] text-[#EB6A30] font-bold uppercase tracking-wider">OFFICIAL STUDENT STUDY PASS</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold bg-[#983132] text-white px-2.5 py-1 rounded-lg">
                      {currentUser?.studentId || 'SJ-2026-849'}
                    </span>
                  </div>
                </div>

                {/* Main Details Grid */}
                <div className="grid grid-cols-2 gap-4 py-4 border-b border-[#F5E4E4]">
                  <div>
                    <p className="text-[11px] text-gray-500 font-bold uppercase">Student Name</p>
                    <p className="text-base font-extrabold text-[#201E1F]">
                      {currentUser?.displayName || currentUser?.name || signUpData.name || 'Student'}
                    </p>
                    <p className="text-xs text-[#983132] font-semibold mt-0.5">
                      {currentUser?.plan || initialData?.plan || 'Full Day Plan'}
                    </p>
                  </div>

                  <div className="bg-[#FFF0E8] p-3 rounded-2xl border border-[#EB6A30]/30 text-center">
                    <p className="text-[10px] font-bold uppercase text-[#EB6A30]">RESERVED DESK</p>
                    <p className="text-xl font-extrabold text-[#983132]">{currentUser?.seatNumber}</p>
                  </div>
                </div>

                {/* Sub Inclusions */}
                <div className="grid grid-cols-3 gap-2 py-3 text-center text-xs font-medium text-gray-600">
                  <div className="p-2 bg-gray-50 rounded-xl">
                    <Clock className="w-3.5 h-3.5 mx-auto text-[#EB6A30] mb-1" />
                    <p className="text-[10px] font-bold">24/7 Access</p>
                    <p className="text-[9px] text-gray-500">24 Hours Daily</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded-xl">
                    <Wifi className="w-3.5 h-3.5 mx-auto text-[#EB6A30] mb-1" />
                    <p className="text-[10px] font-bold">Wi-Fi Password</p>
                    <p className="text-[9px] text-[#983132] font-mono font-bold">focus2026</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded-xl">
                    <ShieldCheck className="w-3.5 h-3.5 mx-auto text-[#EB6A30] mb-1" />
                    <p className="text-[10px] font-bold">Status</p>
                    <p className="text-[9px] text-emerald-600 font-bold">● Active Pass</p>
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="pt-3 flex items-center justify-between text-[11px] text-gray-500 border-t border-[#F5E4E4]">
                  <span>Valid for 30 days from joining</span>
                  <span className="font-bold text-[#983132]">24°C Mitsubishi AC Included</span>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    alert(isGu ? 'તમારો સીટ પાસ ડાઉનલોડ થઈ ગયો છે!' : 'Your Student Study Pass has been saved to your downloads!');
                  }}
                  className="w-full sm:flex-1 py-3.5 rounded-full bg-[#EB6A30] hover:bg-[#d5571e] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>{isGu ? 'ડિજિટલ પાસ ડાઉનલોડ કરો' : 'Download Digital Pass'}</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-xs border border-white/20 text-center"
                >
                  {isGu ? 'પૂર્ણ કરો' : 'Done'}
                </button>

                <button
                  onClick={() => {
                    logout();
                    onClose();
                  }}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-red-950/60 hover:bg-red-900/80 text-red-200 font-semibold text-xs border border-red-500/40 flex items-center justify-center gap-1.5"
                  title="Sign Out"
                >
                  <LogOut className="w-3.5 h-3.5 text-red-400" />
                  <span>{isGu ? 'લૉગ આઉટ' : 'Sign Out'}</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </motion.div>
    </div>
  );
}
