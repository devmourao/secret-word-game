import './StartScreen.css'

function StartScreen({startGame}) {
  

  return (
 <section className='start'>
      <h1>Secret Word</h1>

      <p>
        Guess the secret word and test your knowledge!
      </p>

      <button onClick={startGame}>
        Start Game
      </button>
    </section>
  )
}

export default StartScreen