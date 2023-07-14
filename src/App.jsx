import React, { useState } from "react";
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleSquareClick = (index) => {
    if (board[index] || winner) return;

    let newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    const newPlayer = player === "X" ? "O" : "X";
    setPlayer(newPlayer);

    const newWinner = calculateWinner(newBoard);
    setWinner(newWinner);
  };

  const renderSquare = (index) => {

    
    return (
      <button className="square" onClick={() => handleSquareClick(index)}>
        {board[index]}
      </button>
    );
  };

  const calculateWinner = (board) => {
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
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
  };

  let status;
  if (winner) {
    status = `Winner : ${winner}`;
  } else if (board.every((square) => square !== null)) {
    status = "No Winner";
  } else {
    status = `Next player: ${player}`;
  }

  return (
    <div className="section">
      <h1 className="title">Tic Tac Toe Game</h1>
      <div className="container glass">
        <div className="status">{status}</div>
        <div className="row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <button className="reset-btn" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default App;
