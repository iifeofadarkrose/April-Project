import { BiTrophy } from "react-icons/bi";

const Awards = () => {
  return (
    <div>
      <h1 className="text-3xl flex justify-center text-[#9E8372] uppercase mb-2">
        Awards
      </h1>

      <div className="bg-[#5F5F5F]">
        <div className="flex justify-center p-4 gap-[10%]">
          <div className="p-1 bg-[#D9D9D9] w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px]">
            <div className="flex items-center justify-between">
              <BiTrophy className="fill-[#BF804B] w-[24px] h-[24px] md:w-[34px] md:h-[34px] lg:w-[54px] lg:h-[54px]" />
              <p className="text-[12px] color-[#707070] md:text-2xl lg:text-4xl">2023</p>
            </div>

            <div className="p-1">
              <h1 className="text-[12px] font-medium md:text-lg lg:text-3xl">Best interrior</h1>
              <p className="text-[8px] font-light md:text-[12px] lg:text-xl">
                For designing <br />
                private house
              </p>
            </div>
          </div>

          <div className="p-1 bg-[#D9D9D9] w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px]">
            <div className="flex items-center justify-between">
              <BiTrophy className="fill-[#BF804B] w-[24px] h-[24px] md:w-[34px] md:h-[34px] lg:w-[54px] lg:h-[54px]" />
              <p className="text-[12px] color-[#707070] md:text-2xl lg:text-4xl">2023</p>
            </div>

            <div className="p-1">
              <h1 className="text-[12px] font-medium md:text-lg lg:text-3xl">Best interrior</h1>
              <p className="text-[8px] font-light md:text-[12px] lg:text-xl">
                For designing <br />
                private house
              </p>
            </div>
          </div>
          <div className="p-1 bg-[#D9D9D9] w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px]">
            <div className="flex items-center justify-between">
              <BiTrophy className="fill-[#BF804B] w-[24px] h-[24px] md:w-[34px] md:h-[34px] lg:w-[54px] lg:h-[54px]" />
              <p className="text-[12px] color-[#707070] md:text-2xl lg:text-4xl">2023</p>
            </div>

            <div className="p-1">
              <h1 className="text-[12px] font-medium md:text-lg lg:text-3xl">Best interrior</h1>
              <p className="text-[8px] font-light md:text-[12px] lg:text-xl">
                For designing <br />
                private house
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
