// Q24: Reusable Discount Calculator (Higher Order Function)

// This function returns another function based on discount

function discountCalculator(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}

let ten = discountCalculator(10);
let twenty = discountCalculator(20);
let thirty = discountCalculator(30);

console.log(thirty(300)); 
// Output: 210