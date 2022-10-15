import * as React from "react";
import { styled } from "@mui/material/styles";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Connector, {
  ActiveDashedConnectorFull,
  DashedConnector,
  DashedConnectorFull,
  IconConnector,
} from "./Connector";
import Typography from "@mui/material/Typography";

const StepIconContainer = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .StepIcon-completedIcon": {
    color: "#0ed746",
    zIndex: 1,
    fontSize: "40px",
  },
  "& .StepIcon-circle": {
    width: 30,
    height: 30,
    borderRadius: "50%",
    border: "5px solid #999999",
    backgroundColor: "white",
  },
  "& .stepImage": {
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "4px solid #0ed746",
  },
  "& .StepIcon-dollar": {
    color: "#0ed746",
    zIndex: 1,
    fontSize: "40px",
    marginTop: "27px",
  },
}));

const StepIconCustom = (props) => {
  const { active = false, completed = false, className = "" } = props;

  return (
    <StepIconContainer ownerState={{ active }} className={className}>
      {completed ? (
        <>
          <CheckCircleRoundedIcon className="StepIcon-completedIcon" />
          <Connector />
        </>
      ) : (
        <>
          <div className="StepIcon-circle" />
          <Connector />
        </>
      )}
    </StepIconContainer>
  );
};

const IconWithConnector = (props) => {
  const { active = false, className = "" } = props;
  return (
    <StepIconContainer ownerState={{ active }} className={className}>
      {props.children}
      <Connector />
    </StepIconContainer>
  );
};

const Inactive = (props) => {
  return (
    <IconWithConnector {...props}>
      <div className="StepIcon-circle" />
    </IconWithConnector>
  );
};

const FullInActive = (props) => {
  const { active = false, className = "" } = props;
  return (
    <StepIconContainer ownerState={{ active }} className={className}>
      <div className="StepIcon-circle" />
      <DashedConnectorFull />
    </StepIconContainer>
  );
};

const Done = (props) => {
  const { active = false, className = "" } = props;
  return (
    <StepIconContainer ownerState={{ active }} className={className}>
      <img
        src="https://img.icons8.com/color/48/000000/person-male.png"
        className="stepImage"
      />{" "}
      <DashedConnectorFull />
      <ActiveDashedConnectorFull />
    </StepIconContainer>
  );
};

const Completed = (props) => {
  return (
    <IconWithConnector {...props}>
      <CheckCircleRoundedIcon className="StepIcon-completedIcon" />
    </IconWithConnector>
  );
};

const Active = (props) => {
  return (
    <IconWithConnector {...props}>
      <img
        src="https://img.icons8.com/color/48/000000/person-male.png"
        className="stepImage"
      />
    </IconWithConnector>
  );
};

const Progress = (props) => {
  const { active = false, className = "" } = props;
  return (
    <StepIconContainer ownerState={{ active }} className={className}>
      <AttachMoneyIcon className="StepIcon-dollar" />
      <DashedConnector />
    </StepIconContainer>
  );
};

const Plain = (props) => {
  const { active = false, className = "" } = props;
  return <></>;
};

const Reward = (props) => {
  const { active = false, className = "" } = props;
  return (
    <StepIconContainer ownerState={{ active }} className={className}>
      <Typography
        variant="h6"
        component="h6"
        style={{ color: `${active ? "#0ed746" : "#323232"}`, marginLeft: "20px" }}
      >
        2000$
      </Typography>
    </StepIconContainer>
  );
};

const RewardReceived = (props) => {
    const { active = false, className = "" } = props;
    return (
      <StepIconContainer ownerState={{ active }} className={className}>
        <Typography
          variant="h6"
          component="h6"
          style={{ color: `#0ed746`, marginLeft: "20px", fontWeight: "bold" }}
        >
          2000$
          <img src="https://img.icons8.com/emoji/48/000000/party-popper.png"/>
        </Typography>
      </StepIconContainer>
    );
  };

export const StepIcons = {
  Active: Active,
  InActive: Inactive,
  Completed: Completed,
  Progress: Progress,
  Reward: Reward,
  Plain: Plain,
  FullInActive: FullInActive,
  Done: Done,
  RewardReceived: RewardReceived
};

export default StepIconCustom;
