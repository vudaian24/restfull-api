const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: {type:'string', default: ''},
    image: {type:'string', default: ''},
    description: {type:'string', default: ''},
});

module.exports = mongoose.model('Product', Product);