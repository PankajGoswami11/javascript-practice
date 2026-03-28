// Q15: Sum using Rest Operator

function getScore(...score) {
  let total = 0;
  score.forEach((val) => {
    total += val;
  });
  return total;
}

console.log(getScore(10, 20, 30)); // 60
