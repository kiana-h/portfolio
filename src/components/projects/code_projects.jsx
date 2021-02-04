import React from "react";
import { List } from "@material-ui/core";
import { codeData } from "../../data/coding_projects";
import ProjectItem from "./project_item";
import useStyles from "./style";

export default function ProjectIndex() {
  const classes = useStyles();

  const projectList = (items) => {
    return items.map((item, i) => (
      <ProjectItem key={`project-${i}`} project={item} number={i + 1} />
    ));
  };
  return (
    <div className={classes.root} id="#code">
      <List>{projectList(codeData)}</List>
    </div>
  );
}
