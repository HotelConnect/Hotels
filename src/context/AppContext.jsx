// Global State Management (User session, Posts, Chats, Events, Filters)

import React, { createContext, useContext, useState } from 'react';
import { INITIAL_USER, INITIAL_POSTS, INITIAL_CONVERSATIONS, INITIAL_EVENTS } from '../mockData';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(INITIAL_USER);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedRole, setSelectedRole] = useState('retailer'); // 'retailer' | 'hotel'
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [conversations, setConversations] = useState(INITIAL_CONVERSATIONS);
  const [events] = useState(INITIAL_EVENTS);
  const [activeConversationId, setActiveConversationId] = useState(null);
  
  // Modals state
  const [isRfqModalOpen, setIsRfqModalOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

  // Authentication Actions
  const login = (email, password) => {
    setUser((prev) => ({ ...prev, email: email || prev.email }));
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const register = (firstName, email, password) => {
    const roleTitle = selectedRole === 'retailer' ? 'Retailer / Travel Agent' : 'Hotel Agent / Manager';
    setUser({
      name: firstName || 'Noha',
      role: roleTitle,
      roleType: selectedRole,
      title: selectedRole === 'retailer' ? 'Travel Agent' : 'Hotel Representative',
      company: selectedRole === 'retailer' ? 'Your travel agency' : 'Your hotel property',
      location: '',
      email: email || 'user@company.com',
      phone: '',
      shareContact: false,
      dealsCount: 0,
    });
    setIsAuthenticated(true);
  };

  // Post Actions
  const createRfq = (rfqData) => {
    const newPost = {
      id: Date.now(),
      author: user.name,
      company: user.company,
      role: user.title,
      roleType: user.roleType,
      time: 'Just now',
      type: 'RFQ',
      content: rfqData.description,
      location: rfqData.location,
      rooms: `${rfqData.rooms} rooms`,
      dates: `${rfqData.checkIn} – ${rfqData.checkOut}`,
      likes: 0,
      comments: 0,
      userLiked: false,
    };
    setPosts([newPost, ...posts]);
  };

  const toggleLike = (postId) => {
    setPosts(posts.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          likes: p.userLiked ? p.likes - 1 : p.likes + 1,
          userLiked: !p.userLiked
        };
      }
      return p;
    }));
  };

  // Messaging Actions
  const sendMessage = (conversationId, text) => {
    if (!text.trim()) return;
    const newMessage = {
      id: Date.now(),
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isUser: true,
    };

    setConversations(conversations.map(c => {
      if (c.id === conversationId) {
        return {
          ...c,
          messages: [...c.messages, newMessage]
        };
      }
      return c;
    }));
  };

  const updateOpportunityStatus = (conversationId, status) => {
    setConversations(conversations.map(c => {
      if (c.id === conversationId) {
        return { ...c, status };
      }
      return c;
    }));
  };

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      isAuthenticated,
      login,
      logout,
      register,
      selectedRole,
      setSelectedRole,
      posts,
      createRfq,
      toggleLike,
      conversations,
      activeConversationId,
      setActiveConversationId,
      sendMessage,
      updateOpportunityStatus,
      events,
      isRfqModalOpen,
      setIsRfqModalOpen,
      isEditProfileModalOpen,
      setIsEditProfileModalOpen
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
