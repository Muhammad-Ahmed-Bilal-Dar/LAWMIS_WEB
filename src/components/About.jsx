import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { sectionVariants } from "./animations";
import aboutImage from "../assets/about.jpg";

const About = () => {
  const missionPoints = [
    "Vehicular Emission Control",
    "Road Safety Enhancement",
    "Digital Inspection System (LAWMIS)",
    "Online Registration & Licensing",
  ];

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Box
        className="about-section"
        sx={{
          bgcolor: "background.default",
          py: { xs: 6, md: 10 }, // More vertical space
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 6,
            }}
          >
            {/* Image Section - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ flex: 1 }}
            >
              <Box
                sx={{
                  height: { xs: 220, md: 400 }, // Proper standardized height
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                }}
              >
                <img
                  src={aboutImage}
                  alt="About LAWMIS"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </motion.div>

            {/* Text Section - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              style={{ flex: 1 }}
            >
              <Typography
                variant="h4"
                fontWeight={700}
                color="secondary.main"
                mb={3}
                sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" } }}
              >
                Our Mission
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                mb={4}
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                }}
              >
                The Transport & Masstransit Department is launching initiatives
                to enhance road safety and improve air quality, including a
                Vehicle Inspection and Certification System for private
                motorcars and jeeps (P-VICS). This initiative aims to reduce
                vehicular emissions, combat smog, and ensure road safety by
                implementing stringent inspection protocols to comply with
                emission standards.
              </Typography>

              {/* Mission Points */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {missionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          bgcolor: "primary.main",
                          borderRadius: "50%",
                          mr: 2,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body1"
                        fontWeight={500}
                        color="text.primary"
                        sx={{ fontSize: { xs: "0.95rem", md: "1rem" } }}
                      >
                        {point}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default About;
