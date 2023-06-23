/* eslint-disable react/prop-types */
import Square from "../Square/Square";

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


function Board({
  currentIndex,
  handleCurrentIndex,
  currentArrTicTacToe,
  handlePlay,
  winner,
}) {
  function handleSetStackContValHistoryAndArrTicTacToe(e) {
    if (winner !== null || currentIndex >= 9) {
      return;
    }
    if (e.target.getAttribute("data-value") !== null) {
      return;
    }
    handleCurrentIndex(currentIndex + 1);
    const nextSquares = currentArrTicTacToe.slice();
    handlePlay(nextSquares, e.target.getAttribute("data-index"));
  }

  return (
    <>
      <div className="container-square">
        <div className="row-square">
          <Square
            handleSetStackContValHistoryAndArrTicTacToe={
              handleSetStackContValHistoryAndArrTicTacToe
            }
            index={0}
            value={currentArrTicTacToe[0]}
          ></Square>
          <Square
            handleSetStackContValHistoryAndArrTicTacToe={
              handleSetStackContValHistoryAndArrTicTacToe
            }
            index={1}
            value={currentArrTicTacToe[1]}
          ></Square>
          <Square
            handleSetStackContValHistoryAndArrTicTacToe={
              handleSetStackContValHistoryAndArrTicTacToe
            }
            index={2}
            value={currentArrTicTacToe[2]}
          ></Square>
        </div>
        <div className="row-square">
          <Square
            handleSetStackContValHistoryAndArrTicTacToe={
              handleSetStackContValHistoryAndArrTicTacToe
            }
            index={3}
            value={currentArrTicTacToe[3]}
          >
            {" "}
          </Square>
          <Square
            handleSetStackContValHistoryAndArrTicTacToe={
              handleSetStackContValHistoryAndArrTicTacToe
            }
            index={4}
            value={currentArrTicTacToe[4]}
          ></Square>
          <Square
            handleSetStackContValHistoryAndArrTicTacToe={
              handleSetStackContValHistoryAndArrTicTacToe
            }
            index={5}
            value={currentArrTicTacToe[5]}
          ></Square>
        </div>
        <div className="row-square">
          <Square
            handleSetStackContValHistoryAndArrTicTacToe={
              handleSetStackContValHistoryAndArrTicTacToe
            }
            index={6}
            value={currentArrTicTacToe[6]}
          ></Square>
          <Square
            handleSetStackContValHistoryAndArrTicTacToe={
              handleSetStackContValHistoryAndArrTicTacToe
            }
            index={7}
            value={currentArrTicTacToe[7]}
          ></Square>
          <Square
            handleSetStackContValHistoryAndArrTicTacToe={
              handleSetStackContValHistoryAndArrTicTacToe
            }
            index={8}
            value={currentArrTicTacToe[8]}
          ></Square>
        </div>
      </div>
    </>
  );
}

export default Board;
