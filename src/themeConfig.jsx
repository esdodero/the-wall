import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export const themeClaro = createTheme({
  palette: {
    primary: {
      main: "#0f864f",
      aternativo: "#b8fada",
    },
    secondary: {
      main: purple[500],
    },
  },
  components: {},
});
