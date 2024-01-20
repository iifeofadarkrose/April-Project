import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      <div className="flex justify-between lg:justify-center items-center m-8 md:mx-16">
        <Link
          to="/"
          smooth={true}
          duration={500}
          className="text-[20px] md:text-2xl lg:text-4xl lg:mr-[275px]"
          onClick={() => scroll.scrollToTop()}
        >
          <div>April Design</div>
        </Link>
        <div className="hidden md:flex gap-8 md:text-[16px] lg:text-2xl">
          <Link to="/" className="block" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/projects">Our work</Link>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="block cursor-pointer"
            onClick={toggleMenu}
          >
            About us
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="block cursor-pointer"
            onClick={toggleMenu}
          >
            Contact us
          </ScrollLink>
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
  <div className="absolute bg-white py-2 px-4 border border-solid border-gray-300 shadow-md rounded-lg z-50 top-full mt-2 right-0">
    <Link
      to="/projects"
      className="block cursor-pointer"
      onClick={toggleMenu}
      style={{ whiteSpace: 'nowrap' }}
    >
      Our work
    </Link>
    <ScrollLink
      to="about"
      smooth={true}
      duration={500}
      className="block cursor-pointer"
      onClick={toggleMenu}
      style={{ whiteSpace: 'nowrap' }}
    >
      About us
    </ScrollLink>
    <ScrollLink
      to="contact"
      smooth={true}
      duration={500}
      className="block cursor-pointer"
      onClick={toggleMenu}
      style={{ whiteSpace: 'nowrap' }}
    >
      Contact us
    </ScrollLink>
  </div>
)}

        </div>
      </div>
    </div>
  );
};

export default Header;
