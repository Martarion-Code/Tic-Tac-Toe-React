import React from "react";
import { useState, useEffect } from "react";
import Square from "../Square/Square";
import { useReducer } from "react";

/**
 * This is function to compare values inside the array of tic tac toe. If all of the value that get compared is the same, then it's gonna return true, otherwise it's false
 * @param{array} arrayTicTacToe - array tic tac toe
 * @param{int} i - index from for 
 * @param{int} dist - distance from index value that will get compared, examplee (i+ dist)
 * @param{int} dist - distance 2 from index value that will get compared
 * 
 */
// function compare(arrayTicTacToe, i, dist, dist2) {
//   if (arrayTicTacToe[i] == null) {
//     return;
//   }
//   return (
//     arrayTicTacToe[i] === arrayTicTacToe[i + dist] &&
//     arrayTicTacToe[i + dist] === arrayTicTacToe[i + dist2]
//   );
// }

function reducer(prevState, action) {
  if (action.type == "SET_ARR") {
    if (prevState.arrayTicTacToe[action.data.index] == null) {
      prevState.stackContValHistory = [
        ...prevState.stackContValHistory,
        action.data.val,
      ];
      prevState.arrayTicTacToe[action.data.index] = action.data.val;
      return {
        arrayTicTacToe: prevState.arrayTicTacToe,
        top: prevState.top + 1,
        stackContValHistory: prevState.stackContValHistory,
      };
    } else {
      return { ...prevState };
    }
  }
}
function Board() {
  const [state, dispatch] = useReducer(reducer, {
    arrayTicTacToe: new Array(8).fill(null),
    top: -1,
    stackContValHistory: [],
  });

  function calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        state.arrayTicTacToe[a] &&
        state.arrayTicTacToe[a] === state.arrayTicTacToe[b] &&
        state.arrayTicTacToe[a] === state.arrayTicTacToe[c]
      ) {
        return state.arrayTicTacToe[a];
      }
    }
    return null;
  }

  const winner = calculateWinner();
  if (winner == null ? false : true) {
    console.log("winner is" + winner);
  }

  function handleSetStackContValHistoryAndArrTicTacToe(val, index) {
    const calcWin = calculateWinner();
    if(calcWin !== null){
      return;
    }
    
    dispatch({ type: "SET_ARR", data: { index, val, calcWin } });
    

  }

  return (
    <>
      <div className="container-square">
        <div className="row-square">
          <Square
            stackContValHistory={state.stackContValHistory}
            top={state.top}
            handleSetStackContValHistoryAndArrTicTacToe={
              handleSetStackContValHistoryAndArrTicTacToe
            }
            index={0}
            isWin={winner}

          ></Square>
          <Square
            stackContValHistory={state.stackContValHistory}
            top={state.top}
            handleSetStackContValHistoryAndArrTicTacToe={
              handleSetStackContValHistoryAndArrTicTacToe
            }
            index={1}
            isWin={winner}
            
          ></Square>
          <Square
            stackContValHistory={state.stackContValHistory}
            top={state.top}
            handleSetStackContValHistoryAndArrTicTacToe={
              handleSetStackContValHistoryAndArrTicTacToe
            }
            index={2}
            isWin={winner}
            
          ></Square>
        </div>
        <div className="row-square">
          <Square
            stackContValHistory={state.stackContValHistory}
            top={state.top}
            handleSetStackContValHistoryAndArrTicTacToe={
              handleSetStackContValHistoryAndArrTicTacToe
            }
            index={3}
            isWin={winner}
            
          >
            {" "}
          </Square>
          <Square
            stackContValHistory={state.stackContValHistory}
            top={state.top}
            handleSetStackContValHistoryAndArrTicTacToe={
              handleSetStackContValHistoryAndArrTicTacToe
            }
            index={4}
            isWin={winner}
            
          ></Square>
          <Square
            stackContValHistory={state.stackContValHistory}
            top={state.top}
            handleSetStackContValHistoryAndArrTicTacToe={
              handleSetStackContValHistoryAndArrTicTacToe
            }
            index={5}
            isWin={winner}
            
          ></Square>
        </div>
        <div className="row-square">
          <Square
            stackContValHistory={state.stackContValHistory}
            top={state.top}
            handleSetStackContValHistoryAndArrTicTacToe={
              handleSetStackContValHistoryAndArrTicTacToe
            }
            index={6}
            isWin={winner}
            
          ></Square>
          <Square
            stackContValHistory={state.stackContValHistory}
            top={state.top}
            handleSetStackContValHistoryAndArrTicTacToe={
              handleSetStackContValHistoryAndArrTicTacToe
            }
            index={7}
            isWin={winner}
            
          ></Square>
          <Square
            stackContValHistory={state.stackContValHistory}
            top={state.top}
            handleSetStackContValHistoryAndArrTicTacToe={
              handleSetStackContValHistoryAndArrTicTacToe
            }
            index={8}
            isWin={winner}
            
          ></Square>
        </div>
      </div>
    </>
  );
}

export default Board;
