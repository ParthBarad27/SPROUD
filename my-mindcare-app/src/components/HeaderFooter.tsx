import React, { useState } from 'react';
import { Brain, Menu, X, User, Bell, Home, MessageCircle, Calendar, BookOpen, Users, Phone, Settings } from 'lucide-react';
import './HeaderFooter.css';
import type { UserType } from '../data';



// Header
export const Header: React.FC<{
  currentPage: string;
  onPageChange: (page: string) => void;
  user: UserType | null;
}> = ({ currentPage, onPageChange, user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home /> },
    { id: 'chat', label: 'AI Chat', icon: <MessageCircle /> },
    { id: 'assessment', label: 'Assessment', icon: <Brain /> },
    { id: 'appointments', label: 'Appointments', icon: <Calendar /> },
    { id: 'resources', label: 'Resources', icon: <BookOpen /> },
    { id: 'community', label: 'Community', icon: <Users /> },
    { id: 'crisis', label: 'Crisis Support', icon: <Phone /> },
    { id: 'admin', label: 'Admin', icon: <Settings /> },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Brain />
          <span>MindCare</span>
        </div>

        <nav className="navbar">
          {navigationItems.map(item => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={currentPage === item.id ? 'active' : ''}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="user-info">
          {user && (
            <>
              <Bell />
              <div className="avatar">
                <User />
              </div>
              <span>{user.isAnonymous ? 'Anonymous User' : user.name}</span>
            </>
          )}
          <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
};

// Footer
export const Footer: React.FC<{ onNav: (page: string) => void }> = ({ onNav }) => {
  return (
    <footer className="footer">
      <div className="grid grid-4">
        <div>
          <div className="logo">
            <Brain />
            <span>MindCare</span>
          </div>
          <p>Empowering students with accessible, anonymous mental health support.</p>
        </div>
        <div>
          <h3>Support</h3>
          <ul>
            <li><button onClick={() => onNav('chat')}>AI Chat</button></li>
            <li><button onClick={() => onNav('appointments')}>Book Session</button></li>
            <li><button onClick={() => onNav('crisis')}>Emergency Help</button></li>
            <li><button onClick={() => onNav('resources')}>Resources</button></li>
          </ul>
        </div>
        <div>
          <h3>About</h3>
          <ul>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3>Emergency</h3>
          <p>24/7 Crisis Support:</p>
          <p>1800-599-0019</p>
          <p>Available in multiple languages</p>
        </div>
      </div>
      <div className="bottom">
        <p>&copy; 2024 MindCare - SIH Digital Mental Health Platform. All rights reserved.</p>
        <p>Developed for Smart India Hackathon 2024</p>
      </div>
    </footer>
  );
};
