const express = require('express')
const router = express.Router()
const Dessert = require('../models/deserts')

//create dessert
router.post('/', async( req, res) => {
    const dessert = new Dessert(req.body)
    try {
        const savedDesserts = await dessert.save()
        res.status(201).json(savedDesserts)
    } catch(err) {
        res.status(500).json(err)
    }
})





module.exports = router