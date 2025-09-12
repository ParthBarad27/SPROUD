import React, { useState } from 'react';
import { MessageCircle, Brain, Calendar, BookOpen, Phone, CheckCircle } from 'lucide-react';
// Remove any duplicate import of UserType
import type { UserType } from '../data'; // keep this only
// If not used yet, comment or remove:
import { mockAppointments } from '../data';


import './Dashboard.css';  // import the CSS

const Dashboard: React.FC<{ user: UserType }> = ({ user }) => {
  const [currentMood, setCurrentMood] = useState(user.mood || 'neutral');

  const moodOptions = [
    { value: 'great', label: '😊 Great' },
    { value: 'good', label: '🙂 Good' },
    { value: 'neutral', label: '😐 Neutral' },
    { value: 'stressed', label: '😰 Stressed' },
    { value: 'sad', label: '😢 Sad' },
  ];

  return (
    <div className="dashboard-container">
      <div className="welcome-section">
        <h1>Welcome back, {user.isAnonymous ? 'Anonymous' : user.name}</h1>
        <p>How are you feeling today?</p>
      </div>

      <div className="mood-options">
        {moodOptions.map((mood) => (
          <button
            key={mood.value}
            onClick={() => setCurrentMood(mood.value)}
            className={currentMood === mood.value ? 'active' : ''}
          >
            {mood.label}
          </button>
        ))}
      </div>

      {/* Quick actions, recent activity, wellness score, appointments, crisis support */}
      {/* Use similar div wrappers with classNames from Dashboard.css */}
    </div>
  );
};




export default Dashboard;
