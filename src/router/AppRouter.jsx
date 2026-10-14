//# React Router v6 Configuration

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { MobileContainer } from '../components/layout/MobileContainer';
import { Header } from '../components/layout/Header';
import { BottomNavbar } from '../components/layout/BottomNavbar';

// Onboarding Pages
import { WelcomePage } from '../pages/auth/WelcomePage';
import { RoleSelectionPage } from '../pages/auth/RoleSelectionPage';
import { SignUpPage } from '../pages/auth/SignUpPage';

// Main Pages
import { HomePage } from '../pages/main/HomePage';
import { ChatPage } from '../pages/main/ChatPage';
import { EventsPage } from '../pages/main/EventsPage';
import { EventDetailPage } from '../pages/main/EventDetailPage';
import { ProfilePage } from '../pages/main/ProfilePage';

export const AppRouter = () => {
  const { isAuthenticated } = useApp();

  return (
    <MobileContainer>
      <Routes>
        {/* Auth / Onboarding Routes */}
        <Route path="/onboarding/welcome" element={<WelcomePage />} />
        <Route path="/onboarding/role" element={<RoleSelectionPage />} />
        <Route path="/onboarding/signup" element={<SignUpPage />} />

        {/* Authenticated Dashboard Routes */}
        {isAuthenticated ? (
          <Route
            path="/app/*"
            element={
              <div className="flex-1 flex flex-col h-full overflow-hidden">
                <Header />
                <div className="flex-1 overflow-hidden flex flex-col relative">
                  <Routes>
                    <Route path="home" element={<HomePage />} />
                    <Route path="chat/*" element={<ChatPage />} />
                    <Route path="events" element={<EventsPage />} />
                    <Route path="events/:id" element={<EventDetailPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="*" element={<Navigate to="home" replace />} />
                  </Routes>
                </div>
                <BottomNavbar />
              </div>
            }
          />
        ) : (
          <Route path="/app/*" element={<Navigate to="/onboarding/welcome" replace />} />
        )}

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/onboarding/welcome" replace />} />
      </Routes>
    </MobileContainer>
  );
};