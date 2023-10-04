import React from 'react';
import ProductCard from '../ProductCard'; // Update the import path
// ... rest of your code

const NewArrivals = ({ products }) => {
  return (
    <section className="bg-gray-200 p-11">
      <h2 className="text-xl font-semibold mb-4">New Arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-gray-100 text-black px-4 py-2 rounded-lg">View All</button>
      </div>
    </section>
  );
};

export default NewArrivals;
