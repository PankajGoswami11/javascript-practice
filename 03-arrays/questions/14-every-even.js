// Q14: Check if all numbers are even

let arr = [2, 4, 6, 8, 10];

let result = arr.every(function(val){
  return val % 2 === 0;
});

console.log(result);
// Output: true