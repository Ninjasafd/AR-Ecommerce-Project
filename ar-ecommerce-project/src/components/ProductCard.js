import React from 'react';

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
          <a href={link} className="text-indigo-600 hover:text-indigo-900" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </div>
      </div>
    );
  };
  
  export default ProductCard;