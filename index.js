const showCounterDisplay = document.getElementById("counter-display");
const showCounterIncrement = document.getElementById("counterIncrementBtn")
const showCounterDecrement = document.getElementById("counterDecrementBtn")


let showCounterDisplayValue = 0;

counterIncrementBtn.addEventListener('click', function(){
    showCounterDisplayValue += 1;
    console.log(showCounterDisplayValue)

})