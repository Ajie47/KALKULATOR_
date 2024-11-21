let display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function deleteLast() {
    display.textContent = display.textContent.slice(0, -1) || '0';
}

function inputValue(value) {
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function calculate() {
    try {
        let result = eval(display.textContent.replace('÷', '/').replace('×', '*'));
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}
