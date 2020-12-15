import React from "react";
import Typography from "@material-ui/core/Typography";
import { List } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { projectData } from "./projects_data";
import ProjectItem from "./project_item";
import useStyles from "./style";

console.log(projectData);
export default function ProjectIndex() {
  const classes = useStyles();
  const projectList = (items) => {
    return items.map((item, i) => (
      <ProjectItem project={item} number={i + 1} />
    ));
  };
  return (
    <div className={classes.root}>
      <List>{projectList(projectData)}</List>
    </div>
  );
}
