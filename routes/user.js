const express = require('express')
const router = express.Router()
const User = require('../models/user')


// new user creation
router.post('/', async (req, res) => {
    const newUser = new User({
        displayName: req.body.displayName,
        email: req.body.email
    })
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch(err) {
        res.status(500).json(err)
    }
})
//get all users
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find()
        res.status(200).json(allUsers)
    } catch(err) {
        console.log(err)
    }
})
//get a single user
router.get('/:id', async (req, res) => {
    const user = req.params.id
    try {
        const findUser = await User.findById(user, req.body)
        res.status(200).json(findUser)
    } catch(err) {
        console.log(err)
    }
})








module.exports = router