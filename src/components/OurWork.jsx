
import bg1 from '../assets/hero1.png';

const OurWork = () => {
  return (
    <div className="m-8" id="projects">
      <h1 className="uppercase text-3xl">
        Our <span className="uppercase text-[#9E8372]">Work</span>
      </h1>
      <div className="grid grid-cols-1">
        <img className="mt-4" src={bg1} alt="" />
        <h2 className="text-lg">Minimal Bedroom</h2>
        <p className="text-sm">Decor / Artchitecture</p>
        <img className="mt-4" src={bg1} alt="" />
        <h2 className="text-lg">Minimal Bedroom</h2>
        <p className="text-sm">Decor / Artchitecture</p>
        <img className="mt-4" src={bg1} alt="" />
        <h2 className="text-lg">Minimal Bedroom</h2>
        <p className="text-sm">Decor / Artchitecture</p>
      </div>
    </div>
  );
};

export default OurWork;
