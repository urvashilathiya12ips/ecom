import * as React from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { HomeSliderImages } from "../../../../utils/Constant";
import HomePageCon1 from "../DealOfTheDay/Index";
import CategoryToBag from "../CategoryToBag/Index";
import { theme } from "../../../../utils/theme/Index";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Home() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = HomeSliderImages.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box display="inline-block" mt="10px">
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {HomeSliderImages.map((step, index) => (
            <div>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    display: "block",
                    height: { xs: "200px", md: "300px", lg: "400px" },
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.image}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>

        <MobileStepper
          sx={{ justifyContent: "center" }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        />
      </Box>
      <Box>
        <HomePageCon1 />
        <CategoryToBag />
      </Box>
    </>
  );
}

export default Home;
