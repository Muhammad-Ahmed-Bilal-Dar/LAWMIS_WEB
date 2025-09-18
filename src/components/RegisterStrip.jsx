import React from "react";
import { Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { sectionVariants } from "./animations";
import DownloadIcon from "@mui/icons-material/Download";

const RegisterStrip = () => {
  return (
    <motion.div
      className="register-strip"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        width: "100%",
        maxWidth: "100vw",
        marginLeft: 0,
        background: "linear-gradient(135deg, #14AE5C 0%, #0F8F49 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "12px 20px",
        gap: "12px",
        position: "relative",
        zIndex: 5,
        boxSizing: "border-box",
        borderRadius: 0,
        boxShadow: "0 2px 8px rgba(20, 174, 92, 0.2)",
        overflowX: "hidden",
      }}
    >
      {/* Text */}
      <Typography
        className="register-strip-text"
        sx={{
          color: "#fff",
          fontSize: { xs: "0.8rem", md: "1rem" },
          fontWeight: 600,
          letterSpacing: 0.2,
          textAlign: "center",
          flex: 1,
          m: 0,
          maxWidth: "550px",
        }}
      >
        DOWNLOAD FRAMEWORK FOR SUBMISSION OF LICENSE APPLICATION
      </Typography>

      {/* Download Button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          className="register-strip-btn"
          variant="contained"
          startIcon={<DownloadIcon />}
          sx={{
            bgcolor: "#fff",
            color: "#14AE5C",
            fontWeight: 600,
            fontSize: { xs: "0.75rem", md: "0.85rem" },
            borderRadius: 3,
            px: 2,
            py: 0.7,
            boxShadow: "0 4px 12px rgba(255, 255, 255, 0.3)",
            textTransform: "none",
            border: "2px solid transparent",
            transition: "all 0.3s ease",
            minHeight: "auto",
            "&:hover": {
              bgcolor: "transparent",
              color: "#fff",
              border: "2px solid #fff",
              boxShadow: "0 6px 16px rgba(255, 255, 255, 0.4)",
            },
          }}
          component="a"
          href="../assets/PDF/PUNJAB_PROVINCIAL_TRANSPORT_AUTHORITY_(PTA)TRANSPORT_AND_MASSTRANSIT_DEPARTMENTGoVERNMENT_OF_THE_PUNJAB-1_merge.pdf"
          download
        >
          Download
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default RegisterStrip;
