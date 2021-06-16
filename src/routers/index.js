const app = require('express')()
const product = require('./product-router')
const user = require('./user-router')

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.send('<h1>Welcome</h1>')
  res.end()
})
app.use('/products', product)
app.use('/users', user)

module.exports = app
