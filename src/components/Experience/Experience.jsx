import React from "react";
import exp from "../../assets/images/Rectangle 6.png";

const Experience = () => {
  return (
    <>
      <section className="mb-25">
        <div className="container">
          <div className="flex justify-between">
            <div className="w-[46%] mt-9.5">
              <h2 className="text-[45px] font-lato font-semibold text-[#000000] leading-[54px] mb-7.25 pr-41">
                Experience the power of Corewave
              </h2>

              <p className="text-[18px] font-lato font-normal text-[#7b7b7b] leading-6.5 mb-11.25">
                Are you ready to take your business to the next level? Look no further than Corewave. Our innovative technology and expert team can help you unlock your business's full potential. By harnessing the power of Corewave, you can streamline your operations, improve efficiency
              </p>
               <div className="btn">
                        <button className='py-3.5 px-6.25 text-[16px ] cursor-pointer font-lato font-semibold bg-[#DAF6EB] text-[#06C279] rounded-[5px]'>Learn More</button>
                    </div>
            </div>
            <div className="w-[45%]">
              <img src={exp} alt="Experience" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
