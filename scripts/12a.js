// const add = function (){
//     console.log(2+3);

// }
// add();
// add();

// function runTwice(fun) {
//     fun();
//     fun();
//   }

//   // Test it
//   runTwice(function() {
//     console.log('12b');
//   });

//   runTwice(add); // Should log 5 twice

// const buttonElement = document.querySelector(".button-start-stop");
// const changeText = function () {
//     buttonElement.innerHTML = "Loading!"
//     setTimeout(function () {

//         buttonElement.innerHTML = "Stop!"
//     }, 1000)
// }
// // setTimeout(function(){

// //     buttonElement.innerHTML="Stop!"
// // },1000)

// const cartButtonElement = document.querySelector(".cart");
// const cartResult = document.querySelector(".cart-result");
// let isAdded = false;
// const addToCart = function () {
//     if (!isAdded) {
//         cartResult.innerHTML = "Added."
//         isAdded = true;
//     }
//     else {
//         setTimeout(function () {
//             cartResult.innerHTML = '';
//         }, 1500)
//         isAdded = false;
//     }

// }

// let i =0;
// setInterval(function(){

//     document.title= `(${i})New messages`;
//     i++;

// },1000)
let count = 0;

const addOne = function () {
    count++;
    document.title = `(${count}) New messages`
}
const removeOne = function () {
    count--;
    if (count > 0) {

        document.title = `(${count}) New messages`


    } else {
        document.title = `App`
        count = 0;
        return;
    }


}   