import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { List } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Slide from "react-reveal/Slide";
import useStyles from "./style";

export default function ProjectItem({ project, number }) {
  const imagePath = process.env.PUBLIC_URL + "/assets/project-screenshots/";
  const classes = useStyles();
  const [imgNum, setImgNum] = useState(0);
  const [visible, setVisibility] = useState(false);

  const descriptionList = (arr) => {
    return arr.map((text, i) => (
      <div key={`desc-${number}-${i}`}>
        <Typography key={`desc-${number}-${i}`} variant="body2">
          {text}
        </Typography>
        <br />
      </div>
    ));
  };

  const moveCarousel = (direction) => {
    const nextImg =
      (imgNum + direction + project.photos.length) % project.photos.length;
    setImgNum(nextImg);
  };

  const dots = () => {
    let dotList = [];
    for (let i = 0; i < project.photos.length; i++) {
      dotList.push(
        <li
          key={`dot-${number}-${i}`}
          className={`${classes.dot} ${imgNum === i ? classes.largeDot : ""}`}
          onClick={() => {
            setImgNum(i);
          }}
        ></li>
      );
    }
    return dotList;
  };

  return (
    <div className={classes.projectItem}>
      <Slide left>
        <div className={classes.projectTexts}>
          <div className={classes.projectTitle}>
            <Typography variant="h4">
              0{number}: {project.title}
            </Typography>
            {project.type === "Personal Project" ? (
              <Typography variant="body2">
                <a className={classes.link} target="_blank" href={project.live}>
                  Live
                </a>{" "}
                |{" "}
                <a
                  className={classes.link}
                  target="_blank"
                  href={project.github}
                  rel="noreferrer"
                >
                  Github
                </a>
              </Typography>
            ) : (
              <Typography variant="body2">
                <a
                  className={classes.link}
                  target="_blank"
                  href={project.website}
                  rel="noreferrer"
                >
                  Website
                </a>{" "}
              </Typography>
            )}
          </div>

          <div style={{ display: "flex" }}>
            <Typography variant="body1" className={classes.role}>
              {project.type}
            </Typography>
            <Typography variant="body1" className={classes.role}>
              {project.timeline}
            </Typography>
          </div>
          <div>
            <List className={classes.projectTechs}>
              <Typography variant="body2" className={classes.tech}>
                {project.technologies.join(", ")}
              </Typography>
            </List>
            <List className={classes.projectDesc}>
              {descriptionList(project.description)}
            </List>
          </div>
        </div>
      </Slide>
      <Slide right>
        <div
          className={classes.photoContainer}
          onMouseEnter={() => {
            setVisibility(true);
          }}
          onMouseLeave={() => {
            setVisibility(false);
          }}
        >
          <div className={classes.imageArrows}>
            <ArrowBackIosIcon
              className={`${classes.arrow} ${
                !visible || project.photos.length < 2 ? classes.hidden : ""
              }`}
              onClick={() => {
                moveCarousel(-1);
              }}
            />

            {project.photos[imgNum].url.split(".").reverse()[0] === "mp4" ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className={classes.projectPhoto}
                key={project.title + imgNum}
              >
                <source
                  src={imagePath + project.photos[imgNum].url}
                  type="video/mp4"
                />
              </video>
            ) : (
              <img
                className={classes.projectPhoto}
                src={imagePath + project.photos[imgNum].url}
                alt="project"
              />
            )}

            <ArrowForwardIosIcon
              className={`${classes.arrow} ${classes.rightArrow} ${
                !visible || project.photos.length < 2 ? classes.hidden : ""
              }`}
              onClick={() => {
                moveCarousel(1);
              }}
            />
          </div>
          <Typography
            variant="subtitle1"
            className={`${classes.photoTitle} ${visible ? "" : classes.hidden}`}
          >
            {project.photos[imgNum].title}
          </Typography>
          <ul className={classes.dotContainer}>{dots()}</ul>
        </div>
      </Slide>
    </div>
  );
}
