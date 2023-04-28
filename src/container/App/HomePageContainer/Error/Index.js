import { Box } from "@mui/material";
import React from "react";
import ErrorPage from "../../../../assets/Images/Error page.avif";

export default function Error() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            width: {
              xs: "200px",
              sm: "400px",
              lg: "500px",
              xl: "600px",
            },
            height: {
              xs: "200px",
              sm: "400px",
              lg: "500px",
              xl: "600px",
            },
          }}
          src={ErrorPage}
        ></Box>
      </Box>
    </>
  );
}
