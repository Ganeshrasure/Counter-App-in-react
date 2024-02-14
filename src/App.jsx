import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let Increament =() =>{
    setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)
  }
  let Decreament = () =>{
    setCount(count - 1)
  }

  return (
    <>
      <h1>Count is {count} is {count % 2 === 0 ? "Even": "Odd"}</h1>
      <button onClick={Increament}>Inc</button>
      <button onClick={Decreament}>Dec</button>
    </>
  )
}

export default App
