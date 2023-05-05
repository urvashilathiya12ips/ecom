import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Cart from "../../../../Wigets/Cart";
import DropdownSortBy from "../../../../components/Dropdown/Index";
import { UserContext } from "../../../../App";
import { api } from "../../../../Api/Index";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CategarySidebar2({ type }) {
  const { categoryData, setcategoryData } = React.useContext(UserContext);

  const getCategory = async () => {
    const { data } = await api.Setcategary.get(type);
    console.log(data);
    setcategoryData(data);
  };
  React.useEffect(() => {
    getCategory();
  }, [type]);
  return (
    <>
      <DropdownSortBy />
      <Box sx={{}}>
        <Grid
          container
          justifyContent="space-around"
          spacing={{ xs: 2, md: 4 }}
        >
          {categoryData
            .filter((item) => item.productOffer === type)
            .map((items, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Item>
                  <Cart
                    Name={items.productName}
                    price={items.productPrice}
                    image={items.productImage}
                    size={items.productSize}
                  />
                </Item>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}
