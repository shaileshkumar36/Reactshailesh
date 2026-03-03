import { useState } from 'react'
import Chai from './chai.jsx';

function App() {
  const [count, setCount] = useState(0)

  const college = "Erode sengunthar college"

  return (
    <>
    <h1>i am study at {college}   </h1>
      <Chai />
    </>
    
  )
}

export default App
