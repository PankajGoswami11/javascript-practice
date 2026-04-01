// Q13: Check if any student scored below 35

let arr = [45, 60, 28, 90];

let result = arr.some(function(val){
  return val < 35;
});

console.log(result);
// Output: true
