import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaDownload, FaFilter, FaSearch } from 'react-icons/fa';
import './ECommerceDetails.css';

const ECommerceDetails = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock API call to fetch detailed order data
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Mock order data
      const mockOrders = [
        {
          id: 'ORD-001',
          customer: 'John Doe',
          email: 'john@example.com',
          total: 299.98,
          status: 'completed',
          date: '2024-01-15',
          items: [
            { name: 'Wireless Headphones', quantity: 2, price: 99.99 },
            { name: 'Smart Watch', quantity: 1, price: 199.99 }
          ]
        },
        {
          id: 'ORD-002',
          customer: 'Jane Smith',
          email: 'jane@example.com',
          total: 65.97,
          status: 'processing',
          date: '2024-01-14',
          items: [
            { name: 'Coffee Mug', quantity: 3, price: 15.99 },
            { name: 'Gaming Mouse', quantity: 1, price: 39.99 }
          ]
        },
        {
          id: 'ORD-003',
          customer: 'Bob Johnson',
          email: 'bob@example.com',
          total: 129.98,
          status: 'shipped',
          date: '2024-01-13',
          items: [
            { name: 'Bluetooth Speaker', quantity: 1, price: 79.99 },
            { name: 'Laptop Stand', quantity: 1, price: 49.99 }
          ]
        },
        {
          id: 'ORD-004',
          customer: 'Alice Brown',
          email: 'alice@example.com',
          total: 199.99,
          status: 'completed',
          date: '2024-01-12',
          items: [
            { name: 'Smart Watch', quantity: 1, price: 199.99 }
          ]
        },
        {
          id: 'ORD-005',
          customer: 'Charlie Wilson',
          email: 'charlie@example.com',
          total: 45.98,
          status: 'cancelled',
          date: '2024-01-11',
          items: [
            { name: 'Coffee Mug', quantity: 1, price: 15.99 },
            { name: 'Gaming Mouse', quantity: 1, price: 39.99 }
          ]
        }
      ];
      
      setOrders(mockOrders);
      setLoading(false);
    };

    fetchOrders();
  }, []);

  const filteredOrders = orders.filter(order =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const orderStats = {
    total: orders.length,
    completed: orders.filter(o => o.status === 'completed').length,
    processing: orders.filter(o => o.status === 'processing').length,
    shipped: orders.filter(o => o.status === 'shipped').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length,
    revenue: orders
      .filter(o => o.status === 'completed')
      .reduce((sum, o) => sum + o.total, 0)
  };

  if (loading) {
    return (
      <div className="details-loading">
        <div className="loading-spinner"></div>
        <p>Loading order details...</p>
      </div>
    );
  }

  return (
    <div className="ecommerce-details">
      <div className="details-header">
        <div className="header-nav">
          <Link to="/ecommerce" className="back-btn">
            <FaArrowLeft />
            Back to eCommerce
          </Link>
        </div>
        <div className="header-content">
          <h1>Order Management</h1>
          <p>Detailed view of all orders and transactions</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary">
            <FaDownload />
            Export Data
          </button>
        </div>
      </div>

      <div className="details-stats">
        <div className="stat-card">
          <h3>{orderStats.total}</h3>
          <p>Total Orders</p>
        </div>
        <div className="stat-card success">
          <h3>{orderStats.completed}</h3>
          <p>Completed</p>
        </div>
        <div className="stat-card warning">
          <h3>{orderStats.processing}</h3>
          <p>Processing</p>
        </div>
        <div className="stat-card info">
          <h3>{orderStats.shipped}</h3>
          <p>Shipped</p>
        </div>
        <div className="stat-card danger">
          <h3>{orderStats.cancelled}</h3>
          <p>Cancelled</p>
        </div>
        <div className="stat-card revenue">
          <h3>${orderStats.revenue.toFixed(2)}</h3>
          <p>Total Revenue</p>
        </div>
      </div>

      <div className="orders-section">
        <div className="section-controls">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search orders, customers, or order IDs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-controls">
            <button className="filter-btn">
              <FaFilter />
              Filters
            </button>
            <select>
              <option>All Status</option>
              <option>Completed</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>

        <div className="orders-table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Email</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map(order => (
                <tr key={order.id} className="order-row">
                  <td className="order-id">{order.id}</td>
                  <td className="customer-name">{order.customer}</td>
                  <td className="customer-email">{order.email}</td>
                  <td className="order-date">{order.date}</td>
                  <td className="order-items">
                    <div className="items-summary">
                      {order.items.length} item{order.items.length > 1 ? 's' : ''}
                      <div className="items-tooltip">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="item-detail">
                            {item.quantity}x {item.name} - ${item.price}
                          </div>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="order-total">${order.total.toFixed(2)}</td>
                  <td>
                    <span className={`status-badge ${order.status}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="order-actions">
                    <button className="action-btn view">View</button>
                    <button className="action-btn edit">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredOrders.length === 0 && (
          <div className="no-results">
            <p>No orders found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ECommerceDetails;