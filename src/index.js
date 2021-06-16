const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const route = require('./routers/index')
require('./models/database')
const { handleError } = require('./middlewares/errorHandle')
const compression = require('compression')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
app.use(route)

app.use((err, req, res, next) => {
  handleError(err, res)
  console.log('Ini error')
})

app.listen(8080)
