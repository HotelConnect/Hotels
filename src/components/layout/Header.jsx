import React from 'react';
import { useApp } from '../../context/AppContext';

export const Header = () => {
  const { user } = useApp();
  const initial = user?.name ? user.name.charAt(0).toUpperCase() : 'N';

  return (
    <header className="px-6 py-4 bg-white border-b border-slate-100 md:hidden flex justify-between items-center shrink-0">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[#005596] flex items-center justify-center text-white">
          💼
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