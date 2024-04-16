import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ imageSrc, title, description, link }) => {
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
                <Link to={link} className="inline-block bg-blue-500 text-white py-2 px-4 rounded-full cursor-pointer text-center">
                    Enter AR Experience
                </Link>

            </div>
        </div>
    );
};

export default ProductCard;