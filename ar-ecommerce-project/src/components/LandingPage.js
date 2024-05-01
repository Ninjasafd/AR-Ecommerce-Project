import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import './LandingPage.css';

const LandingPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setIsLoading(true); // Start loading
        fetch('http://localhost:443/api/products/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                console.log(data)
                setIsLoading(false); // Stop loading once data is fetched
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setIsLoading(false); // Stop loading on error
            });
    }, []);



    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <div className="landing-container ">
            <header className="hero-section">
                <h1 className="text-4xl font-bold">Welcome to Jeffrey's E-commerce AR Website!</h1>
                <p className="text-xl mt-4">Check out some of the products below!</p>
                <button className="mt-8 bg-blue-500 text-white py-2 px-4 rounded-full cursor-pointer">
                    Show Me Around
                </button>
            </header>
            <section className="flex justify-center gap-5 py-12 flex-wrap">
                {isLoading ? (
                    <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-8 w-8 border-4 border-t-blue-500 border-blue-200"></div>
                        <span className="text-lg font-medium">Loading...</span>
                    </div>
                ) : (
                    products.map((product, index) => (
                        <ProductCard
                            key={product._id}
                            imageSrc={product.imageSrc}
                            title={product.title}
                            description={product.description}
                            link={product.link}
                            shape={product.shape}
                        />
                    ))
                )}
            </section>

            <button
                onClick={scrollToTop}
                className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer fixed bottom-4 right-4 shadow transition duration-300 ease-in-out hover:shadow-lg">
                ↑ Top
            </button>

        </div>
    );
};

export default LandingPage;
