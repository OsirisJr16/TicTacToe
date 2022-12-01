import React from 'react'
const styles=  {
    background: '#ffffff',
    height: '22vmin',
    width: '22vmin',
    border: 'none',
    borderRadius: '8px',
    fontSize: '12vmin',
    color: '#d161ff',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)'
}
const Square = ({value , onClick}) => {
  return (
    <>
      <button style={styles} onClick= {onClick}>
        {value}
      </button>
    </>
  )
}

export default Square
