import React from "react";
import Typography from "@material-ui/core/Typography";
import { List } from "@material-ui/core";
import Slide from "react-reveal/Slide";

import useStyles from "./style";

export default function About({ section }) {
  const classes = useStyles();
  const bioInfo = [
    "I grew up in Iran. I left after college.",
    "I have a background in mathematics/physics (ranked 99.999 percentile in the National Mathematics Exam in Iran among 300,000 participants).",
    "I have a master's degree from Yale and a bachelor's degree from University of Tehran.",
    "Python is my favorite programming language.",
    "I design and develop fullstack applications.",
    "Leetcode stats: 203 problems as of today.",
    "I'm a licensed architect in California.",
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
            <p>Not-So-Random Facts:</p>
            <List>{myBio()}</List>
          </div>
        </Slide>
      </div>
    </div>
  );
}
