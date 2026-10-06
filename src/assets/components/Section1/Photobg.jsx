import React from "react";

const Photobg = () => {
  return (
    <div className="absolute bottom-[0%] md:bottom-25 left-1/2 transform -translate-x-1/2 z-20 h-[70%] md:h-[80%] w-[120%] scale-140 md:w-auto pointer-events-none flex justify-center">
      <div className="absolute inset-0 bg-white/20 rounded-2xl blur-3xl md:blur-3xl z-10 scale-55 " />

      <img
        src="..\src\assets\images\Modern Office Portrait in Dark Suit_processed-Photoroom.png"
        alt="Naman"
        className="h-full md:h-max w-auto object-contain object-bottom relative z-20"
      />
    </div>
  );
};

export default Photobg;
