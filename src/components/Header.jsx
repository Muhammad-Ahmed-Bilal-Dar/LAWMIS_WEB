import React from "react";
import { AppBar, Toolbar, Box, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import { btnHover } from "./animations";
import lawmisLogo from "../assets/lawmis_logo-removebg-preview.png";
import pptaLogo from "../assets/PPTA-logo-landing.png";
import punjabLogo from "../assets/punjab-logo-landing.png";
import transportLogo from "../assets/transport-logo-landing.png";

const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ bgcolor: "#fff", color: "secondary.main", boxShadow: 1 }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 1, md: 5 } }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box
            component="img"
            src={lawmisLogo}
            alt="LAWMIS Logo"
            sx={{ height: 64 }}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {["ABOUT", "PARTNER CENTERS", "FAQ"].map((label, i) => (
            <motion.div
              key={label}
              {...btnHover}
              style={{ display: "inline-block" }}
            >
              <Button
                color="inherit"
                sx={{
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#14AE5C",
                    color: "#fff",
                  },
                }}
              >
                {label}
              </Button>
            </motion.div>
          ))}
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            component="img"
            src={pptaLogo}
            alt="PPTA Logo"
            sx={{ height: 38 }}
          />
          <Box
            component="img"
            src={transportLogo}
            alt="Transport Logo"
            sx={{ height: 38 }}
          />
          <Box
            component="img"
            src={punjabLogo}
            alt="Punjab Logo"
            sx={{ height: 38 }}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
