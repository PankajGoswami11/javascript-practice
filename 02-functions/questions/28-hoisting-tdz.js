// 28: Hoisting & TDZ

function demonstrateHoistingAndTDZ() {
    console.log("Value of name:", name);

    // console.log(price); // ReferenceError

    var name = "apple";
    let price = 20;

    console.log("name:", name);
    console.log("price:", price);
}

demonstrateHoistingAndTDZ();

