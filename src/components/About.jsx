import React from "react";

const About = () => {
  return (
    <>
      <section className="mt-37.5 font-inter flex justify-between mx-12.5">
        <div className="max-w-275.75 w-full py-30 pl-15 border border-[#577952]">
          <h2 className="text-white text-[50px] font-tanker">
            About <span className="medium-green">Us</span>
          </h2>
          <p className="text-white max-w-135.5 w-full">
            At EcoHaven, we believe that protecting the Earth isn’t just a
            choice — it’s a shared responsibility. We are a passionate community
            driven by one mission: to restore balance between people and planet.
          </p>
          <p className="text-white max-w-135.5 w-full">
            From preserving ancient forests and clean water sources to
            safeguarding endangered species, our work is rooted in real impact.
            With every tree planted, every action taken, and every voice raised
            — we’re building a healthier, greener tomorrow.
          </p>
        </div>
        <div className="max-w-132.5 h-132.5 -ml-73.5">
          <img
            className="w-full h-full object-cover"
            src="./public/images/Hand-shake.jpg"
            alt="hand-shake"
          />
        </div>
      </section>
    </>
  );
};

export default About;
