import Button from "./Button";
import { TopRightArrow } from "./Icons";

const About = () => {
  return (
    <>
      <section className=" mt-15 md:mt-20 mb-10 lg:mb-20 lg:my-37.5 font-inter flex flex-col lg:flex-row justify-center lg:justify-between items-center h-full lg:h-152 gap-15 lg:gap-0 mx-12.5 ">
        <div className="max-w-200 lg:max-w-275.75 w-full rounded-xl py-5 md:py-10 lg:py-30 pl-5 lg:pl-15 border border-[#577952] text-center lg:text-start px-5 lg:px-0">
          <h2 className="text-white text-[32px] lg:text-[50px] font-tanker mb-2 lg:mb-4 ">
            About <span className="medium-green">Us</span>
          </h2>
          <p className="text-white max-w-110 xl:max-w-135.5 w-full mb-2.5 mx-auto lg:mx-0">
            At EcoHaven, we believe that protecting the Earth isn’t just a
            choice — it’s a shared responsibility. We are a passionate community
            driven by one mission: to restore balance between people and planet.
          </p>
          <p className="text-white max-w-110 xl:max-w-135.5 w-full mb-2.5 lg:mb-10 mx-auto lg:mx-0">
            From preserving ancient forests and clean water sources to
            safeguarding endangered species, our work is rooted in real impact.
            With every tree planted, every action taken, and every voice raised
            — we’re building a healthier, greener tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start  ">
            <Button>
              {"Book Your Travel"}
              <TopRightArrow className="text-black duration-300 transition-all" />
            </Button>
            <button className="text-medium-green flex items-center border py-2 sm:py-3.75 px-3 sm:px-6 gap-2 rounded-[10px] text-[16px] hover:bg-white hover:text-black hover:drop-shadow-[0_0_25px_rgba(0,255,0,0.9)] transition-all duration-500 ease-in-out">
              Read More <TopRightArrow />
            </button>
          </div>
        </div>
        <div className="max-w-110 xl:max-w-132.5 h-70 md:h-100 lg:h-110 xl:h-132.5 ml-0 lg:-ml-73.5">
          <img
            className="w-full h-full object-cover"
            src="./src/assets/Hand-shake.png"
            alt="hand-shake"
          />
        </div>
      </section>
    </>
  );
};

export default About;
