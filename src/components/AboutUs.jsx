import bg2 from "../assets/Hero.png";
const AboutUs = () => {
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
            About <span className="uppercase text-[#9E8372]">Us</span>
          </h1>
          <p className="flex text-[8px] ml-2 md:m-4 md:mt-10 md:text-xl lg:text-2xl">
            We seamlessly blend aesthetics and functionality in crafting
            residential and public spaces. From striking exteriors to meticulous
            reconstructions, we specialize in creating captivating environments
            within specified budgets. Lets bring your visions to life with
            elegance and finesse.
          </p>
          {/* <img
            className=" ml-2 h-[155px] w-full md:mt-[10%] md:ml-[5%] md:w-[350px] md:h-[180px] md:flex"
            src={bg1}
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
