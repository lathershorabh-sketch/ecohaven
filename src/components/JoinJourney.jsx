import React from "react";

const JoinJourney = () => {
  return (
    <>
      <section className="flex items-center justify-between text-white max-w-335 w-full mx-auto mb-20.25">
        <h2 className="text-[48px] max-w-126.25 w-full">
          Join the Journey, Subscribe & Stay Connected!
        </h2>
        <div className="max-w-112.25 w-full font-inter">
          <p className="text-medium-white font-inter">
            Stay in the loop! Subscribe to our newsletter for exclusive
            promotions, deals, and VIP perks. Sign up now for personalized
            offers sent straight to your inbox!
          </p>
          <div className="flex items-center gap-6 mt-7.25">
            <input
              className="border rounded-lg py-3.75 pl-3.75"
              placeholder="Enter  Your Email"
              type="text"
            />
            <button className="bg-medium-green text-black py-4 rounded-[10px] px-7.75">
              Subscribe now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinJourney;
