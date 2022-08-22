const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://arsy:tryingdatabase@cluster1.rcp14.mongodb.net/ArsyDigicom?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(e => console.log(e))

module.exports = mongoose
