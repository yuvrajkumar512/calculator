const display = document.querySelector("input");

let expression = "";

function updateDisplay() {
    display.value = expression;
}

function calculate() {
    try {
        if (!expression) return;

        // Convert × and ÷ if your UI uses them
        let exp = expression
            .replace(/×/g, "*")
            .replace(/÷/g, "/");

        // Only allow calculator characters
        if (!/^[0-9+\-*/().%\s]+$/.test(exp)) {
            throw new Error("Invalid expression");
        }

        // Calculate
        let result = Function('"use strict"; return (' + exp + ')')();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid calculation");
        }

        expression = String(result);
        updateDisplay();

    } catch (error) {
        display.value = "Error";
        expression = "";
    }
}

function press(value) {
    expression += value;
    updateDisplay();
}

function clearCalculator() {
    expression = "";
    updateDisplay();
}

function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
}