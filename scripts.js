// Constants
const boardWidth = 10;
const boardHeight = 20;
const boardSize = boardWidth * boardHeight;
const emptyColor = '#FFF';

// Tetromino shapes
const tetrominos = {
  I: {
    shape: [
      [1, 1, 1, 1]
    ],
    color: 'I'
  },
  J: {
    shape: [
      [1, 0, 0],
      [1, 1, 1]
    ],
    color: 'J'
  },
  L: {
    shape: [
      [0, 0, 1],
      [1, 1, 1]
    ],
    color: 'L'
  },
  O: {
    shape: [
      [1, 1],
      [1, 1]
    ],
    color: 'O'
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0]
    ],
    color: 'S'
  },
  T: {
    shape: [
      [0, 1, 0],
      [1, 1, 1]
    ],
    color: 'T'
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1]
    ],
    color: 'Z'
  }
};

// Initialize the game board
const board = Array(boardSize).fill(emptyColor);

let currentTetromino = null;
let currentTetrominoPos = { x: 0, y: 0 };
let score = 0;
let gameOver = false;

// Helper functions

// Generate a random tetromino
function getRandomTetromino() {
  const tetrominoKeys = Object.keys(tetrominos);
  const randomKey = tetrominoKeys[Math.floor(Math.random() * tetrominoKeys.length)];
  const tetromino = tetrominos[randomKey];
  return tetromino;
}

// Draw the tetromino on the board
function drawTetromino() {
  for (let row = 0; row < currentTetromino.shape.length; row++) {
    for (let col = 0; col < currentTetromino.shape[row].length; col++) {
      if (currentTetromino.shape[row][col]) {
        const x = currentTetrominoPos.x + col;
        const y = currentTetrominoPos.y + row;
        const index = y * boardWidth + x;
        board[index] = currentTetromino.color;
      }
    }
  }
}

// Clear the tetromino from the board
function clearTetromino() {
  for (let row = 0; row < currentTetromino.shape.length; row++) {
    for (let col = 0; col < currentTetromino.shape[row].length; col++) {
      if (currentTetromino.shape[row][col]) {
        const x = currentTetrominoPos.x + col;
        const y = currentTetrominoPos.y + row;
        const index = y * boardWidth + x;
        board[index] = emptyColor;
      }
    }
  }
}

// Check if the tetromino can move in the specified direction
function canMoveTetromino(direction) {
  const { x: newX, y: newY } = getNewTetrominoPosition(direction
