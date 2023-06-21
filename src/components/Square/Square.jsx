// import React from 'react'
import { useState } from 'react'
function Square({top, handleSetStackContValHistoryAndArrTicTacToe, index, stackContValHistory, isWin }) {

  const [value, setValue] = useState(null);
  function pushVal(e){
    if((top === 8) || (isWin !== null) || (value !== null)){
      return;
    }
    if(top == -1){
      handleSetStackContValHistoryAndArrTicTacToe("O", index);
      setValue("O");
    }else if(stackContValHistory[top] == "O"){
      handleSetStackContValHistoryAndArrTicTacToe("X", index);
      setValue("X");
    }else if(stackContValHistory[top] == "X"){
      handleSetStackContValHistoryAndArrTicTacToe("O", index);
      setValue("O");
    }
  }

  return (
    <button  onClick={pushVal} className='square__container-square'>{value}</button>
  )
}

export default Square