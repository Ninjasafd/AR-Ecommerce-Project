import React from 'react';
import { XCircleIcon, CameraIcon } from '@heroicons/react/outline';
import axios from 'axios';

const TweetPopup = ({ screenshot, tweetText, onClose }) => {

    const setTweetText = (text) => {
        setTweetText(text);
    };



    const onTweet = () => {
        // Make a POST request to your backend endpoint to post the tweet
        axios.post('http://localhost:443/api/products/tweet', { tweetText })
            .then(response => {
                console.log('Tweet posted successfully:', response.data);
            })
            .catch(error => {
                console.error('Error posting tweet:', error);
            });
    };


    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm">
                <div className="p-4 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">Tweet your Screenshot</h3>
                        <button onClick={onClose}>
                            <XCircleIcon className="h-6 w-6 text-gray-600 hover:text-gray-800" />
                        </button>
                    </div>
                </div>
                <div className="p-4">
                    <div className="bg-gray-100 rounded-lg p-2 mb-4">
                        <img src={screenshot} alt="Screenshot for tweet" className="rounded-lg" />
                    </div>
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows="3"
                        placeholder="What's happening?"
                        value={tweetText}
                        onChange={e => setTweetText(e.target.value)}
                    ></textarea>
                    <div className="mt-4 flex justify-between items-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
                            onClick={onTweet}
                        >
                            <CameraIcon className="h-5 w-5 mr-2" />
                            Tweet
                        </button>
                        <button
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TweetPopup;
