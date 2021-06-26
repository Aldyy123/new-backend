const app = require('express')()
const product = require('./product-router')
const blog = require('./blogs-router')

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.send('<h1>Welcome</h1>')
})
app.use('/products', product)
app.use('/blogs', blog)

module.exports = app
