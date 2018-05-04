var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Hero = require('../models/Hero.js');

/* Get All Heroes. */
router.get('/', function(req, res, next) {
  Hero.find(function(err,heroes){
    if(err) return next(err);
    res.json(heroes);
  });
  
});

/* GET hero by id. */
router.get('/:id', function(req, res, next) {
  Hero.findById(req.params.id, function(err,hero){
    if(err) return next(err);
    res.json(hero);
  })
});


/* SAVE Hero */
router.post('/', function(req, res, next) {
  Hero.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Hero.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Hero.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
