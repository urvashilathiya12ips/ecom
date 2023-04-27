import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import{ ProductListImage} from "../../../../assets/Image"
import { Avatar, Toolbar, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../../../utils/theme/Index';

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



function createData(Id, Image, Label, Price,size,color) {
  return { Id, Image, Label, Price,size,color };
}

const rows = [
  createData(1,ProductListImage.menswear1, "menswear","RS 2000","size: M","Color: Black"),
  createData(2,ProductListImage.Womenwear1, "Womanswear","RS 2050","size: S","Color: Gray"),
  createData(3,ProductListImage.kidswear1, "kidsWear","RS 1900","size: XS","Color: WHite"),
  createData(4,ProductListImage.Homeappliance1, "Homeappliance","RS 2500","size: XL","Color: Green"),
];

export default function CustomizedTables() {
  return (
      <ThemeProvider theme={theme}>
    <Toolbar />
    <Typography sx={{fontSize:{sm:"15px",md:"25px",},paddingBottom:"10px"}}>ADD CART</Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell >PRODUCT</StyledTableCell>
            <StyledTableCell >PRODUCT NAME</StyledTableCell>
            <StyledTableCell>PRICE</StyledTableCell>
          </TableRow>
        </TableHead>    
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Id}>
              <StyledTableCell component="th" scope="row">
                {row.Id}
              </StyledTableCell>
              <StyledTableCell ><Avatar src={row.Image} sx={{width:"100px" ,height:"100px"}} variant="square" /></StyledTableCell>
              <StyledTableCell ><h1>{row.Label}</h1><p>{row.size}<br />{row.color}</p></StyledTableCell>
              <StyledTableCell><p>{row.Price}</p></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
  );
}
