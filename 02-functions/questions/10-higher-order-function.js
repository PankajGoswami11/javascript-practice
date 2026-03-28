// Q10: Higher Order Function

function abcd() {
  return function () {
    console.log("hello Vinay");
  };
}

abcd()();
