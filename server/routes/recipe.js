const express = require('express');
const router = express.Router();
const _ = require('lodash');
const recipeController = require('../controllers/recipeController');

router.get('/recipe', function(req, res, next) {
  recipeController.getAll().then((recipes) => {
    res.send({recipes});
  }, (err) => {
    res.status(400).send({err});
  });
});

router.post('/recipe', (req, res, next) => {
  let body = _.pick(req.body, ['name','description', 'grains']);
  recipeController.create(body).then((recipe) => {
    res.send(recipe);
  }, (err) => {
    res.status(404).send(err);
  });
});

module.exports = router;