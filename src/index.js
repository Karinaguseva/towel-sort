
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return []; 
  let newArray = [];
  for (let i = 0; i < matrix.length; i++){
    for (let n = 0; n < matrix[i].length; n++){
      if (i % 2 === 0){
        newArray.push(matrix[i][n])
      } else {
        newArray.push(matrix[i][[matrix[i].length - n - 1]])
      }
    }
  }
  return newArray
}
