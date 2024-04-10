import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { Settings } from './components/Settings';

function App() {

  const [value, setValue] = useState(0);

const setValuesHandler = () => {
  setValue(5)
}
  return (
    <div className="App">
      {value === 0 
      ?
      <Counter value={value} setValuesHandler={setValuesHandler}/>
      :
      <Settings/>
      }


    </div>
  );
}

export default App;
