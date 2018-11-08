const express = require('express');
const router = express.Router();
const { mongoose } = require('../db/mongoose');
const _ = require('lodash');
const { User } = require('../models/user');
const { ObjectID } = require('mongodb');
const { SHA256 } = require('crypto-js');

router.get('/user', function(req, res, next) {
  User.find().then((users) => {
    res.send({users});
  }, (err) => {
    res.status(400).send(err);
  });
});

router.get('/user/:email', function(req, res, next) {
    User.find({ email: req.params.email }).then((user) => {
        res.send({user});
    }, (err) => {
        res.status(400).send(err);
    });
});

router.post('/user', (req, res, next) => {
    let body = _.pick(req.body, ['email','password']);
    body.password = SHA256(body.password).toString();
    let newUser = new User(body);
    newUser.save().then((user) => {
      res.send({user});
    }, (err) => {
      res.status(404).send(err);
    });
});

module.exports = router;