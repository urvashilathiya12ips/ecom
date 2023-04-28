import React from "react";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import { ProductListData } from "../../../../utils/Constant";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../../../utils/theme/Index";
import styled from "@emotion/styled";
import { CustomizeAvtar } from "../../../../components/CustomiseBox/Index";
import { useNavigate } from "react-router-dom";

export default function CategoryToBag() {
  const navigate = useNavigate();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper sx={{ position: "relative" }}>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "20px", md: "30px", xl: "50px" },
              }}
              paddingTop="30px"
              color="primary"
            >
              CATEGORIES TO BAG
            </Typography>
            <Box
              sx={{
                display: "flex",

                justifyContent: "space-evenly",
                alignContent: "center",
                backgroundColor: "#F1F1F1",
                flexWrap: "wrap",
              }}
            >
              {ProductListData.map((Products, index) => (
                <Box>
                  <Box
                    sx={{
                      padding: "20px",
                      borderRadius: "5px",
                    }}
                  >
                    <Avatar
                      onClick={() => navigate(Products.to)}
                      alt="Remy Sharp"
                      src={Products.image}
                      sx={{
                        width: {
                          xs: "130px",
                          sm: "150px",
                          md: "170px",
                          lg: "190px",
                          xl: "210px",
                        },
                        height: {
                          xs: "130px",
                          sm: "150px",
                          md: "170px",
                          lg: "190px",
                          xl: "210px",
                        },
                      }}
                    />

                    <Typography
                      textAlign="center"
                      color="primary"
                      sx={{
                        fontSize: {
                          xs: "10px",
                          sm: "20px",
                          md: "20px",
                          xl: "20px",
                        },
                      }}
                    >
                      {Products.label}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </>
  );
}
