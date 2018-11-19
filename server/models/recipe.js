const mongoose = require('mongoose');
const { GrainSchema } = require('./grain');

const RecipeSchema = new mongoose.Schema({
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
  },
  grains: [GrainSchema]
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = { Recipe };