const mongoose = require('mongoose')
const mongoConfig = require('../config/mongo.json')

mongoose.connect(mongoConfig.url, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected with mongo')
});

module.exports = mongoose

