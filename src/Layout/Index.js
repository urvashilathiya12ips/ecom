import { ThemeProvider } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { theme } from "../utils/theme/Index";
import ResponsiveDrawer from "../container/App/NavBar/Index";
import { Box, Toolbar, Typography } from "@mui/material";
import { drawerWidth } from "../utils/Constant";
import Footer from "../container/App/Footer/Index";

export default function MainLayout() {
  const [url, SetUrl] = useState(window.location.pathname);

  useEffect(() => {
    SetUrl(window.location.pathname);
    console.log(url);
  }, [url]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveDrawer />
        <Toolbar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            ml: { xs: 0, sm: 30 },
            p: { xs: 1, sm: 3 },
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          {url === "/home" ? (
            " "
          ) : (
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="body1"
                gutterBottom
                component={NavLink}
                to="/home"
              >
                Home
              </Typography>
              <Typography variant="body1" gutterBottom>
                {`${url}`}
              </Typography>
            </Box>
          )}

          <Outlet />
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  );
}
