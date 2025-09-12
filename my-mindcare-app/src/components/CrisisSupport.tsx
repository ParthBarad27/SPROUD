import React from 'react';
import { AlertCircle, Activity, Heart, Users } from 'lucide-react';
import './CrisisSupport.css';

const CrisisSupport: React.FC = () => {
  return (
    <div className="crisis-container">
      <div className="crisis-header">
        <AlertCircle className="crisis-icon" />
        <h2>Crisis Support</h2>
        <p>If you are experiencing a mental health crisis, immediate help is available 24/7</p>
      </div>

      {/* Emergency Contacts */}
      <div className="emergency-contacts">
        <h3>Emergency Helplines</h3>
        <div className="emergency-grid">
          <div className="emergency-card">
            <h4>National Crisis Helpline</h4>
            <p className="helpline-number">1800-599-0019</p>
            <p>24/7 • Free • Confidential</p>
            <button>Call Now</button>
          </div>
          <div className="emergency-card">
            <h4>SMS Crisis Support</h4>
            <p className="helpline-text">Text "HELP" to 741741</p>
            <p>For areas with limited phone service</p>
            <button>Send SMS</button>
          </div>
        </div>
      </div>

      {/* Coping Strategies */}
      <div className="coping-strategies">
        <h3>Immediate Coping Strategies</h3>
        <div className="coping-grid">
          <div className="strategy-card">
            <div className="strategy-icon">
              <Activity />
            </div>
            <h4>5-4-3-2-1 Grounding</h4>
            <p>5 things to see, 4 to touch, 3 to hear, 2 to smell, 1 to taste</p>
          </div>
          <div className="strategy-card">
            <div className="strategy-icon">
              <Heart />
            </div>
            <h4>Box Breathing</h4>
            <p>In 4, hold 4, out 4, hold 4. Repeat for 1–2 minutes</p>
          </div>
          <div className="strategy-card">
            <div className="strategy-icon">
              <Users />
            </div>
            <h4>Reach Out</h4>
            <p>Contact a trusted friend, family member, or counselor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrisisSupport;
