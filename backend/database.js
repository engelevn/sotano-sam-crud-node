const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sotanosam')
  .then(() => console.log('DB conectada LOCAL'))
  .catch(err => console.error(err));
