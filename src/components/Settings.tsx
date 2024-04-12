import Box from "@mui/material/Box";
import React, { ChangeEvent } from "react";
import { ButtonComponent } from "./Button";
import { TextField, Typography } from "@mui/material";

type SettingsPropsType = {
  maxValue: number | null;
  minValue: number | null;
  giveValues: (maxValue: number, minValue: number) => void;
  setMaxValue: (maxValue: number) => void;
  setMinValue: (minValue: number) => void;
};

export const Settings = ({
  maxValue,
  minValue,
  giveValues,
  setMaxValue,
  setMinValue,
}: SettingsPropsType) => {
  const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = Number(e.currentTarget.value);
    setMaxValue(newMaxValue);
    //localStorage.setItem("maxValue", newMaxValue.toString());
  };

  const setMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMinValue = Number(e.currentTarget.value);
    setMinValue(newMinValue);
    //localStorage.setItem("minValue", newMinValue.toString());
  };

  return (
    <Box
      component="section"
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        m: "150px auto",
        border: "1px solid",
        borderRadius: "10px",
        width: 350,
        height: "auto",
        padding: "10px",
        gap: "10px",
        bgcolor: "primary.dark",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          width: 300,
          padding: "10px",
          border: "5px solid",
          borderColor: "secondary.light",
          borderRadius: "10px",
          backgroundColor: "primary.light",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            component={"span"}
            sx={{ color: "primary.dark", fontWeight: "bold", fontSize: "20px" }}
          >
            max value
          </Typography>
          <TextField
            id="outlined-number"
            label="Enter max value"
            variant="outlined"
            type="number"
            value={maxValue ?? ""}
            onChange={setMaxValueHandler}
            error={maxValue! <= minValue! || maxValue! < 0 || maxValue === null}
            sx={{ width: 200, backgroundColor: "white" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            component={"span"}
            sx={{ color: "primary.dark", fontWeight: "bold", fontSize: "20px" }}
          >
            min value
          </Typography>
          <TextField
            id="outlined-number"
            label="Enter min value"
            variant="outlined"
            type="number"
            value={minValue ?? ""}
            onChange={setMinValueHandler}
            error={maxValue! <= minValue! || minValue! < 0 || minValue === null}
            sx={{ width: 200, backgroundColor: "white" }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "5px",
          width: 300,
          border: "5px solid",
          borderColor: "secondary.light",
          borderRadius: "10px",
        }}
      >
        <ButtonComponent
          title={"SET"}
          onClick={() => giveValues(maxValue!, minValue!)}
        />
      </Box>
    </Box>
  );
};
//
