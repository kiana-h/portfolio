import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { List } from "@material-ui/core";
import { Link, Button } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import Typist from "react-typist";

import useStyles from "./style";

export default function Contact({ section }) {
  const classes = useStyles();
  const email = "s.kiana.hosseini@gmail.com";
  return (
    <div className={classes.root} id={section}>
      <div className={classes.contactInfo}>
        <Typography>Find me on</Typography>
        <div className={classes.socialIcons}>
          <a target="_blank" href="https://www.linkedin.com/in/kiana-hosseini/">
            <LinkedInIcon className={classes.icon} />
          </a>
          <a
            target="_blank"
            href="https://github.com/kiana-h"
            className={classes.icon}
          >
            <GitHubIcon className={classes.icon} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/kioolaa/"
            className={classes.icon}
          >
            <InstagramIcon className={classes.icon} />
          </a>
        </div>
        <Typography>or send me an </Typography>
        <a
          target="_blank"
          href={`mailto:${email}`}
          className={classes.linkItem}
        >
          <EmailOutlinedIcon />
        </a>
      </div>
      <footer></footer>
    </div>
  );
}
