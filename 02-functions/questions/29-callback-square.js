// 29: Callback - Square

function square(num) {
    return num * num;
}

function displaySquare(callback, value) {
    console.log("Square is:", callback(value));
}

displaySquare(square, 20);
