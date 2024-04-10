import React, { useState } from 'react'
import { ButtonComponent } from './Button'
import Box  from '@mui/material/Box';


type CounterPropsType = {
    value: number
    setValuesHandler: () => void
}



 export const Counter = ({value, setValuesHandler}: CounterPropsType) => {

    const [count, setCount] = useState(value)

    const incrementNumberHandler = () => {
      setCount(count + 1)
    }

    const resetNumberHandler = () => {
      setCount(value)
    }

   

  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey', width: 300 }}>
        <h3>{count}</h3>
      <ButtonComponent title={'INC'} onClick={incrementNumberHandler}/>
      <ButtonComponent title={'RESET'} onClick={resetNumberHandler}/>
      <ButtonComponent title={'SET'} onClick={setValuesHandler}/>
    </Box>
  )
}

