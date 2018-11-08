const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { Recipe } = require('../models/recipe');

router.get('/recipe', function(req, res, next) {
  Recipe.find().then((recipes) => {
    res.send({recipes});
  }, (err) => {
    res.status(400).send({err});
  });
});

router.post('/recipe', (req, res, next) => {
  let body = _.pick(req.body, ['name','description']);

  let newRecipe = new Recipe(body);
  newRecipe.save().then((recipe) => {
    res.send(recipe);
  }, (err) => {
    res.status(404).send(err);
  });
});

module.exports = router;