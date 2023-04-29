const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

const user = require('./routes/user')
const desserts = require('./routes/deserts')
const products = require('./routes/products')
const { json } = require('body-parser')

//express set up
app.use(express.json())
app.use(cors())
//routes
app.use('/api/user', user)
app.use('/api/dessert', desserts)
app.use('/api/product', products)

mongoose.connect('mongodb://127.0.0.1:27017/food-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('food api is connected on mongodb localhost 27017'))
.catch((err) => console.log(`db encountered an error ${err}`))




app.listen(process.env.PORT || 8080, () => {
    try {
        console.log('api is listening')
    } catch(err) {
        console.log(err)
    }
})