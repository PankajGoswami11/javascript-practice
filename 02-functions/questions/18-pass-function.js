// Q18: Pass function as argument

function abcd(val) {
  val();
}

abcd(function () {
  console.log("hey");
});
