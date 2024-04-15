import React, {useEffect} from 'react';

const ARScenePage = () => {
    useEffect(() => {
        // When the component mounts, apply the background color
        document.body.style.backgroundColor = 'bg-gray-100';
    
        // Optionally, clean up when the component unmounts
      }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <iframe
        className="border-none w-full md:w-1/2 lg:h-1/2 my-0 md:my-8"
        src="/ar-scene.html"
        title="AR Scene"
      ></iframe>
    </div>
  );
};

export default ARScenePage;
