import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { sectionVariants, cardHover } from "./animations";

const Services = () => {
  const services = [
    {
      icon: "📋",
      title: "Emission Test Licensing & Certification",
    },
    {
      icon: "📅",
      title: "BOOK AN APPOINTMENT FOR VEHICLE FITNESS CERTIFICATE",
    },
  ];

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Box
        className="services-section"
        sx={{
          bgcolor: "background.default",
          py: { xs: 4, md: 6 },
          textAlign: "center",
        }}
      >
        <Typography
          className="section-title"
          variant="h5"
          fontWeight={700}
          color="secondary.main"
          mb={3}
          letterSpacing={0.5}
        >
          OUR SERVICES
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ maxWidth: 1000, mx: "auto" }}
        >
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index} sx={{ display: "flex" }}>
              <motion.div {...cardHover} style={{ flex: 1 }}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 180, // equal card height
                    flex: 1, // equal width inside Grid
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ fontSize: "2.2rem", mb: 2, color: "primary.main" }}
                  >
                    {service.icon}
                  </Typography>
                  <Typography
                    fontWeight={600}
                    color="secondary.main"
                    align="center"
                    sx={{
                      fontSize: "1.05rem",
                      lineHeight: 1.4,
                      maxWidth: 260, // keep text wrapping neat
                    }}
                  >
                    {service.title}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
};

export default Services;
