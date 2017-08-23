exports.checkRow = (board, row, number) => {
    for(let i = 0; i < board[row].length; i++) {
        if(board[row][i] === number) {
            return false;
        }
    }
    return true;
};

exports.checkColumn = (board, column, number) => {
    for(let i = 0; i < board[column].length; i++) {
        if(board[i][column] === number) {
            return false;
        }
    }
    return true;
};

exports.checkSquare = (board, column, row, number) => {
    let columnCorner = 0;
    let rowCorner = 0;
    const squareSize = 3;

    // Find the left-most column
    while(column >= columnCorner + squareSize) {
        columnCorner += squareSize;
    }

    // Find the upper-most row
    while(row >= rowCorner + squareSize) {
        rowCorner += squareSize;
    }

    for(let i = rowCorner; i < rowCorner + squareSize; i++) {
        for(let j = columnCorner; j < columnCorner + squareSize; j++) {
            if(board[i][j] === number) {
                return false;
            }
        }
    }

    return true;
};

exports.checkNumber = (board, column, row, number) => {
    return this.checkRow(board, row, number) &&
        this.checkColumn(board, column, number) &&
        this.checkSquare(board, column, row, number)
};

exports.saveEmptyPositions = (board) => {
    let emptyPositions = [];

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(board[i][j] === 0) {
                emptyPositions.push([i, j]);
            }
        }
    }

    return emptyPositions;
};

exports.solvePuzzle = (board, emptyPositions) => {
    const limit = 9;

    for(let i = 0; i < emptyPositions.length;) {
        let row = emptyPositions[i][0];
        let column = emptyPositions[i][1];
        let value = board[row][column] + 1;
        let found = false;

        while(!found && value <= limit) {

            if(this.checkNumber(board, column, row, value)) {
                found = true;
                board[row][column] = value;
                i++;
            }
            else {
                value++;
            }
        }
        // If no valid value was found and the limit was
        // reached, move back to the previous position
        if(!found) {
            board[row][column] = 0;
            i--;
        }
    }

    return board;
};

exports.solveSudoku = grid => {
    const emptyPositions = this.saveEmptyPositions(grid);
    return this.solvePuzzle(grid, emptyPositions);
};
