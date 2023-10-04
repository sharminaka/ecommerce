import React from 'react';
import Image from 'next/image';
import Search from '../Search';
import Logo from '@/icons/Logo.png';
import { BiUserCircle } from 'react-icons/bi';
import { HiShoppingCart } from 'react-icons/hi';
import { GoHeart } from 'react-icons/go';
import Link from 'next/link'; // Import the Link component

const Header = ({details}) => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center h-[100px]">
      <div className="flex items-center">
        <Link href="/">
            <Image src={Logo} width="300" height="200" className="cursor-pointer ml-auto" alt="Logo" />
        </Link>
      </div>




      {/* Use Tailwind CSS classes instead of inline styles */}
      <div className="w-full flex justify-center items-end mt-auto mb-0">
        <Search />
      </div>
      <div className="flex items-center space-x-4">
        <HiShoppingCart size={29} className="cursor-pointer" aria-label="Cart" />
        <GoHeart size={28} className="cursor-pointer" />
        <Link href="/LoginPage">
            <BiUserCircle size={28} className="cursor-pointer" />
        </Link>
        
      </div>
    </header>
  );
};

export default Header;