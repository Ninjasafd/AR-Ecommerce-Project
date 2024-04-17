import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from './ProductContext';

const ProductCard = ({ imageSrc, title, description }) => {
    const { product, setProduct } = useContext(ProductContext);

    const handleClick = () => {
        setProduct({ title, description });
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <img className="w-full" src={imageSrc} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link to="/ar-scene" onClick={handleClick}>
                    View AR Experience
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
