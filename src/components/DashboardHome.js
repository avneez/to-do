import React from 'react';
import { FaTasks, FaChartLine, FaShoppingCart, FaUsers } from 'react-icons/fa';
import './DashboardHome.css';

const DashboardHome = () => {
  // Mock data for dashboard stats
  const stats = [
    { title: 'Total Tasks', value: '24', icon: FaTasks, color: '#3498db', change: '+12%' },
    { title: 'Completed', value: '18', icon: FaChartLine, color: '#2ecc71', change: '+8%' },
    { title: 'Products', value: '156', icon: FaShoppingCart, color: '#e74c3c', change: '+5%' },
    { title: 'Users', value: '1,234', icon: FaUsers, color: '#f39c12', change: '+15%' },
  ];

  const recentTasks = [
    { id: 1, title: 'Review product designs', status: 'pending', priority: 'high' },
    { id: 2, title: 'Update inventory system', status: 'completed', priority: 'medium' },
    { id: 3, title: 'Prepare monthly report', status: 'in-progress', priority: 'high' },
    { id: 4, title: 'Team meeting preparation', status: 'pending', priority: 'low' },
  ];

  return (
    <div className="dashboard-home">
      <div className="welcome-section">
        <h1>Welcome back! 👋</h1>
        <p>Here's what's happening with your projects today.</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ '--accent-color': stat.color }}>
            <div className="stat-icon">
              <stat.icon />
            </div>
            <div className="stat-content">
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
              <span className="stat-change">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-sections">
        <div className="recent-tasks-section">
          <h2>Recent Tasks</h2>
          <div className="task-list">
            {recentTasks.map((task) => (
              <div key={task.id} className={`task-item ${task.status}`}>
                <div className="task-info">
                  <h4>{task.title}</h4>
                  <span className={`priority ${task.priority}`}>{task.priority}</span>
                </div>
                <span className={`status ${task.status}`}>
                  {task.status.replace('-', ' ')}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button className="action-btn primary">
              <FaTasks />
              Add New Task
            </button>
            <button className="action-btn secondary">
              <FaShoppingCart />
              View Products
            </button>
            <button className="action-btn tertiary">
              <FaChartLine />
              Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;