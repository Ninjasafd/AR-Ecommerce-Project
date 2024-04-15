import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav style={{ backgroundColor: "#f0f0f0", padding: "10px", textAlign: "center" }}>
      <Link to="/" style={{ marginRight: "20px", textDecoration: "none", color: "black" }}>Home</Link>
      <Link to="/ar-scene" style={{ textDecoration: "none", color: "black" }}>Enter AR Experience</Link>
    </nav>
  );
}

export default NavigationBar;
