const express = require('express')
const products_router = require('./Endpoints/products/products_get.js')

const app = express()

const port = process.env.PORT || 3000

app.use('/products', products_router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})