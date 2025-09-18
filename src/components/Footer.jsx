import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { sectionVariants } from "./animations";
import nespakLogo from "../assets/nespaklogo.png";

const Footer = () => {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Box
        className="footer"
        sx={{
          bgcolor: "#14AE5C",
          py: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={nespakLogo}
          alt="Nespak Logo"
          sx={{ width: 350, height: 80, mx: 2, verticalAlign: "middle" }}
        />
      </Box>
    </motion.div>
  );
};

export default Footer;
