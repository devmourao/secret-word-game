import { useState } from 'react'

import StartScreen from "./components/StartScreen"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='App'>
  
         <StartScreen />

      </main>

     
    </>
  )
}

export default App
