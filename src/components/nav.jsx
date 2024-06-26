import React, { useState } from 'react';
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="bg-gray-200 px-32 py-7">
        <div className="container mx-auto flex items-center justify-between">
          <a className="text-xl font-bold" href="#">Hand</a>
          
          <div className={`${isOpen ? 'block' : 'hidden'} lg:flex w-full lg:w-auto`} id="navbarNavAltMarkup">
            <div className="flex flex-col lg:flex-row lg:space-x-4 mt-2 lg:mt-0">
              <a className="text-gray-700 hover:text-pink-600" href="#">Home</a>
              <a className="text-gray-700 hover:text-pink-600" href="#">About Us</a>
              <a className="text-gray-700 hover:text-pink-600" href="#">Services</a>
              <a className="text-gray-700 hover:text-pink-600" href="#">Blog</a>
              <a className="text-gray-700 hover:text-pink-600" href="#">Contact Us</a>
            </div> 
          </div>

          <div className={`${isOpen ? 'block' : 'hidden'} lg:flex w-full lg:w-auto`}>
            <button className="w-40 h-12 rounded-lg bg-gray-900 text-white">
                Start a project
            </button>
          </div>

          <button
            className="block lg:hidden p-2 border rounded text-gray-700"
            onClick={toggleNavbar}
            aria-controls="navbarNavAltMarkup"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
    );
  };


export default NavBar



