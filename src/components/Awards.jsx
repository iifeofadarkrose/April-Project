import { GiTrophyCup } from "react-icons/gi";

const Awards = () => {
  return (
    <div>
      <h1 className="text-5xl md:text-7xl my-12 flex justify-center text-[#9E8372] uppercase mb-2">
        Awards
      </h1>
      <div className="bg-[#5F5F5F]">
        <div className="flex justify-center p-4 gap-[10%] py-10">

        <div className="p-[6px] lg:p-[24px] shadow-lg ring-1 ring-inset ring-[#7C7C7C] w-[110px] h-[110px] md:w-[160px] md:h-[160px] lg:w-[270px] lg:h-[270px] cursor-pointer hover:ring-white hover:ring-2 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <GiTrophyCup className="fill-[#ffffff] w-[16px] h-[16px] md:w-[34px] md:h-[34px] lg:w-[54px] lg:h-[54px]" />
            </div>

            <div className="pt-1">
              <h1 className="text-[8px] md:text-[12px] font-medium text-white md:text-lg lg:text-[20px]">Best art object</h1>
              <p style={{ fontFamily: 'Poppins' }} className="text-[7px] md:text-[12px] lg:text-[17px] text-[#CACACA]">
                «Vodoparad»<br />
                The internationally recognized festival of object design has been held annually in Kharkiv since 2001.
              </p>
            </div>
          </div>

          
          <div className="p-[6px] lg:p-[24px] shadow-lg ring-1 ring-inset ring-[#7C7C7C] w-[110px] h-[110px] md:w-[160px] md:h-[160px] lg:w-[270px] lg:h-[270px] cursor-pointer hover:ring-white hover:ring-2 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <GiTrophyCup className="fill-[#ffffff] w-[16px] h-[16px] md:w-[34px] md:h-[34px] lg:w-[54px] lg:h-[54px]" />
            </div>

            <div className="pt-1">
              <h1 className="text-[8px] md:text-[12px] font-medium text-white md:text-lg lg:text-[20px]">The lights competition </h1>
              <p style={{ fontFamily: 'Poppins' }} className="text-[7px] md:text-[12px] lg:text-[17px] text-[#CACACA]">
              «Vodoparad»<br/>
              The internationally recognized festival of object design has been held annually in Kharkiv since 2001.
              </p>
            </div>
          </div>

          
          <div className="p-[6px] lg:p-[24px] shadow-lg ring-1 ring-inset ring-[#7C7C7C] w-[110px] h-[110px] md:w-[160px] md:h-[160px] lg:w-[270px] lg:h-[270px] cursor-pointer hover:ring-white hover:ring-2 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <GiTrophyCup className="fill-[#ffffff] w-[16px] h-[16px] md:w-[34px] md:h-[34px] lg:w-[54px] lg:h-[54px]" />
           
            </div>

            <div className="pt-1">
              <h1 className="text-[8px] md:text-[12px] font-medium text-white md:text-lg lg:text-[20px]">Munich competition</h1>
              <p className="text-[7px] font-light md:text-[12px] lg:text-[17px] text-[#CACACA]">
              «Vodoparad»<br/>
              The internationally recognized festival of object design has been held annually in Kharkiv since 2001.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Awards;
