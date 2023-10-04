// components/Categories.js

import React from 'react';
import Link from 'next/link';




const Categories = () => {
  return (
    <div className="bg-black w-32 h-screen flex-shrink-0 p-4">
      <div className="text-white font-bold mb-4">CATEGORIES</div>
      <ul>
        <li className="mb-5">
          <Link href="/category">
            <div className="text-white hover:text-blue-500">Men</div>
          </Link>
        </li>
        <li className="mb-5">
          <Link href="/category/Women">
            <div className="text-white hover:text-blue-500">Women</div>
          </Link>
        </li>
        <li className="mb-5">
          <Link href="/category/Kids">
            <div className="text-white hover:text-blue-500">Kids</div>
          </Link>
        </li>
        <li className="mb-5">
          <Link href="/category/Beauty">
            <div className="text-white hover:text-blue-500">Beauty</div>
          </Link>
        </li>
        <li>
          <Link href="/category/Home">
            <div className="text-white hover:text-blue-500">Home</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;

