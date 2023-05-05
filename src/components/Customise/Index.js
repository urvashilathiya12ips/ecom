import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const CustomiseHover = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  :hover {
    background-color: #000000;
    opacity: 0.5;
    color: white;
    justify-content: center;
    display: flex;
    .MuiTypography-root {
      color: white;
      display: flex;
      justify-content: center;
      justify-items: center;
      align-items: center;
    }
  }
`;
