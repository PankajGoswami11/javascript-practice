// Q9: First-Class Function

function run(fn) {
  fn();
}

run(function () {
  console.log("hey");
});
