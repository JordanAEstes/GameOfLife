const nextGeneration = (currentState) => {
  //check the length of the outer array to get the height of the board.
  const boardHeight = currentState.length;
  //check the length of an inner array to see width of the board.
  const boardWidth = currentState[0].length;
  //create copy of nested array
  var nextState = currentState.map((nestedArray) => {
    return nestedArray.slice();
  });
  
  //create a loop to iterate over the outer array
  for (let i = 0; i < boardHeight; i++){
    //create a loop to iterate over the inner array
    for (let j = 0; j < boardWidth; j++){
      let count = 0;
      let currentVal = currentState[i][j];
      //check all positions around each cell
      if (currentState[i - 1] !== undefined && currentState[i - 1][j] === 1){
        count += 1;
      }
      if (currentState[i + 1] !== undefined && currentState[i + 1][j] === 1){
        count += 1;
      }
      if (currentState[i][j - 1] !== undefined && currentState[i][j - 1] === 1) {
        count += 1;
      }
      if (currentState[i][j + 1] !== undefined && currentState[i][j + 1] === 1) {
        count += 1;
      }
      if (currentState[i - 1] !== undefined){
        if (currentState[i - 1][j - 1] !== undefined && currentState[i - 1][j - 1] === 1) {
          count += 1;
        }
      }
      if (currentState[i + 1] !== undefined){
        if(currentState[i + 1][j + 1] !== undefined && currentState[i + 1][j + 1] === 1) {
          count += 1;
        }
      }
      if (currentState[i + 1] !== undefined){
        if (currentState[i + 1][j - 1] !== undefined && currentState[i + 1][j - 1] === 1) {
          count += 1;
        }
      }
      if (currentState[i - 1] !== undefined){
        if (currentState[i - 1][j + 1] !== undefined && currentState[i - 1][j + 1] === 1) {
          count += 1;
        }
      }
      if(currentState[i][j] === 1 && (count < 2 || count > 3)){
        nextState[i][j] = 0;
      } 
      if(currentState[i][j] === 0 && count === 3){
        nextState[i][j] = 1;
      }
    }
  }
  return nextState;
}


firstState = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 0]
]
console.log(nextGeneration(firstState));