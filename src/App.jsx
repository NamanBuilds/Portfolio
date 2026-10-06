import React from "react";

import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Section1 from "./components/Section1/Section1";


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
