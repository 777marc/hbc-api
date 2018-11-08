const mongoose = require('mongoose');

const Recipe = mongoose.model('Recipe', {
  name: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  description: {
    type: String,
    minLength: 1,
    trim: true
  }
});

module.exports = { Recipe };