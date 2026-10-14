import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const MobileContainer = ({ children }) => {
  const { user } = useApp();
  const location = useLocation();
  const isAuthRoute = location.pathname.startsWith('/onboarding') || location.pathname === '/';

  const navItems = [
    {
      to: '/app/home',
      label: 'Home',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      to: '/app/chat',
      label: 'Chat',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      to: '/app/events',
      label: 'Events',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      to: '/app/profile',
      label: 'Profile',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  if (isAuthRoute) {
    return (
      <div className="min-h-screen bg-slate-100 flex justify-center items-center md:p-6 font-sans">
        <div className="w-full max-w-md md:max-w-4xl bg-white min-h-screen md:min-h-[800px] md:rounded-[36px] shadow-2xl flex flex-col overflow-hidden relative border border-slate-200">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center md:p-4 font-sans">
      {/* Desktop Responsive Shell Container matching your exact design */}
      <div className="w-full max-w-md md:max-w-[1280px] bg-white min-h-screen md:min-h-[850px] md:h-[900px] md:rounded-[32px] shadow-2xl flex flex-col md:flex-row overflow-hidden relative border border-slate-200">
        
        {/* Desktop Left Navigation Sidebar (Hidden on mobile) */}
        <div className="hidden md:flex flex-col justify-between w-64 bg-white border-r border-slate-200 p-6 shrink-0 z-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#005596] flex items-center justify-center text-white">
                💼
              </div>
              <span className="font-bold text-xl tracking-tight text-[#005596]">
                hotel<span className="text-[#E05638]">connect</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Business connections for hospitality professionals.
            </p>

            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname.startsWith(item.to);
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all relative ${
                      isActive
                        ? 'bg-sky-50 text-[#005596] after:content-[""] after:absolute after:left-0 after:top-2 after:bottom-2 after:w-1 after:bg-[#E05638] after:rounded-r'
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </nav>
          </div>

          {/* Sidebar Footer User Badge */}
          <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 text-[#005596] font-semibold text-sm flex items-center justify-center">
              {user?.name?.charAt(0) || 'N'}
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-slate-800 text-xs truncate">{user?.name}</h4>
              <p className="text-[10px] text-slate-400 truncate">{user?.company}</p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col h-full overflow-hidden relative">
          {children}
        </div>

        {/* Mobile Bottom Navigation (Hidden on desktop) */}
        <div className="md:hidden flex">
          <div className="absolute bottom-0 left-0 right-0 z-30">
            <nav className="bg-white border-t border-slate-200 py-2 px-4 flex justify-around items-center">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
                      isActive
                        ? 'text-[#005596] font-bold relative after:content-[""] after:absolute after:-top-2 after:w-8 after:h-1 after:bg-[#E05638] after:rounded-full'
                        : 'text-slate-400 font-medium'
                    }`
                  }
                >
                  {item.icon}
                  <span className="text-xs">{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

      </div>
    </div>
  );
};