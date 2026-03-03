import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
function App() {
  
  let [counter, setCount] = useState(15);
  
  const addValue = () => {
    console.log("clicked", counter);
    setCount(counter +1)
  }

  const removeValu = () => {
    setCount(counter-1);
  }

  return (
    <>
    <h1>shailesh kumar</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>
  Add value
</button>

<br />

<button onClick={removeValu}>
  Remove value {counter}
</button>
    <p>footer: {counter}</p>
   
    </>
  );
}

export default App
