import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { List, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./style";

export default function Menu() {
  const classes = useStyles();
  const linkType = "overline";
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.linkItem}>
            <img
              src="../../Logo_K.png"
              style={{
                width: "3rem",
                position: "absolute",
                left: "1.35rem",
              }}
              alt="logo"
            />
            <img
              src="../../Logo_K.png"
              style={{
                width: "3rem",
                filter: "grayscale(100%) brightness(0%) contrast(100%)",
              }}
              alt="logo"
            />
          </Link>
          <List className={classes.links}>
            <Link to="/code" className={classes.linkItem}>
              <Typography variant={linkType} className={classes.title}>
                Code
              </Typography>
            </Link>
            <Link to="/design" className={classes.linkItem}>
              <Typography variant={linkType} className={classes.title}>
                Design
              </Typography>
            </Link>
            <Link to="/about" className={classes.linkItem}>
              <Typography variant={linkType} className={classes.title}>
                About
              </Typography>
            </Link>
            {/* <a
              target="_blank"
              href={
                process.env.PUBLIC_URL +
                "/assets/resume/Kiana_Hosseini_Resume.pdf"
              }
              className={classes.linkItem}
              rel="noreferrer"
            >
              <Typography variant={linkType} className={classes.title}>
                <Button className={classes.resume} variant="outlined">
                  Resume
                </Button>
              </Typography>
            </a> */}
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
}
