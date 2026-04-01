// Q10: Use filter() to keep numbers greater than 10

let arr = [5, 12, 8, 20, 3];

let result = arr.filter(function(val){
  return val > 10;
});

console.log(result);
// Output: [12, 20]
