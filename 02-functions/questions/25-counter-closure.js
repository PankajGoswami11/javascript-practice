// Q25: Counter using Closure (Pure Function Concept)

// Closure maintains its own state

function counter(){
  let count = 0;

  return function(){
    count++;
    return count;
  };
}

let c = counter();

console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3

let d = counter();

console.log(d()); // 1
console.log(c()); // 4
