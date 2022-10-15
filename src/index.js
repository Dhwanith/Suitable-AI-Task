import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import CandidateTable from "./components/candidateTable/CandidateTable";
import Home from "./components/screens/Home";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
      <Home />
  </React.StrictMode>
);
