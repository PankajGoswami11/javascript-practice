// Q14: Rest with Parameters

function abcd(a, b, c, ...val) {
  console.log(a, b, c, val);
}

abcd(1, 2, 3, 4, 5);
// Output: 1 2 3 [4,5]