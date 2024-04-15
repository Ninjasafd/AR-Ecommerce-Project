import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Make sure to create a corresponding CSS file

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="hero-section">
        <h1>Welcome to Your App</h1>
        <p>Discover our features and services.</p>
        <button className="cta-button">Show Me Around</button>
      </header>
      <section className="featured">
        <div className="product-card">
          <img src="product1.jpg" alt="Product 1" />
          <h3>Product 1</h3>
          <p>Short description of Product 1.</p>
        </div>
        {/* Repeat for other products */}
      </section>
      {/* Add more sections as needed */}
      <button className="cta-button">
        <Link to="/">Enter AR Experience</Link>
      </button>
    </div>
  );
};

export default LandingPage;
