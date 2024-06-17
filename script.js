//your JS code here. If required.
function focusNext(currentInput) {
    if (currentInput.value.length === 1) {
        const nextInput = currentInput.nextElementSibling;
        if (nextInput) {
            nextInput.focus();
        }
    }
}

function handleBackspace(currentInput, event) {
    if (currentInput.value === '' && event.key === 'Backspace') {
        const previousInput = currentInput.previousElementSibling;
        if (previousInput) {
            previousInput.focus();
        }
    }
}