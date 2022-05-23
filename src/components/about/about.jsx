import React from "react";
import Fade from "react-reveal/Fade";

import useStyles from "./style";
import Contact from "../contact/contact";

export default function About({ section }) {
  const classes = useStyles();
  const bioInfo = [
    "I grew up in Iran and moved to the US for grad school.",
    "I have a master's degree in architecture from Yale and a bachelor's degree from University of Tehran.",
    "I design and develop fullstack applications; most recently focused on developing a data platform to help urban planners design better cities.",
    "My favorite tools are Python & Rhino.",
    "I'm a licensed architect in California. I've designed everything from furniture and single-family houses, to office campuses, schools, and hospitals",
    "My happy place: highway 1 on my motorcycle, or in a tent in the Sierra backcountry.",
  ];
  const myBio = () => {
    return bioInfo.map((val, i) => {
      return (
        <li variant="body2" className={classes.bioItem}>
          {val}
        </li>
      );
    });
  };

  return (
    <div>
      <Fade>
        <div className={classes.about}>
          <img
            className={classes.myPhoto}
            src={process.env.PUBLIC_URL + "/assets/resume/profile.png"}
            alt="profile"
          ></img>

          <div className={classes.myInfo}>
            <ul className={classes.bioList}>{myBio()}</ul>
            <Contact />
          </div>
        </div>
      </Fade>
    </div>
  );
}
