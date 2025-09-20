import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaEye, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import './ECommerce.css';

const ECommerce = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock API call to fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock product data
      const mockProducts = [
        {
          id: 1,
          name: 'Wireless Headphones',
          price: 99.99,
          category: 'Electronics',
          stock: 25,
          image: 'https://via.placeholder.com/150',
          status: 'active'
        },
        {
          id: 2,
          name: 'Smart Watch',
          price: 199.99,
          category: 'Electronics',
          stock: 12,
          image: 'https://via.placeholder.com/150',
          status: 'active'
        },
        {
          id: 3,
          name: 'Coffee Mug',
          price: 15.99,
          category: 'Kitchen',
          stock: 50,
          image: 'https://via.placeholder.com/150',
          status: 'active'
        },
        {
          id: 4,
          name: 'Laptop Stand',
          price: 49.99,
          category: 'Office',
          stock: 8,
          image: 'https://via.placeholder.com/150',
          status: 'low-stock'
        },
        {
          id: 5,
          name: 'Bluetooth Speaker',
          price: 79.99,
          category: 'Electronics',
          stock: 0,
          image: 'https://via.placeholder.com/150',
          status: 'out-of-stock'
        },
        {
          id: 6,
          name: 'Gaming Mouse',
          price: 39.99,
          category: 'Gaming',
          stock: 30,
          image: 'https://via.placeholder.com/150',
          status: 'active'
        }
      ];
      
      setProducts(mockProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const stats = {
    totalProducts: products.length,
    activeProducts: products.filter(p => p.status === 'active').length,
    lowStock: products.filter(p => p.status === 'low-stock').length,
    outOfStock: products.filter(p => p.status === 'out-of-stock').length,
    totalValue: products.reduce((sum, p) => sum + (p.price * p.stock), 0)
  };

  if (loading) {
    return (
      <div className="ecommerce-loading">
        <div className="loading-spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="ecommerce-page">
      <div className="ecommerce-header">
        <div>
          <h1>eCommerce Dashboard</h1>
          <p>Manage your products and inventory</p>
        </div>
        <div className="header-actions">
          <Link to="/ecommerce/details" className="btn btn-primary">
            <FaEye />
            View Details
          </Link>
          <button className="btn btn-secondary">
            <FaPlus />
            Add Product
          </button>
        </div>
      </div>

      <div className="ecommerce-stats">
        <div className="stat-card">
          <h3>{stats.totalProducts}</h3>
          <p>Total Products</p>
        </div>
        <div className="stat-card">
          <h3>{stats.activeProducts}</h3>
          <p>Active Products</p>
        </div>
        <div className="stat-card warning">
          <h3>{stats.lowStock}</h3>
          <p>Low Stock</p>
        </div>
        <div className="stat-card danger">
          <h3>{stats.outOfStock}</h3>
          <p>Out of Stock</p>
        </div>
        <div className="stat-card success">
          <h3>${stats.totalValue.toFixed(2)}</h3>
          <p>Total Inventory Value</p>
        </div>
      </div>

      <div className="products-section">
        <div className="section-header">
          <h2>Products</h2>
          <div className="filters">
            <select>
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Kitchen</option>
              <option>Office</option>
              <option>Gaming</option>
            </select>
            <select>
              <option>All Status</option>
              <option>Active</option>
              <option>Low Stock</option>
              <option>Out of Stock</option>
            </select>
          </div>
        </div>

        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className={`product-card ${product.status}`}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button className="overlay-btn">
                    <FaEye />
                  </button>
                  <button className="overlay-btn">
                    <FaEdit />
                  </button>
                  <button className="overlay-btn">
                    <FaTrash />
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h4>{product.name}</h4>
                <p className="category">{product.category}</p>
                <div className="product-details">
                  <span className="price">${product.price}</span>
                  <span className={`stock ${product.status}`}>
                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                  </span>
                </div>
                <div className="product-actions">
                  <button className="btn-small btn-primary">
                    <FaShoppingCart />
                    Quick Sale
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ECommerce;