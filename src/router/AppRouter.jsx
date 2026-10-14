import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { MobileContainer } from '../components/layout/MobileContainer';
import { Header } from '../components/layout/Header';

// Onboarding Pages
import { WelcomePage } from '../pages/auth/WelcomePage';
import { RoleSelectionPage } from '../pages/auth/RoleSelectionPage';
import { SignUpPage } from '../pages/auth/SignUpPage';

// Main Pages
import { HomePage } from '../pages/main/HomePage';
import { ChatPage } from '../pages/main/ChatPage';
import { DirectoryPage } from '../pages/main/DirectoryPage';
import { PartnerProfilePage } from '../pages/main/PartnerProfilePage';
import { EventsPage } from '../pages/main/EventsPage';
import { EventDetailPage } from '../pages/main/EventDetailPage';
import { ProfilePage } from '../pages/main/ProfilePage';

export const AppRouter = () => {
  const { isAuthenticated } = useApp();

  return (
    <MobileContainer>
      <Routes>
        <Route path="/onboarding/welcome" element={<WelcomePage />} />
        <Route path="/onboarding/role" element={<RoleSelectionPage />} />
        <Route path="/onboarding/signup" element={<SignUpPage />} />

        {isAuthenticated ? (
          <Route
            path="/app/*"
            element={
              <div className="flex-1 flex flex-col h-full overflow-hidden">
                <Header />
                <div className="flex-1 overflow-hidden flex flex-col relative pb-16 md:pb-0">
                  <Routes>
                    <Route path="home" element={<HomePage />} />
                    <Route path="chat/*" element={<ChatPage />} />
                    <Route path="directory" element={<DirectoryPage />} />
                    <Route path="directory/:id" element={<PartnerProfilePage />} />
                    <Route path="events" element={<EventsPage />} />
                    <Route path="events/:id" element={<EventDetailPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="*" element={<Navigate to="home" replace />} />
                  </Routes>
                </div>
              </div>
            }
          />
        ) : (
          <Route path="/app/*" element={<Navigate to="/onboarding/welcome" replace />} />
        )}

        <Route path="*" element={<Navigate to="/onboarding/welcome" replace />} />
      </Routes>
    </MobileContainer>
  );
};