import React from "react";
import Stepper from "react-stepper-horizontal";

export const StepperHorizontal = ({ activeStep }) => (
  <div className="stepperContainer">
    <div>
      <Stepper
        steps={[1, 2, 3, 4]}
        activeStep={activeStep - 0.5}
        activeColor="#046DAF"
        completeColor="#664de5"
        activeTitleColor="#6B87A4"
        completeTitleColor="#6B87A4"
        circleFontColor="#FFF"
        defaultBorderColor="#046DAF"
        defaultBorderStyle="#046DAF"
        completeBarColor="#664de5"
      />
    </div>
  </div>
);
