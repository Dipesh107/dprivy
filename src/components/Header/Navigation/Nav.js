import React from "react";
import classes from "./Nav.module.css"
import { Link } from 'react-scroll';

const Nav = () => {

  return (
    <div className={classes.nav}>
      <nav className={classes.menu}>
        <input type='checkbox' id='responsive-menu' onclick='updatemenu()' /><label></label>
        <ul>
          <div className={classes["anim-typewriter", "logoName"]}>DipeshPatil</div>
          <li style={{ cursor: "pointer" }}>
            <Link
              activeClass="active"
              to="aboutId"
              spy={true}
              smooth={true}
              duration={500}>About Me </Link>
          </li>
          <li style={{ cursor: "pointer" }}>
            <Link
              activeClass="active"
              to="portfolioId"
              spy={true}
              smooth={true}
              duration={1000}>Portfolio</Link>
          </li>
          <li style={{ cursor: "pointer" }}>
            <Link
              activeClass="active"
              to="projectId"
              spy={true}
              smooth={true}
              duration={500}>Projects</Link>
          </li>
          <li style={{ cursor: "pointer" }}>
            <Link className={classes.contact}
              activeClass="active"
              to="contactId"
              spy={true}
              smooth={true}
              duration={1200}> Contact Me</Link>
          </li>
        </ul>
      </nav>
    </div >
  )
}

export default Nav;