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
app.use(route)

app.use((err, req, res, next) => {
  handleError(err, res)
  console.log('Ini error')
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`)
})
