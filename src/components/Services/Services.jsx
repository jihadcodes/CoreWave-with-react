import React from "react";

const Services = () => {
  return (
    <>
      <section className="py-[70px] bg-[#EEFFF9]">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="w-[50%]"></div>
            <div className="w-[41%]">
              <h2 className="text-[45px] font-lato font-semibold text-[#000000] leading-[54px] mb-7.5 pr-41">
                We offer a variety of
services such as
              </h2>

              <p className="text-[16px] font-lato font-normal text-[#7b7b7b] leading-6.5 mb-7.5">
              At our company, we pride ourselves on offering a variety of services to meet the diverse needs of our clients. Whether you're looking for marketing assistance, website design, or IT support, we've got you covered
              </p>
              <div className="btn">
                <button className="py-3.5 px-6.25 text-[16px ] cursor-pointer font-lato font-semibold bg-[#DAF6EB] text-[#06C279] rounded-[5px]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
