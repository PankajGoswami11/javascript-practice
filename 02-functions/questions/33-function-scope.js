// 33: Function Scope

var num1 = 20, num2 = 3, name = "Rohan";

function multiplyValues() {
    return num1 * num2;
}

console.log(multiplyValues());

function getScore() {
    var num1 = 2, num2 = 3;

    function add() {
        return name + " scored " + (num1 + num2);
    }

    return add();
}

console.log(getScore());
