const axiConfig = require('./../utils/adminToken'); // Require Admin token Controller

// class Product { // Product as a Class -> Do it later!

//         constructor(displayName, listPrice){
//             this.displayName = displayName;
//             this.listPrice = listPrice;
//             this.desc = null;
//         }

// }

// Create basic Product
const createProduct = async () => {
    try {
        return await axiConfig({
            method: 'POST',
            rejectUnauthorized: false,
            url: `/ccadmin/v1/products`,
            headers: { 'X-CCAsset-Language': 'pt_BR' },
            data: {
                "properties": {
                    "displayName": "aquec1",
                    "active": true,
                    "listPrice": 55.0

                }
            }
        })
    } catch (e) {
        throw new Error(e.response.data.message);
    }
}

// Get Product
const getProduct = async (id) => {
    try {
        return await axiConfig({
            method: 'GET',
            rejectUnauthorized: false,
            url: `/ccadmin/v1/products/${id}`,
            headers: { 'X-CCAsset-Language': 'pt_BR' } // optional
        })
    } catch (e) {
        throw new Error(e.response.data.message);
    }
}

// Delete Product
const deleteProduct = async (id) => {
    try {
        return await axiConfig({
            method: 'DELETE',
            rejectUnauthorized: false,
            url: `/ccadmin/v1/products/${id}`,
            headers: { 'X-CCAsset-Language': 'pt_BR' }
        })
    } catch (e) {
        throw new Error(e.response.data.message);
    }
}



module.exports = {
    createProduct,
    getProduct,
    deleteProduct
}