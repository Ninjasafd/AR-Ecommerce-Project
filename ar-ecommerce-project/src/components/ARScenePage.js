import React, { useRef, useState } from 'react';

const ARScenePage = () => {
    const iframeRef = useRef(null);
    const [size, setSize] = useState(100); 
    const [color, setColor] = useState('#000000'); // Default color - black

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

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100 p-4">
            <iframe
                ref={iframeRef}
                className="border-none w-full md:w-1/2 lg:h-3/4 m-0 p-0"
                src="/ar-scene.html"
                title="AR Scene"
            ></iframe>
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
                <label htmlFor="color-picker" className="block text-sm font-medium text-gray-700 mt-4">
                    Color
                </label>
                <input
                    id="color-picker"
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                    className="w-24 h-8 p-0 border-2 border-gray-300 cursor-pointer"
                />
            </div>
        </div>
    );
};

export default ARScenePage;
