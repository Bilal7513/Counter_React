import { useState } from 'react'
import './App.css'
 
function App() {

  let [counter, setCounter] = useState(10)

  // let counter = 1;

  const addValue = () => {
    if(counter < 50){
    setCounter(counter +  1)
  }
  }

  const subValue = () => {
    if(counter > 0){
      setCounter(counter -  1)
    }
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={subValue}>Sub Value</button>
      <p>Counter: {counter}</p>
    </>
  )
}

export default App
