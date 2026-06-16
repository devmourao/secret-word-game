import "./GameOver.css"

const GameOver = ({restartGame}) => {
    return (
        <section className="gameOver">
            <h1>Game Over</h1>
            <p>Try again to beat your high score!</p>
            <button  onClick={restartGame}>Play Again</button>
        </section>
       
    )
}

export default GameOver