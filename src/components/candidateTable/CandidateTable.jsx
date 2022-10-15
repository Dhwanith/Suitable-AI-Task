import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import CandidateTimeline from "../candidateTimeline/CandidateTimeline";

const CandidateTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", fontSize: "1.1rem" }}
              >
                Candidate
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", fontSize: "1.1rem" }}
              >
                Referred
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", fontSize: "1.1rem" }}
              >
                Interviewed
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", fontSize: "1.1rem" }}
              >
                Hired
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", fontSize: "1.1rem" }}
              >
                Joined
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography></Typography>
            </TableCell>
            <TableCell align="center">
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", fontSize: "1.1rem" }}
              >
                Reward
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <CandidateTimeline statusLevel={6} />
          <CandidateTimeline statusLevel={5} />
          <CandidateTimeline statusLevel={4} />
          <CandidateTimeline statusLevel={2} />
          <CandidateTimeline statusLevel={1} />
          <CandidateTimeline statusLevel={0} />
          <CandidateTimeline statusLevel={2} />
          <CandidateTimeline statusLevel={3} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CandidateTable;
