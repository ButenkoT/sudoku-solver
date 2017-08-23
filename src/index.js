const fs = require('fs');
const { toArray, toPSV } = require('./parser');
const { solve } = require('./sudoku');


const [inputFileName, outputFileName] = process.argv.slice(2);

const input = fs.readFileSync(inputFileName, 'utf-8');

const solution = solve(toArray(input));
const output = toPSV(solution);

if (outputFileName) {
    fs.writeFileSync(outputFileName, output, 'utf-8');
} else {
    console.log(output);
}
