import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "rgba(255,255,255,.9)",
    boxShadow: "none",
    padding: 0,
    margin: 0,
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  root: {
    flexGrow: 1,
    width: "100%",
    position: "fixed",
    top: 0,
    zIndex: "1000",
    padding: 0,
    margin: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(4),
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  links: {
    display: "flex",
    fontSize: ".75rem",
  },
  linkItem: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "none",
      color: "#00A6D4",
    },
  },
  resume: {
    fontSize: ".75rem",
    borderColor: "#00A6D4",
    color: "#00A6D4",
    fontWeight: "700",
    "&:hover": {
      color: "white",
      fontWeight: "600",
      backgroundColor: "#00A6D4",
    },
  },
  pageTitle: {
    color: "black",
    fontWeight: "300",
  },
}));

export default useStyles;
