import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "1150px",
    margin: "0 auto",
  },
  projectItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "100px",
  },
  projectPhoto: {
    width: "550px",
    height: "auto",
    marginLeft: "100px",
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
    color: "#0e9bd8",
    "&:hover": {
      color: "black",
    },
  },
}));

export default useStyles;
