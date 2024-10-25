import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter]=useState(1)

  //let counter=1
  const addvalue=()=>{
 
   // counter+=1
    setCounter(counter =>counter+1)
    setCounter(counter =>counter+1)
    setCounter(counter =>counter+1)
    setCounter(counter =>counter+1)
    
  } 
  const removevalue=()=>{
    setCounter(counter-1)
  }


  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
