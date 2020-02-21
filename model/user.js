const mongoose = require('./db');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    uppercase: true,
  },
  sn: {
    type: String,
    index: true,
  },
  age: Number,
  status: Number,
});

let UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
