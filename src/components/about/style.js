import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  about: {
    display: "flex",
    margin: "150px auto",
    alignItems: "center",
    padding: "100px 150px",
    width: "1050px",
  },
  myPhoto: {
    borderRadius: "50%",
    width: "300px",
    height: "300px",
  },
  myInfo: {
    marginLeft: theme.spacing(12),
  },
}));

export default useStyles;
