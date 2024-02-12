import { useTranslation } from "react-i18next";
import bg2 from "../assets/Hero.png";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="m-8 md:m-16" id="about">
      <div className="flex flex-nowrap lg:justify-center">
        <img
          className="h-[150px] w-[150px] md:w-[350px] md:h-[470px] lg:w-[450px] lg:mr-24"
          src={bg2}
          alt=""
        />
        <div className="max-w-[170px] md:max-w-[400px]">
          <h1 className="ml-2 uppercase text-xl md:text-7xl text-[#9E8372]">
            {t("about_us")}
          </h1>
          <p className="flex text-[8px] ml-2 md:m-4 md:mt-10 md:text-xl lg:text-2xl">
            {t("about_us_description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
