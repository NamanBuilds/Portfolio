import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

import Logo from "../../assets/93d5c9ad7d15f32d4d3169517af2e099.jpg-Photoroom.png";

const Navbar = () => {
  return (
    <div>
      {/* Header  */}
      <header className="absolute z-40 top-0 w-full flex justify-between items-start p-4 md:p-8 md:px-12 ">
        {/* Logo */}
        <div className="flex items-center justify-center ">
          <Link to={"/"}>
            <img
              className="absolute top-2 md:top-1 left-2 md:left-1 w-16 md:w-30 h-16 md:h-30 -rotate-45 grayscale-90"
              src={Logo}
              alt=""
            />
          </Link>
        </div>

        {/* Navigation Buttons */}
        <nav className="hidden select-none md:flex gap-13 mt-2 mr-90">
          <Link
            to={"/"}
            className="px-6 lg:px-8 py-1 bg-transparent text-white border-3 font-jost rounded-full font-bold tracking-widest hover:bg-white hover:text-black hover:scale-120 duration-300 transition-all text-sm lg:text-base">
            HOME
          </Link>
          <Link
            to={"/about"}
            className="px-6 lg:px-8 py-1 bg-white text-black border-3 border-white font-jost rounded-full font-bold tracking-widest hover:bg-white hover:text-black hover:scale-120 duration-300 transition-all text-sm lg:text-base">
            ABOUT
          </Link>
          <Link
            to={"/services"}
            className="px-6 lg:px-8 py-1 bg-transparent text-white border-3 font-jost rounded-full font-bold tracking-widest hover:bg-white hover:text-black hover:scale-120 duration-300 transition-all text-sm lg:text-base">
            SERVICES
          </Link>
          <Link
            to={"/projects"}
            className="px-6 lg:px-8 py-1 bg-transparent text-white border-3 font-jost rounded-full font-bold tracking-widest hover:bg-white hover:text-black hover:scale-120 duration-300 transition-all text-sm lg:text-base">
            PROJECTS
          </Link>
        </nav>

        {/* Menu Icon */}
        <button className=" md:hidden w-10 h-10 md:w-11 md:h-11 bg-transparent rounded-full flex flex-col justify-center items-center mt-1 hover:bg-white border-3 border-white hover:scale-120 hover:border-0 duration-300 transition-all">
          <i className="ri-menu-line text-white hover:text-black text-xl md:text-2xl "></i>
        </button>
      </header>
    </div>
  );
};

export default Navbar;
