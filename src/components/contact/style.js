import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "1150px",
    margin: "0 auto",
    borderTop: "1px solid",
    borderColor: "rgba(120,120,120,.5)",
  },
  contactInfo: {
    width: "600px",
    display: "flex",
    margin: "0 auto",
    alignItems: "center",
    height: "200px",
    justifyContent: "space-evenly",
  },
  email: {
    fontSize: ".75rem",
    borderColor: "#16becf",
    // color: "#16becf",
    // fontWeight: 600,
    "&:hover": {
      color: "white",
      fontWeight: "600",
      backgroundColor: "#16becf",
    },
  },
  linkItem: { textDecoration: "none" },
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
