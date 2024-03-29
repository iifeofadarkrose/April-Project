import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import en from "../locales/en.json";
import fr from "../locales/fr.json";

const Header = () => {
  const { t, i18n } = useTranslation("translation", {
    defaultNS: "translation",
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "En"
  );

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage.toLowerCase());
  }, [selectedLanguage, i18n]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    localStorage.setItem("selectedLanguage", language);
  };

  return (
    <div className="sticky top-0 z-50 bg-white border-b-[1px] border-[#CACACA] ">
      <div className="flex justify-between lg:justify-center items-center md:mx-10 p-4">
        <Link
          to="/"
          smooth={true}
          duration={500}
          className="text-[20px] md:text-xl lg:text-[30px] lg:mr-[175px] transition duration-300 ease-in-out hover:text-[#9E8372] transform hover:scale-105"
          onClick={() => scroll.scrollToTop()}
        >
          <div>{t("title")}</div>
        </Link>

        <div className="hidden md:flex gap-8 md:text-[16px] lg:text-[20px] xl:text-[24px]">
          <Link to="/" className="block transition duration-300 ease-in-out hover:text-[#9E8372] transform hover:scale-105">
            {t("home")}
          </Link>
          <Link to="/projects" className="transition duration-300 ease-in-out hover:text-[#9E8372] transform hover:scale-105">
            {t("our_work")}
          </Link>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="block cursor-pointer transition duration-300 ease-in-out hover:text-[#9E8372] transform hover:scale-105"
          >
            {t("about_us")}
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="block cursor-pointer transition duration-300 ease-in-out hover:text-[#9E8372] transform hover:scale-105"
          >
            {t("contact_us")}
          </ScrollLink>
        </div>

        <div className="flex md:flex items-center">
          <div className="mx-2 md:mx-8 relative">
            <button
              onClick={toggleDropdown}
              className="px-2 py-2 text-gray-700 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:bg-gray-300 flex items-center"
            >
              {selectedLanguage}
              <svg
                className="w-4 h-4 ml-2 mt-1 md:mt-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 13.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 11.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute mt-2  w-12 bg-white border border-gray-400 rounded-md shadow-lg z-10">
                <button
                  onClick={() => selectLanguage("En")}
                  className="block w-full px-4 py-2 text-gray-800 text-center hover:bg-gray-100 focus:outline-none"
                >
                  En
                </button>
                <button
                  onClick={() => selectLanguage("Fr")}
                  className="block w-full px-4 py-2 text-center text-gray-800 hover:bg-gray-100 focus:outline-none"
                >
                  Fr
                </button>
              </div>
            )}
          </div>

          <svg
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer md:hidden"
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
            <div className="absolute bg-white py-2 px-4 border border-solid border-gray-300 shadow-md rounded-lg z-50 mt-44 right-8">
              <Link to="/" className="block" onClick={toggleMenu}>
                {t("home")}
              </Link>
              <Link
                to="/projects"
                className="block cursor-pointer"
                onClick={toggleMenu}
                style={{ whiteSpace: "nowrap" }}
              >
                {t("our_work")}
              </Link>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="block cursor-pointer"
                onClick={toggleMenu}
                style={{ whiteSpace: "nowrap" }}
              >
                {t("about_us")}
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="block cursor-pointer"
                onClick={toggleMenu}
                style={{ whiteSpace: "nowrap" }}
              >
                {t("contact_us")}
              </ScrollLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
