import React from 'react'
// import Header from '../components/Header';
import NewArrivals from '../components/NewArrivals'
import Image from 'next/image'
import Link from 'next/link'
import Categories from '../components/Categories'



const fakeProducts = [
  {
    id:1,
    name: 'Product 1',
    image: '/images/product9.jpg',
    rating: 3.0,
    price: 50,
  },
  {
    id:2,
    name: 'Product 2',
    image: '/images/product3.jpg',
    rating: 3.0,
    price: 65,
  },
  {
    id:3,
    name: 'Product 3',
    image: '/images/product11.jpg',
    rating: 5.0,
    price: 80,
  },
  {
    id:4,
    name: 'Product 4',
    image: '/images/product13.jpg',
    rating: 4.0,
    price: 30,
  },
  {
    id:5,
    name: 'Product 5',
    image: '/images/product15.jpg',
    rating: 4.0,
    price: 85,
  },
  {
    id:6,
    name: 'Product 6',
    image: '/images/product16.jpg',
    rating: 50,
    price: 55,
  },
  // Add more fake products
];


const HomePage = () => {
  return (
   <div className="h-screen flex">
        <Categories />
    
    
     

      {/* Content section */}
      <div className="ml- 16">
        {/* Header */}
      

      {/* Black square element */}
      {/*<div className="bg-black h-full w-16 absolute left-0 top-0 bottom-0" />*/}
      {/* Rest of your content */}
      <NewArrivals products={fakeProducts} />
      <div className="flex justify-between bg-black">
         {/* Add a margin-left to push the content to the right */}
         <div className="ml-8">
          </div>
      </div>
      {/* Other content */}
    </div>
   </div>
  );
};
export default HomePage; 