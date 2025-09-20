import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaTasks, FaShoppingCart, FaChartBar, FaCog, FaUser, FaTimes } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { path: '/dashboard', icon: FaHome, label: 'Dashboard' },
    { path: '/tasks', icon: FaTasks, label: 'Tasks' },
    { path: '/ecommerce', icon: FaShoppingCart, label: 'eCommerce' },
    { path: '/analytics', icon: FaChartBar, label: 'Analytics' },
    { path: '/profile', icon: FaUser, label: 'Profile' },
    { path: '/settings', icon: FaCog, label: 'Settings' },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <div className="logo">
          <h2>TaskDash</h2>
        </div>
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <item.icon className="nav-icon" />
                <span className="nav-label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;