import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { sectionVariants } from "./animations";

const Stats = () => {
  const stats = [
    { label: "TOTAL VISITORS", value: 3176 },
    { label: "VEHICLES INSPECTED", value: 0 },
    { label: "CERTIFICATES ISSUED", value: 0 },
  ];

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Box
        className="stats-section"
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "#14AE5C",
          color: "#fff",
          py: { xs: 2, md: 4 },
          gap: { xs: 2, md: 8 },
        }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ flex: 1, textAlign: "center", minWidth: 160 }}
          >
            <Typography
              className="stat-number"
              variant="h4"
              fontWeight={700}
              mb={0.5}
            >
              {stat.value}
            </Typography>
            <Typography
              className="stat-label"
              fontWeight={500}
              letterSpacing={0.5}
            >
              {stat.label}
            </Typography>
          </motion.div>
        ))}
      </Box>
    </motion.div>
  );
};

export default Stats;
