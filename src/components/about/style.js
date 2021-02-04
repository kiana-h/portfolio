import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  about: {
    display: "flex",
    width: "1150px",
    margin: "150px auto",
    alignItems: "center",
  },
  myPhoto: {
    borderRadius: "50%",
    width: "300px",
    height: "300px",
  },
  myInfo: {
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(12),
  },
}));

export default useStyles;
