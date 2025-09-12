import React from 'react';
import { Users, MessageCircle, Brain, Calendar, AlertCircle, Eye, FileText, Upload, Settings } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard: React.FC = () => {
  const stats = {
    totalStudents: 2456,
    activeChats: 89,
    completedAssessments: 156,
    scheduledAppointments: 23,
    crisisInterventions: 7,
    resourceViews: 1890,
  };

  const StatCard: React.FC<{
    title: string;
    value: number;
    icon: React.ReactNode;
    color: string;
    change: string;
  }> = ({ title, value, icon, color, change }) => (
    <div className="stat-card">
      <div className="stat-content">
        <div>
          <p className="stat-title">{title}</p>
          <p className="stat-value">{value.toLocaleString()}</p>
          <p className="stat-change">{change}</p>
        </div>
        <div className={`stat-icon ${color}`}>{icon}</div>
      </div>
    </div>
  );

  return (
    <div className="admin-dashboard-container">
      <div className="header">
        <h2>Admin Dashboard</h2>
        <p>Monitor student wellness and system usage</p>
      </div>

      <div className="stats-overview">
        <StatCard title="Total Students" value={stats.totalStudents} icon={<Users />} color="blue" change="+12% this month" />
        <StatCard title="Active AI Chats" value={stats.activeChats} icon={<MessageCircle />} color="green" change="+25% this week" />
        <StatCard title="Assessments Completed" value={stats.completedAssessments} icon={<Brain />} color="purple" change="+8% this week" />
        <StatCard title="Scheduled Appointments" value={stats.scheduledAppointments} icon={<Calendar />} color="orange" change="+15% this week" />
        <StatCard title="Crisis Interventions" value={stats.crisisInterventions} icon={<AlertCircle />} color="red" change="-3% this week" />
        <StatCard title="Resource Views" value={stats.resourceViews} icon={<Eye />} color="indigo" change="+18% this week" />
      </div>

      <div className="dashboard-grid">
        <div className="charts">
          <div className="chart-card">
            <h3>Student Wellness Trends</h3>
            <div className="chart-placeholder">Wellness trend chart placeholder</div>
          </div>
          <div className="chart-card">
            <h3>Usage Analytics</h3>
            <div className="chart-placeholder">Usage analytics chart placeholder</div>
          </div>
        </div>

        <div className="sidebar">
          <div className="card">
            <h3>Recent Alerts</h3>
            <div className="alert red">
              <AlertCircle />
              <span>High-risk assessment</span>
              <p>Anonymous user - 2 hours ago</p>
            </div>
            <div className="alert yellow">
              <AlertCircle />
              <span>Multiple assessments</span>
              <p>Same user - 4 hours ago</p>
            </div>
          </div>

          <div className="card">
            <h3>Quick Actions</h3>
            <button><FileText /> Generate Report</button>
            <button><Upload /> Upload Resources</button>
            <button><Settings /> System Settings</button>
          </div>

          <div className="card">
            <h3>System Health</h3>
            <div className="system-health">
              <div><span>Server Status</span> <span className="online"></span> Online</div>
              <div><span>AI Chat Bot</span> <span className="online"></span> Active</div>
              <div><span>SMS Gateway</span> <span className="limited"></span> Limited</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
