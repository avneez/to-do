import React from 'react';
import { FaChartLine, FaUsers, FaShoppingCart, FaArrowUp } from 'react-icons/fa';
import './Analytics.css';

const Analytics = () => {
  // Mock analytics data
  const analyticsData = {
    pageViews: {
      current: 15420,
      previous: 12890,
      change: '+19.6%'
    },
    users: {
      current: 3240,
      previous: 2890,
      change: '+12.1%'
    },
    sales: {
      current: 8950,
      previous: 7120,
      change: '+25.7%'
    },
    conversion: {
      current: 4.2,
      previous: 3.8,
      change: '+0.4%'
    }
  };

  const chartData = [
    { month: 'Jan', value: 4000 },
    { month: 'Feb', value: 3000 },
    { month: 'Mar', value: 5000 },
    { month: 'Apr', value: 4500 },
    { month: 'May', value: 6000 },
    { month: 'Jun', value: 5500 },
  ];

  return (
    <div className="analytics-page">
      <div className="analytics-header">
        <h1>Analytics Dashboard</h1>
        <p>Track your performance and insights</p>
      </div>

      <div className="analytics-stats">
        <div className="metric-card">
          <div className="metric-icon">
            <FaChartLine />
          </div>
          <div className="metric-content">
            <h3>{analyticsData.pageViews.current.toLocaleString()}</h3>
            <p>Page Views</p>
            <span className="metric-change positive">{analyticsData.pageViews.change}</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon">
            <FaUsers />
          </div>
          <div className="metric-content">
            <h3>{analyticsData.users.current.toLocaleString()}</h3>
            <p>Users</p>
            <span className="metric-change positive">{analyticsData.users.change}</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon">
            <FaShoppingCart />
          </div>
          <div className="metric-content">
            <h3>${analyticsData.sales.current.toLocaleString()}</h3>
            <p>Sales</p>
            <span className="metric-change positive">{analyticsData.sales.change}</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon">
            <FaArrowUp />
          </div>
          <div className="metric-content">
            <h3>{analyticsData.conversion.current}%</h3>
            <p>Conversion Rate</p>
            <span className="metric-change positive">{analyticsData.conversion.change}</span>
          </div>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart-container">
          <h2>Monthly Revenue</h2>
          <div className="simple-chart">
            {chartData.map((item, index) => (
              <div key={index} className="chart-bar">
                <div 
                  className="bar" 
                  style={{ height: `${(item.value / 6000) * 100}%` }}
                  title={`${item.month}: $${item.value}`}
                ></div>
                <span className="bar-label">{item.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="insights-panel">
          <h2>Key Insights</h2>
          <div className="insight-list">
            <div className="insight-item">
              <div className="insight-icon positive">
                <FaArrowUp />
              </div>
              <div className="insight-content">
                <h4>Sales Growth</h4>
                <p>Revenue increased by 25.7% compared to last month</p>
              </div>
            </div>
            <div className="insight-item">
              <div className="insight-icon positive">
                <FaUsers />
              </div>
              <div className="insight-content">
                <h4>User Engagement</h4>
                <p>User activity up by 12.1% with longer session times</p>
              </div>
            </div>
            <div className="insight-item">
              <div className="insight-icon positive">
                <FaChartLine />
              </div>
              <div className="insight-content">
                <h4>Conversion Rate</h4>
                <p>Improved by 0.4% through better UX optimizations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="performance-summary">
        <h2>Performance Summary</h2>
        <div className="summary-grid">
          <div className="summary-item">
            <h4>Top Performing Page</h4>
            <p>/products/electronics</p>
            <span className="summary-value">2,340 views</span>
          </div>
          <div className="summary-item">
            <h4>Best Converting Source</h4>
            <p>Google Ads</p>
            <span className="summary-value">6.8% conversion</span>
          </div>
          <div className="summary-item">
            <h4>Peak Traffic Hour</h4>
            <p>2:00 PM - 3:00 PM</p>
            <span className="summary-value">890 visitors</span>
          </div>
          <div className="summary-item">
            <h4>Average Session Duration</h4>
            <p>User engagement</p>
            <span className="summary-value">4m 23s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;