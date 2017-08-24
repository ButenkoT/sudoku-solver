# Sudoku Solver

Command line tool to solve Sudoku.


## Installation:

Development was made on latest Node v8.4.0 

```bash
npm install
```

## Run:

```bash
npm start Sudoku1_Basic.psv sudoku1_solution.psv
```

To work with new data - put text file with data and run:

```bash
npm start <inputFileName> [<outputFileName>]
```

If output file name is omitted result will be logged to console. 

## Run tests:

```bash
npm test
```

## Implementation Notes

Given sudoku files had '\r\n' (windows) line ending - and it was first implementation. 
After submitting code on github and running on another machine I find out that `.git` reformat 
line ending to '\n' and my code didn't work. So I decided to make my solution flexible
for both types and preserve format for input and output. 

## Future development

Current solution is not optimal, it implements brute force iteration that in some cases
can take time to solve sudoku. For example, when we put new number in next cell we don't have
checks if this number already present in row/column/square.

Example 1 - simple sudoku time:
```
 real    0m1.531s
 user    0m1.093s
 sys     0m0.175s
```

Example 2 - anti brute force sudoku time:
```
real    2m1.673s
user    2m7.660s
sys     0m1.653s
```