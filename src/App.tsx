import React, { useEffect, useState } from "react";

import "./App.css";
import { Counter } from "./components/Counter";
import { Settings } from "./components/Settings";

function App() {
  const [value, setValue] = useState<number | null>(null);
  const [maxValue, setMaxValue] = useState<number | null>(null);
  const [minValue, setMinValue] = useState<number | null>(null);

  useEffect(() => {
    const localValue = localStorage.getItem("minValue");
    const localMaxValue = localStorage.getItem("maxValue");
    const localMinValue = localStorage.getItem("minValue");

    setValue(localValue !== null ? Number(localValue) : null);
    setMaxValue(localMaxValue !== null ? Number(localMaxValue) : null);
    setMinValue(localMinValue !== null ? Number(localMinValue) : null);
  }, []);

  // useEffect(() => {

  //   setValue(Number(localStorage.getItem("minValue")));
  //   setMinValue(Number(localStorage.getItem("minValue")));
  //   setMaxValue(Number(localStorage.getItem("maxValue")));
  // }, []);

  const incrementNumberHandler = () => {
    if (maxValue !== null && value! < maxValue!)
      setValue((prevValue) => prevValue! + 1);
  };

  const resetNumberHandler = () => {
    setValue(minValue);
  };

  const giveValues = (maxValue: number, minValue: number) => {
    // TODO: add values in localStorage
    setValue(minValue);
    // setMaxValue(maxValue);
    // setMinValue(minValue);
    //console.log(maxValue);
  };
  const onSettingsHandler = () => {
    setValue(null);
  };

  return (
    <div className="App">
      {value !== null ? (
        <Counter
          value={value}
          onSettingsHandler={onSettingsHandler}
          maxValue={maxValue}
          incrementNumberHandler={incrementNumberHandler}
          resetNumberHandler={resetNumberHandler}
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
