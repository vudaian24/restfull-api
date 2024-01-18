const Product = require('../models/Product');

class ProductService {
    async getAll() {
        return await Product.find();
    };
    async getById(id) {
        return await Product.findById(id);
    };
    async create(product) {
        return await Product.create(product);
    };
    async update(id, product) {
        return await Product.findByIdAndUpdate(id, product, { new: true });
    };
    async delete(id) {
        return await Product.findByIdAndDelete(id);
    };
}

module.exports = new ProductService();