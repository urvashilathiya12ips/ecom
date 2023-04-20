import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { CardDataHome } from "../../assets/Image";

export default function HomePageCon1() {
  return (
    <>
      <Box mt="10px">
        <Typography variant="h3" display="block" gutterBottom>
          Deal Of The Day
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: "5px" }}>
          {CardDataHome.map((page, index) => (
            <Box>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={page.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {page.label}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
