const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bookDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
// mongodb+srv://Root:Zizo1234@cluster0.tjgsv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority