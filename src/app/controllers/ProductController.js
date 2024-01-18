const Product = require('../models/Product');
const ProductService = require('../services/ProductService');

class ProductController {
    async getAllProduct(req, res) {
        const products = await ProductService.getAll();
        return res.json(products);
    }
    async createProduct(req, res) {
        const product = await ProductService.create(req.body);
        return res.json(product);
    }
    async updateProduct(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({message: "Product not found"});
        } else {
            return res.json(product);
        }
    }
    async deleteProduct(req, res) {
        const product = await ProductService.delete(req.params.id);
        if (!product) {
            return res.status(404).json({message: "Product not found"});
        } else {
            return res.json({message: "Delete successful"});
        }
    }
    async getProductById(req, res) {
        const product = await ProductService.getById(req.params.id);
        if (!product) {
            return res.status(404).json({message: "Product not found"});
        } else {
            return res.json(product);
        }
    }
};

module.exports = new ProductController();