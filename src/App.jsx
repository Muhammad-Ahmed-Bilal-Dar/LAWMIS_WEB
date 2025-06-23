import React from "react";
import HomePage from "./HomePage";
import "./HomePage.css";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#1a8ed1" },
    secondary: { main: "#1a397b" },
    background: { default: "#f8f9fa", paper: "#fff" },
  },
  typography: {
    fontFamily: ["Segoe UI", "Arial", "sans-serif"].join(","),
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
