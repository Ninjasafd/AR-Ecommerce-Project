import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import './LandingPage.css';

const LandingPage = () => {
    // Array of products to be displayed
    const products = [
        {
            imageSrc: 'https://media.istockphoto.com/id/1368342833/photo/end-table-round-coffee-table-isolated-on-white.jpg?s=612x612&w=0&k=20&c=pOOmk6eyEfiv1x8toQkPWjDmTfBYJ9y5y2RTIaEBeGU=',
            title: 'End Table',
            description: 'Elegant end table, perfect for any setting.',
            link: 'https://www.example.com/end-table'
        },
        {
            imageSrc: 'https://www.ikea.com/us/en/images/products/stefan-chair-brown-black__0727320_pe735593_s5.jpg?f=s',
            title: 'STEFAN Chair',
            description: 'Classic design with a solid wood construction.',
            link: 'https://www.ikea.com/us/en/p/stefan-chair-brown-black-00211088/'
        },
    ];

    return (
        <div className="landing-container">
            <header className="hero-section">
                <h1 className="text-4xl font-bold">Welcome to Jeffrey's E-commerce AR Website!</h1>
                <p className="text-xl mt-4">Check out some of the products below!</p>
                <button className="mt-8 bg-blue-500 text-white py-2 px-4 rounded-full cursor-pointer">
                    Show Me Around
                </button>
            </header>
            <section className="flex justify-center gap-5 py-12 flex-wrap">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        imageSrc={product.imageSrc}
                        title={product.title}
                        description={product.description}
                        link={product.link}
                    />
                ))}
            </section>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full cursor-pointer">
                <Link to="/ar-scene">Enter AR Experience</Link>
            </button>
        </div>
    );
};

export default LandingPage;