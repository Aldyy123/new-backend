const app = require('express')()
const product = require('./product-router')
const user = require('./user-router')

app.get('/', (req, res) => res.send('Haloo ini'))
app.use('/products', product)
app.use('/users', user)

module.exports = app
