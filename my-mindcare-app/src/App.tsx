// src/App.tsx
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import AIChat from './components/AIChat';
import Assessment from './components/Assessment';
import Appointments from './components/Appointments';
import Resources from './components/Resources';
import Community from './components/Community';
import CrisisSupport from './components/CrisisSupport';
import AdminDashboard from './components/AdminDashboard';
import { Header, Footer } from './components/HeaderFooter';
import type { PageType, UserType } from './types/types';

// Mock user
const mockUser: UserType = {
  id: 'u1',
  name: 'Parth Harish Barad',
  email: 'parth@example.com',
  role: 'student',
  isAnonymous: false, // ✅ required now
};


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<
    'dashboard' | 'chat' | 'assessment' | 'appointments' | 'resources' | 'community' | 'crisis' | 'admin'
  >('dashboard');

  const [user] = useState<UserType>(mockUser);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard user={user} />;
      case 'chat': return <AIChat />;
      case 'assessment': return <Assessment />;
      case 'appointments': return <Appointments />;
      case 'resources': return <Resources />;
      case 'community': return <Community />;
      case 'crisis': return <CrisisSupport />;
      case 'admin': return <AdminDashboard />;
      default: return <Dashboard user={user} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header currentPage={currentPage} onPageChange={(page) => setCurrentPage(page as PageType)} user={user} />
      <main style={{ flex: 1 }}>{renderCurrentPage()}</main>
      <Footer onNav={(page) => setCurrentPage(page as PageType)} />
    </div>
);

  
};

export default App;
