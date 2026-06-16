// CSS
import './App.css'

// React
import { useState, useCallback, useEffect } from 'react'

// data
import { wordsList } from './data/words'

// Components
import StartScreen from "./components/StartScreen"
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  
  const startGame = () => {
    setGameStage(stages[1].name);
  }

  //process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }


  const restartGame = () => {
    setGameStage(stages[0].name);
  }

  return (
    <>
      <main className='App'>
  
         {gameStage === 'start' && <StartScreen startGame={startGame} />}
         {gameStage === "game" && < Game verifyLetter={verifyLetter}/>}
         {gameStage === "end" && <GameOver restartGame={restartGame}/>}

      </main>

     
    </>
  )
}

export default App
