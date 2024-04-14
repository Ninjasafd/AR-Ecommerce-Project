import React, { useEffect, useRef } from 'react';
import ArScene from './components/ARScene';
import './App.css';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Access webcam
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const constraints = { video: true };
      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error("Error accessing the webcam: ", err);
        });
    }

  }, []);

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <a-scene embedded arjs='sourceType: webcam;'>
        <a-text text="value: Whatever \n you want !" color="blue" rotation="-90 0 0"></a-text>
        <a-marker-camera preset='hiro'></a-marker-camera>
      </a-scene>

      {/* <video ref={videoRef} style={{ width: 400, height: 400 }} autoPlay playsInline /> */}
      {/* </header> */}
    </div>
  );
}

export default App;
