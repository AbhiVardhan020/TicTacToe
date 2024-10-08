# Tic Tac Toe Game

This is a simple and responsive Tic Tac Toe game built using **HTML**, **CSS**, and **JavaScript**. The game uses **DOM manipulation** to update the UI dynamically based on player interactions.

## Features

- **Interactive Gameplay**: Players can click on the grid cells to place their `X` or `O` marks. The game alternates between the two players automatically.  
- **DOM Manipulation**: The game uses JavaScript to manipulate the DOM, dynamically updating the board and checking for winning combinations or ties in real-time.  
- **Winning Logic**: The game checks for a winner after every move and announces the result (either a win or a draw).  
- **Reset Functionality**: A reset button allows players to start a new game at any time, without reloading the page.

## How it Works

1. The game starts with an empty 3x3 grid.  
2. Players take turns clicking on empty cells to place their `X` or `O`.  
3. The game checks for a winning combination (three in a row horizontally, vertically, or diagonally) after each move.  
4. If a player wins, the game displays a message indicating the winner and disables further moves.  
5. If all cells are filled without a winner, the game declares a draw.  
6. Players can reset the game using the reset button to play again.

## Technologies Used

- **HTML**: To structure the layout of the game.  
- **CSS**: For styling and making the game responsive.  
- **JavaScript**: For game logic, DOM manipulation, and interactivity.

## How to Play

1. Open the game in a web browser.  
2. Click on any empty cell to place your mark (`X` or `O`).  
3. The game will automatically switch between players after each move.  
4. Once the game ends, either due to a win or a draw, you can press the "New Game" button to start a new game.
