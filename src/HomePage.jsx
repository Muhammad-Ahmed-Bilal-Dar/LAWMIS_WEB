import React from "react";
import { Box } from "@mui/material";

// Import all components
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RegisterStrip from "./components/RegisterStrip";
import About from "./components/About";
import Services from "./components/Services";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <Box
      className="homepage"
      sx={{
        width: "100vw",
        bgcolor: "background.default",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <TopBar />
      <Header />
      <Hero />
      <RegisterStrip />
      <About />
      <Services />
      <Stats />
      <FAQ />
      <Footer />
    </Box>
  );
};

export default HomePage;
