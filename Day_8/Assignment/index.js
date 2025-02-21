let display = document.getElementById('display');
let currentInput = '';

function appendNumber(num) {
    if (display.innerText === '0') {
        display.innerText = num;
    } else {
        display.innerText += num;
    }
    currentInput += num;
}

function appendOperator(op) {
    if (currentInput.length > 0) {
        display.innerText += ` ${op} `;
        currentInput += op;
    }
}

function clearDisplay() {
    display.innerText = '0';
    currentInput = '';
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        display.innerText = result;
        currentInput = result.toString();
    } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
    }
}