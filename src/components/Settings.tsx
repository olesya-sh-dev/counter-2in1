import Box from "@mui/material/Box";
import React from "react";
import { ButtonComponent } from "./Button";
import { TextField, Typography } from "@mui/material";

export const Settings = () => {
  return (
    <Box
      component="section"
      sx={{ p: 2, border: "1px dashed grey", width: 300 }}
    >
       
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography component={"span"}>max value</Typography>
        <TextField id="outlined-number" label="Enter max value" variant="outlined" type="number"/>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Typography component={"span"}>min value</Typography>
        <TextField id="outlined-number" label="Enter min value" variant="outlined" type="number"/>
      </Box>
     
      <ButtonComponent title={"SET"} onClick={() => {}} />
    </Box>
  );
};
