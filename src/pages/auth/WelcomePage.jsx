//# Onboarding landing screen

import React from 'react';
import { useNavigate } from 'react-router-dom';

export const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col justify-between bg-white">
      {/* Banner Top */}
      <div className="bg-gradient-to-b from-[#003865] to-[#005596] p-6 text-white text-center relative overflow-hidden pb-10">
        <div className="flex justify-center items-center gap-2 mb-6 pt-2">
          <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
            💼
          </div>
          <span className="font-bold text-lg tracking-tight">hotelconnect</span>
        </div>

        <p className="text-[10px] tracking-widest uppercase text-sky-200 font-semibold mb-2">
          Your Next Business Partner
        </p>
        <h1 className="text-2xl font-bold leading-tight mb-2">
          Better stays. <br />
          <span className="text-[#E05638]">Stronger connections.</span>
        </h1>
        <p className="text-xs text-sky-100 max-w-xs mx-auto leading-relaxed">
          Where travel agencies and hotel teams turn conversations into opportunities.
        </p>
      </div>

      {/* Features List */}
      <div className="p-6 text-center space-y-6">
        <div>
          <h2 className="text-lg font-bold text-slate-800">A world of possibilities</h2>
          <p className="text-xs text-slate-400 mt-1">Find the right rooms. Meet the right people.</p>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#005596] flex items-center justify-center text-lg">💼</div>
            <span className="text-[11px] font-medium text-slate-600">Discover RFQs</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#005596] flex items-center justify-center text-lg">✉️</div>
            <span className="text-[11px] font-medium text-slate-600">Discuss offers</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#005596] flex items-center justify-center text-lg">👥</div>
            <span className="text-[11px] font-medium text-slate-600">Build partnerships</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3 pt-2">
          <button
            onClick={() => navigate('/onboarding/role')}
            className="w-full py-3.5 bg-[#005596] hover:bg-[#004478] text-white font-semibold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
          >
            <span>Get started</span>
            <span>›</span>
          </button>
          <p className="text-xs text-slate-500">
            Already have an account?{' '}
            <button onClick={() => navigate('/onboarding/signup')} className="text-[#005596] font-bold hover:underline">
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};