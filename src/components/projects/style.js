import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "1150px",
    margin: "0 auto",
    borderTop: "1px solid",
    borderColor: "rgba(120, 120, 120, 0.5)",
    paddingTop: "150px",
  },

  projectItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "150px",
  },
  projectDesc: {
    width: "500px",
    marginBottom: theme.spacing(3),
  },
  projectTechs: {
    display: "flex",
    flexDirection: "row",
    marginBottom: theme.spacing(3),
  },
  projectTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    border: "none",
  },
  link: {
    color: "#00818b",
    "&:hover": {
      color: "black",
    },
  },
  photoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "25px",
  },
  projectTexts: {
    marginRight: "100px",
  },
  projectPhoto: {
    width: "550px",
    height: "317px",
  },
  photoTitle: {
    width: "550px",
    backgroundColor: "rgba(0,0,0,.75)",
    position: "relative",
    top: "-50px",
    left: "-3px",
    textAlign: "center",
    padding: "10px 0",
    color: "white",
    height: "30px",
  },
  dotContainer: {
    display: "flex",
    alignItems: "center",
    listStyleType: "none",
    marginTop: "-40px",
    textAlign: "center",
    padding: 0,
  },
  dot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    backgroundColor: "grey",
    margin: "0 5px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  largeDot: {
    color: "black",
    width: "10px",
    height: "10px",
  },
  paragraph: {
    marginbBottom: "100px",
  },
  hidden: {
    visibility: "hidden",
  },
  imageArrows: {
    display: "flex",
    alignItems: "center",
  },
  arrow: {
    color: "grey",
    // backgroundColor: "red",
    "&:hover": {
      cursor: "pointer",
    },
  },
  rightArrow: {
    paddingLeft: "5px",
  },
  bold: {
    fontWeight: "500",
    fontSize: "13px",
  },
}));

export default useStyles;
