import React from "react";
import Typography from "@material-ui/core/Typography";
import { List } from "@material-ui/core";
import { Link } from "@material-ui/core";

import ProjectItem from "./project_item";
import useStyles from "./style";

export default function ProjectIndex({ projectData, section }) {
  const classes = useStyles();
  const projectList = (items) => {
    return items.map((item, i) => (
      <ProjectItem key={`project-${i}`} project={item} number={i + 1} />
    ));
  };
  return (
    <div className={classes.root} id={section}>
      <List>{projectList(projectData)}</List>
    </div>
  );
}
