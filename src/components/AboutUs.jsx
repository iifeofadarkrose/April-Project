import bg1 from "../assets/hero1.png";

const AboutUs = () => {
  return (
    <div className="m-8">
        <h1 className="uppercase text-3xl">About <span className="uppercase text-[#9E8372]">Us</span></h1>
        <div className="flex flex-wrap justify-between">
        <img className="md:w-[50%] mt-4" src={bg1} alt="" />
        <p className="text-sm mt-4">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
        </p>
      </div>
    </div>
  )
}

export default AboutUs