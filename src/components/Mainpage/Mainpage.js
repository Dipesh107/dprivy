import React, { useEffect } from "react";
import About from "./About/About"
import Contact from "./Contact/Contact";
import Information from "./Information/Information";
import Portfolio from "./Portfolio/Portfolio";


const Mainpage = () => {

  return (
    <div>
      <About />
      <Information />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default Mainpage;