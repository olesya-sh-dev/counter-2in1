import Box from "@mui/material/Box";
import React, { ChangeEvent, useState } from "react";
import { ButtonComponent } from "./Button";
import { TextField, Typography } from "@mui/material";

type SettingsPropsType = {
  maxValue: number|null
  minValue: number|null
  giveValues: (maxValue: number, minValue: number) => void
  setMaxValue: (maxValue: number) => void
  setMinValue: (minValue: number) => void
}

export const Settings = ({maxValue, minValue, giveValues, setMaxValue, setMinValue}: SettingsPropsType) => {
  
  
  const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = Number(e.currentTarget.value);
    setMaxValue(newMaxValue);
  };

  const setMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMinValue = Number(e.currentTarget.value);
    setMinValue(newMinValue);
  };

  return (
    <Box
      component="section"
      sx={{ p: 2, border: "1px dashed grey", width: 300 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography component={"span"}>max value</Typography>
        <TextField
          id="outlined-number"
          label="Enter max value"
          variant="outlined"
          type="number"
          value={maxValue}
          onChange={setMaxValueHandler}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography component={"span"}>min value</Typography>
        <TextField
          id="outlined-number"
          label="Enter min value"
          variant="outlined"
          type="number"
          value={minValue}
          onChange={setMinValueHandler}
        />
      </Box>

      <ButtonComponent title={"SET"} onClick={() => giveValues(maxValue!, minValue!)} />
    </Box>
  );
};
//