import React from "react";
import Typography from "@material-ui/core/Typography";
import { List } from "@material-ui/core";
import Fade from "react-reveal/Fade";

import useStyles from "./style";
import Contact from "../contact/contact";

export default function About({ section }) {
  const classes = useStyles();
  const bioInfo = [
    "I grew up in Iran and moved to the US after college.",
    "I have a master's degree in architecture from Yale and a bachelor's degree from University of Tehran.",
    "Python is my favorite programming language.",
    "I design and develop fullstack applications.",
    "Leetcode stats: 331 problems solved as of today.",
    "I'm a licensed architect in California. I've designed everything from furniture and single-family houses, to office campuses, schools, and hospitals",
    "My happy place: highway 1 on my motorcycle. Or in a tent in the Sierra backcountry.",
  ];
  const myBio = () => {
    return bioInfo.map((val, i) => {
      return <Typography variant="body2">- {val}</Typography>;
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
            <List>{myBio()}</List>
            <Contact />
          </div>
        </div>
      </Fade>
    </div>
  );
}
