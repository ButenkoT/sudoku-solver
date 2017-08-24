const test = require('tape');
const parser = require('../src/parser');

test('#toArray should parse input from psv format to array', t => {
    t.deepEqual(parser.toArray('| 9 | 1 |'), [[9, 1]]);
    t.deepEqual(parser.toArray(`| 2 | 8 |\n| 3 | 7 |`), [[2, 8], [3, 7]]);
    t.end();
});

test('#toPSV should render output back from array to psv format', t => {
    t.deepEqual(parser.toPSV([[1, 8]]), '| 1 | 8 |');
    t.deepEqual(parser.toPSV([[2, 8], [3, 7]]), '| 2 | 8 |\n| 3 | 7 |');
    t.end();
});

const sudoku1 = `
| . | . | 8 | . | . | . | . | . | . |
| 3 | . | 7 | . | 4 | . | 2 | . | 5 |
| . | . | . | . | 7 | . | 1 | 9 | . |
| . | 5 | 6 | . | . | 7 | . | 8 | 9 |
| . | . | . | 3 | . | 8 | . | . | . |
| 8 | 2 | . | 9 | . | . | 6 | 4 | . |
| . | 8 | 4 | . | 3 | . | . | . | . |
| 2 | . | 5 | . | 8 | . | 4 | . | 1 |
| . | . | . | . | . | . | 8 | . | . |
`.trim();

test('Parser should parse and render same value', t => {
    t.equal(parser.toPSV(parser.toArray(sudoku1)), sudoku1);
    t.end();
});
