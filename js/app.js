// get generate pin 
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin()
    }
}

function getGeneratePin() {
    const pin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
}

// handel key pad 
document.getElementById('key-pad').addEventListener('click', function (event) {
    const numberPad = event.target.innerText
    const numberInput = document.getElementById('number-input');
    if (isNaN(numberPad)) {
        if (numberPad === 'C') {
            numberInput.value = '';
        }
    } else {
        const previousNumber = numberInput.value;
        const currentNumber = previousNumber + numberPad;
        numberInput.value = currentNumber;
    }

})




// https://web.programming-hero.com/web-4/video/web-4-27-6-use-event-bubble-to-create-calculator-and-clear

