import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { icon, iconSidebar2 } from "../../assets/Image";
import MuiAppBar from "@mui/material/AppBar";
import Home from "../HomePage/Index";
import styled from "@emotion/styled";

function NavBarBottom() {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "#3D3D3D",
          display: { xs: "none", md: "block" },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "center",
                  gap: "15px",
                },
              }}
            >
              {icon.map((page) => (
                <Button
                  key={page.label}
                  sx={{ my: 2, color: "#3D3D3D", display: "block" }}
                >
                  {page.label}
                </Button>
              ))}
              {iconSidebar2.map((page) => (
                <Button
                  key={page.label}
                  sx={{ my: 2, color: "#3D3D3D", display: "block" }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default NavBarBottom;
