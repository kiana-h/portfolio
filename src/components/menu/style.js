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
    alignItems: "flex-end",
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
      color: "#16becf",
    },
  },
  resume: {
    fontSize: ".75rem",
    borderColor: "#16becf",
    color: "#16becf",
    fontWeight: "700",
    "&:hover": {
      color: "white",
      fontWeight: "600",
      backgroundColor: "#16becf",
    },
  },
  pageTitle: {
    color: "black",
    fontWeight: "600",
    textShadow: "2px 0px #16becf",
  },
}));

export default useStyles;
