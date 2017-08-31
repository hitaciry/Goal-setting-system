//server.js
'use strict'
//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//and create our instances
var app = express();
var router = express.Router();
//set our port to either a predetermined port number if you have set 
//it up, or 3001
var port = process.env.API_PORT || 3001;
//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});
//now we can set the route path & initialize the API
router.get('/', function (req, res) {
  res.json({
    message: 'API Initialized!'
  });
});
//root
//ztpWmH5&Eye%=9^#
mongoose.connect('mongodb://root:ztpWmH5&Eye%=9^#@cluster0-shard-00-00-a9myt.mongodb.net:27017,cluster0-shard-00-01-a9myt.mongodb.net:27017,cluster0-shard-00-02-a9myt.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')

