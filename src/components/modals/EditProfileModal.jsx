//# Modal dialog to edit user profile
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
    <div className="absolute inset-0 bg-black/50 z-50 flex items-end justify-center">
      <div className="bg-white w-full rounded-t-3xl p-5 space-y-4">
        <div className="flex justify-between items-center border-b border-slate-100 pb-2">
          <h2 className="font-bold text-slate-800 text-base">Edit Profile</h2>
          <button onClick={() => setIsEditProfileModalOpen(false)} className="text-slate-400 text-lg">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div>
            <label className="block font-semibold text-slate-600 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-600 mb-1">Company / Agency Name</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-600 mb-1">Location</label>
            <input
              type="text"
              placeholder="e.g. Cairo, Egypt"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#005596] text-white font-bold rounded-xl text-xs shadow-md mt-2"
          >
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};