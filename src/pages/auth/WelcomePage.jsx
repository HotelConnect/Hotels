import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const WelcomePage = () => {
  const navigate = useNavigate();
  const { demoLoginAs } = useApp();

  const handleDemoLogin = (roleType) => {
    demoLoginAs(roleType);
    navigate('/app/home');
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row bg-white overflow-y-auto">
      {/* Left Column (Desktop Split View matching your exact design) */}
      <div className="md:w-1/2 bg-gradient-to-b from-[#003865] to-[#005596] p-8 text-white flex flex-col justify-between relative overflow-hidden">
        <div className="flex items-center gap-2 mb-6 pt-2">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
            💼
          </div>
          <span className="font-bold text-lg tracking-tight">hotelconnect</span>
        </div>

        <div className="space-y-4 my-auto py-12">
          <p className="text-[10px] tracking-widest uppercase text-sky-200 font-semibold">
            YOUR NEXT BUSINESS PARTNER
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Better stays. <br />
            <span className="text-[#E05638]">Stronger connections.</span>
          </h1>
          <p className="text-xs text-sky-100 max-w-sm leading-relaxed">
            Where travel agencies and hotel teams turn conversations into opportunities.
          </p>
        </div>

        <div className="text-xs text-sky-200/80">
          © Hotel Connect B2B Platform
        </div>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2 p-8 flex flex-col justify-between space-y-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-800">A world of possibilities</h2>
            <p className="text-xs text-slate-400 mt-1">Find the right rooms. Meet the right people.</p>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center text-xs py-2">
            <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-lg">💼</span>
              <span className="text-[11px] font-medium text-slate-600">Discover RFQs</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-lg">✉️</span>
              <span className="text-[11px] font-medium text-slate-600">Discuss offers</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-lg">👥</span>
              <span className="text-[11px] font-medium text-slate-600">Build partnerships</span>
            </div>
          </div>

          <button
            onClick={() => navigate('/onboarding/role')}
            className="w-full py-3.5 bg-[#005596] hover:bg-[#004478] text-white font-semibold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
          >
            <span>Get started</span>
            <span>›</span>
          </button>
          
          <p className="text-xs text-center text-slate-500">
            Already have an account?{' '}
            <button onClick={() => navigate('/onboarding/signup')} className="text-[#005596] font-bold hover:underline">
              Log in
            </button>
          </p>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-4 text-[10px] uppercase font-semibold text-slate-400 tracking-wider">OR EXPLORE THE DEMO</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          {/* Quick Demo Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div
              onClick={() => handleDemoLogin('retailer')}
              className="p-4 rounded-2xl border border-slate-200 hover:border-[#005596] cursor-pointer transition-all bg-white shadow-sm space-y-1.5"
            >
              <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#005596] flex items-center justify-center text-sm">💼</div>
              <h4 className="font-bold text-slate-800 text-xs">Travel agent</h4>
              <p className="text-[10px] text-slate-400">Amina · Atlas Travel</p>
              <span className="text-[11px] font-bold text-[#005596] block pt-1">Explore demo ›</span>
            </div>

            <div
              onClick={() => handleDemoLogin('hotel')}
              className="p-4 rounded-2xl border border-slate-200 hover:border-[#005596] cursor-pointer transition-all bg-white shadow-sm space-y-1.5"
            >
              <div className="w-8 h-8 rounded-xl bg-orange-50 text-[#E05638] flex items-center justify-center text-sm">🏠</div>
              <h4 className="font-bold text-slate-800 text-xs">Hotel manager</h4>
              <p className="text-[10px] text-slate-400">Marcus · North & Palm</p>
              <span className="text-[11px] font-bold text-[#005596] block pt-1">Explore demo ›</span>
            </div>
          </div>
        </div>

        <p className="text-[10px] text-center text-slate-400 uppercase font-semibold">
          DEMO WORKSPACE — Simulated sign-in and browser-local data. No real account security, bookings, or messages.
        </p>
      </div>
    </div>
  );
};