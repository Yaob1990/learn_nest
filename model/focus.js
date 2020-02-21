const mongoose = require('./db');

const FocusSchema = mongoose.Schema({
  redirect: {
    type: String,
    set(url) {
      if (!url) return url;
      if (url.indexOf('http://') !== 0) {
        url = 'http://' + url;
      }
      return url;
    },
    get(url) {
      url = url + 'get';
      return url;
    },
  },
});

let FocusModel = mongoose.model('User', FocusSchema, 'focus');

module.exports = FocusModel;
