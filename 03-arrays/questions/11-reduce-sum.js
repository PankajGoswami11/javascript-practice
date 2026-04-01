// Q11: Use reduce() to find sum of array

let arr = [10, 20, 30];

let sum = arr.reduce(function(acc, val){
  return acc + val;
}, 0);

console.log(sum);
// Output: 60