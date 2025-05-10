import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import '../data/backend-practice.js'

import { loadCart } from "../data/cart.js";

Promise.all([
    new Promise((resolve) => {
        console.log('start');

        loadProducts(() => {
            console.log('finished loading');

            resolve();
        })
    }),
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
