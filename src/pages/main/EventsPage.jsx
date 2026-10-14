import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const EventsPage = () => {
  const navigate = useNavigate();
  const { events } = useApp();

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-slate-50">
      <div>
        <p className="text-[10px] font-semibold tracking-wider text-[#005596] uppercase">
          HOSPITALITY EVENTS
        </p>
        <h1 className="text-2xl font-bold text-slate-800">Meet beyond the screen.</h1>
        <p className="text-xs text-slate-400 mt-0.5">Industry conversations. Lasting partnerships.</p>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search events, cities or organizers"
          className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-xs focus:outline-none shadow-sm"
        />
        <span className="absolute left-3.5 top-3 text-slate-400 text-xs">🔍</span>
      </div>

      <div className="flex gap-2">
        <span className="px-4 py-2 rounded-full text-xs font-semibold bg-[#003865] text-white">Upcoming</span>
        <span className="px-4 py-2 rounded-full text-xs font-semibold bg-white border text-slate-600">Past</span>
      </div>

      {/* Desktop 2-Column Responsive Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-8">
        {events.map((evt) => (
          <div key={evt.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm space-y-3 pb-4">
            <div className="bg-slate-700 h-36 relative p-4 flex flex-col justify-between text-white">
              <span className="self-start px-3 py-1 rounded-full bg-white/90 text-slate-800 font-bold text-[10px]">
                {evt.badge}
              </span>
              <button
                onClick={() => navigate(`/app/events/${evt.id}`)}
                className="self-end w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center font-bold"
              >
                ›
              </button>
            </div>

            <div className="px-4 flex gap-3.5 items-start">
              <div className="bg-orange-100 text-[#E05638] font-bold text-center px-3 py-2 rounded-xl shrink-0">
                <span className="text-[10px] block uppercase leading-none">{evt.dateBadge.month}</span>
                <span className="text-base font-extrabold leading-none">{evt.dateBadge.day}</span>
              </div>
              <div>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{evt.category}</span>
                <h3 className="font-bold text-slate-800 text-sm leading-snug">{evt.title}</h3>
                <p className="text-xs text-slate-500">📍 {evt.location} · {evt.dateString}</p>
              </div>
            </div>

            <div className="mx-4 p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-1">
                <div className="flex -space-x-1.5">
                  <div className="w-5 h-5 rounded-full bg-sky-200 text-[9px] font-bold text-[#005596] flex items-center justify-center border border-white">ML</div>
                  <div className="w-5 h-5 rounded-full bg-orange-200 text-[9px] font-bold text-[#E05638] flex items-center justify-center border border-white">OH</div>
                </div>
                <span className="text-[11px] font-medium pl-1">{evt.attendees.length} sample professionals to discover</span>
              </div>
              <span>›</span>
            </div>

            <p className="px-4 text-xs text-slate-500 leading-relaxed">{evt.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};