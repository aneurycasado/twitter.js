var express = require('express');
var path = require('path');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.use('/public', function(req,res){
  var path = req.path;
  res.sendFile(path,{root:"./public"});
});

router.get('/', function (req,res,next) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
});

router.get('/users/:name/tweets/:id', function(req, res){
  var name = req.params.name;
  var id = parseInt(req.params.id);
  var tweet = tweetBank.find({id:id});
  res.render( 'index', {
    title: 'Twitter.js - Posts by '+name,
    tweets: tweet
  });
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find({name: name});
  // console.log(res.body);
  // res.body.name = name;
  res.render( 'index', {
    title: 'Twitter.js - Posts by '+name,
    tweets: tweets,
    showForm: true,
    name: name
  });
});

router.post('/submit', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  io.sockets.emit('new_tweet', {name: name, text: text});
  res.redirect('/');
});


module.exports = function(io) {

  return router;
};
