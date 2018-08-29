const expect = require('chai').expect;
const product = require('./index');

describe('Product CRUD', () => {
    it('should get a product', async () => {
        let response = await product.get("prod20019");
        //console.log(response.data);
        expect(response.status).to.equal(200);
    
        // This also could be used -->
        // product.create().then((response) => {
        //     expect(response.status).to.equal(200);
    
        // }).catch((e) => {
        //     console.log(e);
        // })
    }).timeout(5000);
});



