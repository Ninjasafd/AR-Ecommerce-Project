import React, { useRef, useState, useContext, useEffect } from 'react';
import TweetPopup from './TwitterPopup';

const ARScenePage = () => {
    const iframeRef = useRef(null);
    const [screenshot, setScreenshot] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [size, setSize] = useState(Number(sessionStorage.getItem('size')) || 100);
    const [color, setColor] = useState(sessionStorage.getItem('color') || '#000000');
    const title = sessionStorage.getItem('title') || 'Default Title';
    const description = sessionStorage.getItem('description') || 'Default Description';
    const modelName = sessionStorage.getItem('modelName');
    const link = sessionStorage.getItem('link');
    const [position, setPosition] = useState({ x: 0, y: 0.5, z: 0 });

    useEffect(() => {
        const handleReceiveScreenshot = (event) => {
            if (event.data && event.data.type === 'CAPTURE_SCREENSHOT') {
                setScreenshot(event.data.image);
                setShowPopup(true);  
            }
        };

        window.addEventListener('message', handleReceiveScreenshot);
        return () => window.removeEventListener('message', handleReceiveScreenshot);
    }, []);

    const triggerScreenshot = () => {
        if (iframeRef.current) {
            iframeRef.current.contentWindow.postMessage({ type: 'CAPTURE_SCREENSHOT' }, '*');
        }
    };

    const handleSizeChange = (event) => {
        const newSize = event.target.value;
        setSize(newSize);
        iframeRef.current.contentWindow.postMessage({ type: 'CHANGE_SIZE', size: newSize / 100 }, '*');
    };

    const handleColorChange = (event) => {
        const newColor = event.target.value;
        setColor(newColor);
        iframeRef.current.contentWindow.postMessage({ type: 'CHANGE_COLOR', color: newColor }, '*');
    };

    const initializeShape = (event) => {
        console.log(`Sending CHANGE_MODEL call ${modelName}`)
        iframeRef.current.contentWindow.postMessage({ type: 'CHANGE_MODEL', modelName }, '*');
    };

    const handlePositionChange = (axis, event) => {
        const newPos = { ...position, [axis]: parseFloat(event.target.value) };
        setPosition(newPos);
        iframeRef.current.contentWindow.postMessage({ type: 'CHANGE_POSITION', position: newPos }, '*');
    };

    const startup = (event) => {
        initializeShape()
        iframeRef.current.contentWindow.postMessage({ type: 'CHANGE_COLOR', color: color }, '*');
        iframeRef.current.contentWindow.postMessage({ type: 'CHANGE_SIZE', size: size / 100 }, '*');
    }

    useEffect(() => {
        sessionStorage.setItem('size', size.toString());
        sessionStorage.setItem('color', color);
    }, [size, color, modelName]);

    return (

        <div className="flex flex-col justify-center items-center lg:h-screen bg-gray-100 p-1">
            <div className="text-lg font-bold">{title}</div>
            <div className="text-md pb-2">{description}</div>
            <div className="text-center mt-4">
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    Learn more about this product here!
                </a>
            </div>
            <iframe
                ref={iframeRef}
                className="border-none  w-3/5 md:h-3/5 m-0 p-0"
                src="/ar-scene.html"
                title="AR Scene"
                onLoad={startup}
            ></iframe>
            <div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-1"
                    onClick={triggerScreenshot}
                >
                    Screenshot and Tweet
                </button>
                {showPopup &&
                    <TweetPopup
                        screenshot={screenshot}
                        onClose={() => setShowPopup(false)}
                    />
                }
            </div>
            <div className="my-4 w-1/4">
                <label htmlFor="size-slider" className="block text-sm font-medium text-gray-700 ">
                    Size:
                </label>
                <div className="flex items-center justify-left space-x-2">
                    <input
                        id="size-slider"
                        type="range"
                        min="1"
                        max="500"
                        value={size}
                        onChange={handleSizeChange}
                        className="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <input
                        type="number"
                        value={size}
                        onChange={handleSizeChange}
                        className="w-20 text-center border-2 border-gray-300 rounded-md"
                        min="1"
                        max="500"
                    />
                    <span className="text-sm font-medium text-gray-700">%</span>
                </div>
                <label htmlFor="color-picker" className="block text-sm font-medium text-gray-700 mt-3">
                    Color
                </label>
                <input
                    id="color-picker"
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                    className="w-24 h-8 p-0 border-2 border-gray-300 cursor-pointer"
                />
                <div className="grid grid-cols-3 gap-6 mt-3">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">X Position:</label>
                        <input
                            type="number"
                            value={position.x}
                            onChange={(e) => handlePositionChange('x', e)}
                            className="mt-1 block w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Y Position:</label>
                        <input
                            type="number"
                            value={position.y}
                            onChange={(e) => handlePositionChange('y', e)}
                            className="mt-1 block w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Z Position:</label>
                        <input
                            type="number"
                            value={position.z}
                            onChange={(e) => handlePositionChange('z', e)}
                            className="mt-1 block w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ARScenePage;
