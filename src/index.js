const fs = require('fs');
const {toArray, toPSV} = require('./parser');
const {solveSudoku} = require('./sudoku');


const [inputFileName, outputFileName] = process.argv.slice(2);

const input = fs.readFileSync(inputFileName, 'utf-8');
const lineEnding = input.match('\r\n') ? '\r\n' : '\n';

const solution = solveSudoku(toArray(input, lineEnding));
const output = toPSV(solution, lineEnding);

if (outputFileName) {
    fs.writeFileSync(outputFileName, output, 'utf-8');
} else {
    console.log(output);
}
