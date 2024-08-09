"use client"
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsContactOpen(false);
  };

  const toggleContactDropdown = () => {
    setIsContactOpen(!isContactOpen);
    setIsServicesOpen(false); 
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
          <div className="relative">
            <button
              onClick={toggleServicesDropdown}
              className="text-white hover:bg-gray-700 px-3 py-2 rounded focus:outline-none"
            >
              Services
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
                <a href="Services/hotel" className="block text-white px-4 py-2 hover:bg-gray-600">
                  Hotel Room Booking
                </a>
                <a href="Services/laundry" className="block text-white px-4 py-2 hover:bg-gray-600">
                  Laundry Services
                </a>
              </div>
            )}
          </div>
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Blog
          </a>
          <div className="relative">
            <button
              onClick={toggleContactDropdown}
              className="text-white hover:bg-gray-700 px-3 py-2 rounded focus:outline-none"
            >
              Contact Us
            </button>
            {isContactOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
                <a href="tel:+254707580670" className="block text-white px-4 py-2 hover:bg-gray-600">
                  Phone Call
                </a>
                <a href="mailto:winceogola@gmail.com" className="block text-white px-4 py-2 hover:bg-gray-600">
                  Email
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
