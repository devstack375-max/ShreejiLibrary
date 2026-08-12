import React, { useState } from 'react';
import { Lamp, Zap, Lock, Info, CheckCircle2, User, Eye } from 'lucide-react';

export default function SeatMapVisualizer({ onSelectSeat }) {
  const [selectedSeat, setSelectedSeat] = useState(null);

  // Generate 24 simulated library seats
  const seats = Array.from({ length: 24 }, (_, i) => {
    const seatNo = `Desk-${String(i + 1).padStart(2, '0')}`;
    const isReserved = [2, 5, 8, 11, 14, 17, 19, 21].includes(i + 1);
    const isWindow = [1, 2, 3, 4, 13, 14, 15, 16].includes(i + 1);
    const zone = i < 12 ? 'Zone A (Silent Core)' : 'Zone B (AC Bay)';
    return {
      id: seatNo,
      number: i + 1,
      zone,
      status: isReserved ? 'Reserved' : 'Available',
      type: isWindow ? 'Window View Fixed' : 'Standard Acoustic Cubicle',
      features: ['Dimmable Lamp', 'Power Socket + USB', 'Lumbar Mesh Chair', isWindow ? 'Natural Light' : 'Extra Quiet']
    };
  });

  return (
    <section id="seatmap" className="py-24 bg-[#FFF8F5] text-[#201E1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#983132]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#983132]">04 — LIVE SEAT MAP</span>
            <div className="h-[1px] w-8 bg-[#983132]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#201E1F] max-w-3xl leading-tight">
            Interactive floor plan & desk preview.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#201E1F]/70 max-w-2xl">
            Click any desk below to preview its features and reserve your fixed spot today.
          </p>
        </div>

        {/* Floor Map Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Visual Grid Floor Plan */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-[#F5E4E4] shadow-md">
            
            {/* Map Legend */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#FFF8F5]">
              <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-md bg-[#FFF0E8] border-2 border-[#EB6A30]" />
                  <span>Available ({seats.filter(s => s.status === 'Available').length})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-md bg-gray-200 border-2 border-gray-400" />
                  <span>Reserved ({seats.filter(s => s.status === 'Reserved').length})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-md bg-[#983132]" />
                  <span>Selected</span>
                </div>
              </div>
              <span className="text-xs text-[#983132] font-semibold bg-[#F5E4E4] px-3 py-1 rounded-full">
                24°C Silent Zone
              </span>
            </div>

            {/* Desk Grid */}
            <div className="space-y-6">
              
              <div>
                <h4 className="text-xs font-bold text-[#983132] uppercase tracking-widest mb-3">ZONE A — SILENT CUBICLES (DESKS 01 - 12)</h4>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {seats.slice(0, 12).map((seat) => {
                    const isSelected = selectedSeat?.id === seat.id;
                    const isAvailable = seat.status === 'Available';

                    return (
                      <button
                        key={seat.id}
                        onClick={() => setSelectedSeat(seat)}
                        disabled={!isAvailable}
                        className={`p-3 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-1.5 relative ${
                          isSelected
                            ? 'bg-[#983132] text-white border-[#983132] shadow-lg scale-105'
                            : isAvailable
                            ? 'bg-[#FFF0E8] text-[#201E1F] border-[#EB6A30]/40 hover:border-[#EB6A30] hover:bg-[#EB6A30]/10'
                            : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-60'
                        }`}
                      >
                        <span className="text-[11px] font-bold tracking-wider">{seat.id}</span>
                        <div className="flex items-center gap-1">
                          <Lamp className="w-3 h-3" />
                          <Zap className="w-3 h-3" />
                        </div>
                        <span className="text-[9px] uppercase font-semibold">
                          {seat.status === 'Reserved' ? 'Taken' : 'Open'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#983132] uppercase tracking-widest mb-3">ZONE B — AC LOUNGE BAY (DESKS 13 - 24)</h4>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {seats.slice(12, 24).map((seat) => {
                    const isSelected = selectedSeat?.id === seat.id;
                    const isAvailable = seat.status === 'Available';

                    return (
                      <button
                        key={seat.id}
                        onClick={() => setSelectedSeat(seat)}
                        disabled={!isAvailable}
                        className={`p-3 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-1.5 relative ${
                          isSelected
                            ? 'bg-[#983132] text-white border-[#983132] shadow-lg scale-105'
                            : isAvailable
                            ? 'bg-[#FFF0E8] text-[#201E1F] border-[#EB6A30]/40 hover:border-[#EB6A30] hover:bg-[#EB6A30]/10'
                            : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-60'
                        }`}
                      >
                        <span className="text-[11px] font-bold tracking-wider">{seat.id}</span>
                        <div className="flex items-center gap-1">
                          <Lamp className="w-3 h-3" />
                          <Zap className="w-3 h-3" />
                        </div>
                        <span className="text-[9px] uppercase font-semibold">
                          {seat.status === 'Reserved' ? 'Taken' : 'Open'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

          {/* Seat Details Sidebar Panel */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-3xl border border-[#F5E4E4] shadow-md flex flex-col justify-between min-h-[380px]">
            {selectedSeat ? (
              <div className="space-y-6">
                <div>
                  <div className="inline-block bg-[#F5E4E4] text-[#983132] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                    {selectedSeat.zone}
                  </div>
                  <h3 className="text-3xl font-extrabold text-[#201E1F]">{selectedSeat.id}</h3>
                  <p className="text-sm font-medium text-[#EB6A30] mt-1">{selectedSeat.type}</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#FFF8F5]">
                  <h5 className="text-xs font-bold text-[#201E1F]/60 uppercase tracking-wider">INCLUDED DESK AMENITIES</h5>
                  {selectedSeat.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[#201E1F]">
                      <CheckCircle2 className="w-4 h-4 text-[#983132]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onSelectSeat(selectedSeat)}
                  className="w-full mt-6 bg-[#983132] hover:bg-[#7f2728] text-white font-bold py-3.5 rounded-full shadow-lg transition-all text-sm"
                >
                  Hold {selectedSeat.id} Seat
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center h-full py-12 text-[#201E1F]/60 space-y-3">
                <Info className="w-10 h-10 text-[#EB6A30]" />
                <h4 className="font-bold text-[#201E1F] text-base">Select a Desk to View Details</h4>
                <p className="text-xs max-w-xs">
                  Click any orange desk box on the floor plan map to check features and hold the desk.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
