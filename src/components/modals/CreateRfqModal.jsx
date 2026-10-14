import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const CreateRfqModal = () => {
  const { isRfqModalOpen, setIsRfqModalOpen, createRfq } = useApp();
  const [location, setLocation] = useState('');
  const [rooms, setRooms] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [description, setDescription] = useState('');

  if (!isRfqModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    createRfq({ location, rooms, checkIn, checkOut, description });
    setIsRfqModalOpen(false);
    setLocation('');
    setRooms('');
    setCheckIn('');
    setCheckOut('');
    setDescription('');
  };

  return (
    <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-3xl p-6 space-y-4 max-h-[90%] overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <h2 className="font-bold text-slate-800 text-base">Create an Accommodation RFQ</h2>
          <button onClick={() => setIsRfqModalOpen(false)} className="text-slate-400 text-lg hover:text-slate-600">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div>
            <label className="block font-semibold text-slate-600 mb-1">Destination / Location</label>
            <input
              type="text"
              required
              placeholder="e.g. Hurghada, Red Sea"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#005596]"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-600 mb-1">Number of rooms required</label>
            <input
              type="number"
              required
              placeholder="e.g. 20"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#005596]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-600 mb-1">Check-in</label>
              <input
                type="text"
                required
                placeholder="4 Nov"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#005596]"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-600 mb-1">Check-out</label>
              <input
                type="text"
                required
                placeholder="8 Nov"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#005596]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-600 mb-1">Requirements & Details</label>
            <textarea
              rows="3"
              required
              placeholder="Describe group requirements, meal plans, meeting space needed..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#005596] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#005596] hover:bg-[#004478] text-white font-bold rounded-xl text-xs shadow-md mt-2 transition-all"
          >
            Publish RFQ to feed
          </button>
        </form>
      </div>
    </div>
  );
};