import React from "react";
import Typography from "@material-ui/core/Typography";
import { List } from "@material-ui/core";
import Slide from "react-reveal/Slide";

import useStyles from "./style";

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
      <div className="border" id={section}></div>
      <div className={classes.about}>
        <Slide left>
          <img
            className={classes.myPhoto}
            src={process.env.PUBLIC_URL + "/assets/resume/profile.png"}
          ></img>
        </Slide>
        <Slide right>
          <div className={classes.myInfo}>
            {/* <p>Not-So-Random Facts:</p> */}
            <List>{myBio()}</List>
          </div>
        </Slide>
      </div>
    </div>
  );
}
