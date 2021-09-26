import React, { useEffect } from "react";
import classes from "./Information.module.css"
import Aos from "aos";
import "aos/dist/aos.css"

const Portfolio = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-sine",
      delay: 50,
      mirror: true,
      disable: "mobile"
    })
  })

  return (
    <div className={classes.container}>
      <div className={classes.image} data-aos="fade">
        <img src={process.env.PUBLIC_URL + "/assests/saitama2.png"} alt="" style={{ width: "450px" }} />
      </div >
      <div className={classes.experience}>
        <div className={classes.card}>
          <div className={classes.card1} data-aos="fade-down">
            <h2 className={classes.heads}>React</h2>
            <p className={classes.description}>Using and Still exploring React Library with Hooks, States, JSXs and Reduxs.</p>
            <small><a href="">10+ Projects</a></small>
          </div>
          <div className={classes.card2} data-aos="fade-down">
            <h2 className={classes.heads}>JavaScript ES6</h2>
            <p className={classes.description}>Most Versatile language, started my web dev journey with it and still learning.</p>
            <small><a href="">10+ Projects</a></small>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.card3} data-aos="fade-up">
            <h2 className={classes.heads}>UI/UX Design</h2>
            <p className={classes.description}>Started new to it, getting familiar to fundamentals and best the practices.</p>
            <small><a href="">0+ Projects</a></small>
          </div>
          <div className={classes.card4} data-aos="fade-up">
            <h2 className={classes.heads}>NodeJs, ExpressJs</h2>
            <p className={classes.description}>Started Journey with NodeJs and excelled well in it and Used Express engine.</p>
            <small><a href="">10+ Projects</a></small>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Portfolio;