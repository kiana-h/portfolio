import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Slide from "react-reveal/Slide";

import theme from "../theme/theme";
import Modal from "./modal/modal";
import { designData } from "../../data/design_projects";
const imagePath = process.env.PUBLIC_URL + "/assets/design/";

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
        <GridListTile
          key="Subheader"
          cols={3}
          style={{ height: "auto" }}
        ></GridListTile>
        {tileData.map((tile, i) => (
          <GridListTile
            key={`tile-${i}`}
            onMouseEnter={() => handleHover(tile.code)}
            onMouseLeave={handleHoverEnd}
            className={classes.gridImg}
          >
            <img
              src={imagePath + tile.code + "/" + tile.code + "1" + ".png"}
              alt={tile.title}
              onClick={() => handleOpen(tile.code)}
            />

            {hoverId === tile.code && (
              <GridListTileBar
                className={classes.tilebar}
                title={tile.title}
                subtitle={<span> {tile.subtitle}</span>}
                actionIcon={
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
