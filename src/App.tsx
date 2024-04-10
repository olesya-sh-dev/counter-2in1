import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { Settings } from './components/Settings';

function App() {

  const [value, setValue] = useState<number | null>(null);

  const giveValues = (maxValue: number, minValue: number) => {
    setValue(minValue)
    console.log(maxValue);
   
  }
const onSettingsHandler = () => {
  setValue(null) 
}


  return (
    <div className="App">
      {value 
      ?
      <Counter value={value} onSettingsHandler={onSettingsHandler}/>
      :
      <Settings giveValues={giveValues}/>
      }


    </div>
  );
}

export default App;
