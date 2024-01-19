const express = require("express");
const productRouter = express.Router();

const ProductController = require('../app/controllers/ProductController');

productRouter.get('/', ProductController.getAllProduct);
productRouter.get('/:id', ProductController.getProductById);
productRouter.post('/', ProductController.createProduct);
productRouter.put('/:id', ProductController.updateProduct);
productRouter.delete('/:id', ProductController.deleteProduct);

module.exports = productRouter;
