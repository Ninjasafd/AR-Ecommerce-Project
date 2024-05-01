// src/components/ArScene.js
import React from 'react';

const ArScene = () => {
  const handleMarkerFound = () => {
    console.log('Marker Found');
  };

  const handleMarkerLost = () => {
    console.log('Marker Lost');
  };

  return (
    <a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false;'>
      <a-marker preset="hiro"
        markerFound={handleMarkerFound}
        markerLost={handleMarkerLost}>
        <a-box position="0 0.5 0" material="color: red;"></a-box>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ArScene;
