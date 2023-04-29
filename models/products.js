const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {type: String, require: true, },
    description: { type: String, require: true},
    image: { type: String, require: true},
    quantity: { type: Number, require: true},
    price: { type: Number, require: true},
    categories: { type: Array, require: true},
    sides: {type: Array},
    protein: { type: Array},
    drinks: {type: Array}
},
{timestamps: true})

module.exports = mongoose.model('Products', ProductSchema)