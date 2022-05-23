import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
  },
  contactInfo: {
    display: "flex",
    margin: "0 auto",
    alignItems: "center",
  },
  email: {
    fontSize: ".75rem",
    borderColor: "#00A6D4",
    "&:hover": {
      color: "white",
      fontWeight: "600",
      backgroundColor: "#00A6D4",
    },
  },
  linkItem: {
    textDecoration: "none",
    marginLeft: "1rem",
    marginTop: ".2rem",
  },
  socialIcons: {
    display: "flex",
    width: "100px",
    justifyContent: "space-around",
    padding: "0 1rem",
  },
  Icon: {
    "&:hover": {
      fill: "#00A6D4",
      fontWeight: "600",
      cursor: "pointer",
    },
  },
}));

export default useStyles;
