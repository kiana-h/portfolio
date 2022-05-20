import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { List } from "@material-ui/core";
import { Link } from "@material-ui/core";
import Typist from "react-typist";
import { useSpring, animated, config } from "react-spring";

import useStyles from "./style";

export default function Landing() {
  const classes = useStyles();
  const [underline, setUnderline] = React.useState(false);

  const props = useSpring({
    delay: 300,
    config: config.molasses,
    from: {
      textDecoration: "none",
      height: "0.2rem",
      position: "absolute",
      bottom: 0,
    },
    to: {
      opacity: underline ? "1" : "0",
      width: underline ? "100%" : "0%",
      backgroundColor: underline ? "#00A6D4" : "#f50157",
      height: "0.2rem",
      position: "absolute",
      bottom: "-0.3rem",
    },
  });
  const props2 = useSpring({
    delay: 300,
    config: config.molasses,
    fontWeight: 500,
    from: {
      color: "black",
      fontWeight: 300,
    },
    to: {
      color: underline ? "#00A6D4" : "black",
      fontWeight: 300,
    },
  });

  const noun = () => {
    return (
      <Typography className={classes.typist}>
        <Typist
          onTypingDone={() => {
            setUnderline(true);
          }}
        >
          {" "}
          <span style={{ marginRight: ".5rem" }}>a </span>
          <a
            style={{ textDecoration: "none", position: "relative" }}
            href="/code"
          >
            <animated.div style={props2}>software engineer</animated.div>
            <animated.div style={props}></animated.div>
          </a>
          <span style={{ margin: "0 .5rem" }}>& </span>
          <a
            style={{ textDecoration: "none", position: "relative" }}
            href="/design"
          >
            <animated.div style={props2}>architect</animated.div>
            <animated.div style={props}></animated.div>
          </a>
          <span style={{ margin: "0 0.1rem" }}> </span>
        </Typist>
      </Typography>
    );
  };
  return (
    <div className={classes.root}>
      <List className={classes.blurb}>
        <Typography className={classes.title}>Hello.</Typography>
        <div className={classes.textContainer}>
          <Typography className={classes.title}>My name is </Typography>
          <Typography className={classes.boldTitle}>Kiana Hosseini.</Typography>
        </div>
        <div className={classes.textContainer}>
          <Typography className={classes.title}>I am </Typography>
          {noun()}
        </div>
        <Typography className={classes.title}>
          based in San Francisco.
        </Typography>
        <Typography className={classes.title}>
          I make things in the digital and physical world.
        </Typography>
      </List>
      {/* <div className={classes.border}></div> */}
    </div>
  );
}
