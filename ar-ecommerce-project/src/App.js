import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ARScenePage from './components/ARScenePage';
import NavigationBar from './components/NavigationBar';
import About from './components/AboutPage';
import { ProductProvider } from './components/ProductContext';
import UploadForm from './components/UploadForm';
import './App.css';

function App() {
  return (
    <ProductProvider>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ar-scene" element={<ARScenePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/upload" element={<UploadForm />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
