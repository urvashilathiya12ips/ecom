import React from "react";
import Cart from "../../../../Wigets/Cart";
import { Avatar, Box, CardContent, Paper, Typography } from "@mui/material";
import { ProductListData } from "../../../../utils/Constant";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../../../utils/theme/Index";
import { CustomizedBox } from "../../../../components/CustomiseBox/Index";

export default function CategoryToBag() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper>
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
              <Box
                sx={{
                  padding: "20px",
                  borderRadius: "5px",
                }}
              >
                <Avatar
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
            ))}
          </Box>
        </Paper>
      </ThemeProvider>
    </>
  );
}
