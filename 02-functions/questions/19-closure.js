// Q19: Closure Example

function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2