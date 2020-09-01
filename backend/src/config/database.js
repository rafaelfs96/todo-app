const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
mongoose.Promise = global.Promise

const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.smaai.gcp.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

module.exports = mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  family: 4
}).catch(() => process.exit(1))
