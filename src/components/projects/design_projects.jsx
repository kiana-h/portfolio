import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Fade from "@material-ui/core/Collapse";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

import theme from "../theme/theme";
import Modal from "./modal/modal";
import { designData } from "../../data/design_projects";
const imagePath = process.env.PUBLIC_URL + "/assets/design/";

for (let project of designData) {
  let names = [];
  const len = project.count + 1 || 11;
  for (let i = 1; i < len; i++) {
    names.push(project.code + i.toString());
  }
  project.photos = names;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "1150px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    borderTop: "1px solid",
    borderColor: "rgba(120,120,120,.5)",
    margin: "0 auto",
    padding: "150px 0",
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 1150,
    // height: 800,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  tilebar: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  gridImg: {
    filter: "grayscale(100%)",
    "&:hover": {
      filter: "none",
      cursor: "pointer",
    },
  },
}));
const tileData = designData;

export default function DesignProjects({ section }) {
  const classes = useStyles(theme);
  const [hoverId, setHoverId] = useState(null);
  const [openId, setOpenId] = useState(null);

  const handleHover = (id) => {
    setHoverId(id);
  };
  const handleHoverEnd = () => {
    setHoverId(null);
  };
  const handleOpen = (id) => {
    setOpenId(id);
  };
  const handleClose = () => {
    setOpenId(null);
  };

  return (
    <div className={classes.root} id={section}>
      <GridList cellHeight={240} cols={3} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: "auto" }}>
          {/* <ListSubheader component="div">
            Featured Design Work
          </ListSubheader> */}
        </GridListTile>
        {tileData.map((tile, i) => (
          <GridListTile
            key={`tile-${i}`}
            onMouseEnter={() => handleHover(tile.code)}
            onMouseLeave={handleHoverEnd}
            className={classes.gridImg}
          >
            <img
              src={imagePath + tile.code + "/" + tile.photos[0] + ".png"}
              alt={tile.title}
              onClick={() => handleOpen(tile.code)}
            />

            {hoverId === tile.code && (
              <GridListTileBar
                className={classes.tilebar}
                title={tile.title}
                subtitle={<span> {tile.subtitle}</span>}
                actionIcon={
                  // <Modal tile={tile} />
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                    onClick={() => handleOpen(tile.code)}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            )}
            <Modal
              tile={tile}
              close={handleClose}
              open={openId === tile.code}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
