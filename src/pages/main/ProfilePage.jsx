// # User Profile & Settings

import React from 'react';
import { useApp } from '../../context/AppContext';
import { EditProfileModal } from '../../components/modals/EditProfileModal';

export const ProfilePage = () => {
  const { user, logout, setIsEditProfileModalOpen } = useApp();

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 space-y-4 pb-6">
      {/* Top Banner Hero */}
      <div className="bg-[#005596] text-white p-5 pt-6 pb-12 relative">
        <p className="text-[9px] font-bold tracking-widest text-sky-200 uppercase text-center">
          GREAT JOURNEYS START WITH GOOD CONNECTIONS
        </p>

        {/* Floating Avatar */}
        <div className="absolute -bottom-6 left-6 w-16 h-16 rounded-full bg-white border-2 border-white shadow-md text-[#005596] font-bold text-xl flex items-center justify-center">
          {user?.name?.charAt(0) || 'N'}
        </div>
      </div>

      {/* User Basic Info */}
      <div className="px-6 pt-2 space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-[#005596] font-semibold text-[10px]">
              {user?.role || 'Retailer / Travel Agent'}
            </span>
            <h1 className="text-xl font-bold text-slate-800 mt-1">{user?.name}</h1>
            <p className="text-xs text-slate-500">{user?.title}</p>
            <p className="text-xs font-semibold text-[#005596]">{user?.company}</p>
            <p className="text-xs text-slate-400">📍 {user?.location || 'Not added yet'}</p>
          </div>
        </div>

        <button
          onClick={() => setIsEditProfileModalOpen(true)}
          className="w-full py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-[#005596] hover:bg-slate-50 transition-all shadow-sm"
        >
          ✏️ Edit profile
        </button>
      </div>

      {/* Agency / Company Info Box */}
      <div className="mx-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
        <h3 className="font-bold text-slate-800 text-sm">About the agency</h3>
        <p className="text-xs text-slate-400">Tell potential partners about your business.</p>
        <div className="pt-2">
          <span className="text-[10px] font-semibold uppercase text-slate-400 tracking-wider">COMPANY INFORMATION</span>
          <p className="text-xs text-slate-600 mt-1">Add your organization details in Profile.</p>
        </div>
      </div>

      {/* Deal History */}
      <div className="mx-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <h3 className="font-bold text-slate-800 text-sm">Past deal history</h3>
        <p className="text-xs text-slate-400">Illustrative sample history—not real transactions.</p>
        
        <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3">
          <span className="text-2xl font-bold text-[#005596]">0</span>
          <div>
            <span className="text-xs font-bold text-slate-700 block">sample historical deals</span>
            <span className="text-[10px] text-slate-400">New conversations do not change this count.</span>
          </div>
        </div>

        <p className="text-xs text-slate-500">No completed deal history is available.</p>
      </div>

      {/* Contact Info Settings */}
      <div className="mx-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <h3 className="font-bold text-slate-800 text-sm">Contact information</h3>
        <div className="text-xs text-slate-600 space-y-1">
          <p>{user?.email}</p>
          <p className="text-slate-400">Phone number not shared</p>
        </div>

        <div className="pt-2 border-t border-slate-100 flex items-start gap-2">
          <input type="checkbox" className="mt-0.5 accent-[#005596]" />
          <div>
            <span className="text-xs font-bold text-slate-700 block">Share contact details on your profile</span>
            <span className="text-[10px] text-slate-400">A local demo preference; no server privacy enforcement.</span>
          </div>
        </div>

        <p className="text-[10px] text-slate-400 pt-1">
          Account type: {user?.role}. Role changes are not supported in this prototype.
        </p>
      </div>

      {/* Log Out Button */}
      <div className="px-4 pt-2">
        <button
          onClick={logout}
          className="w-full py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold text-[#005596] hover:bg-slate-50 shadow-sm"
        >
          Log out
        </button>
      </div>

      <p className="text-[10px] text-center text-slate-400 uppercase font-semibold px-6 pt-2">
        DEMO WORKSPACE — Fictional profiles and business requests. Changes stay in this browser.
      </p>

      <EditProfileModal />
    </div>
  );
};