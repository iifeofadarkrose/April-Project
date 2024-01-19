import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center m-8">
      <Link to="/" className='text-[25px]'>April Design</Link>
      <div className="hidden md:flex gap-8">
        <Link to="/">Home</Link>
        <Link to="#about">About us</Link>
        <Link to="/projects">Our work</Link>
        <Link to="#visualisation">3d visualisation</Link>
        <Link to="#contact">Contact us</Link>
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
            <Link to="/" className="block">Home</Link>
            <Link to="#about" className="block">About us</Link>
            <Link to="/projects" className="block">Our work</Link>
            <Link to="#visualisation" className="block">3d visualisation</Link>
            <Link to="#contact" className="block">Contact us</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
