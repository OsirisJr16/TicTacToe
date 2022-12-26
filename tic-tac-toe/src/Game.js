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
   
    const [history, setHistory] = useState([Array(9).fill(null)])

    const [stepNumber, setStepNumber] = useState(0)

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
    function refresh() {
        setStepNumber(0) 
        setHistory([Array(9).fill(null)]) 
    }

    function test(){

        return ''
    }

    function nextMove(){
        return <div style={styles}>
                {'Next move : '+(xisnext ? 'X' : 'O')}
                </div>
        
    }

    let partiestate  = test() ; 
    let win = (nextMove())
    if(winner){
    if(winner==='X' || winner==='O'){
        win = "winner" + ":"+ winner
        partiestate = <button className='restart' onClick={refresh}> New Game </button>
    }else{
        win = "Draw"
        partiestate = <button className='restart' onClick={refresh}> New Game </button>
    }
   }


    return (
        <>
            <Board squares={history[stepNumber]} onClick={click}/>
            <p style={styles}>
                {win}
            </p>
            <p>
                {partiestate}
            </p>
            
            
        </>
    )
}

export default Game
