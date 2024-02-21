import { useTranslation } from "react-i18next";
import bg2 from "../assets/hero1.png";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="container mx-auto my-12 py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-center items-center gap-8">
        <div className="max-w-lg">
          <h1 className="text-5xl md:text-6xl lg:text-7xl uppercase text-[#9E8372]">
            {t("about_us")}
          </h1>
          <p className="flex text-lg md:my-4 md:text-xl lg:text-2xl">
            {t("about_us_description")}
          </p>
          {/* <div className="mt-8">
            <a
              href="#"
              className=" text-[#9E8372] hover:text-blue-600 font-medium text-xl"
            >
              Learn more about us
              <span className="ml-2">&#8594;</span>
            </a>
          </div> */}
        </div>
        <div className="mt-12 md:mt-0">
          <img
            src={bg2}
            alt="About Us Image"
            className="object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
