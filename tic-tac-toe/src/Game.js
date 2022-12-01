import React ,{ useState } from 'react'
import { calculateWinner  } from './winner'
import Board from './Board'
import './App.css';
const styles={
    with:'200px',
    margin : '20px auto',
    textAlign:'center',
    fontSize : '30px'
}
const Game = () => {
    // state initial board
    const [history, setHistory] = useState([Array(9).fill(null)])
    // nombre move state
    const [stepNumber, setStepNumber] = useState(0)
    // state next player to move
    const [xisnext, setXisnext] = useState(true)

    const winner  = calculateWinner(history[stepNumber])

    const click = i =>{
        const timeInHistory = history.slice(0,stepNumber + 1)
        const current  = timeInHistory[stepNumber]
        const squares = [...current]

        if (winner || squares[i]) return; 
        squares[i] = xisnext ? 'X' : 'O'
        setHistory([...timeInHistory , squares])
        setStepNumber(timeInHistory.length)
        setXisnext(!xisnext)

    }
    const refreshPage=()=>{
        window.location.reload()
    }


    return (
        <>
            <Board squares={history[stepNumber]} onClick={click}/>
            <button className='restart' onClick={ refreshPage }>New Game</button>
            <div style={styles}>
                {winner ? 'winner: '+ winner : 'Next Player: '+ (xisnext ? 'X' : 'O')}
            
            </div>
        </>
    )
}

export default Game
