const display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        if (display.value.trim() === "") {
            return;
        }

        // Only allow numbers and calculator operators
        if (!/^[0-9+\-*/.() ]+$/.test(display.value)) {
            throw new Error("Invalid input");
        }

        const result = Function(
            '"use strict"; return (' + display.value + ')'
        )();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid calculation");
        }

        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
