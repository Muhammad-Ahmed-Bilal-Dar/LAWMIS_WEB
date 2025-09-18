import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "./index.css";
import "./HomePage.css";
import HomePage from "./HomePage.jsx";

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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  </StrictMode>
);
