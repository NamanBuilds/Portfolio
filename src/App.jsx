import React from "react";
import Section1 from "./assets/components/Section1/Section1";
import { Route, Routes } from "react-router-dom";
import About from "./assets/components/About/About";


const App = () => {
  return (
     <div className="w-full overflow-x-hidden">

      <Routes>
        <Route path="/" element={<Section1/>} />
        <Route path="/about" element={<About/>} />


      </Routes>
      

      
     </div>
  );
};

export default App;
