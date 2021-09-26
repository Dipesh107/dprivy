import React from "react";
import classes from "./Header.module.css"
import Info from "./HeaderInfo/Info";
import Nav from "./Navigation/Nav"

const Header = () => {
  return (
    <div className={classes.container}>
      <Nav />
      <Info />
    </div>
  )
}

export default Header;