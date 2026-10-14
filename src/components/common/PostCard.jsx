// # Reusable Card for RFQs and Hotel Updates

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const PostCard = ({ post }) => {
  const { toggleLike, setActiveConversationId } = useApp();
  const navigate = useNavigate();

  const handleMessageClick = () => {
    setActiveConversationId('sara-mansour');
    navigate('/app/chat/thread');
  };

  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
      {/* Post Author Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-200 text-[#005596] font-bold flex items-center justify-center overflow-hidden">
            {post.avatar || post.author.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm leading-snug">{post.author}</h4>
            <p className="text-xs text-slate-400">{post.company} · {post.role}</p>
          </div>
        </div>
        <span className="text-xs text-slate-400">{post.time}</span>
      </div>

      {/* Post Badge */}
      {post.type === 'RFQ' ? (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50 text-[#005596] font-semibold text-[11px] tracking-wide">
          <span>ACCOMMODATION RFQ</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      ) : (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-50 text-[#E05638] font-semibold text-[11px] tracking-wide">
          <span>HOTEL UPDATE</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
      )}

      {/* Body Content */}
      <p className="text-xs text-slate-600 leading-relaxed">{post.content}</p>

      {/* RFQ Meta Box */}
      {post.type === 'RFQ' && (
        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600">
          <div className="flex items-center gap-1.5">
            <span>📍</span> <span>{post.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>🏠</span> <span>{post.rooms}</span>
          </div>
          <div className="flex items-center gap-1.5 col-span-2">
            <span>📅</span> <span>{post.dates}</span>
          </div>
        </div>
      )}

      {post.type === 'HOTEL_UPDATE' && post.location && (
        <div className="text-xs text-slate-500 flex items-center gap-1 pt-1">
          <span>📍</span> <span>{post.location}</span>
        </div>
      )}

      {/* Post Action Footer */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
        <div className="flex items-center gap-4">
          <button onClick={() => toggleLike(post.id)} className={`flex items-center gap-1 transition-colors ${post.userLiked ? 'text-red-500 font-bold' : 'hover:text-slate-700'}`}>
            <span>{post.userLiked ? '❤️' : '🤍'}</span>
            <span>{post.likes}</span>
          </button>
          <div className="flex items-center gap-1">
            <span>💬</span>
            <span>{post.comments}</span>
          </div>
        </div>
        <button onClick={handleMessageClick} className="flex items-center gap-1.5 text-[#005596] hover:underline font-bold">
          <span>✉️</span>
          <span>Message</span>
        </button>
      </div>
    </div>
  );
};