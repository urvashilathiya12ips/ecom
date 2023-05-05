import {  Paper } from '@mui/material'
import Box from '@mui/material/Box';
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Cart from '../../../../Wigets/Cart';
import DropdownSortBy from '../../../../components/Dropdown/Index';
import { UserContext } from '../../../../App';
import { getdata } from '../../../../Helper/Index';
import { api } from '../../../../Api/Index';

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CategarySidebar({type}) {
  const { category,setCategory } = React.useContext(UserContext);
  const [item, setItem] = React.useState({});
  const [CartData,SetCartData]= React.useState(getdata());


  // const handleItem = (data) => {
  //   setItem(ProductListData.find(product => product.id === data));
  // };

  const getCategory = async() => {
       const { data } = await api.FindProducts.get(type);
       setCategory(data)
  };

  React.useEffect(()=>{
    getCategory()

  },[type])

  React.useEffect(() => {
    if(Object.keys(item).length !== 0){
      SetCartData([...CartData,item]);  
    }
  }, [item]);
  
  localStorage.setItem("CartData",JSON.stringify(CartData))

  return (
    <>
    <DropdownSortBy />
    <Box sx={{height:"650px" }}>
      <Grid container justifyContent="space-around"  spacing={{ xs: 2, md: 4 }}>
        {category.filter(item => item.productLabel === type).map((items, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3}  key={index}>
            <Item>
              <Cart Name={items.productName} price={items.productPrice} image={items.productImage} size={items.productSize} id={items.id} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  )
  }
