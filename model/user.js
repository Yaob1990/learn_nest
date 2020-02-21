const mongoose = require('./db');

const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  status: Number,
});

let UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
