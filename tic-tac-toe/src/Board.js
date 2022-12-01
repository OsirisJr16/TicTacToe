import React from 'react'
import Square from './Square'
const style = {
    width:'70vmin',
    height: '70vmin',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2vmin'
};
const Board = ({squares , onClick}) => {
  return (
    <div style={style}>
      {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
    </div>
  )
}

export default Board
