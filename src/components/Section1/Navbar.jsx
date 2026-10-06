import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import About from "../About/About";

const Navbar = () => {
  return (
    
    
    <div>
      {/* Header  */}
      <header className="absolute top-0 w-full flex justify-between items-start p-4 md:p-6 md:px-12 md:py-8 z-40">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <img
            className="absolute top-2 md:top-1 left-2 md:left-1 w-16 md:w-30 h-16 md:h-30 -rotate-45 grayscale-90"
            src="src\assets\93d5c9ad7d15f32d4d3169517af2e099.jpg-Photoroom.png"
            alt=""
          />
        </div>

        {/* Navigation Buttons */}
        <nav className="hidden select-none md:flex gap-13 mt-2 mr-90">
          <button className="px-6 lg:px-8 py-1 bg-transparent text-white border-3 font-jost rounded-full font-bold tracking-widest hover:bg-white hover:text-black hover:scale-120 duration-300 transition-all text-sm lg:text-base">
            HOME
          </button>
          <Link to={"/about"} className="px-6 lg:px-8 py-1 bg-transparent text-white border-3 font-jost rounded-full font-bold tracking-widest hover:bg-white hover:text-black hover:scale-120 duration-300 transition-all text-sm lg:text-base">
            ABOUT
          </Link>
          <button className="px-6 lg:px-8 py-1 bg-transparent text-white border-3 font-jost rounded-full font-bold tracking-widest hover:bg-white hover:text-black hover:scale-120 duration-300 transition-all text-sm lg:text-base">
            SERVICES
          </button>
          <button className="px-6 lg:px-8 py-1 bg-transparent text-white border-3 font-jost rounded-full font-bold tracking-widest hover:bg-white hover:text-black hover:scale-120 duration-300 transition-all text-sm lg:text-base">
            PROJECTS
          </button>
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
