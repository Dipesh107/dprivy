import React, { useEffect } from "react"
import classes from "./About.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaDev } from "react-icons/fa"

const About = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: 'ease-in-sine',
      disable: "mobile"
    })
  });

  return (
    <div className={classes.container} id="aboutId">
      <div className={classes.discussion} data-aos="fade-right">
        <h1 className={classes.firstH1}>Any type of question</h1>
        <h1 className={classes.secondH1}> & Discussions</h1>
        <div className={classes.text}>Lets Talk </div> <div className={classes.line}></div>

        <h2 className={classes.info}><a href="#">info@dipeshpatil.com</a></h2>
        <p className={classes.infolinks} style={{ 'color': "#00aff0" }}>Skype : <a className={classes.skypelink} href="https://join.skype.com/invite/ubbVveRpFl9W" target={'_blank'}>https://join.skype.com/invite/ubbVveRpFl9W</a></p>
        <p className={classes.infolinks} style={{ 'color': "#1DA1F2" }}>Twitter : <a href="https://twitter.com/DipeshP32570979" className={classes.twitter}><FaTwitter></FaTwitter> Ping Me Here</a></p>

        <a href="https://www.github.com/Dipesh107" target="_blank" className={classes.Links}><FaGithub className={classes.github}></FaGithub></a>
        <a href="https://www.linkedin.com/in/dipesh-patil-060b73207/" target="_blank" className={classes.Links}><FaLinkedin className={classes.linkedin}></FaLinkedin></a>
        <a href="https://dev.to/dipesh107" target="_blank" className={classes.Links}><FaDev className={classes.dev} /></a>

      </div>
      <div className={classes.about} data-aos="fade">
        <h1>About Me</h1>
        <p className={classes.description}>I am an Aspiring Full Stack (MERN) Web Developer from India. <br /> I have been working as a Full Stack Web Developer for 2+ years.</p>
        <div className={classes.Data}>
          <div className={classes.tableHeads}>
            <p>Name</p>
            <p>Email</p>
            <p>Website</p>
          </div>
          <div className={classes.colons}>
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>
          <div className={classes.tableData}>
            <p>Dipesh Patil</p>
            <p><a className={classes.mail} href="mailto:dipeshpatil013@gmail.com">dipeshpatil013@gmail.com</a></p>
            <p><a className={classes.website} href="#">www.dipeshpatil.com</a></p>
          </div>
        </div>
        <a href={process.env.PUBLIC_URL + "/assests/dipesh_aadhar.pdf"} download><button className={classes.btn} data-aos="fade" >Download CV</button></a>
      </div>
    </div>
  )
};

export default About;