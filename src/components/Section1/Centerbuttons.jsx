import React from 'react'

const Centerbuttons = () => {
  return (
    <div className="absolute bottom-[5%] md:bottom-[18%] left-1/2 h-auto md:h-20 transform -translate-x-1/2 w-[90%] md:w-max z-40 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-17 px-4">
        
        
        <button className="bg-[#c700c7] rounded-full hover:scale-110 hover:border-0 duration-200 ease-in transition-all md:text-3xl tracking-widest  w-56 md:w-90 h-14 md:h-18 hover:bg-white hover:text-black font-jost">
          LET'S CONNECT
        </button>
        
        
        <button className="text-xl md:text-3xl tracking-widest border-4 border-white hover:scale-110 hover:border-0 duration-200 ease-in transition-all rounded-full w-full max-w-55 md:w-75 h-14 md:h-18 hover:bg-white hover:border-black hover:text-[#2d004f] font-jost">
          PROJECTS
        </button> 
      </div>
  )
}

export default Centerbuttons