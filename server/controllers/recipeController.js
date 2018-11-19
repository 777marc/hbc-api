const { Recipe } = require('../models/recipe');

module.exports = {
    getAll: () => {
        return Recipe.find();
    },
    create: (body) => {
        let newRecipe = new Recipe(body);
        return newRecipe.save();
    }
}