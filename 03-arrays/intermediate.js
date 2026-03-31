// 🔹 INTERMEDIATE ARRAY METHODS

let arr = [1, 2, 3, 4, 5, 6];

// splice → remove element
arr.splice(2, 1);
console.log(arr); // [1,2,4,5,6]

// slice → create new array
let newArr = arr.slice(1, 4);
console.log(newArr); // [2,4,5]

// reverse → reverse array
arr.reverse();
console.log(arr);

// sort → numeric sort
let nums = [40, 100, 1, 5, 25, 10];
nums.sort((a, b) => a - b);
console.log(nums);

// forEach → loop
arr.forEach((val) => {
  console.log(val);
});
