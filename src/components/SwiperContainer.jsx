import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fiveyellowstar, Next, Prev } from "./Icons";
import "swiper/css";
import { reviewdata } from "./common/Helper";
import { Navigation } from "swiper/modules";

const SwiperContainer = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <section className="mb-37.5">
      <div className="flex items-center gap-1 sm:gap-4 justify-center h-fit mt-8">
        <button
          ref={navigationPrevRef}
          className="px-1 sm:px-4 py-2 relative z-10 h-fit text-white text-lg "
        >
          <Prev />
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            740: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          speed={1000}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          className="max-w-289 mx-auto"
        >
          {reviewdata.map((obj, i) => {
            return (
              <SwiperSlide key={i}>
                <div>
                  <div className="max-w-91 w-full mx-auto md:mx-0 border border-[#466742] rounded-2xl p-7 text-medium-white font-inter">
                    <div className="mb-5">
                      <Fiveyellowstar />
                    </div>
                    <p className="text-[12px] sm:text-[16px]">{obj.review}</p>
                    <div className="flex items-center gap-3 mt-6">
                      <img
                        className="max-w-12 w-full h-12 object-cover rounded-full"
                        src={obj.image}
                        alt="image1"
                      />
                      <div className="">
                        <p>{obj.name}</p>
                        <p>{obj.post}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          ref={navigationNextRef}
          className="px-1 sm:px-4 py-2 relative z-10 h-fit text-white text-lg cursor-pointer"
        >
          <Next />
        </button>
      </div>
    </section>
  );
};

export default SwiperContainer;
