// # Agenda & Event Attendees Details
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const EventDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events } = useApp();

  const event = events.find(e => e.id === parseInt(id)) || events[0];

  return (
    <div className="flex-1 overflow-y-auto bg-white flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center">
        <button onClick={() => navigate('/app/events')} className="text-xs font-semibold text-[#005596] flex items-center gap-1">
          ‹ Back
        </button>
        <span className="text-[10px] tracking-widest text-slate-400 font-semibold uppercase">EVENT DETAILS</span>
      </div>

      {/* Banner */}
      <div className="bg-[#003865] p-5 text-white space-y-2">
        <span className="px-2.5 py-1 rounded-md bg-[#E05638] text-[10px] font-bold uppercase tracking-wider">
          SAMPLE INDUSTRY EVENT
        </span>
        <h1 className="text-xl font-bold">{event.title}</h1>
        <p className="text-xs text-sky-200">{event.dateString} · {event.location}</p>
      </div>

      {/* Venue & Organizer */}
      <div className="p-4 space-y-3 border-b border-slate-100 text-xs">
        <div className="flex items-start gap-2">
          <span>📍</span>
          <div>
            <span className="text-[10px] font-semibold text-slate-400 uppercase block">VENUE</span>
            <span className="font-medium text-slate-700">{event.venue}</span>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span>💼</span>
          <div>
            <span className="text-[10px] font-semibold text-slate-400 uppercase block">ORGANIZED BY</span>
            <span className="font-medium text-slate-700">{event.organizer}</span>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="p-4 space-y-2 border-b border-slate-100">
        <h3 className="font-bold text-slate-800 text-sm">About the event</h3>
        <p className="text-xs text-slate-600 leading-relaxed">{event.description}</p>
      </div>

      {/* Agenda */}
      <div className="p-4 space-y-3 border-b border-slate-100">
        <h3 className="font-bold text-slate-800 text-sm">Sample agenda</h3>
        <p className="text-[10px] text-slate-400 font-medium">Day one · {event.dateString}</p>
        <div className="space-y-3 pt-1">
          {event.agenda.map((item, idx) => (
            <div key={idx} className="flex gap-3 text-xs">
              <span className="font-bold text-[#005596] shrink-0 w-10">{item.time}</span>
              <div>
                <p className="font-bold text-slate-800">{item.title}</p>
                <p className="text-[11px] text-slate-400">{item.room}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Attendees */}
      <div className="p-4 space-y-3">
        <h3 className="font-bold text-slate-800 text-sm">People & participating companies</h3>
        <p className="text-[10px] text-slate-400">Sample platform profiles—not an organizer attendee list.</p>
        <div className="space-y-2">
          {event.attendees.map((att, idx) => (
            <div key={idx} className="p-2.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-[#005596] font-bold flex items-center justify-center">
                  {att.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{att.name}</h4>
                  <p className="text-[11px] text-slate-400">{att.role}</p>
                </div>
              </div>
              <span className="text-slate-400">›</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};