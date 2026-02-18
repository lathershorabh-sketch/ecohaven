import React from "react";
import { Fivestar, Fiveyellowstar, Google, Greenstar } from "./Icons";

const Customers = () => {
  return (
    <>
      <section className="text-medium-white">
        <h2 className="text-3xl sm:text-[40] lg:text-[60px] text-medium-white text-center mb-5 lg:mb-13.5">
          What Our Customers{" "}
          <span className="text-medium-green">Are Saying</span>
        </h2>
        <div className="max-w-156 w-full flex flex-col sm:flex-row items-center justify-between mx-auto mb-15 gap-5 sm:gap-0">
          <div className="py-6.25 px-8.5 rounded-2xl border border-medium-green max-w-75 w-full">
            <div className="max-w-57.25 text-center">
              <div className="flex items-center justify-center mb-2.5 gap-1.5">
                <Greenstar />
                <p className="text-[32px]">Trustpilot</p>
              </div>
              <div className="flex justify-center mb-3">
                <Fivestar />
              </div>
              <div className="flex items-center justify-between">
                <p>4.9 Stars </p>
                <p className="w-1 h-5 bg-medium-white"></p>
                <p>359 reviews</p>
              </div>
            </div>
          </div>
          <div className="py-6.25 px-8.5 rounded-2xl border border-medium-green max-w-75 w-full">
            <div className="max-w-57.25 text-center">
              <div className="flex items-center justify-center mb-2.5 gap-1.5">
                <Google />
                <p className="text-[20px]">Google Reviews</p>
              </div>
              <div className="flex justify-center mb-3">
                <Fiveyellowstar />
              </div>
              <div className="flex items-center justify-between">
                <p>4.9 Stars </p>
                <p className="w-1 h-5 bg-medium-white"></p>
                <p>359 reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customers;
