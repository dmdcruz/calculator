let firstNumber = "";
let operator = "";
let secondNumber = "";

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".btnNumber");
const operatorButtons = document.querySelectorAll(".btnOperator");
const equalButton = document.querySelector(".btnEqual");
const clearButton = document.querySelector(".btnClear");

//Save operator in variable
operatorButtons.forEach(((operatorButton) => {
    operatorButton.addEventListener("click", () => {
        operator = operatorButton.textContent;
    });
}));



//Populate display fater click in one number
numberButtons.forEach(((numberButton) => {
    numberButton.addEventListener("click",() => {
    
        if (operator === "") {
            if (firstNumber === "") {
                firstNumber = numberButton.textContent;    
            } else {
                firstNumber = firstNumber + numberButton.textContent;
            }
            display.textContent = firstNumber;
        }
       
        if (operator !== "") {
            if (secondNumber === "") {
                secondNumber = numberButton.textContent;    
            } else {
                secondNumber = secondNumber + numberButton.textContent;
            }
            display.textContent = secondNumber;
        }
    });
}));

//trigger operate function when = is clicked
equalButton.addEventListener("click", () => {
    let result = operate(operator, firstNumber, secondNumber);
    display.textContent = result;
    firstNumber = result;
    operator = "";
});

//trigger clear function when clear btn is clicked;
clearButton.addEventListener("click" ,() => {
    clear();
    display.textContent = "";
});

//operate function
function operate(operator, firstNumber, secondNumber) {
    let result = 0;
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    
    if (operator == "+") {
        result = Add(firstNumber, secondNumber);
    }
    if (operator == "-") {
        result = Subtract(firstNumber, secondNumber);       
    }
    if (operator == "x") {
        result = Multiply(firstNumber, secondNumber);    
    }
    if (operator == "/") {
        result = Divide(firstNumber, secondNumber);
    }
    return result;
};
//function to perform addition
function Add(firstNumber,secondNumber) {
    return firstNumber + secondNumber;
};
//function to calculate subtraction
function Subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
};
//function to calculate multiplication
function Multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
};
//function to calculate division
function Divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber
};

//function to clear calculator memory
function clear() {
   firstNumber = "";
   operator = "";
   secondNumber = ""; 
}