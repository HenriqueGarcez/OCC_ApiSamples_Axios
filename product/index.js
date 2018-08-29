var product = require('./product')

module.exports = {
  create: product.createProduct,
  get: product.getProduct,
  delete: product.deleteProduct,
  list: product.listProduct,
  update: product.updateProduct
}