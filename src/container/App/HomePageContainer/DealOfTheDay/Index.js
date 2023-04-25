import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import { CardDataHome } from "../../../../utils/Constant";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../../../utils/theme/Index";

export default function HomePageCon1() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box mt="10px">
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "20px", md: "30px", xl: "50px" },
            }}
            color="primary"
            display="block"
            gutterBottom
          >
            Deal Of The Day
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {CardDataHome.map((page, index) => (
              <Box sx={{ display: { xs: "none", xl: "block" } }}>
                <Card>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="350"
                    image={page.image}
                  />
                  <CardContent>
                    <Box>
                      <Typography
                        gutterBottom
                        sx={{
                          fontSize: {
                            xs: "20px",
                            sm: "30px",
                            md: "30px",
                            xl: "30px",
                          },
                        }}
                        component="div"
                      >
                        50% OFF
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        {page.label}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: { xs: "block", xl: "none" } }}>
            <Swiper
              spaceBetween={2}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {CardDataHome.map((page, index) => (
                <SwiperSlide>
                  <Box>
                    <Card>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="350"
                        image={page.image}
                      />
                      <CardContent>
                        <Box>
                          <Typography
                            gutterBottom
                            sx={{
                              fontSize: {
                                xs: "20px",
                                sm: "30px",
                                md: "30px",
                                xl: "30px",
                              },
                            }}
                            component="div"
                          >
                            50% OFF
                          </Typography>

                          <Typography variant="body2" color="text.secondary">
                            {page.label}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
