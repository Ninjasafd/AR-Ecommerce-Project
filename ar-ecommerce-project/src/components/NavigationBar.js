import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav className="bg-gray-800 p-4 text-center">
      <Link to="/" className="text-white mr-6">Home</Link>
      {/* <Link to="/ar-scene" className="text-white mr-6">Enter AR Experience</Link> */}
      <Link to="/about" className="text-white mr-6">About</Link>
      <Link to="/upload" className="text-white">Upload Product</Link>
    </nav>
  );
}

export default NavigationBar;
