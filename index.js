const showCounterDisplay = document.getElementById('counterDisplay');
const showCounterIncrement = document.getElementById("counterIncrementBtn")
const showCounterDecrement = document.getElementById("counterDecrementBtn")

let counterDisplayValue = 0;


counterIncrementBtn.addEventListener('click', function () {

    counterDisplayValue += 1
    counterDisplay.innerText = counterDisplayValue;

})

counterDecrementBtn.addEventListener('click', function () {

    counterDisplayValue -= 1
    counterDisplay.innerText = counterDisplayValue

})



