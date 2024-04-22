import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1087B3",
    },
    secondary: {
      main: "#D3D3D3",
      light: "#666f73",
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 24px",
          fontWeight: "600",
          //   color: "white",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
  typography: {
    body1: {
      color: "#0B1134CC",
    },
    body2: {
      color: "#192D46",
    },
  },
});

theme.shadows[1] = "0px 5px 22px lightgray";
