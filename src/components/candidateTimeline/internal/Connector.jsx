import * as React from 'react';
import StepConnector, {
    stepConnectorClasses
  } from "@mui/material/StepConnector";
  import { styled } from "@mui/material/styles";


const Connector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.root}`]: {
      top: 10,
      left: 'calc(50% + 16px)',
      right: 'calc(-50% - 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#784af4",
        borderStyle: "dashed"
      }
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#784af4",
        borderStyle: "dotted"
      }
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor:"#0ed746",
      borderTopWidth: 3,
      borderRadius: 1
    }
  }));


export const IconConnector = styled(Connector)(({ theme }) => ({
    [`&.${stepConnectorClasses.root}`]: {
      top: 10,
      left: 'calc(50% + 30px)',
      right: 'calc(-50% - 5px)',
    }
  }));

  export const DashedConnector = styled(Connector)(({ theme }) => ({
    [`&.${stepConnectorClasses.root}`]: {
        top: 27
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor:"grey",
        borderTopWidth: 3,
        borderRadius: 1,
      }
  }));

  export const DashedConnectorFull = styled(Connector)(({ theme }) => ({
    [`&.${stepConnectorClasses.root}`]: {
        top: 10,
        left: 'calc(50% + 16px)',
        right: 'calc(-50% - 9.75rem)',
      },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor:"grey",
        borderTopWidth: 3,
        borderRadius: 1,
      }
  }));

  export const ActiveDashedConnectorFull = styled(Connector)(({ theme }) => ({
    [`&.${stepConnectorClasses.root}`]: {
        top: 10,
        left: 'calc(50% + 16px)',
        right: 'calc(-50% - 9.75rem)',
      },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor:"#0ed746",
        borderTopWidth: 3,
        borderRadius: 1,
      }
  }));


  export default Connector;