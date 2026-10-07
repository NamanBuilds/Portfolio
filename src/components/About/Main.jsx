import React, { useRef } from 'react'
import Poloroid from "../../assets/poloroid.png"
import Img from "../../assets/Modern Office Portrait in Dark Suit_processed-Photoroom.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Main = () => {
    

    const animateLeft = useRef(null)
    useGSAP(()=>{
        gsap.from(animateLeft.current.children ,{
            opacity:0,
            x:-100,
            duration:1,
            stagger:0.2,
            ease:"elastic.out",
        })
    },{ scope: animateLeft });


    const animatePic = useRef()
    useGSAP(()=>{
        gsap.from(animatePic.current,{
            opacity:0,
            scale:4,
            rotate:0,
            duration:0.8,
            
            ease:"bounce.out"
        })
    },{scope: animatePic});


  return (
    <div>
        
        <main className="px-6 md:mt-20 md:pt-10 md:ml-10 pt-24 pb-24  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
        
        

        
        {/* Left Side: Text Content */}
        <div ref={animateLeft} className="space-y-8 z-10 relative">
          
          {/* Section Subtitle */}
          <div  className="text-[#894cba] text-xs font-bold tracking-[0.2em] uppercase">
            ABOUT ME
          </div>
          
          {/* Main Heading (Brush Style) */}
          <div className="space-y-1 -rotate-4 -mt-4 mb-15 md:scale-110 md:ml-6">
            <h1 className="text-6xl md:text-[5rem] md:ml-2 font-black font-[bangers] leading-none tracking-[10px] text-white uppercase">
              HI, I'M
            </h1>
            <h1 className="text-6xl md:text-[5.5rem] font-black font-[bangers]  leading-none tracking-[20px] text-[#a768ff] uppercase">
              NAMAN CHOUREY
            </h1>
          </div>
          
          {/* Tagline */}
          <h2 className="text-xl md:text-2xl text-gray-200 font-medium pt-2">
            A developer, a problem solver, a lifelong learner.
          </h2>
          
          {/* Paragraph */}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl font-light">
            I'm a BTech student in AIML, currently exploring the world of web development, backend systems and AI. I love building things that solve real problems and make an impact — even if it's just a small one for now.
          </p>

          <div className="flex  gap-3 md:gap-4 w-28 md:w-40 not-md:scale-80">
        {/* GITHUB*/}
        <a href="https://github.com/NamanBuilds" className="flex items-center justify-between px-2 md:px-4 md:py-2 border-2 md:border-3 border-white rounded-full text-[10px] md:text-[14px] font-bold tracking-widest font-jost hover:text-black hover:bg-white hover:border-0 hover:scale-110 hover:rotate-3 duration-300 transition-all">
          <i className="ri-github-fill text-lg md:text-2xl  md:mr-2"></i>
          <span>GITHUB</span>
        </a>

        {/* LINKEDIN  */}
        <a href="https://www.linkedin.com/in/naman-chourey-6b310935a?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="flex items-center justify-between px-2 md:px-4 py-1.5 md:py-2 border-2 md:border-3 border-white rounded-full text-[10px] md:text-[14px] font-bold tracking-widest font-jost hover:text-black hover:bg-white hover:border-0 hover:scale-110 hover:-rotate-3 duration-300 transition-all">
          <i className="ri-linkedin-fill text-lg md:text-2xl md:mr-2"></i>
          <span>LINKEDIN</span>
        </a>

        {/* RESUME*/}
        <button className="flex items-center justify-between px-2 md:px-4 py-1.5 md:py-2 border-2 md:border-3 border-white rounded-full text-[10px] md:text-[14px] font-bold tracking-widest font-jost hover:text-black hover:bg-white hover:border-0 hover:scale-110 hover:rotate-3 duration-300 transition-all">
          <i className="ri-draft-line text-lg md:text-2xl  md:mr-2"></i>
          <span>RESUME</span>
        </button>

        {/* INSTAGRAM */}
        <a href="https://www.instagram.com/_namanchourey?stkn=MXB0cmYxODFoNHV5cQ==" className="flex items-center justify-between px-2 md:px-4 py-1.5 md:py-2 border-2 md:border-3 border-white rounded-full text-[10px] md:text-[14px] font-bold tracking-widest font-jost hover:text-black hover:bg-white hover:border-0 hover:scale-110 hover:-rotate-3 duration-300 transition-all">
          <i className="ri-instagram-line text-lg md:text-2xl  md:mr-2"></i>
          <span>INSTAGRAM</span>
        </a>
      </div>
          
          
        </div>
        {/* Right Side: Empty Placeholder */}
        <div ref={animatePic} className="hidden lg:block relative h-150 w-full  scale-120 -mt-30 -rotate-7 lg:overflow-hidden">
            <div className='fixed z-10 '>
                <img src={Poloroid} alt="polo" />
                
            </div>
            <div  className='scale-75 mr-8 -mt-4'>
                <img src={Img} alt="" />
            </div>
        </div>
      </main>
    </div>
  )
}

export default Main