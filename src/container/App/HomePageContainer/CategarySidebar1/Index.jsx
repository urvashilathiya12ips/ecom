import {  Paper } from '@mui/material'
import Box from '@mui/material/Box';
import Logo from "../../../../assets/Images/mens ware.avif"
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Cart from '../../../../Wigets/Cart';
import { ProductListData } from '../../../../utils/Constant';
import DropdownSortBy from '../../../../components/Dropdown/Index';


const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CategarySidebar({type}) {
  const [product,setProduct] =React.useState([]);


  React.useEffect(()=>{
    setProduct(ProductListData);
    localStorage.setItem("Products",JSON.stringify(product));
  })

  return (
    <>
    <DropdownSortBy />
    <Box sx={{ }}>
      <Grid container justifyContent="space-around"  spacing={{ xs: 2, md: 4 }}>
        {ProductListData.filter(item => item.label  === type).map((items, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3}  key={index}>
            <Item>
              <Cart label={items.label} price={items.price} image={items.image} size={items.size} id={items.id}/>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  )
  }
