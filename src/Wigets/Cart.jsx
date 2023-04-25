import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  Avatar,
  Box,
  Button,
  CardActionArea,
  Paper,
  Tooltip,
} from "@mui/material";
import Logo from "../assets/Images/mens ware.avif";
import { Grid } from "swiper";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";
import  { ProductListData } from "../utils/Constant";
import { CustomizedBox } from "../components/CustomiseBox/Index";

export default function Cart({image, label,price,size}) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const Div = styled("div", {});
  return (
    <>
      <Paper sx={{ position: "relative" }}>
        <Card >
          <CardMedia
            component="img"
            alt="green iguana"
            height="350"
            image={image}
          />
          <CardContent sx={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
            <Box>
              <Typography
                gutterBottom
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "20px",
                    md: "20px",
                    xl: "20px",
                  },
                }}
                component="div"
              >
                {label}
              </Typography>

              <Typography variant="body2" color="text.secondary">
               RS: {price}
              </Typography>
            </Box>
            <Box>
              <Avatar>
                <ShoppingCartIcon />
              </Avatar>
            </Box>
          </CardContent>
        </Card>

        <CustomizedBox>
          <Box sx={{ display: "none" }}>
            <CardContent
              sx={{
                textAlign: "start",
              }}
            >
              <Box sx={{ paddingBottom: "5px" }}>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  startIcon={<FavoriteBorderIcon />}
                >
                  wishlist
                </Button>
              </Box>
              <Box>
                <Typography color="primary" variant="subtitle1">
                  Sizes: {size}
                </Typography>
              </Box>
              <Typography color="primary" variant="subtitle1">
                RS. {price}
              </Typography>
            </CardContent>
          </Box>
        </CustomizedBox>
      </Paper>
    </>
  );
}
