import { useState } from 'react'

import './App.css'

function App() {
  let [counter,setCounter]= useState(15) // first variable , then function
  //let counter = 15

  const addValue = () =>{
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
  }

  const removeValue = () =>{
    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1)
    // setCounter(counter - 1)
  }
  return (
    <>
      <h1>React tutorial {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}>
        Add value</button> {" "}
      <button
      onClick={removeValue}>Remove value</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
