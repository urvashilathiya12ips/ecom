import { ThemeProvider } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../utils/theme/Index";

export default function Footer() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ bgcolor: "black" }}>
          <Typography>hello</Typography>
        </Box>
      </ThemeProvider>
    </>
  );
}
