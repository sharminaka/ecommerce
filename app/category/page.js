"use client"

import React from 'react';
import ProductCard from "@/components/ProductCard"
import products from "@/components/menProducts"
import Image from 'next/image';


const MenPage = () => {
  return (
    <div className="men-page">
      <h1>Men's Products</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MenPage;
