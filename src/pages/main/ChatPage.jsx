//# Inbox & Active Conversation Thread

import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

// Conversation Thread View
const ChatThread = () => {
  const navigate = useNavigate();
  const { conversations, activeConversationId, sendMessage, updateOpportunityStatus } = useApp();
  const [inputText, setInputText] = useState('');

  const activeConv = conversations.find(c => c.id === (activeConversationId || 'sara-mansour')) || conversations[0];

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendMessage(activeConv.id, inputText);
    setInputText('');
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50 overflow-hidden">
      {/* Thread Sub-Header */}
      <div className="bg-white px-4 py-3 border-b border-slate-200 shrink-0 space-y-3">
        <div className="flex justify-between items-center">
          <button onClick={() => navigate('/app/chat')} className="text-xs font-semibold text-[#005596] flex items-center gap-1">
            ‹ Back
          </button>
          <span className="text-[10px] tracking-widest text-slate-400 font-semibold uppercase">
            PRIVATE DEMO CONVERSATION
          </span>
        </div>

        {/* Contact Info Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sky-100 text-[#005596] font-bold flex items-center justify-center">
              {activeConv.avatar}
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm">{activeConv.contactName}</h3>
              <p className="text-xs text-slate-400">{activeConv.company} · View profile ›</p>
            </div>
          </div>
        </div>

        {/* Status Dropdown */}
        <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-xs">
          <span className="text-slate-500">Your opportunity status</span>
          <select
            value={activeConv.status}
            onChange={(e) => updateOpportunityStatus(activeConv.id, e.target.value)}
            className="bg-orange-100/70 text-[#E05638] font-semibold px-2.5 py-1 rounded-lg text-xs outline-none border-none cursor-pointer"
          >
            <option value="New opportunity">New opportunity</option>
            <option value="Discussion">Discussion</option>
            <option value="Negotiation">Negotiation</option>
            <option value="Deal Agreed">Deal Agreed</option>
          </select>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Related Post Box */}
        {activeConv.relatedPostTitle && (
          <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs space-y-1">
            <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">RELATED BUSINESS POSTS</span>
            <div className="flex justify-between items-center text-[#005596] font-medium pt-0.5">
              <span>💼 {activeConv.relatedPostTitle}</span>
              <span>›</span>
            </div>
          </div>
        )}

        <p className="text-[10px] text-center text-slate-400 uppercase font-semibold">
          LOCAL DEMO CHAT · NOTHING IS SENT EXTERNALLY
        </p>

        {/* Empty State vs Chat Bubbles */}
        {activeConv.messages.length === 0 ? (
          <div className="p-6 border-2 border-dashed border-slate-200 rounded-2xl text-center space-y-2 bg-white/50 my-4">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#005596] mx-auto flex items-center justify-center text-lg">👥</div>
            <h4 className="font-bold text-slate-800 text-sm">Say hello to {activeConv.contactName.split(' ')[0]}</h4>
            <p className="text-xs text-slate-400">Introduce your business and start discussing your requirements.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {activeConv.messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs shadow-sm ${msg.isUser ? 'bg-[#005596] text-white rounded-br-none' : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'}`}>
                  <p>{msg.text}</p>
                  <span className={`text-[9px] block text-right mt-1 ${msg.isUser ? 'text-sky-200' : 'text-slate-400'}`}>
                    {msg.time} ✓
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Input Bar */}
      <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex gap-2 shrink-0">
        <textarea
          rows="1"
          placeholder="Discuss a requirement or offer..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 bg-slate-100 rounded-xl px-3 py-2 text-xs focus:outline-none border border-slate-200 resize-none"
        />
        <button type="submit" className="w-10 h-10 rounded-xl bg-sky-400 text-white font-bold flex items-center justify-center hover:bg-sky-500 shrink-0">
          ›
        </button>
      </form>
    </div>
  );
};

// Inbox View
const InboxList = () => {
  const navigate = useNavigate();
  const { conversations, setActiveConversationId } = useApp();

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
      <div>
        <p className="text-[10px] font-semibold tracking-wider text-[#005596] uppercase">
          CHAT & CONNECTIONS
        </p>
        <h1 className="text-2xl font-bold text-slate-800">Conversations that count.</h1>
        <p className="text-xs text-slate-400 mt-0.5">Discuss requirements. Shape your next opportunity.</p>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search contacts, companies or messages"
          className="w-full pl-9 pr-3 py-2.5 bg-white rounded-xl border border-slate-200 text-xs focus:outline-none shadow-sm"
        />
        <span className="absolute left-3 top-2.5 text-slate-400 text-xs">🔍</span>
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar py-0.5">
        <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#003865] text-white shrink-0">All</span>
        <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white border text-slate-600 shrink-0">Unread</span>
        <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white border text-slate-600 shrink-0">New opportunity</span>
      </div>

      {/* List */}
      <div className="space-y-2">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            onClick={() => {
              setActiveConversationId(conv.id);
              navigate('/app/chat/thread');
            }}
            className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3 cursor-pointer hover:border-slate-300"
          >
            <div className="w-10 h-10 rounded-full bg-sky-100 text-[#005596] font-bold flex items-center justify-center shrink-0">
              {conv.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-slate-800 text-xs truncate">{conv.contactName}</h3>
                <span className="text-[10px] text-slate-400">Just now</span>
              </div>
              <p className="text-[11px] text-slate-400 truncate">{conv.company}</p>
              <p className="text-xs text-slate-600 font-medium truncate mt-0.5">
                {conv.messages.length > 0 ? `You: ${conv.messages[conv.messages.length - 1].text}` : 'No messages yet'}
              </p>
              <span className="inline-block mt-1 px-2 py-0.5 rounded bg-orange-100 text-[#E05638] text-[10px] font-semibold">
                {conv.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-center text-slate-400 uppercase font-semibold pt-4">
        DEMO WORKSPACE — Messages are browser-local, not real-time.
      </p>
    </div>
  );
};

export const ChatPage = () => {
  return (
    <Routes>
      <Route path="/" element={<InboxList />} />
      <Route path="/thread" element={<ChatThread />} />
    </Routes>
  );
};