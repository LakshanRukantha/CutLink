import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        left: "0",
        bottom: "0",
        right: "0",
        width: "100%",
      }}
    >
      <Typography
        variant="body2"
        color="#fff"
        component="footer"
        align="center"
        sx={{ width: "100%" }}
      >
        Made with &#10084; by Lakshan Rukantha
      </Typography>
    </Box>
  );
};

export default Footer;
