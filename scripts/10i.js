
let calculation = '';
function resetCalculation() {
    calculation = '';
    document.querySelector(".js-result").innerHTML = 0;

}
function updateCalculation(number) {
    calculation += number;
    document.querySelector(".js-result").innerHTML = calculation;
}


