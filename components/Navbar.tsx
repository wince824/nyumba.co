"use client"
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 py-4 md:py-6 w-full">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <div className="text-white text-lg font-bold">
          <span className="hidden md:inline">Logo</span>
          <span className="md:hidden text-2xl">L</span>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-4 space-y-4 md:space-y-0`}
        >
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Home
          </a>
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Services
          </a>
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Blog
          </a>
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;