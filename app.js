const UserModel = require('./model/user');

UserModel.find({}, function(err, doc) {
  if (err) {
    console.log(err);
  }
  console.log(doc);
});
