const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum : ['ADMIN', 'USER'],
    default: 'USER'
  },
}, {
  version: false,
  timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);
