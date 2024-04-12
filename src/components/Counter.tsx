import React, { useState } from "react";
import { ButtonComponent } from "./Button";
import Box from "@mui/material/Box";
import { ButtonGroup, autocompleteClasses } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

type CounterPropsType = {
  value: number;
  maxValue: number | null;

  incrementNumberHandler: () => void;
  resetNumberHandler: () => void;
  onSettingsHandler: () => void;
};

export const Counter = ({
  value,
  onSettingsHandler,
  maxValue,
  incrementNumberHandler,
  resetNumberHandler,
}: CounterPropsType) => {
  //const [count, setCount] = useState(value);

  // const incrementNumberHandler = () => {
  //   if (maxValue !== null && count < maxValue!)
  //     setCount((prevCount) => prevCount + 1);
  // };

  // const resetNumberHandler = () => {
  //   setCount(value);
  // };

  return (
    <Box
      component="section"
      sx={{
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
          justifyContent: "center",
          border: "5px solid",
          borderColor: "secondary.light",
          borderRadius: "10px",
          width: 300,
          padding: "10px",
          height: 150,
          bgcolor: "primary.main",
        }}
      >
        <h3
          style={{
            color: value === maxValue ? "#ba000d" : "white",
            fontWeight: "bold",
            fontSize: "70px",
            alignSelf: "center",
          }}
        >
          {value}
        </h3>
      </Box>
      <ButtonGroup
        color="secondary"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          width: 300,
          padding: "10px",
          bgcolor: "primary.main",
          border: "5px solid",
          borderColor: "secondary.light",
          borderRadius: "10px",
        }}
      >
        <ButtonComponent
          title={"INC"}
          onClick={incrementNumberHandler}
          disabled={value === maxValue}
       
        />
        <ButtonComponent title={"RESET"} onClick={resetNumberHandler} />
        <ButtonComponent title={"SET"} onClick={onSettingsHandler} />
      </ButtonGroup>
    </Box>
  );
};
