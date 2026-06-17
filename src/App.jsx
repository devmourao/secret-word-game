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
  const [pickedCategory, setPickedCategory] = useState("");
  const [pickedWord, setPickedWord] = useState("");
  const [letters, setLetters] = useState([]);


  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // Pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { category, word };
  }
  
  const startGame = () => {
    // Pick word and pick category
    const { category, word } = pickWordAndCategory();

    // Create an array of letters
    let wordLetters = word.split("")


    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(word);
    console.log(wordLetters);


    // Fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);
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
