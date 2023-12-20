const express = require('express')
const products_router = require('./Endpoints/products/products_get.js')
const dotenv = require('dotenv').config()
const app = express()

const port = process.env.PORT || 3000

app.use('/products', products_router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



// a221a169-528f-4728-9e9d-1ef39410bf6c-3c138c76-b210-43b7-91f7-1dab79fd42c4:3ce9745f-99fa-4746-a7a5-2cb1c0d8115c