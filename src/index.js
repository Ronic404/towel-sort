
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == null) return [];
    let arr = [];
    for(let arrays = 0; arrays < matrix.length; arrays++) {
      if(arrays%2!==0) {
        let oddArrays = [];      
        for(let i of matrix[arrays]) {
          oddArrays.push(i);
        }
        oddArrays.sort( (a, b) => b-a );
        arr.push(oddArrays);
      } else {
        let evenArrays = [];      
        for(let i of matrix[arrays]) {
          evenArrays.push(i);        
        }
        evenArrays.sort( (a, b) => a-b );
        arr.push(evenArrays);
      }
    }  
    let result = [];
    for(let i of arr) {
        for(let j of i) {
            result.push(j);
        }
    }
    return result;
  }
