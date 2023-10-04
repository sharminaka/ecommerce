import React from 'react';
import ProductCard from '../ProductCard'; // Import the ProductCard component
import { fakeProducts } from './fakeProducts'; // Import the product data

const ProductList = () => {
  return (
    <div className="flex flex-wrap justify-end">
      {fakeProducts.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
