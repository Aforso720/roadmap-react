import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ExploreTracks from "./Pages/ExploreTracks";
import Recommendations from "./Pages/Recommendations";
import ContactFAQ from "./Pages/ContactFAQ";

function App() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);  
  };

  return ( 
      <div className="appHome">
        <Header
         toggleVisibility={toggleVisibility}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<ExploreTracks />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/contact" element={<ContactFAQ />} />
        </Routes>
        {isVisible ? <></> : <Animation />}
      </div>
  );
}

export default App;
