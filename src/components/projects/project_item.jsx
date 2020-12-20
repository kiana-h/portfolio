import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { List } from "@material-ui/core";
import { Link } from "@material-ui/core";
import useStyles from "./style";

// import Gallery from "./gallery";
// import "antd/dist/antd.css";
// import { Carousel } from "antd";

export default function ProjectItem({ project, number }) {
  const imagePath = process.env.PUBLIC_URL + "/assets/project-screenshots/";
  const classes = useStyles();
  const [imgNum, setImgNum] = useState(0);

  const descriptionList = (arr) => {
    return arr.map((text, i) => (
      <Typography key={`desc-${number}-${i}`} variant="body2">
        {text}
      </Typography>
    ));
  };

  // const dots = () => {
  //   let dotList = [];
  //   for (let i = 0; i < project.photos.length; i++) {
  //     dotList.push(
  //       <li key={`dot-${number}-${i}`} onClick>
  //         o
  //       </li>
  //     );
  //   }
  //   return dotList;
  // };

  // const photolist = () => {
  //   return project.photos.map((url, i) => (
  //     <div key={`imgContainer-${number}-${i}`}>
  //       <img
  //         key={`img-${number}-${i}`}
  //         src={imagePath + url}
  //         style={contentStyle}
  //       ></img>
  //     </div>
  //   ));
  // };
  // const contentStyle = {
  //   width: "100%",
  //   color: "#fff",
  //   lineHeight: "160px",
  //   textAlign: "center",
  //   background: "#364d79",
  // };

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
      <div>
        <img
          className={classes.projectPhoto}
          src={imagePath + project.photos[imgNum]}
        />
        {/* <ul className={classes.dotContainer}>{dots()}</ul> */}
      </div>
    </div>
  );
}
