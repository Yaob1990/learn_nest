const UserModel = require('./model/user');

// UserModel.find({}, function(err, doc) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(doc);
// });

const user = new UserModel({
  name: 'yao2   ',
  age: 1,
  sn:'12345',
  status: 2,
});
user.save(function(err) {
    if (err) {
      console.log(err);
      return;
    }
    UserModel.find({}, function(err, doc) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(doc);
    });
  },
);
