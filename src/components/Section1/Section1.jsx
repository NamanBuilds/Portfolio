import Photobg from "./Photobg";
import Bgtext from "./Bgtext";
import Navbar from "./Navbar";
import Centerbuttons from "./Centerbuttons";
import Socials from "./Socials";
import Rightrole from "./Rightrole";
import Leftrole from "./Leftrole";
import Video from "../../assets/videobg.mp4"


const Section1 = () => {
  return (

    
    <div className="relative w-full h-dvh md:h-screen select-none bg-black/50 overflow-hidden text-white font-sans">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full md:h-screen object-cover -z-10">
        <source src={Video}/>
        Your browser does not support the video tag.
      </video>

      {/* NAV BAR */}
      <Navbar />

      {/* BG TEXT */}
      <Bgtext />

      {/* BG IMAGE*/}
      <Photobg />

      {/* SOCIALS*/}
      <Socials />

      <div className="absolute w-full top-[18%] md:top-[50%] left-0 px-4 md:px-63 flex flex-col md:flex-row justify-between items-center gap-[45vh] md:gap-0 z-30 pointer-events-none">
        {/* LEFT ROLE */}
        <div className="pointer-events-auto  md:mt-0">
          <Leftrole />
        </div>

        {/* RIGHT ROLE */}
        <div className="pointer-events-auto">
          <Rightrole />
        </div>
      </div>

      {/* BOTTOM BUTTONS*/}
      <Centerbuttons />
    </div>
  );
};

export default Section1;
