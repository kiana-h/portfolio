import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  appbar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
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
  pageTitle: {
    color: "black",
    fontWeight: "600",
    textShadow: "3px 0px #16becf",
  },
}));

export default useStyles;
