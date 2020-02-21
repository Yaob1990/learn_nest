const FocusModel = require('./model/focus');



// FocusModel.find({}, function(err, doc) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(doc);
// });

// set 用法
// const focus = new FocusModel({
//   redirect: 'www.baidu.com',
// });
// focus.save(function(err) {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     FocusModel.find({}, function(err, doc) {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log(doc);
//     });
//   },
// );

//get 用法
const focus2 = new FocusModel({
  redirect: 'www.baidu.com',
});
console.log(focus2.redirect)
