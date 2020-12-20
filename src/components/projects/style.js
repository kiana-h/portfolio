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
  },
  projectTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(4),
  },
  link: {
    color: "#00818b",
    "&:hover": {
      color: "black",
    },
  },
  photoContainer: {
    width: "550PX",
    height: "350px",
    overflow: "hidden",
  },
  projectPhoto: {
    width: "550px",
    height: "auto",
    marginLeft: "100px",
  },
  dotContainer: {
    display: "flex",
    listStyleType: "none",
  },
}));

export default useStyles;
