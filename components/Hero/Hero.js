import React from 'react';
import Carousel from './Carousel'; // Import your Carousel component or banner image

const Hero = () => {
  return (
    <section className="bg-gray-900">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Discover Our Latest Collection</h1>
            <p className="text-white mb-8">Explore a wide range of high-quality products and exclusive offers.</p>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-200">
              Shop Now
            </button>
          </div>
          <div>
            <Carousel /> {/* Render your Carousel or banner image component here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
