import React from 'react';
import { XCircleIcon } from '@heroicons/react/outline';  // Ensure you import needed icons

const TweetPopup = ({ screenshot, onClose, imageSrc }) => {
    // Optional: Encode the tweet content and URL if necessary
    const tweetMessage = encodeURIComponent("Check out this cool product I found! You can even view it in Augmented Reality to test it out easier!");
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetMessage}`;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm">
                <div className="p-4 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">Tweet your Experience</h3>
                        <button onClick={onClose}>
                            <XCircleIcon className="h-6 w-6 text-gray-600 hover:text-gray-800" />
                        </button>
                    </div>
                </div>
                <div className="p-4">
                    <div className="bg-gray-100 rounded-lg p-2 mb-4">
                        <img src={screenshot || imageSrc} alt="Product Screenshot" className="rounded-lg" />
                    </div>
                    <p className="text-center mb-4">Share your experience on Twitter!</p>
                    <a href={tweetUrl}
                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center justify-center w-full text-center"
                       target="_blank"
                       rel="noopener noreferrer"
                       data-size="large">
                        Tweet
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TweetPopup;
