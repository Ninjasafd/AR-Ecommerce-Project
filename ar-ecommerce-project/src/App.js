import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage'; // Your landing page component
import ARScenePage from './components/ARScenePage';
import NavigationBar from './components/NavigationBar'
import About from './components/AboutPage';
import './App.css';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ar-scene" element={<ARScenePage  />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    
  );
}

export default App;
