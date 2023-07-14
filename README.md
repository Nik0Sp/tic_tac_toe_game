<div align="center">
  <h1>Tic Tac Toe Game</h1>
</div>

<div align="center">
  <strong>A simple Tic Tac Toe game built with React.</strong>
</div>

## Getting Started

To play the Tic Tac Toe game, follow these steps:

1. Clone the repository: `git clone git@github.com:Nik0Sp/tic_tac_toe_game.git`
2. Change directory to the project folder: `cd tic_tac_toe_game`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to play the game.

##  Game Rules

- The game is played on a 3x3 grid.
- Players take turns placing their symbol (X or O) on an empty square.
- The first player to get three of their symbols in a horizontal, vertical, or diagonal row wins the game.
- If all squares are filled and no player has won, the game ends in a draw.

##  Components

### App

The `App` component is the main component that renders the Tic Tac Toe game.

- Manages the game state, including the game board, current player, and winner.
- Handles square clicks and updates the game board and player state accordingly.
- Calculates the winner based on the current game board.
- Renders the game status, game board, and a reset button.

### renderSquare

The `renderSquare` function is a helper function that renders a single square on the game board.

- Accepts the index of the square as a parameter.
- Renders a button with the square's value and sets the `handleSquareClick` function as the click event handler.

### handleSquareClick

The `handleSquareClick` function is called when a square is clicked.

- Checks if the clicked square is already filled or if there is a winner. If so, returns early.
- Creates a copy of the game board, updates the clicked square with the current player's symbol, and sets the new board state.
- Updates the current player to the next player (X or O).
- Calculates if there is a winner based on the updated board and sets the winner state.

### calculateWinner

The `calculateWinner` function checks for a winning combination on the game board.

- Accepts the current game board as a parameter.
- Checks all possible winning combinations using a predefined list of winning lines.
- If a winning combination is found, returns the symbol of the winner (X or O). Otherwise, returns `null`.

### resetGame

The `resetGame` function is called when the reset button is clicked.

- Resets the game state to the initial values, including the game board, current player, and winner.

##  Contributions

Contributions to this project are welcome. If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify the code as per the license terms.