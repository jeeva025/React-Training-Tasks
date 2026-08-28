import React from 'react'

function Products() {
  return (
    <div className="page">

      <div className="page-header">
        <h1>Our Products</h1>
        <p>
          Explore some of the digital products created by our team.
        </p>
      </div>

      <div className="product-grid">

        <div className="product-card">
          <div className="product-icon">📊</div>
          <h2>Finance Tracker</h2>
          <p>
            Track your income, expenses and savings in one place.
          </p>
          <button>View Product</button>
        </div>

        <div className="product-card">
          <div className="product-icon">🛒</div>
          <h2>ShopEasy</h2>
          <p>
            A simple and powerful e-commerce platform for online
            shopping.
          </p>
          <button>View Product</button>
        </div>

        <div className="product-card">
          <div className="product-icon">📝</div>
          <h2>Task Manager</h2>
          <p>
            Organize your daily tasks and improve your productivity.
          </p>
          <button>View Product</button>
        </div>

      </div>

    </div>
  )
}

export default Products