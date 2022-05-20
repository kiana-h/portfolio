import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
    marginLeft: "1rem",
  },
  contactInfo: {
    display: "flex",
    margin: "0 auto",
    alignItems: "center",
  },
  email: {
    fontSize: ".75rem",
    borderColor: "#16becf",
    "&:hover": {
      color: "white",
      fontWeight: "600",
      backgroundColor: "#16becf",
    },
  },
  linkItem: {
    textDecoration: "none",
    marginLeft: "1rem",
    marginTop: ".2rem",
  },
  socialIcons: {
    display: "flex",
    width: "150px",
    justifyContent: "space-around",
  },
  Icon: {
    "&:hover": {
      fill: "#16becf",
      fontWeight: "600",
      cursor: "pointer",
    },
  },
}));

export default useStyles;
