import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { List } from "@material-ui/core";
import { Link } from "@material-ui/core";
import Typist from "react-typist";

import useStyles from "./style";

export default function About({ section }) {
  const classes = useStyles();

  return (
    <div>
      <div className="border" id={section}></div>
      <p>About meeee</p>
    </div>
  );
}
