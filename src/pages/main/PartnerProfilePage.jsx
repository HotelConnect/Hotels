//# Professional profile view of other users
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const PartnerProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { profiles, startOrCreateConversation } = useApp();

  const profile = profiles.find(p => p.id === id) || profiles[0];

  const handleMessage = () => {
    startOrCreateConversation(profile.name, profile.company, profile.avatar);
    navigate('/app/chat/thread');
  };

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 pb-12">
      <div className="bg-white border-b border-slate-100 px-6 py-3 flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="text-xs font-semibold text-[#005596] flex items-center gap-1">
          ‹ Back
        </button>
        <span className="text-[10px] tracking-widest text-slate-400 font-semibold uppercase">PROFESSIONAL PROFILE</span>
      </div>

      <div className="bg-[#005596] text-white p-6 pb-14 relative">
        <p className="text-[9px] font-bold tracking-widest text-sky-200 uppercase text-center">
          GREAT JOURNEYS START WITH GOOD CONNECTIONS
        </p>

        <div className="absolute -bottom-8 left-6 w-20 h-20 rounded-full bg-white border-4 border-white shadow-md text-[#005596] font-bold text-xl flex items-center justify-center">
          {profile.avatar}
        </div>
      </div>

      <div className="px-6 pt-10 space-y-4">
        <div className="space-y-1">
          <span className="px-3 py-1 rounded-full bg-sky-100 text-[#005596] font-semibold text-[10px]">
            {profile.role}
          </span>
          <h1 className="text-2xl font-bold text-slate-800 pt-1">{profile.name}</h1>
          <p className="text-xs text-slate-500 font-medium">{profile.title}</p>
          <p className="text-xs font-bold text-[#005596]">{profile.company}</p>
          <p className="text-xs text-slate-400">📍 {profile.location}</p>
        </div>

        <button
          onClick={handleMessage}
          className="w-full py-3 bg-[#005596] hover:bg-[#004478] text-white font-bold rounded-xl text-xs shadow-md flex items-center justify-center gap-2 transition-all"
        >
          <span>✉️ Send message</span>
        </button>
      </div>

      <div className="mx-6 mt-5 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <h3 className="font-bold text-slate-800 text-sm">About the agency</h3>
        <p className="text-xs text-slate-600 leading-relaxed">{profile.about}</p>
        <div className="pt-2 border-t border-slate-100">
          <span className="text-[10px] font-semibold uppercase text-slate-400 tracking-wider">COMPANY INFORMATION</span>
          <p className="text-xs text-slate-700 mt-1">{profile.companyInfo}</p>
        </div>
      </div>

      <div className="mx-6 mt-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <h3 className="font-bold text-slate-800 text-sm">Past deal history</h3>
        <p className="text-xs text-slate-400">Illustrative sample history—not real transactions.</p>
        
        <div className="p-3.5 bg-slate-50 rounded-xl flex items-center gap-3">
          <span className="text-2xl font-bold text-[#005596]">{profile.dealsCount}</span>
          <div>
            <span className="text-xs font-bold text-slate-700 block">sample historical deals</span>
            <span className="text-[10px] text-slate-400">New conversations do not change this count.</span>
          </div>
        </div>

        {profile.deals.length > 0 ? (
          <div className="space-y-2 pt-1">
            {profile.deals.map((deal, idx) => (
              <div key={idx} className="p-3 rounded-xl border border-slate-100 bg-emerald-50/30 flex items-center gap-2 text-xs text-slate-700">
                <span className="text-emerald-600 font-bold">✓</span>
                <div>
                  <p className="font-bold">{deal.title}</p>
                  <p className="text-[10px] text-slate-400">{deal.date}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-500">No completed deal history is available.</p>
        )}
      </div>
    </div>
  );
};