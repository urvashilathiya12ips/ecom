import { Box, Card, CardMedia, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import background from "../assets/Images/bgimg.avif";
import loginBg from "../assets/Images/loginPage.svg";

export default function LaginLayout() {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "500px",
            alignItems: "center",
            backgroundColor: "white",
            gap: "90px",
            boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
            paddingRight: "50px",
            borderRadius: "15px",
          }}
        >
          <Box>
            <Card>
              <CardMedia
                component="img"
                alt="green iguana"
                height="500px"
                image={loginBg}
              />
            </Card>
          </Box>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Container>
    </>
  );
}