import {
  Avatar,
  Box,
  Button,
  Divider,
  Tab,
  Tabs,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { theme } from "../../../../utils/theme/Index";
import PropTypes from "prop-types";
import { SIDEBARICONS } from "../../../../assets/Image";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function Userprofile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [image, setImage] = useState(SIDEBARICONS.NavbarIcon2);
  function previewFile(event) {
    console.log(event.target.files && event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      const imageData = event.target.files[0];
      const blobUrl = URL.createObjectURL(imageData);
      console.log(blobUrl);
      setImage(blobUrl);
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Toolbar />
        <Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignContent: "center",
              alignItems:"center",
              boxShadow: "0 4px 10px rgb(0 0 0 / 0.2)",
              padding: "15px",
              gap: "10px",
            }}
          >
            <Box>
              <Avatar
                src={image}
                sx={{
                  height: { xs: "200px", md: "250px" },
                  width: { xs: "200px", md: "250px" },
                }}
              />
              <Box sx={{ textAlign: "center" }}>
                <Button variant="contained" component="label">
                  Upload
                  <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={(e) => previewFile(e)}
                  />
                </Button>
              </Box>
            </Box>
            <Divider
              sx={{ display: { xs: "none", lg: "block" } }}
              orientation="vertical"
              flexItem
            />
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "15px", sm: "15px", xl: "25px" },
                  paddingTop: "10px",
                }}
              >
                {" "}
                About Me
              </Typography>
              <Typography
                paddingBottom="40px"
                variant="subtitle1"
                sx={{ maxWidth: "900px" }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                velit quisquam itaque aliquid consequatur debitis qui facere
                quos saepe? Esse exercitationem quos soluta, ut ducimus officia
                voluptatibus atque at voluptates.
              </Typography>
              <Typography
                paddingBottom="40px"
                variant="subtitle1"
                sx={{ maxWidth: "900px" }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                velit quisquam itaque aliquid consequatur debitis qui facere
                quos saepe? Esse exercitationem quos soluta, ut ducimus officia
                voluptatibus atque at voluptates.
              </Typography>

              <Box>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                    
                      label="MY INFO"
                      {...a11yProps(0)}
                    />
                    <Tab label="ORDER" {...a11yProps(1)} />
                    <Tab label="WISHLIST" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <Typography pb="3px">Name: Lathiya Urvashi</Typography>
                  <Typography pb="3px">
                    Email: urvashi.itpath@gmail.com
                  </Typography>
                  <Typography pb="3px">Contect: +91 1234567895</Typography>
                  <Typography pb="3px">Address: abcd</Typography>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Item Three
                </TabPanel>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
