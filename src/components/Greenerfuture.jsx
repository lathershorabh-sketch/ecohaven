import React from "react";

const Greenerfuture = () => {
  return (
    <>
      <section className="mb-15 lg:mb-37.5">
        <h2 className="text-3xl sm:text-[40px] lg:text-[60px] text-medium-white text-center mb-13.5">
          Together, Let’s Build a{" "}
          <span className="text-medium-green">Greener Future</span>
        </h2>
        <div className="px-5 2xl:px-0 max-w-335 w-full  flex flex-col xl:flex-row justify-between mx-auto mb-8 gap-8">
          <div className="max-w-77.75 mx-auto xl:mx-0">
            <img src="./src/assets/Frameone.png" alt="frameone" />
          </div>
          <div className="bg-[url(./assets/Leafbg.png)] mx-auto xl:mx-0  flex flex-col sm:flex-row justify-between items-center w-full max-w-249.25 rounded-2xl bg-cover bg-center">
            <div className="max-w-90 sm:max-w-148 text-center sm:text-start w-full mt-8 lg:mt-38.5 ml-0 lg:ml-8 px-5 lg:px-0">
              <h3 className="text-medium-green font-inter mb-4">
                Make Donation
              </h3>
              <p className="text-medium-white font-inter mb-4">
                Your contribution can help heal the Earth
              </p>
              <p className="text-medium-white font-inter">
                We are a passionate group of individuals driving a global
                movement for a greener, more peaceful future. Together, we work
                to protect our land, forests, oceans, food systems, &
                climate-ensuring we leave planet future generations.
              </p>
            </div>
            <div className="max-w-68.5 w-full h-70 sm:h-81 p-2 ">
              <img
                className="h-full object-cover rounded-lg"
                src="./src/assets/Tree.png"
                alt="tree"
              />
            </div>
          </div>
        </div>
        <div className="px-5 2xl:px-0 max-w-335 w-full flex flex-col xl:flex-row justify-center lg:justify-between mx-auto mb-8 gap-8 ">
          <div className="bg-[url(./assets/Leafbg.png)] flex flex-col sm:flex-row justify-between w-full max-w-249.25 rounded-2xl bg-cover bg-center mx-auto xl:mx-0 items-center lg:items-start">
            <div className="max-w-90 sm:max-w-148 text-center sm:text-start w-full mt-8 lg:mt-38.5 ml-0 lg:ml-8 px-5 lg:px-0">
              <h3 className="text-medium-green font-inter mb-4">
                Stop the Drilling - Take Action Now!
              </h3>
              <p className="text-medium-white font-inter mb-4">
                Your voice matters. Your action counts.
              </p>
              <p className="text-medium-white font-inter">
                Despite strong global opposition and serious risks to Arctic
                communities, wildlife, and the climate, the Obama administration
                has granted Shell final approval to drill in the Alaskan Arctic.
                But this fight isn't over.
              </p>
            </div>
            <div className="max-w-68.5 w-full h-70 sm:h-81 p-2 ">
              <img
                className="h-full object-cover rounded-lg"
                src="./src/assets/Crowd.png"
                alt="Crowd"
              />
            </div>
          </div>
          <div className="max-w-77.75 mx-auto xl:mx-0">
            <img src="./src/assets/Frametwo.png" alt="frametwo" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Greenerfuture;
