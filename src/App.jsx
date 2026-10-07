import React, { useEffect, useRef, useState } from "react";

import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Section1 from "./components/Section1/Section1";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Refs for GSAP animations
  const screenRef = useRef(null);
  const barRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // 1. Simulate progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increment for a natural loading feel
        return prev + Math.floor(Math.random() * 5) ;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // 2. When progress hits 100, trigger the exit animation
    if (progress >= 100) {
      const tl = gsap.timeline({
        onComplete: () => setLoading(false), // Hide component completely
      });

      // Animate progress bar filling up smoothly
      tl.to(barRef.current, { width: '100%', duration: 0.3 })
        // Fade out text and progress bar
        .to([textRef.current, barRef.current], { opacity: 0, y: -20, duration: 0.4 })
        // Slide or fade out the entire loading screen overlay
        .to(screenRef.current, { opacity:0, duration: 1 , ease:"power1.out" , delay:0.2});
    }
  }, [progress]);

  // If loading is finished, render your main app content
  if (!loading) {
    return (
      <div className="w-full overflow-x-hidden">

      <Routes>
        <Route path="/" element={<Section1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
    );
  }


  return (
    <div>
      <div
      ref={screenRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 text-white"
    >
      <div ref={textRef} className="text-center">
        <h2 className="mb-4 text-6xl font-medium tracking-wider">LOADING</h2>
        <div className="text-5xl font-bold font-mono">
          {Math.min(progress, 100)}%
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="mt-8 h-1 w-64 overflow-hidden rounded-full bg-zinc-800">
        <div
          ref={barRef}
          className="h-full bg-white transition-all duration-100 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        ></div>
      </div>
    </div>
    <div className="w-full overflow-x-hidden">

      <Routes>
        <Route path="/" element={<Section1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
        


      
    </div>
  );
};

export default App;
