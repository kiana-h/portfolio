import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: theme.spacing(4),
    marginRight: "0",
    fontSize: "30px",
    fontWeight: "200",
  },
  blurb: {
    display: "flex",
    flexDirection: "column",
    width: "800px",
    margin: "200px auto",
  },
  border: {
    height: "00px",
    width: "80vw",
    borderColor: "rgb(120,120,120)",
    borderTop: "1px solid black",
    margin: "300px auto",
  },
  textContainer: {
    display: "flex",
  },
  typist: {
    display: "inline",
    marginLeft: theme.spacing(1),
    marginRight: "0",
    fontSize: "30px",
    fontWeight: "200",
  },
  boldTitle: {
    margin: "0",
    marginLeft: theme.spacing(1),
    padding: "0",
    fontSize: "30px",
    fontWeight: "300",
  },
}));

export default useStyles;
