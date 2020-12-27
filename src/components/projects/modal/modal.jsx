import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import InfoIcon from "@material-ui/icons/Info";

const imagePath = process.env.PUBLIC_URL + "/assets/design/";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    "&:hover": {
      cursor: "pointer",
    },
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
    "&:hover": {
      cursor: "pointer",
    },
  },
  dialogPaper: {
    height: "600px",
    maxWidth: "1000px",
  },
  modalContent: {
    display: "flex",
  },
  modalText: {
    width: "300px",
    boxSizing: "border-box",
    marginRight: "20px",
    height: "450px",
    overflow: "auto",
  },
  modalGallery: {
    boxSizing: "border-box",
    width: "600px",
  },

  modalImageContainer: {
    height: "400px",
    width: "600px",
  },
  modalImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    overflow: "hidden",
  },
  modalThumbRow: {
    width: "608px",
    height: "40px",
    display: "flex",
    marginTop: "10px",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  thumb: {
    boxSizing: "border-box",
    width: "9%",
    marginRight: "1%",
    height: "40px",
    objectFit: "cover",
    overflow: "hidden",
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const CustomizedDialogs = withStyles(styles)((props) => {
  const { children, classes, close, open, tile, ...other } = props;
  const [hoverId, setHoverId] = React.useState(0);

  const handleClose = () => {
    close();
  };

  const handleHover = (i) => {
    setHoverId(i);
  };

  // const handleHoverEnd = () => {
  //   setHoverId(0);
  // };

  const description = (description) => {
    return description.map((paragraph, i) => {
      return (
        <Typography
          variant="body2"
          key={`${tile.code}-paragraph-${i}`}
          gutterBottom
        >
          {paragraph}
        </Typography>
      );
    });
  };
  const photoGallery = (photos, code) => {
    const thumbs = photos.map((photoUrl, i) => {
      return (
        <img
          onMouseEnter={() => {
            handleHover(i);
          }}
          // onMouseLeave={handleHoverEnd}
          className={classes.thumb}
          src={imagePath + code + "/" + photoUrl + ".png"}
          alt={`${i}-thumb-${code}`}
          key={`${i}-thumb-${code}`}
        ></img>
      );
    });
    return (
      <div>
        <div className={classes.modalImageContainer}>
          {code === "dish_geo" && hoverId === "7" ? (
            <img
              className={classes.modalImage}
              src={imagePath + code + "/dish_geo7.gif"}
            ></img>
          ) : (
            <img
              className={classes.modalImage}
              src={imagePath + code + "/" + photos[hoverId] + ".png"}
            ></img>
          )}
        </div>
        <div className={classes.modalThumbRow}>
          {thumbs}
          {code === "dish_geo" && (
            <img
              onMouseEnter={() => {
                handleHover(i);
              }}
              // onMouseLeave={handleHoverEnd}
              className={classes.thumb}
              src={imagePath + code + "/dish_geo7.gif"}
              alt={`7-thumb-${code}`}
              key={`7-thumb-${code}`}
            ></img>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        classes={{ paper: classes.dialogPaper }}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography variant="h5">{tile.title}</Typography>
        </DialogTitle>

        <DialogContent dividers className={classes.modalContent}>
          <div className={classes.modalText}>
            <Typography variant="subtitle2">{tile.subtitle}</Typography>
            <br />
            {description(tile.description)}
          </div>
          <div className={classes.modalGallery}>
            {photoGallery(tile.photos, tile.code)}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
});

export default CustomizedDialogs;
