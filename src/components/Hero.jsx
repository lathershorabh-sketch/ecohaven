import React from "react";
import { Movement } from "./Icons";

const Hero = () => {
  return (
    <>
      <section>
        <h1 className="text-medium-white leading-[100%] font-bold text-[36px] sm:text-[60px] lg:text-[90.86px] max-w-100 sm:max-w-140 lg:max-w-227 w-full mx-auto mt-10 md:mt-15 lg:mt-24 tracking-wider pl-5 lg:px-0 pr-10 lg:pr-0  overflow-hidden sm:overflow-visible">
          <p>
            TOGETHER,
            <span className="text-[#AEFFA2] text-[24px] sm:text-[40px] lg:text-[67.62px]">
              HAND IN HAND
            </span>
          </p>
          <p className="ml-auto w-fit">RESTORING EARTH’S </p>
          <p className="w-fit ml-auto -mt-12 sm:-mt-7 lg:-mt-3 flex items-center">
            HEALTH
            <span className="-mr-7 sm:-mr-17 -mt-2 sm:-mt-5 overflow-hidden hover:drop-shadow-[0_0_25px_rgba(59,530,546,10.9)] hover:scale-101  transition-all duration-300 ease-in-out">
              <Movement />
            </span>
          </p>
        </h1>
        <div className="flex justify-evenly xl:justify-between items-end mx-5 xl:mx-12.5  gap-5 2xl:gap-0 mt-0 xl:-mt-36">
          <div className="  max-w-50 md:max-w-60 lg:max-w-80  xl:max-w-106 h-55 md:h-75 lg:h-90 xl:h-137.25 -rotate-12 md:rotate-0 -mr-50 md:mr-0">
            <img
              className="h-full w-full object-cover hover:drop-shadow-[0_0_25px_rgba(0,255,0,0.9)] hover:scale-101  transition-all duration-300 ease-in-out"
              src="./src/assets/Plantimg.png"
              alt="plantimg"
            />
          </div>
          <div className=" max-w-50 sm:max-w-65 md:max-w-75 lg:max-w-90  xl:max-w-106 h-40 sm:h-50 md:h-57 sm:65 lg:h-70 xl:h-77.5 z-10 md:z-0">
            <img
              className=" object-cover w-full h-full hover:drop-shadow-[0_0_25px_rgba(59,530,546,10.9)] hover:scale-101 transition-all duration-300 ease-in-out"
              src="./src/assets/Earthimg.png"
              alt="earthimg"
            />
          </div>
          <div className="max-w-50 md:max-w-60 lg:max-w-80  xl:max-w-106 h-55 md:h-75 lg:h-90 xl:h-131.5  rotate-12 md:rotate-0 -ml-50 md:ml-0">
            <img
              className="object-cover h-full w-full hover:drop-shadow-[0_0_25px_rgba(0,255,0,0.9)] hover:scale-101  transition-all duration-300 ease-in-out"
              src="./src/assets/Natureimg.png"
              alt="natureimg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
