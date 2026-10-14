import React, { createContext, useContext, useState } from 'react';
import { INITIAL_USER, INITIAL_POSTS, INITIAL_CONVERSATIONS, INITIAL_EVENTS, INITIAL_PROFILES } from '../mockData';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(INITIAL_USER);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedRole, setSelectedRole] = useState('retailer');
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [profiles] = useState(INITIAL_PROFILES);
  const [conversations, setConversations] = useState(INITIAL_CONVERSATIONS);
  const [events] = useState(INITIAL_EVENTS);
  const [activeConversationId, setActiveConversationId] = useState(null);
  const [selectedProfileId, setSelectedProfileId] = useState(null);
  
  // Modals state
  const [isRfqModalOpen, setIsRfqModalOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

  const login = (email, password) => {
    setUser((prev) => ({ ...prev, email: email || prev.email }));
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const demoLoginAs = (roleKey) => {
    if (roleKey === 'retailer') {
      setUser({
        name: 'Amina Rahal',
        role: 'Retailer / Travel Agent',
        roleType: 'retailer',
        title: 'Travel Sales Manager',
        company: 'Atlas Travel',
        location: 'Cairo, Egypt',
        email: 'amina@atlastravel.com',
        phone: '+20 100 555 0192',
        shareContact: true,
        dealsCount: 2,
      });
    } else {
      setUser({
        name: 'Marcus Lee',
        role: 'Hotel Agent / Manager',
        roleType: 'hotel',
        title: 'Hotel Sales Manager',
        company: 'North & Palm Hotel',
        location: 'Hurghada, Egypt',
        email: 'marcus@northpalm.com',
        phone: '+20 122 444 8810',
        shareContact: true,
        dealsCount: 4,
      });
    }
    setIsAuthenticated(true);
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
      email: email || 'nohaomar507@gmail.com',
      phone: '',
      shareContact: false,
      dealsCount: 0,
    });
    setIsAuthenticated(true);
  };

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

  const startOrCreateConversation = (contactName, company, avatar, relatedPostTitle = null) => {
    const convId = contactName.toLowerCase().replace(/\s+/g, '-');
    const existing = conversations.find(c => c.id === convId);
    if (!existing) {
      const newConv = {
        id: convId,
        contactName,
        company,
        avatar: avatar || contactName.split(' ').map(n => n[0]).join(''),
        status: 'New opportunity',
        relatedPostTitle,
        messages: [],
      };
      setConversations([newConv, ...conversations]);
    }
    setActiveConversationId(convId);
    return convId;
  };

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
      demoLoginAs,
      register,
      selectedRole,
      setSelectedRole,
      posts,
      profiles,
      createRfq,
      toggleLike,
      conversations,
      activeConversationId,
      setActiveConversationId,
      selectedProfileId,
      setSelectedProfileId,
      startOrCreateConversation,
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