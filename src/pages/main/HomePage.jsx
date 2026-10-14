// # Business Feed & Filters
import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PostCard } from '../../components/common/PostCard';
import { CreateRfqModal } from '../../components/modals/CreateRfqModal';

export const HomePage = () => {
  const { user, posts, setIsRfqModalOpen } = useApp();
  const [activeFilter, setActiveFilter] = useState('ALL'); // 'ALL' | 'RFQ' | 'HOTEL'
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter((post) => {
    const matchesFilter =
      activeFilter === 'ALL' ||
      (activeFilter === 'RFQ' && post.type === 'RFQ') ||
      (activeFilter === 'HOTEL' && post.type === 'HOTEL_UPDATE');

    const matchesSearch =
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.location && post.location.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-slate-50">
      {/* Banner */}
      <div className="space-y-1">
        <p className="text-[10px] font-semibold tracking-wider text-[#005596] uppercase">
          YOUR NETWORK. YOUR NEXT OPPORTUNITY.
        </p>
        <h1 className="text-2xl font-bold text-slate-800 leading-tight">
          Good connections. <br />
          <span className="text-[#E05638]">Great stays.</span>
        </h1>
        <p className="text-xs text-slate-500 pt-0.5">
          Hello, {user?.name || 'Noha'}. Let's find your next business partner.
        </p>
      </div>

      {/* Quick Cards Grid */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => setIsRfqModalOpen(true)}
          className="p-3.5 bg-white border border-slate-200 rounded-2xl text-left hover:border-slate-300 transition-all shadow-sm flex items-start gap-2.5"
        >
          <div className="w-8 h-8 rounded-xl bg-orange-50 text-[#E05638] flex items-center justify-center shrink-0 text-base">✏️</div>
          <div>
            <h3 className="font-bold text-slate-800 text-xs">Create an RFQ</h3>
            <p className="text-[10px] text-slate-400">Find the right hotel rooms</p>
          </div>
        </button>

        <button className="p-3.5 bg-white border border-slate-200 rounded-2xl text-left hover:border-slate-300 transition-all shadow-sm flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#005596] flex items-center justify-center shrink-0 text-base">👥</div>
          <div>
            <h3 className="font-bold text-slate-800 text-xs">Find partners</h3>
            <p className="text-[10px] text-slate-400">Hotels & travel agencies</p>
          </div>
        </button>
      </div>

      {/* Feed Section Header */}
      <div className="space-y-3 pt-1">
        <div>
          <h2 className="text-base font-bold text-slate-800">Business feed</h2>
          <p className="text-xs text-slate-400">Real conversations start with a clear request.</p>
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search destinations, requests or companies"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 bg-white rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#005596] shadow-sm"
          />
          <span className="absolute left-3 top-2.5 text-slate-400 text-xs">🔍</span>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveFilter('ALL')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeFilter === 'ALL'
                ? 'bg-[#003865] text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            All posts
          </button>
          <button
            onClick={() => setActiveFilter('RFQ')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeFilter === 'RFQ'
                ? 'bg-[#003865] text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            RFQs
          </button>
          <button
            onClick={() => setActiveFilter('HOTEL')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeFilter === 'HOTEL'
                ? 'bg-[#003865] text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            Hotel updates
          </button>
        </div>
      </div>

      {/* Feed List */}
      <div className="space-y-3 pb-4">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <CreateRfqModal />
    </div>
  );
};