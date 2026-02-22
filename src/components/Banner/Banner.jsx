import React from "react";
import banner from "../../assets/images/bn.png";
import { TbPlayerPlayFilled } from "react-icons/tb";

const Banner = () => {
  return (
    <>
      {/* <section className="bg-[#EEFFF9]">
        <div className="container">
          <div className="flex  ">
            <div className="b-left w-[45%] mt-[116px] mr-[141px]">
              <h1 className="text-[60px] font-lato font-light  text-[#1b1b1b] leading-[71.5px] mb-9.25">
                Empower Your Team{" "}
                <span className="font-bold">With CoreWave's</span>
              </h1>
              <p className="text-[20px] font-lato font-normal  text-[#717171] leading-[30px] mb-12.75">
                Boost Productivity and Wellness in Your Organization with
                CoreWave's Advanced Tools and Techniques
              </p>
              <div className="btn flex  gap-5">
                        <button className='py-3.5 px-6.25 text-[16px ] font-lato font-semibold bg-[#06C279] text-white rounded-[5px]'>Explore More</button>
                        <button className='py-3.5 px-6.25 text-[16px ] font-lato font-semibold border-[2px] border-[#06C279] text-[#1B1B1B] rounded-[5px] flex gap-3 items-center '>
                            <div className="w-5 h-5 rounded-[42px] bg-[#DAF6EB] flex justify-center items-center">
                                <TbPlayerPlayFilled className="text-[#06C279] " />
                            </div>
                            Watch Video
                            </button>
                    </div>
            </div>

            <div className="b-roght w-[55%] mt-6.5">
              <img src={banner} alt="" />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Banner;
