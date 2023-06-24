import { useState } from "react";
import "./App.css";

import Board from "./components/Board/Board";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState([new Array(8).fill(null)]);
  const [currentArrTicTacToe, setCurrentArrTicTacToe] = useState(
    new Array(8).fill(null)
  );
  const [isNextX, setIsNextX] = useState(true);

  const winner = calculateWinner();
  if (winner == null ? false : true) {
    console.log("winner is" + winner);
  }

  function jumpTo(e) {
    setCurrentIndex(Number(e.target.value));
    // const arr = history.slice(0, currentIndex + 1);
    console.log(e.target.getAttribute("value"));
    setCurrentArrTicTacToe([...history[e.target.getAttribute("value")]]);
  }

  function handlePlay(currentArr, index) {
    let val;
    if (isNextX == false) {
      val = "O";
    } else {
      val = "X";
    }
    currentArr[index] = val;
    setIsNextX((prev) => !prev);
    setCurrentArrTicTacToe(currentArr);
    setHistory((prev) => [...prev.slice(0, currentIndex + 1), currentArr]);
  }

  function handleCurrentIndex(valIndex) {
    setCurrentIndex(valIndex);
  }

  function handleArrHistory(currArrTicTacToe) {
    setHistory((prev) => [
      ...prev.slice(0, currentIndex + 1),
      [...currArrTicTacToe],
    ]);
  }

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
        currentArrTicTacToe[a] &&
        currentArrTicTacToe[a] === currentArrTicTacToe[b] &&
        currentArrTicTacToe[a] === currentArrTicTacToe[c]
      ) {
        return currentArrTicTacToe[a];
      }
    }
    return null;
  }

  return (
    <div className="app">
      <h1 className="app__title">TIC TAC TOE</h1>
      <div className="game-cont">
        <div className="title-and-board-cont">
          <h3 className="title-and-board-cont__title" style={{ color: "#fff"}}>{`${
            winner == null
              ? "Next Player : " + (isNextX == true ? "X" : "O")
              : `Player ${winner} is a winner`
          }`}</h3>
          <div className="board-history-cont">
            <Board
              currentIndex={currentIndex}
              handleCurrentIndex={handleCurrentIndex}
              handleArrHistory={handleArrHistory}
              currentArrTicTacToe={currentArrTicTacToe}
              handlePlay={handlePlay}
              winner={winner}
            ></Board>
            <div className="history-cont">
              <div className="history-cont__heading">History</div>
              <div className="history-cont__items">
                {history.map((el, index) => {
                  if (index == 0) {
                    return (
                      <button key={index} className="history-cont__items__btn" onClick={jumpTo} value={index}>
                        Jump to game start
                      </button>
                    );
                  } else {
                    return (
                      <button key={index}className="history-cont__items__btn"  onClick={jumpTo} value={index}>
                        Jump to history {index}
                      </button>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
