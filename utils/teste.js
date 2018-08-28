const axiConfig = require('./adminToken');

// Token refresh test
const refresh = async () => {
    try{
        return await axiConfig({
            method: 'post',
            url: `/ccadmin/v1/refresh`
            })
        }catch(e){
            console.log(e.message);
        }
        }

// createProduct test
const createProduct = async () => {
        try{
            return await axiConfig({
                method: 'POST',
                rejectUnauthorized: false,
                url: `/ccadmin/v1/products`,
                headers: {'X-CCAsset-Language': 'pt_BR'},
                data: {
                    "catalogId": "cloudCatalog",
                    "categoryId": "rootCategory",
                    "properties": {
                      "longDescription": "loooool",
                      "nonreturnable": false,
                      "displayName": "lol",
                      "orderLimit": "100",
                      "description": "lololoool",
                      "height": "20",
                      "salePrice": 80,
                      "length": "20",
                      "active": true,
                      "weight": "20",
                      "productNumber": "p18456",
                      "taxCode": null,
                      "arrivalDate": "2014-03-16T18:30:00.000Z",
                      "width": "20",
                      "shippingSurcharge": null,
                      "listPrice": 100
                    }
                }
            })
        }catch(e){
            console.log(e.message);
        }     
        }

// createProduct().then((response) => {
//     console.log(response.data);
// }).catch((e) => {
//     console.log(e);
// });