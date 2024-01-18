import bg1 from "../assets/hero1.png";

const Hero = () => {
  return (
    <div className="m-8">
      <div className="flex flex-wrap">
        <p className="color-[#202020] text-2xl font-normal w-full">we make</p>
        <div className="flex justify-between w-full">
          <span className="uppercase text-[#9E8372] text-3xl">design</span>
        <button className="bg-[#5F5F5F] text-white  px-[5%] py-[1%]">
          Contact us
        </button>
        </div>
        
        
      </div>
      <div className="flex flex-wrap justify-between">
        <img className="md:w-[50%] mt-4" src={bg1} alt="" />
        <p className="-rotate-90 text-sm hidden">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when
        </p>
      </div>
    </div>
  );
};

export default Hero;
