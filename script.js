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
const board = Array(boardSize).
