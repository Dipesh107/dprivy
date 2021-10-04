import React, { useState } from "react";
import classes from "./Info.module.css";

const Info = () => {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <div>
      <div className={classes.info}>
        <div className={classes["photo-section"]}>
          <img src={process.env.PUBLIC_URL + "/assests/headerimg1.png"} alt="Dipesh Patil Logo" className={classes.image} />
        </div>
        <div className={classes["info-section"]}>
          <p className={classes.hello}>Hello!</p>
          <h1 className={classes.name}>I'm Dipesh Patil</h1>
          <h2 className={classes.subSection}>Web Developer | UI/UX Learner | Data Science Enthusiasts</h2>
          <p className={classes.desp}>My Ultimate motto is to become Full MERN Stack Developer and ready to collaborate to any Project. Quick learner and learning new concepts in UI/UX for better concept designing and implementation.</p>
          <div className={classes.logoImages}>
            <a href="https://twitter.com/DipeshP32570979" target="_blank"><img src={process.env.PUBLIC_URL + "/assests/twitter.png"} alt="Twitter-logo" /></a>
            <a href="https://www.github.com/Dipesh107" target="_blank"><img src={process.env.PUBLIC_URL + "/assests/github.png"} alt="Github-logo" /></a>
            <a href="https://www.linkedin.com/in/dipesh-patil-060b73207/" target="_blank"><img src={process.env.PUBLIC_URL + "/assests/linkedin.png"} alt="LinkedIn-logo" /></a>
            <a href="https://dev.to/dipesh107" target="_blank"><img src={process.env.PUBLIC_URL + "/assests/dev.png"} alt="Dev-logo" /></a>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.uparrow}>
          <img onClick={scrollTop} src={process.env.PUBLIC_URL + "/assests/uparrow.png"} style={{ display: showScroll ? 'flex' : 'none' }} alt="up arrow" />
        </div>

        <div className={classes.zio}><img src={process.env.PUBLIC_URL + "/assests/down-arrow.png"} alt="" /></div>
      </div>
    </div >
  )
};

export default Info;