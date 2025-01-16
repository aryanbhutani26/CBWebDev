let counter = 0
const display = document.querySelector("#counter")
function increment1() {
    counter++;
    // updateCounter();
    display.textContent = counter;
    
}
function decreament1(){
    counter--;
    display.textContent = counter;
    // updateCounter();
}

function resetButton(){
    counter = 0;
    display.textContent = counter;
    // updateCounter();

}



console.log(increment1());

