import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import {Avatar} from "@mui/material";
import CandidateTable from "../candidateTable/CandidateTable";

const Home = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="fixed" style={{ background: "black" }}>
        <Box
          sx={{
            background:
              "linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(14,215,70,1) 50%)",
            height: "100vh",
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container>
                <Grid item md={6}>
                  <Box
                    sx={{
                      position: "relative",
                      p: { xs: 3, md: 6 },
                      pr: { md: 0 },
                    }}
                  >
                    <Box>
                      <Typography
                        component="h4"
                        variant="h4"
                        color="white"
                        gutterBottom
                      >
                        Referral Status
                      </Typography>
                    </Box>
                    <Box>
                      <TextField
                        label="Search"
                        style={{ background: "white" }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment>
                              <IconButton>
                                <SearchIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid></Grid>
              </Grid>
            </Box>
            <CandidateTable />
          </Container>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;
