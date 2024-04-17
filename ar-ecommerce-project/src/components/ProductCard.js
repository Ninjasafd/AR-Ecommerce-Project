import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ imageSrc, title, description, shape = 'box' }) => {
    const handleClick = () => {
        sessionStorage.setItem('title', title);
        sessionStorage.setItem('description', description);
        sessionStorage.setItem('shape', shape);
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <img className="w-full" src={imageSrc} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link to="/ar-scene" onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View AR Experience
                </Link>
            </div>

        </div>
    );
};

export default ProductCard;
