import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { List } from "@material-ui/core";
import { Link } from "@material-ui/core";
import Typist from "react-typist";

import useStyles from "./style";

export default function Landing() {
  const classes = useStyles();
  const noun = () => {
    return (
      <Typography className={classes.typist}>
        <Typist>
          <span>an architect</span>
          <Typist.Backspace count={9} delay={500} />
          <span> engineer</span>
          <Typist.Backspace count={11} delay={500} />
          <span> designer</span>
          <Typist.Backspace count={9} delay={500} />
          <span> developer</span>
          <Typist.Backspace count={9} delay={500} />
          <span> builder,</span>
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
      <div className={classes.border}></div>
    </div>
  );
}

// const Landing = () => {
//   const noun = "hello";
//   return (
//     <div>
//       <h1>Hello</h1>
//       <p>My name is Kiana Hosseini.</p>
//       <p>I am {noun},</p>
//       <p>based in San Francisco.</p>
//     </div>
//   );
// };
