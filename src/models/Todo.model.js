const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
}, {
  version: false,
  timestamps: true,
});

module.exports = mongoose.model('Todo', TodoSchema);
