import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./components/Counter";
import { Settings } from "./components/Settings";

function App() {
  const [value, setValue] = useState<number | null>(null);
  const [maxValue, setMaxValue] = useState<number | null>(null);
  const [minValue, setMinValue] = useState<number | null>(null);

  const giveValues = (maxValue: number, minValue: number) => {
    setValue(minValue);
    console.log(maxValue);
  };
  const onSettingsHandler = () => {
    setValue(null);
  };

  return (
    <div className="App">
      {value ? (
        <Counter
          value={value}
          onSettingsHandler={onSettingsHandler}
          maxValue={maxValue}
          minValue={minValue}
        />
      ) : (
        <Settings
          maxValue={maxValue}
          minValue={minValue}
          giveValues={giveValues}
          setMaxValue={setMaxValue}
          setMinValue={setMinValue}
        />
      )}
    </div>
  );
}

export default App;
