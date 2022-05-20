import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import theme from "../theme/theme";
import Modal from "./modal/modal";
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
    },
  },
}));

export default function Tile({ tile, index }) {
  const classes = useStyles(theme);
  const [hoverId, setHoverId] = useState(null);
  const [open, setOpen] = useState(false);

  const handleHover = (e) => {
    setHoverId(e.currentTarget.id);
  };
  const handleHoverEnd = () => {
    setHoverId(null);
  };

  return (
    <GridListTile
      key={`tile-${index}`}
      id={tile.code}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
      onClick={setOpen}
      className={classes.gridImg}
    >
      <img
        src={imagePath + tile.code + "/" + tile.photos[0] + ".png"}
        alt={tile.title}
      />

      {hoverId === tile.code && (
        <GridListTileBar
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverEnd}
          className={classes.tilebar}
          title={tile.title}
          subtitle={<span> {tile.subtitle}</span>}
          actionIcon={<Modal tile={tile} open={open} />}
        />
      )}
    </GridListTile>
  );
}
