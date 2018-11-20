const express = require('express');
const router = express.Router();
const { mongoose } = require('../db/mongoose');
const _ = require('lodash');
const { ObjectID } = require('mongodb');
const { SHA256 } = require('crypto-js');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/user', auth, function(req, res, next) {
  userController.getAll().then((users) => {
    res.send({users});
  }, (err) => {
    res.status(400).send(err);
  });
});

router.get('/user/:email', function(req, res, next) {
    userController.find(req.params.email).then((user) => {
        res.send({user});
    }, (err) => {
        res.status(400).send(err);
    });
});

router.post('/user', (req, res, next) => {
    let body = _.pick(req.body, ['email','password', 'dateCreated']);
    body.password = SHA256(body.password).toString();
    body.dateCreated = new Date();
    userController.create(body).then((user) => {
      res.send({user});
    }, (err) => {
      res.status(404).send(err);
    });
});

module.exports = router;