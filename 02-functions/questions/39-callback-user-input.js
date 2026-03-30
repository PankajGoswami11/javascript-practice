// 39: Callback with user input

function greeting(name) {
    alert("Hello " + name);
}

function processUserInput(callback) {
    const name = prompt("Enter your name:");
    
    if (name) {
        callback(name);
    }
}

processUserInput(greeting);

