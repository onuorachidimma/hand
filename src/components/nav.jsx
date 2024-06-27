import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import StartProjectButton from './startProject';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-200 px-6 lg:px-32 py-4">
      <div className="container  mx-auto flex items-center justify-between">
        <a className="text-xl font-bold" href="#">
          Hand
        </a>

        {/* Hamburger button for mobile */}
        <button
          className="block lg:hidden p-2 border rounded text-gray-700"
          onClick={toggleNavbar}
          aria-controls="navbarNavAltMarkup"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <svg
            className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Regular navbar for large screens */}
        <div className=" hidden lg:flex w-full lg:w-auto">
          <div className="flex items-center flex-row space-x-4">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-pink-600 cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="aboutUs"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-pink-600 cursor-pointer"
              offset={-100}
            >
              About Us
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-pink-600 cursor-pointer"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="blog"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-pink-600 cursor-pointer"
            >
              Blog
            </ScrollLink>
            <ScrollLink
              to="form"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-pink-600 cursor-pointer"
              offset={-270}
            >
              Contact Us
            </ScrollLink>
          </div>

          
        </div>
<div className='hidden lg:flex w-full lg:w-auto'>
<StartProjectButton />

</div>
        {/* ############### Modal sidebar for mobile ################ */}
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex justify-end pt-4 pr-4">
            <button
              className="text-gray-200 hover:text-white focus:outline-none"
              onClick={closeNavbar}
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div className="flex flex-col  h-full p-8">
            <div className="flex flex-col space-y-4">
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="text-gray-200 hover:text-white cursor-pointer"
                onClick={closeNavbar}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="aboutUs"
                smooth={true}
                duration={500}
                className="text-gray-200 hover:text-white cursor-pointer"
                onClick={closeNavbar}
              >
                About Us
              </ScrollLink>
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                className="text-gray-200 hover:text-white cursor-pointer"
                onClick={closeNavbar}
              >
                Services
              </ScrollLink>
              <ScrollLink
                to="blog"
                smooth={true}
                duration={500}
                className="text-gray-200 hover:text-white cursor-pointer"
                onClick={closeNavbar}
              >
                Blog
              </ScrollLink>
              <ScrollLink
                to="form"
                smooth={true}
                duration={500}
                className="text-gray-200 hover:text-white cursor-pointer"
                onClick={closeNavbar}
                offset={-200}
              >
                Contact Us
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
