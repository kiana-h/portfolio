import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import useStyles from "./style";

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: "350px",
  color: "#fff",
  lineHeight: "350px",
  textAlign: "center",
  background: "#364d79",
};
const Gallery = ({ photoUrls, number }) => {
  const classes = useStyles();
  const imagePath = process.env.PUBLIC_URL + "/assets/project-screenshots/";
  const photolist = () => {
    return photoUrls.map((url, i) => (
      <div key={`imgContainer-${number}-${i}`}>
        <img
          key={`img-${number}-${i}`}
          src={imagePath + url}
          style={contentStyle}
        ></img>
      </div>
    ));
  };
  return <Carousel afterChange={onChange}>{photolist()}</Carousel>;
};

export default Gallery;
