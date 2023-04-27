import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  Button,
  Paper,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";
import { ProductListData } from "../utils/Constant";
import { CustomizedBox } from "../components/CustomiseBox/Index";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Cart({image,label,price,size,id}) {
  const [open, setOpen] = React.useState(false);
  const [flag, setFlag] = React.useState(false);
  const [addCart, setAddCart] = React.useState([]);
  const [Dailogopen, setDailogopen] = React.useState(false);

  const handleClickOpen = () => {
    setDailogopen(true);
  };

  const handleClose = () => {
    setDailogopen(false);
  };

  

  const handleClick = (id) => {
    setFlag(!flag);
    // ProductListData.map((product,index)=>{
    //   console.log(id)
    //   if(product.id === id){
    //     setAddCart([...addCart,product]);
    //   }
    // })
    // console.log(addCart)
  };

  const Remove = (data) => {
    setFlag(!flag)
    // var Deleteitem =addCart.filter((item) => {
    //   return item.id !== data.id;
    // });
    // setAddCart(Deleteitem);
    // console.log(addCart)
   
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
        <Card onClick={handleClickOpen} >
          <CardMedia
            component="img"
            alt="green iguana"
            height="350"
            image={image}
          />
          <CardContent sx={{textAlign:"start"}}>
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
           
          </CardContent>
        </Card>

        <CustomizedBox>
          <Box sx={{ display: "none" }}>
            <CardContent
              sx={{
                textAlign: "start",
              }}
            >
              { flag === false ? 
              <Box sx={{ paddingBottom: "5px" }}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={()=>handleClick(id)}
                  size="large"
                  startIcon={ <ShoppingCartIcon/>}
                >
                  ADD BAG
                </Button>
              </Box>
              :
              <Box sx={{ paddingBottom: "5px" }}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                   onClick={(e)=>Remove(id)}
                  size="large"  
                  startIcon={ <RemoveShoppingCartIcon/>}
                >
                  Remove BAG
                </Button>
              </Box>
            }
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

        <Dialog
        open={Dailogopen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle><Avatar variant="square" sx={{width:{xs:"200px",sm:"300px",lg:"400px"},height:{xs:"200px",sm:"300px",lg:"400px"}}} src={image}></Avatar></DialogTitle>
        <DialogTitle>{label}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <Typography color="primary" variant="subtitle1">
                  Sizes: {size}
          </Typography>
          <Typography color="primary" variant="subtitle1">
                RS. {price}
          </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        { flag === false ? 
              <Box sx={{ paddingBottom: "5px" }}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={()=>handleClick(id)}
                  size="large"
                  startIcon={ <ShoppingCartIcon/>}
                >
                  ADD BAG
                </Button>
              </Box>
              :
              <Box sx={{ paddingBottom: "5px" }}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                   onClick={(e)=>Remove(id)}
                  size="large"  
                  startIcon={ <RemoveShoppingCartIcon/>}
                >
                  Remove BAG
                </Button>
              </Box>
            }
        </DialogActions>
      </Dialog>
      </Paper>
    </>
  );
}
