import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const CustomizedBox = styled(Box)`
  position: absolute;
  top: 70%;
  left: 0;
  height: 30%;
  width: 100%;
  :hover {
    background-color: #ffffff;
    color: white;
    display: block;
    .MuiBox-root {
      color: white;
      display: block;
      .MuiCardContent-root {
      }
    }
  }
`;
