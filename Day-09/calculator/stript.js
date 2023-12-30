function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    try {
        const result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLastChar() {
    const currentDisplay = document.getElementById('result').value;
    document.getElementById('result').value = currentDisplay.slice(0, -1);
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '/' || key === '*' || key === '-' || key === '+') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay('.');
    }else if(key === '=' ||  key === 'Enter'){
        calculate();
    }else if (key === 'Backspace') {
        deleteLastChar();
    }else{
        const err = document.createElement('h4');
        err.innerHTML= "<h4 class='text-center mt-3 text-danger'>Only numbers are acceptable</h4>";
        document.body.appendChild(err);
        setTimeout(() => {
            err.innerText = ''
        }, 2000)
    }
});
