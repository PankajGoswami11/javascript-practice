// Q12: Use find() to get first number less than 10

let arr = [12, 15, 3, 8, 20];

let result = arr.find(function(val){
  return val < 10;
});

console.log(result);
// Output: 3