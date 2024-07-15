
const num1 = 10;
const num2 = 5;
const isTrue = true;
const greeting = "Hello, world!";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

console.log(add(num1, num2));
console.log(subtract(num1, num2));

const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");

addButton.addEventListener("click", () => {
    
    document.body.style.backgroundColor = "lightblue";
});

subtractButton.addEventListener("click", () => {
   
    document.body.style.backgroundColor = "lightcoral";
});

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [{
            label: "Sample Data",
            data: [12, 19, 3],
            backgroundColor: ["red", "blue", "yellow"],
        }],
    },
});
