const express = require('express')
const router = express.Router()
const Products = require('../models/products')

//CREATE PRODUCT
router.post('/', async (req, res) => {
    const newProduct = new Products(req.body)
    try {
        const savedProduct = await newProduct.save()
        res.status(201).json(savedProduct)
    } catch(err) {
        res.status(500).json(err)
    }
})

//GET PRODUCT
router.get('/:id', async (req, res) => {
    const product = req.params.id
    try {
        const findProduct = await Products.findById(product)
        res.status(200).json(findProduct)
    } catch(err) {
        res.status(500).json(err)
    }
})
 // GET PRODUCTS
router.get('/', async (req, res) => {
    const qCategory = req.query.category
    try{
        let products;


        if(qCategory) {
            products = await Products.find({
                categories: {
                $in: [qCategory],
            }})
        } else {
            products = await Products.find().limit(8)
        }
        res.status(200).json(products)
    } 
    catch (err) {
        res.status(500).json(err)
    }
    
})

// UPDATE PRODUCT
router.put('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const updatedItem = await Products.findByIdAndUpdate(id, {
            $set: req.body
        },
        {new: true})
        res.status(201).json(updatedItem)
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE PRODUCT

router.delete('/:id', async (req, res) => {
    const itemId = req.params.id
    try {
        const deletedItem = await Products.findByIdAndDelete(itemId)
        res.status(200).json(deletedItem)
        console.log('deleted successfully')
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = router