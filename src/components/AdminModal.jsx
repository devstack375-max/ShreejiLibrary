import React, { useState, useEffect } from 'react';
import { X, Lock, RefreshCw, CheckCircle, Clock, Search, Download, UserCheck } from 'lucide-react';

export default function AdminModal({ isOpen, onClose }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (pin === '1234' || pin === 'shreeji2026') {
      setIsAuthenticated(true);
      setPinError('');
      fetchBookings();
    } else {
      setPinError('Invalid PIN code. Try 1234');
    }
  };

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/bookings');
      const data = await res.json();
      if (data.success) {
        setBookings(data.data);
      }
    } catch (e) {
      // Fallback demo bookings
      setBookings([
        {
          id: 'BK-101',
          name: 'Rohan Sharma',
          phone: '9876543210',
          email: 'rohan.s@gmail.com',
          plan: 'Full Day (12 Hrs)',
          startDate: '2026-08-15',
          message: 'Reserved desk for GPSC prep',
          status: 'Confirmed',
          createdAt: new Date().toISOString()
        },
        {
          id: 'BK-102',
          name: 'Priya Patel',
          phone: '9123456789',
          email: 'priya.p@yahoo.com',
          plan: 'Half Day — Morning',
          startDate: '2026-08-12',
          message: 'Silent zone desk needed',
          status: 'Pending',
          createdAt: new Date().toISOString()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await fetch(`/api/bookings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
    } catch (e) {}

    setBookings(prev =>
      prev.map(b => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  if (!isOpen) return null;

  const filteredBookings = filter === 'All' 
    ? bookings 
    : bookings.filter(b => b.status === filter);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-[#F5E4E4] flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#201E1F] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#983132] text-white flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">ShreeJi Staff Admin Portal</h3>
              <p className="text-xs text-[#F5E4E4]/70">Manage seat reservations & student inquiries</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white bg-white/10 p-2 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {!isAuthenticated ? (
          <div className="p-12 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#FFF0E8] text-[#EB6A30] flex items-center justify-center">
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#201E1F]">Staff Authorization</h4>
              <p className="text-sm text-[#201E1F]/60 mt-1">Enter your admin PIN to access booking records.</p>
            </div>

            <form onSubmit={handleLogin} className="w-full max-w-xs space-y-4">
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter Staff PIN (1234)"
                className="w-full px-4 py-3 rounded-2xl border border-[#F5E4E4] text-center font-bold text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-[#983132]"
                autoFocus
              />
              {pinError && <p className="text-xs font-bold text-red-600">{pinError}</p>}
              
              <button
                type="submit"
                className="w-full bg-[#983132] text-white font-bold py-3 rounded-full text-sm shadow-md hover:bg-[#7f2728]"
              >
                Access Dashboard
              </button>
            </form>
          </div>
        ) : (
          <div className="p-6 flex-1 overflow-y-auto space-y-6">
            
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#F5E4E4]">
              <div className="flex items-center gap-2">
                {['All', 'Pending', 'Confirmed', 'Contacted'].map(status => (
                  <button
                    key={status}
                    onClick={() => setFilter(status)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                      filter === status 
                        ? 'bg-[#983132] text-white' 
                        : 'bg-[#FFF8F5] text-[#201E1F]/70 border border-[#F5E4E4]'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>

              <button
                onClick={fetchBookings}
                className="text-xs font-bold text-[#983132] bg-[#F5E4E4] px-3 py-2 rounded-full flex items-center gap-1.5 hover:bg-[#983132] hover:text-white transition-colors"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>

            {/* Bookings Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#201E1F]">
                <thead className="bg-[#FFF8F5] uppercase text-[#983132] font-bold border-b border-[#F5E4E4]">
                  <tr>
                    <th className="p-3">Applicant</th>
                    <th className="p-3">Contact</th>
                    <th className="p-3">Plan / Shift</th>
                    <th className="p-3">Start Date</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F5E4E4]">
                  {filteredBookings.map((b) => (
                    <tr key={b.id} className="hover:bg-[#FFF8F5]/50">
                      <td className="p-3 font-bold">{b.name}</td>
                      <td className="p-3">
                        <div>{b.phone}</div>
                        <div className="text-[10px] text-gray-500">{b.email}</div>
                      </td>
                      <td className="p-3 font-semibold text-[#EB6A30]">{b.plan}</td>
                      <td className="p-3">{b.startDate}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                          b.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                          b.status === 'Contacted' ? 'bg-blue-100 text-blue-800' :
                          'bg-amber-100 text-amber-800'
                        }`}>
                          {b.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <select
                          value={b.status}
                          onChange={(e) => handleStatusChange(b.id, e.target.value)}
                          className="bg-white border border-[#F5E4E4] rounded-lg p-1 text-[11px] font-semibold text-[#201E1F]"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Confirmed">Confirmed</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredBookings.length === 0 && (
                <div className="py-12 text-center text-gray-400 text-xs font-semibold">
                  No booking inquiries match filter "{filter}".
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
