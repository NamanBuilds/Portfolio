import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";

const About = () => {
  return (
    <div className="w-screen h-screen  text-white ">
      <div className="relative w-full h-dvh md:h-screen select-none bg-linear-to-b from-[#0e0e0e] to-[#1f0034] overflow-hidden text-white font-sans">
        <div>
          <Navbar />
        </div>
        <div>
          <Main/>
        </div>
      </div>
    </div>
  );
};

export default About;
