import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from "react-scroll";
import en from "../locales/en.json";
import fr from "../locales/fr.json";

const WorkHeader = () => {
  const { t } = useTranslation("translation", {
    defaultNS: "translation",
    resources: {
      en: { translation: en },
      fr: { translation: fr }
    }
  });

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
          className="text-[20px] md:text-2xl lg:text-4xl lg:mr-[175px]"
          onClick={() => scroll.scrollToTop()}
        >
          <div>{t("title")}</div>
        </Link>
        <div className="hidden md:flex gap-8 md:text-[16px] lg:text-2xl">
          <Link to="/" className="block" onClick={toggleMenu}>
            {t("home")}
          </Link>
          <Link to="/projects">{t("our_work")}</Link>
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
            </div>
          )}
        </div>
    
         
            
          </div>
        </div>
     
    
  );
};

export default WorkHeader;
