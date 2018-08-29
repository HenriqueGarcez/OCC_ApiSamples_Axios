// Index.js

var product = require('./product');

//Create Product
// product.create().then((response) => {
//     console.log(response.status);
//     console.log(response.data);
// }).catch((e) => {
//     console.log(e);
// })

// const create = async () => { // This would work as well
//     let response = await product.create();
//     console.log(response.data);
// }
// create();

// Get Product
// product.get("prod20019").then((response) => {
//     console.log(response.status);
//     console.log(response.data);
// }).catch((e) => {
//     console.log(e);
// })

// // Delete Product
// product.delete("prod20013").then((response) => {
//      console.log(response.status); // Should get 204
//      console.log(response.data);
// }).catch((e) => {
//     console.log(e);
// })

// // Update Product
// product.update("prod20019").then((response) => {
//      console.log(response.status); // Should get 204
//      console.log(response.data);
// }).catch((e) => {
//     console.log(e);
// })