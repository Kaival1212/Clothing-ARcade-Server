const express = require('express')
const app = express()

app.get('/', async (req, res) => {
  const response = await fetch('https://product.gelatoapis.com/v3/catalogs', {headers: {'X-API-Key': process.env.GELATO_API_KEY}})
  const products_data = await response.json()
  res.send(products_data)
})

module.exports = app