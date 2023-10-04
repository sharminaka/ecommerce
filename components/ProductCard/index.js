"use client"
import React from 'react';
import Link from 'next/link';
import StarRating from '../StarRating';


import { useRouter } from 'next/navigation'  
// import { useState } from 'react';
const ProductCard = ({ product }) => {
  // const router = useRouter();
  

  // const handleProductClick = () => {
  //   router.push({
  //     pathname: `/productdescription/${String(product.id)}`,
  //     query: { unique_id: product.id },
  //   });
  // };
  return (
    <div className="bg-white text-black rounded-lg shadow-md p-0 mb-1 flex">
      <div className="w-4/5 p-4" >
       <Link href={"/Productdescription"}>
      
         <img
           src={product.image}
           alt={product.name}
           className="w-full h-auto mb-1 cursor-pointer"
          />
         </Link>
     

        <div className="bg-white text-black rounded-lg shadow-md p-0 mb-1">
          <div className="w-full p-4">
            
            <p className="text-lg font-semibold text-center mt-2 mb-1">{product.name}</p>
            <p className="text-lg font-semibold text-center mt-1 mb-2">From ${product.price}</p>
            <div className="flex justify-center items-center">
              <StarRating rating={product.rating} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
