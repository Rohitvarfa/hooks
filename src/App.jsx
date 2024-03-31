import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(15)

  const addValue = () => {
   
  console.log('clicked ',counter)
  counter = counter + 1
  if(counter<21)
  setCounter(counter)
 



  }

  const removeValue = () => {
    if(counter>0)
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Rohit Varfa</h1>
      <h2>counter Value:{counter}</h2>
      <button 
      onClick={addValue}>add value:{counter}</button>
      <br />
      <button
      onClick={removeValue}>remove value: {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App

