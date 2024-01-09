import { useState } from 'react';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div className="flex justify-between items-center m-4">
        <a href="#home" className='text-[25px]'>April Design</a>
        <div className="hidden md:flex gap-8">
          <a href="#home">Home</a>
          <a href="#about">About us</a>
          <a href="#projects">Our work</a>
          <a href="#visualisation">3d visualisation</a>
          <a href="#contact">Contact us</a>
        </div>
        <div className="md:hidden relative">
          <svg
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
          {isMenuOpen && (
            <div className="absolute bg-white py-2 px-4 border shadow-md rounded-lg z-10 top-full mt-2 right-0">
              <a href="#home" className="block">Home</a>
              <a href="#about" className="block">About us</a>
              <a href="#projects" className="block">Our work</a>
              <a href="#visualisation" className="block">3d visualisation</a>
              <a href="#contact" className="block">Contact us</a>
            </div>
          )}
        </div>
      </div>
    );
  };
