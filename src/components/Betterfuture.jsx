import React from "react";
import { Hand, Plant, RightArrow, TopRightArrow, Water } from "./Icons";
import Button from "./Button";

const Betterfuture = () => {
  return (
    <section className="mb-10 lg:mb-37.5">
      <div className="mb-10 lg:mb-22.5">
        <h2 className="text-white text-[28px] md:text-[32px] lg:text-[60px] text-center mb-1.75">
          Take Action For A
          <span className="text-medium-green"> Better Future</span>
        </h2>
        <p className="text-white mx-auto text-center font-inter text-[12px] lg:text-[16px] max-w-178 px-5 lg:px-0">
          Lorem ipsum dolor sit amet, consectetur adipis Vi ales elit vitae lo
          bortis faucibus. Lorem ipsum dolor sit amet, conse dolor sit amet,
          consectetu ctetur adipis Viales
        </p>
      </div>
      <div className="hidden xl:flex items-center max-w-201.75 justify-between mx-auto -mb-13">
        <RightArrow />
        <RightArrow />
      </div>
      <div className="max-w-335 w-full gap-10 lg:gap-0 justify-center lg:justify-between mx-auto  flex flex-wrap xl:flex-row items-center text-white font-inter px-5 xl:px-0">
        <div className="max-w-80.75 text-center">
          <Plant className="mx-auto" />
          <h3 className="font-bold text-[22px]">Planting Trees </h3>
          <p className="mt-2 lg:mt-3.5">
            Start your journey by supporting tree planting initiatives. Help
            restore green cover, fight climate change, and make the Earth
            breathe again — one tree at a time.
          </p>
          <div className="flex mt-5 lg:mt-9.75 justify-center">
            <Button>
              {"Explore More"}
              <TopRightArrow />
            </Button>
          </div>
        </div>

        <div className="max-w-80.75 text-center">
          <Water className="mx-auto" />
          <h3 className="font-bold text-[22px]">Save Water</h3>
          <p className="mt-2 lg:mt-3.5">
            Protect Earth’s most precious resource. Conserve clean water through
            mindful travel and eco-friendly practices that make a real
            difference in local communities.
          </p>
          <div className="flex mt-5 lg:mt-9.75 justify-center">
            <Button>
              {"Explore More"}
              <TopRightArrow />
            </Button>
          </div>
        </div>
        <div className="max-w-80.75 text-center">
          <Hand className="mx-auto" />
          <h3 className="font-bold text-[22px]">Protect Wildlife</h3>
          <p className="mt-2 lg:mt-3.5">
            Help safeguard endangered animals by supporting rescue efforts and
            wildlife protection programs around the world.
          </p>
          <div className="flex mt-5 lg:mt-9.75 justify-center">
            <Button>
              {"Explore More"}
              <TopRightArrow />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Betterfuture;
