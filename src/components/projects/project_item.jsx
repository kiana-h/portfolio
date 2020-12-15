import React from "react";
import Typography from "@material-ui/core/Typography";
import { List } from "@material-ui/core";
import { Link } from "@material-ui/core";
import useStyles from "./style";
const imagePath = process.env.PUBLIC_URL + "/assets/project-screenshots/";

export default function ProjectItem({ project, number }) {
  const classes = useStyles();
  console.log(project);
  const descriptionList = (arr) => {
    return arr.map((text) => <Typography variant="body2">{text}</Typography>);
  };

  return (
    <div className={classes.projectItem}>
      <div className={classes.projectTexts}>
        <div className={classes.projectTitle}>
          <Typography variant="h4">
            0{number}: {project.title}
          </Typography>
          <Typography variant="body2">
            <a className={classes.link} target="_blank" href={project.live}>
              Live
            </a>{" "}
            |{" "}
            <a className={classes.link} target="_blank" href={project.github}>
              Github
            </a>
          </Typography>
        </div>
        <div>
          <List className={classes.projectDesc}>
            {descriptionList(project.description)}
          </List>
          <Typography variant="h6">Technologies:</Typography>
          <List className={classes.projectTechs}>
            <Typography variant="body2">
              {project.technologies.join(", ")}
            </Typography>
          </List>
        </div>
      </div>
      <div className={classes.photoContainer}>
        <img
          className={classes.projectPhoto}
          src={imagePath + project.photos[0]}
          alt={project.photos[0]}
        />
      </div>
    </div>
  );
}
