import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { List } from "@material-ui/core";
import { Link } from "@material-ui/core";

import useStyles from "./style";

export default function Menu() {
  const classes = useStyles();
  const linkType = "overline";
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.linkItem}>
            <Typography className={classes.pageTitle} variant="h4">
              KH
            </Typography>
          </Link>
          <List className={classes.links}>
            <Link to="/" className={classes.linkItem}>
              <Typography variant={linkType} className={classes.title}>
                About
              </Typography>
            </Link>
            <a
              target="_blank"
              href={
                process.env.PUBLIC_URL +
                "/assets/resume/Kiana_Hosseini_Resume.pdf"
              }
              className={classes.linkItem}
            >
              <Typography variant={linkType} className={classes.title}>
                Resume
              </Typography>
            </a>
            <Link to="/" className={classes.linkItem}>
              <Typography variant={linkType} className={classes.title}>
                Code
              </Typography>
            </Link>
            <Link to="/" className={classes.linkItem}>
              <Typography variant={linkType} className={classes.title}>
                Architecture
              </Typography>
            </Link>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
}
