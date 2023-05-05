import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Box, Toolbar, Typography } from '@mui/material';
import { IndexNumber } from "../../../../utils/Constant"
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../../../utils/theme/Index';
import { getdata } from '../../../../Helper/Index';
import { api } from '../../../../Api/Index';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
   
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '& h1' : {
    fontSize:"22px",
    color: theme.palette.primary.main
    
  },
  '& p':{
    fontSize:"16px",
  }
}));
 
export default function CustomizedTables() {
  const [Data,SetData]=React.useState([])

  const getCartItem = async()=>{
    const { data } = await api.product.CartItem();
    SetData(data)
  }
  
  React.useEffect(() => {
    getCartItem();
},[]);

  return (
    <ThemeProvider theme={theme}>
    <Toolbar />
    <Typography sx={{fontSize:{sm:"15px",md:"25px",},paddingBottom:"10px"}}>ADD CART</Typography>
    <TableContainer  component={Paper}>
        { 
          Data.length === undefined ? 
          <>
          <Table >
            <TableHead> <TableRow><StyledTableCell> 
              <Typography sx={{fontSize:{xs:"10px",md:"30px"},textAlign:"center"}}>
                  CART IS EMPTY
              </Typography>
            </StyledTableCell> </TableRow></TableHead>
          </Table>
          </>
          : 
           <Table  stickyHeader sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell >PRODUCT</StyledTableCell>
              <StyledTableCell >PRODUCT NAME</StyledTableCell>
              <StyledTableCell>PRICE</StyledTableCell>
            </TableRow>
          </TableHead>  
          <TableBody id="tablebody">
            {Data.map((row,index) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {index+IndexNumber}
                </StyledTableCell>
                <StyledTableCell ><Avatar src={row.productImage} sx={{width:"100px" ,height:"100px"}} variant="square" /></StyledTableCell>
                <StyledTableCell ><h1>{row.productName}</h1><p>{row.size}</p></StyledTableCell>
                <StyledTableCell><p>{row.productPrice}</p></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      
            }
       
       </TableContainer>
      
      
   
    </ThemeProvider>
  );
}
