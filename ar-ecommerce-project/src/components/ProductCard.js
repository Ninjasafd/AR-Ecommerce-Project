import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ imageSrc, title, description, modelName, link }) => {
    const handleARClick = () => {
        sessionStorage.setItem('title', title);
        sessionStorage.setItem('description', description);
        sessionStorage.setItem('modelName', modelName);
        sessionStorage.setItem('link', link);
    };

    return (
        <div className="max-w-sm w-72 rounded overflow-hidden shadow-2xl bg-white m-4 h-[450px] flex flex-col">
            <img className="w-full h-64 object-cover" src={imageSrc} alt={title} />
            <div className="px-6 py-4 flex-grow">
                <div className="font-bold text-xl mb-2 line-clamp-1">{title}</div>
                <p className="text-gray-700 text-base line-clamp-3 overflow-ellipsis">
                    {description}
                </p>
            </div>
            <div className="px-6 py-4">
                <Link to="/ar-scene" onClick={handleARClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View AR Experience
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
