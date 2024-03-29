import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    body2: {
      fontWeight: "300",
    },
  },

  palette: {
    primary: {
      main: "#00A6D4",
    },
    secondary: {
      main: "#04828a",
    },
  },
});

export default Theme;
