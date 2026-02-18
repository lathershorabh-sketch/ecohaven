import React, { useState } from "react";
import { navlist } from "./common/Helper";
import { Hamburger, Navimg, Cross } from "./Icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative flex justify-center font-inter">
      <div className="max-lg:bg-[#42553D] max-w-285 w-full max-lg:rounded-b-full">
        <div className="relative">
          <div className="flex items-center h-20 justify-between px-10 sm:px-20 md:px-30 xl:px-40  ">
            <p>
              <Navimg />
            </p>
            <ul className="hidden lg:flex gap-8 z-20">
              {navlist.map((item, i) => (
                <li key={i} className="text-medium-white hover:text-medium-green">
                  <a href="/">{item}</a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setOpen(!open)}
              className="block lg:hidden z-40 text-medium-white"
            >
              {" "}
              {open ? <Cross /> : <Hamburger />}
            </button>
          </div>
          <img
            className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 lg:z-10 w-full"
            src="./src/assets/Navbg.png"
            alt="navbg"
          />
          <ul
            className={`fixed inset-0 bg-[#42553D] z-30 transition-all duration-500 ${open ? "translate-y-0" : "-translate-y-full"}`}
          >
            <div className="flex justify-center items-center flex-col gap-4 min-h-screen text-2xl">
              {navlist.map((item, i) => (
                <a
                  key={i}
                  href="/"
                  className="text-medium-white"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
