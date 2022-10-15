import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Connector from "./Connector";
import StepIconCustom, { Active, Completed, StepIcons } from "./StepIconCustom";

const Status = (props) => {
  const {isActive = false, stepLevel = 0, stepText="", stepStatus = "InActive"} = props;
  return (
    <Stepper alternativeLabel activeStep={isActive} connector={<Connector />}>
      <Step key={stepLevel}>
        <StepLabel StepIconComponent={StepIcons[stepStatus]}>{stepText}</StepLabel>
      </Step>
    </Stepper>
  );
};

export default Status;
