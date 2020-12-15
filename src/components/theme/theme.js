import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#6FCF97",
    },
    secondary: {
      main: "#BC9CFF",
    },
  },
});

export default Theme;
