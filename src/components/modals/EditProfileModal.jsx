import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const EditProfileModal = () => {
  const { user, setUser, isEditProfileModalOpen, setIsEditProfileModalOpen } = useApp();
  const [name, setName] = useState(user?.name || '');
  const [company, setCompany] = useState(user?.company || '');
  const [location, setLocation] = useState(user?.location || '');

  if (!isEditProfileModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, name, company, location }));
    setIsEditProfileModalOpen(false);
  };

  return (
    <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-3xl p-6 space-y-4 shadow-2xl">
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <h2 className="font-bold text-slate-800 text-base">Edit Profile</h2>
          <button onClick={() => setIsEditProfileModalOpen(false)} className="text-slate-400 text-lg hover:text-slate-600">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div>
            <label className="block font-semibold text-slate-600 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#005596]"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-600 mb-1">Company / Agency Name</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#005596]"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-600 mb-1">Location</label>
            <input
              type="text"
              placeholder="e.g. Cairo, Egypt"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#005596]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#005596] hover:bg-[#004478] text-white font-bold rounded-xl text-xs shadow-md mt-2 transition-all"
          >
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};