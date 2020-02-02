const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodeapi', { userMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;