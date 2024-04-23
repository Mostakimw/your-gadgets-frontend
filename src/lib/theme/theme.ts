import { createTheme } from "@mui/material/styles";
interface BreakpointOverrides  {
  values: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1400,
    },
  } as BreakpointOverrides ,
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
          // padding: "10px 30px",
          fontWeight: "600",
        },
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
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

theme.shadows[1] = "0px 5px 22px lightGray";
