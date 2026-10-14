//Mobile-first viewport frame wrapper
import React from 'react';

export const MobileContainer = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-0 md:p-6 font-sans">
      <div className="w-full max-w-md bg-white min-h-screen md:min-h-[840px] md:max-h-[900px] md:rounded-[36px] shadow-2xl flex flex-col overflow-hidden relative border border-slate-200">
        {children}
      </div>
    </div>
  );
};