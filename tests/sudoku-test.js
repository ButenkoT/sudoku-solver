const test = require('tape');
const sudokuSolver = require('../src/sudoku');

const board = [
    [0, 0, 8, 0, 0, 0, 0, 0, 0],
    [3, 0, 7, 0, 4, 0, 2, 0, 5],
    [0, 0, 0, 0, 7, 0, 1, 9, 0],
    [0, 5, 6, 0, 0, 7, 0, 8, 9],
    [0, 0, 0, 3, 0, 8, 0, 0, 0],
    [8, 2, 0, 9, 0, 0, 6, 4, 0],
    [0, 8, 4, 0, 3, 0, 0, 0, 0],
    [2, 0, 5, 0, 8, 0, 4, 0, 1],
    [0, 0, 0, 0, 0, 0, 8, 0, 0]
];

const expectedEmptyPositions = [
    [0, 0], [0, 1], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8],
    [1, 1], [1, 3], [1, 5], [1, 7], [2, 0], [2, 1], [2, 2], [2, 3],
    [2, 5], [2, 8], [3, 0], [3, 3], [3, 4], [3, 6], [4, 0], [4, 1],
    [4, 2], [4, 4], [4, 6], [4, 7], [4, 8], [5, 2], [5, 4], [5, 5],
    [5, 8], [6, 0], [6, 3], [6, 5], [6, 6], [6, 7], [6, 8], [7, 1],
    [7, 3], [7, 5], [7, 7], [8, 0], [8, 1], [8, 2], [8, 3], [8, 4],
    [8, 5], [8, 7], [8, 8]
];

const expectedSolution = [
    [5, 1, 8, 2, 9, 6, 7, 3, 4],
    [3, 9, 7, 8, 4, 1, 2, 6, 5],
    [6, 4, 2, 5, 7, 3, 1, 9, 8],
    [1, 5, 6, 4, 2, 7, 3, 8, 9],
    [4, 7, 9, 3, 6, 8, 5, 1, 2],
    [8, 2, 3, 9, 1, 5, 6, 4, 7],
    [7, 8, 4, 1, 3, 2, 9, 5, 6],
    [2, 3, 5, 6, 8, 9, 4, 7, 1],
    [9, 6, 1, 7, 5, 4, 8, 2, 3]
];


test('#checkRow should check that number is NOT in the row', t => {
    t.equal(sudokuSolver.checkRow(board, 0, 1), true);
    t.equal(sudokuSolver.checkRow(board, 0, 8), false);
    t.end();
});

test('#checkColumn should check that number is NOT in the column', t => {
    t.equal(sudokuSolver.checkColumn(board, 0, 1), true);
    t.equal(sudokuSolver.checkColumn(board, 0, 3), false);
    t.end();
});

test('#checkSquare should check that number is NOT in the square', t => {
    t.equal(sudokuSolver.checkSquare(board, 2, 2, 1), true);
    t.equal(sudokuSolver.checkSquare(board, 6, 6, 2), true);

    t.equal(sudokuSolver.checkSquare(board, 2, 2, 7), false);
    t.equal(sudokuSolver.checkSquare(board, 6, 6, 8), false);
    t.end();
});

test('#checkNumber should check that number is valid for positioning', t => {
    t.equal(sudokuSolver.checkNumber(board, 8, 5, 7), true);
    t.equal(sudokuSolver.checkNumber(board, 0, 0, 5), true);

    t.equal(sudokuSolver.checkNumber(board, 0, 0, 3), false);
    t.equal(sudokuSolver.checkNumber(board, 0, 8, 4), false);
    t.end();
});

test('#saveEmptyPositions should save all empty positions from the board', t => {
    const emptyPositions = sudokuSolver.saveEmptyPositions(board);

    t.equal(emptyPositions.length, 51);
    t.deepEqual(emptyPositions, expectedEmptyPositions);
    t.end();
});

test('#solvePuzzle should solve the puzzle', t => {
    const solution = sudokuSolver.solvePuzzle(board, expectedEmptyPositions);

    t.deepEqual(solution, expectedSolution);
    t.end();
});

test('#solveSudoku should solve sudoku', t => {
    const solution = sudokuSolver.solveSudoku(board);

    t.deepEqual(solution, expectedSolution);
    t.end();
});
