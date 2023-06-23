

// eslint-disable-next-line react/prop-types
function Square({ handleSetStackContValHistoryAndArrTicTacToe, value, index }) {
  //backgroundColor:(value == "X" ? "red" : (value == "O") ? "yellow" : "") 
  return (
    <button  onClick={handleSetStackContValHistoryAndArrTicTacToe} className='square__container-square' style={{backgroundColor:"###3b32cb"}} data-index={index} data-value={value == null ? null : value}>{value}</button>
  )
}

export default Square