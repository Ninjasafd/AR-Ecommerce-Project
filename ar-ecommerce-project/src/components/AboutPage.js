import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container bg-gray-100 text-gray-900 min-h-screen p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
          Welcome to Jeffrey's E-commerce AR Website, your number one source for augmented reality shopping experiences. 
          We're dedicated to providing you the very best of AR technology, with an emphasis on user experience, innovation, 
          and customer service.
        </p>
        <p className="mb-4">
          Founded in 2024 by Jeffrey, our website has come a long way from its beginnings. When Jeffrey first started out, 
          his passion for cutting-edge AR solutions drove him to start his own business.
        </p>
        <p className="mb-4">
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, 
          please don't hesitate to contact us.
        </p>
        <p className="mb-4">
          Best,<br />
          Jeffrey
        </p>
        <Link to="/" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default About;
