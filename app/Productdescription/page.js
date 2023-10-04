"use client"
import React from 'react';
import './Productdescription.css'; 
import Image from 'next/image';
import { useState } from 'react';
const Productdescription = () => {
   const[showMen, setshowMen] = useState(false)
   
    const handleClick = () => {
      setshowMen(!showMen)
    }
  const products = [
    {
      id:1,
      name: 'Product 1',
      image: '/images/product9.jpg',
      description: 'Mini city bag in denim fabric. Top handles and long adjustable and detachable crossbody strap. Magnetic clasp closure.',
  
    },
    {
      id:2,
      name: 'Product 2',
      image: '/images/product3.jpg',
      description: 'Mini city bag in denim fabric. Top handles and long adjustable and detachable crossbody strap. Magnetic clasp closure.',
  
    },
    {
      id:3,
      name: 'Product 3',
      image: '/images/product11.jpg',
      description: 'Mini city bag in denim fabric. Top handles and long adjustable and detachable crossbody strap. Magnetic clasp closure.',
    },
    {
      id:4,
      name: 'Product 4',
      image: '/images/product13.jpg',
      description: 'Mini city bag in denim fabric. Top handles and long adjustable and detachable crossbody strap. Magnetic clasp closure.',
    },
    {
      id:5,
      name: 'Product 5',
      image: '/images/product15.jpg',
      description: 'Mini city bag in denim fabric. Top handles and long adjustable and detachable crossbody strap. Magnetic clasp closure.',
    },
    {
      id:6,
      name: 'Product 6',
      image: '/images/product16.jpg',
      description: 'Mini city bag in denim fabric. Top handles and long adjustable and detachable crossbody strap. Magnetic clasp closure.',
    },
    
  ];

  // Find the selected product based on the id parameter


  

  return (

     <div className="product-description">
      {/* Left side with image */}
      
      <div className="product-image">
      {showMen ?
        <Image
          src='/images/product19.jpg'
          alt="Image not found"
          width={500}
          height={500}
          objectFit="contain"
        />:  <Image
        src='/images/product9.jpg'
        alt="Image not found"
        width={500}
        height={500}
        objectFit="contain"
      />}
        <button className="button"style={{backgroundColor:"blue"}} onClick={handleClick}>click</button>
      </div>
     

      {/* Right side with details */}
      <div className="product-details">
        <h1 className="product-title">Product Title</h1>
        <p className="product-description-text">Product Description</p>
        <div className="product-buttons">
          <button className="product-button">Add to Cart</button>
          <button className="product-button">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Productdescription;
