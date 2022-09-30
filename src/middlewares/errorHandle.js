class ErrorHandler extends Error {
  constructor (statusCode, message) {
    super()
    this.statusCode = statusCode
    this.message = message
  }
}
const handleError = (err, res) => {
  const { statusCode, message } = err
  const code = statusCode || 500
  return res.status(code).json({
    status: 'error',
    code,
    message
  })
}

const handleSuccess = (result, res) => {
  return res.status(200).json({
    status: 'success',
    code: 200,
    result
  })
}
module.exports = { ErrorHandler, handleError, handleSuccess }
