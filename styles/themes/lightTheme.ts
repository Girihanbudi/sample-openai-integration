import { createTheme } from "@mui/material/styles";

// Color generated from
// http://mcg.mbitson.com/
export const LIGHT = "light";

export const lightTheme = createTheme({
  mode: LIGHT,
  typography: {
    allVariants: {
      color: "#121212",
    },
  },
  palette: {
    white: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#e0e0e0",
    },
    primary: {
      light: "#f1fee8",
      main: "#d7fcbe",
      dark: "#b3fa8b",
      50: "#f9fff6",
      100: "#f1fee8",
      200: "#e8fed9",
      300: "#defdca",
      400: "#d7fcbe",
      500: "#d0fcb3",
      600: "#cbfcac",
      700: "#c4fba3",
      800: "#befb9a",
      900: "#b3fa8b",
      A100: "#ffffff",
      A200: "#ffffff",
      A400: "#ffffff",
      A700: "#ffffff",
      contrastText: "dark",
    },
    secondary: {
      light: "#f8f8f8",
      main: "#ececec",
      dark: "#d9d9d9",
      50: "#fcfcfc",
      100: "#f8f8f8",
      200: "#f4f4f4",
      300: "#f0f0f0",
      400: "#ececec",
      500: "#e9e9e9",
      600: "#e6e6e6",
      700: "#e3e3e3",
      800: "#dfdfdf",
      900: "#d9d9d9",
      A100: "#ffffff",
      A200: "#ffffff",
      A400: "#ffffff",
      A700: "#ffffff",
      contrastText: "dark",
    },
    // error: {
    //   light: '#ab003c',
    //   main: '#F50057',
    //   dark: '#f73378',
    //   contrastText: '#ffffff',
    // },
    // info: {
    //   light: '#aba18f',
    //   main: '#F5E7CD',
    //   dark: '#f7ebd7',
    //   contrastText: '#ffffff',
    // },
    // warning: {
    //   light: '#b08f03',
    //   main: '#FCCD05',
    //   dark: '#fcd737',
    //   contrastText: '#ffffff',
    // },
    // success: {
    //   light: '#5d067e',
    //   main: '#8609b5',
    //   dark: '#9e3ac3',
    //   contrastText: '#ffffff',
    // },
    background: {
      default: "#F5F8FE",
      paper: "#FFFFFF",
      light: {
        50: "rgba(255, 255, 255, 0.1)",
        100: "rgba(255, 255, 255, 0.2)",
        200: "rgba(255, 255, 255, 0.3)",
        300: "rgba(255, 255, 255, 0.4)",
        400: "rgba(255, 255, 255, 0.5)",
        500: "rgba(255, 255, 255, 0.6)",
        600: "rgba(255, 255, 255, 0.7)",
        700: "rgba(255, 255, 255, 0.8)",
        800: "rgba(255, 255, 255, 0.9)",
        900: "rgba(255, 255, 255, 1.0)",
      },
      dark: {
        50: "rgba(0, 0, 0, 0.1)",
        100: "rgba(0, 0, 0, 0.2)",
        200: "rgba(0, 0, 0, 0.3)",
        300: "rgba(0, 0, 0, 0.4)",
        400: "rgba(0, 0, 0, 0.5)",
        500: "rgba(0, 0, 0, 0.6)",
        600: "rgba(0, 0, 0, 0.7)",
        700: "rgba(0, 0, 0, 0.8)",
        800: "rgba(0, 0, 0, 0.9)",
        900: "rgba(0, 0, 0, 1.0)",
      },
    },
    // divider: '#01508c',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderColor: "#9e3ac3",
          border: 1,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#F5F8FE",
        },
      },
    },
    // MuiPaper: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: 10,
    //       boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.2)",
    //     },
    //   },
    // },
  },
});

export default lightTheme;
