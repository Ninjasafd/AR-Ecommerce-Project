// src/components/ArScene.js
import React, { useEffect } from 'react';

const ArScene = () => {
  useEffect(() => {
    // Initialization and cleanup logic
    return () => {
      // Clean up the scene when the component unmounts
    };
  }, []);

  return (
    <a-scene embedded arjs='sourceType: webcam;'>
      <a-marker preset="hiro">
        <a-box position='0 0.5 0' material='color: red;'></a-box>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ArScene;
