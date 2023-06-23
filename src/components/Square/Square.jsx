

// eslint-disable-next-line react/prop-types
function Square({ handleSetStackContValHistoryAndArrTicTacToe, value, index }) {
  
  return (
    <button  onClick={handleSetStackContValHistoryAndArrTicTacToe} className='square__container-square' style={{backgroundColor:(value == "X" ? "red" : (value == "O") ? "yellow" : "") }} data-index={index} data-value={value == null ? null : value}>{value}</button>
  )
}

export default Square