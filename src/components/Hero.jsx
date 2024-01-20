import bg1 from "../assets/hero1.png";

const Hero = () => {
  return (
    <div className="m-8 flex justify-center md:m-16 mb-20">
      <div className="flex flex-wrap max-h-[100px] lg:max-w-[400px] mr-[20px] ">
        <p className="color-[#202020] text-4xl md:text-6xl lg:text-7xl">
          we make
        </p>
        <div className="flex flex-wrap">
          <span className="uppercase text-[#9E8372] text-5xl md:text-8xl lg:text-11xl">
            design
          </span>
          <button className="bg-[#5F5F5F] text-white text-xl px-[5%] py-[1%] md:text-2xl lg:text-3xl">
            Contact us
          </button>
        </div>
      </div>
      <div className="flex">
        <img className=" w-full md:m-8 lg:w-auto" src={bg1} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
