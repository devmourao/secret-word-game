import "./Game.css"

const Game = ({verifyLetter}) => {
    return (
        <section className="game">
            <h1>Secret Word Game</h1>
            <p>Guess a letter to find the secret word</p>
            <button onClick={verifyLetter}>Verify Letter</button>
        </section>
    )
}

export default Game