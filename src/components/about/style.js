import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  about: {
    display: "flex",
    margin: "150px auto",
    alignItems: "center",
    padding: "100px 150px",
    width: "1000px",
  },
  myPhoto: {
    borderRadius: "50%",
    width: "300px",
    height: "300px",
  },
  myInfo: {
    marginLeft: theme.spacing(12),
  },
  bioList: {
    paddingInlineStart: 0,
  },
  bioItem: {
    fontSize: "0.875rem",
    fontFamily: "Montserrat,sans-serif",
    fontWeight: 300,
    lineHeight: 1.43,
  },
}));

export default useStyles;
