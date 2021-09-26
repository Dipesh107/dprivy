import React, { useEffect } from "react"
import classes from "./Contact.module.css"
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"
import Form from "./Form"
import Aos from "aos";
import "aos/dist/aos.css"

const Contact = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: 'ease-in-sine',
      delay: 100,
      disable: "mobile"
    })
  });

  const d = new Date();
  const year = d.getFullYear();

  return (
    <div id="contactId">

      <div className={classes.contactSection}>
        <div className={classes.contactMeTitle} data-aos="fade">
          Contact Me
        </div>
        <div className={classes.container}>
          <div className={classes.discussion} data-aos="fade-right">
            <h1 className={classes.H1}>Let's Talk</h1>
            <div>
              <p className={classes.text}>Available anytime for collaboration and discussion on any topic just ping me on Twitter or fill the form. </p>
            </div>

            <h2 className={classes.info}><a href="#">info@dipeshpatil.com</a></h2>
            <p className={classes.infolinks} style={{ 'color': "#00aff0" }}>Skype : <a className={classes.skypelink} href="https://join.skype.com/invite/ubbVveRpFl9W" target={'_blank'}>https://join.skype.com/invite/ubbVveRpFl9W</a></p>
            <p className={classes.infolinks} style={{ 'color': "#1DA1F2" }}>Twitter : <a href="https://twitter.com/DipeshP32570979" className={classes.twitter}><FaTwitter></FaTwitter> Ping Me Here</a></p>

            <a href="" className={classes.Links}><FaGithub className={classes.github}></FaGithub></a>
            <a href="" className={classes.Links}><FaLinkedin className={classes.linkedin}></FaLinkedin></a>
            <a href="" className={classes.Links}><FaInstagram className={classes.instagram} /></a>

          </div>

          <div className={classes.contactForm} data-aos="fade" >
            <h1>Let Me Know Here</h1>
            {/* contact form  */}
            <Form />
          </div>

        </div>
        <div className={classes.copyright} data-aos="fade">
          <p>
            <span>&#9400;</span>{year} DIPESH PATIL | Web Developer | UI/UX Learner
          </p>
        </div>
      </div>
    </div >
  )
};

export default Contact;