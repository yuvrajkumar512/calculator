let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (firstOperand !== null && operator !== null) {
        calculateResult();
    }
    firstOperand = parseFloat(currentInput);
    operator = op;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    display.value = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput || '0';
}

function calculateResult() {
    let result;
    let secondOperand = parseFloat(currentInput);
    if (secondOperand === 0 && operator === '/') {
        alert('Cannot divide by zero');
        return;
    }
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    display.value = result;
    currentInput = result.toString();
    operator = null;
    firstOperand = null;
}
