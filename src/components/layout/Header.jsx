//# Top App Header (Logo & Avatar badge)
import React from 'react';
import { useApp } from '../../context/AppContext';

export const Header = () => {
  const { user } = useApp();
  const initial = user?.name ? user.name.charAt(0).toUpperCase() : 'N';

  return (
    <header className="px-5 py-4 bg-white border-b border-slate-100 flex justify-between items-center shrink-0">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[#005596] flex items-center justify-center text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <span className="font-bold text-xl tracking-tight text-[#005596]">
          hotel<span className="text-[#E05638]">connect</span>
        </span>
      </div>
      <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 text-[#005596] font-semibold text-sm flex items-center justify-center shadow-sm">
        {initial}
      </div>
    </header>
  );
};