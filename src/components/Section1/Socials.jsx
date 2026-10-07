
import "remixicon/fonts/remixicon.css";

const Socials = () => {
  return (
    <div className="absolute left-6  md:scale-100 md:left-10 top-20 md:top-[55%] md:bottom-[8%] z-30 flex md:flex-col justify-center items-center md:justify-between h-8 md:h-[45%]">
      
      <div className="flex md:flex-col gap-3 md:gap-4 w-28 md:w-40 ">
        {/* GITHUB*/}
        <a href="https://github.com/NamanBuilds" className="flex items-center justify-between px-2 md:px-4 md:py-2 border-2 md:border-3 border-white rounded-full text-[10px] md:text-[14px] font-bold tracking-widest font-jost hover:text-black hover:bg-white hover:border-0 hover:scale-110 hover:rotate-3 duration-300 transition-all">
          <i className="ri-github-fill text-lg md:text-2xl"></i>
          <span>GITHUB</span>
        </a>

        {/* LINKEDIN  */}
        <a href="https://www.linkedin.com/in/naman-chourey-6b310935a?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="flex items-center justify-between px-2 md:px-4 py-1.5 md:py-2 border-2 md:border-3 border-white rounded-full text-[10px] md:text-[14px] font-bold tracking-widest font-jost hover:text-black hover:bg-white hover:border-0 hover:scale-110 hover:-rotate-3 duration-300 transition-all">
          <i className="ri-linkedin-fill text-lg md:text-2xl"></i>
          <span>LINKEDIN</span>
        </a>

        {/* RESUME*/}
        <button className="flex items-center justify-between px-2 md:px-4 py-1.5 md:py-2 border-2 md:border-3 border-white rounded-full text-[10px] md:text-[14px] font-bold tracking-widest font-jost hover:text-black hover:bg-white hover:border-0 hover:scale-110 hover:rotate-3 duration-300 transition-all">
          <i className="ri-draft-line text-lg md:text-2xl"></i>
          <span>RESUME</span>
        </button>

        {/* INSTAGRAM */}
        <a href="https://www.instagram.com/_namanchourey?stkn=MXB0cmYxODFoNHV5cQ==" className="flex items-center justify-between px-2 md:px-4 py-1.5 md:py-2 border-2 md:border-3 border-white rounded-full text-[10px] md:text-[14px] font-bold tracking-widest font-jost hover:text-black hover:bg-white hover:border-0 hover:scale-110 hover:-rotate-3 duration-300 transition-all">
          <i className="ri-instagram-line text-lg md:text-2xl "></i>
          <span>INSTAGRAM</span>
        </a>
      </div>
    </div>
  );
};

export default Socials;
