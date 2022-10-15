import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Status from "./internal/Status";
import { makeStyles } from "@material-ui/core/styles";
import { candidateStatus } from "./constants/constants";
import CandidateCard from "./internal/CandidateCard";

const useStyles = makeStyles({
  TableRow: {
    padding: "10 0",
    width: "150px"
  },
  ProfileCardRow: {
    width: "300px"
  }
});

const getStatusByLevel = (currentLevel, stepLevel) => {
  if((currentLevel == stepLevel && stepLevel <= 4)) return "Active";
  if(currentLevel < stepLevel && currentLevel < 4) return "Completed";
  if(currentLevel == 4 && stepLevel >= 5) return "Done";
  if(currentLevel == 4) return "FullInActive";
  if(currentLevel == 5) return (stepLevel == 4 ? "Progress": "Plain");
  if(currentLevel == 6) return stepLevel>=5 ? "RewardReceived" : "Reward";
  return ("InActive");
} 

const getCandidateTimeLine = (statusLevel, cellClass) => {
    return Object.keys(candidateStatus).map((level) => (
       <TableCell key={level} className={cellClass} align="center">
         <Status isActive={statusLevel === level} stepStatus={getStatusByLevel(level, statusLevel)} 
         stepText={ getStatusByLevel(level, statusLevel) == "Progress" && "20 days to go" }
         />
      </TableCell>
    ))
}

const CandidateTimeline = (props) => {
  const classes = useStyles();
  const {statusLevel = 0, candidateName, candidateRole, candidatePicture } = props;
  return (
    <TableRow>
      <TableCell className={classes.ProfileCardRow} component="th" scope="row">
        <CandidateCard/>
      </TableCell>
      {getCandidateTimeLine(statusLevel, classes.TableRow)}
    </TableRow>
  );
};

export default CandidateTimeline;
