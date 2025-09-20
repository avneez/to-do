import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DashboardHome from './components/DashboardHome';
import Home from './components/Home';
import ECommerce from './components/ECommerce';
import ECommerceDetails from './components/ECommerceDetails';
import Analytics from './components/Analytics';
import About from './components/About';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        {/* Dashboard routes */}
        <Route path="/" element={<Dashboard />}>
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="tasks" element={<Home />} />
          <Route path="ecommerce" element={<ECommerce />} />
          <Route path="ecommerce/details" element={<ECommerceDetails />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="profile" element={<About />} />
          <Route path="settings" element={<About />} />
        </Route>
        
        {/* Legacy routes for compatibility */}
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
