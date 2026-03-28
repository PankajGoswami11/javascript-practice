// Q8: Early Return

function checkage(age) {
  if (age < 18) return "Too young";
  return "Allowed";
}

console.log(checkage(17)); // Too young