import React, { useEffect } from "react";
import { DiReact, DiMongodb, DiVisualstudio, DiGit, DiDocker, DiHeroku, DiCss3, DiHtml5, DiPython, DiNodejsSmall, DiBootstrap, DiDjango, DiJsBadge, DiWordpress, DiPhotoshop, DiGithubBadge, DiNpm, DiTerminal, DiCodepen } from "react-icons/di";
import classes from "./Portfolio.module.css";
import { FaTools } from "react-icons/fa";
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation 
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import Aos from "aos";
import "aos/dist/aos.css"

const Project = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: 'ease-in-sine',
      mirror: true,
      disable: "mobile"
    });
  });

  return (
    <div className={classes.projectContainer} id="portfolioId">
      <div data-aos="fade-right">
        <h1>Portfolio <span className={classes.line}></span></h1>
      </div>

      {/* Career Section with Tools */}
      <div className={classes.container} data-aos="fade">
        <div className={classes.career}>
          <h2>Why I chose Web Developement as a Career? &#129300;</h2>
          <p>I'm a versatile person with a lot of experience in the tech community. I've attended 10+ workshops in the past year on a variety of topics ranging from machine learning to UI/UX and Web Developement. I like designing & building websites for users that will help them. I gained some intrest in this Field after my 1st year engineering and after couple of years i excelled well and pursing it as a career. Hire me for in-time service with best results possible ¯\_(ツ)_/¯.</p>
          <div>
            <h2 className={classes.toolh2}><FaTools style={{ "marginRight": "0.5rem" }} /> Tools</h2>
            <div>
              <div className={classes.tools}>
                <DiDocker size={"2.5em"} color={"grey"} style={{ "color": "#0db7ed" }} className={classes.toolicons} />
                <div className={classes.label}>Docker</div>
              </div>
              <div className={classes.tools}>
                <DiVisualstudio size={"2.5em"} color={"grey"} style={{ "color": "blue" }} className={classes.toolicons} />
                <div className={classes.label}>VSCode</div>
              </div>
              <div className={classes.tools}>
                <DiPhotoshop size={"2.5em"} color={"grey"} style={{ "color": "#707894" }} className={classes.toolicons} />
                <div className={classes.label}>Photoshop</div>
              </div>
              <div className={classes.tools}>
                <DiGithubBadge size={"2.5em"} color={"grey"} style={{ "color": "#4078c0" }} className={classes.toolicons} />
                <div className={classes.label}>GitHub</div>
              </div>
              <div className={classes.tools}>
                <DiNpm size={"2.5em"} color={"grey"} style={{ "color": "#cc3534" }} className={classes.toolicons} />
                <div className={classes.label}>Npm</div>
              </div>
              <div className={classes.tools}>
                <DiCodepen size={"2.5em"} color={"grey"} style={{ "color": "#76DAFF " }} className={classes.toolicons} />
                <div className={classes.label}>Codepen</div>
              </div>
              <div className={classes.tools}>
                <DiTerminal size={"2.5em"} color={"grey"} style={{ "color": "#fff" }} className={classes.toolicons} />
                <div className={classes.label}>Terminal</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.desp}>
          <div className={classes.iconSection}>
            <h2 className={classes.h2}>Tech I've Worked with</h2>
            <div className={classes.logo}>
              <div className={classes.icons}>
                <div>
                  <span className={classes.logoicons}><DiReact size={"2.5em"} color={"grey"} style={{ "color": "#06bcee" }} className={classes["icons", "react"]} /></span>
                  <div className={classes.label}>React</div>
                </div>
                <div>
                  <span className={classes.logoicons}><DiJsBadge size={"2.5em"} color={"grey"} style={{ "color": "#f0db4f" }} className={classes["icons", "js"]} /></span>
                  <div className={classes.label}>JavaScript</div>
                </div>
                <div>
                  <span className={classes.logoicons}><DiHtml5 size={"2.5em"} color={"grey"} style={{ "color": "#FF5733" }} className={classes["icons", "html"]} /></span>
                  <div className={classes.label}>HTML5</div>
                </div>
                <div>
                  <span className={classes.logoicons}><DiCss3 size={"2.5em"} color={"grey"} style={{ "color": "#264de4" }} className={classes["icons", "css"]} /></span>
                  <div className={classes.label}>CSS3</div>
                </div>
              </div>
              <div className={classes.icons}>
                <div>
                  <span className={classes.logoicons}><DiNodejsSmall size={"2.5em"} color={"grey"} style={{ "color": "#303030" }} className={classes["icons", "nodejs"]} /></span>
                  <div className={classes.label}>NodeJS</div>
                </div>
                <div>
                  <span className={classes.logoicons}><DiMongodb size={"2.5em"} color={"grey"} style={{ "color": "#4DB33D" }} className={classes["icons", "mongodb"]} /></span>
                  <div className={classes.label}>MongoDB</div>
                </div>
                <div>
                  <span className={classes.logoicons}><DiDjango size={"2.5em"} color={"grey"} style={{ "color": "#092e20" }} className={classes["icons", "python"]} /></span>
                  <div className={classes.label}>Django</div>
                </div>
                <div>
                  <span className={classes.logoicons}><DiBootstrap size={"2.5em"} color={"grey"} style={{ "color": "#563d7c" }} className={classes["icons", "python"]} /></span>
                  <div className={classes.label}>Bootstrap</div>
                </div>
              </div>
              <div className={classes.icons}>
                <div>
                  <span className={classes.logoicons}><DiWordpress size={"2.5em"} color={"grey"} style={{ "color": "#21759bs" }} className={classes["icons", "python"]} /></span>
                  <div className={classes.label}>Wordpress</div>
                </div>
                <div>
                  <span className={classes.logoicons}><DiPython size={"2.5em"} color={"grey"} style={{ "color": "#FFD43B" }} className={classes["icons", "python"]} /></span>
                  <div className={classes.label}>Python</div>
                </div>
                <div>
                  <span className={classes.logoicons}><DiGit size={"2.5em"} color={"grey"} style={{ "color": "#f34f29 " }} className={classes["icons", "git"]} /></span>
                  <div className={classes.label}>Git</div>
                </div>
                <div>
                  <span className={classes.logoicons}><DiHeroku size={"2.5em"} color={"grey"} style={{ "color": "purple" }} className={classes["icons", "heroku"]} /></span>
                  <div className={classes.label}>Heroku</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow Image */}
      <div className={classes.zio}><img src={process.env.PUBLIC_URL + "/assests/down-arrow.png"} alt="" /></div>

      {/* Informative Section  */}
      <div className={classes.container2}>
        <div className={classes.div1}>
          <div data-aos="fade">
            <h2 className={classes.div1h2}>Projects I have worked on in 2 years</h2>
            <p>I have worked on various projects including personal ones to client requested projects with experience of 2+ years. Recently I have been working upon Greendoors offered by client for his business plan.</p>
            <p className={classes.downarrow}>My Recent Projects are listed below. <span >&#8595;</span></p>
          </div>

          <div className={classes.ImageContainer} data-aos="flip-up">
            <div className={classes.ImageContainerimg}>
              <a href="#"><img src={process.env.PUBLIC_URL + "/assests/borrowtrendproject.png"} alt="" /></a>
            </div>
            <div className={classes.ImageContainerText}>
              <h2 className={classes.projectTitle}><a href="" className={classes["hover-underline-animation"]}>The Borrow Trend - Rental E-Commerce Website <span>&#8594;</span></a></h2>
              <p className={classes.projectTool}>Build with Nodejs and ExpressJs with MongoDB as Database.</p>
              <p className={classes.projectDescription}>An online e-commerce rental website for buying and renting all fashion related things like Jewellery, Shoes, Clothes and other material related to fashion. Key Features include Login Portal, Payment Gateway, Add to Cart, User Dashboard and all basic neccesities.</p>
              <div className={classes.checkWebsite}>
                <div>Check Live - <a href="#">www.google.com</a></div>
                <div>Github - <a href="#">www.google.com</a></div>
                <a href={process.env.PUBLIC_URL + "/assests/borrow_trend_design.pdf"} download><button className={classes.btn}>Download Sample Design</button></a>
              </div>
            </div>
          </div>
          <div className={classes.ImageContainer} data-aos="flip-down">
            <div className={classes.ImageContainerimg}>
              <a href="#"><img src={process.env.PUBLIC_URL + "/assests/pymonkproject.png"} alt="" /></a>
            </div>
            <div className={classes.ImageContainerText}>
              <h2 className={classes.projectTitle}><a href="" className={classes["hover-underline-animation"]}>PyMonk Travels - Online Ticket Booking Website <span>&#8594;</span></a></h2>
              <p className={classes.projectTool}>Build with Python Framework Django with API's and PostgresSQL as Database for the system.</p>
              <p className={classes.projectDescription}>Online Ticket Booking website developed for customers for booking flights, trains, buses and hotels online fot their trips. Key Features inlcudes Login Portal, Admin Dahsboard, User Dashboard, Payment Gateway and much more...</p>
              <div className={classes.checkWebsite}>
                <div>Check Live - <a href="#">www.google.com</a></div>
                <div>Github - <a href="#">www.google.com</a></div>
                <a href={process.env.PUBLIC_URL + "/assests/borrow_trend_design.pdf"} download><button className={classes.btn}>Download Sample Design</button></a>
              </div>
            </div>
          </div>
          <div className={classes.ImageContainer} data-aos="flip-up">
            <div className={classes.ImageContainerimg}>
              <a href="#"><img src={process.env.PUBLIC_URL + "/assests/borrowtrendproject.png"} alt="" /></a>
            </div>
            <div className={classes.ImageContainerText}>
              <h2 className={classes.projectTitle}><a href="" className={classes["hover-underline-animation"]}>Greendoors - Painting website <span>&#8594;</span></a></h2>
              <p className={classes.projectTool}>Build with Javascript Library ReactJS with Hooks, components support with Firebase as Database</p>
              <p className={classes.projectDescription}>Business website for home painting and exterior painting with all services options from booking home visits to choosing colors for homes. Key Features includes visulializer, Quotation calculator, Gallery, paint cost estimater, color pallate for homes and much more...</p>
              <div className={classes.checkWebsite}>
                <div>Check Live - <a href="#">www.google.com</a></div>
                <div>Github - <a href="#">www.google.com</a></div>
                <a href={process.env.PUBLIC_URL + "/assests/greendoors_design.pdf"} download><button className={classes.btn} >Download Sample Design</button></a>
              </div>
            </div>
          </div>

          <div className={classes.exploreMore}>
            <a href="https://www.github.com/Dipesh107" target={"_blank"}>
              Explore More <span>&#8594;</span>
            </a>
          </div>
        </div>
      </div>

    </div >
  )
};

export default Project;