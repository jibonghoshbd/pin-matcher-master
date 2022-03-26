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




// https://web.programming-hero.com/web-4/video/web-4-27-6-use-event-bubble-to-create-calculator-and-clear

