# Game Of Life

## Usage
- `node JordanEstesGameOfLife.js`: runs the program

## Resources
- https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life 
- I learned about the general problem and read about algorithms for solving the problem

## Total Time
- 2 hours

## How I Approached the Problem
I first did some research about the Game of Life problem to begin with.  After I felt I had a strong grasp of the problem at hand I started writing my code.  Once I had built all of the logic I thought I would need I ran the program with the given data set of 
```
[
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 0]
]
```
I was not getting the solution set of 
```
[
  [1, 1, 0],
  [0, 0, 1],
  [1, 1, 0]
]
```
but instead I was getting 
```
[ 
  [ 1, 1, 0 ], 
  [ 0, 0, 0 ], 
  [ 0, 0, 0 ] 
]
```
Since I was using VSCode I attached a debugger and traced the flow of logic to find why I wasn't getting my expected result.  Through debugging I was able to find out that the copy of the array I had made was not copying the inner arrays by value, but by reference. So everytime I modified the return array I was modifying the original array as well. Once I figured out my the problem I used the .map method for arrays and then copied the internal arrays by value.