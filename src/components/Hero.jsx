import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import heroBg from "../assets/hero-slider-bg.jpg";

const Hero = () => {
  return (
    <Box
      className="hero-section"
      sx={{
        position: "relative",
        height: { xs: 220, md: 640 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Center vertically
        alignItems: "center",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Static Background */}
      <Box
        component="img"
        src={heroBg}
        alt="Workshop Hero"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          filter: "brightness(0.7)",
          zIndex: 1,
        }}
      />

      {/* Overlay Text + Button */}
      <motion.div
        className="hero-overlay"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: "relative", zIndex: 2 }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          mb={1}
          sx={{ fontSize: { xs: "1.1rem", md: "2.2rem" }, color: "#fff" }}
        >
          Licensed Automobile Center
        </Typography>
        <Typography
          variant="body1"
          fontWeight={400}
          letterSpacing={0.5}
          sx={{ color: "#fff", mb: 3 }}
        >
          FRAMEWORK FOR GRANT OF LICENSE TO AUTOMOBILE CENTERS
          <br />
          FOR CONDUCTING VEHICLE INSPECTION AND FITNESS CERTIFICATION FOR MOTOR
          CARS
        </Typography>

        {/* Register Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ display: "inline-block" }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#24884a",
              color: "#fff",
              fontWeight: 500,
              fontSize: { xs: "0.95rem", md: "1.08rem" },
              borderRadius: 2,
              px: 4,
              py: 1.5,
              boxShadow: 2,
              "&:hover": { bgcolor: "#0F8F49", color: "#fff" },
            }}
          >
            GET CENTER LICENSED
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Hero;
