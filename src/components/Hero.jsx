import { useTranslation } from "react-i18next";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import bg1 from "../assets/images/bg.jpg";

const Hero = () => {
  const { t } = useTranslation();

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <div className="h-screen md:h-screen bg-cover bg-center relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>{" "}
      {/* Элемент для затемнения */}
      <div className="absolute top-[25%] left-[20%] right-0 m-8 flex flex-wrap max-h-[100px] lg:max-w-[400px] mr-[20px]">
        <p className="w-full text-white text-4xl md:text-5xl lg:text-6xl">
          {t("we_make")}
        </p>
        <div className="flex flex-wrap">
          <span className="uppercase text-[#9E8372] text-5xl md:text-8xl lg:text-11xl">
            {t("design")}
          </span>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="bg-[#9E8372]  text-white border-3  w-fittext-xl px-[5%] py-[1%] md:text-2xl lg:text-4xl cursor-pointer  border-white hover:border-sm hover:border"
            onClick={scrollToBottom}
          >
            {t("contact_us_button")}
          </ScrollLink>
        </div>
      </div>
      <img
        src={bg1}
        alt="Background"
        className="w-full h-full object-cover z-0"
      />{" "}
    </div>
  );
};

export default Hero;
