import React from "react";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../../../utils/theme/Index";
import { useNavigate } from "react-router-dom";
import { CustomiseHover } from "../../../../components/Customise/Index";
import { UserContext } from "../../../../App";

export default function CategoryToBag() {
  const { product } = React.useContext(UserContext);

  const navigate = useNavigate();

  return (
    <>
      <ThemeProvider theme={theme}>
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
            {product.map((Products, index) => (
              <>
                <Box>
                  <Box
                    sx={{
                      padding: "20px",
                      borderRadius: "5px",
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <Avatar
                        onClick={() => navigate(Products.to)}
                        alt="Remy Sharp"
                        src={Products.productImage}
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
                      <CustomiseHover>
                        <Typography sx={{ display: "none" }}>
                          Click ME
                        </Typography>
                      </CustomiseHover>
                    </Box>
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
                      {Products.productLabel}
                    </Typography>
                  </Box>
                </Box>
              </>
            ))}
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
