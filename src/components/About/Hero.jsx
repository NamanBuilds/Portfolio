import React from 'react'
import video from "../../assets/videobg.mp4"
import img from "../../assets/namanabout.png"

const Hero = () => {
  return (
    <div  className="relative w-full h-dvh md:h-screen select-none overflow-hidden text-white" >
        <div className="absolute h-screen w-screen">
            <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full md:h-screen object-cover -z-10">
        <source src={video}/>
        Your browser does not support the video tag.
      </video>
        </div>
        
        <div className='absolute z-20 left-1/2 transform -translate-x-1/2 not-md:bottom-0 not-md:scale-250 '>
            <img className='md:h-280 md:-mt-5  not-md:-mt-30 ' src={img} alt="Myself" />
        </div>

        <div className='not-md:scale-125 not-md:pt-110 not-md:z-30 not-md:absolute not-md:left-1/2 not-md:transform not-md:-translate-x-1/2 '>
            <div id='aboutstroke' className='absolute z-30 flex items-center left-1/2 transform -translate-x-1/2 -bottom-30 h-fit'>
            <h1 className='font-[gfs] text-[27vw] font-extrabold tracking-[-10px] text-transparent stroke-3 stroke-white '>ABOUT</h1>
        </div>
       
        <div className='absolute z-10 flex items-center left-1/2 transform -translate-x-1/2 -bottom-30 h-fit'>
            <h1 className='font-[gfs] text-[27vw] font-extrabold tracking-[-10px] '>ABOUT</h1>
        </div>
        </div>
       

      

    </div>
  )
}

export default Hero