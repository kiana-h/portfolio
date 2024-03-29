import React from "react";
import Typography from "@material-ui/core/Typography";
import { List } from "@material-ui/core";
import Typist from "react-typist";
import { useSpring, animated, config } from "react-spring";
import { Link } from "react-router-dom";

import useStyles from "./style";

export default function Landing() {
  const classes = useStyles();
  const [underline, setUnderline] = React.useState(false);

  const underlineProps = useSpring({
    delay: 50,
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
  const colorProps = useSpring({
    delay: 50,
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

  const typedText = () => {
    return (
      <Typography className={classes.typist}>
        <Typist
          avgTypingDelay={50}
          onTypingDone={() => {
            setUnderline(true);
          }}
        >
          {" "}
          <Link
            style={{ textDecoration: "none", position: "relative" }}
            to="/code"
          >
            <animated.div style={colorProps}>software engineer</animated.div>
            <animated.div style={underlineProps}></animated.div>
          </Link>
          <span style={{ margin: "0 .5rem" }}>& </span>
          <Link
            style={{ textDecoration: "none", position: "relative" }}
            to="/design"
          >
            <animated.div style={colorProps}>architect</animated.div>
            <animated.div style={underlineProps}></animated.div>
          </Link>
          <span style={{ margin: "0 0.1rem" }}> </span>
        </Typist>
      </Typography>
    );
  };
  return (
    <div className={classes.root}>
      <List className={classes.blurb}>
        <Typography className={classes.title}>Hello!</Typography>
        <div className={classes.textContainer}>
          <Typography className={classes.title}>My name is </Typography>
          <Typography className={classes.boldTitle}>
            <span>
              <Link to="/about">Kiana Hosseini</Link>
            </span>
            .
          </Typography>
        </div>
        <div className={classes.textContainer}>
          <Typography className={classes.title}>I am a</Typography>
          {typedText()}
        </div>
        <Typography className={classes.title}>
          based in San Francisco.
        </Typography>
        <Typography className={classes.title}>
          I make things in the digital and physical world.
        </Typography>
      </List>
    </div>
  );
}
