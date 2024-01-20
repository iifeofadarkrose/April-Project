
import bg2 from "../assets/Hero.png";
const AboutUs = () => {
  return (
    <div className="m-8 md:m-16" id="about">
      <div className="flex flex-nowrap lg:justify-center">
        <img
          className="h-[230px] w-[200px] md:w-[350px] md:h-[470px] lg:mr-24"
          src={bg2}
          alt=""
        />
        <div className="max-w-[170px] md:max-w-[400px]">
          <h1 className="ml-2 uppercase text-xl md:text-7xl text-[#9E8372]">
            About <span className="uppercase text-[#9E8372]">Us</span>
          </h1>
          <p className="flex text-[8px] ml-2 md:m-4 md:mt-10 md:text-sm lg:text-xl">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of lettersIt is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters{" "}
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
