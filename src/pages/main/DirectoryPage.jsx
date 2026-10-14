//# "Find a partner" professional directory
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const DirectoryPage = () => {
  const navigate = useNavigate();
  const { profiles, setSelectedProfileId } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('ALL');

  const filtered = profiles.filter(p => {
    const matchesFilter =
      filterType === 'ALL' ||
      (filterType === 'HOTEL' && p.roleType === 'hotel') ||
      (filterType === 'RETAIL' && p.roleType === 'retailer');
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-slate-50">
      <div className="flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="text-xs font-semibold text-[#005596] flex items-center gap-1">
          ‹ Back
        </button>
        <span className="text-[10px] tracking-widest text-slate-400 font-semibold uppercase">FIND PARTNERS</span>
      </div>

      <div>
        <p className="text-[10px] font-semibold tracking-wider text-[#005596] uppercase">PROFESSIONAL DIRECTORY</p>
        <h1 className="text-2xl font-bold text-slate-800">Find your next partner.</h1>
        <p className="text-xs text-slate-400 mt-0.5">Hotels, travel agencies, and the people behind them.</p>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search people, hotels or agencies"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-xs focus:outline-none shadow-sm"
        />
        <span className="absolute left-3.5 top-3 text-slate-400 text-xs">🔍</span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setFilterType('ALL')}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${filterType === 'ALL' ? 'bg-[#003865] text-white' : 'bg-white border text-slate-600'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilterType('HOTEL')}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${filterType === 'HOTEL' ? 'bg-[#003865] text-white' : 'bg-white border text-slate-600'}`}
        >
          Hotels
        </button>
        <button
          onClick={() => setFilterType('RETAIL')}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${filterType === 'RETAIL' ? 'bg-[#003865] text-white' : 'bg-white border text-slate-600'}`}
        >
          Travel agencies
        </button>
      </div>

      <div className="space-y-3 pb-8">
        {filtered.map((prof) => (
          <div
            key={prof.id}
            onClick={() => {
              setSelectedProfileId(prof.id);
              navigate(`/app/directory/${prof.id}`);
            }}
            className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between cursor-pointer hover:border-slate-300 transition-all"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-sky-100 text-[#005596] font-bold flex items-center justify-center shrink-0">
                {prof.avatar}
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm">{prof.name}</h3>
                <p className="text-xs text-slate-500">{prof.title} · {prof.company}</p>
                <p className="text-[11px] text-slate-400">📍 {prof.location}</p>
              </div>
            </div>
            <span className="text-slate-400 font-bold">›</span>
          </div>
        ))}
      </div>
    </div>
  );
};