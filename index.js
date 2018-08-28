// Index.js

var product = require('./product');

// Create Product
product.create().then((response) => {
    console.log(response.data);
}).catch((e) => {
    console.log(e);
})

// // Get Product
// product.get("prod20016").then((response) => {
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