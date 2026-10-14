import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const RoleSelectionPage = () => {
  const navigate = useNavigate();
  const { selectedRole, setSelectedRole } = useApp();

  return (
    <div className="flex-1 flex flex-col justify-between p-8 bg-white max-w-xl mx-auto w-full">
      <div>
        <button onClick={() => navigate(-1)} className="text-xs font-semibold text-[#005596] flex items-center gap-1 mb-6">
          ‹ Back
        </button>

        <div className="flex items-center gap-2 mb-6">
          <div className="w-7 h-7 rounded-lg bg-[#005596] text-white flex items-center justify-center text-xs">💼</div>
          <span className="font-bold text-lg text-[#005596]">hotel<span className="text-[#E05638]">connect</span></span>
        </div>

        <p className="text-[10px] tracking-widest uppercase text-slate-400 font-semibold mb-1">
          LET'S GET ACQUAINTED
        </p>
        <h1 className="text-2xl font-bold text-slate-800 mb-1">How do you connect?</h1>
        <p className="text-xs text-slate-500 mb-6">Choose the professional identity you represent.</p>

        <div className="space-y-3">
          <label
            onClick={() => setSelectedRole('retailer')}
            className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
              selectedRole === 'retailer'
                ? 'border-[#005596] bg-sky-50/50 shadow-sm'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#005596] flex items-center justify-center shrink-0">💼</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-800 text-sm">Retailer / Travel Agent</h3>
                <input type="radio" checked={selectedRole === 'retailer'} onChange={() => {}} className="accent-[#005596]" />
              </div>
              <p className="text-xs text-slate-500 mt-1">Find hotel partners and publish accommodation RFQs.</p>
            </div>
          </label>

          <label
            onClick={() => setSelectedRole('hotel')}
            className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
              selectedRole === 'hotel'
                ? 'border-[#005596] bg-sky-50/50 shadow-sm'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#005596] flex items-center justify-center shrink-0">🏠</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-800 text-sm">Hotel Agent / Manager</h3>
                <input type="radio" checked={selectedRole === 'hotel'} onChange={() => {}} className="accent-[#005596]" />
              </div>
              <p className="text-xs text-slate-500 mt-1">Meet travel partners and respond to room requests.</p>
            </div>
          </label>
        </div>
      </div>

      <button
        onClick={() => navigate('/onboarding/signup')}
        className="w-full py-3.5 bg-[#005596] hover:bg-[#004478] text-white font-semibold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 mt-6"
      >
        <span>Continue</span>
        <span>›</span>
      </button>
    </div>
  );
};