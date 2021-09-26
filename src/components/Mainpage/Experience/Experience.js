import React from "react";
import { DiReact, DiJavascript, DiMongodb, DiVisualstudio, DiGit, DiDocker, DiNodejs, DiHeroku, DiCss3, DiHtml5 } from "react-icons/di";
import classes from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={classes.section} data-aos="fade-left">
      <div className={classes.iconSection}>
        <DiReact size={"3.5em"} color={"grey"} style={{ "color": "#06bcee" }} className={classes["icons", "react"]} />
        <DiHtml5 size={"3.5em"} color={"grey"} style={{ "color": "#FF5733" }} className={classes["icons", "html"]} />
        <DiCss3 size={"3.5em"} color={"grey"} style={{ "color": "#264de4" }} className={classes["icons", "css"]} />
        <DiJavascript size={"3.5em"} color={"grey"} style={{ "color": "#f0db4f" }} className={classes["icons", "js"]} />
        <DiMongodb size={"3.5em"} color={"grey"} style={{ "color": "#4DB33D" }} className={classes["icons", "mongodb"]} />
        <DiNodejs size={"3.5em"} color={"grey"} style={{ "color": "#303030" }} className={classes["icons", "nodejs"]} />
        <DiGit size={"3.5em"} color={"grey"} style={{ "color": "#f34f29 " }} className={classes["icons", "git"]} />
        <DiDocker size={"3.5em"} color={"grey"} style={{ "color": "#0db7ed" }} className={classes["icons", "docker"]} />
        <DiHeroku size={"3.5em"} color={"grey"} style={{ "color": "purple" }} className={classes["icons", "heroku"]} />
        <DiVisualstudio size={"3.5em"} color={"grey"} style={{ "color": "blue" }} className={classes["icons", "vscode"]} />
      </div>
    </div>
  )
};

export default Experience;