import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import '../data/backend-practice.js'

import { loadCart } from "../data/cart.js";

async function loadPage() {
    console.log('load page');

    await loadProductsFetch()
}
loadPage().then((value) => {

    console.log(value);
    console.log('next step');

})

Promise.all([
    loadProductsFetch()
    ,
    new Promise((resolve) => {
        loadCart(() => {
            resolve();

        });
    })

]).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
})


// const promise = new Promise((resolve) => {
//     console.log('start');

//     loadProducts(() => {
//         console.log('finished loading');

//         resolve();
//     })

// }).then(() => {
//     return new Promise((resolve) => {
//         loadCart(() => {
//             resolve();

//         });
//     })


// }).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// })

// loadProducts(() => {
//     loadCart(() => {

//         renderOrderSummary();
//         renderPaymentSummary();
//     })

// }); 
