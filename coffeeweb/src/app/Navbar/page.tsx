
"use client"
import React, { useState } from 'react';
import Link from "next/link";
import logo from "../Assests/logo.png"
import Image from 'next/image';


const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-black bg-opacity-40  fixed w-full z-10 mx-auto h-16 mt-5 text-center text-white">
        <div className="flex justify-between items-center">
          <div className=" items-center mt-2 pl-4">
            <Image className='h-12 w-24' src={logo} alt =""/>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block pt-4 font-bold text-lg">
            <ul className="outline-none flex gap-10 pr-10">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/About">About</Link></li>
              <li><Link href="/Products">Products</Link></li>
              <li><Link href="/Contact">Contact us</Link></li>

            </ul>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="block md:hidden">
            <button onClick={toggleMenu} className="text-4xl text-white p-3">&#8801;</button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-20 flex flex-col items-center justify-center">
          <button onClick={toggleMenu} className="absolute top-5 right-5 text-4xl text-white">&#10006;</button>
          <ul className="text-center text-white text-2xl space-y-6">
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/About" onClick={toggleMenu}>About</Link></li>
            <li><Link href="/Product" onClick={toggleMenu}>Products</Link></li>
            <li><Link href="/Contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Page;

