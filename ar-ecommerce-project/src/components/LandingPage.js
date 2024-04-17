import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import './LandingPage.css';

const LandingPage = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };

    const products = [
        {
            imageSrc: 'https://media.istockphoto.com/id/1368342833/photo/end-table-round-coffee-table-isolated-on-white.jpg?s=612x612&w=0&k=20&c=pOOmk6eyEfiv1x8toQkPWjDmTfBYJ9y5y2RTIaEBeGU=',
            title: 'End Table',
            description: 'Elegant end table, perfect for any setting.',
            link: '/ar-scene'
        },
        {
            imageSrc: 'https://www.ikea.com/us/en/images/products/stefan-chair-brown-black__0727320_pe735593_s5.jpg?f=s',
            title: 'STEFAN Chair',
            description: 'Classic design with a solid wood construction.',
            link: '/ar-scene'
        },
        {
            imageSrc: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/4425e81a-baa8-4b61-a057-45ae5c62db4c/2686d731-7c97-4966-ae36-1a27c9a0f9a8.png',
            title: 'PLACEHOLDER',
            description: 'This is a placeholder for a product.',
            link: '/ar-scene'
        },
        {
            imageSrc: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/4425e81a-baa8-4b61-a057-45ae5c62db4c/2686d731-7c97-4966-ae36-1a27c9a0f9a8.png',
            title: 'PLACEHOLDER',
            description: 'This is a placeholder for a product.',
            link: '/ar-scene'
        },
        {
            imageSrc: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/4425e81a-baa8-4b61-a057-45ae5c62db4c/2686d731-7c97-4966-ae36-1a27c9a0f9a8.png',
            title: 'PLACEHOLDER',
            description: 'This is a placeholder for a product.',
            link: '/ar-scene'
        },
    ];

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

            <button
                onClick={scrollToTop}
                className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer fixed bottom-4 right-4 shadow transition duration-300 ease-in-out hover:shadow-lg">
                ↑ Top
            </button>

        </div>
    );
};

export default LandingPage;
