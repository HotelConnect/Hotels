import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const PostCard = ({ post }) => {
  const { toggleLike, startOrCreateConversation } = useApp();
  const navigate = useNavigate();

  const handleMessageClick = () => {
    startOrCreateConversation(post.author, post.company, post.avatar, `${post.location || 'Hospitality'} · ${post.type === 'RFQ' ? 'Accommodation RFQ' : 'Hotel update'}`);
    navigate('/app/chat/thread');
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
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

      {post.type === 'RFQ' ? (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50 text-[#005596] font-semibold text-[11px] tracking-wide">
          <span>ACCOMMODATION RFQ</span>
          <span>💼</span>
        </div>
      ) : (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-50 text-[#E05638] font-semibold text-[11px] tracking-wide">
          <span>HOTEL UPDATE</span>
          <span>🏢</span>
        </div>
      )}

      <p className="text-xs text-slate-600 leading-relaxed">{post.content}</p>

      {post.type === 'RFQ' && (
        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600">
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

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
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