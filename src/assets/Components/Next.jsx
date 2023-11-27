import React from "react";
import {  Stepper, Step, CardHeader, Typography} from "@material-tailwind/react";


import Product from "./Product";
import Engineer from "./Engineer";
import Product_ordering from "./Product_ordering";
import Problem from "./Problem";
 
export function Next() {
  const [activeStep, setActiveStep] = React.useState(0);
  const renderComponentForStep = (step) => {
    switch (step) {
      case 0:
        return <Product />;
      case 1:
        return <Engineer />;
        case 2:
        return <Product_ordering />;
        case 3:
            return <Problem />;
      
      default:
        return null;
    }
}
 
  return (
    <div className="w-full py-4 px-8 bg-gray-700" >
    <CardHeader floated={false} variant="gradient" color="blue" className="grid h-24 m-0 place-items-center">
      <div className="w-full px-20 pt-4 pb-8">
        <Stepper
          activeStep={activeStep}
          lineClassName="bg-white/50"
          activeLineClassName="bg-blue-400"
        >
            <Step
              className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
              activeClassName="ring-0 !bg-blue-400 text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(0)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">  Products Details</Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
              activeClassName="ring-0 !bg-blue-400 text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(1)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit"> Repair Details</Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
              activeClassName="ring-0 !bg-blue-400 text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(2)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">Product ordering</Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
              activeClassName="ring-0 !bg-blue-400 text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(3)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">Prblems</Typography>
              </div>
            </Step>
           
           
            </Stepper>
        </div>
      </CardHeader>
      {renderComponentForStep(activeStep)}
    </div>
  );
}