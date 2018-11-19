const express = require('express');
const router = express.Router();
const { mongoose } = require('../db/mongoose');
const _ = require('lodash');
const grainController = require('../controllers/grainController');

router.get('/grains', function(req, res, next) {
  grainController.getAll().then((grains) => {
    res.send({grains});
  }, (err) => {
    res.status(400).send(err);
  });
});

router.post('/grains', (req, res, next) => {
    let body = _.pick(req.body, ['name']);
    grainController.create(body).then((grain) => {
      res.send({grain});
    }, (err) => {
      res.status(404).send(err);
    });
});

module.exports = router;