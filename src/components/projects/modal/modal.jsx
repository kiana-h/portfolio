import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

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
  const [hoverId, setHoverId] = React.useState(1);

  const handleClose = () => {
    close();
  };

  const handleHover = (i) => {
    setHoverId(i);
  };

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

  const getThumbs = (code, count, videos) => {
    const len = count + 1 || 11;
    let thumbList = [];
    for (let i = 1; i < len; i++) {
      if (videos && videos.includes(i)) {
        thumbList.push(
          <video
            autoPlay
            loop
            muted
            playsInline
            className={classes.thumb}
            onMouseEnter={() => {
              handleHover(i);
            }}
          >
            <source
              src={imagePath + code + "/" + code + i + ".mp4"}
              type="video/mp4"
            />
          </video>
        );
      } else {
        thumbList.push(
          <img
            onMouseEnter={() => {
              handleHover(i);
            }}
            className={classes.thumb}
            src={imagePath + code + "/" + code + i + ".png"}
            alt={`${i}-thumb-${code}`}
            key={`${i}-thumb-${code}`}
          ></img>
        );
      }
    }
    return thumbList;
  };

  const photoGallery = (code, count, videos) => {
    const thumbs = getThumbs(code, count, videos);
    return (
      <div>
        <div className={classes.modalImageContainer}>
          {tile.video && tile.video.includes(hoverId) ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className={classes.modalImage}
              key={code + hoverId}
            >
              <source
                src={imagePath + code + "/" + code + hoverId + ".mp4"}
                type="video/mp4"
              />
            </video>
          ) : (
            <img
              className={classes.modalImage}
              src={imagePath + code + "/" + code + hoverId + ".png"}
            ></img>
          )}
        </div>
        <div className={classes.modalThumbRow}>{thumbs}</div>
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
            {photoGallery(tile.code, tile.count, tile.video)}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
});

export default CustomizedDialogs;
