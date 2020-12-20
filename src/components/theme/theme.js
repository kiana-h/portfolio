import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#00c1d1",
    },
    secondary: {
      main: "#04828a",
    },
  },
  titleWrap: {
    color: "red",
  },
});

export default Theme;
