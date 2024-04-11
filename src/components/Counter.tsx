import React, { useState } from "react";
import { ButtonComponent } from "./Button";
import Box from "@mui/material/Box";

type CounterPropsType = {
  value: number;
  maxValue: number | null;
  minValue: number | null;
  onSettingsHandler: () => void;
};

export const Counter = ({
  value,
  onSettingsHandler,
  maxValue,
  //minValue,
}: CounterPropsType) => {
  const [count, setCount] = useState(value);

  const incrementNumberHandler = () => {
    if (maxValue !== null && count < maxValue!)
      setCount((prevCount) => prevCount + 1);
  };

  const resetNumberHandler = () => {
    setCount(value);
  };

  return (
    <Box
      component="section"
      sx={{ p: 2, border: "1px dashed grey", width: 300 }}
    >
      <h3 style={{ color: count === maxValue ? "red" : "black" }}>{count}</h3>
      <ButtonComponent
        title={"INC"}
        onClick={incrementNumberHandler}
        disabled={count === maxValue}
      />

      <ButtonComponent title={"RESET"} onClick={resetNumberHandler} />
      <ButtonComponent title={"SET"} onClick={onSettingsHandler} />
    </Box>
  );
};
