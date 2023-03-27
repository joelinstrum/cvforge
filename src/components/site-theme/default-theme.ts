// import { alpha } from "@mui/material";
import theme from "./siteThemeConfig";

const defaultTheme = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          backgroundColor: theme.backgroundColor,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: theme.linkColor,
          cursor: "pointer",
          "&:hover": {
            color: theme.linkColorLight,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: theme.primaryColor,
          color: theme.fontColorMain,
        },
      },
    },
  },
  palette: {
    primary: {
      main: theme.primaryColor,
    },
    secondary: {
      main: theme.secondaryColor,
    },
    background: {
      default: theme.backgroundColor,
      modalOuter: "rgba(0, 0, 0, .8)",
      modalInner: theme.modalBackgroundColor,
      logoFill: theme.accentColor1,
    },
    logo: {
      color: theme.accentColor1,
    },
    icon: {
      color: theme.accentColor2,
      hover: theme.accentColor2Dark,
    },
    modal: {
      text: "#eee",
      backgroundHover: "#eee",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ].join(","),
  },
};

export default defaultTheme;
