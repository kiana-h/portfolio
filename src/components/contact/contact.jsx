import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";

import useStyles from "./style";

export default function Contact({ section }) {
  const classes = useStyles();
  const email = "s.kiana.hosseini@gmail.com";
  return (
    <div className={classes.root} id={section}>
      <div className={classes.contactInfo}>
        Find me on
        <div className={classes.socialIcons}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kiana-hosseini/"
            rel="noreferrer"
          >
            <LinkedInIcon className={classes.icon} />
          </a>
          <a
            target="_blank"
            href="https://github.com/kiana-h"
            className={classes.icon}
            rel="noreferrer"
          >
            <GitHubIcon className={classes.icon} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/kioolaa/"
            className={classes.icon}
            rel="noreferrer"
          >
            <InstagramIcon className={classes.icon} />
          </a>
        </div>
        or send me an
        <a
          target="_blank"
          href={`mailto:${email}`}
          className={classes.linkItem}
          rel="noreferrer"
        >
          <EmailOutlinedIcon />
        </a>
      </div>
    </div>
  );
}
