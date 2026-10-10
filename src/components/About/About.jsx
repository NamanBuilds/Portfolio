import React from "react";
import Navbar from "./Navbar";

import WhoamI from "./WhoamI";
import Hero from "./Hero";
import DevJourny from "./DevJourny";
import HowIThink from "./HowIThink";
import ToolsBehind from "./ToolsBehind";

const About = () => {
  return (
   
    <div className="w-screen h-screen bg-black/50 text-white flex flex-col ">
      
       
          <div className="">
          <Navbar />
          <Hero/>
        </div>
        
        <div className=" bg-black" >
          <WhoamI/>
        </div>
        <div className=" bg-black" >
          <DevJourny/>
        </div>
        <div className=" bg-black" >
          <HowIThink/>
        </div>
        <div className=" bg-black" >
          <ToolsBehind/>
        </div>
       
        
    
      </div>
      
  );
};

export default About;
